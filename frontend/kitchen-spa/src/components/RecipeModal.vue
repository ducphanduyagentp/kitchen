<template>
   <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Edit Recipe</p>
            <button
                type="button"
                class="delete"
                @click="$emit('update:isRecipeModalActive', false);"/>
        </header>

        <section class="modal-card-body">
            <b-field label="Recipe Name">
                <b-input
                    :value="l_recipe_name"
                    v-model="l_recipe_name"
                    placeholder="Recipe name"
                    required>
                </b-input>
            </b-field>

            <b-field label="Required Ingredients">
                <b-input
                    :value="l_recipe_ingredients"
                    v-model="l_recipe_ingredients"
                    placeholder="Requried Ingredients">
                </b-input>
            </b-field>

            <b-field label="Optional Ingredients">
                <b-input
                    :value="l_recipe_optional_ingredients"
                    v-model="l_recipe_optional_ingredients"
                    placeholder="Optional Ingredients">
                </b-input>
            </b-field>

            <b-field label="Cooking Time (minutes)">
                <b-input
                    :value="l_cooking_time"
                    v-model="l_cooking_time"
                    placeholder="Cooking Time"
                    type="number"
                    required>
                </b-input>
            </b-field>

            <b-field label="Tags">
                <b-input
                    :value="l_tags"
                    v-model="l_tags"
                    placeholder="Tags"
                    required>
                </b-input>
            </b-field>
        </section>

        <footer class="modal-card-foot">
            <b-button
                label="Close"
                @click="this.closeModal" />
            <b-button
                v-if="!updating"
                label="Add Recipe"
                type="is-primary" 
                @click="this.addRecipe" />
            <b-button
                v-else
                label="Update Recipe"
                type="is-primary" 
                @click="this.updateRecipe" />
        </footer>
    </div>
</template>

<script>
import { addRecipe as apiAddRecipe, updateRecipe as apiUpdateRecipe } from '@/api'
import { trimListSpace } from '@/utils'
export default {
    props: [ 'recipe_id', 'recipe_name', 'recipe_ingredients', 'recipe_optional_ingredients', 'cooking_time', 'tags', 'updating'],
    data() {
        return {
            l_recipe_id: this.recipe_id,
            l_recipe_name: this.recipe_name,
            l_recipe_ingredients: this.recipe_ingredients.join(', '),
            l_recipe_optional_ingredients: this.recipe_optional_ingredients.join(', '),
            l_cooking_time: this.cooking_time,
            l_tags: this.tags.join(', '),
            l_updating: this.updating
        }
    },
    methods: {
        addRecipe: function() {
            var recipe = {
                id: this.l_recipe_id,
                recipe_name: this.l_recipe_name,
                ingredients: trimListSpace(this.l_recipe_ingredients),
                optional_ingredients: trimListSpace(this.l_recipe_optional_ingredients),
                cooking_time: this.l_cooking_time,
                tags: trimListSpace(this.l_tags),
            }
            apiAddRecipe(recipe);
            this.$emit('update:hasRecipesChanged', true);
            this.closeModal();
        },
        updateRecipe: function() {
            var recipe = {
                id: this.l_recipe_id,
                recipe_name: this.l_recipe_name,
                ingredients: trimListSpace(this.l_recipe_ingredients),
                optional_ingredients: trimListSpace(this.l_recipe_optional_ingredients),
                cooking_time: this.l_cooking_time,
                tags: trimListSpace(this.l_tags),
            }
            apiUpdateRecipe(recipe);
            this.$emit('update:hasRecipesChanged', true);
            this.closeModal();
        },
        closeModal: function() {
            var updateFormProps = {
                recipe_id: -1,
                recipe_name: '',
                recipe_ingredients: [],
                recipe_optional_ingredients: [],
                cooking_time: -1,
                tags: [],
                updating: false
            }
            this.$emit('update:recipeFormProps', updateFormProps);
            this.$emit('update:isRecipeModalActive', false);
        }   
    }
}
</script>
