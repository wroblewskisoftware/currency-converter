console.log("Cześć! Ten kod jest już w repozytorium Git.");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let resetButton = document.querySelector(".js-reset");
let eurValue = 4.7578;
let usdValue = 4.6682;
let gbpValue = 5.5738;
let chfValue = 4.8008;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;
    switch (currency) {
        case "eur":
            result = amount / eurValue;
            break;

        case "usd":
            result = amount / usdValue;
            break;

        case "gbp":
            result = amount / gbpValue;
            break;

        case "chf":
            result = amount / chfValue;
            break;
    }

    resultElement.innerHTML = `W dniu 21.07.2022r. za <strong>${amount} PLN</strong> możesz nabyć <strong>${result.toFixed(2)} ${currency.toUpperCase()}</strong>.`;
});

resetButton.addEventListener("click", () => {
    resultElement.innerHTML = "";
});