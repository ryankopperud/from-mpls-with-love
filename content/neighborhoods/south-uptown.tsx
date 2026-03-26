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
    title: "South Uptown, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about South Uptown, Minneapolis — Bde Maka Ska access, Lyndale Avenue dining, Lyn-Lake nightlife, apartments, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "South Uptown",
  deck: "The quieter half of what everyone calls Uptown — where Bde Maka Ska is a ten-minute walk, Lyndale Avenue feeds you well without requiring reservations, and the Lyn-Lake corridor still has a pulse even if the brand doesn't mean what it used to.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is South Uptown?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in South Uptown" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "South Uptown, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$300K–$450K", label: "Median home/condo sale price (2025 data)" },
      { value: "$1,200–$1,650", label: "Typical 1BR apartment rent (2025)" },
      { value: "89", label: "Walk Score" },
      { value: "93", label: "Bike Score" },
      { value: "60", label: "Transit Score" },
      { value: "65%+", label: "Renter-occupied housing" },
      { value: "0.6 mi", label: "Distance to Bde Maka Ska shoreline" },
      { value: "40+", label: "Restaurants & bars within neighborhood" },
    ],
  },
  faq: [
    {
      question: "Is South Uptown a good neighborhood in Minneapolis?",
      answer:
        "South Uptown is one of the better-balanced neighborhoods in Minneapolis — walkable, bikeable, close to the lakes, and with enough restaurants and bars to keep you fed and entertained without driving. It's quieter and more residential than what people imagine when they hear 'Uptown,' with less nightlife chaos and more tree-lined side streets. The trade-offs are parking (competitive), crime (moderate — better than some central neighborhoods, worse than southwest), and the fact that some of the commercial energy along Lake Street and Hennepin has faded since the pandemic. If you want lake access and urban convenience without full-on downtown density, South Uptown delivers.",
    },
    {
      question: "Is South Uptown, Minneapolis safe?",
      answer:
        "South Uptown's safety profile is moderate by Minneapolis standards. Property crime — car break-ins, bike theft, catalytic converter theft — is a regular occurrence, especially near the commercial corridors. Violent crime exists but is lower than in some adjacent neighborhoods and tends to concentrate around the Lyn-Lake intersection and parts of Lake Street. The area saw significant disruption during and after 2020, and recovery has been uneven. Most residents feel comfortable walking during the day and reasonably so at night on well-lit streets, but awareness matters here more than in suburban neighborhoods.",
    },
    {
      question: "What is the difference between Uptown and South Uptown?",
      answer:
        "When most people say 'Uptown,' they mean the commercial district around Hennepin Avenue, Lake Street, and Lagoon Avenue — which is technically split between several neighborhoods including Lowry Hill East (the Wedge), East Calhoun, and parts of South Uptown. South Uptown is the official neighborhood name for the area south of Lake Street, west of Lyndale Avenue, north of 31st Street, and east of Lake Calhoun/Bde Maka Ska. It includes the Lyn-Lake commercial node but is mostly residential. Think of it as the quieter backyard behind the Uptown show.",
    },
    {
      question: "How much does it cost to live in South Uptown?",
      answer:
        "One-bedroom apartments typically rent for $1,200 to $1,650 per month, with newer buildings at the higher end and older walk-ups still available under $1,200 if you're willing to sacrifice amenities. Condos sell in the $200,000 to $400,000 range. Single-family homes — mostly older bungalows and Craftsman-style houses — sell from $350,000 to $550,000 depending on condition and proximity to the lake. Duplexes and small multi-family buildings range from $400,000 to $700,000. It's more expensive than Whittier or Powderhorn but well below Linden Hills or Kenwood.",
    },
    {
      question: "Is South Uptown walkable?",
      answer:
        "Very. The Walk Score of 89 reflects excellent access to restaurants, grocery stores, coffee shops, and transit along Lyndale Avenue and Lake Street. You can walk to Bde Maka Ska in 10-15 minutes from most addresses, and the Lyn-Lake commercial district is the neighborhood's front porch. Where it falls slightly short of a perfect walkability score is the relative lack of a full-service grocery store within the neighborhood boundaries — most residents walk or bike to the Cub Foods on Lake Street or the Kowalski's in Uptown proper.",
    },
    {
      question: "What is the Lyn-Lake area?",
      answer:
        "Lyn-Lake refers to the commercial intersection and surrounding blocks where Lyndale Avenue meets Lake Street, straddling the border of South Uptown and Whittier. It's a nightlife and dining hub that has evolved considerably over the years — once a grittier bar corridor, it gentrified through the 2000s and 2010s, then lost some tenants post-pandemic. It still has a core of good restaurants, bars, and shops, and the annual Lyn-Lake Street Festival (now Open Streets) remains a major community event. It's not what it was in 2015, but it's not dead either.",
    },
    {
      question: "What schools serve South Uptown?",
      answer:
        "South Uptown is served by Minneapolis Public Schools. Elementary-age children are typically zoned for Lyndale Community School or nearby options through the district's enrollment system. Middle school students generally attend Anwatin Middle School or other MPS choices. Southwest High School is the comprehensive high school for the area. Several charter schools and private options exist within a short drive, and the MPS open enrollment system allows families to apply to schools across the city.",
    },
    {
      question: "Can you live in South Uptown without a car?",
      answer:
        "Yes, and many people do. The Bike Score of 93 is among the highest in Minneapolis, reflecting excellent cycling infrastructure including the Midtown Greenway (a car-free east-west bike highway), bike lanes on Lyndale and other streets, and proximity to the Chain of Lakes trail system. Bus routes on Lyndale Avenue and Lake Street connect to downtown and the light rail. Walking covers most daily needs. A car is helpful for suburban errands and winter convenience, but plenty of South Uptown residents live happily without one.",
    },
    {
      question: "What is the Midtown Greenway?",
      answer:
        "The Midtown Greenway is a 5.5-mile paved bike and pedestrian trail built in a below-grade former railroad corridor that runs east-west across south Minneapolis. Its western end connects to the Chain of Lakes at Bde Maka Ska, and its eastern end reaches the Mississippi River. The Greenway runs along or near Lake Street, forming the northern boundary of South Uptown, and is one of the most heavily used bike commuter routes in the region. It's also a recreational trail, a cross-country ski route in winter, and an increasingly important piece of urban infrastructure.",
    },
    {
      question: "Is South Uptown gentrifying?",
      answer:
        "South Uptown has already gentrified considerably from its earlier decades — it was once a much more affordable, working-class neighborhood. The current dynamic is more about stabilization and identity crisis than active displacement. Rents have plateaued somewhat after years of increases, and the commercial vacancies along Lake Street and Hennepin that followed the pandemic have created an unusual moment where the neighborhood is simultaneously expensive for renters and uncertain about its commercial future. New development continues, but the rapid change of the 2010s has slowed.",
    },
    {
      question: "What happened to Uptown Minneapolis?",
      answer:
        "The 'Uptown' brand — which South Uptown shares by geography — has been in decline since roughly 2019-2020. The combination of pandemic closures, civil unrest following George Floyd's murder, rising crime, and shifting retail patterns hit the Hennepin-Lake corridor hard. Anchor businesses closed, storefronts went empty, and the area's reputation as a nightlife destination faded. Recovery has been slow and uneven. South Uptown, being more residential and less dependent on the Hennepin Avenue commercial strip, weathered the decline better than Uptown proper — but the association lingers, and the neighborhood's identity is still being renegotiated.",
    },
  ],
  nearby: [
    { name: "Whittier", slug: "whittier", description: "Eat Street, diversity, and the Minneapolis Institute of Art" },
    { name: "Lowry Hill East", slug: "lowry-hill-east", description: "The Wedge — co-ops, density, and counterculture roots" },
    { name: "East Bde Maka Ska", slug: "east-bde-maka-ska", description: "Lakeside living between Uptown and the water" },
    { name: "East Isles", slug: "east-isles", description: "Lake of the Isles access and quiet, leafy streets" },
    { name: "Lyndale", slug: "lyndale", description: "Quieter residential blocks just south of South Uptown" },
    { name: "Loring Park", slug: "loring-park", description: "Downtown-adjacent living with green space and culture" },
  ],
  closing: {
    title: "What Makes South Uptown Worth Knowing",
    paragraphs: [
      "South Uptown doesn't have a brand problem — it has an identity that most people never bother to discover beneath the larger 'Uptown' label. The neighborhood's real character lives in the residential blocks south of Lake Street, where century-old houses sit beside apartment buildings, where the lake is close enough to smell on a humid August evening, and where the Greenway offers a car-free commute that feels almost European in a city built for driving. It's a place that works well for people who want to be close to things without being in the middle of them — urban enough to walk everywhere, quiet enough to sleep with the windows open on most nights.",
      "The honest version is that South Uptown is navigating an uncertain moment. The Uptown commercial district that once defined the area's energy has lost some of its shine, and the neighborhood is figuring out what comes next. But the fundamentals — lake access, walkability, a strong Lyndale Avenue dining corridor, the Greenway, tree-lined residential streets — haven't changed. The people who live here aren't waiting for Uptown to come back. They're building something quieter and more sustainable in the blocks where they actually sleep, and that version of South Uptown is worth paying attention to.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          It&apos;s a Thursday in June and the sun is still high at 8 p.m. — that
          manic golden light that Minneapolis earns by surviving January. A woman
          is running the Bde Maka Ska loop with her dog, both of them slightly
          too fast for the heat. On the north shore, a group of twentysomethings
          is hauling paddleboards off a rental rack while a man in his sixties
          casts a line from the fishing pier with the patience of someone
          who&apos;s been doing this since the lake had a different name. Three
          blocks east, the patio at Volstead&apos;s Emporium is filling up with
          people who walked here — from the apartments on Aldrich, from the
          duplexes on Colfax, from the old houses on Bryant that have been
          carved into units and re-carved again. The Midtown Greenway hums with
          cyclists heading west toward the lake or east toward wherever the
          evening takes them. This is South Uptown on a summer weeknight — lake
          adjacent, patio dependent, quietly convinced that it got the better
          deal when the neighborhood boundaries were drawn.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/south-uptown/hero.webp"
        alt="Bde Maka Ska shoreline at golden hour with the South Uptown neighborhood visible beyond the trees"
        caption="Bde Maka Ska — the lake that defines South Uptown's western edge — on a June evening"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is South Uptown, Minneapolis?">
        <Prose>
          <p>
            South Uptown is a residential neighborhood in south-central
            Minneapolis, bounded roughly by Lake Street to the north, Lyndale
            Avenue to the east, 31st Street to the south, and the eastern
            shore of Bde Maka Ska (formerly Lake Calhoun) to the west. It is
            the quieter, more residential half of what most people loosely call
            &ldquo;Uptown&rdquo; — a name that technically belongs to no single
            neighborhood but has been applied for decades to the commercial
            district centered on the Hennepin Avenue and Lake Street
            intersection, which sits just north of here. South Uptown gets
            the lake access, the tree-lined side streets, and the relative
            calm. It also gets the Uptown association — for better and,
            increasingly, for worse.
          </p>
          <p>
            With roughly 6,500 residents spread across about half a square
            mile, South Uptown is dense by Minneapolis standards but not
            overwhelmingly so. The housing stock is a mix of older single-family
            homes, duplexes, courtyard apartments from the 1920s through 1960s,
            and newer mid-rise apartment buildings that have gone up along the
            commercial corridors. It is predominantly a renter&apos;s
            neighborhood — more than 65 percent of housing units are
            renter-occupied — and the population skews younger than the city
            average, though there are long-term residents and homeowners who
            have been here for decades and will tell you what Uptown used to be
            with varying degrees of nostalgia and exasperation.
          </p>
          <p>
            The neighborhood&apos;s defining geographic asset is its proximity
            to Bde Maka Ska, the largest lake in the Minneapolis Chain of Lakes
            and one of the most popular recreational destinations in the state.
            From most addresses in South Uptown, the lake is a 5-to-15-minute
            walk — close enough to be part of your routine rather than an
            occasional outing. The Midtown Greenway, a converted rail corridor
            running east-west along the neighborhood&apos;s northern edge,
            provides car-free bike access to the lake, downtown, and the
            Mississippi River. And the Lyn-Lake commercial district — the
            intersection of Lyndale Avenue and Lake Street — offers the
            neighborhood&apos;s densest concentration of restaurants, bars,
            and shops, serving as a more manageable, less chaotic alternative to
            the Hennepin Avenue strip that most outsiders associate with Uptown.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="South Uptown Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/south-uptown/neighborhood-sign.webp"
          alt="South Uptown neighborhood sign in Minneapolis"
          caption="The South Uptown neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="South Uptown History & Origins">
        <Prose>
          <p>
            Before European settlement, the land that is now South Uptown was
            part of the homeland of the Dakota people — specifically the
            Mdewakanton and Wahpekute bands, for whom the lakes of this region
            were not recreational amenities but sacred sites woven into a
            landscape of spiritual and material sustenance. Bde Maka Ska — which
            translates roughly to &ldquo;White Earth Lake&rdquo; in Dakota — was
            a fishing and gathering site long before it was a beach destination.
            The Dakota name was restored by the Minnesota Department of Natural
            Resources in 2018 after the lake had been called Lake Calhoun for
            nearly 200 years, named after John C. Calhoun, a slaveholding
            U.S. Vice President and Secretary of War who never set foot in
            Minnesota. The renaming was contested and went through years of
            legal challenges before being finalized — a small correction to a
            large historical wrong, and one that still generates arguments at
            dinner parties across the city.
          </p>
          <p>
            The area that would become South Uptown developed in the late 19th
            century as Minneapolis expanded outward from the milling district
            along the Mississippi River. The presence of the lake made the
            western edge of this area attractive to wealthier residents early
            on — grand homes went up along the lakeshore and on the streets
            closest to the water. But the bulk of South Uptown&apos;s
            residential development was more modest: small frame houses,
            duplexes, and modest bungalows built for the working-class and
            middle-class families who powered the city&apos;s industrial
            economy. The neighborhood filled in rapidly between the 1880s
            and 1920s, following the streetcar lines that connected the area
            to downtown Minneapolis. The streetcar — running along Hennepin
            Avenue, Lake Street, and Lyndale Avenue — was the technology that
            made this neighborhood possible, turning lake-adjacent farmland
            into desirable urban real estate within a single generation.
          </p>
          <p>
            The &ldquo;Uptown&rdquo; identity began to crystallize in the
            mid-20th century, though the name was used loosely and referred
            more to the commercial district than to any specific neighborhood.
            By the 1960s and 1970s, the area around Lake and Hennepin had
            become a countercultural hub — head shops, record stores, indie
            bookstores, and bars catering to a young, bohemian crowd that was
            drawn by cheap rents and proximity to the lakes. The Uptown Theatre
            on Hennepin Avenue, which opened in 1916 and became a repertory
            cinema in the 1970s, was a landmark of this era — the kind of
            place where you could see a Fellini double feature on a Tuesday
            night and run into half the people you knew.
          </p>
          <p>
            South Uptown, as a formal neighborhood designation, came later —
            a product of the city&apos;s neighborhood organization system
            that divided Minneapolis into 81 officially recognized
            neighborhoods, each with its own neighborhood association. The
            South Uptown Neighborhood Association was established to give the
            area south of Lake Street its own civic identity, distinct from
            the commercial chaos of the Hennepin corridor to the north. The
            distinction mattered because the residents south of Lake Street
            had always experienced the neighborhood differently — more
            residential, more family-oriented, closer to the lake and farther
            from the bars.
          </p>
          <p>
            The 1990s and 2000s brought the commercialization that would
            define — and eventually complicate — the Uptown brand.
            National retailers moved into Calhoun Square (now Uptown Mall)
            on Hennepin Avenue. New apartment buildings went up along the
            corridors. The area became a destination for young professionals
            and a genuine nightlife district, drawing crowds from across
            the metro on weekends. South Uptown benefited from the energy
            while being buffered from the worst of the weekend rowdiness by
            the physical barrier of Lake Street. It was close enough to walk
            to the fun, far enough to walk home to quiet.
          </p>
          <p>
            Then came the reckoning. The period from 2019 to 2022 was
            devastating for the broader Uptown area. The pandemic shuttered
            businesses. The murder of George Floyd in May 2020 and the
            subsequent unrest damaged storefronts along Lake Street and
            Hennepin Avenue. In 2021, the fatal shooting of Winston Boogie
            Smith Jr. by a U.S. Marshals task force at a parking ramp near
            Lake and Girard sparked protests and further unrest in the
            immediate Uptown area. Businesses left. Foot traffic collapsed.
            The &ldquo;Uptown is dead&rdquo; narrative took hold in local
            media and never fully let go. South Uptown, again, weathered
            this better than the Hennepin corridor — but the psychological
            impact was real, and the commercial vacancies on Lake Street are
            a visible reminder that recovery is incomplete.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/south-uptown/lake-street.webp"
          alt="Lake Street corridor in South Uptown Minneapolis with storefronts and mixed-use buildings"
          caption="Lake Street — South Uptown's northern border — carries both the neighborhood's commercial energy and its scars"
        />
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in South Uptown">
        <Prose>
          <p>
            The easiest way to understand South Uptown is to walk it on a
            summer evening and notice what you don&apos;t see. You don&apos;t
            see the crowds spilling out of Hennepin Avenue bars that you would
            a few blocks north. You don&apos;t see the bumper-to-bumper traffic
            circling for parking that defines Uptown proper on a Friday night.
            What you see instead are people on porches, dogs in yards, couples
            walking toward the lake with no particular urgency, and the low
            hum of a neighborhood that is close to the action without being
            consumed by it. South Uptown&apos;s defining quality is this
            proximity without immersion — you can walk to the Lyn-Lake bars
            in ten minutes and walk home to a street quiet enough to hear
            crickets.
          </p>
          <p>
            The physical character of the neighborhood is a mix of eras and
            scales. The residential blocks south of Lake Street are mostly
            low-rise — two-story houses, many of them built between 1900 and
            1940, interspersed with courtyard apartment buildings from the
            mid-20th century and the occasional newer infill development. Some
            blocks have a distinctly residential, almost suburban feel despite
            being three miles from downtown. Others, particularly those closer
            to Lyndale Avenue or Lake Street, have the density and variety of
            a neighborhood that has been building and rebuilding itself for
            over a century. The architectural coherence is low — this is not
            a neighborhood of consistent style — but the tree canopy is
            mature, the lots are well-maintained more often than not, and
            there is a pleasantness to the streetscape that photographs
            better in October than in description.
          </p>
          <p>
            The demographic profile skews young and white, though the
            neighborhood is more diverse than it was a decade ago. South
            Uptown&apos;s population is heavily composed of renters in their
            twenties and thirties — young professionals, graduate students,
            people early in careers who want lake access and walkability and
            are willing to pay more than they would in Powderhorn or
            Longfellow to get it. There is a homeowner contingent —
            particularly on the blocks closest to the lake, where single-family
            homes are larger and more expensive — and a small but visible
            population of long-term residents who predate the neighborhood&apos;s
            transformation into a young-professional enclave. The blend creates
            a community that is transient in places and rooted in others, with
            the ratio shifting block by block.
          </p>
          <p>
            The lake is the center of gravity. Bde Maka Ska is not just a
            recreational amenity for South Uptown — it is the reason the
            neighborhood exists in its current form, the thing that justifies
            the rents, the feature that makes the location work. Morning
            joggers circuit the 3.1-mile loop before work. Summer weekends
            bring paddleboarders, kayakers, swimmers, and sunbathers to the
            north shore. The lakeside paths connect to Lake of the Isles to
            the north and Lake Harriet to the south, creating a continuous
            recreational corridor that is one of the genuine treasures of
            urban America. If you live in South Uptown and you don&apos;t use
            the lake, you are paying a premium for a feature you&apos;re
            ignoring — which is your right, but the neighborhood will not
            understand you.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>{" "}
            to the east is denser, more diverse, and grittier — its Eat
            Street corridor offers food South Uptown can&apos;t match for
            range or price.{" "}
            <Link href="/neighborhoods/east-bde-maka-ska" className="text-[#2a9d8f] hover:underline">
              East Bde Maka Ska
            </Link>{" "}
            to the southwest shares the lakefront orientation but is quieter
            still and more owner-occupied.{" "}
            <Link href="/neighborhoods/lowry-hill-east" className="text-[#2a9d8f] hover:underline">
              Lowry Hill East
            </Link>{" "}
            (the Wedge) to the north has the co-ops, the density, and the
            longest-running countercultural streak in south Minneapolis.
            South Uptown sits in the middle of these influences — absorbing
            some of each, defined entirely by none.
          </p>
        </Prose>
        <Prose>
          <p>
            The seasonal rhythm matters more here than in neighborhoods
            farther from the lakes. South Uptown in July and South Uptown in
            January are almost different places. Summer brings the porches to
            life, fills the Greenway with cyclists, turns the lakefront into
            an all-day social scene, and extends the evening by hours — the
            9:00 p.m. sunsets of late June are part of the neighborhood&apos;s
            personality. Winter is the test. The lake freezes. The patios
            close. The Greenway goes quiet except for the hardiest commuters.
            The streets narrow to one lane between snowbanks. People who love
            South Uptown in winter love it differently — for the cross-country
            skiing on the lake, for the way the snow quiets the city, for the
            bars that feel warmer when it&apos;s dark at 4:30. People who
            can&apos;t find that love sometimes leave. The neighborhood
            doesn&apos;t blame them.
          </p>
          <p>
            Community engagement in South Uptown is present but not
            overwhelming. The South Uptown Neighborhood Association (SUNA)
            holds regular meetings, weighs in on development proposals, and
            organizes community events. The Lyn-Lake Business Association
            advocates for the commercial corridor. Block clubs exist on some
            streets and are absent on others. The civic culture here is less
            intense than in neighborhoods with more active development
            controversies — South Uptown residents tend to be engaged enough
            to show up when something affects their block, but not so
            organized that there&apos;s a committee for everything. The
            culture is more live-and-let-live than activist, which is either
            a relief or a frustration depending on your temperament.
          </p>
        </Prose>

        <Quote
          text="I moved to South Uptown because I wanted to be close to the lake without living in a suburb. Six years later, I still walk to Bde Maka Ska three or four times a week. In winter I run the loop. In summer I paddleboard after work. It's the reason I stay."
          cite="South Uptown resident, neighborhood survey"
        />
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/south-uptown/residential-street.webp"
        alt="Tree-lined residential street in South Uptown Minneapolis with older homes and mature elm canopy"
        caption="South Uptown's residential blocks — quiet, tree-heavy, and a world away from the Hennepin Avenue corridor a few blocks north"
      />

      {/* Food */}
      <ArticleSection id="food" title="South Uptown Food, Drink & Local Spots">
        <Prose>
          <p>
            South Uptown&apos;s dining scene lives primarily on two corridors:
            Lyndale Avenue, which runs along the neighborhood&apos;s eastern
            edge and offers the most concentrated stretch of restaurants; and
            Lake Street, the northern boundary, where the options are more
            scattered and the vacancies are more visible. The Lyn-Lake
            intersection — where these two corridors meet — is the
            neighborhood&apos;s commercial nucleus, and it punches above its
            weight for a node this size. You won&apos;t find the ethnic range
            of{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier&apos;s Eat Street
            </Link>
            , but what you will find is a curated-by-accident collection of
            bars, restaurants, and coffee shops that serve the neighborhood
            well without trying to be a destination — though a few of them
            are exactly that.
          </p>
        </Prose>

        <ArticleSubsection title="Lyndale Avenue Corridor">
          <PlaceCardComponent place={{ name: "Barbette", tag: "French Bistro / Brunch", price: "$$–$$$", url: "https://barbette.com", description: "1600 W. Lake St. Barbette has been the anchor of the Lyn-Lake dining scene for over two decades, serving French-inflected bistro food in a space that manages to feel both casual and considered. The steak frites are reliable. The weekend brunch draws a crowd that skews toward people who know what a croque monsieur is and want a good one. The patio is excellent in summer — one of the better outdoor dining spaces in south Minneapolis." }} />
          <PlaceCardComponent place={{ name: "Moto-i", tag: "Japanese / Sake Brewery", price: "$$", url: "https://moto-i.com", description: "2940 Lyndale Ave. S. The first sake brewpub outside of Japan, brewing junmai ginjo sake in-house since 2008 and pairing it with izakaya-style food. The rooftop patio is one of the best warm-weather hangouts in the neighborhood. Ramen is solid; sake flights are the real draw. Technically straddles the South Uptown/Whittier border, but it's claimed by both." }} />
          <PlaceCardComponent place={{ name: "Volstead's Emporium", tag: "Cocktail Bar / Speakeasy", price: "$$", description: "711 W. Lake St. A speakeasy-style cocktail bar tucked behind an unmarked door — the kind of place that takes its drinks seriously without taking itself too seriously. The cocktails are excellent and creative, the lighting is dim, and the vibe is decidedly grown-up in a neighborhood that sometimes skews collegiate. Worth finding. Cash and cards accepted." }} />
          <PlaceCardComponent place={{ name: "CC Club", tag: "Dive Bar", price: "$", description: "2600 Lyndale Ave. S. A legendary Minneapolis dive bar that has outlasted every trend the neighborhood has cycled through. The burgers are good, the beer is cold, the jukebox is democratic, and the clientele spans every demographic that lives within walking distance. CC Club is the kind of bar that every neighborhood needs and few still have — unpretentious, consistent, and open when you need it to be." }} />
          <PlaceCardComponent place={{ name: "Tiny Diner", tag: "Farm-to-Table American", price: "$$", url: "https://tinydiner.com", description: "1024 E. 38th St. (technically outside South Uptown proper, but part of the ecosystem). Farm-to-table comfort food with a genuine commitment to local sourcing — the kind of restaurant where the menu changes with the seasons because the ingredients actually do, not because the concept requires it. The garden out back supplies some of the herbs and vegetables. Brunch is strong." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Lake Street & Beyond">
          <PlaceCardComponent place={{ name: "Malt", tag: "American / Bar", price: "$$", description: "Lake St. & Lyndale Ave. area. A neighborhood bar and restaurant that does familiar food well — burgers, sandwiches, shareable plates — in a space designed for hanging out rather than impressing anyone. The tap list is thoughtful, the vibe is neighborhood-casual, and the back patio works well on warm evenings." }} />
          <PlaceCardComponent place={{ name: "Chino Latino", tag: "Closed — but relevant", price: "—", description: "Lake St. & Hennepin Ave. The closure of Chino Latino in 2017 — a fusion restaurant that had been an Uptown landmark for nearly two decades — was an early signal of the shifts coming to the area. Its former space has seen turnover since, a visible marker of Uptown's commercial instability." }} />
          <PlaceCardComponent place={{ name: "Jungle Theater", tag: "Theater / Culture", url: "https://jungletheater.org", description: "2951 Lyndale Ave. S. Not a restaurant, but essential to the Lyndale corridor's identity. The Jungle is an intimate, 150-seat theater producing high-quality plays and musicals year-round. It anchors the southern end of the commercial strip and draws audiences from across the Twin Cities. The pre-show dinner-and-theater circuit — eat at Barbette or Moto-i, walk to the Jungle — is a classic South Uptown evening." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Coffee & Morning Rituals">
          <Prose>
            <p>
              South Uptown&apos;s coffee options reflect the neighborhood&apos;s
              personality — a mix of local chains and independents that take
              their beans seriously without requiring you to have an opinion
              about extraction ratios. Spyhouse Coffee has a location on
              Nicollet just east of the neighborhood and draws South Uptown
              residents with reliable pour-overs and a minimalist aesthetic
              that photographs well. Dogwood Coffee&apos;s nearby locations
              offer a slightly warmer vibe and equally strong roasts. For
              something less curated, the neighborhood&apos;s corner cafés
              and bakeries serve the people who want coffee and a muffin
              without a brand experience.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Grocery Situation">
          <Prose>
            <p>
              South Uptown&apos;s one notable gap is a full-service grocery
              store within the neighborhood&apos;s core. The Cub Foods on
              Lake Street and Nicollet (technically in{" "}
              <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
                Whittier
              </Link>
              ) is the closest conventional option. Kowalski&apos;s Market,
              an upscale local chain, has a location on Hennepin just north
              of Lake Street. The Wedge Co-op on Lyndale Avenue — one of
              the largest natural foods co-ops in the country — serves
              residents who want organic produce and are willing to pay for
              it. Between these options, the gap is manageable, but if a
              full-size grocery within walking distance of your front door is
              non-negotiable, check the map before you sign a lease.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks, Lakes & Outdoors Near South Uptown">
        <Prose>
          <p>
            This is South Uptown&apos;s strongest hand, and the neighborhood
            knows it. Access to the Minneapolis Chain of Lakes — one of the
            finest urban park systems in the country — is the fundamental
            reason this neighborhood commands the rents it does. The lakes
            are not a bonus feature here. They are the feature.
          </p>
        </Prose>

        <ArticleSubsection title="Bde Maka Ska">
          <Prose>
            <p>
              Bde Maka Ska (formerly Lake Calhoun) is the largest lake in the
              Minneapolis Chain of Lakes at 401 acres, and its eastern shore
              forms South Uptown&apos;s western boundary. The lake offers a
              3.1-mile paved loop for walking, running, and biking; a public
              swimming beach on the north shore (Bde Maka Ska Beach, staffed
              with lifeguards in summer); canoe, kayak, and paddleboard
              rentals; sailing; fishing; and some of the best people-watching
              in the city. In winter, the frozen lake hosts ice fishing, fat
              tire biking, and cross-country skiing. The lakeside pavilion
              on the north shore has seasonal food and drink service.
            </p>
            <p>
              For South Uptown residents, the lake is the backyard. Morning
              runners are on the loop by 6 a.m. After-work paddleboarding is
              a genuine lifestyle here, not an Instagram performance. The
              sunset views from the north shore — facing west over the water
              toward the tree line — are extraordinary on clear evenings and
              have sold more apartments in this neighborhood than any realtor.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/south-uptown/bde-maka-ska.webp"
            alt="Paddleboarders and kayakers on Bde Maka Ska with the Minneapolis skyline visible in the distance"
            caption="Bde Maka Ska — 401 acres of lake and the reason South Uptown exists in its current form"
          />
        </ArticleSubsection>

        <ArticleSubsection title="The Chain of Lakes">
          <Prose>
            <p>
              Bde Maka Ska connects via parkway and trail to Lake of the Isles
              to the north and Lake Harriet to the south, creating a
              continuous chain of parkland, paths, and water that stretches
              for miles. The Grand Rounds Scenic Byway — the 50-mile loop of
              parkways and trails encircling the city — passes through here,
              and the Chain of Lakes segment is its crown jewel. You can bike
              from South Uptown to Lake Harriet&apos;s bandshell in 15
              minutes, or north to Lake of the Isles and Cedar Lake in
              roughly the same time. The system was designed by landscape
              architect Horace Cleveland in the 1880s and refined over the
              following century — it is one of the great pieces of urban
              park design in the United States, and South Uptown sits at its
              center.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway runs along the northern edge of South
              Uptown — a 5.5-mile paved trail built in a below-grade former
              railroad trench, running from the Chain of Lakes in the west
              to the Mississippi River in the east. It is one of the most
              heavily used bike commuter routes in the Upper Midwest, carrying
              an estimated 4,000 to 5,000 trips per day in peak season. The
              below-grade design means no street crossings for most of its
              length — a rare luxury that makes it faster and safer than
              surface-street cycling. In winter, it&apos;s plowed and
              maintained for year-round use. The Greenway is not just a
              trail — it is a piece of transportation infrastructure that
              fundamentally changes the calculus of car-free living in
              South Uptown.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Winter on the Lakes">
          <Prose>
            <p>
              Minneapolis earns its summers, and one of the ways it earns
              them is by using its winters. When Bde Maka Ska freezes —
              typically by late December or early January — the lake
              transforms into a different kind of public space. Ice fishing
              houses dot the surface. Cross-country skiers trace paths
              around the shore. Fat-tire bikers ride the plowed trails. The
              Minneapolis Park Board maintains an ice skating rink at the
              north end of the lake, and the frozen expanse itself becomes
              a vast, flat, startlingly quiet playground for anyone willing
              to bundle up. South Uptown residents who embrace winter will
              tell you that the frozen lake at sunset — the sky pink and
              purple over a white surface that stretches to the far tree
              line — is as beautiful as anything the summer offers. They
              are not wrong.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Neighborhood Parks">
          <Prose>
            <p>
              Within the neighborhood, smaller parks serve the daily needs
              that the lakes can&apos;t. Painter Park on Aldrich Avenue South
              includes a playground, basketball courts, and a small community
              gathering space. The Minneapolis Park and Recreation Board — one
              of the only elected park boards in the country — maintains
              these spaces, and their quality reflects a city that takes its
              parks seriously even when budgets are tight. The park system
              here is not an afterthought — it is a defining public
              investment that makes dense urban living genuinely pleasant,
              and South Uptown sits at the center of the best of it.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="South Uptown Schools">
        <Prose>
          <p>
            South Uptown&apos;s school options reflect both the strengths and
            the complexities of the Minneapolis Public Schools (MPS) system.
            Like most central Minneapolis neighborhoods, families here have
            choices — but navigating those choices requires understanding
            the district&apos;s open enrollment system and being realistic
            about the trade-offs.
          </p>
          <p>
            For elementary-age children, the neighborhood is generally served
            by Lyndale Community School, a pre-K through 5th grade school
            that emphasizes community engagement and has a diverse student
            body. Other MPS options are available through the district&apos;s
            enrollment process, which allows families to apply to schools
            across the city based on interest and availability. The system
            provides flexibility but also requires proactive navigation —
            this is not a neighborhood where you simply enroll at the school
            on the corner without research.
          </p>
          <p>
            Middle school students typically attend Anwatin Middle School in
            the Bryn Mawr neighborhood or access other MPS options. For high
            school, Southwest High School in the Linden Hills area is the
            comprehensive school serving the western part of this zone.
            Southwest is one of the higher-performing high schools in the
            MPS system, with strong programs in International Baccalaureate,
            arts, and athletics. South High School, serving the eastern
            portion, is one of the most diverse high schools in the state
            and offers its own IB program alongside strong career and
            technical education tracks.
          </p>
          <p>
            Private and charter school options in the broader area include
            the Blake School (a well-regarded independent school with a
            campus in Hopkins and another in Minneapolis), Minnehaha Academy,
            and several smaller charter options. Many South Uptown families
            with school-age children are deliberate and active in their
            school choices — it&apos;s a neighborhood where parents talk
            about schools the way they talk about restaurants, with strong
            opinions and a willingness to drive across town for the right fit.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="South Uptown Real Estate & Housing">
        <Prose>
          <p>
            South Uptown&apos;s housing market occupies a middle ground in
            the Minneapolis landscape — more expensive than the working-class
            and immigrant neighborhoods to the east and south, but well below
            the lakefront premiums of{" "}
            <Link href="/neighborhoods/east-isles" className="text-[#2a9d8f] hover:underline">
              East Isles
            </Link>
            ,{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            , or Kenwood. What you get for your money is location — lake
            proximity, walkability, and urban convenience — in exchange for
            the older housing stock, denser living, and street parking
            competition that come with a central neighborhood.
          </p>
        </Prose>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              The majority of South Uptown residents rent, and the rental
              market is the neighborhood&apos;s economic engine. One-bedroom
              apartments typically run $1,200 to $1,650 per month as of 2025,
              with newer buildings at the top of the range and older walk-ups
              — many of them charming courtyard buildings from the 1920s
              through 1950s — available in the $1,000 to $1,200 range if
              you&apos;re lucky and persistent. Two-bedroom units range from
              $1,500 to $2,200. The newest apartment complexes, with in-unit
              laundry, rooftop decks, and fitness centers, can push above
              $2,000 for a one-bedroom — pricing that would have been
              unthinkable here 15 years ago.
            </p>
            <p>
              The rental market has softened slightly from its pre-pandemic
              peak, partly due to new supply coming online and partly due to
              the broader Uptown area&apos;s reputational challenges. This
              is actually a reasonable moment to look for an apartment here —
              landlords are more willing to negotiate than they were in 2018,
              and vacancy rates in some of the newer buildings have given
              renters modest leverage. That window may not stay open.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Buying in South Uptown">
          <Prose>
            <p>
              For buyers, the market splits into two distinct categories.
              Condominiums — which are common here, both in converted older
              buildings and in purpose-built condo developments — sell in the
              $200,000 to $400,000 range, offering a more affordable entry
              point to homeownership than single-family homes. The condo
              market has been sluggish in recent years as buyer preferences
              have shifted toward more space, and HOA fees add a monthly cost
              that can make the total payment comparable to a small house in
              a less central neighborhood.
            </p>
            <p>
              Single-family homes in South Uptown are the real prize — and
              they&apos;re priced accordingly. Older bungalows, Craftsman-style
              homes, and occasional Victorians sell in the $350,000 to
              $550,000 range, with homes closest to the lake and in the
              best condition pushing above $600,000. These are not large
              homes by suburban standards — most are 1,200 to 2,000 square
              feet on modest lots — but the location premium is baked into
              every square foot. Duplexes and small multi-family buildings,
              which are common throughout the neighborhood, trade between
              $400,000 and $700,000 and attract both owner-occupants (who
              live in one unit and rent the other) and investors.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="New Development">
          <Prose>
            <p>
              New construction in South Uptown has been concentrated along
              the commercial corridors — Lake Street and Lyndale Avenue —
              where zoning allows for mid-rise mixed-use buildings. Several
              four-to-six-story apartment buildings have gone up in the past
              decade, adding market-rate and some income-restricted units.
              The Minneapolis 2040 Plan, which eliminated single-family-only
              zoning citywide, has enabled additional density on the
              residential blocks, though teardowns and new construction on
              interior streets remain relatively uncommon. The development
              conversation here is less heated than in some neighborhoods —
              South Uptown was already dense enough that new buildings don&apos;t
              feel as jarring — but concerns about character, parking, and
              affordability accompany every new proposal.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We bought our bungalow in South Uptown in 2016 and our value has held pretty well despite everything. The secret is the lake — people will always pay to walk to the lake." cite="South Uptown homeowner, community forum" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around South Uptown">
        <Prose>
          <p>
            South Uptown is, by any reasonable measure, one of the most
            multi-modal neighborhoods in Minneapolis. The Walk Score of 89
            reflects the fact that most daily needs — restaurants, coffee,
            bars, parks — are within a 15-minute walk. The Bike Score of 93
            is among the highest in the city, driven by the Midtown Greenway,
            bike lanes on Lyndale and other streets, and the Chain of Lakes
            trail system. The Transit Score of 60 reflects good but not
            exceptional bus service — useful for commuting to downtown or
            the University of Minnesota, less reliable for cross-town trips.
          </p>
          <p>
            Biking is the mode that South Uptown does best. The Midtown
            Greenway&apos;s western terminus is essentially at the
            neighborhood&apos;s doorstep, providing a car-free, below-grade
            route east to downtown (about 15 minutes by bike) and the
            Mississippi River. The Chain of Lakes trails offer
            recreational cycling that is hard to match anywhere in the
            Midwest. Nice Ride bike-share stations are scattered throughout
            the area for those who don&apos;t own a bike. In a city where
            cycling infrastructure is taken seriously, South Uptown is one
            of the best-served neighborhoods.
          </p>
          <p>
            Bus service runs on Lyndale Avenue (Route 4), Lake Street
            (Route 21), and Hennepin Avenue (Route 6) — the three main
            arterials bordering or passing through the neighborhood. The
            Route 4 on Lyndale connects to downtown in about 15-20 minutes
            during peak hours. The Route 21 on Lake Street is one of the
            busiest cross-town routes in the Metro Transit system, running
            east-west from St. Louis Park to beyond the Mississippi River.
            The planned Bus Rapid Transit (BRT) improvements on Hennepin
            Avenue and potential future improvements on Lake Street could
            significantly enhance transit access in the coming years.
          </p>
          <p>
            Driving is fine — you&apos;re close to I-94 via Lyndale or
            Hennepin, putting downtown within a 10-minute drive and MSP
            Airport within 20 minutes. The challenge, predictably, is
            parking. Street parking on the residential blocks is usually
            manageable, but the commercial corridors near Lyn-Lake and the
            lakefront can be competitive on summer evenings and weekends.
            Most apartment buildings include some parking, but not always
            enough for every tenant. Winter snow emergencies add another
            layer of parking complexity — the city&apos;s alternate-side
            rules are strictly enforced, and towing is expensive.
          </p>
        </Prose>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/south-uptown/greenway.webp"
        alt="The Midtown Greenway bike trail running through a below-grade trench near South Uptown Minneapolis"
        caption="The Midtown Greenway — a 5.5-mile car-free corridor that changes the calculus of living without a car in South Uptown"
      />

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            South Uptown sits at the intersection of several forces that are
            reshaping Minneapolis, and the neighborhood&apos;s evolution over
            the next five years will be shaped by how those forces resolve —
            if they resolve at all. A neighborhood guide that doesn&apos;t
            address these dynamics honestly is a brochure, not a guide.
          </p>
        </Prose>

        <ArticleSubsection title="The Uptown Identity Crisis">
          <Prose>
            <p>
              The elephant in every room in this neighborhood is the decline
              of the Uptown brand. From the mid-1990s through roughly 2018,
              &ldquo;Uptown&rdquo; was shorthand for young, urban,
              walkable Minneapolis — the part of the city where
              twentysomethings went on weekends, where the bars stayed open
              late, where the energy was. That identity has fractured. The
              Hennepin Avenue corridor north of Lake Street has lost
              major tenants, including anchor businesses at the former
              Calhoun Square. Storefronts sit empty. Foot traffic on
              weekend evenings is a fraction of what it was a decade ago. The
              local media has been writing the &ldquo;death of Uptown&rdquo;
              story for years, and while the narrative is overstated — people
              still live here, businesses still open, the lakes still
              draw crowds — the gap between the brand&apos;s peak and its
              current reality is genuine.
            </p>
            <p>
              South Uptown&apos;s relationship to this decline is complicated.
              The neighborhood is geographically &ldquo;Uptown&rdquo; but
              was never the part of Uptown that the brand was built on.
              Its identity was always more residential, more lake-oriented,
              less dependent on the Hennepin Avenue commercial strip. In
              some ways, the decline of Uptown proper has been clarifying —
              it has forced South Uptown to define itself on its own terms
              rather than as a supporting player in someone else&apos;s
              narrative. The Lyn-Lake corridor, in particular, has emerged
              as a commercial center in its own right, distinct from
              Hennepin and arguably more sustainable.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and the Post-2020 Recovery">
          <Prose>
            <p>
              Crime in the broader Uptown area spiked dramatically in
              2020 and 2021 — a pattern consistent with cities nationwide
              but intensified locally by the unrest following George
              Floyd&apos;s murder and the subsequent upheaval in policing
              and public safety. Carjackings, which had been relatively
              rare in the area, became a regular occurrence. Property
              crime — car break-ins, vandalism, catalytic converter theft —
              increased substantially. The shooting of Winston Boogie
              Smith Jr. by a U.S. Marshals task force in June 2021, and the
              protests and property damage that followed, was a particularly
              traumatic event for the immediate area.
            </p>
            <p>
              By 2024 and 2025, the situation has improved from those peaks
              but has not returned to pre-2019 baselines. The Minneapolis
              Police Department, which lost hundreds of officers through
              attrition and resignation in the years after 2020, has been
              slowly rebuilding — but staffing remains below target, and
              response times for non-emergency calls can be long. South
              Uptown residents report feeling generally safe on the
              residential blocks during daylight but more cautious at night
              near the commercial corridors. Property crime remains a fact
              of life — lock your bike, lock your car, don&apos;t leave
              packages on the porch.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Vacancy and Recovery">
          <Prose>
            <p>
              The commercial corridors in and around South Uptown — Lake
              Street, Hennepin Avenue, and to a lesser extent Lyndale
              Avenue — still carry visible scars from the upheaval of
              2020-2021. Storefronts that were damaged and never rebuilt.
              Spaces that have turned over multiple times. National chains
              that left and haven&apos;t returned. The recovery is real
              but uneven — Lyndale Avenue has fared better than Hennepin,
              and the Lyn-Lake node has maintained most of its anchors.
              But the overall commercial vitality of the area is below where
              it was five years ago, and the question of what fills those
              vacancies — and when — remains open.
            </p>
            <p>
              There are signs of reinvestment. New restaurants and shops
              have opened. The Jungle Theater continues to anchor the
              Lyndale corridor. The neighborhood&apos;s fundamentals — lake
              proximity, density, young population — support commercial
              activity. But the pattern is one of slow recovery rather than
              rapid rebound, and anyone moving here should calibrate their
              expectations accordingly.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Lake Name and Other Fault Lines">
          <Prose>
            <p>
              The renaming of Lake Calhoun to Bde Maka Ska — its original
              Dakota name — has been resolved legally but remains a social
              fault line. Some residents use the Dakota name exclusively;
              others still say Calhoun; many alternate depending on
              audience. The debate, which peaked between 2015 and 2020,
              has quieted but not disappeared, and it maps imperfectly onto
              other divisions in the area — generational, political,
              racial. It is a reminder that even in a neighborhood this
              small, people experience the same geography through different
              histories.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Density and Development">
          <Prose>
            <p>
              New apartment construction continues along the corridors,
              adding units to a neighborhood that was already one of the
              denser parts of south Minneapolis. The Minneapolis 2040
              Plan enables additional density on residential blocks as well,
              though teardowns on interior streets remain relatively
              uncommon. The development conversation in South Uptown is
              less contentious than in some neighborhoods — partly because
              the neighborhood was already dense, and partly because the
              renter-heavy population tends to be more supportive of new
              housing supply than homeowner-dominated communities. But
              concerns about parking, building scale, and affordability
              surface with every new project, and the tension between
              growth and character is a permanent feature of life in a
              desirable, centrally located neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="South Uptown FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
