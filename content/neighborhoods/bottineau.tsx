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
    title: "Bottineau, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Bottineau, Minneapolis — historic Eastern European roots, near the Mississippi River, diverse Northeast, affordable housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Bottineau",
  deck: "A Northeast Minneapolis neighborhood where the Eastern European heritage runs deep in the church steeples and street names, the Mississippi River anchors the western edge, the community has diversified into something new, and the affordability makes you wonder how long the secret can keep.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Bottineau?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Bottineau" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Bottineau, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,200", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$235K–$335K", label: "Median home sale price range (2025 data)" },
      { value: "1890s–1940s", label: "Era most homes were built" },
      { value: "4+ churches", label: "Historic Eastern European churches" },
      { value: "Central Ave NE", label: "Primary commercial corridor" },
      { value: "10–15 min", label: "Drive to downtown Minneapolis" },
      { value: "65", label: "Walk Score" },
      { value: "78", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Bottineau a good neighborhood in Minneapolis?",
      answer:
        "Bottineau is a solid, character-rich neighborhood in Northeast Minneapolis that offers affordable housing, proximity to the Mississippi River, access to Central Avenue's commercial corridor, and the historic texture of one of the city's oldest immigrant communities. The neighborhood has genuine diversity — both cultural and economic — and is close enough to the trendier parts of Northeast to benefit from the restaurant and brewery scene without paying premium prices. It faces the usual Northeast challenges — rising prices, gentrification pressure, aging housing stock — but retains more of its working-class authenticity than neighborhoods closer to downtown.",
    },
    {
      question: "Where is Bottineau in Minneapolis?",
      answer:
        "Bottineau is in Northeast Minneapolis, roughly bounded by Lowry Avenue NE to the north, Central Avenue NE and adjacent blocks to the east, 18th Avenue NE to the south, and the Mississippi River to the west. It sits north of the Logan Park and Marshall Terrace neighborhoods, south of the Columbia Park neighborhood, and west of the Holland neighborhood. The Mississippi River forms its western boundary, providing river trail access and views.",
    },
    {
      question: "Why is Bottineau called Bottineau?",
      answer:
        "The neighborhood is named after Pierre Bottineau, a French-Ojibwe fur trader and guide who was a significant figure in early Minnesota history. Bottineau served as a guide for military expeditions and settlers in the mid-19th century and was known for his knowledge of the region's geography. The name reflects the area's pre-urban history, when the land along the Mississippi was traversed by traders and indigenous peoples before the city's industrial development began.",
    },
    {
      question: "Is Bottineau safe?",
      answer:
        "Bottineau's safety profile is moderate, generally in line with the citywide average. Property crime is the most common concern, and the neighborhood's proximity to busier commercial corridors can bring some of the issues associated with those areas. The residential blocks are generally quiet and stable. Like all of Minneapolis, the area experienced elevated crime during 2020–2022, which has since subsided. Most residents feel safe on their blocks while exercising standard urban awareness.",
    },
    {
      question: "How much do homes cost in Bottineau?",
      answer:
        "Median home sale prices in Bottineau ranged from roughly $235,000 to $335,000 in 2025, below the citywide median and below the prices in more celebrated Northeast neighborhoods. The older housing stock — primarily 1890s–1940s bungalows and frame houses — offers character and charm at accessible prices. Fixer-uppers can be found below $220,000, while updated homes on the best blocks can reach $350,000–$420,000. The neighborhood offers good value for buyers seeking Northeast character without Northeast premium pricing.",
    },
    {
      question: "What is the Eastern European heritage of Bottineau?",
      answer:
        "Bottineau was settled primarily by Polish, Ukrainian, Slovak, and other Eastern European immigrants in the late 19th and early 20th centuries. These communities built the churches, social halls, and businesses that defined Northeast Minneapolis for generations. Holy Cross Catholic Church, St. Constantine Ukrainian Catholic Church, and other houses of worship still stand as architectural and cultural landmarks. While the Eastern European population has declined significantly as families moved to the suburbs and new immigrant communities have arrived, the built environment — the churches, the street patterns, the housing stock — still reflects this heritage.",
    },
    {
      question: "What schools serve Bottineau?",
      answer:
        "Bottineau is served by Minneapolis Public Schools. Nearby elementary options include Pillsbury Elementary and other Northeast schools. Northeast Middle School serves grades 6–8, and Edison High School is the comprehensive high school for Northeast Minneapolis. Edison has a strong reputation within the district for its diverse student body and programming. Charter schools and the district's open enrollment system provide additional options.",
    },
    {
      question: "Is Bottineau gentrifying?",
      answer:
        "Bottineau is experiencing gentrification pressure as part of the broader Northeast Minneapolis wave, though the process is less advanced here than in neighborhoods like Logan Park or St. Anthony West. Rising prices, new investment, and the influx of younger, wealthier residents are changing the neighborhood's character. Long-term residents — including elderly Eastern European families and more recent immigrant communities — face rising property taxes and rents. The neighborhood is in the middle of the transition, and the balance between preserving affordability and accommodating growth is an active community conversation.",
    },
  ],
  nearby: [
    { name: "Holland", slug: "holland", description: "East of Bottineau, residential Northeast, near Central Ave" },
    { name: "Columbia Park", slug: "columbia-park", description: "North, Columbia Park and golf course, quiet residential" },
    { name: "Marshall Terrace", slug: "marshall-terrace", description: "Southwest, small riverfront neighborhood" },
    { name: "Logan Park", slug: "logan-park", description: "South, arts district, breweries, trendy Northeast" },
    { name: "Northeast Park", slug: "northeast-park", description: "East, residential Northeast" },
    { name: "Sheridan", slug: "sheridan", description: "South, near downtown, industrial-residential mix" },
  ],
  closing: {
    title: "What Makes Bottineau Irreplaceable",
    paragraphs: [
      "Bottineau is the kind of neighborhood that cities lose when they stop paying attention — a place where the history is written in church steeples and housing stock rather than in tourism brochures, where the diversity is genuine rather than curated, and where the affordability that makes it accessible is precisely what makes it vulnerable to the kind of change that erases the things worth preserving. The Eastern European families who built this neighborhood are mostly gone, their children in the suburbs, their churches still standing but serving smaller congregations. The new residents — East African, Latino, Southeast Asian, young professionals — are writing the next chapter of a story that has always been about immigrants finding a foothold in a city that needed their labor.",
      "What makes Bottineau worth knowing is not any single landmark or restaurant or institution but the texture of the place itself — the way a Polish church and a Somali grocery can share a commercial strip without anyone finding it remarkable, the way a 1920s bungalow with a deep front porch can feel like the best possible place to sit on a summer evening, the way the river at the western edge reminds you that a neighborhood is not just houses and streets but a particular piece of earth with its own history and its own future. Bottineau's future is uncertain, and that uncertainty is part of what makes it worth caring about. The neighborhoods whose futures are certain are usually the ones that have already been bought and sold and packaged. Bottineau is still becoming.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          The church steeples tell the story before the street signs do.
          Holy Cross, with its Gothic Revival tower rising above the
          bungalow rooftops. St. Constantine Ukrainian Catholic, its
          Byzantine dome a quiet assertion of a community that crossed
          an ocean to build something permanent. The churches of
          Bottineau were built by Polish and Ukrainian and Slovak
          immigrants who settled Northeast Minneapolis in the late 1800s
          and early 1900s, who worked in the mills and factories along
          the river, who saved their money and built houses and churches
          and social halls with the intensity of people who understood
          that a community is not given — it is constructed, brick by
          brick, generation by generation. A century later, the steeples
          still stand, the houses still stand, and the neighborhood has
          become something those founders could not have imagined — a
          place where their grandchildren&apos;s houses are being bought
          by Somali families and young graphic designers and everyone is
          still figuring out what comes next.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/bottineau/hero.webp"
        alt="Historic church steeple rising above residential blocks in the Bottineau neighborhood of Northeast Minneapolis"
        caption="Bottineau — where Eastern European church steeples still mark the skyline of a changing Northeast"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Bottineau, Minneapolis?">
        <Prose>
          <p>
            Bottineau is a residential neighborhood in Northeast
            Minneapolis, roughly bounded by Lowry Avenue NE to the north,
            Central Avenue NE to the east, 18th Avenue NE to the south,
            and the Mississippi River to the west. Home to approximately
            5,200 residents, it occupies a position in the middle of
            Northeast — close enough to the trendy parts to access the
            restaurants and breweries, far enough to retain the working-
            class character that defined the neighborhood for a century.
          </p>
          <p>
            The neighborhood is named after Pierre Bottineau, a
            French-Ojibwe fur trader and guide who played a significant
            role in early Minnesota history. The name is one of the few
            connections to the pre-settlement era in a neighborhood
            whose visible history begins with the Eastern European
            immigrants who built it — the churches, the housing stock,
            the commercial buildings along Central Avenue that once
            housed Polish delis and Ukrainian bakeries and Slovak social
            clubs.
          </p>
          <p>
            Today, Bottineau is in transition. The Eastern European
            heritage is visible in the built environment — the churches,
            the housing patterns, the street grid — but the population
            has diversified significantly. East African immigrants,
            Latino families, Southeast Asian communities, and young
            professionals attracted by Northeast&apos;s growing scene
            have joined the longtime residents who remain. The result
            is a neighborhood that is culturally layered — old and new,
            immigrant and American-born, working-class and aspiring —
            in ways that are messy and real and resistant to easy
            categorization.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Bottineau Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/bottineau/neighborhood-sign.webp"
          alt="Bottineau neighborhood sign in Minneapolis"
          caption="The Bottineau neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Bottineau History & Origins">
        <Prose>
          <p>
            The land that is now Bottineau is part of the ancestral
            homeland of the Dakota people, and later a place of
            significance for the Ojibwe as well. Pierre Bottineau, the
            neighborhood&apos;s namesake, was himself a product of the
            cultural crossroads that defined early Minnesota — born to
            a French-Canadian father and an Ojibwe mother, he navigated
            between worlds in a way that the neighborhood named for
            him would continue to do, in different forms, for the next
            two centuries.
          </p>
          <p>
            Northeast Minneapolis was settled primarily by Eastern
            European immigrants beginning in the 1880s and continuing
            through the early 20th century. Poles, Ukrainians, Slovaks,
            Czechs, and other communities came to work in the flour
            mills, sawmills, and factories that lined the Mississippi
            River. They settled on the east bank of the river, in the
            neighborhoods that would become Northeast, building ethnic
            enclaves organized around churches, social halls, and
            mutual aid societies. Bottineau was at the center of this
            settlement pattern.
          </p>
          <p>
            The churches were the most visible and enduring expressions
            of these communities. Holy Cross Catholic Church, founded by
            Polish immigrants, and St. Constantine Ukrainian Catholic
            Church were not just places of worship but the social and
            cultural centers of their respective communities — hosting
            weddings, funerals, festivals, and the daily life of immigrant
            families building new lives in a strange city. The
            architectural ambition of these churches — Gothic towers,
            Byzantine domes, stained glass imported from Europe — was a
            statement of permanence by people who had left everything
            behind and were determined to build something that would last.
          </p>
          <p>
            The housing stock from this era — bungalows, Foursquares,
            and modest frame houses built from the 1890s through the
            1940s — reflects the economic position of the families who
            built them: working-class, thrifty, and practical. The
            houses are small by modern standards, built close together
            on narrow lots, with the kind of solid construction that
            has allowed them to survive a century of Minnesota winters.
            Many still have the deep front porches, hardwood floors, and
            built-in cabinetry that mark them as products of an era when
            craftsmanship was expected even in modest homes.
          </p>
          <p>
            The second half of the 20th century brought gradual change.
            The children and grandchildren of the original Eastern
            European families moved to the suburbs, following the same
            trajectory as white ethnic communities across urban America.
            The neighborhood&apos;s population declined, the commercial
            corridors thinned, and some of the social institutions that
            had held the community together began to weaken. New
            residents — initially other working-class families, then
            immigrants from East Africa, Latin America, and Southeast
            Asia — filled the housing stock and began the process of
            building their own community within the framework the
            Eastern Europeans had left behind.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Bottineau">
        <Prose>
          <p>
            Living in Bottineau means living in a neighborhood where the
            history is visible on every block — in the church steeples
            that rise above the rooflines, in the housing stock that was
            built by immigrant craftsmen a century ago, in the street
            grid that was laid out when this was the edge of a young
            city. The residential blocks are dense by Minneapolis
            standards — narrow lots, houses close together, detached
            garages accessed by alleys — and the effect is a neighborhood
            with more human scale and more street life than the wider,
            more spread-out blocks of South Minneapolis.
          </p>
          <p>
            The diversity is real and layered. Elderly Polish and
            Ukrainian residents who have been in their homes for decades
            live alongside Somali and Oromo families, Latino households,
            and young professionals who work in the arts or tech or
            service industries. The neighborhood is not yet gentrified
            in the way that{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>
            {" "}or{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            {" "}have been, but the pressure is visible — new
            construction, renovated homes, the gradual replacement of
            hardware stores with coffee shops along Central Avenue.
          </p>
          <p>
            Central Avenue, running along the eastern edge, is
            Bottineau&apos;s commercial lifeline and one of the most
            culturally complex commercial corridors in the city. Within
            a few blocks you can find a Vietnamese restaurant, a Mexican
            grocery, a craft brewery, a halal market, and a Polish
            sausage shop — the layers of immigration and gentrification
            stacked on top of each other in real time. The avenue is
            Bottineau&apos;s connection to the broader Northeast scene,
            and its evolution — from ethnic commercial strip to
            trendy dining corridor — mirrors the neighborhood&apos;s
            own transformation.
          </p>
          <p>
            The river is a quieter presence. The Mississippi runs along
            Bottineau&apos;s western edge, accessible via trails and
            parkland. The riverfront here is less dramatic than the
            gorge in South Minneapolis but no less valuable — a place
            to walk, bike, and find the kind of quiet that a
            neighborhood full of people needs.
          </p>
        </Prose>
        <Quote
          text="My grandmother came from Poland and bought a house in Bottineau in 1952. I bought the house next door in 2019. The Polish bakery is gone, but there's a Somali restaurant where it was, and the bread is just as good. The neighborhood changes but it doesn't forget."
          cite="Bottineau resident"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Bottineau Food, Drink & Local Spots">
        <Prose>
          <p>
            Bottineau&apos;s food scene benefits from its position along
            Central Avenue — Northeast Minneapolis&apos;s primary
            commercial corridor and one of the most diverse food streets
            in the Twin Cities. The neighborhood itself doesn&apos;t
            have a dense concentration of restaurants, but the Central
            Avenue corridor provides access to a range of cuisines that
            reflects the area&apos;s layered immigration history.
          </p>
        </Prose>

        <ArticleSubsection title="Central Avenue Corridor">
          <PlaceCardComponent place={{ name: "Central Avenue NE", tag: "Northeast's Main Street", price: "$–$$$", description: "Central Avenue runs along Bottineau's eastern edge and is one of the most culturally diverse commercial corridors in the Twin Cities. The mix includes Vietnamese pho houses, Mexican taquerias, East African restaurants, Polish delis, craft breweries, cocktail bars, and everything in between. The avenue has been evolving rapidly — new restaurants and bars joining longtime establishments — and the food scene here is one of the best arguments for living in Northeast." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Neighborhood Spots">
          <Prose>
            <p>
              Within Bottineau&apos;s residential blocks, commercial
              options are more limited. Small corner stores, neighborhood
              bars, and the occasional restaurant serve the immediate
              community. The commercial activity is concentrated on
              Central Avenue rather than distributed through the
              residential grid, which means that dining out usually
              involves a walk or short drive to the avenue. The
              neighborhood&apos;s bars — some of them holdovers from
              the Eastern European era — offer cheap drinks and the kind
              of unpretentious atmosphere that is increasingly rare in a
              city where every new bar seems to require a cocktail
              program and a design concept.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The broader Northeast brewery and restaurant scene —
              including Dangerous Man Brewing, Indeed Brewing, Fair State
              Brewing, and dozens of restaurants — is accessible from
              Bottineau by bike or a short drive south along Central
              Avenue or into the Arts District. Bottineau residents
              benefit from Northeast&apos;s growing food reputation
              without paying the real estate premium that comes with
              living in the middle of it.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Bottineau">
        <Prose>
          <p>
            Bottineau has modest park space within its boundaries but
            benefits from proximity to the Mississippi River and the
            broader Northeast park system.
          </p>
        </Prose>

        <ArticleSubsection title="Mississippi Riverfront">
          <Prose>
            <p>
              The Mississippi River runs along Bottineau&apos;s western
              boundary, and the river trail system provides access to
              one of the city&apos;s best cycling and walking corridors.
              The trail connects south toward the Stone Arch Bridge and
              downtown, and north toward North Mississippi Regional Park
              and the Coon Rapids Dam. The riverfront here is less
              dramatic than the gorge downstream but offers wooded
              banks, quiet stretches, and views of the river that
              provide relief from the density of the residential blocks.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Bottineau Park & Neighborhood Parks">
          <Prose>
            <p>
              Bottineau Park, within the neighborhood, provides a
              community green space with a playground, playing fields,
              and a recreation center. It serves the daily needs of
              families — after-school play, weekend sports, summer
              programming — without being a destination park. Additional
              small parks and playgrounds are scattered through the
              neighborhood, providing the kind of distributed green
              space that makes a dense residential area livable.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Connected Trail System">
          <Prose>
            <p>
              The river trail and the Northeast street grid provide
              cycling connectivity to downtown (approximately 3–4 miles),
              Theodore Wirth Park to the west, and the broader Grand
              Rounds system. Bottineau is well-positioned for bike
              commuters and recreational cyclists, with flat terrain
              and relatively bike-friendly streets.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Bottineau Schools">
        <Prose>
          <p>
            Bottineau is served by Minneapolis Public Schools. Pillsbury
            Elementary and other Northeast schools serve elementary
            students. Northeast Middle School covers grades 6–8, and
            Edison High School is the comprehensive high school for
            Northeast Minneapolis.
          </p>
          <p>
            Edison High School is one of the stronger comprehensive
            high schools in the Minneapolis district, known for its
            diverse student body, solid academic programs, and range
            of extracurricular options. The school has been a
            stabilizing institution for Northeast and draws students
            from across the area.
          </p>
          <p>
            Charter schools and the district&apos;s open enrollment
            system provide additional options. The school landscape
            in Northeast is generally regarded as one of the better
            options within Minneapolis Public Schools, and families
            in Bottineau have access to a range of programs and
            approaches.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Bottineau Real Estate & Housing">
        <Prose>
          <p>
            Bottineau offers affordable housing with genuine character
            — a combination that is increasingly rare in Minneapolis.
            Median home sale prices ranged from roughly $235,000 to
            $335,000 in 2025, below the citywide median and below the
            prices in the more celebrated parts of Northeast. The
            housing stock — primarily 1890s–1940s bungalows, Foursquares,
            and frame houses — has the charm and craftsmanship of
            pre-war construction at prices that post-war suburbs can
            rarely match.
          </p>
          <p>
            At the lower end ($200,000–$260,000), homes typically need
            work — original kitchens, older systems, cosmetic updates.
            The mid-range ($260,000–$350,000) gets a well-maintained
            home with updates and period details. Above $350,000,
            properties are fully renovated with modern systems and
            finishes in historic shells.
          </p>
          <p>
            The rental market is active, with a mix of older apartment
            buildings and single-family rentals. Rents are affordable
            by Minneapolis standards but rising as the broader Northeast
            appreciation wave reaches Bottineau. Some new construction
            — primarily multi-family — has appeared along Central Avenue,
            adding density and changing the streetscape.
          </p>
        </Prose>

        <Quote
          text="I looked at every neighborhood in Northeast. The closer you get to the breweries and the arts district, the higher the prices. Bottineau has the same housing stock, the same access to Central Ave, and it costs forty thousand less. The only difference is that nobody has written a magazine article about us yet."
          cite="Recent Bottineau homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Bottineau">
        <Prose>
          <p>
            Bottineau earns a Walk Score of 65 and a Bike Score of 78,
            making it one of the more accessible Northeast neighborhoods
            for non-car transportation. Central Avenue provides a
            walkable commercial corridor, and the flat terrain and
            grid street pattern make cycling practical for daily errands
            and commuting.
          </p>
          <p>
            Metro Transit bus routes along Central Avenue provide
            frequent service to downtown Minneapolis, with ride times
            of approximately 20–30 minutes. Central Avenue is one of
            the better-served transit corridors in Northeast, and bus
            commuting is a viable daily option.
          </p>
          <p>
            Cycling to downtown is straightforward — approximately 3–4
            miles via the river trail or the Northeast street grid.
            The flat terrain makes bike commuting practical year-round
            for those willing to ride in winter.
          </p>
          <p>
            By car, downtown Minneapolis is 10–15 minutes. Columbia
            Heights is immediately north. MSP Airport is approximately
            20 minutes. Street parking is generally available on
            residential blocks, though the older, denser street grid
            means that parking is tighter than in the newer, more
            spread-out neighborhoods.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Bottineau sits squarely in the path of Northeast
            Minneapolis&apos;s ongoing transformation — the wave of
            investment, appreciation, and cultural change that has
            been reshaping the area for two decades and shows no
            sign of stopping.
          </p>
        </Prose>

        <ArticleSubsection title="Gentrification Wave">
          <Prose>
            <p>
              The gentrification of Northeast Minneapolis has been
              moving northward along Central Avenue, and Bottineau is
              in its current path. New restaurants, renovated buildings,
              and rising prices are reaching the neighborhood from
              the south, and the familiar pattern — artists and young
              professionals arrive, followed by investment, followed
              by displacement of existing residents — is underway.
              Bottineau has not yet tipped the way{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>
              {" "}has, but the trajectory is visible.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Cultural Transition">
          <Prose>
            <p>
              The Eastern European heritage that defined Bottineau for
              a century is fading. The elderly residents who remember
              when the church served as the center of community life
              are passing. The social clubs have closed or shrunk. The
              Polish delis and Ukrainian bakeries have been replaced
              by new businesses that serve new communities. This is
              not necessarily a loss — neighborhoods change, immigrant
              communities move on, new communities arrive — but it
              does mean that Bottineau is in a moment of cultural
              transition where the old identity has weakened and the
              new one has not yet fully formed.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Housing Pressure">
          <Prose>
            <p>
              Rising prices and new construction are changing who can
              afford to live in Bottineau. Long-term renters face
              increasing rents. Elderly homeowners on fixed incomes
              face rising property taxes. New buyers — often younger,
              whiter, and wealthier than existing residents — are
              outbidding working-class families for the neighborhood&apos;s
              affordable housing stock. The pattern is familiar across
              gentrifying neighborhoods nationwide, and the question
              in Bottineau — as everywhere — is whether the community
              can absorb change without losing the diversity and
              affordability that make it worth living in.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Bottineau FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
