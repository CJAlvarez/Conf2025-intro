// Animación de flash tipo bombilla defectuosa
const flashEl = document.getElementById('flash');
function bombillaFlash() {
    // Tiempo aleatorio entre secuencias (2s a 7s)
    const nextDelay = 2000 + Math.random() * 5000;
    setTimeout(() => {
        // Número de parpadeos (2 a 6)
        const flashes = 2 + Math.floor(Math.random() * 5);
        let i = 0;
        function doFlash() {
            if (i >= flashes) {
                flashEl.style.opacity = '0';
                // Esperar para la próxima secuencia
                bombillaFlash();
                return;
            }
            // Opacidad y duración aleatoria para cada parpadeo
            const op = 0.5 + Math.random() * 0.5;
            const dur = 40 + Math.random() * 120;
            flashEl.style.opacity = op;
            setTimeout(() => {
                flashEl.style.opacity = '0';
                // Pausa entre parpadeos (40ms a 200ms)
                setTimeout(() => {
                    i++;
                    doFlash();
                }, 40 + Math.random() * 160);
            }, dur);
        }
        doFlash();
    }, nextDelay);
}
bombillaFlash();
// Configuración
const horaObjetivo = '2025-08-08T17:00:00'; 
const textoFinal = 'Comenzamos';

const countdownEl = document.getElementById('countdown');
const mainTextEl = document.getElementById('main-text');

const frases = [
    '¡Bienvenidos!', 'Ya casi comenzamos...', '¿Listos para la experiencia?', '¡Falta poco!', 'Prepara tu corazón...',
    '¡Esto está por iniciar!', 'Un momento especial está cerca', '¡Gracias por estar aquí!', 'Acomódate, disfruta el ambiente', '¡Hoy es un gran día!',
    'La espera vale la pena...', 'Siente la emoción en el aire', '¡Hoy puede ser un gran cambio!', 'La cuenta regresiva avanza...', '¡No te lo pierdas!',
    'Estamos por empezar algo único', '¡Quédate atento!', 'La energía se siente...', '¡Esto será inolvidable!', 'El momento se acerca...',
    '¡Gracias por tu paciencia!', 'Aprovecha este instante', '¡Hoy es tu día!', 'La magia está por suceder', '¡Siente la vibra positiva!',
    'Un nuevo comienzo está cerca', '¡Disfruta la espera!', 'La emoción crece...', '¡Ya casi!', 'El ambiente es especial...',
    '¡Comparte este momento!', 'La cuenta regresiva es parte del show', '¡Sigue atento!', 'La experiencia está por iniciar', '¡No te vayas!',
    '¡Esto es para ti!', 'La espera es parte de la aventura', '¡Siente la música!', '¡Relájate y disfruta!', '¡Hoy celebramos juntos!',
    '¡Haz de este momento algo especial!', '¡Gracias por tu energía!', '¡Estamos listos para ti!', '¡La fiesta está por empezar!', '¡No falta nada!',
    '¡Siente la emoción!', '¡Hoy es diferente!', '¡La cuenta atrás es parte de la emoción!', '¡No te despegues!', '¡Esto es solo el principio!',
    '¡El show está por comenzar!', '¡Siente la expectativa!', '¡Hoy es un día especial!', '¡Gracias por acompañarnos!', '¡La espera tiene recompensa!',
    '¡Ya casi es hora!', '¡No te lo pierdas!', '¡La emoción está en el aire!', '¡Falta muy poco!', '¡Estamos a punto de comenzar!',
    '¡Siente la energía!', '¡Hoy es el gran día!', '¡La cuenta regresiva sigue!', '¡No te vayas!', '¡Esto será épico!',
    '¡La espera termina pronto!', '¡Siente la música!', '¡Disfruta el ambiente!', '¡Hoy es para ti!', '¡La emoción no para!',
    '¡Estamos por sorprenderte!', '¡No te lo pierdas!', '¡La cuenta atrás es parte de la experiencia!', '¡Sigue con nosotros!', '¡Esto es solo el inicio!',
    '¡El gran momento se acerca!', '¡Siente la vibra!', '¡Hoy es un día para recordar!', '¡Gracias por tu presencia!', '¡La espera vale la pena!',
    '¡Ya casi estamos!', '¡No te lo pierdas!', '¡La emoción está en el ambiente!', '¡Falta muy poco!', '¡Estamos listos para ti!',
    '¡Siente la emoción!', '¡Hoy es diferente!', '¡La cuenta atrás es parte de la emoción!', '¡No te despegues!', '¡Esto es solo el principio!',
    '¡El show está por comenzar!', '¡Siente la expectativa!', '¡Hoy es un día especial!', '¡Gracias por acompañarnos!', '¡La espera tiene recompensa!',
    '¡Ya casi es hora!', '¡No te lo pierdas!', '¡La emoción está en el aire!', '¡Falta muy poco!', '¡Estamos a punto de comenzar!'
];
let fraseActual = '';
function rotarFraseAleatoria() {
    let nuevaFrase;
    do {
        nuevaFrase = frases[Math.floor(Math.random() * frases.length)];
    } while (nuevaFrase === fraseActual && frases.length > 1);
    fraseActual = nuevaFrase;
    mainTextEl.textContent = fraseActual;
    // Próximo cambio aleatorio entre 31 y 60 segundos
    const nextTime = 31000 + Math.random() * 29000;
    setTimeout(rotarFraseAleatoria, nextTime);
}
rotarFraseAleatoria();
const audioEl = document.getElementById('bg-audio');

function actualizarConteo() {
    const ahora = new Date();
    const objetivo = new Date(horaObjetivo);
    const diff = objetivo - ahora;
    if (diff <= 0) {
        countdownEl.textContent = '';
        mainTextEl.textContent = textoFinal;
        return;
    }
    const horas = Math.floor(diff / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);
    countdownEl.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

setInterval(actualizarConteo, 1000);
actualizarConteo();

audioEl.volume = 0.5;
audioEl.play().catch(()=>{});

// Permitir activar música al hacer clic en el texto principal
mainTextEl.addEventListener('click', function() {
    audioEl.play();
});
