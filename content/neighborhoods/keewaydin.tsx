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
    title: "Keewaydin, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Keewaydin, Minneapolis — Keewaydin Park, Lake Nokomis proximity, quiet residential streets, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Keewaydin",
  deck: "Quiet blocks near the lake — where Keewaydin Park anchors a residential neighborhood that feels like a suburb forgot it was in Minneapolis, and Lake Nokomis is a short walk away.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Keewaydin?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Keewaydin" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Keewaydin, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$280K–$380K", label: "Median home sale price (2025 data)" },
      { value: "$1,100–$1,400", label: "Typical 1BR apartment rent (2025)" },
      { value: "62", label: "Walk Score" },
      { value: "78", label: "Bike Score" },
      { value: "48", label: "Transit Score" },
      { value: "35%", label: "Renter-occupied housing" },
      { value: "4", label: "Parks within or bordering the neighborhood" },
    ],
  },
  faq: [
    {
      question: "Is Keewaydin a good neighborhood in Minneapolis?",
      answer:
        "Keewaydin is an excellent choice for families and anyone seeking quiet, residential living near Lake Nokomis. It has low crime, well-maintained homes, good parks, and a strong sense of community. It lacks the walkable commercial districts and nightlife of denser neighborhoods, which is exactly why many people choose it.",
    },
    {
      question: "Is Keewaydin safe?",
      answer:
        "Keewaydin is one of the safer neighborhoods in Minneapolis, with crime rates well below the city average. Property crime is the most common concern, as it is citywide, but violent crime is rare. It's a neighborhood where kids play outside, people walk at night, and the biggest safety concern is usually a coyote sighting near the lake.",
    },
    {
      question: "How much does it cost to live in Keewaydin?",
      answer:
        "Keewaydin is moderately priced for Minneapolis. Single-family homes typically sell in the $280,000 to $380,000 range. Rental units are limited — most housing is owner-occupied — but one-bedroom apartments in the area run $1,100 to $1,400. It's more affordable than lakeside neighborhoods to the west but pricier than Phillips or Powderhorn.",
    },
    {
      question: "Where exactly is Keewaydin in Minneapolis?",
      answer:
        "Keewaydin is in far south Minneapolis, bounded roughly by East 50th Street to the north, 34th Avenue South to the east, Minnehaha Creek and East 54th Street to the south, and Cedar Avenue to the west. It sits just east of Lake Nokomis and north of Minnehaha Creek.",
    },
    {
      question: "What schools serve Keewaydin?",
      answer:
        "Keewaydin Elementary School, located within the neighborhood at 5209 30th Avenue South, serves pre-K through 5th grade. It is a well-regarded Minneapolis Public School with strong community support. Roosevelt High School is the designated comprehensive high school for the area.",
    },
    {
      question: "Is Keewaydin walkable?",
      answer:
        "Moderately. Keewaydin is primarily residential, so walkability depends on what you need. The neighborhood is excellent for walking to parks, the lake, and schools. For shopping, dining, and services, you'll likely need to drive or bike to nearby commercial corridors on Chicago Avenue or 34th Avenue.",
    },
    {
      question: "How close is Keewaydin to Lake Nokomis?",
      answer:
        "Very close. Lake Nokomis is just west of Keewaydin's boundary, accessible within a 5-10 minute walk from most parts of the neighborhood. The lake's beach, trails, and parkland are a defining amenity for Keewaydin residents.",
    },
    {
      question: "Is Keewaydin good for families?",
      answer:
        "Keewaydin is one of the best family neighborhoods in Minneapolis. It has a well-regarded elementary school, excellent parks, low crime, safe streets for kids to bike and play, and proximity to Lake Nokomis. The housing stock — mostly single-family homes with yards — is designed for family living.",
    },
  ],
  nearby: [
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis, the beach, and one of south Minneapolis's most beloved neighborhoods" },
    { name: "Wenonah", slug: "wenonah", description: "Quiet residential streets near the creek" },
    { name: "Standish", slug: "standish", description: "North of Keewaydin — diverse and residential" },
    { name: "Minnehaha", slug: "minnehaha", description: "Minnehaha Falls and creek access to the east" },
    { name: "Hale", slug: "hale", description: "West of Cedar — similar quiet residential character" },
  ],
  closing: {
    title: "What Makes Keewaydin Worth Knowing",
    paragraphs: [
      "Keewaydin is the kind of neighborhood that doesn't generate headlines or trend on social media. It is a place where families buy homes and stay for decades, where the elementary school is a genuine community institution, where the lake is close enough to walk to after dinner and the park is where the kids go after school. It is not exciting in the way that Uptown or Northeast are exciting. It is stable in the way that very few urban neighborhoods manage to be.",
      "What you get in Keewaydin is what a lot of people say they want but can't always find within city limits: quiet streets, good schools, safe parks, and neighbors who wave. The trade-off is that you'll drive for most commercial needs and you won't find the cultural density that defines Minneapolis's more celebrated neighborhoods. For many families, that trade-off is exactly the point.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Tuesday evening in July, the only sounds on a Keewaydin side
          street are a sprinkler hitting the sidewalk, a kid calling from
          a backyard, and — if you listen carefully — the distant splash
          of someone jumping off the dock at Lake Nokomis, six blocks west.
          This is a neighborhood that measures its quality of life in
          silence, in the absence of things that bother you rather than the
          presence of things that excite you. The houses are tidy. The yards
          are mowed. The elementary school has a waiting list. The lake is
          close enough to walk to but far enough that you don&apos;t deal
          with beach traffic. Keewaydin is Minneapolis for people who want
          to live in Minneapolis but don&apos;t need Minneapolis to remind
          them of it every day.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/keewaydin/hero.webp"
        alt="Quiet residential street in the Keewaydin neighborhood of Minneapolis with mature trees"
        caption="Keewaydin — quiet residential streets, mature trees, and Lake Nokomis a short walk away"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Keewaydin, Minneapolis?">
        <Prose>
          <p>
            Keewaydin is a quiet, predominantly residential neighborhood
            in far south Minneapolis, bounded roughly by East 50th Street
            to the north, 34th Avenue South to the east, Minnehaha Creek
            and East 54th Street to the south, and Cedar Avenue to the
            west. With approximately 3,500 residents, it is one of the
            smaller neighborhoods in Minneapolis, and its character is
            defined by what surrounds it: Lake Nokomis to the west,
            Minnehaha Creek to the south, Keewaydin Park at its center,
            and the kind of tree-canopied residential streets that people
            picture when they imagine the best version of urban
            family life.
          </p>
          <p>
            Keewaydin is overwhelmingly owner-occupied single-family
            homes — modest but well-maintained bungalows, ramblers, and
            Cape Cods built primarily in the 1920s through 1950s. There
            is almost no commercial activity within the neighborhood
            itself, which is both its appeal and its limitation. You
            live here for the quiet, the parks, the lake, and the
            schools. You go elsewhere for restaurants, shopping, and
            nightlife.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Keewaydin Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/keewaydin/neighborhood-sign.webp"
          alt="Keewaydin neighborhood sign in Minneapolis"
          caption="The Keewaydin neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Keewaydin History & Origins">
        <Prose>
          <p>
            The name Keewaydin comes from the Ojibwe word for &ldquo;north
            wind&rdquo; or &ldquo;northwest wind&rdquo; — a name that
            predates the neighborhood&apos;s development and connects this
            far-south corner of Minneapolis to the Indigenous heritage of
            the region. Before European settlement, this land was part of
            the homeland of the Dakota people, and the creeks and lakes
            that define the area&apos;s geography were important
            waterways for centuries before anyone platted residential lots.
          </p>
          <p>
            Development came relatively late to this part of Minneapolis.
            While neighborhoods closer to downtown were built up in the
            1880s and 1890s, Keewaydin was largely agricultural and open
            land into the early 20th century. The housing that defines the
            neighborhood today was built primarily between the 1920s and
            1950s, as streetcar lines extended south and returning veterans
            from World War II needed homes. The result is a remarkably
            consistent building stock — modest single-family homes on
            regular lots, built for young families of moderate means.
          </p>
          <p>
            The neighborhood has remained residentially stable for decades.
            Unlike neighborhoods closer to the urban core, Keewaydin
            experienced relatively little upheaval during the mid-century
            period of suburban flight. Families stayed, maintained their
            homes, and passed the benefits of stability forward. The
            result is a neighborhood that feels settled in a way that
            many urban areas do not.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Keewaydin">
        <Prose>
          <p>
            Living in Keewaydin means living in a neighborhood where the
            rhythms are seasonal and domestic. In summer, the pull is
            toward the lake — Lake Nokomis, just blocks to the west,
            with its swimming beach, walking trails, and the particular
            quality of light that comes off the water on a July evening.
            In winter, the neighborhood goes inward — kids sled in
            Keewaydin Park, cross-country skiers track through the creek
            corridor, and the streets are quiet in the way that only
            cold weather can make a city street quiet.
          </p>
          <p>
            The housing stock is predominantly single-family homes —
            bungalows, ramblers, and Cape Cods with two or three bedrooms,
            a garage, and a yard. Most were built between the 1920s and
            1950s, and the best of them have been updated while keeping
            the original character. The neighborhood is overwhelmingly
            owner-occupied, which gives it a stability and continuity
            that rental-heavy neighborhoods lack. People buy here and
            stay.
          </p>
          <p>
            The social life of Keewaydin revolves around the school, the
            park, and the lake. Keewaydin Elementary is a genuine
            neighborhood school — the kind of place where parents know
            each other, where the fall carnival is a community event, and
            where the PTA is active without being overbearing. The park
            hosts youth sports, playground time, and the informal
            gathering that happens when neighbors share green space.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/nokomis" className="text-[#2a9d8f] hover:underline">
              Nokomis
            </Link>{" "}
            to the west offers lake access and a slightly more commercial
            character, while{" "}
            <Link href="/neighborhoods/wenonah" className="text-[#2a9d8f] hover:underline">
              Wenonah
            </Link>{" "}
            to the south shares the quiet residential feel along
            Minnehaha Creek.
          </p>
        </Prose>
        <Quote
          text="We moved here for the school and stayed for the lake. Our kids bike to Nokomis in the summer and sled in Keewaydin Park in the winter. It's the life we wanted."
          cite="Keewaydin family, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Keewaydin Food, Drink & Local Spots">
        <Prose>
          <p>
            Keewaydin itself has essentially no commercial activity — it
            is purely residential. For food, drink, and shopping, residents
            head to nearby corridors and neighboring commercial nodes.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <PlaceCardComponent place={{ name: "Nokomis Beach Coffee", tag: "Café", price: "$", description: "Located near Lake Nokomis, this is the closest coffee shop for most Keewaydin residents — a casual spot with good coffee and lake-adjacent vibes." }} />
          <PlaceCardComponent place={{ name: "Sandcastle", tag: "Gastropub", price: "$$", description: "Near the Nokomis beach area, Sandcastle serves burgers, sandwiches, and drinks with lake views. It's the closest thing to a neighborhood restaurant for Keewaydin residents." }} />
          <PlaceCardComponent place={{ name: "34th Avenue Corridor", tag: "Various", price: "$–$$", description: "The commercial stretch along 34th Avenue South, east of the neighborhood, includes small restaurants, coffee shops, and services that serve the surrounding residential areas." }} />
          <PlaceCardComponent place={{ name: "Chicago Avenue Commercial", tag: "Various", price: "$–$$", description: "Chicago Avenue to the west offers a broader range of restaurants, groceries, and services, including chains and independent spots accessible by a short drive or bike ride." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Keewaydin">
        <Prose>
          <p>
            Parks and outdoor access are Keewaydin&apos;s strongest amenities.
            The neighborhood is bracketed by Lake Nokomis to the west and
            Minnehaha Creek to the south, making it one of the best-situated
            neighborhoods in Minneapolis for outdoor recreation.
          </p>
        </Prose>

        <ArticleSubsection title="Keewaydin Park">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park sits at the center of
              the community, offering a playground, sports fields, a hockey
              rink (flooded in winter), and open green space. It&apos;s the
              kind of neighborhood park that functions as the community&apos;s
              backyard — a place where kids play after school, where
              families gather on summer evenings, and where the neighborhood
              comes together.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Lake Nokomis">
          <Prose>
            <p>
              Lake Nokomis is Keewaydin&apos;s most significant natural
              amenity, accessible within a 5-10 minute walk from most parts
              of the neighborhood. The lake offers a swimming beach (one
              of the city&apos;s best), a 2.7-mile walking/biking trail,
              fishing, kayaking, and the particular pleasure of watching
              the sun set over the water on a summer evening. In winter,
              the lake supports cross-country skiing, ice fishing, and
              skating.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Minnehaha Creek">
          <Prose>
            <p>
              Minnehaha Creek forms Keewaydin&apos;s southern boundary,
              providing a greenway corridor that runs from Lake Harriet
              east to Minnehaha Falls and the Mississippi River. The creek
              trail is popular for walking, biking, and — in the spring
              melt — canoeing. It connects Keewaydin to the broader
              Minneapolis park system and provides a natural buffer between
              the neighborhood and the city to the south.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Keewaydin Schools">
        <Prose>
          <p>
            Keewaydin Elementary School, at 5209 30th Avenue South, is the
            neighborhood&apos;s dedicated public elementary and one of the
            most important community institutions. The school serves pre-K
            through 5th grade and is well-regarded within the Minneapolis
            Public Schools system, with strong parent involvement and
            community support.
          </p>
          <p>
            For middle school, students typically attend one of the
            Minneapolis Public Schools options through the district&apos;s
            open enrollment system. Roosevelt High School is the designated
            comprehensive high school serving the area.
          </p>
          <p>
            The school is a significant draw for families considering
            Keewaydin. In a city where school quality varies widely by
            neighborhood, Keewaydin Elementary&apos;s reputation is a
            genuine asset that supports property values and community
            stability.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Keewaydin Real Estate & Housing">
        <Prose>
          <p>
            Keewaydin&apos;s housing market is defined by stability. The
            overwhelming majority of housing is owner-occupied single-family
            homes, and turnover is low — people buy here and stay for
            decades. When homes do come on the market, they attract strong
            interest from families seeking good schools, safe streets, and
            lake proximity.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Keewaydin">
          <Prose>
            <p>
              Single-family homes typically sell in the $280,000 to $380,000
              range, with condition and updates being the primary price
              differentiators. The best-located homes — those closest to
              the lake — command premiums. The housing stock is mostly
              two-to-three-bedroom bungalows and ramblers from the 1920s
              to 1950s. Updated homes with modern kitchens and bathrooms
              sell at the top of the range; original-condition homes offer
              entry points for buyers willing to invest in renovations.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Rental options are limited in Keewaydin, as the housing stock
              is predominantly owner-occupied. The few available rentals —
              mostly upper or lower units in duplexes — run $1,100 to
              $1,400 for a one-bedroom. If you&apos;re looking to rent in
              this area, you may need to expand your search to neighboring
              areas with more rental housing.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We've been here seventeen years. The kids grew up, went to Keewaydin Elementary, rode their bikes to the lake every summer. I can't imagine living anywhere else in Minneapolis." cite="Keewaydin homeowner, neighborhood survey" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Keewaydin">
        <Prose>
          <p>
            Keewaydin is a car-oriented neighborhood by Minneapolis
            standards. The Walk Score of 62 reflects the fact that while
            the neighborhood is pleasant for walking, there is very little
            within walking distance besides parks, the lake, and the school.
            For commercial needs — groceries, restaurants, shopping — most
            residents drive or bike to nearby corridors.
          </p>
          <p>
            Biking is practical and popular, particularly in warmer months.
            The Bike Score of 78 reflects good cycling infrastructure,
            including connections to the Lake Nokomis trail, Minnehaha Creek
            trail, and surface street bike lanes. Many residents commute to
            downtown by bike via the Minnehaha corridor in under 30 minutes.
          </p>
          <p>
            Bus service is available on Cedar Avenue and 34th Avenue South
            but is less frequent than in denser neighborhoods. The Transit
            Score of 48 reflects limited but functional public transit.
            Most households in Keewaydin own at least one car, and the
            neighborhood is designed around that reality — garages, driveways,
            and easy street parking are standard.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Keewaydin faces fewer dramatic tensions than many Minneapolis
            neighborhoods. The changes here are incremental rather than
            transformational.
          </p>
        </Prose>

        <ArticleSubsection title="Rising Prices">
          <Prose>
            <p>
              Home prices have been rising steadily, driven by demand for
              family-friendly neighborhoods with good schools and lake
              access. The neighborhood is becoming less affordable for
              first-time buyers, and the entry point that once made
              Keewaydin accessible to middle-income families is climbing
              upward. This is a citywide trend, but it matters here because
              affordability has been part of Keewaydin&apos;s appeal.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Density Debates">
          <Prose>
            <p>
              Minneapolis&apos;s 2040 Plan, which eliminated single-family-only
              zoning citywide, has generated discussion in Keewaydin about
              the potential for duplexes and triplexes on streets that have
              been exclusively single-family for decades. So far, the impact
              has been minimal — few new multi-unit buildings have been
              proposed — but the debate reflects broader tensions about
              growth, density, and neighborhood character that are playing
              out across Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Climate and Infrastructure">
          <Prose>
            <p>
              Minnehaha Creek flooding has been an occasional concern for
              properties near the southern boundary. Climate change is
              increasing the frequency of extreme rainfall events, and
              the creek corridor — while beautiful — can pose challenges
              during heavy storms. The Minneapolis Park Board and watershed
              district are working on resilience measures, but creek-adjacent
              homebuyers should be aware of the risk.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Keewaydin FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
