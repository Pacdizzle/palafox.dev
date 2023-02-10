let canvas = document.getElementById("background");

if (canvasSupport(canvas)) {
  let context = canvas.getContext("2d");
  let characters = Array(275).fill(0).map((_, i) => i);
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener("load", () => {
    animate();
  });
  
  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  function animate() {
    context.fillStyle = "rgba(0,0,0,.07)";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "#0FFF50";
    context.font = "10px Georgia";
    characters.forEach((char, i) => {
		let codePoint = 0;
		do {
		  codePoint = 48 + 74 * Math.random();
		} while (codePoint >= 58 && codePoint <= 65 || codePoint >= 91 && codePoint <= 97);
		let text = String.fromCharCode(codePoint < 65 ? codePoint : codePoint > 90 ? (codePoint < 97 ? codePoint : codePoint) : codePoint);
		let x = 10 * i;
		context.textBaseline = 'top';
		context.fillText(text, x, char);
		characters[i] = char > 100 + 30000 * Math.random() ? 0 : char + 10;
	  });
    setTimeout(() => {
		requestAnimationFrame(animate);
	  }, 1000 / 20);
  }
}

function canvasSupport(n) {
  return !!n.getContext;
}