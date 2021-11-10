
document.querySelector("#bestillingsform").addEventListener("submit", valider);
const asterisks = Array.from(document.querySelectorAll("label i"));
for (let i = 0; i < asterisks.length; i++) {
    asterisks[i].classList.add("fas", "fa-asterisk");
}

function valider(evt) {
    // her deklareres alle konstante variabler
    const email_error = document.querySelector(".email_error"); // email
    const emailconf_error = document.querySelector(".emailconf_error"); // bekræft email
    const password_error = document.querySelector(".password_error"); // adgangskode
    const passwordconf_error = document.querySelector(".passwordconf_error"); // bekræft adgangskode
    const fname_error = document.querySelector(".fname_error"); // fornavn
    const ename_error = document.querySelector(".ename_error"); // efternavn
    const phone_error = document.querySelector(".phone_error"); // telefon
    const address_error = document.querySelector(".address_error"); // adresse   
    const accept_error = document.querySelector(".accept_error"); // accepter vilkår     


    // email validering, skal udfyldes og skal matche regular expression for en email
    const regxp_email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = this.email.value;
    if (email == "") {
        evt.preventDefault();
        this.email.focus();
        email_error.textContent = "Indtast din email!";
        this.email.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else if (!regxp_email.test(email)) {
        evt.preventDefault();
        this.email.focus();
        email_error.textContent = "Din email skal indeholde bogstaver - @ - bogstaver - . - bogstaver (test@mail.dk)";
        this.email.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        email_error.textContent = "";
        asterisks[0].classList.remove("fas", "fa-asterisk");
        this.email.style.backgroundColor = "#fff";
    }

    // de indtastede mailadresser skal være ens
    let emailconf = this.emailconf.value;
    if (emailconf !== email) {
        evt.preventDefault();
        this.emailconf.focus();
        emailconf_error.textContent = "De to emails er ikke ens!";
        this.emailconf.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        emailconf_error.textContent = "";
        asterisks[1].classList.remove("fas", "fa-asterisk");
        this.emailconf.style.backgroundColor = "#fff";
    }

    // adgangskode validering
    const regxp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let password = this.password.value;
    if (!regxp_password.test(password)) {
        evt.preventDefault();
        this.password.focus();
        password_error.textContent = "Mindst 8 tegn, heraf minimum ét stort bogstav, ét lille bogstav, ét tal og ét specialtegn fx @ eller #";
        this.password.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        password_error.textContent = "";
        asterisks[2].classList.remove("fas", "fa-asterisk");
        this.password.style.backgroundColor = "#fff";
    }
    let passwordconf = this.passwordconf.value;
    if (passwordconf !== password) {
        evt.preventDefault();
        this.passwordconf.focus();
        passwordconf_error.textContent = "De to adgangskoder er ikke ens!";
        this.passwordconf.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        passwordconf_error.textContent = "";
        asterisks[3].classList.remove("fas", "fa-asterisk");
        this.passwordconf.style.backgroundColor = "#fff";
    }

    // fornavn validering (ikke tom)
    let fname = this.fname.value;
    if (fname == "") {
        evt.preventDefault();
        this.fname.focus();
        fname_error.textContent = "Skriv fornavn!";
        this.fname.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        fname_error.textContent = "";
        asterisks[4].classList.remove("fas", "fa-asterisk");
        this.fname.style.backgroundColor = "#fff";
    }
    // efternavn validering (ikke tom)
    let ename = this.ename.value;
    if (ename == "") {
        evt.preventDefault();
        this.ename.focus();
        ename_error.textContent = "Skriv efternavn!";
        this.ename.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        ename_error.textContent = "";
        asterisks[5].classList.remove("fas", "fa-asterisk");
        this.ename.style.backgroundColor = "#fff";
    }

    // telefonnummer validering (ikke tom og skal være tal)
    let phone = this.phone.value;
    if (phone == "") {
        evt.preventDefault();
        this.phone.focus();
        phone_error.textContent = "Skriv telefonnummer!";
        this.phone.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else if (isNaN(phone)) {
        evt.preventDefault();
        this.phone.focus();
        phone_error.textContent = "Skriv kun tal!";
        this.phone.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else if (phone.length !== 8) {
        evt.preventDefault();
        this.phone.focus();
        phone_error.textContent = "Skriv 8 cifrer!";
        this.phone.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        phone_error.textContent = "";
        asterisks[6].classList.remove("fas", "fa-asterisk");
        this.phone.style.backgroundColor = "#fff";
    }

    // adresse validering (ikke tom)
    let address = this.address.value;
    if (address === "") {
        evt.preventDefault();
        this.address.focus();
        address_error.textContent = "Skriv din adresse!";
        this.address.style.backgroundColor = "rgb(160, 40, 40)";
        return false;
    } else {
        address_error.textContent = "";
        asterisks[7].classList.remove("fas", "fa-asterisk");
        this.address.style.backgroundColor = "#fff";
    }

    // accept af vilkår validering (skal checkes)
    if (this.accept.checked !== true) {
        evt.preventDefault();
        this.accept.focus();
        accept_error.textContent = "Du SKAL acceptere vilkår!";
        accept_error.style.color = "rgb(160, 40, 40)";
        return false;
    } else {
        accept_error.textContent = "";
        accept_error.style.color = "#fff";
    }
}