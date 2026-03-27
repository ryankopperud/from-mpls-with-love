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
    title: "Harrison, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Harrison, Minneapolis — diverse community near Bryn Mawr, Harrison Park, affordable housing, schools, restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Harrison",
  deck: "A small, diverse North Minneapolis neighborhood sitting at the crossroads of several worlds — where affordable housing borders the trails of Theodore Wirth Park, working families share space with new arrivals, and proximity to downtown hasn't yet translated into the investment this community has been promised.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Harrison?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Harrison" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Harrison, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,200", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$190K–$265K", label: "Median home sale price range (2025 data)" },
      { value: "1890s–1940s", label: "Era most homes were built" },
      { value: "Highly diverse", label: "Black, Native American, Hmong, Latino populations" },
      { value: "Glenwood Ave", label: "Primary commercial corridor" },
      { value: "8 min", label: "Drive to downtown Minneapolis" },
      { value: "58", label: "Walk Score" },
      { value: "75", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Harrison a good neighborhood in Minneapolis?",
      answer:
        "Harrison is a neighborhood with genuine assets — proximity to Theodore Wirth Park, affordable housing, racial and cultural diversity, and a short commute to downtown. It also faces challenges common to North Minneapolis neighborhoods, including higher crime rates and underinvestment in commercial corridors. For people who value diversity and affordability and want to be part of a community that is working to improve, Harrison has real appeal.",
    },
    {
      question: "Is Harrison, Minneapolis safe?",
      answer:
        "Harrison's safety picture reflects its position in North Minneapolis — crime rates are higher than in many parts of the city, particularly for property crime and some categories of violent crime. Safety varies by block, and many residents report feeling comfortable in their immediate surroundings while acknowledging broader challenges. Community organizations and block clubs are active in safety efforts.",
    },
    {
      question: "What is Harrison, Minneapolis known for?",
      answer:
        "Harrison is known for its diversity (one of the most racially and ethnically diverse neighborhoods in Minneapolis), its proximity to Theodore Wirth Park, Harrison Park and its recreation center, and its affordable housing stock. It sits at the junction of North Minneapolis and the more affluent Bryn Mawr neighborhood, creating a noticeable transition in just a few blocks.",
    },
    {
      question: "How much do homes cost in Harrison, Minneapolis?",
      answer:
        "Home prices in Harrison are among the most affordable in Minneapolis, with median sale prices ranging from roughly $190,000 to $265,000 in 2025. This makes homeownership accessible for buyers priced out of most other Minneapolis neighborhoods. Some rehabbed and new-construction homes can reach higher price points.",
    },
    {
      question: "Where exactly is Harrison in Minneapolis?",
      answer:
        "Harrison is in North Minneapolis, roughly bounded by Interstate 394 to the south, Plymouth Avenue to the north, Interstate 94 to the east, and Penn Avenue North to the west. It borders the Bryn Mawr neighborhood to the southwest and Near North to the east, sitting in a transitional zone between downtown and the residential North Minneapolis neighborhoods.",
    },
    {
      question: "What schools serve Harrison, Minneapolis?",
      answer:
        "Harrison is served by Minneapolis Public Schools. Nellie Stone Johnson Community School is a nearby elementary option. North High School serves the area for high school. Many families also use the district's open enrollment and magnet school options or charter schools in the area.",
    },
    {
      question: "Is Harrison close to Theodore Wirth Park?",
      answer:
        "Yes — Harrison's western edge is near Theodore Wirth Park, the largest park in the Minneapolis park system at over 750 acres. Residents can access the park's trails, golf course, beach, and winter recreation areas within a short walk, bike ride, or drive. This proximity to one of the city's greatest natural assets is one of Harrison's most significant advantages.",
    },
    {
      question: "Is Harrison being gentrified?",
      answer:
        "Harrison has seen some development pressure, particularly given its proximity to downtown and the Bryn Mawr neighborhood. However, gentrification has not transformed the neighborhood to the degree seen in areas like the North Loop. Community organizations advocate for development that benefits existing residents, and the tension between attracting investment and preserving affordability is a live issue.",
    },
  ],
  nearby: [
    { name: "Near North", slug: "near-north", description: "Historic Black community to the east" },
    { name: "Bryn - Mawr", slug: "bryn-mawr", description: "Quieter, more affluent neighborhood to the southwest" },
    { name: "Sumner - Glenwood", slug: "sumner-glenwood", description: "Mixed development bordering downtown" },
    { name: "Willard - Hay", slug: "willard-hay", description: "Residential North Minneapolis to the north" },
    { name: "North Loop", slug: "north-loop", description: "Warehouse district across I-94" },
  ],
  closing: {
    title: "What Makes Harrison Worth Understanding",
    paragraphs: [
      "Harrison does not have the name recognition of its neighbors — it is not the historic center that Near North is, not the park destination that Bryn Mawr is, not the development story that the North Loop is. It is a small neighborhood where diverse families live affordable lives in close proximity to some of the best natural and urban assets in the city. That ordinariness is, in its own way, remarkable — because maintaining a stable, diverse, affordable community in a rapidly changing city is not something that happens by accident.",
      "The people who live in Harrison are not waiting for someone to discover them. They are raising children, maintaining homes, organizing block clubs, and building the kind of community that does not make headlines but makes a neighborhood. Whether the rest of the city will invest in Harrison the way it has invested in neighborhoods across the freeway remains an open question. What is not in question is that the community here has earned that investment, and the people doing the work are not going anywhere.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Harrison is the kind of neighborhood you pass through on the way
          to somewhere else and barely register — a few blocks of modest
          houses between the freeway and the park, a stretch of Glenwood
          Avenue with more potential than storefronts, a rec center where
          kids play basketball on summer evenings while their parents sit
          in lawn chairs and talk. It is small, quiet on most blocks, and
          easy to overlook. But the people who live here — a mix of Black,
          Native American, Hmong, Latino, and white families that makes
          Harrison one of the most genuinely diverse census tracts in the
          state — have built something in this overlooked corner of North
          Minneapolis that deserves more attention than it gets.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/harrison/hero.webp"
        alt="A residential street in Harrison, Minneapolis with mature trees and modest homes"
        caption="Harrison — a diverse, affordable neighborhood between downtown and Theodore Wirth Park"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Harrison, Minneapolis?">
        <Prose>
          <p>
            Harrison is a small residential neighborhood in North
            Minneapolis, bounded roughly by Interstate 394 to the south,
            Plymouth Avenue to the north, Interstate 94 to the east, and
            Penn Avenue North to the west. Home to approximately 3,200
            residents, it sits at a geographic and demographic crossroads —
            between the affluent{" "}
            <Link href="/neighborhoods/bryn-mawr" className="text-[#2a9d8f] hover:underline">
              Bryn Mawr
            </Link>{" "}
            neighborhood to the southwest, the historic{" "}
            <Link href="/neighborhoods/near-north" className="text-[#2a9d8f] hover:underline">
              Near North
            </Link>{" "}
            community to the east, and the Theodore Wirth Park corridor to
            the west.
          </p>
          <p>
            Harrison is part of the broader North Minneapolis community,
            sharing many of the challenges and strengths that characterize
            the Northside. It is among the most racially and ethnically
            diverse neighborhoods in the city, with significant Black, Native
            American, Hmong, and Latino populations. The neighborhood&apos;s
            defining features are its affordability, its diversity, and its
            proximity to assets — downtown, the park, the trails — that its
            residents can access but that the neighborhood itself has not
            always benefited from.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Harrison Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/harrison/neighborhood-sign.webp"
          alt="Harrison neighborhood sign in Minneapolis"
          caption="The Harrison neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Harrison History & Origins">
        <Prose>
          <p>
            Harrison developed in the late nineteenth and early twentieth
            centuries as a working-class neighborhood on the outskirts of
            the growing city. Its early residents were predominantly
            Scandinavian and Eastern European immigrants who worked in
            nearby industries. The neighborhood took its name from the
            Harrison school and park, and its modest housing stock — frame
            houses and small bungalows — reflected the economic realities
            of the families who built them.
          </p>
          <p>
            Like much of North Minneapolis, Harrison&apos;s trajectory was
            shaped by mid-century highway construction. Interstate 94,
            built in the 1960s, carved through the eastern edge of the
            neighborhood, and Interstate 394, completed in 1981, defined
            its southern boundary. These highways did what highways did to
            urban neighborhoods across America: they severed connections,
            displaced families, depressed property values, and created
            barriers of noise and concrete that persist to this day.
          </p>
          <p>
            As white flight accelerated in the 1960s and 1970s, Harrison
            became home to Black families who were expanding beyond the
            tight boundaries of Near North, as well as Native American
            families with deep roots in the Minneapolis urban Indian
            community. Later waves of immigration — Hmong families arriving
            after the Vietnam War era, Somali and other East African
            families in the 1990s and 2000s, and Latino families throughout
            — created the diverse demographic mix that defines Harrison
            today.
          </p>
          <p>
            The neighborhood has experienced the same patterns of
            disinvestment that have affected North Minneapolis broadly —
            redlining, commercial retreat, and the cumulative effects of
            poverty. But it has also benefited from its position near
            Theodore Wirth Park and from community development efforts that
            have produced affordable housing and small-scale improvements
            over the decades.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Harrison">
        <Prose>
          <p>
            Harrison is a neighborhood where you hear multiple languages on
            a single block — Hmong, Somali, Spanish, English — and where
            the cultural diversity is not a marketing point but simply the
            texture of daily life. Kids from different backgrounds play
            together at the rec center. Neighbors who do not share a
            language share a wave across the fence. The block party, where
            it happens, is a potluck of cultural traditions — lumpia next
            to jollof rice next to hotdish.
          </p>
          <p>
            The residential blocks are quiet, with mature trees shading
            modest houses on small lots. Some homes are meticulously
            maintained; others show the effects of age and limited
            resources. Vacant lots appear between occupied properties on
            some blocks — evidence of demolitions that were not followed
            by rebuilding. The neighborhood does not have a strong
            commercial identity; Glenwood Avenue provides some services,
            but residents typically travel to nearby areas for grocery
            shopping and dining.
          </p>
          <p>
            Harrison Park, near the center of the neighborhood, anchors
            community life. The recreation center provides youth
            programming, sports leagues, and gathering space. In summer,
            the park is the neighborhood&apos;s living room — the place
            where families gather, where community events happen, and
            where the diversity of the neighborhood is most visible and
            most natural.
          </p>
          <p>
            The proximity to{" "}
            <Link href="/neighborhoods/bryn-mawr" className="text-[#2a9d8f] hover:underline">
              Bryn Mawr
            </Link>{" "}
            creates one of the starkest socioeconomic transitions in
            Minneapolis — cross Penn Avenue or I-394 heading south and
            you enter a different world of home values, demographics, and
            resource levels. This boundary is not lost on Harrison
            residents, and the contrast between what exists on one side of
            the line and the other is a daily reminder of how unevenly
            the city&apos;s resources have been distributed.
          </p>
        </Prose>
        <Quote
          text="We've got families from ten different countries on this block. The kids don't think that's unusual. That's one of the best things about growing up here."
          cite="Harrison resident"
        />

        <ImageSlot
          src="/images/neighborhoods/harrison/harrison-park.webp"
          alt="Harrison Park recreation area with families and children playing"
          caption="Harrison Park — the neighborhood's central gathering space"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Harrison Food, Drink & Local Spots">
        <Prose>
          <p>
            Harrison is not a food destination — there are no buzzy
            restaurants or curated dining experiences within the
            neighborhood&apos;s boundaries. What exists is practical and
            community-oriented: corner stores, small takeout spots, and
            the food that residents bring from their own traditions to
            block parties, church gatherings, and kitchen tables. The
            commercial corridor along Glenwood Avenue has struggled with
            vacancy, and food access has been a persistent challenge.
          </p>
        </Prose>

        <ArticleSubsection title="What's Nearby">
          <PlaceCardComponent place={{ name: "Glenwood Avenue Corridor", tag: "Mixed Commercial", price: "$", description: "Harrison's primary commercial strip has a mix of small businesses, services, and takeout spots. It is not a destination corridor but serves basic neighborhood needs. Somali restaurants and small ethnic groceries have added diversity to the offerings in recent years." }} />
          <PlaceCardComponent place={{ name: "Broadway Avenue", tag: "Nearby Commercial", price: "$–$$", description: "The Broadway Avenue corridor in neighboring Near North and Hawthorne provides additional dining options, including Breaking Bread Cafe and other community-oriented restaurants. A short drive or bus ride north." }} />
          <PlaceCardComponent place={{ name: "North Loop & Bryn Mawr", tag: "Nearby Dining", price: "$$–$$$", description: "Harrison's proximity to the North Loop warehouse district and Bryn Mawr means that more developed restaurant scenes are within a short drive. The contrast in dining options across the freeway underscores the broader disparities in commercial investment." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Harrison">
        <Prose>
          <p>
            Harrison&apos;s park access is, quietly, one of its best
            features. Theodore Wirth Park — the crown jewel of the
            Minneapolis park system — is accessible from the western
            edge of the neighborhood, and Harrison Park provides a
            well-used community gathering space. For a neighborhood that
            has been underserved in many ways, the proximity to green space
            is a genuine and significant asset.
          </p>
        </Prose>

        <ArticleSubsection title="Harrison Park">
          <Prose>
            <p>
              Harrison Park is the neighborhood&apos;s central green space,
              featuring a recreation center, playing fields, basketball
              courts, a playground, and open space. The rec center provides
              year-round programming for youth and families, and the park
              serves as the de facto community center for a neighborhood
              that does not have many other gathering spaces. Summer
              programming, sports leagues, and community events make this
              one of the most actively used parks in North Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Park is the largest park in the Minneapolis
              park system — over 750 acres of woodland, prairie, lakes,
              and trails stretching along the western border of North
              Minneapolis. The park includes a golf course, Wirth Beach on
              Wirth Lake, mountain bike trails, cross-country ski trails,
              a nature center, and the Eloise Butler Wildflower Garden.
              Harrison residents can access this extraordinary resource
              within minutes, though the connection between the park and
              the Northside neighborhoods it borders has historically been
              weaker than it should be — a disparity that community
              advocates and the Park Board have been working to address.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Harrison Schools">
        <Prose>
          <p>
            Harrison is served by Minneapolis Public Schools, and the
            educational landscape here reflects the challenges facing North
            Minneapolis schools broadly. Nellie Stone Johnson Community
            School, named for the pioneering Black and labor activist, is
            a nearby elementary option. North High School serves the area
            for grades 9–12.
          </p>
          <p>
            Educational outcomes in the area reflect the achievement gap
            that has persisted in Minneapolis for decades. Many Harrison
            families navigate the district&apos;s open enrollment system to
            access magnet programs and specialty schools in other parts of
            the city. Charter schools provide additional options. Community
            organizations offer after-school programming and educational
            support that supplement what the formal school system provides.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Harrison Real Estate & Housing">
        <Prose>
          <p>
            Harrison&apos;s housing market is among the most affordable in
            Minneapolis, with median home sale prices ranging from roughly
            $190,000 to $265,000 in 2025. For buyers seeking homeownership
            in a centrally-located Minneapolis neighborhood, this price
            point is remarkable — particularly given the proximity to
            downtown and Theodore Wirth Park. The affordability reflects
            both the genuine opportunity and the effects of historical
            disinvestment.
          </p>
          <p>
            The housing stock is predominantly older frame houses and
            bungalows from the 1890s through 1940s. Conditions vary widely
            — some homes have been carefully maintained or renovated,
            while others need significant work. Community development
            corporations and nonprofit housing organizations have been
            active in Harrison, producing affordable housing and
            rehabilitating existing properties. Some new construction has
            added modern, energy-efficient homes to the mix.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the lower end ($130,000–$200,000), you&apos;re looking at
              smaller homes that need updating or properties that have been
              on the market longer. The mid-range ($200,000–$280,000) can
              get you a well-maintained three-bedroom home or a recently
              rehabbed property. New construction or fully renovated homes
              may reach $300,000–$350,000. Duplexes are available and
              can offer owner-occupant investment opportunities.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Harrison">
        <Prose>
          <p>
            Harrison benefits from its central location — downtown
            Minneapolis is approximately eight minutes by car, and the
            neighborhood&apos;s position between I-94 and I-394 provides
            quick highway access to the broader metro. The Walk Score of 58
            and Bike Score of 75 reflect a neighborhood that is navigable
            but not fully served by walkable commercial corridors.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along Glenwood
            Avenue and Plymouth Avenue, providing connections to downtown
            and North Minneapolis. The flat terrain and grid street pattern
            make biking practical, and the proximity to Theodore Wirth
            Park trails adds recreational cycling options. The Luce Line
            Trail, which runs through the western part of the area,
            connects to the regional trail network.
          </p>
          <p>
            The freeways that define Harrison&apos;s boundaries are a
            double-edged reality: they provide convenient car access to the
            rest of the metro but create barriers to pedestrian and cyclist
            connections with adjacent neighborhoods. Crossing I-394 to
            reach Bryn Mawr or I-94 to reach the North Loop is manageable
            but not pleasant, and the freeway infrastructure reinforces the
            neighborhood&apos;s physical isolation.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Harrison exists in a space of both promise and uncertainty.
            The neighborhood has real assets and real challenges, and the
            question of how the balance between them shifts will depend on
            decisions being made now — by the city, by developers, by
            community organizations, and by residents themselves.
          </p>
        </Prose>

        <ArticleSubsection title="Development Pressure">
          <Prose>
            <p>
              Harrison&apos;s proximity to downtown and the North Loop —
              one of the hottest real estate markets in the city — creates
              development pressure that is beginning to be felt. Land
              values in the North Loop have increased dramatically, and
              developers looking for the next opportunity have noticed
              Harrison&apos;s affordable land and central location.
              Community organizations have pushed for development that
              includes affordable housing and serves existing residents,
              but the track record of development in low-income
              neighborhoods is not reassuring.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Commercial Corridor Challenges">
          <Prose>
            <p>
              Glenwood Avenue, Harrison&apos;s primary commercial street,
              has struggled to support a thriving business corridor. Vacancy
              rates remain high, and the corridor lacks the critical mass
              of businesses needed to create a walkable, self-sustaining
              commercial district. Efforts to attract and retain businesses
              have been ongoing but have not yet produced the transformation
              that the community seeks.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Community Organizing">
          <Prose>
            <p>
              Harrison&apos;s neighborhood organization has been active in
              advocating for the community&apos;s interests — pushing for
              equitable development, improved services, and investments in
              infrastructure and public safety. The organization&apos;s
              effectiveness depends on resident engagement, and the
              neighborhood&apos;s diversity — while a strength — also
              creates challenges in building consensus across cultural and
              linguistic differences. The work continues, driven by
              residents who believe that this neighborhood deserves better
              than it has received.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Harrison FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
