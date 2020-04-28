
function superbowlWin(record){

 let find = record.find(element => element.result === "W")

 return find ? find.year : undefined

}