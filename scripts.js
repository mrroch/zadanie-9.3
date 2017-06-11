//tekst początkowy
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

//wielkie litery
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

//tekst z zamianą słów
text = text.replace('Velociraptor', dinosaurUpperCased);

//podział tekstu
var textAfter = text.substr(0, text.length/2);

//tekst końcowy
console.log(textAfter);

