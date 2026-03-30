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
    title: "Stevens Square - Loring Heights, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Stevens Square - Loring Heights, Minneapolis — the densest neighborhood in the city, affordable apartments near downtown, Loring Park access, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Stevens Square - Loring Heights",
  deck: "The densest neighborhood in Minneapolis — five blocks of century-old apartment buildings stacked on top of each other, where the rent is still (relatively) cheap, Loring Park is your backyard, downtown is a ten-minute walk, and the question of whether affordability can survive proximity to everything is answered a little differently every year.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Stevens Square?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Stevens Square" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Stevens Square - Loring Heights, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,200", label: "Residents (US Census / City of Minneapolis)" },
      { value: "~25,000/sq mi", label: "Population density — highest in Minneapolis" },
      { value: "$750–$1,400", label: "Typical 1-bedroom rent range (2025 data)" },
      { value: "90%+", label: "Renter-occupied housing" },
      { value: "1880s–1920s", label: "Era when most housing stock was built" },
      { value: "91", label: "Walk Score" },
      { value: "78", label: "Transit Score" },
      { value: "10 min", label: "Walk to Nicollet Mall" },
    ],
  },
  faq: [
    {
      question: "Is Stevens Square a good neighborhood in Minneapolis?",
      answer:
        "Stevens Square is a good neighborhood for a specific kind of person — someone who values affordability, walkability, and proximity to downtown over polish, quiet, or space. It is the densest neighborhood in Minneapolis, with a housing stock dominated by older apartment buildings that offer relatively low rents for the location. It is walkable to downtown, adjacent to Loring Park, and well-served by transit. It is also gritty, sometimes loud, and not as well-maintained as neighborhoods with higher property values. If you are on a budget and want urban living without suburban compromises, Stevens Square delivers. If you want a neighborhood that looks good on Instagram, look elsewhere.",
    },
    {
      question: "Is Stevens Square, Minneapolis safe?",
      answer:
        "Stevens Square has higher-than-average crime rates for Minneapolis, driven by its density, its transient population, and its proximity to downtown. Property crime — car break-ins, bike theft, package theft — is common. Violent crime occurs but is concentrated in specific blocks and often involves people who know each other. The neighborhood has an active community organization (Stevens Square Community Organization) that works on safety issues, and most residents report that basic urban awareness — locking up, being alert at night, knowing your surroundings — is sufficient for day-to-day safety. It is not the safest neighborhood in the city, but it is not the most dangerous either.",
    },
    {
      question: "Why is Stevens Square so dense?",
      answer:
        "Stevens Square's density is a product of its history. The neighborhood was developed in the late 19th and early 20th centuries as a residential area for downtown workers — apartment buildings, boarding houses, and residential hotels were built at high density to house the people who worked in the nearby commercial core. The housing stock was never replaced with single-family homes or suburban-style development, so the original density persists. The neighborhood is roughly 90 percent renter-occupied, and the older apartment buildings — typically three to six stories, brick or frame construction — pack a lot of units into a small area.",
    },
    {
      question: "How much does it cost to live in Stevens Square?",
      answer:
        "Stevens Square is one of the most affordable neighborhoods within walking distance of downtown Minneapolis. One-bedroom apartments in older buildings typically rent for $750–$1,400, depending on the building's condition and amenities. Studios can be found for $600–$1,000. Two-bedrooms range from $1,000 to $1,800. Newer or renovated buildings command premiums at the higher end of these ranges. Homeownership options are limited — the neighborhood is overwhelmingly rental — but occasional condo conversions appear on the market at prices that look startlingly low compared to downtown or the North Loop.",
    },
    {
      question: "Is Stevens Square close to Loring Park?",
      answer:
        "Yes. Stevens Square - Loring Heights borders Loring Park directly. The park — with its lake, walking paths, Berger Fountain, and seasonal events — is functionally the neighborhood's primary green space and recreational amenity. Residents of Stevens Square are within a five-minute walk of Loring Park, which also connects via the Loring Greenway to the Walker Art Center and the Minneapolis Sculpture Garden. This adjacency is one of the neighborhood's most significant assets.",
    },
    {
      question: "What is Loring Heights?",
      answer:
        "Loring Heights is the smaller, slightly more upscale portion of the Stevens Square - Loring Heights neighborhood, occupying the blocks closest to Loring Park and I-94. It has some of the same older apartment building stock as Stevens Square proper but tends toward slightly higher rents and slightly better-maintained buildings, owing to its more immediate proximity to the park. The two areas are officially one neighborhood, and most residents use the names interchangeably or simply say 'Stevens Square.'",
    },
    {
      question: "Where exactly is Stevens Square in Minneapolis?",
      answer:
        "Stevens Square - Loring Heights is a small neighborhood immediately south of downtown Minneapolis, roughly bounded by I-94 / Loring Park to the north, Nicollet Avenue to the east, Franklin Avenue to the south, and Lyndale Avenue to the west. It is only about eight blocks square — one of the smallest neighborhoods in the city by area — but its density makes it feel larger than it is. It sits between Loring Park to the north and Whittier to the south, with Lowry Hill East (the Wedge) to the west.",
    },
    {
      question: "Can you walk to downtown from Stevens Square?",
      answer:
        "Absolutely. Downtown Minneapolis — specifically Nicollet Mall and the commercial core — is approximately a ten-minute walk from Stevens Square. This walkability is one of the neighborhood's primary advantages and a key reason people choose to live here despite the trade-offs in building quality and neighborhood polish. Many residents commute to downtown jobs on foot year-round.",
    },
    {
      question: "What is the Stevens Square Community Organization?",
      answer:
        "The Stevens Square Community Organization (SSCO) is the neighborhood's resident-run advocacy group. It works on issues including safety, housing, land use, and quality of life. SSCO has been particularly active on issues related to building maintenance, landlord accountability, and the concentration of problem properties in the neighborhood. It holds regular meetings and serves as the primary channel between residents and city government. For a neighborhood of this size, SSCO is unusually active and effective.",
    },
    {
      question: "Is Stevens Square a good first apartment neighborhood?",
      answer:
        "Stevens Square is arguably the best first-apartment neighborhood in Minneapolis for someone who wants to live near downtown on a budget. The rents are among the lowest in the central city. The walkability means you can get by without a car. The transit connections are strong. You are ten minutes from downtown, five minutes from Loring Park, and a short bus ride from everywhere else. The trade-offs are real — the buildings are old, the neighborhood is gritty, and you will need to exercise urban awareness — but for a young person starting out, the value proposition is hard to beat.",
    },
  ],
  nearby: [
    { name: "Loring Park", slug: "loring-park", description: "The park, the Walker, and downtown's western edge" },
    { name: "Whittier", slug: "whittier", description: "Eat Street, diversity, and one of the city's best walkable neighborhoods" },
    { name: "Lowry Hill East", slug: "lowry-hill-east", description: "The Wedge — co-ops, bikes, and progressive density" },
    { name: "Downtown West", slug: "downtown-west", description: "The commercial core, skyways, and Nicollet Mall" },
    { name: "Elliot Park", slug: "elliot-park", description: "Healthcare corridor and rapid development to the east" },
    { name: "Phillips West", slug: "phillips-west", description: "Diverse and affordable, home to the Institute of Arts" },
  ],
  closing: {
    title: "What Makes Stevens Square Worth Knowing",
    paragraphs: [
      "Stevens Square is not a neighborhood that gets written about in glossy magazines or featured in relocation guides aimed at high-income transplants. It is too small, too dense, too old, and too rough around the edges for that kind of attention. What it is, quietly and persistently, is one of the most functional urban neighborhoods in Minneapolis — a place where working people have lived within walking distance of downtown for 140 years, where the buildings are old enough to have character and cheap enough to be accessible, where the park is right there and the bus comes every ten minutes.",
      "The threat to Stevens Square is not neglect — the neighborhood has survived decades of that. The threat is success. As downtown housing prices rise and the appeal of walkable urban living grows, Stevens Square&apos;s affordability becomes both its greatest asset and its greatest vulnerability. Every building renovation that raises rents, every condo conversion that removes a rental unit, every dollar of new investment that makes the neighborhood more desirable also makes it less accessible to the people who made it work in the first place. Stevens Square will survive. Whether it survives as an affordable, dense, genuinely urban neighborhood — or becomes another polished district priced for people who could live anywhere — depends on choices being made right now.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Stevens Square is eight blocks of apartment buildings — maybe ten,
          depending on where you draw the lines — and it contains more people
          per square foot than any other neighborhood in the state of
          Minnesota. On a warm Saturday afternoon in June, you can feel the
          density. Every stoop has someone sitting on it. Every balcony has
          a person reading or smoking or staring at their phone. The sidewalks
          along 2nd Avenue and 3rd Avenue are full — not busy in the way that
          downtown is busy, with people moving through, but full in the way
          that a place is full when everyone lives on top of everyone else
          and goes outside when the weather finally allows it. A woman is
          walking three dogs at once, navigating around a kid on a scooter
          and a man carrying groceries up the steps of a brick walk-up that
          looks exactly like every other brick walk-up on the block because
          they were all built within ten years of each other, a century ago,
          for people who worked downtown and couldn&apos;t afford a house.
          Some things change. Some things don&apos;t.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/stevens-square-loring-heights/hero.webp"
        alt="Dense apartment buildings along a tree-lined street in Stevens Square, Minneapolis"
        caption="Stevens Square — the densest neighborhood in Minneapolis, built a century ago and still going"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Stevens Square - Loring Heights, Minneapolis?">
        <Prose>
          <p>
            Stevens Square - Loring Heights is the smallest and densest
            neighborhood in Minneapolis — a roughly eight-by-ten-block area
            of century-old apartment buildings packed between Loring Park
            to the north and Franklin Avenue to the south, Nicollet Avenue
            to the east and Lyndale Avenue to the west. The neighborhood is
            almost entirely residential, almost entirely rental, and almost
            entirely composed of three- to six-story brick and frame
            apartment buildings constructed between the 1880s and the 1920s.
            Approximately 4,200 people live here, giving it a population
            density of roughly 25,000 per square mile — higher than most
            neighborhoods in Chicago or San Francisco, and wildly out of
            character for a Midwestern city.
          </p>
          <p>
            The neighborhood functions as downtown Minneapolis&apos;s
            affordable annex. It has always served this role — built
            originally for downtown workers who needed cheap housing close
            to their jobs — and it continues to serve it today, albeit under
            increasing pressure. The rents are among the lowest in the
            central city. The walk to Nicollet Mall takes ten minutes. Loring
            Park, with its lake and its connection to the Walker Art Center,
            is literally next door. For people who want urban living on a
            budget — first-apartment renters, students, service workers,
            immigrants, artists, anyone who prioritizes location over
            finishes — Stevens Square has been delivering that for 140 years.
            The{" "}
            <Link href="/neighborhoods/loring-park" className="text-[#2a9d8f] hover:underline">
              Loring Park
            </Link>{" "}
            neighborhood to the north is more polished.{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>{" "}
            to the south has more food and retail. But Stevens Square has the
            density, the price, and the location — and for the right person,
            that combination is enough.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Stevens Square Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/stevens-square-loring-heights/neighborhood-sign.webp"
          alt="Stevens Square - Loring Heights neighborhood sign in Minneapolis"
          caption="The Stevens Square - Loring Heights neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Stevens Square History & Origins">
        <Prose>
          <p>
            Stevens Square takes its name from Colonel John H. Stevens, who
            built the first permanent house of European-American settlement
            in what would become Minneapolis in 1849. His homestead was near
            the present-day site of the neighborhood, though the actual
            Stevens House was moved multiple times and now sits in Minnehaha
            Park. The small park at the neighborhood&apos;s center — Stevens
            Square Park — was established in his honor.
          </p>
          <p>
            The neighborhood developed rapidly in the late 19th century as
            Minneapolis boomed. The proximity to downtown made the area
            attractive for apartment construction — workers in the offices,
            mills, and retail establishments of the growing city needed
            housing they could afford and could walk to work from. Developers
            built apartment buildings at a pace and density unusual for
            Minneapolis, creating the compressed urban fabric that defines
            the neighborhood today. The buildings were modest — brick
            exteriors, small units, shared hallways, minimal ornamentation —
            but they were solid, and they were close to everything. By 1920,
            Stevens Square was one of the most densely populated areas in the
            state.
          </p>
          <p>
            The mid-20th century brought decline. Suburbanization pulled
            middle-class residents outward. The construction of I-94 along
            the neighborhood&apos;s northern edge in the 1960s severed the
            connection to Loring Park and downtown, isolating the
            neighborhood behind a wall of freeway infrastructure. Property
            values dropped. Buildings deteriorated. Absentee landlords
            deferred maintenance. By the 1970s and 1980s, Stevens Square
            had a reputation as a high-crime, low-income area — the kind
            of neighborhood that Minneapolis residents drove through quickly
            or avoided entirely.
          </p>
          <p>
            The turnaround began in the 1990s, driven partly by the Stevens
            Square Community Organization (SSCO), which pushed for building
            inspections, landlord accountability, and public safety
            improvements. The neighborhood never fully gentrified — the
            buildings are too old and too modestly built to attract the kind
            of renovation investment that transforms a neighborhood overnight —
            but conditions improved. The rents stayed relatively low. The
            density persisted. And gradually, Stevens Square settled into
            its current identity: the cheapest place to live near downtown
            Minneapolis that is also, against the odds, a functioning
            neighborhood.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Stevens Square">
        <Prose>
          <p>
            Living in Stevens Square is living in a neighborhood that does
            not pretend to be anything other than what it is — an extremely
            dense collection of old apartment buildings where the rent is
            cheap, the walls are thin, the laundry is in the basement, and
            the walk to downtown takes ten minutes. The buildings range from
            well-maintained to borderline neglected. The best landlords keep
            their buildings clean, respond to maintenance requests, and take
            pride in their properties. The worst let things slide until the
            city forces a correction. As a prospective tenant, doing your
            homework on a specific building matters more here than in most
            neighborhoods — the difference between a good Stevens Square
            apartment and a bad one is enormous, even if the rents are
            similar.
          </p>
          <p>
            The resident mix reflects the neighborhood&apos;s affordability.
            Young professionals in their first or second apartment. Students
            at nearby colleges and the University of Minnesota. Immigrants
            and refugees, particularly from East Africa and Southeast Asia.
            Service workers who staff the downtown hotels and restaurants.
            Artists and musicians who need cheap rent more than they need
            granite countertops. Longtime residents who have lived in the
            same building for decades. The diversity is economic as much as
            racial — this is a neighborhood where a barista, a social worker,
            a nursing student, and a retired janitor might all live in the
            same building, because the rent is what they can all afford.
          </p>
          <p>
            The social fabric is thinner than in neighborhoods with
            homeowners and families. Turnover is high — many residents stay
            for a year or two before moving on. The neighborhood does not
            have the block-party energy of South Minneapolis or the
            community-institution depth of Northeast. What it has is
            proximity and accessibility — you are close to everything, the
            bus comes every ten minutes, Loring Park is right there, and
            you do not need a car. For people who are building their lives
            and do not yet have the income for the neighborhoods they will
            eventually move to, Stevens Square is where you start. And some
            people discover, after starting here, that they never want to
            leave.
          </p>
        </Prose>
        <Quote
          text="My first apartment in Minneapolis was a studio in Stevens Square. $695 a month, one block from Loring Park. I could walk to my job downtown in twelve minutes. The building was old and the hallway smelled like cooking from eight different countries. It was the best deal in the city and I knew it."
          cite="Former Stevens Square resident, now in Whittier"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Stevens Square Food, Drink & Local Spots">
        <Prose>
          <p>
            Stevens Square has almost no restaurants or commercial
            establishments within its boundaries — it is a residential
            neighborhood, full stop. The food scene here is the food scene
            of the neighborhoods that surround it. Eat Street (Nicollet
            Avenue through{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>
            ) is a five-minute walk east. Lyndale Avenue&apos;s restaurants
            in{" "}
            <Link href="/neighborhoods/lowry-hill-east" className="text-[#2a9d8f] hover:underline">
              Lowry Hill East
            </Link>{" "}
            are a five-minute walk west. Downtown is ten minutes north. The
            advantage of Stevens Square&apos;s central location is that you
            are close to all of these without being in any of them — you get
            the food without the noise and the bar traffic.
          </p>
        </Prose>

        <ArticleSubsection title="Within Reach">
          <PlaceCardComponent place={{ name: "Eat Street (Nicollet Ave)", tag: "Restaurant Row", price: "$–$$$", description: "Nicollet Avenue between Grant Street and 29th Street — known locally as Eat Street — is one of the most diverse and concentrated dining corridors in the Twin Cities. Vietnamese pho, Ethiopian injera, Mexican tacos, Japanese ramen, Somali restaurants, and everything in between. Stevens Square residents access it with a five-minute walk east. It is the neighborhood's de facto food scene." }} />
          <PlaceCardComponent place={{ name: "Loring Park Restaurants", tag: "Various", price: "$$–$$$", description: "The blocks around Loring Park — including restaurants along Harmon Place and 1st Avenue — offer several dining options that are walkable from Stevens Square. These tend to be slightly more upscale than Eat Street, catering to the theater and Walker Art Center crowd." }} />
          <PlaceCardComponent place={{ name: "Wedge Community Co-op", tag: "Grocery / Co-op", price: "$$", description: "2105 Lyndale Avenue South, in Lowry Hill East. The Wedge is one of the best natural foods co-ops in the Midwest — a worker-owned grocery with excellent produce, bulk foods, local products, and a prepared foods section. A ten-minute walk from Stevens Square. For everyday groceries at lower prices, the nearby Aldi and Cub Foods on Lake Street are also accessible." }} />
          <PlaceCardComponent place={{ name: "Corner Stores and Bodegas", tag: "Convenience", price: "$", description: "Stevens Square has several small corner stores and convenience shops that serve the immediate neighborhood — milk, bread, snacks, household basics. These are not destination shops, but they are the kind of hyperlocal retail that dense urban neighborhoods generate and depend on." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The grocery situation in Stevens Square is functional but not
              ideal. There is no full-service supermarket within the
              neighborhood. The Wedge Co-op is the closest quality option.
              The downtown Target has a grocery section. Aldi and Cub Foods
              on Lake Street are accessible by bus. Residents who cook
              regularly develop routines — Wedge for produce, Aldi for
              staples, corner store for emergencies — that work well enough
              once you learn the rhythm.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors / Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors in Stevens Square">
        <Prose>
          <p>
            Stevens Square&apos;s outdoor and cultural assets are almost
            entirely borrowed — the neighborhood is so small and so dense
            that there is not room for much within its boundaries. But what
            it borrows from its neighbors is world-class.
          </p>
        </Prose>

        <ArticleSubsection title="Loring Park">
          <Prose>
            <p>
              Loring Park is the primary outdoor amenity for Stevens Square
              residents — a 34-acre urban park with a lake, walking and
              running paths, the Berger Fountain, gardens, and year-round
              programming. In summer, the park hosts music festivals, movie
              screenings, and the Loring Park Art Festival. In winter, the
              frozen lake and snow-covered paths provide quieter recreation.
              The park is directly adjacent to Stevens Square, and most
              residents can reach it within a five-minute walk. It is, for
              practical purposes, the neighborhood&apos;s backyard — and it
              is one of the best backyards in the city.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Walker Art Center & Sculpture Garden">
          <Prose>
            <p>
              The Walker Art Center — one of the most important contemporary
              art museums in the country — and the adjacent Minneapolis
              Sculpture Garden (home of the iconic Spoonbridge and Cherry)
              are accessible from Stevens Square via the Loring Greenway, a
              landscaped pedestrian corridor that connects Loring Park to
              the Vineland Place cultural campus. The walk takes approximately
              fifteen minutes. The Sculpture Garden is free and open daily.
              The Walker&apos;s exhibitions, film screenings, and performing
              arts programming are among the best in the Midwest. Having
              this caliber of cultural institution within walking distance
              of an $800-a-month apartment is one of the quietly remarkable
              things about living in Stevens Square.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Stevens Square Park">
          <Prose>
            <p>
              Stevens Square Park — the small park at the center of the
              neighborhood — is modest: a few benches, some trees, a small
              playground. It does not compare to Loring Park in scale or
              amenities. But it serves as the neighborhood&apos;s geographic
              and social center, a place where residents encounter each
              other and where the community organization holds events. On a
              warm evening, the park is full of people from the surrounding
              buildings doing what people in dense neighborhoods have always
              done — sitting outside because their apartments are small and
              the evening is nice.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Stevens Square Schools">
        <Prose>
          <p>
            Stevens Square has no schools within its boundaries — the
            neighborhood is too small and too densely built for school
            infrastructure. Families with school-age children access
            Minneapolis Public Schools through the district&apos;s citywide
            enrollment system. Whittier International Elementary, a few
            blocks south, is the nearest MPS elementary option. Jefferson
            Community School is also nearby. For middle and high school,
            families access the broader MPS system — South High School is
            the most common assignment.
          </p>
          <p>
            The neighborhood&apos;s demographic skews younger adults without
            children, so the school question is less relevant for most
            residents than in family-oriented neighborhoods. Families with
            children do live in Stevens Square — particularly in the
            affordable housing stock — but they are a minority. The density
            and the building types (small apartments, limited outdoor space)
            are not optimized for family life, and most families with the
            means to choose move to neighborhoods with more space and
            stronger school options.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Stevens Square Real Estate & Housing">
        <Prose>
          <p>
            Stevens Square&apos;s housing market is almost entirely rental.
            Over 90 percent of units are renter-occupied, which is among the
            highest rates in Minneapolis. The housing stock is dominated by
            older apartment buildings — brick and frame construction from
            the 1880s through the 1920s — with small units, modest finishes,
            and the kind of character that comes from a hundred years of
            continuous habitation. These are not luxury apartments. They are
            functional, sometimes charming, and often in need of maintenance
            that they may or may not be getting.
          </p>
          <p>
            Rents are among the lowest in the central city. Studios range
            from $600 to $1,000. One-bedrooms from $750 to $1,400.
            Two-bedrooms from $1,000 to $1,800. The variation within these
            ranges is significant — a well-maintained building with a
            responsive landlord might charge $1,200 for a one-bedroom that
            is a far better value than a neglected building charging $900.
            Research the building, not just the rent.
          </p>
        </Prose>

        <ArticleSubsection title="The Ownership Question">
          <Prose>
            <p>
              Homeownership options in Stevens Square are extremely limited.
              Occasional condo conversions appear on the market, typically
              priced at $120,000–$250,000 for a one- or two-bedroom unit.
              These can represent extraordinary value for the location —
              owning a unit within walking distance of downtown and Loring
              Park for under $200,000 is nearly impossible elsewhere in the
              central city. The trade-offs are older buildings, potentially
              high HOA fees relative to the unit value, and the uncertainty
              of owning in a building where most units are rentals. For
              first-time buyers on a budget, it is worth investigating. For
              anyone expecting appreciation or luxury finishes, it is not.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="I pay $1,100 for a one-bedroom with hardwood floors, ten-foot ceilings, and a walk to Loring Park. My friend in the North Loop pays $2,200 for the same square footage with laminate floors and a view of a parking ramp. I&apos;ll take the old building."
          cite="Stevens Square renter"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Stevens Square">
        <Prose>
          <p>
            Stevens Square&apos;s location makes getting around easy by almost
            any mode. Downtown is a ten-minute walk north. Eat Street is
            five minutes east. The Wedge Co-op is ten minutes west. The
            Walk Score of 91 reflects a genuine ability to accomplish daily
            life on foot — this is not a neighborhood that requires a car
            for routine errands.
          </p>
          <p>
            Transit service is strong. Multiple bus routes run along
            Nicollet Avenue, Lyndale Avenue, and the cross-streets. The
            Route 18 on Nicollet provides frequent north-south service
            between downtown and South Minneapolis. The Route 4 on Lyndale
            connects to Uptown and beyond. The nearest light rail stations —
            Nicollet Mall on the Blue and Green Lines — are approximately a
            fifteen-minute walk or a short bus ride. For regional trips, the
            transit hub at Target Field is accessible via downtown.
          </p>
          <p>
            Cycling is practical and popular. The neighborhood&apos;s flat
            terrain, grid streets, and proximity to bike infrastructure
            make it easy to get around on two wheels. Bike lanes on nearby
            streets connect to the Midtown Greenway, the Chain of Lakes
            trails, and the broader city trail network. Nice Ride bikeshare
            stations are within easy reach.
          </p>
          <p>
            Car ownership is less common here than in most Minneapolis
            neighborhoods, and the infrastructure reflects that. Street
            parking is available but can be tight given the density. Many
            older buildings do not have off-street parking. If you own a
            car, you will compete for spots. If you do not own a car, you
            will not miss one.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Stevens Square is a neighborhood where the tensions are quieter
            than in places like Elliot Park or Downtown West, but no less
            real. The forces acting on the neighborhood are the same ones
            acting on affordable urban neighborhoods across the country —
            and the outcomes matter for the people who can least afford
            alternative options.
          </p>
        </Prose>

        <ArticleSubsection title="Affordability Under Pressure">
          <Prose>
            <p>
              Stevens Square&apos;s affordability is its defining feature and
              its greatest vulnerability. As downtown housing costs rise and
              the appeal of walkable urban living grows, the neighborhood&apos;s
              low rents attract more attention — from prospective tenants
              and from investors. Building sales, renovations, and rent
              increases are gradually pushing prices upward. The
              neighborhood is not yet unaffordable — the rents remain low
              by central-city standards — but the trajectory is clear. Every
              building that gets renovated and re-rented at higher prices
              removes a unit from the affordable stock. The neighborhood
              does not have significant deed-restricted affordable housing
              to serve as a floor. The affordability is a function of
              building age and condition, and both of those things change.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Building Quality and Landlord Accountability">
          <Prose>
            <p>
              The quality of housing in Stevens Square varies enormously by
              building and by landlord. Some buildings are well-maintained,
              with responsive management and regular upgrades. Others are
              neglected — deferred maintenance, slow repair response,
              pest issues, and the accumulated wear of a century of use.
              The Stevens Square Community Organization has been aggressive
              about pushing the city to enforce building codes and hold
              landlords accountable, and these efforts have produced real
              improvements. But the fundamental challenge persists: the
              buildings are old, the margins are thin, and some landlords
              prioritize cash flow over maintenance. Tenants in Stevens
              Square need to know their rights and be willing to use them.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Safety and Quality of Life">
          <Prose>
            <p>
              Crime in Stevens Square is higher than the city average,
              particularly property crime. The density, the transient
              population, and the proximity to downtown all contribute.
              Car break-ins, bike theft, and package theft are common
              complaints. Violent crime is less frequent but not absent.
              The neighborhood has improved significantly since its worst
              years in the 1980s and 1990s, and community-policing
              efforts have helped. But it remains a neighborhood where
              awareness matters — lock your car, lock your bike, know
              your surroundings, and get to know your neighbors.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Density Question">
          <Prose>
            <p>
              In an era when much of Minneapolis is debating whether to allow
              more density — duplexes, triplexes, apartment buildings in
              formerly single-family zones — Stevens Square has been dense
              for over a century. The neighborhood is, in some ways, a
              proof of concept: you can build a dense, walkable, affordable
              urban neighborhood in the Midwest, and it can function. The
              lessons of Stevens Square — what works (proximity, transit,
              affordability) and what doesn&apos;t (deferred maintenance,
              inadequate green space, thin social fabric) — are relevant
              to every Minneapolis neighborhood that is grappling with
              growth. Stevens Square didn&apos;t choose to be the densest
              neighborhood in the city. But it has been doing it longer
              than anyone else, and there is something to learn from that.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Stevens Square FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
