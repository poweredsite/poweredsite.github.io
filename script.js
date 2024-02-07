function prev() {
  document.getElementById("prev").innerHTML = document.getElementById("text").value
}

async function newpost() {
  let response = await fetch(`https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/newpost?username=${document.getElementById("username").value}&name=${document.getElementById("name").value}&text=${encodeURIComponent(document.getElementById("text").value)}&` + localStorage.getItem("sessfmt"))
  console.log(response.status)
  if (response.ok) {
    document.getElementById("comm").style.color = "green";
    document.getElementById("comm").innerHTML = "Post created: " + response.status;
  }
  else if (response.status == 401) {
    window.location.href = "/login.html"
  }
  else {
    response.text().then(function(text) {
      document.getElementById("comm").style.color = "red";
      document.getElementById("comm").innerHTML = "Error: " + text;
    });
  }
}

async function checkserv(e = false) {
  try {
    let response = await fetch("https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/server");
    if (!response.ok) {
      if (!e) {
        await checkserv(e);
      }
      else {
        window.location.href = "/unav.html";
      }
    }
    else if (!e) {
      window.location.href = "/account.html";
    }
    else {
      return true;
    }
  }
  catch {
    if (!e) {
      await checkserv(e);
    }
    else {
      window.location.href = "/unav.html";
    }
  }
}


async function user(user) {
  await checkserv(true);
  let response = await fetch(`https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/user?username=${user}&` + localStorage.getItem("sessfmt"));
  let resp = await response.text();
  resp = JSON.parse(resp);
  document.getElementById("usnmlab").innerHTML = resp.UserName;
  document.getElementById("namelab").innerHTML = resp.Name;
  document.getElementById("idlab").innerHTML = resp.Id;
  document.getElementById("verifylab").innerHTML = resp.Verify;
  if (response.status == 401) {
    window.location.href = "/login.html";
  }
}



async function reg() {
  let response = await fetch(`https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/newuser?username=${document.getElementById("username").value}&password=${document.getElementById("pass").value}&name=${document.getElementById("name").value}`);
  if (response.ok) {
    let session = await response.text();
    localStorage.setItem("sessfmt", `sender=${document.getElementById("username").value}&session=${session}`)
    localStorage.setItem("username", document.getElementById("username").value)
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
    localStorage.setItem("username", document.getElementById("username").value)
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