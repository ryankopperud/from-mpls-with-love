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
    title: "Hiawatha, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Hiawatha, Minneapolis — homes, history, Blue Line light rail, Lake Hiawatha, schools, restaurants, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Hiawatha",
  deck: "A diverse, affordable neighborhood along the Blue Line corridor — where light rail access, Lake Hiawatha, and some of the most accessible housing in Minneapolis create a combination that's hard to find anywhere else in the city.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Hiawatha?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Hiawatha" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Hiawatha, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,800", label: "Residents (Niche / US Census)" },
      { value: "$250K–$400K", label: "Median home sale price range (2025 data)" },
      { value: "14 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.7 sq mi", label: "Neighborhood area" },
      { value: "1910s–50s", label: "Era most homes were built" },
      { value: "12–15 min", label: "Drive to downtown Minneapolis" },
      { value: "55", label: "Walk Score" },
      { value: "72", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Hiawatha a good neighborhood in Minneapolis?",
      answer:
        "Hiawatha is a solid, affordable neighborhood with two significant assets: Blue Line light rail access and Lake Hiawatha. The neighborhood is diverse, the housing is accessible, and the transit connectivity is better than in most of south Minneapolis. The trade-offs include highway noise from Hiawatha Avenue, a less walkable commercial landscape, and a safety profile that's more variable than the quieter neighborhoods to the west.",
    },
    {
      question: "Is Hiawatha, Minneapolis safe?",
      answer:
        "Hiawatha's safety profile is mixed. Property crime is moderate, and the corridor along Hiawatha Avenue experiences more incidents than the residential interior. Violent crime rates are below the city average in most of the neighborhood but above those of the Southwest Minneapolis neighborhoods. Safety varies by block and time of day.",
    },
    {
      question: "What is Hiawatha, Minneapolis known for?",
      answer:
        "Hiawatha is known for the Blue Line light rail corridor along Hiawatha Avenue, Lake Hiawatha (a small but usable lake with a beach and trails), its affordability, and its diversity. The neighborhood is one of the more accessible entry points into Minneapolis homeownership.",
    },
    {
      question: "How much do homes cost in Hiawatha, Minneapolis?",
      answer:
        "Median home sale prices in Hiawatha have ranged from roughly $250,000 to $400,000 depending on the data source and season — significantly below the citywide median and among the most affordable in Minneapolis. Smaller homes and those needing updates can be found under $225,000; well-maintained larger homes may push above $425,000.",
    },
    {
      question: "Where exactly is Hiawatha in Minneapolis?",
      answer:
        "Hiawatha is in south Minneapolis, part of the greater Longfellow community area. It's bounded roughly by East 36th Street to the north, Hiawatha Avenue (Highway 55) to the east, East 46th Street to the south, and Cedar Avenue to the west. Lake Hiawatha sits near the neighborhood's southern edge.",
    },
    {
      question: "What is the Blue Line light rail?",
      answer:
        "The Blue Line (METRO) is a light rail line running along Hiawatha Avenue that connects downtown Minneapolis to MSP International Airport and the Mall of America in Bloomington. Stations near the Hiawatha neighborhood include 38th Street and 46th Street. The Blue Line provides fast, direct transit access that most south Minneapolis neighborhoods lack.",
    },
    {
      question: "What schools serve Hiawatha, Minneapolis?",
      answer:
        "Hiawatha Community School (K–5) is the neighborhood elementary school. Middle and high school options include various Minneapolis Public Schools destinations. The schools reflect the neighborhood's diversity — more varied than the Southwest Minneapolis schools in both demographics and programming.",
    },
    {
      question: "Can you swim in Lake Hiawatha?",
      answer:
        "Lake Hiawatha has a public beach managed by the Minneapolis Park Board, and swimming is permitted during the summer season when lifeguards are on duty. The lake has faced water quality issues over the years — including pollution and trash accumulation from stormwater runoff — which have been a source of community concern and activism. Swimming conditions vary, and checking current advisories is recommended.",
    },
    {
      question: "Is Hiawatha diverse?",
      answer:
        "Yes. Hiawatha is one of the most diverse neighborhoods in Minneapolis — racially, ethnically, and economically. The neighborhood includes significant Somali, Latino, Native American, East African, and white populations. The diversity is genuine and visible in the neighborhood's schools, businesses, and public spaces.",
    },
    {
      question: "Is Hiawatha a good investment?",
      answer:
        "Hiawatha has several characteristics that suggest long-term appreciation potential: Blue Line access, relative affordability, Lake Hiawatha, and increasing investment in the corridor. However, the neighborhood also faces challenges — highway noise, variable safety, environmental concerns at the lake — that moderate the outlook. As with any neighborhood, the investment calculus depends on the specific property and the buyer's timeline.",
    },
  ],
  nearby: [
    { name: "Howe", slug: "howe", description: "Quiet Longfellow residential with Minnehaha Creek" },
    { name: "Minnehaha", slug: "minnehaha", description: "Minnehaha Falls and the Mississippi River" },
    { name: "Longfellow", slug: "longfellow", description: "Lake Street commercial life and community identity" },
    { name: "Standish", slug: "standish", description: "Diverse and affordable south Minneapolis" },
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis and a strong neighborhood identity" },
    { name: "Ericsson", slug: "ericsson", description: "Quiet residential near Nokomis" },
  ],
  closing: {
    title: "What Makes Hiawatha Worth Knowing",
    paragraphs: [
      "Hiawatha is the kind of neighborhood that doesn't show well on first impression. The highway is loud. The commercial landscape is scattered. The lake has environmental issues. The blocks near the transit stations have the kind of edge that real estate agents describe as 'character.' None of this is the whole story.",
      "The whole story includes the light rail that gets you to downtown in twelve minutes and to the airport in eight. The lake that, despite its problems, still has a beach and a trail and a community that shows up to use them. The housing stock that lets a family buy a house — a real house, with a yard — for a price that most of Minneapolis can no longer offer. The diversity that makes the neighborhood look like the world, not like a catalog. Hiawatha isn't polished. But it's real, and for the people who live here, that matters more.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          The Blue Line pulls into the 46th Street station, and the doors
          open to a view that summarizes Hiawatha in a single frame:
          Hiawatha Avenue humming with traffic, a strip mall with a Somali
          restaurant and a tax-prep office, the backs of modest bungalows
          visible beyond the parking lot, and somewhere behind all of it,
          the trees around Lake Hiawatha catching the late-afternoon light.
          A woman with a stroller steps off the train. A man in scrubs
          is heading to the platform. A kid on a bike is weaving through
          the parking lot with the confidence of someone who does this
          every day. This is Hiawatha — not postcard Minneapolis, not
          brochure Minneapolis, but the Minneapolis where ordinary people
          live ordinary lives and take the train to work and walk to a lake
          that has problems and a neighborhood that has potential and a
          house they can actually afford.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/hiawatha/hero.webp"
        alt="Blue Line light rail train at a station in the Hiawatha neighborhood of Minneapolis"
        caption="The Blue Line through Hiawatha — transit access that defines the neighborhood"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Hiawatha, Minneapolis?">
        <Prose>
          <p>
            Hiawatha is a residential neighborhood in south Minneapolis, part
            of the greater Longfellow community area. It&apos;s bounded roughly
            by East 36th Street to the north, Hiawatha Avenue (Highway 55) to
            the east, East 46th Street to the south, and Cedar Avenue to the
            west. It covers approximately 0.7 square miles and is home to
            roughly 5,800 residents. Lake Hiawatha sits near the neighborhood&apos;s
            southern edge, and the Blue Line light rail runs along Hiawatha
            Avenue on the eastern boundary.
          </p>
          <p>
            The neighborhood shares its name with Hiawatha Avenue — the
            highway-grade arterial that carries both car traffic and light
            rail through south Minneapolis. The name comes from Longfellow&apos;s
            poem &quot;The Song of Hiawatha,&quot; though the poem&apos;s
            relationship to this specific geography is more nominal than
            historical. What matters more than the name is the corridor:
            Hiawatha Avenue and the Blue Line define the neighborhood&apos;s
            eastern edge and provide the transit connectivity that sets this
            neighborhood apart from much of south Minneapolis.
          </p>
          <p>
            Hiawatha is one of the most diverse neighborhoods in Minneapolis
            — a genuine mix of races, ethnicities, incomes, and household
            types. Somali, Latino, Native American, East African, and white
            residents share the blocks, and the diversity is visible in the
            schools, the businesses, and the daily life of the neighborhood.
            It&apos;s also one of the most affordable — housing prices here
            are significantly below the citywide median, making homeownership
            possible for people who would be priced out of most other
            Minneapolis neighborhoods.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Hiawatha Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/hiawatha/neighborhood-sign.webp"
          alt="Hiawatha neighborhood sign in Minneapolis"
          caption="The Hiawatha neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Hiawatha History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland. The
            area around Lake Hiawatha — and the broader network of lakes,
            creeks, and wetlands in this part of what is now south Minneapolis
            — was part of the territory the Dakota people inhabited for
            centuries. The forced removal of the Dakota in the 1850s and
            1860s opened the land to European settlement and the agricultural
            and residential development that followed.
          </p>
          <p>
            The Hiawatha neighborhood developed in the early-to-mid 20th
            century as Minneapolis expanded southeast from downtown. The
            area was platted and built out primarily between the 1910s and
            the 1950s, with a housing stock that reflects the working- and
            middle-class families it was built for: bungalows, Cape Cods,
            Foursquares, and ramblers on modest lots. The neighborhood was
            more industrial and more working-class than the lake neighborhoods
            to the west — a character that shaped its development trajectory
            and persists in the housing stock and price points today.
          </p>
          <p>
            Lake Hiawatha was originally part of the Minnehaha Creek system
            — the creek flows through the lake on its way to Minnehaha Falls
            and the Mississippi River. The lake was incorporated into the
            Minneapolis park system in the early 20th century, and a golf
            course was built adjacent to it. In later decades, the lake
            became a recipient of stormwater runoff from a wide drainage
            area, leading to water quality issues and trash accumulation
            that have been a source of community concern and environmental
            activism.
          </p>
          <p>
            The opening of the Blue Line light rail in 2004 was the most
            significant change in the neighborhood&apos;s modern history.
            The rail line runs along Hiawatha Avenue and provides direct
            service to downtown Minneapolis, MSP International Airport, and
            the Mall of America. The Blue Line has reshaped development
            patterns along the corridor, brought new investment, and improved
            transit access — while also concentrating some of the challenges
            that come with major transit infrastructure in a residential
            setting.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Hiawatha">
        <Prose>
          <p>
            Living in Hiawatha means living in a neighborhood that doesn&apos;t
            pretend to be something it&apos;s not. The streets are residential
            and modest. The houses are small to mid-sized, built for ordinary
            budgets, and maintained with the kind of practical care that
            comes from homeowners who do their own work. The commercial
            landscape is scattered — a gas station here, a restaurant there,
            a small strip mall near the light rail station — rather than
            concentrated in the kind of walkable commercial node that defines
            wealthier neighborhoods.
          </p>
          <p>
            The diversity is the neighborhood&apos;s most distinctive feature.
            Walk through Hiawatha on a Saturday morning and you&apos;ll hear
            Somali, Spanish, and English. You&apos;ll pass a halal grocery,
            a taqueria, and a hardware store. You&apos;ll see hijabs and
            baseball caps and kids on bikes speaking three different languages.
            This is not curated diversity — it&apos;s the organic result of
            affordable housing in a transit-accessible location attracting
            people from a wide range of backgrounds. It looks like what a
            city is supposed to look like.
          </p>
          <p>
            The Blue Line is a daily utility for many residents — a way to
            get to work downtown, to the airport, to the Mall of America
            without a car. The transit access is a genuine quality-of-life
            advantage that most south Minneapolis neighborhoods can&apos;t
            match. But Hiawatha Avenue itself — the highway that carries the
            rail line — is also a liability: loud, fast, and hostile to
            pedestrians. The blocks closest to the highway hear it
            constantly. The blocks further west, toward Cedar Avenue, are
            quieter and more insulated.
          </p>
          <p>
            Lake Hiawatha provides the natural amenity — a small lake with
            a beach, a trail, and adjacent parkland. The lake has been the
            subject of environmental activism due to water quality concerns
            and trash accumulation from stormwater systems. Community
            volunteers have organized regular cleanup efforts, and the city
            and park board have invested in improvements. The lake is a
            real asset — but an imperfect one, and the community&apos;s
            relationship with it includes both enjoyment and advocacy.
          </p>
        </Prose>
        <Quote
          text="People look at Hiawatha and see the highway and the strip malls. I see a neighborhood where I can own a house, take the train to work, and my kids go to school with kids from every background imaginable. That&apos;s worth more than a lake view."
          cite="Hiawatha homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Hiawatha Food, Drink & Local Spots">
        <Prose>
          <p>
            Hiawatha&apos;s dining scene is unpretentious and diverse —
            reflecting the neighborhood&apos;s demographics rather than any
            foodie aspiration.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Hiawatha Avenue Restaurants", tag: "Diverse Dining", price: "$–$$", description: "The Hiawatha Avenue corridor hosts a range of affordable, authentic restaurants — Somali, East African, Mexican, and American. These are neighborhood spots, not destination restaurants, and they serve food that reflects the people who live here." }} />
          <PlaceCardComponent place={{ name: "Cedar Avenue Corridor", tag: "Diverse Commercial", description: "Cedar Avenue on the neighborhood's western edge has ethnic groceries, restaurants, and services that serve the diverse community. The corridor is more interesting and more varied than most visitors expect." }} />
          <PlaceCardComponent place={{ name: "Lake Street (Longfellow)", tag: "Commercial Corridor", description: "A short distance north, Lake Street through the Longfellow area offers additional dining, shopping, and services — including the Midtown Global Market, one of the most diverse food halls in the Twin Cities." }} />
          <PlaceCardComponent place={{ name: "Neighborhood Markets", tag: "Grocery & Specialty", price: "$", description: "Small Somali, East African, and Latino grocery stores provide specialty ingredients and prepared foods. Cub Foods on Hiawatha is the full-service grocery option." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Hiawatha">
        <Prose>
          <p>
            Hiawatha&apos;s outdoor assets center on the lake and the trail
            connections that link to it.
          </p>
        </Prose>
        <ArticleSubsection title="Lake Hiawatha">
          <Prose>
            <p>
              Lake Hiawatha is a small urban lake — roughly 53 acres — with
              a public beach, a 1.6-mile trail loop, and adjacent parkland
              and golf course. The lake is part of the Minnehaha Creek system
              and sits in a pleasant, tree-lined setting. The beach is
              popular with families in summer, and the trail is used for
              walking and biking year-round. However, Lake Hiawatha has faced
              significant environmental challenges — stormwater runoff has
              deposited sediment, trash, and pollutants into the lake for
              decades, and water quality has been a persistent concern.
              Community advocacy groups have organized cleanup efforts and
              pushed for systemic solutions. The situation has improved but
              remains an ongoing issue.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/hiawatha/lake-hiawatha.webp"
            alt="Lake Hiawatha beach area with trees in summer"
            caption="Lake Hiawatha — a neighborhood lake with potential and challenges"
          />
        </ArticleSubsection>
        <ArticleSubsection title="Hiawatha Golf Course">
          <Prose>
            <p>
              The Hiawatha Golf Course, adjacent to Lake Hiawatha, has been
              a neighborhood institution and a point of significant community
              debate. The Minneapolis Park Board has proposed changes to the
              course to address flooding and environmental issues, and the
              proposal has generated passionate responses from community
              members who value the course as a recreational amenity and a
              gathering place — particularly for communities of color who
              have historically used the course. The future of the golf
              course is one of the most contentious park-planning issues in
              Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Trail Connections">
          <Prose>
            <p>
              From Hiawatha, the Minnehaha Creek Trail connects east to
              Minnehaha Falls and the Mississippi River, and west to the
              Chain of Lakes. The Midtown Greenway is accessible from the
              northern portion of the neighborhood. The Bike Score of 72
              reflects serviceable cycling infrastructure, though the
              Hiawatha Avenue corridor itself is not particularly
              bike-friendly.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Hiawatha Schools">
        <Prose>
          <p>
            Hiawatha Community School serves kindergarten through fifth
            grade and reflects the neighborhood&apos;s diversity — the
            student body is one of the most varied in the Minneapolis
            Public Schools system, with students from Somali, Latino,
            Native American, and other backgrounds.
          </p>
          <p>
            Middle and high school options include various Minneapolis
            Public Schools destinations, with Roosevelt Senior High School
            and South Senior High School among the common assignments. The
            city&apos;s magnet school system provides additional options.
          </p>
          <p>
            The school landscape in Hiawatha is more complex and more varied
            than in the Southwest Minneapolis family neighborhoods. The
            diversity of the student body is a genuine strength; navigating
            the district&apos;s assignment and option system requires more
            active engagement from families.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Hiawatha Real Estate & Housing">
        <Prose>
          <p>
            Hiawatha is one of the most affordable neighborhoods in
            Minneapolis for homebuyers. Median sale prices have ranged from
            roughly $250,000 to $400,000 — well below the citywide median
            and dramatically below the lake and Southwest Minneapolis
            neighborhoods. This affordability is the primary draw for
            buyers, particularly first-time homebuyers, immigrants, and
            families with moderate incomes.
          </p>
          <p>
            The housing stock is a mix of early-to-mid-20th-century homes —
            bungalows, Cape Cods, Foursquares, ramblers, and a scattering of
            duplexes. Condition varies more block by block than in the more
            uniform neighborhoods to the west. Homes closer to Lake Hiawatha
            and the quieter western blocks tend to be better-maintained;
            homes closer to Hiawatha Avenue are more affected by highway
            noise and often priced lower.
          </p>
          <p>
            Homes sell quickly — about 14 days on average — reflecting strong
            demand at the price point. The combination of affordability and
            Blue Line access creates a value proposition that attracts buyers
            who are priced out of other Minneapolis neighborhoods.
          </p>
        </Prose>
        <Quote text="Under $300,000 with light rail access. That&apos;s the Hiawatha pitch. For a lot of people, that&apos;s the only pitch they need." cite="South Minneapolis real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Hiawatha">
        <Prose>
          <p>
            Hiawatha earns a Walk Score of 55 — the neighborhood&apos;s
            commercial options are scattered rather than concentrated, and
            most daily errands require leaving the immediate residential
            blocks. The Bike Score of 72 reflects serviceable cycling
            infrastructure and trail connections, though the Hiawatha Avenue
            corridor is not comfortable for cycling.
          </p>
          <p>
            The Blue Line is the standout transit asset. Stations at 38th
            Street and 46th Street provide direct service to downtown
            Minneapolis (about 12 minutes), MSP International Airport (about
            8 minutes), and the Mall of America. This level of rail transit
            access is rare in south Minneapolis and is a genuine
            differentiator for the neighborhood.
          </p>
          <p>
            By car, downtown is 12–15 minutes via Hiawatha Avenue or I-35W.
            The airport is even closer. Bus routes along Cedar Avenue and
            Lake Street provide additional transit connections. The
            neighborhood&apos;s multi-modal options — light rail, bus, bike,
            car — make it more transit-accessible than most of south
            Minneapolis, though the pedestrian environment along Hiawatha
            Avenue leaves much to be desired.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Hiawatha is a neighborhood where real issues coexist with real
            potential, and the tensions are worth naming clearly.
          </p>
        </Prose>
        <ArticleSubsection title="Lake Hiawatha Environmental Issues">
          <Prose>
            <p>
              Lake Hiawatha&apos;s water quality and trash accumulation from
              stormwater systems have been persistent environmental concerns.
              Community activists have raised awareness, organized cleanups,
              and pushed for systemic solutions. The city and the Minnehaha
              Creek Watershed District have invested in improvements, but the
              lake&apos;s health remains a work in progress. For a
              neighborhood named after a lake, the condition of that lake
              matters — and it&apos;s not yet where it needs to be.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Hiawatha Golf Course Debate">
          <Prose>
            <p>
              The Minneapolis Park Board&apos;s proposal to modify or
              reduce the Hiawatha Golf Course to address flooding and
              environmental issues has generated intense community debate.
              Supporters of the proposal cite environmental necessity;
              opponents — including many residents of color who use the
              course — cite the loss of a valued recreational and community
              asset. The debate has become a flashpoint for broader
              questions about whose priorities drive park planning in
              Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Transit-Oriented Development">
          <Prose>
            <p>
              The Blue Line corridor has attracted development interest —
              new apartment buildings and mixed-use projects near transit
              stations. This investment brings density, new residents, and
              economic activity, but it also changes the neighborhood&apos;s
              character and raises property values. The tension between
              welcoming investment and preserving affordability is real and
              ongoing.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Highway as Barrier">
          <Prose>
            <p>
              Hiawatha Avenue functions as a highway through a residential
              neighborhood — fast, loud, and difficult to cross on foot or
              bike. The light rail mitigates some of the negative effects
              by providing transit access, but the highway itself remains
              a barrier that divides the neighborhood and degrades quality
              of life for adjacent blocks. This is a structural reality that
              no amount of neighborhood improvement can fully address.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Hiawatha FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
