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
    title: "St. Anthony East, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about St. Anthony East, Minneapolis — historic residential streets, Mississippi River proximity, Northeast character, walkable neighborhoods, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "St. Anthony East",
  deck: "The quiet sibling of Northeast's historic core — where tree-lined residential streets meet Mississippi River bluffs, the city's oldest settlement echoes in the architecture, and daily life moves at a pace that feels earned rather than engineered.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is St. Anthony East?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in St. Anthony East" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "St. Anthony East, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,800", label: "Residents (US Census / ACS estimates)" },
      { value: "$310K–$450K", label: "Median home sale price (2025 data)" },
      { value: "$1,100–$1,600", label: "Typical 1BR apartment rent (2025)" },
      { value: "72", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
      { value: "55", label: "Transit Score" },
      { value: "55%", label: "Owner-occupied housing" },
      { value: "1849", label: "Year the town of St. Anthony was established" },
    ],
  },
  faq: [
    {
      question: "Is St. Anthony East a good neighborhood in Minneapolis?",
      answer:
        "St. Anthony East is a solid residential neighborhood that offers the Northeast Minneapolis character — walkable streets, historic homes, proximity to the river — without the intensity of the brewery district or the arts corridor. It is quieter, more family-oriented, and more affordable than the higher-profile parts of Northeast. For people who want Northeast&apos;s identity without Northeast&apos;s weekend crowds, St. Anthony East is an excellent choice.",
    },
    {
      question: "Is St. Anthony East, Minneapolis safe?",
      answer:
        "St. Anthony East has crime rates that are at or below the citywide average. The neighborhood&apos;s residential character, established community, and relatively low commercial activity contribute to a generally safe environment. Property crime occurs as it does across Minneapolis, but violent crime is uncommon. Residents report feeling safe walking the neighborhood&apos;s streets, including in the evenings.",
    },
    {
      question: "Where exactly is St. Anthony East in Minneapolis?",
      answer:
        "St. Anthony East is in Northeast Minneapolis, bounded roughly by the Mississippi River to the south and west, Broadway Street NE to the north, and Central Avenue NE to the east. It sits east of St. Anthony West and north of Marcy-Holmes, in the historic core of what was originally the separate town of St. Anthony before it merged with Minneapolis in 1872.",
    },
    {
      question: "What is the difference between St. Anthony East and St. Anthony West?",
      answer:
        "St. Anthony East and St. Anthony West are adjacent neighborhoods in Northeast Minneapolis, split roughly by University Avenue NE. St. Anthony West is closer to the riverfront and the Nicollet Island area, with more commercial activity and higher property values. St. Anthony East is more purely residential, quieter, and slightly more affordable. Both share the historic St. Anthony identity and Northeast&apos;s general character, but they have distinct personalities. Think of St. Anthony West as the outward-facing sibling and St. Anthony East as the one who stays home and reads.",
    },
    {
      question: "How much does it cost to live in St. Anthony East?",
      answer:
        "St. Anthony East is moderately priced by Northeast Minneapolis standards. Single-family homes typically sell in the $310,000 to $450,000 range as of 2025, below the prices in Logan Park or Northeast Park but above the citywide median. Rentals range from approximately $1,100 to $1,600 for a one-bedroom. The neighborhood offers good value for the location — river proximity, walkability, and the Northeast address — without the premiums that come with being in the hottest part of the market.",
    },
    {
      question: "Is St. Anthony East walkable?",
      answer:
        "Moderately. The Walk Score of 72 reflects solid but not exceptional walkability. The neighborhood has some commercial options along its edges — particularly along Central Avenue NE to the east — but the interior is almost entirely residential. Daily errands are manageable on foot for some but may require a bike or car for others, depending on where you live within the neighborhood. Biking is excellent, with a Bike Score of 85 and strong trail connections to the river and the broader city.",
    },
    {
      question: "What are the schools in St. Anthony East?",
      answer:
        "Families in St. Anthony East use Minneapolis Public Schools options through the district&apos;s enrollment system. Nearby elementary options include Waite Park and Pillsbury, with Northeast Middle School and Edison High School serving the area for older students. The neighborhood&apos;s proximity to the broader Northeast school infrastructure means families have several options within a reasonable distance.",
    },
    {
      question: "Does St. Anthony East have good river access?",
      answer:
        "Yes. The Mississippi River forms the neighborhood&apos;s southern and western boundaries, and the river trail system provides direct access for walking, biking, and running. The bluffs along the river offer elevated views, and the trail connections lead to the Stone Arch Bridge, St. Anthony Main, and the broader Grand Rounds network. River access is one of St. Anthony East&apos;s most significant amenities.",
    },
    {
      question: "Is St. Anthony East gentrifying?",
      answer:
        "The broader Northeast Minneapolis gentrification trend has affected St. Anthony East, though less dramatically than neighborhoods like Logan Park or Beltrami where brewery-driven commercial activity has accelerated price increases. Home values have risen steadily, and some renovation activity is visible as buyers invest in the older housing stock. But St. Anthony East&apos;s primarily residential character and lack of a commercial scene have insulated it from the most aggressive price pressure. It is gentrifying in the sense that all of Northeast is, but it is not leading the charge.",
    },
  ],
  nearby: [
    { name: "St. Anthony West", slug: "st-anthony-west", description: "Historic village feel on the east bank" },
    { name: "Marcy-Holmes", slug: "marcy-holmes", description: "Dinkytown and the east bank of campus" },
    { name: "Logan Park", slug: "logan-park", description: "Northeast arts district and creative energy" },
    { name: "Beltrami", slug: "beltrami", description: "Brewery district in the heart of Northeast" },
    { name: "Nicollet Island - East Bank", slug: "nicollet-island-east-bank", description: "Historic riverfront and St. Anthony Main" },
  ],
  closing: {
    title: "What Makes St. Anthony East Worth Knowing",
    paragraphs: [
      "St. Anthony East is a neighborhood that rewards patience and attention rather than spectacle. The streets are lined with houses that were built a century ago by people who worked at the mills and factories along the river, and the community that lives in them now carries forward a residential sensibility that has not been displaced by the forces that have transformed other parts of Northeast into destinations. There is no taproom on every corner, no mural tour, no Instagram trail. There are porches, gardens, neighbors who wave, and the Mississippi River at the bottom of the bluff.",
      "The history here is not abstract — it is in the architecture, in the street grid, in the name itself. St. Anthony was the first settlement at the falls, the town that existed before Minneapolis existed, and the east side of that original town is what this neighborhood preserves, not as a museum but as a living community that happens to occupy some of the oldest residential land in the metro. People who love St. Anthony East love it for what it is not: not flashy, not expensive, not trying to be something it was not built to be. In a city that is constantly reinventing itself, that steadiness is its own kind of statement.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Wednesday evening in early October, a woman is walking her
          border collie down a residential street in St. Anthony East. The
          trees are at peak color — sugar maples in shades of orange and red
          that would look overwrought in a painting but are simply what
          happens here in fall. The houses on either side of the street are
          modest by any standard — one-and-a-half stories, clapboard siding,
          front porches that get used — but they sit with a confidence that
          comes from being exactly what they were meant to be. At the end of
          the block, the land drops away toward the Mississippi, and through
          the thinning canopy, the river is visible, dark and slow in the
          autumn light. The woman stops, lets the dog investigate a fire
          hydrant, and looks at the river the way people look at things they
          see every day and have not stopped appreciating.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/st-anthony-east/hero.webp"
        alt="Tree-lined residential street in St. Anthony East, Minneapolis, in autumn"
        caption="St. Anthony East — residential Northeast Minneapolis at its most settled and least pretentious"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is St. Anthony East, Minneapolis?">
        <Prose>
          <p>
            St. Anthony East is a residential neighborhood in the historic
            core of Northeast Minneapolis, occupying the eastern portion of
            what was originally the town of St. Anthony — the first European
            settlement at St. Anthony Falls, established in 1849 and absorbed
            into Minneapolis in 1872. With roughly 2,800 residents, the
            neighborhood is defined by tree-lined streets of older
            single-family homes, proximity to the Mississippi River, and a
            character that is distinctly Northeast without the commercial
            energy that defines the brewery and arts districts to the north
            and east.
          </p>
          <p>
            The neighborhood is bounded roughly by the Mississippi River to
            the south and west, Broadway Street NE to the north, and Central
            Avenue NE to the east. This positioning gives it access to both
            the river — with its trails, bluffs, and scenic value — and
            Central Avenue, Northeast&apos;s primary commercial corridor. The
            interior of the neighborhood, however, is almost entirely
            residential, with a density and pace that feel more like a small
            town than a section of a major city.
          </p>
          <p>
            St. Anthony East sits in the shadow of its more visible neighbors —{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>{" "}
            has the riverfront commercial access,{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>{" "}
            has the arts scene, and{" "}
            <Link href="/neighborhoods/beltrami" className="text-[#2a9d8f] hover:underline">
              Beltrami
            </Link>{" "}
            has the breweries — but that shadow is precisely where many of
            its residents prefer to be. St. Anthony East offers the Northeast
            identity at a price and a volume that the more fashionable
            neighborhoods no longer can.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="St. Anthony East Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/st-anthony-east/neighborhood-sign.webp"
          alt="St. Anthony East neighborhood sign in Minneapolis"
          caption="The St. Anthony East neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="St. Anthony East History & Origins">
        <Prose>
          <p>
            Before European settlement, the land that is now St. Anthony East
            was part of the homeland of the Dakota people — the Mdewakanton
            band in particular, for whom St. Anthony Falls (Owamniyomni) and
            the surrounding river corridor were sites of deep spiritual
            significance and practical sustenance. The bluffs above the river
            provided vantage and shelter, and the falls themselves were a
            center of Dakota life long before they became a center of
            American industry.
          </p>
          <p>
            The town of St. Anthony was established on the east bank of the
            Mississippi in 1849, making it the first European settlement at
            the falls and the predecessor to Minneapolis, which grew on the
            west bank. The town was named for St. Anthony Falls, which in
            turn had been named by Father Louis Hennepin in 1680. St. Anthony
            grew rapidly as lumber mills and then flour mills harnessed the
            power of the falls, drawing workers from New England, Germany,
            Scandinavia, and Eastern Europe.
          </p>
          <p>
            The eastern portion of St. Anthony — what is now St. Anthony
            East — developed as a residential district for the workers who
            staffed the mills and the businesses that served them. The
            housing stock from this era — modest frame houses, duplexes, and
            small apartment buildings — remains the dominant architectural
            character of the neighborhood. The town of St. Anthony was
            annexed by Minneapolis in 1872, and the east bank became part
            of the larger city, but the street grid, the housing scale, and
            the residential character established in the settlement era have
            persisted.
          </p>
          <p>
            Through the 20th century, St. Anthony East followed the
            trajectory of many working-class residential neighborhoods:
            stable population, gradual aging of the housing stock, and a
            community identity built around church parishes, neighborhood
            schools, and the ethnic heritage — particularly Scandinavian,
            German, and Polish — of its residents. The neighborhood never
            experienced the dramatic disruptions (freeway construction,
            urban renewal demolition) that reshaped some other parts of
            Minneapolis, which is why its pre-war residential character
            remains so intact.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in St. Anthony East">
        <Prose>
          <p>
            Living in St. Anthony East is living in a neighborhood that has
            figured out what it is and is not interested in becoming something
            else. The streets are residential in the way that word meant
            before it became a euphemism for exclusionary — houses with
            porches, sidewalks where people walk, a density that supports
            community without crowding. The homes are mostly small by modern
            standards — two bedrooms, one bathroom, a detached garage that
            may or may not accommodate a modern SUV — but they sit on
            established lots with mature trees and the kind of landscaping
            that takes decades to accumulate.
          </p>
          <p>
            The neighborhood&apos;s eastern edge, along Central Avenue NE,
            provides walkable access to Northeast&apos;s primary commercial
            corridor — restaurants, shops, groceries, bars, and the
            miscellaneous commerce of a functioning city street. The
            interior of the neighborhood, however, is quiet enough that you
            can hear birds in the morning, which is not something you can
            say about most neighborhoods in Minneapolis that are this close
            to downtown.
          </p>
          <p>
            The river is the neighborhood&apos;s other defining edge. The
            Mississippi&apos;s bluffs along the southern and western
            boundaries provide views, trail access, and a sense of
            topographic drama that the flat interior streets do not
            suggest. Walking from the middle of St. Anthony East to the
            river bluff is like stepping between two different landscapes —
            from the settled, human-scale grid to the wild, geological scale
            of the river gorge.
          </p>
          <p>
            The community is a mix of long-term residents — families who
            have been here for generations, retirees who bought when prices
            were low and see no reason to leave — and newer arrivals
            attracted by the value proposition of a Northeast address
            without Northeast prices. The mix works because the
            neighborhood&apos;s character is strong enough to absorb new
            residents without losing its identity, a quality that not all
            Minneapolis neighborhoods can claim.
          </p>
        </Prose>
        <Quote
          text="My grandparents bought this house in 1952. My mom grew up here. I grew up here. My kids are growing up here. The neighborhood has changed around us but the bones are the same."
          cite="St. Anthony East homeowner, third generation"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="St. Anthony East Food, Drink & Local Spots">
        <Prose>
          <p>
            St. Anthony East is not a dining destination — the neighborhood&apos;s
            interior is residential, and the restaurants, bars, and cafes
            that serve the area are concentrated along its edges, particularly
            Central Avenue NE to the east and the University Avenue corridor.
            The broader Northeast Minneapolis dining scene, one of the
            strongest in the city, is accessible by a short walk, bike ride,
            or drive.
          </p>
        </Prose>

        <ArticleSubsection title="Along the Edges">
          <Prose>
            <p>
              Central Avenue NE — the commercial spine of Northeast Minneapolis —
              runs along St. Anthony East&apos;s eastern boundary and offers a
              dense concentration of dining options. The avenue&apos;s
              multicultural restaurant scene includes Vietnamese, Mexican,
              Middle Eastern, East African, and American options at a range of
              price points. This is working-class dining at its best — no
              pretension, generous portions, and flavors that reflect the
              immigrant communities that have made Central Avenue one of the
              most diverse commercial corridors in the Twin Cities.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Northeast Highlights">
          <Prose>
            <p>
              The brewery and restaurant scene in{" "}
              <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
                Logan Park
              </Link>
              ,{" "}
              <Link href="/neighborhoods/beltrami" className="text-[#2a9d8f] hover:underline">
                Beltrami
              </Link>
              , and the broader Northeast corridor is within easy reach.
              Taprooms, craft cocktail bars, and restaurants that range from
              taco trucks to white-tablecloth dining are all accessible within
              a mile or two. The St. Anthony Main dining area along the
              riverfront is also close, offering upscale-casual options with
              river views. St. Anthony East benefits from all of this proximity
              without hosting the traffic and noise that come with it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Groceries">
          <Prose>
            <p>
              Grocery options along Central Avenue and in nearby commercial
              nodes serve St. Anthony East residents. The avenue&apos;s
              international grocery stores — Vietnamese, Mexican, Somali,
              Middle Eastern — are a particular asset, offering ingredients
              and products that mainstream grocery chains do not carry.
              Conventional grocery stores are also accessible along
              Central Avenue and in adjacent neighborhoods.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near St. Anthony East">
        <Prose>
          <p>
            St. Anthony East&apos;s outdoor assets are defined by the
            Mississippi River and the trail system that connects the
            neighborhood to the broader Grand Rounds network. The river
            bluffs along the neighborhood&apos;s southern and western edges
            provide both scenic value and recreational access.
          </p>
        </Prose>

        <ArticleSubsection title="Mississippi River Bluffs & Trails">
          <Prose>
            <p>
              The river bluffs at the edge of St. Anthony East offer elevated
              views of the Mississippi and connect to the trail system that
              extends south toward the Stone Arch Bridge, St. Anthony Falls,
              and downtown, and north toward the upper river parks. The trails
              are popular with runners, cyclists, and walkers year-round, and
              the bluff views — particularly in fall, when the river gorge&apos;s
              hardwood canopy turns color — are genuinely spectacular.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Neighborhood Parks">
          <Prose>
            <p>
              The neighborhood has small parks and green spaces that serve
              the residential community — playgrounds, open lawn areas, and
              gathering spaces for neighborhood events. These are
              functional neighborhood parks rather than destination parks,
              providing the daily green space that a residential neighborhood
              needs without the programmatic ambition of the larger regional
              parks.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Broader Park Access">
          <Prose>
            <p>
              The Grand Rounds trail system connects St. Anthony East to
              parks throughout Northeast and the broader city. The trail
              network is one of the best urban park and trail systems in
              America, and St. Anthony East&apos;s river-edge position gives
              residents direct access to it. Boom Island Park, the Stone
              Arch Bridge, and the falls overlook area are all reachable by
              bike or on foot within minutes, extending the neighborhood&apos;s
              effective park access well beyond its own boundaries.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="St. Anthony East Schools">
        <Prose>
          <p>
            Families in St. Anthony East use Minneapolis Public Schools
            options through the district&apos;s enrollment and assignment
            system. The neighborhood&apos;s location in the Northeast
            quadrant places it within the service area of several elementary,
            middle, and high school options.
          </p>
          <p>
            Nearby elementary schools include options along the Central
            Avenue corridor and in adjacent Northeast neighborhoods. Waite
            Park, Pillsbury, and Sheridan Arts Magnet have historically
            served families in this part of Northeast. Northeast Middle
            School provides the primary middle school option, and Edison
            High School serves the Northeast quadrant for high school.
          </p>
          <p>
            Several charter schools in Northeast Minneapolis also draw
            enrollment from St. Anthony East families. The neighborhood&apos;s
            proximity to multiple school options is a practical advantage
            for families, though the quality and fit of available schools
            is a topic that parents navigate carefully, as it is across the
            Minneapolis Public Schools district.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="St. Anthony East Real Estate & Housing">
        <Prose>
          <p>
            St. Anthony East&apos;s housing market is dominated by
            single-family homes from the late 19th and early-to-mid 20th
            centuries. The housing stock is characteristic of working-class
            Northeast Minneapolis: bungalows, one-and-a-half story frame
            houses, some Craftsman-era homes, and a smattering of duplexes
            and small apartment buildings. The scale is modest — two to three
            bedrooms, one bathroom, detached garages — and the character is
            unpretentious.
          </p>
        </Prose>

        <ArticleSubsection title="Pricing & Market">
          <Prose>
            <p>
              Median home sale prices in St. Anthony East range from
              approximately $310,000 to $450,000 as of 2025. This positions
              the neighborhood in the middle of the Northeast Minneapolis
              market — more affordable than Logan Park or Northeast Park,
              more expensive than the far-northern Northeast neighborhoods.
              The pricing reflects the location value — river proximity,
              walkability to Central Avenue, reasonable commute to downtown —
              and the quality of the housing stock, which varies from
              unrenovated originals to fully updated homes that have been
              brought into the 21st century while preserving their
              architectural character.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Market Dynamics">
          <Prose>
            <p>
              Owner-occupancy is around 55 percent, with a mix of rental
              properties and owner-occupied homes that has been stable for
              decades. The investor presence is moderate — some duplexes and
              small multi-family properties attract buy-and-hold investors —
              but the neighborhood has not seen the speculative flipping
              activity that has characterized some other parts of Northeast.
              Homes tend to sell to people who intend to live in them, which
              contributes to community stability.
            </p>
            <p>
              The housing stock&apos;s age means that renovation and
              maintenance costs are a factor. Buyers should expect to invest
              in updates — particularly to mechanical systems, windows, and
              kitchens — in homes that have not been recently renovated. The
              reward is solid construction, mature lots, and the kind of
              neighborhood character that new development cannot replicate.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around St. Anthony East">
        <Prose>
          <p>
            St. Anthony East is moderately walkable, highly bikeable, and
            well-connected by transit for a residential neighborhood. The
            Walk Score of 72 reflects access to Central Avenue&apos;s
            commercial corridor on the eastern edge, with the residential
            interior requiring more effort for daily errands. The Bike Score
            of 85 is among the strongest in Northeast, reflecting the river
            trail connections, generally flat terrain, and good bike
            infrastructure along connecting streets.
          </p>
          <p>
            Metro Transit provides bus service along Central Avenue,
            University Avenue, and connecting corridors, offering routes to
            downtown Minneapolis, the University of Minnesota, and other
            destinations. The Transit Score of 55 reflects decent but not
            exceptional service — headways are reasonable during peak hours
            and longer off-peak. The Green Line light rail is accessible
            via connecting bus routes or a short bike ride to stations along
            the university corridor.
          </p>
          <p>
            Driving is straightforward, with Interstate 35W and Highway 65
            accessible within minutes. Street parking is generally available
            and free in the residential areas, and congestion is minimal
            on local streets. The commute to downtown Minneapolis is
            approximately 10 minutes by car, depending on traffic and route.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing in St. Anthony East">
        <Prose>
          <p>
            St. Anthony East is experiencing the same gradual gentrification
            pressures that affect all of Northeast Minneapolis, though the
            pace and intensity are lower than in the neighborhoods closer
            to the brewery and arts districts. Home values have risen
            steadily over the past decade, driven by the broader Northeast
            market and the neighborhood&apos;s solid fundamentals — location,
            river access, housing stock quality.
          </p>
          <p>
            The primary tension is between preservation and renovation.
            As the housing stock ages and new buyers invest in updates, the
            neighborhood&apos;s architectural character is evolving. Most
            renovations respect the existing scale and style, but some
            additions and modernizations push against the neighborhood&apos;s
            traditional appearance. The balance between maintaining the
            working-class character that defines St. Anthony East and
            accommodating the investment that aging homes require is an
            ongoing conversation.
          </p>
          <p>
            Central Avenue&apos;s commercial evolution also affects the
            neighborhood. The avenue&apos;s transformation from a
            working-class commercial strip to a more diverse dining and
            shopping destination has been generally positive for St. Anthony
            East residents, expanding their walkable options. But the risk
            of commercial displacement — longstanding businesses priced out
            by rising rents — is a concern that the broader Northeast
            community monitors closely.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="St. Anthony East FAQ">
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
