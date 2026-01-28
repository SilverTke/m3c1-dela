// Es TypeScript, sí, pero apliqué las condiciones así que no importa
// No usé frameworks (solo Vite pero es nomás porque tengo conocimientos previos): esto es 100% vanilla :P
import "./style.css";
// El HTML base
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
 <main>
   <section>
     <h1>Toca el gato</h1>
     <img src="/gato.png" id="catImg">
   </section>
   <section>
     <h1>¡Stickers!</h1>
     <p>Puedes llevar hasta 10</p>
     <div class="stickers">
       <div class="sticker">
          <img src="/gopher.png" alt="Un gopher, la mascota de Go, con un corazón">
          <input type="number">
       </div>
       <div class="sticker">
         <img src="/ferris.png" alt="Ferris, la mascota de Rust, un cangrejo">
         <input type="number">
       </div>
      </div>
     <p id="stickerCount">Llevas 0 stickers</p>
   </section>
 </main> 
`;
// ¿El gato tiene borde?
let catHasBorder = false;
// ¿Cuántos stickers llevas?
let stickers = 0;
// La imagen del gato
const cat = document.querySelector<HTMLImageElement>("img#catImg")!;

// Cuando se le hace click al gato, este alternará su borde
cat.addEventListener("click", () => {
  catHasBorder = !catHasBorder;
  if (catHasBorder) {
    cat.style.border = "2px solid red";
  } else {
    cat.style.border = "0";
  }
});

// Obtiene todos los inputs dentro de los stickers
const inputs = document.querySelectorAll<HTMLInputElement>(".sticker input");

// El párrafo con el texto "Llevas X stickers"
const stickerCountP =
  document.querySelector<HTMLParagraphElement>("p#stickerCount")!;

// Se itera sobre los inputs
for (const input of inputs) {
  // "change" es un evento de "input"
  input.addEventListener("change", () => {
    /* 
       Tengo conocimientos previos de JavaScript, pero voy a explicar:
     - inputs no es un array, pero es iterable, por lo que puede ser convertido a uno,
       y Array.from hace eso (también funciona en JavaScript normal, siempre y cuando tu navegador sea
       moderno)
     - `reduce` es un método de Array, que combina los elementos de un array
       en uno solo basado en una función (y opcionalmente, un valor inicial).
       En este caso se usa un valor inicial de 0
     - La función de reduce suma el valor numérico de cada input (valueAsNumber) al acumulador,
       usando 0 como fallback si el input está vacío o no es un número válido
    */
    stickers = Array.from(inputs).reduce(
      (acc, it) => acc + (it.valueAsNumber || 0),
      0,
    );
    // Y aquí está la condición `if`
    if (stickers > 10) {
      stickerCountP.innerText = "Llevas demasiados stickers";
    } else {
      // String plantilla aquí (repito, tengo conocimientos previos)
      stickerCountP.textContent = `Llevas ${stickers} sticker${stickers !== 1 ? "s" : ""}`;
    }
  });
}
