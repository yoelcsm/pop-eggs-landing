"use client";

import { useRef } from "react";
import { Download, ArrowLeft } from "lucide-react";
import { QRCode } from "qrcode.react";
import Link from "next/link";

export default function QRPage() {
  const qrRef = useRef<HTMLDivElement>(null);

  const downloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "pop-eggs-qr.png";
      link.click();
    }
  };

  const siteUrl = "https://pop-eggs-landing-production.up.railway.app/";

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-ink to-brand-ink/95 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Botón volver */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark transition mb-8"
        >
          <ArrowLeft size={18} />
          Volver a inicio
        </Link>

        {/* Card principal */}
        <div className="rounded-3xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl p-8 shadow-premium text-center">
          {/* Header */}
          <h1 className="text-3xl font-black text-white mb-2">Pop-eggs</h1>
          <p className="text-white/70 text-sm mb-8">
            Código QR - Comparte con tus amigos
          </p>

          {/* QR Code */}
          <div className="flex justify-center mb-8 bg-white rounded-2xl p-6 inline-flex w-full">
            <div ref={qrRef}>
              <QRCode
                value={siteUrl}
                size={280}
                level="H"
                includeMargin={true}
                bgColor="#ffffff"
                fgColor="#0B1420"
              />
            </div>
          </div>

          {/* URL display */}
          <div className="mb-8 p-4 bg-white/10 rounded-xl border border-white/20">
            <p className="text-white/60 text-xs mb-2">Escanea para acceder a:</p>
            <p className="text-white text-sm font-mono break-all">
              {siteUrl}
            </p>
          </div>

          {/* Botón descargar */}
          <button
            onClick={downloadQR}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-soft transition hover:translate-y-[-1px] hover:bg-brand-green-dark mb-4"
          >
            <Download size={18} />
            Descargar QR
          </button>

          {/* Info adicional */}
          <p className="text-white/50 text-xs">
            Imprime o comparte este código para dirigir a tus clientes a Pop-eggs
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-xs">Pop-eggs © 2026</p>
        </div>
      </div>
    </div>
  );
}
