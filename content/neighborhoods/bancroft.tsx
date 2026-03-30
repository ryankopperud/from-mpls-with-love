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
    title: "Bancroft, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Bancroft, Minneapolis — Chicago Avenue, the diverse working-class community, affordable housing, restaurants, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Bancroft",
  deck: "A working-class South Minneapolis neighborhood south of Powderhorn Park where Chicago Avenue carries the commercial life, the housing stock is among the most affordable in the city's core, and a diverse community of long-term residents and newer arrivals holds together a neighborhood that most Minneapolis trend pieces pretend doesn't exist.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Bancroft?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Bancroft" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Bancroft, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,000", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$210K–$325K", label: "Median home sale price range (2025 data)" },
      { value: "1900s–1930s", label: "Era most homes were built" },
      { value: "Chicago Ave", label: "Primary commercial corridor" },
      { value: "Phelps Park", label: "Largest green space" },
      { value: "12–18 min", label: "Drive to downtown Minneapolis" },
      { value: "74", label: "Walk Score" },
      { value: "86", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Bancroft a good neighborhood in Minneapolis?",
      answer:
        "Bancroft is a solid, affordable, working-class neighborhood in South Minneapolis. It offers some of the lowest home prices in the city's core, genuine racial and economic diversity, walkable access to Chicago Avenue's commercial life, and a residential character that is unpretentious and grounded. It is not a polished neighborhood — the commercial corridors are utilitarian, the housing stock shows its age, and some blocks face real challenges with property crime and disinvestment. But for buyers and renters seeking affordability, location, and diversity, Bancroft delivers value that more expensive neighborhoods cannot match.",
    },
    {
      question: "Is Bancroft, Minneapolis safe?",
      answer:
        "Bancroft's safety profile is mixed. The residential blocks are generally quiet, and most residents feel safe on their own streets. Property crime — car break-ins, catalytic converter thefts, package theft — is a consistent concern. Violent crime exists, with rates somewhat above the city median but concentrated rather than evenly distributed. Chicago Avenue sees more activity and incidents than the interior blocks. As with many affordable urban neighborhoods, safety in Bancroft is a function of awareness and community — residents who know their neighbors and take basic precautions generally describe the neighborhood as manageable.",
    },
    {
      question: "What is Bancroft, Minneapolis known for?",
      answer:
        "Bancroft is known primarily for its affordability and its diversity. It is one of the most affordable neighborhoods in Minneapolis's core, and its population includes significant Latino, Somali, Black, and white communities. Chicago Avenue is the neighborhood's commercial spine, and Phelps Park provides green space and recreation. Bancroft does not have the name recognition of neighborhoods with lakes or trendy commercial strips, but it is known among people who understand Minneapolis's housing market as a place where you can buy a house and live in the city without stretching beyond your means.",
    },
    {
      question: "How much do homes cost in Bancroft, Minneapolis?",
      answer:
        "Median home sale prices in Bancroft ranged from roughly $210,000 to $325,000 in 2025. Smaller homes needing updates can be found under $200,000 — genuine starter-home territory in a city where that category has been shrinking for years. Well-maintained three-bedroom homes sell in the $250,000–$325,000 range. Fully renovated properties can reach $350,000–$375,000 but are less common. Bancroft remains one of the most affordable neighborhoods for homeownership in Minneapolis.",
    },
    {
      question: "What's the difference between Bancroft and Powderhorn Park?",
      answer:
        "Bancroft sits immediately south of Powderhorn Park and shares some of its demographic character, but the two neighborhoods have distinct identities. Powderhorn has the lake, a stronger countercultural and activist tradition, and more institutional density. Bancroft is quieter, more uniformly residential, and slightly more affordable. Powderhorn attracts people who want to be part of a politically engaged community; Bancroft attracts people who want affordable housing on quiet blocks close to the action without being in the middle of it.",
    },
    {
      question: "Is Bancroft walkable?",
      answer:
        "Bancroft earns a Walk Score of approximately 74 and a Bike Score of 86. Chicago Avenue provides groceries, restaurants, and transit connections within walking distance. The neighborhood's compact blocks and flat terrain make cycling practical, and the Midtown Greenway is accessible to the north. Bus service on Chicago Avenue (Route 5) provides frequent north-south transit to downtown and beyond.",
    },
    {
      question: "What schools serve Bancroft, Minneapolis?",
      answer:
        "Bancroft is served by Minneapolis Public Schools. Bancroft Elementary School (PreK–5) is the neighborhood's anchor school — a community institution with a diverse student body. Roosevelt High School serves the area for grades 9–12. The district's open enrollment system provides access to magnet programs and other schools. Bancroft Elementary has a strong community connection and serves as a gathering point for neighborhood families.",
    },
    {
      question: "Is Bancroft good for first-time homebuyers?",
      answer:
        "Yes — Bancroft is one of the best neighborhoods in Minneapolis for first-time homebuyers on a budget. The housing stock includes many starter homes in the $190,000–$260,000 range — small bungalows and two-story homes that are affordable enough to purchase without a six-figure household income. The neighborhood's walkability, transit access, and proximity to commercial corridors make it practical for daily life. The trade-off is that Bancroft is a working-class neighborhood with working-class challenges — property crime, uneven commercial investment, and aging infrastructure — and buyers should be realistic about what they are getting for the price.",
    },
    {
      question: "How diverse is Bancroft?",
      answer:
        "Bancroft is one of the most diverse neighborhoods in Minneapolis by several measures. The population includes significant Latino, Somali, Black, white, and other communities. The diversity is economic as well as racial — this is a working-class and lower-middle-class neighborhood where incomes vary but affluence is rare. The diversity is most visible along Chicago Avenue, in the schools, and in the parks, where the neighborhood's different communities share space in ways that are casual and unforced.",
    },
    {
      question: "What are the best restaurants near Bancroft?",
      answer:
        "Chicago Avenue through Bancroft offers a diverse and affordable food landscape — Somali restaurants, Mexican taquerias, Vietnamese pho shops, and American diners coexist within a few blocks. Standouts include neighborhood taquerias serving excellent al pastor, East African restaurants with goat and rice plates, and the kind of no-frills spots where the food is better than the storefront suggests. This is not a destination dining corridor — it's a neighborhood one, and the prices and quality reflect a community that eats out regularly and demands value.",
    },
  ],
  nearby: [
    { name: "Powderhorn Park", slug: "powderhorn-park", description: "The lake and the activism, immediately north" },
    { name: "Standish", slug: "standish", description: "Working-class residential blocks to the east" },
    { name: "Lyndale", slug: "lyndale", description: "Similar residential character to the west" },
    { name: "Bryant", slug: "bryant", description: "Diverse blocks to the northwest" },
    { name: "Corcoran", slug: "corcoran", description: "Lake Street and Greenway neighbor to the north" },
    { name: "Diamond Lake", slug: "diamond-lake", description: "Suburban-feeling blocks to the south" },
  ],
  closing: {
    title: "What Makes Bancroft Worth Knowing",
    paragraphs: [
      "Bancroft is not a neighborhood that is trying to sell you anything. There is no brand, no signature attraction, no commercial district with a curated identity. What there is, instead, is a residential community that has been doing the work of being a neighborhood — housing people, educating kids, keeping the blocks walkable and the parks usable — for more than a century, through waves of demographic change and economic pressure that would have broken a less resilient place. The people who live in Bancroft tend to be practical about where they live. They know the strengths and the challenges, and they chose it anyway.",
      "If you are looking for a neighborhood that will make you feel like you have arrived, Bancroft will disappoint you. If you are looking for one that will give you a house you can afford, neighbors who represent the actual city you live in, and a daily life that is manageable and honest, Bancroft is one of the best options in Minneapolis. It is a neighborhood that works, in the most fundamental sense of the word, and that is harder to find than most people realize.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a weekday afternoon, Chicago Avenue through Bancroft is doing
          what it always does — moving people and goods and languages through
          a corridor that nobody would call beautiful but that functions with
          the steady efficiency of a neighborhood that has been taking care
          of itself for a hundred years. A woman in a hijab pushes a stroller
          past a taqueria with hand-painted signs in Spanish. A kid on a bike
          weaves between parked cars outside the halal grocery. Two men in
          paint-spattered work clothes are eating lunch on the tailgate of a
          pickup truck, and the radio is playing something in Oromo. A Metro
          Transit bus grinds to a stop and releases a small crowd into the
          afternoon — people heading home, heading to work, heading wherever
          people in working-class neighborhoods go when the day is half over
          and there are still things to do. Nobody is performing. Nobody is
          branding. The corridor just works, and it works because the people
          who depend on it have kept it working.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/bancroft/hero.webp"
        alt="Chicago Avenue commercial corridor through Bancroft neighborhood"
        caption="Chicago Avenue through Bancroft — the neighborhood's commercial spine and transit lifeline"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Bancroft, Minneapolis?">
        <Prose>
          <p>
            Bancroft is a residential neighborhood in South Minneapolis,
            roughly bounded by 38th Street to the north, Cedar Avenue to the
            east, 46th Street to the south, and Columbus Avenue to the west.
            It sits south of{" "}
            <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
              Powderhorn Park
            </Link>
            {" "}and shares much of that neighborhood&apos;s diversity without
            its political intensity. The neighborhood is home to approximately
            6,000 residents and is organized around Chicago Avenue — a
            north-south commercial corridor that provides groceries, transit,
            restaurants, and the everyday commercial infrastructure that makes
            a neighborhood functional.
          </p>
          <p>
            Bancroft is not a neighborhood that generates headlines or appears
            on relocation guides. It is a working-class residential community
            that has been housing families — first Scandinavian and German
            immigrants, then African American families, and now a mix of
            Latino, Somali, and other communities alongside long-term white
            residents — for more than a century. The housing is affordable.
            The blocks are quiet. The commercial corridor is utilitarian rather
            than charming. And the overall effect is a neighborhood that does
            the basic things well — shelter, community, access — without ever
            being noticed for doing them.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Bancroft Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/bancroft/neighborhood-sign.webp"
          alt="Bancroft neighborhood sign in Minneapolis"
          caption="The Bancroft neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Bancroft History & Origins">
        <Prose>
          <p>
            The land now called Bancroft is Dakota homeland — part of the
            territory the Dakota people inhabited for centuries before
            European colonization and the treaties and forced removals that
            followed. The neighborhood takes its name from Bancroft Elementary
            School, which in turn was named for George Bancroft, a
            nineteenth-century American historian and statesman. It is the
            kind of naming convention that tells you nothing about the place
            and everything about the era in which it was named — a time when
            newly platted neighborhoods were given the names of men who had
            never visited them.
          </p>
          <p>
            Bancroft was developed for residential use in the early twentieth
            century, as Minneapolis expanded south from its downtown core.
            The housing stock dates primarily from the 1900s through the
            1930s — small wood-frame houses built for the working-class and
            middle-class families who powered the city&apos;s economy. The
            lots were narrow, the houses were modest, and the construction
            was practical rather than aspirational. Scandinavian and German
            immigrants were the primary residents through the first half of
            the twentieth century, and the neighborhood had the stable,
            churchgoing character that defined much of South Minneapolis in
            that era.
          </p>
          <p>
            The demographic transition began in the 1960s and 1970s, as
            African American families moved into the neighborhood, followed
            by Latino immigrants in the 1980s and 1990s, and Somali and
            other East African communities in the 2000s. Each wave was drawn
            by the same thing: affordable housing in a location with good
            transit and commercial access. The result, by the 2020s, is one
            of the most diverse neighborhoods in Minneapolis — a community
            where the demographic layers of a century of immigration are
            visible on every block.
          </p>
          <p>
            Chicago Avenue has been the neighborhood&apos;s commercial spine
            throughout this history — a working corridor that has adapted to
            serve whichever community lives nearby. The signs have changed
            languages. The products on the shelves have changed. The basic
            function — providing food, goods, and services to a working-class
            residential community — has remained constant.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Bancroft">
        <Prose>
          <p>
            Bancroft is a neighborhood that you understand through its
            rhythms. The morning bus stop on Chicago Avenue, where people
            wait for the Route 5 in the cold with the resigned patience of
            commuters who know the schedule by heart. The after-school rush
            at Bancroft Elementary, where the pickup line is a demographic
            survey of the neighborhood — Somali mothers in abayas, Latino
            fathers in work boots, white grandparents in sensible coats. The
            evening porch hour, when the weather allows, and the blocks fill
            with the sounds of conversation in three or four languages and
            the smell of cooking from three or four cuisines. This is not
            diversity as a concept. This is diversity as a daily experience,
            on streets where people with very different backgrounds share
            very similar concerns — rent, kids, work, groceries, weather.
          </p>
          <p>
            The economic character is working-class. This is a neighborhood
            of people who work with their hands, who commute by bus, who shop
            at the discount grocery rather than the co-op. The median income
            is below the city average. Many residents rent. The homeowners
            tend to be long-term, having bought when prices were truly cheap
            and stayed because the mortgage is manageable and the community
            is familiar. There is a resilience in Bancroft that comes from
            economic modesty — people here are not affluent enough to leave
            when things get difficult, so they stay and deal with problems
            directly, block by block.
          </p>
          <p>
            The rental housing stock is significant. Duplexes, small apartment
            buildings, and rented single-family homes make up a substantial
            portion of the neighborhood&apos;s housing. This gives Bancroft a
            more transient quality than neighborhoods dominated by homeowners
            — some blocks turn over faster, and the social fabric is thinner
            in the places where tenants cycle through without putting down
            roots. But in other parts of the neighborhood, long-term renters
            are as much a part of the community as homeowners, and the
            distinction between owning and renting matters less than whether
            you show up for the block party and shovel the sidewalk.
          </p>
        </Prose>

        <Quote
          text="People always ask, 'Is it safe?' I tell them the truth: I know every person on my block. We watch each other's houses. We share food. That's what safe means to me."
          cite="Bancroft resident, 18 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Bancroft Food, Drink & Local Spots">
        <Prose>
          <p>
            Bancroft&apos;s food landscape is shaped by its demographics —
            diverse, affordable, and weighted toward the cuisines of the
            communities that live here. Chicago Avenue is the main corridor,
            and the restaurants and shops along it serve Somali, Latino,
            and other communities with food that is priced for people who eat
            out regularly on working-class budgets. This is not a dining
            destination. There are no trendy restaurants, no cocktail bars,
            no places that have been reviewed by the Star Tribune. What there
            is, instead, is a collection of spots where the food is honest,
            the portions are generous, and the prices reflect a neighborhood
            that values sustenance over presentation.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Habanero Tacos", tag: "Mexican", price: "$", description: "Chicago Avenue. The kind of taqueria that you trust on sight — small, busy, and decorated with the no-frills confidence of a place that knows its food is good enough to not need atmosphere. Tacos al pastor, carnitas, and barbacoa at prices that make this a regular weeknight option for neighborhood families. The salsa is made fresh. The horchata is cold and sweet." }} />
          <PlaceCardComponent place={{ name: "Safari Restaurant", tag: "Somali", price: "$", description: "Chicago Avenue. Somali food served in the communal, family-style tradition — goat, rice, banana, and the spiced tea that is the social lubricant of East African neighborhoods across Minneapolis. The portions are enormous. The prices are modest. The experience is welcoming if you know what to order, and the staff will help if you don't." }} />
          <PlaceCardComponent place={{ name: "Pho Nguyen", tag: "Vietnamese", price: "$", description: "On Chicago Avenue. A small Vietnamese restaurant serving pho, banh mi, and vermicelli bowls that are better than the storefront suggests. The pho broth has depth. The banh mi is properly assembled. It's the kind of neighborhood spot that regulars protect by not talking about too much." }} />
          <PlaceCardComponent place={{ name: "La Alborada", tag: "Mexican Bakery", price: "$", description: "Chicago Avenue. A Mexican panadería with the glass cases of conchas, cuernos, and polvorones that anchor Latino bakeries across the Americas. The bread is fresh, the coffee is strong, and the experience of choosing your own pastries with a pair of tongs and a metal tray is one of the small pleasures of living in a neighborhood with real cultural infrastructure." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The grocery landscape in Bancroft reflects the community&apos;s
              diversity. Halal markets serve the Somali community with meat,
              spices, and imported goods. Mexican groceries stock chiles,
              masa, and the specific brands that families from Oaxaca or
              Jalisco grew up with. The broader corridor includes convenience
              stores, dollar stores, and the kind of small-format retail that
              fills gaps left by larger chains. For a full-service grocery
              run, most residents drive or bus to the Cub Foods on Lake Street
              or the one near Diamond Lake Road.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Bancroft">
        <Prose>
          <p>
            Bancroft does not have a signature natural feature — no lake, no
            creek, no significant trail corridor running through it. What it
            has is a collection of neighborhood parks that serve the community
            at the scale that matters most — blocks where kids can play,
            fields where pickup soccer games happen, and enough green space
            to remind you that you live in a city that takes its parks
            seriously, even in neighborhoods that don&apos;t make the
            tourism brochures.
          </p>
        </Prose>

        <ArticleSubsection title="Phelps Park">
          <Prose>
            <p>
              Phelps Park is Bancroft&apos;s largest green space — a
              multi-block park with athletic fields, a playground, a
              recreation center, and the open space that a dense residential
              neighborhood needs as a pressure valve. The rec center offers
              youth programming, open gym hours, and community meeting space.
              The athletic fields host youth soccer and softball, and on
              summer evenings the park fills with families, kids on bikes,
              and the kind of unstructured outdoor time that builds the
              community connections that organized programming cannot
              replicate.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Connections">
          <Prose>
            <p>
              Powderhorn Lake and Park are a short walk or bike ride north —
              one of South Minneapolis&apos;s most significant green spaces.{" "}
              <Link href="/neighborhoods/standish" className="text-[#2a9d8f] hover:underline">
                Standish
              </Link>
              {" "}and its parks are to the east. The Midtown Greenway is
              accessible to the north, providing a car-free bicycle corridor
              across the city. Lake Nokomis is approximately two miles to the
              southeast — reachable by bike in under 15 minutes via
              neighborhood streets. The broader Minneapolis park system is
              one of the city&apos;s genuine assets, and Bancroft benefits
              from its proximity to multiple significant green spaces even
              though it does not contain a marquee park of its own.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Bancroft Schools">
        <Prose>
          <p>
            Bancroft Elementary School (PreK–5) is the neighborhood&apos;s
            anchor school and one of its most important community
            institutions. The school serves a deeply diverse student body —
            Latino, Somali, Black, and white students, many from
            lower-income families — and the staff reflects a commitment to
            culturally responsive education. Bancroft Elementary has the feel
            of a school where the building functions as a community center,
            hosting events, parent meetings, and programming that extends
            beyond the academic day.
          </p>
          <p>
            Roosevelt High School serves Bancroft for grades 9–12. Roosevelt
            is one of the most diverse high schools in the Minneapolis
            district, with a student body that speaks dozens of home
            languages. The school has undergone facility improvements and
            offers academic and extracurricular programs, though achievement
            gaps persist — a reflection of the broader systemic challenges
            facing diverse, lower-income schools across the district and the
            country.
          </p>
          <p>
            The open enrollment system in Minneapolis Public Schools means
            Bancroft families have access to magnet programs, language
            immersion schools, and other options across the district. Many
            families — particularly those with the time and resources to
            navigate the enrollment process — take advantage of these
            options. For families who stay with the neighborhood schools,
            the community connection and the diversity of the student body
            offer something valuable that cannot be measured by test scores
            alone.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Bancroft Real Estate & Housing">
        <Prose>
          <p>
            Bancroft is one of the most affordable neighborhoods in
            Minneapolis for homeownership — a place where single-family
            homes can still be purchased for under $250,000 in a city where
            that threshold has become increasingly rare. The median home sale
            price has ranged between roughly $210,000 and $325,000 in 2025,
            making Bancroft accessible to first-time buyers, single-income
            households, and families who have been priced out of
            neighborhoods with higher profiles and higher expectations.
          </p>
          <p>
            The housing stock is predominantly small single-family homes and
            duplexes built between 1900 and 1930. The houses are modest —
            typically two or three bedrooms, under 1,400 square feet above
            grade, on narrow lots with detached garages and alleys. Many
            have original woodwork, built-in cabinets, and the solid
            construction that characterized working-class Minneapolis
            building in that era. Some have been carefully maintained; others
            show the deferred maintenance that accompanies decades of
            working-class ownership. The variation in condition is one of
            Bancroft&apos;s defining features — well-kept homes sit next to
            properties that need significant work, and the streetscape tells
            the neighborhood&apos;s economic story honestly.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($175,000–$225,000), you&apos;re looking at
              smaller homes that need real work — outdated kitchens, original
              windows, potentially deferred structural maintenance. These are
              the houses that first-time buyers with limited budgets and some
              willingness to do work have been purchasing for years. The
              mid-range ($230,000–$300,000) gets you a well-maintained
              three-bedroom home with a functional kitchen, updated
              mechanicals, and a yard. Above $325,000, you&apos;re in
              renovated territory — updated kitchens and baths, expanded
              living space, or corner lots — but properties at this price
              point are less common in Bancroft.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="Our house cost less than a lot of people's student loans. It's not perfect, but it's ours, and the neighborhood is real. That was the trade-off, and I'd make it again."
          cite="Bancroft homeowner, first-time buyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Bancroft">
        <Prose>
          <p>
            Bancroft benefits from one of the most important transit corridors
            in Minneapolis — Chicago Avenue, served by Metro Transit Route 5,
            one of the busiest and most frequent bus lines in the system.
            Route 5 runs north-south from downtown Minneapolis through
            Bancroft and on to the southern suburbs, with service frequent
            enough to be practical for daily commuting. For a working-class
            neighborhood where many residents depend on transit, this
            connection is essential.
          </p>
          <p>
            The Walk Score of approximately 74 reflects a neighborhood where
            Chicago Avenue provides most daily needs within walking distance
            — groceries, restaurants, laundry, and pharmacy — while the
            interior residential blocks require a longer walk to reach
            commercial services. The Bike Score of 86 reflects flat terrain,
            good infrastructure, and connections to the Midtown Greenway and
            the broader Minneapolis bike network.
          </p>
          <p>
            By car, downtown Minneapolis is 12–18 minutes depending on
            traffic and route. MSP Airport is roughly 15 minutes via
            Crosstown Highway 62 or Chicago Avenue south to I-494. The Blue
            Line light rail is approximately one mile east on Hiawatha
            Avenue, with the 38th Street station providing access to downtown,
            the airport, and the Mall of America. Street parking is abundant
            on residential blocks.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Bancroft is not a neighborhood in crisis, but it is a
            neighborhood under pressure — from the same forces that are
            reshaping affordable urban neighborhoods across the country.
            The tensions here are not dramatic. They are the slow, grinding
            kind that shape a community over decades rather than destroying
            it overnight.
          </p>
        </Prose>

        <ArticleSubsection title="Affordability and Investment">
          <Prose>
            <p>
              Bancroft&apos;s affordability is its greatest asset and its
              greatest vulnerability. The low home prices that attract
              first-time buyers also attract investors who purchase
              properties, do minimal renovations, and rent them at rates
              that are affordable by city standards but high relative to
              the neighborhood&apos;s incomes. The growing gap between
              homeowners — who have a long-term stake in the neighborhood
              — and absentee landlords — who do not — is one of the
              quieter but more consequential dynamics in Bancroft. When
              investment comes without community commitment, it
              extracts value rather than building it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Corridor Health">
          <Prose>
            <p>
              Chicago Avenue through Bancroft is functional but not thriving.
              The corridor has vacant storefronts, high-turnover businesses,
              and a mix of commercial uses that reflects economic constraint
              rather than commercial confidence. The businesses that persist
              — the taquerias, the halal groceries, the bakeries — are
              community anchors, but they operate on thin margins and are
              vulnerable to rent increases and market shifts. The corridor
              needs investment, but the kind that serves the existing
              community rather than displacing it — a balance that cities
              across the country struggle to achieve.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Property Crime and Perception">
          <Prose>
            <p>
              Property crime is a real and persistent issue in Bancroft. Car
              break-ins, catalytic converter thefts, and occasional garage
              burglaries are common enough to be part of the neighborhood
              conversation. The perception of crime — amplified by Nextdoor
              threads and neighborhood social media — sometimes runs ahead
              of the data, creating an anxiety that can feel disproportionate
              to the actual risk. But the anxiety is not baseless, and
              it shapes how people feel about the neighborhood and whether
              they choose to stay. Residents who have been here long enough
              to take the long view describe a neighborhood that has been
              through worse and come out the other side. Newer residents are
              less certain.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Bancroft FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
