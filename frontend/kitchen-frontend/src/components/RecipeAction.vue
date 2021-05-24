<template>
    <div class="buttons">
    <b-button @click="editRecipe(recipe)" icon-left="lead-pencil" type="is-info">Edit</b-button>
    <b-button icon-left="plus-thick" type="is-success">Cook and add to Fridge</b-button>
    <b-button @click="removeRecipe(recipe)" icon-left="delete" type="is-danger">Remove</b-button>
    </div>
</template>

<script>
import RecipeModal from '@/components/RecipeModal'
import { removeRecipe as apiRemoveRecipe } from '@/api'
export default {
    methods: {
        editRecipe: function(recipe) {
            var updateFormProps = {
                recipe_id: recipe.id,
                recipe_name: recipe.recipe_name,
                recipe_ingredients: recipe.ingredients,
                recipe_optional_ingredients: recipe.optional_ingredients,
                cooking_time: recipe.cooking_time,
                tags: recipe.tags,
                updating: true
            }
            this.$emit('update:isRecipeModalActive', true);
            this.$emit('update:recipeFormProps', updateFormProps);
        },
        removeRecipe: function(recipe) {
            this.$store.dispatch('removeRecipe', { id: recipe.id });
            this.$emit('update:hasRecipesChanged', true);
        }
    },
    props: ['recipe'],
    components: { RecipeModal }
}
</script>
