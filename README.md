# NeuraVeil Userscript

[![GreasyFork](https://img.shields.io/static/v1?label=%20&message=GreasyFork&style=flat-square&labelColor=7B0000&color=960000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=)](https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser)
[![Version](https://img.shields.io/badge/dynamic/json?style=flat-square&label=version&color=%235865f2&query=%24.version&url=https%3A%2F%2Fapi.greasyfork.org%2Fen%2Fscripts%2F560252.json)](https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser/versions)
[![GitHub license](https://img.shields.io/github/license/DREwX-code/neuraveil?style=flat-square)](./LICENSE)

[NeuraVeil](https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser) is an AI chat panel, lightweight and modern, that integrates naturally on any webpage.

It uses the open (no-signup) APIs of [Pollinations.ai](https://github.com/pollinations/pollinations) for text and image generation, in order to provide immediate access to an AI directly during your browsing.

No need to change pages.  
No heavy interface.  
No account.

Just a simple, fast, and clean chat, usable on a daily basis.

---

## What NeuraVeil does

- Adds an AI chat directly on the websites you visit
- Allows managing multiple conversations with history
- Gives control over the depth and style of responses
- Integrates image generation and image search
- Offers real privacy when you don’t want to save anything

Everything works without page reloads.

---

## Main features

### Interface

- Discreet bubble in the bottom-right corner
- Sidebar mode (side panel) on the right
- Instant open and close
- Quick close with the Escape key

### Conversations

- **Unlimited** saved conversations
- Load, rename, or delete a conversation
- Clear the entire history
- Start a new chat at any time

### Reasoning and tone

- Persistent reasoning levels:
  Auto, Minimal, Low, Medium, High, Ultra
- Available response styles:
  Default, Professional, Direct, Teaching, Creative, Technical, Geek, Persuasive

### Ghost Mode (privacy)

- Disables all saving
- Applies a distinct visual theme
- Displays a clear banner when the mode is active
- No data is stored by the script while the mode is enabled

### Images

- Image generation via Pollinations.ai
- Smart search (Wikipedia / Wikimedia)
- Automatic preloading
- Built-in download button
- In Ultra mode, image suggestions may appear automatically

### Rendering and usability

- Readable code blocks with syntax highlighting
- Clickable links
- Multiple responses with tabs
- Quick actions: copy, regenerate, download
- Typing indicator
- Protection against bugs when switching conversations during a request

---

## Header controls

- Arrow: show or hide additional icons
- Settings: choose the response style
- Ghost icon: enable or disable Ghost Mode
- Info icon (i): open the information panel
- History, new chat, switch to sidebar, close

---

## Important notes

- Ghost Mode: no data is saved by the script
- Auto and Ultra modes may automatically suggest relevant images
- Uses Pollinations.ai, a free, fast, and performant API

---

## Third-Party Libraries

- **Highlight.js**  
  Used for syntax highlighting of code blocks across all supported programming languages.  
  Website: <https://highlightjs.org/>
  License: BSD 3-Clause

---

## Author

Developed and maintained by **Dℝ∃wX** (DREwX-code).  
Project designed for simplicity, performance, and user-focused evolution.

---

## License

This project is licensed under **Apache 2.0**.  
Free to use, modify, and contribute.
