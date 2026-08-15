import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 14;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const draw = () => {
      const c = canvasRef.current;
      if (!c) return;
      const context = c.getContext("2d");
      if (!context) return;
      
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      
      const currentColumns = Math.floor(currentWidth / fontSize);
      if (currentColumns !== columns) {
        columns = currentColumns;
        drops = Array(columns).fill(1);
      }

      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, c.width, c.height);

      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        if (Math.random() > 0.95) {
          context.fillStyle = "#00ff66";
        } else {
          context.fillStyle = "#006622";
        }

        context.fillText(text, i * fontSize, (drops[i] ?? 0) * fontSize);

        if ((drops[i] ?? 0) * fontSize > currentHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        if (drops[i] !== undefined) {
          drops[i]++;
        }
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
