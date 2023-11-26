
window.onload = function() {

  let array_who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let array_action = ['ate', 'peed', 'crushed', 'broke'];
  let array_what = ['my homework', 'the keys', 'the car'];
  let array_when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

  var randomword_who = array_who[Math.floor(Math.random() * array_who.length)];
  var randomword_action = array_action[Math.floor(Math.random() * array_action.length)];
  var randomword_what = array_what[Math.floor(Math.random() * array_what.length)];
  var randomword_when = array_when[Math.floor(Math.random() * array_when.length)];

  var random_sentence = randomword_who + " " + randomword_action + " " + randomword_what + " " + randomword_when;
  console.log(random_sentence);

  document.getElementById("excuse").innerHTML = random_sentence;

};