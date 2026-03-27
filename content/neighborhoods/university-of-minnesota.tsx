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
    title: "University of Minnesota, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about the University of Minnesota neighborhood in Minneapolis — campus life, Stadium Village, Dinkytown-adjacent, the Green Line, research institutions, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "University of Minnesota",
  deck: "Fifty thousand students, a Big Ten campus that spans the Mississippi, Stadium Village's game-day energy, the Green Line humming through it all — this is not a neighborhood in the conventional sense, but it shapes Minneapolis more than most that are.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is the University of Minnesota Neighborhood?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in the University Area" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools & the University" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "University of Minnesota, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~5,000", label: "Permanent residents (US Census / ACS estimates)" },
      { value: "51,000+", label: "University enrollment (Twin Cities campus)" },
      { value: "$1,200–$1,800", label: "Typical 1BR apartment rent (2025)" },
      { value: "85", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
      { value: "80", label: "Transit Score" },
      { value: "95%+", label: "Renter-occupied housing" },
      { value: "1851", label: "Year the University of Minnesota was chartered" },
    ],
  },
  faq: [
    {
      question: "Is the University of Minnesota neighborhood good for non-students?",
      answer:
        "The University of Minnesota neighborhood is overwhelmingly oriented toward students and university staff. Non-student residents exist but are a small minority. If you are not affiliated with the university, you may find the neighborhood&apos;s seasonal rhythms (empty in summer, crowded during the academic year), the student-heavy demographics, and the institutional character less appealing than adjacent neighborhoods like Prospect Park, Marcy-Holmes, or Cedar-Riverside, which offer more diverse community compositions while still being close to campus.",
    },
    {
      question: "Is the University area safe?",
      answer:
        "Safety on and around the University of Minnesota campus is a nuanced topic. The university maintains its own police department (UMPD), which patrols the campus and surrounding area. Property crime — bike theft, car break-ins, package theft — is common in any high-density student area. More serious crimes, including assault and robbery, occur periodically, particularly in transitional areas between campus and surrounding neighborhoods, along the Green Line corridor, and in isolated areas late at night. The university publishes a Clery Act report annually with crime statistics. Standard urban precautions apply, and awareness of surroundings is important, particularly after dark.",
    },
    {
      question: "What is Stadium Village?",
      answer:
        "Stadium Village is the commercial district along Washington Avenue SE near Huntington Bank Stadium (the university&apos;s football venue). The area features restaurants, bars, shops, and student-oriented businesses that serve the campus community. On game days — particularly football Saturdays in fall — Stadium Village transforms into a massive tailgating and entertainment zone. Between games, it functions as a student commercial district with a mix of fast-casual restaurants, coffee shops, and services.",
    },
    {
      question: "What is the difference between the East Bank and West Bank?",
      answer:
        "The University of Minnesota&apos;s Minneapolis campus is divided by the Mississippi River. The East Bank is the larger section, containing most of the academic buildings, libraries, dormitories, Huntington Bank Stadium, and the main campus mall. The West Bank, across the river in the Cedar-Riverside neighborhood, houses the Carlson School of Management, the Humphrey School of Public Affairs, the Law School, and several liberal arts departments. The two banks are connected by the Washington Avenue Bridge, which carries both pedestrian/bicycle traffic and the Green Line light rail.",
    },
    {
      question: "Is Dinkytown part of the University neighborhood?",
      answer:
        "Dinkytown is technically part of the Marcy-Holmes neighborhood, not the University of Minnesota neighborhood. However, it functions as an extension of campus and is deeply connected to university life. The commercial district along 4th Street SE — with its bookstores, restaurants, bars, and shops — has served U of M students for over a century. The distinction is administrative rather than experiential; for practical purposes, Dinkytown and the campus are intertwined.",
    },
    {
      question: "How much does it cost to live near the University of Minnesota?",
      answer:
        "The University area is a renter&apos;s market. One-bedroom apartments typically range from $1,200 to $1,800 per month, with newer student-oriented buildings at the higher end. University dormitory rates vary by room type and meal plan. The area around Stadium Village and along the Green Line corridor has seen significant new apartment construction, most of it targeting students with per-bedroom pricing models. Buying property in the neighborhood is uncommon for non-investors — the housing stock is overwhelmingly rental, and the few owner-occupied properties tend to be investor-owned multi-family buildings.",
    },
    {
      question: "Where exactly is the University of Minnesota neighborhood?",
      answer:
        "The University of Minnesota neighborhood encompasses the main campus of the University of Minnesota-Twin Cities on the east bank of the Mississippi River. It is bounded roughly by the river to the south and west, the rail corridor to the north, and the residential neighborhoods of Prospect Park and Marcy-Holmes to the east and south. The West Bank campus, while part of the university, falls within the Cedar-Riverside neighborhood boundaries.",
    },
    {
      question: "What is the Green Line?",
      answer:
        "The Green Line is the Metro Transit light rail line that connects downtown Minneapolis to downtown St. Paul, running through the University of Minnesota campus along Washington Avenue. The line has multiple stops on campus — West Bank, East Bank, and Stadium Village — making it the primary transit connection for students and staff. The Green Line opened in 2014 and has significantly improved transit access for the university community, providing direct connections to both downtowns and the neighborhoods along University Avenue in St. Paul.",
    },
    {
      question: "What happens to the neighborhood in summer?",
      answer:
        "The University of Minnesota neighborhood undergoes a dramatic seasonal shift. During the academic year (September through May), the area is crowded, energetic, and noisy — tens of thousands of students move through the campus daily. In summer, enrollment drops significantly, many students leave, and the neighborhood becomes noticeably quieter. Businesses in Stadium Village and the surrounding commercial areas see reduced traffic. Summer session maintains some activity, but the difference between a September Wednesday and a June Wednesday is stark.",
    },
    {
      question: "Can you tailgate at Huntington Bank Stadium?",
      answer:
        "Yes. Tailgating is a major tradition at Gopher football games, with designated areas around Huntington Bank Stadium and in nearby parking lots filling hours before kickoff. The Stadium Village commercial district contributes to the game-day atmosphere with bars and restaurants that cater to the pre- and post-game crowd. The tailgating culture is significant — on a home football Saturday, the area around the stadium hosts tens of thousands of people, and the energy is palpable blocks away.",
    },
  ],
  nearby: [
    { name: "Marcy-Holmes", slug: "marcy-holmes", description: "Dinkytown and the east bank of campus" },
    { name: "Prospect Park", slug: "prospect-park-east-river-road", description: "The Witch&apos;s Hat tower and Green Line corridor" },
    { name: "Cedar-Riverside", slug: "cedar-riverside", description: "The West Bank — Little Mogadishu and counterculture" },
    { name: "Como", slug: "como", description: "Residential Southeast with neighborhood identity" },
    { name: "Seward", slug: "seward", description: "Co-op culture and Mississippi River access" },
  ],
  closing: {
    title: "What the University of Minnesota Means to Minneapolis",
    paragraphs: [
      "The University of Minnesota is not just a neighborhood — it is an institution that shapes the entire city. Fifty thousand students cycle through the campus every year, bringing energy, ideas, economic activity, and the particular chaos of young adulthood to a stretch of the Mississippi that has been a center of education since before Minnesota was a state. The research labs produce breakthroughs that make national news. The athletic programs fill stadiums and dominate sports pages. The graduates stay and build careers, or they leave and carry Minneapolis with them. No other single institution has a comparable impact on the city&apos;s identity, economy, and self-image.",
      "As a place to live, the University neighborhood is not for everyone — it is loud, transient, institutionally dominated, and oriented around a population that is, by definition, passing through. But for the four or five years that students are here, it is formative in ways that are difficult to overstate. The friendships made in a cramped apartment off Washington Avenue, the late-night study sessions in Walter Library, the first time seeing the Mississippi from the Washington Avenue Bridge in October — these are experiences that attach to place, and the place is this one. Minneapolis did not build the University of Minnesota; in many ways, the University of Minnesota built Minneapolis.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On a Saturday in October, the light rail pulls into the Stadium
          Village station and disgorges a crowd wearing maroon and gold.
          Huntington Bank Stadium rises ahead — 50,000 seats, a roofline
          that catches the autumn sun, and the faint sound of the marching
          band warming up inside. The sidewalks along Washington Avenue are
          a river of people: alumni in letter jackets that haven&apos;t fit
          right since the nineties, students in oversized jerseys carrying
          tallboys in koozies, families with kids on shoulders, all of them
          moving toward the stadium with the gravitational pull that college
          football exerts on a Big Ten campus. Two blocks away, a graduate
          student in a lab coat is crossing the street to the Molecular and
          Cellular Biology building, utterly indifferent to the spectacle.
          Both of these things are the University of Minnesota. Both are
          happening at the same time.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/university-of-minnesota/hero.webp"
        alt="University of Minnesota campus on the east bank of the Mississippi River in Minneapolis"
        caption="The University of Minnesota — a Big Ten campus that spans the Mississippi and shapes the city"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is the University of Minnesota Neighborhood, Minneapolis?">
        <Prose>
          <p>
            The University of Minnesota neighborhood is, first and foremost,
            a campus — the main campus of the University of Minnesota-Twin
            Cities, one of the largest public research universities in the
            country, with an enrollment exceeding 51,000 students and a
            physical plant that occupies a significant portion of
            Minneapolis&apos;s east bank riverfront. As a city-designated
            neighborhood, it encompasses the campus itself and the
            immediately surrounding blocks, creating a district that is
            more institutional than residential, more transient than
            settled, and more defined by the rhythms of the academic
            calendar than by the patterns of permanent community life.
          </p>
          <p>
            The neighborhood straddles the Mississippi River — the East Bank
            holds most of the academic buildings, dormitories, libraries,
            and Huntington Bank Stadium, while the West Bank (technically
            within{" "}
            <Link href="/neighborhoods/cedar-riverside" className="text-[#2a9d8f] hover:underline">
              Cedar-Riverside
            </Link>
            ) houses the Carlson School of Management, the Law School, and
            other professional programs. The Washington Avenue Bridge
            connects the two banks and carries the Green Line light rail,
            making it one of the most trafficked pedestrian and transit
            corridors in the state.
          </p>
          <p>
            Roughly 5,000 permanent residents live within the neighborhood
            boundaries, but the daily population during the academic year
            is many times that, as students, faculty, staff, and visitors
            move through the campus. This creates a neighborhood that is
            extraordinarily dense and active from September to May and
            noticeably quieter in summer — a seasonal oscillation that
            defines every aspect of life here, from restaurant traffic to
            parking availability to the ambient noise level on a Wednesday
            night.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="University of Minnesota Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/university-of-minnesota/neighborhood-sign.webp"
          alt="University of Minnesota neighborhood sign in Minneapolis"
          caption="The University of Minnesota neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="University of Minnesota History & Origins">
        <Prose>
          <p>
            Before European settlement, the land that is now the University
            of Minnesota campus was part of the homeland of the Dakota people.
            The Mississippi River corridor here — between St. Anthony Falls
            and the river gorge — was a landscape of bluffs, hardwood forest,
            and river bottomland that held deep significance for the
            Mdewakanton Dakota. The river itself was a highway, a food source,
            and a spiritual presence.
          </p>
          <p>
            The University of Minnesota was chartered in 1851, seven years
            before Minnesota became a state — making the university older
            than the state it serves. The original campus was established
            on a knoll overlooking the Mississippi, on the east bank near
            what is now the Knoll area. Early construction was modest, and
            the university nearly closed during the Civil War before being
            reorganized and refunded in the 1860s under a new charter that
            established it as the state&apos;s land-grant institution.
          </p>
          <p>
            Growth through the late 19th and early 20th centuries
            transformed the campus from a small collection of buildings
            into a major research university. The Mall — the central green
            space on the East Bank, anchored by Northrop Auditorium — was
            designed in the Beaux-Arts tradition and became the campus&apos;s
            architectural signature. Buildings from this era, including
            Walter Library, Folwell Hall, and Pillsbury Hall, established
            the collegiate aesthetic that persists alongside later modernist
            and contemporary additions.
          </p>
          <p>
            The West Bank campus was developed in the 1960s and 1970s as
            the university expanded across the river into the Cedar-Riverside
            neighborhood, claiming residential blocks for academic buildings
            and parking structures. This expansion was controversial —
            it displaced residents and businesses and contributed to the
            disruption of Cedar-Riverside&apos;s pre-existing community.
            The architectural style of the West Bank campus is firmly
            Brutalist, a stark contrast to the East Bank&apos;s older
            buildings.
          </p>
          <p>
            Huntington Bank Stadium (originally TCF Bank Stadium) opened in
            2009, bringing Gopher football back to campus after three decades
            at the Metrodome. The stadium&apos;s construction catalyzed the
            development of Stadium Village into a modern commercial district
            and marked a significant reinvestment in the campus&apos;s
            physical relationship to the surrounding city.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in the University Area">
        <Prose>
          <p>
            Living in the University of Minnesota neighborhood means living
            inside an institution. The campus is the neighborhood — its
            buildings, its grounds, its schedule, its population are the
            defining features of daily life. This is not a neighborhood
            where you retreat from the city into residential calm. This is
            a neighborhood where the city is a university, and the
            university is everything.
          </p>
          <p>
            For students — who constitute the vast majority of the
            neighborhood&apos;s population — this is the point. The proximity
            to classes, libraries, labs, and social life is the entire
            proposition. The apartment complexes along Washington Avenue
            and University Avenue are purpose-built for student living:
            furnished units, per-bedroom leases, study lounges, rooftop
            decks, and the kind of amenities (pools, fitness centers, game
            rooms) that appeal to twenty-year-olds and mystify everyone else.
          </p>
          <p>
            For the small number of non-student permanent residents, life
            in the University neighborhood requires a tolerance for noise,
            transience, and the particular energy of a college campus. The
            neighborhood is loud on weekend nights. Parking is challenging
            during the school year. The commercial options are heavily
            skewed toward student tastes and budgets. But the transit access
            is excellent, the cultural offerings of a major research
            university (lectures, performances, museums, sporting events)
            are available daily, and the cost of living is reasonable by
            central Minneapolis standards.
          </p>
          <p>
            Adjacent neighborhoods offer the residential stability that the
            University area lacks.{" "}
            <Link href="/neighborhoods/prospect-park-east-river-road" className="text-[#2a9d8f] hover:underline">
              Prospect Park
            </Link>{" "}
            to the east provides a genuine residential community with strong
            neighborhood identity.{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy-Holmes
            </Link>{" "}
            to the north includes Dinkytown, which functions as an extension
            of campus culture. These neighborhoods absorb much of the
            student overflow and provide the housing diversity that the
            campus core does not.
          </p>
        </Prose>
        <Quote
          text="I lived in Stadium Village for two years and I loved every minute of it. I also would never do it again. It was perfect for twenty-two. It would be insane at thirty-five."
          cite="University of Minnesota graduate, class of 2021"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="University of Minnesota Food, Drink & Local Spots">
        <Prose>
          <p>
            The food and drink scene around the University of Minnesota is
            calibrated to serve a population of 50,000 students and the
            staff and faculty who work alongside them. This means an
            abundance of fast-casual options, a concentration of chain and
            local restaurants in Stadium Village, and a bar scene that peaks
            on Thursday through Saturday nights during the academic year.
            The quality varies — some places have been feeding students for
            decades with genuine craft, while others exist solely because of
            proximity and foot traffic.
          </p>
        </Prose>

        <ArticleSubsection title="Stadium Village">
          <PlaceCardComponent place={{ name: "Annie&apos;s Parlour", tag: "Burgers / Shakes", price: "$", description: "Dinkytown location at 313 14th Ave. SE. Annie&apos;s has been serving burgers and malts to University of Minnesota students since the 1940s. The malts are thick enough to hold a spoon upright — this is not a figure of speech — and the burgers are the kind of unpretentious, well-executed diner food that chains spend millions trying to replicate. The Dinkytown location is technically in Marcy-Holmes, but it is as much a part of campus culture as any building the university owns." }} />
          <PlaceCardComponent place={{ name: "Stadium Village Commercial District", tag: "Various", price: "$–$$", description: "Washington Avenue SE between the stadium and Oak Street. The district offers a dense concentration of restaurants, cafes, and bars serving the campus community. Options range from pho to pizza to burritos to Korean barbecue, with most places priced for student budgets. The quality floor is higher than you might expect — competition among this many restaurants in this small an area forces a baseline competence. The quality ceiling is also present in a few places that transcend the student-dining category." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Dinkytown (Technically Marcy-Holmes)">
          <Prose>
            <p>
              Dinkytown — the commercial district along 4th Street SE,
              technically in{" "}
              <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
                Marcy-Holmes
              </Link>{" "}
              but functionally part of campus life — offers additional dining,
              drinking, and shopping options. The district has served U of M
              students for over a century and has a character distinct from
              Stadium Village: more independent businesses, more late-night
              options, and a grittier, less corporate feel. Al&apos;s Breakfast,
              a 14-seat diner that has been serving eggs and pancakes since
              1950, is a Minneapolis institution.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Campus Dining">
          <Prose>
            <p>
              The university operates dining facilities across campus,
              ranging from dining halls in the dormitories to food courts
              and cafes in academic buildings. Coffman Memorial Union, the
              main student union on the East Bank, houses multiple food
              vendors and serves as a social hub. The quality of campus
              dining has improved significantly in recent years, with the
              university investing in variety, sustainability, and options
              that go beyond the traditional institutional model.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors Near the University of Minnesota">
        <Prose>
          <p>
            The University of Minnesota campus provides substantial green
            space and outdoor access within its boundaries, supplemented
            by the Mississippi River corridor that defines the campus&apos;s
            western and southern edges.
          </p>
        </Prose>

        <ArticleSubsection title="The Mall & Campus Green Spaces">
          <Prose>
            <p>
              The Mall — the Beaux-Arts central green space stretching from
              Northrop Auditorium toward the river — is the campus&apos;s
              primary outdoor gathering space. On warm days during the
              academic year, it fills with students studying, throwing
              frisbees, and engaging in the organized optimism of student
              organizations tabling for causes. The Mall is technically not
              a park, but it functions as one of the best urban green spaces
              in Minneapolis. Other campus green spaces — the Knoll area,
              the Scholars Walk, various plazas and courtyards — contribute
              to a surprisingly verdant campus given its urban setting.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Mississippi River">
          <Prose>
            <p>
              The Mississippi River gorge along the campus&apos;s western
              edge provides dramatic natural scenery and trail access. The
              river trail system connects the campus to the Stone Arch
              Bridge, Minnehaha Falls, and the broader Grand Rounds network.
              The Washington Avenue Bridge offers one of the most striking
              river crossings in the city — walking or biking across in
              October, with the gorge canopy in full color below, is one
              of those experiences that justifies attending a university
              in Minnesota despite the climate.
            </p>
          </Prose>

          <ImageSlot
            src="/images/neighborhoods/university-of-minnesota/mississippi-river.webp"
            alt="Mississippi River gorge viewed from the University of Minnesota campus in fall"
            caption="The Mississippi River gorge from campus — a reminder that this university sits on one of America's great rivers"
          />
        </ArticleSubsection>

        <ArticleSubsection title="Weisman Art Museum">
          <Prose>
            <p>
              The Frederick R. Weisman Art Museum, designed by Frank Gehry
              and perched on a bluff overlooking the river, is both a
              cultural institution and an outdoor landmark. Its stainless
              steel exterior — a cascade of reflective surfaces that change
              character with the light and weather — is one of the most
              photographed structures in Minneapolis. The museum&apos;s
              collection and programming are excellent, but even from
              outside, the building is a piece of public art that
              contributes to the campus&apos;s visual identity.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Schools & the University">
        <Prose>
          <p>
            The University of Minnesota-Twin Cities is the defining
            educational institution of this neighborhood — and one of
            the defining institutions of the state. With enrollment
            exceeding 51,000 students, it is one of the largest public
            universities in the country, offering programs across every
            major academic and professional discipline. The Carlson School
            of Management, the Medical School, the College of Science and
            Engineering, the Law School, and the Humphrey School of Public
            Affairs are among its most prominent programs.
          </p>
          <p>
            Research is a core mission. The University of Minnesota is a
            member of the Association of American Universities and ranks
            among the top public research institutions in the country.
            Annual research expenditures exceed $1 billion, funding work
            in medicine, agriculture, engineering, and the sciences that
            has global impact. The research enterprise is also the
            neighborhood&apos;s largest employer, supporting thousands
            of faculty, staff, and graduate students.
          </p>
          <p>
            K-12 education is not a significant factor in this neighborhood,
            as the permanent residential population is small and
            overwhelmingly composed of adults. The few families with
            school-age children use Minneapolis Public Schools options in
            adjacent neighborhoods, primarily in{" "}
            <Link href="/neighborhoods/prospect-park-east-river-road" className="text-[#2a9d8f] hover:underline">
              Prospect Park
            </Link>{" "}
            and{" "}
            <Link href="/neighborhoods/marcy-holmes" className="text-[#2a9d8f] hover:underline">
              Marcy-Holmes
            </Link>
            . The University also operates a child development center that
            serves the children of students and staff.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="University of Minnesota Real Estate & Housing">
        <Prose>
          <p>
            The housing market in the University of Minnesota neighborhood
            is dominated by the rental market, with over 95 percent of
            units renter-occupied. This is a student housing market, and
            it operates by different rules than the rest of Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="Student Housing">
          <Prose>
            <p>
              University dormitories house a significant portion of
              first-year students, with residence halls offering traditional
              dorm rooms, suite-style living, and apartment-style units.
              Beyond the dorms, private student housing has proliferated
              along Washington Avenue and University Avenue — large,
              purpose-built apartment complexes with per-bedroom leases,
              furnished units, and amenity packages designed to attract
              students. Rents for one-bedroom units range from $1,200 to
              $1,800 per month, with per-bedroom pricing in shared
              apartments often falling in the $800 to $1,200 range.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Investment Market">
          <Prose>
            <p>
              The University area is an active market for real estate
              investors. Multi-family properties near campus generate
              consistent rental income from the university&apos;s steady
              enrollment. National student housing developers have built
              several large complexes in the past decade, and local
              investors own portfolios of smaller properties — duplexes,
              triplexes, and small apartment buildings — throughout the
              surrounding streets. Owner-occupancy is rare and primarily
              limited to university employees who choose to live near
              their workplace.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="New Construction">
          <Prose>
            <p>
              The Green Line corridor and Stadium Village have attracted
              significant new construction, much of it student-oriented
              apartment buildings with ground-floor retail. These
              developments have added density and commercial activity to
              the area but have also raised concerns about affordability,
              as new buildings often price above the older housing stock.
              The result is a two-tier market: newer, amenity-rich
              buildings at premium prices and older, less polished buildings
              at lower rents, with students sorting between them based on
              budget and preference.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      <ImageSlot
        src="/images/neighborhoods/university-of-minnesota/stadium-village.webp"
        alt="Stadium Village commercial district near the University of Minnesota campus, Minneapolis"
        caption="Stadium Village — the commercial heart of campus life, transformed on football Saturdays"
      />

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around the University of Minnesota">
        <Prose>
          <p>
            The University of Minnesota neighborhood has among the best
            transit access in Minneapolis, anchored by the Green Line light
            rail, which runs through campus along Washington Avenue with
            stops at West Bank, East Bank, and Stadium Village. The Green
            Line provides direct connections to downtown Minneapolis (10
            minutes), downtown St. Paul (25 minutes), and the neighborhoods
            along University Avenue. The Blue Line is accessible via
            transfer at downtown stations, connecting to MSP Airport and
            the Mall of America.
          </p>
          <p>
            Bus service supplements the light rail, with multiple Metro
            Transit routes serving the campus area. The university also
            operates its own campus connector bus system, providing free
            service between the East Bank, West Bank, and St. Paul campus.
            The Transit Score of 80 is among the highest in Minneapolis,
            reflecting the convergence of rail, bus, and campus transit in
            a compact area.
          </p>
          <p>
            Biking is excellent, with a Bike Score of 90 reflecting the
            campus&apos;s bike infrastructure, the river trails, and the
            flat-to-moderate terrain. The university provides bike parking,
            repair stations, and connections to the city&apos;s bike network.
            Walking is the primary mode for on-campus trips, with the
            compact campus core accessible on foot within 15 to 20 minutes.
          </p>
          <p>
            Driving is the least practical mode in the University area.
            Parking is expensive, limited, and heavily regulated. The
            university operates parking ramps and surface lots, but
            competition for spaces is intense during the academic year.
            Most students and staff who live nearby find that transit,
            biking, or walking is faster and cheaper than driving and
            parking. For trips outside the campus area, the freeway
            system (I-35W, I-94) is accessible within minutes.
          </p>
        </Prose>
      </ArticleSection>

      {/* What's Changing */}
      <ArticleSection id="tensions" title="What&apos;s Changing at the University of Minnesota">
        <Prose>
          <p>
            The University of Minnesota neighborhood is shaped by
            institutional decisions more than market forces. The university&apos;s
            master plan, enrollment trends, research funding, and capital
            investment priorities drive the physical and demographic
            evolution of the area in ways that are more planned (if not
            always more predictable) than the organic development patterns
            of other neighborhoods.
          </p>
          <p>
            The Green Line&apos;s impact continues to unfold. The light
            rail has catalyzed development along Washington Avenue and
            Stadium Village, bringing new apartment buildings, commercial
            spaces, and pedestrian traffic to corridors that were
            previously dominated by parking lots and institutional
            buildings. This densification is generally positive — it
            adds life and amenities to the campus area — but it also
            raises questions about the balance between student housing
            and other uses, the affordability of new construction, and
            the impact on adjacent residential neighborhoods.
          </p>
          <p>
            The university&apos;s relationship with its surrounding
            neighborhoods remains a live issue. Expansion over the decades
            has displaced residents and businesses, particularly in
            Cedar-Riverside and Marcy-Holmes. Current university planning
            emphasizes a more collaborative approach, but the institution&apos;s
            size and resource base create an inherent power imbalance that
            neighborhoods navigate carefully. How the university grows —
            and whether that growth serves the broader community or only
            the institution — is a defining question for the neighborhoods
            that share its borders.
          </p>
        </Prose>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="University of Minnesota FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection
        title={data.closing.title}
        paragraphs={data.closing.paragraphs}
      />
    </>
  );
}

const guide: NeighborhoodGuide = {
  data,
  Content,
};

export default guide;
