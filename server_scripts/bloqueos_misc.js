ServerEvents.recipes(event => {
  const LIST = [
    'minecraft:ender_eye',
    'minecraft:leather'
  ]
  LIST.forEach(id => event.remove({ output: id }))
})
