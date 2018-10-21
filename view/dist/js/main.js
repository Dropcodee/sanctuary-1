// INITIALIZING THE SELECT IN THE FORMS
$(document).ready(function() {
  $("select").formSelect();
});
// INITIALIZING THE MODAL FOR TERMS AND CONDITION
$(document).ready(function() {
  $(".modal").modal();
});
// INITIALIZING THE DATE PICKER

$(document).ready(function() {
  $(".datepicker").datepicker();
});

$(function() {
  $(document).on("click", "#login", function(e) {
    e.preventDefault();
    let reg_no = $("#RegNo").val();
    let password = $("#password").val();

    if (reg_no === "" || password === "") {
      let err = {
        password: "Password field required",
        reg_no: "Registration Field required"
      };
      $(".reg_err").html(err.reg_no);
      $(".pass_err").html(err.password);
    } else {
      $("#login").html("Loading...");
      $.ajax({
        method: "POST",
        url: "https://sanc-server.herokuapp.com/public/login",
        data: { reg_no: reg_no, password: password },
        cache: false,
        success: function(data) {
          var data_login = jQuery.parseJSON(data);
          if (data_login.error) {
            console.log(data_login.error);
            $(".show_err").html(data_login.error.err_text);
            $("#login").html("Login");
          } else {
            console.log(data_login.success);
            $(".show_success").html(data_login.success.success_text);
            $(".show_err").html("");
            window.location = "index.html";
          }
        },
        error: function(err) {
          $(".show_err").html(
            "Sorry Sanctuary Unit couldn't connect to the server"
          );

          $("#login").html("Login");
        }
      });
    }
  });
});
