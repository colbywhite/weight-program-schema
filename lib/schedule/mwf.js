module.exports = (input, options = {}) => {
  const order = input.schedule.order,
    workouts = input.workouts,
    maxDays = options.maxDays || 42,
    sked = [];
  var i = 0

  while (sked.length < maxDays) {
    const currentDay = sked.length % 7
    if (currentDay!=1 && currentDay!=3 && currentDay!=5) {
      // rest days on days that aren't M, W, F
      sked.push('rest')
    } else {
      const nextUp = order[i % order.length]
      sked.push(workouts[nextUp])
      i++
    }
  }
  return sked;
}
