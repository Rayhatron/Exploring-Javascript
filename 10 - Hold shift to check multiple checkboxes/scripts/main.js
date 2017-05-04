const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    console.log("clicked");
    let inBetween = false; // Flag variable to let us know where to start checking and where to stop

    // Check if they had the shift key down 
    // And check that they are checking it not unchecking it
    if(e.shiftKey && this.checked){
        // Make the pizza 

        // Loop over every checkbox
        checkboxes.forEach(checkbox => {
            // Flip the flag variable to true when we check first item then to false when we check the last item
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            // Check all the checkboxes we encounter as long as inBetween is true
            if(inBetween){
                checkbox.checked = true;
            }

        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
