import Image from "next/image";
import { AtSign, MessageCircle } from "lucide-react";
import { socialLinks } from "@/data/landing-content";

export function FooterSection() {
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

        <div className="absolute inset-x-0 bottom-4 flex justify-center px-3 sm:bottom-6">
          <div className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-white/35 bg-brand-ink/55 p-2 backdrop-blur sm:flex-row sm:items-center sm:justify-center">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/45 bg-transparent px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-brand-ink"
            >
              <AtSign size={16} />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
