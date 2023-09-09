
  

  document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("category");
    selectElement.addEventListener("change", function() {
      changeBackground(this);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("taskType");
    selectElement.addEventListener("change", function() {
      changeBackground(this);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("priority");
    selectElement.addEventListener("change", function() {
      changeBackground(this);
    });
  });  
  
  function changeBackground(selectElement) {
    var selectedValue = selectElement.value;
    selectElement.style.backgroundColor = getComputedStyle(selectElement.options[selectElement.selectedIndex]).backgroundColor;
  }
  // ===================================================================================================

  
  document.addEventListener("DOMContentLoaded", function() {
    var checkbox1 = document.getElementById("deadline");
    var checkbox2 = document.getElementById("reminder");
    var tasktype1 = document.getElementById("taskType");
    var compulsoryField = document.getElementById("dueDate");
  
    checkbox1.addEventListener("change", function() {
      if (this.checked) {
        compulsoryField.required = true;
      } else if (checkbox2.checked) {
        compulsoryField.required = true;
      } else if ( tasktype1.value == "Fixed" ){
        compulsoryField.required = true;
      } else if ( tasktype1.value == "Scheduled" ){
        compulsoryField.required = true;
      } else if ( tasktype1.value == "Fixed & Scheduled" ){
        compulsoryField.required = true;
      } else {
        compulsoryField.required = false;
      }
    });
    checkbox2.addEventListener("change", function() {
      if (this.checked) {
        compulsoryField.required = true;
      } else if (checkbox1.checked) {
        compulsoryField.required = true;
      } else if ( tasktype1.value == "Fixed" ){
        compulsoryField.required = true;
      } else if ( tasktype1.value == "Scheduled" ){
        compulsoryField.required = true;
      } else if ( tasktype1.value == "Fixed & Scheduled" ){
        compulsoryField.required = true;
      } else {
        compulsoryField.required = false;
      }
    });

    tasktype1.addEventListener("change", function() {
      if (this.value == "Fixed") {
        compulsoryField.required = true;
      } else if ( this.value == "Scheduled" ){
        compulsoryField.required = true;
      } else if ( this.value == "Fixed & Scheduled" ){
        compulsoryField.required = true;
      } else if (checkbox1.checked) {
        compulsoryField.required = true;
      } else if (checkbox2.checked) {
        compulsoryField.required = true;
      } else {
        compulsoryField.required = false;
      }
    });
    
  });


// ================================================================================================
  
document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", verifyRequiredFields);
});

function verifyRequiredFields() {
  var requiredFields = document.querySelectorAll('input[required]');
  var isFormValid = true;

  for (var i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].value) {
      var resultDiv = document.getElementById("result");
      resultDiv.textContent = "Please fill in all required fields.";
      setTimeout(function() {
        resultDiv.textContent = "";
      }, 2000);
      return;
    }
  }

  if (isFormValid) {
    sendData();
  }
}


function sendData() {
  var taskTitleInput = document.getElementById("taskTitle");
  var taskTitle = taskTitleInput.value;

  var descriptionInput = document.getElementById("description");
  var description = descriptionInput.value;

  var durationInput = document.getElementById("duration");
  var duration = durationInput.value;

  var categorySelect = document.getElementById("category");
  var category = categorySelect.value;

  var taskTypeSelect = document.getElementById("taskType");
  var taskType = taskTypeSelect.value;

  var prioritySelect = document.getElementById("priority");
  var priority = prioritySelect.value;

  var dueDateInput = document.getElementById("dueDate");
  var dueDate = dueDateInput.value;
  
  var startDateInput = document.getElementById("startDate");
  var startDate = startDateInput.value;

  var weekCheckbox = document.getElementById("week");
  var week = weekCheckbox.checked;

  var monthCheckbox = document.getElementById("month");
  var month = monthCheckbox.checked;

  var reminderCheckbox = document.getElementById("reminder");
  var reminder = reminderCheckbox.checked;

  var deadlineCheckbox = document.getElementById("deadline");
  var deadline = deadlineCheckbox.checked;    

  if (!taskTitle || !startDate) {
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = "Please fill in all required fields.";
    return;
  }

  var requestData = {
    "taskTitle": taskTitle,
    "description": description,
    "duration": duration, 
    "category": category,
    "taskType": taskType,
    "priority": priority,
    "dueDate": dueDate,
    "startDate": startDate,
    "week": week,
    "month": month,
    "reminder": reminder,
    "deadline": deadline
  };

  console.log(requestData);
  fetch("%%appscript_endpoint_to_push_data_towards%%", {
    redirect: "follow", 
    method: "POST",
    body: JSON.stringify(requestData),
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    }

  })
    .then(response => response.json())
    .then(result => {

      if (result.error) {
        var saveErrorButton = document.getElementById('saveErrorButton');
        saveErrorButton.style.display = 'inline';  
        window.errorData = result.error;
        console.log(window.errorData)
        var resultDiv = document.getElementById("result");
        document.getElementById("result").style.color = "red"
        resultDiv.textContent = JSON.stringify(result.status);
        setTimeout(function() {
          resultDiv.textContent = "";
        }, 6000);

      }else{
        var resultDiv = document.getElementById("result");
        document.getElementById("result").style.color = "green"
        resultDiv.textContent = JSON.stringify(result.status) + "✌";        
      }
    })
    .catch(error => {
      var resultDiv = document.getElementById("result");
      resultDiv.textContent = "Error: " + error;
      console.error("Error: ", error);
    });


    
}
  

// ===================================================================================================

document.addEventListener("DOMContentLoaded", function() {
  var errorButton = document.getElementById("saveErrorButton");
  errorButton.addEventListener("click", saveErrorToFile);
});

function saveErrorToFile() {
  // Convert the error object to a string for saving
  const errorText = JSON.stringify(window.errorData, null, 2); // The second parameter adds indentation for readability

  // Create a Blob containing the error text
  const blob = new Blob([errorText], { type: 'text/plain' });

  // Create a temporary URL for the Blob
  const blobUrl = URL.createObjectURL(blob);

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = blobUrl;
  downloadLink.download = 'CustomExtensionError.txt'; // Change the filename and extension as needed

  // Programmatically trigger the download
  downloadLink.click();

  // Clean up by revoking the object URL
  URL.revokeObjectURL(blobUrl);

  // Hide the "Save Error" button again after download
  const saveErrorButton = document.getElementById('saveErrorButton');
  saveErrorButton.style.display = 'none';
}
