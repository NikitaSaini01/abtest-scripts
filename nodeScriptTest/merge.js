// merge.js — writes out dist/merged.js
const fs = require('fs');
const path = require('path');

try {
  // ensure dist exists
  const distDir = path.join(__dirname, 'dist');
  fs.mkdirSync(distDir, { recursive: true });

  // read & escape inputs (adjust paths if needed)
  const html = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf8')
    .replace(/\\/g, '\\\\').replace(/`/g, '\\`');
  const css  = fs.readFileSync(path.join(__dirname, 'src', 'styles.css'), 'utf8')
    .replace(/\\/g, '\\\\').replace(/`/g, '\\`');
  const js   = fs.readFileSync(path.join(__dirname, 'src', 'script.js'), 'utf8');

  const output = `
(function(){
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = \`${css}\`;
  document.head.appendChild(style);

  // Inject HTML
  const container = document.createElement('div');
  container.innerHTML = \`${html}\`;
  document.body.appendChild(container);

  // Run JS
  (function(){
${js}
  })();
})();
`.trim();

  fs.writeFileSync(path.join(distDir, 'merged.js'), output, 'utf8');
  console.log('✅ dist/merged.js created');
} catch (err) {
  console.error('❌ Error merging files:', err);
}
