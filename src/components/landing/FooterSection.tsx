import Image from "next/image";
import Link from "next/link";
import { AtSign, MessageCircle, QrCode } from "lucide-react";
import { socialLinks } from "@/data/landing-content";

export function FooterSection() {
  const buttonGroupClass =
    "flex w-full max-w-2xl flex-col gap-2 rounded-2xl border p-2 backdrop-blur sm:flex-row sm:items-center sm:justify-center";

  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 sm:pb-10">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-brand-ink/10 bg-white shadow-premium">
        <Image
          src="/images/page-footer.png"
          alt="Footer visual Pop-eggs"
          width={2200}
          height={760}
          className="h-auto w-full object-cover"
          priority
        />

        <div className="flex justify-center px-3 pb-4 pt-3 sm:absolute sm:inset-x-0 sm:bottom-6 sm:px-3 sm:pb-0 sm:pt-0">
          <div className={`${buttonGroupClass} border-brand-ink/15 bg-white/92 sm:border-white/35 sm:bg-brand-ink/55`}>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-brand-ink transition hover:bg-brand-green hover:text-white"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-ink/20 bg-transparent px-4 py-2 text-sm font-bold text-brand-ink transition hover:bg-brand-ink hover:text-white sm:border-white/45 sm:text-white sm:hover:bg-white sm:hover:text-brand-ink"
            >
              <AtSign size={16} />
              Instagram
            </a>
            <Link
              href="/qr"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-ink/20 bg-transparent px-4 py-2 text-sm font-bold text-brand-ink transition hover:bg-brand-green hover:text-white sm:border-white/45 sm:text-white"
            >
              <QrCode size={16} />
              QR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
