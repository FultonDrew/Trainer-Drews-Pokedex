

var img = document.getElementById('img')
var hp = document.getElementById('hp')
var id = document.getElementById('id')
var attack = document.getElementById('attack')
var defense = document.getElementById('defense')
var abilities = document.getElementById('abilities')
var pokename = document.getElementById('pokename')
var metapodButton = document.getElementById('metapodButton')
var weezingButton = document.getElementById('weezingButton')
var tangelaButton = document.getElementById('tangelaButton')
var move1 = document.getElementById('move1')
var move2 = document.getElementById('move2')
var move3 = document.getElementById('move3')
var move4 = document.getElementById('move4')
var move5 = document.getElementById('move5')
var stat1 = document.getElementById('stat1')
var stat2 = document.getElementById('stat2')
var stat3 = document.getElementById('stat3')
var stat4 = document.getElementById('stat4')
var stat5 = document.getElementById('stat5')
var stat6 = document.getElementById('stat6')
var type = document.getElementById('type')


///////////Pokemon 1///////

var pokemenNumbers = [11,110,114];
var pokemen = [];



function initMetapod(i){
		$.ajax({url:"http://fizal.me/pokeapi/api/v2/id/"+pokemenNumbers[i]+".json",
	success: function(response){
		var metapod =  new Pokemon(response)
		pokemen.push(metapod)
		console.log(response)
	}
	})
}


class Pokemon{


constructor(x){
	this.x = x;
	this.createPokemon()
	console.log('firing')
}
createPokemon(){

	img.style.backgroundImage = "url("+ this.x.sprites.front_default + ")"
	img.style.backgroundSize = "100% 100%"
	pokename.innerHTML = "NAME:" + " " + this.x.name
	type.innerHTML = "TYPE:" + " " + this.x.types[0].type.name
	hp.innerHTML = "HP:" + " " + this.x.stats[5].base_stat
	defense.innerHTML = "DEFENSE:" + " " + this.x.stats[3].base_stat
	attack.innerHTML = "ATTACK:" + " " + this.x.stats[4].base_stat
	id.innerHTML = "ID:" + " " + this.x.id
	var pokeabil = ""
	for (var i=0; i<this.x.abilities.length;i++){
		if(i == this.x.abilities.length - 1){
			pokeabil += this.x.abilities[i].ability.name + "!"
		}else{
		pokeabil += this.x.abilities[i].ability.name +", "	
		}
		
	}
	abilities.innerHTML = "ABILITIES:" + " " + pokeabil
	move1.innerHTML = this.x.moves[0].move.name
	move2.innerHTML = this.x.moves[1].move.name
	move3.innerHTML = this.x.moves[2].move.name
	move4.innerHTML = this.x.moves[3].move.name
	move5.innerHTML = this.x.moves[4].move.name
	stat1.innerHTML = this.x.stats[0].stat.name + ":" + " " + this.x.stats[0].base_stat
	stat2.innerHTML = this.x.stats[1].stat.name + ":" + " " + this.x.stats[1].base_stat
	stat3.innerHTML = this.x.stats[2].stat.name + ":" + " " + this.x.stats[2].base_stat
	stat4.innerHTML = this.x.stats[3].stat.name + ":" + " " + this.x.stats[3].base_stat
	stat5.innerHTML = this.x.stats[4].stat.name + ":" + " " + this.x.stats[4].base_stat
	stat6.innerHTML = this.x.stats[5].stat.name + ":" + " " + this.x.stats[5].base_stat

}
}

initMetapod(0);
metapodButton.addEventListener("click", function(){initMetapod(0)}, false);


///////////Pokemon 2///////


weezingButton.addEventListener("click", function(){initMetapod(1)}, false);



// ///////////Pokemon 3///////



tangelaButton.addEventListener("click", function(){initMetapod(2)}, false);




/////collapsible menu

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
