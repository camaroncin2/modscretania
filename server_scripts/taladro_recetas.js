ServerEvents.recipes(event => {

  event.remove({ output: 'create:mechanical_drill' })

  event.remove({ id: 'kubejs:hot_raw_steel_mixing' })
  event.custom({
    type: 'create:mixing',
    ingredients: [
      { item: 'kubejs:crude_iron' },
      { item: 'create_ironworks:coal_dust' },
      { fluid: 'minecraft:lava', amount: 1000 }
    ],
    results: [
      { item: 'kubejs:hot_raw_steel', count: 1 }
    ]
  }).id('kubejs:hot_raw_steel_mixing')
  
  event.remove({ id: 'kubejs:steel_coated_ingot_sequence' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:hot_raw_steel' },
    loops: 1,
    results: [{ item: 'kubejs:steel_coated_ingot', count: 1 }],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:incomplete_coated_ingot' }, { item: 'kubejs:forge_hammer_mk1' }],
        results: [{ item: 'kubejs:incomplete_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:incomplete_coated_ingot' }, { item: 'kubejs:forge_hammer_mk1' }],
        results: [{ item: 'kubejs:incomplete_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:incomplete_coated_ingot' }, { item: 'kubejs:forge_hammer_mk1' }],
        results: [{ item: 'kubejs:incomplete_coated_ingot' }]
      }
    ],
    transitionalItem: { item: 'kubejs:incomplete_coated_ingot' }
  }).id('kubejs:steel_coated_ingot_sequence')

  // ===============================
  // SECUENCIA DE ENSAMBLAJE
  // ===============================



  event.remove({ id: 'kubejs:drill_head_sequence' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'kubejs:steel_coated_ingot' },
    loops: 1,
    results: [{ item: 'kubejs:fragile_drill_head', count: 1 }],
    sequence: [
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:steel_coated_ingot' }, { item: 'create:andesite_alloy' }],
        results: [{ item: 'kubejs:steel_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:steel_coated_ingot' }, { item: 'create:andesite_alloy' }],
        results: [{ item: 'kubejs:steel_coated_ingot' }]
      },
      {
        type: 'create:deploying',
        ingredients: [{ item: 'kubejs:steel_coated_ingot' }, { item: 'create:andesite_alloy' }],
        results: [{ item: 'kubejs:steel_coated_ingot' }]
      }
    ],
    transitionalItem: { item: 'kubejs:steel_coated_ingot' }
  }).id('kubejs:drill_head_sequence')






  // ===============================
  // PROCESO TÉRMICO
  // ===============================
event.blasting(
  'kubejs:heated_drill_head',
  'kubejs:fragile_drill_head'
)

event.recipes.create.splashing(
  ['kubejs:tempered_drill_head'],
  'kubejs:heated_drill_head'
)


  // ===============================
  // ENSAMBLAJE FINAL
  // ===============================
  event.recipes.create.deploying(
    'create:mechanical_drill',
    ['kubejs:tempered_drill_head', 'create:andesite_casing']
  )
})
