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
    title: "East Isles, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about East Isles, Minneapolis — Lake of the Isles' east shore, walkability to Uptown, elegant homes, parks, schools, housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "East Isles",
  deck: "The lake neighborhood that walks to everything — where Lake of the Isles' eastern shore meets the energy of Uptown, and a quiet residential enclave gets to have it both ways.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is East Isles?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in East Isles" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Lakes" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "East Isles, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,200", label: "Residents (Niche / US Census)" },
      { value: "$450K–$750K", label: "Median home sale price range (2025 data)" },
      { value: "15 days", label: "Average time on market (Redfin, 2025)" },
      { value: "1 lake", label: "Lake of the Isles on the western border" },
      { value: "1900s–30s", label: "Era most homes were built" },
      { value: "10 min", label: "Drive to downtown Minneapolis" },
      { value: "85", label: "Walk Score" },
      { value: "94", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is East Isles a good neighborhood in Minneapolis?",
      answer:
        "Yes — East Isles is one of the most desirable neighborhoods in Minneapolis, combining lakeside living with walkable access to Uptown's restaurants, shops, and nightlife. It offers a quieter, more residential alternative to adjacent Lowry Hill East while maintaining excellent walkability.",
    },
    {
      question: "Is East Isles, Minneapolis safe?",
      answer:
        "East Isles is one of the safer neighborhoods in Minneapolis. Violent crime is uncommon. Property crime — vehicle break-ins and bike theft, particularly near the lake — occurs at moderate rates. The neighborhood's proximity to the busier Uptown commercial district means some spillover activity, but the residential streets themselves are generally quiet and secure.",
    },
    {
      question: "What is East Isles, Minneapolis known for?",
      answer:
        "East Isles is known for its location on the eastern shore of Lake of the Isles, its elegant mix of single-family homes and well-maintained apartment buildings, its exceptional walkability to Uptown and the Chain of Lakes, and the East Isles Farmers Market. It occupies a sweet spot between urban convenience and lakeside tranquility.",
    },
    {
      question: "How much do homes cost in East Isles, Minneapolis?",
      answer:
        "Median home sale prices in 2025 ranged from approximately $450,000 to $750,000. Condos and smaller homes can be found in the $300,000–$450,000 range, while larger single-family homes and properties near the lake can exceed $1 million. The neighborhood's housing stock includes more condos and apartments than most Southwest Minneapolis neighborhoods, providing a wider range of price points.",
    },
    {
      question: "Is East Isles walkable?",
      answer:
        "Very much so — East Isles has a Walk Score of 85, among the highest in Southwest Minneapolis. The neighborhood is within walking distance of Uptown's commercial district on Hennepin Avenue and Lake Street, the Chain of Lakes trail system, and multiple grocery options. The Bike Score of 94 reflects outstanding trail connectivity.",
    },
    {
      question: "What schools serve East Isles, Minneapolis?",
      answer:
        "East Isles is served by Kenwood Elementary School (K–5). Middle school students typically attend Anthony or West Middle School. Southwest Senior High School, an International Baccalaureate World School, serves the area for grades 9–12. Private options including Blake and Breck are accessible nearby.",
    },
    {
      question: "Where exactly is East Isles in Minneapolis?",
      answer:
        "East Isles is in Southwest Minneapolis, bounded roughly by West Franklin Avenue to the north, Hennepin Avenue to the east, West Lake Street to the south, and Lake of the Isles Parkway to the west. It borders Lowry Hill to the north, Lowry Hill East (the Wedge) to the east, South Uptown to the south, and Kenwood across the lake to the west.",
    },
    {
      question: "What is the difference between East Isles and Kenwood?",
      answer:
        "East Isles and Kenwood share Lake of the Isles but have distinct characters. Kenwood is larger, wealthier, and more purely residential — with no commercial district and larger estate-style homes. East Isles is more compact, more walkable to urban amenities, and has a more diverse housing stock that includes apartments and condos alongside single-family homes. East Isles feels like a city neighborhood; Kenwood feels like a retreat.",
    },
    {
      question: "Is East Isles a good place to raise a family?",
      answer:
        "East Isles works well for families, particularly those who value urban walkability and lake access. The schools are solid, the parks are excellent, and the proximity to Uptown provides family-friendly restaurants and activities. It is more compact than some Southwest Minneapolis family neighborhoods — yards are smaller and there is more apartment and condo density — so families seeking large lots and suburban-style space may prefer neighborhoods farther south.",
    },
    {
      question: "How far is East Isles from downtown Minneapolis?",
      answer:
        "East Isles is approximately 10 minutes from downtown Minneapolis by car via Hennepin Avenue. Bus routes on Hennepin provide frequent transit service to downtown. Biking to downtown via the Kenilworth Trail or the Hennepin Avenue bike lane takes roughly 15–20 minutes. The proximity to downtown is a significant advantage over neighborhoods farther into Southwest Minneapolis.",
    },
  ],
  nearby: [
    { name: "Kenwood", slug: "kenwood", description: "Grand homes and Lake of the Isles' west shore" },
    { name: "Lowry Hill", slug: "lowry-hill", description: "Historic mansions above Hennepin Avenue" },
    { name: "Lowry Hill East", slug: "lowry-hill-east", description: "The Wedge — dense, walkable, and lively" },
    { name: "South Uptown", slug: "south-uptown", description: "Uptown energy near Bde Maka Ska" },
    { name: "Cedar - Isles - Dean", slug: "cedar-isles-dean", description: "Cedar Lake and the Kenilworth Trail" },
  ],
  closing: {
    title: "What Makes East Isles Irreplaceable",
    paragraphs: [
      "East Isles solves a problem that most neighborhoods cannot: how to live on a lake and walk to dinner. In Minneapolis, lakeside neighborhoods tend to be quiet, residential, and car-dependent. Urban neighborhoods tend to be dense, commercial, and far from water. East Isles occupies the narrow strip where these two worlds overlap — close enough to Uptown to hear the Friday night energy, close enough to the lake to hear the geese at dawn. The neighborhood is small enough that everyone recognizes the same dog walkers on the Isles loop, and connected enough that you never feel isolated.",
      "It is not the grandest lakeside neighborhood — Kenwood has bigger homes and Linden Hills has a stronger village identity. It is not the most urban — Lowry Hill East and South Uptown have more density and nightlife. But East Isles does not need to be the most of anything. It needs only to be what it is: a beautiful, walkable, lake-adjacent neighborhood that lets you live in the city without giving up the water. That combination is harder to find than it sounds, and the people who find it tend to hold on.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There is a stretch of Lake of the Isles Parkway East where, on a
          June evening, you can stand on the sidewalk and see the downtown
          skyline reflected in the lake to your left, hear laughter from a
          patio restaurant on Hennepin Avenue two blocks to your right, and
          watch a great blue heron lift off from the island directly in front
          of you. This is East Isles in a single frame: a neighborhood that
          lives in the space between the city and the lake, borrowing the best
          of both without fully belonging to either. The streets are quiet. The
          homes are handsome. Uptown is a short walk east. The lake trail is
          right there. It is a remarkably good deal, geographically speaking,
          and the neighborhood knows it.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/east-isles/hero.webp"
        alt="Lake of the Isles eastern shore with East Isles homes and the Minneapolis skyline"
        caption="East Isles — where Lake of the Isles meets the city"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is East Isles, Minneapolis?">
        <Prose>
          <p>
            East Isles is a compact residential neighborhood in Southwest
            Minneapolis, occupying the land between the eastern shore of Lake
            of the Isles and Hennepin Avenue. It is bounded by West Franklin
            Avenue to the north, Hennepin Avenue to the east, West Lake Street
            to the south, and Lake of the Isles Parkway to the west.
            Approximately 3,200 people live here — a small population that
            reflects the neighborhood&apos;s modest geographic footprint.
          </p>
          <p>
            What makes East Isles distinctive is its position. To the west,
            Lake of the Isles and the Chain of Lakes trail system provide
            world-class outdoor recreation. To the east, Hennepin Avenue and
            the Uptown commercial district provide restaurants, bars, shops,
            and groceries within walking distance. Very few Minneapolis
            neighborhoods can credibly claim both lakeside living and genuine
            urban walkability. East Isles can, and that combination is the
            core of its appeal. The housing stock is more varied than
            neighboring{" "}
            <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
              Kenwood
            </Link>{" "}
            — a mix of single-family homes, duplexes, condos, and
            well-maintained apartment buildings — giving the neighborhood a
            more diverse economic and demographic texture than the purely
            single-family lakeside neighborhoods to the south and west.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="East Isles Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/east-isles/neighborhood-sign.webp"
          alt="East Isles neighborhood sign in Minneapolis"
          caption="The East Isles neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="East Isles History & Origins">
        <Prose>
          <p>
            The land along the eastern shore of Lake of the Isles, like the
            lake itself, was part of the ancestral homeland of the Dakota
            people. The lake — Bde Unma in Dakota — and its surrounding
            wetlands were part of a connected system of water, wild rice, and
            seasonal camps that sustained Dakota communities for centuries
            before European-American settlement displaced them.
          </p>
          <p>
            Development of the East Isles area accelerated in the early 1900s,
            following the dredging and reshaping of Lake of the Isles by the
            Minneapolis Park Board in 1905–1911. Before the dredging, the lake
            was shallow and marshy — more wetland than lake in places. The Park
            Board transformed it into the elegant, island-dotted lake that
            exists today, constructing the parkway and establishing the
            parkland that would make lakeside lots extraordinarily desirable.
            The east side of the lake developed slightly later than the west
            (Kenwood) side, and with a somewhat different character: smaller
            lots, more apartment construction, and a closer relationship to
            the commercial activity on Hennepin Avenue.
          </p>
          <p>
            The 1910s through the 1930s were the primary building era. Grand
            single-family homes went up along the parkway. Behind them, a mix
            of duplexes, four-plexes, and apartment buildings filled in the
            blocks between the lake and Hennepin. This mixed housing stock
            distinguished East Isles from the more exclusively single-family
            neighborhoods to the west and south. By mid-century, the
            neighborhood was a stable, middle-to-upper-income residential
            area — close to the lake, close to the city, and possessing a
            character that has remained remarkably consistent for a hundred
            years.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in East Isles">
        <Prose>
          <p>
            East Isles has the feel of a neighborhood that is slightly more
            aware of its good fortune than it needs to be — and that awareness
            is mostly justified. The daily routine here is enviable: walk
            the lake loop in the morning, grab coffee on Hennepin, bike to
            work downtown via the Kenilworth Trail, pick up groceries at
            Kowalski&apos;s on the way home. The friction between domestic
            life and urban convenience, which defines so many neighborhood
            trade-offs in Minneapolis, barely exists here.
          </p>
          <p>
            The residential streets between the lake and Hennepin are shaded,
            quiet, and well-maintained. The housing mix — single-family homes
            alongside apartments and condos — creates a population that is
            more age-diverse and lifestyle-diverse than the family-dominated
            neighborhoods to the south. Young professionals, couples without
            children, empty nesters, and retirees live alongside families
            with kids. This variety gives East Isles a slightly more urban,
            slightly less insular atmosphere than{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>{" "}
            or Kenwood.
          </p>
          <p>
            The East Isles Residents&apos; Association (EIRA) is active and
            well-organized, coordinating neighborhood events, planning
            advocacy, and the popular East Isles Farmers Market. Community
            engagement is strong but tends toward the pragmatic — East Isles
            residents show up for zoning hearings and park board meetings, not
            necessarily for block parties. The vibe is progressive, educated,
            and environmentally conscious, consistent with the broader
            Southwest Minneapolis character.
          </p>
        </Prose>
        <Quote
          text="I moved here from Uptown because I wanted quiet streets and a lake. I stayed because I can still walk to everything I walked to when I lived in Uptown. I just sleep better now."
          cite="East Isles resident, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="East Isles Food, Drink & Local Spots">
        <Prose>
          <p>
            East Isles does not have a dense commercial district of its own,
            but its eastern border on Hennepin Avenue puts dozens of
            restaurants, cafes, and shops within an easy walk. The
            neighborhood effectively borrows the commercial infrastructure
            of Uptown and{" "}
            <Link href="/neighborhoods/lowry-hill-east" className="text-[#2a9d8f] hover:underline">
              Lowry Hill East
            </Link>{" "}
            while maintaining residential calm on its own streets.
          </p>
        </Prose>

        <ArticleSubsection title="Within & Adjacent to East Isles">
          <PlaceCardComponent place={{ name: "Calhoun Square / Uptown", tag: "Shopping & Dining", description: "The Uptown commercial district along Hennepin Avenue and Lake Street — directly adjacent to East Isles' eastern boundary — provides a full range of dining, shopping, and entertainment options. Restaurants, bars, boutiques, and service businesses are all within walking distance of most East Isles addresses." }} />
          <PlaceCardComponent place={{ name: "Kowalski's Market (Uptown)", tag: "Grocery", price: "$$", description: "1261 Hennepin Ave. S. A locally owned upscale grocery store on Hennepin Avenue, right on the East Isles border. High-quality produce, a strong prepared foods section, and a wine selection that draws from across the neighborhood. The most convenient grocery option for East Isles residents." }} />
          <PlaceCardComponent place={{ name: "East Isles Farmers Market", tag: "Farmers Market", description: "A seasonal farmers market held in the neighborhood during summer months, organized by the East Isles Residents' Association. Local produce, baked goods, and artisan vendors draw neighbors out on weekend mornings. Smaller than the big Minneapolis markets, but the community atmosphere is the point." }} />
          <PlaceCardComponent place={{ name: "Hennepin Avenue Corridor", tag: "Dining & Nightlife", description: "The stretch of Hennepin between Lake Street and Franklin Avenue — East Isles' front door — is one of the most active commercial corridors in Minneapolis. Restaurants range from casual to upscale, with strong representation of Thai, Vietnamese, Indian, and New American cuisines. Bars and live music venues provide nightlife that East Isles residents can walk to and walk home from." }} />
          <PlaceCardComponent place={{ name: "Lake & Irving", tag: "New American", price: "$$$", description: "1513 W. Lake Street. A polished neighborhood restaurant on Lake Street near the southern edge of East Isles. Seasonal menus, craft cocktails, and a warm atmosphere. Popular for date nights and special occasions without the drive downtown." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Lakes Near East Isles">
        <Prose>
          <p>
            East Isles&apos; outdoor access rivals any neighborhood in the
            city. The lake trail system is literally at the doorstep, and
            the connections to the broader Chain of Lakes and Grand Rounds
            network make this one of the most recreation-rich neighborhoods
            in Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="Lake of the Isles">
          <Prose>
            <p>
              Lake of the Isles is East Isles&apos; western boundary and its
              primary recreational asset. The 2.8-mile paved loop encircling
              the lake is one of the most popular walking and running routes
              in Minneapolis — scenic, shaded, and accessible year-round. The
              two islands in the lake support bird habitat and add visual
              charm. In winter, the lake freezes for cross-country skiing and
              skating. East Isles residents access the lake trail directly
              from their streets, making it an extension of their daily
              routine rather than a destination requiring a drive.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/east-isles/lake-of-the-isles.webp"
            alt="Lake of the Isles path with walkers on the East Isles side"
            caption="The east shore of Lake of the Isles — East Isles' living room"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Bde Maka Ska & the Chain of Lakes">
          <Prose>
            <p>
              Bde Maka Ska is a short walk or bike ride south via the
              connecting parkway. The largest lake in the Chain of Lakes, it
              offers beaches, kayak and paddleboard rentals, and the busiest
              trail loop in the city on summer evenings. From East Isles,
              the entire Chain of Lakes — Bde Maka Ska, Lake Harriet, Cedar
              Lake, and Lake of the Isles — is accessible on a continuous
              trail system. A morning run can easily cover two or three
              lakes without crossing a major road.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Smith Triangle Park & Neighborhood Green Space">
          <Prose>
            <p>
              Smith Triangle Park, at the intersection of West Lake of the
              Isles Parkway and East Lake of the Isles Parkway, provides a
              small neighborhood green space along the lake. The park system
              along the lakefront — managed by the Minneapolis Park Board —
              offers benches, picnic areas, and informal gathering spaces
              that East Isles residents use as everyday extensions of their
              yards. The Minneapolis Sculpture Garden and Walker Art Center
              are also accessible to the north, via the trails through{" "}
              <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
                Kenwood
              </Link>
              .
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="East Isles Schools">
        <Prose>
          <p>
            East Isles is served by Kenwood Elementary School (K–5) for
            public elementary education. Kenwood Elementary is well-regarded,
            with strong ratings from Niche and an engaged parent community
            that benefits from the neighborhood&apos;s demographic stability
            and financial resources.
          </p>
          <p>
            Middle school students typically attend Anthony Middle School or
            West Middle School. Southwest Senior High School serves the area
            for grades 9–12 — an International Baccalaureate World School
            with strong academics and an A-minus rating from Niche.
          </p>
          <p>
            The proximity to Hennepin Avenue and Uptown provides access to
            several private and alternative school options. The Blake School,
            Breck School, and Minneapolis&apos;s network of magnet schools
            are all accessible within a short drive. East Isles families
            tend to be well-informed about their educational options and
            actively engaged in school communities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="East Isles Real Estate & Housing">
        <Prose>
          <p>
            East Isles has a more varied housing stock than most lakeside
            neighborhoods in Minneapolis, and that variety translates to a
            wider range of price points. Median home sale prices in 2025
            ranged from approximately $450,000 to $750,000 — expensive by
            citywide standards but more accessible than neighboring Kenwood
            or the lakefront properties in Linden Hills.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              The housing stock in East Isles falls into several categories.
              Single-family homes along the lake parkway are the most
              expensive — large Colonials, Tudors, and Prairie-influenced
              designs from the 1910s and 1920s, often exceeding $1 million.
              Interior blocks feature a mix of smaller single-family homes,
              duplexes, and converted properties, typically in the $500,000–
              $800,000 range. Condos and co-ops in the neighborhood&apos;s
              apartment buildings — many of which are mid-century or early
              20th-century brick buildings — provide entry points in the
              $250,000–$450,000 range.
            </p>
            <p>
              This mix is part of East Isles&apos; identity. Unlike Kenwood,
              where the housing stock is almost exclusively large
              single-family homes, East Isles accommodates a range of
              household types and budgets. A young professional buying a
              condo and a family buying a four-bedroom colonial can both call
              themselves East Isles residents. That diversity — modest by
              the standards of more urban neighborhoods but notable for
              lakeside Minneapolis — contributes to the neighborhood&apos;s
              vitality.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/east-isles/residential-street.webp"
          alt="Tree-lined East Isles street with a mix of single-family homes and apartment buildings"
          caption="East Isles' varied housing stock — homes, duplexes, and apartments share the same shaded streets"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around East Isles">
        <Prose>
          <p>
            East Isles is one of the most walkable and bikeable neighborhoods
            in Southwest Minneapolis. The Walk Score of 85 reflects genuine
            pedestrian access to groceries, restaurants, and daily errands
            via Hennepin Avenue. The Bike Score of 94 is among the highest in
            the city, driven by the lake trails, the Kenilworth Trail, and
            on-street bike infrastructure.
          </p>
          <p>
            Metro Transit bus routes on Hennepin Avenue provide frequent
            service to downtown Minneapolis and points south toward Uptown
            and Lake Street. The Route 6 on Hennepin is one of the
            highest-frequency routes in the Metro Transit system. Biking to
            downtown takes approximately 15–20 minutes via the Kenilworth
            Trail or the Hennepin Avenue route.
          </p>
          <p>
            A car is less necessary here than in most Minneapolis
            neighborhoods. Groceries, dining, entertainment, and transit are
            all within walking distance. For commuting to the suburbs, St.
            Paul, or the airport, a car remains practical, but daily life
            in East Isles can be genuinely car-optional — a claim that only
            a handful of Minneapolis neighborhoods can make honestly.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            East Isles is a stable, desirable neighborhood, but it faces
            pressures common to the inner ring of Southwest Minneapolis —
            along with a few specific to its geography and character.
          </p>
        </Prose>

        <ArticleSubsection title="Uptown's Evolution & Spillover">
          <Prose>
            <p>
              East Isles&apos; proximity to Uptown is both its greatest
              amenity and its most persistent source of tension. Uptown has
              been in transition for years — commercial vacancy, changing
              retail dynamics, and the loss of some anchor businesses have
              altered the character of the Hennepin/Lake corridor. Some East
              Isles residents feel that Uptown&apos;s challenges — increased
              visible homelessness, occasional property crime, and the
              uncertain future of commercial spaces — have affected the
              eastern edge of their neighborhood. Others argue that Uptown
              remains vibrant and that East Isles benefits from the urban
              energy next door, even when that energy is messy. The tension
              is between wanting the convenience of proximity to a commercial
              district and wanting that district to feel safe and thriving.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Density & Development Pressure">
          <Prose>
            <p>
              East Isles already has more density than most Southwest
              Minneapolis neighborhoods, thanks to its historic apartment
              buildings and condo conversions. The Minneapolis 2040 Plan has
              opened the door to additional density — triplexes on formerly
              single-family lots, potential small apartment buildings along
              transit corridors. Some residents welcome this as a way to
              add housing in a desirable, walkable location. Others worry
              about the impact on the neighborhood&apos;s scale, parking,
              and residential character. The debate is more nuanced here
              than in exclusively single-family neighborhoods, because East
              Isles has always been mixed — but the question of how much
              more density is appropriate remains unresolved.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Affordability & Access">
          <Prose>
            <p>
              East Isles is more economically accessible than Kenwood or
              the lakefront blocks of Linden Hills, but it is still an
              expensive neighborhood by Minneapolis standards. The condo
              market provides some entry points, but rising prices have
              pushed even modest units above $300,000. The neighborhood
              is overwhelmingly white and upper-middle-class — a pattern
              shared across Southwest Minneapolis but worth naming honestly.
              The people who can afford to live between a lake and Uptown
              are, by definition, a narrow slice of the city&apos;s
              population.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="East Isles FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
