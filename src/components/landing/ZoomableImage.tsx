"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  previewClassName?: string;
};

export function ZoomableImage({
  src,
  alt,
  width,
  height,
  previewClassName,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full text-left"
        aria-label="Ampliar imagen"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={previewClassName}
        />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ink/90 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <div className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-auto w-full rounded-2xl border border-white/20 bg-white object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
