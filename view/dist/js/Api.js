// VALIDATION FOR NEW MEMBERS
$(() => {
  $(document).on("click", "#submit", e => {
    e.preventDefault();
    let userName = $("#user_name").val();
    let newRegNo = $("#newReg").val();
    let dateOfBirth = $("#DOB").val();
    let userDept = $("#Dept").val();
    let userReasons = $("#reasons").val();
    let userPassword = $("#password_new").val();
    let checkPassword = $("#checkPass").val();
    let checkTerms = $("#check_terms").val();
    let nameError = $(".nameClass");
    if (userName === "") {
      $(nameError).addClass("error__input animated shake");
    }
  });
});
// VALIDATION FOR NEW MEMBERS

// VALIDATION FOR LOGIN FORM
$(function() {
  let re, reg_no, password;
  $(document).on("keyup", "#RegNo, #password", function(e) {
    e.preventDefault();
    reg_no = $("#RegNo").val();
    password = $("#password").val();
    re = /[0-9]/;
    if (reg_no !== "") {
      $(".reg_err")
        .html("Enter Reg Number:")
        .removeClass("red-text");
      $(".inputVal")
        .addClass("success__input")
        .removeClass("error__input animated shake");
      $(".show_err").html("");
      if (!re.test(reg_no)) {
        $(".reg_err")
          .html("Reg no 1700172:")
          .addClass("red-text");
        $(".inputVal")
          .addClass("error__input animated shake")
          .removeClass("valid");
        $(".show_err").html("");
      }
      if (reg_no.length < 7) {
        $(".reg_err")
          .html("Reg no invalid:")
          .addClass("red-text");
        $(".inputVal").addClass("error__input animated shake");
        $(".show_err").html("");
      }
    }
    if (password !== "") {
      $(".pass_err")
        .html("Enter Password:")
        .removeClass("red-text");
      $(".inputVal2")
        .addClass("success__input")
        .removeClass("error__input animated shake");
      $(".show_err").html("");
      if (password.length < 8) {
        $(".pass_err")
          .html("Password length invalid:")
          .addClass("red-text");
        $(".inputVal2")
          .addClass("error__input animated shake")
          .removeClass("valid");
        $(".show_err").html("");
      }
    }
  });
  $(document).on("click", "#login", function(e) {
    e.preventDefault();
    reg_no = $("#RegNo").val();
    password = $("#password").val();
    re = /[0-9]/;
    if (reg_no === "") {
      $(".reg_err")
        .html("Reg number required:")
        .addClass("red-text active");
      $(".inputVal").addClass("error__input animated shake");
      $(".show_err").html("");
    } else if (password === "") {
      $(".pass_err")
        .html("Password required:")
        .addClass("red-text active");
      $(".inputVal2")
        .addClass("error__input animated shake")
        .removeClass("valid");
      $(".show_err").html("");
    } else if (!re.test(reg_no)) {
      $(".reg_err")
        .html("Reg no 1700172:")
        .addClass("red-text active");
      $(".inputVal")
        .addClass("error__input animated shake")
        .removeClass("valid");
      $(".show_err").html("");
    } else {
      $(".inputVal").removeClass("error__input animated shake");
      $(".inputVal2")
        .removeClass("error__input animated shake")
        .addClass("vaild");
      $("#login").addClass("disabled");
      $("input").attr("disabled", true);
      $(".animsition-loading").show();
      $.ajax({
        method: "POST",
        url: "https://sanc-server.herokuapp.com/public/login",
        data: { reg_no: reg_no, password: password },
        cache: false,
        success: function(data) {
          var data_login = jQuery.parseJSON(data);
          if (data_login.error) {
            console.log(data_login.error);
            M.toast({
              html: data_login.error.err_text,
              classes: "toast__failed rounded"
            });
            $("#login")
              .html("Login")
              .removeClass("disabled");
            $(".animsition-loading").hide();
            $("input").attr("disabled", false);
          } else {
            console.log(data_login.success);
            M.toast({
              html: data_login.success.success_text,
              classes: "toast__sending rounded"
            });
            $(".animsition-loading").hide();
            $("input").attr("disabled", false);
            $(".show_err").html("");
            window.location = "index.html";
          }
        },
        error: function() {
          M.toast({
            html: "Sorry Sanctuary Unit couldn't connect to the server",
            classes: "toast__success rounded"
          });

          $("#login")
            .html("Login")
            .removeClass("disabled");
          $("input").attr("disabled", false);
          $(".animsition-loading").hide();
        }
      });
    }
  });
});
// VALIDATION FOR LOGIN FORM
