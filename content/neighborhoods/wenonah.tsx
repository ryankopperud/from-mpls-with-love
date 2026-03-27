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
    title: "Wenonah, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Wenonah, Minneapolis — quiet residential living, Minnehaha Creek, Lake Nokomis proximity, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Wenonah",
  deck: "The quietest corner of south Minneapolis — where Minnehaha Creek meanders through backyards, Lake Nokomis is close but not too close, and the biggest neighborhood controversy is whether someone's hedge is too tall.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Wenonah?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Wenonah" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Wenonah, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$290K–$400K", label: "Median home sale price (2025 data)" },
      { value: "$1,100–$1,400", label: "Typical 1BR apartment rent (2025)" },
      { value: "55", label: "Walk Score" },
      { value: "72", label: "Bike Score" },
      { value: "42", label: "Transit Score" },
      { value: "25%", label: "Renter-occupied housing" },
      { value: "0.5 sq mi", label: "Approximate neighborhood area" },
    ],
  },
  faq: [
    {
      question: "Is Wenonah a good neighborhood in Minneapolis?",
      answer:
        "Wenonah is one of the quietest and most stable residential neighborhoods in Minneapolis. It offers safe streets, well-maintained homes, proximity to Lake Nokomis and Minnehaha Creek, and a strong sense of community. If you want urban convenience with suburban calm, Wenonah delivers — though you'll need to leave the neighborhood for most commercial needs.",
    },
    {
      question: "Is Wenonah safe?",
      answer:
        "Wenonah is one of the safest neighborhoods in Minneapolis, with crime rates well below the city average. Violent crime is rare. Property crime is minimal compared to most of the city. It's the kind of neighborhood where people leave their garage doors open and walk at all hours without concern.",
    },
    {
      question: "How much does it cost to live in Wenonah?",
      answer:
        "Wenonah is moderately priced. Single-family homes sell in the $290,000 to $400,000 range, with creek-adjacent and lake-proximate homes commanding premiums. Rental options are very limited as the neighborhood is predominantly owner-occupied. It's affordable relative to lakeside neighborhoods to the west but above the city median.",
    },
    {
      question: "Where exactly is Wenonah in Minneapolis?",
      answer:
        "Wenonah is in far south Minneapolis, bounded roughly by Minnehaha Creek to the north, 34th Avenue South to the east, the city limits (62nd Street/Richfield border) to the south, and Cedar Avenue to the west. It is one of the most southerly neighborhoods in Minneapolis.",
    },
    {
      question: "What schools serve Wenonah?",
      answer:
        "Kenny Elementary School and Keewaydin Elementary serve students in the area. Roosevelt High School is the designated comprehensive high school. The schools are well-regarded, and the family-friendly character of the neighborhood reflects the importance residents place on education.",
    },
    {
      question: "Is Wenonah walkable?",
      answer:
        "Not especially, for commercial needs. Wenonah is a purely residential neighborhood with no commercial activity. Walking is excellent for recreation — the creek trails, lake paths, and quiet streets are ideal — but for shopping, dining, and services, you'll need to bike or drive to nearby corridors.",
    },
    {
      question: "How close is Wenonah to Lake Nokomis?",
      answer:
        "Lake Nokomis is just north of Wenonah, accessible within a 10-15 minute walk from most parts of the neighborhood. The Nokomis beach, trails, and parkland are primary recreational amenities for Wenonah residents.",
    },
    {
      question: "Is Wenonah good for families?",
      answer:
        "Wenonah is excellent for families. Safe streets, good schools, creek and lake access, parks, and a housing stock of single-family homes with yards make it one of the most family-oriented neighborhoods in the city. The trade-off is limited walkable commercial options and a quiet character that may not appeal to everyone.",
    },
  ],
  nearby: [
    { name: "Keewaydin", slug: "keewaydin", description: "North of the creek — similar quiet residential character" },
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis and the beach, just to the north" },
    { name: "Diamond Lake", slug: "diamond-lake", description: "West of Cedar — quiet residential streets" },
    { name: "Hale", slug: "hale", description: "Northwest — similar character with creek access" },
    { name: "Minnehaha", slug: "minnehaha", description: "To the east — Minnehaha Creek trail and falls access" },
  ],
  closing: {
    title: "What Makes Wenonah Worth Knowing",
    paragraphs: [
      "Wenonah is the kind of neighborhood that doesn't need to justify itself. It's not trying to attract attention or make a case for its relevance. It's a place where people live quiet lives in well-maintained homes on tree-lined streets near a creek and a lake, and where the measure of a good day is whether you had time to walk the dog along the water before dinner.",
      "There are neighborhoods in Minneapolis with more restaurants, more nightlife, more cultural density, more of the things that make cities exciting. Wenonah offers something different: the possibility of a calm, stable, family-centered life within the city limits. For the people who choose it, that's not a consolation prize. It's the whole point.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          If you want to understand Wenonah, stand on the Minnehaha Creek
          bridge on a weekday morning in October. The creek is low, moving
          slowly under a canopy of turning maples. A jogger passes with a
          golden retriever. A parent pushes a stroller toward the lake. A
          retired couple sits on a bench, not talking, not needing to. The
          houses on either side of the creek are small, well-kept, and
          shaded by trees that were planted when Eisenhower was president.
          Nobody is in a hurry. Nobody is performing anything. This is
          Wenonah — the far south end of Minneapolis, where the city fades
          so gradually into the suburbs that the only thing marking the
          boundary is a sign you might not notice.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/wenonah/hero.webp"
        alt="Minnehaha Creek winding through the Wenonah neighborhood of Minneapolis in autumn"
        caption="Minnehaha Creek through Wenonah — where the city quietly becomes something else"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Wenonah, Minneapolis?">
        <Prose>
          <p>
            Wenonah is a small, quiet residential neighborhood in the far
            south of Minneapolis, bounded roughly by Minnehaha Creek to the
            north, 34th Avenue South to the east, the city limits (the
            Richfield border) to the south, and Cedar Avenue to the west.
            With approximately 2,500 residents, it is one of the smallest
            and least-known neighborhoods in the city — which is exactly
            how most of its residents prefer it.
          </p>
          <p>
            The neighborhood is purely residential. There are no commercial
            districts, no restaurants, no bars, no destination attractions
            within Wenonah&apos;s boundaries. What it offers instead is a
            remarkably peaceful urban living experience: tree-lined streets,
            single-family homes with yards, Minnehaha Creek along its
            northern edge, and Lake Nokomis a short walk or bike ride to
            the north. It is the kind of neighborhood that people move to
            when they want city services and suburban quiet in the
            same package.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Wenonah Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/wenonah/neighborhood-sign.webp"
          alt="Wenonah neighborhood sign in Minneapolis"
          caption="The Wenonah neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Wenonah History & Origins">
        <Prose>
          <p>
            Wenonah takes its name from a figure in Ojibwe tradition —
            the mother of Hiawatha in Longfellow&apos;s epic poem, which
            itself was inspired (loosely and controversially) by Ojibwe
            and Dakota stories. The name connects this far-south neighborhood
            to the Indigenous heritage of the Minnehaha Creek and Lake
            Nokomis area, even as the neighborhood itself was built by and
            for the settlers who displaced those communities.
          </p>
          <p>
            Before development, this area was open prairie and marshland
            along Minnehaha Creek, part of the Dakota homeland for
            centuries before the treaties and forced removals of the
            mid-19th century. Development came late — much of Wenonah was
            farmland into the 1920s and 1930s, and the housing stock dates
            primarily from the post-World War II period, when returning
            veterans and the GI Bill created demand for modest family homes
            on the city&apos;s expanding southern edge.
          </p>
          <p>
            The neighborhood has been residentially stable since its initial
            development, with relatively little demographic or physical
            change over the decades. It is one of the most consistent
            neighborhoods in Minneapolis — the same types of homes, the
            same kinds of families, the same quiet character it has had
            since the houses were new.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Wenonah">
        <Prose>
          <p>
            Wenonah is defined by what it is not. It is not dense. It is
            not diverse in the way that neighborhoods closer to the urban
            core are diverse. It is not walkable to restaurants or shops.
            It is not culturally dynamic in any public-facing way. What it
            is, resolutely, is quiet. The streets are lined with mature
            trees. The homes are modest — mostly two-and three-bedroom
            ramblers and split-levels from the 1940s and 1950s — with
            well-tended yards and attached garages. The lots are not large,
            but they feel spacious because the neighborhood is so low-key.
          </p>
          <p>
            The community life here is centered on domestic routines and
            natural amenities. People walk the creek trail, bike to the
            lake, garden in their yards, and know their neighbors well
            enough to borrow a snow blower. Block parties happen in the
            summer. Kids ride bikes on streets with minimal traffic. It
            is the kind of urban life that looks, from the outside, almost
            indistinguishable from the suburbs — and the people who live
            here would tell you that&apos;s the point, except they
            appreciate having city services, city parks, and no
            homeowners association.
          </p>
          <p>
            The creek is the neighborhood&apos;s soul. Minnehaha Creek
            winds along Wenonah&apos;s northern boundary, and the houses
            that back up to it enjoy one of the quietest, most scenic
            settings in Minneapolis. In spring, the creek runs high with
            snowmelt. In summer, it slows to a gentle flow through shaded
            banks. In fall, the corridor blazes with color. It is a daily
            amenity that shapes the quality of life here in ways that are
            hard to quantify but impossible to miss.
          </p>
        </Prose>
        <Quote
          text="We looked at suburbs and decided we'd rather have the creek and the lake and still be in Minneapolis. Wenonah gives us all three."
          cite="Wenonah homeowner, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Wenonah Food, Drink & Local Spots">
        <Prose>
          <p>
            Wenonah has no commercial activity within its boundaries. For
            food, drink, and shopping, residents rely on nearby neighborhoods
            and corridors.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <PlaceCardComponent place={{ name: "Nokomis Beach Area", tag: "Various", price: "$–$$", description: "The Lake Nokomis area, a short bike ride north, has seasonal cafes, a beach concession stand, and nearby restaurants that serve as the closest dining options for Wenonah residents." }} />
          <PlaceCardComponent place={{ name: "Cedar Avenue Commercial", tag: "Various", price: "$–$$", description: "Cedar Avenue, Wenonah's western boundary, has scattered commercial activity including grocery stores and restaurants, though the selection is limited compared to more urban corridors." }} />
          <PlaceCardComponent place={{ name: "66th Street Corridor (Richfield)", tag: "Various", price: "$–$$", description: "Just south of the city limits, Richfield's 66th Street corridor offers chain restaurants, grocery stores, and retail that many Wenonah residents use for daily needs." }} />
          <PlaceCardComponent place={{ name: "Chicago Avenue", tag: "Various", price: "$–$$", description: "A short drive west, Chicago Avenue offers more dining and shopping options, including small independent restaurants and services." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Wenonah">
        <Prose>
          <p>
            Outdoor access is Wenonah&apos;s strongest suit. The neighborhood
            is bracketed by Minnehaha Creek and sits within easy reach of
            Lake Nokomis, making it one of the best-positioned neighborhoods
            in Minneapolis for nature-oriented recreation.
          </p>
        </Prose>

        <ArticleSubsection title="Minnehaha Creek Trail">
          <Prose>
            <p>
              The Minnehaha Creek trail runs along the neighborhood&apos;s
              northern boundary, providing a paved path for walking, running,
              and biking that extends from Lake Harriet east to Minnehaha
              Falls and the Mississippi River. It is one of the most
              scenic corridors in the Minneapolis park system, and Wenonah
              residents have direct access.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Lake Nokomis">
          <Prose>
            <p>
              Lake Nokomis, with its swimming beach, walking trail, and
              parkland, is accessible within a 10-15 minute walk or a
              short bike ride from most of Wenonah. The lake is the primary
              recreational destination for the neighborhood, especially in
              summer.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Local Parks">
          <Prose>
            <p>
              Wenonah Park provides a small playground and green space
              within the neighborhood. Solomon Park, also nearby, offers
              additional green space. These are small neighborhood parks
              rather than regional destinations, but they serve the
              community&apos;s needs for close-to-home recreation.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Wenonah Schools">
        <Prose>
          <p>
            Wenonah is served by well-regarded Minneapolis Public Schools.
            Kenny Elementary School and Keewaydin Elementary serve the
            neighborhood&apos;s elementary students. Roosevelt High School
            is the designated comprehensive high school.
          </p>
          <p>
            The schools are a significant draw for families considering
            Wenonah, and the family-oriented character of the neighborhood
            reflects the importance residents place on education. The
            Minneapolis Public Schools open enrollment system also allows
            families to access magnet and specialty programs across
            the district.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Wenonah Real Estate & Housing">
        <Prose>
          <p>
            Wenonah&apos;s housing market is stable and predictable. The
            stock is almost entirely single-family homes — ramblers,
            split-levels, and some Cape Cods built in the 1940s and 1950s.
            Turnover is low, and when homes come on the market, they sell
            relatively quickly to families seeking the neighborhood&apos;s
            particular combination of quiet, nature access, and
            city-limits living.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Wenonah">
          <Prose>
            <p>
              Single-family homes sell in the $290,000 to $400,000 range.
              Creek-adjacent homes and those with larger lots command
              premiums. The housing stock is uniform in character — modest
              mid-century homes on regular lots — so price differences
              primarily reflect condition, updates, and location within
              the neighborhood. Buyers should expect competition for
              well-maintained homes, particularly in spring and summer.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Rental options are extremely limited in Wenonah. The
              neighborhood is overwhelmingly owner-occupied, and the few
              rental units available are typically in duplexes or
              occasionally in single-family homes rented by owners. If
              you&apos;re looking to rent in this area, you&apos;ll likely
              need to broaden your search to adjacent neighborhoods.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="Houses don't come up for sale often in Wenonah. When they do, they go fast. People don't leave this neighborhood — they just maintain their homes and stay." cite="Wenonah real estate agent, interview" />
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/wenonah/residential.webp"
        alt="Tree-lined residential street in Wenonah, Minneapolis"
        caption="Wenonah — tree-lined streets and mid-century homes in far south Minneapolis"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Wenonah">
        <Prose>
          <p>
            Wenonah is a car-dependent neighborhood. The Walk Score of 55
            reflects the purely residential character — there is nothing
            to walk to commercially within the neighborhood. The Bike Score
            of 72 reflects good recreational cycling on the creek trail and
            lake paths, though bike commuting to downtown is a longer ride
            than from neighborhoods closer to the core.
          </p>
          <p>
            Bus service is available on Cedar Avenue but is limited in
            frequency. The Transit Score of 42 is among the lowest in
            Minneapolis, reflecting the neighborhood&apos;s distance from
            major transit corridors. Most households own at least one car,
            and the neighborhood is designed around automobile access.
          </p>
          <p>
            For commuters, downtown Minneapolis is approximately 15-20
            minutes by car. The 35W corridor is accessible via crosstown
            routes. MSP Airport is about 15 minutes south.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Wenonah is one of the most stable neighborhoods in Minneapolis,
            and the changes here are measured in degrees rather than
            upheavals.
          </p>
        </Prose>

        <ArticleSubsection title="Rising Home Prices">
          <Prose>
            <p>
              Home prices have been climbing steadily, driven by demand for
              the neighborhood&apos;s particular combination of quiet,
              nature, and city living. This is pricing out some first-time
              buyers and changing the socioeconomic composition of the
              neighborhood gradually.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Aging Housing Stock">
          <Prose>
            <p>
              Most homes in Wenonah are 70-80 years old, and while many
              have been updated, others are reaching the age where major
              systems — roofs, furnaces, plumbing, electrical — need
              replacement. The cost of maintaining an aging home is a
              practical consideration for both current homeowners and
              prospective buyers.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Creek and Climate">
          <Prose>
            <p>
              Minnehaha Creek flooding is an occasional concern for
              creek-adjacent properties, and climate change is increasing
              the frequency and intensity of storm events. Homebuyers near
              the creek should investigate flood risk and insurance
              requirements.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Wenonah FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
