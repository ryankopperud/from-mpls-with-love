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
    title: "Lind - Bohanon, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Lind-Bohanon, Minneapolis — the city's far north edge, Mississippi River access, affordable housing, diverse community, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Lind - Bohanon",
  deck: "Minneapolis's northernmost residential neighborhood, where the Mississippi River bends along the eastern edge, homes are affordable enough that working families can actually own one, and the city limits feel less like an ending than a quiet corner where people build lives without waiting for permission.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Lind-Bohanon?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Lind-Bohanon" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Lind - Bohanon, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,200", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$200K–$285K", label: "Median home sale price range (2025 data)" },
      { value: "1920s–1960s", label: "Era most homes were built" },
      { value: "53rd Ave N", label: "Approximate northern city limit" },
      { value: "2 miles", label: "Mississippi River frontage (approximate)" },
      { value: "20–25 min", label: "Drive to downtown Minneapolis" },
      { value: "48", label: "Walk Score" },
      { value: "65", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Lind-Bohanon a good neighborhood in Minneapolis?",
      answer:
        "Lind-Bohanon is one of the most affordable neighborhoods in Minneapolis, offering single-family homeownership at prices well below the citywide median. It has river access, park space, a diverse community, and the quiet residential character that comes from being at the city's far northern edge. The neighborhood faces challenges — limited commercial options, higher crime rates than suburban neighbors, school quality concerns, and the broader disinvestment that affects North Minneapolis. But for buyers seeking value, outdoor access, and a community that is building something for itself, Lind-Bohanon has genuine strengths.",
    },
    {
      question: "Where exactly is Lind-Bohanon in Minneapolis?",
      answer:
        "Lind-Bohanon is the northernmost residential neighborhood in Minneapolis. It is roughly bounded by the city limits (approximately 53rd Avenue North) to the north, the Mississippi River to the east, 42nd Avenue North to the south, and Lyndale Avenue North to the west. It borders the suburb of Brooklyn Center to the north and west, and sits north of the Webber-Camden, Victory, and Shingle Creek neighborhoods. The Mississippi River separates it from the Columbia Park and St. Anthony neighborhoods on the east side.",
    },
    {
      question: "Is Lind-Bohanon safe?",
      answer:
        "Lind-Bohanon's safety profile is generally better than North Minneapolis neighborhoods closer to downtown, though crime rates remain above the citywide average, particularly for property crime. The residential streets are quiet, and the neighborhood's far-north location gives it a somewhat more suburban feel than inner-city North Side neighborhoods. Like all of Minneapolis, crime rose during 2020–2022 and has since declined. Most residents describe feeling safe on their blocks while exercising standard awareness.",
    },
    {
      question: "How much do homes cost in Lind-Bohanon?",
      answer:
        "Median home sale prices in Lind-Bohanon ranged from roughly $200,000 to $285,000 in 2025, among the lowest in Minneapolis. Smaller homes needing work can be found below $180,000, while larger or renovated homes can reach $300,000–$340,000. The neighborhood is one of the last remaining options in Minneapolis where working-class families can realistically afford single-family homeownership, and the price-to-space ratio — homes with yards, garages, and three bedrooms at these prices — is exceptional by city standards.",
    },
    {
      question: "What is there to do in Lind-Bohanon?",
      answer:
        "Lind-Bohanon's main attractions are outdoor — Mississippi River access through North Mississippi Regional Park, the river trail system connecting to the Coon Rapids Dam, Bohanon Park with playing fields and community programming, and proximity to Webber Park's natural swimming pool. The neighborhood itself is primarily residential with limited commercial amenities. Nearby Brooklyn Center offers suburban shopping and services.",
    },
    {
      question: "Is Lind-Bohanon in North Minneapolis?",
      answer:
        "Yes — Lind-Bohanon is part of the Camden community, which is the northernmost section of North Minneapolis. Camden is generally considered the most stable part of the North Side, with higher homeownership rates and a more suburban feel than neighborhoods closer to downtown. Lind-Bohanon is the farthest north you can go and still be in Minneapolis — the city limit runs along its northern and western edges, with Brooklyn Center on the other side.",
    },
    {
      question: "What schools serve Lind-Bohanon?",
      answer:
        "Lind-Bohanon is served by Minneapolis Public Schools. Jenny Lind Elementary is a nearby option for elementary-age children. Olson Middle School and North High School serve upper grades. Charter schools and the district's open enrollment system provide additional choices. Many families actively research and navigate enrollment options to find the best fit.",
    },
    {
      question: "Is Lind-Bohanon on the Mississippi River?",
      answer:
        "Yes — the Mississippi River forms Lind-Bohanon's eastern boundary, and the neighborhood has direct access to North Mississippi Regional Park and the river trail system. The river here is wide and wooded, with a trail that connects north to the Coon Rapids Dam and south through the city. The riverfront is less developed and more natural than in South Minneapolis or downtown — more like a nature preserve than a curated parkway.",
    },
  ],
  nearby: [
    { name: "Webber - Camden", slug: "webber-camden", description: "Webber Park, natural swimming pool, Camden's core" },
    { name: "Victory", slug: "victory", description: "Victory Memorial Drive, residential, far north Camden" },
    { name: "Shingle Creek", slug: "shingle-creek", description: "Suburban feel at the city's northern edge" },
    { name: "Camden Industrial", slug: "camden-industrial", description: "Industrial riverfront south of Lind-Bohanon" },
  ],
  closing: {
    title: "What Makes Lind-Bohanon Worth Knowing",
    paragraphs: [
      "Lind-Bohanon is the neighborhood at the end of Minneapolis — the last residential blocks before the city gives way to Brooklyn Center, the place where the street grid runs out and the river bends north toward the Coon Rapids Dam. It is easy to overlook and easy to underestimate. There are no landmarks, no restaurants that food critics review, no developments that urbanists debate. There are just houses, and yards, and a river, and the people who live here.",
      "Those people are making a bet — that a neighborhood where you can afford a three-bedroom home with a yard, where your kids can ride bikes to the river, where the community is diverse and the neighbors look out for each other, is worth the tradeoffs of limited commercial options, underfunded schools, and the psychic weight of being in the part of the city that most of Minneapolis forgets about. It is not a bet that everyone would make. But for the families who make it, who invest their time and money and energy into this corner of the city, Lind-Bohanon is not a compromise — it is a choice, and one they are determined to make right.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          At the far northern tip of Minneapolis, where the city grid thins
          out and the Mississippi River bends east toward Brooklyn Center,
          there is a stretch of riverbank where you can stand in a city of
          430,000 people and hear nothing but water and birds. The trail
          through North Mississippi Regional Park runs under a canopy of
          cottonwoods, past marshland where herons stand motionless in the
          shallows, along a river that looks nothing like the channelized
          industrial waterway it becomes a few miles downstream. A man is
          fishing from the bank with a bucket and a camp chair. Two women
          are walking a dog on the dirt trail above. A kid on a bike
          pedals past, headed north toward the dam. This is Lind-Bohanon
          — the neighborhood where Minneapolis ends and something quieter
          begins.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/lind-bohanon/hero.webp"
        alt="Mississippi River at North Mississippi Regional Park near Lind-Bohanon, Minneapolis, with wooded riverbank and trail"
        caption="The Mississippi River at Lind-Bohanon — the northernmost stretch of urban riverfront in Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Lind-Bohanon, Minneapolis?">
        <Prose>
          <p>
            Lind-Bohanon is the northernmost residential neighborhood in
            Minneapolis, part of the Camden community in North Minneapolis.
            It is roughly bounded by the city limits to the north, the
            Mississippi River to the east, 42nd Avenue North to the south,
            and Lyndale Avenue North to the west. Home to approximately
            4,200 residents, it occupies the city&apos;s far edge — a
            quiet, residential area where the urban grid meets the suburban
            periphery of Brooklyn Center and the wooded riverbank of North
            Mississippi Regional Park.
          </p>
          <p>
            The neighborhood is defined more by what it is not than by
            what it is. It is not dense, not walkable, not commercially
            vibrant. It does not have a signature restaurant, a landmark
            building, or a brand identity. What it has is affordable
            housing, river access, park space, a diverse community, and
            the kind of residential quiet that people pay much more for in
            other parts of the city. The homes are modest — primarily
            bungalows and small houses from the 1920s through 1960s — and
            prices are among the lowest in Minneapolis, making Lind-Bohanon
            one of the few neighborhoods where a working-class family can
            still afford to buy a house within the city limits.
          </p>
          <p>
            The Mississippi River is Lind-Bohanon&apos;s greatest asset. The
            riverfront here is wild and wooded — closer to a nature preserve
            than the manicured parkways of South Minneapolis. North
            Mississippi Regional Park runs along the river, offering trails,
            fishing, and views of a river that looks more like outstate
            Minnesota than urban Minneapolis. For residents, the river is
            a daily presence — a place to walk, bike, fish, and remember
            that a city is built alongside something that doesn&apos;t
            care about property values or crime statistics.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Lind-Bohanon Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/lind-bohanon/neighborhood-sign.webp"
          alt="Lind-Bohanon neighborhood sign in Minneapolis"
          caption="The Lind-Bohanon neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Lind-Bohanon History & Origins">
        <Prose>
          <p>
            The land that is now Lind-Bohanon is part of the ancestral
            homeland of the Dakota people, for whom the Mississippi River
            was a vital resource and spiritual presence. The dispossession
            of Dakota lands through treaties and forced removal preceded
            and enabled European-American settlement of this area, as it
            did across all of Minneapolis.
          </p>
          <p>
            Lind-Bohanon was among the last areas of Minneapolis to be
            developed residentially. While the core of the city was built
            out by the early 1900s, this far northern section remained
            largely agricultural and open land into the 1920s and 1930s.
            Development came gradually through the mid-20th century, with
            houses built primarily from the 1920s through the 1960s as
            the city&apos;s expansion pushed northward. The housing here
            reflects its later development — some 1920s bungalows, but
            also mid-century ramblers and split-levels that give parts of
            the neighborhood a more suburban character than the older
            areas of Camden to the south.
          </p>
          <p>
            The name combines two historical references — Jenny Lind, the
            famous Swedish opera singer who toured America in the 1850s
            and whose name was attached to the local school, and Bohanon,
            from a family name associated with the area&apos;s early
            settlement. The combined name reflects the neighborhood&apos;s
            composite identity — not one thing but two, not a single
            clear narrative but a merging of separate stories.
          </p>
          <p>
            Like the rest of North Minneapolis, Lind-Bohanon&apos;s
            demographics shifted significantly in the second half of the
            20th century. From a predominantly white working-class
            neighborhood, it became increasingly diverse — Black families,
            Hmong refugees, East African immigrants, and Latino families
            each adding to the community&apos;s makeup. The shifts came
            with challenges — economic disinvestment, rising crime in
            some periods, school instability — but also with the energy
            and resilience that diverse communities bring.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Lind-Bohanon">
        <Prose>
          <p>
            Living in Lind-Bohanon is living at the edge of the city in
            a way that feels more literal than metaphorical. The northern
            boundary is the city limit — cross 53rd Avenue North and
            you&apos;re in Brooklyn Center. The eastern boundary is the
            river. The effect is a neighborhood that feels semi-suburban
            — wider streets, bigger lots, more sky visible above the
            rooflines than in the denser neighborhoods of South Minneapolis.
            The houses are small but the yards are generous, and on a
            summer evening the neighborhood sounds like what it is:
            families at home, kids playing, someone mowing a lawn, the
            distant hum of highway traffic from I-94.
          </p>
          <p>
            The community is diverse and self-reliant out of necessity.
            Commercial options are sparse — there is no neighborhood
            grocery store, no coffee shop, no walkable commercial
            corridor. Residents drive to Brooklyn Center or Robbinsdale
            for shopping and services, or head south into the broader
            Camden and North Minneapolis area. The lack of commercial
            infrastructure means that community life is organized around
            homes, parks, faith communities, and schools rather than
            around businesses. Block clubs, neighborhood associations,
            and church groups do the connective work that a vibrant
            commercial strip would do in a wealthier neighborhood.
          </p>
          <p>
            The river is the neighborhood&apos;s most distinctive feature.
            North Mississippi Regional Park provides access to a stretch
            of riverbank that is genuinely wild — wooded, muddy, populated
            by herons and eagles and the occasional deer. The trail system
            connects north to the Coon Rapids Dam, where you can watch the
            river tumble over the spillway, and south through the city
            toward downtown. For residents who value outdoor access over
            commercial convenience, this riverfront is the reason to live
            in Lind-Bohanon.
          </p>
        </Prose>
        <Quote
          text="We're at the edge of the city, and that's fine with us. Our kids can ride bikes to the river. We own our home. The neighbors check in on each other. It's not glamorous, but it's ours."
          cite="Lind-Bohanon resident"
        />

        <ImageSlot
          src="/images/neighborhoods/lind-bohanon/residential-street.webp"
          alt="Residential street in Lind-Bohanon, Minneapolis, with modest homes and wide lots"
          caption="Lind-Bohanon — wider lots, bigger sky, and the quiet of the city's northern edge"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Lind-Bohanon Food, Drink & Local Spots">
        <Prose>
          <p>
            Lind-Bohanon has very limited commercial options within its
            borders. The neighborhood is primarily residential, and
            residents rely on nearby commercial centers for most shopping
            and dining. This is the honest reality of living at the
            city&apos;s edge.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <Prose>
            <p>
              Brooklyn Center, immediately north and west, provides the
              most accessible commercial options — grocery stores,
              restaurants, and services along Brooklyn Boulevard and
              Bass Lake Road. Robbinsdale&apos;s downtown is a short
              drive southwest. The{" "}
              <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
                Webber-Camden
              </Link>
              {" "}and{" "}
              <Link href="/neighborhoods/victory" className="text-[#2a9d8f] hover:underline">
                Victory
              </Link>
              {" "}neighborhoods to the south have some additional
              commercial presence along Lowry Avenue. West Broadway in{" "}
              <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
                Near North
              </Link>
              {" "}has been seeing new investment and business openings.
              The truth is that Lind-Bohanon is a neighborhood where you
              cook at home and drive when you eat out.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Lind-Bohanon">
        <Prose>
          <p>
            Lind-Bohanon&apos;s outdoor amenities are its strongest assets —
            a riverfront and park system that would command premium prices
            if they were located in South or Southwest Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="North Mississippi Regional Park">
          <Prose>
            <p>
              The Mississippi River runs along Lind-Bohanon&apos;s eastern
              edge, and North Mississippi Regional Park provides structured
              access to a riverfront that feels more like rural Minnesota
              than urban Minneapolis. The park includes walking and biking
              trails, picnic areas, fishing spots, a boat launch, and
              interpretive features that explore the river&apos;s natural
              and human history. The Carl Kroening Interpretive Center,
              located within the park, offers educational programming
              about the river ecosystem and is a community gathering point.
            </p>
            <p>
              The river trail connects north to the Coon Rapids Dam Regional
              Park — a 10-mile stretch of paved trail along the river that
              is one of the best riverside rides in the metro — and south
              through the city toward downtown Minneapolis, the Stone Arch
              Bridge, and Minnehaha Falls. For recreational cyclists, the
              trail system makes Lind-Bohanon a surprisingly well-connected
              neighborhood despite its far-north location.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Bohanon Park">
          <Prose>
            <p>
              Bohanon Park is the neighborhood&apos;s primary community park,
              with playing fields, a playground, a wading pool, and a
              community center with programming. It&apos;s the kind of
              neighborhood park that won&apos;t win design awards but anchors
              daily life — where kids play after school, families gather on
              weekends, and the neighborhood association holds events.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Webber Park (Nearby)">
          <Prose>
            <p>
              Webber Park and its natural swimming pool are a short trip
              south in{" "}
              <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
                Webber-Camden
              </Link>
              . The pool — the only chemical-free public pool in the
              country — is a significant summer amenity for Lind-Bohanon
              families, and the connected park system via Victory Memorial
              Drive provides access to the broader Grand Rounds trail
              network.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/lind-bohanon/river-trail.webp"
          alt="North Mississippi Regional Park trail near Lind-Bohanon, Minneapolis, with wooded riverbank"
          caption="North Mississippi Regional Park — the kind of riverfront that most of Minneapolis doesn't know exists"
        />
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Lind-Bohanon Schools">
        <Prose>
          <p>
            Lind-Bohanon is served by Minneapolis Public Schools. Jenny
            Lind Elementary is the nearby elementary option, serving
            students from the Camden area. Olson Middle School covers
            grades 6–8, and North High School is the comprehensive
            high school for the North Side.
          </p>
          <p>
            School quality is a persistent concern across North
            Minneapolis, and Lind-Bohanon is no exception. Standardized
            test scores at area schools tend to lag the citywide average,
            reflecting the broader challenges of poverty, resource
            inequity, and systemic underinvestment. Dedicated educators
            are doing important work, but the gap between the schools
            here and those in wealthier parts of the city is real.
          </p>
          <p>
            Charter schools and the district&apos;s open enrollment system
            provide additional options, and many families actively navigate
            these choices. Some Lind-Bohanon families also look at schools
            in adjacent Brooklyn Center, though inter-district transfer
            policies apply. The school landscape here rewards engaged,
            proactive parents willing to research and advocate for their
            children.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Lind-Bohanon Real Estate & Housing">
        <Prose>
          <p>
            Lind-Bohanon offers some of the most affordable housing in
            Minneapolis. Median home sale prices ranged from roughly
            $200,000 to $285,000 in 2025 — significantly below the
            citywide median and a fraction of what homes cost in South
            or Southwest Minneapolis. For first-time buyers and families
            on modest incomes, this is one of the few neighborhoods in
            the city where homeownership is genuinely attainable.
          </p>
          <p>
            The housing stock is a mix of 1920s–1930s bungalows and
            1940s–1960s ramblers and split-levels, reflecting the
            neighborhood&apos;s extended development period. Lots are
            generally larger than in older, denser parts of the city,
            and many properties have two-car garages, finished basements,
            and yards large enough for serious gardening. At the lower
            end ($160,000–$220,000), homes typically need updating —
            original kitchens, older systems, cosmetic work. The mid-range
            ($220,000–$290,000) gets a well-maintained three-bedroom
            home. Above $290,000, you&apos;re looking at larger
            properties or homes near the river with updates.
          </p>
          <p>
            Investor activity is present — affordable price points attract
            buyers purchasing rental properties. The balance between
            owner-occupied and investor-owned housing is an ongoing
            community concern, as owner-occupancy is closely linked to
            neighborhood stability and engagement.
          </p>
        </Prose>

        <Quote
          text="We bought our first home in Lind-Bohanon with a down payment smaller than some people's car payments. Three bedrooms, a two-car garage, and the river is a five-minute bike ride away. In what world is that not a good deal?"
          cite="First-time Lind-Bohanon homebuyer"
        />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Lind-Bohanon">
        <Prose>
          <p>
            Lind-Bohanon is the most car-dependent neighborhood in the
            Camden community, with a Walk Score of 48 and a Bike Score
            of 65. The limited commercial options and far-north location
            make a car essential for most daily activities.
          </p>
          <p>
            Metro Transit bus service is available but limited in
            frequency. Routes along Lyndale Avenue and connecting
            corridors provide access to downtown Minneapolis, with ride
            times of 35–45 minutes. The service is adequate for
            commuting but not sufficient for car-free living.
          </p>
          <p>
            The river trail system provides recreational cycling
            connectivity — south toward downtown via the river trail,
            and north to the Coon Rapids Dam. Some dedicated cyclists
            commute to downtown via the trail, but the distance (roughly
            10 miles) and weather make this a warm-season option for
            most.
          </p>
          <p>
            By car, downtown Minneapolis is 20–25 minutes. Brooklyn
            Center&apos;s commercial areas are 5–10 minutes. MSP Airport
            is approximately 30 minutes. Parking is abundant — garage
            and street parking are never an issue.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Lind-Bohanon&apos;s challenges are the challenges of the
            urban periphery — a neighborhood that is technically part of
            a major city but receives fewer of the benefits and more of
            the neglect that comes with being at the edge of everything.
          </p>
        </Prose>

        <ArticleSubsection title="Disinvestment and Infrastructure">
          <Prose>
            <p>
              Streets, sidewalks, and public infrastructure in
              Lind-Bohanon reflect decades of deferred maintenance. The
              neighborhood lacks the commercial infrastructure that
              generates property tax revenue and attracts private
              investment. The gap between public services here and in
              wealthier parts of the city is visible and frustrating for
              residents who pay taxes to the same city government.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Crime and Perception">
          <Prose>
            <p>
              Crime rates, while lower than inner-city North Minneapolis
              neighborhoods, remain above the citywide average. Property
              crime is the most common issue, but occasional violent
              incidents generate attention that reinforces negative
              perceptions of the entire North Side. The post-2020 period
              was difficult, and while the situation has improved, the
              experience left a mark on community trust. Residents are
              frustrated by a narrative that flattens the entire North
              Side into a single story of crime and decline, ignoring
              the stability and community strength that exist on their
              blocks.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Isolation and Opportunity">
          <Prose>
            <p>
              The far-north location that gives Lind-Bohanon its quiet
              character also isolates it from the job centers, commercial
              corridors, and transit networks that drive economic
              opportunity. The neighborhood&apos;s proximity to Brooklyn
              Center provides some commercial access, but it also means
              that economic activity — and the tax revenue it generates —
              flows across the city line rather than staying in
              Minneapolis. The question of how to bring commercial
              amenities and economic activity to the city&apos;s northern
              edge is unresolved, and solutions are not obvious.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Lind-Bohanon FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
