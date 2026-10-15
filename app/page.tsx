const articleImages = {
  cover: "/images/images5.jpeg",
  preparation: "/images/images2.jpeg",
  competition: "/images/images3.jpeg",
  students: "/images/images6.jpeg",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
          <a
            href="#top"
            className="text-xs sm:text-sm font-bold tracking-widest text-white no-underline"
          >
            THE OBSERVER
          </a>

          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
            Style · Culture
          </span>
        </div>
      </nav>

      <article
        id="top"
        className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-20"
      >
        {/* Article header */}
        <header>
          <p className="mb-4 sm:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Fashion &amp; Sustainability
          </p>

          <h1 className="max-w-3xl text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Fashion and the Future of Thrifting
          </h1>

          <p className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-400">
            Millions of young consumers are moving away from fast fashion in
            search of unique vintage pieces. How is second-hand shopping reshaping
            the global fashion industry?
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-white/10 py-4 sm:py-5 text-xs sm:text-sm text-gray-500">
            <span>By Harsh Chouhan</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-10-15">October 15, 2026</time>
            <span aria-hidden="true">·</span>
            <span className="shrink-0">8 min read</span>
          </div>
        </header>

        {/* Featured image */}
        <figure className="my-8 sm:my-14">
          <img
            src={articleImages.cover}
            alt="The rise of vintage clothing and sustainable thrifting"
            className="aspect-[16/9] w-full rounded-xl object-cover"
          />

          <figcaption className="mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-500">
            Behind every vintage rack is a personal story of individuality,
            sustainability, and conscious style choices.
          </figcaption>
        </figure>

        {/* Article body */}
        <div className="mx-auto max-w-3xl space-y-6 sm:space-y-7 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
          <p>
            Every day, across digital platforms, flea markets, and pop-up stores,
            a quiet revolution is taking place in fashion. Young enthusiasts gather
            to browse through pre-loved garments, searching for distinctive leather
            jackets, rare denim, and retro silhouettes that stand out from mass-produced trends.
          </p>

          <p>
            For many, thrift shopping is no longer just a budget-friendly option.
            It is an intentional statement against the environmental footprint of fast
            fashion, offering an opportunity to curate an authentic wardrobe.
            Yet, as the second-hand market grows exponentially, a crucial question arises:
            what does this shift mean for the future of personal style and sustainability?
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            1. The Appeal of Conscious Consumption
          </h2>

          <p>
            Unique aesthetic value, circular lifecycle principles, and reduced ecological impact
            make vintage clothing increasingly attractive to consumers seeking alternatives to
            overproduction. For fashion-conscious individuals, second-hand garments offer
            durability and craftsmanship that are hard to find in modern retail stores.
          </p>

          <p>
            Thrifting allows buyers to experiment with personal identity, support local circular economies,
            and reduce textile waste. The motivation extends beyond mere aesthetics;
            for a growing generation of shoppers, sustainable fashion has become a practical lifestyle choice.
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            2. The Digital Thrift Revolution
          </h2>

          <figure className="my-8 sm:my-10">
            <img
              src={articleImages.preparation}
              alt="Curated vintage garments and second-hand styling items"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-xs sm:text-sm text-gray-500">
              Curating pre-loved fashion has become an art form and a thriving digital movement.
            </figcaption>
          </figure>

          <p>
            The rise of online peer-to-peer marketplaces and social commerce has transformed thrift culture.
            What once required hours of sifting through physical racks in crowded flea markets can now
            be accessed with a few clicks on a smartphone screen.
          </p>

          <p>
            However, digital growth brings new challenges. Independent sellers navigate rising price tags,
            shipping costs, changing consumer demands, and the risk that commercialization
            might push second-hand fashion out of reach for lower-income shoppers.
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            3. Gentrification of Second-Hand Markets
          </h2>

          <figure className="my-8 sm:my-10">
            <img
              src={articleImages.competition}
              alt="Vintage clothing racks in a boutique thrift store"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-xs sm:text-sm text-gray-500">
              High demand for rare vintage pieces creates competitive pricing in pre-loved markets.
            </figcaption>
          </figure>

          <p>
            The mainstream popularity of thrifting has shifted its reputation from a necessity to a trend.
            While increased awareness reduces garment waste, it has also led to inflated prices
            in boutique vintage shops and online platforms.
          </p>

          <p>
            When vintage curation turns into high-margin reselling, communities that historically relied
            on affordable thrift stores may find themselves priced out. Navigating this balance requires
            mindful purchasing habits and support for equitable re-use initiatives.
          </p>

          <blockquote className="my-8 sm:my-12 border-l-2 border-blue-400 pl-4 sm:pl-6 text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-white">
            The pursuit of personal style should not come at the expense of our planet, nor should sustainable choices become an exclusive luxury.
          </blockquote>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            4. Building a Circular Future
          </h2>

          <figure className="my-8 sm:my-10">
            <img
              src={articleImages.students}
              alt="Young designers upcycling textiles and vintage fabrics"
              loading="lazy"
              className="aspect-[16/9] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-3 text-xs sm:text-sm text-gray-500">
              Upcycling and creative alterations open new pathways for circular style.
            </figcaption>
          </figure>

          <p>
            Thrifting is one component of a broader movement toward circular fashion.
            True sustainability encompasses garment repairs, textile recycling, clothing swaps,
            and upcycling old fabrics into fresh designs.
          </p>

          <p>
            A healthier fashion ecosystem makes room for creative expression alongside environmental responsibility.
            Local tailors, independent upcyclers, clothing rental services, and conscious brands
            all contribute to extending the lifecycle of our wardrobes.
          </p>

          <p>
            Accessible repair workshops, transparent supply chains, community swapping events,
            and responsible retail options empower people to make wardrobe decisions based on longevity
            rather than temporary fast-fashion cycles.
          </p>

          <h2 className="pt-6 sm:pt-8 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
            Conclusion: Beyond the Trend
          </h2>

          <p>
            The growing popularity of thrifting reflects significant shifts in global culture:
            a desire for individuality, greater awareness of environmental impact, and a re-evaluation
            of how we assign value to clothing.
          </p>

          <p>
            We can appreciate this movement without ignoring the complexities of market commercialization.
            Conscious consumers are demonstrating that style is not defined by brand-new inventory.
          </p>

          <p>
            Ultimately, the future of fashion lies not in endless mass production, but in building an industry
            where creativity, history, and sustainability coexist in every wardrobe.
          </p>
        </div>

        {/* Article ending */}
        <footer className="mt-12 sm:mt-16 border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500">
            End of article
          </p>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-400">
            Written by Harsh Chouhan · Exploring style, sustainability, and fashion culture.
          </p>

          <a
            href="#top"
            className="mt-5 sm:mt-6 inline-block text-xs sm:text-sm font-medium text-blue-400 no-underline hover:text-blue-300"
          >
            Back to top ↑
          </a>
        </footer>
      </article>
    </main>
  );
}