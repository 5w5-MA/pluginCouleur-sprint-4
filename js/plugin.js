const couleurBase = {
  bleu: "#13243c",
  blanc: "#e8e8e8",
  texte: "black",
  dropShadow: "rgba(255, 255, 255, 0.25)",
};

const couleur2 = {
  bleu: "white",
  blanc: "#13243c",
  texte: "white",
  dropShadow: "rgba(0, 0, 0, 0.25)",
};

function lesCouleursEnregistrer() {
  const bleuEnregistrer = localStorage.getItem("bleu");
  const blancEnregistrer = localStorage.getItem("blanc");
  const texteEnregistrer = localStorage.getItem("texte");
  const dropShadowEnregistrer = localStorage.getItem("dropShadow");

  return {
    bleu: bleuEnregistrer || couleurBase.bleu,
    blanc: blancEnregistrer || couleurBase.blanc,
    texte: texteEnregistrer || couleurBase.texte,
    dropShadow: dropShadowEnregistrer || couleurBase.dropShadow,
  };
}

function utiliserCouleur(bleu, blanc, texte, dropShadow) {
  document.documentElement.style.setProperty("--bleu", bleu);
  document.documentElement.style.setProperty("--blanc", blanc);
  document.documentElement.style.setProperty("--texte", texte);
  document.documentElement.style.setProperty("--drop-shadow", dropShadow);

  const canvasCacher = localStorage.getItem("canvasCacher") === "true";

  if (canvasCacher) {
    document.getElementById("canvas1").style.display = "none";
  } else {
    document.getElementById("canvas1").style.display = "";
  }
}

const { bleu, blanc, texte, dropShadow } = lesCouleursEnregistrer();
utiliserCouleur(bleu, blanc, texte, dropShadow);

const btnCouleur = document.getElementById("boutonCouleur");

let etatCouleur = bleu === couleurBase.bleu;

btnCouleur.addEventListener("click", () => {
  if (etatCouleur) {
    utiliserCouleur(
      couleur2.bleu,
      couleur2.blanc,
      couleur2.texte,
      couleur2.dropShadow
    );
    document.getElementById("canvas1").style.display = "none";
    localStorage.setItem("canvasCacher", "true");
    localStorage.setItem("bleu", couleur2.bleu);
    localStorage.setItem("blanc", couleur2.blanc);
    localStorage.setItem("texte", couleur2.texte);
    localStorage.setItem("dropShadow", couleur2.dropShadow);
  } else {
    utiliserCouleur(
      couleurBase.bleu,
      couleurBase.blanc,
      couleurBase.texte,
      couleurBase.dropShadow
    );
    document.getElementById("canvas1").style.display = "";
    localStorage.setItem("canvasCacher", "false");
    localStorage.setItem("bleu", couleurBase.bleu);
    localStorage.setItem("blanc", couleurBase.blanc);
    localStorage.setItem("texte", couleurBase.texte);
    localStorage.setItem("dropShadow", couleurBase.dropShadow);
  }

  etatCouleur = !etatCouleur;
});
