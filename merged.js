(function(){
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `#first-tag {
  color: red;
  cursor: pointer;
}
`;
  document.head.appendChild(style);

  // Run JS
  (function(){
document.getElementById("first-tag").onclick = () => {
  document.getElementById("first-tag").textContent = "jai shree krishna";
};

  })();
})();