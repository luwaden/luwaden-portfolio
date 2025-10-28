// Singleton AudioContext for better performance
let audioContext: AudioContext | null = null;

// Initialize and get audio context
const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  
  // Resume context if suspended (required by some browsers)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  
  return audioContext;
};

// Create typing sound effect with optimized timing
export const playTypingSound = () => {
  if (typeof window === 'undefined') return;
  
  const context = getAudioContext();
  if (!context) return;
  
  try {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    // Slightly varied frequency for more natural sound
    oscillator.frequency.value = 750 + Math.random() * 100;
    oscillator.type = 'sine';
    
    // Start immediately at current time
    const now = context.currentTime;
    
    gainNode.gain.setValueAtTime(0.08, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
    
    oscillator.start(now);
    oscillator.stop(now + 0.04);
    
    // Clean up after sound finishes
    oscillator.onended = () => {
      oscillator.disconnect();
      gainNode.disconnect();
    };
  } catch (error) {
    console.warn('Audio playback failed:', error);
  }
};

// Optional: Pre-warm the audio context on user interaction
export const initializeAudio = () => {
  if (typeof window === 'undefined') return;
  
  const context = getAudioContext();
  if (context && context.state === 'suspended') {
    context.resume();
  }
};

// Get time-based greeting
export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return 'Bonjour';
  } else if (hour >= 12 && hour < 17) {
    return 'Bon après-midi';
  } else if (hour >= 17 && hour < 22) {
    return 'Bonsoir';
  } else {
    return 'Hello';
  }
}