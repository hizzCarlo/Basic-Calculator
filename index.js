let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

// Switch case

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

// for loop
//document.addEventListener("DOMContentLoaded", function() {
    // const display = document.getElementById("display");
    // const buttons = document.querySelectorAll(".button");
    // let expression = "";
// buttons.forEach(button => {
//     button.addEventListener("click", function() {
//         const buttonText = button.textContent;
        
//         if (buttonText === "=") {
//             try {
//                 const result = eval(expression);
//                 display.textContent = result;
//                 expression = result.toString();
//             } catch (error) {
//                 display.textContent = "Error";
//                 expression = "";
//             }
//         } else if (buttonText === "C") {
//             display.textContent = "";
//             expression = "";
//         } else if (buttonText === "←") {
//             expression = expression.slice(0, -1);
//             display.textContent = expression;
//         } else {
//             expression += buttonText;
//             display.textContent += buttonText;
//         }
//     });
// });