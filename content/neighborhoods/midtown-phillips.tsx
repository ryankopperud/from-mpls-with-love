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
    title: "Midtown Phillips, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Midtown Phillips, Minneapolis — Midtown Global Market, Lake Street culture, affordability, diversity, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Midtown Phillips",
  deck: "The heart of Phillips — where the Midtown Global Market puts a dozen cuisines under one roof, Lake Street hums with immigrant entrepreneurship, and a neighborhood that has always been affordable fights to stay that way.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Midtown Phillips?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Midtown Phillips" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Midtown Phillips, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$180K–$260K", label: "Median home sale price (2025 data)" },
      { value: "$900–$1,250", label: "Typical 1BR apartment rent (2025)" },
      { value: "80", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
      { value: "60", label: "Transit Score" },
      { value: "60%+", label: "Renter-occupied housing" },
      { value: "70%+", label: "Residents of color (ACS estimates)" },
    ],
  },
  faq: [
    {
      question: "Is Midtown Phillips a good neighborhood in Minneapolis?",
      answer:
        "Midtown Phillips is one of the most diverse and affordable neighborhoods in Minneapolis. It offers proximity to the Midtown Global Market, strong transit connections along Lake Street, and a deeply multicultural community. It also has higher-than-average crime rates and infrastructure challenges. If you value cultural richness and affordability over polish, Midtown Phillips has a lot to offer.",
    },
    {
      question: "Is Midtown Phillips safe?",
      answer:
        "Crime rates in Midtown Phillips are above the Minneapolis average, particularly for property crime and some categories of violent crime. The Lake Street corridor and certain intersections see more activity than residential side streets. Many long-term residents feel comfortable here, but situational awareness is important. Community organizations are active in safety advocacy.",
    },
    {
      question: "What is the Midtown Global Market?",
      answer:
        "The Midtown Global Market is a public market located at Lake Street and 10th Avenue South in the former Sears building. It houses dozens of food vendors, restaurants, and small businesses representing cuisines and cultures from around the world — including Somali, Mexican, Vietnamese, Hmong, and more. It opened in 2006 and has become one of the most vibrant food destinations in the Twin Cities.",
    },
    {
      question: "How much does it cost to live in Midtown Phillips?",
      answer:
        "Midtown Phillips is one of the most affordable neighborhoods in central Minneapolis. One-bedroom apartments typically rent for $900 to $1,250 per month. Homes sell in the $150,000 to $300,000 range depending on size and condition. Duplexes and small multi-family buildings are common and often accessible for first-time buyers or investors.",
    },
    {
      question: "What is Phillips in Minneapolis?",
      answer:
        "Phillips is a large, diverse area in south Minneapolis that is divided into four sub-neighborhoods: Midtown Phillips, East Phillips, Phillips West, and Ventura Village. Together, they form one of the most racially and ethnically diverse communities in Minnesota. Midtown Phillips sits at the geographic center of the larger Phillips area.",
    },
    {
      question: "What schools serve Midtown Phillips?",
      answer:
        "Andersen United Community School is the primary elementary school serving the neighborhood. South High School is the designated comprehensive high school. Multiple charter school options are also available nearby, and Minneapolis Public Schools' open enrollment system allows families to access programs across the district.",
    },
    {
      question: "Is Midtown Phillips walkable?",
      answer:
        "Reasonably so, especially along the Lake Street corridor where grocery stores, restaurants, and services cluster. The Walk Score of 80 reflects good access to daily needs without a car. The Midtown Greenway provides excellent east-west bike connectivity, and multiple bus routes serve the neighborhood.",
    },
    {
      question: "Where exactly is Midtown Phillips in Minneapolis?",
      answer:
        "Midtown Phillips is in south-central Minneapolis, bounded roughly by East 24th Street to the north, Cedar Avenue to the east, East Lake Street to the south, and I-35W to the west. It sits within the larger Phillips community and is directly east of the Midtown Global Market.",
    },
    {
      question: "Is the Midtown Global Market worth visiting?",
      answer:
        "Absolutely. The Midtown Global Market is one of the most genuinely multicultural food experiences in the Twin Cities. You can eat Somali sambusas, Vietnamese pho, Mexican tamales, and Hmong egg rolls in a single visit, all from independent vendors. It's not a tourist-oriented food hall — it's a community market that happens to be excellent.",
    },
    {
      question: "Is Midtown Phillips gentrifying?",
      answer:
        "The neighborhood has seen some new investment and development, particularly near the Midtown Greenway, but gentrification pressures are less intense here than in neighborhoods like Whittier or Uptown. Affordability remains a core characteristic, though rising property values citywide are beginning to affect this area as well.",
    },
  ],
  nearby: [
    { name: "East Phillips", slug: "east-phillips", description: "Environmental justice organizing and deep community roots" },
    { name: "Phillips West", slug: "phillips-west", description: "Franklin Avenue corridor and Native American community" },
    { name: "Ventura Village", slug: "ventura-village", description: "Northern Phillips — diverse and rapidly evolving" },
    { name: "Corcoran", slug: "corcoran", description: "South of Lake Street, residential and community-focused" },
    { name: "Powderhorn Park", slug: "powderhorn-park", description: "The park, the lake, and one of south Minneapolis's most engaged communities" },
  ],
  closing: {
    title: "What Makes Midtown Phillips Irreplaceable",
    paragraphs: [
      "Midtown Phillips is not a neighborhood that markets itself. It doesn't have a catchy district name or an Instagram-friendly aesthetic. What it has is the real thing — a community where people from a dozen countries live on the same block, where the Midtown Global Market serves food from cultures that most of the metro has never encountered, and where a family can still afford to rent a house within a mile of downtown Minneapolis. That combination is rarer than it should be and more fragile than it looks.",
      "The neighborhood has challenges that are impossible to ignore — crime, infrastructure gaps, the slow-motion displacement that comes when any affordable urban neighborhood starts attracting attention. But the people who live here aren't waiting for someone else to fix things. They're organizing, advocating, and showing up at community meetings in three languages. Midtown Phillips is a neighborhood that earns its resilience every day.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Walk into the Midtown Global Market on a Saturday afternoon and the
          world contracts to a single building. At one stall, a Somali woman
          is ladling out bowls of suqaar and rice. Ten feet away, a Mexican
          vendor is pressing fresh tortillas for tacos al pastor. Around the
          corner, Vietnamese spring rolls share counter space with Hmong
          sausage, and somewhere near the back, someone is frying up walleye
          bites because this is still Minnesota. The market sits in a
          converted Sears building on Lake Street, and it has been doing what
          Midtown Phillips does naturally — putting the world on a single
          block — since 2006. Step outside and the neighborhood picks up
          where the market leaves off.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/midtown-phillips/hero.webp"
        alt="Lake Street in the Midtown Phillips neighborhood of Minneapolis with diverse storefronts"
        caption="Lake Street through Midtown Phillips — one of the most diverse commercial corridors in the Twin Cities"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Midtown Phillips, Minneapolis?">
        <Prose>
          <p>
            Midtown Phillips is a densely diverse neighborhood in
            south-central Minneapolis, occupying the geographic heart of the
            larger Phillips community. Bounded roughly by East 24th Street
            to the north, Cedar Avenue to the east, Lake Street to the
            south, and I-35W to the west, it is home to approximately 6,500
            residents representing one of the most varied demographic
            mixes in the state. Significant Latino, Somali, Native American,
            Southeast Asian, and African American populations share these
            blocks with long-term white residents, creating a community
            that is genuinely multicultural in ways that most neighborhoods
            only aspire to.
          </p>
          <p>
            The neighborhood&apos;s defining landmark is the Midtown Global
            Market, housed in the historic Sears, Roebuck building on Lake
            Street — a public market that functions as both a food destination
            and a community gathering space for the cultures that make this
            area what it is. Beyond the market, Midtown Phillips is
            characterized by affordable housing, active community
            organizations, and the particular energy that comes from a place
            where people are building lives from scratch and have been for
            generations.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Midtown Phillips Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/midtown-phillips/neighborhood-sign.webp"
          alt="Midtown Phillips neighborhood sign in Minneapolis"
          caption="The Midtown Phillips neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Midtown Phillips History & Origins">
        <Prose>
          <p>
            The Phillips community — of which Midtown Phillips is the
            central section — is named for Wendell Phillips, the Boston
            abolitionist and advocate for Native American rights. The naming
            feels historically appropriate for an area that would become one
            of the most racially diverse in the upper Midwest, though the
            irony of honoring an abolitionist in a neighborhood built on
            dispossessed Dakota land is not lost on everyone.
          </p>
          <p>
            Before European settlement, this land was part of the homeland
            of the Dakota people. The area&apos;s development in the late
            19th and early 20th centuries followed the familiar Minneapolis
            pattern: modest homes for working-class families employed in the
            city&apos;s mills and factories. The neighborhood was
            predominantly Scandinavian and Northern European through the
            early decades, with tight-knit immigrant communities building
            churches, schools, and social networks.
          </p>
          <p>
            The mid-20th century brought suburban flight and disinvestment.
            The construction of I-35W in the 1960s tore through the western
            edge of Phillips, destroying homes and fragmenting the community.
            As property values fell, the neighborhood became an entry point
            for new immigrant communities — first Native American families
            relocating from reservations under federal relocation policies,
            then Latino families, then Southeast Asian refugees, and later
            Somali and East African immigrants. Each wave layered new
            cultures onto the neighborhood without fully displacing the ones
            already there.
          </p>
          <p>
            The conversion of the massive Sears building on Lake Street into
            the Midtown Global Market in 2006 — alongside the Midtown
            Exchange office complex and affordable housing — marked a turning
            point. It gave the neighborhood a destination that reflected its
            reality: not a monoculture pretending to be diverse, but a
            genuinely global community building something together.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Midtown Phillips">
        <Prose>
          <p>
            Midtown Phillips is not a neighborhood you move to for curb
            appeal. The housing stock is older and often modest — small
            single-family homes, duplexes, and apartment buildings that
            show their age. Some blocks are well-maintained; others reflect
            years of deferred investment. The beauty here, to the extent
            that word applies, is human rather than architectural — it lives
            in the relationships between neighbors who share food across
            cultural lines, in the community gardens that appear in empty
            lots, in the way three languages might be spoken at a single
            bus stop.
          </p>
          <p>
            The cultural diversity is not an abstraction. Walk down a
            residential street and you might pass a house with a Somali
            family, a duplex with Latino tenants, and a bungalow owned by
            a Native American elder who has lived there for forty years.
            The corner stores stock products from three continents. The
            community meetings require translators. This is diversity as
            lived experience, not as marketing copy.
          </p>
          <p>
            Lake Street, the neighborhood&apos;s southern boundary, is the
            commercial spine — a corridor that is messy, vital, and
            endlessly interesting. Immigrant-owned businesses dominate:
            taquerias, halal groceries, African clothing shops, check-cashing
            stores, and cell phone repair places. It is not pretty in the
            way that magazine-feature commercial districts are pretty. It is
            alive in the way that places where people are working hard tend
            to be.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/east-phillips" className="text-[#2a9d8f] hover:underline">
              East Phillips
            </Link>{" "}
            to the east and{" "}
            <Link href="/neighborhoods/ventura-village" className="text-[#2a9d8f] hover:underline">
              Ventura Village
            </Link>{" "}
            to the north share Midtown Phillips&apos;s diversity and
            affordability, while{" "}
            <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
              Powderhorn Park
            </Link>{" "}
            to the southeast adds a more activist, arts-inflected energy
            to the surrounding area.
          </p>
        </Prose>
        <Quote
          text="People ask me why I stay in Phillips. I stay because my neighbors actually know my name, because my kids play with kids who speak four different languages, and because the food is better here than anywhere else in the city."
          cite="Midtown Phillips resident, community forum"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Midtown Phillips Food, Drink & Local Spots">
        <Prose>
          <p>
            Midtown Phillips punches far above its weight on food, thanks
            largely to the Midtown Global Market and the immigrant-driven
            restaurant culture along Lake Street. This is not a
            white-tablecloth dining neighborhood — it&apos;s a place where
            the best meals come from stalls, counters, and small restaurants
            where the cook is also the owner and the menu reflects
            someone&apos;s home country.
          </p>
        </Prose>

        <ArticleSubsection title="Midtown Global Market Highlights">
          <PlaceCardComponent place={{ name: "Manny's Tortas", tag: "Mexican", price: "$", description: "Midtown Global Market. Massive, overstuffed tortas and burritos at prices that feel like they haven't changed in a decade. The al pastor is excellent. This is the kind of food that makes you wonder why you ever paid more for less." }} />
          <PlaceCardComponent place={{ name: "Safari Express", tag: "Somali", price: "$", description: "Midtown Global Market. Sambusas, rice with goat, and Somali tea in a no-frills setting. The food is hearty, warmly spiced, and portioned for people who actually need to eat, not just photograph their plates." }} />
          <PlaceCardComponent place={{ name: "Tam Tam", tag: "Vietnamese", price: "$", description: "Midtown Global Market. Pho, banh mi, and spring rolls from a vendor that has been a market anchor since opening day. The broth is the real thing — simmered for hours, not shortcuts." }} />
          <PlaceCardComponent place={{ name: "Andy's Garage", tag: "Burgers / American", price: "$", description: "Midtown Global Market. Smash burgers and fries in a market setting. Sometimes you want a burger, and Andy's makes a good one." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Lake Street Corridor">
          <Prose>
            <p>
              Beyond the market, Lake Street through Midtown Phillips is
              lined with small restaurants and groceries that reflect the
              neighborhood&apos;s demographics. Taquerias serve al pastor
              and birria. East African restaurants offer injera platters
              and goat stew. The selection changes as businesses open and
              close, but the corridor consistently delivers some of the
              most affordable and authentic food in Minneapolis. Bring
              cash — not every spot takes cards.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Grocery & Provisions">
          <Prose>
            <p>
              Daily grocery needs can be met at several neighborhood
              markets, including Latino and East African groceries on Lake
              Street that stock items you won&apos;t find at a conventional
              supermarket. For larger shopping trips, the Cub Foods on Lake
              Street (just east in{" "}
              <Link href="/neighborhoods/east-phillips" className="text-[#2a9d8f] hover:underline">
                East Phillips
              </Link>
              ) is the closest full-service supermarket.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Midtown Phillips">
        <Prose>
          <p>
            Midtown Phillips is not a parks-rich neighborhood by Minneapolis
            standards, but the green spaces it has are well-used and
            meaningful to the community. The neighborhood&apos;s cultural
            life is less about institutions and more about the everyday
            expression of diversity — the community gardens, the cultural
            celebrations, the public art that reflects the people who live
            here.
          </p>
        </Prose>

        <ArticleSubsection title="Stewart Park">
          <Prose>
            <p>
              Stewart Park, at the center of the neighborhood on East 26th
              Street, is the primary green space — a community park with a
              playground, basketball courts, a wading pool, and a recreation
              center that hosts youth programming and community events.
              It&apos;s a neighborhood park in the best sense: a place where
              kids from every background play together after school and
              families gather on summer evenings.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Community Gardens">
          <Prose>
            <p>
              Community gardens throughout the Phillips area are some of the
              most culturally diverse growing spaces in Minneapolis. Plots
              are tended by gardeners growing everything from tomatoes and
              squash to Somali crops like kale and maize to Southeast Asian
              herbs. The gardens function as both food production and social
              infrastructure — places where neighbors who might not share a
              language can share knowledge about growing things.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway — the 5.5-mile paved bike and pedestrian
              trail running along a below-grade former rail corridor — passes
              just north of Lake Street and is one of the neighborhood&apos;s
              most valuable recreational assets. It connects Midtown Phillips
              to the Chain of Lakes to the west and the Mississippi River to
              the east, providing a car-free commute corridor and a
              recreational trail that is heavily used year-round.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Midtown Phillips Schools">
        <Prose>
          <p>
            Schools in Midtown Phillips serve one of the most linguistically
            diverse student populations in Minneapolis. The challenges are
            real — high poverty rates, students arriving with limited
            English, families juggling multiple jobs — but so is the
            commitment of educators and community organizations working to
            support children in this neighborhood.
          </p>
          <p>
            Andersen United Community School is the primary public elementary
            serving Midtown Phillips, offering pre-K through 8th grade
            education with a diverse student body and strong community
            partnerships. South High School, located nearby on Lake Street,
            is the designated comprehensive high school. South is one of the
            most diverse high schools in Minnesota and offers International
            Baccalaureate and career and technical education programs.
          </p>
          <p>
            Several charter schools operate in the broader Phillips area,
            including options with culturally specific programming for
            Native American, Somali, and Latino students. Minneapolis Public
            Schools&apos; open enrollment system also allows families to
            access magnet and specialty programs across the city.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Midtown Phillips Real Estate & Housing">
        <Prose>
          <p>
            Midtown Phillips remains one of the most affordable
            neighborhoods in central Minneapolis, though &ldquo;affordable&rdquo;
            is doing increasingly heavy lifting as prices rise citywide. The
            housing stock is a mix of older single-family homes, duplexes,
            triplexes, and small apartment buildings — many dating to the
            early 20th century and showing varying degrees of maintenance
            and investment.
          </p>
        </Prose>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              One-bedroom apartments typically rent for $900 to $1,250 per
              month, making Midtown Phillips significantly cheaper than
              neighborhoods like Whittier or Uptown for similar proximity to
              downtown. Two-bedroom units run $1,100 to $1,600. Much of the
              rental housing is in older buildings without modern amenities —
              you trade granite countertops and in-unit laundry for lower
              rent and more space. Affordable housing developments,
              including units in the Midtown Exchange complex, provide
              income-restricted options for qualifying households.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Buying in Midtown Phillips">
          <Prose>
            <p>
              For buyers, Midtown Phillips offers some of the lowest entry
              points in central Minneapolis. Single-family homes sell in the
              $150,000 to $300,000 range — condition varies enormously, and
              buyers should budget for potential renovations on older
              properties. Duplexes and small multi-family buildings range
              from $200,000 to $400,000, often attracting investors as well
              as owner-occupants. The neighborhood is accessible for
              first-time buyers in ways that much of Minneapolis is not.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We bought our house here because it was what we could afford, and we stayed because the community is real. It's not perfect, but it's ours." cite="Midtown Phillips homeowner, neighborhood survey" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Midtown Phillips">
        <Prose>
          <p>
            Midtown Phillips benefits from its central location and proximity
            to major transit corridors. Lake Street is one of the most
            heavily bused routes in the Metro Transit system, with frequent
            service connecting the neighborhood to Uptown, the Blue Line
            light rail, and the West Bank. Cedar Avenue and Chicago Avenue
            provide north-south bus connections to downtown and south
            Minneapolis neighborhoods.
          </p>
          <p>
            The Midtown Greenway is a major asset for cyclists, providing a
            car-free east-west route that connects to the Chain of Lakes and
            the Mississippi River. The Bike Score of 85 reflects strong
            cycling infrastructure, and many residents commute by bike
            year-round.
          </p>
          <p>
            Driving is straightforward — I-35W borders the neighborhood to
            the west, providing quick access to downtown and the southern
            suburbs. Street parking is generally easier here than in denser
            neighborhoods like Whittier, though Lake Street can be
            congested during peak hours.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Midtown Phillips is a neighborhood where urban challenges are
            visible and community responses are vocal. Nothing here is
            hidden behind comfortable facades.
          </p>
        </Prose>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime rates in Midtown Phillips are above the city average.
              Property crime is common — car break-ins, theft, vandalism.
              Violent crime, while concentrated in specific areas and
              circumstances, is a persistent reality that shapes daily life
              for residents. The Lake Street corridor sees more criminal
              activity than the residential interior. Community organizations
              including the Midtown Phillips Neighborhood Association work on
              safety initiatives, but the challenges are systemic and not
              easily solved at the neighborhood level.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Displacement Pressures">
          <Prose>
            <p>
              As Minneapolis housing costs rise overall, Midtown Phillips —
              one of the last genuinely affordable inner-city neighborhoods
              — faces increasing pressure. Property values are climbing,
              investors are buying rental properties, and the threat of
              displacement hangs over communities that have built lives here
              precisely because it was affordable. The tension between
              welcoming investment and protecting existing residents is
              constant and unresolved.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Infrastructure and Investment">
          <Prose>
            <p>
              Parts of Midtown Phillips show the effects of decades of
              underinvestment — aging housing, uneven sidewalks, gaps in
              street lighting. The neighborhood has been vocal about
              demanding its fair share of city resources, and improvements
              are happening, but the pace is slower than in wealthier
              neighborhoods with more political leverage. The Lake Street
              corridor continues to rebuild from damage sustained during
              the 2020 unrest, with some businesses recovered and others
              still working toward it.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Midtown Phillips FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
