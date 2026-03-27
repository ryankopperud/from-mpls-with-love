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
    title: "Central, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Central, Minneapolis — Chicago and Bloomington Avenue corridors, Powderhorn-adjacent diversity, affordable housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Central",
  deck: "South of Powderhorn and north of quiet — where the Chicago and Bloomington Avenue corridors anchor a diverse, affordable neighborhood that most of Minneapolis drives through without noticing.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Central?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Central" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Central, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~7,000", label: "Residents (US Census / ACS estimates)" },
      { value: "$200K–$290K", label: "Median home sale price (2025 data)" },
      { value: "$950–$1,300", label: "Typical 1BR apartment rent (2025)" },
      { value: "74", label: "Walk Score" },
      { value: "83", label: "Bike Score" },
      { value: "55", label: "Transit Score" },
      { value: "55%+", label: "Renter-occupied housing" },
      { value: "60%+", label: "Residents of color (ACS estimates)" },
    ],
  },
  faq: [
    {
      question: "Is Central a good neighborhood in Minneapolis?",
      answer:
        "Central is a solid, affordable neighborhood in south Minneapolis that offers genuine diversity, good transit connections, and proximity to Powderhorn Park. It's not a destination neighborhood — it's a living-in neighborhood. If you want affordable housing in a diverse community with access to the rest of the city, Central delivers.",
    },
    {
      question: "Is Central, Minneapolis safe?",
      answer:
        "Central's safety profile is mixed. Crime rates are above the city average, with property crime being the most common concern. The Chicago Avenue corridor sees more activity than the residential interior. Many residents feel comfortable on their blocks while acknowledging the broader challenges. Community engagement in safety issues is active.",
    },
    {
      question: "How much does it cost to live in Central?",
      answer:
        "Central is affordable by Minneapolis standards. One-bedroom apartments rent for $950 to $1,300. Single-family homes sell in the $180,000 to $320,000 range. Duplexes and small multi-family properties are common and often accessible for first-time buyers. It's one of the more affordable options in south Minneapolis with good access to the rest of the city.",
    },
    {
      question: "Where exactly is Central in Minneapolis?",
      answer:
        "Central is in south Minneapolis, bounded roughly by East 38th Street to the north, Cedar Avenue to the east, East 42nd Street to the south, and Chicago Avenue to the west. It sits directly south of the Powderhorn Park neighborhood and north of the Bancroft neighborhood.",
    },
    {
      question: "What schools serve Central?",
      answer:
        "Bancroft Elementary School serves the area for elementary grades. South High School is the designated comprehensive high school. The Minneapolis Public Schools open enrollment system allows families to access magnet and specialty programs across the district, and several charter school options are available nearby.",
    },
    {
      question: "Is Central walkable?",
      answer:
        "Moderately. The Chicago and Bloomington Avenue corridors provide access to groceries, restaurants, and services within walking distance. The Walk Score of 74 reflects decent but not outstanding pedestrian access. Most daily errands can be handled without a car, though the selection is more limited than in denser neighborhoods.",
    },
    {
      question: "What is the character of Central compared to Powderhorn?",
      answer:
        "Central is quieter and more residential than Powderhorn Park to the north. It shares the diversity but has less of the activist, arts-oriented culture that defines Powderhorn. Central is where people live; Powderhorn is where they gather. The two neighborhoods are complementary, and many residents move between them without thinking about the boundary.",
    },
    {
      question: "Is Central gentrifying?",
      answer:
        "Central has seen modest increases in property values but has not experienced the rapid gentrification seen in neighborhoods closer to downtown. Its affordability remains a defining characteristic. Some new investment and renovation activity has occurred, particularly along the commercial corridors, but the neighborhood's character has been relatively stable.",
    },
  ],
  nearby: [
    { name: "Powderhorn Park", slug: "powderhorn-park", description: "The park, the lake, and south Minneapolis's most engaged community" },
    { name: "Bancroft", slug: "bancroft", description: "Quiet residential streets south of Central" },
    { name: "Corcoran", slug: "corcoran", description: "Just east — diverse, residential, community-focused" },
    { name: "Bryant", slug: "bryant", description: "Residential streets west of Chicago Avenue" },
    { name: "Standish", slug: "standish", description: "East of Central, transitioning toward Nokomis" },
  ],
  closing: {
    title: "What Makes Central Worth Knowing",
    paragraphs: [
      "Central is not a neighborhood that demands attention. It doesn't have a signature restaurant corridor or a beloved park or a community-defining battle. What it has is something more ordinary and in some ways more valuable: affordable homes on quiet streets in a diverse community with decent access to the rest of Minneapolis. It is a neighborhood where people live — where they raise kids, tend gardens, walk to the bus stop, and know their neighbors by name.",
      "The challenges are real — crime that can't be ignored, infrastructure that needs investment, the slow pressure of rising costs on a community that depends on affordability. But Central is a neighborhood that works the way neighborhoods are supposed to work: quietly, reliably, and with enough room for people from different backgrounds to build lives side by side. In a city that increasingly sorts itself by income and race, that's worth more than it gets credit for.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Central doesn&apos;t announce itself. There&apos;s no signature
          landmark, no restaurant that food writers make pilgrimages to,
          no park that defines the neighborhood&apos;s identity the way
          Powderhorn Lake defines the neighborhood to the north. What
          Central has is the thing that&apos;s getting harder to find in
          Minneapolis: affordable homes on tree-lined streets where
          families from a dozen backgrounds live side by side without
          anyone writing a think piece about it. The Chicago Avenue bus
          runs through on its way somewhere else. The corner stores stock
          tortillas and injera and Folgers. The neighbors wave. It is
          a neighborhood that works without trying to be interesting,
          which is, of course, what makes it interesting.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/central/hero.webp"
        alt="Residential street in the Central neighborhood of Minneapolis with older homes and mature trees"
        caption="Central — quiet residential streets in south Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Central, Minneapolis?">
        <Prose>
          <p>
            Central is a residential neighborhood in south Minneapolis,
            bounded roughly by East 38th Street to the north, Cedar Avenue
            to the east, East 42nd Street to the south, and Chicago Avenue
            to the west. With approximately 7,000 residents, it sits in the
            geographic and demographic middle of south Minneapolis —
            diverse, affordable, and connected to major corridors without
            being dominated by any of them.
          </p>
          <p>
            The neighborhood takes its name from its location between the
            more prominent neighborhoods that surround it — south of
            Powderhorn Park, north of Bancroft, west of Standish, east of
            Bryant. Its defining features are Chicago Avenue and Bloomington
            Avenue, the north-south commercial corridors that provide
            grocery stores, restaurants, and services to the surrounding
            residential blocks. Central is a living-in neighborhood, not a
            going-to neighborhood, and the people who live here tend to
            appreciate it for exactly that reason.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Central Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/central/neighborhood-sign.webp"
          alt="Central neighborhood sign in Minneapolis"
          caption="The Central neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Central History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was part of the homeland
            of the Dakota people. Development came in the late 19th and
            early 20th centuries as Minneapolis expanded southward from its
            industrial core. The neighborhood filled in with modest
            single-family homes and duplexes built for working-class
            families — the same pattern visible across much of south
            Minneapolis.
          </p>
          <p>
            Through the early and mid-20th century, Central was a
            predominantly white, working-class neighborhood — Scandinavian,
            German, and Irish families who worked in the city&apos;s mills,
            factories, and trades. The houses were small, the lots were
            narrow, and the community was tight-knit in the way that
            neighborhoods built around churches and corner bars tend to be.
          </p>
          <p>
            The demographic shifts that transformed much of south Minneapolis
            beginning in the 1970s and 1980s reached Central gradually.
            African American families moved in as housing opened up. Latino
            families followed, drawn by affordability and proximity to the
            Lake Street commercial corridor. Somali and East African
            immigrants arrived in the 1990s and 2000s. The neighborhood
            diversified block by block, and today it is one of the most
            racially mixed areas in the city — not through any single moment
            of transformation, but through decades of gradual change.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Central">
        <Prose>
          <p>
            Central is a neighborhood of small homes, modest yards, and
            residential streets that are quieter than you might expect
            given the diversity statistics. The blocks between the
            commercial corridors are genuinely peaceful — kids riding bikes,
            gardens in the front yards, the occasional dog walker. It is
            not a neighborhood where a lot happens publicly; the life here
            is domestic, centered on homes and families and the daily
            routines of getting by.
          </p>
          <p>
            The diversity is real but understated. Central doesn&apos;t
            have the visible cultural infrastructure of the Phillips
            neighborhoods to the north — no global market, no cultural
            center, no corridor of immigrant-owned restaurants. The
            diversity shows up in smaller ways: in the languages spoken
            at the bus stop, in the food smells drifting from kitchens
            on a summer evening, in the mix of faces at the park.
          </p>
          <p>
            Chicago Avenue and Bloomington Avenue provide the commercial
            backbone. These are not glamorous corridors — dollar stores,
            auto repair shops, small groceries, and fast-food restaurants
            share space with the occasional independent restaurant or
            community-serving business. But they provide the essential
            services that allow the residential blocks to function, and
            for most Central residents, that&apos;s what matters.
          </p>
          <p>
            The proximity to{" "}
            <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
              Powderhorn Park
            </Link>{" "}
            to the north gives Central residents access to one of south
            Minneapolis&apos;s most beloved parks and most engaged
            communities, while the quieter{" "}
            <Link href="/neighborhoods/bancroft" className="text-[#2a9d8f] hover:underline">
              Bancroft
            </Link>{" "}
            neighborhood to the south provides a buffer before the even
            quieter precincts near Minnehaha Creek.
          </p>
        </Prose>
        <Quote
          text="I tell people I live in Central and they say, 'Where's that?' That's actually what I like about it. It's not trying to be anything other than a decent place to live."
          cite="Central resident, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Central Food, Drink & Local Spots">
        <Prose>
          <p>
            Central is not a food destination, but the neighborhood has
            enough to keep residents fed without driving far. The options
            reflect the community&apos;s demographics — a mix of familiar
            chains, small independent spots, and the kind of practical
            groceries that stock what the neighborhood needs.
          </p>
        </Prose>

        <ArticleSubsection title="Local Spots">
          <PlaceCardComponent place={{ name: "Chicago Avenue Taquerias", tag: "Mexican", price: "$", description: "Several small taquerias along Chicago Avenue serve affordable tacos, burritos, and tortas. These are neighborhood spots — no frills, good food, fair prices." }} />
          <PlaceCardComponent place={{ name: "East African Restaurants", tag: "Somali / East African", price: "$", description: "Small restaurants along Bloomington and Chicago Avenues serve Somali and East African cuisine — rice plates, sambusas, and tea. These are community gathering spots that serve food, not restaurants that happen to have a community." }} />
          <PlaceCardComponent place={{ name: "Local Groceries", tag: "Grocery", price: "$", description: "Small groceries on Chicago and Bloomington stock essentials alongside specialty items from Latin America, East Africa, and Southeast Asia. For larger grocery runs, the Cub Foods on Lake Street is accessible by bus or car." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Central">
        <Prose>
          <p>
            Central has modest park resources within its own boundaries but
            benefits from proximity to larger green spaces in surrounding
            neighborhoods.
          </p>
        </Prose>

        <ArticleSubsection title="Central Gym Park">
          <Prose>
            <p>
              Central Gym Park, on 38th Street, includes a gymnasium,
              playground, and sports fields. It serves as the neighborhood&apos;s
              primary recreational facility, with programming for youth and
              community events throughout the year.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Powderhorn Park">
          <Prose>
            <p>
              Powderhorn Park — the park itself, with its lake, paths, and
              community energy — is just north of Central&apos;s boundary and
              easily accessible on foot. Many Central residents consider
              Powderhorn their park, and it functions as the de facto green
              heart of the surrounding area.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Biking & Trails">
          <Prose>
            <p>
              Central is well-connected to Minneapolis&apos;s bike trail
              network. Bloomington Avenue has bike infrastructure, and the
              Midtown Greenway is accessible to the north. The neighborhood&apos;s
              relatively flat terrain and grid street pattern make it
              practical for year-round cycling.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Central Schools">
        <Prose>
          <p>
            Bancroft Elementary School serves Central for elementary grades,
            providing education to a diverse student body that reflects the
            neighborhood&apos;s demographics. South High School is the
            designated comprehensive high school, offering International
            Baccalaureate and career and technical education programs.
          </p>
          <p>
            The Minneapolis Public Schools open enrollment system allows
            families to access magnet and specialty programs across the
            district. Several charter school options are available in the
            surrounding area, including schools with culturally specific
            programming.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Central Real Estate & Housing">
        <Prose>
          <p>
            Central&apos;s housing market is characterized by affordability
            and variety. The stock is predominantly single-family homes and
            duplexes built in the early to mid-20th century, with scattered
            apartment buildings along the commercial corridors.
          </p>
        </Prose>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              One-bedroom apartments rent for $950 to $1,300 per month —
              affordable by Minneapolis standards, particularly for the
              central location. The rental housing is largely in older
              buildings, and amenities are basic. Some newer affordable
              housing developments have been built in the area.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Buying in Central">
          <Prose>
            <p>
              Single-family homes sell in the $180,000 to $320,000 range,
              making Central accessible for first-time buyers. Condition
              varies — some homes have been updated, while others need
              significant work. Duplexes range from $220,000 to $400,000.
              The neighborhood attracts a mix of owner-occupants, investors,
              and families seeking affordable homeownership in a central
              location.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We looked at a dozen neighborhoods before buying here. Central had the best combination of price, location, and neighbors who actually talk to each other." cite="Central homeowner, neighborhood survey" />
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/central/streetscape.webp"
        alt="Chicago Avenue corridor through the Central neighborhood of Minneapolis"
        caption="Chicago Avenue — Central's commercial spine"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Central">
        <Prose>
          <p>
            Central benefits from two major north-south bus corridors —
            Chicago Avenue and Bloomington Avenue — that connect the
            neighborhood to downtown Minneapolis, Lake Street, and southern
            suburbs. The Route 5 on Chicago Avenue is one of the most
            frequent routes in the Metro Transit system.
          </p>
          <p>
            Biking is practical, with bike-friendly streets and connections
            to the Midtown Greenway. The neighborhood is flat, grid-patterned,
            and well-suited to cycling as a primary mode of transportation.
          </p>
          <p>
            Driving access is straightforward — I-35W is a short drive
            west, and the street grid connects to major east-west routes
            including Lake Street and 38th Street. Street parking is
            generally available without difficulty.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Central faces the familiar set of challenges that affect
            affordable, diverse neighborhoods in Minneapolis — crime,
            infrastructure needs, and the slow pressure of rising costs.
          </p>
        </Prose>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime rates in Central are above the city average, with
              property crime the most common concern. The intersection of
              38th and Chicago — which became internationally known after
              the murder of George Floyd in 2020 at that corner — sits at
              the northern edge of the neighborhood. The area has been a
              site of ongoing community reckoning, memorialization, and
              debate about public safety and racial justice.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Affordability Pressures">
          <Prose>
            <p>
              Central&apos;s affordability is its most important asset and
              its most vulnerable one. As Minneapolis housing costs rise
              across the board, neighborhoods like Central — which depend
              on low prices to serve diverse, working-class populations —
              face the risk of gradual displacement. Property values have
              been climbing, rents are ticking upward, and the families who
              make this neighborhood what it is may eventually be priced
              out of it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Infrastructure and Services">
          <Prose>
            <p>
              Parts of Central show the effects of long-term underinvestment
              — aging infrastructure, uneven sidewalks, and commercial
              corridors that could use more investment. The neighborhood
              has been part of citywide conversations about equitable
              infrastructure spending, but progress is incremental.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Central FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
