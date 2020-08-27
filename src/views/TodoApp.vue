<template>
<div>
    <ul>
        <li :class="{'checked': item.checked}" v-for="(item, index) in items" :key="`item${index}`" @click="checkItem(index)">
            {{item.name}}
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    ItemState
} from '@/models/item';

export default Vue.extend({
    name: 'TodoApp',
    components: {},
    computed: {
        items: {
            get() {
                return this.$store.getters.items
            },
            set(value: ItemState) {
                this.$store.commit('setItems', value)
            },
        }
    },
    methods: {
        checkItem(index: number) {
            const updateChecked = this.items

            updateChecked[index].checked = !updateChecked[index].checked

            this.items = updateChecked
        }
    },
    mounted() {
        this.$store.dispatch('getItems')
    }
});
</script>

<style lang="scss" scoped>
ul {
    margin: 0px;
    padding: 0px;

    li {
        background: blue;
        color: white;
        cursor: poiter;

        &:hover {
            background: darkblue;
        }

        &.checked {
            text-decoration: line-through;
        }
    }
}
</style>
