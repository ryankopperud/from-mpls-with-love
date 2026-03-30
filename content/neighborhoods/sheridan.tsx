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
    title: "Sheridan, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Sheridan, Minneapolis — Northeast Minneapolis, Sheridan Memorial Park, near Logan Park, housing, arts scene spillover, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Sheridan",
  deck: "A small, evolving Northeast Minneapolis neighborhood tucked between the railroad tracks and the river — where the arts district spillover meets blue-collar roots, Sheridan Memorial Park anchors a tight residential community, and the neighborhood's proximity to everything makes it hard to overlook and easy to underestimate.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Sheridan?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Sheridan" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Sheridan, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,800", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$275K–$365K", label: "Median home sale price range (2025 data)" },
      { value: "1890s–1940s", label: "Era most homes were built" },
      { value: "Diversifying", label: "Historically white, growing Latino and East African populations" },
      { value: "Central Ave NE", label: "Nearby commercial corridor" },
      { value: "8 min", label: "Drive to downtown Minneapolis" },
      { value: "70", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Sheridan a good neighborhood in Minneapolis?",
      answer:
        "Sheridan is a compact Northeast Minneapolis neighborhood with strong residential character, good park access, and proximity to both the NE arts district and downtown. It is more affordable than the trendier parts of Northeast while sharing many of the area's assets — walkability, bike infrastructure, and access to Central Avenue's dining and shopping. For people who want a quieter Northeast neighborhood with genuine community character, Sheridan is worth a close look.",
    },
    {
      question: "Is Sheridan, Minneapolis safe?",
      answer:
        "Sheridan is generally considered a safe neighborhood, with crime rates close to or slightly below the Minneapolis average. Like all urban neighborhoods, safety varies by block and context. The residential blocks are quiet, and the neighborhood's small size and tight community contribute to a sense of security. Property crime, particularly car break-ins, is the most common concern.",
    },
    {
      question: "What is Sheridan, Minneapolis known for?",
      answer:
        "Sheridan is known as a small, residential Northeast Minneapolis neighborhood near the arts district. Sheridan Memorial Park provides community green space. The neighborhood's proximity to Logan Park, Central Avenue NE, and the broader Northeast arts and dining scene gives residents access to cultural amenities without the higher prices of neighborhoods at the center of that scene.",
    },
    {
      question: "How much do homes cost in Sheridan, Minneapolis?",
      answer:
        "Median home sale prices in Sheridan range from roughly $275,000 to $365,000 in 2025. This places Sheridan in a moderate range for Northeast Minneapolis — more affordable than the most desirable Northeast neighborhoods but higher than North Minneapolis. Smaller homes and those needing updating can be found under $275,000, while renovated properties can exceed $400,000.",
    },
    {
      question: "Where exactly is Sheridan in Minneapolis?",
      answer:
        "Sheridan is in Northeast Minneapolis, roughly bounded by Lowry Avenue NE to the north, Broadway Street NE to the south, the railroad tracks to the west, and Central Avenue NE to the east. It sits north of Logan Park and south of the Bottineau neighborhood, with the Northeast arts district nearby.",
    },
    {
      question: "What is Sheridan Memorial Park?",
      answer:
        "Sheridan Memorial Park is the neighborhood's primary green space, featuring a playground, open fields, and community gathering areas. The park serves as the neighborhood's social center — a place where families gather, kids play, and community events are held. It is modest in scale but central to neighborhood life.",
    },
    {
      question: "What schools serve Sheridan, Minneapolis?",
      answer:
        "Sheridan is served by Minneapolis Public Schools. Nearby elementary options include Sheridan Arts Magnet and other Northeast Minneapolis schools. Edison High School serves the area for grades 9-12. Northeast Minneapolis schools generally perform well within the district, and families also access magnet programs and charter options.",
    },
    {
      question: "Is Sheridan part of the Northeast arts district?",
      answer:
        "Sheridan is adjacent to rather than at the center of the Northeast arts district, which is concentrated more in the Logan Park and St. Anthony West neighborhoods. However, the arts scene's influence extends into Sheridan — artist live-work spaces, small studios, and creative businesses have found homes in the neighborhood, and residents benefit from easy access to Northeast's galleries, theaters, and art events.",
    },
    {
      question: "How is Sheridan different from other Northeast neighborhoods?",
      answer:
        "Sheridan is smaller and more residential than neighborhoods like Logan Park or St. Anthony West, which are more centrally located in the Northeast cultural scene. It is quieter, slightly more affordable, and less likely to be affected by nightlife and entertainment traffic. For people who want to be near the action without being in it, Sheridan occupies a sweet spot.",
    },
  ],
  nearby: [
    { name: "Logan Park", slug: "logan-park", description: "Arts district heart with galleries and studios" },
    { name: "Bottineau", slug: "bottineau", description: "Northeast residential neighborhood to the north" },
    { name: "Marshall Terrace", slug: "marshall-terrace", description: "Riverfront neighborhood to the northwest" },
    { name: "St. Anthony West", slug: "st-anthony-west", description: "Historic Northeast along the riverfront" },
    { name: "Audubon Park", slug: "audubon-park", description: "Residential Northeast neighborhood to the east" },
  ],
  closing: {
    title: "What Makes Sheridan Work",
    paragraphs: [
      "Sheridan works because it is small enough to function as a genuine community and close enough to everything that you never feel isolated. The park is two blocks away. Central Avenue is a short walk. Downtown is eight minutes by car. The Northeast galleries and restaurants are right there. But when you come home to your block in Sheridan, it is quiet — front porches and tree canopy and the sound of someone mowing their lawn. The neighborhood does not try to be anything it is not. It is a place to live, maintained by people who take that seriously.",
      "As Northeast Minneapolis continues to evolve — the old blue-collar identity mixing with the arts scene, the arts scene mixing with new development, the new development pushing prices upward — Sheridan faces the same questions as its neighbors, just at a slightly lower volume. Whether the neighborhood can maintain its affordable, unpretentious character as the area around it grows more expensive is not certain. What is certain is that the people who live here now value exactly the things that are at risk — the quiet blocks, the reasonable prices, the community that knows itself — and they will not let those things go without a fight.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday in May, the Art-A-Whirl crowds are a few blocks
          south in Logan Park, filling galleries and studios and spilling
          onto sidewalks with wine in plastic cups. In Sheridan, the
          noise is a pleasant background hum. A family is planting a
          garden in their front yard. Two neighbors lean against a fence,
          talking about nothing in particular. A dog walks its owner past
          Sheridan Memorial Park, where a dad pushes his daughter on the
          swings. The arts district is right there — close enough to walk
          to, far enough that the neighborhood keeps its own rhythm. This
          is the Sheridan proposition: proximity without immersion,
          accessibility without chaos, a Northeast neighborhood that has
          not yet been fully discovered and likes it that way.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/sheridan/hero.webp"
        alt="A quiet residential street in Sheridan, Northeast Minneapolis"
        caption="Sheridan — residential quiet on the edge of Northeast's arts district"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Sheridan, Minneapolis?">
        <Prose>
          <p>
            Sheridan is a small residential neighborhood in Northeast
            Minneapolis, bounded roughly by Lowry Avenue NE to the north,
            Broadway Street NE to the south, the railroad tracks to the
            west, and Central Avenue NE to the east. Home to approximately
            2,800 residents, it is one of the quieter and more affordable
            pockets of Northeast — a neighborhood that benefits from its
            proximity to the arts district, Central Avenue&apos;s
            commercial corridor, and downtown without being at the center
            of any of them.
          </p>
          <p>
            Sheridan sits north of{" "}
            <Link href="/neighborhoods/logan-park" className="text-[#2a9d8f] hover:underline">
              Logan Park
            </Link>
            , the heart of Northeast&apos;s arts scene, and south of{" "}
            <Link href="/neighborhoods/bottineau" className="text-[#2a9d8f] hover:underline">
              Bottineau
            </Link>
            , with{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>{" "}
            to the south and west. The neighborhood shares the broader
            Northeast identity — blue-collar roots, increasing diversity,
            arts and culture spillover — while maintaining a residential
            character that distinguishes it from the more commercially
            active parts of the area.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Sheridan Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/sheridan/neighborhood-sign.webp"
          alt="Sheridan neighborhood sign in Minneapolis"
          caption="The Sheridan neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Sheridan History & Origins">
        <Prose>
          <p>
            Sheridan&apos;s history is Northeast Minneapolis history —
            working-class, immigrant, industrial. The neighborhood
            developed in the late nineteenth and early twentieth centuries
            as part of the broader settlement of Northeast by Eastern
            European immigrants — Poles, Ukrainians, Czechs, and others
            who worked in the flour mills, sawmills, and rail yards that
            powered Minneapolis&apos;s industrial economy. The housing
            stock — modest frame houses, bungalows, and small Foursquares
            — was built for these families and reflected their practical
            needs and limited means.
          </p>
          <p>
            The neighborhood takes its name from General Philip Sheridan,
            a Union Army commander in the Civil War, following the
            Northeast tradition of naming neighborhoods after military
            figures and presidents. Sheridan Memorial Park, the
            neighborhood&apos;s green space, carries the same
            commemorative purpose.
          </p>
          <p>
            For most of the twentieth century, Sheridan was a stable,
            working-class neighborhood — the kind of place where families
            stayed for generations, where everyone was Catholic or
            Orthodox or Lutheran, where the tavern on the corner served
            the same regulars for decades. The deindustrialization of the
            late twentieth century changed the economic base, and the
            transformation of Northeast into an arts and cultural
            district — beginning in the 1990s and accelerating in the
            2000s — brought new energy and new residents.
          </p>
          <p>
            The demographic shift has been gradual but real. Latino
            families, particularly Mexican and Central American, have
            become a significant presence along the Central Avenue
            corridor and in adjacent neighborhoods. East African
            immigrant families have also settled in parts of Northeast.
            The old Eastern European identity has not disappeared — the
            churches, the cultural organizations, the family names on
            mailboxes — but it coexists now with a more diverse
            community.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Sheridan">
        <Prose>
          <p>
            Living in Sheridan is living in the quiet part of a
            neighborhood that people think of as exciting. The arts
            district buzz, the Central Avenue restaurants, the galleries
            and breweries — they are all nearby, all accessible, and all
            someone else&apos;s front yard. Sheridan&apos;s front yards
            are just front yards — with gardens, lawn chairs, and the
            kind of low-key neighborhood life that makes a place feel
            like home rather than a destination.
          </p>
          <p>
            The residential blocks are compact and walkable. Houses are
            close together on small lots, with the narrow setbacks and
            front-porch orientation that characterize early-twentieth-century
            Minneapolis neighborhoods. The housing is modest in scale but
            solid in construction — these homes were built to last, and
            many have. Some have been updated and renovated; others
            retain their original character with minimal modification.
          </p>
          <p>
            Sheridan Memorial Park provides the neighborhood&apos;s primary
            gathering space. The park is small but functional — playground,
            open fields, space for community events. It is the kind of
            park where you know the other parents by name, where the same
            kids show up after school every day, where the community&apos;s
            social fabric is woven through repeated, unremarkable
            encounters.
          </p>
          <p>
            The neighborhood has begun to attract artists, young
            professionals, and creative types who are priced out of the
            hotter parts of Northeast. This influx is changing the
            neighborhood slowly — a renovated house here, a new coffee
            spot there — but Sheridan has not yet experienced the rapid
            transformation that has reshaped neighborhoods like the North
            Loop. The pace of change is manageable, and the community
            character remains more working-class and family-oriented
            than artsy, despite the proximity to the arts district.
          </p>
        </Prose>
        <Quote
          text="We tell people we live in Northeast and they think we're in the middle of the arts district. Then they visit and see it's just a regular neighborhood. That's exactly why we like it."
          cite="Sheridan resident"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Sheridan Food, Drink & Local Spots">
        <Prose>
          <p>
            Sheridan does not have a concentration of restaurants within
            its boundaries, but its location puts it within easy reach
            of one of the best food corridors in Minneapolis. Central
            Avenue NE, which forms the neighborhood&apos;s eastern
            boundary, is a multicultural commercial strip with restaurants,
            bakeries, and groceries representing traditions from around
            the world. The Northeast dining and drinking scene — breweries,
            restaurants, cafes — is accessible from Sheridan within
            minutes.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby on Central Avenue">
          <PlaceCardComponent place={{ name: "Central Avenue NE", tag: "Multicultural Corridor", price: "$–$$", description: "Central Avenue is one of Minneapolis's most diverse commercial streets — Mexican taquerias, Vietnamese pho shops, East African restaurants, Middle Eastern bakeries, and old-school Northeast bars share the corridor. For Sheridan residents, it's a walkable multicultural food court. Holy Land Deli, Crescent Moon Bakery, and numerous smaller spots make this corridor essential." }} />
          <PlaceCardComponent place={{ name: "Northeast Breweries & Restaurants", tag: "NE Dining Scene", price: "$$–$$$", description: "The broader Northeast dining scene — Dangerous Man Brewing, Young Joni, 612 Brew, Psycho Suzi's, and dozens of other restaurants and breweries — is within a short drive or bike ride from Sheridan. The neighborhood's position gives residents access to one of the best food and drink scenes in the city." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Within Sheridan">
          <Prose>
            <p>
              Within Sheridan&apos;s boundaries, commercial options are
              limited — a few small businesses, a corner spot or two.
              The neighborhood&apos;s commercial life is borrowed from its
              neighbors, which is both a limitation (you have to leave
              for most things) and an advantage (you get the quiet
              residential character without the commercial traffic).
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Sheridan">
        <Prose>
          <p>
            Sheridan has modest park space within its boundaries and
            access to larger green spaces and trails in the surrounding
            area. The Mississippi River, while not immediately adjacent,
            is accessible via nearby neighborhoods and trail connections.
          </p>
        </Prose>

        <ArticleSubsection title="Sheridan Memorial Park">
          <Prose>
            <p>
              Sheridan Memorial Park is the neighborhood&apos;s primary
              green space — a small park with a playground, open fields,
              and community gathering areas. It serves the daily
              recreational needs of the neighborhood and hosts community
              events. While not a destination park, it functions as an
              important social space for a small neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Parks & Trails">
          <Prose>
            <p>
              The Northeast Minneapolis park system includes several
              larger parks accessible from Sheridan. The Mississippi River
              trail system is reachable via the neighborhoods to the west,
              providing walking and cycling connections to the riverfront.
              The Grand Rounds trail network passes through Northeast,
              connecting Sheridan to the broader Minneapolis trail system.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Sheridan Schools">
        <Prose>
          <p>
            Sheridan is served by Minneapolis Public Schools. Sheridan
            Arts Magnet, located in the neighborhood, provides an
            elementary option with an arts-integrated curriculum that
            reflects Northeast&apos;s cultural character. Edison High
            School serves the area for grades 9–12 and is one of the
            more diverse high schools in the district.
          </p>
          <p>
            Northeast Minneapolis schools generally perform within the
            middle range of the district. Families also access magnet
            programs, charter schools, and the district&apos;s open
            enrollment options. The proximity to the arts district and
            cultural organizations provides informal educational
            opportunities — galleries, studios, and creative businesses
            that expose children to artistic practice as a routine
            part of neighborhood life.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Sheridan Real Estate & Housing">
        <Prose>
          <p>
            Sheridan&apos;s housing market occupies a moderate position
            within Northeast Minneapolis — more affordable than the
            hottest Northeast neighborhoods but carrying the general
            appreciation that has lifted the entire area. Median home sale
            prices range from roughly $275,000 to $365,000 in 2025, below
            the citywide median for desirable close-in neighborhoods.
          </p>
          <p>
            The housing stock is predominantly early-twentieth-century
            frame houses and bungalows on small lots. Many homes retain
            original character — hardwood floors, built-in woodwork,
            front porches — while some have been modernized. The compact
            lot sizes and close-together houses create a dense, walkable
            feel that is characteristic of pre-automobile Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($230,000–$290,000), you&apos;re looking
              at smaller homes that may need updating — a two-bedroom
              bungalow with original everything, a house with good bones
              but dated finishes. The mid-range ($290,000–$375,000) gets
              you a three-bedroom home in good condition or a recently
              updated property. Above $375,000, you&apos;re looking at
              fully renovated homes or larger properties. Some new
              construction and conversions have added townhomes and
              condos to the mix.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We wanted Northeast but couldn't afford Logan Park. Sheridan is two blocks north and $100K cheaper. Same neighborhood feel, same access to everything, half the price pressure."
          cite="Recent Sheridan homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Sheridan">
        <Prose>
          <p>
            Sheridan benefits from Northeast Minneapolis&apos;s overall
            connectivity. The Walk Score of 70 and Bike Score of 85
            reflect the neighborhood&apos;s proximity to Central Avenue&apos;s
            commercial corridor and the area&apos;s strong cycling
            infrastructure. Downtown Minneapolis is approximately eight
            minutes by car.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along Central
            Avenue NE, providing frequent service to downtown and
            connections to the broader transit network. The 10 bus on
            Central Avenue is one of the most frequent and useful routes
            in the system. Cycling is practical and popular — the flat
            terrain, connected street grid, and proximity to trails make
            Northeast one of the best biking areas in the city.
          </p>
          <p>
            By car, downtown is easily accessible via Central Avenue or
            University Avenue. Highway 35W is reachable within a few
            minutes, providing connections to the suburbs and the broader
            metro. Street parking is generally available on residential
            blocks, though Central Avenue parking can be competitive
            during peak hours.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Sheridan&apos;s tensions are the tensions of a neighborhood
            that is adjacent to change rather than at the center of it —
            which means the changes come more slowly but are no less
            consequential for the people who live here.
          </p>
        </Prose>

        <ArticleSubsection title="Northeast Gentrification Spillover">
          <Prose>
            <p>
              As the core of Northeast&apos;s arts district — Logan Park,
              parts of St. Anthony West — has become more expensive, the
              price pressure has moved outward. Sheridan, with its lower
              prices and proximity to the action, has absorbed some of
              this spillover. Home prices have risen, some long-term
              residents have been priced out or chosen to sell, and the
              demographic mix has shifted toward younger, more affluent
              buyers. This process is not as dramatic as in the North
              Loop or Uptown, but it is noticeable and ongoing.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Cultural Transition">
          <Prose>
            <p>
              Northeast Minneapolis has been in cultural transition for
              decades — from its Eastern European working-class roots to
              its current identity as an arts and dining destination. In
              Sheridan, this transition is still underway. The old
              identity — the taverns, the churches, the multi-generational
              families — is thinning as those families age out or move
              away. The new identity — younger, more diverse, more
              connected to the arts scene — is forming but not yet
              dominant. The neighborhood is in between, which can feel
              unsettled but also means that Sheridan has not yet become
              a finished product.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development Density">
          <Prose>
            <p>
              New construction — townhomes, small apartment buildings —
              has begun to appear in Sheridan, reflecting the development
              pressure that follows rising demand. The scale has been
              modest so far, but each new project raises questions about
              density, parking, neighborhood character, and who the new
              housing is serving. The neighborhood&apos;s small size means
              that even modest development can feel significant, and
              residents are engaged in the conversation about what kind
              of growth Sheridan should accommodate.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Sheridan FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
