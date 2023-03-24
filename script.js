let screen = document.getElementById("screen");

// Function to make screen clear
function allclear() {
    screen.value = '';
}

// Function to delete last index
function del() {
    screen.value = screen.value.slice(0,-1);
}

// Function to display any number on screen
function display(num) {
    screen.value += num;
}

// Function to make the evaluation of any operation 
function calculate() {
    
    // try defines a code block to run
    try {  
        screen.value = eval(screen.value);
    }
    // catch defines a code block to handle any error
    catch {
        alert("Invalid Operation !");
    }
}