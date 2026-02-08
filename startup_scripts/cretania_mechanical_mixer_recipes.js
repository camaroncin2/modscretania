ServerEvents.recipes(event => {
  // 1. Batidor Mecánico (Mechanical Whisk)
  // Ingredientes: Lingote de Hierro + 4 Barras de Hierro (Deploying por etapas)
  
  // Etapa 1: Lingote -> 1 Aspa/Varilla
  event.recipes.create.deploying('kubejs:mechanical_whisk_1', ['minecraft:iron_ingot', 'createaddition:iron_rod']);
  
  // Etapa 2: 1 Aspa -> 2 Aspas
  event.recipes.create.deploying('kubejs:mechanical_whisk_2', ['kubejs:mechanical_whisk_1', 'createaddition:iron_rod']);
  
  // Etapa 3: 2 Aspas -> 3 Aspas
  event.recipes.create.deploying('kubejs:mechanical_whisk_3', ['kubejs:mechanical_whisk_2', 'createaddition:iron_rod']);
  
  // Etapa 4: 3 Aspas -> Batidor Mecánico Completo
  event.recipes.create.deploying('kubejs:mechanical_whisk', ['kubejs:mechanical_whisk_3', 'createaddition:iron_rod']);

  // 2. Batidor Forjado (Hot Mechanical Whisk)
  // Proceso: Blasting (Calentar Batidor Maleable)
  event.blasting(
    'kubejs:hot_mechanical_whisk',     // Output (Batidor Forjado)
    'kubejs:mechanical_whisk'          // Input (Batidor Maleable)
  );

  // 3. Batidor Templado (Mechanical Whisk)
  // Proceso: Splashing (Enfriar Batidor Forjado)
  event.recipes.create.splashing(
    'create:whisk',    // Output (Create Whisk)
    'kubejs:hot_mechanical_whisk'      // Input (Batidor Forjado)
  );

  // 4. Carcasa de Engranaje (Cogwheel Casing)
  // Ingredientes: Andesite Casing + Cogwheel (Deploying)
  event.recipes.create.deploying('kubejs:cogwheel_casing', ['create:andesite_casing', 'create:cogwheel']);

  // 5. Mezclador Mecánico (Mechanical Mixer)
  // Ingredientes: Cogwheel Casing + Create Whisk (Deploying)
  event.recipes.create.sequenced_assembly([
    'create:mechanical_mixer' // Output
  ], 'kubejs:cogwheel_casing', [ // Input base
    event.recipes.create.deploying('kubejs:cogwheel_casing', ['kubejs:cogwheel_casing', 'create:whisk'])
  ]).transitionalItem('kubejs:cogwheel_casing')
    .loops(1);
});
