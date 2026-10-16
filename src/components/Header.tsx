/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {useTheme} from '../context/ThemeContext';
import {SmallSyncLogoWOBG} from '../assests/index.ts'

export const Header: React.FC = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div
                className="h-20 w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
                {/* Brand & Nav */}
                <div className="flex items-center gap-space-lg">
                    <a href="#" className="flex items-center gap-space-sm group">
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center
                            font-headline-sm font-bold transition-transform">
                            <img src={SmallSyncLogoWOBG} alt="SmallSync Logo"/>
                        </div>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
                          SmallSync
                        </span>
                    </a>

                    {/*<nav className="hidden lg:flex items-center gap-space-lg">*/}
                    {/*  <a href="#" className="text-primary font-bold transition-colors">*/}
                    {/*    Overview*/}
                    {/*  </a>*/}
                    {/*  /!*<a*!/*/}
                    {/*  /!*  href="#interactive-preset-demo"*!/*/}
                    {/*  /!*  className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"*!/*/}
                    {/*  /!*>*!/*/}
                    {/*  /!*  Preset Demo*!/*/}
                    {/*  /!*</a>*!/*/}
                    {/*  <a*/}
                    {/*    href="#architecture"*/}
                    {/*    className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"*/}
                    {/*  >*/}
                    {/*    How It Works*/}
                    {/*  </a>*/}
                    {/*  <a*/}
                    {/*    href="#early-access-form"*/}
                    {/*    className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"*/}
                    {/*  >*/}
                    {/*    Early Access*/}
                    {/*  </a>*/}
                    {/*  <a*/}
                    {/*    href="#developer-sdks"*/}
                    {/*    className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors"*/}
                    {/*  >*/}
                    {/*    Developers*/}
                    {/*  </a>*/}
                    {/*</nav>*/}
                </div>

                {/* Right Action zone */}
                <div className="flex items-center gap-space-md">
                    {/*<span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge uppercase tracking-wider">*/}
                    {/*  <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5 animate-pulse"></span>*/}
                    {/*  v1.0 Early Access*/}
                    {/*</span>*/}

                    <button
                        onClick={toggleTheme}
                        className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-on-surface-variant transition-colors"
                    >
                        {theme === 'light' ? '🌙 ' : '☀️  '}
                    </button>

                    {/*<img*/}
                    {/*  alt="Profile"*/}
                    {/*  referrerPolicy="no-referrer"*/}
                    {/*  className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-fixed/40"*/}
                    {/*  src="https://lh3.googleusercontent.com/aida/AEtjO1Xoz7Nkseg6mcTrJf4l3H09dBApUVsMHgP-Pul4glK1qzqiS9t-Qb8c-4tw0Xh8DfWOJwwZkPc5zwjiW-9_0hCXgAczxLEU01XhQWrtdynrrU-VFnf7QBi_yYV64LzXFPg-MffLnn735E8crmQh4wN1Hvmib97yW8w7uVL8fP39rjHVYeHRip-PiZRrpeV26fv3JDlRMdfV6HYNd4GDzeQKQ5xZTNsLT-HU1OvLSttrSnx6UR1Nep0nSQQm"*/}
                    {/*/>*/}
                </div>
            </div>
        </header>
    );
};
