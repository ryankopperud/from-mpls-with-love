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
    title: "Downtown East, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Downtown East, Minneapolis — the Mill District, US Bank Stadium, Stone Arch Bridge, luxury condos, the Guthrie Theater, light rail, restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Downtown East",
  deck: "A neighborhood built on flour dust and river power — where 19th-century mill ruins share the skyline with a billion-dollar stadium, the Guthrie Theater cantilevers over the Mississippi, and the question of who downtown belongs to plays out every single day on the sidewalks between The Commons and the train tracks.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Downtown East?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Downtown East" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Downtown East, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~12,000", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$275K–$650K", label: "Median condo sale price range (2025 data)" },
      { value: "1880", label: "Year the Washburn A Mill was built" },
      { value: "66,655", label: "US Bank Stadium capacity" },
      { value: "4.2 acres", label: "The Commons park" },
      { value: "2 lines", label: "Light rail lines serving the neighborhood (Blue & Green)" },
      { value: "95", label: "Walk Score" },
      { value: "85", label: "Transit Score" },
    ],
  },
  faq: [
    {
      question: "Is Downtown East a good neighborhood in Minneapolis?",
      answer:
        "Downtown East is one of the most walkable and culturally rich neighborhoods in Minneapolis, offering immediate access to the Guthrie Theater, Mill City Museum, Stone Arch Bridge, and the Mississippi riverfront. It suits people who want an urban, car-optional lifestyle with world-class amenities at their doorstep. It is not for everyone — the neighborhood is loud on game days, expensive by Minneapolis standards, and still working through the growing pains of a district that has transformed almost entirely in the last two decades.",
    },
    {
      question: "Is Downtown East, Minneapolis safe?",
      answer:
        "Safety in Downtown East is a complicated picture. The neighborhood benefits from heavy foot traffic, good lighting, and a dense built environment. However, like all of downtown Minneapolis, it experienced elevated crime between 2020 and 2023 — particularly property crime, car break-ins, and occasional violent incidents. By 2025–2026, the situation has improved, but homelessness and encampments remain visible, and some residents feel less safe after dark than they did pre-pandemic. The area around US Bank Stadium and The Commons is well-monitored; blocks closer to the freeway and rail corridors require more awareness.",
    },
    {
      question: "What is Downtown East, Minneapolis known for?",
      answer:
        "Downtown East is known for US Bank Stadium (home of the Minnesota Vikings), the Guthrie Theater, Mill City Museum, the Stone Arch Bridge, Gold Medal Park, and the Mill District's historic flour milling heritage. It is also known as the epicenter of Minneapolis's luxury condo boom and as one of the city's best neighborhoods for car-free living.",
    },
    {
      question: "How much do condos cost in Downtown East?",
      answer:
        "Condo prices in Downtown East vary widely depending on the building and the view. Studios and one-bedrooms start around $200,000–$275,000. Two-bedroom units in newer buildings typically range from $350,000 to $550,000. High-end units with river views in buildings like the Carlyle or Portland Tower can exceed $700,000–$1,000,000. Rental apartments range from roughly $1,400 for a studio to $3,000+ for a two-bedroom in a newer building.",
    },
    {
      question: "What is the Mill District in Minneapolis?",
      answer:
        "The Mill District is the historic heart of Downtown East — the area along the Mississippi River where Minneapolis's flour milling industry was concentrated in the late 19th and early 20th centuries. Minneapolis was the flour milling capital of the world from the 1880s through the 1930s, and the ruins of those mills — including the Washburn A Mill (now Mill City Museum) and the adjacent Gold Medal Flour complex — are preserved as part of the Mill Ruins Park and the St. Anthony Falls Historic District. The area has been redeveloped into condos, lofts, restaurants, and cultural institutions while retaining its industrial character.",
    },
    {
      question: "Is Downtown East walkable?",
      answer:
        "Extremely. Downtown East earns a Walk Score of approximately 95 and a Transit Score of 85, making it one of the most walkable neighborhoods in the entire state of Minnesota. Groceries, restaurants, cultural venues, parks, and transit are all accessible on foot. The Blue and Green light rail lines stop within the neighborhood, providing direct service to the airport, Mall of America, St. Paul, and destinations across the metro. Many residents live car-free by choice.",
    },
    {
      question: "What is it like living downtown on game days?",
      answer:
        "Game days at US Bank Stadium transform Downtown East. Tens of thousands of fans flood the neighborhood hours before kickoff, filling restaurants and bars, tailgating in parking lots, and creating a festival atmosphere that can be thrilling or exhausting depending on your perspective. Traffic, noise, and crowds peak on Vikings Sundays, major concerts, and events like the Final Four. Residents who embrace it love the energy. Residents who don't learn to plan around it — leaving early, staying in, or heading to a quieter part of the city. The stadium hosts roughly 40–50 major events per year.",
    },
    {
      question: "What schools serve Downtown East?",
      answer:
        "Downtown East has limited dedicated school options within walking distance. The nearest Minneapolis Public Schools elementary is Marcy Open School in the Marcy-Holmes neighborhood. Families in Downtown East typically access the district's citywide enrollment and magnet programs, or choose from charter and private schools in the broader downtown area. The neighborhood's demographic skews younger professionals and empty nesters, so the school question affects fewer residents than in traditional family neighborhoods.",
    },
    {
      question: "Where exactly is Downtown East in Minneapolis?",
      answer:
        "Downtown East occupies the southeastern portion of downtown Minneapolis, roughly bounded by Hennepin Avenue to the west, the railroad tracks and I-35W to the south, the Mississippi River to the east, and University Avenue to the north. It encompasses the Mill District, the US Bank Stadium area, East Town, and The Commons park. It sits across the river from the Marcy-Holmes and St. Anthony neighborhoods in Northeast Minneapolis.",
    },
    {
      question: "Can you live in Downtown East without a car?",
      answer:
        "Yes — Downtown East is one of the best neighborhoods in the Twin Cities for car-free living. The Blue and Green light rail lines provide frequent service to downtown, the airport, St. Paul, and suburban destinations. Multiple bus routes serve the area. The neighborhood's Walk Score of 95 means daily errands are easily accomplished on foot. Bike infrastructure connects to the Stone Arch Bridge, the riverfront trails, and the broader city trail network. Many buildings offer bike storage, and Nice Ride bikeshare stations are common. The main limitation is access to suburban destinations and big-box retail, which may require occasional rideshare or car rental.",
    },
    {
      question: "What happened to Owamni restaurant?",
      answer:
        "Owamni by the Sioux Chef, the groundbreaking Indigenous restaurant located in the Water Works building along the riverfront, closed in late 2023 after winning a James Beard Award for Best New Restaurant in 2022. Chef Sean Sherman cited financial pressures and the challenges of operating a fine-dining restaurant in a post-pandemic downtown. Its closure was a significant cultural loss for the neighborhood and the city. The space's future use remains a topic of discussion as of early 2026.",
    },
  ],
  nearby: [
    { name: "North Loop", slug: "north-loop", description: "Warehouse lofts and the city's restaurant epicenter" },
    { name: "Elliot Park", slug: "elliot-park", description: "Healthcare corridor and affordable housing next door" },
    { name: "Marcy-Holmes", slug: "marcy-holmes", description: "Across the river, student energy and old Victorian houses" },
    { name: "Cedar-Riverside", slug: "cedar-riverside", description: "The West Bank's density, diversity, and university life" },
    { name: "St. Anthony", slug: "st-anthony", description: "Main Street charm on the east bank of the falls" },
    { name: "Loring Park", slug: "loring-park", description: "The park, the Walker, and downtown's western edge" },
  ],
  closing: {
    title: "What Makes Downtown East Irreplaceable",
    paragraphs: [
      "There are easier places to live in Minneapolis. Quieter places, cheaper places, places where you don&apos;t have to navigate 66,000 football fans to get to your front door on a Sunday afternoon. Downtown East does not compete on comfort or convenience in the traditional suburban sense. What it offers is something else entirely — a place where you can walk from the ruins of a 19th-century flour mill to a cantilevered theater to a glass-walled stadium to a riverside park in twenty minutes, where the entire arc of Minneapolis&apos;s history is visible in the built environment, where the river that made this city possible is right there, flowing past your window.",
      "The neighborhood is still becoming itself. The Mill District was rubble and rail yards twenty-five years ago. The Commons didn&apos;t exist a decade ago. The stadium is barely ten years old. The tensions — between event-day spectacle and everyday livability, between luxury development and public access, between the people who sleep in the skyways and the people who live in the penthouses — are real and unresolved. But that is what makes this place alive. Downtown East is not a finished product. It is a city in the act of deciding what it wants to be. And if you live here, you are part of that decision every single day.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Sunday in October, the contradictions of Downtown East are on
          full display within a quarter-mile radius. At US Bank Stadium, 66,000
          people in purple jerseys are roaring at a third-down conversion, the
          noise leaking through the glass panels and rolling across the
          plaza. At Gold Medal Park, a woman is reading on a bench beneath
          the spiral earthwork mound, unbothered. On the Stone Arch Bridge, a
          photographer is shooting the St. Anthony Falls with the mill ruins
          in the background — the same composition that has been photographed
          roughly ten million times, and yet it still works. Along the
          riverfront trail, runners pass a man sleeping under a blanket near
          the Water Works building. In the lobby of the Guthrie, someone is
          buying tickets to a matinee of an August Wilson play. A light rail
          train pulls into the US Bank Stadium station, disgorging another
          wave of fans. And through all of it, the Mississippi keeps moving —
          the same river that powered the flour mills, that made this city
          possible, that doesn&apos;t care about any of this.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/downtown-east/hero.webp"
        alt="The Minneapolis skyline from the Stone Arch Bridge with St. Anthony Falls and the Mill District ruins in the foreground"
        caption="The Stone Arch Bridge and the Mill District — where Minneapolis began"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Downtown East, Minneapolis?">
        <Prose>
          <p>
            Downtown East is the southeastern quadrant of downtown Minneapolis,
            occupying the stretch of riverfront where the city was born. It is
            roughly bounded by Hennepin Avenue to the west, the railroad
            corridor and I-35W to the south, the Mississippi River to the east
            and north, and University Avenue at its northern edge. The
            neighborhood encompasses what locals call the Mill District — the
            historic flour milling quarter along the river — as well as the
            East Town area around US Bank Stadium and The Commons park. It is
            home to approximately 12,000 residents, most of them living in
            the condominiums and apartment towers that have risen over the
            past two decades on land that was, not long ago, rail yards and
            industrial ruins.
          </p>
          <p>
            This is not a traditional Minneapolis neighborhood in any
            meaningful sense. There are no bungalows, no front porches, no
            block clubs grilling in the alley on the Fourth of July. Downtown
            East is vertical, dense, and still new enough that it smells
            faintly of construction adhesive in places. What it offers
            instead is something most of Minneapolis cannot — genuine urban
            living at a walkable, transit-connected, culturally saturated
            scale, set against a riverfront that happens to be one of the most
            historically significant sites in the American Midwest. The{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>{" "}
            gets more food press.{" "}
            <Link href="/neighborhoods/loring-park" className="text-[#2a9d8f] hover:underline">
              Loring Park
            </Link>{" "}
            has been urban longer. But Downtown East has the river, the ruins,
            and the ambition — and in Minneapolis, that combination is hard
            to beat.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Downtown East Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/downtown-east/neighborhood-sign.webp"
          alt="Downtown East neighborhood sign in Minneapolis"
          caption="The Downtown East neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Downtown East History & Origins">
        <Prose>
          <p>
            To understand Downtown East, you have to understand flour — and
            the waterfall that made it possible. St. Anthony Falls is the only
            major natural waterfall on the entire 2,340-mile length of the
            Mississippi River. The Dakota people knew it as Owámniyomni — a
            sacred site, a place of spiritual significance, and a practical
            resource that sustained communities for centuries before European
            arrival. When Euro-American settlers reached the falls in the
            mid-19th century, they saw something else: power. Raw, mechanical,
            inexhaustible power.
          </p>
          <p>
            By the 1870s, Minneapolis had harnessed the falls to drive flour
            mills on an industrial scale that the world had never seen. The
            Washburn-Crosby Company (later General Mills) built its massive
            Washburn A Mill on the riverbank in 1874 — it exploded in 1878,
            killing eighteen workers, and was rebuilt bigger in 1880. The
            Pillsbury A Mill rose across the river. Gold Medal Flour became a
            household name. At its peak in the 1880s and 1890s, Minneapolis
            was producing more flour than any city on earth — the flour
            milling capital of the world — and the district that is now
            Downtown East was the engine room of that empire. The air smelled
            like wheat dust. The ground shook with the vibration of
            millstones. Rail cars lined up for blocks to carry flour to the
            eastern seaboard and beyond.
          </p>
          <p>
            The milling era ended slowly, then all at once. Competition from
            Buffalo, changes in milling technology, and the declining
            importance of waterpower eroded Minneapolis&apos;s dominance
            through the early 20th century. The last major mill closed in
            1965. What remained was a landscape of abandoned industrial
            buildings, rail yards, and crumbling infrastructure along the
            riverfront — a district that most Minneapolis residents simply
            drove past on their way somewhere else. For decades, this stretch
            of the Mississippi was essentially a dead zone within the city.
          </p>
          <p>
            The revival began in the 1990s with historic preservation efforts
            and a citywide recognition that the riverfront — Minneapolis&apos;s
            reason for existing — should not be a wasteland. The Stone Arch
            Bridge, a former railroad bridge built by James J. Hill in 1883,
            was converted to pedestrian and bicycle use in 1994. Mill Ruins
            Park opened in 2001, incorporating the archaeological remains of
            the mills into a public park. The Guthrie Theater moved from its
            original Vineland Place location to a striking new Jean
            Nouvel–designed building on the riverfront in 2006. Mill City
            Museum — built into the ruins of the Washburn A Mill — opened in
            2003. And the condos started going up.
          </p>
          <p>
            The second wave of transformation came with US Bank Stadium, which
            opened in 2016 on the site of the former Metrodome. The $1.1
            billion stadium brought with it The Commons — a 4.2-acre park
            that serves as the stadium&apos;s front lawn and the
            neighborhood&apos;s primary green space — and an explosion of
            hotel, residential, and commercial development in the surrounding
            blocks. The East Town area, which had been largely parking lots
            and low-rise commercial buildings, became a construction zone that
            has only recently begun to feel like a finished neighborhood.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/downtown-east/mill-ruins.webp"
          alt="Mill Ruins Park along the Minneapolis riverfront with the remains of 19th-century flour mills"
          caption="Mill Ruins Park — the archaeological remains of the flour mills that made Minneapolis"
        />
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Downtown East">
        <Prose>
          <p>
            Living in Downtown East is not like living in the rest of
            Minneapolis. It is not even like living in the rest of downtown.
            The neighborhood has a particular rhythm — quiet on weekday
            mornings, buzzing on weekend evenings, and absolutely unhinged on
            game days — that takes some adjustment if you&apos;re coming from
            a residential neighborhood where the biggest disruption is a
            neighbor&apos;s lawnmower. The trade-off is that you get to live
            in the most culturally dense square mile in the state, with a
            world-class theater, a major museum, a professional sports
            stadium, and the Mississippi River all within a ten-minute walk
            of your front door. For the right person, that trade-off isn&apos;t
            even close.
          </p>
          <p>
            The resident profile skews younger professionals, empty nesters
            who&apos;ve sold the suburban house, and a scattering of committed
            urbanists who genuinely prefer concrete to grass. Families with
            children exist but are relatively rare — the neighborhood is not
            set up for that life in the way that, say,{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>{" "}
            or{" "}
            <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
              Longfellow
            </Link>{" "}
            are. Dog ownership is high. Balcony gardening is an art form.
            People know their barista and their doorman but may not know the
            name of the person in the unit next door. This is not a criticism —
            it is the nature of vertical urban living, and most people who
            choose Downtown East have chosen it deliberately.
          </p>
          <p>
            The Mill District end of the neighborhood — the stretch along the
            river from the Guthrie to the Stone Arch Bridge — has the most
            character. The buildings here are a mix of converted industrial
            lofts (the Whitney, the Washburn Lofts) and newer construction
            that at least tries to honor the industrial scale and materiality
            of the old mills. Exposed brick, timber beams, oversized windows —
            the aesthetic is genuine in the older buildings and aspirational
            in the new ones. The East Town end, closer to the stadium, is
            shinier and more generic — the architecture of a city trying very
            hard to look like every other city that has built a stadium
            district in the last twenty years. It is functional, clean, and
            almost entirely without soul. Give it time.
          </p>
          <p>
            What holds the neighborhood together — what gives it an identity
            beyond &quot;downtown condos near a stadium&quot; — is the
            riverfront. The Mississippi is right there. You can see it from
            the Guthrie&apos;s Endless Bridge. You can walk along it on the
            trails that run from Boom Island down through Mill Ruins Park to
            the Stone Arch Bridge and beyond. You can hear the falls from
            certain balconies on quiet nights. The river is the thing that
            made this place matter 150 years ago, and it is the thing that
            makes it matter now. Everything else — the stadium, the condos,
            the restaurants — is built on top of that foundation.
          </p>
        </Prose>
        <Quote
          text="I sold my house in Edina and moved into a condo overlooking the river. My friends thought I was crazy. But I walk to the Guthrie, I walk to dinner, I walk along the river every morning. I haven&apos;t been this happy in twenty years."
          cite="Downtown East resident, former suburbanite"
        />

        <ImageSlot
          src="/images/neighborhoods/downtown-east/guthrie.webp"
          alt="The Guthrie Theater's blue cantilever extending over the riverfront in Downtown East Minneapolis"
          caption="The Guthrie Theater — Jean Nouvel's 2006 building cantilevered over the Mill District"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Downtown East Food, Drink & Local Spots">
        <Prose>
          <p>
            Downtown East&apos;s food scene is smaller and more curated than
            the{" "}
            <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
              North Loop
            </Link>
            &apos;s, but it has its own identity — one shaped by proximity to
            the theater, the stadium, and the riverfront. The restaurants here
            tend toward polished rather than scrappy, destination rather than
            neighborhood. That&apos;s both a strength and a limitation. You
            can eat very well in Downtown East. You may struggle to find the
            kind of unpretentious, everyday spot where you&apos;d grab a
            Tuesday night dinner without thinking about it. The gap between
            &quot;special occasion&quot; and &quot;nothing&quot; is wider
            here than in more established residential neighborhoods.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Borough", tag: "New American", price: "$$–$$$", description: "730 South Washington Avenue. A Mill District mainstay serving thoughtful, ingredient-driven food in a space that manages to feel both polished and relaxed. The menu leans on local sourcing and seasonal shifts — roasted bone marrow, duck confit, wood-fired dishes — with a bar program that takes cocktails seriously without being precious about it. A pre-Guthrie dinner here is one of the better evenings you can have in Minneapolis." }} />
          <PlaceCardComponent place={{ name: "Spoon and Stable", tag: "French-Inspired", price: "$$$", description: "211 North 1st Street. Technically in the North Loop, but close enough to Downtown East that residents claim it. Chef Gavin Kaysen's flagship has been one of the best restaurants in Minneapolis since it opened in 2014 — refined French technique applied to Midwestern ingredients in a beautifully restored stable building. The bar menu is more accessible; the dining room is a splurge worth making." }} />
          <PlaceCardComponent place={{ name: "Owamni (Closed)", tag: "Indigenous / Historic", price: "$$$", description: "425 West River Parkway. Chef Sean Sherman's groundbreaking Indigenous restaurant operated in the Water Works building from 2021 to late 2023, winning a James Beard Award for Best New Restaurant in 2022. It decolonized the American menu — no wheat, no dairy, no cane sugar — and the loss of it still stings. Mentioned here because you cannot write honestly about Downtown East's food scene without acknowledging what was here and what it meant." }} />
          <PlaceCardComponent place={{ name: "Mill City Museum Farmers Market", tag: "Farmers Market", price: "$–$$", description: "704 South 2nd Street. Every Saturday from May through October, the plaza outside Mill City Museum hosts one of the best farmers markets in the Twin Cities — local produce, artisan bread, cheese, prepared foods, and the kind of crowd that makes you feel like this city has its priorities right. Not a restaurant, but a food institution." }} />
          <PlaceCardComponent place={{ name: "The Commons Hotel Bar", tag: "Hotel Bar", price: "$$", description: "615 Washington Avenue SE. A solid hotel bar near the University of Minnesota with craft cocktails and a menu of elevated bar food. A reliable option for a drink before or after an event, with the kind of comfortable anonymity that hotel bars do well." }} />
          <PlaceCardComponent place={{ name: "Eastside", tag: "Casual Dining", price: "$$", description: "Located in the East Town area near The Commons, serving burgers, sandwiches, and salads for the lunchtime office crowd and game-day visitors. Nothing revelatory, but dependable — the kind of place you need when you just want to eat without making a decision." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The stadium district has attracted the kind of restaurants that
              stadium districts always attract — sports bars, fast-casual
              chains, and places optimized for volume over quality. These
              serve a purpose on game day. They are not reasons to live here.
              The more interesting eating happens in the Mill District, along
              Washington Avenue, and increasingly in the blocks south of the
              stadium where new development is bringing ground-floor retail.
              For serious grocery shopping, residents rely on the Target
              downtown or make the short trip to the Lunds & Byerlys in the{" "}
              <Link href="/neighborhoods/north-loop" className="text-[#2a9d8f] hover:underline">
                North Loop
              </Link>
              . A full-service grocery within the neighborhood remains one of
              Downtown East&apos;s most persistent gaps.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors / Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors in Downtown East">
        <Prose>
          <p>
            Downtown East has an unusual relationship with outdoor space —
            it has more of it than most people expect, and almost all of it
            is historically or culturally significant. This is not a
            neighborhood of neighborhood parks with swing sets and baseball
            diamonds. It is a neighborhood where the parks are built on top
            of mill ruins, where the walking trails follow the course of a
            river that once powered an industry, and where the cultural
            institutions are embedded in the landscape rather than set apart
            from it.
          </p>
        </Prose>

        <ArticleSubsection title="Stone Arch Bridge & St. Anthony Falls">
          <Prose>
            <p>
              The Stone Arch Bridge is a 2,100-foot granite and limestone
              railroad bridge built by James J. Hill in 1883 to carry his
              Great Northern Railway across the Mississippi. It is one of only
              two stone arch bridges on the entire Mississippi, and its gentle
              curve across the river — directly above St. Anthony Falls —
              provides what may be the single best vantage point in
              Minneapolis. Converted to pedestrian and bicycle use in 1994,
              it now carries roughly 4,000 crossings per day in summer and
              connects Downtown East to the{" "}
              <Link href="/neighborhoods/st-anthony" className="text-[#2a9d8f] hover:underline">
                St. Anthony
              </Link>{" "}
              neighborhood on the east bank. At sunset, with the falls
              thundering below and the skyline glowing behind you, it is
              genuinely difficult to believe you are standing in the middle
              of a Midwestern city.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Mill Ruins Park & Water Power Park">
          <Prose>
            <p>
              Mill Ruins Park, opened in 2001, is built on and around the
              archaeological remains of the flour mills that once lined the
              riverbank. The ruins — stone foundations, millrace channels,
              turbine pits — are incorporated into the park design, visible
              through grates and along walking paths. Interpretive signage
              explains what you&apos;re looking at, but the ruins themselves
              are eloquent enough. This is where Minneapolis happened. The
              park connects to Water Power Park, a smaller green space near
              the falls that offers views of the dam and the river&apos;s
              turbulent descent.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Gold Medal Park">
          <Prose>
            <p>
              Gold Medal Park is a 7.5-acre green space in the Mill District,
              named for the Gold Medal Flour brand that was milled here. Its
              centerpiece is a 32-foot spiral earthwork mound — a land art
              piece designed by landscape architects Oslund and Associates —
              that provides elevated views of the river, the Guthrie, and the
              surrounding historic buildings. The park is popular with dog
              walkers, runners, and residents of the surrounding condos. It
              has the slightly manicured quality of a park designed for a
              luxury development, which is exactly what it is. But the views
              are real, and the proximity to the river is earned.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Commons">
          <Prose>
            <p>
              The Commons is a 4.2-acre park between US Bank Stadium and the
              Downtown East residential development. Opened in 2016 alongside
              the stadium, it was designed to serve as both a public park and
              an event gathering space — a dual purpose that works better on
              some days than others. On a quiet Wednesday, it&apos;s a
              pleasant urban green space with water features, seating, and
              open lawn. On a Vikings game day, it&apos;s a sea of purple
              tailgaters. The park has struggled with some of the same
              challenges facing downtown public spaces across the country —
              visible homelessness, occasional safety concerns, and the
              tension between being a park for everyone and a park that
              serves a specific development agenda.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Guthrie Theater & Mill City Museum">
          <Prose>
            <p>
              The Guthrie Theater, designed by French architect Jean Nouvel
              and opened in 2006, is one of the most important regional
              theaters in the United States — a Tony Award–winning institution
              that produces everything from Shakespeare to world premieres.
              The building itself is a landmark: a dark blue industrial-scaled
              structure with a cantilevered &quot;Endless Bridge&quot; that
              extends 178 feet over the riverfront, offering panoramic views
              of the falls and the Mill District. You do not have to buy a
              ticket to walk the bridge or visit the lobby. Many Downtown
              East residents treat the Guthrie as an extension of their
              living room.
            </p>
            <p>
              Mill City Museum, operated by the Minnesota Historical Society,
              is built into the ruins of the Washburn A Mill. The museum
              tells the story of Minneapolis&apos;s flour milling industry
              through exhibits, a ride-through &quot;Flour Tower&quot;
              experience, and the sheer physical presence of the ruined mill
              walls that form the building&apos;s exterior. The rooftop
              observation deck offers one of the best views in the city. On
              Saturdays in season, the Mill City Farmers Market fills the
              adjacent plaza.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/downtown-east/stone-arch-bridge.webp"
            alt="Stone Arch Bridge spanning the Mississippi River with St. Anthony Falls below and downtown Minneapolis skyline behind"
            caption="The Stone Arch Bridge — 2,100 feet of granite and limestone above the only waterfall on the Mississippi"
          />
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Downtown East Schools">
        <Prose>
          <p>
            Let&apos;s be direct: Downtown East is not where most families
            with school-age children choose to live, and the school
            infrastructure reflects that reality. There are no elementary,
            middle, or high schools located within the neighborhood&apos;s
            boundaries. Families with children in Downtown East typically
            access Minneapolis Public Schools through the district&apos;s
            citywide enrollment system — Marcy Open School, in the nearby{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy-Holmes
            </Link>{" "}
            neighborhood, is a popular choice for elementary-age children.
            Downtown-adjacent charter schools and private options (including
            the International School of Minnesota) serve some families.
          </p>
          <p>
            For high school, families look to the broader Minneapolis system —
            South High, Southwest High, and various magnet programs are all
            accessible. The University of Minnesota campus, immediately across
            the river, provides cultural and educational programming that
            some families take advantage of, though it is obviously not a K-12
            option. The bottom line: if schools are a primary factor in your
            housing decision, Downtown East is probably not your first choice.
            If you&apos;re a young professional, an empty nester, or someone
            without school-age children, this consideration is irrelevant.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Downtown East Real Estate & Housing">
        <Prose>
          <p>
            Downtown East&apos;s housing market is almost entirely condominiums
            and rental apartments — a reflection of its relatively recent
            development and its urban density. There are no single-family
            homes. There are no duplexes. The entire housing stock was built
            or converted within the last twenty-five years, which means
            modern amenities but also the occasionally soulless finishes of
            speculative development. The best units are in the Mill District
            lofts and the river-facing towers; the most generic are in the
            newer East Town buildings that prioritize unit count over
            character.
          </p>
          <p>
            Prices vary dramatically by building, floor, and view. Studios and
            one-bedrooms in older or less prominent buildings can be found for
            $200,000–$275,000. Two-bedroom units in good buildings with decent
            views typically range from $350,000 to $550,000. River-view units
            in premium buildings — the Carlyle, Portland Tower, the Mill
            District lofts — can run $700,000 to over $1,000,000. HOA fees
            are a significant factor in Downtown East, often ranging from
            $300 to $800 per month depending on the building and its
            amenities. Factor these in before falling in love with a listing
            price.
          </p>
        </Prose>

        <ArticleSubsection title="The Rental Market">
          <Prose>
            <p>
              A significant portion of Downtown East residents rent rather
              than own. New apartment buildings have been going up steadily
              since 2016, adding thousands of units to the market. Studios
              start around $1,400; one-bedrooms range from $1,600 to $2,200;
              two-bedrooms run $2,200 to $3,500+ depending on the building.
              The rental market softened somewhat during the pandemic-era
              flight from downtown but has stabilized by 2025–2026.
              Concessions (free month, waived fees) are less common than they
              were in 2021 but still appear in buildings trying to fill new
              inventory.
            </p>
            <p>
              The buildings themselves range from the genuinely interesting
              (converted mill lofts with timber beams and industrial
              character) to the relentlessly mediocre (new construction with
              gray-toned finishes, quartz counters, and amenity decks that
              look identical from Portland to Portland). If character matters
              to you, look at the Mill District buildings first. If amenities
              matter more, the newer East Town towers have the rooftop pools
              and fitness centers.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="The condo I bought in the Mill District has exposed brick from the original warehouse, timber beams, and a view of the river from every room. I&apos;ve lived in New York and Chicago, and this is the best urban space I&apos;ve ever had — for a third of the price."
          cite="Mill District condo owner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Downtown East">
        <Prose>
          <p>
            Downtown East is, by the numbers, one of the most walkable and
            transit-accessible neighborhoods in Minnesota — and for once, the
            numbers aren&apos;t lying. With a Walk Score of approximately 95
            and a Transit Score of 85, this is a place where a car is not
            just unnecessary but often a liability. Parking is expensive
            ($150–$250/month in most residential buildings), traffic on game
            days is a nightmare, and everything you need on a daily basis is
            within walking distance. The majority of residents who choose
            Downtown East are making a conscious choice to live without — or
            at least less dependent on — a car.
          </p>
          <p>
            The Blue Line and Green Line light rail both serve the
            neighborhood, with stops at US Bank Stadium and Government
            Plaza within easy walking distance. The Blue Line connects to
            the airport (25 minutes) and the Mall of America (35 minutes).
            The Green Line connects to St. Paul&apos;s Union Depot, the
            Capitol area, and destinations along University Avenue. Multiple
            Metro Transit bus routes crisscross downtown. For regional trips,
            the Target Field transit hub — a fifteen-minute walk or short
            train ride — connects to Northstar commuter rail and additional
            bus routes.
          </p>
          <p>
            Cycling infrastructure is excellent. The Stone Arch Bridge
            connects to the east bank trail system. The riverfront trails
            run north toward Boom Island and south toward Minnehaha. Bike
            lanes on Washington Avenue and Portland Avenue provide street-level
            connections. Nice Ride bikeshare stations are common. For the
            roughly seven months of the year when cycling is viable, Downtown
            East is as bike-friendly as any neighborhood in the city.
          </p>
          <p>
            By car, I-35W is immediately accessible to the south. Highway 55
            connects to the airport. Street parking on non-event days is
            metered and limited; on event days, it essentially doesn&apos;t
            exist. If you own a car and live here, you will develop strong
            opinions about surface lot pricing and the Vikings schedule.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/downtown-east/light-rail.webp"
          alt="Blue Line light rail train at US Bank Stadium station in Downtown East Minneapolis"
          caption="The Blue and Green light rail lines make Downtown East one of the best-connected neighborhoods in the metro"
        />
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Downtown East is a neighborhood defined by its contradictions,
            and any honest account of the place has to sit with all of them
            at once. This is simultaneously one of the most desirable and
            one of the most challenged neighborhoods in Minneapolis — a
            place where million-dollar condos overlook encampments, where
            world-class cultural institutions share the sidewalk with
            visibly struggling people, where the promise of urban renewal
            collides daily with the reality of urban inequality. None of
            these tensions are unique to Downtown East. But they are more
            visible here than almost anywhere else in the city, because the
            density and the public spaces make them impossible to ignore.
          </p>
        </Prose>

        <ArticleSubsection title="Game Days vs. Every Other Day">
          <Prose>
            <p>
              US Bank Stadium hosts approximately 40–50 major events per year —
              Vikings games, concerts, conventions, and marquee sporting
              events. On those days, Downtown East becomes a different place.
              Sixty-six thousand people descend on a neighborhood of 12,000.
              Traffic gridlocks. Light rail trains run at crush capacity.
              Restaurants overflow. The noise — from the stadium itself, from
              the bars, from the tailgating lots — is substantial. For
              residents who embrace it, game days are a feature, not a bug.
              For residents who don&apos;t, they are forty to fifty days a
              year of planning your schedule around someone else&apos;s
              entertainment.
            </p>
            <p>
              The stadium was designed with the neighborhood&apos;s
              interests in mind — or at least, that was the pitch. The
              Commons was supposed to be the buffer, the shared space that
              would make the stadium feel integrated rather than imposed. In
              practice, The Commons works well enough as a park on non-event
              days but becomes essentially unusable as a neighborhood
              amenity during events. The broader question — whether a
              billion-dollar stadium can coexist with a residential
              neighborhood — is still being answered, and the answer depends
              heavily on which resident you ask.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Homelessness and Public Space">
          <Prose>
            <p>
              Homelessness is visible in Downtown East — more visible than in
              most Minneapolis neighborhoods, because the combination of
              public spaces, transit infrastructure, skyway access, and
              shelter proximity creates a concentration that is difficult to
              miss. Encampments have appeared periodically in and near The
              Commons, along the riverfront, and in the underpasses near the
              freeway. The city has conducted clearings; the encampments have
              returned. This is not a problem that Downtown East created or
              can solve on its own — it is a regional and national crisis
              playing out on local sidewalks.
            </p>
            <p>
              For residents, the experience of walking past people in crisis
              on the way to the Guthrie or the farmers market is
              disorienting and, for many, deeply uncomfortable — not because
              of physical danger (the risk is generally low) but because of
              the moral dissonance of extraordinary privilege and
              extraordinary suffering occupying the same block. Some
              residents respond with compassion and engagement. Others
              respond with frustration and withdrawal. Most feel both things
              simultaneously. It would be dishonest to write a neighborhood
              guide that pretends this is not part of the daily experience
              of living here.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Historic Preservation vs. New Development">
          <Prose>
            <p>
              Downtown East sits in a National Register historic district,
              and the tension between preservation and development is a
              recurring theme. The Mill District&apos;s industrial ruins have
              been thoughtfully preserved — Mill Ruins Park, Mill City
              Museum, and the adaptive reuse of warehouse buildings are
              genuine successes. But development pressure is constant. Every
              surface parking lot is a potential tower site. Every historic
              building is a potential conversion project. The neighborhood&apos;s
              character — insofar as a twenty-year-old neighborhood can be
              said to have character — is still being formed, and the
              decisions being made now about what gets built and what gets
              preserved will determine what Downtown East looks like for the
              next fifty years.
            </p>
            <p>
              The risk is the one that every American stadium district faces:
              that the neighborhood becomes a monoculture of luxury
              apartments, sports bars, and event infrastructure, with no
              room for the independent businesses, affordable housing, and
              community institutions that make a place worth living in
              between games. Downtown East is not there yet. The Mill
              District end of the neighborhood has genuine texture and
              cultural weight. But the East Town end is trending in a more
              generic direction, and the forces pushing it there — developer
              economics, stadium proximity, the sheer cost of downtown
              construction — are powerful.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Return-to-Downtown Question">
          <Prose>
            <p>
              Like downtowns across the country, Downtown East was hit hard
              by the pandemic-era shift to remote work. Office buildings
              emptied. Foot traffic cratered. Restaurants that depended on
              the lunch crowd struggled or closed. By 2025–2026, the recovery
              is real but incomplete — office occupancy remains below
              pre-pandemic levels, and the daytime population has not fully
              returned. The neighborhood has adapted, partly by leaning into
              its residential identity and partly by embracing the event
              economy that the stadium provides. But the long-term viability
              of Downtown East as a neighborhood — not just a destination —
              depends on whether the daytime ecosystem of workers, shoppers,
              and casual visitors can be rebuilt. The signs are cautiously
              encouraging. The certainty is not there yet.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Downtown East FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
