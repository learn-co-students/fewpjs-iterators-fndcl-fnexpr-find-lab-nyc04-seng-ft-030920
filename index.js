const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(history) {
  let yearRecord = history.find((y) => {
    return y['result'] === "W"
  })
  if (yearRecord) {return yearRecord["year"]}
}