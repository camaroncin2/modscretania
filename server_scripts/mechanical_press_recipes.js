ServerEvents.recipes(event => {
  event.remove({ output: 'create:mechanical_press' })
  event.remove({ id: 'kubejs:steel_coated_rod_rolling' })
  event.custom({
    type: 'createaddition:rolling',
    input: { item: 'kubejs:steel_coated_ingot' },
    result: { item: 'kubejs:steel_coated_rod', count: 2 }
  }).id('kubejs:steel_coated_rod_rolling')

  // Acero al Plomo Caliente (Mixer con lava)
  event.remove({ id: 'kubejs:hot_leaded_steel_mixing' })
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'kubejs:hot_raw_steel' },
      { item: 'kubejs:raw_lead' },
      { fluid: 'minecraft:lava', amount: 1000 }
    ],
    results: [
      { item: 'kubejs:hot_leaded_steel', count: 1 }
    ]
  }).id('kubejs:hot_leaded_steel_mixing')

  // Cabeza de Prensa Caliente (3 deployers con hammer mk1)
  event.remove({ id: 'kubejs:mechanical_press_head_heated_sequence' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:hot_leaded_steel' },
    loops: 1,
    results: [{ item: 'kubejs:mechanical_press_head_heated', count: 1 }],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:hot_leaded_steel' }, { item: 'kubejs:forge_hammer_mk1' }],
        results: [{ item: 'kubejs:hot_leaded_steel' }],
        keepHeldItem: true
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:hot_leaded_steel' }, { item: 'kubejs:forge_hammer_mk1' }],
        results: [{ item: 'kubejs:hot_leaded_steel' }],
        keepHeldItem: true
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:hot_leaded_steel' }, { item: 'kubejs:forge_hammer_mk1' }],
        results: [{ item: 'kubejs:hot_leaded_steel' }],
        keepHeldItem: true
      }
    ],
    transitionalItem: { item: 'kubejs:hot_leaded_steel' }
  }).id('kubejs:mechanical_press_head_heated_sequence')

  // Lavado: Caliente → Templado
  event.remove({ id: 'kubejs:mechanical_press_head_tempered_splash' })
  event.recipes.create.splashing(
    ['kubejs:mechanical_press_head_tempered'],
    'kubejs:mechanical_press_head_heated'
  ).id('kubejs:mechanical_press_head_tempered_splash')

  // Deployer final: Templado → Mecánica
  event.remove({ id: 'kubejs:mechanical_press_head_mech_deploy' })
  event.remove({ id: 'kubejs:mechanical_press_head_mech_sequence' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:mechanical_press_head_tempered' },
    loops: 1,
    results: [{ item: 'kubejs:mechanical_press_piston', count: 1 }],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:mechanical_press_head_tempered' },
          { item: 'kubejs:forge_hammer_mk1' }
        ],
        results: [
          { item: 'kubejs:mechanical_press_head_tempered' }
        ],
        keepHeldItem: true
      }
    ],
    transitionalItem: { item: 'kubejs:mechanical_press_head_tempered' }
  }).id('kubejs:mechanical_press_head_mech_sequence')
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
    ['#c:stripped_logs' , 'kubejs:coated_casing']
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
