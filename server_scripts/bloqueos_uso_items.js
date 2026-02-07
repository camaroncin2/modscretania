ItemEvents.rightClicked(event => {
  const ITEMS_BLOQUEADOS = [
    'minecraft:ender_eye'
  ]
  if (ITEMS_BLOQUEADOS.includes(event.item.id)) {
    event.cancel()
  }
})
BlockEvents.rightClicked(event => {
  const ITEMS_BLOQUEADOS = [
    'minecraft:ender_eye'
  ]
  if (event.item && ITEMS_BLOQUEADOS.includes(event.item.id)) {
    event.cancel()
  }
})
