const codes = document.querySelectorAll(".code");

// on page load put cursor in first input box
codes[0].focus();

// iterate through codes and get index
codes.forEach((code, idx) => {
    // listen for keydown event on each code
    code.addEventListener("keydown", (e) => {
        // if the value is between 0 and 9
        if (e.key >= 0 && e.key <= 9) {
            // clear value if there is one already
            codes[idx].value = "";
            // change focus to next input
            // need setTimeout so it actually registers the input  
            setTimeout(() => codes[idx + 1].focus(), 10)
            // if key is backspace
        } else if (e.key === "Backspace") {
            // change focus to previous input
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})