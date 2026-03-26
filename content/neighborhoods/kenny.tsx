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
    title: "Kenny, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Kenny, Minneapolis — homes, history, Kenny Park, schools, restaurants, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Kenny",
  deck: "One of the smallest neighborhoods in Southwest Minneapolis — where the yards are deep, the streets are quiet, and the biggest decision most evenings is whether to walk to Kenny Park or bike down to 50th & France.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Kenny?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Kenny" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Kenny, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,300", label: "Residents (Niche / US Census)" },
      { value: "$400K–$650K", label: "Median home sale price range (2025 data)" },
      { value: "18 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.5 sq mi", label: "Neighborhood area" },
      { value: "1920s–40s", label: "Era most homes were built" },
      { value: "15–20 min", label: "Drive to downtown or MSP airport" },
      { value: "65", label: "Walk Score" },
      { value: "80", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Kenny a good neighborhood in Minneapolis?",
      answer:
        "Yes. Kenny is a small, quiet, family-oriented neighborhood in Southwest Minneapolis with strong schools, good park access, and solid housing stock. It lacks the commercial buzz of neighboring Fulton or Linden Hills, but for residents who want stability and calm above all else, that's the point.",
    },
    {
      question: "Is Kenny, Minneapolis safe?",
      answer:
        "Kenny is one of the safer neighborhoods in Minneapolis. Violent crime is rare. As with most Southwest neighborhoods, property crime — vehicle break-ins and package theft — has ticked up in recent years, but the overall safety profile remains strong. Families with children are comfortable here.",
    },
    {
      question: "What is Kenny, Minneapolis known for?",
      answer:
        "Kenny is known for being small, quiet, and deeply residential. Kenny Park is the neighborhood anchor — a well-maintained park with a rec center, playground, ball fields, and a winter ice rink. The neighborhood is also known for its proximity to the 50th & France shopping district, even though that district technically sits across the border in Edina.",
    },
    {
      question: "How much do homes cost in Kenny, Minneapolis?",
      answer:
        "Median home sale prices in Kenny have ranged from roughly $400,000 to $650,000 depending on the season and data source. This makes Kenny slightly more affordable than neighboring Fulton, though still above the citywide median of approximately $350,000–$375,000. Smaller bungalows can sell in the $350,000–$400,000 range; larger renovated homes or new construction can exceed $700,000.",
    },
    {
      question: "Is Kenny walkable?",
      answer:
        "Moderately. Kenny earns a Walk Score of 65 and a Bike Score of 80. The 50th & Penn commercial node and the 50th & France district are both walkable from parts of the neighborhood, but Kenny is primarily residential and car-dependent for most errands beyond the immediate area. Biking infrastructure is strong, with connections to the Grand Rounds trail system.",
    },
    {
      question: "What schools serve Kenny, Minneapolis?",
      answer:
        "The standard public school pipeline runs through Kenny Elementary (K–5), Anthony Middle School, and Southwest Senior High School — an International Baccalaureate World School with strong academic and arts programs. Kenny Elementary is well-regarded and serves as a genuine community hub.",
    },
    {
      question: "What are the best restaurants near Kenny, Minneapolis?",
      answer:
        "Kenny itself has very few commercial establishments. The closest dining options are at 50th & Penn — including Pat's Tap, a popular neighborhood bar and restaurant — and 50th & France, which offers Red Cow, Turtle Bread Company, and a range of other restaurants. Residents also frequent the Linden Hills commercial node on 43rd Street.",
    },
    {
      question: "Where exactly is Kenny in Minneapolis?",
      answer:
        "Kenny is in Southwest Minneapolis, bounded by West 50th Street (north), Penn Avenue South (east), West 54th Street (south), and France Avenue South (west). It borders Fulton to the north, Lynnhurst to the northeast, Armatage to the south, and the suburb of Edina to the west.",
    },
    {
      question: "Is Kenny a good place to raise a family?",
      answer:
        "Kenny is widely considered one of the best family neighborhoods in Minneapolis. The school pipeline — Kenny Elementary through Southwest High School — is strong. Kenny Park provides a central gathering place with a playground, ball fields, and a rec center. The streets are quiet, the lots are generous, and the community is tight-knit.",
    },
    {
      question: "How is Kenny different from Fulton?",
      answer:
        "Kenny and Fulton share a border along 50th Street and have very similar housing stock, demographics, and character. The main differences: Kenny is smaller (about 2,300 residents vs. Fulton's 8,100), slightly more affordable, and lacks Fulton's direct access to Lake Harriet and Minnehaha Creek. Kenny feels even quieter and more purely residential than Fulton.",
    },
    {
      question: "How far is Kenny from downtown Minneapolis?",
      answer:
        "Kenny is approximately 15–20 minutes from downtown Minneapolis by car, depending on traffic. Bus routes along France Avenue and Penn Avenue connect to Uptown and downtown, though most residents drive for their commute. MSP International Airport is also roughly 15–20 minutes away via I-35W.",
    },
  ],
  nearby: [
    { name: "Fulton", slug: "fulton", description: "Lake Harriet access and the 50th Street commercial strips" },
    { name: "Armatage", slug: "armatage", description: "Family-friendly and more affordable, just south" },
    { name: "Lynnhurst", slug: "lynnhurst", description: "Quiet streets between Minnehaha Creek and Lake Harriet" },
    { name: "Linden Hills", slug: "linden-hills", description: "Boutique shopping and Lake Harriet's north shore" },
    { name: "Tangletown", slug: "tangletown", description: "Curving streets and strong community identity" },
    { name: "East Harriet", slug: "east-harriet", description: "Charming homes near Lyndale Avenue" },
  ],
  closing: {
    title: "What Makes Kenny Worth Knowing",
    paragraphs: [
      "Kenny doesn\u2019t announce itself. There\u2019s no marquee attraction, no destination restaurant, no lake with a bandshell. What there is, instead, is a neighborhood that has figured out how to be genuinely good at the ordinary things \u2014 good schools, good park, good neighbors, good trees, houses that were built to last and mostly have. The scale is small enough that you actually know the people on your block, and stable enough that they\u2019re still there five years later.",
      "It\u2019s the kind of place where the biggest controversy is what\u2019s happening to the lot on the corner, and the biggest joy is watching your kid walk to the same elementary school you can see from your front porch. Where the ice rink freezes over every winter and the same families show up every year, a little taller, a little older, but still here. That\u2019s not glamorous. But for the people who live here, it\u2019s enough \u2014 and then some.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There&apos;s a particular kind of quiet that settles over Kenny on a
          weekday afternoon in October. Not silence — you can hear a leaf
          blower somewhere, and a dog barking two blocks over, and the faint
          hum of traffic on Penn — but the specific quiet of a neighborhood
          where most people are at work or at school and the houses are just
          sitting there, solid and patient, doing what houses in Southwest
          Minneapolis have done for a hundred years: holding their ground.
          A kid on a bike rides past without looking up. Someone is raking.
          The light through the elms is gold and serious. Two blocks over,
          the rec center at Kenny Park is probably hosting something — a
          youth basketball clinic, a neighborhood association meeting, a
          birthday party in the shelter. This is Kenny at its most essential
          — not performing anything, not selling anything, just being a
          neighborhood in the plainest, best sense of the word.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/kenny/hero.webp"
        alt="Tree-lined residential street in the Kenny neighborhood of Minneapolis in autumn"
        caption="Kenny's tree-canopied streets in the fall"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Kenny, Minneapolis?">
        <Prose>
          <p>
            Kenny is a small residential neighborhood in Southwest Minneapolis,
            bounded by West 50th Street to the north, Penn Avenue South to the
            east, West 54th Street to the south, and France Avenue South to the
            west. It covers roughly half a square mile and is home to
            approximately 2,300 residents — making it one of the more compact
            neighborhoods in the city. It shares its northern border with{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            , its eastern edge with{" "}
            <Link href="/neighborhoods/lynnhurst" className="text-[#2a9d8f] hover:underline">
              Lynnhurst
            </Link>
            , and its southern boundary with{" "}
            <Link href="/neighborhoods/armatage" className="text-[#2a9d8f] hover:underline">
              Armatage
            </Link>
            . To the west, across France Avenue, lies Edina.
          </p>
          <p>
            If you&apos;ve heard of Kenny at all, it&apos;s probably because
            someone who lives here mentioned it quietly — Kenny doesn&apos;t
            advertise. It appears on few &quot;best of&quot; lists and shows up
            in no tourism guides. It is, in the most literal sense, a
            neighborhood for the people who live in it.
          </p>
          <p>
            Kenny doesn&apos;t have a lake. It doesn&apos;t have a creek running
            through it. It doesn&apos;t have a bandshell or a farmers market or
            a commercial district that draws visitors from across the metro. What
            it has is a park, a school, good bones, and the kind of residential
            character that makes people stay for decades. In a city full of
            neighborhoods competing for attention, Kenny is content to be the one
            that doesn&apos;t compete at all.
          </p>
          <p>
            The name comes from John Kenny, an Irish immigrant who farmed this
            land in the mid-1800s — and in some ways the neighborhood still
            carries that agricultural plainness in its DNA. There&apos;s nothing
            showy here. The houses are solid. The trees are mature. The lots
            are generous. The neighbors wave. It&apos;s a neighborhood that
            earns its reputation through consistency rather than spectacle, and
            for the families who choose it, that&apos;s precisely the point.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Kenny Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/kenny/neighborhood-sign.webp"
          alt="Kenny neighborhood sign in Minneapolis"
          caption="The Kenny neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Kenny History & Origins">
        <Prose>
          <p>
            Kenny takes its name from John Kenny, an Irish immigrant who farmed
            the land here in the mid-19th century. Before Kenny or any European
            settler arrived, this ground was Dakota homeland — part of the vast
            territory stretching across what is now southern Minnesota, centered
            around the sacred confluence at Bdote where the Mississippi and
            Minnesota Rivers meet. The Dakota people lived, hunted, and gathered
            across these prairies and woodlands for centuries before treaties and
            forced removal reshaped the landscape irrevocably in the 1850s and
            1860s. The ground underfoot has a longer memory than any of the
            houses sitting on it.
          </p>
          <p>
            European settlement in this part of what would become Minneapolis
            arrived in the 1850s and accelerated after the Civil War. John
            Kenny&apos;s farm was part of a patchwork of agricultural
            homesteads that defined the area before the city swallowed it —
            grain fields and pasture giving way, block by block, to platted
            lots and paved streets as Minneapolis expanded southwest from
            the river. The street railway&apos;s extension to Lake Harriet in
            the 1880s drew development toward the lakes first, and the
            neighborhoods closest to the water — Linden Hills, East Harriet,
            the northern part of what is now Fulton — filled in before the
            blocks further south.
          </p>
          <p>
            Kenny&apos;s development as a residential neighborhood came later
            than some of its Southwest Minneapolis neighbors. While areas closer
            to the lakes were being platted and built out in the 1910s and 1920s,
            Kenny&apos;s blocks filled in primarily through the 1920s, 1930s, and
            into the 1940s — a slightly longer build-out that left the
            neighborhood with a housing stock that&apos;s visually cohesive but
            spans a broader range of interwar styles. The Craftsman bungalow
            dominates, as it does across much of Southwest Minneapolis, but
            you&apos;ll also find Tudor revivals, Cape Cods, and the occasional
            American Foursquare. These were modest homes for modest budgets —
            built for the tradespeople, teachers, clerks, and young families
            of interwar Minneapolis who wanted a house with a yard and a
            sidewalk and a school nearby. The ambition wasn&apos;t grandeur.
            It was solidity. And a century later, that solidity is exactly
            what makes the neighborhood hold together.
          </p>
          <p>
            The neighborhood&apos;s anchor institution — Kenny Park — was
            established in the 1930s, and Kenny Elementary School has served the
            community since the early 20th century. Together, the park and the
            school gave the neighborhood a center of gravity that it still
            orbits today. Unlike Fulton, which orients itself around the lake
            and the commercial energy of 50th Street, Kenny&apos;s identity has
            always been more inward-facing — organized around the park, the
            school, and the blocks themselves.
          </p>
          <p>
            For most of the 20th century, Kenny was a working- and
            middle-class neighborhood — slightly less affluent than the lake-adjacent
            neighborhoods to the north, more affordable, and perhaps a touch less
            self-conscious about it. That relative affordability, combined with
            the same excellent park infrastructure and school access, made Kenny
            a quiet draw for young families who couldn&apos;t quite afford Fulton
            or Linden Hills but wanted the same Southwest Minneapolis package.
            That dynamic still holds, though the price gap has narrowed
            considerably.
          </p>
          <p>
            One historical footnote worth mentioning: the 50th &amp; France
            commercial district that Kenny residents now think of as &quot;their&quot;
            shopping area developed in the mid-20th century as a suburban-style
            retail center serving both sides of the Minneapolis-Edina border.
            Lunds &amp; Byerlys (originally Byerly&apos;s) opened there in 1968,
            and the district has been a regional draw ever since. The fact that
            it straddles a municipal boundary has always been part of its
            character — and part of the mild identity confusion that comes with
            living in a Minneapolis neighborhood whose commercial heart beats
            in Edina.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Kenny">
        <Prose>
          <p>
            If you drew a Venn diagram of Kenny and{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            , the overlap would be enormous. Same housing stock. Same
            demographics. Same lawn-care habits and block-party culture. Same
            general orientation toward family, stability, and quiet civic
            participation. The differences are ones of degree, not kind: Kenny
            is smaller, a little more affordable, a little further from the
            lake, and a little less connected to commercial life. Where Fulton
            has three commercial nodes along 50th Street, Kenny has the edges
            of two — 50th &amp; Penn to the northeast and 50th &amp; France to
            the northwest — but neither one is fully &quot;in&quot; Kenny in
            the way that Broders&apos; feels like it belongs to Fulton.
          </p>
          <p>
            The result is a neighborhood that feels even more purely residential
            than its already-residential neighbors. You can walk four or five
            blocks in any direction through Kenny and see nothing but houses,
            trees, sidewalks, and the occasional garage. This is the appeal.
            People who live in Kenny aren&apos;t here for the nightlife or the
            restaurant scene or the cultural calendar — they&apos;re here
            because they want a deep yard, a good school within walking
            distance, neighbors who look out for each other, and a level of
            quiet that&apos;s genuinely hard to find inside city limits.
          </p>
          <p>
            The neighborhood skews heavily toward families and long-term
            homeowners. Block clubs are active. The Kenny Neighborhood
            Association organizes events, coordinates with the city on planning
            issues, and maintains the kind of civic infrastructure that keeps
            a small neighborhood from feeling anonymous. There&apos;s a
            particular pride in Kenny&apos;s smallness — residents know they&apos;re
            not the headline neighborhood of Southwest Minneapolis, and they
            like it that way. The lack of a marquee attraction means the people
            who find Kenny tend to be the people who are specifically looking
            for what Kenny offers: peace, stability, and the feeling of being
            slightly off the beaten path while still being ten minutes from
            everything.
          </p>
          <p>
            There&apos;s a suburban quality to daily life in Kenny that some
            people love and others find suffocating — though the people who
            find it suffocating tend not to live here. The streets are wide
            and quiet. The yards are deep. Kids play outside unsupervised in a
            way that feels almost anachronistic. In the summer, someone is
            always grilling. In the winter, the ice rink at Kenny Park fills
            with kids in hockey skates after school. The rhythms are seasonal,
            predictable, and comforting in their repetition. If you want
            surprise and novelty, you live in Uptown. If you want to know
            exactly what your Tuesday evening looks like, you live in Kenny.
          </p>
          <p>
            The neighborhood&apos;s relationship with its borders is worth
            understanding. 50th Street to the north is the dividing line
            between Kenny and Fulton, and it&apos;s also where the commercial
            activity lives. Crossing 50th northbound puts you in Fulton&apos;s
            territory — Lake Harriet, the Bandshell, the farmers market.
            Crossing France Avenue westbound puts you in Edina — 50th &amp;
            France, Lunds &amp; Byerlys, the boutiques. Kenny sits in the
            quiet quadrant behind these more visible edges, and its character
            is defined as much by what it borders as by what it contains.
          </p>
        </Prose>
        <Quote
          text="It&apos;s not flashy, but it&apos;s home. Our kids walk to school, we walk to the park, we know everyone on our block. That&apos;s what we wanted."
          cite="Long-term Kenny resident"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Kenny Food, Drink & Local Spots">
        <Prose>
          <p>
            Let&apos;s be honest: Kenny is not a food destination. The
            neighborhood is almost entirely residential, and its dining options
            are borrowed from the commercial strips that line its borders. What
            Kenny residents actually do is walk or bike to the nodes at 50th
            &amp; Penn and 50th &amp; France — both of which are close enough
            to feel like extensions of the neighborhood, even if they&apos;re
            technically on the edge or across the line. This isn&apos;t a
            complaint — it&apos;s a description. Kenny residents have made
            peace with borrowing their dining scene from the neighbors, and
            the neighbors have good stuff.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/kenny/50th-france.webp"
          alt="The 50th and France commercial district at the border of Kenny and Edina"
          caption="50th & France — technically Edina, but Kenny's de facto shopping district"
        />

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Pat's Tap", tag: "Bar & Restaurant", price: "$$", url: "https://www.patstap.com", description: "5050 Penn Ave. S. A neighborhood bar that gets the balance right — craft beer, solid food, a patio that fills up in summer, and a vibe that's welcoming without trying too hard. The burger is excellent. The tap list rotates. This is where Kenny residents go when they want to eat out without making it an event." }} />
          <PlaceCardComponent place={{ name: "Red Cow", tag: "Burgers & Craft Beer", price: "$$", url: "https://redcowmn.com", description: "3624 W. 50th Street. Technically on the Fulton side of 50th, but Kenny residents claim it just as readily. Gourmet burgers, a deep craft beer and wine list, and a corner location that anchors the 50th & France end of the strip." }} />
          <PlaceCardComponent place={{ name: "Turtle Bread Company", tag: "Bakery & Café", price: "$", url: "https://www.turtlebread.com", description: "4762 Chicago Ave. S. (with a presence near 50th & France). A beloved Twin Cities bakery known for its artisan breads, pastries, and sandwiches. The kind of place where you go for a scone and end up staying for an hour." }} />
          <PlaceCardComponent place={{ name: "Lunds & Byerlys", tag: "Grocery", price: "$$", url: "https://www.lundsandbyerlys.com", description: "3945 W. 50th Street, at 50th & France. The neighborhood's primary grocery store — well-stocked, upscale, and the anchor of the 50th & France commercial district. The deli counter and bakery are destinations in their own right." }} />
          <PlaceCardComponent place={{ name: "50th & France District", tag: "Shopping & Dining", description: "The commercial heart that Kenny shares (somewhat awkwardly) with Edina. Boutiques, salons, restaurants, and Lunds & Byerlys clustered around the intersection. Kenny residents walk or bike here for everyday needs — it's their de facto downtown." }} />
          <PlaceCardComponent place={{ name: "50th & Penn Node", tag: "Local Commercial", description: "A smaller, scrappier commercial cluster at the neighborhood's northeast corner. More neighborhood-scaled than 50th & France — a handful of shops, restaurants, and services that serve the immediate area without any pretension." }} />
        </ArticleSubsection>

        <ArticleSubsection title="The 50th & France Question">
          <Prose>
            <p>
              It&apos;s worth addressing directly: 50th &amp; France is the
              commercial district that Kenny residents use most, but it&apos;s
              technically in Edina. The city line runs down France Avenue, and
              everything west of that line — Lunds &amp; Byerlys, the
              boutiques, the restaurants — belongs to a different municipality.
              Kenny residents have been shopping there for decades and think of
              it as their own, but they don&apos;t vote on Edina&apos;s zoning
              decisions or benefit from its tax base. This is one of those
              border quirks that shapes daily life more than outsiders might
              expect. When Kenny residents say &quot;let&apos;s go
              downtown,&quot; they often mean a fifteen-minute walk to a place
              that&apos;s in a different city.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Kenny residents also gravitate to the{" "}
              <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
                Linden Hills
              </Link>{" "}
              commercial node on 43rd Street for coffee, books at Wild Rumpus,
              and the kind of browsing that Southwest Minneapolis does well. The
              Fulton Farmers Market on Chowen Avenue, just across 50th Street,
              runs Saturdays from May through October and draws heavily from
              Kenny. The truth about living in Kenny is that you&apos;re never
              more than a short walk or bike ride from someone else&apos;s
              excellent commercial strip.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Kenny">
        <Prose>
          <p>
            Kenny doesn&apos;t have a lake — and if you&apos;re coming from
            Fulton or Linden Hills, that feels like a notable absence. But
            what Kenny does have is a genuinely excellent neighborhood park
            and easy access to the broader Minneapolis park system, which
            remains one of the best urban park systems in the country.
          </p>
        </Prose>
        <ArticleSubsection title="Kenny Park">
          <Prose>
            <p>
              Kenny Park is the neighborhood&apos;s anchor — a well-maintained
              park at the center of the neighborhood that functions as the
              community&apos;s living room. The park includes a recreation
              center, a playground, baseball and softball fields, basketball
              courts, open green space, and a winter ice rink that freezes over
              every year and draws kids from across the surrounding blocks. The
              rec center hosts youth programming, community meetings, and
              neighborhood events — everything from summer day camps to
              after-school activities to the occasional pancake breakfast. In
              the warmer months, the park fills with families after dinner;
              in the colder months, the ice rink becomes the social center.
              If Kenny has a town square, this is it. The park is the reason
              the neighborhood feels like a community rather than just a
              collection of houses.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/kenny/kenny-park.webp"
            alt="Kenny Park playground and green space in summer"
            caption="Kenny Park — the neighborhood's central gathering place"
          />
        </ArticleSubsection>
        <ArticleSubsection title="Lake Harriet & the Chain of Lakes">
          <Prose>
            <p>
              Lake Harriet is roughly a mile north of Kenny&apos;s border — a
              reasonable bike ride, a longer walk. The 3-mile loop around the
              lake, the Bandshell concerts, the beaches, the kayak rentals — all
              of it is accessible from Kenny without too much effort. Kenny
              residents don&apos;t have the walk-out-the-door lake access that
              Fulton and Linden Hills enjoy, but they&apos;re close enough to
              use the lake regularly. The broader Chain of Lakes trail system
              connects Lake Harriet to Bde Maka Ska and Lake of the Isles,
              forming an interconnected loop that&apos;s one of Minneapolis&apos;s
              greatest public assets.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Armatage Park">
          <Prose>
            <p>
              Just south of Kenny&apos;s border,{" "}
              <Link href="/neighborhoods/armatage" className="text-[#2a9d8f] hover:underline">
                Armatage Park
              </Link>{" "}
              offers another set of athletic fields, a wading pool, and
              additional programming. Between Kenny Park and Armatage Park,
              families in this part of Southwest Minneapolis have strong options
              without needing to drive anywhere.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Grand Rounds & Biking">
          <Prose>
            <p>
              Kenny connects to the Grand Rounds Scenic Byway — Minneapolis&apos;s
              51-mile network of parkways and bike paths — via Penn Avenue and
              France Avenue. The Bike Score of 80 reflects genuinely good cycling
              infrastructure: dedicated lanes, well-maintained paths, and
              connections to the lake trails and Minnehaha Creek corridor. For a
              neighborhood without its own marquee natural feature, Kenny
              punches above its weight in outdoor access simply by being
              well-connected to the network around it.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Kenny Schools">
        <Prose>
          <p>
            Schools are a major draw for families in Kenny — and the pipeline
            here is one of the strongest in Minneapolis.
          </p>
          <p>
            Kenny Elementary School serves kindergarten through fifth grade and
            functions as a genuine community institution. It&apos;s walkable
            from nearly every address in the neighborhood, and the school
            community overlaps heavily with the park and the neighborhood
            association. Kenny Elementary is well-regarded by families and
            earns strong marks from rating services.
          </p>
          <p>
            Middle school is Anthony Middle School (rated B by Niche), which
            serves several Southwest Minneapolis neighborhoods. Southwest
            Senior High School — an International Baccalaureate World School
            that earns an A-minus from Niche — is the high school destination.
            Southwest is known for its strong academics, performing arts
            program, and career and technical education offerings. The
            elementary-through-high-school pipeline is one of the things that
            keeps families rooted in Kenny for the long haul.
          </p>
          <p>
            The school question matters more in Kenny than in most Minneapolis
            neighborhoods because the school is so physically central to the
            community. Kenny Elementary isn&apos;t tucked away on the edge of
            the neighborhood — it&apos;s right there, visible from the park,
            walkable from everywhere. The morning drop-off and afternoon pickup
            are neighborhood rituals. Parents know each other from the
            playground and the PTA and the ice rink. The school and the park
            and the neighborhood association form a kind of triple helix of
            community life that makes Kenny feel unusually cohesive for its
            size.
          </p>
          <p>
            Families also have access to Minneapolis&apos;s broader magnet
            school system for alternative pathways, and private options in
            the surrounding area include Southwest Montessori and various
            faith-based schools.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/kenny/kenny-elementary.webp"
          alt="Kenny Elementary School building in Minneapolis"
          caption="Kenny Elementary — walkable from nearly every address in the neighborhood"
        />
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Kenny Real Estate & Housing">
        <Prose>
          <p>
            Kenny is more affordable than Fulton and Linden Hills — but
            &quot;more affordable&quot; in Southwest Minneapolis still means
            above the citywide median. The median home sale price in Kenny has
            ranged between roughly $400,000 and $650,000 depending on the data
            source and season. The citywide Minneapolis median sits around
            $350,000–$375,000, so Kenny trades at a modest premium — significant,
            but far less steep than the lake-adjacent neighborhoods to the north.
          </p>
          <p>
            Homes sell reasonably quickly here. The average time on market in
            2025 was approximately 18 days, slightly longer than Fulton&apos;s
            14-day average but well below the national average of 53 days.
            Competitive offers are common, especially for well-maintained homes
            in the sweet spot of the market.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end of the market ($350,000–$450,000), you&apos;re
              looking at smaller bungalows or Cape Cods that need updating —
              original kitchens, unfinished basements, single-car garages. The
              mid-range ($450,000–$600,000) gets you a well-maintained
              three-bedroom Craftsman or Tudor with updates. Above $600,000,
              you&apos;re into larger renovated homes, four-bedroom properties,
              or the newer construction that&apos;s starting to appear as
              teardowns replace the original housing stock.
            </p>
            <p>
              The dominant styles remain the interwar standards: Craftsman
              bungalows, Tudor revivals, Cape Cods, and the occasional
              Foursquare. Lots tend to be generous by city standards — deep
              backyards are common. Most homes are owner-occupied, and the
              rental stock is minimal, giving the neighborhood a settled,
              invested feel.
            </p>
            <p>
              One thing worth noting for buyers: Kenny&apos;s lots tend to be
              slightly larger than those in the denser neighborhoods closer to
              the lakes, which means the teardown-and-rebuild calculus is
              particularly attractive to developers. A 7,000-square-foot lot
              with a 1,200-square-foot bungalow on it is, to a builder, an
              invitation. This is reshaping the market in ways that benefit
              sellers and complicate the experience for everyone else. If
              you&apos;re shopping in Kenny, be prepared for the possibility
              that the charming bungalow next door might not be there in
              three years.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="Kenny is where people go when they want Southwest Minneapolis but can&apos;t quite swing Fulton or Linden Hills. And then they stay forever because it turns out Kenny was the right choice all along." cite="Local real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Kenny">
        <Prose>
          <p>
            Kenny earns a Walk Score of 65 — solidly walkable for neighborhood
            errands but not a place where you can go entirely car-free. The
            commercial nodes at 50th &amp; Penn and 50th &amp; France are
            walkable from the northern half of the neighborhood; from the
            southern blocks, you&apos;re more likely to bike or drive. The
            interior of Kenny is almost entirely residential, so there&apos;s
            not much to walk to within the neighborhood itself besides the park
            and the school.
          </p>
          <p>
            Biking is where Kenny shines. The Bike Score of 80 reflects strong
            infrastructure — dedicated lanes on Penn Avenue, connections to the
            Grand Rounds trail system, and the general culture of cycling that
            defines Southwest Minneapolis. A bike opens up the lake trails, the
            Minnehaha Creek corridor, and the commercial nodes in a way that
            walking alone doesn&apos;t quite manage.
          </p>
          <p>
            For getting beyond the neighborhood, the car remains dominant.
            Downtown Minneapolis is 15–20 minutes by car; MSP International
            Airport is similarly accessible via I-35W. Bus routes along France
            Avenue and Penn Avenue connect to Uptown and downtown, but
            frequency and coverage are limited enough that most residents
            drive for their commute. Parking is easy — residential streets
            are uncrowded, and the commercial nodes have adequate surface
            parking.
          </p>
          <p>
            One practical note: Kenny&apos;s position in the southwest corner
            of Minneapolis means that access to I-35W and Highway 62 (the
            Crosstown) is straightforward, making commutes to the southern
            suburbs, Bloomington, and the airport relatively painless. For
            anyone working in Edina or the western suburbs, the commute from
            Kenny is even shorter. The neighborhood&apos;s geography is quietly
            convenient — not transit-rich in the way that Uptown or Northeast
            can claim, but well-positioned for the car-based commuting that
            most Southwest Minneapolis residents actually do.
          </p>
        </Prose>
        <ImageSlot
          src="/images/neighborhoods/kenny/streetscape.webp"
          alt="Quiet residential street in Kenny with mature trees and bungalow homes"
          caption="Kenny's residential streets — quiet, shaded, and built for staying put"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Kenny is not a neighborhood in crisis. It&apos;s not even a
            neighborhood in transition, exactly. But it has the same set of
            low-grade tensions that run through all of Southwest Minneapolis —
            tensions that are worth naming honestly.
          </p>
        </Prose>
        <ArticleSubsection title="The Teardown Question">
          <Prose>
            <p>
              As land values rise across Southwest Minneapolis, the same dynamic
              playing out in Fulton and Linden Hills is arriving in Kenny: older
              bungalows on generous lots are being purchased, demolished, and
              replaced with larger, more expensive homes. The new construction
              tends to maximize square footage — two stories where there was one,
              a roofline that towers over the neighbors, a price point that
              pushes the block&apos;s comps upward. Long-term residents watch
              the Craftsman streetscape they bought into change house by house,
              and the feelings about it range from resigned to angry. The market
              is doing what markets do. Whether the neighborhood is better for
              it is a different question.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Affordability Is Relative">
          <Prose>
            <p>
              Kenny has traditionally been the &quot;affordable&quot; option in
              Southwest Minneapolis — the entry-level neighborhood for families
              who wanted the schools and the parks without the lake premium.
              That gap is narrowing. As teardowns replace bungalows and
              renovation costs climb, Kenny&apos;s price floor is rising. The
              neighborhood that was once accessible to teachers and city
              workers is becoming less so, and the demographic implications of
              that shift are real. Kenny, like most of Southwest Minneapolis,
              is largely white, largely homeowning, and largely upper-middle-class.
              That homogeneity isn&apos;t an accident — it&apos;s a product of
              housing costs, historical patterns, and the self-reinforcing
              dynamics of desirable school districts.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The 50th & France Identity Problem">
          <Prose>
            <p>
              Here&apos;s the awkward truth: the commercial district that Kenny
              residents rely on most — 50th &amp; France — is technically in
              Edina. The city line runs right down France Avenue, and the shops,
              restaurants, and grocery store that feel like Kenny&apos;s downtown
              are actually in a different municipality with different taxes,
              different governance, and different priorities. Kenny residents
              spend their money there, walk their dogs there, meet their
              friends for dinner there — but they don&apos;t vote there. It&apos;s
              a minor existential oddity that most residents have made peace
              with, but it means Kenny lacks a true commercial center of its
              own. The neighborhood&apos;s identity is almost entirely
              residential, for better and worse.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Property Taxes">
          <Prose>
            <p>
              Rising home values mean rising property tax assessments, and
              long-term Kenny homeowners — particularly retirees and those on
              fixed incomes — feel the squeeze. This is a tension shared across
              Southwest Minneapolis: the very desirability that makes the
              neighborhood pleasant to live in also makes it increasingly
              expensive to stay. Some long-term residents are being priced out
              not by the housing market but by the tax bill. When a teardown
              next door sells for $700,000, the assessor takes note — and
              your taxes go up whether you asked for it or not.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Property Crime">
          <Prose>
            <p>
              Like most of Southwest Minneapolis, Kenny has seen a modest uptick
              in property crime in recent years — vehicle break-ins, catalytic
              converter thefts, the occasional package taken from a porch.
              Violent crime remains rare. Kenny is a safe neighborhood by any
              reasonable standard, but it&apos;s not insulated from the
              property-crime patterns that affect much of Minneapolis. Long-term
              residents note that things have changed since 2020, and while the
              shift is more about perception than statistics in most cases, the
              perception matters. People lock their cars now. They didn&apos;t
              always.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Kenny FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
