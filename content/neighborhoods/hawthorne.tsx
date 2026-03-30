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
    title: "Hawthorne, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Hawthorne, Minneapolis — community organizing, diverse neighborhood, Hawthorne Crossings, Broadway Avenue, housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Hawthorne",
  deck: "A North Minneapolis neighborhood where community organizing is not a slogan but a survival strategy — where residents have built block clubs, mutual aid networks, and a fierce sense of identity in a place that has been underestimated and underserved for generations.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Hawthorne?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Hawthorne" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Hawthorne, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,800", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$175K–$245K", label: "Median home sale price range (2025 data)" },
      { value: "1890s–1940s", label: "Era most homes were built" },
      { value: "65%+", label: "Black / African American population" },
      { value: "West Broadway", label: "Primary commercial corridor" },
      { value: "10 min", label: "Drive to downtown Minneapolis" },
      { value: "60", label: "Walk Score" },
      { value: "76", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Hawthorne a good neighborhood in Minneapolis?",
      answer:
        "Hawthorne is a neighborhood with strong community bonds, affordable housing, and a tradition of resident-led organizing that is exceptional by any standard. It also faces the challenges that define much of North Minneapolis — higher crime rates, commercial disinvestment, and the lingering effects of systemic racism. Whether Hawthorne is 'good' depends on what you value: if community engagement, affordability, and diversity matter to you, Hawthorne has genuine appeal alongside its genuine challenges.",
    },
    {
      question: "Is Hawthorne, Minneapolis safe?",
      answer:
        "Hawthorne's crime rates are elevated compared to citywide averages, particularly for property crime and some violent crime categories. This is a documented reality that reflects decades of systemic factors. Safety varies by block, and Hawthorne's block clubs are among the most active in the city. Many residents feel safe on their immediate streets while acknowledging broader challenges. The neighborhood has been at the forefront of community-based safety initiatives.",
    },
    {
      question: "What is Hawthorne, Minneapolis known for?",
      answer:
        "Hawthorne is known for its exceptionally strong community organizing — the Hawthorne Neighborhood Council has been one of the most active neighborhood organizations in Minneapolis. The neighborhood is also known for the West Broadway commercial corridor, its diverse and predominantly Black residential community, and the Hawthorne Crossings development. Like all North Minneapolis neighborhoods, it is also known for challenges related to crime and disinvestment.",
    },
    {
      question: "How much do homes cost in Hawthorne, Minneapolis?",
      answer:
        "Hawthorne has some of the most affordable housing in Minneapolis, with median home sale prices ranging from roughly $175,000 to $245,000 in 2025. Smaller homes needing renovation can be found under $175,000, while rehabbed or new-construction properties may reach $300,000. The affordability represents both opportunity and the effects of long-term disinvestment.",
    },
    {
      question: "Where exactly is Hawthorne in Minneapolis?",
      answer:
        "Hawthorne is in North Minneapolis, roughly bounded by Lowry Avenue to the north, Plymouth Avenue to the south, the railroad corridor to the east, and Penn Avenue North to the west. It sits north of Near North and south of Jordan, with the West Broadway commercial corridor running through its center.",
    },
    {
      question: "What is the Hawthorne Neighborhood Council?",
      answer:
        "The Hawthorne Neighborhood Council (HNC) is one of the most active and recognized neighborhood organizations in Minneapolis. It has led initiatives on housing quality, public safety, youth programming, and commercial corridor development. The organization is resident-driven and has been nationally recognized for its community organizing model. HNC exemplifies what neighbors can accomplish when they organize around shared interests.",
    },
    {
      question: "What schools serve Hawthorne, Minneapolis?",
      answer:
        "Hawthorne is served by Minneapolis Public Schools. Lucy Laney Community School is a nearby elementary option. North High School serves the area for grades 9-12. Families also access charter schools, magnet programs, and the district's open enrollment system. Community-based educational organizations provide additional support.",
    },
    {
      question: "What is West Broadway like in Hawthorne?",
      answer:
        "West Broadway Avenue is the primary commercial corridor running through Hawthorne and several other North Minneapolis neighborhoods. The corridor has a mix of small businesses, community organizations, and services. It has struggled with vacancy and disinvestment but has also been the focus of significant revitalization efforts. New development, including mixed-use projects, has added energy to the corridor in recent years.",
    },
  ],
  nearby: [
    { name: "Near North", slug: "near-north", description: "Historic Black community to the south" },
    { name: "Jordan", slug: "jordan", description: "Diverse residential neighborhood to the north" },
    { name: "Willard - Hay", slug: "willard-hay", description: "Residential blocks west of Penn Avenue" },
    { name: "McKinley", slug: "mckinley", description: "Community gardens and affordable housing nearby" },
    { name: "Holland", slug: "holland", description: "North Minneapolis neighborhood to the northwest" },
  ],
  closing: {
    title: "What Makes Hawthorne Worth Knowing",
    paragraphs: [
      "Hawthorne is not a neighborhood that sells itself to outsiders — it is a neighborhood that takes care of its own. The block clubs that patrol their streets, the organizers who show up at City Hall, the neighbors who check on each other after a hard night, the families who have chosen to stay and invest in this place when leaving would have been easier — these are the people who make Hawthorne what it is. They do not need validation from a neighborhood guide. But they deserve acknowledgment.",
      "What Hawthorne needs is what it has always needed: the same level of public and private investment that flows to wealthier parts of the city as a matter of course. Not charity, not sympathy, not another study — investment. In streets, in businesses, in schools, in the basic infrastructure of a functioning neighborhood. The organizing is already here. The community is already here. The commitment is already here. What remains to be seen is whether the rest of Minneapolis will match it.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Tuesday evening in Hawthorne, the block club on the 2700
          block of Emerson Avenue North is holding its monthly meeting in
          a living room. Eight people sit in a circle — a retired postal
          worker, a Somali mother with a toddler on her lap, a young man
          who moved here two years ago from South Minneapolis, a woman
          who has been on this block since 1987. They talk about the
          abandoned property on the corner, the streetlight that has been
          out for three weeks, the shooting last month two blocks over, the
          community garden that produced so many peppers this summer they
          were giving bags away. The meeting lasts forty-five minutes. It
          ends with assignments: who calls 311 about the streetlight, who
          talks to the owner of the vacant house, who organizes the next
          block cleanup. This is what community organizing looks like in
          Hawthorne — not grand gestures, but persistent, unglamorous, and
          real.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/hawthorne/hero.webp"
        alt="A residential block in Hawthorne, Minneapolis with tree-lined streets and front porches"
        caption="Hawthorne — community organizing runs as deep as the tree roots on these blocks"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Hawthorne, Minneapolis?">
        <Prose>
          <p>
            Hawthorne is a residential neighborhood in North Minneapolis,
            bounded roughly by Lowry Avenue to the north, Plymouth Avenue
            to the south, the railroad corridor to the east, and Penn
            Avenue North to the west. Home to approximately 3,800
            residents, it is one of the core neighborhoods of the
            Northside — predominantly Black, deeply community-oriented,
            and shaped by both the consequences of systemic racism and the
            organizing traditions that have risen in response.
          </p>
          <p>
            The neighborhood sits between{" "}
            <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
              Near North
            </Link>{" "}
            to the south and{" "}
            <Link href="/neighborhoods/jordan" className="text-[#2a9d8f] hover:underline">
              Jordan
            </Link>{" "}
            to the north, with{" "}
            <Link href="/neighborhoods/willard-hay" className="text-[#2a9d8f] hover:underline">
              Willard - Hay
            </Link>{" "}
            to the west. West Broadway Avenue, the primary commercial
            corridor of North Minneapolis, runs through Hawthorne and
            serves as the neighborhood&apos;s commercial and civic spine.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Hawthorne Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/hawthorne/neighborhood-sign.webp"
          alt="Hawthorne neighborhood sign in Minneapolis"
          caption="The Hawthorne neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Hawthorne History & Origins">
        <Prose>
          <p>
            Hawthorne&apos;s early history mirrors that of North Minneapolis
            broadly. The area was settled in the late nineteenth century by
            Scandinavian and Eastern European immigrants, with modest frame
            houses going up on grid streets as the city expanded northward.
            The neighborhood&apos;s housing stock — bungalows, Foursquares,
            and simple frame houses — dates primarily from the 1890s through
            the 1940s and reflects its working-class origins.
          </p>
          <p>
            As discriminatory housing practices restricted where Black
            families could live in Minneapolis, the Northside became the
            primary area of Black settlement. Hawthorne&apos;s transition
            from a predominantly white, immigrant neighborhood to a
            predominantly Black neighborhood occurred over several decades,
            accelerating in the 1950s and 1960s as white families moved to
            the suburbs and Black families expanded beyond the tightest
            boundaries of Near North.
          </p>
          <p>
            The mid-to-late twentieth century brought the familiar pattern
            of disinvestment: banks refused mortgages, businesses left,
            housing stock deteriorated, and the neighborhood bore the
            compounding effects of poverty that had been engineered by
            policy. The crack epidemic of the 1980s and 1990s hit
            Hawthorne hard, bringing violence and instability to blocks
            that were already struggling.
          </p>
          <p>
            Out of that crisis emerged the organizing tradition that
            defines Hawthorne today. The Hawthorne Neighborhood Council,
            formed in the 1990s, became one of the most effective
            neighborhood organizations in Minneapolis — using block
            organizing, resident engagement, and persistent advocacy to
            address crime, housing quality, and commercial development.
            The organization&apos;s model — built on the idea that the
            people closest to the problems are best positioned to solve
            them — has been recognized nationally and has influenced
            community organizing practice well beyond North Minneapolis.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Hawthorne">
        <Prose>
          <p>
            Living in Hawthorne means being part of a community that has
            learned to take care of itself — not because it wanted to be
            self-reliant, but because the institutions that were supposed
            to take care of it did not. The block clubs are not hobby
            organizations; they are the front line of neighborhood safety,
            information sharing, and mutual support. When something
            happens on a block — good or bad — the neighbors know about
            it, and the response is collective.
          </p>
          <p>
            The residential streets are lined with older homes on small
            lots, front porches facing the sidewalk in the Minneapolis
            tradition. Some blocks are well-maintained and stable, with
            long-term homeowners who take visible pride in their
            properties. Other blocks show the effects of vacancy,
            deferred maintenance, and the challenges of absentee ownership.
            The variation can be stark within a few blocks, and the
            difference between a strong block and a struggling one often
            comes down to the presence or absence of a few committed
            homeowners or a functioning block club.
          </p>
          <p>
            Hawthorne is predominantly Black, with growing Somali, Latino,
            and other immigrant populations. The diversity adds cultural
            richness but also creates organizing challenges, as different
            communities navigate language barriers, cultural differences,
            and sometimes different relationships with institutions like
            police and government. The Hawthorne Neighborhood Council has
            worked to bridge these differences, with mixed but genuine
            results.
          </p>
          <p>
            There is a directness in Hawthorne that you do not find in
            neighborhoods where problems are abstract. People here talk
            about crime because they have experienced it. They talk about
            disinvestment because they see it on their block. They talk
            about organizing because it is how they have survived. This
            is not a neighborhood that sugarcoats. It is a neighborhood
            that acts.
          </p>
        </Prose>
        <Quote
          text="Nobody's going to fix this neighborhood for us. We know that. So we fix it ourselves, one block at a time. That's not a complaint — that's a fact."
          cite="Hawthorne block club leader"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Hawthorne Food, Drink & Local Spots">
        <Prose>
          <p>
            Hawthorne&apos;s food scene is modest in scale but meaningful
            in context. The neighborhood is not a dining destination, but
            the restaurants and food businesses that exist here are rooted
            in the community they serve. West Broadway provides the primary
            commercial corridor, with a mix of soul food, Somali
            restaurants, and small takeout spots that reflect the
            neighborhood&apos;s demographics.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "West Broadway Corridor", tag: "Mixed Dining", price: "$–$$", description: "West Broadway Avenue through Hawthorne hosts a mix of small restaurants, takeout joints, and food businesses. Somali restaurants serving sambusa, rice, and goat share the corridor with soul food spots and small cafes. The corridor has gaps — vacant storefronts are part of the landscape — but the businesses that are here serve their community with consistency and care." }} />
          <PlaceCardComponent place={{ name: "Community Food Initiatives", tag: "Food Access", price: "$", description: "Hawthorne has been a focus of food access work in North Minneapolis. Community gardens, urban agriculture projects, and food distribution programs address the gap left by the absence of a full-service grocery store in the immediate area. These initiatives are practical responses to a real problem, not symbolic gestures." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Food access remains a challenge in Hawthorne, as it does
              across much of North Minneapolis. The nearest full-service
              grocery options require a drive or bus ride to nearby
              commercial areas. Community advocates have pushed for
              improved food retail in the neighborhood, and some progress
              has been made, but the gap between what exists and what the
              community needs remains significant. Residents rely on a
              combination of small groceries, community gardens, and trips
              to stores outside the neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Hawthorne">
        <Prose>
          <p>
            Hawthorne has neighborhood parks that serve the community well,
            though the level of investment in North Minneapolis parks has
            historically lagged behind parks in wealthier parts of the
            city. Recent years have seen some improvement, driven in part
            by community advocacy and Park Board commitments to equity.
          </p>
        </Prose>

        <ArticleSubsection title="Hawthorne Park">
          <Prose>
            <p>
              Hawthorne Park includes playing fields, basketball courts,
              a playground, and green space that serves as a gathering
              place for the neighborhood. The park is actively used by
              families and youth, particularly in summer months. Its role
              in the community extends beyond recreation — it is a meeting
              place, a site for community events, and one of the few large
              open spaces in the neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Farview Park">
          <Prose>
            <p>
              Farview Park, accessible from Hawthorne, includes a
              recreation center with year-round programming, an outdoor
              pool, basketball courts, and playing fields. The rec center
              is one of the more actively programmed facilities in North
              Minneapolis and serves youth from across the surrounding
              neighborhoods.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="North Mississippi Regional Park">
          <Prose>
            <p>
              North Mississippi Regional Park, along the river to the
              east, provides riverfront trails, picnic areas, and natural
              areas that are among the most underappreciated park assets
              in the city. The park offers a genuine natural retreat
              accessible from Hawthorne, though the connection between
              the neighborhood and the riverfront could be stronger.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Hawthorne Schools">
        <Prose>
          <p>
            Schools serving Hawthorne reflect the challenges and
            complexities of North Minneapolis education. Lucy Laney
            Community School is a nearby elementary option within
            Minneapolis Public Schools. North High School serves the
            area for grades 9–12. Educational outcomes in the
            neighborhood reflect the persistent achievement gap that
            has defined Minneapolis schools, and many families
            supplement neighborhood options with magnet programs,
            charter schools, and open enrollment choices.
          </p>
          <p>
            The Hawthorne Neighborhood Council and other community
            organizations have advocated for improved educational
            resources and outcomes. After-school programs, tutoring,
            and mentoring initiatives provide additional support for
            neighborhood youth. The gap between what exists and what the
            community&apos;s children deserve remains a driving force
            behind organizing efforts.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Hawthorne Real Estate & Housing">
        <Prose>
          <p>
            Hawthorne&apos;s housing market reflects its position in North
            Minneapolis — very affordable by Minneapolis standards, with
            median home sale prices ranging from roughly $175,000 to
            $245,000 in 2025. The low prices represent both opportunity
            for buyers and the documented effects of decades of
            disinvestment.
          </p>
          <p>
            The housing stock is predominantly older — frame houses and
            bungalows from the 1890s through 1940s — with conditions
            ranging from well-maintained to significantly deteriorated.
            The Hawthorne Neighborhood Council has been particularly
            active on housing issues, pushing for landlord accountability,
            code enforcement, and the rehabilitation of vacant and
            substandard properties. Community development corporations
            have produced affordable housing in the neighborhood, adding
            new and rehabbed homes to the mix.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($120,000–$180,000), you&apos;re looking
              at smaller homes that need work — sometimes significant
              work. The mid-range ($180,000–$260,000) gets you a
              three-bedroom home in reasonable condition or a recently
              rehabbed property. New construction, where available, can
              reach $280,000–$340,000. The rental market includes a
              significant number of properties managed by absentee
              landlords, and rental housing quality varies widely.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We bought our house here because we could afford it and because we believe in this neighborhood. Not everyone understands that. But the people who live here do."
          cite="Hawthorne homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Hawthorne">
        <Prose>
          <p>
            Hawthorne is accessible by car, bus, and bike, with downtown
            Minneapolis approximately ten minutes away by car. The Walk
            Score of 60 and Bike Score of 76 reflect a grid-street
            neighborhood with some walkable commercial options along West
            Broadway but gaps in the retail and service landscape.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along West
            Broadway, Penn Avenue, and Lyndale Avenue North, providing
            connections to downtown and other parts of the city. The flat
            terrain and connected street grid make biking practical, and
            the emerging trail connections in North Minneapolis are slowly
            improving cycling infrastructure.
          </p>
          <p>
            Most residents rely on cars for grocery shopping, school
            commutes, and access to services not available within the
            neighborhood. Parking is generally not an issue on residential
            streets.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Hawthorne is a neighborhood in motion, though the direction
            and pace of change are contested. The tensions here are both
            old and evolving, and they center on a fundamental question:
            will the investment that North Minneapolis has been denied for
            decades finally arrive, and if it does, who will it serve?
          </p>
        </Prose>

        <ArticleSubsection title="West Broadway Revitalization">
          <Prose>
            <p>
              West Broadway Avenue has been the focus of revitalization
              efforts for years, with mixed results. New development —
              including mixed-use projects with affordable housing and
              ground-floor retail — has begun to fill some of the gaps.
              The Hawthorne Crossings development represents one of the
              more significant investments in the corridor. But the pace
              of change has been frustratingly slow for residents who have
              been promised revitalization for decades, and the question
              of whether new businesses and developments will serve
              existing community members or attract a different clientele
              remains unresolved.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Organizing">
          <Prose>
            <p>
              Crime remains a significant challenge, and the community&apos;s
              response to it — through block clubs, violence interruption
              programs, and youth engagement — continues to define
              Hawthorne&apos;s character. The relationship between the
              neighborhood and police is complicated; many residents want
              more effective public safety while also harboring justified
              distrust of an institution that has not always served them
              well. The neighborhood&apos;s organizing model — which treats
              residents as the primary agents of change rather than passive
              recipients of services — remains both its greatest strength
              and an implicit indictment of the institutions that should
              be doing more.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Housing Stability">
          <Prose>
            <p>
              Housing stability is an ongoing concern. Absentee landlords,
              substandard rental properties, and the challenge of
              maintaining aging housing stock on limited incomes all
              contribute to a housing landscape that is fragile. The
              Hawthorne Neighborhood Council has been particularly
              aggressive on housing issues — documenting problem properties,
              pushing for code enforcement, and working with housing
              organizations to produce quality affordable units. These
              efforts have made a real difference on specific blocks but
              have not yet reached the scale needed to transform the
              neighborhood&apos;s overall housing conditions.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Hawthorne FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
