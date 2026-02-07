ServerEvents.recipes(event => {
  const OUTPUTS = [
    'create:mechanical_crafter',
    'create:mechanical_arm',
    'create:blaze_burner',
    'create:schematicannon',
    'create:schematic_table',
    'create:smart_fluid_pipe',
    'create:fluid_valve',
    'create:cart_assembler'
  ].map(s => s.toLowerCase())
  OUTPUTS.forEach(id => event.remove({ output: id }))
  // Mantener tipos de recetas de Create para permitir cadenas controladas
})
