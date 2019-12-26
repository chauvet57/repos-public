let films = [
    { id: 0, name: "Deadpool", years: 2016, authors: "Tim Miller" },
    { id: 1, name: "Spiderman", years: 2002, authors: "Sam Raimi" },
    { id: 2, name: "Scream", years: 1996, authors: "Wes Craven" },
    { id: 3, name: "Armageddon", years: 1998, authors: "Michael Bay" },
    { id: 4, name: "Taxi 1", years: 1998, authors: "Luc Besson" },
    { id: 5, name: "Narnia 1", years: 2005, authors: "Andrew Adamson" },
    { id: 6, name: "Bienvenue chez les Ch'tis", years: 2008, authors: "Dany Boon" },
    { id: 7, name: "Zootopie", years: 2016, authors: "Byron Howard" },
    { id: 8, name: "Tarzan", years: 2000, authors: "Kevin Lima" }

];
/**
 * Liste des evenements disponible.
 */

let TriNameUp = document.getElementById("trierTitreUp");
TriNameUp.addEventListener("click", function () { TriUp("name") });
let TriNameDown = document.getElementById("trierTitreDown");
TriNameDown.addEventListener("click", function () { TriDown("name") });
let TriAnneeUp = document.getElementById("trierAnneeUp");
TriAnneeUp.addEventListener("click", function () { TriDown("year") });
let TriAnneeDown = document.getElementById("trierAnneeDown");
TriAnneeDown.addEventListener("click", function () { TriUp("year") });
let ShowAdd = document.getElementById("ajouter1");
ShowAdd.addEventListener("click", function () { showAdd() });
let RemoveAdd = document.getElementById("btnRemoveAdd");
RemoveAdd.addEventListener("click", function () { removeAdd() });
let Ajout = document.getElementById("btnAjout");
Ajout.addEventListener("click", function () { requisAjout("titre", "annee") });
let Rechercher = document.getElementById("inputRechercher");
Rechercher.addEventListener("keyup", function () { rechercherDansMediatheque() });
let ListeFilms = document.getElementById("videotheque");
ListeFilms.onload = () => { CreationCard(films) };

/**
 * Genère les cards film dynamiquement
 * @function CreationCard ()
 */
function CreationCard(films) {

    for (let index = 0; index < films.length; index++) {

        getConfig(films[index].id, films[index].name, films[index].years)

        let divFilms = document.getElementById("ListeFilms");

        // crée un nouvel élément div structure de la card
        let filmCol = document.createElement("div");
        filmCol.className = "col s12 m4 l2";
        filmCol.id = "card" + films[index].id;
        filmCol.title = films[index].name;
        let newFilm = document.createElement("div");
        newFilm.className = "card cardEdit";
        newFilm.id = films[index].id;

        // crée élement image
        let imgFilm = document.createElement("div");
        imgFilm.className = "card-image waves-effect waves-block waves-light";
        let img = document.createElement("img");
        img.className = "activator";
        img.id = "idImgFilm" + films[index].id;
        img.src = "";

        // front de la card
        let filmFront = document.createElement("div");
        filmFront.className = "card-content";
        let spanFront = document.createElement("span");
        spanFront.className = "card-title activator grey-text text-darken-4";
        spanFront.innerText = films[index].name;
        let bFront = document.createElement("b");
        bFront.id = "b" + films[index].id;
        bFront.innerText = "";
        let iFront = document.createElement("i");
        iFront.className = "material-icons right";
        iFront.innerText = "more_vert";

        //back de la card
        let filmBack = document.createElement("div");
        filmBack.className = "card-reveal ";
        let headerBack = document.createElement("div");
        headerBack.className = "headerCard"
        let spanBack = document.createElement("span");
        spanBack.className = "card-title grey-text text-darken-4";
        spanBack.innerText = films[index].name;
        let iBack = document.createElement("i");
        iBack.className = "material-icons right";
        iBack.innerText = "close";
        let contentBack = document.createElement("div");
        contentBack.className = "contentBack";
        contentBack.id = "contentBack" + films[index].id;
        contentBack.innerText = films[index].resume;
        let footerBack = document.createElement("div");
        footerBack.className = "footerBack";
        let spanFooterBack = document.createElement("span");
        let aFooterPlay = document.createElement("a");
        aFooterPlay.id = "aFooterPlay" + films[index].id;
        aFooterPlay.className = "large material-icons col s6 m6 l6 playBack";
        aFooterPlay.style = "font-size: 50px;text-align:center;";
        aFooterPlay.innerText = "play_circle_filled";
        aFooterPlay.href = "";
        aFooterPlay.target = "_blank"
        let aFooterSupp = document.createElement("a");
        aFooterSupp.className = "medium material-icons col s6 m6 l6 suppBack";
        aFooterSupp.style = "font-size: 50px;text-align:center;";
        aFooterSupp.innerText = "delete_forever";
        aFooterSupp.addEventListener("click", function () { supprimerFilm(films[index].id) });

        // ajoute le nœud texte au nouveau div créé
        divFilms.appendChild(filmCol);
        filmCol.appendChild(newFilm)
        newFilm.appendChild(imgFilm);
        imgFilm.appendChild(img);
        newFilm.appendChild(filmFront);
        filmFront.appendChild(spanFront);
        spanFront.appendChild(bFront);
        spanFront.appendChild(iFront);
        newFilm.appendChild(filmBack);
        filmBack.appendChild(headerBack)
        headerBack.appendChild(spanBack);
        spanBack.appendChild(iBack);
        filmBack.appendChild(contentBack);
        filmBack.appendChild(footerBack);
        footerBack.appendChild(spanFooterBack);
        spanFooterBack.appendChild(aFooterPlay);
        spanFooterBack.appendChild(aFooterSupp);
    }
}

/**
 * Genère les cards film proposé si plusieur resultat
 * @function propositionFilm()
 * @param objet propoFilm
 */
function propositionFilm(propoFilm) {

    for (let index = 0; index < propoFilm.length; index++) {

        let propoFilms = document.getElementById("PropositonFilms");

        let propofilmCol = document.createElement("div");
        propofilmCol.className = "container col s8 m3 l2";
        propofilmCol.id = "cardPropo" + propoFilm[index].id;
        propofilmCol.title = propoFilm[index].title;
        let proponewFilm = document.createElement("div");
        proponewFilm.className = "card cardPropo";
        proponewFilm.id = propoFilm[index].id;

        // crée élement image
        let propoimgFilm = document.createElement("div");
        propoimgFilm.className = "card-image waves-effect waves-block waves-light";
        let propoimg = document.createElement("img");
        propoimg.id = "propoidImgFilm" + propoFilm[index].id;
        propoimg.src = "https://image.tmdb.org/t/p/w154" + propoFilm[index].poster_path;//
        propoimg.addEventListener("click", function () { savePropoFilm(propoFilm[index].title, parseInt(propoFilm[index].release_date.slice(0, 4), 10)), autreFilm(propoFilm[index].id) });

        // front de la card
        let propofilmFront = document.createElement("div");
        propofilmFront.className = "card-content";
        let propospanFront = document.createElement("span");
        propospanFront.className = " grey-text text-darken-4";
        propospanFront.innerText = propoFilm[index].title;
        let propobFront = document.createElement("b");
        propobFront.id = "b" + propoFilm[index].id;
        propobFront.innerText = " (" + parseInt(propoFilm[index].release_date.slice(0, 4), 10) + ") ";

        // ajoute le nœud texte au nouveau div créé
        propoFilms.appendChild(propofilmCol);
        propofilmCol.appendChild(proponewFilm)
        proponewFilm.appendChild(propoimgFilm);
        propoimgFilm.appendChild(propoimg);
        proponewFilm.appendChild(propofilmFront);
        propofilmFront.appendChild(propospanFront);
        propospanFront.appendChild(propobFront);

        displayElem()
    }
}
/** 
 * propose d'ajouter un des autre film de la liste de proposition
*/
function autreFilm(id) {
   
    alert("Le film est ajouté a la liste")
    if (confirm("Un autre film de cette liste ?")) {
        let card = document.getElementById("cardPropo" + id);
        card.remove();

    } else {

        suppProposition(propoFilm)
        removeAdd()
        CreationCard(films);
    }

}

/******************
* SAMPLE URLS
*
* 1. To get the config data like image base urls
* https://api.themiviedb.org/3/configuration?api_key=<APIKEY>
*
* 2. To fetch a list of movies based on keyword
* https://api.themiviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>
*
* 3. To fetch more details about a movie
* https://api.themiviedb.org/3/movie/<movie-id>?api_key=<APIKEY>
*
********************/
// const APIKEY is inside key.js


let baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;
let propoFilm = new Array;

let getConfig = function (filmId, keyMatch, AnneeMatch) {
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
        .then((resultat) => {
            return resultat.json();
        })
        .then((data) => {
            baseImageURL = data.images.secure_base_url;
            configData = data.images;

            runSearch(filmId, keyMatch, AnneeMatch);

        })
        .catch(function (err) {
            alert(err);
        })
};

let runSearch = function (filmId, keyword, AnneeMatch) {
    //initialisation de url pour la recherche de l'affiche et de l'id du film

    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword, '&year=', AnneeMatch, '&language=fr-FR');

    fetch(url)
        .then(resultat => resultat.json())
        .then((data) => {


            if ((AnneeMatch == "") && (data.results.length > 1)) {

                propoFilm = data.results
                propositionFilm(propoFilm);

            } else {

                //recup de l'affiche et id
                poster_path = data.results[0].poster_path;
                id = data.results[0].id;
                resume = data.results[0].overview;
                date = parseInt(data.results[0].release_date.slice(0, 4), 10);

                // initialisation des nouveaux url francais et anglais pour la recup de la cle video
                let urlVideo = ''.concat(baseURL + 'movie/' + id + '/videos?api_key=' + APIKEY + '&language=fr-FR');
                let urlVideo2 = ''.concat(baseURL + 'movie/' + id + '/videos?api_key=' + APIKEY + '&language=en-US');
                //url de recup de l'image

                document.getElementById("idImgFilm" + filmId).src = baseImageURL + 'w500/' + poster_path;
                document.getElementById("contentBack" + filmId).innerText = resume;
                document.getElementById("b" + filmId).innerText = " (" + date + ") ";

                fetch(urlVideo)
                    .then(resultatVideo => resultatVideo.json())
                    .then((dataVideo) => {

                        //test si il a une video en fr dispo
                        if (dataVideo.results.length >= 1) {
                            video = dataVideo.results[0].key;

                            document.getElementById("aFooterPlay" + filmId).href = 'http://www.youtube.com/embed/' + video + '?autoplay=1';

                            //sinon il va chercher la version us                        

                        } else {
                            fetch(urlVideo2)
                                .then(resultatVideo2 => resultatVideo2.json())
                                .then((dataVideo2) => {
                                    video2 = dataVideo2.results[0].key;

                                    document.getElementById("aFooterPlay" + filmId).href = 'http://www.youtube.com/embed/' + video2 + '?autoplay=1';

                                }).catch(function (err) {
                                    alert(err);
                                })
                        }
                    })

            }

        })
        .catch(function (err) {
            alert(err);
        })
};


/**
 * Permet de controler et de retourné un objet via sont id
 * @function findFilmById()
 * @param int id
 */
function findFilmById(id) {
    return films.find(element => element.id == id);
}

/**
 * Supprimer la card du film.
 * @function supprimerFilm()
 * @param string  attend la chaine (card + id) de l'id de la la 'div'
 */
function supprimerFilm(id) {
    let card = document.getElementById("card" + id);
    const found = findFilmById(id);
    if (confirm("Vous confirmez la suppression " + found.name + " ?")) {

        card.remove();
    } else {
        alert("Suppression annulée !")
    }
}

/**
 * Fonction de recherche par name
 * @function rechercherDansMediatheque()
 */
function rechercherDansMediatheque() {
    // Declare variables
    var input, filter, divFilm, spanFilm, td, i;
    input = document.getElementById("inputRechercher");

    filter = input.value.toUpperCase();
    divFilm = document.getElementById("ListeFilms");
    spanFilm = divFilm.getElementsByClassName("col s12 m4 l2");

    for (i = 0; i < spanFilm.length; i++) {

        if (td = spanFilm[i].title) {
            if (td.toUpperCase().indexOf(filter) > -1) {
                spanFilm[i].style.display = "";
            } else {
                spanFilm[i].style.display = "none";
            }
        }
    }
}

/**
 * Faire apparaitre les champs de saisie d'un nouveau film.
 * @function showAdd()
 */
function showAdd() {
    suppProposition(propoFilm)
    displayElem()
    document.getElementById("titre").value = "";
    document.getElementById("annee").value = "";
    document.getElementById("AjouterFilm").style.display = "block";
}

/**
 * Faire disparaitre les champs initile a la saisi d'un film.
 * @function displayElem()
 */
function displayElem() {
    document.getElementById("ajouter1").style.display = "none";
    document.getElementById("titreNav").style.display = "none";
    document.getElementById("anneeNav").style.display = "none";
    document.getElementById("inputRechercher").style.display = "none";

}

/**
 * Faire disparaitre les champs de saisie d'un nouveau film.
 * @function removeAdd()
 */
function removeAdd() {
    document.getElementById("ajouter1").style.display = "block";
    document.getElementById("titreNav").style.display = "block";
    document.getElementById("anneeNav").style.display = "block";
    document.getElementById("inputRechercher").style.display = "block";
    document.getElementById("ajouter1").style.display = "block";
    document.getElementById("AjouterFilm").style.display = "none";
}

/**
 * Permet de controler si les champs ne sont pas vide.
 * pour l'ajout d'un film
 * @function requisAjout()
 */
function requisAjout() {

    let titre = document.getElementById("titre").value
    let annee = document.getElementById("annee").value

    if (titre == "") {
        alert("Titre requis s'il vous plait !! ?")
    } else if (annee != "") {
        if (confirm("Vous confirmez le film " + titre + " de " + annee + " ?")) {
            sauvegarderFilm(), removeAdd();
        } else {
            removeAdd();
        }


    } else {
        if (confirm("Plusieur proposition pour : " + titre)) {
            getConfig("", titre, "")
            SuppToutCard();
            removeAdd()

        } else {
            removeAdd();
        }
    }
}

/**
 * Permet de supprimer toute les cards
 * @function SuppToutCard() 
 * */
function SuppToutCard() {
    for (let i = 0; i < films.length + 1; i++) {
        if (document.getElementById("card" + i)) {
            let SupprimerCard = document.getElementById("card" + i);
            SupprimerCard.remove();
        }
    }
}

/**
 * Permet de supprimer toute les cards de prposition film
 * @function suppProposition()
 * @param objet propoFilm
 * */
function suppProposition(propoFilm) {


    for (let index = 0; index < propoFilm.length; index++) {
        if (document.getElementById("cardPropo" + propoFilm[index].id)) {

            let SuppPropoFilm = document.getElementById("cardPropo" + propoFilm[index].id);
            SuppPropoFilm.remove();
        }
    }
}

/**
 * Sauvegarder le film dans la liste des films.
 * @function sauvegarderFilm()
 */
function sauvegarderFilm() {

    let titre = document.getElementById("titre").value.charAt(0).toUpperCase() + document.getElementById("titre").value.substring(1).toLowerCase();
    let annee = document.getElementById("annee").value;
    let IdLibre = ControleId();   
    films.push({
        id: IdLibre + 1,
        name: titre.slice(0, 20),
        years: annee


    });
    CreationCard();
}
/**
 * controle et recupere l'id le plus grand dans la liste film
 */
function ControleId() {
 var IdLibre = 0; 
for (let index = 0; index < films.length; index++) {
    
    let temp = films[index].id;	 
        if ( temp > IdLibre)
        IdLibre = temp;
}
  
  return IdLibre;
}
/**
 * Sauvegarder le film dans la liste des films.
 * @function savePropoFilm()
 * @param string titre
 * @param int annee
 */
function savePropoFilm(titre, annee) {
   let IdLibre = ControleId();

    films.push({
        id: IdLibre + 1 ,
        name: titre.slice(0, 22),
        years: annee
    });
}

/**
 * Permet de trier des film par ordre du votre choix.
 * @function TriUp(el)
 * @param string name ou years
 */
function TriUp(el) {

    films.sort(function (a, b) {
        if (el == "name") {
            if (b.name > a.name) {
                if (navigator.vendor === 'Google Inc.') {
                    return -1;
                }
            }
            if (navigator.vendor == '') {
                return (a.name > b.name);
            }
        }
        if (el == "year") {
            if (b.years > a.years) {
                if (navigator.vendor === 'Google Inc.') {
                    return -1;
                }
            }
            if (navigator.vendor == '') {
                return (a.years > b.years);
            }
        }
        return 0;
    });
    SuppToutCard();
    CreationCard(films);
}

/**
 * Permet de trier des film par ordre du votre choix.
 * @function TriDown(el)
 * @param string name ou years
 */
function TriDown(el) {

    films.sort(function (a, b) {
        if (el == "name") {
            if (b.name < a.name) {
                if (navigator.vendor === 'Google Inc.') {
                    return -1;
                }
            }
            if (navigator.vendor == '') {
                return (a.name < b.name);
            }
        }
        if (el == "year") {
            if (b.years < a.years) {
                if (navigator.vendor === 'Google Inc.') {
                    return -1;
                }
            }
            if (navigator.vendor == '') {
                return (a.years < b.years);
            }
        }
        return 0;
    });
    SuppToutCard();
    CreationCard(films);
}


