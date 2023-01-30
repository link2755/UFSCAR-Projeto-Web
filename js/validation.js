const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validate() {
    let elements = document.getElementsByClassName('required');
    let error = false;

    for (let i = 0; i < elements.length; i++) {
        //alert(elements[i].nextElementSibling.class);
        if (elements[i].value === "") {
            elements[i].nextElementSibling.innerHTML = "Campo obrigatório";
            error = true;
        } else {
            elements[i].nextElementSibling.innerHTML = "";
        }
    }

    if (!validateEmail(document.getElementById("femail_vendedor").value)) {
        document.getElementById("wrong_email").innerHTML = "Campo inválido";
        error = true;
    } else {
        document.getElementById("wrong_email").innerHTML = "";
    }

    if (error)
        return;
    
    elements = document.getElementsByTagName('input');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].type == "text")
            elements[i].value = "";
    }
  }
  