/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {Hero} from './components/Hero';
import {ApplicationAnimation} from "@/src/components/AppliactionAnimation";
import {DeveloperSDKs} from "@/src/components/DeveloperSDKs.tsx";
import {Header} from "@/src/components/Header.tsx";
import ComingSoon from "@/src/components/ComingSoon.tsx";
import {Footer} from "@/src/components/Footer.tsx";

export default function App() {
    return (
        <div
            className="flex flex-col min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
            <Header/>
            {/* Main Content Area */}
            <main className="flex-1 w-full bg-surface pt-16">
                <div className="flex flex-col w-full">
                    <div className="relative w-full overflow-hidden">

                        {/* 1. Hero */}
                        <Hero/>

                        {/* 2. Application Animation */}
                        <section className="w-full flex justify-center pb-12" id="application-animation">
                            <ApplicationAnimation/>
                        </section>

                        {/* 3. Developer SDKs */}
                        <DeveloperSDKs/>

                        {/* 4. Coming Soon */}
                        <ComingSoon/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
