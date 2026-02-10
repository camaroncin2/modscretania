StartupEvents.registry('item', event => {
  event.create('steel_coated_rod').displayName('Varilla de Acero Revestido')
  event.create('coated_casing').displayName('Carcasa Revestida').maxStackSize(64).parentModel('kubejs:item/coated_casing')
  event.create('hot_leaded_steel').displayName('Acero al Plomo Caliente').maxStackSize(64).parentModel('kubejs:item/hot_leaded_steel')
})

StartupEvents.registry('block', event => {
  event.create('incomplete_press_casing_mk1').displayName('Carcasa de Prensa Incompleta').hardness(3.0).requiresTool(true)
  event.create('incomplete_press_casing_mk2').displayName('Carcasa de Prensa Incompleta').hardness(3.0).requiresTool(true)
  event.create('incomplete_press_casing_mk3').displayName('Carcasa de Prensa Incompleta').hardness(3.0).requiresTool(true)
  event.create('piston_extension_half').displayName('Mitad de Extensor').hardness(3.0).requiresTool(true)
  event.create('mechanical_press_head_heated').displayName('Cabeza de Prensa Caliente').hardness(3.0).requiresTool(true)
  event.create('mechanical_press_head_tempered').displayName('Cabeza de Prensa Templado').hardness(3.0).requiresTool(true)
  event.create('mechanical_press_piston').displayName('Cabeza de Prensa Mecánica').hardness(3.0).requiresTool(true)
})
