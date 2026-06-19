import React from 'react';
import { Users, User, Wallet, LogIn, Info, Clock } from 'lucide-react';

export default function TournamentCard() {
  return (
    <div className="w-full max-w-5xl bg-[#0b0c10] text-white p-4 rounded-3xl border border-zinc-800 shadow-2xl font-sans select-none overflow-hidden relative">
      
      {/* Main Content Layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 bg-cover bg-center rounded-2xl border border-zinc-700/50 p-1"
           style={{ 
             backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.85) 90%), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000')` 
           }}>
        
        {/* LEFT & CENTER: Branding and Character (Spans 9 columns) */}
        <div className="lg:col-span-9 p-6 flex flex-col justify-between min-h-[280px] relative z-10">
          
          {/* Header Badge */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7a12df] to-[#9b30ff] px-4 py-1.5 rounded-r-md rounded-tl-md transform -skew-x-12 origin-left">
              <span className="transform skew-x-12 font-black text-xs tracking-wider uppercase flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
                BR Rank
              </span>
            </div>

            {/* Main Title */}
            <div className="mt-4 space-y-0.5">
              <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                BR Rank
              </h1>
              <h1 className="text-6xl md:text-7xl font-black italic tracking-tight text-[#f4c430] uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                Match
              </h1>
            </div>
          </div>

          {/* Subtitle Slogan */}
          <div className="mt-4 inline-block bg-gradient-to-r from-[#4a0e80] via-[#1a0533] to-transparent px-6 py-1 transform -skew-x-12 border-l-4 border-[#9b30ff]">
            <p className="text-xs md:text-sm font-bold tracking-widest text-zinc-100 uppercase italic transform skew-x-12">
              Booyah to be the last one!
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Info Sidebar (Spans 3 columns) */}
        <div className="lg:col-span-3 flex flex-col justify-between bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-zinc-800/80 m-2 space-y-3">
          
          {/* Upcoming Timer Header */}
          <div className="bg-[#f4c430] text-black rounded-lg p-2 flex items-center justify-center gap-2 font-black uppercase text-sm tracking-wide shadow-[0_0_15px_rgba(244,196,48,0.3)]">
            <Clock className="w-4 h-4 stroke-[3]" />
            Upcoming
          </div>

          {/* Countdown Countdown */}
          <div className="text-center py-1">
            <p className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Starts In</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <div>
                <span className="text-3xl font-black tracking-tight text-[#f4c430]">10</span>
                <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Min</span>
              </div>
              <span className="text-2xl font-black text-[#f4c430] mb-4 animate-ping">:</span>
              <div>
                <span className="text-3xl font-black tracking-tight text-[#f4c430]">25</span>
                <span className="block text-[9px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Sec</span>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="h-[1px] bg-zinc-800 w-full" />

          {/* Entry Fee & Prize Pool Stack */}
          <div className="space-y-3 px-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-purple-400 uppercase">Entry Fee</p>
                <p className="text-2xl font-black tracking-tight mt-0.5">₹50</p>
              </div>
            </div>
            <div className="h-[1px] bg-zinc-900 w-full" />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] font-bold tracking-wider text-purple-400 uppercase">Prize Pool</p>
                <p className="text-2xl font-black tracking-tight mt-0.5 text-white">Postal Pool</p>
                <p className="text-3xl font-black tracking-tighter mt-0.5 text-zinc-100">Layout Pool</p>
                <p className="text-3xl font-black tracking-tight text-white">₹5,000</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* FOOTER BAR: Match Metadata Stats & Action Row */}
      <div className="mt-4 grid grid-cols-1 md:flex md:items-center md:justify-between gap-4 px-2">
        
        {/* Match Meta Grid */}
        <div className="flex flex-wrap items-center gap-4 bg-zinc-950/60 border border-zinc-900 px-6 py-3 rounded-2xl flex-1 max-w-2xl">
          {/* Team Type */}
          <div className="flex items-center gap-3 pr-6 border-r border-zinc-800">
            <div className="p-2 bg-zinc-900 rounded-xl text-[#f4c430]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-wide">Squad</p>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Team Type</p>
            </div>
          </div>

          {/* Slots Available */}
          <div className="flex items-center gap-3 pr-6 border-r border-zinc-800">
            <div className="p-2 bg-zinc-900 rounded-xl text-[#f4c430]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-wide">30 / 50</p>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Slots Filled</p>
            </div>
          </div>

          {/* Bottom Row Entry Fee Confirmation */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-900 rounded-xl text-[#f4c430]">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-wide">₹50</p>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">Entry Fee</p>
            </div>
          </div>
        </div>

        {/* Action Interactive Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Join Now Button */}
          <button className="flex items-center justify-center gap-2 bg-[#f4c430] hover:bg-[#e0b324] text-black font-black uppercase tracking-wider text-sm px-8 py-3.5 rounded-xl transition-all duration-200 transform active:scale-95 shadow-[0_4px_20px_rgba(244,196,48,0.25)] group">
            <LogIn className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
            Join Now
          </button>

          {/* View Details Button */}
          <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-zinc-900 text-white font-bold uppercase tracking-wider text-xs px-5 py-3.5 rounded-xl border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-200">
            <Info className="w-4 h-4 text-purple-400" />
            View Details
          </button>
        </div>

      </div>

    </div>
  );
                }
