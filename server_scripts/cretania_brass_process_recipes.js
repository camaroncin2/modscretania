ServerEvents.recipes(event => {
  // 1. Crushing Dirt -> Residuos de Plomo Impuro
  event.recipes.create.crushing([
    Item.of('kubejs:impure_lead_residue').withChance(0.25), // Probabilidad base (ajustable)
    Item.of('minecraft:dirt').withChance(0.3) // Recuperar tierra
  ], 'minecraft:dirt');

  // 2. Splashing: Residuos Impuros -> Plomo en Bruto
  event.recipes.create.splashing('kubejs:raw_lead', 'kubejs:impure_lead_residue');

  // 3. Mixing (Heated): Plomo en Bruto + 3 Cobre -> Cobre Maleable
  event.recipes.create.mixing('kubejs:malleable_copper', [
    'kubejs:raw_lead',
    '3x kubejs:crude_copper'
  ]).heated();

  // 4. Mixing (Heated): Tin Ingot + Zinc Ingot -> Zinc Adherible
  event.recipes.create.mixing('kubejs:adherable_zinc', [
    'create_ironworks:tin_ingot',
    'create:zinc_ingot'
  ]).heated();

  // 5. Mixing (Heated): Cobre Maleable + Zinc Adherible -> Latón Maleable
  event.recipes.create.mixing('kubejs:malleable_brass', [
    'kubejs:malleable_copper',
    'kubejs:adherable_zinc'
  ]).heated();

  // 6. Sequenced Assembly: Latón Maleable -> Brass Ingot
  // Herramienta: Forjador MK1 (No se consume)
  // Nota: Como queremos texturas diferentes en cada paso, NO usamos un loop.
  // Definimos explícitamente cada paso de la secuencia.
  
  event.recipes.create.sequenced_assembly([
    'create:brass_ingot' // Output Final
  ], 'kubejs:malleable_brass', [ // Input Base
    // Paso 1: Latón Maleable -> Latón Maleable (1)
    event.recipes.create.deploying('kubejs:malleable_brass_1', ['kubejs:malleable_brass', 'kubejs:forge_hammer_mk1']).keepHeldItem(),
    
    // Paso 2: Latón Maleable (1) -> Latón Maleable (2)
    event.recipes.create.deploying('kubejs:malleable_brass_2', ['kubejs:malleable_brass_1', 'kubejs:forge_hammer_mk1']).keepHeldItem(),
    
    // Paso 3: Latón Maleable (2) -> Brass Ingot
    event.recipes.create.deploying('create:brass_ingot', ['kubejs:malleable_brass_2', 'kubejs:forge_hammer_mk1']).keepHeldItem()
  ]).transitionalItem('kubejs:malleable_brass_1') // Item de transición visual
    .loops(1); // 1 Loop porque definimos los 3 pasos manualmente
});
