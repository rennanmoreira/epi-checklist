<template>
<div>
    <ul>
        <li :class="{'checked': item.checked}" v-for="(item, index) in list" :key="`item${index}`" @click="checkItem(index)">
            {{item.name}}
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    getItems
} from '@/services/items';
import {
    Item,
    ItemResponse
} from '@/models/item';

export default Vue.extend({
    name: 'Home',
    data: () => ({
        list: [] as Item[]
    }),
    components: {},
    methods: {
        checkItem(index: number) {
            this.list[index].checked = !this.list[index].checked
        }
    },
    mounted() {
        getItems().then((response: ItemResponse) => {
            this.list = response.data
        })
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
