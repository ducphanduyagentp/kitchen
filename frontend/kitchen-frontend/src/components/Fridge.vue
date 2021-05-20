<template>
<div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title">The Fridge <b-button icon-right="plus-thick" type="is-success" rounded @click="addItem" /></h2>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <b-table :data="items" :loading="loading">
            <!-- A virtual column -->
            <b-table-column field="id" label="ID" v-slot="data">
              {{ data.row.id }}
            </b-table-column>

            <!-- A custom formatted column -->
            <b-table-column field="item_name" label="Item Name" v-slot="data">
              {{ data.row.item_name }}
              <div v-if="data.row.item_type && data.row.item_type.length > 0">
                <b-tag type="is-success"> {{ data.row.item_type }} </b-tag>
              </div>
            </b-table-column>

            <!-- A virtual composite column -->
            <b-table-column field="quantity_unit" label="Quantity" v-slot="data">
              {{ data.row.quantity }} {{ data.row.unit }}
            </b-table-column>

            <b-table-column field="item_action" label="Action" v-slot="data">
              <item-action
                v-bind:item="data.row" 
                v-on:update:isItemModalActive="isItemModalActive = $event"
                v-on:update:itemFormProps="itemFormProps = $event"
                v-on:update:hasItemsChanged="getItems()">
              </item-action>
            </b-table-column>
          </b-table>
    </div>
    <b-modal v-model="isItemModalActive" :on-cancel="resetItemModal">
      <item-modal 
        v-bind="itemFormProps" 
        v-on:update:isItemModalActive="isItemModalActive = $event" 
        v-on:update:hasItemsChanged="getItems()">
      </item-modal>
    </b-modal>
  </section>
</div>
</template>

<script>
import { fetchItems } from '@/api'
import ItemAction from '@/components/ItemAction'
import ItemModal from './ItemModal.vue'
export default {
  name: 'Fridge',
  data () {
    return {
      items: [],
      isItemModalActive: false,
      loading: false,
      itemFormProps: {
        item_id: -1,
        item_name: "",
        item_type: "",
        quantity: 0,
        unit: "",
        updating: false
      },
    }
  },
  beforeMount() {
    this.getItems();
  },
  components: { ItemAction, ItemModal },
  methods: {
    addItem: function() {
      this.resetItemModal();
      this.isItemModalActive = true;
    },
    resetItemModal: function() {
      this.itemFormProps = {
        item_id: -1,
        item_name: "",
        item_type: "",
        quantity: 0,
        unit: "",
        updating: false
      }
    },
    getItems: function() {
      this.loading = true;
      setTimeout( () => {
        fetchItems().then(response => {
          this.items = response.data;
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
