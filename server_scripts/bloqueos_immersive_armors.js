ServerEvents.recipes(event => {
  const LIST = [
    'immersive_armors:divine_boots',
    'immersive_armors:divine_leggings',
    'immersive_armors:divine_chestplate',
    'immersive_armors:divine_helmet'
  ].map(s => s.toLowerCase())
  LIST.forEach(id => event.remove({ output: id }))
})
