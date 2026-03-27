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
    title: "Willard - Hay, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Willard - Hay, Minneapolis — Willard Park, diverse residential community, affordable housing, Theodore Wirth Park access, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Willard - Hay",
  deck: "A residential North Minneapolis neighborhood where Willard Park anchors community life, where the blocks between Penn Avenue and Theodore Wirth Parkway hold some of the most affordable homeownership in the city, and where diverse families build lives that are richer and more complicated than the zip code suggests.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Willard - Hay?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Willard - Hay" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Willard - Hay, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,600", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$175K–$250K", label: "Median home sale price range (2025 data)" },
      { value: "1900s–1940s", label: "Era most homes were built" },
      { value: "55%+", label: "Black / African American population" },
      { value: "Penn Ave N", label: "Eastern boundary and commercial corridor" },
      { value: "12 min", label: "Drive to downtown Minneapolis" },
      { value: "55", label: "Walk Score" },
      { value: "74", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Willard - Hay a good neighborhood in Minneapolis?",
      answer:
        "Willard - Hay is a neighborhood with affordable housing, access to Theodore Wirth Park, an active community organization, and growing diversity. It faces the challenges common to North Minneapolis — higher crime rates, commercial gaps, and long-term disinvestment — but also has stable blocks with committed homeowners and genuine community bonds. For people seeking affordability and park access, Willard - Hay has real assets.",
    },
    {
      question: "Is Willard - Hay, Minneapolis safe?",
      answer:
        "Willard - Hay's crime rates are elevated compared to citywide averages, consistent with the broader North Minneapolis pattern. Safety varies by block, with some blocks quite stable and others facing more challenges. The Willard-Hay neighborhood organization has been active on public safety issues, and block clubs provide grassroots safety infrastructure on many streets.",
    },
    {
      question: "What is Willard - Hay, Minneapolis known for?",
      answer:
        "Willard - Hay is known for Willard Park and its recreation center, its proximity to Theodore Wirth Park, affordable housing, and a diverse residential community. The neighborhood occupies the western tier of North Minneapolis, between Penn Avenue and Theodore Wirth Parkway, giving it a quieter, more residential character than neighborhoods closer to the commercial corridors.",
    },
    {
      question: "How much do homes cost in Willard - Hay, Minneapolis?",
      answer:
        "Housing prices in Willard - Hay are among the most affordable in Minneapolis, with median home sale prices ranging from roughly $175,000 to $250,000 in 2025. This makes homeownership accessible for buyers priced out of most other city neighborhoods. Rehabbed and new-construction homes can reach higher price points.",
    },
    {
      question: "Where exactly is Willard - Hay in Minneapolis?",
      answer:
        "Willard - Hay is in North Minneapolis, roughly bounded by Plymouth Avenue to the south, Lowry Avenue to the north, Penn Avenue North to the east, and Theodore Wirth Parkway to the west. It sits west of Near North and Hawthorne, with McKinley to the north and Harrison to the south.",
    },
    {
      question: "Is Willard - Hay close to Theodore Wirth Park?",
      answer:
        "Yes — Willard - Hay's western boundary is Theodore Wirth Parkway, which provides direct access to Theodore Wirth Park's 750+ acres of trails, woodland, golf course, beach, and recreational facilities. This proximity to the city's largest park is one of Willard - Hay's most significant assets.",
    },
    {
      question: "What schools serve Willard - Hay, Minneapolis?",
      answer:
        "Willard - Hay is served by Minneapolis Public Schools. Nearby elementary options include North Minneapolis community schools. North High School serves the area for grades 9-12. Families also use open enrollment, magnet programs, and charter schools to access additional educational options.",
    },
    {
      question: "What is the Willard-Hay neighborhood organization?",
      answer:
        "The Willard-Hay neighborhood organization has been an active advocate for the community, working on issues including public safety, housing quality, park access, and commercial corridor development. The organization provides a vehicle for resident engagement and has pushed for equitable investment in the neighborhood.",
    },
  ],
  nearby: [
    { name: "Near North", slug: "near-north", description: "Historic Black community to the east" },
    { name: "Hawthorne", slug: "hawthorne", description: "Community organizing hub to the northeast" },
    { name: "McKinley", slug: "mckinley", description: "Community gardens and park access to the north" },
    { name: "Harrison", slug: "harrison", description: "Diverse neighborhood to the south" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "More affluent neighborhood across Wirth Parkway" },
  ],
  closing: {
    title: "What Willard - Hay Knows",
    paragraphs: [
      "Willard - Hay knows what it is like to live in a neighborhood that the rest of the city drives past on the way to the park. Theodore Wirth is right there — one of the great urban parks in America — and the people who live closest to it are the people with the least access to the city's resources. That irony is not lost on Willard - Hay residents, and it is not something they accept quietly. The neighborhood organization pushes for better park connections, better infrastructure, better services, and the basic dignity of being treated as a community that matters.",
      "What Willard - Hay also knows is how to build a life with what is available. The houses are affordable. The park is beautiful. The neighbors look out for each other. The block clubs function. The rec center serves the kids. None of this makes the news. All of it makes a neighborhood. And for the families who call Willard - Hay home, the calculation is clear: this is a place where they can own a home, raise their children, and live with a kind of community support that wealthier neighborhoods often talk about but rarely achieve.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          From the western edge of Willard - Hay, you can see the tree
          canopy of Theodore Wirth Park — 750 acres of urban wilderness
          that starts just across the parkway. It is one of the most
          beautiful approaches to a park in Minneapolis. On a fall
          afternoon, the colors are extraordinary — the oaks and maples
          along the parkway turning gold and red while the steady blocks
          of houses behind you continue their quiet business of being a
          neighborhood. A man rakes leaves in his yard. Two kids ride
          bikes in circles on the sidewalk. A woman carries groceries
          from her car to her front door. The scene is unremarkable,
          which is precisely what makes it remarkable — because in a part
          of the city that has been marked by crisis for so long, the
          ordinary business of daily life is its own kind of
          accomplishment.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/willard-hay/hero.webp"
        alt="A residential street in Willard - Hay with Theodore Wirth Park trees visible in the background"
        caption="Willard - Hay — residential blocks between Penn Avenue and the park"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Willard - Hay, Minneapolis?">
        <Prose>
          <p>
            Willard - Hay is a residential neighborhood in North
            Minneapolis, bounded roughly by Plymouth Avenue to the south,
            Lowry Avenue to the north, Penn Avenue North to the east, and
            Theodore Wirth Parkway to the west. Home to approximately 3,600
            residents, it occupies the western tier of the Northside — a
            quieter, more residential area than the neighborhoods closer to
            Broadway Avenue and the commercial corridors.
          </p>
          <p>
            The neighborhood sits between{" "}
            <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
              Near North
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/hawthorne" className="text-[#2a9d8f] hover:underline">
              Hawthorne
            </Link>{" "}
            to the east and{" "}
            <Link href="/neighborhoods/bryn-mawr" className="text-[#2a9d8f] hover:underline">
              Bryn Mawr
            </Link>{" "}
            across the parkway to the west, with{" "}
            <Link href="/neighborhoods/harrison" className="text-[#2a9d8f] hover:underline">
              Harrison
            </Link>{" "}
            to the south and{" "}
            <Link href="/neighborhoods/mckinley" className="text-[#2a9d8f] hover:underline">
              McKinley
            </Link>{" "}
            to the north. Its position against Theodore Wirth Park gives
            Willard - Hay an asset that most North Minneapolis neighborhoods
            do not share — direct access to the largest park in the
            Minneapolis system.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Willard - Hay Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/willard-hay/neighborhood-sign.webp"
          alt="Willard - Hay neighborhood sign in Minneapolis"
          caption="The Willard - Hay neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Willard - Hay History & Origins">
        <Prose>
          <p>
            Willard - Hay developed in the early twentieth century as
            Minneapolis expanded westward toward the park. The
            neighborhood&apos;s two names reflect its origins as separate
            communities — Willard and Hay — that were eventually combined
            into a single recognized neighborhood. Early residents were
            predominantly Scandinavian and German immigrants, building
            modest homes on the grid streets between Penn Avenue and the
            park.
          </p>
          <p>
            The neighborhood&apos;s demographic transformation followed the
            broader pattern of North Minneapolis. As discriminatory housing
            practices and white flight reshaped the Northside in the
            mid-twentieth century, Willard - Hay&apos;s population became
            predominantly Black. Later immigration added Somali, Hmong,
            Latino, and other families to the mix.
          </p>
          <p>
            Disinvestment affected Willard - Hay as it did all of North
            Minneapolis, though the neighborhood&apos;s position against
            the park and its distance from the most acute commercial
            corridor challenges provided some buffer. The housing stock
            aged and some properties deteriorated, but many blocks
            maintained stable homeownership. The proximity to Theodore
            Wirth Park, while underutilized, remained a latent asset
            that distinguished Willard - Hay from neighborhoods without
            significant green space access.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Willard - Hay">
        <Prose>
          <p>
            Willard - Hay is quieter than many North Minneapolis
            neighborhoods. The blocks between Penn Avenue and the parkway
            are primarily residential — single-family homes on small to
            mid-sized lots, with front porches, detached garages, and the
            mature trees that are one of North Minneapolis&apos;s
            underappreciated features. The neighborhood does not have a
            bustling commercial life; Penn Avenue provides some services
            on its eastern edge, but most shopping and dining requires
            leaving the neighborhood.
          </p>
          <p>
            What Willard - Hay has instead is a residential stability
            that anchors daily life. Many blocks have long-term homeowners
            who have invested decades in their properties and their
            community. The Willard-Hay neighborhood organization has been
            active in advocating for the community&apos;s interests,
            and block clubs on many streets provide the ground-level
            organizing that holds neighborhoods together.
          </p>
          <p>
            Willard Park, near the center of the neighborhood, provides
            a recreation center and gathering space that is central to
            community life. Youth programming, sports leagues, and
            community events at the rec center create the intergenerational
            connections that make a neighborhood more than a collection of
            houses. In summer, the park is a hub — kids playing, families
            gathering, the organized and spontaneous mixing that defines
            neighborhood life at its best.
          </p>
          <p>
            The diversity of Willard - Hay is genuine if less dramatic
            than in some neighboring communities. The population is
            predominantly Black, with growing Somali, Latino, and other
            immigrant communities. The diversity adds cultural texture
            but also creates the same bridging challenges that all
            multicultural neighborhoods navigate.
          </p>
        </Prose>
        <Quote
          text="I can walk to the park in five minutes. My house cost less than a condo in Uptown. My neighbors know my kids by name. Tell me again why this is a bad neighborhood."
          cite="Willard - Hay homeowner"
        />

        <ImageSlot
          src="/images/neighborhoods/willard-hay/willard-park.webp"
          alt="Willard Park recreation center and green space with families"
          caption="Willard Park — the neighborhood's community anchor and gathering place"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Willard - Hay Food, Drink & Local Spots">
        <Prose>
          <p>
            Willard - Hay is primarily residential and does not have a
            significant food or dining scene within its boundaries. The
            neighborhood&apos;s commercial options are concentrated along
            Penn Avenue on the eastern edge and in nearby corridors.
            Residents rely on Broadway Avenue to the north and east, and
            on grocery stores and restaurants outside the immediate
            neighborhood.
          </p>
        </Prose>

        <ArticleSubsection title="What's Nearby">
          <PlaceCardComponent place={{ name: "Penn Avenue Corridor", tag: "Basic Services", price: "$", description: "Penn Avenue, forming Willard - Hay's eastern boundary, provides limited commercial services — small stores, takeout spots, and neighborhood services. The corridor has not achieved the commercial density of Broadway Avenue but serves basic needs." }} />
          <PlaceCardComponent place={{ name: "West Broadway", tag: "Nearby Corridor", price: "$–$$", description: "Broadway Avenue, a short drive or bike ride east and north, provides the closest concentration of restaurants and food businesses. Soul food, Somali restaurants, and community-oriented businesses serve the North Minneapolis community." }} />
          <PlaceCardComponent place={{ name: "Theodore Wirth Park", tag: "Recreation & Nature", price: "Free", description: "While not a food destination, Theodore Wirth Park provides picnic areas and seasonal concessions. The park's proximity makes it a natural extension of neighborhood life — a place for family gatherings that might include food brought from home or grilled on park facilities." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Willard - Hay">
        <Prose>
          <p>
            Park access is Willard - Hay&apos;s strongest suit. The
            combination of Willard Park&apos;s community facilities and
            Theodore Wirth Park&apos;s natural expanse gives residents
            recreational options that rival any neighborhood in the city.
          </p>
        </Prose>

        <ArticleSubsection title="Willard Park">
          <Prose>
            <p>
              Willard Park includes a recreation center, playing fields,
              basketball courts, a playground, and open green space. The
              rec center provides year-round programming for youth and
              adults, including sports leagues, after-school activities,
              and community events. The park is the social center of the
              neighborhood — the place where community happens most
              naturally.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Park, the largest park in the Minneapolis
              system at over 750 acres, borders Willard - Hay to the
              west. The park offers hiking and mountain biking trails, a
              golf course, Wirth Beach on Wirth Lake, cross-country ski
              trails, the Eloise Butler Wildflower Garden and Bird
              Sanctuary, and extensive natural areas. For Willard - Hay
              residents, this extraordinary resource is accessible by
              walking across the parkway.
            </p>
            <p>
              The relationship between North Minneapolis neighborhoods
              and Theodore Wirth Park has been improving through
              intentional work by the Park Board and community
              organizations. Better trail connections, programming
              designed for Northside residents, and efforts to make the
              park feel welcoming to all have begun to address a
              historical disconnect between the park and its closest
              neighbors.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Willard - Hay Schools">
        <Prose>
          <p>
            Willard - Hay is served by Minneapolis Public Schools, with
            nearby elementary options and access to North High School for
            grades 9–12. The schools face the challenges common to North
            Minneapolis education — the achievement gap, resource
            constraints, and the effects of concentrated poverty on
            educational outcomes.
          </p>
          <p>
            Many families use the district&apos;s open enrollment system to
            access magnet programs and schools in other parts of the city.
            Charter schools provide additional options. Community-based
            organizations and faith communities offer supplemental
            educational support, after-school programs, and mentoring.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Willard - Hay Real Estate & Housing">
        <Prose>
          <p>
            Willard - Hay&apos;s housing market is affordable by any
            Minneapolis measure, with median home sale prices ranging from
            roughly $175,000 to $250,000 in 2025. The housing stock is
            predominantly older frame houses and bungalows from the 1900s
            through 1940s. Conditions vary by property and by block, with
            well-maintained owner-occupied homes alongside properties that
            show the effects of age and limited investment.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($125,000–$185,000), you&apos;ll find
              smaller homes needing updating. The mid-range ($185,000–
              $260,000) gets you a well-maintained three-bedroom home or
              a recently rehabbed property. New construction and fully
              renovated homes can reach $270,000–$340,000. The
              combination of affordable housing and proximity to Theodore
              Wirth Park is genuinely unique — there is no comparable
              price-to-park-access ratio elsewhere in Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="Our house backs up to the parkway. We can hear birds in the morning. Our mortgage is less than rent in most of Minneapolis. You do the math."
          cite="Willard - Hay homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Willard - Hay">
        <Prose>
          <p>
            Willard - Hay is primarily car-dependent, with a Walk Score
            of 55 and a Bike Score of 74. The residential character and
            limited commercial options mean that most daily needs require
            leaving the neighborhood. Downtown Minneapolis is approximately
            twelve minutes by car.
          </p>
          <p>
            Metro Transit bus routes serve the area along Penn Avenue and
            Plymouth Avenue, providing connections to downtown and the
            broader transit network. The flat terrain and Theodore Wirth
            Parkway make cycling practical, and the park&apos;s trail
            system provides recreational riding options. The Luce Line
            Trail connects through the area to the western suburbs.
          </p>
          <p>
            Street parking is readily available on residential blocks.
            Highway access via I-94 and Highway 55 provides reasonable
            connectivity for car commuters.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Willard - Hay shares the tensions that affect all of North
            Minneapolis, experienced through the lens of a residential
            neighborhood that is close to extraordinary natural assets
            but far from the investments that would maximize their value
            to the community.
          </p>
        </Prose>

        <ArticleSubsection title="Park Equity and Access">
          <Prose>
            <p>
              The proximity to Theodore Wirth Park should be Willard -
              Hay&apos;s defining advantage, but the relationship between
              the park and the neighborhood has historically been
              underdeveloped. Better trail connections, more programming
              for Northside residents, and infrastructure improvements
              along the parkway are ongoing. The broader question — why
              the neighborhoods closest to the city&apos;s best park have
              received the city&apos;s least investment — is a question
              about equity that extends well beyond park policy.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Housing Investment">
          <Prose>
            <p>
              Willard - Hay&apos;s housing stock is aging, and the gap
              between well-maintained and deteriorated properties is
              visible. Community development organizations have produced
              some new affordable housing, but the scale of need exceeds
              the scale of investment. The challenge is familiar:
              attracting enough investment to stabilize and improve the
              housing stock without triggering price increases that push
              out the families who have maintained the neighborhood
              through its hardest years.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Corridor Development">
          <Prose>
            <p>
              Penn Avenue, Willard - Hay&apos;s eastern boundary, has been
              the focus of corridor planning and community visioning.
              The goal is a more vibrant commercial corridor that provides
              the goods, services, and gathering spaces that the
              neighborhood needs. Progress has been slow but incremental,
              and community engagement in the planning process has been
              strong. The question is whether the vision will be backed
              by the investment needed to make it real.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Willard - Hay FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
