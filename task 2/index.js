//button arrays to change background image
for(var i=0; i<document.querySelectorAll(".images").length;i++){

    document.querySelectorAll(".images")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
        switch(buttonInnerHTML){
            case 'AC130J': document.body.style.backgroundImage = "url('images/ac130j.jpg')";
            break;
            case 'F22': document.body.style.backgroundImage = "url('images/f22.jpg')";
            break;
            case 'PANTHER': document.body.style.backgroundImage = "url('images/panther.jpeg')";
            break;
            
            default: document.body.style.backgroundImage="white";
        }   

    });
}





const form = document.querySelector('form');
const output = document.querySelector('#output');
form.addEventListener('submit', (event) => {
event.preventDefault();
const fname = document.querySelector('#fname').value;
const lname = document.querySelector('#lname').value;
// if statements to show full name
if (fname === '' || lname === '') {
output.textContent = 'Please enter a first name and last name.';
}
else {
output.textContent = `Welcome, ${fname} ${lname}!`;
}
});

const vehicles = ['AC130J', 'F22', 'PANTHER'];

for (let i = 0; i < vehicles.length; i++) {
console.log(vehicles[i]);
}