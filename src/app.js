function generadorDominios() {
  const direccion = {
    pronouns: ["the", "you", "lost", "our"],
    adjective: ["store", "town", "good", "suny"],
    nouns: ["console", "sell", "newpapper", "totonight"]
  };

  const dominio = [];

  for (let i = 0; i < direccion.pronouns.length; i++) {
    for (let j = 0; j < direccion.adjective.length; j++) {
      for (let k = 0; k < direccion.nouns.length; k++) {
        dominio.push(
          direccion.pronouns[i] +
            direccion.adjective[j] +
            direccion.nouns[k] +
            ".com"
        );
      }
    }
  }
  return dominio;
}
console.log(generadorDominios());
