const menu = document.getElementById('open');
const navbar = document.getElementById('navbar');
let menu2 = menu.getAttribute('style');

let pusing =menu2.includes('none');

function tampilan(){
    if (pusing == true){
        tampil();
    } else if(pusing == false){
        tutup();
    }
}

function tampil(){  
    menu.style.display = 'block';
    navbar.style.alignItems = 'normal';
    pusing = false;

}

function tutup(){
    menu.style.display='none';
    pusing = true;

}