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
    title: "Seward, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Seward, Minneapolis — the co-op culture, Franklin Avenue corridor, Birchwood Cafe, Midtown Greenway, East African communities, housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Seward",
  deck: "A South Minneapolis neighborhood where the co-op movement runs deep, Franklin Avenue carries a dozen languages, the Midtown Greenway ends at the river, and community organizing isn't a hobby — it's the infrastructure.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Seward?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Seward" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Seward, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~7,000", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$290K–$380K", label: "Median home sale price range (2025 data)" },
      { value: "1972", label: "Year Seward Co-op was founded" },
      { value: "1900s–1940s", label: "Era most homes were built" },
      { value: "5.5 miles", label: "Midtown Greenway (eastern terminus in Seward)" },
      { value: "10–15 min", label: "Drive to downtown Minneapolis" },
      { value: "76", label: "Walk Score" },
      { value: "92", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Seward a good neighborhood in Minneapolis?",
      answer:
        "Yes — Seward is one of South Minneapolis's most distinctive and community-oriented neighborhoods. It offers strong co-op culture, excellent biking infrastructure via the Midtown Greenway, proximity to the Mississippi River, genuine demographic diversity, and a progressive civic culture that attracts people who want to be actively involved in their community. It's more affordable than Southwest Minneapolis while offering walkable commercial corridors and a food scene anchored by institutions like Birchwood Cafe and Seward Co-op. The neighborhood has real urban challenges — property crime, some safety concerns along Franklin Avenue, and ongoing tensions around development — but for people who value community engagement and diversity, Seward is one of the strongest options in the city.",
    },
    {
      question: "Is Seward, Minneapolis safe?",
      answer:
        "Seward's safety profile is mixed, which is the honest answer for most urban Minneapolis neighborhoods. The residential blocks — particularly south of Franklin Avenue — are generally quiet, tree-lined, and neighborly. Franklin Avenue itself has historically been a corridor with higher rates of property crime, public intoxication, and occasional violent incidents, though the situation has improved in recent years. Crime rose across Minneapolis in 2020–2022 and has since declined, but remains above pre-2020 levels in some categories. Most Seward residents feel safe on their blocks while exercising normal urban awareness, particularly after dark near commercial corridors.",
    },
    {
      question: "What is Seward, Minneapolis known for?",
      answer:
        "Seward is best known for the Seward Co-op (one of the oldest continuously operating food co-ops in the United States, founded in 1972), Birchwood Cafe, the eastern terminus of the Midtown Greenway, its proximity to the Mississippi River, a strong tradition of progressive activism and community organizing, and its diverse demographics — including significant Somali and East African communities along Franklin Avenue. It's also known as one of the most bike-friendly neighborhoods in the city.",
    },
    {
      question: "How much do homes cost in Seward, Minneapolis?",
      answer:
        "Median home sale prices in Seward ranged from roughly $290,000 to $380,000 in 2025, somewhat below the citywide median and significantly below Southwest Minneapolis neighborhoods. Smaller bungalows and starter homes can be found in the $250,000–$320,000 range, while larger renovated homes or properties near the river can reach $400,000–$500,000. Duplexes and small multi-family properties are relatively common. Compared to neighboring Prospect Park or the Southwest neighborhoods, Seward remains more accessible for first-time buyers.",
    },
    {
      question: "What is Seward Co-op?",
      answer:
        "Seward Co-op is a member-owned cooperative grocery store founded in 1972, making it one of the oldest continuously operating food co-ops in the United States. It operates two locations: the original Seward neighborhood store at 2823 East Franklin Avenue (the 'Friendship Store') and a second location in the nearby Midtown area (the 'Creamery' at 2601 East Franklin Avenue, built in a renovated creamery building). The co-op emphasizes local, organic, and sustainably sourced food, and has been a defining institution of the neighborhood's identity and progressive culture for over fifty years. Anyone can shop there; membership provides ownership benefits and voting rights.",
    },
    {
      question: "Is Seward walkable?",
      answer:
        "Seward earns a Walk Score of 76 and an exceptional Bike Score of 92. Franklin Avenue provides the primary commercial corridor, with the co-op, restaurants, and services within walking distance for most residents. The Midtown Greenway — one of the best pieces of urban cycling infrastructure in the country — has its eastern terminus in the neighborhood, and bike commuting is a genuine lifestyle here, not just a weekend activity. For car-free living, Seward is one of the better options in South Minneapolis, though it's not as dense with commercial options as Uptown or Whittier.",
    },
    {
      question: "What schools serve Seward, Minneapolis?",
      answer:
        "Seward is served by Minneapolis Public Schools. Seward Montessori School (PreK–5) is the neighborhood's elementary school and one of the most sought-after Montessori programs in the district. Justice Page Middle School and South High School serve the area for upper grades. The neighborhood also has access to the district's open enrollment and magnet programs, and several charter school options are nearby. Families who prioritize diverse, community-embedded schools often find the Seward options compelling.",
    },
    {
      question: "What are the best restaurants in Seward, Minneapolis?",
      answer:
        "Seward's food scene is smaller but distinctive. Birchwood Cafe is the neighborhood's most celebrated restaurant — a farm-to-table institution with a devoted following and a commitment to local sourcing that borders on religious. Seward Co-op's prepared food and deli are excellent for everyday eating. Along Franklin Avenue, East African restaurants — including Somali spots serving sambusa, goat, and rice — offer some of the most flavorful and affordable food in the neighborhood. The Friendly Tavern is a no-frills neighborhood bar. A Slice of New York brings thin-crust pizza to the corridor.",
    },
    {
      question: "Where exactly is Seward in Minneapolis?",
      answer:
        "Seward is in South Minneapolis, roughly bounded by the Mississippi River and West River Parkway to the north and east, Hiawatha Avenue (Highway 55) to the south and east, East 26th Street and the Midtown Greenway corridor to the south, and Cedar Avenue/Highway 77 to the west. It sits east of Cedar-Riverside, south of the University of Minnesota campus, and north of the Longfellow neighborhood cluster. The Franklin Avenue corridor runs east-west through the neighborhood's center.",
    },
    {
      question: "Is Seward gentrifying?",
      answer:
        "Seward is experiencing some gentrification pressure, though the process is less dramatic than in neighborhoods like Northeast or North Loop. Rising home prices, new construction, and the neighborhood's increasing appeal to young professionals have raised concerns about displacement, particularly for renters and immigrant communities along Franklin Avenue. The co-op culture and strong community organizing tradition have provided some resistance to the most disruptive forms of gentrification, but the tension between preserving affordability and accommodating growth is real and ongoing.",
    },
    {
      question: "What is the Midtown Greenway?",
      answer:
        "The Midtown Greenway is a 5.5-mile dedicated bike and pedestrian trail running east-west through South Minneapolis in a former railroad trench. Its eastern terminus is in the Seward neighborhood, where it connects to the West River Parkway trail along the Mississippi. The Greenway is grade-separated from car traffic, plowed in winter, lit at night, and considered one of the best pieces of urban cycling infrastructure in the United States. For Seward residents, it provides car-free access to Uptown, the Chain of Lakes, and points west across the city.",
    },
  ],
  nearby: [
    { name: "Longfellow", slug: "longfellow", description: "Minnehaha Falls, the river, and post-2020 resilience" },
    { name: "Cooper", slug: "cooper", description: "Quiet residential blocks south of the Greenway" },
    { name: "Howe", slug: "howe", description: "Small-scale neighborhood sharing the Greenway corridor" },
    { name: "Cedar Riverside", slug: "cedar-riverside", description: "The West Bank — Somali community, university energy, density" },
    { name: "Prospect Park - East River Road", slug: "prospect-park-east-river-road", description: "University-adjacent, the Witch's Hat tower, and Green Line access" },
    { name: "Hiawatha", slug: "hiawatha", description: "Light rail corridor and evolving identity east of Highway 55" },
  ],
  closing: {
    title: "What Makes Seward Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis with better restaurants, higher Walk Scores, more polished commercial corridors, and more predictable trajectories. Seward is not competing on those terms and never has been. What it offers is something that cannot be manufactured by a developer or mandated by a city council — a genuine culture of cooperative living, built over fifty years by people who believe that a grocery store can be a democratic institution, that a neighborhood meeting is worth attending on a Tuesday night, that the person who arrived from Mogadishu last year and the person whose family has been here since the 1920s both have a claim on this place and a voice in its future.",
      "The neighborhood has its struggles — crime that can't be dismissed, displacement that's already happening, infrastructure that needs investment, and the eternal Minneapolis tension between progressive ideals and the messy reality of implementing them. But walk down Franklin Avenue on a Saturday morning, stop at the co-op for bread, eat lunch at Birchwood, bike the Greenway to the river, and you will understand why the people who live here fight so hard to keep it what it is. Seward is proof that a neighborhood can be both idealistic and practical, both diverse and cohesive, both changing and stubbornly itself. That combination is rarer than it should be. And it is worth protecting.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Tuesday evening in October, the Seward Co-op on Franklin Avenue
          is doing what it has done — in one form or another — since 1972.
          A woman in a hijab is selecting tomatoes from the local produce
          section, methodically turning each one in her hand. A guy in cycling
          kit is loading a pannier bag with bulk quinoa and fair-trade coffee,
          his bike locked to the rack outside where eight other bikes already
          lean. Two older women are debating the merits of a new tempeh brand
          near the refrigerated case. A kid in a Seward Montessori t-shirt is
          eating a slice of co-op pizza at the deli counter while his dad reads
          the community bulletin board — a dense collage of flyers for
          neighborhood meetings, yoga classes, mutual aid calls, and a lost cat
          named Chairman Meow. Nobody is in a hurry. Nobody is performing
          anything. This is just a grocery store — a cooperatively owned, deeply
          political, stubbornly idealistic grocery store that has somehow become
          the beating heart of a neighborhood where &quot;community&quot;
          isn&apos;t a marketing word but an operating system.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/seward/hero.webp"
        alt="Franklin Avenue in the Seward neighborhood of Minneapolis on a fall afternoon, trees in color, cyclists and pedestrians"
        caption="Franklin Avenue — the commercial and cultural spine of Seward"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Seward, Minneapolis?">
        <Prose>
          <p>
            Seward is a residential neighborhood in South Minneapolis, roughly
            bounded by the Mississippi River and West River Parkway to the north
            and east, Hiawatha Avenue (Highway 55) to the southeast, the
            Midtown Greenway corridor and East 26th Street to the south, and
            Cedar Avenue (Highway 77) to the west. It is home to approximately
            7,000 residents and sits at a geographical and cultural crossroads
            — between the University of Minnesota campus to the north, the{" "}
            <Link href="/neighborhoods/cedar-riverside" className="text-[#2a9d8f] hover:underline">
              Cedar-Riverside
            </Link>{" "}
            neighborhood to the west, and the{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>{" "}
            neighborhood cluster to the south.
          </p>
          <p>
            What makes Seward distinctive is not any single landmark or
            institution but a culture — a way of organizing community life
            around cooperation, activism, and a stubborn belief that a
            neighborhood can be both idealistic and functional. The Seward
            Co-op, founded in 1972, is the most visible expression of this
            culture, but it runs much deeper — into the neighborhood
            association, the community gardens, the mutual aid networks, and
            the Franklin Avenue corridor where Somali tea shops sit next to
            craft coffee roasters and nobody thinks that&apos;s unusual.
            Seward is diverse by Minneapolis standards — racially, ethnically,
            economically, and generationally — and that diversity is not
            accidental. It is the product of decades of affordable housing,
            immigrant settlement, and a community that has actively resisted
            the forces of homogenization.
          </p>
          <p>
            The neighborhood&apos;s defining corridor is Franklin Avenue, which
            runs east-west through its center and serves as the primary
            commercial strip. The eastern terminus of the Midtown Greenway — one
            of the best pieces of urban cycling infrastructure in the country —
            sits at the neighborhood&apos;s southern edge, connecting Seward to
            the broader network of trails along the Mississippi River. Between
            the co-op, the Greenway, the river, and the community culture,
            Seward attracts a specific kind of person — one who wants to live
            in a place that means something beyond its real estate value.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Seward Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/seward/neighborhood-sign.webp"
          alt="Seward neighborhood sign in Minneapolis"
          caption="The Seward neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Seward History & Origins">
        <Prose>
          <p>
            The land that is now Seward is part of the ancestral homeland of
            the Dakota people — specifically the Mdewakanton and Wahpekute
            bands, for whom the confluence of the Mississippi and Minnesota
            Rivers at Bdote, just miles to the southeast, is a site of profound
            spiritual and cultural significance. The river bluffs, prairies,
            and oak savannas that would eventually become a Minneapolis
            neighborhood sustained Dakota communities for generations before
            European contact. Any honest history of Seward begins with that
            fact and the dispossession that followed — the treaties of 1837 and
            1851 that stripped Dakota land rights, the US-Dakota War of 1862,
            and the forced exile of Dakota people from their homeland.
          </p>
          <p>
            The neighborhood takes its name from William Henry Seward, the
            secretary of state under Abraham Lincoln and Andrew Johnson, best
            remembered for purchasing Alaska from Russia in 1867 — a
            transaction his critics called &quot;Seward&apos;s Folly&quot;
            until it turned out to be one of the better real estate deals in
            American history. The name was attached to the neighborhood&apos;s
            school first, then extended to the surrounding area, as was the
            pattern in Minneapolis&apos;s early civic geography. Seward himself
            never visited Minneapolis, a detail that feels fitting for a
            neighborhood that has always been more interested in its own
            internal culture than in the approval of outsiders.
          </p>
          <p>
            Residential development came rapidly in the late 19th and early
            20th centuries, as Minneapolis boomed on flour milling and lumber.
            Seward filled in primarily between 1890 and 1940 with the housing
            stock that still defines the neighborhood — Craftsman bungalows,
            Foursquare homes, modest frame houses, and scattered duplexes
            built for the working-class and middle-class families who powered
            the city&apos;s industrial economy. The neighborhood&apos;s
            proximity to the river — and to the mills, rail yards, and
            factories along its banks — shaped its early identity as a place
            where people who worked with their hands could afford to live
            close to where they worked.
          </p>
          <p>
            The mid-twentieth century brought the familiar American story of
            interstate construction and urban disruption. Interstate 94, built
            in the 1960s, carved through the neighborhoods immediately to
            Seward&apos;s west and north, displacing hundreds of families in
            Cedar-Riverside and the Elliot Park area and severing connections
            between communities that had been organically linked. Highway 55
            (Hiawatha Avenue) defined Seward&apos;s eastern boundary, creating
            a barrier of fast-moving traffic that still separates the
            neighborhood from{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>{" "}
            to the east. The neighborhood lost population as families moved to
            the suburbs, and the housing stock — already modest — began to
            show its age.
          </p>
          <p>
            But Seward&apos;s most significant transformation was cultural,
            not physical. In the late 1960s and 1970s, the neighborhood became
            a center of the counterculture and back-to-the-land movements that
            were reshaping urban America. Young people — many of them
            associated with the University of Minnesota — moved into
            Seward&apos;s affordable houses and apartments and began building
            the cooperative institutions that would define the neighborhood
            for the next half century. The Seward Co-op was founded in 1972,
            initially operating out of the basement of a house on 24th Avenue.
            Community gardens, food cooperatives, and housing co-ops followed.
            The neighborhood became a proving ground for the idea that
            ordinary people could own and operate the institutions that served
            them — that a grocery store, a housing complex, or a daycare
            center could be run democratically, for the benefit of its
            members rather than outside shareholders. The co-op movement in
            Seward was not abstract ideology — it was practical. People who
            couldn&apos;t afford organic produce at conventional stores pooled
            their money and bought it in bulk. People who couldn&apos;t afford
            to buy a house alone formed housing cooperatives and bought
            buildings together. The cooperative model worked because it solved
            real problems for real people, and Seward became one of the densest
            concentrations of cooperative enterprise in the country — a
            distinction it still holds.
          </p>
          <p>
            The co-op itself grew from that basement operation into a full
            storefront on Franklin Avenue, expanding and renovating over the
            decades as membership grew. By the 2000s, Seward Co-op had become
            one of the largest and most successful food cooperatives in the
            Upper Midwest, with thousands of member-owners and a reputation
            for quality that attracted shoppers from across the metro. The
            opening of the second location — the Creamery — in 2015 marked
            a new chapter, expanding the co-op&apos;s physical footprint and
            its ambitions while raising questions about scale and mission that
            the community continues to debate.
          </p>
          <p>
            The 1980s and 1990s brought a new wave of residents — East African
            immigrants, primarily Somali and Oromo, who settled along the
            Franklin Avenue corridor and in the adjacent Cedar-Riverside
            neighborhood. These communities opened small businesses, tea shops,
            restaurants, and halal markets that transformed the commercial
            landscape of Franklin Avenue. The result was a neighborhood that
            was both progressive-countercultural and immigrant-entrepreneurial
            — two cultures that shared more values than either might initially
            have recognized, including a deep commitment to community
            self-reliance and mutual support.
          </p>
          <p>
            By the 2000s and 2010s, Seward had settled into its identity as
            one of the most politically active, cooperatively organized, and
            demographically diverse neighborhoods in Minneapolis — a place
            where the co-op board elections draw genuine passion, where
            neighborhood meetings are well-attended, and where the phrase
            &quot;community engagement&quot; is not a bureaucratic cliché
            but something residents actually practice, week after week, year
            after year.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Seward">
        <Prose>
          <p>
            Living in Seward means living in a neighborhood that has opinions.
            Strong ones. About food systems, about housing policy, about bike
            infrastructure, about whether the new development on Franklin is
            the right density and whether it includes enough affordable units.
            This is not a place where people retreat into their houses and
            ignore what&apos;s happening on their block. The Seward
            Neighborhood Group — the community organization that serves as
            the neighborhood&apos;s civic backbone — runs programming,
            facilitates community input on development, organizes events, and
            provides a forum for the kind of participatory democracy that most
            neighborhoods talk about but few actually practice. If you move to
            Seward and don&apos;t attend at least one neighborhood meeting in
            your first year, someone will probably ask you why.
          </p>
          <p>
            The demographic mix is one of the most genuinely diverse in the
            city. Longtime homeowners — some of whom have been in their
            bungalows since the 1970s co-op wave — live alongside Somali and
            Oromo families, university-affiliated professionals, young families
            drawn by Seward Montessori, artists and activists, and a steady
            stream of graduate students from the nearby U of M campus. The
            diversity here is not the curated, photogenic kind that shows up
            in real estate marketing. It&apos;s messy, sometimes awkward, and
            occasionally contentious — the co-op member who has been fermenting
            their own kimchi since 1985 and the Somali grandmother buying goat
            at the halal market on Franklin may not share a language, but they
            share a neighborhood, and the infrastructure of community life
            creates points of contact that wouldn&apos;t exist in a more
            homogeneous place.
          </p>
          <p>
            The physical texture of Seward is residential and unpretentious.
            The streets south of Franklin are lined with mature elms and maples
            — the survivors of Dutch elm disease — shading modest houses with
            deep porches and narrow lots. The scale is human. Nobody built a
            McMansion in Seward. The houses are small, the yards are small, the
            garages are detached and sometimes leaning, and the overall effect
            is a neighborhood that was built to be lived in rather than looked
            at. Community gardens are scattered throughout — some managed by
            the neighborhood group, some informal arrangements between
            neighbors — and in summer the entire neighborhood feels faintly
            green and slightly overgrown, in the best possible way.
          </p>
          <p>
            Franklin Avenue, the neighborhood&apos;s commercial spine, is
            where Seward&apos;s diversity is most visible and most complex.
            Walk the stretch between Cedar and Hiawatha on any given weekday
            and you pass through several worlds — a Somali tea shop where
            elders sit for hours over tiny cups of shaah, the co-op with its
            earnest signage about local sourcing, a halal grocery with goat
            carcasses hanging in the window, a yoga studio, a Laundromat, a
            used bookstore. The avenue is not gentrified in the way that
            Nicollet Avenue in{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>
            {" "}or Hennepin Avenue in Uptown has been — it&apos;s rougher
            around the edges, less curated, and more honest about the tensions
            between the people who share it. That honesty is part of what makes
            Seward feel real in a way that polished neighborhoods cannot
            replicate.
          </p>
          <p>
            Cycling is not a hobby in Seward — it&apos;s a transportation mode
            that rivals the car. The Midtown Greenway&apos;s eastern terminus
            sits at the neighborhood&apos;s southern edge, and the West River
            Parkway trail runs along the Mississippi to the north and east. The
            result is that Seward is one of the best-connected cycling
            neighborhoods in the city, and the bike culture here is less
            performative-spandex and more practical-panniers — people who bike
            to the co-op, bike to work at the university, bike to pick up their
            kids at Seward Montessori. The bike racks outside the co-op are as
            full as any parking lot in the suburbs.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/cedar-riverside" className="text-[#2a9d8f] hover:underline">
              Cedar-Riverside
            </Link>
            {" "}to the west shares Seward&apos;s diversity and progressive
            politics but has a denser, more urban texture — the high-rises of
            Riverside Plaza and the energy of the West Bank campus. To the
            north,{" "}
            <Link href="/neighborhoods/prospect-park-east-river-road" className="text-[#2a9d8f] hover:underline">
              Prospect Park
            </Link>
            {" "}offers a more residential, university-adjacent character with
            Green Line light rail access. Seward sits between these neighbors
            with its own distinct identity — quieter than Cedar-Riverside, more
            politically engaged than Prospect Park, and more cooperatively
            organized than either.
          </p>
        </Prose>
        <Quote
          text="I've lived in a lot of Minneapolis neighborhoods, and Seward is the only one where I feel like my neighbors and I are actually building something together. It's not just a place to live — it's a project."
          cite="Seward resident and co-op member"
        />

        <ImageSlot
          src="/images/neighborhoods/seward/residential-street.webp"
          alt="Tree-lined residential street in Seward, Minneapolis, with Craftsman bungalows and deep front porches"
          caption="Seward's residential streets — modest houses, mature trees, and the kind of porches people actually use"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Seward Food, Drink & Local Spots">
        <Prose>
          <p>
            Seward&apos;s food scene is smaller than{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>
            &apos;s or{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>
            &apos;s, but it punches above its weight in character and
            conviction. This is a neighborhood where the grocery store is a
            cultural institution, the most celebrated restaurant has a
            relationship with every farm that supplies it, and the most
            affordable lunch on the corridor might be a plate of rice and
            goat from a Somali spot that doesn&apos;t bother with Yelp. The
            food here reflects the neighborhood&apos;s values — local sourcing,
            cooperative economics, immigrant entrepreneurship — and the
            result is a scene that is less about dining out and more about
            eating well in a community that cares intensely about where its
            food comes from and who benefits from its sale.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Birchwood Cafe", tag: "Farm-to-Table American", price: "$$", url: "https://birchwoodcafe.com", description: "3311 East 25th Street. Birchwood is Seward's most beloved restaurant and one of the defining farm-to-table institutions in Minneapolis — a place that was sourcing from local farms before 'farm-to-table' was a marketing term. The menu changes seasonally and features dishes built around whatever is best at the moment: wild rice porridge in winter, heirloom tomato salads in August, pasture-raised chicken year-round. The baked goods are exceptional. The space is bright and warm, with a patio that fills the moment the temperature cracks 50 degrees. Birchwood is where Seward residents go for brunch, for a weeknight dinner, for a birthday, and for the reassurance that a restaurant can be both excellent and principled." }} />
          <PlaceCardComponent place={{ name: "Seward Co-op Friendship Store", tag: "Cooperative Grocery / Deli", price: "$–$$", url: "https://seward.coop", description: "2823 East Franklin Avenue. The original Seward Co-op location — a member-owned grocery that has been the neighborhood's center of gravity since 1972. The store emphasizes local, organic, and sustainably sourced products, and the deli and hot bar serve prepared food that is genuinely good, not just 'good for a grocery store.' The bulk section is extensive. The produce is seasonal. The bulletin board is a civic institution in its own right. Anyone can shop here; membership costs $100 (one-time, lifetime) and grants voting rights in co-op governance." }} />
          <PlaceCardComponent place={{ name: "Seward Co-op Creamery", tag: "Cooperative Grocery / Café", price: "$–$$", url: "https://seward.coop", description: "2601 East Franklin Avenue. The co-op's second location, opened in 2015 in a renovated former creamery building. The Creamery store is slightly larger than the Friendship Store and includes a café with coffee, baked goods, and prepared foods. The building itself is beautiful — a thoughtful renovation that kept the industrial bones of the original creamery while adding the warmth and light of a modern market. The two stores serve slightly different vibes: Friendship is the neighborhood living room; the Creamery is the neighborhood's good side." }} />
          <PlaceCardComponent place={{ name: "A Slice of New York", tag: "Pizza", price: "$", description: "2516 East Franklin Avenue. Thin-crust, New York-style pizza by the slice or by the pie — unpretentious, consistent, and exactly what you want at 9 PM when the co-op is closed and you need dinner. The slices are large, foldable, and served without ceremony. A Seward institution for late-night food and neighborhood gathering." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Franklin Avenue Corridor">
          <Prose>
            <p>
              The stretch of Franklin Avenue running through Seward is one of
              the more culturally complex commercial corridors in Minneapolis.
              East African businesses — Somali restaurants, halal groceries,
              tea shops, clothing stores, and money transfer services — share
              the avenue with the co-op, a handful of bars, and a scattering
              of small businesses that serve the neighborhood&apos;s eclectic
              population. This is not a polished dining destination. The
              Somali restaurants along Franklin are typically modest in
              presentation — fluorescent lighting, plastic tablecloths,
              cafeteria-style service — and extraordinary in flavor.
              Sambusas, goat stew over rice, chapati, and spiced tea are the
              staples. The prices are low, the portions are large, and the
              experience is a window into a food culture that most Minneapolis
              dining guides overlook entirely.
            </p>
          </Prose>
          <PlaceCardComponent place={{ name: "The Friendly Tavern", tag: "Neighborhood Bar", price: "$", description: "2820 East Franklin Avenue. A no-frills neighborhood bar that is exactly what its name suggests — friendly, unpretentious, and embedded in the community. Cheap drinks, bar food, and a clientele that skews local. The Friendly is the kind of bar that every neighborhood needs and few neighborhoods outside of places like Seward manage to keep alive." }} />
          <PlaceCardComponent place={{ name: "Mim's Café", tag: "Coffee / Breakfast", price: "$", description: "A small neighborhood café on Franklin serving coffee, breakfast sandwiches, and baked goods. The kind of morning spot where the regulars know each other and the barista remembers your order. Unpretentious in the way that Seward does best." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Seward&apos;s food landscape extends into the neighboring
              corridors. The{" "}
              <Link href="/neighborhoods/cedar-riverside" className="text-[#2a9d8f] hover:underline">
                Cedar-Riverside
              </Link>
              {" "}neighborhood, immediately to the west across Cedar Avenue,
              has a dense cluster of East African restaurants and groceries
              that Seward residents treat as an extension of their own food
              ecosystem. The Midtown Global Market — a multi-vendor food hall
              in the old Sears building on Lake Street, a short bike ride
              south — offers cuisines from around the world under one roof.
              And the Franklin Avenue corridor continues west through
              Cedar-Riverside with additional restaurants, tea houses, and
              markets. The truth about eating in Seward is that the
              neighborhood&apos;s food scene is best understood not in
              isolation but as part of a broader corridor that runs along
              Franklin Avenue from the Mississippi to Hennepin — one of the
              most culturally diverse food stretches in the Twin Cities.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Seward">
        <Prose>
          <p>
            Seward is not a parks-and-lakes neighborhood in the Southwest
            Minneapolis sense — there is no Bde Maka Ska or Harriet at your
            doorstep. But the neighborhood&apos;s outdoor assets are
            substantial and, in some ways, more interesting than a
            manicured lakefront. The Mississippi River defines the
            neighborhood&apos;s northeastern boundary, the Midtown Greenway
            runs along its southern edge, and a network of smaller parks and
            community gardens fills the residential blocks in between. For
            people who define &quot;outdoors&quot; as trails, water, and green
            space rather than beach access and sailboats, Seward delivers.
          </p>
        </Prose>

        <ArticleSubsection title="The Mississippi River & West River Parkway">
          <Prose>
            <p>
              Seward sits along the Mississippi River at a point where the
              river is wide, powerful, and genuinely beautiful — not the
              tamed, channelized river of the industrial districts downstream,
              but the river gorge, where the Mississippi cuts between
              limestone bluffs and the tree canopy hangs over the water like
              a tunnel of green. West River Parkway runs along the
              neighborhood&apos;s river edge, providing a paved trail for
              walking, running, and cycling that connects north to the
              University of Minnesota and the Stone Arch Bridge, and south
              to Minnehaha Falls and the broader Grand Rounds trail system.
              The river bluffs here offer some of the best views in the city
              — particularly in fall, when the cottonwoods and maples along
              the gorge turn gold and orange against the dark water below.
            </p>
            <p>
              Access to the riverfront is somewhat limited by topography —
              the bluffs are steep in places, and the parkway sits above the
              river rather than at its level. But several points provide
              access to the water&apos;s edge, and the trail itself is one
              of the finest stretches of urban riverfront in the Upper Midwest.
              For Seward residents, the river is a daily presence — visible
              from the neighborhood&apos;s eastern streets, audible on quiet
              nights, and accessible within a few minutes by foot or bike
              from anywhere in the neighborhood.
            </p>
            <p>
              The river gorge between Minneapolis and St. Paul is the only
              true gorge along the entire 2,340-mile length of the Mississippi
              — a geological fact that never stops being remarkable. The
              limestone bluffs, the overhanging canopy of cottonwoods and
              silver maples, the occasional bald eagle circling above the
              water — this is wilderness threaded through a city, and Seward
              sits at one of its most accessible points. In winter, the
              river trail is quieter but no less beautiful, with ice forming
              along the shoreline and cross-country skiers replacing the
              summer cyclists. In spring, the snowmelt swells the river and
              the bluffs turn green almost overnight. Living near the gorge
              means living with the rhythm of a river that predates the city
              by millennia and will outlast it by as many more.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/seward/river-trail.webp"
            alt="West River Parkway trail along the Mississippi River near Seward, Minneapolis, with autumn foliage"
            caption="West River Parkway — the Mississippi River gorge at Seward's doorstep"
          />
        </ArticleSubsection>

        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway is a 5.5-mile dedicated bike and pedestrian
              trail running east-west through South Minneapolis in a former
              railroad trench — and its eastern terminus is in Seward, where
              it connects to the West River Parkway trail. This makes Seward
              the intersection point of two of the best cycling corridors in
              the city, and the result is a neighborhood where serious cycling
              infrastructure is not aspirational but actual. The Greenway is
              grade-separated from car traffic, plowed in winter, lit at night,
              and used year-round by commuters, recreational cyclists, runners,
              and walkers. From Seward, you can ride the Greenway west to
              Uptown, the Chain of Lakes, and beyond — a car-free commute that
              converts non-cyclists into believers.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Seward Park & Matthews Park">
          <Prose>
            <p>
              Seward Park, near the center of the neighborhood, is the
              community&apos;s primary park — a modest green space with a
              playground, playing fields, and a recreation center that hosts
              programming year-round. It&apos;s the kind of neighborhood park
              that won&apos;t appear on any tourism list but anchors the
              daily life of the community — where kids play after school,
              where the neighborhood group holds summer events, where the
              Fourth of July celebrations happen. Matthews Park, at the
              neighborhood&apos;s southern edge near 28th and 25th Avenue,
              provides additional recreation space with a community center,
              gym, playing fields, and a wading pool. Both parks are
              well-used and well-loved, if not exactly scenic in the
              Minnehaha Falls sense.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Community Gardens">
          <Prose>
            <p>
              Seward has one of the higher densities of community gardens in
              Minneapolis, which should surprise no one who has spent five
              minutes in the co-op. The gardens — some managed by the Seward
              Neighborhood Group, some by informal collectives of neighbors —
              are scattered throughout the residential blocks and reflect the
              neighborhood&apos;s diversity in miniature. Somali families
              growing peppers and cilantro next to longtime residents tending
              heirloom tomatoes next to graduate students experimenting with
              urban permaculture. The gardens are small, productive, and
              deeply social — places where neighbors who might not otherwise
              interact end up sharing seeds, advice, and occasionally
              zucchini.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Seward Schools">
        <Prose>
          <p>
            Schools in Seward offer a profile that reflects the
            neighborhood&apos;s values — diversity, community engagement, and
            a willingness to try approaches that differ from the conventional
            suburban model. The picture is more nuanced than a simple test-score
            ranking would suggest, and families who move here for the schools
            tend to be those who prioritize cultural richness and pedagogical
            philosophy alongside academic outcomes.
          </p>
          <p>
            Seward Montessori School (PreK–5) is the neighborhood&apos;s
            elementary school and, for many families, the primary reason they
            chose Seward over other neighborhoods. It is one of the few public
            Montessori programs in the Minneapolis Public Schools system, and
            it draws families from across the city through the district&apos;s
            open enrollment process. The school serves a diverse student body
            and follows the Montessori model of mixed-age classrooms,
            self-directed learning, and hands-on materials. It is not the
            highest-scoring elementary in the district by standardized metrics,
            but it is one of the most intentionally community-connected —
            parents are actively involved, the school partners with
            neighborhood organizations, and the pedagogical approach attracts
            families who are looking for something other than the
            teach-to-the-test model.
          </p>
          <p>
            Justice Page Middle School serves the area for grades 6–8, and
            South High School — located nearby on East 54th Street — is the
            comprehensive high school for the broader area. South High is known
            for its exceptional diversity (over 40 home languages spoken
            among its student body), its strong music and arts programs, and a
            student culture that reflects the progressive values of the
            neighborhoods it serves. Like most Minneapolis public schools,
            South earns mixed reviews from standardized metrics but generates
            genuine loyalty among families who value diversity and community
            engagement over raw test scores.
          </p>
          <p>
            Minneapolis Public Schools&apos; open enrollment system means that
            Seward families are not limited to neighborhood schools. Many
            families access magnet programs, citywide options, and charter
            schools across the district. The school landscape here rewards
            engaged parents who are willing to research and advocate — it is
            less automatic than the pipeline in{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            {" "}or{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            , but the options are real and, for the right family, genuinely
            compelling.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Seward Real Estate & Housing">
        <Prose>
          <p>
            Seward offers one of the more interesting value propositions in
            Minneapolis real estate — a walkable, bikeable, community-rich
            neighborhood with genuine diversity and strong civic culture, at
            prices that are meaningfully below the Southwest Minneapolis
            neighborhoods that dominate the city&apos;s housing conversation.
            The median home sale price has ranged between roughly $290,000 and
            $380,000 in 2025, depending on size, condition, and proximity to
            the river — close to the citywide median and roughly half what
            you&apos;d pay in{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            {" "}or{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            .
          </p>
          <p>
            Prices have been rising steadily — the combination of Greenway
            access, co-op culture, and the neighborhood&apos;s increasing
            appeal to young professionals and families has pushed values
            upward over the past decade. The 2020 disruptions created a brief
            dip, but by 2023–2024 the market had recovered, and by 2025
            competition for well-maintained homes was real, if not frenzied.
            Seward is not yet experiencing the bidding wars common in the
            hottest Southwest neighborhoods, but it&apos;s no longer the
            overlooked affordable option it was ten years ago.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              The dominant housing types in Seward are Craftsman bungalows and
              simple frame houses from the 1900s through 1940s — the same
              housing stock that characterizes much of South Minneapolis, but
              here with the particular patina of a neighborhood that has been
              more interested in community gardens than kitchen renovations.
              At the lower end of the market ($240,000–$320,000), you&apos;re
              looking at smaller bungalows or houses that need updating —
              original kitchens, single bathrooms, the kind of deferred
              maintenance that comes with generations of owners who prioritized
              other things. The mid-range ($320,000–$400,000) gets you a
              well-maintained three-bedroom home or a larger updated property.
              Above $400,000, you&apos;re in renovated territory or looking
              at homes near the river with views of the gorge.
            </p>
            <p>
              Duplexes and triplexes are more common in Seward than in
              Southwest neighborhoods, reflecting the area&apos;s
              historically mixed-income character and its tradition of
              cooperative and communal living. Some properties are
              owner-occupied duplexes where the rental income helps with the
              mortgage — a model that fits naturally in a neighborhood built
              around cooperative economics. New construction has been limited
              but present, primarily along Franklin Avenue and near the
              Greenway, adding apartments and condominiums that have shifted
              the mix slightly toward density.
            </p>
            <p>
              The rental market is active, with a mix of older apartment
              buildings, converted houses, and newer developments. Rents for
              one-bedroom apartments typically range from $1,000 to $1,400 —
              affordable by Minneapolis standards, though rising. The
              neighborhood&apos;s renter population is diverse, including
              graduate students, young professionals, immigrant families, and
              long-term renters who have made Seward home for years.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We looked at fifty houses across South Minneapolis. Seward was the only neighborhood where we could afford a house, walk to a grocery store we actually believed in, and bike to work on a trail. That combination doesn't exist many places."
          cite="Recent Seward homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Seward">
        <Prose>
          <p>
            Seward is one of the best-connected neighborhoods in Minneapolis
            for people who prefer two wheels to four — and the infrastructure
            reflects a community that has actively advocated for alternatives
            to car dependency for decades. The neighborhood earns a Walk Score
            of 76 and an exceptional Bike Score of 92, numbers that underscore
            what residents already know: you can live a full life in Seward
            without a car, and many people do.
          </p>
          <p>
            The Midtown Greenway is the centerpiece — its eastern terminus
            in Seward connects to the West River Parkway trail, creating a
            cycling network that reaches from the Mississippi River to the
            Chain of Lakes without ever touching a road. For bike commuters
            heading to downtown, the university, or jobs across South
            Minneapolis, the Greenway is transformative. It is plowed in
            winter — a detail that separates it from most urban trails and
            makes year-round cycling viable for the committed. The West River
            Parkway trail extends north along the river to the Stone Arch
            Bridge, downtown, and Northeast Minneapolis, and south to
            Minnehaha Falls and Fort Snelling.
          </p>
          <p>
            Transit access is adequate but not exceptional. Metro Transit bus
            routes run along Franklin Avenue, Cedar Avenue, and Riverside
            Avenue, providing connections to downtown, the University of
            Minnesota, and the broader transit network. The Green Line light
            rail — running along University Avenue between downtown
            Minneapolis and downtown St. Paul — is accessible from the
            neighboring{" "}
            <Link href="/neighborhoods/prospect-park-east-river-road" className="text-[#2a9d8f] hover:underline">
              Prospect Park
            </Link>
            {" "}neighborhood, about a 10-minute bike ride or short bus
            connection from most of Seward. The Blue Line is accessible via
            the Greenway connection to the 46th Street station in{" "}
            <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
              Hiawatha
            </Link>
            .
          </p>
          <p>
            By car, downtown Minneapolis is 10–15 minutes. The University of
            Minnesota campus is 5–10 minutes. MSP International Airport is
            approximately 15 minutes via Highway 55. Street parking is
            generally available on residential blocks, and the neighborhood
            has not experienced the parking pressure that denser areas like
            Uptown or{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>
            {" "}face — partly because Seward residents are, on average, more
            likely to own bikes than second cars.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/seward/greenway.webp"
          alt="The Midtown Greenway bike trail near its eastern terminus in Seward, with cyclists commuting"
          caption="The Midtown Greenway's eastern terminus — Seward sits at the intersection of the city's best cycling corridors"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Seward&apos;s tensions are quieter than{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>
            &apos;s post-2020 reckoning or{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>
            &apos;s rapid transformation, but they are no less real. The
            neighborhood is grappling with the familiar urban paradox: the
            qualities that make it special — affordability, diversity,
            cooperative culture, community engagement — are precisely the
            qualities that attract new residents whose arrival can erode those
            same features. This is not unique to Seward, but the neighborhood&apos;s
            strong civic culture means the conversation is happening out loud,
            in public, with the kind of earnest intensity that Seward brings
            to everything.
          </p>
        </Prose>

        <ArticleSubsection title="Development and Density">
          <Prose>
            <p>
              New development along Franklin Avenue and near the Greenway has
              been a source of ongoing debate. Several mixed-use buildings —
              apartments above ground-floor retail — have been built or
              proposed in recent years, and each one has triggered the same
              set of questions: Is it the right density? Does it include
              enough affordable units? Will it displace existing businesses?
              Does the architecture respect the neighborhood&apos;s
              character? The Seward Neighborhood Group facilitates community
              input on these projects, and the meetings can be contentious —
              not in the NIMBYist sense of wealthy homeowners protecting
              property values, but in the genuinely democratic sense of a
              community trying to reconcile its values (affordability,
              inclusion, sustainability) with the realities of a growing city
              and a desirable neighborhood.
            </p>
            <p>
              The co-op itself has not been immune to these debates. The
              opening of the Creamery store in 2015 was widely celebrated,
              but it also prompted questions about whether the co-op was
              expanding beyond its original mission, whether the new store
              was designed for a different — wealthier, whiter — customer
              base, and what the co-op&apos;s role should be in shaping
              neighborhood development. These are not easy questions, and
              the fact that Seward residents ask them — loudly, publicly,
              and with genuine investment in the answers — is both the
              neighborhood&apos;s greatest strength and its most exhausting
              feature.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Displacement and Affordability">
          <Prose>
            <p>
              Rising home prices and rents have begun to push out some of the
              people who built the neighborhood&apos;s identity. Long-term
              renters — including immigrant families, artists, and the
              graduate students who have been a fixture of Seward for decades
              — face increasing pressure as older apartment buildings are
              renovated or replaced and rents rise accordingly. The Somali and
              East African communities along Franklin Avenue, while still
              present and visible, have seen some dispersal as families move
              to more affordable areas — Eden Prairie, Burnsville, Brooklyn
              Park — following a pattern that has played out in immigrant
              neighborhoods across urban America.
            </p>
            <p>
              The neighborhood&apos;s cooperative tradition offers some
              resistance to these forces. Community land trusts, cooperative
              housing, and the co-op&apos;s own commitment to affordability
              provide models for alternative ownership that don&apos;t exist
              in most neighborhoods. But they operate at the margins of a
              housing market driven by larger forces — interest rates,
              zoning policy, regional population growth — that no
              neighborhood-level institution can fully counteract. The
              question is whether Seward&apos;s cooperative infrastructure
              can preserve enough affordability to maintain the diversity
              that makes the neighborhood worth preserving in the first
              place. The jury is still out.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Like much of Minneapolis, Seward experienced an increase in
              crime — particularly property crime, catalytic converter theft,
              and car break-ins — during the 2020–2022 period. By 2025–2026,
              most crime categories had declined from their peaks, but
              remained elevated compared to pre-2020 levels. The Franklin
              Avenue corridor has historically been the neighborhood&apos;s
              most challenging area for safety, with occasional incidents
              related to the social service organizations and shelters that
              operate along the avenue. Residential blocks south of Franklin
              are generally quiet and safe.
            </p>
            <p>
              The neighborhood&apos;s relationship with policing is
              complicated in the way that relationships with policing are
              complicated across progressive Minneapolis. Many Seward
              residents supported the 2021 ballot question on public safety
              reform, and the neighborhood has been active in exploring
              alternative approaches to safety — community mediation, mental
              health response teams, restorative justice programs. The
              tension between wanting a safe neighborhood and questioning
              the methods by which safety is traditionally enforced is a
              live conversation in Seward, and residents hold it with more
              nuance and less defensiveness than in most places.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Co-op Question">
          <Prose>
            <p>
              The Seward Co-op is the neighborhood&apos;s most important
              institution, and its evolution mirrors the neighborhood&apos;s
              own tensions. What began as a scrappy, volunteer-run buying
              club in a basement is now a multi-million dollar operation
              with two locations, hundreds of employees, and a customer base
              that extends well beyond the neighborhood. The co-op has
              worked hard to maintain its mission — local sourcing, fair
              labor practices, democratic governance, community investment —
              but success brings its own challenges. Some long-time members
              worry that the co-op has become too professionalized, too
              focused on the aesthetics of natural foods retail, too similar
              to the Whole Foods model it once defined itself against. Others
              argue that growth is necessary for sustainability and that the
              co-op&apos;s expansion has allowed it to do more — not less —
              for the community.
            </p>
            <p>
              This is a debate that matters beyond Seward, because the
              co-op model is one of the few alternatives to corporate food
              retail that has actually scaled. If Seward Co-op can remain
              democratic, community-accountable, and accessible to people
              across income levels while operating at a commercially viable
              scale, it proves something important about cooperative
              economics. If it can&apos;t, the loss is not just Seward&apos;s
              but the broader movement&apos;s. The stakes, in other words,
              are higher than they look from the cheese aisle.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Seward FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
