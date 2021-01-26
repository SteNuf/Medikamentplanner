"use strict";


// hinzufuegen() {
let medikamentenname_input = document.getElementById("medikamentenname");
medikamentenname_input.addEventListener("change", function (e) {
  console.log(this.value);
});

let input_wirkstoffname = document.getElementById("wirkstoffname");
input_wirkstoffname.addEventListener("change", e => {
  console.log(input_wirkstoffname.value);
});

let checkbox_morgens = document.getElementById("morgens");
checkbox_morgens.addEventListener("change", e => {
  console.log(checkbox_morgens.checked);
});

let checkbox_mittags = document.getElementById("mittags");
checkbox_mittags.addEventListener("change", e => {
  console.log(checkbox_mittags.value);
});

let checkbox_abends = document.getElementById("abends");
checkbox_abends.addEventListener("change", e => {
  console.log(checkbox_abends.value);
});

let checkbox_nachts = document.getElementById("nachts");
checkbox_nachts.addEventListener("change", e => {
  console.log(checkbox_nachts.value);
});

let input_einnahmeMorgens = document.getElementById("einnahmeMorgens");
input_einnahmeMorgens.addEventListener("change", e => {
  console.log(input_einnahmeMorgens.value);
})




// data.addEventListener("click", () => {
  // console.log(data);
// })
// }
