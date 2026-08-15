"use client"
import { HexBackground } from '../ui/hex-background';
import { profile } from '@/lib/portfolio-data';
import { Button } from '../ui/button';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id='#top' className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6'>
        <HexBackground/>
        <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-primary">
          <span className="size-1.5 rounded-full bg-primary" />
          Learning Golang ...
        </span>

        <h1 className="text-balance font-mono text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Button render={<a href="#projects" />} nativeButton={false} size="lg" className="px-6">
            View my work
          </Button>
          <Button
            render={<a href={profile.resumeUrl} download />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="px-6"
          >
            <Download data-icon="inline-start" />
            Download resume
          </Button>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
        </section>
    );
}

export default Hero;
