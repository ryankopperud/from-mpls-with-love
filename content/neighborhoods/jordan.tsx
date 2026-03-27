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
    title: "Jordan, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Jordan, Minneapolis — diverse community, Jordan Park, affordable housing, community resilience, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Jordan",
  deck: "A North Minneapolis neighborhood that carries its name with quiet toughness — where affordable homes line tree-shaded blocks, where families have stayed through decades of disinvestment and rebuilding, and where community resilience is not a metaphor but a measurable daily practice.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Jordan?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Jordan" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Jordan, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$165K–$240K", label: "Median home sale price range (2025 data)" },
      { value: "1890s–1940s", label: "Era most homes were built" },
      { value: "60%+", label: "Black / African American population" },
      { value: "West Broadway", label: "Nearby commercial corridor" },
      { value: "12 min", label: "Drive to downtown Minneapolis" },
      { value: "56", label: "Walk Score" },
      { value: "74", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Jordan a good neighborhood in Minneapolis?",
      answer:
        "Jordan is a neighborhood with some of the most affordable housing in Minneapolis, a genuinely diverse community, and strong resident-led organizations. It also faces significant challenges — higher crime rates, commercial gaps, and the cumulative effects of decades of disinvestment. For people who want affordable homeownership and are willing to be active community participants, Jordan offers real opportunity alongside real challenges.",
    },
    {
      question: "Is Jordan, Minneapolis safe?",
      answer:
        "Jordan has higher crime rates than many Minneapolis neighborhoods, particularly for violent crime. This reflects systemic factors including concentrated poverty and inadequate services. Safety varies significantly by block — some blocks are stable and tight-knit while others face more frequent incidents. Community organizations and block clubs are active in safety efforts, and many long-term residents navigate the neighborhood with confidence born of familiarity.",
    },
    {
      question: "What is Jordan, Minneapolis known for?",
      answer:
        "Jordan is known as a core North Minneapolis neighborhood with deep community roots, affordable housing, and the challenges common to historically disinvested urban neighborhoods. Jordan Park provides a central community gathering space. The neighborhood has a strong tradition of community organizing, with active block clubs and the Jordan Area Community Council advocating for resident interests.",
    },
    {
      question: "How much do homes cost in Jordan, Minneapolis?",
      answer:
        "Jordan has some of the most affordable housing in Minneapolis, with median home sale prices ranging from roughly $165,000 to $240,000 in 2025. This makes homeownership accessible for many buyers priced out of other Minneapolis neighborhoods. Some homes need renovation, while rehabbed and new-construction properties reach higher price points.",
    },
    {
      question: "Where exactly is Jordan in Minneapolis?",
      answer:
        "Jordan is in North Minneapolis, roughly bounded by Lowry Avenue to the south, 26th Avenue North and Dowling Avenue to the north, the railroad corridor to the east, and Penn Avenue North to the west. It sits north of Hawthorne and south of the Folwell and Cleveland neighborhoods.",
    },
    {
      question: "What schools serve Jordan, Minneapolis?",
      answer:
        "Jordan is served by Minneapolis Public Schools. Jenny Lind Community School is a nearby elementary option. North High School serves the area for high school. Many families use the district's open enrollment system to access magnet programs and specialty schools. Charter schools and community-based educational programs provide additional options.",
    },
    {
      question: "Is Jordan, Minneapolis a good place to buy a home?",
      answer:
        "For buyers seeking very affordable homeownership in Minneapolis, Jordan offers one of the lowest entry points in the city. The housing stock is older and some properties need work, but community development organizations have produced quality affordable housing in the neighborhood. Buyers should understand both the opportunity and the challenges — including crime, commercial gaps, and the ongoing effects of disinvestment.",
    },
    {
      question: "What community organizations are in Jordan?",
      answer:
        "The Jordan Area Community Council is the primary neighborhood organization, advocating for residents on issues including public safety, housing quality, and development. Block clubs are active on many streets. Churches, nonprofits, and community-based organizations provide services and organizing infrastructure. The neighborhood's community infrastructure reflects a long tradition of self-advocacy.",
    },
  ],
  nearby: [
    { name: "Hawthorne", slug: "hawthorne", description: "Community organizing hub to the south" },
    { name: "Folwell", slug: "folwell", description: "Near Webber Park pool, residential blocks to the north" },
    { name: "Willard - Hay", slug: "willard-hay", description: "Residential neighborhood to the west" },
    { name: "McKinley", slug: "mckinley", description: "Community gardens and affordable housing nearby" },
    { name: "Cleveland", slug: "cleveland", description: "North Minneapolis neighborhood to the northeast" },
    { name: "Near North", slug: "near-north", description: "Historic Black community to the south" },
  ],
  closing: {
    title: "What Makes Jordan What It Is",
    paragraphs: [
      "Jordan is not a neighborhood that asks for your sympathy. It is a neighborhood that has been making do — and making community — with less than it was owed for longer than most Minneapolis residents have been alive. The families who own homes here, the block club leaders who patrol their streets, the organizers who show up at every city meeting, the kids who play at Jordan Park every summer — they are not defined by the challenges they face. They are defined by what they build in spite of those challenges.",
      "The honest truth about Jordan is that it is both harder and better than outsiders imagine. Harder, because the effects of disinvestment are real and daily. Better, because the community bonds, the affordability, the diversity, and the stubborn determination of the people who live here create something that no amount of investment can manufacture. Jordan does not need to be saved. It needs to be invested in, listened to, and treated with the same respect that every Minneapolis neighborhood deserves.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          A summer evening at Jordan Park: kids run through the spray of the
          splash pad while their parents watch from benches under the elms.
          A pickup basketball game draws a small crowd on the courts. An
          older man walks the perimeter of the park slowly, deliberately, as
          he has done every evening for the past fifteen years. A family
          sets up a folding table and starts grilling. The scene is ordinary
          — deeply, stubbornly ordinary — and in a neighborhood that has
          been defined by crisis narratives for decades, that ordinariness
          is its own kind of statement. People live here. They raise
          families here. They know their neighbors and their blocks and
          their park. The headlines never capture this, because normalcy
          is not news. But it is the foundation of everything.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/jordan/hero.webp"
        alt="A tree-lined residential block in Jordan, Minneapolis on a summer evening"
        caption="Jordan — tree-shaded blocks and persistent community in North Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Jordan, Minneapolis?">
        <Prose>
          <p>
            Jordan is a residential neighborhood in North Minneapolis,
            bounded roughly by Lowry Avenue to the south, 26th Avenue North
            and Dowling Avenue to the north, the railroad corridor to the
            east, and Penn Avenue North to the west. Home to approximately
            3,500 residents, Jordan is one of the larger neighborhoods in
            North Minneapolis and shares the demographic profile, the
            challenges, and the community strengths that characterize the
            Northside.
          </p>
          <p>
            The neighborhood sits between{" "}
            <Link href="/neighborhoods/hawthorne" className="text-[#2a9d8f] hover:underline">
              Hawthorne
            </Link>{" "}
            to the south and{" "}
            <Link href="/neighborhoods/folwell" className="text-[#2a9d8f] hover:underline">
              Folwell
            </Link>{" "}
            to the north, with{" "}
            <Link href="/neighborhoods/willard-hay" className="text-[#2a9d8f] hover:underline">
              Willard - Hay
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/mckinley" className="text-[#2a9d8f] hover:underline">
              McKinley
            </Link>{" "}
            to the west. West Broadway Avenue, the commercial spine of
            North Minneapolis, runs near its southern boundary.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Jordan Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/jordan/neighborhood-sign.webp"
          alt="Jordan neighborhood sign in Minneapolis"
          caption="The Jordan neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Jordan History & Origins">
        <Prose>
          <p>
            Jordan was settled in the late nineteenth century as Minneapolis
            expanded northward, with working-class families building modest
            homes on the grid of streets north of downtown. The
            neighborhood&apos;s early residents were predominantly
            Scandinavian and Eastern European immigrants, and the housing
            stock — simple frame houses, bungalows, and small Foursquares
            — reflected their practical means.
          </p>
          <p>
            The racial transition of North Minneapolis neighborhoods,
            driven by discriminatory housing covenants and real estate
            practices that restricted where Black families could live,
            reached Jordan in the 1950s and 1960s. As white families moved
            to the suburbs — driven by both racial anxiety and the
            availability of new suburban housing — Black families who had
            been confined to the tightest boundaries of Near North
            expanded into Jordan and other Northside neighborhoods.
          </p>
          <p>
            The decades that followed brought the familiar cascade of
            disinvestment. Banks declined mortgages. Businesses left.
            Absentee landlords purchased properties cheaply and deferred
            maintenance. City services — infrastructure repair, code
            enforcement, policing — did not keep pace with need. The
            neighborhood aged and struggled, and the gap between Jordan
            and wealthier parts of Minneapolis widened with each passing
            decade.
          </p>
          <p>
            Through this, the community organized. The Jordan Area Community
            Council, block clubs, and neighborhood churches provided the
            infrastructure that held the community together when
            institutions failed. This organizing tradition — born of
            necessity, sustained by commitment — is Jordan&apos;s most
            important inheritance and its most durable asset.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Jordan">
        <Prose>
          <p>
            Jordan is a neighborhood of blocks. Not the neighborhood as
            an abstraction, but the specific block you live on — the
            neighbors you know, the houses you watch, the strip of
            sidewalk you shovel. In a neighborhood where city services
            have been unreliable and institutions have often failed, the
            block is the unit of community that functions most
            consistently. A good block in Jordan — one with committed
            homeowners, an active block club, and neighbors who watch out
            for each other — can feel as safe and stable as any block in
            the city. A struggling block can feel abandoned.
          </p>
          <p>
            The neighborhood is predominantly Black, with growing Somali,
            Latino, and other immigrant communities. Families are the
            dominant presence — this is a neighborhood of children, of
            grandparents helping with childcare, of multi-generational
            households and extended family networks that provide support
            systems the formal economy does not. Homeownership is more
            common here than in some North Minneapolis neighborhoods, and
            owner-occupied homes tend to anchor the most stable blocks.
          </p>
          <p>
            The physical landscape is honest. Tree-shaded blocks with
            well-kept homes alternate with blocks where vacancy and
            deferred maintenance are visible. Community gardens have been
            planted on some vacant lots, turning absence into productivity.
            Jordan Park provides a central gathering space, and the rec
            center is a hub for youth programming and community events.
          </p>
          <p>
            There is no pretense in Jordan. People here are clear-eyed
            about the challenges and clear-voiced about what they need.
            The community meetings are well-attended. The block clubs are
            functional. The expectations — of the city, of institutions,
            of each other — are high, because they have to be.
          </p>
        </Prose>
        <Quote
          text="I've lived on this block for twenty-two years. I've seen it at its worst and I've seen it come back. The people who stayed — we're the neighborhood. Everything else is just buildings."
          cite="Jordan homeowner"
        />

        <ImageSlot
          src="/images/neighborhoods/jordan/jordan-park.webp"
          alt="Jordan Park with families and children on a summer afternoon"
          caption="Jordan Park — the neighborhood's gathering place and community anchor"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Jordan Food, Drink & Local Spots">
        <Prose>
          <p>
            Jordan&apos;s food landscape is shaped by necessity and
            community. The neighborhood does not have a developed
            restaurant scene — dining options are limited to small takeout
            spots, corner stores, and the West Broadway corridor near the
            southern boundary. Food access has been a persistent challenge,
            and community-driven solutions have been part of the response.
          </p>
        </Prose>

        <ArticleSubsection title="What's Available">
          <PlaceCardComponent place={{ name: "West Broadway Restaurants", tag: "Nearby Corridor", price: "$–$$", description: "The West Broadway commercial corridor, accessible from Jordan's southern edge, provides the closest concentration of restaurants — soul food, Somali restaurants, and small takeout spots. Breaking Bread Cafe and other community-oriented businesses along the corridor serve the broader North Minneapolis community." }} />
          <PlaceCardComponent place={{ name: "Corner Stores & Small Groceries", tag: "Neighborhood Essentials", price: "$", description: "Small corner stores and ethnic groceries provide basic food items within the neighborhood. These are not gourmet destinations, but they serve a real function in a community where access to full-service grocery stores requires travel outside the neighborhood." }} />
          <PlaceCardComponent place={{ name: "Community Gardens", tag: "Food Production", price: "Free", description: "Several community gardens in Jordan produce fresh vegetables for residents, addressing food access challenges while building community connections. These gardens represent one of the most visible forms of community self-reliance in the neighborhood — turning vacant lots into productive space." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Jordan">
        <Prose>
          <p>
            Jordan has park space that serves the community, though the
            investment in North Minneapolis parks has historically been
            less than in parks serving wealthier neighborhoods. Jordan Park
            is the primary community gathering space, and residents can
            access additional parks and trails in the surrounding area.
          </p>
        </Prose>

        <ArticleSubsection title="Jordan Park">
          <Prose>
            <p>
              Jordan Park sits near the center of the neighborhood and
              includes a recreation center, playing fields, basketball
              courts, a playground, and a splash pad. The rec center
              provides year-round programming for youth and adults,
              including sports leagues, after-school activities, and
              community events. In summer, the park is the
              neighborhood&apos;s center of gravity — the place where
              kids play, families gather, and community happens naturally.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Folwell Park & Webber Park">
          <Prose>
            <p>
              Folwell Park and Webber Park, to the north of Jordan, are
              accessible and provide additional recreational options.
              Webber Park is notable for its natural swimming pool — a
              chlorine-free, naturally filtered pool that is one of the
              most unique public swimming facilities in the country. Both
              parks offer recreation centers, playing fields, and
              community programming.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Park, the largest park in the Minneapolis
              system, is accessible from the western parts of Jordan.
              The park&apos;s 750+ acres of trails, woodland, and
              recreational facilities represent one of the most
              significant natural assets in the city. Efforts to improve
              connections between North Minneapolis neighborhoods and
              Wirth Park have been ongoing.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Jordan Schools">
        <Prose>
          <p>
            Schools in Jordan face the challenges that affect North
            Minneapolis education broadly — the persistent achievement gap,
            the effects of concentrated poverty on educational outcomes,
            and the difficulty of maintaining stable, well-resourced schools
            in communities that have been systematically under-resourced.
          </p>
          <p>
            Jenny Lind Community School provides elementary education in
            the area. North High School serves the neighborhood for grades
            9–12. Many Jordan families use the district&apos;s open
            enrollment system to access magnet programs and schools in
            other parts of the city. Charter schools provide additional
            options, though the quality and stability of charter options
            varies.
          </p>
          <p>
            Community-based educational organizations — after-school
            programs, tutoring, mentoring, and cultural education — provide
            critical supplemental support for neighborhood youth. These
            organizations, often run by community members, reflect
            Jordan&apos;s tradition of building its own institutions when
            existing ones fall short.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Jordan Real Estate & Housing">
        <Prose>
          <p>
            Jordan&apos;s housing market is among the most affordable in
            Minneapolis, with median home sale prices ranging from roughly
            $165,000 to $240,000 in 2025. This affordability is the
            neighborhood&apos;s most tangible draw for homebuyers — in
            a city where the median home price has climbed beyond many
            families&apos; reach, Jordan offers homeownership at a fraction
            of the cost of South and Southwest Minneapolis neighborhoods.
          </p>
          <p>
            The housing stock is older — frame houses and bungalows from
            the 1890s through 1940s, built for the working-class families
            who first settled the area. Conditions vary significantly.
            Owner-occupied homes tend to be better maintained, while
            rental properties — particularly those owned by absentee
            landlords — show more deferred maintenance. Vacant lots
            and occasional vacant properties are part of the landscape,
            though community development organizations have worked to
            fill gaps with new affordable housing.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($110,000–$175,000), you&apos;re looking
              at smaller homes that need renovation — new mechanicals,
              updated kitchens, general modernization. The mid-range
              ($175,000–$250,000) gets you a three-bedroom home in
              reasonable condition or a recently rehabbed property.
              New-construction affordable homes, built by community
              development organizations, can reach $250,000–$320,000.
              Investment properties, including duplexes, are available
              and offer affordable entry into landlording.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Jordan">
        <Prose>
          <p>
            Jordan is primarily a car-dependent neighborhood, with a Walk
            Score of 56 and a Bike Score of 74. Downtown Minneapolis is
            approximately twelve minutes by car. The flat terrain and grid
            streets make cycling practical, though dedicated cycling
            infrastructure within the neighborhood is limited.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along Penn
            Avenue, Lyndale Avenue North, and West Broadway, providing
            connections to downtown and other parts of the city. Bus
            frequency is lower than in more heavily invested corridors,
            and many residents rely on cars for commuting, grocery
            shopping, and access to services.
          </p>
          <p>
            Street parking is generally available on residential blocks.
            The neighborhood&apos;s grid layout provides straightforward
            navigation, and the proximity to I-94 and Highway 55 offers
            reasonable highway access for car commuters.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Jordan is a neighborhood where the most honest thing you can
            say about change is that it has been too slow and too uneven.
            The systemic challenges that have shaped this community —
            disinvestment, crime, educational inequity — did not arrive
            overnight and will not be resolved overnight. But there are
            real indicators of change alongside the persistent challenges.
          </p>
        </Prose>

        <ArticleSubsection title="Incremental Investment">
          <Prose>
            <p>
              New housing construction by community development
              organizations has added quality affordable homes to Jordan.
              Some rehabbed properties have brought vacant or deteriorated
              houses back into productive use. These investments are
              meaningful but incremental — they change individual blocks
              without yet transforming the neighborhood&apos;s overall
              trajectory. The gap between what has been invested in Jordan
              and what has been invested in comparable South Minneapolis
              neighborhoods remains large.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime Trends">
          <Prose>
            <p>
              Crime in Jordan, as across much of North Minneapolis, spiked
              in 2020–2022 and has declined somewhat since. The
              improvement is real but incomplete — crime rates remain
              elevated compared to pre-2020 levels and significantly
              higher than citywide averages. Community-based safety
              initiatives, including violence interruption programs and
              block club organizing, represent an important complement to
              traditional policing, though resources for these programs
              remain limited.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Stability Question">
          <Prose>
            <p>
              Jordan&apos;s central tension is whether the neighborhood
              can achieve greater stability — in housing, in safety, in
              commercial life — while preserving the affordability and
              community character that define it. Unlike neighborhoods
              closer to downtown that face acute gentrification pressure,
              Jordan&apos;s challenge is attracting enough investment to
              address decades of neglect without triggering the
              displacement dynamics that have transformed other urban
              neighborhoods. It is a difficult balance, and the community
              organizations working on it understand both the stakes and
              the complexity.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Jordan FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
