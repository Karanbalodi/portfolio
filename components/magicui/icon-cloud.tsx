"use client";

import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";

interface Icon {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
  iconSize?: number; // actual visual size of icons
  spinSpeed?: number; // default rotation speed
}

export function IconCloud({
  icons,
  images,
  iconSize = 40,
  spinSpeed = 0.01,
}: IconCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [iconPositions, setIconPositions] = useState<Icon[]>([]);
  const rotationRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const animationFrameRef = useRef<number>();
  const iconCanvasesRef = useRef<HTMLCanvasElement[]>([]);
  const imagesLoadedRef = useRef<boolean[]>([]);

  // SSR-safe default
  const [canvasWidth, setCanvasWidth] = useState(350);
  const [canvasHeight, setCanvasHeight] = useState(400);

  // Update size after mount
  useEffect(() => {
    if (window.innerWidth < 768) {
      setCanvasWidth(250);
      setCanvasHeight(300);
    } else {
      setCanvasWidth(350);
      setCanvasHeight(400);
    }
  }, []);

  // Create icon images
  useEffect(() => {
    if (!icons && !images) return;
    const items = icons || images || [];
    imagesLoadedRef.current = new Array(items.length).fill(false);

    const newIconCanvases = items.map((item, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = iconSize;
      offscreen.height = iconSize;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return offscreen;

      if (images) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = items[index] as string;
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          offCtx.beginPath();
          offCtx.arc(iconSize / 2, iconSize / 2, iconSize / 2, 0, Math.PI * 2);
          offCtx.closePath();
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, iconSize, iconSize);
          imagesLoadedRef.current[index] = true;
        };
      } else {
        const svgString = renderToString(item as React.ReactElement);
        const img = new Image();
        img.src = "data:image/svg+xml;base64," + btoa(svgString);
        img.onload = () => {
          offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
          offCtx.drawImage(img, 0, 0, iconSize, iconSize);
          imagesLoadedRef.current[index] = true;
        };
      }
      return offscreen;
    });

    iconCanvasesRef.current = newIconCanvases;
  }, [icons, images, iconSize]);

  // Generate sphere positions
  useEffect(() => {
    const items = icons || images || [];
    const numIcons = items.length || 20;
    const newIcons: Icon[] = [];
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;

      newIcons.push({
        x: x * 100,
        y: y * 100,
        z: z * 100,
        scale: 1,
        opacity: 1,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, [icons, images]);

  // Mouse drag
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;
      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.002,
        y: rotationRef.current.y + deltaX * 0.002,
      };
      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Animate
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add auto rotation when not dragging
      if (!isDragging) {
        rotationRef.current.y += spinSpeed;
        rotationRef.current.x += spinSpeed / 2;
      }

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = (rotatedZ + 200) / 300;
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        ctx.save();
        ctx.translate(
          canvas.width / 2 + rotatedX,
          canvas.height / 2 + rotatedY
        );
        ctx.scale(scale, scale);
        ctx.globalAlpha = opacity;

        if (iconCanvasesRef.current[index] && imagesLoadedRef.current[index]) {
          ctx.drawImage(
            iconCanvasesRef.current[index],
            -iconSize / 2,
            -iconSize / 2,
            iconSize,
            iconSize
          );
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, iconSize / 2, 0, Math.PI * 2);
          ctx.fillStyle = "#4444ff";
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [iconPositions, isDragging, iconSize, spinSpeed]);

  return (
    <canvas
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="rounded-lg"
    />
  );
}
