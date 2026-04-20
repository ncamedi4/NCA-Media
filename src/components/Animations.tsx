import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/src/lib/utils';

interface HLSVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
}

export const HLSVideo = ({ src, className, ...props }: HLSVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={cn("w-full h-full object-cover", className)}
      muted
      playsInline
      loop
      {...props}
    />
  );
};

export const TextReveal = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.6,
  splitType = "words",
  tag: Tag = "p",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  once = true,
  align = "left"
}: {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: "words" | "chars";
  tag?: any;
  from?: { opacity?: number; y?: number; x?: number };
  to?: { opacity?: number; y?: number; x?: number };
  once?: boolean;
  align?: "left" | "center" | "right";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-20px" });
  const items = splitType === "words" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: from.opacity ?? 0,
      y: from.y ?? 0,
      x: from.x ?? 0,
    },
    visible: {
      opacity: to.opacity ?? 1,
      y: to.y ?? 0,
      x: to.x ?? 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <span ref={ref} className={className}>
      <Tag className="inline">
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={cn(
            "inline-flex flex-wrap",
            align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start"
          )}
        >
          {items.map((item, idx) => (
            <motion.span
              key={idx}
              variants={itemVariants}
              className="inline-block"
              style={{
                paddingBottom: "0.1em",
                marginRight: splitType === "words" ? "0.25em" : undefined,
                willChange: "transform, opacity",
              }}
            >
              {item === " " ? "\u00A0" : item}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    </span>
  );
};

export const SectionReveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  inView = false
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  inView?: boolean;
}) => {
  const ref = useRef(null);
  const isActuallyInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldAnimate = inView ? isActuallyInView : true;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={shouldAnimate ? { opacity: 1, filter: "blur(0px)", y: 0 } : { opacity: 0, filter: "blur(10px)", y: 20 }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
