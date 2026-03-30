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
    title: "Webber - Camden, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Webber-Camden, Minneapolis — the natural swimming pool, Webber Park, Camden's diverse core, affordable housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Webber - Camden",
  deck: "The heart of Camden, where Webber Park's natural swimming pool draws the whole North Side in summer, the Mississippi River runs along the eastern edge, and a diverse community of families holds down one of the most underrated residential corners of Minneapolis.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Webber-Camden?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Webber-Camden" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Webber - Camden, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,800", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$215K–$300K", label: "Median home sale price range (2025 data)" },
      { value: "2015", label: "Webber Park natural swimming pool opened" },
      { value: "1910s–1950s", label: "Era most homes were built" },
      { value: "4.7 acres", label: "Webber Park natural pool complex" },
      { value: "15–20 min", label: "Drive to downtown Minneapolis" },
      { value: "58", label: "Walk Score" },
      { value: "70", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Webber-Camden a good neighborhood in Minneapolis?",
      answer:
        "Webber-Camden is a solid residential neighborhood in Camden, the northernmost section of North Minneapolis. It offers affordable housing, Webber Park with its unique natural swimming pool, Mississippi River access, and a diverse, family-oriented community. The neighborhood faces challenges common to North Minneapolis — crime rates above the citywide average, limited commercial options, and legacies of disinvestment — but it also has strong community identity, engaged residents, and outdoor amenities that rival neighborhoods costing twice as much. For families seeking affordable homeownership with real neighborhood character, Webber-Camden deserves a serious look.",
    },
    {
      question: "What is the Webber Park natural swimming pool?",
      answer:
        "The Webber Park natural swimming pool, opened in 2015, is the first chemical-free public swimming pool in the United States. Instead of chlorine, the pool uses a natural filtration system — water flows through a regeneration basin filled with aquatic plants that filter and clean the water biologically. The pool complex includes a main swimming area, a wading pool for young children, and the regeneration wetland that doubles as a landscape feature. The pool is operated by the Minneapolis Park and Recreation Board and is free to use, making it one of the most significant public amenities on the North Side.",
    },
    {
      question: "Is Webber-Camden, Minneapolis safe?",
      answer:
        "Webber-Camden's safety profile is mixed, consistent with broader North Minneapolis patterns. The residential blocks are generally quiet, and many residents feel safe on their streets during the day. Property crime — car break-ins, theft, catalytic converter theft — is the most common concern. Violent crime rates are higher than the citywide average but lower than in some North Side neighborhoods closer to downtown. Crime rose across the area during 2020–2022 and has since declined, though some categories remain elevated. Community policing efforts and neighborhood watch programs are active.",
    },
    {
      question: "How much do homes cost in Webber-Camden, Minneapolis?",
      answer:
        "Median home sale prices in Webber-Camden ranged from roughly $215,000 to $300,000 in 2025, well below the citywide median. Smaller homes needing updates can be found in the $160,000–$230,000 range, while larger, renovated homes on the best blocks can reach $300,000–$360,000. The neighborhood remains one of the most affordable in Minneapolis for buyers seeking single-family homes. The gap between Webber-Camden prices and citywide medians reflects both the challenges of the North Side and the opportunity for buyers willing to invest in a community with real strengths.",
    },
    {
      question: "Where exactly is Webber-Camden in Minneapolis?",
      answer:
        "Webber-Camden is in the Camden community in far north Minneapolis. It is roughly bounded by 42nd Avenue North and 44th Avenue North to the north, the Mississippi River to the east, Dowling Avenue North to the south, and Humboldt Avenue North to the west. It sits east of the Victory neighborhood, north of the Folwell and McKinley neighborhoods, and along the Mississippi River, which separates it from North Minneapolis's Marshall Terrace neighborhood and the city of Minneapolis's northeast quadrant.",
    },
    {
      question: "What schools serve Webber-Camden?",
      answer:
        "Webber-Camden is served by Minneapolis Public Schools. Jenny Lind Elementary and other nearby elementary options serve the area. Olson Middle School serves grades 6–8, and North High School is the comprehensive high school. Charter school options and the district's open enrollment system provide additional choices. School outcomes vary, and many families actively research and navigate the enrollment system to find the best fit.",
    },
    {
      question: "Is Webber-Camden on the Mississippi River?",
      answer:
        "Yes — Webber-Camden's eastern boundary is the Mississippi River, and the neighborhood has direct access to the river trail system and North Mississippi Regional Park. The riverfront here is less developed than in downtown or South Minneapolis — more natural, more wooded, and less crowded. The river trail connects north to the Coon Rapids Dam and south through the city toward downtown and beyond. For a neighborhood at this price point, the river access is a significant and underappreciated asset.",
    },
    {
      question: "What is Camden in Minneapolis?",
      answer:
        "Camden is a community district in far north Minneapolis that includes several neighborhoods: Webber-Camden, Victory, Lind-Bohanon, Shingle Creek, and Camden Industrial. Camden is generally considered the most residential and stable part of the North Side, with higher homeownership rates and lower crime rates than neighborhoods closer to downtown. The Camden community has its own identity — distinct from the Near North and Hawthorne neighborhoods that dominate media coverage of 'North Minneapolis' — and residents often identify as being from Camden rather than from the broader North Side.",
    },
  ],
  nearby: [
    { name: "Victory", slug: "victory", description: "Victory Memorial Drive, residential, far north Camden" },
    { name: "Lind - Bohanon", slug: "lind-bohanon", description: "Far north, Mississippi River, affordable residential" },
    { name: "Folwell", slug: "folwell", description: "South of Camden, Folwell Park, transitional blocks" },
    { name: "McKinley", slug: "mckinley", description: "South of Webber-Camden, residential North Side" },
    { name: "Camden Industrial", slug: "camden-industrial", description: "Industrial riverfront east of Camden" },
    { name: "Marshall Terrace", slug: "marshall-terrace", description: "Small riverfront neighborhood across the industrial corridor" },
  ],
  closing: {
    title: "What Makes Webber-Camden Worth Knowing",
    paragraphs: [
      "Webber-Camden is the kind of neighborhood that rarely makes anyone's must-visit list, and that is both its challenge and its charm. There are no trendy restaurants here, no craft cocktail bars, no new-construction condos with rooftop decks. What there is — and what matters more than any of those things — is a community of families who own homes they can afford, a park with the only natural swimming pool in America, a stretch of Mississippi River that most of the city has never seen, and the kind of neighbor-to-neighbor relationships that hold a place together when institutions fail.",
      "The challenges are serious and persistent — crime, disinvestment, school quality, commercial vacancy, and the psychic weight of living in a part of the city that much of Minneapolis has decided to write off. But Webber-Camden has not written itself off. The residents who stay, who maintain their homes, who show up at park board meetings and school events, who swim in that improbable natural pool on summer afternoons — they are betting on a neighborhood that has more going for it than the headlines suggest. That bet deserves more takers.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a July afternoon, the Webber Park natural swimming pool is doing
          what no other public pool in America can do — filtering water through
          a wetland of aquatic plants instead of pumping it full of chlorine.
          Kids are cannonballing off the edge while their parents sit on the
          surrounding deck, some reading, some watching, some just letting the
          sun hit their faces. The water is clear and soft — no chemical sting
          in your eyes, no bleach smell on your skin. A group of Hmong
          teenagers is playing a complicated game involving a volleyball and
          rules that seem to shift with each point. Two Somali women in
          swimwear designed for modesty are wading in the shallow end with
          toddlers. A white-haired man in a lawn chair is reading a paperback
          with the patience of someone who has been coming to this park his
          entire life. This is Webber-Camden — a neighborhood where the most
          innovative public amenity in the city sits in the part of town that
          most of Minneapolis never visits.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/webber-camden/hero.webp"
        alt="Webber Park natural swimming pool in the Webber-Camden neighborhood of Minneapolis on a summer day"
        caption="Webber Park — home to the first chemical-free public swimming pool in the United States"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Webber-Camden, Minneapolis?">
        <Prose>
          <p>
            Webber-Camden is a residential neighborhood in the Camden
            community of far north Minneapolis, roughly bounded by 42nd and
            44th Avenues North to the north, the Mississippi River to the
            east, Dowling Avenue North to the south, and Humboldt Avenue
            North to the west. Home to approximately 4,800 residents, it
            occupies the geographic center of Camden and takes its identity
            from Webber Park — the community&apos;s central green space and
            home to the only natural swimming pool in the United States.
          </p>
          <p>
            The neighborhood is diverse in the way that Camden broadly is
            diverse — a mix of Black, white, Hmong, East African, and Latino
            families who share blocks and schools and parks. The housing stock
            is modest — bungalows and small frame houses from the 1910s
            through 1950s — and prices are well below the citywide median,
            making Webber-Camden one of the more accessible entry points for
            homeownership in Minneapolis. The Mississippi River runs along
            the eastern edge, providing access to North Mississippi Regional
            Park and the river trail system — an amenity that neighborhoods
            costing three times as much would envy.
          </p>
          <p>
            Webber-Camden is not a flashy neighborhood. It does not have a
            commercial corridor full of restaurants or a nightlife scene or
            new construction rising on every corner. What it has is the quiet
            infrastructure of residential life — homes with yards, parks with
            programming, schools with dedicated teachers, and a community
            that shows up for itself even when the city doesn&apos;t always
            show up for it.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Webber-Camden Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/webber-camden/neighborhood-sign.webp"
          alt="Webber-Camden neighborhood sign in Minneapolis"
          caption="The Webber-Camden neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Webber-Camden History & Origins">
        <Prose>
          <p>
            The land that is now Webber-Camden is part of the ancestral
            homeland of the Dakota people — the Mdewakanton band in
            particular — for whom the Mississippi River and its surrounding
            landscapes held deep spiritual and practical significance. The
            dispossession of Dakota lands through treaties, war, and forced
            removal is the foundational history of this place, preceding and
            enabling everything that followed.
          </p>
          <p>
            European-American settlement of far north Minneapolis began in
            the late 19th century, and the area that would become
            Webber-Camden developed primarily in the 1910s through 1940s as
            the city expanded northward. The neighborhood was platted for
            working-class residential development — small houses on standard
            lots for families employed in the city&apos;s mills, factories,
            and rail yards. The name &quot;Webber&quot; comes from Charles C.
            Webber, a local businessman and park advocate who helped establish
            the park that anchors the neighborhood.
          </p>
          <p>
            Webber Park itself was developed in the early 20th century as
            part of the Minneapolis park system&apos;s expansion into the
            north side. The park became the social center of the neighborhood
            — the place where kids swam in summer, played baseball in spring,
            and sledded in winter. The opening of the natural swimming pool
            in 2015, replacing the aging conventional pool, was a watershed
            moment — proof that innovative public investment could happen on
            the North Side, not just in the wealthier parts of the city.
          </p>
          <p>
            The neighborhood&apos;s demographic shifts mirror those of the
            broader North Side. Through the mid-20th century, Webber-Camden
            was predominantly white working-class. Racial covenants, redlining,
            and the broader patterns of racial segregation in Minneapolis
            restricted who could live where, and when those legal barriers
            fell, the neighborhood changed — gradually at first, then more
            rapidly. Black families, then Hmong refugees in the 1980s and
            1990s, then East African immigrants in the 2000s, each added
            layers to the community&apos;s identity. The result is the
            diverse, multicultural neighborhood that exists today — built
            not by design but by the successive waves of people seeking
            affordable housing and a community that would accept them.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Webber-Camden">
        <Prose>
          <p>
            Living in Webber-Camden means living in a neighborhood where the
            houses are small, the yards are big enough for a garden, and the
            neighbors know each other in the way that neighbors know each
            other when they&apos;ve been sharing a block for years. The
            residential texture is unpretentious — bungalows with front
            porches, chain-link fences, detached garages, basketball hoops
            in driveways, and the occasional trampoline in a backyard. Some
            blocks are meticulously maintained; others show the wear of
            economic pressure and deferred upkeep. The mix is honest.
          </p>
          <p>
            The diversity is everyday and unremarkable — which is the highest
            compliment a diverse neighborhood can receive. A Hmong family&apos;s
            garden overflows with herbs and vegetables you won&apos;t find at
            a suburban grocery store. A Black family is hosting a cookout in
            their backyard, smoke rising from a grill that has seen serious
            use. A Somali teenager is shooting hoops in a driveway. An older
            white couple is walking their dog past houses they&apos;ve watched
            turn over two or three times. Nobody is performing diversity for
            an audience. It simply is what it is.
          </p>
          <p>
            Webber Park is the neighborhood&apos;s center of gravity. The
            natural swimming pool draws families from across the North Side
            in summer, and the park&apos;s playing fields, playground, and
            community programming provide year-round gathering points. The
            park is where the neighborhood comes together — for Fourth of
            July, for community events, for the simple daily act of being
            outside with your neighbors. The Mississippi River, running along
            the eastern edge, adds another dimension — wilder, quieter, and
            less manicured than the park but equally important as a place to
            walk, fish, and remind yourself that a city is built alongside
            something much older.
          </p>
          <p>
            The commercial landscape is limited. There is no walkable main
            street, no collection of restaurants and shops within easy
            distance. Residents drive to Robbinsdale, to the commercial nodes
            on West Broadway, or to the suburban strip malls along Brookdale
            to do their shopping. This is the tradeoff of living in
            Webber-Camden: you gain affordability, space, parks, and river
            access, and you give up the walkable urban amenities that
            denser neighborhoods provide.
          </p>
        </Prose>
        <Quote
          text="My kids swim in that natural pool all summer long, for free. They ride their bikes to the river. They play in a park that's two blocks from our house. And we own our home. Tell me where else in Minneapolis you can have all of that."
          cite="Webber-Camden parent"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Webber-Camden Food, Drink & Local Spots">
        <Prose>
          <p>
            Webber-Camden&apos;s food options are limited and practical,
            reflecting a residential neighborhood where most meals happen at
            home. The commercial landscape is thin — there are no destination
            restaurants, no coffee shops with pour-over menus, no brunch
            spots with weekend lines. What exists serves the community&apos;s
            daily needs and reflects its diversity.
          </p>
        </Prose>

        <ArticleSubsection title="Local Options">
          <PlaceCardComponent place={{ name: "44th Avenue Corridor", tag: "Neighborhood Commercial", price: "$", description: "The stretch of 44th Avenue North carries some of the neighborhood's commercial activity — small restaurants, convenience stores, and service businesses. Options rotate and are modest in scale, but they serve the immediate needs of the surrounding blocks." }} />
          <PlaceCardComponent place={{ name: "Dowling Avenue Corridor", tag: "Mixed Commercial", price: "$", description: "Dowling Avenue, at the neighborhood's southern edge, has some additional commercial presence — takeout spots, small markets, and service businesses that cater to the neighborhood's diverse population." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Options">
          <Prose>
            <p>
              For more variety, Webber-Camden residents look outward.
              Robbinsdale&apos;s small downtown — a five-minute drive west —
              has restaurants, bars, and shops. West Broadway in{" "}
              <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
                Near North
              </Link>
              {" "}has been seeing new food businesses. Crystal and Brooklyn
              Center to the north and west offer suburban commercial options.
              The honest reality is that Webber-Camden is a neighborhood
              where you cook at home, order delivery, or drive to eat out —
              a pattern that is normal for residential neighborhoods at the
              city&apos;s edges but frustrating for residents who see the
              investment gap between their neighborhood and the rest of
              Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Webber-Camden">
        <Prose>
          <p>
            Webber-Camden&apos;s outdoor amenities are genuinely excellent —
            arguably the strongest feature of the neighborhood and a set of
            assets that would command premium home prices if they were
            located anywhere in South or Southwest Minneapolis. The natural
            swimming pool, the riverfront, and the connected park system
            give residents access to outdoor experiences that most of the
            city envies.
          </p>
        </Prose>

        <ArticleSubsection title="Webber Park & Natural Swimming Pool">
          <Prose>
            <p>
              Webber Park is the neighborhood&apos;s centerpiece — a
              community park with playing fields, playgrounds, a wading pool,
              and the crown jewel: the Webber Park Natural Swimming Pool,
              opened in 2015 as the first chemical-free public swimming pool
              in the United States. The pool uses a regeneration basin filled
              with aquatic plants to naturally filter and clean the water,
              eliminating the need for chlorine or other chemicals. The result
              is a swimming experience that feels different — softer water,
              no chemical smell, and the knowledge that the system cleaning
              your pool is a functioning wetland ecosystem. The pool is free,
              open to all, and operated by the Minneapolis Park and Recreation
              Board. On hot summer days, it draws families from across the
              North Side and beyond.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="North Mississippi Regional Park">
          <Prose>
            <p>
              The Mississippi River runs along Webber-Camden&apos;s eastern
              boundary, and North Mississippi Regional Park provides
              structured access to the riverfront. The park includes trails
              for walking and biking, picnic areas, fishing spots, and views
              of the river that feel more like rural Minnesota than urban
              Minneapolis. The river trail connects north to the Coon Rapids
              Dam Regional Park — one of the best stretches of riverside
              trail in the metro — and south through the city toward downtown
              and the Mill District. The riverfront here is wilder and less
              developed than the manicured parkways of South Minneapolis,
              which is part of its appeal.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Connected Trail System">
          <Prose>
            <p>
              Victory Memorial Drive connects Webber Park to Theodore Wirth
              Park to the south and west, creating a continuous trail
              corridor that links Webber-Camden to the Grand Rounds scenic
              byway system. Combined with the river trail to the east, this
              gives the neighborhood connectivity to a regional trail network
              that is one of the best in any American city. A resident can
              walk or bike from Webber Park to the Chain of Lakes, to
              Minnehaha Falls, or to downtown without ever touching a road.
              The infrastructure is there — what&apos;s missing is the
              recognition.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Webber-Camden Schools">
        <Prose>
          <p>
            Webber-Camden is served by Minneapolis Public Schools, and the
            school landscape here carries the same challenges and commitments
            that characterize education across North Minneapolis. School
            quality is a primary concern for families, and many actively
            navigate the district&apos;s open enrollment system.
          </p>
          <p>
            Jenny Lind Elementary serves the neighborhood and surrounding
            Camden area. Olson Middle School covers grades 6–8, and North
            High School is the comprehensive high school for the North Side.
            Charter schools provide additional options, and some families
            access magnet and specialty programs across the district through
            open enrollment.
          </p>
          <p>
            The schools here need investment — in staffing, facilities,
            programming, and the wrap-around services that students in
            high-poverty communities require. Dedicated teachers and
            administrators are doing important work, but they are doing it
            with fewer resources than their counterparts in wealthier parts
            of the city. Families who move to Webber-Camden for the
            affordability should plan to be engaged, informed, and
            proactive about their children&apos;s education — the options
            are there, but they require research and advocacy to navigate.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Webber-Camden Real Estate & Housing">
        <Prose>
          <p>
            Webber-Camden is one of the most affordable neighborhoods in
            Minneapolis for single-family homeownership. Median home sale
            prices ranged from roughly $215,000 to $300,000 in 2025 — well
            below the citywide median and a fraction of what comparable
            homes cost in South or Southwest Minneapolis. For first-time
            buyers, families on working-class incomes, and anyone who has
            been priced out of the city&apos;s more expensive neighborhoods,
            Webber-Camden offers a genuine entry point.
          </p>
          <p>
            The housing stock is primarily bungalows and small frame houses
            from the 1910s through 1950s — sturdy, simple homes on standard
            lots with detached garages and front porches. At the lower end
            ($150,000–$230,000), you&apos;re looking at homes that need
            updating — original systems, dated finishes, deferred maintenance.
            The mid-range ($230,000–$310,000) gets a well-maintained
            three-bedroom home with updates. Properties near the river or
            on the best blocks can reach $320,000–$380,000.
          </p>
          <p>
            Investor activity has been present — affordable homes attract
            buyers looking for rental income, which can be a mixed blessing
            for the neighborhood. Owner-occupancy remains strong relative to
            some North Side neighborhoods, and the homeownership culture in
            Camden is an important stabilizing force. The rental market is
            affordable, with one-bedroom apartments typically available for
            $800–$1,200.
          </p>
        </Prose>

        <Quote
          text="Our mortgage is less than what we were paying in rent in Uptown. We have a yard, a garage, and a neighborhood where people actually know our names. The tradeoff is real — we drive more, we have fewer restaurant options — but the math works and the community is genuine."
          cite="Recent Webber-Camden homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Webber-Camden">
        <Prose>
          <p>
            Webber-Camden is car-dependent by Minneapolis standards, with a
            Walk Score of 58 and a Bike Score of 70. The limited commercial
            options within the neighborhood mean that most errands require a
            car, and commuting to downtown or other employment centers is
            most practical by car or bus.
          </p>
          <p>
            Metro Transit bus routes serve the area along main corridors,
            connecting to downtown Minneapolis with a ride time of
            approximately 30–40 minutes. Service frequency is typical of
            outer-ring neighborhoods — adequate for commuting but not
            convenient enough for car-free living.
          </p>
          <p>
            The trail system provides good recreational cycling connectivity.
            Victory Memorial Drive connects to Theodore Wirth Parkway, which
            connects to the Cedar Lake Trail into downtown — a scenic
            bike commute of about 8 miles. The river trail provides an
            alternative route south into the city. Some residents do
            bike-commute, particularly in warmer months, but year-round
            car-free living would require more transit access than currently
            exists.
          </p>
          <p>
            By car, downtown Minneapolis is 15–20 minutes. Robbinsdale is
            5 minutes west. Brooklyn Center and Crystal are 10 minutes
            north. MSP Airport is approximately 25 minutes. Street parking
            is never an issue.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Webber-Camden&apos;s tensions are fundamentally about equity —
            the gap between what this neighborhood has and what it deserves,
            and the question of whether closing that gap will benefit the
            people who are already here or the people who arrive after the
            improvements are made.
          </p>
        </Prose>

        <ArticleSubsection title="Investment Gap">
          <Prose>
            <p>
              The natural swimming pool was a landmark investment — proof
              that the city could direct innovative public resources to the
              North Side. But one pool does not fix decades of disinvestment
              in commercial corridors, infrastructure, and public spaces.
              Webber-Camden residents see the gap between their neighborhood
              and South Minneapolis every day — in the condition of the
              streets, the availability of grocery stores and restaurants,
              the quality of sidewalks and lighting. The pool was a start.
              The question is whether the investment continues.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime remains a concern, particularly property crime and the
              occasional violent incident that generates outsized attention
              and reinforces negative narratives about the North Side. The
              post-2020 period was difficult — crime rose, police response
              times increased, and community trust in public safety
              institutions eroded. By 2025–2026, the situation had
              stabilized but not fully recovered. Residents navigate this
              reality with a mix of vigilance, community organizing, and
              frustration at a city that seems to accept higher crime rates
              in North Minneapolis as normal.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Affordability and Change">
          <Prose>
            <p>
              Rising home prices — still affordable by citywide standards —
              raise questions about who future investment will serve. If
              improvements to commercial corridors, schools, and public
              spaces drive prices up, will the families who stayed through
              the lean years be able to stay through the good ones? Or will
              the familiar pattern repeat — underinvestment followed by
              gentrification that displaces the community? Webber-Camden is
              early enough in this cycle that the outcome is not yet
              determined, and residents are working to ensure that
              investment benefits the existing community rather than
              replacing it.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Webber-Camden FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
