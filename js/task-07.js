const input = document.querySelector("#font-size-control");

const text = document.querySelector("#text");
text.style.fontSize = input.value + "px";

const inputHandler = (event) => {
  const size = event.currentTarget.value + "px";
  console.log(size);
  text.style.fontSize = size;
};

input.addEventListener("input", inputHandler);
