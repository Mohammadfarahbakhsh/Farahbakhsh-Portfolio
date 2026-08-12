"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
interface GlobeRenderState {
  phi: number;
  theta: number;
  width: number;
  height: number;
}
declare module "cobe" {
  interface COBEOptions {
    onRender?: (state: GlobeRenderState) => void;
  }
}

const TEHRAN = {
  lat: 35.6892,
  lng: 51.389,
};

export default function GlobeSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const phi = useRef(0);
  const theta = useRef(0.3);

  const targetPhi = useRef(0);
  const targetTheta = useRef(0.3);

  const focus = useRef(false);

  const width = useRef(0);

  const latLngToCamera = (lat: number, lng: number) => {
    return {
      phi: ((180 - lng) * Math.PI) / 180,
      theta: (-lat * Math.PI) / 180,
    };
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width.current = canvasRef.current.offsetWidth;
      }
    };

    onResize();
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,

      width: width.current * 2,
      height: width.current * 2,

      phi: 0,
      theta: 0.3,

      dark: 0,
      diffuse: 2,

      mapSamples: 50000,
      mapBrightness: 12,

      baseColor: [0.15, 0.15, 0.15],
      glowColor: [0.25, 0.25, 0.25],
      markerColor: [0.2, 0.9, 1],

      markers: [
        {
          location: [TEHRAN.lat, TEHRAN.lng],
          size: 0.12,
        },
      ],

      onRender: (state) => {
        if (!focus.current) {
          targetPhi.current += 0.003;
        }

        phi.current += (targetPhi.current - phi.current) * 0.08;
        theta.current += (targetTheta.current - theta.current) * 0.08;

        state.phi = phi.current;
        state.theta = theta.current;

        state.width = width.current * 2;
        state.height = width.current * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const flyToTehran = () => {
    const camera = latLngToCamera(TEHRAN.lat, TEHRAN.lng);

    targetPhi.current = camera.phi;
    targetTheta.current = camera.theta;

    focus.current = true;
  };

  const reset = () => {
    focus.current = false;
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        style={{
          width: "100%",
          maxWidth: 500,
          aspectRatio: "1",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={flyToTehran}
          className="rounded-full bg-white px-5 py-2 text-black"
        >
          برو روی تهران
        </button>

        <button
          onClick={reset}
          className="rounded-full border border-white/20 px-5 py-2 text-white"
        >
          بازگشت
        </button>
      </div>
    </div>
  );
}