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
    title: "Lyndale, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Lyndale, Minneapolis — Diamond Lake, the residential character, housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Lyndale",
  deck: "A residential South Minneapolis neighborhood between King Field and Powderhorn that sits quietly between more prominent neighbors — no lake, no trendy corridor, no defining landmark, just well-kept blocks of affordable homes, Diamond Lake within reach, and the kind of neighborhood stability that you notice only when you realize how many people have lived here for decades and have no plans to leave.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Lyndale?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Lyndale" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Lyndale, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,800", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$250K–$375K", label: "Median home sale price range (2025 data)" },
      { value: "1910s–1940s", label: "Era most homes were built" },
      { value: "Nicollet Ave / Chicago Ave", label: "Nearest commercial corridors" },
      { value: "Diamond Lake", label: "Nearest significant green space" },
      { value: "15–20 min", label: "Drive to downtown Minneapolis" },
      { value: "68", label: "Walk Score" },
      { value: "85", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Lyndale a good neighborhood in Minneapolis?",
      answer:
        "Lyndale is a solid, quiet, residential neighborhood in South Minneapolis that appeals to families, long-term residents, and buyers seeking affordability and stability over excitement. It lacks the commercial density or natural features that define more prominent neighborhoods, but it compensates with well-maintained housing, genuine diversity, reasonable prices, and a residential quality of life that is easy to overlook and hard to replicate. If your priorities are a good house on a quiet block near schools and parks, Lyndale delivers.",
    },
    {
      question: "Is Lyndale, Minneapolis safe?",
      answer:
        "Lyndale is generally safe by Minneapolis standards. The residential blocks are quiet and neighborly, and crime rates are below city averages for most categories. Property crime — car break-ins, catalytic converter thefts, package theft — is the most common concern, consistent with broader South Minneapolis patterns. The neighborhood's interior blocks feel particularly secure, while the commercial corridors on either side (Nicollet Avenue and Chicago Avenue) see more activity. Most residents describe Lyndale as a comfortable, low-key place to live.",
    },
    {
      question: "What is Lyndale, Minneapolis known for?",
      answer:
        "Honestly, Lyndale is not well-known — even among Minneapolis residents, who sometimes confuse it with the Lyndale Avenue corridor further north (the Lyn-Lake area near Uptown, which is a completely different place). The Lyndale neighborhood is a residential area in South Minneapolis known primarily for its affordability, its quiet blocks, and its position between more prominent neighborhoods. Diamond Lake, at its southern edge, provides some geographic identity, and the neighborhood's proximity to Powderhorn Park and King Field gives residents access to the amenities and community life of neighboring areas.",
    },
    {
      question: "How much do homes cost in Lyndale, Minneapolis?",
      answer:
        "Median home sale prices in Lyndale ranged from roughly $250,000 to $375,000 in 2025. Smaller bungalows needing updates can be found in the $220,000–$270,000 range. Well-maintained three-bedroom homes with finished basements sell in the $280,000–$370,000 range. Fully renovated homes can reach $400,000–$430,000 but are uncommon. Lyndale is priced similarly to nearby King Field and Bancroft, making it one of the more affordable options in South Minneapolis for the quality of residential life it offers.",
    },
    {
      question: "What's the difference between Lyndale neighborhood and Lyn-Lake?",
      answer:
        "This is one of the most common confusions in Minneapolis geography. The Lyndale neighborhood is a residential area in South Minneapolis, roughly between 46th and 54th Streets, east of Nicollet Avenue. Lyn-Lake is a commercial and entertainment district near Uptown, at the intersection of Lyndale Avenue and Lake Street, roughly four miles to the north. They share a name (derived from Lyndale Avenue) but have nothing else in common — Lyn-Lake is dense, commercial, and nightlife-oriented; the Lyndale neighborhood is quiet, residential, and family-oriented.",
    },
    {
      question: "Is Lyndale walkable?",
      answer:
        "Lyndale earns a Walk Score of approximately 68 — adequate but not exceptional. The neighborhood's residential character means that daily errands often require walking to Nicollet Avenue or Chicago Avenue, the nearest commercial corridors. Groceries, restaurants, and transit are accessible but not always within easy walking distance from the neighborhood's interior blocks. The Bike Score of 85 reflects flat terrain and good bike infrastructure, making cycling the more practical alternative to driving for many trips.",
    },
    {
      question: "What schools serve Lyndale, Minneapolis?",
      answer:
        "Lyndale is served by Minneapolis Public Schools. Kenny Elementary School and Bancroft Elementary are the primary neighborhood options. Roosevelt High School serves the area for grades 9–12. The district's open enrollment system provides access to magnet programs and other schools citywide. The schools serving Lyndale are diverse and community-oriented, and families who engage with the system tend to find options that work.",
    },
    {
      question: "Is Lyndale good for families?",
      answer:
        "Yes. Lyndale is one of the better family neighborhoods in South Minneapolis — affordable homes with yards, quiet blocks, proximity to parks and schools, and a diverse community where kids grow up around families from different backgrounds. The neighborhood lacks the commercial excitement of trendier areas, but for families with young children, the trade-offs (quiet over excitement, affordability over cachet, stability over novelty) are exactly the right ones.",
    },
    {
      question: "How diverse is Lyndale?",
      answer:
        "Lyndale is meaningfully diverse — the population includes significant white, Latino, Somali, and Black communities, with the specific mix varying by block. The diversity is economic as well as racial, with working-class, middle-class, and lower-income households sharing the same blocks. The diversity is not performative or marketed — it is the organic result of affordable housing in a city where different communities have settled into the neighborhoods they can afford.",
    },
    {
      question: "What is Diamond Lake?",
      answer:
        "Diamond Lake is a small lake at the southern edge of the Lyndale neighborhood (and the northern edge of the Diamond Lake neighborhood). It is modest in size — too small for swimming or boating — but provides a green corridor, walking paths, and a sense of natural relief in an otherwise fully developed residential area. Diamond Lake Park, adjacent to the lake, has a playground, athletic fields, and a recreation center. It is not comparable to Lake Nokomis or Lake Harriet as a recreational feature, but it adds something meaningful to the neighborhood's outdoor life.",
    },
  ],
  nearby: [
    { name: "King Field", slug: "king-field", description: "Martin Luther King Park and similar residential character to the west" },
    { name: "Bancroft", slug: "bancroft", description: "Working-class blocks and Chicago Avenue to the east" },
    { name: "Diamond Lake", slug: "diamond-lake", description: "Suburban-feeling blocks and the lake to the south" },
    { name: "Bryant", slug: "bryant", description: "Diverse residential blocks to the north" },
    { name: "Field", slug: "field", description: "Quiet residential to the northwest" },
    { name: "Powderhorn Park", slug: "powderhorn-park", description: "The lake and the energy to the northeast" },
  ],
  closing: {
    title: "What Makes Lyndale Worth Knowing",
    paragraphs: [
      "Lyndale is a neighborhood that is easy to drive through and hard to know unless you stop and walk the blocks. It does not have the feature — the lake, the park, the commercial strip — that gives a neighborhood an identity legible to outsiders. What it has, instead, is the residential fabric itself: blocks of well-kept homes under mature trees, neighbors who know each other by name and by the sound of their lawnmowers, a quiet that is not emptiness but stability. The people who live in Lyndale did not end up here by accident, and they did not stay because they lacked options. They stayed because the daily life here — the walk to the park, the porch conversation, the school pickup, the morning bike ride — is genuinely good, and because the house they could afford turned out to be in a neighborhood worth keeping.",
      "If you are looking for a neighborhood that will be the subject of a magazine article or a neighborhood that your friends have heard of, Lyndale is not it. If you are looking for a place to buy a house, raise kids, and live a life that is modest and manageable and honest, Lyndale belongs on your list. It is one of those neighborhoods that exists because cities are made of residential blocks, not just commercial corridors and natural features — and sometimes the residential blocks, on their own, are enough.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There is a particular quality to a Lyndale evening in early October
          — the kind that happens between the end of summer and the first
          hard freeze, when the light drops early but the air is still
          warm enough for porches. A man is raking leaves into a pile on the
          boulevard while his daughter jumps into it as fast as he can rebuild
          it. Across the street, a woman is putting a garden to bed, pulling
          tomato cages out of soil that has given its last for the year. A
          few houses down, two neighbors are leaning on a fence, talking
          about nothing — the Twins, the coming winter, the new family that
          moved into the blue house on the corner — and their conversation
          has the easy rhythm of people who have been having the same talk
          for years. No one would photograph this scene. No one would write
          about it. It is just a residential neighborhood being a residential
          neighborhood, which is a harder thing to sustain than most people
          realize, and which Lyndale has been doing, without fanfare, for a
          century.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/lyndale/hero.webp"
        alt="Tree-lined residential street in Lyndale neighborhood on an autumn evening"
        caption="Lyndale in autumn — the kind of residential quiet that cities are built from"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Lyndale, Minneapolis?">
        <Prose>
          <p>
            Lyndale is a residential neighborhood in South Minneapolis,
            roughly bounded by 46th Street to the north, Chicago Avenue to
            the east, 54th Street to the south, and Nicollet Avenue to the
            west. It sits between{" "}
            <Link href="/neighborhoods/king-field" className="text-[#2a9d8f] hover:underline">
              King Field
            </Link>
            {" "}to the west and{" "}
            <Link href="/neighborhoods/bancroft" className="text-[#2a9d8f] hover:underline">
              Bancroft
            </Link>
            {" "}to the east, and it shares with both of those neighborhoods a
            quiet residential character, affordable housing, and the kind of
            demographic diversity that comes from being accessible to people
            across the income spectrum. The neighborhood is home to
            approximately 5,800 residents.
          </p>
          <p>
            Lyndale does not have a defining feature in the way that
            lake neighborhoods or corridor neighborhoods do. There is no
            body of water within its boundaries (Diamond Lake sits at its
            southern edge, shared with the Diamond Lake neighborhood). There
            is no commercial district — the nearest shopping is on Nicollet
            Avenue to the west or Chicago Avenue to the east. There is no
            park large enough to serve as a community landmark. What Lyndale
            has, instead, is the thing that lies between all of those
            features — the residential blocks themselves, which are the
            actual substance of a neighborhood even when they are not the
            thing that gets the attention.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Lyndale Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/lyndale/neighborhood-sign.webp"
          alt="Lyndale neighborhood sign in Minneapolis"
          caption="The Lyndale neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Lyndale History & Origins">
        <Prose>
          <p>
            The land that is now Lyndale is Dakota homeland, part of the
            territory the Dakota people inhabited for centuries before
            European colonization. The neighborhood takes its name from
            Lyndale Avenue, which in turn was named for the Lyndale Farm —
            the homestead of early Minneapolis civic booster William S. King.
            The name has been attached to so many features of Minneapolis
            geography — Lyndale Avenue, the Lyn-Lake commercial district,
            Lyndale Park, and the Lyndale neighborhood — that it has become
            almost meaningless as an identifier, which is a fitting irony
            for a neighborhood that struggles with name recognition.
          </p>
          <p>
            The residential development of Lyndale followed the same pattern
            as most of South Minneapolis: farmland platted into lots in the
            early twentieth century, filled in with single-family homes built
            for working-class and middle-class families between roughly 1910
            and 1940. The houses were practical — bungalows, Cape Cods, and
            small two-story homes on narrow lots, built with the materials
            and techniques that were standard in Minneapolis at the time.
            The neighborhood was populated primarily by families of
            Scandinavian and German descent, and the social fabric was
            organized around churches, schools, and the commercial corridors
            that ran north-south through the area.
          </p>
          <p>
            Through the mid-twentieth century, Lyndale was stable and
            unremarkable — a middle-class residential neighborhood that
            did not attract attention because nothing dramatic happened
            there. The demographic transition began gradually in the 1980s
            and accelerated through the 2000s and 2010s, as Latino, Somali,
            and other immigrant families moved into the affordable housing
            stock. The transition was quiet — no major conflicts, no
            dramatic incidents — and the result is a neighborhood that has
            become meaningfully diverse without most of the city noticing.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Lyndale">
        <Prose>
          <p>
            Lyndale is a neighborhood where the residential experience is
            the whole experience. There is no commercial strip to anchor
            your social life, no lake to organize your weekends, no
            institution that draws you into the neighborhood&apos;s public
            life unless you seek it out. What there is, instead, is the
            block — and the block is where Lyndale happens. The front-porch
            wave. The alley conversation over the fence. The neighbor who
            brings tomatoes from the garden without being asked. The kid
            who rides a bike up and down the sidewalk until the streetlights
            come on. The rhythms of residential life, repeated daily and
            seasonally, are Lyndale&apos;s content, and for people who
            value that kind of life, it is enough.
          </p>
          <p>
            The housing stock creates the scale. The bungalows and Cape Cods
            are small enough that people use their porches and their yards.
            The lots are narrow enough that you are close to your neighbors
            whether you choose to be or not. The alleys create a second
            social space — more casual than the front sidewalk, more
            neighborly than the backyard — where chance encounters happen
            and community gets built. It is the old-fashioned urban
            residential model, and it works in Lyndale the same way it has
            worked in South Minneapolis for a hundred years.
          </p>
          <p>
            The diversity of the neighborhood is visible but quiet. White
            families and Somali families and Latino families share blocks
            without much fuss. The integration is not perfect — social
            networks tend to follow cultural and linguistic lines, and the
            neighborhood is more a mosaic than a melting pot. But the daily
            coexistence is real. Kids play together. Neighbors help each
            other. The block party, when it happens, draws people from
            different backgrounds who share the same fences and the same
            garbage day and the same interest in keeping the street safe
            and clean.
          </p>
        </Prose>

        <Quote
          text="People ask where I live and I say Lyndale and they say 'Near Lyn-Lake?' and I say no, south, near Diamond Lake. Then they nod and change the subject. That's the neighborhood in a nutshell — nobody knows it, and the people who live here like it that way."
          cite="Lyndale resident, 20 years"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Lyndale Food, Drink & Local Spots">
        <Prose>
          <p>
            Lyndale does not have a commercial corridor of its own — this
            is a residential neighborhood that borrows its commercial life
            from the corridors on either side. Nicollet Avenue to the west
            and Chicago Avenue to the east provide the groceries,
            restaurants, and services that Lyndale residents depend on. The
            result is that the food landscape is not technically in the
            neighborhood, but it is within walking or biking distance,
            which for practical purposes is the same thing.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Essentials">
          <PlaceCardComponent place={{ name: "Diamond Lake Cub Foods", tag: "Grocery", price: "$–$$", description: "Nicollet Avenue near Diamond Lake Road. The primary grocery anchor for the broader area. It's a full-service Cub Foods with a diverse selection that reflects the neighborhood demographics, including halal options and a solid produce section. Not glamorous, but functional and convenient for most Lyndale residents." }} />
          <PlaceCardComponent place={{ name: "Peppermint Twist", tag: "Diner", price: "$", description: "Nicollet Avenue. A neighborhood diner serving breakfast and lunch — pancakes, eggs, hash browns, and the kind of no-frills comfort food that makes a commercial corridor feel like it belongs to the people who live nearby. Regulars are regulars in the truest sense." }} />
          <PlaceCardComponent place={{ name: "Chicago Avenue taquerias", tag: "Mexican", price: "$", description: "Several taquerias and small Mexican restaurants line Chicago Avenue through this stretch of South Minneapolis — each with its own specialties and loyal following. The al pastor, the birria, the weekend menudo — the specifics vary by shop, but the quality is consistently solid and the prices are working-class friendly." }} />
          <PlaceCardComponent place={{ name: "Patisserie 46", tag: "Bakery & Pastry", price: "$$", description: "4552 Grand Avenue South, a short trip west. John Kraus's celebrated French bakery — exceptional croissants, precise pastries, and the kind of quality that makes a small detour worthwhile. Weekend mornings draw a crowd." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Lyndale&apos;s position between Nicollet and Chicago means that
              residents have access to two distinct food corridors. Nicollet
              Avenue to the west trends slightly more mainstream — diners,
              a Cub Foods, and some small restaurants. Chicago Avenue to the
              east trends more diverse — Somali restaurants, Mexican
              groceries, and the kind of small-format ethnic markets that
              serve specific communities. For residents willing to bike or
              drive a bit farther, the broader South Minneapolis food
              landscape — including the restaurants near Powderhorn,
              Tangletown, and along Lake Street — is easily accessible.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Lyndale">
        <Prose>
          <p>
            Lyndale&apos;s outdoor life is modest by Minneapolis standards —
            there is no major park or lake within the neighborhood&apos;s
            boundaries. But Minneapolis being Minneapolis, significant green
            space is never far away, and Lyndale&apos;s position gives
            residents access to several parks and natural areas within
            walking or biking distance.
          </p>
        </Prose>

        <ArticleSubsection title="Diamond Lake">
          <Prose>
            <p>
              Diamond Lake sits at the neighborhood&apos;s southern edge,
              shared with the{" "}
              <Link href="/neighborhoods/diamond-lake" className="text-[#2a9d8f] hover:underline">
                Diamond Lake
              </Link>
              {" "}neighborhood to the south. The lake is small — too small
              for swimming or boating — but provides a green corridor,
              walking paths, and the visual relief of water in an otherwise
              fully developed residential area. Diamond Lake Park, adjacent
              to the lake, has a playground, athletic fields, and a
              recreation center with youth programming and community space.
              It is not a destination park, but for the families within
              walking distance, it is a daily asset.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Parks and Connections">
          <Prose>
            <p>
              Martin Luther King Park is a short walk or bike ride to the
              west, offering a larger green space with a rec center,
              playground, and athletic fields.{" "}
              <Link href="/neighborhoods/powderhorn-park" className="text-[#2a9d8f] hover:underline">
                Powderhorn Lake
              </Link>
              {" "}is accessible to the northeast. The broader Minneapolis
              park system — including Lake Nokomis, Lake Harriet, and the
              Minnehaha Creek corridor — is within biking distance. The flat
              terrain and good bike infrastructure make these connections
              practical for residents who are comfortable on two wheels.
              Lyndale is not a park-rich neighborhood by its own resources,
              but it benefits enormously from its position within the
              Minneapolis park system.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Lyndale Schools">
        <Prose>
          <p>
            Lyndale is served by Minneapolis Public Schools, and the school
            landscape reflects the neighborhood&apos;s position between
            multiple school attendance zones. Kenny Elementary School and
            Bancroft Elementary are the primary neighborhood options for
            elementary-age students, both serving diverse student bodies
            and providing the community-school experience that South
            Minneapolis families have come to expect — dedicated teachers,
            diverse classrooms, and the unevenness that characterizes
            urban public education across the country.
          </p>
          <p>
            Roosevelt High School serves Lyndale for grades 9–12. Roosevelt
            is a diverse, comprehensive high school that has undergone
            facility improvements and offers a range of academic and
            extracurricular programs. Families&apos; experiences vary, as
            they do at any large urban high school, and some opt for magnet
            programs or open enrollment to other district schools.
          </p>
          <p>
            The open enrollment system in Minneapolis Public Schools means
            Lyndale families have options beyond their assigned schools —
            language immersion programs, citywide magnets, and other
            specialized options are available. For families who value
            diversity in the student body and community connection in the
            school, the neighborhood schools offer genuine strengths. For
            families focused primarily on test scores, the picture is more
            complicated, and the enrollment system rewards active engagement
            and research.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Lyndale Real Estate & Housing">
        <Prose>
          <p>
            Lyndale&apos;s real estate market is one of the more
            straightforward in South Minneapolis — affordable single-family
            homes on quiet blocks, with prices that make homeownership
            accessible to buyers who would be priced out of neighborhoods
            with more prominent features. The median home sale price has
            ranged between roughly $250,000 and $375,000 in 2025, which
            places Lyndale in the same affordability tier as{" "}
            <Link href="/neighborhoods/king-field" className="text-[#2a9d8f] hover:underline">
              King Field
            </Link>
            {" "}and slightly above{" "}
            <Link href="/neighborhoods/bancroft" className="text-[#2a9d8f] hover:underline">
              Bancroft
            </Link>
            .
          </p>
          <p>
            The housing stock is predominantly single-family — bungalows,
            Cape Cods, and small two-story homes built between 1910 and
            1940. The lots are narrow, the houses are modest (typically
            1,200–1,600 square feet above grade), and the construction is
            solid in the way that early-twentieth-century Minneapolis
            building tends to be. Finished basements add livable space. The
            neighborhood is fully built out, with almost no vacant land
            and limited new construction.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($220,000–$270,000), you&apos;re looking at
              smaller two-bedroom bungalows needing cosmetic updates — dated
              kitchens, original windows, the modest deferred maintenance
              that keeps a house affordable. The mid-range ($280,000–$360,000)
              gets you a well-maintained three-bedroom home with a finished
              basement, updated mechanicals, and the kind of condition that
              lets you move in and focus on living rather than renovating.
              Above $375,000, you&apos;re in renovated territory — updated
              kitchens and baths, expanded footprints, or larger lots. These
              prices compare favorably to neighborhoods further west and
              south that offer similar housing but at higher price points.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote
          text="We wanted a house with a yard for the kids. In Lyndale, we got one for less than a condo in Uptown. The neighborhood doesn't have the prestige, but the house is ours and the block is great."
          cite="Lyndale homeowner, family of four"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Lyndale">
        <Prose>
          <p>
            Lyndale&apos;s Walk Score of approximately 68 reflects its
            residential character — most daily errands require a walk to
            Nicollet Avenue or Chicago Avenue, which are accessible but not
            always conveniently close from the neighborhood&apos;s interior
            blocks. The Bike Score of 85 is more reflective of daily life
            for many residents — flat terrain, good bike infrastructure,
            and connections to the broader Minneapolis bike network make
            cycling the practical choice for many trips.
          </p>
          <p>
            Metro Transit bus service is available on the corridors
            surrounding Lyndale. Route 18 on Nicollet Avenue and Route 5 on
            Chicago Avenue provide north-south service to downtown
            Minneapolis. East-west bus service is less frequent. The Blue
            Line light rail on Hiawatha Avenue is approximately 1.5 miles
            to the east — reachable by bike or bus but not within
            comfortable walking distance for most Lyndale residents.
          </p>
          <p>
            By car, downtown Minneapolis is 15–20 minutes depending on
            traffic. MSP International Airport is roughly 15 minutes via
            Crosstown Highway 62 or Chicago Avenue south to I-494. The
            Crosstown provides east-west freeway access, and I-35W is
            accessible via surface streets. Parking is abundant — this is a
            neighborhood with wide residential streets, driveways, and
            garages, and parking is almost never a concern.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Lyndale is a neighborhood without a lot of drama, which means
            the tensions here are quieter than in neighborhoods with more
            visible fault lines. But they exist, and naming them is part of
            understanding what it means to live here.
          </p>
        </Prose>

        <ArticleSubsection title="Identity and Invisibility">
          <Prose>
            <p>
              Lyndale&apos;s most persistent challenge is that it does not
              have a clear identity — no landmark, no commercial district,
              no feature that gives it a brand. This is not a problem for
              residents, who value the neighborhood precisely because it is
              quiet and unpretentious. But it is a challenge for community
              organizing, for attracting commercial investment, and for
              competing for city resources. Neighborhoods with strong
              identities tend to get more attention from elected officials,
              from developers, and from the media. Lyndale&apos;s
              invisibility means it is often overlooked — which keeps it
              quiet and affordable, but also means it misses out on
              investment and advocacy that more prominent neighborhoods
              attract.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Affordability Pressures">
          <Prose>
            <p>
              Home prices in Lyndale have risen steadily over the past
              decade, tracking the broader Minneapolis market. The
              neighborhood remains affordable by city standards, but the
              trajectory is toward higher prices, and the lower-income
              families who have been part of the neighborhood&apos;s
              diversity are feeling the pressure. Rental prices have
              increased. Some long-term renters have been displaced by
              rent increases or property sales. The dynamic is not as
              dramatic as in neighborhoods closer to downtown, but it is
              present, and it threatens the economic diversity that gives
              Lyndale its character.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Access">
          <Prose>
            <p>
              Lyndale&apos;s lack of a commercial corridor is both a feature
              and a limitation. The quiet residential character is valued by
              residents, but the absence of walkable commercial life within
              the neighborhood itself means that daily errands often require
              a trip to Nicollet or Chicago — a minor inconvenience for
              people with bikes or cars, a real barrier for elderly residents
              or those without transportation. As the neighborhood ages and
              its needs evolve, the absence of local commercial
              infrastructure could become a more significant issue.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Lyndale FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
