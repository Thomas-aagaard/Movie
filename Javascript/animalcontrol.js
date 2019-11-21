
//  making a variable animalbutton which contains the information. Where I get the id of my button.
let animalbutton = document.getElementById("theanimals");

// using my variable and then put it into to a method called The addEventListener, it attaches an event handler to the specified element
animalbutton.addEventListener('click', () => {

// This let provide Block Scope variables

    // get name of animal that is type
    let name = document.getElementById("animalnames").value;
    //get the dish that is type in.
    let dish = document.getElementById("animalFood").value;

    // Take the first character in the word and 0 is first.
    let firstCharName = name.charAt(0);
    //take the first character of dish.
    let firstDish = dish.charAt(0);

    // length - 1 is to set the charAt to take the last character of the sentence.
    let lastCharName = name.charAt(name.length - 1)
    let lastCharDish = dish.charAt(dish.length - 1)

    // If firstcharname is equal to the dish character and also if last character of name is equal to the last dish character.
    if (firstCharName === firstDish && lastCharName === lastCharDish) {
        // Print out name of animal and dish.
        document.write(name + " can bring a " + dish);
    }
    // If the lastcharname is not equal to the last character of the dish. But also if the first character of name is not equal to last character dish.
    else if ( lastCharName !== lastCharDish || firstCharName !== lastCharDish){

        // if the criteria is not have been meat then it print this message.
        document.write(name + " can't bring this dish ");
    }

});
