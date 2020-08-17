$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const className = ["person1","person2","animal","exclamation","verb","noun","noun2"]
    
    className.forEach(function(element) {
      let all = $("input#" + element).val();
      $("." + element).text(all);
    });

    $("#story").show();

  });
})