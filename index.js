function superbowlWin(array){
  let winningE = array.find(function(e) {return e.result === "W"})
  return !!winningE ? winningE.year : undefined
}
