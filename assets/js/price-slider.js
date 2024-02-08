let rangeMin = 0;
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
            range.style.left = (minDot / rangeDot[0].max) * 100 + "%";
            range.style.right = 100 - (maxDot / rangeDot[1].max) * 100 + "%";
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
                if (minValue > rangeDot[0].min) {
                    range.style.left = (minValue / rangeDot[0].max) * 100 + "%";
                }
            } else {
                rangeDot[1].value = maxValue;
                range.style.right = 100 - (maxValue / rangeDot[1].max) * 100 + "%";
            }
        }

        if(minValue === "") {
            range.style.left = (rangeDot[0].min + rangeDot[0].max) / 2 * 100 + "%";

        }
        if(maxValue === "") {
            range.style.right = (rangeDot[0].min + rangeDot[0].max) / 2 * 100 + "%";
        }
    });
});