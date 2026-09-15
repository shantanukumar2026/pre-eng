import React, { useState } from 'react';
import {
    MapPin,
    Building2,
    Phone,
    Mail,
    Clock,
    ArrowUpRight,
    CheckCircle2,
} from 'lucide-react';
import './OfficeLocations.css';

type Office = {
    id: string;
    name: string;
    country: string;
    tag: 'HEADQUARTERS' | 'REGIONAL OFFICE' | 'ENGINEERING CENTRE' | 'SUPPORT HUB';
    address: string;
    phone: string;
    phoneRaw: string;
    email: string;
    timezone: string;
    image: string;
    mapEmbedUrl: string;
    googleMapsLink: string;
    capabilities: string[];
    stats: {
        supportWindow: string;
        firstResponse: string;
        siteCoverage: string;
    };
};

const getValidImageUrl = (src: string) => {
    if (!src) return '/maps/default_geocode-2x.png';
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
        return src;
    }
    return `/${src}`;
};

const OFFICES_DATA: Office[] = [
    {
        id: 'northeast',
        name: 'Northeast',
        country: 'United States',
        tag: 'HEADQUARTERS',
        address: '105 Maxess Road, Melville, NY 11747, United States',
        phone: '(631) 452-1111',
        phoneRaw: '16314521111',
        email: 'northeast@precasteng.com',
        timezone: 'ET · UTC−5',
        image: 'maps/northeast.avif',
        mapEmbedUrl:
            'https://www.google.com/maps?q=105%20Maxess%20Road%2C%20Melville%2C%20NY%2011747&z=14&output=embed',
        googleMapsLink:
            'https://www.google.com/maps/search/?api=1&query=105%20Maxess%20Road%2C%20Melville%2C%20NY%2011747',
        capabilities: [
            'Executive headquarters',
            'Advanced engineering',
            'Full lifecycle QA',
            'Supply chain control',
        ],
        stats: {
            supportWindow: '24/7',
            firstResponse: '< 1 hr',
            siteCoverage: 'National & Canada',
        },
    },
    {
        id: 'south',
        name: 'South',
        country: 'United States',
        tag: 'REGIONAL OFFICE',
        address: '850 NW Federal Hwy, Stuart, FL 34994, United States',
        phone: '(772) 297-0700',
        phoneRaw: '17722970700',
        email: 'south@precasteng.com',
        timezone: 'ET · UTC−5',
        image: 'maps/default_geocode-2x.png',
        mapEmbedUrl:
            'https://www.google.com/maps?q=850%20NW%20Federal%20Hwy%2C%20Stuart%2C%20FL%2034994&z=14&output=embed',
        googleMapsLink:
            'https://www.google.com/maps/search/?api=1&query=850%20NW%20Federal%20Hwy%2C%20Stuart%2C%20FL%2034994',
        capabilities: [
            'Client management',
            'Solution consulting',
            'Local partner network',
            'On-site coordination',
        ],
        stats: {
            supportWindow: '12h',
            firstResponse: '< 2 hr',
            siteCoverage: 'Regional',
        },
    },
    {
        id: 'midwest',
        name: 'Midwest',
        country: 'United States',
        tag: 'ENGINEERING CENTRE',
        address: '2200 Hunt Street, Detroit, MI 48207, United States',
        phone: '(631) 452-1111',
        phoneRaw: '16314521111',
        email: 'midwest@precasteng.com',
        timezone: 'ET · UTC−5',
        image: 'maps/default_geocode-2x.png',
        mapEmbedUrl:
            'https://www.google.com/maps?q=2200%20Hunt%20Street%2C%20Detroit%2C%20MI%2048207&z=14&output=embed',
        googleMapsLink:
            'https://www.google.com/maps/search/?api=1&query=2200%20Hunt%20Street%2C%20Detroit%2C%20MI%2048207',
        capabilities: [
            'Mechanical & electrical design',
            'PLC / SCADA development',
            'Testing & QA lab',
            'Commissioning teams',
        ],
        stats: {
            supportWindow: '12h',
            firstResponse: '< 2 hr',
            siteCoverage: 'Local',
        },
    },
    {
        id: 'westcoast',
        name: 'Westcoast',
        country: 'Canada',
        tag: 'ENGINEERING CENTRE',
        address: '1824 Store St 2nd Floor, Victoria, BC V8T 4R4, Canada',
        phone: '604 200 0616',
        phoneRaw: '16042000616',
        email: 'westcoast@precasteng.com',
        timezone: 'PT · UTC−8',
        image: 'maps/default_geocode-2x.png',
        mapEmbedUrl:
            'https://www.google.com/maps?q=1824%20Store%20St%202nd%20Floor%2C%20Victoria%2C%20BC%20V8T%204R4%2C%20Canada&z=14&output=embed',
        googleMapsLink:
            'https://www.google.com/maps/search/?api=1&query=1824%20Store%20St%202nd%20Floor%2C%20Victoria%2C%20BC%20V8T%204R4%2C%20Canada',
        capabilities: [
            'Mechanical & electrical design',
            'PLC / SCADA development',
            'Testing & QA lab',
            'Commissioning teams',
        ],
        stats: {
            supportWindow: '12h',
            firstResponse: '< 2 hr',
            siteCoverage: 'Local',
        },
    },
    {
        id: 'canada-east',
        name: 'Canada — East',
        country: 'Canada',
        tag: 'REGIONAL OFFICE',
        address: 'One Yonge Street, Toronto, Ontario M5E 1R4, Canada',
        phone: '+1 (438) 805-9990',
        phoneRaw: '14388059990',
        email: 'canada.east@precasteng.com',
        timezone: 'ET · UTC−5',
        image: 'maps/default_geocode-2x.png',
        mapEmbedUrl:
            'https://www.google.com/maps?q=One%20Yonge%20Street%2C%20Toronto%2C%20Ontario%20M5E%201R4%2C%20Canada&z=14&output=embed',
        googleMapsLink:
            'https://www.google.com/maps/search/?api=1&query=One%20Yonge%20Street%2C%20Toronto%2C%20Ontario%20M5E%201R4%2C%20Canada',
        capabilities: [
            'Client management',
            'Solution consulting',
            'Local partner network',
            'On-site coordination',
        ],
        stats: {
            supportWindow: '12h',
            firstResponse: '< 2 hr',
            siteCoverage: 'Regional',
        },
    },
    {
        id: 'canada-west',
        name: 'Canada — West',
        country: 'Canada',
        tag: 'REGIONAL OFFICE',
        address: '1824 Store St, 2nd Floor, Victoria, BC V8T 4R4, Canada',
        phone: '(604) 200-0616',
        phoneRaw: '16042000616',
        email: 'canada.west@precasteng.com',
        timezone: 'PT · UTC−8',
        image: 'maps/default_geocode-2x.png',
        mapEmbedUrl:
            'https://www.google.com/maps?q=1824%20Store%20St%2C%202nd%20Floor%2C%20Victoria%2C%20BC%20V8T%204R4%2C%20Canada&z=14&output=embed',
        googleMapsLink:
            'https://www.google.com/maps/search/?api=1&query=1824%20Store%20St%2C%202nd%20Floor%2C%20Victoria%2C%20BC%20V8T%204R4%2C%20Canada',
        capabilities: [
            'Client management',
            'Solution consulting',
            'Local partner network',
            'On-site coordination',
        ],
        stats: {
            supportWindow: '12h',
            firstResponse: '< 2 hr',
            siteCoverage: 'Regional',
        },
    },
    {
        id: 'latam',
        name: 'Caribbean / Latin America',
        country: 'Bahamas',
        tag: 'SUPPORT HUB',
        address: 'Crypto Isle – Green Roofs, 1 E Bay St, Nassau, Bahamas',
        phone: '(242) 802-8000',
        phoneRaw: '12428028000',
        email: 'latam@precasteng.com',
        timezone: 'EST · UTC−5',
        image: 'maps/default_geocode-2x.png',
        mapEmbedUrl:
            'https://www.google.com/maps?q=Crypto%20Isle%2C%201%20E%20Bay%20St%2C%20Nassau%2C%20Bahamas&z=14&output=embed',
        googleMapsLink:
            'https://www.google.com/maps/search/?api=1&query=Crypto%20Isle%2C%201%20E%20Bay%20St%2C%20Nassau%2C%20Bahamas',
        capabilities: [
            '24/7 monitoring',
            'Tier 1–2 support',
            'SLA management',
            'Remote diagnostics',
        ],
        stats: {
            supportWindow: '24/7',
            firstResponse: '< 1 hr',
            siteCoverage: 'Regional Support Hub',
        },
    },
];

export default function OfficeLocations() {
    const [selectedId, setSelectedId] = useState<string>('midwest');

    const currentOffice =
        OFFICES_DATA.find((o) => o.id === selectedId) || OFFICES_DATA[0];

    return (
        <section className="section-office-locations padding-global" id="office-locations">
            <div className="container-large">
                {/* Header Block */}
                <div className="office-locations-header">
                    <div className="h-flex-tiny">
                        <div className="chip_box" />
                        <span className="chip">STRATEGIC FOOTPRINT</span>
                    </div>

                    <h2 className="office-locations-title">
                        Seven offices, <span className="text-brand-500">one delivery standard</span>
                    </h2>
                    <p className="office-locations-desc">
                        Regional manufacturing nodes, engineering design hubs, and strategic
                        dispatch centers supporting civil infrastructure across North America.
                    </p>
                </div>

                {/* Master Unified Bento Card Group Container */}
                <div className="office-unified-card-group">
                    {/* LEFT: Compact Scrollable Selector List */}
                    <div className="office-selector-panel">
                        {OFFICES_DATA.map((office) => {
                            const isActive = office.id === currentOffice.id;
                            const isHq = office.tag === 'HEADQUARTERS';

                            return (
                                <button
                                    key={office.id}
                                    onClick={() => setSelectedId(office.id)}
                                    type="button"
                                    aria-pressed={isActive}
                                    className={`office-item-btn ${isActive ? 'is-active' : ''}`}
                                >
                                    {isActive && <div className="office-active-bar" />}

                                    <div className="office-item-content">
                                        <div className="office-pin-icon-box">
                                            <MapPin size={15} />
                                        </div>

                                        <div className="office-item-meta">
                                            <div className="office-item-title-row">
                                                <span className="office-item-name">{office.name}</span>
                                            </div>
                                            <span className="office-item-city">{office.country}</span>
                                            <div>
                                                <span className={`office-tag-badge ${isHq ? 'is-hq' : ''}`}>
                                                    {office.tag}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <ArrowUpRight size={14} className="office-item-arrow" />
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT: Active Office Showcase */}
                    <div className="office-showcase-panel">
                        <div className="office-showcase-body-grid">
                            {/* Left Column: Office Meta, Clean Contact Details, Capabilities & Metrics */}
                            <div className="office-left-details-col">
                                {/* Tag & Title Header */}
                                <div>
                                    <span className="office-header-tag">{currentOffice.tag}</span>
                                    <h3 className="office-header-title">
                                        {currentOffice.name}
                                        <span className="office-header-country">{currentOffice.country}</span>
                                    </h3>
                                </div>

                                {/* Clean Contact Items List matching reference */}
                                <ul className="office-clean-contact-list">
                                    <li className="office-clean-contact-item">
                                        <span className="office-clean-icon-pill">
                                            <Building2 size={16} />
                                        </span>
                                        <span className="office-clean-text-value">
                                            {currentOffice.address}
                                        </span>
                                    </li>

                                    <li className="office-clean-contact-item">
                                        <span className="office-clean-icon-pill">
                                            <Phone size={16} />
                                        </span>
                                        <a
                                            href={`tel:${currentOffice.phoneRaw}`}
                                            className="office-clean-link-value"
                                        >
                                            {currentOffice.phone}
                                        </a>
                                    </li>

                                    <li className="office-clean-contact-item">
                                        <span className="office-clean-icon-pill">
                                            <Clock size={16} />
                                        </span>
                                        <span className="office-clean-text-value font-mono">
                                            {currentOffice.timezone}
                                        </span>
                                    </li>
                                </ul>

                                {/* Capabilities on Site */}
                                <div className="office-capabilities-section">
                                    <p className="office-capabilities-label">Capabilities on site</p>
                                    <ul className="office-capabilities-list">
                                        {currentOffice.capabilities.map((cap, idx) => (
                                            <li key={idx} className="office-capability-chip">
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Metrics Summary */}
                                <div className="office-metrics-grid">
                                    <div className="office-metric-box">
                                        <p className="office-metric-value">{currentOffice.stats.supportWindow}</p>
                                        <p className="office-metric-label">Support window</p>
                                    </div>
                                    <div className="office-metric-box">
                                        <p className="office-metric-value">{currentOffice.stats.firstResponse}</p>
                                        <p className="office-metric-label">First response</p>
                                    </div>
                                    <div className="office-metric-box">
                                        <p className="office-metric-value">{currentOffice.stats.siteCoverage}</p>
                                        <p className="office-metric-label">Site coverage</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Stack of Photo Card + Map Card + Open Google Map Link */}
                            <div className="office-right-media-col">
                                {/* CARD 1: Facility Image Card */}
                                <div className="office-media-card">
                                    <div className="office-media-img-wrapper">
                                        <img
                                            src={getValidImageUrl(currentOffice.image)}
                                            alt={`${currentOffice.name} Facility`}
                                            className="office-media-img"
                                        />
                                    </div>
                                    <div className="office-media-caption">
                                        <Building2 size={13} className="text-brand" />
                                        <span>{currentOffice.name} office</span>
                                    </div>
                                </div>

                                {/* CARD 2: Interactive Google Map Card */}
                                <div className="office-media-card">
                                    <div className="office-media-map-wrapper">
                                        <iframe
                                            title={`${currentOffice.name} Map Location`}
                                            src={currentOffice.mapEmbedUrl}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Open Google Map Action Link */}
                                <a
                                    href={currentOffice.googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="office-google-maps-action"
                                >
                                    <span>Open Google Map</span>
                                    <ArrowUpRight size={15} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}