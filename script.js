var currentActive = "filter-coordinators";
function changeMemberList(n) {
  if (n == 1) {
    document.getElementById(currentActive).className = String(
      document.getElementById(currentActive).className
    ).replace("active", "");
    currentActive = "filter-coordinators";
    document.getElementById(currentActive).className =
      document.getElementById(currentActive).className + "active";
    document.getElementById("m-coordinator").hidden = false;
    document.getElementById("m-core").hidden = true;
    document.getElementById("m-junior").hidden = true;
  }
  if (n == 2) {
    document.getElementById(currentActive).className = String(
      document.getElementById(currentActive).className
    ).replace("active", "");
    currentActive = "filter-core";
    document.getElementById(currentActive).className =
      document.getElementById(currentActive).className + " active";
    document.getElementById("m-coordinator").hidden = true;
    document.getElementById("m-core").hidden = false;
    document.getElementById("m-junior").hidden = true;
  }
  if (n == 3) {
    document.getElementById(currentActive).className = String(
      document.getElementById(currentActive).className
    ).replace("active", "");
    currentActive = "filter-junior";
    document.getElementById(currentActive).className =
      document.getElementById(currentActive).className + " active";
    document.getElementById("m-coordinator").hidden = true;
    document.getElementById("m-core").hidden = true;
    document.getElementById("m-junior").hidden = false;
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() < 300) {
      $(".arrow").css("visibility", "hidden");
      $(".btarrow").css("visibility", "hidden");
    } else {
      $(".arrow").css("visibility", "visible");
      $(".btarrow").css("visibility", "visible");
    }
  });
});

$(document).ready(function () {
  $(".arrow").on("click", function () {
    $("html, body").animate(
      { scrollTop: "0px", display: "none" },
      { duration: 500, easing: "linear" }
    );
  });
});
