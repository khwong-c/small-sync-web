export default function ComingSoon() {
    return <section
        className="relative w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-6 md:pt-6 pb-16 flex flex-col items-center text-center">
        <div
            className="inline-flex items-center gap-space-xs px-7 py-3 rounded-full bg-primary-fixed/10 mb-space-md">
            <span className="w-2.5 h-2.5 mr-3 rounded-full bg-primary animate-ping"></span>
            <span className="font-label-lg text-label-lg text-primary uppercase tracking-widest">
                                  <b>Coming Soon</b>
            </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md pt-2">
            SmallSync is Almost Here
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl">
            We're finishing our first preview. Check back soon for the launch date.
        </p>
    </section>
}