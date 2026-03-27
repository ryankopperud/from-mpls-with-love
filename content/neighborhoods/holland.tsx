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
    title: "Holland, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Holland, Minneapolis — quiet Northeast residential, near Central Avenue, affordable housing, diverse community, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Holland",
  deck: "A quiet residential neighborhood in Northeast Minneapolis that sits just east of Central Avenue, keeps a low profile, and offers the kind of affordable, unpretentious homeownership that the trendier parts of Northeast have priced out.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Holland?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Holland" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Holland, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,000", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$240K–$330K", label: "Median home sale price range (2025 data)" },
      { value: "1910s–1950s", label: "Era most homes were built" },
      { value: "Central Ave NE", label: "Primary commercial corridor (western edge)" },
      { value: "Edison High", label: "Comprehensive high school" },
      { value: "12–18 min", label: "Drive to downtown Minneapolis" },
      { value: "62", label: "Walk Score" },
      { value: "76", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Holland a good neighborhood in Minneapolis?",
      answer:
        "Holland is a solid, affordable residential neighborhood in Northeast Minneapolis that offers quiet blocks, proximity to Central Avenue's commercial corridor, and housing prices well below the city median. It lacks the buzz and the amenities of the trendier parts of Northeast, but that is precisely its appeal for buyers seeking value, space, and the working-class character that originally defined the area. The neighborhood is diverse, family-oriented, and largely overlooked — which, for some buyers, is the whole point.",
    },
    {
      question: "Where is Holland in Minneapolis?",
      answer:
        "Holland is in Northeast Minneapolis, roughly bounded by Lowry Avenue NE to the north, Stinson Boulevard and the Columbia Heights border to the east, 18th Avenue NE to the south, and Central Avenue NE to the west. It sits east of the Bottineau neighborhood, south of Columbia Park, and north of Waite Park. Central Avenue — Northeast's primary commercial corridor — runs along its western edge, providing access to restaurants, shops, and transit.",
    },
    {
      question: "Is Holland safe?",
      answer:
        "Holland is generally one of the quieter, safer neighborhoods in Northeast Minneapolis. Crime rates are near or slightly below the citywide average for most categories, and the residential blocks have a calm, family-oriented feel. Property crime — car break-ins, package theft — is the most common concern. The neighborhood benefits from its residential character and distance from the more commercial corridors where crime tends to concentrate.",
    },
    {
      question: "How much do homes cost in Holland, Minneapolis?",
      answer:
        "Median home sale prices in Holland ranged from roughly $240,000 to $330,000 in 2025, below the citywide median and well below the prices in the more trendy Northeast neighborhoods closer to downtown. Starter homes and fixer-uppers can be found in the $210,000–$270,000 range, while larger or updated homes can reach $340,000–$400,000. Holland offers some of the best value in Northeast Minneapolis for single-family homeownership.",
    },
    {
      question: "What schools serve Holland, Minneapolis?",
      answer:
        "Holland is served by Minneapolis Public Schools. Nearby elementary options include Pillsbury Elementary and other Northeast schools. Northeast Middle School serves grades 6–8, and Edison High School is the comprehensive high school. Edison has a strong reputation within the Minneapolis district. Charter schools and the district's open enrollment system provide additional options.",
    },
    {
      question: "Is Holland near Central Avenue?",
      answer:
        "Yes — Central Avenue NE forms Holland's western boundary, putting the neighborhood within easy walking or biking distance of Northeast's primary commercial corridor. Central Avenue has been transformed in recent years with new restaurants, breweries, bars, and shops, and Holland residents can access this scene without living in the middle of it — a position that offers the benefits of proximity without the noise and parking challenges.",
    },
    {
      question: "How is Holland different from other Northeast neighborhoods?",
      answer:
        "Holland is quieter, more residential, and less well-known than neighborhoods like Logan Park, St. Anthony West, or the Central Avenue Arts District. It lacks the breweries, galleries, and restaurant density of those areas but also lacks their higher prices and gentrification pressures. Holland is Northeast at its most residential and unpretentious — a neighborhood of families, longtime homeowners, and people who prefer quiet blocks to vibrant commercial strips.",
    },
    {
      question: "Is Holland gentrifying?",
      answer:
        "Holland is experiencing some price appreciation as the broader Northeast area has become more popular, but gentrification pressure here is less intense than in neighborhoods closer to downtown. The neighborhood's residential character and distance from the arts district and brewery corridor have insulated it somewhat from the most rapid changes. Prices are rising, but Holland remains affordable by Northeast standards, and the pace of change is measured rather than dramatic.",
    },
  ],
  nearby: [
    { name: "Bottineau", slug: "bottineau", description: "West, historic Eastern European roots, near river" },
    { name: "Columbia Park", slug: "columbia-park", description: "North, golf course, quiet residential" },
    { name: "Waite Park", slug: "waite-park", description: "South, residential Northeast near Central Ave" },
    { name: "Audubon Park", slug: "audubon-park", description: "Southwest, residential Northeast" },
    { name: "Northeast Park", slug: "northeast-park", description: "South, residential Northeast" },
  ],
  closing: {
    title: "What Makes Holland Worth Knowing",
    paragraphs: [
      "Holland is the neighborhood that proves you do not need a brand to have a community. There are no brewery tours here, no art crawl stops, no restaurants with Instagram accounts and reservation systems. There are houses and yards and blocks where people have lived for years or decades, where the mailman knows your name and the kid next door shovels your sidewalk in winter without being asked. There is Central Avenue a block or two away when you want restaurants and nightlife and the energy of a commercial corridor that is genuinely one of the most diverse and interesting in the city. And there is the quiet of home when you come back — the porch light on, the street still, the reassurance that a neighborhood does not have to be celebrated to be good.",
      "The risk for Holland is the same risk that every affordable, quiet neighborhood faces in a city where prices keep rising: that the affordability that makes it accessible will attract buyers who change the character, that the quiet will be disrupted by development, that the unpretentiousness will be rebranded as 'authentic' and sold at a premium. That has not happened yet in Holland, and many residents intend to ensure it does not. Their tool is the simplest one available — staying, maintaining, showing up, and building the kind of community that is too rooted to be easily displaced. It is not a dramatic strategy. It is a Holland strategy. And so far, it is working.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          The thing about Holland is that nothing in particular happens
          here, and that is the entire point. On a Thursday evening in
          May, a man is watering the flowers along his front walk — the
          same flowers he has planted every spring for fifteen years, in
          the same beds, in the same order. His neighbor is sitting on
          her porch reading a book. Two blocks over, a group of kids is
          playing basketball in a driveway, and the sound of the ball
          on concrete carries in the quiet like a metronome. Central
          Avenue is a five-minute walk west, with its restaurants and
          bars and the energy of Northeast&apos;s ongoing reinvention,
          but here — on the residential blocks east of the avenue — the
          energy is different. Slower. More domestic. More like a
          neighborhood and less like a scene. Holland does not have a
          narrative. It has neighbors, and for the people who live here,
          that is enough.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/holland/hero.webp"
        alt="Quiet residential street in the Holland neighborhood of Northeast Minneapolis, with small homes and mature trees"
        caption="Holland — quiet blocks east of Central Avenue, where the neighborhood is the amenity"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Holland, Minneapolis?">
        <Prose>
          <p>
            Holland is a residential neighborhood in Northeast
            Minneapolis, roughly bounded by Lowry Avenue NE to the
            north, Stinson Boulevard and the Columbia Heights border to
            the east, 18th Avenue NE to the south, and Central Avenue
            NE to the west. Home to approximately 4,000 residents, it
            is one of the quietest and least well-known neighborhoods
            in Northeast — a place that defines itself by residential
            stability rather than commercial energy.
          </p>
          <p>
            The neighborhood&apos;s defining feature is its proximity
            to Central Avenue — Northeast&apos;s primary commercial
            corridor — without being on it. Holland sits just east of
            the avenue, close enough to walk to the restaurants, bars,
            and shops that have made Northeast one of Minneapolis&apos;s
            most dynamic commercial areas, but far enough to avoid the
            noise, traffic, and parking challenges that come with
            corridor-adjacent living. This position — accessible but
            insulated — is Holland&apos;s primary selling point and the
            reason many residents chose it over the more visible parts
            of Northeast.
          </p>
          <p>
            The housing stock is primarily bungalows and small frame
            houses from the 1910s through 1950s, built for the
            working-class families who settled Northeast. Prices are
            below the citywide median and well below the trendier
            Northeast neighborhoods, making Holland one of the more
            accessible options for homeownership in a quadrant of the
            city that has seen significant appreciation. The community
            is diverse — a mix of longtime residents, newer immigrant
            families, and young buyers attracted by the value — and the
            character is residential, family-oriented, and unpretentious
            in the way that only a neighborhood with nothing to prove
            can be.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Holland Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/holland/neighborhood-sign.webp"
          alt="Holland neighborhood sign in Minneapolis"
          caption="The Holland neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Holland History & Origins">
        <Prose>
          <p>
            The land that is now Holland is part of the ancestral
            homeland of the Dakota people, whose relationship to this
            land predates the city, the state, and the nation by
            millennia. The dispossession of Dakota lands through treaties
            and forced removal is the foundational history of every
            Minneapolis neighborhood, Holland included.
          </p>
          <p>
            Holland developed as part of the broader settlement of
            Northeast Minneapolis by Eastern European immigrants in the
            late 19th and early 20th centuries. The neighborhood was
            built out primarily between the 1910s and 1950s, with
            working-class families — many of Polish, Ukrainian, and
            Scandinavian descent — constructing modest homes on the
            standard Northeast grid. The neighborhood was named after
            Holland School, and its identity was always tied to the
            broader Northeast immigrant experience rather than to any
            single institution or landmark.
          </p>
          <p>
            Through the mid-20th century, Holland was a stable,
            working-class neighborhood where families stayed for
            generations. The pattern was familiar: buy a small house,
            raise your children, attend the neighborhood church, and
            maybe — if things went well — add a room to the house or
            finish the basement. The community was tight, the
            expectations were modest, and the neighborhood functioned
            with the quiet efficiency of a place where everyone knew
            their role.
          </p>
          <p>
            The late 20th and early 21st centuries brought gradual
            change. The original Eastern European families aged and
            their children moved to the suburbs. New residents — East
            African immigrants, Latino families, Southeast Asian
            communities — moved into the affordable housing stock and
            began building their own communities. Young professionals,
            drawn by Northeast&apos;s growing reputation and Holland&apos;s
            lower prices, added another layer. The result is the
            neighborhood that exists today: diverse, transitional, and
            still figuring out what it wants to be.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Holland">
        <Prose>
          <p>
            Living in Holland means living on blocks where the most
            dramatic event of the week might be a new paint color on
            a neighbor&apos;s house. The residential streets are quiet,
            the houses are modest, the yards are maintained with
            varying degrees of ambition, and the overall effect is a
            neighborhood that values stability over excitement. On a
            summer evening, the dominant sounds are lawn sprinklers,
            kids&apos; voices, and the distant bass of someone&apos;s
            backyard speaker. It is the kind of quiet that some people
            find boring and other people find essential.
          </p>
          <p>
            The proximity to Central Avenue gives Holland something
            that purely residential neighborhoods often lack — access
            to a vibrant commercial corridor without the costs of
            living directly on it. A five-to-ten-minute walk puts
            Holland residents on a street with Vietnamese restaurants,
            Mexican taquerias, craft breweries, coffee shops, and
            grocery stores. Then they walk home to a block where the
            biggest concern is whether the neighbor&apos;s lawn is
            getting too long. The combination is genuinely appealing
            and increasingly rare.
          </p>
          <p>
            The community is in transition but not in crisis. Longtime
            residents — elderly homeowners, families who have been here
            for decades — coexist with newer arrivals without dramatic
            friction. The diversity is real but understated — a Somali
            family here, a Latino family there, a young couple who
            moved from Uptown for the extra bedroom and the lower
            mortgage payment. The interactions are neighborly rather
            than ideological. People wave. They watch each other&apos;s
            houses. They shovel each other&apos;s sidewalks. It is not
            the kind of community that gets written about in think
            pieces, but it is the kind that holds a neighborhood
            together.
          </p>
        </Prose>
        <Quote
          text="I walk to Central Ave for dinner and then I walk home to a block that's so quiet I can hear the neighbor's sprinkler. That's the whole pitch for Holland. It's not complicated."
          cite="Holland resident"
        />

        <ImageSlot
          src="/images/neighborhoods/holland/residential-street.webp"
          alt="Tree-lined residential block in Holland, Northeast Minneapolis, with bungalows and trimmed lawns"
          caption="Holland — the kind of block where the quiet is a feature, not a bug"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Holland Food, Drink & Local Spots">
        <Prose>
          <p>
            Holland itself is primarily residential, with few commercial
            establishments within its boundaries. But Central Avenue —
            the neighborhood&apos;s western border — provides access
            to one of the most diverse food corridors in the Twin
            Cities, putting Holland residents within easy reach of
            Northeast&apos;s expanding dining scene.
          </p>
        </Prose>

        <ArticleSubsection title="Central Avenue Access">
          <PlaceCardComponent place={{ name: "Central Avenue NE", tag: "Northeast's Commercial Spine", price: "$–$$$", description: "Central Avenue, forming Holland's western boundary, is one of the most culturally diverse commercial corridors in the Twin Cities. Within easy walking distance of Holland, you'll find Vietnamese pho restaurants, Mexican taquerias, East African spots, craft breweries, cocktail bars, and a mix of longtime businesses and new arrivals. The avenue has been one of the biggest food stories in Minneapolis over the past decade, and Holland residents benefit from the proximity without bearing the costs of living directly on it." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Neighborhood Character">
          <Prose>
            <p>
              Within Holland&apos;s residential blocks, commercial
              options are minimal. There are no destination restaurants,
              no coffee shops, no bars within the neighborhood itself.
              This is the tradeoff: Holland&apos;s quiet residential
              character exists precisely because it is not a commercial
              area. Residents who want dining and nightlife walk to
              Central Avenue. Residents who want quiet stay home.
              Holland accommodates both preferences without pretending
              to be something it is not.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Holland">
        <Prose>
          <p>
            Holland has modest park space within its boundaries, with
            neighborhood parks providing playgrounds and green space
            for residents. The larger park amenities require a short
            trip by foot, bike, or car.
          </p>
        </Prose>

        <ArticleSubsection title="Holland Park">
          <Prose>
            <p>
              Holland Park, within the neighborhood, provides a
              community green space with a playground, playing fields,
              and a recreation area. It is a neighborhood park in the
              truest sense — not a destination but a daily amenity for
              families, dog walkers, and kids looking for a place to
              play after school.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Parks & Trails">
          <Prose>
            <p>
              Columbia Park and Golf Course is a short trip north.
              The Mississippi River trail system is accessible via{" "}
              <Link href="/neighborhoods/bottineau" className="text-[#2a9d8f] hover:underline">
                Bottineau
              </Link>
              {" "}to the west. The broader Northeast park system and
              the Grand Rounds trail network are accessible by bike,
              connecting Holland to the citywide trail system for
              recreation and commuting.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/holland/park.webp"
          alt="Holland Park in Northeast Minneapolis with playground and open green space"
          caption="Holland Park — a neighborhood park for everyday use"
        />
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Holland Schools">
        <Prose>
          <p>
            Holland is served by Minneapolis Public Schools. Nearby
            elementary options include Pillsbury Elementary and other
            Northeast schools. Northeast Middle School serves grades
            6–8, and Edison High School is the comprehensive high
            school for Northeast Minneapolis.
          </p>
          <p>
            Edison High School is one of the stronger high schools in
            the Minneapolis district, with a diverse student body,
            solid academic programs, and a range of extracurricular
            options. The school is a stabilizing presence in the
            Northeast community.
          </p>
          <p>
            Charter schools and the district&apos;s open enrollment
            system provide additional options. Families in Holland
            generally have access to the range of Northeast school
            options, which are considered among the stronger offerings
            within the Minneapolis Public Schools system.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Holland Real Estate & Housing">
        <Prose>
          <p>
            Holland offers some of the best value in Northeast
            Minneapolis. Median home sale prices ranged from roughly
            $240,000 to $330,000 in 2025 — below the citywide median
            and well below the prices in the more celebrated Northeast
            neighborhoods. For buyers who want a Northeast address
            near Central Avenue without paying the premium that
            proximity to the arts district or brewery corridor commands,
            Holland is the answer.
          </p>
          <p>
            The housing stock is primarily 1910s–1950s bungalows and
            frame houses — the same sturdy, modest homes found
            throughout Northeast, with character features like hardwood
            floors, built-in shelving, and deep front porches. At the
            lower end ($210,000–$270,000), homes need updating. The
            mid-range ($270,000–$340,000) gets a well-maintained
            three-bedroom home. Above $340,000, properties are
            typically renovated with modern systems and finishes.
          </p>
          <p>
            The rental market is affordable, with rents for one-bedroom
            apartments typically in the $900–$1,300 range. The
            neighborhood has seen some investor activity, but the pace
            of speculative buying is lower than in the more visible
            parts of Northeast.
          </p>
        </Prose>

        <Quote
          text="My realtor kept steering me to Waite Park and Audubon Park. I found Holland on my own. Same houses, same schools, same distance to Central Ave, ten percent cheaper. Sometimes the best deals are the ones nobody talks about."
          cite="Holland homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Holland">
        <Prose>
          <p>
            Holland earns a Walk Score of 62 and a Bike Score of 76.
            The proximity to Central Avenue provides walkable access
            to commercial options, and the flat Northeast grid makes
            cycling practical for daily errands and commuting.
          </p>
          <p>
            Metro Transit bus routes along Central Avenue provide
            frequent service to downtown Minneapolis, with ride
            times of approximately 25–30 minutes. Central Avenue is
            one of the better transit corridors in Northeast.
          </p>
          <p>
            Cycling to downtown is practical — approximately 4–5 miles
            via the Northeast grid or the river trail. The flat terrain
            and bike-friendly streets make Holland a comfortable
            neighborhood for cyclists.
          </p>
          <p>
            By car, downtown Minneapolis is 12–18 minutes. Columbia
            Heights is immediately east. MSP Airport is approximately
            20 minutes. Street parking is readily available on
            residential blocks.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Holland&apos;s tensions are gentler than in many
            Minneapolis neighborhoods, reflecting a place where
            change is arriving gradually rather than dramatically.
          </p>
        </Prose>

        <ArticleSubsection title="Price Pressure">
          <Prose>
            <p>
              As the trendier parts of Northeast have become more
              expensive, price pressure has pushed outward into
              neighborhoods like Holland. Home prices have risen
              steadily, and properties that were deeply affordable
              five years ago are now merely affordable. For longtime
              residents on fixed incomes, rising property taxes are
              a real concern. For renters, increasing rents are
              narrowing the options. The pace of change is slower
              here than in the neighborhoods closer to the arts
              district, but the direction is the same.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Identity Question">
          <Prose>
            <p>
              Holland has never had a strong brand identity — no
              signature institution, no landmark, no commercial strip
              to call its own. As the neighborhood changes, the
              question is what identity emerges. Will Holland become
              a more expensive version of its current self — still
              quiet, still residential, just pricier? Or will the
              arrival of new residents with different expectations
              change the character of the place? Most longtime
              residents are betting on continuity — that Holland&apos;s
              quiet residential character is durable enough to absorb
              change without being transformed by it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Desert">
          <Prose>
            <p>
              Holland&apos;s lack of commercial options within its
              boundaries is both a feature and a frustration. The
              quiet comes from the absence of commercial activity,
              but so does the inconvenience of driving or walking
              to Central Avenue for basic needs. Whether the
              neighborhood wants commercial development — and what
              kind — is a question that residents answer differently
              depending on what they value most: convenience or quiet.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Holland FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
