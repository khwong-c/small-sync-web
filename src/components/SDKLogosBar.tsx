/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {JSLogo, OpenAPILogo, PythonLogo, ReactLogoLight, ReactLogo, TSLogo} from '../assests';
import {useTheme} from '../context/ThemeContext';

const sdkLogos = [
    {name: 'TypeScript', src: TSLogo},
    {name: 'JavaScript', src: JSLogo},
    {name: 'React', src: ReactLogoLight, srcDark: ReactLogo},
    {name: 'Python', src: PythonLogo, pill: 'Working on'},
    {name: 'OpenAPI Spec', src: OpenAPILogo},
];

export const SDKLogosBar: React.FC = () => {
    const {theme} = useTheme();

    return (
        <div className="flex flex-wrap items-center justify-center gap-space-lg md:gap-space-xl py-4">
            {sdkLogos.map((sdk) => (
                <div key={sdk.name} className="relative flex items-center justify-center">
                    <img
                        src={theme === 'dark' ? (sdk.srcDark ?? sdk.src) : sdk.src}
                        alt={`${sdk.name} logo`}
                        className="h-15 w-auto md:h-20 object-contain"
                    />
                    {sdk.pill && (
                        <span
                            className="absolute -right-8 bottom-1 px-2 py-1.5 rounded-full bg-primary-container text-on-primary-container font-label-badge text-[12px] leading-none uppercase whitespace-nowrap">
              <b>{sdk.pill}</b>
            </span>
                    )}
                </div>
            ))}
        </div>
    );
};
