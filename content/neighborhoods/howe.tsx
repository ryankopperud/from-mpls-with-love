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
    title: "Howe, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Howe, Minneapolis — homes, history, Minnehaha Creek, Lake Street, schools, restaurants, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Howe",
  deck: "A quiet residential neighborhood in the Longfellow area — where Minnehaha Creek runs through the middle, Lake Street provides the commercial energy, and the houses are affordable enough that people stay for decades.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Howe?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Howe" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Howe, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,200", label: "Residents (Niche / US Census)" },
      { value: "$300K–$450K", label: "Median home sale price range (2025 data)" },
      { value: "13 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.6 sq mi", label: "Neighborhood area" },
      { value: "1900s–40s", label: "Era most homes were built" },
      { value: "12–15 min", label: "Drive to downtown Minneapolis" },
      { value: "65", label: "Walk Score" },
      { value: "80", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Howe a good neighborhood in Minneapolis?",
      answer:
        "Yes. Howe is a solid, affordable, residential neighborhood in the Longfellow area of south Minneapolis. It offers Minnehaha Creek access, reasonable walkability to Lake Street's commercial corridor, and a stable community of homeowners and families. It's not flashy, but it's the kind of neighborhood that grows on people over time.",
    },
    {
      question: "Is Howe, Minneapolis safe?",
      answer:
        "Howe is generally safe, with crime rates near the city average. Property crime — vehicle break-ins and package theft — is the most common concern. The residential core of the neighborhood feels secure, though the edges near Lake Street and Hiawatha Avenue experience more activity. Safety varies block by block, as it does across south Minneapolis.",
    },
    {
      question: "What is Howe, Minneapolis known for?",
      answer:
        "Howe is known as a quiet part of the greater Longfellow community — a residential neighborhood where Minnehaha Creek provides a natural greenway, Lake Street provides commercial access, and the housing stock is affordable and well-maintained. It's not known for any single landmark, which is part of its character.",
    },
    {
      question: "How much do homes cost in Howe, Minneapolis?",
      answer:
        "Median home sale prices in Howe have ranged from roughly $300,000 to $450,000 depending on the data source and season. This places Howe near or slightly below the citywide median — affordable by Minneapolis standards, and significantly below the Southwest Minneapolis lake neighborhoods.",
    },
    {
      question: "Where exactly is Howe in Minneapolis?",
      answer:
        "Howe is in south Minneapolis, part of the greater Longfellow community area. It's bounded roughly by East 36th Street to the north, Hiawatha Avenue to the east, East 42nd Street to the south, and Minnehaha Avenue to the west. Minnehaha Creek runs through the neighborhood near its southern boundary.",
    },
    {
      question: "Is Howe part of Longfellow?",
      answer:
        "Yes. Howe is one of four neighborhoods in the greater Longfellow community area, along with Longfellow proper, Cooper, and Hiawatha. The Longfellow identity is strong in this part of Minneapolis, and many residents identify with both their specific neighborhood (Howe) and the broader Longfellow community.",
    },
    {
      question: "What schools serve Howe, Minneapolis?",
      answer:
        "Howe Elementary School (K–5) is the neighborhood school and serves as a community anchor. Middle and high school options include South Senior High School and other Minneapolis Public Schools destinations. The school pipeline is solid for the area.",
    },
    {
      question: "Does Minnehaha Creek run through Howe?",
      answer:
        "Yes. Minnehaha Creek flows through the southern portion of Howe, providing a natural greenway with walking and biking trails. The creek trail connects Howe to the broader Minnehaha Creek corridor running from the western lakes to Minnehaha Falls.",
    },
    {
      question: "Is Howe a good place for first-time homebuyers?",
      answer:
        "Howe is a strong option for first-time buyers. The housing stock is modestly priced, the lots are reasonable, and the neighborhood offers good park access, creek trails, and proximity to Lake Street's commercial life. The trade-off is less commercial walkability within the neighborhood itself and a safety profile that's more variable than the Southwest neighborhoods.",
    },
    {
      question: "How far is Howe from downtown Minneapolis?",
      answer:
        "Howe is approximately 12–15 minutes from downtown Minneapolis by car. Bus routes along Lake Street and Hiawatha Avenue provide transit connections, and the Blue Line light rail is accessible from the Hiawatha corridor. Biking to downtown is feasible via the Midtown Greenway or the Minnehaha Creek trail connections.",
    },
  ],
  nearby: [
    { name: "Longfellow", slug: "longfellow", description: "Lake Street commercial life and strong community identity" },
    { name: "Cooper", slug: "cooper", description: "Quiet residential in the Longfellow community" },
    { name: "Hiawatha", slug: "hiawatha", description: "Blue Line light rail and Lake Hiawatha" },
    { name: "Minnehaha", slug: "minnehaha", description: "Minnehaha Falls and the Mississippi River" },
    { name: "Standish", slug: "standish", description: "Diverse and affordable south Minneapolis residential" },
  ],
  closing: {
    title: "What Makes Howe Worth Knowing",
    paragraphs: [
      "Howe is the kind of neighborhood that doesn't pitch itself — it just exists, quietly, competently, and with a kind of settled assurance that comes from being a place where people have lived well for a hundred years without needing anyone else to notice. The creek runs through. The school is up the block. The houses have porches, and people sit on them. Lake Street is close enough for errands and restaurants, far enough for quiet.",
      "It's not the neighborhood that shows up in travel magazines or 'best of' lists. It's the neighborhood that shows up when a young couple sits down with a real estate agent and says, 'We want to buy a house in Minneapolis — a real house, with a yard — and we don't have $500,000.' Howe is the answer to that question, and it has been for a long time.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Minnehaha Creek doesn&apos;t announce itself in Howe — there&apos;s
          no sign, no grand entrance. You&apos;re walking south on a
          residential street, past bungalows and parked cars and someone&apos;s
          basketball hoop, and then the street drops slightly and there it
          is — the creek, moving through a corridor of cottonwoods and
          willows, the trail following the bank on both sides. A jogger
          passes. A woman on a bike tows a trailer with two kids in it. A
          dog is inspecting the water&apos;s edge with the seriousness of
          a civil engineer. Two blocks north, Lake Street is doing its
          thing — traffic, buses, taco shops, the occasional siren. But
          here, at the creek, it&apos;s just water and trees and the quiet
          that settles over a neighborhood that has been exactly this for
          a century.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/howe/hero.webp"
        alt="Minnehaha Creek flowing through the Howe neighborhood of Minneapolis"
        caption="Minnehaha Creek in Howe — a greenway through the residential blocks"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Howe, Minneapolis?">
        <Prose>
          <p>
            Howe is a residential neighborhood in south Minneapolis, part of
            the greater Longfellow community area. It&apos;s bounded roughly
            by East 36th Street to the north, Hiawatha Avenue (Highway 55)
            to the east, East 42nd Street to the south, and Minnehaha Avenue
            to the west. It covers about 0.6 square miles and is home to
            approximately 5,200 residents. Minnehaha Creek flows through the
            neighborhood near its southern boundary, providing a natural
            greenway that connects Howe to the broader creek trail system.
          </p>
          <p>
            Howe is one of four neighborhoods in the Longfellow community,
            along with{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>{" "}
            proper,{" "}
            <Link href="/neighborhoods/cooper" className="text-[#2a9d8f] hover:underline">
              Cooper
            </Link>
            , and{" "}
            <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
              Hiawatha
            </Link>
            . The Longfellow identity is strong here — many residents identify
            with the broader community as much as with Howe specifically. The
            neighborhood is named for Howe Elementary School, which has
            anchored the community since the early 20th century.
          </p>
          <p>
            What defines Howe is its combination of accessibility and
            affordability. Lake Street — one of Minneapolis&apos;s most
            important commercial corridors — runs along or near the
            neighborhood&apos;s northern edge, providing restaurants, shops,
            transit, and the particular energy that Lake Street brings. The
            Midtown Greenway, a bike and pedestrian trail built on a former
            rail corridor, is accessible from the northern portion of the
            neighborhood. And the housing stock — modest early-20th-century
            bungalows and Foursquares — remains priced below the citywide
            median, making Howe one of the neighborhoods where homeownership
            is still within reach for people with ordinary incomes.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Howe Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/howe/neighborhood-sign.webp"
          alt="Howe neighborhood sign in Minneapolis"
          caption="The Howe neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Howe History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part
            of the territory centered around the confluence at Bdote and the
            network of waterways, including Minnehaha Creek, that defined the
            region&apos;s geography. The Dakota people used the creek
            corridors for travel, fishing, and gathering for centuries before
            treaties and forced removal in the 1850s and 1860s reshaped the
            landscape.
          </p>
          <p>
            The neighborhood developed as Minneapolis expanded south and east
            from downtown in the late 19th and early 20th centuries. The
            streetcar lines along Lake Street and Minnehaha Avenue brought
            residential development to this area, and the blocks that would
            become Howe were built out primarily between the 1900s and the
            1940s. The housing stock reflects this era: Craftsman bungalows,
            Foursquares, and modest workers&apos; homes built for the
            tradespeople, factory workers, and young families of early-20th-century
            Minneapolis.
          </p>
          <p>
            Howe Elementary School was established in the early 20th century
            and gave the neighborhood its name and its social center. The
            greater Longfellow community — named for the poet Henry Wadsworth
            Longfellow, whose &quot;Song of Hiawatha&quot; made Minnehaha
            Falls famous — developed as a working-class residential area
            with strong neighborhood identity and community institutions.
          </p>
          <p>
            The Midtown Greenway, which opened in 2000 on a former Milwaukee
            Road rail corridor, brought new infrastructure to the area —
            a grade-separated bike and pedestrian trail that connects the
            Chain of Lakes to the Mississippi River. The Greenway has gradually
            reshaped the neighborhoods along its route, bringing new
            investment and new residents to the Longfellow area.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Howe">
        <Prose>
          <p>
            Living in Howe means living in the Longfellow community — a part
            of Minneapolis that has a strong identity distinct from the lake
            neighborhoods to the west and the downtown core to the north. The
            character here is working-class in origin and increasingly mixed
            in practice: longtime homeowners, young first-time buyers, renters
            in duplexes and small apartment buildings, and a growing
            population of immigrants and families of color. The demographic
            mix is less homogeneous than Southwest Minneapolis and more
            representative of the city as a whole.
          </p>
          <p>
            The blocks are quiet and residential. Houses sit on modest lots
            with alley garages and front porches. The tree canopy is good
            but not as thick as in the older, wealthier neighborhoods to the
            west. The feel is solidly middle-class — not affluent, not
            struggling, just steady. People mow their lawns, shovel their
            sidewalks, and know the names of the kids on their block.
          </p>
          <p>
            Lake Street, on or near the neighborhood&apos;s northern boundary,
            provides the commercial energy. The stretch of Lake Street through
            the Longfellow area has changed significantly in recent years —
            new restaurants, businesses, and cultural institutions have
            arrived alongside longtime establishments. The corridor is
            diverse and evolving, reflecting the changing demographics of the
            neighborhoods it serves.
          </p>
          <p>
            Minnehaha Creek, running through the southern portion of the
            neighborhood, provides the natural counterpoint — a green,
            quiet corridor that offers a break from the urban rhythm. The
            creek trail is well-used by Howe residents for walking, biking,
            and the kind of aimless outdoor wandering that makes a
            neighborhood feel livable in ways that commercial amenities
            alone can&apos;t replicate.
          </p>
        </Prose>
        <Quote
          text="We moved to Howe because we could afford a house with a yard and still bike to work downtown. Five years later, we&apos;re still here, and we&apos;re not going anywhere."
          cite="Howe homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Howe Food, Drink & Local Spots">
        <Prose>
          <p>
            Howe&apos;s dining scene is concentrated along Lake Street and
            Minnehaha Avenue — the commercial corridors at the neighborhood&apos;s
            edges. The interior is residential, but the edges have genuine
            character.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Lake Street Corridor", tag: "Diverse Commercial", description: "Lake Street through the Longfellow area offers a diverse mix of restaurants, cafés, and shops — taquerias, East African restaurants, breweries, and neighborhood bars. The corridor is evolving and increasingly interesting." }} />
          <PlaceCardComponent place={{ name: "Minnehaha Avenue", tag: "Neighborhood Commercial", description: "Minnehaha Avenue on the neighborhood's western edge hosts a scattering of small businesses, restaurants, and services. Less dense than Lake Street but with a more neighborhood-scaled feel." }} />
          <PlaceCardComponent place={{ name: "Bull's Horn", tag: "Bar & Restaurant", price: "$$", description: "In the Longfellow area. A neighborhood bar and restaurant with good food and a relaxed atmosphere — the kind of place where you go for a burger and stay for a second beer." }} />
          <PlaceCardComponent place={{ name: "Midtown Global Market", tag: "Food Hall", price: "$–$$", url: "https://midtownglobalmarket.org", description: "On Lake Street at the Midtown Exchange, a short distance west. A food hall with vendors representing cuisines from around the world — Somali, Mexican, Hmong, Vietnamese, and more. One of the most interesting eating experiences in Minneapolis." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Howe">
        <Prose>
          <p>
            Howe&apos;s outdoor assets center on the creek and the trail
            system that connects to it.
          </p>
        </Prose>
        <ArticleSubsection title="Minnehaha Creek Trail">
          <Prose>
            <p>
              Minnehaha Creek flows through Howe&apos;s southern section,
              providing a paved multi-use trail that connects west to the
              Chain of Lakes and east to Minnehaha Falls and the Mississippi
              River. The trail is Howe&apos;s primary outdoor amenity — a
              car-free greenway for walking, biking, and running that feels
              remarkably separated from the city around it.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway — a 5.5-mile bike and pedestrian trail
              built on a former rail corridor — runs near the neighborhood&apos;s
              northern edge. The Greenway provides a grade-separated,
              car-free route that connects the Chain of Lakes to the
              Mississippi River, passing through several south Minneapolis
              neighborhoods along the way. It&apos;s one of the best urban
              bike commute routes in the country and a genuine transportation
              asset for Howe residents.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Howe Park">
          <Prose>
            <p>
              Howe Park is the neighborhood&apos;s local green space — a
              well-maintained park with a playground, ball fields, and open
              green space. It&apos;s modest in scale but serves as a
              gathering place for the immediate community.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Howe Schools">
        <Prose>
          <p>
            Howe Elementary School serves kindergarten through fifth grade and
            is the neighborhood&apos;s primary community institution. The
            school is walkable from most addresses in the neighborhood and
            functions as a social anchor — the place where families connect
            and where the neighborhood&apos;s identity takes shape.
          </p>
          <p>
            Middle and high school options feed into the broader Minneapolis
            Public Schools system. South Senior High School is a common high
            school destination. Minneapolis&apos;s magnet school system
            provides additional options for families seeking alternatives.
          </p>
          <p>
            The school community in Howe reflects the neighborhood&apos;s
            demographic diversity — more varied than the Southwest
            Minneapolis school communities and more representative of the
            city as a whole.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Howe Real Estate & Housing">
        <Prose>
          <p>
            Howe is one of the more affordable neighborhoods in Minneapolis
            for homebuyers, with median sale prices ranging from roughly
            $300,000 to $450,000 — near or slightly below the citywide
            median. This affordability, combined with the creek access, the
            Greenway, and the Lake Street commercial corridor, makes Howe
            a strong value proposition for first-time buyers and young
            families.
          </p>
          <p>
            The housing stock is predominantly early-20th-century
            single-family homes — bungalows, Foursquares, and workers&apos;
            cottages. Duplexes and small multi-family buildings add density,
            particularly near the commercial corridors. Lots are modest by
            Southwest Minneapolis standards but adequate for the housing
            style. Most homes have the alley garages, front porches, and
            hardwood floors that characterize south Minneapolis residential
            architecture.
          </p>
          <p>
            Homes sell quickly — about 13 days on average — reflecting strong
            demand at the price point. The market is competitive for
            well-maintained homes, and multiple offers are common in the
            sub-$400,000 range.
          </p>
        </Prose>
        <Quote text="Howe is the neighborhood where people end up after they get priced out of the lake areas — and then they realize they like it better here anyway." cite="Longfellow-area real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Howe">
        <Prose>
          <p>
            Howe earns a Walk Score of 65 — reasonably walkable, with Lake
            Street providing commercial options within walking distance from
            the northern portion of the neighborhood. The Bike Score of 80
            reflects the Midtown Greenway, the Minnehaha Creek Trail, and
            the broader south Minneapolis cycling network.
          </p>
          <p>
            Bus service along Lake Street is among the most frequent in
            Minneapolis, connecting to Uptown, the Midtown Exchange, and
            points east and west. The Blue Line light rail is accessible
            from the Hiawatha corridor, a short distance east. By car,
            downtown is 12–15 minutes, and MSP airport is similarly
            accessible. The combination of bus, light rail, bike, and car
            options makes Howe more multi-modal than many south Minneapolis
            neighborhoods.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Howe is part of the broader Longfellow area, which has
            experienced significant change since 2020 — and the changes
            are worth naming honestly.
          </p>
        </Prose>
        <ArticleSubsection title="Post-2020 Recovery">
          <Prose>
            <p>
              The Lake Street corridor was significantly affected by the civil
              unrest following the murder of George Floyd in 2020. Businesses
              were damaged, some permanently. The commercial landscape has
              been rebuilding since — new businesses opening, old ones
              returning, the corridor gradually re-establishing itself. The
              recovery is real but incomplete, and the Lake Street of 2026
              is different from the Lake Street of 2019 in ways that are
              both painful and promising.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Gentrification Dynamics">
          <Prose>
            <p>
              Howe&apos;s affordability and Greenway access have attracted
              new buyers with higher incomes, which is gradually shifting
              the neighborhood&apos;s demographic and economic profile. Home
              prices are rising. Renovations are upgrading modest homes into
              something more expensive. The working-class character that
              defined the neighborhood for decades is evolving — whether
              that&apos;s positive change or displacement depends on who
              you ask and where they sit in the economic hierarchy.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Infrastructure Investment">
          <Prose>
            <p>
              The Midtown Greenway, the Blue Line light rail, and the
              ongoing investment in the Lake Street corridor represent
              significant infrastructure assets that benefit Howe. But
              infrastructure investment also brings development pressure,
              rising property values, and the displacement dynamics that
              follow. The same investments that make the neighborhood more
              attractive are the ones that make it more expensive.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Howe FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
