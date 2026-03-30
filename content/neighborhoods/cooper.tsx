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
    title: "Cooper, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Cooper, Minneapolis — between Longfellow and Hiawatha, diverse, affordable, Brackett Park, restaurants, schools, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Cooper",
  deck: "Tucked between Longfellow and Hiawatha, Cooper is one of those Minneapolis neighborhoods that most people drive through without knowing they're in it — a small, diverse, genuinely affordable patch of south Minneapolis where Brackett Park anchors the community and the Blue Line puts downtown fifteen minutes away.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Cooper?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Cooper" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "The Hard Stuff" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Cooper, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,800", label: "Residents (Niche / US Census)" },
      { value: "$270K–$380K", label: "Median home sale price range (2025 data)" },
      { value: "22 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.4 sq mi", label: "Neighborhood area" },
      { value: "1900s–30s", label: "Era most homes were built" },
      { value: "10–15 min", label: "Drive to downtown (or Blue Line)" },
      { value: "72", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Cooper a good neighborhood in Minneapolis?",
      answer:
        "Cooper is a solid, unpretentious neighborhood that works well for people who value affordability, diversity, transit access, and a strong park system over polish and prestige. It's not the neighborhood you move to for the restaurants or the nightlife — it's the neighborhood you move to because you can afford a house with a yard, the park is a block away, and the light rail gets you downtown in fifteen minutes.",
    },
    {
      question: "Is Cooper, Minneapolis safe?",
      answer:
        "Cooper's safety profile is mixed and depends heavily on which block you're on. The neighborhood has higher property crime rates than Southwest Minneapolis neighborhoods but is comparable to other Longfellow-area neighborhoods. Violent crime exists but is concentrated rather than pervasive. Residents describe it as a neighborhood where you lock your car and know your neighbors — common-sense urban living rather than the kind of place where safety dominates every conversation.",
    },
    {
      question: "What is Cooper, Minneapolis known for?",
      answer:
        "Cooper is known for Brackett Park (a well-used neighborhood park with a rec center and pool), its proximity to the Blue Line light rail, its relative affordability compared to neighborhoods to the west, and its diversity. It's not a destination neighborhood — it's a neighborhood for the people who live in it.",
    },
    {
      question: "How much do homes cost in Cooper?",
      answer:
        "Median home sale prices in Cooper range from roughly $270,000 to $380,000 — well below the citywide median in some cases and roughly at par in others. This makes Cooper one of the more affordable neighborhoods in south Minneapolis, particularly for buyers who want a single-family home. Smaller bungalows can be found under $250,000; larger or renovated homes reach toward $400,000.",
    },
    {
      question: "Is Cooper walkable?",
      answer:
        "Yes, reasonably. Cooper earns a Walk Score of 72 and a Bike Score of 85. The neighborhood has good access to the commercial strips along East Lake Street (to the north) and Minnehaha Avenue. The Blue Line light rail stations at 38th Street and 46th Street are within walking distance. Daily errands are manageable on foot; a bike opens up the rest of south Minneapolis efficiently.",
    },
    {
      question: "What schools serve Cooper?",
      answer:
        "Cooper is served by several Minneapolis Public Schools depending on exact address. Hiawatha Community School and Howe Elementary are the most common elementary options. South High School is the neighborhood high school — a large, diverse school with a wide range of academic and extracurricular programs. Families also access Minneapolis's magnet school system for alternative pathways.",
    },
    {
      question: "Where exactly is Cooper in Minneapolis?",
      answer:
        "Cooper is in south Minneapolis, bounded roughly by East 32nd Street to the north, Hiawatha Avenue (Highway 55) to the east, East 38th Street to the south, and Cedar Avenue to the west. It sits between the Longfellow neighborhood to the west, Hiawatha to the east, and Standish to the south. The Blue Line light rail runs along Hiawatha Avenue on the neighborhood's eastern edge.",
    },
    {
      question: "How is Cooper different from Longfellow?",
      answer:
        "Cooper and Longfellow are adjacent and share many characteristics — similar housing stock, similar price points, similar demographics. The main differences: Cooper is smaller and less well-known, with less commercial activity along its borders. Longfellow has the Minnehaha Falls anchor and a stronger neighborhood identity. Cooper is slightly more affordable and more transit-oriented due to its direct adjacency to the Blue Line.",
    },
    {
      question: "Does Cooper have good public transit?",
      answer:
        "Yes — better than most south Minneapolis neighborhoods. The Blue Line light rail runs along Hiawatha Avenue on Cooper's eastern border, with stations at 38th Street and 46th Street providing direct service to downtown Minneapolis (15 minutes), the airport, and the Mall of America. Bus routes along Lake Street and Cedar Avenue supplement the rail service.",
    },
  ],
  nearby: [
    { name: "Longfellow", slug: "longfellow", description: "Minnehaha Falls and a stronger commercial identity" },
    { name: "Hiawatha", slug: "hiawatha", description: "Blue Line corridor and Lake Hiawatha" },
    { name: "Standish", slug: "standish", description: "38th Street corridor and residential south Minneapolis" },
    { name: "Corcoran", slug: "corcoran", description: "Diverse, affordable, and anchored by Corcoran Park" },
    { name: "Minnehaha", slug: "minnehaha", description: "The falls, the parkway, and the creek" },
    { name: "Bancroft", slug: "bancroft", description: "Quiet residential between Bloomington and Cedar" },
  ],
  closing: {
    title: "What Makes Cooper Worth Knowing",
    paragraphs: [
      "Cooper doesn't try to impress you. It doesn't have a marquee attraction or a commercial strip that draws visitors from across the metro or a historical landmark that shows up on postcards. What it has is something harder to manufacture and easier to overlook: a neighborhood where people of different backgrounds actually live next to each other, where a house with a yard is still achievable on a working-class income, where the light rail takes you downtown in fifteen minutes and the park pool is free and the block club still meets.",
      "In a city where affordability and authenticity are increasingly at odds — where the neighborhoods with character are pricing out the people who gave them that character — Cooper remains a place where the math still works. It's not perfect. The crime numbers are higher than Southwest Minneapolis, and the commercial options are thinner than you'd find in Uptown or Northeast. But for people who want an honest, functional, diverse urban neighborhood without the premium, Cooper is the kind of place that rewards closer attention.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There&apos;s a late afternoon in July when Brackett Park hits its
          stride — the pool is full, the basketball courts are running, the
          playground has that specific energy of kids who&apos;ve been outside
          all day and aren&apos;t done yet. A couple of teenagers are playing
          music from a phone on the bleachers. Someone&apos;s grilling in the
          picnic area, and the smoke drifts across the ball field in a way
          that makes the whole park smell like summer. The rec center door
          keeps swinging open and shut. A woman is doing laps on the path
          that loops the park. The light rail slides by on Hiawatha a few
          blocks east, quiet enough that you only notice it if you&apos;re
          looking. This is Cooper at its most characteristic — unglamorous,
          functional, alive with the kind of everyday activity that
          neighborhood guides usually dress up with adjectives it doesn&apos;t
          need. The park works. The neighborhood works. That&apos;s the
          story.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/cooper/hero.webp"
        alt="Brackett Park in Cooper neighborhood on a summer afternoon"
        caption="Brackett Park — Cooper's living room, rec center, and social anchor"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Cooper, Minneapolis?">
        <Prose>
          <p>
            Cooper is a small residential neighborhood in south Minneapolis,
            bounded roughly by East 32nd Street to the north, Hiawatha Avenue
            (Highway 55) to the east, East 38th Street to the south, and Cedar
            Avenue to the west. It covers about 0.4 square miles and is home to
            approximately 3,800 residents. To the west lies{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>
            . To the east, across Hiawatha Avenue,{" "}
            <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
              Hiawatha
            </Link>
            . To the south,{" "}
            <Link href="/neighborhoods/standish" className="text-[#2a9d8f] hover:underline">
              Standish
            </Link>
            .
          </p>
          <p>
            If you&apos;ve lived in Minneapolis for years and have never heard
            of Cooper, you&apos;re not alone. It&apos;s one of those
            neighborhoods that exists more as a lived reality than as a brand —
            a residential area that its residents know and use and appreciate
            without needing outsiders to validate it. There&apos;s no Cooper
            hashtag. There&apos;s no Cooper tote bag. There is, however, a
            neighborhood where a family can buy a solid early-20th-century
            house for under $350,000, walk to a park with a pool and a rec
            center, and take the light rail downtown in fifteen minutes. In
            2026, that combination is rarer than it should be.
          </p>
          <p>
            The neighborhood takes its name from Dr. A.N. Cooper, a
            19th-century Minneapolis physician, though the connection between
            the doctor and the neighborhood is largely nominal — Cooper the
            place is defined by what it became in the 20th century rather
            than by its namesake. What it became is a working-class
            residential neighborhood with a solid park, decent transit access,
            genuine racial and economic diversity, and the kind of no-nonsense
            character that comes from being a place where people live their
            actual lives rather than curate their aesthetic ones.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Cooper Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/cooper/neighborhood-sign.webp"
          alt="Cooper neighborhood sign in Minneapolis"
          caption="The Cooper neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Cooper History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part of
            the vast territory centered around Bdote, the sacred confluence of
            the Mississippi and Minnesota Rivers. The Dakota people lived across
            these prairies and along these waterways for centuries before
            treaties and forced removal in the 1850s and 1860s reshaped the
            landscape. The land remembers longer than the houses.
          </p>
          <p>
            European settlement in this part of Minneapolis began in earnest
            after the Civil War, and the area that would become Cooper was
            initially farmland — flat, fertile, and gradually consumed by the
            city&apos;s southward expansion. The street railway&apos;s
            extension along Minnehaha Avenue and later along Hiawatha brought
            development to the area in the late 19th and early 20th centuries,
            making it feasible for workers to live here and commute to the
            mills, factories, and commercial establishments closer to downtown.
          </p>
          <p>
            Cooper&apos;s residential build-out happened primarily between
            1900 and the 1930s — a period that left the neighborhood with the
            housing stock that still defines it. The dominant styles are modest:
            Craftsman bungalows, simple Colonial revivals, and the kind of
            no-frills two-story frame houses that were built by the thousands
            across south Minneapolis for working-class families. These were not
            architect-designed showpieces. They were builder-grade homes for
            people who worked with their hands — the railroad workers, machinists,
            mill employees, and tradespeople who built Minneapolis&apos;s
            industrial economy. The houses reflect that pragmatism: solid
            construction, reasonable layouts, deep lots, and not much ornament.
          </p>
          <p>
            The opening of Brackett Park in the early 20th century gave the
            neighborhood a center of gravity. Named after George Brackett, a
            Minneapolis alderman and civic figure, the park became the
            community&apos;s gathering place — a role it still fills today.
            The addition of a recreation center, pool, and athletic facilities
            over the decades made Brackett Park not just a green space but a
            genuine civic institution.
          </p>
          <p>
            Through the mid-20th century, Cooper was a stable, working-class
            neighborhood — predominantly white, predominantly blue-collar,
            rooted in the modest prosperity of postwar Minneapolis. The
            construction of Hiawatha Avenue (Highway 55) as a high-speed
            arterial in the mid-20th century changed the neighborhood&apos;s
            eastern edge significantly, creating a traffic barrier that
            partially isolated Cooper from the neighborhoods to the east. The
            highway brought noise and speed to what had been a quiet
            residential street, and the eastern blocks of Cooper still bear
            the marks of that transformation.
          </p>
          <p>
            Beginning in the 1980s and accelerating through the 2000s, Cooper
            became more racially and ethnically diverse — part of the broader
            demographic shift across south Minneapolis&apos;s Longfellow
            corridor. Hmong, Latino, East African, and Native American families
            moved into the neighborhood, joining the existing working-class
            white population and creating the genuinely diverse community that
            defines Cooper today. The 2004 opening of the Blue Line light rail
            along Hiawatha Avenue added transit access that gave the
            neighborhood a new asset — direct, fast service to downtown
            Minneapolis and the airport.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Cooper">
        <Prose>
          <p>
            Living in Cooper means recalibrating your expectations — not
            downward, exactly, but sideways. If you&apos;re coming from
            Southwest Minneapolis, the lawns are a little scruffier, the
            houses a little smaller, the commercial options a little thinner.
            If you&apos;re coming from Phillips or Central, Cooper feels
            remarkably calm — tree-lined streets, single-family homes with
            deep lots, a park that actually works. Cooper sits in the middle
            of Minneapolis&apos;s residential spectrum, and where you place
            it on the scale depends entirely on where you&apos;re coming from.
          </p>
          <p>
            The diversity here is genuine in a way that some Minneapolis
            neighborhoods only aspire to. On a given block, you might have
            a Hmong family, a Latino family, a young white couple who moved
            from Uptown for the affordability, and a longtime retiree who&apos;s
            been in the same house since 1975. The diversity isn&apos;t
            curated or performance — it&apos;s a product of price points that
            are accessible to a wider range of people than most Minneapolis
            neighborhoods allow. The cultural markers are visible: the small
            grocery stores carrying ingredients you won&apos;t find at Target,
            the churches with services in multiple languages, the block party
            where the potluck table represents four continents.
          </p>
          <p>
            Brackett Park is the neighborhood&apos;s social anchor. The pool
            is a genuine community resource — free admission in summer, well-
            maintained, and full of kids from every background the neighborhood
            contains. The rec center runs programming year-round: youth sports,
            after-school care, community meetings, fitness classes. In a
            neighborhood without a commercial center or a marquee attraction,
            the park is where community happens. If you live in Cooper and
            don&apos;t know Brackett Park, you&apos;re not really living in
            Cooper.
          </p>
          <p>
            The neighborhood is quiet in the residential interior and noisier
            at the edges — Hiawatha Avenue to the east carries significant
            traffic, and the light rail adds a low hum that residents learn to
            tune out. Lake Street to the north (a short walk from Cooper&apos;s
            border) is busy and commercial, with all the energy and occasional
            friction that Lake Street brings across south Minneapolis. The
            contrast between the calm residential blocks and the active
            arterials that bound them is one of Cooper&apos;s defining
            characteristics.
          </p>
          <p>
            There&apos;s a practicality to life in Cooper that feels refreshing
            after spending time in neighborhoods that take themselves more
            seriously. People are here because the house was affordable and the
            park is good and the light rail is convenient — not because Cooper
            appeared on a listicle of up-and-coming neighborhoods. There&apos;s
            no neighborhood branding exercise, no artisan cocktail bar trying
            to signal arrival. Cooper is a place where people live, and
            it&apos;s comfortable being just that.
          </p>
        </Prose>
        <Quote
          text="We looked at twenty houses in four neighborhoods. Cooper was the one where we could afford three bedrooms, a yard, and a walk to the train. That&apos;s not romantic, but it&apos;s real."
          cite="Cooper homeowner, moved in 2022"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Cooper Food, Drink & Local Spots">
        <Prose>
          <p>
            Cooper&apos;s dining scene is honest about what it is: a
            neighborhood where the best food is often found in unassuming
            storefronts and where the commercial options cluster at the edges
            rather than the center. The interior of Cooper is residential.
            Period. But the arterials that bound the neighborhood — Lake Street
            to the north, Minnehaha Avenue to the west, Hiawatha to the east —
            have the kind of real, functional, often immigrant-owned food
            businesses that food critics are starting to notice but that
            neighborhood residents have known about for years.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Minnehaha Avenue Eateries", tag: "Various", price: "$–$$", description: "Minnehaha Avenue along Cooper's western edge hosts a rotating cast of small restaurants and food businesses — taquerias, Vietnamese pho shops, Ethiopian spots. The specifics change; the quality and value remain consistent." }} />
          <PlaceCardComponent place={{ name: "Lake Street Corridor", tag: "Various", price: "$–$$", description: "A short walk north of Cooper, Lake Street is one of the most diverse commercial corridors in Minneapolis. Somali restaurants, Mexican bakeries, Asian grocery stores, and everything in between. This isn't curated dining — it's the real food economy of a diverse city." }} />
          <PlaceCardComponent place={{ name: "Hi-Lo Diner", tag: "Diner", price: "$$", url: "https://www.hi-lo-diner.com", description: "4020 E. Lake Street. A retro diner in a converted 1957 Fodero dining car, serving elevated diner food — biscuits and gravy, smoked meat, seasonal specials. The cocktails are better than a diner has any right to serve. Just north of Cooper's border." }} />
          <PlaceCardComponent place={{ name: "Sonora Grill", tag: "Mexican", price: "$", url: "https://www.sonoragrill.com", description: "3300 E. Lake Street. A longtime Lake Street staple serving generous portions of Mexican food at prices that make Southwest Minneapolis look like Manhattan. The carnitas are the move." }} />
          <PlaceCardComponent place={{ name: "Du Nord Craft Spirits", tag: "Distillery & Cocktail Room", price: "$$", url: "https://www.dunordcraftspirits.com", description: "2610 E. 32nd Street. A Black-owned distillery in the Longfellow area that's become a destination for craft cocktails. Not in Cooper proper, but close enough that residents claim it. The social enterprise model — affordable spirits, community investment — reflects the neighborhood's values." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Grocery & Daily Needs">
          <Prose>
            <p>
              Cooper doesn&apos;t have a full-service grocery store within its
              borders. Residents shop at the Cub Foods on Lake Street and
              Minnehaha, the various small grocery stores along Lake Street
              (many specializing in East African, Asian, or Latin American
              ingredients), or make the drive to a larger store. This is one
              of the practical realities of living in a small, purely
              residential neighborhood — your daily needs are met by the
              commercial strips at the edges rather than by anything within
              walking distance of every address.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Cooper">
        <Prose>
          <p>
            Cooper&apos;s park access is anchored by Brackett Park and
            supplemented by strong connections to the broader south Minneapolis
            trail and park network.
          </p>
        </Prose>
        <ArticleSubsection title="Brackett Park">
          <Prose>
            <p>
              Brackett Park is the heart of the neighborhood — a 6.5-acre park
              that packs a lot into a compact space. The park includes a
              recreation center, an outdoor swimming pool (one of the
              Minneapolis Park Board&apos;s free community pools), a playground,
              basketball courts, ball fields, and open green space. The rec
              center runs youth and adult programming year-round — sports
              leagues, after-school care, community events, fitness classes.
              In summer, the pool is the neighborhood&apos;s living room, full
              of kids and families from every part of the community. In winter,
              the rec center takes over as the gathering place. Brackett Park
              doesn&apos;t have the scenery of Lake Harriet or the historical
              significance of Minnehaha Falls, but it does the most important
              thing a neighborhood park can do: it brings people together.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Minnehaha Creek & Falls">
          <Prose>
            <p>
              Minnehaha Falls and the creek corridor are a short bike ride
              north of Cooper — close enough to be part of daily life for
              many residents. The falls themselves are Minneapolis&apos;s
              most visited natural attraction, and the surrounding parkland
              offers trails, picnic areas, and connections to the Mississippi
              River gorge. Minnehaha Creek runs through the neighborhoods
              just north of Cooper, providing green-space access and a
              trail corridor that connects west toward the Chain of Lakes.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway — a 5.5-mile bike and pedestrian trail
              built in a former rail corridor — runs through the area just
              north of Cooper. It&apos;s one of the best urban bike trails
              in the country, providing a grade-separated route from the
              Chain of Lakes to the Mississippi River. For Cooper residents
              who bike, the Greenway is a direct, car-free commuting
              corridor to Uptown, the lakes, and downtown.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Cooper Schools">
        <Prose>
          <p>
            Cooper&apos;s school landscape reflects the broader complexity of
            Minneapolis Public Schools — a system with genuine strengths and
            real challenges, depending on which school and which metric you
            prioritize.
          </p>
          <p>
            Elementary school options for Cooper residents include Hiawatha
            Community School and Howe Elementary, depending on exact address.
            Both are neighborhood schools with diverse student bodies and the
            kind of dedicated staff that works hard in a system that doesn&apos;t
            always make it easy. Test scores at these schools tend to be lower
            than Southwest Minneapolis averages — a reflection of the
            socioeconomic diversity of the student body rather than the quality
            of instruction.
          </p>
          <p>
            South High School is the neighborhood high school — a large,
            diverse school with a wide range of academic and extracurricular
            programs. South has historically been one of Minneapolis&apos;s
            most diverse high schools, with a student body that reflects the
            racial, ethnic, and economic diversity of south Minneapolis. The
            school has strong programs in arts and career-technical education,
            and its graduates reflect the full spectrum of post-secondary
            pathways.
          </p>
          <p>
            Families in Cooper also access Minneapolis&apos;s magnet school
            system — citywide schools with specialized programs in areas like
            STEM, arts, and language immersion. The magnet system allows
            families to choose schools outside their neighborhood boundary,
            and many Cooper families take advantage of this. Private and
            charter school options are also available in the surrounding area.
          </p>
          <p>
            The school question in Cooper is honest: the neighborhood schools
            serve a diverse community with varying needs, and outcomes vary.
            Families who are deeply invested in test scores and school ratings
            may look elsewhere; families who value diversity, community
            connection, and the experience of learning alongside classmates
            from different backgrounds find real value here.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Cooper Real Estate & Housing">
        <Prose>
          <p>
            Cooper is one of the more affordable neighborhoods in south
            Minneapolis for buyers seeking a single-family home. Median sale
            prices range from roughly $270,000 to $380,000 — at or below the
            citywide median of $350,000–$375,000. For context, this is roughly
            half of what a comparable home costs in{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>{" "}
            or Linden Hills. The affordability is Cooper&apos;s most
            significant competitive advantage, and the reason it attracts
            first-time buyers who are priced out of Southwest Minneapolis.
          </p>
          <p>
            Homes in Cooper sell at a moderate pace — approximately 22 days
            on market in 2025, slightly longer than the citywide average and
            significantly longer than the fast-moving Southwest neighborhoods.
            This is a buyer&apos;s-market neighborhood more often than a
            seller&apos;s-market neighborhood, which means more negotiating
            room and less of the bidding-war anxiety that defines the lakeside
            neighborhoods.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($220,000–$300,000), you&apos;re looking at
              small bungalows and Cape Cods with original features — narrow
              kitchens, one bathroom, maybe a partially finished basement.
              These homes need work, but they&apos;re solid structures on
              reasonable lots, and the work is often cosmetic rather than
              structural. The mid-range ($300,000–$380,000) gets you a
              three-bedroom bungalow or two-story with some updates — a
              remodeled kitchen, replacement windows, maybe a deck. Above
              $380,000, you&apos;re into the larger or extensively renovated
              homes, or the occasional new-construction infill.
            </p>
            <p>
              The housing stock is predominantly early 20th century — Craftsman
              bungalows and simple two-story frame houses built between 1900
              and 1930. The lots are generous by city standards, with deep
              backyards that are one of Cooper&apos;s underrated assets. Most
              homes are modestly sized (1,000–1,500 square feet) but with the
              kind of honest construction — real plaster walls, hardwood
              floors, solid foundations — that modern construction rarely
              matches. The aesthetic is humble but durable.
            </p>
            <p>
              Buyers should be aware that some homes on the eastern edge of
              the neighborhood, close to Hiawatha Avenue, experience
              significant traffic noise. The blocks closest to Hiawatha are
              noticeably noisier than the interior blocks, and this is
              reflected in pricing. The quietest blocks are in the center of
              the neighborhood, near Brackett Park — where you get the park
              access and the calm without the highway hum.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="Cooper is where you go when you want to own a house in Minneapolis without borrowing half a million dollars. It&apos;s not sexy, but the roof doesn&apos;t leak and the mortgage is manageable. That counts for a lot." cite="Cooper buyer's agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Cooper">
        <Prose>
          <p>
            Cooper&apos;s transit access is, frankly, one of its best features —
            and the one that most clearly distinguishes it from the car-dependent
            neighborhoods of Southwest Minneapolis. The Blue Line light rail
            runs along Hiawatha Avenue on the neighborhood&apos;s eastern border,
            with stations at 38th Street and 46th Street. From the 38th Street
            station, downtown Minneapolis is approximately 15 minutes away.
            MSP International Airport is about 12 minutes south. The Mall of
            America in Bloomington is at the end of the line. For a
            neighborhood in this price range, that level of transit access is
            exceptional.
          </p>
          <p>
            Walk Score is 72 — solidly walkable for a neighborhood with limited
            interior commercial activity. The commercial strips along Lake
            Street and Minnehaha Avenue are within walking distance from most
            of the neighborhood, and Brackett Park is walkable from every
            address. The Bike Score of 85 reflects strong cycling
            infrastructure — connections to the Midtown Greenway, the
            Minnehaha Creek trail, and the broader Minneapolis bike network.
          </p>
          <p>
            For car-based commuting, Cooper benefits from its proximity to
            Hiawatha Avenue (Highway 55) and I-35W, both of which provide
            relatively quick routes to downtown, the southern suburbs, and the
            airport. The central south Minneapolis location means that most
            destinations in the metro are reachable in 20–25 minutes.
          </p>
          <p>
            The practical reality: most Cooper residents own a car, but many
            use the light rail regularly — for commuting, for trips to the
            airport, for evenings out downtown. The ability to leave the car
            at home for some trips is a genuine quality-of-life advantage that
            neighborhoods to the west, despite their higher prices, cannot
            match.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="The Hard Stuff">
        <Prose>
          <p>
            Cooper has real challenges, and pretending otherwise would be
            dishonest. The neighborhood&apos;s affordability and diversity are
            genuine strengths, but they exist alongside issues that deserve
            direct acknowledgment.
          </p>
        </Prose>
        <ArticleSubsection title="Crime">
          <Prose>
            <p>
              Cooper&apos;s crime rate is higher than Southwest Minneapolis
              neighborhoods — meaningfully so for property crime and modestly
              so for violent crime. Vehicle break-ins, catalytic converter
              thefts, and porch package thefts are common enough that most
              residents take precautions as a matter of routine. Violent crime
              is concentrated rather than pervasive — certain blocks and
              intersections see more activity than others, and the interior
              residential blocks are generally calm. But the proximity to
              high-traffic corridors (Lake Street, Hiawatha Avenue) means that
              Cooper isn&apos;t insulated from the street-level crime that
              affects these corridors. Residents who move here from quieter
              neighborhoods adjust their habits; most find the reality less
              alarming than the statistics suggest, but the statistics are
              not imaginary.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Disinvestment & Upkeep">
          <Prose>
            <p>
              Some blocks in Cooper show signs of deferred maintenance —
              neglected properties, vacant lots, the occasional house that&apos;s
              clearly struggling. This is a product of affordability working in
              both directions: the same low price point that makes Cooper
              accessible to first-time buyers also means that some property
              owners lack the resources for significant upkeep. The
              neighborhood doesn&apos;t have the aggressive property-value
              dynamics that keep Southwest Minneapolis streets looking
              magazine-ready, and the variation in maintenance is visible
              block by block. Most blocks are well-kept; a few are not.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Hiawatha Avenue">
          <Prose>
            <p>
              Hiawatha Avenue (Highway 55) is Cooper&apos;s eastern border,
              and it functions as a barrier — a high-speed, high-volume arterial
              that separates Cooper from the Hiawatha neighborhood to the east.
              The road is loud, fast, and unpleasant to cross on foot. The
              light rail runs in its median, which is an asset for transit
              riders but doesn&apos;t change the fundamental hostility of the
              roadway to pedestrians and the blocks immediately adjacent to it.
              The eastern edge of Cooper is noisier, less desirable, and
              cheaper than the interior — a gradient that the highway created
              and that no amount of landscaping has fully mitigated.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="School Quality Perceptions">
          <Prose>
            <p>
              The perception of school quality in Cooper is a barrier for some
              families — particularly those comparing Cooper to Southwest
              Minneapolis neighborhoods with their stronger test scores and
              higher school ratings. The reality is more nuanced than the
              perception: Cooper&apos;s schools serve a more diverse and more
              economically varied student body, which affects aggregate metrics
              in ways that don&apos;t necessarily reflect the quality of
              instruction or the experience of any individual student. But
              perception drives decisions, and the school narrative keeps some
              families from considering Cooper despite its other strengths.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Cooper FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
