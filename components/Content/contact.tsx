"use client";

import { Mail } from "lucide-react";

import { socialLinks } from "@/lib/portfolio-data";

import { GithubIcon, LinkedinIcon, XIcon } from "../ui/brand-icons";
import { PixelImage } from "../ui/pixel-image";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

const socialIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: XIcon,
  mail: Mail,
};

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl border-t border-border px-6 py-20 sm:py-24 md:py-28"
    >
      <SectionHeading
        index="04 — Contact"
        title="Let's work together"
        description="If you want to work on a project together, feel free to reach out."
      />

      <div className="mt-10 grid items-start gap-10 md:grid-cols-5 md:gap-12">
        {/* Social links */}
        <Reveal
          className="flex flex-col gap-4 md:col-span-3"
          delay={0.2}
          direction="left"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
            Find me here
          </h3>

          <ul className="flex max-w-xl flex-col gap-2">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.icon];

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />

                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* React image */}
        <Reveal
          className="flex items-start justify-center md:col-span-2 md:justify-end"
          delay={0.3}
          direction="right"
        >
          <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px]">
            <PixelImage
              src="/react.png"
              customGrid={{ rows: 4, cols: 6 }}
              grayscaleAnimation
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
