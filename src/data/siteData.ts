export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  avatar?: string;
  highlight?: string;
  technician?: string;
}

export const BUSINESS_INFO = {
  name: "Danika Plumbing & Electric",
  legalName: "Danika Plumbing, LLC",
  phone: "(425) 374-1557",
  phoneRaw: "+14253741557",
  email: "office@danikaplumbing.com",
  address: "11015 Airport Road, Everett, WA 98204",
  license: "DANIKPL839PF",
  licenseUrl: "https://secure.lni.wa.gov/verify/Detail.aspx?UBI=&LIC=DANIKPL839PF",
  established: 2009,
  owner: "Frank Gaborik",
  tagline: "Quick Service. Quality Materials. Realistic Prices.",
  bookingUrl: "https://danikaplumbing.com/contact-us/",
  googleMapsUrl: "https://www.google.com/maps?cid=5513276448963193458",
};

export const REVIEWS_DATA: Review[] = [
  {
    id: "review-kristi-pedersen",
    author: "Kristi Pedersen",
    date: "26 September 2026",
    rating: 5,
    avatar: "K",
    content: "Nick was SO helpful today with our sink and dishwasher clog. He was very thorough and kind. Called Danika last night and was able to get in this afternoon which was perfect. Couldn't be...",
  },
  {
    id: "review-vicky-chen",
    author: "Vicky Chen",
    date: "26 September 2026",
    rating: 5,
    avatar: "/images/danika-shield-plumber.png",
    technician: "Nick",
    content: "Nick was by far, the best plumber that we have ever hired in the past 27 years. He was knowledgeable, very thorough and pay attention to details. Nick was able to answer all of my...",
  },
  {
    id: "6",
    author: "Jaime W",
    date: "25 September 2026",
    rating: 5,
    avatar: "J",
    technician: "Travis",
    highlight: "Fixed our gross garbage disposal easy peasy",
    content: "Travis was a chill guy, easy to have in the house and fixed our gross garbage disposal easy peasy. Can't complain at all.",
  },
  {
    id: "review-deon-wilkins",
    author: "Deon Wilkins",
    date: "7 September 2026",
    rating: 5,
    avatar: "D",
    content: "Fast, efficient, and clean work with special attention to detail.",
  },
  {
    id: "5",
    author: "tyler seymour",
    date: "3 September 2026",
    rating: 5,
    avatar: "t",
    technician: "Saif Abbas",
    highlight: "Quick, friendly and excellent job with water heater pipe fix",
    content: "Saiff was very friendly and quick and did an excellent job with my water heater pipe fix",
  },
  {
    id: "review-david-ziff",
    author: "David Ziff",
    date: "12 October 2026",
    rating: 5,
    avatar: "/images/danika-shield-plumber.png",
    technician: "Travis",
    content: "Travis was great! Helpful and professional. Saved us some money with his recommendations. Wound up with great work at a price lower than we were expecting.",
  },
  {
    id: "review-vinicius-g",
    author: "Vinicius G",
    date: "8 October 2026",
    rating: 5,
    avatar: "V",
    technician: "",
    content: "Danika Plumbing was great to work with. They came out quickly and provided a free quote, and their pricing was reasonable and fair.",
  },
  {
    id: "1",
    author: "Thomas Oates",
    date: "September 2026",
    rating: 5,
    technician: "Mike Lashbaugh & Nick",
    highlight: "114-year-old cast iron sewer stack job other plumbers walked away from",
    content: "The large leaking pipe is in a 114 year old building. It was a cast iron sewer stack buried in a brick wall, then it traveled through 15 inches of concrete foundation and through part of a brick chimney. The first three plumbers didn't want any part of it and left. At 2:00 pm, Mike showed up and didn't flinch. He studied it for about 15 minutes, clearly identifying the problem. He quoted a fair price, got bigger tools, and started busting out bricks and foundation with a hammer drill. Nick, his apprentice, helped excavate. Between 3:00 pm and 8:00 pm they cut and replaced all the leaks and sections that had holes. A new main sewer stack connection completely installed in 5 hours! No corners cut, no unnecessary charges.",
  },
  {
    id: "2",
    author: "Dan Ing",
    date: "September 2026",
    rating: 5,
    technician: "Saif Abbas",
    highlight: "Went above and beyond without trying to add unnecessary charges",
    content: "Danika Plumbing was awesome! Saif came out and fixed the original issue, but he also went above and beyond by taking care of several other little plumbing issues while he was here. He handled everything quickly, easily, and professionally, and even took the extra time to zip-tie the hoses together and organize everything so it looked cleaner and better than it did before. It’s not often you come across someone who takes that much pride in their work and genuinely wants to help.",
  },
  {
    id: "3",
    author: "John Swartos",
    date: "August 2026",
    rating: 5,
    technician: "Travis",
    highlight: "Showed up early, super professional, wore shoe covers",
    content: "Travis was amazing, I wish I could give him 10 stars. Showed up early, super professional, clean work, wore shoe covers, solved our plumbing issues quickly and dropped some great knowledge that I, as a newer homeowner found very informative. Highly recommend them for any plumbing needs!",
  },
  {
    id: "4",
    author: "Nicole Trolio",
    date: "August 2026",
    rating: 5,
    technician: "Travis",
    highlight: "Explained solution, got it done same day, great with dogs",
    content: "Travis was fantastic! Explained his solution to my plumbing problem and the best way to get it done. Got it done the same day! Put up with my large 'helper' dogs!",
  },
];

export const PROBLEM_CARDS = [
  {
    title: "No Hot Water",
    desc: "Diagnostic testing for elements, thermostats, gas valves, or complete high-efficiency replacement.",
    icon: "Flame",
    badge: "Same-Day Priority",
    link: "#water-heaters",
  },
  {
    title: "Clogged or Slow Drain",
    desc: "Snaking, hydro-jetting, and camera inspections clearing stubborn bathroom, kitchen, or main lines.",
    icon: "RotateCcw",
    badge: "Root & Grease Removal",
    link: "#drain-sewer",
  },
  {
    title: "Sewer Smell or Backup",
    desc: "Immediate intervention for foul sewer gas, basement backups, cracked clay or rotted cast iron stacks.",
    icon: "AlertTriangle",
    badge: "Biohazard Safety",
    link: "#drain-sewer",
  },
  {
    title: "Burst Pipe or Active Leak",
    desc: "24/7 emergency dispatch to isolate the main supply, stop flooding, and complete code-compliant repiping.",
    icon: "Droplets",
    badge: "24/7 Emergency",
    link: "#emergency",
  },
  {
    title: "Hidden Leak or High Bill",
    desc: "Acoustic detection and pressure diagnostics finding invisible slab or wall leaks before major structural damage.",
    icon: "Search",
    badge: "Acoustic Leak Detection",
    link: "#water-lines",
  },
  {
    title: "Low Water Pressure",
    desc: "Resolving narrowed galvanized piping, mineral scale, malfunctioning PRVs (pressure reducing valves), and municipal issues.",
    icon: "Gauge",
    badge: "Pressure Diagnostic",
    link: "#water-quality",
  },
  {
    title: "Running or Leaking Toilet",
    desc: "Flapper rebuilds, wax ring reseals, cracked tank replacements, and ultra high-efficiency bowl installations.",
    icon: "CheckCircle2",
    badge: "Water Saver",
    link: "#gas-fixtures",
  },
  {
    title: "Gas Line Work",
    desc: "Licensed gas pipe installation, leak sniffing, appliance hookups for ranges, water heaters, and generators.",
    icon: "Zap",
    badge: "Licensed & Permitted",
    link: "#gas-fixtures",
  },
];

export const BIG_FIVE_TABS = [
  {
    id: "heaters",
    name: "Water Heaters",
    headline: "Water Heater Repair & High-Efficiency Tankless Upgrades",
    subhead: "We test thermostats, heating elements, and burners before ever recommending replacement.",
    points: [
      "Traditional atmospheric & power-vented gas tank systems",
      "Electric tank water heaters with durable sacrificial anodes",
      "Navien, Takagi & Rinnai continuous flow tankless systems",
      "Energy Star hybrid heat pump water heater retrofits",
    ],
    details: "When your water heater acts up, we evaluate the unit's age, sediment buildup, and component integrity. If a simple thermostat or heating element replacement resolves the issue safely, that's what we quote. If your tank is leaking or nearing its 10-12 year threshold, we install high-efficiency Bradford White or tankless units with proper thermal expansion tanks and Washington State code venting.",
    image: "/images/Tank-water-heaters.webp",
  },
  {
    id: "emergency",
    name: "Emergencies",
    headline: "24/7 Immediate Dispatch Across Snohomish County",
    subhead: "When water is pouring through ceilings or sewer backs up, our on-call plumbers answer live.",
    points: [
      "Live phone answering 24/7 — never a disconnected automated runaround",
      "Emergency main water shutoff guidance over the phone",
      "Fully stocked dispatch vans with commercial pumpers and leak clamps",
      "Written upfront pricing before emergency work commences",
    ],
    details: "Plumbing disasters don't wait for business hours. A burst pipe in an attic, a severed supply line under a sink, or a backed-up main drain requires an experienced licensed journeyman immediately. We arrive equipped with pipe freezing kits, heavy-duty snakes, and emergency replacement valves.",
    image: "/images/danika-seattle.jpg",
  },
  {
    id: "drains",
    name: "Drains & Sewer",
    headline: "Root Removal, Hydro Jetting & Trenchless Sewer Repairs",
    subhead: "Diagnostic color video camera inspections showing you the exact condition of your sewer lateral.",
    points: [
      "High-definition digital camera reel inspections with depth transmitters",
      "4,000 PSI hydro-jetting scouring grease, sludge, and tree roots",
      "Cast iron de-scaling and mechanical snaking",
      "Spot repairs and trenchless pipe rehabilitation in older neighborhoods",
    ],
    details: "Everett and Snohomish County feature beautiful mature trees whose invasive root systems target older clay and cast iron sewer joints. We don't guess: we run high-resolution cameras down your cleanout to show you precisely where blockages or fractures exist, saving you thousands on unnecessary excavations.",
    image: "/images/drain-cleaning.jpeg",
  },
  {
    id: "waterlines",
    name: "Water Lines & Repiping",
    headline: "Main Water Line Replacement & Whole-Home PEX-A Repiping",
    subhead: "Eliminate rusty water, pinhole leaks, and flow bottlenecks caused by failing galvanized lines.",
    points: [
      "Trenchless directional boring for minimal yard disruption",
      "Complete Uponor PEX-A expansion repipes with full flow manifolds",
      "Lead-free brass quarter-turn main shutoff ball valves",
      "Pressure reducing valve (PRV) tuning for municipal pressure spikes",
    ],
    details: "Homes built in Snohomish County between 1940 and 1980 frequently suffer from decaying galvanized water lines or brittle polybutylene piping. We replace failing supply lines with medical-grade PEX-A expansion tubing, restoring crystal clear water and robust pressure throughout every shower and faucet.",
    image: "/images/water-lines.jpeg",
  },
  {
    id: "fixtures",
    name: "Gas, Faucets & Toilets",
    headline: "Gas Piping, Fixture Upgrades & Commercial Restrooms",
    subhead: "Precision plumbing finishes, certified gas appliance connections, and modern low-flow fixtures.",
    points: [
      "Black iron and CSST flexible gas pipe runs for ranges and dryers",
      "High-efficiency Toto, Kohler, and American Standard toilet sets",
      "Kitchen sink faucet, pull-down sprayers, and garbage disposals",
      "Outdoor frost-free hose bibbs and backflow prevention assemblies",
    ],
    details: "Gas line alterations require strict adherence to NFPA 54 and Washington mechanical codes with rigorous pressure testing. Whether adding a gas range, upgrading to a commercial kitchen disposal, or stopping a perpetually running toilet, our licensed technicians do it right.",
    image: "/images/danika-van.png",
  },
];

export const DANIKA_WAY_STEPS = [
  {
    step: "01",
    title: "Live Call & Dispatch",
    desc: "A real local coordinator answers your call 24/7. We listen to the issue, provide immediate safety/shutoff guidance, and dispatch an experienced technician.",
  },
  {
    step: "02",
    title: "Thorough In-Person Diagnostic",
    desc: "We arrive in a clean, fully-stocked truck, put on protective shoe covers, and conduct an exact physical diagnosis rather than making hasty assumptions.",
  },
  {
    step: "03",
    title: "Upfront Written Price First",
    desc: "Before any wrench touches a pipe, you receive a detailed, written price quote with zero hidden surprise fees or ambiguous hourly rates.",
  },
  {
    step: "04",
    title: "Clean, Code-Compliant Craftsmanship",
    desc: "Our licensed journeymen install premium commercial-grade parts to exact Washington State Uniform Plumbing Code standards, leaving your home spotless.",
  },
  {
    step: "05",
    title: "1-Year Parts & Labor Warranty",
    desc: "Every repair and installation is fully backed by our ironclad 365-day parts and labor guarantee for genuine long-term peace of mind.",
  },
];

export const OLDER_HOMES_PIPES = [
  {
    type: "Cast Iron Drain Pipes",
    era: "Common in pre-1970 homes (Riverside, Bayside, Northwest Everett)",
    issue: "Subject to internal scaling, tuberculation, and bottom-channel rotting caused by sewer acid. Can silently collapse within foundations.",
    solution: "Camera diagnostics, descaling, or targeted ABS/PVC pipe transitions without unnecessary drywall destruction.",
  },
  {
    type: "Galvanized Steel Water Lines",
    era: "Common in 1940s-1960s homes throughout Snohomish County",
    issue: "Corrode from the inside out, restricting water flow to a trickle, producing orange rusty water, and forming spontaneous pinhole leaks.",
    solution: "Whole-home Uponor PEX-A repiping with dedicated home shutoffs and smooth, clean water flow.",
  },
  {
    type: "Polybutylene (Quest) Piping",
    era: "Installed extensively in 1978-1995 construction",
    issue: "Prone to sudden microscopic embrittlement and catastrophic joint failure when reacting with treated municipal chlorine.",
    solution: "Comprehensive pipe replacement before catastrophic interior flooding compromises ceilings and framing.",
  },
];

export const FAQS_DATA = [
  {
    q: "Does Danika Plumbing serve all of Snohomish County?",
    a: "Yes. We serve Everett and surrounding Snohomish County communities including Mukilteo, Mill Creek, Marysville, Lynnwood, Edmonds, Lake Stevens, Snohomish, Arlington, Monroe, Mountlake Terrace, Brier, and Bothell, as well as King County / Greater Seattle.",
  },
  {
    q: "Do you provide emergency plumbing in Everett?",
    a: "Yes. Emergency plumbing is available 24 hours a day, 7 days a week. Call (425) 374-1557 any time of day or night to dispatch a licensed local plumber.",
  },
  {
    q: "When should I call an emergency plumber in Everett?",
    a: "Call right away for a burst pipe, water you cannot shut off, sewage backing up into the house, a rapidly leaking water heater, or complete loss of water pressure. If you smell gas, evacuate the house immediately and contact Puget Sound Energy before calling us.",
  },
  {
    q: "How much does a plumber cost in Everett, WA?",
    a: "Plumbing costs depend on physical access to the pipe, required materials, municipal permit needs, urgency, and the system age. We always perform an in-person diagnostic first and give you a firm, written upfront estimate before any work starts so there are never surprises.",
  },
  {
    q: "What does plumbing repair cost in Everett, WA?",
    a: "A simple exposed fixture repair or flapper replacement costs far less than repairs inside walls, under foundation slabs, or underground sewer laterals. Our written estimates clearly break down parts and labor so you know the exact scope before authorizing work.",
  },
  {
    q: "Does Everett's water quality affect my plumbing?",
    a: "Everett's water originates from Spada Reservoir and is treated and tested rigorously. Most plumbing issues in local homes stem from internal aging pipes—such as corroded galvanized iron or deteriorating valves—rather than the municipal water supply itself.",
  },
  {
    q: "Is Everett's water quality different from Seattle's?",
    a: "The sources are different: Everett draws from the Sultan River basin via Spada Reservoir, while Seattle draws from the Cedar River and Tolt River watersheds. Both provide high-quality surface water, but older plumbing within local houses dictates what comes out of the tap.",
  },
  {
    q: "Why do drains and sewers back up so often in Everett and Snohomish County?",
    a: "Backups are especially common in older neighborhoods with mature trees whose roots infiltrate clay or cast iron sewer joints. Heavy Pacific Northwest winter rains saturate the soil, driving water and debris into compromised sewer lines.",
  },
  {
    q: "My home in Everett's Riverside neighborhood has cast iron drain pipes. Do they need replacing?",
    a: "Not necessarily. We run a digital video camera through the line to evaluate wall thickness, internal rust scaling, and joint integrity. Sound sections can often remain in service while damaged or channeling sections are repaired.",
  },
  {
    q: "Do you install plumbing fixtures during kitchen and bathroom upgrades?",
    a: "Yes. We handle both rough-in plumbing and finish trim installation for remodels, including sinks, designer faucets, toilets, walk-in showers, freestanding tubs, dishwashers, and garbage disposals.",
  },
  {
    q: "How does a plumber handle water heater repairs and replacements in Everett, and what determines the cost?",
    a: "We test electrical elements, thermostats, thermocouple connections, and gas control valves first. If the tank is leaking from corrosion or beyond its design life, we recommend replacement. Cost factors include tank size (40, 50, 75 gal) vs tankless, gas venting modifications, thermal expansion tanks, and Snohomish County permit codes.",
  },
  {
    q: "Do you provide electrical services in addition to plumbing?",
    a: "Yes! Danika Plumbing & Electric is a dual-licensed contractor. We provide residential electrical services including 200A service panel upgrades, Level 2 EV home chargers, backup generator hookups, whole-home rewiring, and electrical troubleshooting.",
  },
];

export const SERVICE_AREAS_SNOHOMISH = [
  "Everett (Headquarters)",
  "Mukilteo",
  "Mill Creek",
  "Lynnwood",
  "Edmonds",
  "Marysville",
  "Lake Stevens",
  "Snohomish",
  "Arlington",
  "Mountlake Terrace",
  "Brier",
  "Monroe",
  "Bothell (Snohomish)",
];

export const SERVICE_AREAS_KING = [
  "Seattle",
  "West Seattle",
  "Lake City",
  "Shoreline",
  "Kenmore",
  "Woodinville",
  "Kirkland",
  "Bellevue",
  "Redmond",
  "Bothell (King)",
  "Issaquah",
  "Duvall",
  "Maple Valley",
  "Des Moines",
];
