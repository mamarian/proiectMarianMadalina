let gifts = [
  "DFFG33X445322126ffXX 🎁",
  "XXNG33X445322126ffMX 🎁",
  "CARNNEI445322126ffXZ 🎁",
  "MoNN33X44e55rr26ffXX 🎁",
  "Ne pare rau, astazi nu ai fost norocos! 😿",
  "Poate data viitoare vei avea mai mult noroc! 😿",
  "5TTDGGDG5322126ffXDZ 🎁",
  "RUJ + BALSAM 💄 ",
  "LAC DE UNGHII 💅",
  "PARFUM FEMEI 🧖",
  "PARFUM CAMERA 😍",
  "PARFUM BARBATI 🤵",

];

var flag;
function newGift() {
 
if (flag) {
    alert("Ai generat deja un cod. Multumim pentru participare ! Poti ridica obiectul din cel mai apropiat magazin. Nu uita sa faci un printscreen inainte !"); 
  } else {
    flag = true;
     var randomNumber = Math.floor(Math.random() * gifts.length);
       document.getElementById("giftDisplay").innerHTML = gifts[randomNumber];
  }

  
   
}
