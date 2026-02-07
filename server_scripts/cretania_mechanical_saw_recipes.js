ServerEvents.recipes(event => {
  // 1. Hoja Mecánica (Mechanical Blade)
  // Ingredientes: Lingote de Hierro + 4 Láminas de Hierro (Deploying por etapas)
  
  // Etapa 1: Lingote -> 1 Aspa
  event.recipes.create.deploying('kubejs:mechanical_blade_1', ['minecraft:iron_ingot', 'create:iron_sheet']);
  
  // Etapa 2: 1 Aspa -> 2 Aspas
  event.recipes.create.deploying('kubejs:mechanical_blade_2', ['kubejs:mechanical_blade_1', 'create:iron_sheet']);
  
  // Etapa 3: 2 Aspas -> 3 Aspas
  event.recipes.create.deploying('kubejs:mechanical_blade_3', ['kubejs:mechanical_blade_2', 'create:iron_sheet']);
  
  // Etapa 4: 3 Aspas -> Hoja Mecánica Completa
  event.recipes.create.deploying('kubejs:mechanical_blade', ['kubejs:mechanical_blade_3', 'create:iron_sheet']);

  // 2. Disco Frágil Prensado (Pressed Mechanical Blade)
  // Proceso: Pressing (Prensar Disco Maleable)
  event.recipes.create.pressing(
    'kubejs:pressed_mechanical_blade', // Output (Disco Frágil Prensado)
    'kubejs:mechanical_blade'          // Input
  );

  // 3. Disco Caliente (Hot Mechanical Blade)
  // Proceso: Blasting (Calentar Disco Frágil Prensado)
  event.blasting(
    'kubejs:hot_mechanical_blade',     // Output (Disco Caliente)
    'kubejs:pressed_mechanical_blade'  // Input (Disco Frágil Prensado)
  );

  // 4. Disco Caliente Prensado (Hot Pressed Mechanical Blade)
  // Proceso: Pressing (Prensar Disco Caliente)
  event.recipes.create.pressing(
    'kubejs:hot_pressed_mechanical_blade', // Output
    'kubejs:hot_mechanical_blade'          // Input
  );

  // 5. Disco Templado (Tempered Mechanical Blade)
  // Proceso: Splashing (Enfriar Disco Caliente Prensado)
  event.recipes.create.splashing(
    'kubejs:tempered_mechanical_blade',    // Output
    'kubejs:hot_pressed_mechanical_blade'  // Input
  );

  // 6. Sierra Mecánica (Mechanical Saw)
  // Ingredientes: Andesite Casing + Disco Templado (Deploying)
  event.recipes.create.sequenced_assembly([
    'create:mechanical_saw' // Output
  ], 'create:andesite_casing', [ // Input base
    event.recipes.create.deploying('create:andesite_casing', ['create:andesite_casing', 'kubejs:tempered_mechanical_blade'])
  ]).transitionalItem('create:andesite_casing')
    .loops(1);
});
