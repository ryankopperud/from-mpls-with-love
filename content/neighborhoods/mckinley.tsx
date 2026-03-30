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
    title: "McKinley, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about McKinley, Minneapolis — diverse community, community gardens, affordable housing, Theodore Wirth Park access, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "McKinley",
  deck: "A small, diverse North Minneapolis neighborhood where community gardens turn vacant lots into something productive, where affordable homes sit within reach of Theodore Wirth Park's trails, and where the people doing the quiet daily work of holding a neighborhood together rarely make the news.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is McKinley?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in McKinley" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "McKinley, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,600", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$170K–$245K", label: "Median home sale price range (2025 data)" },
      { value: "1900s–1940s", label: "Era most homes were built" },
      { value: "Highly diverse", label: "Black, Hmong, Somali, Native American, white populations" },
      { value: "Penn Ave N", label: "Primary corridor" },
      { value: "12 min", label: "Drive to downtown Minneapolis" },
      { value: "52", label: "Walk Score" },
      { value: "73", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is McKinley a good neighborhood in Minneapolis?",
      answer:
        "McKinley is a neighborhood with genuine affordability, remarkable diversity, proximity to Theodore Wirth Park, and active community gardens. It also faces the challenges of North Minneapolis — higher crime rates, limited commercial options, and the effects of disinvestment. For people who value diversity, affordability, and access to nature, McKinley has assets that are difficult to find elsewhere at this price point.",
    },
    {
      question: "Is McKinley, Minneapolis safe?",
      answer:
        "McKinley's crime rates are elevated compared to citywide averages, consistent with North Minneapolis. Safety varies by block. The neighborhood's small size means that some blocks are quite stable and quiet, while the broader area faces challenges. Community organizations and block clubs are active in safety efforts.",
    },
    {
      question: "How much do homes cost in McKinley, Minneapolis?",
      answer:
        "McKinley has very affordable housing by Minneapolis standards, with median home sale prices ranging from roughly $170,000 to $245,000 in 2025. Smaller homes needing work can be found under $170,000, while rehabbed or new-construction properties can reach higher. This affordability makes homeownership accessible for many families priced out of other Minneapolis neighborhoods.",
    },
    {
      question: "Where exactly is McKinley in Minneapolis?",
      answer:
        "McKinley is in North Minneapolis, roughly bounded by Lowry Avenue to the south, Dowling Avenue to the north, Penn Avenue North to the east, and Theodore Wirth Parkway to the west. It sits west of the Hawthorne and Jordan neighborhoods and east of Theodore Wirth Park.",
    },
    {
      question: "What is McKinley known for?",
      answer:
        "McKinley is known for its community gardens, its exceptional diversity, its proximity to Theodore Wirth Park, and its affordable housing. It is a small, primarily residential neighborhood without a strong commercial identity but with a community character shaped by the many cultures represented among its residents.",
    },
    {
      question: "What schools serve McKinley, Minneapolis?",
      answer:
        "McKinley is served by Minneapolis Public Schools. Nearby elementary options include several North Minneapolis schools. North High School and Patrick Henry High School serve the area for upper grades. Families use the district's open enrollment system and charter schools to access additional options.",
    },
    {
      question: "Is McKinley close to Theodore Wirth Park?",
      answer:
        "Yes — McKinley's western boundary borders Theodore Wirth Parkway, putting residents within walking or biking distance of the 750+ acre park. This proximity to the largest park in the Minneapolis system — with its trails, golf course, beach, and nature areas — is one of McKinley's most significant assets.",
    },
    {
      question: "Are there community gardens in McKinley?",
      answer:
        "Yes — community gardens are one of McKinley's defining features. Several community gardens operate in the neighborhood, many cultivated by Hmong, Somali, and other immigrant families who bring gardening traditions from their home countries. These gardens produce food, build community connections, and transform vacant lots into productive spaces.",
    },
  ],
  nearby: [
    { name: "Hawthorne", slug: "hawthorne", description: "Community organizing hub to the east" },
    { name: "Jordan", slug: "jordan", description: "Affordable residential blocks to the northeast" },
    { name: "Folwell", slug: "folwell", description: "Diverse neighborhood near Webber Park to the north" },
    { name: "Willard - Hay", slug: "willard-hay", description: "Residential North Minneapolis to the south" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "More affluent neighborhood across Wirth Parkway" },
  ],
  closing: {
    title: "What Grows in McKinley",
    paragraphs: [
      "The community gardens of McKinley are the neighborhood's most visible metaphor — and unlike most metaphors, this one is also literal. In a neighborhood where the city's failures are written in vacant lots and missing services, residents have taken what was left and made it produce. Tomatoes, peppers, bitter melon, lemongrass, herbs that you cannot buy at a suburban grocery store — growing in soil that was once just another empty space. The gardens are small and practical. They are not art installations or branding exercises. They are food.",
      "McKinley is like its gardens: modest, productive, multicultural, and entirely reliant on the people who tend it. The neighborhood does not have the resources or the profile to attract outside attention, and it does not wait for outside attention to do the work. What it needs — investment in housing, commercial corridors, infrastructure, and services — is the same thing every North Minneapolis neighborhood needs: to be treated as a part of the city that matters. Until that happens at the scale required, the people of McKinley will keep doing what they have always done — taking care of their own.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          In a community garden on a July morning in McKinley, a Hmong
          grandmother tends rows of bitter melon and Thai basil, moving
          between plants with the practiced efficiency of someone who has
          been growing food her entire life. Two plots over, a Somali
          father shows his daughter how to check whether the tomatoes are
          ready. A white retiree waters his peppers and waves. Nobody
          speaks the same first language. Everybody understands what
          happens in a garden. This scene — quiet, productive,
          multicultural — is McKinley in miniature: a neighborhood where
          people from different worlds share space, where the things that
          grow are grown by hand, and where the work gets done without
          fanfare or recognition.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/mckinley/hero.webp"
        alt="A community garden in McKinley, Minneapolis with diverse gardeners tending plots"
        caption="McKinley — community gardens and quiet diversity west of Penn Avenue"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is McKinley, Minneapolis?">
        <Prose>
          <p>
            McKinley is a small residential neighborhood in North
            Minneapolis, bounded roughly by Lowry Avenue to the south,
            Dowling Avenue to the north, Penn Avenue North to the east,
            and Theodore Wirth Parkway to the west. Home to approximately
            2,600 residents, it is one of the more quietly diverse
            neighborhoods in the city — a mix of Black, Hmong, Somali,
            Native American, and white families sharing affordable blocks
            within sight of Theodore Wirth Park.
          </p>
          <p>
            McKinley sits west of the{" "}
            <Link href="/neighborhoods/hawthorne" className="text-[#2a9d8f] hover:underline">
              Hawthorne
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/jordan" className="text-[#2a9d8f] hover:underline">
              Jordan
            </Link>{" "}
            neighborhoods, with{" "}
            <Link href="/neighborhoods/willard-hay" className="text-[#2a9d8f] hover:underline">
              Willard - Hay
            </Link>{" "}
            to the south and{" "}
            <Link href="/neighborhoods/folwell" className="text-[#2a9d8f] hover:underline">
              Folwell
            </Link>{" "}
            to the north. It is a primarily residential area without a
            significant commercial corridor, defined more by its gardens,
            its homes, and its proximity to the park than by any single
            landmark or institution.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="McKinley Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/mckinley/neighborhood-sign.webp"
          alt="McKinley neighborhood sign in Minneapolis"
          caption="The McKinley neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="McKinley History & Origins">
        <Prose>
          <p>
            McKinley developed in the early twentieth century as part of
            the northward and westward expansion of Minneapolis&apos;s
            residential neighborhoods. Like its neighbors, it was
            initially settled by Scandinavian and Eastern European
            immigrants, with working-class housing going up on the grid
            streets between Penn Avenue and Theodore Wirth Parkway.
          </p>
          <p>
            The neighborhood&apos;s demographic transformation followed the
            broader North Minneapolis pattern. As discriminatory housing
            practices confined Black families to limited areas of the city,
            and as white flight accelerated in the mid-twentieth century,
            McKinley&apos;s population shifted. Later decades brought
            Hmong families, who arrived in Minnesota in large numbers
            after the Vietnam War and its aftermath, as well as Somali,
            Latino, and Native American families. Each new group of
            residents brought cultural traditions — including, notably,
            gardening practices — that would shape the neighborhood&apos;s
            character.
          </p>
          <p>
            Disinvestment affected McKinley as it did all of North
            Minneapolis, though the neighborhood&apos;s small size and
            residential character meant that the most visible effects —
            commercial vacancies, abandoned buildings — were less
            concentrated than in neighborhoods with major corridors. The
            housing stock aged, some properties deteriorated, and vacant
            lots appeared. But the community gardens that emerged on some
            of those lots became, inadvertently, one of the
            neighborhood&apos;s defining features.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in McKinley">
        <Prose>
          <p>
            McKinley is a neighborhood where the daily texture of life is
            shaped by the extraordinary diversity of its residents. On a
            single block, you might hear Hmong, Somali, Spanish, and
            English. The cultural differences are real — different
            families have different relationships to public space, to
            community institutions, to the idea of neighborhood itself —
            but the shared experience of living in an affordable
            neighborhood in a city that often overlooks them creates its
            own kind of bond.
          </p>
          <p>
            The community gardens are perhaps McKinley&apos;s most
            distinctive feature. Hmong families, many with deep
            agricultural traditions, have turned vacant lots and backyard
            spaces into intensive growing operations — bitter melon,
            lemongrass, Thai chili peppers, greens, and herbs that
            reflect the cuisines of Southeast Asia. Somali families,
            African American families, and others have also established
            garden plots. These gardens serve multiple functions: food
            production, cultural preservation, community building, and
            the practical transformation of unused space into something
            productive and beautiful.
          </p>
          <p>
            The residential blocks are quiet and modest. Houses are
            small to mid-sized, built in the early twentieth century,
            and maintained to varying degrees. Some blocks are stable and
            well-kept; others show the effects of disinvestment. The
            neighborhood does not have a commercial center — Penn Avenue
            provides some services, but most shopping and dining requires
            leaving the immediate area. This creates a residential
            quietness that is both McKinley&apos;s strength (for families
            who want peaceful blocks) and its limitation (for people who
            want walkable amenities).
          </p>
        </Prose>
        <Quote
          text="The garden is where the neighborhood works best. Nobody cares what language you speak when you're pulling weeds together."
          cite="McKinley community gardener"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="McKinley Food, Drink & Local Spots">
        <Prose>
          <p>
            McKinley does not have a restaurant scene in any conventional
            sense. The neighborhood is primarily residential, and
            commercial options within its boundaries are limited to small
            stores and occasional services along Penn Avenue. The food
            that defines McKinley is grown in its gardens and cooked in
            its kitchens — the Hmong produce that shows up at farmers
            markets across the metro originates, in part, from plots in
            neighborhoods like this one.
          </p>
        </Prose>

        <ArticleSubsection title="What's Nearby">
          <PlaceCardComponent place={{ name: "Penn Avenue Corridor", tag: "Basic Services", price: "$", description: "Penn Avenue provides limited commercial services — small stores, takeout spots, and basic services. The corridor has potential but has not yet achieved the critical mass of businesses that would make it a true neighborhood commercial district." }} />
          <PlaceCardComponent place={{ name: "West Broadway", tag: "Nearby Corridor", price: "$–$$", description: "The West Broadway commercial corridor is accessible from McKinley and provides the closest concentration of restaurants and services. Soul food, Somali restaurants, and community-oriented businesses serve the broader North Minneapolis community." }} />
          <PlaceCardComponent place={{ name: "Community Gardens & Farmers Markets", tag: "Local Food", price: "$", description: "McKinley's community gardens produce food that feeds families and, in some cases, supplies farmers markets across the metro. Hmong farmers from North Minneapolis neighborhoods are fixtures at the Minneapolis Farmers Market and other markets, offering produce that is fresher and more diverse than what any grocery store provides." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near McKinley">
        <Prose>
          <p>
            McKinley&apos;s proximity to Theodore Wirth Park is its single
            most significant geographic advantage — and one that
            distinguishes it from most urban neighborhoods in the country.
          </p>
        </Prose>

        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Park borders McKinley to the west and
              provides over 750 acres of parkland — the largest park in
              the Minneapolis system. The park includes hiking and
              mountain biking trails, a golf course, Wirth Beach on Wirth
              Lake, cross-country ski trails, the Eloise Butler
              Wildflower Garden and Bird Sanctuary (the oldest public
              wildflower garden in the nation), and extensive woodland
              and prairie habitats. For McKinley residents, this
              extraordinary resource is within walking distance.
            </p>
            <p>
              Historically, the connection between North Minneapolis
              neighborhoods and Theodore Wirth Park has been weaker than
              it should be — a legacy of the same disinvestment patterns
              that have affected the Northside broadly. Recent efforts
              by the Park Board and community organizations to improve
              trail connections, programming, and welcoming infrastructure
              have begun to strengthen the relationship between the park
              and its neighboring communities.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Neighborhood Green Spaces">
          <Prose>
            <p>
              McKinley does not have a large namesake park, but smaller
              green spaces and community gardens provide gathering places
              within the neighborhood. These spaces, while modest, serve
              essential community functions — play space for children,
              growing space for gardeners, and informal meeting places
              for neighbors.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="McKinley Schools">
        <Prose>
          <p>
            McKinley is served by Minneapolis Public Schools, with nearby
            elementary options and access to North High School and Patrick
            Henry High School for upper grades. The schools reflect the
            challenges facing North Minneapolis education, including the
            achievement gap and resource constraints. The neighborhood&apos;s
            linguistic diversity — with students speaking Hmong, Somali,
            Spanish, and other languages at home — creates both challenges
            and cultural richness in the classroom.
          </p>
          <p>
            Many families use the district&apos;s open enrollment system to
            access magnet programs and specialty schools. Charter schools
            provide additional options. Community-based educational
            organizations and after-school programs supplement formal
            schooling, and cultural organizations within the Hmong, Somali,
            and other communities provide educational support and cultural
            education.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="McKinley Real Estate & Housing">
        <Prose>
          <p>
            McKinley&apos;s housing market is very affordable, with median
            home sale prices ranging from roughly $170,000 to $245,000 in
            2025. The housing stock is primarily older frame houses and
            bungalows built between 1900 and 1940. Conditions vary — some
            homes have been updated and well-maintained, while others need
            work. Community development organizations have produced
            affordable housing in the area, adding quality homes to the
            existing stock.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($120,000–$180,000), you&apos;ll find
              smaller homes needing renovation. The mid-range
              ($180,000–$255,000) gets you a maintained three-bedroom
              home or a rehabbed property. New construction can reach
              $260,000–$320,000. For buyers priced out of most of
              Minneapolis, McKinley offers genuine homeownership
              opportunity with access to one of the best parks in the
              city.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around McKinley">
        <Prose>
          <p>
            McKinley is primarily car-dependent, with a Walk Score of 52
            and a Bike Score of 73. The neighborhood&apos;s residential
            character and limited commercial options mean that most
            errands require leaving the immediate area. Downtown
            Minneapolis is approximately twelve minutes by car.
          </p>
          <p>
            Metro Transit bus routes serve the area along Penn Avenue and
            nearby corridors, providing connections to downtown and the
            broader transit network. The flat terrain and Theodore Wirth
            Parkway provide cycling options, connecting to the park&apos;s
            trail network and beyond. Street parking is readily available
            on residential blocks.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            McKinley is a neighborhood where change happens slowly and
            unevenly, shaped by the same forces that affect all of North
            Minneapolis but experienced at a smaller, more intimate scale.
          </p>
        </Prose>

        <ArticleSubsection title="Quiet Stability vs. Unmet Needs">
          <Prose>
            <p>
              McKinley has a quiet stability that is easy to overlook. Many
              blocks function well — homeowners maintain their properties,
              neighbors know each other, and the community gardens produce
              abundantly. But this stability coexists with unmet needs:
              aging housing stock, limited commercial services, and the
              broader challenges of crime and disinvestment that affect
              all of North Minneapolis. The neighborhood needs investment
              that reinforces what works without disrupting the
              affordability and community character that define it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Park Equity">
          <Prose>
            <p>
              McKinley sits next to the largest park in Minneapolis but
              has not always been well-connected to it. The Park Board&apos;s
              equity initiatives have begun to address this, with improved
              trail connections, programming targeted at Northside
              communities, and efforts to make Wirth Park more welcoming
              to the diverse populations that live nearby. This work is
              important and ongoing — a park is only an asset if the
              people who live next to it feel that it belongs to them.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Cultural Bridging">
          <Prose>
            <p>
              McKinley&apos;s diversity is exceptional, but bridging the
              differences between communities — Hmong, Somali, Black,
              Native American, white — requires intentional work. Language
              barriers, cultural differences, and different experiences
              with institutions create real challenges for community
              organizing. The gardens have been one of the most effective
              bridging spaces, but the broader work of building a
              cohesive, multicultural community is ongoing and depends
              on residents&apos; willingness to engage across difference.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="McKinley FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
