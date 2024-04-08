let rangeMin = 0;
const min = 4000;
const max = 14000;

const range = document.querySelector(".slider__selected");
const rangeDot = document.querySelectorAll(".slider__dot");
const rangeValue = document.querySelectorAll(".slider__value");

rangeDot.forEach((input) => {
    input.addEventListener("input", (event) => {
        let minDot = parseInt(rangeDot[0].value);
        let maxDot = parseInt(rangeDot[1].value);

        if(event.target === rangeDot[0]) {
            rangeDot[0].style.zIndex = 1;
            rangeDot[1].style.zIndex = 0;
        } else {
            rangeDot[0].style.zIndex = 0;
            rangeDot[1].style.zIndex = 1;
        }

        if (maxDot - minDot < rangeMin) {
            if (event.target === rangeDot[0]) {
                rangeDot[0].value = maxDot - rangeMin;
            } else {
                rangeDot[1].value = minDot + rangeMin;
            }
        } else {
            rangeValue[0].value = minDot;
            rangeValue[1].value = maxDot;
            
            range.style.left = ((minDot - min) / (rangeDot[0].max - min)) * 100 + "%";
            range.style.right = 100 - ((maxDot - min) / (rangeDot[1].max - min)) * 100 + "%";
        }
    });
});

rangeValue.forEach((input) => {
    input.addEventListener("input", (event) => {
        let minValue = rangeValue[0].value;
        let maxValue = rangeValue[1].value;

        if (maxValue - minValue >= rangeMin) {
            if (event.target === rangeValue[0]) {
                rangeDot[0].value = minValue;
                range.style.left = ((rangeDot[0].value - min) / (rangeDot[0].max - min)) * 100 + "%";
            } else {
                rangeDot[1].value = maxValue;
                range.style.right = 100 - ((rangeDot[1].value - min) / (rangeDot[1].max - min)) * 100 + "%";
            }
        }
    });
});