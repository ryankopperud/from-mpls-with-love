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
    title: "St. Anthony West, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about St. Anthony West, Minneapolis — the historic riverfront neighborhood where Minnesota began, cobblestone streets meet the Stone Arch Bridge, Main Street SE hosts Aster Cafe and Jax Cafe, Nicollet Island floats in the Mississippi, and old-world charm collides with new development in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "St. Anthony West",
  deck: "Where Minnesota literally started — the city of St. Anthony was the first incorporated city in the state, built on the power of the only major waterfall on the Mississippi, and this neighborhood carries that history in its cobblestone streets, its limestone buildings, its views of the Stone Arch Bridge and downtown skyline from Merriam Street, and a Main Street SE corridor where Jax Cafe has been serving steaks since 1933 and Aster Cafe glows against the river on a winter night.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is St. Anthony West?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in St. Anthony" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "St. Anthony West, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$320K–$500K", label: "Median home sale price (2025 data)" },
      { value: "$1,200–$1,700", label: "Typical 1BR apartment rent (2025)" },
      { value: "80", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
      { value: "62", label: "Transit Score" },
      { value: "1849", label: "Year the city of St. Anthony was founded" },
      { value: "1872", label: "Year St. Anthony merged with Minneapolis" },
    ],
  },
  faq: [
    {
      question: "Is St. Anthony West a good neighborhood in Minneapolis?",
      answer:
        "St. Anthony West is one of the most appealing neighborhoods in Minneapolis for people who want historic character, riverfront access, walkable dining and shopping, and proximity to downtown without living in it. The cobblestone streets, limestone buildings, views of the Stone Arch Bridge, and Main Street SE corridor give it a sense of place that few Minneapolis neighborhoods can match. It's increasingly popular with young families, professionals, and empty-nesters who value charm over square footage. The trade-off is rising prices and ongoing tension between historic preservation and new development — but if you can afford it, the quality of life here is hard to beat.",
    },
    {
      question: "Is St. Anthony West, Minneapolis safe?",
      answer:
        "St. Anthony West is generally considered safe by Minneapolis standards. The neighborhood benefits from steady foot traffic along Main Street SE and the riverfront trails, which provides natural surveillance. Property crime — package theft, car break-ins, occasional bike theft — occurs at rates comparable to other urban Minneapolis neighborhoods. The proximity to downtown means some spillover issues, particularly along Hennepin Avenue and near the transit corridors. Violent crime rates are below the city average. As with any urban neighborhood, standard precautions apply: lock your bike, be aware of your surroundings at night, and don't leave valuables visible in your car.",
    },
    {
      question: "What is the difference between St. Anthony East and St. Anthony West?",
      answer:
        "St. Anthony East and St. Anthony West are officially separate Minneapolis neighborhoods divided roughly by Central Avenue NE. In practice, many residents and real estate listings refer to the combined area simply as 'St. Anthony' or the 'St. Anthony Main' area. St. Anthony West — closer to the river, Nicollet Island, and Main Street SE — has more of the historic, walkable, riverfront character that people associate with the name. St. Anthony East is more residential and quieter, blending into the broader Northeast Minneapolis fabric. This guide covers both, because the history, identity, and daily life of the area don't respect the administrative boundary.",
    },
    {
      question: "What is St. Anthony Main?",
      answer:
        "St. Anthony Main is a mixed-use development along Main Street SE on the east bank of the Mississippi River. It includes the St. Anthony Main Theatre (a beloved independent cinema), restaurants, shops, and residential units built into and around historic buildings. The cobblestone streets and river views make it one of the most atmospheric commercial areas in Minneapolis. It's the commercial heart of the neighborhood and a popular destination for visitors, though locals sometimes note that the retail mix has shifted over the years from independent shops to more restaurants and entertainment venues.",
    },
    {
      question: "Can you walk to downtown Minneapolis from St. Anthony West?",
      answer:
        "Yes, and it's one of the best walks in the city. The Stone Arch Bridge — a converted railroad bridge that crosses the Mississippi near St. Anthony Falls — connects the east bank directly to the Mill District and downtown. The walk is roughly 15-20 minutes to the center of downtown, and the views of the falls, the river, and the skyline are spectacular. Many St. Anthony residents consider this pedestrian connection to downtown one of the neighborhood's greatest assets. You can also cross via the Hennepin Avenue Bridge or the Third Avenue Bridge.",
    },
    {
      question: "What is Nicollet Island?",
      answer:
        "Nicollet Island is a small island in the Mississippi River immediately adjacent to St. Anthony West, connected by bridges at both ends. It's one of the most unusual residential addresses in Minneapolis — a handful of Victorian-era houses, the Nicollet Island Inn (a boutique hotel and restaurant in a converted door-and-sash factory), the Nicollet Island Pavilion (an event venue), and parkland managed by the Minneapolis Park Board. The island has a dreamy, time-displaced quality — walking its paths feels like stepping out of the city while remaining technically in it. It's part of the St. Anthony Falls Historic District and is listed on the National Register of Historic Places.",
    },
    {
      question: "How much does it cost to live in St. Anthony West?",
      answer:
        "St. Anthony West has become one of the pricier neighborhoods in Northeast Minneapolis. Single-family homes — a mix of renovated historic houses and newer construction — sell in the $320,000 to $500,000 range, with exceptional properties (riverfront, historic significance, recent renovation) pushing well above $500,000. Condos range from $200,000 to $450,000 depending on the building and river views. One-bedroom apartments rent for roughly $1,200 to $1,700 per month. The neighborhood is more expensive than most of Northeast Minneapolis but less expensive than the North Loop or the lakes neighborhoods in Southwest Minneapolis. Prices have risen significantly over the past decade as the area's historic charm and riverfront access have drawn more demand.",
    },
    {
      question: "What restaurants are in St. Anthony West?",
      answer:
        "The Main Street SE corridor anchors the dining scene. Jax Cafe (since 1933) is a white-tablecloth steakhouse with a trout pond in the backyard where diners can catch their own fish — a Minneapolis institution. Aster Cafe, in a historic building overlooking the river, serves brunch and dinner with one of the most romantic patios in the city. Nya serves modern Nordic-inspired cuisine. Marla's Caribbean brings island flavors to the riverfront. Kramarczuk's East European Sausage — technically on East Hennepin — has been making kielbasa and pierogi since 1954. The neighborhood also has strong coffee options and several bars ranging from craft cocktail to casual dive.",
    },
    {
      question: "Is St. Anthony West walkable?",
      answer:
        "Very walkable for Minneapolis. The Walk Score of approximately 80 reflects a neighborhood where most daily needs — groceries, dining, coffee, transit — are accessible on foot. Main Street SE and East Hennepin Avenue provide walkable commercial corridors, and the riverfront trail system adds extensive pedestrian infrastructure. The Bike Score of 90 is even more telling: the neighborhood's flat terrain, trail connections, and proximity to downtown make cycling the ideal mode of transportation. The Stone Arch Bridge provides a dedicated pedestrian and bicycle connection to downtown that is both practical and beautiful.",
    },
    {
      question: "What is the Stone Arch Bridge?",
      answer:
        "The Stone Arch Bridge is a former railroad bridge spanning the Mississippi River near St. Anthony Falls, now converted to pedestrian and bicycle use. Built in 1883 by railroad baron James J. Hill, it is one of only two stone arch bridges on the entire Mississippi River and is a National Historic Civil Engineering Landmark. The bridge connects St. Anthony West to the Mill District and downtown Minneapolis, offering some of the most iconic views in the city — the falls, the ruins of the old flour mills, the downtown skyline, and the river corridor. It is arguably the single most photographed location in Minneapolis and one of the neighborhood's defining features.",
    },
    {
      question: "Is St. Anthony West gentrifying?",
      answer:
        "St. Anthony West's gentrification story is different from many Minneapolis neighborhoods because the area has been desirable for decades — it never experienced the deep disinvestment that neighborhoods like Logan Park or parts of North Minneapolis did. What's happening now is better described as intensification: new condo and apartment developments replacing older structures, higher-end restaurants and retail replacing working-class businesses, and rising prices pushing out moderate-income residents. The historic housing stock is increasingly unaffordable for first-time buyers, and new construction skews toward luxury. The tension is less about 'who was here first' and more about whether the neighborhood can maintain economic diversity as its cachet increases.",
    },
  ],
  nearby: [
    { name: "Logan Park", slug: "logan-park", description: "The creative heart of Nordeast and home to Art-A-Whirl" },
    { name: "Nicollet Island - East Bank", slug: "nicollet-island-east-bank", description: "Island living and the Hennepin Avenue bridge to downtown" },
    { name: "Marcy Holmes", slug: "marcy-holmes", description: "University-adjacent with Dinkytown energy south of the river" },
    { name: "Sheridan", slug: "sheridan", description: "Residential Nordeast with Dangerous Man and the Lowry corridor" },
    { name: "Downtown West", slug: "downtown-west", description: "The urban core across the Stone Arch Bridge" },
    { name: "Holland", slug: "holland", description: "Working-class Nordeast east of Central Avenue" },
  ],
  closing: {
    title: "What Makes St. Anthony West Irreplaceable",
    paragraphs: [
      "Most Minneapolis neighborhoods have a story they tell about themselves. St. Anthony West has a story that belongs to the entire state. This is where it started — literally. The falls that powered the mills that built the city that became the flour capital of the world are right here, visible from the cobblestone streets where the city of St. Anthony stood before Minneapolis existed. That history is not an abstraction in this neighborhood. It is in the limestone walls of the buildings on Main Street, in the curves of the Stone Arch Bridge, in the Victorian houses on Nicollet Island, in the name itself. You can stand on the Merriam Street overlook and see the falls, the bridge, the skyline, and the river all at once, and understand in a single glance why people built a city here.",
      "What makes St. Anthony West worth caring about is that it has managed — so far — to carry that history into the present without embalming it. Jax Cafe has been serving steaks since 1933 and shows no signs of stopping. Kramarczuk&apos;s still makes kielbasa the way Wasyl and Anna made it in 1954. The Stone Arch Bridge, built for trains in 1883, carries bicycles and pedestrians now, and the view from its midpoint at sunset is still the best free experience in Minneapolis. New restaurants and new buildings have arrived, and not all of them honor what was here before — but the bones of the neighborhood, the riverfront, the falls, the history embedded in the ground itself, are not the kind of thing a developer can erase. The question for St. Anthony West is not whether it will survive. It is whether it will remember what it is. Walk the cobblestones along the river on a quiet evening, listen to the falls, and you will understand that some places carry their meaning in the stone.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Stand on Merriam Street on a clear evening and look west. The Stone
          Arch Bridge curves across the Mississippi in a long, graceful arc of
          limestone and granite. Beyond it, the Minneapolis skyline rises above
          the ruins of the old flour mills. Below, St. Anthony Falls — the only
          major waterfall on the entire Mississippi River — churns through the
          lock and dam system that replaced the natural cataract a century ago.
          This view is on postcards. It is on Instagram. It has been painted and
          photographed and described so many times that it risks feeling like a
          cliche. But stand there yourself, with the sound of the falls and the
          light going gold on the bridge stones, and you will understand that
          some things are famous because they deserve to be. This is where
          Minnesota started. Not metaphorically. The city of St. Anthony,
          founded in 1849, was the first incorporated city in the state,
          built on the power of these falls, and the neighborhood that carries
          its name still feels like the beginning of something.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/st-anthony-west/hero.webp"
        alt="The Stone Arch Bridge and St. Anthony Falls as seen from the east bank riverfront in St. Anthony West, Minneapolis"
        caption="St. Anthony West — where the Stone Arch Bridge, St. Anthony Falls, and the Minneapolis skyline converge"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is St. Anthony West, Minneapolis?">
        <Prose>
          <p>
            St. Anthony West sits on the east bank of the Mississippi River in
            Northeast Minneapolis, roughly bounded by the river to the west and
            south, Broadway Street NE to the north, and Central Avenue NE to the
            east. Its sibling, St. Anthony East, extends farther east beyond
            Central Avenue, and while the two are officially separate
            neighborhoods, they share a history, an identity, and a daily life
            that makes the boundary largely invisible to the people who live
            here. This guide treats them as one, because they are.
          </p>
          <p>
            With approximately 4,500 residents across both neighborhoods, St.
            Anthony is mid-sized by Minneapolis standards — large enough to
            sustain a commercial corridor and a distinct identity, small enough
            that regulars at Jax Cafe recognize each other. The neighborhood&apos;s
            defining feature is its relationship with the Mississippi River and
            St. Anthony Falls. This is not a neighborhood that happens to be
            near water. It exists because of the water. The falls powered the
            sawmills and flour mills that built Minneapolis into a major American
            city, and the east bank — the St. Anthony side — was where the story
            began, years before the west bank settlement of Minneapolis
            overtook and eventually absorbed it.
          </p>
          <p>
            Today, St. Anthony West is a neighborhood of layers: historic
            limestone buildings alongside modern condos, cobblestone streets next
            to busy arterials, Nicollet Island floating in the river like a
            Victorian fever dream, and Main Street SE offering one of the most
            atmospheric commercial corridors in the city. It is increasingly
            popular with young families priced out of the southwest Minneapolis
            lake neighborhoods, with professionals who want to walk to downtown
            across the Stone Arch Bridge, and with anyone who values the feeling
            of living somewhere that matters — somewhere with a past thick
            enough to press against the present.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="St. Anthony West Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/st-anthony-west/neighborhood-sign.webp"
          alt="St. Anthony West neighborhood sign in Northeast Minneapolis"
          caption="The St. Anthony West neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="St. Anthony History & Origins">
        <Prose>
          <p>
            The land along St. Anthony Falls is the ancestral homeland of the
            Dakota people — specifically the Mdewakanton band, for whom the
            falls, called Owamniyomni (&ldquo;whirlpool&rdquo;), held deep
            spiritual significance. The falls were a sacred site, a gathering
            place, and a center of trade and sustenance long before any European
            set eyes on them. Father Louis Hennepin, a Franciscan friar
            traveling with a French expedition, saw the falls in 1680 and
            named them after St. Anthony of Padua — an act of colonial
            renaming that erased the Dakota name from European maps but not from
            Dakota memory. The falls were, and remain, one of the most
            significant natural features on the entire Mississippi River: the
            only major waterfall along its 2,340-mile course.
          </p>
          <p>
            The power of those falls drew the first permanent European-American
            settlement in what would become Minnesota. In 1838, Franklin Steele
            claimed land on the east bank of the river, adjacent to Fort
            Snelling&apos;s military reservation, and by the late 1840s a village
            had formed around the sawmills and lumber operations that harnessed
            the falls&apos; energy. In 1849, the same year Minnesota became a
            territory, the village incorporated as the city of St. Anthony —
            the first incorporated city in Minnesota. This was not a suburb or a
            satellite. For its first two decades, St. Anthony was the city. The
            settlement on the west bank of the river, which would become
            Minneapolis, came later and grew in St. Anthony&apos;s shadow before
            eventually surpassing it.
          </p>
          <p>
            The two cities merged in 1872, and St. Anthony became a
            neighborhood rather than an independent municipality. But the
            merger was not a willing absorption — it was a pragmatic
            acknowledgment that two cities sharing a waterfall and a river was
            inefficient. St. Anthony residents, many of whom had arrived first
            and built first, harbored a quiet resentment about being swallowed
            by their younger, larger neighbor. That resentment faded with time,
            but the neighborhood&apos;s sense of prior claim — of being the
            original, the beginning — has never entirely disappeared. You can
            still hear it in the way longtime residents talk about their
            neighborhood: not as a part of Minneapolis, but as the place
            Minneapolis grew out of.
          </p>
          <p>
            Through the late 19th and early 20th centuries, the neighborhood
            evolved alongside the milling industry. The great flour mills —
            Pillsbury, Washburn-Crosby (later General Mills) — clustered around
            the falls, and the workers who ran them lived in the surrounding
            blocks. The east bank developed a mix of modest frame houses for
            mill workers, grander homes for mill managers and merchants along
            the bluffs, and commercial buildings along Main Street that served
            the daily needs of a working community. The architecture of this era
            — limestone foundations, brick facades, the heavy solidity of
            buildings designed to last — gives St. Anthony West its distinctive
            visual character today.
          </p>
          <p>
            The milling industry declined through the mid-20th century, and
            the neighborhood experienced the disinvestment common to urban
            industrial areas across America. The falls, once the economic engine
            of the entire Upper Midwest, became almost an afterthought — the
            lock and dam system controlled the water, the mills closed or moved,
            and the riverfront was treated more as infrastructure than as
            civic space. The revitalization began in the 1970s and 1980s, when
            the St. Anthony Main development transformed a stretch of riverfront
            industrial buildings into a mixed-use commercial and residential
            district. The Stone Arch Bridge, decommissioned by the railroad in
            1978, was converted to pedestrian and bicycle use in 1994, creating
            the connection to downtown that is now one of the neighborhood&apos;s
            defining features. The St. Anthony Falls Heritage Trail, the Mill
            Ruins Park, and the designation of the St. Anthony Falls Historic
            District followed, embedding the neighborhood&apos;s history into its
            physical infrastructure in a way that few American neighborhoods
            have managed.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in St. Anthony">
        <Prose>
          <p>
            Living in St. Anthony West means living with history pressing
            against you from every direction — and not in the sterile,
            museum-placard way that some historic neighborhoods achieve. The
            cobblestone streets along the riverfront are actual cobblestones,
            rough under your feet, not decorative pavers installed to evoke a
            feeling. The limestone buildings on Main Street were built to house
            businesses that served mill workers, not to be charming — the charm
            is a byproduct of durability and age. The falls are audible from
            certain vantage points, a low roar underneath the city noise that
            you stop noticing until a visitor points it out. This is a
            neighborhood where the past is not preserved behind glass. It is the
            ground you walk on.
          </p>
          <p>
            The residential mix has shifted significantly over the past two
            decades. The neighborhood was historically working-class and
            middle-class — mill workers, tradespeople, small business owners,
            the kind of people who built solid houses on modest lots and stayed
            for generations. That population is still here, particularly in St.
            Anthony East and on the quieter residential blocks north of Main
            Street. But increasingly, St. Anthony West is attracting a different
            demographic: young professionals who work downtown and walk or bike
            across the Stone Arch Bridge, couples who want riverfront living
            without North Loop prices, young families who were priced out of
            Linden Hills or Lynnhurst but still want character and good schools,
            and empty-nesters downsizing from the suburbs who want culture,
            restaurants, and walkability.
          </p>
          <p>
            The result is a neighborhood that feels more economically diverse
            than it probably is. A renovated 1890s Victorian sits next to a
            2020s condo building. A retired machinist who has lived on the same
            block for forty years waves to a software engineer who moved in last
            spring. Kramarczuk&apos;s still sells kielbasa by the pound to
            customers who have been coming since the Eisenhower administration,
            while Aster Cafe pours natural wine to a crowd that discovered the
            neighborhood on a &ldquo;best brunch in Minneapolis&rdquo; list. These
            layers coexist, sometimes uncomfortably, but the neighborhood&apos;s
            physical beauty and historical weight give it a gravitational
            pull that holds things together even as the demographics shift.
          </p>
          <p>
            Nicollet Island, floating in the river between the east and west
            banks, deserves special mention because it is one of the most
            unusual residential experiences in Minneapolis. The island has a
            small cluster of Victorian-era houses — some of the oldest surviving
            residential structures in the city — along with the Nicollet Island
            Inn, a park, and walking paths that feel improbably rural given
            their location in the center of a major city. Living on Nicollet
            Island is like living in a 19th century painting that someone forgot
            to take down. The houses rarely come on the market, and when they
            do, they sell quickly to buyers who understand that some addresses
            are irreplaceable.
          </p>
        </Prose>

        <Quote
          text="I moved to St. Anthony because I wanted to walk to work downtown, and I stayed because of the view from my kitchen window. Every morning I see the Stone Arch Bridge and the falls. I've lived in five cities, and nothing compares to waking up to that."
          cite="St. Anthony West resident"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="St. Anthony Food, Drink & Local Spots">
        <Prose>
          <p>
            The dining scene in St. Anthony is anchored by Main Street SE and
            East Hennepin Avenue — two corridors that together offer a range
            spanning nearly a century, from a steakhouse that has been open
            since Franklin Roosevelt&apos;s first term to restaurants that opened
            last year. This is not a neighborhood with an overwhelming number
            of options — it is not Uptown or the North Loop — but what it has
            tends to be distinctive, rooted in the neighborhood&apos;s character,
            and benefiting from the kind of setting (riverfront, cobblestones,
            historic buildings) that most restaurants can only dream of.
          </p>
        </Prose>

        <ArticleSubsection title="Main Street Anchors">
          <PlaceCardComponent place={{ name: "Jax Cafe", tag: "Steakhouse / American", price: "$$$", description: "1928 University Ave. NE. Jax has been serving steaks in St. Anthony since 1933, making it one of the oldest restaurants in Minneapolis. The wood-paneled dining room, the white tablecloths, the trout pond in the backyard where you can literally catch your own dinner — Jax is a Minneapolis institution that has somehow resisted both closure and ironic reinvention. The steaks are excellent. The walleye is excellent. The experience of sitting in a room that has been serving the same neighborhood for ninety years is something no new restaurant can replicate." }} />
          <PlaceCardComponent place={{ name: "Aster Cafe", tag: "American / Brunch / Wine Bar", price: "$$–$$$", description: "125 Main St. SE. Occupying a historic building directly on the riverfront, Aster Cafe is the neighborhood's most romantic dining destination. The patio — overlooking the river, the Stone Arch Bridge, and the downtown skyline — is one of the best outdoor dining experiences in Minneapolis. The food leans seasonal and locally sourced. The brunch is justifiably famous. The wine list is thoughtful. Aster is the kind of restaurant that makes you understand why people fall in love with this neighborhood." }} />
          <PlaceCardComponent place={{ name: "Nya", tag: "Nordic-Inspired / New American", price: "$$$", description: "Main Street SE. A newer addition to the St. Anthony dining scene, Nya brings a modern Nordic sensibility to the riverfront — clean flavors, seasonal ingredients, and a design-forward space that nods to the neighborhood's Scandinavian heritage without being kitschy about it. The tasting menu format is a departure from the neighborhood's more casual offerings and signals the area's continuing evolution upmarket." }} />
          <PlaceCardComponent place={{ name: "Marla's Caribbean Cuisine", tag: "Caribbean", price: "$–$$", description: "Bringing jerk chicken, oxtail, rice and peas, and island warmth to a neighborhood better known for Scandinavian and Eastern European flavors. Marla's is a welcome counterpoint to the neighborhood's predominantly European culinary identity — proof that St. Anthony's food scene is evolving beyond its historical roots while maintaining the warmth and personality that a good neighborhood restaurant requires." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Nordeast Institutions">
          <PlaceCardComponent place={{ name: "Kramarczuk's East European Sausage", tag: "Eastern European / Deli", price: "$–$$", description: "215 E. Hennepin Ave. Kramarczuk's has been making kielbasa, bratwurst, pierogi, and Eastern European deli meats since 1954, when Ukrainian immigrants Wasyl and Anna Kramarczuk opened their sausage shop. The bakery counter sells poppy seed rolls and kolachi. The deli case is a cathedral of cured meat. Kramarczuk's is spiritually the center of Nordeast food culture, even if the address technically sits on the edge of St. Anthony West. If you eat one thing in this neighborhood, eat a plate of pierogi at the counter and think about the generations of hands that shaped them." }} />
          <PlaceCardComponent place={{ name: "Surdyk's", tag: "Liquor Store / Cheese Shop", price: "$$", description: "303 E. Hennepin Ave. A legendary liquor store and cheese shop operating since 1934. The wine and spirits selection is one of the best in the Twin Cities. The cheese counter could sustain a European picnic. The staff knows what they're talking about and will steer you toward something interesting without being pretentious about it. Surdyk's is the kind of independent retailer that most American cities have lost entirely, and its survival here says something about the neighborhood's commitment to quality over convenience." }} />
        </ArticleSubsection>

        <ArticleSubsection title="St. Anthony Main Theatre & Entertainment">
          <Prose>
            <p>
              The St. Anthony Main Theatre is a small independent cinema in the
              St. Anthony Main complex that screens a mix of independent,
              foreign, and art-house films alongside select mainstream releases.
              In a city where independent cinemas are an endangered species, St.
              Anthony Main Theatre is a cultural lifeline — the kind of place
              where you can see a film that never played at the megaplex, in a
              setting that still feels like going to the movies should feel.
              The theater&apos;s location, surrounded by restaurants and the
              riverfront, makes it easy to build an evening around a screening:
              dinner at Aster, a film, a walk along the river. That sequence is
              one of the best nights out Minneapolis has to offer.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Coffee & Drinks">
          <Prose>
            <p>
              Coffee culture in St. Anthony leans toward the independent and
              considered. Several cafes along Main Street and East Hennepin
              serve as neighborhood living rooms during morning hours — places
              where remote workers and retirees and new parents converge over
              pour-overs and pastries. For evening drinks, the options range
              from the craft cocktail programs at the newer restaurants to the
              more casual bars along East Hennepin Avenue. Surdyk&apos;s, in
              addition to its retail operation, has a bar and event space that
              hosts tastings and wine dinners. The neighborhood&apos;s drinking
              culture is less brewery-focused than adjacent{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>
              , leaning more toward wine and cocktails — a reflection of the
              slightly different demographic and the influence of the restaurant
              scene along Main Street.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, River & Outdoors in St. Anthony">
        <Prose>
          <p>
            St. Anthony West is, first and foremost, a riverfront neighborhood.
            The Mississippi River is not a backdrop here — it is the reason the
            neighborhood exists, the source of its history, and the organizing
            principle of its outdoor life. The trail system, the parks, the
            bridges, the falls — everything connects back to the river, and
            residents who choose St. Anthony over other Minneapolis
            neighborhoods almost always cite the water as a primary reason.
          </p>
        </Prose>

        <ArticleSubsection title="The Riverfront Trail System">
          <Prose>
            <p>
              The east bank riverfront trail runs through St. Anthony West as
              part of the Grand Rounds National Scenic Byway — Minneapolis&apos;s
              interconnected park and trail system that is one of the finest
              urban park networks in the country. The paved trail along the
              river provides dedicated space for walking, running, and biking,
              with views of the falls, the Stone Arch Bridge, downtown, and
              Nicollet Island that are genuinely world-class. This is not
              an exaggeration: the stretch of riverfront trail through St.
              Anthony West is one of the most scenic urban trails in the
              United States.
            </p>
            <p>
              The trail connects south to the Mill Ruins Park and the Mill
              City Museum area, across the Stone Arch Bridge to the west bank,
              and north along the river toward the Columbia Heights and Fridley
              stretches. For runners and cyclists, the loop that crosses the
              Stone Arch Bridge, runs along the west bank, crosses back via the
              Third Avenue Bridge, and returns along the east bank is a roughly
              three-mile circuit that serves as the neighborhood&apos;s default
              exercise route and one of the best short urban runs in the
              Midwest.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="St. Anthony Falls & the Heritage Trail">
          <Prose>
            <p>
              St. Anthony Falls — Owamniyomni — is the neighborhood&apos;s
              namesake and its reason for being. The natural falls were
              substantially modified in the 19th century by the lock and dam
              system and by the concrete apron that now controls the water, but
              the power and presence of the falls remain unmistakable. The
              St. Anthony Falls Heritage Trail, a self-guided walking tour
              with interpretive markers, traces the history of the falls and
              the milling industry through the neighborhood, connecting the
              Upper Lock and Dam, the Pillsbury A-Mill, the Stone Arch Bridge,
              and other landmarks. It is an excellent way to understand the
              layers of history beneath your feet — Dakota sacred site, colonial
              renaming, industrial powerhouse, civic park — all occupying the
              same stretch of river.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nicollet Island & Boom Island">
          <Prose>
            <p>
              Nicollet Island, connected to St. Anthony West by bridges at both
              ends, is part park, part residential enclave, and entirely
              singular. The island&apos;s southern half is parkland with walking
              paths, river views, and the Nicollet Island Pavilion — a popular
              event venue housed in a historic industrial building. The
              northern half contains a small neighborhood of Victorian-era
              houses, the Nicollet Island Inn, and the kind of quiet that should
              not be possible in the middle of a city of 400,000 people. Walking
              Nicollet Island on a fall afternoon, with the leaves turning and
              the river moving on both sides, is one of the most peaceful
              experiences available in Minneapolis.
            </p>
            <p>
              Boom Island Park, located just north of Nicollet Island along the
              east bank, adds another dimension to the neighborhood&apos;s
              outdoor offerings. The park has open green space, a small beach
              area, a playground, and boat launch access to the Mississippi.
              The views from Boom Island — looking south toward the Hennepin
              Avenue Bridge and the downtown skyline — are exceptional,
              particularly at sunset. The park is popular with families,
              picnickers, and kayakers putting in for river trips.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Stone Arch Bridge">
          <Prose>
            <p>
              The Stone Arch Bridge deserves its own subsection because it is
              not just a piece of infrastructure — it is the neighborhood&apos;s
              signature, its most recognizable feature, and one of the most
              important pedestrian connections in Minneapolis. Built in 1883 by
              James J. Hill for his Minneapolis & Manitoba Railway, the bridge
              is 2,100 feet long, constructed of granite and limestone, and
              curves across the river in a graceful arc that engineers and
              architects still admire. When the railroad decommissioned it in
              1978, the bridge could have been demolished. Instead, it was
              converted to pedestrian and bicycle use, opening in its current
              form in 1994. That conversion was one of the best adaptive reuse
              decisions in Minneapolis history — it gave the city an iconic
              public space, connected St. Anthony to downtown, and created a
              vantage point for viewing the falls and the skyline that is
              unmatched anywhere in the metro.
            </p>
            <p>
              The bridge is especially magical at dusk, when the downtown
              lights come on and the falls catch the last of the daylight. On
              summer evenings, it fills with walkers, runners, cyclists,
              photographers, and couples who have discovered what locals already
              know: the Stone Arch Bridge at sunset is the best free experience
              in Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="St. Anthony Schools">
        <Prose>
          <p>
            Schools are an increasingly important consideration in St. Anthony
            as the neighborhood draws more young families. Minneapolis Public
            Schools serves the area, and families navigate the same system of
            neighborhood schools, magnet programs, and open enrollment that
            operates citywide.
          </p>
          <p>
            Pillsbury Elementary, located in the broader Northeast Minneapolis
            area, and Sheridan Arts Magnet School are among the options
            available to St. Anthony families. Sheridan&apos;s arts focus — a
            natural fit for a neighborhood adjacent to the Northeast Arts
            District — makes it a popular choice for families who want creative
            programming integrated into the school day. Webster Elementary and
            Marcy Open School are also within reasonable distance, with Marcy
            Open offering a progressive, project-based approach that appeals to
            a certain type of Minneapolis parent.
          </p>
          <p>
            Northeast Middle School serves as the middle school option for the
            area, and Edison High School — located on 22nd Avenue NE — is the
            comprehensive high school. Edison serves a diverse student body and
            offers career and technical education, arts programs, and college
            preparatory tracks. Families who prioritize school rankings often
            explore the citywide magnet system or consider charter and private
            options — several parochial schools in Northeast Minneapolis draw
            on the area&apos;s Catholic heritage.
          </p>
          <p>
            The honest assessment: St. Anthony is increasingly a neighborhood
            where families are choosing to raise children, and the schools are
            adequate and improving. It is not yet a neighborhood where families
            move specifically for the schools — that distinction still belongs
            to the southwestern neighborhoods and the suburbs. But the gap is
            narrowing as the neighborhood&apos;s family population grows and
            parental engagement in the schools increases.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="St. Anthony Real Estate & Housing">
        <Prose>
          <p>
            St. Anthony&apos;s housing market reflects a neighborhood in the
            middle of a long, slow transformation from working-class and
            middle-class to upper-middle and affluent. The process is further
            along here than in most of Northeast Minneapolis — proximity to
            the river, the historic character, the walkability to downtown, and
            the views have made St. Anthony West one of the more desirable
            addresses on the east bank for over a decade. But it is not yet
            the North Loop or Linden Hills, and the gap between what St.
            Anthony offers and what those neighborhoods charge creates an
            opportunity for buyers who value character over prestige.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in St. Anthony">
          <Prose>
            <p>
              The owner-occupied market is unusually diverse for a neighborhood
              this size. Single-family homes range from modest early 20th
              century bungalows and workers&apos; cottages — selling in the
              $320,000 to $420,000 range — to renovated historic homes with
              river views or bluff-top locations that push well above $500,000.
              The historic housing stock is the neighborhood&apos;s most
              distinctive asset: limestone foundations, original woodwork,
              proportions and materials that modern construction rarely
              replicates. Buyers who want a house with character and history
              will find it here, though they should budget for the maintenance
              that 100-year-old buildings require.
            </p>
            <p>
              Condos and townhomes are an increasingly large part of the market,
              driven by new construction along the riverfront and the conversion
              of some older buildings. Prices range from $200,000 for smaller
              units in older buildings to $450,000 or more for newer
              construction with river views and modern finishes. Several condo
              developments along Main Street and the riverfront have attracted
              buyers who want the St. Anthony experience without the
              responsibilities of a single-family home.
            </p>
            <p>
              Nicollet Island properties are in a category of their own. The
              small number of Victorian-era houses on the island rarely come
              to market, and when they do, they command premium prices for
              buyers who understand that living on an island in the Mississippi
              River in the center of a major American city is an experience
              that cannot be replicated elsewhere at any price.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              One-bedroom apartments in St. Anthony West rent for approximately
              $1,200 to $1,700 per month, with older walk-ups at the lower end
              and newer construction — particularly buildings with river views
              — at the higher end. Two-bedroom units run $1,500 to $2,200.
              These prices are above the Northeast Minneapolis average but
              below the North Loop and comparable to Uptown and Whittier. The
              rental stock is increasingly dominated by newer construction, as
              several apartment developments have been built along the riverfront
              and near Main Street in recent years.
            </p>
            <p>
              For renters, the value proposition is compelling: you get
              riverfront access, walkability to downtown via the Stone Arch
              Bridge, Main Street dining and entertainment, and the historic
              character of the neighborhood at prices that are significantly
              lower than comparable waterfront addresses in other major American
              cities. The trade-off is that the rental stock in older buildings
              can be dated, and the newer buildings — while offering modern
              amenities — sometimes lack the character that draws people to the
              neighborhood in the first place.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We looked at Linden Hills and Lynnhurst first — that's where everyone told us young families go. But a three-bedroom there was $650,000 and looked like every other house on the block. We bought a 1910 limestone bungalow in St. Anthony for $380,000 with a view of the river. No contest." cite="St. Anthony homeowner, 2024" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around St. Anthony">
        <Prose>
          <p>
            St. Anthony West is one of the more navigable neighborhoods in
            Minneapolis, benefiting from its compact size, proximity to
            downtown, and the infrastructure of bridges and trails that connect
            it to the rest of the city. The Walk Score of approximately 80
            reflects a neighborhood where most daily needs — dining, coffee,
            entertainment, basic shopping — are accessible on foot. The Bike
            Score of 90 is among the highest in the city and more accurately
            captures how most active residents get around: the riverfront trails
            and the Stone Arch Bridge make cycling to downtown, to the
            university, and to adjacent neighborhoods fast, flat, and scenic.
          </p>
          <p>
            The Stone Arch Bridge is the neighborhood&apos;s most important
            transportation connection, providing dedicated pedestrian and
            bicycle access to the Mill District and downtown — a roughly
            15-minute walk or 5-minute bike ride to the heart of downtown
            Minneapolis. The Hennepin Avenue Bridge and the Third Avenue Bridge
            offer additional crossings. For commuters, the combination of
            bridge access and riverfront trails means that a car is optional
            for anyone who works downtown, at the University of Minnesota, or
            in the Mill District.
          </p>
          <p>
            Transit service is adequate but not exceptional. Metro Transit
            buses serve East Hennepin Avenue and University Avenue NE, providing
            connections to downtown and the broader transit network. The Transit
            Score of 62 is honest — transit works here, but most residents rely
            on biking or walking for daily trips and use transit as a supplement
            rather than a primary mode. The Blue Line extension, if and when it
            reaches Northeast Minneapolis, could significantly improve transit
            access, but the timeline remains uncertain.
          </p>
          <p>
            For drivers, access is straightforward. Interstate 35W is nearby,
            connecting to downtown (5 minutes), MSP Airport (20 minutes), and
            the northern suburbs. Surface streets provide direct routes to
            adjacent neighborhoods and commercial corridors. Parking is
            generally manageable — most residential streets have free on-street
            parking, and the commercial areas along Main Street and East
            Hennepin have a mix of street parking and small lots. During summer
            weekends and events, parking near the riverfront and St. Anthony
            Main can be competitive — biking is the better option.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            St. Anthony West sits at the intersection of several tensions that
            are reshaping the neighborhood in real time. These are not abstract
            policy debates — they are arguments happening at neighborhood
            meetings, on Nextdoor, over fences between neighbors, and in the
            decisions that builders and buyers and renters make every day.
          </p>
        </Prose>

        <ArticleSubsection title="Development vs. Historic Character">
          <Prose>
            <p>
              The central tension in St. Anthony West is between the historic
              character that makes the neighborhood desirable and the new
              development that threatens to dilute it. The cobblestone streets,
              the limestone buildings, the Victorian houses, the human-scale
              commercial corridor on Main Street — these are the things that
              draw people to St. Anthony. But the same desirability that
              attracts residents also attracts developers, and the pressure to
              build — more condos, more apartments, more mixed-use projects —
              is relentless.
            </p>
            <p>
              Some new development has been sensitive to context: buildings that
              respect the neighborhood&apos;s scale, materials, and historic
              feel. Other projects have been less thoughtful — generic modern
              boxes that could be in any American city, dropped into a
              neighborhood whose identity depends on not looking like everywhere
              else. The St. Anthony Falls Historic District designation provides
              some protection, but it does not cover the entire neighborhood,
              and the boundaries of historic preservation are constantly
              negotiated between preservation advocates, developers, property
              owners, and the city.
            </p>
            <p>
              The irony is familiar: people move to St. Anthony because it has
              character, and then the development that follows erodes the
              character that attracted them. The neighborhood association has
              been active in pushing for design standards and contextual
              sensitivity, but the economics of real estate development favor
              maximum density and modern construction, and the gap between what
              the neighborhood wants and what the market delivers is a constant
              source of friction.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rising Prices & Economic Sorting">
          <Prose>
            <p>
              St. Anthony West was never a cheap neighborhood in the way that
              parts of North Minneapolis or even{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>{" "}
              were cheap a decade ago. But it was affordable by the standards
              of riverfront urban living — a place where a teacher or a city
              worker could buy a house and raise a family near the river
              without stretching beyond reason. That affordability is eroding.
              Home prices have climbed steadily, property taxes have followed,
              and the newer condo and apartment developments are aimed squarely
              at upper-middle-income buyers and renters.
            </p>
            <p>
              The result is a gradual economic sorting that is changing who
              lives here. Long-time residents on fixed incomes feel the
              pressure of rising property taxes. Young adults and artists who
              might have rented here a decade ago are pushed to cheaper
              neighborhoods farther from the river. The working-class character
              that defined St. Anthony for most of its history is fading,
              replaced by a professional-class sensibility that values the
              neighborhood&apos;s aesthetics but doesn&apos;t share its
              working-class roots. This is not unique to St. Anthony — it is
              the story of desirable urban neighborhoods across America — but
              it is felt here with particular sharpness because the
              neighborhood&apos;s history as a place where ordinary people
              lived and worked is so central to its identity.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Proximity to Downtown: Asset and Liability">
          <Prose>
            <p>
              Being a 15-minute walk from downtown Minneapolis is one of St.
              Anthony West&apos;s greatest assets. It is also, at times, a
              liability. The same bridges and trails that connect residents to
              downtown restaurants, offices, and cultural venues also connect
              downtown&apos;s challenges — homelessness, public safety
              incidents, property crime — to the neighborhood. East Hennepin
              Avenue, which runs from downtown into St. Anthony, can feel like a
              corridor where urban issues travel from the core to the
              neighborhood&apos;s doorstep.
            </p>
            <p>
              Residents discuss this openly and with varying degrees of
              frustration. Most acknowledge that urban living comes with urban
              realities and that St. Anthony&apos;s overall safety profile is
              strong by city standards. But the proximity to downtown means
              that issues — encampments, break-ins, public disorder — that
              might feel distant in Linden Hills or Tangletown feel close here.
              The neighborhood navigates this by staying engaged: active
              community organizations, communication with police and city
              officials, and the kind of neighborly vigilance that comes from
              people who care about where they live and intend to stay.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="St. Anthony West FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
