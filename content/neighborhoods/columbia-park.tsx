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
    title: "Columbia Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Columbia Park, Minneapolis — the park and golf course, Northeast residential, affordable housing, quiet blocks, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Columbia Park",
  deck: "A quiet residential neighborhood in Northeast Minneapolis where Columbia Park and its golf course anchor community life, the blocks are affordable and unpretentious, and the proximity to the river and the rest of Northeast gives you more than the modest price tag suggests.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Columbia Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Columbia Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Columbia Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,200", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$240K–$340K", label: "Median home sale price range (2025 data)" },
      { value: "1910s–1950s", label: "Era most homes were built" },
      { value: "34 acres", label: "Columbia Park and golf course" },
      { value: "1920", label: "Columbia Golf Course opened (approximate)" },
      { value: "12–18 min", label: "Drive to downtown Minneapolis" },
      { value: "60", label: "Walk Score" },
      { value: "75", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Columbia Park a good neighborhood in Minneapolis?",
      answer:
        "Columbia Park is a solid, affordable residential neighborhood in Northeast Minneapolis that offers good value for homebuyers. It has the namesake park and golf course, quiet residential blocks, proximity to the Mississippi River and North Minneapolis Regional Park, and access to the restaurants and culture of the broader Northeast corridor along Central Avenue. The neighborhood is less trendy and less expensive than the more celebrated parts of Northeast, which is both its challenge and its appeal. For families and buyers who want Northeast character without Northeast prices, Columbia Park is a strong option.",
    },
    {
      question: "Where is Columbia Park in Minneapolis?",
      answer:
        "Columbia Park is in the northern part of Northeast Minneapolis, roughly bounded by 37th Avenue NE and the city limits to the north, the Mississippi River and North Mississippi Regional Park to the west, Stinson Boulevard to the east, and Lowry Avenue NE to the south. It sits north of the Audubon Park and Northeast Park neighborhoods, and west of the suburb of Columbia Heights. The Mississippi River forms the western boundary, separating Columbia Park from the Camden community on the North Side.",
    },
    {
      question: "Is Columbia Park safe?",
      answer:
        "Columbia Park is generally one of the safer neighborhoods in Northeast Minneapolis, benefiting from its residential character and lower density. Crime rates are at or slightly above the citywide average, with property crime being the most common concern. The residential blocks are quiet, and the neighborhood's northern location gives it a calmer feel than the more commercial neighborhoods closer to downtown. Like all of Minneapolis, crime rose during 2020–2022 and has since declined.",
    },
    {
      question: "How much do homes cost in Columbia Park?",
      answer:
        "Median home sale prices in Columbia Park ranged from roughly $240,000 to $340,000 in 2025, below the citywide median and well below the prices in Northeast neighborhoods closer to downtown. Starter homes and fixer-uppers can be found in the $200,000–$270,000 range, while larger or updated homes can reach $350,000–$420,000. The neighborhood offers good value for buyers seeking Northeast Minneapolis character at more accessible prices.",
    },
    {
      question: "What is Columbia Golf Course?",
      answer:
        "Columbia Golf Course is a public 18-hole golf course operated by the Minneapolis Park and Recreation Board, located within Columbia Park. It is one of several public courses in the Minneapolis park system and offers affordable golf in an urban setting. The course is a community asset that attracts golfers from across the city and provides green space and open views within the neighborhood. In winter, the course is used for cross-country skiing and snowshoeing.",
    },
    {
      question: "What schools serve Columbia Park?",
      answer:
        "Columbia Park is served by Minneapolis Public Schools. Nearby elementary options include Pillsbury Elementary and other Northeast schools. Northeast Middle School serves grades 6–8, and Edison High School is the comprehensive high school for Northeast Minneapolis. Charter schools and the district's open enrollment system provide additional options. Edison High has a strong reputation within the district, known for its diverse student body and range of programming.",
    },
    {
      question: "Is Columbia Park near the Mississippi River?",
      answer:
        "Yes — the Mississippi River forms Columbia Park's western boundary. North Mississippi Regional Park provides access to the riverfront with walking and biking trails, picnic areas, and views of the river. The river trail connects south toward downtown Minneapolis and north toward the Coon Rapids Dam. The riverfront here is less developed and more natural than the downtown riverfront, with wooded banks and quiet stretches that feel surprisingly remote.",
    },
    {
      question: "How is Columbia Park different from other Northeast neighborhoods?",
      answer:
        "Columbia Park is quieter, more residential, and more affordable than the better-known Northeast neighborhoods like Logan Park, St. Anthony West, or the Central Avenue corridor. It lacks the breweries, art galleries, and restaurant scene that define the trendier parts of Northeast, but it also lacks the higher prices and the traffic that come with them. Columbia Park is Northeast at a lower volume — same underlying character, less intensity, more space, and significantly more affordable housing.",
    },
    {
      question: "Is Columbia Park gentrifying?",
      answer:
        "Columbia Park has seen some price appreciation as the broader Northeast Minneapolis area has become more popular, but gentrification here is much less pronounced than in neighborhoods closer to downtown. The neighborhood's northern location and limited commercial infrastructure have kept it out of the spotlight, and prices remain well below the Northeast median. Some longtime residents are concerned about rising prices, but the pace of change is slower here than in the more visible parts of Northeast.",
    },
  ],
  nearby: [
    { name: "Audubon Park", slug: "audubon-park", description: "South of Columbia Park, residential Northeast" },
    { name: "Waite Park", slug: "waite-park", description: "East, residential Northeast near Central Ave" },
    { name: "Northeast Park", slug: "northeast-park", description: "South, residential Northeast" },
    { name: "Marshall Terrace", slug: "marshall-terrace", description: "West across the river, small North Side neighborhood" },
    { name: "Bottineau", slug: "bottineau", description: "South, near river, historic Northeast" },
  ],
  closing: {
    title: "What Makes Columbia Park Worth Knowing",
    paragraphs: [
      "Columbia Park is the quiet version of Northeast Minneapolis — the neighborhood that doesn't make the lists, doesn't attract the food writers, and doesn't generate the real estate buzz that the Central Avenue and Arts District neighborhoods enjoy. What it does is provide a place where families can afford a house with a yard, walk to a park with a golf course, bike to the river, and access the restaurants and culture of the broader Northeast corridor without paying the premium that proximity to those things usually demands.",
      "The neighborhood's modesty is its most honest feature. There is no pretense here, no attempt to brand or market the experience of living on a quiet residential block in far Northeast Minneapolis. The houses are small. The yards are functional. The park is well-used. The community is diverse and aging and changing and holding on. It is not the most exciting neighborhood in Minneapolis, and it does not aspire to be. What it aspires to be is a good place to live — affordable, connected, and rooted in the ordinary rhythms of residential life. By that measure, it succeeds.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Wednesday evening in June, the Columbia Park golf course
          is populated by the kind of golfers who make public courses
          worth preserving — a father and son sharing a set of clubs, two
          women in their fifties taking their time on the par threes, a
          guy in work boots who came straight from a job site and is
          hitting his driver with the controlled violence of someone who
          needs this more than a driving range would understand. The
          course is short, flat, and perfectly adequate — a
          Minneapolis public links that has been here for more than a
          century, serving a neighborhood that has never been fashionable
          and has never needed to be. Beyond the fairways, the
          residential blocks of Columbia Park stretch east toward
          Columbia Heights — small houses, big trees, the kind of quiet
          that people in Uptown would pay twice as much to avoid.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/columbia-park/hero.webp"
        alt="Columbia Park and golf course in Northeast Minneapolis, with green fairways and residential neighborhood beyond"
        caption="Columbia Park — an 18-hole public golf course anchoring a quiet Northeast neighborhood"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Columbia Park, Minneapolis?">
        <Prose>
          <p>
            Columbia Park is a residential neighborhood in the northern
            part of Northeast Minneapolis, roughly bounded by the city
            limits and 37th Avenue NE to the north, Stinson Boulevard
            to the east, Lowry Avenue NE to the south, and the
            Mississippi River to the west. Home to approximately 3,200
            residents, it takes its name from Columbia Park and Golf
            Course — the neighborhood&apos;s central green space and
            defining feature.
          </p>
          <p>
            The neighborhood is quiet, residential, and unpretentious.
            The housing stock is primarily bungalows and small frame
            houses from the 1910s through 1950s, built for the working-
            class families — many of Eastern European descent — who
            settled Northeast Minneapolis when the area&apos;s industries
            were booming. Prices are below the citywide median and
            significantly below the more celebrated parts of Northeast,
            making Columbia Park one of the more accessible entry points
            for homeownership in a quadrant of the city that has seen
            significant appreciation in recent years.
          </p>
          <p>
            The Mississippi River runs along the western boundary,
            providing access to North Mississippi Regional Park and the
            river trail system. Central Avenue — Northeast&apos;s primary
            commercial corridor — is accessible to the south and east,
            connecting Columbia Park to the restaurants, bars, and shops
            that have made Northeast one of Minneapolis&apos;s most
            dynamic neighborhoods. Columbia Park residents get the
            benefits of Northeast&apos;s growing scene without living
            in the middle of it — a position that appeals to people who
            want access to culture and dining without the noise and
            traffic that come with it.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Columbia Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/columbia-park/neighborhood-sign.webp"
          alt="Columbia Park neighborhood sign in Minneapolis"
          caption="The Columbia Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Columbia Park History & Origins">
        <Prose>
          <p>
            The land that is now Columbia Park is part of the ancestral
            homeland of the Dakota people, for whom the Mississippi River
            and its tributaries were central to life and culture. The
            dispossession of Dakota lands through treaties and forced
            removal preceded all European-American settlement of this
            area.
          </p>
          <p>
            Northeast Minneapolis was settled primarily by Eastern
            European immigrants — Poles, Ukrainians, Slovaks, Czechs,
            and later Scandinavians — who came to work in the city&apos;s
            mills, breweries, and factories in the late 19th and early
            20th centuries. Columbia Park, at the northern edge of
            Northeast, developed somewhat later than the neighborhoods
            closer to downtown, with most homes built between the 1910s
            and 1950s as the city&apos;s residential grid extended
            northward.
          </p>
          <p>
            The park and golf course were established in the early 20th
            century as part of the Minneapolis park system&apos;s
            expansion, providing green space and recreation for the
            growing working-class population of Northeast. The golf
            course — one of several public courses in the system — has
            operated continuously for more than a century, serving
            generations of Northeast families who couldn&apos;t afford
            country club memberships but wanted to play the game.
          </p>
          <p>
            The neighborhood&apos;s demographics have shifted gradually.
            The Eastern European families who defined early Northeast
            have been joined by newer arrivals — East African immigrants,
            Latino families, and young professionals attracted by the
            area&apos;s affordability and proximity to the broader
            Northeast scene. The churches with Slavic names still stand
            on some corners, but the congregation is no longer entirely
            Polish or Ukrainian, and the neighborhood&apos;s identity
            is evolving from its ethnic roots into something more diverse
            and less easily categorized.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Columbia Park">
        <Prose>
          <p>
            Living in Columbia Park means living on blocks that look like
            they were photographed for a textbook on mid-20th-century
            urban America — modest houses, porch swings, detached garages,
            and the kind of neighborly familiarity that comes from people
            staying put. The pace is slower than in the neighborhoods
            closer to downtown. The streets are quieter. The most
            exciting thing happening on a Tuesday evening might be a
            foursome teeing off at the golf course or a family walking
            a dog along the river trail.
          </p>
          <p>
            The golf course gives the neighborhood something unusual —
            a significant expanse of open green space in the middle of
            the residential grid. Even if you don&apos;t play golf, the
            course provides views, walking space (in winter, when it
            doubles as a ski and snowshoe area), and the visual relief
            of looking out across fairways and mature trees rather than
            across another block of houses. The park grounds include
            playgrounds, playing fields, and a recreation center that
            anchors community programming.
          </p>
          <p>
            The community is in transition. Longtime Northeast families
            — many of them second- or third-generation residents whose
            grandparents came from Poland or Ukraine — are aging. Newer
            residents — younger, more diverse, drawn by affordability —
            are moving in. The interactions are generally positive but
            occasionally awkward, as they always are when a neighborhood&apos;s
            identity is shifting. The old-timers remember when every
            church had a polka band and every bar had a shot-and-beer
            special. The newcomers are more interested in craft beer and
            bike lanes. Columbia Park is big enough to hold both.
          </p>
          <p>
            Central Avenue — the commercial spine of Northeast — is
            accessible but not immediately adjacent. A short drive or
            bike ride south puts you in the thick of Northeast&apos;s
            restaurant and brewery scene. The river trail system is
            directly accessible from the neighborhood&apos;s western
            edge. The combination of quiet residential blocks, park
            space, river access, and proximity to Central Avenue gives
            Columbia Park a daily life that is more varied than its
            modest profile suggests.
          </p>
        </Prose>
        <Quote
          text="I bought in Columbia Park because I wanted Northeast without the Northeast prices. I can bike to Central Ave in ten minutes, walk to the river in five, and my mortgage is less than rent in Logan Park. The golf course is a bonus I didn't expect to care about, but I do."
          cite="Columbia Park homeowner"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Columbia Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Columbia Park&apos;s dining options within the neighborhood
            are limited — this is a residential area, not a commercial
            corridor. But the broader Northeast food scene is accessible,
            and the neighborhood benefits from its position in the
            city&apos;s most dynamic dining quadrant.
          </p>
        </Prose>

        <ArticleSubsection title="Local & Nearby">
          <PlaceCardComponent place={{ name: "Central Avenue Corridor", tag: "Northeast's Main Street", price: "$–$$$", description: "Central Avenue — Northeast Minneapolis's primary commercial corridor — runs south from the Columbia Park area and is accessible by a short drive or bike ride. The avenue has been transformed in recent years, with a diverse mix of restaurants, breweries, bars, and shops that reflect Northeast's multicultural identity. From Vietnamese pho to Mexican tacos to craft cocktails, the food scene on Central Avenue is one of the most varied and exciting in the city." }} />
          <PlaceCardComponent place={{ name: "Lowry Avenue NE Corridor", tag: "Neighborhood Commercial", price: "$–$$", description: "Lowry Avenue, at the neighborhood's southern edge, carries some commercial activity — small restaurants, convenience stores, and neighborhood businesses. Options are modest but serve the daily needs of the surrounding blocks." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Columbia Heights — the suburb immediately east — has
              additional commercial options including restaurants and
              grocery stores along Central Avenue NE as it continues
              north. The combination of Columbia Heights commercial and
              the Northeast Minneapolis food scene gives Columbia Park
              residents more dining access than the neighborhood itself
              would suggest.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Columbia Park">
        <Prose>
          <p>
            Columbia Park&apos;s outdoor amenities are strong — the
            namesake park, the golf course, and the Mississippi River
            combine to give the neighborhood green space and trail access
            that exceed what its modest profile suggests.
          </p>
        </Prose>

        <ArticleSubsection title="Columbia Park & Golf Course">
          <Prose>
            <p>
              Columbia Park is the neighborhood&apos;s central green space
              — a 34-acre park that includes the Columbia Golf Course
              (an 18-hole public course), playgrounds, playing fields,
              and a recreation center. The golf course is one of the
              most affordable public courses in the metro, and in winter
              it converts to cross-country skiing and snowshoeing terrain.
              The park grounds host community events, youth sports, and
              the everyday rhythms of neighborhood life — kids on the
              playground, families at the picnic tables, dog walkers on
              the paths.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="North Mississippi Regional Park">
          <Prose>
            <p>
              The Mississippi River runs along Columbia Park&apos;s
              western boundary, and North Mississippi Regional Park
              provides access to the riverfront with walking and biking
              trails. The river trail connects south through the city
              toward downtown, the Stone Arch Bridge, and Minnehaha
              Falls, and north toward the Coon Rapids Dam. The riverfront
              here is wooded and relatively undeveloped — a quieter
              stretch of river than the downtown gorge or the South
              Minneapolis parkways.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Columbia Park Schools">
        <Prose>
          <p>
            Columbia Park is served by Minneapolis Public Schools.
            Pillsbury Elementary and other nearby Northeast schools serve
            elementary students. Northeast Middle School covers grades
            6–8, and Edison High School is the comprehensive high school
            for Northeast Minneapolis.
          </p>
          <p>
            Edison High School has a strong reputation within the
            Minneapolis school district, known for its diverse student
            body, range of academic and vocational programs, and
            community connections. The school serves students from across
            Northeast and has been a stabilizing institution for the
            area.
          </p>
          <p>
            Charter schools and the district&apos;s open enrollment
            system provide additional options. The school landscape in
            Northeast is generally regarded as one of the stronger
            options within Minneapolis Public Schools, though individual
            outcomes vary and families should research specific programs
            and schools.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Columbia Park Real Estate & Housing">
        <Prose>
          <p>
            Columbia Park is one of the more affordable neighborhoods in
            Northeast Minneapolis. Median home sale prices ranged from
            roughly $240,000 to $340,000 in 2025 — below the citywide
            median and well below the prices in the more celebrated
            Northeast neighborhoods closer to downtown. The price gap
            between Columbia Park and neighborhoods like{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>
            {" "}or{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            {" "}reflects the difference between being in the middle of
            Northeast&apos;s scene and being at its quieter, more
            residential northern edge.
          </p>
          <p>
            The housing stock is primarily 1910s–1950s bungalows and
            frame houses — sturdy, modest homes on standard Northeast
            lots. At the lower end ($200,000–$270,000), homes typically
            need updating. The mid-range ($270,000–$350,000) gets a
            well-maintained three-bedroom home. Above $350,000,
            properties are typically renovated with modern finishes.
          </p>
          <p>
            The rental market is active, with a mix of older apartment
            buildings and single-family rentals at rents that are
            affordable by Minneapolis standards. The neighborhood has
            seen some investor activity, but gentrification pressure is
            lower than in the more visible parts of Northeast.
          </p>
        </Prose>

        <Quote
          text="People chase the hottest parts of Northeast and pay through the nose. Columbia Park is three miles north and forty percent cheaper. Same city, same parks system, same access to Central Ave. Just less hype."
          cite="Columbia Park homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Columbia Park">
        <Prose>
          <p>
            Columbia Park earns a Walk Score of 60 and a Bike Score of
            75. The neighborhood is moderately walkable for daily needs,
            with some commercial options along Lowry and Central Avenues,
            and has good cycling infrastructure connecting to the broader
            Northeast and river trail systems.
          </p>
          <p>
            Metro Transit bus routes serve the area along Central Avenue
            and Lowry Avenue, providing connections to downtown
            Minneapolis with ride times of approximately 25–35 minutes.
            Central Avenue is one of the better-served transit corridors
            in Northeast.
          </p>
          <p>
            Cycling to downtown is practical — the river trail provides
            a scenic route south, and the Northeast grid offers
            relatively flat, bike-friendly streets. The ride to downtown
            is approximately 4–5 miles.
          </p>
          <p>
            By car, downtown Minneapolis is 12–18 minutes. Columbia
            Heights is immediately east. MSP Airport is approximately
            20–25 minutes. Street parking is generally available without
            difficulty.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Columbia Park&apos;s tensions are gentler than in many
            Minneapolis neighborhoods, but the forces of change are
            present and accelerating.
          </p>
        </Prose>

        <ArticleSubsection title="Northeast's Ripple Effect">
          <Prose>
            <p>
              As the trendier parts of Northeast — the arts district,
              Central Avenue, the brewery corridor — have become more
              expensive, buyers and renters have pushed outward into
              neighborhoods like Columbia Park. This brings new
              investment and new energy, but it also raises prices and
              changes the community&apos;s character. Longtime residents
              who bought their homes decades ago for modest prices
              are seeing property values rise, which is good for their
              equity but changes the neighborhood around them. New
              arrivals bring different expectations — about commercial
              amenities, about housing quality, about neighborhood
              identity — that don&apos;t always align with what
              existing residents value.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Generational Change">
          <Prose>
            <p>
              The original Eastern European families who built Northeast
              are aging out. Their children and grandchildren have
              largely moved to the suburbs, and the houses they leave
              behind are being bought by a more diverse set of new
              residents. This generational transition is natural and
              inevitable, but it changes the texture of a neighborhood
              that was defined for decades by a specific cultural
              identity. The churches, the social clubs, the family
              networks — these institutions are thinning, and what
              replaces them is still taking shape.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Golf Course Future">
          <Prose>
            <p>
              The future of the Columbia Golf Course — like all
              Minneapolis public golf courses — is periodically
              debated. Urban golf courses represent a significant land
              use in a city that needs housing, parks, and green space
              in different proportions than when the courses were built.
              The Minneapolis Park Board has not proposed closing
              Columbia, but the broader conversation about how to use
              public land in a growing city means that the course&apos;s
              long-term future is not guaranteed. For residents who
              value the open space and the community asset, this
              conversation is watched closely.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Columbia Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
