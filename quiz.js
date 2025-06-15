// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Set the correct answer
    const correctAnswer = "4";

    // Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Make sure an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 5: Compare the answers and display feedback
        const feedback = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Optional: Handle case where no option is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Step 6: Attach event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
