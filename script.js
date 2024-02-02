let response = await fetch(`https://27c58149-6206-40b3-948e-f9b297b7a285-00-3ve64c3nleqmv.pike.replit.dev/newuser?username=poweredx&password=b.01BSOD&name=PX`);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = response.text();
  alert(json)
} else {
  alert("Ошибка HTTP: " + response.status);
}