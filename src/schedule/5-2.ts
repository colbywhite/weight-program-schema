export function fiveTwo(input: any, options : Options = {}): any[] {
    const order = input.schedule.order,
      workouts = input.workouts,
      maxDays = options.maxDays || 42,
      sked: any[] = []
    var i: number = 0

    while (sked.length < maxDays) {
      const currentDay = sked.length % 7
      if (currentDay==0 || currentDay==6) {
        // rest days on Sat, Sun
        sked.push({rest: true})
      } else {
        const nextUp = order[i % order.length]
        sked.push(workouts[nextUp])
        i++
      }
    }
    return sked;
}





export interface Options {
  maxDays?: number
}
