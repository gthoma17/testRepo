function myFunction() {
  var now = new Date();
  var twoWeeksFromNow = new Date(now.getTime() + (2 * 7 * 24 * 60 * 60 * 1000));
  var events = CalendarApp.getDefaultCalendar().getEvents(now, twoWeeksFromNow);
  var sheet = SpreadsheetApp.getActiveSheet();

  events.forEach(function(event){
    Logger.log(event.getStartTime());
  })
}
