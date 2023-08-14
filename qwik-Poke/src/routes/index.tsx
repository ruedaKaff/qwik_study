import { $,component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemon/pokemon-image";


export default component$(() => {
  const pokemonId = useSignal(1); //Primitivos , para complejos y coleeciones useStore
  const showBack = useSignal(false);
  const showPoke = useSignal(false);


  const changePokemonID = $(( value:number ) =>{
    if ( (pokemonId.value + value ) <= 0 ) return;

    pokemonId.value += value;

  })
 
  return (

    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-8xl">{pokemonId}</span>
      
      
      <PokemonImage  id={pokemonId.value} backImage={showBack.value} isVisible={showPoke.value} ></PokemonImage>
       
      <div class="mt-8">
        <button onClick$={()=> changePokemonID(-1)} class="btn btn-primary mr-2">Previous </button>  

        <button onClick$={()=> changePokemonID(+1)} class="btn btn-primary mr-2">Next</button>

        <button onClick$={()=> showBack.value = !showBack.value } class="btn btn-primary mr-2">Turn back</button>
        
        <button onClick$={()=> showPoke.value = !showPoke.value } class="btn btn-primary ">Reveal</button>
      </div>
    </>
  );
  
});


export const head: DocumentHead = {
  title: "Poke Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site for first time ",
    },
  ],
};
