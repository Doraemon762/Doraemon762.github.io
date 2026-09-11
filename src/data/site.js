/**
 * Single source of truth for all editable site content.
 *
 * Convention: one export per page section.
 * When you add a new section, add its export here and import it in that component.
 *
 * Media note:
 *   `media` fields are null while we have no final assets.
 *   Components fall back to the built-in SVG/CSS placeholder when null.
 *   Drop real files into  public/videos/  or  public/images/  and set the path here.
 */

/* ------------------------------------------------------------------ */
/* Site-wide                                                           */
/* ------------------------------------------------------------------ */

export const site = {
  brand: 'HumanPlus.AI',
  title: 'HumanPlus1000 — 1000-Hour Embodied Motion Dataset',
  description:
    'From the real world to world-human models: 1000 hours of synchronized first-person vision and whole-body motion data.',
}

export const nav = {
  links: [
    { label: 'Overview', href: '#overview' },
    { label: 'Dataset', href: '#dataset' },
    { label: 'Download', href: '#download' },
    { label: 'Team', href: '#team' },
  ],
}

export const footer = {
  label: 'HumanPlus1000 Dataset',
  note: 'Synchronized human embodied data for embodied intelligence research.',
  email: 'hello@example.com',
  copyright: `© ${new Date().getFullYear()} HumanPlus1000`,
}

/* ------------------------------------------------------------------ */
/* Dataset statistics — SINGLE SOURCE OF TRUTH                         */
/* ------------------------------------------------------------------ */

/**
 * Core dataset numbers, keyed by meaning.
 *
 * Values below are placeholders. Replace them once the dataset statistics
 * are finalized — every section reads from this object, so changing a
 * number here updates the whole site at once.
 *
 * Referenced by:
 *   - Hero (01)              → hero.stats
 *   - Dataset Scale (03)     → TODO: pick from this object when built
 *   - Any later section that needs the same figures
 */
export const datasetStats = {
  hours: { value: '1000', unit: '', label: 'Hour' },
  locations: { value: '100', unit: '+', label: 'Location' },
  tasks: { value: '500', unit: '+', label: 'Task' },
  people: { value: '200', unit: '+', label: 'People' },
}

/* ------------------------------------------------------------------ */
/* 01 — Cover / Hero                                                   */
/* ------------------------------------------------------------------ */

export const hero = {
  /* Top corner mono labels */
  liveLabel: 'LIVE — EMBODIED DATA STREAM',
  recLabel: 'REC / 2026',

  /* Pill above the title */
  pretitle: 'A 1000-hour synchronized human embodied dataset',

  /**
   * Title, rendered on two lines.
   * `accent` marks the part drawn in the accent colour.
   */
  title: {
    line1: { pre: 'HumanPlus', accent: '1000', post: '-Hour' },
    line2: 'Embodied Motion Dataset',
  },

  /**
   * Subtitle as ordered fragments.
   * Set `strong: true` to render a fragment in full white.
   * Edit the strings freely — order and count are up to you.
   */
  subtitle: [
    { text: 'From the Real World to ' },
    { text: 'World-Human Models', strong: true },
    { text: ', Building a Continuously Evolving ' },
    { text: 'Data Flywheel', strong: true },
  ],

  /**
   * Headline numbers — references datasetStats, so the values stay
   * consistent with every other section.
   * Reorder or drop entries here without touching the values themselves.
   */
  stats: [
    datasetStats.hours,
    datasetStats.locations,
    datasetStats.tasks,
    datasetStats.people,
  ],
}

/* ------------------------------------------------------------------ */
/* 02 — Demo                                                           */
/* ------------------------------------------------------------------ */

export const demo = {
  /* Section title — the dominant visual element of this block */
  title: 'DEMO',

  /* One-line description under the title */
  description:
    'Experience how human motion and real-world interaction data can empower embodied intelligence and robot learning.',

  /* Text shown inside the frame while there is no real footage */
  placeholderLabel: 'DEMO VIDEO',

  /**
   * Real demo video path.
   * null → the frame renders the rectangle placeholder.
   * Once the asset exists, set e.g.  '/videos/demo/demo-reel.mp4'
   */
  videoSrc: null,
}

/* ------------------------------------------------------------------ */
/* 03 — Overview                                                       */
/* ------------------------------------------------------------------ */

export const overview = {
  /* Small mono kicker above the title */
  label: 'OVERVIEW',

  /* Title — left column headline */
  title: 'HumanPlus1000',

  /**
   * Body copy — one string per paragraph, no bold fragments.
   * (If bold ever comes back, switch a paragraph to the fragment form
   *  used by `hero.subtitle`: [{ text, strong }, ...].)
   */
  body: [
    'The HumanPlus1000-Hour Embodied Motion Dataset is a large-scale, multi-modal, and continuously evolving human data infrastructure for embodied intelligence and robot learning.',
    'HumanPlus1000 integrates first-person vision, whole-body motion, hand movements, human-object interactions, and real-world changes into a unified spatiotemporal representation, capturing how humans perceive, act, interact, and change the world. It covers diverse real-world scenarios, including campus life, industrial operations, logistics, warehousing, and household activities.',
    'Through standardized data collection, multi-modal synchronization, structured annotation, and quality control, HumanPlus1000 provides a scalable data foundation for imitation learning, World-Human Model development, and real-world robot deployment.',
  ],

  /* Text shown inside the frame while there is no real image */
  placeholderLabel: 'IMAGE PLACEHOLDER',

  /**
   * Real overview image path.
   * null → the frame renders the rectangle placeholder.
   * Once the asset exists, set  '/images/overview/overview.jpg'
   */
  imageSrc: null,
}
