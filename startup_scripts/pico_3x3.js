StartupEvents.registry('item', event => {
  event.create('netherite_pick_3x3', 'pickaxe')
    .displayName('Pico 3x3 de Netherite')
    .unstackable()
    .tier('netherite')
    .parentModel('minecraft:item/netherite_pickaxe')
})
