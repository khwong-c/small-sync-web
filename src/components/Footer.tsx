/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer
            className="w-full bg-surface-container-low pt-space-xl pb-space-lg border-t border-surface-container-high/60">
            <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-space-lg pb-space-xl">
                    {/* Brand Col */}
                    <div className="col-span-2 flex flex-col gap-space-sm">
                        <div className="flex items-center gap-space-lg">
                            <div
                                className="w-16 h-16 flex items-center justify-center text-on-primary text-xs">
                            </div>
                            <span
                                className="font-headline-sm text-headline-sm text-on-surface font-bold">
                                SmallSync
                            </span>
                            <span
                                className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
                                An API for adding setting sync to your application.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
