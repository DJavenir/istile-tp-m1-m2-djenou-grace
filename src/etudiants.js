const arrondir = (valeur) => Number(valeur.toFixed(2));

export function moyenneGenerale(liste) {
  if (liste.length === 0) {
    return 0;
  }
  const somme = liste.reduce((total, { note }) => total + note, 0);
  return arrondir(somme / liste.length);
}

export function admis(liste) {
  return liste.filter(({ note }) => note >= 10);
}

export function nomsFormates(liste) {
  return liste.map(({ prenom, nom }) => `${nom.toUpperCase()} ${prenom}`);
}

export function effectifParFiliere(liste) {
  return liste.reduce(
    (effectifs, { filiere }) => ({
      ...effectifs,
      [filiere]: (effectifs[filiere] ?? 0) + 1,
    }),
    {},
  );
}

export function moyenneParFiliere(liste) {
  const cumuls = liste.reduce((groupes, { filiere, note }) => {
    const { somme = 0, effectif = 0 } = groupes[filiere] ?? {};
    return {
      ...groupes,
      [filiere]: { somme: somme + note, effectif: effectif + 1 },
    };
  }, {});

  return Object.fromEntries(
    Object.entries(cumuls).map(([filiere, { somme, effectif }]) => [
      filiere,
      arrondir(somme / effectif),
    ]),
  );
}

export function classementParNote(liste) {
  return [...liste].sort((a, b) => b.note - a.note);
}

export function majNote(liste, id, note) {
  return liste.map((etudiant) =>
    etudiant.id === id ? { ...etudiant, note } : etudiant,
  );
}
