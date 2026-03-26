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
    title: "Powderhorn Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Powderhorn Park, Minneapolis — May Day Parade, Powderhorn Lake, diversity, arts community, affordability, the 2020 reckoning, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Powderhorn Park",
  deck: "The most unapologetically itself neighborhood in Minneapolis — where the May Day Parade still marches down Bloomington Avenue every spring, a dozen cultures share a single lake, activists and artists built something real and complicated, and the tensions of American urban life are not politely ignored but argued about on front porches and at park picnics.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Powderhorn Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Powderhorn" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Powderhorn Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~8,800", label: "Residents (US Census / ACS estimates)" },
      { value: "$260K–$340K", label: "Median home sale price range (2025 data)" },
      { value: "$950–$1,300", label: "Typical 1BR apartment rent (2025)" },
      { value: "78", label: "Walk Score" },
      { value: "89", label: "Bike Score" },
      { value: "58", label: "Transit Score" },
      { value: "~55%", label: "Renter-occupied housing" },
      { value: "50%+", label: "Residents who are people of color" },
      { value: "1883", label: "Year Powderhorn Lake park was established" },
    ],
  },
  faq: [
    {
      question: "Is Powderhorn Park a good neighborhood in Minneapolis?",
      answer:
        "It depends entirely on what you're looking for. Powderhorn is one of the most diverse, culturally rich, and affordable neighborhoods in Minneapolis. It has a beautiful lake and park, a strong arts and activist community, excellent biking infrastructure, and a genuine neighborhood identity that most places can only aspire to. It also has higher crime rates than Southwest Minneapolis, visible poverty, and the kinds of tensions that come with rapid demographic change and a still-unfinished post-2020 recovery. If you want a neighborhood with character, diversity, and affordability — and you're comfortable with complexity — Powderhorn is outstanding. If you want predictability and polish, look elsewhere.",
    },
    {
      question: "Is Powderhorn Park, Minneapolis safe?",
      answer:
        "Powderhorn's safety picture is honest-to-God complicated. Property crime — car break-ins, catalytic converter theft, bike theft, package theft — is a regular reality. Violent crime is higher than the city average and has been for years, though it declined from 2020–2021 peaks by 2024–2025. The 2020 events brought an acute spike in crime that the neighborhood is still processing. Most residential blocks are quiet on most nights, and many long-term residents feel safe walking the neighborhood and the lake path. But situational awareness matters here more than in quieter neighborhoods, and the gap between Powderhorn's reality and the reality in, say, Fulton or Linden Hills is real.",
    },
    {
      question: "What is the May Day Parade in Minneapolis?",
      answer:
        "The MayDay Parade and Festival is an annual community celebration organized by In the Heart of the Beast Puppet and Mask Theatre (HOBT), held on the first Sunday of May. The parade travels down Bloomington Avenue to Powderhorn Park, featuring giant puppets, stilt-walkers, drummers, dancers, and community-built floats — all created through free public workshops in the weeks beforehand. It culminates with a ceremony at the lake. The event has been running since 1975 and draws 50,000+ people. It is Powderhorn's defining cultural event and one of the most distinctive community traditions in the American Midwest. HOBT faced financial difficulties and the parade was suspended during the pandemic years but has returned in modified form.",
    },
    {
      question: "What happened in Powderhorn Park in 2020?",
      answer:
        "Following the murder of George Floyd on May 25, 2020, at 38th and Chicago Avenue — at the border of Powderhorn and neighboring Central — the neighborhood was directly affected by the protests and unrest that followed. In June 2020, a large homeless encampment formed in Powderhorn Park after the Minneapolis Park Board initially declined to remove it, and the neighborhood became a flashpoint in citywide debates about homelessness, policing, and public safety. The encampment grew to hundreds of tents, drew national media attention, and deeply divided the neighborhood. It was eventually cleared, but the experience left lasting marks on community trust, park usage, and neighborhood identity.",
    },
    {
      question: "How much does it cost to live in Powderhorn Park?",
      answer:
        "Powderhorn remains one of the more affordable neighborhoods in Minneapolis with genuine urban amenities. One-bedroom apartments typically rent for $950–$1,300 per month. Homes sell in a broad range — smaller bungalows and duplexes from $220,000–$300,000, updated three-bedroom homes from $300,000–$400,000, and larger or renovated properties up to $450,000. Compared to Southwest Minneapolis, where median prices often exceed $500,000, Powderhorn offers significantly more house for the money.",
    },
    {
      question: "Is Powderhorn Park walkable?",
      answer:
        "Moderately. Powderhorn earns a Walk Score of 78, which is respectable but not exceptional — you can walk to the park, several restaurants, corner stores, and Lake Street's commercial corridor, but it's not the wall-to-wall commercial density of Whittier or Uptown. The Bike Score of 89 is the real standout — excellent cycling infrastructure, including connections to the Midtown Greenway, makes this one of the best biking neighborhoods in the city. Many residents bike more than they walk for errands.",
    },
    {
      question: "What is Powderhorn Park, Minneapolis known for?",
      answer:
        "Powderhorn is best known for Powderhorn Lake and its surrounding park, the MayDay Parade and Festival (organized by In the Heart of the Beast Puppet and Mask Theatre), its extraordinary racial and cultural diversity, a strong arts and activist community, and — since 2020 — its role as a flashpoint in Minneapolis's reckoning with policing, homelessness, and racial justice. It's also known for having some of the most affordable housing in the core city.",
    },
    {
      question: "Where exactly is Powderhorn Park in Minneapolis?",
      answer:
        "Powderhorn Park is in South Minneapolis, roughly bounded by East Lake Street to the north, Cedar Avenue/Highway 77 to the east, East 38th Street to the south, and Chicago Avenue to the west (though some definitions place the western boundary at Bloomington Avenue). The neighborhood takes its name from Powderhorn Lake, a small glacial lake near the center of the community at 3400 15th Avenue South.",
    },
    {
      question: "Is Powderhorn Park gentrifying?",
      answer:
        "Yes, though the process is complicated and contested. Artists and activists who settled in Powderhorn because of its affordability and diversity helped make the neighborhood culturally desirable — which attracted new residents, which raised prices, which has begun to push out some of the people who created that desirability in the first place. Home prices have risen significantly over the past decade, though 2020 temporarily slowed the trend. The neighborhood is acutely aware of this dynamic and actively debates it, but awareness hasn't stopped the economic forces at work.",
    },
    {
      question: "What schools serve Powderhorn Park?",
      answer:
        "Powderhorn is served by several Minneapolis Public Schools. Andersen United Community School (PreK–8) is located within the neighborhood and is one of the most diverse schools in the district. South High School serves the area for grades 9–12. Families also use the district's open enrollment and magnet programs to access options citywide. The neighborhood has several charter school options as well.",
    },
    {
      question: "What is the Heart of the Beast Theatre?",
      answer:
        "In the Heart of the Beast Puppet and Mask Theatre (HOBT) is a community-based theater company located at 1500 East Lake Street in the Powderhorn neighborhood. Founded in 1973, it is best known for organizing the annual MayDay Parade and Festival but also produces original puppet theater, hosts community workshops, and serves as a gathering space for artists and organizers. HOBT has faced financial pressures in recent years — including losing its longtime building — but remains one of the most distinctive cultural institutions in Minneapolis.",
    },
  ],
  nearby: [
    { name: "Central", slug: "central", description: "38th & Chicago, George Floyd Square, and deep community roots" },
    { name: "Corcoran", slug: "corcoran", description: "Quiet residential blocks south of Lake Street" },
    { name: "Bancroft", slug: "bancroft", description: "Working-class homes and steady neighborhood life to the south" },
    { name: "Lyndale", slug: "lyndale", description: "Small-scale residential streets to the west" },
    { name: "Whittier", slug: "whittier", description: "Eat Street, Mia, and the densest diversity in town" },
    { name: "Bryant", slug: "bryant", description: "Bungalows and community gardens just to the west" },
  ],
  closing: {
    title: "What Makes Powderhorn Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis that are safer, cleaner, quieter, easier to explain to your parents when they ask where you moved. There are neighborhoods where the park doesn't carry the memory of an encampment, where the community meetings don't turn into two-hour arguments about policing and displacement, where you don't have to hold so many contradictions in your head at once. Powderhorn is not those places. What it is — what it has been for decades and what it stubbornly continues to be — is a neighborhood where people who are genuinely different from each other share a lake and a parade and a set of problems and, somehow, a sense of belonging. The Somali family at the picnic table, the queer punk house on the corner, the Mexican grocery on Lake Street, the retired teacher who has been on the block since 1987 — they are not performing diversity for a brochure. They are living next to each other, which is harder and more valuable than any brochure could convey.",
      "Powderhorn has been through more than most Minneapolis neighborhoods in the past six years. The murder of George Floyd happened at its border. The encampment happened in its park. The crime spike happened on its streets. The gentrification is happening to its people. None of this has been easy, and pretending otherwise would be a lie. But Powderhorn has never been a neighborhood that lies to itself — that radical honesty, that willingness to look at hard things and keep going, is the quality that defines the place more than the lake or the parade or the Victorians on the side streets. If you can hold the beauty and the difficulty at the same time, Powderhorn will feel like home. If you need to choose one or the other, you will probably be happier somewhere else. And that is completely fine.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On the first Sunday of May, Bloomington Avenue shuts down. The giant
          puppets come first — towering cloth-and-papier-mache figures on poles,
          swaying above the crowd like benevolent spirits, built over weeks in
          community workshops where nobody checks your resume. Then the
          drummers, the stilt-walkers, the kids in homemade costumes, the
          lowriders, the dance troupes from six different traditions moving to
          six different rhythms on the same street. Fifty thousand people line
          the avenue — Somali families in bright hijabs, Latino kids on their
          fathers&apos; shoulders, white punks with face paint, elders in lawn
          chairs who have been watching this parade for thirty years. The
          procession winds south to Powderhorn Lake, where a ceremony at the
          water&apos;s edge closes the day with something that feels less like
          a performance and more like a prayer. This is the MayDay Parade —
          Powderhorn&apos;s annual declaration that a neighborhood can be
          chaotic and beautiful and broke and magnificent all at once. The rest
          of the year, the neighborhood tries to live up to it. Sometimes it
          succeeds. Sometimes it doesn&apos;t. But it never stops trying.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/powderhorn-park/hero.webp"
        alt="Powderhorn Lake on a summer evening with families gathered along the shore and the Minneapolis skyline in the distance"
        caption="Powderhorn Lake — the glacial heart of the neighborhood, shared by everyone"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Powderhorn Park, Minneapolis?">
        <Prose>
          <p>
            Powderhorn Park is a neighborhood in South Minneapolis, roughly
            bounded by East Lake Street to the north, Cedar Avenue (Highway 77)
            to the east, East 38th Street to the south, and Chicago Avenue to
            the west. It takes its name from Powderhorn Lake, a small glacial
            lake near the center of the neighborhood whose shape — roughly that
            of an 18th-century powder horn — gave the park and eventually the
            community its name. Approximately 8,800 people live here, making it
            a mid-sized Minneapolis neighborhood by population, but its cultural
            footprint is wildly disproportionate to its acreage.
          </p>
          <p>
            What defines Powderhorn is not one thing but several, layered on top
            of each other in ways that don&apos;t always fit neatly together.
            It is one of the most racially and ethnically diverse neighborhoods
            in Minneapolis — and in the state of Minnesota — with significant
            Latino, Somali, Native American, and white communities sharing
            blocks and schools and park space. It is an arts neighborhood,
            home to In the Heart of the Beast Puppet and Mask Theatre and a
            dense network of working artists, musicians, and writers who came
            for the cheap rent and stayed for the community. It is an activist
            neighborhood, with a tradition of organizing — around housing,
            policing, immigration, queer rights, environmental justice — that
            is older and deeper than any single issue. And since 2020, it is
            a neighborhood that has been tested in ways that few American
            neighborhoods have, and that is still figuring out what it looks
            like on the other side.
          </p>
          <p>
            Powderhorn sits within the broader &quot;Powderhorn&quot; community
            cluster, which includes the adjacent{" "}
            <Link href="/neighborhoods/central" className="text-[#2a9d8f] hover:underline">
              Central
            </Link>
            ,{" "}
            <Link href="/neighborhoods/corcoran" className="text-[#2a9d8f] hover:underline">
              Corcoran
            </Link>
            , and{" "}
            <Link href="/neighborhoods/bancroft" className="text-[#2a9d8f] hover:underline">
              Bancroft
            </Link>{" "}
            neighborhoods. When people in Minneapolis say
            &quot;Powderhorn,&quot; they almost always mean the specific
            neighborhood around the lake — the one with the parade and the
            politics and the complicated recent history.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Powderhorn Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/powderhorn-park/neighborhood-sign.webp"
          alt="Powderhorn Park neighborhood sign in Minneapolis"
          caption="The Powderhorn Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Powderhorn Park History & Origins">
        <Prose>
          <p>
            The land that is now Powderhorn Park is Dakota homeland — part of the
            territory of the Mdewakanton and Wahpekute bands of the Dakota
            people, who lived, hunted, and gathered throughout what would become
            Minneapolis for centuries before European contact. Powderhorn Lake
            itself is a glacial kettle lake, formed roughly 12,000 years ago
            when a block of ice left behind by the retreating glacier melted
            into the till. The Dakota knew this landscape intimately. The lakes,
            the creeks, the prairies — all of it was homeland, not wilderness.
            The distinction matters.
          </p>
          <p>
            European-American settlement came in the 1850s and 1860s, following
            the treaties — signed under coercion — that dispossessed the Dakota
            of their lands. The area around Powderhorn Lake was initially
            farmland on the southern edge of a rapidly growing Minneapolis,
            which was booming on flour milling and lumber. The Minneapolis Park
            Board acquired the land around the lake in 1883, establishing
            Powderhorn Park as a public green space — one of the earliest
            park acquisitions in the city&apos;s ambitious park system. The
            name came from the lake&apos;s shape, which early surveyors thought
            resembled a powder horn, the container used to carry gunpowder in
            the 18th and 19th centuries.
          </p>
          <p>
            The residential neighborhood filled in between the 1880s and the
            1920s, following the pattern common to much of South Minneapolis:
            streetcar lines extended outward from downtown, and developers
            platted blocks of modest homes for the working and middle classes.
            The housing stock from this era — Craftsman bungalows, Foursquares,
            small Victorians, and the occasional Arts and Crafts gem — still
            dominates the neighborhood&apos;s residential streets. The homes
            were built for flour mill workers, railroad employees, and
            tradespeople. They were practical, affordable, and solidly
            constructed — not grand, but meant to last. Many of them have.
          </p>
          <p>
            The neighborhood&apos;s first major demographic shift came in the
            mid-twentieth century, following the familiar American pattern of
            white flight to the suburbs. As wealthier families left for
            Edina, Bloomington, and Richfield, Powderhorn&apos;s housing stock
            aged, rents dropped, and the neighborhood attracted new residents
            who were priced out of other areas or excluded from them entirely.
            By the 1970s, Powderhorn was becoming home to artists, hippies,
            political organizers, and — increasingly — immigrant communities
            from Latin America and Southeast Asia. The low rents that
            suburbanites considered evidence of decline were, for these new
            arrivals, an opening.
          </p>
          <p>
            In the Heart of the Beast Puppet and Mask Theatre was founded in
            1973 and staged the first MayDay Parade in 1975 — a community
            celebration that would become the neighborhood&apos;s signature
            event and one of the most distinctive traditions in the Upper
            Midwest. The parade was political from the start — rooted in the
            labor movement&apos;s May Day tradition, infused with the
            counterculture&apos;s love of spectacle, and open to anyone who
            wanted to participate. It drew a coalition that would define
            Powderhorn for decades: artists, activists, immigrants, queer
            people, families, oddballs, and anyone else who wanted to belong
            to something that wasn&apos;t corporate or curated.
          </p>
          <p>
            The 1990s and 2000s brought additional waves of immigration —
            particularly Somali families fleeing civil war and East African
            communities seeking affordable housing near Lake Street&apos;s
            commercial corridor. The Latino community — Mexican, Guatemalan,
            Ecuadorian — deepened its roots, with businesses, churches, and
            social networks that transformed stretches of Lake Street and
            Bloomington Avenue. Native American families, many connected to the
            American Indian Movement&apos;s Twin Cities roots and the nearby
            Phillips neighborhood, have also been part of Powderhorn&apos;s
            fabric for decades. By the 2010s, Powderhorn was one of the most
            diverse neighborhoods in a state that is, on the whole, very white
            — a place where diversity was not aspirational but simply the
            reality of who lived there.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Powderhorn Park">
        <Prose>
          <p>
            Powderhorn&apos;s identity is built on a paradox: it is a
            neighborhood that values community above almost everything else, and
            it is a neighborhood where deep disagreements about what community
            means are a permanent feature of daily life. The yard signs tell you
            something — they are everywhere, in multiple languages, advocating
            for immigrants&apos; rights, racial justice, queer liberation,
            climate action, housing for all. But the yard signs don&apos;t tell
            you everything. They don&apos;t tell you about the block club
            meetings where longtime homeowners and new renters argue about
            noise. They don&apos;t tell you about the tension between the
            neighbor who calls the police and the neighbor who doesn&apos;t
            believe in calling the police. They don&apos;t tell you that
            diversity, when it&apos;s real and not just a poster, is work.
          </p>
          <p>
            The physical landscape of the neighborhood is structured around the
            lake. Powderhorn Lake is small — just 11 acres — but it functions as
            the neighborhood&apos;s commons, the place where all the different
            communities overlap. On a summer evening, you will see Somali
            families barbecuing on the south shore, Latino teenagers playing
            soccer on the open field, white dog-walkers circling the path, a
            drum circle assembling near the pavilion, and someone fishing from
            the dock who might be any of the above. The lake doesn&apos;t ask
            for credentials. It is, in the most literal sense, common ground.
          </p>
          <p>
            The residential streets radiate outward from the park in a grid of
            tree-lined blocks — some immaculate, some rough around the edges,
            most somewhere in between. The housing stock is a mix of original
            Craftsman bungalows and Foursquares, duplexes and triplexes
            (many converted from single-family homes), some newer infill, and
            the occasional Victorian that someone has lovingly or haphazardly
            maintained. There are blocks that feel like the Minneapolis version
            of a Norman Rockwell painting and blocks that feel like they
            could use a coat of paint and a functioning streetlight. This
            variety is part of Powderhorn&apos;s charm, and also part of its
            challenge — the neighborhood&apos;s unevenness is honest, but
            it&apos;s not always comfortable.
          </p>
          <p>
            The arts community runs deep. Powderhorn has historically been one
            of the most affordable neighborhoods in the core city, and that
            affordability drew painters, puppeteers, musicians, poets, and
            theater-makers who couldn&apos;t afford Uptown or Northeast. Many of
            them didn&apos;t just live here — they organized, built institutions,
            created public art, and wove themselves into the civic fabric in
            ways that went far beyond making objects. In the Heart of the Beast
            is the most visible example, but the network extends to house
            shows, backyard studios, cooperative galleries, and the kind of
            informal creative economy that doesn&apos;t show up in arts
            funding reports. Some of this community has been priced out in
            recent years. Some of it remains. The tension between the two is
            one of Powderhorn&apos;s defining stories.
          </p>
          <p>
            The queer community has long found a home in Powderhorn — not
            because the neighborhood marketed itself that way, but because
            affordability, tolerance, and proximity to other queer-friendly
            spaces (the{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>{" "}
            and Phillips corridors) made it a natural landing place. There are
            rainbow flags on porches, queer-owned businesses along Lake Street,
            and a social infrastructure that is woven into the neighborhood
            rather than confined to a single strip or district.
          </p>
          <p>
            Politically, Powderhorn leans far left by Minneapolis standards,
            which is to say far left by almost any American standard. This is
            a neighborhood that voted overwhelmingly for the 2021 ballot
            measure to replace the Minneapolis Police Department with a
            Department of Public Safety. It is a neighborhood where
            abolitionist politics and mutual aid are not abstract concepts but
            organizing frameworks that shape how people respond to everything
            from crime to homelessness to snow removal. This political identity
            is genuine and deeply held — and it has also created real divisions,
            particularly since 2020, between residents who want systemic
            transformation and residents who just want their car to stop
            getting broken into.
          </p>
        </Prose>

        <Quote
          text="Powderhorn is the only neighborhood I've ever lived in where my Somali neighbor brings me sambusa, my next-door neighbor is building puppets in his garage for the parade, and we all argue about abolition at the block party. I wouldn't trade it for anything."
          cite="Powderhorn resident, neighborhood forum"
        />

        <ImageSlot
          src="/images/neighborhoods/powderhorn-park/lake-summer.webp"
          alt="Families gathered around Powderhorn Lake on a summer evening with picnic blankets and the park pavilion in the background"
          caption="Powderhorn Lake in summer — the neighborhood's front yard, shared by everyone"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Powderhorn Food, Drink & Local Spots">
        <Prose>
          <p>
            Powderhorn&apos;s food scene is not polished. It does not have a
            Michelin-adjacent restaurant or a cocktail bar with a velvet rope.
            What it has is something harder to manufacture and more worth
            celebrating: a constellation of immigrant-owned restaurants, family
            taquerias, East African cafes, corner bakeries, and neighborhood
            spots that serve genuinely excellent food at prices that
            don&apos;t require a second income. The food here is a direct
            expression of who lives here — diverse, affordable, unpretentious,
            and occasionally transcendent. You will eat better for less money
            in Powderhorn than in almost any other neighborhood in
            Minneapolis. The trade-off is that you&apos;ll have to find
            these places yourself, because most of them don&apos;t have
            Instagram accounts.
          </p>
        </Prose>

        <ArticleSubsection title="Lake Street Corridor">
          <Prose>
            <p>
              Lake Street — the commercial corridor that forms Powderhorn&apos;s
              northern boundary — is one of the most culturally diverse
              commercial streets in the Midwest. Through the Powderhorn
              stretch, the dominant flavors are Mexican and Central American,
              with taquerias, panaderias, and carnecerias that serve the
              neighborhood&apos;s large Latino community. This is not
              gentrified &quot;authentic Mexican&quot; — it&apos;s the real
              thing, priced for the people who depend on it.
            </p>
          </Prose>
          <PlaceCardComponent place={{ name: "Taqueria Los Ocampo", tag: "Mexican", price: "$", description: "Lake Street. A no-frills taqueria doing exactly what a taqueria should do — excellent tacos al pastor, carnitas, and barbacoa at prices that make you wonder how they stay in business. The kind of place where the tortillas are made fresh and the salsa verde could strip paint. Cash preferred. Lines on weekends are a quality indicator." }} />
          <PlaceCardComponent place={{ name: "Midtown Global Market", tag: "Multi-Ethnic Food Hall", price: "$–$$", url: "https://midtownglobalmarket.org", description: "920 East Lake Street. Located in the old Sears building at the intersection of Lake and Chicago, this multi-vendor food hall is one of the best things in Minneapolis. Over 40 vendors represent cuisines from around the world — Somali, Mexican, Vietnamese, Hmong, Peruvian, Scandinavian, and more. It's a community institution as much as a market, hosting events, providing affordable retail space for immigrant entrepreneurs, and serving as an informal neighborhood gathering place. If you eat at one place in Powderhorn, eat here." }} />
          <PlaceCardComponent place={{ name: "La Alborada", tag: "Guatemalan / Mexican", price: "$", description: "Lake Street corridor. Guatemalan and Mexican food in generous portions — tamales, pupusas, and huevos rancheros that will anchor your morning. The kind of restaurant where the owner's family is eating the same food you're ordering, which is always a good sign." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Bloomington Avenue & Beyond">
          <PlaceCardComponent place={{ name: "May Day Cafe", tag: "Cafe / Breakfast", price: "$", description: "3440 Bloomington Avenue South. Named for the parade that defines the neighborhood, May Day Cafe serves breakfast and lunch with an emphasis on local ingredients and community vibes. The huevos rancheros are excellent. The coffee is strong. The bulletin board by the door is an education in Powderhorn's political ecosystem." }} />
          <PlaceCardComponent place={{ name: "Soberfish", tag: "Thai / Pan-Asian", price: "$$", description: "3026 Bloomington Avenue South. A neighborhood Thai restaurant that has earned a loyal following for its curries, noodle dishes, and fresh rolls. The pad kra pao and green curry are standouts. BYOB-friendly atmosphere that feels like eating at a friend's house." }} />
          <PlaceCardComponent place={{ name: "In the Heart of the Beast Theatre", tag: "Cultural Institution", description: "1500 East Lake Street. Not a restaurant, but essential to any list of Powderhorn spots. HOBT is the puppet and mask theater that organizes the MayDay Parade and produces original theater work. The building also hosts workshops, community events, and the kind of creative programming that doesn't exist anywhere else in the city. HOBT has faced financial challenges and building issues in recent years, but its cultural importance to the neighborhood is beyond measure." }} />
        </ArticleSubsection>

        <ArticleSubsection title="East African & Somali Spots">
          <Prose>
            <p>
              Powderhorn&apos;s Somali and East African communities have
              established restaurants, tea shops, and grocery stores throughout
              the neighborhood, particularly along Lake Street and the blocks
              south of it. These places are community hubs as much as
              businesses — the Somali tea shops, in particular, function as
              informal gathering places where news is shared, deals are made,
              and the social fabric of the diaspora community is maintained.
              Many of these spots are modest in presentation and enormous in
              flavor — goat suqaar, sambusa, canjeero (Somali crepes), and
              sweet spiced tea that will recalibrate your morning. Explore
              with curiosity and respect. You will be rewarded.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Coffee, Drink & Night">
          <Prose>
            <p>
              Powderhorn is not a nightlife destination — the bar scene is
              modest compared to Uptown or Northeast — but it has its anchors.
              The neighborhood&apos;s coffee culture leans independent and
              community-oriented: May Day Cafe is the standout, and several
              smaller shops and bakeries serve the caffeine needs of a
              neighborhood that runs on organizing energy and late nights.
              For bars, the options skew dive-ish and unpretentious — the kind
              of places where the bartender knows your name and the jukebox
              hasn&apos;t been updated since the Obama administration. Club
              Jager, on the Lake Street end, and a handful of other spots
              provide options without pretension.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/powderhorn-park/lake-street.webp"
        alt="Lake Street commercial corridor near Powderhorn Park with diverse storefronts and pedestrians"
        caption="Lake Street through Powderhorn — one of the most diverse commercial corridors in the Midwest"
      />

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Powderhorn Park">
        <Prose>
          <p>
            Powderhorn&apos;s relationship with its park is more complicated
            than most neighborhoods&apos; relationship with their green space.
            The park is the neighborhood&apos;s soul — the commons, the parade
            ground, the gathering place, the site of joy and crisis and
            everything in between. It is also, since 2020, a place that
            carries a different kind of memory. Both things are true. The lake
            doesn&apos;t care about your politics. It freezes in winter and
            thaws in spring and reflects the sky regardless.
          </p>
        </Prose>

        <ArticleSubsection title="Powderhorn Lake & Park">
          <Prose>
            <p>
              Powderhorn Lake is an 11-acre glacial kettle lake at the center
              of a 66-acre park that has been public land since 1883. The park
              includes a paved walking and biking path around the lake (roughly
              three-quarters of a mile), a playground, a recreation center, a
              wading pool, basketball courts, open fields, a winter skating
              rink, and a pavilion that serves as the terminus of the MayDay
              Parade. The lake itself supports fishing (it&apos;s stocked) and
              ice fishing in winter, though it&apos;s not deep enough for
              swimming — wading only, and mostly by kids who don&apos;t care
              about the rules.
            </p>
            <p>
              On a summer weekend, Powderhorn Park is one of the most alive
              public spaces in Minneapolis. The diversity of the neighborhood
              shows up in concentrated form — families grilling, kids playing
              soccer, drummers drumming, people practicing tai chi, someone
              doing yoga, someone else reading a novel, all of it happening
              simultaneously without anyone needing to coordinate. The park
              hosts community events throughout the year — the MayDay Festival,
              National Night Out, neighborhood picnics, and informal gatherings
              that nobody organized but everyone attends.
            </p>
            <p>
              It would be dishonest to talk about Powderhorn Park without
              acknowledging the summer of 2020. Following the murder of George
              Floyd and the unrest that followed, a large homeless encampment
              formed in the park in June 2020. It grew to several hundred
              tents. Conditions were difficult. Sexual assaults and other
              violent incidents were reported within the encampment. Neighbors
              were deeply divided — some brought supplies and volunteered; others
              felt their park and their safety had been taken from them.
              The encampment was eventually cleared, but the experience
              reshaped how many residents relate to the park. By 2025–2026,
              usage has largely returned to normal, but the memory persists —
              particularly for families with young children who stopped using
              the park during that period. The park is beautiful and
              complicated. That is, in a sense, the most Powderhorn thing
              about it.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/powderhorn-park/park-winter.webp"
            alt="Powderhorn Lake in winter with ice skaters and snow-covered trees"
            caption="Powderhorn Lake freezes into a neighborhood skating rink each winter"
          />
        </ArticleSubsection>

        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway — the 5.5-mile grade-separated bike and
              pedestrian trail that runs east-west through South Minneapolis in
              a former railroad trench — passes along Powderhorn&apos;s northern
              edge near Lake Street. For Powderhorn residents, the Greenway is
              a commuting artery, a recreational trail, and a connection to the
              Chain of Lakes to the west and the Mississippi River to the east.
              It is plowed in winter, lit at night, and one of the most heavily
              used pieces of cycling infrastructure in the Upper Midwest. Access
              points near Lake Street and the Midtown Global Market make it
              easy to hop on from the neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Parks & Green Space">
          <Prose>
            <p>
              Beyond the namesake park, Powderhorn residents have access to
              several smaller parks and green spaces. The neighborhood is
              within easy biking distance of Minnehaha Regional Park and the
              Mississippi River gorge to the east, the Chain of Lakes to the
              northwest, and the many smaller Minneapolis parks that make the
              city&apos;s park system one of the best in the country. The
              Minneapolis Park Board&apos;s network of parkways — tree-lined
              boulevards designed for walking, biking, and driving at
              residential speed — connects many of these spaces, and
              Powderhorn is well-positioned within the system.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Powderhorn Park Schools">
        <Prose>
          <p>
            Schools in Powderhorn Park reflect the neighborhood&apos;s
            extraordinary diversity — and the systemic challenges that come
            with serving a student body that includes recent immigrants,
            English language learners, and families navigating poverty. Test
            scores are generally below city averages, which reflects
            socioeconomic context more than teaching quality. For families who
            value diversity, multilingual environments, and community
            connection, the schools here offer something that higher-scoring
            schools in more homogeneous neighborhoods cannot replicate.
          </p>
          <p>
            Andersen United Community School (PreK–8), at 1098 Andersen Lane,
            is the neighborhood&apos;s primary public school and one of the
            most diverse schools in the Minneapolis Public Schools system.
            Students come from dozens of countries and speak numerous home
            languages. The school has a strong community partnership model and
            offers wraparound services — a reflection of the reality that many
            families need support beyond academics. Andersen&apos;s test scores
            are below the city average, which is common for schools serving
            high-poverty, high-mobility populations. Families who prioritize
            diversity and community embeddedness tend to value what Andersen
            offers; families who prioritize test metrics may look elsewhere
            through the district&apos;s open enrollment system.
          </p>
          <p>
            South High School, located at 3131 19th Avenue South, serves
            Powderhorn for grades 9–12 and is one of the most diverse high
            schools in Minnesota. Students represent over 50 countries and
            speak more than 40 home languages. South offers an International
            Baccalaureate program, strong arts programming, and career and
            technical education pathways. The school has an engaged student
            body known for its activism — South students have been at the
            forefront of walkouts and advocacy campaigns on climate, gun
            violence, and racial justice. Test scores are mixed, but the
            school&apos;s breadth of programming and community culture make
            it a point of pride for many neighborhood families.
          </p>
          <p>
            Minneapolis Public Schools&apos; open enrollment system means
            Powderhorn families are not limited to neighborhood schools. Many
            families access magnet programs, language immersion schools, and
            specialty options across the district. Charter schools in the area
            provide additional choices. As in much of Minneapolis, the school
            landscape rewards families willing to research and navigate options
            — it is less automatic than the pipeline in Southwest neighborhoods
            like{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>{" "}
            or{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            , but it is far from devoid of good choices.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Powderhorn Park Real Estate & Housing">
        <Prose>
          <p>
            Powderhorn&apos;s housing market is one of the most interesting —
            and most contested — in Minneapolis. This is a neighborhood where
            you can still buy a house for under $300,000 within the city
            limits, a fact that draws first-time buyers, artists, young
            families, and investors in roughly equal measure. The affordability
            that has defined Powderhorn for decades is real but shrinking, and
            the question of who gets to live here as prices rise is one of the
            neighborhood&apos;s most active conversations.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              The dominant housing types are Craftsman bungalows and Foursquares
              from the 1900s–1920s, sitting on narrow lots with front porches,
              detached garages, and mature trees. At the lower end of the
              market ($200,000–$280,000), you&apos;re looking at smaller
              bungalows or duplexes that need work — deferred maintenance,
              older systems, cosmetic updates. The mid-range ($280,000–
              $375,000) gets you a well-maintained three-bedroom bungalow or a
              larger updated home with original character. Above $375,000,
              you&apos;re in renovated territory or looking at larger
              properties near the park.
            </p>
            <p>
              Duplexes and triplexes are more common here than in Southwest
              Minneapolis, reflecting Powderhorn&apos;s historically
              mixed-income character and its role as a rental neighborhood.
              Multi-family properties — particularly duplexes with an
              owner-occupied unit and a rental unit — are a popular strategy
              for buyers who want to offset their mortgage. The investor
              market is active, which creates tension: investor purchases can
              drive up prices while deferring maintenance in favor of cash flow.
            </p>
            <p>
              Victorian-era homes — some with beautiful original woodwork,
              stained glass, and wraparound porches — are scattered throughout
              the neighborhood, particularly on blocks closer to the park.
              These are the houses that make real estate photographers earn
              their money, and when they come on the market in good condition,
              they sell quickly.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Roughly 55 percent of Powderhorn&apos;s housing is
              renter-occupied, making it more balanced between owners and
              renters than heavily renter-dominated neighborhoods like Whittier
              but less owner-heavy than Southwest Minneapolis. One-bedroom
              apartments rent for $950–$1,300, significantly below the
              Uptown or North Loop average. Two-bedrooms run $1,200–$1,700.
              The rental stock is mostly in smaller buildings — duplexes,
              triplexes, converted houses — rather than large apartment
              complexes, which gives the neighborhood a different feel than
              the high-density corridors along Nicollet or Lyndale.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The 2020 Effect">
          <Prose>
            <p>
              The events of 2020 — the Floyd protests, the park encampment,
              the crime spike — created a visible dip in Powderhorn&apos;s
              real estate market. Some homeowners left. Some prospective buyers
              looked elsewhere. Prices softened briefly. By 2023–2024, the
              market had substantially recovered, and by 2025 prices were
              approaching or exceeding pre-2020 levels. The recovery has been
              uneven — blocks close to Lake Street or the park took longer to
              bounce back than quieter interior blocks. But the underlying
              demand drivers — affordability relative to the rest of the city,
              proximity to the Greenway and transit, the park, the community
              culture — have proven resilient.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We bought our bungalow in Powderhorn for what a garage costs in Linden Hills. It needed work, but so do we. This is where we can afford to build the life we actually want."
          cite="Powderhorn homeowner, 2024"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Powderhorn Park">
        <Prose>
          <p>
            Powderhorn is a solid transportation neighborhood — not quite at the
            walk-everywhere level of Whittier or the North Loop, but well above
            the car-dependent suburbs and significantly better than most of
            Minneapolis for human-powered and public transit. The Bike Score
            of 89 is the headline number: this is an outstanding biking
            neighborhood, with access to the Midtown Greenway and a network of
            bike lanes and low-traffic streets that make cycling the most
            practical mode for many errands and commutes.
          </p>
          <p>
            The Walk Score of 78 reflects a neighborhood that has good
            commercial access — Lake Street to the north, scattered businesses
            along Bloomington and Chicago Avenues — without the wall-to-wall
            retail density of Eat Street or downtown. You can walk to
            groceries, restaurants, and the park from most addresses, but some
            errands will take you outside the neighborhood. The Transit Score
            of 58 reflects decent but not exceptional bus service — Metro
            Transit routes run along Lake Street (the 21, one of the busiest
            routes in the system), Chicago Avenue, and Bloomington Avenue,
            connecting to downtown in 15–20 minutes. The Blue Line light rail
            runs along Hiawatha Avenue, roughly a mile east, with stations
            accessible by bike or bus transfer.
          </p>
          <p>
            By car, downtown Minneapolis is 10–15 minutes. MSP International
            Airport is 15–20 minutes via Highway 55 or I-35W. Street parking
            is generally available on residential blocks — this is not a
            neighborhood where you circle for a spot, unlike denser areas
            closer to downtown. The Midtown Greenway deserves emphasis: for
            residents who bike, it is a genuine piece of infrastructure that
            connects Powderhorn to the Chain of Lakes (west), the Mississippi
            River (east), Uptown, and downtown via connecting trails. Year-round
            commuters use it daily; it is plowed in winter and lit at night.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            No neighborhood in Minneapolis has been through more in the past
            six years than Powderhorn Park. That is not hyperbole. The murder
            of George Floyd happened at the neighborhood&apos;s border. The
            largest and most contentious homeless encampment in the city&apos;s
            history formed in its park. The crime spike hit its streets. The
            debates about policing, abolition, and public safety split its
            community down lines that haven&apos;t fully healed. And
            underneath all of it — quieter but no less consequential — the
            gentrification that was already underway before 2020 has continued,
            raising the question of whether the people who made Powderhorn
            what it is can afford to stay.
          </p>
        </Prose>

        <ArticleSubsection title="The 2020 Reckoning">
          <Prose>
            <p>
              On May 25, 2020, George Floyd was murdered by Minneapolis police
              officer Derek Chauvin at the intersection of 38th Street and
              Chicago Avenue — at the boundary of Powderhorn Park and the
              adjacent{" "}
              <Link href="/neighborhoods/central" className="text-[#2a9d8f] hover:underline">
                Central
              </Link>{" "}
              neighborhood. The intersection became George Floyd Square, a
              community memorial and autonomous space that remained barricaded
              for over a year. Powderhorn residents were among the first to
              gather there, to mourn, to protest, and to organize. The
              relationship between the neighborhood and the site has been
              intimate and complicated — it is close enough to walk to, close
              enough that the grief and the anger were not abstract but
              immediate.
            </p>
            <p>
              In the weeks that followed Floyd&apos;s murder, Minneapolis
              erupted. Lake Street — Powderhorn&apos;s commercial corridor —
              was damaged during the unrest. Businesses were burned or looted.
              The Midtown Global Market survived but many surrounding
              businesses did not. Powderhorn residents organized supply
              distribution, community patrols, and mutual aid at a speed and
              scale that surprised even longtime organizers. The community
              infrastructure that had been built over decades — the block
              clubs, the activist networks, the relationships across racial
              and cultural lines — proved its value in crisis.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Encampment">
          <Prose>
            <p>
              In June 2020, a homeless encampment began forming in Powderhorn
              Park. The Minneapolis Park Board, under pressure from activists
              who argued that clearing encampments during a pandemic and a
              racial justice uprising was unconscionable, initially chose not
              to remove it. The encampment grew rapidly — at its peak, several
              hundred tents occupied the park&apos;s south side. Conditions
              deteriorated. Reports of sexual assaults, drug use, fires, and
              other safety incidents emerged. National media descended.
            </p>
            <p>
              The encampment split Powderhorn in ways that have not fully
              mended. Some residents — often the most politically progressive —
              supported the encampment as a necessary response to a housing
              crisis, bringing supplies, volunteering, and advocating for
              services rather than removal. Others — including some long-term
              residents of color who had been advocating for safe parks for
              years — felt that their neighborhood had been sacrificed to a
              cause that prioritized ideology over the safety of the people
              who actually lived there. The divide did not fall neatly along
              racial or political lines, which made it even harder to resolve.
            </p>
            <p>
              The encampment was eventually cleared in late 2020, and
              residents were connected to varying degrees of shelter and
              housing. By 2025–2026, the park has substantially returned to
              its pre-2020 function — families use it, events happen, the lake
              freezes into a skating rink each winter. But the experience left
              scars on community trust that are still visible in the way
              neighbors talk about the park, about the Park Board, and about
              each other. The phrase &quot;the encampment&quot; carries a
              weight in Powderhorn that outsiders may not fully appreciate.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime rose sharply in Powderhorn — and across Minneapolis — in
              2020–2022. Carjackings, which had been relatively uncommon, spiked
              dramatically. Property crime — car break-ins, catalytic converter
              theft, package theft — became a near-constant irritant. Gun
              violence increased. The Minneapolis Police Department, already
              distrusted by many Powderhorn residents, lost hundreds of officers
              to attrition and retirements, reducing response times and
              visibility. The result was a period in which many residents felt
              genuinely unsafe — a feeling that was compounded by the political
              complexity of calling for more policing in a neighborhood that
              had just voted to reimagine policing entirely.
            </p>
            <p>
              By 2024–2025, most crime categories had declined from their
              peaks, though they remained elevated compared to pre-2020
              levels. The feeling of safety has improved meaningfully on most
              residential blocks. But Powderhorn&apos;s crime rates remain
              above the citywide average, and the neighborhood&apos;s
              relationship with law enforcement remains strained. Many
              residents have found a pragmatic middle ground — supporting
              systemic reform while also locking their doors and watching
              their bikes. This is not hypocrisy. It is what living in a
              complicated place actually looks like.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Gentrification and Displacement">
          <Prose>
            <p>
              The gentrification dynamic in Powderhorn is particularly bitter
              because it is self-inflicted — not by individuals, but by the
              same forces that make the neighborhood attractive in the first
              place. Artists moved here because it was cheap. They made art,
              built institutions, created community. Activists moved here
              because it was diverse and tolerant. They organized, built
              networks, made the neighborhood politically engaged. Together,
              these communities made Powderhorn culturally desirable — which
              attracted people with more money, which raised prices, which
              began to push out the artists and activists who created the
              desirability. This is not a Powderhorn-specific story — it is
              the story of Williamsburg, of the Mission, of East Austin, of
              every urban neighborhood that has been through this cycle. But
              it carries particular pain here because the community is so
              self-aware about it. People are watching themselves get priced
              out of the neighborhood they built, in real time, and the
              awareness doesn&apos;t change the economics.
            </p>
            <p>
              The impact falls unevenly. Latino families who have been on Lake
              Street for decades face rising rents. East African immigrants
              who settled here for the affordability find that affordability
              eroding. Artists who made Powderhorn culturally rich can no
              longer afford studios. Meanwhile, young professionals and
              homebuyers — often white, often with higher incomes than the
              neighbors they&apos;re joining — are drawn by the same diversity
              and community energy that they are, by their presence,
              potentially undermining. Nobody is the villain in this story.
              That&apos;s what makes it hard.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Homelessness and Visible Poverty">
          <Prose>
            <p>
              Powderhorn&apos;s proximity to social services, its relatively
              affordable commercial rents, and its political culture of
              tolerance have made visible homelessness a more persistent
              reality here than in most Minneapolis neighborhoods. The 2020
              encampment was the most extreme manifestation, but smaller
              encampments and individuals experiencing homelessness are a
              regular presence in and around the park, along Lake Street, and
              under freeway overpasses. Residents hold a range of views — from
              radical hospitality to deep frustration — and the conversation
              is ongoing and unresolved. What most agree on is that the
              current system is failing both housed and unhoused residents.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/powderhorn-park/mural.webp"
        alt="Colorful community mural on a building in the Powderhorn Park neighborhood"
        caption="Powderhorn's walls carry the neighborhood's stories — murals are community work, not decoration"
      />

      {/* FAQ */}
      <ArticleSection id="faq" title="Powderhorn Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
