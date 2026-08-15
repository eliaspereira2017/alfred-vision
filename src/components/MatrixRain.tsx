import { useEffect, useRef } from "react";

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;
      currentCanvas.width = window.innerWidth;
      currentCanvas.height = window.innerHeight;
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 14;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops: number[] = Array(columns).fill(1);

    const draw = () => {
      const currentCanvas = canvasRef.current;
      const currentCtx = currentCanvas?.getContext("2d");
      
      if (!currentCanvas || !currentCtx) return;
      
      const currentColumns = Math.floor(window.innerWidth / fontSize);
      if (currentColumns !== columns) {
        columns = currentColumns;
        drops = Array(columns).fill(1);
      }

      currentCtx.fillStyle = "rgba(0, 0, 0, 0.05)";
      currentCtx.fillRect(0, 0, currentCanvas.width, currentCanvas.height);

      currentCtx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        if (Math.random() > 0.95) {
          currentCtx.fillStyle = "#00ff66";
        } else {
          currentCtx.fillStyle = "#006622";
        }

        currentCtx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > currentCanvas.height && Math.random() > 0.975) {
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
