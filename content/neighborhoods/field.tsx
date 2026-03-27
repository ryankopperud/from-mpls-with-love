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
    title: "Field, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Field, Minneapolis — homes, history, parks, schools, real estate, restaurants, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Field",
  deck: "One of south Minneapolis's quietest residential neighborhoods — tucked between Diamond Lake and Nokomis, where the houses are modest, the streets are calm, and the ambition is simply to be a good place to live.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Field?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Field" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Field, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~4,200", label: "Residents (Niche / US Census)" },
      { value: "$300K–$450K", label: "Median home sale price range (2025 data)" },
      { value: "15 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.5 sq mi", label: "Neighborhood area" },
      { value: "1920s–50s", label: "Era most homes were built" },
      { value: "15–20 min", label: "Drive to downtown or MSP airport" },
      { value: "58", label: "Walk Score" },
      { value: "75", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Field a good neighborhood in Minneapolis?",
      answer:
        "Yes. Field is a stable, quiet, residential neighborhood in south Minneapolis with affordable housing, good park access, and the kind of settled character that appeals to families and long-term homeowners. It lacks the commercial energy and lakefront access of more prominent neighborhoods, but for people who want a good house on a quiet street at a reasonable price, Field delivers.",
    },
    {
      question: "Is Field, Minneapolis safe?",
      answer:
        "Field is generally safe, with crime rates near or below the city average. Property crime — vehicle break-ins, package theft — is the most common concern, consistent with patterns across south Minneapolis. Violent crime is uncommon. The neighborhood's quiet, residential character contributes to a safe-feeling environment.",
    },
    {
      question: "What is Field, Minneapolis known for?",
      answer:
        "Field is known, to the extent that it's known at all, for being one of south Minneapolis's most purely residential neighborhoods. There are no marquee attractions, no destination restaurants, no lakefront — just houses, trees, parks, and the particular contentment of a neighborhood that has never needed to be famous. Field Park and the proximity to Lake Nokomis provide the outdoor anchors.",
    },
    {
      question: "How much do homes cost in Field, Minneapolis?",
      answer:
        "Median home sale prices in Field have ranged from roughly $300,000 to $450,000 depending on the data source and season. This places Field near or slightly below the citywide median, making it one of the more affordable neighborhoods in south Minneapolis. Smaller bungalows can be found under $275,000; larger renovated homes may push above $500,000.",
    },
    {
      question: "Where exactly is Field in Minneapolis?",
      answer:
        "Field is in south Minneapolis, bounded roughly by East 46th Street to the north, Cedar Avenue to the east, East 54th Street to the south, and Bloomington Avenue to the west. It sits between the Diamond Lake neighborhood to the west and the Nokomis area to the south and east.",
    },
    {
      question: "What schools serve Field, Minneapolis?",
      answer:
        "Field Community School (K–5) is the neighborhood elementary and a community anchor. Middle school options include Roosevelt, and high school feeds into Roosevelt Senior High School or other Minneapolis public school options. The school pipeline is solid and part of what draws families to the neighborhood.",
    },
    {
      question: "Is Field close to Lake Nokomis?",
      answer:
        "Lake Nokomis is about a mile south and east of Field's center — close enough for a bike ride or short drive, but not walking distance for most residents. The Nokomis beaches, trails, and parkland are a regular destination for Field families.",
    },
    {
      question: "How is Field different from Diamond Lake?",
      answer:
        "Field and Diamond Lake are adjacent neighborhoods with similar character — quiet, residential, affordable, and family-oriented. Diamond Lake has slightly more commercial activity along Nicollet Avenue. Field is slightly more isolated and purely residential. The differences are subtle, and many residents of both neighborhoods use the same parks, schools, and commercial nodes.",
    },
    {
      question: "Is Field a good place for first-time homebuyers?",
      answer:
        "Field is one of the better first-time buyer neighborhoods in Minneapolis. The housing stock is modestly priced, the lots are reasonable, and the neighborhood offers the same city services, park access, and school pipeline as more expensive neighborhoods. The trade-off is the lack of walkable commercial life and the lower-profile location.",
    },
    {
      question: "How far is Field from downtown Minneapolis?",
      answer:
        "Field is approximately 15–20 minutes from downtown Minneapolis by car. Bus routes along Bloomington Avenue and Cedar Avenue connect to downtown via public transit, though most residents drive. MSP International Airport is similarly accessible at about 15 minutes via I-35W or Highway 62.",
    },
  ],
  nearby: [
    { name: "Diamond Lake", slug: "diamond-lake", description: "Quiet residential with Nicollet Avenue commercial access" },
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis, beaches, and a strong neighborhood identity" },
    { name: "Howe", slug: "howe", description: "Longfellow-area residential near Minnehaha Creek" },
    { name: "Ericsson", slug: "ericsson", description: "Quiet residential near Nokomis" },
    { name: "Standish", slug: "standish", description: "Diverse and affordable south Minneapolis neighborhood" },
  ],
  closing: {
    title: "What Makes Field Worth Knowing",
    paragraphs: [
      "Field is the kind of neighborhood that will never make a 'top ten' list, and the people who live here are fine with that. The houses are solid but not showy. The streets are quiet but not dead. The park is good, the school is good, the neighbors know each other well enough to wave and occasionally well enough to borrow a snow blower. There's nothing here that photographs well for a magazine feature, and nothing here that needs to.",
      "For people who want to buy a house in Minneapolis — a real house, with a yard and a garage and a block where kids ride bikes — without paying the premium that comes with a lake view or a boutique shopping district, Field is the answer. It's unassuming, unpretentious, and unapologetic about being exactly what it is: a neighborhood that works.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          Field is the kind of neighborhood you drive through without
          realizing you&apos;ve driven through it. There&apos;s no sign that
          announces you&apos;ve arrived, no commercial strip that catches
          your eye, no landmark that makes you turn your head. Just blocks
          of houses — bungalows, Cape Cods, the occasional rambler — set
          back on deep lots with garages in the alley and mature trees
          arching over the street. A kid is riding a bike. Someone is
          mowing. A dog is asleep on a porch. This is Field at its most
          essential: a neighborhood that does not ask to be noticed but
          quietly, stubbornly, keeps being a good place to live.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/field/hero.webp"
        alt="Quiet residential street in the Field neighborhood of south Minneapolis"
        caption="Field's residential streets — quiet, shaded, and deeply ordinary"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Field, Minneapolis?">
        <Prose>
          <p>
            Field is a residential neighborhood in south Minneapolis, bounded
            roughly by East 46th Street to the north, Cedar Avenue to the
            east, East 54th Street to the south, and Bloomington Avenue to
            the west. It covers about half a square mile and is home to
            approximately 4,200 residents. The neighborhood sits between{" "}
            <Link href="/neighborhoods/diamond-lake" className="text-[#2a9d8f] hover:underline">
              Diamond Lake
            </Link>{" "}
            to the west and the{" "}
            <Link href="/neighborhoods/nokomis" className="text-[#2a9d8f] hover:underline">
              Nokomis
            </Link>{" "}
            area to the south and east — a position that places it in the
            quiet middle of south Minneapolis, away from the lakes and the
            commercial corridors and the neighborhoods that generate
            headlines.
          </p>
          <p>
            Field takes its name from Field Park, the neighborhood&apos;s
            central green space, which in turn was likely named after one of
            the area&apos;s early residents or civic figures. The neighborhood
            is defined by its ordinariness — and that&apos;s meant as a
            genuine compliment. Field is what most of Minneapolis looks like
            when you strip away the lakes, the boutiques, the historic
            mansions, and the cultural institutions: houses, trees, parks,
            schools, and the daily rhythms of people going to work, coming
            home, and living their lives without fanfare.
          </p>
          <p>
            There are no destination restaurants. No boutique shopping
            districts. No lakefront. What there is, instead, is affordable
            housing, good park infrastructure, a community school, and the
            kind of residential stability that comes from a neighborhood
            where most people own their homes, most people stay for years,
            and most people consider the quietness a feature, not a bug.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Field Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/field/neighborhood-sign.webp"
          alt="Field neighborhood sign in Minneapolis"
          caption="The Field neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Field History & Origins">
        <Prose>
          <p>
            Before European settlement, this land was Dakota homeland — part
            of the territory stretching across what is now southern Minnesota.
            The Dakota people lived across this landscape for centuries before
            treaties and forced removal in the 1850s and 1860s opened the
            land to European homesteading. The area that would become the
            Field neighborhood was prairie and wetland, far from the river
            and the early centers of Minneapolis development.
          </p>
          <p>
            Field developed later than the neighborhoods closer to downtown
            and the lakes. While the lake-adjacent areas were filling in
            during the 1900s and 1910s, Field&apos;s blocks were platted and
            built out primarily through the 1920s, 1930s, 1940s, and into the
            1950s. The housing stock reflects this extended timeline:
            Craftsman bungalows from the 1920s, Cape Cods from the 1940s,
            and ramblers and split-levels from the postwar era sit side by
            side, giving the neighborhood a mixed but cohesive residential
            character.
          </p>
          <p>
            Field Park was established in the early 20th century and has
            served as the neighborhood&apos;s gathering place ever since.
            Field Community School provided the educational anchor. Together,
            the park and the school gave this otherwise undifferentiated
            residential area an identity — a center of gravity around which
            the community organized.
          </p>
          <p>
            For most of its history, Field has been a working- and
            middle-class neighborhood — affordable, stable, and unassuming.
            That character persists. The neighborhood has never experienced
            the dramatic gentrification or cultural reinvention that has
            reshaped other parts of Minneapolis. It has simply continued to
            be what it has always been: a good place to own a house and raise
            a family at a price that ordinary people can afford.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Field">
        <Prose>
          <p>
            Living in Field means accepting — and embracing — a particular
            kind of quietness. This is not a neighborhood that generates
            energy or attracts attention. There are no trendy restaurants
            opening on the corner, no developers pitching mixed-use projects,
            no debates about bike lanes or historic preservation that make
            the evening news. What there is, instead, is a remarkably stable
            residential fabric — blocks of well-maintained houses, mature
            trees, alley garages, front porches, and the particular rhythm
            of a neighborhood where people own their homes and take care of
            them.
          </p>
          <p>
            The demographic skews toward families and long-term homeowners,
            though Field has more economic and racial diversity than the
            Southwest Minneapolis neighborhoods. It&apos;s not the most
            diverse neighborhood in Minneapolis, but it&apos;s less
            homogeneous than Kenny or Fulton — a reflection of its lower
            price point and its position in the broader south Minneapolis
            landscape.
          </p>
          <p>
            Daily life revolves around the basics: the school, the park, the
            grocery run to Cub or Aldi, the commute. The commercial activity
            that Field residents depend on lives on the edges — Bloomington
            Avenue, Cedar Avenue, Nicollet Avenue in Diamond Lake. Within
            Field itself, it&apos;s houses all the way down. This is either
            limiting or liberating, depending on what you&apos;re looking for.
            People who want walkable urbanism go elsewhere. People who want
            a quiet block with a good house at a reasonable price end up in
            Field — and most of them stay.
          </p>
        </Prose>
        <Quote
          text="Nobody writes articles about Field. Nobody makes a big deal about living here. You just live here, and it&apos;s good. That&apos;s it."
          cite="Field homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Field Food, Drink & Local Spots">
        <Prose>
          <p>
            Field&apos;s commercial offerings are essentially zero. The
            neighborhood is almost entirely residential, and its dining and
            shopping options are borrowed from the corridors at its edges.
            This is the reality of living in a neighborhood that prioritized
            houses over storefronts.
          </p>
        </Prose>

        <ArticleSubsection title="Nearby Options">
          <PlaceCardComponent place={{ name: "Bloomington Avenue Corridor", tag: "Commercial Strip", description: "Bloomington Avenue runs along Field's western edge and hosts a scattering of small businesses, restaurants, and services. It's not a destination corridor, but it provides some of the everyday commercial needs — a gas station, a few restaurants, a convenience store." }} />
          <PlaceCardComponent place={{ name: "Cedar Avenue Corridor", tag: "Commercial Strip", description: "Cedar Avenue on Field's eastern edge has more commercial activity, including a mix of ethnic restaurants, grocery stores, and services that reflect the diversity of south Minneapolis. The Cedar Avenue strip is more interesting and more varied than many residents might expect." }} />
          <PlaceCardComponent place={{ name: "Nokomis Beach Coffee", tag: "Coffee Shop", price: "$", description: "Near Lake Nokomis, a short drive or bike ride south. A neighborhood coffee shop that draws from the surrounding neighborhoods and provides the kind of casual gathering place that Field itself lacks." }} />
          <PlaceCardComponent place={{ name: "Nicollet Avenue (Diamond Lake)", tag: "Commercial Corridor", description: "A short drive west, Nicollet Avenue through the Diamond Lake neighborhood offers additional dining, shopping, and services. The Nicollet corridor is one of south Minneapolis's primary commercial spines." }} />
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Field">
        <Prose>
          <p>
            Field&apos;s park access is solid — not spectacular, but more
            than adequate for a neighborhood of its size and character.
          </p>
        </Prose>
        <ArticleSubsection title="Field Park">
          <Prose>
            <p>
              Field Park is the neighborhood&apos;s central green space — a
              well-maintained park with a playground, ball fields, open green
              space, and a winter ice rink. The park functions as the
              neighborhood&apos;s gathering place, hosting youth programming
              and community events through the seasons. It&apos;s modest
              in scale but well-used and well-loved.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Lake Nokomis">
          <Prose>
            <p>
              Lake Nokomis is about a mile south and east of Field&apos;s
              center — close enough for a regular bike ride, less so for a
              daily walk. The lake&apos;s beaches, 2.7-mile trail loop, and
              parkland are popular with Field families, and the Nokomis area
              provides the kind of lakefront recreational access that Field
              itself lacks. Lake Nokomis is smaller and less crowded than Bde
              Maka Ska, with a more neighborhood-oriented feel.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Biking & Trails">
          <Prose>
            <p>
              The Bike Score of 75 reflects decent cycling infrastructure —
              connections to the Minnehaha Creek trail, the Lake Nokomis loop,
              and the broader south Minneapolis bike network. Field is
              bikeable for everyday use, and the flat terrain makes cycling
              practical and pleasant.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Field Schools">
        <Prose>
          <p>
            Field Community School serves kindergarten through fifth grade
            and is the neighborhood&apos;s primary community institution. The
            school is walkable from most addresses in the neighborhood and
            functions as a social anchor — the place where families connect,
            where the PTA organizes, where the community&apos;s identity
            takes shape. The school is solid and well-regarded within the
            community.
          </p>
          <p>
            Middle school options feed into the broader Minneapolis Public
            Schools system, and high school typically routes through Roosevelt
            Senior High School or other district options. Roosevelt has
            undergone significant investment and renovation in recent years
            and continues to evolve as an institution.
          </p>
          <p>
            The school pipeline is a draw for families who want the south
            Minneapolis location and price point with a functioning community
            school at the neighborhood&apos;s center.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Field Real Estate & Housing">
        <Prose>
          <p>
            Field is one of the more affordable neighborhoods in Minneapolis
            for homebuyers — a fact that has made it consistently attractive
            to first-time buyers, young families, and anyone looking for a
            solid house at a reasonable price. The median home sale price has
            ranged between roughly $300,000 and $450,000 depending on the
            data source and season — near or slightly below the citywide
            median.
          </p>
          <p>
            The housing stock is predominantly single-family homes from the
            interwar and early postwar periods. Craftsman bungalows, Cape
            Cods, ramblers, and the occasional Foursquare make up the
            majority of the inventory. Lots are reasonable, and most homes
            have the alley-access garages, deep backyards, and front porches
            that characterize south Minneapolis residential architecture.
          </p>
          <p>
            Homes sell quickly — about 15 days on average — reflecting strong
            demand at the price point. The market is competitive for
            well-maintained homes, and the relatively low entry price makes
            Field accessible to buyers who are priced out of the lake
            neighborhoods and the Southwest Minneapolis corridor.
          </p>
        </Prose>
        <ArticleSubsection title="What Your Money Buys">
          <Prose>
            <p>
              Under $300,000 gets you a smaller bungalow or Cape Cod needing
              updates. $300,000–$400,000 is the sweet spot — a well-maintained
              three-bedroom home with some updates. Above $400,000, you&apos;re
              looking at larger homes, significant renovations, or newer
              construction. The value proposition in Field is straightforward:
              for the price of a condo in Uptown, you get a house with a yard
              in a quiet neighborhood with a good school.
            </p>
          </Prose>
        </ArticleSubsection>
        <Quote text="Field is the neighborhood that people discover by accident and then wonder why they didn&apos;t look here first. The prices make sense. The neighborhood makes sense. It just works." cite="South Minneapolis real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Field">
        <Prose>
          <p>
            Field earns a Walk Score of 58 — reflecting its primarily
            residential character and the absence of commercial activity
            within the neighborhood itself. For groceries, restaurants, and
            most services, residents drive or bike to the corridors at the
            edges.
          </p>
          <p>
            The Bike Score of 75 is more reflective of Field&apos;s actual
            transportation strengths — the flat terrain, the connections to
            the Lake Nokomis and Minnehaha Creek trail systems, and the
            general cycling infrastructure of south Minneapolis make biking
            a practical daily option.
          </p>
          <p>
            By car, downtown Minneapolis is 15–20 minutes, and MSP airport
            is similarly accessible. Bus routes along Bloomington Avenue and
            Cedar Avenue provide transit connections to downtown, though
            frequency is limited. Most Field residents are car-dependent for
            their commute and daily errands — this is a neighborhood that
            works best with a car in the garage.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Field is a stable neighborhood, and the changes here are subtle
            rather than dramatic. But they&apos;re worth naming.
          </p>
        </Prose>
        <ArticleSubsection title="Gradual Price Increases">
          <Prose>
            <p>
              Field&apos;s affordability advantage has narrowed as home prices
              across Minneapolis have risen. The neighborhood is still more
              affordable than the lake neighborhoods and Southwest Minneapolis,
              but the gap is smaller than it was ten years ago. First-time
              buyers who would have found a $200,000 house here in 2015 are
              now looking at $300,000 minimum. The neighborhood remains
              accessible, but the floor is rising.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Demographic Shifts">
          <Prose>
            <p>
              Field, like much of south Minneapolis, has become modestly more
              diverse over the past two decades. The neighborhood is still
              predominantly white and homeowning, but the mix is shifting
              gradually, reflecting broader patterns of immigration and
              demographic change across the south side. Cedar Avenue, on the
              neighborhood&apos;s eastern edge, has become a more diverse
              commercial corridor, and that diversity is slowly reflected in
              the residential blocks as well.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Infrastructure Aging">
          <Prose>
            <p>
              Many of Field&apos;s homes are approaching or past the century
              mark, and the infrastructure — water mains, sewer lines,
              streets, sidewalks — is aging accordingly. The city invests in
              maintenance and replacement, but the ongoing cost of
              maintaining mid-century housing stock and infrastructure is a
              reality that homeowners factor into their calculations.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Field FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
