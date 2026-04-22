# NeuraVeil Userscript

[![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser)
[![GreasyFork installs](https://img.shields.io/greasyfork/dt/560252?style=flat-square&label=installs&color=3b82f6)](https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser)
[![Version](https://img.shields.io/badge/dynamic/json?style=flat-square&label=version&color=8b5cf6&query=%24.version&url=https%3A%2F%2Fapi.greasyfork.org%2Fen%2Fscripts%2F560252.json)](https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser/versions)
[![GitHub license](https://img.shields.io/github/license/DREwX-code/neuraveil?style=flat-square)](./LICENSE)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/DREwX-code/neuraveil?style=flat-square&label=Code%20quality&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/drewx-code/neuraveil/overview/main)

![NeuraVeil banner](./assets/media/NeuraVeil-banner.png)
<div align="center"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=6850A1&center=true&vCenter=true&width=600&lines=Explain+this+code+step+by+step;Optimize+this+script+without+breaking+it;Summarize+this+article+in+5+bullet+points;Turn+my+notes+into+clean+documentation;Generate+an+image+that+explains+this+concept" alt="Typing SVG" /></div>

[NeuraVeil](https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser) is an AI chat panel, lightweight and modern, that integrates naturally on any webpage.

It uses the open (no-signup) APIs of [Pollinations.ai](https://github.com/pollinations/pollinations) for text and image generation, in order to provide immediate access to an AI directly during your browsing.

No tabs.  
No accounts.  
No interruptions.

Just a simple, fast, and clean chat, usable on a daily basis.

> [!WARNING]
> NeuraVeil AI may generate inaccurate, incomplete, outdated, or misleading information.
> Always independently verify critical, medical, legal, financial, or academic data before making decisions.

## What NeuraVeil does

- Adds an AI chat directly on the websites you visit
- Allows managing multiple conversations with history
- Gives control over the depth and style of responses
- Integrates image generation and image search
- Offers real privacy when you don’t want to save anything
- Understands and interacts with the current page content

Everything works without page reloads.

---

## Main features

### Interface

- Discreet floating chat bubble
- Draggable chat trigger with saved position
- Click to toggle open and close
- Smart positioning to stay within the viewport
- Dockable side panel (left or right) with saved position
- Resizable side panel with persistent width
- Collapsible side panel with a compact toolbar mode
- Fast close with the Escape key
- Dedicated Data Management section for resetting local data


### Conversations

- High number of saved conversations (stored locally in the browser)
- Load, rename, or delete a conversation
- Clear the entire history
- Start a new chat at any time
- It is recommended to regularly remove unused conversations to avoid unnecessary storage usage
- Clear visibility on local storage usage for conversations and settings

### Reasoning and tone

- Persistent reasoning levels:
  Auto, Minimal, Low, Medium, High, Ultra
- Available response styles:
  Default, Professional, Direct, Teaching, Creative, Technical, Geek, Persuasive

<details>
  <summary><strong>How reasoning levels work</strong></summary>

  Reasoning levels mainly affect response depth, speed, tool routing, and how carefully NeuraVeil validates ambiguous requests before answering.

  - <strong>Auto</strong>: automatically chooses the most suitable level for the request  
  - <strong>Minimal</strong>: shortest and fastest path, with tools used mainly for explicit requests  
  - <strong>Low</strong>: simple, practical answers with light reasoning  
  - <strong>Medium</strong>: balanced clarity and detail, with proper tool use for explicit image or music requests  
  - <strong>High</strong>: more structured answers, stronger intent validation, and more careful tool routing  
  - <strong>Ultra</strong>: the most cautious mode, better for ambiguous requests and less likely to invent links, sources, or media  

  Internal reasoning is never exposed to the user. Only the final response is shown.
</details>
<details>
  <summary><strong>Response styles explained</strong></summary>

  Response styles affect tone and presentation, not correctness.

  - <strong>Professional</strong>: formal, structured answers  
  - <strong>Direct</strong>: short replies, no fluff  
  - <strong>Teaching</strong>: step-by-step explanations  
  - <strong>Creative</strong>: vivid language and originality  
  - <strong>Technical</strong>: precise, developer-oriented  
  - <strong>Geek</strong>: tech jargon and references  
  - <strong>Persuasive</strong>: structured and convincing tone
</details>


### Ghost Mode (privacy)

- Disables all saving (no conversations are stored)
- Applies a distinct visual theme
- Displays a clear banner when the mode is active
- No data is stored by the script while the mode is enabled
- Image generation in this mode uses Pollinations.ai exclusively with the <code>&amp;private=true</code> parameter

### Images

- Supports multiple backends (Pollinations + AI Horde)
- Web image search via Openverse (with attribution and licensing)
- Copy, download, and direct link actions
- Generated image cache preserved across reloads
- Explicit image requests supported across all reasoning levels

### Page Analysis

- Extracts the main content of the current page
- Allows follow-up questions based on page context
- Enables intelligent search within the page
- Works directly without leaving the current website

Turn any webpage into an interactive knowledge source.

### Music

- Search for royalty-free music directly in chat
- Built-in audio player
- Source attribution and download options

Search, play, and download free music without leaving the page.

### Rendering and usability

- Readable code blocks with syntax highlighting
- Clickable links
- Multiple responses with tabs
- Quick actions: copy, regenerate, download
- Table rendering with dedicated styling and actions
- Rendering mathematical formulas with KaTeX support
- Protection against bugs when switching conversations during a request
- Keyboard input is fully isolated when typing in the chat, preventing website shortcuts from interfering

## Header controls

- Arrow: show or hide additional icons
- Settings: response customization and data management
- Ghost icon: enable or disable Ghost Mode
- Info icon (i): open the information panel
- History, new chat, switch to sidebar, close

## Compatibility

- Improved support for Safari
- Better handling of strict websites such as GitHub
- More robust fallback behavior when GM APIs are partially exposed
- More reliable local storage and startup behavior
- More robust fallback paths for syntax highlighting, math rendering, and media playback on CSP-restricted sites

## Notes

- Ghost Mode disables all local data storage
- Explicit image requests are supported across all reasoning levels
- High and Ultra apply stricter validation for ambiguous or visual requests

## Third-Party Libraries & Dependencies

NeuraVeil relies on carefully selected open-source libraries to power advanced features such as page analysis, rendering, and media integration.

- **DOMPurify**
  - Sanitizes HTML extracted from active pages before processing.
  - Source: <https://github.com/cure53/DOMPurify>
  - License: Apache-2.0 OR MPL-2.0

- **Mozilla Readability**
  - Extracts the main readable content from the active page for page analysis.
  - Source: <https://github.com/mozilla/readability>
  - License: Apache-2.0

- **Turndown**
  - Converts extracted HTML into clean Markdown before sending it to the AI.
  - Source: <https://github.com/mixmark-io/turndown>
  - License: MIT

- **Fuse.js**
  - Enables fast, typo-tolerant search in page content and conversation history.
  - Website: <https://fusejs.io/>
  - Source: <https://github.com/krisk/Fuse>
  - License: Apache-2.0

- **Highlight.js**
  - Provides syntax highlighting for code blocks across all supported programming languages.
  - Website: <https://highlightjs.org/>
  - Source: <https://github.com/highlightjs/highlight.js>
  - License: BSD 3-Clause

- **KaTeX**
  - Renders mathematical formulas with proper LaTeX-style formatting.
  - Website: <https://katex.org/>
  - Source: <https://github.com/KaTeX/KaTeX>
  - License: MIT

- **Pollinations.ai**
  - Provides open, no-signup APIs for text and image generation.
  - Website: <https://pollinations.ai/>
  - Source: <https://github.com/pollinations/pollinations>
  - License: MIT

- **AI Horde (Stable Horde)**
  - Provides a community-driven backend for image generation.
  - Website: <https://aihorde.net/>
  - Source: <https://github.com/Haidra-Org/AI-Horde>
  - License: AGPL-3.0

- **Openverse**
  - Provides access to openly licensed images and audio, with attribution and source links.
  - Website: <https://openverse.org/>
  - Source: <https://github.com/WordPress/openverse>
  - License: CC0 (API and metadata)

- **GreasyFork SVG Icon**  
  - Provides an interface icon.  
  - Created by denilsonsa.  
  - Source: <https://github.com/denilsonsa/denilsonsa.github.io/blob/master/icons/GreasyFork.svg>
  - License: Used with attribution (see source repository).


---

## Feedback and contributions

Feedback, bug reports, and improvement suggestions are welcome via [GreasyFork feedback](https://greasyfork.org/scripts/560252-neuraveil-ai-chat-in-your-browser/feedback) or [GitHub Issues](https://github.com/DREwX-code/neuraveil/issues).

## Author

Developed and maintained by **Dℝ∃wX** (GitHub: [DREwX-code](https://github.com/DREwX-code)).  
Engineered for performance, precision, and continuous evolution.

## License

This project is licensed under the <strong>Apache License 2.0</strong>.  
You are free to use, modify, and redistribute it under the terms of the license.
