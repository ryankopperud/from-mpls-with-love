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
    title: "Beltrami, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Beltrami, Minneapolis — near St. Anthony, historic Northeast, residential character, affordable housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Beltrami",
  deck: "A small, historic Northeast Minneapolis neighborhood tucked between the Mississippi River and the railroad tracks, where the residential blocks carry a working-class charm that the trendier parts of Northeast have gentrified past, and the proximity to St. Anthony Main gives you more than the quiet streets would suggest.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Beltrami?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Beltrami" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Beltrami, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$250K–$360K", label: "Median home sale price range (2025 data)" },
      { value: "1880s–1930s", label: "Era most homes were built" },
      { value: "0.5 miles", label: "Approximate distance to St. Anthony Main" },
      { value: "Edison High", label: "Comprehensive high school" },
      { value: "8–12 min", label: "Drive to downtown Minneapolis" },
      { value: "68", label: "Walk Score" },
      { value: "82", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Beltrami a good neighborhood in Minneapolis?",
      answer:
        "Beltrami is a solid residential neighborhood in Northeast Minneapolis with genuine strengths: proximity to the Mississippi River and St. Anthony Main, historic housing stock with character, access to the broader Northeast food and arts scene, and prices that are below the citywide median. The neighborhood is small, quiet, and residential, with a working-class character that distinguishes it from the more gentrified parts of Northeast. It faces some challenges — aging infrastructure, limited commercial options within the neighborhood, and gentrification pressure from the south — but it offers real value for buyers seeking character and location.",
    },
    {
      question: "Where is Beltrami in Minneapolis?",
      answer:
        "Beltrami is in Northeast Minneapolis, roughly bounded by Lowry Avenue NE to the north, Central Avenue NE to the east, 18th Avenue NE and the railroad corridor to the south, and the Mississippi River to the west. It sits north of the St. Anthony West and Logan Park neighborhoods, south of Bottineau, and west of Holland. The Mississippi River forms its western boundary, and the neighborhood is close to the historic St. Anthony Main area along the riverfront.",
    },
    {
      question: "Why is it called Beltrami?",
      answer:
        "The neighborhood is named after Giacomo Costantino Beltrami, an Italian explorer who traveled through the upper Mississippi River region in the 1820s and is sometimes credited with discovering the source of the Mississippi River (though his claim was disputed even at the time). Beltrami County in northern Minnesota shares the same namesake. The Italian name in a historically Eastern European neighborhood is a quirk of Minneapolis naming conventions — the neighborhood's identity was shaped more by Polish and Ukrainian immigrants than by any Italian connection.",
    },
    {
      question: "Is Beltrami safe?",
      answer:
        "Beltrami's safety profile is generally moderate, consistent with the broader Northeast Minneapolis area. Crime rates are near the citywide average for most categories, with property crime being the most common concern. The residential blocks are quiet and stable. The southern edge, closer to the commercial corridors and St. Anthony area, can see more activity. Most residents feel safe on their blocks while exercising standard urban awareness.",
    },
    {
      question: "How much do homes cost in Beltrami?",
      answer:
        "Median home sale prices in Beltrami ranged from roughly $250,000 to $360,000 in 2025, slightly below the citywide median. The older housing stock — primarily 1880s–1930s construction — offers character and craftsmanship at accessible prices. Homes needing work can be found in the $220,000–$280,000 range, while renovated properties can reach $380,000–$450,000. Beltrami is more affordable than the neighboring St. Anthony West and Logan Park areas, which have experienced more aggressive gentrification.",
    },
    {
      question: "Is Beltrami near St. Anthony Main?",
      answer:
        "Yes — Beltrami is approximately half a mile north of St. Anthony Main, the historic commercial and entertainment district along the Mississippi River in Northeast Minneapolis. St. Anthony Main features restaurants, movie theaters, the Stone Arch Bridge, and the riverfront walkway. The proximity gives Beltrami residents easy access to one of the most attractive public spaces in the city while living in a quieter, more affordable residential area.",
    },
    {
      question: "What schools serve Beltrami?",
      answer:
        "Beltrami is served by Minneapolis Public Schools. Nearby elementary options include Pillsbury Elementary and other Northeast schools. Northeast Middle School serves grades 6–8, and Edison High School is the comprehensive high school. Edison has a strong reputation within the district. Charter schools and the district's open enrollment system provide additional options.",
    },
    {
      question: "Is Beltrami gentrifying?",
      answer:
        "Beltrami is experiencing gentrification pressure, particularly from the south — as the St. Anthony West and Logan Park neighborhoods have become more expensive, buyers and investors have pushed northward into Beltrami. Prices are rising, some older homes are being renovated and flipped, and the demographics are shifting as younger, wealthier residents move in. The process is less advanced than in the neighborhoods immediately to the south, but the direction is clear. The question for Beltrami is whether it can absorb new investment and new residents while retaining the working-class character and affordability that currently define it.",
    },
    {
      question: "Is Beltrami on the Mississippi River?",
      answer:
        "Yes — the Mississippi River forms Beltrami's western boundary. The riverfront provides trail access, views, and proximity to the broader river trail system that connects to downtown, the Stone Arch Bridge, St. Anthony Falls, and points north toward North Mississippi Regional Park. The river access is one of Beltrami's strongest assets, providing a natural amenity that connects the neighborhood to the city's best outdoor infrastructure.",
    },
    {
      question: "How is Beltrami different from St. Anthony West?",
      answer:
        "Beltrami is less gentrified, less expensive, and less well-known than St. Anthony West. St. Anthony West — immediately to the south — has experienced significant investment and price appreciation, driven by its proximity to the riverfront, the Stone Arch Bridge, and the growing restaurant scene. Beltrami has the same river access and much of the same historic housing stock at lower prices, but it has not yet experienced the same level of transformation. For buyers who want what St. Anthony West offers at a lower price point, Beltrami is the logical place to look.",
    },
  ],
  nearby: [
    { name: "St. Anthony West", slug: "st-anthony-west", description: "South, riverfront, gentrifying, restaurants and nightlife" },
    { name: "St. Anthony East", slug: "st-anthony-east", description: "Southeast, historic, university-adjacent" },
    { name: "Bottineau", slug: "bottineau", description: "North, historic Eastern European roots, near river" },
    { name: "Logan Park", slug: "logan-park", description: "South, arts district, breweries, trendy Northeast" },
    { name: "Holland", slug: "holland", description: "East, quiet residential Northeast" },
    { name: "Sheridan", slug: "sheridan", description: "South, near downtown, industrial-residential mix" },
  ],
  closing: {
    title: "What Makes Beltrami Worth Knowing",
    paragraphs: [
      "Beltrami is the neighborhood that sits just north of Northeast Minneapolis's transformation — close enough to see the cranes and the craft cocktail bars and the rising prices, far enough to retain the working-class texture and the affordability that the trendy neighborhoods have already lost. The houses here were built by the same immigrant craftsmen who built St. Anthony West and Logan Park, with the same deep porches and hardwood floors and solid construction. The river runs along the same boundary. The churches mark the same skyline. The only difference is the price — and the question of how long that difference can last.",
      "For buyers who are paying attention, Beltrami is an opportunity. For long-term residents, it is home — a place that has held its character through decades of change and is now watching the next wave arrive. The tension between opportunity and preservation is the oldest story in urban neighborhoods, and Beltrami is living it in real time. The steeples still stand. The porches still face the street. The river still runs along the western edge, indifferent to the market forces that will determine whether this neighborhood remains what it is or becomes what the neighborhoods to its south have already become. The answer depends, as it always does, on the people who live here and the choices they make.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Half a mile north of the Stone Arch Bridge and the buzz of
          St. Anthony Main — the restaurants, the riverfront walkway,
          the tourists with their phones held up to capture the
          Minneapolis skyline — the energy drops. The commercial
          storefronts give way to residential blocks. The renovated
          lofts give way to bungalows with original siding and porches
          where someone has left a pair of boots and a folding chair.
          This is Beltrami — the neighborhood that sits just beyond
          the reach of Northeast&apos;s gentrification wave, still
          close enough to the river to hear it on quiet nights, still
          affordable enough that a couple working regular jobs can
          buy a house with a yard and a garage and a mortgage payment
          that doesn&apos;t require a second income stream. The question
          hanging over every block is whether that will still be true
          in five years. The answer depends on how fast the wave
          moves north.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/beltrami/hero.webp"
        alt="Residential blocks in the Beltrami neighborhood of Northeast Minneapolis, with historic homes and church steeple"
        caption="Beltrami — historic Northeast blocks where the gentrification wave hasn't fully arrived"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Beltrami, Minneapolis?">
        <Prose>
          <p>
            Beltrami is a small residential neighborhood in Northeast
            Minneapolis, roughly bounded by Lowry Avenue NE to the
            north, Central Avenue NE to the east, 18th Avenue NE and
            the railroad corridor to the south, and the Mississippi
            River to the west. Home to approximately 3,500 residents,
            it occupies a transitional zone between the gentrifying
            neighborhoods of southern Northeast and the more affordable,
            working-class blocks to the north.
          </p>
          <p>
            The neighborhood is named after Giacomo Costantino Beltrami,
            an Italian explorer who traveled the upper Mississippi in
            the 1820s — a name that sits oddly in a neighborhood built
            by Polish and Ukrainian immigrants, but that is the nature
            of civic naming conventions. Beltrami the neighborhood has
            little connection to Beltrami the explorer; its identity
            has always been shaped by the working-class families who
            built its houses, attended its churches, and walked its
            streets to the mills and factories that powered early
            Minneapolis.
          </p>
          <p>
            Today, Beltrami is in a state of transition. The Eastern
            European families who built the neighborhood are mostly gone.
            The housing stock they left behind — bungalows, Foursquares,
            and modest frame houses from the 1880s through the 1930s —
            is being bought by a mix of newer immigrants, young families,
            and buyers fleeing the rising prices of{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            {" "}and{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>
            {" "}to the south. The result is a neighborhood that is
            more affordable, more diverse, and less certain of its
            future than the neighborhoods that get the attention and
            the magazine features.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Beltrami Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/beltrami/neighborhood-sign.webp"
          alt="Beltrami neighborhood sign in Minneapolis"
          caption="The Beltrami neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Beltrami History & Origins">
        <Prose>
          <p>
            The land that is now Beltrami is part of the ancestral
            homeland of the Dakota people, and its position along the
            Mississippi River made it part of a landscape of profound
            significance — St. Anthony Falls, just downstream, is one
            of the most important sites in Dakota cultural geography.
            The dispossession of Dakota lands enabled the settlement
            and industrialization that would transform this riverbank
            into a city.
          </p>
          <p>
            Beltrami was settled as part of the broader development of
            Northeast Minneapolis in the late 19th century. Eastern
            European immigrants — Poles, Ukrainians, Slovaks, and others
            — came to work in the flour mills, sawmills, and factories
            that clustered along the Mississippi&apos;s east bank. They
            built their homes on the blocks east of the river, within
            walking distance of the jobs that sustained them, and
            organized their community life around the churches, social
            halls, and mutual aid societies that immigrants have always
            relied on in new countries.
          </p>
          <p>
            The housing stock from this era — the 1880s through the
            1930s — is among the oldest in Minneapolis. The homes are
            small by modern standards but built with care — hardwood
            floors, plaster walls, built-in cabinetry, and deep front
            porches that were designed for sitting and socializing in
            an era before air conditioning and television moved life
            indoors. The narrow lots and close spacing reflect a time
            when walking was the primary mode of transportation and
            proximity to neighbors was a feature, not a drawback.
          </p>
          <p>
            The 20th century brought the familiar arc: growth,
            stability, decline, and the beginnings of renewal. The
            mills closed, the factories moved, the children of
            immigrants moved to the suburbs, and the neighborhood
            entered a period of disinvestment that lasted through the
            1970s and 1980s. By the 2000s, the broader revival of
            Northeast Minneapolis — driven by the arts community,
            the brewery wave, and the rediscovery of urban
            neighborhoods by young professionals — began to reach
            Beltrami, though more slowly and less dramatically than
            in the neighborhoods closer to the riverfront.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Beltrami">
        <Prose>
          <p>
            Living in Beltrami means living in the part of Northeast
            that still feels like the old Northeast — the Northeast
            of working-class families, front-porch conversations,
            and houses that prioritize sturdy construction over
            aesthetic ambition. The blocks are dense, the houses are
            close together, and the overall effect is a neighborhood
            with more human scale and more street life than the newer,
            more spread-out parts of the city.
          </p>
          <p>
            The proximity to the river and to{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            {" "}gives Beltrami access to amenities that its own
            commercial landscape doesn&apos;t provide. The riverfront
            trail is a short walk or bike ride west. The restaurants
            and bars of St. Anthony Main are just to the south. Central
            Avenue, with its diverse food corridor, runs along the
            eastern edge. Beltrami sits at the intersection of these
            assets without being the center of any of them — a
            position that is less exciting than being in the middle
            of the action but more affordable and more livable for
            people who want access to culture and dining without the
            constant stimulation.
          </p>
          <p>
            The community is diverse and transitional. Longtime
            residents — some of them elderly homeowners who have been
            on their blocks for decades — live alongside newer
            immigrants, young couples, and the occasional investor-
            renovator who sees the same potential in these old houses
            that the market has recognized to the south. The
            interactions are generally positive, shaped by the
            practical neighborliness that comes from sharing close
            quarters on narrow lots.
          </p>
          <p>
            The churches remain the most visible architectural
            features — their steeples rising above the rooflines like
            markers of the community that built them. The congregations
            are smaller now, the services sometimes in languages that
            the founders never spoke, but the buildings endure as
            physical evidence that this neighborhood was built by
            people who intended to stay.
          </p>
        </Prose>
        <Quote
          text="I tell people I live in Beltrami and they say 'Where?' Then I tell them it's the neighborhood just north of St. Anthony West and they say 'Oh, is that cheaper?' Yes. That's the point."
          cite="Beltrami homeowner"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Beltrami Food, Drink & Local Spots">
        <Prose>
          <p>
            Beltrami&apos;s own commercial landscape is thin, but the
            neighborhood&apos;s position between Central Avenue and
            the St. Anthony riverfront gives residents access to two
            of the strongest food corridors in the city.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Corridors">
          <PlaceCardComponent place={{ name: "Central Avenue NE", tag: "Northeast's Main Street", price: "$–$$$", description: "Central Avenue, along Beltrami's eastern edge, is Northeast Minneapolis's primary commercial corridor — home to Vietnamese, Mexican, East African, and American restaurants, craft breweries, coffee shops, and bars. The avenue has been one of the most dynamic food streets in the Twin Cities over the past decade, and Beltrami residents can walk or bike there in minutes." }} />
          <PlaceCardComponent place={{ name: "St. Anthony Main", tag: "Riverfront Dining & Entertainment", price: "$$–$$$", url: "https://stanthonymain.com", description: "Just south of Beltrami, St. Anthony Main is the historic commercial district along the Mississippi River featuring restaurants, a movie theater, and the riverfront walkway. The Stone Arch Bridge, one of the city's most iconic landmarks, is accessible from here. The restaurants range from casual to upscale, and the riverfront views make this one of the most attractive dining locations in the city." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Northeast Brewery Scene">
          <Prose>
            <p>
              The broader Northeast brewery and restaurant scene —
              Dangerous Man, Indeed Brewing, Fair State, Bauhaus Brew
              Labs, and many others — is concentrated south of Beltrami
              in the arts district and along Central Avenue. A short
              bike ride or drive puts Beltrami residents in the middle
              of one of the best brewery scenes in the Midwest. The
              neighborhood benefits enormously from this proximity
              without bearing the noise, traffic, and parking challenges
              that come with living directly in the commercial zone.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Beltrami">
        <Prose>
          <p>
            Beltrami&apos;s outdoor assets are anchored by the
            Mississippi River and the connected trail system that
            links the neighborhood to some of the finest urban
            outdoor infrastructure in the country.
          </p>
        </Prose>

        <ArticleSubsection title="Mississippi Riverfront">
          <Prose>
            <p>
              The Mississippi River runs along Beltrami&apos;s western
              boundary, and the river trail system provides access to
              a continuous corridor of paths and parks. The trail
              connects south to the Stone Arch Bridge, St. Anthony
              Falls, Mill Ruins Park, and the downtown riverfront —
              approximately 1–2 miles of scenic trail. North, the
              trail continues toward North Mississippi Regional Park
              and eventually the Coon Rapids Dam. For cyclists and
              runners, this connectivity makes Beltrami one of the
              best-positioned neighborhoods in the city for river
              access.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Beltrami Park">
          <Prose>
            <p>
              Beltrami Park, within the neighborhood, provides a
              community green space with a playground, playing fields,
              and open space. The park sits near the river bluff and
              offers views of the Mississippi. It is a neighborhood
              park that serves daily needs — kids playing, dog walking,
              community gatherings — while the larger riverfront
              system handles the bigger outdoor ambitions.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Stone Arch Bridge & Falls">
          <Prose>
            <p>
              The Stone Arch Bridge — one of Minneapolis&apos;s most
              iconic landmarks — is approximately a mile south of
              Beltrami, accessible by the river trail. The bridge
              crosses the Mississippi at St. Anthony Falls and
              provides one of the best views of the downtown skyline,
              the falls, and the historic mill district. For Beltrami
              residents, this is a daily amenity — a walk or bike ride
              to one of the city&apos;s most celebrated public spaces.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Beltrami Schools">
        <Prose>
          <p>
            Beltrami is served by Minneapolis Public Schools. Nearby
            elementary options include Pillsbury Elementary and other
            Northeast schools. Northeast Middle School serves grades
            6–8, and Edison High School is the comprehensive high
            school for Northeast Minneapolis.
          </p>
          <p>
            Edison High School is considered one of the stronger high
            schools within the Minneapolis Public Schools system,
            known for its diverse student body, range of academic and
            career programs, and community engagement. The school
            serves students from across Northeast and has been an
            anchor institution for the area.
          </p>
          <p>
            Charter schools and the district&apos;s open enrollment
            system provide additional options. The Northeast school
            landscape is generally regarded as one of the stronger
            offerings within the Minneapolis system, and families in
            Beltrami have access to a range of choices.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Beltrami Real Estate & Housing">
        <Prose>
          <p>
            Beltrami offers some of the best value in Northeast
            Minneapolis for buyers seeking historic character and
            river proximity. Median home sale prices ranged from
            roughly $250,000 to $360,000 in 2025 — below the citywide
            median and notably below the prices in{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            {" "}and{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>
            , which share similar housing stock and river access but
            have experienced more aggressive gentrification.
          </p>
          <p>
            The housing stock is among the oldest in Minneapolis —
            primarily 1880s–1930s construction, including bungalows,
            Foursquares, and simple frame houses. The homes have the
            character features of pre-war construction — hardwood
            floors, original woodwork, deep front porches, built-in
            cabinetry — and the quirks that come with century-old
            houses: uneven floors, small closets, original plumbing.
            At the lower end ($220,000–$280,000), homes need
            significant work. The mid-range ($280,000–$370,000) gets
            a well-maintained home with updates. Above $370,000,
            properties are typically fully renovated — the old bones
            preserved, the systems modernized, the price reflecting
            the investment.
          </p>
          <p>
            The rental market is active, with a mix of older apartment
            buildings and single-family rentals at rents below the
            citywide average. New construction — primarily multi-family
            — has appeared in limited quantities, mostly along the
            commercial corridors at the neighborhood&apos;s edges.
          </p>
        </Prose>

        <Quote
          text="Same old houses as Logan Park and St. Anthony West. Same river. Same Northeast. But Beltrami costs $50,000 to $100,000 less because the magazine writers haven't found us yet. I'm fine with that."
          cite="Beltrami homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Beltrami">
        <Prose>
          <p>
            Beltrami earns a Walk Score of 68 and a Bike Score of 82,
            making it one of the more accessible Northeast neighborhoods
            for non-car transportation. The proximity to Central Avenue
            and the river trail system provides good options for
            walking, cycling, and transit.
          </p>
          <p>
            Metro Transit bus routes along Central Avenue and connecting
            corridors provide frequent service to downtown Minneapolis,
            with ride times of approximately 15–25 minutes. Central
            Avenue is one of the better transit corridors in
            Northeast, and Beltrami&apos;s location puts the bus stops
            within easy walking distance.
          </p>
          <p>
            Cycling to downtown is easy — approximately 2–3 miles via
            the river trail, with separated paths most of the way.
            The Stone Arch Bridge provides a car-free crossing to the
            west side of the river and downtown. Beltrami is one of
            the best-positioned neighborhoods in the city for bike
            commuting to downtown, and the flat terrain makes it
            practical year-round.
          </p>
          <p>
            By car, downtown Minneapolis is 8–12 minutes. The
            University of Minnesota is 10 minutes. MSP Airport is
            approximately 18 minutes. Street parking on residential
            blocks is generally available, though the older, denser
            street grid means tighter parking than in newer
            neighborhoods.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Beltrami&apos;s central tension is its proximity to the
            gentrification wave that has already transformed the
            Northeast neighborhoods to its south. The wave is moving
            north, and Beltrami is in its path.
          </p>
        </Prose>

        <ArticleSubsection title="Gentrification from the South">
          <Prose>
            <p>
              As{" "}
              <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
                St. Anthony West
              </Link>
              {" "}and{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>
              {" "}have become more expensive, buyers have pushed
              northward into Beltrami. Prices are rising. Older homes
              are being renovated and flipped. The demographics are
              shifting as younger, wealthier buyers replace working-class
              families and elderly homeowners. The pattern is textbook
              gentrification, and the question is not whether it will
              happen in Beltrami but how fast and how completely.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Displacement Risk">
          <Prose>
            <p>
              Rising property values benefit homeowners on paper but
              create real challenges — higher property taxes for
              elderly residents on fixed incomes, higher rents for
              tenants, and the psychological weight of watching your
              neighborhood change around you in ways that make you
              feel less at home. Long-term renters are particularly
              vulnerable, as the affordable rental stock is slowly
              consumed by renovation and redevelopment. The
              displacement is not sudden or dramatic — it is gradual,
              quiet, and happening on every block.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Infrastructure Aging">
          <Prose>
            <p>
              The oldest housing stock in Minneapolis comes with the
              oldest infrastructure — lead service lines, aging sewer
              systems, streets that need repair. The cost of
              maintaining and upgrading century-old infrastructure is
              significant, and the question of who pays — existing
              residents, new residents, or the city at large — is an
              ongoing negotiation. For homeowners in Beltrami, the
              charm of a 1900s bungalow comes with the reality of
              maintaining one.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Beltrami FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
