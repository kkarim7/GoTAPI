let i = 1;

const fetchURL = (x) => {
  let URL = "https://www.anapioficeandfire.com/api/characters/" + x;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("characterName").innerHTML = data.name
        ? data.name
        : data.aliases;
      document.getElementById(
        "characterData"
      ).innerHTML = `<h3>Aliases: ${data.aliases}</h3><br/>
    <h3>Gender: ${data.gender}</h3><br/>
    <h3>Culture: ${data.culture}</h3><br/>
    <h3>Played By: ${data.playedBy}</h3><br/>`;
    });
};

const nextCharacterBtn = document.getElementById("nextChar");

nextCharacterBtn.addEventListener("click", () => {
  i += 1;
  fetchURL(i);
  console.log(i);
});

const prevCharacterBtn = document.getElementById("prevChar");

prevCharacterBtn.addEventListener("click", () => {
  if (i === 1) {
    alert("Can't go lower than 1");
    return;
  }
  i -= 1;
  fetchURL(i);
  console.log(i);
});

document.getElementById("selectCharBtn").addEventListener("click", () => {
  const selectCharInput = prompt("Please insert a character id", "1");
  if (isNaN(selectCharInput) || selectCharInput === null) {
    return;
  }
  fetchURL(selectCharInput);
  i = parseInt(selectCharInput);
});

window.onload = fetchURL(i);

document.getElementById("selectCharNameBtn").addEventListener("click", () => {
  const selectCharNameInput = prompt(
    "Please enter a character name"
  ).toLowerCase();

  const userInput = selectCharNameInput
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase() + name.substr(1)).join(" ");

  for (let x = 1; x < 44; x++) {
    let URL2 =
      "https://www.anapioficeandfire.com/api/characters?page=" +
      x +
      "&pageSize=50";
    fetch(URL2)
      .then((response) => response.json())
      .then((data) => {
        data.find((char) => {
          if (char.name === userInput) {
            document.getElementById("characterName").innerHTML = char.name
              ? char.name
              : char.aliases;
            document.getElementById(
              "characterData"
            ).innerHTML = `<h3>Aliases: ${char.aliases}</h3><br/>
          <h3>Gender: ${char.gender}</h3><br/>
          <h3>Culture: ${char.culture}</h3><br/>
          <h3>Played By: ${char.playedBy}</h3><br/>`;
          }
        });
      });
  }
});

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     data.find((char) => {
//       if (char.name === selectCharNameInput) {
//         document.getElementById("characterName").innerHTML = char.name
//           ? char.name
//           : char.aliases;
//         document.getElementById(
//           "characterData"
//         ).innerHTML = `<h3>Aliases: ${char.aliases}</h3><br/>
//         <h3>Gender: ${char.gender}</h3><br/>
//         <h3>Culture: ${char.culture}</h3><br/>
//         <h3>Played By: ${char.playedBy}</h3><br/>`;
//         console.log(char);
//       }
//     });
//     console.log(data);

// const testArray = [
//   { name: "Jon", age: 32 },
//   { name: "Aerys", age: 34 },
// ];

// const findChar = testArray.find((character) => {
//   return character.name === "Jon";
// });

// const testArray = fetch(
//   "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50"
// )
//   .then((response) => response.json())
//   .then((character) => {
//     console.log(character);
//   });
