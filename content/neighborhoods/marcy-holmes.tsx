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
    title: "Marcy Holmes, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Marcy Holmes, Minneapolis — the oldest neighborhood in the city, Dinkytown, the University of Minnesota, riverfront parks, student life, real estate, and what it's really like to live in the neighborhood where Minneapolis began in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Marcy Holmes",
  deck: "The oldest neighborhood in Minneapolis — where the city literally began at the Falls of St. Anthony, the University of Minnesota's east bank spills into Dinkytown's bookstores and late-night restaurants, the Mississippi carves limestone bluffs below century-old mansions, and the tension between student rental chaos and established residential life has been playing out for a hundred years without resolution.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Marcy Holmes?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Marcy Holmes" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Marcy Holmes, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$350K–$550K", label: "Median home sale price (2025 data)" },
      { value: "$950–$1,400", label: "Typical 1BR apartment rent (2025)" },
      { value: "85", label: "Walk Score" },
      { value: "92", label: "Bike Score" },
      { value: "68", label: "Transit Score" },
      { value: "1849", label: "Year the neighborhood was first settled" },
      { value: "50,000+", label: "University of Minnesota students nearby" },
    ],
  },
  faq: [
    {
      question: "Is Marcy Holmes a good neighborhood in Minneapolis?",
      answer:
        "Marcy Holmes is one of the most interesting and complicated neighborhoods in Minneapolis. It offers extraordinary riverfront access, proximity to the University of Minnesota, walkable commercial districts in Dinkytown and along East Hennepin, and some of the most beautiful residential blocks in the city. The complication is the student-rental divide: parts of the neighborhood closest to campus are dominated by student housing with all the noise and transience that implies, while the blocks closer to the river and further from campus are established, quiet, and genuinely beautiful. If you're considering Marcy Holmes, the specific block matters enormously.",
    },
    {
      question: "Is Marcy Holmes, Minneapolis safe?",
      answer:
        "Safety in Marcy Holmes varies by block and by context. The neighborhood's proximity to campus brings the usual university-area issues: bike theft, late-night noise, occasional car break-ins, and alcohol-related incidents on weekend nights near Dinkytown. Violent crime is relatively low compared to citywide averages, but property crime is above average in the student-rental areas. The residential blocks away from campus are generally quiet and safe. The riverfront trails are well-used during daylight but less populated after dark. Exercise standard urban awareness, particularly in the Dinkytown commercial area on weekend nights.",
    },
    {
      question: "What is Dinkytown?",
      answer:
        "Dinkytown is a small commercial district at the intersection of 4th Street SE and 14th Avenue SE, directly adjacent to the University of Minnesota's east bank campus. It's a collection of restaurants, bookstores, shops, and bars that has served the university community since the early 20th century. The name's origin is debated — most likely it's a diminutive reference to the area's small scale compared to downtown. Dinkytown has produced an outsized cultural footprint: Bob Dylan lived in an apartment above what's now a restaurant during his brief time at the U of M in 1959-60. The district has changed significantly in recent years as older buildings have been replaced by student apartment towers, a transformation that has generated considerable community opposition.",
    },
    {
      question: "How much does it cost to live in Marcy Holmes?",
      answer:
        "Marcy Holmes has a split housing market. Student rentals near campus run $950–$1,400 for a one-bedroom, with many students renting rooms in shared houses for $500–$800 per month. Non-student apartments, particularly newer construction, run $1,200–$1,800 for a one-bedroom. For buyers, the range is wide: single-family homes in the residential core sell for $350,000–$550,000, with larger homes on the bluffs near the river reaching $600,000 or above. Condos range from $150,000 for older units to $400,000+ for riverfront or renovated properties. The neighborhood's proximity to the U of M and downtown makes it relatively expensive for its condition mix.",
    },
    {
      question: "What is the history of Marcy Holmes?",
      answer:
        "Marcy Holmes is the oldest neighborhood in Minneapolis. The area was first settled by European Americans in 1849 as part of the village of St. Anthony, which grew up around the Falls of St. Anthony — the only major waterfall on the Mississippi River. The falls powered the lumber and flour mills that built Minneapolis into a major city. The village of St. Anthony was incorporated in 1855 and merged with Minneapolis in 1872. The neighborhood's residential development spans from the 1850s through the early 1900s, with architectural styles ranging from pre-Civil War frame houses to Victorian mansions to early 20th century apartment buildings. The University of Minnesota's campus, established in 1851, has been the dominant institution in the area's life ever since.",
    },
    {
      question: "Is Marcy Holmes near the University of Minnesota?",
      answer:
        "Yes — Marcy Holmes borders the University of Minnesota's east bank campus directly. The campus edge runs along the neighborhood's southern and western boundaries. This proximity defines much of the neighborhood's character: student housing fills the blocks closest to campus, Dinkytown serves as the primary off-campus commercial district, and university traffic — foot, bike, bus, and car — flows through the neighborhood constantly during the academic year. The advantage is walkable access to university resources, events, and cultural programming. The disadvantage is the noise, parking pressure, and transience that come with living adjacent to a campus of 50,000 students.",
    },
    {
      question: "Where exactly is Marcy Holmes in Minneapolis?",
      answer:
        "Marcy Holmes is in Southeast Minneapolis, roughly bounded by the Mississippi River to the north and west, 15th Avenue SE to the east, and the University of Minnesota campus and railroad tracks to the south. It sits directly across the river from downtown Minneapolis and Nicollet Island, with the Hennepin Avenue Bridge and the 10th Avenue Bridge providing connections. The neighborhood includes the Dinkytown commercial district, the East Hennepin corridor, and the residential areas extending from the university campus north to the river bluffs.",
    },
    {
      question: "What happened to Dinkytown?",
      answer:
        "Dinkytown has undergone significant transformation over the past decade, driven primarily by the construction of large student apartment buildings that replaced older, smaller commercial structures. Longtime businesses — including some that had operated for decades — were displaced. The most controversial change was the 2014 demolition of several older buildings, including the former Dinkytowner Cafe space, to build a large mixed-use apartment complex. The changes generated organized opposition from residents and alumni who valued Dinkytown's independent, eclectic character. Today's Dinkytown is a mix of surviving legacy businesses and newer chain-oriented retail on the ground floors of apartment buildings. It still functions as a campus commercial district, but the character has shifted from funky and independent to more standardized.",
    },
    {
      question: "Can you see the Mississippi River from Marcy Holmes?",
      answer:
        "Yes — Marcy Holmes has some of the best Mississippi River views in Minneapolis. The neighborhood's northern edge sits on limestone bluffs above the river, and several streets dead-end at overlooks with dramatic views of the gorge, the Stone Arch Bridge, St. Anthony Falls, and the downtown skyline. Boom Island Park, at the neighborhood's northwestern tip, provides direct riverfront access. The Main Street SE corridor, running along the base of the bluffs, offers a different perspective — looking up at the bridges and across to Nicollet Island and the milling district. The river is not just scenery here; it's the reason this neighborhood exists.",
    },
    {
      question: "Is Marcy Holmes walkable?",
      answer:
        "Very. Marcy Holmes has a Walk Score of 85, reflecting its dense street grid, multiple commercial corridors, and proximity to the university campus. Dinkytown provides daily necessities — groceries, restaurants, a pharmacy — within walking distance for most residents. The East Hennepin corridor adds restaurants, bars, and services. The riverfront trail system is accessible on foot from anywhere in the neighborhood. Transit is solid, with multiple bus routes serving Hennepin Avenue, University Avenue, and the campus. The Bike Score of 92 is among the highest in Minneapolis, reflecting excellent cycling infrastructure and flat-to-moderate terrain.",
    },
  ],
  nearby: [
    { name: "Nicollet Island - East Bank", slug: "nicollet-island-east-bank", description: "Island living and the Hennepin Avenue bridge to downtown" },
    { name: "Como", slug: "como", description: "Quiet residential streets east of the U of M campus" },
    { name: "Prospect Park - East River Road", slug: "prospect-park-east-river-road", description: "The Witch's Hat tower and university-adjacent living" },
    { name: "St. Anthony West", slug: "st-anthony-west", description: "Historic mills and riverfront living near St. Anthony Main" },
    { name: "Logan Park", slug: "logan-park", description: "The creative engine of Nordeast and Art-A-Whirl" },
    { name: "University of Minnesota", slug: "university-of-minnesota", description: "The campus that shapes everything around it" },
  ],
  closing: {
    title: "What Makes Marcy Holmes Irreplaceable",
    paragraphs: [
      "Marcy Holmes is where Minneapolis started, and that origin story is not just historical trivia — it's written into the landscape. The falls are still there, diminished by the dam but still powerful enough to feel consequential. The limestone bluffs still rise above the river. The street grid still follows the logic of a mid-19th century village that expected to grow but couldn't quite imagine how much. This is a neighborhood that contains the entire arc of American urban development: from frontier settlement to industrial powerhouse to suburban flight to university expansion to the current uneasy mix of students and homeowners, renters and owners, preservation and demolition.",
      "What makes it irreplaceable is the layering. You can stand on the Hennepin Avenue Bridge and see the Falls of St. Anthony, the Stone Arch Bridge, the ruins of the flour mills, the downtown skyline, and the bluffs of Marcy Holmes all in a single view — and that view contains 175 years of urban history in one frame. You can walk from a block of student apartments playing loud music on a Thursday night to a block of century-old homes where retired professors tend their gardens, and the distance is three hundred yards. You can eat at a Dinkytown restaurant that Bob Dylan might have eaten at, and the food is still pretty good and still pretty cheap. That compression of time and experience and contradiction is what cities are supposed to be, and Marcy Holmes has more of it per square block than almost anywhere in Minneapolis.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Minneapolis began here. Not metaphorically — literally. In 1849,
          when the rest of what would become Minneapolis was still tallgrass
          prairie and oak savanna, people were already building houses and
          sawmills on the east bank of the Mississippi, just above the Falls
          of St. Anthony, in the neighborhood now called Marcy Holmes. The
          falls powered everything — lumber first, then flour — and the
          village that grew up around them became the seed from which the
          entire city sprouted. Today, 175 years later, Marcy Holmes is
          still defined by that geography: the river, the falls, the bluffs,
          and the University of Minnesota campus that arrived two years after
          the first settlers and never left. It is a neighborhood of
          limestone overlooks and student apartments, of Bob Dylan&apos;s
          ghost and new construction cranes, of quiet residential blocks
          that end at dramatic river gorge views and commercial strips that
          throb with campus energy. It is the oldest neighborhood in the
          city, and it is still figuring out what it wants to be.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/marcy-holmes/hero.webp"
        alt="The Mississippi River bluffs and residential streets of Marcy Holmes in Southeast Minneapolis, with the downtown skyline in the background"
        caption="Marcy Holmes — the oldest neighborhood in Minneapolis, perched on the bluffs above St. Anthony Falls"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Marcy Holmes, Minneapolis?">
        <Prose>
          <p>
            Marcy Holmes is a neighborhood in Southeast Minneapolis, bounded
            roughly by the Mississippi River to the north and west, 15th
            Avenue SE to the east, and the University of Minnesota campus
            and railroad tracks to the south. It is the oldest continuously
            settled neighborhood in the city, with roots in the village of
            St. Anthony, which was established in 1849 and merged with
            Minneapolis in 1872. The neighborhood takes its name from two
            historical figures — William Marcy, a New York governor, and
            Oliver Wendell Holmes Sr. — though the connection is largely
            ceremonial; the names were assigned to school districts in the
            19th century and stuck.
          </p>
          <p>
            With roughly 6,500 residents — a number that fluctuates
            significantly with the academic calendar — Marcy Holmes is a
            mid-sized Minneapolis neighborhood with an outsized identity
            problem. It is simultaneously a university district, a historic
            residential area, a riverfront destination, and a commercial
            node. The blocks closest to campus are dominated by student
            rentals — converted houses and purpose-built apartment
            buildings that house undergraduates and graduate students during
            the school year and empty out in summer. The blocks closer to
            the river are something entirely different: established
            single-family homes, many of them a century old, on tree-lined
            streets that dead-end at bluff overlooks with views of the
            Mississippi gorge and the downtown skyline.
          </p>
          <p>
            The Dinkytown commercial district sits at the neighborhood&apos;s
            southern edge, serving as the primary off-campus hub for the
            University of Minnesota&apos;s 50,000-plus students. East
            Hennepin Avenue provides a second commercial corridor, connecting
            the neighborhood to the{" "}
            <Link href="/neighborhoods/nicollet-island-east-bank" className="text-[#2a9d8f] hover:underline">
              Nicollet Island - East Bank
            </Link>{" "}
            area and the Hennepin Avenue bridge to downtown. Between these
            corridors, the residential streets of Marcy Holmes hold an
            architectural mix that spans from pre-Civil War frame houses to
            early 20th century mansions to mid-century apartments to
            contemporary student housing towers. It is, in its way, a
            built history of Minneapolis itself.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Marcy Holmes Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/marcy-holmes/neighborhood-sign.webp"
          alt="Marcy Holmes neighborhood sign in Southeast Minneapolis"
          caption="The Marcy Holmes neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Marcy Holmes History & Origins">
        <Prose>
          <p>
            The land that is now Marcy Holmes is Dakota homeland —
            specifically the territory of the Mdewakanton band, for whom
            the Falls of St. Anthony (Owámniyomni) held deep spiritual
            significance. The falls were a gathering place, a site of
            ceremony, and a center of the river ecosystem that sustained
            Dakota life for centuries before European contact. The
            dispossession of the Dakota from this land — through a
            combination of treaties, coercion, and the violence of the
            U.S.-Dakota War of 1862 — is the foundational act upon which
            the entire city of Minneapolis was built.
          </p>
          <p>
            European-American settlement began in earnest in 1849, when
            Franklin Steele — who had claimed land on the east bank of the
            falls in 1838 — began developing the village of St. Anthony.
            Steele built the first dam and sawmill at the falls, and the
            village grew rapidly around the lumber industry. By 1855, St.
            Anthony was incorporated as a city, and the east bank was a
            bustling settlement of mills, boardinghouses, shops, and
            churches. The west bank — the future downtown Minneapolis —
            was developing simultaneously but separately; the two cities
            wouldn&apos;t merge until 1872.
          </p>
          <p>
            The University of Minnesota was established in 1851, just two
            years after the first settlers arrived. Its campus, initially
            modest, grew to dominate the southern portion of what would
            become Marcy Holmes. The university&apos;s presence has been
            the single most powerful force shaping the neighborhood for
            170 years — determining land use, driving housing demand,
            generating traffic, and creating the student-residential
            tension that defines the area to this day.
          </p>
          <p>
            The residential development of Marcy Holmes proceeded in waves.
            The earliest houses — some dating to the 1850s and 1860s —
            were modest frame structures built for mill workers and
            tradespeople. By the 1880s and 1890s, the bluffs above the
            river attracted wealthier residents who built larger homes —
            Victorians, Queen Annes, and later Craftsman-style houses —
            taking advantage of the dramatic river views. The neighborhood&apos;s
            architectural range is a direct record of this economic layering:
            workers&apos; cottages on the flats, mansions on the bluffs.
          </p>
          <p>
            The 20th century brought the transformation that still shapes
            the neighborhood: the conversion of single-family homes into
            student rentals. As the university grew — particularly after
            World War II, when the GI Bill flooded campuses with
            returning veterans — demand for off-campus housing surged.
            Homeowners near campus discovered they could earn more renting
            rooms to students than living in the houses themselves.
            Single-family homes were subdivided, boarding houses multiplied,
            and the blocks closest to campus gradually shifted from
            owner-occupied family homes to transient student housing. This
            process, which played out over decades, created the fundamental
            divide that characterizes Marcy Holmes today: the student zone
            near campus and the residential zone near the river, with a
            contested middle ground between them.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Marcy Holmes">
        <Prose>
          <p>
            Living in Marcy Holmes means living with a split personality.
            The neighborhood is not one place — it is at least two, and
            the experience of living here depends almost entirely on which
            side of the divide your address falls on. Near campus, life is
            loud, transient, and young. Couches appear on porches in
            September and on curbs in May. Recycling bins overflow with
            cans on Sunday mornings. The population turns over annually.
            Near the river, life is quiet, established, and older. Gardens
            are tended. Dogs are walked. The same families have lived on the
            same blocks for decades, sometimes generations.
          </p>
          <p>
            The student-rental zone — roughly the blocks between University
            Avenue SE and 5th Street SE, from 10th Avenue to 15th Avenue —
            has the energy and chaos of any college-adjacent neighborhood
            in America. The houses are a mix of converted single-family
            homes (often in rough shape, because landlords investing in
            student rentals don&apos;t always invest in maintenance) and
            newer purpose-built apartment buildings that have replaced
            older structures over the past decade. The vibe is utilitarian:
            these are places to sleep between classes and parties, not places
            people form lasting attachments to. If you&apos;re a student,
            this is convenient and affordable. If you&apos;re not a student,
            it&apos;s wearing.
          </p>
          <p>
            The residential zone — the blocks north of 5th Street SE,
            particularly along the river bluffs — is a different world
            entirely. Here, the housing stock is genuinely impressive:
            Victorian homes, Queen Annes, large Craftsman bungalows, and
            some Mid-century Modern gems, many of them well-maintained by
            long-term owners who chose this neighborhood for its river
            access, its mature trees, its walkable grid, and its proximity
            to both the university and downtown. The bluff streets — 2nd
            Street SE, University Avenue SE near the river — offer views
            that rival anything in the city. On a summer evening, standing
            at the end of a dead-end street looking out over the Mississippi
            gorge with the Stone Arch Bridge in the middle distance, you
            understand why people have been choosing to live here for 175
            years.
          </p>
          <p>
            The tension between these two zones is not new — it has been
            the defining social dynamic of Marcy Holmes for at least fifty
            years — but it has intensified as new student apartment towers
            have been built closer to the residential core. The Marcy
            Holmes Neighborhood Association has been one of the more active
            in the city, fighting to preserve the residential character of
            the non-student blocks, pushing back against upzoning, and
            advocating for enforcement of rental property codes. The
            results are mixed: some battles have been won, some lost, and
            the larger forces — the university&apos;s size, the economics
            of student housing — are difficult for a neighborhood
            organization to counter.
          </p>
        </Prose>

        <Quote
          text="I've lived on the same block for twenty-two years. My house is beautiful, my neighbors are wonderful, and I can walk to the river in four minutes. But I can also hear a house party three blocks away on a football Saturday. That's Marcy Holmes — paradise and purgatory on the same street grid."
          cite="Marcy Holmes homeowner, neighborhood meeting"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Marcy Holmes Food, Drink & Local Spots">
        <Prose>
          <p>
            Marcy Holmes&apos; food scene is shaped by its two constituencies:
            students who need cheap food fast, and residents who want
            something worth sitting down for. Dinkytown is the primary
            commercial district — a compact collection of restaurants, cafes,
            and shops that has served the university community since the
            early 1900s. East Hennepin Avenue provides a second corridor
            with a different character — more grown-up, more varied, and
            connected to the restaurant scene in neighboring{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            . The food here is not destination dining for the most part —
            it&apos;s neighborhood dining, which is its own category and
            its own virtue.
          </p>
        </Prose>

        <ArticleSubsection title="Dinkytown Institutions">
          <PlaceCardComponent place={{ name: "Al's Breakfast", tag: "Breakfast / Diner", price: "$", description: "413 14th Ave. SE. A fourteen-seat diner in a space barely wider than a hallway, Al's has been serving breakfast to university students and professors since 1950. The line extends out the door on weekend mornings. The blueberry pancakes are famous. The experience — sitting elbow-to-elbow at the counter, watching the cook work in a space the size of a walk-in closet — is the point as much as the food. Al's is the kind of place that could only survive in a university neighborhood, where the institution itself becomes the draw." }} />
          <PlaceCardComponent place={{ name: "Shuang Cheng", tag: "Chinese / Cantonese / Seafood", price: "$–$$", description: "1320 4th St. SE. A Cantonese seafood restaurant that has been a Dinkytown fixture for decades, beloved by the university's Chinese and Chinese-American community and by anyone who has discovered that the best Chinese food in Minneapolis is not in a food court. The live fish tanks are serious. The salt-and-pepper shrimp is definitive. Shuang Cheng is the kind of restaurant that rewards repeat visits and adventurous ordering." }} />
          <PlaceCardComponent place={{ name: "Mesa Pizza", tag: "Pizza / Late Night", price: "$", description: "1312 4th St. SE. The definitive late-night pizza slice in Dinkytown — the place you end up at 1 AM after leaving a bar, not because you planned to but because you always do. The pizza is exactly what it needs to be: hot, available, and consumed standing up. Mesa has been filling this role for years and shows no signs of stopping." }} />
          <PlaceCardComponent place={{ name: "Purple Onion", tag: "Cafe / Coffee / Deli", price: "$", description: "1301 University Ave. SE. A Dinkytown cafe and deli that occupies the casual middle ground between a coffee shop and a restaurant. Sandwiches, soups, coffee, and the particular atmosphere of a university-adjacent spot where people linger with laptops and textbooks. The Purple Onion is a Dinkytown survivor — still independently operated in a district that has lost many of its originals." }} />
        </ArticleSubsection>

        <ArticleSubsection title="East Hennepin & Beyond">
          <PlaceCardComponent place={{ name: "Kramarczuk's East European Sausage", tag: "Eastern European / Deli", price: "$–$$", description: "215 E. Hennepin Ave. Technically in St. Anthony West, but close enough to Marcy Holmes to claim — and too important to omit. Kramarczuk's has been making kielbasa, bratwurst, and pierogi since 1954. The deli case is a monument to Eastern European sausage craft. The bakery counter sells poppy seed rolls that taste like someone's grandmother made them. This is one of the essential food destinations in Minneapolis, period." }} />
          <PlaceCardComponent place={{ name: "Surdyk's", tag: "Liquor Store / Cheese Shop", price: "$$", description: "303 E. Hennepin Ave. The best liquor store in Minneapolis — and arguably the best cheese counter. Surdyk's has been operating since 1934, and the staff's knowledge of wine and spirits is genuine, not performative. The cheese and deli section could sustain a picnic that would embarrass a French countryside. Worth the walk from anywhere in Marcy Holmes." }} />
          <PlaceCardComponent place={{ name: "Pagoda", tag: "Chinese / Cantonese", price: "$–$$", description: "1417 University Ave. SE. Another long-running Chinese restaurant serving the university corridor, Pagoda offers reliable Cantonese and American-Chinese fare at student-friendly prices. Not flashy, not trying to be — just consistent food for the neighborhood." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Coffee & Study Spots">
          <Prose>
            <p>
              Given its university adjacency, Marcy Holmes has a dense
              concentration of coffee shops and study-friendly spaces.
              Espresso Royale has operated on campus and near Dinkytown,
              serving the caffeine-dependent student population. Dunn
              Brothers Coffee has a presence along the East Hennepin
              corridor. The coffee culture here is functional rather than
              artisanal — these are places designed for productivity, not
              pour-over ceremonies, and they serve their purpose well.
              During finals week, every seat in every coffee shop in Marcy
              Holmes is occupied by a student surrounded by a fortress of
              textbooks and laptop chargers. It&apos;s one of the
              neighborhood&apos;s more endearing rituals.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, River & Outdoors in Marcy Holmes">
        <Prose>
          <p>
            The Mississippi River is the defining outdoor feature of Marcy
            Holmes, and access to it is one of the neighborhood&apos;s
            greatest assets. The river runs along the neighborhood&apos;s
            northern and western edges, carving the limestone gorge that
            gives the bluff-top streets their dramatic views. The riverfront
            trail system — part of the Grand Rounds National Scenic
            Byway — provides paved paths for walking, running, and biking
            along the east bank, connecting south to the Stone Arch Bridge
            and the Mill City Museum, and north toward{" "}
            <Link href="/neighborhoods/nicollet-island-east-bank" className="text-[#2a9d8f] hover:underline">
              Nicollet Island
            </Link>{" "}
            and the St. Anthony Main area.
          </p>
        </Prose>

        <ArticleSubsection title="Boom Island Park">
          <Prose>
            <p>
              Boom Island Park, located at the northwestern tip of Marcy
              Holmes where the river bends, is the neighborhood&apos;s
              premier green space. The 27-acre park sits on a former log
              boom — the area where lumber mills stored logs floated down
              the river — and offers walking paths, a boat launch, picnic
              areas, and some of the best views of the downtown skyline
              from the east bank. The park connects to the riverfront trail
              system and to Nicollet Island via a pedestrian bridge. On
              summer evenings, Boom Island fills with joggers, cyclists,
              families, and people who have discovered that you can see
              the downtown skyline reflected in the river from a park bench
              that costs nothing and requires no reservation.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The River Gorge & Bluffs">
          <Prose>
            <p>
              The Mississippi River gorge through Marcy Holmes is a
              geological and aesthetic drama that most Minneapolis residents
              don&apos;t fully appreciate. The limestone bluffs rise fifty
              to a hundred feet above the river, creating a canyon landscape
              that feels improbable in a Midwestern city. Several streets in
              Marcy Holmes dead-end at the bluff edge, offering unobstructed
              views of the gorge, the river, the bridges, and the skyline.
              The East River Flats — a park along the river at the base
              of the bluffs, accessible via a steep path — provides direct
              river access for paddling and fishing. The gorge is part of
              the Mississippi National River and Recreation Area, a
              National Park Service unit that protects 72 miles of the
              river corridor through the Twin Cities.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Holmes Park & Van Cleve Park">
          <Prose>
            <p>
              Holmes Park, at the corner of 5th Street SE and 7th Avenue
              SE, is a small neighborhood park with a playground and open
              green space — nothing dramatic, but well-used by families in
              the area. Van Cleve Park, slightly east and shared with the{" "}
              <Link href="/neighborhoods/como" className="text-[#2a9d8f] hover:underline">
                Como
              </Link>{" "}
              neighborhood, is larger and offers athletic fields, a wading
              pool, and a community playground. Neither park is a
              destination, but both serve the basic neighborhood function of
              providing green space in an area where private yards are small
              and the river, while close, requires a walk or bike ride to
              reach.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Marcy Holmes Schools">
        <Prose>
          <p>
            Schools in Marcy Holmes exist in the shadow of the University of
            Minnesota — not because the university runs them, but because
            the university&apos;s presence shapes the demographics and
            dynamics of every school in the area. The student population
            skews the neighborhood young and transient, which means the
            number of school-age children per block is lower than in more
            family-oriented neighborhoods.
          </p>
          <p>
            Marcy Open School, the neighborhood&apos;s signature public
            school, is a K-8 open school within Minneapolis Public Schools
            that uses a progressive, child-centered educational model. The
            open school approach — emphasizing project-based learning,
            multi-age grouping, and student choice — attracts families
            from across the city, not just the neighborhood. Marcy Open has
            a committed parent community and a reputation as one of the
            more distinctive public school options in Minneapolis. Test
            scores reflect the school&apos;s diverse student body and
            alternative pedagogy — they don&apos;t top the rankings but
            don&apos;t fully capture what the school is doing, either.
          </p>
          <p>
            For high school, students in the area are served by Edison
            High School in Northeast Minneapolis or can apply to magnet
            and citywide options including South High and Southwest High.
            The university itself provides supplementary educational
            resources — libraries, museums, lectures, and programs — that
            are available to neighborhood residents and add an intellectual
            infrastructure that few neighborhoods can match.
          </p>
          <p>
            Families choosing Marcy Holmes are generally choosing it for
            reasons other than schools — the riverfront, the walkability,
            the proximity to the university and downtown. The schools are
            adequate to good, but they&apos;re not the draw. This is honest,
            and worth stating directly.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Marcy Holmes Real Estate & Housing">
        <Prose>
          <p>
            The Marcy Holmes housing market is a study in contrasts. The
            same neighborhood contains student rental houses that haven&apos;t
            been updated since the 1970s and century-old mansions on the
            bluffs that sell for over half a million dollars. Understanding
            the market requires understanding the geography: proximity to
            campus depresses owner-occupancy rates and property conditions,
            while proximity to the river elevates them.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Marcy Holmes">
          <Prose>
            <p>
              The owner-occupied market is concentrated in the residential
              blocks north of 5th Street SE, particularly along the river
              bluffs. Single-family homes here — Victorians, Queen Annes,
              Craftsman bungalows, and some early 20th century foursquares —
              sell in the $350,000 to $550,000 range, with exceptional
              properties on the bluffs reaching $600,000 or above.
              These homes tend to be larger and more architecturally
              significant than typical Minneapolis housing stock, reflecting
              the neighborhood&apos;s origins as an affluent residential
              district. The premium is for the combination of historic
              character, river access, walkability, and proximity to
              downtown and the university.
            </p>
            <p>
              Condos and townhomes offer an alternative entry point.
              Older condo conversions in the neighborhood start in the
              $150,000–$250,000 range. Newer construction — particularly
              along East Hennepin — runs $300,000 to $450,000. The condo
              market attracts a mix of young professionals, empty nesters
              who want to stay near the university, and investors renting
              to graduate students or staff.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              The rental market in Marcy Holmes is dominated by the
              student housing sector. One-bedroom apartments near campus
              rent for $950 to $1,400, with newer buildings at the higher
              end. Rooms in shared student houses rent for $500 to $800
              per month. The non-student rental market — concentrated in
              the northern part of the neighborhood — runs $1,200 to
              $1,800 for a one-bedroom, with two-bedrooms at $1,500 to
              $2,200.
            </p>
            <p>
              The student rental market creates a distinctive economic
              dynamic: landlords can charge per-bedroom rates that exceed
              the per-unit rates of comparable apartments in other
              neighborhoods, because students are willing to share
              living spaces in ways that non-students are not. A four-bedroom
              house rented at $700 per room generates $2,800 per month —
              more than the same house would fetch as a single-family
              rental. This math is the engine that drives the conversion
              of owner-occupied homes to student rentals, and it is very
              difficult to reverse.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="I looked at buying in Marcy Holmes and loved the bluff-top streets. But three blocks toward campus, the houses had mattresses on the porches. You really have to know which blocks are which." cite="Minneapolis homebuyer, 2024" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Marcy Holmes">
        <Prose>
          <p>
            Marcy Holmes is one of the more connected neighborhoods in
            Minneapolis, benefiting from its position between the university
            campus and downtown. The Walk Score of 85 reflects genuine
            pedestrian utility: most daily needs are accessible on foot via
            Dinkytown or East Hennepin. The Bike Score of 92 is outstanding,
            reflecting the university&apos;s extensive cycling infrastructure,
            the riverfront trail system, and relatively flat terrain that
            makes bike commuting practical year-round (for those willing to
            ride in winter, which is a surprisingly large number of people
            in Minneapolis).
          </p>
          <p>
            Transit is solid by Minneapolis standards. Multiple Metro Transit
            bus routes serve the university campus and connect to downtown,
            with frequent service during the academic year. The Green Line
            light rail runs along Washington Avenue through the U of M
            campus, providing direct connections to downtown Minneapolis,
            the Midway area, and downtown St. Paul. The East Bank station
            is within walking distance of much of Marcy Holmes, making this
            one of the better transit-connected neighborhoods in the city.
          </p>
          <p>
            For drivers, the Hennepin Avenue Bridge and 10th Avenue Bridge
            provide direct connections to downtown. Interstate 35W is
            accessible via University Avenue or 4th Street. The commute to
            downtown is short — 5 to 10 minutes by car — and MSP Airport
            is reachable in 15 to 20 minutes via I-35W or Highway 55.
            Parking is the main driving headache: the student-heavy blocks
            are chronically short on parking, with permit restrictions that
            help but don&apos;t solve the problem. The residential blocks
            near the river have more breathing room, but game-day and
            event parking from the university can spill into the
            neighborhood.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Marcy Holmes has been in a state of tension for decades, and
            the tensions are intensifying rather than resolving. The
            fundamental conflict — between the university&apos;s
            insatiable demand for student housing and the residential
            neighborhood&apos;s desire to remain residential — is as old
            as the neighborhood association itself and shows no sign of
            reaching equilibrium.
          </p>
        </Prose>

        <ArticleSubsection title="The Dinkytown Transformation">
          <Prose>
            <p>
              The most visible change in Marcy Holmes over the past decade
              has been the transformation of Dinkytown. Several large
              student apartment buildings have been constructed on sites
              that previously held smaller commercial structures, replacing
              independent businesses with ground-floor retail spaces that
              tend to attract chains or sit vacant. The 2014 demolition
              of a block that included long-running Dinkytown businesses
              was a flashpoint that galvanized community opposition but
              ultimately didn&apos;t stop the development. Today&apos;s
              Dinkytown is taller, denser, and more corporate-feeling
              than the version that Bob Dylan knew — or even the version
              that existed ten years ago.
            </p>
            <p>
              The loss is real: Dinkytown&apos;s appeal was always its
              scrappy independence, its mix of weird little shops and
              cheap restaurants, its feeling of being a place that existed
              for the people who used it rather than the investors who
              owned it. That character is harder to maintain when the
              buildings cost hundreds of millions of dollars and the
              ground-floor retail has to justify Class A rents. Some
              legacy businesses survive — Al&apos;s Breakfast, Shuang Cheng —
              but the overall texture has shifted from independent to
              institutional.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Student Housing Expansion">
          <Prose>
            <p>
              The construction of purpose-built student apartment towers
              in and around Dinkytown has added hundreds of beds to the
              neighborhood. The argument for this development is that
              concentrating students in purpose-built housing takes
              pressure off the older housing stock — fewer single-family
              homes converted to student rentals, less wear on the
              existing building fabric. The argument against is that the
              towers bring additional density, traffic, and nightlife
              impact to a neighborhood that was already struggling with
              those issues, and that the developers who build them are
              primarily motivated by the per-bedroom economics of student
              housing rather than any concern for the neighborhood&apos;s
              long-term health.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Preservation Fight">
          <Prose>
            <p>
              The Marcy Holmes Neighborhood Association has been among the
              more assertive in the city in fighting to preserve the
              residential character of the non-student blocks. Efforts
              have included pushing for historic district designations,
              advocating for downzoning to prevent apartment construction
              on residential streets, and working with the city on rental
              property code enforcement. Some of these efforts have
              succeeded; others have been overridden by market forces and
              city policy, including the Minneapolis 2040 Plan, which
              allows greater density across the city. The tension between
              neighborhood preservation and citywide housing goals is
              real, and Marcy Holmes sits at one of its sharpest
              pressure points.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Marcy Holmes FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
