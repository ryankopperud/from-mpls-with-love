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
    title: "Lowry Hill East (The Wedge), Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Lowry Hill East — The Wedge — in Minneapolis: dense urban living, Lyndale and Hennepin corridors, the Wedge Co-op, walkability, bike culture, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Lowry Hill East",
  deck: "Better known as The Wedge — the triangular sliver between Hennepin, Lyndale, and the freeway where Minneapolis packs more bikes, co-op members, and fourth-floor walk-up apartments per block than anywhere else in the state.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is The Wedge?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in The Wedge" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Lowry Hill East (The Wedge), Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$200K–$320K", label: "Median condo sale price (2025 data)" },
      { value: "$1,000–$1,800", label: "Typical 1BR apartment rent (2025)" },
      { value: "90", label: "Walk Score" },
      { value: "95", label: "Bike Score" },
      { value: "62", label: "Transit Score" },
      { value: "80%+", label: "Renter-occupied housing" },
      { value: "0.4 sq mi", label: "Neighborhood area" },
    ],
  },
  faq: [
    {
      question: "Why is Lowry Hill East called The Wedge?",
      answer:
        "The nickname comes from the neighborhood's triangular shape. Hennepin Avenue forms the western boundary, Lyndale Avenue the eastern boundary, and the two avenues converge as they run northeast toward downtown, with Interstate 94 and a line roughly along Franklin Avenue forming the northern edge. The resulting shape is a wedge — narrow at the top, wider at the bottom near Lake Street. The name has been in casual use since at least the 1970s and is far more commonly used than the official designation of Lowry Hill East.",
    },
    {
      question: "Is Lowry Hill East a good neighborhood to live in?",
      answer:
        "If you want walkability, bikeability, and urban density without the price tag of downtown, The Wedge is one of the best options in Minneapolis. It's young, progressive, well-connected to transit, and sits between two of the city's strongest commercial corridors. It's also loud on the arterials, parking-challenged, and dominated by rentals — which means more turnover and less of the block-party neighborliness you'd find in quieter residential areas. If you're under 40 and don't own a car, it's excellent. If you need a garage and a backyard, keep looking.",
    },
    {
      question: "Is The Wedge safe?",
      answer:
        "The Wedge's safety profile is about average for an urban Minneapolis neighborhood. Property crime — bike theft especially, given the number of bikes here — is a persistent reality. Car break-ins happen, particularly along the Hennepin and Lyndale corridors. Violent crime is lower than in some adjacent neighborhoods but higher than in southwest Minneapolis. The arterial streets feel busier and less predictable at night than the residential interior, which is generally quiet. Most residents feel comfortable walking the neighborhood at any hour, but common-sense awareness applies.",
    },
    {
      question: "What is the Wedge Co-op?",
      answer:
        "The Wedge Community Co-op, at 2105 Lyndale Avenue South, is one of the largest natural foods cooperatives in the United States. Founded in 1974, it grew out of the neighborhood's counterculture roots and now serves over 18,000 member-owners. The co-op sells organic produce, local meats, bulk goods, natural products, and an extensive cheese selection that rivals specialty shops. It's a grocery store, a community institution, and a political statement rolled into one — the bulletin board alone tells you everything about what this neighborhood values.",
    },
    {
      question: "How much does it cost to live in Lowry Hill East?",
      answer:
        "The Wedge is moderately affordable by central Minneapolis standards, though prices have risen. One-bedroom apartments typically rent for $1,000 to $1,800 per month depending on the building's age and amenities. Older walk-ups without in-unit laundry sit at the lower end; newer construction with rooftop decks and fitness centers pushes the upper range. Condos sell in the $150,000 to $350,000 range. Duplexes and small multi-family buildings trade for $350,000 to $650,000. True single-family homes are rare and command $350,000 to $550,000 when they appear.",
    },
    {
      question: "Is Lowry Hill East walkable?",
      answer:
        "Very. With a Walk Score of around 90, The Wedge is one of the most walkable neighborhoods in Minneapolis. Hennepin and Lyndale Avenues provide dense commercial corridors on both sides of the neighborhood, with grocery stores, restaurants, bars, coffee shops, and services all within a short walk. The interior residential streets are quieter but still within easy reach of both corridors. Many residents live here specifically because they can handle most daily needs on foot.",
    },
    {
      question: "What is the Walker Art Center?",
      answer:
        "The Walker Art Center, at 725 Vineland Place, sits just north of Lowry Hill East in the adjacent Lowry Hill neighborhood. It's one of the most respected contemporary art museums in the United States, with a permanent collection focused on modern and contemporary art, a cinema program, and a performing arts series. The adjacent Minneapolis Sculpture Garden — featuring Claes Oldenburg's iconic Spoonbridge and Cherry — is free and open daily. Together they form one of the defining cultural landmarks of Minneapolis, and their proximity is one of The Wedge's genuine advantages.",
    },
    {
      question: "Where exactly is Lowry Hill East in Minneapolis?",
      answer:
        "Lowry Hill East occupies a triangular area in south-central Minneapolis, bounded by Hennepin Avenue to the west, Lyndale Avenue to the east, and roughly by Interstate 94 and Franklin Avenue to the north. Lake Street and West Lake Street form the approximate southern boundary. The neighborhood sits between Lowry Hill and Kenwood to the west, Whittier to the east, and South Uptown to the south. Downtown Minneapolis is about a mile north.",
    },
    {
      question: "What are the best restaurants near The Wedge?",
      answer:
        "The Wedge benefits from sitting between two major restaurant corridors. On Lyndale: Tiny Diner (sustainable comfort food), the former CC Club space, and a rotating cast of newer establishments. On Hennepin: Bryant Lake Bowl (bowling, theater, brunch), Jungle Theater (not a restaurant, but the cultural anchor of the strip), and several bars and eateries. The Wedge Table, adjacent to the co-op, serves excellent prepared foods. And the proximity to Eat Street in Whittier and the Uptown dining scene means you're never more than a ten-minute walk from dozens of options.",
    },
    {
      question: "Is Lowry Hill East gentrifying?",
      answer:
        "Yes, though it's further along in the process than some neighboring areas. The Wedge was already gentrifying in the 2000s as young professionals moved in, attracted by the walkability and density that earlier generations of residents — students, artists, counterculture types — had established. New apartment construction along the corridors has accelerated the shift. Rents have risen, some older buildings have been replaced, and the neighborhood's demographics have shifted toward higher incomes and whiter populations compared to the 1990s. The co-op and some legacy businesses provide continuity, but the direction of change is unmistakable.",
    },
    {
      question: "Can I live in The Wedge without a car?",
      answer:
        "Absolutely, and many residents do. The Bike Score of 95 is among the highest in the city, the Walk Score of 90 means most errands can be done on foot, and bus routes on Hennepin, Lyndale, and Lake Street connect to downtown and the broader transit network. The Midtown Greenway, accessible at the southern edge, provides a car-free bike corridor across the city. Winter complicates things — as it does everywhere in Minneapolis — but dedicated cyclists ride year-round, and transit fills the gaps. A car is a convenience here, not a necessity.",
    },
  ],
  nearby: [
    { name: "Whittier", slug: "whittier", description: "Eat Street, the art museum, and the most diverse square mile in Minneapolis" },
    { name: "South Uptown", slug: "south-uptown", description: "Bars, restaurants, and Lake of the Isles access" },
    { name: "Lowry Hill", slug: "lowry-hill", description: "Grand homes, the Walker Art Center, and Kenwood Park" },
    { name: "East Isles", slug: "east-isles", description: "Lake of the Isles shoreline and quiet residential streets" },
    { name: "Stevens Square - Loring Heights", slug: "stevens-square-loring-heights", description: "High-density living at the edge of downtown" },
    { name: "Kenwood", slug: "kenwood", description: "Leafy, affluent, and bordering the Sculpture Garden" },
  ],
  closing: {
    title: "What Makes The Wedge Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis with better parking, bigger apartments, quieter streets, and fewer arguments at community meetings about whether a new four-story building constitutes an act of violence against the urban fabric. The Wedge is not competing with those neighborhoods, and the people who love it would not trade it for them. What it offers — genuine walkability, a food co-op that functions as a civic institution, the Sculpture Garden ten minutes north and the lakes fifteen minutes south, the ability to live a full urban life without ever starting a car — is rare in the Upper Midwest and getting rarer everywhere.",
      "The Wedge has real problems. The arterials are loud and sometimes feel unsafe after midnight. The parking will make you reconsider your relationship with your vehicle. The apartment walls are thin in the older buildings, and your neighbor&apos;s music taste will become your music taste whether you wanted it or not. But the people who thrive here thrive precisely because they chose density over space, community over privacy, and the chaos of a real urban neighborhood over the curated calm of something further out. The Wedge is Minneapolis at its most compressed and most alive — a place that proves you don&apos;t need a yard to put down roots.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Tuesday evening in June, a cyclist threads south on Bryant
          Avenue — no car, no helmet, one hand on the bars and the other holding
          a canvas bag from the Wedge Co-op. She turns onto a side street lined
          with three-story walk-ups and courtyard apartments, locks up at a rack
          that&apos;s already full, and disappears into a building that houses
          more people per square foot than most single-family blocks in Edina.
          Two doors down, someone is grilling on a shared patio the size of a
          parking space. Across the street, the bass line from a second-floor
          apartment is audible but not quite loud enough to complain about. A
          block east, Lyndale Avenue hums with restaurant noise and the
          particular energy of a commercial strip that never fully quiets down.
          A block west, Hennepin Avenue does the same. This is The Wedge — a
          neighborhood shaped like its name, compressed between two of
          Minneapolis&apos;s busiest corridors, and somehow one of the most
          deliberately chosen places to live in the city.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/lowry-hill-east/hero.webp"
        alt="Residential street in Lowry Hill East (The Wedge) neighborhood of Minneapolis with dense apartment buildings and tree-lined sidewalks"
        caption="The Wedge — dense, tree-lined, and louder than it looks"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Lowry Hill East (The Wedge)?">
        <Prose>
          <p>
            Lowry Hill East — universally known as The Wedge — is a small,
            densely populated neighborhood in south-central Minneapolis, shaped
            by the triangular convergence of Hennepin Avenue to the west and
            Lyndale Avenue to the east, with Interstate 94 and Franklin Avenue
            forming the approximate northern boundary and Lake Street marking
            the south. At roughly 0.4 square miles, it is one of the smallest
            officially designated neighborhoods in the city. It is also one of
            the most densely packed — approximately 6,500 people live here,
            the vast majority of them renters, giving it a population density
            that rivals anything in the metro area outside of downtown.
          </p>
          <p>
            The neighborhood&apos;s defining characteristics are its walkability,
            its bike culture, and the fact that it sits between two of
            Minneapolis&apos;s strongest commercial corridors without being
            overwhelmed by either of them. The interior streets — Bryant,
            Aldrich, Garfield, Harriet — are surprisingly residential and
            tree-lined for a neighborhood this dense, creating a contrast
            with the arterial noise that is one of The Wedge&apos;s recurring
            themes. It is young, progressive, overwhelmingly renter-occupied,
            and home to the Wedge Community Co-op, which is both a grocery
            store and something closer to a neighborhood religion.
          </p>
          <p>
            The Wedge sits directly south of the Walker Art Center and
            Minneapolis Sculpture Garden, west of{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>
            , and north of{" "}
            <Link href="/neighborhoods/south-uptown" className="text-[#2a9d8f] hover:underline">
              South Uptown
            </Link>
            . Downtown is about a mile north. The Chain of Lakes is a
            fifteen-minute bike ride west. If you drew a circle around the
            geographic center of everything that makes Minneapolis Minneapolis,
            The Wedge would be inside it.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Lowry Hill East Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/lowry-hill-east/neighborhood-sign.webp"
          alt="Lowry Hill East neighborhood sign in Minneapolis"
          caption="The Lowry Hill East neighborhood sign — though most residents just call it The Wedge"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Lowry Hill East History & Origins">
        <Prose>
          <p>
            The land that became Lowry Hill East was, like all of Minneapolis,
            part of the homeland of the Dakota people — the Wahpekute and
            Mdewakanton bands who lived, hunted, and gathered across the
            prairies and woodlands surrounding the Chain of Lakes and the
            Mississippi River for centuries before European settlement. The
            lakes to the west and the river to the east were not recreational
            amenities but the organizing features of a lived landscape. That
            history predates everything that follows and should not be treated
            as a footnote.
          </p>
          <p>
            The neighborhood takes its official name from Lowry Hill, the
            prominent rise to the northwest named for Thomas Lowry, the
            streetcar magnate whose transit empire helped shape Minneapolis&apos;s
            early geography. &ldquo;Lowry Hill East&rdquo; was the bureaucratic
            designation that stuck — the eastern, downhill, less wealthy side of
            the Lowry Hill area. The &ldquo;Wedge&rdquo; nickname emerged later,
            an act of geographic self-awareness: residents looked at a map,
            noticed the triangular shape between Hennepin and Lyndale, and
            named it what it was.
          </p>
          <p>
            Development in the late 19th and early 20th centuries filled the
            triangle with the housing stock that still largely defines it:
            walk-up apartment buildings, duplexes, fourplexes, and modest
            single-family homes built for the clerks, shopkeepers, and
            tradespeople who worked in the commercial districts along Hennepin
            and Lyndale or commuted downtown via Lowry&apos;s streetcar lines.
            The architecture was practical rather than grand — this was never
            the wealthy side of Lowry Hill — and the density was baked in from
            the beginning. The Wedge was built for people who didn&apos;t have
            carriages and needed to walk to the streetcar stop.
          </p>
          <p>
            The mid-20th century brought the familiar arc of American urban
            neighborhoods: suburban flight, declining population, deferred
            maintenance, rising crime. The construction of Interstate 94 in the
            1960s carved through the neighborhood&apos;s northern edge,
            demolishing homes and severing connections to the Loring Park area
            and downtown. The freeway brought noise, pollution, and the
            particular psychic weight of living next to a concrete river of
            traffic that treats your neighborhood as something to pass through
            rather than arrive at.
          </p>
          <p>
            But the same forces that hollowed out The Wedge also created the
            conditions for its reinvention. Low rents in the 1960s and 1970s
            attracted students, artists, and counterculture types — the kind
            of people who start food co-ops and ride bicycles before either is
            fashionable. The Wedge Community Co-op was founded in 1974, born
            out of the same cooperative movement that produced the North Country
            Co-op and other Twin Cities food cooperatives. It began as a buying
            club and grew into one of the largest natural foods co-ops in the
            country, anchoring both the neighborhood&apos;s commercial life and
            its identity.
          </p>
          <p>
            By the 1990s and 2000s, The Wedge was gentrifying — slowly at first,
            then unmistakably. Young professionals discovered what the students
            and co-op members already knew: this was one of the most walkable,
            bikeable, well-located neighborhoods in Minneapolis, and the rents
            were still reasonable. New apartment construction began along the
            corridors. The demographic center of gravity shifted from
            counterculture to young professional, though the co-op and the
            bike culture remained as through-lines connecting the old Wedge to
            the new one.
          </p>
        </Prose>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/lowry-hill-east/streetscape.webp"
        alt="Tree-lined residential street with apartment buildings and duplexes in Lowry Hill East, Minneapolis"
        caption="The interior streets are quieter than you'd expect — tree-lined blocks between two busy corridors"
      />

      {/* Character */}
      <ArticleSection id="character" title="Living in The Wedge">
        <Prose>
          <p>
            The first thing you notice about The Wedge is the bikes. They are
            locked to every available surface — racks, sign posts, fence rails,
            each other. They lean against apartment building walls in various
            states of repair and ambition, from $3,000 road bikes to
            spray-painted fixies held together by optimism and electrical tape.
            The Bike Score of 95 is not an abstraction here; it is a way of
            life. More people commute by bicycle from The Wedge than from
            almost any other neighborhood in Minneapolis, and the culture
            around it — the bike shops, the winter riding, the gentle
            evangelism — is one of the neighborhood&apos;s most distinctive
            features.
          </p>
          <p>
            The physical texture of The Wedge is dense and layered. The
            residential interior is dominated by three-story walk-up apartment
            buildings from the 1920s and 1930s, interspersed with duplexes,
            fourplexes, and the occasional surviving single-family home that
            looks slightly bewildered by its surroundings. Newer four- and
            five-story apartment buildings have gone up along Hennepin and
            Lyndale, adding density to streets that were already dense. The
            result is a neighborhood where the built environment is never
            uniform — you turn a corner and the era shifts, the scale changes,
            and the setback adjusts. It is visually more interesting than
            beautiful, which is a compliment.
          </p>
          <p>
            The demographics skew young, white, and educated — a shift from
            the more diverse population of earlier decades. The median age is
            well below the city average. The neighborhood is overwhelmingly
            renter-occupied — over 80 percent of housing units — which gives it
            a transient quality that some find liberating and others find
            lonely. People move in for a year or two, move out when they
            couple up or have kids or want more space, and are replaced by
            the next wave of twentysomethings who want the same things they
            did: walkability, cheap rent (relatively), and proximity to
            everything without having to drive.
          </p>
          <p>
            The political culture is progressive in a way that is both genuine
            and occasionally performative. The co-op bulletin board is a
            reliable barometer: community land trust meetings, mutual aid
            requests, bike advocacy events, composting workshops, and the
            occasional flyer for a cause so niche it could only exist in a
            neighborhood where earnestness is a core value. The Wedge takes
            itself seriously about the things it cares about — sustainability,
            transportation, food systems, housing policy — and that seriousness
            is part of its character, even when it tips into self-parody.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>{" "}
            to the east shares some of The Wedge&apos;s density and youthful
            energy but is significantly more diverse and more commercially
            defined by Eat Street. The{" "}
            <Link href="/neighborhoods/lowry-hill" className="text-[#2a9d8f] hover:underline">
              Lowry Hill
            </Link>{" "}
            neighborhood to the northwest is wealthier and quieter — grand
            homes around the Walker Art Center — and the contrast across
            Hennepin Avenue between the two neighborhoods is one of the
            sharpest class gradients in Minneapolis.
          </p>
        </Prose>
        <Quote
          text="I moved to The Wedge because I could bike to work, walk to groceries, and never think about parking. Five years later I still don&apos;t own a car. That&apos;s the whole pitch."
          cite="Lowry Hill East resident, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="The Wedge Food, Drink & Local Spots">
        <Prose>
          <p>
            The Wedge doesn&apos;t have its own iconic food corridor the way
            Whittier has Eat Street — but it doesn&apos;t need one, because it
            sits between two of them. Lyndale Avenue on the east and Hennepin
            Avenue on the west both carry strong restaurant and bar scenes
            through and adjacent to the neighborhood, and the Wedge Co-op
            itself functions as a culinary institution in its own right. The
            dining here trends toward the creative and the sustainable, with
            a healthy dose of bar food and late-night options mixed in. You
            won&apos;t find the global range of Eat Street, but you&apos;ll
            find places that care deeply about where their ingredients come
            from — sometimes more than is strictly necessary.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/lowry-hill-east/lyndale-ave.webp"
          alt="Lyndale Avenue commercial corridor near Lowry Hill East with restaurant signs and pedestrians"
          caption="Lyndale Avenue — one of two commercial spines that define life in The Wedge"
        />

        <ArticleSubsection title="Neighborhood Institutions">
          <PlaceCardComponent place={{ name: "Wedge Community Co-op", tag: "Co-op / Grocery", description: "2105 Lyndale Ave. S. More than a grocery store. The Wedge is one of the largest natural foods cooperatives in the country, founded in 1974 and now serving over 18,000 member-owners. The produce is local and organic when possible, the cheese section is genuinely excellent, the bulk aisle is a lifestyle commitment, and the bulletin board near the entrance is the neighborhood's unofficial town square. The adjacent Wedge Table serves prepared foods — sandwiches, salads, hot bar — for takeout or sidewalk eating." }} />
          <PlaceCardComponent place={{ name: "Bryant Lake Bowl", tag: "Bowling / Theater / Brunch", price: "$–$$", url: "https://bryantlakebowl.com", description: "810 W. Lake St. Part bowling alley, part restaurant, part black-box theater — a combination that shouldn't work but has been working since 1993. The brunch is solid, the bowling is charmingly old-school (eight lanes, manual scoring for years before they relented), and the theater hosts fringe performances, comedy, and community events. BLB is The Wedge in miniature: eclectic, slightly chaotic, and doing several things at once with more enthusiasm than polish." }} />
          <PlaceCardComponent place={{ name: "Tiny Diner", tag: "Sustainable American", price: "$$", url: "https://tinydiner.com", description: "1024 E. 38th St. (technically in Standish, but the Lyndale-adjacent original lives in Wedge lore). Tiny Diner sources from local farms with genuine rigor — the rooftop garden, the composting program, and the seasonal menu aren't marketing; they're the business model. The food is comfort-forward — burgers, fries, mac and cheese — elevated by better ingredients and a kitchen that cares. The patio is one of the best in south Minneapolis on a summer evening." }} />
          <PlaceCardComponent place={{ name: "CC Club", tag: "Dive Bar", price: "$", description: "2600 Lyndale Ave. S. A Minneapolis dive bar institution since 1969, CC Club has the kind of patina that cannot be manufactured — the wood is dark, the jukebox is serious, and the crowd ranges from old-timers nursing a beer to first-daters who wanted somewhere unpretentious. The burgers are better than they need to be. The happy hour is one of the best deals in the neighborhood. It's a bar that knows exactly what it is and has never tried to be anything else." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Hennepin Avenue Corridor">
          <PlaceCardComponent place={{ name: "Jungle Theater", tag: "Theater", url: "https://jungletheater.org", description: "2951 Lyndale Ave. S. (on Lyndale, but culturally part of the Hennepin-Lyndale ecosystem). Not a restaurant or a bar, but the Jungle is a neighborhood cultural anchor — a 150-seat theater producing intimate, high-quality productions since 1991. It's the kind of institution that makes a neighborhood more than a collection of apartments and commercial space. Check the season calendar." }} />
          <PlaceCardComponent place={{ name: "Brave New Workshop", tag: "Comedy / Improv", price: "$$", url: "https://bravenewworkshop.com", description: "824 Hennepin Ave. (just north of The Wedge in downtown, but historically connected to the neighborhood's creative DNA). The oldest satirical comedy theater in the country, founded in 1958. The improv shows and original revues are a Minneapolis tradition, and alumni have gone on to national careers. Saturday night shows sell out — book ahead." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Coffee & Drink">
          <Prose>
            <p>
              The Wedge and its immediate surroundings are well-supplied with
              caffeine. Spyhouse Coffee has a location on Hennepin that draws
              the laptop crowd and the pour-over devotees. Muddy Waters, on
              Lyndale, has been a neighborhood fixture for years — darker,
              scruffier, more willing to let you sit for three hours without
              buying a second drink. For beer, Lyndale Tap House and a handful
              of bars along Hennepin serve the after-work and weekend crowd. For
              cocktails, the options multiply as you move south toward Lake
              Street and the{" "}
              <Link href="/neighborhoods/south-uptown" className="text-[#2a9d8f] hover:underline">
                South Uptown
              </Link>{" "}
              bar scene.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near The Wedge">
        <Prose>
          <p>
            The Wedge is not a parks neighborhood in the classic Minneapolis
            sense — it doesn&apos;t have lakefront, and its green spaces are
            modest in scale. But what it lacks in acreage it compensates for
            in proximity to some of the city&apos;s most significant cultural
            and recreational assets. The Walker Art Center and Sculpture Garden
            are a ten-minute walk north. The Chain of Lakes is a fifteen-minute
            bike ride west. And the neighborhood&apos;s own parks, while small,
            serve the dense population well.
          </p>
        </Prose>

        <ArticleSubsection title="Minneapolis Sculpture Garden & Walker Art Center">
          <Prose>
            <p>
              The Minneapolis Sculpture Garden — eleven acres of outdoor
              sculpture including Claes Oldenburg and Coosje van Bruggen&apos;s
              iconic Spoonbridge and Cherry — sits just north of The Wedge at
              the base of Lowry Hill. It is free and open daily, which makes it
              something close to The Wedge&apos;s front yard. On summer
              evenings and weekend mornings, residents walk or bike through the
              garden the way other neighborhoods use their parks — casually,
              routinely, as part of the texture of daily life.
            </p>
            <p>
              The Walker Art Center, adjacent to the garden, is one of the top
              contemporary art museums in the country — exhibitions of modern
              and contemporary art, a strong film program, performing arts, and
              a permanent collection that ranges from Andy Warhol to Kara
              Walker. Unlike Mia in{" "}
              <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
                Whittier
              </Link>
              , the Walker charges admission for its galleries, but the
              Sculpture Garden remains free and is arguably the more beloved
              civic asset.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/lowry-hill-east/sculpture-garden.webp"
            alt="Spoonbridge and Cherry sculpture in the Minneapolis Sculpture Garden near Lowry Hill East"
            caption="The Sculpture Garden — The Wedge's front yard and Minneapolis's most photographed landmark"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Bryant Square Park">
          <Prose>
            <p>
              Bryant Square Park, at 31st Street and Bryant Avenue South, is
              The Wedge&apos;s primary neighborhood park — a compact green space
              with a playground, basketball courts, a wading pool, and a
              recreation center that hosts community programming year-round.
              It&apos;s a neighborhood park in the most literal sense: heavily
              used by the surrounding apartment dwellers who don&apos;t have
              backyards, and serving as one of the few open-air gathering spaces
              in a neighborhood where shared outdoor space is scarce. Summer
              evenings bring pickup basketball, families at the playground, and
              the occasional informal gathering that spills from a nearby
              apartment&apos;s too-small patio.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Kenwood Park & the Lagoon">
          <Prose>
            <p>
              Just west of Hennepin Avenue, Kenwood Park and the Lake of the
              Isles lagoon system are within easy biking distance. Lake of the
              Isles itself — with its 2.8-mile walking and biking trail — is
              one of the most scenic urban lakes in the country, and Wedge
              residents access it frequently enough to consider it part of their
              neighborhood even though it technically belongs to{" "}
              <Link href="/neighborhoods/east-isles" className="text-[#2a9d8f] hover:underline">
                East Isles
              </Link>{" "}
              and{" "}
              <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
                Kenwood
              </Link>
              . The mental map of The Wedge extends well beyond its official
              boundaries, which is part of why living in a 0.4-square-mile
              triangle doesn&apos;t feel confining.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway — a 5.5-mile paved bike and pedestrian trail
              built in a below-grade former rail corridor — runs along the
              southern edge of The Wedge near Lake Street. It connects the Chain
              of Lakes to the west with the Mississippi River to the east, and
              it is one of the most heavily used bike commuter routes in
              Minneapolis. For Wedge residents, the Greenway is how you get to
              the lakes, how you commute east to the U of M, and how you avoid
              car traffic on days when Hennepin and Lyndale are doing their
              worst. It is, along with the co-op, one of the pieces of
              infrastructure that makes car-free living genuinely feasible here.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="The Wedge Schools">
        <Prose>
          <p>
            Schools are not the first thing most Wedge residents think about,
            which tells you something about the neighborhood&apos;s
            demographics. The population skews young and childless — singles,
            couples, roommates — and families with school-age children are a
            relatively small share of the community. That said, schools exist
            and serve the families who are here.
          </p>
          <p>
            Kenwood Elementary School, located just west of the neighborhood
            in the adjacent Kenwood/Lowry Hill area, is the primary public
            elementary option and one of the higher-performing schools in the
            Minneapolis Public Schools system. It benefits from a relatively
            affluent parent community and strong PTA involvement. Whittier
            International Elementary, in{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>{" "}
            to the east, is another option, serving a more diverse student
            body with multilingual programming.
          </p>
          <p>
            For middle school, students typically attend Anwatin Middle School
            or other Minneapolis Public Schools options through the
            district&apos;s open enrollment system. South High School and
            Southwest High School are the comprehensive high schools serving
            this area, depending on enrollment patterns. Minneapolis&apos;s
            magnet and charter school systems provide additional options for
            families willing to look beyond the immediate neighborhood.
          </p>
          <p>
            The honest truth is that The Wedge is a neighborhood most families
            move into before they have children and move out of once they do —
            not because the schools are bad, but because the housing stock
            (small apartments, limited outdoor space) and the density don&apos;t
            suit the practical realities of raising kids. Families who stay
            tend to be deliberately urban, committed to the neighborhood&apos;s
            values, and willing to make trade-offs that most suburban parents
            would not consider.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="The Wedge Real Estate & Housing">
        <Prose>
          <p>
            If you are looking for a single-family home with a two-car garage,
            The Wedge is not your neighborhood. If you are looking for a dense,
            walkable, urban living situation dominated by apartments and the
            particular freedoms and compromises that come with renting — this
            is one of the best places in Minneapolis to find it.
          </p>
        </Prose>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Over 80 percent of The Wedge&apos;s housing units are
              renter-occupied, making it one of the most renter-heavy
              neighborhoods in the city. One-bedroom apartments rent for
              $1,000 to $1,800 per month as of 2025. The range is wide because
              the housing stock is varied: an unrenovated one-bedroom in a
              1920s walk-up without in-unit laundry might still be found at the
              lower end, while a newer unit in one of the recently built
              mixed-use buildings on Lyndale or Hennepin — with modern
              appliances, a rooftop deck, and a fitness center — will push
              toward $1,800 or beyond. Two-bedrooms run $1,400 to $2,200.
            </p>
            <p>
              Turnover is high. The tenant population is young and mobile, and
              August and September — when leases turn over in the university
              cycle — bring a wave of moving trucks through streets not designed
              for moving trucks. This transience is both a feature and a bug:
              it keeps the neighborhood dynamic and keeps rents somewhat
              competitive, but it also makes it harder to build the kind of
              long-term neighbor relationships that define more stable
              residential areas.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Buying in The Wedge">
          <Prose>
            <p>
              The ownership market is small but functional. Condos dominate the
              for-sale inventory, typically selling in the $150,000 to $350,000
              range — among the more affordable entry points for homeownership
              in central Minneapolis. Many are conversions in older apartment
              buildings, offering character (hardwood floors, built-in
              bookshelves, arched doorways) but also the quirks of aged
              construction (uneven floors, galley kitchens, radiator heat that
              is either too much or not enough).
            </p>
            <p>
              Duplexes and fourplexes trade in the $350,000 to $650,000 range,
              often purchased by small-scale investors or owner-occupants who
              live in one unit and rent the others — a model that has worked in
              this neighborhood for a century. True single-family homes are
              rare, and when they appear, they sell in the $350,000 to $550,000
              range depending on condition and lot size. They are curiosities
              in The Wedge — relics of a less dense era, surrounded by
              apartment buildings that dwarf them.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="New Development">
          <Prose>
            <p>
              New construction has been concentrated along the Hennepin and
              Lyndale corridors — four- and five-story mixed-use buildings with
              ground-floor retail and market-rate apartments above. These
              buildings have added housing supply, which is needed, and
              ground-level commercial space, which is welcome. They have also
              changed the physical scale of streets that were previously
              lower-rise, and the architectural quality of the new construction
              is, to be diplomatic, inconsistent. Some of the newer buildings
              are thoughtfully designed; others look like they were extruded
              from a developer&apos;s spreadsheet. The 2040 Plan has enabled
              more of this development, and the pipeline suggests more is
              coming.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="The apartments are small, the walls are thin, and I can hear my neighbor&apos;s cat at 3 a.m. But I walk to everything, I bike to work, and my rent is half what my friends pay downtown. I&apos;ll take it." cite="Lowry Hill East renter, community forum" />
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/lowry-hill-east/apartments.webp"
        alt="Mix of older walk-up apartments and newer construction in Lowry Hill East, Minneapolis"
        caption="Old walk-ups and new mixed-use — The Wedge's housing stock is layered, not uniform"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around The Wedge">
        <Prose>
          <p>
            Getting around The Wedge is, in many ways, the neighborhood&apos;s
            strongest selling point. The Walk Score of 90 and Bike Score of 95
            are not marketing numbers — they reflect a genuinely walkable and
            bikeable neighborhood where car-free living is not a sacrifice but
            a rational choice. Both Hennepin and Lyndale carry bus routes
            connecting to downtown in about ten minutes, and the Lake Street
            corridor provides east-west bus service. The Transit Score of 62
            is solid by Minneapolis standards, though it doesn&apos;t reach
            the levels you&apos;d find along the light rail corridors.
          </p>
          <p>
            Cycling infrastructure is strong and getting stronger. Bike lanes
            serve several streets through and adjacent to the neighborhood, and
            the Midtown Greenway at the southern edge provides a car-free
            commuter route that connects to the Chain of Lakes, the U of M
            campus, and the Mississippi River trail system. In The Wedge, bikes
            are not a lifestyle accessory — they are transportation. Winter
            riding is common, aided by the city&apos;s expanding protected bike
            lane network and the stubbornness of Minneapolis cyclists who
            refuse to acknowledge that it&apos;s negative ten.
          </p>
          <p>
            Driving is the weak link, but that&apos;s by design — or at least
            by consequence. The neighborhood&apos;s density and narrow streets
            make parking competitive, especially in the evenings when residents
            are home and restaurant-goers fill the corridor spots. Most
            apartment buildings include some off-street parking, but not always
            enough, and street parking in winter involves the uniquely
            Minneapolis ritual of digging out a spot and then watching someone
            else take it. If you own a car in The Wedge, you will develop a
            complicated relationship with it. If you don&apos;t own one,
            you&apos;ll occasionally need to rent one for IKEA runs and
            airport trips — but those occasions are rarer than most people
            expect.
          </p>
          <p>
            Interstate 94 borders the neighborhood to the north, providing
            quick freeway access to downtown (five minutes), the airport
            (fifteen to twenty minutes), and the western suburbs. The proximity
            is a transportation asset and a livability cost — the freeway noise
            and pollution are real, particularly for residents of buildings
            along the northern edge.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            The Wedge is a neighborhood that has been changing for decades —
            from working-class to counterculture, from counterculture to
            young professional, from affordable to less affordable — and the
            current chapter is a continuation of that trajectory rather than
            a break from it. The tensions here are real, and they are worth
            naming.
          </p>
        </Prose>

        <ArticleSubsection title="Density and Development Battles">
          <Prose>
            <p>
              The Wedge is already one of the densest neighborhoods in
              Minneapolis, and new development is making it denser. This is, in
              theory, what urbanist policy recommends: add housing in walkable,
              transit-served locations to reduce sprawl and moderate rents. In
              practice, every new four-story building on Lyndale or Hennepin
              triggers a fight — about parking, about shadows, about scale,
              about who the new units are for. Long-term residents who chose
              The Wedge when it was scrappy and affordable now watch it become
              polished and expensive, and the irony is not lost on them: the
              density they valued is being used to justify more density that
              serves a different economic class.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Parking and Cars">
          <Prose>
            <p>
              Parking in The Wedge is a perpetual source of friction. The
              neighborhood was built before car ownership was universal, and the
              streets and buildings reflect that history. As density has
              increased — more residents, more restaurant patrons, more
              delivery vehicles — the parking supply has not kept pace. New
              buildings often include less parking than older residents think
              they should, reflecting a policy choice (encourage transit and
              cycling) that doesn&apos;t align with the reality that many
              residents still own cars. Snow emergencies — when the city plows
              streets and requires cars to move — add a seasonal layer of
              chaos. The parking fight is, in miniature, a fight about what
              kind of neighborhood The Wedge wants to be.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Noise and the Arterials">
          <Prose>
            <p>
              Living between Hennepin and Lyndale means living between two of
              Minneapolis&apos;s busiest and loudest streets. Traffic, bar
              crowds, emergency vehicles, and the general hum of commercial
              corridors are the sonic backdrop of The Wedge. The interior
              streets are genuinely quieter, but if your apartment faces either
              arterial — especially on a Friday or Saturday night — you will
              need earplugs or thick windows or the ability to treat ambient
              noise as white noise. Interstate 94 adds a constant low drone
              along the northern edge that is easy to forget about until you
              visit a neighborhood that doesn&apos;t have a freeway next door.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Gentrification and Identity">
          <Prose>
            <p>
              The Wedge&apos;s counterculture roots — the co-op, the bike
              activism, the leftist politics — are still visible, but they sit
              increasingly alongside a young professional population that
              values the same walkability and density for different reasons. The
              person buying organic kale at the co-op might be doing it out of
              a 40-year commitment to food sovereignty, or because they read an
              article about gut health on their phone while waiting for their
              $6 oat milk latte. Both are valid; neither is going anywhere. But
              the tension between The Wedge as a place with a political identity
              and The Wedge as a lifestyle product is real, and it shows up in
              community meetings, in co-op governance debates, and in the quiet
              resentment of old-timers who remember when this neighborhood was
              weirder and cheaper and more genuinely itself.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Safety Concerns">
          <Prose>
            <p>
              Crime in The Wedge is not as severe as in some adjacent
              neighborhoods, but it&apos;s not suburban either. Bike theft is
              endemic — lock it well or lose it. Car break-ins along the
              corridors happen regularly. The Hennepin and Lyndale corridors
              can feel unpredictable late at night, particularly near certain
              intersections. The post-2020 period saw increased concerns about
              public safety citywide, and The Wedge was not exempt. Things have
              stabilized, but the conversation about what &ldquo;safe
              enough&rdquo; means in a dense urban neighborhood continues —
              as it does across Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Lowry Hill East (The Wedge) FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
