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
    title: "Page, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Page, Minneapolis — Near North community, diverse residential streets, affordability, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Page",
  deck: "A small piece of Near North — where residential blocks hold their ground between busier corridors, and a tight-knit community of working families proves that a neighborhood doesn't need to be big to matter.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Page?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Page" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Page, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,000", label: "Residents (US Census / ACS estimates)" },
      { value: "$150K–$230K", label: "Median home sale price (2025 data)" },
      { value: "$800–$1,100", label: "Typical 1BR apartment rent (2025)" },
      { value: "68", label: "Walk Score" },
      { value: "75", label: "Bike Score" },
      { value: "52", label: "Transit Score" },
      { value: "50%", label: "Renter-occupied housing" },
      { value: "80%+", label: "Residents of color (ACS estimates)" },
    ],
  },
  faq: [
    {
      question: "Is Page a good neighborhood in Minneapolis?",
      answer:
        "Page is a small, affordable, and diverse neighborhood in the Near North area of Minneapolis. It offers some of the lowest housing costs in the city, strong community bonds among long-term residents, and proximity to downtown. It also faces challenges including higher crime rates, infrastructure gaps, and the legacy of systemic disinvestment. For people who value affordability, diversity, and community spirit, Page has genuine strengths.",
    },
    {
      question: "Is Page, Minneapolis safe?",
      answer:
        "Page's crime rates are above the Minneapolis average, consistent with the broader Near North area. Property crime and some violent crime are persistent concerns. The situation is concentrated in certain areas and times, and many residents feel safe on their blocks while acknowledging the broader challenges. Community safety efforts are ongoing, and neighbors tend to look out for each other.",
    },
    {
      question: "How much does it cost to live in Page?",
      answer:
        "Page is one of the most affordable neighborhoods in Minneapolis. Single-family homes sell in the $150,000 to $230,000 range — among the lowest in the city. One-bedroom apartments rent for $800 to $1,100. The affordability is a significant draw for first-time homebuyers, families on modest incomes, and anyone seeking to live in Minneapolis without a large housing budget.",
    },
    {
      question: "Where exactly is Page in Minneapolis?",
      answer:
        "Page is a small neighborhood in the Near North area of Minneapolis, on the city's north side. It is bounded roughly by West Broadway Avenue to the north, Penn Avenue North to the east, Plymouth Avenue to the south, and Thomas Avenue North to the west. It sits within the broader Near North community.",
    },
    {
      question: "What schools serve Page?",
      answer:
        "Several Minneapolis Public Schools serve the Page area. North High School is the designated comprehensive high school for the Near North community. Charter schools with culturally specific programming are also available in the area. The Minneapolis Public Schools open enrollment system allows families to access programs citywide.",
    },
    {
      question: "Is Page walkable?",
      answer:
        "Moderately. The West Broadway Avenue corridor to the north provides some commercial access, including restaurants, groceries, and services. The Walk Score of 68 reflects decent but not outstanding pedestrian access. Some daily needs can be met on foot, but a car or bike extends options significantly.",
    },
    {
      question: "What is the Near North area of Minneapolis?",
      answer:
        "Near North is a community designation encompassing several neighborhoods on the north side of Minneapolis, including Page, Hawthorne, Jordan, Willard-Hay, and others. It is one of the most historically significant Black communities in Minneapolis and has been shaped by both rich cultural heritage and the lasting effects of redlining, disinvestment, and systemic racism.",
    },
    {
      question: "Is Page gentrifying?",
      answer:
        "Page has not experienced significant gentrification. Investment and development have been limited compared to neighborhoods closer to downtown or the lakes. Some new housing construction and renovation activity has occurred, but affordability remains the neighborhood's defining characteristic. Whether increased investment represents welcome improvement or the beginning of displacement depends on who you ask.",
    },
    {
      question: "What is the history of the Near North community?",
      answer:
        "The Near North area has been central to Black life in Minneapolis for over a century. It was one of the few areas where Black families could buy homes during the era of racial covenants and redlining. The community built churches, businesses, cultural institutions, and social networks that continue to anchor north Minneapolis today. That history coexists with the legacy of systematic disinvestment that has left lasting infrastructure and economic gaps.",
    },
  ],
  nearby: [
    { name: "Near - North", slug: "near-north", description: "The broader Near North community — cultural heritage and community resilience" },
    { name: "Willard - Hay", slug: "willard-hay", description: "West of Page — similar character with Theo Wirth Park access" },
    { name: "Jordan", slug: "jordan", description: "East of Page — residential Near North" },
    { name: "Hawthorne", slug: "hawthorne", description: "Southeast — Broadway corridor and community organizing" },
    { name: "Harrison", slug: "harrison", description: "South — closer to downtown, rapidly changing" },
  ],
  closing: {
    title: "What Makes Page Worth Knowing",
    paragraphs: [
      "Page is not a neighborhood that shows up on lists of Minneapolis's best places to live. The metrics that real estate websites use to rank neighborhoods — crime stats, Walk Scores, median incomes — tell a story that is accurate but incomplete. They measure what a neighborhood lacks without capturing what it has: the grandmother who has lived on the same block for forty years and knows every kid by name, the community garden where neighbors grow food and build relationships across racial lines, the church that feeds families every Saturday, the homeowner who maintains a beautiful yard because this is home and home deserves care.",
      "Page's challenges are real and serious — crime, disinvestment, the weight of historical injustice. But so is its community. The people who live here have built something meaningful in the face of obstacles that would have broken a less resilient place. They deserve investment, attention, and respect — not as objects of pity but as neighbors who have been doing the hard work of community for a very long time.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Page is the kind of neighborhood that gets flattened by
          statistics. Pull up a data dashboard and you&apos;ll see numbers
          that tell a story of disadvantage — high poverty rates, elevated
          crime, low median incomes, the kind of figures that make
          outsiders drive faster through intersections they don&apos;t stop
          at. What the numbers don&apos;t capture is the woman on 21st
          Avenue who has tended the same flower garden for thirty years,
          the block club that organized a cleanup last Saturday and fed
          everyone afterward, or the family who bought their first house
          here because it was what they could afford and then discovered
          that the neighbors were the best part of the deal. Page is a
          small neighborhood in the Near North area of Minneapolis. It is
          struggling in ways that are impossible to deny and thriving in
          ways that are impossible to see from a car.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/page/hero.webp"
        alt="Residential street in the Page neighborhood of Minneapolis with homes and mature trees"
        caption="Page — a small residential neighborhood in the Near North area of Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Page, Minneapolis?">
        <Prose>
          <p>
            Page is a small residential neighborhood in the Near North area
            of Minneapolis, bounded roughly by West Broadway Avenue to the
            north, Penn Avenue North to the east, Plymouth Avenue to the
            south, and Thomas Avenue North to the west. With approximately
            2,000 residents, it is one of the smaller neighborhoods in
            the city, occupying a compact patch of residential blocks in
            an area of Minneapolis that has been shaped by both rich
            cultural heritage and persistent systemic disinvestment.
          </p>
          <p>
            The neighborhood is predominantly African American, with
            growing populations of East African immigrants and other
            communities of color. It is one of the most affordable places
            to live in Minneapolis — a distinction that reflects both its
            accessibility and the historical forces that have kept property
            values low. Page shares the broader Near North community&apos;s
            story of resilience, organizing, and the slow, unfinished work
            of demanding equity in a city that has not always provided it.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Page Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/page/neighborhood-sign.webp"
          alt="Page neighborhood sign in Minneapolis"
          caption="The Page neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Page History & Origins">
        <Prose>
          <p>
            Page&apos;s history is inseparable from the broader history of
            the Near North community and the African American experience in
            Minneapolis. Before European settlement, this land was part of
            the Dakota homeland. Development came in the late 19th century
            as Minneapolis grew northward, with modest homes built for
            working-class families.
          </p>
          <p>
            The neighborhood&apos;s demographic trajectory was shaped
            decisively by racial covenants and redlining — the systematic
            practices that restricted where Black families could live and
            buy property in Minneapolis. From the 1910s through the 1960s,
            racial covenants written into property deeds prohibited the
            sale of homes to Black buyers in most of south and southwest
            Minneapolis. The Near North area — including Page — was one of
            the few parts of the city where Black families could purchase
            homes. This forced concentration created a vibrant Black
            community but also meant that the effects of discriminatory
            lending, insurance redlining, and public disinvestment were
            concentrated in these same neighborhoods.
          </p>
          <p>
            The civil rights era brought formal legal changes, but the
            structural effects of redlining — depressed property values,
            deferred maintenance, inadequate public investment, and
            concentrated poverty — persisted. The neighborhoods of Near
            North, including Page, have been navigating that legacy ever
            since.
          </p>
          <p>
            Despite these challenges, the community built institutions that
            endure: churches, community organizations, small businesses,
            and the kind of neighborhood networks that hold a community
            together when larger systems fail. That institutional resilience
            is as much a part of Page&apos;s history as the injustices
            that made it necessary.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Page">
        <Prose>
          <p>
            Page is a neighborhood of small homes on regular lots, most
            built in the early to mid-20th century. The housing stock is
            modest — two-and three-bedroom bungalows, Cape Cods, and
            small ramblers, some well-maintained and others showing the
            effects of age and underinvestment. The lots are small, the
            streets are narrow, and the overall feel is of a
            working-class neighborhood that has been home to working
            families for a century.
          </p>
          <p>
            The community here is tight-knit in the way that small
            neighborhoods in historically marginalized areas tend to be —
            bonds forged not just by proximity but by shared experience.
            People know each other. The block clubs are real. The churches
            are community centers as much as houses of worship. The
            grandmother who has been on the block for forty years is not
            just a neighbor; she is institutional memory, conflict resolver,
            and moral authority.
          </p>
          <p>
            The diversity is real and growing. Page has historically been
            predominantly African American, but recent years have brought
            Somali and other East African immigrant families, adding new
            layers to the community&apos;s cultural fabric. The integration
            is still in progress — different communities share the same
            blocks without always sharing the same social networks — but
            the physical proximity creates encounters that wouldn&apos;t
            happen in more segregated parts of the city.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/jordan" className="text-[#2a9d8f] hover:underline">
              Jordan
            </Link>{" "}
            to the east and{" "}
            <Link href="/neighborhoods/willard-hay" className="text-[#2a9d8f] hover:underline">
              Willard-Hay
            </Link>{" "}
            to the west share Page&apos;s Near North identity and many of
            the same challenges and strengths.
          </p>
        </Prose>
        <Quote
          text="People from outside drive through and see what's wrong. People who live here see what's right. We see the neighbors who show up, the families who stay, the kids who grow up knowing they're part of something."
          cite="Page resident, community meeting"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Page Food, Drink & Local Spots">
        <Prose>
          <p>
            Page&apos;s commercial options are limited within the
            neighborhood itself. The West Broadway Avenue corridor to the
            north provides the closest concentration of restaurants,
            groceries, and services.
          </p>
        </Prose>

        <ArticleSubsection title="West Broadway Corridor">
          <PlaceCardComponent place={{ name: "West Broadway Restaurants", tag: "Various", price: "$", description: "West Broadway Avenue, Page's northern boundary, has a mix of small restaurants, including soul food spots, Somali restaurants, and take-out counters. The offerings are affordable and community-oriented — these are places where neighbors eat, not destinations for food tourists." }} />
          <PlaceCardComponent place={{ name: "North Side Groceries", tag: "Grocery", price: "$", description: "Several small groceries and convenience stores along Broadway and Penn Avenue serve daily needs. For full-service grocery shopping, residents often travel to Cub Foods or other stores outside the immediate area." }} />
          <PlaceCardComponent place={{ name: "Community Institutions", tag: "Various", price: "$", description: "Churches and community organizations in the area frequently host meals, food distributions, and community dinners that serve as both nourishment and social gathering. These are not commercial operations, but they are an important part of the neighborhood's food landscape." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Plymouth Avenue Corridor">
          <Prose>
            <p>
              Plymouth Avenue, Page&apos;s southern boundary, provides
              additional commercial access, though options are limited.
              The corridor has seen some new investment in recent years,
              including small businesses and community-serving
              organizations.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Page">
        <Prose>
          <p>
            Page has modest park resources within its boundaries but
            benefits from proximity to some of the north side&apos;s
            recreational assets.
          </p>
        </Prose>

        <ArticleSubsection title="Farwell Park">
          <Prose>
            <p>
              Farwell Park, near the neighborhood, provides a playground,
              sports fields, and open green space. It serves as a
              gathering point for the surrounding community, hosting
              youth sports and community events.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="North Commons Park">
          <Prose>
            <p>
              North Commons Park, one of the most significant parks on
              the north side, is accessible from Page. It includes a
              swimming pool, basketball courts, a recreation center, and
              programming that serves the broader Near North community.
              North Commons has been a center of community life for
              decades.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Regional Park — the largest park in
              Minneapolis, with golf courses, trails, a beach, and winter
              sports facilities — is accessible from the western edge of
              Page. It represents one of the most significant recreational
              assets available to north side residents, offering green
              space, trails, and seasonal activities in a scale that
              rivals the Chain of Lakes.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Page Schools">
        <Prose>
          <p>
            Schools serving Page reflect the challenges and strengths of
            the broader Near North community. The student populations are
            diverse, high-poverty, and served by educators working with
            limited resources in demanding conditions.
          </p>
          <p>
            Several Minneapolis Public Schools serve the area for
            elementary and middle grades. North High School is the
            designated comprehensive high school for the Near North
            community. North has undergone multiple restructuring efforts
            aimed at improving outcomes, and opinions about its current
            state vary within the community.
          </p>
          <p>
            Charter schools with culturally specific programming serve
            students in the area, and the Minneapolis Public Schools open
            enrollment system allows families to access programs citywide.
            Many families in Page exercise school choice to access
            opportunities across the district.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Page Real Estate & Housing">
        <Prose>
          <p>
            Page is one of the most affordable neighborhoods in Minneapolis.
            The housing prices reflect the neighborhood&apos;s challenges —
            crime, infrastructure gaps, the legacy of disinvestment — as
            well as its genuine strengths: community bonds, affordability,
            and central location.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Page">
          <Prose>
            <p>
              Single-family homes sell in the $150,000 to $230,000 range —
              among the lowest in Minneapolis. Condition varies enormously,
              from well-maintained homes with pride of ownership to
              properties needing significant work. The low prices attract
              first-time buyers, families seeking homeownership on modest
              incomes, and investors. Buyers should inspect carefully and
              budget for potential renovations.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              One-bedroom apartments rent for $800 to $1,100 — well below
              the city average. The rental stock includes older apartments,
              duplexes, and some newer affordable housing developments.
              Housing quality varies, and tenants should be attentive to
              building condition and landlord responsiveness.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Investment and Development">
          <Prose>
            <p>
              Some new housing construction has occurred in Page and the
              broader Near North area, including affordable housing
              developments and scattered-site single-family homes built
              by community development organizations. These projects
              represent reinvestment in a historically disinvested area,
              though the scale has been modest relative to the need.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="I bought my house here for $165,000. My friends in Uptown pay more than my mortgage for rent. The neighborhood isn't perfect, but the house is mine, and I can build something here." cite="Page homeowner, community forum" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Page">
        <Prose>
          <p>
            Page has moderate transit connectivity. West Broadway Avenue
            and Penn Avenue provide bus routes connecting to downtown
            Minneapolis, the Blue Line light rail, and other parts of the
            city. The Transit Score of 52 reflects decent but not
            exceptional service.
          </p>
          <p>
            Biking is practical, with relatively flat terrain and
            connections to the broader Minneapolis bike network. Theodore
            Wirth Park&apos;s trails are accessible from the western edge
            of the neighborhood.
          </p>
          <p>
            Driving is the primary transportation mode for most residents.
            Downtown Minneapolis is approximately 10 minutes by car.
            I-94 is accessible via surface streets, connecting to the
            broader metro. Street parking is generally available without
            difficulty.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Page faces the set of challenges that define much of the Near
            North experience — the legacy of systemic racism, ongoing
            crime, the complicated politics of reinvestment, and the
            question of who benefits when change comes to a historically
            disinvested community.
          </p>
        </Prose>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime remains the most visible challenge. Property crime is
              common, and violent crime — while concentrated in specific
              locations and circumstances — is a persistent reality that
              affects quality of life and neighborhood perception. The
              community&apos;s relationship with policing is complicated,
              shaped by both a desire for safety and a history of
              disproportionate enforcement. Community-based safety
              initiatives, violence interrupters, and block club organizing
              represent alternative approaches that are ongoing.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Disinvestment and Reinvestment">
          <Prose>
            <p>
              Page and the broader Near North area have experienced decades
              of systematic disinvestment — in housing, infrastructure,
              public services, and commercial activity. Reinvestment is
              beginning, but it raises complicated questions: Will new
              investment serve existing residents or displace them? Will
              rising property values help homeowners build wealth or price
              renters out? These questions don&apos;t have simple answers,
              and the community is navigating them in real time.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Post-2020 Landscape">
          <Prose>
            <p>
              The murder of George Floyd in 2020 and the subsequent
              reckoning over policing, racial justice, and city governance
              affected the Near North community profoundly. The debates
              about public safety, police reform, and community
              self-determination played out with particular intensity in
              neighborhoods like Page, where the relationship between
              residents and the systems meant to serve them has been
              strained for generations. The conversation continues,
              without easy resolution.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Page FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
