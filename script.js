displayBackground();
randomizeRadioButtons();
//onclick listerner for button
document.querySelector("#getDep").addEventListener("click", displayDepartments);

async function displayDepartments() {

  let school = document.querySelector('input[name="school"]:checked').value;
  console.log(school);

  if (school == "science") {
    let url = `https://csumb.space/cst/336/midterm/csumb/api/departmentsAPI.php?college=science`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      document.querySelector("#department").innerHTML += `<option>${data[i].name}</option>`;
    }
  } else if (school == "arts") {
    let url = `https://csumb.space/cst/336/midterm/csumb/api/departmentsAPI.php?college=arts`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      document.querySelector("#department").innerHTML += `<option>${data[i].name}</option>`;
    }

  } else if (school == "health") {
    let url = `https://csumb.space/cst/336/midterm/csumb/api/departmentsAPI.php?college=health`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      document.querySelector("#department").innerHTML += `<option>${data[i].name}</option>`;
    }

  } else if (school == "education") {
    let url = `https://csumb.space/cst/336/midterm/csumb/api/departmentsAPI.php?college=education`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      document.querySelector("#department").innerHTML += `<option>${data[i].name}</option>`;
    }

  } else {
    document.querySelector("#errorMSG").innerHTML = "YOU MUST SELECT A COLLEGE";
  }
}

function randomizeRadioButtons() {

  let radioButtons = document.querySelectorAll('input[type="radio"]');

  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }

  let randomButton = Math.floor(Math.random() * radioButtons.length);
  radioButtons[randomButton].checked = true;




}



async function displayBackground() {
  let url = `https://csumb.space/cst/336/midterm/csumb/api/randomCSUMBImage.php`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let image = data.csumb_image;

  document.querySelector("body").style.backgroundImage = `url(${image})`;
}
