import type { Metadata } from "next";
import Link from "next/link";
import {
  generateArticleSchema,
  generateFaqSchema,
  generateBreadcrumbSchema,
  renderJsonLd,
} from "@/lib/schema";

const BASE_URL = "https://mplswithlove.com";

export const metadata: Metadata = {
  title: "Moving to Minneapolis: The Complete Relocation Guide (2026)",
  description:
    "Everything you need to know before moving to Minneapolis — neighborhoods, cost of living, weather, schools, jobs, transit, and what no one tells you until you get here.",
  openGraph: {
    title: "Moving to Minneapolis: The Complete Relocation Guide (2026)",
    description:
      "Everything you need to know before moving to Minneapolis — neighborhoods, cost of living, weather, schools, and what no one tells you until you get here.",
    url: `${BASE_URL}/guides/moving-to-minneapolis`,
    type: "article",
  },
};

const faq = [
  {
    question: "Is Minneapolis a good place to live?",
    answer:
      "Yes — Minneapolis consistently ranks among the most livable cities in the U.S. for its parks system (ranked #1 nationally by the Trust for Public Land), bike infrastructure, cultural scene, strong job market, and relative affordability compared to coastal cities. The tradeoffs are real winters, a mid-size metro (3.7 million), and the growing pains of a city actively reckoning with policing, housing, and equity.",
  },
  {
    question: "How cold does Minneapolis get in winter?",
    answer:
      "Very cold. Average January highs are around 23°F (−5°C), with lows around 7°F (−14°C). Wind chills below −30°F happen several times per winter. The city gets about 54 inches of snow annually. It is genuinely harsh — but the city is built for it, and most residents find they adapt within a year or two.",
  },
  {
    question: "What is the cost of living in Minneapolis?",
    answer:
      "Minneapolis is roughly 5-10% above the national average but significantly cheaper than coastal metros. Median home prices range from $250K in north Minneapolis to $700K+ in the southwest lake neighborhoods. One-bedroom rents range from $1,000-$1,800 depending on neighborhood. Groceries, utilities, and transportation are close to the national average. The biggest variable is housing — neighborhood choice drives cost of living more than anything else.",
  },
  {
    question: "What are the best neighborhoods in Minneapolis for families?",
    answer:
      "The southwest lake neighborhoods — Fulton, Linden Hills, Kenny, Lynnhurst — are the traditional family picks with strong schools, parks, and safety. Nokomis and Longfellow offer similar lake access at lower prices. For families who want urban walkability, Lowry Hill East and Whittier work if you are comfortable with city density. The northeast neighborhoods (Logan Park, St. Anthony) are increasingly popular with young families who want culture and community.",
  },
  {
    question: "What are the best neighborhoods for young professionals?",
    answer:
      "North Loop for polished walkability and restaurants. Lowry Hill East (The Wedge) for density and nightlife proximity. Whittier for diversity and affordability. Logan Park / Northeast for the arts and brewery scene. South Uptown for lake access with a social scene. Each has a distinct personality — the 'best' depends on whether you want cocktail bars or dive bars, curated or scrappy.",
  },
  {
    question: "How is public transit in Minneapolis?",
    answer:
      "Functional but not comprehensive. The Blue Line light rail runs from Target Field through downtown to MSP Airport and Mall of America. The Green Line connects Minneapolis to St. Paul via the University of Minnesota. Bus service covers most of the city with varying frequency. The real strength is the bike infrastructure — Minneapolis is consistently ranked among the top 3 biking cities in America. Most residents own a car but don't always need it.",
  },
  {
    question: "Is Minneapolis safe?",
    answer:
      "This is the most complicated question about Minneapolis. Overall crime rates are moderate for a city this size. The southwest and southeast neighborhoods are very safe by any measure. Some areas — parts of north Minneapolis, stretches of Lake Street, downtown late at night — have higher crime rates. After 2020, property crime rose citywide, and the policing debate made safety a charged political topic. The honest answer: most neighborhoods are safe for daily life, but Minneapolis is a real city with real city problems, not a suburb.",
  },
  {
    question: "What is the job market like in Minneapolis?",
    answer:
      "Strong and diversified. The Twin Cities metro is home to 16 Fortune 500 companies — Target, UnitedHealth Group, Best Buy, 3M, General Mills, U.S. Bancorp, Medtronic, and others. Healthcare, finance, retail, food, and tech are the major sectors. The University of Minnesota is a major employer and research institution. Unemployment has historically run below the national average. Remote work has expanded options further, and Minneapolis's cost of living makes it attractive for remote workers earning coastal salaries.",
  },
  {
    question: "How do Minneapolis schools compare?",
    answer:
      "It depends heavily on neighborhood. Minneapolis Public Schools is a large urban district with significant performance variation between schools. Southwest Minneapolis schools (Lake Harriet, Burroughs, Southwest High) perform well above state averages. Schools in other parts of the city vary more widely. Minnesota has robust open enrollment, charter, and private school options. Many families navigate the system strategically, choosing schools outside their neighborhood boundaries.",
  },
  {
    question: "What should I know about Minneapolis weather beyond winter?",
    answer:
      "Minneapolis has dramatic seasonal range. Summers are genuinely beautiful — 80-85°F, long days, the entire city moves outdoors. Fall is spectacular, with peak foliage in early-to-mid October. Spring is the weakest season — March and April can feel like extended winter, and true spring doesn't arrive until May. The flip side of brutal winters is that the summers feel earned, and the outdoor culture from May through October is among the best of any American city.",
  },
  {
    question: "Do I need a car in Minneapolis?",
    answer:
      "It depends on your neighborhood and commute. In walkable neighborhoods like North Loop, Lowry Hill East, Whittier, or Uptown, you can manage without a car for daily life — especially with biking and transit. In the southwest lake neighborhoods (Fulton, Linden Hills, Kenny), a car is practically necessary. Most Minneapolis residents own a car but bike or transit for some trips. If you work downtown and live along a light rail line, car-free living is very doable.",
  },
  {
    question: "What is the Minneapolis food scene like?",
    answer:
      "Excellent and underrated. The Twin Cities punch above their weight in dining. Highlights include a strong Southeast Asian food tradition (Hmong, Vietnamese, Thai), East African cuisine (Somali, Ethiopian), a thriving craft brewery scene (150+ breweries in the metro), James Beard Award-winning restaurants (Owamni, Demi, Spoon and Stable), and an extraordinary year-round farmers market scene. Eat Street in Whittier, Central Avenue in Northeast, and the North Loop are the main dining corridors.",
  },
];

export default function MovingToMinneapolisPage() {
  const jsonLd = renderJsonLd([
    generateArticleSchema({
      title: "Moving to Minneapolis: The Complete Relocation Guide (2026)",
      description:
        "Everything you need to know before moving to Minneapolis — neighborhoods, cost of living, weather, schools, jobs, transit, and what no one tells you until you get here.",
      url: `${BASE_URL}/guides/moving-to-minneapolis`,
      datePublished: "2026-03-26",
      dateModified: "2026-03-26",
      authorName: "From MPLS With Love",
      publisherName: "From MPLS With Love",
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: BASE_URL },
      {
        name: "Moving to Minneapolis",
        url: `${BASE_URL}/guides/moving-to-minneapolis`,
      },
    ]),
    generateFaqSchema(faq),
  ]);

  return (
    <main className="flex-1 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <Link
          href="/"
          className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[#71717a] hover:text-[#2a9d8f] transition-colors flex items-center gap-2 mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Home
        </Link>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Relocation Guide
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Moving to Minneapolis
        </h1>

        <div className="mb-14">
          <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
            Everything you actually need to know before relocating to
            Minneapolis &mdash; from the neighborhoods that fit your life to the
            winter that will test your commitment, the job market that will
            sustain it, and the parks, lakes, and culture that will make you
            wonder why you didn&apos;t move here sooner.
          </p>
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
            Last updated: March 2026 &middot; A complete relocation guide
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-6 mb-14">
        <nav
          aria-label="Table of contents"
          className="border-l-2 border-[#2a9d8f] pl-6"
        >
          <p className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
            In this guide
          </p>
          <ol className="list-decimal list-inside space-y-1.5">
            {[
              { id: "why-minneapolis", label: "Why Minneapolis?" },
              { id: "cost-of-living", label: "Cost of Living" },
              { id: "neighborhoods", label: "Choosing a Neighborhood" },
              { id: "weather", label: "Weather & Seasons" },
              { id: "jobs", label: "Job Market" },
              { id: "transit", label: "Getting Around" },
              { id: "schools", label: "Schools & Education" },
              { id: "food-culture", label: "Food & Culture" },
              { id: "outdoors", label: "Parks & Outdoors" },
              { id: "honest-stuff", label: "The Honest Stuff" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <li
                key={item.id}
                className="text-sm text-[#71717a] marker:text-[#2a9d8f] marker:font-bold"
              >
                <a
                  href={`#${item.id}`}
                  className="hover:text-[#0a0a0a] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 pb-16">
        {/* Why Minneapolis */}
        <section id="why-minneapolis" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Why Minneapolis?
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              Minneapolis is one of those cities that people who live here love
              with an intensity that puzzles outsiders. It is cold &mdash;
              genuinely, punitively cold &mdash; for four to five months of the
              year. It is not on a coast. It is not the city you dreamed of
              moving to when you were twenty-two. And yet: it has the best park
              system in America (the Trust for Public Land has ranked it #1
              nationally), a cultural infrastructure that rivals cities three
              times its size, a food scene that James Beard voters have noticed,
              a bike network that makes Portland jealous, 16 Fortune 500
              companies, and a cost of living that lets you actually enjoy all of
              it.
            </p>
            <p>
              The city sits at the confluence of the Mississippi River and the
              Minnesota River, spread across a landscape of 22 lakes, winding
              creek corridors, and the dramatic Mississippi gorge. It has 87
              officially defined neighborhoods, each with its own sign, its own
              character, and its own argument about what Minneapolis really is.
              The metro area &mdash; the Twin Cities of Minneapolis and St. Paul,
              plus surrounding suburbs &mdash; holds about 3.7 million people,
              making it the 16th largest metro in the country.
            </p>
            <p>
              What makes Minneapolis unusual is the combination: world-class
              parks and culture in a metro that is still affordable enough for a
              teacher or a nurse to buy a house. That is increasingly rare in
              America, and it is the core reason people move here and stay.
            </p>
          </div>
        </section>

        {/* Cost of Living */}
        <section id="cost-of-living" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Cost of Living
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              Minneapolis is roughly 5-10% above the national average for cost
              of living, which sounds unremarkable until you compare it to the
              cities people are leaving to come here. Against San Francisco,
              Minneapolis is 40-50% cheaper. Against New York, 35-45%. Against
              Denver and Austin &mdash; the other mid-tier cities that get
              relocation buzz &mdash; Minneapolis is still 10-20% cheaper. The
              biggest variable by far is housing, and the biggest variable in
              housing is which neighborhood you choose.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Housing
            </h3>
            <p>
              The Minneapolis housing market spans a wide range. In the
              southwest lake neighborhoods &mdash;{" "}
              <Link
                href="/neighborhoods/fulton"
                className="text-[#2a9d8f] hover:underline"
              >
                Fulton
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/linden-hills"
                className="text-[#2a9d8f] hover:underline"
              >
                Linden Hills
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/kenny"
                className="text-[#2a9d8f] hover:underline"
              >
                Kenny
              </Link>{" "}
              &mdash; median home prices run $500K-$800K. In{" "}
              <Link
                href="/neighborhoods/north-loop"
                className="text-[#2a9d8f] hover:underline"
              >
                North Loop
              </Link>{" "}
              condos start around $250K and run to $800K+. In{" "}
              <Link
                href="/neighborhoods/longfellow"
                className="text-[#2a9d8f] hover:underline"
              >
                Longfellow
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/powderhorn-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Powderhorn Park
              </Link>
              , and{" "}
              <Link
                href="/neighborhoods/nokomis"
                className="text-[#2a9d8f] hover:underline"
              >
                Nokomis
              </Link>
              , you can find solid bungalows in the $280K-$400K range. North
              Minneapolis has the most affordable housing in the city, with homes
              starting under $200K.
            </p>
            <p>
              Rent follows the same geography. A one-bedroom in{" "}
              <Link
                href="/neighborhoods/north-loop"
                className="text-[#2a9d8f] hover:underline"
              >
                North Loop
              </Link>{" "}
              runs $1,400-$2,200. In{" "}
              <Link
                href="/neighborhoods/whittier"
                className="text-[#2a9d8f] hover:underline"
              >
                Whittier
              </Link>{" "}
              or{" "}
              <Link
                href="/neighborhoods/lowry-hill-east"
                className="text-[#2a9d8f] hover:underline"
              >
                Lowry Hill East
              </Link>
              , $1,000-$1,500. In{" "}
              <Link
                href="/neighborhoods/seward"
                className="text-[#2a9d8f] hover:underline"
              >
                Seward
              </Link>{" "}
              or{" "}
              <Link
                href="/neighborhoods/longfellow"
                className="text-[#2a9d8f] hover:underline"
              >
                Longfellow
              </Link>
              , $1,000-$1,400.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Other Costs
            </h3>
            <p>
              Groceries are near the national average. Minnesota has a 6.875%
              state sales tax (but clothing is exempt &mdash; a genuine perk).
              State income tax is progressive and runs 5.35-9.85%, which is
              higher than many states. Property taxes are moderate to high,
              depending on your neighborhood and home value. Utilities run about
              $150-$250/month including heat &mdash; gas bills spike in winter
              but your AC costs are lower than in the Sun Belt. Auto insurance is
              reasonable. You will spend money on winter gear &mdash; a good coat
              ($200-$400), boots ($100-$200), and layers &mdash; but you buy
              these once and they last years.
            </p>
          </div>
        </section>

        {/* Choosing a Neighborhood */}
        <section id="neighborhoods" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Choosing a Neighborhood
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              Minneapolis has 87 officially defined neighborhoods, and the
              differences between them are real. This is not a city where
              &ldquo;location doesn&apos;t matter.&rdquo; Your neighborhood
              determines your commute, your schools, your restaurant options,
              your property taxes, your walkability, your safety profile, and
              your social world. Choosing the right neighborhood is the single
              most important decision you will make in your move.
            </p>
            <p>
              Here is the honest shorthand, by what you are optimizing for:
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Best for Families with Kids
            </h3>
            <p>
              <Link
                href="/neighborhoods/fulton"
                className="text-[#2a9d8f] hover:underline"
              >
                Fulton
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/linden-hills"
                className="text-[#2a9d8f] hover:underline"
              >
                Linden Hills
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/kenny"
                className="text-[#2a9d8f] hover:underline"
              >
                Kenny
              </Link>
              , Lynnhurst. These are the southwest lake neighborhoods &mdash;
              strong schools, safe streets, parks everywhere, Lake Harriet and
              Bde Maka Ska within biking distance.{" "}
              <Link
                href="/neighborhoods/nokomis"
                className="text-[#2a9d8f] hover:underline"
              >
                Nokomis
              </Link>{" "}
              offers a similar vibe at lower prices.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Best for Young Professionals
            </h3>
            <p>
              <Link
                href="/neighborhoods/north-loop"
                className="text-[#2a9d8f] hover:underline"
              >
                North Loop
              </Link>{" "}
              for walkable luxury.{" "}
              <Link
                href="/neighborhoods/lowry-hill-east"
                className="text-[#2a9d8f] hover:underline"
              >
                Lowry Hill East
              </Link>{" "}
              for density and nightlife.{" "}
              <Link
                href="/neighborhoods/south-uptown"
                className="text-[#2a9d8f] hover:underline"
              >
                South Uptown
              </Link>{" "}
              for lake access with a social scene.{" "}
              <Link
                href="/neighborhoods/logan-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Logan Park
              </Link>{" "}
              for breweries and arts.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Best for Walkability &amp; Transit
            </h3>
            <p>
              <Link
                href="/neighborhoods/north-loop"
                className="text-[#2a9d8f] hover:underline"
              >
                North Loop
              </Link>{" "}
              (Walk Score 95),{" "}
              <Link
                href="/neighborhoods/whittier"
                className="text-[#2a9d8f] hover:underline"
              >
                Whittier
              </Link>{" "}
              (93),{" "}
              <Link
                href="/neighborhoods/lowry-hill-east"
                className="text-[#2a9d8f] hover:underline"
              >
                Lowry Hill East
              </Link>{" "}
              (90),{" "}
              <Link
                href="/neighborhoods/downtown-east"
                className="text-[#2a9d8f] hover:underline"
              >
                Downtown East
              </Link>{" "}
              (95). All four are genuinely car-optional for daily life.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Best Value
            </h3>
            <p>
              <Link
                href="/neighborhoods/longfellow"
                className="text-[#2a9d8f] hover:underline"
              >
                Longfellow
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/powderhorn-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Powderhorn Park
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/seward"
                className="text-[#2a9d8f] hover:underline"
              >
                Seward
              </Link>
              ,{" "}
              <Link
                href="/neighborhoods/nokomis"
                className="text-[#2a9d8f] hover:underline"
              >
                Nokomis
              </Link>
              . Strong character, real community, park access, and home prices
              that don&apos;t require two six-figure incomes.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Most Character &amp; Culture
            </h3>
            <p>
              <Link
                href="/neighborhoods/whittier"
                className="text-[#2a9d8f] hover:underline"
              >
                Whittier
              </Link>{" "}
              (Eat Street, diversity, MIA),{" "}
              <Link
                href="/neighborhoods/logan-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Logan Park
              </Link>{" "}
              (arts district, breweries, Art-A-Whirl),{" "}
              <Link
                href="/neighborhoods/powderhorn-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Powderhorn Park
              </Link>{" "}
              (MayDay Parade, radical community organizing),{" "}
              <Link
                href="/neighborhoods/seward"
                className="text-[#2a9d8f] hover:underline"
              >
                Seward
              </Link>{" "}
              (co-op culture, Mississippi River gorge).
            </p>

            <p className="mt-6">
              Read our{" "}
              <Link
                href="/neighborhoods"
                className="text-[#2a9d8f] hover:underline font-medium"
              >
                complete neighborhood guides
              </Link>{" "}
              for in-depth coverage of each neighborhood &mdash; history,
              restaurants, real estate, schools, what&apos;s changing, and the
              honest version of what it&apos;s really like to live there.
            </p>
          </div>
        </section>

        {/* Weather & Seasons */}
        <section id="weather" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Weather &amp; Seasons: The Honest Version
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              Minneapolis weather is the thing everyone asks about, and the thing
              that everyone who lives here has a complicated relationship with.
              Let&apos;s be direct.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Winter (November &ndash; March)
            </h3>
            <p>
              It is cold. Not &ldquo;I need a jacket&rdquo; cold &mdash;
              &ldquo;exposed skin can get frostbite in 10 minutes&rdquo; cold.
              Average January temperatures range from 7°F to 23°F. Wind chills
              regularly hit −20°F to −40°F during polar vortex events (these
              happen a few times per winter). The city gets about 54 inches of
              snow annually. Winter starts in earnest in November and
              doesn&apos;t fully release its grip until April.
            </p>
            <p>
              Here is the thing no one tells you: you adjust. Minnesotans
              don&apos;t enjoy −20°F any more than you would. They simply dress
              for it, build routines around it, and find that the rhythm of
              winter &mdash; the quiet snowfalls, the frozen lakes, the skyway
              system downtown, the first warm day in March when the entire city
              exhales &mdash; becomes part of the texture of their year. The
              people who leave because of winter are usually the ones who never
              invested in a real coat.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Spring (April &ndash; May)
            </h3>
            <p>
              Spring is the weakest season. March and April are unpredictable
              &mdash; snow one day, 50°F the next. True spring doesn&apos;t
              arrive until May. When it does, the transformation is dramatic:
              trees leaf out, lakes thaw, patios open, and the collective mood of
              the city shifts visibly. May in Minneapolis is one of the most
              optimistic months in any American city.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Summer (June &ndash; August)
            </h3>
            <p>
              Summers are genuinely beautiful. Average highs in July are
              82-85°F, with low humidity by national standards (though locals
              will complain about humidity regardless). Days are long &mdash;
              over 15 hours of daylight in June. The entire city moves outdoors.
              Lakes are full of swimmers, paddleboarders, and kayakers. Patios
              are packed. Concerts, festivals, and farmers markets run
              continuously. It is the payoff for winter, and it is spectacular.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Fall (September &ndash; October)
            </h3>
            <p>
              Fall is the consensus best season. September is warm (70s) with
              cool evenings. October brings peak foliage &mdash; the elms,
              maples, and oaks turn deep gold and red against blue skies. The
              light changes, the air sharpens, and the city feels like it is
              savoring the last weeks before winter. By early November, the first
              snow usually arrives.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              What to Buy Before Your First Winter
            </h3>
            <p>
              A serious winter coat (not a fashion coat &mdash; an actual parka
              rated to −20°F or below). Insulated waterproof boots. Wool or
              fleece-lined gloves, not cotton. A hat that covers your ears.
              Thermal base layers. A windshield ice scraper and snow brush for
              your car. Budget $400-$600 for the full kit; it will last 5-10
              years.
            </p>
          </div>
        </section>

        {/* Job Market */}
        <section id="jobs" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Job Market
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              The Twin Cities metro has one of the strongest and most diversified
              economies of any mid-size American metro. Sixteen Fortune 500
              companies are headquartered here &mdash; more per capita than
              almost anywhere in the country. The major sectors:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Healthcare:</strong> UnitedHealth Group (the largest
                health company in the world by revenue), Medtronic, Mayo Clinic
                (Rochester, but with significant Twin Cities presence), Allina
                Health, HealthPartners, Fairview. Healthcare is the metro&apos;s
                largest employment sector.
              </li>
              <li>
                <strong>Finance &amp; Banking:</strong> U.S. Bancorp, Ameriprise
                Financial, Piper Sandler, Thrivent. The Twin Cities is a major
                financial services hub.
              </li>
              <li>
                <strong>Retail &amp; Consumer:</strong> Target (headquartered in
                downtown Minneapolis), Best Buy, General Mills, Land O&apos;Lakes,
                Hormel. The retail and CPG presence is deep.
              </li>
              <li>
                <strong>Technology:</strong> Growing but not dominant. No single
                tech giant is headquartered here, but there is a strong
                mid-market tech ecosystem, significant corporate tech teams
                (Target&apos;s engineering org is massive), and a growing startup
                scene. Remote work has made Minneapolis increasingly attractive
                for tech workers earning coastal salaries.
              </li>
              <li>
                <strong>Education &amp; Research:</strong> The University of
                Minnesota is a top-tier public research university and one of the
                metro&apos;s largest employers. It anchors a research and
                innovation ecosystem that includes significant medical device,
                biotech, and agricultural technology clusters.
              </li>
            </ul>
            <p>
              Unemployment in the Twin Cities has historically run 1-2
              percentage points below the national average. The labor market is
              competitive for employers &mdash; qualified candidates often have
              multiple offers. The cost-of-living-to-salary ratio is one of the
              best in the country: you earn 85-95% of what you&apos;d earn in a
              coastal city, but your housing costs are 40-50% lower.
            </p>
          </div>
        </section>

        {/* Getting Around */}
        <section id="transit" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Getting Around
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              Minneapolis transportation is a mix of strong infrastructure and
              real gaps. The honest assessment:
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Biking
            </h3>
            <p>
              This is where Minneapolis genuinely leads. The city has over 200
              miles of on- and off-street bikeways, including the Midtown
              Greenway (a car-free below-grade trail running 5.5 miles east-west
              through the city), the Chain of Lakes paths, and extensive
              Mississippi River trails. Minneapolis is consistently ranked among
              the top 2-3 biking cities in America by every organization that
              measures this. People bike year-round &mdash; yes, even in winter.
              The city plows many bike lanes within 24 hours of snowfall.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Light Rail
            </h3>
            <p>
              The Blue Line runs from Target Field (downtown) through south
              Minneapolis to MSP International Airport and the Mall of America.
              The Green Line runs from Target Field east to downtown St. Paul via
              the University of Minnesota campus. Both lines are useful if your
              commute aligns with them and less useful if it doesn&apos;t. A
              third line (Southwest LRT / Green Line Extension) has been under
              construction for years, with delays and cost overruns that have
              become a local political saga.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Bus
            </h3>
            <p>
              Metro Transit runs an extensive bus network. High-frequency routes
              on Hennepin, Lyndale, Lake Street, and Central Avenue are reliable.
              Less-frequent routes in residential neighborhoods can be
              inconvenient. The bus system is functional but not fast &mdash;
              most trips require transfers and take 1.5-2x as long as driving.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Driving
            </h3>
            <p>
              Most Minneapolis residents own a car. Traffic is moderate by
              national standards &mdash; rush hour exists but rarely approaches
              coastal-city levels. The interstate system (I-94, I-35W, I-394)
              provides good access across the metro. Parking is generally
              available in residential neighborhoods (most have free street
              parking) and tighter in denser areas like North Loop, downtown, and
              Uptown. Winter driving requires adjustment &mdash; snow tires are
              not legally required but are strongly recommended. Street parking
              bans during snow emergencies are enforced seriously.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Airport
            </h3>
            <p>
              MSP International Airport is a major Delta hub, which means direct
              flights to most U.S. cities and many international destinations.
              It is consistently ranked among the best airports in North America.
              The Blue Line light rail connects it to downtown in about 25
              minutes. By car, it is 15-25 minutes from most Minneapolis
              neighborhoods.
            </p>
          </div>
        </section>

        {/* Schools */}
        <section id="schools" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Schools &amp; Education
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              Minneapolis Public Schools (MPS) is a large urban district with
              significant variation between schools. This is an area where
              honesty matters more than cheerfulness.
            </p>
            <p>
              The highest-performing neighborhood schools are concentrated in
              southwest Minneapolis: Lake Harriet Lower and Upper Campus, Burroughs
              Community School, and Armatage. Southwest High School has an
              International Baccalaureate program. These schools perform well
              above state averages and are a major reason families pay premium
              prices for southwest neighborhoods.
            </p>
            <p>
              Schools in other parts of the city show more variation. MPS has
              struggled with achievement gaps &mdash; particularly between white
              students and students of color &mdash; that are among the widest in
              the nation. The district is aware of this and has made it a stated
              priority, but progress has been slow.
            </p>
            <p>
              Minnesota has strong school choice infrastructure. Open enrollment
              allows families to apply to schools outside their neighborhood
              boundary. Magnet schools and citywide programs (arts, language
              immersion, STEM, Montessori) provide alternatives. The charter
              school sector is large. Private school options include Blake,
              Breck, Minnehaha Academy, and several parochial schools.
            </p>
            <p>
              The practical reality: many Minneapolis families &mdash; especially
              those outside southwest &mdash; navigate the school system
              actively, applying to magnets, charters, or open-enrolling in
              schools across the city rather than defaulting to their
              neighborhood school. If schools are a top priority, neighborhood
              choice matters enormously.
            </p>
          </div>
        </section>

        {/* Food & Culture */}
        <section id="food-culture" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Food &amp; Culture
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              The Twin Cities food and culture scene punches well above its
              weight for a metro of 3.7 million. Here is what you should know:
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Food
            </h3>
            <p>
              The dining scene has evolved dramatically over the past decade.
              Minneapolis has produced multiple James Beard Award winners and
              nominees. The standout cuisines are Southeast Asian (the Twin
              Cities have one of the largest Hmong populations in the world, plus
              significant Vietnamese and Thai communities), East African (the
              largest Somali diaspora in North America), and a strong
              farm-to-table tradition drawing on Minnesota&apos;s agricultural
              base.
            </p>
            <p>
              Key food corridors: Eat Street in{" "}
              <Link
                href="/neighborhoods/whittier"
                className="text-[#2a9d8f] hover:underline"
              >
                Whittier
              </Link>{" "}
              (the most diverse restaurant strip in the city), Central Avenue in{" "}
              <Link
                href="/neighborhoods/logan-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Northeast
              </Link>{" "}
              (old-school Eastern European meets contemporary), the{" "}
              <Link
                href="/neighborhoods/north-loop"
                className="text-[#2a9d8f] hover:underline"
              >
                North Loop
              </Link>{" "}
              (the densest collection of upscale restaurants), and Midtown Global
              Market (an international food hall in a converted Sears building).
            </p>
            <p>
              The brewery scene is enormous &mdash; over 150 breweries in the
              metro, many functioning as genuine community gathering spaces
              rather than just drinking establishments. Surly, Indeed, Fulton,
              Fair State, Bauhaus, and Modist are among the best-known.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Arts &amp; Culture
            </h3>
            <p>
              Minneapolis has more theater seats per capita than any U.S. city
              except New York. The Guthrie Theater is a world-class regional
              theater. The Walker Art Center is one of the top contemporary art
              museums in the country, with a free sculpture garden. The
              Minneapolis Institute of Art (MIA) has an encyclopedic collection
              and is always free. First Avenue is a legendary music venue (yes,
              from Purple Rain). The music scene &mdash; from Prince&apos;s
              legacy to a thriving indie and hip-hop scene &mdash; is a genuine
              cultural asset.
            </p>
            <p>
              Major festivals: Art-A-Whirl (the largest open studio tour in the
              country, held in{" "}
              <Link
                href="/neighborhoods/logan-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Northeast
              </Link>
              ), MayDay Parade (in{" "}
              <Link
                href="/neighborhoods/powderhorn-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Powderhorn
              </Link>
              ), Twin Cities Jazz Festival, Minneapolis Aquatennial, Northern
              Spark, and the Minnesota State Fair (technically in St. Paul, but
              it is the largest state fair in the country by daily attendance,
              and it is magnificent).
            </p>
          </div>
        </section>

        {/* Parks & Outdoors */}
        <section id="outdoors" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Parks &amp; Outdoors
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <p>
              This is Minneapolis&apos;s strongest card. The Minneapolis Park and
              Recreation Board, an independent elected body (one of the only ones
              in the country), manages a system that the Trust for Public Land
              has ranked #1 nationally. The numbers: 180 park properties, 49
              recreation centers, 22 lakes, 102 miles of Grand Rounds trails,
              and the guarantee that 98% of Minneapolis residents live within a
              10-minute walk of a park.
            </p>
            <p>
              The Chain of Lakes &mdash; Lake Harriet, Bde Maka Ska (formerly
              Lake Calhoun), Lake of the Isles, Cedar Lake &mdash; forms a
              connected system of paths in the southwest part of the city that
              is, without exaggeration, one of the great urban park assets in
              America. The Mississippi River gorge runs through the southeastern
              part of the city with trails, bluffs, and views. Minnehaha Falls
              &mdash; a 53-foot waterfall in a city park &mdash; is a genuine
              natural wonder.
            </p>
            <p>
              Winter outdoor activities include cross-country skiing (groomed
              trails in multiple city parks), ice skating (dozens of rinks,
              including the famous Lake of the Isles rink), ice fishing, fat-tire
              biking, and snowshoeing. The city doesn&apos;t shut down for
              winter; it adapts.
            </p>
            <p>
              Summer activities include swimming at public beaches (Lake
              Nokomis, Bde Maka Ska, Lake Harriet), kayaking and
              paddleboarding, biking the Grand Rounds, free concerts at the Lake
              Harriet Bandshell, and fishing. The outdoor culture from May
              through October is among the best of any American city &mdash; a
              direct consequence of long winters making everyone desperate to be
              outside.
            </p>
          </div>
        </section>

        {/* The Honest Stuff */}
        <section id="honest-stuff" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            The Honest Stuff No One Puts in the Brochure
          </h2>
          <div className="prose prose-zinc max-w-none text-[15px] leading-[1.85] space-y-5">
            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              The 2020 Reckoning
            </h3>
            <p>
              George Floyd was murdered by a Minneapolis police officer on May
              25, 2020, at 38th and Chicago in the{" "}
              <Link
                href="/neighborhoods/powderhorn-park"
                className="text-[#2a9d8f] hover:underline"
              >
                Powderhorn
              </Link>{" "}
              neighborhood. The aftermath &mdash; the protests, the burning of
              the Third Precinct, the weeks of unrest, the national reckoning
              with policing &mdash; reshaped Minneapolis in ways that are still
              unfolding. Crime rose significantly in 2020-2021. Businesses along
              Lake Street were destroyed. The city voted on (and narrowly
              rejected) a ballot measure to replace the police department.
              Officer staffing dropped sharply. The conversation about policing,
              safety, and racial equity remains active and unresolved.
            </p>
            <p>
              You should know this history if you are considering moving here. It
              is part of the city&apos;s story, not separate from it. Many
              neighborhoods have rebuilt and recovered. Crime has declined from
              its 2020-2021 peak. But the experience changed Minneapolis
              &mdash; its politics, its self-image, its relationship with its
              own institutions &mdash; and that change is ongoing.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Minnesota Nice
            </h3>
            <p>
              &ldquo;Minnesota Nice&rdquo; is real, but it is not what you think.
              People are polite, helpful, and genuinely friendly on the surface.
              But breaking into established social circles can be difficult.
              Minnesotans often have deep, long-standing friend groups from
              childhood, college, or church, and adding new people to those
              circles is not their default behavior. Transplants frequently
              report that it takes 2-3 years to build a genuine social network.
              The antidote: join things. Rec leagues, co-ops, running clubs,
              neighborhood associations, religious communities. Passive
              socializing does not work here the way it does in cities with more
              transient populations.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Segregation
            </h3>
            <p>
              Minneapolis and the Twin Cities have significant racial
              disparities in income, homeownership, education, and health
              outcomes &mdash; among the worst in the nation by several
              measures. The city&apos;s neighborhoods are more economically and
              racially segregated than many residents would like to acknowledge.
              The southwest lake neighborhoods are predominantly white and
              wealthy. North Minneapolis is predominantly Black. Concentrations
              of East African immigrants are in Cedar-Riverside and parts of
              south Minneapolis. This is not unique to Minneapolis, but the gap
              between the city&apos;s progressive self-image and its demographic
              reality is worth understanding.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              The Political Temperature
            </h3>
            <p>
              Minneapolis is one of the most politically progressive cities in
              America. The City Council skews left of the national Democratic
              Party. Policy debates around housing (Minneapolis 2040 eliminated
              single-family zoning citywide), policing, homelessness, and
              development are intense, well-informed, and sometimes exhausting.
              If you are moving from a politically moderate or conservative
              environment, the local political culture will feel very different.
              If you are moving from another progressive city, you will feel at
              home &mdash; and may still be surprised by the intensity.
            </p>

            <h3 className="text-sm font-bold text-[#0a0a0a] mt-8 mb-3">
              Seasonal Affective Disorder
            </h3>
            <p>
              This is real and undersold. Minneapolis gets about 8.5 hours of
              daylight in December, and many of those hours are overcast.
              Combined with cold that limits time outdoors, the November-February
              stretch is genuinely hard on mental health for many people &mdash;
              especially transplants who aren&apos;t used to it. A light therapy
              lamp ($30-$80), Vitamin D supplements, and a winter activity
              routine are standard coping strategies, not luxuries. Take this
              seriously.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16 scroll-mt-24">
          <h2 className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#0a0a0a] pb-3 mb-6 border-b border-[#0a0a0a]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-b border-[#e4e4e7] pb-4"
              >
                <summary className="cursor-pointer text-[15px] font-semibold text-[#0a0a0a] list-none flex items-center justify-between">
                  {item.question}
                  <span className="text-[#2a9d8f] group-open:rotate-45 transition-transform text-lg ml-4">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] text-[#71717a] leading-[1.85]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#264653] text-white p-10 my-16">
          <h2 className="text-2xl font-black mb-4">
            Ready to Explore Neighborhoods?
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            We&apos;ve written in-depth guides to Minneapolis&apos;s most
            interesting neighborhoods &mdash; honest, detailed, and written by
            people who actually live here. Start exploring.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/neighborhoods"
              className="bg-[#2a9d8f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#238577] transition-colors"
            >
              Browse All Neighborhoods
            </Link>
            <Link
              href="/map"
              className="border border-white/30 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Explore the Map
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
