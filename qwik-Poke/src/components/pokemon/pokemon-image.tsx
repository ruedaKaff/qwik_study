import { $, component$, useSignal, useTask$ } from "@builder.io/qwik";

interface pokeProps {
  id: number;
  size?: number; ///Opcional
  backImage: boolean;
  isVisible: boolean;
}

export const PokemonImage = component$(
  ({ id, backImage = false, size = 200, isVisible }: pokeProps) => {
    const imageLoaded = useSignal(false);
    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
    });

    const validatedBack = (backImage: boolean) => {
      return backImage === false ? "/" : "/back/";
    };

    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {!imageLoaded.value && <span>Loading... </span>}

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${validatedBack(
            backImage
          )}${id}.png`}
          alt="pokemon Sprite"
          style={{ width: `${size}px` }}
          onLoad$={() => {
            // setTimeout(() => {
            imageLoaded.value = true;
            // }, 2000);
          }}
          class={[{
            'hidden': !imageLoaded.value,
            'brightness-0': !isVisible,
            
          }, 'transition-all']}
        />
      </div>
    );

    console.log(backImage);
  }
);
