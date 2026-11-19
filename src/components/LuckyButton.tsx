import { useState } from 'react';
import { motion } from 'framer-motion';

interface LuckyButtonProps {
  onClick: () => void;
}

export function LuckyButton({ onClick }: LuckyButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ x: -2, y: -2 }}
      whileTap={{ x: 3, y: 3 }}
      transition={{ type: 'spring', stiffness: 460, damping: 28 }}
      className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border-2 border-[#181B1F] bg-gradient-to-b from-[#F2B84B] to-[#E39D28] px-5 py-3 text-sm font-bold text-[#181B1F] shadow-[4px_4px_0_#181B1F] transition-shadow duration-150 hover:shadow-[6px_6px_0_#181B1F] active:shadow-[1px_1px_0_#181B1F] sm:px-6 sm:py-3.5 sm:text-[0.95rem]"
    >
      {/* Subtle inner top highlight for letterpress feel */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-white/55"
      />

      {/* Diagonal sheen sweep on hover */}
      {hovered && (
        <span
          aria-hidden="true"
          className="lucky-sheen-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/45 to-transparent"
        />
      )}

      {/* Custom 8-point compass/spark emblem */}
      <motion.span
        animate={{ rotate: hovered ? 45 : 0, scale: hovered ? 1.08 : 1 }}
        transition={{ type: 'spring', stiffness: 360, damping: 20 }}
        className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-[1.5px] border-[#181B1F] bg-[#FFFDF9]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#181B1F]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2.5L14.2 8.8L20.5 11L14.2 13.2L12 19.5L9.8 13.2L3.5 11L9.8 8.8L12 2.5Z"
            fill="#C84B31"
            stroke="#181B1F"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="18.5" cy="5.5" r="1.4" fill="#1B5E63" />
          <circle cx="5.5" cy="17.5" r="1.2" fill="#E39D28" />
        </svg>
      </motion.span>

      <span className="relative flex flex-col items-start leading-tight">
        <span className="tracking-tight">Bana Bir Söz Seç</span>
        <span className="text-[10px] font-semibold tracking-wider text-[#181B1F]/70 uppercase">
          Rastgele Keşfet
        </span>
      </span>
    </motion.button>
  );
}
