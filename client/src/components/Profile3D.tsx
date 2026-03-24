import { useEffect, useRef, useState } from 'react';

export function Profile3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      setMouseX(x * 20);
      setMouseY(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center perspective"
      style={{
        perspective: '1200px',
      }}
    >
      {/* Animated background circles */}
      <div className="absolute w-[350px] h-[350px] border-2 border-cyan-400/30 rounded-full animate-spin-slow"></div>
      <div className="absolute w-[420px] h-[420px] border border-cyan-400/15 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
      <div className="absolute w-[480px] h-[480px] border border-cyan-400/10 rounded-full" style={{ animation: 'spin-slow 35s linear infinite' }}></div>

      {/* Glow effect layers */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute w-80 h-80 bg-cyan-400/15 rounded-full blur-2xl" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>

      {/* Main 3D container */}
      <div
        className="relative w-80 h-96 md:w-96 md:h-[500px] transition-transform duration-500"
        style={{
          transform: `perspective(1200px) rotateX(${mouseY}deg) rotateY(${mouseX}deg) rotateZ(0deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Shadow effect */}
        <div 
          className="absolute inset-0 rounded-3xl bg-black/40 blur-3xl -z-10"
          style={{
            transform: 'translateZ(-50px)',
          }}
        ></div>

        {/* Main image container with 3D effect */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/50"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(0, 100, 150, 0.05) 100%)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 60px rgba(0, 217, 255, 0.4), inset 0 0 40px rgba(0, 217, 255, 0.1)',
            transform: 'translateZ(50px)',
          }}
        >
          {/* Image */}
          <img
            src="/alaa_portfolio/profile_final.png"
            alt="Alaa Atef"
            className="w-full h-full object-cover"
            style={{
              filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))',
            }}
          />

          {/* Shine effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
            style={{
              pointerEvents: 'none',
            }}
          ></div>

          {/* Animated border glow */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(45deg, transparent 0%, rgba(0, 217, 255, 0.3) 50%, transparent 100%)',
              animation: 'shimmer 3s infinite',
              pointerEvents: 'none',
            }}
          ></div>
        </div>

        {/* Floating particles effect */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${i * 0.3}s`,
            }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
