const willhaben = require('willhaben')

willhaben.new()
    .keyword('rtx')
    .count(1000) // default is 1000
    .category(willhaben.getCategories.grafikkarten)
    .search().then(json => {
        console.log(json)
    })

