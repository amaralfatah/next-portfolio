"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface BrutalImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  brutalMode?: 'nightmarish' | 'demonic' | 'insanity';
  className?: string;
  triggerChance?: number; // Probability of random trigger (0-1)
}

// Core scary assets - fewer but more impactful
const terrorSounds = [
  '/sounds/joker-1.mp3',
  '/sounds/joker2-1.mp3',
  '/sounds/joker2-2.mp3',
  '/sounds/joker2-3.mp3'
]

const nightmareImages = [
  '/images/joker.jpg',
  '/images/joker2.jpg',
  '/images/joker3.jpg'
]

const hauntingPhrases = [
  "BEHIND YOU",
  "DON'T TURN AROUND",
  "I SEE YOU",
  "LOOK CLOSER",
  "YOU CAN'T ESCAPE"
]

export function BrutalImage({
  src = '/images/avatar.jpeg',
  alt = 'Profile Image',
  width = 72,
  height = 72,
  brutalMode = 'nightmarish',
  className = "",
  triggerChance = 0.3
}: BrutalImageProps) {
  const [isClient, setIsClient] = useState(false);
  const [visitCount, setVisitCount] = useState(0);
  const [lastActivity, setLastActivity] = useState(0);

  // Consolidated state for terror experience
  const [terrorState, setTerrorState] = useState({
    show: false,
    audioFiles: [] as string[],
    imageFile: nightmareImages[0],
    timeoutId: null as NodeJS.Timeout | null,
    phase: 'dormant' as 'dormant' | 'subliminal' | 'flashing' | 'crescendo' | 'nightmare' | 'aftermath' | 'lingering',
    messages: [] as string[],
    intensity: 0,
    glitchLevel: 0
  });

  const audioRefs = useRef<HTMLAudioElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hauntingInterval = useRef<NodeJS.Timeout | null>(null);
  const glitchInterval = useRef<NodeJS.Timeout | null>(null);

  // Initialize client-side data
  useEffect(() => {
    setIsClient(true);
    try {
      const storedVisits = localStorage.getItem('hauntedVisits');
      setVisitCount(storedVisits ? parseInt(storedVisits) : 0);
      setLastActivity(Date.now());
    } catch (e) {
      console.warn("Failed to access localStorage:", e);
    }
  }, []);

  // UI control functions
  const lockInterface = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add('terror-active');
  };

  const unlockInterface = () => {
    setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.classList.remove('terror-active');
    }, 1000);
  };

  // Audio functions
  const playAudio = (files: string[], volume: number) => {
    // Stop any current audio
    if (audioRefs.current) {
      audioRefs.current.forEach(audio => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }

    if (!files || files.length === 0) return;

    // Create and play new audio elements
    audioRefs.current = files.map(file => {
      try {
        const audio = new Audio(file);
        audio.volume = Math.min(volume, 0.95);
        audio.play().catch(e => {
          console.warn("Audio play failed, will retry on interaction");
          document.addEventListener('click', () => {
            audio.play().catch(e => console.warn("Retry failed"));
          }, { once: true });
        });
        return audio;
      } catch (e) {
        console.warn("Error creating audio");
        return null as any;
      }
    }).filter(Boolean);
  };

  // Visual effect functions
  const createVisualEffects = () => {
    // Create overlay for effects
    const overlay = document.createElement('div');
    overlay.id = 'terror-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.zIndex = '2147483646';
    overlay.style.pointerEvents = 'none';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    document.body.appendChild(overlay);

    // Add visual glitches for stronger effect
    if (brutalMode === 'insanity' || brutalMode === 'demonic') {
      // Create RGB split effect
      const redLayer = document.createElement('div');
      redLayer.className = 'glitch-element';
      redLayer.style.position = 'fixed';
      redLayer.style.top = '0';
      redLayer.style.left = '0';
      redLayer.style.width = '100vw';
      redLayer.style.height = '100vh';
      redLayer.style.backgroundColor = 'rgba(255,0,0,0.2)';
      redLayer.style.mixBlendMode = 'multiply';
      redLayer.style.transform = 'translate(-5px, 0)';
      redLayer.style.zIndex = '2147483645';
      redLayer.style.pointerEvents = 'none';
      document.body.appendChild(redLayer);

      // Add scanlines
      for (let i = 0; i < 5; i++) {
        const scanline = document.createElement('div');
        scanline.className = 'glitch-element';
        scanline.style.position = 'fixed';
        scanline.style.left = '0';
        scanline.style.width = '100vw';
        scanline.style.height = '1px';
        scanline.style.background = '#fff';
        scanline.style.opacity = '0.2';
        scanline.style.top = `${Math.random() * 100}vh`;
        scanline.style.zIndex = '2147483645';
        scanline.style.pointerEvents = 'none';
        document.body.appendChild(scanline);
      }
    }
  };

  // Display text messages
  const displayMessage = (message: string, position: number = 0) => {
    if (!message) return;

    const messageElement = document.createElement('div');
    messageElement.className = 'haunting-message';
    messageElement.style.position = 'fixed';
    messageElement.style.color = '#ff0000';
    messageElement.style.fontFamily = brutalMode === 'insanity' ? 'monospace' : 'serif';
    messageElement.style.fontSize = '3rem';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)';
    messageElement.style.zIndex = '2147483647';
    messageElement.style.opacity = '0';
    messageElement.style.pointerEvents = 'none';
    messageElement.style.transform = 'translate(-50%, -50%)';

    // Position based on parameter or randomly
    if (position === 0) {
      messageElement.style.top = '30%';
      messageElement.style.left = '50%';
    } else if (position === 1) {
      messageElement.style.top = '50%';
      messageElement.style.left = '50%';
    } else {
      messageElement.style.top = '70%';
      messageElement.style.left = '50%';
    }

    messageElement.textContent = message;
    document.body.appendChild(messageElement);

    // Fade in
    setTimeout(() => {
      messageElement.style.opacity = '1';
      messageElement.style.transition = 'opacity 0.3s';
    }, 100);

    // Fade out after duration
    setTimeout(() => {
      messageElement.style.opacity = '0';
      setTimeout(() => {
        if (messageElement.parentNode) {
          messageElement.parentNode.removeChild(messageElement);
        }
      }, 500);
    }, 2000);
  };

  // Clean up all effects
  const cleanupEffects = () => {
    // Remove intervals
    if (hauntingInterval.current) clearInterval(hauntingInterval.current);
    if (glitchInterval.current) clearInterval(glitchInterval.current);

    // Remove overlay
    const overlay = document.getElementById('terror-overlay');
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }

    // Remove all haunting messages
    document.querySelectorAll('.haunting-message, .glitch-element').forEach(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    // Stop all audio
    if (audioRefs.current) {
      audioRefs.current.forEach(audio => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });
    }

    // Reset animation on container
    if (containerRef.current) {
      containerRef.current.style.animation = '';
    }

    // Reset cursor
    document.documentElement.style.cursor = '';
  };

  // Terror sequence phase functions
  const beginSubliminalPhase = () => {
    setTerrorState({
      ...terrorState,
      show: true,
      phase: 'subliminal',
      messages: [hauntingPhrases[Math.floor(Math.random() * hauntingPhrases.length)]],
      intensity: 0.2,
      glitchLevel: 0.1
    });

    // Brief flashes of images
    const flashImage = document.createElement('img');
    flashImage.src = nightmareImages[Math.floor(Math.random() * nightmareImages.length)];
    flashImage.style.position = 'fixed';
    flashImage.style.top = '0';
    flashImage.style.left = '0';
    flashImage.style.width = '100vw';
    flashImage.style.height = '100vh';
    flashImage.style.objectFit = 'cover';
    flashImage.style.opacity = '0.15';
    flashImage.style.zIndex = '2147483646';
    flashImage.style.pointerEvents = 'none';
    document.body.appendChild(flashImage);

    // Flash briefly then remove
    setTimeout(() => {
      if (flashImage.parentNode) {
        flashImage.remove();
      }
    }, 100);

    // Schedule next phase
    setTimeout(() => transitionToFlashingPhase(), 1000);
  };

  const transitionToFlashingPhase = () => {
    // Select a random audio for initial effect
    const initialAudio = terrorSounds[Math.floor(Math.random() * terrorSounds.length)];

    setTerrorState(prev => ({
      ...prev,
      phase: 'flashing',
      audioFiles: [initialAudio],
      messages: [hauntingPhrases[Math.floor(Math.random() * hauntingPhrases.length)]],
      intensity: 0.5,
      glitchLevel: 0.3
    }));

    // Play audio at low volume
    playAudio([initialAudio], 0.3);

    // Rapid flashing images
    let flashIndex = 0;
    const flashIntervalId = setInterval(() => {
      setTerrorState(prev => ({
        ...prev,
        imageFile: nightmareImages[flashIndex % nightmareImages.length]
      }));

      flashIndex++;
      if (flashIndex >= 8) {
        clearInterval(flashIntervalId);
      }
    }, 100);

    hauntingInterval.current = flashIntervalId;

    // Schedule next phase
    setTimeout(() => transitionToCrescendoPhase(), 1500);
  };

  const transitionToCrescendoPhase = () => {
    // Add tension sound
    const tensionAudio = terrorSounds[Math.min(terrorSounds.length - 1, 1)];

    setTerrorState(prev => ({
      ...prev,
      phase: 'crescendo',
      audioFiles: [tensionAudio],
      intensity: 0.7,
      glitchLevel: 0.5
    }));

    // Increase audio volume
    playAudio([tensionAudio], 0.6);

    // Display tension message
    displayMessage(terrorState.messages[0], 0);

    // Create pulsing effect
    if (containerRef.current) {
      containerRef.current.style.animation = 'pulse 0.8s ease-in-out infinite';
    }

    // Schedule next phase
    setTimeout(() => transitionToNightmarePhase(), 1200);
  };

  const transitionToNightmarePhase = () => {
    // Add main jumpscare sounds
    const scareAudios = [
      terrorSounds[Math.floor(Math.random() * terrorSounds.length)],
      terrorSounds[Math.min(terrorSounds.length - 1, 3)]
    ];

    // Get random messages
    const messages: string[] = [];
    const shuffled = [...hauntingPhrases].sort(() => Math.random() - 0.5);
    for (let i = 0; i < 3; i++) {
      messages.push(shuffled[i]);
    }

    setTerrorState(prev => ({
      ...prev,
      phase: 'nightmare',
      audioFiles: scareAudios,
      imageFile: nightmareImages[Math.floor(Math.random() * nightmareImages.length)],
      messages: messages,
      intensity: 1.0,
      glitchLevel: 0.9
    }));

    // Maximum volume
    playAudio(scareAudios, 1.0);

    // Shake the screen violently
    if (containerRef.current) {
      containerRef.current.style.animation = 'violent-shake 0.1s ease-in-out infinite';
    }

    // Display all messages in sequence
    messages.forEach((message, index) => {
      setTimeout(() => {
        displayMessage(message, index);
      }, index * 800);
    });

    // Schedule next phase
    const nightmareDuration = brutalMode === 'insanity' ? 4000 : 3000;
    setTimeout(() => transitionToAftermathPhase(), nightmareDuration);
  };

  const transitionToAftermathPhase = () => {
    const whisperSound = terrorSounds[Math.min(terrorSounds.length - 1, 2)];

    setTerrorState(prev => ({
      ...prev,
      phase: 'aftermath',
      audioFiles: [whisperSound],
      intensity: 0.6,
      glitchLevel: 0.4
    }));

    // Lower volume
    playAudio([whisperSound], 0.4);

    // Reduce screen shake
    if (containerRef.current) {
      containerRef.current.style.animation = 'shake 0.3s ease-in-out infinite';
    }

    // Schedule final phase
    setTimeout(() => transitionToLingeringPhase(), 2000);
  };

  const transitionToLingeringPhase = () => {
    setTerrorState(prev => ({
      ...prev,
      phase: 'lingering',
      audioFiles: [],
      intensity: 0.3,
      glitchLevel: 0.2
    }));

    // Very subtle effects
    if (containerRef.current) {
      containerRef.current.style.animation = 'subtle-pulse 1s ease-in-out infinite';
    }

    // Schedule end
    const lingerDuration = brutalMode === 'insanity' ? 2500 : 1500;
    const endTimeoutId = setTimeout(endTerrorSequence, lingerDuration);

    setTerrorState(prev => ({
      ...prev,
      timeoutId: endTimeoutId as unknown as NodeJS.Timeout
    }));
  };

  const endTerrorSequence = () => {
    setTerrorState({
      show: false,
      audioFiles: [],
      imageFile: nightmareImages[0],
      timeoutId: null,
      phase: 'dormant',
      messages: [],
      intensity: 0,
      glitchLevel: 0
    });

    // Update visit count for more tailored experiences next time
    try {
      const newVisitCount = visitCount + 1;
      localStorage.setItem('hauntedVisits', newVisitCount.toString());
      setVisitCount(newVisitCount);
    } catch (e) {
      console.warn("Failed to update localStorage:", e);
    }
  };

  // Handle mouse events
  const handleMouseEnter = () => {
    // Update last activity
    setLastActivity(Date.now());

    // Create unpredictable delay based on visit count
    let randomDelay;

    // More unpredictable for repeat visitors
    if (visitCount > 2) {
      randomDelay = Math.floor(Math.random() * 2000) + 200;

      // Sometimes don't trigger at all to build false security
      if (Math.random() > 0.7) {
        return; // Don't trigger this time
      }
    } else {
      // More predictable for first-time visitors
      randomDelay = Math.floor(Math.random() * 1000) + 300;
    }

    // Display jumpscare after delay
    const delayTimeoutId = setTimeout(beginSubliminalPhase, randomDelay);

    setTerrorState(prev => ({
      ...prev,
      timeoutId: delayTimeoutId as unknown as NodeJS.Timeout
    }));
  };

  const handleMouseLeave = () => {
    // Update last activity
    setLastActivity(Date.now());

    // If terror not shown yet and there's a pending timeout, cancel it
    if (terrorState.timeoutId && terrorState.phase === 'dormant') {
      clearTimeout(terrorState.timeoutId);
      setTerrorState(prev => ({
        ...prev,
        timeoutId: null
      }));
    }
  };

  // Setup and cleanup for terror experience
  useEffect(() => {
    if (!isClient) return;

    if (terrorState.show) {
      // Lock scrolling and create visual effects
      lockInterface();
      createVisualEffects();
    } else {
      // Clean up effects
      unlockInterface();
      cleanupEffects();
    }

    return () => {
      cleanupEffects();
    };
  }, [terrorState.show, brutalMode, isClient]);

  // Page visibility and focus tracking
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // When user switches tabs, prepare for return
        if (Math.random() < triggerChance * 2) {
          try {
            localStorage.setItem('hauntedTrap', 'true');
          } catch (e) {
            console.warn("Failed to set localStorage item:", e);
          }
        }
      }
    };

    const handleWindowFocus = () => {
      // When user returns to the window, possibly trigger
      if (terrorState.phase === 'dormant' && visitCount > 1) {
        const timeSinceLastActivity = Date.now() - lastActivity;
        if (timeSinceLastActivity > 5000 && Math.random() < triggerChance) {
          beginSubliminalPhase();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [terrorState.phase, visitCount, lastActivity, triggerChance]);

  return (
    <>
      {/* Haunted image with event handlers */}
      <div
        className={`relative cursor-pointer transform transition duration-300 hover:scale-105 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          className="rounded-full"
          priority
        />
        {/* Subtle pulsing indicator */}
        <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-red-500 opacity-70 animate-pulse"></div>
      </div>

      {/* Full screen terror overlay */}
      {terrorState.show && (
        <div
          className="haunted-element fixed inset-0 flex items-center justify-center bg-black"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 2147483647,
            isolation: 'isolate'
          }}
        >
          <div className="relative h-screen w-screen overflow-hidden">
            {/* Main terror image */}
            <Image
              src={terrorState.imageFile}
              alt="Haunted"
              fill
              className={`object-cover ${terrorState.phase === 'subliminal' ? 'opacity-30 brightness-200' :
                terrorState.phase === 'flashing' ? 'brightness-200 contrast-200 animate-[flicker_0.1s_ease-in-out_infinite]' :
                  terrorState.phase === 'crescendo' ? 'brightness-150 animate-[pulse_0.5s_ease-in-out_infinite]' :
                    terrorState.phase === 'nightmare' ? 'brightness-110 animate-[shake_0.2s_ease-in-out_infinite]' :
                      terrorState.phase === 'aftermath' ? 'brightness-75 grayscale animate-[pulse_0.5s_ease-in-out_infinite]' :
                        'brightness-50 grayscale animate-[fadeInOut_3s_ease-in-out_infinite]'
                }`}
              priority
              sizes="100vw"
              unoptimized={true}
            />

            {/* Additional visual elements for demonic and insanity modes */}
            {(brutalMode === 'demonic' || brutalMode === 'insanity') && (
              <>
                <div className="absolute inset-0 bg-red-900 mix-blend-multiply opacity-40 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Add global CSS animations */}
      <style jsx global>{`
        @keyframes flicker {
          0% { opacity: 1; }
          25% { opacity: 0.5; }
          50% { opacity: 0.1; }
          75% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        @keyframes shake {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(5px, 5px) rotate(1deg); }
          50% { transform: translate(-5px, -5px) rotate(-1deg); }
          75% { transform: translate(5px, -5px) rotate(1deg); }
          100% { transform: translate(-5px, 5px) rotate(-1deg); }
        }

        @keyframes violent-shake {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(8px, 8px) rotate(2deg); }
          40% { transform: translate(-10px, -7px) rotate(-3deg); }
          60% { transform: translate(7px, -8px) rotate(2deg); }
          80% { transform: translate(-9px, 9px) rotate(-2deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }

        @keyframes subtle-pulse {
          0% { opacity: 0.05; }
          50% { opacity: 0.15; }
          100% { opacity: 0.05; }
        }

        /* Ensure haunted experience covers everything */
        body.terror-active {
          overflow: hidden !important;
          height: 100% !important;
          position: fixed !important;
          width: 100% !important;
        }

        body.terror-active > *:not(.haunted-element):not(#terror-overlay):not(.glitch-element):not(.haunting-message) {
          visibility: hidden !important;
        }

        /* Ensure we can't be stopped */
        .haunted-element {
          position: fixed !important;
          z-index: 2147483647 !important;
          visibility: visible !important;
          pointer-events: none !important;
        }

        #terror-overlay {
          visibility: visible !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 2147483646 !important;
        }
      `}
      </style>
    </>
  );
}
