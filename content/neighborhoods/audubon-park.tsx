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
    title: "Audubon Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Audubon Park, Minneapolis — a quiet residential neighborhood in Northeast Minneapolis, Audubon Park itself, neighborhood character, real estate, and what it's really like to live in one of Northeast's most understated neighborhoods in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Audubon Park",
  deck: "The quiet residential counterpoint to Northeast's brewery and arts district buzz — where bungalows with vegetable gardens line streets named after presidents, the neighborhood park is genuinely the center of community life, and the best thing about living here is that nobody is trying to sell you on living here.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Audubon Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Audubon Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Audubon Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,400", label: "Residents (US Census / ACS estimates)" },
      { value: "$280K–$400K", label: "Median home sale price (2025 data)" },
      { value: "$1,000–$1,350", label: "Typical 1BR apartment rent (2025)" },
      { value: "62", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
      { value: "48", label: "Transit Score" },
      { value: "1880s–1920s", label: "Primary era of residential development" },
      { value: "12 acres", label: "Audubon Park green space" },
    ],
  },
  faq: [
    {
      question: "Is Audubon Park a good neighborhood in Minneapolis?",
      answer:
        "Audubon Park is an excellent neighborhood for people who prioritize residential quality over commercial amenities and nightlife. It's one of the quietest neighborhoods in Northeast Minneapolis, with well-maintained homes, a strong sense of community, and a genuinely nice park at its center. The trade-off is limited walkability to restaurants, bars, and shops — you'll need a bike or car for most commercial needs. If you want the Northeast Minneapolis address without the Northeast Minneapolis noise, Audubon Park is a strong option.",
    },
    {
      question: "Is Audubon Park, Minneapolis safe?",
      answer:
        "Audubon Park is one of the safer neighborhoods in Minneapolis. Both violent and property crime rates are below the city average. The neighborhood's residential density, stable homeownership rates, and distance from major commercial corridors contribute to a quiet, low-crime environment. Residents generally feel safe walking the neighborhood at all hours. The most common issues are the same minor property crimes — bike theft, occasional car break-ins — that affect all Minneapolis neighborhoods.",
    },
    {
      question: "How much does it cost to live in Audubon Park?",
      answer:
        "Audubon Park is one of the more affordable Northeast Minneapolis neighborhoods. Single-family homes — mostly bungalows and modest two-story houses from the early 20th century — sell in the $280,000 to $400,000 range, with particularly well-maintained or renovated homes reaching $420,000 or above. Rentals are limited, as the neighborhood is predominantly owner-occupied, but one-bedroom apartments in the area run $1,000 to $1,350. Compared to the trendier parts of Northeast (Logan Park, St. Anthony West), Audubon Park offers more house for less money.",
    },
    {
      question: "Where is Audubon Park in Minneapolis?",
      answer:
        "Audubon Park is in Northeast Minneapolis, roughly bounded by Stinson Boulevard to the east, Johnson Street NE to the west, Lowry Avenue NE to the south, and roughly 33rd Avenue NE to the north. It sits east of the more commercially active neighborhoods like Logan Park and Holland, and south of Northeast Park. The neighborhood is named for Audubon Park, a city park near its center.",
    },
    {
      question: "Is Audubon Park walkable?",
      answer:
        "Moderately at best. Audubon Park's Walk Score of 62 reflects a neighborhood where you can walk to the park, to a nearby convenience store, and to a few scattered businesses, but where most commercial needs require a bike ride to Central Avenue, Johnson Street, or the commercial corridors in adjacent neighborhoods. The Bike Score of 85 is more relevant — biking is the practical mode for reaching restaurants, breweries, groceries, and other amenities in Northeast Minneapolis. The neighborhood's quiet, residential streets are pleasant for walking even if the destinations are limited.",
    },
    {
      question: "What is there to do in Audubon Park?",
      answer:
        "Audubon Park is primarily a residential neighborhood, and 'things to do' center on the park itself — playground, sports fields, wading pool, community events — and on the broader Northeast Minneapolis ecosystem that's accessible by bike. The neighborhood's appeal is not about attractions; it's about quality of daily life. Residents bike to Logan Park's breweries, to Central Avenue's restaurants, to the riverfront trails, and to the arts district, then come home to a quiet block. Audubon Park is a base of operations, not a destination.",
    },
    {
      question: "Is Audubon Park good for families?",
      answer:
        "Very much so. Audubon Park is one of the better family neighborhoods in Northeast Minneapolis: safe, quiet, affordable, with a community-centered park that includes a playground and wading pool. The housing stock — single-family homes with yards — is well-suited to families with children. Schools serve the area through Minneapolis Public Schools, with Audubon Park itself hosting community programs and events. The neighborhood's distance from bars and nightlife is a feature, not a bug, for families with young children.",
    },
    {
      question: "How does Audubon Park compare to other Northeast Minneapolis neighborhoods?",
      answer:
        "Audubon Park is the quiet residential interior of Northeast Minneapolis. Compared to Logan Park (arts district, breweries, gentrification drama), Holland (diverse, commercial corridors, more urban), or St. Anthony West (historic, riverfront, foodie scene), Audubon Park offers less excitement and more stability. It's less expensive than the trendier Nordeast neighborhoods, safer and quieter than most, and more family-oriented. Think of it as the neighborhood where Northeast Minneapolis's brewery workers and artists actually live — the affordable, functional residential fabric that the flashier neighborhoods depend on but don't talk about.",
    },
  ],
  nearby: [
    { name: "Logan Park", slug: "logan-park", description: "The creative engine of Nordeast and Art-A-Whirl" },
    { name: "Holland", slug: "holland", description: "Working-class Nordeast east of Central Avenue" },
    { name: "Northeast Park", slug: "northeast-park", description: "Quiet residential streets at the northern edge of Northeast" },
    { name: "Waite Park", slug: "waite-park", description: "Central Ave adjacent residential living in Nordeast" },
    { name: "Windom Park", slug: "windom-park", description: "Residential Northeast along the St. Anthony Parkway" },
  ],
  closing: {
    title: "What Makes Audubon Park Worth Knowing",
    paragraphs: [
      "Audubon Park will never be the subject of a magazine feature or a real estate thinkpiece. No one will write a trend story about it, because it is not a trend — it is a neighborhood, in the most fundamental and least glamorous sense of the word. It is a collection of houses on a grid of streets organized around a park, populated by people who mow their lawns and shovel their sidewalks and show up at community meetings when something matters. That description could apply to a thousand neighborhoods in a thousand American cities, and that's exactly the point. The things that make a neighborhood good are not unique — they're universal, just unevenly distributed.",
      "What Audubon Park offers is the Northeast Minneapolis identity — the creative proximity, the working-class heritage, the Central Avenue food corridor, the brewery culture — without the noise and cost that come with being at the center of that identity. It's the residential fabric that makes the flashier neighborhoods possible: a place where people can afford to live, raise kids, maintain a house, and bike to the taproom on Friday evening without worrying that the taproom's success will double their rent. That quiet functionality is Audubon Park's contribution to the ecosystem of Northeast Minneapolis, and it is not a small one.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There is a version of Northeast Minneapolis that gets written
          about — the breweries, the arts district, Art-A-Whirl, the
          gentrification debates, the Central Avenue food crawl. And then
          there is the Northeast Minneapolis that people actually live in
          on a Tuesday evening in February: a bungalow on a quiet street,
          a garage that needs painting, a neighbor shoveling the sidewalk
          before you get to it, and the particular silence of a residential
          block where the loudest sound is someone&apos;s dog barking at a
          squirrel. That is Audubon Park. Named for the park at its center
          — which is itself named for the naturalist John James Audubon —
          this is one of the least talked-about and most livable
          neighborhoods in Nordeast. It has no brewery. It has no gallery.
          It has no commercial corridor to speak of. What it has is a grid
          of well-maintained homes, a genuinely pleasant park, and the kind
          of residential stability that looks boring from the outside and
          feels like luxury from the inside.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/audubon-park/hero.webp"
        alt="A quiet residential street in Audubon Park, Northeast Minneapolis, with bungalows and mature trees"
        caption="Audubon Park — quiet residential Nordeast, where the neighborhood park is the main attraction"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Audubon Park, Minneapolis?">
        <Prose>
          <p>
            Audubon Park is a small residential neighborhood in Northeast
            Minneapolis, roughly bounded by Stinson Boulevard to the east,
            Johnson Street NE to the west, Lowry Avenue NE to the south,
            and approximately 33rd Avenue NE to the north. With roughly
            3,400 residents, it is one of the smaller neighborhoods in the
            city, and its profile is almost entirely residential — single-
            family homes on a regular grid, with minimal commercial
            activity within the neighborhood boundaries.
          </p>
          <p>
            The neighborhood is named for Audubon Park, a 12-acre city
            park near the center of the area that serves as the community&apos;s
            de facto town square. The park — with its playground, athletic
            fields, wading pool, and recreation center — is the single
            most important community institution in a neighborhood that
            has very few institutions of any kind. In most Minneapolis
            neighborhoods, the park is one of several gathering places
            competing with coffee shops, taprooms, and commercial
            corridors for community attention. In Audubon Park, the park
            is it.
          </p>
          <p>
            The neighborhood sits in the residential interior of Northeast
            Minneapolis, east of the Central Avenue commercial corridor
            and the arts district that defines{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>{" "}
            and south of the quieter reaches of{" "}
            <Link href="/neighborhoods/northeast-park" className="text-[#2a9d8f] hover:underline">
              Northeast Park
            </Link>
            . Its position — close enough to the action to benefit from it,
            far enough to avoid the noise — is the fundamental proposition
            of living in Audubon Park. You can bike to a taproom in ten
            minutes, eat on Central Avenue in fifteen, and be home on your
            quiet block in time to hear the ice cream truck make its
            summer rounds.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Audubon Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/audubon-park/neighborhood-sign.webp"
          alt="Audubon Park neighborhood sign in Northeast Minneapolis"
          caption="The Audubon Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Audubon Park History & Origins">
        <Prose>
          <p>
            The land that is now Audubon Park is part of the traditional
            homeland of the Dakota people — the Mdewakanton and Wahpekute
            bands, for whom the Mississippi River corridor and its
            tributaries were essential to spiritual and material life. The
            dispossession of the Dakota from this land preceded the
            European-American settlement that would transform the
            prairie into the residential grid that exists today.
          </p>
          <p>
            Audubon Park developed as a residential neighborhood in the
            late 19th and early 20th centuries, part of the broader
            buildout of Northeast Minneapolis that accompanied the
            industrial growth of the city. The area was platted for
            residential development in the 1880s and 1890s, and the
            housing stock that defines the neighborhood today was
            largely built between 1900 and 1930. The street names —
            many of which honor U.S. presidents (Johnson, Polk, Tyler,
            Fillmore, Pierce, Buchanan) — reflect the era&apos;s
            conventions and the platters&apos; ambitions.
          </p>
          <p>
            The early residents were predominantly working-class families
            of European immigrant origin — Polish, German, Scandinavian,
            Ukrainian — who worked in the mills, factories, and trades
            that powered Northeast Minneapolis&apos;s economy. The houses
            they built reflected their means: small bungalows and
            one-and-a-half-story cottages, typically 900 to 1,400 square
            feet, on narrow lots with detached garages. These were not
            grand houses. They were houses built to be functional, to be
            paid off within a working lifetime, and to shelter families
            who measured success in stability rather than display.
          </p>
          <p>
            Audubon Park — the park itself — was established as a city
            park in the early 1900s, providing green space and recreational
            facilities for a neighborhood that was otherwise densely built
            with houses and had little open land. The park quickly became
            the center of community life, hosting sports leagues, community
            events, and the informal daily gathering that happens when
            neighbors share a public space. That centrality has not
            diminished in over a century.
          </p>
          <p>
            The neighborhood&apos;s trajectory through the mid and late
            20th century was one of quiet stability. Unlike some Northeast
            neighborhoods that experienced significant deindustrialization
            and population loss, Audubon Park — being primarily
            residential rather than industrial — weathered these changes
            with its housing stock and community fabric largely intact.
            The same houses, maintained by successive generations of
            owners, continued to serve the same function: providing
            affordable, decent housing for working and middle-class
            families.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Audubon Park">
        <Prose>
          <p>
            Living in Audubon Park is living in a neighborhood that
            doesn&apos;t perform. There is no curated identity, no
            marketing hook, no Instagram-ready aesthetic. The streets look
            like streets. The houses look like houses. The park looks like
            a park. If you&apos;re used to neighborhoods that announce
            themselves — with murals, with signage, with a particular
            commercial vocabulary — Audubon Park might initially feel like
            nothing at all. Give it time. The nothing is the point.
          </p>
          <p>
            The residential fabric is remarkably consistent. Block after
            block of bungalows and small two-story houses, many with
            original front porches, detached garages (sometimes in better
            shape than the house, sometimes not), and yards that range
            from meticulously gardened to charmingly neglected. The lots
            are modest — 40 feet wide is typical — which means the houses
            sit close together, creating a pedestrian-scale density that
            fosters neighborliness without crowding. You know your
            neighbors in Audubon Park because you can&apos;t avoid knowing
            them — the houses are close enough that a conversation on the
            porch carries to the next yard.
          </p>
          <p>
            The community is a mix of long-time Northeast families and
            newer arrivals. The old-timers — some of them second and third
            generation in the same house — carry the Nordeast identity
            with quiet pride: the accent, the work ethic, the loyalty to
            the neighborhood. The newer residents tend to be young families
            and couples priced out of the trendier parts of Northeast
            (or the Southwest lakes neighborhoods) who discover that
            Audubon Park offers more house, more yard, and more quiet
            for less money. The two groups coexist without much friction,
            united by the basic social contract of residential life:
            maintain your property, shovel your walk, keep an eye on each
            other&apos;s houses, and don&apos;t let your parties run past
            midnight.
          </p>
          <p>
            The park is the social center. On summer evenings, Audubon
            Park fills with the soundtrack of residential community life:
            kids on the playground, teens on the basketball court, adults
            walking dogs on the paths, the wading pool generating the
            particular frequency of shrieking that means children are
            having a good time. The recreation center hosts programs and
            serves as a community meeting space. On the Fourth of July,
            the park hosts a neighborhood celebration that is earnest
            and unpretentious and exactly what you would expect from a
            neighborhood that values function over fashion.
          </p>
        </Prose>

        <Quote
          text="We looked at Logan Park first — loved the breweries, loved the vibe — but the houses in our price range needed $80,000 in work. In Audubon Park, we got a solid bungalow with a finished basement and a two-car garage for $310,000. It's ten minutes by bike to everything in Northeast. I don't know why more people don't figure this out."
          cite="Audubon Park homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Audubon Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Audubon Park&apos;s dining scene is, frankly, minimal. The
            neighborhood is almost entirely residential, and the few
            commercial establishments within its boundaries serve
            utilitarian needs rather than culinary ones. This is not a
            criticism — it&apos;s a description of a neighborhood that
            was designed for living, not eating out. For restaurants and
            bars, Audubon Park residents rely on the commercial corridors
            in adjacent neighborhoods, particularly Central Avenue to the
            west and Johnson Street NE.
          </p>
        </Prose>

        <ArticleSubsection title="Within Reach">
          <PlaceCardComponent place={{ name: "Central Avenue corridor", tag: "Various / Global", price: "$–$$", description: "A ten-minute bike ride west brings Audubon Park residents to Central Avenue's food corridor — Holy Land bakery and deli, Chimborazo's Ecuadorian cooking, Que Nha's Vietnamese, Emily's Lebanese Deli, and the full range of old-school and new-school Northeast Minneapolis dining. Central Avenue is Audubon Park's borrowed restaurant row." }} />
          <PlaceCardComponent place={{ name: "Northeast Minneapolis breweries", tag: "Breweries / Taprooms", price: "$–$$", description: "The brewery ecosystem of Logan Park and surrounding neighborhoods — Indeed, Bauhaus, Fair State, Able — is accessible from Audubon Park in ten to fifteen minutes by bike. The ride home on quiet residential streets, after a couple of beers on a summer evening, is one of the genuine pleasures of living in this neighborhood." }} />
          <PlaceCardComponent place={{ name: "Johnson Street NE", tag: "Various", price: "$–$$", description: "Johnson Street NE, running along or near Audubon Park's western edge, carries some commercial activity — a convenience store, a restaurant or two — that provides closer options for residents who don't want to bike to Central Avenue. The offerings are modest but functional." }} />
        </ArticleSubsection>

        <ArticleSubsection title="The Home Cooking Culture">
          <Prose>
            <p>
              It&apos;s worth noting that Audubon Park has a strong home
              cooking culture — the vegetable gardens visible in yards
              throughout the neighborhood are not just decorative. The
              combination of affordable houses with actual yards, a
              population that includes both old-school Nordeast families
              (who cook from tradition) and newer residents (who cook
              from farmers&apos; market hauls), and the lack of convenient
              restaurants creates a neighborhood where people cook at
              home more than in most urban areas. The Northeast Minneapolis
              Farmers Market on summer Saturdays draws Audubon Park
              residents in numbers disproportionate to the neighborhood&apos;s
              size.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Audubon Park">
        <Prose>
          <p>
            Audubon Park&apos;s outdoor life revolves around the
            neighborhood&apos;s namesake park, supplemented by biking
            connections to the broader trail system and green spaces
            of Northeast Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="Audubon Park (the Park)">
          <Prose>
            <p>
              Audubon Park, the city park at the neighborhood&apos;s
              center, is a 12-acre green space that includes a playground,
              athletic fields (baseball, soccer, open play), basketball
              courts, tennis courts, a wading pool, and the Audubon Park
              Recreation Center. The park is well-maintained by
              Minneapolis Park and Recreation Board standards and serves
              as the primary outdoor gathering space for the neighborhood.
              The wading pool is the summer center of gravity for families
              with young children. The athletic fields host community
              leagues and pickup games. The recreation center offers youth
              and adult programming year-round.
            </p>
            <p>
              The park is not dramatic — it lacks the river views of Boom
              Island, the lakefront setting of Lake Harriet, or the
              cultural overlay of the Northeast Arts District. But it is
              a genuinely good neighborhood park: well-sized, well-equipped,
              well-used, and well-loved. The community&apos;s relationship
              to the park is the heart of what makes Audubon Park function
              as a neighborhood rather than just a collection of houses.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Biking & Trail Access">
          <Prose>
            <p>
              The Bike Score of 85 reflects Audubon Park&apos;s strong
              cycling connectivity. The neighborhood&apos;s flat terrain
              and quiet residential streets make for pleasant riding, and
              connections to the broader Northeast Minneapolis bike
              network provide access to the riverfront trails (via a ride
              through{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>{" "}
              or St. Anthony), the St. Anthony Parkway, and the
              university campus. The ride to the Mississippi River trails
              takes roughly 15 minutes. The St. Anthony Parkway, which
              runs along the northern edge of Northeast Minneapolis, is
              accessible from the neighborhood&apos;s northern reaches
              and provides a scenic route for recreational riding.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Audubon Park Schools">
        <Prose>
          <p>
            Schools in Audubon Park are served by Minneapolis Public
            Schools. The neighborhood&apos;s school-age population is
            moderate — enough to support local schools but not enough to
            dominate the neighborhood&apos;s character.
          </p>
          <p>
            Audubon Park is served by elementary schools within the
            Minneapolis Public Schools system, with the specific
            attendance zone determined by the district&apos;s boundary
            process. The neighborhood&apos;s families also access the
            broader magnet and choice system, which allows enrollment in
            schools across the city. Several charter schools in Northeast
            Minneapolis provide additional options.
          </p>
          <p>
            Northeast Middle School serves the area for middle school, and
            Edison High School is the comprehensive high school serving
            Northeast Minneapolis. Edison has a diverse student body and
            career and technical education programs that connect to the
            neighborhood&apos;s working-class heritage.
          </p>
          <p>
            Audubon Park is a reasonable neighborhood for families who
            value residential quality and affordability and are willing
            to navigate the Minneapolis Public Schools system to find the
            right school fit. The schools in the area are not the
            neighborhood&apos;s primary draw, but they are functional, and
            the community&apos;s family-friendly character provides a
            supportive environment for children outside of school hours.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Audubon Park Real Estate & Housing">
        <Prose>
          <p>
            Audubon Park&apos;s housing market is one of the more
            accessible in Northeast Minneapolis — a neighborhood where
            the bungalow-on-a-quiet-street dream is still financially
            realistic for middle-income buyers. The market has appreciated
            along with the rest of Northeast over the past decade, but
            Audubon Park&apos;s distance from the trendiest corridors has
            kept prices below the peaks seen in Logan Park or St. Anthony
            West.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Audubon Park">
          <Prose>
            <p>
              The dominant housing type is the single-family bungalow or
              one-and-a-half-story house built between 1900 and 1930.
              These homes are typically 900 to 1,400 square feet on lots
              of 4,000 to 6,000 square feet, with detached garages.
              Interior features often include original hardwood floors,
              built-in bookcases, and the particular charm of Craftsman-era
              construction — tapered columns, wide window trim, a sense of
              proportion that modern builders rarely match.
            </p>
            <p>
              Prices range from $280,000 to $400,000 as of 2025, with the
              lower end representing homes that need updating and the
              higher end representing fully renovated properties. Compared
              to Logan Park ($300,000–$420,000) or St. Anthony West
              ($350,000–$500,000+), Audubon Park offers a meaningful
              discount — typically $30,000 to $80,000 less for a
              comparable house — reflecting its less trendy address and
              more limited walkability.
            </p>
            <p>
              Duplexes exist in moderate numbers, typically selling for
              $300,000 to $450,000. New construction is minimal — the
              neighborhood&apos;s lots are built out, and the economics of
              tearing down a livable bungalow to build new have not
              generally penciled out at Audubon Park price points.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Audubon Park is predominantly owner-occupied, and rental
              options are correspondingly limited. One-bedroom apartments
              in the area run $1,000 to $1,350 — below the Northeast
              Minneapolis average — with the rental stock consisting
              mainly of units in older duplexes and small apartment
              buildings. The limited rental supply means that units in
              Audubon Park can be hard to find; prospective renters often
              need to watch listings closely or rely on word-of-mouth.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="Everyone talks about Northeast being expensive now. Audubon Park is the exception — or at least the last holdout. We paid $295,000 for a three-bedroom bungalow with a big yard. Try finding that in Logan Park." cite="Audubon Park homeowner, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Audubon Park">
        <Prose>
          <p>
            Audubon Park&apos;s transportation profile is straightforward:
            biking is great, driving is easy, walking is limited by the
            lack of nearby commercial destinations, and transit is
            functional but infrequent. The Walk Score of 62 reflects the
            neighborhood&apos;s residential character — you can walk to the
            park, to a neighbor&apos;s house, and to a handful of
            scattered businesses, but reaching a restaurant or grocery
            store on foot requires a longer trek to Central Avenue or
            Johnson Street.
          </p>
          <p>
            The Bike Score of 85 is the number that matters. Audubon
            Park&apos;s flat terrain, quiet streets, and connections to the
            Northeast Minneapolis bike network make cycling the most
            practical mode for reaching the commercial and recreational
            amenities that the neighborhood itself lacks. A ten-minute
            bike ride puts you on Central Avenue, at a taproom, or on
            the riverfront trails. Most Audubon Park households that
            don&apos;t have a car get by comfortably on bikes.
          </p>
          <p>
            Transit service reaches the neighborhood through bus routes
            on nearby arterial streets, but frequency is lower than in
            more centrally located neighborhoods. The Transit Score of 48
            is honest — you can get downtown by bus, but the headways may
            require planning around the schedule rather than showing up
            and waiting. Most Audubon Park residents who commute downtown
            drive (10–15 minutes) or bike (20–25 minutes on the
            riverfront trails).
          </p>
          <p>
            For drivers, access is uncomplicated. Central Avenue provides
            a direct route to downtown and to the northern suburbs.
            Interstate 35W is accessible via Stinson Boulevard or Central
            Avenue. MSP Airport is 20 minutes via I-35W. Parking is never
            an issue — most homes have garages and off-street parking,
            and the residential streets have ample room.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Audubon Park is not a neighborhood under dramatic pressure.
            Its changes are slow, incremental, and mostly welcome —
            the kind of gradual evolution that characterizes stable
            residential neighborhoods rather than the rapid
            transformation that generates headlines and community
            meetings.
          </p>
        </Prose>

        <ArticleSubsection title="Northeast Gentrification Spillover">
          <Prose>
            <p>
              As Logan Park and the Central Avenue corridor have become
              more expensive and more trendy, some of the demand has
              spilled eastward into neighborhoods like Audubon Park. This
              is visible in rising home prices — up significantly over the
              past decade — and in the arrival of younger buyers who are
              drawn to the Northeast Minneapolis brand but priced out of
              its epicenter. So far, this spillover has been moderate in
              Audubon Park: prices have risen but remain accessible, new
              construction has been minimal, and the character of the
              neighborhood has not shifted dramatically. The question is
              whether that moderation continues as Northeast Minneapolis
              as a whole becomes more desirable and more expensive.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Housing Stock Aging">
          <Prose>
            <p>
              The bungalows and small houses that define Audubon Park are
              now 100 years old or approaching it. At that age, the
              maintenance demands increase: foundations need repair, wiring
              needs updating, windows need replacing, roofs need attention.
              For long-time homeowners on fixed incomes, these costs can be
              burdensome. For new buyers, the charm of an original
              Craftsman bungalow comes with the reality of century-old
              plumbing. The neighborhood&apos;s housing stock is generally
              in good condition — a testament to decades of careful
              ownership — but the next generation of maintenance is
              arriving, and the costs are not trivial.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Density Question">
          <Prose>
            <p>
              The Minneapolis 2040 Plan allows increased density on lots
              that were previously single-family-only, and Audubon Park
              — with its modest lot sizes and aging housing stock — could
              theoretically see some conversions to duplexes or triplexes.
              In practice, the economics have not driven significant
              change yet: the cost of acquiring a bungalow, demolishing
              it, and building a multi-unit structure exceeds the revenue
              that the resulting units would generate at Audubon Park
              rents. But as prices continue to rise, that math could
              change, and the community is watching.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Audubon Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
