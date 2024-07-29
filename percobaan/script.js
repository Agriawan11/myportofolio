const display = document.getElementById('display');
const tambah = document.querySelector('#tambah').value;
const kurang = document.querySelector('#kurang').value;
const kali = document.querySelector('#kali').value;
const bagi = document.querySelector('#bagi').value;

function print(num){
    display.value += num;
}

function hasil(){
  var result = eval(display.value);
  display.value = result;
}


function erase(){
    display.value = ' ';
}
