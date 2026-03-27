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
    title: "Humboldt Industrial Area, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about the Humboldt Industrial Area in Minneapolis — an industrial district near the North Loop, its history, businesses, relationship to surrounding neighborhoods, and what's here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Humboldt Industrial Area",
  deck: "The industrial buffer between North Minneapolis and the North Loop — where warehouses, rail corridors, and working businesses occupy land that the city's hottest residential market is eyeing from across the tracks.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is the Humboldt Industrial Area?" },
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
    label: "Humboldt Industrial Area, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "<50", label: "Residents (US Census / ACS estimates)" },
      { value: "N/A", label: "Median home sale price (minimal residential)" },
      { value: "N/A", label: "Typical apartment rent (minimal residential)" },
      { value: "30", label: "Walk Score" },
      { value: "55", label: "Bike Score" },
      { value: "35", label: "Transit Score" },
      { value: "Industrial", label: "Primary land use designation" },
      { value: "Adjacent to North Loop", label: "Key geographic relationship" },
    ],
  },
  faq: [
    {
      question: "Is the Humboldt Industrial Area a residential neighborhood?",
      answer:
        "No. The Humboldt Industrial Area is an industrial district with virtually no residential population. The land is zoned for industrial and commercial use and is occupied by warehouses, manufacturing operations, and commercial businesses. People who work here live in surrounding neighborhoods. The district&apos;s name includes &apos;Industrial Area&apos; for a reason — this is working land, not living land.",
    },
    {
      question: "Where is the Humboldt Industrial Area in Minneapolis?",
      answer:
        "The Humboldt Industrial Area is in the northwestern section of Minneapolis, positioned between the North Loop (Warehouse District) to the south and east, and the residential neighborhoods of Near-North and Harrison to the north and west. It occupies land along the rail corridors that historically separated the industrial and warehouse districts from the residential neighborhoods of North Minneapolis. Its proximity to the North Loop is its most significant geographic relationship.",
    },
    {
      question: "Is the Humboldt Industrial Area part of the North Loop?",
      answer:
        "No. The Humboldt Industrial Area is a separate, distinct neighborhood from the North Loop (Warehouse District), though they are adjacent. The North Loop has transformed from an industrial/warehouse district into one of Minneapolis&apos;s most desirable residential neighborhoods. The Humboldt Industrial Area remains industrial. The boundary between them represents one of the most dramatic land-use transitions in the city — luxury condos on one side of the tracks, working warehouses on the other.",
    },
    {
      question: "What kinds of businesses are in the Humboldt Industrial Area?",
      answer:
        "The Humboldt Industrial Area hosts a mix of warehousing, light manufacturing, distribution, auto repair, and commercial services. Some creative and maker-space businesses have established operations here, taking advantage of the large floor plates and relatively affordable rents compared to the adjacent North Loop. The specific business mix has evolved over time, but the industrial and commercial character has remained consistent.",
    },
    {
      question: "Will the Humboldt Industrial Area become residential like the North Loop?",
      answer:
        "This is the central question for the area&apos;s future. The North Loop&apos;s dramatic transformation from warehouse district to luxury residential neighborhood has put pressure on adjacent industrial areas, including Humboldt. Market forces favor conversion — the land values in the North Loop suggest that residential development here could be extremely profitable. However, the city&apos;s comprehensive plan includes protections for industrial employment land, and the environmental remediation costs of converting industrial sites can be significant. The transition, if it happens, would likely be gradual and contentious.",
    },
    {
      question: "Are there environmental concerns in the Humboldt Industrial Area?",
      answer:
        "Yes. Like most long-standing industrial districts, some sites in the Humboldt Industrial Area carry contamination from decades of industrial use — petroleum products, solvents, heavy metals, and other industrial byproducts. Environmental assessments and remediation are required before any change in land use, and the costs can be substantial. The Minnesota Pollution Control Agency and the Minneapolis regulatory framework govern the cleanup process.",
    },
    {
      question: "Is the Humboldt Industrial Area safe?",
      answer:
        "The Humboldt Industrial Area is a low-traffic district outside of business hours. During the day, when workers are present, the area is unremarkable from a safety standpoint. After hours and on weekends, the district is largely empty, and the isolation of an unoccupied industrial area carries the standard risks — poor lighting, limited foot traffic, and the vulnerability of unattended properties to property crime. It is not a neighborhood where people walk for recreation.",
    },
    {
      question: "What neighborhoods are near the Humboldt Industrial Area?",
      answer:
        "The Humboldt Industrial Area is bordered by the North Loop to the south and east, Near-North to the north, Harrison to the west, and Bryn Mawr nearby to the southwest. The proximity to the North Loop — one of the most expensive and sought-after neighborhoods in Minneapolis — creates a stark contrast that is visible at the boundary between the two areas.",
    },
  ],
  nearby: [
    { name: "North Loop", slug: "north-loop", description: "Warehouse district turned dining and residential destination" },
    { name: "Near - North", slug: "near-north", description: "Historic North Minneapolis neighborhood" },
    { name: "Harrison", slug: "harrison", description: "Residential neighborhood between North Loop and Bryn Mawr" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "Quiet residential near Theodore Wirth Park" },
  ],
  closing: {
    title: "What the Humboldt Industrial Area Represents",
    paragraphs: [
      "The Humboldt Industrial Area sits at one of the most instructive boundaries in Minneapolis. On one side, the North Loop — a neighborhood that was, within living memory, a derelict warehouse district and is now one of the most expensive residential markets in the Upper Midwest. On the other side, Humboldt — still industrial, still working, still doing the things that the North Loop stopped doing when the condominiums arrived. The boundary is a rail corridor, a few hundred feet of steel and gravel that separates two visions of what urban land is for.",
      "The market says the land should be condos. The workers say the land should be shops. The city plan says the land should stay industrial, at least for now. The environmentalists say the land needs cleanup before it can be anything else. These are not abstract positions — they represent real money, real jobs, real policy choices. The Humboldt Industrial Area is a small piece of Minneapolis, but the questions it raises are as large as the city&apos;s future: What kind of economy does Minneapolis want? Where do the people who make things work? And what happens to a city that converts all of its working land into living land? Nobody has answered these questions yet. The Humboldt Industrial Area is waiting.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Stand at the edge of the Humboldt Industrial Area on a weekday
          morning and look south toward the North Loop. On your side of
          the rail corridor: a distribution warehouse with loading docks,
          a fenced yard full of palletized materials, the sound of a forklift
          backing up. On the other side: a seven-story apartment building
          with a rooftop deck, a ground-floor coffee shop with a line out
          the door, and a Tesla charging in a heated underground garage. The
          two worlds are separated by maybe three hundred feet of railroad
          tracks. One of them was the other, not that long ago. The question
          is whether the transformation that crossed those tracks once will
          cross them again.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/humboldt-industrial-area/hero.webp"
        alt="Industrial buildings and rail corridors in the Humboldt Industrial Area, Minneapolis"
        caption="The Humboldt Industrial Area — working land at the edge of Minneapolis's most transformed neighborhood"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is the Humboldt Industrial Area, Minneapolis?">
        <Prose>
          <p>
            The Humboldt Industrial Area is an industrial district in the
            northwestern section of Minneapolis, occupying land along the
            rail corridors that historically separated the warehouse and
            industrial districts near downtown from the residential
            neighborhoods of North Minneapolis. With virtually no permanent
            residents, it is a neighborhood only in the administrative sense —
            in practice, it is a working zone of warehouses, light
            manufacturing, distribution operations, and commercial
            businesses that serves the broader city&apos;s economy without
            participating in its residential life.
          </p>
          <p>
            The district&apos;s most significant geographic relationship is
            with the{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>
            , which borders it to the south and east. The North Loop&apos;s
            transformation from a derelict warehouse district into one of
            the most desirable residential neighborhoods in Minneapolis is
            the defining context for the Humboldt Industrial Area — it
            represents both what this land could become and what it
            currently is not. The boundary between the two neighborhoods
            is one of the starkest land-use transitions in the city.
          </p>
          <p>
            To the north and west, the Humboldt Industrial Area borders the
            residential neighborhoods of{" "}
            <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
              Near-North
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/harrison" className="text-[#2a9d8f] hover:underline">
              Harrison
            </Link>
            , creating another boundary — this one between industrial and
            residential use — that shapes the daily experience of the
            surrounding communities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Humboldt Industrial Area Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/humboldt-industrial-area/neighborhood-sign.webp"
          alt="Humboldt Industrial Area neighborhood sign in Minneapolis"
          caption="The Humboldt Industrial Area neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Humboldt Industrial Area History & Origins">
        <Prose>
          <p>
            The Humboldt Industrial Area&apos;s history is inseparable from
            the history of Minneapolis&apos;s rail and warehouse
            infrastructure. The land was developed in the late 19th century
            as the rail network expanded to serve the city&apos;s growing
            milling, manufacturing, and distribution industries. The rail
            corridors that define the district were laid to connect the
            mills at St. Anthony Falls to the broader national rail network,
            and the warehouses and industrial buildings that lined them
            served as the intermediate infrastructure of a commodity economy.
          </p>
          <p>
            Through the early and mid-20th century, the area functioned as
            part of the broader industrial belt that separated downtown
            Minneapolis from the residential neighborhoods to the north and
            west. The warehouses stored grain, lumber, manufactured goods,
            and the miscellaneous inventory of a regional economic center.
            The rail yards sorted and moved freight. The manufacturing shops
            produced components and finished goods. The labor force came
            from the surrounding neighborhoods — Near-North, Harrison, and
            the broader North Minneapolis community — making the industrial
            area an economic anchor for working-class residents who could
            walk to their jobs.
          </p>
          <p>
            The deindustrialization of the late 20th century reduced the
            district&apos;s activity but did not eliminate it. As the
            adjacent warehouse district (now the North Loop) began its
            transition to residential use in the 2000s and 2010s, the
            Humboldt Industrial Area became a boundary zone — the place
            where the transformation stopped, at least temporarily. The
            rail corridors served as a natural break, and the active
            industrial operations on the Humboldt side maintained the
            area&apos;s character even as the landscape across the tracks
            changed beyond recognition.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Humboldt Industrial Area Character & Land Use">
        <Prose>
          <p>
            The Humboldt Industrial Area&apos;s character is defined by its
            function as a working district. The landscape is flat, paved or
            graveled, and occupied by low-rise industrial and commercial
            buildings. Warehouses, distribution centers, auto repair shops,
            and light manufacturing operations are the typical occupants.
            The architecture is purely functional — metal siding, concrete
            block, loading docks, and the infrastructure of vehicle access
            and freight movement.
          </p>
          <p>
            The rail corridors that traverse the area remain active, carrying
            freight through the district and reinforcing its industrial
            character. The sound of trains is part of the daily soundtrack,
            a reminder that this is land that was platted for movement and
            commerce rather than residence and recreation.
          </p>
          <p>
            Some evolution is visible. Creative businesses, maker spaces, and
            small-scale manufacturers have established operations in the
            area, drawn by the large floor plates and affordable rents that
            industrial buildings provide. These tenants bring a different
            energy than traditional industrial operations — they are
            producing goods and services that blur the line between
            manufacturing and creative work — but they depend on the same
            physical infrastructure: big buildings, flexible space, the
            ability to make noise and move materials without disturbing
            neighbors. In the Humboldt Industrial Area, there are no
            neighbors to disturb.
          </p>
        </Prose>
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Humboldt Industrial Area Food & Local Spots">
        <Prose>
          <p>
            The Humboldt Industrial Area does not have restaurants, cafes,
            or bars. Workers in the district drive to nearby commercial
            areas for meals or bring food from home. The{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>
            , just across the rail corridor, offers one of the densest
            concentrations of restaurants in Minneapolis — a proximity
            that is ironic for workers in the Humboldt area, who can see
            the dining options but exist in a different commercial universe.
            The West Broadway corridor in{" "}
            <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
              Near-North
            </Link>{" "}
            also provides dining options to the north.
          </p>
        </Prose>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near the Humboldt Industrial Area">
        <Prose>
          <p>
            The Humboldt Industrial Area has no parks or recreational
            facilities within its boundaries. The nearest parks are in
            the surrounding residential neighborhoods — Harrison Park in
            Harrison, Sumner Field Park in Near-North, and the green spaces
            along the North Loop riverfront. The area is not designed for
            or used for outdoor recreation, and the absence of green space
            is consistent with its purely industrial function.
          </p>
        </Prose>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Humboldt Industrial Area Schools">
        <Prose>
          <p>
            There are no schools in the Humboldt Industrial Area. The
            district has no residential population to serve. Schools in
            the surrounding neighborhoods —{" "}
            <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
              Near-North
            </Link>
            ,{" "}
            <Link href="/neighborhoods/harrison" className="text-[#2a9d8f] hover:underline">
              Harrison
            </Link>
            , and the broader North Minneapolis community — serve the
            families whose working members may commute to jobs in the
            industrial area.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Humboldt Industrial Area Real Estate">
        <Prose>
          <p>
            Real estate in the Humboldt Industrial Area is exclusively
            commercial and industrial. The market consists of warehouse
            buildings, industrial facilities, and commercial lots, with
            values reflecting the industrial zoning, the structural
            condition of the buildings, and the environmental status of
            the parcels.
          </p>
          <p>
            The proximity to the North Loop has created speculative interest
            in Humboldt properties. Investors who see the area as a future
            extension of the North Loop&apos;s residential market have been
            active in acquiring parcels, particularly those with favorable
            environmental profiles and proximity to the North Loop boundary.
            Whether this speculation proves prescient or premature depends
            on policy decisions about industrial land preservation and the
            economics of environmental remediation.
          </p>
          <p>
            For businesses seeking industrial or commercial space near
            downtown Minneapolis, the Humboldt Industrial Area offers
            relatively affordable options with excellent highway access
            and proximity to the city center. The rents are a fraction of
            what equivalent space would cost in the North Loop, making the
            area attractive to businesses that need the location but not
            the polish.
          </p>
        </Prose>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around the Humboldt Industrial Area">
        <Prose>
          <p>
            The Humboldt Industrial Area is car-dependent, with limited
            transit service and minimal pedestrian infrastructure. The
            Walk Score of 30 and Transit Score of 35 reflect the
            industrial character — this is an area designed for vehicle
            access, not foot traffic. Metro Transit provides some bus
            service along adjacent corridors, including routes on West
            Broadway and along connecting streets, but the service does
            not directly penetrate the industrial area in a way that makes
            transit commuting practical for most workers.
          </p>
          <p>
            The road network provides good vehicle access to the freeway
            system. Interstate 94 is accessible within minutes, connecting
            the area to downtown Minneapolis and the broader metro. The
            streets within the district are built for truck traffic, with
            wide lanes and commercial-grade infrastructure.
          </p>
          <p>
            Biking is possible along connecting routes, and the Bike Score
            of 55 reflects the proximity to bike infrastructure in
            adjacent neighborhoods, though the district itself is not
            particularly bike-friendly. Cyclists passing through the area
            typically use it as a connecting route between the North Loop
            and North Minneapolis rather than as a destination.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in the Humboldt Industrial Area">
        <Prose>
          <p>
            The Humboldt Industrial Area is under more development pressure
            than any other industrial district in Minneapolis, a direct
            consequence of its proximity to the North Loop. The
            transformation of the North Loop from warehouse district to
            luxury residential neighborhood has demonstrated, in real
            time, what happens when industrial land in a desirable location
            is converted to residential use. The Humboldt Industrial Area
            is the next logical chapter in that story — or it is the place
            where the story stops, depending on policy choices.
          </p>
          <p>
            The city of Minneapolis has expressed interest in preserving
            industrial employment land, recognizing that the blue-collar
            jobs these districts provide are an important part of the
            city&apos;s economic diversity. But the market pressure is
            intense. Land that could sell for industrial prices in the
            low hundreds of thousands per acre could sell for residential
            development prices many times higher. Property owners,
            developers, and investors are aware of this gap, and the
            conversation about the area&apos;s future is driven as much
            by economics as by planning principles.
          </p>
          <p>
            Environmental remediation is the wildcard. Some parcels in the
            Humboldt area carry contamination that would be expensive to
            clean up, and the economics of remediation can either accelerate
            or delay conversion depending on the anticipated end use. The
            coming decade will likely determine whether the Humboldt
            Industrial Area follows the North Loop&apos;s path or charts a
            different course.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Humboldt Industrial Area FAQ">
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
