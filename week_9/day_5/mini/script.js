


const fetchPokemon = () => {
	let rand = Math.floor((Math.random() * 150) + 1);
	const url = 'https://pokeapi.co/api/v2/pokemon/' + rand;
	fetch(url).then( res => {
		return res.json();
	})
	.then( data => {
		const pokemon = {};
		pokemon['name'] = data.name;
		pokemon['id'] = data.id;
		pokemon['height'] = data.height;
		pokemon['weight'] = data.weight;
		pokemon['type'] = data.types[1].type.name;
		pokemon['image'] = data.sprites['front_default'];
		console.log(pokemon);
		pokemon_Image = document.getElementById('pokemon_Image');
		pokemon_Image.setAttribute('src', pokemon['image']);
		pokemon_Image.removeAttribute("hidden");
		text = document.getElementById('name');
		text.innerText = pokemon['name'];
		size = document.getElementById('height');
		size.innerText = `Height: ${pokemon['height']}cm`;
		weightt = document.getElementById('weight');
		weightt.innerText = `Weight: ${pokemon['weight']}gr`;
		idNumber = document.getElementById('id');
		idNumber.innerText = `Pokemon # ${pokemon['id']}`;
		pokemonType = document.getElementById('type');
		pokemonType.innerText = `Type: ${pokemon['type']}`;

	}).catch(function() {
        console.log("Oh no! That Pokemon isn’t available…");
    });
};

const prevData = () => {
	let rand = Math.floor((Math.random() * 150) + 1);
	const url = 'https://pokeapi.co/api/v2/pokemon/' + rand;
	fetch(urla).then( res => {
		return res.json();
	})
	.then( data => {
		const pokemon = {};
		pokemon['name'] = data.name;
		pokemon['id'] = data.id;
		pokemon['height'] = data.height;
		pokemon['weight'] = data.weight;
		pokemon['type'] = data.types[1].type.name;
		pokemon['image'] = data.sprites['front_default'];
		console.log(pokemon);
		pokemon_Image = document.getElementById('pokemon_Image');
		pokemon_Image.setAttribute('src', pokemon['image']);
		pokemon_Image.removeAttribute("hidden");
		text = document.getElementById('name');
		text.innerText = pokemon['name'];
		size = document.getElementById('height');
		size.innerText = `Height: ${pokemon['height']}cm`;
		weightt = document.getElementById('weight');
		weightt.innerText = `Weight: ${pokemon['weight']}gr`;
		idNumber = document.getElementById('id');
		idNumber.innerText = `Pokemon # ${pokemon['id']}`;
		pokemonType = document.getElementById('type');
		pokemonType.innerText = `Type: ${pokemon['type']}`;

	}).catch(function() {
        console.log("Oh no! That Pokemon isn’t available…");
    });
};

const nextData = () => {
	let rand = Math.floor((Math.random() * 150) + 1);
	const url = 'https://pokeapi.co/api/v2/pokemon/' + rand;
	fetch(url).then( res => {
		return res.json();
	})
	.then( data => {
		const pokemon = {};
		pokemon['name'] = data.name;
		pokemon['id'] = data.id;
		pokemon['height'] = data.height;
		pokemon['weight'] = data.weight;
		pokemon['type'] = data.types[1].type.name;
		pokemon['image'] = data.sprites['front_default'];
		console.log(pokemon);
		pokemon_Image = document.getElementById('pokemon_Image');
		pokemon_Image.setAttribute('src', pokemon['image']);
		pokemon_Image.removeAttribute("hidden");
		text = document.getElementById('name');
		text.innerText = pokemon['name'];
		size = document.getElementById('height');
		size.innerText = `Height: ${pokemon['height']}cm`;
		weightt = document.getElementById('weight');
		weightt.innerText = `Weight: ${pokemon['weight']}gr`;
		idNumber = document.getElementById('id');
		idNumber.innerText = `Pokemon # ${pokemon['id']}`;
		pokemonType = document.getElementById('type');
		pokemonType.innerText = `Type: ${pokemon['type']}`;

	}).catch(function() {
        console.log("Oh no! That Pokemon isn’t available…");
    });
};