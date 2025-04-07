/* 
 Name: Namita Patel
 File: homework3.js
 Date Created: 3/3/25
 Date Updated: 3/13/25
 Version: 1.9
 Description: Redisplay/validate data from a form
*/

function setup()
  {
    var error_flag = 0;
    console.log(error_flag);
  }

// Function to reset output data
function removedata1() {
  document.getElementById("outputformdata").innerHTML = "(Form reset)";
}

// Function to retrieve form data
function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            //if (formcontents.elements[i].value !="") {
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
        

  }

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}

function getrangedata() {
  var slider = document.getElementById("budget");
  output.innerHTML = slider.value; 
};

body.onload = getrangedata;


function checkfirstname() {
  var x = document.getElementById("firstname").value;
  document.getElementById("name_message").innerHTML = "";
  if (x.length < 1) { 
    document.getElementById("name_message").innerHTML = "Name too short"; 
    error_flag = 1; 
  } else if (!x.match(/^[A-Za-z'-]+$/)) {
      document.getElementById("name_message").innerHTML = "Invalid characters";
      error_flag = 1;
    }
  }

function checkmiddle() {
  var x = document.getElementById("middleinit").value;
  if (x.length > 0) { 
    if (x.match(/[a-zA-Z ]/)) {
      document.getElementById("name_message").innerHTML = "";  
    } else {
      document.getElementById("name_message").innerHTML = "Invalid characters in name";
      error_flag = 1;
    }
  }
}

function checklastname() {
  var x = document.getElementById("lastname").value;
  document.getElementById("name_message").innerHTML = "";
  if (x.length < 1) { 
    document.getElementById("name_message").innerHTML = "Name too short"; 
    error_flag = 1;
  } else if (!x.match(/^[A-Za-z'2-5-]+$/)) {
      document.getElementById("name_message").innerHTML = "Invalid characters";
      error_flag = 1;
    }
  }

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
function checkdob() {
  var x = document.getElementById("dob").value;
  console.log(x);
  if (x === "") {  
    document.getElementById("dob_message").innerHTML = "Select your date of birth";  
    error_flag = 1; 
  } else { 
    document.getElementById("dob_message").innerHTML = "";  
  }

  var year = x.split("-")[0];
  if (parseInt(year) < 1905) {
    document.getElementById("dob_message").innerHTML = "Invalid birthday";
    error_flag = 1;
  } else {
    document.getElementById("dob_message").innerHTML = "";  
  }
}

function checkemail() {
  var x = document.getElementById("email").value;
  if (x.length < 2) { 
    document.getElementById("email_message").innerHTML = "Too short"
    error_flag = 1;  
  } else {
    document.getElementById("email_message").innerHTML = "";
  }
  if (x.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i)) {
  document.getElementById("email_message").innerHTML = "";  
  } else {
    document.getElementById("email_message").innerHTML = "Enter valid email (format: name@domain.tld)";
    error_flag = 1;
  }
}



//* https://stackoverflow.com/questions/7685175/autoformat-ssn-while-entering-the-number //*
function checkssn() {
  let input = document.getElementById("ssn");
  let x = input.value.replace(/\D/g, ''); 

  if (x.length > 5) {
    x = x.replace(/(\d{3})(\d{2})(\d{0,4})/, "$1-$2-$3");
  } else if (x.length > 2) {
    x = x.replace(/(\d{3})(\d{0,2})/, "$1-$2");
  }

  input.value = x;
  
  let ssn_message = document.getElementById("ssn_message");
  if (!/^\d{3}-\d{2}-\d{4}$/.test(x)) {
  ssn_message.innerHTML = '';
  }
}


function checkphone() {
  var phoneField = document.getElementById("phone");
  var phoneText = document.getElementById("phone_message");
  
  var x = phoneField.value.replace(/\D/g, "");
  phoneText.innerHTML = "";

  if (x.length !== 10) { 
    phoneText.innerHTML = "Invalid phone number. Please enter a 10-digit number with dashes";
    error_flag = 1;
  }
}

function checkaddr1() {
  var x = document.getElementById("addr1").value;
  console.log(x);
  console.log(x.length);
  if (x.length < 2) {  
    document.getElementById("addr1_message").innerHTML = "Enter something on address line";  
    error_flag = 1; 
  } else { 
    document.getElementById("addr1_message").innerHTML = "";  
  }
}

function checkaddr2() {
  var x = document.getElementById("addr2").value;
  console.log(x);
  console.log(x.length);
  if (x.length < 2) {  
    document.getElementById("addr2_message").innerHTML = "Enter something or leave blank";  
    error_flag = 1; 
  } else { 
    document.getElementById("addr2_message").innerHTML = "";  
  }
}

function checkcity() {
  if (document.getElementById("city").value.match(/^[ a-zA-Z'-]+$/)) {
    document.getElementById("city_message").innerHTML = "";  
  } else {
    document.getElementById("city_message").innerHTML = "Invalid city name.";
    error_flag = 1;  
  }
}

function checkstate() {
  var z = document.getElementById("state").value;
  if (z === "") { 
    document.getElementById("state_message").innerHTML = "Please choose a state";  
    error_flag = 1;
  } else {
    document.getElementById("state_message").innerHTML = ""; 
  }
}

function checkuserid() {
  var userid = document.getElementById("userid").value.replace(/\s+/g, "");
  error_flag = 0;
  var useridinput = document.getElementById("userid").value;
  console.log(useridinput);

  if (userid.length < 5) {
    document.getElementById("userid_message1").innerHTML = "Enter minimum 5 characters";
    error_flag = 1;
  } else if (userid.length > 19) {
    document.getElementById("userid_message1").innerHTML = "Maximum 20 characters allowed";
    error_flag = 1;
  } else {
    document.getElementById("userid_message1").innerHTML = ""; 
  }

  if (/^\d/.test(userid)) {
    document.getElementById("userid_message2").innerHTML = "First character cannot be a number.";
    error_flag = 1;
  } else {
    document.getElementById("userid_message2").innerHTML = "";  
  }

  if (!/^[A-Za-z0-9_-]*$/.test(userid)) {
    document.getElementById("userid_message3").innerHTML = "Only letters, numbers, underscores, and dashes are allowed.";
    error_flag = 1;
  } else {
    document.getElementById("userid_message3").innerHTML = "";  
  }
}

// Password    
function passwordentry() {
  error_flag = "0";
  var passwordoutput;
  var passwordinput = document.getElementById("password").value;
  var userid = document.getElementById("userid").value;
  var firstname = document.getElementById("firstname").value;
 
  console.log(passwordinput);

  if (passwordinput === userid || passwordinput.includes(userid)) {
    passwordoutput = "Password cannot be the same as your User ID";
    error_flag = 1;
    document.getElementById("password_message1").innerHTML = passwordoutput;
  }

  if (passwordinput === firstname || passwordinput.includes(firstname)) {
    passwordoutput = "Password cannot be the same as your name";
    error_flag = 1;
    document.getElementById("password_message2").innerHTML = passwordoutput;
  }

  if (passwordinput.search(/[a-z]/) < 0) {
    passwordoutput = "Enter at least 1 lower case letter";
    error_flag = 1;
  } else {
    passwordoutput = "";
  }
  document.getElementById("password_message3").innerHTML = passwordoutput;

  if (passwordinput.search(/[A-Z]/) < 0) {  
    passwordoutput = "Enter at least 1 upper case letter";
    error_flag = 1;
  } else {
    passwordoutput = "";
  }
  document.getElementById("password_message4").innerHTML = passwordoutput;

  if (passwordinput.search(/[0-9]/) < 0) {   
    passwordoutput = "Enter at least 1 number";
    error_flag = 1;
  } else {
    passwordoutput = "You have entered at least 1 number";
  }
  document.getElementById("password_message5").innerHTML = passwordoutput;

  if (passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/) < 0) {   
    passwordoutput = "Enter at least 1 special character";
    error_flag = 1;
  } else {
    passwordoutput = "You have entered at least 1 special character";
  }
  document.getElementById("password_message6").innerHTML = passwordoutput;

  if (passwordinput.length < 8) {
    passwordoutput = "Enter minimum 8 characters";
    error_flag = 1;
  } else {
    passwordoutput = "Password is now 8 or more characters";
  }
  document.getElementById("password_message7").innerHTML = passwordoutput;
}

function passwordentry2() {                
  var x = document.getElementById("password").value;
  var y = document.getElementById("passwordcheck").value;
  if (x === y) {
    document.getElementById('password2_message').innerHTML = "Passwords match";
  } else {
    document.getElementById('password2_message').innerHTML = "Passwords do NOT match";
    error_flag = 1; 
  }
}

function checkform() {
  error_flag = "0";
  checkfirstname();
  checkmiddle();
  checklastname();
  checkdob();
  checkemail();
  checkssn();
  checkphone();
  checkaddr1();
  checkaddr2();
  checkcity();
  checkstate();
  checkuserid();
  passwordentry();
  passwordentry2();
  console.log("Error flag: "+error_flag);
  if (error_flag == "1") {
    alert("Please fix the indicated errors");
  } else {
    document.getElementById("submit").style.display = "inline-block" = false;
  }
}
