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
    title: "Camden Industrial, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Camden Industrial, Minneapolis — an industrial district along the Mississippi River in North Minneapolis, its role in the city's economy, nearby residential neighborhoods, and what's here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Camden Industrial",
  deck: "An industrial district along the Mississippi where the city still makes things — rail yards, manufacturing, and commercial operations on land that has been working since the mills ran. Not a neighborhood for living, but a neighborhood that keeps Minneapolis running.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Camden Industrial?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Character & Land Use" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Camden Industrial, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "<100", label: "Residents (US Census / ACS estimates)" },
      { value: "N/A", label: "Median home sale price (minimal residential)" },
      { value: "N/A", label: "Typical apartment rent (minimal residential)" },
      { value: "15", label: "Walk Score" },
      { value: "40", label: "Bike Score" },
      { value: "20", label: "Transit Score" },
      { value: "Industrial", label: "Primary land use designation" },
      { value: "Mississippi River", label: "Western boundary" },
    ],
  },
  faq: [
    {
      question: "Is Camden Industrial a residential neighborhood?",
      answer:
        "No. Camden Industrial is an industrial district with very few residents. The area is zoned primarily for industrial and commercial use, and the land is occupied by manufacturing facilities, warehouses, rail yards, and commercial operations. There is minimal housing stock, and the neighborhood does not function as a residential community. People who work in Camden Industrial live in surrounding neighborhoods like Webber-Camden, Lind-Bohanon, and Marshall Terrace.",
    },
    {
      question: "Where is Camden Industrial in Minneapolis?",
      answer:
        "Camden Industrial is in the northern section of Minneapolis, along the Mississippi River. It is bounded roughly by the river to the west, the residential neighborhoods of Webber-Camden and Lind-Bohanon to the east and north, and Marshall Terrace to the south. The area sits between the river and the residential Camden community, serving as the industrial counterpart to the surrounding residential neighborhoods.",
    },
    {
      question: "What kinds of businesses are in Camden Industrial?",
      answer:
        "Camden Industrial hosts a mix of manufacturing, distribution, and commercial operations. The businesses range from small fabrication shops and building material suppliers to larger industrial operations that take advantage of the rail access and Mississippi River proximity. The area also includes some auto repair, recycling, and storage operations. The specific businesses change over time, but the industrial character has been consistent for over a century.",
    },
    {
      question: "Can you access the Mississippi River from Camden Industrial?",
      answer:
        "River access in Camden Industrial is limited by the industrial land use along the riverbanks. Unlike the park-lined riverfront in other parts of Minneapolis, this stretch of the Mississippi is primarily occupied by commercial and industrial properties. Some public access points exist along the river, and the broader trail system passes nearby, but direct recreational river access is not a feature of this area. The residential neighborhoods to the east, particularly Webber-Camden, offer better river park access.",
    },
    {
      question: "Is Camden Industrial safe?",
      answer:
        "Camden Industrial is a low-traffic area outside of business hours. Because it is an industrial district rather than a residential or commercial neighborhood, there is limited pedestrian activity, especially at night and on weekends. The area is generally unremarkable from a safety perspective during business hours when workers are present, but the isolation of an industrial district after hours requires standard awareness. Crime that does occur tends to be property-related — theft from businesses, vehicle break-ins — rather than violent.",
    },
    {
      question: "Are there environmental concerns in Camden Industrial?",
      answer:
        "As with many industrial districts, some sites in Camden Industrial have histories of contamination from manufacturing processes, fuel storage, and industrial waste. Environmental remediation has been addressed on some parcels, while others remain in various stages of assessment and cleanup. The Minneapolis Health Department and the Minnesota Pollution Control Agency monitor sites in the area. Proximity to the Mississippi River makes environmental stewardship particularly important, as contamination can affect water quality downstream.",
    },
    {
      question: "Will Camden Industrial ever become residential?",
      answer:
        "The conversion of industrial land to residential use is a possibility that the city of Minneapolis considers as part of its comprehensive planning process. Some former industrial areas in Minneapolis — notably the North Loop — have successfully transitioned to residential and mixed-use districts. However, Camden Industrial&apos;s active industrial operations, environmental remediation needs, and the city&apos;s interest in maintaining industrial employment land make a near-term residential conversion unlikely. Any transition would take decades and require significant public investment.",
    },
    {
      question: "What neighborhoods are near Camden Industrial?",
      answer:
        "Camden Industrial is bordered by several residential neighborhoods. Webber-Camden is to the east, Lind-Bohanon to the north, and Marshall Terrace to the south. The broader Camden community — Victory, Folwell, and the other North Minneapolis neighborhoods — is accessible via the road network. The Mississippi River forms the western boundary, with North Minneapolis neighborhoods across the river accessible via bridges.",
    },
  ],
  nearby: [
    { name: "Webber - Camden", slug: "webber-camden", description: "Residential Camden along the river" },
    { name: "Lind - Bohanon", slug: "lind-bohanon", description: "Northern Minneapolis residential neighborhood" },
    { name: "Marshall Terrace", slug: "marshall-terrace", description: "Small NE riverfront residential enclave" },
    { name: "Victory", slug: "victory", description: "Residential North Minneapolis neighborhood" },
  ],
  closing: {
    title: "What Camden Industrial Means to Minneapolis",
    paragraphs: [
      "Camden Industrial is not a neighborhood in the way most people use the word. Nobody walks their dog here on a Sunday morning. There is no corner coffee shop, no neighborhood association potluck, no debate about school boundaries. What there is, is work — the physical, unglamorous work of manufacturing, storing, transporting, and processing the materials that a functioning city requires. The rail yards move freight. The fabrication shops cut metal. The distribution centers load trucks. None of it is photogenic, and none of it is optional.",
      "In a city that is increasingly oriented around knowledge work, remote employment, and service industries, places like Camden Industrial are easy to overlook. They occupy valuable riverfront land that some will inevitably want to convert to condominiums and breweries. But the people who work here — the machinists, the drivers, the warehouse workers — are part of the economic ecosystem that makes Minneapolis function, and the land they work on is doing something that the city needs done. Whether Minneapolis continues to value industrial employment land in an era of deindustrialization is a policy question with no easy answer, but Camden Industrial is still, for now, doing what it was built to do.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          At seven in the morning on a Thursday, a semi-truck backs into a
          loading dock along a potholed industrial road in Camden Industrial.
          The driver has been making this delivery for six years — building
          materials, always building materials — and he could navigate the
          approach in his sleep. Across the road, a fabrication shop is
          already lit up, the sound of a plasma cutter audible through the
          corrugated steel walls. A rail spur runs behind both properties,
          its tracks stained with rust but still in use. The Mississippi
          River is a few hundred yards to the west, but you would not know
          it from here — the riverbank is blocked by industrial properties
          that have occupied this land since before anyone thought
          riverfronts should be parks. This is Camden Industrial. Nobody
          lives here. Plenty of people work here.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/camden-industrial/hero.webp"
        alt="Industrial buildings and rail yards in Camden Industrial, Minneapolis"
        caption="Camden Industrial — where Minneapolis still makes and moves things along the Mississippi"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Camden Industrial, Minneapolis?">
        <Prose>
          <p>
            Camden Industrial is an industrial district in the northern
            section of Minneapolis, occupying a strip of land between the
            Mississippi River and the residential neighborhoods of the
            Camden community. With fewer than 100 residents, it is a
            neighborhood in name only — in practice, it is a working
            industrial zone where manufacturing, distribution, and
            commercial operations occupy land that has been dedicated to
            industry for more than a century.
          </p>
          <p>
            The district is characterized by warehouses, fabrication shops,
            rail spurs, storage yards, and the kind of utilitarian
            infrastructure that cities need but rarely celebrate. The
            Mississippi River forms the western boundary, but unlike the
            park-lined riverfront south of downtown, this stretch of river
            is occupied by industrial properties that predate the modern
            understanding of riverfronts as public amenities.
          </p>
          <p>
            Camden Industrial exists in the shadow of the residential Camden
            neighborhoods —{" "}
            <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
              Webber-Camden
            </Link>{" "}
            to the east,{" "}
            <Link href="/neighborhoods/lind-bohanon" className="text-[#2a9d8f] hover:underline">
              Lind-Bohanon
            </Link>{" "}
            to the north — serving as the industrial infrastructure that
            supports the broader community without participating in its
            residential life. The workers who staff the district&apos;s
            businesses drive in from surrounding neighborhoods and the
            broader metro, punch their shifts, and leave. The land stays,
            doing what it has always done.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Camden Industrial Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/camden-industrial/neighborhood-sign.webp"
          alt="Camden Industrial neighborhood sign in Minneapolis"
          caption="The Camden Industrial neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Camden Industrial History & Origins">
        <Prose>
          <p>
            Before European settlement, the riverbanks that now comprise
            Camden Industrial were part of the Dakota homeland — land used
            for travel, fishing, and seasonal habitation along the
            Mississippi. The river here was wide and navigable, qualities
            that would later make it attractive for industrial use.
          </p>
          <p>
            Industrial development along this stretch of the Mississippi
            began in the late 19th century, as Minneapolis&apos;s lumber
            and flour milling industries expanded beyond the St. Anthony
            Falls area. Rail lines were extended northward along the river,
            and the land between the tracks and the water was claimed for
            manufacturing, processing, and storage. The proximity to both
            rail and river transportation made Camden Industrial a logical
            location for businesses that needed to move heavy materials.
          </p>
          <p>
            Through the 20th century, the district evolved as industries
            changed — lumber gave way to building materials, flour milling
            to food processing, and heavy manufacturing to a mix of
            lighter industrial operations. The rail infrastructure remained,
            even as trucking became the dominant mode of freight
            transportation, and the district maintained its industrial
            character while the residential neighborhoods around it
            settled into more stable patterns.
          </p>
          <p>
            The deindustrialization trends of the late 20th and early 21st
            centuries affected Camden Industrial, as they affected
            industrial districts nationwide. Some businesses closed or
            relocated, leaving vacant parcels that have been slow to
            redevelop. Environmental contamination from decades of
            industrial use complicated the reuse of some sites. But the
            district has not emptied — a core of active industrial and
            commercial operations persists, and the land remains zoned
            and used for the purpose it has served for over a century.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Camden Industrial Character & Land Use">
        <Prose>
          <p>
            Camden Industrial&apos;s character is defined by its function.
            The landscape is utilitarian — flat, paved or graveled, dominated
            by low-slung industrial buildings, chain-link fencing, and the
            infrastructure of freight movement. There are no sidewalks in
            most of the district, no street trees, no design elements
            intended for aesthetic pleasure. The buildings are metal-sided
            or concrete block, built for durability and function rather
            than appearance.
          </p>
          <p>
            The businesses that operate here are varied but share a common
            profile: they need space, they need vehicle access, they may
            need rail access, and they do not need foot traffic. Building
            material suppliers, metal fabricators, recycling operations,
            auto repair shops, and distribution centers are typical
            tenants. The employment these businesses provide is
            blue-collar and essential — the kind of work that keeps a
            city&apos;s physical infrastructure maintained and supplied.
          </p>
          <p>
            The Mississippi River, though adjacent, is functionally
            inaccessible from most of Camden Industrial. The industrial
            properties extend to the riverbank, and there is no continuous
            public trail or park access along this stretch. This is one
            of the last sections of the Minneapolis riverfront where
            industrial use takes priority over public access — a fact
            that makes Camden Industrial both practically useful and
            philosophically interesting in a city that has invested
            heavily in reclaiming its riverfront as public space.
          </p>
        </Prose>
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Camden Industrial Food & Local Spots">
        <Prose>
          <p>
            Camden Industrial does not have restaurants, cafes, or bars.
            Workers in the district bring lunches, use food trucks that
            occasionally service the area, or drive to nearby commercial
            corridors for meals. The nearest dining options are in the
            surrounding residential neighborhoods —{" "}
            <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
              Webber-Camden
            </Link>{" "}
            and the broader Camden area provide the closest restaurants
            and convenience stores. This is a working district, not a
            commercial one, and the absence of food and drink options
            reflects that reality.
          </p>
        </Prose>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Camden Industrial">
        <Prose>
          <p>
            Camden Industrial has no parks or recreational facilities within
            its boundaries. The Mississippi River, while adjacent, is not
            publicly accessible along most of the district&apos;s riverfront
            due to industrial land use. For outdoor recreation, workers and
            any residents in the area use parks in the surrounding
            neighborhoods — Webber Park in Webber-Camden and the North
            Mississippi Regional Park to the north provide the nearest
            significant green spaces and river access.
          </p>
          <p>
            The broader Grand Rounds trail system passes near Camden
            Industrial, and the North Mississippi Regional Park trail
            network is accessible from the district&apos;s northern edge.
            These trails provide the closest recreational opportunities
            and connect to the larger park system that is one of
            Minneapolis&apos;s defining amenities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Camden Industrial Schools">
        <Prose>
          <p>
            There are no schools in Camden Industrial. The district&apos;s
            industrial character and near-absence of residential population
            make schools irrelevant to this area. Families in the
            surrounding residential neighborhoods use Minneapolis Public
            Schools options in the Camden community and the broader North
            Minneapolis area.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Camden Industrial Real Estate">
        <Prose>
          <p>
            Real estate in Camden Industrial is commercial and industrial
            rather than residential. The market consists of warehouse space,
            manufacturing facilities, storage yards, and commercial lots.
            Property values reflect the industrial zoning, the proximity to
            rail and river transportation, and the environmental condition
            of individual parcels — sites with contamination histories
            trade at discounts that reflect cleanup costs.
          </p>
          <p>
            There is no meaningful residential real estate market in Camden
            Industrial. The handful of residential structures that exist
            are anomalies rather than a market, and the area is not zoned
            for new residential development. Investors in Camden Industrial
            are purchasing industrial and commercial properties, not homes.
          </p>
        </Prose>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Camden Industrial">
        <Prose>
          <p>
            Camden Industrial is car-dependent by design. The district was
            built for freight movement and vehicle access, not pedestrian
            or transit use. The Walk Score of 15 and Transit Score of 20
            reflect the near-total absence of pedestrian infrastructure
            and public transit service within the district. Workers drive
            to their jobs, and trucks drive to the loading docks.
          </p>
          <p>
            The road network connects Camden Industrial to the broader
            city — Lowry Avenue, Dowling Avenue, and connecting north-south
            streets provide access to the freeway system and to the
            surrounding residential neighborhoods. The infrastructure is
            built for trucks, with wide streets, limited signalization,
            and the generous turning radii that commercial vehicles require.
          </p>
          <p>
            Biking through Camden Industrial is possible but not comfortable —
            the roads are not designed for cycling, and the truck traffic
            requires attention. The nearby river trails provide better
            cycling options for those passing through the area.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in Camden Industrial">
        <Prose>
          <p>
            The primary tension in Camden Industrial is the same tension
            that affects industrial districts in cities nationwide: the
            competition between continued industrial use and the pressure
            to convert valuable land — particularly riverfront land — to
            higher-value residential and commercial uses. Minneapolis has
            seen this transformation play out dramatically in the North
            Loop, where former warehouse and rail yard land became one of
            the most desirable residential neighborhoods in the city.
          </p>
          <p>
            Camden Industrial&apos;s future depends on policy decisions
            about the value of industrial employment land. The city&apos;s
            comprehensive plan recognizes the importance of maintaining
            industrial districts that provide blue-collar employment, but
            market forces push toward conversion as land values rise and
            industrial businesses face pressure to relocate to cheaper
            suburban locations. Environmental remediation costs add
            complexity — cleaning up contaminated sites is expensive, and
            the economics often favor the higher-value residential and
            commercial uses that can absorb those costs.
          </p>
          <p>
            For now, Camden Industrial remains what it has been: an
            industrial district doing industrial work on industrial land.
            Whether that continues for another decade or another century
            is a question that the city, the market, and the surrounding
            communities will answer together.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Camden Industrial FAQ">
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
