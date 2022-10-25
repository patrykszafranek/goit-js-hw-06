const itemsOfList = document.querySelectorAll(".item");
console.log(`Number of categories:`, itemsOfList.length);

itemsOfList.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  console.log("Category:", categoryTitle.textContent);

  const categoryElements = item.querySelectorAll("ul>li");
  console.log("Elements:", categoryElements.length);
});
