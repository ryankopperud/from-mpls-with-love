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
    title: "Regina, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Regina, Minneapolis — quiet residential living near Lake Nokomis, Minnehaha Creek, small-neighborhood character, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Regina",
  deck: "Small, quiet, and easy to miss — where a handful of residential blocks near Lake Nokomis and Minnehaha Creek offer one of the most peaceful places to live within Minneapolis city limits.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Regina?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Regina" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Regina, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~2,000", label: "Residents (US Census / ACS estimates)" },
      { value: "$280K–$370K", label: "Median home sale price (2025 data)" },
      { value: "$1,050–$1,350", label: "Typical 1BR apartment rent (2025)" },
      { value: "58", label: "Walk Score" },
      { value: "74", label: "Bike Score" },
      { value: "44", label: "Transit Score" },
      { value: "30%", label: "Renter-occupied housing" },
      { value: "0.4 sq mi", label: "Approximate neighborhood area" },
    ],
  },
  faq: [
    {
      question: "Is Regina a good neighborhood in Minneapolis?",
      answer:
        "Regina is an excellent neighborhood for anyone seeking quiet, safe, residential living within Minneapolis. It's small, stable, and close to Lake Nokomis and Minnehaha Creek. It's not a neighborhood with commercial activity or cultural buzz — it's a neighborhood where people live, and it does that very well.",
    },
    {
      question: "Is Regina safe?",
      answer:
        "Regina is one of the safest neighborhoods in Minneapolis, with crime rates well below the city average. It's a quiet, low-traffic residential area where most concerns are limited to minor property issues. Violent crime is very rare.",
    },
    {
      question: "How much does it cost to live in Regina?",
      answer:
        "Single-family homes in Regina sell in the $280,000 to $370,000 range. Rental options are limited, as the neighborhood is predominantly owner-occupied. The area is moderately priced for Minneapolis, more affordable than lakeside neighborhoods to the north and west but above the city median.",
    },
    {
      question: "Where exactly is Regina in Minneapolis?",
      answer:
        "Regina is a small neighborhood in south Minneapolis, bounded roughly by East 50th Street to the north, Hiawatha Avenue (Highway 55) to the east, Minnehaha Creek to the south, and 34th Avenue South to the west. It sits east of Keewaydin and south of Minnehaha.",
    },
    {
      question: "What schools serve Regina?",
      answer:
        "Page Elementary School and Keewaydin Elementary serve the area for elementary grades. Roosevelt High School is the designated comprehensive high school. The Minneapolis Public Schools open enrollment system allows access to magnet and specialty programs citywide.",
    },
    {
      question: "Is Regina walkable?",
      answer:
        "For daily commercial needs, no — Regina is purely residential with no shops or restaurants within the neighborhood. For recreational walking, it's excellent — Minnehaha Creek trail and Lake Nokomis paths are accessible nearby.",
    },
    {
      question: "How close is Regina to Lake Nokomis?",
      answer:
        "Lake Nokomis is about a 10-15 minute walk or short bike ride northwest of Regina. The lake's beach, trails, and park facilities are primary recreational amenities for the neighborhood.",
    },
    {
      question: "Is Regina good for families?",
      answer:
        "Yes. Regina's safe streets, good schools, creek access, and family-oriented housing stock make it well-suited for families with children. The small size of the neighborhood means everyone tends to know each other, creating a tight-knit community feel that's harder to find in larger neighborhoods.",
    },
  ],
  nearby: [
    { name: "Keewaydin", slug: "keewaydin", description: "West of Regina — similar quiet residential character near the lake" },
    { name: "Nokomis", slug: "nokomis", description: "Northwest — Lake Nokomis beach and trails" },
    { name: "Minnehaha", slug: "minnehaha", description: "North — Minnehaha Falls and creek trail" },
    { name: "Hiawatha", slug: "hiawatha", description: "East of Hiawatha Avenue — diverse and transit-connected" },
    { name: "Wenonah", slug: "wenonah", description: "Southwest — similarly quiet, along the creek" },
  ],
  closing: {
    title: "What Makes Regina Worth Knowing",
    paragraphs: [
      "Regina is one of the smallest and least-known neighborhoods in Minneapolis, and that obscurity is part of its value. It is a handful of residential blocks near a creek and a lake, where the houses are modest, the streets are quiet, and the neighbors have been there long enough to remember when the elm trees were still alive. There is nothing flashy here. There is nothing to discover, in the way that food writers discover restaurants or real estate agents discover 'up-and-coming' neighborhoods.",
      "What Regina offers is the irreducible core of what a neighborhood is supposed to be: a safe, stable, pleasant place to live, surrounded by people who are doing the same thing. In a city that sometimes confuses activity with vitality, Regina is a quiet reminder that a neighborhood doesn't need to be exciting to be excellent.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Regina is the kind of neighborhood where, if you asked ten
          Minneapolis residents to point to it on a map, nine of them
          would miss. It occupies a small patch of south Minneapolis between
          Keewaydin and Hiawatha Avenue, bordered by Minnehaha Creek to
          the south and East 50th Street to the north. It has no signature
          restaurant, no viral social media presence, no public controversy
          generating headlines. It has well-maintained homes, old trees,
          creek access, and neighbors who wave. For the roughly 2,000 people
          who live here, that is not a limitation. That is the entire value
          proposition.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/regina/hero.webp"
        alt="Quiet residential street in the Regina neighborhood of Minneapolis with mature trees"
        caption="Regina — one of Minneapolis's smallest and most peaceful neighborhoods"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Regina, Minneapolis?">
        <Prose>
          <p>
            Regina is a small, quiet residential neighborhood in south
            Minneapolis, bounded roughly by East 50th Street to the north,
            Hiawatha Avenue (Highway 55) to the east, Minnehaha Creek to
            the south, and 34th Avenue South to the west. With approximately
            2,000 residents, it is one of the smallest neighborhoods in the
            city — a handful of residential blocks that most Minneapolitans
            have never heard of and that residents are perfectly content to
            keep that way.
          </p>
          <p>
            The neighborhood has no commercial activity. There are no
            restaurants, shops, or businesses within its boundaries. What
            it offers is purely residential: safe streets, well-maintained
            homes, Minnehaha Creek along its southern edge, and proximity
            to Lake Nokomis. It is a neighborhood defined by its peace
            and its smallness — a place where the community is tight-knit
            by necessity, because there simply aren&apos;t that many of you.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Regina Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/regina/neighborhood-sign.webp"
          alt="Regina neighborhood sign in Minneapolis"
          caption="The Regina neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Regina History & Origins">
        <Prose>
          <p>
            Regina&apos;s name comes from the Latin word for &ldquo;queen,&rdquo;
            though the specific origin of the naming — whether it
            referenced a person, a place, or an aspiration — is not well
            documented in the neighborhood&apos;s modest historical record.
            Like much of far south Minneapolis, this land was part of the
            Dakota homeland before European settlement, and the creek that
            defines its southern boundary was a feature of the landscape
            long before anyone drew neighborhood lines on a map.
          </p>
          <p>
            Development came in the early to mid-20th century, later than
            neighborhoods closer to downtown. The housing stock dates
            primarily from the 1920s through 1950s — bungalows, ramblers,
            and Cape Cods built for working-class and middle-class families.
            The neighborhood developed as Minneapolis expanded southward,
            filling in the land between established neighborhoods and the
            city&apos;s southern boundary.
          </p>
          <p>
            Regina has been residentially stable since its development. It
            has not experienced the waves of demographic change, urban
            renewal, or market-driven transformation that have reshaped
            neighborhoods closer to the city&apos;s center. The result is
            a neighborhood that looks and feels much as it has for decades —
            for better and for worse.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Regina">
        <Prose>
          <p>
            Living in Regina is living in a neighborhood that asks very
            little of you. The streets are quiet. The homes are modest but
            cared for. The yards are small but green. There is no social
            scene to navigate, no commercial district to opinions about,
            no neighborhood controversy demanding your attention. You live
            here, you maintain your home, you walk to the creek, you wave
            at the neighbors, and you go about your life.
          </p>
          <p>
            The smallness of the neighborhood creates a particular kind of
            community. With only about 2,000 people, Regina functions more
            like a small town within the city. People recognize each other
            at the park. The block parties are small enough that everyone
            knows everyone. This intimacy is appealing to some and
            claustrophobic to others — there is no anonymity in a
            neighborhood this small.
          </p>
          <p>
            The creek is the defining natural feature. Minnehaha Creek
            runs along Regina&apos;s southern boundary, and the trail
            along it provides the primary recreational amenity for
            residents. Lake Nokomis, a short walk or bike ride to the
            northwest, serves as the neighborhood&apos;s lakefront.
          </p>
          <p>
            Neighboring{" "}
            <Link href="/neighborhoods/keewaydin" className="text-[#2a9d8f] hover:underline">
              Keewaydin
            </Link>{" "}
            to the west shares the quiet residential character, while{" "}
            <Link href="/neighborhoods/minnehaha" className="text-[#2a9d8f] hover:underline">
              Minnehaha
            </Link>{" "}
            to the north offers more commercial activity and access to
            Minnehaha Falls.
          </p>
        </Prose>
        <Quote
          text="I tell people I live in Regina and they say, 'Is that in Minneapolis?' Yes. Yes it is. And it's exactly as quiet as you'd guess from the fact that you've never heard of it."
          cite="Regina resident, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Regina Food, Drink & Local Spots">
        <Prose>
          <p>
            Regina has no commercial activity within its boundaries. For
            food, drink, and shopping, residents rely entirely on
            neighboring areas.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <PlaceCardComponent place={{ name: "Nokomis Beach Area", tag: "Various", price: "$–$$", description: "The Lake Nokomis area to the northwest offers seasonal cafes, restaurants, and the Sandcastle gastropub — the closest dining options for most Regina residents." }} />
          <PlaceCardComponent place={{ name: "Hiawatha Avenue Commercial", tag: "Various", price: "$–$$", description: "Hiawatha Avenue, Regina's eastern boundary, has scattered commercial activity including restaurants, gas stations, and convenience stores." }} />
          <PlaceCardComponent place={{ name: "50th Street Corridor", tag: "Various", price: "$–$$", description: "East 50th Street provides access to commercial nodes along the corridor, particularly near Chicago Avenue and further west, with restaurants, groceries, and services." }} />
          <PlaceCardComponent place={{ name: "Minnehaha Falls Area", tag: "Various", price: "$–$$", description: "The area near Minnehaha Falls, northeast of Regina, has Sea Salt Eatery (seasonal seafood) and other options that are popular destinations for the broader area." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Regina">
        <Prose>
          <p>
            Regina&apos;s outdoor amenities are its greatest asset — the
            creek, the lake, and the park system that connects them.
          </p>
        </Prose>

        <ArticleSubsection title="Minnehaha Creek Trail">
          <Prose>
            <p>
              Minnehaha Creek runs along Regina&apos;s southern boundary,
              and the paved trail alongside it provides excellent
              recreational access. The trail connects west to Lake Harriet
              and east to Minnehaha Falls and the Mississippi River — one
              of the best cycling and walking corridors in Minneapolis.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Lake Nokomis">
          <Prose>
            <p>
              Lake Nokomis is accessible within a 10-15 minute walk or
              short bike ride from Regina. The lake&apos;s beach, 2.7-mile
              trail, and surrounding parkland provide the primary outdoor
              recreation destination for the neighborhood.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Minnehaha Falls">
          <Prose>
            <p>
              Minnehaha Falls, one of Minneapolis&apos;s most iconic
              natural features, is about a mile northeast of Regina via
              the creek trail. The 53-foot waterfall, surrounding parkland,
              and connection to the Mississippi River gorge make it a
              regional destination that Regina residents can reach by bike
              in minutes.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Regina Park">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park provides a playground,
              open green space, and a community gathering point. It is
              small — appropriate for a neighborhood this size — but
              well-maintained and well-used.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Regina Schools">
        <Prose>
          <p>
            Regina is served by Minneapolis Public Schools. Page Elementary
            School and Keewaydin Elementary serve the neighborhood for
            elementary grades. Roosevelt High School is the designated
            comprehensive high school.
          </p>
          <p>
            The schools are well-regarded, and the family character of the
            neighborhood reflects the importance residents place on
            education. The Minneapolis Public Schools open enrollment
            system allows families to access magnet and specialty programs
            citywide.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Regina Real Estate & Housing">
        <Prose>
          <p>
            Regina&apos;s housing market is characterized by stability and
            limited inventory. The stock is almost entirely single-family
            homes from the 1920s-1950s, and turnover is low.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Regina">
          <Prose>
            <p>
              Single-family homes sell in the $280,000 to $370,000 range.
              Creek-adjacent homes command premiums. The housing is modest
              in size — mostly two-to-three-bedroom homes — and price
              differences reflect condition and updates. Inventory is
              limited, and homes that come on the market in good condition
              sell quickly.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Rental options are extremely limited in Regina. The
              neighborhood is overwhelmingly owner-occupied, and renters
              looking in this area should expect to expand their search
              to adjacent neighborhoods with more rental inventory.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="We found our house by accident — we were looking at Nokomis and couldn't afford it, and our agent showed us a listing in Regina that was $50,000 less for a similar home one neighborhood over. Best accident we ever had." cite="Regina homeowner, neighborhood survey" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Regina">
        <Prose>
          <p>
            Regina is car-dependent for most daily needs. The Walk Score of
            58 and Transit Score of 44 reflect the purely residential
            character and limited bus service. The Bike Score of 74
            reflects good recreational cycling on nearby trails.
          </p>
          <p>
            The Blue Line light rail on Hiawatha Avenue is accessible from
            the neighborhood&apos;s eastern edge, providing direct service
            to downtown Minneapolis, MSP Airport, and the Mall of America.
            Bus service on Hiawatha is available but less frequent than on
            major corridors.
          </p>
          <p>
            Most households own cars, and the neighborhood is designed
            around automobile access. Street parking and driveways are
            standard, and congestion is not an issue on these quiet
            residential streets.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Regina is one of the most stable neighborhoods in Minneapolis.
            Changes here are measured in small increments over long periods.
          </p>
        </Prose>

        <ArticleSubsection title="Rising Prices">
          <Prose>
            <p>
              Home prices have been climbing, though less dramatically than
              in more centrally located neighborhoods. Regina remains
              accessible for middle-income buyers but is no longer the
              bargain it was a decade ago.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Aging Infrastructure">
          <Prose>
            <p>
              The housing stock is aging, and maintenance costs are rising.
              Most homes are 70-80 years old, requiring ongoing investment
              in roofs, mechanical systems, and structural upkeep.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Hiawatha Corridor Development">
          <Prose>
            <p>
              Development along Hiawatha Avenue — Regina&apos;s eastern
              boundary — is bringing some change to the area&apos;s
              periphery. New construction and commercial activity along the
              light rail corridor could gradually change the character of
              the neighborhood&apos;s eastern edge.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Regina FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
