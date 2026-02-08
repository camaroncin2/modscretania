ServerEvents.recipes(event => {
  event.shapeless(Item.of('kubejs:netherite_pick_3x3'), [
    'minecraft:netherite_pickaxe',
    'minecraft:obsidian',
    'minecraft:obsidian',
    'minecraft:obsidian'
  ])
})
ServerEvents.tags('item', event => {
  event.add('c:pickaxes', 'kubejs:netherite_pick_3x3')
})
BlockEvents.broken(event => {
  const item = event.player?.getMainHandItem()
  if (!item) return
  if (item.id !== 'kubejs:netherite_pick_3x3') return
  const pos = event.block.pos
  const look = event.player.getLookAngle()
  if (Math.abs(look.y) > 0.5) {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        if (dx === 0 && dz === 0) continue
        const p = BlockPos(pos.x + dx, pos.y, pos.z + dz)
        const b = event.level.getBlock(p)
        if (!b || b.id === 'minecraft:bedrock' || b.id === 'minecraft:end_portal_frame') continue
        event.level.destroyBlock(p, true)
      }
    }
  } else {
    if (Math.abs(look.x) > Math.abs(look.z)) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (dy === 0 && dz === 0) continue
          const p = BlockPos(pos.x, pos.y + dy, pos.z + dz)
          const b = event.level.getBlock(p)
          if (!b || b.id === 'minecraft:bedrock' || b.id === 'minecraft:end_portal_frame') continue
          event.level.destroyBlock(p, true)
        }
      }
    } else {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue
          const p = BlockPos(pos.x + dx, pos.y + dy, pos.z)
          const b = event.level.getBlock(p)
          if (!b || b.id === 'minecraft:bedrock' || b.id === 'minecraft:end_portal_frame') continue
          event.level.destroyBlock(p, true)
        }
      }
    }
  }
})
