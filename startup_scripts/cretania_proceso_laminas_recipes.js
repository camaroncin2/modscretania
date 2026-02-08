ServerEvents.recipes(event => {
  const minerals = [
    { id: 'iron', sheet: 'create:iron_sheet' },
    { id: 'gold', sheet: 'create:golden_sheet' },
    { id: 'copper', sheet: 'create:copper_sheet' }
  ];

  // 1. Crushing Coarse Dirt -> Residuos Impuros
  // Una sola receta que da los 3 con probabilidad
  event.recipes.create.crushing([
    Item.of(`kubejs:impure_iron_residue`).withChance(0.15),
    Item.of(`kubejs:impure_copper_residue`).withChance(0.15),
    Item.of(`kubejs:impure_gold_residue`).withChance(0.10),
    Item.of('minecraft:coarse_dirt').withChance(0.05) // Chance de recuperar tierra
  ], 'minecraft:coarse_dirt');

  minerals.forEach(mineral => {
    // 2. Splashing: Impuro -> Bruto
    event.recipes.create.splashing(
      `kubejs:crude_${mineral.id}`,
      `kubejs:impure_${mineral.id}_residue`
    );

    // 3. Blasting: Bruto -> Fundido
    event.blasting(
      `kubejs:molten_${mineral.id}`,
      `kubejs:crude_${mineral.id}`
    );

    // 4. Sequenced Assembly: Fundido -> Lámina Frágil
    event.recipes.create.sequenced_assembly([
      `kubejs:fragile_${mineral.id}_sheet`
    ], `kubejs:molten_${mineral.id}`, [
      event.recipes.create.pressing(`kubejs:incomplete_fragile_${mineral.id}_sheet`, `kubejs:incomplete_fragile_${mineral.id}_sheet`)
    ]).transitionalItem(`kubejs:incomplete_fragile_${mineral.id}_sheet`)
      .loops(4);

    // 5. Blasting: Lámina Frágil -> Lámina Calentada
    event.blasting(
      `kubejs:heated_${mineral.id}_sheet`,
      `kubejs:fragile_${mineral.id}_sheet`
    );

    // 6. Splashing: Lámina Calentada -> Lámina Final (Create)
    event.recipes.create.splashing(
      mineral.sheet,
      `kubejs:heated_${mineral.id}_sheet`
    );
  });
});
