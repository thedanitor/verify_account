# Verify Account

If deployed: https://thedanitor.github.io/verify_account/

This project is from the Day 41 code along video from Udemy's 50 projects in 50 days series focused on web development. I have added some comments to the CSS and JavaScript to make notes to myself why certain choices are being made and what particular lines of code do.

### Overall Impression

This project was to make the UI for an account verification code input box. We made an input box for each digit and shifted the cursor to the next box once a digit was entered. I've used this type of interface plenty of times, but hadn't really considered how it works (on the front end at least). It wasn't a lot of code, but I would not have thought to use the .focus() method to move to the next box as soon as a valid number was entered. I think the lesson here is not to take any part of the UI for granted, even if it isn't flashy.

### Things Learned

* There is a ```:valid``` pseudo-class that targets any input or form element whose contents validate successfully.
* There are "spinner" widgets in some input elements. They can be removed with ```-moz-appearance: textfield;``` in Firefox and

 ```.code::-webkit-outer-spin-button,```

```.code::-webkit-inner-spin-button {```

  ```-webkit-appearance: none;```

 ```margin: 0;```

```}```

in Chrome, Safari

* ```.focus()``` method moves the cursor to the element.