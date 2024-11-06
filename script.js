document.getElementById('thanksgivingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting

    // Get form input values
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const recipeName = document.getElementById('recipeName').value;

    // Get selected ingredients categories
    const selectedIngredients = Array.from(document.getElementById('ingredients').selectedOptions);
    
    // Display the values in the output section
    document.getElementById('submittedEmail').innerText = `Email: ${email}`;
    document.getElementById('submittedDate').innerText = `Date: ${date}`;
    document.getElementById('submittedRecipe').innerText = `Recipe: ${recipeName}`;
    document.getElementById('submittedIngredients').innerText = `Ingredients Categories: ${selectedIngredients.join(', ')}`;

    // Show the output section
    document.getElementById('output').style.display = 'block';

    // Optionally, clear the form after submission
    document.getElementById('thanksgivingForm').reset();
});
