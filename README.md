# Verify Account

If deployed: https://thedanitor.github.io/verify_account/

This project is from the Day 41 code along video from Udemy's 50 projects in 50 days series focused on web development. I have added some comments to the CSS and JavaScript to make notes to myself why certain choices are being made and what particular lines of code do.

### Overall Impression



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