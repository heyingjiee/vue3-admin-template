export const getLoginTimeTip = () => {
  const hour = new Date().getHours()
  let tip = ''
  if (hour >= 0 && hour < 8) {
    tip = '早上'
  } else if (hour >= 8 && hour < 12) {
    tip = '上午'
  } else if (hour >= 12 && hour < 18) {
    tip = '下午'
  } else {
    tip = '晚上'
  }
  return tip
}
