"use strict"
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector("#form");
    form.addEventListener('submit', sendForm);

    async function sendForm(e) {
        e.preventDefault();
        
        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');

            } else {
                alert("Error");
                form.classList.remove('_sending');
            }

        } else {
            const errorTag = document.createElement('p');
            const errorText = document.createTextNode('Fill the empty lines of the form');
            errorTag.appendChild(errorText);
            form.appendChild(errorTag);
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
       for(let i=0; i < formReq.length; i++) {
            const input = formReq[i];
            removeError(input);
            if(input.classList.contains('_email')) {
                if(emailTest(input)){
                    addError(input);
                    error++;
                }

            }else {
                if(input.value === '') {
                    addError(input);
                    error++;
                }
            }

       }
       return error;

    }

    function addError(input) {
        /* input.parentElement.classList.add('_error'); */
        input.classList.add('_error');
    }
    function removeError(input) {
        /* input.parentElement.classList.remove('_error'); */
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
