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
    title: "Windom, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Windom, Minneapolis — a quiet South Minneapolis residential neighborhood near Minnehaha Creek, family-friendly streets, parks, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Windom",
  deck: "South Minneapolis at its most comfortably residential — where Minnehaha Creek winds through quiet streets, families walk to neighborhood parks, and the only controversy is whether the corner lot should have planted a spruce or a maple.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Windom?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Windom" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Windom, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$310K–$420K", label: "Median home sale price (2025 data)" },
      { value: "$1,100–$1,500", label: "Typical 1BR apartment rent (2025)" },
      { value: "60", label: "Walk Score" },
      { value: "78", label: "Bike Score" },
      { value: "48", label: "Transit Score" },
      { value: "70%+", label: "Owner-occupied housing" },
      { value: "Minnehaha Creek", label: "Defining natural feature" },
    ],
  },
  faq: [
    {
      question: "Is Windom a good neighborhood in Minneapolis?",
      answer:
        "Windom is an excellent neighborhood for families and anyone who prioritizes quiet residential living, park access, and community stability over nightlife, walkable dining, and urban intensity. The neighborhood consistently ranks among the most family-friendly in South Minneapolis, with well-maintained housing stock, good schools nearby, and Minnehaha Creek providing a natural amenity that is genuinely special. The tradeoff is limited walkable commercial options and a pace of life that some would describe as suburban within city limits.",
    },
    {
      question: "Is Windom, Minneapolis safe?",
      answer:
        "Windom is one of the safer neighborhoods in Minneapolis. Crime rates are consistently below the citywide average, and the neighborhood&apos;s residential character, high owner-occupancy rate, and strong community engagement contribute to an environment where families feel comfortable letting their kids play outside. Property crime occurs as it does throughout the city, but violent crime is uncommon. The neighborhood&apos;s internal streets feel safe for walking and biking at all hours.",
    },
    {
      question: "Where exactly is Windom in Minneapolis?",
      answer:
        "Windom is in the southern section of Minneapolis, bounded roughly by Minnehaha Creek and 54th Street to the north, 60th Street to the south, Chicago Avenue to the west, and Cedar Avenue to the east. It sits in the band of South Minneapolis neighborhoods between the Nokomis area and the Diamond Lake / Field neighborhoods. Minnehaha Creek, which runs along or near the neighborhood&apos;s northern boundary, is its most significant natural feature.",
    },
    {
      question: "How much does it cost to live in Windom?",
      answer:
        "Windom is moderately priced by Minneapolis standards. Single-family homes typically sell in the $310,000 to $420,000 range as of 2025, reflecting the quality of the housing stock, the neighborhood&apos;s family-friendly character, and Minnehaha Creek proximity. Rentals are less common in this predominantly owner-occupied neighborhood, but one-bedroom apartments in the available rental stock range from approximately $1,100 to $1,500. The neighborhood offers solid value — better homes and more space per dollar than neighborhoods closer to the lakes or the Uptown/Southwest corridor.",
    },
    {
      question: "Is Windom walkable?",
      answer:
        "Moderately. The Walk Score of 60 reflects a neighborhood that has some walkable amenities — small commercial nodes along the edges, parks within walking distance — but is primarily residential and car-oriented for daily errands like grocery shopping. The internal streets are excellent for walking and biking as recreation, with the Minnehaha Creek trail providing a particularly pleasant route. But this is not a neighborhood where you can walk to a restaurant, a coffee shop, and a grocery store without effort.",
    },
    {
      question: "What are the schools in Windom?",
      answer:
        "Windom is served by Minneapolis Public Schools, with several elementary options nearby. Kenny Elementary and other South Minneapolis elementary schools serve the neighborhood. For middle school, students access options through the district&apos;s enrollment system. Roosevelt High School and South High School are the nearest high school options. The neighborhood&apos;s family-friendly character means that school quality and access are topics that parents engage with actively.",
    },
    {
      question: "Is Windom near Minnehaha Falls?",
      answer:
        "Windom is near Minnehaha Creek, which feeds Minnehaha Falls, but the falls themselves are located several miles to the northeast in the Minnehaha Park area near the Mississippi River. The creek runs along or near Windom&apos;s northern boundary, providing trail access, green space, and the natural beauty associated with the creek corridor. Biking from Windom to Minnehaha Falls along the creek trail is a popular and scenic ride.",
    },
    {
      question: "How does Windom compare to Windom Park?",
      answer:
        "Windom and Windom Park share a name but are in different parts of Minneapolis. Windom is in South Minneapolis, near Minnehaha Creek. Windom Park is in Northeast Minneapolis, near Columbia Park. The two neighborhoods are not adjacent and have different characters — Windom is a quieter South Minneapolis residential area, while Windom Park has the Northeast identity and different surrounding amenities. The shared name is a historical coincidence rather than a geographic relationship.",
    },
    {
      question: "Is Windom gentrifying?",
      answer:
        "Windom has experienced steady home value appreciation consistent with the broader South Minneapolis market, but it has not been subject to the rapid, transformative gentrification seen in neighborhoods like Uptown, Northeast, or the North Loop. The neighborhood&apos;s stable owner-occupancy rate, family orientation, and distance from commercial hot spots have insulated it from the most dramatic market swings. Homes are being renovated and updated, but the character of the neighborhood has remained consistent.",
    },
    {
      question: "What is the Minnehaha Creek trail?",
      answer:
        "The Minnehaha Creek trail is a bicycle and pedestrian path that follows Minnehaha Creek from its origins at Lake Minnetonka through the western suburbs and across South Minneapolis to Minnehaha Falls and the Mississippi River. The trail passes near Windom&apos;s northern boundary, providing residents with direct access to one of the best recreational trails in the metro area. The trail is popular for walking, running, and biking year-round, and the creek corridor provides a linear park that adds significant natural beauty to the neighborhoods it crosses.",
    },
  ],
  nearby: [
    { name: "Diamond Lake", slug: "diamond-lake", description: "Quiet South Minneapolis residential" },
    { name: "Field", slug: "field", description: "Residential South Minneapolis near the creek" },
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis and South Minneapolis community" },
    { name: "Howe", slug: "howe", description: "Residential neighborhood near Minnehaha Falls" },
    { name: "Standish", slug: "standish", description: "Quiet residential South Minneapolis" },
  ],
  closing: {
    title: "What Makes Windom Worth Knowing",
    paragraphs: [
      "Windom is not the kind of neighborhood that shows up on lists of the coolest places to live, and it is not trying to be. What it offers is something that sounds simple until you try to find it in a city: a quiet residential neighborhood with good bones, a creek in the backyard, parks where kids actually play, and a community of people who have chosen stability over spectacle. The houses are not architectural statements — they are well-built homes from the mid-20th century that have been maintained by people who plan to stay. The streets are not Instagram corridors — they are sidewalks where you wave at the same neighbors you waved at yesterday.",
      "Minnehaha Creek is the thread that ties Windom to something larger than its own boundaries. The creek connects the neighborhood to the lake country to the west and the Mississippi River to the east, a ribbon of water and green that reminds residents, daily, that they live in a city that takes its natural amenities seriously. Standing on the creek path in Windom on a summer evening, watching the light come through the cottonwoods and listening to the water move, it is hard to believe that downtown Minneapolis is twenty minutes away. That distance — real and psychological — is what Windom is selling. For the people who live here, it is a bargain at any price.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Sunday morning in June, a family is walking along Minnehaha
          Creek at the northern edge of Windom. The father is carrying a
          toddler on his shoulders. The mother is pushing a stroller. A
          golden retriever is investigating the creek bank with the kind of
          focused attention that only dogs and scientists bring to moving
          water. The creek is low and clear — June before the algae comes —
          and sunlight is filtering through a canopy of cottonwoods and
          silver maples that arch over the path. Two blocks south, the
          streets of Windom are doing what they do on a Sunday: a man is
          mowing his lawn, a teenager is shooting baskets in a driveway, a
          sprinkler is running on a corner lot. It is all profoundly
          ordinary, and that is precisely the point.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/windom/hero.webp"
        alt="Quiet residential street in Windom, Minneapolis, with mature trees and well-maintained homes"
        caption="Windom — South Minneapolis residential living at its most settled and unpretentious"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Windom, Minneapolis?">
        <Prose>
          <p>
            Windom is a residential neighborhood in southern Minneapolis,
            defined by Minnehaha Creek along its northern boundary, quiet
            residential streets of well-maintained single-family homes, and
            a community character that prioritizes family life, park access,
            and the kind of neighborhood stability that does not make
            headlines but makes daily life work. With roughly 6,500
            residents, it is large enough to sustain community identity but
            small enough that people recognize each other at the park.
          </p>
          <p>
            The neighborhood occupies a band of South Minneapolis between
            Minnehaha Creek to the north and 60th Street to the south, with
            Chicago Avenue to the west and Cedar Avenue to the east. Its
            position in the southern tier of the city gives it a quieter,
            more spacious feel than the neighborhoods closer to downtown,
            the lakes, or the commercial corridors of Uptown and Northeast.
            This is a neighborhood that has optimized for residential
            quality rather than urban excitement — a trade that its
            residents make deliberately.
          </p>
          <p>
            Minnehaha Creek is Windom&apos;s most distinctive natural feature.
            The creek, which flows from Lake Minnetonka through the western
            suburbs and across South Minneapolis to Minnehaha Falls, runs
            along the neighborhood&apos;s northern edge, providing a
            corridor of green space, trail access, and natural beauty that
            elevates Windom from a generic residential grid to something
            with genuine environmental character. The creek trail connects
            the neighborhood to the broader park and trail system that is
            one of Minneapolis&apos;s defining amenities.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Windom Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/windom/neighborhood-sign.webp"
          alt="Windom neighborhood sign in Minneapolis"
          caption="The Windom neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Windom History & Origins">
        <Prose>
          <p>
            Before European settlement, the land that is now Windom was part
            of the homeland of the Dakota people. Minnehaha Creek and the
            surrounding landscape were part of a network of waterways,
            prairies, and woodlands that the Mdewakanton Dakota used for
            travel, hunting, gathering, and seasonal habitation. The creek
            corridor was ecologically rich and culturally significant, a
            landscape of abundance that sustained indigenous communities
            for generations.
          </p>
          <p>
            European settlement in the mid-to-late 19th century transformed
            the area from prairie and farm land to platted lots. The
            neighborhood was named for William Windom, a Minnesota
            politician who served as a U.S. Senator and as Secretary of the
            Treasury under Presidents Garfield and Harrison. The naming
            reflected the era&apos;s practice of honoring political figures
            through municipal geography rather than any particular
            connection between Windom the man and Windom the neighborhood.
          </p>
          <p>
            Development came gradually. The neighborhood was on the southern
            edge of Minneapolis&apos;s expansion, and residential
            construction did not fill in fully until the 1920s through
            1950s. The housing stock reflects this era — modest
            single-family homes, many of them Cape Cods, ramblers, and
            bungalows, built for the working-class and middle-class
            families who were moving outward from the older, denser
            neighborhoods closer to downtown. The street grid was laid
            out with regularity, and the lots were generous enough for
            yards, gardens, and the detached garages that the automobile
            age demanded.
          </p>
          <p>
            Through the second half of the 20th century, Windom settled
            into the stable residential character it maintains today. The
            neighborhood did not experience the disruptions that affected
            other parts of Minneapolis — no freeway construction through
            the heart of the community, no major urban renewal demolition,
            no institutional expansion consuming residential blocks. This
            continuity is Windom&apos;s quiet advantage: the neighborhood
            has had decades to mature, and the result is a place where
            the trees are tall, the gardens are established, and the
            community has depth.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Windom">
        <Prose>
          <p>
            Living in Windom is living in a neighborhood that has decided
            what it is and has no interest in being something else. The
            streets are residential in the fullest sense — houses with
            maintained yards, sidewalks used by pedestrians rather than
            as cafe seating, a rhythm of daily life that revolves around
            work, school, meals, and the creek trail rather than restaurant
            openings and taproom launches. The pace is slower than
            Minneapolis at large, and that is not an accident — it is the
            defining feature.
          </p>
          <p>
            The housing stock is remarkably consistent: one-story and
            one-and-a-half-story homes from the 1930s through 1950s, most
            of them well-maintained, most of them owner-occupied, most of
            them the kind of houses where families raise children, maintain
            gardens, and wave at each other from driveways. There are no
            apartment towers, no mixed-use developments, no condominiums
            with rooftop pools. Windom is what the real estate industry
            would call a &ldquo;stable residential neighborhood,&rdquo;
            which is a clinical way of saying that people live here on
            purpose and intend to keep living here.
          </p>
          <p>
            The community dynamics reflect the demographics: families with
            children, retirees who have been here for decades, and a
            growing population of younger buyers attracted by the relative
            affordability compared to the neighborhoods closer to the lakes.
            Block clubs are active. The neighborhood association functions.
            The parks get used. The creek trail is walked, biked, and run
            by the same people on the same schedule, creating the kind of
            informal social infrastructure that planned communities spend
            millions trying to manufacture.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/diamond-lake" className="text-[#2a9d8f] hover:underline">
              Diamond Lake
            </Link>{" "}
            to the west and{" "}
            <Link href="/neighborhoods/field" className="text-[#2a9d8f] hover:underline">
              Field
            </Link>{" "}
            to the east share Windom&apos;s residential character, and the
            broader South Minneapolis community — Nokomis, Standish, Howe —
            provides the context of a large, stable residential district
            that Windom exemplifies.
          </p>
        </Prose>
        <Quote
          text="We looked at neighborhoods closer to the lakes, but the dollar went so much further here. And honestly, the creek is better than the lake when you have little kids. Fewer crowds, same ducks."
          cite="Windom homeowner, 4 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Windom Food, Drink & Local Spots">
        <Prose>
          <p>
            Windom is a residential neighborhood, and its dining and
            shopping options reflect that reality. There is no commercial
            strip comparable to Eat Street or Central Avenue — the
            neighborhood&apos;s commercial nodes are modest and primarily
            serve daily needs rather than providing a dining destination.
          </p>
        </Prose>

        <ArticleSubsection title="Neighborhood Commercial">
          <Prose>
            <p>
              Small commercial nodes along the neighborhood&apos;s edge
              streets — particularly along Chicago Avenue and Cedar Avenue —
              provide basic services: convenience stores, small restaurants,
              and neighborhood-scale retail. These are not destination
              businesses but rather the commercial infrastructure of a
              residential area — the kind of places where you stop for milk
              on the way home or grab a quick lunch without making it an
              event.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Dining">
          <Prose>
            <p>
              For more substantial dining options, Windom residents look to
              the commercial corridors in adjacent areas. The restaurant
              scenes along Minnehaha Avenue in{" "}
              <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
                Longfellow
              </Link>{" "}
              and the 50th and Chicago area provide diverse options within
              a short drive. The 48th and Chicago commercial node offers
              restaurants, a hardware store, and other businesses that serve
              the broader South Minneapolis community. For groceries,
              larger stores along Chicago Avenue and Cedar Avenue are the
              primary options.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Windom">
        <Prose>
          <p>
            Windom&apos;s outdoor amenities are its strongest selling point.
            Minnehaha Creek, the creek trail, and the neighborhood parks
            provide a level of natural access and recreational opportunity
            that compensates for the limited commercial options.
          </p>
        </Prose>

        <ArticleSubsection title="Minnehaha Creek & Trail">
          <Prose>
            <p>
              Minnehaha Creek runs along the neighborhood&apos;s northern
              boundary, providing a corridor of green space, water, and
              wildlife in the middle of the city. The creek trail — a paved
              path that follows the creek for miles — is Windom&apos;s
              front-door connection to the Minneapolis park system. Walking,
              biking, running, and cross-country skiing (in winter) are all
              possible directly from the neighborhood. The creek itself
              offers the modest pleasures of urban waterways: ducks, turtles,
              the occasional great blue heron, and the sound of moving water
              that softens the edges of city life.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/windom/minnehaha-creek.webp"
            alt="Minnehaha Creek trail near Windom, Minneapolis, with trees and water"
            caption="Minnehaha Creek — Windom's defining natural feature and daily companion"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Windom Park & Neighborhood Green Spaces">
          <Prose>
            <p>
              Windom Park — the neighborhood&apos;s namesake park — provides
              a playground, ball fields, open lawn area, and a wading pool
              that is a summer destination for families with young children.
              The park serves as the neighborhood&apos;s primary gathering
              space, hosting community events, picnics, and the informal
              daily use that makes a neighborhood park essential to
              community life. Additional green spaces within and adjacent
              to the neighborhood extend the park access that defines
              Windom&apos;s outdoor character.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Broader Park Connections">
          <Prose>
            <p>
              The creek trail connects Windom to the broader Minneapolis
              park and trail system — west toward the Chain of Lakes and
              east toward Minnehaha Falls and the Mississippi River. Lake
              Nokomis, one of Minneapolis&apos;s most popular lake parks,
              is a short bike ride to the northeast. These connections
              mean that Windom residents have access to a park system
              that is consistently ranked among the best in America,
              with the creek trail serving as the front door.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Windom Schools">
        <Prose>
          <p>
            Windom is served by Minneapolis Public Schools, and the quality
            and accessibility of schools is a significant factor for the
            neighborhood&apos;s family-oriented population. Several
            elementary school options are available nearby, including Kenny
            Elementary and other South Minneapolis schools that serve the
            area through the district&apos;s enrollment system.
          </p>
          <p>
            For middle school, students access options through Minneapolis
            Public Schools&apos; assignment and enrollment process.
            Roosevelt High School and South High School are the primary
            high school options for Windom families, both accessible via
            school bus and public transit.
          </p>
          <p>
            The neighborhood&apos;s school engagement is active. Parents
            participate in school governance, volunteer, and organize in
            ways that reflect the community&apos;s investment in its
            children&apos;s education. This engagement is one of the
            qualities that attracts families to Windom and contributes to
            the neighborhood&apos;s stability.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Windom Real Estate & Housing">
        <Prose>
          <p>
            Windom&apos;s housing market is dominated by single-family
            homes from the 1930s through 1950s, with a character that is
            remarkably consistent across the neighborhood. The homes are
            modest in scale — typically two to three bedrooms, one to one
            and a half bathrooms — and built in the architectural styles
            of their era: Cape Cods, ramblers, bungalows, and
            one-and-a-half-story houses with detached garages.
          </p>
        </Prose>

        <ArticleSubsection title="Pricing & Market">
          <Prose>
            <p>
              Median home sale prices range from approximately $310,000 to
              $420,000 as of 2025, positioning Windom in the middle of the
              South Minneapolis market. Homes closer to Minnehaha Creek
              and in updated condition command the upper end of the range,
              while un-renovated properties and those further from the
              creek fall toward the lower end. The pricing reflects solid
              value — comparable neighborhoods closer to the lakes or the
              Uptown corridor cost significantly more for similar housing.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Market Character">
          <Prose>
            <p>
              Owner-occupancy exceeds 70 percent, reflecting a community
              of families and long-term residents who buy homes and stay
              in them. The investor presence is limited compared to
              neighborhoods with more rental stock. Homes sell steadily
              rather than in bidding wars — Windom does not generate the
              frenzy of the hottest markets, but well-priced, well-maintained
              homes move within a few weeks.
            </p>
            <p>
              Renovation activity is visible throughout the neighborhood
              as buyers update the aging housing stock. Kitchen and
              bathroom updates, window replacements, and additions that
              add square footage to modest original floor plans are common
              projects. The neighborhood&apos;s residential scale and
              architectural consistency are generally maintained through
              these renovations — this is not a neighborhood where people
              are tearing down bungalows to build modern boxes.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/windom/residential.webp"
        alt="Well-maintained homes with gardens in Windom, Minneapolis"
        caption="Windom — mid-century homes, maintained yards, and the quiet confidence of established residential life"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Windom">
        <Prose>
          <p>
            Windom is a car-oriented neighborhood, reflecting its position
            in the southern tier of Minneapolis where residential density
            is lower and commercial options are more spread out. The Walk
            Score of 60 reflects limited walkable amenities — parks and
            some basic commercial options are within walking distance, but
            most daily errands require a car or bike.
          </p>
          <p>
            Biking is the neighborhood&apos;s strongest alternative to
            driving. The Bike Score of 78 reflects the creek trail
            connections, generally flat terrain, and good bike
            infrastructure along connecting streets. The Minnehaha Creek
            trail provides a scenic, separated route for commuting and
            recreation. The ride to downtown Minneapolis is approximately
            7 miles — manageable for experienced bike commuters, though
            most residents drive.
          </p>
          <p>
            Metro Transit provides bus service along Chicago Avenue, Cedar
            Avenue, and connecting corridors, with the Transit Score of 48
            reflecting adequate but not exceptional service. Headways are
            reasonable during peak hours and longer off-peak. The Blue Line
            light rail is accessible via bus connections to stations along
            Hiawatha Avenue, providing rail access to downtown, MSP Airport,
            and the Mall of America.
          </p>
          <p>
            Driving is straightforward, with good access to Interstate 35W
            and Highway 62 (Crosstown). Street parking is abundant and free
            in the residential areas. The commute to downtown Minneapolis
            is approximately 15 to 20 minutes by car, depending on traffic.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in Windom">
        <Prose>
          <p>
            Windom is changing slowly, and for most residents, that is the
            desired pace. The primary forces of change are the broader South
            Minneapolis real estate market — which has pushed home values
            upward as buyers seek affordable alternatives to the more
            expensive neighborhoods to the north and west — and the gradual
            demographic shift as younger families replace the
            post-war generation that populated the neighborhood in its
            formative decades.
          </p>
          <p>
            The generational turnover is visible in the housing stock.
            New owners are updating kitchens, bathrooms, and mechanical
            systems in homes that may not have been significantly renovated
            since the 1970s or 1980s. Additions are adding square footage
            to houses that were built for smaller families with different
            expectations about space. This renovation activity is
            generally welcome — it improves the housing stock and signals
            investment in the neighborhood — but it also raises concerns
            about affordability as updated homes sell at higher prices.
          </p>
          <p>
            The Minnehaha Creek corridor itself is an area of ongoing
            attention. The Minnehaha Creek Watershed District manages the
            creek&apos;s health, flood control, and ecological integrity,
            and its work affects the neighborhood directly. Stormwater
            management, riparian restoration, and trail maintenance along
            the creek are topics that engage Windom residents who understand
            that the creek&apos;s health is inseparable from the
            neighborhood&apos;s quality of life.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Windom FAQ">
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
