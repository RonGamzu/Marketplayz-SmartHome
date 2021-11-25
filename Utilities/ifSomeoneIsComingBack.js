function ifSomeoneIsComingBack(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].comingBack < 60) {
      return true;
    }
  }
  return false;
}
module.exports =ifSomeoneIsComingBack