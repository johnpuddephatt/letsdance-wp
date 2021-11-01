<section
    class="absolute inset-0 z-50 flex items-center justify-center transition-transform transform -translate-y-full bg-pink"
    :class="$store.siteLoading ? 'translate-y-0 delay-500 duration-1000 animate-rotate-hue' : 'duration-500 delay-200'">

    <div class="text-5xl px-8 md:text-4xl font-bold !leading-tight text-center text-white !-translate-y-96 transform transition lg:text-5xl xl:text-6xl"
        :class="$store.siteLoading ? '!translate-y-0 delay-700 duration-700' : 'duration-500 opacity-0 delay-0'">
        we help good people<br class="portrait:hidden" /> say good things
    </div>
</section>
<div class="fixed inset-0 z-40 bg-white" :class="$store.siteLoading || 'hidden'"></div>