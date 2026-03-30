import Link from "next/link";
import type { NeighborhoodGuide } from "@/lib/content-loader";
import {
  ArticleSection,
  ArticleSubsection,
  Prose,
  ImageSlot,
  ProtectedImage,
  StatsBox,
  PlaceCardComponent,
  Quote,
  FaqSection,
  ClosingSection,
  CtaBlock,
} from "@/components/NeighborhoodArticle";

const data: NeighborhoodGuide["data"] = {
  meta: {
    title: "Lowry Hill, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Lowry Hill, Minneapolis — homes, history, Walker Art Center, historic mansions, real estate, restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Lowry Hill",
  deck: "Minneapolis at its most established — where the Walker Art Center sits on one hill, historic mansions line the streets below, and the city's cultural and residential ambitions have been intertwined since the Gilded Age.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Lowry Hill?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Lowry Hill" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Lowry Hill, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,600", label: "Residents (Niche / US Census)" },
      { value: "$500K–$1.2M+", label: "Median home sale price range (2025 data)" },
      { value: "30 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.5 sq mi", label: "Neighborhood area" },
      { value: "1880s–1920s", label: "Era most homes were built" },
      { value: "5 min", label: "Drive to downtown Minneapolis" },
      { value: "80", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Lowry Hill a good neighborhood in Minneapolis?",
      answer:
        "Yes. Lowry Hill is one of the most prestigious neighborhoods in Minneapolis — historic architecture, the Walker Art Center, proximity to both downtown and the Chain of Lakes, and the kind of established residential character that's difficult to replicate. It's expensive, quiet, and architecturally significant.",
    },
    {
      question: "Is Lowry Hill, Minneapolis safe?",
      answer:
        "Lowry Hill is generally safe, with violent crime rates below the city average. Property crime — vehicle break-ins, catalytic converter thefts, and occasional residential burglary — has been a concern in recent years, partly due to the neighborhood's proximity to downtown and Hennepin Avenue. Overall, the safety profile is strong for an urban neighborhood.",
    },
    {
      question: "What is Lowry Hill, Minneapolis known for?",
      answer:
        "Lowry Hill is known for the Walker Art Center and Minneapolis Sculpture Garden, its collection of historic mansions and architecturally significant homes (many dating to the 1880s–1920s), its hilltop location with views of downtown, and its role as one of the city's most affluent and established residential neighborhoods.",
    },
    {
      question: "How much do homes cost in Lowry Hill, Minneapolis?",
      answer:
        "Lowry Hill is one of the most expensive neighborhoods in Minneapolis. Home sale prices range widely — from condos and smaller homes around $300,000–$500,000 to historic mansions and large single-family homes that regularly exceed $1 million. The median sits well above the citywide average.",
    },
    {
      question: "Where exactly is Lowry Hill in Minneapolis?",
      answer:
        "Lowry Hill is in central Minneapolis, bounded roughly by I-394 to the north, Hennepin Avenue to the east, Lake of the Isles and the Kenilworth Trail to the south and west. It sits immediately west of downtown, on the hill that gives the neighborhood its name.",
    },
    {
      question: "What is the Walker Art Center?",
      answer:
        "The Walker Art Center is one of the most visited modern and contemporary art museums in the United States, located on the northern edge of Lowry Hill. The adjacent Minneapolis Sculpture Garden — featuring Claes Oldenburg's iconic Spoonbridge and Cherry — is one of the largest urban sculpture gardens in the country. Together, they make Lowry Hill one of the cultural anchors of the Twin Cities.",
    },
    {
      question: "What schools serve Lowry Hill, Minneapolis?",
      answer:
        "Lowry Hill does not have its own neighborhood elementary school within its boundaries. Families typically attend Kenwood Elementary or participate in Minneapolis's magnet school system. High school destinations include Southwest Senior High School and other options across the district. Many Lowry Hill families use private schools, including Blake, Breck, and the International School of Minnesota.",
    },
    {
      question: "Is Lowry Hill walkable?",
      answer:
        "Very. Lowry Hill earns a Walk Score of 80 and a Bike Score of 90, reflecting its central location, proximity to Hennepin Avenue commercial life, access to the lakes and trails, and connections to downtown. The hills themselves can make winter walking challenging, but the overall walkability is excellent by Minneapolis standards.",
    },
    {
      question: "How is Lowry Hill different from Kenwood?",
      answer:
        "Lowry Hill and Kenwood are adjacent and share a similarly affluent character, but Lowry Hill is more urban and more connected to downtown, while Kenwood is more lake-oriented and residential. Lowry Hill has the Walker Art Center, Hennepin Avenue, and a denser mix of housing including apartments and condos. Kenwood has Lake of the Isles and a more exclusively single-family character.",
    },
    {
      question: "How is Lowry Hill different from Lowry Hill East?",
      answer:
        "Despite the similar names, Lowry Hill and Lowry Hill East (often called 'the Wedge') are quite different. Lowry Hill is affluent, quiet, and architecturally historic. Lowry Hill East is denser, younger, more rental-heavy, and has a livelier nightlife and commercial scene along Hennepin and Lyndale. They share a boundary along Hennepin Avenue but have distinct identities.",
    },
  ],
  nearby: [
    { name: "Kenwood", slug: "kenwood", description: "Lake of the Isles and quiet, affluent residential streets" },
    { name: "Lowry Hill East", slug: "lowry-hill-east", description: "The Wedge — denser, younger, and more commercial" },
    { name: "Cedar - Isles - Dean", slug: "cedar-isles-dean", description: "Chain of Lakes trail access and lakeside condos" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "Village feel with Wirth Park and Cedar Lake" },
    { name: "East Isles", slug: "east-isles", description: "Lake of the Isles and Uptown proximity" },
    { name: "Downtown West", slug: "downtown-west", description: "The western edge of the downtown core" },
  ],
  closing: {
    title: "What Makes Lowry Hill Worth Knowing",
    paragraphs: [
      "Lowry Hill is Minneapolis at its most cultivated — the neighborhood where the city's moneyed ambitions and cultural aspirations have always overlapped. The Walker Art Center on the hill, the mansions on the slopes below, the Sculpture Garden in the foreground, the skyline behind — it's a composition that looks deliberate because, in a real sense, it is. The people who built these houses wanted to live near the center of things while remaining slightly above them, and a century later, that's still the pitch.",
      "It's not a neighborhood for everyone. The price of entry is high, the character is formal, and the social codes — while never spoken aloud — are real. But for the people who value architectural heritage, cultural proximity, and the particular pleasure of living in a place that has looked essentially the same since the McKinley administration, Lowry Hill delivers something that no amount of new construction can replicate: the weight of time, the patina of permanence, and a very good view.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There&apos;s a particular view from the top of Lowry Hill on a clear
          October evening when the sun is going down behind you and the
          Minneapolis skyline is lighting up ahead — the IDS Center catching
          the last of the daylight, the Foshay Tower glowing amber, the cranes
          of whatever they&apos;re building next reaching into the dusk — and
          below you, on the hillside, the mansions and the mature elms and the
          winding streets that have looked more or less the same since the
          lumber barons built them in the 1890s. The Walker Art Center sits
          behind you on the ridge, its Spoonbridge and Cherry just visible
          over the garden wall. A couple is walking a greyhound on the
          sidewalk. Someone has left a light on in a third-floor turret.
          This is Lowry Hill at its most elemental — old money, good bones,
          and a view that reminds you why the people who could have lived
          anywhere in Minneapolis chose to live here.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/lowry-hill/hero.webp"
        alt="Historic mansions along a tree-lined street in the Lowry Hill neighborhood of Minneapolis"
        caption="Lowry Hill's historic residential streets"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Lowry Hill, Minneapolis?">
        <Prose>
          <p>
            Lowry Hill is a small, affluent neighborhood in central Minneapolis,
            perched on the hill that gives it its name — a glacial ridge that
            rises above the western edge of downtown and slopes down toward
            Lake of the Isles and the Chain of Lakes to the south and west.
            It covers roughly half a square mile and is home to approximately
            3,600 residents. The neighborhood is bounded roughly by I-394 to
            the north, Hennepin Avenue to the east, the Kenilworth Trail and
            Lake of the Isles to the south and west, with{" "}
            <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
              Kenwood
            </Link>{" "}
            to the west and{" "}
            <Link href="/neighborhoods/lowry-hill-east" className="text-[#2a9d8f] hover:underline">
              Lowry Hill East
            </Link>{" "}
            (the Wedge) across Hennepin to the east.
          </p>
          <p>
            The neighborhood&apos;s defining features are its topography, its
            architecture, and its anchor institution. The hill itself provides
            the elevation that gives many homes views of downtown, the lakes,
            or both. The architecture — a concentration of late-19th- and
            early-20th-century mansions, Queen Annes, Tudors, and Colonial
            Revivals — makes Lowry Hill one of the most architecturally
            significant residential neighborhoods in the Upper Midwest. And
            the Walker Art Center, sitting on the hill&apos;s northern ridge,
            gives the neighborhood a cultural gravity that extends well beyond
            its borders.
          </p>
          <p>
            Lowry Hill is named for Thomas Lowry, the streetcar magnate who
            developed the area and built his own mansion here in the 1870s.
            The neighborhood has been associated with Minneapolis&apos;s
            business and civic elite ever since — a reputation that persists
            today, even as the neighborhood&apos;s demographic has broadened
            somewhat to include younger professionals, downsizers, and
            families alongside the old-guard residents.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Lowry Hill Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/lowry-hill/neighborhood-sign.webp"
          alt="Lowry Hill neighborhood sign in Minneapolis"
          caption="The Lowry Hill neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Lowry Hill History & Origins">
        <Prose>
          <p>
            Before European settlement, this high ground was Dakota homeland —
            part of the landscape centered around the sacred confluence at
            Bdote and the lakes and waterways that defined the region. The
            Dakota people lived across this territory for centuries before
            treaties and forced removal in the 1850s and 1860s opened the land
            to European settlement. The hill that would become Lowry Hill
            offered commanding views of the surrounding prairie, lakes, and
            river corridor — qualities that would make it equally attractive
            to the European settlers who arrived next.
          </p>
          <p>
            Thomas Lowry, a lawyer-turned-streetcar-magnate, is the
            neighborhood&apos;s namesake and its founding figure. Lowry
            arrived in Minneapolis in the 1860s and built his fortune on the
            Twin Cities&apos; streetcar system — the Minneapolis Street
            Railway Company, which he controlled for decades. He built his
            own mansion on the hill in the 1870s, and other wealthy
            Minneapolitans followed. By the 1890s and early 1900s, Lowry Hill
            was the address of choice for the city&apos;s lumber barons,
            flour millers, bankers, and civic leaders. The houses they built
            — grand Queen Annes, Romanesque Revivals, Colonial Revivals, and
            Tudors — still stand, and they give the neighborhood its
            architectural character.
          </p>
          <p>
            The Walker Art Center was established in 1927 (building on T.B.
            Walker&apos;s private collection, which had been open to the
            public since 1879) and has anchored the neighborhood&apos;s
            cultural identity ever since. The Minneapolis Sculpture Garden,
            opened in 1988, expanded the Walker&apos;s footprint and created
            one of the most recognizable public spaces in the Twin Cities.
            The Spoonbridge and Cherry — Claes Oldenburg and Coosje van
            Bruggen&apos;s 1988 sculpture — became an icon of Minneapolis
            itself, not just of the neighborhood.
          </p>
          <p>
            The construction of I-394 in the 1980s reshaped Lowry Hill&apos;s
            northern edge, replacing residential blocks with a highway trench
            that now separates the neighborhood from Bryn Mawr and the areas
            to the north. The highway brought noise and visual disruption but
            also reinforced the neighborhood&apos;s sense of being a bounded,
            self-contained enclave. Today, Lowry Hill carries its history
            with visible pride — the mansions are maintained, the tree canopy
            is thick, and the Walker continues to draw hundreds of thousands
            of visitors annually.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Lowry Hill">
        <Prose>
          <p>
            Living in Lowry Hill means living in one of the most beautiful
            residential settings in Minneapolis — and paying for the
            privilege. The streets wind up and over the hill, lined with
            mature elms and oaks that form a canopy thick enough to block the
            sky in summer. The houses range from genuinely grand mansions to
            stately Colonials to well-proportioned Tudors, with the occasional
            apartment building or condominium complex mixed in. The
            architecture is the neighborhood&apos;s primary currency — people
            live here because the houses are extraordinary, the setting is
            dramatic, and the proximity to both downtown and the lakes creates
            a convenience that&apos;s hard to match.
          </p>
          <p>
            The neighborhood&apos;s character is quieter and more formal than
            its location might suggest. Lowry Hill is steps from Hennepin
            Avenue and the energy of Uptown, but the interior streets feel
            removed from all of it — hushed, shaded, and almost suburban in
            their pace. Dog walkers, joggers heading to the lakes, and the
            occasional construction crew working on a renovation are the main
            sources of daytime activity. The social culture is polite,
            private, and relatively reserved — this is not a block-party
            neighborhood in the same way that Southwest Minneapolis&apos;s
            family neighborhoods are.
          </p>
          <p>
            The demographic has shifted gradually over the decades. The
            original lumber-baron families are long gone, replaced by a mix
            of established professionals, downsizers from the suburbs, young
            executives who want a walkable urban setting with architectural
            character, and a contingent of long-term renters in the
            neighborhood&apos;s apartment buildings. The neighborhood is
            predominantly white and affluent, though the housing mix — which
            includes condos, apartments, and duplexes alongside the mansions
            — creates more economic range than the reputation might suggest.
          </p>
          <p>
            The Walker Art Center and Sculpture Garden give Lowry Hill a
            cultural anchor that most neighborhoods lack. The museum&apos;s
            programming — film screenings, lectures, exhibitions, outdoor
            events in the garden — is part of the fabric of life here.
            Residents walk through the Sculpture Garden the way residents of
            other neighborhoods walk through their local park. The Spoonbridge
            and Cherry is not a tourist attraction to them — it&apos;s the
            view from the end of the block.
          </p>
        </Prose>
        <Quote
          text="I moved here for the house and stayed for the view. On a clear evening, I can see the skyline from my front porch and the lake from the back. There&apos;s no other neighborhood in Minneapolis where that&apos;s possible."
          cite="Lowry Hill homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Lowry Hill Food, Drink & Local Spots">
        <Prose>
          <p>
            Lowry Hill&apos;s dining scene benefits from its proximity to
            Hennepin Avenue, Uptown, and downtown — the neighborhood itself
            is primarily residential, but the commercial corridors on its
            edges offer strong options within walking distance.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Walker Art Center", tag: "Museum & Cultural Venue", price: "$$", url: "https://walkerart.org", description: "725 Vineland Place. One of the most important contemporary art museums in the United States. The galleries, the Sculpture Garden, the film program, the shop — all of it is walkable from the neighborhood and functions as Lowry Hill's cultural living room." }} />
          <PlaceCardComponent place={{ name: "Kenwood Restaurant", tag: "American Fine Dining", price: "$$$", description: "2115 W. 21st Street. A neighborhood institution at the Lowry Hill–Kenwood border. Upscale American cuisine in a converted house, popular for special occasions and the kind of dinner where you linger over wine." }} />
          <PlaceCardComponent place={{ name: "Hennepin Avenue Corridor", tag: "Dining & Entertainment", description: "The stretch of Hennepin Avenue running through and alongside Lowry Hill offers a range of dining and nightlife — from casual to upscale. This is where Lowry Hill meets the energy of Uptown and the Wedge." }} />
          <PlaceCardComponent place={{ name: "Kowalski's Market", tag: "Grocery", price: "$$", description: "Hennepin Avenue. An upscale independent grocery that serves as a go-to for Lowry Hill residents. Well-curated, locally focused, and walkable from most of the neighborhood." }} />
          <PlaceCardComponent place={{ name: "Café Lurcat", tag: "Contemporary American", price: "$$$", url: "https://cafelurcat.com", description: "1624 Harmon Place. Just across the border into downtown — a sophisticated restaurant with a strong wine program and one of the better dining rooms in the city. Close enough for Lowry Hill residents to consider it a neighborhood spot." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Lowry Hill&apos;s position between downtown, Uptown, and the
              lakes means that the dining options extend well beyond the
              neighborhood&apos;s boundaries. The restaurants and bars along
              Hennepin, Lyndale, and in the North Loop are all within easy
              reach. For everyday groceries, Kowalski&apos;s on Hennepin and
              the Lunds &amp; Byerlys on Hennepin in Uptown are the primary
              options. The Walker Art Center&apos;s events and its gallery
              restaurant add another dimension to the neighborhood&apos;s
              cultural dining life.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Lowry Hill">
        <Prose>
          <p>
            Lowry Hill&apos;s outdoor access is defined by the Sculpture
            Garden, the lakes, and the trail connections that link them.
          </p>
        </Prose>
        <ArticleSubsection title="Minneapolis Sculpture Garden">
          <Prose>
            <p>
              The Minneapolis Sculpture Garden — adjacent to the Walker Art
              Center — is one of the largest urban sculpture gardens in the
              country. The Spoonbridge and Cherry is the headliner, but the
              garden&apos;s collection extends across 11 acres and includes
              more than 40 works. For Lowry Hill residents, the garden
              functions as a neighborhood park — a place to walk, sit, meet
              friends, and encounter art without making an event of it. The
              2017 renovation refreshed the space and added new works, and
              the garden remains one of Minneapolis&apos;s most distinctive
              public assets.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Lake of the Isles">
          <Prose>
            <p>
              Lake of the Isles borders Lowry Hill to the south and west,
              and the 2.8-mile loop around the lake is one of the most
              popular walking and running routes in Minneapolis. The lake
              is more ornamental than recreational — no swimming beach, no
              boat launch — but its value as a daily-use green space is
              enormous. The homes along the lakeshore include some of the
              most architecturally significant residences in the city. In
              winter, the lake freezes and becomes a skating, skiing, and
              walking surface.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Chain of Lakes & Trail System">
          <Prose>
            <p>
              From Lowry Hill, the Chain of Lakes trail system connects Lake
              of the Isles to Bde Maka Ska, Cedar Lake, and Lake Harriet —
              an interconnected loop that&apos;s one of the great urban trail
              systems in the country. The Kenilworth Trail runs along the
              neighborhood&apos;s western edge, providing a car-free corridor
              between the lakes and points north. The Bike Score of 90
              reflects genuinely excellent cycling infrastructure and
              connectivity.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Lowry Hill Schools">
        <Prose>
          <p>
            Lowry Hill does not have its own neighborhood elementary school
            within its boundaries — a function of the neighborhood&apos;s
            small size and the density of surrounding options. Families
            typically attend Kenwood Elementary, which serves the broader
            Kenwood–Lowry Hill area and is well-regarded.
          </p>
          <p>
            Middle and high school options depend on the Minneapolis Public
            Schools assignment and magnet system. Southwest Senior High School
            is a common high school destination. The neighborhood&apos;s
            affluence also means that private school usage is higher here than
            in most Minneapolis neighborhoods — Blake, Breck, the
            International School of Minnesota, and various parochial schools
            draw a significant share of Lowry Hill families.
          </p>
          <p>
            The school picture in Lowry Hill is less central to the
            neighborhood&apos;s identity than it is in places like Kenny or
            Armatage, where the elementary school functions as a community
            anchor. Here, the anchors are the Walker, the architecture, and
            the lakes — and families navigate the school landscape with more
            individual variation and less neighborhood-wide cohesion.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Lowry Hill Real Estate & Housing">
        <Prose>
          <p>
            Lowry Hill is one of the most expensive neighborhoods in
            Minneapolis, and the price range reflects the architectural
            significance and locational advantages that define the area. Home
            sale prices range from roughly $300,000 for condos and smaller
            units to well over $1 million for the historic mansions and larger
            single-family homes. The median sits well above the citywide
            average.
          </p>
          <p>
            The housing stock is exceptionally diverse for a neighborhood this
            small. Grand Victorian and Edwardian mansions sit alongside
            Tudors, Colonials, and Craftsmans. Apartment buildings and condo
            complexes, some mid-century and some newer, provide density along
            the edges. Duplexes and triplexes are scattered through the
            interior. This mix means that Lowry Hill accommodates a broader
            range of household types and incomes than its reputation as a
            &quot;mansion neighborhood&quot; might suggest — though the
            mansions are the ones that define the streetscape and set the tone.
          </p>
          <p>
            Homes take longer to sell here than in most Minneapolis
            neighborhoods — an average of about 30 days, reflecting the
            higher price points and the more selective buyer pool. The market
            is not as frenzied as the family-oriented Southwest neighborhoods,
            but well-priced properties in good condition still move quickly.
          </p>
        </Prose>
        <ArticleSubsection title="The Mansion Factor">
          <Prose>
            <p>
              The historic mansions are what make Lowry Hill architecturally
              extraordinary — and they&apos;re also what make the real estate
              market here unusual. Maintaining a 6,000-square-foot Queen Anne
              from 1895 is not cheap. Heating bills, restoration costs,
              historic-preservation requirements, and the sheer scale of the
              properties create carrying costs that go well beyond the
              mortgage. Buyers at this level tend to be either deeply
              committed to historic preservation or willing to invest heavily
              in renovation. The result is that some of the neighborhood&apos;s
              most impressive homes have been meticulously maintained, while
              others have cycled through periods of deferred maintenance and
              ambitious restoration.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="You&apos;re not buying a house in Lowry Hill. You&apos;re buying a piece of Minneapolis history — and then spending the rest of your life maintaining it." cite="Lowry Hill homeowner and historic preservation advocate, 2024" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Lowry Hill">
        <Prose>
          <p>
            Lowry Hill earns a Walk Score of 80 and a Bike Score of 90 —
            among the highest in Minneapolis. The neighborhood&apos;s central
            location, proximity to Hennepin Avenue, and direct trail
            connections to downtown and the lakes make it one of the most
            accessible neighborhoods in the city for non-car transportation.
          </p>
          <p>
            Walking to downtown is feasible — about 15 to 20 minutes on
            foot, depending on where you&apos;re starting from. The Kenilworth
            Trail and Cedar Lake Trail provide paved, off-road bike routes
            to downtown, the lakes, and points beyond. Bus service along
            Hennepin Avenue is frequent and connects to downtown, Uptown, and
            the broader Metro Transit system.
          </p>
          <p>
            By car, downtown is five minutes. I-394 provides fast access to
            the western suburbs. The neighborhood&apos;s hilly terrain and
            winding streets make driving within Lowry Hill slightly more
            complex than navigating a grid neighborhood — but the payoff
            is the scenic quality of the drive itself. Parking is generally
            available on residential streets, though visitors to the Walker
            and Sculpture Garden can create competition on event days.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Lowry Hill&apos;s fundamental character — affluent, historic,
            culturally anchored — has been stable for over a century. But
            stability at this level comes with its own set of tensions.
          </p>
        </Prose>
        <ArticleSubsection title="Preservation vs. Modernization">
          <Prose>
            <p>
              The historic homes that define Lowry Hill are beautiful,
              significant, and expensive to maintain. Some owners invest
              heavily in faithful restoration. Others want to modernize
              interiors while preserving exteriors. Still others look at a
              deteriorating mansion and see a teardown opportunity. The
              neighborhood doesn&apos;t have a formal historic district
              designation for all of its blocks, which means the protections
              for the architectural character are uneven. The tension between
              preservation and market pressure is ongoing and occasionally
              contentious.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Hennepin Avenue Edge">
          <Prose>
            <p>
              Hennepin Avenue is Lowry Hill&apos;s eastern boundary and its
              most active edge — a commercial corridor that brings energy,
              foot traffic, and some of the less desirable aspects of urban
              life. The blocks closest to Hennepin experience more noise,
              more activity, and more of the homelessness and social-service
              proximity that affects the broader Hennepin corridor. This
              creates a noticeable gradient within the neighborhood — the
              hilltop streets are quiet and insulated; the blocks near
              Hennepin are more urban and more exposed.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Demographic Homogeneity">
          <Prose>
            <p>
              Lowry Hill is predominantly white and affluent. The
              neighborhood&apos;s high housing costs and historic character
              create barriers to entry that limit demographic diversity. This
              is not unique to Lowry Hill — it&apos;s a pattern across many
              of Minneapolis&apos;s most desirable neighborhoods — but the
              concentration of wealth and whiteness here is particularly
              pronounced. The neighborhood&apos;s apartment buildings and
              condos provide some economic range, but the overall character
              remains homogeneous.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Property Taxes">
          <Prose>
            <p>
              High property values mean high property tax assessments, and
              some long-term residents — particularly those on fixed incomes —
              feel the pressure of rising taxes on homes they&apos;ve owned
              for decades. A house assessed at $1.2 million generates a
              significant annual tax bill, and for homeowners whose income
              hasn&apos;t kept pace with their property value, the math
              eventually forces a decision. This dynamic contributes to
              turnover among long-term residents and concentrates ownership
              among those who can afford both the purchase price and the
              ongoing costs.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Lowry Hill FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
