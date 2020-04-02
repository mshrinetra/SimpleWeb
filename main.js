window.addEventListener("load", displayDateAndTime);

function displayDateAndTime() {
  dateTime = new Date();
  console.log(dateTime);
  document.getElementById("date-time").innerHTML =
    "Current date time is " + dateTime;
}
