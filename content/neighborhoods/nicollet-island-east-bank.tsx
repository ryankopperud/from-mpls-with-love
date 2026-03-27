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
    title: "Nicollet Island - East Bank, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Nicollet Island - East Bank, Minneapolis — historic Nicollet Island, St. Anthony Main, the riverfront, Victorian homes, boutique restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Nicollet Island - East Bank",
  deck: "Where Minneapolis began — a tiny neighborhood wrapped around a Mississippi River island, cobblestone streets, Victorian mansions, St. Anthony Main's riverfront dining, and a sense of history that no other Minneapolis address can touch.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Nicollet Island - East Bank?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Nicollet Island - East Bank" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Nicollet Island - East Bank, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$350K–$600K+", label: "Median home/condo sale price (2025 data)" },
      { value: "$1,300–$2,200", label: "Typical 1BR apartment rent (2025)" },
      { value: "90", label: "Walk Score" },
      { value: "92", label: "Bike Score" },
      { value: "72", label: "Transit Score" },
      { value: "45%", label: "Owner-occupied housing" },
      { value: "1 island", label: "Nicollet Island — only inhabited island in the Mississippi in Minneapolis" },
    ],
  },
  faq: [
    {
      question: "Is Nicollet Island - East Bank a good neighborhood in Minneapolis?",
      answer:
        "Nicollet Island - East Bank is one of the most desirable and unique neighborhoods in Minneapolis. It offers unmatched riverfront access, historic architecture, walkability to both downtown and Northeast, and a sense of place that is genuinely irreplaceable. The tradeoffs are high housing costs, limited inventory, and the tourist foot traffic along St. Anthony Main that comes with living in a historically significant and commercially active area. For people who value history, river proximity, and urban walkability, there is no better address in the city.",
    },
    {
      question: "Can you live on Nicollet Island?",
      answer:
        "Yes. Nicollet Island has a small number of residences — historic Victorian homes, the Nicollet Island Inn, and some residential units. The island is connected to the rest of Minneapolis by the Hennepin Avenue Bridge and the Merriam Street Bridge. Living on the island is a genuinely unique experience — you are on a Mississippi River island in the middle of a major city — but inventory is extremely limited and rarely turns over. When island properties come to market, they attract significant attention.",
    },
    {
      question: "What is St. Anthony Main?",
      answer:
        "St. Anthony Main is a commercial district on the east bank of the Mississippi River, centered on Main Street SE. The area features restaurants, shops, a movie theater (St. Anthony Main Theatre), and one of the best riverwalk promenades in Minneapolis, with direct views of the Stone Arch Bridge, St. Anthony Falls, and the downtown skyline. The district occupies historic mill-era buildings that have been adapted for commercial use, giving it an architectural character distinct from the rest of Minneapolis.",
    },
    {
      question: "Is Nicollet Island - East Bank, Minneapolis safe?",
      answer:
        "Nicollet Island - East Bank is among the safer neighborhoods in Minneapolis. The area&apos;s small size, high property values, and significant foot traffic from residents and visitors contribute to a generally safe environment. The riverfront areas and St. Anthony Main are well-trafficked and well-lit. Standard urban precautions apply, particularly around the Hennepin Avenue Bridge and in quieter areas after dark, but the neighborhood&apos;s crime rates are consistently below the city average.",
    },
    {
      question: "How much does it cost to live in Nicollet Island - East Bank?",
      answer:
        "This is one of the more expensive neighborhoods in Minneapolis. Condos and homes range from the mid-$300,000s to well over $600,000, with island properties and riverfront units commanding premiums. Rentals range from approximately $1,300 to $2,200 for a one-bedroom, with luxury riverfront units pushing higher. The cost reflects the location — centrality, river access, historic character, and walkability — and the limited supply.",
    },
    {
      question: "Where exactly is Nicollet Island - East Bank?",
      answer:
        "The neighborhood encompasses Nicollet Island (in the Mississippi River between downtown and Northeast) and a portion of the east bank of the Mississippi, including the St. Anthony Main district along Main Street SE. It is bounded roughly by the river to the west and south, Hennepin Avenue to the north, and the railroad tracks to the east. It sits at the junction of downtown Minneapolis, Marcy-Holmes, and the broader Northeast arts district.",
    },
    {
      question: "What is the Nicollet Island Inn?",
      answer:
        "The Nicollet Island Inn is a boutique hotel and restaurant located on Nicollet Island in a restored 1893 limestone building that originally served as a door and sash factory. The inn offers 24 rooms with views of the Minneapolis skyline and the Mississippi River, and its restaurant serves upscale American cuisine in a historic setting. It is one of the most distinctive lodging options in Minneapolis and a popular venue for weddings and events.",
    },
    {
      question: "Can you walk to downtown Minneapolis from Nicollet Island - East Bank?",
      answer:
        "Yes. Downtown Minneapolis is directly across the Hennepin Avenue Bridge, making it a 10-to-15-minute walk from most points in the neighborhood. The Stone Arch Bridge, a pedestrian and bicycle bridge, also connects the east bank riverfront to the Mill District and downtown. This walkability to the city center, combined with the neighborhood&apos;s own commercial amenities at St. Anthony Main, is one of its defining advantages.",
    },
    {
      question: "What is the Stone Arch Bridge?",
      answer:
        "The Stone Arch Bridge is a former Great Northern Railway bridge across the Mississippi River, built in 1883 and converted to a pedestrian and bicycle bridge in 1994. It is one of the most iconic landmarks in Minneapolis, offering views of St. Anthony Falls, the downtown skyline, and the historic milling district. The bridge connects the east bank (Nicollet Island - East Bank) to the Mill District and downtown, and it is one of the most photographed locations in the city.",
    },
  ],
  nearby: [
    { name: "Marcy-Holmes", slug: "marcy-holmes", description: "Dinkytown and the east bank of campus" },
    { name: "St. Anthony West", slug: "st-anthony-west", description: "Historic village feel on the east bank" },
    { name: "Logan Park", slug: "logan-park", description: "Northeast arts district and creative energy" },
    { name: "Downtown East", slug: "downtown-east", description: "The riverfront side of downtown Minneapolis" },
    { name: "North Loop", slug: "north-loop", description: "Warehouse district turned dining destination" },
  ],
  closing: {
    title: "What Makes Nicollet Island - East Bank Irreplaceable",
    paragraphs: [
      "There is no other place in Minneapolis — and very few places in any American city — where you can stand on a Mississippi River island, look at a waterfall that powered the Industrial Revolution, walk across a 140-year-old stone bridge, and be in the middle of a functioning downtown in fifteen minutes. Nicollet Island - East Bank holds the origin story of Minneapolis in its geography: the falls that made the mills possible, the river that carried the lumber, the island that watched it all happen. Other neighborhoods have better bars or cheaper houses or more parking. None of them have this.",
      "The neighborhood is small enough that it could be dismissed as a novelty — an island, a cobblestone street, a handful of Victorian houses preserved from demolition by stubborn residents and historical designation. But the people who live here know that it is something more than a museum piece. It is a neighborhood where the river is not a background feature but the organizing principle, where the sound of water over the falls is audible from the front porch, where the Stone Arch Bridge is not a tourist attraction but the way you walk home. Minneapolis started here, and the city would be something less without the reminder.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a warm evening in July, the Stone Arch Bridge is crowded with
          joggers, couples, and tourists holding their phones up to capture
          St. Anthony Falls in the golden light. Below the bridge, the
          Mississippi drops over the only natural waterfall on the entire
          river — the falls that made Minneapolis a city. To the left, the
          downtown skyline rises behind the ruins of the old flour mills. To
          the right, Nicollet Island sits in the middle of the river like
          something out of a 19th-century painting: a cluster of Victorian
          houses, mature trees, a stone inn built from a Civil War-era
          factory, all of it surrounded by moving water and the sound of a
          city that grew up around it and never managed to replace it. This
          is where Minneapolis started. It is still here.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/nicollet-island-east-bank/hero.webp"
        alt="Nicollet Island and the Stone Arch Bridge on the Mississippi River in Minneapolis"
        caption="Nicollet Island and the east bank riverfront — where Minneapolis began"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Nicollet Island - East Bank, Minneapolis?">
        <Prose>
          <p>
            Nicollet Island - East Bank is a small, historically rich
            neighborhood that straddles the Mississippi River at the site of
            St. Anthony Falls — the geographic feature that made Minneapolis
            possible. The neighborhood encompasses Nicollet Island itself,
            the only inhabited island in the Minneapolis stretch of the
            Mississippi, and a section of the east bank riverfront that
            includes the St. Anthony Main commercial district, one of the
            city&apos;s most distinctive dining and entertainment corridors.
          </p>
          <p>
            With roughly 2,500 residents in a compact area, Nicollet Island -
            East Bank is defined by its relationship to the river more than
            any other neighborhood in Minneapolis. The falls, the bridges —
            including the Stone Arch Bridge, one of the most iconic landmarks
            in the city — and the historic mill-era architecture create a
            sense of place that cannot be manufactured or replicated. The
            neighborhood sits at the junction of downtown Minneapolis,
            Northeast, and the University of Minnesota area, giving it a
            centrality that its small size might not suggest.
          </p>
          <p>
            The housing stock ranges from the Victorian homes on Nicollet
            Island — preserved through decades of political battles and
            historical designation — to condominiums and apartments in
            converted industrial buildings along the east bank. It is an
            expensive neighborhood by Minneapolis standards, reflecting its
            unique geography, its walkability, and the simple economic
            reality of limited supply in a location that cannot be
            duplicated.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Nicollet Island - East Bank Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/nicollet-island-east-bank/neighborhood-sign.webp"
          alt="Nicollet Island - East Bank neighborhood sign in Minneapolis"
          caption="The Nicollet Island - East Bank neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Nicollet Island - East Bank History & Origins">
        <Prose>
          <p>
            The story of Nicollet Island - East Bank is inseparable from the
            story of Minneapolis itself. St. Anthony Falls — the only natural
            waterfall on the Mississippi River — was known to the Dakota people
            as Owamniyomni, a place of great spiritual significance and
            practical importance. The falls and the surrounding riverbanks
            were part of the homeland of the Mdewakanton Dakota, who used the
            area for fishing, gathering, and ceremony for centuries before
            European arrival.
          </p>
          <p>
            European and American interest in the falls began with military
            and commercial expeditions in the early 19th century. Fort
            Snelling, established downstream at the confluence of the
            Mississippi and Minnesota Rivers in 1819, brought the first
            permanent American military presence to the area. By the 1840s
            and 1850s, settlers had recognized the falls&apos; potential for
            powering sawmills and flour mills, and the town of St. Anthony
            was established on the east bank — making it the first
            settlement at the site, predating Minneapolis on the west bank.
          </p>
          <p>
            Nicollet Island, named for French geographer Joseph Nicolas
            Nicollet, who mapped the upper Mississippi in the 1830s, sat in
            the middle of the river between the two developing towns. The
            island was developed in the mid-19th century with homes,
            businesses, and light industry. Some of the Victorian houses
            that survive on the island today date from the 1870s and 1880s,
            making them among the oldest residential structures in
            Minneapolis.
          </p>
          <p>
            The milling era — roughly 1870 to 1930 — transformed the east
            bank into an industrial powerhouse. Lumber mills and then flour
            mills lined the riverbanks, powered by the falls through an
            elaborate system of canals and raceways. Minneapolis became the
            flour milling capital of the world, and the east bank was where
            much of that industry operated. The workers who staffed the mills
            lived nearby, in the neighborhoods that would become
            St. Anthony East,{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy-Holmes
            </Link>
            , and the eastern sections of this neighborhood.
          </p>
          <p>
            The decline of milling in the mid-20th century left the east bank
            waterfront underutilized and, in places, derelict. The St. Anthony
            Main commercial development, beginning in the 1970s and 1980s,
            repurposed some of the mill-era buildings into restaurants, shops,
            and entertainment venues, creating the district that exists today.
            Nicollet Island, which had been threatened with demolition and
            redevelopment at various points, was preserved through community
            activism and historical designation, saving its Victorian
            architecture and its identity as one of the most unusual
            residential locations in any American city.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Nicollet Island - East Bank">
        <Prose>
          <p>
            Living in Nicollet Island - East Bank means living at the
            intersection of history and the present in a way that most
            neighborhoods can only gesture at. On Nicollet Island itself, the
            experience is singular — you are on an island in the Mississippi
            River, surrounded by water, connected to the rest of the city by
            bridges but separated from it by geography. The Victorian houses
            sit on tree-lined streets that feel more like a Hudson Valley
            village than a Midwestern city. The Nicollet Island Inn, a
            restored limestone building at the island&apos;s southern end,
            anchors a sense of institutional permanence. The sound of the
            falls is audible. The light off the river enters the windows.
          </p>
          <p>
            On the east bank, the character shifts to a more conventional
            but still distinctive urban neighborhood. The St. Anthony Main
            corridor along Main Street SE provides restaurants, a movie
            theater, and a riverwalk that is one of the best public spaces
            in Minneapolis. Residential buildings — a mix of converted
            industrial structures and newer construction — line the streets
            behind the commercial strip. The proximity to downtown, which
            is visible across the river and reachable on foot in fifteen
            minutes, gives the east bank a sense of centrality without the
            intensity of living in downtown itself.
          </p>
          <p>
            The tourist presence is the trade-off. The Stone Arch Bridge, the
            falls overlook, and St. Anthony Main attract significant visitor
            traffic, particularly in summer. If you live on Nicollet Island,
            you accept that people will be taking photographs of your
            neighborhood as a leisure activity. For most residents, the trade
            is worth it — the scenery is genuinely extraordinary, and the
            visitors leave when the sun goes down.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy-Holmes
            </Link>{" "}
            to the south and{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>{" "}
            to the north share the east bank&apos;s historic character, though
            neither has the riverfront access or the island geography that
            defines this neighborhood. The{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>{" "}
            across the river offers a different flavor of riverfront urban
            living — more polished, more commercial, more expensive at the
            top end.
          </p>
        </Prose>
        <Quote
          text="I walk across the Stone Arch Bridge to work every morning. Every morning. And I still look at the falls. You don't get used to it."
          cite="Nicollet Island - East Bank resident, 8 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Nicollet Island - East Bank Food, Drink & Local Spots">
        <Prose>
          <p>
            The food and drink scene in Nicollet Island - East Bank is
            anchored by the St. Anthony Main commercial district, which
            offers a concentration of dining options in converted mill-era
            buildings along the riverfront. The vibe is upscale-casual rather
            than neighborhood-dive, reflecting the area&apos;s tourism draw
            and the demographics of its residents and visitors. The quality
            is generally high, and the riverfront setting gives even a
            routine dinner a sense of occasion.
          </p>
        </Prose>

        <ArticleSubsection title="Dining Along St. Anthony Main">
          <PlaceCardComponent place={{ name: "Nicollet Island Inn", tag: "Upscale American", price: "$$$", description: "95 Merriam St. The inn&apos;s restaurant serves upscale American cuisine in a restored 1893 limestone building on Nicollet Island. The setting — river views, historic architecture, candlelit dining rooms — is among the most distinctive in Minneapolis. Brunch is particularly popular. The food is polished without being pretentious, and the wine list is thoughtfully curated. Reservations recommended, especially for river-view tables." }} />
          <PlaceCardComponent place={{ name: "Aster Cafe", tag: "Cafe / Bar", price: "$–$$", description: "125 Main St. SE. Aster occupies a prime riverfront location with a patio overlooking the Stone Arch Bridge and the Minneapolis skyline. The menu is cafe fare — sandwiches, salads, small plates — elevated by the setting and executed with enough care that repeat visits are rewarded. The bar program is solid. Live music features regularly. Aster is one of those places where the view does half the work and the kitchen does the other half, and neither half disappoints." }} />
          <PlaceCardComponent place={{ name: "Vic&apos;s", tag: "Modern American", price: "$$–$$$", description: "201 Main St. SE. A modern American restaurant in the St. Anthony Main complex, Vic&apos;s offers a menu that spans brunch, lunch, and dinner with an emphasis on local sourcing and seasonal preparation. The dining room is stylish without being intimidating, and the river-facing windows provide views that justify the premium pricing." }} />
          <PlaceCardComponent place={{ name: "St. Anthony Main Theatre", tag: "Independent Cinema", price: "$", description: "115 Main St. SE. Not a restaurant, but an essential part of the neighborhood&apos;s cultural ecosystem. This independent movie theater screens art house, foreign, and limited-release films in a riverfront setting. The programming is curated rather than commercial, and the experience of watching a film in a mill-era building next to the Mississippi is something the multiplex cannot replicate." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Options">
          <Prose>
            <p>
              The broader dining options of Northeast Minneapolis — the
              brewery taprooms, the restaurants along Central Avenue and
              University Avenue — are within a short walk or bike ride.{" "}
              <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
                St. Anthony West
              </Link>{" "}
              and{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>{" "}
              extend the restaurant options northward, and downtown
              Minneapolis is across the bridge for everything else. For
              daily groceries, residents typically drive or bike to stores
              along Central Avenue or use downtown options.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Nicollet Island - East Bank">
        <Prose>
          <p>
            Nicollet Island - East Bank is one of the best-positioned
            neighborhoods in Minneapolis for outdoor recreation, with the
            Mississippi River, the falls, and a network of parks and trails
            providing year-round access to the natural landscape within the
            urban core.
          </p>
        </Prose>

        <ArticleSubsection title="Nicollet Island Park">
          <Prose>
            <p>
              Nicollet Island itself is largely parkland, maintained by the
              Minneapolis Park and Recreation Board. The island&apos;s northern
              section is a public park with walking paths, mature trees, and
              river views from both sides. The park is a quiet retreat from
              the city — surprisingly so, given that downtown Minneapolis is
              visible from its shores. In fall, the island&apos;s tree canopy
              produces some of the most spectacular foliage color in the city.
              In winter, the frozen river and snow-covered paths offer a
              solitude that feels improbable in the middle of a major metro.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Stone Arch Bridge & Falls Overlook">
          <Prose>
            <p>
              The Stone Arch Bridge — a former railroad bridge built in 1883,
              converted to pedestrian and bicycle use in 1994 — is the
              neighborhood&apos;s most iconic outdoor asset. The bridge
              provides direct views of St. Anthony Falls, the only natural
              waterfall on the Mississippi, and connects the east bank to
              the Mill District and downtown. The falls overlook at the
              eastern end of the bridge offers one of the most photographed
              views in Minneapolis. The bridge is also a critical
              transportation link for bike commuters and pedestrians.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/nicollet-island-east-bank/stone-arch-bridge.webp"
            alt="The Stone Arch Bridge over the Mississippi River with St. Anthony Falls visible, Minneapolis"
            caption="The Stone Arch Bridge — Minneapolis's most iconic pedestrian crossing and the neighborhood's front door"
          />
        </ArticleSubsection>

        <ArticleSubsection title="East Bank Trail & Riverwalk">
          <Prose>
            <p>
              The east bank riverwalk extends along Main Street SE, providing
              a paved path with views of the river, the bridges, and the
              downtown skyline. The trail connects to the broader Mississippi
              River trail system and the Grand Rounds Scenic Byway, offering
              running, biking, and walking routes that extend for miles in
              both directions. The St. Anthony Falls Heritage Trail adds an
              interpretive layer, with markers explaining the milling history
              and geological significance of the falls.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Father Hennepin Bluff Park">
          <Prose>
            <p>
              This small park near the Hennepin Avenue Bridge offers elevated
              views of the river, the falls, and Nicollet Island. It is named
              for Father Louis Hennepin, the French missionary who is credited
              with being the first European to document St. Anthony Falls in
              1680. The park is a neighborhood green space with benches,
              walking paths, and a perspective on the falls that is different
              from — and in some ways more dramatic than — the view from the
              Stone Arch Bridge.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Nicollet Island - East Bank Schools">
        <Prose>
          <p>
            Nicollet Island - East Bank does not have schools within its
            boundaries, reflecting its small size and limited residential
            population. Families use Minneapolis Public Schools options
            through the district&apos;s enrollment system, with nearby
            schools in{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy-Holmes
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>{" "}
            serving the area.
          </p>
          <p>
            Pratt Community School and Marcy Open School are among the
            elementary options that have historically served families in
            this part of Minneapolis. For middle and high school, students
            access options through Minneapolis Public Schools&apos; enrollment
            system, with Northeast Middle School and Edison High School
            serving the quadrant.
          </p>
          <p>
            The University of Minnesota campus is immediately adjacent to
            the south, giving the neighborhood a connection to higher
            education that shapes its demographics and daily rhythms.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Nicollet Island - East Bank Real Estate & Housing">
        <Prose>
          <p>
            Nicollet Island - East Bank has one of the most distinctive and
            expensive housing markets in Minneapolis, driven by geography
            that cannot be replicated and a supply that is inherently limited.
            The neighborhood offers several distinct housing types, each with
            its own character and price range.
          </p>
        </Prose>

        <ArticleSubsection title="Nicollet Island Homes">
          <Prose>
            <p>
              The Victorian homes on Nicollet Island are the most unique
              residential properties in Minneapolis. Built in the 1870s and
              1880s, restored and maintained to historical standards, and
              situated on a Mississippi River island, these homes offer
              something that simply does not exist elsewhere. When they come
              to market — which is rare — they command premium prices that
              reflect their irreplaceability. This is not a market for
              comparison shopping; each island home is essentially a unique
              property with no comparable.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="East Bank Condos & Apartments">
          <Prose>
            <p>
              The east bank housing stock is a mix of converted industrial
              buildings — loft-style condominiums in former mill and warehouse
              structures — and newer residential construction. Condos range
              from the mid-$300,000s for smaller units to well over $600,000
              for riverfront properties with views. The converted industrial
              units offer exposed brick, high ceilings, and the kind of
              architectural character that new construction imitates but
              cannot match. Rental apartments in newer buildings range from
              approximately $1,300 to $2,200 for a one-bedroom, with
              premium units pushing higher.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Market Dynamics">
          <Prose>
            <p>
              Inventory is limited and demand is steady, which keeps prices
              elevated relative to the citywide median. The neighborhood
              attracts buyers who prioritize location and character over
              square footage and parking — the riverfront, the walkability,
              and the historic setting are the draws, and they are draws
              that do not depreciate. Investment properties are present but
              less dominant than in some neighboring areas, as owner-occupants
              tend to value the location enough to compete aggressively for
              available units.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/nicollet-island-east-bank/nicollet-island.webp"
        alt="Victorian homes on Nicollet Island in the Mississippi River, Minneapolis"
        caption="Victorian homes on Nicollet Island — the most unique residential address in Minneapolis"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Nicollet Island - East Bank">
        <Prose>
          <p>
            Nicollet Island - East Bank is an exceptionally walkable and
            bikeable neighborhood. The Walk Score of 90 reflects the density
            of commercial options at St. Anthony Main, the proximity to
            downtown Minneapolis (a 10-to-15-minute walk across the Hennepin
            Avenue Bridge or the Stone Arch Bridge), and the general
            compactness of the neighborhood. The Bike Score of 92 is among
            the highest in the city, reflecting the river trail connections
            and the Stone Arch Bridge&apos;s role as a major cycling route.
          </p>
          <p>
            Transit access is solid. Multiple Metro Transit bus routes serve
            the area, and the Green Line light rail is accessible via a short
            walk to stations in downtown or along the University of Minnesota
            campus. The Transit Score of 72 reflects good but not exceptional
            service — this is a neighborhood where walking and biking are the
            primary modes for most trips.
          </p>
          <p>
            Driving is easy for trips outside the immediate area, with
            Interstate 35W and Highway 65 accessible within minutes. Parking
            in the neighborhood varies — residential streets offer on-street
            parking, but the St. Anthony Main area can be congested on
            evenings and weekends. Garage parking is available in some
            residential buildings but is not universal. The neighborhood
            rewards car-lite living more than most places in Minneapolis.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in Nicollet Island - East Bank">
        <Prose>
          <p>
            Nicollet Island - East Bank is a neighborhood where change is
            more incremental than transformative, largely because the physical
            constraints — the river, the island, the historic designations —
            limit the scale of new development. The primary tensions revolve
            around the management of the riverfront as a public resource
            versus a commercial asset, the preservation of historic structures
            against the economics of maintenance, and the ongoing evolution
            of St. Anthony Main as a commercial district.
          </p>
          <p>
            The St. Anthony Main area has seen some commercial turnover as
            restaurants and shops adapt to changing tastes and economics.
            The challenge is maintaining a tenant mix that serves both
            residents and the significant visitor traffic without becoming
            exclusively tourist-oriented. Some longtime businesses have been
            replaced by concepts that lean more heavily toward the visitor
            market, a trend that residents watch with mixed feelings.
          </p>
          <p>
            Riverfront management is the larger question. The Minneapolis
            Park and Recreation Board, the Army Corps of Engineers, and
            various city and state agencies share jurisdiction over different
            aspects of the riverfront and the falls, creating a governance
            landscape that is as complex as the geography. How the riverfront
            is maintained, improved, and accessed — and who benefits — is a
            question that will shape the neighborhood for decades. For now,
            the historic character and natural beauty remain intact, and the
            neighborhood&apos;s small, engaged resident population works to
            keep it that way.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Nicollet Island - East Bank FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection
        title={data.closing.title}
        paragraphs={data.closing.paragraphs}
      />
    </>
  );
}

const guide: NeighborhoodGuide = {
  data,
  Content,
};

export default guide;
