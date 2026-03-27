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
    title: "Windom Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Windom Park, Minneapolis — a quiet Northeast residential neighborhood near Columbia Park, family-friendly streets, affordable homes, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Windom Park",
  deck: "Northeast Minneapolis at its quietest — where tree-lined residential streets border Columbia Park, families put down roots in modest homes, and the neighborhood's name is the only thing it shares with its South Minneapolis counterpart.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Windom Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Windom Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Windom Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$290K–$400K", label: "Median home sale price (2025 data)" },
      { value: "$1,050–$1,400", label: "Typical 1BR apartment rent (2025)" },
      { value: "58", label: "Walk Score" },
      { value: "75", label: "Bike Score" },
      { value: "45", label: "Transit Score" },
      { value: "65%+", label: "Owner-occupied housing" },
      { value: "Columbia Park", label: "Defining park amenity" },
    ],
  },
  faq: [
    {
      question: "Is Windom Park a good neighborhood in Minneapolis?",
      answer:
        "Windom Park is an excellent choice for families and anyone seeking quiet residential living in Northeast Minneapolis. The neighborhood offers affordable homes by Northeast standards, proximity to Columbia Park (one of the best parks in the quadrant), a strong sense of community, and the general character of Northeast without the noise and traffic of the brewery and arts districts. The tradeoff is limited walkable commercial options and a pace of life that is more suburban than urban.",
    },
    {
      question: "Is Windom Park, Minneapolis safe?",
      answer:
        "Windom Park is among the safer neighborhoods in Northeast Minneapolis. The combination of residential character, high owner-occupancy, and an active community contributes to low crime rates relative to the city average. Property crime occurs as it does throughout Minneapolis, but violent crime is uncommon. Residents generally feel safe walking the neighborhood&apos;s streets and using Columbia Park at all hours.",
    },
    {
      question: "Where exactly is Windom Park in Minneapolis?",
      answer:
        "Windom Park is in the northern section of Northeast Minneapolis, bounded roughly by Lowry Avenue NE to the south, 37th Avenue NE to the north, Central Avenue NE to the west, and Johnson Street NE to the east. It is adjacent to Columbia Park to the north and east, Audubon Park to the east, and Waite Park to the south. The neighborhood is in the quieter, more residential section of Northeast, away from the commercial and entertainment corridors that define the neighborhoods closer to the river.",
    },
    {
      question: "Is Windom Park the same as Windom?",
      answer:
        "No. Windom Park is in Northeast Minneapolis, near Columbia Park. Windom is in South Minneapolis, near Minnehaha Creek. They are entirely separate neighborhoods in different parts of the city with different characters and different surrounding amenities. The shared name is a historical naming coincidence, not a geographic or community relationship.",
    },
    {
      question: "How much does it cost to live in Windom Park?",
      answer:
        "Windom Park is one of the more affordable neighborhoods in Northeast Minneapolis. Single-family homes typically sell in the $290,000 to $400,000 range as of 2025, below the prices in the more visible Northeast neighborhoods like Logan Park and Northeast Park. Rentals range from approximately $1,050 to $1,400 for a one-bedroom. The neighborhood offers solid value for the Northeast address and the proximity to Columbia Park.",
    },
    {
      question: "Is Windom Park walkable?",
      answer:
        "Moderately. The Walk Score of 58 reflects limited commercial options within the neighborhood&apos;s primarily residential interior. Central Avenue NE, the main commercial corridor of Northeast, runs along or near the western edge and provides walkable access to restaurants, shops, and services. The interior streets are excellent for walking as recreation — quiet, tree-lined, and connected to Columbia Park — but daily errands often require a bike or car.",
    },
    {
      question: "What are the schools near Windom Park?",
      answer:
        "Windom Park is served by Minneapolis Public Schools. Waite Park Elementary and other Northeast elementary schools serve the neighborhood through the district&apos;s enrollment system. Northeast Middle School provides the primary middle school option, and Edison High School serves the Northeast quadrant for high school. The neighborhood&apos;s family orientation means that school quality and access are actively discussed topics among parents.",
    },
    {
      question: "What is Columbia Park?",
      answer:
        "Columbia Park is a large regional park that borders Windom Park to the north and east. The park includes Columbia Golf Course, playgrounds, ball fields, a pool, walking and biking trails, and significant green space. It is one of the largest and most popular parks in Northeast Minneapolis and provides Windom Park residents with a major recreational amenity directly adjacent to their neighborhood. The park&apos;s size and programming make it a genuine community resource rather than just a neighborhood green space.",
    },
    {
      question: "How does Windom Park compare to other Northeast neighborhoods?",
      answer:
        "Windom Park is quieter, more residential, and more affordable than the more visible Northeast neighborhoods. It lacks the brewery taprooms of Beltrami, the arts scene of Northeast Park, the riverfront dining of St. Anthony Main, and the commercial energy of Logan Park. What it offers instead is space, affordability, Columbia Park access, and a family-friendly environment that the more urban parts of Northeast cannot match. People who live in Windom Park tend to prioritize these qualities over the nightlife and dining that attract people to other parts of the quadrant.",
    },
    {
      question: "Is Windom Park gentrifying?",
      answer:
        "Windom Park has seen gradual home value appreciation consistent with the broader Northeast Minneapolis market, but it has not experienced the rapid gentrification that has transformed neighborhoods closer to the river and the brewery districts. The neighborhood&apos;s distance from the commercial hot spots, its primarily residential character, and its affordable price point have kept it off the most intense development radar. Homes are being updated and renovated, but the neighborhood&apos;s fundamental character has been stable.",
    },
  ],
  nearby: [
    { name: "Columbia Park", slug: "columbia-park", description: "Quiet residential surrounding a large park" },
    { name: "Audubon Park", slug: "audubon-park", description: "Residential Northeast with community identity" },
    { name: "Waite Park", slug: "waite-park", description: "Residential Northeast near Central Avenue" },
    { name: "Northeast Park", slug: "northeast-park", description: "Arts district energy in Northeast Minneapolis" },
    { name: "Logan Park", slug: "logan-park", description: "Northeast arts district and creative energy" },
  ],
  closing: {
    title: "What Makes Windom Park Worth Knowing",
    paragraphs: [
      "Windom Park is the kind of neighborhood that rewards living in more than it rewards visiting. There is no reason to come here unless you live here, and that absence of external traffic is part of what makes it work. The streets are quiet because nobody is driving through them to get somewhere else. The park is usable because it is not a destination for the entire city — it is a neighborhood park, used by neighborhood people, for neighborhood purposes. The houses are affordable because Windom Park has not been discovered by the market forces that have inflated prices in the more visible parts of Northeast. All of these qualities are connected, and all of them are fragile in the way that quiet things are fragile in loud cities.",
      "Columbia Park is the anchor. The park&apos;s size and quality give Windom Park an amenity that most neighborhoods would covet — a large green space with mature trees, athletic facilities, walking trails, and the simple, unstructured space that allows children to play and adults to breathe. Standing at the edge of Columbia Park on a September afternoon, watching kids play soccer while their parents talk on the sideline, it is clear that this is a neighborhood that has found its equilibrium. The balance between affordability and quality, between quiet and connection, between Northeast identity and its own particular character, is working. The challenge is keeping it that way as the rest of Northeast continues to change around it.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Thursday evening in September, a man is walking his dog
          along the edge of Columbia Park at the northern boundary of
          Windom Park. The sky is doing that thing Minnesota skies do in
          early fall — layered clouds in shades of amber and slate,
          backlit by a sun that is going down earlier every day. Across
          the park, a youth soccer practice is winding down, kids in
          mismatched jerseys drifting toward the parking lot where parents
          wait in running cars. The man stops at a bench, sits down, and
          watches the light change. He has lived in Windom Park for eleven
          years. Before that, he lived in Logan Park, closer to the bars
          and the buzz. He does not miss it. &ldquo;I can get there in ten
          minutes if I want it,&rdquo; he says. &ldquo;But I almost
          never want it.&rdquo;
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/windom-park/hero.webp"
        alt="Quiet residential street in Windom Park, Minneapolis, with mature trees and family homes"
        caption="Windom Park — Northeast Minneapolis residential living at its most settled"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Windom Park, Minneapolis?">
        <Prose>
          <p>
            Windom Park is a residential neighborhood in the northern section
            of Northeast Minneapolis, defined by its proximity to Columbia
            Park, its quiet residential streets, and a community character
            that prioritizes family life and neighborhood stability over the
            commercial and cultural energy that defines the more visible
            parts of Northeast. With roughly 3,500 residents, it is a
            modestly sized neighborhood that functions as a residential
            enclave within the broader Northeast quadrant.
          </p>
          <p>
            The neighborhood is bounded roughly by Lowry Avenue NE to the
            south, 37th Avenue NE to the north, Central Avenue NE to the
            west, and Johnson Street NE to the east. Columbia Park, the large
            regional park to the north and east, is Windom Park&apos;s most
            significant amenity — a green space that provides ball fields,
            a golf course, a pool, playgrounds, and the kind of mature
            tree canopy that takes half a century to produce.
          </p>
          <p>
            Windom Park sits in the quieter tier of Northeast Minneapolis,
            away from the brewery and arts districts that have defined
            Northeast&apos;s identity in the popular imagination. This
            distance is not accidental — it reflects the neighborhood&apos;s
            character as a place where people live rather than a place where
            people go. The distinction matters, and the residents who
            choose Windom Park make the choice deliberately.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Windom Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/windom-park/neighborhood-sign.webp"
          alt="Windom Park neighborhood sign in Minneapolis"
          caption="The Windom Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Windom Park History & Origins">
        <Prose>
          <p>
            Before European settlement, the land that is now Windom Park was
            part of the homeland of the Dakota people. The terrain here —
            gently rolling prairie with scattered hardwoods — was part of
            the broader landscape that the Mdewakanton Dakota used for
            hunting, gathering, and travel. The area&apos;s distance from
            the Mississippi River made it less central to river-oriented
            activities but no less part of the indigenous homeland that
            European settlement displaced.
          </p>
          <p>
            European settlement and development came in the late 19th and
            early 20th centuries, as Northeast Minneapolis expanded
            northward from the original St. Anthony settlement near the
            river. The neighborhood was platted for residential use,
            following the grid pattern that characterizes Northeast, and
            the housing stock that fills it today was largely built between
            the 1910s and 1950s — a mix of bungalows, one-and-a-half-story
            houses, and modest two-stories constructed for the working-class
            and middle-class families who populated this section of the
            city.
          </p>
          <p>
            The neighborhood takes its name from Windom Park, the green
            space within its boundaries, which was in turn named for
            William Windom, the Minnesota politician who also gave his
            name to the Windom neighborhood in South Minneapolis. The park
            provided a community gathering space and recreational amenity
            that anchored the neighborhood&apos;s identity from its early
            years.
          </p>
          <p>
            Through the 20th century, Windom Park followed the trajectory
            of many Northeast Minneapolis neighborhoods: stable residential
            population, strong ethnic heritage (particularly Scandinavian,
            German, and Polish), church-centered community life, and a
            working-class identity tied to the industries along the river
            and the rail corridors. The neighborhood&apos;s distance from
            the commercial core of Northeast — further from Central Avenue
            and the river — gave it a quieter character that has persisted
            as the southern parts of Northeast have transformed.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Windom Park">
        <Prose>
          <p>
            Living in Windom Park is living in a neighborhood that has
            opted out of the competition to be the next hot area and is
            entirely comfortable with the decision. The streets are
            residential in the most straightforward sense — houses, yards,
            sidewalks, the occasional garage sale sign taped to a light
            pole. The homes are modest and well-maintained, the lots are
            established with mature trees and gardens, and the general
            atmosphere is one of people getting on with the business of
            living without the self-consciousness that characterizes
            trendier neighborhoods.
          </p>
          <p>
            Columbia Park is the neighborhood&apos;s defining amenity and
            the reason many families choose Windom Park over other
            Northeast options. The park is large enough to absorb
            significant use without feeling crowded — ball fields for
            organized sports, a golf course, a pool for summer, walking
            trails for daily exercise, and open green space for the
            unstructured play that children need and that overprogrammed
            urban environments often deny them. For families with kids,
            the park is not an amenity — it is the amenity, the thing
            that makes the neighborhood work.
          </p>
          <p>
            Central Avenue NE, which runs along or near Windom Park&apos;s
            western edge, provides access to Northeast&apos;s primary
            commercial corridor. The avenue&apos;s restaurants, shops,
            groceries, and services are walkable from the western sections
            of the neighborhood and accessible by a short drive or bike
            ride from anywhere within it. This proximity to Central
            Avenue gives Windom Park more commercial access than its
            quiet interior streets might suggest.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/columbia-park" className="text-[#2a9d8f] hover:underline">
              Columbia Park
            </Link>{" "}
            to the north,{" "}
            <Link href="/neighborhoods/audubon-park" className="text-[#2a9d8f] hover:underline">
              Audubon Park
            </Link>{" "}
            to the east, and{" "}
            <Link href="/neighborhoods/waite-park" className="text-[#2a9d8f] hover:underline">
              Waite Park
            </Link>{" "}
            to the south share Windom Park&apos;s residential character,
            forming a band of quiet Northeast neighborhoods that
            collectively offer an alternative to the more urban,
            commercial parts of the quadrant.
          </p>
        </Prose>
        <Quote
          text="People ask me why I live all the way up here in Northeast when the bars and the breweries are all down by the river. I tell them I have a park the size of a small town and a mortgage I can actually afford. They stop asking."
          cite="Windom Park homeowner, 7 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Windom Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Windom Park does not have a significant commercial scene within
            its residential interior. Dining and shopping options are
            concentrated along Central Avenue NE to the west and in the
            broader Northeast commercial corridors.
          </p>
        </Prose>

        <ArticleSubsection title="Central Avenue NE">
          <Prose>
            <p>
              Central Avenue — Northeast&apos;s primary commercial corridor —
              runs along or near Windom Park&apos;s western boundary and
              provides the neighborhood&apos;s most accessible dining and
              shopping options. The avenue&apos;s multicultural restaurant
              scene includes Vietnamese, Mexican, Middle Eastern, and
              American options at a range of price points. Grocery stores,
              pharmacies, and basic services are also available along the
              corridor. Central Avenue&apos;s commercial energy fades as
              you move north past Lowry, but there are still functional
              businesses serving the community in Windom Park&apos;s
              section.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Northeast">
          <Prose>
            <p>
              The broader Northeast dining scene — breweries, taprooms,
              restaurants, and bars — is accessible from Windom Park via
              Central Avenue or connecting streets. The concentration of
              dining options in{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>{" "}
              and the Hennepin Avenue corridor is a 10-to-15-minute drive
              south. For daily groceries, options along Central Avenue and
              in the Columbia Heights commercial area to the north provide
              the nearest full-service stores.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Windom Park">
        <Prose>
          <p>
            Outdoor access is Windom Park&apos;s strongest amenity,
            anchored by Columbia Park and supplemented by the neighborhood&apos;s
            own green spaces and the broader Northeast park system.
          </p>
        </Prose>

        <ArticleSubsection title="Columbia Park">
          <Prose>
            <p>
              Columbia Park is the defining outdoor feature of the Windom
              Park area. The park is one of the largest in Northeast
              Minneapolis, offering Columbia Golf Course (a public 18-hole
              course), a swimming pool, ball fields, tennis courts,
              playgrounds, walking and biking trails, and extensive green
              space with mature tree canopy. The park serves as both a
              neighborhood amenity and a regional destination, drawing
              users from across Northeast and beyond. For Windom Park
              residents, Columbia Park is essentially a backyard that
              someone else maintains — the proximity is close enough that
              a child can walk to the playground and a parent can see
              them from the front porch.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/windom-park/columbia-park.webp"
            alt="Columbia Park green space near Windom Park, Minneapolis"
            caption="Columbia Park — the large regional park that anchors Windom Park's quality of life"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Windom Park (the park)">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park provides a more
              intimate green space — a playground, open lawn area, and
              gathering space for community events. It is a neighborhood
              park in the best sense: small enough to feel like your own,
              maintained enough to use daily, and located centrally enough
              that most of the neighborhood can walk to it. The park hosts
              neighborhood events, block parties, and the informal daily
              use that makes neighborhood parks essential to community
              cohesion.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Broader Park Connections">
          <Prose>
            <p>
              The Northeast park system connects Windom Park to additional
              green spaces through a network of parks and trails. The
              Mississippi River trails are accessible to the west, and
              the Grand Rounds system provides connections to parks
              throughout the city. For a residential neighborhood without
              a riverfront or a lake, Windom Park&apos;s park access is
              remarkably strong — Columbia Park alone provides amenities
              that many neighborhoods cannot match.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Windom Park Schools">
        <Prose>
          <p>
            Windom Park is served by Minneapolis Public Schools, with
            several options available through the district&apos;s
            enrollment system. Waite Park Elementary and other Northeast
            elementary schools serve neighborhood families. The
            neighborhood&apos;s family orientation makes school quality
            a high-priority topic, and parents are actively engaged in
            school selection and governance.
          </p>
          <p>
            For middle school, Northeast Middle School is the primary
            option for the quadrant. Edison High School serves the
            Northeast area for high school, providing a comprehensive
            high school option that draws from across the quadrant&apos;s
            diverse neighborhoods.
          </p>
          <p>
            Several charter schools in Northeast Minneapolis also serve
            Windom Park families, providing alternatives to the
            district&apos;s offerings. The practical reality is that
            families in Windom Park have several school options within
            reasonable distance, and the choice among them is an active
            part of neighborhood life.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Windom Park Real Estate & Housing">
        <Prose>
          <p>
            Windom Park&apos;s housing market is dominated by single-family
            homes from the early-to-mid 20th century, consistent with the
            broader Northeast Minneapolis pattern. The housing stock is
            modest in scale — bungalows, one-and-a-half-story houses, and
            some two-stories — built for working-class and middle-class
            families in the architectural styles of their eras.
          </p>
        </Prose>

        <ArticleSubsection title="Pricing & Market">
          <Prose>
            <p>
              Median home sale prices range from approximately $290,000 to
              $400,000 as of 2025, making Windom Park one of the more
              affordable options in Northeast Minneapolis. The pricing
              reflects the neighborhood&apos;s distance from the river and
              the commercial hot spots, the housing stock&apos;s modest
              scale, and the general market position of the northern
              Northeast neighborhoods. For buyers seeking a Northeast
              address without Northeast&apos;s peak pricing, Windom Park
              offers genuine value.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Market Character">
          <Prose>
            <p>
              Owner-occupancy exceeds 65 percent, reflecting a stable
              community of families and long-term residents. The rental
              market consists primarily of duplexes and small multi-family
              properties rather than large apartment buildings, keeping the
              neighborhood&apos;s scale and character consistent. Homes
              sell at a moderate pace — not the bidding wars of the hottest
              markets, but not languishing either. The buyers tend to be
              families looking for value and space, often first-time
              homebuyers or families moving from more expensive
              neighborhoods.
            </p>
            <p>
              Renovation activity is steady as new owners update the aging
              housing stock. The improvements are typically practical —
              new kitchens, updated bathrooms, energy-efficient windows —
              rather than the dramatic gut-renovations seen in neighborhoods
              where price appreciation justifies larger investments. The
              result is a housing stock that is gradually improving without
              losing its character or its affordability.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/windom-park/residential.webp"
        alt="Residential street in Windom Park, Northeast Minneapolis, with mature trees"
        caption="Windom Park — modest homes, mature lots, and the quiet stability of established Northeast residential life"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Windom Park">
        <Prose>
          <p>
            Windom Park is car-oriented by default, with the Walk Score of
            58 and Transit Score of 45 reflecting limited walkable
            commercial options and moderate bus service. Central Avenue NE
            provides the nearest transit corridor, with Metro Transit bus
            routes connecting to downtown Minneapolis and other destinations.
            Headways are reasonable during peak hours and longer off-peak.
          </p>
          <p>
            Biking is practical and pleasant, with a Bike Score of 75
            reflecting the neighborhood&apos;s flat terrain, quiet streets,
            and connections to the broader bike network. The ride to downtown
            Minneapolis is approximately 5 miles — manageable for bike
            commuters, though most residents drive. Columbia Park provides
            excellent cycling and walking paths for recreation.
          </p>
          <p>
            Driving is the primary mode for most trips. The road network
            provides good access to Interstate 35W and Highway 65,
            connecting the neighborhood to downtown (approximately 10-15
            minutes by car) and the broader metro. Street parking is
            abundant and free in the residential areas. The Columbia Heights
            commercial area to the north provides additional shopping
            and services accessible by a short drive.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in Windom Park">
        <Prose>
          <p>
            Windom Park is changing at the pace that most of its residents
            prefer: slowly. The primary forces of change are the broader
            Northeast Minneapolis real estate market — which has pushed
            buyers northward as prices in the more visible neighborhoods
            have risen — and the generational turnover as younger families
            replace long-term residents.
          </p>
          <p>
            The influx of younger buyers is generally positive for the
            neighborhood — it brings investment in the housing stock,
            energy to the neighborhood association, and enrollment to the
            schools. But it also brings change: different expectations
            about housing standards, different commercial preferences,
            and the subtle cultural shifts that accompany any demographic
            transition. Long-term residents notice these changes, even
            when they are small — a new fence style here, a different
            landscaping approach there, the kind of micro-evolution that
            registers over years rather than months.
          </p>
          <p>
            Central Avenue&apos;s continued evolution as a commercial
            corridor affects Windom Park indirectly. As the avenue
            attracts new businesses and restaurants, the commercial
            options available to Windom Park residents expand. Whether
            this commercial evolution extends far enough north to
            directly affect the Windom Park section of the avenue remains
            to be seen — the commercial energy tends to concentrate in
            the southern sections of Central Avenue, closer to the arts
            and brewery districts.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Windom Park FAQ">
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
