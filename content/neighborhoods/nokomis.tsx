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
    title: "Nokomis, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Nokomis, Minneapolis — Lake Nokomis, the beach, 50th Street, restaurants, housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Nokomis",
  deck: "A South Minneapolis lake neighborhood that earns its reputation honestly — where a real swimming beach anchors the community, 50th Street holds the commercial heart together, and the tension between quiet-lake-neighborhood identity and an increasingly diverse, increasingly urban reality makes it one of the more interesting places in the city to watch.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Nokomis?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Nokomis" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Nokomis, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~7,000", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$300K–$450K", label: "Median home sale price range (2025 data)" },
      { value: "207 acres", label: "Lake Nokomis surface area" },
      { value: "1910s–1940s", label: "Era most homes were built" },
      { value: "50th Street", label: "Primary commercial corridor" },
      { value: "12–18 min", label: "Drive to downtown Minneapolis" },
      { value: "70", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Nokomis a good neighborhood in Minneapolis?",
      answer:
        "Yes — Nokomis is one of South Minneapolis's most livable neighborhoods, offering lake access, a genuine swimming beach, a walkable commercial strip on 50th Street, and housing that is significantly more affordable than the Southwest Minneapolis lake neighborhoods. It's family-friendly without being sterile, diverse without being self-congratulatory, and connected enough to feel like a real city neighborhood while still having the quiet-residential-block feeling that draws people to the lakes in the first place.",
    },
    {
      question: "Is Nokomis, Minneapolis safe?",
      answer:
        "Nokomis is generally considered safe by Minneapolis standards. Residential blocks are quiet and neighborly, and violent crime rates are well below city averages. Property crime — particularly car break-ins near the lake and package theft — is the most common concern. Like all Minneapolis neighborhoods, safety varies by block and context. Nokomis East has experienced somewhat higher crime rates than areas west of the lake. Overall, most residents describe the neighborhood as a comfortable and secure place to live.",
    },
    {
      question: "What is Nokomis, Minneapolis known for?",
      answer:
        "Nokomis is best known for Lake Nokomis and its public swimming beach — one of the few genuine sand beaches on a Minneapolis lake. The 50th Street commercial corridor, Nokomis Parkway, the summer bandshell concerts, and a family-oriented residential character define the neighborhood. It's also increasingly known for its demographic diversity, particularly in Nokomis East, where Somali, Latino, and other immigrant communities have become a significant presence.",
    },
    {
      question: "How much do homes cost in Nokomis, Minneapolis?",
      answer:
        "Median home sale prices in Nokomis ranged from roughly $300,000 to $450,000 in 2025, depending on proximity to the lake and condition. Smaller bungalows and ramblers farther from the lake can be found in the $275,000–$325,000 range, while updated homes near the lake or on Nokomis Parkway can reach $500,000–$600,000. Compared to Linden Hills or Fulton, Nokomis remains meaningfully more affordable for comparable lake access.",
    },
    {
      question: "Can you swim in Lake Nokomis?",
      answer:
        "Yes — Lake Nokomis has a public swimming beach with a sand bottom, lifeguards (seasonal), and changing facilities. It is one of the most popular swimming beaches in the Minneapolis park system. The lake is tested regularly for water quality, and occasional advisories due to algae blooms or elevated bacteria levels have been issued in recent years, a concern that residents and the Park Board are actively monitoring.",
    },
    {
      question: "Is Nokomis walkable?",
      answer:
        "Nokomis earns a Walk Score of approximately 70 and a Bike Score of 85. The 50th Street corridor provides grocery, dining, and retail within walking distance for most residents. The lake and park system offer extensive pedestrian and cycling trails. The neighborhood is well-connected to the broader Minneapolis bike network, and bus service on 34th Avenue and 46th Street provides transit options, though it is not as transit-rich as neighborhoods on the light rail line.",
    },
    {
      question: "What schools serve Nokomis, Minneapolis?",
      answer:
        "Nokomis is served by Minneapolis Public Schools. Nokomis Community School (PreK–5) and Kenny Elementary are the primary neighborhood options. Roosevelt High School serves the area for grades 9–12. Families also access the district's magnet and open enrollment options. School quality is a frequent topic of conversation, and many families navigate the system carefully.",
    },
    {
      question: "What's the difference between Nokomis and Nokomis East?",
      answer:
        "The Nokomis Community — as defined by the City of Minneapolis — includes several sub-neighborhoods: Nokomis (west of Cedar Avenue), Keewaydin, Minnehaha, and Morris Park (east of Cedar Avenue, collectively known as Nokomis East). Nokomis East is generally more diverse, more affordable, and more densely populated than the area west of the lake. When people say 'Nokomis,' they usually mean the area around the lake itself, but the broader community extends well east of Cedar Avenue.",
    },
    {
      question: "How does Nokomis compare to Linden Hills or Fulton?",
      answer:
        "Nokomis offers lake access at a significantly lower price point than Linden Hills or Fulton. The trade-off is that 50th Street in Nokomis is a more modest commercial strip than the Linden Hills or 50th & France corridors, the housing stock is simpler (more bungalows and ramblers, fewer large colonials), and the neighborhood is more racially and economically diverse. For buyers who want lake proximity without paying Southwest Minneapolis prices, Nokomis is the most common alternative.",
    },
    {
      question: "What are the best restaurants near Lake Nokomis?",
      answer:
        "Standouts include Sandcastle (seasonal lakeside dining at Nokomis Beach), Naviya's Thai Brasserie (one of the best Thai restaurants in the Twin Cities), Town Hall Lanes (bowling alley with a surprisingly good kitchen), and Bull's Horn (a neighborhood bar and restaurant on 34th Avenue). The 50th Street corridor and surrounding blocks offer a growing mix of independent restaurants and cafes.",
    },
    {
      question: "Is Lake Nokomis connected to other Minneapolis lakes?",
      answer:
        "Lake Nokomis is connected to Lake Hiawatha via Minnehaha Creek, which flows from Lake Minnetonka through the Chain of Lakes and eventually to Minnehaha Falls and the Mississippi River. The Nokomis Parkway trail connects to the broader Grand Rounds National Scenic Byway — Minneapolis's 72-mile network of parks and trails. Cyclists and walkers can easily reach Lake Hiawatha, Minnehaha Falls, and the river from Nokomis via connected trails.",
    },
  ],
  nearby: [
    { name: "Minnehaha", slug: "minnehaha", description: "Shares the eastern edge and the creek corridor" },
    { name: "Keewaydin", slug: "keewaydin", description: "Nokomis East — diverse and evolving east of Cedar" },
    { name: "Standish", slug: "standish", description: "Working-class residential blocks to the north" },
    { name: "Ericsson", slug: "ericsson", description: "Quiet streets between Nokomis and Powderhorn" },
    { name: "Howe", slug: "howe", description: "Greenway access and steady residential character" },
    { name: "Diamond Lake", slug: "diamond-lake", description: "Suburban-feeling blocks to the southwest" },
  ],
  closing: {
    title: "What Makes Nokomis Worth Knowing",
    paragraphs: [
      "There are lake neighborhoods in Minneapolis with bigger reputations, higher price tags, and more polished commercial corridors. Nokomis is not trying to compete with them on those terms. What it offers is something less flashy and more durable — a swimming beach that actual families use on actual Tuesday afternoons, a stretch of 50th Street where the Thai restaurant and the bowling alley and the coffee shop coexist without anyone trying to rebrand the district, residential blocks where a young Somali family and a retired white couple and a queer household with two dogs all share the same alley and wave to each other on garbage day. That is not a brochure. That is just what the neighborhood looks like.",
      "Nokomis is changing — its demographics are shifting, its lake is under environmental pressure, its identity is negotiating between the quiet-neighborhood nostalgia of long-term residents and the more urban, more diverse reality that is already here. That negotiation is not always comfortable. But it is honest, and it is happening in real time, on real blocks, between real people. If you want a lake neighborhood in Minneapolis that has not been frozen in amber — one that is still figuring out what it is becoming — Nokomis is the one to watch.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a July evening at Nokomis Beach, the sand is still warm from the
          afternoon sun and the lake is full of people who look like they have
          nowhere else to be. A Somali family spreads a picnic blanket near
          the water&apos;s edge. Two teenagers in cutoffs launch a
          paddleboard from the dock. A woman in her sixties floats on her
          back fifty yards out, eyes closed, perfectly still, while her
          golden retriever paces the shore and whines. The Sandcastle is
          serving tacos and tap beer on the patio, and the line stretches
          past the bike rack. Somewhere behind the bandshell, someone is
          warming up a saxophone. The light is doing the thing it does on
          Minnesota lakes in midsummer — going gold and soft and refusing to
          quit — and for a moment the whole scene looks like something a city
          tourism board would stage, except that nobody here is performing.
          This is just what Nokomis does on a weeknight in July.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/nokomis/hero.webp"
        alt="Lake Nokomis beach on a summer evening with swimmers and paddleboarders"
        caption="Lake Nokomis Beach — the neighborhood's anchor and one of the best public swimming beaches in the city"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Nokomis, Minneapolis?">
        <Prose>
          <p>
            Nokomis is a residential neighborhood in South Minneapolis,
            anchored by Lake Nokomis — a 207-acre lake with a public swimming
            beach, a parkway loop, and the kind of low-key community energy
            that makes Southwest Minneapolis&apos;s more famous lakes feel,
            by comparison, like they&apos;re trying too hard. The
            neighborhood is roughly bounded by East 46th Street to the north,
            34th Avenue South to the east, the Crosstown (Highway 62) to the
            south, and Cedar Avenue to the west. It is home to approximately
            7,000 residents and sits at the intersection of several forces
            that define urban Minneapolis in 2026 — lake access and
            affordability, demographic change and community identity,
            environmental pressure and neighborhood pride.
          </p>
          <p>
            The broader Nokomis Community — as the City of Minneapolis
            defines it — includes not just the neighborhood around the lake
            but also the sub-neighborhoods of Keewaydin, Minnehaha, and
            Morris Park to the east, collectively known as Nokomis East.
            These areas share a community council and some infrastructure but
            have distinct characters.{" "}
            <Link href="/neighborhoods/keewaydin" className="text-[#2a9d8f] hover:underline">
              Nokomis East
            </Link>{" "}
            is more diverse, more affordable, and more densely populated than
            the blocks immediately surrounding the lake. When most people in
            Minneapolis say &quot;Nokomis,&quot; they mean the lake
            neighborhood — but the full community is bigger and more
            complicated than that shorthand suggests.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Nokomis Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/nokomis/neighborhood-sign.webp"
          alt="Nokomis neighborhood sign in Minneapolis"
          caption="The Nokomis neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Nokomis History & Origins">
        <Prose>
          <p>
            The land around Lake Nokomis is Dakota homeland — part of the
            territory that the Dakota people inhabited for centuries before
            European colonization. The lake itself was known to the Dakota as
            a resource and a landmark long before it received the name it
            carries today. That name — Nokomis — comes from the Ojibwe word
            for &quot;grandmother&quot; and entered popular culture through
            Henry Wadsworth Longfellow&apos;s 1855 poem <em>The Song of
            Hiawatha</em>, where Nokomis is the grandmother of the title
            character. The poem, which freely mixed and misrepresented
            Indigenous cultures, gave names to much of this part of
            Minneapolis — Hiawatha, Minnehaha, Nokomis — in ways that
            flattened and romanticized the real people who lived here. The
            names stuck. The discomfort with their origins has grown.
          </p>
          <p>
            In the early twentieth century, Lake Nokomis was not the
            picturesque swimming lake it is today. It was a marshy, shallow
            body of water surrounded by wetlands — attractive to mosquitoes
            but not to developers. The Minneapolis Park Board, under the
            leadership of Theodore Wirth, undertook an ambitious dredging and
            landscaping project in the 1910s and 1920s that deepened the
            lake, created the sand beach, and established the parkway that
            rings the shore. This was part of the broader Grand Rounds
            vision — the idea that Minneapolis would be encircled by a
            continuous chain of parks, parkways, and lakes, accessible to all
            residents regardless of income. Nokomis was one of the later
            lakes to be incorporated into that system, and its transformation
            from swamp to swimming beach is one of the more remarkable pieces
            of urban park-making in the country.
          </p>
          <p>
            The residential neighborhood filled in around the newly improved
            lake through the 1920s, 1930s, and 1940s. The housing stock was
            practical and modest — small bungalows, ramblers, and Cape Cods
            built for middle-class and working-class families. Unlike the
            grand houses around Lake of the Isles or the stately blocks of
            Kenwood, Nokomis was built for people with steady jobs and
            limited budgets. The lots were smaller, the houses were simpler,
            and the neighborhood&apos;s appeal was not architectural
            distinction but proximity to a lake that the Park Board had made
            beautiful and free to use. That democratic quality — a lake
            neighborhood for regular people — has been Nokomis&apos;s
            defining characteristic for a century.
          </p>
          <p>
            The postwar decades brought the same forces that reshaped most of
            urban America — suburbanization, white flight, highway
            construction. The Crosstown Highway (62) was built along
            Nokomis&apos;s southern edge in the 1960s, cutting the
            neighborhood off from Richfield and the southern suburbs. Cedar
            Avenue became a busier arterial. But Nokomis, unlike many urban
            neighborhoods, never experienced dramatic decline. The lake kept
            it desirable. The housing stock, while modest, was solid. And the
            neighborhood&apos;s location — far enough from downtown to feel
            suburban, close enough to remain connected — kept it populated
            and stable through decades when other parts of Minneapolis
            struggled.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Nokomis">
        <Prose>
          <p>
            Nokomis is a neighborhood that people move to for the lake and
            stay in for the neighbors. That sounds like boilerplate, but in
            this case it&apos;s true in a specific way: the lake is the
            amenity that gets you in the door, but the community that has
            formed around it — the parents who see each other at the beach
            every summer, the runners who wave on the parkway loop, the
            regulars at the 50th Street coffee shop — is what makes it
            sticky. People who buy a house in Nokomis tend to stay for a
            long time. The turnover rate is lower than you&apos;d expect for
            a neighborhood this affordable, and the reason is that the
            quality of daily life here is quietly excellent.
          </p>
          <p>
            The residential blocks are what South Minneapolis does best —
            tree-lined streets with modest houses on narrow lots, detached
            garages accessed from the alley, front porches that face the
            sidewalk, backyards with swing sets and fire pits. The scale is
            human. You know your neighbors. The mail carrier knows your dog.
            The houses are not impressive individually, but collectively they
            create a texture that is warm, unpretentious, and distinctly
            Minnesotan — a place where people shovel each other&apos;s
            sidewalks in February and share tomatoes from the garden in
            August.
          </p>
          <p>
            The demographic picture has shifted significantly over the past
            two decades, and this is one of the things that makes Nokomis
            more interesting than its quiet-lake-neighborhood reputation
            suggests. The area west of the lake remains predominantly white
            and middle-class, but Nokomis East — the sub-neighborhoods east
            of Cedar Avenue — has become one of the more diverse parts of
            South Minneapolis, with growing Somali, Latino, and other
            immigrant communities. This diversity is most visible along
            Cedar Avenue and in the commercial spaces east of the lake, where
            halal groceries, taco shops, and East African restaurants have
            joined the pizza places and hardware stores that were there
            before. The coexistence is generally peaceful, but it is not
            without friction — and the neighborhood&apos;s identity is
            actively being renegotiated between long-term residents who
            remember a more homogeneous Nokomis and newer arrivals who are
            reshaping what the community looks like.
          </p>
          <p>
            Families are the backbone of the neighborhood. This is a place
            where people have kids and raise them — where the elementary
            school is a community institution, where the beach is the summer
            babysitter, where the parkway loop is the after-dinner walk. The
            family-friendliness is not curated or marketed; it&apos;s just
            the natural result of affordable houses near a lake with a beach
            and a playground. Young families priced out of Linden Hills or
            Fulton have been landing in Nokomis for years, and the
            neighborhood has absorbed them without losing its character.
          </p>
        </Prose>

        <Quote
          text="We looked at every lake neighborhood in the city. Nokomis was the only one where we could afford a house and still walk to the water. Five years later, I can't imagine living anywhere else."
          cite="Nokomis homeowner, parent of two"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Nokomis Food, Drink & Local Spots">
        <Prose>
          <p>
            Nokomis&apos;s food scene is small but genuine — a handful of
            places that range from excellent to essential, anchored by the
            50th Street corridor and the lake itself. This is not a dining
            destination in the way that Northeast or Uptown might be. There
            are no celebrity chefs, no restaurants with PR teams, and no
            place where you need a reservation three weeks out. What there
            is, instead, is a collection of spots that serve the
            neighborhood well and reward anyone willing to look past the
            modest exteriors. The best meals in Nokomis tend to be the ones
            you stumble into — a Thai curry that has no business being this
            good in a strip mall, a seasonal lakeside spot that makes you
            forget you&apos;re in a city, a bowling alley kitchen that takes
            its food more seriously than you expected.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Sandcastle", tag: "Seasonal Lakeside", price: "$$", description: "At the Nokomis Beach main building. Open seasonally (roughly May through September), Sandcastle is the kind of place that only works because of where it sits — directly on the beach at Lake Nokomis, with patio seating that faces the water and a menu of tacos, burgers, and cold drinks designed for people who have sand between their toes. The food is solid, not transcendent, but the setting is unbeatable. On a warm evening, the patio is the best seat in the neighborhood. Lines can be long on summer weekends. Worth it." }} />
          <PlaceCardComponent place={{ name: "Naviya's Thai Brasserie", tag: "Thai", price: "$$", description: "5003 34th Avenue South. One of the best Thai restaurants in the Twin Cities, full stop. Naviya's brings a level of ambition and technique that you don't expect on a quiet South Minneapolis corner — complex curries, beautifully composed dishes, and a cocktail program that takes the cuisine seriously. The space is small and warmly lit. Reservations are a good idea on weekends. This is the restaurant that surprises people who think Nokomis is just bungalows and a beach." }} />
          <PlaceCardComponent place={{ name: "Town Hall Lanes", tag: "Bowling & Kitchen", price: "$$", description: "5019 34th Avenue South. A bowling alley with a kitchen that has no business being this good — craft beer from the Town Hall Brewery family, a menu that goes well beyond nachos and mozzarella sticks, and the low-key social atmosphere of a neighborhood gathering place. Friday nights are busy. The bowling is fun. The food is the real draw." }} />
          <PlaceCardComponent place={{ name: "Bull's Horn", tag: "Bar & Kitchen", price: "$$", description: "4563 34th Avenue South. A neighborhood bar and restaurant serving a thoughtful menu of burgers, sandwiches, salads, and shareable plates alongside craft cocktails and a solid beer list. The kind of place where the staff knows the regulars, the patio fills up on warm evenings, and the overall vibe is relaxed without being lazy. A Nokomis staple." }} />
          <PlaceCardComponent place={{ name: "Sovereign Grounds", tag: "Coffee & Community", price: "$", description: "4812 Chicago Avenue South. A Black-owned coffee shop that has become a community anchor — good coffee, a warm atmosphere, and a sense of purpose that goes beyond the transactional. Art shows, community events, and the kind of place where you feel the neighborhood's identity taking shape." }} />
          <PlaceCardComponent place={{ name: "Nokomis Beach Coffee", tag: "Coffee", price: "$", description: "On the Nokomis Parkway near the beach. Seasonal coffee and pastries in a location that exists because someone understood that what the lakeside walking loop really needed was a place to stop for a latte halfway through. Small, simple, and perfectly situated." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The 50th Street corridor between Cedar Avenue and 34th Avenue
              holds most of the neighborhood&apos;s everyday commercial life —
              a Kowalski&apos;s grocery, a hardware store, a pharmacy, a
              couple of restaurants, and the small-scale retail that keeps a
              neighborhood functional without turning it into a destination.
              East of Cedar, the food landscape shifts — halal markets, taco
              trucks, East African restaurants, and the kind of strip-mall
              gems that reward exploration. The diversity of Nokomis East is
              most legible in its food, and the best way to understand the
              neighborhood&apos;s changing demographics is to eat your way
              along Cedar Avenue.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Nokomis">
        <Prose>
          <p>
            Nokomis is, first and above all else, a lake neighborhood — and
            the lake defines the outdoor life here in a way that is more
            immediate and more democratic than in any other lake community in
            Minneapolis. This is not a lake you admire from a parkway bench
            or a lakeside mansion. This is a lake you swim in, paddleboard
            on, fish from, run around, and build sandcastles beside. The
            public beach is the center of gravity, and the park system that
            surrounds the lake makes the outdoors not just accessible but
            unavoidable. You cannot live in Nokomis and be indifferent to
            the water. It is always there, always pulling you toward it.
          </p>
        </Prose>

        <ArticleSubsection title="Lake Nokomis & the Beach">
          <Prose>
            <p>
              Lake Nokomis is a 207-acre lake in the southern part of the
              Minneapolis Chain of Lakes system, connected to Lake Hiawatha
              and the broader Minnehaha Creek watershed. The main beach — on
              the lake&apos;s north shore — is one of the best public
              swimming beaches in the city, with a sand bottom, a roped
              swimming area, seasonal lifeguards, changing facilities, and a
              playground. A second, smaller beach on the south shore
              (sometimes called the &quot;South Beach&quot;) is quieter and
              preferred by some regulars. The lake is stocked with panfish
              and bass, and fishing from the shore or the docks is a common
              sight.
            </p>
            <p>
              Paddleboarding and kayaking have exploded in popularity on
              Nokomis over the past decade. Rental operations run seasonally
              from the beach area. The lake is small enough to feel intimate
              — you can paddle the entire perimeter in an hour — but big
              enough to absorb a crowd. Winter brings cross-country skiing on
              the parkway trails, ice fishing on the lake, and the occasional
              pickup hockey game on the rinks maintained by the Park Board.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nokomis Parkway & the Bandshell">
          <Prose>
            <p>
              Nokomis Parkway loops the lake — a roughly 2.7-mile circuit
              that is one of the most popular walking, running, and cycling
              routes in South Minneapolis. The parkway is part of the
              Minneapolis Grand Rounds National Scenic Byway, and connects to
              trails heading north toward Lake Hiawatha and Minnehaha Falls,
              and south toward the Crosstown. The Nokomis bandshell, on the
              lake&apos;s northeast shore, hosts free summer concerts and
              community events — the kind of programming that sounds
              unremarkable on paper but creates the moments that people
              remember when they explain why they love living here.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Minnehaha Creek & Connected Green Space">
          <Prose>
            <p>
              Minnehaha Creek flows through the northern part of the Nokomis
              area, connecting Lake Nokomis to Lake Hiawatha to the north and
              eventually to Minnehaha Falls and the Mississippi River. The
              creek corridor provides a green thread that links Nokomis to
              some of the most significant natural areas in the city. Cyclists
              and walkers can follow the creek trail from Nokomis to the falls
              — a ride of a few miles through parkland that barely touches a
              road. The broader park system around Nokomis includes Solomon
              Park, Morris Park, and several smaller green spaces that give
              the neighborhood a greener, more open feel than the housing
              density alone would suggest.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Nokomis Schools">
        <Prose>
          <p>
            Schools in Nokomis are adequate and improving, but they are not
            the primary draw for families the way schools in Fulton or
            Linden Hills might be. The neighborhood is served by Minneapolis
            Public Schools, and the options here reflect the district&apos;s
            broader strengths and challenges — dedicated teachers, diverse
            student bodies, inconsistent test scores, and the kind of
            variation between schools that rewards parents who do their
            research and engage with the enrollment process.
          </p>
          <p>
            Nokomis Community School (PreK–5) is the neighborhood&apos;s
            anchor elementary, located on the south side of the neighborhood
            near the lake. It serves a diverse student body and has a strong
            community connection — the kind of school where families know
            each other and the building functions as a neighborhood
            institution beyond the school day. Kenny Elementary, nearby to
            the west, is another option for families in the area.
          </p>
          <p>
            Roosevelt High School serves the Nokomis area for grades 9–12.
            Roosevelt is one of Minneapolis&apos;s more diverse high schools,
            with a student body that reflects the demographics of the
            surrounding neighborhoods. It offers a range of programming and
            has undergone facility improvements in recent years. As with many
            Minneapolis public high schools, families&apos; experiences vary
            widely, and some opt for magnet programs or open enrollment to
            other schools in the district.
          </p>
          <p>
            Minneapolis Public Schools&apos; open enrollment system means
            that Nokomis families are not limited to their assigned schools.
            Many families access magnet programs, language immersion schools,
            or other options across the district. The school landscape here
            requires more navigation than in neighborhoods with a single,
            dominant, high-performing school — but for families who value
            diversity and community connection, the neighborhood schools
            offer something meaningful that test scores alone don&apos;t
            capture.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Nokomis Real Estate & Housing">
        <Prose>
          <p>
            Nokomis occupies an interesting position in the Minneapolis
            housing market — a lake neighborhood with genuine water access
            that remains significantly more affordable than the city&apos;s
            more famous lake communities. The median home sale price has
            ranged between roughly $300,000 and $450,000 in 2025, compared
            to $550,000–$700,000+ in{" "}
            <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
              Linden Hills
            </Link>
            {" "}or{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            . For buyers who want to live near a lake without committing to a
            Southwest Minneapolis mortgage, Nokomis is the most common
            answer.
          </p>
          <p>
            The price difference reflects real differences in housing stock.
            Nokomis homes are generally smaller and simpler than their
            Southwest counterparts — more bungalows and ramblers, fewer
            colonials and Tudors, smaller lots, and less of the architectural
            polish that drives prices in the lakeside blocks of Linden Hills
            or around Lake Harriet. What your money buys here is access, not
            grandeur — proximity to a lake and a beach and a parkway, in a
            house that is comfortable and functional without being
            magazine-worthy.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end of the market ($275,000–$325,000), you&apos;re
              looking at smaller two-bedroom bungalows or ramblers farther
              from the lake, often needing cosmetic updates — the houses that
              first-time buyers have been snapping up for years. The
              mid-range ($325,000–$425,000) gets you a well-maintained
              three-bedroom bungalow with a finished basement and a detached
              garage, possibly within walking distance of the lake. Above
              $450,000, you&apos;re in updated or expanded territory — homes
              on or near Nokomis Parkway, larger lots, or properties that
              have been thoughtfully renovated while keeping their original
              character.
            </p>
            <p>
              The housing stock is overwhelmingly single-family, with fewer
              duplexes and multifamily buildings than neighborhoods closer to
              downtown. New construction is limited — the neighborhood is
              essentially built out, and teardown-rebuilds are relatively
              uncommon, though not unheard of. When they happen, they tend to
              generate neighborhood debate about scale, character, and
              whether the new structure fits the existing fabric. Some new
              apartment and condo development has occurred along Cedar Avenue,
              adding density at the neighborhood&apos;s edge.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="In Linden Hills, our budget bought a fixer-upper on a busy street. In Nokomis, it bought a move-in-ready house three blocks from the beach. The math was not complicated."
          cite="Recent Nokomis homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Nokomis">
        <Prose>
          <p>
            Nokomis is a solid — not spectacular — neighborhood for getting
            around without a car. The Walk Score of approximately 70 reflects
            a neighborhood where most daily errands can be handled on foot if
            you live near 50th Street, but where the residential blocks can
            feel car-dependent for anything beyond a trip to the lake. The
            Bike Score of 85 is more telling — this is a neighborhood built
            for cycling, with the parkway trails, Grand Rounds connections,
            and relatively flat terrain making two wheels the natural mode
            of transportation for much of the year.
          </p>
          <p>
            Transit is adequate but not exceptional. Metro Transit bus routes
            serve Cedar Avenue (Route 5, one of the busiest bus lines in the
            system), 34th Avenue, and 46th Street, providing connections to
            downtown, the Blue Line light rail, and the broader transit
            network. The Blue Line itself runs along Hiawatha Avenue about a
            mile to the east, with stations at 38th Street and 46th Street
            — reachable by bike or bus but not quite within comfortable
            walking distance for most Nokomis residents. There is no light
            rail station in the immediate neighborhood.
          </p>
          <p>
            By car, downtown Minneapolis is 12–18 minutes depending on
            traffic and route. MSP International Airport is approximately
            12–15 minutes via Crosstown Highway 62 or Cedar Avenue. The
            Crosstown provides easy east-west access to the western suburbs.
            Street parking is abundant on residential blocks and generally
            available on 50th Street, though summer weekends near the beach
            can strain the supply.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Nokomis is a neighborhood in the middle of several simultaneous
            transitions, and the tensions between them are real. None of
            these transitions are crises — Nokomis is not in turmoil, and it
            is not a neighborhood defined by its problems. But an honest
            guide has to name the things that are shifting, because they
            shape the experience of living here and they will shape what the
            neighborhood becomes in the next decade.
          </p>
        </Prose>

        <ArticleSubsection title="Demographic Change and Identity">
          <Prose>
            <p>
              The most significant change in Nokomis over the past two decades
              is demographic. The neighborhood — particularly Nokomis East —
              has become substantially more diverse, with growing Somali,
              Latino, and other immigrant communities joining a population
              that was historically white and middle-class. This change has
              been broadly peaceful and, for many residents, welcome. But it
              has also generated friction — in school board meetings, in
              Nextdoor threads, in the quiet conversations between long-term
              residents who feel the neighborhood they knew is changing faster
              than they expected. The tension is not usually dramatic. It
              shows up in debates about what gets built, what gets funded,
              whose concerns get heard, and who feels ownership over the
              neighborhood&apos;s identity.
            </p>
            <p>
              This is not unique to Nokomis — it is the story of urban
              America in the twenty-first century. But it plays out here with
              particular clarity because the neighborhood is small enough and
              stable enough that the changes are visible and personal. You
              can see the demographic shift on the beach, in the school
              pickup line, at the grocery store. Whether that visibility
              feels like enrichment or displacement depends, in part, on who
              you ask.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Lake Water Quality">
          <Prose>
            <p>
              Lake Nokomis has experienced recurring water quality issues —
              algae blooms, elevated phosphorus levels, and occasional beach
              closures due to elevated E. coli counts. These are not new
              problems, but they have become more frequent and more visible
              in recent years, driven by stormwater runoff, aging
              infrastructure, and the broader effects of climate change on
              shallow urban lakes. For a neighborhood whose identity is built
              around the lake, water quality is not an abstract environmental
              issue — it is a direct quality-of-life concern. When the beach
              closes on a 90-degree day because the bacteria counts are too
              high, the neighborhood feels it.
            </p>
            <p>
              The Minneapolis Park and Recreation Board, the Minnehaha Creek
              Watershed District, and various community organizations are
              actively working on water quality improvements — stormwater
              management, shoreline restoration, and upstream interventions.
              Progress is real but slow. The lake is not in crisis, but it is
              under pressure, and the long-term trajectory will depend on
              sustained investment and attention. Residents who care about
              this issue — and in Nokomis, that is most residents — are
              paying close attention.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Property Crime">
          <Prose>
            <p>
              Like much of Minneapolis, Nokomis experienced an uptick in
              property crime during and after the pandemic — car break-ins,
              catalytic converter thefts, package theft, and occasional garage
              burglaries. The residential blocks remain overwhelmingly safe,
              and violent crime is rare. But the perception of declining
              safety has been a persistent topic on neighborhood social media
              and in community meetings, and it has contributed to anxiety
              that is sometimes disproportionate to the actual data but
              nonetheless shapes how people feel about the neighborhood.
              Nokomis East, with higher density and more commercial activity,
              has been somewhat more affected than the quieter blocks west of
              the lake.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development Pressure">
          <Prose>
            <p>
              The Minneapolis 2040 comprehensive plan — which eliminated
              single-family-only zoning citywide — has generated debate in
              Nokomis as it has across the city. The prospect of duplexes and
              triplexes on historically single-family blocks is welcomed by
              some residents as a necessary step toward affordability and
              density, and resisted by others who fear changes to the
              neighborhood&apos;s scale and character. Along Cedar Avenue, new
              apartment construction has added housing supply but also shifted
              the streetscape in ways that some long-term residents find
              jarring. The 50th Street corridor has seen modest commercial
              turnover, and questions about its future — more restaurants?
              more density? more of the same? — are live in every
              neighborhood planning conversation.
            </p>
            <p>
              The underlying tension is familiar to anyone who follows urban
              housing politics: a neighborhood that is desirable in part
              because of its current form is being asked to change that form
              to accommodate more people. Whether you see that as progress
              or loss depends on your politics, your timeline, and whether
              you already own a house here.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Nokomis FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
