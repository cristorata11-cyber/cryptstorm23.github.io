document.addEventListener('DOMContentLoaded', () => {
    const getKeyButton = document.getElementById('getKeyButton');
    const copyKeyButton = document.getElementById('copyKeyButton');
    const keyDisplay = document.getElementById('keyDisplay');

    // ESTE ES EL LINK OCULTO QUE SERÁ COPIADO
    const hiddenRobloxUrl = "https://www.roblox.com/share?code=57ca564c3f69994ca17f85f810d38fb4&type=Server";

    // Función para generar una clave aleatoria alfanumérica de 20 caracteres
    function generateRandomKey() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let key = '';
        for (let i = 0; i < 20; i++) {
            key += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return key;
    }

    // Lógica para el botón 'GET KEY'
    getKeyButton.addEventListener('click', () => {
        const newKey = generateRandomKey();
        
        // Formatea la clave para que se muestre en 3 líneas con guiones:
        const formattedKey = 
            newKey.substring(0, 4) + '-' + newKey.substring(4, 8) + '\n' +
            newKey.substring(8, 12) + '-' + newKey.substring(12, 16) + '\n' +
            newKey.substring(16, 20); 
        
        keyDisplay.textContent = formattedKey;

        // Feedback visual: Cambia el botón después de obtener la clave
        getKeyButton.style.backgroundColor = 'green';
        getKeyButton.textContent = 'KEY GENERATED';
        setTimeout(() => {
            getKeyButton.style.backgroundColor = ''; // Restablecer (usará el color de CSS)
            getKeyButton.textContent = 'GET KEY';
        }, 3000);
    });

    // Lógica para el botón 'COPY KEY' (copia la URL oculta)
    copyKeyButton.addEventListener('click', () => {
        // Usa la API del Portapapeles para copiar el link oculto.
        navigator.clipboard.writeText(hiddenRobloxUrl)
            .then(() => {
                // Notificación de éxito
                const originalText = copyKeyButton.innerHTML;
                copyKeyButton.innerHTML = '<span class="icon">✅</span> COPIED!';
                
                // Feedback visual: color verde temporal
                const originalColor = copyKeyButton.style.backgroundColor;
                copyKeyButton.style.backgroundColor = 'green';

                setTimeout(() => {
                    copyKeyButton.innerHTML = originalText;
                    copyKeyButton.style.backgroundColor = originalColor; // Restablecer color
                }, 1500);
            })
            .catch(err => {
                // Mensaje de error si la copia falla
                alert('Fallo al copiar el link. Por favor, asegúrate de tener una clave generada y que tu navegador lo permita.');
            });
    });
});