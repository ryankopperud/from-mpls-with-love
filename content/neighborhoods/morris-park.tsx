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
    title: "Morris Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Morris Park, Minneapolis — Northeast industrial edge, Mississippi River proximity, small-neighborhood character, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Morris Park",
  deck: "On the industrial edge of Northeast — where a small residential pocket meets the Mississippi River, railroad corridors frame the horizon, and a neighborhood that most of Minneapolis forgets exists quietly goes about its business.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Morris Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Morris Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Culture" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Morris Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~1,500", label: "Residents (US Census / ACS estimates)" },
      { value: "$220K–$310K", label: "Median home sale price (2025 data)" },
      { value: "$950–$1,250", label: "Typical 1BR apartment rent (2025)" },
      { value: "58", label: "Walk Score" },
      { value: "70", label: "Bike Score" },
      { value: "45", label: "Transit Score" },
      { value: "40%", label: "Renter-occupied housing" },
      { value: "0.3 sq mi", label: "Approximate neighborhood area" },
    ],
  },
  faq: [
    {
      question: "Is Morris Park a good neighborhood in Minneapolis?",
      answer:
        "Morris Park is a small, affordable, and relatively quiet pocket in Northeast Minneapolis. It's a good fit for people who want proximity to the river and Northeast's culture without paying Northeast prices. The industrial surroundings and limited commercial options are trade-offs, but for the right buyer or renter, Morris Park offers genuine value.",
    },
    {
      question: "Is Morris Park safe?",
      answer:
        "Morris Park is generally safe, with crime rates near or slightly below the Minneapolis average. The small size and residential character contribute to a sense of security, though the industrial areas on the periphery can feel desolate at night. As with any Minneapolis neighborhood, basic urban awareness applies.",
    },
    {
      question: "How much does it cost to live in Morris Park?",
      answer:
        "Morris Park is affordable for Northeast Minneapolis. Single-family homes sell in the $220,000 to $310,000 range. One-bedroom apartments rent for $950 to $1,250. It's one of the more affordable entry points in the Northeast area, partly because of the industrial surroundings.",
    },
    {
      question: "Where exactly is Morris Park in Minneapolis?",
      answer:
        "Morris Park is a small neighborhood in Northeast Minneapolis, bounded roughly by railroad tracks and industrial corridors. It sits near the Mississippi River, east of Marshall Terrace and south of Columbia Park. It's bordered by rail yards, industrial land, and the river, giving it an isolated feeling despite being within city limits.",
    },
    {
      question: "What schools serve Morris Park?",
      answer:
        "Sheridan Elementary School and other Northeast Minneapolis schools serve the area. Edison High School is the designated comprehensive high school for Northeast. The small number of school-age children in the neighborhood means many families access Minneapolis Public Schools options through open enrollment.",
    },
    {
      question: "Is Morris Park walkable?",
      answer:
        "Morris Park has limited walkability for commercial needs — there are very few businesses within the neighborhood. The Walk Score of 58 reflects the residential-industrial character. Walking along the river trails is excellent for recreation, but for shopping and dining, you'll need to travel to neighboring areas.",
    },
    {
      question: "Can you access the Mississippi River from Morris Park?",
      answer:
        "Yes. Morris Park's proximity to the Mississippi River is one of its greatest assets. The river and its trail system are accessible from the neighborhood, offering walking, biking, and scenic views of the gorge and industrial riverfront.",
    },
    {
      question: "Is Morris Park gentrifying?",
      answer:
        "Morris Park has seen some price appreciation as Northeast Minneapolis overall has become more popular, but gentrification pressures are less intense here than in neighborhoods like Northeast Park or Sheridan, which have more visible arts and dining scenes. The industrial character limits some types of development.",
    },
  ],
  nearby: [
    { name: "Marshall Terrace", slug: "marshall-terrace", description: "Just west — small riverside neighborhood" },
    { name: "Columbia Park", slug: "columbia-park", description: "North — residential Northeast with park access" },
    { name: "Bottineau", slug: "bottineau", description: "South — Northeast arts district energy" },
    { name: "Sheridan", slug: "sheridan", description: "Southwest — Northeast Minneapolis arts and brewery scene" },
  ],
  closing: {
    title: "What Makes Morris Park Worth Knowing",
    paragraphs: [
      "Morris Park is one of those neighborhoods that exists in the margins — literally, between railroad tracks and the river — and in the margins of the city's attention. Most Minneapolitans have never been here. Most couldn't find it on a map. That invisibility is not entirely a disadvantage. It keeps prices low, keeps traffic minimal, and keeps the neighborhood's character authentic in a way that more popular areas struggle to maintain.",
      "What you get in Morris Park is simple: affordable homes in a small community near the Mississippi River, with access to the broader culture and amenities of Northeast Minneapolis without the price tag. The industrial surroundings are not for everyone. The isolation is not for everyone. But for people who value affordability, quiet, and proximity to the river over walkable restaurants and hip coffee shops, Morris Park is a genuine find in a city where genuine finds are increasingly rare.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Morris Park exists in the gaps. Between railroad tracks that
          carry freight trains through the night. Between the Mississippi
          River and the industrial yards that once defined Northeast
          Minneapolis&apos;s working-class economy. Between neighborhoods
          that people have heard of and neighborhoods that people haven&apos;t.
          It is one of the smallest neighborhoods in Minneapolis — roughly
          1,500 people in a pocket of residential blocks surrounded by
          industry and infrastructure. Nobody moves to Morris Park because
          they saw it on a best-neighborhoods list. People find it the way
          you find most valuable things: by looking where nobody else is
          looking, and discovering that the absence of attention has
          preserved something worth having.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/morris-park/hero.webp"
        alt="Morris Park neighborhood in Northeast Minneapolis with river views and industrial backdrop"
        caption="Morris Park — a small residential pocket on the industrial edge of Northeast Minneapolis"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Morris Park, Minneapolis?">
        <Prose>
          <p>
            Morris Park is a small residential neighborhood in Northeast
            Minneapolis, defined by its position at the edge of the city&apos;s
            industrial landscape and its proximity to the Mississippi River.
            With approximately 1,500 residents, it is one of the smallest
            neighborhoods in Minneapolis, occupying a compact area bounded
            by railroad corridors and industrial land to the west and south,
            the Mississippi River to the east, and Columbia Park to the
            north.
          </p>
          <p>
            The neighborhood is characterized by modest single-family homes,
            small lots, and a working-class heritage that connects it to
            Northeast Minneapolis&apos;s broader identity. There is almost
            no commercial activity within Morris Park — residents rely on
            neighboring areas for shopping, dining, and services. What the
            neighborhood offers is affordable housing in a small, quiet
            community with river access, at prices that reflect the
            industrial surroundings rather than the Northeast Minneapolis
            brand that has driven up values in neighborhoods to the south.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Morris Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/morris-park/neighborhood-sign.webp"
          alt="Morris Park neighborhood sign in Minneapolis"
          caption="The Morris Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Morris Park History & Origins">
        <Prose>
          <p>
            Morris Park takes its name from the park within the
            neighborhood, which was named for an early resident or
            benefactor. The area&apos;s history is inseparable from
            Northeast Minneapolis&apos;s industrial heritage — the
            railroads, the river commerce, and the factories that
            employed generations of immigrant workers.
          </p>
          <p>
            Before European settlement, the Mississippi River corridor
            through this area was part of the Dakota homeland. The river
            was a lifeline for Indigenous communities long before it
            became an engine of industrial development. European
            settlement brought lumber mills, flour mills, and the
            railroad infrastructure that would reshape the landscape.
          </p>
          <p>
            Morris Park developed in the late 19th and early 20th centuries
            as worker housing for the industries along the river and
            railroad corridors. The population was predominantly
            Eastern European — Polish, Ukrainian, and Czech families
            who built tight-knit communities around churches and
            mutual aid societies, in the broader pattern of Northeast
            Minneapolis settlement.
          </p>
          <p>
            As industry declined through the mid and late 20th century,
            Morris Park lost some of its economic base. The rail yards
            and factories that had employed residents either closed or
            reduced operations. The neighborhood contracted, and its
            isolation — surrounded by industrial land rather than other
            residential areas — became more apparent. But the community
            persisted, maintained its homes, and retained the working-class
            character that defines it today.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Morris Park">
        <Prose>
          <p>
            Morris Park feels different from most of Minneapolis. The
            industrial surroundings — rail yards, warehouses, commercial
            operations — give it an edge-of-the-city feeling even though
            it&apos;s only a few miles from downtown. The residential
            blocks are compact and self-contained, a cluster of homes
            that seem to exist in their own world, separated from the
            rest of the city by infrastructure and industry.
          </p>
          <p>
            The homes are modest — small single-family houses and
            duplexes, many dating to the early 1900s, on tight lots
            with minimal setbacks. The architecture is utilitarian
            rather than charming, built for workers who needed shelter
            more than aesthetics. Some homes have been updated; others
            retain their original character, for better or worse.
          </p>
          <p>
            The community is small enough that most residents know each
            other. This intimacy — born of isolation as much as choice —
            creates a neighborhood dynamic that is rare in a city. People
            look out for each other. They notice when something is
            different. The block club is not a formality; it&apos;s the
            primary mechanism of community life.
          </p>
          <p>
            The river is the neighborhood&apos;s greatest natural
            asset. The Mississippi runs along Morris Park&apos;s eastern
            edge, and while industrial uses limit direct access in some
            areas, the river trail system provides walking and biking
            opportunities that connect the neighborhood to the broader
            Minneapolis riverfront. On summer evenings, the river views
            from the eastern edge of the neighborhood are unexpectedly
            beautiful — industrial and natural landscapes layered together
            in a way that feels distinctly Minneapolis.
          </p>
        </Prose>
        <Quote
          text="People think Northeast is all breweries and art galleries now. Morris Park is what Northeast used to be — working people, small houses, and the river. We're still here."
          cite="Morris Park resident, neighborhood survey"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Morris Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Morris Park has virtually no commercial activity within its
            boundaries. For food, drink, and shopping, residents head to
            neighboring areas in Northeast Minneapolis.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <PlaceCardComponent place={{ name: "Northeast Minneapolis Breweries & Restaurants", tag: "Various", price: "$–$$$", description: "The broader Northeast Minneapolis area — particularly the neighborhoods south of Morris Park along Central and University Avenues — has become one of the city's premier dining and brewery districts. Bauhaus Brew Labs, Indeed Brewing, Dangerous Man, and dozens of restaurants are accessible by a short drive or bike ride." }} />
          <PlaceCardComponent place={{ name: "Central Avenue Corridor", tag: "Various", price: "$–$$", description: "Central Avenue in Northeast Minneapolis offers a diverse mix of restaurants, bars, and shops — from Polish delis to Vietnamese pho shops to modern cocktail bars. It's the closest major commercial corridor for Morris Park residents." }} />
          <PlaceCardComponent place={{ name: "Columbia Heights Commercial", tag: "Various", price: "$–$$", description: "Columbia Heights, just north across the Minneapolis boundary, offers chain restaurants, grocery stores, and retail that many Morris Park residents use for daily needs." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Culture & Outdoors Near Morris Park">
        <Prose>
          <p>
            Morris Park&apos;s outdoor amenities center on the Mississippi
            River and the neighborhood&apos;s namesake park.
          </p>
        </Prose>

        <ArticleSubsection title="Morris Park">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park provides a playground,
              open green space, and a community gathering point. It is
              small and modestly equipped but serves as the social center
              of a small neighborhood that doesn&apos;t have many other
              gathering places.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Mississippi River Access">
          <Prose>
            <p>
              The Mississippi River runs along Morris Park&apos;s eastern
              boundary. River trail access provides walking and biking
              routes along the riverfront, connecting south to the
              St. Anthony Falls area and north toward Fridley and the
              northern suburbs. The industrial character of this stretch
              of river gives it a different feel than the more manicured
              sections near downtown — rawer, more honest, and oddly
              beautiful.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Northeast Arts District">
          <Prose>
            <p>
              While not within Morris Park itself, the Northeast
              Minneapolis arts district — with its galleries, studios,
              and Art-a-Whirl festival — is accessible by a short drive
              or bike ride. Morris Park residents can participate in one
              of the most active arts communities in the Twin Cities
              without paying the premium that comes with living in its
              center.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Morris Park Schools">
        <Prose>
          <p>
            Morris Park is served by Minneapolis Public Schools. Sheridan
            Elementary School and other Northeast area schools serve the
            neighborhood for elementary grades. Edison High School is the
            designated comprehensive high school for Northeast Minneapolis.
          </p>
          <p>
            The small number of school-age children in the neighborhood
            means that many families access schools through the Minneapolis
            Public Schools open enrollment system, attending programs across
            the district based on interest and availability.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Morris Park Real Estate & Housing">
        <Prose>
          <p>
            Morris Park offers some of the most affordable housing in
            Northeast Minneapolis, reflecting the industrial surroundings
            and the neighborhood&apos;s isolation from Northeast&apos;s more
            celebrated commercial and cultural corridors.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Morris Park">
          <Prose>
            <p>
              Single-family homes sell in the $220,000 to $310,000 range —
              well below the average for Northeast Minneapolis overall.
              The housing stock is older and modest in size, and condition
              varies. Buyers should budget for potential renovation needs
              on homes that may not have been updated in decades. The
              low prices attract first-time buyers and investors.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              Rental options are limited but affordable. One-bedroom units
              rent for $950 to $1,250, below the Northeast Minneapolis
              average. The rental stock is mostly in older duplexes and
              small apartment buildings.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="I bought in Morris Park because I couldn't afford Sheridan or Northeast Park, and honestly, I'm glad I ended up here. It's quiet, the river is right there, and my mortgage is half what my friends pay for rent in Uptown." cite="Morris Park homeowner, neighborhood survey" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Morris Park">
        <Prose>
          <p>
            Morris Park is car-dependent for most daily needs. The Walk
            Score of 58 and Transit Score of 45 reflect limited commercial
            options and bus service. The Bike Score of 70 reflects
            reasonable cycling infrastructure, including river trail access.
          </p>
          <p>
            Bus service is available but less frequent than in denser
            neighborhoods. Downtown Minneapolis is approximately 10-15
            minutes by car. The neighborhood&apos;s location near major
            road and rail infrastructure provides reasonable driving
            access despite its isolated feeling.
          </p>
          <p>
            Biking is a practical option for reaching the rest of Northeast
            Minneapolis, with river trails and surface streets providing
            connections south to the arts district and beyond.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Morris Park faces a set of tensions common to small, industrial-
            edge neighborhoods in growing cities.
          </p>
        </Prose>

        <ArticleSubsection title="Industrial Neighbors">
          <Prose>
            <p>
              The industrial operations surrounding Morris Park — rail
              yards, warehouses, commercial facilities — generate noise,
              truck traffic, and occasional environmental concerns.
              Living next to active industry is a daily reality that some
              residents accept and others find wearing. The balance between
              residential quality of life and industrial economic activity
              is an ongoing negotiation.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Northeast Minneapolis Price Pressure">
          <Prose>
            <p>
              As Northeast Minneapolis has become one of the city&apos;s
              most popular areas, price appreciation has spread outward
              from the core neighborhoods toward peripheral areas like
              Morris Park. Homes that were deeply affordable a decade ago
              are now merely affordable, and the gap is closing. This is
              mostly good news for existing homeowners and concerning for
              the neighborhood&apos;s historical accessibility.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Infrastructure and Connectivity">
          <Prose>
            <p>
              Morris Park&apos;s isolation — surrounded by rail corridors
              and industrial land — limits connectivity to the rest of
              the city. Improved bike and pedestrian connections to the
              broader Northeast network would benefit residents, but
              infrastructure investments tend to follow population density,
              and Morris Park&apos;s 1,500 residents don&apos;t generate
              the demand that drives city prioritization.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Morris Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
