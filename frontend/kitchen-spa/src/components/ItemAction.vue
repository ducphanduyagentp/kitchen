<template>
    <div class="buttons">
    <b-button @click="editItem(item)" icon-left="lead-pencil" type="is-info">Edit</b-button>
    <b-button @click="removeItem(item)" icon-left="delete" type="is-danger">Remove</b-button>
    </div>
</template>

<script>
import ItemModal from '@/components/ItemModal'
import { removeItem as apiRemoveItem } from '@/api'
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
        removeItem: function(item) {
            apiRemoveItem(item.id);
            this.$emit('update:hasItemsChanged', true);
        }
    },
    props: ['item'],
    components: { ItemModal }
}
</script>
