export interface Update {
  id: string;
  title: string;
  date: string;
  category: 'news' | 'event' | 'announcement' | 'update';
  excerpt: string;
  content: string;
  image?: string;
  featured: boolean;
}

export const updates: Update[] = [
  {
    id: '1',
    title: 'Pakistan-Iran Ferry Service Operational Status Update',
    date: '2025-01-15',
    category: 'update',
    excerpt: 'Latest information on the operational status of the Karachi-Chabahar ferry route and expected service commencement timeline.',
    content: `The Pakistan-Iran ferry service connecting Karachi Port and Chabahar Port continues to progress toward full operational status. Recent developments indicate that both governments are working closely to finalize operational protocols and safety certifications.

Key updates include:
- Completion of port infrastructure improvements at both Karachi and Chabahar terminals
- Finalization of immigration and customs procedures for ferry passengers
- Training programs for ferry crew and port staff
- Weather monitoring systems installation for safe navigation

Passengers are advised to stay updated through official channels as the service prepares for regular operations.`,
    featured: true,
  },
  {
    id: '2',
    title: 'Bilateral Agreement Strengthens Ferry Service Cooperation',
    date: '2024-12-20',
    category: 'news',
    excerpt: 'Pakistan and Iran sign enhanced maritime cooperation agreement to support ferry service operations.',
    content: `In a significant development for regional connectivity, Pakistan and Iran have signed an enhanced bilateral agreement focusing on maritime transport cooperation. The agreement includes provisions for:

- Streamlined visa procedures for ferry passengers
- Joint safety and security protocols
- Technical cooperation in port management
- Trade facilitation measures

This agreement is expected to accelerate the full operationalization of the ferry service and enhance people-to-people contacts between the two nations.`,
    featured: true,
  },
  {
    id: '3',
    title: 'Port Infrastructure Upgrades Completed at Karachi Terminal',
    date: '2024-11-10',
    category: 'update',
    excerpt: 'Karachi Port Trust announces completion of passenger terminal upgrades for ferry service.',
    content: `Karachi Port Trust has announced the completion of significant infrastructure upgrades at the West Wharf passenger terminal. The improvements include:

- Modern passenger waiting areas with enhanced facilities
- Expanded immigration and customs counters
- Improved vehicle loading and unloading facilities
- Enhanced security and surveillance systems
- Passenger information displays and signage

These upgrades are designed to handle the expected passenger volume and ensure smooth operations once the ferry service becomes fully operational.`,
    featured: false,
  },
  {
    id: '4',
    title: 'Ferry Service Expected to Boost Regional Tourism',
    date: '2024-10-05',
    category: 'news',
    excerpt: 'Tourism officials highlight potential benefits of Pakistan-Iran ferry service for regional travel.',
    content: `Tourism authorities from both Pakistan and Iran have expressed optimism about the ferry service's potential to boost regional tourism. The maritime connection is expected to:

- Facilitate easier access for pilgrims visiting religious sites
- Promote cultural exchange between the two countries
- Support trade and business travel
- Create new tourism packages combining land and sea routes

The service is particularly anticipated to benefit religious tourism, with easier access to pilgrimage sites in both countries.`,
    featured: false,
  },
  {
    id: '5',
    title: 'Safety Certification Process Underway for Ferry Vessels',
    date: '2024-09-18',
    category: 'announcement',
    excerpt: 'Maritime authorities conducting comprehensive safety inspections and certifications for ferry vessels.',
    content: `The Pakistan Maritime Authority and Iranian Ports and Maritime Organization are conducting joint safety certification processes for vessels operating on the Karachi-Chabahar route.

The certification process includes:
- Vessel structural integrity inspections
- Safety equipment verification
- Crew training and certification
- Emergency response procedures review
- Navigation and communication systems testing

All vessels must meet international maritime safety standards before receiving approval for passenger service operations.`,
    featured: false,
  },
  {
    id: '6',
    title: 'Pilot Voyage Successfully Completed',
    date: '2024-08-25',
    category: 'event',
    excerpt: 'First successful pilot voyage between Karachi and Chabahar marks milestone for ferry service.',
    content: `A historic milestone was achieved with the successful completion of the first pilot voyage of the Pakistan-Iran ferry service. The test journey, which took place in August 2024, demonstrated:

- Successful navigation of the route
- Port handling procedures
- Immigration and customs clearance processes
- Passenger facilities and services

The pilot voyage provided valuable operational data and confirmed the viability of regular ferry operations between the two ports.`,
    featured: true,
  },
];

// Helper function to get latest updates
export function getLatestUpdates(limit: number = 3): Update[] {
  return updates
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Helper function to get featured updates
export function getFeaturedUpdates(): Update[] {
  return updates.filter(update => update.featured);
}

// Helper function to get updates by category
export function getUpdatesByCategory(category: Update['category']): Update[] {
  return updates
    .filter(update => update.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
