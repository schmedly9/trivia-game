
//$( "#quiz-form").on( "submit",function(event){ 
  //      event.preventDefault(); 
    //    var $answer=$("#quiz-answer"); 
     //   var answer=$answer.val();
      //   console.log(answer);
    // } 
       // MAIN PROCESS
    // ==============================================================================

    // Calling functions to start the game.
    renderQuestion();
    updateScore();

    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {
      // If there are no more questions, stop the function.
      if (questionIndex === questions.length) {
        return;
      }
      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = String.fromCharCode(event.which).toLowerCase();

      // Only run this code if "t" or "f" were pressed.
      if (userInput === "t" || userInput === "f") {

        // If they guess the correct answer, increase and update score, alert them they got it right.
        if (userInput === questions[questionIndex].a) {
          alert("Correct!");
          score++;
          updateScore();
        }
        // If wrong, alert them they are wrong.
        else {
          alert("Wrong!");
        }

        // Increment the questionIndex variable and call the renderQuestion function.
        questionIndex++;
        renderQuestion();

      }

    };


