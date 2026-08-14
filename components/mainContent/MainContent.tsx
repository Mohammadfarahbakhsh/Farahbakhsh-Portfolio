import React from 'react';
import { HexagonPattern } from '../ui/hexagon-pattern';
import { HexagonPatternDemo } from '../ui/hexagon-pattern-demo';
import { PulsatingButton } from '../ui/pulsating-button';

const MainContent = () => {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-6">
                <HexagonPatternDemo />

            <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
                <h1 className="whitespace-nowrap font-mono text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {"<Mohammad-Dev/>"}
                </h1>

                <p className="max-w-md text-balance text-sm text-foreground/60 sm:text-base">
                    توسعه‌دهنده فرانت‌اند، علاقه‌مند به ساخت رابط‌های کاربری تمیز و سریع
                </p>

                <PulsatingButton className="whitespace-nowrap bg-amber-500 px-6 py-3 text-sm sm:text-base">
                    دانلود رزومه
                </PulsatingButton>
            </div>
        </div>
    );
}
 
export default MainContent;