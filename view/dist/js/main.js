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
    let regNoErr = $(".reg__err");
    let passwordErr = $(".pass__err");
    let inputLine = $(".inputVal");
    let inputLine2 = $(".inputVal2");
    let err = {
      passwordErr: "Password is Required.",
      regNoErr: "Registration Number Required."
    };
    if (reg_no === "" && password === "") {
      $(regNoErr)
        .html(err.regNoErr)
        .addClass("error__msg");
      $(inputLine).addClass("error__input" + " animated shake");
      $(inputLine2).addClass("error__input" + " animated shake");
      $(passwordErr)
        .html(err.passwordErr)
        .addClass("error__msg");
    } else if (reg_no !== "" && password === "") {
      $(regNoErr).html("Registration Number");
      $(regNoErr)
        .removeClass("error__msg")
        .addClass("success__msg");
      $(inputLine)
        .removeClass("error__input" + " animated shake")
        .addClass("success__input")
        .addClass("success__msg" + " success__input");
      $(passwordErr)
        .html(err.passwordErr)
        .addClass("error__msg");
      $(inputLine2).addClass(" error__input" + " animated shake");
    } else if (password !== "" && reg_no === "") {
      $(passwordErr).html("password entered");
      $(passwordErr)
        .removeClass("error__msg")
        .addClass("success__msg");
      $(inputLine2)
        .removeClass("error__input" + " animated shake")
        .addClass("success__input")
        .addClass("success__msg" + " success__input");
      $(regNoErr)
        .html(err.regNoErr)
        .addClass("error__msg");
      $(inputLine).addClass(" error__input" + " animated shake");
    } else {
      $(regNoErr)
        .html("")
        .addClass("success__msg");
      $(inputLine).removeClass("error__input" + " animated shake");
      $(inputLine2).removeClass("error__input" + " animated shake");
      $(passwordErr)
        .html("")
        .addClass("success__msg");
      $("#login").html("LOADING...");
      M.toast({
        html: "Sending Your Request...",
        classes: "toast__sending rounded"
      });
      $.ajax({
        method: "POST",
        url: "https://sanc-server.herokuapp.com/public/login",
        data: { reg_no: reg_no, password: password },
        cache: false,
        success: function(data) {
          let data_login = jQuery.parseJSON(data);
          let errorData = JSON.stringify(data_login.error.err_text);
          let successData = JSON.stringify(data_login.success.err_text);
          $("#login").html("Login");
          if (data_login.error) {
            $("#login").html("Login");
            M.toast({
              html: errorData,
              classes: "toast__failed rounded"
            });
          } else {
            M.toast({
              html: successData,
              classes: "toast__success rounded"
            });
            window.location = "index.html";
          }
        },
        error: function(err) {
          $("#login").html("Login");
          M.toast({
            html: "Sorry Sanctuary Unit couldn't connect to the server",
            classes: "toast__success rounded"
          });
        }
      });
    }
  });
});
