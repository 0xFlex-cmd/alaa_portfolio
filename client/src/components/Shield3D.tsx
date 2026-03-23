import { useEffect, useRef } from 'react';

/**
 * 3D Shield Defense Visualization
 * Uses Canvas API to render a rotating 3D shield with cybersecurity aesthetic
 * Displays neon cyan glow effect and geometric patterns
 * Optimized for responsive display with proper sizing
 */
export function Shield3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    let rotation = 0;
    const centerX = canvas.width / (2 * (window.devicePixelRatio || 1));
    const centerY = canvas.height / (2 * (window.devicePixelRatio || 1));

    const drawShield = (angle: number) => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

      // Clear canvas with semi-transparent background
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);

      // Scale shield based on container size
      const scale = Math.min(width, height) / 300;
      const shieldWidth = 80 * scale;
      const shieldHeight = 100 * scale;

      // Draw outer glow
      ctx.shadowColor = '#00d9ff';
      ctx.shadowBlur = 30 * scale;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Draw shield outline with glow
      ctx.strokeStyle = '#00d9ff';
      ctx.lineWidth = 2.5 * scale;

      // Shield shape - main outline
      ctx.beginPath();
      ctx.moveTo(-shieldWidth / 2, -shieldHeight / 2);
      ctx.lineTo(shieldWidth / 2, -shieldHeight / 2);
      ctx.lineTo(shieldWidth / 2, shieldHeight / 3);
      ctx.quadraticCurveTo(0, shieldHeight / 2 + 20 * scale, -shieldWidth / 2, shieldHeight / 3);
      ctx.closePath();
      ctx.stroke();

      // Fill shield with gradient
      const gradient = ctx.createLinearGradient(0, -shieldHeight / 2, 0, shieldHeight / 2);
      gradient.addColorStop(0, 'rgba(0, 217, 255, 0.2)');
      gradient.addColorStop(0.5, 'rgba(0, 217, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 217, 255, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw inner geometric pattern
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.7)';
      ctx.lineWidth = 1.2 * scale;

      // Horizontal lines
      for (let i = -3; i <= 3; i++) {
        const y = (i * shieldHeight) / 6;
        ctx.beginPath();
        ctx.moveTo(-shieldWidth / 2 + 10 * scale, y);
        ctx.lineTo(shieldWidth / 2 - 10 * scale, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let i = -2; i <= 2; i++) {
        const x = (i * shieldWidth) / 4;
        ctx.beginPath();
        ctx.moveTo(x, -shieldHeight / 2 + 10 * scale);
        ctx.lineTo(x, shieldHeight / 3 - 10 * scale);
        ctx.stroke();
      }

      // Draw center circle (lock/security symbol)
      ctx.fillStyle = 'rgba(0, 217, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(0, 0, 8 * scale, 0, Math.PI * 2);
      ctx.fill();

      // Draw lock symbol inside circle
      ctx.strokeStyle = '#0a0e27';
      ctx.lineWidth = 1.5 * scale;
      ctx.beginPath();
      ctx.arc(0, -2 * scale, 4 * scale, 0, Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(-3 * scale, 0, 6 * scale, 5 * scale);
      ctx.stroke();

      // Draw corner accents with enhanced visibility
      const cornerSize = 8 * scale;
      const corners = [
        [-shieldWidth / 2 + 5 * scale, -shieldHeight / 2 + 5 * scale],
        [shieldWidth / 2 - 5 * scale, -shieldHeight / 2 + 5 * scale],
        [-shieldWidth / 2 + 5 * scale, shieldHeight / 3 - 5 * scale],
        [shieldWidth / 2 - 5 * scale, shieldHeight / 3 - 5 * scale]
      ];

      ctx.strokeStyle = '#00d9ff';
      ctx.lineWidth = 2 * scale;
      corners.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.moveTo(x - cornerSize / 2, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y - cornerSize / 2);
        ctx.stroke();
      });

      // Draw decorative circles around shield
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.5)';
      ctx.lineWidth = 1 * scale;
      
      for (let i = 0; i < 3; i++) {
        const radius = (shieldWidth / 2 + 20 * scale) * (1 + i * 0.3);
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      rotation += 0.003;
      drawShield(rotation);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-full bg-card rounded-sm border border-border overflow-hidden"
      style={{ minHeight: '400px' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}
