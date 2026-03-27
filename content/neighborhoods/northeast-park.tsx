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
    title: "Northeast Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Northeast Park, Minneapolis — a quiet, far-northeast residential neighborhood along St. Anthony Parkway, affordable homes, neighborhood character, real estate, and what it's really like to live at the northern edge of Northeast Minneapolis in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Northeast Park",
  deck: "The far-northeast residential frontier — where St. Anthony Parkway curves through a landscape of postwar ramblers and prewar bungalows, the city feels more like a small town, affordability is still real, and the rest of Minneapolis seems very far away even though downtown is a fifteen-minute drive.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Northeast Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Northeast Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Northeast Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,800", label: "Residents (US Census / ACS estimates)" },
      { value: "$250K–$370K", label: "Median home sale price (2025 data)" },
      { value: "$900–$1,250", label: "Typical 1BR apartment rent (2025)" },
      { value: "55", label: "Walk Score" },
      { value: "78", label: "Bike Score" },
      { value: "42", label: "Transit Score" },
      { value: "1900s–1950s", label: "Primary era of residential development" },
      { value: "15 min", label: "Drive to downtown Minneapolis" },
    ],
  },
  faq: [
    {
      question: "Is Northeast Park a good neighborhood in Minneapolis?",
      answer:
        "Northeast Park is a good neighborhood for people who want affordable homeownership in Minneapolis without the density, noise, or pace of the more central neighborhoods. It's quiet, safe, and residential in a way that feels more like a first-ring suburb than an urban neighborhood. The trade-off is clear: limited walkability, fewer commercial amenities, and a distance from the cultural and dining scenes that make other parts of Minneapolis exciting. If you want a house with a yard, a two-car garage, and the ability to hear yourself think, Northeast Park delivers. If you want a neighborhood with energy and convenience, look closer to downtown.",
    },
    {
      question: "Is Northeast Park, Minneapolis safe?",
      answer:
        "Northeast Park is one of the safer neighborhoods in Minneapolis. Both violent and property crime rates are well below the city average. The neighborhood's low density, high homeownership rates, and distance from commercial corridors contribute to a quiet, low-crime environment. This is the part of Minneapolis where people don't lock their cars — not because they should leave them unlocked, but because the safety feels suburban enough that old habits from quieter places persist.",
    },
    {
      question: "How much does it cost to live in Northeast Park?",
      answer:
        "Northeast Park is one of the most affordable neighborhoods in Minneapolis. Single-family homes sell in the $250,000 to $370,000 range — well below the city median and significantly below the prices in the trendier parts of Northeast Minneapolis. Rentals, while limited in supply, run $900 to $1,250 for a one-bedroom apartment. These prices make Northeast Park accessible to first-time buyers, working-class families, and retirees on fixed incomes in a way that few Minneapolis neighborhoods still allow.",
    },
    {
      question: "Where is Northeast Park in Minneapolis?",
      answer:
        "Northeast Park is in the far northeastern corner of Minneapolis, roughly bounded by St. Anthony Parkway and Lowry Avenue NE to the south, the city border with Columbia Heights to the north, Central Avenue NE to the west, and Stinson Boulevard to the east. It sits north of the more well-known Northeast Minneapolis neighborhoods — Logan Park, Holland, Waite Park — and borders the suburban communities of Columbia Heights and St. Anthony Village.",
    },
    {
      question: "Is Northeast Park walkable?",
      answer:
        "Not very. The Walk Score of 55 reflects a neighborhood where most errands require a bike or car. There is no significant commercial corridor within the neighborhood boundaries — the nearest commercial activity is on Central Avenue to the west or Lowry Avenue to the south, both requiring a walk of several blocks. The streets are pleasant for recreational walking (quiet, tree-lined, low traffic), but functional walkability is limited. The Bike Score of 78 is better — cycling to Central Avenue or the Lowry corridor takes five to ten minutes on flat terrain.",
    },
    {
      question: "What is St. Anthony Parkway?",
      answer:
        "St. Anthony Parkway is a scenic boulevard that forms part of the Minneapolis Grand Rounds — a system of parks, lakes, and connecting parkways that rings the city. The parkway runs through and near Northeast Park, providing a tree-lined route for driving, biking, and walking. It connects to other segments of the Grand Rounds, including the riverfront trails and the northeast lake areas. For Northeast Park residents, the parkway is the neighborhood's most significant outdoor amenity — a scenic corridor that provides recreational space and landscape beauty in an otherwise unremarkable residential setting.",
    },
    {
      question: "Is Northeast Park good for families?",
      answer:
        "Yes, with caveats. Northeast Park offers many family-friendly qualities: affordable homes with yards, safe streets, low traffic, a quiet environment, and access to parks and the St. Anthony Parkway. The caveats are the limited walkability (kids can't walk to much besides friends' houses and the nearest park), the distance from commercial amenities, and school quality that requires navigation of the Minneapolis Public Schools system. Families who prioritize space, safety, and affordability over convenience and walkability will find Northeast Park appealing.",
    },
    {
      question: "How does Northeast Park compare to Columbia Heights?",
      answer:
        "Northeast Park borders Columbia Heights, a first-ring suburb, and the two areas have significant similarities: affordable housing, quiet residential streets, diverse populations, and a suburban feel. The main differences are municipal — Northeast Park is part of Minneapolis (with Minneapolis property taxes, Minneapolis Public Schools, Minneapolis city services) while Columbia Heights is its own city with its own services, schools, and tax rates. For practical daily life, the border between them is nearly invisible. Buyers choosing between the two should compare property taxes, school districts, and municipal services rather than neighborhood character, which is largely the same.",
    },
    {
      question: "Is Northeast Park part of the Northeast Minneapolis arts scene?",
      answer:
        "Only geographically. Northeast Park is in Northeast Minneapolis, but it is not part of the arts district, the brewery culture, or the gentrification dynamic that defines neighborhoods like Logan Park and St. Anthony West. The arts scene is concentrated several miles to the south, closer to the river. Northeast Park residents can access it by bike or car, but the arts district's energy, culture, and economics don't extend this far north. Northeast Park is Northeast in address but suburban in character.",
    },
    {
      question: "What's the commute like from Northeast Park?",
      answer:
        "The commute from Northeast Park to downtown Minneapolis is approximately 15 minutes by car via Central Avenue or I-35W — manageable but not the quick hop that closer-in neighborhoods offer. By bike, it's 25 to 35 minutes depending on the route. By bus, Route 10 on Central Avenue provides the primary transit connection, with a ride time of 20 to 30 minutes to downtown. For commuters to the northern suburbs, the location is advantageous — Columbia Heights, Fridley, and the I-35W corridor are immediately accessible.",
    },
  ],
  nearby: [
    { name: "Logan Park", slug: "logan-park", description: "The creative engine of Nordeast and Art-A-Whirl" },
    { name: "Waite Park", slug: "waite-park", description: "Central Ave adjacent residential living in diverse Nordeast" },
    { name: "Audubon Park", slug: "audubon-park", description: "Quiet residential Nordeast with a community park at its center" },
    { name: "Columbia Park", slug: "columbia-park", description: "Far northeast residential living near the Columbia Heights border" },
    { name: "Marshall Terrace", slug: "marshall-terrace", description: "Riverfront residential at the northern edge of Minneapolis" },
    { name: "Holland", slug: "holland", description: "Working-class Nordeast east of Central Avenue" },
  ],
  closing: {
    title: "What Makes Northeast Park Worth Considering",
    paragraphs: [
      "Northeast Park is the neighborhood that real estate agents skip when they're showing someone 'Northeast Minneapolis.' It doesn't have the story — no arts district, no brewery row, no Instagram-ready commercial corridor, no cultural narrative that fits neatly into a listing description. What it has is the thing that the story-neighborhoods are rapidly losing: affordability. A house with three bedrooms, a yard, and a garage, in the city of Minneapolis, for under $300,000. That sentence is becoming harder to write every year, and the neighborhoods where it remains true are becoming fewer. Northeast Park is one of them.",
      "The question for Northeast Park is whether its affordability survives the broader trajectory of Northeast Minneapolis real estate. As Logan Park and the Central Avenue corridor become more expensive, buyers and renters push outward, and the neighborhoods that once seemed too far from the action become the last accessible option. That process is already visible in Waite Park and Audubon Park; it hasn't fully reached Northeast Park yet, but the direction is clear. For now, Northeast Park remains what it has been for decades: a quiet, affordable, residential neighborhood at the edge of the city, close enough to everything that matters and far enough from everything that costs too much. That's a simple proposition, and in a city where simplicity is increasingly expensive, it's worth more than it looks.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Drive north on Central Avenue past the breweries and the
          galleries and the Mexican bakeries and the East African
          restaurants, past the point where the commercial corridor thins
          and the storefronts give way to gas stations and auto repair
          shops, and you arrive at a part of Northeast Minneapolis that
          the neighborhood guides usually ignore. Northeast Park sits at
          the far northern edge of the city, where Minneapolis begins to
          feel less like Minneapolis and more like the first-ring suburbs
          that border it. The houses are modest — bungalows and ramblers
          with attached garages, many of them built in the postwar decades
          when this part of the city was still filling in. The streets are
          wide and quiet. The yards are big enough for a garden, a swing
          set, a dog. St. Anthony Parkway curves through the landscape
          with the stately indifference of a WPA-era public works project,
          connecting this neighborhood to the Grand Rounds system and
          providing the only real scenery in a landscape that is otherwise
          flat, residential, and stubbornly unphotogenic. This is the
          part of Northeast Minneapolis where people live because they
          can afford to, and that simple fact — affordability, in a city
          where affordability is vanishing — is Northeast Park&apos;s
          most important quality.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/northeast-park/hero.webp"
        alt="A residential street in Northeast Park with modest homes, large yards, and mature trees near the northern edge of Minneapolis"
        caption="Northeast Park — quiet, affordable, residential Minneapolis at the city's northern edge"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Northeast Park, Minneapolis?">
        <Prose>
          <p>
            Northeast Park is a residential neighborhood in the far
            northeastern corner of Minneapolis, roughly bounded by St.
            Anthony Parkway and Lowry Avenue NE to the south, the
            Columbia Heights city border to the north, Central Avenue NE
            to the west, and Stinson Boulevard to the east. With
            approximately 3,800 residents, it is a small neighborhood
            by Minneapolis standards, and its character is almost entirely
            residential — single-family homes on a regular grid, with
            virtually no commercial activity within its boundaries.
          </p>
          <p>
            Northeast Park occupies an unusual position in the geography
            of Minneapolis. It carries the &ldquo;Northeast&rdquo;
            designation, which in Minneapolis conjures images of
            Art-A-Whirl, taprooms, and Central Avenue food crawls — but
            it bears almost no resemblance to that version of Northeast.
            It is Northeast in the literal directional sense: it is in
            the northeastern part of the city. But in terms of character,
            it has more in common with Columbia Heights or St. Anthony
            Village — the quiet first-ring suburbs that border it — than
            with{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>{" "}
            or St. Anthony West, the neighborhoods that define
            &ldquo;Nordeast&rdquo; in the popular imagination.
          </p>
          <p>
            This mismatch between brand and reality is not a problem for
            the people who live here. They didn&apos;t move to Northeast
            Park for the brand. They moved here for the house — the
            three-bedroom rambler with a two-car garage that costs
            $280,000, in the city of Minneapolis, with Minneapolis
            amenities (parks, plowing, Grand Rounds access) and a
            Minneapolis address. That proposition, plain as it is, is
            increasingly rare, and the people who take advantage of it
            tend to be practical, value-oriented, and entirely
            uninterested in whether their neighborhood is trendy.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Northeast Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/northeast-park/neighborhood-sign.webp"
          alt="Northeast Park neighborhood sign in far Northeast Minneapolis"
          caption="The Northeast Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Northeast Park History & Origins">
        <Prose>
          <p>
            The land that is now Northeast Park lies within the
            traditional homeland of the Dakota people — the Mdewakanton
            band, for whom this landscape of prairie, wetland, and
            scattered timber was part of a broader territory centered on
            the Mississippi River corridor. The dispossession of the
            Dakota, through treaties and the violence of the 1860s,
            opened the land to European-American settlement and
            eventually to the residential development that defines the
            area today.
          </p>
          <p>
            Northeast Park developed later than the neighborhoods closer
            to the river and downtown. While areas like{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy Holmes
            </Link>{" "}
            and St. Anthony West were settled in the 1850s and Logan Park
            in the 1880s and 1890s, Northeast Park&apos;s residential
            development came in two waves: an initial wave of
            bungalows and small houses built between 1900 and 1930, and
            a second wave of postwar construction — ramblers,
            split-levels, and Cape Cods — built in the late 1940s and
            1950s as returning GIs and their families sought affordable
            housing within the city limits.
          </p>
          <p>
            The neighborhood&apos;s development pattern reflects its
            position at the city&apos;s edge. The older sections, closer
            to Lowry Avenue, share the architectural character of the
            broader Northeast Minneapolis building stock: Craftsman
            bungalows, workers&apos; cottages, and the modest houses of
            the immigrant working class. The newer sections, closer to
            the Columbia Heights border, look more like a first-ring
            suburb: wider lots, attached garages, ranch-style layouts,
            and the particular aesthetic of postwar American residential
            development. This architectural divide — prewar urban to the
            south, postwar suburban to the north — gives Northeast Park
            a split personality that mirrors its geographical position
            between city and suburb.
          </p>
          <p>
            The postwar decades were Northeast Park&apos;s population
            peak. Young families filled the new houses, neighborhood
            schools were full, and the area had the energy of a
            growing community. The subsequent decades brought the
            familiar trajectory of stable but aging residential
            neighborhoods: the children grew up and left, the parents
            aged in place, the population declined, and the housing
            stock began showing its age. By the 1990s and 2000s,
            Northeast Park was a neighborhood of long-time homeowners,
            many of them elderly, in houses that needed updating.
          </p>
          <p>
            The more recent trend has been a gradual influx of younger
            buyers — some attracted by the affordability, some by the
            Minneapolis address, some by the proximity to the
            now-trendy parts of Northeast — who are updating the housing
            stock and slowly shifting the neighborhood&apos;s demographics
            younger. This process is far from complete, and Northeast
            Park remains one of the older and more stable neighborhoods
            in the city.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/northeast-park/postwar-homes.webp"
          alt="Postwar rambler-style homes in Northeast Park, showing the neighborhood's mid-century residential character"
          caption="Northeast Park's postwar ramblers — built for GIs and their families in the late 1940s and 1950s, still affordable by Minneapolis standards"
        />
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Northeast Park">
        <Prose>
          <p>
            Living in Northeast Park is living at the edge of the city in
            every sense. The edge of the municipal boundary, where
            Minneapolis yields to Columbia Heights with no visible
            seam. The edge of urban character, where the density and
            complexity of city life dissolves into the regularity of
            single-family residential blocks. And the edge of the
            Northeast Minneapolis identity, where the brewery-and-arts
            narrative that defines the brand has no purchase on the
            daily reality of life here.
          </p>
          <p>
            The daily experience is quiet. Profoundly, almost aggressively
            quiet. These are blocks where the dominant sound on a weekday
            afternoon is a lawn mower or a cardinal. The houses sit on
            lots generous enough for privacy — you are not overhearing
            your neighbor&apos;s phone conversations through shared walls.
            The garages hold cars, tools, boats, snowmobiles — the
            equipment of practical Midwestern life. The yards hold gardens
            (many of them impressive), swing sets, and the occasional
            basketball hoop mounted above the garage door. It is the
            kind of residential environment that architects and urban
            planners argue is unsustainable (too much land per person,
            too car-dependent) and that millions of Americans prefer to
            every alternative.
          </p>
          <p>
            The community is primarily homeowners, and the homeownership
            ethic shapes the neighborhood&apos;s social fabric. People
            maintain their properties because they own them, because
            their neighbors maintain theirs, and because there is an
            unspoken standard of care that functions more effectively than
            any housing code. The yard that goes unmowed for two weeks
            generates quiet concern, not because of aesthetics but
            because it might signal trouble — an elderly neighbor who
            needs help, a family in crisis. That attentiveness is a
            form of community that doesn&apos;t announce itself but is
            deeply felt by the people who benefit from it.
          </p>
          <p>
            The demographics skew older than the Minneapolis average, but
            younger families are arriving in increasing numbers — drawn
            by the affordability and the space. The neighborhood&apos;s
            diversity has also increased, reflecting the broader
            diversification of Northeast Minneapolis: East African,
            Latino, and Southeast Asian families have joined the legacy
            white working-class population, particularly in the
            southern sections closer to Lowry Avenue and Central
            Avenue. The diversification has been gradual and largely
            smooth, without the friction or drama that characterizes
            demographic change in more contested neighborhoods.
          </p>
        </Prose>

        <Quote
          text="People ask me where I live and I say Northeast Minneapolis and they assume I can walk to a brewery. I can't walk to anything. But I have a three-bedroom house with a garage and a yard for what my friends pay for a one-bedroom in Uptown. I'll drive to the brewery."
          cite="Northeast Park homeowner, 2025"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Northeast Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Northeast Park has almost no commercial establishments within
            its residential boundaries. This is worth stating plainly:
            if you live in Northeast Park, you are not walking to a
            restaurant, a coffee shop, or a bar. What you are doing is
            driving or biking to Central Avenue, to Lowry Avenue, or
            to the commercial corridors in neighboring areas.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby on Central Avenue">
          <PlaceCardComponent place={{ name: "Central Avenue (northern stretch)", tag: "Various", price: "$–$$", description: "The northern sections of Central Avenue, west of Northeast Park, carry a thinner but still diverse commercial mix: convenience stores, small restaurants, auto-oriented businesses, and some of the immigrant-serving establishments (East African, Mexican, Middle Eastern) that characterize the broader corridor. This is not the restaurant-dense stretch near Logan Park — it's sparser and more utilitarian — but it provides the closest commercial options for Northeast Park residents." }} />
          <PlaceCardComponent place={{ name: "Columbia Heights commercial", tag: "Various / Suburban", price: "$–$$", description: "The commercial strips in adjacent Columbia Heights — particularly along Central Avenue north of the Minneapolis border — offer chain restaurants, grocery stores (including Cub Foods), and basic retail. These suburban-style commercial options are often closer to Northeast Park residents than the Minneapolis commercial corridors, and they are used accordingly." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Worth the Drive">
          <Prose>
            <p>
              Northeast Park residents who want the full Northeast
              Minneapolis dining and drinking experience — the breweries,
              the Central Avenue food crawl, the restaurants in{" "}
              <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
                St. Anthony West
              </Link>{" "}
              and{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>{" "}
              — are looking at a 10 to 15 minute drive or a 15 to 20
              minute bike ride. This is not prohibitive, but it means
              that the spontaneous Tuesday-night taco run or the
              after-work taproom stop requires more planning than it
              would from a more centrally located neighborhood. Most
              Northeast Park residents have made their peace with this
              trade-off: they traded convenience for affordability and
              space, and they consider it a fair deal.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Northeast Park">
        <Prose>
          <p>
            Northeast Park&apos;s outdoor amenities are anchored by St.
            Anthony Parkway and the neighborhood&apos;s local park, with
            additional access to the Grand Rounds trail system that
            provides connectivity to the broader Minneapolis park
            network.
          </p>
        </Prose>

        <ArticleSubsection title="St. Anthony Parkway">
          <Prose>
            <p>
              St. Anthony Parkway is Northeast Park&apos;s most
              significant outdoor asset. Part of the Minneapolis Grand
              Rounds National Scenic Byway, the parkway runs through or
              near the neighborhood, providing a tree-lined boulevard
              with separated paths for walking, running, and biking. The
              parkway connects to other segments of the Grand Rounds,
              including the Mississippi River trails to the west and the
              Columbia Park golf course area to the north. On summer
              mornings, the parkway fills with joggers, dog walkers, and
              cyclists — one of the few moments when Northeast Park
              feels like a neighborhood with public life rather than a
              collection of private houses.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/northeast-park/st-anthony-parkway.webp"
          alt="St. Anthony Parkway in Northeast Minneapolis with tree-lined boulevard and walking paths"
          caption="St. Anthony Parkway — Northeast Park's best outdoor amenity and connection to the Grand Rounds"
        />

        <ArticleSubsection title="Northeast Park (the Park)">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park — a city park within
              the neighborhood boundaries — provides a playground,
              open green space, and a recreation center with community
              programming. Like Audubon Park&apos;s namesake park and
              Waite Park&apos;s namesake park, Northeast Park is a
              serviceable neighborhood green space that functions as the
              community&apos;s outdoor living room. It is not a
              destination park — nobody drives across the city to use
              it — but it is well-used by neighborhood families and
              provides the basic outdoor infrastructure that every
              residential neighborhood needs.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Columbia Golf Course & Beyond">
          <Prose>
            <p>
              Columbia Golf Course, located nearby in the{" "}
              <Link href="/neighborhoods/columbia-park" className="text-[#2a9d8f] hover:underline">
                Columbia Park
              </Link>{" "}
              area, is a public golf course operated by the Minneapolis
              Park and Recreation Board. It&apos;s an affordable,
              accessible course that serves the northeast Minneapolis
              community — not fancy, but functional, and one of the
              few recreational facilities of any size in this part of
              the city. The course&apos;s grounds also provide de facto
              green space and walking paths in a neighborhood that has
              limited parkland per capita.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Northeast Park Schools">
        <Prose>
          <p>
            Schools serving Northeast Park are part of the Minneapolis
            Public Schools system. The neighborhood&apos;s school-age
            population is moderate and growing as younger families move
            in, attracted by the affordable housing.
          </p>
          <p>
            Elementary students in Northeast Park are served by
            neighborhood schools within the Minneapolis Public Schools
            attendance boundaries, with the specific school determined
            by the district&apos;s boundary process. The broader magnet
            and choice system allows enrollment in schools across the
            city, and many Northeast Park families take advantage of
            these options.
          </p>
          <p>
            Edison High School serves the area as the comprehensive
            high school for Northeast Minneapolis. The school offers a
            range of programs and serves a diverse student body. For
            families seeking specific programming, the citywide magnet
            system provides alternatives.
          </p>
          <p>
            Northeast Park families with school-age children often face
            the same calculation as families in other far-northeast
            neighborhoods: the housing is affordable and the streets are
            safe, but the school options require research and often
            commuting to schools outside the immediate neighborhood.
            This is a trade-off that families make consciously, weighing
            the benefits of an affordable, spacious house against the
            logistics of school transportation.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Northeast Park Real Estate & Housing">
        <Prose>
          <p>
            Northeast Park&apos;s housing market is the most affordable
            in Northeast Minneapolis and among the most affordable in
            the city of Minneapolis as a whole. For buyers who are
            priced out of the closer-in neighborhoods — who want a
            Minneapolis address and a Minneapolis-quality park system
            but can&apos;t afford the prices in Logan Park or the
            southwest lakes — Northeast Park is one of the last options
            on the board.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Northeast Park">
          <Prose>
            <p>
              The housing stock splits into two eras. The older homes —
              built 1900 to 1930 in the southern part of the neighborhood —
              are the familiar Northeast Minneapolis bungalows and
              workers&apos; cottages: 900 to 1,300 square feet, detached
              garages, narrow lots. The newer homes — built 1945 to 1960
              in the northern sections — are postwar ramblers and
              split-levels: 1,000 to 1,500 square feet, attached garages,
              wider lots, and the open floor plans that postwar families
              preferred.
            </p>
            <p>
              Prices range from $250,000 to $370,000 as of 2025. Homes
              at the lower end need work — dated kitchens, original
              windows, aging mechanical systems. Homes at the upper end
              have been updated and are move-in ready. The sweet spot for
              most buyers is the $280,000 to $320,000 range, where you
              can find a solid three-bedroom house with a garage that
              needs cosmetic updating but not structural work. These are
              the homes that first-time buyers, single-income households,
              and downsizing retirees are competing for, and they sell
              within a few weeks of listing.
            </p>
            <p>
              New construction is rare. The lots are built out, and the
              price point of the neighborhood doesn&apos;t support the
              economics of tear-down-and-rebuild. When new construction
              does appear, it is typically an infill project or a major
              renovation of an existing structure, priced at $350,000
              to $420,000.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Rental options in Northeast Park are limited — this is
              overwhelmingly an owner-occupied neighborhood. What rental
              stock exists consists primarily of units in older duplexes
              and a few small apartment buildings. One-bedroom rents
              run $900 to $1,250, among the lowest in Minneapolis. The
              limited supply means that units rent quickly when they
              become available. Prospective renters looking in this area
              should watch listings closely and be prepared to act fast.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="Our realtor tried to steer us to Columbia Heights — 'same houses, lower taxes.' But we wanted to be in Minneapolis. We wanted the parks, the plowing, the city services. We found a rambler in Northeast Park for $265,000. In Minneapolis. Three bedrooms. A garage. I still can't believe it." cite="Northeast Park first-time homebuyer, 2024" />
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/northeast-park/residential-street.webp"
        alt="A quiet residential street in Northeast Park with ramblers and bungalows, large yards, and minimal traffic"
        caption="Northeast Park's residential streets — wide, quiet, and more affordable than almost anywhere else in Minneapolis"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Northeast Park">
        <Prose>
          <p>
            Northeast Park is a car-oriented neighborhood, and there is
            no getting around that fact. The Walk Score of 55 and Transit
            Score of 42 reflect the reality of life at the city&apos;s
            edge: most trips require a car or, for the committed cyclist,
            a bike. The Bike Score of 78 is the most optimistic number —
            the terrain is flat, the streets are low-traffic, and bike
            connections to Central Avenue and the St. Anthony Parkway
            trail are serviceable.
          </p>
          <p>
            Transit service reaches the neighborhood through bus routes
            on Central Avenue (Route 10, the primary connection to
            downtown) and Lowry Avenue. Headways are longer than in
            more central neighborhoods, and the experience of waiting
            for a bus on a January morning in Northeast Park is the
            experience of understanding why most people here own cars.
            The commute to downtown is approximately 15 minutes by car,
            20 to 30 minutes by bus.
          </p>
          <p>
            For drivers, the geography is straightforward. Central Avenue
            provides a direct surface route to downtown Minneapolis.
            Interstate 35W is accessible via side streets to the west,
            connecting to the highway system and MSP Airport (approximately
            20 to 25 minutes). The northern suburbs — Columbia Heights,
            Fridley, Blaine — are immediately accessible. Parking is
            never an issue: most homes have garages and driveways, and
            the residential streets have ample on-street parking.
          </p>
          <p>
            The honest summary: Northeast Park works well for people with
            cars, adequately for committed cyclists, and poorly for
            people who depend on transit or walking. If you don&apos;t
            drive or bike, this is not the neighborhood for you.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Northeast Park is changing slowly, and the changes it faces
            are the quiet kind — generational turnover, gradual
            diversification, incremental price appreciation — rather
            than the dramatic transformations affecting neighborhoods
            like Logan Park or the North Loop.
          </p>
        </Prose>

        <ArticleSubsection title="Generational Turnover">
          <Prose>
            <p>
              The most significant change in Northeast Park is the
              ongoing replacement of the neighborhood&apos;s aging
              homeowners with younger buyers. The original postwar
              families who built or bought here in the 1950s and 1960s
              are now in their 80s and 90s; as they pass away or move
              to assisted living, their houses come on the market and
              are purchased by younger families attracted by the
              affordability. This turnover is generally healthy — it
              brings investment in the housing stock and refreshes the
              community&apos;s age profile — but it also changes the
              social fabric. The neighborhood is becoming younger,
              slightly more diverse, and slightly less connected by
              the long-tenured relationships that defined the previous
              generation&apos;s community.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Price Discovery">
          <Prose>
            <p>
              Northeast Park&apos;s prices have risen over the past
              decade, driven by the broader appreciation of Northeast
              Minneapolis real estate and by the displacement of
              buyers from more expensive neighborhoods. The increases
              have been moderate compared to Logan Park or St. Anthony
              West — perhaps 40 to 60 percent over ten years versus
              80 to 100 percent in the hottest markets — but they are
              real, and they are slowly eroding the extreme affordability
              that has been the neighborhood&apos;s primary selling
              point. A house that sold for $180,000 in 2015 sells for
              $280,000 in 2025. That&apos;s still affordable by
              Minneapolis standards, but it&apos;s no longer the steal
              it was.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Infrastructure & Services">
          <Prose>
            <p>
              As a peripheral neighborhood in a city that concentrates
              its investment in more visible areas, Northeast Park
              sometimes receives less attention from city services
              than its residents feel it deserves. Street maintenance,
              park investment, and infrastructure improvements tend to
              prioritize the more dense, more trafficked, and more
              politically visible neighborhoods closer to downtown.
              This is a perennial complaint of edge neighborhoods in
              every city, and Northeast Park is no exception. The
              parks are maintained, the streets are plowed, the basics
              are covered — but the investments that transform
              neighborhoods (new park facilities, streetscape
              improvements, transit enhancements) tend to arrive last,
              if at all.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/northeast-park/parkway-view.webp"
        alt="A view along St. Anthony Parkway near Northeast Park with tree canopy and residential surroundings"
        caption="St. Anthony Parkway near Northeast Park — the Grand Rounds connection that gives this edge neighborhood its best outdoor amenity"
      />

      {/* FAQ */}
      <ArticleSection id="faq" title="Northeast Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
