function doGet(request) {
    return fetchAllData();
  }
  
  function doPost(e){
      return fetchAllData();
  }
  
  function removeEmptyRows(data) {
    return data.filter(function(row) {
      return row.join('').trim() !== '';
    });
  }
  
  
  
  function fetchAllData() {
    var spreadsheetId = '<your-minor-database-spreadsheetid>'; // Replace with your Google Sheets file ID
    var sheetNames = ['Today_Deadline','Week_Deadline', 'Month_Deadline', 'Week_Assigned', 'Month_Assigned'];
    
    var objects = [];
    
    for (var i = 0; i < sheetNames.length; i++) {
      var sheetName = sheetNames[i];
      var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      var sheet = spreadsheet.getSheetByName(sheetName);
      var data = sheet.getDataRange().getValues();
      data = removeEmptyRows(data);
  
      if(sheetName=="Today_Deadline"){
        var sortingOrder = {
          priority: {
            "🔴": 1,
            "🟡": 2,
            "🔵": 3,
          },
          type: {
            'Fixed': 1,
            "Fixed & Scheduled": 2,
            "Scheduled": 3,
            "Infinte":4 
          },
          priograd: {
            "FIRE": 1,          
            "Purple": 2,
            "Red": 3,
            "Orange": 4,
            "Yellow": 5,
            "Green": 6,
            "Grey": 7
          },
        }; 
      }else{
        var sortingOrder = {
          priority: {
            "🔴": 1,
            "🟡": 2,
            "🔵": 3,
          },
          type: {
            'Fixed': 1,
            "Fixed & Scheduled": 2,
            "Scheduled": 3,
            "Infinte":4 
          },
          priograd: {
            "Purple": 1,
            "FIRE": 2,
            "Red": 3,
            "Orange": 4,
            "Yellow": 5,
            "Green": 6,
            "Grey": 7
          },
        }; 
      }
  
   
  
      data.shift();
      
  
  
      data.sort((a, b) => {
        // Sort by priograd (15th element)
        var sortByPriorityGrad = sortingOrder.priograd[a[14]] - sortingOrder.priograd[b[14]];
        if (sortByPriorityGrad !== 0) {
          return sortByPriorityGrad;
        }
  
        // Sort by priority (6th element)
        var sortByPriority = sortingOrder.priority[a[5]] - sortingOrder.priority[b[5]];
        if (sortByPriority !== 0) {
          return sortByPriority;
        }
  
        // Sort by type (7th element)
        var sortByType = sortingOrder.type[a[6]] - sortingOrder.type[b[6]];
        if (sortByType !== 0) {
          return sortByType;
        }
  
        // Sort by randomiser (12th element)
        var sortByRandom = a[11] - b[11];
        if (sortByRandom !== 0) {
          return sortByRandom;
        }
  
        // Sort by random alphanumeric strings (1st element)
        var sortByFirstElement = a[0].localeCompare(b[0]);
        if (sortByFirstElement !== 0) {
          return sortByFirstElement;
        }                        
  
      });
  

  
      // ~ ✅replace the original date with this new date that i just created
      // ~ ✅ replace the start time with a similarly modified time.
      // ~ ✅ account for the case of no due date present. 
      // ~ ✅ account for the case of no start date present
      // ~ ✅ account for the case of if time is 00:00 then just append the s month and year                        
      // ~ ✅ add this date modification code in initial population itself  
      // ~ 🟣the reason being that i cant afford a 6 second delay everytime the page refreshes. 
      // ~ 🟣sorting must happen every time but not this                            
      
      var object = {
        sheetName: sheetName,
        data: data
      };
      
      objects.push(object);
    }
    
    return ContentService.createTextOutput(JSON.stringify(objects))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  
  function fetchTester(){
  
    var spreadsheetId = '<your-minor-database-spreadsheetid>'; // Replace with your Google Sheets file ID
    var sheetNames = ['Today_Deadline','Week_Deadline', 'Month_Deadline', 'Week_Assigned', 'Month_Assigned'];
    
    var objects = [];
    
    for (var i = 0; i < sheetNames.length; i++) {
      var sheetName = sheetNames[i];
      var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      var sheet = spreadsheet.getSheetByName(sheetName);
      var data = sheet.getDataRange().getValues();
      data = removeEmptyRows(data);
  
      var sortingOrder = {
        priority: {
          "🔴": 1,
          "🟡": 2,
          "🔵": 3,
        },
        type: {
          'Fixed': 1,
          "Fixed & Scheduled": 2,
          "Scheduled": 3,
          "Infinte":4 
        },
        priograd: {
          "Purple": 1,
          "FIRE": 2,
          "Red": 3,
          "Orange": 4,
          "Yellow": 5,
          "Green": 6,
          "Grey": 7
        },
      };  
  
      data.shift()
  
      data.sort((a, b) => {
        // Sort by priograd (15th element)
        var sortByPriorityGrad = sortingOrder.priograd[a[14]] - sortingOrder.priograd[b[14]];
        if (sortByPriorityGrad !== 0) {
          return sortByPriorityGrad;
        }
  
        // Sort by priority (6th element)
        var sortByPriority = sortingOrder.priority[a[5]] - sortingOrder.priority[b[5]];
        if (sortByPriority !== 0) {
          return sortByPriority;
        }
  
        // Sort by type (7th element)
        var sortByType = sortingOrder.type[a[6]] - sortingOrder.type[b[6]];
        if (sortByType !== 0) {
          return sortByType;
        }
  
        // Sort by randomiser (12th element)
        var sortByRandom = a[11] - b[11];
        if (sortByRandom !== 0) {
          return sortByRandom;
        }
  
        // Sort by random alphanumeric strings (1st element)
        var sortByFirstElement = a[0].localeCompare(b[0]);
        if (sortByFirstElement !== 0) {
          return sortByFirstElement;
        }                        
  
      });
      
            // Format the date with time
      var yourDateVariable = new Date(data[0][8])
      var timezone = yourDateVariable.getTimezoneOffset();
      var formattedDateWithTime = Utilities.formatDate(yourDateVariable, "GMT+05:30", 'HH:mm dd MMM yy');
      Logger.log(data[0][8])
      Logger.log(yourDateVariable)
      Logger.log(timezone)
      Logger.log(formattedDateWithTime)
  
  
      var object = {
        sheetName: sheetName,
        data: data
      };
  
      Logger.log(JSON.stringify(object))
  
      objects.push(object);
    }
    
  
  
  }