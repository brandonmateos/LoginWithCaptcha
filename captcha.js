document.addEventListener('DOMContentLoaded', function() {
    const captchaText = document.getElementById('captcha');
    const refreshButton = document.getElementById('captcha-refresh');
    const input = document.getElementById('captcha-input');

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < 5; i++ ) {
            let char = characters.charAt(Math.floor(Math.random() * charactersLength));
            let rotation = Math.floor(Math.random() * 20 - 10); // Genera un número entre -10 y 10
            let transform = `transform: rotate(${rotation}deg);`;
            let style = `"font-size: 24px; display: inline-block; ${transform}"`;
            result += `<span style=${style}>${char}</span>`;
        }
        return result;
    }
    
    function setCaptcha() {
        captchaText.innerHTML = generateCaptcha(); // Usa innerHTML en lugar de innerText
    }
    

    refreshButton.addEventListener('click', function() {
        setCaptcha();
        input.value = ''; 
    });

    setCaptcha();
});
