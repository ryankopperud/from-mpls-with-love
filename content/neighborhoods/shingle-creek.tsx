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
    title: "Shingle Creek, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Shingle Creek, Minneapolis — the city's far north, suburban feel, Shingle Creek parkway, affordable housing, diverse community, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Shingle Creek",
  deck: "A far-north Minneapolis neighborhood with a suburban feel, where Shingle Creek parkway winds through residential blocks, homes are affordable, the diversity is genuine, and the city limits are close enough to feel like a different world from downtown.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Shingle Creek?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Shingle Creek" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Shingle Creek, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,500", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$210K–$295K", label: "Median home sale price range (2025 data)" },
      { value: "1940s–1960s", label: "Era most homes were built" },
      { value: "3.3 miles", label: "Shingle Creek parkway (approximate length)" },
      { value: "I-94 / Hwy 100", label: "Major highway access" },
      { value: "18–22 min", label: "Drive to downtown Minneapolis" },
      { value: "52", label: "Walk Score" },
      { value: "62", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Shingle Creek a good neighborhood in Minneapolis?",
      answer:
        "Shingle Creek is one of the most affordable neighborhoods in Minneapolis, offering a suburban feel with city services and proximity to major highways. It has park space along Shingle Creek, a diverse community, and housing that is accessible to working-class and middle-class families. The neighborhood faces challenges — limited commercial options, crime rates above the citywide average (though lower than inner-city North Side neighborhoods), and school quality concerns. For buyers seeking affordable homeownership with a quieter, more suburban character than most Minneapolis neighborhoods, Shingle Creek is worth considering.",
    },
    {
      question: "Where is Shingle Creek in Minneapolis?",
      answer:
        "Shingle Creek is in far north Minneapolis, roughly bounded by 53rd Avenue North (the city limit) to the north, Lyndale Avenue North to the east, 42nd Avenue North to the south, and Highway 100 to the west. It borders the suburb of Brooklyn Center to the north and west, and sits adjacent to the Victory and Lind-Bohanon neighborhoods within Minneapolis. The neighborhood takes its name from Shingle Creek, a tributary that flows through the area before eventually reaching the Mississippi River.",
    },
    {
      question: "Is Shingle Creek safe?",
      answer:
        "Shingle Creek's safety profile is moderate — crime rates are above the citywide average but generally lower than North Minneapolis neighborhoods closer to downtown. The residential blocks have a quiet, suburban feel, and most residents describe feeling safe on their streets. Property crime is the most common concern. The neighborhood's far-north location and lower density contribute to a calmer atmosphere than denser urban areas. Like all of Minneapolis, the area experienced a crime increase during 2020–2022 that has since subsided.",
    },
    {
      question: "How much do homes cost in Shingle Creek?",
      answer:
        "Median home sale prices in Shingle Creek ranged from roughly $210,000 to $295,000 in 2025, well below the citywide median. The housing stock — primarily 1940s–1960s ramblers and split-levels — offers good space for the price, with three-bedroom homes, attached or two-car garages, and larger lots than older Minneapolis neighborhoods. Homes needing updates can be found below $200,000, while renovated properties can reach $300,000–$350,000. Shingle Creek is one of the most affordable options for single-family homeownership in Minneapolis.",
    },
    {
      question: "What is Shingle Creek?",
      answer:
        "Shingle Creek is both a neighborhood and a waterway. The creek itself is a tributary that flows through the northern part of Minneapolis before eventually reaching the Mississippi River. The Shingle Creek parkway — a green corridor along the creek — provides walking and biking trails, park space, and a natural feature that gives the neighborhood its character. The creek and parkway distinguish Shingle Creek from the surrounding grid of residential blocks, adding a linear park amenity that connects several parks and green spaces.",
    },
    {
      question: "Does Shingle Creek feel like a suburb?",
      answer:
        "More than almost any other Minneapolis neighborhood, yes. The 1940s–1960s housing stock — ramblers, split-levels, and ranch houses with attached garages — is architecturally suburban. The lots are larger, the streets are wider, and the density is lower than in the bungalow neighborhoods of South Minneapolis. The proximity to Highway 100 and I-94 reinforces the car-oriented, suburban character. But Shingle Creek is within the Minneapolis city limits, with city services, city taxes, and city schools — a distinction that matters for better and for worse.",
    },
    {
      question: "What schools serve Shingle Creek?",
      answer:
        "Shingle Creek is served by Minneapolis Public Schools. Jenny Lind Elementary is a nearby option, and other elementary schools in the Camden area serve the neighborhood. Olson Middle School and North High School cover upper grades. Charter schools and the district's open enrollment system provide additional choices. Many families actively research and navigate enrollment options.",
    },
    {
      question: "Is Shingle Creek in North Minneapolis?",
      answer:
        "Yes — Shingle Creek is part of the Camden community, the northernmost section of North Minneapolis. Camden is generally considered the most stable and suburban-feeling part of the North Side, and Shingle Creek, at the far northwestern corner of the city, has the most suburban character of any Camden neighborhood. Residents often identify with Camden rather than with the broader 'North Minneapolis' label, which carries associations with neighborhoods closer to downtown that face different challenges.",
    },
  ],
  nearby: [
    { name: "Victory", slug: "victory", description: "Victory Memorial Drive, residential, far north Camden" },
    { name: "Lind - Bohanon", slug: "lind-bohanon", description: "Far north, Mississippi River, affordable residential" },
    { name: "Webber - Camden", slug: "webber-camden", description: "Webber Park, natural swimming pool, Camden's core" },
    { name: "Folwell", slug: "folwell", description: "South of Camden, Folwell Park, transitional blocks" },
    { name: "Cleveland", slug: "cleveland", description: "Near Wirth Park, residential, North Minneapolis" },
  ],
  closing: {
    title: "What Makes Shingle Creek Worth Knowing",
    paragraphs: [
      "Shingle Creek occupies an unusual position in the Minneapolis landscape — a neighborhood that looks and feels like a first-ring suburb but carries a Minneapolis address, with all the benefits and burdens that implies. The houses have attached garages and finished basements. The lots have backyard swing sets and vegetable gardens. The creek parkway winds through the blocks like a miniature greenbelt. It could be Robbinsdale or Crystal or Brooklyn Center, and in many ways it functions the same — but it is in Minneapolis, and that means city schools, city taxes, city politics, and the complicated identity of being part of a North Side that is simultaneously underinvested and misunderstood.",
      "For the families who live here — diverse, working-class, middle-class, committed to homeownership and neighborhood stability — Shingle Creek is not a compromise. It is a place where they can afford the American residential dream at its most basic: a house, a yard, a community, and the belief that their children will have a better shot at life because they grew up in a place with space and stability. That dream is under pressure everywhere in America. In Shingle Creek, it is still achievable, and the people who live here are determined to keep it that way.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          If you drove into Shingle Creek without knowing you were in
          Minneapolis, you would assume you were in a first-ring suburb.
          The houses are mid-century ramblers and split-levels with
          attached garages and fenced backyards. The streets are wider
          than in South Minneapolis, the lots are bigger, and the trees
          — planted when the neighborhood was built in the 1950s — have
          grown into a full canopy that shades the sidewalks in summer.
          A woman is pushing a stroller along the Shingle Creek parkway
          trail, past a man walking a golden retriever, past a group of
          kids on bikes headed for the park. The creek itself — modest,
          shallow, winding — runs through a green corridor that feels
          more like a nature strip in Edina than anything you would
          associate with North Minneapolis. This is Shingle Creek — a
          neighborhood that doesn&apos;t fit the narrative and
          doesn&apos;t particularly care.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/shingle-creek/hero.webp"
        alt="Shingle Creek parkway in the Shingle Creek neighborhood of Minneapolis, with walking trail and creek"
        caption="Shingle Creek parkway — the green corridor that gives the neighborhood its name and its character"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Shingle Creek, Minneapolis?">
        <Prose>
          <p>
            Shingle Creek is a residential neighborhood in far north
            Minneapolis, part of the Camden community at the city&apos;s
            northwestern corner. It is roughly bounded by the city limits
            (53rd Avenue North) to the north, Lyndale Avenue North to the
            east, 42nd Avenue North to the south, and Highway 100 to the
            west. Home to approximately 4,500 residents, it is one of the
            most suburban-feeling neighborhoods within the Minneapolis
            city limits — a product of its mid-century development,
            its larger lots, and its proximity to the first-ring suburbs
            of Brooklyn Center and Robbinsdale.
          </p>
          <p>
            The neighborhood takes its name from Shingle Creek, a modest
            waterway that flows through the area on its way to the
            Mississippi River. The creek parkway — a green corridor with
            walking and biking trails — is the neighborhood&apos;s most
            distinctive feature, providing a linear park amenity that
            connects several parks and green spaces. The creek gives
            Shingle Creek something that most suburban-style neighborhoods
            lack: a natural feature that isn&apos;t a lake or a river but
            something quieter and more intimate — a ribbon of green
            winding through the residential grid.
          </p>
          <p>
            The housing stock is predominantly mid-century — ramblers,
            split-levels, and ranch houses built from the 1940s through
            the 1960s, with some earlier bungalows and later infill. Prices
            are among the lowest in Minneapolis, making Shingle Creek one
            of the most accessible neighborhoods for families seeking
            homeownership. The community is diverse — a mix of Black,
            Hmong, East African, Latino, and white residents — and the
            character is residential and family-oriented, with more in
            common with the adjacent suburbs than with the denser, more
            urban neighborhoods to the south.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Shingle Creek Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/shingle-creek/neighborhood-sign.webp"
          alt="Shingle Creek neighborhood sign in Minneapolis"
          caption="The Shingle Creek neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Shingle Creek History & Origins">
        <Prose>
          <p>
            The land that is now Shingle Creek is part of the ancestral
            homeland of the Dakota people, for whom the creeks, prairies,
            and woodlands of this area were part of a broader landscape
            of subsistence and spiritual significance. The dispossession
            of Dakota lands through treaties and forced removal is the
            necessary first chapter of this neighborhood&apos;s history.
          </p>
          <p>
            The creek itself — Shingle Creek — was named for the shingle
            mills that operated along its banks in the 19th century, when
            the area was still rural and the lumber industry was driving
            Minnesota&apos;s economy. The creek is a tributary that
            eventually flows into the Mississippi River, and its course
            through this part of north Minneapolis provided a natural
            feature around which the later neighborhood would organize.
          </p>
          <p>
            Unlike the older Camden neighborhoods to the east and south,
            Shingle Creek was developed primarily in the post-World War II
            era — the 1940s through 1960s — when the automobile made
            residential development at the city&apos;s edges practical and
            when returning veterans and their families drove demand for
            new housing. The result was a neighborhood that looked and
            felt suburban from birth — ramblers and split-levels on wider
            lots, with attached garages and the kind of floor plans that
            assumed a car in every driveway and a family in every house.
          </p>
          <p>
            The neighborhood&apos;s demographics have shifted significantly
            since its mid-century origins. Originally built for and
            occupied by white working- and middle-class families, Shingle
            Creek diversified through the late 20th and early 21st
            centuries as Hmong refugees, Black families, East African
            immigrants, and Latino families moved into its affordable
            housing stock. The community today is one of the more diverse
            in the city, though this diversity has not always been
            matched by the commercial and public infrastructure that a
            changing population needs.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Shingle Creek">
        <Prose>
          <p>
            Living in Shingle Creek is living in a neighborhood that
            could pass for a suburb and sometimes wishes it were one. The
            houses have the mid-century proportions that read as suburban
            America — long and low, with picture windows, attached garages,
            and backyards big enough for a swing set, a vegetable garden,
            and a cookout. The streets are wider than in the bungalow
            neighborhoods of South Minneapolis, traffic is lighter, and
            the overall feel is quieter and more spread out. On a Saturday
            morning in summer, the dominant sounds are lawn mowers,
            birdsong, and the occasional kid shouting from a backyard.
          </p>
          <p>
            The creek parkway provides the neighborhood&apos;s best outdoor
            amenity — a walking and biking trail that follows the creek
            through a green corridor, connecting parks and providing a
            place to exercise, walk the dog, and encounter neighbors
            without getting in a car. The parkway is Shingle Creek&apos;s
            version of a main street — not a commercial strip but a
            shared public space where the community shows up for itself.
          </p>
          <p>
            The diversity is everyday and unglamorous. A Hmong family
            tends an enormous garden that produces vegetables for an
            extended family. A Somali family&apos;s kids play basketball
            in the driveway. A white retiree is raking leaves in a yard
            she has maintained for thirty years. The interactions are
            neighborly — waves, brief conversations over fences, the kind
            of low-key social fabric that holds a neighborhood together
            without anyone writing a grant proposal about it.
          </p>
          <p>
            Commercial options are limited. There is no walkable
            commercial corridor within the neighborhood, and residents
            drive to Brooklyn Center, Robbinsdale, or the commercial
            nodes along Highway 100 and I-94 for shopping, dining, and
            services. This is the fundamental tradeoff of Shingle Creek:
            you get affordability, space, and quiet, and you give up
            walkable urban amenities. For families who cook at home and
            value yard space over restaurant access, the tradeoff works.
          </p>
        </Prose>
        <Quote
          text="People hear 'North Minneapolis' and they picture something specific. Then they come to Shingle Creek and see split-levels with nice yards and kids riding bikes and they don't know what to do with it. We like the confusion."
          cite="Shingle Creek homeowner"
        />

        <ImageSlot
          src="/images/neighborhoods/shingle-creek/residential-street.webp"
          alt="Residential street in Shingle Creek, Minneapolis, with mid-century ramblers and mature trees"
          caption="Shingle Creek — mid-century homes, wide lots, and a suburban feel within city limits"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Shingle Creek Food, Drink & Local Spots">
        <Prose>
          <p>
            Shingle Creek has very limited commercial options within its
            borders. The neighborhood is primarily residential, and
            dining and shopping happen elsewhere.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Commercial">
          <Prose>
            <p>
              Brooklyn Center — immediately north and west — provides
              the closest commercial options, with grocery stores,
              restaurants, and services along Brooklyn Boulevard.
              Robbinsdale&apos;s small downtown is a short drive south
              and west. Highway 100 and I-94 corridors provide access
              to suburban strip commercial. Within Minneapolis, Lowry
              Avenue in{" "}
              <Link href="/neighborhoods/victory" className="text-[#2a9d8f] hover:underline">
                Victory
              </Link>
              {" "}and West Broadway in{" "}
              <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
                Near North
              </Link>
              {" "}offer some additional commercial options, though
              neither is within easy walking distance. The commercial
              desert is a genuine frustration for residents, and
              attracting businesses to the neighborhood remains a
              challenge and a priority.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Shingle Creek">
        <Prose>
          <p>
            Shingle Creek&apos;s outdoor amenities are modest but
            functional, anchored by the creek parkway and connected to
            the broader park systems that serve far north Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="Shingle Creek Parkway">
          <Prose>
            <p>
              The creek parkway is the neighborhood&apos;s signature
              outdoor feature — a green corridor following Shingle Creek
              with walking and biking trails. The parkway connects
              several small parks and provides a continuous path through
              the neighborhood that is used for exercise, dog walking,
              and quiet recreation. The creek itself is modest — more
              stream than river — but the surrounding green space gives
              the neighborhood a natural amenity that distinguishes it
              from the surrounding residential grid.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Nearby Parks">
          <Prose>
            <p>
              Theodore Wirth Park — the largest park in the Minneapolis
              system — is accessible via Victory Memorial Drive and
              Wirth Parkway, a short drive or bike ride to the south.
              Webber Park and its natural swimming pool in{" "}
              <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
                Webber-Camden
              </Link>
              {" "}are another accessible amenity. The connected trail
              systems — Victory Memorial Drive, the creek parkway, and
              the river trails — give Shingle Creek residents access to
              a regional network of paths and green spaces that extends
              well beyond the neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/shingle-creek/creek-parkway.webp"
          alt="Shingle Creek parkway trail with creek and green space in Minneapolis"
          caption="Shingle Creek parkway — the neighborhood's green corridor and shared outdoor space"
        />
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Shingle Creek Schools">
        <Prose>
          <p>
            Shingle Creek is served by Minneapolis Public Schools.
            Elementary options in the area include Jenny Lind and other
            Camden-area schools. Olson Middle School serves grades 6–8,
            and North High School is the comprehensive high school.
          </p>
          <p>
            School quality is a concern shared across North Minneapolis.
            Standardized test scores at area schools tend to lag the
            citywide average, and the resource gap between schools here
            and in wealthier parts of the city is real. Charter schools
            and the district&apos;s open enrollment system provide
            additional options. Some families also consider schools in
            adjacent Brooklyn Center or Robbinsdale districts, though
            inter-district policies apply.
          </p>
          <p>
            Families moving to Shingle Creek should plan to be engaged
            and proactive about education. The schools serve a diverse
            student body with dedicated staff, but the systemic
            challenges are real and require advocacy to navigate
            effectively.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Shingle Creek Real Estate & Housing">
        <Prose>
          <p>
            Shingle Creek is among the most affordable neighborhoods in
            Minneapolis for single-family homeownership. Median home sale
            prices ranged from roughly $210,000 to $295,000 in 2025 —
            well below the citywide median. The mid-century housing stock
            offers more space per dollar than the older bungalows of
            South Minneapolis — larger lots, attached garages, finished
            basements, and three- or four-bedroom floor plans at prices
            that would buy a studio condo in the North Loop.
          </p>
          <p>
            At the lower end ($170,000–$230,000), you&apos;re looking at
            homes with original finishes — 1950s kitchens, older carpet,
            systems that need updating. The mid-range ($230,000–$300,000)
            gets a well-maintained home with updates. Above $300,000,
            properties are typically fully renovated with modern kitchens,
            updated bathrooms, and the kind of finishes that would command
            $500,000 or more in Southwest Minneapolis.
          </p>
          <p>
            The rental market is affordable, with single-family rentals
            and apartment options available at some of the lowest rents
            in the city. Investor activity is present, and the balance
            between owner-occupied and rental housing is an ongoing
            concern for neighborhood stability.
          </p>
        </Prose>

        <Quote
          text="We looked at Brooklyn Center and Shingle Creek at the same time. The houses were almost identical — same era, same size, same price. We chose Shingle Creek because we wanted to be in the city, with city parks and city identity. The difference is more about mindset than about real estate."
          cite="Shingle Creek homeowner"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Shingle Creek">
        <Prose>
          <p>
            Shingle Creek is car-dependent, with a Walk Score of 52 and
            a Bike Score of 62. The suburban-style layout, limited transit
            options, and distance from major employment centers make a
            car essential for most households.
          </p>
          <p>
            Metro Transit bus service is available along connecting
            corridors, with ride times to downtown Minneapolis of
            approximately 35–45 minutes. Frequency is limited, typical
            of outer-ring Minneapolis neighborhoods.
          </p>
          <p>
            Highway access is a relative strength. Highway 100 borders
            the neighborhood to the west, and I-94 is accessible nearby,
            providing car commuters with relatively efficient routes to
            downtown Minneapolis, the western suburbs, and Brooklyn
            Center/Brooklyn Park. By car, downtown is 18–22 minutes.
            Brooklyn Center is 5 minutes. MSP Airport is approximately
            25–30 minutes.
          </p>
          <p>
            The creek parkway and connected trail systems provide
            recreational cycling routes, but bike commuting to downtown
            is a longer ride (approximately 10–12 miles) that is practical
            mainly in warmer months.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Shingle Creek&apos;s tensions are quieter than in many North
            Minneapolis neighborhoods but follow the same underlying
            patterns — disinvestment, changing demographics, and the
            gap between what the neighborhood needs and what it receives.
          </p>
        </Prose>

        <ArticleSubsection title="Identity and Perception">
          <Prose>
            <p>
              Shingle Creek exists in an identity gap. It looks and feels
              suburban, but it carries a Minneapolis — and specifically a
              North Minneapolis — address. Residents experience the
              disconnect daily: their neighborhood is as quiet and
              residential as any first-ring suburb, but their property
              values, insurance rates, and media coverage reflect the
              broader North Side narrative. Changing that perception
              requires the kind of sustained investment and attention
              that has been slow to arrive.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Void">
          <Prose>
            <p>
              The absence of commercial amenities is the neighborhood&apos;s
              most persistent frustration. Residents want a grocery store,
              a coffee shop, a restaurant they can walk to — the basic
              commercial infrastructure that wealthier neighborhoods take
              for granted. Attracting businesses requires foot traffic,
              which requires density, which the neighborhood&apos;s
              suburban layout doesn&apos;t easily provide. The chicken-
              and-egg problem of commercial development in low-density
              neighborhoods is not unique to Shingle Creek, but it is
              acutely felt here.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Demographic Change">
          <Prose>
            <p>
              The neighborhood continues to diversify, with immigrant
              families — particularly Hmong and East African — making up
              an increasing share of the population. This diversity is a
              strength, but it also creates demands for services,
              programming, and institutional support that the
              neighborhood&apos;s thin infrastructure struggles to
              provide. Schools, community centers, and faith organizations
              are stretched, and the gap between the community&apos;s
              needs and its resources is a recurring theme.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Shingle Creek FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
