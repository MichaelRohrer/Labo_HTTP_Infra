var Chance = require('chance');
var chance = new Chance();
var express = require('express');
var app = express();

var pokemons = ["Tortank", "Dracaufeu", "Forizarre", "Roucarnage", "Pikachu", 
	       "Nidoking", "Psykokwak", "Tadmorv", "Ectoplasma", "Electrode",
               "Ossatueur", "Kangourex", "Lokhlass", "Voltali", "Elector", 
               "Mew", "Dracolosse", "Mewtwo", "Sulfura", "Artikodin", "Ronflex"];
var attacks =  ["Tonnerre", "Griff", "Escive", "Metamorphose", "Psycho",
               "Detritus", "Vol", "Tunelle", "Hydrocanon", "Flamme",
               "Laser", "Charge", "Tranche", "LanceFlamme", "Berceuse"]; 

app.get('/', function(req, res) {
  res.send(generatePokemon());
});

app.listen(3000, function () {
  console.log('Accepting HTTP requests on port 3000');
});

function generatePokemon(){
  var numberOfMaster = chance.integer({
    min: 0,
    max: 10
  });
  console.log(numberOfMaster);
  var masters = [];
  for(var i = 0; i < numberOfMaster; i++) {
	masters.push({
	Maitre: chance.first(),
        Pokémon: pokemons[chance.natural({min: 0, max: 20})],
	Attaque: attacks[chance.natural({min: 0, max: 14})]
    });
  };
  console.log(masters);
  return JSON.stringify(masters,null,'\t');
}

