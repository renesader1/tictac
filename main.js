// Set the date we're counting down to
var countDownDate = new Date("Jul 2, 2023 14:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = `${numeros[days]} , ${numeros[hours]}:${numeros[minutes]}:${numeros[seconds]}`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

numeros = {
    0   : "ᚾᚢᛚᛚ ",
    1	  : "Éᚾ",
    2	  : "ᛏᛟ",	
    3	  : "ᛏᚱᛖ",
    4	  : "ᚠᛁᚱᛖ",	
    5	  : "ᚠᛖᛗ",	
    6	  : "ᛊᛖᚲᛊ",
    7	  : "ᛊᛃᚢ",	
    8	  : "Åᛏᛏᛖ",	
    9	  : "ᚾᛁ",	
    10	: "ᛏᛁ",
    11	: "ᛖᛚᛚᛖᚢᛖ ",	
    12	: "ᛏᛟᛚᚢ ",	
    13	: "ᛏᚱᛖᛏᛏᛖᚾ ",	
    14	: "ᚠᛃᛟᚱᛏᛖᚾ ",	
    15	: "ᚠᛖᛗᛏᛖᚾ ",	
    16	: "ᛊᛖᚲᛊᛏᛖᚾ ",	
    17	: "ᛊᛁᛏᛏᛖᚾ ",	  
    18	: "ᚨᛏᛏᛖᚾ ",	
    19	: "ᚾᛁᛏᛏᛖᚾ ",	
    20	: "ᛏᛃᚢᛖ ",	
    21	: "ᛏᛃᚢᛖÉᚾ ",	
    22	: "ᛏᛃᚢᛖᛏᛟ ",	
    23	: "ᛏᛃᚢᛖᛏᚱᛖ ",	
    24	: "ᛏᛃᚢᛖᚠᛁᚱᛖ ",	
    25	: "ᛏᛃᚢᛖᚠᛖᛗ ",	
    26	: "ᛏᛃᚢᛖᛊᛖᚲᛊ ",	
    27	: "ᛏᛃᚢᛖᛊᛃᚢ ",	
    28	: "ᛏᛃᚢᛖÅᛏᛏᛖ ",	
    29	: "ᛏᛃᚢᛖᚾᛁ ",	
    30	: "ᛏᚱᛖᛏᛏᛁ ",
    31	: "ᛏᚱᛖᛏᛏᛁᛖᚾ ",	
    32	: "ᛏᚱᛖᛏᛏᛁᛏᛟ ",	
    33	: "ᛏᚱᛖᛏᛏᛁᛏᚱᛖ ",	
    34	: "ᛏᚱᛖᛏᛏᛁᚠᛁᚱᛖ ",	
    35	: "ᛏᚱᛖᛏᛏᛁᚠᛖᛗ ",	
    36	: "ᛏᚱᛖᛏᛏᛁᛊᛖᚲᛊ ",	
    37	: "ᛏᚱᛖᛏᛏᛁᛊᛃᚢ ",	
    38	: "ᛏᚱᛖᛏᛏᛁÅᛏᛏᛖ ",	
    39	: "ᛏᚱᛖᛏᛏᛁᚾᛁ ",	
    40	: "ᚠᚢᚱᛏᛁ ",
    41	: "ᚠᚢᚱᛏᛁᛖᚾ ",	
    42	: "ᚠᚢᚱᛏᛁᛏᛟ ",	
    43	: "ᚠᚢᚱᛏᛁᛏᚱᛖ ",	
    44	: "ᚠᚢᚱᛏᛁᚠᛁᚱᛖ ",	
    45	: "ᚠᚢᚱᛏᛁᚠᛖᛗ ",	
    46	: "ᚠᚢᚱᛏᛁᛊᛖᚲᛊ ",	
    47	: "ᚠᚢᚱᛏᛁᛊᛃᚢ ",	
    48	: "ᚠᚢᚱᛏᛁÅᛏᛏᛖ ",	
    49	: "ᚠᚢᚱᛏᛁᚾᛁ ",	
    50	: "ᚠᛖᛗᛏᛁ ",	
    51	: "ᚠᛖᛗᛏᛁÉᚾ ",	
    52	: "ᚠᛖᛗᛏᛁᛏᛟ ",	
    53	: "ᚠᛖᛗᛏᛁᛏᚱᛖ ",	
    54	: "ᚠᛖᛗᛏᛁᚠᛁᚱᛖ ",	
    55	: "ᚠᛖᛗᛏᛁᚠᛖᛗ ",	
    56	: "ᚠᛖᛗᛏᛁᛊᛖᚲᛊ ",	
    57	: "ᚠᛖᛗᛏᛁᛊᛃᚢ ",	
    58	: "ᚠᛖᛗᛏᛁÅᛏᛏᛖ ",	
    59	: "ᚠᛖᛗᛏᛁᚾᛁ ",	
    60	: "ᛊᛖᚲᛊᛏᛁ",            
}