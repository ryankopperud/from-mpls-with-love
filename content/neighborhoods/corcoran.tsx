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
    title: "Corcoran, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Corcoran, Minneapolis — East Lake Street, Midtown Greenway, the diverse community, rebuilding after 2020, housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Corcoran",
  deck: "An East Lake Street neighborhood at the crossroads of Minneapolis's most intense recent history — where the Midtown Greenway slices through, the commercial corridor is rebuilding after 2020, and a diverse community of long-term residents and newer arrivals is doing the slow, unglamorous work of holding a neighborhood together when the national spotlight has moved on.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Corcoran?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Corcoran" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Corcoran, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,000", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$200K–$320K", label: "Median home sale price range (2025 data)" },
      { value: "1890s–1920s", label: "Era most homes were built" },
      { value: "East Lake Street", label: "Primary commercial corridor" },
      { value: "Midtown Greenway", label: "Major trail corridor (northern edge)" },
      { value: "10–15 min", label: "Drive to downtown Minneapolis" },
      { value: "80", label: "Walk Score" },
      { value: "92", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Corcoran a good neighborhood in Minneapolis?",
      answer:
        "Corcoran is a neighborhood with real strengths — affordability, diversity, transit access, the Midtown Greenway, and walkable commercial life on East Lake Street — and real challenges, including the lingering effects of the 2020 unrest, property crime, and uneven commercial recovery. It is a good fit for people who value urban convenience and diversity, are realistic about the neighborhood's challenges, and are comfortable with a place that is actively rebuilding rather than already polished. It is not the right choice for buyers who want a finished product.",
    },
    {
      question: "Is Corcoran, Minneapolis safe?",
      answer:
        "Corcoran's safety profile is complex. The residential blocks are generally quiet, and most residents feel safe in their homes and immediate surroundings. Property crime is a consistent concern — car break-ins, catalytic converter thefts, and occasional burglaries are part of life here. Violent crime exists, with rates above the city median, particularly along the Lake Street corridor. The 2020 unrest and its aftermath heightened safety concerns, and some residents — particularly those who arrived before 2020 — describe a shift in how the neighborhood feels. Others note that the actual data, while imperfect, shows a neighborhood that is safer than its reputation suggests. Context and block-level variation matter enormously.",
    },
    {
      question: "What is Corcoran, Minneapolis known for?",
      answer:
        "Corcoran is known for its position on East Lake Street — one of the most diverse and commercially active corridors in Minneapolis — and for the Midtown Greenway, a below-grade bicycle and pedestrian trail along its northern edge. The neighborhood is also known for its role in the aftermath of the 2020 unrest: the Lake Street corridor through and near Corcoran sustained significant damage following George Floyd's murder, and the rebuilding process has been a defining story of the community. It is a neighborhood that national media briefly noticed and quickly forgot, but that local residents have continued to invest in.",
    },
    {
      question: "How much do homes cost in Corcoran, Minneapolis?",
      answer:
        "Median home sale prices in Corcoran ranged from roughly $200,000 to $320,000 in 2025. Smaller homes needing updates can be found under $200,000 — among the most affordable options in Minneapolis's core. Well-maintained three-bedroom homes sell in the $240,000–$320,000 range. Fully renovated homes can reach $350,000–$400,000 but are less common. Corcoran remains one of the most affordable neighborhoods for homeownership near transit and the Greenway.",
    },
    {
      question: "How was Corcoran affected by the 2020 unrest?",
      answer:
        "Corcoran was significantly affected by the unrest following George Floyd's murder in May 2020. East Lake Street — the neighborhood's primary commercial corridor — sustained substantial damage, with businesses burned, looted, or forced to close. The rebuilding has been gradual and uneven. Some businesses have returned. Others have not. Some properties remain vacant or are under redevelopment. By 2026, Lake Street through Corcoran is recovering but not recovered — the corridor is functional, active, and diverse, but gaps remain visible, and the commercial mix has shifted. The experience profoundly shaped the community's relationship to the city, to policing, and to the broader public narrative about Minneapolis.",
    },
    {
      question: "What is the Midtown Greenway?",
      answer:
        "The Midtown Greenway is a 5.5-mile paved bicycle and pedestrian trail running east-west through South Minneapolis in a below-grade former rail corridor. It runs along Corcoran's northern edge and is one of the most heavily used urban trails in the country. The Greenway connects to the Minneapolis bike network, the Chain of Lakes trail system, and the Blue Line light rail at the Lake Street/Midtown Station. For Corcoran residents, the Greenway is a daily transportation corridor, a recreational asset, and a connection to the broader city that many neighborhoods cannot match.",
    },
    {
      question: "Is Corcoran walkable?",
      answer:
        "Corcoran earns a Walk Score of approximately 80 and a Bike Score of 92 — among the highest in South Minneapolis. East Lake Street provides groceries, restaurants, and transit within walking distance. The Midtown Greenway offers car-free bicycle commuting. The Blue Line light rail at Lake Street/Midtown Station is accessible from the neighborhood. For a South Minneapolis neighborhood, Corcoran's transportation options are exceptionally strong.",
    },
    {
      question: "What schools serve Corcoran, Minneapolis?",
      answer:
        "Corcoran is served by Minneapolis Public Schools. Andersen United Community School is a nearby elementary option serving a diverse student body. South High School serves the area for grades 9–12. The district's open enrollment system provides access to magnet programs and other schools. The schools in this area reflect the neighborhood's diversity and the district's broader challenges with achievement gaps and resource allocation.",
    },
    {
      question: "Is Corcoran good for biking?",
      answer:
        "Corcoran is one of the best neighborhoods in Minneapolis for cycling, thanks primarily to the Midtown Greenway — a dedicated, car-free trail that runs along the neighborhood's northern edge and connects to trails, neighborhoods, and transit across the city. The flat terrain and the Minneapolis bike lane network add to the infrastructure. Many Corcoran residents commute by bike, and the Greenway makes car-free living more practical here than in most Minneapolis neighborhoods.",
    },
    {
      question: "How does Corcoran compare to Powderhorn Park?",
      answer:
        "Corcoran sits east of Powderhorn Park and shares some of its demographic character, but the two neighborhoods have distinct identities. Powderhorn has the lake, a stronger activist culture, and a more established community identity. Corcoran is more directly tied to East Lake Street's commercial life and the Midtown Greenway, and it has been more directly affected by the 2020 unrest and its aftermath. Housing is somewhat more affordable in Corcoran. Both neighborhoods are genuinely diverse and are actively navigating the post-2020 reality of South Minneapolis.",
    },
  ],
  nearby: [
    { name: "Powderhorn Park", slug: "powderhorn-park", description: "The lake neighborhood to the west" },
    { name: "Midtown Phillips", slug: "midtown-phillips", description: "East Lake Street corridor neighbor" },
    { name: "Standish", slug: "standish", description: "Quieter residential blocks to the south" },
    { name: "Longfellow", slug: "longfellow", description: "More established blocks to the east" },
    { name: "Bryant", slug: "bryant", description: "Diverse residential to the west" },
    { name: "Bancroft", slug: "bancroft", description: "Working-class blocks to the south" },
  ],
  closing: {
    title: "What Makes Corcoran Worth Knowing",
    paragraphs: [
      "Corcoran is not an easy neighborhood to recommend without qualification, and that honesty is part of what makes it worth paying attention to. The 2020 unrest happened here — not in the abstract, not on television, but on the streets that residents walk and the businesses they depended on. The aftermath has been long and uneven, and the neighborhood in 2026 is neither the place it was before nor the place it will become. It is in between, and that in-between state is uncomfortable but also generative. New businesses are opening. New residents are arriving. New conversations about what the neighborhood should be are happening on porches and in community meetings and in the places where people show up when they care.",
      "The people who choose Corcoran in 2026 are choosing it with open eyes. They see the gaps on Lake Street where buildings once stood. They know the crime statistics and the transit routes and the price of a three-bedroom house. They know that the Greenway is genuinely excellent and that the commercial corridor is genuinely unfinished. And they choose it anyway — because the location is unbeatable, because the diversity is real, because the housing is affordable, and because there is something meaningful about investing in a community that is actively rebuilding rather than one that has already arrived. Corcoran is a bet on the future. The terms are honest, and the stakes are real.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday morning in late spring, the Midtown Greenway through
          Corcoran is the city at its best — a steady stream of cyclists
          rolling east toward the river and west toward the lakes, the
          below-grade trail cutting through the neighborhood like a river of
          its own, quiet and purposeful. Above the trail, at street level,
          East Lake Street is doing something more complicated. A Somali tea
          shop is open early, its windows steamed. A Latino grocery is
          stacking crates of produce on the sidewalk. Two storefronts down,
          a building that burned in 2020 is being rebuilt — scaffolding up,
          workers in hard hats, the slow architecture of recovery. Across
          the street, a new coffee shop is open in a space that was vacant
          for three years. The juxtaposition is Corcoran in 2026 — the old
          and the new, the damaged and the rebuilt, the persistent and the
          fragile, all sharing the same block.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/corcoran/hero.webp"
        alt="East Lake Street corridor in Corcoran with commercial activity and rebuilding"
        caption="East Lake Street through Corcoran — rebuilding, evolving, and still one of the most diverse commercial corridors in the city"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Corcoran, Minneapolis?">
        <Prose>
          <p>
            Corcoran is a residential neighborhood in South Minneapolis,
            roughly bounded by East Lake Street to the north, Hiawatha Avenue
            (Highway 55) to the east, East 36th Street to the south, and
            Bloomington Avenue to the west. The Midtown Greenway runs along
            the neighborhood&apos;s northern edge, and East Lake Street — one
            of the most commercially active and diverse corridors in
            Minneapolis — forms its front door. The neighborhood is home to
            approximately 5,000 residents and sits at the intersection of
            several forces that define South Minneapolis in 2026: demographic
            diversity, post-2020 recovery, transit access, and the ongoing
            negotiation between affordability and investment.
          </p>
          <p>
            Corcoran does not have the name recognition of{" "}
            <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
              Powderhorn Park
            </Link>
            {" "}to its west or the established residential identity of
            Longfellow to its east. It is a neighborhood defined more by its
            corridors — Lake Street, the Greenway, Hiawatha Avenue — than by
            its interior, which is a grid of quiet residential blocks with
            modest homes, mature trees, and the kind of alley-facing garages
            that tell you this was built for working people who needed to park
            a car and get to a job. The corridors give Corcoran its energy
            and its challenges. The residential blocks give it its stability.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Corcoran Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/corcoran/neighborhood-sign.webp"
          alt="Corcoran neighborhood sign in Minneapolis"
          caption="The Corcoran neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Corcoran History & Origins">
        <Prose>
          <p>
            The land now called Corcoran is Dakota homeland, part of the
            territory occupied by the Dakota people for centuries before
            European colonization. The neighborhood is named for Patrick
            Corcoran, an Irish immigrant who ran a general store in the area
            in the late nineteenth century — the kind of local figure who
            gets memorialized in a neighborhood name because he happened to
            be visible at the moment when names were being assigned. The
            Irish presence in this part of South Minneapolis was significant
            in the late 1800s and early 1900s, joined by Scandinavian and
            German immigrants who built the houses and worked the jobs that
            defined the neighborhood&apos;s first several decades.
          </p>
          <p>
            The housing stock dates primarily from the 1890s through the
            1920s — some of the oldest residential construction in South
            Minneapolis. The neighborhood&apos;s proximity to the Milwaukee
            Road rail corridor (now the Midtown Greenway) meant that it
            developed as a working-class area, home to families employed in
            the rail yards, the flour mills, and the manufacturing
            businesses that clustered along the rail lines. The houses
            reflect that economy — small, solid, practical, built close
            together on narrow lots with the expectation that proximity to
            work mattered more than architectural distinction.
          </p>
          <p>
            East Lake Street was, from the beginning, a commercial corridor
            of real significance — not just for Corcoran but for the
            broader South Minneapolis community. Through the mid-twentieth
            century, Lake Street was a thriving retail strip, with department
            stores, movie theaters, and the kind of commercial density that
            made it a destination. That era ended with suburbanization and
            the construction of the interstate system, which pulled
            commercial activity to the malls and the suburbs. By the 1980s,
            Lake Street had entered a long period of decline and transition.
          </p>
          <p>
            The revitalization of East Lake Street began in the 1990s and
            2000s, driven largely by Latino immigrants who opened businesses,
            founded Mercado Central, and transformed the corridor into one
            of the most diverse commercial strips in the Midwest. Somali,
            East African, and Southeast Asian businesses followed. By 2019,
            East Lake Street was widely celebrated as a success story of
            immigrant-driven urban revitalization. Then came 2020.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Corcoran">
        <Prose>
          <p>
            Corcoran is a neighborhood that asks you to hold two things in
            your mind at the same time. The residential blocks — south of
            Lake Street, away from the corridors — are quiet, tree-lined,
            and neighborly in the way that South Minneapolis blocks have
            been for a century. The houses are small and close together. The
            alleys are active with garbage cans and garage doors and the
            occasional vegetable garden. You hear your neighbors&apos;
            conversations and their music and their screen doors closing.
            The scale is intimate. The community is real. If you look only
            at the interior blocks, you would describe a stable, pleasant,
            affordable residential neighborhood.
          </p>
          <p>
            But the corridors — Lake Street to the north, Hiawatha to the
            east — carry a different energy. Lake Street through Corcoran is
            busy, diverse, and uneven. There are thriving businesses and
            empty lots. New construction and vacant storefronts. The energy
            of a corridor that is rebuilding and the evidence of what was
            lost. This duality is Corcoran&apos;s defining characteristic
            in 2026 — the quiet residential interior and the complicated
            commercial edges, coexisting on the same map but offering
            very different experiences of the same neighborhood.
          </p>
          <p>
            The diversity is real and layered. Corcoran is home to
            significant Latino, Somali, white, and Black populations, along
            with smaller communities from Southeast Asia, East Africa, and
            other parts of the world. The diversity is economic as well as
            racial — this is a working-class and lower-middle-class
            neighborhood where homeowners and renters share blocks, where
            incomes are modest, and where the commercial infrastructure
            reflects the budgets of the people who depend on it. The
            integration is not curated or celebrated. It is the natural
            result of affordable housing in a well-located part of the city.
          </p>
        </Prose>

        <Quote
          text="People from outside the neighborhood see the gaps on Lake Street and think we're falling apart. People who live here see the new businesses and think we're coming back. Both are true at the same time."
          cite="Corcoran resident, 15 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Corcoran Food, Drink & Local Spots">
        <Prose>
          <p>
            East Lake Street through and near Corcoran is one of the most
            diverse food corridors in the Twin Cities — a stretch where
            Mexican taquerias, Somali restaurants, Vietnamese pho shops,
            Ethiopian cafes, and American bars share the same blocks. The
            corridor was hit hard in 2020, and the food landscape in 2026
            is different from what it was before — some beloved spots are
            gone, new ones have opened, and the overall mix is still finding
            its equilibrium. What has not changed is the fundamental
            character of the corridor: diverse, affordable, and oriented
            toward the communities that live here rather than toward diners
            driving in from the suburbs.
          </p>
        </Prose>

        <ArticleSubsection title="The Anchors">
          <PlaceCardComponent place={{ name: "Mercado Central", tag: "Latin Market", price: "$", description: "Lake Street and Bloomington Avenue, at Corcoran's western edge. A collection of Latino-owned small businesses — taquerias, bakeries, produce vendors, and specialty shops — under one roof. This is the commercial heart of the Latino community on Lake Street and a landmark that survived the 2020 unrest and continues to anchor the corridor. The food is excellent and affordable." }} />
          <PlaceCardComponent place={{ name: "Midtown Global Market", tag: "International Food Hall", price: "$–$$", description: "Lake Street and Chicago Avenue, nearby. A food hall and marketplace inside the former Sears building on Lake Street — dozens of vendors serving cuisines from around the world, including Somali, Mexican, Vietnamese, Ethiopian, and more. It's one of the most genuinely diverse food spaces in the Twin Cities and a destination worth visiting even if you don't live in the neighborhood." }} />
          <PlaceCardComponent place={{ name: "Ha Tien", tag: "Vietnamese", price: "$", description: "East Lake Street. A no-frills Vietnamese restaurant that has been serving the neighborhood for years — pho, banh mi, vermicelli, and the kind of straightforward execution that comes from doing the same dishes thousands of times. The broth is deep. The prices are low. The atmosphere is functional." }} />
          <PlaceCardComponent place={{ name: "Café Racer Kitchen", tag: "Bar & Kitchen", price: "$$", description: "East Lake Street. A motorcycle-themed bar and kitchen that brings a different energy to the corridor — craft cocktails, a solid food menu, and a community-minded ownership that has invested in the neighborhood through challenging years. It's one of the newer additions to the corridor and a sign of the commercial recovery that is happening unevenly but genuinely." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The broader East Lake Street corridor — stretching beyond
              Corcoran in both directions — is one of the richest food
              corridors in the city. Within a short walk or bike ride, you
              can access dozens of restaurants, groceries, and markets
              representing cuisines from across the globe. The corridor&apos;s
              recovery from 2020 has been uneven, but the diversity and
              affordability of the food landscape remain genuine strengths.
              For Corcoran residents, the proximity to this commercial
              life is one of the neighborhood&apos;s most practical assets.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Corcoran">
        <Prose>
          <p>
            Corcoran&apos;s outdoor life is defined by the Midtown Greenway
            — the former rail corridor that runs along the neighborhood&apos;s
            northern edge and provides one of the best urban cycling and
            walking experiences in the country. Beyond the Greenway, the
            neighborhood&apos;s park infrastructure is modest but functional,
            and proximity to Powderhorn Lake and the broader Minneapolis park
            system extends the outdoor options beyond the neighborhood
            boundaries.
          </p>
        </Prose>

        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway is a 5.5-mile paved trail running
              east-west through South Minneapolis in a below-grade former
              railroad corridor. It is separated from street-level traffic,
              which makes it feel like a different city — quiet, car-free,
              and fast. The Greenway connects to the Chain of Lakes trail
              system to the west and to the Mississippi River trails to the
              east. For Corcoran residents, it is both a transportation
              corridor — many commute by bike along the Greenway — and a
              recreational asset that is genuinely world-class. The
              experience of cycling the Greenway on a summer morning, below
              the street grid, with the city visible above but unable to
              touch you, is one of the best things about living in this
              part of Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Corcoran Park & Nearby Green Space">
          <Prose>
            <p>
              Corcoran Park, the neighborhood&apos;s eponymous green space,
              provides a playground, open fields, and community gathering
              space at a neighborhood scale. It is a small park that serves
              its blocks well without being a destination.{" "}
              <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
                Powderhorn Lake
              </Link>
              {" "}is a short walk or bike ride to the west — a significant
              urban lake with trails, a bandshell, and the community energy
              of one of South Minneapolis&apos;s most active parks. The
              Blue Line light rail trail along Hiawatha Avenue provides
              additional north-south trail connections. Minnehaha Falls and
              the Mississippi River gorge are accessible via the Greenway
              and connecting trails — roughly a 20-minute bike ride from
              Corcoran.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Corcoran Schools">
        <Prose>
          <p>
            Corcoran is served by Minneapolis Public Schools, and the school
            landscape reflects both the neighborhood&apos;s diversity and
            the district&apos;s systemic challenges. Andersen United
            Community School, a nearby K–8 option, serves a diverse student
            body with programming that reflects the community&apos;s
            multilingual character. The school has a strong community
            connection and offers dual-language programming.
          </p>
          <p>
            South High School serves Corcoran for grades 9–12. South is
            one of the most diverse high schools in the Minneapolis district
            — a school where dozens of languages are spoken and where the
            student body reflects the broader demographics of South
            Minneapolis. It offers a range of academic and extracurricular
            programs and has a strong arts and music tradition. Achievement
            gaps persist, as they do across the district, and some families
            opt for magnet programs or open enrollment to other schools.
          </p>
          <p>
            For families in Corcoran, the school landscape requires
            engagement. The district&apos;s open enrollment system provides
            options, and many families explore multiple schools before
            choosing. The neighborhood schools offer genuine diversity and
            community connection. The test scores alone do not capture the
            full picture — particularly at schools where the student body
            includes recent immigrants, English learners, and students
            from a wide range of socioeconomic backgrounds.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Corcoran Real Estate & Housing">
        <Prose>
          <p>
            Corcoran is one of the most affordable neighborhoods in
            Minneapolis for homeownership near transit and the Midtown
            Greenway — a combination that would command a significant premium
            in many cities. The median home sale price has ranged between
            roughly $200,000 and $320,000 in 2025, with meaningful variation
            based on condition, size, and proximity to Lake Street.
          </p>
          <p>
            The housing stock is among the oldest in South Minneapolis —
            wood-frame homes built in the 1890s through the 1920s, when this
            area was filling in with working-class housing near the railroad
            corridor. The homes are small, typically two or three bedrooms,
            with the narrow lots and alley-facing garages that characterize
            this part of the city. Some have been updated and well-maintained;
            others carry decades of deferred maintenance. The range in
            condition creates opportunity for buyers willing to do work and
            risk for those who are not.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($175,000–$220,000), you&apos;re looking at
              smaller homes that need significant investment — old windows,
              dated mechanicals, kitchens from another era. These are the
              houses that attract first-time buyers, handy buyers, and
              investors. The mid-range ($230,000–$300,000) gets you a
              well-maintained home with a functional kitchen, updated
              electrical and plumbing, and the kind of condition that lets
              you move in and live comfortably. Above $320,000, you&apos;re
              in renovated territory — modern kitchens and baths, expanded
              living space, or the occasional new-construction infill.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We bought here because it was what we could afford. Then we discovered the Greenway, and now we bike everywhere. The house was the decision; the Greenway was the bonus."
          cite="Corcoran homeowner, 2022 buyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Corcoran">
        <Prose>
          <p>
            Corcoran is one of the best-connected neighborhoods in South
            Minneapolis for transit and cycling. The Walk Score of
            approximately 80 reflects strong pedestrian access to East Lake
            Street&apos;s commercial corridor. The Bike Score of 92 — one
            of the highest in the city — reflects the Midtown Greenway, flat
            terrain, and good bike infrastructure. For residents who want
            to reduce car dependence, Corcoran offers real options that most
            South Minneapolis neighborhoods cannot match.
          </p>
          <p>
            The Blue Line light rail is the neighborhood&apos;s most
            significant transit asset. The Lake Street/Midtown Station — at
            the intersection of Lake Street and Hiawatha Avenue, on
            Corcoran&apos;s eastern edge — provides direct light rail
            service to downtown Minneapolis (approximately 10 minutes),
            MSP International Airport (approximately 15 minutes), and the
            Mall of America. This is a game-changer for commuters — the kind
            of transit access that dramatically reduces the need for a car.
          </p>
          <p>
            Metro Transit Route 21 on Lake Street provides frequent
            east-west bus service, connecting Corcoran to Uptown, Midtown,
            and the broader transit network. Route 5 on Chicago Avenue runs
            north-south. The Midtown Greenway provides car-free cycling
            connections east to the river and west to the Chain of Lakes.
            By car, downtown is 10–15 minutes, and MSP Airport is roughly
            12 minutes via Hiawatha Avenue.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Corcoran is a neighborhood where the tensions are not abstract —
            they are visible on the streets, in the gaps between buildings,
            in the conversations that residents have about what the
            neighborhood was and what it is becoming. An honest guide
            has to name them.
          </p>
        </Prose>

        <ArticleSubsection title="The 2020 Aftermath — Still">
          <Prose>
            <p>
              Six years after the unrest that followed George Floyd&apos;s
              murder, the effects are still present in Corcoran. East Lake
              Street has gaps where buildings stood. Some businesses that
              closed in 2020 have not returned. The commercial corridor is
              recovering, but the recovery has been slower and more uneven
              than the early optimism suggested. For residents, the 2020
              unrest was not a news event — it was a lived experience that
              damaged their neighborhood, disrupted their routines, and
              forced a reckoning with questions about policing, justice, and
              who the city serves. Those questions are not resolved. The
              rebuilding is real, but it is not complete, and pretending
              otherwise would be dishonest.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Safety and Trust">
          <Prose>
            <p>
              The relationship between Corcoran residents and public safety
              institutions is complicated. The 2020 experience — and the
              police response to it — damaged trust in ways that have not
              been fully repaired. Property crime remains a persistent
              concern, and some residents describe a feeling of being on
              their own — neither fully served by the police department
              nor willing to return to the pre-2020 status quo. The
              neighborhood has responded with block-level organizing, mutual
              aid networks, and the kind of community-based safety
              strategies that emerge when institutional systems are
              perceived as insufficient. These strategies are imperfect but
              real, and they represent one of the ways that Corcoran is
              working out its own answer to questions that the city as a
              whole has not yet resolved.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development and Displacement">
          <Prose>
            <p>
              The combination of low home prices, Greenway access, and Blue
              Line proximity makes Corcoran a likely target for investment
              and, potentially, gentrification. New construction has begun
              to appear — small apartment buildings, renovated homes, and
              the kind of investment that signals rising interest. For
              long-term residents, particularly renters, the prospect of
              rising prices is a double-edged sword — investment the
              neighborhood needs, at the risk of displacing the people who
              stayed through the worst of it. The tension between
              revitalization and displacement is one of the defining
              questions for Corcoran over the next decade.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Corcoran FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
