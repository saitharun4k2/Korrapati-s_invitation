document.addEventListener('DOMContentLoaded', () => {

    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const invitationCard = document.getElementById('invitationCard'); // Reference to the card

    // --- Envelope open animation ---
    envelopeWrapper.addEventListener('click', () => {
        // Only run the opening animation once
        if (!envelopeWrapper.classList.contains('open')) {
            envelopeWrapper.classList.add('open');

            // Set a timer to add the 'content-visible' class after the card animation
            // This delay should be carefully matched with CSS transition durations
            setTimeout(() => {
                envelopeWrapper.classList.add('content-visible');
            }, 2000); // Adjust this delay to synchronize with CSS transitions
        }
    });

    // --- Particle background animation ---
    // (This part remains the same as it's a general background effect)
    const bgAnimation = document.getElementById('background-pattern'); // Changed to background-pattern
    const particleCount = 40; 

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 10 + 4; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        particle.style.setProperty('--x-start', `${Math.random() * 100}vw`);
        particle.style.setProperty('--x-end', `${Math.random() * 100}vw`);
        particle.style.animationDelay = `${Math.random() * 25}s`;
        
        // bgAnimation.appendChild(particle); // No longer append particles if using #background-pattern as static
                                           // If you want particles, reconsider where they go and their style
    }
    // Note: The particle animation from previous versions is not being used with the new #background-pattern.
    // If you want a similar particle effect, you might need a separate container for it.
    // For now, I've left the particle generation code commented out from appending to `bgAnimation`
    // because #background-pattern is now for a subtle static pattern, not moving particles.
});