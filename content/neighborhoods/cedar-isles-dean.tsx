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
    title: "Cedar - Isles - Dean, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Cedar - Isles - Dean (CIDNA), Minneapolis — Cedar Lake, Lake of the Isles, the Kenilworth Trail, upscale homes, schools, housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Cedar - Isles - Dean",
  deck: "Three names, two lakes, one trail — and one of the most park-rich neighborhoods in a city famous for its parks. Cedar - Isles - Dean occupies the green corridor between Cedar Lake and Lake of the Isles, where the Kenilworth Trail runs like a spine through a neighborhood that barely feels urban.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Cedar - Isles - Dean?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Cedar - Isles - Dean" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Lakes" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Cedar - Isles - Dean, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,000", label: "Residents (Niche / US Census)" },
      { value: "$600K–$950K", label: "Median home sale price range (2025 data)" },
      { value: "16 days", label: "Average time on market (Redfin, 2025)" },
      { value: "2 lakes", label: "Cedar Lake & Lake of the Isles" },
      { value: "1910s–30s", label: "Era most homes were built" },
      { value: "10–15 min", label: "Drive to downtown Minneapolis" },
      { value: "65", label: "Walk Score" },
      { value: "95", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Cedar - Isles - Dean a good neighborhood in Minneapolis?",
      answer:
        "Yes — Cedar - Isles - Dean (often abbreviated CIDNA) is one of the most desirable neighborhoods in Minneapolis. Its combination of two lakes, the Kenilworth Trail, proximity to both Uptown and the western suburbs, and an unusually high ratio of parkland to residential area makes it one of the greenest, most recreation-oriented neighborhoods in the city.",
    },
    {
      question: "Is Cedar - Isles - Dean, Minneapolis safe?",
      answer:
        "Cedar - Isles - Dean is one of the safest neighborhoods in Minneapolis. Violent crime is extremely rare. Property crime — primarily vehicle break-ins near the trails and lakes — occurs occasionally but at low rates. The neighborhood's low density, green space buffers, and residential stability contribute to a strong safety profile.",
    },
    {
      question: "What is Cedar - Isles - Dean known for?",
      answer:
        "CIDNA is known for the Kenilworth Trail (a major bike and pedestrian corridor connecting the Chain of Lakes to Theodore Wirth Park and the western suburbs), Cedar Lake (including the hidden beach on its north shore), Lake of the Isles access, the Cedar Lake Park and islands, and an unusually high percentage of green space for a city neighborhood. It is also known for the Southwest LRT (Green Line Extension) debate, which has centered on the Kenilworth Corridor that runs through the neighborhood.",
    },
    {
      question: "How much do homes cost in Cedar - Isles - Dean, Minneapolis?",
      answer:
        "Median home sale prices in 2025 ranged from approximately $600,000 to $950,000. Condos and smaller homes can occasionally be found in the $400,000–$600,000 range, while larger single-family homes near the lakes or trails regularly exceed $1 million. CIDNA is one of the more expensive neighborhoods in Minneapolis, comparable to Kenwood and the lakefront areas of Linden Hills.",
    },
    {
      question: "Is Cedar - Isles - Dean walkable?",
      answer:
        "For recreation, extremely so — the trail system is exceptional. For daily errands, less so. CIDNA has a Walk Score of 65, reflecting the absence of a commercial district within the neighborhood. Residents drive or bike to Uptown, Linden Hills, or the Hennepin Avenue corridor for restaurants, groceries, and shopping. The Bike Score of 95 is among the highest in the city, reflecting the Kenilworth Trail and lake trail network.",
    },
    {
      question: "What schools serve Cedar - Isles - Dean, Minneapolis?",
      answer:
        "CIDNA is served by Kenwood Elementary School (K–5), which earns strong ratings. Middle school students typically attend Anthony or West Middle School. Southwest Senior High School — an International Baccalaureate World School — serves the area for grades 9–12. Private options including Blake and Breck are nearby.",
    },
    {
      question: "Where exactly is Cedar - Isles - Dean in Minneapolis?",
      answer:
        "Cedar - Isles - Dean is in Southwest Minneapolis, bounded roughly by Cedar Lake to the north, Lake of the Isles and Kenwood Parkway to the east, West Lake Street and the Midtown Greenway to the south, and Cedar Lake Parkway to the west. It borders Kenwood to the north and east, East Isles to the east, South Uptown and West Maka Ska to the south, and Bryn Mawr and St. Louis Park to the west.",
    },
    {
      question: "Why is the neighborhood called Cedar - Isles - Dean?",
      answer:
        "The name combines three geographic references: Cedar Lake (to the north and west), Lake of the Isles (to the east), and Dean Parkway (which connects the two lakes). The neighborhood sits in the corridor between these two lakes, linked by the parkway and the Kenilworth Trail. The hyphenated name reflects the neighborhood's identity as a connector — a place defined by the spaces between landmarks rather than by a single anchor.",
    },
    {
      question: "What is the Kenilworth Trail?",
      answer:
        "The Kenilworth Trail is a paved bike and pedestrian trail that runs through Cedar - Isles - Dean along a former rail corridor between Cedar Lake and Lake of the Isles. It connects the Chain of Lakes trail system to Theodore Wirth Park, the Cedar Lake Trail, and eventually the western suburbs. It is one of the most important trail corridors in the Minneapolis bike network and a defining feature of the CIDNA neighborhood. The corridor is also the planned route for the Southwest LRT (Green Line Extension) light rail line.",
    },
    {
      question: "Is Cedar - Isles - Dean a good place to raise a family?",
      answer:
        "CIDNA is an excellent family neighborhood for those who prioritize outdoor recreation, safety, and strong schools. The trail system and lakes provide exceptional recreation, the schools are well-regarded, and the streets are quiet and safe. The main drawback is the lack of walkable commercial amenities — families will drive or bike for groceries, restaurants, and most shopping.",
    },
  ],
  nearby: [
    { name: "Kenwood", slug: "kenwood", description: "Grand homes and Lake of the Isles" },
    { name: "West Maka Ska", slug: "west-maka-ska", description: "Quiet streets west of Bde Maka Ska" },
    { name: "East Isles", slug: "east-isles", description: "Lake of the Isles east shore and Uptown access" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "Cedar Lake's north shore and Theodore Wirth" },
    { name: "Linden Hills", slug: "linden-hills", description: "Boutique shopping and Lake Harriet" },
    { name: "South Uptown", slug: "south-uptown", description: "Urban energy near Bde Maka Ska" },
  ],
  closing: {
    title: "What Makes Cedar - Isles - Dean Irreplaceable",
    paragraphs: [
      "Cedar - Isles - Dean is not a neighborhood most people can name from memory — it lacks the brand recognition of Linden Hills, the architectural grandeur of Kenwood, or the urban energy of Uptown. What it has instead is something more fundamental: a landscape. Two lakes, a trail corridor, islands, wetlands, mature forest, and an improbable amount of green space, all within ten minutes of a major American downtown. The neighborhood was built in the gaps between these natural features, and it has had the good sense not to try to compete with them. The houses are nice. The trail is better.",
      "The Southwest LRT debate has tested CIDNA's character in ways the neighborhood did not anticipate — forcing residents to choose between the transit connectivity they generally support in principle and the protection of the green corridor they love in practice. That tension is unresolved and may define the neighborhood's next decade. But for now, on a Saturday morning in September, when the Kenilworth Trail is dappled with sunlight and the maples along Cedar Lake are beginning to turn, it is possible to ride a bicycle through Cedar - Isles - Dean and forget that you are in a city of 400,000 people. That forgetting — that moment when the city dissolves into trees and water — is CIDNA's gift, and it is not something that can be manufactured or replaced.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          The Kenilworth Trail cuts through Cedar - Isles - Dean like a seam
          between two worlds. To the east, Lake of the Isles glimmers through
          the trees — manicured parkway, joggers, geese, the elegant homes of{" "}
          <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
            Kenwood
          </Link>{" "}
          reflected in still water. To the west, Cedar Lake hides behind a
          screen of oaks and cottonwoods, wilder and less curated, with a
          hidden beach that locals guard like a secret they half-want you to
          discover. Between them, the trail runs flat and shaded, a former
          railroad corridor repurposed for bikes and walkers and the occasional
          deer that wanders in from Theodore Wirth Park. This is Cedar - Isles
          - Dean in miniature: a neighborhood defined not by a commercial
          district or a landmark building, but by the green spaces it connects
          and the water it sits between.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/cedar-isles-dean/hero.webp"
        alt="The Kenilworth Trail through Cedar - Isles - Dean with Cedar Lake visible through the trees"
        caption="The Kenilworth Trail — the green spine of Cedar - Isles - Dean"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Cedar - Isles - Dean, Minneapolis?">
        <Prose>
          <p>
            Cedar - Isles - Dean — commonly abbreviated CIDNA, after the
            Cedar - Isles - Dean Neighborhood Association — is a small
            residential neighborhood in Southwest Minneapolis, occupying the
            corridor between Cedar Lake to the north and west and Lake of the
            Isles to the east. It is bounded roughly by Cedar Lake to the
            north, Kenwood Parkway and Lake of the Isles Parkway to the east,
            West Lake Street and the Midtown Greenway to the south, and Cedar
            Lake Parkway to the west. Approximately 3,000 people live here,
            making it one of the smaller neighborhoods in the city by
            population.
          </p>
          <p>
            What distinguishes CIDNA from its neighbors is its ratio of green
            space to residential area. A remarkable percentage of the
            neighborhood&apos;s geography is park, lake, trail, or wetland.
            The Kenilworth Trail runs through its center. Dean Parkway
            connects Cedar Lake to Lake of the Isles along a tree-lined
            boulevard. Cedar Lake Park and its islands provide habitat and
            hiking. The result is a neighborhood that feels more like a
            nature preserve with houses than a city neighborhood with parks.
            There is no commercial district — not a single restaurant, shop,
            or coffee house within the neighborhood boundaries. What there
            is, in abundance, is landscape.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Cedar - Isles - Dean Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/cedar-isles-dean/neighborhood-sign.webp"
          alt="Cedar - Isles - Dean neighborhood sign in Minneapolis"
          caption="The Cedar - Isles - Dean neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Cedar - Isles - Dean History & Origins">
        <Prose>
          <p>
            The land between Cedar Lake and Lake of the Isles was part of the
            ancestral homeland of the Dakota people. Both lakes — and the
            wetlands, streams, and woodlands connecting them — were features
            of a living landscape that sustained Dakota communities through
            fishing, wild rice harvesting, and seasonal camps. The corridor
            between the lakes, now occupied by the Kenilworth Trail, was a
            natural travel route through the area long before it became a
            railroad right-of-way.
          </p>
          <p>
            European-American development of the area came in stages. The
            Minneapolis Park Board acquired the land around the lakes in the
            late 19th and early 20th centuries as part of its ambitious
            program to create a continuous chain of parks and parkways.
            Cedar Lake was less developed than Lake of the Isles — its
            shores were marshy and wooded, less amenable to the formal
            parkway treatment applied to the Isles — and it retained a
            wilder character that persists today. Dean Parkway, named for
            an early Minneapolis landowner, was constructed to connect the
            two lakes, establishing the geographic spine of the
            neighborhood.
          </p>
          <p>
            The railroad corridor that now carries the Kenilworth Trail was
            originally part of the Minneapolis &amp; St. Louis Railway, later
            absorbed into the Chicago &amp; North Western system. Freight
            trains ran through the corridor for decades, and the rail
            right-of-way shaped the neighborhood&apos;s development by
            creating a linear barrier that separated Cedar Lake from Lake
            of the Isles. When rail traffic declined, the corridor was
            repurposed for recreational use — the Kenilworth Trail opened in
            1996 and quickly became one of the most popular biking and
            walking routes in the city.
          </p>
          <p>
            Residential construction in CIDNA followed the same pattern as
            neighboring Kenwood and{" "}
            <Link href="/neighborhoods/east-isles" className="text-[#2a9d8f] hover:underline">
              East Isles
            </Link>
            : homes went up in the 1910s and 1920s, designed for affluent
            families drawn to the lakes and the park system. The housing
            stock — Colonial Revivals, Tudors, Craftsman homes, and
            stucco two-stories — reflects the architectural tastes of
            that era. The neighborhood has remained stable and affluent
            ever since, with its character defined less by the homes
            themselves and more by the extraordinary natural setting
            that surrounds them.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Cedar - Isles - Dean">
        <Prose>
          <p>
            Living in CIDNA feels like living inside a park system. The
            trails are not something you drive to — they are your commute,
            your morning run, your evening walk, your kid&apos;s bike route
            to school. Cedar Lake is visible through the trees from half
            the streets in the neighborhood. Lake of the Isles gleams from
            the other half. The soundscape is more birdsong than traffic.
            In autumn, when the maples and oaks along the Kenilworth
            corridor turn, the neighborhood becomes almost unreasonably
            beautiful — a corridor of gold and red that lasts for two
            weeks and draws cyclists from across the city.
          </p>
          <p>
            The social character is private, established, and quiet. CIDNA
            has no commercial gathering place — no coffee shop, no
            restaurant, no corner store. Community connections form through
            the neighborhood association (CIDNA is one of the more active
            neighborhood organizations in Minneapolis), through school
            networks, and through the informal interactions that happen
            on the trails. The Kenilworth Trail is, in a sense, CIDNA&apos;s
            Main Street: the place where neighbors encounter each other,
            exchange greetings, and maintain the casual familiarity that
            substitutes for a commercial center.
          </p>
          <p>
            The demographic profile is affluent, white, and highly educated
            — consistent with the broader lakeside Southwest Minneapolis
            pattern. Household incomes are well above the city median.
            Professional careers are disproportionately represented. The
            political orientation is progressive, with strong environmentalist
            leanings that are unsurprising given the neighborhood&apos;s
            relationship to its landscape. CIDNA residents tend to be
            deeply invested in park system governance, trail maintenance,
            and environmental policy — the issues that directly affect
            their daily experience of the neighborhood.
          </p>
        </Prose>
        <Quote
          text="My commute to downtown is twenty minutes by bike on the Kenilworth Trail. I pass through a forest, between two lakes, and I don't cross a single road. Name another neighborhood in a major American city where you can say that."
          cite="CIDNA resident and bike commuter"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Cedar - Isles - Dean Food, Drink & Local Spots">
        <Prose>
          <p>
            CIDNA has no commercial establishments within its boundaries —
            no restaurants, no cafes, no shops of any kind. This is the
            most extreme version of the purely residential character seen
            in several lakeside Southwest Minneapolis neighborhoods. All
            dining, shopping, and commercial activity happens in the
            surrounding neighborhoods, all of which are easily accessible
            by bike or short drive.
          </p>
        </Prose>

        <ArticleSubsection title="Where CIDNA Residents Eat & Shop">
          <PlaceCardComponent place={{ name: "Uptown (Hennepin & Lake)", tag: "Dining & Entertainment District", description: "Uptown's restaurant and retail corridor is a short bike ride or drive east. The full range of cuisines, bars, and shops available in Uptown serves as CIDNA's commercial ecosystem. The proximity is close — ten minutes by bike — but the worlds feel distinct." }} />
          <PlaceCardComponent place={{ name: "Linden Hills (43rd & Upton)", tag: "Shopping & Dining District", description: "The Linden Hills commercial district — Tilia, Sebastian Joe's, Wild Rumpus, and the cluster of independent shops — is accessible south via the lake trails. Many CIDNA families consider 43rd & Upton their primary neighborhood commercial center, despite it being in a different neighborhood." }} />
          <PlaceCardComponent place={{ name: "Kenwood Restaurant", tag: "New American", price: "$$$", description: "2115 W. 21st Street, in Lowry Hill. The refined, intimate neighborhood restaurant serves as a go-to for CIDNA and Kenwood residents seeking a walkable (or at least nearby) dining option. Seasonal menu, strong brunch, loyal following." }} />
          <PlaceCardComponent place={{ name: "Kowalski's Market (Uptown)", tag: "Grocery", price: "$$", description: "1261 Hennepin Ave. S. The closest full-service grocery for many CIDNA households. A locally owned upscale grocery with strong prepared foods, organic produce, and a wine selection that serves the lakeside neighborhoods." }} />
          <PlaceCardComponent place={{ name: "Rustica Bakery (West Lake Street)", tag: "Bakery & Cafe", price: "$$", url: "https://www.rusticabakery.com", description: "Near the southern edge of CIDNA on West Lake Street. Nationally recognized artisan bakery known for exceptional bread, pastries, and a small cafe menu. The cardamom croissant has a devoted following. A rare walk-to option for CIDNA's southern residents." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Lakes Near Cedar - Isles - Dean">
        <Prose>
          <p>
            Outdoor recreation is not an amenity in CIDNA — it is the
            neighborhood. The ratio of parkland, lake, and trail to
            residential area is the highest of any neighborhood in
            Minneapolis, and the quality and connectivity of the outdoor
            spaces are exceptional by any national standard.
          </p>
        </Prose>

        <ArticleSubsection title="Cedar Lake & Cedar Lake Park">
          <Prose>
            <p>
              Cedar Lake is CIDNA&apos;s wilder lake — less manicured than
              Lake of the Isles, with wooded shorelines, marshy edges, and
              a more natural character. Cedar Lake Park, on the lake&apos;s
              southern shore, provides trails through mature hardwood forest,
              open meadows, and wetland areas. The Hidden Beach on the
              lake&apos;s north shore — technically in{" "}
              <Link href="/neighborhoods/bryn-mawr" className="text-[#2a9d8f] hover:underline">
                Bryn - Mawr
              </Link>{" "}
              but culturally claimed by CIDNA — has historically been a
              clothing-optional beach and remains one of the most
              distinctive swimming spots in the city. The lake supports
              fishing (bass, sunfish, and northern pike), canoeing, and
              kayaking. In winter, cross-country ski trails loop through
              Cedar Lake Park.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/cedar-isles-dean/cedar-lake.webp"
            alt="Cedar Lake seen from the trail through Cedar Lake Park"
            caption="Cedar Lake — wilder, quieter, and less polished than its neighbors"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Lake of the Isles">
          <Prose>
            <p>
              Lake of the Isles forms CIDNA&apos;s eastern boundary. The
              2.8-mile paved loop, the wooded islands, and the elegant
              parkway homes create one of the most beautiful urban lake
              settings in America. CIDNA residents access the Isles trail
              from the west side, which tends to be slightly less trafficked
              than the eastern (
              <Link href="/neighborhoods/east-isles" className="text-[#2a9d8f] hover:underline">
                East Isles
              </Link>
              ) shore. The connection between Cedar Lake and Lake of the
              Isles via Dean Parkway allows continuous trail use between the
              two lakes — a seamless green corridor through the
              neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Kenilworth Trail">
          <Prose>
            <p>
              The Kenilworth Trail is CIDNA&apos;s defining infrastructure —
              a paved multi-use trail running north-south through the
              neighborhood along a former railroad corridor. It connects
              the Chain of Lakes trail system to the Cedar Lake Trail, which
              continues north to Theodore Wirth Park (the largest park in
              the Minneapolis system, at over 700 acres) and west to the
              suburbs. For bike commuters, the Kenilworth Trail provides a
              fast, car-free route to downtown Minneapolis — roughly 20
              minutes from CIDNA. For recreational users, it is the spine
              of a trail network that extends in every direction. The
              corridor is also the planned route for the Southwest LRT
              (Green Line Extension), a source of significant neighborhood
              debate.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Chain of Lakes & Grand Rounds">
          <Prose>
            <p>
              From CIDNA, the entire Minneapolis Chain of Lakes is accessible
              on a continuous trail system: Cedar Lake to Lake of the Isles
              to Bde Maka Ska to Lake Harriet — roughly 13 miles of
              connected trails through four lakes. The Grand Rounds National
              Scenic Byway passes directly through the neighborhood. It is
              possible to step out of a CIDNA home and bike, run, or ski
              for hours without leaving the park system. Few urban
              neighborhoods anywhere in the country can make this claim.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Cedar - Isles - Dean Schools">
        <Prose>
          <p>
            CIDNA is served by Kenwood Elementary School (K–5), a
            well-regarded neighborhood school with strong ratings and an
            active parent community. The school reflects the
            neighborhood&apos;s demographic profile: small, engaged, and
            well-resourced.
          </p>
          <p>
            Middle school students typically attend Anthony or West Middle
            School. The high school is Southwest Senior High School, an
            International Baccalaureate World School with strong academics
            and an A-minus rating from Niche. Southwest&apos;s IB program
            draws students from across Southwest Minneapolis.
          </p>
          <p>
            Private and independent school options include the Blake School,
            Breck School, and various Montessori and parochial programs
            accessible by car. The neighborhood&apos;s proximity to both
            Minneapolis and suburban school options gives families genuine
            choice, shaped by the financial resources that CIDNA households
            disproportionately possess.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Cedar - Isles - Dean Real Estate & Housing">
        <Prose>
          <p>
            Cedar - Isles - Dean is one of the more expensive neighborhoods
            in Minneapolis, with median home sale prices in 2025 ranging
            from approximately $600,000 to $950,000. The market is
            competitive but constrained by limited inventory — the
            neighborhood is small, the housing stock is mostly built out,
            and properties don&apos;t turn over frequently. Homes averaged
            about 16 days on market in 2025.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the relative entry level ($400,000–$600,000), you might
              find a condo in one of the neighborhood&apos;s few
              multi-unit buildings, or a smaller home on an interior lot.
              The mid-range ($650,000–$950,000) includes well-maintained
              three- and four-bedroom homes from the 1910s and 1920s —
              Colonial Revivals, stucco two-stories, and Craftsman homes
              with original character and updated systems. Above $1
              million, you&apos;re looking at larger homes with trail or
              lake access, parkway frontage, or architect-designed
              properties with significant historic character.
            </p>
            <p>
              The housing stock is primarily single-family homes, with
              a small number of condos and townhomes concentrated near
              the neighborhood&apos;s edges. Lot sizes vary — some
              properties back up to parkland, providing a sense of
              spaciousness that lot dimensions alone don&apos;t capture.
              The architectural quality is high, consistent with
              neighboring Kenwood, though CIDNA homes tend to be
              slightly more modest in scale than the grandest Kenwood
              estates.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/cedar-isles-dean/residential-street.webp"
          alt="A residential street in Cedar - Isles - Dean with homes backing up to parkland"
          caption="CIDNA homes — where residential streets meet the park system"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Cedar - Isles - Dean">
        <Prose>
          <p>
            CIDNA&apos;s Walk Score of 65 is the lowest among the lakeside
            Southwest Minneapolis neighborhoods — a direct reflection of
            the absence of any commercial activity within the neighborhood.
            For walking to errands, CIDNA is genuinely inconvenient. For
            walking and biking for recreation, it is one of the best
            neighborhoods in the country.
          </p>
          <p>
            The Bike Score of 95 is extraordinary — among the highest in
            Minneapolis. The Kenilworth Trail, the lake trails, and the
            connections to the broader Minneapolis bike network make cycling
            the dominant alternative to driving. Commuting to downtown by
            bike via the Kenilworth Trail takes approximately 20 minutes
            and is entirely car-free. Many CIDNA residents are committed
            cyclists who chose the neighborhood specifically for this
            infrastructure.
          </p>
          <p>
            By car, downtown Minneapolis is 10–15 minutes via I-394 or
            Hennepin Avenue. The western suburbs are equally accessible via
            the same routes. MSP International Airport is approximately
            20 minutes via Highway 62 or I-35W. Metro Transit bus service
            is available on Hennepin Avenue and Lake Street, at the
            neighborhood&apos;s edges. The planned Southwest LRT station
            at the Kenilworth Corridor would provide direct light rail
            service to downtown and the western suburbs — a transformative
            transit addition, if and when it is completed.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            CIDNA&apos;s defining tension is between its extraordinary
            natural setting and the infrastructure decisions that threaten
            to alter it. The neighborhood is not in transition — it is in
            a prolonged negotiation over the terms of its own future.
          </p>
        </Prose>

        <ArticleSubsection title="The Southwest LRT & the Kenilworth Corridor">
          <Prose>
            <p>
              The planned METRO Green Line Extension (Southwest Light Rail
              Transit) is the most consequential infrastructure decision
              affecting CIDNA. The line&apos;s planned route runs through
              the Kenilworth Corridor — the same corridor that carries the
              Kenilworth Trail — placing light rail tracks alongside (and
              in some proposals, through) the neighborhood&apos;s most
              treasured green space. CIDNA residents have been among the
              most vocal opponents of the Kenilworth alignment, raising
              concerns about noise, vibration, environmental impact on
              Cedar Lake and the surrounding wetlands, construction
              disruption, and the fundamental question of whether a transit
              line belongs in a park corridor.
            </p>
            <p>
              The debate has been bitter, lengthy, and expensive. The project
              has faced significant cost overruns and delays. Proponents
              argue that the Southwest LRT will provide critical transit
              connections between downtown Minneapolis, the western suburbs,
              and Eden Prairie — reducing car dependency and expanding
              access. Opponents — including many CIDNA residents — argue
              that the Kenilworth Corridor should have been preserved as
              a green space and that alternative alignments were
              insufficiently considered. The tension between transit
              advocacy and environmental preservation has split the
              neighborhood&apos;s progressive consensus and revealed the
              limits of NIMBY criticism: when the backyard in question is
              one of the finest urban green corridors in the country, the
              stakes of development are genuinely high.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Wealth, Access & Environmental Justice">
          <Prose>
            <p>
              CIDNA is one of the wealthiest neighborhoods in Minneapolis,
              and its residents have the resources — financial, legal, and
              political — to influence planning decisions in ways that less
              affluent neighborhoods cannot. The Southwest LRT debate has
              drawn criticism that CIDNA&apos;s opposition reflects the
              power of wealthy, predominantly white residents to protect
              their own quality of life at the expense of broader transit
              access for lower-income communities. This critique has some
              merit, though it coexists with legitimate environmental
              concerns that transcend neighborhood self-interest. The
              intersection of wealth, environmental values, and transit
              equity is complicated, and CIDNA sits squarely at the center
              of it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Climate & Ecosystem Health">
          <Prose>
            <p>
              Cedar Lake and Lake of the Isles face the same environmental
              pressures affecting urban water bodies across Minnesota:
              stormwater runoff, invasive species, algal blooms, and the
              effects of warming temperatures on water quality and
              ecosystem health. Cedar Lake, with its more natural
              shorelines and less formal management, is particularly
              vulnerable to ecological degradation. The wetlands
              connecting the lakes — critical for water filtration and
              wildlife habitat — are under pressure from development and
              climate change. For a neighborhood whose identity is built
              on its landscape, the health of that landscape is
              existential.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Cedar - Isles - Dean FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
