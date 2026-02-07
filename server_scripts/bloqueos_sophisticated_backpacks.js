ServerEvents.recipes(event => {
  const LIST = [
    'sophisticatedbackpacks:iron_backpack',
    'sophisticatedbackpacks:gold_backpack',
    'sophisticatedbackpacks:diamond_backpack',
    'sophisticatedbackpacks:netherite_backpack',
    'sophisticatedbackpacks:netherite_backpacks',
    'sophisticatedbackpacks:upgrade_base'
  ].map(s => s.toLowerCase())
  LIST.forEach(id => event.remove({ output: id }))
})
