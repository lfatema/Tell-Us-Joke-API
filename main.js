const jokes = document.querySelector("#joke");
const jokesBtn = document.querySelector("#jokeBtn");

// Using Promises

// const updateNewJoke = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", setHeader)
//     .then((res) => res.json())
//     .then((data) => {
//       jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

//Using Async/Await
const updateNewJoke = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };

    const response = await fetch("https://icanhazdadjoke.com", setHeader);
    const data = await response.json();
    jokes.innerHTML = data.joke;
  } catch (error) {
    console.log(error);
  }
};

jokesBtn.addEventListener("click", updateNewJoke);
updateNewJoke();
