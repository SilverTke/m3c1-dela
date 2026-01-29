# 🎯 Desafío condiciones JavaScript

🎨 El desafío de condiciones del módulo "JavaScript para la web"
del curso de Desafío Latam "Full Stack JavaScript".

## 📋 Detalles

💻 Este proyecto es una pequeña página web interactiva
escrita en TypeScript (porque tengo conocimientos previos)
Consta de tres secciones:

1. **🐱 Toca el gato**:
   🖱️ Al hacer clic en la imagen del gato (`gato.png`) se alterna un borde
   🔴 rojo de 2 px. El estado se guarda en la variable `catHasBorder`.

2. **⭐ Stickers (máximo 10)**:
   📊 Se muestran tres stickers con sus respectivos campos numéricos.
   ⚡ El total de stickers se calcula en tiempo real cada vez que cambia
   cualquier input. Si la suma supera 10, el texto cambia a "Llevas
   demasiados stickers" ⚠️; de lo contrario muestra la cantidad exacta y
   ajusta la palabra "sticker" al plural si es necesario. ✅

3. **🔐 Contraseña de tres dígitos**:
   🔢 Tres `<select>` con valores del 1 al 9. Al hacer clic en "Ingresar" 👆
   se compara la combinación:
   - `911` → "Password 1 correcto" ✅
   - `714` → "Password 2 correcto" ✅
   - cualquier otra → "Password incorrecto" ❌

🚀 El código usa únicamente APIs del navegador 🌐 (querySelector,
addEventListener, etc.) y no depende de librerías externas 📦. El estilo
se mantiene mínimo: un grid de 3 columnas para los stickers 📏 y bordes
negros en inputs y selects ⬛.

## 💡 Aclaración: Sobre el uso de TypeScript

🧠 Tengo experiencia. Me gustan los tipos (y de todas formas solo los uso para
el `querySelector`). Pero esto _se puede_ lograr en JavaScript, y
los tipos se podrían usar en un editor 💻 (VSCode, por ejemplo) usando JSDoc.
El código para la foto del gato podría ser así:

```javascript
/**
* Gatito 🐱
* @type {HTMLImageElement}
*/
const cat = document.querySelector("img#catImg")
```
