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
    title: "Tangletown, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Tangletown, Minneapolis — the winding streets, Washburn Park Water Tower, homes, history, schools, restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Tangletown",
  deck: "The neighborhood where the grid breaks. Winding streets, century-old trees, the Washburn Park Water Tower standing sentinel over it all — Tangletown is Southwest Minneapolis at its most idiosyncratic, a place that traded straight lines for character and never looked back.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Tangletown?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Tangletown" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Tangletown, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,500", label: "Residents (Niche / US Census)" },
      { value: "$450K–$750K", label: "Median home sale price range (2025 data)" },
      { value: "14 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.7 sq mi", label: "Neighborhood area" },
      { value: "1910s–40s", label: "Era most homes were built" },
      { value: "12–18 min", label: "Drive to downtown or MSP airport" },
      { value: "68", label: "Walk Score" },
      { value: "82", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Tangletown a good neighborhood in Minneapolis?",
      answer:
        "Yes. Tangletown is one of the most desirable residential neighborhoods in Southwest Minneapolis, with strong schools, mature tree canopy, architecturally interesting homes, and an unusually strong sense of community identity. It's quieter and more residential than nearby Uptown but more walkable and characterful than neighborhoods further south.",
    },
    {
      question: "Why is it called Tangletown?",
      answer:
        "The name comes from the neighborhood's famously winding, non-grid street layout. Unlike most of Minneapolis, which follows a rigid grid pattern, Tangletown's streets curve, dead-end, and intersect at odd angles — the result of the hilly terrain near Washburn Park. The tangled layout makes it easy to get lost and hard to cut through, which residents consider a feature, not a bug.",
    },
    {
      question: "Is Tangletown, Minneapolis safe?",
      answer:
        "Tangletown is one of the safer neighborhoods in Minneapolis. Violent crime is uncommon. Property crime — vehicle break-ins and package theft — has increased modestly in recent years, consistent with broader city trends, but the overall safety profile is strong. The winding streets that define the neighborhood also make it difficult for through-traffic, which contributes to a sense of seclusion and calm.",
    },
    {
      question: "How much do homes cost in Tangletown?",
      answer:
        "Median home sale prices in Tangletown typically range from $450,000 to $750,000, depending on size, condition, and proximity to Washburn Park. Some larger or extensively renovated homes sell above $800,000. Tangletown is above the citywide median of approximately $350,000–$375,000 but generally more affordable than Linden Hills or the most premium blocks of Fulton.",
    },
    {
      question: "What is the Washburn Park Water Tower?",
      answer:
        "The Washburn Park Water Tower is a 110-foot limestone tower built in 1932 in the William M. Dunwoody style — one of the last ornamental water towers built in the United States. It's listed on the National Register of Historic Places and is the neighborhood's most recognizable landmark. The tower still functions as part of the city's water system and is surrounded by parkland that serves as Tangletown's de facto town square.",
    },
    {
      question: "What schools serve Tangletown?",
      answer:
        "Tangletown is served by Kenny Elementary (despite the neighborhood name difference), Anthony Middle School, and Southwest Senior High School — an International Baccalaureate World School with strong academic and arts programs. The school pipeline is one of the strongest in Minneapolis and a significant draw for families.",
    },
    {
      question: "Is Tangletown walkable?",
      answer:
        "Moderately to good. Tangletown earns a Walk Score around 68 and a Bike Score of 82. The Nicollet Avenue commercial corridor along the eastern edge provides walkable access to restaurants, coffee shops, and services. The winding interior streets are pleasant for walking but don't lead to commercial destinations within the neighborhood itself. Biking infrastructure is strong.",
    },
    {
      question: "Where exactly is Tangletown in Minneapolis?",
      answer:
        "Tangletown is in Southwest Minneapolis, roughly bounded by West 46th Street to the north, Nicollet Avenue to the east, West 54th Street to the south, and Lyndale Avenue to the west. It borders East Harriet and Lynnhurst to the west, King Field to the north, and the Nicollet Avenue corridor to the east. The neighborhood sits on some of the highest ground in south Minneapolis.",
    },
    {
      question: "What are the best restaurants near Tangletown?",
      answer:
        "Tangletown's restaurant scene centers on Nicollet Avenue and the 48th & Chicago node. Standouts include Pumphouse Creamery (ice cream made on-site), Naviya's Thai Brasserie, Bull's Horn, and the various shops and eateries along Nicollet. The 50th & Nicollet intersection provides additional options including several ethnic restaurants and Butter Bakery Cafe.",
    },
    {
      question: "How is Tangletown different from other Southwest Minneapolis neighborhoods?",
      answer:
        "The street layout is the most obvious difference — Tangletown's winding roads are unique in a city defined by its grid. Beyond that, Tangletown has more topographic variety (hills, elevation changes) than most Southwest neighborhoods, more architectural diversity in its housing stock, and a stronger sense of distinct identity. It feels less suburban than Kenny or Armatage while being just as family-oriented.",
    },
  ],
  nearby: [
    { name: "East Harriet", slug: "east-harriet", description: "Charming homes and Lyndale Avenue shops" },
    { name: "Lynnhurst", slug: "lynnhurst", description: "Quiet streets between Minnehaha Creek and Lake Harriet" },
    { name: "King Field", slug: "king-field", description: "Diverse community near MLK Park" },
    { name: "Kenny", slug: "kenny", description: "Small, quiet, deeply residential" },
    { name: "Fulton", slug: "fulton", description: "Lake Harriet access and 50th Street commercial strips" },
    { name: "Field", slug: "field", description: "Affordable south Minneapolis with Nicollet Avenue access" },
  ],
  closing: {
    title: "What Makes Tangletown Worth Knowing",
    paragraphs: [
      "Tangletown is a neighborhood that resists the grid — literally and figuratively. The winding streets that give it its name also give it its personality: a sense of discovery around every curve, a feeling of being tucked away even though you're ten minutes from downtown. The Washburn Park Water Tower rises above the tree canopy like a landmark from another century, which it is, and the homes beneath it have the kind of architectural ambition that most Minneapolis neighborhoods reserve for the blocks closest to the lakes.",
      "What keeps people here isn't one thing — it's the accumulation of small things. The way the streets discourage through-traffic and encourage walking. The way the elevation changes give you unexpected sightlines. The way the neighborhood feels both connected to the city and slightly apart from it. Tangletown figured out a long time ago that the grid isn't the only way to build a neighborhood, and the people who live here have been quietly grateful for that ever since.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          You know you&apos;re in Tangletown when you get lost. Not dramatically
          lost — you&apos;re in Southwest Minneapolis, not the backcountry — but
          the particular kind of lost where you turn left and the street curves
          right, and then dead-ends into a cul-de-sac you didn&apos;t see coming,
          and suddenly you&apos;re looking at the Washburn Park Water Tower from
          an angle you&apos;ve never seen before even though you&apos;ve driven
          past it a hundred times. The grid that defines the rest of Minneapolis
          dissolves here into something older and more organic — streets that
          follow the contours of the land rather than the ambitions of surveyors,
          houses set at odd angles to the road, mature elms and oaks creating a
          canopy so thick that summer afternoons feel like dusk. A jogger passes
          you going the other direction. A dog watches from a porch. The water
          tower rises above the treeline, pale and improbable, like something
          transplanted from a European hill town. This is Tangletown at its most
          essential — a neighborhood that traded legibility for character and
          has never regretted the bargain.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/tangletown/hero.webp"
        alt="Winding tree-lined street in Tangletown neighborhood of Minneapolis"
        caption="Tangletown's signature winding streets — where the Minneapolis grid goes to die"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Tangletown, Minneapolis?">
        <Prose>
          <p>
            Tangletown is a residential neighborhood in Southwest Minneapolis,
            roughly bounded by West 46th Street to the north, Nicollet Avenue
            to the east, West 54th Street to the south, and Lyndale Avenue to
            the west. It covers approximately 0.7 square miles and is home to
            around 5,500 residents. The neighborhood sits on some of the highest
            terrain in south Minneapolis — gentle hills and elevation changes
            that, along with Minnehaha Creek to the north, gave the original
            streets their distinctive winding layout. To the west lies{" "}
            <Link href="/neighborhoods/east-harriet" className="text-[#2a9d8f] hover:underline">
              East Harriet
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/lynnhurst" className="text-[#2a9d8f] hover:underline">
              Lynnhurst
            </Link>
            . To the north,{" "}
            <Link href="/neighborhoods/king-field" className="text-[#2a9d8f] hover:underline">
              King Field
            </Link>
            . To the south and west,{" "}
            <Link href="/neighborhoods/kenny" className="text-[#2a9d8f] hover:underline">
              Kenny
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            .
          </p>
          <p>
            The name says it all. &quot;Tangletown&quot; isn&apos;t a historical
            designation or a nod to some founding father — it&apos;s a
            description. The streets here tangle. They curve where other streets
            go straight. They dead-end where other streets continue. They
            intersect at angles that would make a city planner weep and a
            delivery driver curse. This layout, born from the terrain and
            preserved by residents who fought to keep it, is the single most
            defining feature of the neighborhood. It slows traffic to a crawl.
            It discourages cut-throughs. It makes every walk feel like a small
            adventure. And it creates a sense of enclosure and privacy that no
            amount of urban planning on a flat grid can replicate.
          </p>
          <p>
            The neighborhood&apos;s visual anchor is the Washburn Park Water
            Tower — a 110-foot limestone structure built in 1932 that rises
            above the tree canopy like a medieval bell tower. It&apos;s listed
            on the National Register of Historic Places, still functions as part
            of the city&apos;s water system, and gives Tangletown a sense of
            place that most Minneapolis neighborhoods have to work much harder
            to achieve. Below the tower, the streets wind through some of the
            most architecturally interesting residential blocks in the city —
            Tudors and Colonials and Craftsmans set into hillsides at unexpected
            angles, framed by gardens that have been tended for generations.
          </p>
          <p>
            Tangletown is family-oriented and residentially focused, but it has
            more personality than that description suggests. The Nicollet Avenue
            corridor along its eastern edge provides walkable commercial life.
            The topography gives the neighborhood visual drama that flat
            Southwest Minneapolis neighborhoods lack. And the street layout
            creates a sense of community cohesion — when it&apos;s hard to get
            in and out, the people inside tend to know each other.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Tangletown Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/tangletown/neighborhood-sign.webp"
          alt="Tangletown neighborhood sign in Minneapolis"
          caption="The Tangletown neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Tangletown History & Origins">
        <Prose>
          <p>
            Before any European settler arrived, this land was Dakota homeland —
            part of the territory centered around the sacred confluence at Bdote
            where the Mississippi and Minnesota Rivers meet. The Dakota people
            lived, hunted, and traveled across these prairies and woodlands for
            centuries before treaties and forced removal reshaped the landscape
            in the 1850s and 1860s. Minnehaha Creek, which runs along
            Tangletown&apos;s northern edge, was part of the Dakota cultural
            landscape long before it became a feature on a city map. The ground
            here holds longer memories than the houses sitting on it.
          </p>
          <p>
            European settlement in this part of what would become Minneapolis
            began in the 1850s, but Tangletown&apos;s development as a
            residential neighborhood came in the early 20th century. What makes
            Tangletown&apos;s history architecturally distinctive is the terrain.
            Most of Minneapolis is flat enough that the standard grid works fine —
            you lay out the streets at right angles, plat the lots, and build.
            But the area around Washburn Park sits on rolling hills, with
            elevation changes significant enough to make the grid impractical.
            The streets were laid out to follow the contours of the land — curving
            around hills, dead-ending at ravines, intersecting at angles dictated
            by topography rather than geometry. The result was a neighborhood
            that looked, from the air, like someone had crumpled the city grid
            into a ball and dropped it.
          </p>
          <p>
            The name &quot;Tangletown&quot; emerged organically — residents and
            delivery drivers and letter carriers started using it because the
            streets were, in fact, tangled. It wasn&apos;t a marketing exercise.
            It was a description that stuck because it was accurate. By the
            1920s and 1930s, the name was widely recognized, and the
            neighborhood had developed a distinct identity separate from the
            broader Southwest Minneapolis fabric around it.
          </p>
          <p>
            The Washburn Park Water Tower, built in 1932, cemented that identity.
            Designed by Harry Wild Jones (who also designed Lakewood Cemetery
            Chapel and Butler Square), the tower is an extraordinary piece of
            civic architecture — a limestone structure modeled on English Gothic
            forms, with pointed arches, decorative carvings, and a height that
            makes it visible from blocks away. It was one of the last ornamental
            water towers built in the United States, a product of an era when
            cities still believed that infrastructure should be beautiful. The
            tower still holds water — 1.3 million gallons — and still anchors
            the neighborhood&apos;s sense of identity.
          </p>
          <p>
            The housing stock reflects the neighborhood&apos;s early-to-mid
            20th century build-out. Tudors are more common here than in many
            Southwest Minneapolis neighborhoods — the hilly terrain and winding
            streets seemed to invite the style — alongside Craftsman bungalows,
            Colonial revivals, and a smattering of storybook cottages that look
            like they wandered in from the English countryside. The architectural
            diversity is notable. Because the lots vary in size and orientation
            (a consequence of the non-grid layout), builders adapted their
            designs to the terrain rather than stamping out identical houses on
            identical lots. This gives Tangletown a visual richness that more
            uniform neighborhoods lack.
          </p>
          <p>
            Through the postwar decades, Tangletown settled into the quiet
            stability that defines it today. The neighborhood avoided the
            disruptions — highway construction, urban renewal, white flight —
            that reshaped other parts of Minneapolis. The housing stock aged
            gracefully. The trees matured. The families who moved in during the
            1950s and 1960s raised children who sometimes came back to raise
            their own. The tangled streets that were once a quirk became a point
            of pride, and efforts to &quot;rationalize&quot; the layout were
            resisted by residents who understood that the tangle was the point.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Tangletown">
        <Prose>
          <p>
            Living in Tangletown means knowing shortcuts that only make sense if
            you&apos;ve lived here for years. It means giving directions by
            landmark rather than street address — &quot;turn left at the big oak
            past the water tower, then follow the curve until you see the yellow
            Tudor&quot; — because the street names change and the house numbers
            skip in ways that confuse even longtime residents. It means your
            Amazon driver texts you from two blocks away, baffled. It means
            your pizza arrives cold more often than it should. And it means that
            once you&apos;re inside the tangle, the city falls away in a way
            that feels almost rural.
          </p>
          <p>
            The neighborhood is decidedly family-oriented. Young couples buy
            here when they&apos;re ready for a yard and a school district, and
            many stay through retirement. The community is tight-knit in the
            organic way that difficult geography encourages — when you can&apos;t
            easily cut through the neighborhood, you end up walking the same
            routes and seeing the same faces. Block clubs are active. The
            Tangletown Neighborhood Association has genuine engagement, not just
            a mailing list. The annual neighborhood events — ice cream socials,
            park cleanups, the occasional block party that spills across three
            cul-de-sacs — draw enough people to feel like a community rather
            than a formality.
          </p>
          <p>
            There&apos;s an artsy undercurrent in Tangletown that distinguishes
            it from the more buttoned-up Southwest Minneapolis neighborhoods to
            the south. The gardens here are wilder — more perennials and native
            plantings, fewer manicured lawns. The houses have more personality —
            hand-painted mailboxes, stained glass windows, the occasional yard
            sculpture that would raise eyebrows in{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            . The proximity to Nicollet Avenue and the slightly younger
            demographic compared to Kenny or Armatage gives Tangletown an energy
            that its winding streets belie. This is not a neighborhood that fell
            asleep in the 1970s. It&apos;s a neighborhood that found its groove
            and has been deepening it for decades.
          </p>
          <p>
            The elevation matters to daily life more than you&apos;d expect. The
            hills mean you get sightlines — views across rooftops to the
            downtown skyline, or south toward the airport — that flat
            neighborhoods simply don&apos;t offer. They also mean that sledding
            is excellent, that biking home from the grocery store is a genuine
            workout, and that your basement floods on a different schedule than
            your neighbor&apos;s two blocks over. The topography gives every
            block a slightly different character, and Tangletown residents
            learn to read those differences the way people in other
            neighborhoods read street numbers.
          </p>
        </Prose>
        <Quote
          text="I moved here for the schools and the housing stock. I stayed because I can walk two blocks and feel like I&apos;m in a different world. The streets don&apos;t make sense, and that&apos;s what makes this place make sense."
          cite="Tangletown resident, 12 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Tangletown Food, Drink & Local Spots">
        <Prose>
          <p>
            Tangletown&apos;s interior is almost entirely residential — you
            won&apos;t find a coffee shop tucked between the Tudors on a winding
            side street. But the neighborhood&apos;s edges, particularly
            Nicollet Avenue to the east, provide genuinely good commercial life.
            The stretch of Nicollet from roughly 46th to 54th has developed into
            one of the more interesting neighborhood restaurant corridors in
            south Minneapolis — less polished than 50th &amp; France, less
            trendy than Eat Street, but with a quality-to-pretension ratio that
            longtime residents appreciate.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/tangletown/nicollet-ave.webp"
          alt="Nicollet Avenue commercial corridor near Tangletown"
          caption="Nicollet Avenue — Tangletown's front porch for dining and shopping"
        />

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Pumphouse Creamery", tag: "Ice Cream", price: "$", url: "https://www.pumphousecreamery.com", description: "4754 Chicago Ave. S. Ice cream made on-site in a converted pumphouse, using local dairy. The flavors rotate seasonally and lean creative — salted caramel, honey lavender, brown butter. Lines form in summer. Worth every minute." }} />
          <PlaceCardComponent place={{ name: "Naviya's Thai Brasserie", tag: "Thai", price: "$$", url: "https://www.naviyasthai.com", description: "4952 S. Nicollet Ave. Upscale Thai in a warm, thoughtfully designed space. The curries are excellent, the cocktail program is surprisingly deep, and the owner's attention to detail shows in everything from the plating to the service." }} />
          <PlaceCardComponent place={{ name: "Bull's Horn", tag: "Bar & Restaurant", price: "$$", url: "https://www.bullshornmpls.com", description: "4563 S. Nicollet Ave. A neighborhood spot that punches above its weight — creative cocktails, solid food menu, and a vibe that manages to be both relaxed and interesting. The patio is a draw in summer." }} />
          <PlaceCardComponent place={{ name: "Butter Bakery Cafe", tag: "Bakery & Café", price: "$", url: "https://www.butterbakerycafe.com", description: "3700 Nicollet Ave. S. (a short trip north). Beloved neighborhood bakery and cafe known for its pastries, breakfast sandwiches, and strong coffee. A community gathering spot with regulars who have claimed specific tables." }} />
          <PlaceCardComponent place={{ name: "Tangletown Gardens", tag: "Garden Center & Market", url: "https://www.tangletowngardens.com", description: "5353 Nicollet Ave. S. More than a garden center — Tangletown Gardens is a neighborhood institution. Plants, locally-sourced groceries, prepared foods, and a community gathering space. The name says it all about the connection to the neighborhood." }} />
          <PlaceCardComponent place={{ name: "50th & Nicollet", tag: "Commercial Node", description: "The intersection where south Nicollet Avenue starts to feel like a real neighborhood main street. A mix of small restaurants, service businesses, and shops that serve the daily needs of surrounding neighborhoods." }} />
        </ArticleSubsection>

        <ArticleSubsection title="The Nicollet Avenue Corridor">
          <Prose>
            <p>
              The stretch of Nicollet Avenue that runs along Tangletown&apos;s
              eastern edge is one of the more promising commercial corridors in
              south Minneapolis. It doesn&apos;t have the density or foot
              traffic of Eat Street (Nicollet in the Whittier/Lyndale
              neighborhoods to the north), but it&apos;s developing a character
              of its own — a mix of independent restaurants, small businesses,
              and neighborhood institutions that serve the surrounding
              residential areas without trying to be a destination. The
              Tangletown Gardens complex at 54th and Nicollet is the anchor —
              part garden center, part market, part community space — and it
              draws people from across the metro.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Tangletown residents also frequent the commercial strips along
              48th and Chicago (Pumphouse Creamery territory), the 50th &amp;
              France district to the west (technically Edina), and the Linden
              Hills shops on 43rd Street. The neighborhood&apos;s central
              location in Southwest Minneapolis means multiple dining scenes are
              accessible by bike or short drive. For a neighborhood with no
              commercial establishments in its interior, Tangletown residents
              eat remarkably well.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Tangletown">
        <Prose>
          <p>
            Tangletown&apos;s park access is anchored by Washburn Park — home
            of the famous water tower — and supplemented by connections to the
            broader Minneapolis park system that consistently ranks among the
            best in the country.
          </p>
        </Prose>
        <ArticleSubsection title="Washburn Park & the Water Tower">
          <Prose>
            <p>
              Washburn Park sits on one of the highest points in south
              Minneapolis, and the 110-foot water tower at its center is visible
              from blocks away. The park itself is modest in terms of amenities —
              open green space, walking paths, benches, a small playground — but
              its role in the neighborhood is outsized. This is where people
              walk their dogs, where kids play after school, where neighbors
              run into each other in a way that the winding residential streets
              don&apos;t always encourage. The water tower, with its Gothic
              limestone arches, gives the whole scene an almost European quality
              that&apos;s unlike anything else in Minneapolis.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/tangletown/washburn-water-tower.webp"
            alt="Washburn Park Water Tower rising above the tree canopy in Tangletown"
            caption="The Washburn Park Water Tower — 110 feet of Gothic limestone and neighborhood pride"
          />
        </ArticleSubsection>
        <ArticleSubsection title="Fuller Park">
          <Prose>
            <p>
              Fuller Park, in the southern portion of the neighborhood, provides
              a recreation center, athletic fields, a playground, and winter ice
              skating. It&apos;s the more utilitarian counterpart to Washburn
              Park — less scenic, more functional, and a genuine hub for youth
              sports and after-school programming. Between Washburn and Fuller,
              Tangletown has solid park coverage without needing to leave the
              neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Minnehaha Creek & the Chain of Lakes">
          <Prose>
            <p>
              Minnehaha Creek runs along Tangletown&apos;s northern edge,
              providing trail access, green space, and a corridor that connects
              to the broader Chain of Lakes system. Lake Harriet is roughly a
              mile to the northwest — a bikeable distance that many Tangletown
              residents cover regularly. The creek trail itself is a pleasant
              walk or run, winding through backyards and under bridges with the
              kind of dappled-light-through-trees quality that makes
              Minneapolis&apos;s park system genuinely special. From Tangletown,
              you can bike to Lake Harriet, continue around Bde Maka Ska, loop
              Lake of the Isles, and be home for dinner — a 15-mile ride
              through some of the best urban parkland in America.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Hills Themselves">
          <Prose>
            <p>
              This sounds obvious, but the topography is itself an outdoor
              amenity. Tangletown has hills — modest by any mountain
              standard, but significant for Minneapolis — and those hills
              create sledding runs in winter, elevation-gain running routes
              in summer, and the kind of varied landscapes that make a
              neighborhood walk interesting rather than repetitive. Kids sled
              the hill near Washburn Park. Runners train on the inclines.
              And on a clear day, the views from the higher points stretch
              to the downtown skyline and beyond.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Tangletown Schools">
        <Prose>
          <p>
            Schools are one of Tangletown&apos;s strongest draws for families,
            and the pipeline here mirrors the broader Southwest Minneapolis
            pattern that parents seek out.
          </p>
          <p>
            Kenny Elementary School (K–5) serves much of Tangletown despite
            the name mismatch — a geographic quirk that occasionally confuses
            newcomers but doesn&apos;t diminish the school&apos;s reputation.
            Kenny Elementary is well-regarded and functions as a community
            hub for families on both sides of the Tangletown-Kenny border.
            Some Tangletown students also attend Burroughs Elementary,
            depending on exact address.
          </p>
          <p>
            Anthony Middle School handles the middle school years, and
            Southwest Senior High School — an International Baccalaureate
            World School — is the high school destination. Southwest earns
            strong marks from Niche and is known for its academics,
            performing arts, and the kind of diverse, engaged student body
            that IB programs tend to cultivate. The elementary-through-high-school
            pipeline is one of the key reasons families buy in Tangletown
            and stay through their children&apos;s school years.
          </p>
          <p>
            Families also have access to Minneapolis&apos;s magnet school
            system, and private options in the surrounding area include
            Minnehaha Academy, Southwest Montessori, and various faith-based
            schools. The school landscape is rich enough that most families
            find a good fit within a short commute.
          </p>
        </Prose>
        <ImageSlot
          src="/images/neighborhoods/tangletown/school-walk.webp"
          alt="Children walking to school along a tree-lined Tangletown street"
          caption="The walk to school through Tangletown's winding streets"
        />
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Tangletown Real Estate & Housing">
        <Prose>
          <p>
            Tangletown sits in the upper tier of Minneapolis&apos;s housing
            market — not as expensive as the most premium lakeside blocks in
            Linden Hills, but solidly above the citywide median. Home sale
            prices typically range from $450,000 to $750,000, with outliers
            in both directions. The citywide median sits around
            $350,000–$375,000, so Tangletown commands a meaningful premium —
            one that reflects the schools, the character, and the kind of
            housing stock that doesn&apos;t exist in newer developments.
          </p>
          <p>
            Homes move quickly here. The average time on market in 2025 was
            approximately 14 days — faster than the citywide average and
            reflective of strong demand from families who specifically target
            this neighborhood. Competitive offers are standard, particularly
            for well-maintained homes near Washburn Park.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($400,000–$500,000), you&apos;re looking at
              smaller bungalows or Cape Cods that need updating — original
              kitchens, single-car garages, the kind of deferred maintenance
              that comes with a 90-year-old house. The mid-range
              ($500,000–$700,000) gets you a well-maintained three- or
              four-bedroom Tudor or Colonial with updates, a deeper lot, and
              possibly a view of the water tower from your upstairs window.
              Above $700,000, you&apos;re into the larger renovated homes,
              new construction on teardown lots, or the occasional showpiece
              that takes advantage of Tangletown&apos;s hillside terrain to
              dramatic effect.
            </p>
            <p>
              The architectural diversity here is wider than in most Southwest
              Minneapolis neighborhoods. The non-grid layout means lots vary
              in size, shape, and orientation, which encouraged builders to
              design for specific sites rather than repeating the same plan.
              You&apos;ll find Tudor revivals, Colonial revivals, Craftsman
              bungalows, storybook cottages, and the occasional Prairie-style
              home — often on the same block. This variety is one of
              Tangletown&apos;s genuine charms and a reason architecture
              enthusiasts seek it out.
            </p>
            <p>
              One thing buyers should know: the winding streets and irregular
              lots make parking and access quirky. Some homes have alley access;
              some don&apos;t. Some driveways curve in ways that challenge
              anything larger than a sedan. The things that make Tangletown
              charming on foot can be mildly annoying in a moving truck.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="People look at the price and compare it to the suburbs, and it doesn&apos;t compute. But then they walk the streets and see the water tower and the hundred-year-old Tudors, and they get it. You can&apos;t build this." cite="Tangletown listing agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Tangletown">
        <Prose>
          <p>
            Tangletown earns a Walk Score of 68 and a Bike Score of 82 — numbers
            that reflect a neighborhood where daily life is manageable without a
            car but most people still own one. Nicollet Avenue provides walkable
            access to restaurants, a garden center, and neighborhood services.
            The interior streets are excellent for walking — quiet, shaded,
            constantly surprising — but they don&apos;t lead to commercial
            destinations. If you want milk, you&apos;re walking to Nicollet
            or biking to a grocery store.
          </p>
          <p>
            Biking is strong. The network of trails along Minnehaha Creek and
            the Chain of Lakes is accessible from Tangletown&apos;s northern
            edge, and the broader Minneapolis bike infrastructure — dedicated
            lanes, well-maintained paths, a cycling culture that treats
            two-wheeled commuting as normal — makes Tangletown a good
            neighborhood for people who ride. The hills add a workout that
            flat-neighborhood cyclists miss, but the payoff is coasting home.
          </p>
          <p>
            For car-based commuting, Tangletown is well-positioned. Downtown
            Minneapolis is 12–18 minutes depending on traffic and route.
            I-35W is accessible to the east; Highway 62 (the Crosstown) runs
            along the southern edge of the broader area. MSP International
            Airport is roughly 15 minutes. The western suburbs are easily
            accessible via Crosstown or Highway 100. Most residents drive for
            their commute, though the bus routes along Nicollet Avenue provide
            a public transit option for downtown-bound workers.
          </p>
          <p>
            One thing worth noting: the tangled street layout that gives the
            neighborhood its name also makes it genuinely hard for through-
            traffic to cut through. This is a feature. Tangletown streets are
            quiet because they&apos;re confusing — and that confusion translates
            to lower traffic speeds, fewer non-local cars, and the kind of
            pedestrian-friendly environment that traffic engineers spend
            millions trying to create artificially in other neighborhoods.
            The tangle is Tangletown&apos;s best traffic calming device.
          </p>
        </Prose>
        <ImageSlot
          src="/images/neighborhoods/tangletown/winding-road.webp"
          alt="A characteristic curved road in Tangletown with homes set at varied angles"
          caption="The roads curve, the homes angle — Tangletown's layout is its own traffic calming"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Tangletown is not a neighborhood in crisis. It&apos;s stable,
            desirable, and well-maintained. But like all of Southwest
            Minneapolis, it has tensions worth naming.
          </p>
        </Prose>
        <ArticleSubsection title="Teardowns & Scale">
          <Prose>
            <p>
              The same dynamic reshaping{" "}
              <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
                Fulton
              </Link>{" "}
              and{" "}
              <Link href="/neighborhoods/kenny" className="text-[#2a9d8f] hover:underline">
                Kenny
              </Link>{" "}
              has arrived in Tangletown: older homes on desirable lots are being
              purchased, demolished, and replaced with larger, more expensive
              homes. In Tangletown, this dynamic has an extra edge because the
              neighborhood&apos;s character depends so heavily on its
              architectural variety and human scale. A two-story new-build that
              maxes out the lot coverage looks merely oversized on a grid
              street; on a curving Tangletown lane, set between a 1920s Tudor
              and a storybook cottage, it can feel like a violation. Residents
              have pushed back through historic preservation advocacy, but the
              market pressure is persistent.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Affordability & Access">
          <Prose>
            <p>
              Tangletown has never been cheap, but it used to be accessible to
              the middle class — teachers, social workers, city employees who
              wanted a characterful home in a good school district. As prices
              have climbed toward and past $600,000 for a typical family home,
              that accessibility has narrowed considerably. The neighborhood is
              overwhelmingly white, overwhelmingly homeowning, and increasingly
              affluent. This homogeneity is a product of housing costs and
              historical patterns, and it limits the diversity that many
              residents say they value. The tension between wanting an inclusive
              community and living in a place where the entry price excludes
              most people is real and largely unresolved.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Infrastructure Question">
          <Prose>
            <p>
              Tangletown&apos;s winding streets are charming but aging. The
              irregular layout makes snow plowing challenging, street
              maintenance expensive, and utility work complicated. Some streets
              are narrow enough to be effectively one-lane with parked cars on
              both sides. The infrastructure that gives the neighborhood its
              character also makes it more expensive to maintain than a standard
              grid, and as the city faces competing demands on its maintenance
              budget, Tangletown&apos;s quirky streets don&apos;t always win
              the priority contest. Residents occasionally debate whether the
              charm is worth the plowing delays, and the answer is usually yes —
              but the question keeps coming up.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Property Taxes">
          <Prose>
            <p>
              Rising home values mean rising assessments, and long-term
              Tangletown homeowners — especially retirees — feel the squeeze.
              When a teardown lot sells for $800,000 with new construction, the
              assessor takes note, and surrounding homeowners see their tax
              bills climb whether they asked for the neighborhood&apos;s
              increased desirability or not. This is a Southwest Minneapolis
              problem, not uniquely a Tangletown problem, but the pace of
              appreciation here has made it particularly acute.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Tangletown FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
