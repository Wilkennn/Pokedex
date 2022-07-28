import fetch from "node-fetch";

export class pokemonController{
     getDadosAsycn(){
        let pokemonsResult =  fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(response => response.json()) 
        return pokemonsResult
    }
    
    async getDadosPokemonSingleAsycn(pokemon){
        let pokemonSingleInformations = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(response => response.json())
        return pokemonSingleInformations
    }
    
    async showAllPokemonsAsycn(allPokemons){
        for (let index = 0; index < allPokemons.length; index++) {
            const div = document.createElement('div')
            const img = document.createElement('img')
            const p = document.createElement('p')
            const id = document.createElement('p')
    
            //Datas
            const uniqueInformationPokemon =  await getDadosPokemonSingle(allPokemons[index].name)
    
            //Classes
            div.classList.add('pokemon-box')
            p.classList.add('name-pokemon')
            id.classList.add('id-pokemon')
    
            //Set Contentent
            p.textContent = allPokemons[index].name
            id.textContent = "#" + uniqueInformationPokemon.id
            img.setAttribute("src",uniqueInformationPokemon.sprites.front_default)
    
            //Set first letter UpperCase
            p.textContent = p.textContent[0].toUpperCase() + p.textContent.substring(1)
            
            div.appendChild(img);
            div.appendChild(p)
            div.appendChild(id)
            divBox.appendChild(div)
        }
    }
    
    async detailsPokemonAsycn(){
        const pokemonsDivs = [...document.querySelectorAll('.pokemon-box')]
        pokemonsDivs.forEach((item,index) =>{
            item.addEventListener('click',(async()=>{
                let pokemon = item.children[1].textContent.toLowerCase()
                window.location.href = `details.html?informtionPokemon=${pokemon}`
            }))
        })
    }
    
    searchPokemonInput(){
        const input = document.querySelector('input')
        const divsPokemons = [...document.querySelectorAll('.name-pokemon')]
        input.addEventListener('keydown', () =>{
            let teste = divsPokemons.filter(d=>d.innerHTML == input.value);
        })
    }
}