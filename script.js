const selectYearly = document.querySelector(".switch input");
const duration = document.querySelector(".duration");
const price = document.querySelector(".price");
const range = document.querySelector(".my-range");
const switcher = document.querySelector(".switch");
const pageViews = document.querySelector(".views");
const button = document.querySelector(".btn");

function switchPrice() {
    let priceInt = parseInt(price.textContent.slice(1));

    if (selectYearly.checked) {
        const yealyPrice = (priceInt - priceInt * 0.25) * 12;
        price.textContent = `$${yealyPrice.toFixed(2)}`;
        duration.textContent = "/year";
        this.style.backgroundColor = "#10d5c2 ";
    } else {
        updatePrice(range.value);
        duration.textContent = "/month";

        this.style.backgroundColor = "hsl(174, 77%, 80%)";
    }
}

switcher.addEventListener("click", switchPrice);

range.addEventListener("change", function () {
    loadBackground(this);
    updatePrice(this.value);
});

function updatePrice(value) {
    const monthlyPrice = +value * 4 + (+value === 1 ? 0 : +value - 2) * 4;

    if (selectYearly.checked) {
        const yealyPrice = (monthlyPrice - monthlyPrice * 0.25) * 12;
        price.textContent = `$${yealyPrice.toFixed(2)}`;
    } else {
        price.textContent = `$${monthlyPrice.toFixed(2)}`;
    }
    const views = +value * 50;

    pageViews.textContent = `${views}K`;
}

button.addEventListener("click", function () {
    range.value = "3";
    switcher.style.backgroundColor = "hsl(174, 77%, 80%)";
    price.textContent = "$16.00";
    pageViews.textContent = "150k";
    selectYearly.checked = false;
    loadBackground(range);
    duration.textContent = "/month";
});

function loadBackground(element) {
    const value =
        ((element.value - element.min) / (element.max - element.min)) * 100;
    element.style.background =
        "linear-gradient(to right, #10d5c2 0%, #10d5c2 " +
        value +
        "%, #eaeefb " +
        value +
        "%, #eaeefb 100%)";
}
