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
    title: "Minnehaha, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Minnehaha, Minneapolis — homes, history, Minnehaha Falls, the parkway, schools, restaurants, real estate, and what it's really like to live here in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Minnehaha",
  deck: "Named for the falls but defined by the people — a diverse, working-class neighborhood along the parkway where Minnehaha Creek meets the Mississippi, anchored by one of Minnesota's most visited natural landmarks.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Minnehaha?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Minnehaha" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Minnehaha, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~6,500", label: "Residents (Niche / US Census)" },
      { value: "$275K–$425K", label: "Median home sale price range (2025 data)" },
      { value: "14 days", label: "Average time on market (Redfin, 2025)" },
      { value: "0.8 sq mi", label: "Neighborhood area" },
      { value: "1900s–40s", label: "Era most homes were built" },
      { value: "15 min", label: "Drive to downtown Minneapolis" },
      { value: "62", label: "Walk Score" },
      { value: "78", label: "Bike Score" },
    ],
  },
  faq: [
    {
      question: "Is Minnehaha a good neighborhood in Minneapolis?",
      answer:
        "Yes. Minnehaha is a diverse, affordable neighborhood with one of the best park assets in the entire city — Minnehaha Falls and Minnehaha Regional Park. The neighborhood offers solid housing stock, good transit access via the Blue Line, and a real-world mix of people and incomes that many Minneapolis neighborhoods lack.",
    },
    {
      question: "Is Minnehaha, Minneapolis safe?",
      answer:
        "Minnehaha's safety profile is mixed. Property crime is moderate, and the neighborhood has experienced some of the same trends affecting south Minneapolis — vehicle break-ins, catalytic converter thefts. The areas closest to the park and the VA campus are generally quiet. As with most Minneapolis neighborhoods, safety varies block by block and time of day.",
    },
    {
      question: "What is Minnehaha, Minneapolis known for?",
      answer:
        "Minnehaha is known for Minnehaha Falls — a 53-foot waterfall that is one of Minnesota's most visited natural attractions — and Minnehaha Regional Park, which surrounds it. The neighborhood is also known for its proximity to the Minneapolis VA Medical Center, its diversity, its affordable housing stock, and its connection to both Minnehaha Creek and the Mississippi River.",
    },
    {
      question: "How much do homes cost in Minnehaha, Minneapolis?",
      answer:
        "Median home sale prices in Minnehaha have ranged from roughly $275,000 to $425,000 depending on the data source and season — below the citywide median, making Minnehaha one of the more affordable neighborhoods in Minneapolis. Smaller homes and those needing updates can be found under $250,000; larger renovated homes near the park may push above $450,000.",
    },
    {
      question: "Where exactly is Minnehaha in Minneapolis?",
      answer:
        "Minnehaha is in southeast Minneapolis, bounded roughly by East 46th Street to the north, the Mississippi River and Minnehaha Park to the east and south, Hiawatha Avenue (Highway 55) to the west, and Minnehaha Creek on its southern edge. It sits near the southeastern corner of the city, between the Longfellow neighborhoods and the river.",
    },
    {
      question: "Is Minnehaha Falls actually in the Minnehaha neighborhood?",
      answer:
        "Minnehaha Falls and the surrounding Minnehaha Regional Park sit on the neighborhood's eastern and southern edge. The falls themselves are within or immediately adjacent to the neighborhood boundary, depending on how precisely you draw the line. The neighborhood takes its name from the falls and the creek.",
    },
    {
      question: "What is the Minneapolis VA Medical Center?",
      answer:
        "The Minneapolis VA Medical Center is a major Veterans Affairs hospital and healthcare campus located within the Minnehaha neighborhood. It's one of the largest employers in the area and has been part of the neighborhood's identity since the early 20th century. The campus is significant in both size and function, and its presence shapes the neighborhood's character and economy.",
    },
    {
      question: "Can you take the light rail from Minnehaha?",
      answer:
        "Yes. The Blue Line (METRO) runs along Hiawatha Avenue on Minnehaha's western edge, with stations at 46th Street and 50th Street/Minnehaha Park. The Blue Line connects to downtown Minneapolis, MSP International Airport, and the Mall of America, making Minnehaha one of the better transit-connected neighborhoods in south Minneapolis.",
    },
    {
      question: "Is Minnehaha diverse?",
      answer:
        "Minnehaha is one of the more diverse neighborhoods in Minneapolis — racially, ethnically, and economically. The neighborhood includes significant populations of Somali, East African, Latino, Native American, and white residents. The mix is genuine and visible in the neighborhood's schools, businesses, and public spaces. This diversity is a defining characteristic of the neighborhood.",
    },
    {
      question: "Is Minnehaha a good place to raise a family?",
      answer:
        "Minnehaha is a reasonable choice for families who prioritize diversity, affordability, and park access. The school pipeline, access to Minnehaha Regional Park, and the Blue Line transit connection are genuine assets. The trade-offs include higher crime rates than the Southwest neighborhoods and less commercial walkability.",
    },
  ],
  nearby: [
    { name: "Longfellow", slug: "longfellow", description: "Minnehaha Creek, Lake Street commercial life, and community identity" },
    { name: "Howe", slug: "howe", description: "Quiet residential streets in the Longfellow area" },
    { name: "Hiawatha", slug: "hiawatha", description: "Blue Line access and Lake Hiawatha" },
    { name: "Nokomis", slug: "nokomis", description: "Lake Nokomis and a strong neighborhood identity" },
    { name: "Standish", slug: "standish", description: "Diverse and affordable south Minneapolis residential" },
  ],
  closing: {
    title: "What Makes Minnehaha Worth Knowing",
    paragraphs: [
      "Minnehaha has something that most neighborhoods in any city would kill for: a 53-foot waterfall cascading through a limestone gorge into a tree-lined glen that opens onto the Mississippi River. That alone would make the neighborhood remarkable. But Minnehaha is more than its falls — it's a working neighborhood where immigrant families and lifelong residents share the same blocks, where the light rail connects you to downtown and the airport, where the housing is affordable enough that owning a home is still possible for people who work ordinary jobs.",
      "It's not perfect. The safety picture is more complicated than in Southwest Minneapolis. The commercial life is thinner. The infrastructure is aging. But the combination of diversity, affordability, park access, and transit connectivity makes Minnehaha one of the more honest neighborhoods in Minneapolis — a place that looks like what a city actually is, not what a real estate brochure wishes it were.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          In spring, when the snow melts fast and the rain comes heavy,
          Minnehaha Falls roars. You can hear it from the parking lot — a
          sound that doesn&apos;t belong in a city, the sound of 53 feet of
          water dropping off a limestone ledge into a gorge lined with
          cottonwoods and oaks. Tourists line up at the overlook with their
          phones. Kids press against the railing. The mist reaches the
          walkway. And then you turn around and walk back up the hill, past
          the VA hospital and the modest bungalows and the Somali market on
          the corner, and you remember that this isn&apos;t a state park —
          it&apos;s a neighborhood. A real one, with all the complexity and
          grit that implies. The falls are the headline. The neighborhood
          is the story.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/minnehaha/hero.webp"
        alt="Minnehaha Falls in full spring flow within the Minneapolis neighborhood"
        caption="Minnehaha Falls — the neighborhood's most famous landmark"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Minnehaha, Minneapolis?">
        <Prose>
          <p>
            Minnehaha is a neighborhood in southeast Minneapolis, bounded
            roughly by East 46th Street to the north, the Mississippi River
            and Minnehaha Regional Park to the east and south, Hiawatha
            Avenue (Highway 55) to the west, and Minnehaha Creek along its
            southern edge. It covers approximately 0.8 square miles and is
            home to roughly 6,500 residents. The neighborhood is part of the
            greater Longfellow community area and borders{" "}
            <Link href="/neighborhoods/howe" className="text-[#2a9d8f] hover:underline">
              Howe
            </Link>{" "}
            to the north,{" "}
            <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
              Hiawatha
            </Link>{" "}
            to the west, and the city&apos;s southeastern boundary along the
            river.
          </p>
          <p>
            The neighborhood&apos;s name comes from Minnehaha Creek and
            Minnehaha Falls — the 53-foot waterfall that is one of
            Minnesota&apos;s most visited natural attractions. The word
            &quot;Minnehaha&quot; is Dakota, commonly translated as
            &quot;curling water&quot; or &quot;waterfall.&quot; The falls,
            the creek, and the regional park that surrounds them are the
            neighborhood&apos;s defining geographic features — but
            Minnehaha&apos;s identity extends well beyond the park.
          </p>
          <p>
            Two other institutions shape the neighborhood: the Minneapolis
            VA Medical Center, a major veterans&apos; hospital campus that
            occupies a significant portion of the neighborhood&apos;s
            footprint, and the Blue Line light rail, which runs along
            Hiawatha Avenue on the western edge and provides direct transit
            connections to downtown Minneapolis, MSP Airport, and the Mall
            of America. The VA has been part of the neighborhood since the
            early 20th century; the Blue Line arrived in 2004 and reshaped
            the neighborhood&apos;s transit profile.
          </p>
          <p>
            Minnehaha is also one of the most diverse neighborhoods in
            Minneapolis — racially, ethnically, and economically. The
            diversity is not theoretical; it&apos;s visible on the streets,
            in the schools, at the businesses. This is a neighborhood where
            Somali groceries sit alongside Vietnamese restaurants alongside
            long-established hardware stores, and where the block-by-block
            mix of people looks more like America than most of Minneapolis
            manages.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Minnehaha Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/minnehaha/neighborhood-sign.webp"
          alt="Minnehaha neighborhood sign in Minneapolis"
          caption="The Minnehaha neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Minnehaha History & Origins">
        <Prose>
          <p>
            Minnehaha Falls and the surrounding area were sacred to the
            Dakota people long before European settlement. The falls were a
            gathering place, a landmark, and a site of spiritual significance.
            The Dakota name — often translated as &quot;curling water&quot;
            — reflects an intimate, centuries-long relationship with this
            landscape. The forced removal of the Dakota in the 1850s and
            1860s severed that relationship, but the falls remain — the
            oldest continuous landmark in a neighborhood that has been
            continuously inhabited, in one way or another, for far longer
            than the city that now surrounds it.
          </p>
          <p>
            Minnehaha Falls became a tourist destination almost immediately
            after European settlement. Henry Wadsworth Longfellow&apos;s 1855
            poem &quot;The Song of Hiawatha&quot; — which features Minnehaha
            as a character (and was inspired by the falls, though Longfellow
            never visited them) — made the site nationally famous. Minnehaha
            State Park was established in 1889, later becoming Minnehaha
            Regional Park under the Minneapolis Park Board. The park&apos;s
            public status has been a defining feature of the neighborhood
            ever since — a major green space that draws visitors from across
            the region while also serving as the backyard for the people who
            live next to it.
          </p>
          <p>
            The residential neighborhood developed in the early 20th century,
            with most homes built between the 1900s and the 1940s. The
            Minneapolis VA Medical Center — originally the Fort Snelling
            Veterans Home — has occupied a campus in the neighborhood since
            1887, making it one of the area&apos;s oldest institutions. The
            VA campus is a significant land user and employer, and its
            presence has shaped the neighborhood&apos;s character and
            economy for over a century.
          </p>
          <p>
            The Blue Line light rail, which opened in 2004 along Hiawatha
            Avenue, brought modern transit infrastructure to the
            neighborhood&apos;s western edge. The 46th Street and 50th Street
            stations provide direct connections to downtown, the airport,
            and Bloomington — a transit asset that has gradually reshaped
            development patterns and property values along the corridor.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Minnehaha">
        <Prose>
          <p>
            Living in Minnehaha means living in a neighborhood that contains
            multitudes — sometimes comfortably, sometimes not. The diversity
            here is genuine and observable. The neighborhood includes
            significant Somali and East African communities, Latino families,
            Native American residents, long-established white working-class
            homeowners, and a growing contingent of younger buyers drawn by
            the affordability and the park access. The mix creates a
            neighborhood that feels more representative of contemporary
            Minneapolis than the more homogeneous lake neighborhoods to the
            west.
          </p>
          <p>
            The housing stock is modest — bungalows, Foursquares, Cape Cods,
            and a range of smaller homes from the early-to-mid 20th century.
            The blocks closest to the park and the river tend to be the most
            desirable and the most expensive; the blocks closer to Hiawatha
            Avenue are more affordable and feel the effects of the highway&apos;s
            noise and traffic more directly. The contrast within the
            neighborhood is sharper than in most — a quiet, tree-lined block
            near the falls can feel like a different world from a noisy
            intersection near the light rail station.
          </p>
          <p>
            The VA hospital campus is a constant presence — a large
            institutional footprint in the middle of a residential
            neighborhood. For some residents, the VA is a source of
            employment and community connection. For others, it&apos;s
            simply part of the landscape — a campus you drive past on the
            way to the park. The veteran population in the neighborhood is
            notable and contributes to a demographic mix that&apos;s unusual
            for Minneapolis.
          </p>
          <p>
            The park is the shared asset that ties the neighborhood together.
            Regardless of background, income, or how long they&apos;ve lived
            here, Minnehaha residents share the falls, the creek trail, the
            river bluffs, and the parkland. On a Sunday afternoon in July,
            the park contains a cross-section of Minneapolis that few other
            public spaces manage — families grilling, kids playing in the
            creek wading area, joggers on the trail, tourists at the falls,
            and neighbors who nod at each other because they&apos;ve been
            passing on the same path for years.
          </p>
        </Prose>
        <Quote
          text="This neighborhood has a waterfall, a river, a creek, the light rail, and houses that a normal person can afford. Tell me what&apos;s not to like."
          cite="Minnehaha homeowner, 2024"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Minnehaha Food, Drink & Local Spots">
        <Prose>
          <p>
            Minnehaha&apos;s dining scene reflects its diversity — the
            options are less polished than what you&apos;ll find in Uptown
            or Southwest Minneapolis, but more interesting and more varied.
          </p>
        </Prose>

        <ArticleSubsection title="The Go-To Spots">
          <PlaceCardComponent place={{ name: "Sea Salt Eatery", tag: "Seafood", price: "$$", url: "https://seasalteatery.wordpress.com", description: "Inside Minnehaha Regional Park. A seasonal, outdoor seafood restaurant that draws crowds from across the Twin Cities. The fish tacos, the po' boys, the location overlooking the creek — it's one of the best warm-weather dining experiences in Minneapolis. Lines are long on weekends. Worth it." }} />
          <PlaceCardComponent place={{ name: "Minnehaha Falls Park Concessions", tag: "Park Dining", price: "$", description: "Seasonal options in and around the park area. Casual, accessible, and part of the park experience." }} />
          <PlaceCardComponent place={{ name: "Hiawatha Avenue Corridor", tag: "Diverse Dining", description: "Hiawatha Avenue on the neighborhood's western edge hosts a range of restaurants — Somali, East African, Mexican, Vietnamese, and American. The options are unpretentious, affordable, and reflect the neighborhood's demographic reality." }} />
          <PlaceCardComponent place={{ name: "Local Ethnic Groceries", tag: "Grocery & Market", price: "$", description: "Small Somali, East African, and Latino grocery stores along the commercial corridors provide specialty ingredients and prepared foods that you won't find at a standard supermarket. These are neighborhood institutions, not tourist attractions." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Also Worth Knowing">
          <Prose>
            <p>
              The{" "}
              <Link href="/neighborhoods/longfellow" className="text-[#2a9d8f] hover:underline">
                Longfellow
              </Link>{" "}
              commercial node along Lake Street — a short distance north —
              offers additional dining, coffee, and shopping options. The
              Blue Line provides quick access to downtown dining for
              occasions that call for something different. For everyday
              groceries, Cub Foods on Hiawatha is the primary full-service
              option.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors */}
      <ArticleSection id="outdoors" title="Parks & Outdoors in Minnehaha">
        <Prose>
          <p>
            Minnehaha&apos;s outdoor access is extraordinary — not just good
            for a neighborhood, but genuinely exceptional for a city anywhere
            in the country.
          </p>
        </Prose>
        <ArticleSubsection title="Minnehaha Regional Park & Falls">
          <Prose>
            <p>
              Minnehaha Regional Park is a 193-acre park centered around
              Minnehaha Falls — a 53-foot waterfall where Minnehaha Creek
              drops off a limestone ledge into a gorge that opens toward
              the Mississippi River. The falls are spectacular in spring
              and early summer when water volume is high, and dramatic in
              winter when they freeze into a curtain of ice. The park
              includes hiking trails, picnic areas, a wading pool near the
              creek, a bandshell, the Sea Salt Eatery, the John H. Stevens
              House (a historic structure), and trails that connect to the
              Mississippi River gorge. It&apos;s one of the most visited
              parks in Minnesota, drawing hundreds of thousands of visitors
              annually.
            </p>
          </Prose>
          <ImageSlot
            src="/images/neighborhoods/minnehaha/minnehaha-park.webp"
            alt="Minnehaha Regional Park creek and walking trails"
            caption="Minnehaha Regional Park — 193 acres along the creek and the river"
          />
        </ArticleSubsection>
        <ArticleSubsection title="Mississippi River Gorge">
          <Prose>
            <p>
              The Mississippi River forms the eastern boundary of the
              neighborhood, and the river gorge — the only true gorge on the
              entire Mississippi — provides dramatic bluff-top views, hiking
              trails, and a connection to the broader Mississippi River trail
              system. The confluence of Minnehaha Creek and the Mississippi
              is one of the most ecologically and historically significant
              sites in the Twin Cities.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Minnehaha Creek Trail">
          <Prose>
            <p>
              The Minnehaha Creek Trail follows the creek for miles — from
              Lake Minnetonka in the west through a string of Minneapolis
              neighborhoods to the falls in the east. The Minnehaha
              neighborhood is where the trail reaches its dramatic conclusion
              at the falls. Biking and walking the creek trail from the
              western lakes to the falls and then down to the river is one
              of the great urban outdoor experiences in the Midwest.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Minnehaha Schools">
        <Prose>
          <p>
            The Minnehaha neighborhood is served by Minneapolis Public
            Schools, with elementary options that vary based on the
            district&apos;s assignment zones and magnet system. The schools
            in this area tend to be more diverse than those in Southwest
            Minneapolis — reflecting the neighborhood&apos;s demographic
            composition.
          </p>
          <p>
            High school options include Roosevelt Senior High School and
            South Senior High School, depending on the specific address and
            the district&apos;s boundaries. Minneapolis&apos;s magnet school
            system provides additional options for families who want to
            explore alternatives beyond the default assignment.
          </p>
          <p>
            The school picture in Minnehaha is more complex and less uniform
            than in the Southwest Minneapolis family neighborhoods. The
            diversity of the student body is a strength; the variability
            of school quality and the navigating-the-system challenge are
            realities that families should be prepared for.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Minnehaha Real Estate & Housing">
        <Prose>
          <p>
            Minnehaha is one of the more affordable neighborhoods in
            Minneapolis for homebuyers, with median sale prices ranging from
            roughly $275,000 to $425,000 — below the citywide median and
            well below the Southwest Minneapolis neighborhoods. This
            affordability is the primary driver of buyer interest, along with
            the park access and transit connectivity.
          </p>
          <p>
            The housing stock is predominantly early-20th-century
            single-family homes — bungalows, Foursquares, Cape Cods, and a
            mix of smaller workers&apos; cottages and larger family homes.
            The condition and quality vary more block by block than in the
            more uniform Southwest neighborhoods. Homes near the park tend
            to be better-maintained and command higher prices; homes closer
            to Hiawatha Avenue are more affordable and more affected by
            highway noise.
          </p>
          <p>
            Homes sell quickly — about 14 days on average — reflecting strong
            demand at the price point. The market is competitive for
            move-in-ready homes, and the combination of affordability, park
            access, and Blue Line connectivity creates a value proposition
            that attracts first-time buyers, young families, and investors.
          </p>
        </Prose>
        <Quote text="You get a waterfall and the light rail and a house for under $350,000. The Southwest neighborhoods can&apos;t touch that combination." cite="South Minneapolis real estate agent, 2025" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Minnehaha">
        <Prose>
          <p>
            Minnehaha earns a Walk Score of 62 — moderately walkable, with
            commercial options along the corridors at the edges but limited
            walkable amenities within the residential core. The Bike Score
            of 78 reflects strong trail connections — the Minnehaha Creek
            Trail, the Mississippi River Trail, and the broader south
            Minneapolis bike network.
          </p>
          <p>
            The Blue Line light rail is Minnehaha&apos;s major transit asset.
            Stations at 46th Street and 50th Street/Minnehaha Park provide
            direct service to downtown Minneapolis (about 15 minutes), MSP
            International Airport (about 10 minutes), and the Mall of
            America. This transit connectivity is a genuine differentiator —
            few south Minneapolis neighborhoods have rail access this direct.
          </p>
          <p>
            By car, downtown is about 15 minutes, and the airport is even
            closer. Hiawatha Avenue (Highway 55) provides a direct route
            north-south, though it functions more as a highway than a
            neighborhood street. The highway&apos;s presence is a trade-off —
            fast car access at the cost of noise, pedestrian barriers, and
            the psychological division of the neighborhood.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Minnehaha is a neighborhood in motion — not the dramatic,
            headline-grabbing kind, but the gradual shifts that reshape a
            community over years.
          </p>
        </Prose>
        <ArticleSubsection title="Gentrification Pressure">
          <Prose>
            <p>
              Minnehaha&apos;s affordability, park access, and Blue Line
              proximity have made it a target for the same gentrification
              dynamics that have reshaped other Minneapolis neighborhoods.
              Home prices are rising. Renovations are upgrading formerly
              modest homes into something more expensive. New buyers with
              higher incomes are displacing long-term residents who can no
              longer compete in the market. The diversity that defines the
              neighborhood is, in part, a product of its affordability — and
              as affordability erodes, the diversity is at risk.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Hiawatha Avenue as Divider">
          <Prose>
            <p>
              Hiawatha Avenue (Highway 55) is both a transit corridor and a
              barrier. The light rail runs along it, providing valuable
              connectivity. But the highway also divides the neighborhood
              from the{" "}
              <Link href="/neighborhoods/hiawatha" className="text-[#2a9d8f] hover:underline">
                Hiawatha
              </Link>{" "}
              neighborhood to the west, creates noise and pollution for
              adjacent blocks, and makes pedestrian and bicycle crossing
              dangerous in some locations. The trade-off between transit
              access and livability is a daily reality for residents on the
              western edge.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Park Usage and Tourism">
          <Prose>
            <p>
              Minnehaha Falls draws hundreds of thousands of visitors
              annually — a volume of tourism that brings economic activity
              but also creates parking pressure, traffic, litter, and the
              general wear of high-volume public use in a residential setting.
              The blocks closest to the park entrances feel the effects most
              directly. The Park Board invests in maintenance and
              infrastructure, but the tension between serving a regional
              attraction and maintaining a livable neighborhood is inherent.
            </p>
          </Prose>
        </ArticleSubsection>
        <ArticleSubsection title="Safety Concerns">
          <Prose>
            <p>
              Minnehaha&apos;s safety profile is more complex than the
              Southwest Minneapolis neighborhoods. Property crime is a
              consistent concern, and certain blocks — particularly those
              near commercial corridors and transit stations — experience
              higher incident rates. The neighborhood is not unsafe by
              national standards, but the comparison to quieter parts of
              Minneapolis is unfavorable. Residents adjust — locking cars,
              using cameras, building block-level relationships — but the
              adjustment itself is a quality-of-life factor.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Minnehaha FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
