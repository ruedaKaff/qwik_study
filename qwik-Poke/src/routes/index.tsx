import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal(1); //Primitivos , para complejos y coleeciones useStore

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-8xl">{pokemonId.value + 1}</span>
      {/* TODO: crear imagen del pokemon */}
      <div class="mt-2">
        <button class="btn btn-primary mr-2">Next </button>
        <button class="btn btn-primary">Previous</button>
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
