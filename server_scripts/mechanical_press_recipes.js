ServerEvents.recipes(event => {
  event.remove({ output: 'create:mechanical_press' })
  event.remove({ id: 'kubejs:steel_coated_rod_rolling' })
  event.custom({
    type: 'createaddition:rolling',
    input: { item: 'kubejs:steel_coated_ingot' },
    result: { item: 'kubejs:steel_coated_rod', count: 2 }
  }).id('kubejs:steel_coated_rod_rolling')

  event.remove({ id: 'kubejs:piston_extension_half_deploy' })
  event.recipes.create.deploying(
    'kubejs:piston_extension_half',
    ['#minecraft:planks', 'create:andesite_alloy']
  ).id('kubejs:piston_extension_half_deploy')

  event.remove({ id: 'kubejs:piston_extension_pole_deploy' })
  event.remove({ id: 'kubejs:piston_extension_pole_sequence' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:piston_extension_half' },
    loops: 1,
    results: [{ item: 'create:piston_extension_pole', count: 1 }],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:piston_extension_half' },
          { item: 'create:andesite_alloy' }
        ],
        results: [
          { item: 'kubejs:piston_extension_half' }
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:piston_extension_half' },
          { tag: 'minecraft:planks' }
        ],
        results: [
          { item: 'kubejs:piston_extension_half' }
        ]
      }
    ],
    transitionalItem: { item: 'kubejs:piston_extension_half' }
  }).id('kubejs:piston_extension_pole_sequence')

  event.remove({ id: 'kubejs:press_casing_mk1' })
  event.recipes.create.deploying(
    'kubejs:incomplete_press_casing_mk1',
    ['kubejs:coated_casing', '#c:stripped_logs']
  ).id('kubejs:press_casing_mk1')

  event.remove({ id: 'kubejs:press_casing_mk2' })
  event.recipes.create.deploying(
    'kubejs:incomplete_press_casing_mk2',
    ['kubejs:incomplete_press_casing_mk1', 'create:piston_extension_pole']
  ).id('kubejs:press_casing_mk2')

  event.remove({ id: 'kubejs:press_casing_mk3' })
  event.recipes.create.deploying(
    'kubejs:incomplete_press_casing_mk3',
    ['kubejs:incomplete_press_casing_mk2', 'create:shaft']
  ).id('kubejs:press_casing_mk3')

  event.remove({ id: 'kubejs:mechanical_press_assembly' })
  event.recipes.create.deploying(
    'create:mechanical_press',
    ['kubejs:incomplete_press_casing_mk3', 'kubejs:mechanical_press_piston']
  ).id('kubejs:mechanical_press_assembly')
})
