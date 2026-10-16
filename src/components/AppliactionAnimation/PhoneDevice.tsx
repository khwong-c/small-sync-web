/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import {
  Check,
  FileText,
  Mic,
  Plus,
  Wifi,
  Signal,
  Battery,
} from 'lucide-react';
type ThemeMode = 'dark' | 'light';

interface TaskItem {
  id: string;
  label: string;
  completed: boolean;
}

interface PhoneDeviceProps {
  theme: ThemeMode;
  tasks: TaskItem[];
  onToggleTask: (taskId: string, source: 'laptop' | 'phone') => void;
  isSyncing: boolean;
}

export const PhoneDevice: React.FC<PhoneDeviceProps> = ({
  theme,
  tasks,
  onToggleTask,
  isSyncing,
}) => {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute z-30 right-3 sm:right-8 md:right-12 bottom-2 sm:bottom-4 w-[245px] sm:w-[285px] md:w-[315px] select-none pointer-events-auto"
    >
      {/* Glowing aura for phone shadow */}
      <div
        className="absolute -inset-2 rounded-[44px] blur-xl opacity-75 pointer-events-none"
      />

      {/* Phone Outer Shell (iPhone Pro styling) */}
      <div className="relative rounded-[40px] p-2.5 sm:p-3 bg-gradient-to-b from-[#353c4a] via-[#1e2430] to-[#121620] shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.1)] border border-slate-700/80">
        {/* Screen Glass */}
        <motion.div
          animate={{
            backgroundColor: isDark ? '#0f131c' : '#faf8ff',
            borderColor: isDark ? '#1e2430' : '#dae2fd',
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[370px] sm:h-[470px] md:h-[520px] rounded-[32px] overflow-hidden flex flex-col border shadow-inner"
        >
          {/* Dynamic Island Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 w-28 h-5 rounded-full bg-black flex items-center justify-between px-2.5 shadow-md">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
          </div>

          {/* Phone Status Bar */}
          <div
            className={`w-full pt-2.5 px-5 pb-1 flex justify-between items-center text-[10px] font-mono z-30 transition-colors ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            <div className="flex items-center gap-1">
              <span
                className={`font-sans font-semibold text-xs ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                9:41
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <div className="flex items-center gap-0.5">
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Phone App UI: Minimalist Mobile Note View */}
          <div className="flex-1 p-3.5 sm:p-4 flex flex-col overflow-hidden">
            {/* App Header / Workspace Title */}
            <div
              className={`flex items-center justify-between pb-2 border-b transition-colors shrink-0 ${
                isDark ? 'border-slate-800' : 'border-indigo-100'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                  <FileText className="w-3 h-3" />
                </div>
                <span
                  className={`text-[11px] font-semibold tracking-wide transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Clarity Notes
                </span>
              </div>
              <button
                type="button"
                className="w-5 h-5 rounded-full bg-sky-500/20 hover:bg-sky-500/40 text-sky-400 flex items-center justify-center text-[11px] transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>

            {/* Mobile Note Content Canvas - main note, previews, and voice bar */}
            <div className="flex-1 flex flex-col gap-2 py-3">
              {/* Upper section: Main note + preview cards (expands to push voice card to bottom) */}
              <div className="flex-1 flex flex-col gap-2">
                {/* Active Note Main Card */}
                <motion.div
                  animate={{
                    backgroundColor: isDark ? '#181c24' : '#ffffff',
                    borderColor: isDark ? '#222630' : '#dae2fd',
                  }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl p-3 border shadow-sm relative overflow-hidden space-y-2"
                >
                  {/* Title Block & Tag Placeholders */}
                  <div className="flex justify-between items-center">
                    <div className={`w-32 h-2.5 rounded ${isDark ? 'bg-sky-400' : 'bg-sky-600'}`} />
                    <div className={`w-12 h-3 rounded-full ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                  </div>

                  {/* Abstract Note Preview Placeholder */}
                  <div className="space-y-1">
                    <div className={`w-full h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                    <div className={`w-4/5 h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                  </div>

                  {/* Synchronized Checklist in Mobile */}
                  <div
                    className={`pt-2 border-t space-y-1.5 transition-colors ${
                      isDark ? 'border-slate-800' : 'border-indigo-100'
                    }`}
                  >
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        onClick={() => onToggleTask(task.id, 'phone')}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <motion.div
                          whileTap={{ scale: 0.85 }}
                          animate={{
                            backgroundColor: task.completed
                              ? isDark
                                ? '#0ea5e9'
                                : '#006591'
                              : 'transparent',
                            borderColor: task.completed
                              ? 'transparent'
                              : isDark
                              ? '#475569'
                              : '#94a3b8',
                          }}
                          className="w-3.5 h-3.5 rounded border flex items-center justify-center text-white shrink-0 transition-colors"
                        >
                          {task.completed && (
                            <Check className="w-2 h-2 stroke-[3]" />
                          )}
                        </motion.div>
                        <span
                          className={`text-[10px] truncate transition-all ${
                            task.completed
                              ? isDark
                                ? 'text-slate-400 line-through opacity-75'
                                : 'text-slate-500 line-through opacity-75'
                              : isDark
                              ? 'text-slate-200'
                              : 'text-slate-800'
                          }`}
                        >
                          {task.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Secondary Note Snippet Card - Placeholder */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    backgroundColor: isDark ? '#181c24' : '#f2f3ff',
                    borderColor: isDark ? '#222630' : '#dae2fd',
                  }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl p-2.5 border space-y-1 cursor-pointer transition-shadow hover:shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-20 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                    <div className={`w-8 h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                  </div>
                  <div className={`w-full h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                </motion.div>

                {/* Third Note Snippet Card - Placeholder (hidden on mobile) */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    backgroundColor: isDark ? '#181c24' : '#f2f3ff',
                    borderColor: isDark ? '#222630' : '#dae2fd',
                  }}
                  transition={{ duration: 0.4 }}
                  className="hidden sm:block rounded-xl p-2.5 border space-y-1 cursor-pointer transition-shadow hover:shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-24 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                    <div className={`w-10 h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                  </div>
                  <div className={`w-11/12 h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                </motion.div>

                {/* Fourth Note Snippet Card - Placeholder (hidden on mobile) */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    backgroundColor: isDark ? '#181c24' : '#f2f3ff',
                    borderColor: isDark ? '#222630' : '#dae2fd',
                  }}
                  transition={{ duration: 0.4 }}
                  className="hidden sm:block rounded-xl p-2.5 border space-y-1 cursor-pointer transition-shadow hover:shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-16 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                    <div className={`w-9 h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                  </div>
                  <div className={`w-3/4 h-1.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                </motion.div>
              </div>

              {/* Voice note card pinned at bottom */}
              <motion.div
                animate={{
                  backgroundColor: isDark ? '#181c24' : '#ffffff',
                  borderColor: isDark ? '#222630' : '#dae2fd',
                }}
                transition={{ duration: 0.4 }}
                className="p-1.5 px-2 rounded-xl border flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-1.5 cursor-pointer flex-1">
                  <Mic className="w-3.5 h-3.5 text-sky-500" />
                  <div className={`w-20 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`} />
                </div>
                <div className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center shadow-sm shrink-0">
                  <Plus className="w-3 h-3 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="pt-2 flex flex-col items-center gap-1.5">
              <div
                className={`w-24 h-1 rounded-full transition-colors ${
                  isDark ? 'bg-slate-600' : 'bg-slate-400'
                }`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
