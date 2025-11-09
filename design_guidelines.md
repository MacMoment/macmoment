# MacMoment Portfolio - Design Guidelines

## Design Approach

**Terminal/Code-Inspired Aesthetic** - Drawing inspiration from developer tools like VS Code, GitHub CLI, and terminal interfaces. This approach creates authenticity for a plugin developer portfolio while maintaining modern web standards.

**Core Design Principles:**
- Monospace-first typography creating authentic code aesthetic
- Grid-based layouts mimicking terminal windows and code editors
- Subtle animations evoking command execution and system processes
- Clean information hierarchy despite technical aesthetic

---

## Typography

**Primary Font:** JetBrains Mono or Fira Code (monospace, code-focused)
- Hero/Headers: font-bold text-4xl to text-6xl tracking-tight
- Section Headers: font-semibold text-2xl to text-3xl
- Body Text: font-normal text-base to text-lg leading-relaxed
- Code Snippets: font-mono text-sm with line-height-6
- Terminal Prompts: font-medium text-sm with > or $ prefixes

**Secondary Font:** Inter or System UI (for readability in bio/testimonials)
- Use sparingly for longer text blocks where monospace reduces readability

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 24 (p-4, gap-8, my-12, py-16, mb-24)

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Code blocks and terminal windows: max-w-4xl for optimal reading
- Content sections: py-16 to py-24 for breathing room

**Grid Patterns:**
- Projects: grid-cols-1 md:grid-cols-3 gap-8
- Skills: grid-cols-2 md:grid-cols-4 gap-4
- Testimonials: grid-cols-1 md:grid-cols-2 gap-8

---

## Page Structure & Sections

### 1. Hero Section (100vh)
- Animated terminal window with typing effect introducing MacMoment
- Terminal prompt: `developer@macmoment:~$ whoami`
- Typing animation reveals: "Plugin Expert & Web Developer"
- Subtitle command: `$ cat specialties.txt` → "Minecraft Plugins • Discord Integration • Custom Systems"
- CTA buttons styled as terminal commands: `[View Projects]` `[Contact Me]`
- Background: Subtle matrix-style falling code animation or grid pattern

### 2. About/Bio Section
- Terminal window frame containing bio text
- Left side: Bio text with terminal prompt styling (`> About MacMoment`)
- Right side: ASCII art or terminal-style avatar/profile representation
- 2-column layout on desktop, stacked on mobile
- Include key statistics as terminal outputs (e.g., `> Projects Completed: 15+`)

### 3. Featured Projects (Primary Focus)
- 3-column grid showcasing MacAC, MacRefunds, Lighting Show Importer
- Each project card styled as terminal window with:
  - Window controls (minimize, maximize, close) decorative elements
  - Project title as terminal prompt: `developer@macmoment:~/projects/MacAC$`
  - Short description in terminal output style
  - Interactive code snippet preview (collapsed by default)
  - Click to expand showing syntax-highlighted Java code
  - Tags/tech stack displayed as command flags: `--java --spigot-api --discord-jda`
  - "View Details" link styled as `$ cd project-name`

### 4. Interactive Code Showcase
- Full-width section demonstrating code quality
- Tabbed interface mimicking code editor tabs
- Each tab shows different plugin code excerpt with Prism.js syntax highlighting
- Line numbers visible
- File path breadcrumb: `src/main/java/dev/macmoment/plugin/...`
- Copy button for each code block

### 5. Skills & Tech Stack
- Terminal-style skill tree or progress bars
- Categories: Languages, Frameworks, Tools, Platforms
- Each skill displays as command with animated loading bar:
  ```
  $ installing java.jar... ████████████ 95%
  $ installing spigot-api.jar... ███████████ 90%
  ```
- 4-column grid on desktop (2 on tablet, 1 on mobile)
- Icons represented as ASCII art or simple Unicode symbols

### 6. Testimonials
- Terminal output styled testimonial cards
- 2-column grid layout
- Each testimonial formatted as:
  ```
  > CLIENT_NAME@discord.com
  > "testimonial text here..."
  > Project: [project-name] | Rating: ★★★★★
  ```
- Include 4-6 testimonials with varied lengths
- Timestamp-style dates for authenticity

### 7. Contact Section
- Terminal command interface
- Display contact info as executable commands:
  ```
  $ discord --message @MacMoment
  $ email --send contact@macmoment.dev
  $ github --follow MacMoment
  ```
- Interactive hover states showing "command ready" feedback
- Footer with terminal prompt: `developer@macmoment:~$ _` (blinking cursor)

---

## Component Library

**Terminal Window Frame:**
- Border radius: rounded-lg
- Header bar with three dots (red, yellow, green) as decorative elements
- Title bar showing file path or window name
- Padding: p-4 to p-6

**Code Blocks:**
- Syntax highlighting via Prism.js (using Tomorrow Night theme or similar dark scheme)
- Line numbers: absolute positioned on left
- Background: subtle contrast from page background
- Border: 1px subtle border
- Padding: p-6

**Buttons:**
- Terminal command style: `[Action Text]` or `$ action-text`
- Borders: border-2 with rounded corners
- Padding: px-6 py-3
- Monospace font
- Blurred backgrounds when overlaying images

**Project Cards:**
- Terminal window aesthetic with header bar
- Padding: p-6
- Gap between elements: gap-4
- Hover: subtle scale transform (scale-105)
- Shadow: Medium shadow on hover

**Skill Bars:**
- Height: h-4 to h-6
- Animated fill on scroll into view
- Percentage label aligned right
- Container: rounded-full background with filled progress

---

## Animations

**Sparingly Used, High-Impact:**
- Hero typing effect: 50-80ms per character
- Terminal cursor blink: 500ms interval
- Code block fade-in on scroll: 300ms duration
- Skill bar fill animation: 1000ms ease-out
- Subtle matrix rain in hero background (low opacity, slow speed)
- Project card hover: smooth scale and shadow transition (200ms)

**No Animations:**
- No distracting particle effects
- No aggressive parallax scrolling
- No auto-playing carousels
- Keep animations purposeful and performance-conscious

---

## Images

**Hero Background:**
- Subtle code editor screenshot or matrix-style falling code pattern
- Low opacity (10-20%) to maintain readability
- Alternative: Geometric grid pattern suggesting terminal interface

**Project Screenshots:**
- Plugin GUI screenshots or Discord bot embed examples
- Displayed within terminal window frames
- Ratio: 16:9 or 4:3 maintaining consistency
- Placeholder: Use representative Minecraft plugin screenshots or Discord embed mockups

**No Images Needed:**
- Profile photo (use ASCII art or terminal-style representation instead)
- Decorative graphics (maintain pure code aesthetic)

---

## Accessibility

- Ensure code snippets remain readable with sufficient contrast
- Provide keyboard navigation for interactive code blocks
- Include aria-labels for terminal-styled interactive elements
- Maintain focus indicators on all clickable elements (style them as terminal cursor or selection)
- Screen reader friendly alt text for all visual representations

---

## GitHub Pages Optimization

- Single-page application structure
- All assets loaded via CDN (Prism.js, fonts, icon libraries)
- Minimal external dependencies
- Clean file structure: index.html, styles/, scripts/, assets/
- Optimized for fast load times (critical CSS inline, deferred JS)