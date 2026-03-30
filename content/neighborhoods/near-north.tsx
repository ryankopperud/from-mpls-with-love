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
    title: "Near North, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Near North, Minneapolis — historic Black community, Broadway Avenue, Sumner Library, Homewood, housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Near North",
  deck: "The historic heart of Black Minneapolis — where generations of culture, faith, and community organizing have shaped a neighborhood that has endured disinvestment and broken promises while building something no outside force has been able to take away.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Near North?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Near North" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Near North, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$180K–$250K", label: "Median home sale price range (2025 data)" },
      { value: "1890s–1950s", label: "Era most homes were built" },
      { value: "60%+", label: "Black / African American population" },
      { value: "Broadway Ave", label: "Primary commercial corridor" },
      { value: "10 min", label: "Drive to downtown Minneapolis" },
      { value: "62", label: "Walk Score" },
      { value: "78", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Near North a good neighborhood in Minneapolis?",
      answer:
        "Near North is a neighborhood with deep history, strong community bonds, and genuine challenges. It is the historic center of Black life in Minneapolis, with cultural institutions, churches, and community organizations that have anchored the area for over a century. The neighborhood faces real issues — disinvestment, crime, and housing instability — but it also offers affordable housing, proximity to downtown, and a sense of community identity that is difficult to find elsewhere in the city.",
    },
    {
      question: "Is Near North, Minneapolis safe?",
      answer:
        "Near North has higher crime rates than many Minneapolis neighborhoods, particularly for violent crime. This is a documented reality that reflects decades of systemic disinvestment, not the character of the people who live here. Safety varies significantly by block and time of day. Many residents report feeling safe on their own streets while acknowledging broader neighborhood challenges. Community organizations and block clubs actively work on safety initiatives.",
    },
    {
      question: "What is Near North, Minneapolis known for?",
      answer:
        "Near North is known as the historic heart of Black Minneapolis. It is home to Sumner Library (one of the oldest libraries in the city), numerous historically Black churches, and the Broadway Avenue commercial corridor. The neighborhood has produced generations of community leaders, musicians, and activists. It is also, honestly, known for the challenges of poverty and crime that have resulted from decades of redlining, highway construction, and institutional neglect.",
    },
    {
      question: "How much do homes cost in Near North, Minneapolis?",
      answer:
        "Near North has some of the most affordable housing in Minneapolis, with median home sale prices ranging from roughly $180,000 to $250,000 in 2025. This reflects both opportunity and the effects of long-term disinvestment. Some homes require significant renovation. New construction and rehabbed properties can reach $300,000 or more. For buyers willing to invest in the community, the cost of entry is far below the citywide median.",
    },
    {
      question: "What is the history of Near North Minneapolis?",
      answer:
        "Near North became the center of Black life in Minneapolis in the early twentieth century, as discriminatory housing covenants and redlining restricted where Black families could live. The neighborhood developed a vibrant community with its own businesses, churches, jazz clubs, and cultural institutions. The construction of Interstate 94 in the 1960s destroyed hundreds of homes and businesses, devastating the community. Decades of disinvestment followed, and the neighborhood is still working to recover from those wounds.",
    },
    {
      question: "What schools serve Near North, Minneapolis?",
      answer:
        "Near North is served by Minneapolis Public Schools, including several elementary options and North High School, which has undergone significant restructuring in recent years. Families also access charter schools, magnet programs, and the district's open enrollment system. Educational outcomes in the area reflect the broader achievement gap that Minneapolis has struggled to close.",
    },
    {
      question: "Is Near North being gentrified?",
      answer:
        "Near North has seen some new development and investment, particularly along the Broadway corridor and near the edges closest to downtown. Whether this constitutes gentrification depends on who benefits. Long-term residents and community organizations have pushed for development that serves existing residents rather than displacing them. The tension between attracting investment and preserving affordability and community character is ongoing and deeply felt.",
    },
    {
      question: "Where exactly is Near North in Minneapolis?",
      answer:
        "Near North is located in North Minneapolis, roughly bounded by Plymouth Avenue to the south, Lowry Avenue to the north, the Mississippi River and Interstate 94 to the east, and Penn Avenue to the west. It sits directly north and west of downtown Minneapolis, making it one of the closest residential neighborhoods to the city center.",
    },
    {
      question: "What community resources are in Near North?",
      answer:
        "Near North has numerous community organizations, churches, and nonprofits that serve residents. The Sumner Library, Phyllis Wheatley Community Center, North Point Health and Wellness Center, and several historic Black churches provide services, gathering spaces, and organizing infrastructure. These institutions are the backbone of the neighborhood and have been for generations.",
    },
    {
      question: "Is Near North a good place to buy a home?",
      answer:
        "For buyers who want affordable homeownership in a neighborhood with deep roots and proximity to downtown, Near North offers genuine opportunity. Prices are well below the citywide median, and the community is welcoming to people who want to invest in the neighborhood long-term. Buyers should be clear-eyed about the challenges — deferred maintenance on older housing stock, higher crime rates, and ongoing disinvestment — but also about the genuine assets and the people who have made this neighborhood their home through everything.",
    },
  ],
  nearby: [
    { name: "Harrison", slug: "harrison", description: "Diverse community to the southwest, near Bryn Mawr" },
    { name: "Hawthorne", slug: "hawthorne", description: "Community organizing and residential blocks to the north" },
    { name: "Sumner - Glenwood", slug: "sumner-glenwood", description: "Mixed development near downtown's western edge" },
    { name: "Willard - Hay", slug: "willard-hay", description: "Residential North Minneapolis west of Penn Avenue" },
    { name: "North Loop", slug: "north-loop", description: "Rapidly developed warehouse district across I-94" },
  ],
  closing: {
    title: "What Makes Near North Irreplaceable",
    paragraphs: [
      "Near North is not a neighborhood you can understand from a drive-through or a crime statistic. It is a place that has been systematically denied the resources that other Minneapolis neighborhoods took for granted — and despite that, has produced culture, community, faith, resistance, and resilience that have shaped the entire city. The churches that have been here for a century are still here. The families that stayed when everyone told them to leave are still here. The organizers who fight for this neighborhood every single day are still here.",
      "This is not a neighborhood that needs saving. It is a neighborhood that needs what was taken from it — investment, respect, and the basic assumption that the people who live here deserve the same quality of life as people anywhere else in Minneapolis. Near North has earned that, many times over, and the fact that it has not received it says everything about the systems that govern American cities and nothing about the people who call this place home.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Sunday morning in Near North, the sound that carries farthest
          is singing. It comes from the churches — the ones that have been
          here since before the freeways, since before redlining had a name,
          since before the neighborhood became a case study in what happens
          when a city decides that some of its people matter less than
          others. A choir at Zion Baptist raises a hymn that has been sung
          in this building for eighty years. Down the block, a grandmother
          walks two kids to the corner store, waving at a neighbor on a
          porch. A man fixes a lawnmower in his driveway. The block is
          quiet, ordinary, alive — and if you only knew this neighborhood
          from the news, you would not recognize it. That gap between the
          headlines and the reality is one of the defining features of Near
          North, and understanding it is the first step toward understanding
          what this place actually is.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/near-north/hero.webp"
        alt="A tree-lined residential street in Near North Minneapolis on a summer morning"
        caption="Near North — a neighborhood shaped by history, faith, and community persistence"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Near North, Minneapolis?">
        <Prose>
          <p>
            Near North is a residential neighborhood in North Minneapolis,
            bounded roughly by Plymouth Avenue to the south, Lowry Avenue to
            the north, Interstate 94 and the Mississippi River to the east,
            and Penn Avenue to the west. It is home to approximately 4,500
            residents and is the historic center of Black life in
            Minneapolis — a community whose identity has been forged by over
            a century of culture, faith, organizing, and the consequences of
            systemic racism that the city is still reckoning with.
          </p>
          <p>
            Near North sits within the broader North Minneapolis community,
            alongside neighborhoods like{" "}
            <Link href="/neighborhoods/hawthorne" className="text-[#2a9d8f] hover:underline">
              Hawthorne
            </Link>
            ,{" "}
            <Link href="/neighborhoods/jordan" className="text-[#2a9d8f] hover:underline">
              Jordan
            </Link>
            ,{" "}
            <Link href="/neighborhoods/harrison" className="text-[#2a9d8f] hover:underline">
              Harrison
            </Link>
            , and{" "}
            <Link href="/neighborhoods/willard-hay" className="text-[#2a9d8f] hover:underline">
              Willard - Hay
            </Link>
            . When people in Minneapolis say &quot;the Northside,&quot; they
            often mean this broader area — but Near North, with its
            proximity to downtown and its concentration of historic
            institutions, occupies a particular place in that geography and
            in the city&apos;s conscience.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Near North Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/near-north/neighborhood-sign.webp"
          alt="Near North neighborhood sign in Minneapolis"
          caption="The Near North neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Near North History & Origins">
        <Prose>
          <p>
            The history of Near North is inseparable from the history of race
            in Minneapolis. In the late nineteenth and early twentieth
            centuries, the area was home to a mix of Scandinavian, Jewish,
            and Eastern European immigrants. As Minneapolis&apos;s Black
            population grew — drawn by railroad jobs, meatpacking work, and
            the promise of a northern city less overtly hostile than the Jim
            Crow South — discriminatory housing covenants and real estate
            practices funneled Black families into a small number of
            neighborhoods. Near North became the primary one.
          </p>
          <p>
            By the 1920s through 1950s, Near North had developed into a
            vibrant, self-contained Black community. Sixth Avenue North was
            the commercial and cultural spine — home to Black-owned
            businesses, barbershops, restaurants, and jazz clubs that drew
            musicians from across the Midwest. The Phyllis Wheatley
            Community Center, founded in 1924, became one of the most
            important Black community institutions in the Upper Midwest,
            providing services, organizing space, and cultural programming.
            Churches — Zion Baptist, Greater Friendship Missionary Baptist,
            and others — anchored the spiritual and social life of the
            community.
          </p>
          <p>
            The destruction came in stages. In the 1950s and 1960s, the
            construction of Interstate 94 tore through the heart of the Near
            North community, demolishing hundreds of homes and businesses
            and severing the neighborhood from downtown. The Rondo
            neighborhood in St. Paul suffered the same fate. In both cities,
            the highway was routed through Black communities — a pattern
            repeated in cities across America that was not coincidental. The
            loss was devastating: not just buildings, but the social fabric
            of a community, the proximity that made a neighborhood work, the
            businesses that had served it for decades.
          </p>
          <p>
            What followed was a cascade of disinvestment that has never been
            fully reversed. Banks redlined the neighborhood, refusing
            mortgages and business loans. Grocery stores, pharmacies, and
            retailers left. Housing stock deteriorated as owners — many of
            them absentee landlords who had purchased cheaply — deferred
            maintenance. The crack epidemic of the 1980s and 1990s brought
            violence and further destabilized blocks that were already
            struggling. Through all of this, the community persisted — the
            churches stayed, the organizers organized, the families who
            could afford to stay did — but the damage accumulated in ways
            that are still visible on every block.
          </p>
          <p>
            The murder of George Floyd in 2020 and the subsequent unrest
            brought renewed national attention to the systemic inequities
            that neighborhoods like Near North have endured. For many
            residents, the attention was both welcome and exhausting — the
            problems were not new, only newly visible to people who had not
            been paying attention.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Near North">
        <Prose>
          <p>
            Living in Near North means living with contradictions that most
            Minneapolis neighborhoods never have to hold. The block where
            you know every neighbor by name is three blocks from the
            intersection where a shooting happened last month. The church
            with the hundred-year history sits across from a vacant lot
            where a house used to be. The community garden that produces
            more tomatoes than the volunteers can eat is around the corner
            from the boarded-up storefront that nobody has invested in for
            a decade. These contradictions are not abstractions — they are
            the daily texture of life, and residents navigate them with a
            matter-of-factness that comes from long practice.
          </p>
          <p>
            The community here is tight in ways that wealthier neighborhoods
            rarely achieve. People know each other. Block clubs function as
            mutual aid networks. Church communities provide social services
            that the city does not. When something happens — a house fire,
            a family crisis, a shooting — the response comes from neighbors
            before it comes from institutions. This is not romanticizing
            hardship; it is describing what happens when a community has
            learned, through generations of experience, that it cannot rely
            on outside help to arrive on time or at all.
          </p>
          <p>
            The neighborhood is predominantly Black, but its demographics
            have diversified in recent decades. East African immigrant
            families — primarily Somali — have become a significant presence,
            adding new businesses, mosques, and cultural energy. Latino and
            Southeast Asian residents have also put down roots. The
            neighborhood&apos;s diversity is real but also layered with the
            complexities of different communities sharing space and
            resources in a neighborhood that has never had enough of either.
          </p>
          <p>
            There is pride here — quiet, persistent, hard-won. Not the
            booster pride of a neighborhood trying to brand itself, but the
            pride of people who stayed when they were told their neighborhood
            was worthless, who built community when institutions failed them,
            who raised children and buried elders and kept going. If you
            move to Near North, you will not be a spectator. The community
            will expect you to show up.
          </p>
        </Prose>
        <Quote
          text="People look at North Minneapolis and see what's wrong. We live here and see what's strong. Both things are true, but only one of them is the whole story."
          cite="Near North resident and longtime community organizer"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Near North Food, Drink & Local Spots">
        <Prose>
          <p>
            Near North&apos;s food scene is shaped by its community — it is
            not a dining destination in the way that Uptown or Northeast
            markets itself, but the food that exists here is real, rooted,
            and reflective of the people who live in the neighborhood. Soul
            food kitchens, Somali restaurants, corner stores that have been
            here for decades, and community-driven food initiatives all
            contribute to a food landscape that is modest in scale but rich
            in meaning. The neighborhood has also been a food desert for
            significant stretches of recent history, and efforts to address
            food access remain ongoing and imperfect.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Breaking Bread Cafe", tag: "Soul Food & Community", price: "$–$$", description: "1210 West Broadway Avenue. A soul food restaurant and community gathering space that serves as both a meal and a mission. Operated by the Appetite for Change food justice organization, Breaking Bread offers Southern-inspired dishes while providing job training for neighborhood residents. The fried catfish and collard greens are genuine, and the mission is backed by real work." }} />
          <PlaceCardComponent place={{ name: "North Market", tag: "Grocery & Community Hub", price: "$", description: "A community-driven effort to address Near North's food access challenges. The North Market provides groceries, fresh produce, and prepared foods in a neighborhood that has long been underserved by traditional grocery retailers. Its existence is itself a statement about what happens when communities organize around their own needs." }} />
          <PlaceCardComponent place={{ name: "Broadway Avenue Restaurants", tag: "Various", price: "$–$$", description: "Broadway Avenue hosts a rotating mix of small restaurants, takeout spots, and cafes — Somali restaurants serving sambusa and goat, soul food joints with catfish and mac and cheese, and corner spots that locals know by reputation rather than Yelp reviews. The commercial corridor has struggled with vacancy but also contains pockets of genuine culinary character." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Food access has been a persistent challenge in Near North.
              When grocery stores left, the gap was filled partially by
              corner stores and partially by community initiatives like
              community gardens and food co-ops. Appetite for Change, a
              North Minneapolis food justice organization, operates urban
              farms, cooking programs, and Breaking Bread Cafe as part of a
              broader effort to build food sovereignty in the neighborhood.
              These are not quaint urban farming projects — they are
              responses to a real crisis of access that conventional markets
              have not solved.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Near North">
        <Prose>
          <p>
            North Minneapolis has parks — good ones, with real history and
            genuine community significance. What it has lacked, historically,
            is the level of investment that the Minneapolis Park Board has
            directed toward parks in wealthier parts of the city. That
            disparity is a documented fact and a source of ongoing advocacy.
            But the parks that are here are used, loved, and central to
            daily life in ways that go well beyond recreation.
          </p>
        </Prose>

        <ArticleSubsection title="Sumner Field Park">
          <Prose>
            <p>
              Sumner Field is one of the oldest park spaces in North
              Minneapolis and has served the community through every era of
              the neighborhood&apos;s history. The park includes playing
              fields, a playground, and open green space. Its significance
              is as much historical as recreational — this is a place where
              community events, protests, and gatherings have happened for
              generations.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Farview Park">
          <Prose>
            <p>
              Farview Park sits near the center of North Minneapolis and
              includes a recreation center, outdoor pool, basketball
              courts, playing fields, and a playground. The rec center
              provides year-round programming for youth and adults, and the
              park is one of the most actively used spaces in the
              neighborhood. Summer evenings at Farview are a community
              gathering — kids playing, families grilling, neighbors
              catching up.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Mississippi River">
          <Prose>
            <p>
              Near North sits along the Mississippi River&apos;s western
              bank, and the riverfront offers trails, overlooks, and green
              space that are among the neighborhood&apos;s most
              underappreciated assets. The North Mississippi Regional Park,
              while not technically within Near North&apos;s boundaries,
              is accessible and provides a genuine natural retreat within
              the city. Efforts to improve Northside riverfront access and
              park quality have been ongoing and are beginning to yield
              results.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Near North Schools">
        <Prose>
          <p>
            Schools in Near North reflect the profound educational
            inequities that have defined Minneapolis for decades. The
            neighborhood is served by Minneapolis Public Schools, and the
            achievement gap between Black students in North Minneapolis and
            white students in Southwest Minneapolis is one of the widest
            and most persistent in the nation. This is not a reflection of
            the children or their families — it is a reflection of resource
            allocation, systemic racism, and decades of policy choices that
            have concentrated poverty while distributing opportunity
            unevenly.
          </p>
          <p>
            North High School, which serves the broader North Minneapolis
            area, has undergone multiple restructuring efforts in recent
            years as the district has attempted to address declining
            enrollment and outcomes. The school has passionate staff and
            community supporters but has struggled with the effects of
            poverty, instability, and inadequate resources. Many Near North
            families use the district&apos;s open enrollment system to
            access magnet programs and schools in other parts of the city.
            Charter schools provide additional options.
          </p>
          <p>
            Community-based educational organizations — after-school
            programs, tutoring initiatives, cultural education — fill gaps
            that the formal school system has not closed. These organizations
            are often run by Near North residents and reflect the
            neighborhood&apos;s tradition of building its own institutions
            when existing ones fail to serve its needs.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Near North Real Estate & Housing">
        <Prose>
          <p>
            Near North has some of the most affordable housing in
            Minneapolis — and that affordability tells a story. Median home
            sale prices have ranged from roughly $180,000 to $250,000 in
            2025, well below the citywide median. For buyers, this
            represents genuine opportunity: homeownership in a
            centrally-located Minneapolis neighborhood at a fraction of the
            cost of South or Southwest neighborhoods. For the neighborhood,
            the low prices reflect decades of disinvestment that have
            depressed property values and deterred the kind of investment
            that would raise them.
          </p>
          <p>
            The housing stock is mixed. Many homes date from the 1890s
            through 1950s — sturdy structures that have aged differently
            depending on the care they&apos;ve received. Well-maintained
            homes sit alongside properties with deferred maintenance and
            occasional vacancy. Some new construction and rehab work has
            been done by community development corporations and nonprofits
            working to create quality affordable housing. These efforts
            are meaningful but have not yet reached the scale needed to
            transform the neighborhood&apos;s overall housing conditions.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($120,000–$200,000), you&apos;re looking at
              smaller homes that likely need updating — new mechanicals,
              kitchen renovation, general modernization. The mid-range
              ($200,000–$300,000) gets you a well-maintained three-bedroom
              home or a recently rehabbed property. New construction,
              when available, can reach $300,000–$375,000. Duplexes and
              small multifamily properties are available and offer
              investment opportunities, though the rental market here is
              different from trendier neighborhoods.
            </p>
            <p>
              Homeownership rates in Near North are lower than in many
              Minneapolis neighborhoods, with a significant portion of
              housing occupied by renters. Absentee landlordship has been
              a persistent issue, and the quality of rental housing varies
              widely. Community organizations have pushed for stronger
              tenant protections and landlord accountability.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="You can buy a house here for what a garage costs in Southwest Minneapolis. The question isn't the price — it's whether the city will ever invest in this neighborhood the way it invests over there."
          cite="Near North homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Near North">
        <Prose>
          <p>
            Near North is close to downtown — ten minutes by car, and
            closer than many neighborhoods that are perceived as more
            central. The neighborhood earns a Walk Score of 62 and a Bike
            Score of 78, reflecting a street grid that is well-connected
            but commercial corridors that have gaps in services.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along Broadway
            Avenue, Plymouth Avenue, and Lyndale Avenue North, providing
            connections to downtown and other parts of the city. The bus
            service is functional but not as frequent as in more heavily
            invested corridors. Many residents rely on cars, though the
            neighborhood&apos;s flat terrain and grid streets make biking
            a practical option for those who choose it.
          </p>
          <p>
            Interstate 94, which borders the neighborhood to the east, is
            simultaneously Near North&apos;s connection to the regional
            highway system and the barrier that severed it from downtown.
            The highway provides quick car access to the rest of the metro
            but creates a physical and psychological wall between Near
            North and the city center — a daily reminder of the
            infrastructure decision that damaged the neighborhood more than
            any other single act.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Near North is a neighborhood where the tensions are not
            hypothetical or emerging — they are long-standing, deeply
            structural, and resistant to easy solutions. Being honest about
            what&apos;s changing here means being honest about what has
            not changed enough, and about the forces that continue to shape
            this community&apos;s possibilities.
          </p>
        </Prose>

        <ArticleSubsection title="Disinvestment and Its Consequences">
          <Prose>
            <p>
              The fundamental tension in Near North is the gap between what
              the neighborhood needs and what it receives. Decades of
              redlining, highway construction, and institutional neglect
              created a deficit of investment — in housing, in commercial
              corridors, in infrastructure, in services — that has never
              been fully addressed. Vacant lots dot the neighborhood where
              houses once stood. Commercial corridors have gaps where
              businesses should be. Basic services that wealthier
              neighborhoods take for granted — a nearby grocery store, a
              functioning commercial strip, well-maintained infrastructure
              — have been intermittent or absent.
            </p>
            <p>
              This is not a story of natural decline. It is the result of
              specific policy choices made by specific institutions over
              specific decades. The highway was routed here. The banks
              denied loans here. The grocery stores left here. The police
              treated residents here differently. Acknowledging this
              history is not an exercise in blame — it is a prerequisite
              for understanding why the neighborhood looks and functions
              the way it does, and for evaluating whether current efforts
              at change are addressing root causes or just symptoms.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime rates in Near North are higher than in most Minneapolis
              neighborhoods, and this is the issue that dominates outside
              perceptions. Violent crime — including gun violence — is a
              reality that affects residents&apos; daily lives and choices.
              The causes are systemic (concentrated poverty, lack of
              economic opportunity, inadequate services) but the effects
              are personal and sometimes devastating.
            </p>
            <p>
              Residents have complicated relationships with both crime and
              policing. Many want more effective public safety while
              simultaneously harboring deep distrust of the Minneapolis
              Police Department, whose relationship with North Minneapolis
              communities has been contentious for decades. Community-based
              safety initiatives — violence interrupters, youth programs,
              block clubs — represent an alternative approach, though their
              resources are limited compared to the scale of the challenge.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development Without Displacement">
          <Prose>
            <p>
              The most contested question in Near North is how to attract
              investment without displacing the people who have held the
              neighborhood together through its hardest years. New
              development is happening — mixed-use projects, housing rehabs,
              small business support — but every project raises the same
              question: who is this for? Long-term residents have watched
              other neighborhoods transform in ways that pushed out the
              people who made them worth transforming in the first place.
              The determination to avoid that outcome is strong, but the
              forces driving gentrification in proximity-to-downtown
              neighborhoods are powerful and not easily controlled by
              community organizing alone.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Community Resilience">
          <Prose>
            <p>
              Against all of this — the disinvestment, the crime, the
              displacement pressure — Near North&apos;s community
              organizations continue to function, adapt, and fight. Block
              clubs, churches, nonprofits, and informal networks of
              neighbors provide the infrastructure that holds the
              neighborhood together. This is not resilience as a buzzword
              — it is the daily, unglamorous work of people who refuse to
              give up on a place that has been given up on by too many
              institutions for too long.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Near North FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
