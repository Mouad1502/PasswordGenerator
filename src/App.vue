<template>
  <div class="container m-[12%] w-11/12 max-w-screen-md">
    <h1 class="font-medium text-5xl">Generate <br><span class="text-colorTxt border-b-2 border-solid border-b-colorTxt pb-2">Random Password</span></h1>
    <div class="display w-full mt-12 mb-8 bg-white text-gray-900 flex items-center justify-between py-7 px-5 rounded-lg">
      <input v-model=passwordBox type="text" id="password" placeholder="Password" class="border-0 outline-none text-[24px]">
      <img src="./assets/images/copy.png" class="w-8 cursor-pointer" @click="copyPassword()">
    </div>
    <button @click=createPassword() class="border-0 outline-none bg-colorTxt text-white text-xl font-light flex items-center justify-center py-4 px-6 rounded cursor-pointer"><img src="./assets/images/generate.png" class="w-7 mr-2.5">Generate Password</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    const passwordBox = ref(null);
    const lenth = 12;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "@#$%^&*()_+|{}[]<>/-=~";
    const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
        let password ="";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];
        while(password.length<lenth){
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        passwordBox.value = password;
}
const copyPassword = () => {
  const element = document.getElementById("password");
  element.focus();
  element.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges(); // Deselect the text
};
</script>

