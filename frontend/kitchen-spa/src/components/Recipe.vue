<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title">Recipes <b-button icon-right="plus-thick" type="is-success" rounded @click="addRecipe" /></h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <b-table :data="recipes" :loading="loading">
            <!-- A virtual column -->
            <b-table-column field="id" label="ID" v-slot="data">
              {{ data.row.id }}
            </b-table-column>

            <!-- A custom formatted column -->
            <b-table-column field="recipe_name" label="Recipe Name" v-slot="data">
              {{ data.row.recipe_name }}
            </b-table-column>

            <b-table-column field="recipe_ingredients" label="Required Ingredients" v-slot="data">
              {{ data.row.ingredients.join(', ') }}
            </b-table-column>

            <b-table-column field="recipe_optional_ingredients" label="Optional Ingredients" v-slot="data">
              {{ data.row.optional_ingredients.join(', ') }}
            </b-table-column>

            <b-table-column field="tags" label="Tags" v-slot="data">
              {{ data.row.tags.join(', ') }}
            </b-table-column>

            <b-table-column field="recipe_action" label="Action" v-slot="data">
              <recipe-action
                v-bind:recipe="data.row" 
                v-on:update:isRecipeModalActive="isRecipeModalActive = $event"
                v-on:update:recipeFormProps="recipeFormProps = $event"
                v-on:update:hasRecipesChanged="getRecipes()">
              </recipe-action>
            </b-table-column>
          </b-table>
    </div>
    <b-modal v-model="isRecipeModalActive" :on-cancel="resetRecipeModal">
      <recipe-modal 
        v-bind="recipeFormProps" 
        v-on:update:isRecipeModalActive="isRecipeModalActive = $event" 
        v-on:update:hasRecipesChanged="getRecipes()">
      </recipe-modal>
    </b-modal>
  </section>
</div>
</template>

<script>
import { fetchRecipes } from '@/api'
import RecipeAction from '@/components/RecipeAction'
import RecipeModal from './RecipeModal.vue'
export default {
  name: 'Recipe',
  data () {
    return {
      recipes: [],
      isRecipeModalActive: false,
      loading: false,
      recipeFormProps: {
        recipe_id: -1,
        recipe_name: '',
        recipe_ingredients: [],
        recipe_optional_ingredients: [],
        cooking_time: -1,
        tags: [],
        updating: false
      },
    }
  },
  beforeMount() {
    this.getRecipes();
  },
  components: { RecipeAction, RecipeModal },
  methods: {
    addRecipe: function() {
      this.resetRecipeModal();
      this.isRecipeModalActive = true;
    },
    resetRecipeModal: function() {
      this.recipeFormProps = {
        recipe_id: -1,
        recipe_name: '',
        recipe_ingredients: [],
        recipe_optional_ingredients: [],
        cooking_time: -1,
        tags: [],
        updating: false
      }
    },
    getRecipes: function() {
      this.loading = true;
      setTimeout( () => {
        fetchRecipes().then(response => {
          this.recipes = response.data;
          this.loading = false;
        });
      }, 500);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
