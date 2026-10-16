/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section
            className="relative w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-12 md:pt-16 pb-2 flex flex-col items-center text-center">

            {/* Hero Headline */}
            <h1 className="font-display text-display max-w-4xl tracking-tight text-on-surface mb-space-md">
                Add setting sync to your app <span className="text-primary font-bold">with one API</span>.
            </h1>

            {/* Hero Subhead */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-md">
                SmallSync lets your users keep their configs and preferences in sync across every machine they log in from.
            </p>
        </section>
    );
};
