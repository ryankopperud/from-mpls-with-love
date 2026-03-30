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
    title: "Armatage, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Armatage, Minneapolis — homes, history, Armatage Park, Minnehaha Creek, schools, restaurants, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Armatage",
  deck: "A family-first neighborhood in the far southwest corner of Minneapolis — where Minnehaha Creek meanders through the backyard, Armatage Park anchors the social calendar, and the suburbs are close enough to touch but not close enough to claim you.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Armatage?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Armatage" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Armatage, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,500", label: "Residents (Niche / US Census)" },
      { value: "$375K–$575K", label: "Median home sale price range (2025 data)" },
      { value: "16 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.6 sq mi", label: "Neighborhood area" },
      { value: "1920s–50s", label: "Era most homes were built" },
      { value: "15–20 min", label: "Drive to downtown or MSP airport" },
      { value: "60", label: "Walk Score" },
      { value: "78", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Armatage a good neighborhood in Minneapolis?",
      answer:
        "Yes. Armatage is a stable, family-oriented neighborhood in the far southwest corner of Minneapolis. It offers strong park infrastructure, access to Minnehaha Creek, good schools, and the kind of settled, residential character that families with young children actively seek out. It's quieter and more affordable than the lake-adjacent neighborhoods to the north, which is part of the appeal.",
    },
    {
      question: "Is Armatage, Minneapolis safe?",
      answer:
        "Armatage is one of the safer neighborhoods in Minneapolis. Violent crime is uncommon. Property crime — vehicle break-ins and package theft — has increased modestly in recent years, as it has across much of Southwest Minneapolis, but the overall safety profile remains strong.",
    },
    {
      question: "What is Armatage, Minneapolis known for?",
      answer:
        "Armatage is known for Armatage Park (with its playground, rec center, wading pool, ball fields, and winter ice rink), its proximity to Minnehaha Creek, and its position as one of the more affordable entry points into Southwest Minneapolis. The neighborhood is also known for being genuinely family-dense — strollers and bikes outnumber everything else on the sidewalks.",
    },
    {
      question: "How much do homes cost in Armatage, Minneapolis?",
      answer:
        "Median home sale prices in Armatage have ranged from roughly $375,000 to $575,000 depending on season and data source. This places Armatage slightly below neighboring Kenny and Fulton, and meaningfully below the lake-adjacent neighborhoods. Smaller bungalows can still be found in the $325,000–$400,000 range; larger renovated homes or new construction can push past $650,000.",
    },
    {
      question: "Is Armatage walkable?",
      answer:
        "Moderately. Armatage earns a Walk Score of 60 — the neighborhood is primarily residential and lacks a central commercial district. The nearest commercial nodes are at 54th & Penn, along France Avenue near 50th, and across the border in Edina. Biking infrastructure is strong, with connections to the Minnehaha Creek trail and the broader Grand Rounds system.",
    },
    {
      question: "What schools serve Armatage, Minneapolis?",
      answer:
        "Armatage Community School (K–5) is the neighborhood elementary and a genuine community hub. Middle school feeds into Anthony Middle School, and the high school destination is Southwest Senior High School, an IB World School with strong academic and arts programs.",
    },
    {
      question: "Where exactly is Armatage in Minneapolis?",
      answer:
        "Armatage is in the far southwest corner of Minneapolis, bounded roughly by West 54th Street (north), Penn Avenue South (east), the city limits with Edina and Richfield (south and west), and France Avenue South (west). It borders Kenny to the north and sits at the very edge of the city.",
    },
    {
      question: "Does Minnehaha Creek run through Armatage?",
      answer:
        "Yes. Minnehaha Creek flows through the southern portion of Armatage, providing a natural corridor with walking and biking trails. The creek is one of the neighborhood's defining features — a greenway that connects Armatage to the broader creek trail system running from Lake Minnetonka to Minnehaha Falls.",
    },
    {
      question: "How is Armatage different from Kenny?",
      answer:
        "Armatage and Kenny share a border along 54th Street and have very similar character — both are quiet, family-oriented, and deeply residential. Armatage is slightly larger, slightly more affordable on average, and has the advantage of Minnehaha Creek running through it. Kenny is closer to the 50th & France commercial district. The differences are subtle.",
    },
    {
      question: "Is Armatage a good place to raise a family?",
      answer:
        "Armatage is widely considered one of the best family neighborhoods in Minneapolis. Armatage Community School is walkable and well-regarded, the park offers extensive youth programming, the streets are quiet, and the creek trail provides a natural backyard for the entire neighborhood. The community is tight-knit, with active block clubs and a strong neighborhood association.",
    },
  ],
  nearby: [
    { name: "Kenny", slug: "kenny", description: "Small and quiet, just to the north" },
    { name: "Fulton", slug: "fulton", description: "Lake Harriet access and 50th Street commercial life" },
    { name: "Lynnhurst", slug: "lynnhurst", description: "Minnehaha Creek, quiet streets, strong schools" },
    { name: "Linden Hills", slug: "linden-hills", description: "Boutique shopping and Lake Harriet's north shore" },
    { name: "Diamond Lake", slug: "diamond-lake", description: "Affordable residential, south of Minnehaha Creek" },
  ],
  closing: {
    title: "What Makes Armatage Worth Knowing",
    paragraphs: [
      "Armatage is the kind of neighborhood that doesn't try to impress you. There's no signature restaurant, no landmark everyone recognizes, no Instagram-ready waterfront. What there is, instead, is a park where your kids will spend a thousand afternoons, a creek trail where you'll walk the dog until the dog knows every tree, neighbors who will shovel your sidewalk when you're out of town, and a house that was built before the interstate and will probably outlast whatever comes next.",
      "It's the last neighborhood before the city line — the place where Minneapolis thins out and starts to feel like something else. But it's still Minneapolis, still inside the lines, still connected to the parks and the schools and the civic identity that make this city what it is. For families who want that identity without the price tag of the lake neighborhoods, Armatage is the answer that keeps quietly delivering.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There&apos;s a moment in early June when Minnehaha Creek is running
          high and the cottonwoods along the bank are dropping their seeds, and
          the trail through the southern edge of Armatage looks like it&apos;s
          snowing in slow motion. Kids on bikes are threading between the
          cotton drifts. Someone is pushing a stroller with one hand and
          holding a coffee with the other. A dog is standing in the creek up
          to its belly, refusing to move. Two blocks north, at Armatage Park,
          the wading pool is open and the sound of children screaming with joy
          carries further than you&apos;d think. This is Armatage at its most
          characteristic — not grand, not dramatic, just a neighborhood doing
          exactly what it was built to do, and doing it well.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/armatage/hero.webp"
        alt="Tree-lined residential street in the Armatage neighborhood of Minneapolis"
        caption="Armatage's quiet residential streets in early summer"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Armatage, Minneapolis?">
        <Prose>
          <p>
            Armatage is a residential neighborhood in the far southwest corner
            of Minneapolis, bounded roughly by West 54th Street to the north,
            Penn Avenue South to the east, the city limits to the south and
            west (where Minneapolis meets Richfield and Edina), and France
            Avenue South along part of its western edge. It covers about 0.6
            square miles and is home to approximately 4,500 residents. It
            borders{" "}
            <Link href="/neighborhoods/kenny" className="text-[#2a9d8f] hover:underline">
              Kenny
            </Link>{" "}
            to the north and sits at the very bottom of the Southwest
            Minneapolis map — the last stop before you&apos;re in the suburbs.
          </p>
          <p>
            The neighborhood takes its name from the park at its center, which
            in turn was named after a local family. Armatage is defined by
            three things: its park, its creek, and its families. The park
            provides the social anchor — rec center, playground, ball fields,
            wading pool, ice rink. Minnehaha Creek winds through the southern
            portion, offering a natural greenway and trail connection that
            links the neighborhood to the broader creek corridor stretching
            from Lake Minnetonka to Minnehaha Falls. And the families — young
            ones, especially — give the neighborhood its character. This is
            stroller country. Bike-trailer country. Walk-to-school, play-in-the-yard,
            know-your-neighbors country.
          </p>
          <p>
            Armatage doesn&apos;t have a lake, and it doesn&apos;t have a
            commercial district of its own. What it has is the particular
            contentment of a neighborhood that knows exactly what it is and
            doesn&apos;t feel the need to be anything else. People come here
            for the schools, the park, the creek, and the price point — and
            they stay because the combination works better than they expected.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Armatage Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/armatage/neighborhood-sign.webp"
          alt="Armatage neighborhood sign in Minneapolis"
          caption="The Armatage neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Armatage History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part
            of the territory centered around the sacred confluence at Bdote
            where the Mississippi and Minnesota Rivers meet. The Dakota people
            lived, traveled, and gathered across these prairies and creek
            corridors for centuries before treaties and forced removal in the
            1850s and 1860s reshaped everything. Minnehaha Creek, which still
            runs through the southern edge of the neighborhood, was part of a
            landscape the Dakota knew intimately. The ground here has a longer
            history than any of the houses standing on it.
          </p>
          <p>
            European settlement in this part of what would become Minneapolis
            came later than in areas closer to the river and the lakes.
            Armatage&apos;s blocks were among the last in Southwest Minneapolis
            to be platted and developed — a function of distance from downtown,
            from the streetcar lines, and from the lakes that drew early
            residential development northward. While neighborhoods like Linden
            Hills and East Harriet were filling in during the 1910s and 1920s,
            Armatage&apos;s development stretched through the 1930s, 1940s, and
            into the 1950s. This later build-out is visible in the housing
            stock: you&apos;ll find the same Craftsman bungalows and Tudor
            revivals that appear across Southwest Minneapolis, but also a
            higher proportion of Cape Cods, ramblers, and early postwar homes
            that reflect the later development timeline.
          </p>
          <p>
            Armatage Park was established in the 1930s and quickly became the
            neighborhood&apos;s center of gravity. The recreation center, the
            ball fields, and the winter ice rink gave a relatively far-flung
            neighborhood a focal point — a place where people who might
            otherwise have felt isolated at the city&apos;s edge could gather,
            organize, and build the kind of community infrastructure that
            turns houses into a neighborhood.
          </p>
          <p>
            For most of the 20th century, Armatage was a working- and
            middle-class neighborhood — more affordable than the neighborhoods
            closer to the lakes, attracting young families who wanted the
            Southwest Minneapolis school pipeline without the premium. That
            dynamic still holds, though the affordability gap has narrowed as
            Southwest Minneapolis prices have risen across the board.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Armatage">
        <Prose>
          <p>
            Living in Armatage means accepting a trade-off that most residents
            consider favorable: you give up the lake access and commercial
            energy of neighborhoods to the north, and in return you get
            quieter streets, more affordable housing, Minnehaha Creek in your
            backyard, and a park that functions as the neighborhood&apos;s
            living room. It&apos;s a deal that works particularly well for
            families with young children, which is why so many of them end up
            here.
          </p>
          <p>
            The neighborhood&apos;s character is deeply, almost exclusively,
            residential. You can walk the length and width of Armatage and
            encounter nothing but houses, trees, sidewalks, and the occasional
            church or school. There&apos;s no coffee shop on the corner, no
            wine bar, no bookstore. The commercial activity that Armatage
            residents depend on lives on the edges — the 54th &amp; Penn area,
            the France Avenue corridor, or across the city line in Edina. This
            is a feature, not a bug, for the people who choose to live here.
            They&apos;re not looking for walkable urbanism. They&apos;re
            looking for a backyard, a safe street, and a short walk to the
            park.
          </p>
          <p>
            Block clubs are active. The Armatage Neighborhood Association is
            one of the more engaged in Southwest Minneapolis, organizing
            events, coordinating with the city on planning issues, and
            maintaining the kind of social infrastructure that keeps a
            residential neighborhood from feeling anonymous. The annual
            ice cream social at the park is the kind of event that sounds
            corny until you&apos;ve been to one and realized that half the
            neighborhood showed up and everyone actually knows each other.
          </p>
          <p>
            The proximity to the city limits gives Armatage a borderland
            quality. Edina is right there — across France Avenue, across 54th
            Street. Richfield is to the south. The suburbs are not an
            abstraction here; they&apos;re a five-minute walk. Some residents
            see this as an advantage — the convenience of suburban retail and
            services without actually leaving the city. Others feel the tug
            in the other direction, wondering whether they&apos;re really
            living in Minneapolis or just technically inside the line. The
            answer, for most, is both.
          </p>
        </Prose>
        <Quote
          text="We looked at Edina. We looked at Richfield. We ended up in Armatage because we wanted city schools, city parks, and the creek trail — and we could actually afford it here."
          cite="Armatage homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Armatage Food, Drink & Local Spots">
        <Prose>
          <p>
            Armatage is not a dining destination. The neighborhood is almost
            entirely residential, and its food scene is borrowed from the
            commercial nodes at its edges and from the suburbs next door. This
            is not a complaint — it&apos;s simply the reality of living in a
            neighborhood that prioritized yards over storefronts. Armatage
            residents know where to go, and they&apos;ve long since made peace
            with the fact that &quot;going out&quot; means leaving the
            neighborhood.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Wok in the Park", tag: "Thai & Lao", price: "$$", description: "3005 W. 54th Street. A beloved neighborhood spot serving Thai and Lao dishes at the edge of the neighborhood. Unpretentious, reliably good, and the kind of place where regulars don't need to look at the menu." }} />
          <PlaceCardComponent place={{ name: "Pat's Tap", tag: "Bar & Restaurant", price: "$$", url: "https://www.patstap.com", description: "5050 Penn Ave. S. Just across the border in Kenny — a neighborhood bar with craft beer, solid food, and a patio that fills up in summer. The closest thing Armatage has to a local pub, even though it's technically in the next neighborhood over." }} />
          <PlaceCardComponent place={{ name: "Lunds & Byerlys", tag: "Grocery", price: "$$", url: "https://www.lundsandbyerlys.com", description: "3945 W. 50th Street, at 50th & France. The primary grocery destination for most Armatage residents — upscale, well-stocked, and anchoring the 50th & France commercial district across the Edina line." }} />
          <PlaceCardComponent place={{ name: "50th & France District", tag: "Shopping & Dining", description: "Technically in Edina, but Armatage residents use it as their de facto commercial center. Restaurants, boutiques, salons, and services clustered around the intersection — a short drive or bike ride from most of the neighborhood." }} />
          <PlaceCardComponent place={{ name: "Edina Grill", tag: "Diner", price: "$$", description: "5028 France Ave. S. A classic diner-style spot across the line in Edina, popular with Armatage families for weekend breakfast. Straightforward American fare in a no-fuss setting." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Armatage residents also have easy access to the commercial life
              along Lyndale Avenue to the east, including the Diamond Lake
              and Nokomis areas. The France Avenue corridor south into Edina
              offers additional retail and dining options. The truth about
              eating in Armatage is that you&apos;re borrowing from everyone
              else&apos;s commercial strips — but the strips are close enough
              and good enough that it rarely feels like a hardship.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Armatage">
        <Prose>
          <p>
            Armatage&apos;s outdoor story has two chapters: the park and the
            creek. Together, they give a neighborhood without a lake more
            green space and trail access than many neighborhoods that have one.
          </p>
        </Prose>
        <ArticleSubsection title="Armatage Park">
          <Prose>
            <p>
              Armatage Park is the neighborhood&apos;s anchor — a
              well-maintained park near the center of the neighborhood that
              functions as the community&apos;s gathering place. The park
              includes a recreation center, a playground, baseball and
              softball fields, basketball courts, a wading pool, open green
              space, and a winter ice rink. The rec center hosts youth
              programming, community meetings, day camps, and neighborhood
              events throughout the year. In summer, the wading pool is the
              social hub for families with young children; in winter, the
              ice rink takes over. The park is where you meet your neighbors,
              where your kids make their first friends, and where the
              neighborhood association holds the events that keep the
              community connected.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Minnehaha Creek Trail">
          <Prose>
            <p>
              Minnehaha Creek flows through the southern portion of Armatage,
              and the trail that follows it is one of the neighborhood&apos;s
              best features. The paved multi-use trail runs for miles along
              the creek — from Lake Minnetonka in the west to Minnehaha Falls
              in the east — and the Armatage section offers a peaceful,
              tree-shaded stretch that feels surprisingly removed from the
              city. Walking, biking, running, pushing a stroller — the creek
              trail handles all of it. In spring, when the creek is running
              high, it&apos;s one of the prettier stretches of urban greenway
              in Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Broader Connections">
          <Prose>
            <p>
              From Armatage, the Minnehaha Creek trail connects east to the{" "}
              <Link href="/neighborhoods/lynnhurst" className="text-[#2a9d8f] hover:underline">
                Lynnhurst
              </Link>{" "}
              stretch and eventually to Lake Harriet and the Chain of Lakes.
              The Grand Rounds Scenic Byway is accessible via Penn Avenue and
              the creek corridor. Lake Harriet is roughly a mile and a half
              north — a reasonable bike ride for the Bandshell concerts and
              the beach. The Bike Score of 78 reflects genuinely usable
              cycling infrastructure, and the creek trail is the backbone
              of it.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Armatage Schools">
        <Prose>
          <p>
            Schools are a primary draw for families in Armatage, and the
            pipeline here is strong.
          </p>
          <p>
            Armatage Community School serves kindergarten through fifth grade
            and is a genuine neighborhood institution. It&apos;s walkable from
            most addresses in the neighborhood, and the school community
            overlaps heavily with the park and the neighborhood association.
            Armatage is an environmental sciences magnet school — an
            emphasis that pairs naturally with the neighborhood&apos;s creek
            trail and park access. The school is well-regarded by families
            and earns solid marks from rating services.
          </p>
          <p>
            Middle school is Anthony Middle School, which serves several
            Southwest Minneapolis neighborhoods. Southwest Senior High School
            — an International Baccalaureate World School — is the high
            school destination. Southwest is known for strong academics,
            performing arts, and the IB program that draws families from
            across the district.
          </p>
          <p>
            The school-park-neighborhood connection in Armatage is unusually
            tight. The families at the school are the families at the park
            are the families at the block party. This overlap creates a
            community density that makes Armatage feel more cohesive than
            its size might suggest.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Armatage Real Estate & Housing">
        <Prose>
          <p>
            Armatage has traditionally been one of the more affordable entry
            points into Southwest Minneapolis, and while that affordability
            advantage has narrowed, it hasn&apos;t disappeared. The median
            home sale price has ranged between roughly $375,000 and $575,000
            depending on the data source and season — below{" "}
            <Link href="/neighborhoods/kenny" className="text-[#2a9d8f] hover:underline">
              Kenny
            </Link>{" "}
            and meaningfully below the lake-adjacent neighborhoods to the
            north. The citywide Minneapolis median sits around $350,000–$375,000,
            so Armatage trades at a modest premium — but less steep than most
            of its Southwest neighbors.
          </p>
          <p>
            Homes sell quickly here. The average time on market in 2025 was
            approximately 16 days. Competitive offers are common for
            well-maintained homes, especially in the family-friendly sweet
            spot.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($300,000–$400,000), you&apos;re looking at
              smaller bungalows or Cape Cods that need updating — original
              kitchens, smaller lots, single-car garages. The mid-range
              ($400,000–$550,000) gets you a well-maintained three-bedroom
              home with updates and a decent yard. Above $550,000, you&apos;re
              into larger renovated homes, four-bedroom properties, or the
              newer construction appearing as teardowns replace original
              stock.
            </p>
            <p>
              The housing mix is broader than in some Southwest neighborhoods.
              You&apos;ll find Craftsman bungalows, Tudor revivals, Cape Cods,
              ramblers, and postwar split-levels — reflecting the
              neighborhood&apos;s longer development timeline from the 1920s
              through the 1950s. Lots are generally generous. Most homes are
              owner-occupied, and the rental stock is minimal.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="Armatage is where you go when you want Southwest Minneapolis schools and parks but you don&apos;t have $600,000 for a house in Fulton. And honestly, the creek trail might be better than a lake." cite="Local real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Armatage">
        <Prose>
          <p>
            Armatage earns a Walk Score of 60 — functional for some errands
            but fundamentally a car-dependent neighborhood. The absence of a
            commercial district within the neighborhood&apos;s boundaries means
            that walking to a restaurant or a grocery store requires leaving
            Armatage. The nearest commercial nodes — 54th &amp; Penn, the
            France Avenue corridor, the 50th &amp; France district — are
            bikeable and sometimes walkable, but most residents drive for
            daily errands.
          </p>
          <p>
            Biking is strong. The Bike Score of 78 reflects the Minnehaha
            Creek trail, connections to the Grand Rounds, and the general
            cycling culture of Southwest Minneapolis. A bike dramatically
            expands what&apos;s accessible from Armatage — the lakes, the
            creek trail system, the commercial nodes in neighboring areas.
          </p>
          <p>
            For commuting, Armatage&apos;s position near the southwest corner
            of Minneapolis provides quick access to Highway 62 (the Crosstown)
            and I-35W, making drives to Bloomington, the airport, and downtown
            relatively straightforward at 15–20 minutes. Bus service exists
            along Penn Avenue and France Avenue but is limited enough that
            most residents rely on cars. The neighborhood is not transit-rich
            — it&apos;s car-convenient, which is a different thing.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Armatage is not a neighborhood in crisis. It&apos;s stable,
            well-maintained, and attractive to exactly the demographic it has
            always served. But stability doesn&apos;t mean stasis, and there
            are tensions worth naming.
          </p>
        </Prose>
        <ArticleSubsection title="The Teardown Wave">
          <Prose>
            <p>
              The dynamic reshaping Fulton and Kenny is arriving in Armatage:
              original bungalows on generous lots are being purchased,
              demolished, and replaced with larger, more expensive homes. The
              teardown-and-rebuild calculus works here because the lots are
              big and the original homes are modest. A 1,100-square-foot
              rambler on a 7,500-square-foot lot is an invitation to a
              developer with $700,000 in new construction in mind. Long-term
              residents watch the scale of their blocks change, and the
              feelings range from pragmatic to resentful.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Affordability Erosion">
          <Prose>
            <p>
              Armatage&apos;s historic role as the &quot;affordable Southwest&quot;
              entry point is under pressure. As teardowns replace original
              homes and renovation costs climb, the price floor is rising.
              Young families who ten years ago would have found a starter home
              in Armatage for $280,000 are now looking at $375,000 minimum —
              and competing with cash offers. The neighborhood&apos;s
              demographic homogeneity — largely white, largely homeowning,
              largely middle-to-upper-middle-class — is a product of these
              economics, and the trend is toward more exclusivity, not less.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Edge-of-City Question">
          <Prose>
            <p>
              Armatage&apos;s position at the very edge of Minneapolis creates
              a mild identity tension. The suburbs are right there — literally
              across the street in some cases. Some residents feel more
              connected to Edina&apos;s commercial life than to
              Minneapolis&apos;s civic identity. Others chose Armatage
              precisely because it&apos;s in Minneapolis — city parks, city
              schools, city services — and resist the gravitational pull of
              the suburbs. This tension is more philosophical than practical,
              but it shapes how residents think about their neighborhood and
              what they want it to become.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Creek Health">
          <Prose>
            <p>
              Minnehaha Creek is one of Armatage&apos;s best features, but
              it&apos;s also an environmental concern. Water quality issues,
              stormwater runoff, erosion, and the ongoing effects of upstream
              development affect the creek&apos;s health. The Minnehaha Creek
              Watershed District works on restoration and management, but the
              creek&apos;s condition varies year to year. Residents who love
              the creek also worry about it — and they should.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Armatage FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
