console.log("JavaScript loaded correctly")
// Övning 1: Enkel Asynkron Funktion med Callback (Lätt)

// Uppgift:
// Skapa en funktion delayLog som tar en sträng och en tid i millisekunder som argument.
// Funktionen ska använda setTimeout för att logga strängen efter den angivna tiden.
// Använd en callback för att meddela när loggningen är klar.
let stringToDisplay = "Denna sträng ska visas"

function delayLog(stringToDisplay, delayTime, callback){
    setTimeout(() => {
        console.log(stringToDisplay)
        callback()
    }, delayTime)
}

function logCompleted() {
    console.log("loggningen är klar")
}

delayLog(stringToDisplay, 2000, logCompleted)
// Mål:
// Förstå hur man använder callbacks med setTimeout.
// Praktisera enkel asynkronitet.
// ------------------------------------------
// Övning 2: Kedja Asynkrona Operationer (Medel)

// Uppgift:
// Använd fetch() för att hämta en användare från https://jsonplaceholder.typicode.com/users/1.

function fetchAUser(url, callback) {
  fetch(url)
  .then(response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`)
    }

    console.log(`${response.status}`)
    return response.json()
  })
.then(data => {

    callback(null, data)
})
.catch((err) => {
    callback(err)
    document.body.innerHTML = `<p>Sorry an error occured: ${err}</p>`
});
}

fetchAUser('https://jsonplaceholder.typicode.com/users/2', (err,data) => {
    if(err) {
        console.log("error", err)
    } else {
        console.log("data", data)
        const userId = data.id;
        console.log("userId:", userId)
        fetchUserPosts('https://jsonplaceholder.typicode.com/posts?userId=${userId}')
    }
})

function fetchUserPosts(url) {
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error (`HTTP-fel! status: ${response.status}`)
        }
        console.log(`response status: ${response.status}`)
        return response.json()
    })
    .then(posts => {
       console.log("user Posts", posts)
    })
    .catch(err => {
        console.error("error", err)
    })
}

// När användaren har hämtats, använd deras id för att hämta deras inlägg från https://jsonplaceholder.typicode.com/posts?userId=1.
// Använd callbacks inom .then()-kedjan för att hantera resultaten och logga dem i konsolen.

// Tips:
// Använd separata funktioner för att hämta användaren och inläggen.
// Hantera fel med .catch() och logga lämpliga felmeddelanden.

// ------------------------------------------
// Övning 3: Hantera Fel i Asynkron Kod med fetch() (Svår)

// Uppgift:
// Modifiera övning 2 för att inkludera robust felhantering.
// Simulera ett fel genom att använda en felaktig URL eller genom att kasta ett fel om svarskoden inte är 200.
// Se till att felmeddelanden loggas korrekt och att programmet inte kraschar.

// ------------------------------------------
// Övning 4: Bygga en Enkel Applikation med fetch() (Extra Svår)

// Uppgift:
// Bygg en enkel webbapplikation som:
// Har en knapp "Hämta användare".
// När knappen klickas, hämtar den en slumpmässig användare från https://jsonplaceholder.typicode.com/users.
// Visar användarens namn och e-post på sidan.
// Använd fetch() och hantera asynkroniteten med .then() och callbacks inom dem.

// Mål:
// Applicera kunskaperna i en faktisk applikation.
// Förstå hur asynkronitet påverkar DOM-manipulation.
// ------------------------------------------


// const fetchPromise = 
// fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   console.log(fetchPromise);
  
//   fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) => {
//         console.log(data[0].name)
//     })
//   });
  
//   console.log("Started request…");


// const secondFetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// secondFetchPromise
// .then((response)=> response.json())
// .then((data) => {
//     console.log(data[1].name);
// });