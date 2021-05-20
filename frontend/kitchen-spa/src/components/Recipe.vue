<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title">Recipes
          <b-button icon-right="plus-thick" type="is-success" rounded @click="addRecipe" />
          <b-button icon-right="bowl-mix" type="is-info" rounded @click="pickRecipe" />
        </h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <b-message v-bind="chosenRecipe" title="Pick a recipe" v-model="isMessageActive" aria-close-label="Close message">
      <div v-if="chosenRecipe"> You can make {{ chosenRecipe.recipe_name }} today! </div>
      <div v-else> There is nothing you can make today </div>
      </b-message>
      <b-table :data="recipes" :loading="loading" :row-class="(row, index) => cookable(row) && 'is-success'">
            <!-- A virtual column -->
            <b-table-column field="id" label="ID" v-slot="data">
              {{ data.row.id }}
            </b-table-column>

            <!-- A custom formatted column -->
            <b-table-column field="recipe_name" label="Recipe Name" v-slot="data">
              {{ data.row.recipe_name }}
            </b-table-column>

            <b-table-column field="recipe_ingredients" label="Required Ingredients" v-slot="data">
              <b-taglist >
                <b-tag v-for="ingredient in data.row.ingredients" :key="ingredient" v-if="hasItem(ingredient)" size="is-small" type="is-success">{{ ingredient }}</b-tag>
                <b-tag v-for="ingredient in data.row.ingredients" :key="ingredient" v-if="!hasItem(ingredient)" size="is-small" type="is-danger">{{ ingredient }}</b-tag>
              </b-taglist>
            </b-table-column>

            <b-table-column field="recipe_optional_ingredients" label="Optional Ingredients" v-slot="data">
              <b-taglist>
                <b-tag v-for="ingredient in data.row.optional_ingredients" :key="ingredient" v-if="hasItem(ingredient)" size="is-small" type="is-success">{{ ingredient }}</b-tag>
                <b-tag v-for="ingredient in data.row.optional_ingredients" :key="ingredient" v-if="!hasItem(ingredient)" size="is-small" type="is-danger">{{ ingredient }}</b-tag>
              </b-taglist>
            </b-table-column>

            <b-table-column field="cooking_time" label="Cooking Time" v-slot="data">
              {{ data.row.cooking_time }} minutes
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
import { fetchRecipes, fetchItems } from '@/api'
import RecipeAction from '@/components/RecipeAction'
import RecipeModal from './RecipeModal.vue'
import { randomElement } from '@/utils'
export default {
  name: 'Recipe',
  data () {
    return {
      recipes: [],
      items: [],
      isRecipeModalActive: false,
      loading: false,
      isMessageActive: false,
      recipeFormProps: {
        recipe_id: -1,
        recipe_name: '',
        recipe_ingredients: [],
        recipe_optional_ingredients: [],
        cooking_time: -1,
        tags: [],
        updating: false
      },
      chosenRecipe: undefined
    }
  },
  computed: {

  },
  beforeMount() {
    this.getRecipes();
    this.getItems();
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
    },
    pickRecipe: function() {
      var cookable_recipe = [];
      for (var r of this.recipes) {
        if (this.cookable(r)) {
          cookable_recipe.push(r);
        }
      }
      this.isMessageActive = true;
      this.chosenRecipe = randomElement(cookable_recipe);
    },
    getItems: function() {
      setTimeout( () => {
        fetchItems().then(response => {
          this.items = response.data;
        });
      }, 500);
    },
    hasItem: function(item) {
      for (var i of this.items) {
        if (item.toLowerCase() === i.item_name.toLowerCase()) {
          return true;
        }
      }
      return false;
    },
    hasAllItems: function(ingredients) {
      for (var i of ingredients) {
        if (!this.hasItem(i)) {
          return false;
        }
      }
      return true;
    },
    hasNoItem: function(ingredients) {
      for (var i of ingredients) {
        if (this.hasItem(i)) {
          return false;
        }
      }
      return true;
    },
    cookable: function(row) {
      return this.hasAllItems(row.ingredients);
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

<style>
tr.is-success {
  background: #a7ff9b;
}
</style>