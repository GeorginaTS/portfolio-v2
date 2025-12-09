// contact-form.js - Gestió del formulari de contacte amb Formspree

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const originalBtnText = submitBtn.textContent;

        // Obtenir idioma actual
        const currentLang = localStorage.getItem('preferredLanguage') || 'ca';
        
        // Missatges multiidioma
        const messages = {
            ca: {
                sending: 'Enviant...',
                success: '✅ Missatge enviat correctament! Et respondré aviat.',
                error: '❌ Error en enviar el missatge. Si us plau, torna-ho a intentar.'
            },
            es: {
                sending: 'Enviando...',
                success: '✅ ¡Mensaje enviado correctamente! Te responderé pronto.',
                error: '❌ Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
            },
            en: {
                sending: 'Sending...',
                success: '✅ Message sent successfully! I will reply soon.',
                error: '❌ Error sending message. Please try again.'
            }
        };

        const msg = messages[currentLang] || messages.ca;

        // Deshabilitar botó i mostrar estat
        submitBtn.disabled = true;
        submitBtn.textContent = msg.sending;

        try {
            const formData = new FormData(form);
            
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Èxit
                formStatus.style.display = 'block';
                formStatus.style.backgroundColor = '#d4edda';
                formStatus.style.color = '#155724';
                formStatus.style.border = '1px solid #c3e6cb';
                formStatus.textContent = msg.success;

                // Resetar formulari
                form.reset();

                // Amagar missatge després de 5 segons
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // Error
            formStatus.style.display = 'block';
            formStatus.style.backgroundColor = '#f8d7da';
            formStatus.style.color = '#721c24';
            formStatus.style.border = '1px solid #f5c6cb';
            formStatus.textContent = msg.error;

            console.error('Error:', error);
        } finally {
            // Restaurar botó
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
});
