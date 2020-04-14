$(document).ready(function () {
  //on save button save local storage
  $(".Save").on("click", function () {
    console.log("saveButtonClick");
    var inputValue = $(this).siblings(".description").val();
    var id = $(this).siblings(".description").attr("id");
    console.log(inputValue, id);
    localStorage.setItem(id, inputValue);

  })

  function hourlyBackground() {
    var currentTime = moment().hours()
    console.log(currentTime);

    $(".Timeblocks").each(function () {
      var hours = parseInt($("hour").val())

      console.log(hours)
      if (hours<currentTime){
        $(this).addclass("past")
      
      }
      else if(hours===currentTime){
        $(this).addclass("present")
        $(this).removeclass("past")


      }else{
        $(this).addclass("future")
        $(this).removeclass("past")
        $(this).removeclass("present")
      }
    })
  }

  //on page retrive the local storage items
  $("#8h").val(localStorage.getItem("8h"));
  $("#9h").val(localStorage.getItem("9h"));
  $("#10h").val(localStorage.getItem("10h"));
  $("#11h").val(localStorage.getItem("11h"));
  $("#12h").val(localStorage.getItem("12h"));
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY "))
  hourlyBackground()

});