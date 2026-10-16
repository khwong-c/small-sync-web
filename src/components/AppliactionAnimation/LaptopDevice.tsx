/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {motion} from 'motion/react';
import {Bold, Check, CheckSquare, Code, FileText, Image as ImageIcon, Italic, Moon, Plus, Sun,} from 'lucide-react';
import {NotePlaceholder} from './NotePlaceholder';

type ThemeMode = 'dark' | 'light';

interface TaskItem {
    id: string;
    label: string;
    completed: boolean;
}

interface LaptopDeviceProps {
    theme: ThemeMode;
    onToggleTheme: () => void;
    tasks: TaskItem[];
    onToggleTask: (taskId: string, source: 'laptop' | 'phone') => void;
}

export const LaptopDevice: React.FC<LaptopDeviceProps> = ({
                                                              theme,
                                                              onToggleTheme,
                                                              tasks,
                                                              onToggleTask,
                                                          }) => {
    const isDark = theme === 'dark';

    const completedCount = tasks.filter((t) => t.completed).length;

    return (
        <motion.div
            initial={{opacity: 0, y: 70, scale: 0.96}}
            animate={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            className="relative z-10 w-full max-w-[890px] flex flex-col items-center select-none"
        >
            {/* Laptop Display Outer Bezel */}
            <div
                className="relative w-full rounded-2xl sm:rounded-3xl p-3 sm:p-4
                   border border-slate-700/60
                   bg-gradient-to-b from-[#2a303c] via-[#1c222e] to-[#141822]"
            >
                {/* Web Camera Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-700"/>
                    <motion.div
                        animate={{opacity: [0.4, 0.9, 0.4]}}
                        transition={{repeat: Infinity, duration: 2.4}}
                        className="w-1 h-1 rounded-full bg-emerald-400"
                    />
                </div>

                {/* Screen / Note App Container */}
                <motion.div
                    animate={{
                        backgroundColor: isDark ? '#0f131c' : '#faf8ff',
                        borderColor: isDark ? '#1e2430' : '#dae2fd',
                    }}
                    transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
                    className="relative w-full h-[400px] sm:h-[470px] rounded-xl overflow-hidden flex flex-col border shadow-inner"
                >
                    {/* App Window Top Toolbar */}
                    <motion.div
                        animate={{
                            backgroundColor: isDark ? '#181c24' : '#eaedff',
                            borderColor: isDark ? '#222630' : '#dae2fd',
                            color: isDark ? '#cbd5e1' : '#131b2e',
                        }}
                        transition={{duration: 0.5}}
                        className="w-full h-10 px-3 sm:px-4 flex items-center justify-between border-b text-xs shrink-0"
                    >
                        {/* macOS Window Controls */}
                        <div className="flex items-center gap-2">
                            <span
                                className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm hover:opacity-100 transition-opacity"/>
                            <span
                                className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm hover:opacity-100 transition-opacity"/>
                            <span
                                className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm hover:opacity-100 transition-opacity"/>
                        </div>

                        {/* Note App Document Breadcrumb / Sync State */}
                        <motion.div
                            animate={{
                                backgroundColor: isDark ? '#0f131c' : '#ffffff',
                                borderColor: isDark ? '#222630' : '#bec8d2',
                                color: isDark ? '#94a3b8' : '#3e4850',
                            }}
                            transition={{duration: 0.5}}
                            className="flex-1 max-w-xs sm:max-w-sm mx-3 px-3 py-1 rounded-md text-xs font-mono flex items-center justify-between border"
                        >
                            <div className="flex items-center gap-2 truncate">
                                <span className="w-2 h-2 rounded bg-sky-500 shrink-0"/>
                                <div className={`w-32 h-2.5 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                            </div>
                        </motion.div>

                        {/* Interactive Theme Switch Button on Laptop */}
                        <div className="flex items-center gap-2">
              <span
                  className={`text-[11px] font-mono hidden sm:inline transition-colors ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
              >
                Theme:
              </span>
                            <button
                                type="button"
                                onClick={onToggleTheme}
                                title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
                                aria-label={`Toggle theme, current is ${theme}`}
                                className={`relative w-12 h-6 rounded-full p-0.5 cursor-pointer border transition-colors shadow-inner flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                                    isDark
                                        ? 'bg-slate-800 border-slate-700'
                                        : 'bg-sky-100 border-sky-300'
                                }`}
                            >
                                <motion.div
                                    animate={{
                                        x: isDark ? 24 : 0,
                                        backgroundColor: isDark ? '#0ea5e9' : '#006591',
                                    }}
                                    transition={{type: 'spring', stiffness: 500, damping: 30}}
                                    className="w-5 h-5 rounded-full shadow-md flex items-center justify-center text-white"
                                >
                                    {isDark ? (
                                        <Moon className="w-3 h-3 text-white"/>
                                    ) : (
                                        <Sun className="w-3 h-3 text-white"/>
                                    )}
                                </motion.div>
                            </button>
                        </div>
                    </motion.div>

                    {/* Note App 2-Column Interface */}
                    <motion.div
                        animate={{
                            backgroundColor: isDark ? '#0f131c' : '#faf8ff',
                        }}
                        transition={{duration: 0.5}}
                        className="flex-1 flex overflow-hidden"
                    >
                        {/* Left Sidebar: Folders & Note Cards Preview */}
                        <motion.aside
                            animate={{
                                backgroundColor: isDark ? '#141822' : '#f2f3ff',
                                borderColor: isDark ? '#222630' : '#dae2fd',
                            }}
                            transition={{duration: 0.5}}
                            className="hidden md:block w-[200px] sm:w-[245px] border-r p-3 sm:p-4 flex flex-col justify-between shrink-0"
                        >
                            <div className="space-y-3 sm:space-y-4 overflow-y-auto pr-1">
                                {/* App Header / Workspace */}
                                <div
                                    className={`flex items-center justify-between pb-2.5 border-b transition-colors ${
                                        isDark ? 'border-slate-800' : 'border-indigo-100'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-6 h-6 rounded-md bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                                            <FileText className="w-3.5 h-3.5"/>
                                        </div>
                                        <span
                                            className={`text-xs font-semibold tracking-wide transition-colors ${
                                                isDark ? 'text-white' : 'text-slate-900'
                                            }`}
                                        >
                      Clarity Notes
                    </span>
                                    </div>
                                    <button
                                        type="button"
                                        title="Quick New Note"
                                        className="w-4 h-4 rounded-full bg-sky-500/20 hover:bg-sky-500/40 text-sky-400 flex items-center justify-center text-[11px] transition-colors"
                                    >
                                        <Plus className="w-2.5 h-2.5"/>
                                    </button>
                                </div>

                                {/* Category Filter Pills */}
                                <div className="flex items-center gap-1">
                                    {['', '', ''].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-10 h-4 rounded-full ${
                                                isDark ? 'bg-slate-600' : 'bg-slate-300'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Note List Placeholders */}
                                <div className="space-y-2">
                                    <NotePlaceholder theme={theme}/>
                                    <NotePlaceholder theme={theme}/>
                                    <NotePlaceholder theme={theme}/>
                                </div>
                            </div>

                        </motion.aside>

                        {/* Right Pane: Active Note Reading & Editing Surface */}
                        <motion.main
                            animate={{
                                backgroundColor: isDark ? '#0f131c' : '#faf8ff',
                            }}
                            transition={{duration: 0.5}}
                            className="flex-1 p-4 sm:p-5 flex flex-col justify-between overflow-y-auto"
                        >
                            <div className="space-y-4">
                                {/* Editor Toolbar */}
                                <div
                                    className={`flex items-center justify-between pb-2.5 border-b transition-colors ${
                                        isDark ? 'border-slate-800' : 'border-indigo-100'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            animate={{
                                                backgroundColor: isDark ? '#181c24' : '#ffffff',
                                                borderColor: isDark ? '#222630' : '#bec8d2',
                                                color: isDark ? '#cbd5e1' : '#131b2e',
                                            }}
                                            transition={{duration: 0.4}}
                                            className="px-2 py-1 rounded-md border flex items-center gap-1.5 shadow-xs"
                                        >
                                            <button
                                                type="button"
                                                title="Bold"
                                                className="p-1 hover:text-sky-400 transition-colors"
                                            >
                                                <Bold className="w-3 h-3"/>
                                            </button>
                                            <button
                                                type="button"
                                                title="Italic"
                                                className="p-1 hover:text-sky-400 transition-colors"
                                            >
                                                <Italic className="w-3 h-3"/>
                                            </button>
                                            <button
                                                type="button"
                                                title="Code snippet"
                                                className="p-1 hover:text-sky-400 transition-colors"
                                            >
                                                <Code className="w-3 h-3"/>
                                            </button>
                                            <div className="w-px h-3 bg-slate-700/50 mx-0.5"/>
                                            <button
                                                type="button"
                                                title="Checklist format"
                                                className="p-1 hover:text-sky-400 transition-colors"
                                            >
                                                <CheckSquare className="w-3 h-3"/>
                                            </button>
                                            <button
                                                type="button"
                                                title="Attach image"
                                                className="p-1 hover:text-sky-400 transition-colors"
                                            >
                                                <ImageIcon className="w-3 h-3"/>
                                            </button>
                                        </motion.div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className={`w-8 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        <span
                                            className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        <div
                                            className={`w-10 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                    </div>
                                </div>

                                {/* Document Content Body - Abstract Placeholders */}
                                <div className="space-y-3">
                                    {/* Document Title Placeholder */}
                                    <div>
                                        <div className={`w-48 h-4 rounded ${isDark ? 'bg-sky-400' : 'bg-sky-600'}`}/>
                                        <div className="flex items-center gap-2 mt-1.5">
                                            <div
                                                className={`w-16 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                            <div
                                                className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                            <div
                                                className={`w-20 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        </div>
                                    </div>

                                    {/* Note Prose Paragraph Placeholders */}
                                    <div className="space-y-1.5">
                                        <div
                                            className={`w-full h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        <div
                                            className={`w-11/12 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        <div
                                            className={`w-full h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        <div
                                            className={`w-10/12 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        <div
                                            className={`w-full h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                        <div
                                            className={`w-9/12 h-2 rounded ${isDark ? 'bg-slate-600' : 'bg-slate-300'}`}/>
                                    </div>

                                    {/* Interactive Checklist Items - Keep Text */}
                                    <motion.div
                                        animate={{
                                            backgroundColor: isDark ? '#181c24' : '#ffffff',
                                            borderColor: isDark ? '#222630' : '#dae2fd',
                                        }}
                                        transition={{duration: 0.4}}
                                        className="p-3 rounded-xl border space-y-2.5 max-w-lg shadow-xs"
                                    >
                                        <div className="flex items-center justify-between text-[10px] font-mono">
                      <span
                          className={`font-semibold tracking-wider ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                          }`}
                      >
                        ACTION ITEMS
                      </span>
                                            <span className="text-sky-500 font-bold">
                        {completedCount}/{tasks.length} DONE
                      </span>
                                        </div>

                                        <div className="space-y-2">
                                            {tasks.map((task) => (
                                                <div
                                                    key={task.id}
                                                    onClick={() => onToggleTask(task.id, 'laptop')}
                                                    className="flex items-center gap-2.5 cursor-pointer group"
                                                >
                                                    <motion.div
                                                        whileTap={{scale: 0.88}}
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
                                                        className="w-4 h-4 rounded-md border flex items-center justify-center text-white shrink-0 transition-colors"
                                                    >
                                                        {task.completed && (
                                                            <Check className="w-2.5 h-2.5 stroke-[3]"/>
                                                        )}
                                                    </motion.div>
                                                    <span
                                                        className={`text-xs transition-all ${
                                                            task.completed
                                                                ? isDark
                                                                    ? 'text-slate-400 line-through opacity-75'
                                                                    : 'text-slate-500 line-through opacity-75'
                                                                : isDark
                                                                    ? 'text-slate-200 group-hover:text-white'
                                                                    : 'text-slate-800 group-hover:text-slate-950'
                                                        }`}
                                                    >
                            {task.label}
                          </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                        </motion.main>
                    </motion.div>
                </motion.div>
            </div>

            {/* Laptop Chassis Base & Notch */}
            <div
                className="relative w-[105%] h-4 sm:h-5 rounded-b-xl bg-gradient-to-b from-[#242936] to-[#121620] border-t border-slate-600/60 shadow-[0_20px_40px_rgba(0,0,0,0.9)] flex justify-center">
                {/* Display Opening Thumb Notch */}
                <div className="w-16 h-1.5 sm:h-2 rounded-b-md bg-[#0a0e16]"/>
            </div>
        </motion.div>
    );
};
