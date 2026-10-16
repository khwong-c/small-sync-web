/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {SDKLogosBar} from "./SDKLogosBar.tsx";

export const DeveloperSDKs: React.FC = () => {
    return (
        <section className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-4 scroll-mt-20"
                 id="developer-sdks">
            <div className="flex flex-col items-center text-center mb-space-xl">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">
                    Developer SDKs
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Integrate SmallSync into your projects with our SDKs for TypeScript, JavaScript, React, and Python. More languages are coming soon.
                    An OpenAPI Spec is also available for custom integrations.
                </p>
            </div>
            <SDKLogosBar />
        </section>
    );
};
