ServerEvents.recipes(event => {
  const LIST = [
    'waystones:attuned_shard',
    'waystones:black_sharestone',
    'waystones:blue_sharestone',
    'waystones:brown_sharestone',
    'waystones:crumbling_attuned_shard',
    'waystones:cyan_sharestone',
    'waystones:deepslate_waystone',
    'waystones:end_stone_waystone',
    'waystones:gray_sharestone',
    'waystones:green_sharestone',
    'waystones:light_blue_sharestone',
    'waystones:light_gray_sharestone',
    'waystones:lime_sharestone',
    'waystones:magenta_sharestone',
    'waystones:mossy_waystone',
    'waystones:orange_sharestone',
    'waystones:pink_sharestone',
    'waystones:portstone',
    'waystones:purple_sharestone',
    'waystones:red_sharestone',
    'waystones:sandy_waystone',
    'waystones:scoped_sharestone',
    'waystones:sharestone',
    'waystones:warp_dust',
    'waystones:warp_plate',
    'waystones:warp_stone',
    'waystones:waystone',
    'waystones:white_sharestone',
    'waystones:yellow_sharestone'
  ].map(s => s.toLowerCase())
  const SEEN = {}
  LIST.forEach(id => {
    if (!SEEN[id]) {
      SEEN[id] = true
      event.remove({ output: id })
    }
  })
})
