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

