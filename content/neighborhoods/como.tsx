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
    title: "Como, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Como, Minneapolis — a quiet residential neighborhood in Southeast Minneapolis near the University of Minnesota, Como Avenue, Van Cleve Park, real estate, and what it's really like to live in this steady, unpretentious corner of the city in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Como",
  deck: "The quiet residential heart of Southeast Minneapolis — where professors and tradespeople share tree-lined blocks, Como Avenue connects the university to St. Paul, Van Cleve Park fills with soccer games on summer evenings, and the neighborhood's greatest accomplishment is the thing it never advertises: being a genuinely decent place to live without needing to be anything more.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Como?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Como" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Como, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,800", label: "Residents (US Census / ACS estimates)" },
      { value: "$310K–$450K", label: "Median home sale price (2025 data)" },
      { value: "$1,050–$1,400", label: "Typical 1BR apartment rent (2025)" },
      { value: "70", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
      { value: "55", label: "Transit Score" },
      { value: "1880s", label: "Decade of initial residential development" },
      { value: "0.6 mi", label: "Distance to University of Minnesota campus" },
    ],
  },
  faq: [
    {
      question: "Is Como a good neighborhood in Minneapolis?",
      answer:
        "Como is one of the better neighborhoods in Minneapolis for people who want a stable, residential environment close to the University of Minnesota and the Southeast Minneapolis corridor. It's quiet, well-maintained, and walkable to daily necessities along Como Avenue and the university campus. It's particularly popular with university faculty, hospital workers, and families who want proximity to the U of M without the noise and density of the student-heavy neighborhoods immediately adjacent to campus. The trade-off is that Como is not exciting — it lacks the dining scene, nightlife, and cultural energy of neighborhoods like Logan Park or Uptown. If you want interesting, look elsewhere. If you want good, Como delivers.",
    },
    {
      question: "Is Como, Minneapolis safe?",
      answer:
        "Como is one of the safer neighborhoods in Minneapolis. Crime rates are well below the city average for both violent and property crime. The neighborhood's residential character, stable population, and proximity to the university (which brings its own security infrastructure) contribute to an environment that feels and measures as safe. The most common issues are the ordinary ones: occasional bike theft, rare car break-ins, package theft during the holidays. Residents generally feel comfortable walking the neighborhood at all hours.",
    },
    {
      question: "How much does it cost to live in Como?",
      answer:
        "Como is moderately priced by Minneapolis standards. Single-family homes — mostly Craftsman bungalows, foursquares, and postwar rambler-style houses — sell in the $310,000 to $450,000 range, with recently renovated homes occasionally pushing above $500,000. Condos and townhomes are less common but exist in the $200,000–$350,000 range. Rental apartments run $1,050–$1,400 for a one-bedroom and $1,300–$1,800 for a two-bedroom. These prices reflect the neighborhood's desirable combination of location and livability without the premium that comes with trendier addresses.",
    },
    {
      question: "What is Como Avenue?",
      answer:
        "Como Avenue is the primary commercial and arterial street running through the neighborhood, connecting Southeast Minneapolis to the St. Paul border and beyond to Como Park in St. Paul (no relation to the Minneapolis neighborhood's name origin, though the coincidence confuses everyone). The avenue carries a mix of small businesses, restaurants, and services that serve the neighborhood's daily needs. It's not a destination commercial corridor — it's a working one, with a dentist, a hardware store, a couple of restaurants, and the kind of independently owned shops that survive on repeat local business rather than destination traffic.",
    },
    {
      question: "Is Como near the University of Minnesota?",
      answer:
        "Yes. Como's southern boundary is approximately half a mile from the University of Minnesota's east bank campus. Many Como residents work at the university or the adjacent medical campus. The proximity provides access to university resources — libraries, athletic facilities, cultural events — without the noise and student-housing density of the neighborhoods immediately adjacent to campus like Marcy Holmes. Biking to the university from Como takes 5 to 10 minutes; driving or taking transit is similarly quick.",
    },
    {
      question: "Where exactly is Como in Minneapolis?",
      answer:
        "Como is in Southeast Minneapolis, roughly bounded by the BNSF railroad tracks to the south, Como Avenue SE to the north, 15th Avenue SE to the west (bordering Marcy Holmes), and roughly 29th Avenue SE to the east (bordering the St. Paul border area). It's a compact, primarily residential neighborhood that sits between the University of Minnesota campus and the city's eastern edge.",
    },
    {
      question: "Is Como walkable?",
      answer:
        "Moderately. Como's Walk Score of 70 reflects a neighborhood where some daily errands are walkable — particularly along Como Avenue — but where the primarily residential character means that reaching restaurants, groceries, and other commercial destinations often requires a short bike ride or drive. The Bike Score of 90 is the more telling number: Como is flat, well-connected to bike infrastructure, and small enough that cycling reaches most destinations in the neighborhood or surrounding areas within minutes. Most Como residents use some combination of biking and driving.",
    },
    {
      question: "What parks are in Como?",
      answer:
        "Van Cleve Park, at the neighborhood's western edge (shared with Marcy Holmes), is the primary park — a well-used community green space with athletic fields, a playground, a wading pool, and open green space that fills with soccer games and picnics on summer evenings. Como Park (not to be confused with Como Park in St. Paul) is a smaller neighborhood park along the eastern edge. The neighborhood also benefits from proximity to the university campus's open spaces and the Mississippi River trail system, which is accessible via a short bike ride to the west.",
    },
    {
      question: "What's the difference between Como in Minneapolis and Como in St. Paul?",
      answer:
        "This confuses everyone. Como in Minneapolis is a residential neighborhood in Southeast Minneapolis near the University of Minnesota. Como Park in St. Paul is a large park and surrounding neighborhood on the other side of the city border, famous for the Como Park Zoo & Conservatory. They share a name because Como Avenue connects the two areas, and the avenue was named after Lake Como in Italy. The Minneapolis Como neighborhood is smaller, quieter, and has no zoo. If someone says 'Let's go to Como,' they almost certainly mean the St. Paul park and zoo, not the Minneapolis neighborhood.",
    },
    {
      question: "Is Como good for families?",
      answer:
        "Yes — Como is one of the better family neighborhoods in the University of Minnesota area. It's quieter than the student-heavy neighborhoods to the west, safer than the city average, and offers good park access via Van Cleve Park. The housing stock — mostly single-family homes with yards — is family-friendly in scale. Schools are serviceable, with options in both Minneapolis Public Schools and the broader magnet system. The main challenge is that the neighborhood is not walkable to a wide range of family amenities (no neighborhood commercial district with a kids' bookstore and an ice cream shop), so a car or bike is necessary for most activities.",
    },
  ],
  nearby: [
    { name: "Marcy Holmes", slug: "marcy-holmes", description: "The oldest neighborhood in Minneapolis, Dinkytown, and riverfront bluffs" },
    { name: "Prospect Park - East River Road", slug: "prospect-park-east-river-road", description: "The Witch's Hat tower and university-adjacent living" },
    { name: "University of Minnesota", slug: "university-of-minnesota", description: "The campus that shapes everything around it" },
    { name: "St. Anthony West", slug: "st-anthony-west", description: "Historic mills and riverfront living near St. Anthony Main" },
  ],
  closing: {
    title: "What Makes Como Worth Knowing",
    paragraphs: [
      "Como is not the kind of neighborhood that inspires essays or attracts visitors. Nobody moves to Minneapolis because they heard about Como. There is no festival, no arts district, no iconic restaurant, no landmark that draws people from across the city. What Como has instead is the thing that matters most to the people who actually live in cities rather than write about them: it works. The streets are quiet. The houses are solid. The neighbors know each other but don't surveil each other. The parks are used. The commute to the university or downtown is short. The property taxes are reasonable. The trees are old and tall and the shade in July is genuine.",
      "That kind of unglamorous functionality is easy to overlook and hard to create. It requires decades of stable homeownership, consistent municipal investment, a housing stock that's good enough to maintain but not so valuable that speculation distorts the market, and a community that cares about the place without needing it to be exceptional. Como has all of those things, quietly, without fanfare, in the way that the best neighborhoods always do. It is not the most interesting neighborhood in Minneapolis. It might be one of the most livable.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Not every neighborhood needs a story. Some neighborhoods just
          need to work — to provide solid houses on quiet streets, a park
          where kids play soccer on summer evenings, a commercial corridor
          that covers the basics, and the particular kind of stability that
          comes from people who choose to stay. Como is that neighborhood.
          Tucked into Southeast Minneapolis between the University of
          Minnesota campus and the St. Paul border, it is a place that
          almost no one visits intentionally and almost everyone who lives
          there values deeply. The houses are Craftsman bungalows and
          postwar ramblers. The streets are lined with mature elms and
          maples that form canopies in July. The residents are professors
          and nurses and electricians and retirees who bought in when the
          neighborhood was cheap and stayed because it turned out to be
          good. Como is not exciting. It is not trying to be. It is trying
          to be a decent place to live, and it succeeds at that with a
          consistency that more famous neighborhoods would envy.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/como/hero.webp"
        alt="A tree-lined residential street in the Como neighborhood of Southeast Minneapolis with Craftsman bungalows and mature canopy trees"
        caption="Como — quiet residential blocks and mature tree canopy in Southeast Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Como, Minneapolis?">
        <Prose>
          <p>
            Como is a compact residential neighborhood in Southeast
            Minneapolis, roughly bounded by the BNSF railroad tracks to the
            south, Como Avenue SE to the north, 15th Avenue SE to the west
            (where it borders{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy Holmes
            </Link>
            ), and approximately 29th Avenue SE to the east. With roughly
            5,800 residents, it is a mid-sized neighborhood by Minneapolis
            standards, though its quiet character makes it feel smaller than
            the numbers suggest.
          </p>
          <p>
            The neighborhood&apos;s identity is defined by what it is not as
            much as by what it is. It is not a student neighborhood, though
            it sits close to the university and some students live here. It
            is not a commercial destination, though Como Avenue carries
            enough small businesses to handle daily errands. It is not a
            cultural district, though its proximity to the U of M provides
            access to more cultural programming than most neighborhoods in
            the city. What Como is, fundamentally, is residential — a grid
            of single-family homes on tree-lined streets, populated by
            people who work at the university, at the hospitals, in the
            trades, or from home, and who chose this neighborhood because
            it offered a house they could afford on a block they could
            tolerate, with a commute they could manage.
          </p>
          <p>
            That description makes Como sound unremarkable, and in the way
            that real estate listings and neighborhood guides typically
            measure things, it is. But there is a quality to a
            neighborhood that functions well without trying hard — where
            the houses are maintained because the owners care, where the
            parks are used because they&apos;re pleasant, where the streets
            are safe because people pay attention — that deserves more
            recognition than it typically receives. Como is one of those
            neighborhoods.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Como Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/como/neighborhood-sign.webp"
          alt="Como neighborhood sign in Southeast Minneapolis"
          caption="The Como neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Como History & Origins">
        <Prose>
          <p>
            The land that is now Como lies within the traditional homeland
            of the Dakota people — the Mdewakanton band in particular, for
            whom the Mississippi River corridor and the falls at St. Anthony
            were places of deep significance. The dispossession of the
            Dakota from this land, through the treaties and violence of the
            mid-19th century, preceded and enabled the European-American
            settlement of Southeast Minneapolis.
          </p>
          <p>
            Como developed as a residential neighborhood in the 1880s and
            1890s, growing outward from the older settlements closer to
            the river and the university. The neighborhood&apos;s street
            grid was platted during this period, and the initial housing
            stock reflected the modest means and practical needs of the
            working and middle-class families who settled here. Unlike the
            bluff-top areas of{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy Holmes
            </Link>
            , which attracted wealthier residents drawn to river views,
            Como was flat, unpretentious, and oriented toward the
            workaday economy of the growing city.
          </p>
          <p>
            Como Avenue, the neighborhood&apos;s primary thoroughfare, was
            established as a connecting route between the university area
            and the communities to the east, eventually reaching the
            St. Paul border and beyond. The avenue&apos;s name — derived
            from Lake Como in Lombardy, Italy, via Como Park in St. Paul
            — became the neighborhood&apos;s name as well, a source of
            perpetual confusion with the much larger and more famous Como
            Park across the city line.
          </p>
          <p>
            The university&apos;s growth in the early 20th century shaped
            Como&apos;s development without dominating it. The neighborhood
            was close enough to campus to attract faculty and staff as
            residents, but far enough to avoid the worst of the
            student-housing conversion that transformed the blocks
            immediately adjacent to campus. This buffer — a few blocks of
            distance that preserved the owner-occupied, family-oriented
            character of the neighborhood — has been Como&apos;s most
            important geographical fact for over a century.
          </p>
          <p>
            The postwar era brought the same forces that reshaped
            residential neighborhoods across the Midwest: some families
            left for the suburbs, others stayed and aged in place. Como
            weathered this transition more gracefully than many
            neighborhoods, in part because its proximity to the
            university provided a steady supply of new residents —
            graduate students who became professors, hospital workers
            who became long-term homeowners — who refreshed the
            neighborhood&apos;s population without disrupting its
            character.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/como/historic-homes.webp"
          alt="Early 20th century Craftsman bungalows and foursquares on a residential street in Como, Minneapolis"
          caption="Como's residential blocks — Craftsman bungalows and foursquares from the early 1900s that define the neighborhood's character"
        />
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Como">
        <Prose>
          <p>
            Living in Como is living in a neighborhood that has mastered
            the art of being unremarkable in the best possible sense.
            The daily experience is dominated by the things that residential
            neighborhoods are supposed to provide: quiet streets, neighbors
            who wave, a park within walking distance, a house with a yard
            and a garage, and the low-grade background hum of a community
            that functions without drama. If that sounds boring, it might
            not be the neighborhood for you. If it sounds like relief, you
            are Como&apos;s target audience.
          </p>
          <p>
            The housing stock is the neighborhood&apos;s physical backbone:
            Craftsman bungalows from the 1910s and 1920s, foursquare homes
            from the same era, some Tudor Revival and Colonial Revival
            houses from the 1930s, and a sprinkling of postwar ramblers
            and split-levels from the 1950s. These are not grand houses —
            they are 1,200 to 1,800 square feet on modest lots, with
            detached garages and the kind of original woodwork that either
            delights or exhausts new owners depending on their appetite
            for maintenance. The bungalows, in particular, have an honest
            charm: built-in bookcases, tapered porch columns, hardwood
            floors that have survived a century of use.
          </p>
          <p>
            The demographics are a mix of long-term homeowners and newer
            arrivals. University faculty and staff form a significant
            contingent — the commute to campus is easy, the houses are
            affordable on academic salaries (at least by coastal
            standards), and the neighborhood offers the quiet that
            academic work requires. Healthcare workers from the university
            hospitals are another significant group. Tradespeople,
            retirees, and young families fill out the roster. The result
            is a neighborhood that is economically and generationally
            diverse without being dramatically so — no great wealth, no
            deep poverty, just the broad middle of American working and
            professional life.
          </p>
          <p>
            Community life in Como is not organized around a single
            institution or event. There is no Art-A-Whirl, no Eat Street,
            no signature festival. Instead, community happens in the
            accumulation of small interactions: conversations at Van
            Cleve Park while kids play, nods at the coffee shop on Como
            Avenue, the neighborhood email list that circulates information
            about lost dogs and city council agendas with equal urgency.
            The Como Community Council is active and engaged, focused on
            the practical concerns — traffic, development proposals, park
            maintenance — that sustain a residential neighborhood.
          </p>
        </Prose>

        <Quote
          text="I moved to Como for a two-year postdoc and I'm still here twelve years later. Nobody tells you about Como because there's nothing to tell — it's just a good neighborhood. That's the whole pitch."
          cite="Como resident, university researcher"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Como Food, Drink & Local Spots">
        <Prose>
          <p>
            Como is not a food destination. This is worth stating directly,
            because anyone reading a neighborhood guide is probably
            wondering about restaurants, and the honest answer is that
            Como&apos;s dining scene is thin. What exists along Como Avenue
            is functional — a few restaurants, a coffee shop, a
            convenience store — and serves the neighborhood&apos;s daily
            needs without attracting anyone from outside the area. For a
            more developed restaurant and bar scene, Como residents walk
            or bike to Dinkytown, to{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            &apos;s East Hennepin corridor, or to Stadium Village near
            campus.
          </p>
        </Prose>

        <ArticleSubsection title="Neighborhood Spots">
          <PlaceCardComponent place={{ name: "Bagu Sushi & Thai", tag: "Japanese / Thai", price: "$–$$", description: "Como Avenue SE. A neighborhood sushi and Thai restaurant that does reliable if unspectacular work with standard menu items. The lunch specials are a good deal, and the convenience of having a decent Asian restaurant within walking distance is genuinely valued by Como residents who don't want to drive to eat." }} />
          <PlaceCardComponent place={{ name: "Dunn Brothers Coffee", tag: "Coffee", price: "$", description: "Como Avenue SE. A reliable coffee shop that serves the neighborhood's caffeine needs and provides a place to sit with a laptop or a newspaper. Dunn Brothers is a Minnesota-based chain, and this location delivers the consistent product and comfortable environment the brand is known for. It's the de facto community gathering spot for Como, which says something about the neighborhood's commercial ecosystem." }} />
          <PlaceCardComponent place={{ name: "Como Avenue restaurants", tag: "Various", price: "$–$$", description: "A small cluster of restaurants along Como Avenue provides Chinese, pizza, and sandwich options that cover the basics. These are neighborhood-serving establishments — the kind of places that survive on repeat business from a four-block radius — and they do their job without pretension." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Dining Worth the Trip">
          <Prose>
            <p>
              Como&apos;s real dining scene is borrowed from its neighbors.
              Dinkytown — a ten-minute walk or five-minute bike ride — offers
              Al&apos;s Breakfast, Shuang Cheng, and a dozen other options.
              East Hennepin has Kramarczuk&apos;s, Surdyk&apos;s, and an
              expanding restaurant row. The Stadium Village area near the
              U of M campus provides additional options. And the full
              breadth of Northeast Minneapolis&apos;s brewery and restaurant
              scene — from{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>
              &apos;s taprooms to Central Avenue&apos;s global food
              corridor — is within easy biking distance. Como residents
              don&apos;t lack for dining options; they just have to leave
              the neighborhood to find most of them.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Como">
        <Prose>
          <p>
            Como&apos;s outdoor amenities are modest but well-used. The
            neighborhood is not a parks-and-lakes destination — it lacks
            lakefront access and has no trails that draw users from across
            the city — but it provides the green space and recreational
            facilities that a residential neighborhood needs.
          </p>
        </Prose>

        <ArticleSubsection title="Van Cleve Park">
          <Prose>
            <p>
              Van Cleve Park, located on the western edge of Como
              at Como Avenue and 15th Avenue SE, is the neighborhood&apos;s
              primary park and one of its most important community spaces.
              The park occupies roughly 15 acres and offers athletic fields
              (soccer, baseball), a playground, a wading pool, tennis
              courts, and open green space. On summer evenings, the
              soccer fields fill with pickup games — a mix of university
              students, neighborhood families, and immigrant communities
              from across Southeast Minneapolis. The wading pool draws
              families with young children. The playground is well-
              maintained and age-appropriate. Van Cleve is the kind of
              neighborhood park that doesn&apos;t appear on any best-of
              list but that serves its community faithfully, day after day,
              season after season.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/como/van-cleve-park.webp"
          alt="Van Cleve Park in the Como neighborhood with athletic fields and playground"
          caption="Van Cleve Park — the community green space that anchors Como's outdoor life"
        />

        <ArticleSubsection title="Biking & River Access">
          <Prose>
            <p>
              Como&apos;s Bike Score of 90 reflects the neighborhood&apos;s
              excellent cycling infrastructure and connectivity. The flat
              terrain, residential streets with low traffic, and connections
              to the university&apos;s bike network make cycling the most
              efficient way to move through and beyond the neighborhood.
              The Mississippi River trail system — part of the Grand
              Rounds — is accessible via a short ride to the west through
              Marcy Holmes, providing paved paths along the river gorge.
              The university campus itself provides extensive cycling
              connections southward. For a neighborhood without its own
              riverfront or major trail, Como is remarkably well-connected
              to the broader cycling and outdoor network.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Como Schools">
        <Prose>
          <p>
            Schools in Como serve a neighborhood with a moderate number of
            school-age children — enough to support the local schools but
            not enough to define the neighborhood&apos;s identity around
            them.
          </p>
          <p>
            Tuttle STEM Elementary, located within or near the Como
            boundaries, serves many neighborhood families and has a
            STEM-focused curriculum that reflects the university-adjacent
            culture of the area. Marcy Open School, in neighboring Marcy
            Holmes, is a popular alternative with its progressive,
            child-centered model and draws families from Como as well.
          </p>
          <p>
            Middle and high school options follow the Minneapolis Public
            Schools patterns: Northeast Middle School and Edison High
            School serve the area, with citywide magnets and charter
            schools available through the district&apos;s open enrollment
            system. The University of Minnesota&apos;s Child Development
            Lab School provides an early childhood option for families
            connected to the university.
          </p>
          <p>
            Como is a reasonable choice for families with school-age
            children, particularly those who value the university&apos;s
            proximity and resources. The schools are not the
            neighborhood&apos;s primary selling point, but they are
            competent, and the supplementary resources available through
            the university — libraries, tutoring programs, cultural
            events — add an educational layer that few neighborhoods
            can match.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Como Real Estate & Housing">
        <Prose>
          <p>
            Como&apos;s housing market is straightforward: it is a
            single-family home neighborhood with modest prices and
            consistent demand. The market lacks the drama of gentrifying
            neighborhoods (where prices spike and neighbors fight about
            development) and the excitement of up-and-coming areas (where
            investors speculate and new construction transforms blocks).
            What it offers instead is predictability — homes that
            appreciate steadily, sell in a reasonable timeframe, and hold
            their value because the fundamentals of the neighborhood
            (location, safety, schools, infrastructure) are sound.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Como">
          <Prose>
            <p>
              The typical Como home is a single-family bungalow or
              foursquare built between 1910 and 1940, with 1,200 to 1,800
              square feet, a detached garage, and a lot of 5,000 to 7,000
              square feet. These homes sell in the $310,000 to $450,000
              range as of 2025, with fully renovated homes or larger
              properties pushing toward $500,000. The prices reflect a
              sweet spot in the Minneapolis market: affordable enough for
              first-time buyers with university or hospital incomes,
              expensive enough that the neighborhood maintains its
              owner-occupied character.
            </p>
            <p>
              Duplexes and small multi-family properties are less common
              in Como than in some Minneapolis neighborhoods, but they do
              exist and typically sell in the $350,000 to $500,000 range.
              Condos are rare. New construction is infrequent — the
              neighborhood&apos;s lots are largely built out, and the
              scale of existing homes tends to discourage tear-down-and-
              rebuild projects. When new construction does appear, it is
              typically an infill project on a vacant lot or a major
              renovation of an existing structure.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Rentals in Como run $1,050 to $1,400 for a one-bedroom
              apartment and $1,300 to $1,800 for a two-bedroom. The
              rental stock is a mix of older apartment buildings, converted
              homes, and some newer construction. The proximity to the
              university means that some rental properties serve graduate
              students, postdocs, and visiting faculty — a tenant base
              that is generally quiet, responsible, and transient in
              two-to-five-year cycles rather than the annual turnover of
              undergraduate housing. Rental vacancy is low, and units
              tend to fill quickly through university channels.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We bought our bungalow in Como for $280,000 eight years ago. Our friends in Linden Hills paid twice that for a comparable house. We're ten minutes from campus, fifteen minutes from downtown, and our mortgage is manageable on two academic salaries. The math just works here." cite="Como homeowner, university faculty" />
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/como/residential-street.webp"
        alt="A residential street in Como with bungalows, detached garages, and mature tree canopy"
        caption="Como's residential streets — modest bungalows, big trees, and the quiet that comes from a neighborhood that works"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Como">
        <Prose>
          <p>
            Como&apos;s transportation profile reflects its residential
            character: biking is excellent, driving is easy, transit is
            adequate, and walking covers the basics but not much more.
            The Walk Score of 70 means you can walk to the nearest
            coffee shop and pick up a few groceries on Como Avenue, but
            anything beyond daily necessities requires a bike or car.
            The Bike Score of 90 is the real story — Como is flat,
            compact, and well-connected to the university&apos;s cycling
            infrastructure, making a bike the most practical mode of
            transportation for most trips.
          </p>
          <p>
            Transit service runs along Como Avenue and connecting routes,
            with bus lines providing service to the university campus,
            downtown Minneapolis, and St. Paul. The Green Line light rail,
            running along Washington Avenue through the U of M campus, is
            accessible via a short bike ride or bus transfer. The Transit
            Score of 55 is honest — transit here is a supplement to biking
            and driving, not a primary mode for most residents.
          </p>
          <p>
            For drivers, Como is well-positioned. Interstate 35W is
            accessible via University Avenue, putting downtown Minneapolis
            about 10 minutes away and MSP Airport about 15 to 20 minutes.
            Highway 280 provides a quick route to St. Paul and the
            Interstate 94 corridor. Parking is generally not an issue —
            most homes have garages or off-street parking, and the
            residential streets have ample on-street parking outside of
            game days and university events.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Como is not a neighborhood in crisis. Its changes are
            incremental rather than dramatic, and the tensions it faces are
            the ordinary ones of urban residential life rather than the
            existential challenges confronting neighborhoods like{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>{" "}
            or the North Loop. That said, several trends are worth noting
            honestly.
          </p>
        </Prose>

        <ArticleSubsection title="Density & the 2040 Plan">
          <Prose>
            <p>
              The Minneapolis 2040 Plan, which eliminated single-family-
              only zoning citywide, has created theoretical development
              possibilities in Como that some residents welcome and others
              resist. The plan allows duplexes and triplexes on lots
              that were previously restricted to single-family homes, and
              permits greater density along transit corridors like Como
              Avenue. In practice, the impact in Como has been modest so
              far — the economics of tearing down a bungalow to build a
              triplex don&apos;t pencil out at current prices in most of
              the neighborhood. But the possibility of future densification
              is a topic of ongoing conversation, particularly along Como
              Avenue and at the neighborhood&apos;s edges near the
              university.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="University Expansion Pressure">
          <Prose>
            <p>
              The University of Minnesota&apos;s footprint has grown
              steadily over the past century, and that growth exerts
              pressure on adjacent neighborhoods. Como has been partially
              shielded by its distance from campus — it&apos;s far enough
              that the worst of the student-housing conversion happened
              in Marcy Holmes rather than here. But graduate student and
              staff housing demand does affect Como, and the neighborhood
              watches university development plans carefully. Any
              significant expansion of the campus or the medical center
              would have ripple effects on Como&apos;s housing market and
              traffic patterns.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Generational Turnover">
          <Prose>
            <p>
              Like many stable residential neighborhoods, Como is
              experiencing generational turnover as long-term homeowners
              age and sell to younger buyers. This is natural and generally
              healthy — it brings new energy and investment into the
              housing stock — but it also changes the social fabric. The
              retiree who has lived on the block for forty years and the
              young couple with a toddler who just bought next door have
              different needs, different schedules, and different
              expectations for what the neighborhood should be. Managing
              that transition gracefully is an ongoing project, and Como
              is managing it better than most.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/como/como-avenue.webp"
        alt="Como Avenue SE with small businesses and residential cross streets in the Como neighborhood"
        caption="Como Avenue — the neighborhood's commercial spine, modest but functional"
      />

      {/* FAQ */}
      <ArticleSection id="faq" title="Como FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
