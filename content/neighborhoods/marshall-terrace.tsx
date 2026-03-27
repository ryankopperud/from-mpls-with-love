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
    title: "Marshall Terrace, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Marshall Terrace, Minneapolis — a tiny Northeast riverfront neighborhood with industrial heritage, quiet residential streets, Mississippi River access, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Marshall Terrace",
  deck: "A sliver of Northeast along the Mississippi — where industrial history meets a small-town residential feel, the river is the backyard, and most of Minneapolis has no idea this neighborhood exists.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Marshall Terrace?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Marshall Terrace" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Marshall Terrace, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~1,200", label: "Residents (US Census / ACS estimates)" },
      { value: "$280K–$380K", label: "Median home sale price (2025 data)" },
      { value: "$1,100–$1,500", label: "Typical 1BR apartment rent (2025)" },
      { value: "55", label: "Walk Score" },
      { value: "72", label: "Bike Score" },
      { value: "42", label: "Transit Score" },
      { value: "60%+", label: "Owner-occupied housing" },
      { value: "0.3 sq mi", label: "Approximate neighborhood area" },
    ],
  },
  faq: [
    {
      question: "Is Marshall Terrace a good neighborhood in Minneapolis?",
      answer:
        "Marshall Terrace is one of Minneapolis&apos;s quietest and most overlooked neighborhoods. If you want a small residential enclave with river access, affordable homes relative to the rest of Northeast, and a genuine sense of being off the beaten path, it delivers. The tradeoff is limited walkable commercial options, minimal nightlife, and the reality that you will need to drive or bike to reach most amenities. For families and people who value quiet over buzz, Marshall Terrace punches above its weight.",
    },
    {
      question: "Is Marshall Terrace, Minneapolis safe?",
      answer:
        "Marshall Terrace has low crime rates by Minneapolis standards. Its small size, residential character, and relative isolation contribute to a feeling of safety that residents frequently cite as one of the neighborhood&apos;s best qualities. Like all Minneapolis neighborhoods, property crime occurs, but violent crime is uncommon. The industrial areas along the river can feel isolated at night, so standard urban awareness applies.",
    },
    {
      question: "Where exactly is Marshall Terrace in Minneapolis?",
      answer:
        "Marshall Terrace is in the far northern section of Northeast Minneapolis, bounded roughly by the Mississippi River to the west, Lowry Avenue to the south, and the railroad corridor to the east. It sits between the river and the Camden Industrial area, with Bottineau to the north. It is one of the smallest neighborhoods in Minneapolis by both area and population.",
    },
    {
      question: "What is the housing market like in Marshall Terrace?",
      answer:
        "Marshall Terrace offers some of the most affordable single-family homes in Northeast Minneapolis. The housing stock is predominantly modest homes from the early-to-mid 20th century — bungalows, one-and-a-half story houses, and some duplexes. Median sale prices in 2025 range from roughly $280,000 to $380,000, which is below the Northeast average. The neighborhood&apos;s small size means inventory is limited, and homes tend to sell within the community rather than attracting broad attention.",
    },
    {
      question: "Can you access the Mississippi River from Marshall Terrace?",
      answer:
        "Yes. Marshall Terrace has direct access to the Mississippi River along its western boundary. The river trail system connects to the broader Grand Rounds network, and the riverfront parks provide walking, biking, and scenic access. The riverfront is one of the neighborhood&apos;s defining amenities and a major reason people choose to live here despite its distance from commercial corridors.",
    },
    {
      question: "Is Marshall Terrace walkable?",
      answer:
        "Not particularly. The Walk Score is around 55, reflecting the neighborhood&apos;s residential character and limited commercial options. There are no grocery stores, restaurants, or significant retail within the neighborhood boundaries. Residents typically drive or bike to adjacent neighborhoods like Bottineau or the Lowry Avenue corridor for daily errands. The neighborhood is, however, very bikeable, with good trail connections along the river.",
    },
    {
      question: "What are the schools near Marshall Terrace?",
      answer:
        "Marshall Terrace does not have a school within its boundaries. Families use Minneapolis Public Schools options through the district&apos;s enrollment system, with nearby schools in Northeast Minneapolis serving the area. Jenny Lind Elementary and Sheridan Arts Magnet have historically been popular choices for neighborhood families. Middle and high school students typically attend Northeast Middle School and Edison High School.",
    },
    {
      question: "How does Marshall Terrace compare to other Northeast neighborhoods?",
      answer:
        "Marshall Terrace is the quietest and most residential of the Northeast neighborhoods, lacking the commercial energy of Logan Park, the arts scene of Northeast Park, or the brewery district buzz of Beltrami. It trades those amenities for lower home prices, river access, and a genuinely small-town feel within city limits. People who love Marshall Terrace tend to love it specifically because it is not like the rest of Northeast.",
    },
  ],
  nearby: [
    { name: "Bottineau", slug: "bottineau", description: "Northern Northeast with industrial and residential mix" },
    { name: "Columbia Park", slug: "columbia-park", description: "Quiet residential surrounding a large park" },
    { name: "Sheridan", slug: "sheridan", description: "Northeast arts district heritage" },
    { name: "Holland", slug: "holland", description: "Residential Northeast with neighborhood identity" },
    { name: "Camden Industrial", slug: "camden-industrial", description: "Industrial district along the river" },
  ],
  closing: {
    title: "What Makes Marshall Terrace Worth Knowing",
    paragraphs: [
      "Marshall Terrace is the kind of neighborhood that does not advertise itself and does not need to. Twelve hundred people live on a sliver of land between the Mississippi River and a railroad corridor, in houses that were built for mill workers and factory hands, on streets where the loudest thing on a Tuesday evening is a dog barking two blocks away. There is no brewery, no taproom, no Instagram-worthy mural. There is a river, there are neighbors who know each other, and there is the particular satisfaction of living in a place that has resisted the impulse to become something it is not.",
      "The industrial heritage is still visible — in the bones of the streets, in the proximity to rail lines and commercial yards, in the working-class architecture that makes no apologies for its simplicity. But the river is the thing. Stand on the bluff at the edge of Marshall Terrace on a September evening and watch the light come off the Mississippi, and you will understand why people stay in a neighborhood that most Minneapolitans cannot find on a map. Some places earn loyalty by being exciting. Marshall Terrace earns it by being steady.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday morning in late May, a man in canvas work pants is
          walking a yellow Lab along the river trail at the western edge of
          Marshall Terrace. The Mississippi is high and fast with spring runoff,
          pushing branches and debris past the bank at a pace that makes
          standing water look like a time-lapse. Behind him, a block and a half
          of modest houses sit under old-growth elms, their yards unfenced, a
          kid&apos;s bicycle lying on its side in a driveway. There is no one
          else on the trail. From here, downtown Minneapolis is a skyline in
          the distance — close enough to see, far enough to forget. This is
          Marshall Terrace. Most of Minneapolis does not know it exists.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/marshall-terrace/hero.webp"
        alt="Quiet residential street in Marshall Terrace, Minneapolis, with the Mississippi River visible beyond"
        caption="Marshall Terrace — a quiet residential pocket on the Mississippi's edge in far Northeast Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Marshall Terrace, Minneapolis?">
        <Prose>
          <p>
            Marshall Terrace is a small residential neighborhood in the far
            northern section of Northeast Minneapolis, perched between the
            Mississippi River to the west and the railroad corridor and
            industrial lands to the east. With roughly 1,200 residents packed
            into about a third of a square mile, it is one of the smallest
            neighborhoods in the city by both area and population — a fact that
            contributes directly to its character as a place where neighbors
            actually know each other and the pace of life is several notches
            slower than what most people associate with Minneapolis.
          </p>
          <p>
            The neighborhood&apos;s identity is shaped by two forces: its
            industrial heritage and its relationship to the river. Marshall
            Terrace was built for the workers who staffed the mills, factories,
            and rail yards that once dominated this stretch of the Mississippi.
            The industry has largely moved on, but the housing it produced —
            modest bungalows, small frame houses, the occasional duplex — remains,
            and with it a working-class sensibility that has not been displaced
            by the craft-cocktail-and-condos energy that has transformed other
            parts of Northeast.
          </p>
          <p>
            The Mississippi River is the neighborhood&apos;s western boundary
            and its primary amenity. River trails, bluff views, and direct
            water access give Marshall Terrace a connection to the natural
            landscape that few urban neighborhoods in Minneapolis can match.
            For residents, the river compensates for the lack of walkable
            restaurants, bars, and shops — a trade that most of them seem
            willing to make.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Marshall Terrace Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/marshall-terrace/neighborhood-sign.webp"
          alt="Marshall Terrace neighborhood sign in Minneapolis"
          caption="The Marshall Terrace neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Marshall Terrace History & Origins">
        <Prose>
          <p>
            Before European settlement, the riverbanks and bluffs that now
            define Marshall Terrace were part of the homeland of the Dakota
            people — the Mdewakanton band in particular, for whom the
            Mississippi River corridor was a vital route for travel, trade,
            and sustenance. The river here was rich with fish, the surrounding
            land with game, and the bluffs provided vantage points that held
            both practical and spiritual significance.
          </p>
          <p>
            European settlement in the mid-to-late 19th century transformed
            this stretch of riverfront into industrial land. Lumber mills,
            flour mills, and related industries lined the Mississippi, taking
            advantage of the river&apos;s power and transportation capacity.
            The workers who staffed these operations needed housing, and
            Marshall Terrace grew to meet that need — a neighborhood of small,
            affordable homes within walking distance of the mills and rail
            yards. The housing stock reflected the economics of its residents:
            functional, compact, built for shelter rather than display.
          </p>
          <p>
            The name &ldquo;Marshall Terrace&rdquo; derives from the terrace
            landform — the flat, elevated ground above the river floodplain
            where the neighborhood sits. This geographic feature gave the area
            both its views and its protection from flooding, making it suitable
            for residential development even as the lower riverbanks were
            claimed by industry.
          </p>
          <p>
            Through the 20th century, Marshall Terrace followed the trajectory
            of many small industrial-adjacent neighborhoods: the industries
            consolidated, automated, or left, and the neighborhood settled into
            a quieter existence as a residential enclave. The population
            remained stable but small, and the neighborhood never developed
            the commercial infrastructure that would have made it a destination.
            This trajectory — stable, quiet, unspectacular — is the essence
            of Marshall Terrace&apos;s identity. It has never been the
            neighborhood that anyone was talking about, and that has been,
            for its residents, the point.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Marshall Terrace">
        <Prose>
          <p>
            Living in Marshall Terrace is living in a neighborhood that asks
            very little of you and gives back a specific, quiet set of rewards.
            The streets are residential in the most literal sense — houses,
            yards, sidewalks, parked cars. There is no commercial strip, no
            corner bar, no coffee shop. The closest thing to a landmark is the
            river itself, which runs along the western edge with the kind of
            indifference to human development that makes it a good neighbor.
          </p>
          <p>
            The community is small enough that social dynamics work differently
            than in larger neighborhoods. People recognize each other. Block
            clubs function with actual participation rather than aspirational
            email lists. The neighborhood association, while small, operates
            with a directness that larger organizations cannot match — when
            an issue comes up, the relevant people are in the room because
            there are not that many rooms to be in.
          </p>
          <p>
            The industrial edges — rail yards to the east, remnant commercial
            and industrial properties along the river — give Marshall Terrace
            a roughness that prevents it from feeling suburban. This is not a
            manicured enclave. It is a working neighborhood that happens to
            sit on a beautiful piece of river. The juxtaposition is part of
            the appeal for people who prefer their cities honest rather than
            curated.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/bottineau" className="text-[#2a9d8f] hover:underline">
              Bottineau
            </Link>{" "}
            to the east and{" "}
            <Link href="/neighborhoods/columbia-park" className="text-[#2a9d8f] hover:underline">
              Columbia Park
            </Link>{" "}
            to the south share Marshall Terrace&apos;s quiet residential
            character, though both have more commercial access. The broader
            Northeast Minneapolis arts and brewery scene is a short drive
            or bike ride south, providing the cultural amenities that Marshall
            Terrace itself does not offer.
          </p>
        </Prose>
        <Quote
          text="We moved here because we could afford a house with a view of the river. We stayed because nobody bothers you and the neighbors bring over tomatoes in August."
          cite="Marshall Terrace homeowner, 12 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Marshall Terrace Food, Drink & Local Spots">
        <Prose>
          <p>
            Marshall Terrace does not have restaurants, bars, or cafes within
            its boundaries. This is a residential neighborhood without a
            commercial corridor, and honesty requires acknowledging that fact
            rather than pretending otherwise. For dining, groceries, and
            nightlife, residents look to adjacent neighborhoods and the broader
            Northeast Minneapolis and North Minneapolis corridors.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <Prose>
            <p>
              The Lowry Avenue corridor, accessible to the south and east,
              provides the nearest commercial options. Northeast Minneapolis&apos;s
              concentration of breweries, restaurants, and bars — including the
              taprooms along Marshall Street NE and the dining options in
              Nordeast — are within a short drive or bike ride. The North
              Minneapolis side of the river also offers options along Lowry
              and West Broadway.
            </p>
            <p>
              For groceries, residents typically drive to stores in Columbia
              Heights, along Central Avenue NE, or in the Lowry corridor. The
              absence of a neighborhood grocery store is the most frequently
              cited practical inconvenience of living in Marshall Terrace.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Marshall Terrace">
        <Prose>
          <p>
            The outdoors is where Marshall Terrace comes alive. The Mississippi
            River, which forms the neighborhood&apos;s western boundary, is the
            dominant natural feature and the reason many residents chose to live
            here. River trails, bluff overlooks, and bank access provide
            year-round recreational opportunities that most urban neighborhoods
            in Minneapolis cannot match.
          </p>
        </Prose>

        <ArticleSubsection title="Mississippi Riverfront">
          <Prose>
            <p>
              Marshall Terrace&apos;s section of the Mississippi riverfront
              connects to the broader Grand Rounds trail system, providing
              biking and walking routes that extend south toward downtown
              Minneapolis and north toward the city limits. The riverbank here
              is less developed than the stretches further south — no Stone
              Arch Bridge, no Mill City Museum — but that relative wildness
              is part of the appeal. Great blue herons, bald eagles, and
              other riparian wildlife are regular visitors. In winter, the
              frozen river and snow-covered trails offer cross-country skiing
              and snowshoeing opportunities.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Neighborhood Parks">
          <Prose>
            <p>
              Marshall Terrace Park, the neighborhood&apos;s primary green space,
              provides a playground, open lawn area, and gathering space for
              community events. It is a small neighborhood park serving a small
              neighborhood — functional rather than scenic, but important as
              one of the few public gathering spaces in an area without
              commercial alternatives. The park hosts neighborhood events in
              summer, including block parties and community picnics organized
              by the neighborhood association.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Broader Park Access">
          <Prose>
            <p>
              Columbia Park, the large regional park to the south and east, is
              accessible by bike or on foot and offers amenities that Marshall
              Terrace&apos;s small parks cannot — ball fields, a golf course,
              larger play areas, and mature tree canopy. The Grand Rounds
              connection means that Marshall Terrace residents have, within a
              few minutes&apos; pedaling, access to one of the best urban park
              and trail systems in America. The neighborhood&apos;s outdoor
              assets are not within its boundaries so much as connected to
              them — a distinction that matters for daily life but rewards
              anyone willing to get on a bike.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Marshall Terrace Schools">
        <Prose>
          <p>
            Marshall Terrace does not have a school within its boundaries.
            The neighborhood&apos;s small size and population do not support
            a dedicated school, so families use Minneapolis Public Schools
            options through the district&apos;s enrollment and assignment
            system.
          </p>
          <p>
            Nearby elementary options in Northeast Minneapolis include schools
            along the Central Avenue corridor and in adjacent neighborhoods.
            Jenny Lind Elementary and Sheridan Arts Magnet have historically
            served families in this part of Northeast. For middle school,
            Northeast Middle School is the area&apos;s primary option, and
            Edison High School serves the Northeast quadrant for high school.
          </p>
          <p>
            Several charter schools in Northeast Minneapolis also draw
            enrollment from Marshall Terrace families. The practical reality
            is that schooling requires transportation — by bus, car, or bike —
            to schools outside the neighborhood, which is consistent with
            the broader pattern of Marshall Terrace life requiring movement
            outward for most services and amenities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Marshall Terrace Real Estate & Housing">
        <Prose>
          <p>
            Marshall Terrace&apos;s housing market is small, affordable by
            Northeast Minneapolis standards, and dominated by single-family
            homes. The housing stock is predominantly early-to-mid 20th
            century construction — bungalows, one-and-a-half story frame
            houses, and modest two-stories built for the industrial workers
            who originally populated the neighborhood. There are some
            duplexes and small multi-family properties, but this is
            overwhelmingly a single-family neighborhood.
          </p>
        </Prose>

        <ArticleSubsection title="Pricing & Market">
          <Prose>
            <p>
              Median home sale prices in Marshall Terrace range from
              approximately $280,000 to $380,000 as of 2025 — below the
              Northeast Minneapolis average and well below the citywide
              median. This affordability is Marshall Terrace&apos;s primary
              real estate advantage, offering the Northeast address and
              river proximity at prices that have been squeezed out of more
              visible neighborhoods like Logan Park and Northeast Park.
            </p>
            <p>
              Inventory is limited by the neighborhood&apos;s small size.
              Only a handful of homes come to market in any given year, and
              sales often happen through word of mouth or local networks
              before reaching the MLS. The owner-occupancy rate exceeds 60
              percent, reflecting a stable community of long-term residents
              who buy and stay rather than flip.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development Potential">
          <Prose>
            <p>
              Some former industrial parcels along the river and the rail
              corridor present potential redevelopment opportunities, though
              environmental remediation costs and the neighborhood&apos;s
              limited infrastructure have kept large-scale development at bay.
              Residents are generally wary of development that would change
              the neighborhood&apos;s character, and the neighborhood
              association has been active in monitoring proposals that affect
              the riverfront and industrial-to-residential transitions.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/marshall-terrace/river.webp"
        alt="Mississippi River viewed from Marshall Terrace, Minneapolis"
        caption="The Mississippi River from Marshall Terrace — the neighborhood's defining feature and daily companion"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Marshall Terrace">
        <Prose>
          <p>
            Marshall Terrace is a car-dependent neighborhood by Minneapolis
            standards. The Transit Score of 42 reflects limited bus service,
            with no light rail access and infrequent route coverage. Metro
            Transit provides bus service along Lowry Avenue and connecting
            corridors, but headways are long enough that most residents treat
            transit as a backup rather than a primary mode.
          </p>
          <p>
            Biking is the neighborhood&apos;s strongest alternative to driving.
            The river trail connections and generally flat terrain make cycling
            practical for commuting to downtown (about 5 miles south) or to
            commercial areas in Northeast. The Bike Score of 72 reflects this
            infrastructure, and Marshall Terrace has a higher share of bike
            commuters than its car-dependent reputation might suggest.
          </p>
          <p>
            Driving is the default mode for most errands. Interstate 94 is
            accessible via Lowry Avenue, providing highway connections to
            downtown and the broader metro. Street parking is abundant and
            free — one of the practical advantages of living in a neighborhood
            that most people are not trying to visit. The lack of congestion
            on local streets is a small but genuine quality-of-life benefit.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in Marshall Terrace">
        <Prose>
          <p>
            Marshall Terrace is changing slowly, which is how most of its
            residents prefer it. The primary forces of change are the broader
            Northeast Minneapolis real estate market — which has pushed
            buyers northward as prices in Logan Park, Northeast Park, and
            Beltrami have risen — and the ongoing question of what happens
            to the industrial and formerly industrial land along the river
            and the rail corridor.
          </p>
          <p>
            Environmental remediation of former industrial sites is an
            ongoing concern. Some parcels carry contamination from decades
            of manufacturing and processing, and the timeline and cost of
            cleanup affect both property values and development potential.
            The neighborhood association monitors these issues closely,
            balancing the desire for cleanup and improvement against the
            concern that remediated land will attract development at a
            scale the neighborhood does not want.
          </p>
          <p>
            The riverfront is the most consequential piece of Marshall
            Terrace&apos;s future. How the city manages the transition of
            industrial riverfront land — whether it becomes parkland, housing,
            mixed-use development, or some combination — will determine
            whether Marshall Terrace remains a quiet residential pocket or
            becomes something different. For now, the neighborhood&apos;s
            obscurity is its protection. Whether that lasts is an open
            question.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Marshall Terrace FAQ">
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
