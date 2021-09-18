//when the user clicks on the menu button the dropdown list appears 
//user is able to toggle the list from show to hide and vice versa 

//get the menu button query selector 
const btn1 = document.querySelector('.button-one'); 
const btn2 = document.querySelector('.button-two'); 
//get dropdown list query selector
const dropdown1 = document.querySelector('.list-one'); 
const dropdown2 = document.querySelector('.list-two'); 
//add an event listener to the button so that when the user clicks, dropdown list is displayed 
//when user clicks off, list disappears 
 
btn1.addEventListener('click', (event) => {
    //checks the classList for the dropdown menu 
    //if its set to hide changes it to show and changes the text content of the button 
    if(dropdown1.classList.contains('inactive')){ 
        dropdown1.classList.remove('inactive'); 
        dropdown1.classList.add('active'); 
        btn1.textContent = 'Close'; 
    } else { 
        dropdown1.classList.remove('active'); 
        dropdown1.classList.add('inactive'); 
        btn1.textContent = 'Menu 1'; 
    }

    //if menu 2 is open, hides it when user clicks to view menu 1 
    if(dropdown2.classList.contains('active')){ 
        dropdown2.classList.remove('active'); 
        dropdown2.classList.add('inactive'); 
        btn2.textContent= 'Menu 2'; 
    }
}); 

//when the user clicks the button 
btn2.addEventListener('click', (event) => {
    //checks the classList for the dropdown menu connected to Menu 2 
    if(dropdown2.classList.contains('inactive')){ 
        dropdown2.classList.remove('inactive'); 
        dropdown2.classList.add('active'); 
        btn2.textContent = 'Close'; 
    } else { 
        dropdown2.classList.remove('active'); 
        dropdown2.classList.add('inactive'); 
        btn2.textContent = 'Menu 2'; 
    }

    //if menu 1 is open, hides it when user clicks to view menu
    if(dropdown1.classList.contains('active')){ 
        dropdown1.classList.remove('active'); 
        dropdown1.classList.add('inactive'); 
        btn1.textContent= 'Menu 1'; 
    }
});



