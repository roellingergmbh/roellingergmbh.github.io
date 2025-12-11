import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'char';
  animateOnMount?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, className = "", delay = 0, type = 'word', animateOnMount = false }) => {
  const items = type === 'word' ? children.split(" ") : children.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const animationProps = animateOnMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true } };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      {...animationProps}
      className={className}
    >
      {items.map((item, index) => (
        <motion.span variants={child} key={index} className={type === 'word' ? "mr-[0.25em]" : ""}>
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </motion.div>
  );
};
