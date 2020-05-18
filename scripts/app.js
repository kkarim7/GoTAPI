let i = 1;
fetch("https://www.anapioficeandfire.com/api/characters/1")
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