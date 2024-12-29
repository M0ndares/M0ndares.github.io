var round = 1; 
var answers = ["Japan", "Mexico", "Canada"]; 
var images = ["../audio_and_video/mexico.png", "../audio_and_video/canada.png"];

function answerComparison() { 
    var displayElement = document.getElementById('displayElement'); 
    var answerElement = document.getElementById('answerElement'); 
    var feedbackElement = document.getElementById('feedback'); 
    var countryImage = document.getElementById('countryImage');
    if (answerElement && feedbackElement) { 
        if (answerElement.value.toLowerCase() === answers[round - 1].toLowerCase()) { 
            displayElement.innerText = `Correct answers: ${round}`;
            feedbackElement.innerText = "Correct!"; 
            countryImage.src = images[round-1];
            answerElement.value = "";
            round++; 
            if (round <= answers.length) { 
                answerElement.value = "";
            } else { feedbackElement.innerText = "Congratulations! You've completed all rounds."; 

            } 
        } else { feedbackElement.innerText = "Wrong answer, try again!";
        }
    }
}
document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('roundDisplay').innerText = "Round " + round; 
    document.getElementById('countryImage').src = images[round - 1];
});

function timeSet () {
    
}