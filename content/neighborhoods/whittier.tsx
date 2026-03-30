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
    title: "Whittier, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Whittier, Minneapolis — Eat Street restaurants, the Minneapolis Institute of Art, apartments, diversity, walkability, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Whittier",
  deck: "The most diverse square mile in Minneapolis — where Eat Street feeds you the world on a single avenue, the Minneapolis Institute of Art is free and always has been, and a dozen languages drift through the aisles of every corner store.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Whittier?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Whittier" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Whittier, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~15,000", label: "Residents (US Census / ACS estimates)" },
      { value: "$230K–$300K", label: "Median condo/home sale price (2025 data)" },
      { value: "$1,100–$1,500", label: "Typical 1BR apartment rent (2025)" },
      { value: "93", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
      { value: "64", label: "Transit Score" },
      { value: "70%+", label: "Renter-occupied housing" },
      { value: "100+", label: "Restaurants within neighborhood boundaries" },
    ],
  },
  faq: [
    {
      question: "Is Whittier a good neighborhood in Minneapolis?",
      answer:
        "It depends on what you value. Whittier is one of the most walkable, diverse, and culturally rich neighborhoods in Minneapolis. It has world-class dining on Eat Street, free access to the Minneapolis Institute of Art, and excellent transit connections. It's also dense, loud in places, and has higher crime rates than southwest Minneapolis neighborhoods. If you want urban energy, cultural variety, and don't need a big yard, Whittier is outstanding. If you want quiet residential streets and easy parking, look elsewhere.",
    },
    {
      question: "Is Whittier, Minneapolis safe?",
      answer:
        "Whittier's safety profile is mixed. Property crime — car break-ins, bike theft, package theft — is a regular reality. Violent crime is higher than the city average, concentrated in certain blocks and often connected to specific circumstances rather than random targeting. Many residents live here for years without incident, but situational awareness matters more here than in quieter neighborhoods. The Whittier Alliance and community organizations are active in safety initiatives.",
    },
    {
      question: "What is Eat Street in Minneapolis?",
      answer:
        "Eat Street is the local name for the stretch of Nicollet Avenue running roughly from Grant Street south to 29th Street, passing through Whittier. It's one of the most diverse restaurant corridors in the Midwest, with Vietnamese, Somali, Mexican, Ethiopian, Thai, Japanese, Chinese, Indian, and American restaurants packed together over about a mile. The name was coined in the 1990s to celebrate the corridor's food culture.",
    },
    {
      question: "How much does it cost to live in Whittier, Minneapolis?",
      answer:
        "Whittier is one of the more affordable inner-city neighborhoods in Minneapolis, though prices have been rising. One-bedroom apartments typically rent for $1,100–$1,500 per month. Condos sell in the $150,000–$350,000 range. Duplexes and small multi-family buildings, which are common here, range from $300,000 to $600,000. Single-family homes are relatively rare and can sell for $250,000–$450,000 depending on size and condition.",
    },
    {
      question: "Is Whittier walkable?",
      answer:
        "Extremely. Whittier has a Walk Score of 93, one of the highest in Minneapolis. Nicollet Avenue (Eat Street), Lyndale Avenue, and Franklin Avenue provide dense commercial corridors within walking distance of most addresses. Grocery stores, restaurants, bars, coffee shops, pharmacies, and cultural institutions are all accessible on foot. Many residents live here specifically because they don't need a car.",
    },
    {
      question: "What schools serve Whittier, Minneapolis?",
      answer:
        "Whittier Elementary School (pre-K through 5th grade) is the neighborhood's dedicated public school and serves a remarkably diverse student body. Middle school students typically attend Sanford Middle School or other MPS options. South High School is the comprehensive high school serving Whittier. The neighborhood is also near several charter and private school options.",
    },
    {
      question: "What are the best restaurants on Eat Street?",
      answer:
        "Highlights include Quang (Vietnamese, a 30-year institution), Moto-i (the first sake brewpub outside Japan), Icehouse (live music and creative American food), Revival (Southern fried chicken and sides), Black Walnut Bakery (pastries and coffee), and Rainbow Chinese. But the real answer is that Eat Street rewards exploration — there are over 50 restaurants on the corridor, and the best meal you'll have might be at a place you've never heard of.",
    },
    {
      question: "Where exactly is Whittier in Minneapolis?",
      answer:
        "Whittier is in south-central Minneapolis, bounded roughly by Interstate 94 and Franklin Avenue to the north, I-35W to the east, Lake Street to the south, and Lyndale Avenue to the west. It sits directly south of downtown and the Loring Park area, making it one of the most centrally located residential neighborhoods in the city.",
    },
    {
      question: "What is the Minneapolis Institute of Art?",
      answer:
        "The Minneapolis Institute of Art (Mia) is a world-class encyclopedic art museum located at the southern edge of Whittier at 2400 Third Avenue South. It holds over 90,000 works spanning 5,000 years and admission has been free since the museum opened in 1915. It's one of the largest art museums in the United States and a defining cultural anchor for the neighborhood and the city.",
    },
    {
      question: "Is Whittier gentrifying?",
      answer:
        "Yes, though the process is complicated. Rising rents and new development have displaced some long-term residents and immigrant communities, particularly along Nicollet and Lyndale Avenues. At the same time, the neighborhood's diversity — which is its defining asset — has proven more resilient than in some comparable neighborhoods. The tension between preserving affordability and accommodating growth is one of the most active conversations in Whittier civic life.",
    },
  ],
  nearby: [
    { name: "South Uptown", slug: "south-uptown", description: "Bars, restaurants, and Lake of the Isles access" },
    { name: "Lowry Hill East", slug: "lowry-hill-east", description: "The Wedge — co-ops, density, and counterculture roots" },
    { name: "Stevens Square - Loring Heights", slug: "stevens-square-loring-heights", description: "High-density living at the edge of downtown" },
    { name: "Lyndale", slug: "lyndale", description: "Quieter residential streets just west of Whittier" },
    { name: "East Bde Maka Ska", slug: "east-bde-maka-ska", description: "Lakeside living between Uptown and the lakes" },
    { name: "Elliot Park", slug: "elliot-park", description: "Downtown-adjacent and rapidly transforming" },
  ],
  closing: {
    title: "What Makes Whittier Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis that are quieter, safer, greener, more polished. There are neighborhoods with better parking and bigger yards and fewer conversations about what the city owes its most vulnerable residents. Whittier is not competing with those places and never has been. What it offers is something rarer and harder to manufacture than comfort: the daily experience of living among people who are genuinely different from you — who cook different food, speak different languages, pray in different buildings, and somehow share the same sidewalks and bus stops and grocery store aisles without it being remarkable. In Whittier, diversity isn't an aspiration or a talking point. It's Tuesday.",
      "The neighborhood has real problems — crime that can't be hand-waved, displacement that's already happened, tensions between growth and preservation that don't have clean answers. But the people who love Whittier love it with their eyes open. They love the pho at Quang and the free galleries at Mia and the fact that you can hear three languages on a single block. They love that it's messy and loud and complicated, because they know that's what a real city actually sounds like.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Friday evening in September, Nicollet Avenue is doing what it
          does best — feeding everyone. A family of four is working through a
          table of pho at Quang, steam rising from bowls that have been served
          the same way here for three decades. Across the street, a couple
          splits a bottle of sake at Moto-i&apos;s rooftop bar, watching the
          sun drop behind the Lyndale Avenue skyline. Two doors down, someone
          is ordering injera and doro wot from an Ethiopian spot that doesn&apos;t
          have a website. A block south, the line at Revival spills out the
          door — fried chicken transcends demographics. This is Eat Street on
          a warm night, and it is one of the best food miles in the American
          Midwest. The rest of Whittier — the art museum, the dense apartment
          blocks, the arguments about gentrification — radiates outward from
          this corridor like heat from a kitchen.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/whittier/hero.webp"
        alt="Nicollet Avenue at dusk in the Whittier neighborhood of Minneapolis, restaurant signs glowing"
        caption="Eat Street — Nicollet Avenue through Whittier — is one of the most diverse restaurant corridors in the Midwest"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Whittier, Minneapolis?">
        <Prose>
          <p>
            Whittier is a densely populated, strikingly diverse neighborhood in
            south-central Minneapolis, bounded roughly by Interstate 94 and
            Franklin Avenue to the north, I-35W to the east, Lake Street to the
            south, and Lyndale Avenue to the west. With approximately 15,000
            residents packed into just over one square mile, it is one of the
            most densely populated neighborhoods in the city — and by most
            measures, the most diverse. Its defining features are Eat Street
            (the Nicollet Avenue restaurant corridor), the Minneapolis Institute
            of Art, a housing stock dominated by apartments and duplexes, and a
            community that includes substantial Somali, East African, Latino,
            Southeast Asian, and East Asian populations alongside long-term
            white residents, artists, students, and young professionals.
          </p>
          <p>
            Whittier sits directly south of downtown Minneapolis, making it one
            of the most centrally located residential neighborhoods in the city.
            That centrality — combined with walkability, transit access, and
            relatively affordable rents — has made it a landing place for
            immigrants, a launching pad for young professionals, and an
            increasingly contested site of urban change. It is not a quiet
            neighborhood. It is not trying to be.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Whittier Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/whittier/neighborhood-sign.webp"
          alt="Whittier neighborhood sign in Minneapolis"
          caption="The Whittier neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Whittier History & Origins">
        <Prose>
          <p>
            The neighborhood is named for John Greenleaf Whittier, the
            19th-century abolitionist poet from Massachusetts — a choice that
            feels both historically apt and quietly ironic, given that Whittier
            the neighborhood would go on to become one of the most racially and
            ethnically diverse places in a state that Whittier the poet never
            visited. The name was attached to the area&apos;s elementary school
            first, then extended to the surrounding neighborhood, as was common
            in Minneapolis&apos;s early civic geography.
          </p>
          <p>
            Before European settlement, this land was part of the homeland of
            the Dakota people — specifically the Wahpekute and Mdewakanton
            bands, for whom the confluence of the Mississippi and Minnesota
            Rivers at Bdote, just miles to the southeast, was a site of profound
            spiritual significance. The prairies and woodlands that would become
            Whittier were hunting and gathering grounds long before they were
            platted into city blocks.
          </p>
          <p>
            Development came rapidly in the late 19th century as Minneapolis
            boomed on the back of flour milling and lumber. By the 1880s and
            1890s, Whittier was filling in with a mix of modest single-family
            homes, duplexes, and small apartment buildings — housing for the
            workers, clerks, and tradespeople who powered the city&apos;s
            industrial economy. The area around Third Avenue South attracted
            wealthier residents, and several grand homes from this era still
            survive, including the Washburn-Fair Oaks Mansion district along
            the eastern edge of the neighborhood. The Minneapolis Institute of
            Art opened at 2400 Third Avenue South in 1915, anchoring the
            neighborhood&apos;s cultural identity from its earliest decades.
          </p>
          <p>
            The mid-20th century brought the familiar American story of
            suburban flight and urban decline. Whittier lost population as
            families moved to the suburbs, and the housing stock — already
            older and more modest than in wealthier neighborhoods — began to
            deteriorate. The construction of Interstate 35W in the 1960s carved
            through the neighborhood&apos;s eastern edge, destroying homes and
            severing connections to the Phillips neighborhood next door. By the
            1970s and 1980s, Whittier had a reputation for high crime, low
            rents, and neglect.
          </p>
          <p>
            But low rents do something that high rents cannot: they attract
            people who are building something from nothing. Beginning in the
            1970s and accelerating through the 1980s and 1990s, Whittier became
            a primary landing place for immigrant communities arriving in the
            Twin Cities — first Southeast Asian refugees from Vietnam, Laos, and
            Cambodia, then East African immigrants from Somalia, Ethiopia, and
            Eritrea, alongside Mexican and Central American families. These
            communities opened restaurants, groceries, and small businesses
            along Nicollet Avenue and Lake Street, transforming the commercial
            corridors into something genuinely global. The &ldquo;Eat
            Street&rdquo; nickname was coined in the 1990s to celebrate what had
            already been happening organically for years.
          </p>
          <p>
            By the 2000s, Whittier was in a new phase — still diverse, still
            dense, still gritty in places, but increasingly attractive to young
            professionals and artists priced out of Uptown. The neighborhood
            has been navigating that transition ever since, with all the
            tensions it implies.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Whittier">
        <Prose>
          <p>
            Walk through Whittier on any given weekday and you will hear Somali
            in the halal market on Nicollet, Spanish at the taqueria on Lake
            Street, Vietnamese at Quang, and English in at least three different
            accents at the coffee shop on Lyndale. This is not a curated
            multicultural experience. Nobody planned it. It&apos;s the result
            of decades of immigration, affordable housing, and the kind of
            organic commercial ecosystem that develops when a neighborhood is
            cheap enough to take a chance on — and central enough that the
            chance is worth taking.
          </p>
          <p>
            The physical fabric of Whittier is dense and varied. This is not a
            neighborhood of uniform bungalows or consistent setbacks. You&apos;ll
            find three-story walk-up apartment buildings from the 1920s next to
            postwar duplexes next to converted Victorian houses next to newer
            four-story mixed-use buildings with ground-floor retail. The housing
            stock reflects a century of Minneapolis building in a neighborhood
            that was never precious about its architecture — it built what
            people needed, when they needed it, and the result is a streetscape
            that is more interesting than beautiful.
          </p>
          <p>
            Whittier is overwhelmingly a renter&apos;s neighborhood. More than
            70 percent of the housing units are renter-occupied, which gives the
            neighborhood a different social texture than homeowner-dominated
            areas. There is more turnover, more transience, more of the
            anonymity that comes with apartment living. But there are also
            long-term renters — families who have lived in the same building
            for a decade or more — and the community organizations, particularly
            the Whittier Alliance, work hard to create civic infrastructure
            that bridges the gap between old-timers and newcomers.
          </p>
          <p>
            The arts community is a significant presence. Whittier&apos;s
            proximity to the Minneapolis College of Art and Design (MCAD), the
            Minneapolis Institute of Art, and the relatively affordable rents
            have drawn painters, musicians, writers, and performers for
            decades. The neighborhood&apos;s creative energy is quieter than
            Northeast Minneapolis&apos;s gallery district but no less real —
            it shows up in the murals on building walls, the independent
            bookstores and record shops, and the live music venues that anchor
            the Nicollet and Lyndale corridors.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/lowry-hill-east" className="text-[#2a9d8f] hover:underline">
              Lowry Hill East
            </Link>{" "}
            (the Wedge) to the northwest and{" "}
            <Link href="/neighborhoods/south-uptown" className="text-[#2a9d8f] hover:underline">
              South Uptown
            </Link>{" "}
            to the west share some of Whittier&apos;s density and youthful
            energy, but Whittier is distinctly more diverse and less polished
            than either — and most of the people who live here consider that
            a feature, not a bug.
          </p>
        </Prose>
        <Quote
          text="I've lived in Whittier for eight years and I can walk to literally everything I need — groceries, restaurants, the art museum, my doctor. I've never had to own a car. That's rare in Minneapolis."
          cite="Whittier resident, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Whittier Food, Drink & Local Spots">
        <Prose>
          <p>
            This is the section that could be its own article. Whittier&apos;s
            food scene — anchored by Eat Street but extending well beyond it —
            is arguably the most interesting in Minneapolis, not because every
            restaurant is excellent (some aren&apos;t), but because the range is
            unmatched. Within a fifteen-minute walk, you can eat Vietnamese,
            Somali, Ethiopian, Mexican, Thai, Japanese, Chinese, Indian,
            Southern American, and farm-to-table New American. You can spend $8
            on a bowl of pho that will change your week, or $80 on a tasting
            menu. The corridor rewards curiosity over brand recognition, and
            the best meals are often at the places with the least marketing.
          </p>
        </Prose>

        <ArticleSubsection title="Eat Street Institutions">
          <PlaceCardComponent place={{ name: "Quang", tag: "Vietnamese", price: "$", description: "2719 Nicollet Ave. S. Quang has been serving pho, bun, and Vietnamese home cooking since the early 1990s, and it remains one of the most beloved restaurants in the Twin Cities — not despite its simplicity but because of it. The pho is deeply flavored and enormous. The spring rolls are hand-wrapped. The prices are almost aggressively reasonable. This is the restaurant that people who left Minneapolis still dream about. Cash preferred; lines on weekends." }} />
          <PlaceCardComponent place={{ name: "Moto-i", tag: "Japanese / Sake Brewery", price: "$$", url: "https://moto-i.com", description: "2940 Lyndale Ave. S. When it opened in 2008, Moto-i was the first sake brewpub outside of Japan — brewing junmai ginjo sake in-house and pairing it with izakaya-style food. The rooftop patio is one of the best warm-weather spots in south Minneapolis. The ramen is solid; the sake flights are the real draw." }} />
          <PlaceCardComponent place={{ name: "Icehouse", tag: "New American / Live Music", price: "$$–$$$", url: "https://icehousempls.com", description: "2528 Nicollet Ave. S. Part restaurant, part live music venue, Icehouse occupies a space that few places manage — genuinely good food and genuinely good music under the same roof. The menu is creative and seasonal; the music leans jazz, folk, and experimental. Late-night shows draw a different crowd than the dinner service, and both are worth experiencing." }} />
          <PlaceCardComponent place={{ name: "Revival", tag: "Southern / Fried Chicken", price: "$$", url: "https://revivalrestaurant.com", description: "4257 Nicollet Ave. S. (south of Whittier proper, but the Eat Street location at 525 Selby in St. Paul and the cultural connection earn it mention). Revival's fried chicken — Tennessee hot or classic — has achieved near-religious status in the Twin Cities. The sides are excellent, particularly the pimento mac and cheese and the collard greens. Expect a wait." }} />
          <PlaceCardComponent place={{ name: "Rainbow Chinese", tag: "Chinese", price: "$–$$", description: "2739 Nicollet Ave. S. A neighborhood anchor for decades, Rainbow Chinese has outlasted trendier competitors by being exactly what it is: consistently good Chinese-American cooking at reasonable prices, in a dining room that hasn't changed much since the Clinton administration. The walleye — a nod to Minnesota — is a beloved local curiosity." }} />
          <PlaceCardComponent place={{ name: "Black Walnut Bakery", tag: "Bakery / Café", price: "$", description: "3157 Hennepin Ave. S. (just outside Whittier's western boundary, but deeply part of the ecosystem). Exceptional pastries, bread, and coffee in a space that feels like it was designed by someone who actually bakes. The cardamom rolls and croissants are worth the trip. Morning lines are common on weekends." }} />
        </ArticleSubsection>

        <ArticleSubsection title="More Eat Street & Beyond">
          <PlaceCardComponent place={{ name: "Pimento Jamaican Kitchen", tag: "Jamaican", price: "$–$$", description: "2524 Nicollet Ave. S. Jerk chicken, oxtail, curry goat, and plantains — authentic Jamaican food that fills the room with the smell of allspice and scotch bonnet peppers. The lunch specials are one of the best deals on the street." }} />
          <PlaceCardComponent place={{ name: "Hai Hai", tag: "Southeast Asian Street Food", price: "$$", description: "2121 University Ave. NE (not in Whittier, but the Nicollet predecessor and the cultural lineage matters). Vietnamese-inspired street food with cocktails in a vibrant, high-energy space." }} />
          <PlaceCardComponent place={{ name: "Nicollet Diner", tag: "Diner / American", price: "$", description: "1612 Nicollet Ave. S. A no-frills diner serving breakfast all day to a cross-section of Whittier humanity. The food is exactly what you expect from a place with counter seating and laminated menus — and that's the point." }} />
          <PlaceCardComponent place={{ name: "Wedge Table (The Wedge Co-op)", tag: "Co-op / Grocery", description: "2105 Lyndale Ave. S. The Wedge is one of the largest natural foods co-ops in the country and a neighborhood institution. The adjacent Wedge Table serves prepared foods for takeout. The co-op itself is as much a community gathering point as a grocery store — if you want to understand Whittier's politics, read the bulletin board." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Lyndale Avenue Corridor">
          <Prose>
            <p>
              Nicollet gets the fame, but Lyndale Avenue — Whittier&apos;s
              western boundary — has its own cluster of bars, restaurants, and
              shops that form a second commercial spine. The stretch between
              Franklin and Lake includes cocktail bars, breweries, vintage
              shops, and some of the neighborhood&apos;s more recent
              restaurant openings. Where Eat Street is defined by immigrant
              entrepreneurship and accessible pricing, Lyndale trends slightly
              more upscale and nightlife-oriented — though the two corridors
              are close enough that most residents move between them without
              thinking about it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Coffee & Drink">
          <Prose>
            <p>
              Whittier and its immediate surroundings are rich in coffee.
              Spyhouse Coffee on Nicollet is a local chain with a loyal
              following and excellent single-origin pour-overs. Five Watt
              Coffee, also on Nicollet, skews more experimental with its
              drink menu. For bars, the Lyndale corridor offers options from
              dive bars to craft cocktail spots — CC Club, a legendary
              Minneapolis dive with decades of history, sits just across the
              Lyndale border in{" "}
              <Link href="/neighborhoods/south-uptown" className="text-[#2a9d8f] hover:underline">
                South Uptown
              </Link>
              .
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Whittier">
        <Prose>
          <p>
            Whittier is not a parks-and-lakes neighborhood in the way that
            southwest Minneapolis is — you won&apos;t step out your front door
            onto a lake trail. But what it lacks in lakefront it makes up for
            in cultural infrastructure that most neighborhoods would envy, and
            its parks, while smaller, are well-used and well-loved.
          </p>
        </Prose>

        <ArticleSubsection title="Minneapolis Institute of Art (Mia)">
          <Prose>
            <p>
              The Minneapolis Institute of Art sits at the southern edge of
              Whittier at 2400 Third Avenue South, and it is, without
              exaggeration, one of the great art museums of the United States.
              The collection spans over 90,000 works across 5,000 years — from
              ancient Egyptian artifacts to contemporary photography, from
              Rembrandt to Kehinde Wiley. The building itself is a Beaux-Arts
              landmark designed by McKim, Mead & White, with later additions
              by Kenzo Tange and Michael Graves that have expanded the museum
              to over 500,000 square feet.
            </p>
            <p>
              The most remarkable thing about Mia is also the simplest:
              admission has been free since the museum opened in 1915. This
              is not a promotional gimmick or a temporary initiative. It is
              a foundational commitment, written into the museum&apos;s
              charter by its founders, who believed that art should be
              accessible to everyone regardless of income. In a neighborhood
              where median household income is well below the city average,
              this matters enormously. Mia is Whittier&apos;s living room — a
              place where teenagers wander in after school, where families
              spend rainy Saturdays, where artists come to study and be
              humbled.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Minneapolis College of Art and Design (MCAD)">
          <Prose>
            <p>
              MCAD sits adjacent to Mia on the same campus, a small but
              well-regarded art and design college that has been training
              artists, designers, and filmmakers since 1886. Its galleries are
              open to the public, and its students and faculty contribute to
              the creative economy of the neighborhood. MCAD&apos;s presence
              helps explain why Whittier has a higher concentration of working
              artists than almost any other Minneapolis neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Children's Theatre Company">
          <Prose>
            <p>
              Also located on the Mia/MCAD campus at 2400 Third Avenue South,
              the Children&apos;s Theatre Company (CTC) is the largest
              children&apos;s theater in North America and the only one to have
              received the Tony Award for Outstanding Regional Theatre. Its
              productions — which range from adaptations of beloved children&apos;s
              books to new commissions dealing with complex themes — draw
              families from across the Twin Cities. CTC is a genuinely
              excellent institution, and its location in Whittier rather than
              a suburban campus is a meaningful statement about where culture
              belongs.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Whittier Park">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park sits at 425 West 26th
              Street and includes a recreation center, a playground, basketball
              courts, and a wading pool. It&apos;s a neighborhood park in the
              truest sense — not a regional destination, but a place where
              kids play after school and families gather on summer evenings.
              The rec center hosts youth programming, fitness classes, and
              community events year-round.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Washburn-Fair Oaks Park">
          <Prose>
            <p>
              A smaller green space on the neighborhood&apos;s eastern edge,
              Washburn-Fair Oaks Park sits near the historic mansion district
              of the same name. The park offers open green space, a playground,
              and some of the best skyline views in south Minneapolis — the
              downtown towers are visible just to the north, framed by mature
              trees. It&apos;s a quieter, more contemplative park than Whittier
              Park, and a good place to remember that this neighborhood was
              once home to some of the city&apos;s wealthiest families.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Getting to the Lakes">
          <Prose>
            <p>
              Whittier doesn&apos;t have lakefront, but the Chain of Lakes —
              Bde Maka Ska, Lake Harriet, Lake of the Isles — are a short
              bike ride west, reachable via the Midtown Greenway or surface
              streets. Many Whittier residents consider the lakes part of
              their extended backyard, accessible within 10–15 minutes by
              bike. The Midtown Greenway, a converted rail corridor running
              along the neighborhood&apos;s southern edge at Lake Street
              (technically just south), provides a car-free east-west route
              to the lakes and beyond.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Whittier Schools">
        <Prose>
          <p>
            Schools in Whittier reflect the neighborhood&apos;s diversity and
            its challenges. The student populations here are among the most
            multilingual and multicultural in the Minneapolis Public Schools
            system, which is both an asset and a source of complexity for
            educators and families.
          </p>
          <p>
            Whittier International Elementary School serves pre-K through 5th
            grade and is the neighborhood&apos;s dedicated public elementary.
            The school embraces its diversity explicitly, with programming
            designed to serve students from dozens of linguistic and cultural
            backgrounds. Test scores have historically been below city averages,
            which reflects the socioeconomic challenges many families face
            rather than the quality of teaching. The school has a committed
            parent community and strong relationships with neighborhood
            organizations.
          </p>
          <p>
            For middle school, Whittier students typically attend Sanford
            Middle School or access other Minneapolis Public Schools options
            through the district&apos;s open enrollment system. South High
            School, located just south of Lake Street in the adjacent
            Powderhorn neighborhood, is the comprehensive high school serving
            Whittier. South is one of the most diverse high schools in
            Minnesota, with students from over 50 countries, and offers
            strong programs in arts, International Baccalaureate, and career
            and technical education.
          </p>
          <p>
            Charter and private school options in the area include Hennepin
            Schools, the Minnesota Transitions Charter School, and various
            faith-based programs. Families with flexibility also access the
            broader Minneapolis magnet school system, which allows enrollment
            across the city based on interest and availability.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Whittier Real Estate & Housing">
        <Prose>
          <p>
            Whittier&apos;s housing market is fundamentally different from the
            owner-occupied, single-family markets that dominate much of
            Minneapolis. This is a renter&apos;s neighborhood — more than 70
            percent of housing units are renter-occupied — and the housing
            stock reflects that reality. You&apos;re looking at apartments,
            condos, duplexes, triplexes, and the occasional converted Victorian.
            Single-family homes exist but are relatively rare, and when they
            come on the market, they attract a mix of owner-occupants and
            investors.
          </p>
        </Prose>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              One-bedroom apartments in Whittier typically rent for $1,100 to
              $1,500 per month as of 2025, though older walk-ups without
              updated amenities can still be found under $1,000 — increasingly
              rare as new construction pushes averages upward. Two-bedroom
              units run $1,400 to $2,000 depending on the building and
              location. The newest apartment buildings along Nicollet and
              Lyndale, with in-unit laundry, rooftop decks, and fitness
              centers, command the top of the range. Older courtyard buildings
              and walk-ups offer more character and lower prices but fewer
              amenities.
            </p>
            <p>
              Vacancy rates have tightened in recent years as new construction
              has been absorbed by demand. Whittier&apos;s centrality,
              walkability, and transit access make it attractive to young
              professionals who want urban living without downtown prices,
              and the rental market reflects that demand.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Buying in Whittier">
          <Prose>
            <p>
              For buyers, the market is dominated by condominiums and small
              multi-family properties. Condos in Whittier sell in the $150,000
              to $350,000 range, making them among the more affordable entry
              points for homeownership in central Minneapolis. Duplexes and
              triplexes — many of them older buildings with conversion
              potential or existing rental income — range from $300,000 to
              $600,000. The handful of single-family homes that trade each year
              typically sell between $250,000 and $450,000, well below the
              citywide median, though condition varies enormously.
            </p>
            <p>
              The investment market is active. Whittier&apos;s density, rental
              demand, and relatively low per-unit prices attract both
              small-scale landlords and institutional investors. This creates
              tension — investor purchases can drive up prices while also
              deferring maintenance in favor of cash flow — that is a recurring
              theme in neighborhood housing conversations.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="New Development">
          <Prose>
            <p>
              Several mid-rise apartment buildings have gone up along Nicollet
              and Lyndale in recent years, adding market-rate and some
              affordable units to the neighborhood&apos;s housing supply. The
              development has been controversial — new buildings bring density
              and sometimes ground-floor retail, but they also tend to raise
              surrounding rents and change the physical character of streets
              that were previously lower-rise. The 2040 Plan, Minneapolis&apos;s
              comprehensive plan that eliminated single-family-only zoning
              citywide, has enabled additional development in Whittier,
              though the neighborhood was already one of the densest in the
              city.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="Whittier is where you can actually afford to live in the city and still walk to everything. That's getting harder every year, but it's still true — for now." cite="Whittier renter, community forum" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Whittier">
        <Prose>
          <p>
            Whittier is, by Minneapolis standards, exceptionally well-connected.
            A Walk Score of 93 makes it one of the most walkable neighborhoods
            in the city — nearly everything you need for daily life is within
            a 15-minute walk, from groceries to restaurants to pharmacies to
            the art museum. The Bike Score of 90 reflects strong cycling
            infrastructure, including bike lanes on Nicollet and connections
            to the Midtown Greenway, the converted rail corridor running
            east-west just south of the neighborhood along Lake Street.
          </p>
          <p>
            Transit is a legitimate option here in a way it isn&apos;t in most
            Minneapolis neighborhoods. Multiple Metro Transit bus routes serve
            Nicollet Avenue, Lyndale Avenue, Franklin Avenue, and Lake Street,
            connecting Whittier to downtown (a 10-minute ride), Uptown, the
            University of Minnesota, and the light rail system. The Transit
            Score of 64 is among the highest in the city. Many Whittier
            residents — particularly those without children — live car-free
            by choice, a lifestyle that is feasible here in a way it simply
            isn&apos;t in most of Minneapolis.
          </p>
          <p>
            Driving is easy in terms of access — I-35W borders the
            neighborhood to the east and I-94 to the north, putting downtown
            within a five-minute drive and MSP Airport within 15–20 minutes.
            Parking, however, is the trade-off that comes with density. Street
            parking can be competitive, especially near the Nicollet and
            Lyndale corridors in the evenings. Most apartment buildings include
            some parking, but not always enough. If easy parking is a priority,
            Whittier will test your patience.
          </p>
          <p>
            The Midtown Greenway deserves special mention. This 5.5-mile
            paved trail runs along a below-grade former rail corridor from
            the Chain of Lakes to the Mississippi River, passing just south
            of Whittier. It&apos;s one of the most heavily used bike commuter
            routes in Minneapolis and a genuine piece of urban infrastructure
            that makes car-free living more practical. From Whittier, you can
            reach Bde Maka Ska or the river in about 15 minutes by bike via
            the Greenway.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Whittier is a neighborhood where the tensions of American urban
            life are visible on the surface — not hidden behind privacy
            fences and cul-de-sacs, but playing out on public sidewalks and
            in community meetings. That honesty is part of what makes it
            compelling to live here. It&apos;s also what makes it hard.
          </p>
        </Prose>

        <ArticleSubsection title="Gentrification and Displacement">
          <Prose>
            <p>
              This is the big one, and it&apos;s not theoretical. As Whittier
              has become more attractive to young professionals and developers,
              rents have risen, older buildings have been renovated or
              demolished, and some of the immigrant communities that gave the
              neighborhood its character have been priced out. The pattern is
              familiar to anyone who has watched urban neighborhoods change:
              artists and immigrants make a place interesting; that
              interestingness attracts capital; capital raises prices; the
              original community can no longer afford to stay.
            </p>
            <p>
              Whittier hasn&apos;t lost its diversity the way some gentrifying
              neighborhoods have — it remains one of the most diverse places in
              Minneapolis, and many immigrant-owned businesses continue to
              thrive. But the direction of change is clear, and the people most
              affected by it are the least likely to be heard in public
              meetings conducted in English during business hours. Community
              organizations including the Whittier Alliance have pushed for
              affordable housing requirements in new development, but the
              market pressures are significant.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Whittier&apos;s crime rates are higher than the city average,
              particularly for property crime. Car break-ins, bike theft, and
              package theft are common enough to be expected rather than
              surprising. Violent crime — assaults, robberies — is
              concentrated in certain areas, particularly along the Lake
              Street corridor and near some of the larger intersections. The
              situation improved from the peaks seen in 2020–2021 but remains
              a persistent concern.
            </p>
            <p>
              This is a place where you lock your bike with a good lock, where
              you don&apos;t leave valuables visible in your car, where you pay
              attention to your surroundings at night. It&apos;s not a place
              where most residents feel unsafe walking during the day, and
              many walk the neighborhood freely at night. But the gap between
              Whittier&apos;s reality and the reality in southwest Minneapolis
              is real, and anyone considering a move should be honest with
              themselves about their comfort level.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Homelessness and Visible Poverty">
          <Prose>
            <p>
              Whittier&apos;s centrality, its proximity to social services on
              Franklin Avenue and downtown, and its transit access mean that
              homelessness is more visible here than in most Minneapolis
              neighborhoods. Encampments have appeared along freeway
              overpasses and in some park spaces. This is a citywide and
              regional crisis, not a Whittier-specific one, but it shows up
              here more than in neighborhoods farther from the urban core.
              Residents hold a range of views, from compassion-first
              approaches to frustration with the impact on public spaces.
              What most agree on is that the status quo isn&apos;t working for
              anyone.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development and Density">
          <Prose>
            <p>
              New apartment buildings continue to go up, particularly along
              Nicollet and Lyndale. For some residents, this is welcome — more
              housing supply helps moderate rents, adds street-level retail,
              and brings investment. For others, particularly long-term
              residents and small-business owners, new development threatens
              the physical character and affordability that made the
              neighborhood work. The debate over density is ongoing in Whittier,
              shaped by the 2040 Plan&apos;s elimination of single-family
              zoning and by the broader question of what Minneapolis wants to
              become.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Post-2020 Reckoning">
          <Prose>
            <p>
              The murder of George Floyd in May 2020 — which occurred at 38th
              and Chicago, roughly two miles southeast of Whittier — set off
              a reckoning across Minneapolis that touched every neighborhood.
              Whittier, with its diverse population and proximity to the
              events, experienced the upheaval directly: businesses on Lake
              Street and Nicollet Avenue were damaged during the unrest that
              followed, and the subsequent debates about policing, public
              safety, and racial justice played out intensely in a neighborhood
              that was already navigating these questions. Most of the damaged
              businesses have rebuilt, but the experience left scars — both
              physical and psychological — that are still part of the
              neighborhood&apos;s conversation with itself.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Whittier FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
