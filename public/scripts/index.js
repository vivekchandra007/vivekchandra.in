var app = new Vue({
  el: "#app",
  data: {
    name: "Vivek Chandra",
  },
});

$(document).ready(function () {
  $("#imageFullScreen").hide();
  $('[data-toggle="tooltip"]').tooltip();
  $("#logo").fadeIn(1000);
  $("#btnMenuCollapse").click(function () {
    $(".nav li a").css("background", "rgba(231, 76, 60, 1.0)");
  });
  $("#imageFullScreen .close-icon").click(function  ()  {
    $("#imageFullScreen").hide();
   });
});

function topMenuClicked(menuItemName) {
  switch (menuItemName) {
    case "HOME":
      $("#content").load("../index.html");
      break;
    case "PROJECTS":
      $("#content").load("../projects.html");
      break;
    case "APPS":
      $("#content").load("../apps.html");
      break;
    case "PHOTOGRAPHY":
      $("#content").load("../photography.html");
      break;
    case "LITERARY WORKS":
      $("#content").load("../literary-works.html");
      break;
    case "IDEAS":
      $("#content").load("../ideas.html");
      break;
    default:
      $("#content").html("NO CONTENT FOUND!");
      break;
  }
  $('.navbar-collapse.navbar-right.collapse[aria-expanded="true"]').removeClass(
    "in"
  );
}

function showImageFullScreen(imagePath) {
  console.log(imagePath);
  $("#imageFullScreen .fullScreen").attr("src", imagePath);
  $("#imageFullScreen").fadeIn();
}
