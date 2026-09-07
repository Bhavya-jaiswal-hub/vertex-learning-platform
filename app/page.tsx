import type { ReactNode } from "react";
import Link from "next/link";

const colors = [
  ["Primary 500", "#F97316"], ["Primary 400", "#FB923C"], ["Primary 300", "#FDBA74"],
  ["Primary 200", "#FED7AA"], ["Primary 100", "#FFF1E5"], ["Neutral 900", "#0F172A"],
  ["Neutral 700", "#334155"], ["Neutral 500", "#64748B"], ["Neutral 300", "#CBD5E1"],
  ["Neutral 200", "#E2E8F0"], ["Neutral 100", "#F1F5F9"], ["Neutral 50", "#F8FAFC"], ["White", "#FFFFFF"],
];

const typeRows = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta"],
];

type IconName = "bell" | "search" | "play" | "file" | "bookmark" | "chart" | "clock" | "user" | "chevron" | "eye" | "grid" | "target" | "lock" | "check" | "external";

function Icon({ name, filled = false }: { name: IconName; filled?: boolean }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, ReactNode> = {
    bell: <><path {...common} d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path {...common} d="M10 22h4" /></>,
    search: <><circle {...common} cx="11" cy="11" r="6" /><path {...common} d="m16 16 4 4" /></>,
    play: <path {...common} d="m9 7 9 5-9 5V7Z" />,
    file: <><path {...common} d="M6 3h8l4 4v14H6z" /><path {...common} d="M14 3v5h5M9 13h6M9 17h6" /></>,
    bookmark: <path {...common} d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1Z" />,
    chart: <><path {...common} d="M5 20V10M10 20V5M15 20v-7M20 20V3" /><path {...common} d="M3 20h19" /></>,
    clock: <><circle {...common} cx="12" cy="12" r="8" /><path {...common} d="M12 7v5l3 2" /></>,
    user: <><circle {...common} cx="12" cy="8" r="3" /><path {...common} d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6" /></>,
    chevron: <path {...common} d="m9 18 6-6-6-6" />,
    eye: <><path {...common} d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" /><circle {...common} cx="12" cy="12" r="2.5" /></>,
    grid: <><rect {...common} x="4" y="4" width="6" height="6" /><rect {...common} x="14" y="4" width="6" height="6" /><rect {...common} x="4" y="14" width="6" height="6" /><rect {...common} x="14" y="14" width="6" height="6" /></>,
    target: <><circle {...common} cx="12" cy="12" r="8" /><circle {...common} cx="12" cy="12" r="3" /><path {...common} d="m17 7 4-4" /></>,
    lock: <><rect {...common} x="5" y="10" width="14" height="10" rx="2" /><path {...common} d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    check: <path {...common} d="m7 12 3 3 7-7" />,
    external: <><path {...common} d="M14 5h5v5M19 5l-8 8" /><path {...common} d="M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" /></>,
  };
  return <svg className={`icon ${filled ? "icon-filled" : ""}`} viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function Mark() { return <span className="mark" aria-hidden="true"><i /><i /></span>; }

function Label({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-label"><span>{number}</span><strong>{children}</strong></div>;
}

function Section({ number, title, className = "", children }: { number: string; title: string; className?: string; children: ReactNode }) {
  return <section className={`panel ${className}`}><Label number={number}>{title}</Label>{children}</section>;
}

function Swatches() {
  return <div className="swatches">{colors.map(([name, hex]) => <div className="swatch" key={name}><div className="swatch-color" style={{ backgroundColor: hex }} /><strong>{name}</strong><small>{hex}</small></div>)}</div>;
}

function ExampleButton({ className = "", disabled = false, children }: { className?: string; disabled?: boolean; children: ReactNode }) {
  return <button type="button" className={className} disabled={disabled}>{children}</button>;
}

function ButtonExamples() {
  return <div className="button-table">
    <span /><span>Primary</span><span>Secondary</span><span>Tertiary</span><span>Text</span>
    <span>Default</span><ExampleButton>Get Started</ExampleButton><ExampleButton className="secondary">Explore Courses</ExampleButton><ExampleButton className="tertiary">View Lesson <Icon name="external" /></ExampleButton><ExampleButton className="text-button">Watch Video <Icon name="play" filled /></ExampleButton>
    <span>Hover</span><ExampleButton className="preview-hover">Get Started</ExampleButton><ExampleButton className="secondary preview-hover">Explore Courses</ExampleButton><ExampleButton className="tertiary preview-hover">View Lesson <Icon name="external" /></ExampleButton><ExampleButton className="text-button preview-hover">Watch Video <Icon name="play" filled /></ExampleButton>
    <span>Disabled</span><ExampleButton disabled>Get Started</ExampleButton><ExampleButton className="secondary" disabled>Explore Courses</ExampleButton><ExampleButton className="tertiary" disabled>View Lesson <Icon name="external" /></ExampleButton><ExampleButton className="text-button" disabled>Watch Video <Icon name="play" filled /></ExampleButton>
  </div>;
}

function Card({ kind }: { kind: "course" | "video" | "lesson" | "resource" }) {
  if (kind === "course") return <article className="example-card course-card"><div className="fake-cover"><span>N</span></div><div><strong>Next.js for Production</strong><p>Build scalable, high-performance web applications with Next.js.</p><small><Icon name="chart" /> Intermediate <Icon name="clock" /> 18h 24m <Icon name="bookmark" /> 12 modules</small></div></article>;
  if (kind === "video") return <article className="example-card"><span className="tag orange">VIDEO</span><strong>Data Fetching in Server Components</strong><p>Learn how to fetch data on the server using async/await and Next.js best practices.</p><small>Lesson 5.1 <span>·</span> 12:45 <b><Icon name="play" filled /> Watch from 12:45</b></small></article>;
  if (kind === "lesson") return <article className="example-card"><span className="tag blue">LESSON</span><strong>Data Fetching &amp; Caching</strong><p>Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.</p><small>Module 5 <b>View lesson <Icon name="external" /></b></small></article>;
  return <article className="example-card"><Icon name="file" /><strong>Caching and Revalidation Guide</strong><p>Deep dive into Next.js caching strategies.</p><small>PDF <span>·</span> 1.2 MB <b><Icon name="external" /></b></small></article>;
}

export function DesignSystem() {
  const iconNames: IconName[] = ["bell", "search", "play", "file", "bookmark", "chart", "clock", "user", "chevron"];
  return <main className="design-system">
    <header className="board-header panel">
      <div className="intro"><div className="brand"><Mark /><strong>Vertex</strong></div><h1>Design System</h1><p>A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.</p><small>VERSION 1.0 <span>·</span> MAY 2025</small></div>
      <div className="colors"><Label number="01">Colors</Label><strong className="sub-label">Primary</strong><Swatches /></div>
    </header>

    <div className="top-grid">
      <Section number="02" title="Typography"><div className="font-sample"><span>Ag</span><div><strong>Playfair Display</strong><small>Elegant <i>·</i> Readable <i>·</i> Timeless</small></div></div><div className="font-sample sans"><span>Ag</span><div><strong>Inter</strong><small>Clean <i>·</i> Modern <i>·</i> Highly legible</small></div></div></Section>
      <Section number="03" title="Type Scale" className="type-scale"><div className="type-head"><span>Style</span><span>Font</span><span>Size / Line Height</span><span>Weight</span><span>Use</span></div>{typeRows.map((row) => <div className="type-row" key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}</Section>
    </div>

    <div className="middle-grid">
      <Section number="04" title="Spacing System"><small className="section-copy">Base unit: 4px</small><div className="space-bars">{[4, 8, 12, 16, 24, 32, 40, 48, 64].map((value) => <div key={value}><i style={{ height: `${Math.max(5, value / 1.35)}px` }} /><strong>{value}</strong><small>({value / 16}rem)</small></div>)}</div></Section>
      <Section number="05" title="Radius & Shadows"><small className="section-copy">Radius</small><div className="radius-row">{["4px", "8px", "12px", "16px", "24px", "Full"].map((value) => <div key={value}><i className={`radius radius-${value.replace("px", "").toLowerCase()}`} /><small>{value}{value !== "Full" && <><br />({value === "4px" ? "xs" : value === "8px" ? "sm" : value === "12px" ? "md" : value === "16px" ? "lg" : "xl"})</>}</small></div>)}</div><small className="section-copy">Shadows</small><div className="shadow-row">{[["Sm", "0 1px 2px 0", "rgba(15, 23, 42, 0.05)"], ["Md", "0 4px 12px -2px", "rgba(15, 23, 42, 0.08)"], ["Lg", "0 12px 24px -4px", "rgba(15, 23, 42, 0.10)"], ["Xl", "0 20px 40px -8px", "rgba(15, 23, 42, 0.12)"]].map(([name, value, rgba]) => <div key={name}><strong>{name}</strong><small>{value}<br />{rgba}</small></div>)}</div></Section>
    </div>

    <div className="controls-grid">
      <Section number="06" title="Icons"><small className="section-copy">Outline Style</small><div className="icon-row">{iconNames.map((name) => <Icon key={name} name={name} />)}</div><small className="section-copy">Filled Style</small><div className="icon-row">{iconNames.map((name) => <Icon key={name} name={name} filled />)}</div><small className="section-copy">Icon Specs</small><ul><li>24×24px grid</li><li>2px stroke width (outline)</li><li>Rounded line caps</li><li>Consistent optical balance</li></ul></Section>
      <Section number="07" title="Buttons"><ButtonExamples /><small className="section-copy">Button Specs</small><ul><li>Height: 44px (default)</li><li>Padding: 0 16px (lg), 0 12px (md)</li><li>Radius: 12px</li><li>Font: Inter Medium (14–16px)</li></ul></Section>
      <Section number="08" title="Inputs"><label htmlFor="example-search">Search / Text Input</label><div className="input-wrap"><Icon name="search" /><input id="example-search" type="search" placeholder="Search anything..." /><kbd>⌘ K</kbd></div><label htmlFor="example-select">Select</label><select id="example-select" defaultValue="Most Relevant"><option>Most Relevant</option><option>Newest first</option></select><small className="section-copy">Field Specs</small><ul><li>Height: 44px</li><li>Radius: 12px</li><li>Border: 1px solid #E2E8F0</li><li>Padding: 0 16px</li><li>Focus: Border color #FB923C</li></ul></Section>
    </div>

    <div className="status-grid">
      <Section number="09" title="Badges / Tags"><div className="badge-columns"><span>Video <b className="tag orange">VIDEO</b></span><span>Lesson <b className="tag blue">LESSON</b></span><span>Popular <b className="tag orange">POPULAR</b></span></div></Section>
      <Section number="10" title="Status / Indicators"><div className="status-items"><span className="orange-text"><i className="in-progress" /> In Progress</span><span className="green-text"><i className="complete"><Icon name="check" /></i> Completed</span><span className="orange-text"><i className="now-playing"><Icon name="play" filled /></i> Now Playing</span><span><Icon name="lock" /> Locked</span></div></Section>
      <Section number="11" title="Progress Bar"><div className="progress"><i><b /></i><span>35% complete</span></div></Section>
    </div>

    <Section number="12" title="Cards" className="cards-section"><div className="card-grid"><div><small>Course Card</small><Card kind="course" /></div><div><small>Lesson Card (Video)</small><Card kind="video" /></div><div><small>Lesson Card (Lesson)</small><Card kind="lesson" /></div><div><small>Resource Card</small><Card kind="resource" /></div></div></Section>
    <Section number="13" title="Navigation" className="navigation-section"><div className="nav-examples"><nav className="nav-main" aria-label="Example primary navigation"><div className="brand"><Mark /><strong>Vertex</strong></div><b>Courses</b><span>My Learning</span></nav><nav className="breadcrumbs" aria-label="Example breadcrumbs"><small>Breadcrumbs</small><span>All Courses <i><Icon name="chevron" /></i> Next.js for Production <i><Icon name="chevron" /></i> Data Fetching &amp; Caching</span></nav><nav className="pagination" aria-label="Example pagination"><small>Pagination</small><span><Icon name="chevron" /> <b>1</b> 2 3 <i>…</i> 8 <Icon name="chevron" /></span></nav></div></Section>
    <Section number="14" title="Principles" className="principles">{[["eye", "Clarity First", "Every element should communicate clearly."], ["grid", "Consistency", "Use components and patterns consistently across the platform."], ["target", "Focus & Calm", "Remove noise and help learners focus on what matters."], ["user", "Accessible", "Design with accessibility and inclusivity in mind."]].map(([icon, title, copy]) => <div key={title}><Icon name={icon as IconName} /><span><strong>{title}</strong>{copy}</span></div>)}</Section>
  </main>;
}

export default function Home() {
  const courses = [
    {
      kind: "next",
      title: "Next.js for Production",
      description: "Build scalable, high-performance web applications with Next.js.",
      level: "Intermediate",
      duration: "18h 24m",
      modules: "12 modules",
    },
    {
      kind: "docker",
      title: "Docker Essentials",
      description: "Containerize applications and streamline your development workflow.",
      level: "Beginner",
      duration: "10h 12m",
      modules: "8 modules",
    },
    {
      kind: "typescript",
      title: "TypeScript Deep Dive",
      description: "Go beyond the basics and write safer, more expressive code.",
      level: "Intermediate",
      duration: "14h 36m",
      modules: "10 modules",
    },
  ];

  return (
    <main className="vertex-home">
      <header className="home-header">
        <Link className="home-brand" href="/" aria-label="Vertex home"><Mark /><strong>Vertex</strong></Link>
        <nav className="home-nav" aria-label="Primary navigation"><Link href="#courses">Courses</Link><Link href="#learning">My Learning</Link></nav>
        <div className="home-actions"><button className="notification-button" type="button" aria-label="Notifications"><Icon name="bell" /></button><button className="profile-button" type="button" aria-label="Open profile"><span className="profile-hair" aria-hidden="true" /><span className="profile-face" aria-hidden="true" /><span className="profile-shoulders" aria-hidden="true" /></button></div>
      </header>

      <section className="home-hero" aria-labelledby="hero-title">
        <p className="eyebrow">Intelligent learning</p>
        <h1 id="hero-title">Search your learning<br />in plain English.</h1>
        <p className="hero-copy">Vertex understands what you want to learn and<br className="desktop-break" /> finds the exact lessons across all your courses.</p>
        <Link className="explore-button" href="#courses">Explore Courses <Icon name="chevron" /></Link>
        <form className="learning-search" role="search">
          <label className="sr-only" htmlFor="learning-query">Search your learning</label>
          <Icon name="search" />
          <input id="learning-query" name="query" type="search" placeholder="Ask anything about your learning..." />
          <kbd aria-hidden="true">⌘ K</kbd>
        </form>
      </section>

      <section className="courses-section" id="courses" aria-labelledby="courses-title">
        <div className="courses-heading"><h2 id="courses-title">All Courses</h2><Link href="#courses">View all courses <Icon name="chevron" /></Link></div>
        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.title}>
              <div className={`course-image ${course.kind}`} aria-hidden="true"><span>{course.kind === "next" ? "N" : course.kind === "typescript" ? "TS" : "⌁"}</span></div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta"><span><Icon name="chart" />{course.level}</span><span><Icon name="clock" />{course.duration}</span><span><Icon name="file" />{course.modules}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="weekly-note" id="learning" aria-label="Course updates"><i /><span aria-hidden="true">☆</span><p>New courses and lessons added every week.</p><i /></section>
      <div className="coral-sky" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div>
    </main>
  );
}
