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
    title: "Diamond Lake, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Diamond Lake, Minneapolis — Pearl Park, quiet residential streets, proximity to Nokomis and Minnehaha Creek, schools, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Diamond Lake",
  deck: "Anchored by Pearl Park and bordered by Minnehaha Creek, Diamond Lake is one of those south Minneapolis neighborhoods that barely registers on the city's consciousness — a quiet, affordable, deeply residential pocket where families buy houses and stay for decades, where the park does the heavy lifting, and where the lake the neighborhood is named for is small enough that most people don't know it exists.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Diamond Lake?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Diamond Lake" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Diamond Lake, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,000", label: "Residents (Niche / US Census)" },
      { value: "$290K–$420K", label: "Median home sale price range (2025 data)" },
      { value: "19 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.5 sq mi", label: "Neighborhood area" },
      { value: "1920s–50s", label: "Era most homes were built" },
      { value: "12–18 min", label: "Drive to downtown or MSP airport" },
      { value: "60", label: "Walk Score" },
      { value: "76", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Diamond Lake a good neighborhood in Minneapolis?",
      answer:
        "Yes. Diamond Lake is a quiet, stable, family-oriented neighborhood with good park access (Pearl Park), proximity to Minnehaha Creek trails, and housing prices that are among the most accessible in south Minneapolis for single-family buyers. It's not exciting — it's not trying to be. It's a neighborhood for people who want the basics done well.",
    },
    {
      question: "Is Diamond Lake, Minneapolis safe?",
      answer:
        "Diamond Lake is one of the safer neighborhoods in south Minneapolis. Violent crime is uncommon. Property crime rates are comparable to other quiet residential neighborhoods — vehicle break-ins and package theft occur but are not pervasive. The neighborhood's deeply residential character and lack of through-traffic contribute to an overall sense of calm.",
    },
    {
      question: "Is there actually a Diamond Lake?",
      answer:
        "Yes, though it might not match your expectations. Diamond Lake is a small lake — really more of a large pond — located near Pearl Park in the western portion of the neighborhood. It's not a swimming lake or a destination lake. It's a quiet body of water surrounded by parkland, used mainly for fishing, bird-watching, and looking at from nearby benches. If you're imagining Lake Harriet, recalibrate significantly.",
    },
    {
      question: "How much do homes cost in Diamond Lake?",
      answer:
        "Median home sale prices in Diamond Lake range from roughly $290,000 to $420,000. This makes it one of the more affordable neighborhoods in south Minneapolis for single-family buyers. Entry-level bungalows can be found in the high $200,000s; updated three-bedroom homes typically sell in the $350,000–$400,000 range.",
    },
    {
      question: "Where exactly is Diamond Lake in Minneapolis?",
      answer:
        "Diamond Lake is in the southwestern corner of south Minneapolis, bounded roughly by East 50th Street to the north, Nicollet Avenue to the east, Minnehaha Creek / East 54th Street to the south, and Portland Avenue to the west. It borders Hale to the east, Field and Tangletown to the north, and the suburb of Richfield to the south across the creek.",
    },
    {
      question: "What schools serve Diamond Lake?",
      answer:
        "Diamond Lake families are served by several Minneapolis Public Schools depending on address. Burroughs Community Ed and Kenny Elementary are common options. The middle school pipeline leads to Anthony Middle School, and the high school destination is Southwest Senior High School — an IB World School. The school pipeline is one of the stronger options in Minneapolis.",
    },
    {
      question: "Is Diamond Lake walkable?",
      answer:
        "Modestly. Diamond Lake earns a Walk Score of 60 — the neighborhood is almost entirely residential, with limited commercial options within its borders. Daily errands require a car or bike for most addresses. The Bike Score of 76 reflects decent connections to the Minnehaha Creek trail and the broader south Minneapolis bike network.",
    },
    {
      question: "What is Pearl Park?",
      answer:
        "Pearl Park is Diamond Lake's primary park — a well-maintained neighborhood park with a recreation center, playground, athletic fields, basketball courts, and open green space. The rec center runs year-round programming for youth and adults. In winter, the park maintains an ice skating rink. Pearl Park serves as the neighborhood's gathering place and community anchor.",
    },
    {
      question: "How is Diamond Lake different from Hale?",
      answer:
        "Diamond Lake and Hale are adjacent neighborhoods with very similar character — quiet, residential, family-oriented, and affordable. The main geographic difference: Diamond Lake is to the west, closer to Portland Avenue and Pearl Park; Hale is to the east, closer to Cedar Avenue and Lake Nokomis. Both border Minnehaha Creek to the south. The differences are subtle enough that many residents think of them as a single area.",
    },
    {
      question: "How far is Diamond Lake from Lake Nokomis?",
      answer:
        "Lake Nokomis is approximately 1.5 miles east of Diamond Lake's center — a reasonable bike ride but a longer walk. Hale, to the east, is slightly closer to the lake. Diamond Lake residents use Nokomis for recreation but are less oriented toward the lake than the neighborhoods immediately surrounding it.",
    },
  ],
  nearby: [
    { name: "Hale", slug: "hale", description: "Similar character, closer to Lake Nokomis" },
    { name: "Field", slug: "field", description: "Affordable south Minneapolis along Nicollet" },
    { name: "Tangletown", slug: "tangletown", description: "Winding streets and architectural character to the north" },
    { name: "Kenny", slug: "kenny", description: "Small, quiet Southwest Minneapolis to the northwest" },
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis and the surrounding park system" },
  ],
  closing: {
    title: "What Makes Diamond Lake Worth Knowing",
    paragraphs: [
      "Diamond Lake is the kind of neighborhood that disappears into its own competence. The park works. The houses are solid. The creek provides a green edge. The school pipeline is strong. The streets are quiet enough that you can hear birds in the morning and crickets at night — sounds that feel almost rural until you remember you're ten minutes from downtown Minneapolis. Nothing about Diamond Lake is designed to attract attention, and that's not a failure of imagination. It's a choice.",
      "In a city where neighborhoods increasingly define themselves through commercial activity, cultural scenes, and brand identity, Diamond Lake persists as a place where the identity is simply residential. People live here. They raise families, maintain their homes, use the park, bike to the creek, and go about the business of ordinary life without any particular need for the rest of the city to notice. That's either boring or beautiful, depending on what you're looking for. Diamond Lake knows which one it is, and it's not interested in convincing anyone otherwise.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There&apos;s a moment on a Sunday morning in May when Pearl Park
          is exactly what a neighborhood park should be. The playground has
          a few kids and a parent scrolling a phone on the bench. The ball
          field is empty but mowed, waiting for Tuesday&apos;s little league
          game. Someone is walking a slow loop around the path with a coffee
          and a dog who stops at every tree. The rec center is closed — it&apos;s
          Sunday — but through the windows you can see the signs for next
          week&apos;s youth programming taped to the inside of the glass. South
          of the park, the neighborhood spreads out in a grid of bungalows
          and Cape Cods and the occasional ranch house, their yards deep and
          their trees tall enough to make the streets feel like corridors
          through a canopy. A garage door opens. A sprinkler starts. Someone
          is washing a car in a driveway with the unhurried attention of a
          person who has nowhere to be and is completely fine with that. This
          is Diamond Lake — a neighborhood so quiet that describing it feels
          almost redundant, because the description is the same as the
          experience: houses, park, trees, creek, calm. That&apos;s it.
          That&apos;s everything.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/diamond-lake/hero.webp"
        alt="Pearl Park and surrounding residential streets in Diamond Lake, Minneapolis"
        caption="Pearl Park on a spring morning — Diamond Lake's living room and community anchor"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Diamond Lake, Minneapolis?">
        <Prose>
          <p>
            Diamond Lake is a residential neighborhood in the southwestern
            corner of south Minneapolis, bounded roughly by East 50th Street
            to the north, Nicollet Avenue to the east, Minnehaha Creek and
            East 54th Street to the south, and Portland Avenue to the west.
            It covers approximately half a square mile and is home to around
            3,000 residents. To the east lies{" "}
            <Link href="/neighborhoods/hale" className="text-[#2a9d8f] hover:underline">
              Hale
            </Link>
            . To the north,{" "}
            <Link href="/neighborhoods/field" className="text-[#2a9d8f] hover:underline">
              Field
            </Link>{" "}
            and the southern edge of{" "}
            <Link href="/neighborhoods/tangletown" className="text-[#2a9d8f] hover:underline">
              Tangletown
            </Link>
            . To the south, across Minnehaha Creek, the suburb of Richfield
            begins.
          </p>
          <p>
            The neighborhood takes its name from Diamond Lake — a small body
            of water near Pearl Park that, in the grand tradition of
            Minneapolis lake naming, oversells itself slightly. Diamond Lake
            is more pond than lake, a modest body of water surrounded by
            parkland that serves as a quiet green space rather than a
            recreational destination. If you&apos;re imagining Lake Harriet
            or Lake Nokomis, stop. Diamond Lake is the introvert of the
            Minneapolis lake family — small, quiet, and perfectly content to
            be overlooked.
          </p>
          <p>
            The neighborhood surrounding the lake matches its temperament.
            Diamond Lake is deeply, almost exclusively residential — a grid
            of single-family homes on deep lots, with mature trees forming a
            canopy over streets that carry almost no through-traffic. There
            is no commercial center, no restaurant row, no destination that
            draws visitors from other neighborhoods. What there is, instead,
            is a neighborhood that has perfected the art of being ordinary
            in the best possible sense: solid houses, good park, strong school
            pipeline, affordable prices, and the kind of quiet that feels
            like a luxury in a city that keeps getting louder.
          </p>
          <p>
            Diamond Lake is often grouped with its neighbors Hale and Page
            under the umbrella of the Hale-Page-Diamond Lake community
            association — a practical acknowledgment that these three small,
            similar neighborhoods share enough DNA to organize together.
            The differences between them are geographic rather than
            characterological: Diamond Lake is the western piece, Hale the
            eastern, and the two share a border along Nicollet Avenue with
            nearly identical housing stock, demographics, and quality of life.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Diamond Lake Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/diamond-lake/neighborhood-sign.webp"
          alt="Diamond Lake neighborhood sign in Minneapolis"
          caption="The Diamond Lake neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Diamond Lake History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part
            of the vast territory centered around Bdote, the sacred confluence
            of the Mississippi and Minnesota Rivers. Minnehaha Creek, which
            runs along Diamond Lake&apos;s southern edge, was part of the
            Dakota cultural and ecological landscape for centuries before it
            became a line on a municipal map. The small lake that gives the
            neighborhood its name was part of this landscape too — one of the
            many small bodies of water that dotted the prairies and woodlands
            of what is now south Minneapolis.
          </p>
          <p>
            European settlement in this far-southwestern corner of Minneapolis
            came relatively late. While the lake neighborhoods to the north
            and the riverfront areas to the east were developing in the 1880s
            and 1890s, the flat farmland around Diamond Lake remained
            agricultural well into the 20th century. This was the southern
            frontier of Minneapolis&apos;s urban expansion — the last blocks
            to be platted, the last streets to be paved, the last houses to
            be built before the city gave way to the first-ring suburb of
            Richfield across the creek.
          </p>
          <p>
            The neighborhood&apos;s residential development happened primarily
            between the 1920s and the early 1950s. The earlier homes — 1920s
            Craftsman bungalows, 1930s Cape Cods — cluster in the northern
            portion of the neighborhood, closer to 50th Street. The later
            homes — Cape Cods, ranches, and the occasional split-level from
            the 1940s and early 1950s — occupy the southern blocks closer to
            Minnehaha Creek. This north-to-south chronology gives Diamond
            Lake a subtle gradient: the houses get newer and slightly larger
            as you move toward the creek, reflecting the city&apos;s southward
            expansion over three decades.
          </p>
          <p>
            Pearl Park — the neighborhood&apos;s anchor — was established
            during this development period. Named for a prominent Minneapolis
            family, the park gave Diamond Lake a center of gravity that the
            purely residential blocks couldn&apos;t provide on their own.
            The addition of a recreation center, athletic fields, and a
            playground over the decades transformed Pearl Park from a green
            space into a genuine civic institution — the place where neighbors
            became a neighborhood.
          </p>
          <p>
            Diamond Lake&apos;s history since mid-century is a history of
            stability — remarkable in its consistency and unremarkable in its
            events. No highway cut through the neighborhood. No urban renewal
            program displaced residents. No commercial decline hollowed out a
            main street (there was no main street to hollow out). The houses
            aged, the trees grew, the families turned over gradually, and the
            neighborhood maintained its character through the simple
            persistence of people who liked living here and saw no reason to
            change. This continuity is Diamond Lake&apos;s most defining
            historical feature — not a dramatic story, but a durable one.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Diamond Lake">
        <Prose>
          <p>
            Living in Diamond Lake is an exercise in contentment — or
            boredom, depending on your temperament. The neighborhood offers
            almost nothing in the way of entertainment, dining, shopping, or
            cultural activity within its borders. What it offers, instead, is
            the preconditions for a peaceful domestic life: a quiet street,
            a solid house, a deep yard, a park within walking distance, trails
            along the creek, and neighbors who mind their own business in the
            Midwestern sense of the phrase — meaning they&apos;ll help you
            move a couch but won&apos;t ask why you&apos;re rearranging the
            living room.
          </p>
          <p>
            The neighborhood is heavily family-oriented. Young families buy
            here for the same reasons they buy in{" "}
            <Link href="/neighborhoods/hale" className="text-[#2a9d8f] hover:underline">
              Hale
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/kenny" className="text-[#2a9d8f] hover:underline">
              Kenny
            </Link>
            : the schools are strong, the park has programming, the house is
            affordable, and the streets are safe enough that kids can play
            outside without constant supervision. Older homeowners — some of
            whom have been here since the 1970s or 1980s — anchor the blocks
            with the kind of institutional memory that gives a neighborhood
            continuity. The turnover is gradual: someone retires, sells to a
            young family, and the cycle begins again.
          </p>
          <p>
            Pearl Park is the center of community life. The rec center runs
            youth sports, after-school programs, community events, and
            fitness classes. The playground fills with kids after school. The
            ball fields host little league in summer. The ice rink draws
            families in winter. If Diamond Lake has a town square, Pearl
            Park is it — the one place where the neighborhood congregates
            and recognizes itself as a community rather than a collection
            of individual households.
          </p>
          <p>
            The proximity to Minnehaha Creek adds a natural dimension that
            purely interior neighborhoods lack. The creek trail is walkable
            or bikeable from most addresses in Diamond Lake, and it provides
            a corridor that connects west toward the Chain of Lakes and east
            toward Minnehaha Falls. On a Saturday morning in June, the trail
            is full of joggers, dog walkers, and families on bikes — a
            shared amenity that gives Diamond Lake residents access to one
            of the best urban trail systems in the country without paying
            lakeside prices.
          </p>
          <p>
            The demographic mix has diversified modestly over the past two
            decades. Diamond Lake remains predominantly white and
            homeowning, but the neighborhood has become more varied than it
            was a generation ago — younger families from different backgrounds
            moving in as older residents move out. The change is gradual
            enough that it doesn&apos;t feel like a transformation, but it&apos;s
            visible in the school enrollment, the park usage, and the faces
            on the block.
          </p>
        </Prose>
        <Quote
          text="People ask what there is to do in Diamond Lake, and I tell them: nothing. That&apos;s the whole point. We moved here to stop doing things and start living. The park, the creek, the yard — that&apos;s plenty."
          cite="Diamond Lake resident, 10 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Diamond Lake Food, Drink & Local Spots">
        <Prose>
          <p>
            Diamond Lake is, without qualification, not a food neighborhood.
            The interior is residential, and the edges have only the barest
            commercial presence. Diamond Lake residents eat at home more than
            residents of most Minneapolis neighborhoods — not because they&apos;re
            philosophically committed to home cooking, but because the nearest
            restaurant requires a car or a real bike ride. Here&apos;s what&apos;s
            actually accessible.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Nicollet Avenue Corridor", tag: "Various", price: "$–$$", description: "The stretch of Nicollet Avenue along Diamond Lake's eastern border provides the most accessible dining options. Naviya's Thai Brasserie, Bull's Horn, and the various businesses along south Nicollet are within biking distance. This is Diamond Lake's borrowed restaurant row." }} />
          <PlaceCardComponent place={{ name: "Tangletown Gardens", tag: "Garden Center & Market", url: "https://www.tangletowngardens.com", description: "5353 Nicollet Ave. S. Just north of Diamond Lake's border. More than a garden center — it's a neighborhood institution with locally sourced groceries, prepared foods, and a gathering space. Diamond Lake residents treat it as their own." }} />
          <PlaceCardComponent place={{ name: "Nokomis Beach Coffee", tag: "Coffee Shop", price: "$", description: "Near Lake Nokomis, a bike ride east. The nearest dedicated coffee shop for many Diamond Lake residents. The fact that getting a latte requires a 10-minute bike ride tells you everything about Diamond Lake's commercial landscape." }} />
          <PlaceCardComponent place={{ name: "Sandcastle", tag: "Restaurant & Bar", price: "$$", description: "Near the Lake Nokomis swimming beach. Seasonal lakeside dining with a patio. A summer destination for Diamond Lake families who want to combine a lake outing with lunch." }} />
          <PlaceCardComponent place={{ name: "Portland Avenue Businesses", tag: "Various", description: "A handful of small businesses along Portland Avenue on Diamond Lake's western edge — a gas station, a convenience store, the occasional small restaurant. These are not destinations; they're the kind of functional commercial presence that keeps a neighborhood from being entirely self-contained." }} />
        </ArticleSubsection>

        <ArticleSubsection title="The Grocery Reality">
          <Prose>
            <p>
              Diamond Lake residents shop for groceries outside the
              neighborhood. The primary options are the Cub Foods and Aldi
              stores along the 494 corridor in Richfield (a short drive south
              across the creek), or the larger stores along Nicollet Avenue
              and American Boulevard. Tangletown Gardens fills some gaps with
              its market offerings, but for a full grocery run, you&apos;re
              driving. This is the most car-dependent aspect of daily life
              in Diamond Lake, and it&apos;s worth factoring in if car-free
              living is a priority.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Diamond Lake">
        <Prose>
          <p>
            Diamond Lake&apos;s outdoor access is its strongest amenity — a
            combination of Pearl Park, Minnehaha Creek, the small lake itself,
            and connections to the broader Minneapolis park system.
          </p>
        </Prose>
        <ArticleSubsection title="Pearl Park">
          <Prose>
            <p>
              Pearl Park is Diamond Lake&apos;s anchor — a 12-acre park that
              serves as the neighborhood&apos;s recreation center, gathering
              place, and green space. The park includes a recreation center
              with year-round programming, a playground, ball fields (baseball
              and softball), basketball courts, a wading pool, and open green
              space. Winter brings an ice skating rink that draws families
              from the surrounding blocks. The rec center runs youth sports
              leagues, after-school programs, summer day camps, and community
              events. Pearl Park is the reason Diamond Lake feels like a
              community — it&apos;s the one place where the neighborhood&apos;s
              residents come together regularly.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Diamond Lake (The Actual Lake)">
          <Prose>
            <p>
              Yes, there is an actual Diamond Lake. No, it&apos;s not what
              you&apos;re picturing. Diamond Lake is a small, shallow lake —
              more accurately described as a large pond — situated near Pearl
              Park. It&apos;s approximately 14 acres, surrounded by parkland,
              and used primarily for fishing (panfish, mainly) and
              bird-watching rather than swimming or boating. The lake is
              stocked by the Minnesota DNR and attracts a loyal group of
              anglers who appreciate its proximity and relative solitude.
              For a body of water that gives an entire neighborhood its
              name, Diamond Lake is remarkably unassuming — which, if you&apos;ve
              been paying attention, is entirely consistent with the
              neighborhood&apos;s character.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Minnehaha Creek">
          <Prose>
            <p>
              Minnehaha Creek runs along Diamond Lake&apos;s southern border,
              providing a green corridor with walking and biking trails. The
              creek trail connects east toward Lake Nokomis and Minnehaha
              Falls, and west toward the Chain of Lakes — putting Diamond
              Lake residents within biking distance of some of the best
              urban parkland in the country. The creek itself varies
              seasonally: high and flowing in spring, often reduced to a
              trickle by late summer. The corridor provides shade, green
              space, and a natural southern boundary that&apos;s far more
              pleasant than a highway or a commercial strip.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Lake Nokomis & Beyond">
          <Prose>
            <p>
              Lake Nokomis is about 1.5 miles east — accessible by bike via
              the creek trail or neighborhood streets. The lake offers beaches,
              a 2.7-mile loop trail, fishing, and winter activities. For
              Diamond Lake residents, Nokomis functions as the &quot;big
              lake&quot; — the one you bike to when you want a swim or a
              longer walk. The broader Minneapolis park system, including the
              Chain of Lakes and Minnehaha Falls, is accessible via the
              interconnected trail network. The outdoor access from Diamond
              Lake — despite its modest profile — is genuinely excellent.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Diamond Lake Schools">
        <Prose>
          <p>
            Diamond Lake benefits from one of the stronger school pipelines
            in south Minneapolis — a significant draw for the families who
            make up a large portion of the neighborhood&apos;s residents.
          </p>
          <p>
            Elementary school options include Burroughs Community Ed and
            Kenny Elementary, depending on exact address. Both are well-
            regarded neighborhood schools that function as community
            institutions beyond their academic role. The middle school
            pipeline leads to Anthony Middle School, and the high school
            destination is Southwest Senior High School — an International
            Baccalaureate World School that earns an A-minus from Niche and
            is widely considered one of the strongest public high schools in
            Minneapolis.
          </p>
          <p>
            Southwest High School&apos;s IB program, performing arts
            offerings, and college-prep rigor make the school a genuine
            asset for Diamond Lake families. The school draws from across
            Southwest and south Minneapolis, creating a student body that&apos;s
            more diverse than the individual neighborhoods it serves. For
            families who prioritize public school quality, the
            Diamond Lake-to-Southwest pipeline is one of the neighborhood&apos;s
            strongest selling points.
          </p>
          <p>
            Families also access Minneapolis&apos;s magnet school system for
            specialized programs, and private options in the area include
            Minnehaha Academy and various faith-based schools. The school
            landscape provides enough options that most families find a good
            fit without needing to commute long distances.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Diamond Lake Real Estate & Housing">
        <Prose>
          <p>
            Diamond Lake is one of the best values in south Minneapolis for
            single-family homebuyers — a neighborhood where you get solid
            housing stock, good park access, strong schools, and proximity
            to creek and lake trails for prices that would buy you a studio
            in some Minneapolis neighborhoods. Median sale prices range from
            roughly $290,000 to $420,000 — at or slightly below the citywide
            median on the low end, and modestly above it for updated homes.
          </p>
          <p>
            Homes sell at a steady pace — approximately 19 days on market in
            2025. The market here is balanced rather than frenzied: sellers
            get reasonable prices, buyers have time to make decisions, and
            the bidding-war anxiety that defines the lake neighborhoods is
            mostly absent. Diamond Lake is a neighborhood where first-time
            buyers can compete without writing love letters to the sellers.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($250,000–$320,000), you&apos;re looking at
              smaller bungalows or Cape Cods with original features — one
              bathroom, a compact kitchen, maybe an unfinished basement.
              These homes are functionally solid but cosmetically dated.
              The mid-range ($320,000–$420,000) gets you a well-maintained
              three-bedroom home with updates — a remodeled kitchen,
              replacement windows, a finished basement or a deck. Above
              $420,000, you&apos;re into larger homes, significant
              renovations, or the occasional new construction.
            </p>
            <p>
              The housing stock spans the 1920s through the early 1950s,
              with a mix of Craftsman bungalows, Cape Cods, and modest
              ranch homes. The lots are generous — deep backyards are
              standard, and the lot widths give the houses room to breathe.
              Most homes are single-family and owner-occupied. The
              architectural style is humble but honest: real plaster walls,
              hardwood floors under the carpet, foundations built to last.
              These are houses that were designed to be lived in, not
              admired, and they do that job well.
            </p>
            <p>
              The most desirable blocks are in the southern portion of the
              neighborhood, near Minnehaha Creek — proximity to the trail,
              slightly larger lots, and the ambient benefit of living near
              water. The blocks near Pearl Park are also sought after for
              their proximity to the rec center and green space. The
              northern blocks closer to 50th Street are the most affordable,
              with slightly smaller lots and less direct park access.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="Diamond Lake is south Minneapolis&apos;s best-kept secret for buyers. The school pipeline is Southwest High, the park is great, the creek trail is right there, and the prices are still reasonable. I don&apos;t know how long that lasts." cite="South Minneapolis real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Diamond Lake">
        <Prose>
          <p>
            Diamond Lake earns a Walk Score of 60 — technically walkable but
            practically car-dependent for most daily needs. The neighborhood
            is almost entirely residential, and the nearest grocery store,
            coffee shop, or restaurant requires a bike or a drive. Pearl Park
            is walkable from every address, and the Minnehaha Creek trail
            is accessible from the southern blocks, but commercial life
            requires leaving the neighborhood.
          </p>
          <p>
            The Bike Score of 76 reflects reasonable cycling infrastructure
            and trail connections. The Minnehaha Creek trail is the primary
            cycling asset — it connects east to Lake Nokomis and Minnehaha
            Falls, west to the Chain of Lakes, and provides a pleasant
            car-free corridor through south Minneapolis. For residents who
            bike regularly, Diamond Lake&apos;s trail access compensates
            somewhat for its lack of walkable commercial options.
          </p>
          <p>
            For car-based commuting, Diamond Lake is well-positioned.
            Downtown Minneapolis is 12–18 minutes depending on traffic.
            Highway 62 (the Crosstown) runs just south of the neighborhood,
            providing access to I-35W, the western suburbs, and MSP airport
            (roughly 15 minutes). Portland Avenue and Nicollet Avenue provide
            north-south routes to downtown. Most Diamond Lake residents
            drive for their commute, and parking in the neighborhood is
            easy — residential streets are uncrowded.
          </p>
          <p>
            Public transit is limited. Bus routes along Nicollet Avenue and
            Portland Avenue provide service to downtown, but frequency is
            modest and the routes require walking several blocks from much
            of the neighborhood&apos;s interior. The Blue Line light rail
            on Hiawatha Avenue is about 2 miles east — too far for a
            convenient walk, but bikeable. Diamond Lake is, honestly, a
            car neighborhood — and most residents have made peace with that
            reality.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing in Diamond Lake">
        <Prose>
          <p>
            Diamond Lake&apos;s tensions are low-grade and familiar — the
            same set of slow-moving pressures that affect most stable
            residential neighborhoods in south Minneapolis.
          </p>
        </Prose>
        <ArticleSubsection title="The Affordability Squeeze">
          <Prose>
            <p>
              Diamond Lake&apos;s affordability is its primary competitive
              advantage — and it&apos;s gradually eroding. As buyers get
              priced out of the lake neighborhoods and Southwest Minneapolis,
              demand in Diamond Lake and its neighbors increases. Prices have
              risen steadily over the past decade, and the entry-level
              bungalow that sold for $200,000 in 2015 might sell for
              $300,000 today. The neighborhood is still affordable relative
              to its amenities, but the gap is narrowing. Teardowns have
              begun to appear — a signal that developers see profit potential
              in replacing modest homes with larger, more expensive ones.
              If the pattern holds, Diamond Lake will follow the trajectory
              of neighborhoods like Kenny and Armatage, where
              &quot;affordable Southwest Minneapolis&quot; gradually became
              just &quot;Southwest Minneapolis.&quot;
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Car Dependence">
          <Prose>
            <p>
              The lack of walkable commercial options is a genuine limitation
              for residents who want to reduce their car dependence. Diamond
              Lake is a difficult neighborhood to live in without a car, and
              as climate consciousness and lifestyle preferences shift toward
              walkability and transit, this limitation becomes more
              significant. The neighborhood&apos;s residential purity is both
              its charm and its constraint — the same absence of commercial
              activity that keeps the streets quiet also means you&apos;re
              driving to buy milk.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Aging Infrastructure">
          <Prose>
            <p>
              Houses built in the 1920s through the 1950s require ongoing
              maintenance, and the costs of maintaining 80-year-old
              plumbing, wiring, and foundations add up. The city&apos;s
              infrastructure — streets, sewer lines, water mains — is
              similarly aging, and the pace of municipal maintenance
              doesn&apos;t always keep up with the pace of deterioration.
              For homeowners on tight budgets, the combination of rising
              property taxes and increasing maintenance costs creates
              financial pressure that&apos;s real even if it&apos;s not
              dramatic.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Demographic Homogeneity">
          <Prose>
            <p>
              Diamond Lake is predominantly white and predominantly
              homeowning — a demographic profile that reflects historical
              patterns, housing costs, and the self-reinforcing dynamics of
              neighborhood reputation. The neighborhood has diversified
              modestly over the past two decades, but it remains less
              diverse than Minneapolis as a whole. This homogeneity limits
              the neighborhood&apos;s cultural richness and raises questions
              about access and inclusion that the community grapples with
              in the same way most Southwest and south Minneapolis
              neighborhoods do — earnestly, but without easy answers.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Diamond Lake FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
