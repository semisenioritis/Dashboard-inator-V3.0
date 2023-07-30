function showLiveDate() {
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');

    function updateLiveDate() {
      var now = new Date();

      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var formattedDate = now.toLocaleDateString(undefined, options);

      var time = now.toLocaleTimeString();

      dateElement.textContent = formattedDate;
      timeElement.textContent = time;

      requestAnimationFrame(updateLiveDate); // Request next animation frame
    }

    updateLiveDate(); // Initial call to start updating the date, day, and time
  }

  document.addEventListener('DOMContentLoaded', showLiveDate);


// ===================================================================================================



// const fetchButton = document.getElementById('undobutton');

var todaycardsContainer = document.getElementById('todayDeadlineContainer');

var weekdeadcardsContainer = document.getElementById('weekDeadlineContainer');

var monthdeadcardsContainer = document.getElementById('monthDeadlineContainer');

var weekasgcardsContainer = document.getElementById('weekAssignedContainer');

var monthasgcardsContainer = document.getElementById('monthAssignedContainer');

var shlokContainer = document.getElementById('shlokContainer');



document.addEventListener("DOMContentLoaded", () => {

const apiUrl = '<Dashboard-Populator-Appscript-Endpoint>'; 
    fetch(apiUrl, {
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {


            // cardsContainer.textContent = data[0].sheetName;
            // cardsContainer.textContent = data[4].data;    

            var prioGradDict = {
                "-1": "priograd-purp",
                "0": "priograd-fire",
                "1": "priograd-red",
                "2": "priograd-orange",
                "3": "priograd-yellow",
                "4": "priograd-green",
                "5": "priograd-grey",
            };
            var prioDict = {
                "🔴": "priority-red",
                "🟡": "priority-yellow",
                "🔵": "priority-blue"
            }
            var taskTypeDict = {
                "Fixed": "type-fixed",
                "Infinite": "type-infinite",
                "Scheduled": "type-schedule",
                "Fixed & Scheduled": "type-fixedndscheduled"
            }
            var categoryDict = {
                "IITM": "category-iitm",
                "APSIT": "category-apsit",
                "General": "category-general",
                "Self Projects": "category-projects",
                "Professor Colab": "category-prof-colab",
                "Maths Selfstudy": "category-maths",
            }
        // Clear the existing cards if any
        todaycardsContainer.innerHTML = '';
            var actualData1 = data[0].data;
            var countervar =0;
            var collName = String(data[0].sheetName)
            // console.log(collName);
            actualData1.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = card;

                todaycardsContainer.appendChild(tempContainer);
            })
        
        // Clear the existing cards if any
        weekdeadcardsContainer.innerHTML = '';        
            var actualData2 = data[1].data;
            var countervar =0;
            var collName = String(data[1].sheetName)
            // console.log(String(data[1].sheetName));
            actualData2.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = card;

                weekdeadcardsContainer.appendChild(tempContainer);
            })        
            
        // Clear the existing cards if any
        monthdeadcardsContainer.innerHTML = '';
            var actualData3 = data[2].data;
            var countervar =0;
            var collName = String(data[2].sheetName)
            // console.log(collName);            
            actualData3.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = card;

                monthdeadcardsContainer.appendChild(tempContainer);
            })      
            
            
        // Clear the existing cards if any
        weekasgcardsContainer.innerHTML = '';
            var actualData4 = data[3].data;
            var countervar =0;
            var collName = String(data[3].sheetName)
            // console.log(collName);            
            actualData4.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = card;

                weekasgcardsContainer.appendChild(tempContainer);
            })
            
            
        // Clear the existing cards if any
        monthasgcardsContainer.innerHTML = '';
            var actualData5 = data[4].data;
            var countervar =0;
            var collName = String(data[4].sheetName)
            // console.log(collName);            
            actualData5.forEach(item => {
                // INITIATE A COUNTER HERE THAT INCREMENTS INSIDE THE LOOP SO THAT THE CARDS ARE CREATED WITH UNIQUE IDS
                countervar = countervar + 1;
                var identifier = "~"+String(countervar)+"~"+collName;
                var card = createCard(item,identifier, prioGradDict, prioDict, taskTypeDict, categoryDict);

                var tempContainer = document.createElement('div');
                tempContainer.innerHTML = card;

                monthasgcardsContainer.appendChild(tempContainer);
            })        
            ;        
        })
        .then(() => {

            // Get all elements with the class "donebut"
            var doneButtons = document.querySelectorAll('.donebut');

            // Add a unique event listener to each button
            doneButtons.forEach(button => {
            button.addEventListener('click', doneButtonClick);
            });

            // Get all elements with the class "donebut"
            var snoozeButtons = document.querySelectorAll('.snoozebut');

            // Add a unique event listener to each button
            snoozeButtons.forEach(button => {
            button.addEventListener('click', snoozeButtonClick);
            });            

        })
        .catch(error => console.error('Error fetching data:', error));

        var chapnum = getRandomNumber(1, 18);
        if (chapnum == 1){
            vernum= getRandomNumber(1, 46);
        }else if (chapnum == 2){
            vernum= getRandomNumber(1, 72);
        }else if (chapnum == 3){
            vernum= getRandomNumber(1, 43);      
        }else if (chapnum == 4){
            vernum= getRandomNumber(1, 42);
        }else if (chapnum == 5){
            vernum= getRandomNumber(1, 29);
        }else if (chapnum == 6){
            vernum= getRandomNumber(1, 47);
        }else if (chapnum == 7){
            vernum= getRandomNumber(1, 30);
        }else if (chapnum == 8){
            vernum= getRandomNumber(1, 28);
        }else if (chapnum == 9){
            vernum= getRandomNumber(1, 34);
        }else if (chapnum == 10){
            vernum= getRandomNumber(1, 42);
        }else if (chapnum == 11){
            vernum= getRandomNumber(1, 55);
        }else if (chapnum == 12){
            vernum= getRandomNumber(1, 20);
        }else if (chapnum == 13){
            vernum= getRandomNumber(1, 35);
        }else if (chapnum == 14){
            vernum= getRandomNumber(1, 27);
        }else if (chapnum == 15){
            vernum= getRandomNumber(1, 20);
        }else if (chapnum == 16){
            vernum= getRandomNumber(1, 24);
        }else if (chapnum == 17){
            vernum= getRandomNumber(1, 28);
        }else if (chapnum == 18){
            vernum= getRandomNumber(1, 78);
        }

var apiUrl2 = "https://bhagavadgitaapi.in/slok/"+chapnum+"/"+vernum;    
    fetch(apiUrl2, {
      method: 'GET'
  })
      .then(response => response.json())
      .then(data => {
        shlokContainer.innerHTML = '';

// extract the data from the api call put it in a variable shlok
        var shlok = data.slok;
        shlokarr = shlok.split("|");
        shlok= shlokarr[0]+"|"+"<br>"+shlokarr[1]+"||"+shlokarr[3]+"||"+"<br><br>";
        meaning = data.sankar.et;
        shlok= shlok+meaning;
        var tempContainer = document.createElement('div');
        tempContainer.innerHTML = shlok;
        shlokContainer.appendChild(tempContainer);
      })
      .catch(error => console.error('Error fetching data:', error));

    
});

// Function to create a card element
function createCard(data,countervar, prioGradDict, prioDict, taskTypeDict, categoryDict) {
    var extractedTaskId = data[0]; 
    var extractedTaskTitle = data[1];
    var extractedDescription = data[2];
    var extractedTaskCategory = data[3];
    var extractedTaskType = data[4];
    var extractedPriority = data[5];


    var extractedDeadline = data[8];
    if(extractedDeadline ==""){
        extractedDeadline = "&nbsp - &nbsp";
    }else{
        extractedDeadlinearr = extractedDeadline.split(" ");
        extractedDeadline = String(extractedDeadlinearr[0])+"<br>"+String(extractedDeadlinearr[1])+" "+String(extractedDeadlinearr[2])+" "+String(extractedDeadlinearr[3]);
    }
    var extractedStartDate = data[9];
    if(extractedStartDate ==""){
        extractedStartDate = "&nbsp - &nbsp";
    }
    var extractedDuration = data[13];
    if(extractedDuration ==""){
        extractedDuration = "&nbsp - ";
    }
    var extractedPriogradCol = prioGradDict[data[16]];

    var extractedPriorityCol = prioDict[data[5]];
    var extractedTaskTypeCol = taskTypeDict[data[4]];
    var extractedCategoryCol = categoryDict[data[3]];



    var blockTemplate = `
        <div id="cardID${countervar}">
        <div class="card mb-3 bg-dark">
        <div class="task-nondisp-metadata">
            <!-- add id here 👇 🟠  -->
            <div class="taskid" id="taskID${countervar}">
                <!-- add taskid here 🟣  -->
                ${extractedTaskId}
            </div>
        </div>
        <!-- add priograd-class here 👇-->
        <div class="card-content-holder ${extractedPriogradCol}">
            <div class="card-top-section tempclass">
                <div class="card-snoozer tempclass">
                    <!-- add id here 👇 🟠  -->
                    <button class="snoozebut" id="snoozeBUT${countervar}">

                </div>
                <div class="card-inner-title tempclass">
                    <!-- add task title here 🟣 -->
                    ${extractedTaskTitle}
                </div>
                <div class="top-metadata-holder">
                    <div class="meta-wrapper tempclass">
                        <div class="deadline-box"> 
                            <!-- add deadline here 🟣 -->
                            ${extractedDeadline}
                        </div>
                        <div class="prio-dur-holder">
                            <!-- add priotity class here 👇 -->
                            <div class="priority-box ${extractedPriorityCol}">
                                <!-- add priority here 🟣 -->
                                ${extractedPriority}
                            </div>
                            <div class="duration-box">
                                <!-- add duration here 🟣 -->
                                ${extractedDuration} hr
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-actual-body tempclass">
                <div class="card-desc-nd-metadata tempclass">

                    <div class="desc-container">
                        <div class="desc-content tempclass"> 
                            <!-- add description here 🟣 -->
                            ${extractedDescription}
                        </div>
                    </div>

                    <div class="bottom-metadata tempclass">
                        <div class="task-start-date">
                            <!-- add start date here 🟣 -->
                            ${extractedStartDate}
                        </div>
                        <!-- add task type class here 👇 -->
                        <div class="task-type ${extractedTaskTypeCol}">
                            <!-- add task type here 🟣 -->
                            ${extractedTaskType}
                        </div>
                        <!-- add task category class here 👇 -->
                        <div class="task-category ${extractedCategoryCol}">
                            <!-- add task category here 🟣 -->
                            ${extractedTaskCategory}
                        </div>
                    </div>
                </div>
                <div class="checkbox-div tempclass">
                <!-- add id here 👇 🟠  -->                    
                    <button class="donebut" id="doneBUT${countervar}">


                </div>
            </div>
        </div>
        </div>   
        </div>
        `  
        ;

    return blockTemplate;
}



function getRandomNumber(min, max) {
    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const random = Math.random();
  
    // Scale and shift the number to the desired range
    const randomNumber = Math.floor(random * (max - min + 1)) + min;
  
    return randomNumber;
  }

// =================================================================================



// Deprecated
// function taskDeleter(indexnum,colname){
//     // Extract data from the div with id "dataDiv"
//     taskidname = "taskID~"+indexnum+"~"+colname
//     var dataDiv = document.getElementById(taskidname);
//     var dataToFetch = dataDiv.textContent.trim(); // Modify this based on the actual data format you have in the div
//     // console.log(dataToFetch);

//     const dataToSend = {
//         sheetName: colname,
//         searchValue: dataToFetch 
//       };

//       console.log(JSON.stringify(dataToSend))
//     // Make a fetch call to an external API
//     var delapiUrl = "<Task-Deleter-Endpoint>";
    
//     fetch(delapiUrl, {
//         method: 'POST', // Replace 'POST' with the appropriate HTTP method for your API
//         headers: {
//           'Content-Type': 'application/json', // Replace with the appropriate content type for your API
//         },
//         body: JSON.stringify(dataToSend), // Sending the data extracted from 'dataDiv' to the API

//       })
//       .then(response => response.json())
//       .then(data => {
//         // Process the API response data
//         console.log(data);
//         if(data.status== "Task Deleted"){
//             // write code to remove the task from the page 🔴🔴🔴🔴🔴
//         }
//       })
//       .catch(error => {
//         // Handle any errors that occurred during the fetch call
//         console.error("Error fetching data:", error);
//       });
//   }



function doneButtonClick(event) {
    // Get the ID of the clicked button
    // console.log(event);

// provide an alert for the user to confirm the deletion
    
    if (confirm("Sure to delete task?")) {
    
    var clickedButtonId = event.target.id;
    // console.log('Clicked Button ID:', clickedButtonId);
    indexnum = clickedButtonId.split("~")[1]
    colname = clickedButtonId.split("~")[2]
    // console.log(indexnum,colname)

    taskidname = "taskID~"+indexnum+"~"+colname
    console.log(taskidname)
    var dataDiv = document.getElementById(taskidname);
    var dataToFetch = dataDiv.textContent.trim();


    var dataToSend = {
        sheetName: colname,
        searchValue: dataToFetch 
      };

    console.log(JSON.stringify(dataToSend))
    // Make a fetch call to an external API
    var delapiUrl = "<Task-Deleter-Endpoint>";
    
    fetch(delapiUrl, {
        method: 'POST', // Replace 'POST' with the appropriate HTTP method for your API
        headers: {
          'Content-Type': 'application/json', // Replace with the appropriate content type for your API
        },
        body: JSON.stringify(dataToSend), // Sending the data extracted from 'dataDiv' to the API

      })
      .then(response => response.json())
      .then(data => {
        // Process the API response data
        console.log(data);
        if(data.status== "Task Deleted"){
            // write code to remove the task from the page 
            console.log(taskidname)
            var divToRemoveid = "cardID~"+indexnum+"~"+colname
            var divToRemove = document.getElementById(divToRemoveid);
            if (divToRemove) {
            divToRemove.remove();
            }
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch call
        console.error("Error fetching data:", error);
      });



    // Example: Hiding other buttons when a button is clicked
    // doneButtons.forEach(button => {
    //     if (button.id !== clickedButtonId) {
    //     button.style.display = 'none';
    //     }
    // });
    } else {
        return;
    }
}


function snoozeButtonClick(event) {
    // Get the ID of the clicked button
    // console.log(event);

// provide an alert for the user to confirm the deletion
    
    if (confirm("Sure to snooze task?")) {
    
    var clickedButtonId = event.target.id;
    // console.log('Clicked Button ID:', clickedButtonId);
    indexnum = clickedButtonId.split("~")[1]
    colname = clickedButtonId.split("~")[2]
    // console.log(indexnum,colname)

    taskidname = "taskID~"+indexnum+"~"+colname
    console.log(taskidname)
    var dataDiv = document.getElementById(taskidname);
    var dataToFetch = dataDiv.textContent.trim();


    var dataToSend = {
        sheetName: colname,
        searchValue: dataToFetch 
      };

    console.log(JSON.stringify(dataToSend))
    // Make a fetch call to an external API
    var delapiUrl = "<Task-Snoozer-Endpoint>";
    
    fetch(delapiUrl, {
        method: 'POST', // Replace 'POST' with the appropriate HTTP method for your API
        headers: {
          'Content-Type': 'application/json', // Replace with the appropriate content type for your API
        },
        body: JSON.stringify(dataToSend), // Sending the data extracted from 'dataDiv' to the API

      })
      .then(response => response.json())
      .then(data => {
        // Process the API response data
        console.log(data);
        if(data.status== "Task Snoozed"){
            // write code to remove the task from the page 
            console.log(taskidname)
            var divToRemoveid = "cardID~"+indexnum+"~"+colname
            var divToRemove = document.getElementById(divToRemoveid);
            if (divToRemove) {
            divToRemove.remove();
            }
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch call
        console.error("Error fetching data:", error);
      });



    // Example: Hiding other buttons when a button is clicked
    // doneButtons.forEach(button => {
    //     if (button.id !== clickedButtonId) {
    //     button.style.display = 'none';
    //     }
    // });
    } else {
        return;
    }
}