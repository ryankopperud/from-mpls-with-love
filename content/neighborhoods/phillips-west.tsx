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
    title: "Phillips West, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Phillips West, Minneapolis — the Minneapolis Institute of Art, affordable housing, one of the most diverse neighborhoods in the city, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Phillips West",
  deck: "A neighborhood defined by an improbable juxtaposition — one of the greatest art museums in America sits at the center of one of the poorest, most diverse communities in Minneapolis, and somehow both things are true at the same time, on the same blocks, and neither one cancels the other out.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Phillips West?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Phillips West" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Phillips West, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "65%+", label: "Residents who are people of color" },
      { value: "$170K–$290K", label: "Median home sale price range (2025 data)" },
      { value: "1915", label: "Year the Minneapolis Institute of Art opened" },
      { value: "90,000+", label: "Works in MIA's permanent collection" },
      { value: "Free", label: "General admission to MIA" },
      { value: "78", label: "Walk Score" },
      { value: "70", label: "Transit Score" },
    ],
  },
  faq: [
    {
      question: "Is Phillips West a good neighborhood in Minneapolis?",
      answer:
        "Phillips West is a neighborhood that rewards a particular kind of resident — someone who values diversity, affordability, cultural access, and community over polish, safety margins, and property values. It is home to the Minneapolis Institute of Art, one of the finest encyclopedic art museums in the country, and to a deeply diverse population that includes Somali, Latino, Native American, and East African communities alongside longtime white working-class residents. The neighborhood has real challenges — poverty, crime, housing quality — that make it unsuitable for people who expect a comfortable, well-maintained urban experience. But for people who want to live in a genuinely diverse community with access to world-class art and culture, at prices that make most of Minneapolis look expensive, Phillips West offers something rare.",
    },
    {
      question: "Is Phillips West, Minneapolis safe?",
      answer:
        "Phillips West has crime rates above the city average, including property crime and some violent crime. The neighborhood has historically been one of the higher-crime areas in Minneapolis, driven by poverty, substance abuse, and the concentration of social stressors. Conditions vary by block — some residential streets are quiet and close-knit, while others experience more activity. The area around MIA and the institutional campuses is generally well-maintained and safe during the day. As with other Phillips neighborhoods, basic urban awareness is essential. Community organizations and block clubs work actively on safety, and most residents navigate the neighborhood without major incidents by knowing their surroundings and their neighbors.",
    },
    {
      question: "What is the Minneapolis Institute of Art?",
      answer:
        "The Minneapolis Institute of Art (Mia) is one of the largest and most comprehensive art museums in the United States, with a permanent collection of over 90,000 works spanning 5,000 years of human creativity. General admission is free — always has been, since the museum opened in 1915. The collection includes masterworks by Rembrandt, van Gogh, Monet, and Picasso alongside extraordinary holdings in Chinese jade, Japanese prints, African textiles, Native American art, and contemporary work. The building itself — a neoclassical original with modernist additions — occupies a commanding position on Third Avenue South in Phillips West. For a neighborhood as modest as Phillips West, having a museum of this caliber — free, open, and welcoming — is an extraordinary civic asset.",
    },
    {
      question: "How much does it cost to live in Phillips West?",
      answer:
        "Phillips West is one of the most affordable neighborhoods in the central city. Single-family homes sell for $170,000 to $290,000, well below the Minneapolis median. Rental apartments range from roughly $700 for a studio to $1,500 for a two-bedroom in older buildings. The neighborhood has significant affordable and subsidized housing stock. For first-time homebuyers and lower-income renters, Phillips West offers centrally located housing at prices that are increasingly hard to find elsewhere in the city.",
    },
    {
      question: "Where exactly is Phillips West in Minneapolis?",
      answer:
        "Phillips West occupies the western portion of the Phillips community in South Minneapolis, roughly bounded by Franklin Avenue to the north, East 26th Street / Midtown Greenway to the south, Chicago Avenue to the east, and I-35W to the west. It sits south of Elliot Park and Stevens Square, west of Ventura Village, and north of the Whittier neighborhood's eastern edge. The Minneapolis Institute of Art is located near the neighborhood's center, and Abbott Northwestern Hospital occupies the northwestern corner.",
    },
    {
      question: "What hospital is in Phillips West?",
      answer:
        "Abbott Northwestern Hospital, part of the Allina Health system, is located at the northwest corner of Phillips West along Chicago Avenue. It is one of the largest hospitals in the Twin Cities and a major employer in the neighborhood. The hospital campus, including associated medical offices and facilities, occupies a significant footprint. Like Hennepin Healthcare in neighboring Elliot Park, Abbott Northwestern shapes the neighborhood around it — providing employment and institutional stability while also consuming land and generating traffic that affects residential quality of life.",
    },
    {
      question: "Is Phillips West diverse?",
      answer:
        "Extremely. Phillips West is one of the most racially and ethnically diverse neighborhoods in Minnesota. Over 65 percent of residents are people of color, with significant Somali, Latino, Native American, and East African populations alongside African American and white residents. The diversity extends to income, household composition, and language — the Phillips community as a whole is home to speakers of over 40 languages. This diversity is not recent or superficial; it is the product of decades of immigration, affordable housing, and community building by people who settled in Phillips because it was one of the few places in Minneapolis that was accessible to them.",
    },
    {
      question: "Can you walk to MIA from Phillips West?",
      answer:
        "MIA is in Phillips West — it is the neighborhood's most prominent institution. Most Phillips West residents are within a 10-minute walk of the museum. The museum's campus, including its gardens and outdoor spaces, is accessible from Third Avenue South and East 24th Street. The fact that one of the greatest art museums in America — with free admission — is in the middle of one of the most affordable neighborhoods in the city is one of the most remarkable things about Minneapolis's geography.",
    },
    {
      question: "Is Phillips West part of Phillips?",
      answer:
        "Yes. Phillips West is one of four neighborhoods that make up the Phillips community: Phillips West, Ventura Village, Midtown Phillips, and East Phillips. The Phillips community is a large, diverse area in South Minneapolis that shares many characteristics across its constituent neighborhoods — diversity, affordability, poverty, and strong community institutions. Phillips West is distinguished primarily by the presence of MIA and Abbott Northwestern Hospital, which give it an institutional character that the other Phillips neighborhoods lack.",
    },
    {
      question: "What is the Children's Theatre Company?",
      answer:
        "The Children's Theatre Company (CTC), located adjacent to MIA in Phillips West, is one of the most acclaimed children's theaters in the United States. Founded in 1965, it has won the Tony Award for Outstanding Regional Theatre and produces professional-quality productions aimed at young audiences and families. CTC shares a building connection with MIA, and the two institutions together create a cultural campus that would be the envy of most American cities. Like MIA, CTC is a world-class institution embedded in a neighborhood that most Minneapolis residents drive to rather than live in — a juxtaposition that says something about the city's relationship with Phillips.",
    },
  ],
  nearby: [
    { name: "Ventura Village", slug: "ventura-village", description: "Little Earth, Franklin Avenue, and multicultural community" },
    { name: "Elliot Park", slug: "elliot-park", description: "Healthcare corridor and new development to the north" },
    { name: "Stevens Square", slug: "stevens-square-loring-heights", description: "Dense and affordable, close to Loring Park" },
    { name: "Whittier", slug: "whittier", description: "Eat Street and walkable urban living to the west" },
    { name: "Midtown Phillips", slug: "midtown-phillips", description: "The Greenway, Lake Street, and Phillips' southern half" },
    { name: "Lowry Hill East", slug: "lowry-hill-east", description: "The Wedge — co-ops, bikes, and Lyndale Avenue dining" },
  ],
  closing: {
    title: "What Makes Phillips West Irreplaceable",
    paragraphs: [
      "There is a moment, on a free Sunday afternoon at MIA, when the juxtaposition of Phillips West becomes visible in a single room. A Somali family is looking at the museum&apos;s Islamic art collection, pointing out calligraphy and geometric patterns they recognize from mosques they attended in Mogadishu. A group of art students is sketching in the European galleries. A grandmother and her grandchild are standing in front of a Rembrandt, the grandmother explaining something in Spanish that the child is trying to follow. A man in a North Face jacket is sitting alone on a bench, just looking — not at anything in particular, just at the space itself, the scale of it, the quiet. None of these people paid to be here. None of them had to prove they belonged. The museum is free, and it is in their neighborhood, and they are using it the way a museum should be used — as a place where beauty and history and human achievement belong to everyone.",
      "Phillips West is not a neighborhood that asks for sympathy or applause. It has problems — real, structural, deeply rooted problems that will not be solved by a neighborhood guide or a well-intentioned blog post. But it also has something that money cannot buy and gentrification cannot replicate — a community that has been built by the people who live in it, around institutions that serve them, in a place that the rest of the city has often overlooked. The Minneapolis Institute of Art did not choose Phillips West because it was fashionable. It was built here in 1915, and it has stayed here through every wave of change the neighborhood has experienced. The museum and the neighborhood have grown old together, and in that persistence there is a kind of integrity that newer, shinier places have not yet earned.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Tuesday afternoon in February, the Minneapolis Institute of
          Art is doing what it has done since 1915 — holding the door open
          for whoever walks through it. Today, that includes a class of
          third-graders from a nearby school, bundled in parkas and buzzing
          with the freedom of a field trip. A retired couple from Edina,
          here for the new photography exhibition. A Somali mother with a
          stroller, pausing in the Asian galleries. A college student
          sketching in the period rooms. A man who appears to have come in
          primarily to get warm, sitting on a bench near the Impressionists,
          his backpack at his feet, his eyes half-closed. No one is checking
          tickets because there are no tickets. General admission is free.
          It has always been free. Outside, Phillips West unfolds in every
          direction — modest houses, apartment buildings, the Abbott
          Northwestern Hospital campus, convenience stores with signs in
          Somali and Spanish, snow piled along the curbs. The museum sits
          in the middle of all of it like a cathedral in a village, offering
          something that does not require money or permission to receive.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/phillips-west/hero.webp"
        alt="The Minneapolis Institute of Art building in Phillips West with the neighborhood visible beyond"
        caption="The Minneapolis Institute of Art — free since 1915, and the anchor of Phillips West"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Phillips West, Minneapolis?">
        <Prose>
          <p>
            Phillips West is the western quarter of the Phillips community in
            South Minneapolis — a diverse, low-income neighborhood that is
            home to one of the greatest art museums in the United States. It
            is roughly bounded by Franklin Avenue to the north, East 26th
            Street / the Midtown Greenway to the south, Chicago Avenue to the
            east, and I-35W to the west. Approximately 5,500 people live here,
            in a mix of older single-family homes, duplexes, apartment
            buildings, and affordable housing complexes. The neighborhood is
            anchored by two major institutions: the Minneapolis Institute of
            Art (Mia), which occupies a commanding neoclassical building near
            the center of the neighborhood, and Abbott Northwestern Hospital,
            which dominates the northwest corner.
          </p>
          <p>
            Phillips West shares the core characteristics of the broader
            Phillips community — racial and ethnic diversity, economic
            hardship, strong community institutions, and the complicated
            relationship between a neighborhood that has been historically
            under-invested and a city that is beginning to pay attention.
            What distinguishes Phillips West from its neighboring Phillips
            neighborhoods —{" "}
            <Link href="/neighborhoods/ventura-village" className="text-[#2a9d8f] hover:underline">
              Ventura Village
            </Link>
            ,{" "}
            <Link href="/neighborhoods/midtown-phillips" className="text-[#2a9d8f] hover:underline">
              Midtown Phillips
            </Link>
            ,{" "}
            <Link href="/neighborhoods/east-phillips" className="text-[#2a9d8f] hover:underline">
              East Phillips
            </Link>{" "}
            — is the presence of MIA and the institutional corridor along
            Third Avenue. The museum gives the neighborhood a cultural gravity
            that its economic indicators would not predict. A 90,000-work art
            collection, free to the public, in a neighborhood where the
            median household income is well below the city average. This is
            not irony. It is Minneapolis at its most contradictory and its
            most generous.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Phillips West Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/phillips-west/neighborhood-sign.webp"
          alt="Phillips West neighborhood sign in Minneapolis"
          caption="The Phillips West neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Phillips West History & Origins">
        <Prose>
          <p>
            Like the rest of Phillips, the land now known as Phillips West was
            originally Dakota territory. The Phillips community takes its
            name from Wendell Phillips, the abolitionist — a fitting namesake
            for a neighborhood that has long been home to people on the
            margins of American prosperity. The area developed as a
            working-class residential neighborhood in the late 19th and early
            20th centuries, housing immigrant families — primarily
            Scandinavian and German — who worked in Minneapolis&apos;s mills,
            factories, and service industries.
          </p>
          <p>
            The Minneapolis Institute of Art opened its doors in 1915, built
            with funding from the T.B. Walker family and other civic leaders
            who believed that a great city needed a great art museum. The
            neoclassical building, designed by McKim, Mead & White — the same
            firm that designed the original Penn Station and the Brooklyn
            Museum — was intentionally placed in a residential neighborhood
            rather than downtown, reflecting a progressive-era belief that
            art should be accessible to ordinary people rather than
            sequestered in elite districts. The museum has been free from day
            one, and that founding decision has shaped its relationship with
            the neighborhood for over a century.
          </p>
          <p>
            The mid-20th century brought the familiar pattern of decline.
            White flight, freeway construction (I-35W cut through the
            neighborhood&apos;s western edge), and disinvestment transformed
            Phillips West from a working-class neighborhood to a poor one.
            The housing stock deteriorated. Crime increased. The demographics
            shifted as African American families moved in during the Great
            Migration, and later as Somali, Latino, and other immigrant
            communities settled in the affordable housing stock. By the
            1980s, Phillips was one of the poorest, most crime-affected
            areas in Minneapolis.
          </p>
          <p>
            Through all of these changes, MIA remained — a world-class
            institution in a neighborhood that the rest of the city had
            largely abandoned. The museum expanded multiple times (additions
            in 1974 and 2006), invested in its collection, and maintained
            free admission even as other museums began charging. It is
            difficult to overstate the significance of this persistence.
            When neighborhoods decline, institutions typically leave or
            build walls. MIA stayed and kept the doors open. The
            neighborhood today is still poor, still challenged, still
            struggling with the accumulated weight of decades of neglect.
            But it has a Rembrandt. And anyone can see it, for free, any day
            the museum is open.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Phillips West">
        <Prose>
          <p>
            Living in Phillips West means living with the daily reality of
            a neighborhood that is simultaneously overlooked and anchored by
            a world-class institution. The streets around MIA are quiet,
            tree-lined, and have the slightly formal quality that proximity
            to a museum tends to create. Walk two blocks in any direction
            and the character shifts — more modest houses, more visible
            poverty, more of the gritty texture that defines the Phillips
            community. The museum functions as a kind of oasis, drawing
            visitors from across the metro who park on neighborhood streets,
            walk through the front doors, and return to their cars without
            engaging with the surrounding blocks. Phillips West residents
            know both the museum and the blocks — they live in the
            neighborhood that visitors drive through.
          </p>
          <p>
            The residential experience varies by block. The streets
            immediately around MIA and the institutional corridor are
            generally well-maintained, benefiting from the proximity to
            large institutions that have an interest in their surroundings.
            Other blocks — particularly toward the edges of the neighborhood,
            near the freeway and the commercial corridors — are rougher.
            The housing stock is old, and quality ranges from carefully
            maintained owner-occupied homes to rental properties showing
            decades of deferred maintenance. You will see both on the same
            block.
          </p>
          <p>
            The community is diverse in every dimension — racially,
            ethnically, economically, linguistically. Somali families walk
            to the mosque. Latino families tend vegetable gardens. African
            American elders sit on porches they have occupied for decades.
            White homeowners who bought when prices were low coexist with
            renters who are here because it is what they can afford. The
            diversity is not curated or advertised. It is the natural product
            of a neighborhood where the rents are low, the institutions are
            strong, and people from everywhere have found a foothold.
          </p>
          <p>
            Abbott Northwestern Hospital, at the neighborhood&apos;s northwest
            corner, is the other major institutional presence. It employs
            thousands and generates a constant flow of workers, patients,
            and visitors through the neighborhood. Like Hennepin Healthcare
            in{" "}
            <Link href="/neighborhoods/elliot-park" className="text-[#2a9d8f] hover:underline">
              Elliot Park
            </Link>
            , the hospital is both an asset and a force that shapes the
            neighborhood around its needs — parking, traffic, institutional
            expansion — rather than around residential ones.
          </p>
        </Prose>
        <Quote
          text="I take my kids to MIA almost every weekend. It&apos;s free. It&apos;s beautiful. And it&apos;s in our neighborhood. My daughter thinks every neighborhood has a museum with Rembrandts in it. I haven&apos;t told her otherwise."
          cite="Phillips West parent"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Phillips West Food, Drink & Local Spots">
        <Prose>
          <p>
            Phillips West&apos;s food scene is modest within its own boundaries
            but richly supplemented by the neighboring corridors. Eat Street
            (Nicollet Avenue in{" "}
            <Link href="/neighborhoods/whittier" className="text-[#2a9d8f] hover:underline">
              Whittier
            </Link>
            ) is accessible to the west. Franklin Avenue&apos;s multicultural
            restaurants in{" "}
            <Link href="/neighborhoods/ventura-village" className="text-[#2a9d8f] hover:underline">
              Ventura Village
            </Link>{" "}
            are a short trip east. Within Phillips West itself, the food
            options tend toward the functional and the culturally specific —
            ethnic grocery stores, small restaurants serving their
            communities, and the kind of corner shops that dense,
            lower-income neighborhoods generate.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "MIA Restaurant (Agra Culture)", tag: "Museum Dining", price: "$$", description: "2400 Third Avenue South, inside MIA. A cafe and restaurant within the museum serving salads, sandwiches, and seasonal dishes made with local ingredients. It is a pleasant spot for lunch after gallery-browsing, and it serves one of the few sit-down meals available within Phillips West's boundaries. Accessible without museum admission." }} />
          <PlaceCardComponent place={{ name: "Nicollet Avenue / Eat Street (Nearby)", tag: "Restaurant Row", price: "$–$$$", description: "A five-to-ten-minute walk west brings you to Eat Street — Nicollet Avenue's famous multicultural dining corridor in Whittier. Vietnamese, Ethiopian, Mexican, Somali, Japanese, Indian, and more — the concentration of diverse restaurants on Eat Street is one of the best food experiences in Minneapolis, and Phillips West residents access it easily." }} />
          <PlaceCardComponent place={{ name: "East African Restaurants & Markets", tag: "Somali / Ethiopian", price: "$", description: "Several Somali and East African restaurants and grocery stores serve the community along and near Franklin Avenue and Chicago Avenue. Goat, rice, sambusa, chai — the food is authentic, affordable, and a reflection of the neighborhood's demographics. These are community restaurants rather than destination dining, and they are excellent." }} />
          <PlaceCardComponent place={{ name: "Latino Markets", tag: "Mexican / Central American", price: "$", description: "Mexican and Central American grocery stores and bakeries serve the neighborhood's Latino community. Fresh tortillas, pan dulce, dried chilies, queso fresco, and prepared foods at prices that make chain grocery stores look overpriced. Worth seeking out for home cooks and anyone who appreciates freshly baked bread." }} />
          <PlaceCardComponent place={{ name: "Children's Theatre Company Cafe", tag: "Cafe", price: "$–$$", description: "CTC, adjacent to MIA, has a small cafe that serves families attending performances. Limited hours and menu, but a pleasant option on show days." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The grocery situation in Phillips West mirrors the broader
              Phillips challenge — no full-service conventional supermarket
              within the neighborhood. The ethnic grocery stores serve many
              needs. Cub Foods on Lake Street (in Midtown Phillips) is the
              nearest full-service option. The Wedge Co-op in{" "}
              <Link href="/neighborhoods/lowry-hill-east" className="text-[#2a9d8f] hover:underline">
                Lowry Hill East
              </Link>{" "}
              is accessible by bus or bike. The lack of a nearby supermarket
              is a quality-of-life issue that community organizations have
              advocated to address.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors / Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors in Phillips West">
        <Prose>
          <p>
            Phillips West&apos;s cultural resources are anchored by MIA and
            CTC — two world-class institutions that would be the pride of
            any neighborhood. The park resources are more modest, reflecting
            the neighborhood&apos;s economic profile and historical
            underinvestment in Phillips-area infrastructure.
          </p>
        </Prose>

        <ArticleSubsection title="Minneapolis Institute of Art (Mia)">
          <Prose>
            <p>
              Mia is one of the great encyclopedic art museums in the United
              States. Its permanent collection of over 90,000 works spans
              5,000 years — from ancient Egyptian artifacts to contemporary
              installations, from Rembrandt&apos;s &quot;Lucretia&quot; to
              one of the finest collections of Japanese woodblock prints
              outside Japan. The museum&apos;s Asian art holdings are
              world-class. The American art galleries tell the story of a
              continent. The period rooms — including a Frank Lloyd Wright
              living room — are immersive experiences. And all of it is free.
              Always has been. The building itself is worth the visit — the
              original 1915 neoclassical structure by McKim, Mead & White,
              with later additions by Kenzo Tange (1974) and Michael Graves
              (2006), creates a sequence of spaces that is architecturally
              rich and surprisingly intimate for a museum of this scale.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Children's Theatre Company">
          <Prose>
            <p>
              The Children&apos;s Theatre Company, adjacent to MIA, is one of
              the foremost children&apos;s theaters in the country —
              recipient of the 2003 Tony Award for Outstanding Regional
              Theatre. CTC produces professional-quality productions that
              appeal to young audiences without condescending to them.
              Productions range from adaptations of beloved books to original
              works that tackle complex themes. The theater shares a physical
              connection with MIA, and together they form a cultural campus
              that serves families from across the metro — and from Phillips
              West itself, where children grow up with a world-class theater
              in their neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Parks">
          <Prose>
            <p>
              Phillips West&apos;s park resources include the green spaces
              around MIA — which function as informal public parks — and
              smaller neighborhood parks and playgrounds scattered through
              the residential blocks. The parks are well-used but reflect
              the broader pattern of underinvestment in Phillips-area
              infrastructure. The Midtown Greenway runs along the
              neighborhood&apos;s southern edge, providing trail access for
              cycling and walking. For larger green spaces, residents look
              to Loring Park to the north or Powderhorn Park to the south.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Phillips West Schools">
        <Prose>
          <p>
            Phillips West is served by Minneapolis Public Schools, with
            several options accessible within or near the neighborhood.
            Whittier International Elementary, a few blocks to the west, is
            a popular choice that emphasizes global perspectives and serves
            a multilingual student body. Andersen United Community School
            serves the broader Phillips area. Jefferson Community School is
            also nearby.
          </p>
          <p>
            For middle and high school, South High School is the primary
            assignment. The Minneapolis Public Schools system allows
            citywide enrollment, giving families access to magnet programs,
            charter schools, and specialty options beyond the immediate
            neighborhood. Culturally specific schools — including options
            serving Somali and Native American students — are available in
            the broader Phillips and South Minneapolis area.
          </p>
          <p>
            The educational challenges facing Phillips West families are
            significant — poverty, language barriers, housing instability,
            and the broader systemic issues affecting Minneapolis Public
            Schools all play roles. But the neighborhood also benefits from
            the proximity to MIA and CTC, both of which offer educational
            programming, field trips, and community partnerships that
            supplement school-based learning. A child growing up in Phillips
            West has access to one of the great art museums in the country,
            within walking distance, for free. That counts for something.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Phillips West Real Estate & Housing">
        <Prose>
          <p>
            Phillips West&apos;s housing market is affordable by Minneapolis
            standards, reflecting the neighborhood&apos;s economic profile
            and historical underinvestment. The housing stock is a mix of
            older single-family homes (typically 1900s–1940s construction),
            duplexes, small apartment buildings, and larger affordable
            housing developments. The condition varies widely — some homes
            have been well-maintained or renovated by owner-occupants,
            while others show the effects of decades of deferred maintenance.
          </p>
          <p>
            Single-family homes typically sell for $170,000 to $290,000.
            The homes are generally modest — two or three bedrooms, one
            bathroom, older systems — but they offer something increasingly
            rare in Minneapolis: homeownership within walking distance of
            downtown and world-class cultural institutions at prices
            accessible to working- and middle-class buyers. Down-payment
            assistance programs and first-time buyer incentives can make
            ownership even more accessible.
          </p>
        </Prose>

        <ArticleSubsection title="The Rental Market">
          <Prose>
            <p>
              Rental housing is abundant. Apartments in older buildings
              range from $700 for a studio to $1,500 for a two-bedroom.
              Affordable and subsidized units are available through various
              programs. The rental market is generally tenant-favorable in
              terms of price, but building quality varies enormously.
              Prospective renters should inspect units carefully, check
              the city&apos;s rental licensing records, and talk to current
              tenants if possible. The best deals in Phillips West are
              genuinely excellent. The worst are genuinely problematic.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We bought in Phillips West because it was what we could afford. Then we discovered we live three blocks from one of the best art museums in the country and our kids can go there every weekend for free. Best accident we ever had."
          cite="Phillips West homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Phillips West">
        <Prose>
          <p>
            Phillips West has decent transit connections and solid walkability
            for a neighborhood outside the downtown core. The Walk Score of
            78 reflects the reality that basic errands are achievable on foot —
            ethnic grocery stores, pharmacies, and small shops are accessible —
            though the neighborhood lacks the retail density of places like
            Uptown or the North Loop. Bus service is the primary transit
            option: routes run along Chicago Avenue, Nicollet Avenue, and
            Franklin Avenue, providing connections to downtown, South
            Minneapolis, and the broader metro.
          </p>
          <p>
            The nearest light rail stations are the Franklin Avenue and Lake
            Street / Midtown stations on the Blue Line, both within a
            reasonable walk or short bike ride from most of the neighborhood.
            The Blue Line provides direct service to downtown (10–15 minutes),
            the airport (20–25 minutes), and the Mall of America (30–35
            minutes).
          </p>
          <p>
            The Midtown Greenway, along the neighborhood&apos;s southern edge,
            provides excellent cycling infrastructure — the separated trail
            connects to the Chain of Lakes, the Mississippi River trails,
            and the broader regional network. The flat terrain makes cycling
            practical throughout Phillips West. Nice Ride bikeshare stations
            are accessible in the area.
          </p>
          <p>
            By car, I-35W is immediately accessible on the neighborhood&apos;s
            western edge, providing quick connections to downtown, the
            southern suburbs, and the interstate system. Street parking is
            generally available and free on residential blocks. Most
            households own cars, and the neighborhood&apos;s infrastructure —
            garages, driveways, and wide streets — accommodates them
            comfortably.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Phillips West&apos;s tensions are rooted in the same dynamics
            that shape all of the Phillips neighborhoods — poverty, racial
            inequality, institutional power, and the slow creep of
            development pressure on affordable communities. MIA&apos;s presence
            adds a unique dimension to these tensions, but it does not
            resolve them.
          </p>
        </Prose>

        <ArticleSubsection title="The Museum-Neighborhood Relationship">
          <Prose>
            <p>
              MIA is Phillips West&apos;s greatest asset and its most
              complicated relationship. The museum brings visitors,
              cultural prestige, and institutional investment to a
              neighborhood that would otherwise receive very little of any
              of those things. MIA has made genuine efforts to engage with
              the community — free admission, community programming,
              partnerships with neighborhood organizations, and a stated
              commitment to diversity and accessibility. But the museum is
              also a large institution occupying valuable land, drawing
              visitors who often do not engage with the surrounding
              neighborhood, and existing in a world that is economically
              and culturally distant from the community outside its doors.
              The relationship is better than it has been — MIA has invested
              in community outreach and diversified its programming — but
              the structural gap between a world-class museum and a
              low-income neighborhood is not something that programming
              alone can bridge.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Hospital Expansion and Institutional Creep">
          <Prose>
            <p>
              Abbott Northwestern Hospital continues to expand, and each
              expansion reshapes the northwest corner of Phillips West.
              Parking ramps, medical offices, and institutional buildings
              consume land that was once residential. The hospital provides
              employment and essential services, but institutional expansion
              in a low-income neighborhood raises familiar questions: whose
              needs are being served, whose land is being consumed, and
              whether the neighborhood&apos;s residential character can
              survive the growth of institutions that were designed to serve
              the city rather than the block.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Affordability and the Slow Squeeze">
          <Prose>
            <p>
              Phillips West has not experienced the rapid gentrification
              that has transformed parts of{" "}
              <Link href="/neighborhoods/elliot-park" className="text-[#2a9d8f] hover:underline">
                Elliot Park
              </Link>{" "}
              or the North Loop. The neighborhood remains genuinely
              affordable, and the development pressure is lower here than
              in more centrally located areas. But the pressure exists. Home
              prices have risen. Rents have increased. Property investors
              are buying older homes, renovating them, and selling or renting
              at higher prices. The changes are incremental rather than
              dramatic, but the direction is clear. Community organizations
              have advocated for affordable housing preservation, community
              land trusts, and anti-displacement measures. Whether these
              efforts can keep Phillips West affordable in the long term —
              given its proximity to downtown, its transit access, and the
              drawing power of MIA — is the neighborhood&apos;s defining
              question.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Safety and Community Investment">
          <Prose>
            <p>
              Crime remains a concern in Phillips West, and the
              neighborhood&apos;s relationship with public safety is shaped
              by the same dynamics that affect the broader Phillips
              community — poverty, racial disparities in policing, and the
              tension between the need for safety and the harm that
              over-policing can cause in communities of color. Community-led
              safety initiatives, block clubs, and neighborhood patrols
              supplement formal policing. The honest assessment is that
              Phillips West is safer than its reputation suggests but
              less safe than the city average. Investing in the conditions
              that prevent crime — economic opportunity, housing stability,
              youth programming, mental health services — is the long-term
              answer. The community organizations doing that work deserve
              more support than they currently receive.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Phillips West FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
