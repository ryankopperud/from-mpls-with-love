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
    title: "Logan Park, Minneapolis Neighborhood Guide (2026)",
    description:
      "Everything you need to know about Logan Park, Minneapolis — the Nordeast arts district, Art-A-Whirl, breweries, Central Avenue, real estate, gentrification, and what it's really like to live in the creative heart of Northeast Minneapolis in 2026.",
  },
  kicker: "Minneapolis Neighborhood",
  headline: "Logan Park",
  deck: "The creative engine of Nordeast — where the largest open studio tour in the country started in converted grain elevators and warehouse lofts, breweries outnumber banks, Central Avenue still smells like kielbasa and cardamom, and the artists who made this neighborhood famous are wondering how much longer they can afford to stay.",
  lastUpdated: "Last updated: March 2026 · A complete neighborhood guide",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  toc: [
    { id: "overview", label: "What is Logan Park?" },
    { id: "neighborhood-sign", label: "Neighborhood Sign" },
    { id: "facts", label: "At a Glance" },
    { id: "history", label: "History & Origins" },
    { id: "character", label: "Living in Logan Park" },
    { id: "food", label: "Food & Local Spots" },
    { id: "outdoors", label: "Parks & Outdoors" },
    { id: "schools", label: "Schools" },
    { id: "real-estate", label: "Real Estate" },
    { id: "getting-around", label: "Getting Around" },
    { id: "tensions", label: "What's Changing" },
    { id: "faq", label: "FAQ" },
  ],
  stats: {
    label: "Logan Park, Minneapolis — Key Stats (2025–2026)",
    items: [
      { value: "~3,200", label: "Residents (US Census / ACS estimates)" },
      { value: "$300K–$420K", label: "Median home sale price (2025 data)" },
      { value: "$1,100–$1,500", label: "Typical 1BR apartment rent (2025)" },
      { value: "72", label: "Walk Score" },
      { value: "88", label: "Bike Score" },
      { value: "55", label: "Transit Score" },
      { value: "800+", label: "Artist studios in the Northeast Arts District" },
      { value: "35,000+", label: "Visitors during Art-A-Whirl weekend" },
      { value: "1858", label: "Year the neighborhood was first settled" },
    ],
  },
  faq: [
    {
      question: "Is Logan Park a good neighborhood in Minneapolis?",
      answer:
        "Logan Park is one of the most interesting neighborhoods in Minneapolis — creative, walkable along its commercial corridors, loaded with breweries and galleries, and more affordable than comparable neighborhoods south of the river. It's particularly appealing to artists, young professionals, and anyone who values cultural energy over manicured lawns. That said, it's changing fast: rents are rising, new luxury construction is replacing industrial buildings, and the gritty creative character that made Logan Park famous is under real pressure. If you want a neighborhood with personality and don't need everything polished, Logan Park is outstanding.",
    },
    {
      question: "Is Logan Park, Minneapolis safe?",
      answer:
        "Logan Park is generally considered safe by Minneapolis standards. Violent crime rates are below the city average, and most residents feel comfortable walking the neighborhood day and night. Property crime — bike theft, car break-ins, occasional catalytic converter theft — is a reality, as it is across Northeast Minneapolis. The neighborhood's mix of residential streets, active commercial corridors, and foot traffic from the arts district creates a level of natural surveillance that contributes to safety. Exercise normal urban awareness, lock your bike with a U-lock, and you'll be fine.",
    },
    {
      question: "What is Art-A-Whirl?",
      answer:
        "Art-A-Whirl is the largest open studio tour in the United States, held annually over a weekend in mid-May. It's organized by the Northeast Minneapolis Arts Association (NEMAA) and involves hundreds of artists opening their studios to the public across the Northeast Arts District, with Logan Park at its epicenter. The event draws over 35,000 visitors and transforms the neighborhood into a massive, walkable gallery — studios in converted warehouses, pop-up shows in parking lots, live music, food trucks, and brewery events. It started in 1996 with a handful of studios and has grown into one of the defining cultural events in the Twin Cities.",
    },
    {
      question: "What breweries are in or near Logan Park?",
      answer:
        "Logan Park and the surrounding Northeast Minneapolis neighborhoods have one of the highest concentrations of craft breweries in the Midwest. Within or immediately adjacent to Logan Park: Indeed Brewing Company (711 15th Ave. NE), Bauhaus Brew Labs (1315 Tyler St. NE), Fair State Brewing Cooperative (2506 Central Ave. NE), and Able Seedhouse + Brewery (1121 Quincy St. NE). Slightly farther out but very much part of the ecosystem: 612Brew, Dangerous Man Brewing, Sociable Cider Werks, and Surly Brewing (in Prospect Park). The brewery scene here is social infrastructure as much as nightlife — taprooms function as neighborhood living rooms.",
    },
    {
      question: "How much does it cost to live in Logan Park?",
      answer:
        "Logan Park straddles affordable and gentrifying. One-bedroom apartments rent for roughly $1,100–$1,500 per month, with newer construction pushing the top of that range. Two-bedroom units run $1,400–$2,000. For buyers, single-family homes — mostly early 20th century workers' cottages and bungalows — sell in the $300,000–$420,000 range. Duplexes and small multi-family properties run $350,000–$550,000. Condos in converted industrial buildings can range from $200,000 to $400,000. Prices have risen significantly over the past decade as the arts district reputation and brewery culture have drawn demand.",
    },
    {
      question: "What is Central Avenue in Northeast Minneapolis?",
      answer:
        "Central Avenue is the main commercial corridor running through Northeast Minneapolis, including Logan Park. It's one of the most culturally diverse commercial streets in the Twin Cities, with a mix of Polish delis, Middle Eastern bakeries, Mexican taquerias, Vietnamese restaurants, East African shops, and increasingly, craft cocktail bars and brunch spots. The avenue reflects the neighborhood's layered immigrant history — each wave of newcomers added to the commercial ecosystem rather than replacing what came before, though gentrification is beginning to change that dynamic.",
    },
    {
      question: "Where exactly is Logan Park in Minneapolis?",
      answer:
        "Logan Park is in Northeast Minneapolis, roughly bounded by Broadway Street NE to the south, Lowry Avenue NE to the north, Central Avenue NE to the west, and the railroad corridor near Johnson Street NE to the east. It sits at the heart of the Northeast Minneapolis Arts District and is surrounded by the neighborhoods of St. Anthony West, Sheridan, Northeast Park, and Holland. The neighborhood is named for Logan Park, a city park at 690 13th Avenue NE.",
    },
    {
      question: "What is the Northeast Minneapolis Arts District?",
      answer:
        "The Northeast Minneapolis Arts District is the largest concentration of working artists in the Upper Midwest, with over 800 studios spread across converted warehouses, industrial buildings, and purpose-built studio spaces. The district spans several Northeast neighborhoods but is centered in Logan Park, where buildings like the Northrup King Building, the California Building, the Casket Arts Building, and the Solar Arts Building house hundreds of painters, sculptors, printmakers, photographers, ceramicists, and mixed-media artists. The district was formally designated by the city and is anchored by NEMAA (Northeast Minneapolis Arts Association), which organizes Art-A-Whirl and advocates for artist workspace preservation.",
    },
    {
      question: "Is Logan Park walkable?",
      answer:
        "Moderately. Logan Park earns a Walk Score around 72 — you can walk to restaurants, bars, and shops along Central Avenue and 13th Avenue NE, but the neighborhood's industrial pockets and spread-out layout mean some errands require a bike or car. The Bike Score of 88 is more telling: Northeast Minneapolis is exceptionally bikeable, with good trail connections and relatively flat terrain. Most Logan Park residents use a combination of biking and driving, with transit as a supplement rather than a primary mode.",
    },
    {
      question: "Is Logan Park gentrifying?",
      answer:
        "Yes, and the irony is acute. Artists moved into Logan Park's cheap industrial spaces in the 1990s and 2000s, built a nationally recognized arts district, attracted breweries and restaurants, and made the neighborhood desirable — which raised property values and rents to the point where many artists can no longer afford the studios that created the district's reputation. New luxury apartments and condos are replacing some of the older industrial buildings. Long-time working-class residents, many from the neighborhood's Polish, Ukrainian, and Lebanese communities, are also feeling the pressure. The gentrification here isn't theoretical — it's the central tension of the neighborhood's present and future.",
    },
    {
      question: "What is the Nordeast accent?",
      answer:
        "The 'Nordeast' accent is a distinctive regional dialect associated with Northeast Minneapolis's Eastern European immigrant communities — particularly Polish and Ukrainian families who settled here in the late 19th and early 20th centuries. It's characterized by a particular vowel pronunciation (think 'Nordeast' instead of 'Northeast') and cadences that reflect the neighborhood's working-class, immigrant roots. The accent is fading as the original communities age and the neighborhood's demographics shift, but it remains a point of cultural identity and affectionate local humor. You'll still hear it at Surdyk's, at the VFW, and from longtime residents who grew up when the neighborhood was more kielbasa than IPA.",
    },
  ],
  nearby: [
    { name: "St. Anthony West", slug: "st-anthony-west", description: "Historic mills and riverfront living near St. Anthony Main" },
    { name: "Sheridan", slug: "sheridan", description: "Residential Nordeast with Dangerous Man and the Lowry corridor" },
    { name: "Northeast Park", slug: "northeast-park", description: "Quieter residential streets north of the arts district" },
    { name: "Nicollet Island - East Bank", slug: "nicollet-island-east-bank", description: "Island living and the Hennepin Avenue bridge to downtown" },
    { name: "Marcy Holmes", slug: "marcy-holmes", description: "University-adjacent and Dinkytown energy" },
    { name: "Holland", slug: "holland", description: "Working-class Nordeast east of Central Avenue" },
  ],
  closing: {
    title: "What Makes Logan Park Irreplaceable",
    paragraphs: [
      "There are neighborhoods in Minneapolis with better restaurants, better schools, better park access, more polish. Logan Park has never competed on those terms. What it offers is rarer and harder to engineer than any of that — a place where people actually make things. Not as a lifestyle brand or an Instagram aesthetic, but as a daily practice carried out in drafty studios with north-facing windows and paint on the floor. The painters and printmakers and ceramicists and metalworkers who filled these old industrial buildings didn't move here because it was trendy. They moved here because it was cheap and the light was good and nobody bothered them. They built something remarkable almost by accident — a creative district with national recognition, anchored by Art-A-Whirl, sustained by community, and threatened now by the very success it generated.",
      "The question Logan Park faces is whether a neighborhood can survive its own story. The artists made it interesting; the breweries made it fun; the developers noticed; and now the economics are squeezing out the people who created the thing everyone wants to be near. That's not unique to Logan Park — it's the oldest story in American urbanism. But it stings more here because the neighborhood never pretended to be anything it wasn't. It was working-class and immigrant and creative, and it wore all of that openly, without apology. Whether it can hold onto that honesty as the money arrives is the only question that matters. Walk through the Northrup King Building on an Art-A-Whirl Saturday — past the open studios and the spilled wine and the conversations between strangers about a piece of art that someone made in this room, in this light — and you'll understand what's at stake.",
    ],
  },
};

function Content() {
  return (
    <>
      {/* Hook */}
      <Prose>
        <p>
          On the third weekend of May, something happens in Logan Park that
          doesn&apos;t happen anywhere else in the country. Thirty-five thousand
          people pour into a grid of converted warehouses and old industrial
          buildings to look at art — not in a museum, not in a gallery with
          white walls and price lists, but in the studios where it was actually
          made. They climb freight elevators in the Northrup King Building, wander
          through four floors of open doors — a painter here, a printmaker there,
          a ceramicist pulling pieces from a kiln in the hallway — and spill out
          onto loading docks where someone has set up a bar and a band is playing
          in a parking lot. This is Art-A-Whirl, the largest open studio tour in
          the United States, and it has been happening here since 1996. The rest
          of the year, Logan Park is quieter but no less itself — a neighborhood
          of working artists and old-school Nordeast families, of taprooms in
          former machine shops and pierogies alongside pho. It is the creative
          heart of Northeast Minneapolis, and it is fighting to stay that way.
        </p>
      </Prose>

      <ImageSlot
        src="/images/neighborhoods/logan-park/hero.webp"
        alt="Converted industrial buildings in the Logan Park neighborhood of Northeast Minneapolis, with Art-A-Whirl banners and foot traffic"
        caption="Logan Park — the epicenter of Minneapolis's Northeast Arts District and home to Art-A-Whirl"
        preload
      />

      {/* Overview */}
      <ArticleSection id="overview" title="What is Logan Park, Minneapolis?">
        <Prose>
          <p>
            Logan Park is a compact neighborhood in Northeast Minneapolis —
            &ldquo;Nordeast&rdquo; to anyone who grew up here — roughly bounded
            by Broadway Street NE to the south, Lowry Avenue NE to the north,
            Central Avenue NE to the west, and the railroad corridor near
            Johnson Street NE to the east. With approximately 3,200 residents,
            it is one of the smaller neighborhoods in the city by population,
            but its cultural footprint is wildly disproportionate to its size.
            Logan Park is the nucleus of the Northeast Minneapolis Arts
            District, the largest concentration of working artists in the Upper
            Midwest, and the home base of Art-A-Whirl, a three-day open studio
            event that has become one of the most important visual arts events
            in the region.
          </p>
          <p>
            The neighborhood is named for Logan Park itself, a city park at 690
            13th Avenue NE that serves as a modest green anchor in a landscape
            dominated by converted industrial buildings, workers&apos;
            cottages, and the kind of light-industrial architecture that urban
            neighborhoods either demolish or reinvent. Logan Park chose
            reinvention. Beginning in the 1990s, artists priced out of other
            parts of the city began colonizing the neighborhood&apos;s
            abandoned and underused warehouses, grain elevators, and factory
            buildings — drawn by cheap rents, high ceilings, freight elevators
            that could move sculpture, and the particular quality of north
            light that pours through industrial windows. They were followed,
            eventually, by breweries, restaurants, and developers. That
            sequence — artists first, capital second — is the defining story
            of Logan Park, and the source of its deepest tension.
          </p>
          <p>
            If you want to understand what Northeast Minneapolis actually is —
            not the brunch-and-brewery version marketed to suburbanites, but
            the layered, complicated, genuinely creative place underneath —
            Logan Park is where you start.
          </p>
        </Prose>
      </ArticleSection>

      {/* Neighborhood Sign */}
      <ArticleSection id="neighborhood-sign" title="Logan Park Neighborhood Sign">
        <ProtectedImage
          src="/images/neighborhoods/logan-park/neighborhood-sign.webp"
          alt="Logan Park neighborhood sign in Northeast Minneapolis"
          caption="The Logan Park neighborhood sign"
        />
      </ArticleSection>

      {/* Stats */}
      <div id="facts">
        <StatsBox label={data.stats.label} stats={data.stats.items} />
      </div>

      {/* History */}
      <ArticleSection id="history" title="Logan Park History & Origins">
        <Prose>
          <p>
            The land that is now Logan Park sits within the traditional homeland
            of the Dakota people — specifically the Mdewakanton and Wahpekute
            bands, for whom the Mississippi River corridor and the falls at
            St. Anthony were sites of deep spiritual and practical
            significance. The river here — powerful, turbulent, falling through
            the only major waterfall on the entire Mississippi — was a gathering
            place, a fishery, and a center of trade long before European
            arrival. The Dakota name for the falls, Owámniyomni, translates
            roughly to &ldquo;whirlpool&rdquo; — a description of the
            churning water at the base of the cataract that would later be
            harnessed to power the flour mills that built Minneapolis.
          </p>
          <p>
            European-American settlement of the east bank of the Mississippi
            began in the 1840s and 1850s, centered on the village of St.
            Anthony, which would later be absorbed into Minneapolis. The area
            that became Northeast Minneapolis — and Logan Park within it — was
            settled primarily by waves of European immigrants drawn by
            industrial jobs: Swedes and Norwegians first, then Poles, Ukrainians,
            Germans, Czechs, Slovaks, and Lebanese. This wasn&apos;t the
            Minneapolis of Lake of the Isles mansions and Episcopalian church
            suppers. This was the working side of the river — the side where
            people ran lathes and poured iron and packed meat and came home
            smelling like the job.
          </p>
          <p>
            The Polish and Ukrainian communities left the deepest imprint. By
            the early 1900s, Northeast Minneapolis had become the center of
            Polish-American life in the Upper Midwest. Holy Cross Church,
            founded in 1886 on University Avenue NE, served as the spiritual
            anchor of the Polish community, with masses in Polish that
            continued well into the latter half of the 20th century. The
            Ukrainian community built its own churches — St. Constantine&apos;s
            Ukrainian Catholic Church among them — and established cultural
            organizations that preserved language, music, and traditions across
            generations. The Lebanese community, concentrated along the
            commercial corridors, opened bakeries, groceries, and restaurants
            that still operate today. These weren&apos;t communities that
            assimilated quickly or quietly. They held onto their languages, their
            food, their faith, their accents. The &ldquo;Nordeast&rdquo;
            identity — the distinctive vowels, the stubborn loyalty, the
            unapologetic working-class pride — grew directly out of this
            immigrant bedrock.
          </p>
          <p>
            The neighborhood&apos;s built environment reflected its industrial
            economy. Small workers&apos; cottages and duplexes filled the
            residential blocks — modest frame houses with narrow lots, built
            for families who walked to work at the nearby factories,
            foundries, and machine shops. The commercial and industrial
            buildings were more substantial: brick warehouses, grain elevators,
            manufacturing plants, and rail-served facilities that processed
            and distributed goods across the Upper Midwest. These buildings
            were built for function, not beauty — but they were built with
            materials and construction methods that would prove remarkably
            durable, which is why so many of them are still standing today,
            reborn as artist studios and brewery taprooms.
          </p>
          <p>
            The mid-20th century brought the same forces that reshaped urban
            neighborhoods across America: suburban flight, deindustrialization,
            disinvestment. Factories closed. Younger generations moved to the
            suburbs. The population aged. By the 1970s and 1980s, Logan Park
            and the surrounding Nordeast neighborhoods were characterized by
            empty industrial buildings, aging infrastructure, and a population
            that was older, smaller, and poorer than it had been a generation
            earlier. Property values were low. Vacancy was high. The
            neighborhood had the look and feel of a place that the broader
            city had stopped thinking about.
          </p>
          <p>
            And that, paradoxically, is what saved it. Empty industrial
            buildings with cheap rents and good bones are exactly what artists
            need — space, affordability, and the freedom that comes from
            nobody paying attention. Beginning in the late 1980s and
            accelerating through the 1990s, artists began moving into Logan
            Park&apos;s vacant warehouses and industrial spaces. Some were
            formal leases; some were more informal arrangements with building
            owners who were glad to have anyone paying rent at all. The
            Northrup King Building, a massive industrial complex at 1500
            Jackson Street NE originally built as a seed company headquarters,
            became the anchor — its sprawling floors subdivided into studios
            that eventually housed over 300 artists. The California Building,
            the Casket Arts Building (a former casket factory, because
            Nordeast), the Grain Belt Bottling House, and a constellation of
            smaller spaces followed. By the mid-1990s, Logan Park had
            developed the critical mass of working artists that would define
            its identity for the next three decades.
          </p>
          <p>
            Art-A-Whirl launched in 1996, organized by the newly formed
            Northeast Minneapolis Arts Association (NEMAA). The first year was
            modest — a few dozen studios opening their doors over a weekend.
            But the concept was irresistible: instead of asking people to come
            to a gallery, bring them to the place where the art is actually
            made. Let them see the mess, the process, the half-finished
            canvases and the kilns still warm. The event grew every year,
            eventually drawing tens of thousands of visitors and establishing
            Northeast Minneapolis — and Logan Park in particular — as one of
            the most significant arts districts in the country. It was, and
            remains, the single most important thing that ever happened to the
            neighborhood&apos;s identity.
          </p>
        </Prose>
      </ArticleSection>

      {/* Character */}
      <ArticleSection id="character" title="Living in Logan Park">
        <Prose>
          <p>
            Living in Logan Park means living in a neighborhood that is
            simultaneously two things: the Nordeast of memory — working-class,
            immigrant, unpretentious, a little rough around the edges — and
            the Nordeast of the present, where a craft cocktail costs $14 and
            the new apartment building has a rooftop dog park. The tension
            between these two versions is not subtle. You can see it on a
            single block: a 1920s workers&apos; cottage with a chain-link fence
            next to a newly renovated duplex with a Tesla in the driveway,
            across from a building where a sculptor has been renting a studio
            for fifteen years and is wondering about next year&apos;s lease.
          </p>
          <p>
            The residential fabric is a mix of those early 20th century
            workers&apos; cottages — small, sturdy, typically one or
            one-and-a-half stories with modest yards — alongside duplexes,
            small apartment buildings, and increasingly, new construction
            townhomes and mid-rise apartments. The houses are not
            architecturally distinguished in the way that, say, the Victorians
            in Lowry Hill or the Craftsman bungalows in Longfellow are. They
            are plain, practical buildings that were designed to house families
            who worked with their hands, and they have a particular dignity
            that comes from that honesty. Many have been well-maintained by
            multi-generational families; others have been updated by new
            owners with more capital than the original occupants ever dreamed
            of. The neighborhood&apos;s streets are quieter than you might
            expect, given its cultural reputation — most of the energy is
            concentrated along Central Avenue, 13th Avenue NE, and in the
            industrial-to-creative buildings scattered through the
            neighborhood.
          </p>
          <p>
            The arts community is the neighborhood&apos;s most visible
            identity, but it is not the only one. Long-time Nordeast families
            — many of them Polish, Ukrainian, or Lebanese in origin — still
            live here, still attend the same churches, still shop at the same
            meat markets and bakeries their parents used. These communities
            are smaller than they were, and older, but they haven&apos;t
            vanished. On a Sunday morning, you can still hear church bells
            from multiple directions, still find fresh kielbasa at Kramarczuk&apos;s
            (technically in{" "}
            <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
              St. Anthony West
            </Link>
            , but spiritually Nordeast to the bone), still encounter the
            &ldquo;Nordeast&rdquo; accent that flattens vowels in ways that
            make linguists smile and locals proud. This is a neighborhood that
            has layers, and the most interesting thing about it is how those
            layers coexist — sometimes harmoniously, sometimes not.
          </p>
          <p>
            The brewery culture deserves its own mention, because in Logan
            Park, taprooms function as something between a bar and a community
            center. Indeed Brewing&apos;s patio on a summer Thursday is one of
            the great casual social spaces in Minneapolis — dogs, kids, food
            trucks, and a crowd that mixes artists and accountants and
            construction workers with an ease that few institutions manage.
            Bauhaus Brew Labs, with its mid-century aesthetic and dance floor
            (yes, a dance floor in a brewery), is a different animal entirely
            — louder, more designed, unapologetically fun. Fair State Brewing
            Cooperative, organized as an actual co-op with member-owners, adds
            a community-governance dimension that feels appropriate in a
            neighborhood with strong collective instincts. These aren&apos;t
            just places to drink beer. They&apos;re the closest thing Logan
            Park has to a town square.
          </p>
        </Prose>

        <Quote
          text="I moved to Nordeast for the cheap studio space in 2006. Now I'm watching the building next door get torn down for luxury townhomes. I love this neighborhood, but I'm not sure it loves me back anymore — not at these prices."
          cite="Logan Park artist, community meeting"
        />
      </ArticleSection>

      {/* Food */}
      <ArticleSection id="food" title="Logan Park Food, Drink & Local Spots">
        <Prose>
          <p>
            Logan Park&apos;s food and drink scene reflects its identity:
            layered, unpretentious, anchored by immigrant tradition and
            energized by the creative community that arrived later. Central
            Avenue is the spine — a commercial corridor that runs the full
            length of Northeast Minneapolis, carrying a mix of old-school
            ethnic restaurants, newer gastropubs, bakeries, and shops that
            together tell the story of every wave of people who have called
            this place home. Thirteenth Avenue NE serves as a secondary
            corridor, particularly around the brewery and arts district nodes.
            This is not a neighborhood where you need a reservation. It&apos;s
            a neighborhood where you need a sense of adventure and a
            willingness to eat at a place with a hand-lettered sign.
          </p>
        </Prose>

        <ArticleSubsection title="Nordeast Institutions">
          <PlaceCardComponent place={{ name: "Kramarczuk's East European Sausage", tag: "Eastern European / Deli", price: "$–$$", description: "215 E. Hennepin Ave. (in St. Anthony West, but the spiritual center of Nordeast food culture). Kramarczuk's has been making kielbasa, bratwurst, pierogi, and Eastern European deli meats since 1954, when Wasyl and Anna Kramarczuk — Ukrainian immigrants — opened their sausage shop. The bakery counter sells poppy seed rolls and kolachi that taste like someone's grandmother made them, because the recipes are someone's grandmother's. The deli case is a cathedral of cured meat. This is Nordeast in edible form." }} />
          <PlaceCardComponent place={{ name: "Surdyk's", tag: "Liquor Store / Cheese Shop", price: "$$", description: "303 E. Hennepin Ave. (also technically St. Anthony West, but inextricable from the Nordeast identity). Surdyk's is a legendary liquor store and cheese shop that has been operating since 1934. The wine and spirits selection is one of the best in the Twin Cities. The cheese counter and deli are worth the visit on their own. Surdyk's is the kind of place where the staff actually knows what they're talking about, which is rarer than it should be." }} />
          <PlaceCardComponent place={{ name: "Holy Land", tag: "Middle Eastern / Deli / Grocery", price: "$", description: "2513 Central Ave. NE. A sprawling Middle Eastern bakery, deli, and grocery that has been a Central Avenue anchor for decades. The hummus is made fresh daily and is better than anything you'll find in a plastic container. The bakery turns out flatbreads, baklava, and spinach pies. The grocery section stocks ingredients for home cooking from across the Middle East and North Africa. Holy Land is one of those places that proves the best food often comes from the simplest operations." }} />
          <PlaceCardComponent place={{ name: "Nye's Bar", tag: "Bar / Polka / American", price: "$–$$", description: "112 E. Hennepin Ave. The original Nye's Polonaise Room — famous for polka, pierogi, and a piano bar where Ruth Adams held court for decades — closed in 2016 and was reborn in a new space. The new Nye's kept some of the old spirit (the piano bar survived) while updating the food and cocktails. Opinions among Nordeast old-timers range from appreciative to betrayed, which is itself a perfect encapsulation of the neighborhood's relationship with change." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Central Avenue Eats">
          <PlaceCardComponent place={{ name: "Chimborazo", tag: "Ecuadorian", price: "$–$$", description: "2851 Central Ave. NE. One of the few Ecuadorian restaurants in the Twin Cities, Chimborazo serves llapingachos (potato patties), encebollado (fish stew), and other dishes that are rare finds in the Midwest. The portions are generous and the prices are fair. The restaurant's presence reflects the growing Latin American community in Northeast Minneapolis." }} />
          <PlaceCardComponent place={{ name: "Que Nha Vietnamese Restaurant", tag: "Vietnamese", price: "$", description: "2719 Central Ave. NE. A straightforward Vietnamese restaurant serving pho, bun, banh mi, and rice plates to a loyal crowd. The pho is excellent — deeply flavored broth, generous portions, and the kind of consistency that comes from making the same thing well for years. The lunch specials are one of the best deals on Central Avenue." }} />
          <PlaceCardComponent place={{ name: "Emily's Lebanese Deli", tag: "Lebanese", price: "$", description: "641 University Ave. NE. A tiny, no-frills deli serving some of the best Lebanese food in Minneapolis — falafel, shawarma, tabbouleh, and fattoush made with care and priced for the working people who built this neighborhood. Emily's is a reminder of the Lebanese community's deep roots in Northeast Minneapolis." }} />
          <PlaceCardComponent place={{ name: "Central Avenue Meats", tag: "Butcher / Deli", price: "$", description: "A neighborhood butcher shop on Central Avenue that carries the tradition of Nordeast's Eastern European meat culture — fresh sausages, house-smoked meats, and the kind of personal service that disappeared from most of American retail decades ago." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Breweries & Taprooms">
          <Prose>
            <p>
              The brewery scene in Logan Park and surrounding Northeast
              Minneapolis is not a trend — it&apos;s infrastructure. These
              taprooms are where the neighborhood socializes, where artists
              meet after studio hours, where families bring kids on Sunday
              afternoons, where the line between nightlife and community life
              dissolves entirely. The concentration is remarkable: within a
              mile or two of Logan Park, you can visit half a dozen
              independent craft breweries, each with its own personality and
              loyal following.
            </p>
          </Prose>
          <PlaceCardComponent place={{ name: "Indeed Brewing Company", tag: "Brewery / Taproom", price: "$–$$", url: "https://www.indeedbrewing.com", description: "711 15th Ave. NE. Indeed's taproom and patio are one of the great gathering spaces in Northeast Minneapolis. The beer is excellent — the Day Tripper Pale Ale and the Mexican Honey Imperial Lager are flagships — but the real draw is the atmosphere: picnic tables, food trucks, dogs, and a crowd that embodies the Logan Park mix of creative and blue-collar. The patio on a warm evening is as close to a town square as this neighborhood gets." }} />
          <PlaceCardComponent place={{ name: "Bauhaus Brew Labs", tag: "Brewery / Taproom / Dance Floor", price: "$–$$", url: "https://www.bauhausbrewlabs.com", description: "1315 Tyler St. NE. Bauhaus occupies a converted industrial space with a mid-century modern aesthetic, a sound system that gets used, and a dance floor that is not ironic. The beer (Wonderstuff, Sky-Five IPA) is solid, but Bauhaus is really a social venue that happens to brew beer. Events, themed nights, and a general commitment to fun make it the most energetic taproom in the neighborhood." }} />
          <PlaceCardComponent place={{ name: "Fair State Brewing Cooperative", tag: "Brewery / Co-op Taproom", price: "$–$$", url: "https://fairstate.coop", description: "2506 Central Ave. NE. The first cooperatively owned brewery in Minnesota, Fair State is owned by its members — a structure that fits Nordeast's communitarian instincts. The beer is excellent, with particular strength in lagers and sour ales. The taproom on Central Avenue is cozy and community-oriented, with a vibe closer to a neighborhood pub than a scene." }} />
          <PlaceCardComponent place={{ name: "Able Seedhouse + Brewery", tag: "Brewery / Taproom", price: "$–$$", description: "1121 Quincy St. NE. Able is the quieter, more contemplative option in the neighborhood brewery ecosystem — a smaller operation focused on quality beer in a low-key industrial space. Good for a conversation rather than a party." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Coffee & Drink Beyond Beer">
          <Prose>
            <p>
              Coffee culture in Logan Park leans toward the independent and
              unfussy. Spyhouse Coffee has a location on Central Avenue that
              draws the laptop crowd and serves excellent single-origin
              pour-overs. Peace Coffee, a fair-trade roaster based in
              Minneapolis, has a presence in the area. For cocktails, the
              options have expanded significantly in recent years — several
              bars along Central Avenue and 13th Avenue NE offer craft
              cocktail programs that would have been unthinkable in a
              neighborhood that was, until recently, a beer-and-a-shot kind
              of place. The 331 Club, a dive bar on 13th Avenue NE, represents
              the older tradition — cheap drinks, live music, and a crowd that
              doesn&apos;t care what you&apos;re wearing. It&apos;s one of the
              last places in Logan Park where a PBR tallboy is still the
              default order, and it is beloved for exactly that reason.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Outdoors & Culture */}
      <ArticleSection id="outdoors" title="Parks, Arts & Outdoors in Logan Park">
        <Prose>
          <p>
            Logan Park is not a parks-and-lakes neighborhood. You will not step
            out your front door onto a trail circling a pristine urban lake.
            What you will find is something different and, for the right person,
            more interesting: one of the most significant working arts
            districts in the United States, a handful of well-used neighborhood
            parks, and access to the Mississippi River corridor that is better
            than most Northeast Minneapolis residents realize.
          </p>
        </Prose>

        <ArticleSubsection title="The Northeast Minneapolis Arts District">
          <Prose>
            <p>
              This is the heart of it. The Northeast Minneapolis Arts District
              — centered in Logan Park and extending into neighboring{" "}
              <Link href="/neighborhoods/sheridan" className="text-[#2a9d8f] hover:underline">
                Sheridan
              </Link>{" "}
              and{" "}
              <Link href="/neighborhoods/st-anthony-west" className="text-[#2a9d8f] hover:underline">
                St. Anthony West
              </Link>{" "}
              — is the largest concentration of working artists in the Upper
              Midwest. Over 800 studios are spread across converted warehouses,
              industrial buildings, and some purpose-built spaces. The district
              is organized and advocated for by NEMAA (the Northeast Minneapolis
              Arts Association), which was founded in 1995 and has been the
              institutional backbone of the arts community ever since.
            </p>
            <p>
              The key buildings — the anchors of the district — are worth
              knowing individually, because each has its own character and
              community:
            </p>
          </Prose>
          <PlaceCardComponent place={{ name: "Northrup King Building", tag: "Artist Studios", description: "1500 Jackson St. NE. The flagship. A massive former seed company headquarters that now houses over 300 artist studios across multiple floors. The NKB is the single most important building in the Northeast Arts District — the place where Art-A-Whirl reaches its highest density and where the creative ecosystem of the neighborhood is most visible. Studios range from tiny workspaces to sprawling production facilities. The building hosts First Thursdays (monthly open studio nights) year-round, not just during Art-A-Whirl. Walking the hallways is an education in the range of what 'art' means — painting, sculpture, jewelry, ceramics, printmaking, photography, mixed media, and things that defy category." }} />
          <PlaceCardComponent place={{ name: "Casket Arts Building", tag: "Artist Studios / Creative Spaces", description: "681 17th Ave. NE. A former casket factory — the name is not a metaphor — converted into artist studios, creative offices, and event spaces. The building's industrial bones are intact: heavy timber columns, freight elevators, and the particular aesthetic of a space that was designed to build things, repurposed for people who still build things, just different ones. Casket Arts hosts studios, a gallery, and community events." }} />
          <PlaceCardComponent place={{ name: "California Building", tag: "Artist Studios / Gallery", description: "2205 California St. NE. A converted industrial building housing studios, galleries, and creative businesses. The California Building is slightly quieter than the NKB — fewer tourists, more working space — and tends to attract artists who are more focused on production than presentation. During Art-A-Whirl, it's one of the essential stops." }} />
          <PlaceCardComponent place={{ name: "Solar Arts Building", tag: "Artist Studios / Event Venue", description: "711 15th Ave. NE. Located adjacent to Indeed Brewing, the Solar Arts Building combines artist studios with event space and a taproom. It's the building where the art district and the brewery culture literally share a wall, which is as Logan Park as it gets." }} />
        </ArticleSubsection>

        <ArticleSubsection title="Art-A-Whirl: The Main Event">
          <Prose>
            <p>
              Art-A-Whirl deserves its own subsection because it is, for many
              people, the only time they encounter Logan Park — and because
              what happens during that one weekend in May shapes the
              neighborhood&apos;s identity for the rest of the year. The event
              runs from Friday evening through Sunday afternoon on the third
              weekend of May (typically), and involves hundreds of artists
              opening their studios to the public across the entire Northeast
              Arts District. The scale is staggering: the Northrup King
              Building alone could consume an entire day. Add the Casket Arts
              Building, the California Building, the Solar Arts Building, and
              dozens of smaller venues, galleries, pop-up shows, and parking
              lot installations, and you have an event that is genuinely
              impossible to see completely in a single weekend.
            </p>
            <p>
              What makes Art-A-Whirl different from a standard gallery crawl
              or art fair is the access. You are not looking at finished work
              hung on a white wall. You are standing in the room where it was
              made, talking to the person who made it, seeing the tools and
              the failed attempts and the works-in-progress. That intimacy —
              the collapse of distance between viewer and maker — is the
              event&apos;s genius and its emotional core. It also generates the
              bulk of many participating artists&apos; annual income, which
              makes the event&apos;s health existentially important to the
              creative community.
            </p>
            <p>
              The event has grown significantly since its founding in 1996,
              and that growth brings its own complications. Crowds are dense.
              Parking is impossible (bike or take the bus). Some artists
              complain that the festival atmosphere — the food trucks, the
              brewery parties, the bands — overshadows the art. Others argue
              that the spectacle is what brings 35,000 people to a
              neighborhood they would otherwise never visit, and that the
              economic impact justifies the chaos. Both sides have a point.
              But whatever your feelings about the event&apos;s evolution,
              walking through the Northrup King Building on a Saturday
              afternoon during Art-A-Whirl — the hallways packed, the studio
              doors open, the conversation flowing — remains one of the best
              cultural experiences Minneapolis has to offer.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Logan Park (the Actual Park)">
          <Prose>
            <p>
              The neighborhood&apos;s namesake park, at 690 13th Avenue NE,
              is a modest but well-used community green space with a
              playground, basketball courts, a wading pool, and a recreation
              center that hosts youth programs, fitness classes, and community
              events. It&apos;s not a destination park — nobody drives across
              the city to visit Logan Park — but it serves its neighborhood
              well, providing outdoor space in an area that is otherwise
              dominated by pavement, industrial buildings, and residential
              lots too small for much of a yard. On summer evenings, the park
              fills with kids, dogs, and families — the same cross-section of
              old Nordeast and new Nordeast that defines the neighborhood as
              a whole.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Mississippi River Access">
          <Prose>
            <p>
              The Mississippi River runs roughly half a mile west of Logan
              Park, and the riverfront trail system — part of the Grand Rounds
              National Scenic Byway — provides paved paths for walking,
              running, and biking along the east bank. The trails connect
              south to the Stone Arch Bridge and the Mill City area, and north
              toward the Columbia Heights and Fridley stretches of the river.
              Most Logan Park residents access the river via bike — it&apos;s
              a quick ride down to the St. Anthony Main area, where the river,
              the falls, and the downtown skyline form one of the more
              dramatic urban landscapes in the Midwest. The river is
              Logan Park&apos;s backyard in the same way the Chain of Lakes
              is south Minneapolis&apos;s — close enough to use regularly,
              far enough to feel like an escape.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Grain Belt Brewery Campus">
          <Prose>
            <p>
              The Grain Belt Brewery complex, located along the river in
              adjacent{" "}
              <Link href="/neighborhoods/sheridan" className="text-[#2a9d8f] hover:underline">
                Sheridan
              </Link>
              , is worth mentioning because it is part of Logan Park&apos;s
              extended cultural geography. The historic brewery — whose
              iconic &ldquo;Grain Belt Beer&rdquo; sign is one of the most
              recognizable landmarks in Minneapolis — has been partially
              redeveloped into offices, event spaces, and residential units.
              The sign, visible from the Hennepin Avenue bridge, is a neon
              beacon of Nordeast identity that carries more emotional weight
              per square foot than almost any object in the city.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* Schools */}
      <ArticleSection id="schools" title="Logan Park Schools">
        <Prose>
          <p>
            Schools in Logan Park reflect the realities of a small, changing
            neighborhood in a large urban district. Minneapolis Public Schools
            serves the area, and families here navigate the same system of
            neighborhood schools, magnets, and open enrollment that operates
            citywide.
          </p>
          <p>
            Pillsbury Elementary School, located within the neighborhood
            boundaries, has historically served Logan Park families. Like
            many Minneapolis public elementary schools, it serves a diverse
            student body and offers programming tailored to the community&apos;s
            needs. Test scores, as in much of the district, reflect
            socioeconomic factors as much as instructional quality — a pattern
            that is consistent across Minneapolis Public Schools and that
            resists simple interpretation.
          </p>
          <p>
            For middle school, students typically attend Northeast Middle
            School, which draws from several Northeast Minneapolis
            neighborhoods. Edison High School, located on 22nd Avenue NE, is
            the comprehensive high school serving the area. Edison has a
            diverse student body and offers programs including career and
            technical education, arts, and college preparatory tracks. The
            school&apos;s location in Northeast Minneapolis gives it a
            connection to the neighborhood&apos;s identity, though like all
            large urban high schools, it faces the challenges of serving
            students with widely varying needs and backgrounds.
          </p>
          <p>
            Families with school-age children in Logan Park often explore
            the broader Minneapolis magnet and choice system, which allows
            enrollment in schools across the city based on program interest
            and availability. Charter school options in Northeast Minneapolis
            include several with arts-focused programming — a natural fit for
            a neighborhood built around creative practice. Private and
            parochial schools, drawing on the neighborhood&apos;s Catholic
            heritage, provide additional options.
          </p>
          <p>
            It&apos;s worth noting honestly: Logan Park is not a neighborhood
            that most families choose primarily for its schools. People move
            here for the arts community, the breweries, the cultural energy,
            and the relative affordability. Families who prioritize school
            rankings tend to look elsewhere — to the southwestern
            neighborhoods or the suburbs — though plenty of families raise
            kids here happily and value the diversity and community that Logan
            Park&apos;s schools provide.
          </p>
        </Prose>
      </ArticleSection>

      {/* Real Estate */}
      <ArticleSection id="real-estate" title="Logan Park Real Estate & Housing">
        <Prose>
          <p>
            Logan Park&apos;s housing market tells the story of the
            neighborhood&apos;s transformation in numbers. A decade ago, this
            was one of the most affordable neighborhoods in Minneapolis —
            workers&apos; cottages selling for $150,000, studio rents that
            artists could cover with part-time work, the kind of pricing that
            made creative risk-taking economically viable. Today, the
            neighborhood is still more affordable than the southwest
            Minneapolis lakeside neighborhoods or the North Loop, but the
            gap is closing. The arts district and brewery culture that
            made Logan Park interesting also made it desirable, and
            desirability is the enemy of affordability.
          </p>
        </Prose>

        <ArticleSubsection title="Buying in Logan Park">
          <Prose>
            <p>
              The owner-occupied market is dominated by single-family homes —
              primarily the early 20th century workers&apos; cottages and
              bungalows that define the residential streets. These are not
              large homes: typical footprints are 900 to 1,400 square feet,
              on lots of 3,000 to 5,000 square feet. They sell in the
              $300,000 to $420,000 range as of 2025, with fully renovated
              homes pushing toward $450,000 or above. That&apos;s a
              significant jump from ten years ago, when comparable homes
              traded in the $150,000–$250,000 range.
            </p>
            <p>
              Duplexes and small multi-family properties — a common housing
              type in Northeast Minneapolis — range from $350,000 to
              $550,000 depending on condition and location. These properties
              attract both owner-occupants (who live in one unit and rent the
              other) and investors. Condos in converted industrial buildings
              offer an alternative for buyers who want the Logan Park
              aesthetic without the maintenance of a house: prices range from
              roughly $200,000 to $400,000, depending on the building, unit
              size, and finishes.
            </p>
            <p>
              New construction has entered the market in the form of
              townhomes and small multi-family developments, typically priced
              at $350,000 to $500,000 per unit. These developments are often
              controversial — they replace older structures (sometimes
              industrial buildings, sometimes houses) with contemporary
              designs that some residents view as incompatible with the
              neighborhood&apos;s character. The debate mirrors the broader
              tension in Logan Park between preservation and development.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Rental Market">
          <Prose>
            <p>
              One-bedroom apartments in Logan Park rent for approximately
              $1,100 to $1,500 per month, with older walk-ups at the lower
              end and newer construction at the higher end. Two-bedroom
              units run $1,400 to $2,000. These prices are moderate by
              Minneapolis standards — lower than the North Loop, comparable
              to Whittier and Uptown, and increasingly out of reach for the
              artists and service workers who gave the neighborhood its
              character.
            </p>
            <p>
              Artist studio space — the critical infrastructure of the
              neighborhood&apos;s creative economy — is a separate market
              with its own pressures. Studio rents in the Northrup King
              Building, the Casket Arts Building, and similar spaces have
              risen substantially over the past decade, driven by demand
              from non-artist tenants (tech companies, design firms, creative
              agencies) who can pay more and by property owners who have
              recognized the value of the &ldquo;arts district&rdquo; brand.
              NEMAA and other organizations have advocated for policies to
              preserve affordable studio space, but the market incentives
              run in the opposite direction.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Developer Question">
          <Prose>
            <p>
              New development in Logan Park is a loaded subject. Several
              significant projects — apartment buildings, townhome
              developments, mixed-use buildings — have been built or proposed
              in recent years, some on sites that previously held industrial
              buildings or artist studios. The argument for development is
              straightforward: the neighborhood needs more housing, density
              supports commercial corridors, and the tax base benefits from
              investment. The argument against is equally clear: every
              industrial building that becomes luxury apartments is studio
              space that&apos;s gone forever, and the new residents who move
              into market-rate units are typically not artists — they&apos;re
              professionals drawn by the arts district&apos;s aesthetic, who
              consume the neighborhood&apos;s creative culture without
              contributing to it.
            </p>
            <p>
              The Logan Park Neighborhood Association has been active in
              negotiating with developers, pushing for affordable units,
              design standards, and community benefits. But the leverage of
              a neighborhood association in a hot real estate market is
              limited, and the fundamental dynamic — that Logan Park&apos;s
              cultural capital is being converted into financial capital at
              a rate that threatens the source — hasn&apos;t changed.
            </p>
          </Prose>
        </ArticleSubsection>

        <Quote text="When I bought my house in Logan Park in 2011, my neighbors were a welder, a retired teacher, and a painter who'd been in the same studio since the '90s. Now it's two tech workers and an Airbnb. The neighborhood is better in some ways — cleaner, safer, more restaurants — but it's losing the people who made it worth discovering." cite="Logan Park homeowner, 2024" />
      </ArticleSection>

      {/* Getting Around */}
      <ArticleSection id="getting-around" title="Getting Around Logan Park">
        <Prose>
          <p>
            Logan Park sits in the middle tier of Minneapolis walkability —
            not as pedestrian-friendly as the downtown-adjacent neighborhoods,
            but significantly more navigable than the suburban-style
            neighborhoods in the city&apos;s outer ring. The Walk Score of
            approximately 72 reflects a neighborhood where daily errands are
            possible on foot if you live near Central Avenue, but where the
            industrial pockets and lower-density residential streets can
            feel spread out. The real story here is biking: Logan Park&apos;s
            Bike Score of 88 is among the best in the city, and cycling is
            the default mode of transportation for a significant portion
            of the neighborhood&apos;s population.
          </p>
          <p>
            Central Avenue is served by Metro Transit Route 10, one of the
            busier bus routes in the system, providing frequent service
            between downtown Minneapolis and the northern suburbs. Additional
            bus routes serve Broadway and University Avenue. The Transit
            Score of 55 is honest — transit here is functional but not
            exceptional, and most Logan Park residents who commute downtown
            either bike (a 15–20 minute ride) or drive (10 minutes without
            traffic, which in Minneapolis means most of the time).
          </p>
          <p>
            Biking infrastructure in Northeast Minneapolis is generally
            good, with bike lanes on several key corridors and connections
            to the riverfront trail system. The ride from Logan Park to
            downtown via the river trails is one of the best urban bike
            commutes in the city — flat, scenic, and largely separated from
            car traffic. Many Logan Park residents — particularly those in
            the arts community — don&apos;t own cars at all, relying on a
            combination of biking, transit, and occasional ridesharing.
          </p>
          <p>
            For drivers, access is straightforward. Interstate 35W runs
            along the western edge of Northeast Minneapolis, connecting to
            downtown (5 minutes), the northern suburbs, and MSP Airport
            (20 minutes). Central Avenue itself provides a direct surface
            route to downtown via the Hennepin or Central Avenue bridges.
            Parking, unlike in denser neighborhoods like the North Loop or
            Uptown, is generally not a problem — most residential streets
            have free on-street parking, and the commercial corridors have
            adequate surface parking. During Art-A-Whirl weekend, parking
            becomes genuinely impossible in a radius of several blocks
            around the major studio buildings — plan to bike.
          </p>
        </Prose>
      </ArticleSection>

      {/* Tensions */}
      <ArticleSection id="tensions" title="What's Changing: The Honest Version">
        <Prose>
          <p>
            Logan Park&apos;s changes are not theoretical or gradual — they
            are visible, ongoing, and the source of genuine anguish among
            the people who built the neighborhood&apos;s reputation. This
            section is the one that matters most for understanding where
            Logan Park is right now, and where it&apos;s heading.
          </p>
        </Prose>

        <ArticleSubsection title="The Artist Displacement Problem">
          <Prose>
            <p>
              Here is the central irony of Logan Park, stated plainly:
              artists moved into cheap industrial spaces, built a nationally
              recognized arts district, attracted breweries and restaurants,
              made the neighborhood desirable, drove up property values and
              rents, and are now being priced out of the spaces they
              transformed. This is not an exaggeration or a narrative
              convenience. It is happening in real time, building by building,
              lease by lease.
            </p>
            <p>
              The mechanism is straightforward. A building owner who rented
              studio space to artists at $8 per square foot discovers that
              a tech company or design firm will pay $18. A developer buys
              an industrial building, evicts the studios, and builds luxury
              apartments. An artist whose lease comes up for renewal faces a
              40 percent increase and can&apos;t make the numbers work on a
              painter&apos;s income. The Northrup King Building — the
              district&apos;s anchor — has so far maintained its commitment
              to artist tenancy, but the economic pressures on its
              ownership are significant, and the building&apos;s long-term
              future as affordable artist space is not guaranteed.
            </p>
            <p>
              NEMAA has advocated for policy interventions: zoning protections
              for artist workspace, tax incentives for building owners who
              maintain below-market studio rents, publicly funded studio
              spaces. Some progress has been made — the city has acknowledged
              the arts district as a cultural asset worth preserving — but
              the pace of policy change is slower than the pace of the real
              estate market. Every year, the district loses studios. Every
              year, the thing that makes Logan Park Logan Park gets a little
              smaller.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Old Nordeast vs. New Nordeast">
          <Prose>
            <p>
              The gentrification of Logan Park isn&apos;t just about artists.
              The long-time working-class communities — the Polish and
              Ukrainian families who have been here for generations, the
              Lebanese business owners on Central Avenue, the older residents
              on fixed incomes who bought their houses decades ago — are
              also navigating a neighborhood that is becoming more expensive,
              more transient, and culturally different from the place they
              know. Property taxes rise as values increase. The corner bar
              becomes a craft cocktail lounge. The meat market becomes a
              coffee shop. The VFW loses members.
            </p>
            <p>
              This is not a simple narrative of villains and victims. Many
              long-time homeowners have seen their property values double or
              triple, which is financial security they couldn&apos;t have
              imagined. The new businesses bring amenities and foot traffic.
              The neighborhood is objectively safer and better-maintained
              than it was twenty years ago. But the texture of daily life
              has changed — the accents are different, the prices are
              different, the assumptions about what this place is and who
              it&apos;s for are different — and that matters to people who
              remember when it was otherwise.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="Development Pressure">
          <Prose>
            <p>
              New construction continues across Logan Park and Northeast
              Minneapolis more broadly. The Minneapolis 2040 Plan, which
              eliminated single-family-only zoning and encourages density
              along transit corridors, has created new development
              possibilities in a neighborhood that was historically
              zoned for lower-density residential and industrial use.
              Apartment buildings and townhome developments are appearing
              on lots that previously held smaller structures or light
              industrial operations. The physical transformation is
              accelerating.
            </p>
            <p>
              The debate is familiar but no less urgent for that. Proponents
              of development argue that more housing supply moderates prices
              (eventually), that density supports transit and commercial
              vitality, and that the neighborhood&apos;s industrial
              character was never static to begin with — the warehouses
              and factories were built for one purpose and repurposed for
              another; this is just the next cycle. Critics argue that the
              new construction is overwhelmingly market-rate, that it
              doesn&apos;t serve the artists or working-class families who
              need affordable housing, that it replaces irreplaceable
              industrial buildings with generic apartment blocks, and that
              the &ldquo;arts district&rdquo; label is being used to market
              units in buildings that are displacing the actual arts district.
              Both sides are substantially correct, which is what makes the
              conversation so difficult.
            </p>
          </Prose>
        </ArticleSubsection>

        <ArticleSubsection title="The Authenticity Paradox">
          <Prose>
            <p>
              Logan Park faces a version of the problem that every
              interesting urban neighborhood eventually encounters:
              authenticity is a finite resource that is consumed by the
              very people attracted to it. The neighborhood&apos;s appeal
              is rooted in its grit, its creative energy, its working-class
              honesty, its rough edges. But every new luxury development,
              every curated retail concept, every $16 cocktail sands down
              one of those edges. The question is whether Logan Park can
              remain genuinely creative and working-class as the economics
              push it toward something more polished and more expensive, or
              whether it will follow the trajectory of a hundred other arts
              districts across the country — beloved in memory, bland in
              reality.
            </p>
            <p>
              The answer isn&apos;t determined yet. The Northrup King Building
              is still full of working artists. Art-A-Whirl still draws
              tens of thousands. The breweries still function as genuine
              community spaces rather than tourist traps. Central Avenue still
              has Holy Land and Emily&apos;s Lebanese alongside the newer
              spots. The bones of the real neighborhood are intact. But the
              pressure is real, the direction of change is clear, and the
              people who care most about Logan Park&apos;s identity know
              that the window for preserving it is not unlimited.
            </p>
          </Prose>
        </ArticleSubsection>
      </ArticleSection>

      {/* FAQ */}
      <ArticleSection id="faq" title="Logan Park FAQ">
        <FaqSection items={data.faq} />
      </ArticleSection>

      {/* Closing */}
      <ClosingSection title={data.closing.title} paragraphs={data.closing.paragraphs} />
    </>
  );
}

const guide: NeighborhoodGuide = { data, Content };
export default guide;
