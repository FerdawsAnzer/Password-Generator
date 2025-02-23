const passwordBoxGenerator=document.querySelector("#password");
  const length=16;
  const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase="abcdefghijklmnopqrstuvwxyz";
  const number="0123456789";
  const symbol="!@#$%^&*></-=+&*";
  const chars=upperCase+lowerCase+number+symbol;
  const buttonGenerator=document.querySelector(".buttonGenerator");
  buttonGenerator.addEventListener('click',generatePassword);
  
  function generatePassword(){
    //in the password variable we will generate a password contains of the 4 type of characters(numbers ,symbols upper&Lower cases..)
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];//will generate 17 random uppercase character
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];//will generate 17 random lowercase character
    password+=number[Math.floor(Math.random()*number.length)];//will generate 17 random number 
    password+=symbol[Math.floor(Math.random()*symbol.length)];//will generate 17 random Symbols
    //will keep add the character untill the num of length is 17
    while(password.length<length){
      password+=chars[Math.floor(Math.random()*chars.length)];
    }
    passwordBoxGenerator.value=password;
  }
  function copyPassword(){
    passwordBoxGenerator.select();
    document.execCommand("copy");
  }
