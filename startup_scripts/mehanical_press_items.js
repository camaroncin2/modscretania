StartupEvents.registry('item', event => {
  event.create('steel_coated_rod').displayName('Varilla de Acero Revestido')
  event.create('coated_casing').displayName('Carcasa Revestida').maxStackSize(64).parentModel('kubejs:item/coated_casing')
})
