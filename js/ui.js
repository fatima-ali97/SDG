const user = document.getElementById("user");

function getInfo() {
  const fname = localStorage.getItem("fname");

  if (fname) {
    user.innerHTML =
      fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();

    if (window.location.pathname.includes("page1.html")) {
      const link2 = document.getElementById("join");
      const reg2 = document.getElementById("join2");
      link2.style.display = "none";
      reg2.style.display = "none";
    }
  } else {
    user.innerHTML = "";
    if (window.location.pathname.includes("page1.html")) {
      const link2 = document.getElementById("join");
      const reg2 = document.getElementById("join2");
      link2.style.display = "block";
      reg2.style.display = "block";
    }
  }
}
