const MemeGeneratetBtn = document.querySelector(".generate-meme-btn");
const MemeTitle = document.querySelector(".meme-title");
const MemeImage = document.querySelector("#meme-img");
const MemeAuthor = document.getElementsByClassName("meme-author");

const updateDetails = (url, title, author) => {
  MemeImage.setAttribute("src", url);
  MemeTitle.innerHTML = title;
  MemeAuthor.innerHTML = `Meme By: ${author}`;
  console.log(author);
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    })
    .catch((error) => {
      console.error("Error Fetching Meme", error);
    });
};

MemeGeneratetBtn.addEventListener("click", generateMeme);
generateMeme();
