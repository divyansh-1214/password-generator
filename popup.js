const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copy");

const refUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const refLowerCase = "abcdefghijklmnopqrstuvwxyz";
const refNumbers = "0123456789";
const refSymbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


function generatePassword() {
  let pass = "";
  let c = 0;
  let ref = "";
  if (uppercase.checked) {
    pass += refUpperCase.charAt(Math.floor(Math.random() * refUpperCase.length));
    ref += refUpperCase;
    c++;
  }
  if (lowercase.checked) {
    pass += refLowerCase.charAt(Math.floor(Math.random() * refLowerCase.length));
    ref += refLowerCase;
    c++;
  }
  if (numbers.checked) {
    pass += refNumbers.charAt(Math.floor(Math.random() * refNumbers.length));
    ref += refNumbers;
    c++;
  }
  if (symbols.checked) {
    ref += refSymbols;
    pass += refSymbols.charAt(Math.floor(Math.random() * refSymbols.length));
    c++;
  }

  for (let i = 0; i < length.value - c; i++) {
    pass += ref.charAt(Math.floor(Math.random() * ref.length));
  }
  pass = pass.split("").sort(()=> 0.5 - Math.random()).join("");
  return pass;
}

generateBtn.addEventListener(("click"), () => {
  const pass = generatePassword();
  console.log(pass)
  result.value = pass;
})


copyBtn.addEventListener("click", () => {
  // Make sure there is a password to copy
  if (result.value) {
    navigator.clipboard.writeText(result.value);

    // Optional: Give the user visual feedback
    copyBtn.innerText = "Copied!";
    setTimeout(() => {
      copyBtn.innerText = "Copy";
    }, 1500);
  }
});
