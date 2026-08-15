import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 14;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const draw = () => {
      if (!ctx || !canvas) return;
      
      // If window was resized, adjust columns
      const currentColumns = Math.floor(window.innerWidth / fontSize);
      if (currentColumns !== columns) {
        columns = currentColumns;
        drops = Array(columns).fill(1);
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        if (Math.random() > 0.95) {
          ctx.fillStyle = "#00ff66";
        } else {
          ctx.fillStyle = "#006622";
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-30"
    />
  );
}
