function retr_post() {
    let code_postal = document.getElementById("code_postal").value.trim();
    let select = document.getElementById("communes");

    // Vider les options précédentes sauf la première
    select.innerHTML = '<option value="">-- Sélectionnez une commune --</option>';


    fetch('https://geo.api.gouv.fr/communes?codePostal=' + code_postal)
        .then(response => response.json())
        .then(json => {
            if (json.length === 0) {
                alert("Aucune commune trouvée pour ce code postal.");
                return;
            }

            // Ajouter chaque commune au menu déroulant
            json.forEach(commune => {
                let option = document.createElement("option");
                option.value = commune.nom;
                option.textContent = commune.nom;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Erreur API :", error);
            alert("Erreur lors de la récupération des données.");
        });
}
