<template>
   <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Edit Item</p>
            <button
                type="button"
                class="delete"
                @click="$emit('update:isItemModalActive', false);"/>
        </header>

        <section class="modal-card-body">
            <b-field label="Item Name">
                <b-input
                    :value="l_item_name"
                    v-model="l_item_name"
                    placeholder="Item name"
                    required>
                </b-input>
            </b-field>

            <b-field label="Item Type">
                <b-input
                    :value="l_item_type"
                    v-model="l_item_type"
                    placeholder="Item type">
                </b-input>
            </b-field>

            <b-field label="Quantity">
                <b-input
                    :value="l_quantity"
                    v-model="l_quantity"
                    placeholder="Quantity"
                    type="number"
                    required>
                </b-input>
            </b-field>

            <b-field label="Unit">
                <b-input
                    :value="l_unit"
                    v-model="l_unit"
                    placeholder="Unit"
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
                label="Add Item"
                type="is-primary" 
                @click="this.addItem" />
            <b-button
                v-else
                label="Update Item"
                type="is-primary" 
                @click="this.updateItem" />
        </footer>
    </div>
</template>

<script>
import { addItem as apiAddItem, updateItem as apiUpdateItem } from '@/api'
export default {
    props: [ 'item_id', 'item_name', 'item_type', 'quantity', 'unit', 'updating'],
    data() {
        return {
            l_item_id: this.item_id,
            l_item_name: this.item_name,
            l_item_type: this.item_type,
            l_quantity: this.quantity,
            l_unit: this.unit,
            l_updating: this.updating
        }
    },
    methods: {
        addItem: function() {
            var item = {
                item_name: this.l_item_name,
                item_type: this.l_item_type,
                quantity: this.l_quantity,
                unit: this.l_unit,
            }
            apiAddItem(item);
            this.$emit('update:hasItemsChanged', true);
            this.closeModal();
        },
        updateItem: function() {
            var item = {
                id: this.l_item_id,
                item_name: this.l_item_name,
                item_type: this.l_item_type,
                quantity: this.l_quantity,
                unit: this.l_unit,
            }
            apiUpdateItem(item);
            this.$emit('update:hasItemsChanged', true);
            this.closeModal();
        },
        closeModal: function() {
            var updateFormProps = {
                item_id: -1,
                item_name: "",
                item_type: "",
                quantity: 0,
                unit: "",
                updating: false
            }
            this.$emit('update:itemFormProps', updateFormProps);
            this.$emit('update:isItemModalActive', false);
        }   
    }
}
</script>
