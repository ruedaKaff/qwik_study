import { $, component$ } from "@builder.io/qwik";

interface pokeProps {
    id:number;
    size?: number; ///Opcional
    backImage: boolean ,
}

export const PokemonImage = component$(( { id, backImage = false, size=200 }:pokeProps ) => {

    const validatedBack = (backImage:boolean)=> {
       return backImage=== false ? "/" : "/back/";
    }

    return ( <img 
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${validatedBack(backImage)}${id}.png`} 
    alt="pokemon Sprite"
    style={{ width:`${size}px`}}
    />
     )
    
    console.log(backImage);
    
})