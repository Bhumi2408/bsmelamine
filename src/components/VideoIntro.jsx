import { media } from "@/data/media";

export default function VideoIntro() {
  return (
    <section className="relative w-full h-[860px] overflow-hidden bg-ink">
      <video
        src={media.introVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div aria-hidden className="absolute inset-0 bg-ink/20" />
    </section>
  );
}
