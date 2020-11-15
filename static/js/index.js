import 'nodelist-foreach-polyfill';
import "@babel/polyfill";


const selectedValue = document.getElementById("select-package-consulting"),
    valueOfInputConsulting = document.getElementById("value-of-input-consulting"),
    chosenPackage = document.getElementById("chosen-package"),
    formConsulting = document.getElementById("form-consulting");

const consultingBtn = document.querySelectorAll(".consulting-btn"),
    choosePackageSection = document.getElementById("package-of-consult");

const choosingBtn = document.querySelectorAll(".choosing-btn");

const formPayment = document.getElementById("form-payment"),
    trainingBtn = document.querySelectorAll(".btn-training");

const registrationBtnCircle = document.querySelectorAll(".registration-button-circle");

const navigationBar = document.querySelectorAll(".navigation");

const menuIcon = document.querySelector(".fa-bars"),
    hiddenMenu = document.querySelector(".hidden-menu");

let saleInput = document.getElementById("sale"),
    priceBlock = document.querySelector(".price"),
    sumInput = document.getElementById("sumInput");

let saleInputSchool = document.getElementById("sale-school"),
    priceBlockSchool = document.querySelector(".price-school"),
    sumInputSchool = document.getElementById("sum-input-school");

if (hiddenMenu) {

    let count = 0;

    menuIcon.addEventListener("click", () => {

        if (document.documentElement.clientWidth <= 1200) {

            if (count === 0) {

                hiddenMenu.classList.add("height");
                count++;

            } else {

                hiddenMenu.classList.remove("height");
                count = 0

            }

        }


    });

}

if (saleInput) {

    saleInput.addEventListener("input", () => {

        saleInput.value = saleInput.value.replace(/\s+/g, '')

        if (saleInput.value.toLowerCase() === "мотивация") {

            priceBlock.textContent = "3.500 ₽";
            sumInput.value = 3500;
            sumInput.min = 3500;

        } else {

            priceBlock.textContent = "5.000 ₽";
            sumInput.value = 5000;
            sumInput.min = 5000;

        }

    });

}

if (navigationBar) {

    const sliderBlock = document.querySelector(".slider");

    navigationBar.forEach((elem) => {

        elem.addEventListener("click", () => {

            if (document.documentElement.clientWidth < 768) {

                sliderBlock.scrollIntoView({behavior: "smooth"});

            }

        });

    });

}

if (registrationBtnCircle) {

    registrationBtnCircle.forEach((elem) => {

        elem.addEventListener("click", (event) => {

            event.preventDefault()

            formPayment.scrollIntoView({behavior: "smooth"});

        });

    });

}

if (trainingBtn && formPayment) {

    trainingBtn.forEach((elem) => {

        elem.addEventListener("click", (event) => {

            event.preventDefault();

            formPayment.scrollIntoView({behavior: "smooth"});

        });

    });

}

if (formConsulting) {

    const spanInChosenPackage = chosenPackage.querySelector("span"),
        textArea = formConsulting.querySelector("textarea");

    const changeValue = () => {

        if (saleInputSchool.value.toLowerCase() === "booker") {

            valueOfInputConsulting.value = (selectedValue.options[selectedValue.selectedIndex].value) - (selectedValue.options[selectedValue.selectedIndex].value) * 0.2;

        } else {

            valueOfInputConsulting.value = selectedValue.options[selectedValue.selectedIndex].value;

        }
        priceBlockSchool.textContent = valueOfInputConsulting.value + " ₽";
        spanInChosenPackage.textContent = selectedValue.options[selectedValue.selectedIndex].textContent.split(' ')[1];
        textArea.textContent = selectedValue.options[selectedValue.selectedIndex].textContent;

    };

    selectedValue.addEventListener("change", changeValue);

    if (saleInputSchool) {

        let promoInfo = document.querySelector(".promo-info");

        saleInputSchool.addEventListener("input", () => {

            if (saleInputSchool.value.toLowerCase() === "booker") {

                promoInfo.style.display = "block";

                changeValue()

            } else {

                promoInfo.style.display = "none";

                changeValue()

            }

        });

    }

    const changeValueWithButtons = (button, index) => {

        if (saleInputSchool.value.toLowerCase() === "booker") {

            valueOfInputConsulting.value = (button.id) - (button.id) * 0.2;

            priceBlockSchool.textContent =valueOfInputConsulting.value + " ₽";

        } else {

            valueOfInputConsulting.value = button.id;

            priceBlockSchool.textContent = button.id + " ₽";

        }

        spanInChosenPackage.textContent = button.name;
        textArea.textContent = button.name;
        selectedValue.selectedIndex = index;

    };

    choosingBtn.forEach((elem, index) => {

        elem.addEventListener("click", (event) => {

            event.preventDefault();

            changeValueWithButtons(elem, index);

            formConsulting.scrollIntoView({behavior: "smooth"})

        });

    });

}

if (choosePackageSection && consultingBtn) {

    consultingBtn.forEach((elem) => {

        elem.addEventListener("click", (event) => {

            event.preventDefault();

            choosePackageSection.scrollIntoView({behavior: "smooth"});

        });

    });

}