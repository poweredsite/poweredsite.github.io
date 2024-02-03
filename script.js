async function checkacc() {
  let response = await fetch("https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/session?"+localStorage.getItem("sessfmt"))
  console.log(localStorage.getItem("sessfmt"))
  if(response.status == 400) {
    window.location.href = "/login.html"
  }
  
}

async function reg() {
  let response = await fetch(`https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/newuser?username=${document.getElementById("username").value}&password=${document.getElementById("pass").value}&name=${document.getElementById("name").value}`);
  if (response.ok) {
    let session = await response.text();
    localStorage.setItem("sessfmt", `sender=${document.getElementById("username").value}&session=${session}`)
    document.getElementById("comm").style.color = "green";
    document.getElementById("comm").innerHTML = "Account created: " + response.status;
  }
  else {
    response.text().then(function(text) {
        document.getElementById("comm").style.color = "red";
        document.getElementById("comm").innerHTML = "Error: " + text;
    });
  }
}

async function login() {
  let response = await fetch(`https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/login?username=${document.getElementById("username").value}&password=${document.getElementById("pass").value}`);
  if (response.ok) {
    let session = await response.text();
    localStorage.setItem("sessfmt", `sender=${document.getElementById("username").value}&session=${session}`)
    document.getElementById("comm").style.color = "green";
    document.getElementById("comm").innerHTML = "Login complete: " + response.status;
  }
  else {
    response.text().then(function(text) {
        document.getElementById("comm").style.color = "red";
        document.getElementById("comm").innerHTML = "Error: " + text;
    });
    
  }
}