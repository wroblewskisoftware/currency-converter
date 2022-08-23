{
    const welcome = () => {
        console.log("Cześć! Ten kod jest już w repozytorium Git.");
    };

    const reset = () => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = "";
        resultElement.classList.remove("form__result--field");
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `W dniu 21.07.2022r. za <strong>${amount} PLN</strong> możesz nabyć <strong>${result.toFixed(2)} ${currency.toUpperCase()}</strong>.`;

        const resetButton = document.querySelector(".js-reset");
        resetButton.addEventListener("click", reset);
    };

    const onResultField = () => {
        const resultElement = document.querySelector(".js-result");
        resultElement.classList.add("form__result--field");
    };

    const calculateResult = (amount, currency) => {
        const eurValue = 4.7578;
        const usdValue = 4.6682;
        const gbpValue = 5.5738;
        const chfValue = 4.8008;

        switch (currency) {
            case "eur":
                return amount / eurValue;

            case "usd":
                return amount / usdValue;

            case "gbp":
                return amount / gbpValue;

            case "chf":
                return amount / chfValue;
        };
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        onResultField();
        updateResultText(amount, result, currency);
    };

    const init = () => {
        welcome();

        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
};