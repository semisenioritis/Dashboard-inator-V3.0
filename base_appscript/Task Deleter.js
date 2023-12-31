function removeEmptyRows(data) {
  return data.filter(function(row) {
    return row.join('').trim() !== '';
  });
}


function deleteRowByContent(sheetName, searchValue) {
  // sheetName, searchValue, totalCols, spreadsheetId
  if (["Today_Deadline", "Week_Deadline", "Month_Deadline", "Week_Assigned", "Month_Assigned"].includes(sheetName)) {
    var totalCols = 17
    var spreadsheetId = "%%minor_database_id%%"
  }else if(["Central_Database","Done_Tasks"].includes(sheetName)){
    var totalCols = 14
    var spreadsheetId = "%%major_database_id%%"
  }

  var searchColumn = 1; // Assuming you want to search in the first column

  var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  var data = sheet.getRange(1, 1, sheet.getLastRow(), totalCols).getValues();

  data = removeEmptyRows(data);
  var row_deets =""

  for (var i = data.length - 1; i >= 0; i--) {
    if (data[i][searchColumn - 1] === searchValue) {
      row_deets = data[i]
      sheet.deleteRow(i + 1);
      break
    }
  }
  // Logger.log(row_deets)
  return row_deets
}



function taskDeleter(sheetName, searchValue){
  var minor_row_data = deleteRowByContent(sheetName, searchValue)
  var major_row_data = deleteRowByContent("Central_Database", searchValue)
  if (minor_row_data == "" || major_row_data == ""){
    return "No row found"
  }else{
    const donespreadsheetId = '%%major_database_id%%'; // Replace with your Google Sheets file ID

    var sheetName = "Done_Tasks";
    var resource = {
      values: [major_row_data]
    };

    // Get the next empty row to append the data
    var nextRow = Sheets.Spreadsheets.Values.get(donespreadsheetId, sheetName + "!A:A").values.length + 1;

    // Set the range for appending data
    var range = sheetName + "!A" + nextRow;
    // Append data to the Google Sheet using the Sheets API
    Sheets.Spreadsheets.Values.append(resource, donespreadsheetId, range, {
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS"
    });
    return "Task Deleted"
  }
}



function doPost(e) {
  var parameters = JSON.parse(e.postData.contents);
  var sheetName = parameters.sheetName;
  var searchValue = parameters.searchValue;

  try {
    answer = taskDeleter(sheetName, searchValue)
    var json={
      status:answer
    }
    return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    var json={
      status:error
    }
    return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
  }

}



function deleter_test(){
  var sheetName ="Today_Deadline"
  var searchValue = "lN278KuNz1yOFx22gNFsJBNbPspuldWw"
  deleteRowByContent(sheetName, searchValue)
}


function taskDeleterTest(){
  var sheetName ="Today_Deadline"
  var searchValue = "lN278KuNz1yOFx22gNFsJBNbPspuldWw"
  var answer = taskDeleter(sheetName, searchValue)
  Logger.log(answer)
}