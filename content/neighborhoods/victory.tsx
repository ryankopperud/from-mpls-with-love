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
    title: "Victory, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Victory, Minneapolis — Victory Memorial Drive, Camden's far north, diverse community, affordable housing, parks, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Victory",
  deck: "A far north Camden neighborhood where Victory Memorial Drive honors the fallen, tree-lined streets carry a quiet residential pride, and a diverse community holds together through the kind of neighboring that doesn't make headlines but holds a city together.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Victory?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Victory" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Victory, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$220K–$310K", label: "Median home sale price range (2025 data)" },
      { value: "1921", label: "Victory Memorial Drive dedicated" },
      { value: "1910s–1950s", label: "Era most homes were built" },
      { value: "568", label: "Trees lining Victory Memorial Drive" },
      { value: "15–20 min", label: "Drive to downtown Minneapolis" },
      { value: "62", label: "Walk Score" },
      { value: "72", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Victory a good neighborhood in Minneapolis?",
      answer:
        "Victory is a solid, affordable residential neighborhood in far north Camden that offers good value for families and first-time buyers. It has beautiful tree-lined streets, the historic Victory Memorial Drive, access to parks and the Mississippi River trail system, and a diverse, tight-knit community. The neighborhood faces some of the same challenges as other North Minneapolis communities — higher crime rates than the citywide average, disinvestment legacies, and ongoing economic disparities — but it also has strong neighborhood pride, engaged residents, and housing stock that offers real value. For buyers priced out of South and Southwest Minneapolis, Victory is one of the most underrated options in the city.",
    },
    {
      question: "Is Victory, Minneapolis safe?",
      answer:
        "Victory's safety profile is better than some North Minneapolis neighborhoods but still carries higher crime rates than the citywide average, particularly for property crime. The residential blocks are generally quiet, and many long-term residents describe feeling safe on their streets. Victory Memorial Drive and the surrounding blocks are particularly stable. Like all of North Minneapolis, crime statistics rose during the 2020–2022 period and have since declined, though some categories remain elevated. Most residents exercise standard urban awareness and report that the neighborhood feels safer than its reputation suggests.",
    },
    {
      question: "What is Victory Memorial Drive?",
      answer:
        "Victory Memorial Drive is a 2.5-mile memorial parkway that runs along the western edge of the Victory neighborhood, dedicated in 1921 to honor the 568 Hennepin County residents who died in World War I. Each tree along the drive was planted for a specific fallen soldier, with markers at the base. The drive is part of the Grand Rounds scenic byway system and features a separated walking and biking path. It connects Webber Park to Theodore Wirth Park and is one of the most beautiful and historically significant stretches of parkway in the Minneapolis park system.",
    },
    {
      question: "How much do homes cost in Victory, Minneapolis?",
      answer:
        "Median home sale prices in Victory ranged from roughly $220,000 to $310,000 in 2025, well below the citywide median and significantly below South and Southwest Minneapolis neighborhoods. Smaller bungalows and starter homes can be found in the $180,000–$250,000 range, while larger, updated homes along Victory Memorial Drive or on desirable blocks can reach $300,000–$370,000. Victory remains one of the most affordable neighborhoods in Minneapolis for buyers seeking single-family homes with yards and garages.",
    },
    {
      question: "What schools serve Victory, Minneapolis?",
      answer:
        "Victory is served by Minneapolis Public Schools. Loring Community Arts Magnet School and other nearby elementary options serve the area. Olson Middle School and North High School serve upper grades. The neighborhood also has access to the district's open enrollment and magnet programs, and several charter schools operate in the broader Camden and North Minneapolis area. School quality and outcomes vary, and many families use the open enrollment system to access programs across the district.",
    },
    {
      question: "Where exactly is Victory in Minneapolis?",
      answer:
        "Victory is in far north Minneapolis, in the Camden community. It is roughly bounded by 42nd Avenue North to the north, Humboldt Avenue North to the east, Lowry Avenue North to the south, and Victory Memorial Drive and Theodore Wirth Parkway to the west. It sits north of the Jordan and Folwell neighborhoods, west of Webber-Camden, and east of Theodore Wirth Park and the suburb of Robbinsdale.",
    },
    {
      question: "Is Victory in North Minneapolis?",
      answer:
        "Yes — Victory is part of the Camden community, which is the northernmost section of what is broadly called North Minneapolis. Camden is generally considered the most stable and residential part of the North Side, with lower crime rates and higher homeownership than neighborhoods closer to downtown. Victory sits at the far northwestern edge of the city, bordered by Theodore Wirth Park and Robbinsdale to the west.",
    },
    {
      question: "What is there to do in Victory, Minneapolis?",
      answer:
        "Victory's main attractions are its parks and outdoor spaces. Victory Memorial Drive is ideal for walking, running, and cycling, and connects to the broader Grand Rounds trail system. Webber Park's natural swimming pool is a short trip northeast. Theodore Wirth Park — one of the largest urban parks in the country — borders the neighborhood to the west, offering hiking, mountain biking, cross-country skiing, a golf course, and beach access at Wirth Lake. The neighborhood itself is primarily residential, with commercial options concentrated along Lowry Avenue and 44th Avenue.",
    },
    {
      question: "Is Victory a diverse neighborhood?",
      answer:
        "Yes — Victory is one of the more racially and ethnically diverse neighborhoods in Minneapolis. The community includes significant Black, Southeast Asian (particularly Hmong), Latino, and white populations. This diversity is reflected in the neighborhood's businesses, faith communities, and schools. The demographic mix has shifted over decades, with waves of new residents adding to the neighborhood's cultural fabric while long-term families maintain continuity.",
    },
    {
      question: "Is Victory gentrifying?",
      answer:
        "Victory is experiencing some early signs of investment and price appreciation, but full-scale gentrification has not arrived in the way it has in parts of Northeast or North Loop. Home prices remain well below the citywide median, and the neighborhood has not seen the rapid influx of new development that characterizes gentrifying areas. There is some concern that rising prices in other parts of the city will push more buyers into North Minneapolis neighborhoods like Victory, but for now the neighborhood remains affordable and accessible to working- and middle-class families.",
    },
  ],
  nearby: [
    { name: "Webber - Camden", slug: "webber-camden", description: "Webber Park, natural swimming pool, and Camden's core" },
    { name: "Lind - Bohanon", slug: "lind-bohanon", description: "Far north, Mississippi River access, affordable residential" },
    { name: "Folwell", slug: "folwell", description: "South of Victory, transitional blocks, Folwell Park" },
    { name: "Shingle Creek", slug: "shingle-creek", description: "Suburban feel at the city's northern edge" },
    { name: "Cleveland", slug: "cleveland", description: "Near Wirth Park, residential, North Minneapolis" },
  ],
  closing: {
    title: "What Makes Victory Worth Knowing",
    paragraphs: [
      "Victory is not the Minneapolis neighborhood that wins awards or attracts national media coverage. It is not the neighborhood where the hottest restaurant opens or the newest luxury condo rises. What it is — and has been for more than a century — is a place where people buy modest houses on tree-lined streets, plant gardens in their backyards, walk their dogs along a memorial drive that honors the dead of a war most Americans have forgotten, and build the kind of quiet, durable community that holds a city together from its edges inward.",
      "The challenges are real — disinvestment, crime rates that exceed the citywide average, schools that need more resources, and the persistent gap between North Minneapolis and the rest of the city in wealth, opportunity, and public attention. But Victory's residents are not waiting for someone else to solve those problems. They are showing up at neighborhood meetings, maintaining their homes, supporting their schools, and insisting that a neighborhood on the far north side of Minneapolis deserves the same investment, the same respect, and the same future as any neighborhood in the city. That insistence is Victory's most valuable asset, and it is not for sale.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a September evening, the light falls long and golden down Victory
          Memorial Drive, catching the tops of the elms that line both sides of
          the parkway in an unbroken canopy of green turning amber. A woman is
          walking her dog past the stone markers at the base of each tree — each
          one bearing the name of a Hennepin County soldier who died in World War
          I, 568 names for 568 trees, planted over a century ago so that the
          city would remember. A man on a bicycle coasts past on the separated
          trail, headed north toward Webber Park. Two kids are throwing a
          football on a front lawn across the street, their voices carrying in
          the stillness. This is Victory — a neighborhood that got its name from
          a war memorial and its character from the kind of people who stay in a
          place long enough to make it theirs.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/victory/hero.webp"
        alt="Victory Memorial Drive in the Victory neighborhood of Minneapolis, tree-lined parkway with memorial markers"
        caption="Victory Memorial Drive — 568 trees for 568 fallen soldiers, and still the neighborhood's defining feature"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Victory, Minneapolis?">
        <Prose>
          <p>
            Victory is a residential neighborhood in far north Minneapolis,
            part of the Camden community that occupies the city&apos;s
            northwestern corner. It is roughly bounded by 42nd Avenue North to
            the north, Humboldt Avenue North to the east, Lowry Avenue North
            to the south, and Victory Memorial Drive and Theodore Wirth Parkway
            to the west. Home to approximately 5,500 residents, Victory is one
            of the quieter, more stable neighborhoods on the North Side — a
            place defined more by its tree-lined residential streets and
            memorial parkway than by the challenges that dominate media
            narratives about North Minneapolis.
          </p>
          <p>
            The neighborhood&apos;s defining feature is Victory Memorial Drive,
            a 2.5-mile parkway dedicated in 1921 to honor the 568 Hennepin
            County residents who died in World War I. Each tree along the drive
            was planted for a specific fallen soldier, and the drive remains
            part of the Minneapolis Grand Rounds scenic byway system —
            connecting Webber Park to the north with Theodore Wirth Park to the
            south and west. The memorial drive gives the neighborhood both its
            name and its character: a sense of history, of purpose, of being a
            place that was built to mean something.
          </p>
          <p>
            Victory is diverse in the way that much of North Minneapolis is
            diverse — a mix of Black, white, Hmong, Latino, and East African
            residents who share blocks and parks and schools without the kind
            of self-congratulation that wealthier neighborhoods bring to the
            subject. The housing stock is modest — primarily bungalows and
            small frame houses from the 1910s through 1950s — and prices
            remain well below the citywide median, making Victory one of the
            more accessible neighborhoods in Minneapolis for first-time buyers
            and working families.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Victory Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/victory/neighborhood-sign.webp"
          alt="Victory neighborhood sign in Minneapolis"
          caption="The Victory neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Victory History & Origins">
        <Prose>
          <p>
            The land that is now Victory is part of the ancestral homeland of
            the Dakota people — specifically the Mdewakanton band, for whom the
            rivers, prairies, and woodlands of what would become Minneapolis
            were home for generations before European contact. The dispossession
            of Dakota lands through the treaties of 1837 and 1851, the
            US-Dakota War of 1862, and the forced removal that followed are the
            necessary beginning of any honest history of this place.
          </p>
          <p>
            European-American settlement of the area that would become Victory
            began in the late 19th century, but the neighborhood developed
            primarily in the 1910s through 1940s as Minneapolis expanded
            northward. The area was platted for residential development to
            house the growing working- and middle-class population of a city
            booming on flour milling, lumber, and light manufacturing. Small
            bungalows and frame houses filled the grid of streets, built for
            families who worked in the nearby factories, rail yards, and mills.
          </p>
          <p>
            The defining moment in Victory&apos;s history came in 1921, when
            Victory Memorial Drive was dedicated as a living memorial to the
            568 Hennepin County residents who died in World War I. The parkway
            was designed as part of the Minneapolis park system&apos;s Grand
            Rounds, with each tree planted for a named individual — a gesture
            of remembrance that transformed a residential street into a civic
            monument. The drive gave the neighborhood its name, its identity,
            and its most enduring feature. Over a century later, the trees —
            replaced as needed but maintained in the original pattern — still
            stand as one of the most moving war memorials in the Upper Midwest.
          </p>
          <p>
            The mid-20th century brought stability and then decline, following
            patterns familiar across urban America. Suburbanization drew
            families outward, redlining and racial covenants shaped who could
            live where, and the broader disinvestment in North Minneapolis that
            began in the 1960s affected Victory along with its neighbors. The
            neighborhood&apos;s demographics shifted significantly — from
            predominantly white working-class families to a diverse mix of
            Black, Hmong, Latino, and white residents. Each wave of new
            arrivals added to the neighborhood&apos;s cultural fabric while
            contending with the same structural challenges: underfunded
            schools, deferred infrastructure maintenance, and the persistent
            gap between North Minneapolis and the rest of the city in public
            investment and private capital.
          </p>
          <p>
            By the 2000s and 2010s, Victory had settled into its current
            identity — a diverse, affordable, residential neighborhood that
            benefits from its proximity to Theodore Wirth Park and the
            stability of the Camden community while continuing to fight for
            the investment and attention it deserves. The neighborhood
            association remains active, homeownership rates are higher than in
            many North Side neighborhoods, and the memorial drive continues
            to serve as both a physical amenity and a symbol of what the
            community values: memory, service, and the belief that a place
            can honor its past while building something better for its future.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Victory">
        <Prose>
          <p>
            Living in Victory means living on a block that looks like a
            neighborhood is supposed to look — houses with front porches, yards
            with trees, kids on bikes, and neighbors who wave. The residential
            texture is modest and unpretentious. The houses are small, the lots
            are standard, the garages are detached, and the overall effect is a
            neighborhood that was built for living rather than impressing. Some
            blocks are immaculately maintained — fresh paint, manicured lawns,
            flower beds along the sidewalk. Others show the wear of deferred
            maintenance and economic pressure. The mix is honest, and it is
            the mix you find across working- and middle-class Minneapolis.
          </p>
          <p>
            The diversity here is lived rather than curated. A Hmong family
            tending a garden that takes over half their backyard lives next to
            a Black family whose kids are riding bikes in the alley, next to a
            white couple who have been in their bungalow since the 1980s. The
            interactions are everyday and unremarkable — which is exactly what
            genuine diversity looks like when it&apos;s not being packaged for
            a brochure. Faith communities are important connective tissue —
            churches, mosques, and temples serve as gathering points for
            different communities and provide social services that fill gaps
            left by public institutions.
          </p>
          <p>
            Victory Memorial Drive gives the neighborhood an amenity that most
            comparable neighborhoods lack — a beautiful, tree-lined parkway
            with a separated trail for walking and biking, connecting to
            Theodore Wirth Park to the south and Webber Park to the north. On
            summer evenings, the drive fills with walkers, runners, cyclists,
            and families with strollers, and it feels like the kind of public
            space that urban planners dream about: used, loved, and democratic.
            The memorial markers along the base of the trees add a layer of
            gravitas — a reminder that this neighborhood was named for
            something more than real estate convenience.
          </p>
          <p>
            The commercial landscape is thin. Victory is not a neighborhood
            with a vibrant main street or a collection of destination
            restaurants. Lowry Avenue to the south and 44th Avenue to the
            north carry some commercial activity — convenience stores, small
            restaurants, barber shops, churches — but residents do most of
            their shopping outside the neighborhood, in Robbinsdale to the
            west or at the commercial nodes along West Broadway or Penn Avenue.
            What Victory offers instead is space, affordability, and the kind
            of residential quiet that is increasingly hard to find at
            Minneapolis prices.
          </p>
        </Prose>
        <Quote
          text="People drive through Victory on the memorial drive and they're surprised — they expected something different from North Minneapolis. What they find is a neighborhood full of families who take care of their homes and look out for each other."
          cite="Victory resident and homeowner"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Victory Food, Drink & Local Spots">
        <Prose>
          <p>
            Victory is not a dining destination. The food landscape here
            reflects a residential neighborhood where most meals happen at
            home and the commercial options are practical rather than
            fashionable. But what exists is genuine — small spots that serve
            the neighborhood&apos;s diverse population and the kind of places
            where the regulars know each other by name.
          </p>
        </Prose>

        <ArticleSubsection title="Local Spots">
          <PlaceCardComponent place={{ name: "Lowry Avenue Corridor", tag: "Mixed Commercial", price: "$", description: "Lowry Avenue, running along Victory's southern edge, carries the neighborhood's commercial activity — small restaurants, convenience stores, barber shops, and service businesses. The options are modest and practical, reflecting the neighborhood's working-class character. You'll find takeout spots, a few sit-down restaurants, and the kind of small businesses that serve everyday needs." }} />
          <PlaceCardComponent place={{ name: "44th Avenue Commercial Node", tag: "Neighborhood Services", price: "$", description: "The stretch of 44th Avenue North near Victory has a handful of small businesses — a convenience store, takeout restaurants, and neighborhood services. It's not a destination strip, but it provides the basics for residents in the northern part of the neighborhood." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Options">
          <Prose>
            <p>
              For more dining variety, Victory residents look to the broader
              Camden and North Minneapolis area.{" "}
              <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
                Webber-Camden
              </Link>
              {" "}to the northeast has some additional commercial options.
              Robbinsdale — the suburb immediately to the west — has a small
              downtown with restaurants, bars, and shops that Victory residents
              treat as their own. West Broadway in{" "}
              <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
                Near North
              </Link>
              {" "}has been seeing new investment and restaurant openings. The
              truth about dining in Victory is that you cook at home most
              nights and drive when you want to eat out — a reality that is
              not unusual for residential neighborhoods at the edges of any
              city.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Victory">
        <Prose>
          <p>
            Victory&apos;s outdoor assets are its strongest selling point. The
            neighborhood sits between two of the most significant parks in
            the Minneapolis system — Theodore Wirth Park to the west and
            Webber Park to the northeast — and Victory Memorial Drive
            connects them with one of the finest stretches of parkway in the
            city. For a neighborhood that sometimes struggles for positive
            attention, the parks and trails are an unambiguous asset.
          </p>
        </Prose>

        <ArticleSubsection title="Victory Memorial Drive">
          <Prose>
            <p>
              The 2.5-mile memorial parkway is the neighborhood&apos;s
              signature outdoor space — a tree-lined boulevard with a
              separated walking and biking trail, memorial markers, and
              connections to the broader Grand Rounds system. It runs from
              Webber Park in the north to Theodore Wirth Parkway in the south,
              and in the warmer months it functions as the neighborhood&apos;s
              linear park — the place where everyone walks, runs, bikes, and
              socializes. In fall, the elm canopy turns gold and the drive is
              at its most beautiful. In winter, the trail is used for walking
              and snowshoeing.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Park — the largest park in the Minneapolis park
              system at over 740 acres — borders Victory to the west. The park
              offers hiking and mountain biking trails, a golf course, cross-
              country skiing, Wirth Lake with a swimming beach, a nature center,
              and an adventure course. For Victory residents, Wirth Park is
              essentially a backyard wilderness — a place where you can
              disappear into woods and prairie within minutes of your front
              door. The park&apos;s mountain bike trails, developed in
              partnership with local cycling organizations, are among the best
              urban mountain biking in the Upper Midwest. The Loppet Foundation,
              based at Wirth, hosts winter skiing events and year-round outdoor
              programming that has become a significant community asset for
              the surrounding neighborhoods.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Webber Park">
          <Prose>
            <p>
              Webber Park, just northeast of Victory in the{" "}
              <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
                Webber-Camden
              </Link>
              {" "}neighborhood, features the city&apos;s only natural swimming
              pool — a chemical-free pool that uses a natural filtration system.
              The park also includes playing fields, playgrounds, and picnic
              areas. It&apos;s a short walk or bike ride from most of Victory
              and serves as a community gathering point throughout the summer.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Victory Schools">
        <Prose>
          <p>
            Victory is served by Minneapolis Public Schools, and the school
            landscape here reflects both the challenges and the community
            investment that characterize education across North Minneapolis.
            School quality and outcomes vary, and many families actively
            navigate the district&apos;s open enrollment system to find the
            best fit for their children.
          </p>
          <p>
            Loring Community Arts Magnet is one of the nearby elementary
            options, offering an arts-integrated approach that draws families
            from across the area. Other elementary options in the Camden
            community include Jenny Lind and Lucy Laney Community School.
            Olson Middle School serves the area for grades 6–8, and North
            High School — located on the North Side — is the comprehensive
            high school. North High has undergone significant changes in
            recent years, including periods of restructuring and renewed
            community investment.
          </p>
          <p>
            Charter schools and magnet programs provide additional options.
            Many Victory families use the district&apos;s open enrollment
            to access schools across the city, and the school decision is
            often one of the more research-intensive aspects of raising a
            family in the neighborhood. The schools here need and deserve
            more resources — a statement that is true across North
            Minneapolis and that residents and advocates continue to push
            for at every level of government.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Victory Real Estate & Housing">
        <Prose>
          <p>
            Victory offers some of the most affordable single-family housing
            in Minneapolis — a fact that is both the neighborhood&apos;s
            greatest asset for buyers and a reflection of the disinvestment
            patterns that have shaped North Minneapolis for decades. Median
            home sale prices ranged from roughly $220,000 to $310,000 in
            2025, well below the citywide median and a fraction of what
            comparable houses cost in South or Southwest Minneapolis.
          </p>
          <p>
            The housing stock is primarily bungalows and small frame houses
            from the 1910s through 1950s — one- and two-story homes on
            standard lots with detached garages, front porches, and the
            simple, solid construction that characterized working-class
            Minneapolis housing of that era. At the lower end of the market
            ($170,000–$240,000), you&apos;re looking at smaller homes that
            need updating — original systems, dated kitchens, the kind of
            work that a handy buyer can turn into sweat equity. The mid-range
            ($240,000–$320,000) gets you a well-maintained three-bedroom home
            with updates. Above $320,000, you&apos;re looking at larger homes
            on the best blocks — often along or near Victory Memorial Drive —
            that have been renovated and expanded.
          </p>
          <p>
            Homeownership rates in Victory are higher than in many North
            Minneapolis neighborhoods, contributing to the area&apos;s
            relative stability. The neighborhood has seen some investor
            activity — buyers purchasing affordable homes for rental income
            — which is a double-edged sword: it brings capital into the
            housing stock but can reduce owner-occupancy and community
            investment. The rental market includes both apartment buildings
            and single-family rentals, with rents that are among the lowest
            in the city.
          </p>
        </Prose>

        <Quote
          text="We bought our house in Victory for what a down payment would cost in Linden Hills. Three bedrooms, a big yard, a two-car garage, and a block where the neighbors actually talk to each other. I don't understand why more people don't look up here."
          cite="Victory homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Victory">
        <Prose>
          <p>
            Victory is a car-oriented neighborhood by Minneapolis standards,
            with a Walk Score of 62 and a Bike Score of 72. The residential
            streets are quiet and easily navigable, but the distance to
            major employment centers and the limited transit options mean that
            most residents rely on cars for daily commuting.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along Lowry Avenue
            and connecting corridors, providing access to downtown Minneapolis
            and the broader transit network. Service frequency is adequate but
            not exceptional — typical of outer-ring Minneapolis neighborhoods.
            The bus ride to downtown takes approximately 30–40 minutes
            depending on the route.
          </p>
          <p>
            Victory Memorial Drive and the connected trail system provide
            excellent cycling infrastructure for recreation, and some
            residents bike-commute to downtown via Victory Memorial Drive
            to Theodore Wirth Parkway to the Cedar Lake Trail — a route
            that is scenic if not fast. The trail connections to the broader
            Grand Rounds system make Victory better connected by bike than
            its far-north location might suggest.
          </p>
          <p>
            By car, downtown Minneapolis is 15–20 minutes. The suburb of
            Robbinsdale, with its shops and services, is 5 minutes to the
            west. MSP International Airport is approximately 25 minutes.
            Street parking is abundant — this is not a neighborhood where
            you circle the block looking for a spot.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Victory&apos;s tensions are the tensions of North Minneapolis
            writ smaller and quieter than in neighborhoods closer to
            downtown, but no less real for the people who live here. The
            neighborhood sits at the intersection of several forces —
            affordable housing attracting new investment, demographic
            shifts reshaping the community, and the persistent gap between
            the North Side and the rest of Minneapolis in public services,
            private investment, and media attention.
          </p>
        </Prose>

        <ArticleSubsection title="Investment and Equity">
          <Prose>
            <p>
              The most fundamental tension in Victory is the one that runs
              through all of North Minneapolis: decades of underinvestment
              in infrastructure, schools, commercial corridors, and public
              spaces, followed by the slow arrival of new investment that
              may not benefit the people who stayed through the lean years.
              Rising home prices — still modest by citywide standards — are
              welcomed by homeowners but concerning for renters and those on
              fixed incomes. New buyers attracted by affordability are
              changing the neighborhood&apos;s demographics, and the
              question of who benefits from rising property values is as
              live here as it is anywhere in the city.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime remains a concern, though Victory&apos;s rates are
              generally lower than in North Minneapolis neighborhoods closer
              to downtown. Property crime — car break-ins, package theft,
              catalytic converter theft — is the most common issue. Violent
              crime occurs but is less frequent on Victory&apos;s residential
              blocks than along the commercial corridors to the south. The
              post-2020 spike in crime affected the neighborhood, and while
              numbers have come down, the experience left a mark on
              community trust and the ongoing debate about public safety
              approaches.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Desert">
          <Prose>
            <p>
              The lack of commercial amenities is an ongoing frustration.
              Victory residents want what residents of South Minneapolis
              take for granted — a walkable grocery store, a coffee shop, a
              sit-down restaurant within biking distance. The commercial
              corridors that serve the neighborhood are thin and
              underinvested, and attracting new businesses to a neighborhood
              that is still fighting stereotypes about North Minneapolis
              remains a challenge. The proximity to Robbinsdale provides a
              stopgap, but it also means that spending — and the economic
              activity it generates — flows out of the neighborhood rather
              than circulating within it.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Victory FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
