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
    title: "King Field, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about King Field, Minneapolis — Martin Luther King Park, the Nicollet corridor, restaurants, housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "King Field",
  deck: "A South Minneapolis neighborhood between Lyndale and Nicollet, south of 46th Street, where Martin Luther King Park anchors a community that is genuinely diverse without making a bumper sticker out of it — affordable by Minneapolis lake-adjacent standards, walkable enough to matter, and quietly holding together one of the more integrated residential fabrics in the city.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is King Field?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in King Field" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "King Field, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$275K–$400K", label: "Median home sale price range (2025 data)" },
      { value: "1910s–1940s", label: "Era most homes were built" },
      { value: "Nicollet Ave", label: "Primary commercial corridor" },
      { value: "Martin Luther King Park", label: "Signature green space" },
      { value: "15–20 min", label: "Drive to downtown Minneapolis" },
      { value: "72", label: "Walk Score" },
      { value: "88", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is King Field a good neighborhood in Minneapolis?",
      answer:
        "Yes — King Field is one of South Minneapolis's more livable and genuinely diverse neighborhoods. It offers affordable housing by Minneapolis standards, walkable access to Nicollet Avenue's restaurants and shops, Martin Luther King Park as a community anchor, and a residential character that manages to be both quiet and connected. It's a strong choice for families, young professionals, and anyone who values diversity that extends beyond demographics into the texture of daily life.",
    },
    {
      question: "Is King Field, Minneapolis safe?",
      answer:
        "King Field is generally safe by Minneapolis standards. The residential blocks are quiet and neighborly, and violent crime rates are below city averages. Property crime — car break-ins, catalytic converter thefts, package theft — is the most common concern, consistent with broader South Minneapolis trends. Nicollet Avenue and Lyndale Avenue see more activity and occasional incidents. As with all Minneapolis neighborhoods, safety varies by block and time of day, but most residents describe King Field as a comfortable place to live.",
    },
    {
      question: "What is King Field, Minneapolis known for?",
      answer:
        "King Field is known for Martin Luther King Park — a community hub with a recreation center, playground, and wading pool — and for its position between Nicollet and Lyndale Avenues, two of South Minneapolis's most important commercial corridors. The neighborhood is also recognized for its genuine racial and economic diversity, its affordable housing stock, and its role as a residential anchor for families who want urban living without urban prices.",
    },
    {
      question: "How much do homes cost in King Field, Minneapolis?",
      answer:
        "Median home sale prices in King Field ranged from roughly $275,000 to $400,000 in 2025. Smaller bungalows needing updates can be found in the $240,000–$290,000 range, while well-maintained three-bedroom homes with finished basements sell in the $325,000–$400,000 range. Fully renovated homes or those on larger lots can reach $425,000–$475,000. King Field remains one of the more affordable options in South Minneapolis for the quality of neighborhood life it delivers.",
    },
    {
      question: "What's the difference between King Field and Lyndale?",
      answer:
        "King Field and Lyndale are adjacent South Minneapolis neighborhoods with similar housing stock and residential character. King Field sits between Lyndale Avenue and Nicollet Avenue, south of 46th Street, while the Lyndale neighborhood sits to its east, between Nicollet and Chicago Avenues. King Field has slightly better commercial access due to its proximity to both Nicollet and Lyndale corridors. The two neighborhoods share schools, parks, and a generally similar feel — the boundary between them is more administrative than experiential.",
    },
    {
      question: "Is King Field walkable?",
      answer:
        "King Field earns a Walk Score of approximately 72 and a Bike Score of 88. Residents near Nicollet Avenue can walk to groceries, restaurants, and shops. The neighborhood is well-connected to the Minneapolis bike network, and the relatively flat terrain makes cycling practical year-round for committed riders. Bus service on Nicollet Avenue (Route 18) and Lyndale Avenue provides transit connections to downtown and the broader system.",
    },
    {
      question: "What schools serve King Field, Minneapolis?",
      answer:
        "King Field is served by Minneapolis Public Schools. Kenny Elementary School (PreK–5) is the neighborhood elementary. Roosevelt High School serves the area for grades 9–12. Families also access the district's magnet and open enrollment options, and several families opt for language immersion or other specialized programs. School quality is a common topic of conversation, and parents who engage with the system tend to find options that work for their families.",
    },
    {
      question: "How does King Field compare to Powderhorn Park?",
      answer:
        "King Field is quieter and more uniformly residential than Powderhorn Park, which has a stronger activist identity, more commercial and institutional density, and a more visible social service landscape. King Field's housing prices are slightly higher but still comparable. Both neighborhoods are genuinely diverse. King Field appeals more to families seeking residential calm; Powderhorn appeals to those who want to be closer to the energy — and the friction — of a more urban, more politically engaged community.",
    },
    {
      question: "What are the best restaurants near King Field?",
      answer:
        "King Field benefits from proximity to Nicollet Avenue, where standouts include Peppermint Twist (a neighborhood diner), and the broader 48th and Nicollet commercial node. Lyndale Avenue to the west offers additional options. The neighborhood is positioned to access dining in multiple directions without having a dense restaurant scene of its own — which is, for a residential neighborhood, arguably the right arrangement.",
    },
    {
      question: "Is King Field good for families?",
      answer:
        "Yes. King Field is one of the better family neighborhoods in South Minneapolis, offering Martin Luther King Park with its playground and rec center, affordable housing with yards and porches, walkable streets, and diverse schools. The neighborhood's mix of families with kids, older long-term residents, and younger homeowners creates a stable, multi-generational community. It's not glamorous — there's no lake, no trendy commercial strip — but the fundamentals of family life are solid here.",
    },
  ],
  nearby: [
    { name: "Lyndale", slug: "lyndale", description: "Adjacent to the east — similar character, shared schools" },
    { name: "Field", slug: "field", description: "Quiet residential blocks to the west" },
    { name: "Bryant", slug: "bryant", description: "Diverse blocks to the northeast" },
    { name: "Diamond Lake", slug: "diamond-lake", description: "Suburban-feeling neighborhood to the south" },
    { name: "Tangletown", slug: "tangletown", description: "Winding streets and higher prices to the northwest" },
  ],
  closing: {
    title: "What Makes King Field Worth Knowing",
    paragraphs: [
      "King Field is not a neighborhood that announces itself. There is no lake to put on a postcard, no commercial district with a brand identity, no single feature that makes it the obvious choice for anything. What there is, instead, is a residential fabric that works — blocks where the houses are modest and the trees are mature and the neighbors represent a genuine cross-section of the city, a park that functions as a real community gathering place, and a location between two commercial corridors that gives residents options without overwhelming the neighborhood with traffic and noise.",
      "The people who live in King Field tend to know exactly why they chose it and tend to stay. It's a neighborhood that rewards commitment — not because it demands sacrifice, but because the things that make it good are the things that take time to notice. The diversity is real but quiet. The affordability is meaningful but not dramatic. The community is strong but not performative. If you want a neighborhood that is trying to impress you, look elsewhere. If you want one that is trying to be a good place to live, King Field does that as well as anywhere in Minneapolis.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday morning in September, Martin Luther King Park is doing
          what it does best — holding the whole neighborhood at once without
          making it look crowded. A Somali family is picnicking near the wading
          pool while two kids chase each other through the spray. A white couple
          in their seventies walks the perimeter path with matching Nordic poles.
          A group of Latino dads is running a pickup soccer game on the east
          field, and the shouts carry across the rec center parking lot where a
          woman is unloading folding chairs for what appears to be a birthday
          party. Nobody is performing diversity. Nobody needs to. This is just
          what the park looks like on a regular weekend in a neighborhood that
          has figured out, without a lot of fanfare, how to be more than one
          thing at a time.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/king-field/hero.webp"
        alt="Martin Luther King Park on a sunny day with families and green space"
        caption="Martin Luther King Park — the heart of King Field and one of South Minneapolis's most genuinely integrated public spaces"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is King Field, Minneapolis?">
        <Prose>
          <p>
            King Field is a residential neighborhood in South Minneapolis,
            roughly bounded by 46th Street to the north, Nicollet Avenue to the
            east, 54th Street to the south, and Lyndale Avenue to the west. It
            sits between two of South Minneapolis&apos;s most significant
            commercial corridors — Nicollet and Lyndale — without being
            dominated by either. The neighborhood is home to approximately 5,500
            residents and is anchored by Martin Luther King Park, a green space
            with a recreation center, playground, wading pool, and athletic
            fields that functions as the neighborhood&apos;s living room.
          </p>
          <p>
            King Field does not have the name recognition of Minneapolis&apos;s
            lake neighborhoods or the cultural cachet of Uptown or Northeast.
            What it has, instead, is a residential quality that people who live
            here describe in practical terms — affordable houses on quiet
            blocks, genuine demographic diversity, walkable access to
            groceries and restaurants on Nicollet, a park that the kids actually
            use, and neighbors who look out for each other without expecting a
            parade for it. It is one of those neighborhoods that shows up on
            nobody&apos;s &quot;top ten&quot; lists and consistently holds onto
            the people who find it.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="King Field Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/king-field/neighborhood-sign.webp"
          alt="King Field neighborhood sign in Minneapolis"
          caption="The King Field neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="King Field History & Origins">
        <Prose>
          <p>
            The land that is now King Field is Dakota homeland, part of the
            territory that the Dakota people inhabited for centuries before
            European colonization displaced them. The area was developed for
            residential use in the early twentieth century as Minneapolis
            expanded south from its downtown core, filling in block by block
            with the modest single-family homes that define the neighborhood
            today. Most of the housing stock dates from the 1910s through the
            1940s — bungalows, Cape Cods, and small colonials built for
            working-class and middle-class families who wanted a house with a
            yard within city limits.
          </p>
          <p>
            The neighborhood was originally part of a broader area sometimes
            referred to as the &quot;Nicollet-Lyndale corridor,&quot; and its
            identity as a distinct neighborhood with its own name came later.
            The King Field designation — named for Martin Luther King Jr. and
            the park that bears his name — reflects a community that has
            consciously defined itself around its central green space. The park
            was renamed from its earlier designation in the years following
            King&apos;s assassination, and the neighborhood gradually adopted
            the name as its own. It is one of the few neighborhoods in
            Minneapolis named for the civil rights movement rather than for a
            geographic feature, a historical figure from the settler era, or
            a developer.
          </p>
          <p>
            Through the postwar decades, King Field followed the trajectory
            common to many South Minneapolis neighborhoods — stable,
            middle-class, predominantly white, and quietly suburban in feel
            despite being within city limits. The demographic shift began in
            earnest in the 1990s and accelerated through the 2000s and 2010s,
            as immigrant families — particularly Somali and Latino communities
            — moved into the affordable housing stock. This transition happened
            without the dramatic conflict that marked some other Minneapolis
            neighborhoods, in part because King Field&apos;s residential
            character meant there were fewer flashpoints and in part because
            the park and the rec center provided shared spaces where
            cross-cultural interaction happened naturally.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/king-field/historic-street.webp"
          alt="Tree-lined residential street in King Field showing early 20th century bungalows"
          caption="King Field's housing stock — built for working families in the 1920s and 1930s, still serving them today"
        />
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in King Field">
        <Prose>
          <p>
            King Field is a neighborhood that you understand by walking it. The
            blocks between Lyndale and Nicollet are lined with mature elms and
            maples, and the houses beneath them — one- and two-story bungalows
            with front porches and detached garages — create a scale that is
            human and unpretentious. You can tell which houses have been in the
            same family for decades (the immaculate lawn, the aluminum awnings,
            the small statue of the Virgin Mary near the front steps) and which
            were bought recently by young families (the new roof, the updated
            windows, the toddler&apos;s bicycle on the porch). The mix is one
            of King Field&apos;s defining features — this is not a neighborhood
            that has been gentrified into uniformity or neglected into decline.
            It is in the middle, which is where most actual neighborhoods are.
          </p>
          <p>
            The diversity here is not theoretical. King Field is one of the
            more racially integrated neighborhoods in Minneapolis — not a
            neighborhood where one group dominates and others are present at
            the margins, but one where white, Black, Somali, Latino, and other
            communities share blocks and alleys and school pickup lines in
            proportions that are closer to balanced than you find in most parts
            of the city. This integration is not the result of a policy
            initiative or a community organizing campaign. It is the result of
            affordable housing in a good location — the simplest mechanism the
            housing market has for creating diversity, and the one that
            requires the least intervention to maintain.
          </p>
          <p>
            Martin Luther King Park is the social center. The rec center hosts
            youth programming, community meetings, and pickup basketball. The
            playground draws families from the surrounding blocks. The wading
            pool is the summer babysitter for kids too young for the public
            pools. And the open fields — large enough for soccer, frisbee, or
            just lying in the grass — give the neighborhood a sense of
            breathing room that the modest lot sizes of the housing stock
            do not provide on their own. The park is not just a green space.
            It is the place where the neighborhood&apos;s different communities
            overlap.
          </p>
        </Prose>

        <Quote
          text="We moved here because we could afford it. We stayed because our kids have friends who don't all look like them, and that happened without anyone having to orchestrate it."
          cite="King Field homeowner, parent of three"
        />

        <ImageSlot
          src="/images/neighborhoods/king-field/residential-block.webp"
          alt="Diverse residential block in King Field with bungalows and mature trees"
          caption="King Field's residential blocks — modest, tree-lined, and genuinely mixed"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="King Field Food, Drink & Local Spots">
        <Prose>
          <p>
            King Field&apos;s food scene is neighborhood-scale — a handful of
            places that serve the community well without attracting destination
            diners from across the city. The Nicollet Avenue corridor on the
            neighborhood&apos;s eastern edge provides the most options, while
            Lyndale Avenue to the west adds a few more. This is not a
            neighborhood you come to for a culinary experience. It is a
            neighborhood where you can get a solid meal, a decent cup of
            coffee, and the groceries you need without driving to a different
            part of town. For a residential neighborhood, that is exactly
            the right calibration.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Peppermint Twist", tag: "Diner", price: "$", description: "Nicollet Avenue. A neighborhood diner in the traditional sense — breakfast and lunch, counter service, regulars who have been coming for years, and the kind of unpretentious food that does what you need it to do. The pancakes are reliable. The atmosphere is local. It's the sort of place that anchors a commercial corridor without trying to define it." }} />
          <PlaceCardComponent place={{ name: "Patisserie 46", tag: "Bakery & Pastry", price: "$$", description: "4552 Grand Avenue South, nearby. John Kraus's celebrated bakery — serious French pastry technique applied with Midwestern restraint. The croissants are exceptional. The cakes are precise. The space is small and the line can be long on weekend mornings, but the quality justifies both the wait and the slightly-out-of-neighborhood detour for King Field residents." }} />
          <PlaceCardComponent place={{ name: "Taqueria La Hacienda", tag: "Mexican", price: "$", description: "On Nicollet Avenue. Straightforward, well-executed Mexican food — tacos, burritos, tortas — at prices that remind you why taco shops in neighborhood corridors are one of the best things about urban life. The al pastor is worth ordering. The horchata is worth drinking. No frills, no pretension, no reason to go anywhere else." }} />
          <PlaceCardComponent place={{ name: "Diamond Lake Cub Foods", tag: "Grocery", price: "$–$$", description: "On Nicollet Avenue near Diamond Lake Road. The primary grocery anchor for the area — not glamorous, but stocked with a diverse selection that reflects the neighborhood's demographics, including halal options and a solid produce section. It's where most King Field residents do their weekly shopping." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Nicollet Avenue through this stretch of South Minneapolis is a
              working commercial corridor — not a destination strip, but a
              functional one. Laundromats, auto shops, small groceries, and
              restaurants serving the neighborhood&apos;s various communities
              line the avenue. The food reflects the demographics: you can find
              Somali tea shops, Mexican bakeries, and American diners within a
              few blocks of each other. Lyndale Avenue to the west has its own
              commercial nodes, though the stretch near King Field is quieter
              than the Lyndale corridor further north. For more ambitious
              dining, residents head to{" "}
              <Link href="/neighborhoods/tangletown" className="text-[#2a9d8f] hover:underline">
                Tangletown
              </Link>
              {" "}or the 48th and Chicago area.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near King Field">
        <Prose>
          <p>
            King Field does not have a lake. This is the first thing that
            separates it from the neighborhoods a mile to the west or east
            that can claim water access. What it has instead is Martin Luther
            King Park — 30 acres of green space that functions as the
            neighborhood&apos;s backyard, playground, sports complex, and
            community gathering place all at once. For a neighborhood of
            modest homes on modest lots, the park provides the outdoor scale
            that the private parcels cannot.
          </p>
        </Prose>

        <ArticleSubsection title="Martin Luther King Park">
          <Prose>
            <p>
              MLK Park is the neighborhood&apos;s anchor. The park includes a
              recreation center with gym space, meeting rooms, and youth
              programming; a playground that was updated in recent years; a
              wading pool that is packed on summer afternoons; athletic fields
              used for youth soccer and softball; tennis courts; and open green
              space for the kind of unstructured outdoor time that kids and
              adults both need. The rec center is a genuine community
              institution — not just a building with programs, but a place
              where King Field&apos;s different communities intersect.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/king-field/mlk-park.webp"
            alt="Martin Luther King Park playground and green space with families"
            caption="Martin Luther King Park — the anchor green space and community gathering place"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Connections to Broader Green Space">
          <Prose>
            <p>
              King Field is within biking distance of several significant green
              spaces.{" "}
              <Link href="/neighborhoods/diamond-lake" className="text-[#2a9d8f] hover:underline">
                Diamond Lake
              </Link>
              {" "}and its park are roughly a mile to the south. The
              Minnehaha Creek corridor and the Grand Rounds trail system are
              accessible via connecting bike routes. Lake Harriet and Lake
              Nokomis are each roughly two miles away — close enough for a bike
              ride, far enough that you would not call King Field a &quot;lake
              neighborhood.&quot; The neighborhood&apos;s flat terrain and good
              bike infrastructure make these connections practical for
              residents who are comfortable on two wheels.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="King Field Schools">
        <Prose>
          <p>
            King Field is served by Minneapolis Public Schools, and the school
            landscape here reflects the district&apos;s characteristic blend
            of dedicated educators, diverse student bodies, and uneven outcomes.
            Kenny Elementary School (PreK–5) is the neighborhood&apos;s primary
            elementary option — a community school with a diverse enrollment
            that mirrors the neighborhood&apos;s demographics. Kenny has a
            reputation for strong community engagement and a welcoming
            atmosphere, and families who invest in the school tend to have
            positive experiences.
          </p>
          <p>
            Roosevelt High School serves King Field for grades 9–12. Roosevelt
            is one of the more diverse high schools in the district, with a
            student body that includes significant Somali, Latino, white, and
            Black populations. The school has undergone facility improvements
            and offers a range of academic and extracurricular programs.
            Families&apos; experiences vary, and some opt for magnet programs
            or open enrollment to other district schools.
          </p>
          <p>
            Minneapolis Public Schools&apos; open enrollment system means
            families in King Field are not limited to assigned schools. Language
            immersion programs, magnet schools, and other options are available
            across the district. For families who value diversity in the student
            body — and who are willing to engage with the enrollment process —
            King Field&apos;s schools offer something real, even if the test
            scores alone don&apos;t tell the full story.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="King Field Real Estate & Housing">
        <Prose>
          <p>
            King Field is one of South Minneapolis&apos;s better values — a
            neighborhood where the housing stock is modest but solid, the
            prices are below the city median for comparable quality of life,
            and the location between two commercial corridors gives residents
            options that more isolated neighborhoods cannot match. The median
            home sale price has ranged between roughly $275,000 and $400,000
            in 2025, which makes King Field accessible to first-time buyers,
            young families, and anyone who has been priced out of the
            neighborhoods with higher name recognition.
          </p>
          <p>
            The housing stock is almost entirely single-family — bungalows,
            Cape Cods, and small ramblers on narrow lots with detached garages
            and alleys. The houses are small by suburban standards (many are
            under 1,500 square feet above grade) but well-built and, in many
            cases, carefully maintained. Finished basements add living space
            that the floor plans above don&apos;t always suggest. The
            neighborhood is essentially built out — there is almost no vacant
            land, and new construction is limited to the occasional
            teardown-rebuild or small multifamily project.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($240,000–$290,000), you&apos;re looking at
              smaller two-bedroom bungalows that need cosmetic work — dated
              kitchens, original windows, the kind of deferred maintenance
              that makes a house affordable. The mid-range ($300,000–$375,000)
              gets you a well-maintained three-bedroom home with a finished
              basement, updated mechanicals, and a yard that works for kids
              and a garden. Above $400,000, you&apos;re in renovated territory
              — updated kitchens and baths, expanded footprints, or corner
              lots with more space and light.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We were looking at condos in Uptown for what we paid for a three-bedroom house with a yard in King Field. The math was obvious. The neighborhood was a bonus."
          cite="King Field homeowner, first-time buyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around King Field">
        <Prose>
          <p>
            King Field is well-served by the bus network and the bike
            infrastructure, and the Walk Score of approximately 72 reflects a
            neighborhood where most errands can be handled on foot if you live
            near Nicollet Avenue, though the interior blocks are more
            car-dependent for anything beyond the immediate neighborhood.
            The Bike Score of 88 is the more relevant number — King Field is
            flat, connected to the broader Minneapolis bike network, and
            positioned so that cycling to downtown, the lakes, or adjacent
            neighborhoods is practical and pleasant for much of the year.
          </p>
          <p>
            Metro Transit Route 18 runs along Nicollet Avenue — one of the
            more frequent and reliable bus lines in the system, connecting
            King Field to downtown Minneapolis in roughly 25–30 minutes.
            Route 4 on Lyndale Avenue provides a parallel north-south option.
            East-west bus service is less frequent, and reaching the Blue Line
            light rail on Hiawatha Avenue requires a transfer or a bike ride.
          </p>
          <p>
            By car, downtown is 15–20 minutes depending on traffic. MSP
            International Airport is roughly 15 minutes via Crosstown Highway
            62. The Crosstown provides east-west freeway access, and I-35W is
            accessible via surface streets to the west. Parking is abundant
            on residential blocks and generally available on the commercial
            corridors.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/king-field/nicollet-corridor.webp"
          alt="Nicollet Avenue commercial corridor near King Field with shops and bus stops"
          caption="Nicollet Avenue — King Field's commercial spine and transit connection"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            King Field is not a neighborhood in crisis, and it is not a
            neighborhood defined by its tensions. But it is a neighborhood
            where several forces are at work, and naming them honestly is
            part of understanding what it means to live here in 2026.
          </p>
        </Prose>

        <ArticleSubsection title="Affordability Under Pressure">
          <Prose>
            <p>
              King Field&apos;s affordability is one of its core strengths, but
              it is not guaranteed to last. Home prices have risen steadily
              over the past decade, and the same forces that priced young
              families out of Linden Hills and Fulton a generation ago are
              beginning to push into neighborhoods like King Field. The houses
              that sold for $180,000 in 2015 are selling for $300,000 in 2025.
              The price increases have been moderate compared to trendier
              neighborhoods, but for the lower-income families who have been
              part of King Field&apos;s diversity, the trajectory is concerning.
              Rental prices have also risen, putting pressure on the
              neighborhood&apos;s economic mix.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nicollet Avenue's Commercial Future">
          <Prose>
            <p>
              Nicollet Avenue through King Field is a functional commercial
              corridor, but it is not thriving in the way that Nicollet in
              Tangletown or further north once did. Storefronts turn over.
              Some sit vacant. The mix of businesses reflects the
              neighborhood&apos;s diversity but also its economic constraints —
              you see more dollar stores and check-cashing outlets than you
              would on the same avenue a few miles north. The corridor&apos;s
              future depends on investment, zoning decisions, and whether the
              city can support small-business development in neighborhoods
              that are not already destinations. King Field residents watch
              these dynamics with a mixture of hope and wariness.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Density Conversation">
          <Prose>
            <p>
              Minneapolis 2040&apos;s elimination of single-family-only zoning
              has opened King Field — like every neighborhood in the city — to
              increased density. Duplexes and triplexes are now permitted on
              historically single-family blocks, and Nicollet Avenue is zoned
              for taller multifamily buildings. Some residents welcome the
              potential for more housing, more neighbors, and more commercial
              activity. Others worry about parking, traffic, and changes to
              the neighborhood&apos;s residential scale. The tension is not
              unique to King Field, but it is felt here because the
              neighborhood&apos;s character is closely tied to its
              single-family housing fabric — and any significant change to
              that fabric will change what King Field feels like.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="King Field FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
