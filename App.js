function calculate() {
  let billAmount = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let people = document.getElementById("peopleamt").value;

  if (billAmount === "" || serviceQual == 0) {
    alert("Please enter values!");
    return;
  }

  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (billAmount * serviceQual) / people;
  total = Math.round(total);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
  calculate();
};
