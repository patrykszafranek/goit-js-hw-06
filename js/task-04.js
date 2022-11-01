const increment = document.querySelector(`[data-action="increment"]`);
const decrement = document.querySelector(`[data-action="decrement"]`);
const value = document.querySelector("#value");
let counterValue = 0;

const handleIncrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const handleDecrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

increment.addEventListener("click", handleIncrement);
decrement.addEventListener("click", handleDecrement);
