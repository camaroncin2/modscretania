ServerEvents.recipes(event => {

  event.remove({ output: 'create:mechanical_drill' })

  // Lingotes revestidos
  event.recipes.create.deploying(
    'kubejs:steel_coated_ingot_1',
    ['minecraft:iron_ingot', 'create_ironworks:steel_sheet']
  )

  event.recipes.create.deploying(
    'kubejs:steel_coated_ingot_2',
    ['kubejs:steel_coated_ingot_1', 'create_ironworks:steel_sheet']
  )
  event.recipes.create.deploying(
    'kubejs:steel_coated_ingot_3',
    ['kubejs:steel_coated_ingot_2', 'create_ironworks:steel_sheet']
  )

  // ===============================
  // SECUENCIA DE ENSAMBLAJE
  // ===============================



  event.remove({ id: 'kubejs:drill_head_incomplete_sequence' })

  event.custom({
    type: 'create:sequenced_assembly',

    ingredient: {
      item: 'minecraft:iron_ingot'
    },

    loops: 1,

    results: [
      {
        item: 'kubejs:incomplete_drill_head',
        count: 1
      }
    ],

    sequence: [
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_drill_head' },
          { item: 'kubejs:steel_coated_ingot_1' }
        ],
        results: [
          { item: 'kubejs:incomplete_drill_head' }
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_drill_head' },
          { item: 'kubejs:steel_coated_ingot_2' }
        ],
        results: [
          { item: 'kubejs:incomplete_drill_head' }
        ]
      },
      {
        type: 'create:deploying',
        ingredients: [
          { item: 'kubejs:incomplete_drill_head' },
          { item: 'kubejs:steel_coated_ingot_3' }
        ],
        results: [
          { item: 'kubejs:incomplete_drill_head' }
        ]
      }
    ],

    transitionalItem: {
      item: 'kubejs:incomplete_drill_head'
    }
  })
  .id('kubejs:drill_head_incomplete_sequence')






  // ===============================
  // PROCESO TÉRMICO
  // ===============================
event.blasting(
  'kubejs:heated_drill_head',
  'kubejs:incomplete_drill_head'
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
