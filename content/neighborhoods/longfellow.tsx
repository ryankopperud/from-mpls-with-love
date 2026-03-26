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
    title: "Longfellow, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Longfellow, Minneapolis — Minnehaha Falls, the Greenway, Lake Street's recovery, housing, schools, restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Longfellow",
  deck: "A South Minneapolis neighborhood shaped by water, fire, and stubborn community pride — where Minnehaha Falls meets the Mississippi, the Greenway carries you across the city on two wheels, and the rebuilding of Lake Street tells you everything about what this place is made of.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Longfellow?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Longfellow" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Longfellow, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~8,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$310K–$375K", label: "Median home sale price range (2025 data)" },
      { value: "53 ft", label: "Height of Minnehaha Falls" },
      { value: "1900s–1940s", label: "Era most homes were built" },
      { value: "5.5 miles", label: "Midtown Greenway through and near the neighborhood" },
      { value: "10–15 min", label: "Drive to downtown Minneapolis" },
      { value: "73", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Longfellow a good neighborhood in Minneapolis?",
      answer:
        "Yes — Longfellow is one of South Minneapolis's most appealing neighborhoods, combining access to Minnehaha Falls, the Mississippi River, and the Midtown Greenway with a strong sense of community identity. It's more affordable than Southwest Minneapolis neighborhoods while offering excellent parks, a growing food scene, and genuine neighborhood character. The area has faced real challenges since 2020 but has demonstrated remarkable community resilience.",
    },
    {
      question: "Is Longfellow, Minneapolis safe?",
      answer:
        "Longfellow's safety picture is nuanced. The neighborhood experienced significant upheaval in 2020 following the murder of George Floyd and the burning of the Third Precinct. Crime — particularly property crime and carjackings — rose sharply in 2020–2022. By 2025–2026, the situation has improved meaningfully, though some areas along Lake Street still feel the effects. Most residential blocks are quiet and neighborly. Like much of Minneapolis, Longfellow is a neighborhood where safety varies by block and context.",
    },
    {
      question: "What is Longfellow, Minneapolis known for?",
      answer:
        "Longfellow is best known for Minnehaha Falls and Minnehaha Regional Park, its proximity to the Mississippi River gorge, the Midtown Greenway bike trail, Moon Palace Books, and Lake Street's corridor of restaurants and small businesses. Since 2020, it has also become known for the Third Precinct protests and the community-led rebuilding effort that followed.",
    },
    {
      question: "How much do homes cost in Longfellow, Minneapolis?",
      answer:
        "Median home sale prices in Longfellow ranged from roughly $310,000 to $375,000 in 2025, close to the citywide median. Smaller bungalows can still be found under $300,000, while renovated or larger homes near Minnehaha Park can reach $450,000–$550,000. Compared to Southwest Minneapolis, Longfellow remains significantly more affordable.",
    },
    {
      question: "Is Longfellow walkable?",
      answer:
        "Longfellow earns a Walk Score of 73 and an exceptional Bike Score of 90. Lake Street and Minnehaha Avenue provide commercial corridors within walking distance for many residents. The Midtown Greenway — a dedicated bike and pedestrian trail running east-west through the neighborhood — is one of the best pieces of cycling infrastructure in the country. For car-free living, Longfellow is one of the stronger options in South Minneapolis.",
    },
    {
      question: "What schools serve Longfellow, Minneapolis?",
      answer:
        "Longfellow is served by several Minneapolis Public Schools. Hiawatha Community School and Sanford Middle School are located within or near the neighborhood. South High School serves the area for grades 9–12. Families also access the district's magnet and citywide enrollment options.",
    },
    {
      question: "What are the best restaurants in Longfellow, Minneapolis?",
      answer:
        "Longfellow's food scene is diverse and independent. Standouts include Sonora Grill (Mexican), Bull's Horn (modern bar and kitchen), Ha Tien Market (Vietnamese), Riverview Cafe (neighborhood coffee institution), and Gandhi Mahal (Indian, rebuilt after 2020). Moon Palace Books, while primarily a bookstore, doubles as a neighborhood gathering place with a cafe.",
    },
    {
      question: "Where exactly is Longfellow in Minneapolis?",
      answer:
        "Longfellow is in South Minneapolis, roughly bounded by East 36th Street to the north, Hiawatha Avenue (Highway 55) to the west, East 46th Street to the south, and the Mississippi River to the east. It sits along the river gorge, south of the University of Minnesota campus and east of the Powderhorn and Standish neighborhoods.",
    },
    {
      question: "What happened in Longfellow in 2020?",
      answer:
        "Following the murder of George Floyd by Minneapolis police on May 25, 2020, Longfellow became the epicenter of the subsequent protests and unrest. The Minneapolis Police Department's Third Precinct station, located on Lake Street in the neighborhood, was set on fire and abandoned on May 28, 2020. Significant portions of Lake Street's commercial corridor were damaged or destroyed. The neighborhood has since been engaged in a long, ongoing process of rebuilding — both physical structures and community trust.",
    },
    {
      question: "Is Longfellow a good place to raise a family?",
      answer:
        "Longfellow has a strong family presence, with affordable housing, excellent parks (especially Minnehaha Regional Park), and a community that actively organizes around family-friendly events. The neighborhood's diversity — racial, economic, generational — is something many families value. Schools are adequate, and families with specific school priorities often use the district's open enrollment to access magnet programs.",
    },
    {
      question: "How far is Longfellow from Minnehaha Falls?",
      answer:
        "Minnehaha Falls is located within Minnehaha Regional Park at the neighborhood's southeastern corner. Most Longfellow residents can reach the falls in 5–15 minutes by foot or bike, making it one of the defining amenities of the neighborhood.",
    },
  ],
  nearby: [
    { name: "Howe", slug: "howe", description: "Quieter streets south of Lake, sharing the Greenway" },
    { name: "Cooper", slug: "cooper", description: "Small-scale neighborhood west of Hiawatha" },
    { name: "Seward", slug: "seward", description: "Co-op culture and community organizing to the north" },
    { name: "Hiawatha", slug: "hiawatha", description: "Light rail access and the evolving Hiawatha corridor" },
    { name: "Minnehaha", slug: "minnehaha", description: "Shares the park and the river's edge" },
    { name: "Standish", slug: "standish", description: "Working-class roots and steady residential blocks" },
  ],
  closing: {
    title: "What Makes Longfellow Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis that are prettier, quieter, wealthier, and easier to explain. Longfellow is not competing on those terms. What it offers is something rarer and harder to manufacture — a place where the river and the falls have been drawing people for thousands of years, where the community has been tested by real crisis and responded not by retreating but by showing up, where the guy at the taco truck knows your order and the woman at the bookstore will argue politics with you for an hour if you let her, where you can bike the Greenway to work and walk to the falls after dinner and feel, despite everything, like you are exactly where you want to be.",
      "Longfellow has scars. It would be dishonest to pretend otherwise. But scars are evidence of healing, not just injury — and the rebuilding that has happened here since 2020, block by block and business by business, is one of the more genuinely hopeful stories in American urban life. This is a neighborhood that knows what it lost. It also knows what it has. And if you spend any time here at all, you will too.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday afternoon in September, the path through Minnehaha
          Regional Park is doing what it always does — carrying people toward
          the sound of falling water. A couple in matching flannel pushes a
          stroller. A group of East African teenagers takes photos at the
          overlook. An older man in a Veterans cap sits on the stone wall
          above the gorge, watching the creek drop fifty-three feet into the
          limestone bowl below, mist rising into the cottonwoods. Below the
          falls, kids scramble over the rocks in the streambed. Upstream, a
          food truck is selling elotes. The whole scene is impossibly alive —
          part state park, part block party, part something sacred that
          nobody needs to name. This is Longfellow on a good day. And even
          after everything this neighborhood has been through, the good days
          still outnumber the bad ones by a wide margin.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/longfellow/hero.webp"
        alt="Minnehaha Falls in early autumn with mist rising from the limestone gorge below"
        caption="Minnehaha Falls — the 53-foot waterfall at the heart of the neighborhood"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Longfellow, Minneapolis?">
        <Prose>
          <p>
            Longfellow is a residential neighborhood in South Minneapolis,
            roughly bounded by East 36th Street to the north, Hiawatha Avenue
            (Highway 55) to the west, East 46th Street to the south, and the
            Mississippi River to the east. It is home to approximately 8,500
            residents and contains one of the most visited natural landmarks in
            Minnesota — Minnehaha Falls — along with several miles of
            Mississippi River frontage, a stretch of the Midtown Greenway, and
            the Lake Street commercial corridor that has become one of the most
            watched stories in urban recovery in the country.
          </p>
          <p>
            The neighborhood sits within the broader &quot;Greater
            Longfellow&quot; community, which includes the adjacent{" "}
            <Link href="/neighborhoods/cooper" className="text-[#2a9d8f] hover:underline">
              Cooper
            </Link>
            ,{" "}
            <Link href="/neighborhoods/howe" className="text-[#2a9d8f] hover:underline">
              Howe
            </Link>
            , and{" "}
            <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
              Hiawatha
            </Link>{" "}
            neighborhoods. When people in Minneapolis say &quot;Longfellow,&quot;
            they sometimes mean the specific neighborhood and sometimes mean the
            whole cluster — context usually makes it clear.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Longfellow Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/longfellow/neighborhood-sign.webp"
          alt="Longfellow neighborhood sign in Minneapolis"
          caption="The Longfellow neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Longfellow History & Origins">
        <Prose>
          <p>
            The land that is now Longfellow has been significant to human
            communities for far longer than Minneapolis has existed. The Dakota
            people — for whom this is ancestral homeland — knew Minnehaha Falls
            as a sacred site, a place of spiritual power at the confluence of
            Minnehaha Creek and the Mississippi River. The name Minnehaha itself
            comes from the Dakota words <em>mni</em> (water) and{" "}
            <em>haha</em> (curling water or waterfall) — &quot;waterfall,&quot;
            not &quot;laughing water&quot; as popular mythology and Henry
            Wadsworth Longfellow&apos;s poem would later suggest. Before
            European settlement, the falls and the river bluffs were gathering
            places, and the surrounding land sustained Dakota communities for
            generations.
          </p>
          <p>
            The neighborhood takes its name from that same poet — Henry
            Wadsworth Longfellow — whose 1855 epic{" "}
            <em>The Song of Hiawatha</em> brought Minnehaha Falls to national
            attention, even though Longfellow himself never visited the site
            before writing the poem. He worked from daguerreotype photographs
            and secondhand accounts, romanticizing and misrepresenting Dakota
            culture in ways that are now widely recognized as harmful. The poem
            made the falls famous, which drove tourism, which accelerated
            development, which created the neighborhood — a chain of causation
            that begins with cultural appropriation and ends with real estate.
            That&apos;s an uncomfortable origin story, but it&apos;s an honest
            one.
          </p>
          <p>
            By the 1880s, Minneapolis was booming as the flour milling capital
            of the world, and the city was expanding rapidly southward from the
            falls of St. Anthony. Minnehaha Falls had already become a popular
            destination — a place where city dwellers took the streetcar on
            weekends to picnic by the water. The Minneapolis Park Board acquired
            the land around the falls in 1889, establishing Minnehaha Park and
            preserving the gorge from industrial development. This was no small
            act of foresight — much of the Mississippi River frontage in the
            Twin Cities was already being consumed by rail yards, mills, and
            factories.
          </p>
          <p>
            The residential neighborhood filled in primarily between 1900 and
            1940. The housing stock reflected its working-class and
            middle-class residents — sturdy Craftsman bungalows, modest
            Foursquares, and simple frame houses built for the families of
            millworkers, railroad employees, and tradespeople who worked along
            the river and in the industrial corridor. Unlike the grand homes of
            Kenwood or the carefully planned blocks of Southwest Minneapolis,
            Longfellow&apos;s housing was practical and unpretentious. Many of
            those original houses — with their deep front porches and narrow
            lots — still stand.
          </p>
          <p>
            The mid-twentieth century brought the changes that reshaped much of
            urban America. Highway 55 (Hiawatha Avenue) was cut through the
            neighborhood&apos;s western edge, severing Longfellow from the
            neighborhoods to its west and establishing a barrier that still
            defines the area&apos;s geography. Industry along the river
            declined. The neighborhood aged. But it never hollowed out the way
            some urban neighborhoods did — the falls, the river, and the park
            kept pulling people in, and the housing stock, while modest, was
            solid enough to reward those who stayed.
          </p>
          <p>
            The opening of the Hiawatha Light Rail Line (now the Blue Line) in
            2004, with a station at 46th Street, brought new transit access and
            new development pressure. The Midtown Greenway — a bike and
            pedestrian trail built in the former railroad trench running
            east-west across South Minneapolis — reached its full extent around
            the same time, making Longfellow one of the best-connected
            neighborhoods in the city for human-powered transportation. These
            two infrastructure investments, more than anything else, set the
            stage for the neighborhood&apos;s twenty-first century
            transformation.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Longfellow">
        <Prose>
          <p>
            Longfellow is not one thing. That&apos;s the first thing to
            understand about living here, and the thing that makes it different
            from many of the more uniform neighborhoods in Southwest Minneapolis
            or the suburbs. Walk a few blocks in any direction and the texture
            changes — the bungalow block gives way to a stretch of duplexes,
            which gives way to a newer apartment building, which gives way to a
            community garden, which gives way to a taco truck. The residential
            streets are quiet — almost surprisingly so, given how much has
            happened here — with mature trees, modest houses, and the kind of
            porches that people actually sit on.
          </p>
          <p>
            The demographic mix is genuinely diverse by Minneapolis standards.
            The neighborhood has long been home to working-class white families,
            and over the past three decades it has become increasingly home to
            Latino, East African (primarily Somali and Oromo), and Southeast
            Asian communities as well. Lake Street, the major commercial
            corridor that runs along the neighborhood&apos;s northern edge, is
            one of the most ethnically diverse commercial strips in the state —
            a place where you can get Vietnamese pho, Somali sambusa, Mexican
            barbacoa, and Ethiopian injera within a few blocks of each other.
            This diversity isn&apos;t performative or curated — it&apos;s the
            result of decades of immigration, affordability, and the way transit
            corridors shape settlement patterns.
          </p>
          <p>
            Community organizing runs deep here. The Longfellow Community
            Council has been active for decades, and the neighborhood has a
            strong tradition of block clubs, mutual aid networks, and civic
            engagement that predates 2020 but intensified dramatically after it.
            When Lake Street burned, it was neighborhood residents — not
            outside organizations — who showed up first to clean debris, board
            up buildings, and set up food distribution. That organizing energy
            hasn&apos;t dissipated. If anything, it&apos;s become part of the
            neighborhood&apos;s identity in a way that attracts a certain kind
            of person — the kind who wants to live somewhere where showing up
            for your community isn&apos;t optional.
          </p>
          <p>
            The vibe, to use a word that Longfellow residents would probably
            resist, is DIY and unpretentious. Artists live here — not because
            it&apos;s been branded an &quot;arts district,&quot; but because the
            rent has historically been manageable and the community tolerates
            weirdness. Young families live here because they can afford a house
            with a yard and still bike to work. Retirees who&apos;ve been in
            their bungalow since the 1970s live next door to grad students
            renting a duplex. The neighborhood doesn&apos;t have a single
            dominant personality. It has several, and they coexist with
            surprising grace.
          </p>
        </Prose>
        <Quote
          text="Longfellow is where you go when you want to be part of something real. It's not curated. It's not polished. But the people here care about this place in a way you can feel."
          cite="Longfellow resident and community organizer"
        />

        <ImageSlot
          src="/images/neighborhoods/longfellow/lake-street.webp"
          alt="Lake Street commercial corridor in Longfellow showing small businesses and pedestrians"
          caption="Lake Street — the neighborhood's commercial spine and site of ongoing recovery"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Longfellow Food, Drink & Local Spots">
        <Prose>
          <p>
            Longfellow&apos;s food scene is eclectic, immigrant-driven, and
            fiercely independent. This is not a neighborhood of polished
            restaurant concepts with PR teams — it&apos;s a neighborhood of
            family-run spots, converted gas stations, and places where the owner
            is also the cook. Some of the best restaurants here survived the
            2020 unrest; some were destroyed and rebuilt; some are new
            arrivals filling the gaps. The turnover has been real, and the
            losses were painful. But what remains — and what has emerged — is a
            food scene with more character per square foot than almost anywhere
            in the metro.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Moon Palace Books", tag: "Bookstore & Cafe", price: "$", url: "https://moonpalacebooks.com", description: "3032 Minnehaha Avenue. Part independent bookstore, part community living room, part cafe, part venue. Moon Palace has become one of the most important cultural institutions in South Minneapolis — a place where you can buy a novel, get a coffee, attend a reading, and overhear three conversations about local politics simultaneously. The bookstore is deeply embedded in the neighborhood's identity and its organizing culture. If Longfellow has a town square, this is it." }} />
          <PlaceCardComponent place={{ name: "Sonora Grill", tag: "Mexican", price: "$–$$", description: "3300 East Lake Street. A Longfellow institution serving generous plates of Mexican food — enchiladas, burritos, carne asada, and some of the best salsa in the neighborhood. The kind of place where families come for Sunday dinner and regulars know the staff by name. Survived 2020 and kept serving." }} />
          <PlaceCardComponent place={{ name: "Bull's Horn", tag: "Bar & Kitchen", price: "$$", description: "2124 East Lake Street. A neighborhood bar and restaurant that has become a gathering place for the post-2020 Longfellow community — craft cocktails, a solid food menu, and the kind of casual warmth that makes you want to stay for a second round. The outdoor patio is packed on summer evenings." }} />
          <PlaceCardComponent place={{ name: "Riverview Cafe", tag: "Coffee & Community", price: "$", description: "3753 42nd Avenue South. A neighborhood coffee shop that has been a Longfellow fixture for years — good coffee, local art on the walls, and the kind of unhurried atmosphere where people actually read the newspaper. Popular with freelancers, retirees, and anyone who prefers their coffee without a corporate logo." }} />
          <PlaceCardComponent place={{ name: "Gandhi Mahal", tag: "Indian", price: "$$", description: "3009 27th Avenue South. An Indian restaurant that became a national symbol of resilience after owner Ruhel Islam responded to his restaurant being burned during the 2020 unrest by saying, 'Let my building burn. Justice needs to be served.' The restaurant has been rebuilt and continues to serve excellent biryani, curry, and tandoori dishes. Eating here is a meal and a statement." }} />
          <PlaceCardComponent place={{ name: "Ha Tien Market", tag: "Vietnamese / Grocery", price: "$", description: "353 University Avenue. A Vietnamese market and deli with some of the best banh mi in the Twin Cities — fresh, cheap, and made to order. The kind of place that food writers have been quietly recommending for years. Also a good source for Southeast Asian groceries and produce." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The Lake Street corridor is home to a rotating cast of food trucks
              and pop-ups, particularly in the warmer months. Midtown Global
              Market — located just west of Longfellow proper in the old Sears
              building on Lake Street — is a multi-vendor food hall featuring
              cuisines from around the world and is an essential stop for anyone
              exploring the area. Numerous small Latino and East African grocery
              stores and restaurants along Lake Street and Minnehaha Avenue round
              out a food landscape that is genuinely global in scope, if modest
              in presentation. Du Nord Craft Spirits, a Black-owned distillery
              and cocktail room nearby, has drawn national attention for both
              its spirits and its community reinvestment work.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Longfellow">
        <Prose>
          <p>
            If there is one thing that makes Longfellow genuinely special —
            the thing that has been drawing people to this stretch of river for
            thousands of years and will continue to draw them long after every
            other feature of the neighborhood has changed — it is the
            landscape. A 53-foot waterfall, a river gorge, miles of trails, and
            one of the best urban parks in the country, all within walking
            distance of a residential neighborhood. You don&apos;t get that in
            most cities. You barely get that in most states.
          </p>
        </Prose>

        <ArticleSubsection title="Minnehaha Falls & Regional Park">
          <Prose>
            <p>
              Minnehaha Falls is a 53-foot waterfall where Minnehaha Creek
              drops over a limestone ledge into a gorge before joining the
              Mississippi River. It is the most visited natural site in
              Minnesota, drawing over 850,000 visitors per year to Minnehaha
              Regional Park — the 193-acre park that surrounds it. The park
              includes hiking trails through the gorge, the Minnehaha Creek
              trail, picnic areas, a bandstand, a sculpture garden, a
              reconstructed depot from the old streetcar line, and the John H.
              Stevens House — the first wood-frame house built on the
              Minneapolis side of the river, relocated here in 1896.
            </p>
            <p>
              In winter, the falls freeze into spectacular ice formations that
              draw photographers and hikers. In summer, the area below the
              falls is a popular wading spot, though the Park Board
              periodically restricts access for safety. The trails through the
              gorge connect to the Mississippi River Trail and the larger Grand
              Rounds National Scenic Byway — Minneapolis&apos;s 72-mile
              network of parks and trails.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/longfellow/minnehaha-falls.webp"
            alt="Minnehaha Falls in full summer flow with visitors at the overlook above"
            caption="Minnehaha Falls draws over 850,000 visitors per year"
          />
        </ArticleSubsection>

        <ArticleSubsection title="The Mississippi River Gorge">
          <Prose>
            <p>
              Longfellow sits along one of the most dramatic stretches of the
              Mississippi River in the Upper Midwest — the river gorge, where
              the Mississippi cuts through limestone bluffs between Minneapolis
              and St. Paul. The gorge is the only true gorge on the entire
              2,340-mile length of the Mississippi, and the trails along its
              rim offer views that feel more like a national park than an urban
              neighborhood. The Ford Parkway pedestrian bridge connects the
              Minneapolis side to the Highland Park neighborhood in St. Paul,
              making for a popular walking and cycling loop.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway is a 5.5-mile dedicated bike and pedestrian
              trail running east-west through South Minneapolis in a former
              railroad trench. It is, by any measure, one of the best pieces of
              urban cycling infrastructure in the United States — grade-separated
              from car traffic, plowed in winter, lit at night, and connected
              to the broader trail network at both ends. For Longfellow
              residents, the Greenway is both a commuting route and a
              recreational trail — a way to get to Uptown, the Chain of Lakes,
              or downtown without ever touching a road. The eastern terminus
              connects to the Minnehaha Trail and the river.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Longfellow Park">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park sits near the center of the
              community and includes a recreation center, playing fields,
              tennis courts, a wading pool, and a playground. It&apos;s the
              kind of neighborhood park that doesn&apos;t make the tourism
              brochures but anchors the daily life of the community — where
              youth soccer leagues play on Saturday mornings, neighbors walk
              their dogs in the evening, and the rec center hosts programming
              year-round. Longfellow Park also features a notable statue of
              Henry Wadsworth Longfellow — a reminder of the neighborhood&apos;s
              namesake and the complicated legacy attached to his work.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Longfellow Schools">
        <Prose>
          <p>
            Schools in Longfellow reflect the neighborhood&apos;s diversity and
            its position within the broader Minneapolis Public Schools system.
            The picture here is more complex than in wealthier Southwest
            Minneapolis neighborhoods — test scores are generally lower,
            resources are more stretched, and families often navigate the
            district&apos;s open enrollment system to find the right fit. But
            the schools that serve this area are deeply community-connected,
            and for families who value diversity and neighborhood
            embeddedness, they offer something that higher-scoring schools in
            more homogeneous neighborhoods cannot.
          </p>
          <p>
            Hiawatha Community School (PreK–5) is a neighborhood elementary
            that serves a significant portion of Longfellow families. Sanford
            Middle School provides the 6–8 pathway. South High School — located
            nearby on East 54th Street — is the area&apos;s comprehensive high
            school, known for its diversity (over 40 home languages spoken),
            its strong music program, and its engaged student body. South
            earns mixed ratings from standardized metrics, but its community
            culture and breadth of programming make it a genuine point of
            pride for many neighborhood families.
          </p>
          <p>
            Minneapolis Public Schools&apos; open enrollment system means that
            Longfellow families are not limited to neighborhood schools. Many
            families access magnet programs and specialty schools across the
            district. Charter schools in the area provide additional options.
            The school landscape here rewards engaged parents who are willing
            to research and navigate options — it is less automatic than the
            pipeline in, say,{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>
            , but it is far from devoid of good choices.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Longfellow Real Estate & Housing">
        <Prose>
          <p>
            Longfellow is one of the more affordable neighborhoods in
            Minneapolis that still offers genuine walkability, park access,
            and neighborhood character — and that combination has not gone
            unnoticed. The median home sale price has ranged between roughly
            $310,000 and $375,000 in 2025, close to the citywide median and
            dramatically below the $600,000+ medians of Southwest Minneapolis
            neighborhoods like Fulton, Linden Hills, or Lynnhurst. For buyers
            priced out of those areas, Longfellow has become an increasingly
            attractive option.
          </p>
          <p>
            The 2020 unrest created a temporary dip in home values,
            particularly for properties near Lake Street and the former Third
            Precinct site. By 2023–2024, prices had largely recovered, and by
            2025 the market was competitive again, though not frenzied. Homes
            sell faster than the national average but not as fast as in the
            hottest Southwest neighborhoods.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              The dominant housing types in Longfellow are Craftsman bungalows
              and simple frame houses from the 1900s through 1940s, sitting on
              narrow lots with deep front porches and detached garages. At
              the lower end of the market ($250,000–$325,000), you&apos;re
              looking at smaller bungalows or duplexes that need updating.
              The mid-range ($325,000–$425,000) gets you a well-maintained
              three-bedroom bungalow or a larger updated home. Above $450,000,
              you&apos;re in renovated territory or looking at homes with
              proximity to the park or the river.
            </p>
            <p>
              Duplexes and triplexes are more common here than in Southwest
              neighborhoods, reflecting Longfellow&apos;s historically
              mixed-income character. Some new construction — particularly
              along Hiawatha Avenue and near the light rail stations — has
              added density in the form of apartments and condominiums.
              Owner-occupancy rates are lower than in Fulton or Linden Hills
              but higher than in denser neighborhoods closer to downtown.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We looked at Fulton, we looked at Nokomis, and we kept coming back to Longfellow. The house was half the price, we could walk to the falls, and the neighbors actually talked to us."
          cite="Recent Longfellow homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Longfellow">
        <Prose>
          <p>
            Longfellow is one of the better-connected neighborhoods in
            Minneapolis for people who don&apos;t want to rely entirely on a
            car — and the infrastructure keeps getting better. The neighborhood
            earns a Walk Score of 73 and an exceptional Bike Score of 90,
            reflecting a combination of dedicated cycling infrastructure,
            proximity to commercial corridors, and a trail network that
            rivals any in the country.
          </p>
          <p>
            The Midtown Greenway is the headline act — a grade-separated bike
            trail that runs the width of South Minneapolis, connecting
            Longfellow to Uptown, the Chain of Lakes, and points west. For
            bike commuters, it&apos;s transformative. The trail is plowed in
            winter (a rarity), lit at night, and connects to both the
            Minnehaha Trail and the Mississippi River Trail at its eastern
            end.
          </p>
          <p>
            The Blue Line light rail runs along Hiawatha Avenue on the
            neighborhood&apos;s western edge, with stations at 38th Street and
            46th Street. This provides direct service to downtown Minneapolis
            (10–15 minutes), the airport (20 minutes), and the Mall of America
            (25–30 minutes). Multiple Metro Transit bus routes serve Lake
            Street, Minnehaha Avenue, and 46th Street.
          </p>
          <p>
            By car, downtown is 10–15 minutes depending on traffic. MSP
            International Airport is approximately 10–15 minutes via Highway
            55. Street parking is generally available on residential blocks,
            though Lake Street parking can be competitive during business
            hours.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/longfellow/greenway.webp"
          alt="The Midtown Greenway bike trail in Longfellow with cyclists commuting on a summer morning"
          caption="The Midtown Greenway — grade-separated cycling infrastructure through the heart of the neighborhood"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Any honest guide to Longfellow has to address 2020. Not as a
            footnote, not as a disclaimer, but as the defining event of the
            neighborhood&apos;s recent history — a rupture that changed the
            physical landscape, the community&apos;s identity, and the way
            residents relate to their city. What happened here was not an
            aberration. It was the result of forces that had been building for
            decades. And the way the neighborhood has responded tells you more
            about its character than any description of the housing stock or
            the Walk Score ever could.
          </p>
        </Prose>

        <ArticleSubsection title="May 2020 and the Third Precinct">
          <Prose>
            <p>
              On May 25, 2020, George Floyd was murdered by Minneapolis police
              officer Derek Chauvin at the intersection of 38th Street and
              Chicago Avenue — just west of Longfellow, in the Powderhorn
              neighborhood. In the days that followed, protests erupted across
              the city and the nation, and Longfellow became the physical
              epicenter of the unrest in Minneapolis. The Minneapolis Police
              Department&apos;s Third Precinct station, located at 3000 Minnehaha
              Avenue, was overrun and set on fire on May 28, 2020, after
              officers abandoned the building. The precinct had long been a
              source of tension in the community — residents had filed
              complaints about aggressive policing, racial profiling, and
              unresponsiveness for years before the crisis.
            </p>
            <p>
              In the days that followed, significant portions of the Lake Street
              commercial corridor were damaged or destroyed by fire and looting.
              Businesses that had served the community for decades — including
              Gandhi Mahal, the post office, and numerous small shops — were
              burned. Target, Cub Foods, and other retailers were looted and
              shuttered. For several days, the neighborhood was without basic
              services — no grocery stores, no pharmacy, limited emergency
              response. Residents organized their own patrols, food
              distribution, and debris cleanup. Mutual aid networks that
              formed during those days continue to operate.
            </p>
            <p>
              It is important to be clear about what happened: the destruction
              was real, the fear was real, and the losses — particularly for
              small business owners, many of whom were immigrants and people of
              color — were devastating. It is equally important to be clear
              about why it happened: the uprising was a response to decades of
              police violence against Black communities in Minneapolis, not a
              random act of destruction. Both of these things are true at the
              same time, and Longfellow residents generally hold both truths
              without flinching.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Rebuilding">
          <Prose>
            <p>
              Six years later, in 2026, the rebuilding of Lake Street is
              substantially advanced but not complete. Some businesses have
              returned. New ones have opened. Several major redevelopment
              projects — including mixed-use buildings with affordable housing
              and ground-floor retail — have broken ground or been completed.
              The former Third Precinct site remains a charged piece of land;
              as of early 2026, plans for its future use have been debated
              extensively within the community, with proposals ranging from a
              community center to green space to a memorial.
            </p>
            <p>
              The recovery has been uneven. Some blocks of Lake Street look
              almost normal. Others still show gaps where buildings stood.
              Insurance disputes, supply chain delays, and the sheer complexity
              of rebuilding in a neighborhood that is simultaneously
              processing collective trauma have slowed the timeline. But the
              trajectory is forward, and the businesses that have opened or
              returned are, in many cases, stronger and more community-connected
              than before. Lake Street Rising, We Love Lake Street, and other
              community-led organizations have raised millions for
              reconstruction and small business support.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Safety">
          <Prose>
            <p>
              Crime — particularly carjackings, property crime, and gun
              violence — rose sharply in Longfellow and across Minneapolis in
              2020–2022, driven by the pandemic, reduced police staffing, and
              the community disruption that followed the unrest. By 2024–2025,
              most crime categories had declined significantly from their
              peaks, though they remained elevated compared to pre-2020
              levels. Residents report that the feeling of safety has improved
              meaningfully, but acknowledge that the neighborhood has not
              fully returned to its pre-2020 baseline — and may never, in
              exactly the same way.
            </p>
            <p>
              The relationship between the neighborhood and the police remains
              complicated. The Third Precinct was not rebuilt in Longfellow;
              police service is now provided from other facilities. Trust in
              MPD is low among many residents, particularly in communities of
              color, and the November 2021 ballot question on replacing the
              police department with a Department of Public Safety revealed
              deep divisions within the neighborhood and the city. What is
              clear is that Longfellow residents — regardless of where they
              fell on that question — care intensely about safety and are
              actively engaged in figuring out what it looks like going
              forward.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Gentrification and Displacement">
          <Prose>
            <p>
              Even as Longfellow recovers from crisis, it faces a more
              familiar urban tension: the pressure of rising desirability in a
              neighborhood where affordability has been a defining feature.
              The same qualities that make Longfellow attractive to young
              professionals and homebuyers — the Greenway, the falls, the
              diversity, the community culture — can, paradoxically, erode
              those qualities by driving up prices and displacing the people
              who created them. New construction along Hiawatha Avenue and
              near the light rail stations has added housing supply, but not
              all of it is affordable. Long-term renters, particularly in
              communities of color, have expressed concern about being priced
              out of a neighborhood they helped build.
            </p>
            <p>
              This is not a crisis unique to Longfellow — it&apos;s the central
              tension of desirable urban neighborhoods across America. But it
              carries particular weight here, where the community has
              explicitly organized around values of inclusion and equity. The
              question of whether Longfellow can remain the diverse,
              mixed-income neighborhood it has been is not hypothetical — it
              is being answered, block by block, every time a house sells or a
              lease is renewed.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Longfellow FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
