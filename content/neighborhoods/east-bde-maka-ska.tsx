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
    title: "East Bde Maka Ska, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about East Bde Maka Ska, Minneapolis — homes, history, the lake, Uptown proximity, real estate, restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "East Bde Maka Ska",
  deck: "The east shore of Minneapolis's most popular lake — where Uptown's energy bleeds into lakeside living, the trail is always busy, and the address alone does most of the work.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is East Bde Maka Ska?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in East Bde Maka Ska" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "East Bde Maka Ska, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,000", label: "Residents (Niche / US Census)" },
      { value: "$400K–$800K+", label: "Median home sale price range (2025 data)" },
      { value: "22 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.3 sq mi", label: "Neighborhood area" },
      { value: "1910s–40s", label: "Era most homes were built" },
      { value: "10 min", label: "Drive to downtown Minneapolis" },
      { value: "82", label: "Walk Score" },
      { value: "92", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is East Bde Maka Ska a good neighborhood in Minneapolis?",
      answer:
        "Yes. East Bde Maka Ska offers direct access to Minneapolis's most popular lake, proximity to Uptown's commercial life, strong walkability and bikeability, and the kind of lakeside address that defines desirable urban living in Minneapolis. The trade-off is price — this is one of the more expensive neighborhoods in the city.",
    },
    {
      question: "Is East Bde Maka Ska, Minneapolis safe?",
      answer:
        "East Bde Maka Ska is generally safe, though its proximity to the Uptown commercial district means it experiences more property crime and occasional incidents than the quieter neighborhoods further south and west. Vehicle break-ins and bike theft are the most common issues. The lake and trails are busy with people during daylight hours, which adds a layer of natural safety.",
    },
    {
      question: "What is East Bde Maka Ska known for?",
      answer:
        "East Bde Maka Ska is known for its direct access to Bde Maka Ska (formerly Lake Calhoun), its proximity to the Uptown commercial district, its walkable and bikeable lifestyle, and its mix of single-family homes, duplexes, and apartment buildings that create a denser, more urban feel than the quieter lake neighborhoods to the south.",
    },
    {
      question: "What was Bde Maka Ska called before?",
      answer:
        "Bde Maka Ska was previously known as Lake Calhoun. The name was officially restored to its original Dakota name — Bde Maka Ska, meaning 'White Earth Lake' — in 2018 by the Minnesota DNR after years of advocacy. The name change was contentious and remains a point of discussion, but Bde Maka Ska is the lake's official name.",
    },
    {
      question: "How much do homes cost in East Bde Maka Ska?",
      answer:
        "Home prices in East Bde Maka Ska range widely — from condos and smaller homes around $300,000 to lakefront and larger single-family homes that can exceed $1 million. The median sale price has ranged from roughly $400,000 to $800,000 depending on the data source and property type. The lake proximity drives a significant premium.",
    },
    {
      question: "Where exactly is East Bde Maka Ska in Minneapolis?",
      answer:
        "East Bde Maka Ska is on the eastern shore of Bde Maka Ska, bounded roughly by West 31st Street to the north, Lyndale Avenue to the east, West 36th Street to the south, and the lake to the west. It sits immediately south of the Uptown commercial district and west of the Lyndale Avenue corridor.",
    },
    {
      question: "Is East Bde Maka Ska walkable?",
      answer:
        "Very. East Bde Maka Ska earns a Walk Score of 82 and a Bike Score of 92 — among the highest in Minneapolis. The proximity to Uptown's restaurants, shops, and services, combined with the lake trail system, makes it possible to live here without a car for many daily needs.",
    },
    {
      question: "What schools serve East Bde Maka Ska?",
      answer:
        "The neighborhood is served by Minneapolis Public Schools, with elementary options varying based on the district's assignment and magnet system. Families use a mix of neighborhood schools, magnet schools, and private options. The school picture is less neighborhood-centric than in Southwest Minneapolis's family-oriented neighborhoods.",
    },
    {
      question: "How is East Bde Maka Ska different from West Bde Maka Ska?",
      answer:
        "East Bde Maka Ska is more urban, more connected to Uptown's commercial energy, and has a denser housing mix including apartments and condos. West Bde Maka Ska (formerly West Calhoun) is quieter, more residential, and more oriented toward the lake itself. East Bde Maka Ska skews younger and more rental-heavy; West Bde Maka Ska skews more toward homeowners and families.",
    },
    {
      question: "How is the Uptown area changing?",
      answer:
        "Uptown — the commercial district adjacent to East Bde Maka Ska — has experienced significant change since 2020. Some businesses have closed, new ones have opened, and the area's identity is in flux. The neighborhood remains walkable and commercially active, but the Uptown of 2026 is different from the Uptown of 2019. This transition affects East Bde Maka Ska directly, as the neighborhood's commercial life is closely tied to Uptown's fortunes.",
    },
  ],
  nearby: [
    { name: "South Uptown", slug: "south-uptown", description: "Uptown's residential streets south of Lake Street" },
    { name: "West Maka Ska", slug: "west-maka-ska", description: "The quieter western shore of the lake" },
    { name: "East Harriet", slug: "east-harriet", description: "Charming homes between the lakes and Lyndale" },
    { name: "Lowry Hill East", slug: "lowry-hill-east", description: "The Wedge — dense, young, and Hennepin-adjacent" },
    { name: "East Isles", slug: "east-isles", description: "Lake of the Isles and quiet residential streets" },
    { name: "Linden Hills", slug: "linden-hills", description: "Lake Harriet's north shore and boutique shopping" },
  ],
  closing: {
    title: "What Makes East Bde Maka Ska Worth Knowing",
    paragraphs: [
      "East Bde Maka Ska is the neighborhood where the lake and the city meet without either one winning. The trail is always busy, the restaurants are within walking distance, the skyline is visible across the water, and the address carries a weight that opens conversations at dinner parties. It's the kind of place where you can paddleboard in the morning, walk to brunch, bike to work, and be home in time to watch the sunset over the lake from your porch — and that sequence is not a fantasy, it's a Tuesday.",
      "The premium is real, the Uptown adjacency is a mixed blessing, and the neighborhood doesn't have the settled, family-oriented calm of Southwest Minneapolis's deeper residential pockets. But for people who want urban energy and lake access in equal measure — who want to live in the part of Minneapolis that most looks like the postcard — East Bde Maka Ska is the answer.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a July evening, the east shore of Bde Maka Ska is one of the
          busiest stretches of public space in Minneapolis. Runners are
          weaving through walkers. Cyclists are ringing bells. Someone on a
          paddleboard is gliding past the beach, where families are wringing
          out towels and loading sandy kids into strollers. The concession
          stand has a line. The parking lot is full. A volleyball game is
          going on the sand courts, and a group of twentysomethings has
          staked out a patch of grass with a Bluetooth speaker and a cooler.
          Across the water, the sun is dropping toward the west shore, and
          the light on the lake is doing the thing that makes everyone with
          a phone stop and take a picture. This is East Bde Maka Ska at peak
          performance — the neighborhood where Minneapolis most fully becomes
          the lake city it claims to be.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/east-bde-maka-ska/hero.webp"
        alt="Bde Maka Ska lake view from the east shore with Minneapolis skyline in the background"
        caption="Bde Maka Ska from the east shore — the postcard view"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is East Bde Maka Ska, Minneapolis?">
        <Prose>
          <p>
            East Bde Maka Ska is a small neighborhood on the eastern shore of
            Bde Maka Ska — Minneapolis&apos;s largest and most popular lake.
            It covers roughly 0.3 square miles and is home to approximately
            3,000 residents. The neighborhood is bounded roughly by West 31st
            Street to the north, Lyndale Avenue to the east, West 36th Street
            to the south, and the lake to the west. It sits immediately south
            of the Uptown commercial district, with{" "}
            <Link href="/neighborhoods/south-uptown" className="text-[#2a9d8f] hover:underline">
              South Uptown
            </Link>{" "}
            to the north and{" "}
            <Link href="/neighborhoods/east-harriet" className="text-[#2a9d8f] hover:underline">
              East Harriet
            </Link>{" "}
            to the south.
          </p>
          <p>
            The lake is the point. Everything about this neighborhood —
            the prices, the density, the demographics, the lifestyle — flows
            from the fact that Bde Maka Ska is right there, across the
            parkway, with its beaches, its 3.1-mile trail loop, its kayak and
            paddleboard rentals, and its status as the recreational center of
            Minneapolis. If you want to live on the lake without leaving the
            city, this is one of the neighborhoods that makes it possible.
          </p>
          <p>
            The name: Bde Maka Ska is the lake&apos;s original Dakota name,
            meaning &quot;White Earth Lake.&quot; It was officially restored
            in 2018, replacing the name Lake Calhoun (after John C. Calhoun,
            the pro-slavery politician). The name change was contested and
            remains a point of discussion in some circles, but Bde Maka Ska
            is the legal and official name. Residents and visitors use both
            names in practice, though Bde Maka Ska is increasingly the
            default.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="East Bde Maka Ska Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/east-bde-maka-ska/neighborhood-sign.webp"
          alt="East Bde Maka Ska neighborhood sign in Minneapolis"
          caption="The East Bde Maka Ska neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="East Bde Maka Ska History & Origins">
        <Prose>
          <p>
            Before European settlement, Bde Maka Ska and the surrounding
            lakes were central to Dakota life in this region. The lake was
            part of a network of waterways — including Lake Harriet, Lake of
            the Isles, and Cedar Lake — that the Dakota people used for
            fishing, gathering, travel, and ceremony. The name Bde Maka Ska
            is the Dakota name for the lake, meaning &quot;White Earth
            Lake,&quot; likely referring to the light-colored sandy bottom
            visible in the shallows. The forced removal of the Dakota in the
            1850s and 1860s opened this land to European settlement, but the
            lake itself — its shape, its shoreline, its role as a gathering
            place — predates every building, every street, and every
            neighborhood boundary by millennia.
          </p>
          <p>
            The area around the lake developed in the late 19th and early 20th
            centuries as Minneapolis expanded southwest from downtown. The
            streetcar lines — Thomas Lowry&apos;s creation — made the lakes
            accessible to residents who lived and worked further from the
            water, and the parkway system designed by Horace Cleveland gave
            the lakeshores their public, democratic character. The homes on
            the east side of the lake were built primarily between the 1910s
            and the 1940s, with a mix of styles reflecting the era&apos;s
            residential conventions: bungalows, Tudors, Colonial Revivals,
            and the multi-family buildings that gave this side of the lake
            its denser, more urban character.
          </p>
          <p>
            The Uptown commercial district, centered around Lake Street and
            Hennepin Avenue, grew through the 20th century as a retail and
            entertainment hub serving the neighborhoods around the lakes. Its
            proximity to East Bde Maka Ska has always been part of the
            neighborhood&apos;s identity — the lake provides the natural
            amenity, Uptown provides the commercial and cultural life, and
            the neighborhood sits at the intersection of the two.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in East Bde Maka Ska">
        <Prose>
          <p>
            Living in East Bde Maka Ska means living on the lake — or at
            least within a few blocks of it. The daily rhythm here is
            organized around the water: morning runs on the trail, evening
            walks along the parkway, weekend hours at the beach or on a
            paddleboard. The lake is not a backdrop — it&apos;s a utility,
            used actively and daily by people who chose this neighborhood
            specifically because of what it provides.
          </p>
          <p>
            The neighborhood is denser and more urban than the quieter lake
            neighborhoods to the south. The housing mix includes single-family
            homes, duplexes, triplexes, and apartment buildings — particularly
            along the streets closer to Lyndale Avenue and the Uptown
            commercial district. This density creates a different demographic
            than the family-oriented neighborhoods in Southwest Minneapolis:
            East Bde Maka Ska skews younger, more single and coupled, more
            rental-oriented, and more transient. People move here in their
            twenties and thirties for the lifestyle; some stay, many
            eventually move south to the family neighborhoods when kids arrive.
          </p>
          <p>
            The Uptown adjacency is central to the neighborhood&apos;s
            character — and to its complications. Uptown&apos;s restaurants,
            bars, shops, and cultural venues are within walking distance,
            which gives East Bde Maka Ska a commercial convenience that
            most lake neighborhoods lack. But Uptown has also been through a
            difficult period since 2020 — business closures, social unrest,
            and an identity transition that&apos;s still unfolding. The
            neighborhood feels the effects of Uptown&apos;s struggles
            directly, and the commercial landscape that residents walk to is
            different — less complete, less predictable — than it was five
            years ago.
          </p>
          <p>
            Despite all of this, the lake carries the neighborhood. On a warm
            evening, when the trail is full and the water is golden and
            someone is playing guitar on the grass, the reason people pay a
            premium to live here is self-evident. The lake is the amenity
            that justifies everything else.
          </p>
        </Prose>
        <Quote
          text="The lake is the reason. Everything else — the restaurants, the walkability, the commute — is a bonus. But the lake is the reason."
          cite="East Bde Maka Ska renter, 2025"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="East Bde Maka Ska Food, Drink & Local Spots">
        <Prose>
          <p>
            East Bde Maka Ska benefits from its proximity to Uptown and the
            Lyndale Avenue corridor — the commercial options within walking
            distance are more extensive than in most lake neighborhoods.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Bde Maka Ska Concessions", tag: "Lakeside Dining", price: "$", description: "On the lake. The concession stands at Bde Maka Ska serve the kind of food you want after swimming — burgers, ice cream, drinks on the patio with a lake view. Seasonal, casual, and inseparable from the lake experience." }} />
          <PlaceCardComponent place={{ name: "Uptown Commercial District", tag: "Dining & Shopping", description: "Lake Street and Hennepin Avenue, a short walk north. The Uptown dining and shopping scene has evolved significantly since 2020, with some closures and many new openings. The options span casual to upscale, with bars, restaurants, coffee shops, and retail along the main corridors." }} />
          <PlaceCardComponent place={{ name: "Lyndale Avenue Corridor", tag: "Restaurants & Bars", description: "Lyndale Avenue runs along the neighborhood's eastern edge and hosts a string of restaurants, bars, and shops. The stretch between Lake Street and 36th Street is one of the more interesting dining corridors in Minneapolis — independent, diverse, and less tourist-oriented than Hennepin." }} />
          <PlaceCardComponent place={{ name: "Rustica Bakery", tag: "Bakery & Café", price: "$$", url: "https://www.rusticabakery.com", description: "Near the Uptown area. Excellent pastries, bread, and coffee in a clean, modern space. A go-to for weekend mornings." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The dining landscape around East Bde Maka Ska is in transition.
              Some longtime Uptown favorites have closed; new spots continue
              to open. The Lyndale corridor has proven more resilient than
              the Hennepin corridor in recent years. For groceries, Kowalski&apos;s
              on Hennepin and the Wedge Co-op on Lyndale are the primary
              options — both walkable, both well-stocked, both reflecting the
              neighborhood&apos;s preference for quality over convenience.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in East Bde Maka Ska">
        <Prose>
          <p>
            The outdoor story here is simple: the lake. Everything else is
            secondary.
          </p>
        </Prose>
        <ArticleSubsection title="Bde Maka Ska">
          <Prose>
            <p>
              Bde Maka Ska is the largest lake in Minneapolis — roughly 401
              acres — and the most heavily used. The 3.1-mile paved trail
              around the lake is one of the busiest multi-use trails in the
              state, popular with runners, walkers, cyclists, and
              rollerbladers. The east shore includes beaches, volleyball
              courts, kayak and paddleboard rentals, canoe racks, and the
              kind of summer-afternoon scene that makes Minneapolis feel
              like a lakeside resort town that happens to have a skyline.
              In winter, the lake freezes and becomes a platform for ice
              fishing, skating, and the particular Minnesota pleasure of
              walking across a frozen body of water in the middle of a city.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Chain of Lakes Trail">
          <Prose>
            <p>
              The Chain of Lakes trail connects Bde Maka Ska to Lake Harriet,
              Lake of the Isles, and Cedar Lake — an interconnected loop that
              totals roughly 13 miles and is one of Minneapolis&apos;s
              signature public assets. From East Bde Maka Ska, you can bike
              south to Lake Harriet&apos;s Bandshell, north to Lake of the
              Isles, or west to Cedar Lake without ever touching a road. The
              Bike Score of 92 reflects this connectivity — it&apos;s
              genuinely world-class urban cycling infrastructure.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Lakeside Recreation">
          <Prose>
            <p>
              The east shore of Bde Maka Ska is the recreational hub of the
              lake — the busiest beach, the boat launch, the rental
              facilities, the volleyball courts. The Tin Fish restaurant and
              the concession operations provide seasonal lakeside dining. The
              parkway that rings the lake separates the residential blocks
              from the shoreline and provides a scenic driving, walking, and
              cycling loop. The Minneapolis Park Board manages the shoreline
              and the facilities, and the ongoing investment in the lake
              infrastructure reflects its importance to the city.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="East Bde Maka Ska Schools">
        <Prose>
          <p>
            East Bde Maka Ska is not a neighborhood where the school pipeline
            is the primary draw — unlike the family-oriented Southwest
            neighborhoods, the demographic here skews younger and less
            family-dense, and the school landscape reflects that.
          </p>
          <p>
            Elementary school options depend on the Minneapolis Public
            Schools assignment and magnet system. Families in the area use
            a variety of schools, including neighborhood options, magnet
            programs, and private schools. The neighborhood&apos;s density
            and rental-heavy housing stock mean that school-age children are
            a smaller share of the population than in places like Kenny or
            Armatage.
          </p>
          <p>
            For families who do have school-age children here, the broader
            Southwest Minneapolis school infrastructure — including Southwest
            Senior High School — remains accessible, and the city&apos;s
            magnet system provides options beyond the default assignment.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="East Bde Maka Ska Real Estate & Housing">
        <Prose>
          <p>
            Real estate in East Bde Maka Ska is driven by one factor above
            all others: the lake. Proximity to Bde Maka Ska creates a
            premium that puts the neighborhood among the more expensive in
            Minneapolis. Home sale prices range widely — from condos and
            smaller apartments around $250,000–$400,000 to larger
            single-family homes and lakefront properties that can exceed
            $1 million.
          </p>
          <p>
            The housing stock is more diverse than in most Minneapolis
            neighborhoods. Single-family homes — bungalows, Tudors, and
            Colonials from the 1910s through the 1940s — sit alongside
            duplexes, triplexes, and apartment buildings of various eras.
            The multi-family housing gives the neighborhood its density and
            its younger, more rental-oriented demographic. Condos in
            converted buildings and newer construction have added to the mix.
          </p>
          <p>
            Homes average about 22 days on market — slightly longer than the
            family neighborhoods in Southwest Minneapolis, reflecting the
            higher price points and more varied buyer pool. The market is
            competitive for well-positioned properties, particularly those
            with lake views or direct trail access.
          </p>
        </Prose>
        <Quote text="You&apos;re paying a premium, and you know it. But then you walk out your door and you&apos;re on the lake trail in thirty seconds, and you stop questioning the math." cite="East Bde Maka Ska homeowner, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around East Bde Maka Ska">
        <Prose>
          <p>
            East Bde Maka Ska is one of the most walkable and bikeable
            neighborhoods in Minneapolis. The Walk Score of 82 reflects the
            proximity to Uptown&apos;s commercial corridor, and the Bike
            Score of 92 reflects the lake trail system and connections to
            the broader city cycling network.
          </p>
          <p>
            Bus service along Hennepin and Lyndale avenues connects to
            downtown, Uptown, and the broader Metro Transit system. The
            frequency is better here than in most Minneapolis neighborhoods,
            and genuine car-free living is feasible — particularly for
            residents without children.
          </p>
          <p>
            By car, downtown is about 10 minutes. The lakes provide scenic
            driving loops, and I-35W is accessible for southbound commutes
            to the airport, Bloomington, and the southern suburbs. Parking
            can be challenging during peak lake-use hours in summer —
            the east shore parking lots fill up on warm weekends, and
            residential streets absorb the overflow.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            East Bde Maka Ska sits at the intersection of several of
            Minneapolis&apos;s most visible transitions.
          </p>
        </Prose>
        <ArticleSubsection title="Uptown's Identity Crisis">
          <Prose>
            <p>
              The Uptown commercial district — the neighborhood&apos;s primary
              commercial anchor — has been in flux since 2020. Business
              closures, social unrest, the pandemic, and shifting retail
              patterns have left gaps in the commercial landscape that are
              still being filled. New businesses continue to open, and the
              area retains its walkable bones, but the Uptown of 2026 is a
              different place than the Uptown of 2019. East Bde Maka Ska
              residents feel this transition directly — the restaurants and
              shops they walk to are not the same ones they walked to five
              years ago.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Name Question">
          <Prose>
            <p>
              The restoration of the lake&apos;s Dakota name — from Lake
              Calhoun to Bde Maka Ska — was officially completed in 2018
              after a lengthy process. The change is legally settled, but
              cultural adoption is ongoing. Some longtime residents and
              businesses still use &quot;Calhoun&quot; informally. The
              neighborhood itself carries the new name officially, and the
              generational divide on usage is noticeable. The name question
              is part of a larger conversation about how Minneapolis
              reckons with its Dakota heritage and its settler-colonial
              history.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Lake Usage Pressure">
          <Prose>
            <p>
              Bde Maka Ska is the most heavily used lake in Minneapolis, and
              the east shore bears a disproportionate share of that pressure.
              Trail congestion, parking overflow, noise, and the general
              wear of high-volume recreational use affect the blocks closest
              to the lake. The Minneapolis Park Board continues to invest in
              infrastructure, but the tension between residential quality of
              life and public recreational access is inherent and ongoing.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Density and Development">
          <Prose>
            <p>
              The neighborhood&apos;s proximity to Uptown and the lake makes
              it a target for development — both new apartment construction
              and the conversion of older single-family homes to multi-unit
              properties. Some residents welcome the density and the energy
              it brings; others worry about the loss of the neighborhood&apos;s
              remaining single-family character. The tension between density
              and preservation plays out block by block, proposal by proposal.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="East Bde Maka Ska FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
