// Link Secreto que se abrirá al copiar la clave
const SECRET_LINK = "https://www.roblox.com/share?code=57ca564c3f69994ca17f85f810d38fb4&type=Server";

// Función para generar un código aleatorio (ejemplo: A72KF-93XJZ-1QW7T)
function generateRandomKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    
    // Genera 5 bloques de 5 caracteres
    for (let i = 0; i < 5; i++) {
        let block = '';
        for (let j = 0; j < 5; j++) {
            block += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        key += block;
        if (i < 4) {
            key += '-';
        }
    }
    return key;
}

document.addEventListener('DOMContentLoaded', () => {
    const keyOutput = document.getElementById('key-output');
    const generateBtn = document.getElementById('generate-key-btn');
    const copyBtn = document.getElementById('copy-key-btn');
    const statusMessage = document.getElementById('status-message');

    // Función del botón GENERATE KEY
    generateBtn.addEventListener('click', () => {
        const newKey = generateRandomKey();
        keyOutput.textContent = newKey;
        statusMessage.textContent = 'Clave generada. ¡Cópiala!';
    });

    // Función del botón COPY KEY
    copyBtn.addEventListener('click', () => {
        const key = keyOutput.textContent;

        if (key === 'Presiona "Generate Key"') {
            statusMessage.textContent = '¡Primero genera una clave!';
            return;
        }

        // Copia el código al portapapeles
        navigator.clipboard.writeText(key)
            .then(() => {
                statusMessage.textContent = '✅ Clave copiada y link secreto abriéndose...';
                
                // Abre automáticamente el link secreto en una nueva pestaña después de un breve momento
                setTimeout(() => {
                    window.open(SECRET_LINK, '_blank');
                }, 500);
                
            })
            .catch(err => {
                statusMessage.textContent = '❌ Error al copiar. Intenta copiar manualmente.';
                console.error('Error al copiar: ', err);
            });
    });
});