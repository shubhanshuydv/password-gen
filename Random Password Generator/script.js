const passwodBox = document.getElementById("password");
const length = 12;

const btn = document.getElementById("btn");
const copy = document.getElementById("copy");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialSymbols = "!@#$%^&*()-_=+[]{}|;:,.<>?/~`";
const number = "0123456789";

const allchars = upperCase + lowerCase +number +specialSymbols;

function createPassword () {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)];


    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allchars.length);
        password += allchars[randomIndex];
      }

    passwodBox.value = password;

}

function copyPassword(){
    passwodBox.select();
    document.execCommand("copy");
    showCopiedPopup();
    copyPassword.style.backgroundColor = "e0f7fa"
}

function showCopiedPopup() {
    const popup = document.getElementsByClassName('copied-popup');
    popup.style.display = 'block';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 2000);
  }

btn.addEventListener("click",createPassword);
copy.addEventListener("click",copyPassword);


