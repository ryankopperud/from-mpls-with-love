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
    title: "Sumner - Glenwood, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Sumner - Glenwood, Minneapolis — historic Sumner Field, near downtown, mixed development, heritage, housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Sumner - Glenwood",
  deck: "A small neighborhood at the edge of downtown that carries the weight of Minneapolis's racial history in its name and its landscape — where the scars of urban renewal meet new development, and the question of who a neighborhood belongs to has never been more urgent.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Sumner - Glenwood?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Sumner - Glenwood" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Sumner - Glenwood, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~1,800", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$200K–$350K", label: "Median home sale price range (2025 data)" },
      { value: "Mixed", label: "Era of housing stock — historic to new construction" },
      { value: "Highly diverse", label: "Black, white, immigrant populations" },
      { value: "Olson Hwy", label: "Primary corridor (Highway 55)" },
      { value: "5 min", label: "Drive to downtown Minneapolis" },
      { value: "65", label: "Walk Score" },
      { value: "80", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Sumner - Glenwood a good neighborhood in Minneapolis?",
      answer:
        "Sumner - Glenwood is a neighborhood in transition, with significant new development alongside the legacy of urban renewal that devastated the original community. Its proximity to downtown is a major asset, and new housing has attracted a mix of residents. The neighborhood's challenges include ongoing crime concerns, limited commercial amenities, and the fundamental tension of building new community on land where an existing community was destroyed.",
    },
    {
      question: "Is Sumner - Glenwood, Minneapolis safe?",
      answer:
        "Safety in Sumner - Glenwood varies. The neighborhood's proximity to both downtown and North Minneapolis means that crime rates are mixed — some areas feel urban and well-trafficked, while others can feel isolated. Recent development has added more activity and eyes on the street. Crime rates are higher than in many Minneapolis neighborhoods but the trajectory has been improving with new investment and increased residential density.",
    },
    {
      question: "What is the history of Sumner - Glenwood?",
      answer:
        "Sumner - Glenwood has one of the most painful histories of any Minneapolis neighborhood. The Sumner Field public housing project, built in 1938, was one of the first public housing developments in the city and housed predominantly Black families. In the 1960s–1990s, urban renewal demolished much of the historic neighborhood, displacing thousands of Black residents. The name 'Sumner' endures as a reminder of that history and the community that was lost.",
    },
    {
      question: "How much do homes cost in Sumner - Glenwood?",
      answer:
        "Housing prices in Sumner - Glenwood vary widely, reflecting the neighborhood's mixed housing stock. Median prices range from roughly $200,000 to $350,000 in 2025. New construction and proximity to downtown push some properties higher. Affordable housing units are part of the mix, reflecting community advocacy for economic diversity in new development.",
    },
    {
      question: "Where exactly is Sumner - Glenwood in Minneapolis?",
      answer:
        "Sumner - Glenwood is located on the western edge of downtown Minneapolis, roughly bounded by Interstate 394 to the south, Plymouth Avenue to the north, Lyndale Avenue North to the east, and Penn Avenue North to the west. It occupies a transitional zone between downtown and the residential North Minneapolis neighborhoods.",
    },
    {
      question: "What development is happening in Sumner - Glenwood?",
      answer:
        "Sumner - Glenwood has been a focus of significant new development in recent years, including the Heritage Park mixed-income housing development that replaced the former Sumner-Olson public housing towers. New residential construction has added market-rate and affordable units. The neighborhood's proximity to downtown makes it attractive to developers, and the tension between new investment and community preservation is active.",
    },
    {
      question: "What schools serve Sumner - Glenwood?",
      answer:
        "Sumner - Glenwood is served by Minneapolis Public Schools. The neighborhood's small size and transitional character mean that families typically access schools in adjacent neighborhoods or use the district's open enrollment system. North High School is the nearest high school option.",
    },
    {
      question: "Is Sumner - Glenwood near the North Loop?",
      answer:
        "Yes — Sumner - Glenwood borders the North Loop (Warehouse District) to the east, and the two neighborhoods share a transitional zone along the edges of downtown. The North Loop's restaurants, shops, and amenities are within walking or biking distance for Sumner - Glenwood residents, though the neighborhoods have very different characters and demographics.",
    },
  ],
  nearby: [
    { name: "Near North", slug: "near-north", description: "Historic Black community to the north" },
    { name: "Harrison", slug: "harrison", description: "Diverse neighborhood to the west" },
    { name: "North Loop", slug: "north-loop", description: "Warehouse district development to the east" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "Quieter residential neighborhood to the southwest" },
    { name: "Loring Park", slug: "loring-park", description: "Urban neighborhood south of downtown" },
    { name: "Downtown West", slug: "downtown-west", description: "Downtown Minneapolis core to the east" },
  ],
  closing: {
    title: "What Sumner - Glenwood Carries",
    paragraphs: [
      "Sumner - Glenwood is a neighborhood that carries more history per acre than almost any other place in Minneapolis. The community that was here — the Black families who lived in Sumner Field, the businesses that served them, the networks that sustained them — was not lost to natural causes. It was demolished by deliberate policy choices made by people in positions of power who decided that this community was expendable. That history cannot be undone by new construction, however well-intentioned.",
      "What can be done is to build something on this land that acknowledges what was taken, serves the people who are here now, and resists the forces that would make Sumner - Glenwood into just another extension of downtown luxury development. The community advocates who have pushed for affordable housing, for the preservation of Sumner's name and history, and for development that includes rather than displaces are carrying on a tradition of resistance that is as old as the neighborhood itself. Whether the city will honor that resistance with genuine investment and genuine inclusion remains the defining question of this small, complicated, consequential place.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There is a spot in Sumner - Glenwood where you can stand and see
          the Minneapolis skyline rising to the east, the residential
          blocks of North Minneapolis stretching to the west, and, in the
          space between, the complicated terrain of a neighborhood that
          was once destroyed and is now being rebuilt — though whether the
          rebuilding will serve the people who lost the most remains an
          open question. New townhomes stand where public housing towers
          stood. A community that was displaced by urban renewal has been
          replaced by a different community, one that is being assembled
          from scratch. The name Sumner endures — a reminder of what was
          here before, and of the choices that erased it.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/sumner-glenwood/hero.webp"
        alt="Sumner - Glenwood neighborhood with mixed housing and the Minneapolis skyline in the background"
        caption="Sumner - Glenwood — where history, development, and the downtown skyline converge"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Sumner - Glenwood, Minneapolis?">
        <Prose>
          <p>
            Sumner - Glenwood is a small neighborhood on the western edge
            of downtown Minneapolis, bounded roughly by Interstate 394 to
            the south, Plymouth Avenue to the north, Lyndale Avenue North
            to the east, and Penn Avenue North to the west. Home to
            approximately 1,800 residents, it occupies a geographic and
            symbolic position between downtown&apos;s development energy
            and North Minneapolis&apos;s residential communities.
          </p>
          <p>
            The neighborhood borders the{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>{" "}
            to the east,{" "}
            <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
              Near North
            </Link>{" "}
            to the north, and{" "}
            <Link href="/neighborhoods/harrison" className="text-[#2a9d8f] hover:underline">
              Harrison
            </Link>{" "}
            to the west. Its history — particularly the destruction of the
            Sumner Field public housing community — makes it one of the
            most historically significant and emotionally charged
            neighborhoods in Minneapolis, even though its small size and
            transitional character can make it easy to overlook.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Sumner - Glenwood Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/sumner-glenwood/neighborhood-sign.webp"
          alt="Sumner - Glenwood neighborhood sign in Minneapolis"
          caption="The Sumner - Glenwood neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Sumner - Glenwood History & Origins">
        <Prose>
          <p>
            The history of Sumner - Glenwood is, in many ways, a
            concentrated version of the history of race and urban policy
            in America. The neighborhood&apos;s story includes the creation
            of public housing, its deterioration through neglect, and its
            demolition through urban renewal — each chapter driven by
            policy decisions that affected Black communities
            disproportionately and destructively.
          </p>
          <p>
            In the early twentieth century, the area that would become
            Sumner - Glenwood was part of the Near North community, home
            to Black families who had been concentrated in this part of
            the city by discriminatory housing covenants. In 1938, the
            Sumner Field Homes were built as one of Minneapolis&apos;s
            first public housing projects — designed to provide quality
            affordable housing for Black families who had been denied
            access to the private housing market. The project initially
            represented genuine progress: well-built units, community
            spaces, and a stable residential environment.
          </p>
          <p>
            Over the following decades, the public housing deteriorated
            as the city and federal government reduced investment in
            maintenance and social services. The Sumner-Olson high-rise
            towers, added later, became emblematic of the failures of
            high-rise public housing nationwide — concentrated poverty,
            inadequate maintenance, and the social isolation that results
            from warehousing poor families in under-resourced buildings.
          </p>
          <p>
            The demolition of the Sumner-Olson towers in the late 1990s
            and early 2000s displaced hundreds of families — predominantly
            Black families who had called this neighborhood home for
            generations. The displacement was part of the national HOPE VI
            program, which replaced high-rise public housing with
            mixed-income developments. Heritage Park, the mixed-income
            development that replaced the towers, was designed to avoid
            the concentration of poverty that had defined the previous
            housing. But the original residents — the families who were
            displaced — were largely not the families who moved into the
            new development. The demolition solved a housing problem by
            removing the people who had the housing problem.
          </p>
          <p>
            This history is not background. It is the foreground of
            everything happening in Sumner - Glenwood today, and any
            discussion of the neighborhood&apos;s future that does not
            reckon with it is incomplete.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Sumner - Glenwood">
        <Prose>
          <p>
            Sumner - Glenwood in 2026 is a neighborhood being assembled
            rather than maintained. The Heritage Park development, which
            replaced the Sumner-Olson towers, has created a mixed-income
            community of townhomes, apartments, and single-family houses
            that is physically attractive and demographically intentional.
            Market-rate units sit alongside affordable units, and the
            development has attracted a mix of residents — young
            professionals drawn by downtown proximity, families accessing
            affordable housing, and long-term community members who
            maintained ties to the area.
          </p>
          <p>
            The neighborhood&apos;s character is still forming. Unlike
            Near North or Hawthorne, which have decades-deep community
            networks and institutional memories, Sumner - Glenwood is
            building these from scratch — or, more accurately, rebuilding
            them after the original networks were destroyed by
            displacement. Community gatherings, neighborhood meetings,
            and shared spaces are creating new bonds, but the depth of
            community that comes from generational continuity is
            something that takes time and cannot be manufactured by
            good design alone.
          </p>
          <p>
            The proximity to downtown is the neighborhood&apos;s most
            obvious asset. The Minneapolis skyline is visible from many
            points in the neighborhood, and the walk to the North Loop&apos;s
            restaurants and amenities is short. This proximity also
            creates pressure — developers see the land values in the
            North Loop and look west, and the question of whether
            Sumner - Glenwood will become an affordable, diverse community
            or an extension of downtown luxury development is being
            decided now.
          </p>
        </Prose>
        <Quote
          text="They tore down the projects and built something nicer. But the people who lived there — where did they go? That's the question nobody wants to answer."
          cite="Former Sumner-Olson resident"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Sumner - Glenwood Food, Drink & Local Spots">
        <Prose>
          <p>
            Sumner - Glenwood&apos;s small size and transitional character
            mean that commercial options within the neighborhood are
            limited. The primary advantage is proximity to other
            neighborhoods with developed food scenes — the North Loop to
            the east, Broadway Avenue to the north, and downtown to the
            southeast.
          </p>
        </Prose>

        <ArticleSubsection title="What's Nearby">
          <PlaceCardComponent place={{ name: "North Loop Restaurants", tag: "Nearby Dining", price: "$$–$$$", description: "The North Loop's extensive restaurant scene — including nationally recognized spots — is within walking distance of Sumner - Glenwood. The contrast between the dining options across the neighborhood boundary and the limited commercial presence within Sumner - Glenwood itself is notable." }} />
          <PlaceCardComponent place={{ name: "Broadway Avenue Corridor", tag: "North Minneapolis Dining", price: "$–$$", description: "The Broadway Avenue commercial corridor in Near North and Hawthorne provides community-oriented dining options — soul food, Somali restaurants, and small businesses serving the Northside community. Accessible by a short drive or bike ride north." }} />
          <PlaceCardComponent place={{ name: "Downtown Minneapolis", tag: "Urban Dining", price: "$$–$$$", description: "Downtown's restaurants, bars, and food halls are easily accessible from Sumner - Glenwood. The neighborhood's position at the edge of downtown means that urban dining options are closer than for almost any other North Minneapolis neighborhood." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Sumner - Glenwood">
        <Prose>
          <p>
            Sumner - Glenwood has limited park space within its boundaries
            but benefits from proximity to several significant green spaces
            and trail connections.
          </p>
        </Prose>

        <ArticleSubsection title="Sumner Field Park">
          <Prose>
            <p>
              The historic Sumner Field provides green space within the
              neighborhood. The park carries historical significance as
              part of the original Sumner community, and its preservation
              represents a connection to the neighborhood&apos;s history
              even as the surrounding landscape has been transformed by
              new development.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Bassett Creek Trail & Loring Park">
          <Prose>
            <p>
              The Bassett Creek Trail provides a cycling and walking
              connection through the area, linking to the broader
              Minneapolis trail network. Loring Park, to the south and
              east, is accessible and provides a well-maintained urban
              park with a lake, walking paths, and community programming.
              The park connections help offset Sumner - Glenwood&apos;s
              limited internal green space.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Sumner - Glenwood Schools">
        <Prose>
          <p>
            Sumner - Glenwood&apos;s small population and transitional
            character mean that the neighborhood does not have schools
            within its boundaries. Families access Minneapolis Public
            Schools in adjacent neighborhoods — Near North, Harrison,
            and other areas — or use the district&apos;s open enrollment
            system to access magnet programs and specialty schools across
            the city. North High School is the nearest high school option.
          </p>
          <p>
            The Heritage Park development and other new housing have
            attracted families with school-age children, and the question
            of educational access and quality is increasingly relevant
            for the neighborhood&apos;s growing residential population.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Sumner - Glenwood Real Estate & Housing">
        <Prose>
          <p>
            Sumner - Glenwood&apos;s housing market reflects its
            transitional character. The Heritage Park development provides
            a mix of market-rate and affordable housing — townhomes,
            apartments, and some single-family homes — designed to create
            a mixed-income community. Prices for market-rate properties
            range from roughly $200,000 to $350,000 in 2025, with
            variation depending on unit type and size.
          </p>
          <p>
            The neighborhood&apos;s proximity to downtown gives it
            development appeal, and new projects continue to add housing
            units. Affordable housing requirements in some developments
            have ensured a mix of income levels, though the balance
            between affordability and market pressure is constantly
            negotiated.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              The housing market here is different from most of North
              Minneapolis — less about older bungalows needing rehab and
              more about newer construction at various price points.
              Affordable housing units are available through income-
              qualified programs. Market-rate townhomes and condos range
              from $250,000 to $400,000 depending on size and features.
              Rental options include both affordable and market-rate
              apartments in newer buildings.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Sumner - Glenwood">
        <Prose>
          <p>
            Sumner - Glenwood benefits enormously from its location.
            Downtown Minneapolis is approximately five minutes by car and
            easily accessible by bike or on foot. The Walk Score of 65
            and Bike Score of 80 reflect the proximity to downtown
            amenities and the growing trail connections in the area.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along Olson
            Memorial Highway (Highway 55) and nearby corridors. The
            proximity to downtown means that multiple transit options are
            within reach. I-394 provides regional highway access, though
            the highway also serves as a barrier between Sumner - Glenwood
            and neighborhoods to the south.
          </p>
          <p>
            For a North Minneapolis neighborhood, the transit and mobility
            options are above average, though the car remains the dominant
            mode of transportation. The Bassett Creek Trail and other
            cycling routes provide non-motorized connections to the broader
            Minneapolis trail network.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Sumner - Glenwood is a neighborhood where every change carries
            the weight of history. The tensions here are not about whether
            change is happening — it is happening rapidly — but about
            whether the change will honor or betray the community that
            was lost.
          </p>
        </Prose>

        <ArticleSubsection title="Development and Displacement History">
          <Prose>
            <p>
              The central tension in Sumner - Glenwood is embedded in its
              physical landscape. The Heritage Park development was built
              on the site of demolished public housing — housing that was
              home to a Black community that was displaced, not relocated.
              The new development is well-designed and includes affordable
              units, but the original community was scattered, and the
              promise that displaced residents would have a right to
              return was imperfectly kept. This history makes every new
              development in the neighborhood a referendum on who the
              neighborhood is for.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Downtown Expansion Pressure">
          <Prose>
            <p>
              As the North Loop has boomed and downtown has expanded
              westward, Sumner - Glenwood has come under increasing
              development pressure. Land near downtown is valuable, and
              the neighborhood&apos;s position makes it attractive to
              developers building market-rate housing. Community advocates
              have pushed for development agreements that include
              affordable housing and community benefits, with some
              success. But the market forces driving development are
              powerful, and the risk of Sumner - Glenwood becoming a
              luxury extension of downtown — erasing the last traces of
              its Northside identity — is real.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Community Formation">
          <Prose>
            <p>
              Sumner - Glenwood faces the unusual challenge of building
              community rather than maintaining it. The residents who
              live here now are, in many cases, new to each other and to
              the neighborhood. The institutions, relationships, and
              shared history that hold older neighborhoods together are
              still being created. This is both a challenge and an
              opportunity — the community is being built intentionally,
              with the chance to learn from the mistakes that destroyed
              the previous one. Whether that chance is taken will depend
              on the choices made in the coming years.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Sumner - Glenwood FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
