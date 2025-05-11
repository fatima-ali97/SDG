/* const link = document.getElementById("join");
const reg = document.getElementById("join2");

function register() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const err = document.getElementById("errReg");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{8}$/;

  //todo validation
  if (!fname || !lname) {
    err.innerHTML = "";
    if (!fname) {
      err.innerHTML += "First name cannot be empty";
    } else {
      err.innerHTML += "Last name cannot be empty";
    }
    return;
  } else if (!emailPattern.test(email)) {
    err.innerHTML = "";
    err.innerHTML += "Incorrect email";
    return;
  } else if (!phonePattern.test(phone)) {
    err.innerHTML = "";
    err.innerHTML += "Phone number must 8 digits. (ex : 12345678 )";
    return;
  }
  err.innerHTML = "";
  alert("You've been successfully registered!");
  localStorage.setItem("fname", fname);
  link.style.display = "none";
  reg.style.display = "none";
  const user2 = document.getElementById("user");
  user2.innerHTML =
    fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
}
 */

//function to decide whether the Email is invalid
function isEmailWrong(email) {
  email = String(email);
  // loop through email String to verify if the "@" character is found, hence valid email
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      return false; // email is not wrong
    }
  }
  return true; // email is wrong
}

function formSubmission() {
  // capture the submitted values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const contactNo = document.getElementById("number").value;
  const email = document.getElementById("email").value;

  const responseDiv = document.getElementById("response");

  responseDiv.innerHTML = "";
  haveError = false;

  //verify first name is valid
  if (firstName.length < 3) {
    responseDiv.innerHTML += "First Name must have at least 3 characters. <br>";
    haveError = true;
  }

  // verify last name is valid
  if (lastName.length < 3) {
    responseDiv.innerHTML += "Last Name must have at least 3 characters. <br>";
    haveError = true;
  }

  //verify contact no is valid
  if (contactNo.length != 8) {
    responseDiv.innerHTML +=
      "Contact Number must contain exactly 8 digits.<br>";
    haveError = true;
  }
  //verify email is valid
  if (isEmailWrong(email)) {
    responseDiv.innerHTML += "Enter a valid Email <br>";
    haveError = true;
  }

  //if all data does not have an error, show successful screen
  if (!haveError) {
    responseDiv.innerHTML = `<p style='color: green;'>Form submitted successfully!<br> Welcome, ${firstName}.</p>`;

    //save data in local storage
    localStorage.setItem("FirstName", firstName);
    sessionStorage.setItem("FirstName", firstName);

    localStorage.setItem("LastName", lastName);
    sessionStorage.setItem("LastName", lastName);

    localStorage.setItem("contactNo", contactNo);
    sessionStorage.setItem("contactNo", contactNo);

    localStorage.setItem("email", email);
    sessionStorage.setItem("email", email);
  }
}

// display first name in any sub-page
const userName = localStorage.getItem("FirstName");
const localNameSpan = document.getElementById("local-name");

if (localNameSpan) {
  if (userName) {
    //if user submitted the form
    localNameSpan.textContent = userName;
  } else {
    // if user did not submit the form
    localNameSpan.textContent = "learner";
  }
}
