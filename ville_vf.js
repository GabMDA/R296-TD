function retr_post() {
    let select=document.getElementById("communes") // permet de récupérer le menu déroulant
    let code_postal = document.getElementById("code_postal").value;//récupère le code postal que l'utilisateur rentre
    select.innerHTML='<option value="">-- Sélectionnez une commune --</option>'; //vide le menu déroulant à chaque reload de la page
    fetch('https://geo.api.gouv.fr/communes?codePostal=' + code_postal) //requete get vers l'api
        .then((response) => response.json()) // conversion du resultat de la requete en json
        .then((json) => {  // le resultat se transforme en variable json
            console.log("Réponse API :", json); // affiche dans la console la réponse de l'api
           let data=json.map(commune=>`<option value="${commune.nom}">${commune.nom}</option>`).join(" ") // déclare une variable data qui va mapper chaque nom des communes présentes dans le json de l'api  via le .join
           select.innerHTML+=data // l'afficher dans le menu déroulant
           let insee=json.map(insee=>insee.code) // récupérer dans un tableau via une fonction flêchée et la méthode .map et .code qui permet de récupérer les valeurs du champs code insee de la réponse de l' API
            console.log(insee)
        })
        .catch((error) => {
            console.error("Erreur API :", error); // affiche dans la console le fail de l'interrogation de l'api
        });
        // récupérer depuis l'api le code INSEE      
}
