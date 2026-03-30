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
    title: "West Maka Ska, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about West Maka Ska, Minneapolis — west of Bde Maka Ska, upscale residential streets, Chain of Lakes access, schools, housing, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "West Maka Ska",
  deck: "The quiet side of the busiest lake in Minneapolis — where tree-lined residential streets slope gently toward Bde Maka Ska's western shore, and the neighborhood's greatest luxury is being close to everything while feeling far from the noise.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is West Maka Ska?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in West Maka Ska" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Lakes" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "West Maka Ska, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,800", label: "Residents (Niche / US Census)" },
      { value: "$550K–$800K", label: "Median home sale price range (2025 data)" },
      { value: "12 days", label: "Average time on market (Redfin, 2025)" },
      { value: "2 lakes", label: "Bde Maka Ska & Lake Harriet nearby" },
      { value: "1910s–30s", label: "Era most homes were built" },
      { value: "15 min", label: "Drive to downtown Minneapolis" },
      { value: "70", label: "Walk Score" },
      { value: "90", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is West Maka Ska a good neighborhood in Minneapolis?",
      answer:
        "Yes — West Maka Ska (sometimes called West Calhoun by long-time residents) is one of the most desirable neighborhoods in Southwest Minneapolis. It offers proximity to Bde Maka Ska and Lake Harriet, beautiful housing stock, strong schools, and a quiet residential character that feels insulated from the busier lakeside neighborhoods to the east and north.",
    },
    {
      question: "Is West Maka Ska, Minneapolis safe?",
      answer:
        "West Maka Ska is one of the safer neighborhoods in Minneapolis. Violent crime is very rare. Property crime — primarily vehicle break-ins, particularly near the lake during summer months — occurs at low rates. The residential streets are quiet, well-lit, and generally feel secure at all hours.",
    },
    {
      question: "What is the difference between West Maka Ska and East Bde Maka Ska?",
      answer:
        "West Maka Ska is on the western side of Bde Maka Ska and has a quieter, more purely residential character. East Bde Maka Ska is on the eastern side, closer to Uptown and Hennepin Avenue, with more commercial activity, more apartment density, and a more urban feel. West Maka Ska tends to have larger homes, larger lots, and a family-oriented atmosphere, while East Bde Maka Ska attracts a younger, more urban demographic.",
    },
    {
      question: "How much do homes cost in West Maka Ska, Minneapolis?",
      answer:
        "Median home sale prices in 2025 ranged from approximately $550,000 to $800,000. Smaller homes or those farther from the lake can occasionally be found in the $425,000–$550,000 range. Lakefront or near-lakefront properties regularly exceed $1 million. West Maka Ska is among the more expensive neighborhoods in Minneapolis, though generally less costly than the lakefront blocks in Kenwood.",
    },
    {
      question: "Is West Maka Ska walkable?",
      answer:
        "Moderately. West Maka Ska has a Walk Score of 70, reflecting good access to the lake and parks but limited walkable commercial options. The neighborhood has no significant commercial district of its own — residents typically drive or bike to Linden Hills, Uptown, or the France Avenue corridor for shopping and dining. The Bike Score of 90 is excellent, driven by the lake trails and Midtown Greenway access.",
    },
    {
      question: "What schools serve West Maka Ska, Minneapolis?",
      answer:
        "West Maka Ska is served by Lake Harriet Lower Elementary (K–2) and Lake Harriet Upper Elementary (3–5) — the same strong pipeline that serves Linden Hills and East Harriet. Middle school is Anthony Middle School, and the high school is Southwest Senior High, an International Baccalaureate World School.",
    },
    {
      question: "Where exactly is West Maka Ska in Minneapolis?",
      answer:
        "West Maka Ska is in Southwest Minneapolis, bounded roughly by West 31st Street and Cedar-Isles-Dean to the north, Bde Maka Ska Parkway and the lake to the east, West 36th Street and the Midtown Greenway to the south, and France Avenue South to the west. It borders Cedar - Isles - Dean to the north, East Bde Maka Ska (across the lake) to the east, Linden Hills to the south, and the suburb of St. Louis Park to the west.",
    },
    {
      question: "Why is the neighborhood called West Maka Ska?",
      answer:
        "The neighborhood takes its name from its position on the western shore of Bde Maka Ska (formerly Lake Calhoun). When the lake was renamed from Lake Calhoun to Bde Maka Ska in 2018 — restoring its original Dakota name — the neighborhood name shifted accordingly. Some residents and real estate listings still use 'West Calhoun,' but the official neighborhood name reflects the lake's restored Dakota name.",
    },
    {
      question: "Is West Maka Ska a good place to raise a family?",
      answer:
        "West Maka Ska is an excellent family neighborhood. The Lake Harriet school pipeline is strong, the streets are safe and quiet, and the lake provides year-round outdoor recreation. The neighborhood's residential character and family orientation make it particularly appealing to households with children, though the cost of entry is significant.",
    },
  ],
  nearby: [
    { name: "Linden Hills", slug: "linden-hills", description: "Boutique shopping and Lake Harriet" },
    { name: "Cedar - Isles - Dean", slug: "cedar-isles-dean", description: "Cedar Lake and the Kenilworth Trail" },
    { name: "East Bde Maka Ska", slug: "east-bde-maka-ska", description: "Urban lakeside living near Uptown" },
    { name: "East Harriet", slug: "east-harriet", description: "Charming homes near Lyndale Avenue" },
    { name: "Fulton", slug: "fulton", description: "Century-old bungalows south of Lake Harriet" },
    { name: "Kenwood", slug: "kenwood", description: "Grand homes and Lake of the Isles" },
  ],
  closing: {
    title: "What Makes West Maka Ska Irreplaceable",
    paragraphs: [
      "West Maka Ska is not the neighborhood that people name first when they talk about Minneapolis. It does not have a famous bookstore or a renowned restaurant or a commercial district that defines its identity. What it has is position — the western shore of the city's most popular lake, connected by trails to three other lakes and a 51-mile parkway system, backed by residential streets of unusual beauty and calm. The neighborhood's great advantage is being close to everything — Uptown, Linden Hills, downtown, the entire Chain of Lakes — while remaining quiet enough that you can hear the loons on a summer evening.",
      "That position comes at a cost, both financial and social. West Maka Ska is expensive, white, and increasingly homogeneous in ways that reflect the structural patterns of Southwest Minneapolis. The neighborhood's quiet stability can shade into a kind of comfortable insularity that resists the changes Minneapolis needs to become a more equitable city. But for the families biking the lake loop on a July evening, the runners training for the marathon on the Bde Maka Ska path, the empty nesters who have watched the seasons turn from the same screened porch for thirty years — this neighborhood delivers a version of urban life that is difficult to match and impossible to fake.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          The western shore of Bde Maka Ska is the quiet side. On a summer
          evening, when the eastern beach is packed and the Uptown-adjacent
          paths are a human traffic jam of rollerbladers, joggers, and
          stroller-pushers, the west side of the lake feels like a different
          body of water. The path is less crowded. The parkway homes sit back
          from the boulevard behind deep lawns and old trees. Sailboats tilt
          in the distance. A family carries a canoe to the water. This is
          West Maka Ska&apos;s defining quality: proximity to the city&apos;s
          most popular recreational lake, experienced at a pace that
          remembers what relaxation feels like.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/west-maka-ska/hero.webp"
        alt="Bde Maka Ska's western shore with sailboats and the West Maka Ska parkway"
        caption="The western shore of Bde Maka Ska — West Maka Ska's front yard"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is West Maka Ska, Minneapolis?">
        <Prose>
          <p>
            West Maka Ska is a residential neighborhood in Southwest
            Minneapolis, occupying the land west of Bde Maka Ska (formerly
            Lake Calhoun). It is bounded roughly by West 31st Street and
            the{" "}
            <Link href="/neighborhoods/cedar-isles-dean" className="text-[#2a9d8f] hover:underline">
              Cedar - Isles - Dean
            </Link>{" "}
            neighborhood to the north, Bde Maka Ska Parkway and the lake
            to the east, West 36th Street and the Midtown Greenway to the
            south, and France Avenue South to the west. Approximately 3,800
            residents live here, in a neighborhood that is almost entirely
            single-family residential.
          </p>
          <p>
            The neighborhood&apos;s identity is defined by the lake. Bde
            Maka Ska — at roughly 400 acres, the largest lake in the
            Minneapolis Chain of Lakes — provides the recreational and
            scenic anchor that makes the neighborhood what it is. But
            West Maka Ska&apos;s character is distinct from the busier
            eastern shore. Where{" "}
            <Link href="/neighborhoods/east-bde-maka-ska" className="text-[#2a9d8f] hover:underline">
              East Bde Maka Ska
            </Link>{" "}
            has Uptown&apos;s energy, apartment density, and commercial
            activity, West Maka Ska is quiet, residential, and family-oriented.
            There is no commercial district. The streets slope gently toward
            the lake, shaded by mature trees and lined with homes that were
            built when this was the western edge of a growing city.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="West Maka Ska Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/west-maka-ska/neighborhood-sign.webp"
          alt="West Maka Ska neighborhood sign in Minneapolis"
          caption="The West Maka Ska neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="West Maka Ska History & Origins">
        <Prose>
          <p>
            Bde Maka Ska — &quot;White Earth Lake&quot; in the Dakota
            language — was a central feature of Dakota life for centuries
            before European-American settlement. The Dakota leader Cloud Man
            established a farming village on the lake&apos;s western shore
            in the 1820s, in cooperation with the Indian agent Lawrence
            Taliaferro — one of the earliest experiments in agricultural
            adaptation on Dakota land. The western shore, where West Maka
            Ska now sits, was part of this community&apos;s territory.
            Forced removal in 1839 displaced the Dakota from the lake they
            had known and named.
          </p>
          <p>
            The lake was subsequently named Lake Calhoun by the U.S.
            government, after John C. Calhoun, the Secretary of War and
            later Vice President who was an aggressive defender of slavery.
            That name persisted until 2018, when the lake was officially
            renamed Bde Maka Ska — a decision that went through years of
            legal challenges before being upheld by the Minnesota Supreme
            Court. The renaming restored the Dakota name and removed the
            honor given to a man whose legacy most Minnesotans were
            uncomfortable celebrating.
          </p>
          <p>
            Residential development on the western shore came in the
            early 20th century, driven by the streetcar network and the
            Minneapolis Park Board&apos;s ambitious program of lakeside
            parkway construction. The Boulevard — the parkway circling the
            lake — was designed to provide both transportation and scenic
            beauty, and the lots facing it became prime residential real
            estate. The homes built during the 1910s and 1920s reflect the
            period&apos;s prevailing styles: Colonial Revivals, Craftsman
            bungalows, Tudor cottages, and stucco two-stories. The
            neighborhood has remained a stable, affluent residential area
            ever since, with none of the dramatic booms, busts, or
            reinventions that have marked neighborhoods closer to downtown.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in West Maka Ska">
        <Prose>
          <p>
            Living in West Maka Ska means living with the lake as a daily
            companion. Morning routines include lake-loop runs and dog walks
            along the parkway. Summer evenings involve paddleboarding,
            swimming at the beach, or watching the sailboats from a lawn
            chair. Winter brings cross-country skiing on the frozen lake
            and fat-tire biking on the plowed paths. The lake is not a
            weekend destination — it is the front yard, shared with the
            city but experienced with a proprietary familiarity that comes
            from daily use.
          </p>
          <p>
            The residential streets behind the parkway are shaded, quiet,
            and well-maintained. Front porches are common. Landscaping tends
            toward the mature and established rather than the designed and
            curated. Children ride bikes on the sidewalks. The pace is
            slower than neighboring{" "}
            <Link href="/neighborhoods/south-uptown" className="text-[#2a9d8f] hover:underline">
              South Uptown
            </Link>{" "}
            and more domestic than{" "}
            <Link href="/neighborhoods/kenwood" className="text-[#2a9d8f] hover:underline">
              Kenwood
            </Link>
            . Families are the dominant demographic: young families buying
            into the Lake Harriet school pipeline, established families
            who have been here for a decade or two, and empty nesters who
            aren&apos;t ready to give up the lake.
          </p>
          <p>
            The social character is quiet and neighborhood-centered.
            Block parties and school events are the primary social
            infrastructure. There is no commercial gathering place within
            the neighborhood — no coffee shop where regulars congregate,
            no restaurant bar where neighbors run into each other on
            Friday night. Community happens on the lake trail, at the
            school, on the block. It is a neighborhood for people who
            value domestic peace and outdoor access over urban stimulation.
          </p>
        </Prose>
        <Quote
          text="People ask me why I'd live on the west side when the east side has all the restaurants and action. I tell them: that's exactly why. I can bike to all of it in five minutes, and then I come home to quiet."
          cite="West Maka Ska homeowner"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="West Maka Ska Food, Drink & Local Spots">
        <Prose>
          <p>
            West Maka Ska has no commercial district and virtually no
            restaurants or shops within its boundaries. This is the
            trade-off of its purely residential character — quiet streets
            mean no corner coffee shop. Dining and shopping happen in the
            surrounding neighborhoods, all easily accessible by bike or
            short drive.
          </p>
        </Prose>

        <ArticleSubsection title="Where West Maka Ska Residents Eat & Shop">
          <PlaceCardComponent place={{ name: "Linden Hills (43rd & Upton)", tag: "Shopping & Dining District", description: "The Linden Hills commercial district — Tilia, Sebastian Joe's, Wild Rumpus, Clancy's, and dozens of independent shops — is a short drive or bike ride south along the lake. This is the closest thing to a neighborhood commercial center for West Maka Ska residents, and many treat it as such." }} />
          <PlaceCardComponent place={{ name: "Uptown (Lake & Hennepin)", tag: "Dining & Entertainment", description: "The Uptown commercial district on the east side of the lake provides a wider range of restaurants, bars, and shopping. Biking around the lake takes 15–20 minutes. Driving takes five. The range of cuisines — Thai, Vietnamese, Indian, New American, Mexican — is far broader than anything available in the immediate neighborhood." }} />
          <PlaceCardComponent place={{ name: "France Avenue Corridor", tag: "Shopping & Services", description: "France Avenue, running along West Maka Ska's western boundary, provides access to commercial activity both in Minneapolis and in adjacent Edina. The 50th & France shopping district in Edina — an upscale collection of restaurants, boutiques, and services — is a short drive south and serves as a commercial destination for many West Maka Ska households." }} />
          <PlaceCardComponent place={{ name: "Bde Maka Ska Lakeside", tag: "Seasonal Dining", price: "$", description: "Seasonal concessions and rental operations along the Bde Maka Ska shoreline provide casual lakeside dining during warm months. The Tin Fish and other lakeside vendors offer burgers, fish tacos, and ice cream — nothing fancy, but the setting is the point." }} />
          <PlaceCardComponent place={{ name: "Lunds & Byerlys (Lake Street)", tag: "Grocery", price: "$$", description: "The Lunds & Byerlys on West Lake Street, near the Midtown Greenway, is the primary full-service grocery option for many West Maka Ska households. A locally owned upscale grocery with strong prepared foods, organic produce, and a bakery that draws from across Southwest Minneapolis." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Lakes Near West Maka Ska">
        <Prose>
          <p>
            Outdoor recreation is West Maka Ska&apos;s primary asset and the
            reason most people choose to live here. The lake, the trails, and
            the park system are not amenities adjacent to the neighborhood —
            they are the neighborhood, in the sense that daily life here is
            organized around access to water and green space.
          </p>
        </Prose>

        <ArticleSubsection title="Bde Maka Ska">
          <Prose>
            <p>
              Bde Maka Ska is the largest lake in the Minneapolis Chain of
              Lakes — roughly 400 acres of water encircled by a 3.1-mile
              paved path. Three public beaches offer swimming. Kayak,
              paddleboard, and canoe rentals launch from the western and
              eastern shores. Sailboats — from small dinghies to larger
              keelboats — are a defining visual feature of the lake from
              May through September. The Calhoun Yacht Club, on the
              lake&apos;s western shore in West Maka Ska, has been a
              sailing institution since 1916. In winter, the lake freezes
              for cross-country skiing, skating, and ice fishing. The
              3.1-mile loop is one of the busiest recreational trails in
              the city on summer evenings, though the western stretch
              tends to be less congested than the eastern side near Uptown.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Lake Harriet & the Chain of Lakes">
          <Prose>
            <p>
              Lake Harriet is a short walk or bike ride south, connected to
              Bde Maka Ska by a parkway trail through William Berry Park.
              The{" "}
              <Link href="/neighborhoods/linden-hills" className="text-[#2a9d8f] hover:underline">
                Linden Hills
              </Link>{" "}
              side of Lake Harriet — with the Bandshell, the Rose Garden,
              and the swimming beaches — is accessible on the trail system.
              From West Maka Ska, the entire Chain of Lakes is available
              on a continuous loop: Bde Maka Ska to Lake Harriet to Lake
              of the Isles to Cedar Lake and back — roughly 13 miles of
              connected trails through four lakes without crossing a major
              road.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Midtown Greenway">
          <Prose>
            <p>
              The Midtown Greenway runs along West Maka Ska&apos;s southern
              boundary, providing a below-grade, car-free bike and
              pedestrian trail that connects the Chain of Lakes to the
              Mississippi River. For commuters, the Greenway is a
              transformative piece of infrastructure — a fast, safe route
              to downtown Minneapolis and beyond. For recreational riders,
              it extends the lake trail network eastward across the city.
              The Greenway&apos;s western terminus, near the intersection
              of the lake trails and France Avenue, is one of the busiest
              trail junctions in Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="West Maka Ska Schools">
        <Prose>
          <p>
            West Maka Ska shares the Lake Harriet school pipeline with
            neighboring Linden Hills and East Harriet — one of the strongest
            public school pathways in Minneapolis.
          </p>
          <p>
            Lake Harriet Lower Elementary (K–2) and Lake Harriet Upper
            Elementary (3–5) serve the neighborhood. Both are well-regarded,
            with strong Niche ratings and engaged parent communities.
            Middle school is Anthony Middle School, rated B by Niche. The
            high school is Southwest Senior High School — an International
            Baccalaureate World School with an A-minus Niche rating, strong
            academics, and a notable performing arts program.
          </p>
          <p>
            Private school options accessible from West Maka Ska include
            the Blake School (with campuses in Hopkins and Minneapolis),
            Breck School, and various Montessori and parochial programs.
            The 50th &amp; France area in Edina, just south, provides
            access to Edina&apos;s highly regarded public school system
            for families living near the city border — though this requires
            an Edina address, not a Minneapolis one.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="West Maka Ska Real Estate & Housing">
        <Prose>
          <p>
            West Maka Ska is an expensive residential neighborhood, with
            median home sale prices in 2025 ranging from approximately
            $550,000 to $800,000. Lakefront and near-lakefront properties
            command significant premiums, often exceeding $1 million. Homes
            sell quickly — an average of about 12 days on market in 2025 —
            reflecting steady demand from families and lake-oriented buyers.
          </p>
        </Prose>

        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              At the entry level ($425,000–$550,000), you might find a
              smaller bungalow or cottage on an interior street, away from
              the lake and likely in need of some updating. The mid-range
              ($575,000–$800,000) gets you a solid three- or four-bedroom
              home from the 1920s: stucco two-stories, Craftsman bungalows
              with finished attics, or Colonial Revivals with updated
              kitchens. Above $850,000, you&apos;re looking at larger
              renovated homes, new construction, or properties with lake
              views or parkway frontage.
            </p>
            <p>
              The housing stock is overwhelmingly single-family, dating
              from the 1910s through the 1930s. Stucco two-stories and
              Craftsman bungalows are the most common styles. Lot sizes
              are moderate — standard Minneapolis city lots — with mature
              trees providing shade and privacy. There are very few
              apartment buildings or multi-unit properties. The
              neighborhood feels like what it is: a streetcar-era
              residential community built for families, maintained by
              families, and priced for families with significant resources.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around West Maka Ska">
        <Prose>
          <p>
            West Maka Ska&apos;s Walk Score of 70 reflects the
            neighborhood&apos;s split personality: excellent walkability for
            recreation (the lake is right there) and limited walkability for
            daily errands (no commercial district within the neighborhood).
            The Bike Score of 90 is strong, driven by the lake trails, the
            Midtown Greenway, and on-street bike lanes.
          </p>
          <p>
            Most daily errands — groceries, dining, shopping — require a
            short drive or bike ride to Linden Hills, Uptown, or the France
            Avenue corridor. This is the primary inconvenience of West Maka
            Ska&apos;s purely residential character, and it is one that
            residents have generally accepted as the price of quiet streets
            and lake access.
          </p>
          <p>
            Downtown Minneapolis is approximately 15 minutes by car via
            Hennepin Avenue or I-394. MSP International Airport is roughly
            20 minutes via Highway 62. Metro Transit bus service is available
            on France Avenue and Lake Street, with moderate frequency.
            Biking to downtown via the Midtown Greenway or the lake
            trail/Kenilworth Trail connection takes approximately 20–25
            minutes. Most households own at least one car, and for daily
            commuting, a car remains the primary mode for most residents.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            West Maka Ska is a stable, desirable neighborhood, but it shares
            the broader tensions of Southwest Minneapolis — and has a few
            of its own.
          </p>
        </Prose>

        <ArticleSubsection title="The Name & the Identity Question">
          <Prose>
            <p>
              The renaming of Lake Calhoun to Bde Maka Ska in 2018 changed
              the neighborhood&apos;s name as well. &quot;West Calhoun&quot;
              became &quot;West Maka Ska&quot; — a shift that was embraced by
              some residents, resisted by others, and largely accepted
              through the gradual process of daily usage. Real estate
              listings still sometimes use both names. Newcomers use the
              Dakota name. Long-time residents vary. The name change is
              substantively settled, but it surfaces a broader question about
              identity: when a neighborhood is defined by a lake, and the
              lake&apos;s name changes, what does the neighborhood become?
              For most residents, the answer has been pragmatic: the lake
              is the same lake, the streets are the same streets, and the
              name is whatever the mapmakers say it is.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Lake Health & Climate Pressure">
          <Prose>
            <p>
              Bde Maka Ska faces environmental pressures common to urban
              lakes in Minnesota: stormwater runoff, invasive species,
              algal blooms during warm summers, and the long-term effects
              of climate change on water temperature and quality. Periodic
              beach closures due to water quality concerns have rattled
              residents in recent years. The Minneapolis Park Board manages
              the lake actively, but the reality is that a lake this
              heavily used, in an urban setting, requires constant
              intervention to remain healthy. For a neighborhood whose
              identity and property values are tied to the lake, water
              quality is not an abstract environmental issue — it is a
              direct threat to what makes the neighborhood work.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Affordability & Exclusion">
          <Prose>
            <p>
              West Maka Ska shares the affordability challenge of all
              lakeside Southwest Minneapolis neighborhoods: the same
              features that make it desirable — the lake, the schools,
              the safety, the trees — make it expensive, and that expense
              limits access to a narrow demographic. The neighborhood is
              overwhelmingly white and upper-income. The Minneapolis 2040
              Plan&apos;s efforts to introduce more housing types have had
              limited impact here, where the lots are largely built out
              and the community has historically favored single-family
              residential character. The tension between citywide housing
              equity goals and neighborhood-level preservation of character
              is present in West Maka Ska, even if it is less vocal here
              than in neighborhoods with more active development pressure.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="West Maka Ska FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
