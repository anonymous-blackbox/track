
document.addEventListener('DOMContentLoaded', function() {
    const outputContainer = document.getElementById('output');
    const currentLine = document.getElementById('current-line');
    
    const satelliteData = [
        { text: "Connecting.....", type: "connecting", delay: 1000 },
        { text: "Successfully connected to the Satellite (332FS2)", type: "success", delay: 2000 },
        { text: "", type: "separator", delay: 500 },
        { text: "Importing: AES_256_Keys();", type: "importing", delay: 800 },
        { text: "Importing: Open_IMEI_Encryption();", type: "importing", delay: 800 },
        { text: "Importing Server_332FS2_Keychain();", type: "importing", delay: 800 },
        { text: "Processing Data....", type: "processing", delay: 1500 },
        { text: "", type: "separator", delay: 500 },
        { text: "═══════════════════════════════════════════════════════", type: "info", delay: 300 },
        { text: "                    DEVICE INFORMATION", type: "section-title", delay: 300 },
        { text: "═══════════════════════════════════════════════════════", type: "info", delay: 300 },
        { text: "", type: "separator", delay: 200 },
        { text: "Traceability Status: Yes", type: "status", delay: 500 },
        { text: "International Mobile Equipment Identity (IMEI): 351211130226119", type: "info", delay: 500 },
        { text: "Phone number: +8801575679178", type: "info", delay: 500 },
        { text: "Email: tanzina0804@gmail.com", type: "info", delay: 500 },
        { text: "Password: 01575679178t-", type: "info", delay: 500 },
        { text: "", type: "separator", delay: 300 },
        { text: "Device name: Samsung Galaxy A15 5G", type: "info", delay: 500 },
        { text: "Device connection: Yes", type: "status", delay: 500 },
        { text: "Internet connection: No", type: "status", delay: 500 },
        { text: "Network connection: Yes", type: "status", delay: 500 },
        { text: "Phone access: Granted", type: "status", delay: 500 },
        { text: "Phone status: Locked", type: "status", delay: 500 },
        { text: "Trying to Unlocked: 34 times", type: "status", delay: 500 },
        { text: "", type: "separator", delay: 300 },
        { text: "Location status: Last Internet connected location", type: "location", delay: 500 },
        { text: "Country: Bangladesh", type: "location", delay: 500 },
        { text: "Location: 23.721824,90.428777", type: "location", delay: 500 },
        { text: "", type: "separator", delay: 300 },
        { text: "═══════════════════════════════════════════════════════", type: "info", delay: 300 },
        { text: "               CONNECTION ESTABLISHED", type: "success", delay: 500 },
        { text: "═══════════════════════════════════════════════════════", type: "info", delay: 300 }
    ];
    
    let currentIndex = 0;
    
    function typeWriterEffect(text, element, callback) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 30);
            } else {
                setTimeout(callback, 100);
            }
        }
        
        type();
    }
    
    function displayNextLine() {
        if (currentIndex < satelliteData.length) {
            const lineData = satelliteData[currentIndex];
            
            if (lineData.type === "separator" && lineData.text === "") {
                const line = document.createElement('div');
                line.className = 'output-line';
                line.innerHTML = '&nbsp;';
                outputContainer.appendChild(line);
                
                currentIndex++;
                setTimeout(displayNextLine, lineData.delay);
                return;
            }
            
            const line = document.createElement('div');
            line.className = `output-line ${lineData.type}`;
            outputContainer.appendChild(line);
            
            if (lineData.type === "section-title") {
                line.innerHTML = `<span class="section-title">${lineData.text}</span>`;
                currentIndex++;
                setTimeout(displayNextLine, lineData.delay);
            } else {
                typeWriterEffect(lineData.text, line, () => {
                    currentIndex++;
                    setTimeout(displayNextLine, lineData.delay);
                });
            }
            
            // Auto-scroll to bottom
            line.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Show final prompt
            currentLine.style.display = 'flex';
        }
    }
    
    // Hide the current line initially
    currentLine.style.display = 'none';
    
    // Start the simulation after a short delay
    setTimeout(() => {
        displayNextLine();
    }, 1000);
});
