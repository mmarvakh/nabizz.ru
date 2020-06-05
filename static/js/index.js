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

        valueOfInputConsulting.value = selectedValue.options[selectedValue.selectedIndex].value
        spanInChosenPackage.textContent = selectedValue.options[selectedValue.selectedIndex].textContent
        textArea.textContent = selectedValue.options[selectedValue.selectedIndex].textContent

    };

    selectedValue.addEventListener("change", changeValue);

    const changeValueWithButtons = (button, index) => {

        valueOfInputConsulting.value = button.id;
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