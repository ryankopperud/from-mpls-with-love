import type { Metadata } from "next";
import Link from "next/link";
import { getNeighborhoodBySlug } from "@/lib/neighborhoods";
import NeighborhoodMap from "@/components/NeighborhoodMap";
import StickyToc from "@/components/StickyToc";
import {
  ArticleSection,
  ArticleSubsection,
  StatsBox,
  PlaceCardComponent,
  Quote,
  FaqSection,
  ClosingSection,
  Prose,
} from "@/components/NeighborhoodArticle";

export const metadata: Metadata = {
  title: "Fulton, Minneapolis: The Complete Neighborhood Guide | From MPLS With Love",
  description:
    "A complete guide to Fulton, one of Minneapolis's most beloved southwest neighborhoods — its history, homes, food, parks, schools, and what's changing.",
};

const TOC_ITEMS = [
  { id: "overview", label: "What is Fulton?" },
  { id: "facts", label: "At a Glance" },
  { id: "history", label: "History & Origins" },
  { id: "character", label: "Character & Vibe" },
  { id: "food", label: "Food & Local Spots" },
  { id: "outdoors", label: "Parks & Lakes" },
  { id: "schools", label: "Schools" },
  { id: "real-estate", label: "Real Estate" },
  { id: "tensions", label: "What's Changing" },
  { id: "faq", label: "FAQ" },
];

export default function FultonPage() {
  const neighborhood = getNeighborhoodBySlug("fulton");
  const geojsonFeature = neighborhood
    ? JSON.parse(JSON.stringify(neighborhood))
    : null;

  return (
    <main className="flex-1 bg-white">
      {/* ── Hero: full-width ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <Link
          href="/neighborhoods"
          className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-[#71717a] hover:text-[#2a9d8f] transition-colors flex items-center gap-2 mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          All Neighborhoods
        </Link>

        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[#2a9d8f] mb-4">
          Minneapolis Neighborhood
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-0.03em] text-[#0a0a0a] mb-10 leading-[0.95]">
          Fulton
        </h1>

        {geojsonFeature && (
          <div className="mb-14 h-[450px] bg-[#f5f5f5] overflow-hidden">
            <NeighborhoodMap geojson={geojsonFeature} name="Fulton" />
          </div>
        )}
      </div>

      {/* ── Two-column: sticky TOC + article ── */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">
          {/* Sidebar TOC */}
          <StickyToc items={TOC_ITEMS} />

          {/* Article content */}
          <div className="max-w-3xl">
            {/* Intro */}
            <div className="mb-14">
              <p className="text-lg text-[#71717a] leading-relaxed font-light mb-6">
                A quietly beloved corner of Southwest Minneapolis — where century-old
                bungalows meet Lake Harriet, summer concerts are still free, and the
                argument between old and new plays out one teardown at a time.
              </p>
              <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-[#71717a] pt-5 border-t border-[#e4e4e7]">
                Last updated: March 2026 · A complete neighborhood guide
              </p>
            </div>

            {/* Hook */}
            <Prose>
              <p>
                On a Tuesday evening in July, the path around Lake Harriet fills up
                the way only a Minneapolis summer path can — joggers weaving past dog
                walkers weaving past families with strollers weaving past couples on
                cruiser bikes going nowhere in particular. Someone has a Caribou
                Coffee. Someone else has a wine in a Yeti. The Bandshell, barely
                visible through the trees, is throwing out big band music that bounces
                off the water and drifts across the whole northeast corner of the
                neighborhood. A hundred yards away, a kid is chasing ducks. Nobody is
                on their phone. This is Fulton on a summer Tuesday. The rest of the
                year, it&apos;s quieter — but it&apos;s always like this, underneath.
              </p>
            </Prose>

            {/* Overview */}
            <ArticleSection id="overview" title="What is Fulton, Minneapolis?">
              <Prose>
                <p>
                  Fulton is a residential neighborhood in Southwest Minneapolis,
                  bounded by West 47th Street to the north, Penn Avenue South to the
                  east, West 54th Street to the south, and France Avenue South to the
                  west. It sits at the edge of the city, where Minneapolis meets
                  Edina — a positioning that gives it access to suburban-quality
                  schools and shopping while remaining firmly a city neighborhood.
                  Lake Harriet anchors its northeastern corner and Minnehaha Creek
                  runs through it, making Fulton one of the most naturally endowed
                  neighborhoods in the entire Twin Cities metro.
                </p>
                <p>
                  Named after Robert Fulton, the engineer credited with developing
                  the steamboat in the early 1800s, the neighborhood took shape
                  primarily in the 1920s and 1930s, leaving it with a stock of
                  Craftsman bungalows, Tudor cottages, and American Foursquares that
                  still define the streetscape. West 50th Street bisects the
                  neighborhood east to west, connecting three small commercial nodes
                  — at France, Xerxes, and Penn Avenues — that give Fulton its
                  walkable, small-town-in-the-city personality.
                </p>
              </Prose>
            </ArticleSection>

            {/* Stats */}
            <ArticleSection id="facts" title="Fulton at a Glance">
              <StatsBox
                label="Fulton, Minneapolis — Key Stats (2025–2026)"
                stats={[
                  { value: "~8,100", label: "Residents (Niche / US Census)" },
                  { value: "$600K–$817K", label: "Median home sale price range (2025 data)" },
                  { value: "14 days", label: "Average time on market (Redfin, 2025)" },
                  { value: "3 miles", label: "Loop trail around Lake Harriet" },
                  { value: "1920s–30s", label: "Era most homes were built" },
                  { value: "15–20 min", label: "Drive to downtown or MSP airport" },
                ]}
              />
            </ArticleSection>

            {/* History */}
            <ArticleSection id="history" title="History & Origins">
              <Prose>
                <p>
                  Before Fulton was a Minneapolis neighborhood, it was something else
                  entirely. The land sits within the homeland of the Dakota people, a
                  short distance from Bdote — the sacred confluence of the
                  Mississippi and Minnesota Rivers, a place the Dakota considered the
                  center of the universe. At Bde Maka Ska (then known to settlers as
                  Lake Calhoun), just northeast of what is now Fulton, a Dakota
                  village thrived in the early 19th century under a chief named Cloud
                  Man, who ran an experimental farm and language school until forced
                  removal in 1839. The ground underfoot here has a long memory.
                </p>
                <p>
                  European and American settlement arrived with the 1850s and
                  accelerated after the Civil War, as Minneapolis grew rapidly
                  outward from the Mississippi. By the 1880s, the Minneapolis Street
                  Railway Company had extended its tracks to Lake Harriet, and the
                  lake itself became a major recreational destination — the company
                  built a pavilion and offered summer concerts to drive ridership, a
                  tradition of free music at the lake that persists to this day in
                  the form of the Minneapolis Pops Orchestra concerts at the
                  Bandshell.
                </p>
                <p>
                  The neighborhood as we know it was built out primarily in the
                  interwar period, the 1920s and 1930s, when middle-class Minneapolis
                  families favored the solid, modest architecture of the Craftsman
                  bungalow, the Tudor cottage, and the American Foursquare. These
                  weren&apos;t grand mansions — they were homes for teachers,
                  tradespeople, shopkeepers. Their modest scale and excellent bones
                  are a large part of what makes the neighborhood feel cohesive a
                  century later. Pershing Field Park, the neighborhood&apos;s main
                  park, was dedicated on Armistice Day in 1931, named for General
                  John &quot;Blackjack&quot; Pershing, commander of American forces
                  in World War I — a reminder of how much the wars shaped civic
                  memory in these years.
                </p>
                <p>
                  For most of the 20th century, Fulton remained quietly prosperous
                  and relatively stable — a steady, tree-shaded corner of Southwest
                  Minneapolis that never went through the cycles of disinvestment and
                  revival that marked neighborhoods closer to downtown. That
                  stability is part of what makes Fulton so desirable today. It&apos;s
                  also part of what now drives up its price.
                </p>
              </Prose>
            </ArticleSection>

            {/* Character */}
            <ArticleSection id="character" title="Character & Vibe">
              <Prose>
                <p>
                  Walk almost any residential block in Fulton in the spring and
                  you&apos;ll see the same thing: deep front porches, mature elms and
                  oaks overhanging the sidewalk, a kid&apos;s bike left out front.
                  The sidewalks are wide. People say hello. Block clubs are not a
                  formality here — they&apos;re how people actually know their
                  neighbors. The Fulton Neighborhood Association has organized
                  networking events, happy hours at the local pub, and a Saturday
                  farmers market that runs May through October at Chowen Avenue.
                  It&apos;s the kind of neighborhood where someone will come over to
                  welcome you on open house day, not to spy, but because that&apos;s
                  just what people here do.
                </p>
                <p>
                  The commercial strips on 50th Street are deliberately modest in
                  scale — neighborhood-sized, not destination-sized. At 50th and
                  France you get slightly closer to destination territory, since that
                  corner is shared with Edina and draws shoppers from across the
                  metro. But at 50th and Xerxes, or 50th and Penn, the scale stays
                  human: a coffee shop, a bakery, an antique store, a wine bar.
                  Fulton doesn&apos;t try to be Uptown. It doesn&apos;t need to be.
                </p>
                <p>
                  The neighborhood skews toward families and long-term owners. Niche
                  rates it as one of the best places to live in Minnesota, and
                  residents describe block parties, Southwest High School choir
                  concerts, and walking the lake as their defining neighborhood
                  rituals. There&apos;s a particular kind of Minneapolis pride here —
                  deeply civic, environmentally conscious, genuinely
                  community-oriented — that feels less performed than in trendier
                  parts of the city.
                </p>
              </Prose>
              <Quote
                text="What I like most about the neighborhood is the walkability and convenience to locally owned businesses, as well as the kindness and openness of the people that live here."
                cite="20-year Fulton resident, Niche review"
              />
            </ArticleSection>

            {/* Food */}
            <ArticleSection id="food" title="Food, Drink & Local Spots">
              <Prose>
                <p>
                  Fulton&apos;s food scene is rooted and reliable rather than trendy
                  and volatile. Most of the institutions here have been around long
                  enough to be considered neighborhood fixtures — places that have
                  earned loyalty over years, not just hype cycles.
                </p>
              </Prose>

              <ArticleSubsection title="The Institutions">
                <PlaceCardComponent place={{ name: "Broders' Cucina Italiana & Pasta Bar", tag: "Italian", description: "2308 W. 50th Street. The Broders family has been making pasta in Fulton since 1982, after founders Molly and Tom traveled to Bologna to study Italian cooking seriously. The deli imports goods directly from Italy; the pasta bar cooks everything to order. One of the most beloved independent restaurants in the entire Twin Cities." }} />
                <PlaceCardComponent place={{ name: "Wuollet Bakery", tag: "Bakery", description: "3608 W. 50th Street. A family-owned Twin Cities institution known across the metro for cakes, pies, pastries, and breads. The kind of place that supplies birthday cakes for multiple generations of the same family. Go early on weekends." }} />
                <PlaceCardComponent place={{ name: "Red Cow", tag: "Burgers & Craft Beer", description: "3624 W. 50th Street. A neighborhood tavern elevated — gourmet burgers, a deep craft beer list, and fine wine. The corner spot at 50th and Drew has become a genuine anchor of the strip, lively at lunch and buzzing on weekend evenings." }} />
                <PlaceCardComponent place={{ name: "Bread & Pickle", tag: "Lakeside Dining", description: "At the Lake Harriet Bandshell Pavilion. The obvious choice for pre-concert dining in summer — lakeside tables, sandwiches and salads, a beer. You're not going for the cuisine; you're going for the view and the event of it." }} />
                <PlaceCardComponent place={{ name: "Hunt & Gather", tag: "Vintage / Antiques", description: "4944 Xerxes Ave. S. Technically not food, but no local list is complete without it. A visually chaotic, deeply wonderful antique and vintage shop that looks like an explosion in the best possible way." }} />
                <PlaceCardComponent place={{ name: "Fulton Farmers Market", tag: "Seasonal Market", description: "4901 Chowen Ave. Every Saturday, May through October, 8:30 a.m. to 1:00 p.m. Established in 2011, this is as much a neighborhood gathering as it is a market. Local produce, baked goods, flowers, and conversation." }} />
              </ArticleSubsection>

              <ArticleSubsection title="Also Worth Knowing">
                <Prose>
                  <p>
                    Lunds &amp; Byerlys at 50th and France is the neighborhood&apos;s
                    primary grocery store — well-stocked, upscale, and convenient.
                    Saturday Dumpling and Mothership Pizza Paradise are among the
                    newer additions drawing strong attention as of early 2026.
                    Gallery 360 on W. 50th is a long-running community art gallery
                    that supports local artists and sells handmade goods.
                  </p>
                </Prose>
              </ArticleSubsection>
            </ArticleSection>

            {/* Outdoors */}
            <ArticleSection id="outdoors" title="Parks, Lakes & Getting Outside">
              <Prose>
                <p>
                  This is, in many ways, the real reason people live in Fulton. The
                  neighborhood&apos;s outdoor offerings are exceptional by any
                  standard, and for a city neighborhood they&apos;re almost absurdly
                  good.
                </p>
              </Prose>
              <ArticleSubsection title="Lake Harriet">
                <Prose><p>Lake Harriet sits at Fulton&apos;s northeastern corner and is one of the jewels of the Minneapolis Chain of Lakes Regional Park — a string of interconnected lakes linked by parkways, trails, and greenways that give Minneapolis its reputation as one of America&apos;s most park-rich cities. The 3-mile paved loop around Lake Harriet accommodates walkers, runners, cyclists, and rollerbladers through all but the coldest months. In summer, kayak and canoe rentals launch from the western shore. There are two beaches for swimming, fishing piers, gardens, and tennis courts at Beard&apos;s Plaisance.</p></Prose>
              </ArticleSubsection>
              <ArticleSubsection title="The Lake Harriet Bandshell">
                <Prose><p>Every summer since the 1880s — first as a privately operated entertainment pavilion funded by the street railway company, now as a public venue — concerts have been performed at the lake. The current Bandshell hosts the Minneapolis Music and Movies in the Parks series, which is free and runs through the summer months. The Minneapolis Pops Orchestra, which has been performing here for more than 75 seasons, plays regularly. In 2014, President Barack Obama gave a public address here to a crowd of thousands. On any given August weekend, the lawn in front of the Bandshell will be covered in blankets and folding chairs. People bring wine.</p></Prose>
              </ArticleSubsection>
              <ArticleSubsection title="Minnehaha Creek">
                <Prose><p>The creek enters the neighborhood from the west and runs diagonally through it, continuing east and eventually south toward Minnehaha Falls and the Mississippi River. The paved trail alongside it connects to the Grand Rounds Scenic Byway, Minneapolis&apos;s 51-mile network of parkways and bike paths. In summer, kids float the shallower stretches on inner tubes. In winter, the creek path becomes a cross-country ski trail.</p></Prose>
              </ArticleSubsection>
              <ArticleSubsection title="Pershing Field Park">
                <Prose><p>The neighborhood&apos;s dedicated park occupies 8.5 acres in Fulton&apos;s northwest corner, adjacent to Southwest High School. It includes baseball and softball fields, a basketball court, a soccer field, tennis courts, a wading pool, walking paths, and the Pershing Recreation Center. It was dedicated on Armistice Day, November 11, 1931, and named for General Pershing.</p></Prose>
              </ArticleSubsection>
            </ArticleSection>

            {/* Schools */}
            <ArticleSection id="schools" title="Schools">
              <Prose>
                <p>Schools are a major draw for families considering Fulton, and the public school pipeline here is genuinely strong by Minneapolis standards.</p>
                <p>Elementary schooling runs through two Lake Harriet Community School campuses. Students attend Lake Harriet Lower Elementary through second grade, then advance to Lake Harriet Upper Elementary, which earns an A-minus rating from Niche. Middle school is Anthony Middle (rated B by Niche). Southwest Senior High School, which serves Fulton among other southwest neighborhoods, is a well-regarded International Baccalaureate World School that also offers career and technical education programs. Southwest earns an A-minus from Niche and is known particularly for its performing arts program.</p>
                <p>Private and early childhood options in and around Fulton include Southwest Montessori School (4–6 year olds) and Casa de Corazon on France Avenue. Families also have access to Minneapolis&apos;s broader magnet school system for alternative pathways.</p>
              </Prose>
            </ArticleSection>

            {/* Real Estate */}
            <ArticleSection id="real-estate" title="Living Here: Real Estate & Housing">
              <Prose>
                <p>Fulton is not an affordable neighborhood by Minneapolis standards — and the gap between Fulton and city-wide medians is significant. The median home sale price in Fulton has ranged between roughly $600,000 and $817,000 depending on the data source and month measured. The citywide Minneapolis median, by contrast, sits around $350,000–$375,000. Fulton trades at a steep premium, and that premium has been growing.</p>
                <p>Homes here sell fast. According to Redfin data, the average home in Fulton was on the market just 14 days in 2025, compared to the national average of 53 days. Buyers routinely offer above asking price.</p>
              </Prose>
              <ArticleSubsection title="What Your Money Buys">
                <Prose>
                  <p>At the lower end of the market (roughly $400,000–$550,000), you&apos;re looking at smaller Cape Cods or bungalows in need of updating. The mid-range ($600,000–$800,000) gets you a well-maintained three- or four-bedroom Craftsman or Tudor. The upper end stretches well past $1 million for larger homes on bigger lots, renovated historic properties, or newer construction. Anything near the lake commands a significant additional premium.</p>
                  <p>The dominant home styles remain those built in the 1920s and 1930s: Craftsman bungalows, Tudor cottages, and American Foursquares. Most are owner-occupied.</p>
                </Prose>
              </ArticleSubsection>
              <Quote text="There's a trend of teardowns right now, so there's a mix of old and new homes." cite="Markesha Smith, Realtor with Re/Max Results, via Homes.com" />
              <ArticleSubsection title="Getting Around">
                <Prose><p>Fulton is walkable within the neighborhood — the commercial nodes on 50th Street are reachable on foot from most addresses, and the lake and creek paths encourage human-powered movement. For getting beyond Fulton, the car is still dominant. Downtown Minneapolis is 15–20 minutes by car; MSP International Airport is similarly 15–20 minutes via I-35W. Bus routes connect to Uptown and downtown.</p></Prose>
              </ArticleSubsection>
            </ArticleSection>

            {/* Tensions */}
            <ArticleSection id="tensions" title="What's Changing: The Honest Version">
              <Prose><p>Fulton is not a neighborhood in crisis, but it is a neighborhood in conversation with itself — and some of those conversations are uncomfortable.</p></Prose>
              <ArticleSubsection title="The Teardown Problem">
                <Prose><p>The same forces that drive prices up are eating the neighborhood&apos;s physical character. As land values rise, older bungalows and cottages on large lots become attractive targets for demolition and replacement with larger, more contemporary homes. Long-term residents have watched the Craftsman and Tudor streetscape they bought into slowly punctuated by large, boxy new construction — homes that maximize square footage at the expense of the scale and proportion that made the neighborhood appealing in the first place. This is a tension with no clean resolution — it&apos;s the market working exactly as intended, in a neighborhood where the market is working very well.</p></Prose>
              </ArticleSubsection>
              <ArticleSubsection title="Property Crime">
                <Prose><p>Fulton&apos;s reputation for safety is generally well-earned, but residents note a rise in property crime — particularly vehicle break-ins, window smashing, and package theft. These are patterns seen across many desirable Minneapolis neighborhoods, not unique to Fulton, but they&apos;re real. It&apos;s worth being clear-eyed about: Fulton is safe in the ways that matter most, but it&apos;s not insulated from the property crime that affects much of Minneapolis.</p></Prose>
              </ArticleSubsection>
              <ArticleSubsection title="Affordability and Access">
                <Prose><p>Fulton&apos;s desirability comes with a price that makes it inaccessible to a large portion of Minneapolis residents. The demographics of the neighborhood are not representative of Minneapolis as a whole — it is largely white, largely wealthy, and largely homeowning. This isn&apos;t a secret, and it raises real questions about who gets to live near the lake and benefit from the park system.</p></Prose>
              </ArticleSubsection>
              <ArticleSubsection title="The Justine Damond Case">
                <Prose><p>In 2017, Fulton was the site of a high-profile police shooting that drew international attention. Justine Damond, a 40-year-old Australian woman, was shot and killed by Minneapolis police officer Mohamed Noor after she called 911 to report a possible assault near her home. The case sparked broad debate about police accountability, use of force, and the way police respond differently in different communities. Officer Noor was convicted of third-degree murder and sentenced to prison. The case is part of Fulton&apos;s recent history and part of a larger Minneapolis reckoning with policing that intensified after 2020.</p></Prose>
              </ArticleSubsection>
            </ArticleSection>

            {/* FAQ */}
            <ArticleSection id="faq" title="Frequently Asked Questions About Fulton, Minneapolis">
              <FaqSection
                items={[
                  { question: "Is Fulton a good neighborhood in Minneapolis?", answer: "Yes — it consistently ranks as one of the most desirable neighborhoods in Minneapolis and in Minnesota overall. Its combination of walkable commercial strips, exceptional park access (Lake Harriet and Minnehaha Creek), strong public schools, and genuine community cohesion makes it appealing to families, professionals, and long-term residents alike." },
                  { question: "Is Fulton, Minneapolis safe?", answer: "Fulton is considered one of the safer neighborhoods in Minneapolis. Violent crime is rare. Property crime — vehicle break-ins, package theft — has increased in recent years, as it has across much of the city. Overall, families with children are comfortable here and the neighborhood has a strong, watchful community culture." },
                  { question: "What is Fulton, Minneapolis known for?", answer: "Fulton is best known for its proximity to Lake Harriet and the Lake Harriet Bandshell's free summer concerts, its well-preserved 1920s–30s architectural character, the 50th & France shopping and dining district it shares with Edina, and its strong school system." },
                  { question: "How much do homes cost in Fulton, Minneapolis?", answer: "Median home sale prices in 2025 ranged from roughly $600,000 to over $800,000 depending on the season and data source, significantly above the citywide median of approximately $350,000–$375,000. Smaller Cape Cods can sell in the $400,000 range; larger renovated homes and anything near the lake can exceed $1–2 million." },
                  { question: "Is Fulton walkable?", answer: "Yes, within the neighborhood. The three commercial nodes on West 50th Street — at France, Xerxes, and Penn — are walkable from most Fulton addresses. Lake Harriet and Minnehaha Creek are accessible on foot or bike. For commuting beyond the neighborhood, most residents rely on cars." },
                  { question: "What schools serve Fulton, Minneapolis?", answer: "The standard public pipeline runs through Lake Harriet Lower Elementary (K–2), Lake Harriet Upper Elementary (3–5), Anthony Middle School, and Southwest Senior High School — an International Baccalaureate World School with strong academic and arts programs." },
                  { question: "What are the best restaurants in Fulton, Minneapolis?", answer: "The most beloved local institutions include Broders' Pasta Bar and Cucina Italiana (fresh pasta since 1982), Red Cow (gourmet burgers and craft beer), Wuollet Bakery (a Twin Cities institution for pastries and cakes), and Bread & Pickle at the Lake Harriet Bandshell." },
                  { question: "Where exactly is Fulton in Minneapolis?", answer: "Fulton is in Southwest Minneapolis, bounded by West 47th Street (north), Penn Avenue South (east), West 54th Street (south), and France Avenue South (west). It borders Linden Hills to the north, Lynnhurst to the east, Armatage to the south, and the suburb of Edina to the west." },
                ]}
              />
            </ArticleSection>

            {/* Closing */}
            <ClosingSection
              title="What Makes Fulton Irreplaceable"
              paragraphs={[
                "There are neighborhoods in Minneapolis with more energy, more edge, more diversity, more nightlife, more novelty. Fulton isn't competing with those places. What it offers is something harder to manufacture: the feeling that a neighborhood has been loved consistently, by many people, over a long time, and that the love has accumulated into something physical — in the quality of the trees, the care of the houses, the persistence of the farmers market, the fact that people still pack the Bandshell lawn on a Tuesday night for a free concert, just like they did when the street railway company first strung up lanterns above the lake in the 1880s.",
                "Fulton isn't perfect, and it's honest enough not to pretend it is. But for the people who live here — the ones who shovel their neighbor's walk without being asked, who know the barista at the coffee shop, who can hear the Pops Orchestra from their backyard — it's close enough to perfect that the distinction doesn't often come up.",
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
