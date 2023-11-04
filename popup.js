


function executeExtensionCode() {

/*-----------------------------SUGERENCIAS-----------------------------------------------------*/
  /*
  // Busca el elemento con la clase, atributo dir y contenido específicos
  
  var selector = 'span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.xo1l8bm.xi81zsa[dir="auto"]:contains("Sugerencia para ti")';
  
  // Busca el elemento en la página
  var elements = document.querySelector(selector);
  
  
  console.log("codigo ejecutandose");
  // Verifica si se encontraron elementos y elimina los elementos y sus 27 ancestros
  if (elements.length > 0) {
    console.log("sugerencia encontrada");
    var elementToRemove = elements[0];
  
    let parent = elementToRemove;
    for (let i = 0; i < 27 && parent; i++) {
      parent.remove(); // Elimina el ancestro actual
      parent = parent.parentElement; // Avanza al siguiente ancestro
    }
  } 
  */

/*-----------------------------ANUNCIOS-----------------------------------------------------*/

var startingHref = "/ads/about/"; // Reemplaza con las primeras letras del atributo href que deseas buscar

// Busca elementos que tengan la clase y el atributo href que comience con las primeras letras específicas
var elements2 = document.querySelectorAll(`[class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g xt0b8zv xo1l8bm"][href^="${startingHref}"]`);

// Elimina los elementos encontrados y sus 27 ancestros
elements2.forEach((element) => {
  let parent = element;
  for (let i = 0; i < 27 && parent; i++) {
    parent.remove(); // Elimina el ancestro actual
    parent = parent.parentElement; // Avanza al siguiente ancestro
  }
});

}

document.addEventListener("DOMContentLoaded", function() {
  // Espera a que la página se cargue completamente
  executeExtensionCode();
});
