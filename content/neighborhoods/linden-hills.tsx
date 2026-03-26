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
    title: "Linden Hills, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Linden Hills, Minneapolis — boutique shopping on 43rd & Upton, Lake Harriet, Bde Maka Ska, restaurants, schools, housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Linden Hills",
  deck: "A lakeside village inside a city — where a fiercely independent commercial district, two of Minneapolis's most beloved lakes, and a bookstore guarded by chickens have created one of the most quietly powerful neighborhood identities in the Upper Midwest.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Linden Hills?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Linden Hills" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Lakes" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Linden Hills, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~7,000", label: "Residents (Niche / US Census)" },
      { value: "$625K–$850K", label: "Median home sale price range (2025 data)" },
      { value: "12 days", label: "Average time on market (Redfin, 2025)" },
      { value: "2 lakes", label: "Lake Harriet & Bde Maka Ska on the border" },
      { value: "1910s–30s", label: "Era most homes were built" },
      { value: "15–20 min", label: "Drive to downtown or MSP airport" },
      { value: "78", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Linden Hills a good neighborhood in Minneapolis?",
      answer:
        "Yes — Linden Hills is consistently rated as one of the best neighborhoods in Minneapolis and in Minnesota overall. Its combination of two major lakes, a thriving independent commercial district, strong schools, beautiful housing stock, and an unusually cohesive community identity makes it one of the most desirable places to live in the Twin Cities.",
    },
    {
      question: "Is Linden Hills, Minneapolis safe?",
      answer:
        "Linden Hills is one of the safer neighborhoods in Minneapolis. Violent crime is rare. Property crime — vehicle break-ins, package theft, and occasional garage burglaries — has increased modestly in recent years, a pattern seen across Southwest Minneapolis. The neighborhood has an active community watch culture and strong block club participation.",
    },
    {
      question: "What is Linden Hills, Minneapolis known for?",
      answer:
        "Linden Hills is best known for its boutique shopping district at 43rd & Upton, the beloved Wild Rumpus children's bookstore (famous for its resident chickens and cats), proximity to both Lake Harriet and Bde Maka Ska, Sebastian Joe's Ice Cream, and a strong, village-like community identity that is unusual even by Minneapolis standards.",
    },
    {
      question: "How much do homes cost in Linden Hills, Minneapolis?",
      answer:
        "Median home sale prices in 2025 ranged from roughly $625,000 to over $850,000, significantly above the citywide median of approximately $350,000–$375,000. Smaller bungalows and cottages can occasionally sell in the $450,000–$550,000 range, while lakeside properties and larger renovated homes regularly exceed $1 million.",
    },
    {
      question: "Is Linden Hills walkable?",
      answer:
        "Very much so, within the neighborhood. The commercial district at 43rd & Upton is walkable from most Linden Hills addresses, and both Lake Harriet and Bde Maka Ska are accessible on foot or bike. Linden Hills has a Walk Score of 78 and a Bike Score of 90 — among the highest bike scores in the city, thanks to the lake trails and the Midtown Greenway connection.",
    },
    {
      question: "What schools serve Linden Hills, Minneapolis?",
      answer:
        "The standard public pipeline includes Lake Harriet Lower Elementary (K–2), Lake Harriet Upper Elementary (3–5), Anthony Middle School, and Southwest Senior High School — an International Baccalaureate World School. Several private and alternative options are also nearby, including the Blake School in Hopkins.",
    },
    {
      question: "What are the best restaurants in Linden Hills, Minneapolis?",
      answer:
        "The most beloved spots include Tilia (seasonal New American cuisine from acclaimed chef Steven Brown), Sebastian Joe's Ice Cream (a Minneapolis institution since 1984), Clancy's Meat & Fish (a neighborhood restaurant with a loyal following), and Naviya's Thai Brasserie. The 43rd & Upton commercial node also features strong coffee shops and bakeries.",
    },
    {
      question: "Where exactly is Linden Hills in Minneapolis?",
      answer:
        "Linden Hills is in Southwest Minneapolis, bounded roughly by West 36th Street and the Midtown Greenway to the north, Lake Harriet Parkway and the lake to the east, West 44th Street to the south, and France Avenue South to the west. It borders Kenwood and Cedar-Isles-Dean to the north, East Harriet to the east, Fulton to the south, and the suburb of St. Louis Park to the west.",
    },
    {
      question: "Is Linden Hills a good place to raise a family?",
      answer:
        "Linden Hills is widely considered one of the best family neighborhoods in Minneapolis. The Lake Harriet school pipeline is strong, the neighborhood is safe and walkable, and outdoor recreation — swimming, biking, skating, skiing — is practically at your doorstep. The commercial district is kid-friendly, and community events like the Linden Hills Festival create a genuine village atmosphere.",
    },
    {
      question: "What is 43rd and Upton?",
      answer:
        "43rd and Upton is the heart of Linden Hills' commercial district — a small, walkable cluster of independent shops, restaurants, and services centered on the intersection of 43rd Street and Upton Avenue South. It's home to Wild Rumpus bookstore, Sebastian Joe's Ice Cream, Tilia, and dozens of other locally owned businesses.",
    },
    {
      question: "How far is Linden Hills from downtown Minneapolis?",
      answer:
        "Linden Hills is approximately 15–20 minutes from downtown Minneapolis by car, depending on traffic. Bus routes along France Avenue connect to Uptown and downtown. The neighborhood also connects to the Midtown Greenway bike trail, which runs east to Lake Street and beyond. MSP International Airport is roughly 20 minutes away.",
    },
  ],
  nearby: [
    { name: "Fulton", slug: "fulton", description: "Century-old bungalows and Lake Harriet's south shore" },
    { name: "East Harriet", slug: "east-harriet", description: "Charming homes near Lyndale Avenue" },
    { name: "East Bde Maka Ska", slug: "east-bde-maka-ska", description: "Urban lakeside living near Uptown" },
    { name: "Kenwood", slug: "kenwood", description: "Grand homes and Lake of the Isles" },
    { name: "West Maka Ska", slug: "west-maka-ska", description: "Quiet streets west of the lake" },
    { name: "Cedar - Isles - Dean", slug: "cedar-isles-dean", description: "Greenway access and island park charm" },
  ],
  closing: {
    title: "What Makes Linden Hills Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis with more nightlife, more density, more diversity, more affordability. Linden Hills isn't trying to win those contests. What it has — what it has built and protected with unusual intentionality over more than a century — is something closer to a village identity: the sense that a neighborhood can be small enough to know, walkable enough to love on foot, and rooted enough in its own particular character that it doesn't need to be anything else. The bookstore has chickens. The ice cream shop has a line in February. The lakes freeze and people keep coming.",
      "That identity isn't free — it costs money to live here, it costs cultural homogeneity that the neighborhood is only beginning to reckon with, and it costs a certain insularity that can shade into complacency. But for the families pushing strollers past Wild Rumpus on a Saturday morning, the runners doing laps around Harriet at dawn, the couples splitting a Pavarotti's Italian Bombe on the Sebastian Joe's patio — this place works. Not perfectly, not for everyone. But in a way that people recognize immediately and remember for a long time.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          There is a children&apos;s bookstore in Linden Hills where chickens
          wander freely across the floor, cats sleep in the window displays,
          and a pair of chinchillas lives behind glass near the poetry section.
          The front door is cut in half — a Dutch door, sized for children —
          so that adults have to duck to enter. This is not a gimmick. Wild
          Rumpus has operated this way since 1992, and it tells you something
          essential about the neighborhood: Linden Hills knows exactly what it
          is, has known for decades, and has no interest in being anything else.
          Outside, the commercial strip at 43rd and Upton hums with the quiet
          confidence of a place that doesn&apos;t need to announce itself. A
          block away, Lake Harriet catches the afternoon light. Two blocks the
          other direction, Bde Maka Ska does the same. Between the two lakes,
          this neighborhood has built something rare — a genuine village, inside
          a city, that has somehow held.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/linden-hills/hero.webp"
        alt="Lake Harriet shoreline seen from Linden Hills with the Minneapolis skyline in the distance"
        caption="Linden Hills sits between two of Minneapolis's most beloved lakes"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Linden Hills, Minneapolis?">
        <Prose>
          <p>
            Linden Hills is a residential neighborhood in Southwest Minneapolis,
            bordered roughly by the Midtown Greenway and West 36th Street to the
            north, Lake Harriet to the east and south, West 44th Street to the
            south, and France Avenue South to the west. It sits between two of
            the city&apos;s most significant lakes — Lake Harriet to the east
            and south, and Bde Maka Ska (formerly Lake Calhoun) to the
            northeast — giving it more lakefront access per capita than almost
            any neighborhood in Minneapolis. Approximately 7,000 residents live
            here, many of them for a very long time.
          </p>
          <p>
            The neighborhood&apos;s commercial center at 43rd Street and Upton
            Avenue South is one of the most distinctive small business districts
            in the Twin Cities — a tight cluster of independent shops,
            restaurants, and cafes that has resisted chain encroachment with
            unusual success. Combined with the lakes, the mature tree canopy,
            and a housing stock heavy on early-20th-century charm, Linden Hills
            functions less like a typical city neighborhood and more like a
            small town that happens to be fifteen minutes from a downtown
            skyline.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Linden Hills Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/linden-hills/neighborhood-sign.webp"
          alt="Linden Hills neighborhood sign in Minneapolis"
          caption="The Linden Hills neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Linden Hills History & Origins">
        <Prose>
          <p>
            Long before Linden Hills was a Minneapolis neighborhood, the land
            between the lakes was central to the world of the Dakota people.
            Bde Maka Ska — &quot;White Earth Lake&quot; in the Dakota
            language — and Lake Harriet sit within the ancestral homeland of the
            Wahpekute and Mdewakanton bands of the Dakota nation. The area
            around the lakes was a place of seasonal camps, wild rice
            harvesting, fishing, and ceremony. At Bde Maka Ska, the Dakota
            leader Cloud Man established a farming community in the 1820s and
            1830s, working with the Indian agent Lawrence Taliaferro in what
            was one of the earliest experiments in agricultural adaptation on
            Dakota land. Forced removal in 1839 displaced the Dakota from the
            lakes they had known for centuries. The ground here carries that
            history.
          </p>
          <p>
            European-American settlement arrived in earnest after the 1850s,
            and the lakes quickly became recreational destinations for the
            growing city of Minneapolis. The Minneapolis Street Railway Company
            extended its lines to Lake Harriet in the 1880s, building pavilions
            and offering concerts to attract riders — a commercial strategy that
            accidentally created one of Minneapolis&apos;s most enduring
            cultural traditions. By the turn of the century, the area around
            the lakes was transitioning from resort destination to permanent
            residential neighborhood.
          </p>
          <p>
            The neighborhood takes its name from the linden trees — also called
            basswoods — that grew abundantly in the area. Development
            accelerated in the 1910s and 1920s, when the streetcar made
            commuting from Southwest Minneapolis to downtown practical. The
            homes built during this era — Craftsman bungalows, Colonial
            Revivals, Tudor cottages, and stucco two-stories — still define the
            neighborhood&apos;s architectural character. They were built for
            the middle class: teachers, clerks, small business owners. Their
            modest scale is part of what gives Linden Hills its intimate feel
            a century later.
          </p>
          <p>
            The commercial district at 43rd and Upton grew organically around
            the streetcar stop, as commercial nodes in Minneapolis often did.
            When the streetcar era ended in the 1950s, many of these small
            commercial clusters withered. Linden Hills&apos;s survived — partly
            because of the lakes drawing consistent foot traffic, partly because
            of the neighborhood&apos;s density and walkability, and partly
            because residents simply refused to let it die. That stubbornness
            is a defining trait. The Linden Hills commercial district today is
            one of the few streetcar-era business nodes in Minneapolis that has
            not only survived but thrived, largely on the strength of
            independent, locally owned businesses.
          </p>
          <p>
            Throughout the latter half of the 20th century, Linden Hills
            remained stable and desirable — never experiencing the
            disinvestment cycles that affected neighborhoods closer to downtown.
            By the 1990s and 2000s, it had become one of the most sought-after
            addresses in Minneapolis, a status it maintains today. The
            neighborhood&apos;s identity — lakeside, walkable, independent,
            community-driven — was not invented by a marketing firm. It was
            built by a hundred years of people choosing to live between two
            lakes and taking care of what they found there.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Linden Hills">
        <Prose>
          <p>
            Linden Hills has a personality, and it knows it. This is a
            neighborhood where people identify with the place itself — not just
            &quot;Southwest Minneapolis&quot; or &quot;near the lakes,&quot; but
            specifically Linden Hills. The commercial district at 43rd and Upton
            is the physical center of this identity: a few walkable blocks where
            you can get an ice cream cone at Sebastian Joe&apos;s, buy a
            children&apos;s book from a store with live chickens, pick up
            sustainably raised meat from Clancy&apos;s, eat dinner at Tilia,
            and run into three people you know along the way. The scale is
            human. The businesses are real. The encounters are not accidental.
          </p>
          <p>
            The residential streets reinforce the feeling. Mature elms and oaks
            arch over wide sidewalks. Front porches are used, not decorative.
            Block parties happen. The Linden Hills Neighborhood Council — one
            of the more active neighborhood organizations in Minneapolis —
            coordinates events, advocates on planning issues, and publishes a
            neighborhood newsletter. The annual Linden Hills Festival, typically
            held in late summer, draws the neighborhood out for live music, art,
            food vendors, and the kind of low-key civic celebration that feels
            corny to describe and genuinely nice to attend.
          </p>
          <p>
            Families are the demographic center of gravity here. The Lake
            Harriet school pipeline — Lake Harriet Lower and Upper Elementary,
            Anthony Middle School, Southwest High — is a primary draw, and the
            neighborhood&apos;s walkability, safety, and outdoor access make it
            ideal for households with children. But Linden Hills isn&apos;t
            exclusively a family neighborhood. Long-term empty nesters who
            bought in decades ago, younger couples drawn to the lake lifestyle,
            and retirees who don&apos;t want to leave the city all contribute
            to a population that&apos;s more age-diverse than its family-centric
            reputation suggests.
          </p>
          <p>
            The vibe is progressive, civic-minded, and environmentally
            conscious — this is a neighborhood where yard signs signal political
            commitments, where composting is standard, and where the local
            business association actively promotes sustainability. Neighboring{" "}
            <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
              Fulton
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
              Kenwood
            </Link>{" "}
            share some of this character, but Linden Hills has a stronger
            commercial and social center than either — a place where the
            neighborhood&apos;s identity is physically concentrated in a way
            that gives it unusual cohesion.
          </p>
        </Prose>
        <Quote
          text="I've lived in several Minneapolis neighborhoods, and Linden Hills is the only one where I feel like I live in a small town. I know my neighbors. I know the shopkeepers. My kids walk to the lake by themselves."
          cite="Long-term Linden Hills resident, Niche review"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Linden Hills Food, Drink & Local Spots">
        <Prose>
          <p>
            The food and shopping scene in Linden Hills is concentrated,
            independent, and unusually resistant to turnover. The commercial
            district at 43rd and Upton is small enough to walk in ten minutes
            and deep enough to sustain a genuine neighborhood economy. What
            makes it distinctive isn&apos;t just the quality of the individual
            businesses — it&apos;s the fact that they are almost entirely
            locally owned, and that the community has actively protected that
            character for decades.
          </p>
        </Prose>

        <ImageSlot
          src="/images/neighborhoods/linden-hills/commercial-district.webp"
          alt="The commercial district at 43rd and Upton Avenue in Linden Hills, Minneapolis"
          caption="43rd & Upton — the heart of Linden Hills' independent business district"
        />

        <ArticleSubsection title="The Institutions">
          <PlaceCardComponent place={{ name: "Wild Rumpus", tag: "Bookstore", price: "$$", url: "https://www.wildrumpusbooks.com", description: "2720 W. 43rd Street. A nationally renowned independent children's bookstore — named after the Sendak book, of course — where live chickens, cats, chinchillas, and a tarantula roam freely among the shelves. The front door is child-sized. The curating is exceptional. Wild Rumpus has been a Linden Hills institution since 1992 and is regularly cited as one of the best children's bookstores in America. Adults are welcome, but they'll need to duck." }} />
          <PlaceCardComponent place={{ name: "Sebastian Joe's Ice Cream", tag: "Ice Cream", price: "$", description: "4321 Upton Ave. S. A Minneapolis institution since 1984, known for creative flavors — the Pavarotti's Italian Bombe (chocolate ice cream with fudge, caramel, and espresso) is legendary — and long lines that persist even in winter. The original location is here in Linden Hills. There's a second shop on Franklin Avenue, but this is the one with the history." }} />
          <PlaceCardComponent place={{ name: "Tilia", tag: "New American", price: "$$$", url: "https://www.tiliampls.com", description: "2726 W. 43rd Street. Chef Steven Brown's seasonally driven neighborhood restaurant — approachable fine dining that pulls from local farms and changes with what's available. The burger is widely considered one of the best in Minneapolis. Tilia opened in 2012 and quickly became the kind of restaurant that defines a neighborhood's culinary identity. Reservations recommended." }} />
          <PlaceCardComponent place={{ name: "Clancy's Meat & Fish", tag: "American", price: "$$", description: "4307 Upton Ave. S. Part neighborhood restaurant, part specialty market — Clancy's serves sustainably sourced meat and fish in a casual, convivial setting. The attached market sells high-quality cuts, house-made sausages, and prepared foods. A Linden Hills staple for families and food-conscious locals." }} />
          <PlaceCardComponent place={{ name: "Naviya's Thai Brasserie", tag: "Thai", price: "$$", description: "2708 W. 43rd Street. Elevated Thai cuisine in a warm, intimate space. The curries and noodle dishes are well-executed and the menu goes beyond standard Thai-American fare. A welcome addition to the 43rd & Upton dining scene." }} />
          <PlaceCardComponent place={{ name: "Settergren's Hardware", tag: "Hardware Store", description: "4809 Upton Ave. S. Not food, but essential to understanding Linden Hills. A family-owned, old-school hardware store that has served the neighborhood for decades. In a world of big-box stores, Settergren's survives on expertise, service, and the loyalty of a community that genuinely values independent business." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              Dunn Brothers Coffee on 43rd Street is the neighborhood
              coffee shop — a place to linger with a newspaper or run into
              your neighbors. The Linden Hills Co-op, a member-owned natural
              foods cooperative, anchors the grocery shopping for residents who
              prioritize organic and local sourcing. For conventional groceries,
              Lunds &amp; Byerlys at 43rd and Upton provides the full-service
              upscale grocery experience. Café Latte on W. 43rd is popular for
              bakery items and casual lunch. The neighborhood also supports
              several yoga studios, a pilates studio, and small boutiques selling
              clothing, gifts, and home goods — the kind of curated, owner-operated
              shops that make the district feel like it belongs to a different era
              of retail.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Lakes Near Linden Hills">
        <Prose>
          <p>
            This is the neighborhood&apos;s greatest asset, and it&apos;s not
            close. Linden Hills is bordered by two of the finest urban lakes in
            America, connected by a park system that Frederick Law Olmsted would
            have envied — and that, in fact, was directly influenced by the
            City Beautiful movement that Olmsted helped inspire. Living here
            means living within walking distance of world-class outdoor
            recreation, year-round.
          </p>
        </Prose>

        <ArticleSubsection title="Lake Harriet">
          <Prose>
            <p>
              Lake Harriet borders Linden Hills to the east and south. The
              roughly 3-mile paved loop around the lake accommodates walkers,
              runners, cyclists, and rollerbladers from ice-out in spring to
              freeze-up in fall — and cross-country skiers and fat-tire bikers
              through the winter. Two public beaches offer swimming. Kayak and
              canoe rentals launch from the western shore. The Rose Garden and
              the Bird Sanctuary at the lake&apos;s north end are unexpected
              pockets of beauty. And the Lake Harriet Bandshell — where free
              concerts have been performed since the 1880s — is one of the great
              Minneapolis summer traditions. Bring a blanket, bring wine in a
              travel mug, sit on the lawn. The Minneapolis Pops Orchestra has
              been performing here for more than 75 seasons.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/linden-hills/lake-harriet-bandshell.webp"
            alt="The Lake Harriet Bandshell during a free summer concert viewed from Linden Hills"
            caption="The Bandshell — free concerts at the lake since the 1880s"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Bde Maka Ska">
          <Prose>
            <p>
              Bde Maka Ska — renamed from Lake Calhoun in 2018 to honor its
              original Dakota name, meaning &quot;White Earth Lake&quot; —
              borders Linden Hills to the northeast. It&apos;s the largest lake
              in the Minneapolis Chain of Lakes and arguably the city&apos;s
              most popular recreational water body. The 3.1-mile paved loop is
              one of the busiest trails in the city on summer evenings. Three
              public beaches draw swimmers. Sailboats, paddleboards, and kayaks
              dot the surface from May through September. The Tin Fish
              restaurant on the lake&apos;s east shore is a warm-weather
              institution for casual lakeside dining. The renaming process was
              contentious — legally challenged and debated for years — but the
              Dakota name has held, and most Minneapolis residents have adopted
              it, sometimes shortened to &quot;Bde Maka Ska&quot; or simply
              &quot;the lake.&quot;
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Chain of Lakes & Grand Rounds">
          <Prose>
            <p>
              Lake Harriet and Bde Maka Ska are part of the Minneapolis Chain
              of Lakes — a series of interconnected lakes including Lake of the
              Isles and Cedar Lake, all linked by parkways and trails. Together,
              they form the backbone of the Grand Rounds National Scenic Byway,
              a 51-mile network of parkways and trails that loops through the
              city. From Linden Hills, you can step onto the lake path and ride
              or run continuously for miles — through{" "}
              <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
                Kenwood
              </Link>
              , past Lake of the Isles, through{" "}
              <Link href="/neighborhoods/cedar-isles-dean" className="text-[#2a9d8f] hover:underline">
                Cedar-Isles-Dean
              </Link>
              , and beyond. The Midtown Greenway, a below-grade bike trail built
              on a former rail corridor, connects to the chain of lakes at its
              western terminus near Linden Hills, providing a car-free route
              east across the city to the Mississippi River.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="William Berry Park & Beard's Plaisance">
          <Prose>
            <p>
              William Berry Park occupies the promontory between Lake Harriet
              and Bde Maka Ska, offering some of the best views in the
              Minneapolis park system — you can see both lakes from a single
              vantage point. Beard&apos;s Plaisance, at the north end of Lake
              Harriet, provides tennis courts, picnic areas, and direct access
              to the Harriet-Bde Maka Ska trail connection. These are not
              large destination parks — they&apos;re intimate green spaces
              woven into the lakeside landscape, the kind of place where you
              end up on a walk rather than drive to.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Linden Hills Schools">
        <Prose>
          <p>
            Schools are one of the primary reasons families move to Linden
            Hills, and the public school pipeline here is strong by Minneapolis
            standards — strong enough that it functions as a genuine anchor for
            the neighborhood&apos;s family orientation.
          </p>
          <p>
            The elementary school pipeline runs through two Lake Harriet
            Community School campuses. Students attend Lake Harriet Lower
            Elementary (K–2) before advancing to Lake Harriet Upper Elementary
            (3–5), which earns an A-minus rating from Niche. Middle school is
            Anthony Middle School, rated B by Niche, which feeds several
            Southwest Minneapolis neighborhoods. Southwest Senior High School
            serves Linden Hills for grades 9–12. Southwest is a well-regarded
            International Baccalaureate World School with strong academics and a
            particularly notable performing arts program. It earns an A-minus
            from Niche.
          </p>
          <p>
            Private and independent options accessible from Linden Hills
            include the Blake School (a prestigious K–12 independent school with
            campuses in Hopkins and Minneapolis), Breck School, and the
            Minneapolis network of magnet schools for families seeking
            alternative public pathways. Several Montessori and early childhood
            programs serve the area as well.
          </p>
          <p>
            It&apos;s worth noting that the quality of the school pipeline is
            inseparable from the neighborhood&apos;s economics. The same home
            prices that make Linden Hills beautiful and stable also make it
            accessible primarily to families with significant financial
            resources. The school community reflects that — it is less
            economically and racially diverse than Minneapolis public schools
            as a whole.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Linden Hills Real Estate & Housing">
        <Prose>
          <p>
            Linden Hills is one of the most expensive neighborhoods in
            Minneapolis, and the market here is competitive even by Southwest
            Minneapolis standards. Median home sale prices in 2025 ranged from
            roughly $625,000 to over $850,000, depending on the data source and
            time of year — well above the citywide median of approximately
            $350,000–$375,000. Homes sell quickly: the average time on market
            was approximately 12 days in 2025, according to Redfin data,
            reflecting consistent demand that outstrips supply.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($450,000–$600,000), you&apos;re looking at
              smaller bungalows or cottages, often in need of updating — these
              are increasingly rare as the market pushes upward. The mid-range
              ($650,000–$900,000) gets you a well-maintained three- or
              four-bedroom home from the 1910s–1930s: Craftsman bungalows,
              Colonial Revivals, stucco two-stories with original woodwork and
              updated kitchens. Above $1 million — and this is a growing segment
              of the market — you&apos;re looking at larger renovated historic
              homes, new construction on teardown lots, or anything with lake
              proximity.
            </p>
            <p>
              The dominant housing stock dates from the 1910s through the 1930s,
              with the Craftsman bungalow as the neighborhood&apos;s signature
              style. Stucco two-stories, Tudor cottages, and Colonial Revivals
              are also common. Lot sizes are moderate — this is a city
              neighborhood, not a suburb — but mature trees and deep setbacks
              give many homes a more spacious feel than their footprints suggest.
              Most properties are owner-occupied single-family homes, with some
              duplexes and a small number of apartment buildings along the
              commercial corridors.
            </p>
          </Prose>
        </ArticleSubsection>

        <ImageSlot
          src="/images/neighborhoods/linden-hills/residential-street.webp"
          alt="Tree-lined residential street in Linden Hills with Craftsman bungalows and mature elms"
          caption="The 1920s Craftsman bungalow — Linden Hills' signature home style"
        />

        <ArticleSubsection title="The Teardown Tension">
          <Prose>
            <p>
              As in neighboring{" "}
              <Link href="/neighborhoods/fulton" className="text-[#2a9d8f] hover:underline">
                Fulton
              </Link>
              , the teardown question looms large in Linden Hills. Rising land
              values make older, smaller homes on desirable lots attractive
              targets for demolition and replacement with larger, more
              contemporary construction. Long-term residents mourn the loss of
              the neighborhood&apos;s architectural scale and consistency.
              Newer construction — often boxy, often maximizing square footage —
              can feel out of proportion with the Craftsman cottages on either
              side. The neighborhood has grappled with this through zoning
              discussions and design guidelines, but the market pressure is
              relentless. Every teardown is a small argument about what Linden
              Hills is and what it should become.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Linden Hills">
        <Prose>
          <p>
            Linden Hills is one of the more walkable and bikeable neighborhoods
            in Minneapolis — and Minneapolis is already one of the most bikeable
            cities in the country. The Walk Score of 78 reflects strong
            pedestrian access to the commercial district, the lakes, and daily
            amenities. The Bike Score of 90 is exceptional, driven by the lake
            trails, the Midtown Greenway, and a network of on-street bike
            lanes that connect the neighborhood to the broader city.
          </p>
          <p>
            Within Linden Hills, a car is optional for daily life. The 43rd and
            Upton commercial district handles most shopping and dining needs.
            Both lakes are accessible on foot or bike from any address in the
            neighborhood. The Linden Hills Co-op and Lunds &amp; Byerlys
            provide grocery shopping without leaving the neighborhood.
          </p>
          <p>
            For getting beyond Linden Hills, the picture is more car-dependent.
            Downtown Minneapolis is 15–20 minutes by car. MSP International
            Airport is roughly 20 minutes via Highway 62 or I-35W. Metro
            Transit bus routes along France Avenue and on Lake Street (via the
            Greenway connection) provide service to Uptown and downtown, though
            frequency is modest compared to the city&apos;s highest-ridership
            corridors. Most residents still own and use cars for commuting, but
            the neighborhood&apos;s internal walkability means that car trips
            for everyday errands are genuinely optional — something that
            can&apos;t be said of every Minneapolis neighborhood.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Linden Hills is not a neighborhood in distress, but it is a
            neighborhood with contradictions it hasn&apos;t fully resolved —
            and honesty requires naming them.
          </p>
        </Prose>

        <ArticleSubsection title="Affordability & Who Gets to Live Here">
          <Prose>
            <p>
              The most fundamental tension in Linden Hills is the one between
              its progressive self-image and its economic reality. This is a
              neighborhood where yard signs proclaim inclusivity and equity,
              and where median home prices make the neighborhood inaccessible
              to the vast majority of Minneapolis residents. The demographics
              are stark: Linden Hills is overwhelmingly white (approximately
              85–90% white, non-Hispanic), overwhelmingly homeowning, and
              significantly wealthier than the city as a whole. The
              neighborhood&apos;s desirability — built on lakes, schools, safety,
              and walkability — has priced out almost everyone who doesn&apos;t
              arrive with significant wealth or equity from a previous home.
              This is not unique to Linden Hills, but it&apos;s more visible
              here because of the gap between the neighborhood&apos;s stated
              values and its actual composition.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Bde Maka Ska Name Controversy">
          <Prose>
            <p>
              The 2018 renaming of Lake Calhoun to Bde Maka Ska — restoring the
              Dakota name and removing the name of John C. Calhoun, a 19th-century
              vice president and fierce defender of slavery — was one of the most
              contentious civic debates in recent Minneapolis history. The process
              drew legal challenges that went to the Minnesota Supreme Court
              before the Dakota name was upheld. In Linden Hills, reaction was
              mixed: many residents supported the change as an overdue act of
              justice, while others objected to the process, the perceived
              erasure of the name they&apos;d known for decades, or the legal
              mechanisms used. The controversy has largely settled, but it
              revealed fissures in the neighborhood&apos;s self-understanding —
              between those who see honoring Indigenous history as essential and
              those who experienced the change as imposed.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development Pressure & Neighborhood Character">
          <Prose>
            <p>
              Beyond individual teardowns, Linden Hills faces broader development
              pressure. Proposals for increased density — duplexes, triplexes,
              small apartment buildings — trigger debates about preserving the
              neighborhood&apos;s single-family residential character versus
              creating more housing in a city that needs it. Minneapolis&apos;s
              2040 Comprehensive Plan, which eliminated single-family-only zoning
              citywide, has been a particular flashpoint. Many Linden Hills
              residents supported the plan&apos;s goals in principle but had
              reservations about its impact on their specific streets. This
              tension — between citywide housing needs and neighborhood-scale
              preservation — is not resolved, and it plays out in every planning
              meeting and every new construction permit.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Property Crime & the Policing Question">
          <Prose>
            <p>
              Like much of Southwest Minneapolis, Linden Hills has seen an
              increase in property crime in recent years — car break-ins,
              catalytic converter theft, package theft, and occasional garage
              burglaries. Violent crime remains rare. But the property crime
              trend, combined with the broader Minneapolis debate about policing
              following the murder of George Floyd in 2020, has created unease.
              Some residents want more visible police presence; others want
              continued investment in alternative public safety models. The
              neighborhood&apos;s strong block club culture and mutual-aid
              networks provide a layer of informal safety, but the conversation
              about what public safety should look like in Minneapolis is
              ongoing, and Linden Hills is part of it.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Small Business Vulnerability">
          <Prose>
            <p>
              The independent commercial district at 43rd and Upton — the
              neighborhood&apos;s crown jewel — is not immune to the pressures
              facing small retail everywhere. Rising rents, changing consumer
              habits, and the dominance of online shopping make it increasingly
              difficult for small, independent businesses to survive. Linden
              Hills has lost some long-time businesses in recent years, and each
              closure is felt as a community loss. The neighborhood&apos;s
              culture of shopping local provides some insulation, but it&apos;s
              not a guarantee. Supporting these businesses requires intentional
              choices — the kind that Linden Hills residents tend to make, but
              that economic forces can override.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Linden Hills FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
