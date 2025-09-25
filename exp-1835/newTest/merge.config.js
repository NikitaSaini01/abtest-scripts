module.exports = {
    // Project metadata
    name: "xfinity-test",
    output: "dist/final.js",
    
    // Files to include in merge
    files: {
        // Core library (included as-is)
        libraries: [
            "src/scriptFiles/flickerlessly.js"
        ],
        
        // CSS files (injected as <style> tags)
        styles: [
            "src/stylesFiles/styles.css"
        ],
        
        // HTML templates (available as templates object)
        templates: {
            navigation: "src/htmlFiles/nav.html",
            contactInfo: "src/htmlFiles/contactinfo.html"
        },
        
        // JavaScript logic (executed in IIFE)
        scripts: [
            "src/scriptFiles/script.js"
        ]
    },
    
    // Build options
    minify: false,
    addTimestamp: true
};
