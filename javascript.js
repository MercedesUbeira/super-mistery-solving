function solveMystery() {
    var whoInput = document.getElementById('who');
    var howInput = document.getElementById('how');
    var whyInput = document.getElementById('why');
    var whoError = document.getElementById('who-error');
    var howError = document.getElementById('how-error');
    var whyError = document.getElementById('why-error');
    var congratulations = document.getElementById('congratulations');
  
    // Reset styles
    whoInput.classList.remove('correct', 'error');
    howInput.classList.remove('correct', 'error');
    whyInput.classList.remove('correct', 'error');
    whoError.textContent = '';
    howError.textContent = '';
    whyError.textContent = '';
  
    // Check answers
    var correct = true;
  
    if (whoInput.value.toLowerCase() !== 'richard') {
      whoInput.classList.add('error');
      whoError.textContent = 'Wrong information, please try again.';
      correct = false;
    } else {
      whoInput.classList.add('correct');
      whoInput.setAttribute('readonly', true);
    }
  
    if (howInput.value.toLowerCase() !== 'poison') {
      howInput.classList.add('error');
      howError.textContent = 'Wrong information, please try again.';
      correct = false;
    } else {
      howInput.classList.add('correct');
      howInput.setAttribute('readonly', true);
    }
  
    if (whyInput.value.toLowerCase() !== 'inheritance') {
      whyInput.classList.add('error');
      whyError.textContent = 'Wrong information, please try again.';
      correct = false;
    } else {
      whyInput.classList.add('correct');
      whyInput.setAttribute('readonly', true);
    }
  
    // Display a general error message if all fields are incorrect
    if (!correct) {
      whoError.textContent = 'Wrong information, please try again.';
    } else {
      // Show congratulations message
      document.getElementById('mystery-form').style.display = 'none';
      congratulations.style.display = 'block';
    }
  }
