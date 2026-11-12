import { readFile } from "node:fs/promises";
import {
  moyenneGenerale,
  admis,
  nomsFormates,
  effectifParFiliere,
  moyenneParFiliere,
  classementParNote,
  majNote,
} from "./etudiants.js";

const etudiants = JSON.parse(
  await readFile(new URL("../data/etudiants.json", import.meta.url), "utf8"),
);

// affichage
console.log("=== Partie D : données étudiants ===");
console.log("Moyenne générale :", moyenneGenerale(etudiants));
console.log("Admis :", admis(etudiants));
console.log("Noms formatés :", nomsFormates(etudiants));
console.log("Effectif par filière :", effectifParFiliere(etudiants));
console.log("Moyenne par filière :", moyenneParFiliere(etudiants));

const classement = classementParNote(etudiants);
console.log("Classement par note :", classement);

// classementParNote
const [premierOrigine] = etudiants;
const premierAvant = { ...premierOrigine };
classementParNote(etudiants);
console.log("--- Preuve 1 : classementParNote ---");
console.log(
  `Premier étudiant avant : ${premierAvant.prenom} ${premierAvant.nom}`,
);
console.log(
  `Premier étudiant après : ${etudiants[0].prenom} ${etudiants[0].nom}`,
);
console.log("Liste d'origine inchangée :", etudiants[0].id === premierAvant.id);

// majNote
const idCible = premierOrigine.id;
const ancien = etudiants.find(({ id }) => id === idCible);
const noteAvant = ancien.note;
const nouvelleListe = majNote(etudiants, idCible, 20);
const nouveau = nouvelleListe.find(({ id }) => id === idCible);
//affichage
console.log("--- Preuve 2 : majNote ---");
console.log("Ancien objet :", ancien);
console.log("Nouvel objet :", nouveau);
console.log("Objets différents (ancien !== nouveau) :", ancien !== nouveau);
console.log("Ancienne note inchangée :", ancien.note === noteAvant);
