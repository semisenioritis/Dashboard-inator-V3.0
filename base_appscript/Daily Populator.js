const priority = ["🔴", "🟡", "🔵"];
const categoryy = ["%%events_from_cal%%","General"]

function dailyFirstTrigger(){
  var upcomingEvents =updateNotionTable();
}

function dailySecondTrigger(){
  var popminors = extractRowsFromMajorDatabase();
}


function dailyTrigger() {
  try{
  var upcomingEvents =updateNotionTable();
  var popminors = extractRowsFromMajorDatabase();
  if (popminors == true){
  var response = {
    'success': true,
    'message': 'Upcoming events retrieved successfully & sheets database updated',
    'data': upcomingEvents
  };
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
  }
  }
  catch(error) {
    var responseCode = error.getResponseCode();
    var responseBody = error.getContentText();
    Logger.log('Error occurred while adding event. Response Code: ' + responseCode + ', Response Body: ' + responseBody);
  }
}


function doPost(e) {
  var upcomingEvents =updateNotionTable();
  extractRowsFromMajorDatabase();
  var response = {
    'success': true,
    'message': 'Upcoming events retrieved successfully & sheets database updated',
    'data': upcomingEvents
  };
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

function getUpcomingEvents() {
  var numDays = 7; 
  var today = new Date();
  var endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + numDays);
  var calendars = CalendarApp.getAllCalendars();

  var upcomingEvents = [];

  for (var i = 0; i < calendars.length; i++) {
    var calendar = calendars[i];
    var calendarName = calendar.getName();
    Logger.log('Calendar: ' + calendarName);
    if (calendarName == "Birthdays") {prio=0;cate=1}
    else if (calendarName == "%%name_of_main_google_calendar%%") {prio=1;cate=0}
    else {continue;}
    var events = calendar.getEvents(today, endDate);

    for (var j = 0; j < events.length; j++) {
      var event = events[j];

      var eventData = {
        calendar: calendarName,
        eventId: event.getId(),
        title: event.getTitle(),
        startTime: event.getStartTime(),
        endTime: event.getEndTime(),
        eventPriority: prio,
        eventCategory: cate
      };

      upcomingEvents.push(eventData);
    }
  }

  return upcomingEvents;
}




function isDuplicateEventNew(event, major_till_now){
  event_gcal_id = event[10]
  event_date = event[8]
  for(var i = 1; i< major_till_now.length; i++){
    if ((major_till_now[i][10] == event_gcal_id )&&(major_till_now[i][8] == event_date)){
      return true;
    }
  }
  return false;
}

function removeEmptyRows(data) {
  return data.filter(function(row) {
    return row.join('').trim() !== '';
  });
}

function getDataFromSheet() {
  var sheetId = "%%major_database_id%%";
  var sheetName = "Central_Database"; 
  var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  var data = sheet.getRange(1, 1, sheet.getLastRow(), 14).getValues();

  data = removeEmptyRows(data);

  return data;
}



function updateNotionTable() {


  var sheetId = "%%major_database_id%%"; 
  var sheetName = "Central_Database";
  var upcomingEvents = getUpcomingEvents();


  var values_to_push = upcomingEvents.map(function(eventData) {
    return [
      // ✅ ASSIGN A TASK ID HERE.
      random_alpha_num_gen(),
      eventData.title,
      eventData.calendar,
      categoryy[parseInt(eventData.eventCategory)],
      "Fixed & Scheduled",
      priority[parseInt(eventData.eventPriority)],
      "Yes",
      "No",
      Utilities.formatDate(eventData.startTime, 'Asia/Kolkata', 'yyyy-MM-dd HH:mm'),
      "",
      eventData.eventId,
      // ✅ ASSIGN A RANDOMIZER HERE.
      (() => {
        return Math.floor(Math.random() * 900) + 100;
      })(),
      (() => {
        const options = {
          timeZone: 'Asia/Kolkata'
        };
        return new Date().toLocaleString('en-US', options);
      })(),
      ((startTime, endTime) => {
        const start = new Date(startTime);
        const end = new Date(endTime);
        const timeDiffInMilliseconds = end - start;
        const timeDiffInHours = timeDiffInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
        return timeDiffInHours.toFixed(1); // Round off to 1 decimal place
      })(eventData.startTime, eventData.endTime)

    ];
  });
  // ~ ✅ MODIFY THIS DATA AND APPEND MORE STUFF TO IT IF NECESSARY
  // ~ ✅ I JUST RETURNED THE ENTIRE DATA FROM THE OBJECT AND MADE IT MORE ORGANIZED
  // ~ ✅ NOW WE PROCEED TO DO THE SAME FOR THE ISDUPLICATEEVENT AND THEN VERIFY THEN PASS OFF.

  major_till_now = getDataFromSheet()
  fin_array =[]

  for (var i = 0; i< values_to_push.length; i++){
    var event = values_to_push[i];
    if (isDuplicateEventNew(event, major_till_now)) {
      // ~ ✅ MODIFY THIS FUNCTION TO ACTUALLY VERIFY IF THE FUNCTION IS DUPLICATE.
      Logger.log('Skipping duplicate event with ID: ' + event[10]);
      continue;
    }
    // ~ ✅ CONTINUE TO ADD INDIVIDUAL ARRAYS TO A NEW OBJECT
    fin_array.push(event)

  }
    // ~ ✅ ADD FINAL ARRAY TO SHEET
  var resource = {
    values: fin_array
    //~ THE NAME OF THE FINAL ARRAY THAT I JUST CREATED JUST NOW
  };

  // Get the next empty row to append the data
  var nextRow = Sheets.Spreadsheets.Values.get(sheetId, sheetName + "!A:A").values.length + 1;

  // Set the range for appending data
  var range = sheetName + "!A" + nextRow;
  // Append data to the Google Sheet using the Sheets API
  Sheets.Spreadsheets.Values.append(resource, sheetId, range, {
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS"
  });


}




//  ~🟣 PULLS FROM MAJOR DATABASE AND THEN ADDS EXTRA DETAILS AND PUSHES TO THE MMINOR DATABASE.
//  ~🟣 Account for the first row being headers
function extractRowsFromMajorDatabase() {



  // 🟣 NEW COL NAMES
  var columnNames = [
  "Task Id","Task Title", "Description", "Category", "Task Type", "Priority", "This Week?", "This Month?", "Due Date", "Start Date", "Gcal ID", "Randomizer", "Creation Date", "Duration", "Priority Gradient", "Classification", "Prio Grad Value"
  ];



  var data = getDataFromSheet()


  function addDummyColumns(data, numDummyColumns) {
    return data.map(function(row) {
      var newRow = row.slice(); // Create a copy of the row
      for (var i = 0; i < numDummyColumns; i++) {
        newRow.push('');
      }
      return newRow;
    });
  }


  var rows = addDummyColumns(data, 3);

  // =================================================================



  var today_deadline = []
  today_deadline.push(columnNames)
  var week_deadline = []
  week_deadline.push(columnNames)
  var month_deadline =[]
  month_deadline.push(columnNames)
  var week_assigned = []
  week_assigned.push(columnNames)
  var month_assigned = []
  month_assigned.push(columnNames)




  var todayy = new Date();
  todayy.setHours(0, 0, 0, 0);
  var todayval= todayy.valueOf();

  var weekk = new Date(todayy.getTime() + 7 * 24 * 60 * 60 * 1000);
  var weekval= weekk.valueOf();

  var monthh = new Date(todayy.getFullYear(), todayy.getMonth() + 1, todayy.getDate());
  var monthval= monthh.valueOf()

  var day3 = new Date(todayy.getFullYear(), todayy.getMonth() , todayy.getDate() +3);
  var day3val= day3.valueOf()

  var day15 = new Date(todayy.getFullYear(), todayy.getMonth() , todayy.getDate() +15);
  var day15val= day15.valueOf()



  // Assign Priority to each event
  rows.forEach(row => {

    var d = new Date(row[8]);
    d.setHours(0, 0, 0, 0);
    var dval=d.valueOf();


    if (row[8] == "")
    {
      row[14] = "Grey";
      row[16] = "5";
    }
    else if (dval < todayval)
    {
      row[14] = "Purple";
      row[16] = "-1";
      // row["Classification"] = "Today_Deadline"
    }
    else if (dval == todayval)
    {
      row[14] = "FIRE";
      row[16] = "0";
      // row["Classification"] = "Today_Deadline"
    }
    else if (dval <= day3val)
    {
      row[14] = "Red";
      row[16] = "1";
      // row["Classification"] = "Week_Deadline"
    }
    else if (dval <= weekval)
    {
      row[14] = "Orange";
      row[16] = "2";
      // row["Classification"] = "Week_Deadline"
    }
    else if (dval <= day15val)
    {
      row[14] = "Yellow";
      row[16] = "3";
    }
    // else if (dval <= monthval)
    // {
    //   row["Classification"] = "Month_Deadline"
    // }
    else if (dval > day15val)
    {
      row[14] = "Green";
      row[16] = "4";
    }
    else
    {
      row[14] = "Grey";
      row[16] = "5";
    }



  });



  // Assign This Week and This Month and perform classification
  rows.forEach(row => {

    var d = new Date(row[8]);
    d.setHours(0, 0, 0, 0);
    var dval=d.valueOf();

    var s = new Date(row[9]);
    s.setHours(0, 0, 0, 0);
    var sval=s.valueOf();

    if (row[8] == "")
    {
      if (row[9] != ""){
        var startdateog = new Date(row[9])
        var startFormattedDateWithTime = Utilities.formatDate(startdateog, "GMT+05:30", 'dd MMM yy');
        row[9]= startFormattedDateWithTime
      }
      if (row[6] == "Yes")
      {
        row[15] = "Week_Assigned"
        week_assigned.push(row)
      }
      else if (row[7] == "Yes")
      {
        row[15] = "Month_Assigned"
        month_assigned.push(row)
      }

      else if (sval <= weekval)
      {
        row[15] = "Week_Assigned"
        week_assigned.push(row)
      }
      else if (weekval < sval <= monthval)
      {
        row[15] = "Month_Assigned"
        month_assigned.push(row)
      }

    }
    else if (row[8] != "")
    {
      var duedateog = new Date(row[8])
      var formattedDateWithTime = Utilities.formatDate(duedateog, "GMT+05:30", 'HH:mm dd MMM yy');
      row[8]= formattedDateWithTime

      if (row[9] != ""){
        var startdateog = new Date(row[9])
        var startFormattedDateWithTime = Utilities.formatDate(startdateog, "GMT+05:30", 'dd MMM yy');
        row[9]= startFormattedDateWithTime
      }

      if ((dval > monthval) && (sval <= monthval) && (row[15] == ""))
      {
        row[15] = "Month_Assigned"
        month_assigned.push(row)
      }
      else if (dval < todayval)
      {
        row[15] = "Today_Deadline"
        today_deadline.push(row)
      }
      else if (dval == todayval)
      {
        row[15] = "Today_Deadline"
        today_deadline.push(row)
      }
      else if (dval <= day3val)
      {
        row[15] = "Week_Deadline"
        week_deadline.push(row)
      }
      else if (dval <= weekval)
      {
        row[15] = "Week_Deadline"
        week_deadline.push(row)
      }
      else if (dval <= monthval)
      {
        row[15] = "Month_Deadline"
        month_deadline.push(row)
      }
    }




  });






  // Replace 'spreadsheet_id' with your Google Sheets file ID
  const spreadsheetId = '%%minor_database_id%%'; // Replace with your Google Sheets file ID

  const sheet_name_list= ['Today_Deadline','Week_Deadline', 'Month_Deadline', 'Week_Assigned', 'Month_Assigned']

  var sheetName = sheet_name_list[0];
    const resource0 = {
    values: today_deadline
  };

  Sheets.Spreadsheets.Values.clear({}, spreadsheetId, sheetName); // Clear existing data in the sheet
  Sheets.Spreadsheets.Values.append(resource0, spreadsheetId, sheetName, { valueInputOption: "RAW" });
  //===================================================================================================


  var sheetName = sheet_name_list[1];
    const resource1 = {
    values: week_deadline
  };

  Sheets.Spreadsheets.Values.clear({}, spreadsheetId, sheetName); // Clear existing data in the sheet
  Sheets.Spreadsheets.Values.append(resource1, spreadsheetId, sheetName, { valueInputOption: "RAW" });
  //===================================================================================================
  var sheetName = sheet_name_list[2];
    const resource2 = {
    values: month_deadline
  };

  Sheets.Spreadsheets.Values.clear({}, spreadsheetId, sheetName); // Clear existing data in the sheet
  Sheets.Spreadsheets.Values.append(resource2, spreadsheetId, sheetName, { valueInputOption: "RAW" });
  //===================================================================================================
  var sheetName = sheet_name_list[3];
    const resource3 = {
    values: week_assigned
  };

  Sheets.Spreadsheets.Values.clear({}, spreadsheetId, sheetName); // Clear existing data in the sheet
  Sheets.Spreadsheets.Values.append(resource3, spreadsheetId, sheetName, { valueInputOption: "RAW" });
  //===================================================================================================
  var sheetName = sheet_name_list[4];
    const resource4 = {
    values: month_assigned
  };

  Sheets.Spreadsheets.Values.clear({}, spreadsheetId, sheetName); // Clear existing data in the sheet
  Sheets.Spreadsheets.Values.append(resource4, spreadsheetId, sheetName, { valueInputOption: "RAW" });

  return true;
}
























function random_alpha_num_gen(){
  const length = 32;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

// ==============================

// ~ A FUCNTION THAT I USED TO TEST IF THE getUpcomingEvents FUCNTION WORKS WELL.
function printUpcomingEvents() {
  var upcomingEvents = getUpcomingEvents();

  for (var i = 0; i < upcomingEvents.length; i++) {
    var event = upcomingEvents[i];

    // Logger.log('Calendar: ' + event.calendar);
    // Logger.log('Eventid: ' + event.eventId);
    // Logger.log('Event Title: ' + event.title);
    // Logger.log('Start Time: ' + event.startTime);
    // Logger.log('End Time: ' + event.endTime);
    // Logger.log('---------------------');
    Logger.log(event)
  }
}


function get_tester() {
  var dataArray = getDataFromSheet();
  // console.log(dataArray); // Output the data in the array of arrays

  function saveLogToFile(logData) {
    var folderName = "Logs"; // Change this to your desired folder name
    var fileName = "log_data.txt"; // Change this to your desired file name

    var folder = getOrCreateFolder(folderName);
    if (folder) {
      var file = folder.createFile(fileName, JSON.stringify(logData), MimeType.PLAIN_TEXT);
      Logger.log("Log data saved to file: " + file.getName());
    } else {
      Logger.log("Error: Unable to find or create the folder.");
    }
  }

  function getOrCreateFolder(folderName) {
    var folders = DriveApp.getFoldersByName(folderName);
    if (folders.hasNext()) {
      return folders.next();
    } else {
      return DriveApp.createFolder(folderName);
    }
  }



  saveLogToFile(dataArray)
}

