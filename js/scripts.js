function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function() {
  $("form#userinput").submit(function(event) {
    event.preventDefault();

    var inputtedFirst = $("#firstname").val();
    var inputtedLast = $("#lastname").val();

    var newContact = new Contact(inputtedFirst, inputtedLast);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".firstname").text(newContact.firstName);
      $(".lastname").text(newContact.lastName);
    });

    $("input#firstname").val("");
    $("input#lastname").val("");

  });
});
