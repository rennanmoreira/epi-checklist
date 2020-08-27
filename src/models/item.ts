
class Item {
    name = ''
    checked = false
}

class ItemState {
    items = [] as Item[]
}

class ItemResponse {
    data = [] as Item[]
}

export {
    Item,
    ItemState,
    ItemResponse
}