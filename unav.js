document.addEventListener('DOMContentLoaded', async function() {
  if (await checkserv(false)) {
    window.location.href = "/account.html";
  }
});
