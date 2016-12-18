function createForm() {
    var form = document.createElement("form");
    form.setAttribute("name", "login");
    form.setAttribute("action", "https://google.com");
    form.setAttribute("onsubmit", "return validateForm()");
    document.body.appendChild(form);
    var formElem = [];
    formElem[0] = ["text", "age", "Age"];
    formElem[1] = ["text", "username", "User name"];
    formElem[2] = ["text", "date", "Date"];
    formElem[3] = ["submit", "validate", "Validate Me"];
    createFormElem(form, formElem);
}

function createFormElem(form, formElem) {
    var property = {
        0: "type",
        1: "name",
        2: "placeholder"
    }
    for (var i = 0; i < formElem.length; i++) {
        input = document.createElement("input");
        for (var j = 0; j < formElem[i].length; j++) {
            input.setAttribute(property[j], formElem[i][j])
        }
        form.appendChild(input);
    }
}

function validateForm() {
    var valid = true;
    inputArr = document.forms[0].childNodes;
    var age = inputArr[0].value;
    age = +(age);
    if (!age || age < 0) {
        alert("Age must include only numbers!");
        valid = false;
    }
    var rightName = "user_";
    var userName = inputArr[1].value;
    if (userName.indexOf(rightName) !== 0) {
        alert("Your username is not valid! It must include user_");
        valid = false;
    }
    var currentDate = moment().format('DD/MM/YYYY');
    var userDate = inputArr[2].value;
    if (userDate !== currentDate) {
        alert("Your date is not valid!");
        valid = false;
    }
    return valid;
}

createForm();
