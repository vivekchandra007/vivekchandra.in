const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Vivek Chandra",
      currentPage: "HOME",
      photographs: [
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3cWvqNGDJ_MMFNys4Lm9yCs4veKbbZxYA67L22fzmy6_0Uql-BBAcuc5xRp_2nJ3pA0MtA8UUWKjQpVW9_SXAtxtiD0Ot7sqxq6nCALI1uEkbymf6AaGD0PTcDF3pqoUMMVmWDSr9m5IC9vcjUvBrmG=w956-h637-no",
          title: "Tree of Life",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3ersflWlHjqRDsLbjrTdLAXAmSaQuPRBGfm1_tnCyOST5gmrz1jR8J3qnH_IxR7v0wMqmsbhWkrx_6DVn2u6LhDoY-C7HR8rMcH0NzthKEmc6r_3vaCR8NgFjMCAFc6vKBQ20QRTXEt1pe09yKs3rWB=w956-h637-no?authuser=0",
          title: "Nature's Canvas",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3fq5Orzj_Q9GQEFaLVoeoqyA8CKtELHR7mvAWsSx5gVGWH4sPBQTDlsBWhrmMrvxcedR_v5dqcoMaSLZtRZMEKjVCqru5ybda03DzAtdKe0ATKxW1EZtA-W5ncvQIx0LL73ysw1mijObQv2Pm-c3Tobwg=w850-h637-no?authuser=0",
          title: "The Shore",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3epHh88jHOVLspOpkKhzDj7cHp_bbg24MrNlXP4fijhA43eETa_8W4_qrT_dgaGdeILaqVgRRukv5JOi2UGs3txCtV4jq1UrK7xAb3ajB_Me8OYU64euBlnaZaWnfSgs1EaYlX50ATLLkmeDLAvZHN4WA=w850-h637-no?authuser=0",
          title: "Colouruette",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3dZQjPYZtY59SX6jOLRTtfoFUOzzXV922Ad490sa8iTp07TYvrzSWJoNA4GxqGoYiiYhC_c7stiDDCuK-ZbAVuhhn1k8x3t6PfNI4DnZcN1vCRejxjCHBw61ngjVuYqb-FAoLJWZuO9g4MfNwrkG4eE4g=w1275-h637-no?authuser=0",
          title: "Fire-Water-Earth-Air-Sky",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3cgusmzisC2V1FnsL9zkY0KqbN-GbDsnUh0wliu9q1pT5VkszSEi6puL6nuKa9BA2Bx70fMCzJOYeBJoMZQ6aiwBE_w2n5y779Xst02WPjvLsHGVEPjE4TaBhigqCJyUkEVAin2Kqdnk5I8kzJZJSQoLg=w850-h637-no?authuser=0",
          title: "Nature's Bow",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3fNVGUzV-yBvPEywaMUM5avfcPpYIYh-4Oun_1X-NlMTyt9UTx3DF1X7E5wdlYdB9E988qrdAGk6IZ-inKEALF77eE0NICMMqEqN7nzgAr1YUnGChfapZfnmnifriMAct83KmlmCUBk7JCWT98ott1u8A=s637-no?authuser=0",
          title: "Milkfall",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3ce_sOwo7TbXBPmxnZW1jhT2ujnr44CHm0LSshdSInt3Ctw2Dx8C3FqQK0X3vkCvB6Ns46jxU5O0KxQyvdPdGBPvzTqSfVJKtYH8rBSptuTL2pvFKqJBK2x7GFjL4OSgSR-NjO7R2WEBFFqeeI-C3KEuQ=w478-h637-no?authuser=0",
          title: "Broken Symmetry",
        },
        {
          path:
              "https://lh3.googleusercontent.com/pw/ACtC-3e6aEKeo9sUWLcR5cD9VgjLTWmJrv4NkpQVML3eTMGx2WcfJSj2WUwVaqqEnZ6HFTFcTSgfJB0rvex1ndoIq43x2SuGQq4x1wrK_-YKrvP05Hzuknh17OOU2CwvA4-sUgnKVvb6IE9_HqLW8I7CRiRD=w956-h637-no?authuser=0",
          title: "Galactic Balance",
        },
      ]
    }
  }
}).mount('#app');

$(document).ready(function () {
  $("#imageFullScreen").hide();
  $('[data-toggle="tooltip"]').tooltip();
  $("#logo").fadeIn(1000);
  $("#btnMenuCollapse").click(function () {
    $(".nav li a").css("background", "rgba(231, 76, 60, 1.0)");
  });
  $("#imageFullScreen").click(function (e) {
    if (e.target !== this) {
      return;
    }
    $("#imageFullScreen").hide();
  });
  $("#imageFullScreen .close-icon").click(function () {
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
  this.currentPage = menuItemName;
  $('.navbar-collapse.navbar-right.collapse[aria-expanded="true"]').removeClass("in");
}

function showImageFullScreen(imagePath) {
  console.log(imagePath);
  $("#imageFullScreen .fullScreen").attr("src", imagePath);
  $("#imageFullScreen").fadeIn();
}
