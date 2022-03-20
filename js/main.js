const infoLinksD = document.querySelector(".info-links-desktop");
const shareLinks = document.querySelector(".share-links");
const mainContainer = document.querySelector("main");
const infoLinksM = document.querySelector(".info-links-mobile");
const shareLinksM = document.querySelector(".share-links-mobile");

infoLinksD.addEventListener("click", () => {
  shareLinks.classList.toggle("hide");
});

infoLinksM.addEventListener("click", () => {
  shareLinksM.classList.toggle("hide");
  infoLinksM.classList.toggle("bg-blue");
});

mainContainer.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    shareLinks.classList.add("hide");
  }
});
