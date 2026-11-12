#Lecture de HTTP

##reponse au question

    1. ### Requete users/1
        -methode: **GET**
        -code: **200**
        -Content-Type: ***application json***
        -nom de deux champ recu:***id***,***firstName***

    2. ### Requete users/99999
        -code: **404**(erreur du client dans la requete ou ce qui est demande n'a pas ete trouve) et **200**(reussite de operation d'affichage )

    3. ### classons en coté client et coté serveur
        ** coté client **
            -change la couleur d'un bouton au survol
            -efficher un message d'erreur sous un champ

        ** coté serveur **
            -enregistrer une note dans la base de données
            -verifierun mot de passe
            -decider qu'un utilisateur n'as pas droitde supprimer une note.

    4. ### Code et situation associer
        - 201: operation de creation reussi
        - 401, 404: erreur client
        - 500:erreur serveur
