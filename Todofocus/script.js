const checkBox = document.querySelectorAll(".custom-checkbox");

const inputes = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");

const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");

let allgoals = JSON.parse(localStorage.getItem('allgoals')) || {};

// console.log(errorLabel)
checkBox.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    //  e.classList.add('completed')
    // this one for just return the empty value
    // watch some and evry mothod video
    const allgoaladded = [...inputes].every((input) => {
      return input.value;
    });
    if (allgoaladded) {
      checkbox.parentElement.classList.toggle("completed");
      progressValue.style.width = "33.33%";
    } else {
      errorLabel.style.display = "block";
    }
  });
});

inputes.forEach((input) => {
  input.addEventListener("focus", () => {
    errorLabel.style.display = "none";
  });

  input.addEventListener("input", (e) => {
    
    allgoals[input.id] = {
       name: input.value,
       completed: false
    }

  localStorage.setItem('allgoals',JSON.stringify(allgoals))
});
});


