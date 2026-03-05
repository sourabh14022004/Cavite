import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Circle,
  MoreHorizontal,
  MessageSquare,
  Calendar,
  Star,
} from "lucide-react";

export function HiringMockup() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="w-full h-full bg-[#0a0a0a]/90 flex flex-col p-4 sm:p-6 overflow-hidden select-none font-sans border border-white/5 rounded-[32px] md:h-[637px]">
      {/* Kanban Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-white font-medium text-lg">Frontend Developer</h3>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <MoreHorizontal className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
      </div>

      <div className="flex gap-6 h-full min-w-max">
        {/* Column 1: Sourced */}
        <div className="w-64 flex flex-col gap-3">
          <div className="flex justify-between items-center mb-2 px-1">
            <div className="flex items-center gap-2">
              <Circle className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-sm font-medium text-neutral-300">
                Sourced
              </span>
            </div>
            <span className="text-xs font-semibold text-neutral-500 bg-white/5 px-2 py-0.5 rounded-full">
              12
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3"
          >
            {/* Candidate Card 1 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#141417] border border-white/10 rounded-xl p-4 hover:border-blue-500/50 transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 overflow-hidden shrink-0">
                    <img
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      alt="Alex"
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                      Alex Chen
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Sr. React Eng @ Stripe
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mb-3">
                <span className="text-[10px] font-medium px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  98% Match
                </span>
                <span className="text-[10px] font-medium px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/10">
                  UI/UX
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-white/5">
                <div className="flex gap-3 text-neutral-500">
                  <MessageSquare className="w-3.5 h-3.5 hover:text-white transition-colors" />
                </div>
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 rounded-full bg-neutral-800 border border-[#141417] z-10"></div>
                  <div className="w-5 h-5 rounded-full bg-neutral-700 border border-[#141417]"></div>
                </div>
              </div>
            </motion.div>

            {/* Candidate Card 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#141417] border border-white/10 rounded-xl p-4 hover:border-blue-500/50 transition-colors cursor-pointer opacity-70"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 overflow-hidden shrink-0">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024c"
                    alt="Sarah"
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">
                    Sarah Jenkins
                  </h4>
                  <p className="text-xs text-neutral-400">Frontend @ Vercel</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-medium px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/10">
                  Next.js
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Column 2: Interviewing */}
        <div className="w-64 flex flex-col gap-3 relative before:absolute before:-left-3 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-white/10 before:to-transparent">
          <div className="flex justify-between items-center mb-2 px-1 pl-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-sm font-medium text-neutral-300">
                Interviewing
              </span>
            </div>
            <span className="text-xs font-semibold text-neutral-500 bg-white/5 px-2 py-0.5 rounded-full">
              3
            </span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 pl-3"
          >
            {/* Candidate Card 3 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#1A1A1E] border border-emerald-500/30 rounded-xl p-4 shadow-[0_0_15px_rgba(16,185,129,0.1)] cursor-pointer relative overflow-hidden"
            >
              {/* Highlight gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[30px] rounded-full mix-blend-screen pointer-events-none"></div>

              <div className="flex justify-between items-start mb-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 overflow-hidden shrink-0">
                    <img
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      alt="David"
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white flex items-center gap-1">
                      David Kim
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    </h4>
                    <p className="text-xs text-neutral-400">Lead UI @ Linear</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2.5 mb-3 relative z-10">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-emerald-400 font-medium">
                    Technical Round
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400/80">
                    <Calendar className="w-3 h-3" /> Tomorrow, 2PM
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-2 relative z-10">
                <div className="flex gap-1">
                  <div className="w-6 h-1.5 rounded-full bg-emerald-500"></div>
                  <div className="w-6 h-1.5 rounded-full bg-emerald-500/30"></div>
                </div>
                <span className="text-[10px] text-neutral-500">
                  Step 2 of 3
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient fade at the bottom for scroll illusion */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none rounded-b-[32px]"></div>
    </div>
  );
}
