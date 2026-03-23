import { useEffect, useRef } from 'react';

/**
 * 3D Shield Defense Visualization
 * Uses Canvas API to render a rotating 3D shield with cybersecurity aesthetic
 * Displays neon cyan glow effect and geometric patterns
 */
export function Shield3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();

    let rotation = 0;
    const centerX = canvas.width / (2 * window.devicePixelRatio);
    const centerY = canvas.height / (2 * window.devicePixelRatio);

    const drawShield = (angle: number) => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Clear canvas with dark background
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);

      const shieldWidth = 80;
      const shieldHeight = 100;

      // Draw shield outline with glow
      ctx.shadowColor = '#00d9ff';
      ctx.shadowBlur = 20;
      ctx.strokeStyle = '#00d9ff';
      ctx.lineWidth = 2;

      // Shield shape
      ctx.beginPath();
      ctx.moveTo(-shieldWidth / 2, -shieldHeight / 2);
      ctx.lineTo(shieldWidth / 2, -shieldHeight / 2);
      ctx.lineTo(shieldWidth / 2, shieldHeight / 3);
      ctx.quadraticCurveTo(0, shieldHeight / 2 + 20, -shieldWidth / 2, shieldHeight / 3);
      ctx.closePath();
      ctx.stroke();

      // Fill shield with gradient
      const gradient = ctx.createLinearGradient(0, -shieldHeight / 2, 0, shieldHeight / 2);
      gradient.addColorStop(0, 'rgba(0, 217, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 217, 255, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw inner geometric pattern
      ctx.strokeStyle = 'rgba(0, 217, 255, 0.6)';
      ctx.lineWidth = 1;

      // Horizontal lines
      for (let i = -3; i <= 3; i++) {
        const y = (i * shieldHeight) / 6;
        ctx.beginPath();
        ctx.moveTo(-shieldWidth / 2 + 10, y);
        ctx.lineTo(shieldWidth / 2 - 10, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let i = -2; i <= 2; i++) {
        const x = (i * shieldWidth) / 4;
        ctx.beginPath();
        ctx.moveTo(x, -shieldHeight / 2 + 10);
        ctx.lineTo(x, shieldHeight / 3 - 10);
        ctx.stroke();
      }

      // Draw center circle (lock/security symbol)
      ctx.fillStyle = 'rgba(0, 217, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();

      // Draw lock symbol inside circle
      ctx.strokeStyle = '#0a0e27';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, -2, 4, 0, Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(-3, 0, 6, 5);
      ctx.stroke();

      // Draw corner accents
      const cornerSize = 8;
      const corners = [
        [-shieldWidth / 2 + 5, -shieldHeight / 2 + 5],
        [shieldWidth / 2 - 5, -shieldHeight / 2 + 5],
        [-shieldWidth / 2 + 5, shieldHeight / 3 - 5],
        [shieldWidth / 2 - 5, shieldHeight / 3 - 5]
      ];

      ctx.strokeStyle = '#00d9ff';
      ctx.lineWidth = 1.5;
      corners.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.moveTo(x - cornerSize / 2, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y - cornerSize / 2);
        ctx.stroke();
      });

      ctx.restore();
    };

    const animate = () => {
      rotation += 0.005;
      drawShield(rotation);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
