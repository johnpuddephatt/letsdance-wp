<footer class="container border-t container--wide">
  <div
    class="my-12 font-serif text-2xl antialiased leading-snug text-center text-gray-700 lg:my-16 lg:leading-snug lg:text-4xl">
    Sound
    good?<br>
    <a href="/contact/" class="underline text-blue underline-thin">Let’s
      Dance</a>
  </div>
  <div class="flex items-center justify-between h-12 lg:h-20">
    @if($withBackToProjects ?? false)
    <a class="antialiased font-semibold text-gray-500 no-underline lowercase lg:text-base" href="/projects/"><span
        class=" font-system">&larr;</span> See all projects</a>
    @else
    <a class="text-gray-500 no-underline lowercase lg:text-base" href="/"><span class=" font-system">&larr;</span>
      Back to home</a>
    @endif

    <div class="ml-auto text-right">
      <a class="inline-block w-8 h-8 transition transform rounded-full lg:w-12 lg:h-12 hover:rotate-90 hard-gradient bg-gradient-to-tr from-blue to-cyan "
        aria-label="Back to home" href="/"></a>
    </div>
  </div>

</footer>