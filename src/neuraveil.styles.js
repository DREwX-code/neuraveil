// NeuraVeil styles (loaded via @require)


const NEURAVEIL_CSS = `

                :host {
                    --nv-bg: rgba(23, 23, 28, 0.95);
                    --nv-bg-secondary: rgba(30, 30, 36, 0.9);
                    --nv-border: rgba(255, 255, 255, 0.08);
                    --nv-primary: #8b5cf6;
                    --nv-primary-hover: #7c3aed;
                    --nv-text: #ffffff;
                    --nv-text-muted: #a1a1aa;
                    --nv-radius: 16px;
                    --nv-radius-sm: 8px;
                    --nv-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                }

                * { box-sizing: border-box; }

                /* Trigger Button */
                .nv-trigger {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: var(--nv-bg);
                    border: 1px solid var(--nv-border);
                    box-shadow: var(--nv-shadow);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.18s ease, visibility 0.18s ease;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: 10;
                    touch-action: none;
                }
                .nv-trigger:hover { transform: scale(1.05); }
                .nv-trigger:active { transform: scale(0.95); }
                .nv-trigger.hidden {
                    opacity: 0;
                    transform: scale(0.82);
                    pointer-events: none;
                    visibility: hidden;
                }
                .nv-trigger.grabbing {
                    cursor: grabbing;
                    transform: scale(1.08);
                    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
                }
                .nv-trigger svg { width: 26px; height: 26px; fill: var(--nv-text); transition: all 0.3s; }

                /* Panel */
                .nv-panel {
                    position: absolute;
                    bottom: 72px;
                    right: 0;
                    width: 425px;
                    height: 500px;
                    max-height: 80vh;
                    background: var(--nv-bg);
                    border: 1px solid var(--nv-border);
                    border-radius: var(--nv-radius);
                    box-shadow: var(--nv-shadow);
                    display: flex;
                    flex-direction: column;
                    opacity: 0;
                    transform: translateY(18px) scale(0.97);
                    transform-origin: bottom right;
                    transition: opacity 0.22s ease, transform 0.22s ease;
                    pointer-events: none;
                    visibility: hidden;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    overflow: hidden;
                    z-index: 20;
                }

                .nv-panel.open {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    pointer-events: auto;
                    visibility: visible;
                    transition: opacity 0.28s ease, transform 0.28s ease;
                }
                .nv-panel.animating-out {
                    opacity: 0;
                    transform: translateY(18px) scale(0.97);
                    transition: opacity 0.28s ease, transform 0.28s ease;
                    pointer-events: none;
                    visibility: visible;
                }

                /* Sidebar Mode */
                .nv-panel.sidebar {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    height: 100vh;
                    max-height: 100vh;
                    border-radius: 0;
                    border-left: 1px solid var(--nv-border);
                    border-top: none;
                    border-bottom: none;
                    transform: translateX(100%);
                    opacity: 0;
                    width: 430px;
                    z-index: 99999;
                    transition: opacity 0.32s ease, transform 0.32s ease;
                }
                .nv-panel.sidebar.open {
                    transform: translateX(0);
                    opacity: 1;
                }
                .nv-panel.sidebar.animating-out {
                    transform: translateX(100%);
                    opacity: 0;
                    visibility: visible;
                    pointer-events: none;
                    transition: opacity 0.36s ease, transform 0.36s ease;
                }
                .nv-panel.sidebar.sidebar-left {
                    right: auto;
                    left: 0;
                    border-right: 1px solid var(--nv-border);
                    border-left: none;
                    transform: translateX(-100%);
                }
                .nv-panel.sidebar.sidebar-left.open {
                    transform: translateX(0);
                }
                .nv-panel.sidebar.sidebar-left.animating-out {
                    transform: translateX(-100%);
                }

                .nv-sidebar-toggle {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 0;
                    padding: 2px;
                    border: 1px solid transparent;
                    border-radius: 8px;
                    background: transparent;
                    transition: background 0.22s ease, border-color 0.22s ease, gap 0.22s ease;
                }
                .nv-panel.sidebar .nv-sidebar-toggle {
                    border-color: rgba(255, 255, 255, 0.07);
                    background: rgba(255, 255, 255, 0.035);
                }
                .nv-panel.sidebar .nv-sidebar-toggle:hover,
                .nv-panel.sidebar .nv-sidebar-toggle:focus-within {
                    gap: 2px;
                    border-color: rgba(255, 255, 255, 0.1);
                    background: rgba(255, 255, 255, 0.05);
                }
                .nv-sidebar-toggle #nv-btn-sidebar {
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    border-radius: 6px;
                    justify-content: center;
                    align-items: center;
                }
                .nv-sidebar-arrow {
                    position: static;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    border-radius: 6px;
                    border: 0;
                    background: transparent;
                    color: var(--nv-text-muted);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    opacity: 0;
                    max-width: 0;
                    overflow: hidden;
                    transform: translateX(-6px) scale(0.96);
                    transition: opacity 0.22s ease, max-width 0.22s ease, transform 0.22s ease, color 0.2s ease, background 0.2s ease;
                    pointer-events: none;
                }
                .nv-sidebar-toggle:hover .nv-sidebar-arrow,
                .nv-sidebar-toggle:focus-within .nv-sidebar-arrow,
                .nv-sidebar-arrow:hover {
                    opacity: 1;
                    max-width: 30px;
                    transform: translateX(0) scale(1);
                    pointer-events: auto;
                }
                .nv-sidebar-toggle.arrow-hidden .nv-sidebar-arrow {
                    opacity: 0;
                    max-width: 0;
                    transform: scale(0.96);
                    pointer-events: none;
                }
                .nv-panel:not(.sidebar) .nv-sidebar-toggle {
                    padding: 0;
                    border-color: transparent;
                    background: transparent;
                }
                .nv-panel:not(.sidebar) .nv-sidebar-arrow {
                    display: none;
                }
                .nv-sidebar-toggle #nv-btn-sidebar:hover,
                .nv-sidebar-arrow:hover {
                    color: var(--nv-text);
                    background: rgba(255, 255, 255, 0.1);
                }
                .nv-sidebar-arrow svg {
                    width: 18px;
                    height: 18px;
                    flex: 0 0 auto;
                    transition: transform 0.2s ease;
                }
                .nv-panel.sidebar-left .nv-sidebar-arrow svg {
                    transform: rotate(180deg);
                }

                .nv-panel.sidebar {
                    --nv-rail-width: 52px;
                    --nv-sidebar-header-height: 48px;
                    --nv-rail-start: 47px;
                }
                .nv-panel.sidebar::before {
                    content: '';
                    position: absolute;
                    top: var(--nv-rail-start);
                    bottom: 0;
                    width: var(--nv-rail-width);
                    z-index: 7;
                    background: rgba(255, 255, 255, 0.025);
                    pointer-events: none;
                }
                .nv-panel.sidebar::after {
                    content: '';
                    position: absolute;
                    top: calc(var(--nv-sidebar-header-height) - 1px);
                    height: 1px;
                    left: 0;
                    right: var(--nv-rail-width);
                    z-index: 6;
                    background: var(--nv-border);
                    pointer-events: none;
                }
                .nv-panel.sidebar:not(.sidebar-left)::before {
                    right: 0;
                    border-left: 1px solid rgba(255, 255, 255, 0.07);
                }
                .nv-panel.sidebar.sidebar-left::before {
                    left: 0;
                    border-right: 1px solid rgba(255, 255, 255, 0.07);
                }
                .nv-panel.sidebar.sidebar-left::after {
                    left: var(--nv-rail-width);
                    right: 0;
                }
                .nv-panel.sidebar:not(.sidebar-left) .nv-header,
                .nv-panel.sidebar:not(.sidebar-left) .nv-messages,
                .nv-panel.sidebar:not(.sidebar-left) .nv-input-area {
                    width: calc(100% - var(--nv-rail-width));
                    margin-right: var(--nv-rail-width);
                }
                .nv-panel.sidebar.sidebar-left .nv-header,
                .nv-panel.sidebar.sidebar-left .nv-messages,
                .nv-panel.sidebar.sidebar-left .nv-input-area {
                    width: calc(100% - var(--nv-rail-width));
                    margin-left: var(--nv-rail-width);
                }
                .nv-panel.sidebar:not(.sidebar-left) .nv-settings,
                .nv-panel.sidebar:not(.sidebar-left) .nv-info,
                .nv-panel.sidebar:not(.sidebar-left) .nv-history {
                    top: var(--nv-sidebar-header-height);
                    left: 0;
                    right: var(--nv-rail-width);
                    transform: translateX(-100%);
                }
                .nv-panel.sidebar.sidebar-left .nv-settings,
                .nv-panel.sidebar.sidebar-left .nv-info,
                .nv-panel.sidebar.sidebar-left .nv-history {
                    top: var(--nv-sidebar-header-height);
                    left: var(--nv-rail-width);
                    right: 0;
                    transform: translateX(100%);
                }
                .nv-panel.sidebar .nv-settings.visible,
                .nv-panel.sidebar .nv-info.visible,
                .nv-panel.sidebar .nv-history.visible {
                    transform: translateX(0);
                }
                .nv-panel.sidebar .nv-header {
                    min-height: var(--nv-sidebar-header-height);
                    padding: 8px 14px;
                    position: static;
                    border-bottom: 0;
                    flex: 0 0 var(--nv-sidebar-header-height);
                    align-self: flex-start;
                }
                .nv-panel.sidebar.sidebar-left .nv-header {
                    align-self: flex-end;
                }
                .nv-panel.sidebar .nv-header-main {
                    min-height: 32px;
                }
                .nv-panel.sidebar .nv-title {
                    padding-top: 1px;
                    max-width: 100%;
                }
                .nv-panel.sidebar .nv-status-logo {
                    position: absolute;
                    top: 8px;
                    width: 32px;
                    height: 32px;
                    margin: 0;
                    z-index: 10;
                    border-radius: 6px;
                }
                .nv-panel.sidebar:not(.sidebar-left) .nv-status-logo {
                    right: 9px;
                }
                .nv-panel.sidebar.sidebar-left .nv-status-logo {
                    left: 9px;
                }
                .nv-panel.sidebar .nv-app-name {
                    opacity: 0.62;
                }
                .nv-panel.sidebar .nv-chat-title-btn {
                    font-size: 15px;
                }
                .nv-panel.sidebar .nv-title-toggle {
                    display: none;
                }
                .nv-panel.sidebar .nv-header-right,
                .nv-panel.sidebar .nv-header-extra {
                    position: absolute;
                    z-index: 9;
                    width: 40px;
                    padding: 4px;
                    border: 0;
                    border-radius: 8px;
                    background: transparent;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    margin: 0;
                }
                .nv-panel.sidebar:not(.sidebar-left) .nv-header-right,
                .nv-panel.sidebar:not(.sidebar-left) .nv-header-extra {
                    right: 6px;
                }
                .nv-panel.sidebar.sidebar-left .nv-header-right,
                .nv-panel.sidebar.sidebar-left .nv-header-extra {
                    left: 6px;
                }
                .nv-panel.sidebar .nv-header-right {
                    top: 126px;
                }
                .nv-panel.sidebar .nv-header-extra {
                    top: 270px;
                    flex-wrap: nowrap;
                }
                .nv-panel.sidebar .nv-header-extra::before {
                    content: '';
                    width: 22px;
                    height: 1px;
                    margin: 0 0 6px;
                    background: rgba(255, 255, 255, 0.12);
                    border-radius: 999px;
                }
                .nv-panel.sidebar .nv-header-right .nv-btn-icon,
                .nv-panel.sidebar .nv-header-extra .nv-btn-icon {
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    border-radius: 6px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                .nv-panel.sidebar .nv-header-extra .nv-btn-icon {
                    background: transparent;
                }
                .nv-panel.sidebar .nv-sidebar-toggle {
                    flex-direction: column;
                    gap: 0;
                    padding: 0;
                    border: 0;
                    background: transparent;
                }
                .nv-panel.sidebar .nv-sidebar-toggle:hover,
                .nv-panel.sidebar .nv-sidebar-toggle:focus-within {
                    gap: 2px;
                    border-color: transparent;
                    background: transparent;
                }
                .nv-panel.sidebar .nv-sidebar-toggle .nv-sidebar-arrow {
                    max-width: 30px;
                    max-height: 0;
                    transform: translateY(-6px) scale(0.96);
                    transition: opacity 0.22s ease, max-height 0.22s ease, transform 0.22s ease, color 0.2s ease, background 0.2s ease;
                }
                .nv-panel.sidebar .nv-sidebar-toggle:hover .nv-sidebar-arrow,
                .nv-panel.sidebar .nv-sidebar-toggle:focus-within .nv-sidebar-arrow,
                .nv-panel.sidebar .nv-sidebar-arrow:hover {
                    max-height: 30px;
                    transform: translateY(0) scale(1);
                }
                .nv-panel.sidebar .nv-sidebar-toggle.arrow-hidden .nv-sidebar-arrow {
                    max-height: 0;
                    transform: translateY(-6px) scale(0.96);
                }
                .nv-panel.sidebar.sidebar-collapsed {
                    width: var(--nv-rail-width) !important;
                    min-width: var(--nv-rail-width);
                    max-width: var(--nv-rail-width);
                }
                .nv-panel.sidebar.sidebar-collapsed::after {
                    display: none;
                }
                .nv-panel.sidebar.sidebar-collapsed .nv-title-texts,
                .nv-panel.sidebar.sidebar-collapsed .nv-messages,
                .nv-panel.sidebar.sidebar-collapsed .nv-input-area,
                .nv-panel.sidebar.sidebar-collapsed .nv-settings,
                .nv-panel.sidebar.sidebar-collapsed .nv-info,
                .nv-panel.sidebar.sidebar-collapsed .nv-history {
                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;
                }
                .nv-panel.sidebar.sidebar-collapsed .nv-header {
                    width: 0;
                }
                .nv-panel.sidebar.sidebar-collapsed .nv-sidebar-resizer {
                    display: none !important;
                }

                /* Header */
                .nv-header {
                    padding: 16px;
                    background: var(--nv-bg-secondary);
                    border-bottom: 1px solid var(--nv-border);
                    align-items: center;
                    justify-content: space-between;
                    position: relative;
                }
                .nv-header-left { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1 1 auto; overflow: hidden; }
                .nv-header-right { display: flex; align-items: center; gap: 4px; margin-left: 0; }
                .nv-header-main { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-width: 0; }
                .nv-header-extra {
                    display: none;
                    padding: 10px 16px 12px;
                    background: var(--nv-bg-secondary);
                    border-bottom: 1px solid var(--nv-border);
                    gap: 10px;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .nv-header-extra.open { display: flex; }
                .nv-panel:not(.sidebar) .nv-header {
                    padding-right: 54px;
                }
                .nv-panel:not(.sidebar) .nv-header-main {
                    justify-content: flex-start;
                    gap: 8px;
                }
                .nv-panel:not(.sidebar) .nv-header-left {
                    flex: 0 1 auto;
                    max-width: calc(100% - 118px);
                }
                .nv-panel:not(.sidebar) .nv-header-right {
                    flex: 0 0 auto;
                    gap: 6px;
                }
                .nv-panel:not(.sidebar) .nv-title {
                    gap: 6px;
                }
                .nv-panel:not(.sidebar) .nv-title-toggle {
                    width: 28px;
                    height: 28px;
                    padding: 0;
                    align-items: center;
                    justify-content: center;
                }
                .nv-panel:not(.sidebar) #nv-btn-new {
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    align-items: center;
                    justify-content: center;
                }
                .nv-panel:not(.sidebar) .nv-sidebar-toggle {
                    margin-left: -2px;
                }
                .nv-ghost-pill {
                    display: none;
                    flex: 0 0 100%;
                    padding: 6px 10px;
                    border-radius: 8px;
                    background: rgba(6, 78, 59, 0.22);
                    border: 1px solid rgba(45, 212, 191, 0.34);
                    color: #ccfbf1;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
                }

                .nv-ghost-pill.visible {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .nv-ghost-pill::before {
                    content: '';
                    width: 7px;
                    height: 7px;
                    border-radius: 999px;
                    background: #2dd4bf;
                    box-shadow: 0 0 10px rgba(45, 212, 191, 0.65);
                    flex: 0 0 auto;
                }

                .nv-settings {
                    position: absolute;
                    inset: 58px 0 0 0;
                    background: #17171c;
                    z-index: 6;
                    display: flex;
                    flex-direction: column;
                    padding: 12px 16px 16px;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                }
                .nv-settings.visible { transform: translateX(0); }
                .nv-panel-close {
                    position: absolute;
                    top: 10px;
                    right: 12px;
                    width: 24px;
                    height: 24px;
                    border-radius: 6px;
                    border: none;
                    background: transparent;
                    color: #f87171;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .nv-panel-close:hover {
                    background: transparent;
                    color: #fee2e2;
                }
                .nv-panel-close svg { width: 14px; height: 14px; }
                .nv-settings-title {
                    font-size: 12px;
                    color: var(--nv-text-muted);
                    margin-bottom: 10px;
                    letter-spacing: 0.2px;
                    padding-right: 28px;
                }
                .nv-settings-section-title {
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255, 255, 255, 0.55);
                    margin: 4px 0 -2px;
                }
                .nv-settings-section-title.data {
                    margin-top: 12px;
                }
                .nv-settings-list {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    overflow-y: auto;
                }
                .nv-style-select {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .nv-style-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    text-align: left;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid var(--nv-border);
                    border-radius: 12px;
                    padding: 10px 12px;
                    color: var(--nv-text);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .nv-style-toggle:hover {
                    background: rgba(255, 255, 255, 0.08);
                }
                .nv-style-toggle-text .nv-settings-label {
                    font-size: 13px;
                    font-weight: 600;
                }
                .nv-style-toggle-text .nv-settings-desc {
                    font-size: 11px;
                    color: var(--nv-text-muted);
                    margin-top: 4px;
                }
                .nv-style-chevron {
                    width: 16px;
                    height: 16px;
                    opacity: 0.7;
                    transition: transform 0.2s ease;
                }
                .nv-style-select.open .nv-style-chevron {
                    transform: rotate(180deg);
                }
                .nv-style-options {
                    display: none;
                    flex-direction: column;
                    gap: 8px;
                }
                .nv-style-select.open .nv-style-options {
                    display: flex;
                }
                .nv-style-options .nv-settings-item {
                    padding: 8px 10px;
                }
                .nv-style-options .nv-settings-label {
                    font-size: 12px;
                }
                .nv-style-options .nv-settings-desc {
                    font-size: 11px;
                }
                .nv-settings-item {
                    text-align: left;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid var(--nv-border);
                    border-radius: 10px;
                    padding: 10px 12px;
                    color: var(--nv-text);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .nv-settings-item:hover { background: rgba(255, 255, 255, 0.08); }
                .nv-settings-item.active {
                    border-color: var(--nv-primary);
                    background: rgba(139, 92, 246, 0.15);
                }
                .nv-settings-label {
                    font-size: 13px;
                    font-weight: 600;
                }
                .nv-settings-desc {
                    font-size: 12px;
                    color: var(--nv-text-muted);
                    margin-top: 4px;
                    line-height: 1.35;
                }
                .nv-settings-danger {
                    margin-top: 12px;
                    padding-top: 12px;
                    border-top: 1px dashed var(--nv-border);
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .nv-danger-title {
                    font-size: 11px;
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    color: #f87171;
                    font-weight: 700;
                }
                .nv-danger-desc {
                    font-size: 12px;
                    color: var(--nv-text-muted);
                    line-height: 1.35;
                }
                .nv-danger-btn {
                    align-self: flex-start;
                    border-radius: 10px;
                    border: 1px solid rgba(248, 113, 113, 0.7);
                    background: rgba(248, 113, 113, 0.12);
                    color: #fecaca;
                    padding: 8px 12px;
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .nv-danger-btn:hover {
                    background: rgba(248, 113, 113, 0.22);
                    border-color: rgba(248, 113, 113, 0.9);
                }
                .nv-panel.ghost-mode {
                    --nv-primary: #2dd4bf;
                    --nv-primary-hover: #14b8a6;
                    --nv-border: rgba(94, 234, 212, 0.16);
                    --nv-bg: rgba(7, 12, 18, 0.9);
                    --nv-bg-secondary: rgba(10, 18, 24, 0.84);
                    --nv-text: #f8fafc;
                    --nv-text-muted: rgba(204, 251, 241, 0.62);
                    background: linear-gradient(180deg, rgba(8, 18, 25, 0.92), rgba(5, 10, 16, 0.93));
                    border-color: rgba(94, 234, 212, 0.24);
                    box-shadow: 0 18px 46px rgba(0, 0, 0, 0.52), 0 0 0 1px rgba(45, 212, 191, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.045);
                }
                .nv-panel.ghost-mode .nv-header,
                .nv-panel.ghost-mode .nv-header-extra {
                    background: rgba(7, 15, 20, 0.78);
                    border-color: rgba(94, 234, 212, 0.14);
                    box-shadow: inset 0 -1px 0 rgba(45, 212, 191, 0.04);
                }
                .nv-panel.ghost-mode .nv-settings,
                .nv-panel.ghost-mode .nv-info,
                .nv-panel.ghost-mode .nv-history {
                    background: rgba(6, 12, 18, 0.96);
                    border-color: rgba(94, 234, 212, 0.14);
                }
                .nv-panel.ghost-mode.sidebar::before {
                    background: linear-gradient(180deg, rgba(45, 212, 191, 0.08), rgba(255, 255, 255, 0.018));
                    border-color: rgba(94, 234, 212, 0.12);
                }
                .nv-panel.ghost-mode.sidebar::after {
                    background: rgba(94, 234, 212, 0.13);
                }
                .nv-panel.ghost-mode .nv-app-name {
                    color: rgba(153, 246, 228, 0.72);
                }
                .nv-panel.ghost-mode .nv-status-logo.ghost-active {
                    filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.32));
                    opacity: 0.92;
                }
                .nv-panel.ghost-mode .nv-chat-title-btn:hover,
                .nv-panel.ghost-mode .nv-chat-title-btn:focus-visible {
                    background: rgba(45, 212, 191, 0.08);
                    color: #f0fdfa;
                }
                .nv-panel.ghost-mode .nv-chat-title-input {
                    background: rgba(0, 0, 0, 0.22);
                    border-color: rgba(94, 234, 212, 0.28);
                    box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.08);
                }
                .nv-panel.ghost-mode .nv-btn-icon,
                .nv-panel.ghost-mode .nv-sidebar-arrow,
                .nv-panel.ghost-mode .nv-img-btn-small,
                .nv-panel.ghost-mode .nv-model-select {
                    color: rgba(204, 251, 241, 0.66);
                }
                .nv-panel.ghost-mode .nv-btn-icon:hover,
                .nv-panel.ghost-mode .nv-sidebar-arrow:hover,
                .nv-panel.ghost-mode .nv-img-btn-small:hover,
                .nv-panel.ghost-mode .nv-model-select:hover {
                    background: rgba(45, 212, 191, 0.08);
                    color: #ccfbf1;
                }
                .nv-panel.ghost-mode .nv-btn-icon.ghost-active {
                    background: rgba(20, 184, 166, 0.16);
                    border-color: rgba(94, 234, 212, 0.38);
                    color: #99f6e4;
                    box-shadow: 0 0 0 1px rgba(45, 212, 191, 0.08), 0 8px 20px rgba(13, 148, 136, 0.18);
                }
                .nv-panel.ghost-mode .nv-message.assistant { background: transparent; }
                .nv-panel.ghost-mode .nv-message.assistant:not(.nv-welcome-message) {
                    color: #e6fffb;
                }
                .nv-panel.ghost-mode .nv-message.user {
                    background: linear-gradient(135deg, #0f766e, #0891b2);
                    color: #ecfeff;
                    box-shadow: 0 10px 24px rgba(8, 145, 178, 0.18);
                }
                .nv-panel.ghost-mode .nv-message-actions {
                    border-top-color: rgba(94, 234, 212, 0.08);
                }
                .nv-panel.ghost-mode .nv-action-btn,
                .nv-panel.ghost-mode .nv-version-tab {
                    background: rgba(45, 212, 191, 0.055);
                    border-color: rgba(94, 234, 212, 0.14);
                    color: rgba(204, 251, 241, 0.7);
                }
                .nv-panel.ghost-mode .nv-action-btn:hover,
                .nv-panel.ghost-mode .nv-version-tab:hover,
                .nv-panel.ghost-mode .nv-version-tab.active {
                    background: rgba(45, 212, 191, 0.14);
                    border-color: rgba(94, 234, 212, 0.32);
                    color: #f0fdfa;
                }
                .nv-panel.ghost-mode .nv-input-area {
                    background: rgba(5, 13, 18, 0.9);
                    border-top-color: rgba(94, 234, 212, 0.14);
                }
                .nv-panel.ghost-mode .nv-input-wrapper {
                    background: rgba(0, 0, 0, 0.22);
                    border-color: rgba(94, 234, 212, 0.18);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
                }
                .nv-panel.ghost-mode .nv-input-wrapper:focus-within {
                    border-color: rgba(45, 212, 191, 0.58);
                    box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.04);
                }
                .nv-panel.ghost-mode .nv-input {
                    color: #f8fafc;
                    caret-color: #5eead4;
                }
                .nv-panel.ghost-mode .nv-input::placeholder {
                    color: rgba(204, 251, 241, 0.42);
                }
                .nv-panel.ghost-mode .nv-send-btn {
                    background: #0f766e;
                    color: #ecfeff;
                    box-shadow: 0 8px 20px rgba(15, 118, 110, 0.22);
                }
                .nv-panel.ghost-mode .nv-send-btn:hover {
                    background: #0d9488;
                }
                .nv-panel.ghost-mode .typing-indicator {
                    background: rgba(45, 212, 191, 0.08);
                    border: 1px solid rgba(94, 234, 212, 0.11);
                }
                .nv-panel.ghost-mode .dot {
                    background: #5eead4;
                }
                .nv-panel.ghost-mode .nv-settings-item,
                .nv-panel.ghost-mode .nv-style-toggle,
                .nv-panel.ghost-mode .nv-info-card,
                .nv-panel.ghost-mode .nv-info-link,
                .nv-panel.ghost-mode .nv-support-link,
                .nv-panel.ghost-mode .nv-storage-card {
                    background: rgba(255, 255, 255, 0.035);
                    border-color: rgba(94, 234, 212, 0.12);
                }
                .nv-panel.ghost-mode .nv-settings-item:hover,
                .nv-panel.ghost-mode .nv-style-toggle:hover,
                .nv-panel.ghost-mode .nv-info-link:hover,
                .nv-panel.ghost-mode .nv-support-link:hover {
                    background: rgba(45, 212, 191, 0.075);
                    border-color: rgba(94, 234, 212, 0.22);
                }
                .nv-panel.ghost-mode .nv-settings-item.active,
                .nv-panel.ghost-mode .nv-history-item.active,
                .nv-panel.ghost-mode .nv-history-item.search-focus {
                    background: rgba(20, 184, 166, 0.12);
                    border-color: rgba(94, 234, 212, 0.28);
                    color: #99f6e4;
                }
                .nv-panel.ghost-mode .nv-history-header {
                    border-bottom-color: rgba(94, 234, 212, 0.12);
                }
                .nv-panel.ghost-mode .nv-history-item:hover {
                    background: rgba(45, 212, 191, 0.07);
                    color: #f0fdfa;
                }
                .nv-panel.ghost-mode .nv-search-input {
                    background: rgba(0, 0, 0, 0.18);
                    border-color: rgba(94, 234, 212, 0.16);
                }
                .nv-panel.ghost-mode .nv-modal {
                    background: rgba(7, 14, 20, 0.98);
                    border-color: rgba(94, 234, 212, 0.18);
                    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.54);
                }


                .nv-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--nv-text);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 0;
                    flex: 1 1 auto;
                    overflow: hidden;
                }
                .nv-title-texts {
                    display: flex;
                    flex-direction: column;
                    gap: 1px;
                    min-width: 0;
                    flex: 1 1 auto;
                    max-width: 100%;
                    overflow: hidden;
                }
                .nv-app-name {
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 1;
                    color: var(--nv-text-muted);
                    letter-spacing: 0;
                    text-transform: uppercase;
                    opacity: 0.78;
                }
                .nv-chat-title-row {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    width: 100%;
                    max-width: 100%;
                    min-width: 0;
                    overflow: hidden;
                }
                .nv-chat-title-btn {
                    appearance: none;
                    border: 0;
                    background: transparent;
                    color: var(--nv-text);
                    cursor: text;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    width: 100%;
                    max-width: 100%;
                    min-width: 0;
                    overflow: hidden;
                    padding: 2px 0;
                    border-radius: 6px;
                    font: inherit;
                    line-height: 1.15;
                    text-align: left;
                    transition: color 0.18s ease, background 0.18s ease;
                }
                .nv-chat-title-btn:hover,
                .nv-chat-title-btn:focus-visible {
                    color: #e5e7eb;
                    background: rgba(255, 255, 255, 0.05);
                    outline: none;
                }
                .nv-chat-title-text {
                    display: block;
                    min-width: 0;
                    max-width: 100%;
                    flex: 1 1 auto;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .nv-chat-title-input {
                    display: none;
                    width: 100%;
                    min-width: 0;
                    height: 26px;
                    padding: 3px 7px;
                    border-radius: 6px;
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    background: rgba(0, 0, 0, 0.22);
                    color: var(--nv-text);
                    font: inherit;
                    font-size: 14px;
                    line-height: 1.2;
                    outline: none;
                    box-sizing: border-box;
                }
                .nv-chat-title-input:focus {
                    border-color: rgba(20, 184, 166, 0.65);
                    box-shadow: 0 0 0 2px rgba(20, 184, 166, 0.14);
                }
                .nv-title.editing .nv-chat-title-btn {
                    display: none;
                }
                .nv-title.editing .nv-chat-title-input {
                    display: block;
                    flex: 1 1 auto;
                }
                .nv-title.editing .nv-delete-chat-btn {
                    display: none;
                }
                .nv-panel:not(.sidebar) .nv-chat-title-row {
                    max-width: 176px;
                }
                .nv-panel:not(.sidebar) .nv-chat-title-input {
                    max-width: 176px;
                }
                .nv-title-toggle {
                    background: none;
                    border: none;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 6px;
                    display: inline-flex;
                    transition: all 0.2s;
                }
                .nv-title-toggle:hover { background: rgba(255, 255, 255, 0.1); color: var(--nv-text); }
                .nv-title-toggle svg { width: 16px; height: 16px; transition: transform 0.2s; }
                .nv-title-toggle.open svg { transform: rotate(90deg); }
                .nv-delete-chat-btn {
                    color: var(--nv-text-muted);
                    flex: 0 0 auto;
                    width: 28px;
                    height: 28px;
                    padding: 0;
                    align-items: center;
                    justify-content: center;
                    opacity: 0.78;
                    transition: all 0.2s;
                }
                .nv-delete-chat-btn svg {
                    width: 18px;
                    height: 18px;
                }
                .nv-delete-chat-btn:hover,
                .nv-delete-chat-btn:focus-visible {
                    opacity: 1;
                }
                .nv-delete-chat-btn:hover {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.2);
                }
                .nv-delete-chat-btn[hidden] {
                    display: none !important;
                }
                .nv-panel-close-control {
                    position: absolute;
                    width: 32px;
                    height: 32px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.035);
                    color: rgba(248, 113, 113, 0.7);
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    z-index: 12;
                    box-shadow: none;
                    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
                }
                .nv-panel-close-control:hover {
                    transform: translateY(-1px);
                    background: rgba(239, 68, 68, 0.1);
                    border-color: rgba(248, 113, 113, 0.3);
                    color: #fecaca;
                }
                .nv-panel-close-control svg {
                    width: 16px;
                    height: 16px;
                }
                .nv-panel-collapse-control {
                    position: absolute;
                    width: 32px;
                    height: 32px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.03);
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    z-index: 12;
                    transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
                }
                .nv-panel-collapse-control:hover,
                .nv-panel-collapse-control:focus-visible {
                    transform: translateY(-1px);
                    background: rgba(255, 255, 255, 0.08);
                    border-color: rgba(255, 255, 255, 0.16);
                    color: var(--nv-text);
                    outline: none;
                }
                .nv-panel-collapse-control svg {
                    width: 17px;
                    height: 17px;
                    transition: transform 0.18s ease;
                }
                .nv-panel:not(.sidebar) .nv-panel-close-control {
                    right: 12px;
                    top: 12px;
                }
                .nv-panel:not(.sidebar) .nv-panel-collapse-control {
                    display: none;
                }
                .nv-panel.sidebar:not(.sidebar-left) .nv-panel-close-control {
                    right: 10px;
                    top: 54px;
                }
                .nv-panel.sidebar:not(.sidebar-left) .nv-panel-collapse-control {
                    display: inline-flex;
                    right: 10px;
                    top: 90px;
                }
                .nv-panel.sidebar.sidebar-left .nv-panel-close-control {
                    left: 10px;
                    right: auto;
                    top: 54px;
                }
                .nv-panel.sidebar.sidebar-left .nv-panel-collapse-control {
                    display: inline-flex;
                    left: 10px;
                    right: auto;
                    top: 90px;
                }
                .nv-panel.sidebar.sidebar-left .nv-panel-collapse-control svg {
                    transform: rotate(180deg);
                }
                .nv-panel.sidebar.sidebar-collapsed:not(.sidebar-left) .nv-panel-collapse-control svg {
                    transform: rotate(180deg);
                }
                .nv-panel.sidebar.sidebar-collapsed.sidebar-left .nv-panel-collapse-control svg {
                    transform: rotate(0deg);
                }
                .nv-panel.layout-switching .nv-settings,
                .nv-panel.layout-switching .nv-info,
                .nv-panel.layout-switching .nv-history {
                    transition: none !important;
                }
                .nv-status-logo {
                    width: 35px;
                    height: 35px;
                    border-radius: 4px;
                    object-fit: contain;
                    margin-right: -2px;
                    margin-left: -6px;
                    flex: 0 0 auto;
                }


                .nv-btn-icon {
                    background: none;
                    border: none;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 6px;
                    transition: all 0.2s;
                    display: flex;
                }
                .nv-btn-icon:hover { background: rgba(255, 255, 255, 0.1); color: var(--nv-text); }
                .nv-btn-icon.nv-delete-chat-btn:hover,
                .nv-btn-icon.nv-delete-chat-btn:focus-visible {
                    color: #ef4444;
                    background: rgba(239, 68, 68, 0.2);
                    outline: none;
                }
                .nv-btn-icon svg { width: 18px; height: 18px; }
                #nv-btn-history:hover,
                #nv-btn-history.active { color: #60a5fa; }
                .nv-btn-icon.ghost-active {
                    background: rgba(20, 184, 166, 0.18);
                    border: 1px solid rgba(20, 184, 166, 0.45);
                    color: #99f6e4;
                    box-shadow: 0 6px 16px rgba(20, 184, 166, 0.25);
                }
                .nv-header-extra .nv-btn-icon {
                    border: 1px solid var(--nv-border);
                    background: rgba(255, 255, 255, 0.04);
                    border-radius: 10px;
                    padding: 8px;
                }
                .nv-header-extra .nv-btn-icon:hover {
                    background: rgba(255, 255, 255, 0.08);
                }
                .nv-info {
                    position: absolute;
                    inset: 58px 0 0 0;
                    background: #0f111a;
                    z-index: 6;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 14px 16px 18px;
                    overflow-y: auto;
                    overscroll-behavior: contain;
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    container-type: inline-size;
                }
                .nv-info::-webkit-scrollbar { width: 6px; }
                .nv-info::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
                .nv-info.visible { transform: translateX(0); }
                .nv-info-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: var(--nv-text);
                    padding-right: 28px;
                }
                .nv-info-section-title {
                    font-size: 11px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: rgba(255, 255, 255, 0.55);
                    margin: 2px 0 -2px;
                }
                .nv-info-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 12px;
                }
                @container (min-width: 460px) {
                    .nv-info-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                    .nv-info-card.variant-c {
                        grid-column: 1 / -1;
                    }
                }
                @container (min-width: 700px) {
                    .nv-info-grid {
                        grid-template-columns: repeat(3, minmax(0, 1fr));
                    }
                    .nv-info-card.variant-c {
                        grid-column: auto;
                    }
                }
                .nv-info-card {
                    border: 1px solid var(--nv-border);
                    border-radius: 12px;
                    padding: 12px;
                    color: var(--nv-text);
                }
                .nv-info-card.variant-a {
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.08));
                }
                .nv-info-card.variant-b {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(34, 211, 238, 0.08));
                }
                .nv-info-card.variant-c {
                    background: linear-gradient(135deg, rgba(244, 114, 182, 0.08), rgba(250, 204, 21, 0.08));
                }
                .nv-info-card h4 {
                    margin: 0 0 6px 0;
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--nv-text);
                }
                .nv-info-card h4 {
                    margin: 0 0 6px 0;
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--nv-text);
                }
                .nv-info-card p {
                    margin: 0;
                    font-size: 12px;
                    color: var(--nv-text-muted);
                    line-height: 1.45;
                }
                .nv-info-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 6px;
                }
                .nv-info-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 10px;
                    border-radius: 999px;
                    border: 1px solid var(--nv-border);
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--nv-text);
                    text-decoration: none;
                    font-size: 12px;
                    transition: all 0.2s;
                }
                .nv-info-link svg {
                    width: 14px;
                    height: 14px;
                }
                .nv-info-link:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                .nv-info-support {
                    margin-top: 10px;
                    padding: 12px;
                    border-radius: 14px;
                    border: 1px solid rgba(139, 92, 246, 0.35);
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(34, 211, 238, 0.06));
                }
                .nv-info-support-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 12px;
                    font-weight: 700;
                    color: var(--nv-text);
                }
                .nv-info-support-title svg {
                    width: 16px;
                    height: 16px;
                }
                .nv-info-support-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 8px;
                }
                .nv-support-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 7px 12px;
                    border-radius: 999px;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: rgba(255, 255, 255, 0.04);
                    color: var(--nv-text);
                    text-decoration: none;
                    font-size: 12px;
                    transition: all 0.2s;
                    --nv-support-accent: 139, 92, 246;
                }
                .nv-support-link svg {
                    width: 15px;
                    height: 15px;
                }
                .nv-support-link:hover {
                    color: rgb(var(--nv-support-accent));
                    border-color: rgba(var(--nv-support-accent), 0.55);
                    background: rgba(var(--nv-support-accent), 0.12);
                    transform: translateY(-1px);
                }
                .nv-storage {
                    border: 1px solid var(--nv-border);
                    border-radius: 14px;
                    padding: 12px;
                    background: rgba(255, 255, 255, 0.03);
                }
                .nv-storage-header {
                    font-size: 12px;
                    font-weight: 700;
                    color: var(--nv-text);
                    margin-bottom: 8px;
                }
                .nv-storage-body {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .nv-storage-chart {
                    position: relative;
                    width: 96px;
                    height: 96px;
                    flex: 0 0 auto;
                }
                .nv-storage-donut {
                    width: 96px;
                    height: 96px;
                    transform: rotate(-90deg);
                }
                .nv-storage-ring {
                    fill: none;
                    stroke: rgba(255, 255, 255, 0.08);
                    stroke-width: 10;
                }
                .nv-storage-seg {
                    fill: none;
                    stroke-width: 10;
                    stroke-linecap: round;
                    transition: stroke-dasharray 0.25s ease;
                }
                .nv-storage-conv {
                    stroke: #60a5fa;
                }
                .nv-storage-settings {
                    stroke: #f59e0b;
                }
                .nv-storage-center {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: var(--nv-text);
                    pointer-events: none;
                }
                .nv-storage-used {
                    font-size: 12px;
                    font-weight: 700;
                }
                .nv-storage-total {
                    font-size: 11px;
                    color: var(--nv-text-muted);
                }
                .nv-storage-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    min-width: 160px;
                }
                .nv-storage-remaining {
                    font-size: 12px;
                    color: var(--nv-text-muted);
                }
                .nv-storage-legend {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .nv-storage-legend-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    color: var(--nv-text);
                }
                .nv-storage-swatch {
                    width: 10px;
                    height: 10px;
                    border-radius: 999px;
                    display: inline-block;
                    background: currentColor;
                }
                .nv-storage-swatch.nv-storage-conv {
                    color: #60a5fa;
                }
                .nv-storage-swatch.nv-storage-settings {
                    color: #f59e0b;
                }

                /* Controls Row */
                .nv-controls-row {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-top: 4px;
                }

                /* Model Selector */
                .nv-model-select {
                    background: transparent;
                    border: none;
                    color: var(--nv-text-muted);
                    font-size: 11px;
                    padding: 2px 4px;
                    cursor: pointer;
                    transition: all 0.2s;
                    outline: none;
                    width: fit-content;
                    opacity: 0.8;
                }
                .nv-model-select:hover { opacity: 1; color: var(--nv-text); }
                .nv-model-select option { background: var(--nv-bg-secondary); color: var(--nv-text); font-size: 12px; }
                .nv-model-select.nv-ghost-icon {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3l7 4v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V7z'/%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: 4px center;
                    padding-left: 22px;
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                }
                .nv-model-select.nv-ghost-icon::-ms-expand { display: none; }

                /* Small Image Button */
                .nv-img-btn-small {
                    background: transparent;
                    border: none;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    padding: 2px;
                    display: flex;
                    justify-content: center;
                    transition: all 0.2s;
                    opacity: 0.7;
                    border-radius: 4px;
                }
                .nv-img-btn-small:hover { opacity: 1; color: var(--nv-text); background: rgba(255,255,255,0.05); }
                .nv-img-btn-small.active {
                    color: var(--nv-primary);
                    opacity: 1;
                    background: rgba(139, 92, 246, 0.15);
                }
                .nv-img-btn-small svg { width: 16px; height: 16px; }

                .nv-input-wrapper {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                /* History Panel (Overlay) */
                .nv-history {
                    position: absolute;
                    inset: 58px 0 0 0;
                    background: #17171c;
                    z-index: 5;
                    display: flex;
                    flex-direction: column;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                    container-type: inline-size;
                }
                .nv-history.visible { transform: translateX(0); }

                .nv-history-header {
                    padding: 12px 16px;
                    font-size: 13px;
                    color: var(--nv-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-bottom: 1px solid var(--nv-border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    min-width: 0;
                }
                .nv-history-title {
                    flex: 1 1 auto;
                    min-width: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .nv-clear-all {
                    background: none;
                    border: none;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    display: flex;
                    padding: 4px;
                    border-radius: 4px;
                    transition: all 0.2s;
                }
                .nv-clear-all:hover { color: #ef4444; background: rgba(239, 68, 68, 0.1); }

                .nv-history-list {
                    flex: 1;
                    overflow-y: auto;
                    padding: 8px;
                }

                .nv-history-item {
                    padding: 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s;
                    color: var(--nv-text-muted);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    margin-bottom: 4px;
                    position: relative;
                }
                .nv-history-item:hover { background: rgba(255,255,255,0.05); color: var(--nv-text); }
                .nv-history-item.active { background: rgba(139, 92, 246, 0.1); color: var(--nv-primary); }

                .nv-history-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex: 0 1 auto;
                    min-width: 0;
                }
                .nv-history-search {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    position: relative;
                    min-width: 28px;
                    max-width: 100%;
                }
                .nv-search-btn {
                    background: none;
                    border: none;
                    color: var(--nv-text-muted);
                    width: 28px;
                    height: 28px;
                    border-radius: 6px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .nv-search-btn:hover { color: var(--nv-primary); background: rgba(139, 92, 246, 0.12); }
                .nv-search-btn svg { width: 16px; height: 16px; }
                .nv-search-input {
                    width: 0;
                    min-width: 0;
                    opacity: 0;
                    padding: 6px 0;
                    border: 1px solid var(--nv-border);
                    background: rgba(255, 255, 255, 0.04);
                    color: var(--nv-text);
                    border-radius: 8px;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    pointer-events: none;
                }
                .nv-history-search.active .nv-search-input {
                    width: min(180px, calc(100cqw - 132px));
                    opacity: 1;
                    padding: 6px 8px;
                    pointer-events: auto;
                }
                @container (max-width: 360px) {
                    .nv-history-search.active .nv-search-input {
                        width: min(180px, calc(100cqw - 84px));
                    }
                    .nv-history-search.active ~ .nv-clear-all {
                        flex: 0 0 auto;
                    }
                    .nv-history-header:has(.nv-history-search.active) .nv-history-title {
                        display: none;
                    }
                    .nv-history-header:has(.nv-history-search.active) .nv-history-actions {
                        flex: 1 1 auto;
                    }
                }
                .nv-search-input::placeholder { color: var(--nv-text-muted); }

                .nv-h-title { font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 48px; }
                .nv-h-title.nv-h-editing {
                    width: calc(100% - 64px);
                    padding-right: 12px;
                    outline: 1.5px solid var(--nv-primary);
                    outline-offset: 2px;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.04);
                    cursor: text;
                    white-space: normal;
                    overflow: visible;
                    text-overflow: unset;
                    word-break: break-word;
                }
                .nv-h-date { font-size: 11px; opacity: 0.6; }

                .nv-h-rename,
                .nv-h-delete {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    opacity: 0;
                    transition: all 0.2s;
                    color: var(--nv-text-muted);
                }
                .nv-h-rename { right: 36px; }
                .nv-h-delete { right: 8px; }
                .nv-history-item:hover .nv-h-rename,
                .nv-history-item:hover .nv-h-delete { opacity: 1; }
                .nv-h-rename:hover { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
                .nv-h-delete:hover { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
                .nv-h-rename svg,
                .nv-h-delete svg { width: 14px; height: 14px; }

                .nv-history-item.search-focus {
                    outline: 1px solid var(--nv-primary);
                    outline-offset: -2px;
                    background: rgba(139, 92, 246, 0.08);
                }
                .nv-h-match {
                    background: rgba(139, 92, 246, 0.25);
                    color: var(--nv-text);
                    border-radius: 4px;
                    padding: 0 2px;
                }

                .nv-history-empty {
                    padding: 16px;
                    text-align: center;
                    color: var(--nv-text-muted);
                    font-size: 13px;
                }

                /* Messages */
                .nv-messages {
                    flex: 1;
                    overflow-y: auto;
                    overflow-x: hidden;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    scroll-behavior: smooth;
                }
                .nv-messages::-webkit-scrollbar { width: 6px; }
                .nv-messages::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }

                .nv-message {
                    max-width: 85%;
                    padding: 12px 16px;
                    border-radius: 14px;
                    font-size: 14px;
                    line-height: 1.5;
                    word-break: break-word;
                    white-space: pre-wrap;
                    animation: slideIn 0.3s ease;
                }
                .nv-message-content {
                    max-width: 100%;
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .nv-message.user { align-self: flex-end; background: var(--nv-primary); color: white; border-bottom-right-radius: 2px; }
                .nv-message.assistant { align-self: flex-start; background: rgba(255, 255, 255, 0.08); color: var(--nv-text); border-bottom-left-radius: 2px; position: relative; }

                /* Tool Rendering */
                .nv-tool {
                    margin-top: 10px;
                }
                .nv-tool:first-child {
                    margin-top: 0;
                }
                .nv-tool-label {
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--nv-text-muted);
                    margin-bottom: 6px;
                }
                .nv-tool-label-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 6px;
                }
                .nv-tool-label-row .nv-tool-label {
                    margin-bottom: 0;
                }
                .nv-tool-source-link {
                    font-size: 12px;
                    color: var(--nv-text-muted);
                    text-decoration: none;
                }
                .nv-tool-source-link:hover {
                    color: var(--nv-text);
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }
                .nv-tool-caption {
                    font-size: 12px;
                    color: var(--nv-text-muted);
                    margin-top: 6px;
                }
                .nv-md-p {
                    margin: 0 0 8px;
                }
                .nv-md-p:last-child {
                    margin-bottom: 0;
                }
                .nv-md-h1,
                .nv-md-h2,
                .nv-md-h3,
                .nv-md-h4,
                .nv-md-h5,
                .nv-md-h6 {
                    margin: 0 0 8px;
                    font-weight: 700;
                    line-height: 1.25;
                }
                .nv-md-h1 { font-size: 18px; }
                .nv-md-h2 { font-size: 16px; }
                .nv-md-h3 { font-size: 15px; }
                .nv-md-h4 { font-size: 14px; }
                .nv-md-h5 { font-size: 13px; }
                .nv-md-h6 { font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
                .nv-md-hr {
                    border: none;
                    border-top: 1px solid var(--nv-border);
                    margin: 8px 0;
                }
                .nv-md-list {
                    margin: 0 0 8px 18px;
                    padding: 0;
                }
                .nv-md-list li {
                    margin: 4px 0;
                }
                .nv-md-table-wrap {
                    width: 100%;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.35);
                    border-radius: 12px;
                    background: rgba(12, 26, 46, 0.72);
                    margin: 0 0 8px;
                }
                .nv-md-table-bar {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 6px 10px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    background: rgba(12, 26, 46, 0.72);
                }
                .nv-md-table-title {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 11px;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    color: var(--nv-text-muted);
                }
                .nv-md-table-action {
                    width: 24px;
                    height: 24px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    border: none;
                    background: transparent;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .nv-md-table-action:hover {
                    color: #38bdf8;
                    background: rgba(56, 189, 248, 0.12);
                }
                .nv-md-table-action.active {
                    color: #38bdf8;
                    background: rgba(56, 189, 248, 0.18);
                }
                .nv-md-table-action svg {
                    width: 14px;
                    height: 14px;
                }
                .nv-md-table-scroll {
                    overflow-x: hidden;
                    overflow-y: hidden;
                }
                .nv-md-table-wrap.nv-table-scroll-x .nv-md-table-scroll,
                .nv-md-table-scroll.nv-table-scroll-x {
                    overflow-x: auto;
                }
                .nv-md-table-scroll::-webkit-scrollbar {
                    height: 8px;
                }
                .nv-md-table-scroll::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 8px;
                }
                .nv-md-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 0;
                    font-size: 12px;
                }
                .nv-md-table-wrap.nv-table-scroll-x .nv-md-table,
                .nv-md-table-scroll.nv-table-scroll-x .nv-md-table {
                    min-width: max-content;
                }
                .nv-md-table th,
                .nv-md-table td {
                    border: 0.5px solid rgba(255, 255, 255, 0.4);
                    padding: 6px 8px;
                    text-align: left;
                    vertical-align: top;
                    white-space: normal;
                    word-break: break-word;
                }
                .nv-md-table-wrap.nv-table-scroll-x .nv-md-table th,
                .nv-md-table-wrap.nv-table-scroll-x .nv-md-table td,
                .nv-md-table-scroll.nv-table-scroll-x .nv-md-table th,
                .nv-md-table-scroll.nv-table-scroll-x .nv-md-table td {
                    white-space: nowrap;
                }
                .nv-md-table th {
                    background: rgba(255, 255, 255, 0.06);
                    font-weight: 600;
                }
                .nv-md-table thead th {
                    border-bottom: 1.5px solid rgba(255, 255, 255, 0.5);
                }
                .nv-table-modal {
                    position: fixed;
                    inset: 0;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    background: rgba(8, 12, 20, 0.7);
                    z-index: 2147483647;
                }
                .nv-table-modal.visible {
                    display: flex;
                }
                .nv-table-modal-content {
                    width: min(92vw, 980px);
                    max-height: 85vh;
                    display: flex;
                    flex-direction: column;
                    background: rgba(15, 23, 42, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.35);
                    border-radius: 14px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
                    color: var(--nv-text);
                }
                .nv-table-modal-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 12px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                }
                .nv-table-modal-close {
                    width: 32px;
                    height: 32px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background: transparent;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .nv-table-modal-close:hover {
                    color: var(--nv-primary);
                    border-color: var(--nv-primary);
                    background: rgba(139, 92, 246, 0.12);
                }
                .nv-table-modal-close svg {
                    width: 16px;
                    height: 16px;
                }
                .nv-table-modal-body {
                    padding: 12px;
                    overflow: hidden;
                }
                .nv-md-table-scroll-lg {
                    max-height: 65vh;
                    overflow: auto;
                }
                .nv-md-quote {
                    margin: 0 0 8px;
                    padding: 6px 10px;
                    border-left: 2px solid var(--nv-primary);
                    background: rgba(255, 255, 255, 0.06);
                    border-radius: 8px;
                }
                .nv-md-math {
                    margin: 6px 0;
                }
                .nv-md-math .katex-display {
                    margin: 0;
                }
                .katex {
                    color: var(--nv-text);
                }
                .nv-tool-attribution {
                    font-size: 11px;
                    color: var(--nv-text-muted);
                }
                .nv-tool-attribution a {
                    color: inherit;
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }
                .nv-tool-image img {
                    width: 100%;
                    display: block;
                    border-radius: 10px;
                    border: 1px solid var(--nv-border);
                }
                .nv-image-frame {
                    position: relative;
                    overflow: hidden;
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.03);
                }
                .nv-image-frame[data-nv-image-loading="1"] {
                    min-height: 180px;
                    border: 1px solid var(--nv-border);
                    background:
                        linear-gradient(110deg, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.09) 18%, rgba(255,255,255,0.04) 33%),
                        rgba(255, 255, 255, 0.03);
                    background-size: 220% 100%;
                    animation: nvImageLoadingShimmer 1.35s linear infinite;
                }
                .nv-image-frame[data-nv-image-loading="1"]::before {
                    content: attr(data-nv-image-loading-label);
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    color: var(--nv-text-muted);
                    font-size: 12px;
                    white-space: nowrap;
                    z-index: 1;
                    pointer-events: none;
                }
                .nv-image-frame[data-nv-image-error="1"] {
                    min-height: 58px;
                    border: 1px solid rgba(255, 107, 107, 0.24);
                    background: rgba(255, 107, 107, 0.08);
                    padding: 12px 44px 12px 14px;
                    display: flex;
                    align-items: center;
                }
                .nv-image-frame[data-nv-image-error="1"]::before {
                    content: attr(data-nv-image-error-label);
                    position: absolute;
                    left: 14px;
                    right: 44px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: auto;
                    text-align: left;
                    color: #ffb4b4;
                    font-size: 12px;
                    line-height: 1.35;
                    z-index: 1;
                    pointer-events: none;
                }
                .nv-image-frame[data-nv-image-error="1"] img {
                    opacity: 0;
                    width: 0;
                    height: 0;
                    min-height: 0;
                    border: 0;
                    margin: 0;
                    pointer-events: none;
                }
                .nv-image-frame[data-nv-image-error="1"] .nv-image-actions {
                    display: none;
                }
                .nv-image-actions {
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    display: flex;
                    gap: 6px;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease;
                }
                .nv-image-frame:hover .nv-image-actions,
                .nv-image-frame:focus-within .nv-image-actions {
                    opacity: 1;
                    pointer-events: auto;
                }
                @keyframes nvImageLoadingShimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -20% 0; }
                }
                .nv-image-action {
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    border: 1px solid var(--nv-border);
                    background: rgba(12, 17, 23, 0.75);
                    color: var(--nv-text);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .nv-image-action:hover {
                    color: var(--nv-primary);
                    background: rgba(12, 17, 23, 0.9);
                }
                .nv-image-action svg {
                    width: 14px;
                    height: 14px;
                }
                .nv-tool-music {
                    display: grid;
                    grid-template-columns: 112px minmax(0, 1fr);
                    gap: 12px;
                    padding: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    background:
                        linear-gradient(135deg, rgba(20, 184, 166, 0.13), rgba(139, 92, 246, 0.08)),
                        rgba(255, 255, 255, 0.035);
                }
                .nv-music-cover {
                    min-height: 112px;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background:
                        radial-gradient(circle at 30% 25%, rgba(45, 212, 191, 0.35), transparent 38%),
                        linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(39, 39, 42, 0.9));
                    color: var(--nv-text);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    overflow: hidden;
                }
                .nv-music-icon {
                    width: 34px;
                    height: 34px;
                    color: #67e8f9;
                    filter: drop-shadow(0 8px 18px rgba(103, 232, 249, 0.22));
                }
                .nv-music-bars {
                    height: 28px;
                    display: inline-flex;
                    align-items: end;
                    gap: 5px;
                }
                .nv-music-bars span {
                    width: 5px;
                    border-radius: 4px;
                    background: linear-gradient(180deg, #f0abfc, #22d3ee);
                    opacity: 0.9;
                }
                .nv-music-bars span:nth-child(1) { height: 13px; }
                .nv-music-bars span:nth-child(2) { height: 24px; }
                .nv-music-bars span:nth-child(3) { height: 17px; }
                .nv-music-bars span:nth-child(4) { height: 27px; }
                .nv-music-body {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .nv-music-beta {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px 6px;
                    border-radius: 999px;
                    background: rgba(139, 92, 246, 0.16);
                    border: 1px solid rgba(139, 92, 246, 0.3);
                    color: #d7c7ff;
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 1;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .nv-music-title {
                    font-size: 15px;
                    font-weight: 700;
                    color: var(--nv-text);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .nv-music-player {
                    width: 100%;
                    min-width: 0;
                    height: 36px;
                    border-radius: 8px;
                }
                .nv-music-player-fallback {
                    display: none;
                    align-items: center;
                    gap: 8px;
                    width: 100%;
                    padding: 8px 10px;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: rgba(10, 15, 20, 0.42);
                }
                .nv-tool-music[data-nv-music-player="custom"] .nv-music-player-fallback {
                    display: flex;
                }
                .nv-tool-music[data-nv-music-player="custom"] .nv-music-player {
                    display: none;
                }
                .nv-music-fallback-btn {
                    height: 30px;
                    min-width: 58px;
                    padding: 0 10px;
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--nv-text);
                    font-size: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .nv-music-fallback-btn.icon {
                    min-width: 30px;
                    width: 30px;
                    height: 30px;
                    padding: 0;
                    flex: 0 0 auto;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 999px;
                }
                .nv-music-fallback-btn.icon svg {
                    width: 14px;
                    height: 14px;
                    display: block;
                }
                .nv-music-fallback-btn.primary {
                    background: rgba(34, 211, 238, 0.12);
                    border-color: rgba(34, 211, 238, 0.28);
                    color: #a5f3fc;
                }
                .nv-music-fallback-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                .nv-music-fallback-btn.primary:hover {
                    background: rgba(34, 211, 238, 0.18);
                }
                .nv-music-fallback-btn:disabled {
                    opacity: 0.45;
                    cursor: not-allowed;
                }
                .nv-music-fallback-meta {
                    min-width: 0;
                    flex: 1 1 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .nv-music-fallback-bar {
                    width: 100%;
                    height: 6px;
                    padding: 0;
                    border: 0;
                    border-radius: 999px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.08);
                    cursor: pointer;
                    appearance: none;
                }
                .nv-music-fallback-bar span {
                    display: block;
                    width: 0;
                    height: 100%;
                    border-radius: inherit;
                    background: linear-gradient(90deg, #22d3ee, #a78bfa);
                    transition: width 0.2s linear;
                }
                .nv-music-fallback-time {
                    font-size: 11px;
                    color: var(--nv-text-muted);
                    line-height: 1.2;
                }
                .nv-tool-music[data-nv-music-ready="0"] .nv-music-player,
                .nv-tool-music[data-nv-music-ready="0"] .nv-music-actions,
                .nv-tool-music[data-nv-music-ready="0"] .nv-music-footer {
                    display: none;
                }
                .nv-tool-music[data-nv-music-ready="0"] .nv-music-player-fallback {
                    display: none;
                }
                .nv-tool-music[data-nv-music-ready="0"] .nv-music-title {
                    white-space: normal;
                    overflow: visible;
                    text-overflow: clip;
                }
                .nv-music-prompt {
                    color: var(--nv-text-muted);
                    font-size: 12px;
                    line-height: 1.35;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .nv-music-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                }
                .nv-music-meta {
                    color: var(--nv-text-muted);
                    font-size: 11px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .nv-music-actions {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    flex: 0 0 auto;
                }
                .nv-music-action {
                    width: 30px;
                    height: 30px;
                    border-radius: 8px;
                    border: 1px solid var(--nv-border);
                    background: rgba(12, 17, 23, 0.55);
                    color: var(--nv-text-muted);
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .nv-music-action:hover {
                    color: var(--nv-text);
                    border-color: rgba(34, 211, 238, 0.45);
                    background: rgba(34, 211, 238, 0.12);
                }
                .nv-music-action svg {
                    width: 15px;
                    height: 15px;
                }
                .nv-music-status {
                    display: none;
                    padding: 6px 8px;
                    border-radius: 8px;
                    font-size: 12px;
                    line-height: 1.35;
                    color: var(--nv-text-muted);
                    background: rgba(255, 255, 255, 0.045);
                }
                .nv-music-status.visible {
                    display: block;
                }
                .nv-music-status[data-variant="success"] {
                    color: #86efac;
                    background: rgba(34, 197, 94, 0.1);
                }
                .nv-music-status[data-variant="error"] {
                    color: #fca5a5;
                    background: rgba(239, 68, 68, 0.1);
                }
                .nv-tool-music[data-nv-music-ready="1"] .nv-music-footer {
                    display: flex;
                }
                @media (max-width: 520px) {
                    .nv-tool-music {
                        grid-template-columns: 1fr;
                    }
                    .nv-music-cover {
                        min-height: 76px;
                        flex-direction: row;
                    }
                }
                .nv-tool-link a {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 10px;
                    border-radius: 999px;
                    border: 1px solid var(--nv-border);
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--nv-text);
                    text-decoration: none;
                    font-size: 12px;
                    margin-block: 2px;
                }
                .nv-tool-link a:hover { background: rgba(255, 255, 255, 0.1); }
                .nv-inline-link {
                    color: var(--nv-text);
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
                .nv-inline-link:hover { color: var(--nv-primary); }
                .nv-tool-code {
                    background: rgb(12, 17, 23);
                    border-radius: 12px;
                    border: 1px solid var(--nv-border);
                    padding: 10px;
                }
                .nv-code-header {
                    display: flex;
                    justify-content: space-between;
                    font-size: 11px;
                    color: var(--nv-text-muted);
                    margin-bottom: 8px;
                    align-items: center;
                    gap: 8px;
                }
                .nv-code-left {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }
                .nv-code-label { text-transform: uppercase; letter-spacing: 0.04em; }
                .nv-code-copy {
                    background: transparent;
                    border: none;
                    border-radius: 4px;
                    width: 24px;
                    height: 24px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .nv-code-copy:hover { color: var(--nv-primary); background: rgba(139, 92, 246, 0.08); }
                .nv-code-copy svg { width: 14px; height: 14px; }
                .nv-code-lang { font-variant: small-caps; }
                .nv-code-keyword { color: #c084fc; }
                .nv-code-string { color: #86efac; }
                .nv-code-number { color: #f472b6; }
                .nv-code-comment { color: #9ca3af; font-style: italic; }
                .nv-code-plain { color: var(--nv-text); }
                .hljs { display: block; overflow-x: auto; padding: 0; background: transparent; color: var(--nv-text); }
                .hljs-keyword, .hljs-meta-keyword { color: #c084fc; }
                .hljs-string, .hljs-attr, .hljs-attribute { color: #86efac; }
                .hljs-number, .hljs-literal { color: #f472b6; }
                .hljs-comment { color: #9ca3af; font-style: italic; }
                .nv-tool-code pre {
                    margin: 0;
                    padding: 0;
                    overflow-x: auto;
                    font-size: 12px;
                    line-height: 1.5;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    color: var(--nv-text);
                }
                .nv-code-block {
                    background: rgb(12, 17, 23);
                    border-radius: 12px;
                    border: 1px solid var(--nv-border);
                    padding: 10px;
                    margin-top: 10px;
                }
                .nv-code-block:first-child { margin-top: 0; }
                .nv-code-block pre {
                    margin: 0;
                    padding: 0;
                    overflow-x: auto;
                    font-size: 12px;
                    line-height: 1.5;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                }
                .nv-inline-code {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    font-size: 12px;
                    background: rgba(0, 0, 0, 0.35);
                    border: 1px solid var(--nv-border);
                    border-radius: 6px;
                    padding: 1px 6px;
                }

                /* Version Tabs */
                .nv-version-tabs {
                    display: flex;
                    gap: 4px;
                    margin-bottom: 8px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    overflow-x: auto;
                    max-width: 100%;
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
                }
                .nv-version-tabs::-webkit-scrollbar { height: 4px; }
                .nv-version-tabs::-webkit-scrollbar-track { background: transparent; }
                .nv-version-tabs::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 2px; }

                .nv-version-tab {
                    min-width: 24px;
                    height: 24px;
                    padding: 0 8px;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--nv-border);
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    transition: all 0.2s;
                    flex-shrink: 0;
                    white-space: nowrap;
                }
                .nv-version-tab:hover { background: rgba(255, 255, 255, 0.1); color: var(--nv-text); }
                .nv-version-tab.active {
                    background: var(--nv-primary);
                    color: white;
                    border-color: var(--nv-primary);
                }

                /* Message Actions */
                .nv-message-actions {
                    display: flex;
                    gap: 6px;
                    margin-top: 8px;
                    padding-top: 8px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .nv-action-btn {
                    padding: 6px 12px;
                    border-radius: 6px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--nv-border);
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.2s;
                    font-size: 12px;
                }
                .nv-action-btn:hover { background: rgba(255, 255, 255, 0.1); color: var(--nv-text); }
                .nv-action-btn svg { width: 14px; height: 14px; }
                .nv-action-btn.nv-copy-success,
                .nv-code-copy.nv-copy-success {
                    color: #22c55e;
                    background: rgba(34, 197, 94, 0.12);
                    border-color: rgba(34, 197, 94, 0.4);
                    transform: scale(1.03);
                }
                .nv-action-btn.nv-copy-success-primary,
                .nv-code-copy.nv-copy-success-primary {
                    color: var(--nv-primary);
                    background: rgba(139, 92, 246, 0.14);
                    border-color: rgba(139, 92, 246, 0.45);
                    transform: scale(1.03);
                }
                .nv-action-btn.nv-copy-success svg,
                .nv-action-btn.nv-copy-success-primary svg,
                .nv-code-copy.nv-copy-success svg,
                .nv-code-copy.nv-copy-success-primary svg {
                    animation: nv-copy-pop 0.25s ease-out;
                }

                @keyframes nv-copy-pop {
                    0% { transform: scale(0.9); opacity: 0.7; }
                    100% { transform: scale(1); opacity: 1; }
                }

                /* Inline Loading */
                .nv-inline-loading {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    padding: 12px 0;
                    opacity: 0.6;
                }
                .nv-inline-loading .dot {
                    width: 6px;
                    height: 6px;
                    background: var(--nv-text-muted);
                    border-radius: 50%;
                    animation: bounce 1.4s infinite ease-in-out;
                }
                .nv-inline-loading .dot:nth-child(1) { animation-delay: -0.32s; }
                .nv-inline-loading .dot:nth-child(2) { animation-delay: -0.16s; }

                /* Input Area */
                .nv-input-area {
                    padding: 16px;
                    flex-wrap: wrap;
                    border-top: 1px solid var(--nv-border);
                    display: flex;
                    gap: 10px;
                    background: var(--nv-bg-secondary);
                }
                .nv-input {
                    flex: 1;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid var(--nv-border);
                    border-radius: 24px;
                    padding: 10px 16px;
                    color: var(--nv-text);
                    font-size: 14px;
                    outline: none;
                    transition: border-color 0.2s;
                    min-height: 42px;
                    resize: none;
                    overflow-y: hidden;
                    line-height: 1.5;
                }
                .nv-input:focus { border-color: var(--nv-primary); }
                .nv-send-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--nv-primary);
                    border: none;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                .nv-send-btn:hover { background: var(--nv-primary-hover); }
                .nv-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                .nv-send-btn.nv-stop-btn {
                    background: rgba(239, 68, 68, 0.82);
                    color: #fff;
                }
                .nv-send-btn.nv-stop-btn:hover {
                    background: rgba(220, 38, 38, 0.92);
                }

                /* Typing Indicator */
                .typing-indicator {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    padding: 8px 12px;
                    background: rgba(255,255,255,0.05);
                    border-radius: 12px;
                    align-self: flex-start;
                    margin-bottom: 8px;
                    display: none;
                }
                .typing-indicator.visible { display: flex; }
                .dot {
                    width: 6px;
                    height: 6px;
                    background: var(--nv-text-muted);
                    border-radius: 50%;
                    animation: bounce 1.4s infinite ease-in-out;
                    flex: 0 0 auto;
                    align-self: center;
                }
                .typing-indicator #nv-typing-text {
                    display: inline-flex !important;
                    align-items: center;
                    line-height: 1.1;
                    min-height: 12px;
                    margin-left: 8px !important;
                }
                .dot:nth-child(1) { animation-delay: -0.32s; }
                .dot:nth-child(2) { animation-delay: -0.16s; }
                @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }

                /* Modal */
                .nv-modal-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.2s ease;
                    z-index: 100;
                }
                .nv-modal-overlay.visible { opacity: 1; pointer-events: auto; }

                .nv-modal {
                    background: var(--nv-bg-secondary);
                    padding: 24px;
                    border-radius: 16px;
                    width: 85%;
                    max-width: 300px;
                    text-align: center;
                    border: 1px solid var(--nv-border);
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                    transform: scale(0.95);
                    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .nv-modal-overlay.visible .nv-modal { transform: scale(1); }

                .nv-modal-text {
                    color: var(--nv-text);
                    font-size: 15px;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }

                .nv-modal-actions {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }

                .nv-btn {
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s;
                }
                .nv-btn-secondary {
                    background: rgba(255,255,255,0.1);
                    color: var(--nv-text);
                }
                .nv-btn-secondary:hover { background: rgba(255,255,255,0.15); }

                .nv-btn-danger {
                    background: #ef4444;
                    color: white;
                }
                .nv-btn-danger:hover { background: #dc2626; }
                /* Image Button */
                .nv-img-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    color: var(--nv-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    margin-right: 8px;
                }
                .nv-img-btn:hover { background: rgba(255,255,255,0.15); color: var(--nv-text); }
                .nv-img-btn.active {
                    background: var(--nv-primary);
                    color: white;
                }
                .nv-page-btn-small.nv-loading {
                    color: var(--nv-primary);
                    opacity: 1;
                    background: rgba(139, 92, 246, 0.15);
                    pointer-events: none;
                }
                .nv-page-btn-small.nv-loading svg {
                    animation: nvPagePulse 1s ease-in-out infinite;
                }
                .nv-input-area {
                    align-items: flex-end;
                    gap: 8px;
                    padding: 12px 14px;
                }
                .nv-input-wrapper {
                    position: relative;
                    flex: 1 1 auto;
                    width: 100%;
                    min-width: 0;
                    min-height: 0;
                    border: 1px solid var(--nv-border);
                    border-radius: 8px;
                    background: rgba(0, 0, 0, 0.22);
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }
                .nv-input-wrapper:focus-within {
                    border-color: var(--nv-primary);
                    box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.16);
                }
                .nv-input {
                    flex: none;
                    display: block;
                    width: 100%;
                    box-sizing: border-box;
                    min-height: 0;
                    margin-bottom: 42px;
                    padding: 12px 14px;
                    border: 0;
                    border-radius: 8px;
                    background: transparent;
                    scrollbar-gutter: stable;
                }
                .nv-panel.ghost-mode .nv-input {
                    border-color: transparent;
                    background: transparent;
                }
                .nv-input:focus {
                    border-color: transparent;
                }
                .nv-controls-row {
                    position: absolute;
                    left: 10px;
                    bottom: 9px;
                    max-width: calc(100% - 120px);
                    margin-top: 0;
                }
                .nv-controls-row .nv-model-select {
                    max-width: calc(100% - 40px);
                }
                .nv-composer-actions {
                    position: absolute;
                    right: 8px;
                    bottom: 8px;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .nv-composer-actions .nv-img-btn-small,
                .nv-composer-actions .nv-send-btn {
                    width: 34px;
                    height: 34px;
                    margin-top: 0;
                    border-radius: 8px;
                    flex: 0 0 auto;
                }
                .nv-composer-actions .nv-img-btn-small {
                    align-items: center;
                    padding: 0;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    background: rgba(255, 255, 255, 0.04);
                }
                .nv-composer-actions .nv-img-btn-small:disabled {
                    opacity: 0.42;
                    cursor: not-allowed;
                }
                .nv-composer-actions .nv-img-btn-small.nv-disabled:hover {
                    color: var(--nv-text-muted);
                    background: rgba(255, 255, 255, 0.04);
                }
                .nv-composer-actions .nv-img-btn-small.nv-recording {
                    color: #fff;
                    opacity: 1;
                    border-color: rgba(239, 68, 68, 0.42);
                    background: rgba(239, 68, 68, 0.78);
                    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
                }
                .nv-composer-actions .nv-img-btn-small.nv-recording:hover {
                    color: #fff;
                    background: rgba(220, 38, 38, 0.88);
                }
                .nv-composer-actions .nv-img-btn-small.nv-recording svg {
                    width: 15px;
                    height: 15px;
                }
                .nv-composer-actions .nv-send-btn {
                    border: 0;
                }
                .nv-message.assistant:not(.nv-welcome-message),
                .nv-panel.ghost-mode .nv-message.assistant:not(.nv-welcome-message) {
                    align-self: stretch;
                    max-width: 100%;
                    width: 100%;
                    padding: 6px 2px 12px;
                    background: transparent;
                    border-radius: 0;
                    box-shadow: none;
                    color: var(--nv-text);
                    white-space: normal;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-message-content {
                    width: 100%;
                    max-width: 100%;
                    font-size: 14px;
                    line-height: 1.65;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-md-p {
                    margin-bottom: 10px;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-md-h1,
                .nv-message.assistant:not(.nv-welcome-message) .nv-md-h2,
                .nv-message.assistant:not(.nv-welcome-message) .nv-md-h3 {
                    margin: 2px 0 10px;
                    color: var(--nv-text);
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-md-list {
                    margin-bottom: 10px;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-md-quote {
                    margin: 10px 0;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-version-tabs {
                    display: inline-flex;
                    align-items: center;
                    width: fit-content;
                    max-width: 100%;
                    gap: 2px;
                    margin: 0 0 10px;
                    padding: 3px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.04);
                    overflow-x: auto;
                    scrollbar-width: none;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-version-tabs::-webkit-scrollbar {
                    display: none;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-version-tab {
                    min-width: 28px;
                    height: 26px;
                    padding: 0 9px;
                    border: 0;
                    border-radius: 6px;
                    background: transparent;
                    color: var(--nv-text-muted);
                    font-size: 12px;
                    font-weight: 650;
                    line-height: 1;
                    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-version-tab:hover {
                    background: rgba(255, 255, 255, 0.08);
                    color: var(--nv-text);
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-version-tab.active {
                    background: rgba(139, 92, 246, 0.24);
                    color: white;
                    box-shadow: inset 0 0 0 1px rgba(139, 92, 246, 0.34);
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-message-actions {
                    width: fit-content;
                    margin-top: 2px;
                    padding-top: 0;
                    border-top: 0;
                    gap: 4px;
                    opacity: 0.9;
                    transition: opacity 0.2s ease;
                }
                .nv-message.assistant:not(.nv-welcome-message):hover .nv-message-actions,
                .nv-message.assistant:not(.nv-welcome-message) .nv-message-actions:focus-within {
                    opacity: 0.9;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-action-btn {
                    width: 26px;
                    height: 26px;
                    padding: 0;
                    border: 0;
                    border-radius: 6px;
                    background: transparent;
                    color: var(--nv-text-muted);
                    justify-content: center;
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-action-btn:hover {
                    background: rgba(255, 255, 255, 0.06);
                    color: var(--nv-text);
                }
                .nv-message.assistant:not(.nv-welcome-message) .nv-action-btn svg {
                    width: 14px;
                    height: 14px;
                }
                .nv-message.user {
                    margin-top: 10px;
                }
                .nv-message.nv-welcome-message {
                    align-self: center;
                    max-width: 92%;
                    width: 100%;
                    padding: 4px 0;
                    background: transparent;
                    border-radius: 0;
                    box-shadow: none;
                }
                .nv-panel.ghost-mode .nv-message.nv-welcome-message {
                    background: transparent !important;
                }
                .nv-welcome {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    padding: 4px 0 2px;
                    white-space: normal;
                    text-align: center;
                }
                .nv-welcome-message .nv-message-content {
                    width: 100%;
                    max-width: 100%;
                }
                .nv-welcome-title {
                    font-size: 16px;
                    font-weight: 700;
                    color: var(--nv-text);
                    line-height: 1.35;
                }
                .nv-welcome-subtitle {
                    margin-top: -6px;
                    font-size: 12px;
                    line-height: 1.45;
                    color: var(--nv-text-muted);
                }
                .nv-welcome-grid {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 8px;
                    width: 100%;
                }
                .nv-welcome-action {
                    position: relative;
                    display: flex;
                    align-items: flex-start;
                    gap: 8px;
                    width: 100%;
                    min-height: 58px;
                    padding: 9px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.04);
                    color: var(--nv-text);
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.2s ease;
                    font: inherit;
                }
                .nv-welcome-action:hover {
                    border-color: rgba(139, 92, 246, 0.55);
                    background: rgba(139, 92, 246, 0.12);
                    transform: translateY(-1px);
                }
                .nv-welcome-action:active {
                    transform: translateY(0);
                }
                .nv-welcome-icon {
                    flex: 0 0 auto;
                    width: 18px;
                    height: 18px;
                    color: var(--nv-primary);
                    margin-top: 1px;
                }
                .nv-welcome-icon svg {
                    width: 18px;
                    height: 18px;
                    display: block;
                }
                .nv-welcome-copy {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .nv-welcome-label-row {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    min-width: 0;
                    flex-wrap: wrap;
                }
                .nv-welcome-label {
                    font-size: 12px;
                    font-weight: 650;
                    line-height: 1.25;
                    color: var(--nv-text);
                }
                .nv-welcome-badge {
                    position: absolute;
                    top: 1px;
                    right: -5px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2px 7px;
                    border-radius: 999px;
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.92), rgba(79, 70, 229, 0.92));
                    border: 1px solid rgba(208, 191, 255, 0.28);
                    box-shadow: 0 10px 18px rgba(79, 70, 229, 0.18);
                    color: #fff;
                    font-size: 9px;
                    font-weight: 700;
                    line-height: 1.2;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    transform: rotate(22deg);
                    transform-origin: center;
                    pointer-events: none;
                }
                .nv-welcome-desc {
                    font-size: 10px;
                    line-height: 1.25;
                    color: var(--nv-text-muted);
                }
                @media (max-width: 420px) {
                    .nv-welcome-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .nv-history-item .nv-h-meta {
                    margin-top: 2px;
                    font-size: 10px;
                    color: var(--nv-text-muted);
                    opacity: 0.78;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                @keyframes nvPagePulse {
                    0%, 100% { transform: scale(1); opacity: 0.72; }
                    50% { transform: scale(1.08); opacity: 1; }
                }
`;
