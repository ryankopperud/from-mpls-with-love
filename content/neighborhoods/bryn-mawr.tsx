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
    title: "Bryn - Mawr, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Bryn Mawr, Minneapolis — homes, history, Theodore Wirth Park, Cedar Lake, schools, restaurants, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Bryn - Mawr",
  deck: "A village inside a city — tucked between Theodore Wirth Park and Cedar Lake, minutes from downtown but separated from it by woods, water, and a fiercely independent streak that has kept this neighborhood feeling like its own small town for over a century.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Bryn Mawr?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Bryn Mawr" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Bryn Mawr, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,800", label: "Residents (Niche / US Census)" },
      { value: "$350K–$550K", label: "Median home sale price range (2025 data)" },
      { value: "20 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.5 sq mi", label: "Neighborhood area" },
      { value: "1900s–40s", label: "Era most homes were built" },
      { value: "5–10 min", label: "Drive to downtown Minneapolis" },
      { value: "68", label: "Walk Score" },
      { value: "82", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Bryn Mawr a good neighborhood in Minneapolis?",
      answer:
        "Yes. Bryn Mawr is a small, distinctive neighborhood with a strong village identity, excellent park access (Theodore Wirth Park and Cedar Lake), and an unusually close-knit community for a city neighborhood. Its proximity to downtown Minneapolis — just five to ten minutes by car — combined with its wooded, tucked-away feel makes it a rare combination in the Twin Cities.",
    },
    {
      question: "Is Bryn Mawr, Minneapolis safe?",
      answer:
        "Bryn Mawr is generally safe, with violent crime rates below the city average. Property crime — particularly vehicle break-ins — has increased in recent years, as it has across much of Minneapolis. The neighborhood's proximity to I-394 and downtown means it occasionally sees pass-through issues, but residents generally feel secure.",
    },
    {
      question: "What is Bryn Mawr, Minneapolis known for?",
      answer:
        "Bryn Mawr is known for its village-like identity, its proximity to Theodore Wirth Park (the largest park in Minneapolis), its access to Cedar Lake and the Cedar Lake Trail, and its tight-knit community with an active neighborhood association. The annual Bryn Mawr neighborhood celebration and the neighborhood's small commercial node at Cedar Lake Road give it a distinct local identity.",
    },
    {
      question: "How much do homes cost in Bryn Mawr, Minneapolis?",
      answer:
        "Median home sale prices in Bryn Mawr have ranged from roughly $350,000 to $550,000 depending on the data source and season. This is around or slightly below the median for comparable neighborhoods with similar park and lake access. The housing stock varies widely — from smaller bungalows under $300,000 to larger renovated homes above $600,000.",
    },
    {
      question: "Where exactly is Bryn Mawr in Minneapolis?",
      answer:
        "Bryn Mawr is in west-central Minneapolis, bounded roughly by I-394 to the north, the railroad corridor to the east, Cedar Lake to the southeast, and Theodore Wirth Parkway to the west. It sits just southwest of downtown Minneapolis and is separated from the downtown core by highways and green space.",
    },
    {
      question: "Is Bryn Mawr close to downtown Minneapolis?",
      answer:
        "Very close. Bryn Mawr is approximately five to ten minutes from downtown Minneapolis by car, and the Cedar Lake Trail provides a direct, car-free biking and walking connection to the downtown core. Despite this proximity, the neighborhood feels remarkably separated from downtown thanks to the park land, lakes, and highway corridors that buffer it.",
    },
    {
      question: "What schools serve Bryn Mawr, Minneapolis?",
      answer:
        "Bryn Mawr Elementary School (K–5) is the neighborhood school and a strong community institution. Middle school is typically Anwatin Middle School. High school destinations vary, with options including Southwest Senior High School and other Minneapolis public schools. Families also use the city's magnet school system.",
    },
    {
      question: "Can you walk to Cedar Lake from Bryn Mawr?",
      answer:
        "Yes. Cedar Lake is on Bryn Mawr's southeastern edge, and many residents can walk to it in ten to fifteen minutes. The Cedar Lake Trail, which runs along the lake's northern shore, is one of the most popular multi-use trails in Minneapolis and connects directly to downtown.",
    },
    {
      question: "How is Bryn Mawr different from Kenwood?",
      answer:
        "Bryn Mawr and Kenwood are separated by Cedar Lake and have different characters. Kenwood is more affluent, with larger homes and higher price points. Bryn Mawr has a more working- and middle-class heritage, a stronger village identity, and a wider range of housing styles and prices. Both have excellent park and lake access, but Bryn Mawr feels more self-contained.",
    },
    {
      question: "What is Theodore Wirth Park?",
      answer:
        "Theodore Wirth Park is the largest park in Minneapolis at approximately 759 acres. It borders Bryn Mawr to the west and offers trails for hiking, mountain biking, cross-country skiing, and snowshoeing, as well as a golf course, a swimming beach at Wirth Lake, a chalet for events, and some of the best urban mountain biking terrain in the Midwest.",
    },
  ],
  nearby: [
    { name: "Kenwood", slug: "kenwood", description: "Cedar Lake, Lake of the Isles, and quiet affluence" },
    { name: "Cedar - Isles - Dean", slug: "cedar-isles-dean", description: "Trail access and lakeside living between the Chain of Lakes" },
    { name: "Harrison", slug: "harrison", description: "North Minneapolis heritage neighborhood near Wirth Park" },
    { name: "Lowry Hill", slug: "lowry-hill", description: "Walker Art Center and historic mansions near downtown" },
    { name: "Downtown West", slug: "downtown-west", description: "The western edge of downtown Minneapolis" },
  ],
  closing: {
    title: "What Makes Bryn Mawr Worth Knowing",
    paragraphs: [
      "Bryn Mawr is one of those Minneapolis neighborhoods that doesn't make sense on paper. It's five minutes from the tallest buildings in the state, but it feels like a small town in the woods. It has a lake, a massive park, a trail to downtown, and houses that a public school teacher could still, in theory, afford — and yet it's small enough that people know each other by name at the corner store. The combination shouldn't work. It does.",
      "The village feel is real, not marketed. The community association is genuinely active. The neighbors actually show up. The park is not a manicured accessory — it's a wilderness that starts at the end of the block and keeps going for 759 acres. For people who want to live in Minneapolis without feeling like they live in a city, Bryn Mawr is the answer — and it has been for over a hundred years.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There&apos;s a stretch of Bryn Mawr where you can stand on the
          sidewalk in front of a 1920s bungalow, look west, and see nothing
          but trees. No buildings, no parking lots, no signs — just the
          canopy of Theodore Wirth Park rolling away toward Golden Valley like
          the city forgot to keep going. Then you turn around, look east past
          the rooftops, and there&apos;s the Minneapolis skyline, close enough
          to count the floors on the IDS Center. This is the trick of Bryn
          Mawr — the constant surprise of being somewhere that feels like a
          village at the edge of the woods while also being, by any honest
          measurement, minutes from the center of a major American city.
          Nobody quite believes it until they see it.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/bryn-mawr/hero.webp"
        alt="Bryn Mawr neighborhood street with trees and the Minneapolis skyline in the distance"
        caption="Bryn Mawr — a village with a skyline view"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Bryn Mawr, Minneapolis?">
        <Prose>
          <p>
            Bryn Mawr is a small residential neighborhood in west-central
            Minneapolis, bounded roughly by I-394 to the north, the railroad
            corridor and Luce Line Trail to the east, Cedar Lake to the
            southeast, and Theodore Wirth Parkway to the west. It covers about
            half a square mile and is home to approximately 2,800 residents.
            It sits in a geographic sweet spot that defines its character:
            close to downtown but separated from it by green space, highways,
            and the kind of topographic buffering that makes the proximity
            feel theoretical until you actually drive it and realize it&apos;s
            five minutes.
          </p>
          <p>
            The name comes from the Welsh phrase meaning &quot;big hill&quot;
            — a reference either to the neighborhood&apos;s terrain or to
            Bryn Mawr, Pennsylvania, depending on which origin story you
            believe. Either way, the name stuck, and the neighborhood has
            carried it with a kind of quiet pride for over a century. Bryn
            Mawr residents tend to be fiercely attached to their neighborhood
            in a way that goes beyond the normal Minneapolis neighborhood
            loyalty — this is a place with its own identity, its own
            commercial node, its own elementary school, and its own sense of
            being a place apart.
          </p>
          <p>
            What makes Bryn Mawr unusual is the combination of access and
            isolation. Cedar Lake is at the southeastern edge — one of the
            cleanest urban swimming lakes in the region. Theodore Wirth Park,
            at 759 acres the largest park in Minneapolis, borders the
            neighborhood to the west and feels less like a city park than a
            genuine urban wilderness. The Cedar Lake Trail provides a direct,
            car-free connection to downtown. And yet the neighborhood itself
            feels tucked away, buffered, almost hidden. People who have lived
            in Minneapolis for years sometimes don&apos;t know Bryn Mawr
            exists. The residents like it that way.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Bryn Mawr Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/bryn-mawr/neighborhood-sign.webp"
          alt="Bryn Mawr neighborhood sign in Minneapolis"
          caption="The Bryn Mawr neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Bryn Mawr History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part
            of a landscape the Dakota people knew and used for centuries,
            including the lakes, the wooded hills, and the creek corridors
            that still define the area&apos;s geography. The forced removal
            of the Dakota in the 1850s and 1860s opened the land to European
            homesteading, and the area that would become Bryn Mawr was
            initially farmland and open prairie at the western edge of the
            growing city.
          </p>
          <p>
            Bryn Mawr was originally a separate village — platted in the 1880s
            and annexed by Minneapolis in 1889. That history of separate
            incorporation left a mark. The village had its own identity before
            it became part of the city, and that identity never fully merged
            into the larger municipal fabric. The small commercial node on
            Cedar Lake Road, the neighborhood elementary school, the active
            community association — these are the institutional remnants of
            a place that was, for a brief but formative period, its own town.
          </p>
          <p>
            The neighborhood developed primarily in the early 20th century,
            with most homes built between the 1900s and the 1940s. The
            housing stock reflects this era: Craftsman bungalows, Foursquares,
            Tudor revivals, and a scattering of earlier Victorian homes that
            date to the village&apos;s pre-annexation period. The streets
            follow the terrain rather than a strict grid, giving Bryn Mawr
            a more organic, less planned feel than the neighborhoods platted
            on the city&apos;s standard rectilinear system.
          </p>
          <p>
            The construction of I-394 in the 1980s reshaped Bryn Mawr&apos;s
            northern boundary and severed some connections to the neighborhoods
            to the north. The highway brought noise and traffic but also
            reinforced the neighborhood&apos;s sense of being a bounded,
            self-contained place. Today, I-394 functions as both a barrier
            and a convenience — it walls off Bryn Mawr from the north while
            providing fast access to downtown and the western suburbs.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Bryn Mawr">
        <Prose>
          <p>
            Bryn Mawr has a village feel that residents talk about with
            genuine conviction and that visitors can actually perceive —
            this isn&apos;t marketing copy, it&apos;s observable reality. The
            neighborhood is small enough that people recognize each other at
            the park, at the school, at the handful of businesses on Cedar
            Lake Road. The Bryn Mawr Neighborhood Association is one of the
            most active in Minneapolis, organizing events, managing
            communications, and maintaining a community identity that feels
            more intentional than most.
          </p>
          <p>
            The physical setting helps. Bryn Mawr is bounded on nearly every
            side by green space, water, or infrastructure that creates natural
            edges. Theodore Wirth Park to the west is not a small neighborhood
            park — it&apos;s a 759-acre urban forest with mountain biking
            trails, cross-country skiing, a golf course, and swimming. Cedar
            Lake to the southeast offers beaches, trails, and the kind of
            water access that most Minneapolis neighborhoods would kill for.
            The result is a neighborhood that feels nestled rather than
            squeezed — surrounded by nature rather than by other
            neighborhoods.
          </p>
          <p>
            The community is diverse in some ways and homogeneous in others.
            The housing stock spans a wide range — from modest bungalows to
            larger family homes — and the price points are more accessible
            than in neighboring Kenwood or Lowry Hill. But the neighborhood
            is still predominantly white and homeowning, reflecting the
            broader patterns of the western Minneapolis neighborhoods.
            Long-term residents, young families, and a contingent of outdoor
            enthusiasts drawn by the park and lake access make up the core
            demographic.
          </p>
          <p>
            Daily life in Bryn Mawr revolves around the outdoors more than in
            most Minneapolis neighborhoods. People here ski to work on the
            Cedar Lake Trail in winter. They mountain bike in Wirth Park
            after dinner. They swim in Cedar Lake on summer evenings. The
            neighborhood&apos;s identity is wrapped up in its access to
            nature in a way that goes beyond &quot;there&apos;s a nice park
            nearby&quot; — the park and the lake are structural elements of
            daily life, not amenities.
          </p>
        </Prose>
        <Quote
          text="I can mountain bike in a 750-acre park, swim in a lake, and bike to my office downtown — all without getting in a car. Name another neighborhood in America that does that."
          cite="Bryn Mawr resident, 2025"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Bryn Mawr Food, Drink & Local Spots">
        <Prose>
          <p>
            Bryn Mawr&apos;s commercial life is small — genuinely small — but
            it exists, which is more than many Minneapolis neighborhoods of
            this size can say. The handful of businesses clustered on Cedar
            Lake Road give the neighborhood a commercial center that functions
            as a village main street, and residents are protective of it.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Bryn Mawr Market", tag: "Corner Grocery & Deli", price: "$", description: "Cedar Lake Road. The neighborhood's corner store — smaller than a standard grocery, larger than a convenience store. Deli sandwiches, beer, basic groceries, and the particular charm of a neighborhood market that knows its customers by name. It's the kind of store that developers keep trying to replicate in new construction and never quite manage." }} />
          <PlaceCardComponent place={{ name: "Cuppa Java", tag: "Coffee Shop", price: "$", description: "Cedar Lake Road. A small, independent coffee shop that serves as Bryn Mawr's unofficial living room. Good coffee, community bulletin board, the sense that everyone in here lives within walking distance." }} />
          <PlaceCardComponent place={{ name: "Wirth Chalet", tag: "Event Venue & Seasonal", price: "$$", description: "Inside Theodore Wirth Park. The chalet hosts events and provides a gathering point for the park — a place to warm up after skiing, grab a drink, or attend a community event. Not a daily dining spot, but a neighborhood landmark." }} />
          <PlaceCardComponent place={{ name: "Luce Line Brewing", tag: "Brewery & Taproom", price: "$$", description: "Near the Luce Line Trail. A local taproom that draws from Bryn Mawr and the surrounding neighborhoods. Good beer, relaxed atmosphere, and the kind of neighborhood anchor that every small community wishes it had." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Bryn Mawr&apos;s commercial options are limited by design and
              geography — the neighborhood is small, residential, and bounded
              by park land. For more extensive dining and shopping, residents
              head to the North Loop, downtown, or the Uptown area — all of
              which are within a short drive or bike ride. The Cedar Lake Trail
              makes downtown accessible without a car, which means Bryn Mawr
              residents have better car-free access to downtown restaurants
              than many neighborhoods that are technically closer.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Bryn Mawr">
        <Prose>
          <p>
            Bryn Mawr&apos;s outdoor access is exceptional — arguably the best
            of any neighborhood in Minneapolis, and that&apos;s saying
            something in a city that consistently ranks among the top park
            systems in the country.
          </p>
        </Prose>
        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Park is the crown jewel — 759 acres of urban
              wilderness on Bryn Mawr&apos;s western edge. The park offers
              hiking trails, a championship-level mountain biking trail system
              (one of the best urban mountain biking setups in the Midwest),
              cross-country skiing and snowshoeing in winter, a golf course,
              a swimming beach at Wirth Lake, and the Eloise Butler
              Wildflower Garden — the oldest public wildflower garden in the
              United States. The park is not a groomed, manicured space — it&apos;s
              a genuine wilderness with hills, ravines, wetlands, and enough
              tree cover to lose sight of the city entirely. For Bryn Mawr
              residents, the park starts at the end of the block.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Cedar Lake">
          <Prose>
            <p>
              Cedar Lake sits at Bryn Mawr&apos;s southeastern corner — a
              clean, relatively quiet lake with a swimming beach, walking and
              biking trails, and the kind of low-key atmosphere that
              distinguishes it from the more crowded Bde Maka Ska and Lake
              Harriet. The Cedar Lake Trail follows the lake&apos;s northern
              shore and continues east into downtown Minneapolis, providing
              one of the best car-free commute routes in the city. Cedar Lake
              also hosts one of Minneapolis&apos;s unofficial clothing-optional
              beaches — a fact that longtime residents mention with varying
              degrees of amusement.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Cedar Lake Trail">
          <Prose>
            <p>
              The Cedar Lake Trail is one of Minneapolis&apos;s best multi-use
              trails — a paved, off-road path that runs from Bryn Mawr and
              Cedar Lake eastward through the Kenilworth Corridor and into
              downtown Minneapolis. Bikers, runners, and commuters use it
              daily. For Bryn Mawr residents, it&apos;s the car-free highway
              to downtown — a genuine transportation asset that makes the
              neighborhood&apos;s proximity to the city center practical, not
              just theoretical.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Bryn Mawr Schools">
        <Prose>
          <p>
            Bryn Mawr Elementary School serves kindergarten through fifth
            grade and is a central institution in the neighborhood&apos;s
            identity. The school is small — reflecting the neighborhood&apos;s
            size — and functions as a genuine community hub. The overlap
            between the school community, the neighborhood association, and
            the park users creates the tight social fabric that defines
            Bryn Mawr.
          </p>
          <p>
            Middle school options include Anwatin Middle School, and high
            school destinations vary among Minneapolis public schools. The
            school situation in Bryn Mawr is typical of many smaller
            Minneapolis neighborhoods — the elementary school is a beloved
            neighborhood anchor, and the middle and high school years involve
            navigating the broader district&apos;s options, including magnet
            programs and open enrollment.
          </p>
          <p>
            Families who prioritize a walkable neighborhood elementary school
            with strong community ties will find Bryn Mawr compelling. For
            middle and high school, the picture is more complex and often
            involves choices beyond the default assignment.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Bryn Mawr Real Estate & Housing">
        <Prose>
          <p>
            Bryn Mawr&apos;s housing market is defined by variety. The
            neighborhood has everything from modest bungalows under $300,000
            to larger renovated homes above $600,000, with the median sale
            price ranging from roughly $350,000 to $550,000 depending on the
            data source and season. This range makes Bryn Mawr more accessible
            than neighboring{" "}
            <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
              Kenwood
            </Link>{" "}
            or{" "}
            <Link href="/neighborhoods/lowry-hill" className="text-[#2a9d8f] hover:underline">
              Lowry Hill
            </Link>
            , where the price floor is significantly higher.
          </p>
          <p>
            The housing stock reflects the neighborhood&apos;s early-20th-century
            development: Craftsman bungalows, Foursquares, Tudor revivals, and
            a scattering of older Victorian homes. Streets follow the terrain
            rather than a grid, giving the neighborhood an irregular, organic
            layout. Lots vary in size, and the topography creates the kind of
            varied sightlines and streetscapes that flat-grid neighborhoods
            can&apos;t offer.
          </p>
          <p>
            Homes typically sell in about 20 days — slightly longer than the
            hottest Southwest neighborhoods but well below the national
            average. The market is competitive for well-maintained homes in
            the sweet spot, and the combination of park access, lake access,
            and proximity to downtown creates a value proposition that&apos;s
            hard to match elsewhere in Minneapolis.
          </p>
        </Prose>
        <Quote text="Where else in Minneapolis can you get a house for under $400,000 with a 750-acre park on one side and a lake on the other? That&apos;s the Bryn Mawr pitch, and it&apos;s honest." cite="Local real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Bryn Mawr">
        <Prose>
          <p>
            Bryn Mawr earns a Walk Score of 68 — reasonable for a
            neighborhood this size, reflecting the small commercial node on
            Cedar Lake Road and the residential character of the surrounding
            blocks. The Bike Score of 82 is the real story: the Cedar Lake
            Trail provides a direct, paved, off-road connection to downtown
            Minneapolis that makes bike commuting not just possible but
            genuinely practical. Many Bryn Mawr residents bike to work
            year-round.
          </p>
          <p>
            By car, downtown Minneapolis is five to ten minutes via I-394 or
            surface streets. The western suburbs are similarly accessible via
            I-394 westbound. Bus service exists along Cedar Lake Road and
            connects to downtown, though frequency is limited. The
            neighborhood is well-positioned for car-based commuting but
            unusual in that the bike alternative is often faster and more
            pleasant than driving.
          </p>
          <p>
            One practical consideration: Bryn Mawr&apos;s bounded geography
            — park to the west, highway to the north, lake and rail corridor
            to the east — means there are limited entry and exit points. This
            contributes to the tucked-away feel but can make navigation
            unfamiliar to newcomers. Residents learn the routes quickly; first-time
            visitors sometimes get lost.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Bryn Mawr&apos;s village character has held up remarkably well
            over the decades, but the neighborhood is not immune to the
            pressures reshaping Minneapolis.
          </p>
        </Prose>
        <ArticleSubsection title="Development Pressure">
          <Prose>
            <p>
              Bryn Mawr&apos;s proximity to downtown and its park and lake
              access make it attractive to developers. Teardowns are less
              common here than in Southwest Minneapolis&apos;s lake
              neighborhoods, but the pressure exists. The neighborhood&apos;s
              small size means that even a few teardowns can noticeably change
              the character of a block. Residents are vigilant — the
              neighborhood association closely monitors zoning and development
              proposals.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="I-394 and Highway Noise">
          <Prose>
            <p>
              The interstate along Bryn Mawr&apos;s northern edge is both an
              asset (fast downtown access) and a liability (noise, pollution,
              visual blight). The blocks closest to I-394 hear it — especially
              in winter when the tree canopy is bare. This is a real quality-of-life
              consideration for anyone looking at homes in the northern
              portion of the neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Affordability Shift">
          <Prose>
            <p>
              Bryn Mawr has historically been more affordable than Kenwood,
              Lowry Hill, and the lake-adjacent neighborhoods — and that
              affordability is part of what gives the neighborhood its
              economic diversity and village character. As prices rise across
              Minneapolis, that affordability advantage is narrowing. The
              working- and middle-class families who gave Bryn Mawr its
              character may find it increasingly difficult to buy in, and the
              neighborhood risks becoming another enclave for the already-comfortable.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Park Usage Pressure">
          <Prose>
            <p>
              Theodore Wirth Park&apos;s mountain biking trails have drawn
              regional and even national attention, which is great for the
              park system and for the sport but has increased traffic and
              parking pressure on the neighborhood&apos;s western edge. The
              park is big enough to absorb it, but the neighborhood streets
              closest to trailheads notice the difference on busy weekends.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Bryn Mawr FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
