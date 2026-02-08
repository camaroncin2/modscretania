ItemEvents.modification(event => {

  event.modify('kubejs:hot_raw_steel', item => {
    item.displayName = '§5§oAcero Incandescente'
  })

  event.modify('kubejs:steel_coated_ingot', item => {
    item.displayName = '§5§oLingote Revestido de Acero'
  })

  event.modify('kubejs:incomplete_drill_head', item => {
    item.displayName = '§5§oCabezal de Taladro Incompleto'
  })

  event.modify('kubejs:fragile_drill_head', item => {
    item.displayName = '§5§oCabezal de Taladro Frágil'
  })

  event.modify('kubejs:heated_drill_head', item => {
    item.displayName = '§5§oCabezal de Taladro Al Rojo Vivo'
  })

  event.modify('kubejs:tempered_drill_head', item => {
    item.displayName = '§5§oCabezal de Taladro Templado'
  })

  event.modify('create:mechanical_drill', item => {
    item.displayName = '§5§oTaladro Mecánico'
  })

})
