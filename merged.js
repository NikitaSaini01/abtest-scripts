(function(){
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `#first-tag {
  color: red;
  cursor: pointer;
}
`;
  document.head.appendChild(style);

  // Inject HTML
  const container = document.createElement('div');
  container.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="first-tag">Click Me</h1>
    <script src="script.js"></script>
</body>
</html>`;
  document.body.appendChild(container);

  // Run JS
  (function(){
document.getElementById("first-tag").onclick = () => {
  document.getElementById("first-tag").textContent = "jai shree krishna";
};

  })();
})();