// Scrivi un programma che stampi i numeri da 1 a 100.
// Ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var ul = document.getElementById("risultato");

for (var i = 1; i <= 100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {

    console.log("FizzBuzz");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("FizzBuzz"));
    ul.appendChild(li);

  } else if (i % 3 == 0) {

    console.log("Fizz");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Fizz"));
    ul.appendChild(li);

  } else if (i % 5 == 0) {

    console.log("Buzz");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Buzz"));
    ul.appendChild(li);

  } else {

    console.log(i);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(i));
    ul.appendChild(li);
    
  }

}
