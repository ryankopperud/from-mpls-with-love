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
    title: "Lynnhurst, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Lynnhurst, Minneapolis — homes, history, Lake Harriet, schools, restaurants, parks, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Lynnhurst",
  deck: "The quiet middle child of Southwest Minneapolis — where Minnehaha Creek meets Lake Harriet, the commercial strip on 50th & Lyndale anchors daily life, and tree-lined blocks of well-kept bungalows make the case that a neighborhood doesn&apos;t need to be flashy to be deeply loved.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Lynnhurst?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Lynnhurst" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Lynnhurst, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,800", label: "Residents (Niche / US Census)" },
      { value: "$500K–$750K", label: "Median home sale price range (2025 data)" },
      { value: "18 days", label: "Average time on market (Redfin, 2025)" },
      { value: "3 miles", label: "Loop trail around Lake Harriet" },
      { value: "1920s–40s", label: "Era most homes were built" },
      { value: "15–20 min", label: "Drive to downtown or MSP airport" },
      { value: "72", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Lynnhurst a good neighborhood in Minneapolis?",
      answer:
        "Yes — Lynnhurst consistently ranks among the most desirable neighborhoods in Minneapolis. Its combination of Lake Harriet access, Minnehaha Creek, strong public schools, well-maintained housing stock, and a genuine sense of community makes it a top choice for families and long-term residents. It shares the same quality of life as neighboring Fulton and Linden Hills at slightly more accessible price points.",
    },
    {
      question: "Is Lynnhurst, Minneapolis safe?",
      answer:
        "Lynnhurst is considered one of the safer neighborhoods in Minneapolis. Violent crime is uncommon. Property crime — vehicle break-ins, package theft — has ticked up in recent years, as it has across much of Southwest Minneapolis. Overall, families with children feel comfortable here and the neighborhood has an engaged, watchful community culture.",
    },
    {
      question: "What is Lynnhurst, Minneapolis known for?",
      answer:
        "Lynnhurst is best known for its proximity to Lake Harriet, the Lake Harriet Bandshell concerts, Lynnhurst Park, Burroughs Elementary School, the 50th & Lyndale commercial node, and its quiet, family-oriented residential character. It sits between the better-known Linden Hills and Fulton neighborhoods but holds its own identity through its park, its commercial corridor, and a strong neighborhood association.",
    },
    {
      question: "How much do homes cost in Lynnhurst, Minneapolis?",
      answer:
        "Median home sale prices in 2025 ranged from roughly $500,000 to $750,000 depending on the season and data source, above the citywide median of approximately $350,000–$375,000. Smaller bungalows can sell in the $400,000 range; larger renovated homes and those near the lake can exceed $900,000 to $1 million or more.",
    },
    {
      question: "Is Lynnhurst walkable?",
      answer:
        "Yes, within the neighborhood. The commercial node at 50th & Lyndale is walkable from most Lynnhurst addresses. Lake Harriet and Minnehaha Creek are accessible on foot or bike. For commuting beyond the neighborhood, most residents rely on cars. Lynnhurst has a Walk Score of 72 and a Bike Score of 85.",
    },
    {
      question: "What schools serve Lynnhurst, Minneapolis?",
      answer:
        "The primary public elementary school is Burroughs Community School, which earns strong ratings and is a significant draw for families. Middle school feeds into Anthony Middle School, and high school into Southwest Senior High School — an International Baccalaureate World School with strong academic and arts programs.",
    },
    {
      question: "What are the best restaurants near Lynnhurst, Minneapolis?",
      answer:
        "Popular spots include Tilia (inventive American fare on 54th & Lyndale), Sebastian Joe's Ice Cream, Key West Bistro, and the 50th & Lyndale corridor with its mix of cafes and restaurants. Residents also easily access Linden Hills' dining scene and the 50th & France district in neighboring Fulton and Edina.",
    },
    {
      question: "Where exactly is Lynnhurst in Minneapolis?",
      answer:
        "Lynnhurst is in Southwest Minneapolis, bounded roughly by West 46th Street / Minnehaha Creek to the north, Lyndale Avenue South to the east, West 54th Street to the south, and Penn Avenue South to the west. It borders Linden Hills to the northwest, East Harriet to the northeast, Fulton to the west, Kenny to the south, and Tangletown to the east.",
    },
    {
      question: "Is Lynnhurst a good place to raise a family?",
      answer:
        "Lynnhurst is widely considered one of the best family neighborhoods in Minneapolis. Burroughs Elementary is a highly rated public school. The neighborhood is safe, walkable, and rich with parks, trails, and outdoor activities. Lynnhurst Park offers playgrounds, sports fields, and a recreation center. The community is actively engaged through block parties, neighborhood events, and the Lynnhurst Neighborhood Association.",
    },
    {
      question: "What is the difference between Lynnhurst, Fulton, and Linden Hills?",
      answer:
        "The three neighborhoods share a similar character — tree-lined streets, 1920s–40s housing stock, Lake Harriet access, strong schools, and family-oriented culture. Linden Hills has the most active commercial village and boutique shopping. Fulton has 50th & France and slightly higher price points. Lynnhurst sits between them with its own commercial strip at 50th & Lyndale, Lynnhurst Park, and Burroughs Elementary as distinguishing features. All three are among the most desirable neighborhoods in Minneapolis.",
    },
    {
      question: "How far is Lynnhurst from downtown Minneapolis?",
      answer:
        "Lynnhurst is approximately 15–20 minutes from downtown Minneapolis by car, depending on traffic. Bus routes along Lyndale Avenue and 50th Street connect to Uptown and downtown. MSP International Airport is also roughly 15–20 minutes away via I-35W.",
    },
  ],
  nearby: [
    { name: "Fulton", slug: "fulton", description: "50th & France and Lake Harriet's western shore" },
    { name: "Linden Hills", slug: "linden-hills", description: "Boutique shopping and Lake Harriet's north shore" },
    { name: "East Harriet", slug: "east-harriet", description: "Charming homes near Lyndale Avenue" },
    { name: "Kenny", slug: "kenny", description: "Small-scale neighborhood south of Lake Harriet" },
    { name: "Tangletown", slug: "tangletown", description: "Curving streets and strong community identity" },
    { name: "Armatage", slug: "armatage", description: "Family-friendly and more affordable, just south" },
  ],
  closing: {
    title: "What Makes Lynnhurst Irreplaceable",
    paragraphs: [
      "Lynnhurst doesn&apos;t have the boutique cachet of Linden Hills or the name recognition of 50th and France. It doesn&apos;t try to. What it has is the thing that actually matters when you&apos;re raising a family or settling into a life: consistency. The park is always there. The school is strong and has been for years. The creek runs through and the lake is close. Your neighbors know your name and your dog&apos;s name and probably your kid&apos;s teacher&apos;s name. The summer concerts drift across the water and land somewhere in your backyard.",
      "Lynnhurst is the kind of neighborhood that earns its reputation quietly, one block party and one snowy sidewalk shoveled for a neighbor at a time. It&apos;s not trying to impress anyone. It doesn&apos;t need to. The people who live here know what they have, and they tend to stay.",
      "If you&apos;re looking for the Southwest Minneapolis package — the lake, the creek, the trees, the schools, the community — and you want it in a neighborhood that still feels like a discovery rather than a brand name, Lynnhurst is where you start looking. Just don&apos;t wait too long. The word has been getting out for a while now.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday morning in early June, Lynnhurst Park is already full
          in the way that only a Southwest Minneapolis park gets full — not
          packed, but populated. Two soccer games are running simultaneously on
          the fields. A dad is pushing a stroller around the perimeter path
          while holding a coffee from the shop on 50th. A group of kids are
          climbing the playground structure with the focused intensity of people
          doing the most important thing in the world. Somewhere beyond the
          trees, you can just make out Lake Harriet glinting in the morning
          light, a ten-minute walk east. A neighbor waves. You wave back. You
          don&apos;t remember their name exactly, but you know their dog. This
          is Lynnhurst on a Saturday. The rest of the week, it&apos;s quieter —
          but the bones are always there.
        </p>
        <p>
          Lynnhurst is the neighborhood between the neighborhoods — bordered by
          Linden Hills and Fulton and East Harriet, sharing their DNA but
          holding its own quieter identity. It doesn&apos;t have a boutique
          village or a famous shopping district. What it has is a park, a
          school, a creek, a lake, and a set of streets where people have been
          raising families for the better part of a century. Sometimes the
          simplest formula is the most durable.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/lynnhurst/hero.webp"
        alt="Tree-lined residential street in Lynnhurst, Minneapolis with mature elms and 1920s bungalows"
        caption="A typical Lynnhurst block — mature trees, deep setbacks, and homes that have been here for nearly a century"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Lynnhurst, Minneapolis?">
        <Prose>
          <p>
            Lynnhurst is a residential neighborhood in Southwest Minneapolis,
            bounded roughly by West 46th Street and Minnehaha Creek to the north,
            Lyndale Avenue South to the east, West 54th Street to the south, and
            Penn Avenue South to the west. It sits between two of Southwest
            Minneapolis&apos;s most recognized neighborhoods —{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>{" "}
            to the northwest and{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>{" "}
            to the west — and shares much of their character: tree-lined streets,
            well-maintained housing stock from the 1920s through the 1940s, strong
            schools, and direct access to Lake Harriet and the Minneapolis park
            system. Home to approximately 5,800 residents, Lynnhurst is quieter
            and less commercially active than its neighbors, which is precisely
            the point for many who choose to live here.
          </p>
          <p>
            The neighborhood&apos;s commercial life centers on the 50th &amp;
            Lyndale corridor — a modest strip of restaurants, cafes, and service
            businesses that serves daily needs without aspiring to destination
            status. Lynnhurst Park, the neighborhood&apos;s namesake green space,
            provides a central gathering point with ball fields, a playground,
            and a recreation center that hosts youth sports and community events.
            Burroughs Community School, one of the most highly regarded
            elementary schools in the Minneapolis Public Schools system, sits
            near the heart of the neighborhood and functions as a social anchor
            for families.
          </p>
          <p>
            What distinguishes Lynnhurst from its neighbors isn&apos;t any single
            feature — it&apos;s a cumulative quality. The slightly lower profile.
            The slightly lower price point. The sense that you&apos;re getting
            the full Southwest Minneapolis experience — the lake, the creek, the
            trees, the schools, the community — without paying the full Linden
            Hills or Fulton premium. Whether that gap persists is another
            question; the market has been closing it steadily.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Lynnhurst Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/lynnhurst/neighborhood-sign.webp"
          alt="Lynnhurst neighborhood sign in Minneapolis"
          caption="The Lynnhurst neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Lynnhurst History & Origins">
        <Prose>
          <p>
            The land that is now Lynnhurst sits within the ancestral homeland of
            the Dakota people. Lake Harriet, which defines the neighborhood&apos;s
            eastern identity, was known to the Dakota as Bde Unma, and the broader
            lake region was central to Dakota life and spirituality long before
            European settlement. Bdote — the sacred confluence of the Mississippi
            and Minnesota Rivers — lies a few miles to the east. The ground here
            carries centuries of history that predates any neighborhood boundary
            or street grid.
          </p>
          <p>
            European and American settlement reached this part of Minneapolis in
            the latter half of the 19th century, accelerating after the Civil War
            as the city expanded outward from the milling district along the
            Mississippi. By the 1880s, the Minneapolis Street Railway Company had
            extended tracks to Lake Harriet and built a pavilion for summer
            entertainment — an entrepreneurial move to drive ridership that
            inadvertently created one of Minneapolis&apos;s most enduring public
            traditions: free lakeside concerts that continue at the Bandshell
            today.
          </p>
          <p>
            The neighborhood itself took shape primarily in the 1920s, 1930s, and
            1940s, as Minneapolis&apos;s expanding middle class pushed southwestward
            in search of larger lots, better air, and proximity to the lakes. The
            homes built during this period — Craftsman bungalows, Tudor Revival
            cottages, Cape Cods, and Colonial Revivals — reflect the architectural
            preferences of a generation that valued solidity, modesty, and
            craftsmanship over scale. Most sit on generous lots with deep
            setbacks, mature trees, and detached garages accessed by back alleys.
            It&apos;s a streetscape that feels deliberate and lived-in, the
            physical record of nearly a century of continuous occupation.
          </p>
          <p>
            Lynnhurst Park, the neighborhood&apos;s namesake and central gathering
            place, was developed by the Minneapolis Park Board as part of a broader
            effort to ensure every city neighborhood had access to green space. The
            park&apos;s recreation center has served as a hub for youth sports,
            community meetings, and seasonal programming for decades. The
            neighborhood&apos;s name itself is believed to derive from the
            combination of &quot;Lynn&quot; (a common suffix in the area, possibly
            referencing nearby Lyndale Avenue) and &quot;hurst&quot; (an Old
            English word for a wooded hill).
          </p>
          <p>
            Like much of Southwest Minneapolis, Lynnhurst remained relatively
            stable throughout the 20th century — it never experienced the cycles
            of disinvestment and reinvention that marked neighborhoods closer to
            downtown. That long continuity is part of what makes it feel so
            settled today. It&apos;s also part of what makes it expensive.
          </p>
          <p>
            It is important to note — as it is across all of Southwest
            Minneapolis — that this stability was not accidental or purely
            organic. Racially restrictive covenants were widespread in Lynnhurst
            and surrounding neighborhoods through the mid-20th century,
            explicitly barring the sale of homes to Black families and other
            people of color. These covenants were ruled unenforceable by the
            Supreme Court in 1948 and later outlawed by federal law, but the
            demographic patterns they established proved remarkably persistent.
            Lynnhurst&apos;s history is in many ways a story of Southwest
            Minneapolis as a whole: beautiful, well-maintained, deeply
            community-oriented — and shaped by exclusionary practices whose
            effects endure.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Lynnhurst">
        <Prose>
          <p>
            If you spent an afternoon walking Lynnhurst&apos;s residential blocks,
            you might not immediately know you&apos;d left{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>{" "}
            or entered from{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            . The trees are the same. The houses are the same vintage. The porches
            are deep, the lawns are tended, and a kid&apos;s bike is abandoned in
            a driveway somewhere on every block. The difference is subtle but real:
            Lynnhurst is slightly less commercial, slightly more inward-facing,
            slightly more content to just be a place where people live rather than
            a place people come to visit. That&apos;s its appeal.
          </p>
          <p>
            The Lynnhurst Neighborhood Association is active and well-organized,
            coordinating block parties, ice cream socials, park cleanups, and
            seasonal events that give the neighborhood its connective tissue.
            Block clubs are real here — not a formality but a genuine expression
            of how neighbors stay in touch. People know each other. They watch
            each other&apos;s houses when someone travels. They bring meals when
            someone is sick. It&apos;s the kind of community fabric that&apos;s
            easy to take for granted until you realize how rare it is.
          </p>
          <p>
            The neighborhood skews toward families with school-age children and
            long-term homeowners. Burroughs Elementary is a significant anchor —
            many families move to Lynnhurst specifically for the school, and the
            parent community around Burroughs creates its own social network. On
            any given evening, you&apos;ll see families walking to the park,
            runners heading toward the lake, and dog walkers making their rounds
            along the creek. The pace is unhurried. The ambition is domestic. It
            works.
          </p>
        </Prose>
        <Prose>
          <p>
            There&apos;s a particular rhythm to Lynnhurst that reveals itself
            across the seasons. In spring, the crack of aluminum bats at
            Lynnhurst Park signals the start of little league. In summer, the
            sound of Bandshell concerts carries across the water and into
            backyards — you can hear the music from your porch if the wind is
            right. In fall, the elms and maples turn the streets into a canopy
            of gold and copper, and the crunch of leaves underfoot is the
            neighborhood&apos;s ambient soundtrack. In winter, the cross-country
            ski trails along the creek and around the lake turn the same paths
            you walked in July into something entirely different. Each season
            gives the neighborhood a new reason to be outside, and people here
            take all of them.
          </p>
        </Prose>
        <Quote
          text="We moved here for Burroughs and stayed for everything else — the park, the lake, the neighbors. It just fits."
          cite="Lynnhurst resident, neighborhood survey"
        />

        <ImageSlot
          src="/images/neighborhoods/lynnhurst/character.webp"
          alt="Families and neighbors at a Lynnhurst block party in summer"
          caption="Block parties are a Lynnhurst institution, not a formality"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Lynnhurst Food, Drink & Local Spots">
        <Prose>
          <p>
            Lynnhurst&apos;s commercial life is concentrated along a short stretch
            of 50th Street near Lyndale Avenue — a modest but functional corridor
            that serves everyday needs without trying to be a destination. It&apos;s
            not the boutique-lined village of Linden Hills or the upscale shopping
            of 50th and France. It&apos;s a neighborhood commercial strip: a place
            to grab coffee, pick up groceries, eat a good meal, and get on with
            your day. Residents also draw heavily from nearby Linden Hills and the
            54th &amp; Lyndale corridor just to the south.
          </p>
          <p>
            The 50th &amp; Lyndale node has seen gradual turnover and improvement
            in recent years, with newer restaurants and cafes joining
            long-standing businesses. The corridor doesn&apos;t attract much
            attention from outside the neighborhood, which is arguably its
            strength — it remains scaled to the people who actually live here,
            not to weekend visitors or Instagram tourists. The result is a
            commercial strip that feels genuinely local in a way that&apos;s
            increasingly rare.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/lynnhurst/food-tilia.webp"
          alt="Tilia restaurant on 54th and Lyndale in Minneapolis"
          caption="Tilia, one of Southwest Minneapolis's best restaurants, sits just south of Lynnhurst"
        />

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Tilia", tag: "American", price: "$$$", url: "https://tiliampls.com", description: "2726 W. 54th Street. Chef Steven Brown's neighborhood restaurant has become one of the best in Southwest Minneapolis — inventive, seasonal American cooking in a warm, unpretentious space. The burger is famous. The wine list is smart. It draws from across the city but still feels like a neighborhood place." }} />
          <PlaceCardComponent place={{ name: "Sebastian Joe's Ice Cream", tag: "Ice Cream", price: "$", description: "4321 Upton Ave. S. A Minneapolis institution with a loyal following. The Pavarotti flavor (banana ice cream with caramel swirl and chocolate chunks) is legendary. Lines out the door in summer are a feature, not a bug." }} />
          <PlaceCardComponent place={{ name: "Key West Bistro", tag: "Seafood / Caribbean", price: "$$", description: "5000 Lyndale Ave. S. A colorful neighborhood spot serving Florida Keys-inspired seafood and tropical cocktails. The patio is packed in summer. It shouldn't work this far north, but it does." }} />
          <PlaceCardComponent place={{ name: "Bread & Pickle", tag: "Lakeside Dining", price: "$", description: "At the Lake Harriet Bandshell Pavilion. Sandwiches, salads, and beer on the lake. The food is secondary to the setting — grab something before a concert and eat on the lawn." }} />
          <PlaceCardComponent place={{ name: "Kowalski's Markets", tag: "Grocery", description: "5327 Lyndale Ave. S. A locally owned, upscale grocery chain and a daily stop for many Lynnhurst residents. Good produce, good deli, good bakery. The kind of grocery store that feels like a neighborhood institution." }} />
          <PlaceCardComponent place={{ name: "Patisserie Margo", tag: "Bakery & Cafe", price: "$$", description: "5000 Penn Ave. S. French-inspired pastries and espresso in a neighborhood setting. Croissants, tarts, and quiche that reward the early arrival. A newer addition that has quickly become a local favorite." }} />
          <PlaceCardComponent place={{ name: "Lake Harriet Yacht Club", tag: "Bar & Restaurant", price: "$$", description: "4424 Upton Ave. S. Not actually a yacht club and not actually on the lake, but a beloved neighborhood bar and restaurant with a patio, craft cocktails, and a vibe that splits the difference between casual and refined. The name is an inside joke. The food is not." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The nearby Linden Hills commercial district on 43rd Street offers
              additional dining and shopping — Wild Rumpus Books, Turtle Bread
              Company, and a string of boutiques that complement Lynnhurst&apos;s
              more utilitarian strip. The 50th &amp; France district in{" "}
              <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
                Fulton
              </Link>{" "}
              and Edina is also a short drive or bike ride west. Between the
              three corridors, Lynnhurst residents have access to one of the
              strongest independent retail ecosystems in the Twin Cities.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Lynnhurst">
        <Prose>
          <p>
            Outdoor access is arguably the single strongest argument for living
            in Lynnhurst. Between Lake Harriet, Minnehaha Creek, and the
            neighborhood&apos;s own park, there&apos;s an almost unfair
            concentration of natural amenities within walking distance of every
            address in the neighborhood.
          </p>
        </Prose>
        <ArticleSubsection title="Lake Harriet">
          <Prose>
            <p>
              Lake Harriet sits at Lynnhurst&apos;s eastern edge and is one of
              the jewels of the Minneapolis Chain of Lakes Regional Park — a
              string of interconnected lakes linked by parkways, trails, and
              greenways that give Minneapolis its reputation as one of America&apos;s
              most park-rich cities. The 3-mile paved loop around the lake
              accommodates walkers, runners, cyclists, and rollerbladers through
              all but the coldest months. In summer, kayak and canoe rentals
              launch from the western shore. There are two beaches for swimming,
              fishing piers, gardens, and tennis courts at Beard&apos;s Plaisance.
              In winter, the lake freezes solid enough for cross-country skiing,
              ice fishing, and fat-tire biking — extending the outdoor season
              in a way that only Minnesota can. The lake is Lynnhurst&apos;s
              front yard in every season, and proximity to it is the single
              most valuable amenity the neighborhood offers.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/lynnhurst/lake-harriet.webp"
            alt="Lake Harriet at sunset with the Minneapolis skyline in the distance"
            caption="Lake Harriet defines Lynnhurst's eastern edge and daily rhythms"
          />
        </ArticleSubsection>
        <ArticleSubsection title="The Lake Harriet Bandshell">
          <Prose>
            <p>
              Free concerts at the lake have been a Minneapolis tradition since
              the 1880s, when the street railway company built a pavilion to draw
              weekend crowds. The current Bandshell hosts the Minneapolis Music
              and Movies in the Parks series throughout the summer. The Minneapolis
              Pops Orchestra, with more than 75 seasons of performances, plays
              regularly. On any warm evening, the lawn fills with blankets and
              folding chairs. It&apos;s the kind of civic tradition that sounds
              corny until you&apos;re sitting on the grass with a glass of wine
              listening to jazz drift across the water — and then it just feels
              like the reason you live here.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/lynnhurst/bandshell.webp"
            alt="The Lake Harriet Bandshell during a free summer concert"
            caption="The Bandshell concerts are Lynnhurst's backyard soundtrack all summer"
          />
        </ArticleSubsection>
        <ArticleSubsection title="Lynnhurst Park">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park sits near the center of the
              community and serves as its day-to-day gathering place. It includes
              ball fields, a playground, tennis courts, open green space, and
              the Lynnhurst Recreation Center, which hosts youth sports leagues,
              community meetings, fitness classes, and seasonal programming.
              The park isn&apos;t dramatic — it&apos;s not the lake — but it&apos;s
              the place where neighborhood life actually happens: where kids play
              after school, where families gather on weekends, where the summer
              ice cream social draws half the block. It&apos;s the park that makes
              Lynnhurst feel like a neighborhood rather than just a collection
              of houses.
            </p>
            <p>
              The Lynnhurst Recreation Center, located within the park, runs
              programming year-round: youth basketball and soccer leagues in
              winter, summer camps, fitness classes, and community events.
              It&apos;s the kind of modest civic amenity that you don&apos;t
              think much about until you need it — and then you realize it&apos;s
              one of the things holding the neighborhood together.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Roberts Bird Sanctuary &amp; Lyndale Park Gardens">
          <Prose>
            <p>
              Just east of Lake Harriet, the Thomas S. Roberts Bird Sanctuary
              preserves a pocket of old-growth woods and wetland that feels
              almost impossibly wild for a city neighborhood. Walking trails wind
              through the sanctuary, and birders can spot dozens of species
              during spring and fall migration. Adjacent Lyndale Park Gardens —
              featuring the Peace Garden, rose gardens, and perennial gardens —
              offer a more cultivated but equally beautiful outdoor experience.
              Both are within easy biking or walking distance from anywhere in
              Lynnhurst.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Minnehaha Creek">
          <Prose>
            <p>
              The creek forms Lynnhurst&apos;s northern boundary and is one of the
              great hidden assets of Southwest Minneapolis. The paved trail
              alongside it connects to the Grand Rounds Scenic Byway,
              Minneapolis&apos;s 51-mile network of parkways and bike paths. In
              summer, kids float the shallow stretches on inner tubes. In winter,
              the path doubles as a cross-country ski trail. The creek corridor
              also functions as a wildlife corridor — herons, turtles, and the
              occasional fox are regular sightings.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Lynnhurst Schools">
        <Prose>
          <p>
            Schools are one of the primary reasons families choose Lynnhurst,
            and the neighborhood&apos;s public school anchor — Burroughs
            Community School — is a genuine draw.
          </p>
          <p>
            Burroughs serves students from pre-K through fifth grade and
            consistently earns strong ratings from Niche and other school
            evaluation platforms. It&apos;s known for an engaged parent community,
            strong academics, and a sense of school identity that extends into
            the surrounding neighborhood. For many Lynnhurst families, Burroughs
            is the center of social life as much as it is an educational
            institution — the place where parents meet, friendships form, and the
            rhythms of the school year structure the rhythms of family life.
          </p>
          <p>
            Middle school feeds into Anthony Middle School (rated B by Niche),
            and high school into Southwest Senior High School, which serves
            much of Southwest Minneapolis. Southwest is a well-regarded
            International Baccalaureate World School that also offers career
            and technical education programs. It earns an A-minus from Niche
            and is known particularly for its performing arts program and
            strong extracurriculars.
          </p>
          <p>
            Private and alternative options accessible from Lynnhurst include
            the broader Minneapolis magnet school system, as well as private
            schools in the surrounding area. Families seeking Montessori,
            language immersion, or faith-based education have multiple options
            within a short drive.
          </p>
          <p>
            It&apos;s worth noting that the quality of the school pipeline is
            a self-reinforcing cycle in Lynnhurst: strong schools attract
            engaged families, engaged families invest in the schools, and the
            cycle continues. This is a genuine community asset, but it also
            contributes to the neighborhood&apos;s high home prices — you&apos;re
            paying for the school district whether or not you have children, and
            the market knows it. Families routinely cite Burroughs as the
            deciding factor in their home search, and homes within the
            Burroughs attendance boundary carry a measurable premium.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Lynnhurst Real Estate & Housing">
        <Prose>
          <p>
            Lynnhurst is expensive by Minneapolis standards — not quite as
            expensive as neighboring Fulton or parts of Linden Hills, but well
            above the citywide median. The median home sale price in Lynnhurst
            has ranged between roughly $500,000 and $750,000 depending on the
            data source and season. The citywide Minneapolis median sits around
            $350,000–$375,000, so Lynnhurst trades at a meaningful premium —
            driven by the school district, lake proximity, and overall
            neighborhood quality.
          </p>
          <p>
            Homes here sell relatively quickly. According to Redfin data, the
            average Lynnhurst home was on the market roughly 18 days in 2025,
            well below the national average. Well-priced homes in good condition
            near the lake or within easy walking distance of Burroughs often
            attract multiple offers.
          </p>
          <p>
            The market in Lynnhurst is driven by a combination of factors that
            are difficult to replicate: proximity to Lake Harriet and Minnehaha
            Creek, access to strong public schools, a mature tree canopy, low
            crime, and a deeply engaged community. These are not features a
            developer can build — they&apos;re accumulated assets of a neighborhood
            that has been well-maintained and well-loved for a century. That
            accumulation is what you&apos;re paying for, and it&apos;s why
            prices here remain resilient even when the broader market softens.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end (roughly $375,000–$500,000), you&apos;re looking
              at smaller bungalows or Cape Cods that need updating — functional
              but dated kitchens, original windows, modest square footage. The
              mid-range ($500,000–$750,000) gets you a well-maintained three- or
              four-bedroom home with updated systems and a usable yard. Above
              $750,000, you&apos;re into larger renovated properties, newer
              construction, or homes with direct lake or creek proximity.
            </p>
            <p>
              The dominant styles are 1920s–1940s Craftsman bungalows, Tudor
              Revival cottages, Cape Cods, and Colonial Revivals. Most homes are
              owner-occupied, sitting on generous lots with mature landscaping
              and detached garages on back alleys. Newer construction — typically
              larger, contemporary-styled homes built on teardown lots — is
              increasingly visible but still a minority of the housing stock.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Teardown Factor">
          <Prose>
            <p>
              As in neighboring{" "}
              <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
                Fulton
              </Link>
              , teardowns are reshaping parts of the housing stock. When a modest
              bungalow on a large lot sells, there&apos;s a reasonable chance
              it&apos;s purchased by a builder who will demolish it and replace it
              with a significantly larger home priced at $800,000 to $1.2 million
              or more. This process brings new construction into the neighborhood
              and satisfies demand for more square footage, but it also changes
              the character of individual blocks and pushes the neighborhood&apos;s
              overall price point higher. The teardown premium — the difference
              between what the land is worth with an old bungalow on it versus
              what it&apos;s worth with a new 3,000-square-foot home — is a
              significant driver of Lynnhurst&apos;s rising median prices.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="Lynnhurst gives you the Southwest Minneapolis lifestyle at slightly less than Linden Hills or Fulton prices — but that gap has been narrowing every year." cite="Southwest Minneapolis real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Lynnhurst">
        <Prose>
          <p>
            Lynnhurst is walkable for daily errands — the 50th &amp; Lyndale
            corridor and Lynnhurst Park are reachable on foot from most
            addresses, and the lake and creek trails encourage movement by foot
            and bike. Lynnhurst earns a Walk Score of 72 and a Bike Score of 85,
            reflecting strong cycling infrastructure and reasonable pedestrian
            access for a residential neighborhood.
          </p>
          <p>
            For getting beyond the neighborhood, cars remain the primary mode.
            Downtown Minneapolis is 15–20 minutes by car; MSP International
            Airport is similarly accessible via I-35W. Bus routes along Lyndale
            Avenue and 50th Street provide connections to Uptown and downtown,
            though frequency can be limited outside of peak hours. The Midtown
            Greenway, accessible from the neighborhood&apos;s northern reaches
            via the creek trail system, offers a car-free bike commute corridor
            into Uptown and toward downtown for cyclists willing to ride year-round.
          </p>
          <p>
            The Lake Harriet Parkway and William Berry Parkway provide scenic
            driving and biking routes that connect Lynnhurst to the broader
            Chain of Lakes system — you can bike from Lynnhurst to Bde Maka Ska,
            Lake of the Isles, and Cedar Lake without touching a road with car
            traffic, which is one of the genuinely remarkable things about
            living in this part of Minneapolis. Parking on residential streets
            is ample, and the commercial nodes have adequate surface lot and
            street parking. Winter parking rules (odd/even sides, snow
            emergencies) apply as they do across Minneapolis.
          </p>
        </Prose>
        <ImageSlot
          src="/images/neighborhoods/lynnhurst/streetscape.webp"
          alt="Tree-lined residential street in Lynnhurst with sidewalks and bungalows"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Lynnhurst is a stable, well-functioning neighborhood. But stable and
            well-functioning doesn&apos;t mean static, and there are real
            conversations happening here — some comfortable, some not.
          </p>
        </Prose>
        <ArticleSubsection title="Teardowns and Character">
          <Prose>
            <p>
              The same story playing out across Southwest Minneapolis is playing
              out in Lynnhurst: as land values rise, modest 1920s and 1930s
              bungalows on generous lots become attractive teardown candidates.
              The replacement homes are typically much larger, often built to the
              maximum allowable footprint, and styled in a contemporary idiom
              that can feel jarring next to the Tudor cottages and Craftsman
              bungalows that define the neighborhood&apos;s character. Long-term
              residents worry about the cumulative effect on the streetscape.
              Newer buyers see the teardowns as the only way to get the square
              footage they want in the neighborhood they want. There&apos;s no
              clean resolution — only a block-by-block negotiation between
              preservation and change.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Affordability and Access">
          <Prose>
            <p>
              Lynnhurst&apos;s median home price puts it out of reach for a large
              portion of Minneapolis residents. The neighborhood is overwhelmingly
              white, overwhelmingly homeowning, and overwhelmingly upper-middle
              class. This demographic homogeneity isn&apos;t accidental — it&apos;s
              the product of historical housing policies, including racially
              restrictive covenants that were common across Southwest Minneapolis
              in the early and mid-20th century. Those covenants are no longer
              enforceable, but their legacy persists in the demographics, the
              price points, and the cultural character of the neighborhood.
              Acknowledging this isn&apos;t a criticism of Lynnhurst&apos;s
              current residents — it&apos;s an honest accounting of how the
              neighborhood came to look the way it does.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Density and Zoning Debates">
          <Prose>
            <p>
              Minneapolis&apos;s 2040 comprehensive plan, which eliminated
              single-family-only zoning citywide, has prompted ongoing
              conversations in Lynnhurst about the possibility of duplexes and
              triplexes on blocks that have historically been exclusively
              single-family. Opinions are divided. Some residents welcome modest
              density as a way to bring more people into a desirable neighborhood
              and address the affordability gap. Others worry about parking,
              traffic, and changes to the neighborhood&apos;s residential feel.
              As of 2026, actual construction of new multi-unit housing in
              Lynnhurst under the 2040 plan has been limited, but the
              conversation continues.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Property Crime">
          <Prose>
            <p>
              Like most of Southwest Minneapolis, Lynnhurst&apos;s reputation
              for safety is generally well-earned. Violent crime is rare.
              However, residents report a noticeable uptick in property crime in
              recent years — particularly vehicle break-ins, catalytic converter
              thefts, and package theft. These patterns are consistent with
              trends across the city and not unique to Lynnhurst, but they are
              real enough to shape daily behavior: people lock their cars, bring
              in packages promptly, and keep an eye on unfamiliar vehicles. The
              neighborhood&apos;s active block club network functions in part as
              an informal watch system. Lynnhurst is safe in the ways that
              matter most, but it is not immune to the property crime pressures
              facing Minneapolis as a whole.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Lynnhurst FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
