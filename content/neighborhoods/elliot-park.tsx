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
    title: "Elliot Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Elliot Park, Minneapolis — the healthcare corridor, Hennepin Healthcare, affordable housing, new development, and what it's really like to live in this rapidly changing neighborhood between downtown and Phillips in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Elliot Park",
  deck: "A neighborhood caught between its past and its future — where one of the city's oldest parks sits in the shadow of hospital towers, affordable housing stands next to luxury apartments, and the slow machinery of gentrification grinds forward block by block through a community that has always been defined by who gets overlooked.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Elliot Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Elliot Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Elliot Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,800", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$180K–$350K", label: "Median condo sale price range (2025 data)" },
      { value: "1883", label: "Year Elliot Park was established" },
      { value: "2", label: "Major hospital campuses (Hennepin Healthcare, Children's)" },
      { value: "40%+", label: "Residents in affordable or subsidized housing" },
      { value: "88", label: "Walk Score" },
      { value: "80", label: "Transit Score" },
      { value: "0.5 mi", label: "Distance to nearest light rail station" },
    ],
  },
  faq: [
    {
      question: "Is Elliot Park a good neighborhood in Minneapolis?",
      answer:
        "Elliot Park is a neighborhood in transition that offers genuine advantages — strong walkability, proximity to downtown, affordable housing options, and improving amenities — alongside real challenges, including visible poverty, safety concerns on certain blocks, and the disruptions of rapid development. It is a good neighborhood for people who value diversity, affordability, and urban convenience over polish. It is not the right fit for people who prioritize quiet residential streets or a curated neighborhood feel.",
    },
    {
      question: "Is Elliot Park, Minneapolis safe?",
      answer:
        "Safety in Elliot Park varies significantly by block and time of day. The neighborhood has historically had higher crime rates than the city average, driven by a combination of poverty, substance abuse, and the concentration of social services. Property crime — car break-ins, package theft, bike theft — is a persistent issue. Violent crime occurs but is not evenly distributed; certain blocks, particularly near shelters and along the southern edge, see more incidents. The influx of new development and residents has improved conditions in some areas but has not eliminated the underlying challenges. Residents generally advise basic urban awareness — lock everything, be alert after dark, know your immediate surroundings.",
    },
    {
      question: "Why is Elliot Park changing so fast?",
      answer:
        "Elliot Park is changing because of its proximity to downtown, the expansion of healthcare institutions, the availability of developable land (surface parking lots, underutilized parcels), and the citywide housing shortage. The Wells Fargo campus, new apartment buildings, and mixed-use developments have transformed the neighborhood's physical landscape in a short period. The change is driven by the same economic forces — land values, developer economics, institutional expansion — that are reshaping neighborhoods adjacent to every American downtown. Whether the change benefits existing residents or primarily serves newcomers is the central question.",
    },
    {
      question: "What hospitals are in Elliot Park?",
      answer:
        "Elliot Park is home to Hennepin Healthcare (formerly Hennepin County Medical Center / HCMC), a Level 1 trauma center and safety-net hospital that serves as the primary public hospital for Hennepin County. Children's Minnesota has a significant campus nearby. Abbott Northwestern Hospital, part of Allina Health, is just south of the neighborhood in the Phillips area. The concentration of healthcare institutions makes Elliot Park a major employment center and shapes the neighborhood's character — the streets are full of people in scrubs, the apartment market serves healthcare workers, and the needs of hospitals influence development patterns.",
    },
    {
      question: "How much does it cost to live in Elliot Park?",
      answer:
        "Elliot Park is one of the more affordable neighborhoods within walking distance of downtown Minneapolis. Rental apartments range from roughly $1,000 for a studio to $2,200 for a two-bedroom, with significant variation between older affordable buildings and newer market-rate construction. Condos, where available, range from $180,000 to $350,000 for a one- or two-bedroom. The neighborhood has a large stock of income-restricted and subsidized housing, making it accessible to lower-income residents in a way that most downtown-adjacent neighborhoods are not.",
    },
    {
      question: "What is the Wells Fargo campus in Elliot Park?",
      answer:
        "The Wells Fargo campus in Elliot Park consists of two office towers on the blocks bounded by Chicago Avenue, Park Avenue, and 5th Street South. The development, completed in stages between 2016 and 2020, brought thousands of office workers to the neighborhood and catalyzed surrounding development including new apartment buildings, a hotel, and ground-floor retail. The campus significantly altered the neighborhood's character — adding density, foot traffic, and a corporate presence to what had been a low-rise residential area. Post-pandemic office attendance patterns have moderated the impact, but the physical infrastructure remains the neighborhood's most visible modern landmark.",
    },
    {
      question: "Can you walk to downtown from Elliot Park?",
      answer:
        "Yes. Elliot Park is immediately south of the downtown core, and the walk to Nicollet Mall or the Government Plaza light rail station takes approximately 10–15 minutes depending on your starting point. The neighborhood effectively functions as downtown's southern extension, with no meaningful physical barrier between them. Many Elliot Park residents commute to downtown jobs on foot.",
    },
    {
      question: "Where exactly is Elliot Park in Minneapolis?",
      answer:
        "Elliot Park occupies the area immediately south of the downtown core, roughly bounded by I-35W to the north and west, I-94 to the east, and the Midtown Greenway corridor (approximately Franklin Avenue) to the south. It sits between Downtown West and Downtown East to the north and the Phillips neighborhoods to the south. Chicago Avenue and Park Avenue are the primary north-south corridors.",
    },
    {
      question: "Is Elliot Park gentrifying?",
      answer:
        "Yes, by most measures. The neighborhood has seen significant new construction — luxury and market-rate apartments, the Wells Fargo campus, hotels — that has increased property values and changed the area's demographics. The share of higher-income, white residents has grown, while some lower-income residents and communities of color have been displaced or squeezed. The neighborhood retains substantial affordable housing stock, and community organizations have advocated for affordability requirements in new development. But the direction of change is unmistakable. Whether you call it gentrification, revitalization, or displacement depends on where you stand — and whether you were here before the cranes arrived.",
    },
    {
      question: "What is the history of Elliot Park?",
      answer:
        "Elliot Park takes its name from the small public park at the neighborhood's center, established in 1883 and named after Dr. Jacob Elliot, an early Minneapolis physician. The neighborhood was originally a middle-class residential area of Victorian homes, but suburbanization, highway construction (I-35W and I-94 cut through the neighborhood's edges), and urban decline transformed it into one of the city's poorest areas by the mid-20th century. The presence of Hennepin Healthcare and other institutions provided stability but also shaped the neighborhood around institutional needs rather than residential ones. The current wave of development is the most significant change the neighborhood has experienced since the freeways were built.",
    },
  ],
  nearby: [
    { name: "Downtown East", slug: "downtown-east", description: "Stadium district and the Mill District riverfront" },
    { name: "Downtown West", slug: "downtown-west", description: "The commercial core, skyways, and Nicollet Mall" },
    { name: "Cedar-Riverside", slug: "cedar-riverside", description: "The West Bank's density and diversity" },
    { name: "Stevens Square", slug: "stevens-square-loring-heights", description: "Dense and affordable just to the west" },
    { name: "Ventura Village", slug: "ventura-village", description: "Part of Phillips, diverse and changing to the south" },
    { name: "Phillips West", slug: "phillips-west", description: "Affordable, diverse, home to the Institute of Arts" },
  ],
  closing: {
    title: "What Makes Elliot Park Worth Understanding",
    paragraphs: [
      "Elliot Park is not the kind of neighborhood that ends up on lists of Minneapolis&apos;s best places to live. It does not have the charm of the North Loop, the cultural cachet of Downtown East, or the tree-lined streets of Southwest Minneapolis. What it has is something less photogenic and more important — a place where the actual city, with all of its contradictions, is visible and unavoidable. The hospital worker walking to her shift at Hennepin Healthcare and the software engineer walking to his desk at the Wells Fargo tower are using the same sidewalk, passing the same park, navigating the same neighborhood. The affordable housing and the luxury apartments share the same blocks. The questions that every American city is trying to answer — about who gets to live where, about what development serves, about the boundary between renewal and displacement — are being worked out here in real time.",
      "The neighborhood will look different in five years. More towers will go up. More surface lots will become buildings. The old Elliot Park — the one that longtime residents remember, the one that was overlooked and under-invested and genuinely affordable — will continue to recede. What replaces it will be more prosperous and more polished. Whether it will also be more equitable, more inclusive, and more genuinely livable depends on decisions being made right now by developers, policymakers, and the people who choose to call this complicated, unfinished neighborhood home.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          At 6:45 on a Wednesday morning, the shift change at Hennepin
          Healthcare is rippling outward through Elliot Park. Nurses in scrubs
          are walking south on Park Avenue toward their cars. Doctors are
          walking north from the parking ramp toward the hospital entrance.
          A construction crew is setting up on a half-block that was a surface
          parking lot six months ago and will be a seven-story apartment
          building in two years. Across the street, a man is sitting on a bench
          outside the Elliot Park Recreation Center, drinking coffee from a
          paper cup, watching all of this with the practiced patience of
          someone who has watched this neighborhood change before and knows it
          will change again. A block south, the morning light catches the
          Wells Fargo towers — glass and steel, impossibly clean, the kind of
          buildings that announce the future whether the neighborhood asked
          for it or not. And at the center of everything, the park itself sits
          quiet, its old trees unbothered by any of it.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/elliot-park/hero.webp"
        alt="Elliot Park neighborhood in Minneapolis with the healthcare corridor and downtown skyline in the background"
        caption="Elliot Park — caught between the hospital towers and the downtown skyline"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Elliot Park, Minneapolis?">
        <Prose>
          <p>
            Elliot Park is the neighborhood between downtown Minneapolis and
            the Phillips community — a transitional zone that has spent most
            of its history being defined by what it sits next to rather than
            what it is. To the north, the towers and skyways of the downtown
            core. To the south, the residential density and diversity of
            Phillips. Elliot Park absorbs the overflow of both without fully
            belonging to either. It is roughly bounded by I-35W to the north
            and west, I-94 to the east, and approximately Franklin Avenue to
            the south. Chicago Avenue and Park Avenue run through it like
            arteries, carrying traffic between downtown and the south side.
          </p>
          <p>
            The neighborhood&apos;s identity is shaped by institutions. Hennepin
            Healthcare — the county&apos;s public hospital, Level 1 trauma
            center, and one of the largest employers in the area — dominates
            the northern portion. The Wells Fargo office campus, completed in
            the late 2010s, brought corporate presence and thousands of workers
            to blocks that had been parking lots. New apartment towers have
            followed, filling in gaps and raising the skyline. But between
            and around these large-scale developments, the older Elliot Park
            persists — affordable housing complexes, small apartment buildings,
            social service organizations, and a population that is poorer,
            more diverse, and more transient than nearly any other
            neighborhood this close to the center of the city.{" "}
            <Link href="/neighborhoods/downtown-west" className="text-[#2a9d8f] hover:underline">
              Downtown West
            </Link>{" "}
            has the office towers.{" "}
            <Link href="/neighborhoods/downtown-east" className="text-[#2a9d8f] hover:underline">
              Downtown East
            </Link>{" "}
            has the river and the culture. Elliot Park has the hospital, the
            affordable housing, and the ongoing experiment of whether a
            neighborhood can absorb massive development without losing the
            people who lived there first.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Elliot Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/elliot-park/neighborhood-sign.webp"
          alt="Elliot Park neighborhood sign in Minneapolis"
          caption="The Elliot Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Elliot Park History & Origins">
        <Prose>
          <p>
            Elliot Park was established as a public park in 1883, named after
            Dr. Jacob Elliot, a physician who had been active in Minneapolis
            civic life. The surrounding neighborhood developed as a
            middle-class residential area in the late 19th century —
            Victorian-era houses, modest apartment buildings, and the kind
            of walkable urban fabric that was standard for American cities
            before the automobile. It was a respectable, unremarkable place
            to live, close enough to downtown to be convenient and far
            enough to feel residential.
          </p>
          <p>
            The 20th century was not kind to Elliot Park. The construction
            of Interstate 35W and Interstate 94 in the 1960s — part of the
            federal highway program that devastated urban neighborhoods across
            the country — carved through the area&apos;s edges, severing
            connections to adjacent neighborhoods and creating the
            freeway-bordered island that Elliot Park remains today. The
            freeways accelerated suburban flight, and by the 1970s and 1980s,
            the neighborhood had deteriorated significantly. Victorian houses
            were demolished or subdivided. Absentee landlords neglected
            properties. Crime increased. Social service organizations —
            shelters, treatment centers, halfway houses — concentrated in the
            area because land was cheap and political resistance was minimal.
            Elliot Park became one of the neighborhoods that cities use to
            warehouse their most vulnerable populations.
          </p>
          <p>
            Hennepin County Medical Center (now Hennepin Healthcare) expanded
            through the decades, growing from a community hospital into a
            major medical campus. The hospital provided employment and
            institutional stability but also shaped the neighborhood around
            its needs — parking ramps replaced housing, institutional
            buildings replaced retail, and the streets became conduits for
            emergency vehicles rather than pedestrians. The neighborhood
            survived, but it survived as a place defined by its institutions
            and its struggles rather than by the aspirations of its residents.
          </p>
          <p>
            The current wave of transformation began around 2015 with the
            Wells Fargo campus and has accelerated since. New apartment
            buildings, a hotel, and mixed-use developments have risen on
            sites that were parking lots or vacant land for decades. The
            physical change is dramatic — entire blocks have been transformed
            in less than ten years. Whether the social fabric can survive
            the physical transformation is the question that defines Elliot
            Park in 2026.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Elliot Park">
        <Prose>
          <p>
            Living in Elliot Park means living with contrast — not the
            curated contrast of a neighborhood that puts its contradictions
            on display for visitors, but the raw, unmediated contrast of a
            place where different economic realities occupy the same block.
            A $2,000-a-month apartment tower stands across the street from
            a subsidized housing complex. The Wells Fargo campus, all glass
            and corporate polish, is a three-minute walk from a shelter
            serving people experiencing homelessness. A new coffee shop
            opens next to a liquor store that has been there for thirty
            years. None of this is unusual for an American city, but it is
            more compressed here than in most Minneapolis neighborhoods,
            and the compression makes it harder to ignore.
          </p>
          <p>
            The residents who choose Elliot Park — particularly the newer
            arrivals — tend to be people who want to be close to downtown
            without paying downtown prices, healthcare workers who want to
            walk to their shifts, and young professionals who are comfortable
            with urban grit. The neighborhood is genuinely diverse — racially,
            economically, and in terms of household composition. East African,
            Native American, Southeast Asian, and Latino residents share
            the neighborhood with white-collar workers and university
            students. The diversity is organic rather than aspirational, a
            product of affordable housing and institutional proximity rather
            than marketing.
          </p>
          <p>
            The park itself — the actual Elliot Park — is the neighborhood&apos;s
            emotional center, even if it is modest by Minneapolis standards.
            A few acres of grass, a recreation center, a basketball court,
            a playground. On summer evenings, the park fills with families,
            kids playing pickup basketball, and people simply sitting and
            watching the neighborhood go by. It is not Gold Medal Park or
            Loring Park. It does not have a spiral mound or a sculpture
            garden. But it is the one place in the neighborhood that belongs
            to everyone, and it has been there since 1883, which is more
            than the Wells Fargo towers can say.
          </p>
        </Prose>
        <Quote
          text="I&apos;ve been in Elliot Park for twelve years. I&apos;ve watched parking lots become apartment buildings, empty blocks become construction zones. Some of it is good — new neighbors, new businesses, better sidewalks. Some of it makes me nervous. The rents are going up. The people who were here first are getting squeezed. I just hope there&apos;s room for everyone when it&apos;s done."
          cite="Long-term Elliot Park renter"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Elliot Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Elliot Park&apos;s food scene is functional rather than
            destination-worthy — a reflection of a neighborhood that has
            historically served its residents&apos; daily needs rather than
            attracting diners from across the city. That is slowly changing
            as new development brings ground-floor retail and the population
            grows, but Elliot Park is not yet a food neighborhood in the way
            that the{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>{" "}
            or{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>{" "}
            are. What it offers is proximity to everything — downtown dining
            is a short walk north, and the ethnic restaurants of{" "}
            <Link href="/neighborhoods/cedar-riverside" className="text-[#2a9d8f] hover:underline">
              Cedar-Riverside
            </Link>{" "}
            and the Phillips neighborhoods are just south.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "The Nicollet Diner", tag: "Diner / American", price: "$–$$", description: "1612 Nicollet Avenue (nearby). A classic diner serving breakfast and lunch — eggs, pancakes, burgers, and the kind of bottomless coffee that fuels early-morning hospital shifts. Not in Elliot Park proper but close enough that residents treat it as theirs. No-frills, reliable, and open early." }} />
          <PlaceCardComponent place={{ name: "Sawatdee", tag: "Thai", price: "$–$$", description: "607 Washington Avenue South. One of the original Thai restaurants in Minneapolis, Sawatdee has been serving pad thai, curries, and noodle dishes since the 1980s. The food is approachable rather than adventurous, but the consistency and the portion sizes have kept it alive for decades. A neighborhood institution in the literal sense." }} />
          <PlaceCardComponent place={{ name: "Café Racer Kitchen", tag: "Cafe / Incubator", price: "$–$$", description: "2929 Chicago Avenue (nearby). A shared commercial kitchen and cafe space that has launched several Minneapolis food businesses. The rotating lineup of food vendors means the menu changes regularly. Worth checking what's on offer — some of the city's most interesting emerging food concepts test their ideas here." }} />
          <PlaceCardComponent place={{ name: "Ground-Floor Retail (New Development)", tag: "Various", price: "$–$$", description: "Several new apartment buildings in Elliot Park have incorporated ground-floor restaurant and retail space. The tenants rotate as the buildings lease up, but the trend is toward coffee shops, fast-casual restaurants, and convenience-oriented businesses that serve the growing residential population. Check what's open — the landscape is changing fast." }} />
          <PlaceCardComponent place={{ name: "Hennepin Healthcare Cafeteria", tag: "Hospital Cafeteria", price: "$", description: "Not glamorous, but honest: the Hennepin Healthcare cafeteria is open to the public, serves decent food at low prices, and is where a significant portion of the neighborhood's workforce eats lunch. It is a hospital cafeteria — adjust expectations accordingly — but it is also a genuinely democratic public space." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Elliot Park&apos;s grocery situation is thin. There is no
              full-service supermarket within the neighborhood boundaries.
              Residents rely on the downtown Target for basics, the Aldi on
              Lake Street for affordable groceries, or the ethnic grocery
              stores along Nicollet Avenue in{" "}
              <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
                Whittier
              </Link>{" "}
              (known locally as Eat Street). Delivery services fill some of
              the gap. A proper grocery store remains one of the neighborhood&apos;s
              most significant unmet needs.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors / Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors in Elliot Park">
        <Prose>
          <p>
            Elliot Park is not a parks neighborhood. The namesake park is the
            primary green space — a modest but functional urban park with a
            recreation center, basketball courts, a playground, and enough
            open grass for informal sports and picnics. The Elliot Park
            Recreation Center offers programming for children and adults,
            including gym access, classes, and community events. It is well
            used by the neighborhood and serves as a de facto community center.
          </p>
        </Prose>

        <ArticleSubsection title="Elliot Park">
          <Prose>
            <p>
              The park that gives the neighborhood its name is not large —
              roughly two city blocks — but it punches above its weight as
              a community gathering space. In summer, the basketball courts
              are busy from early morning until dark. The playground draws
              families from the surrounding apartment buildings. The open
              lawn hosts informal soccer games and community events. The
              recreation center, a sturdy brick building that has been
              renovated several times, provides indoor programming year-round.
              This is not a destination park. It is a neighborhood park in
              the best sense — a place that belongs to the people who live
              around it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Cultural Resources">
          <Prose>
            <p>
              Elliot Park&apos;s cultural resources are mostly borrowed from
              neighboring areas. The Minneapolis Institute of Art (Mia) is
              a short walk south in{" "}
              <Link href="/neighborhoods/phillips-west" className="text-[#2a9d8f] hover:underline">
                Phillips West
              </Link>
              . The Guthrie Theater and Mill City Museum are walkable to the
              northeast in{" "}
              <Link href="/neighborhoods/downtown-east" className="text-[#2a9d8f] hover:underline">
                Downtown East
              </Link>
              . The Walker Art Center and Minneapolis Sculpture Garden are
              accessible via the{" "}
              <Link href="/neighborhoods/loring-park" className="text-[#2a9d8f] hover:underline">
                Loring Park
              </Link>{" "}
              neighborhood to the west. Elliot Park&apos;s central location
              means these world-class institutions are all within a
              twenty-minute walk — a significant quality-of-life advantage
              that the neighborhood&apos;s modest appearance might not suggest.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Midtown Greenway (South Edge)">
          <Prose>
            <p>
              The Midtown Greenway — the 5.5-mile bike and pedestrian trail
              built in a former railroad trench — runs along the southern
              edge of the broader Phillips area and is accessible from Elliot
              Park within a short walk or ride. The Greenway connects to the
              Chain of Lakes, the Mississippi River trails, and the broader
              regional trail system. For cycling commuters and recreational
              riders, it is one of the best pieces of urban infrastructure
              in the Twin Cities.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Elliot Park Schools">
        <Prose>
          <p>
            Elliot Park has limited school options within its boundaries, but
            several Minneapolis Public Schools are accessible nearby.
            Jefferson Community School, a few blocks south, is the nearest
            MPS elementary option. Andersen United Community School and
            Whittier International Elementary are also within reasonable
            distance. For middle and high school, students access the
            broader MPS system — South High School is the most common high
            school assignment for this area.
          </p>
          <p>
            The neighborhood&apos;s school-age population is smaller than
            in surrounding areas but more significant than in downtown proper.
            Families with children do live in Elliot Park — particularly
            in the affordable housing complexes — and they navigate the same
            citywide enrollment system that all MPS families use. The quality
            and stability of school options is a concern: some nearby schools
            have experienced enrollment declines and programmatic changes.
            Families who prioritize schools may find stronger options in
            neighborhoods with established elementary schools and active
            parent communities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Elliot Park Real Estate & Housing">
        <Prose>
          <p>
            Elliot Park&apos;s housing stock is an unusually diverse mix for
            a neighborhood this close to downtown. Affordable and subsidized
            housing — public housing, Section 8, nonprofit-owned buildings —
            makes up a substantial portion of the total, a legacy of the
            neighborhood&apos;s history as a low-income area. Older apartment
            buildings, some well-maintained and some not, provide relatively
            affordable market-rate rentals. And new construction — market-rate
            and luxury apartment buildings built in the last decade — has
            added a tier of housing that would have been unimaginable here
            twenty years ago.
          </p>
          <p>
            Rental prices reflect this range. Affordable units in older or
            subsidized buildings can be found for $800–$1,200 for a
            one-bedroom. Market-rate units in newer buildings run $1,400–
            $2,200 for a one-bedroom, $1,800–$2,800 for a two-bedroom.
            Condos are less common than in downtown proper but exist in a
            few buildings, typically priced at $180,000–$350,000 for a
            one- or two-bedroom unit. There are very few single-family homes.
          </p>
        </Prose>

        <ArticleSubsection title="The Development Pipeline">
          <Prose>
            <p>
              Elliot Park has one of the most active development pipelines
              in Minneapolis. Several new apartment buildings are in various
              stages of planning, approval, and construction. Most are
              market-rate or mixed-income, with affordability requirements
              negotiated through the city&apos;s inclusionary zoning policies
              and developer agreements. The sheer volume of new construction
              has raised concerns among existing residents about displacement —
              as the neighborhood becomes more desirable, rents in older
              buildings rise, and landlords have more incentive to sell to
              developers. The Elliot Park Neighborhood Inc. (EPNI) has
              advocated for affordability protections, with mixed results.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="I moved here because it was the cheapest place I could find within walking distance of my job at the hospital. That was 2017. Now the building next door is luxury apartments with a rooftop pool. My rent has gone up 40 percent. I don&apos;t know how much longer I can stay."
          cite="Elliot Park renter, healthcare worker"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Elliot Park">
        <Prose>
          <p>
            Elliot Park benefits from its proximity to downtown&apos;s transit
            infrastructure without having light rail stations directly within
            its boundaries. The nearest Blue and Green Line stations —
            Government Plaza and US Bank Stadium — are within a half-mile
            walk from most of the neighborhood. Bus service is strong:
            multiple routes run along Chicago Avenue, Park Avenue, and the
            cross-streets connecting to downtown, the University of Minnesota,
            and South Minneapolis. The Metro Transit Route 5 on Chicago
            Avenue is one of the highest-ridership bus lines in the system.
          </p>
          <p>
            Walking is the primary mode for many residents. The Walk Score
            of 88 reflects the reality — downtown is right there, and most
            daily needs are accessible on foot. The neighborhood&apos;s grid
            layout makes navigation simple, and the relatively flat terrain
            makes walking and biking easy. Bike infrastructure is adequate
            but not exceptional — bike lanes exist on some streets, and the
            Midtown Greenway is accessible from the southern edge.
          </p>
          <p>
            By car, the neighborhood&apos;s freeway-adjacent location provides
            quick access to I-35W and I-94, making it easy to reach the
            suburbs and the airport. Street parking is generally available
            and often free, which is a significant advantage over downtown
            proper. Residents with cars appreciate the combination of
            walkability to downtown and easy car access to everywhere else.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Elliot Park is changing faster than almost any neighborhood in
            Minneapolis, and the changes are generating tensions that are
            real, consequential, and not easily resolved. Here is what is
            actually happening.
          </p>
        </Prose>

        <ArticleSubsection title="Gentrification and Displacement">
          <Prose>
            <p>
              The word gentrification is overused, but in Elliot Park it fits.
              The neighborhood is experiencing a classic gentrification
              pattern: new, higher-end development attracts higher-income
              residents, which raises property values and rents, which
              pressures lower-income residents who were there first. The
              development is not inherently bad — Elliot Park genuinely
              needed investment, and some of the new buildings are filling
              spaces that were empty or blighted. But the benefits of
              development are not equally distributed. New residents get
              rooftop pools and fitness centers. Existing residents get
              higher rents and fewer affordable units. Community organizations
              have fought for affordability requirements in new projects,
              and some developers have included income-restricted units.
              Whether these measures are sufficient to prevent wholesale
              displacement remains to be seen.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Healthcare Corridor's Expansion">
          <Prose>
            <p>
              Hennepin Healthcare and the broader healthcare industry continue
              to shape Elliot Park in ways that benefit and burden the
              neighborhood simultaneously. The hospital is the largest
              employer in the area and provides essential services — including
              as the county&apos;s safety-net hospital, treating patients
              regardless of ability to pay. But institutional expansion
              consumes land, generates traffic, and creates a neighborhood
              that revolves around an institution&apos;s needs rather than
              residents&apos; needs. The tension between being a neighborhood
              where people live and a campus where people work is ongoing.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Safety and Social Services">
          <Prose>
            <p>
              Elliot Park hosts a concentration of social service
              organizations — shelters, treatment centers, food banks,
              outreach programs — that serve vulnerable populations from
              across the metro. These services are essential, and the need
              for them is not going away. But the concentration of services
              in a single neighborhood creates challenges: visible
              homelessness, substance use, and associated behavioral issues
              are part of daily life in parts of Elliot Park. Newer residents
              sometimes clash with service providers and their clients,
              creating friction that maps roughly onto class and racial lines.
              The honest reality is that Elliot Park absorbs more of the
              city&apos;s social service burden than most neighborhoods, and
              the people who live here — both longtime residents and newcomers —
              experience the consequences of that concentration every day.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Elliot Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
