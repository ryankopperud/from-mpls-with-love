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
    title: "Prospect Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Prospect Park, Minneapolis — the Witch&apos;s Hat water tower, University of Minnesota adjacency, Green Line light rail, Surly Brewing, Tower Hill Park, new development, historic hilly streets, and what it&apos;s really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Prospect Park",
  deck: "A compact Minneapolis neighborhood where a century-old water tower shaped like a witch&apos;s hat watches over hilly streets, professors&apos; homes sit alongside massive new apartment blocks, the Green Line delivers you to two downtowns, and the tension between preservation and transformation plays out on every block.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Prospect Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Prospect Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Prospect Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$350K–$500K", label: "Median home sale price range (2025 data)" },
      { value: "1913", label: "Year the Witch's Hat water tower was built" },
      { value: "1900s–1930s", label: "Era most original homes were built" },
      { value: "575 ft", label: "Elevation at Tower Hill Park — highest point in Minneapolis" },
      { value: "10 min", label: "Green Line ride to downtown Minneapolis" },
      { value: "75", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Prospect Park a good neighborhood in Minneapolis?",
      answer:
        "Yes — Prospect Park is one of Minneapolis&apos;s most distinctive and well-located neighborhoods. It offers direct Green Line light rail access to both downtown Minneapolis and downtown St. Paul, proximity to the University of Minnesota campus, one of the city&apos;s most iconic landmarks in the Witch&apos;s Hat water tower, rare hilly topography, mature tree canopy, and a historic residential character unlike anything else in the city. The neighborhood is in the midst of significant transformation as large-scale development reshapes its edges, but the core residential streets remain quiet, walkable, and deeply rooted. For people who value transit access, university adjacency, and a neighborhood with genuine architectural character, Prospect Park is an excellent choice.",
    },
    {
      question: "Is Prospect Park, Minneapolis safe?",
      answer:
        "Prospect Park is generally one of the safer neighborhoods in Minneapolis. The residential core — the hilly streets between University Avenue and the river — is quiet and neighborly, with relatively low rates of violent crime. The University Avenue corridor and areas near campus see more property crime, including bike theft and car break-ins, which is typical of university-adjacent neighborhoods. The influx of new apartment development has brought more foot traffic and activity, which some residents perceive as both a safety improvement (more eyes on the street) and a concern (unfamiliar faces in a formerly insular neighborhood). Overall, Prospect Park&apos;s crime profile is below the Minneapolis citywide average.",
    },
    {
      question: "What is the Witch&apos;s Hat water tower?",
      answer:
        "The Witch&apos;s Hat water tower is a historic water tower built in 1913 at the top of Tower Hill Park in Prospect Park. Designed by engineer and architect Frederick Cappelen, the tower features a distinctive steep conical roof — the &apos;witch&apos;s hat&apos; — that makes it one of the most recognizable structures in Minneapolis. It was listed on the National Register of Historic Places in 1991. The tower is no longer in active service but is maintained by the Minneapolis Park and Recreation Board. It is occasionally opened for public tours, offering panoramic views from the highest natural point in the city. The tower has become the defining symbol of the Prospect Park neighborhood and appears on neighborhood association materials, local business signage, and countless photographs.",
    },
    {
      question: "How much do homes cost in Prospect Park, Minneapolis?",
      answer:
        "Median home sale prices in Prospect Park ranged from roughly $350,000 to $500,000 in 2025, above the citywide median and reflecting the neighborhood&apos;s desirable combination of transit access, university adjacency, and historic character. Smaller homes and those needing updates can be found in the $300,000–$400,000 range, while larger renovated homes on the hilly streets near Tower Hill Park can reach $500,000–$650,000 or more. The neighborhood has significantly less inventory than larger neighborhoods, which creates competition when homes come to market. New apartment and condo construction along University Avenue has added rental and ownership options at higher price points.",
    },
    {
      question: "What is the Prospect North development?",
      answer:
        "Prospect North is a large-scale mixed-use development on the northern edge of the Prospect Park neighborhood, near the Green Line light rail station. The project includes multiple phases of apartment buildings, ground-floor retail space, and public amenities built on formerly industrial and underutilized land along University Avenue. The development has been one of the largest new construction projects in the neighborhood&apos;s history and represents the most visible symbol of Prospect Park&apos;s transformation from a quiet, insular residential neighborhood into a transit-oriented urban district. The project has been both celebrated for bringing new housing, services, and density near transit and criticized for changing the neighborhood&apos;s character and scale.",
    },
    {
      question: "Is Prospect Park walkable?",
      answer:
        "Prospect Park earns a Walk Score of approximately 75 and a Bike Score of 85. The neighborhood&apos;s walkability is a tale of two contexts: the residential core has limited commercial amenities within walking distance, but the University Avenue corridor — accessible via the Green Line station — provides grocery stores, restaurants, and services. The Green Line light rail makes car-free living genuinely viable, connecting residents to both downtowns in minutes. Biking is excellent, with connections to the University of Minnesota campus trail network and the Mississippi River trails. The neighborhood&apos;s hills — unusual for Minneapolis — add character to walks but can be challenging in winter ice.",
    },
    {
      question: "What schools serve Prospect Park, Minneapolis?",
      answer:
        "Prospect Park is served by Minneapolis Public Schools. Pratt Community School (PreK–5) is the neighborhood&apos;s elementary school and a valued community institution with a diverse student body reflecting the neighborhood&apos;s mix of longtime residents and university-affiliated families. Marcy Open School and Southeast Como Montessori are nearby options. Northeast Middle School and Edison High School serve the area for upper grades. Many families in Prospect Park also access the University of Minnesota&apos;s lab school programs, charter schools, and the district&apos;s open enrollment and magnet options. The proximity to the university provides unique educational resources and enrichment opportunities not available in most neighborhoods.",
    },
    {
      question: "What is Surly Brewing?",
      answer:
        "Surly Brewing Company is a major craft brewery and destination taproom located at 520 Malcolm Avenue SE, on the southern edge of the Prospect Park neighborhood. Opened in 2014, the brewery&apos;s 50,000-square-foot facility includes a large beer hall, restaurant, outdoor beer garden, and event spaces. Surly is one of Minnesota&apos;s most recognized craft breweries, known for beers like Furious (an American IPA) and Darkness (an imperial stout). The taproom draws visitors from across the metro and has become one of Prospect Park&apos;s most significant destinations, though its relationship with the surrounding residential neighborhood has not been without friction around traffic, noise, and parking.",
    },
    {
      question: "Where exactly is Prospect Park in Minneapolis?",
      answer:
        "Prospect Park is in Southeast Minneapolis, roughly bounded by the BNSF railroad tracks and University Avenue to the north, the Mississippi River and East River Parkway to the south and east, Interstate 94 to the west, and the University of Minnesota East Bank campus to the southwest. It is one of the smallest official neighborhoods in Minneapolis by area. The neighborhood sits between the University of Minnesota campus to the west and south, the St. Anthony Park neighborhood of St. Paul to the east (across the border), and the Marcy-Holmes neighborhood to the northwest. The full official name is Prospect Park - East River Road, though most residents simply say Prospect Park.",
    },
    {
      question: "Is Prospect Park changing?",
      answer:
        "Prospect Park is experiencing some of the most dramatic physical transformation of any neighborhood in Minneapolis. The Prospect North development, new apartment construction along University Avenue, and the ongoing effects of Green Line light rail access have reshaped the neighborhood&apos;s edges and demographics significantly. The population has grown as new housing has been added, and the mix has shifted toward younger renters and students. The historic residential core — the hilly streets around Tower Hill Park — remains largely unchanged, but longtime residents are keenly aware that the neighborhood&apos;s small-town feel is being tested by the scale of new development. This tension between preservation and growth is the defining issue in Prospect Park today.",
    },
    {
      question: "What is Tower Hill Park?",
      answer:
        "Tower Hill Park is a small hilltop park at the center of the Prospect Park neighborhood, notable for being the highest natural point in Minneapolis at approximately 575 feet above sea level. The park is home to the iconic Witch&apos;s Hat water tower and offers panoramic views of the Minneapolis skyline, the Mississippi River valley, and on clear days, points well beyond the metro area. The park is a beloved gathering spot for neighborhood residents, a popular destination for sunset viewing, and the site of the annual Pratt School ice cream social and other community events. Despite its modest size, Tower Hill Park is one of the most distinctive public spaces in the city.",
    },
  ],
  nearby: [
    { name: "Seward", slug: "seward", description: "Co-op culture, the Greenway, and Franklin Avenue diversity" },
    { name: "Cedar Riverside", slug: "cedar-riverside", description: "The West Bank — Somali community, university energy, density" },
    { name: "Marcy-Holmes", slug: "marcy-holmes", description: "Historic Dinkytown, student life, and riverfront access" },
    { name: "Longfellow", slug: "longfellow", description: "Minnehaha Falls, the river, and post-2020 resilience" },
    { name: "Como", slug: "como", description: "Southeast Como — quiet residential, university-adjacent" },
    { name: "Downtown East", slug: "downtown-east", description: "Mill District, the Guthrie, and riverfront redevelopment" },
  ],
  closing: {
    title: "What Makes Prospect Park Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis with more restaurants, more nightlife, more commercial polish, and more predictable trajectories. Prospect Park has never competed on those terms. What it offers is something rarer — a place where the land itself rises above the flat prairie grid and demands a different kind of neighborhood, one built on winding streets and steep lots and a water tower that looks like it wandered out of a fairy tale. The topography shaped the character: a neighborhood of professors and eccentrics, of people who chose a place because it was interesting rather than convenient, and who built a community around that shared sensibility over the course of a century.",
      "That community is now being tested by forces larger than any neighborhood meeting can fully control — the Green Line brought connectivity and the connectivity brought development and the development is rewriting the edges of a place that prided itself on being small, quirky, and self-contained. The Witch&apos;s Hat still watches from the top of Tower Hill, but it looks down on a neighborhood that includes things its builders never imagined: six-story apartment blocks, a destination brewery, a light rail station connecting two downtowns. Whether Prospect Park can absorb all of this and remain Prospect Park — whether the hilly streets and the professors&apos; porches and the stubborn small-neighborhood identity can coexist with the transit-oriented future the city is building — is the question that will define this place for the next generation. The answer matters, because neighborhoods like this do not get built anymore. They can only be preserved or lost.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday afternoon in late September, a woman is walking her
          dog up the steep slope of Seymour Avenue SE, leaning into the grade
          the way you lean into a hill in San Francisco or Duluth — not
          Minneapolis. Because Minneapolis is flat. Everyone knows that.
          Except here, in this compact wedge of a neighborhood tucked between
          the University of Minnesota and the river, the land does something
          unexpected: it rises. It climbs to a modest summit where a water
          tower built in 1913 stands with a steep conical roof that looks,
          unmistakably, like a witch&apos;s hat. The woman reaches the top,
          pauses at Tower Hill Park, and takes in the view — the downtown
          skyline to the west, the river gorge falling away to the south, the
          sprawl of the university campus below. Behind her, a six-story
          apartment building that didn&apos;t exist three years ago glints in
          the afternoon light. Below her, a Craftsman bungalow that has
          housed a succession of university professors since 1924 sits behind
          its original stone retaining wall. This is Prospect Park in 2026 —
          a neighborhood where the past and future are not just coexisting
          but physically stacked on top of each other, arguing about the view.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/prospect-park/hero.webp"
        alt="The Witch's Hat water tower rising above the trees in Prospect Park, Minneapolis, on a clear autumn day"
        caption="The Witch's Hat — Prospect Park's iconic 1913 water tower atop the highest point in Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Prospect Park, Minneapolis?">
        <Prose>
          <p>
            Prospect Park is a small residential neighborhood in Southeast
            Minneapolis, officially known as Prospect Park - East River Road.
            It is roughly bounded by University Avenue and the BNSF railroad
            tracks to the north, the Mississippi River and East River Parkway
            to the south and east, Interstate 94 to the west, and the
            University of Minnesota East Bank campus to the southwest. It is
            home to approximately 6,500 residents — a number that has grown
            notably in recent years as large-scale apartment development has
            added hundreds of new units along the neighborhood&apos;s
            northern edge.
          </p>
          <p>
            What makes Prospect Park distinctive is, first and most
            literally, its topography. Minneapolis is a city built on glacial
            plains, and nearly every neighborhood in the city is flat enough
            to lose a marble on. Prospect Park is the exception. The land
            here rises to approximately 575 feet above sea level at Tower
            Hill Park — the highest natural point in Minneapolis — and the
            residential streets climb and curve in ways that feel borrowed
            from another city entirely. The hills created a neighborhood of
            winding roads, stone retaining walls, and houses built into
            slopes rather than placed on grids. It gave the place a character
            that a century of development elsewhere in the city has never
            replicated.
          </p>
          <p>
            The second defining feature is the Witch&apos;s Hat water tower,
            built in 1913 and listed on the National Register of Historic
            Places. The tower&apos;s steep conical roof — visible from miles
            away — has become the symbol of the neighborhood, the logo of
            the neighborhood association, and the single most photographed
            non-lake landmark in Minneapolis. It sits atop Tower Hill Park
            and anchors the neighborhood&apos;s identity the way a church
            steeple anchors a European village — a fixed point around which
            everything else orients.
          </p>
          <p>
            The third is the neighborhood&apos;s relationship to the
            University of Minnesota, whose East Bank campus borders Prospect
            Park to the west and south. The university has shaped Prospect
            Park for more than a century — professors and university staff
            have been the neighborhood&apos;s core demographic since the
            early 1900s, and the academic culture permeates everything from
            the architecture (large, well-built homes designed for people
            who valued books over garages) to the civic culture (neighborhood
            meetings that sometimes read like faculty seminars). This
            university connection also brings the tensions that come with
            any town-gown border: student housing pressure, parking
            conflicts, and the slow expansion of institutional land use
            into what was once purely residential territory.
          </p>
          <p>
            In the 2010s and 2020s, two forces reshaped Prospect Park
            dramatically: the Green Line light rail, which opened in 2014
            with a station at the neighborhood&apos;s northern edge, and the
            wave of transit-oriented development that followed. The Prospect
            North project and other apartment complexes along University
            Avenue added hundreds of units of new housing, bringing new
            residents, new commercial tenants, and a new scale of
            construction that the neighborhood&apos;s longtime residents are
            still processing. The result is a neighborhood in genuine
            transition — a place where 1920s professors&apos; bungalows sit
            within sight of 2020s apartment towers, where the Witch&apos;s
            Hat still watches from the hilltop but now shares the skyline
            with structures that dwarf it.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Prospect Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/prospect-park/neighborhood-sign.webp"
          alt="Prospect Park neighborhood sign in Minneapolis"
          caption="The Prospect Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Prospect Park History & Origins">
        <Prose>
          <p>
            The land that is now Prospect Park is part of the ancestral
            homeland of the Dakota people — specifically the Mdewakanton and
            Wahpekute bands, for whom the confluence of the Mississippi and
            Minnesota Rivers at Bdote, several miles to the southeast, is a
            site of profound spiritual and cultural significance. The high
            ground here — the hills and ridges that would eventually make
            Prospect Park unique among Minneapolis neighborhoods — offered
            vantage points over the river valley that Dakota people used for
            generations before European contact. Any honest history of this
            place begins with that fact and the dispossession that followed:
            the treaties of 1837 and 1851, the US-Dakota War of 1862, and the
            forced exile of Dakota people from their homeland.
          </p>
          <p>
            European-American settlement of the area began in the mid-19th
            century, and the neighborhood&apos;s unusual topography shaped its
            development from the start. While the rest of Minneapolis was
            being platted on the relentless grid that defines the city —
            straight streets, square blocks, flat lots — the hills of
            Prospect Park demanded something different. Streets curved to
            follow contour lines. Lots were irregularly shaped, sloping, and
            sometimes difficult to build on. The result was a neighborhood
            that felt, from its earliest days, like it belonged to a
            different city — one with terrain, one where the landscape had
            opinions about where buildings should go.
          </p>
          <p>
            The neighborhood took its name from the panoramic views —
            the &quot;prospect&quot; — available from its high ground. By
            the late 1800s, the area was attracting residents who appreciated
            both the views and the proximity to the growing University of
            Minnesota campus, which was established in 1851 and expanding
            steadily on the East Bank of the Mississippi. Faculty members,
            university administrators, and professionals associated with the
            university began building substantial homes on the hilly streets
            — Craftsman bungalows, Prairie-style houses, and the occasional
            Tudor Revival, all designed with the kind of architectural
            ambition that suggested their owners cared about ideas, including
            ideas about how a house should sit on a hillside.
          </p>
          <p>
            The Witch&apos;s Hat water tower was built in 1913, designed by
            Frederick Cappelen (the same engineer who designed the original
            Third Avenue Bridge over the Mississippi). The tower&apos;s
            distinctive conical roof was purely functional — a steep pitch
            to shed snow — but the effect was whimsical, almost medieval,
            and the tower quickly became the neighborhood&apos;s defining
            landmark. It served the neighborhood&apos;s water supply for
            decades before being retired from active service, and it was
            listed on the National Register of Historic Places in 1991. The
            tower has been maintained through a combination of city funds
            and neighborhood fundraising, and its occasional open-house
            events draw visitors from across the metro who climb the
            interior stairs for the panoramic view from the top.
          </p>
          <p>
            Through the early and mid-20th century, Prospect Park settled
            into its identity as a quiet, intellectual, university-adjacent
            enclave. The residents were disproportionately academic —
            professors, researchers, graduate students who stayed after
            finishing their degrees, university librarians and
            administrators. The neighborhood association, formed in 1901 as
            the Prospect Park Improvement Association (one of the oldest
            neighborhood organizations in Minneapolis), reflected this
            character — civic meetings were well-attended, articulate, and
            occasionally contentious in the way that faculty meetings are
            contentious, with passionate disagreements conducted in complete
            sentences. The neighborhood developed a reputation as
            Minneapolis&apos;s most self-consciously intellectual community —
            a reputation that was not entirely unearned and not entirely
            endearing to outsiders.
          </p>
          <p>
            Interstate 94, built in the 1960s, cut through the
            neighborhood&apos;s western edge and severed connections to the
            Marcy-Holmes neighborhood and the broader Dinkytown area. The
            highway brought noise, pollution, and a wall of concrete that
            turned what had been a gentle transition between neighborhoods
            into an abrupt boundary. Like highway construction throughout
            Minneapolis, I-94 disproportionately affected lower-income
            residents and communities of color, though Prospect Park — with
            its university connections and vocal neighborhood association —
            was more successful than many neighborhoods at limiting the
            highway&apos;s direct impact on its residential core.
          </p>
          <p>
            The neighborhood remained relatively unchanged for decades after
            the highway — a stable, small, university-adjacent residential
            community where houses changed hands slowly and the neighborhood
            association guarded its character with the kind of vigilance that
            only a community full of people who read zoning codes for
            intellectual stimulation could maintain. Then the Green Line came.
          </p>
          <p>
            The METRO Green Line light rail, which opened in 2014 connecting
            downtown Minneapolis to downtown St. Paul along University Avenue,
            included a station at the northern edge of Prospect Park. The
            station transformed the neighborhood&apos;s accessibility —
            suddenly, a quiet residential enclave had direct rail connections
            to both downtowns, the university, the Capitol, and the broader
            transit network. It also transformed the neighborhood&apos;s
            development trajectory. The land along University Avenue near
            the station — previously occupied by light industrial uses,
            parking lots, and underutilized commercial properties — became
            some of the most valuable transit-oriented development sites in
            the Twin Cities. What followed was a building boom that is still
            reshaping Prospect Park today.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Prospect Park">
        <Prose>
          <p>
            Living in Prospect Park means living in two neighborhoods at
            once. There is the historic Prospect Park — the hilly streets
            south of University Avenue where professors&apos; houses from
            the 1910s and 1920s sit behind stone retaining walls and mature
            oaks, where the Witch&apos;s Hat tower is visible from your
            porch, where your neighbors include retired academics who have
            lived in the same house for forty years and know the Latin names
            of every tree on the block. And there is the new Prospect Park —
            the corridor along University Avenue where six-story apartment
            buildings have risen on former parking lots and industrial sites,
            where the residents are twenty-somethings and graduate students
            and young professionals, where the ground-floor retail spaces
            are still filling in and the landscaping is still immature and
            the whole thing has the slightly raw energy of a neighborhood
            that is being built in real time.
          </p>
          <p>
            These two Prospect Parks coexist within a few blocks of each
            other, and the relationship between them is the central drama of
            the neighborhood in 2026. The longtime residents — many of whom
            moved here precisely because it was small, quiet, and insulated
            from the pressures that shaped denser neighborhoods — watch the
            new construction with a mixture of resignation and alarm. The
            new residents — many of whom chose Prospect Park because of the
            Green Line, the proximity to campus, and the new apartments —
            wonder why the old-timers are so resistant to the very density
            and connectivity that makes the neighborhood viable. Both
            groups have a point. Neither is entirely wrong.
          </p>
          <p>
            The physical character of the historic core is genuinely
            remarkable for Minneapolis. The hills create sight lines and
            perspectives that simply don&apos;t exist elsewhere in the city.
            You walk up Arthur Avenue or Seymour Avenue and the street
            rises ahead of you, lined with mature trees and houses that
            step up the slope in a way that feels almost East Coast. Stone
            retaining walls, many of them original to the early 1900s
            construction, terrace the lots. Gardens cascade down hillsides.
            The houses themselves are a mix of Craftsman, Prairie, and
            Colonial Revival styles — built with the kind of solid
            construction and architectural detail that reflected their
            original owners&apos; expectations of permanence. There are no
            McMansions. There are no teardowns-and-rebuilds. The
            neighborhood has been protected by a combination of historic
            preservation activism, the difficulty of building on hilly
            terrain, and the sheer stubbornness of residents who consider
            their neighborhood&apos;s character a public trust.
          </p>
          <p>
            The University of Minnesota&apos;s presence is felt everywhere,
            even if the campus boundary is technically a few blocks away. A
            significant share of Prospect Park residents work at the U —
            faculty, staff, postdocs, researchers — and the academic
            calendar shapes the neighborhood&apos;s rhythms in subtle ways.
            September brings a surge of new faces. Summers are quieter.
            Conversations at Tower Hill Park tend toward the well-informed.
            The neighborhood has always attracted people who chose a
            neighborhood the way they chose a book — for substance rather
            than packaging — and that intellectual self-selection has given
            Prospect Park a character that is distinctive even within a city
            full of distinctive neighborhoods.
          </p>
          <p>
            To the west across I-94,{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy-Holmes
            </Link>
            {" "}and the Dinkytown commercial district offer the student-facing
            energy that Prospect Park has historically kept at arm&apos;s
            length. To the south,{" "}
            <Link href="/neighborhoods/seward" className="text-[#2a9d8f] hover:underline">
              Seward
            </Link>
            {" "}provides a different model of community engagement — co-op
            culture versus faculty culture, though the two overlap more than
            either side might admit. To the north, University Avenue connects
            Prospect Park to the broader corridor of development and
            commerce running between the two downtowns. The neighborhood sits
            at a crossroads, literally and figuratively, and the question of
            what it becomes next is one of the more interesting urban
            conversations happening in Minneapolis right now.
          </p>
        </Prose>
        <Quote
          text="I bought my house here in 1987 because I could walk to campus, the streets had character, and nobody was trying to turn the neighborhood into anything other than what it was. Thirty-eight years later, two of those three things are still true."
          cite="Longtime Prospect Park homeowner and University of Minnesota faculty"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Prospect Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Prospect Park has never been a dining destination, and that
            has always been part of the deal. You moved here for the hills,
            the tower, the quiet, the proximity to campus — not for the
            restaurant scene. For decades, the neighborhood&apos;s food
            landscape consisted of whatever the university district offered
            across the highway and whatever you cooked in your own kitchen.
            That has begun to change as new development along University
            Avenue has brought ground-floor commercial space and a few new
            tenants, and as one very large brewery put Prospect Park on the
            culinary map in a way that no one anticipated. But the food
            scene here is still thin by Minneapolis standards — a handful of
            spots rather than a corridor, a neighborhood where Surly
            Brewing looms large and everything else is still finding its
            footing.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchor">
          <PlaceCardComponent place={{ name: "Surly Brewing Company", tag: "Brewery / Restaurant", price: "$$", url: "https://surlybrewing.com", description: "520 Malcolm Avenue SE. The elephant in the room — or rather, the 50,000-square-foot destination brewery in the neighborhood. Surly opened its taproom and beer hall in 2014, transforming a former industrial site into one of the most visited breweries in the Midwest. The beer hall is massive, loud, and designed for gathering. The beer garden is one of the best outdoor drinking spaces in the Twin Cities. The food — pizza, burgers, smoked meats — is better than brewery food needs to be. Surly's flagship Furious IPA and the annual Darkness imperial stout release have a cult following. For Prospect Park, Surly is both a point of pride and a source of friction — it brings thousands of visitors into a neighborhood that was designed for hundreds, and the traffic, parking, and noise impacts are real. But it also put the neighborhood on the map for people who had never heard of the Witch's Hat." }} />
        </ArticleSubsection>

        <ArticleSubsection title="The Corridor">
          <Prose>
            <p>
              The new development along University Avenue has begun to fill
              in with ground-floor commercial tenants, though the process has
              been slower than developers projected. Coffee shops, a few
              quick-service restaurants, and service businesses have opened
              in the Prospect North complex and adjacent buildings, adding
              options that the neighborhood historically lacked. The corridor
              is still maturing — there are vacant storefronts and spaces
              that have yet to find tenants — but the trajectory is toward a
              walkable commercial strip that serves both the new apartment
              residents and the broader neighborhood.
            </p>
          </Prose>
          <PlaceCardComponent place={{ name: "Bakers Wife Pastry Shop", tag: "Bakery / Café", price: "$", description: "4200 28th Avenue S (nearby). A beloved neighborhood bakery slightly outside Prospect Park's boundaries but treated by residents as their own. Pastries, bread, coffee, and the kind of morning ritual that a neighborhood of academics and early risers appreciates. Not fancy. Just excellent." }} />
          <PlaceCardComponent place={{ name: "Malcolm Yards Market", tag: "Food Hall", price: "$–$$", url: "https://malcolmyards.com", description: "501 30th Avenue SE. A multi-vendor food hall in a converted industrial building at the southern edge of the neighborhood, near Surly. Multiple vendors offering tacos, ramen, pizza, barbecue, and other options under one roof. The market has added genuine food diversity to a neighborhood that historically had very little, and the outdoor seating area is popular in warm months." }} />
        </ArticleSubsection>

        <ArticleSubsection title="University District Access">
          <Prose>
            <p>
              Prospect Park residents have always supplemented their
              neighborhood&apos;s limited food options with the university
              district&apos;s offerings. Dinkytown — the commercial cluster
              just west across I-94 — has cheap eats, coffee shops, and the
              kind of no-frills restaurants that serve a campus community.
              Stadium Village, along the Green Line corridor, offers
              additional options. And the Green Line itself opens up the
              entire University Avenue corridor between the two downtowns,
              including the Midway area of St. Paul with its growing food
              scene. For a neighborhood with a modest internal food landscape,
              the transit connections make the functional dining radius much
              larger than the neighborhood boundaries suggest.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Prospect Park">
        <Prose>
          <p>
            Prospect Park&apos;s outdoor assets punch above the
            neighborhood&apos;s compact size. The combination of Tower Hill
            Park&apos;s hilltop vantage point, the Mississippi River gorge
            along the neighborhood&apos;s eastern and southern edges, and the
            broader university-area trail network gives residents access to
            some of the most distinctive outdoor spaces in the city — not
            the lakes and manicured parkways of Southwest Minneapolis, but
            something wilder and more geologically interesting.
          </p>
        </Prose>

        <ArticleSubsection title="Tower Hill Park">
          <Prose>
            <p>
              Tower Hill Park is small — barely more than a hilltop clearing
              with the Witch&apos;s Hat water tower at its center — but it is
              one of the most distinctive public spaces in Minneapolis. At
              575 feet above sea level, it is the highest natural point in
              the city, and the views from the summit are genuinely panoramic:
              the downtown skyline to the west, the river gorge to the south,
              the university campus sprawling below, and on clear days, a
              horizon that extends well into the outer suburbs. The park is
              the neighborhood&apos;s gathering place — the spot where
              residents come for sunset, where kids play on the grass, where
              the Pratt School community holds events, and where new
              residents come to understand why the people who live here
              tolerate the hills and the limited parking and the six-month
              winters. Standing at the top of Tower Hill on an October
              evening, watching the sun drop behind the Minneapolis skyline
              while the river gorge fills with shadow, you understand the
              &quot;prospect&quot; in Prospect Park.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Mississippi River Gorge">
          <Prose>
            <p>
              The Mississippi River forms Prospect Park&apos;s eastern and
              southern boundary, and this stretch of the river is one of the
              most spectacular in the metro. The river gorge — the only true
              gorge along the Mississippi&apos;s entire 2,340-mile length —
              runs between Minneapolis and St. Paul here, with limestone
              bluffs, overhanging tree canopy, and a wildness that feels
              improbable within city limits. East River Parkway runs along
              the bluff top, providing a paved trail for walking, running,
              and cycling that connects north to the university, the Stone
              Arch Bridge, and downtown, and south to Minnehaha Falls and
              Fort Snelling. The river bluffs in fall — cottonwoods and
              maples turning gold and orange against the dark water — are
              among the most beautiful landscapes in Minneapolis. Bald eagles
              are regularly spotted along this stretch.
            </p>
            <p>
              Access to the river itself is limited by the steep bluffs, but
              several trail connections and stairways provide routes down to
              the water&apos;s edge. For Prospect Park residents, the river
              gorge is the daily luxury — a five-minute walk from most of the
              neighborhood to one of the finest stretches of urban
              riverfront in the Upper Midwest. The combination of the hilltop
              views from Tower Hill and the riverside trails below gives
              Prospect Park a vertical dimension to its outdoor life that
              flat neighborhoods cannot offer.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="University Trails & East River Parkway">
          <Prose>
            <p>
              The University of Minnesota&apos;s campus trail network
              connects seamlessly to Prospect Park, providing cycling and
              walking routes to the Stone Arch Bridge, downtown, and the
              broader Grand Rounds system. East River Parkway — part of the
              Minneapolis Grand Rounds scenic byway — runs along the
              river bluff through the neighborhood, offering one of the
              most scenic cycling commutes in the city. Riders heading
              downtown can follow the parkway north, cross the river at the
              Washington Avenue Bridge or the Stone Arch Bridge, and reach
              the office in under twenty minutes by bike. The trail is
              maintained year-round, though winter ice on the hills can
              make the Prospect Park segments adventurous.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Prospect Park Schools">
        <Prose>
          <p>
            Schools in Prospect Park reflect the neighborhood&apos;s dual
            identity — a small residential community with a deeply rooted
            neighborhood school, surrounded by the educational resources of a
            major research university. The picture is one of genuine
            community investment in public education, supplemented by the
            unique advantages that come with living next to the University of
            Minnesota.
          </p>
          <p>
            Pratt Community School (PreK–5) is the neighborhood&apos;s
            elementary school and one of its most important institutions. Pratt
            serves a diverse student body that reflects Prospect Park&apos;s
            evolving demographics — longtime faculty families, new arrivals
            in the apartment developments, immigrant families, and students
            from the surrounding area. The school has a strong community
            connection, with active parent involvement and neighborhood
            partnerships that make it more than just a school — it is a
            gathering point for the community, the place where Prospect Park
            residents of all ages and backgrounds actually interact. The
            annual Pratt ice cream social at Tower Hill Park is one of the
            neighborhood&apos;s signature events.
          </p>
          <p>
            For middle and high school, the area is served by Northeast
            Middle School and Edison High School. Many Prospect Park families
            also access the Minneapolis Public Schools open enrollment system,
            magnet programs, and charter schools across the district. The
            University of Minnesota&apos;s proximity provides unique
            enrichment opportunities — campus museums, libraries, lectures,
            and programs that are accessible to neighborhood families in ways
            that aren&apos;t available in most parts of the city. For
            families who value educational breadth over a single pipeline,
            Prospect Park&apos;s school landscape is richer than its small
            size would suggest.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Prospect Park Real Estate & Housing">
        <Prose>
          <p>
            Prospect Park&apos;s real estate market is defined by scarcity.
            This is one of the smallest neighborhoods in Minneapolis by area,
            and the historic residential core — the hilly streets south of
            University Avenue — has very limited inventory. When a house
            comes to market in the historic core, it attracts significant
            attention, particularly from university-affiliated buyers who
            value the walk-to-campus lifestyle. Median home sale prices have
            ranged from roughly $350,000 to $500,000 in 2025, above the
            citywide median and reflecting the neighborhood&apos;s unique
            combination of character, location, and scarcity.
          </p>
          <p>
            Prices have been rising steadily, driven by the Green Line&apos;s
            connectivity, the university&apos;s continued growth, and the
            simple fact that there are very few neighborhoods in Minneapolis
            that offer this combination of topography, transit, and
            architectural character. The 2020 disruptions had less impact
            on Prospect Park than on many Minneapolis neighborhoods — the
            area&apos;s relative insularity and university connection
            provided stability that more commercially dependent
            neighborhoods lacked. By 2025, competition for homes in the
            historic core was genuine, with well-maintained properties
            often receiving multiple offers.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              The historic housing stock in Prospect Park consists primarily
              of Craftsman bungalows, Prairie-style homes, and Colonial
              Revival houses from the 1900s through 1930s — built on
              irregularly shaped, often sloping lots that give each house a
              slightly different relationship to the street. At the lower
              end of the market ($300,000–$400,000), you&apos;re looking at
              smaller bungalows or homes that need updating — original
              kitchens, single bathrooms, the deferred maintenance that
              comes with houses that have been owned by people who spent
              their renovation budget on books. The mid-range ($400,000–
              $530,000) gets you a well-maintained three- or four-bedroom
              home with updated systems, a finished basement, and possibly
              a view of the river gorge or the downtown skyline. Above
              $530,000, you&apos;re in renovated territory with premium
              lots — hilltop positions, river views, or the kind of
              architectural detail that reflects the original owners&apos;
              ambitions.
            </p>
            <p>
              The rental market has been transformed by new construction.
              The Prospect North development and other apartment projects
              along University Avenue have added hundreds of units, ranging
              from studios to three-bedrooms, at rents that reflect new
              construction and transit proximity. One-bedroom apartments in
              the new buildings typically rent for $1,300 to $1,800 — above
              the citywide average but competitive for new construction
              with Green Line access. The older rental stock in the
              neighborhood — converted houses, small apartment buildings —
              offers more affordable options, though the supply is limited.
              The net effect has been a significant expansion of Prospect
              Park&apos;s rental population, shifting the neighborhood&apos;s
              demographic balance toward younger, more transient residents.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We looked at every university-adjacent neighborhood in the city. Prospect Park was the only one that felt like a real neighborhood rather than a campus annex. The hills help — they create a psychological boundary that makes you feel like you&apos;re somewhere distinct."
          cite="Recent Prospect Park homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Prospect Park">
        <Prose>
          <p>
            Prospect Park&apos;s transportation story was rewritten in 2014
            when the Green Line light rail opened, and the neighborhood is
            still adjusting to the implications. Before the Green Line,
            getting around from Prospect Park meant driving or biking —
            the neighborhood&apos;s compact size and relative isolation
            (bounded by the highway, the river, and the university) made
            transit connections limited. The Green Line changed that
            calculus fundamentally, and the Prospect Park station has
            become the neighborhood&apos;s most important piece of
            infrastructure — more important, arguably, than any road.
          </p>
          <p>
            The Green Line runs along University Avenue between downtown
            Minneapolis and downtown St. Paul, with the Prospect Park
            station providing direct access to both downtowns, the
            University of Minnesota campus stations, the Midway area of
            St. Paul, and connections to the Blue Line (for the airport
            and Mall of America) at the downtown Minneapolis end. A ride
            to downtown Minneapolis takes approximately 10 minutes. A ride
            to downtown St. Paul takes approximately 25 minutes. For
            university employees — a significant share of the neighborhood
            — the light rail provides a seamless commute to campus without
            the parking hassle that has been a source of complaint at the
            U for decades.
          </p>
          <p>
            The Walk Score of approximately 75 reflects the neighborhood&apos;s
            mixed walkability. The residential core has limited commercial
            amenities — no neighborhood grocery store, no dense commercial
            corridor — but the Green Line station area is developing
            commercial options, and the university district is within
            walking distance for most residents. The Bike Score of 85 is
            more telling: Prospect Park is an excellent cycling neighborhood,
            with direct trail connections along East River Parkway to the
            Stone Arch Bridge, downtown, and the broader Grand Rounds system.
            The university campus trail network adds further connectivity.
            For bike commuters heading to downtown or campus, Prospect Park
            is one of the best-positioned neighborhoods in the city.
          </p>
          <p>
            By car, downtown Minneapolis is approximately 10 minutes.
            MSP International Airport is 15–20 minutes via Highway 55 or
            I-94. Parking in the historic core is generally available on
            residential streets, though university-related parking pressure
            is a perennial complaint — game days at Huntington Bank Stadium
            are particularly challenging, as visitors compete for street
            parking throughout the neighborhood. The new apartment
            developments along University Avenue have added structured
            parking, but the overall parking supply has not kept pace with
            the population growth, and car storage is an increasingly
            relevant consideration for residents.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Prospect Park&apos;s tensions are not subtle. They are physically
            visible — you can see them in the contrast between a 1920s
            bungalow and the six-story apartment building that now rises
            behind it, in the construction cranes that have been a near-
            constant presence along University Avenue for the past decade,
            in the full parking lots at Surly on a Saturday night and the
            quiet, almost-empty streets of the residential core three blocks
            away. This is a neighborhood where the forces of change are not
            abstract — they are concrete, steel, and glass, and they have
            names and addresses.
          </p>
        </Prose>

        <ArticleSubsection title="The Development Question">
          <Prose>
            <p>
              The Prospect North development and the broader wave of transit-
              oriented construction along University Avenue represent the
              most significant physical transformation in Prospect Park&apos;s
              history. Multiple apartment buildings — some exceeding six
              stories — have been built on land that was previously
              industrial, commercial, or simply underutilized. The scale of
              this construction is unlike anything the neighborhood has
              experienced, and the debate it has generated is the defining
              civic conversation in Prospect Park.
            </p>
            <p>
              Supporters of the new development argue — persuasively — that
              adding housing near transit is exactly what Minneapolis needs
              to do. The Green Line station exists. The land was available.
              Building dense housing near rail transit reduces car dependency,
              increases housing supply in a city that needs it, and creates
              the kind of walkable urban district that progressive planning
              advocates have been calling for. The new buildings bring new
              residents, new commercial tenants, and new energy to a
              neighborhood that was, by any measure, quiet to the point of
              sleepiness.
            </p>
            <p>
              Critics — many of them longtime residents — counter that the
              scale and speed of development have overwhelmed a neighborhood
              that was not designed for it. The six-story apartment buildings
              dwarf the surrounding residential streets. Traffic has
              increased. Parking is more difficult. The neighborhood&apos;s
              character — its smallness, its quiet, its sense of being a
              place apart from the urban grid — is being eroded by the very
              density that the city is encouraging. The critics are not, for
              the most part, anti-development in principle. They are
              concerned about scale, about the relationship between new
              construction and existing neighborhood fabric, and about
              whether anyone in a position of authority is asking whether
              this much change, this fast, in a neighborhood this small, is
              good planning or just opportunism.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Student Housing and University Expansion">
          <Prose>
            <p>
              The University of Minnesota is both Prospect Park&apos;s
              greatest asset and its most complicated neighbor. The
              university&apos;s growth — in enrollment, in physical plant,
              in the demands it places on surrounding neighborhoods — has
              been a source of tension for decades. Student housing is the
              most visible flashpoint: as the university&apos;s enrollment
              has grown and its on-campus housing has not kept pace, students
              have spilled into surrounding neighborhoods, including Prospect
              Park. The new apartment developments have absorbed some of
              this demand, but they have also changed the neighborhood&apos;s
              demographic character — more transient, younger, and less
              invested in the kind of long-term neighborhood stewardship
              that Prospect Park&apos;s civic culture depends on.
            </p>
            <p>
              The university&apos;s institutional land use has also expanded
              incrementally into what was once residential territory. Each
              individual change is small — a house converted to office space,
              a lot acquired for parking — but the cumulative effect is a
              slow erosion of the residential character that defines the
              neighborhood. The Prospect Park neighborhood association has
              been vigilant about monitoring and contesting these changes,
              but the power imbalance between a small neighborhood
              organization and a major research university is significant
              and not in the neighborhood&apos;s favor.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Preserving the Small-Neighborhood Feel">
          <Prose>
            <p>
              The deepest tension in Prospect Park is existential rather
              than architectural. The neighborhood&apos;s identity has always
              been built on being small — a compact, walkable, self-contained
              community where everyone knows the Witch&apos;s Hat, where the
              neighborhood association meetings are attended by people who
              actually know each other, where the community feels like a
              community rather than a collection of strangers who happen to
              share a zip code. The new development threatens that identity
              not because the new residents are unwelcome but because
              scaling a community from 4,000 people to 6,500 people changes
              its fundamental nature. The neighborhood meeting that once
              drew thirty people who all recognized each other now draws
              seventy people, half of whom are new. The block party that
              once included every household now includes a six-story
              apartment building whose residents may not even know the
              party is happening.
            </p>
            <p>
              This is not a complaint unique to Prospect Park — it is the
              universal tension of urban growth, playing out in a neighborhood
              that is small enough and self-aware enough to articulate it
              clearly. The question is whether Prospect Park can find a way
              to integrate its new residents, its new buildings, and its new
              identity without losing the qualities that made it worth
              fighting for in the first place. The Witch&apos;s Hat will
              still be there regardless. But the neighborhood it watches
              over is changing, and not everyone agrees about what it&apos;s
              changing into.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Prospect Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
