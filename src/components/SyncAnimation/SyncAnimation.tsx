/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import './SyncAnimation.css';

// ============================================================
// REUSABLE SVG COMPONENTS
// ============================================================

const ToggleSwitch: React.FC<{ trackClass: string; knobClass: string }> = ({trackClass, knobClass}) => (
    <g>
        <rect className={trackClass} height={20} rx={10} width={36} x={100} y={17}/>
        <circle className={knobClass} cx={109} cy={27} r={7}/>
    </g>
);

const DataPacketUpdate = () => (
    <g>
        <rect fill="#0f172a" filter="url(#cardShadow)" height={26} rx={13} stroke="#38bdf8" strokeWidth={1.8} width={80}
              x={-40} y={-13}/>
        <circle cx={-26} cy={0} fill="#38bdf8" r={3.5}/>
        <text className="mono" fill="#ffffff" fontSize={9} fontWeight={700} textAnchor="middle" x={6} y={3.5}>
            UPDATE
        </text>
    </g>
);

const DataPacketNotify = () => (
    <g>
        <rect fill="#ea580c" filter="url(#cardShadow)" height={26} rx={13} stroke="#ffffff" strokeWidth={2} width={86}
              x={-43} y={-13}/>
        <circle cx={-28} cy={0} fill="#ffffff" r={3.5}/>
        <text className="mono" fill="#ffffff" fontSize={9} fontWeight={700} textAnchor="middle" x={6} y={3.5}>
            NOTIFY 🔔
        </text>
    </g>
);

const DataPacketGet = () => (
    <g>
        <rect fill="#0284c7" filter="url(#cardShadow)" height={26} rx={13} stroke="#e0f2fe" strokeWidth={1.8} width={82}
              x={-41} y={-13}/>
        <text className="mono" fill="#ffffff" fontSize={9} fontWeight={700} textAnchor="middle" x={0} y={3.5}>
            GET /prefs
        </text>
    </g>
);

const DataPacketSettings = () => (
    <g>
        <rect fill="#10b981" filter="url(#cardShadow)" height={26} rx={13} stroke="#a7f3d0" strokeWidth={1.8} width={86}
              x={-43} y={-13}/>
        <text className="mono" fill="#ffffff" fontSize={9} fontWeight={700} textAnchor="middle" x={0} y={3.5}>
            SETTINGS
        </text>
    </g>
);

const CommLane: React.FC<{ x: number; y: number }> = ({x, y}) => (
    <g transform={`translate(${x}, ${y})`}>
        <path d="M 0 0 L 190 0" stroke="var(--sync-lane-bg)" strokeLinecap="round" strokeWidth={3}/>
        <path className="lane-pulse" d="M 0 0 L 190 0" opacity={0.8} stroke="var(--sync-lane-pulse)"
              strokeLinecap="round" strokeWidth={3}/>
    </g>
);

const ServerMonomark = () => (
    <g>
        <circle cx={0} cy={0} fill="url(#cyanGrad)" r={16}/>
        <path d="M -6 -3.5 C -6 -8, 6 -8, 6 -3.5" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth={2.2}/>
        <path d="M 6 3.5 C 6 8, -6 8, -6 3.5" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth={2.2}/>
        <circle cx={0} cy={0} fill="#ffffff" r={2.2}/>
    </g>
);

const WindowControls = () => (
    <g>
        <circle cx={4} cy={4} fill="#ef4444" opacity={0.8} r={3.5}/>
        <circle cx={15} cy={4} fill="#f59e0b" opacity={0.8} r={3.5}/>
        <circle cx={26} cy={4} fill="#10b981" opacity={0.8} r={3.5}/>
    </g>
);

const StepArrow: React.FC<{ x: number; y: number }> = ({x, y}) => (
    <g transform={`translate(${x}, ${y})`}>
        <path d="M 0 22 L 9 22" stroke="var(--sync-step-arrow)" strokeLinecap="round" strokeWidth={2}/>
    </g>
);

interface StepCardProps {
    x: number;
    number: string;
    label: string;
    color: string;
    glowClass: string;
}

const StepCard: React.FC<StepCardProps> = ({x, number, label, color, glowClass}) => (
    <g className={glowClass} transform={`translate(${x}, 36)`}>
        <rect fill="var(--sync-step-bg)" height={44} rx={10} stroke={color} strokeWidth={1.5} width={122}/>
        <circle cx={20} cy={22} fill={color} r={9}/>
        <text fill="var(--sync-step-text-on-color)" fontSize={10.5} fontWeight={700} textAnchor="middle" x={20} y={26}>
            {number}
        </text>
        <text fill="var(--sync-step-text)" fontSize={11} fontWeight={700} x={36} y={26}>
            {label}
        </text>
    </g>
);

// ============================================================
// MAIN COMPONENT
// ============================================================

export const SyncAnimation = () => {
    return (
        <div className="sync-animation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 520" width="100%" height="100%" className="sync-svg">
                <defs>
                    {/* Background styling & gradients */}
                    <linearGradient id="bgGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--sync-bg-start)"/>
                        <stop offset="100%" stopColor="var(--sync-bg-end)"/>
                    </linearGradient>

                    {/* Primary Cyan Gradient */}
                    <linearGradient id="cyanGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8"/>
                        <stop offset="100%" stopColor="#0284c7"/>
                    </linearGradient>

                    {/* Deep Slate Navy Gradient */}
                    <linearGradient id="slateGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b"/>
                        <stop offset="100%" stopColor="#0f172a"/>
                    </linearGradient>

                    {/* Warm Amber / Coral Tertiary Gradient */}
                    <linearGradient id="coralGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#fb923c"/>
                        <stop offset="100%" stopColor="#ea580c"/>
                    </linearGradient>

                    {/* Elevation drop shadow */}
                    <filter height="125%" id="cardShadow" width="125%" x="-10%" y="-10%">
                        <feDropShadow dx={0} dy={8} floodColor="var(--sync-shadow-flood)" floodOpacity={0.08}
                                      stdDeviation={12}/>
                        <feDropShadow dx={0} dy={2} floodColor="var(--sync-shadow-blue-flood)" floodOpacity={0.06}
                                      stdDeviation={4}/>
                    </filter>

                    <filter height="140%" id="serverGlow" width="140%" x="-20%" y="-20%">
                        <feDropShadow dx={0} dy={8} floodColor="var(--sync-server-glow-flood)" floodOpacity={0.14}
                                      stdDeviation={14}/>
                    </filter>

                    {/* Dot grid pattern for architecture canvas */}
                    <pattern height={24} id="dotGrid" patternUnits="userSpaceOnUse" width={24}>
                        <circle cx={2} cy={2} fill="var(--sync-dot-fill)" fillOpacity={0.22} r={1.2}/>
                    </pattern>
                </defs>

                {/* ============================================================
            BACKGROUND
            ============================================================ */}
                <rect fill="url(#bgGrad)" height={520} rx={28} width={960}/>
                <rect fill="none" height={518} rx={27} stroke="var(--sync-bg-border)" strokeWidth={1.5} width={958}
                      x={1} y={1}/>
                <rect fill="url(#dotGrid)" height={520} width={960}/>

                {/* ============================================================
            TOP HEADER BAR
            ============================================================ */}
                <g id="headerSection" transform="translate(40, 24)">
                    <rect fill="var(--sync-header-bg)" filter="url(#cardShadow)" height={48} rx={14}
                          stroke="var(--sync-header-border)" strokeWidth={1} width={880}/>
                    {/* Protocol Badge */}
                    <rect fill="var(--sync-badge-bg)" height={28} rx={8} stroke="var(--sync-badge-border)"
                          strokeWidth={1} width={132} x={14} y={10}/>
                    <circle cx={26} cy={24} fill="var(--sync-badge-dot)" r={4}/>
                    <text fill="var(--sync-badge-text)" fontSize={11} fontWeight={700} letterSpacing={0.5} x={36}
                          y={28}>
                        UNDER THE HOOD
                    </text>
                    {/* Architecture Title */}
                    <text fill="var(--sync-title-text)" fontSize={13} fontWeight={600} x={160} y={29}>
                        SmallSync Event-Driven Delta Protocol
                    </text>
                    {/* Live Cycle Indicator */}
                    <g transform="translate(680, 10)">
                        <rect fill="var(--sync-live-bg)" height={28} rx={8} stroke="var(--sync-live-border)"
                              strokeWidth={1} width={186}/>
                        <circle className="server-activity-led" cx={16} cy={14} r={5}/>
                        <text className="mono" fill="var(--sync-live-text)" fontSize={11} fontWeight={600} x={30}
                              y={18}>
                            Live State Sync
                        </text>
                    </g>
                </g>

                {/* ============================================================
            COMMUNICATION LANES
            ============================================================ */}
                <g id="singleLanes">
                    <CommLane x={250} y={220}/>
                    <CommLane x={520} y={220}/>
                </g>

                {/* ============================================================
            DEVICE 1: MACBOOK PRO (LEFT)
            ============================================================ */}
                <g filter="url(#cardShadow)" id="deviceMacBook" transform="translate(65, 95)">
                    {/* Container Card (Slate gradient) */}
                    <rect fill="url(#slateGrad)" height={255} rx={24} width={185}/>
                    <rect fill="none" height="253" rx="23" stroke="#334155" strokeWidth="1.5" width="183" x="1" y="1"/>

                    {/* Hardware Header */}
                    <g transform="translate(18, 18)">
                        <WindowControls/>
                        <text fill="#94a3b8" fontSize={10} fontWeight={700} letterSpacing={0.3} x={40} y={8}>
                            MACBOOK PRO
                        </text>
                    </g>

                    {/* Role Badge */}
                    <rect fill="#0284c7" fillOpacity={0.25} height={20} rx={6} stroke="#38bdf8" strokeWidth={1}
                          width={96} x={18} y={40}/>
                    <circle cx={28} cy={50} fill="#38bdf8" r={3}/>
                    <text fill="#38bdf8" fontSize={9} fontWeight={700} x={36} y={54}>
                        WORKSTATION
                    </text>

                    {/* Binary Toggle 1: Dark Glass */}
                    <g transform="translate(18, 76)">
                        <rect fill="#1e293b" height={54} rx={12} stroke="#334155" strokeWidth={1} width={149}/>
                        <text fill="#f8fafc" fontSize={11} fontWeight={600} x={12} y={24}>
                            Dark Glass
                        </text>
                        <text fill="#94a3b8" fontSize={9} x={12} y={40}>
                            Workspace UI
                        </text>
                        <ToggleSwitch trackClass="mac-dark-glass-track" knobClass="mac-dark-glass-knob"/>
                    </g>

                    {/* Binary Toggle 2: Night Mode */}
                    <g transform="translate(18, 142)">
                        <rect fill="#1e293b" height={54} rx={12} stroke="#334155" strokeWidth={1} width={149}/>
                        <text fill="#f8fafc" fontSize={11} fontWeight={600} x={12} y={24}>
                            Night Mode
                        </text>
                        <text fill="#94a3b8" fontSize={9} x={12} y={40}>
                            Warm Spectrum
                        </text>
                        <ToggleSwitch trackClass="mac-night-mode-track" knobClass="mac-night-mode-knob"/>
                    </g>

                    {/* Synchronized Badge */}
                    <g className="mac-sync-badge" transform="translate(20, 215)">
                        <rect fill="#10b981" fillOpacity={0.2} height={22} rx={6} stroke="#10b981" strokeWidth={1}
                              width={145}/>
                        <text fill="#34d399" fontSize={9.5} fontWeight={700} textAnchor="middle" x={72} y={15}>
                            ✓ UPDATED FROM IPAD
                        </text>
                    </g>
                </g>

                {/* ============================================================
            CENTRAL COMPONENT: SMALLSYNC SERVER
            ============================================================ */}
                <g filter="url(#serverGlow)" id="centralServer" transform="translate(440, 145)">
                    {/* Expanding Ping Ripple */}
                    <circle className="server-ripple" cx="40" cy="75" fill="none" r="55"
                            stroke="var(--sync-server-ripple)" strokeWidth="2"/>

                    {/* Compact Server Outer Housing */}
                    <rect fill="var(--sync-server-housing-fill)" height={150} rx={16}
                          stroke="var(--sync-server-housing-stroke)" strokeWidth={2} width={80}/>
                    <rect fill="var(--sync-server-inner-fill)" height="142" rx="12" width="72" x="4" y="4"/>

                    {/* SmallSync Monomark */}
                    <g transform="translate(40, 36)">
                        <ServerMonomark/>
                    </g>

                    {/* Brand Name */}
                    <text fill="var(--sync-server-brand-text)" fontSize={11} fontWeight={800} letterSpacing={0.3}
                          textAnchor="middle" x={40} y={68}>
                        SmallSync
                    </text>

                    {/* Clean Minimalist Activity Indicator */}
                    <g transform="translate(14, 82)">
                        <rect fill="var(--sync-server-panel-fill)" height={48} rx={8}
                              stroke="var(--sync-server-panel-stroke)" strokeWidth={1} width={52}/>
                        {/* Server Activity Status LED */}
                        <circle className="server-activity-led" cx={26} cy={18} r={4.5}/>
                        <text className="mono" fill="var(--sync-server-hub-text)" fontSize={8} fontWeight={700}
                              textAnchor="middle" x={26} y={36}>
                            SYNC HUB
                        </text>
                    </g>
                </g>

                {/* ============================================================
            DEVICE 2: IPAD PRO (RIGHT)
            ============================================================ */}
                <g filter="url(#cardShadow)" id="deviceIPad" transform="translate(710, 95)">
                    {/* Container Card (Primary Cyan Gradient) */}
                    <rect fill="url(#cyanGrad)" height={255} rx={24} width={185}/>
                    <rect fill="none" height="253" rx="23" stroke="#bae6fd" strokeWidth="1.5" width="183" x="1" y="1"/>

                    {/* Hardware Header */}
                    <g transform="translate(18, 18)">
                        <circle cx={4} cy={4} fill="#ffffff" opacity={0.75} r={3.5}/>
                        <text fill="#ffffff" fontSize={10} fontWeight={700} letterSpacing={0.3} x={18} y={8}>
                            IPAD PRO 13"
                        </text>
                    </g>

                    {/* Role Badge */}
                    <rect fill="#ffffff" fillOpacity={0.2} height={20} rx={6} stroke="#ffffff" strokeWidth={1}
                          width={96} x={18} y={40}/>
                    <circle cx={28} cy={50} fill="#ffffff" r={3}/>
                    <text fill="#ffffff" fontSize={9} fontWeight={700} x={36} y={54}>
                        REMOTE CLIENT
                    </text>

                    {/* Binary Toggle 1: Dark Glass */}
                    <g transform="translate(18, 76)">
                        <rect fill="#ffffff" fillOpacity={0.18} height={54} rx={12} stroke="#ffffff"
                              strokeOpacity={0.35} strokeWidth={1} width={149}/>
                        <text fill="#ffffff" fontSize={11} fontWeight={600} x={12} y={24}>
                            Dark Glass
                        </text>
                        <text fill="#e0f2fe" fontSize={9} x={12} y={40}>
                            Workspace UI
                        </text>
                        <ToggleSwitch trackClass="pad-dark-glass-track" knobClass="pad-dark-glass-knob"/>
                    </g>

                    {/* Binary Toggle 2: Night Mode */}
                    <g transform="translate(18, 142)">
                        <rect fill="#ffffff" fillOpacity={0.18} height={54} rx={12} stroke="#ffffff"
                              strokeOpacity={0.35} strokeWidth={1} width={149}/>
                        <text fill="#ffffff" fontSize={11} fontWeight={600} x={12} y={24}>
                            Night Mode
                        </text>
                        <text fill="#e0f2fe" fontSize={9} x={12} y={40}>
                            Warm Spectrum
                        </text>
                        <ToggleSwitch trackClass="pad-night-mode-track" knobClass="pad-night-mode-knob"/>
                    </g>

                    {/* Synchronized Badge */}
                    <g className="pad-sync-badge" transform="translate(20, 215)">
                        <rect fill="#ffffff" height={22} rx={6} stroke="#ffffff" strokeWidth={1} width={145}/>
                        <text fill="#0284c7" fontSize={9.5} fontWeight={700} textAnchor="middle" x={72} y={15}>
                            ✓ SYNCHRONIZED
                        </text>
                    </g>
                </g>

                {/* ============================================================
            ANIMATED FLYING DATA PACKETS
            ============================================================ */}
                {/* Phase A - Packet 1: MacBook -> Server (UPDATE) */}
                <g className="pkt-mac-update">
                    <DataPacketUpdate/>
                </g>

                {/* Phase A - Packet 2: Server -> iPad (NOTIFY) */}
                <g className="pkt-server-notify-pad">
                    <DataPacketNotify/>
                </g>

                {/* Phase A - Packet 3: iPad -> Server (GET /prefs) */}
                <g className="pkt-pad-fetch">
                    <DataPacketGet/>
                </g>

                {/* Phase A - Packet 3b: Server -> iPad (DELTA 200) */}
                <g className="pkt-server-payload-pad">
                    <DataPacketSettings/>
                </g>

                {/* Phase B - Packet 4: iPad -> Server (UPDATE) */}
                <g className="pkt-pad-update">
                    <DataPacketUpdate/>
                </g>

                {/* Phase B - Packet 5: Server -> MacBook (NOTIFY) */}
                <g className="pkt-server-notify-mac">
                    <DataPacketNotify/>
                </g>

                {/* Phase B - Packet 6: MacBook -> Server (GET /prefs) */}
                <g className="pkt-mac-fetch">
                    <DataPacketGet/>
                </g>

                {/* Phase B - Packet 6b: Server -> MacBook (DELTA 200) */}
                <g className="pkt-server-payload-mac">
                    <DataPacketSettings/>
                </g>

                {/* ============================================================
            BOTTOM TIMELINE EXPLORER
            ============================================================ */}
                <g id="stepTimeline" transform="translate(40, 395)">
                    <rect fill="var(--sync-timeline-bg)" filter="url(#cardShadow)" height={95} rx={18}
                          stroke="var(--sync-timeline-border)" strokeWidth={1.5} width={880}/>
                    <text fill="var(--sync-timeline-label)" fontSize={11} fontWeight={700} letterSpacing={0.5} x={24}
                          y={24}>
                        BI-DIRECTIONAL SYNC LIFECYCLE
                    </text>

                    {/* Step 1 (MacBook Update) */}
                    <StepCard x={24} number="1" label="MacBook Edits" color="#0ea5e9" glowClass="step-1-glow"/>

                    {/* Step Arrow 1->2 */}
                    <StepArrow x={151} y={36}/>

                    {/* Step 2 (Server Notify) */}
                    <StepCard x={165} number="2" label="Server Notifies" color="#ea580c" glowClass="step-2-glow"/>

                    {/* Step Arrow 2->3 */}
                    <StepArrow x={292} y={36}/>

                    {/* Step 3 (iPad Fetch & Sync) */}
                    <StepCard x={306} number="3" label="iPad Fetches" color="#10b981" glowClass="step-3-glow"/>

                    {/* Central Loop Pivot Indicator */}
                    <g transform="translate(433, 44)">
                        <circle cx={14} cy={14} fill="var(--sync-loop-bg)" r={13} stroke="var(--sync-loop-border)"
                                strokeWidth={1.5}/>
                        <path d="M 9 10 L 19 10 M 15 6 L 19 10 L 15 14" fill="none" stroke="var(--sync-loop-arrow-1)"
                              strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
                        <path d="M 19 18 L 9 18 M 13 22 L 9 18 L 13 14" fill="none" stroke="var(--sync-loop-arrow-2)"
                              strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/>
                    </g>

                    {/* Step 4 (iPad Edits) */}
                    <StepCard x={467} number="4" label="iPad Edits" color="#0ea5e9" glowClass="step-4-glow"/>

                    {/* Step Arrow 4->5 */}
                    <StepArrow x={594} y={36}/>

                    {/* Step 5 (Server Alerts Mac) */}
                    <StepCard x={608} number="5" label="Server Notifies" color="#ea580c" glowClass="step-5-glow"/>

                    {/* Step Arrow 5->6 */}
                    <StepArrow x={735} y={36}/>

                    {/* Step 6 (Mac Fetches & Syncs) */}
                    <StepCard x={749} number="6" label="Mac Fetches" color="#10b981" glowClass="step-6-glow"/>
                </g>
            </svg>
        </div>
    );
};
