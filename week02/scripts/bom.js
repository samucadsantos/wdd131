let buttonAddChapter = document.querySelector("#add-chapter");
let input = document.querySelector("#favchap");
let list = document.querySelector("#list");
let errorMessage = document.querySelector("#error-message");

// Events listener
buttonAddChapter.addEventListener("click", function (e) {
    let inputValue = input.value.trim();

    // Validation empty value
    if (inputValue === "") {       
        showErrorMessage("Please enter a chapter name.");;

        return;
    }

    // Validation duplicate value
    const existingChapters = Array.from(list.querySelectorAll("li"));
    const isDuplicated = existingChapters.some((chapter) => {
        const chapterText = chapter.firstChild.textContent.trim();

        return chapterText.toLowerCase() === inputValue.toLowerCase();
    });

    // Count
    const totalChapters = existingChapters.length + 1;

    if (totalChapters > 10) {
        showErrorMessage("You can only add up to 10 chapters.");
        
        return;
    }   

    // Show duplicated message
    if (isDuplicated) { 
        showErrorMessage("This chapter already exists.");
        
        return;
    }

    // Passed validations
    clearErrorMessage();

    // List item
    const li = document.createElement("li");
    li.textContent = inputValue;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("aria-label", "Close");
    deleteButton.setAttribute("id", "close-button");
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);

    input.value = "";
    input.focus();

    deleteButton.addEventListener("click", function() {
        if(confirm("Are you sure you want to delete this chapter?")) {
            list.removeChild(li);
            input.focus();
            clearErrorMessage();
        }
    });
});

function showErrorMessage(message) {
    if (!errorMessage) {
        errorMessage = document.createElement("span")
        errorMessage.id = "error-message";

        input.insertAdjacentElement("afterend", errorMessage);
    }

     errorMessage.textContent = message;
    input.focus();
}

function clearErrorMessage() {
    if (errorMessage) {
        errorMessage.textContent = "";
    }
}

input.addEventListener("input", function() {
    if (errorMessage) {
        errorMessage.textContent = "";
    }
});