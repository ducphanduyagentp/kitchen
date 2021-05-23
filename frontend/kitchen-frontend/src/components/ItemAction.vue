<template>
    <div class="buttons">
    <b-button @click="editItem(item)" icon-left="lead-pencil" type="is-info">Edit</b-button>
    <b-button @click="adjustItem(item, -1)" icon-left="minus-thick" type="is-warning">Use 1</b-button>
    <b-button @click="adjustItem(item, 1)" icon-left="plus-thick" type="is-success">Add 1</b-button>
    <b-button @click="removeItem(item)" icon-left="delete" type="is-danger">Remove</b-button>
    </div>
</template>

<script>
import ItemModal from '@/components/ItemModal'
import { removeItem as apiRemoveItem, updateItem as apiUpdateItem } from '@/api'
export default {
    methods: {
        editItem: function(item) {
            var updateFormProps = {
                item_id: item.id,
                item_name: item.item_name,
                item_type: item.item_type,
                quantity: item.quantity,
                unit: item.unit,
                updating: true
            }
            this.$emit('update:isItemModalActive', true);
            this.$emit('update:itemFormProps', updateFormProps);
        },
        adjustItem: function(item, by) {
            item.quantity += by;
            this.$store.dispatch('updateItem', { item: item });
            this.$emit('update:hasItemsChanged', true);
        },
        removeItem: function(item) {
            this.$store.dispatch('removeItem', { id: item.id });
            this.$emit('update:hasItemsChanged', true);
        }
    },
    props: ['item'],
    components: { ItemModal }
}
</script>
