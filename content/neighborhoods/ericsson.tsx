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
    title: "Ericsson, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Ericsson, Minneapolis — homes, history, Ericsson Park, Lake Nokomis proximity, schools, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Ericsson",
  deck: "A quiet residential neighborhood near Lake Nokomis — where Ericsson Park anchors the community, the housing is modest and affordable, and the biggest selling point is the one nobody talks about: it just works.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Ericsson?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Ericsson" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Ericsson, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,500", label: "Residents (Niche / US Census)" },
      { value: "$275K–$425K", label: "Median home sale price range (2025 data)" },
      { value: "14 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.5 sq mi", label: "Neighborhood area" },
      { value: "1920s–50s", label: "Era most homes were built" },
      { value: "15–20 min", label: "Drive to downtown or MSP airport" },
      { value: "55", label: "Walk Score" },
      { value: "72", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Ericsson a good neighborhood in Minneapolis?",
      answer:
        "Yes. Ericsson is a quiet, stable, residential neighborhood in south Minneapolis with affordable housing, good park infrastructure, and proximity to Lake Nokomis. It's not a neighborhood that generates buzz, but for families and homeowners who want a solid house at a reasonable price in a calm setting, Ericsson delivers consistently.",
    },
    {
      question: "Is Ericsson, Minneapolis safe?",
      answer:
        "Ericsson is generally safe, with crime rates near or below the city average for south Minneapolis. Property crime — vehicle break-ins, package theft — is the most common concern. The residential character and the absence of major commercial corridors contribute to a quieter, lower-incident environment. As with all Minneapolis neighborhoods, awareness and common-sense precautions are recommended.",
    },
    {
      question: "What is Ericsson, Minneapolis known for?",
      answer:
        "Ericsson is known for being quiet. That's the honest answer. Ericsson Park provides the neighborhood anchor — playground, ball fields, ice rink — and the proximity to Lake Nokomis is a genuine asset. But Ericsson doesn't have a marquee attraction, a destination restaurant, or a commercial district. It's known, to the extent that it's known at all, as a good, affordable, residential neighborhood where people live without fanfare.",
    },
    {
      question: "How much do homes cost in Ericsson, Minneapolis?",
      answer:
        "Median home sale prices in Ericsson have ranged from roughly $275,000 to $425,000 depending on the data source and season. This places Ericsson at or slightly below the citywide median, making it one of the more affordable neighborhoods in south Minneapolis. Smaller bungalows can be found under $250,000; larger renovated homes may push above $450,000.",
    },
    {
      question: "Where exactly is Ericsson in Minneapolis?",
      answer:
        "Ericsson is in south Minneapolis, bounded roughly by East 46th Street to the north, Cedar Avenue to the east, East 54th Street to the south, and 28th Avenue South to the west. It sits north and west of Lake Nokomis, between the Field neighborhood to the west and the Nokomis neighborhoods to the south and east.",
    },
    {
      question: "Is Ericsson close to Lake Nokomis?",
      answer:
        "Yes — closer than most people realize. Lake Nokomis is adjacent to Ericsson's southeastern edge, and many residents can walk or bike to the lake in ten to fifteen minutes. The Nokomis beaches, trails, and parkland are regular destinations for Ericsson families. The proximity to the lake is one of Ericsson's quiet selling points.",
    },
    {
      question: "What schools serve Ericsson, Minneapolis?",
      answer:
        "Ericsson Community School (K–5) is the neighborhood elementary and serves as the community anchor. Middle school options feed into the broader Minneapolis Public Schools system, and high school typically routes through Roosevelt Senior High School or other district options.",
    },
    {
      question: "Is Ericsson a good place for first-time homebuyers?",
      answer:
        "Ericsson is an excellent option for first-time buyers. The housing stock is modestly priced, the lots are reasonable, and the neighborhood offers the same city services, park access, and school pipeline as more expensive neighborhoods. The proximity to Lake Nokomis adds an amenity that many similarly priced neighborhoods lack.",
    },
    {
      question: "How is Ericsson different from Nokomis?",
      answer:
        "Ericsson and Nokomis are adjacent and share access to Lake Nokomis, but the Nokomis neighborhoods (Nokomis, Keewaydin, Wenonah) are more directly lakefront, with higher home prices and a stronger neighborhood identity centered on the lake. Ericsson is slightly further from the water, more affordable, and quieter — a step removed from the lake but close enough to use it regularly.",
    },
    {
      question: "How far is Ericsson from downtown Minneapolis?",
      answer:
        "Ericsson is approximately 15–20 minutes from downtown Minneapolis by car. Bus routes along Cedar Avenue and Bloomington Avenue provide transit connections to downtown, though most residents drive. MSP International Airport is similarly accessible at about 15 minutes via I-35W or Highway 62.",
    },
  ],
  nearby: [
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis, beaches, and a strong neighborhood identity" },
    { name: "Field", slug: "field", description: "Quiet residential south Minneapolis, to the west" },
    { name: "Keewaydin", slug: "keewaydin", description: "Southeast Nokomis area near the lake" },
    { name: "Hiawatha", slug: "hiawatha", description: "Blue Line access and Lake Hiawatha" },
    { name: "Standish", slug: "standish", description: "Diverse and affordable south Minneapolis" },
    { name: "Howe", slug: "howe", description: "Longfellow-area residential near Minnehaha Creek" },
  ],
  closing: {
    title: "What Makes Ericsson Worth Knowing",
    paragraphs: [
      "Ericsson is the kind of neighborhood that proves a point about what actually matters in a place to live. It doesn't have a lake — but it's a bike ride from one. It doesn't have a restaurant scene — but it has a park where your kids will play every day after school. It doesn't have architectural significance or cultural institutions or a commercial district that draws visitors from across the city. What it has, instead, is houses that ordinary people can buy, streets that are quiet enough to hear the birds, a school that serves the community, and a park with an ice rink that freezes every winter.",
      "That's not a glamorous pitch. It's a true one. And for the people who live in Ericsson — the families, the retirees, the first-time buyers who stretched for the down payment and ended up on a block where the neighbors brought over a pie — the truth is enough.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          If you asked a hundred people in Minneapolis to name the Ericsson
          neighborhood, maybe ten could do it — and at least half of those
          would be people who live there. This is not a complaint. It&apos;s
          a description. Ericsson exists in the quiet middle of south
          Minneapolis, doing what a neighborhood does — providing houses
          and trees and a park and a school and the daily rhythms of
          ordinary life — without asking anyone to notice. A kid is walking
          to Ericsson Community School with a backpack almost as big as
          she is. Someone is raking. The ice rink at Ericsson Park won&apos;t
          be open for months, but the boards are already up, waiting. This
          is a neighborhood that operates on patience and repetition, and
          the people who find it tend to be the people who were looking
          for exactly that.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/ericsson/hero.webp"
        alt="Quiet residential street in the Ericsson neighborhood of south Minneapolis"
        caption="Ericsson's residential streets — quiet, modest, and deeply familiar"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Ericsson, Minneapolis?">
        <Prose>
          <p>
            Ericsson is a residential neighborhood in south Minneapolis,
            bounded roughly by East 46th Street to the north, Cedar Avenue
            to the east, East 54th Street to the south, and 28th Avenue
            South to the west. It covers about half a square mile and is
            home to approximately 3,500 residents. The neighborhood sits
            north and west of Lake Nokomis — close enough to the lake for
            regular use, far enough to avoid the premium that comes with
            lakefront status.
          </p>
          <p>
            Ericsson borders{" "}
            <Link href="/neighborhoods/field" className="text-[#2a9d8f] hover:underline">
              Field
            </Link>{" "}
            to the west,{" "}
            <Link href="/neighborhoods/nokomis" className="text-[#2a9d8f] hover:underline">
              Nokomis
            </Link>{" "}
            to the south and east, and{" "}
            <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
              Hiawatha
            </Link>{" "}
            to the north. It takes its name from Ericsson Park, the
            neighborhood&apos;s central green space — which in turn was
            likely named for Leif Erikson or John Ericsson, reflecting the
            Scandinavian heritage of early Minneapolis settlers.
          </p>
          <p>
            What defines Ericsson is its quietness — not the quietness of
            a neighborhood that&apos;s empty or declining, but the quietness
            of a place that is simply, steadily residential. There are no
            commercial districts, no cultural institutions, no marquee
            attractions. There is a park, a school, houses, trees, and the
            daily accumulation of small routines that make a place livable.
            Ericsson is the Minneapolis neighborhood that doesn&apos;t try
            to be anything other than a good place to live — and for the
            people who find it, that turns out to be the whole point.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Ericsson Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/ericsson/neighborhood-sign.webp"
          alt="Ericsson neighborhood sign in Minneapolis"
          caption="The Ericsson neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Ericsson History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part
            of the territory stretching across what is now southern Minnesota,
            including the lakes, creeks, and prairies that defined the
            region&apos;s geography. The Dakota people inhabited this
            landscape for centuries before treaties and forced removal in the
            1850s and 1860s opened the land to European homesteading.
          </p>
          <p>
            The area that would become Ericsson developed later than the
            neighborhoods closer to downtown and the major lakes. While the
            lake-adjacent areas were filling in during the 1900s and 1910s,
            Ericsson&apos;s blocks were platted and built out primarily
            through the 1920s, 1930s, 1940s, and into the 1950s. The housing
            stock reflects this extended timeline: Craftsman bungalows,
            Cape Cods, ramblers, and early postwar homes sit side by side,
            giving the neighborhood a mixed but cohesive character. These
            were modest homes built for modest budgets — working-class and
            middle-class families who wanted a house with a yard and a
            school nearby without the premium of lakefront living.
          </p>
          <p>
            Ericsson Park was established in the early-to-mid 20th century
            and has served as the neighborhood&apos;s gathering place ever
            since. Ericsson Community School provided the educational anchor.
            Together, the park and the school gave this otherwise
            undifferentiated residential area a center — a place where
            the community could organize around something other than
            geography.
          </p>
          <p>
            For most of its history, Ericsson has been a working- and
            middle-class neighborhood with strong Scandinavian and Northern
            European roots — reflecting the immigrant communities that
            settled much of south Minneapolis. That demographic has shifted
            over the decades, and today Ericsson is modestly more diverse
            than it was a generation ago, though it remains predominantly
            white and homeowning.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Ericsson">
        <Prose>
          <p>
            Living in Ericsson is an exercise in appreciating the
            unremarkable. The streets are quiet. The houses are modest —
            well-maintained bungalows and Cape Cods and ramblers with deep
            lots, alley garages, and front porches that people actually use.
            The tree canopy is decent. Kids ride bikes on sidewalks that
            are cracked in places but functional everywhere. There is
            nothing here that would make a real estate photographer pause,
            and nothing here that would make a resident apologize. It&apos;s
            just a neighborhood, doing neighborhood things.
          </p>
          <p>
            The demographic skews toward families and long-term homeowners,
            with a mix that&apos;s gradually becoming more diverse. The
            neighborhood is less homogeneous than the Southwest Minneapolis
            family neighborhoods but less diverse than the neighborhoods
            along the Hiawatha corridor to the north. The economic profile
            is solidly middle-class — teachers, tradespeople, nurses, city
            workers. People who do real jobs and own real houses and don&apos;t
            think of themselves as living in a &quot;neighborhood&quot; with
            a brand — just a place with an address and a block and a park.
          </p>
          <p>
            Ericsson Park is the community anchor — a well-maintained park
            with a playground, ball fields, open green space, and a winter
            ice rink. The park is where you meet the neighbors, where the
            kids play after school, where the neighborhood association holds
            its events. Lake Nokomis is close enough for a regular bike ride
            — the beaches, the trails, the summertime scene — and that
            proximity to the lake is one of Ericsson&apos;s quiet advantages.
            You get most of the Nokomis lifestyle without paying the Nokomis
            premium.
          </p>
        </Prose>
        <Quote
          text="We looked at the Nokomis neighborhoods and loved them, but the prices were $100,000 more than we could afford. Then we looked at Ericsson, two blocks further from the lake, and the math worked. Best decision we ever made."
          cite="Ericsson homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Ericsson Food, Drink & Local Spots">
        <Prose>
          <p>
            Ericsson has essentially no commercial activity within its
            boundaries. The neighborhood is entirely residential, and its
            dining and shopping options are borrowed from the corridors at
            its edges and from neighboring commercial areas. This is the
            reality of living in one of south Minneapolis&apos;s quieter
            residential pockets.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <PlaceCardComponent place={{ name: "Cedar Avenue Corridor", tag: "Diverse Commercial", description: "Cedar Avenue on Ericsson's eastern edge has a mix of restaurants, grocery stores, and services — including ethnic restaurants and specialty groceries that reflect the diversity of south Minneapolis." }} />
          <PlaceCardComponent place={{ name: "Nokomis Beach Coffee", tag: "Coffee Shop", price: "$", description: "Near Lake Nokomis, a short bike ride south. A neighborhood coffee shop that draws from the surrounding area and provides the kind of casual gathering place that Ericsson itself lacks." }} />
          <PlaceCardComponent place={{ name: "Nokomis Area Restaurants", tag: "Neighborhood Dining", description: "The commercial nodes near Lake Nokomis — particularly along Cedar Avenue near 50th Street — offer a handful of restaurants and cafés that Ericsson residents consider their local dining scene." }} />
          <PlaceCardComponent place={{ name: "Bloomington Avenue", tag: "Commercial Corridor", description: "Bloomington Avenue to the west has scattered commercial activity — restaurants, services, a gas station. Not a destination corridor, but functional for everyday needs." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Ericsson">
        <Prose>
          <p>
            Ericsson&apos;s outdoor story has two parts: the park at the
            center and the lake nearby.
          </p>
        </Prose>
        <ArticleSubsection title="Ericsson Park">
          <Prose>
            <p>
              Ericsson Park is the neighborhood&apos;s central green space —
              a well-maintained park with a playground, baseball and softball
              fields, basketball courts, open green space, and a winter ice
              rink. The park is modest in scale but well-used and well-loved
              — the place where the neighborhood gathers, where kids play
              after school, and where the ice rink becomes the social center
              every winter. The park also provides space for community events,
              youth programming, and the informal daily use that makes a
              park feel like a neighborhood living room.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/ericsson/ericsson-park.webp"
            alt="Ericsson Park playground and green space"
            caption="Ericsson Park — the neighborhood's central gathering place"
          />
        </ArticleSubsection>
        <ArticleSubsection title="Lake Nokomis">
          <Prose>
            <p>
              Lake Nokomis is adjacent to Ericsson&apos;s southeastern corner
              — close enough for a regular bike ride or a longer walk. The
              lake&apos;s 2.7-mile trail loop, two public beaches, and
              surrounding parkland are popular with Ericsson families. Lake
              Nokomis is smaller and less crowded than Bde Maka Ska, with a
              more neighborhood-oriented atmosphere. The Nokomis Beach area
              has a small commercial presence — coffee, food, seasonal
              vendors — that gives the lakeside a community feel. For
              Ericsson residents, the lake is the outdoor amenity that
              elevates the neighborhood above what its internal features
              alone would suggest.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Biking & Trail Connections">
          <Prose>
            <p>
              The Bike Score of 72 reflects decent cycling infrastructure —
              connections to the Lake Nokomis trail loop, the Minnehaha Creek
              corridor, and the broader south Minneapolis bike network. The
              flat terrain makes cycling practical, and the lake trail
              connects to the Grand Rounds system for longer rides. Biking
              is the best way to take advantage of Ericsson&apos;s proximity
              to Nokomis and the creek trails.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Ericsson Schools">
        <Prose>
          <p>
            Ericsson Community School serves kindergarten through fifth grade
            and is the neighborhood&apos;s primary community institution. The
            school is walkable from most addresses in the neighborhood and
            functions as a social anchor — the place where families connect
            and where the neighborhood&apos;s identity takes shape at the
            most fundamental level.
          </p>
          <p>
            Middle school options feed into the broader Minneapolis Public
            Schools system, and high school typically routes through Roosevelt
            Senior High School or other district options. Roosevelt has
            undergone investment and renovation in recent years and continues
            to evolve.
          </p>
          <p>
            The school community in Ericsson is becoming more diverse —
            reflecting broader demographic shifts in south Minneapolis. The
            PTA and the school community overlap significantly with the park
            users and the neighborhood association, creating the kind of
            institutional interconnection that makes a small neighborhood
            feel cohesive.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Ericsson Real Estate & Housing">
        <Prose>
          <p>
            Ericsson is one of the more affordable neighborhoods in
            Minneapolis for homebuyers. Median sale prices have ranged from
            roughly $275,000 to $425,000 — near or below the citywide
            median. This affordability, combined with the proximity to Lake
            Nokomis and the park infrastructure, makes Ericsson a strong
            value proposition for first-time buyers and families.
          </p>
          <p>
            The housing stock is predominantly single-family homes from the
            interwar and early postwar periods. Craftsman bungalows, Cape
            Cods, ramblers, and the occasional Foursquare make up the
            majority of the inventory. Lots are reasonable, and most homes
            have the alley-access garages, deep backyards, and front
            porches that characterize south Minneapolis residential
            architecture. The rental stock is minimal — most homes are
            owner-occupied, giving the neighborhood a settled, invested
            character.
          </p>
          <p>
            Homes sell quickly — about 14 days on average — reflecting
            strong demand at the price point. The market is competitive for
            well-maintained homes, particularly those in the southeastern
            portion of the neighborhood closest to Lake Nokomis.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              Under $275,000 gets you a smaller bungalow or Cape Cod needing
              updates — original kitchen, single-car garage, the kind of
              project that first-time buyers take on with optimism and a
              YouTube education. $275,000–$375,000 is the sweet spot — a
              well-maintained three-bedroom home with some updates and a
              functional yard. Above $375,000, you&apos;re looking at larger
              renovated homes or the occasional new construction. The value
              proposition is straightforward: for less than the price of a
              studio condo in Uptown, you get a house with a yard near a
              lake.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="Ericsson is the neighborhood people find by zooming out on Zillow and saying, &apos;Wait, what&apos;s that one near the lake that I&apos;ve never heard of?&apos; And then they make an offer." cite="South Minneapolis real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Ericsson">
        <Prose>
          <p>
            Ericsson earns a Walk Score of 55 — the neighborhood is
            primarily residential and lacks commercial activity within its
            boundaries. For restaurants, groceries, and most services,
            residents drive or bike to the corridors at the edges — Cedar
            Avenue, Bloomington Avenue, or the Nokomis commercial nodes.
          </p>
          <p>
            The Bike Score of 72 reflects decent cycling infrastructure
            and the connections to the Lake Nokomis trail and the broader
            south Minneapolis bike network. Biking is the practical way to
            take advantage of the lake access and the creek trail
            connections.
          </p>
          <p>
            By car, downtown Minneapolis is 15–20 minutes, and MSP airport
            is similarly accessible via I-35W or Highway 62. Bus routes along
            Cedar Avenue and Bloomington Avenue provide transit connections
            to downtown, though frequency is limited. The Blue Line light
            rail is accessible from stations on Hiawatha Avenue, a short
            drive or bus ride east. Most Ericsson residents are car-dependent
            for daily life — the neighborhood works best with a car in the
            garage.
          </p>
        </Prose>
        <ImageSlot
          src="/images/neighborhoods/ericsson/streetscape.webp"
          alt="Quiet residential street in Ericsson with bungalows and mature trees"
          caption="Ericsson's streets — modest, quiet, and built for staying"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Ericsson is a stable neighborhood, and the changes here are
            incremental rather than dramatic. But they&apos;re worth noting.
          </p>
        </Prose>
        <ArticleSubsection title="Price Creep">
          <Prose>
            <p>
              Ericsson&apos;s affordability — one of its defining features
              — is gradually eroding as home prices rise across Minneapolis.
              The neighborhood is still cheaper than the lake neighborhoods
              and Southwest Minneapolis, but the gap is narrowing. Homes
              that sold for $180,000 ten years ago now list for $300,000.
              The neighborhood remains accessible to first-time buyers, but
              the floor is rising, and the working-class families who have
              historically defined the community may find it increasingly
              difficult to buy in.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Demographic Evolution">
          <Prose>
            <p>
              Ericsson, like much of south Minneapolis, is becoming gradually
              more diverse. The Scandinavian-heritage families who settled
              the neighborhood are aging and, in some cases, selling. Newer
              residents include immigrant families, young professionals, and
              first-generation homebuyers from a wider range of backgrounds.
              The transition is slow and mostly smooth, but it represents a
              real shift in the neighborhood&apos;s character over time.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Infrastructure Aging">
          <Prose>
            <p>
              Many of Ericsson&apos;s homes are 70 to 100 years old, and the
              neighborhood&apos;s infrastructure — water mains, sewer lines,
              streets, sidewalks — is aging accordingly. The city invests in
              maintenance and replacement, but the ongoing cost of
              maintaining mid-century housing and infrastructure is a reality
              that homeowners factor into their budgets. Foundation work,
              sewer lining, and electrical upgrades are common conversation
              topics at Ericsson block parties.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Nokomis Spillover">
          <Prose>
            <p>
              As the Nokomis-area neighborhoods become more popular and more
              expensive, some of that interest spills into Ericsson — buyers
              who wanted Nokomis but settle for the neighboring blocks.
              This is generally positive for property values but also brings
              the gentrification dynamics that follow rising demand:
              renovations, teardowns, and the gradual pricing out of
              longer-term residents. The effect is muted compared to the
              lake neighborhoods themselves, but it&apos;s present and
              growing.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Ericsson FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
