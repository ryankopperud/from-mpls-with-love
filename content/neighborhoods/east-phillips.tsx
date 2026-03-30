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
    title: "East Phillips, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about East Phillips, Minneapolis — the Roof Depot fight, environmental justice, community organizing, diversity, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "East Phillips",
  deck: "A neighborhood that fights — where the Roof Depot battle became a national environmental justice story, where one of the most diverse communities in the upper Midwest organizes with a ferocity that larger, wealthier neighborhoods can only admire.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is East Phillips?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in East Phillips" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "East Phillips, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,000", label: "Residents (US Census / ACS estimates)" },
      { value: "$170K–$250K", label: "Median home sale price (2025 data)" },
      { value: "$850–$1,200", label: "Typical 1BR apartment rent (2025)" },
      { value: "76", label: "Walk Score" },
      { value: "82", label: "Bike Score" },
      { value: "58", label: "Transit Score" },
      { value: "55%+", label: "Renter-occupied housing" },
      { value: "75%+", label: "Residents of color (ACS estimates)" },
    ],
  },
  faq: [
    {
      question: "Is East Phillips a good neighborhood in Minneapolis?",
      answer:
        "East Phillips is one of the most diverse and community-organized neighborhoods in Minneapolis. It is affordable, has strong cultural identity, and is home to residents who are deeply invested in the neighborhood's future. It also has higher-than-average crime rates, environmental contamination legacy, and infrastructure challenges. It is an excellent fit for people who value community engagement and cultural richness.",
    },
    {
      question: "What was the Roof Depot fight in East Phillips?",
      answer:
        "The East Phillips Neighborhood Institute (EPNI) fought for years against the city's plan to build a water maintenance facility on the site of a former industrial building called the Roof Depot, located on contaminated land at 1860 28th Street East. Neighbors — predominantly people of color — argued the city was concentrating pollution in an already overburdened community and proposed instead an urban agriculture and community hub called the East Phillips Indoor Urban Farm. The fight drew national attention as an environmental justice case.",
    },
    {
      question: "Is East Phillips safe?",
      answer:
        "East Phillips has crime rates above the Minneapolis average, particularly for property crime. Violent incidents occur but are often concentrated in specific areas. Many residents feel safe in their immediate blocks while acknowledging broader challenges. Community safety initiatives are active, and neighbors tend to look out for each other.",
    },
    {
      question: "How much does it cost to live in East Phillips?",
      answer:
        "East Phillips is one of the most affordable neighborhoods in central Minneapolis. One-bedroom apartments rent for $850 to $1,200. Houses sell from $140,000 to $280,000, with condition varying widely. The affordability is a major draw for families and first-time homebuyers, though rising citywide prices are beginning to affect the area.",
    },
    {
      question: "What is the East Phillips Indoor Urban Farm?",
      answer:
        "The East Phillips Indoor Urban Farm is a community-proposed project to convert the former Roof Depot industrial site into a year-round urban agriculture facility, community gathering space, and small-business incubator. Proposed by the East Phillips Neighborhood Institute, it represents the community's vision for self-determination and environmental remediation on their own terms.",
    },
    {
      question: "What schools serve East Phillips?",
      answer:
        "East Phillips Park, part of the Minneapolis Public Schools system, has served the neighborhood's elementary students. South High School is the designated comprehensive high school. Charter and alternative schools with culturally specific programming — including options for Native American, Somali, and Latino students — are also available in the area.",
    },
    {
      question: "Where exactly is East Phillips in Minneapolis?",
      answer:
        "East Phillips is in south-central Minneapolis, bounded roughly by East 24th Street to the north, Hiawatha Avenue (Highway 55) to the east, East Lake Street to the south, and Cedar Avenue to the west. It sits within the larger Phillips community, east of Midtown Phillips and south of Ventura Village.",
    },
    {
      question: "Is East Phillips gentrifying?",
      answer:
        "East Phillips is in the early stages of the pressures that precede gentrification — rising property values, increased investor interest, new development on the periphery. The community has been proactive about fighting displacement through organizing and advocacy, but the forces driving up Minneapolis housing costs don't respect neighborhood boundaries.",
    },
  ],
  nearby: [
    { name: "Midtown Phillips", slug: "midtown-phillips", description: "Midtown Global Market and the heart of Phillips" },
    { name: "Ventura Village", slug: "ventura-village", description: "Northern Phillips — diverse and evolving" },
    { name: "Corcoran", slug: "corcoran", description: "South of Lake Street, community-focused and residential" },
    { name: "Powderhorn Park", slug: "powderhorn-park", description: "The park, the lake, and community activism" },
    { name: "Longfellow", slug: "longfellow", description: "East of Hiawatha — quieter, more residential" },
  ],
  closing: {
    title: "What Makes East Phillips Irreplaceable",
    paragraphs: [
      "East Phillips is not a neighborhood that waits for permission. When the city wanted to build a public works facility on contaminated land in the middle of a community that is already disproportionately burdened by pollution, East Phillips organized, litigated, protested, and proposed an alternative. That fight — the Roof Depot battle — became a national story, but to the people who live here, it was just the latest chapter in a long history of a community that has had to demand what wealthier neighborhoods take for granted.",
      "What makes East Phillips irreplaceable is not any single institution or amenity. It's the people — Somali elders tending community gardens, Native American families maintaining cultural connections in an urban setting, Latino business owners building from scratch, and longtime residents who remember what the neighborhood used to be and are determined to shape what it becomes. It is one of the most diverse square miles in Minnesota, and it has earned that diversity the hard way.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          In the summer of 2021, residents of East Phillips did something
          that neighborhoods with more money and more political power rarely
          manage: they stopped the city. The City of Minneapolis wanted to
          build a water maintenance facility on a contaminated industrial
          site at 28th Street and Longfellow Avenue — a site surrounded by
          homes where children play, in a neighborhood where asthma rates
          are already among the highest in the city. The neighbors, led by
          the East Phillips Neighborhood Institute, said no. They didn&apos;t
          just oppose — they proposed. An indoor urban farm. A community
          hub. A vision for what the site could be if the people who breathe
          the air got to decide what went there. The fight went to court. It
          drew national attention. And East Phillips, a neighborhood that
          most of Minneapolis couldn&apos;t find on a map, became a case
          study in environmental justice. This is a neighborhood that
          organizes like its life depends on it, because sometimes it does.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/east-phillips/hero.webp"
        alt="East Phillips neighborhood in Minneapolis, residential streets with community murals"
        caption="East Phillips — one of the most diverse and actively organized neighborhoods in Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is East Phillips, Minneapolis?">
        <Prose>
          <p>
            East Phillips is the eastern section of the larger Phillips
            community in south-central Minneapolis, bounded roughly by
            East 24th Street to the north, Hiawatha Avenue (Highway 55)
            to the east, Lake Street to the south, and Cedar Avenue to
            the west. With approximately 5,000 residents, it is one of
            the most racially and ethnically diverse neighborhoods in the
            state — home to significant Native American, Somali, Latino,
            African American, and Southeast Asian populations, along with
            long-term white residents.
          </p>
          <p>
            The neighborhood is defined less by commercial corridors or
            landmarks than by community organizing. East Phillips has
            been at the center of some of the most significant
            environmental justice fights in recent Minneapolis history,
            and its residents have built organizations, coalitions, and
            advocacy networks that punch far above the neighborhood&apos;s
            size. It is affordable, diverse, and engaged in the kind of
            grassroots democracy that most neighborhoods only talk about.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="East Phillips Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/east-phillips/neighborhood-sign.webp"
          alt="East Phillips neighborhood sign in Minneapolis"
          caption="The East Phillips neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="East Phillips History & Origins">
        <Prose>
          <p>
            East Phillips shares its name and early history with the broader
            Phillips community, named for Wendell Phillips, the Boston
            abolitionist. The area was developed in the late 19th century
            as working-class housing for Minneapolis&apos;s industrial
            economy, with modest homes and duplexes built for the families
            of mill workers and tradespeople.
          </p>
          <p>
            The neighborhood&apos;s industrial legacy — factories, rail
            yards, and commercial operations — left behind contaminated
            sites that continue to affect the community today. The
            Hiawatha corridor, which forms the eastern boundary, was
            historically an industrial zone, and soil contamination from
            arsenic, lead, and other industrial pollutants has been
            documented at multiple sites within the neighborhood.
          </p>
          <p>
            Beginning in the 1960s and 1970s, federal Indian relocation
            policies brought significant numbers of Native American
            families from reservations to the Phillips area, creating what
            would become one of the largest urban Native American
            communities in the country. The neighborhood also became home
            to Latino families, Southeast Asian refugees, and later Somali
            and East African immigrants, each community adding to the area&apos;s
            cultural complexity.
          </p>
          <p>
            The environmental justice movement in East Phillips crystallized
            around the Roof Depot site — a former industrial building at
            1860 28th Street East that became the focal point of a
            years-long battle between the community and the City of
            Minneapolis. The fight over what would happen on that
            contaminated land became a defining chapter in the
            neighborhood&apos;s history and a landmark case in Minnesota
            environmental justice.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in East Phillips">
        <Prose>
          <p>
            East Phillips is a neighborhood where community is built through
            struggle. The organizations here — the East Phillips Neighborhood
            Institute, the East Phillips Improvement Coalition, block clubs
            and tenant associations — exist because residents have had to
            fight for things that other neighborhoods receive as a matter of
            course: clean soil, responsive city services, a voice in
            decisions that affect their air and water and children.
          </p>
          <p>
            The physical environment is modest. The housing stock is older —
            small single-family homes, duplexes, and apartment buildings,
            many dating to the early 1900s. Some have been lovingly
            maintained; others show the wear of decades of underinvestment.
            The streets are residential and quiet in the interior blocks,
            with more activity along the Cedar Avenue and Lake Street
            corridors.
          </p>
          <p>
            The cultural life of East Phillips is woven into daily routines
            rather than concentrated in institutions. Community gardens —
            some of the most culturally diverse in the city — produce food
            from seeds carried from other continents. Neighborhood
            gatherings reflect the multilingual reality of the community.
            The Little Earth of United Tribes housing development, near the
            neighborhood&apos;s boundary, is the only Section 8 housing in
            the nation with a Native American preference, and it anchors a
            significant urban Native community.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/midtown-phillips" className="text-[#2a9d8f] hover:underline">
              Midtown Phillips
            </Link>{" "}
            to the west shares the deep diversity, while{" "}
            <Link href="/neighborhoods/corcoran" className="text-[#2a9d8f] hover:underline">
              Corcoran
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
              Powderhorn Park
            </Link>{" "}
            to the south and southeast bring complementary but distinct
            neighborhood identities.
          </p>
        </Prose>
        <Quote
          text="People say 'environmental justice' like it's an abstract concept. In East Phillips, it's whether my kid can play in the yard without me worrying about what's in the soil."
          cite="East Phillips parent, community meeting"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="East Phillips Food, Drink & Local Spots">
        <Prose>
          <p>
            East Phillips is not a dining destination in the conventional
            sense — there are no trendy restaurants or craft cocktail bars.
            What it has are small, family-run spots serving food from the
            countries its residents came from, plus the practical businesses
            — groceries, laundromats, repair shops — that keep a working
            neighborhood functioning.
          </p>
        </Prose>

        <ArticleSubsection title="Neighborhood Spots">
          <PlaceCardComponent place={{ name: "Cub Foods (Lake Street)", tag: "Grocery", price: "$–$$", description: "2850 26th Ave. S. The closest full-service supermarket for East Phillips, serving a diverse customer base with an inventory that reflects the neighborhood's demographics. It's a utilitarian shopping experience, but it's here and it's accessible." }} />
          <PlaceCardComponent place={{ name: "Lake Street Taquerias", tag: "Mexican", price: "$", description: "Multiple small taquerias line Lake Street through and near East Phillips, serving tacos, burritos, and tortas at prices that match the neighborhood. Quality varies, but the best spots are the ones with the longest lines at lunchtime." }} />
          <PlaceCardComponent place={{ name: "Somali & East African Restaurants", tag: "Somali / East African", price: "$", description: "Several small restaurants along Cedar Avenue and Lake Street serve Somali and East African cuisine — rice with goat, sambusas, suqaar, and sweet Somali tea. These are community gathering spots as much as restaurants." }} />
          <PlaceCardComponent place={{ name: "Midtown Global Market", tag: "International Food Hall", price: "$–$$", description: "Just across I-35W in Midtown Phillips, the Global Market is the closest major food destination — dozens of vendors representing cuisines from around the world. Many East Phillips residents consider it their neighborhood market." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near East Phillips">
        <Prose>
          <p>
            East Phillips Park, the neighborhood&apos;s namesake green space,
            is the community&apos;s primary outdoor gathering place. The
            neighborhood&apos;s cultural assets are largely community-created
            rather than institutional — gardens, murals, and gathering
            spaces built by residents.
          </p>
        </Prose>

        <ArticleSubsection title="East Phillips Park">
          <Prose>
            <p>
              East Phillips Park, centered around the intersection of 17th
              Avenue South and East 27th Street, includes a recreation
              center, playground, basketball courts, and sports fields. The
              park&apos;s programming serves the neighborhood&apos;s
              multilingual, multicultural youth population, and the rec
              center is one of the most important community gathering
              spaces in the area.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Community Gardens">
          <Prose>
            <p>
              East Phillips is home to several community gardens that are
              among the most culturally diverse growing spaces in
              Minneapolis. Gardeners tend plots with crops from Somalia,
              Mexico, Southeast Asia, and the American Midwest side by side.
              These gardens are not just about food production — they are
              social spaces, cultural preservation, and community building
              happening in soil.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Midtown Greenway & Hiawatha Trail">
          <Prose>
            <p>
              The Midtown Greenway runs along the neighborhood&apos;s
              northern edge, and the Hiawatha LRT trail runs along the
              eastern boundary, giving East Phillips access to two of the
              city&apos;s major bike and pedestrian corridors. These trails
              connect to the broader Minneapolis park system, the
              Mississippi River, and the Chain of Lakes.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="East Phillips Schools">
        <Prose>
          <p>
            Schools serving East Phillips reflect the neighborhood&apos;s
            extraordinary diversity and the challenges that come with serving
            a high-poverty, multilingual student population. Teachers and
            staff in these schools work in conditions that demand flexibility,
            cultural competence, and resources that are never quite enough.
          </p>
          <p>
            The neighborhood has been served by schools within the
            Minneapolis Public Schools system, with South High School as
            the designated comprehensive high school. South High is one of
            the most diverse high schools in Minnesota, serving students
            from over 50 countries.
          </p>
          <p>
            Charter schools with culturally specific programming serve
            Native American, Somali, and Latino students in the broader
            area. The Minneapolis Public Schools open enrollment system
            allows families to access programs across the district.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="East Phillips Real Estate & Housing">
        <Prose>
          <p>
            East Phillips is one of the most affordable neighborhoods in
            central Minneapolis. The housing stock is predominantly older
            single-family homes and duplexes, with scattered apartment
            buildings. Prices here reflect the neighborhood&apos;s challenges
            — higher crime rates, environmental contamination history,
            aging infrastructure — as well as its assets: affordability,
            central location, and community strength.
          </p>
        </Prose>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              One-bedroom apartments in East Phillips rent for $850 to
              $1,200 per month, well below the city average. The rental
              housing is largely in older buildings without modern
              amenities. Affordable housing developments, including Little
              Earth of United Tribes and scattered-site public housing,
              provide income-restricted options. The rental market here is
              accessible for people priced out of most of Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Buying in East Phillips">
          <Prose>
            <p>
              Single-family homes sell in the $140,000 to $280,000 range —
              among the lowest in Minneapolis for owner-occupied housing.
              Condition varies enormously, and buyers should be prepared for
              renovation needs on older properties. Duplexes and small
              multi-family buildings range from $180,000 to $350,000. The
              neighborhood attracts first-time buyers, investors, and
              families seeking affordable homeownership in a central
              location.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="This neighborhood has been affordable for decades. The question is whether that's because people chose not to invest here, or because the people here were never given the choice. We're trying to change that equation." cite="East Phillips organizer, community meeting" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around East Phillips">
        <Prose>
          <p>
            East Phillips has solid transit connections for a neighborhood
            its size. Lake Street and Cedar Avenue bus routes provide
            frequent east-west and north-south service, connecting to
            downtown, Uptown, and the Blue Line light rail on Hiawatha
            Avenue — the neighborhood&apos;s eastern boundary.
          </p>
          <p>
            The Blue Line light rail, running along Hiawatha Avenue,
            provides direct service to downtown Minneapolis, MSP Airport,
            and the Mall of America. The Lake Street / Midtown station is
            the closest stop and is accessible from the eastern edge of
            the neighborhood.
          </p>
          <p>
            Cycling infrastructure is good, with the Midtown Greenway and
            the Hiawatha LRT trail providing car-free routes east-west and
            north-south. Street parking is generally available without
            difficulty. Driving access to I-35W is via Lake Street or
            surface streets through Midtown Phillips.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            East Phillips is a neighborhood where the tensions of American
            urban life — environmental racism, displacement, crime, and
            community self-determination — play out in real time. The
            residents here don&apos;t have the luxury of treating these as
            abstract policy questions.
          </p>
        </Prose>

        <ArticleSubsection title="Environmental Justice">
          <Prose>
            <p>
              East Phillips has been disproportionately burdened by
              environmental contamination from industrial sites, highways,
              and city infrastructure. The Roof Depot fight brought
              national attention, but the underlying issue is broader: this
              is a low-income community of color that has absorbed
              environmental costs that wealthier, whiter neighborhoods
              would never accept. Soil contamination, air quality concerns,
              and the legacy of industrial land use are ongoing realities.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime rates in East Phillips are above the city average.
              Property crime is common, and violent crime — while often
              concentrated in specific areas and circumstances — is a
              persistent concern. The neighborhood&apos;s proximity to
              Hiawatha Avenue and Lake Street corridors contributes to
              some of the activity. Community safety initiatives are
              active, but the challenges are significant and connected
              to broader systemic issues.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Displacement and Development">
          <Prose>
            <p>
              As Minneapolis housing costs rise, East Phillips faces the
              paradox of affordability: the same low prices that allow
              diverse communities to live here also attract investors and
              developers who can change the neighborhood&apos;s character.
              Community organizations are working to ensure that any
              development serves existing residents rather than replacing
              them, but the market pressures are real and growing.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="East Phillips FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
