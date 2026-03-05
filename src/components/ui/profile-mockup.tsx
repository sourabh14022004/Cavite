import React from "react";
import {
  Trophy,
  Users,
  Link as LinkIcon,
  Zap,
  Layout,
  Newspaper,
  ChevronRight,
  Github,
  Camera,
  Layers, // Using as placeholder for AWS icon or similar in skills
} from "lucide-react";

const ProfileMockup = () => {
  return (
    <div className="w-full flex justify-center items-center rounded-xl bg-black overflow-hidden p-[8px]">
      <div className="w-full h-full bg-[#0E0E10] rounded-[10px] text-white p-6 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 font-sans">
        {/* LEFT COLUMN - Main Profile & Recent Work */}
        <div className="flex flex-col gap-6">
          {/* Header Section */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-neutral-800 overflow-hidden border-2 border-neutral-800 shrink-0">
                {/* Simulated image avatar */}
                <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="Profile avatar"
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Arjun Patel
                </h1>
                <p className="text-neutral-400 text-sm mt-1">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1 text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors">
              Portfolio
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats Tags */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 bg-[#1A1A1E] px-3 py-1.5 rounded-full text-xs text-neutral-300 font-medium">
              <Trophy className="w-3.5 h-3.5 text-yellow-500" />
              <span>3 Shipped products</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A1E] px-3 py-1.5 rounded-full text-xs text-neutral-300 font-medium border border-[#2A2A30]">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>1.4M+ Users Impacted</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1A1A1E] px-3 py-1.5 rounded-full text-xs text-neutral-300 font-medium border border-[#2A2A30]">
              <LinkIcon className="w-3.5 h-3.5 text-neutral-400" />
              <span>Connected</span>
            </div>
          </div>

          {/* Recent Work Section */}
          <div className="mt-4">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-medium text-white">Recent Work</h2>
              <button className="text-blue-500 text-xs font-medium hover:text-blue-400">
                View all projects
              </button>
            </div>

            <div className="bg-[#141417] rounded-xl border border-[#222226] overflow-hidden">
              {/* Project 1 */}
              <div className="flex justify-between items-center p-4 hover:bg-[#1A1A1E] transition-colors border-b border-[#222226] group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-yellow-500 mt-0.5">
                    <Zap className="w-5 h-5" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-neutral-200 group-hover:text-white transition-colors">
                      AI PDF Summarizer
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                      Curated #1 Image Generator with zero hallucination.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#1A1A1E] group-hover:bg-[#222226] px-2 py-1 rounded text-xs text-neutral-400 transition-colors">
                  10.2k <span className="text-neutral-600">+</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex justify-between items-center p-4 hover:bg-[#1A1A1E] transition-colors border-b border-[#222226] group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-indigo-400 mt-0.5">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-neutral-200 group-hover:text-white transition-colors">
                      Collaborative whiteboard
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                      Used by Ross Portal DS 32x teams
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#1A1A1E] group-hover:bg-[#222226] px-2 py-1 rounded text-xs text-neutral-400 transition-colors">
                  3.4k <span className="text-neutral-600">+</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex justify-between items-center p-4 hover:bg-[#1A1A1E] transition-colors group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="text-red-500 mt-0.5">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-neutral-200 group-hover:text-white transition-colors">
                      Newsletter curator
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                      Currently in the waitlist phase
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#1A1A1E] group-hover:bg-[#222226] px-2 py-1 rounded text-xs text-neutral-400 transition-colors">
                  50k <span className="text-neutral-600">+</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button className="text-blue-500 text-xs font-medium hover:text-blue-400">
                View Timeline
              </button>
              <button className="text-blue-500 text-xs font-medium hover:text-blue-400">
                View all projects
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Navigation & Skills */}
        <div className="bg-[#141417] rounded-xl border border-[#222226] p-6 flex flex-col gap-8 h-fit">
          {/* Internal Navigation Tabs */}
          <div className="flex justify-between items-center border-b border-[#2A2A30] pb-0">
            <button className="text-sm font-medium text-white pb-3 border-b-2 border-blue-500 px-1">
              Work
            </button>
            <button className="text-sm font-medium text-neutral-500 hover:text-neutral-300 pb-3 border-b-2 border-transparent px-1 transition-colors">
              Projects
            </button>
            <button className="text-sm font-medium text-neutral-500 hover:text-neutral-300 pb-3 border-b-2 border-transparent px-1 transition-colors">
              Links
            </button>
          </div>

          {/* Icon Grid Row */}
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] hover:bg-[#222226] transition-colors flex items-center justify-center cursor-pointer border border-[#2A2A30]">
              <Github className="w-5 h-5 text-neutral-300" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] hover:bg-[#222226] transition-colors flex items-center justify-center cursor-pointer border border-[#2A2A30]">
              <Camera className="w-5 h-5 text-neutral-300" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] hover:bg-[#222226] transition-colors flex items-center justify-center cursor-pointer border border-[#2A2A30]">
              <Camera className="w-5 h-5 text-neutral-300" />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] hover:bg-[#222226] transition-colors flex items-center justify-center cursor-pointer border border-[#2A2A30]">
              <Camera className="w-5 h-5 text-neutral-300" />
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-2 bg-blue-600/20 text-blue-500 rounded-lg text-xs font-semibold border border-blue-600/30 flex items-center justify-center h-10 min-w-[3rem]">
                TS
              </div>
              <div className="px-3 py-2 bg-emerald-600/20 text-emerald-400 rounded-lg text-xs font-semibold border border-emerald-600/30 flex items-center justify-center h-10 min-w-[4rem]">
                Nodejs
              </div>
              <div className="px-3 py-2 bg-zinc-800 text-white rounded-lg text-xs font-semibold border border-zinc-700 flex items-center justify-center h-10 min-w-[4rem]">
                Next.js
              </div>
              <div className="px-3 py-2 bg-[#FF9900]/20 text-[#FF9900] rounded-lg text-xs font-semibold border border-[#FF9900]/30 flex items-center justify-center h-10 min-w-[4rem]">
                AWS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMockup;
