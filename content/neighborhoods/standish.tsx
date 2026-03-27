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
    title: "Standish, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Standish, Minneapolis — the 38th Street corridor, diverse community, parks, schools, restaurants, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Standish",
  deck: "South Minneapolis between 38th and 42nd, Cedar and Hiawatha — Standish is a neighborhood where the 38th Street corridor hums with immigrant-owned businesses, the residential blocks hold their ground, and a genuinely diverse community makes daily life feel like the city at its most functional and least performative.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Standish?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Standish" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "The Hard Stuff" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Standish, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,200", label: "Residents (Niche / US Census)" },
      { value: "$280K–$390K", label: "Median home sale price range (2025 data)" },
      { value: "20 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.5 sq mi", label: "Neighborhood area" },
      { value: "1900s–30s", label: "Era most homes were built" },
      { value: "12–18 min", label: "Drive to downtown or MSP airport" },
      { value: "74", label: "Walk Score" },
      { value: "84", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Standish a good neighborhood in Minneapolis?",
      answer:
        "Standish is a solid, unpretentious neighborhood that offers genuine diversity, affordable housing, good park access, and strong transit connections via the Blue Line. It's not a destination neighborhood — it's a living neighborhood, and it works well for people who value practicality and diversity over polish and prestige.",
    },
    {
      question: "Is Standish, Minneapolis safe?",
      answer:
        "Standish's safety profile is comparable to other Longfellow-area neighborhoods — higher property crime than Southwest Minneapolis, but manageable by urban standards. Violent crime occurs but is concentrated rather than pervasive. The 38th Street corridor sees more activity than the residential interior. Residents describe it as a neighborhood where common-sense precautions — locking cars, knowing your neighbors — are sufficient for comfortable daily life.",
    },
    {
      question: "What is Standish known for?",
      answer:
        "Standish is known for the 38th Street corridor (a diverse commercial strip with immigrant-owned businesses), Standish Park (a neighborhood park with a rec center and athletic fields), its affordability relative to neighborhoods to the west, and its genuine racial and economic diversity. It's also increasingly known as a neighborhood where first-time buyers can still find single-family homes under $350,000.",
    },
    {
      question: "How much do homes cost in Standish?",
      answer:
        "Median home sale prices in Standish range from roughly $280,000 to $390,000. This puts Standish at or slightly below the citywide median of approximately $350,000–$375,000. Smaller bungalows start in the low $200,000s; larger or renovated homes can reach $400,000+. Standish is one of the more affordable options in south Minneapolis for buyers seeking a single-family home.",
    },
    {
      question: "Where exactly is Standish in Minneapolis?",
      answer:
        "Standish is in south Minneapolis, bounded roughly by East 38th Street to the north, Hiawatha Avenue to the east, East 42nd Street to the south, and Cedar Avenue to the west. It borders Cooper to the north, Hiawatha to the east, Ericsson to the southeast, and Nokomis to the south. The Blue Line light rail runs along Hiawatha Avenue on its eastern edge.",
    },
    {
      question: "What is the 38th Street corridor?",
      answer:
        "The 38th Street corridor in Standish and surrounding neighborhoods is a commercial strip that reflects the diversity of south Minneapolis — Somali restaurants, Mexican grocery stores, East African shops, and small service businesses serving a mixed community. It's more functional than fashionable, more authentic than curated, and it's where much of the neighborhood's daily commercial life happens.",
    },
    {
      question: "What schools serve Standish?",
      answer:
        "Standish is served by several Minneapolis Public Schools depending on address. Hiawatha Community School and Howe Elementary are common elementary options. South High School is the neighborhood high school. Families also access Minneapolis's magnet school system for alternative pathways, and charter and private options exist in the surrounding area.",
    },
    {
      question: "Is Standish walkable?",
      answer:
        "Yes. Standish earns a Walk Score of 74 and a Bike Score of 84. The 38th Street commercial corridor provides walkable access to shops and restaurants. The Blue Line stations at 38th Street and 46th Street are within walking distance. Daily errands are manageable on foot, and the bike infrastructure is strong.",
    },
    {
      question: "How is Standish different from Nokomis?",
      answer:
        "Standish and Nokomis share a border at 42nd Street, but they feel different. Nokomis orients itself around Lake Nokomis — the lake provides a visual and recreational anchor that shapes the neighborhood's identity. Standish is more urban, more diverse, more affordable, and oriented around the 38th Street corridor rather than a natural feature. Nokomis skews whiter and more affluent; Standish reflects a broader cross-section of south Minneapolis.",
    },
    {
      question: "Does Standish have good transit?",
      answer:
        "Yes. The Blue Line light rail on Hiawatha Avenue provides direct service to downtown Minneapolis (about 15 minutes), the airport, and the Mall of America. The 38th Street station is particularly convenient for Standish residents. Bus routes along 38th Street and Cedar Avenue supplement the rail service.",
    },
  ],
  nearby: [
    { name: "Cooper", slug: "cooper", description: "Brackett Park and Blue Line access to the north" },
    { name: "Hiawatha", slug: "hiawatha", description: "Lake Hiawatha and the Blue Line corridor" },
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis and a quieter residential feel" },
    { name: "Longfellow", slug: "longfellow", description: "Minnehaha Falls and a stronger commercial identity" },
    { name: "Corcoran", slug: "corcoran", description: "Diverse and affordable to the northwest" },
    { name: "Bancroft", slug: "bancroft", description: "Quiet residential between Bloomington and Cedar" },
  ],
  closing: {
    title: "What Makes Standish Worth Knowing",
    paragraphs: [
      "Standish is a neighborhood that doesn't perform its identity — it just has one. The 38th Street corridor with its Somali restaurants and Mexican bakeries isn't a curated diversity showcase; it's what happens when a neighborhood is affordable enough for immigrant families to open businesses. The residential blocks with their Craftsman bungalows and deep lots aren't preserved for aesthetic tourists; they're where working people live because the houses are solid and the mortgage is achievable. The park with its rec center and ball fields isn't programmed for Instagram; it's programmed for kids who need somewhere to go after school.",
      "In a Minneapolis that's increasingly stratified — wealthy neighborhoods getting wealthier, disinvested neighborhoods getting more disinvested — Standish occupies a middle ground that's both ordinary and increasingly rare. It's not fancy. It's not broken. It's a neighborhood where the daily mechanics of urban life work the way they're supposed to, for a broader cross-section of people than most neighborhoods can claim. That's not a slogan. It's just the truth.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday morning in September, 38th Street between Cedar and
          Hiawatha is doing what it does — functioning. Not performing, not
          branding, not waiting for a photographer from a lifestyle magazine.
          Functioning. A woman is buying injera from a Somali bakery while her
          daughter reads a book in the car. Two men are talking in Spanish
          outside a tienda. A cyclist threads between parked cars with a bag
          of groceries on his handlebars. The barber shop is already full. The
          laundromat is humming. Someone is loading a couch into a truck with
          the particular energy of a person who found it on Facebook Marketplace
          twenty minutes ago. Three blocks south, the residential streets are
          quiet in the way that south Minneapolis residential streets are
          always quiet on Saturday mornings — someone raking, someone walking
          a dog, a kid on a scooter going nowhere in particular. Standish
          doesn&apos;t announce itself. It doesn&apos;t have to. The people
          who live here know what it is, and the people who don&apos;t
          probably drove through on their way to somewhere else without
          noticing. That&apos;s fine. Standish has never needed the attention.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/standish/hero.webp"
        alt="38th Street commercial corridor in the Standish neighborhood of Minneapolis"
        caption="38th Street — Standish's commercial spine and the neighborhood's most diverse block"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Standish, Minneapolis?">
        <Prose>
          <p>
            Standish is a residential neighborhood in south Minneapolis,
            bounded roughly by East 38th Street to the north, Hiawatha Avenue
            (Highway 55) to the east, East 42nd Street to the south, and Cedar
            Avenue to the west. It covers about half a square mile and is home
            to approximately 5,200 residents. To the north lies{" "}
            <Link href="/neighborhoods/cooper" className="text-[#2a9d8f] hover:underline">
              Cooper
            </Link>
            . To the east, across Hiawatha Avenue,{" "}
            <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
              Hiawatha
            </Link>
            . To the south,{" "}
            <Link href="/neighborhoods/nokomis" className="text-[#2a9d8f] hover:underline">
              Nokomis
            </Link>
            .
          </p>
          <p>
            Standish is named for Myles Standish, the Plymouth Colony military
            leader — a naming convention from an era when Minneapolis
            neighborhoods were christened with the names of historical figures
            without much regard for local connection. There&apos;s nothing
            Pilgrim about Standish in 2026. What there is, instead, is a
            neighborhood that reflects the demographic reality of contemporary
            south Minneapolis more accurately than most: racially diverse,
            economically mixed, anchored by a solid park, served by decent
            transit, and affordable enough that a wider range of people can
            actually live here.
          </p>
          <p>
            The 38th Street corridor along the neighborhood&apos;s northern
            edge is the commercial and cultural backbone. It&apos;s not a
            curated restaurant row or a boutique shopping district — it&apos;s
            a working commercial strip where immigrant-owned businesses serve
            a diverse clientele, where the signage is in multiple languages,
            and where the food is authentic because it&apos;s cooked by
            people who grew up eating it. South of 38th, the neighborhood
            settles into the residential pattern that defines most of south
            Minneapolis: tree-lined streets, modest early-20th-century homes,
            deep lots, and the kind of lived-in stability that comes from
            blocks where people have been raising families for decades.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Standish Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/standish/neighborhood-sign.webp"
          alt="Standish neighborhood sign in Minneapolis"
          caption="The Standish neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Standish History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part
            of the territory centered around Bdote, the sacred confluence of
            the Mississippi and Minnesota Rivers. The Dakota people lived,
            traveled, and gathered across these prairies and woodlands for
            centuries before treaties and forced removal in the 1850s and 1860s
            reshaped the landscape. The flatlands of south Minneapolis were
            part of the broader Dakota world, and the ground here carries a
            history that predates every house sitting on it.
          </p>
          <p>
            European settlement came to this area gradually through the late
            19th century. The land was initially farmland — part of the
            agricultural patchwork that surrounded Minneapolis as the city
            expanded outward from the river and the mills. The extension of
            streetcar lines along Cedar Avenue and Minnehaha Avenue made
            residential development feasible by the early 1900s, and
            Standish&apos;s blocks filled in primarily between 1900 and 1930.
          </p>
          <p>
            The housing stock from this era tells the story of who built the
            neighborhood: working-class families, many of Scandinavian and
            German descent, who worked in the mills, the railroad, and the
            trades. The homes are modest — Craftsman bungalows, simple
            two-story frame houses, the occasional Cape Cod — built to be
            functional rather than fashionable. These were houses for people
            who needed three bedrooms, a kitchen, a yard for the kids, and
            not much else. The lots are deep, the construction is solid, and
            the lack of pretension is baked into the architecture itself.
          </p>
          <p>
            Standish Park was established in the early 20th century and
            quickly became the neighborhood&apos;s anchor. The park, the
            school, and the church formed the trinity of community life that
            defined working-class south Minneapolis for most of the century.
            The neighborhood was stable, predictable, and self-contained — the
            kind of place where your neighbor worked at the same factory you
            did and your kids went to the same school and you all showed up
            at the same park on the same summer evenings.
          </p>
          <p>
            The mid-to-late 20th century brought changes. The construction of
            Hiawatha Avenue as a high-speed arterial reshaped the eastern edge.
            White flight to the suburbs thinned the population. And beginning
            in the 1980s, the neighborhood began to diversify — Hmong families
            arriving after the Vietnam War, Latino families from Mexico and
            Central America, East African families (particularly Somali) from
            the 1990s onward. This demographic shift transformed Standish
            from a homogeneous working-class white neighborhood into one of the
            most genuinely diverse neighborhoods in Minneapolis. The commercial
            strip along 38th Street changed accordingly — Scandinavian
            businesses gave way to Somali restaurants, Mexican grocery stores,
            East African shops, and the multicultural commercial landscape
            that defines the corridor today.
          </p>
          <p>
            The events of 2020 — George Floyd&apos;s murder, the subsequent
            unrest, and the ongoing reckoning — touched Standish directly. The
            neighborhood sits close enough to 38th and Chicago (the site of
            Floyd&apos;s murder) that the reverberations were felt in daily
            life: protest marches, community meetings, difficult conversations
            about policing and race and what neighborhoods owe each other.
            Standish is still processing that moment, as is much of
            Minneapolis, and any honest account of the neighborhood has to
            acknowledge that 2020 changed things in ways that are still
            unfolding.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Standish">
        <Prose>
          <p>
            Living in Standish means living in a neighborhood that looks like
            the city it&apos;s part of — not the Minneapolis of the lake
            neighborhoods and Southwest dinner parties, but the Minneapolis of
            working families, immigrant entrepreneurs, and people who chose a
            neighborhood because they could afford it and then stayed because
            it turned out to be a real community. The diversity here is
            structural rather than aspirational. Standish is diverse because
            its housing is affordable enough to be accessible to people who
            don&apos;t earn six-figure salaries, and the result is a
            neighborhood where the block party potluck includes sambusas,
            tamales, hot dish, and whatever the new neighbors from Myanmar
            decided to bring.
          </p>
          <p>
            The residential blocks south of 38th Street are calm and well-
            maintained — not manicured in the Southwest Minneapolis sense, but
            tidy in the way that blocks are tidy when the people who live
            there care about their homes without making a performance of it.
            Gardens are common. Porches are used. Kids ride bikes after school.
            The rhythms are seasonal and predictable: yard work in spring,
            grilling in summer, raking in fall, shoveling in winter. The
            basics of residential life, executed without drama.
          </p>
          <p>
            Standish Park is the community&apos;s physical center — a
            well-used park with a recreation center, ball fields, a
            playground, and winter skating. The rec center runs programming
            that serves the neighborhood&apos;s diverse population: youth
            sports, after-school care, ESL classes, community meetings,
            fitness programs. The park is where neighbors meet neighbors,
            where kids from different backgrounds end up on the same soccer
            team, where the neighborhood association holds its events. In a
            neighborhood without a commercial center or a natural landmark,
            the park is what makes Standish a community rather than just a
            collection of residential blocks.
          </p>
          <p>
            The 38th Street corridor provides the commercial energy that the
            residential interior lacks. Walking 38th Street on any given day
            is a lesson in the actual economics of urban diversity — the small
            businesses here exist because there are customers who need what
            they sell, not because a developer identified a demographic and
            built a concept around it. The Somali tea shop exists because Somali
            families live here. The Mexican bakery exists because Mexican
            families live here. The business ecology is organic, responsive,
            and constantly shifting as the neighborhood&apos;s demographics
            evolve.
          </p>
          <p>
            There&apos;s a groundedness to Standish that contrasts with the
            more self-conscious neighborhoods to the west and north. People
            here don&apos;t talk about their neighborhood the way Uptown
            residents or Northeast residents talk about theirs — as an
            identity, a brand, a lifestyle choice. Standish is where they
            live. The house was affordable. The park is good. The bus comes.
            That&apos;s the pitch, and for the people who live here, it&apos;s
            enough.
          </p>
        </Prose>
        <Quote
          text="I didn&apos;t move to Standish because it was trendy. I moved here because I could buy a house and my kids could walk to school and the neighbors are good people. The trendy neighborhoods are for people with different budgets."
          cite="Standish homeowner, 8 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Standish Food, Drink & Local Spots">
        <Prose>
          <p>
            The food scene in Standish is defined by the 38th Street corridor —
            a commercial strip that won&apos;t win any design awards but will
            feed you honestly, affordably, and in ways that reflect the actual
            cultural composition of south Minneapolis. The interior of Standish
            is residential; the eating happens at the edges.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/standish/38th-street.webp"
          alt="Businesses along 38th Street in Standish neighborhood"
          caption="38th Street — where the food is authentic because the cooks are the community"
        />

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "38th Street Somali Restaurants", tag: "East African", price: "$", description: "Several Somali restaurants along the 38th Street corridor serve goat, chicken suqaar, sambusas, and rice plates at prices that make most Minneapolis restaurants look exploitative. The specific names rotate — some close, new ones open — but the food remains consistently good and consistently affordable." }} />
          <PlaceCardComponent place={{ name: "El Nuevo Rodeo", tag: "Mexican", price: "$", description: "Near the 38th Street corridor. A longtime fixture for Mexican food in south Minneapolis — tortas, tacos, weekend specials. The weekend crowd includes families who've been coming for years." }} />
          <PlaceCardComponent place={{ name: "Minnehaha Avenue Shops", tag: "Various", price: "$–$$", description: "The stretch of Minnehaha Avenue near Standish hosts a mix of small businesses — coffee shops, neighborhood restaurants, and service businesses that serve the Longfellow-area neighborhoods." }} />
          <PlaceCardComponent place={{ name: "Hi-Lo Diner", tag: "Diner", price: "$$", url: "https://www.hi-lo-diner.com", description: "4020 E. Lake Street. A short trip north of Standish. A retro diner in a 1957 dining car with elevated comfort food. The kind of place that bridges Standish's practicality with something a little more designed." }} />
          <PlaceCardComponent place={{ name: "Local Grocery Stores", tag: "Grocery", price: "$", description: "Small grocery stores along 38th Street and Cedar Avenue carry specialty ingredients — halal meats, East African spices, Mexican dried chiles, Southeast Asian produce. These aren't boutique shops; they're essential infrastructure for a neighborhood that cooks from multiple culinary traditions." }} />
        </ArticleSubsection>

        <ArticleSubsection title="The Real Food Economy">
          <Prose>
            <p>
              The honest truth about Standish&apos;s food scene is that it&apos;s
              built for residents, not visitors. The restaurants along 38th
              Street serve the people who live within a mile, and they price
              accordingly — $8 rice plates, $5 sambusa combos, $10 torta
              platters. This is not the kind of dining that generates reviews
              on Eater or makes &quot;best of&quot; lists. It&apos;s the kind
              of dining that feeds a neighborhood, and it does that job well.
              If you want a tasting menu and a wine pairing, you&apos;re in
              the wrong neighborhood. If you want food that tastes like
              someone&apos;s mother made it, you&apos;re in the right one.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Standish">
        <Prose>
          <p>
            Standish has solid park access anchored by its namesake park and
            connected to the broader south Minneapolis trail network.
          </p>
        </Prose>
        <ArticleSubsection title="Standish Park">
          <Prose>
            <p>
              Standish Park is a 5-acre neighborhood park with a recreation
              center, ball fields, a playground, basketball courts, and open
              green space. The rec center offers year-round programming —
              youth sports, after-school activities, community meetings, and
              seasonal events. The playground was updated in recent years and
              draws families from across the neighborhood. In winter, the
              park maintains an ice skating rink. Standish Park isn&apos;t
              Minneapolis&apos;s most scenic park — it doesn&apos;t have a
              lake or a waterfall or a historic garden — but it does what
              neighborhood parks are supposed to do: provide a place for the
              community to gather, play, and connect.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/standish/standish-park.webp"
            alt="Standish Park recreation center and playground"
            caption="Standish Park — the neighborhood's physical and social center"
          />
        </ArticleSubsection>
        <ArticleSubsection title="Lake Nokomis">
          <Prose>
            <p>
              Lake Nokomis is just south of Standish&apos;s border — a short
              bike ride or a longer walk. The lake offers a swimming beach,
              walking and biking paths, fishing, and the kind of lake access
              that makes Minneapolis&apos;s park system nationally famous.
              Nokomis is smaller and less crowded than Lake Harriet or Bde
              Maka Ska, which is part of its appeal. Standish residents use
              the lake regularly without having to pay the premium of living
              in the immediate lakeside neighborhoods.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Trail Network">
          <Prose>
            <p>
              Standish connects to the broader Minneapolis trail network via
              the Hiawatha corridor, the Minnehaha Creek trail (accessible to
              the north), and the lakeside paths around Nokomis and Hiawatha.
              The Midtown Greenway is a few miles north — accessible by bike
              for commuting or recreation. The Bike Score of 84 reflects
              genuinely good cycling infrastructure, including bike lanes on
              key corridors and connections to the city&apos;s trail system.
              For a neighborhood at this price point, the outdoor access is
              a genuine selling point.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Standish Schools">
        <Prose>
          <p>
            Standish&apos;s school landscape is part of the broader south
            Minneapolis public school system — a system with real strengths
            in diversity and extracurricular programming, and real challenges
            in test scores and resource allocation.
          </p>
          <p>
            Elementary options for Standish families include Hiawatha
            Community School and nearby schools depending on exact address.
            These are neighborhood schools serving diverse student bodies,
            with dedicated staff working within a system that faces
            significant resource constraints. Test scores at these schools
            tend to be below state averages — a reflection of the
            socioeconomic complexity of the student body rather than a simple
            indictment of the schools themselves.
          </p>
          <p>
            South High School serves as the neighborhood high school. South
            is one of Minneapolis&apos;s most diverse high schools, with a
            student body that reflects the racial, ethnic, and economic
            reality of south Minneapolis. The school has strong programs in
            arts, career and technical education, and athletics. Its
            diversity is a genuine asset for students who benefit from
            learning alongside classmates from different backgrounds — a
            form of education that no textbook can replicate.
          </p>
          <p>
            Minneapolis&apos;s magnet school system provides alternatives
            for families seeking specialized programs, and many Standish
            families take advantage of the citywide options. Charter schools
            and private schools are also available in the surrounding area.
            The school decision in Standish is not simple — it requires
            research, visits, and honest assessment of what matters most
            to your family.
          </p>
        </Prose>
        <ImageSlot
          src="/images/neighborhoods/standish/neighborhood-street.webp"
          alt="Residential street in Standish with bungalow homes"
          caption="Standish's residential blocks — modest, solid, and built for families"
        />
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Standish Real Estate & Housing">
        <Prose>
          <p>
            Standish is one of the more affordable neighborhoods in south
            Minneapolis for single-family homebuyers. Median sale prices
            range from approximately $280,000 to $390,000 — at or slightly
            below the citywide median. For buyers priced out of Southwest
            Minneapolis or the lake neighborhoods, Standish offers the
            chance to own a solid early-20th-century home with a real yard
            for something close to the cost of a condo in Uptown.
          </p>
          <p>
            Homes sell at a moderate pace — roughly 20 days on market in
            2025. This is slower than the competitive Southwest neighborhoods
            but consistent with the broader south Minneapolis market.
            Bidding wars are less common here, and buyers generally have
            more negotiating room than they would in Fulton or Linden Hills.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($230,000–$300,000), you&apos;re looking at
              small bungalows with original features — one bathroom, a
              narrow kitchen, maybe an unfinished basement with laundry. These
              homes need cosmetic work but are structurally sound. The mid-range
              ($300,000–$390,000) gets you a three-bedroom house with some
              updates — a remodeled kitchen, replacement windows, a finished
              basement or a deck. Above $390,000, you&apos;re into larger homes,
              extensive renovations, or occasional new construction.
            </p>
            <p>
              The housing stock is overwhelmingly early 20th century — built
              between 1900 and 1930, in the Craftsman bungalow and simple
              two-story frame styles that define working-class south
              Minneapolis. The construction is honest: hardwood floors, plaster
              walls, solid foundations. The lots are generous — deep backyards
              are a Standish hallmark. Most homes are modest in square footage
              (1,000–1,500 square feet) but feel larger than the numbers
              suggest because of the lot size and the room to expand.
            </p>
            <p>
              Buyers should pay attention to location within the neighborhood.
              Blocks closest to Hiawatha Avenue are noisier and typically
              cheaper. The quietest, most desirable blocks are in the center
              of the neighborhood, near Standish Park. The northern edge along
              38th Street gets commercial traffic and associated noise. As with
              Cooper to the north, the internal geography of Standish matters
              more than the neighborhood-level averages suggest.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="First-time buyers who think south Minneapolis means half a million dollars haven&apos;t looked at Standish. The houses are real, the lots are big, and the numbers work." cite="Standish listing agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Standish">
        <Prose>
          <p>
            Standish has better transit access than most south Minneapolis
            neighborhoods, thanks to the Blue Line light rail running along
            Hiawatha Avenue. The 38th Street station is the most convenient
            for Standish residents, putting downtown Minneapolis approximately
            15 minutes away by rail. MSP airport is about 12 minutes south
            on the same line. The Mall of America is at the end of the line.
          </p>
          <p>
            Walk Score is 74 — good for a south Minneapolis residential
            neighborhood. The 38th Street corridor provides walkable access
            to grocery stores, restaurants, and services. Standish Park is
            walkable from most addresses. The Bike Score of 84 reflects
            strong cycling infrastructure — bike lanes, trail connections,
            and a cycling culture that makes two-wheeled commuting practical.
          </p>
          <p>
            Bus routes along 38th Street and Cedar Avenue supplement the
            rail service. The Route 23 bus along 38th Street connects east
            to the Blue Line and west to Uptown and the lake neighborhoods —
            a crosstown route that&apos;s useful for residents who don&apos;t
            work downtown.
          </p>
          <p>
            For car-based commuting, Standish is centrally located in south
            Minneapolis with good access to Hiawatha Avenue and I-35W.
            Downtown is 12–18 minutes depending on traffic. The airport is
            similarly accessible. Most residents own a car but use transit
            regularly enough that the Blue Line is a genuine part of daily
            life rather than a theoretical amenity.
          </p>
        </Prose>
        <ImageSlot
          src="/images/neighborhoods/standish/transit.webp"
          alt="Blue Line light rail near Standish neighborhood"
          caption="The Blue Line on Hiawatha — Standish's express route to downtown and the airport"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="The Hard Stuff">
        <Prose>
          <p>
            Standish has real challenges. Naming them honestly is more
            respectful than glossing over them.
          </p>
        </Prose>
        <ArticleSubsection title="Crime & Safety Perceptions">
          <Prose>
            <p>
              Standish&apos;s crime rates are higher than Southwest Minneapolis
              — a fact that shapes perceptions of the neighborhood more than
              any other single factor. Property crime is the most visible
              issue: vehicle break-ins, catalytic converter thefts, package
              theft. Violent crime exists but is concentrated in specific
              locations rather than evenly distributed. The 38th Street
              corridor sees more incidents than the residential interior.
              The perception of crime often exceeds the reality for people
              living on quiet residential blocks, but the perception matters —
              it affects property values, school enrollment decisions, and
              the narratives that outsiders build about the neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The 2020 Impact">
          <Prose>
            <p>
              George Floyd&apos;s murder occurred at 38th and Chicago — close
              enough to Standish that the impact was direct and personal. The
              unrest, the protests, the conversations about policing and race,
              the disruption to commercial corridors — all of it touched
              Standish. Some businesses on or near 38th Street were damaged.
              Some residents left. Others doubled down on community engagement.
              The neighborhood is still navigating the aftermath, and any
              honest description of Standish in 2026 has to acknowledge that
              2020 is part of the story — not the whole story, but an
              inescapable chapter.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Commercial Fragility">
          <Prose>
            <p>
              The small businesses along 38th Street that give Standish its
              commercial character are also fragile. Immigrant-owned
              businesses operate on thin margins, and the combination of
              rising rents, inflation, and the lingering effects of 2020&apos;s
              disruptions has made survival harder. When a Somali restaurant
              or a Mexican bakery closes, it doesn&apos;t get replaced by
              another version of itself — it might get replaced by a chain,
              or it might sit vacant. The commercial ecosystem that makes
              38th Street authentic is also the commercial ecosystem most
              vulnerable to economic pressure.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Gentrification Pressure">
          <Prose>
            <p>
              Standish&apos;s affordability is its greatest strength and its
              greatest vulnerability. As housing costs rise across
              Minneapolis, more buyers are looking at neighborhoods like
              Standish — and when wealthier buyers move in, the price floor
              rises. The dynamic is slower here than in more fashionable
              neighborhoods, but it&apos;s visible: flipped bungalows selling
              at $400,000+, rental prices creeping up, longtime renters
              getting squeezed. The diversity that defines Standish exists
              because the housing is affordable. If affordability erodes,
              the diversity follows.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Standish FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
