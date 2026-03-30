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
    title: "Ventura Village, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Ventura Village, Minneapolis — part of the Phillips community, Franklin Avenue, Little Earth of United Tribes, diverse and affordable, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Ventura Village",
  deck: "One of the most diverse square miles in the Midwest — where Franklin Avenue carries the weight of Native American history and Somali commerce and Latino markets all at once, where Little Earth of United Tribes is the largest urban Native housing community in the country, and where the word 'neighborhood' means something more complicated and more real than the real estate listings suggest.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Ventura Village?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Ventura Village" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Ventura Village, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,200", label: "Residents (US Census / City of Minneapolis)" },
      { value: "70%+", label: "Residents who are people of color" },
      { value: "$165K–$280K", label: "Median home sale price range (2025 data)" },
      { value: "1970", label: "Year Little Earth of United Tribes was established" },
      { value: "212 units", label: "Little Earth housing community" },
      { value: "40+", label: "Languages spoken in the Phillips community" },
      { value: "75", label: "Walk Score" },
      { value: "68", label: "Transit Score" },
    ],
  },
  faq: [
    {
      question: "Is Ventura Village a good neighborhood in Minneapolis?",
      answer:
        "Ventura Village is a good neighborhood for people who value diversity, affordability, and community in ways that go beyond marketing language. It is one of the most racially, ethnically, and economically diverse neighborhoods in the Midwest, with strong Native American, Somali, Latino, and Southeast Asian communities. Housing is among the most affordable in the central city. The neighborhood has genuine character and genuine challenges — higher crime rates, visible poverty, under-investment in infrastructure — that make it unsuitable for people who expect a polished urban experience. But for people who want to live in a place that reflects the actual complexity of an American city, Ventura Village delivers something most Minneapolis neighborhoods cannot.",
    },
    {
      question: "Is Ventura Village, Minneapolis safe?",
      answer:
        "Ventura Village has crime rates above the city average, including property crime and some violent crime. The Franklin Avenue corridor and certain residential blocks have been focus areas for police and community safety efforts. The neighborhood is not uniformly dangerous — many blocks are quiet and residential, and most residents go about their daily lives without incident. But safety is a real concern, and honest conversations about the neighborhood acknowledge it. Community organizations, cultural institutions, and block groups work actively on safety. Basic urban awareness is essential — know your block, know your neighbors, lock everything.",
    },
    {
      question: "What is Little Earth of United Tribes?",
      answer:
        "Little Earth of United Tribes is a 212-unit housing community in Ventura Village that is the largest urban Native American housing complex in the United States. Established in 1970 as a housing cooperative by Native American community leaders, it provides affordable housing with preference for Native American families. Little Earth is more than housing — it is a cultural center, a community anchor, and a gathering point for the Twin Cities' Native American population. The community offers programming, cultural events, and social services. It is one of the most significant Native American institutions in the Midwest and a defining feature of Ventura Village's identity.",
    },
    {
      question: "What is the Phillips community?",
      answer:
        "Phillips is a large geographic community in South Minneapolis that encompasses four neighborhoods: Ventura Village, Phillips West, Midtown Phillips, and East Phillips. The Phillips community is one of the most diverse areas in the state, home to significant Native American, Somali, Latino, and Southeast Asian populations. It has historically been one of the poorest areas in Minneapolis, with challenges including high crime, housing instability, and health disparities. It is also a place of extraordinary cultural richness, community resilience, and institutional energy. The four Phillips neighborhoods share many characteristics but have distinct identities.",
    },
    {
      question: "How much does it cost to live in Ventura Village?",
      answer:
        "Ventura Village is one of the most affordable neighborhoods in Minneapolis. Rental apartments range from roughly $700 for a studio to $1,500 for a two-bedroom, with significant variation based on building quality and age. Single-family homes — a mix of older bungalows, duplexes, and small multifamily buildings — sell for $165,000 to $280,000, which is well below the city median. The affordability is a major draw for first-time homebuyers, immigrants establishing themselves, and anyone priced out of trendier neighborhoods.",
    },
    {
      question: "What is on Franklin Avenue in Ventura Village?",
      answer:
        "Franklin Avenue is the commercial spine of Ventura Village and the broader Phillips community. It is a genuinely multicultural corridor — Somali restaurants and shops, Latino markets and bakeries, Native American organizations and services, East African grocery stores, and longstanding institutions like the American Indian Center share the streetscape. Franklin is not polished or curated — many storefronts are modest, signage is multilingual, and the street feels more like a working commercial corridor than a destination retail strip. But it is one of the most culturally authentic streets in Minneapolis, and the food alone is worth the visit.",
    },
    {
      question: "Where exactly is Ventura Village in Minneapolis?",
      answer:
        "Ventura Village is in the Phillips community of South Minneapolis, roughly bounded by Franklin Avenue to the north, East 26th Street / Midtown Greenway to the south, Chicago Avenue to the west, and Cedar Avenue / Hiawatha Avenue (Highway 55) to the east. It sits south of Elliot Park, east of Phillips West, north of Midtown Phillips, and west of the Seward neighborhood across Hiawatha.",
    },
    {
      question: "Is Ventura Village gentrifying?",
      answer:
        "Gentrification in Ventura Village is happening more slowly than in some adjacent neighborhoods, but the pressures are real. The neighborhood's proximity to downtown, its transit access, and its relative affordability make it attractive to developers and to higher-income residents looking for value. Some new construction — particularly along the Hiawatha corridor — has brought market-rate housing to an area that has been predominantly low-income. Community organizations have pushed for affordability protections and community benefit agreements. The pace of change is slower than in Elliot Park, but the direction is similar.",
    },
    {
      question: "What community organizations serve Ventura Village?",
      answer:
        "Ventura Village is served by several community organizations including the Ventura Village Neighborhood Organization, the Phillips Community (which covers all four Phillips neighborhoods), the American Indian Center, Little Earth of United Tribes, and numerous culturally specific organizations serving Somali, Latino, and Southeast Asian communities. The Minneapolis American Indian Center, located on Franklin Avenue, is one of the oldest urban Indian centers in the country and provides cultural programming, social services, and community gathering space. These organizations are essential to the neighborhood's functioning — they provide services, advocate for residents, and maintain the cultural infrastructure that makes Ventura Village what it is.",
    },
    {
      question: "Can you live in Ventura Village without a car?",
      answer:
        "Living in Ventura Village without a car is possible but requires more planning than in downtown or Uptown neighborhoods. The Walk Score of 75 reflects decent walkability — basic errands are achievable on foot — but the neighborhood lacks the density of retail and services that makes truly car-free living easy. Bus service is solid: the Route 2 on Franklin Avenue and the Route 22 on Cedar Avenue provide frequent service. The Blue Line light rail runs along Hiawatha on the neighborhood's eastern edge, with the Franklin Avenue and Lake Street stations providing connections to downtown, the airport, and the Mall of America. Cycling is practical on the flat terrain. A car is not essential, but it makes suburban errands and big grocery trips significantly easier.",
    },
  ],
  nearby: [
    { name: "Phillips West", slug: "phillips-west", description: "The Institute of Arts and affordable housing to the west" },
    { name: "Midtown Phillips", slug: "midtown-phillips", description: "The Greenway, Lake Street, and Phillips' southern half" },
    { name: "East Phillips", slug: "east-phillips", description: "The Roof Depot fight and East African community" },
    { name: "Elliot Park", slug: "elliot-park", description: "Healthcare corridor and new development to the north" },
    { name: "Cedar-Riverside", slug: "cedar-riverside", description: "The West Bank's density and university connection" },
    { name: "Whittier", slug: "whittier", description: "Eat Street and walkable urban living to the west" },
  ],
  closing: {
    title: "What Makes Ventura Village Irreplaceable",
    paragraphs: [
      "Ventura Village does not appear on lists of Minneapolis&apos;s best neighborhoods. It does not have the restaurants of the North Loop, the parks of Southwest Minneapolis, or the renovated Craftsmans of Kingfield. What it has is something that cannot be manufactured by developers or marketed by real estate agents — a genuine, functioning, multicultural community where Native American elders and Somali shopkeepers and Latino families and East African students and longtime working-class residents of every background occupy the same blocks and use the same parks and walk the same streets. This is not the curated diversity of a corporate brochure. It is the messy, complicated, sometimes difficult real thing.",
      "The challenges are real. The poverty is real. The crime is real. The under-investment in infrastructure, the displacement pressures, the health disparities, the educational gaps — all real. But so is the resilience. So are the community organizations that have been doing the work for decades. So is Little Earth, which has been providing housing and cultural grounding for Native families for over fifty years. So are the Somali restaurants on Franklin Avenue, the murals on the buildings, the kids playing in the park on a summer evening. Ventura Village is not a neighborhood that asks to be admired. It is a neighborhood that asks to be understood. And if you take the time to understand it, you will find something here that most of Minneapolis has lost or never had — a place where the city&apos;s full complexity is visible, unavoidable, and unashamed.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday morning in July, Franklin Avenue in Ventura Village
          is conducting its weekly multilingual symphony. At a Somali mall
          near Cedar Avenue, women in hijabs are selecting goat meat and
          fresh produce while a television on the wall plays Al Jazeera. Two
          blocks west, a Mexican bakery is pulling conchas and cuernos from
          the oven, the smell of baked sugar drifting across the sidewalk
          where a man is selling elotes from a cart. At the Minneapolis
          American Indian Center, a group of teenagers is setting up for a
          powwow practice, the drums already audible from the parking lot.
          A city bus stops at the corner, and the passengers who step off
          are speaking Somali, Spanish, Ojibwe, English, and Oromo — five
          languages within ten seconds, none of them remarkable, all of them
          ordinary. This is what Ventura Village sounds like when it is
          simply being itself.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/ventura-village/hero.webp"
        alt="Franklin Avenue in Ventura Village, Minneapolis, with diverse storefronts and community activity"
        caption="Franklin Avenue — Ventura Village's multicultural main street"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Ventura Village, Minneapolis?">
        <Prose>
          <p>
            Ventura Village is one of four neighborhoods that make up the
            Phillips community in South Minneapolis — a large, diverse,
            historically low-income area that sits between downtown and the
            more affluent neighborhoods to the south and west. Ventura Village
            occupies the northeastern portion of Phillips, roughly bounded
            by Franklin Avenue to the north, the Midtown Greenway / East 26th
            Street to the south, Chicago Avenue to the west, and Cedar Avenue
            / Hiawatha Avenue (Highway 55) to the east. It is home to
            approximately 6,200 people, making it modestly sized by
            Minneapolis standards — but what it lacks in size it compensates
            for in cultural density.
          </p>
          <p>
            This is one of the most racially and ethnically diverse
            neighborhoods in the state of Minnesota. More than 70 percent
            of residents are people of color. The Native American community
            is anchored by Little Earth of United Tribes, the largest urban
            Native housing complex in the country. Somali, Ethiopian, and
            other East African communities have established a significant
            commercial and residential presence, particularly along Franklin
            and Cedar Avenues. Latino families — many with roots in Mexico
            and Central America — have been part of the neighborhood for
            generations. The diversity is not a recent arrival or a
            marketing point. It is the neighborhood&apos;s core identity,
            built over decades by communities that settled here because it
            was affordable, because institutions served them here, and
            because they built the networks of support that make a place
            home.{" "}
            <Link href="/neighborhoods/phillips-west" className="text-[#2a9d8f] hover:underline">
              Phillips West
            </Link>{" "}
            shares much of this character.{" "}
            <Link href="/neighborhoods/cedar-riverside" className="text-[#2a9d8f] hover:underline">
              Cedar-Riverside
            </Link>{" "}
            has comparable diversity. But Ventura Village — with Little Earth
            at its heart and Franklin Avenue as its spine — has a particular
            gravity that is difficult to find anywhere else in the Twin Cities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Ventura Village Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/ventura-village/neighborhood-sign.webp"
          alt="Ventura Village neighborhood sign in Minneapolis"
          caption="The Ventura Village neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Ventura Village History & Origins">
        <Prose>
          <p>
            The land that is now Ventura Village was originally Dakota
            territory — part of the homeland of the Dakota (Sioux) people
            who lived in the region for centuries before European settlement.
            The Dakota were forcibly removed from Minnesota following the
            U.S.-Dakota War of 1862, one of the most violent and
            consequential episodes in Minnesota history. The fact that
            Ventura Village is now home to one of the largest urban Native
            American communities in the country carries the full weight
            of that history — Indigenous people returning to and persisting
            on land that was taken from them.
          </p>
          <p>
            The neighborhood developed as a working-class residential area
            in the late 19th and early 20th centuries, housing Scandinavian,
            German, and other European immigrant families who worked in the
            nearby mills and factories. The housing stock from this era —
            modest bungalows, duplexes, and small apartment buildings —
            still forms the backbone of the neighborhood. Like much of
            Phillips, the area declined through the mid-20th century as
            white flight, freeway construction, and disinvestment took
            their toll.
          </p>
          <p>
            The most significant development in Ventura Village&apos;s modern
            history was the founding of Little Earth of United Tribes in
            1970. Created by Native American community activists who
            recognized the need for culturally appropriate urban housing,
            Little Earth began as a housing cooperative and grew into a
            212-unit community with preference for Native American families.
            It became — and remains — the largest urban Native housing
            complex in the United States, serving as a cultural anchor,
            a community center, and a gathering point for the Twin Cities&apos;
            Native American population. The complex has faced challenges —
            poverty, crime, funding pressures, and the ongoing effects of
            intergenerational trauma — but it has persisted for over fifty
            years as a place where Native people can live in community,
            in a city that has often failed them.
          </p>
          <p>
            The late 20th century brought new waves of immigration. Somali
            refugees, beginning in the 1990s, established a significant
            presence along Franklin and Cedar Avenues, opening restaurants,
            shops, and mosques. Latino families expanded their footprint in
            the neighborhood. Southeast Asian communities — Hmong,
            Vietnamese, Lao — settled in Phillips as well. By the 2000s,
            Ventura Village had become one of the most diverse neighborhoods
            in the Midwest, a place where global displacement and American
            urbanization converged on a few square blocks of affordable
            housing.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Ventura Village">
        <Prose>
          <p>
            Living in Ventura Village is not like living in the Minneapolis
            that most newcomers imagine. There are no craft breweries, no
            artisanal coffee shops with reclaimed wood, no boutiques selling
            locally made candles. The commercial landscape is functional and
            multicultural — grocery stores stocked with ingredients you
            might not recognize, restaurants where the menu is in Somali or
            Spanish first and English second, clothing shops selling fabrics
            and styles from East Africa and Central America. The aesthetic is
            not curated. It is organic, practical, and occasionally beautiful
            in the way that real places are beautiful — not because someone
            designed them to be, but because people are living their lives
            in them.
          </p>
          <p>
            The residential blocks are a mix of older single-family homes,
            duplexes, and apartment buildings. Some are well-maintained by
            owners who take pride in their properties. Others show the
            effects of decades of deferred maintenance and absentee
            ownership. The streets are generally quieter than the commercial
            corridors — families, children playing, the rhythms of a
            working-class neighborhood. In summer, the porches fill up,
            the gardens go in, and the neighborhood feels genuinely alive.
            In winter, it contracts, as all Minneapolis neighborhoods do,
            into the insulated privacy of indoor life.
          </p>
          <p>
            The community institutions are the backbone. Little Earth is
            more than housing — it hosts cultural events, youth programming,
            and gatherings that serve the broader Native community. The
            Minneapolis American Indian Center on Franklin Avenue — one of
            the oldest urban Indian centers in the country — provides
            cultural programming, social services, and a gathering space
            that draws people from across the metro. The Somali community
            has its own network of mosques, businesses, and mutual aid
            organizations. Churches serve the Latino and African American
            communities. These institutions do the work that government and
            the market do not — holding communities together, providing
            services, maintaining cultural identity in a city that does not
            always make space for it.
          </p>
        </Prose>
        <Quote
          text="People drive through Phillips and they see poverty. They see what&apos;s wrong. They don&apos;t see the grandmother teaching her grandchildren Ojibwe at Little Earth. They don&apos;t see the Somali women running businesses on Franklin. They don&apos;t see the block where everyone knows everyone. They see what they expect to see."
          cite="Ventura Village community organizer"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Ventura Village Food, Drink & Local Spots">
        <Prose>
          <p>
            Ventura Village&apos;s food scene is not the kind that food
            bloggers usually cover, but it is one of the most interesting
            and affordable in the city. The Franklin Avenue corridor and the
            surrounding blocks offer a culinary tour of the world — Somali,
            Ethiopian, Mexican, Native American, Vietnamese — at prices that
            make the North Loop look absurd. The restaurants are modest.
            The food is real. If you are willing to eat at places where
            the decor is an afterthought and the menu might not be in
            English, you will eat better and cheaper here than in most of
            Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Safari Restaurant", tag: "Somali", price: "$", description: "Franklin Avenue. One of several Somali restaurants on the Franklin corridor serving goat, rice, sambusa, and Somali tea. The food is simple, generous, and deeply flavorful. If you have never had Somali food, this is a good place to start. The portions are enormous and the prices are startlingly low." }} />
          <PlaceCardComponent place={{ name: "Taco Taxi / Franklin Avenue Taquerias", tag: "Mexican", price: "$", description: "Several taquerias along and near Franklin Avenue serve authentic tacos, burritos, tortas, and aguas frescas. These are not Americanized Mexican restaurants — they are the real thing, serving the Latino community that has been part of this neighborhood for decades. Follow the locals." }} />
          <PlaceCardComponent place={{ name: "Minneapolis American Indian Center", tag: "Community / Cultural", price: "$", description: "1530 Franklin Avenue. The American Indian Center hosts periodic community meals, cultural events, and gatherings that sometimes include traditional foods — wild rice, bison, fry bread. These are community events rather than restaurants, but they are an important part of the neighborhood's food culture. Check the center's calendar." }} />
          <PlaceCardComponent place={{ name: "East African Grocery Stores", tag: "Grocery / Specialty", price: "$", description: "Several East African grocery stores along Franklin and Cedar Avenues stock spices, grains, halal meats, and specialty ingredients from Somalia, Ethiopia, and beyond. For home cooks interested in East African cuisine, these shops are invaluable — and far cheaper than specialty stores in other parts of the city." }} />
          <PlaceCardComponent place={{ name: "Latino Markets and Bakeries", tag: "Grocery / Bakery", price: "$", description: "Mexican and Central American markets in and near Ventura Village sell fresh tortillas, dried chilies, queso fresco, pan dulce, and the full range of ingredients needed for home cooking. The bakeries are particularly excellent — fresh conchas and cuernos at prices that seem impossible." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Grocery shopping in Ventura Village is best done at the ethnic
              grocery stores and markets that serve the community — Somali
              shops for halal meat and spices, Latino markets for produce
              and tortillas. For conventional American-style grocery
              shopping, the nearest full-service options are the Cub Foods
              on Lake Street (in{" "}
              <Link href="/neighborhoods/midtown-phillips" className="text-[#2a9d8f] hover:underline">
                Midtown Phillips
              </Link>
              ) and the Aldi on East Lake Street. The absence of a
              conventional supermarket within the neighborhood is a
              persistent gap, though the ethnic markets fill much of the need
              for residents who know how to use them.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors / Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors in Ventura Village">
        <Prose>
          <p>
            Ventura Village has modest park resources within its boundaries
            but benefits from proximity to larger green spaces and cultural
            institutions in the surrounding area.
          </p>
        </Prose>

        <ArticleSubsection title="Peavey Park & Field">
          <Prose>
            <p>
              Peavey Park, located near the center of Ventura Village, is
              the neighborhood&apos;s primary green space. It includes a
              recreation center, sports fields, a playground, and open
              lawn. The park is heavily used by neighborhood families,
              particularly in summer — soccer games, basketball, kids on
              the playground, community gatherings. Peavey Field, adjacent
              to the park, provides additional sports facilities. The park
              is well-loved but has faced maintenance challenges consistent
              with under-investment in Phillips-area parks relative to
              wealthier parts of the city.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Minneapolis American Indian Center">
          <Prose>
            <p>
              The Minneapolis American Indian Center, at 1530 Franklin Avenue,
              is one of the most significant cultural institutions in
              Ventura Village. Founded in 1975, it is one of the oldest
              urban Indian centers in the United States. The center provides
              cultural programming — powwows, language classes, art
              exhibitions, elder gatherings — as well as social services
              including job training, youth programs, and health services.
              For the Twin Cities&apos; Native American community, the
              center is a gathering point, a resource, and a cultural
              anchor. For non-Native visitors, it offers a window into a
              community and a history that Minneapolis often overlooks.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Midtown Greenway (South Edge)">
          <Prose>
            <p>
              The Midtown Greenway — the 5.5-mile bike and pedestrian trail
              running east-west through South Minneapolis — passes along
              Ventura Village&apos;s southern edge. The Greenway provides
              recreational access and a commuter corridor connecting to
              the Chain of Lakes to the west and the Mississippi River
              trails to the east. The Franklin Avenue station on the Blue
              Line light rail, at the intersection of the Hiawatha corridor
              and the Greenway, provides a multimodal connection point for
              neighborhood residents.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Minneapolis Institute of Art (Nearby)">
          <Prose>
            <p>
              The Minneapolis Institute of Art (Mia) — one of the great
              encyclopedic art museums in the United States, with free
              general admission — sits in neighboring{" "}
              <Link href="/neighborhoods/phillips-west" className="text-[#2a9d8f] hover:underline">
                Phillips West
              </Link>
              , within walking distance of Ventura Village. Having a
              world-class art museum within a mile of one of the most
              affordable neighborhoods in the city is one of those
              Minneapolis contradictions that works in everyone&apos;s favor.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Ventura Village Schools">
        <Prose>
          <p>
            Ventura Village and the broader Phillips community are served by
            several Minneapolis Public Schools, some of which have strong
            reputations and deep community ties. Andersen United Community
            School, a pre-K–8 school serving the Phillips area, has been a
            neighborhood anchor with a focus on community engagement and
            cultural responsiveness. The school serves a highly diverse
            student body and offers programming designed to meet the needs
            of multilingual families.
          </p>
          <p>
            Other nearby options include Jefferson Community School and
            Whittier International Elementary. For high school, South High
            School is the primary assignment for the area. Charter schools
            and culturally specific schools — including schools serving
            Native American, Somali, and Latino students — provide
            alternatives that some families prefer. The Minneapolis Public
            Schools system allows citywide enrollment, so families can
            apply to magnet and specialty programs beyond the immediate
            neighborhood.
          </p>
          <p>
            The educational landscape in Phillips is shaped by the same
            challenges affecting urban schools nationally — poverty,
            mobility, language barriers, and funding constraints. Some
            schools are doing innovative, community-centered work. Others
            struggle with the weight of systemic challenges. Parents in
            Ventura Village tend to be actively engaged in their children&apos;s
            education, but the system does not always meet them halfway.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Ventura Village Real Estate & Housing">
        <Prose>
          <p>
            Ventura Village&apos;s housing market is among the most
            affordable in Minneapolis, reflecting the neighborhood&apos;s
            economic profile and its historical underinvestment. The housing
            stock is a mix of older single-family homes, duplexes, small
            apartment buildings, and larger affordable housing complexes.
            Little Earth&apos;s 212 units represent the most significant
            single housing development, but subsidized and income-restricted
            housing is scattered throughout the neighborhood.
          </p>
          <p>
            Single-family homes typically sell for $165,000 to $280,000 —
            well below the Minneapolis median. The homes are generally
            older (1900s–1940s), modest in size, and in varying condition.
            Some have been lovingly maintained or renovated; others need
            significant work. For first-time homebuyers, particularly
            those using down-payment assistance programs, Ventura Village
            offers entry points that are increasingly rare in the central
            city.
          </p>
        </Prose>

        <ArticleSubsection title="The Rental Landscape">
          <Prose>
            <p>
              Rental housing dominates the market. Apartments in older
              buildings range from $700 for a studio to $1,500 for a
              two-bedroom. Subsidized and income-restricted units are
              available through various programs, with waitlists that can
              be lengthy. Little Earth has its own application process with
              preference for Native American families. The rental market
              is generally affordable, but quality varies enormously —
              tenants should inspect units carefully and check landlord
              records with the city&apos;s rental licensing database before
              signing a lease.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We bought our house in Ventura Village for $195,000. Three bedrooms, a yard, a garage. It needed work, but we did it ourselves. Our friends in Kingfield paid twice that for the same thing. The difference is the zip code. And we like our zip code."
          cite="Ventura Village homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Ventura Village">
        <Prose>
          <p>
            Ventura Village has decent transit access thanks to the Blue Line
            light rail, which runs along the Hiawatha corridor on the
            neighborhood&apos;s eastern edge. The Franklin Avenue station
            provides direct service to downtown Minneapolis (10 minutes),
            the airport (20 minutes), and the Mall of America (30 minutes).
            The Lake Street station, just south of the neighborhood, adds
            another access point. Multiple bus routes serve the area — the
            Route 2 on Franklin Avenue and the Route 22 on Cedar Avenue
            provide frequent east-west and north-south service.
          </p>
          <p>
            Walking is practical for neighborhood errands — the Walk Score
            of 75 reflects that basic needs are accessible on foot, though
            the neighborhood lacks the retail density that would push the
            score higher. Franklin Avenue provides commercial services, and
            the ethnic grocery stores serve daily shopping needs. For trips
            to other parts of the city, transit and cycling are the primary
            alternatives to driving.
          </p>
          <p>
            The Midtown Greenway, accessible from the neighborhood&apos;s
            southern edge, provides an excellent east-west cycling corridor
            that connects to the Chain of Lakes, Lake Street, and the
            Mississippi River trails. The flat terrain makes cycling
            practical throughout the neighborhood. Nice Ride bikeshare
            stations are available in the area.
          </p>
          <p>
            By car, the neighborhood is well-connected to Highway 55
            (Hiawatha Avenue), which provides access to the airport and
            southern suburbs. I-35W is accessible to the west. Street
            parking is generally available and free on residential blocks.
            Many households own cars, and the neighborhood&apos;s infrastructure
            accommodates them — garages, driveways, and ample street parking
            are standard on residential blocks.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Ventura Village&apos;s tensions are not new — they are the
            accumulated weight of decades of poverty, disinvestment, and
            systemic inequality, now intersecting with the pressures of a
            city that is growing and a real estate market that is discovering
            that affordable neighborhoods close to downtown are valuable.
          </p>
        </Prose>

        <ArticleSubsection title="Displacement and Development Pressure">
          <Prose>
            <p>
              As Minneapolis housing costs rise, neighborhoods like Ventura
              Village — affordable, centrally located, well-served by
              transit — become targets for development. New market-rate
              construction, property flips, and rent increases are slowly
              changing the neighborhood&apos;s economic profile. The risk is
              that the communities who built Ventura Village&apos;s identity —
              Native American families, Somali immigrants, Latino workers,
              low-income residents of all backgrounds — are priced out by
              the same forces that make the neighborhood attractive to
              newcomers. Community organizations have pushed for
              inclusionary zoning, community land trusts, and anti-displacement
              measures. Some of these efforts have produced results. Whether
              they are sufficient to preserve the neighborhood&apos;s character
              is an open question.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Safety and Policing">
          <Prose>
            <p>
              Crime is a persistent concern in Ventura Village, and the
              relationship between the community and the Minneapolis Police
              Department is complicated. Phillips-area residents — particularly
              Native American and Black residents — have long histories of
              tense interactions with police, including racial profiling,
              excessive force, and a pattern of over-policing minor
              infractions while under-policing violent crime. The murder of
              George Floyd in 2020, while it occurred in a different
              neighborhood, amplified dynamics that were already present.
              Community-led safety initiatives, restorative justice programs,
              and culturally specific intervention models are being
              explored as alternatives or supplements to traditional
              policing. The outcomes are uncertain but the work is serious.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Environmental Justice">
          <Prose>
            <p>
              The Phillips community — including Ventura Village — has been
              a focal point for environmental justice activism in
              Minneapolis. The neighborhood bears a disproportionate burden
              of environmental hazards — proximity to freeways, industrial
              sites, and polluting facilities. The fight over the Roof
              Depot site in East Phillips, where community members opposed
              a city plan to build a water maintenance facility and
              advocated instead for an urban farm and community center,
              became a landmark environmental justice case. These struggles
              are not abstract in Ventura Village — the health impacts of
              air pollution, soil contamination, and environmental racism
              are lived realities for residents who have been breathing
              this air and drinking this water for decades.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Ventura Village FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
