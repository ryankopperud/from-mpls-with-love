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
    title: "Mid - City Industrial, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Mid-City Industrial, Minneapolis — an industrial corridor between neighborhoods, rail infrastructure, commercial operations, and what's here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Mid - City Industrial",
  deck: "The industrial corridor that most Minneapolis residents drive through without noticing — a rail-defined strip of warehouses, commercial operations, and working land that sits between neighborhoods and connects them to nothing except the economy.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Mid-City Industrial?" },
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
    label: "Mid - City Industrial, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "<200", label: "Residents (US Census / ACS estimates)" },
      { value: "N/A", label: "Median home sale price (minimal residential)" },
      { value: "N/A", label: "Typical apartment rent (minimal residential)" },
      { value: "35", label: "Walk Score" },
      { value: "60", label: "Bike Score" },
      { value: "40", label: "Transit Score" },
      { value: "Industrial", label: "Primary land use designation" },
      { value: "Rail corridor", label: "Defining geographic feature" },
    ],
  },
  faq: [
    {
      question: "Is Mid-City Industrial a residential neighborhood?",
      answer:
        "Not meaningfully. Mid-City Industrial has a small number of residents — fewer than 200 — but functions primarily as an industrial and commercial district. The land is zoned for industrial use, and the character of the area is defined by warehouses, commercial operations, and rail infrastructure rather than housing. The few residences that exist are anomalies within an industrial landscape rather than a residential community.",
    },
    {
      question: "Where is Mid-City Industrial in Minneapolis?",
      answer:
        "Mid-City Industrial occupies a corridor in the central-south section of Minneapolis, roughly along the rail lines that run between the residential neighborhoods of South Minneapolis and the neighborhoods east of the Midtown Greenway corridor. It sits between multiple residential neighborhoods, functioning as a buffer zone defined by its industrial land use. The exact boundaries vary by source, but the rail corridor and the industrial parcels that line it are the defining features.",
    },
    {
      question: "What kinds of businesses are in Mid-City Industrial?",
      answer:
        "Mid-City Industrial hosts a diverse mix of commercial and industrial businesses. Warehousing and distribution operations, building supply companies, auto repair and body shops, metalworking and fabrication, food production and processing facilities, and various commercial services occupy the area. Some creative businesses and maker spaces have also established operations here, drawn by the affordable rents and flexible spaces that industrial buildings provide.",
    },
    {
      question: "Is Mid-City Industrial near the Midtown Greenway?",
      answer:
        "Yes. The Midtown Greenway — the popular bicycle and pedestrian trail that runs along a former rail corridor across South Minneapolis — passes near or through portions of Mid-City Industrial. The Greenway provides bike and pedestrian connectivity that contrasts with the district&apos;s otherwise car-dependent character. For cyclists commuting through the area, the Greenway offers a separated, safe route that avoids the truck traffic on industrial streets.",
    },
    {
      question: "Is Mid-City Industrial safe?",
      answer:
        "Mid-City Industrial is a low-traffic area outside of business hours. During the workday, when businesses are operating, the area is functional and unremarkable from a safety perspective. After hours and on weekends, the district is largely empty, with limited lighting and pedestrian traffic. Property crime — break-ins, theft from businesses, vehicle-related crime — is the primary concern. The Midtown Greenway corridor through or near the area is generally well-used during daylight hours but can feel isolated at night.",
    },
    {
      question: "Are there environmental concerns in Mid-City Industrial?",
      answer:
        "Industrial districts by definition carry environmental legacies, and Mid-City Industrial is no exception. Some parcels have contamination histories from manufacturing processes, petroleum storage, and industrial waste. Environmental assessment and remediation are governed by state and city regulations, and the costs of cleanup can significantly affect property values and redevelopment potential. The Minnesota Pollution Control Agency maintains records on sites with known contamination.",
    },
    {
      question: "What neighborhoods border Mid-City Industrial?",
      answer:
        "Mid-City Industrial borders several residential neighborhoods in South Minneapolis, including Longfellow, Standish, and other neighborhoods along the Midtown corridor. The industrial district functions as a buffer between residential areas, with the rail corridor providing a physical separation that is both a boundary and a transportation infrastructure. The adjacent residential neighborhoods are significantly different in character — tree-lined streets, single-family homes, neighborhood commercial nodes — from the industrial landscape of Mid-City.",
    },
    {
      question: "Will Mid-City Industrial become residential?",
      answer:
        "Conversion of Mid-City Industrial to residential or mixed-use development is possible but faces significant challenges. The active rail lines that define the corridor would need to be relocated or accommodated, environmental remediation of contaminated parcels would be required, and the city&apos;s interest in maintaining industrial employment land provides a policy counterweight to market pressure. The Midtown Greenway&apos;s popularity has generated interest in transit-oriented development along the corridor, which could affect the industrial area&apos;s future. For now, the district remains industrial.",
    },
  ],
  nearby: [
    { name: "Longfellow", slug: "longfellow", description: "Residential South Minneapolis along Minnehaha Avenue" },
    { name: "Standish", slug: "standish", description: "Quiet residential South Minneapolis" },
    { name: "Seward", slug: "seward", description: "Co-op culture and Mississippi River access" },
    { name: "Hiawatha", slug: "hiawatha", description: "Blue Line corridor in South Minneapolis" },
    { name: "Howe", slug: "howe", description: "Residential neighborhood near Minnehaha Falls" },
  ],
  closing: {
    title: "What Mid-City Industrial Does for Minneapolis",
    paragraphs: [
      "Mid-City Industrial is the kind of place that a city needs but rarely thinks about. The warehouses store the materials that contractors use to build the houses in Longfellow. The auto shops fix the cars that residents of Standish drive to work. The distribution centers move the goods that end up on shelves across the metro. None of this is glamorous. None of it makes a neighborhood guide exciting to read. But it is the infrastructure of daily life, and it occupies land in the middle of the city because proximity matters for the businesses that serve the city&apos;s physical needs.",
      "The rail corridor that defines Mid-City Industrial has been moving freight through Minneapolis for over a century, and the businesses that line it have been doing the work that cities require for nearly as long. Whether that work continues here — or gets pushed to the exurban fringe, as it has in so many American cities — is a question about what kind of city Minneapolis wants to be. A city that makes and moves and fixes things needs places to do those things. Mid-City Industrial is one of those places. It is not asking for appreciation. It is asking to be left alone long enough to keep working.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          You have driven through Mid-City Industrial and you do not know it.
          On your way from Seward to Longfellow, or from the Greenway to
          Hiawatha Avenue, you passed through a few blocks where the
          streetscape changed — the houses and trees gave way to chain-link
          fencing, loading docks, and buildings with no windows facing the
          street. You barely registered the transition. The radio kept
          playing. The light turned green. You were through it in ninety
          seconds and back in a neighborhood that looked like a neighborhood.
          That strip of industrial land you crossed without noticing? That
          was Mid-City Industrial. It does not mind being ignored. It has
          work to do.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/mid-city-industrial/hero.webp"
        alt="Industrial buildings and rail corridor in Mid-City Industrial, Minneapolis"
        caption="Mid-City Industrial — the working corridor between South Minneapolis neighborhoods"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Mid-City Industrial, Minneapolis?">
        <Prose>
          <p>
            Mid-City Industrial is an industrial corridor in the
            central-south section of Minneapolis, defined by the rail lines
            and industrial parcels that sit between the residential
            neighborhoods of South Minneapolis. With fewer than 200
            residents — most of whom live at the district&apos;s residential
            edges rather than in its industrial core — it is a neighborhood
            in the administrative sense only. In practice, it is a working
            zone of warehouses, commercial operations, and light industrial
            businesses that serves the broader city&apos;s economy from a
            position of geographic centrality and social invisibility.
          </p>
          <p>
            The district is organized along the rail corridors that have
            defined this part of Minneapolis since the 19th century. These
            corridors — still active for freight — created a strip of
            industrial land that separates residential neighborhoods from
            each other and provides the space, vehicle access, and zoning
            flexibility that industrial and commercial businesses require.
          </p>
          <p>
            Mid-City Industrial borders several of Minneapolis&apos;s most
            established residential neighborhoods. The contrast at the
            boundaries is stark — one block is a tree-lined street with
            bungalows and kids on bicycles; the next is a fenced storage
            yard with a semi-truck idling at a loading dock. These
            transitions are among the most abrupt in the city, and they
            define the experience of both the industrial district and the
            neighborhoods that surround it.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Mid - City Industrial Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/mid-city-industrial/neighborhood-sign.webp"
          alt="Mid-City Industrial neighborhood sign in Minneapolis"
          caption="The Mid-City Industrial neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Mid-City Industrial History & Origins">
        <Prose>
          <p>
            Mid-City Industrial&apos;s history begins with the railroad.
            The rail lines that traverse this corridor were laid in the
            late 19th century, connecting the milling and manufacturing
            districts along the Mississippi River to the broader national
            rail network. The land adjacent to the tracks was developed
            for the warehousing, manufacturing, and processing operations
            that depended on rail access for receiving raw materials and
            shipping finished goods.
          </p>
          <p>
            As Minneapolis grew southward and its residential neighborhoods
            filled in around the rail corridor, Mid-City Industrial became
            a permanent feature of the urban landscape — an industrial strip
            that separated residential areas and provided employment within
            walking distance of working-class homes. The relationship was
            symbiotic: the neighborhoods supplied the workers, and the
            industrial district supplied the jobs, the noise, and the
            truck traffic that residential areas absorbed as the cost of
            proximity.
          </p>
          <p>
            The construction of the Midtown Greenway — a bicycle and
            pedestrian trail built in a former rail trench beginning in
            the early 2000s — transformed the recreational character of
            the corridor without fundamentally changing the industrial
            district&apos;s function. The Greenway runs near Mid-City
            Industrial, providing a linear park that contrasts sharply
            with the working landscape around it and connecting the
            residential neighborhoods on either side of the industrial
            strip in a way that the road network had not.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Mid-City Industrial Character & Land Use">
        <Prose>
          <p>
            The character of Mid-City Industrial is purely functional. The
            buildings are industrial — warehouses, manufacturing facilities,
            commercial garages, and storage buildings constructed for
            utility rather than appearance. The streetscape is
            truck-oriented — wide roads, limited signalization, loading
            zones, and the general infrastructure of freight movement.
            Sidewalks exist on some streets but are not the primary design
            consideration.
          </p>
          <p>
            The businesses that operate here range from long-established
            industrial operations to newer tenants who have found value
            in the affordable, flexible space. Food production and
            processing facilities, building supply operations, auto
            repair and body shops, metalworking and fabrication, and
            various commercial services occupy the buildings. Some
            creative businesses and maker spaces have also moved in,
            attracted by the same qualities that attract traditional
            industrial tenants: big spaces, reasonable rents, and
            neighbors who do not complain about noise.
          </p>
          <p>
            The rail lines remain active, carrying freight through the
            corridor several times daily. The sound of train horns is the
            district&apos;s most distinctive auditory feature and a
            reminder that this land is still doing what it was designed
            to do. For the residential neighborhoods that border Mid-City
            Industrial, the train horns are a familiar background sound —
            part of the texture of South Minneapolis life that new
            residents discover and longtime residents no longer hear.
          </p>
        </Prose>
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Mid-City Industrial Food & Local Spots">
        <Prose>
          <p>
            Mid-City Industrial does not have a restaurant scene. Workers
            in the district bring lunches, use food trucks that occasionally
            service the area, or drive to the commercial corridors in
            surrounding neighborhoods. The dining options in{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>{" "}
            along Minnehaha Avenue,{" "}
            <Link href="/neighborhoods/seward" className="text-[#2a9d8f] hover:underline">
              Seward
            </Link>{" "}
            along Franklin Avenue, and the broader South Minneapolis
            restaurant scene are all accessible within a short drive. The
            absence of dining within the district is consistent with its
            industrial function — the buildings are for work, not for
            eating.
          </p>
        </Prose>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Mid-City Industrial">
        <Prose>
          <p>
            Mid-City Industrial has no parks within its boundaries, but the
            Midtown Greenway — which runs near or through portions of the
            district — provides the closest recreational amenity. The
            Greenway is a 5.5-mile bicycle and pedestrian trail built in
            a former rail trench, offering a separated, below-grade path
            that runs from the Chain of Lakes area to the Mississippi
            River. It is one of the most popular trails in Minneapolis and
            a transformative piece of infrastructure for the neighborhoods
            it crosses.
          </p>
          <p>
            Parks in the surrounding residential neighborhoods —{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>
            ,{" "}
            <Link href="/neighborhoods/standish" className="text-[#2a9d8f] hover:underline">
              Standish
            </Link>
            , and others — provide the green space and recreational
            facilities that the industrial district does not. For workers
            in Mid-City Industrial, a lunch break walk to a nearby park
            is possible but requires crossing the boundary between
            industrial and residential landscapes — a transition that
            is as much psychological as physical.
          </p>
        </Prose>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Mid-City Industrial Schools">
        <Prose>
          <p>
            There are no schools in Mid-City Industrial. The district&apos;s
            minimal residential population does not support educational
            facilities. Families in the surrounding neighborhoods use
            Minneapolis Public Schools options in South Minneapolis,
            including schools along the Longfellow, Standish, and Seward
            corridors.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Mid-City Industrial Real Estate">
        <Prose>
          <p>
            The real estate market in Mid-City Industrial is commercial
            and industrial. Properties consist of warehouse buildings,
            manufacturing facilities, commercial garages, and industrial
            lots. Values reflect the industrial zoning, building condition,
            environmental status, and the growing interest in the Midtown
            corridor as a potential future development area.
          </p>
          <p>
            Speculative interest exists, driven by the Midtown Greenway&apos;s
            popularity and the long-discussed possibility of a Midtown
            streetcar or other transit investment along the corridor. If
            transit improvements materialize, the land values in and around
            Mid-City Industrial could shift significantly, making
            conversion to mixed-use or residential development more
            economically attractive. For now, the market remains industrial,
            with properties trading on the basis of their current use
            rather than speculative future value.
          </p>
          <p>
            For businesses seeking industrial or commercial space in central
            Minneapolis, Mid-City Industrial offers affordable rents and
            good vehicle access. The central location — between the
            residential neighborhoods of South Minneapolis, with easy
            access to the freeway system — is a practical advantage for
            businesses that serve the local market.
          </p>
        </Prose>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Mid-City Industrial">
        <Prose>
          <p>
            Mid-City Industrial is primarily car-dependent, with the
            Walk Score of 35 and Transit Score of 40 reflecting the
            industrial character. Metro Transit provides bus service along
            connecting corridors, including routes on Lake Street,
            Minnehaha Avenue, and other adjacent streets, but direct
            service into the industrial area is limited.
          </p>
          <p>
            The Midtown Greenway provides excellent bicycle connectivity,
            with a Bike Score of 60 reflecting the infrastructure available
            at the district&apos;s edges. Cyclists using the Greenway pass
            near Mid-City Industrial and can access the district from trail
            connections, though the industrial streets themselves are not
            particularly bike-friendly.
          </p>
          <p>
            Vehicle access is the primary mode, with the road network
            providing connections to Interstate 35W, Highway 55, and the
            broader metro. The streets within the district accommodate
            truck traffic, and parking is generally available in the
            informal, unstructured way that characterizes industrial areas.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in Mid-City Industrial">
        <Prose>
          <p>
            The primary force of change affecting Mid-City Industrial is
            the ongoing conversation about the Midtown corridor&apos;s
            future. The Midtown Greenway&apos;s success as a bicycle
            and pedestrian trail has generated interest in the corridor
            as a potential transit route — the long-discussed Midtown
            streetcar or bus rapid transit line would transform the
            development economics of the entire corridor, including the
            industrial areas along it.
          </p>
          <p>
            Transit-oriented development, if it comes, would put
            significant pressure on Mid-City Industrial to convert to
            higher-density residential and commercial uses. The precedent
            exists elsewhere in Minneapolis — the Blue Line and Green Line
            corridors have both attracted substantial development — and the
            Midtown corridor&apos;s central location and existing trail
            infrastructure make it an attractive candidate for similar
            investment.
          </p>
          <p>
            For now, the uncertainty itself is the defining condition.
            Property owners and tenants operate with the awareness that
            the district&apos;s future is unresolved, which affects
            investment decisions, lease terms, and the willingness of
            businesses to put down roots. Some businesses thrive in this
            uncertainty — short-term tenants who need flexible space and
            do not mind the ambiguity. Others are more cautious, knowing
            that a policy decision or a transit investment could change
            the landscape within a decade.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Mid - City Industrial FAQ">
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
