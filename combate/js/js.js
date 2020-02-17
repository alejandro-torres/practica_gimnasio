var api = 'https://pokeapi.co/api/v2/';
var api_pkmn = 'pokemon/';
var num_pkmn = 1;

document.getElementById('button1').onclick = function () {

	var num_pkm_rand = Math.floor((Math.random() * 151) + 1);

	num_pkmn = document.getElementById('text_field').value;

	var solicitud = api + api_pkmn + num_pkmn;
	var solicitud_2 = api + api_pkmn + num_pkm_rand;

	console.log(solicitud);
	console.log(solicitud_2);

	var nivel = Math.floor((Math.random() * 100) + 1);
	var nivel_foo = nivel + (Math.floor((Math.random() * 10) + 1));

	if(nivel_foo > 100){
		nivel_foo = 100;
	}

	fetch(solicitud)
		.then(function (res) {

			return res.json();
			console.log

		}).then(function (data) {

			var nombre = data['name'];
			var sprite = data['sprites']['back_default'];
			//['back_default']
			var moves = data['moves'];
			var lista_ataques=[];
			//console.log(moves);

			for (let i = 0; i < 4; i++) {
				var longitud = data['moves'].length;
				var r = Math.floor((Math.random()*longitud)+1);
				lista_ataques[i] = data['moves'][r]['move']['name'];
			}
			console.log(lista_ataques);
			document.getElementById('ataque_1').innerHTML = lista_ataques[0];
			document.getElementById('ataque_2').innerHTML = lista_ataques[1];
			document.getElementById('ataque_3').innerHTML = lista_ataques[2];
			document.getElementById('ataque_4').innerHTML = lista_ataques[3];
			document.getElementById('nombre').innerHTML = nombre;
			document.getElementById('imagen').src = sprite;
			document.getElementById('nivel').innerHTML = nivel;


			//document.cookie = 

		});

	fetch(solicitud_2)
		.then(function (res) {

			return res.json();

		}).then(function (data) {

			var nombre = data['name'];
			var sprite = data['sprites']['front_default'];
			//['back_default']
			document.getElementById('nombre_enemigo').innerHTML = nombre;
			document.getElementById('imagen_enemigo').src = sprite;
			document.getElementById('nivel_enemigo').innerHTML = nivel_foo;
			document.getElementById('foo_name').innerHTML = nombre;
		});

		document.getElementById('elegir').style.display = "none";
		document.getElementById('menu').style.display="block";
		document.getElementById('display_combat').style.display="block";
}

document.getElementById('luchar_btn').onclick = function(){
		document.getElementById('ataques').style.display = "block"
		document.getElementById('display_combat').style.display = "none"

}