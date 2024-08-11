document.getElementById('translate-btn').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const action = document.getElementById('action').value;
    
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char.match(/[a-z]/i)) {
            const code = text.charCodeAt(i);
            let shiftValue = (action === 'encrypt') ? shift : -shift;
            
            if ((code >= 65) && (code <= 90)) {
                char = String.fromCharCode(((code - 65 + shiftValue + 26) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                char = String.fromCharCode(((code - 97 + shiftValue + 26) % 26) + 97);
            }
        }
        
        result += char;
    }

    document.getElementById('result-text').textContent = result;
});
