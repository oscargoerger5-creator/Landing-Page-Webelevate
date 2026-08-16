import Link from "next/link";

const VIDEO_SRC = "/videos/showreel.mp4";

// Diaporama de la tuile Photo — ordre d'affichage voulu (photo-1 → photo-9).
const PHOTOS = Array.from({ length: 9 }, (_, i) => `/photos/photo-${i + 1}.jpg`);
const PHOTO_SLIDE_SECONDS = 3; // durée d'affichage de chaque photo

// Tuiles unifiées : même carte claire, le visuel vit à l'intérieur.
const tile =
  "group flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-4 transition-colors hover:border-black/20 md:min-h-[360px]";
const mediaArea = "relative flex-1 overflow-hidden rounded-xl";
const badge =
  "absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[11px]";
const label = "px-1.5 pb-1 pt-3";

// Mini site web coloré dans une fenêtre de navigateur (représente « Site internet »).
function BrowserMockup() {
  return (
    <div className="w-full max-w-[300px] overflow-hidden rounded-lg border border-black/10 bg-white shadow-md transition-transform duration-300 group-hover:-translate-y-1">
      {/* Barre du navigateur */}
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-neutral-50 px-3 py-2">
        <span className="size-2 rounded-full bg-red-400/70" />
        <span className="size-2 rounded-full bg-amber-400/70" />
        <span className="size-2 rounded-full bg-emerald-400/70" />
        <div className="ml-2 h-3 flex-1 rounded bg-black/[0.06]" />
      </div>
      {/* Contenu du mini-site */}
      <div className="p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded bg-gradient-to-br from-indigo-500 to-violet-500" />
            <span className="h-1.5 w-8 rounded bg-black/15" />
          </div>
          <span className="h-3 w-9 rounded-full bg-neutral-900" />
        </div>
        <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 p-3">
          <div className="h-2 w-2/3 rounded bg-white/90" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/60" />
          <div className="mt-2.5 h-3 w-12 rounded-full bg-white" />
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <div className="space-y-1">
            <div className="h-6 rounded bg-gradient-to-br from-orange-400 to-pink-500" />
            <div className="h-1 w-full rounded bg-black/10" />
          </div>
          <div className="space-y-1">
            <div className="h-6 rounded bg-gradient-to-br from-sky-400 to-cyan-400" />
            <div className="h-1 w-full rounded bg-black/10" />
          </div>
          <div className="space-y-1">
            <div className="h-6 rounded bg-gradient-to-br from-emerald-400 to-teal-500" />
            <div className="h-1 w-full rounded bg-black/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Diaporama en fondu : la première photo sert de fond stable, les autres
// se relaient par-dessus via les keyframes `photo-cycle` (globals.css).
function PhotoSlideshow() {
  const total = PHOTOS.length * PHOTO_SLIDE_SECONDS;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PHOTOS[0]}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      {PHOTOS.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 0 ? "Photos Webelevate" : ""}
          className="absolute inset-0 h-full w-full object-cover opacity-0"
          style={{
            animation: `photo-cycle ${total}s linear infinite`,
            animationDelay: `${i * PHOTO_SLIDE_SECONDS}s`,
          }}
        />
      ))}
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-3 shrink-0 text-emerald-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Chat IA animé (représente « IA ») — clair pour tout le monde :
// on demande une tâche, l'IA « écrit… » puis livre le résultat, en boucle.
function AiChat() {
  return (
    <div className="w-full max-w-[300px] rounded-xl border border-black/10 bg-white p-3 shadow-md transition-transform duration-300 group-hover:-translate-y-1">
      {/* En-tête */}
      <div className="mb-2.5 flex items-center gap-2 border-b border-black/[0.06] pb-2.5">
        <span className="grid size-6 place-items-center rounded-full bg-neutral-900 text-white">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
            <path d="M12 2l1.8 5L19 8.8l-5.2 1.7L12 16l-1.8-5.5L5 8.8 10.2 7z" />
          </svg>
        </span>
        <span className="text-xs font-semibold text-black/70">Assistant IA</span>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-black/40">
          <span className="size-1.5 rounded-full bg-emerald-500" />
          en ligne
        </span>
      </div>

      {/* Conversation */}
      <div className="space-y-2">
        <div className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-neutral-900 px-3 py-1.5 text-[11px] leading-snug text-white">
          Écris mes posts de la semaine
        </div>

        {/* Réponse IA : bascule « écrit… » → résultat (en boucle) */}
        <div className="grid min-h-[70px]">
          {/* état : en train d'écrire */}
          <div className="col-start-1 row-start-1 flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-md bg-black/[0.05] px-3 py-3 [animation:ai-typing-show_5s_ease-in-out_infinite]">
            <span className="size-1.5 rounded-full bg-black/40 [animation:typing_1s_ease-in-out_infinite]" />
            <span className="size-1.5 rounded-full bg-black/40 [animation:typing_1s_ease-in-out_infinite] [animation-delay:0.15s]" />
            <span className="size-1.5 rounded-full bg-black/40 [animation:typing_1s_ease-in-out_infinite] [animation-delay:0.3s]" />
          </div>
          {/* état : résultat livré */}
          <div className="col-start-1 row-start-1 w-fit max-w-full space-y-1.5 self-start rounded-2xl rounded-bl-md bg-black/[0.05] px-3 py-2 text-[11px] leading-snug text-black/70 opacity-0 [animation:ai-result-show_5s_ease-in-out_infinite]">
            <p>5 posts prêts à publier :</p>
            <div className="flex items-center gap-1.5 rounded-md bg-white px-2 py-1">
              <CheckIcon /> Lancement produit
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-white px-2 py-1">
              <CheckIcon /> Coulisses de l'équipe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// SERVICES — bento 2×2 : Site internet (HG) · IA (HD) · Vidéo (BG) · Photo (BD).
export function ServicesBento() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-black/40">
            Nos expertises
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Tout pour votre marque, au même endroit
          </h2>
        </div>
        <Link
          href="/services"
          className="text-sm text-black/60 max-sm:hidden hover:text-black"
        >
          Tous les services →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Site internet — haut gauche */}
        <Link href="/services" className={tile}>
          <div className={`${mediaArea} flex items-center justify-center bg-neutral-50 p-4`}>
            <BrowserMockup />
            <span className={`${badge} border-black/10 bg-white text-black/50`}>
              Site internet
            </span>
          </div>
          <div className={label}>
            <h3 className="text-lg font-medium">Site internet</h3>
            <p className="mt-0.5 text-sm text-black/60">
              Sites vitrines, e-commerce et web-apps sur-mesure.
            </p>
          </div>
        </Link>

        {/* IA — haut droite */}
        <Link href="/services" className={tile}>
          <div className={`${mediaArea} flex items-center justify-center bg-neutral-50 p-4`}>
            <AiChat />
            <span className={`${badge} border-black/10 bg-white text-black/50`}>
              IA
            </span>
          </div>
          <div className={label}>
            <h3 className="text-lg font-medium">IA</h3>
            <p className="mt-0.5 text-sm text-black/60">
              Automatisations et solutions IA pour gagner du temps.
            </p>
          </div>
        </Link>

        {/* Vidéo — bas gauche */}
        <Link href="/studio" className={tile}>
          <div className={`${mediaArea} bg-neutral-900`}>
            {VIDEO_SRC ? (
              <video
                src={VIDEO_SRC}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center text-xs text-white/25">
                [ Vidéo — showreel ]
              </span>
            )}
            <span className={`${badge} border-white/20 text-white/70`}>
              Vidéo
            </span>
          </div>
          <div className={label}>
            <h3 className="text-lg font-medium">Vidéo</h3>
            <p className="mt-0.5 text-sm text-black/60">
              Films de marque, reels et contenus qui captent l'attention.
            </p>
          </div>
        </Link>

        {/* Photo — bas droite */}
        <Link href="/studio" className={tile}>
          <div className={`${mediaArea} bg-neutral-900`}>
            <PhotoSlideshow />
            <span className={`${badge} border-white/20 text-white/70`}>
              Photo
            </span>
          </div>
          <div className={label}>
            <h3 className="text-lg font-medium">Photo</h3>
            <p className="mt-0.5 text-sm text-black/60">
              Shootings produits, portraits et images de marque.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
