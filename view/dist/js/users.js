$(() => {
  const users = [
    {
      name: "Abraham Ugbeshe",
      webmail: "ugbeshe.abraham@lmu.edu.ng",
      reg_no: "1700172"
    }
  ];
  $("#name").html(users[0].name);
  $("#email").html(users[0].webmail);
});
