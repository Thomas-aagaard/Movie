
// Array that contain movie information.
const movies = [
    {
        "Title": "Avengers: Infinity War",
        "youtubeID": "6ZfuNTqbHE8",
        "Poster": "avengers_infinity_war.jpg",
        "Rating":"8.5",
        "Released":"27 Apr 2018",
        "Director": "Anthony Russo, Joe Russo",
        "Actor" : "Robert Downey Jr., Mark Ruffalo, Scarlett Johansson",
        "description" :"Heltene og deres allierede har adskillige gange stået over for modstandere," +
            " der er for mægtige til at besejre for det enkelte individ. " +
            "Men nu står gruppen over for den ultimative kosmiske trussel i form af Thanos.Skurken er på jagt efter de seks infinity stones, " +
            "der - hvis de samles - giver Thanos ufattelige kræfter og gør ham i stand til at manipulere med intet mindre end vores alle sammens virkelighed."



    },

    {
        "Title":  "Black Panther",
        "youtubeID": "xjDjIWPwcPU",
        "Poster": "black-panther.jpg",
        "Rating" : "7.3",
        "Released":"16 Feb 2018",
        "Director": "Ryan Coogler",
        "Actor" : "Chadwick Boseman, Michael B. Jordan, Danai Gurira",
        "description" : "Superheltefilmen 'Black Panther' er det seneste værk i Marvels store filmiske univers," +
            "der også tæller helte som Iron Man og Captain America. Handlingen tager udgangspunkt i det isolerede og teknologisk fremskredne land, Wakanda," +
            "hvor kongen netop er omkommet i et terrorangreb. Prins T’Challa står klar til at tage over som ny regent, " +
                "men modstandere står klar både internt i landet og udefra."
    },

    {
        "Title": "Captain Marvel",
        "youtubeID": "Z1BCujX3pw8",
        "Poster" :"captain-marvel.jpg",
        "Rating": "6.9",
        "Released":"08 Mar 2019",
        "Director": "Anna Boden, Ryan Fleck",
        "Actor" : "Brie Larson, Samuel L. Jackson, Jude Law",
        "description" :"Superhelte-filmen 'Captain Marvel' handler om rumvæsenet Vers," +
                        "der efter en mislykket mission nødlander på planeten Jorden anno 1995." +
                        "Her tager den unge Kree-kriger sine mægtige superkræfter i brug for at standse en gruppe" +
                        "rum-terrorister kaldet Skrulls." +
                        "Vers er dog ikke alene, da hun kort efter ankomsten møder en ung Shield-agent ved navn Nick Fury."
    },

    {
        "Title": "Alita: Battle Angel",
        "youtubeID": "cislZ9S0ocA",
        "Poster": "alitabattleangel.jpg",
        "Rating" : "7.4",
        "Released":"14 Feb 2019",
        "Director": "Robert Rodriguez",
        "Actor" : "Rosa Salazar, Christoph Waltz, Jennifer Connelly",
        "description" : "Science fiction-filmen 'Alita: Battle Angel' udspiller sig i året 2563, " +
            "hvor en katastrofal krig har efterladt Jorden søndersmadret." +
            "På en skrotplads finder Dr. Dyson Ido resterne af en kvindelig cyborg, der viser dig stadig at være i live." +
            "Han tager hende med hjem til sit værksted, hvor han giver hende en ny krop og således samemnsætter hende på ny." +
            "Den nyvågnede cyborg har dog ingen hukommelse om sin fortid, hvorfor hun må genvinde sine minder på ny. Der venter " +
            "således overraskende afsløringer for den nu navngivne cyborg Alita. Inden længe begynder hendes mystiske " +
            "fortid således at indhente hende."



    },
    {
        "Title": " Captain America: Civil War",
        "youtubeID": "dKrVegVI0Us",
        "Poster": "captainamerica.jpg",
        "Rating" : "7.8",
        "Released":"06 May 2016",
        "Director": "Anthony Russo, Joe Russo",
        "Actor" : "Chris Evans, Robert Downey Jr., Scarlett Johansson",
        "description" : "I superheltefilmen 'Captain America: Civil War' står medlemmerne af Avengers over for en intern konflikt," +
            " som overgår alle tidligere stridigheder. Grunden skal findes i regeringens nye lov, der skal registrere " +
            "alle mennesker med overnaturlige kræfter." +
            "Iron Man støtter op omkring loven, mens hans Avengers-kollega, Captain America, er modstander af tiltaget. " +
            "Uenighederne fører til decideret kamp mellem tidligere allierede, og andre helte tilslutter " +
            "sig hver sin side og gør sig klar til et massivt opgør."
    },
    {
        "Title": "Shazam!",
        "youtubeID": "rW1gu-D6mpE",
        "Poster": "shazam.jpg",
        "Rating": "7.1",
        "Released":"05 Apr 2019",
        "Director": "David F. Sandberg",
        "Actor" : "Zachary Levi, Mark Strong, Djimon Hounsou",
        "description" : "Superheltefilmen 'Shazam!' handler om den unge Billy Batson, der i flere år har ledt efter sin forsvundne mor," +
            " og ender i en ny plejefamilie, " + "hvor han møder superhelte-nørden Freddy, som han hurtigt får et tæt bånd med." +
            "    En dag i metroen bliver Billy ret tilfældigt udvalgt til verdens frelser, da en troldmand vælger at give den " +
            "14-årige dreng superheltekræfter, når han siger ordet Shazam." +
            " I en helt ny krop og med uanede kræfter har Billy nu et kæmpe ansvar " +
            "på sine skuldre, især da superskurken Dr. Sivana pludselig dukker op." +
            " Sammen med Freddy må han nu finde ud af, hvordan han bliver en rigtig superhelt og redder verden."
    }
];

console.log(movies);

// for loop cann execute a block of code a number of times.
for (var i = 0; i < movies.length; i++) {

    // Assigning variable called URL contains the link references to OMDB site.
    var url = "http://www.omdbapi.com/?t=" + movies[i].Title + "&apikey=4f6f8721";

    // A variable containing the link to youtube and the movies youtubeID. Which is declared in the array above.
    var youtube ="https://www.youtube.com/watch?v=" + movies[i].youtubeID;

   // var images = "images/" + movies[i].Poster;

    let takeRating = movies[i].Rating;

    let Getdirector = movies[i].Director;
    let GetActor = movies[i].Actor;

    let Getdescription = movies[i].description;

    // Takes the date from the array 'movies'
    var date1 = new Date(movies[i].Released);

    // Creating variable which contain current date.
    var date2 = new Date(Date.now());


// To calculate the time difference of two dates
    var Difference_In_Time = date2 - date1;

// To calculate the no. of days between two dates and '1000 * 3600 * 24' is milliseconds in a day.
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// Here I define how many digits the output should show after the comma.
    let n = Difference_In_Days.toFixed(0);

    //define container by finding the "i" of classname "title"
    let container = document.getElementsByClassName("title")[i];

    let link = document.getElementsByClassName("link-video")[i];

   // let picture = document.getElementsByClassName("image")[i];

    let rating =    document.getElementsByClassName("ratings")[i];

    let thedirector = document.getElementsByClassName("director")[i];
    let theactor = document.getElementsByClassName("actor")[i];
    let Des =    document.getElementsByClassName("description")[i];
    let Ageofmovie = document.getElementsByClassName("released")[i];



    //
    const h2 = document.createElement('h2');
    h2.setAttribute("class", "title");



    const a = document.createElement('a');
    // sets attribute 'href' to variable 'youtube'
    a.setAttribute("href", youtube );

    //var billede = document.createElement("img");
   // billede.setAttribute("src", images);


// Create html element p tag and set attribute to the class and a name called ratings.
    const p = document.createElement('p');
    p.setAttribute("class", "ratings");

    const Description = document.createElement('p');
    Description.setAttribute("class", "description");

    const Movieage = document.createElement('p');
    Movieage.setAttribute("class", "released");

    const directors = document.createElement('p');
    directors.setAttribute("class", "director");

    const actors = document.createElement('p');
    actors.setAttribute("class", "actor");

// Using the fetch method
    fetch(url)

        //
        .then(response => {
            return response.json();
        })

        .then(movie => {

            //put h2 to the title of movie
            h2.innerText = movie.Title;

            //
            a.innerText = "Trailer" ;

           // billede.innerHTML = "<img src=" + images + "/>";
            // Here I chose what should be posted between html tag p.
            p.innerText= "Rating from IMDB: " + takeRating;

            Movieage.innerText =  n + " days since released";
            directors.innerText = "Director: " + Getdirector;
            actors.innerText = "Actor: " + GetActor;

            Description.innerText= Getdescription;



            //put h2 in the container
            container.appendChild(h2);

            // put a in link
            link.appendChild(a);

            //
            rating.appendChild(p);

            Des.appendChild(Description);

            Ageofmovie.appendChild(Movieage);

            thedirector.appendChild(directors);

            theactor.appendChild(actors);

         //   picture.appendChild(billede);



        });
}