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
    title: "Kenwood, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Kenwood, Minneapolis — Lake of the Isles, historic estates, Walker Art Center proximity, parks, schools, housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Kenwood",
  deck: "Old money, old trees, old houses — and one of the most quietly beautiful urban settings in America. Kenwood wraps around Lake of the Isles with the confidence of a neighborhood that has never needed to prove anything to anyone.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Kenwood?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Kenwood" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Lakes" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Kenwood, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,500", label: "Residents (Niche / US Census)" },
      { value: "$750K–$1.2M", label: "Median home sale price range (2025 data)" },
      { value: "18 days", label: "Average time on market (Redfin, 2025)" },
      { value: "2 lakes", label: "Lake of the Isles & Cedar Lake on the border" },
      { value: "1900s–20s", label: "Era most homes were built" },
      { value: "10–15 min", label: "Drive to downtown or Uptown" },
      { value: "68", label: "Walk Score" },
      { value: "92", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Kenwood a good neighborhood in Minneapolis?",
      answer:
        "Yes — Kenwood is one of the most prestigious and desirable neighborhoods in Minneapolis. It offers Lake of the Isles frontage, proximity to the Walker Art Center and Minneapolis Sculpture Garden, historic architecture, excellent schools, and a quiet, established residential character. It consistently ranks among the top neighborhoods in the Twin Cities.",
    },
    {
      question: "Is Kenwood, Minneapolis safe?",
      answer:
        "Kenwood is one of the safest neighborhoods in Minneapolis. Violent crime is extremely rare. Property crime — primarily vehicle break-ins and package theft — occurs occasionally, consistent with broader trends across Southwest Minneapolis. The neighborhood's low density and strong community networks contribute to its safety profile.",
    },
    {
      question: "What is Kenwood, Minneapolis known for?",
      answer:
        "Kenwood is known for its grand historic homes along Lake of the Isles, its proximity to the Walker Art Center and Minneapolis Sculpture Garden, its mature tree canopy, and its status as one of the wealthiest residential areas in the city. It is also known as the home of the fictional Mary Tyler Moore house — the Victorian at 2104 Kenwood Parkway that appeared in the opening credits of The Mary Tyler Moore Show.",
    },
    {
      question: "How much do homes cost in Kenwood, Minneapolis?",
      answer:
        "Kenwood is one of the most expensive neighborhoods in Minneapolis. Median sale prices in 2025 ranged from roughly $750,000 to over $1.2 million. Lakefront properties and the largest historic estates regularly exceed $2 million. Even smaller homes and condos in the neighborhood typically start above $400,000.",
    },
    {
      question: "Is Kenwood walkable?",
      answer:
        "Kenwood is highly walkable for recreation — the lake trails and park system are outstanding. For daily errands and shopping, walkability is more limited because Kenwood has no commercial district of its own. Residents walk or bike to Uptown, Linden Hills, or the Hennepin Avenue corridor for restaurants, groceries, and shopping. The Bike Score of 92 reflects excellent trail access.",
    },
    {
      question: "What schools serve Kenwood, Minneapolis?",
      answer:
        "Kenwood is served by Kenwood Elementary School (K–5), which is well-regarded and earns strong ratings. Middle school is typically West or Anthony Middle School, and the high school is Southwest Senior High, an International Baccalaureate World School. Private options including the Blake School and Breck School are nearby.",
    },
    {
      question: "Where exactly is Kenwood in Minneapolis?",
      answer:
        "Kenwood is in Southwest Minneapolis, bounded roughly by Cedar Lake and Interstate 394 to the north, Hennepin Avenue to the east, West Lake Street and the Midtown Greenway to the south, and Cedar Lake Parkway to the west. It borders Lowry Hill to the east, Cedar - Isles - Dean to the west, East Isles to the southeast, and Bryn Mawr to the north.",
    },
    {
      question: "What is the Mary Tyler Moore house in Kenwood?",
      answer:
        "The Victorian house at 2104 Kenwood Parkway was featured in the opening credits of The Mary Tyler Moore Show (1970–1977) as Mary Richards' apartment building. It is privately owned and not open to visitors, but it remains one of the most photographed houses in Minneapolis. The current owners have, understandably, requested that tourists respect their privacy.",
    },
    {
      question: "Is Kenwood a good place to raise a family?",
      answer:
        "Kenwood is an excellent family neighborhood for those who can afford it. Kenwood Elementary is strong, the parks and lakes provide abundant outdoor recreation, the streets are safe and quiet, and the community is stable. The main drawback for families is the cost of entry — housing prices are among the highest in the city.",
    },
    {
      question: "How far is Kenwood from downtown Minneapolis?",
      answer:
        "Kenwood is approximately 10–15 minutes from downtown Minneapolis by car. The Walker Art Center and Sculpture Garden sit on the neighborhood's eastern edge, essentially bridging Kenwood to downtown. Bus routes along Hennepin Avenue provide transit access, and the Chain of Lakes trail system connects to downtown via the bike network.",
    },
  ],
  nearby: [
    { name: "East Isles", slug: "east-isles", description: "Lake of the Isles' east shore and Uptown access" },
    { name: "Cedar - Isles - Dean", slug: "cedar-isles-dean", description: "Cedar Lake, Kenilworth Trail, and quiet streets" },
    { name: "Lowry Hill", slug: "lowry-hill", description: "Historic mansions and Walker Art Center" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "Cedar Lake's north shore and Theodore Wirth Park" },
    { name: "Linden Hills", slug: "linden-hills", description: "Boutique shopping and Lake Harriet" },
    { name: "South Uptown", slug: "south-uptown", description: "Urban energy near Bde Maka Ska" },
  ],
  closing: {
    title: "What Makes Kenwood Irreplaceable",
    paragraphs: [
      "Kenwood does not try to be exciting. It does not have a commercial district, a nightlife scene, or a brand identity built on Instagram moments. What it has is something harder to manufacture: a setting of extraordinary natural beauty within a major American city, anchored by one of the most elegant urban lakes in the country, surrounded by homes that were built when craftsmanship was assumed rather than marketed, and maintained by a community that values quiet stewardship over visible transformation. The Walker Art Center sits at the edge of the neighborhood like a reminder that culture and wealth have always been neighbors here.",
      "The cost of this elegance is real — in dollars, in demographic exclusion, in a conservatism that can resist needed change. Kenwood is not for everyone, financially or temperamentally. But for those who live here — walking the Lake of the Isles loop on a October morning when the maples are turning, or watching the sun set behind Cedar Lake from a screened porch that has been in the same family for three generations — this neighborhood offers a quality of daily life that is genuinely difficult to replicate anywhere else in the Upper Midwest.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a still evening in October, Lake of the Isles reflects the
          surrounding maples so perfectly that the water disappears — it becomes
          a second sky, burning orange and red beneath the walking path. The
          houses along the parkway watch this happen every year: Prairie School
          mansions, Tudor revivals, stucco colonials with leaded glass windows
          and gardens that have been tended for a century. Nobody rushes. A
          great blue heron stands motionless on the island. Joggers circle the
          lake in the fading light. This is Kenwood at its most characteristic
          — beautiful, unhurried, and completely aware of what it has.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/kenwood/hero.webp"
        alt="Lake of the Isles on an autumn evening with historic Kenwood homes reflected in the water"
        caption="Lake of the Isles — the quiet center of Kenwood's identity"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Kenwood, Minneapolis?">
        <Prose>
          <p>
            Kenwood is a small, affluent residential neighborhood in Southwest
            Minneapolis, wrapped around the western and northern shores of Lake
            of the Isles and extending west to Cedar Lake. Roughly 3,500 people
            live here — making it one of the smaller neighborhoods in the city
            by population — but its physical footprint is outsized, thanks to
            the lakes and parks that define its borders. The Walker Art Center
            and Minneapolis Sculpture Garden sit at its eastern edge. Interstate
            394 forms its northern boundary. The Midtown Greenway and West Lake
            Street mark its southern border.
          </p>
          <p>
            There is no commercial district in Kenwood. No coffee shop on the
            corner, no restaurant row, no boutique strip. This is by design,
            or at least by long-standing preference: Kenwood is purely
            residential, and its residents have historically preferred it that
            way. For shopping, dining, and nightlife, Kenwoodites walk or drive
            to adjacent{" "}
            <Link href="/neighborhoods/lowry-hill-east" className="text-[#2a9d8f] hover:underline">
              Lowry Hill East
            </Link>{" "}
            (Wedge), Uptown, or the{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>{" "}
            commercial district. What Kenwood offers instead is landscape:
            two lakes, a world-class art museum, and some of the most
            architecturally significant residential streets in Minnesota.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Kenwood Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/kenwood/neighborhood-sign.webp"
          alt="Kenwood neighborhood sign in Minneapolis"
          caption="The Kenwood neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Kenwood History & Origins">
        <Prose>
          <p>
            The land that became Kenwood was part of the ancestral homeland of
            the Dakota people. Lake of the Isles — Bde Unma in the Dakota
            language — and Cedar Lake were important sites for fishing, wild
            rice harvesting, and seasonal camps long before European-American
            settlement. The lakes and their surrounding wetlands were part of a
            connected water system that the Dakota understood as a living
            landscape, not a series of discrete amenities. That relationship
            was severed by forced removal and the subsequent reshaping of the
            land for settler purposes.
          </p>
          <p>
            European-American development of the Kenwood area began in earnest
            in the 1880s and 1890s, when the expanding streetcar network made
            the land around the lakes accessible to the city&apos;s growing
            professional class. The neighborhood takes its name from the
            Kenwood Parkway, which was developed as part of the Minneapolis
            park system&apos;s ambitious plan to connect the city&apos;s lakes
            with grand boulevards. The Minneapolis Park Board, under the
            influence of landscape architect Horace Cleveland, envisioned a
            continuous chain of parks and parkways linking the lakes — a vision
            that shaped Kenwood&apos;s character permanently.
          </p>
          <p>
            Lake of the Isles itself was dramatically reshaped in the early
            1900s. What had been a marshy, irregular body of water was dredged,
            deepened, and given clean shorelines. Two artificial islands were
            created from the dredged material. The parkway was constructed
            around the lake, and the lots facing it became the most desirable
            residential addresses in the neighborhood. The homes built along
            the parkway in the 1900s and 1910s — designed by prominent
            Minneapolis architects including Purcell &amp; Elmslie, William
            Kenyon, and Edwin Lundie — represent some of the finest residential
            architecture in Minnesota.
          </p>
          <p>
            Unlike many Minneapolis neighborhoods, Kenwood never experienced
            significant decline or reinvention. It was built as an affluent
            residential enclave, and it has remained one continuously for more
            than a century. The homes have been maintained, the park system has
            been preserved, and the neighborhood&apos;s character — quiet,
            green, prosperous, private — has been remarkably stable. That
            stability is both Kenwood&apos;s greatest strength and the source
            of its most persistent criticism.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Kenwood">
        <Prose>
          <p>
            Kenwood is the quietest neighborhood in Minneapolis that is not
            actually remote. The streets are wide, tree-lined, and often
            strikingly empty of pedestrian traffic, despite being minutes from
            Uptown and downtown. Houses sit behind deep setbacks and mature
            landscaping. Front yards are large by city standards. The
            prevailing sound is birdsong and, on summer weekends, the distant
            hum of activity from the lake trails. It feels like a different
            city from the Hennepin Avenue corridor a half-mile east.
          </p>
          <p>
            The social fabric is private and established. Kenwood does not have
            the visible community rituals of{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>{" "}
            — no commercial district to bump into neighbors, no annual festival
            that draws the whole neighborhood out. Community life here is more
            likely to happen through school connections, the Kenwood
            Neighborhood Organization, block parties, and the informal networks
            that form when people live in the same place for decades. Long
            tenure is common. Families buy in Kenwood and stay.
          </p>
          <p>
            The demographic profile is wealthy, white, and highly educated.
            Household incomes are among the highest in the city. Professional
            careers — medicine, law, finance, corporate leadership — are
            disproportionately represented. The political orientation is
            generally progressive, but with a pragmatic, establishment quality
            that distinguishes it from more activist-oriented neighborhoods.
            Kenwood residents donate to the Walker, serve on nonprofit boards,
            and support the park system with genuine commitment. It is a
            neighborhood of stewards, not revolutionaries.
          </p>
          <p>
            The Mary Tyler Moore house — the Victorian at 2104 Kenwood
            Parkway, famous from the opening credits of the 1970s television
            show — still draws occasional tourists. The current owners have
            requested privacy, and the neighborhood has rallied around that
            request with characteristic discretion. It is, in some ways, a
            perfect Kenwood story: something nationally famous happening
            quietly behind a hedge.
          </p>
        </Prose>
        <Quote
          text="Kenwood is where Minneapolis keeps its best-kept secret: you can live on a lake, walk to a world-class art museum, and be downtown in ten minutes. People who live here don't talk about it much. That's the point."
          cite="Long-term Kenwood resident"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Kenwood Food, Drink & Local Spots">
        <Prose>
          <p>
            Kenwood has no commercial district — no restaurants, no coffee
            shops, no retail of its own. This is unusual for a Minneapolis
            neighborhood but consistent with Kenwood&apos;s identity as a
            purely residential enclave. Dining and shopping happen in the
            surrounding neighborhoods, all of which are easily accessible by
            car, bike, or on foot.
          </p>
        </Prose>

        <ArticleSubsection title="Where Kenwood Residents Eat & Shop">
          <PlaceCardComponent place={{ name: "Kenwood Restaurant", tag: "New American", price: "$$$", description: "2115 W. 21st Street. Despite the name, this restaurant sits just across the border in Lowry Hill — but it is Kenwood's de facto neighborhood restaurant. A refined, seasonal menu in a warm, intimate setting. The brunch is excellent. Locals consider it their living room restaurant." }} />
          <PlaceCardComponent place={{ name: "Walker Art Center & Sculpture Garden", tag: "Museum", price: "$$", url: "https://walkerart.org", description: "725 Vineland Place. Not a restaurant, but essential Kenwood-adjacent culture. The Walker is one of the top contemporary art museums in the country. The Minneapolis Sculpture Garden — featuring Claes Oldenburg's iconic Spoonbridge and Cherry — is free and open daily. The museum's restaurant and events programming add a layer of cultural life that most residential neighborhoods lack." }} />
          <PlaceCardComponent place={{ name: "Uptown & Hennepin Avenue", tag: "Dining District", description: "A five-minute drive or fifteen-minute walk east puts Kenwood residents in Uptown and along the Hennepin Avenue corridor, with dozens of restaurants, bars, and cafes. The concentration of dining options along Hennepin, Lake Street, and in Lowry Hill East serves as Kenwood's extended commercial ecosystem." }} />
          <PlaceCardComponent place={{ name: "Linden Hills Commercial District", tag: "Shopping & Dining", description: "The 43rd & Upton district in Linden Hills — with Tilia, Sebastian Joe's, Wild Rumpus, and a cluster of independent shops — is a short drive or bike ride south along the lake trails. Many Kenwood families treat Linden Hills as their go-to neighborhood commercial center." }} />
          <PlaceCardComponent place={{ name: "Kowalski's Market (Uptown)", tag: "Grocery", price: "$$", description: "Located on Hennepin Avenue near Kenwood's eastern border. A locally owned upscale grocery that serves as the primary grocery store for many Kenwood households. High-quality produce, prepared foods, and a wine selection that matches the neighborhood's expectations." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Lakes Near Kenwood">
        <Prose>
          <p>
            Kenwood&apos;s park and lake access is exceptional — arguably the
            best of any residential neighborhood in Minneapolis. Two major
            lakes, a world-class sculpture garden, and seamless connections to
            the Grand Rounds trail system make outdoor recreation not just
            convenient but central to daily life.
          </p>
        </Prose>

        <ArticleSubsection title="Lake of the Isles">
          <Prose>
            <p>
              Lake of the Isles is Kenwood&apos;s defining feature — a
              110-acre lake with two wooded islands, encircled by a 2.8-mile
              paved path and one of the most beautiful parkways in the
              Minneapolis park system. The lake is shallow and marshy in
              places, which limits swimming but creates excellent bird habitat:
              great blue herons, egrets, and wood ducks are commonly spotted.
              In winter, the lake freezes for skating and cross-country skiing.
              The parkway homes facing the lake — with their deep lawns
              sloping to the water — create a streetscape that feels more like
              a lakeside resort than a city neighborhood. The 2.8-mile loop is
              one of the most popular walking and running routes in
              Minneapolis, busy at dawn and dusk but never overcrowded the way
              Bde Maka Ska can be.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Cedar Lake">
          <Prose>
            <p>
              Cedar Lake borders Kenwood to the west and offers a wilder, less
              manicured counterpart to Lake of the Isles. The Cedar Lake Trail
              and the surrounding parkland feel more wooded and secluded —
              it&apos;s possible to forget you&apos;re in a major city. A small
              public beach on the lake&apos;s south shore provides swimming
              access. Cedar Lake is also known for its hidden beach on the
              north shore, historically clothing-optional and beloved by those
              who know it. The Kenilworth Trail runs along Cedar Lake&apos;s
              eastern shore, connecting the Chain of Lakes to the Cedar Lake
              Trail and, eventually, to Theodore Wirth Park and the western
              suburbs.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Minneapolis Sculpture Garden">
          <Prose>
            <p>
              The Minneapolis Sculpture Garden — an 11-acre free public park
              adjacent to the Walker Art Center — sits at Kenwood&apos;s
              eastern edge. It features more than 40 permanent installations,
              including Claes Oldenburg and Coosje van Bruggen&apos;s iconic{" "}
              <em>Spoonbridge and Cherry</em> (1988), one of the most
              photographed sculptures in the United States. The garden was
              renovated and expanded in 2017 and serves as both a cultural
              destination and an everyday neighborhood park — Kenwood residents
              walk their dogs along its paths and use it as a casual extension
              of their own green space.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Chain of Lakes & Grand Rounds">
          <Prose>
            <p>
              From Kenwood, the entire Minneapolis Chain of Lakes is accessible
              on foot or bike: Lake of the Isles connects south to Bde Maka
              Ska and Lake Harriet, and west to Cedar Lake. The Grand Rounds
              National Scenic Byway — 51 miles of connected parkways and
              trails — passes directly through the neighborhood. On a summer
              Saturday, a Kenwood resident can step out their front door and
              bike continuously around four lakes, through{" "}
              <Link href="/neighborhoods/east-isles" className="text-[#2a9d8f] hover:underline">
                East Isles
              </Link>
              ,{" "}
              <Link href="/neighborhoods/cedar-isles-dean" className="text-[#2a9d8f] hover:underline">
                Cedar - Isles - Dean
              </Link>
              , and{" "}
              <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
                Linden Hills
              </Link>
              , without ever touching a road.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Kenwood Schools">
        <Prose>
          <p>
            Kenwood Elementary School (K–5) is the neighborhood&apos;s anchor
            public school, located at 2013 Penn Avenue South. It serves a
            small, engaged community and earns strong ratings from Niche. The
            school benefits from active parent involvement and the
            neighborhood&apos;s deep investment in public education — at
            least within its own boundaries.
          </p>
          <p>
            Middle school students typically attend Anthony Middle School or
            West Middle School, depending on enrollment patterns. The high
            school is Southwest Senior High School, an International
            Baccalaureate World School that serves much of Southwest
            Minneapolis and earns an A-minus from Niche. Southwest&apos;s IB
            program is a particular draw for academically oriented families.
          </p>
          <p>
            Private and independent school options are abundant in the Kenwood
            area. The Blake School, Breck School, and several Montessori and
            parochial programs are accessible within a short drive. The
            proximity to these options — combined with the strong public
            pipeline — makes Kenwood a neighborhood where families have
            genuine choice in education, though that choice is, of course,
            shaped by the financial resources that Kenwood households
            disproportionately possess.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Kenwood Real Estate & Housing">
        <Prose>
          <p>
            Kenwood is one of the most expensive residential neighborhoods in
            Minneapolis. Median home sale prices in 2025 ranged from
            approximately $750,000 to over $1.2 million, with lakefront
            properties and the largest historic homes regularly exceeding $2
            million. The market is competitive but not frantic — homes
            averaged about 18 days on market in 2025, reflecting strong demand
            tempered by the high price point and limited inventory.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the relative entry level ($500,000–$750,000), you might find
              a smaller home on an interior street, away from the lake — a
              well-maintained bungalow or a modest colonial. These are
              increasingly rare. The mid-range ($800,000–$1.5 million)
              includes larger colonial and Tudor homes from the 1910s and
              1920s, often with original woodwork, updated systems, and
              mature landscaping. Above $1.5 million, you&apos;re looking at
              the parkway properties — the lakefront homes with sweeping views,
              the Prairie School estates, the architect-designed houses that
              anchor Kenwood&apos;s reputation.
            </p>
            <p>
              The housing stock is primarily single-family homes, with very
              few apartment buildings or multi-unit properties. Lot sizes are
              generous by Minneapolis standards. Architectural variety is
              notable: Colonial Revival, Tudor, Prairie School, Craftsman,
              and Georgian styles all appear, often within the same block.
              The quality of construction tends to be high — these were not
              speculative builder homes but commissions for specific families,
              and many retain original millwork, built-ins, and structural
              elements that would be prohibitively expensive to replicate
              today.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Preservation Instinct">
          <Prose>
            <p>
              Kenwood has resisted teardowns more successfully than many
              Southwest Minneapolis neighborhoods, partly because the homes
              are larger and more architecturally significant (making
              replacement less economically logical), and partly because the
              community has a strong preservation ethic. When teardowns do
              occur, they tend to generate significant neighborhood opposition.
              The result is a streetscape that feels remarkably intact — a walk
              down Kenwood Parkway or along the avenues south of 21st Street
              looks much as it would have in the 1930s, minus the cars.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Kenwood">
        <Prose>
          <p>
            Kenwood&apos;s Walk Score of 68 reflects a split personality:
            extraordinary walkability for recreation (the lake trails are
            literally at the doorstep) and limited walkability for daily
            errands (no commercial district, no neighborhood grocery store
            or coffee shop). The Bike Score of 92 is outstanding, driven by
            the Chain of Lakes trail system, the Kenilworth Trail, and
            connections to the broader Minneapolis bike network.
          </p>
          <p>
            For recreation and exercise, Kenwood is a walker&apos;s and
            cyclist&apos;s paradise. For everything else — groceries,
            restaurants, shopping, professional services — residents rely on
            adjacent neighborhoods. Uptown and the Hennepin corridor are a
            short drive or bike ride east. Linden Hills is accessible via the
            lake trails to the south. Downtown Minneapolis is 10–15 minutes
            by car via Hennepin Avenue or I-394.
          </p>
          <p>
            Metro Transit bus routes run along Hennepin Avenue on the
            neighborhood&apos;s eastern edge, providing service to downtown
            and Uptown. The METRO Green Line Extension (Southwest LRT) has
            been a long-anticipated addition, with a planned station at
            21st Street near the Kenilworth Corridor that would provide
            direct light rail service to downtown Minneapolis, the western
            suburbs, and Eden Prairie. Most Kenwood households own at least
            one car, and for commuting purposes, a car remains the primary
            mode for most residents.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Kenwood&apos;s challenges are less visible than those of more
            dynamic neighborhoods — the neighborhood is not in transition so
            much as it is in a long, slow negotiation with forces that threaten
            to change its character.
          </p>
        </Prose>

        <ArticleSubsection title="The Southwest LRT Question">
          <Prose>
            <p>
              The METRO Green Line Extension — the Southwest Light Rail
              Transit line — has been the defining infrastructure debate in
              Kenwood for more than a decade. The planned route runs through
              the Kenilworth Corridor, a rail and trail corridor along Cedar
              Lake that passes through the heart of the neighborhood. Kenwood
              residents have raised concerns about noise, vibration, the
              impact on the trail, environmental effects on the lakes, and
              the potential for increased traffic and development pressure
              near the planned station. Some have fought the alignment
              vigorously. The project has been plagued by cost overruns and
              delays, and it remains a source of tension between the
              neighborhood&apos;s desire for transit access and its instinct
              to protect its residential tranquility.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Wealth, Whiteness & the Equity Question">
          <Prose>
            <p>
              Kenwood is one of the wealthiest and whitest neighborhoods in
              Minneapolis — a city that is roughly 60% white. The median
              household income is far above the city average. The
              neighborhood is overwhelmingly homeowning. This demographic
              homogeneity is not an accident — it is the product of a
              century of land-use decisions, lending practices, and market
              forces that have cumulatively made Kenwood accessible almost
              exclusively to affluent white households. The Minneapolis 2040
              Plan and the broader citywide conversation about housing
              equity have put this dynamic under scrutiny. Kenwood residents
              largely identify as progressive, but the neighborhood&apos;s
              composition tells a different story, and the tension between
              stated values and structural realities is real.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Climate & Lake Health">
          <Prose>
            <p>
              Lake of the Isles and Cedar Lake face the same environmental
              pressures affecting urban water bodies across Minnesota:
              stormwater runoff carrying pollutants, invasive species
              (particularly carp and Eurasian watermilfoil), algal blooms
              exacerbated by warming temperatures, and aging infrastructure
              that struggles to manage increasingly intense storm events.
              The Minneapolis Park Board actively manages the lakes, but
              long-term water quality is a genuine concern. For a
              neighborhood whose identity is built around its lakes, the
              health of those lakes is existential.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Kenwood FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
