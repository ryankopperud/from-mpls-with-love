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
    title: "East Harriet, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about East Harriet, Minneapolis — Lyndale Farmstead Park, Lyndale Avenue, Lake Harriet access, charming homes, schools, housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "East Harriet",
  deck: "The neighborhood between the avenues and the lake — where Lyndale Farmstead Park anchors a residential community that has all the charm of Linden Hills across the water, at slightly less breathtaking prices.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is East Harriet?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in East Harriet" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Lakes" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "East Harriet, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,500", label: "Residents (Niche / US Census)" },
      { value: "$475K–$675K", label: "Median home sale price range (2025 data)" },
      { value: "10 days", label: "Average time on market (Redfin, 2025)" },
      { value: "1 lake", label: "Lake Harriet on the western border" },
      { value: "1910s–30s", label: "Era most homes were built" },
      { value: "15–20 min", label: "Drive to downtown or MSP airport" },
      { value: "72", label: "Walk Score" },
      { value: "88", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is East Harriet a good neighborhood in Minneapolis?",
      answer:
        "Yes — East Harriet is one of the most desirable neighborhoods in Southwest Minneapolis. It offers proximity to Lake Harriet, beautiful housing stock, strong schools, Lyndale Farmstead Park, and access to the Lyndale Avenue commercial corridor. It is often described as having the charm of Linden Hills at a slightly more approachable price point.",
    },
    {
      question: "Is East Harriet, Minneapolis safe?",
      answer:
        "East Harriet is one of the safer neighborhoods in Minneapolis. Violent crime is rare. Property crime — vehicle break-ins, package theft — occurs at low-to-moderate rates consistent with Southwest Minneapolis trends. The residential streets are quiet and well-lit, and block club participation is strong.",
    },
    {
      question: "What is East Harriet, Minneapolis known for?",
      answer:
        "East Harriet is known for Lyndale Farmstead Park (a beloved community park with an off-leash dog area, wading pool, and gardens), its proximity to the east shore of Lake Harriet, its charming 1920s housing stock, and the Lyndale Avenue commercial corridor. It is a quintessential Southwest Minneapolis family neighborhood — tree-lined, lake-adjacent, and community-oriented.",
    },
    {
      question: "How much do homes cost in East Harriet, Minneapolis?",
      answer:
        "Median home sale prices in 2025 ranged from approximately $475,000 to $675,000. Smaller bungalows and starter homes can occasionally be found in the $375,000–$450,000 range, while larger renovated homes and properties near the lake can exceed $800,000. East Harriet is expensive by citywide standards but slightly more accessible than neighboring Linden Hills.",
    },
    {
      question: "Is East Harriet walkable?",
      answer:
        "Moderately — East Harriet has a Walk Score of 72. The Lyndale Avenue corridor provides walkable access to restaurants, coffee shops, and some retail, and Lake Harriet is accessible on foot from most addresses. However, the neighborhood lacks a dense commercial node like Linden Hills' 43rd & Upton, so some errands require a short drive or bike ride. The Bike Score of 88 reflects excellent trail access via the lake paths.",
    },
    {
      question: "What schools serve East Harriet, Minneapolis?",
      answer:
        "East Harriet is served by Lake Harriet Lower Elementary (K–2) and Lake Harriet Upper Elementary (3–5) — the same strong school pipeline that serves neighboring Linden Hills. Middle school is typically Anthony Middle School, and the high school is Southwest Senior High, an International Baccalaureate World School.",
    },
    {
      question: "Where exactly is East Harriet in Minneapolis?",
      answer:
        "East Harriet is in Southwest Minneapolis, bounded roughly by West 36th Street and the Midtown Greenway to the north, Lyndale Avenue South to the east, West 44th Street to the south, and Lake Harriet Parkway to the west. It borders South Uptown and East Bde Maka Ska to the north, King Field and Tangletown to the east, Lynnhurst to the south, and Linden Hills (across Lake Harriet) to the west.",
    },
    {
      question: "What is Lyndale Farmstead Park?",
      answer:
        "Lyndale Farmstead Park is a 14-acre community park at Lyndale Avenue and 42nd Street, in the heart of East Harriet. It features an off-leash dog park, a wading pool, community garden plots, tennis courts, playground equipment, and open green space. The park sits on the site of a former farmstead and serves as East Harriet's primary gathering place. It is one of the more popular off-leash dog areas in South Minneapolis.",
    },
    {
      question: "Is East Harriet a good place to raise a family?",
      answer:
        "East Harriet is widely considered one of the best family neighborhoods in Minneapolis. The Lake Harriet school pipeline is strong, Lyndale Farmstead Park provides excellent recreation, the streets are safe and walkable, and Lake Harriet is close enough for evening walks and summer swimming. The neighborhood's community orientation — block parties, school events, park gatherings — creates a supportive environment for families with children.",
    },
    {
      question: "What is the difference between East Harriet and Linden Hills?",
      answer:
        "East Harriet and Linden Hills are neighboring communities that share access to Lake Harriet and the same school pipeline. Linden Hills has a stronger commercial identity (the 43rd & Upton district), more direct lakefront access, and higher home prices. East Harriet has Lyndale Farmstead Park, access to the Lyndale Avenue corridor, and slightly more affordable housing. Both are excellent family neighborhoods with similar character — East Harriet is sometimes described as Linden Hills' more approachable sibling.",
    },
  ],
  nearby: [
    { name: "Linden Hills", slug: "linden-hills", description: "Boutique shopping and Lake Harriet's west shore" },
    { name: "South Uptown", slug: "south-uptown", description: "Urban energy near Bde Maka Ska" },
    { name: "Lynnhurst", slug: "lynnhurst", description: "Stately homes south of 44th Street" },
    { name: "King Field", slug: "king-field", description: "Community-oriented living near Nicollet Avenue" },
    { name: "Tangletown", slug: "tangletown", description: "Winding streets and Washburn-Fair Oaks Park" },
    { name: "East Bde Maka Ska", slug: "east-bde-maka-ska", description: "Lakeside living near Uptown" },
  ],
  closing: {
    title: "What Makes East Harriet Irreplaceable",
    paragraphs: [
      "East Harriet does not have the brand recognition of Linden Hills or the grandeur of Kenwood. It does not have a famous bookstore or a nationally known restaurant. What it has is something harder to name and just as hard to replicate: the feeling of a neighborhood that works. The park is big enough for the dog and the kids and the gardeners. The lake is a ten-minute walk. The schools are strong. The houses are beautiful without being showy. The neighbors know each other by name but not by obligation. It is the kind of place where people move in planning to stay three years and stay for twenty.",
      "That quiet functionality is East Harriet's greatest asset and the thing most at risk from rising prices and demographic narrowing. The neighborhood's charm depends partly on its accessibility — the sense that this is not a neighborhood reserved for the wealthy, but one where a middle-class family can find a Craftsman bungalow and a good school and a park for the dog. As prices climb and the entry cost increases, that accessibility frays. East Harriet remains an outstanding place to live. The question is for whom.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday morning in June, Lyndale Farmstead Park is a
          cross-section of everything East Harriet does well. Dogs chase each
          other in the off-leash area. A toddler splashes in the wading pool.
          Someone is weeding their community garden plot. A couple walks toward
          Lake Harriet with coffee, ten minutes away on foot. The scene is
          unremarkable in the best possible sense — the kind of ordinary
          neighborhood life that looks easy but is actually the product of
          good parks, stable housing, invested residents, and the slow
          accumulation of community trust. East Harriet doesn&apos;t make
          headlines. It makes Saturday mornings.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/east-harriet/hero.webp"
        alt="Tree-lined street in East Harriet with Craftsman bungalows and mature canopy"
        caption="East Harriet — quiet streets, old trees, and Lake Harriet just beyond"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is East Harriet, Minneapolis?">
        <Prose>
          <p>
            East Harriet is a residential neighborhood in Southwest
            Minneapolis, situated between Lake Harriet to the west and
            Lyndale Avenue South to the east. It is bounded by West 36th
            Street and the Midtown Greenway to the north and West 44th
            Street to the south. Approximately 5,500 residents live here,
            mostly in single-family homes dating to the 1910s through the
            1930s, on tree-lined streets that feel like a catalog of
            Minneapolis at its most quietly attractive.
          </p>
          <p>
            East Harriet occupies the eastern shore of Lake Harriet — the
            flip side of{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            , which wraps around the lake&apos;s western and southern shores.
            The two neighborhoods share a school pipeline, a lake, and a
            general character, but East Harriet has its own identity: less
            commercially defined than Linden Hills (no equivalent to the
            43rd &amp; Upton district), more anchored by parks and
            residential character, and slightly more accessible in terms of
            housing costs. Lyndale Farmstead Park — a 14-acre community park
            with an off-leash dog area, wading pool, and garden plots —
            serves as the neighborhood&apos;s social center in the way that
            a commercial district might elsewhere.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="East Harriet Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/east-harriet/neighborhood-sign.webp"
          alt="East Harriet neighborhood sign in Minneapolis"
          caption="The East Harriet neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="East Harriet History & Origins">
        <Prose>
          <p>
            The land east of Lake Harriet was part of the ancestral homeland
            of the Dakota people. Lake Harriet and the surrounding area were
            used for fishing, wild rice harvesting, and seasonal camps for
            centuries before European-American arrival. The forced removal
            of the Dakota in the mid-19th century opened the land to
            settlement, and the lakes — treasured by the Dakota as sources
            of sustenance and spiritual significance — were reimagined as
            recreational amenities for a growing American city.
          </p>
          <p>
            Lake Harriet became one of Minneapolis&apos;s earliest
            recreational destinations in the 1880s, when the streetcar
            company extended service to the lake and built pavilions to
            attract riders. The east side of the lake developed more slowly
            than the west, partly because the streetcar routes favored the
            western approach. But by the 1910s and 1920s, residential
            construction was filling in the blocks between the lake and
            Lyndale Avenue, creating the neighborhood that exists today.
          </p>
          <p>
            The name &quot;East Harriet&quot; is straightforward geography —
            this is the neighborhood east of Lake Harriet. The housing stock
            built during the streetcar era — Craftsman bungalows, stucco
            two-stories, Tudor cottages, and Colonial Revivals — remains the
            dominant architectural character. These homes were built for the
            middle class: schoolteachers, shopkeepers, clerks, and small
            business owners who commuted to downtown on the streetcar. Their
            modest scale, careful detailing, and front-porch orientation
            create a streetscape that rewards walking at a pace most
            neighborhoods have forgotten.
          </p>
          <p>
            Lyndale Farmstead Park takes its name from its history: the land
            was once part of a working farmstead before the city grew around
            it. The park was established in the early 20th century and has
            served as the neighborhood&apos;s primary green space and
            community gathering place ever since. The off-leash dog area,
            community gardens, and wading pool were added in subsequent
            decades, reflecting the neighborhood&apos;s evolving needs and
            priorities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in East Harriet">
        <Prose>
          <p>
            East Harriet is a neighborhood that works best for people who
            want their surroundings to be reliable rather than exciting. The
            streets are shaded by mature elms and oaks. The houses are
            maintained with pride but not ostentation. Neighbors wave. Block
            parties happen. The park is full on weekends. The rhythms of
            life here are seasonal — lake walks in summer, leaf-raking in
            fall, cross-country skiing in winter, mud and anticipation in
            spring — and the community is organized enough to mark the
            transitions with informal rituals.
          </p>
          <p>
            Families are the center of gravity. The Lake Harriet school
            pipeline — shared with Linden Hills — is a primary draw, and the
            neighborhood&apos;s safety, walkability to the lake, and park
            infrastructure make it ideal for households with children.
            Lyndale Farmstead Park functions as a de facto community center:
            the dog park is where neighbors meet, the garden plots build
            relationships across blocks, and the wading pool is where
            toddler friendships form. It is a park-centered neighborhood in
            a city famous for its parks.
          </p>
          <p>
            The demographic profile is similar to the broader Southwest
            Minneapolis pattern: predominantly white, middle-to-upper-income,
            well-educated, and politically progressive. Yard signs reflect
            environmental and social justice commitments. Composting bins
            are standard. The Lyndale Avenue corridor on the eastern edge
            provides some commercial amenity — restaurants, coffee shops,
            a hardware store — but East Harriet is not a neighborhood defined
            by its commercial life. It is defined by its domestic life: the
            houses, the park, the lake, the schools, the neighbors.
          </p>
        </Prose>
        <Quote
          text="We looked at Linden Hills and couldn't quite afford what we wanted. Then we found East Harriet — same schools, same lake, same kind of neighbors, and a house we could actually buy. That was twelve years ago. We're not leaving."
          cite="East Harriet homeowner"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="East Harriet Food, Drink & Local Spots">
        <Prose>
          <p>
            East Harriet does not have a concentrated commercial district, but
            the Lyndale Avenue corridor along its eastern border provides a
            scattered collection of restaurants, cafes, and neighborhood
            businesses. For a more dense commercial experience, residents
            head west to{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            &apos; 43rd &amp; Upton district or north to Uptown.
          </p>
        </Prose>

        <ArticleSubsection title="Along Lyndale Avenue & Nearby">
          <PlaceCardComponent place={{ name: "Harriet Brasserie", tag: "French-American", price: "$$$", description: "Located near the Lake Harriet area, Harriet Brasserie offers a seasonal, locally sourced menu in a warm neighborhood setting. Popular for brunch and dinner among East Harriet and Linden Hills families." }} />
          <PlaceCardComponent place={{ name: "Bull's Horn", tag: "Bar & Kitchen", price: "$$", description: "4124 Lyndale Ave. S. A neighborhood bar and restaurant on the Lyndale Avenue corridor with a solid craft beer selection, a straightforward food menu, and a loyal local following. The kind of place where you go because it's your bar, not because it's trendy." }} />
          <PlaceCardComponent place={{ name: "Patisserie 46", tag: "Bakery", price: "$$", url: "https://www.patisserie46.com", description: "4552 Grand Ave. S. Just south of East Harriet in Tangletown, but close enough that East Harriet residents claim it. Nationally recognized pastries and baked goods from chef John Kraus. The croissants are exceptional. The morning buns sell out early. Worth the trip from anywhere in the city." }} />
          <PlaceCardComponent place={{ name: "Linden Hills Commercial District", tag: "Shopping & Dining", description: "The 43rd & Upton district in Linden Hills — a short drive or bike ride across the lake — provides East Harriet residents with Tilia, Sebastian Joe's, Wild Rumpus, and the full range of Linden Hills' independent businesses. Many East Harriet families consider this their extended commercial center." }} />
          <PlaceCardComponent place={{ name: "Lyndale Avenue Corridor", tag: "Dining & Services", description: "Lyndale Avenue South, running along East Harriet's eastern boundary, provides a scattered mix of restaurants, cafes, and neighborhood services. The corridor is less dense than Hennepin or Lake Street but offers enough to handle everyday needs — and the businesses here tend to be genuinely neighborhood-serving rather than destination-driven." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Lakes Near East Harriet">
        <Prose>
          <p>
            East Harriet&apos;s outdoor assets are exceptional — anchored by
            Lake Harriet to the west and Lyndale Farmstead Park at the
            neighborhood&apos;s center. The combination of lake recreation
            and park-based community life is the core of what makes East
            Harriet work as a residential neighborhood.
          </p>
        </Prose>

        <ArticleSubsection title="Lake Harriet">
          <Prose>
            <p>
              Lake Harriet borders East Harriet to the west. The roughly
              3-mile paved loop around the lake provides year-round
              recreation — walking, running, cycling, and rollerblading
              in warm months, cross-country skiing and fat-tire biking in
              winter. Two public beaches offer swimming. The Lake Harriet
              Bandshell — where free concerts have been a Minneapolis
              tradition since the 1880s — is accessible from East Harriet
              via the lakefront path. The Rose Garden at the lake&apos;s
              north end and the Bird Sanctuary provide quieter, more
              contemplative spaces. East Harriet residents access the lake
              via several entry points along the eastern parkway, making
              it a genuine daily-use amenity rather than a weekend
              destination.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/east-harriet/lake-harriet.webp"
            alt="Lake Harriet's east shore path with walkers and joggers"
            caption="Lake Harriet from the east — East Harriet's western boundary"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Lyndale Farmstead Park">
          <Prose>
            <p>
              Lyndale Farmstead Park is East Harriet&apos;s heart — a
              14-acre park at Lyndale Avenue and 42nd Street that serves
              as the neighborhood&apos;s primary gathering space. The
              off-leash dog park is one of the most popular in South
              Minneapolis, drawing regulars from several surrounding
              neighborhoods. Community garden plots — in high demand and
              maintained with visible pride — produce tomatoes, squash,
              flowers, and friendships. The wading pool draws young
              families in summer. Tennis courts, a playground, and open
              green space round out the amenities. It is not a
              destination park — it is a neighborhood park, in the best
              sense, meaning it belongs to the people who live around it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway — a 5.5-mile below-grade bike and
              pedestrian trail built on a former rail corridor — runs
              along East Harriet&apos;s northern boundary. It provides
              a car-free east-west route across the city, connecting to
              the Chain of Lakes at its western end and to the
              Mississippi River at its eastern end. For East Harriet
              bike commuters heading downtown or to Northeast
              Minneapolis, the Greenway is a game-changer — fast,
              protected, and scenic. The trail also connects to the lake
              paths, making it possible to ride from East Harriet to
              Lake of the Isles, Cedar Lake, or Bde Maka Ska without
              touching a road.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="East Harriet Schools">
        <Prose>
          <p>
            East Harriet shares the Lake Harriet school pipeline with
            neighboring Linden Hills — one of the strongest public school
            pathways in Minneapolis and a primary reason families choose
            this part of the city.
          </p>
          <p>
            Lake Harriet Lower Elementary (K–2) and Lake Harriet Upper
            Elementary (3–5) serve the neighborhood. Both are well-regarded,
            with strong Niche ratings and active parent communities. Middle
            school is Anthony Middle School, which feeds several Southwest
            Minneapolis neighborhoods and earns a B rating from Niche. The
            high school is Southwest Senior High School — an International
            Baccalaureate World School with strong academics, a notable
            performing arts program, and an A-minus Niche rating.
          </p>
          <p>
            Private options accessible from East Harriet include the Blake
            School, Breck School, and various Montessori and parochial
            programs. The neighborhood&apos;s school-centered family culture
            means that school choice conversations are a significant part of
            the social fabric — at the park, at school events, and among
            neighbors.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="East Harriet Real Estate & Housing">
        <Prose>
          <p>
            East Harriet is an expensive neighborhood by Minneapolis
            standards, though somewhat more accessible than Linden Hills
            across the lake. Median home sale prices in 2025 ranged from
            approximately $475,000 to $675,000. Homes sell quickly — an
            average of about 10 days on market in 2025, reflecting strong
            demand from families drawn to the school pipeline, the lake,
            and the neighborhood&apos;s overall quality.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($375,000–$475,000), you&apos;re looking at
              smaller bungalows or homes that need updating — these are
              competitive and don&apos;t last long. The mid-range ($500,000–
              $700,000) gets you a well-maintained three- or four-bedroom
              home from the 1920s: Craftsman bungalows with original
              woodwork, stucco two-stories with updated kitchens, or Tudor
              cottages with character. Above $750,000, you&apos;re looking
              at larger renovated homes, properties closer to the lake, or
              homes on especially desirable blocks.
            </p>
            <p>
              The housing stock is overwhelmingly single-family homes from
              the 1910s through the 1930s. Craftsman bungalows and stucco
              two-stories are the most common styles. Lot sizes are modest
              — typical city lots — but mature trees and thoughtful
              landscaping give many properties a more spacious feel. A
              small number of duplexes and apartment buildings exist along
              Lyndale Avenue, but the interior streets are almost entirely
              single-family residential.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/east-harriet/residential-street.webp"
          alt="Craftsman bungalows on a tree-lined street in East Harriet"
          caption="1920s Craftsman bungalows — the East Harriet standard"
        />

        <ArticleSubsection title="The Linden Hills Comparison">
          <Prose>
            <p>
              East Harriet is frequently compared to Linden Hills, and the
              comparison is fair: both neighborhoods share Lake Harriet,
              the same school pipeline, similar housing stock, and a
              comparable community character. The key differences are
              commercial (Linden Hills has the 43rd &amp; Upton district;
              East Harriet does not) and financial (Linden Hills homes
              tend to sell for $100,000–$200,000 more). For families
              choosing between the two, the decision often comes down to
              whether the walkable commercial district is worth the
              premium. Many East Harriet residents will tell you it is
              not — that the lake and the park and the schools are the
              same, and the savings buy a bigger house or a college fund.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around East Harriet">
        <Prose>
          <p>
            East Harriet&apos;s Walk Score of 72 reflects decent but not
            outstanding pedestrian access to daily amenities. The lake is
            walkable from everywhere. The Lyndale Avenue corridor provides
            some commercial access on foot. But for a full grocery run or
            a wider range of restaurants, most residents drive or bike to
            Linden Hills, Uptown, or the 50th &amp; France area in
            Edina.
          </p>
          <p>
            The Bike Score of 88 is strong, driven by the lake trails, the
            Midtown Greenway, and on-street bike lanes along Lyndale
            Avenue. Biking is a primary transportation mode for many East
            Harriet residents — the Greenway provides a fast, car-free
            route to downtown, and the lake trails connect to the broader
            Chain of Lakes network.
          </p>
          <p>
            Metro Transit bus service on Lyndale Avenue provides north-south
            transit to downtown and south Minneapolis. Frequency is moderate.
            For commuting to downtown, most residents drive (15–20 minutes)
            or bike the Greenway. MSP International Airport is approximately
            20 minutes by car via Highway 62. Most households own at least
            one car, but the bike infrastructure and the Greenway make
            car-light living feasible for residents who work in the central
            city.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            East Harriet is a stable neighborhood, but stability does not
            mean stasis. Several pressures are worth understanding.
          </p>
        </Prose>

        <ArticleSubsection title="Rising Prices & the Middle-Class Squeeze">
          <Prose>
            <p>
              East Harriet has historically been a slightly more affordable
              alternative to Linden Hills — a place where middle-class
              families could buy into the Lake Harriet school pipeline
              without a million-dollar budget. That gap is narrowing.
              Rising home prices across Southwest Minneapolis are pushing
              East Harriet toward price points that exclude the young
              families and first-time homebuyers who have traditionally
              been part of the neighborhood&apos;s fabric. The risk is
              that East Harriet becomes what Linden Hills already is —
              a neighborhood primarily accessible to households with
              significant wealth or equity from a previous home — and
              loses the modest economic diversity that has been part of
              its character.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Teardowns & Scale">
          <Prose>
            <p>
              The teardown dynamic that has affected Linden Hills and{" "}
              <Link href="/neighborhoods/lynnhurst" className="text-[#2a9d8f] hover:underline">
                Lynnhurst
              </Link>{" "}
              is present in East Harriet as well. Older, smaller bungalows
              on desirable lots are targets for demolition and replacement
              with larger homes that maximize square footage. Each teardown
              changes the scale and character of the block. Longtime
              residents mourn the loss of the 1920s cottages that give the
              neighborhood its charm. Newer construction, while often
              well-built, tends toward a boxy, modern aesthetic that fits
              uneasily alongside the Craftsman neighbors.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Demographic Homogeneity">
          <Prose>
            <p>
              East Harriet shares the demographic profile of much of
              Southwest Minneapolis: predominantly white, predominantly
              homeowning, and increasingly affluent. This homogeneity is
              not unique to the neighborhood but is worth naming honestly,
              particularly in a city as racially and economically diverse
              as Minneapolis. The neighborhood&apos;s progressivism is
              genuine — but it coexists with structural patterns of
              exclusion that high housing costs and historical land-use
              decisions have produced. The Minneapolis 2040 Plan&apos;s
              efforts to increase housing diversity have been met with
              the same mixed response seen across Southwest Minneapolis:
              broad support for the principle, unease about the specifics.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="East Harriet FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
