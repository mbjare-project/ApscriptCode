// Method 1
function copyPasteCode1()
{
  var sourceSheet = SpreadsheetApp.openById('your-soure-sheet-id').getSheetByName('Source Data').getRange('A1:M').getValues();
 
  SpreadsheetApp.getActive().getSheetByName('desination Sheet').getRange(1,1,values3.length,values3[0].length).setValues(values3);
}


//method 2

function IMPORT_DATA()
 {
  var sheetId = "SOURCE_GS_ID";
  var range = "SOURCE-GS-RANGE; //"SOURCE DATA!A1:H"
  var values = Sheets.Spreadsheets.Values.get(sheetId, range).values;
  var valueInputOption = "USER_ENTERED"; // Use "RAW" if you want to set raw values
  var resource = {
    values: values
  };
  var sheetId2 = "DESTINATION-GS-ID";
  var range2 =  "DESTINATION-GS-RANG; //"DEST DATA!A1:H"
  Sheets.Spreadsheets.Values.update(resource, sheetId2, range2, {
    valueInputOption: valueInputOption
  });
}
