function calculate() {
  let currentDay = parseInt(cd.value.slice(8, 10), 10);
  // this is in string so converting int int at base 10

  let currentMonth = parseInt(cd.value.slice(5, 7), 10);

  let currentYear = parseInt(cd.value.slice(0, 4), 10);

  console.log("current date:-", currentYear, currentMonth, currentDay); //2023 3 16
  // console.log( cd.value.slice(0,4) ); //2023
  // console.log( cd.value.slice(5,7) ); //03
  // console.log( cd.value.slice(8,10) ); //16

  //========================================
  let birthDay = parseInt(dob.value.slice(8, 10), 10);

  let birthMonth = parseInt(dob.value.slice(5, 7), 10);

  let birthYear = parseInt(dob.value.slice(0, 4), 10);

  console.log("current DOB:-", birthYear, birthMonth, birthDay); //2023 3 16

  //   now we are substracting
  if (currentDay >= birthDay) {
    day = currentDay - birthDay;
  } else {
    day = currentDay + new Date(currentYear, currentMonth).getDate() - birthDay;
    //currentDay + carry - birthday
    currentMonth--;
    //current month sa 1increment because we have given carry
  }

  if (currentMonth >= birthMonth) {
    month = currentMonth - birthMonth;
  } else {
    month = currentMonth + 12 - birthMonth;
    currentYear--;
  }

  year = currentYear - birthYear;

  if (year < 0) {
    ageText.innerHTML = "SAHI DATE DALO";
  } else {
    ageText.innerHTML = year + " years, " + month + " month," + day + " days";
  }
}
