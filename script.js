const USD = 5.78;
const EUR = 6.28;
const GBP = 7.44;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const result = document.querySelector("h1");

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = symbol + " 1 = " + convertCurrencyBRL(price);

    let total = amount * price;
    total = convertCurrencyBRL(total).replace("R$", "");

    result.textContent = total + " Reais";

    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Não foi possível converter. Tente novamente");
  }
}

function convertCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
