StartupEvents.registry('item', event => {
  event.create('steel_coated_rod').displayName('Varilla de Acero Revestido')
  event.create('coated_casing').displayName('Carcasa Revestida').maxStackSize(64).parentModel('kubejs:item/coated_casing')
  event.create('mechanical_press_piston').displayName('Piston de Prensa Mecánica').maxStackSize(64).parentModel('kubejs:item/mechanical_press_piston')
})

StartupEvents.registry('block', event => {
  event.create('incomplete_press_casing_mk1').displayName('Carcasa de Prensa Incompleta').material('metal').sound('metal').hardness(3.0).requiresTool(true)
  event.create('incomplete_press_casing_mk2').displayName('Carcasa de Prensa Incompleta').material('metal').sound('metal').hardness(3.0).requiresTool(true)
  event.create('incomplete_press_casing_mk3').displayName('Carcasa de Prensa Incompleta').material('metal').sound('metal').hardness(3.0).requiresTool(true)
  event.create('piston_extension_half').displayName('Mitad de Extensor')
})
