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
    title: "Folwell, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Folwell, Minneapolis — near Webber Park pool, diverse residential community, affordable housing, schools, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Folwell",
  deck: "A residential North Minneapolis neighborhood anchored by Folwell Park and within reach of the one-of-a-kind Webber Park natural swimming pool — where affordable blocks, growing diversity, and the quiet persistence of homeowners keeping up their houses tells a story that the crime statistics alone never could.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Folwell?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Folwell" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Folwell, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,400", label: "Residents (US Census / City of Minneapolis)" },
      { value: "$170K–$240K", label: "Median home sale price range (2025 data)" },
      { value: "1900s–1940s", label: "Era most homes were built" },
      { value: "Highly diverse", label: "Black, Hmong, Somali, Latino, white populations" },
      { value: "Webber Park", label: "Notable nearby natural swimming pool" },
      { value: "12–15 min", label: "Drive to downtown Minneapolis" },
      { value: "54", label: "Walk Score" },
      { value: "72", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Folwell a good neighborhood in Minneapolis?",
      answer:
        "Folwell offers affordable housing, genuine racial and ethnic diversity, access to Folwell and Webber parks, and a residential character that is quieter than its reputation might suggest. It shares the challenges common to North Minneapolis — elevated crime rates, commercial gaps, and the effects of long-term disinvestment — but also has committed homeowners and active community organizations. For buyers seeking affordability and diversity, Folwell deserves serious consideration.",
    },
    {
      question: "Is Folwell, Minneapolis safe?",
      answer:
        "Folwell's crime rates are higher than the citywide average, consistent with North Minneapolis broadly. Safety varies by block, with some blocks feeling stable and well-maintained and others facing more frequent incidents. Community organizations and block clubs work on safety initiatives. Like most North Minneapolis neighborhoods, Folwell is a place where understanding your specific block matters more than neighborhood-level statistics.",
    },
    {
      question: "What is Folwell, Minneapolis known for?",
      answer:
        "Folwell is known for its proximity to Webber Park and its nationally recognized natural swimming pool, the Folwell Park recreation center, affordable housing, and its diverse residential community. It sits in the northern tier of North Minneapolis, between the Jordan neighborhood to the south and the Webber-Camden area to the north.",
    },
    {
      question: "How much do homes cost in Folwell, Minneapolis?",
      answer:
        "Folwell has very affordable housing by Minneapolis standards, with median home sale prices ranging from roughly $170,000 to $240,000 in 2025. Smaller homes needing work can be found under $170,000, while updated or new-construction properties can reach $280,000 or more.",
    },
    {
      question: "Where exactly is Folwell in Minneapolis?",
      answer:
        "Folwell is in North Minneapolis, roughly bounded by 26th Avenue North / Dowling Avenue to the south, Webber Parkway to the north, the railroad corridor to the east, and Penn Avenue North to the west. It sits north of Jordan and south of the Webber-Camden neighborhood.",
    },
    {
      question: "What is the Webber Park natural swimming pool?",
      answer:
        "Webber Park, adjacent to Folwell, is home to one of the most unique public swimming facilities in the country — a chlorine-free, naturally filtered swimming pool that opened in 2015. The pool uses a regeneration basin planted with aquatic vegetation to filter water biologically. It has drawn attention nationally as a model for sustainable public recreation.",
    },
    {
      question: "What schools serve Folwell, Minneapolis?",
      answer:
        "Folwell is served by Minneapolis Public Schools. Cityview Performing Arts Magnet and other nearby elementaries provide options. North High School and Patrick Henry High School serve the area for upper grades. Many families also access magnet programs, charter schools, and the district's open enrollment system.",
    },
    {
      question: "Is Folwell a good place to buy a home?",
      answer:
        "For buyers seeking affordable homeownership in Minneapolis, Folwell offers low entry prices, reasonable housing stock, and proximity to excellent park facilities. Buyers should be aware of the neighborhood's challenges and prepared to be active community participants. The combination of affordability and park access is difficult to match elsewhere in the city.",
    },
  ],
  nearby: [
    { name: "Jordan", slug: "jordan", description: "Community resilience and affordable blocks to the south" },
    { name: "Webber - Camden", slug: "webber-camden", description: "Natural swimming pool and Camden neighborhoods to the north" },
    { name: "McKinley", slug: "mckinley", description: "Community gardens and affordable housing to the west" },
    { name: "Cleveland", slug: "cleveland", description: "North Minneapolis residential neighborhood to the east" },
    { name: "Lind - Bohanon", slug: "lind-bohanon", description: "Northern North Minneapolis near the city boundary" },
  ],
  closing: {
    title: "What Makes Folwell Home",
    paragraphs: [
      "Folwell is a neighborhood that does not demand attention. It is not the historic center of anything. It does not have a famous corridor or a landmark building. It is a neighborhood of houses and parks and people — of front porches and rec centers and block clubs and community gardens and the quiet, daily work of making a neighborhood function. That work is done by the people who live here, often without recognition or support, and it is as important as anything happening in any neighborhood in Minneapolis.",
      "The natural swimming pool at Webber Park draws visitors from across the city, and rightly so — it is a remarkable piece of public infrastructure. But the real asset of Folwell is the same asset that defines every neighborhood worth living in: people who care about where they live and act on that care. In a city that has too often written off North Minneapolis, that persistence is both an accusation and an inspiration.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          The first time you swim in the Webber Park natural pool, you
          notice the water. It is clear, soft, and free of the chemical
          bite of chlorine — filtered instead through a basin of aquatic
          plants that clean it biologically, a system that is one of
          the first of its kind in the country. Kids splash in the
          shallow end while lap swimmers move through the lanes. The pool
          sits at the edge of Webber Park, just north of Folwell, and on
          a hot July afternoon it is the best free thing in Minneapolis.
          But the pool is only part of the story. Walk south from the
          water and you are in Folwell — a neighborhood of modest houses,
          mature trees, and the kind of diversity that happens naturally
          when a community is affordable enough to welcome everyone.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/folwell/hero.webp"
        alt="A residential street in Folwell, Minneapolis with mature trees and modest homes"
        caption="Folwell — affordable blocks and genuine diversity in northern North Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Folwell, Minneapolis?">
        <Prose>
          <p>
            Folwell is a residential neighborhood in North Minneapolis,
            bounded roughly by 26th Avenue North and Dowling Avenue to
            the south, Webber Parkway to the north, the railroad corridor
            to the east, and Penn Avenue North to the west. Home to
            approximately 3,400 residents, it is one of the most racially
            and ethnically diverse neighborhoods in Minneapolis — a mix of
            Black, Hmong, Somali, Latino, Native American, and white
            families living on blocks of affordable, older homes.
          </p>
          <p>
            Folwell sits in the northern tier of North Minneapolis, between{" "}
            <Link href="/neighborhoods/jordan" className="text-[#2a9d8f] hover:underline">
              Jordan
            </Link>{" "}
            to the south and{" "}
            <Link href="/neighborhoods/webber-camden" className="text-[#2a9d8f] hover:underline">
              Webber - Camden
            </Link>{" "}
            to the north. It is quieter and more residential than
            neighborhoods closer to the West Broadway commercial corridor,
            and its proximity to Webber Park and its natural swimming pool
            gives it an asset that few Minneapolis neighborhoods can match.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Folwell Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/folwell/neighborhood-sign.webp"
          alt="Folwell neighborhood sign in Minneapolis"
          caption="The Folwell neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Folwell History & Origins">
        <Prose>
          <p>
            Folwell developed in the early twentieth century as
            Minneapolis continued its northward expansion. Named after
            William Watts Folwell, the first president of the University
            of Minnesota, the neighborhood filled in with the kind of
            modest, practical housing that characterized working-class
            Minneapolis — frame houses and bungalows built for the
            families of industrial and railroad workers.
          </p>
          <p>
            The neighborhood&apos;s early residents were predominantly
            Scandinavian and Eastern European, following the pattern of
            North Minneapolis settlement. The demographic transition
            began in the mid-twentieth century as Black families, expanding
            beyond the confines of Near North, moved into northern
            Northside neighborhoods. By the late twentieth century,
            successive waves of immigration — Hmong families, Somali and
            other East African families, Latino families — had transformed
            Folwell into one of the most diverse neighborhoods in the city.
          </p>
          <p>
            Folwell experienced the same patterns of disinvestment that
            affected North Minneapolis broadly, though its distance from
            the most acute distress of the Near North core meant that
            some blocks maintained greater stability. The neighborhood&apos;s
            housing stock aged, some properties deteriorated, and
            commercial services thinned. But homeownership remained
            relatively strong on many blocks, and the community&apos;s
            diversity — while creating challenges of communication and
            cultural bridging — also brought new energy and new investment
            from families putting down roots.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Folwell">
        <Prose>
          <p>
            Folwell is primarily a neighborhood of single-family homes on
            quiet, tree-lined blocks. The pace is residential —
            lawnmowers on Saturday mornings, kids riding bikes after school,
            the slow rhythm of a neighborhood where people live and sleep
            rather than shop and dine. The diversity is visible and
            unremarkable: Hmong families gardening in their yards, Somali
            kids walking to the rec center, Black grandparents sitting on
            porches, white retirees tending flower beds. This is what
            genuine integration looks like when it happens not by design
            but by economics — people from different backgrounds choosing
            the same neighborhood because it is what they can afford, and
            building community across difference through proximity and
            time.
          </p>
          <p>
            The Folwell Park recreation center is a community anchor,
            providing programming for youth and adults year-round. Summer
            programming — sports leagues, arts activities, community
            events — draws kids from across the neighborhood and creates
            the intergenerational, multicultural interactions that
            define Folwell&apos;s character. The park itself, while more
            modest than the showpiece parks in wealthier neighborhoods,
            serves its community faithfully.
          </p>
          <p>
            The Webber Park natural swimming pool, just north of
            Folwell&apos;s boundary, is a genuine neighborhood amenity
            that draws people from across the city. For Folwell residents,
            it is a walkable or bikeable destination that provides
            world-class recreation at no cost — a rare convergence of
            public investment and community access in a part of the city
            that has not always received its share.
          </p>
        </Prose>
        <Quote
          text="My kids play with kids who speak four different languages. They don't think about it. They just play. That's something you can't buy in a fancier neighborhood."
          cite="Folwell parent"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Folwell Food, Drink & Local Spots">
        <Prose>
          <p>
            Folwell is a residential neighborhood without a significant
            commercial corridor, and its dining options are limited.
            Residents rely on nearby corridors — West Broadway to the
            south, Penn Avenue, and Lowry Avenue — for restaurants and
            food shopping. The neighborhood&apos;s food landscape is
            shaped more by home cooking and community gardens than by
            commercial dining.
          </p>
        </Prose>

        <ArticleSubsection title="What's Available">
          <PlaceCardComponent place={{ name: "Nearby Commercial Corridors", tag: "Various", price: "$–$$", description: "West Broadway Avenue (south of Folwell) and Penn Avenue provide the closest commercial dining options — small restaurants, takeout spots, and ethnic groceries serving the North Minneapolis community. The selection is modest but reflects the cultural diversity of the area." }} />
          <PlaceCardComponent place={{ name: "Community Gardens", tag: "Food Production", price: "Free", description: "Folwell's community gardens are among its most visible community assets. Hmong, Somali, and other families with gardening traditions have transformed vacant lots and backyard plots into productive growing spaces. The gardens serve as both food sources and community gathering points, bridging cultural differences through shared practice." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near Folwell">
        <Prose>
          <p>
            Folwell&apos;s park access is one of its strongest features.
            Between Folwell Park, Webber Park and its natural swimming
            pool, and the proximity to Theodore Wirth Park, residents have
            access to recreational facilities that rival any neighborhood
            in the city.
          </p>
        </Prose>

        <ArticleSubsection title="Folwell Park">
          <Prose>
            <p>
              Folwell Park includes a recreation center, playing fields,
              basketball courts, a playground, and open green space. The
              rec center provides year-round programming and serves as
              the neighborhood&apos;s primary indoor gathering space.
              The park is well-used by the neighborhood&apos;s diverse
              community and hosts seasonal events and programming.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Webber Park & Natural Swimming Pool">
          <Prose>
            <p>
              Webber Park, just north of Folwell, is home to the Webber
              Park natural swimming pool — a chlorine-free public pool
              that uses biological filtration through a planted
              regeneration basin. Opened in 2015, the pool was one of the
              first of its kind in the United States and has been
              recognized nationally as a model for sustainable public
              recreation. The pool is free and open to all, and it
              draws visitors from across the Twin Cities. For Folwell
              residents, it is a walkable neighborhood amenity of
              exceptional quality.
            </p>
            <p>
              Webber Park also includes trails, picnic areas, and a
              recreation center. Webber Parkway, a tree-lined boulevard
              connecting Webber Park to Theodore Wirth Park, provides
              a pleasant walking and cycling route.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Theodore Wirth Park">
          <Prose>
            <p>
              Theodore Wirth Park is accessible from Folwell&apos;s western
              reaches and provides over 750 acres of woodland, trails,
              and recreational facilities. The park includes a golf
              course, beach, mountain bike trails, cross-country ski
              trails, and the Eloise Butler Wildflower Garden. For
              Folwell residents, Wirth Park represents extraordinary
              natural access within the city.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Folwell Schools">
        <Prose>
          <p>
            Folwell is served by Minneapolis Public Schools, with several
            elementary options in the area including Cityview Performing
            Arts Magnet. Patrick Henry High School and North High School
            serve the area for upper grades. The schools reflect the
            diversity of the neighborhood and face the challenges common
            to North Minneapolis education — the achievement gap,
            resource constraints, and the effects of poverty on
            educational outcomes.
          </p>
          <p>
            Many families navigate the district&apos;s open enrollment
            system to access magnet programs and schools in other parts
            of the city. Charter schools provide additional options. The
            neighborhood&apos;s linguistic and cultural diversity creates
            both challenges and opportunities in the educational
            setting — schools serving Folwell students work with families
            speaking many different home languages.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Folwell Real Estate & Housing">
        <Prose>
          <p>
            Folwell&apos;s housing market is very affordable by Minneapolis
            standards, with median home sale prices ranging from roughly
            $170,000 to $240,000 in 2025. The housing stock is
            predominantly older frame houses and bungalows from the 1900s
            through 1940s. Conditions vary — some homes have been
            well-maintained or updated, while others need significant
            work.
          </p>
          <p>
            Community development organizations have been active in
            Folwell, producing affordable housing and rehabilitating
            existing properties. Some new construction has added modern,
            energy-efficient homes. The mix of long-term homeowners,
            newer buyers attracted by affordability, and rental
            properties creates a varied housing landscape.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($120,000–$180,000), you can find smaller
              homes that need updating — older mechanicals, dated
              kitchens, cosmetic work. The mid-range ($180,000–$250,000)
              gets you a maintained three-bedroom home or a recently
              rehabbed property. New construction can reach $260,000–
              $330,000. The affordability is genuine and makes
              homeownership accessible for many buyers who would be
              priced out of most other Minneapolis neighborhoods.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Folwell">
        <Prose>
          <p>
            Folwell is primarily car-dependent, with a Walk Score of 54
            and a Bike Score of 72. Downtown Minneapolis is approximately
            twelve to fifteen minutes by car. The neighborhood&apos;s
            residential character means that most errands — grocery
            shopping, dining, many services — require travel outside the
            immediate area.
          </p>
          <p>
            Metro Transit bus routes serve the neighborhood along Penn
            Avenue and Lyndale Avenue North, providing connections to
            downtown and the broader transit network. The flat terrain
            makes biking practical, and the Webber Parkway provides a
            pleasant cycling route connecting to the broader trail network.
          </p>
          <p>
            Street parking is generally available. Highway access via
            I-94 and Highway 55 is reasonable, making car commuting
            to downtown and other employment centers straightforward.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Folwell exists in the space between the more acute challenges
            of central North Minneapolis and the relative stability of
            the Camden neighborhoods to the north. Its tensions are real
            but sometimes less dramatic than in neighborhoods with higher
            profiles.
          </p>
        </Prose>

        <ArticleSubsection title="Stability and Change">
          <Prose>
            <p>
              Folwell&apos;s greatest strength and greatest challenge are
              the same thing: stability. Many blocks have maintained
              consistent homeownership and community bonds over decades.
              But stability also means that the neighborhood has not
              attracted the level of new investment that could address
              aging housing stock, fill commercial gaps, and provide the
              services residents need. The balance between preserving
              what works and improving what doesn&apos;t is the central
              tension.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Diversity as Asset and Challenge">
          <Prose>
            <p>
              Folwell&apos;s remarkable diversity is both its defining
              feature and a source of ongoing work. Building community
              across language barriers, cultural differences, and
              different relationships to institutions requires effort
              and intention. The neighborhood&apos;s community
              organizations have worked to bridge these differences, with
              some success — multicultural events, shared gardening
              spaces, and youth programming that brings kids together
              across cultural lines. But the work is never finished, and
              the challenges of communication and mutual understanding
              are real.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Park Investment">
          <Prose>
            <p>
              The Webber Park natural swimming pool represents a
              significant public investment in North Minneapolis recreation
              — and it has been well-received by the community. The
              question is whether similar investments will follow in other
              areas: infrastructure, commercial corridors, school
              facilities, and the basic services that make a neighborhood
              function. The pool proves that public investment in North
              Minneapolis can work and can serve the existing community.
              The challenge is scaling that model.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Folwell FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
