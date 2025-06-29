function sortear() {
  let array = [];

  while (array.length < 6) {
    let num = Math.floor(Math.random() * 60) + 1;

    if (!array.includes(num)) {
      array.push(num);
    }
  }
  let p = document.getElementById("Num");

  p.innerHTML = "";

  array.forEach((numero) => {
    const span = document.createElement("span");
    span.className = "span";
    span.textContent = numero.toString().padStart(2, 0);
    p.appendChild(span);
  });
}
