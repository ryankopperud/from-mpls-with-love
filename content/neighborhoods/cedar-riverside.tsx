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
    title: "Cedar-Riverside, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Cedar-Riverside, Minneapolis — Little Mogadishu, Riverside Plaza, the West Bank music scene, Somali restaurants, Augsburg University, transit access, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Cedar-Riverside",
  deck: "The West Bank — where the largest Somali community in North America lives in the shadow of a Brutalist landmark, a legendary music scene refuses to die, and two universities keep the sidewalks young. Minneapolis at its most complicated and most alive.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Cedar-Riverside?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Cedar-Riverside" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Cedar-Riverside, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~8,000", label: "Residents (US Census / ACS estimates)" },
      { value: "$150K–$250K", label: "Median condo/home sale price (2025 data)" },
      { value: "$900–$1,300", label: "Typical 1BR apartment rent (2025)" },
      { value: "90", label: "Walk Score" },
      { value: "95", label: "Bike Score" },
      { value: "78", label: "Transit Score" },
      { value: "85%+", label: "Renter-occupied housing" },
      { value: "2", label: "Universities within or adjacent to boundaries" },
    ],
  },
  faq: [
    {
      question: "Is Cedar-Riverside a good neighborhood in Minneapolis?",
      answer:
        "It depends entirely on what you&apos;re looking for. Cedar-Riverside offers some of the best transit access in the city, extraordinary cultural diversity, affordable rents, and walkability that rivals anywhere in Minneapolis. It is also dense, loud, and faces real challenges with poverty and public safety. If you want urban energy, cultural immersion, and don&apos;t need a quiet residential street, Cedar-Riverside delivers something no other Minneapolis neighborhood can. If you want space, parking, and predictability, this is not your neighborhood.",
    },
    {
      question: "Is Cedar-Riverside, Minneapolis safe?",
      answer:
        "Safety in Cedar-Riverside is a nuanced topic. Property crime rates are above the city average, and the neighborhood has experienced periods of elevated violent crime, some of it connected to broader social issues including poverty and gang activity. At the same time, thousands of families, students, and workers live here without incident. The area around the light rail station and certain blocks near Riverside Plaza require more awareness, particularly at night. Community organizations and the Cedar-Riverside neighborhood association are active in safety initiatives.",
    },
    {
      question: "Why is Cedar-Riverside called Little Mogadishu?",
      answer:
        "Cedar-Riverside is home to the largest concentration of Somali residents in North America, with immigration beginning in earnest in the 1990s as refugees fled the Somali Civil War. The community centered around the Riverside Plaza towers, which offered large, affordable apartments for families. Over time, Somali-owned businesses — restaurants, groceries, clothing shops, remittance services — filled the commercial corridors along Cedar Avenue, creating a vibrant cultural district that earned the informal name Little Mogadishu.",
    },
    {
      question: "What is Riverside Plaza?",
      answer:
        "Riverside Plaza (originally Cedar Square West) is a Brutalist housing complex designed by Ralph Rapson and completed in the early 1970s. Its eleven towers — ranging from 11 to 39 stories, with distinctive bright-colored panels on the facades — house roughly 4,000 residents in over 1,300 units. It is the largest housing complex in Minnesota and a visual landmark visible from across the city. The towers are primarily affordable and subsidized housing and are home to a large Somali and East African population. The building&apos;s appearance in the opening credits of the Mary Tyler Moore Show made it an unexpected piece of pop culture history.",
    },
    {
      question: "What happened to Triple Rock Social Club?",
      answer:
        "Triple Rock Social Club, the beloved punk and indie music venue at 629 Cedar Avenue South, closed permanently in 2017 after 19 years of operation. Founded by Erik Funk of Dillinger Four, it was one of the most important independent music venues in the Midwest, hosting everything from local punk bands to nationally touring acts. Its closure was a significant cultural loss for the West Bank music scene, though other venues like Palmer&apos;s Bar and the Cedar Cultural Center continue to carry the tradition.",
    },
    {
      question: "How much does it cost to live in Cedar-Riverside?",
      answer:
        "Cedar-Riverside is one of the most affordable neighborhoods in central Minneapolis. One-bedroom apartments typically rent for $900 to $1,300 per month. Riverside Plaza units are significantly cheaper due to subsidized housing programs. Condos and the rare single-family home sell in the $150,000 to $250,000 range. The neighborhood&apos;s affordability is one of its defining characteristics and a key reason it has historically attracted immigrant communities and students.",
    },
    {
      question: "Is Cedar-Riverside walkable?",
      answer:
        "Very. Cedar-Riverside has a Walk Score of approximately 90, reflecting dense commercial corridors on Cedar Avenue and Riverside Avenue, proximity to downtown, and the presence of two universities. Grocery stores, restaurants, transit, and community services are all within walking distance of most addresses. The neighborhood is also exceptionally bikeable, with strong connections to the U of M campus and downtown bike infrastructure.",
    },
    {
      question: "What is the West Bank music scene?",
      answer:
        "The West Bank — Cedar-Riverside&apos;s informal name — has been a center of Minneapolis&apos;s music and counterculture since the 1960s. The area around Cedar and Riverside Avenues hosted folk and rock clubs during the same era that produced Bob Dylan (who attended the U of M nearby). Palmer&apos;s Bar, the Cabooze, and the Cedar Cultural Center carry this tradition forward. Triple Rock Social Club, which closed in 2017, was a later addition to the legacy. The scene is smaller than it was, but the DNA persists.",
    },
    {
      question: "Where exactly is Cedar-Riverside in Minneapolis?",
      answer:
        "Cedar-Riverside is on the west bank of the Mississippi River in Minneapolis, bounded roughly by Interstate 94 to the north and west, the Mississippi River to the east, and Interstate 94/Highway 55 to the south. It sits directly south of downtown, adjacent to the University of Minnesota&apos;s West Bank campus. The Blue Line and Green Line light rail both stop at the West Bank Station within the neighborhood.",
    },
    {
      question: "What universities are near Cedar-Riverside?",
      answer:
        "The University of Minnesota&apos;s West Bank campus is directly adjacent to Cedar-Riverside, housing the Carlson School of Management, the Hubert H. Humphrey School of Public Affairs, the Law School, and several liberal arts departments. Augsburg University, a private liberal arts school, sits at the neighborhood&apos;s southern edge along Riverside Avenue. Both institutions significantly shape the neighborhood&apos;s demographics, economy, and character.",
    },
    {
      question: "Is Cedar-Riverside gentrifying?",
      answer:
        "The pressures exist but the dynamics are different from neighborhoods like Whittier or Northeast. Cedar-Riverside&apos;s large stock of subsidized housing (particularly Riverside Plaza) provides some buffer against displacement. However, new development near the light rail station, rising land values driven by university proximity, and commercial changes along Cedar Avenue are creating tension. The Somali business community faces particular pressure from rising commercial rents and redevelopment proposals. Whether and how gentrification reshapes Cedar-Riverside is one of the most consequential questions in Minneapolis neighborhood politics.",
    },
  ],
  nearby: [
    { name: "Elliot Park", slug: "elliot-park", description: "Downtown-adjacent and rapidly transforming" },
    { name: "Phillips", slug: "phillips", description: "Diverse, resilient, and deeply rooted" },
    { name: "Seward", slug: "seward", description: "Co-op culture and Mississippi River access" },
    { name: "Marcy-Holmes", slug: "marcy-holmes", description: "Dinkytown and the east bank of campus" },
    { name: "Stevens Square - Loring Heights", slug: "stevens-square-loring-heights", description: "High-density living at the edge of downtown" },
    { name: "Prospect Park", slug: "prospect-park", description: "The Witch&apos;s Hat tower and Green Line corridor" },
  ],
  closing: {
    title: "What Makes Cedar-Riverside Irreplaceable",
    paragraphs: [
      "There is no neighborhood in Minneapolis — and arguably no neighborhood in the American Midwest — that contains what Cedar-Riverside contains in a single square mile. A Brutalist housing tower that shelters four thousand people from a dozen countries. A Somali tea shop where elders discuss politics in a language most Minnesotans have never heard spoken. A dive bar that has been pouring drinks since before the freeway was built. A university campus where students walk past all of it every day and don&apos;t think it&apos;s remarkable, because to them it&apos;s just the walk to class. This density of human experience — layered, contradictory, sometimes uncomfortable — is what cities are supposed to produce. Most don&apos;t manage it. Cedar-Riverside does, imperfectly and relentlessly.",
      "The neighborhood has real problems that resist easy solutions — poverty that is generational and structural, housing conditions that should be better, safety concerns that land harder on the most vulnerable residents, and development pressures that threaten the very communities that gave the place its identity. These are not footnotes. They are the daily reality for thousands of people. But the people who live in Cedar-Riverside — the Somali mothers pushing strollers past the towers, the grad students biking to the West Bank campus, the bartender at Palmer&apos;s who has seen everything twice — they know what they have. They know that this neighborhood, for all its rough edges, is one of the only places in the Upper Midwest where the world actually shows up. And that is worth something that no development plan or crime statistic can capture.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Tuesday afternoon in January, the temperature outside Riverside
          Plaza is eleven below zero and the wind off the Mississippi is making
          it worse. Inside the Daryeel grocery on Cedar Avenue, a woman in a
          bright orange dirac is buying camel milk and phone cards. Two doors
          down, the lunch rush at Safari Restaurant has fogged the windows —
          plates of goat suqaar and banana with rice moving fast between the
          kitchen and the tables where Somali men are drinking spiced tea and
          arguing about something with the energy that Minnesotans usually
          reserve for Vikings games. Across the street, a University of
          Minnesota grad student in a North Face parka ducks into Hard Times
          Cafe for a vegan burrito, because this is also that kind of
          neighborhood. Behind everything, the towers rise — eleven buildings,
          thirty-nine stories at the tallest, bright panels of blue and orange
          and red punched into poured concrete like a Mondrian painting that
          someone scaled up to house four thousand people. This is
          Cedar-Riverside. This is Little Mogadishu. This is the West Bank. It
          is all of these things at once, and none of them alone is sufficient.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/cedar-riverside/hero.webp"
        alt="Cedar Avenue in the Cedar-Riverside neighborhood of Minneapolis, with Riverside Plaza towers visible in the background"
        caption="Cedar Avenue — the commercial heart of Little Mogadishu — with Riverside Plaza rising behind"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Cedar-Riverside, Minneapolis?">
        <Prose>
          <p>
            Cedar-Riverside is a small, dense neighborhood on the west bank of
            the Mississippi River in Minneapolis, bounded roughly by Interstate
            94 to the north and west, the river to the east, and I-94/Highway
            55 to the south. It is home to approximately 8,000 residents in
            less than one square mile — a population defined by two overlapping
            realities that exist in the same space but often in different
            worlds. The first is the largest Somali community in North America,
            centered on the Riverside Plaza housing towers and the Cedar Avenue
            commercial corridor. The second is a university district, shaped by
            the University of Minnesota&apos;s West Bank campus and Augsburg
            University, which together bring thousands of students, faculty,
            and staff through the neighborhood every day.
          </p>
          <p>
            Layered beneath both is a third identity: the West Bank, the
            neighborhood&apos;s countercultural name, earned in the 1960s and
            1970s when the area around Cedar and Riverside Avenues was a center
            of folk music, political activism, and bohemian living. That era
            produced venues, bars, and a cultural attitude that persists in
            diminished but recognizable form — Palmer&apos;s Bar still pours
            drinks, the Cedar Cultural Center still books shows, and the
            neighborhood still attracts people who prefer their cities
            unpolished.
          </p>
          <p>
            Cedar-Riverside sits directly south of downtown Minneapolis,
            connected by light rail, bus routes, and the freeway system. Its
            centrality, its affordability, and its extraordinary cultural
            density make it one of the most distinctive neighborhoods in the
            Upper Midwest — and one of the most contested, as development
            pressure, poverty, and the competing needs of its communities
            collide in a space too small to absorb them all without friction.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Cedar-Riverside Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/cedar-riverside/neighborhood-sign.webp"
          alt="Cedar-Riverside neighborhood sign in Minneapolis"
          caption="The Cedar-Riverside neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Cedar-Riverside History & Origins">
        <Prose>
          <p>
            Before European settlement, the land that is now Cedar-Riverside
            was part of the homeland of the Dakota people — the Mdewakanton
            and Wahpekute bands, for whom the confluence of the Mississippi
            and Minnesota Rivers at Bdote, just downstream, was a site of
            profound spiritual and cultural significance. The riverbanks and
            bluffs here were used for travel, gathering, and seasonal
            habitation long before they were platted into city lots.
          </p>
          <p>
            European settlement in the mid-19th century brought Scandinavian
            immigrants — Swedes, Norwegians, and Danes — who made
            Cedar-Riverside one of the most distinctly Nordic neighborhoods
            in a city already famous for its Scandinavian heritage. The area
            was sometimes called &ldquo;Snoose Boulevard&rdquo; after Cedar
            Avenue&apos;s concentration of Scandinavian businesses, boarding
            houses, and social halls. The name came from &ldquo;snus,&rdquo;
            the Scandinavian chewing tobacco that was ubiquitous among the
            immigrant workers who lived and labored here. By the late 1800s,
            Cedar-Riverside was a working-class district of rooming houses,
            saloons, and small shops serving the mills and industries along
            the river.
          </p>
          <p>
            The mid-20th century brought the same forces of urban renewal and
            highway construction that reshaped neighborhoods across American
            cities. Interstate 94, completed through the area in the 1960s,
            carved through the neighborhood&apos;s northern and western edges,
            demolishing homes and severing connections to the rest of the city.
            In the same decade, the University of Minnesota expanded its West
            Bank campus into the neighborhood, claiming blocks of residential
            housing for academic buildings, parking, and institutional use.
            The combined effect was devastating — Cedar-Riverside lost
            population, housing stock, and the physical continuity that had
            made it a cohesive neighborhood.
          </p>
          <p>
            Out of this disruption came the most visible landmark in the
            neighborhood: Riverside Plaza. Originally called Cedar Square
            West, the complex was designed by Ralph Rapson — one of
            Minnesota&apos;s most prominent architects and a friend of Eero
            Saarinen and Charles Eames — as part of an ambitious &ldquo;New
            Town-in-Town&rdquo; urban renewal concept that envisioned
            replacing the aging neighborhood with a modern mixed-use district.
            The first towers were completed in 1973. The full New Town-in-Town
            plan was never realized — community opposition and funding
            shortfalls stopped the demolition of surrounding blocks — but the
            towers that were built became the largest housing complex in
            Minnesota: eleven buildings, over 1,300 units, with the tallest
            tower reaching 39 stories. The colorful panels that now define the
            building&apos;s exterior were added later, transforming what had
            been bare concrete into something approaching pop art at
            architectural scale.
          </p>
          <p>
            The 1960s and 1970s also gave Cedar-Riverside its counterculture
            identity. The cheap rents and university proximity attracted
            students, artists, radicals, and musicians. The area around Cedar
            and Riverside Avenues became a center for the folk and rock music
            scenes that would eventually produce some of Minnesota&apos;s most
            famous musical exports. Bob Dylan had attended the University of
            Minnesota just across the river in Dinkytown a few years earlier,
            and the energy he left behind — or helped create — permeated the
            West Bank&apos;s bars and coffeehouses throughout the decade.
            Palmer&apos;s Bar, which had been serving drinks since 1906,
            became a counterculture institution. The 400 Bar, the Viking Bar,
            and the Triangle Bar anchored a scene that was equal parts music,
            politics, and cheap beer.
          </p>
          <p>
            The most recent and perhaps most transformative chapter began in
            the 1990s, when Somali refugees fleeing civil war began arriving
            in the Twin Cities in significant numbers. Cedar-Riverside, with
            its large affordable housing stock in the Riverside Plaza towers
            and its proximity to social services and transit, became the
            primary settlement for this community. Over the following decades,
            the Somali population grew into the largest concentration in North
            America, fundamentally reshaping the neighborhood&apos;s
            commercial corridors, cultural landscape, and public life. Cedar
            Avenue filled with Somali restaurants, groceries, clothing shops,
            and gathering places. The neighborhood earned a new name — Little
            Mogadishu — that now sits alongside &ldquo;the West Bank&rdquo;
            in the local vocabulary.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Cedar-Riverside">
        <Prose>
          <p>
            Cedar-Riverside is a neighborhood where you can walk two blocks
            and cross three continents. The Cedar Avenue corridor between
            Riverside Plaza and the light rail station is as close to a Somali
            commercial district as exists anywhere outside East Africa —
            storefronts advertising remittance services to Mogadishu, halal
            groceries stacked with imported goods, women&apos;s clothing shops
            displaying fabrics in colors that make the Minnesota winter feel
            personally offensive. Turn a corner toward the university and
            you&apos;re in a different ecosystem entirely — grad students with
            backpacks, faculty heading to the Humphrey School, the institutional
            hum of a Big Ten campus. Walk another block and you&apos;re at
            Palmer&apos;s Bar, where the counterculture never quite ended and
            the jukebox hasn&apos;t been updated in a way that constitutes
            surrender.
          </p>
          <p>
            The physical landscape of Cedar-Riverside is unlike any other
            neighborhood in Minneapolis. Riverside Plaza dominates — you
            cannot ignore it, and the neighborhood doesn&apos;t try to. The
            towers are visible from downtown, from across the river, from
            Interstate 94. They are the neighborhood&apos;s most polarizing
            feature: to some, a Brutalist monument to failed urban planning;
            to others, home — the place where families from Somalia, Ethiopia,
            and across East Africa have built new lives in a climate that is
            the exact opposite of the one they left. The truth is both, and
            neither alone is honest.
          </p>
          <p>
            Beyond the towers, the neighborhood is a patchwork. Older
            residential blocks with duplexes and small apartment buildings
            survive from the pre-freeway era. University buildings —
            institutional, modern, designed for function rather than beauty —
            occupy significant acreage. Small commercial nodes cluster along
            Cedar Avenue and Riverside Avenue. The freeway borders create
            hard edges that isolate the neighborhood from its surroundings
            in ways that are felt physically — the sound of traffic is a
            constant, and crossing into adjacent neighborhoods often requires
            navigating underpasses or pedestrian bridges that feel like
            afterthoughts.
          </p>
          <p>
            The student population gives the neighborhood a youthful energy
            that fluctuates with the academic calendar. During the school
            year, the streets between Augsburg University and the West Bank
            campus are busy with foot traffic. In summer, the energy shifts —
            fewer students, more of the permanent community visible, a
            different rhythm. This seasonal oscillation is part of
            Cedar-Riverside&apos;s character, a reminder that the neighborhood
            serves multiple populations whose daily lives overlap
            geographically but not always socially.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/seward" className="text-[#2a9d8f] hover:underline">
              Seward
            </Link>{" "}
            to the south and{" "}
            <Link href="/neighborhoods/elliot-park" className="text-[#2a9d8f] hover:underline">
              Elliot Park
            </Link>{" "}
            to the north share some of Cedar-Riverside&apos;s urban density,
            but neither has the same combination of immigrant community,
            university presence, and counterculture legacy. Cedar-Riverside
            is sui generis in Minneapolis — a neighborhood that doesn&apos;t
            have a direct comparison, because the forces that shaped it are
            too specific and too layered to have been replicated elsewhere.
          </p>
        </Prose>
        <Quote
          text="I came from Mogadishu in 1997. This is where I raised my children. They are Americans now but they know where they come from. This neighborhood — it held us when we needed holding."
          cite="Cedar-Riverside resident, community oral history project"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Cedar-Riverside Food, Drink & Local Spots">
        <Prose>
          <p>
            The food in Cedar-Riverside is divided into two distinct
            ecosystems that share the same geography but serve different
            communities — though the borders are more porous than they appear.
            The first is the Somali restaurant corridor along Cedar Avenue,
            which offers some of the most authentic East African food in North
            America. The second is the West Bank bar-and-venue scene, older
            and smaller than it once was but still alive in a handful of
            places that have survived every wave of change the neighborhood
            has thrown at them. And then there is Hard Times Cafe, which
            belongs to both worlds and neither.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/cedar-riverside/cedar-avenue.webp"
          alt="Somali restaurants and shops along Cedar Avenue in Cedar-Riverside, Minneapolis"
          caption="Cedar Avenue through Little Mogadishu — Somali restaurants, groceries, and shops line the corridor"
        />

        <ArticleSubsection title="Somali Restaurants & Markets">
          <PlaceCardComponent place={{ name: "Safari Restaurant", tag: "Somali", price: "$", description: "310 Cedar Ave. S. Safari is the institution — the restaurant that most Minneapolitans think of first when they think of Somali food in the Twin Cities. The goat suqaar is deeply spiced and served with rice, banana, and a salad that nobody orders for the salad. The sambusas are hand-folded and fried to order. The tea — spiced with cardamom, cinnamon, and clove — is essential. The dining room is no-frills and often crowded. Cash preferred." }} />
          <PlaceCardComponent place={{ name: "Hamdi Restaurant", tag: "Somali", price: "$", description: "510 Cedar Ave. S. Hamdi serves a similar menu to Safari — goat, chicken, rice, sambusas, tea — but with its own loyal following and its own particular approach to seasoning. The debate over whether Safari or Hamdi is better is one of Cedar-Riverside&apos;s enduring conversations, and the correct answer is both." }} />
          <PlaceCardComponent place={{ name: "Daryeel Grocery & Deli", tag: "Somali / East African Grocery", price: "$", description: "Cedar Avenue. Part grocery, part deli, Daryeel sells imported goods — camel milk, Somali spice blends, halal meats — alongside prepared food. The grocery section is worth exploring even if you&apos;re not cooking Somali food; the spice selection alone is an education." }} />
          <PlaceCardComponent place={{ name: "Quruxlow Restaurant", tag: "Somali", price: "$", description: "Cedar Avenue corridor. A popular spot for lunch, serving Somali staples including goat, chicken suqaar, and hilib ari. The portions are generous and the prices are remarkably low by any standard. A full meal with tea rarely exceeds ten dollars." }} />
        </ArticleSubsection>

        <ArticleSubsection title="West Bank Bars & Venues">
          <PlaceCardComponent place={{ name: "Palmer&apos;s Bar", tag: "Dive Bar / Live Music", price: "$", description: "500 Cedar Ave. S. Palmer&apos;s has been open since 1906 — making it one of the oldest bars in Minneapolis — and it has survived Prohibition, urban renewal, freeway construction, and the complete demographic transformation of the surrounding neighborhood. It is a dive bar in the most honorable sense: cheap drinks, live music most nights (blues, punk, folk, country, whatever), a clientele that includes grad students, construction workers, old-timers, and people who have been coming here since the Carter administration. The back patio is one of the great unpretentious outdoor drinking spaces in the city." }} />
          <PlaceCardComponent place={{ name: "The Cabooze", tag: "Live Music Venue", price: "$$", url: "https://cabooze.com", description: "917 Cedar Ave. S. The Cabooze is a mid-size live music venue that has been booking shows on the West Bank since 1974. It occupies a sweet spot between club and concert hall — big enough for national touring acts, small enough that the energy stays intimate. The outdoor stage operates in summer. Blues, rock, country, and hip-hop all pass through. The Cabooze is not cool in the way that newer venues try to be; it&apos;s cool in the way that a place that has been doing the same thing well for fifty years is cool." }} />
          <PlaceCardComponent place={{ name: "Cedar Cultural Center", tag: "Live Music / Arts Venue", price: "$$", url: "https://thecedar.org", description: "416 Cedar Ave. S. The Cedar is a nonprofit performing arts venue that specializes in global, folk, and roots music — the kind of programming you won&apos;t find at First Avenue or the bigger clubs. It books artists from West Africa, the Middle East, Latin America, and the American folk tradition with curatorial intelligence that has earned it a national reputation. The room is small (maybe 450 capacity), the sound is excellent, and the audience actually listens. The Cedar is one of the most important cultural institutions on the West Bank and one of the best small venues in the Midwest." }} />
          <Prose>
            <p>
              Triple Rock Social Club, the punk and indie venue at 629 Cedar
              Avenue South, closed in 2017. Its absence is still felt. Founded
              by Erik Funk of the punk band Dillinger Four, Triple Rock was a
              place where the DIY ethos of punk rock met the rigor of a
              well-run venue — excellent sound, fair booking practices,
              a kitchen that served surprisingly good food. Its closure
              removed one of the West Bank&apos;s most vital cultural anchors
              and has not been replaced.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Everything Else">
          <PlaceCardComponent place={{ name: "Hard Times Cafe", tag: "Vegetarian / Vegan Cafe", price: "$", description: "1821 Riverside Ave. Hard Times is a worker-owned, cash-only, vegetarian and vegan cafe that has been feeding the West Bank since 1993. The menu is comfort food reimagined without meat — huevos rancheros (with eggs), massive burritos, pancakes, strong coffee. The walls are covered in flyers, stickers, and the accumulated visual history of three decades of counterculture. Hard Times is open late, is proudly anti-corporate, and serves the kind of food that sustains both the body and a certain worldview. If you don&apos;t get it, this isn&apos;t your place. If you do, you&apos;ll come back." }} />
          <PlaceCardComponent place={{ name: "Acadia Cafe", tag: "Bar / Cafe", price: "$–$$", description: "329 Cedar Ave. S. Acadia occupies the space between bar and cafe with an extensive tap list of craft beer and a menu of sandwiches and pub food that is better than it needs to be. The upstairs has a quieter vibe suited for studying or conversation; the downstairs bar gets louder as the evening progresses. It&apos;s one of the few places in Cedar-Riverside where the student, Somali, and West Bank old-guard populations all show up, if not always at the same hours." }} />
          <PlaceCardComponent place={{ name: "Afro Deli & Grill", tag: "East African / Fusion", price: "$", description: "720 Washington Ave. SE (technically across the river, but deeply connected to Cedar-Riverside&apos;s community). Afro Deli bridges East African and American food traditions with wraps, rice bowls, sambusas, and a menu that a U of M student described as &apos;Somali Chipotle, but actually good.&apos; Multiple locations now, but the original captures the spirit." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Coffee & Tea">
          <Prose>
            <p>
              The Somali tea tradition is the dominant coffee-and-tea culture in
              Cedar-Riverside, and it is not something you will find at a
              Starbucks. Shaah (Somali tea) — black tea brewed strong with
              cardamom, cinnamon, clove, and sugar — is served at virtually
              every Somali restaurant and at dedicated tea shops along Cedar
              Avenue. The tea shops function as social spaces, particularly for
              Somali men, in a way that is closer to the European cafe tradition
              than the American coffee shop model. For conventional espresso
              drinks, the university corridor offers chains and indie options,
              but the honest recommendation is to drink the tea. It is better
              than whatever latte you were going to order.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Cedar-Riverside">
        <Prose>
          <p>
            Cedar-Riverside is not a parks neighborhood. The freeway borders,
            the institutional land use, and the density leave limited room for
            green space within the neighborhood&apos;s boundaries. What parks
            exist are small and functional rather than scenic. But the
            neighborhood&apos;s cultural infrastructure — anchored by the Cedar
            Cultural Center and the university&apos;s arts programming — is
            disproportionately rich for its size, and the Mississippi River is
            close enough to provide genuine outdoor access for those willing
            to walk or bike to it.
          </p>
        </Prose>

        <ArticleSubsection title="Brian Coyle Community Center">
          <Prose>
            <p>
              The Brian Coyle Community Center at 420 15th Avenue South is
              the civic heart of Cedar-Riverside&apos;s Somali community and
              one of the most important community institutions in the
              neighborhood. Named for the first openly gay member of the
              Minneapolis City Council, who represented this area until his
              death from AIDS in 1991, the center provides youth programming,
              after-school activities, a gymnasium, computer labs, and social
              services that serve a predominantly East African population.
              Brian Coyle is where community meetings happen, where kids play
              basketball after school, and where new arrivals connect with
              resources. It is essential infrastructure in a neighborhood
              that needs more of it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Cedar Cultural Center">
          <Prose>
            <p>
              The Cedar Cultural Center deserves mention here as well as in
              the food-and-drink section, because it functions as both a
              music venue and a community cultural institution. Its
              programming — which spans global, folk, roots, and experimental
              music — reflects the neighborhood&apos;s international character
              in ways that feel intentional rather than performative. The
              Cedar hosts community events, cultural festivals, and
              educational programming alongside its concert calendar. It is
              a 501(c)(3) nonprofit, supported by grants, donations, and
              ticket sales, and its survival through decades of neighborhood
              change is a testament to how much the community values what
              it provides.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/cedar-riverside/cedar-cultural-center.webp"
            alt="The Cedar Cultural Center on Cedar Avenue in Minneapolis"
            caption="The Cedar Cultural Center — global music in a neighborhood that contains the world"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Currie Park">
          <Prose>
            <p>
              Currie Park, at the intersection of Cedar Avenue and Riverside
              Avenue, is Cedar-Riverside&apos;s primary green space — a small
              park with a playground, basketball courts, and open lawn area
              that serves as the neighborhood&apos;s outdoor gathering place.
              On summer evenings, the park fills with families from the towers,
              kids playing soccer, and the social energy of a community that
              spends much of the year confined indoors by weather. The park
              hosts community events and cultural celebrations, including
              programming connected to Somali Independence Day and Eid. It is
              not a destination park — it&apos;s a neighborhood park, and in a
              neighborhood this dense, that matters enormously.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="West Bank Campus & Augsburg">
          <Prose>
            <p>
              The University of Minnesota&apos;s West Bank campus, while
              primarily institutional, provides de facto public space —
              plazas, walkways, and the Weisman Art Museum (designed by
              Frank Gehry, visible from the river as a cascade of stainless
              steel). The Weisman is technically on the East Bank, connected
              by the Washington Avenue Bridge, but it is functionally part
              of the West Bank&apos;s cultural orbit. Augsburg University&apos;s
              campus along Riverside Avenue offers additional green space
              and architectural interest, including Murphy Square and the
              campus quad. Neither is a park in the traditional sense, but
              both contribute to the neighborhood&apos;s livability in ways
              that don&apos;t show up in acreage statistics.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Mississippi River">
          <Prose>
            <p>
              The Mississippi River forms Cedar-Riverside&apos;s eastern
              boundary, and while direct river access from the neighborhood
              is limited by topography and infrastructure, the river trails
              are reachable by bike or on foot. The West River Parkway trail
              system runs along the river south toward Minnehaha Falls, and
              the Washington Avenue Bridge connects to the East Bank and the
              river gorge trails. For Cedar-Riverside residents, the river is
              a five-minute bike ride rather than a backyard amenity — but
              it&apos;s there, and its presence gives the neighborhood an
              eastern horizon that opens up beyond the density.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Cedar-Riverside Schools">
        <Prose>
          <p>
            Education in Cedar-Riverside exists at two scales that rarely
            interact: the neighborhood K-12 schools, which serve one of the
            most linguistically diverse student populations in Minnesota, and
            the two universities, which bring twenty-something students from
            across the country and the world. Both are defining features of
            the neighborhood, but the K-12 schools carry the heavier burden
            and deserve the closer attention.
          </p>
          <p>
            The neighborhood&apos;s elementary students are served by several
            Minneapolis Public Schools options, with many families in the
            Somali community choosing schools with strong English Language
            Learner (ELL) programs. The student population in and around
            Cedar-Riverside is among the most multilingual in the state —
            Somali, Oromo, Amharic, Spanish, and Karen are all spoken in
            local classrooms alongside English. Test scores at neighborhood
            schools have historically been below city and state averages,
            reflecting the socioeconomic challenges that many families face
            rather than the dedication of teachers or the intelligence of
            students.
          </p>
          <p>
            For middle and high school, students access Minneapolis Public
            Schools options through open enrollment and geographic
            assignment. South High School, Roosevelt High School, and
            several charter schools serve Cedar-Riverside families. The
            charter school presence is notable — several schools in and near
            the neighborhood were founded specifically to serve the Somali
            and East African community, offering culturally responsive
            programming and bilingual instruction.
          </p>
          <p>
            The University of Minnesota&apos;s West Bank campus brings
            approximately 10,000 students and staff to the neighborhood daily
            during the academic year. The Carlson School of Management, the
            Humphrey School of Public Affairs, the Law School, the School of
            Social Work, and several College of Liberal Arts departments are
            housed here. Augsburg University, a private liberal arts school
            affiliated with the Evangelical Lutheran Church in America,
            enrolls approximately 3,000 students at its campus along
            Riverside Avenue. Together, the universities are the
            neighborhood&apos;s largest employers and its most significant
            daily population drivers.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Cedar-Riverside Real Estate & Housing">
        <Prose>
          <p>
            Cedar-Riverside&apos;s housing market is dominated by one building
            to a degree that is unusual even in dense urban neighborhoods.
            Riverside Plaza — its 1,300-plus units of affordable and subsidized
            housing — accounts for a huge share of the neighborhood&apos;s
            total housing stock. Beyond the towers, the market is a mix of
            older apartment buildings, duplexes, university-oriented rentals,
            and a small number of condominiums and single-family homes. This
            is overwhelmingly a renter&apos;s neighborhood — more than 85
            percent of housing units are renter-occupied.
          </p>
        </Prose>

        <ArticleSubsection title="Riverside Plaza">
          <Prose>
            <p>
              Riverside Plaza is not a conventional rental property. The
              complex operates under a mix of project-based Section 8
              contracts, tax credit programs, and other affordable housing
              mechanisms that keep rents well below market rate. For many
              Somali and East African families, the towers offer something
              that is genuinely hard to find in Minneapolis: large apartments
              (three and four bedrooms) at rents that a family on a modest
              income can manage. The waiting list is long, and units turn
              over slowly.
            </p>
            <p>
              The condition of Riverside Plaza is a subject of ongoing
              concern. The complex has faced criticism for maintenance
              issues — heating problems, elevator outages, pest infestations,
              hallway conditions — that fall disproportionately on residents
              who have limited housing alternatives. Ownership has changed
              hands over the decades, and each transition has brought
              promises of investment that have been unevenly kept. The
              building&apos;s Brutalist design, while architecturally
              significant, creates maintenance challenges that are expensive
              to address, and the tension between the building&apos;s cultural
              importance and its physical shortcomings is a defining issue in
              Cedar-Riverside housing politics.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market Beyond the Towers">
          <Prose>
            <p>
              Outside Riverside Plaza, one-bedroom apartments in
              Cedar-Riverside typically rent for $900 to $1,300 per month as
              of 2025 — among the lowest rents in central Minneapolis,
              reflecting both the age of the housing stock and the
              neighborhood&apos;s challenges. Student-oriented rentals near
              the universities tend toward the higher end of the range, with
              newer or renovated units commanding premiums. Older walk-ups
              and unrenovated units can still be found under $900, though
              condition varies significantly.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Buying in Cedar-Riverside">
          <Prose>
            <p>
              The owner-occupied market in Cedar-Riverside is small. Condos
              occasionally come to market in the $150,000 to $250,000 range.
              Single-family homes are rare and, when they appear, tend to
              sell in a similar range — well below the citywide median. The
              limited inventory reflects the neighborhood&apos;s
              overwhelmingly rental character and the fact that institutional
              land use (universities, freeway corridors) consumes a
              significant share of the buildable land. Investors are active
              in the small multi-family market, purchasing duplexes and
              small apartment buildings for rental income.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="New Development">
          <Prose>
            <p>
              Development pressure is increasing, driven by the light rail
              stations and university proximity. Several new apartment
              projects have been built or proposed near the West Bank
              Station, bringing market-rate units to a neighborhood where
              they have historically been scarce. This development is
              contentious. Proponents argue it brings investment and helps
              meet regional housing demand. Opponents — particularly in the
              Somali community — worry that market-rate development will
              raise surrounding rents, displace small businesses, and
              transform a neighborhood that currently serves low-income
              residents into one that serves a wealthier, whiter population.
              The tension is real and unresolved.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="Where are people supposed to go? This is where our community is — the mosque, the shops, the people we know. You cannot just move us to Brooklyn Park and say it&apos;s the same." cite="Cedar-Riverside community member, development hearing" />
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/cedar-riverside/riverside-plaza.webp"
        alt="Riverside Plaza towers in Cedar-Riverside, Minneapolis, with colorful panels visible on the Brutalist facade"
        caption="Riverside Plaza — Ralph Rapson's Brutalist landmark — houses roughly 4,000 residents in over 1,300 units"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Cedar-Riverside">
        <Prose>
          <p>
            Cedar-Riverside has the best transit access of any residential
            neighborhood in Minneapolis outside of downtown. The West Bank
            Station, served by both the Blue Line and Green Line light rail,
            sits within the neighborhood and provides direct connections to
            downtown Minneapolis (5 minutes), the University of Minnesota
            East Bank campus (one stop), downtown St. Paul (25 minutes), the
            Mall of America (30 minutes), and MSP Airport (25 minutes). This
            is not theoretical transit — it is fast, frequent, and used daily
            by a significant share of the neighborhood&apos;s population.
          </p>
          <p>
            Bus service adds further connectivity. Multiple Metro Transit
            routes serve Cedar Avenue, Riverside Avenue, and Washington
            Avenue, connecting the neighborhood to destinations across
            Minneapolis and the broader metro area. The Transit Score of 78
            is among the highest in the city and reflects the convergence of
            rail and bus service in a compact area. Many Cedar-Riverside
            residents — including a large share of the Somali community —
            rely on transit as their primary transportation, making the
            quality and reliability of service a daily-life issue rather
            than an abstract policy question.
          </p>
          <p>
            The Walk Score of approximately 90 reflects the neighborhood&apos;s
            compact geography and dense commercial corridors. Groceries,
            restaurants, community services, and transit are all within
            walking distance of most addresses. The Bike Score of 95 is one
            of the highest in Minneapolis, reflecting strong cycling
            infrastructure including protected lanes on Washington Avenue
            and connections to the university campus and river trail system.
            The Washington Avenue Bridge — which carries both cars and a
            separate enclosed pedestrian/bike level — connects
            Cedar-Riverside to the East Bank and Dinkytown.
          </p>
          <p>
            Driving is easy in terms of highway access — I-94 borders the
            neighborhood on two sides and puts downtown within five minutes
            and the airport within twenty. Parking is generally easier than
            in denser neighborhoods like Whittier or Uptown, partly because
            the university provides structured parking and partly because the
            neighborhood&apos;s overall car ownership rate is lower than
            average. Street parking is metered in some areas near campus and
            unrestricted in others.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What&apos;s Changing: The Honest Version">
        <Prose>
          <p>
            Cedar-Riverside&apos;s tensions are not the tensions of a
            neighborhood becoming something new. They are the tensions of
            a neighborhood that contains multiple worlds — worlds that
            coexist in the same square mile but experience that square mile
            in fundamentally different ways. The conversation about what is
            changing here is really a conversation about which world gets
            prioritized, and by whom.
          </p>
        </Prose>

        <ArticleSubsection title="Poverty and Its Consequences">
          <Prose>
            <p>
              Cedar-Riverside is one of the poorest neighborhoods in
              Minneapolis by most measures — median household income, poverty
              rate, percentage of residents receiving public assistance. This
              is not an abstraction. It means families choosing between
              groceries and winter coats. It means overcrowding in apartments
              designed for smaller households. It means health outcomes that
              are worse than the city average, educational achievement gaps
              that are persistent, and a level of economic stress that shapes
              every other issue in the neighborhood. The Somali community,
              which constitutes the majority of the neighborhood&apos;s
              low-income population, faces the additional challenges of
              navigating American systems in a second or third language,
              dealing with discrimination, and maintaining cultural identity
              while adapting to a society that doesn&apos;t always make space
              for difference.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Public Safety">
          <Prose>
            <p>
              Crime in Cedar-Riverside is a real concern that lands
              differently depending on who you are and where you live. The
              area around Riverside Plaza and certain blocks of Cedar Avenue
              have experienced elevated rates of assault, robbery, and — in
              some periods — more serious violent crime. Some of this is
              connected to broader urban dynamics; some is connected to
              specific circumstances including youth gang activity and the
              social dislocation that accompanies deep poverty. The
              relationship between the Somali community and the Minneapolis
              Police Department has been complicated, shaped by language
              barriers, cultural differences in expectations around policing,
              and high-profile incidents that have eroded trust.
            </p>
            <p>
              Community-based safety initiatives — including the work of the
              Brian Coyle Center, the Cedar-Riverside Opportunity Center, and
              various youth programs — represent the neighborhood&apos;s own
              response to safety challenges. These efforts are underfunded
              relative to the scale of the need, but they are real and they
              are producing results in terms of youth engagement and conflict
              resolution. The honest assessment is that Cedar-Riverside is
              not as safe as many Minneapolis neighborhoods, that the safety
              challenges are connected to poverty rather than to any
              inherent characteristic of the community, and that solutions
              require investment in people, not just policing.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development Pressure on Somali Small Businesses">
          <Prose>
            <p>
              The Somali commercial corridor along Cedar Avenue is one of the
              most culturally significant stretches of commercial real estate
              in Minneapolis. It is also vulnerable. As land values rise —
              driven by light rail, university expansion, and broader
              development trends — the small storefronts that house Somali
              restaurants, groceries, and shops face pressure from rising
              commercial rents and redevelopment proposals that would replace
              them with larger, newer buildings oriented toward different
              markets. Some Somali business owners own their buildings; many
              do not, and those who lease are at the mercy of landlord
              decisions they cannot control.
            </p>
            <p>
              The loss of even a few anchor businesses would change the
              character of Cedar Avenue fundamentally. Community organizations
              and advocacy groups have pushed for protections — commercial
              rent stabilization, community benefit agreements tied to new
              development, small business assistance programs — but the
              structural forces are powerful, and the history of American
              urban development does not offer many examples of immigrant
              commercial corridors surviving sustained market pressure
              without institutional protection.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Riverside Plaza&apos;s Future">
          <Prose>
            <p>
              The towers are approaching their sixth decade, and the
              questions about their future are becoming more urgent. The
              building needs significant capital investment — in mechanical
              systems, facades, common areas, and individual units. The
              affordable housing contracts that keep rents low have
              expiration dates that create periodic uncertainty about the
              building&apos;s future as affordable housing. Conversion to
              market-rate would be devastating to the community that lives
              there; continued operation as affordable housing requires
              investment that someone has to pay for. The building&apos;s
              designation as a potential historic landmark — both for its
              architectural significance and its cultural importance to the
              Somali community — adds another layer of complexity. Riverside
              Plaza&apos;s future is Cedar-Riverside&apos;s future, and
              getting it right matters far beyond the neighborhood&apos;s
              borders.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Student and Immigrant Community Dynamics">
          <Prose>
            <p>
              The overlap between Cedar-Riverside&apos;s two largest
              populations — university students and Somali/East African
              families — is geographically intimate and socially limited.
              Students and immigrant families share sidewalks, bus stops,
              and grocery stores, but their daily lives, social networks,
              and relationships to the neighborhood are fundamentally
              different. Students are transient; families are permanent (or
              trying to be). Students have institutional support from their
              universities; families navigate a patchwork of social services
              and community organizations. Students experience the
              neighborhood as a stage of life; families experience it as
              home.
            </p>
            <p>
              This dynamic creates friction in small ways — noise complaints,
              parking conflicts, different expectations about public space —
              and in larger ways, including the question of whose interests
              get centered in development decisions and neighborhood
              planning. The universities are the neighborhood&apos;s most
              powerful institutional actors, and their expansion decisions
              have historically prioritized institutional needs over
              community needs. Augsburg, to its credit, has invested in
              community partnerships and programs that bridge the gap. The
              University of Minnesota&apos;s relationship with
              Cedar-Riverside is more complex, shaped by the scale of the
              institution and the history of campus expansion that displaced
              neighborhood residents.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/cedar-riverside/west-bank.webp"
        alt="The West Bank area of Cedar-Riverside with Palmer's Bar and neighborhood storefronts"
        caption="The West Bank — where the counterculture legacy and the immigrant present share the same blocks"
      />

      {/* FAQ */}
      <ArticleSection id="faq" title="Cedar-Riverside FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
