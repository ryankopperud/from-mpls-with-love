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
    title: "Bryant, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Bryant, Minneapolis — Bryant Square Park, the diverse community, affordable housing, restaurants, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Bryant",
  deck: "A small, diverse South Minneapolis neighborhood between Powderhorn and Lyndale that punches well above its size — anchored by Bryant Square Park, fed by the commercial energy of nearby Lake Street and Chicago Avenue, and held together by a residential community that is affordable, integrated, and largely invisible to the people who write trend pieces about Minneapolis neighborhoods.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Bryant?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Bryant" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Bryant, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,000", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$225K–$350K", label: "Median home sale price range (2025 data)" },
      { value: "1900s–1930s", label: "Era most homes were built" },
      { value: "Chicago Ave / Lake St", label: "Nearby commercial corridors" },
      { value: "Bryant Square Park", label: "Signature green space" },
      { value: "12–18 min", label: "Drive to downtown Minneapolis" },
      { value: "78", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Bryant a good neighborhood in Minneapolis?",
      answer:
        "Bryant is a solid, affordable, and genuinely diverse neighborhood in South Minneapolis. It offers some of the lowest home prices in the city's core, walkable access to Lake Street and Chicago Avenue commercial life, Bryant Square Park as a community anchor, and a residential character that is unpretentious and neighborly. It's a good fit for first-time buyers, renters, and anyone who values diversity and affordability over prestige. It is not a neighborhood without challenges — property crime, uneven commercial investment, and the lingering effects of 2020 are all real — but for the right person, Bryant delivers a quality of urban life that more expensive neighborhoods struggle to match.",
    },
    {
      question: "Is Bryant, Minneapolis safe?",
      answer:
        "Bryant's safety profile is mixed, as is true of many affordable urban neighborhoods. The residential blocks are generally quiet and neighborly, and most residents feel safe on their own streets. Property crime — car break-ins, catalytic converter thefts, occasional garage burglaries — is a regular concern. Violent crime exists but is concentrated in specific areas rather than evenly distributed. The Lake Street corridor and Chicago Avenue see more incidents than the interior residential blocks. Residents describe a neighborhood where awareness matters, where you lock your car and know your neighbors, and where the actual experience of daily life is calmer than crime statistics alone might suggest.",
    },
    {
      question: "What is Bryant, Minneapolis known for?",
      answer:
        "Bryant is known primarily for Bryant Square Park, its central green space and community gathering place, and for its position adjacent to the Powderhorn Park neighborhood. It's also recognized for its affordability, its racial and economic diversity, and its role as a residential anchor in one of the more varied parts of South Minneapolis. It is not a destination neighborhood — it does not have the brand recognition of Uptown or Northeast — but residents value it precisely for that quality.",
    },
    {
      question: "How much do homes cost in Bryant, Minneapolis?",
      answer:
        "Median home sale prices in Bryant ranged from roughly $225,000 to $350,000 in 2025. Smaller homes needing updates can be found under $220,000 — some of the most affordable single-family housing in Minneapolis's core. Well-maintained three-bedroom homes with finished basements sell in the $275,000–$350,000 range. Fully renovated homes can reach $375,000–$425,000 but are less common. Bryant remains one of the most affordable neighborhoods in South Minneapolis.",
    },
    {
      question: "What's the difference between Bryant and Powderhorn Park?",
      answer:
        "Bryant and Powderhorn Park are adjacent neighborhoods with overlapping character but distinct identities. Powderhorn Park has the lake (Powderhorn Lake), a stronger activist and countercultural identity, and more institutional density. Bryant is quieter, more uniformly residential, and slightly more affordable. Both are genuinely diverse. The boundary between them — roughly Bloomington Avenue — is not a sharp dividing line, and many residents think of the two neighborhoods as part of the same broader community.",
    },
    {
      question: "Is Bryant walkable?",
      answer:
        "Bryant earns a Walk Score of approximately 78 and a Bike Score of 90. Lake Street and Chicago Avenue — both within walking distance — provide groceries, restaurants, and transit connections. The neighborhood's compact size means most residential blocks are within a 10-minute walk of a commercial corridor. Biking is excellent, with flat terrain and good connections to the Minneapolis bike network.",
    },
    {
      question: "What schools serve Bryant, Minneapolis?",
      answer:
        "Bryant is served by Minneapolis Public Schools. Whittier International Elementary and other nearby elementaries serve the area. South High School is the assigned high school for grades 9–12. The district's open enrollment system means families can access magnet programs and other schools across the city. The schools here are diverse and community-connected, though test scores vary and many families actively navigate the enrollment process.",
    },
    {
      question: "How was Bryant affected by the 2020 unrest?",
      answer:
        "Bryant, like nearby Powderhorn and other neighborhoods along the Lake Street corridor, was affected by the unrest following George Floyd's murder in May 2020. Some businesses on the commercial corridors were damaged. The Powderhorn Park encampment — a tent encampment of unhoused people in 2020 — was adjacent to Bryant and significantly impacted the area. The neighborhood has been rebuilding since, but the effects — on commercial corridors, on community trust, on the social fabric — are still visible in 2026. Residents describe a neighborhood that is recovering but not yet fully recovered.",
    },
    {
      question: "Is Bryant good for renters?",
      answer:
        "Yes. Bryant has a significant rental housing stock — duplexes, small apartment buildings, and rented single-family homes — and rental prices are among the more affordable in Minneapolis's core neighborhoods. The neighborhood's walkability, transit access, and proximity to Lake Street and Chicago Avenue commercial life make it practical for renters who want urban convenience without paying Uptown or Northeast prices.",
    },
  ],
  nearby: [
    { name: "Powderhorn Park", slug: "powderhorn-park", description: "The lake neighborhood to the east — shared community identity" },
    { name: "Lyndale", slug: "lyndale", description: "Residential blocks to the south" },
    { name: "Central", slug: "central", description: "Commercial energy and density to the north" },
    { name: "Corcoran", slug: "corcoran", description: "Lake Street corridor neighbor to the east" },
    { name: "King Field", slug: "king-field", description: "Quieter residential blocks to the southwest" },
    { name: "Bancroft", slug: "bancroft", description: "Working-class blocks south of Powderhorn" },
  ],
  closing: {
    title: "What Makes Bryant Worth Knowing",
    paragraphs: [
      "Bryant is the kind of neighborhood that rewards you for paying attention. There is no marquee attraction, no commercial district with a brand identity, no lake or creek to put on a postcard. What there is, instead, is a community that has been quietly holding itself together through decades of change — demographic shifts, economic pressures, the unrest of 2020, and the slow rebuilding that follows — without losing the things that make it work. The blocks are still walkable. The park is still full of kids. The neighbors still wave.",
      "If you want a neighborhood that will impress your friends from the suburbs, Bryant is not it. If you want one that is affordable, diverse, well-located, and honest about both its strengths and its challenges, Bryant is worth a serious look. The people who live here chose it with their eyes open, and most of them would make the same choice again.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a warm evening in June, Bryant Square Park is the kind of place
          that makes you wonder why more people don&apos;t know this
          neighborhood exists. The playground is busy — Somali kids and white
          kids and Latino kids doing that thing where language barriers
          dissolve entirely when there&apos;s a slide involved. A group of
          older men is playing dominoes on a bench near the rec center. Two
          women in hijabs are walking the park perimeter while a golden
          retriever trots alongside, unleashed and unbothered. Somewhere on
          the south side of the park, a teenager is practicing skateboard
          tricks with the kind of focused repetition that suggests this is
          the highlight of his day. The scene is unremarkable in the best
          sense — nobody is curating it, nobody is documenting it for social
          media, and nobody seems aware that the casual integration on display
          here is something that most American neighborhoods cannot produce
          on a Tuesday.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/bryant/hero.webp"
        alt="Bryant Square Park on a summer evening with families and green space"
        caption="Bryant Square Park — the neighborhood's anchor and the place where its diversity is most visible"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Bryant, Minneapolis?">
        <Prose>
          <p>
            Bryant is a small residential neighborhood in South Minneapolis,
            roughly bounded by 35th Street to the north, Bloomington Avenue to
            the east, 39th Street to the south, and Lyndale Avenue to the west.
            It sits in the shadow of its more famous neighbor —{" "}
            <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
              Powderhorn Park
            </Link>
            {" "} — and shares much of Powderhorn&apos;s demographic character
            without its political intensity or institutional density. The
            neighborhood is home to approximately 4,000 residents and is
            anchored by Bryant Square Park, a green space with a playground,
            recreation center, and the open-field serenity that comes from a
            well-maintained urban park in a neighborhood that actually uses it.
          </p>
          <p>
            Bryant is not a neighborhood that appears on &quot;best of&quot;
            lists or attracts relocation guides. Its commercial life is
            borrowed from the corridors that surround it — Lake Street to the
            north, Chicago Avenue to the east — rather than generated from
            within. What Bryant has is residential quality: quiet blocks with
            affordable houses, genuine racial and economic diversity, and a
            sense of community that comes from people who chose a neighborhood
            for practical reasons and discovered, over time, that the practical
            reasons added up to something worth staying for.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Bryant Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/bryant/neighborhood-sign.webp"
          alt="Bryant neighborhood sign in Minneapolis"
          caption="The Bryant neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Bryant History & Origins">
        <Prose>
          <p>
            The land that is now Bryant is Dakota homeland, part of the
            territory occupied by the Dakota people for centuries before
            European colonization and the forced removals of the mid-nineteenth
            century. The neighborhood was developed for residential use in the
            late nineteenth and early twentieth centuries as Minneapolis
            expanded south from its commercial core. The name &quot;Bryant&quot;
            comes from Bryant Avenue, one of the north-south streets that
            bisects the neighborhood — a naming convention that, like much of
            Minneapolis&apos;s street grid, prioritized order over meaning.
          </p>
          <p>
            The housing stock was built primarily between 1900 and 1930, when
            this part of South Minneapolis was filling in with homes for
            working-class and middle-class families — immigrants from
            Scandinavia, Germany, and other parts of Northern Europe who
            worked in the mills, the railroads, and the trades that powered
            Minneapolis&apos;s early-twentieth-century economy. The houses
            were built accordingly: small, solid, practical. Two-story wood
            frames on narrow lots, duplexes mixed with single-family homes,
            front porches facing sidewalks that connected to the commercial
            life on Lake Street a few blocks north.
          </p>
          <p>
            Through the mid-twentieth century, Bryant was a stable,
            unremarkable residential neighborhood. The demographic transition
            began in the 1980s and 1990s, as Latino families, and later Somali
            and other East African immigrants, moved into the affordable
            housing stock. By the 2000s, Bryant had become one of the most
            diverse neighborhoods in Minneapolis — not as a result of a policy
            initiative, but because the housing was affordable and the location
            was good. That organic diversity remains the neighborhood&apos;s
            most distinguishing characteristic.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/bryant/historic-homes.webp"
          alt="Early 20th century homes along a residential street in Bryant"
          caption="Bryant's housing stock — built for working families over a century ago, now home to one of the city's most diverse communities"
        />
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Bryant">
        <Prose>
          <p>
            Bryant is a neighborhood where the small scale is the point. The
            blocks are short. The houses are close together. The alleys are
            active — garbage cans, garage doors, the occasional garden plot
            carved into a backyard that is barely big enough to justify the
            word. You hear your neighbors. You see them on the porch. The
            density is not high-rise density; it is the density of narrow lots
            and thin walls and shared fences, the kind of urban closeness that
            forces a baseline of social interaction whether you seek it out
            or not.
          </p>
          <p>
            The diversity is the first thing most visitors notice and the
            last thing most residents mention — not because they don&apos;t
            value it, but because it has become background, the default
            setting rather than the headline. Bryant is roughly one-third
            white, one-third Latino, and one-third a mix of Black, Somali,
            and other communities. The proportions shift block by block, but
            the overall picture is one of genuine integration — not the kind
            where one group dominates and others are present at the margins,
            but the kind where the school pickup line and the park bench and
            the alley conversation all look like the neighborhood actually is.
          </p>
          <p>
            The neighborhood&apos;s economic profile is working-class and
            lower-middle-class. Many residents rent. Homeowners tend to be
            long-term — people who bought when prices were low and have stayed
            because the house is paid off and the community is familiar.
            There is not a lot of disposable income visible on these blocks.
            The cars are older. The home improvements are DIY. The yards are
            maintained but not manicured. This is a neighborhood where people
            work hard, come home, and sit on the porch — and where the
            absence of affluence creates a social leveling that is, in its
            own way, a form of community.
          </p>
        </Prose>

        <Quote
          text="Nobody moves to Bryant to make a statement. You move here because you can afford it and it's close to everything. Then you stay because the people on your block actually care about each other."
          cite="Bryant resident, 12 years"
        />

        <ImageSlot
          src="/images/neighborhoods/bryant/residential-street.webp"
          alt="Residential street in Bryant with modest homes and mature trees"
          caption="Bryant's blocks — close-set homes, front porches, and the kind of quiet that exists between commercial corridors"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Bryant Food, Drink & Local Spots">
        <Prose>
          <p>
            Bryant does not have its own commercial corridor. The
            neighborhood&apos;s food and retail life is drawn from the
            corridors that surround it — Lake Street to the north, Chicago
            Avenue to the east — and the result is that Bryant residents have
            access to one of the most diverse and interesting food landscapes
            in Minneapolis without any of it technically being in their
            neighborhood. This is either a limitation or an advantage,
            depending on how you think about neighborhood identity. In
            practice, it means you can walk ten minutes in any direction and
            find something worth eating.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Essentials">
          <PlaceCardComponent place={{ name: "Mercado Central", tag: "Latin Market", price: "$", description: "Lake Street and Bloomington Avenue. A collection of Latino-owned small businesses under one roof — taquerias, bakeries, produce vendors, and specialty shops. This is not a food hall in the trendy sense; it is a community marketplace that has been serving the neighborhood's Latino population for two decades. The pupusas are excellent. The jugos are fresh. The atmosphere is lively and authentic." }} />
          <PlaceCardComponent place={{ name: "Gandhi Mahal", tag: "Indian / Bangladeshi", price: "$$", description: "Lake Street, nearby. A Bangladeshi and Indian restaurant that became a symbol of community resilience after its building was destroyed during the 2020 unrest. The owners famously said, 'Let my building burn, justice needs to be served.' The restaurant has reopened in a new location and continues to serve some of the best South Asian food in Minneapolis." }} />
          <PlaceCardComponent place={{ name: "Taqueria Los Ocampo", tag: "Mexican", price: "$", description: "On Lake Street near Bryant. Straightforward, no-frills Mexican food — tacos, burritos, tortas — at prices that reflect the neighborhood rather than a trend. The carne asada is reliable. The salsa bar is generous. This is weeknight dinner territory, and it delivers." }} />
          <PlaceCardComponent place={{ name: "May Day Café", tag: "Coffee & Community", price: "$", description: "Bloomington Avenue, just outside Bryant. A worker-owned cooperative café that has been a neighborhood institution for years — good coffee, simple food, and a community atmosphere that reflects the political sensibility of the Powderhorn area. Busy on weekend mornings." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The Lake Street corridor near Bryant is one of the most
              commercially diverse stretches in the Twin Cities — Mexican
              panaderías, Somali restaurants, Ethiopian groceries, and
              Vietnamese pho shops exist within blocks of each other. Much
              of this commercial life was damaged in 2020 and has been
              rebuilding at varying speeds. Some businesses have returned.
              Some have not. The corridor is not what it was before 2020,
              but it remains vibrant, resilient, and worth exploring for
              anyone who wants to eat well without spending a lot.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Bryant">
        <Prose>
          <p>
            Bryant Square Park is the neighborhood&apos;s green heart — not
            large by Minneapolis park standards, but well-used and
            well-maintained in the way that matters. The park includes a
            playground, a recreation center with gym space and community
            programming, open fields, and the kind of mature tree canopy
            that makes a small park feel bigger than its acreage suggests.
            On summer evenings, the park is the neighborhood&apos;s living
            room — families, couples, kids on bikes, and the occasional
            pickup soccer game creating the atmosphere that urban parks are
            supposed to create and sometimes actually do.
          </p>
        </Prose>

        <ArticleSubsection title="Bryant Square Park">
          <Prose>
            <p>
              The rec center at Bryant Square Park offers youth programming,
              open gym hours, and community meeting space. It is one of those
              Minneapolis Park Board facilities that serves a community need
              that goes well beyond recreation — for families in Bryant,
              especially lower-income families, the rec center provides
              after-school care, summer activities, and a safe indoor space
              that the housing stock does not always offer. The playground
              was updated in recent years and draws families from surrounding
              blocks.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/bryant/bryant-square-park.webp"
            alt="Bryant Square Park playground and green space on a summer afternoon"
            caption="Bryant Square Park — the neighborhood's central gathering place"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Green Space">
          <Prose>
            <p>
              Powderhorn Lake and Powderhorn Park are a short walk east — one
              of South Minneapolis&apos;s most significant green spaces, with
              a lake, trails, and the energy of a park that hosts festivals,
              political rallies, and community gatherings. The Midtown
              Greenway — a below-grade bicycle and pedestrian trail that runs
              east-west through South Minneapolis — is accessible a few
              blocks north, connecting Bryant to neighborhoods across the city
              via one of the best urban bike corridors in the country.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Bryant Schools">
        <Prose>
          <p>
            Bryant is served by Minneapolis Public Schools, and the school
            landscape reflects the neighborhood&apos;s diversity and its
            challenges. The elementary schools serving Bryant — including
            Whittier International Elementary — enroll student bodies that
            mirror the neighborhood&apos;s demographics, with significant
            Latino, Somali, Black, and white populations. These schools
            offer bilingual programming and culturally responsive teaching
            that reflects the communities they serve.
          </p>
          <p>
            South High School serves Bryant for grades 9–12. South is one
            of the most diverse high schools in the Minneapolis district,
            with a student body that speaks dozens of languages. It offers
            a range of academic programs and has a strong arts tradition.
            The school&apos;s diversity is a genuine asset, though
            achievement gaps persist and some families opt for magnet
            programs or other district schools through the open enrollment
            process.
          </p>
          <p>
            For families in Bryant, schools are a topic that requires
            active engagement. The district&apos;s open enrollment system
            provides options beyond the assigned schools, and many families
            navigate that system to find the right fit. The neighborhood
            schools offer something that test scores alone do not measure
            — a student body that reflects the real world, taught by
            educators who understand the communities they serve.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Bryant Real Estate & Housing">
        <Prose>
          <p>
            Bryant is one of the most affordable neighborhoods in
            Minneapolis&apos;s core — a place where single-family homes and
            duplexes can be purchased for prices that make homeownership
            accessible to people who are shut out of the market in most
            other city neighborhoods. The median home sale price has ranged
            between roughly $225,000 and $350,000 in 2025, with significant
            variation based on condition, size, and whether the property
            has been updated.
          </p>
          <p>
            The housing stock is a mix of single-family homes and duplexes,
            with some larger multifamily buildings mixed in. Most homes
            were built between 1900 and 1930 — two-story wood frames on
            narrow lots, with the architectural simplicity that characterized
            working-class Minneapolis construction in that era. Some have
            been carefully maintained or updated; others show the deferred
            maintenance that comes with decades of working-class ownership.
            The mix creates a streetscape that is uneven but not blighted —
            a patchwork of care and circumstance that tells the story of the
            neighborhood&apos;s economics honestly.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($190,000–$240,000), you can find smaller
              homes and duplexes that need significant work — the kind of
              properties that attract investors and first-time buyers willing
              to do sweat equity. The mid-range ($250,000–$325,000) gets you
              a well-maintained two- or three-bedroom home with a functional
              kitchen, updated mechanicals, and a yard. Above $350,000,
              you&apos;re looking at fully renovated properties or larger
              homes with modern amenities — uncommon in Bryant but
              increasingly present as the neighborhood attracts buyers who
              see value where others see risk.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="Our realtor tried to steer us to the suburbs. We bought a duplex in Bryant, lived in one unit, rented the other, and our mortgage was less than our old apartment in Uptown."
          cite="Bryant homeowner, duplex buyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Bryant">
        <Prose>
          <p>
            Bryant is one of the better-connected neighborhoods in South
            Minneapolis for getting around without a car. The Walk Score of
            approximately 78 reflects proximity to Lake Street and Chicago
            Avenue, where most daily needs can be met on foot. The Bike Score
            of 90 is exceptional — the Midtown Greenway is minutes away by
            bike, connecting Bryant to neighborhoods across the city, and the
            flat terrain makes cycling practical and pleasant.
          </p>
          <p>
            Metro Transit serves the neighborhood well. Route 21 on Lake
            Street is one of the busiest and most frequent bus lines in the
            system, running east-west with connections to the Blue Line light
            rail at Lake Street/Midtown Station. Route 5 on Chicago Avenue
            provides north-south service to downtown. The Blue Line itself
            is roughly a mile east, with the Lake Street/Midtown station
            providing direct access to downtown, the airport, and the Mall of
            America.
          </p>
          <p>
            By car, downtown Minneapolis is 12–18 minutes depending on
            traffic. I-35W is accessible via Lake Street or surface streets
            to the west. MSP Airport is approximately 15–20 minutes. Parking
            is generally available on residential blocks, though Lake Street
            can be tight during busy periods.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/bryant/greenway-access.webp"
          alt="Midtown Greenway bicycle trail near Bryant neighborhood"
          caption="The Midtown Greenway — Bryant's connection to the broader Minneapolis bike network"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Bryant carries the weight of the same forces that are reshaping
            urban neighborhoods across the country — affordability pressures,
            the lingering effects of 2020, and the tension between preserving
            what works and accepting what needs to change. Naming these
            tensions is not pessimism. It is honesty about a neighborhood
            that deserves better than boilerplate.
          </p>
        </Prose>

        <ArticleSubsection title="The 2020 Aftermath">
          <Prose>
            <p>
              Bryant sits adjacent to the epicenter of the 2020 unrest that
              followed George Floyd&apos;s murder. The Lake Street corridor
              sustained significant damage. The Powderhorn Park encampment
              — a tent encampment of unhoused people that occupied the park
              through the summer of 2020 — was immediately east of Bryant
              and had a profound impact on the surrounding community. The
              encampment is gone, but its effects — on residents&apos;
              trust in city services, on perceptions of safety, on the
              social fabric — are still present. Rebuilding has been uneven.
              Some Lake Street businesses have returned; others have not.
              The corridor is recovering, but the scars are visible and
              the process is not complete.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Gentrification and Displacement">
          <Prose>
            <p>
              Bryant&apos;s affordability has made it a target for investors
              and a potential landing zone for the gentrification wave that
              has already transformed neighborhoods like Uptown and parts of
              Northeast. Home prices have risen. Rental properties have been
              sold and renovated, sometimes displacing long-term tenants.
              The tension between welcoming new investment — which the
              neighborhood needs — and protecting the affordability that
              makes Bryant diverse is real and unresolved. Some long-term
              residents, particularly renters, worry that the neighborhood
              they helped build is being priced beyond their reach.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Property Crime">
          <Prose>
            <p>
              Property crime — car break-ins, catalytic converter thefts,
              package theft, occasional garage burglaries — is a persistent
              concern in Bryant, as it is across much of South Minneapolis.
              The rates increased during and after the pandemic and have not
              fully returned to pre-2020 levels. Residents describe a
              neighborhood where you take basic precautions — locking cars,
              keeping bikes inside, knowing your neighbors — and where the
              actual experience of daily life is safer than the crime data
              might suggest to an outsider. But the concern is real, and it
              shapes decisions about where people choose to live.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Bryant FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
