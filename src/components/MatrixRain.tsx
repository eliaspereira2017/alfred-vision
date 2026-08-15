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

      context.fillStyle = "rgba(10, 10, 10, 0.1)";
      context.fillRect(0, 0, c.width, c.height);

      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        const xPos = i * fontSize;
        
        // Concentrar efeito nas bordas (fora dos 900px centrais)
        const marginWidth = (currentWidth - 900) / 2;
        const isSide = xPos < marginWidth || xPos > (currentWidth - marginWidth);

        if (isSide) {
          context.fillStyle = "#00ff66";
        } else {
          context.fillStyle = "rgba(0, 255, 102, 0.05)";
        }

        const dropY = drops[i];
        if (dropY !== undefined) {
          context.fillText(text, xPos, dropY * fontSize);

          if (dropY * fontSize > currentHeight && Math.random() > 0.975) {
            drops[i] = 0;
          } else {
            drops[i] = dropY + 1;
          }
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
