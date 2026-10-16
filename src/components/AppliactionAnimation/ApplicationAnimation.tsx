/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { LaptopDevice } from './LaptopDevice';
import { PhoneDevice } from './PhoneDevice';
import {useTheme} from "@/src/context/ThemeContext.tsx";
type ThemeMode = 'dark' | 'light';

interface TaskItem {
  id: string;
  label: string;
  completed: boolean;
}

const INITIAL_TASKS: TaskItem[] = [
  { id: 'task-1', label: 'WebSocket delta transport protocol', completed: true },
  { id: 'task-2', label: 'Instant optimistic UI render engine', completed: false },
  { id: 'task-3', label: 'Cross-client cryptographic handshake', completed: false },
];

export const ApplicationAnimation: React.FC = () => {
  // Master state
  const latencyMs = 400;
  const changeInterval = 1100;

  const {theme: initTheme } = useTheme();

  const [theme, setTheme] = useState<ThemeMode>(initTheme);
  const [laptopTheme, setLaptopTheme] = useState<ThemeMode>(initTheme);
  const [phoneTheme, setPhoneTheme] = useState<ThemeMode>(initTheme);

  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS);
  const [phoneTasks, setPhoneTasks] = useState<TaskItem[]>(INITIAL_TASKS);

  const [isPhoneSyncing, setIsPhoneSyncing] = useState<boolean>(false);

  const autoCycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const syncTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationStepRef = useRef<number>(0); // 0: theme change, 1: first task, 2: second task

  // Refs to access current state inside setInterval callback (avoids stale closures)
  const tasksRef = useRef(tasks);
  const phoneTasksRef = useRef(phoneTasks);
  const laptopThemeRef = useRef(laptopTheme);

  tasksRef.current = tasks;
  phoneTasksRef.current = phoneTasks;
  laptopThemeRef.current = laptopTheme;


  // Synchronized theme toggle trigger
  const handleToggleTheme = (targetTheme?: ThemeMode) => {
    const nextTheme: ThemeMode =
      targetTheme !== undefined
        ? targetTheme
        : laptopThemeRef.current === 'dark'
        ? 'light'
        : 'dark';

    setTheme(nextTheme);

    // Step 1: Laptop updates immediately (optimistic UI)
    setLaptopTheme(nextTheme);

    // Step 2: Phone enters syncing state
    setIsPhoneSyncing(true);

    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    // Step 3: Phone receives mirrored payload after propagation latency
    syncTimeoutRef.current = setTimeout(() => {
      setPhoneTheme(nextTheme);
      setIsPhoneSyncing(false);
    }, latencyMs);
  };

  // Toggle checklist tasks across devices
  const handleToggleTask = (taskId: string, source: 'laptop' | 'phone') => {
    const targetTask = source === 'laptop' 
      ? tasks.find((t) => t.id === taskId)
      : phoneTasks.find((t) => t.id === taskId);
    if (!targetTask) return;

    const nextCompleted = !targetTask.completed;

    if (source === 'laptop') {
      // Laptop updates instantly
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, completed: nextCompleted } : task
        )
      );

      // Phone sync indicator pulses and receives update after latency
      setIsPhoneSyncing(true);
      setTimeout(() => {
        setPhoneTasks((prev) =>
          prev.map((task) =>
            task.id === taskId ? { ...task, completed: nextCompleted } : task
          )
        );
        setIsPhoneSyncing(false);
      }, latencyMs);
    } else {
      // Phone toggles task instantly
      setPhoneTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, completed: nextCompleted } : task
        )
      );

      // Laptop receives update after latency
      setTimeout(() => {
        setTasks((prev) =>
          prev.map((task) =>
            task.id === taskId ? { ...task, completed: nextCompleted } : task
          )
        );
      }, latencyMs);
    }
  };


  // Auto-cycle effect with multi-step animation loop
  // Step 0: Change theme
  // Step 1: Toggle random task
  // Step 2: Toggle another random task
  // Then repeat from step 0
  useEffect(() => {
    // Reset animation step when auto-cycling starts
    animationStepRef.current = 0;
    autoCycleTimerRef.current = setInterval(() => {
      const step = animationStepRef.current;

      if (step === 0) {
        // Step 0: Change theme
        const currentTheme = laptopThemeRef.current;
        const next: ThemeMode = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        setLaptopTheme(next);
        laptopThemeRef.current = next;

        setIsPhoneSyncing(true);
        setTimeout(() => {
          setPhoneTheme(next);
          setIsPhoneSyncing(false);
        }, latencyMs);
      } else if (step === 1 || step === 2) {
        // Step 1 & 2: Toggle random task
        const currentTasks = tasksRef.current;
        if (currentTasks.length === 0) {
          animationStepRef.current = (step + 1) % 3;
          return;
        }

        const randomIndex = Math.floor(Math.random() * currentTasks.length);
        const taskId = currentTasks[randomIndex].id;
        const targetTask = currentTasks.find((t) => t.id === taskId);
        if (!targetTask) {
          animationStepRef.current = (step + 1) % 3;
          return;
        }

        const nextCompleted = !targetTask.completed;

        // Laptop updates instantly
        setTasks((prev) =>
          prev.map((task) =>
            task.id === taskId ? { ...task, completed: nextCompleted } : task
          )
        );

        // Phone sync indicator pulses and receives update after latency
        setIsPhoneSyncing(true);
        setTimeout(() => {
          setPhoneTasks((prev) =>
            prev.map((task) =>
              task.id === taskId ? { ...task, completed: nextCompleted } : task
            )
          );
          setIsPhoneSyncing(false);
        }, latencyMs);
      }

      // Advance to next step (cycle: 0 -> 1 -> 2 -> 0 -> ...)
      animationStepRef.current = (step + 1) % 3;
    }, changeInterval);

    return () => {
      if (autoCycleTimerRef.current) clearInterval(autoCycleTimerRef.current);
    };
  }, [latencyMs]);



  return (
    <div className="relative w-full flex flex-col items-center justify-center pt-2 pb-4 px-8 sm:px-8" data-theme={theme}>
      {/* Background Halftone Grid */}
      <div className="fixed inset-0 pointer-events-none halftone-grid opacity-70 z-0" />

      {/* Main Visual Stage: Laptop behind, Phone in front */}
      <main className="relative z-10 w-full max-w-5xl mx-auto flex items-center justify-center min-h-[500px] sm:min-h-[580px] md:min-h-[640px]">
        {/* Laptop Device Component */}
        <LaptopDevice
          theme={laptopTheme}
          onToggleTheme={handleToggleTheme}
          tasks={tasks}
          onToggleTask={handleToggleTask}
        />

        {/* Smartphone Device Component (Overlapping Lower-Right) */}
        <PhoneDevice
          theme={phoneTheme}
          tasks={phoneTasks}
          onToggleTask={handleToggleTask}
          isSyncing={isPhoneSyncing}
        />
      </main>
    </div>
  );
};
