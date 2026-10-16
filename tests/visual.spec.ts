import {expect, test} from '@playwright/test';

// Tailwind breakpoints
const breakpoints = [
    {name: 'sm', width: 640, height: 780},
    {name: 'md', width: 768, height: 1024},
    {name: 'lg', width: 1024, height: 1280},
    {name: 'xl', width: 1280, height: 1440},
    {name: '2xl', width: 1536, height: 1600},
];

test.describe('Visual screenshots @visual', () => {
    for (const theme of ['light', 'dark'] as const) {
        test.describe(`${theme} mode`, () => {
            for (const bp of breakpoints) {
                test(`screenshot at ${bp.name} (${bp.width}x${bp.height})`, async ({browser}) => {
                    // Use storageState to pre-set localStorage so React ThemeContext
                    // picks up the correct theme on mount (addInitScript does not persist)
                    const context = await browser.newContext({
                        storageState: {
                            origins: [
                                {
                                    origin: 'http://localhost:3000',
                                    localStorage: [
                                        {name: 'theme', value: theme},
                                    ],
                                },
                            ],
                        },
                    });

                    const page = await context.newPage();
                    await page.setViewportSize({width: bp.width, height: bp.height});

                    await page.goto('http://localhost:3000/');

                    // Wait for fonts to load
                    await page.evaluate(async () => {
                        if ((document as any).fonts && (document as any).fonts.ready) {
                            await (document as any).fonts.ready;
                        }
                    });

                    // Freeze JS-driven animations (setInterval/setTimeout) that CSS animation
                    // disabling in playwright.config.ts cannot handle
                    await page.evaluate(() => {
                        const maxId = 10000;
                        for (let i = 1; i < maxId; i++) {
                            clearInterval(i);
                            clearTimeout(i);
                        }
                        window.setInterval = () => -1;
                        window.setTimeout = () => -1;
                    });

                    // Wait for page to stabilize after freezing animations
                    await page.waitForTimeout(300);

                    await expect(page).toHaveScreenshot(`${theme}-${bp.name}.png`, {
                        fullPage: true,
                    });

                    await context.close();
                });
            }
        });
    }
});
