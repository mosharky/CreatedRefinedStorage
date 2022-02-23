onEvent('block.modification', event => {
    event.modify('refinedstorage:cable', block => {
        block.material = 'iron'
    })
})