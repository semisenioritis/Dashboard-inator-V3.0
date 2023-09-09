
function doPost(event) {
  try {

    var data=JSON.parse(event.postData.contents);
    if (data.dueDate == ""){
      data.dueDate = null;
    }
    var timeZone = 'Asia/Kolkata';

    var dtaskid = random_alpha_num_gen()
    var dtaskTitle =  data.taskTitle
    var ddescription = data.description
    var dduration  = data.duration
    var dcategory = data.category

    var dweek = data.week
    if (dweek== true){
      var dweekdone = "Yes"
    } else {
      var dweekdone = "No"
    }
    var dmonth = data.month
    if (dmonth== true){
      var dmonthdone = "Yes"
    } else {
      var dmonthdone = "No"
    }


    var dtaskType = data.taskType
    if ((dtaskType == "Infinite")&&(data.dueDate == null)){
      var dmonthdone = "Yes"
    }

    if ((dmonth== true)&&(dweek== true)){
      var dmonthdone = "No"
      var dweekdone = "Yes"
    }

    var dpriority = data.priority
    if (dpriority == "high"){
      var dprioritydone = "🔴"
    } else if (dpriority == "medium"){
      var dprioritydone = "🟡"
    }else {
      var dprioritydone = "🔵"
    }


    var ddueDate = new Date(data.dueDate)
    // var utcdueDate = ddueDate.toLocaleString('en-US', { timeZone: 'UTC' });
    var dstartDate = new Date(data.startDate)
    // var utcstartDate = dstartDate.toLocaleString('en-US', { timeZone: 'IST' });
    var drandomizer = (() => { return Math.floor(Math.random() * 900) + 100;})()
    var dlastedittime = (() => {const options = {timeZone: 'Asia/Kolkata'};return new Date().toLocaleString('en-US', options);})()



    var dreminder = data.reminder
    var ddeadline = data.deadline
    // ============================================================================

    var majorsheetId = "%%major_database_id%%"; // Replace with your actual Google Sheet ID
    var majorsheetName = "Central_Database";

    if (data.dueDate == null){
      var task_to_push = [
          // ✅ ASSIGN A TASK ID HERE.
          dtaskid,
          dtaskTitle,
          ddescription,
          dcategory,
          dtaskType,
          dprioritydone,
          dweekdone,
          dmonthdone,
          "",
          Utilities.formatDate(dstartDate, timeZone, 'yyyy-MM-dd'),
          "",
          // ✅ ASSIGN A RANDOMIZER HERE.
          drandomizer,
          dlastedittime,
          dduration
        ];


      var resource = {
        // values: task_to_push
        // 🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠🟠
        // i use this alternate line to introduce a bug on purpose to see how it is getting handled.
        values: [task_to_push]

      };

      var nextRow = Sheets.Spreadsheets.Values.get(majorsheetId, majorsheetName + "!A:A").values.length + 1;

      // Set the range for appending data
      var range = majorsheetName + "!A" + nextRow;
      // Append data to the Google Sheet using the Sheets API
      Sheets.Spreadsheets.Values.append(resource, majorsheetId, range, {
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS"
      });
    }else{
      var task_to_push = [
          // ✅ ASSIGN A TASK ID HERE.
          dtaskid,
          dtaskTitle,
          ddescription,
          dcategory,
          dtaskType,
          dprioritydone,
          dweekdone,
          dmonthdone,
          Utilities.formatDate(ddueDate, timeZone, 'yyyy-MM-dd HH:mm'),
          Utilities.formatDate(dstartDate, timeZone, 'yyyy-MM-dd'),
          "",
          // ✅ ASSIGN A RANDOMIZER HERE.
          drandomizer,
          dlastedittime,
          dduration
        ];

      var resource = {
        values: [task_to_push]
      };



      var nextRow = Sheets.Spreadsheets.Values.get(majorsheetId, majorsheetName + "!A:A").values.length + 1;

      // Set the range for appending data
      var range = majorsheetName + "!A" + nextRow;
      // Append data to the Google Sheet using the Sheets API
      Sheets.Spreadsheets.Values.append(resource, majorsheetId, range, {
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS"
      });
    }
    // ~ ✅ JUST FINISHED PUSHING THE NEW TASK TO MAJOR DATABASE

   
    // ============================================================================

    var rowtopush = {
      'Task Id': dtaskid,
      'Task Title': dtaskTitle ,
      'Description': ddescription,
      'Category': dcategory,
      'Task Type': dtaskType,
      'Priority': dprioritydone,
      'This Week?': dweekdone,
      'This Month?': dmonthdone,
      'Due Date': data.dueDate,
      'Start Date': data.startDate,
      'Gcal ID': null,
      'Randomizer': drandomizer,
      'Creation Date': dlastedittime,
      'Duration': dduration,
      'Priority Gradient': null,
      'Classification': null,
      'Prio Grad Value': null,
      }

    var todayy = new Date();
    todayy.setHours(0, 0, 0, 0);
    var todayval= todayy.valueOf();

    var monthh = new Date(todayy.getFullYear(), todayy.getMonth() + 1, todayy.getDate());
    var monthval= monthh.valueOf()

    var d = new Date(ddueDate);
    d.setHours(0, 0, 0, 0);
    var dval=d.valueOf();

    var s = new Date(dstartDate);
    s.setHours(0, 0, 0, 0);
    var sval=s.valueOf();

    if (data.dueDate == null){
      if (sval <= monthval){
        // call function to push into database
        gsheetPusher(rowtopush);
      }
    }else if(data.dueDate != null){

      if ((dval <= monthval)||( sval <= monthval)){
        // pushinto db
        gsheetPusher(rowtopush);
      }
      // push into notion calendar too. even if it is far away event, it is scheddulable.
      gcalMaker(rowtopush, "notioncal");
    }

    if(dreminder == true){
      gcalMaker(rowtopush, "remindercal")
    }
    if(ddeadline == true){
      gcalMaker(rowtopush, "deadlinecal")
    }


    // ============================================================================
    var json={
      status:"Sucess!"
    }
    return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    var json={
      status:"Something went wrong!😭",
      error: error
    }
    return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);

  }
}


function gcalMaker(rowtopush, calendar_name){

  all_cal_names ={
    "notioncal" : "%%cal_to_which_events_get_populated%%",
    "deadlinecal" : "%%cal_which_is_deadline_cal%%",
    "remindercal" : "%%cal_that_is_reminder_cal%%"
  }

  var calendarId = all_cal_names[calendar_name]
  var calendar = CalendarApp.getCalendarById(calendarId);

  var event_title = rowtopush["Task Title"];
  var event_desc = rowtopush["Description"];
  var event_time = new Date (rowtopush["Due Date"]);
  console.log(event_time)

  if(calendar_name != "remindercal"){
    var end_time = new Date(event_time.getTime() + 60 * 60 * 1000);
    var start_time = new Date(event_time.getTime() - 60 * 60 * 1000);
    var event = calendar.createEvent(event_title, start_time, end_time, {
      description: event_desc
    });

    Logger.log('Event created: ' + event.getId());
  }else if (calendar_name == "remindercal"){

    // one day before rem
    var end_time = new Date(event_time.getTime() + 60 * 60 * 1000);
    var start_time = new Date(event_time.getTime() - 60 * 60 * 1000);
    var event = calendar.createEvent(event_title, start_time, end_time, {
      description: event_desc,
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 24 * 60 }, // One day before (24 hours * 60 minutes)
          { method: 'popup', minutes: 60 } // One hour before
        ]
      }
    });

    Logger.log('Events created: ' + event.getId());

  }



}


function gcalMakerTester (){
    var rowtopush = {
    'Task Title': "Im learning to fly, but I aint got wings" ,
    'Description': "hurts like heaven but it feels so feels so good",
    'Category': "IITM",
    'Task Type': "Fixed",
    'Priority': "🔴",
    'This Month?': null,
    'This Week?': null,
    'Due Date': "2023-07-07T22:06",
    'Start Date': "2023-07-07",
    'Gcal ID': null,
    'Done Date': null,
    'Priority Gradient': null,
    'Task Id': null,
    'Randomizer': null,
    'Classification': null,
    'Prio Grad Value': null
    }

  gcalMaker(rowtopush, "notioncal");
  gcalMaker(rowtopush, "deadlinecal");
  gcalMaker(rowtopush, "remindercal");
}



function gsheetPusherTester(){

    var rowtopush = {
    'Task Id': "sssssssssssssssss",
    'Task Title': "HALLEELUGHYEAHHH" ,
    'Description': "hurts like heaven but it feels so feels so good",
    'Category': "IITM",
    'Task Type': "Fixed",
    'Priority': "🔴",
    'This Week?': null,
    'This Month?': null,
    'Due Date': "2023-07-07",
    'Start Date': "2023-07-07",
    'Gcal ID': null,
    'Priority Gradient': null,
    'Randomizer': "nnnnnnnnnnnnnnn",
    'Classification': null,
    'Prio Grad Value': null,
    'Duration': null,
    'Creation Date': "2023-07-07"
    }

    gsheetPusher(rowtopush)



}


function gsheetPusher(rowtopush){



  const columnNames = [
  "Task Id","Task Title", "Description", "Category", "Task Type", "Priority", "This Week?", "This Month?", "Due Date", "Start Date", "Gcal ID", "Priority Gradient", "Randomizer", "Classification", "Prio Grad Value", "Duration", "Creation Date"
  ];

  // rowtopush["Task Id"] = random_alpha_num_gen()

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



  var sheet_name_to_push=0


  var d = new Date(rowtopush["Due Date"]);
  d.setHours(0, 0, 0, 0);
  var dval=d.valueOf();

  var s = new Date(rowtopush["Start Date"]);
  s.setHours(0, 0, 0, 0);
  var sval=s.valueOf();

    if (rowtopush["Start Date"] != ""){
      var startdateog = new Date(rowtopush["Start Date"])
      var startFormattedDateWithTime = Utilities.formatDate(startdateog, "GMT+05:30", 'dd MMM yy');
      rowtopush["Start Date"]= startFormattedDateWithTime
    }

    if (rowtopush["Due Date"] == null)
    {
      rowtopush["Priority Gradient"] = "Grey";
      rowtopush["Prio Grad Value"] = "5";
    }
    else if (dval < todayval)
    {
      rowtopush["Priority Gradient"] = "Purple";
      rowtopush["Prio Grad Value"] = "-1";
      // row["Classification"] = "Today_Deadline"
    }
    else if (dval == todayval)
    {
      rowtopush["Priority Gradient"] = "FIRE";
      rowtopush["Prio Grad Value"] = "0";
      // row["Classification"] = "Today_Deadline"
    }
    else if (dval <= day3val)
    {
      rowtopush["Priority Gradient"] = "Red";
      rowtopush["Prio Grad Value"] = "1";
      // row["Classification"] = "Week_Deadline"
    }
    else if (dval <= weekval)
    {
      rowtopush["Priority Gradient"] = "Orange";
      rowtopush["Prio Grad Value"] = "2";
      // row["Classification"] = "Week_Deadline"
    }
    else if (dval <= day15val)
    {
      rowtopush["Priority Gradient"] = "Yellow";
      rowtopush["Prio Grad Value"] = "3";
    }
    // else if (dval <= monthval)
    // {
    //   row["Classification"] = "Month_Deadline"
    // }
    else if (dval > day15val)
    {
      rowtopush["Priority Gradient"] = "Green";
      rowtopush["Prio Grad Value"] = "4";
    }
    else
    {
      rowtopush["Priority Gradient"] = "Grey";
      rowtopush["Prio Grad Value"] = "5";
    }


    if (rowtopush["Due Date"] == null)
    {
      if (rowtopush["This Week?"] == "Yes")
      {
        rowtopush["Classification"] = "Week_Assigned"
          var sheet_name_to_push=3
      }
      else if (rowtopush["This Month?"] == "Yes")
      {
        rowtopush["Classification"] = "Month_Assigned"
          var sheet_name_to_push=4
      }

      else if (sval <= weekval)
      {
        rowtopush["Classification"] = "Week_Assigned"
          var sheet_name_to_push=3
      }
      else if (weekval < sval <= monthval)
      {
        rowtopush["Classification"] = "Month_Assigned"
          var sheet_name_to_push=4
      }


    }
    else if (rowtopush["Due Date"] != null)
    {


      var duedateog = new Date(rowtopush["Due Date"])
      var formattedDateWithTime = Utilities.formatDate(duedateog, "GMT+05:30", 'HH:mm dd MMM yy');
      rowtopush["Due Date"]= formattedDateWithTime

      if ((dval > monthval) && (sval <= monthval) && (rowtopush["Classification"] == null))
      {
        rowtopush["Classification"] = "Month_Assigned"
          var sheet_name_to_push=4
      }
      else if (dval < todayval)
      {
        rowtopush["Classification"] = "Today_Deadline"
          var sheet_name_to_push=0
      }
      else if (dval == todayval)
      {
        rowtopush["Classification"] = "Today_Deadline"
          var sheet_name_to_push=0
      }
      else if (dval <= day3val)
      {
        rowtopush["Classification"] = "Week_Deadline"
          var sheet_name_to_push=1
      }
      else if (dval <= weekval)
      {
        rowtopush["Classification"] = "Week_Deadline"
          var sheet_name_to_push=1
      }
      else if (dval <= monthval)
      {
        rowtopush["Classification"] = "Month_Deadline"
          var sheet_name_to_push=2
      }
    }


    console.log(rowtopush)


  const spreadsheetId = '%%minor_database_id%%'; // Replace with your Google Sheets file ID

  const sheet_name_list= ['Today_Deadline','Week_Deadline', 'Month_Deadline', 'Week_Assigned', 'Month_Assigned']

  var sheetName = sheet_name_list[sheet_name_to_push];

  console.log(sheetName)

  var newRow = [];

  for (var key in rowtopush) {
      if (rowtopush.hasOwnProperty(key)) {
        newRow.push(rowtopush[key] || '');
      }
  }
  console.log(newRow)

    const resource0 = {
    values: [newRow]
  };

  // Sheets.Spreadsheets.Values.append(resource0, spreadsheetId, sheetName, { valueInputOption: "RAW" });

  // =================================

  // Get the next empty row to append the data
  var nextRow = Sheets.Spreadsheets.Values.get(spreadsheetId, sheetName + "!A:A").values.length + 1;

  // Set the range for appending data
  var range = sheetName + "!A" + nextRow;
  // Append data to the Google Sheet using the Sheets API
  Sheets.Spreadsheets.Values.append(resource0, spreadsheetId, range, {
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS"
  });





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



