const modal = document.querySelector('#Mymodal');
const open = document.querySelector('.open-button');
const close = document.querySelector('.modal-window__close');
const cancel = document.querySelector('.modal-footer__cancel');
open.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
cancel.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
     if(event.target == modal) {
        modal.style.display = "none";
     }
}
