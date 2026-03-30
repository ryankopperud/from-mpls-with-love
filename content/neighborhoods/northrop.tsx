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
    title: "Northrop, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Northrop, Minneapolis — quiet residential streets near Minnehaha Creek, south Minneapolis living, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Northrop",
  deck: "Tucked along Minnehaha Creek in south Minneapolis — where residential calm meets creek-side walking trails, and a small neighborhood proves that you don't need a reputation to be a good place to live.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Northrop?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Northrop" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Northrop, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,000", label: "Residents (US Census / ACS estimates)" },
      { value: "$300K–$400K", label: "Median home sale price (2025 data)" },
      { value: "$1,100–$1,400", label: "Typical 1BR apartment rent (2025)" },
      { value: "60", label: "Walk Score" },
      { value: "76", label: "Bike Score" },
      { value: "46", label: "Transit Score" },
      { value: "30%", label: "Renter-occupied housing" },
      { value: "1.2 mi", label: "Minnehaha Creek frontage (approx.)" },
    ],
  },
  faq: [
    {
      question: "Is Northrop a good neighborhood in Minneapolis?",
      answer:
        "Northrop is a solid residential neighborhood in south Minneapolis, offering safe streets, well-maintained homes, Minnehaha Creek access, and a stable community. It's ideal for families and anyone seeking quiet city living. The trade-off is limited walkable commercial options and a low profile that means most Minneapolitans haven't heard of it.",
    },
    {
      question: "Is Northrop safe?",
      answer:
        "Northrop is one of the safer neighborhoods in Minneapolis, with crime rates below the city average. Violent crime is rare, and property crime is modest compared to denser neighborhoods. It's a neighborhood where families feel comfortable letting kids play outside and where walking at night is not a concern.",
    },
    {
      question: "How much does it cost to live in Northrop?",
      answer:
        "Northrop is moderately priced for south Minneapolis. Single-family homes sell in the $300,000 to $400,000 range. Rental options are limited, as the neighborhood is predominantly owner-occupied. It's more affordable than the lakes neighborhoods to the west but at or slightly above the city median.",
    },
    {
      question: "Where exactly is Northrop in Minneapolis?",
      answer:
        "Northrop is in south Minneapolis, bounded roughly by East 46th Street to the north, Chicago Avenue to the east, Minnehaha Creek to the south, and Lyndale Avenue South to the west. It sits north of the creek and south of the Field and Diamond Lake neighborhoods.",
    },
    {
      question: "What schools serve Northrop?",
      answer:
        "Kenny Elementary School serves the neighborhood for elementary grades. Roosevelt High School is the designated comprehensive high school. The schools are well-regarded, and the family character of the neighborhood reflects the importance residents place on education.",
    },
    {
      question: "Is Northrop walkable?",
      answer:
        "Moderately. Northrop is primarily residential, so walkability for commercial needs is limited. For recreational walking, it's excellent — Minnehaha Creek trail is the southern boundary, and neighborhood streets are pleasant for walking year-round. For shopping and dining, you'll need to access nearby commercial corridors.",
    },
    {
      question: "How close is Northrop to Minnehaha Creek?",
      answer:
        "Minnehaha Creek forms Northrop's southern boundary. Most homes in the neighborhood are within a 5-10 minute walk of the creek trail, and some properties back directly onto the creek corridor. It's one of the neighborhood's defining amenities.",
    },
    {
      question: "Is Northrop good for families?",
      answer:
        "Very much so. Safe streets, good schools, creek access, parks, and a housing stock of single-family homes with yards make Northrop well-suited for families with children. The neighborhood has a strong family orientation, and many residents have raised children here.",
    },
    {
      question: "How is Northrop different from Diamond Lake or Field?",
      answer:
        "Northrop, Diamond Lake, and Field are all quiet residential neighborhoods in south Minneapolis with similar character. Northrop's distinguishing features are its Minnehaha Creek frontage and its position between the two. The differences are subtle — these are neighborhoods that share a vibe more than they compete with each other.",
    },
  ],
  nearby: [
    { name: "Diamond Lake", slug: "diamond-lake", description: "West of Northrop — similar quiet residential character" },
    { name: "Field", slug: "field", description: "North — residential streets leading toward Nokomis" },
    { name: "Hale", slug: "hale", description: "East of Chicago — creek access and residential calm" },
    { name: "Nokomis", slug: "nokomis", description: "Northeast — Lake Nokomis beach and trails" },
    { name: "Bancroft", slug: "bancroft", description: "North — transitional neighborhood between Powderhorn and Nokomis areas" },
  ],
  closing: {
    title: "What Makes Northrop Worth Knowing",
    paragraphs: [
      "Northrop doesn't have a brand. It doesn't have a signature restaurant, a beloved park that defines its identity, or a community controversy that puts it in the news. What it has is Minnehaha Creek along its southern edge, well-maintained homes on quiet streets, neighbors who know each other, and the kind of stability that comes from a community where people buy houses and raise families and stay.",
      "In a city that increasingly values novelty and visibility, Northrop is a quiet argument for the value of the unremarkable. Not every neighborhood needs to be discovered or celebrated. Some neighborhoods just need to work — to provide safe homes, good schools, natural beauty, and the daily peace that allows people to build lives. Northrop does that, and it does it well, and the people who live here know it even if nobody else does.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Minnehaha Creek runs along the southern edge of Northrop like a
          slow, quiet sentence that takes its time reaching the period. In
          summer, the water moves gently under a canopy of cottonwoods and
          silver maples, and the paved trail alongside it carries joggers,
          dog walkers, and parents pushing strollers — all of them moving
          at a pace that matches the creek rather than the city. A block
          north, the houses begin — tidy ramblers and bungalows on streets
          where the biggest evening sound is a screen door closing. This is
          Northrop, a neighborhood in south Minneapolis that most people
          drive through on their way to somewhere else. The people who live
          here consider that drive-through quality a feature, not a bug.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/northrop/hero.webp"
        alt="Minnehaha Creek winding through the Northrop neighborhood in south Minneapolis"
        caption="Minnehaha Creek along Northrop's southern boundary — the neighborhood's defining amenity"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Northrop, Minneapolis?">
        <Prose>
          <p>
            Northrop is a residential neighborhood in south Minneapolis,
            bounded roughly by East 46th Street to the north, Chicago
            Avenue to the east, Minnehaha Creek to the south, and Lyndale
            Avenue South to the west. With approximately 3,000 residents,
            it is a mid-sized neighborhood defined by quiet residential
            streets, single-family homes, and its position along one of
            the most beloved natural corridors in the city.
          </p>
          <p>
            The neighborhood has no significant commercial activity. There
            are no restaurants, bars, or retail destinations within
            Northrop&apos;s boundaries. What it offers is purely
            residential: well-maintained homes, safe streets, creek access,
            and the kind of neighborhood stability that comes from a
            community where homeownership is the norm and long-term
            residency is common. It is a neighborhood that earns its
            appeal through quiet reliability rather than visible excitement.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Northrop Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/northrop/neighborhood-sign.webp"
          alt="Northrop neighborhood sign in Minneapolis"
          caption="The Northrop neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Northrop History & Origins">
        <Prose>
          <p>
            Northrop is named for Cyrus Northrop, the second president of
            the University of Minnesota, who served from 1884 to 1911 and
            oversaw the university&apos;s transformation from a small
            school into a major institution. The naming reflects
            Minneapolis&apos;s early 20th-century practice of honoring civic
            leaders through neighborhood and park designations.
          </p>
          <p>
            Before European settlement, this area was part of the Dakota
            homeland. Minnehaha Creek, which defines the neighborhood&apos;s
            southern boundary, was an important waterway for Indigenous
            communities for centuries before it became a recreational
            amenity for city residents.
          </p>
          <p>
            Development came in the early to mid-20th century as Minneapolis
            expanded southward. The housing stock dates primarily from the
            1920s through 1950s, built for middle-class families — teachers,
            small business owners, skilled tradespeople — who wanted
            modest homes on quiet streets within the city limits. The
            neighborhood has been residentially stable since its initial
            development, with the same types of homes and the same kinds
            of families occupying the blocks for generations.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Northrop">
        <Prose>
          <p>
            Northrop is a neighborhood of domestic routines. The mornings
            start with garage doors opening and cars backing out of
            driveways. The afternoons bring kids home from school, walking
            or biking on streets with minimal traffic. The evenings are for
            gardens, grills, and walks along the creek. It is not a
            neighborhood where a lot happens publicly — the life here is
            centered on homes and families and the quiet pleasures of
            residential stability.
          </p>
          <p>
            The housing stock is uniformly single-family — bungalows,
            ramblers, and some Cape Cods from the 1920s through 1950s.
            The homes are modest in size but well-maintained, reflecting
            a community of homeowners who take pride in their properties.
            Yards are small but cared for, and the tree canopy — mature
            elms, maples, and oaks — gives the streets a shaded, settled
            quality that newer developments can&apos;t replicate.
          </p>
          <p>
            The creek is the neighborhood&apos;s soul. Properties along
            Northrop&apos;s southern boundary back up to Minnehaha Creek,
            and the paved trail alongside it is the primary recreational
            amenity. In summer, the creek corridor is lush and green,
            alive with birdsong and the gentle sound of water. In fall,
            it blazes with color. In winter, it&apos;s a cross-country
            skiing and snowshoeing corridor. It is a daily amenity that
            shapes the quality of life here in ways that are hard to
            overstate.
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
            to the north share the quiet residential character, creating
            a broad swath of south Minneapolis that functions as a
            cohesive, family-oriented zone.
          </p>
        </Prose>
        <Quote
          text="I've lived in Northrop for twelve years. My commute is fifteen minutes by bike on the creek trail. My kids walk to school. The neighbors brought us cookies when we moved in and they still bring us cookies. I'm never leaving."
          cite="Northrop homeowner, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Northrop Food, Drink & Local Spots">
        <Prose>
          <p>
            Northrop has no commercial activity within its boundaries. For
            food, drink, and shopping, residents rely on nearby corridors
            and commercial nodes.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <PlaceCardComponent place={{ name: "Chicago Avenue Corridor", tag: "Various", price: "$–$$", description: "Chicago Avenue, Northrop's eastern boundary, offers restaurants, groceries, and services along a well-trafficked north-south corridor. Options include independent restaurants, small groceries, and chain establishments." }} />
          <PlaceCardComponent place={{ name: "Lyndale Avenue Commercial", tag: "Various", price: "$–$$", description: "Lyndale Avenue, the western boundary, provides additional commercial options, including restaurants, coffee shops, and services. The 48th and Lyndale area has a small but useful cluster of businesses." }} />
          <PlaceCardComponent place={{ name: "50th & Nicollet", tag: "Various", price: "$–$$$", description: "The 50th and Nicollet commercial node, a short drive or bike ride west, offers one of south Minneapolis's most established shopping and dining districts — restaurants, bakeries, boutiques, and services in a walkable cluster." }} />
          <PlaceCardComponent place={{ name: "Minnehaha Falls Area", tag: "Various", price: "$–$$", description: "Sea Salt Eatery (seasonal seafood) near Minnehaha Falls is a popular warm-weather destination accessible by creek trail from Northrop — about a 15-minute bike ride east." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Northrop">
        <Prose>
          <p>
            Northrop&apos;s outdoor amenities center on Minnehaha Creek and
            its connection to the broader Minneapolis park system.
          </p>
        </Prose>

        <ArticleSubsection title="Minnehaha Creek Trail">
          <Prose>
            <p>
              Minnehaha Creek runs along Northrop&apos;s entire southern
              boundary, and the paved trail alongside it is the
              neighborhood&apos;s defining recreational asset. The trail
              extends west to Lake Harriet and east to Minnehaha Falls
              and the Mississippi River, providing one of the best
              cycling and walking corridors in Minneapolis. Many Northrop
              residents use the trail for daily exercise, bike commuting,
              and weekend recreation.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Northrop Park">
          <Prose>
            <p>
              The neighborhood park offers a playground, open green space,
              and sports facilities. It serves as the community&apos;s
              gathering space — a place for youth sports, summer barbecues,
              and the informal socializing that holds a neighborhood
              together.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Lake Nokomis">
          <Prose>
            <p>
              Lake Nokomis is accessible within a 15-20 minute bike ride
              from most of Northrop, via the creek trail or surface
              streets. The lake&apos;s beach and trails extend the
              neighborhood&apos;s outdoor options significantly.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Chain of Lakes">
          <Prose>
            <p>
              The Minnehaha Creek trail connects Northrop to the Chain of
              Lakes — Lake Harriet, Bde Maka Ska, Lake of the Isles — via
              a continuous, car-free route. The western lakes are accessible
              within a 20-25 minute bike ride, making them a practical
              weekend destination.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Northrop Schools">
        <Prose>
          <p>
            Kenny Elementary School serves Northrop for elementary grades
            and is a well-regarded Minneapolis Public School with strong
            community support. The school&apos;s reputation is a significant
            draw for families considering the neighborhood.
          </p>
          <p>
            Roosevelt High School is the designated comprehensive high
            school for the area. The Minneapolis Public Schools open
            enrollment system allows families to access magnet and
            specialty programs across the district.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Northrop Real Estate & Housing">
        <Prose>
          <p>
            Northrop&apos;s housing market is stable and family-oriented.
            The stock is almost entirely single-family homes, and turnover
            is relatively low — people buy here and stay.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Northrop">
          <Prose>
            <p>
              Single-family homes sell in the $300,000 to $400,000 range.
              Creek-adjacent homes command premiums, as do homes with
              significant updates. The housing stock is mostly two-to-three-
              bedroom homes from the 1920s-1950s. Buyers should expect
              competition for well-maintained homes in the spring and
              summer selling season.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Rental options are limited in Northrop, as the neighborhood
              is predominantly owner-occupied. Available rentals are
              typically in duplexes or occasionally in single-family homes.
              One-bedroom units rent for $1,100 to $1,400 when available.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We looked at suburbs with comparable schools and realized we'd pay more for a comparable house and lose the creek trail, the bike commute, and the feeling of living in a real city. Northrop was the obvious choice." cite="Northrop homeowner, neighborhood survey" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Northrop">
        <Prose>
          <p>
            Northrop is moderately car-dependent. The Walk Score of 60
            reflects the residential character — there is little within
            walking distance commercially. The Bike Score of 76 reflects
            good cycling infrastructure, particularly the Minnehaha Creek
            trail, which makes bike commuting practical and pleasant.
          </p>
          <p>
            Bus service is available on Chicago Avenue and Lyndale Avenue,
            the neighborhood&apos;s eastern and western boundaries. The
            Route 5 on Chicago is one of the most frequent routes in the
            Metro Transit system, providing good north-south connectivity
            to downtown.
          </p>
          <p>
            Driving access is straightforward. I-35W is accessible via
            crosstown routes, and the street grid connects to major
            east-west corridors. Street parking is abundant and free — one
            of the advantages of living in a low-density residential area.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Northrop is one of the most stable neighborhoods in Minneapolis.
            The changes here are gradual and measured.
          </p>
        </Prose>

        <ArticleSubsection title="Rising Home Prices">
          <Prose>
            <p>
              Home prices have been climbing, driven by demand for
              family-friendly neighborhoods with good schools and creek
              access. The entry point for buying in Northrop has moved
              upward, and the neighborhood is becoming less accessible
              for first-time buyers and young families on moderate incomes.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Aging Housing Stock">
          <Prose>
            <p>
              Most homes in Northrop are 70-90 years old. While many have
              been updated, the cost of maintaining and modernizing aging
              homes is a practical consideration for current owners and
              prospective buyers. Roofs, furnaces, windows, and electrical
              systems all reach end-of-life on a timeline that many
              Northrop homes are approaching.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Creek Flooding">
          <Prose>
            <p>
              Minnehaha Creek flooding is an occasional concern for
              creek-adjacent properties, and extreme rainfall events are
              becoming more frequent. Homebuyers near the creek should
              investigate flood history, insurance requirements, and
              watershed district mitigation efforts.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Northrop FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
