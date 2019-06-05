exports.date = function date(){
  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY",
  "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]

  let currentDate = new Date();

  let todayDate = months[currentDate.getMonth()]+ " " + currentDate.getDate()+ ", " +
  currentDate.getFullYear();

  return todayDate;
}
