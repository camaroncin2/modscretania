ServerEvents.recipes(event => {
  const LIST = [
    'create_connected:vertical_six_way_gearbox',
    'create_connected:six_way_gearbox',
    'create_connected:vertical_brass_gearbox',
    'create_connected:brass_gearbox',
    'create_connected:vertical_parallel_gearbox',
    'create_connected:parallel_gearbox',
    'create_connected:brake',
    'create_connected:centrifugal_clutch',
    'create_connected:freewheel_clutch',
    'create_connected:inverted_clutch',
    'create_connected:inverted_gearshift',
    'create_connected:overstress_clutch',
    'create_connected:shear_pin',
    'create_connected:sequenced_pulse_generator',
    'create_connected:fan_splashing_catalyst',
    'create_connected:fan_blasting_catalyst',
    'create_connected:fan_smoking_catalyst',
    'create_connected:fan_haunting_catalyst'
  ].map(s => s.toLowerCase())
  LIST.forEach(id => event.remove({ output: id }))
})
