// ==UserScript==
// @name         GhostChatAI
// @namespace    https://github.com/DREwX-code
// @version      1.0.2
// @description  Lightweight floating AI chat panel that works on any webpage. Free and no signup required. Uses Pollinations.ai for text and image generation, supports multiple conversations, reasoning levels, response styles, image tools, and a privacy-focused Ghost Mode.
// @author       Dℝ∃wX
// @match        *://*/*
// @icon         https://github.com/DREwX-code/ghostchatai/blob/main/assets/icon/Icon2_GhostChat_Script.png?raw=true
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-end
// @license      Apache-2.0
// @copyright    2025 Dℝ∃wX
// @noframes
// @tag          productivity
// ==/UserScript==

/*

Copyright 2025 Dℝ∃wX

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

/*
GhostChatAI
--------------------------------

AI Backend:
This project uses public, open-source endpoints provided by Pollinations.ai
License: MIT. No proprietary models are hosted or redistributed.
Source: https://github.com/pollinations/pollinations

GreasyFork SVG icon :
By denilsonsa
License: not explicitly declared (use with credit)
Source: https://github.com/denilsonsa/denilsonsa.github.io/blob/master/icons/GreasyFork.svg

*/

(function () {
    'use strict';

    class GhostChat {
        constructor() {
            this.REASONING_LEVELS = ['auto', 'minimal', 'low', 'medium', 'high', 'ultra'];
            this.STYLE_OPTIONS = [
                { id: 'default', label: 'Default', desc: 'Balanced, natural' },
                { id: 'professional', label: 'Professional', desc: 'Clear, structured, formal' },
                { id: 'direct', label: 'Direct', desc: 'Short replies, no fluff' },
                { id: 'pedagogic', label: 'Teaching', desc: 'Step-by-step, clear explanations' },
                { id: 'creative', label: 'Creative', desc: 'Original, vivid language' },
                { id: 'technical', label: 'Technical', desc: 'Precise, dev-oriented' },
                { id: 'geek', label: 'Geek', desc: 'Tech jargon and references' },
                { id: 'persuasive', label: 'Persuasive', desc: 'Structured and convincing' }
            ];
            this.DEFAULT_GREETING = 'Hello! I am GhostChat. How can I help you today?';
            this.host = null;
            this.shadow = null;
            this.elements = {};
            this.state = {
                isOpen: false,
                isTyping: false,
                loadingChatId: null,
                isSidebar: false,
                isHistoryOpen: false,
                isSettingsOpen: false,
                isInfoOpen: false,
                isGhostMode: false,
                isImageMode: false,
                reasoningEffort: 'low',
                responseStyle: 'default',
                manualTitle: null,
                historySearchTerm: ''
            };
            this.history = [];
            this.currentChatId = Date.now(); // Start with a new session ID
            this.messages = [
                { role: 'assistant', content: this.DEFAULT_GREETING }
            ];

            this.init();
        }

        init() {
            this.loadHistory();
            this.createHost();
            this.injectStyles();
            this.createUI();
            this.attachEvents();
            this.loadSavedReasoning();
            this.loadSavedStyle();
            this.restoreActiveChat();
            this.updateGhostUI();
            this.buildInfoContent();
        }

        loadSavedReasoning() {
            const savedReasoning = GM_getValue('ghostchat_reasoning', 'low');
            if (this.REASONING_LEVELS.includes(savedReasoning)) {
                this.state.reasoningEffort = savedReasoning;
                this.elements.modelSelect.value = savedReasoning;
            }
        }

        getReasoningEffort(level) {
            const mapping = {
                'auto': 'low',
                'minimal': 'low',
                'low': 'low',
                'medium': 'medium',
                'high': 'high',
                'ultra': 'high'
            };
            return mapping[level] || 'low';
        }

        createHost() {
            this.host = document.createElement('div');
            this.host.id = 'ghost-chat-host';
            this.host.style.position = 'fixed';
            this.host.style.bottom = '20px';
            this.host.style.right = '20px'; // Stacks comfortably with standard scrollbars
            this.host.style.zIndex = '2147483646'; // Just under PixelPicker if present
            this.host.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

            this.shadow = this.host.attachShadow({ mode: 'open' });
            document.body.appendChild(this.host);
        }

        injectStyles() {
            const style = document.createElement('style');
            style.textContent = `
                :host {
                    --gc-bg: rgba(23, 23, 28, 0.95);
                    --gc-bg-secondary: rgba(30, 30, 36, 0.9);
                    --gc-border: rgba(255, 255, 255, 0.08);
                    --gc-primary: #8b5cf6;
                    --gc-primary-hover: #7c3aed;
                    --gc-text: #ffffff;
                    --gc-text-muted: #a1a1aa;
                    --gc-radius: 16px;
                    --gc-radius-sm: 8px;
                    --gc-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                }

                * { box-sizing: border-box; }

                /* Trigger Button */
                .gc-trigger {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: var(--gc-bg);
                    border: 1px solid var(--gc-border);
                    box-shadow: var(--gc-shadow);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    z-index: 10;
                }
                .gc-trigger:hover { transform: scale(1.05); }
                .gc-trigger:active { transform: scale(0.95); }
                .gc-trigger svg { width: 26px; height: 26px; fill: var(--gc-text); transition: all 0.3s; }

                /* Panel */
                .gc-panel {
                    position: absolute;
                    bottom: 72px;
                    right: 0;
                    width: 420px;
                    height: 500px;
                    max-height: 80vh;
                    background: var(--gc-bg);
                    border: 1px solid var(--gc-border);
                    border-radius: var(--gc-radius);
                    box-shadow: var(--gc-shadow);
                    display: flex;
                    flex-direction: column;
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                    transform-origin: bottom right;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                    visibility: hidden;
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    overflow: hidden;
                    z-index: 20;
                }

                .gc-panel.open {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    pointer-events: auto;
                    visibility: visible;
                }

                /* Sidebar Mode */
                .gc-panel.sidebar {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    height: 100vh;
                    max-height: 100vh;
                    border-radius: 0;
                    border-left: 1px solid var(--gc-border);
                    border-top: none;
                    border-bottom: none;
                    transform: translateX(100%);
                    width: 430px;
                    z-index: 99999;
                }
                .gc-panel.sidebar.open {
                    transform: translateX(0);
                }

                /* Header */
                .gc-header {
                    padding: 16px;
                    background: var(--gc-bg-secondary);
                    border-bottom: 1px solid var(--gc-border);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .gc-header-left { display: flex; align-items: center; gap: 8px; }
                .gc-header-right { display: flex; align-items: center; gap: 4px; }
                .gc-header-main { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
                .gc-header-extra {
                    display: none;
                    padding: 10px 16px 12px;
                    background: var(--gc-bg-secondary);
                    border-bottom: 1px solid var(--gc-border);
                    gap: 10px;
                    align-items: center;
                    flex-wrap: wrap;
                }
                .gc-header-extra.open { display: flex; }
                .gc-ghost-pill {
                    display: none;
                    flex: 0 0 100%;
                    padding: 4px 8px;
                    border-radius: 999px;
                    background: rgba(20, 184, 166, 0.18);
                    border: 1px solid rgba(20, 184, 166, 0.5);
                    color: #a5f3fc;
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 0.2px;
                }

                .gc-ghost-pill.visible {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .gc-ghost-pill::before {
                    content: 'G';
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.4px;
                }

                .gc-settings {
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
                .gc-settings.visible { transform: translateX(0); }
                .gc-settings-title {
                    font-size: 12px;
                    color: var(--gc-text-muted);
                    margin-bottom: 10px;
                    letter-spacing: 0.2px;
                }
                .gc-settings-list {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    overflow-y: auto;
                }
                .gc-settings-item {
                    text-align: left;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid var(--gc-border);
                    border-radius: 10px;
                    padding: 10px 12px;
                    color: var(--gc-text);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .gc-settings-item:hover { background: rgba(255, 255, 255, 0.08); }
                .gc-settings-item.active {
                    border-color: var(--gc-primary);
                    background: rgba(139, 92, 246, 0.15);
                }
                .gc-settings-label {
                    font-size: 13px;
                    font-weight: 600;
                }
                .gc-settings-desc {
                    font-size: 12px;
                    color: var(--gc-text-muted);
                    margin-top: 4px;
                    line-height: 1.35;
                }
                .gc-panel.ghost-mode {
                    background: radial-gradient(circle at 20% 20%, rgba(45, 212, 191, 0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.08), transparent 35%), rgba(10, 12, 20, 0.95);
                    border-color: rgba(99, 102, 241, 0.35);
                }
                .gc-panel.ghost-mode .gc-header,
                .gc-panel.ghost-mode .gc-header-extra,
                .gc-panel.ghost-mode .gc-settings {
                    background: rgba(15, 23, 42, 0.95);
                    border-color: rgba(99, 102, 241, 0.25);
                }
                .gc-panel.ghost-mode .gc-message.assistant { background: rgba(255, 255, 255, 0.06); }
                .gc-panel.ghost-mode .gc-message.user { background: linear-gradient(135deg, #14b8a6, #06b6d4); }
                .gc-panel.ghost-mode .gc-input-area {
                    background: linear-gradient(135deg, rgba(14, 165, 233, 0.14), rgba(20, 184, 166, 0.14));
                    border-top-color: rgba(99, 102, 241, 0.25);
                }
                .gc-panel.ghost-mode .gc-input {
                    border-color: rgba(99, 102, 241, 0.4);
                    background: rgba(0, 0, 0, 0.25);
                }
                .gc-panel.ghost-mode .gc-status-dot {
                    background: #22d3ee;
                    box-shadow: 0 0 10px rgba(34, 211, 238, 0.8);
                }

                .gc-title {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--gc-text);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .gc-title-toggle {
                    background: none;
                    border: none;
                    color: var(--gc-text-muted);
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 6px;
                    display: inline-flex;
                    transition: all 0.2s;
                }
                .gc-title-toggle:hover { background: rgba(255, 255, 255, 0.1); color: var(--gc-text); }
                .gc-title-toggle svg { width: 16px; height: 16px; transition: transform 0.2s; }
                .gc-title-toggle.open svg { transform: rotate(90deg); }
                .gc-status-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #22c55e;
                    box-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
                }
                .gc-status-dot.ghost-active {
                    background: #22d3ee;
                    box-shadow: 0 0 10px rgba(34, 211, 238, 0.8);
                }

                .gc-btn-icon {
                    background: none;
                    border: none;
                    color: var(--gc-text-muted);
                    cursor: pointer;
                    padding: 6px;
                    border-radius: 6px;
                    transition: all 0.2s;
                    display: flex;
                }
                .gc-btn-icon:hover { background: rgba(255, 255, 255, 0.1); color: var(--gc-text); }
                .gc-btn-icon svg { width: 18px; height: 18px; }
                .gc-btn-icon.ghost-active {
                    background: rgba(20, 184, 166, 0.18);
                    border: 1px solid rgba(20, 184, 166, 0.45);
                    color: #99f6e4;
                    box-shadow: 0 6px 16px rgba(20, 184, 166, 0.25);
                }
                .gc-header-extra .gc-btn-icon {
                    border: 1px solid var(--gc-border);
                    background: rgba(255, 255, 255, 0.04);
                    border-radius: 10px;
                    padding: 8px;
                }
                .gc-header-extra .gc-btn-icon:hover {
                    background: rgba(255, 255, 255, 0.08);
                }
                .gc-info {
                    position: absolute;
                    inset: 58px 0 0 0;
                    background: #0f111a;
                    z-index: 6;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    padding: 14px 16px 18px;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                }
                .gc-info.visible { transform: translateX(0); }
                .gc-info-title {
                    font-size: 14px;
                    font-weight: 700;
                    color: var(--gc-text);
                }
                .gc-info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 12px;
                }
                .gc-info-card {
                    border: 1px solid var(--gc-border);
                    border-radius: 12px;
                    padding: 12px;
                    color: var(--gc-text);
                }
                .gc-info-card.variant-a {
                    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.08));
                }
                .gc-info-card.variant-b {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(34, 211, 238, 0.08));
                }
                .gc-info-card.variant-c {
                    background: linear-gradient(135deg, rgba(244, 114, 182, 0.08), rgba(250, 204, 21, 0.08));
                }
                .gc-info-card h4 {
                    margin: 0 0 6px 0;
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--gc-text);
                }
                .gc-info-card p {
                    margin: 0;
                    font-size: 12px;
                    color: var(--gc-text-muted);
                    line-height: 1.45;
                }
                .gc-info-links {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 6px;
                }
                .gc-info-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 10px;
                    border-radius: 999px;
                    border: 1px solid var(--gc-border);
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--gc-text);
                    text-decoration: none;
                    font-size: 12px;
                    transition: all 0.2s;
                }
                .gc-info-link svg {
                    width: 14px;
                    height: 14px;
                }
                .gc-info-link:hover {
                    background: rgba(255, 255, 255, 0.1);
                }

                /* Model Selector */
                .gc-model-select {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--gc-border);
                    border-radius: 6px;
                    color: var(--gc-text);
                    font-size: 12px;
                    padding: 4px 8px;
                    cursor: pointer;
                    margin-right: 8px;
                    transition: all 0.2s;
                    outline: none;
                }
                .gc-model-select:hover { background: rgba(255, 255, 255, 0.08); }
                .gc-model-select option { background: var(--gc-bg-secondary); color: var(--gc-text); }

                /* History Panel (Overlay) */
                .gc-history {
                    position: absolute;
                    inset: 58px 0 0 0;
                    background: #17171c;
                    z-index: 5;
                    display: flex;
                    flex-direction: column;
                    transform: translateX(100%);
                    transition: transform 0.3s ease;
                }
                .gc-history.visible { transform: translateX(0); }

                .gc-history-header {
                    padding: 12px 16px;
                    font-size: 13px;
                    color: var(--gc-text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    border-bottom: 1px solid var(--gc-border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .gc-clear-all {
                    background: none;
                    border: none;
                    color: var(--gc-text-muted);
                    cursor: pointer;
                    display: flex;
                    padding: 4px;
                    border-radius: 4px;
                    transition: all 0.2s;
                }
                .gc-clear-all:hover { color: #ef4444; background: rgba(239, 68, 68, 0.1); }

                .gc-history-list {
                    flex: 1;
                    overflow-y: auto;
                    padding: 8px;
                }

                .gc-history-item {
                    padding: 12px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background 0.2s;
                    color: var(--gc-text-muted);
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    margin-bottom: 4px;
                    position: relative;
                }
                .gc-history-item:hover { background: rgba(255,255,255,0.05); color: var(--gc-text); }
                .gc-history-item.active { background: rgba(139, 92, 246, 0.1); color: var(--gc-primary); }

                .gc-history-actions {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .gc-history-search {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    position: relative;
                }
                .gc-search-btn {
                    background: none;
                    border: none;
                    color: var(--gc-text-muted);
                    width: 28px;
                    height: 28px;
                    border-radius: 6px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .gc-search-btn:hover { color: var(--gc-primary); background: rgba(139, 92, 246, 0.12); }
                .gc-search-btn svg { width: 16px; height: 16px; }
                .gc-search-input {
                    width: 0;
                    opacity: 0;
                    padding: 6px 0;
                    border: 1px solid var(--gc-border);
                    background: rgba(255, 255, 255, 0.04);
                    color: var(--gc-text);
                    border-radius: 8px;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    pointer-events: none;
                }
                .gc-history-search.active .gc-search-input {
                    width: 180px;
                    opacity: 1;
                    padding: 6px 8px;
                    pointer-events: auto;
                }
                .gc-search-input::placeholder { color: var(--gc-text-muted); }

                .gc-h-title { font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; padding-right: 48px; }
                .gc-h-title.gc-h-editing {
                    width: calc(100% - 64px);
                    padding-right: 12px;
                    outline: 1.5px solid var(--gc-primary);
                    outline-offset: 2px;
                    border-radius: 8px;
                    background: rgba(255, 255, 255, 0.04);
                    cursor: text;
                    white-space: normal;
                    overflow: visible;
                    text-overflow: unset;
                    word-break: break-word;
                }
                .gc-h-date { font-size: 11px; opacity: 0.6; }

                .gc-h-rename,
                .gc-h-delete {
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
                    color: var(--gc-text-muted);
                }
                .gc-h-rename { right: 36px; }
                .gc-h-delete { right: 8px; }
                .gc-history-item:hover .gc-h-rename,
                .gc-history-item:hover .gc-h-delete { opacity: 1; }
                .gc-h-rename:hover { background: rgba(59, 130, 246, 0.15); color: #60a5fa; }
                .gc-h-delete:hover { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
                .gc-h-rename svg,
                .gc-h-delete svg { width: 14px; height: 14px; }

                .gc-history-empty {
                    padding: 16px;
                    text-align: center;
                    color: var(--gc-text-muted);
                    font-size: 13px;
                }

                /* Messages */
                .gc-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    scroll-behavior: smooth;
                }
                .gc-messages::-webkit-scrollbar { width: 6px; }
                .gc-messages::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }

                .gc-message {
                    max-width: 85%;
                    padding: 12px 16px;
                    border-radius: 14px;
                    font-size: 14px;
                    line-height: 1.5;
                    word-break: break-word;
                    white-space: pre-wrap;
                    animation: slideIn 0.3s ease;
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .gc-message.user { align-self: flex-end; background: var(--gc-primary); color: white; border-bottom-right-radius: 2px; }
                .gc-message.assistant { align-self: flex-start; background: rgba(255, 255, 255, 0.08); color: var(--gc-text); border-bottom-left-radius: 2px; position: relative; }

                /* Tool Rendering */
                .gc-tool {
                    margin-top: 10px;
                }
                .gc-tool:first-child {
                    margin-top: 0;
                }
                .gc-tool-label {
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    color: var(--gc-text-muted);
                    margin-bottom: 6px;
                }
                .gc-tool-caption {
                    font-size: 12px;
                    color: var(--gc-text-muted);
                    margin-top: 6px;
                }
                .gc-tool-image img {
                    width: 100%;
                    display: block;
                    border-radius: 10px;
                    border: 1px solid var(--gc-border);
                }
                .gc-tool-link a {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 10px;
                    border-radius: 999px;
                    border: 1px solid var(--gc-border);
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--gc-text);
                    text-decoration: none;
                    font-size: 12px;
                }
                .gc-tool-link a:hover { background: rgba(255, 255, 255, 0.1); }
                .gc-inline-link {
                    color: var(--gc-text);
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }
                .gc-inline-link:hover { color: var(--gc-primary); }
                .gc-tool-code {
                    background: rgba(0, 0, 0, 0.25);
                    border-radius: 12px;
                    border: 1px solid var(--gc-border);
                    padding: 10px;
                }
                .gc-code-header {
                    display: flex;
                    justify-content: space-between;
                    font-size: 11px;
                    color: var(--gc-text-muted);
                    margin-bottom: 8px;
                }
                .gc-tool-code pre {
                    margin: 0;
                    padding: 0;
                    overflow-x: auto;
                    font-size: 12px;
                    line-height: 1.5;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                }
                .gc-code-block {
                    background: rgba(0, 0, 0, 0.25);
                    border-radius: 12px;
                    border: 1px solid var(--gc-border);
                    padding: 10px;
                    margin-top: 10px;
                }
                .gc-code-block:first-child { margin-top: 0; }
                .gc-code-block pre {
                    margin: 0;
                    padding: 0;
                    overflow-x: auto;
                    font-size: 12px;
                    line-height: 1.5;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                }
                .gc-inline-code {
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                    font-size: 12px;
                    background: rgba(0, 0, 0, 0.35);
                    border: 1px solid var(--gc-border);
                    border-radius: 6px;
                    padding: 1px 6px;
                }

                /* Version Tabs */
                .gc-version-tabs {
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
                .gc-version-tabs::-webkit-scrollbar { height: 4px; }
                .gc-version-tabs::-webkit-scrollbar-track { background: transparent; }
                .gc-version-tabs::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 2px; }

                .gc-version-tab {
                    min-width: 24px;
                    height: 24px;
                    padding: 0 8px;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--gc-border);
                    color: var(--gc-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    transition: all 0.2s;
                    flex-shrink: 0;
                    white-space: nowrap;
                }
                .gc-version-tab:hover { background: rgba(255, 255, 255, 0.1); color: var(--gc-text); }
                .gc-version-tab.active {
                    background: var(--gc-primary);
                    color: white;
                    border-color: var(--gc-primary);
                }

                /* Message Actions */
                .gc-message-actions {
                    display: flex;
                    gap: 6px;
                    margin-top: 8px;
                    padding-top: 8px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .gc-action-btn {
                    padding: 6px 12px;
                    border-radius: 6px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--gc-border);
                    color: var(--gc-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: all 0.2s;
                    font-size: 12px;
                }
                .gc-action-btn:hover { background: rgba(255, 255, 255, 0.1); color: var(--gc-text); }
                .gc-action-btn svg { width: 14px; height: 14px; }

                /* Inline Loading */
                .gc-inline-loading {
                    display: flex;
                    gap: 4px;
                    padding: 12px 0;
                    opacity: 0.6;
                }
                .gc-inline-loading .dot {
                    width: 6px;
                    height: 6px;
                    background: var(--gc-text-muted);
                    border-radius: 50%;
                    animation: bounce 1.4s infinite ease-in-out;
                }
                .gc-inline-loading .dot:nth-child(1) { animation-delay: -0.32s; }
                .gc-inline-loading .dot:nth-child(2) { animation-delay: -0.16s; }

                /* Input Area */
                .gc-input-area {
                    padding: 16px;
                    flex-wrap: wrap;
                    border-top: 1px solid var(--gc-border);
                    display: flex;
                    gap: 10px;
                    background: var(--gc-bg-secondary);
                }
                .gc-input {
                    flex: 1;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid var(--gc-border);
                    border-radius: 24px;
                    padding: 10px 16px;
                    color: var(--gc-text);
                    font-size: 14px;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .gc-input:focus { border-color: var(--gc-primary); }
                .gc-send-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: var(--gc-primary);
                    border: none;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                }
                .gc-send-btn:hover { background: var(--gc-primary-hover); }
                .gc-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

                /* Typing Indicator */
                .typing-indicator {
                    display: flex;
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
                    background: var(--gc-text-muted);
                    border-radius: 50%;
                    animation: bounce 1.4s infinite ease-in-out;
                }
                .dot:nth-child(1) { animation-delay: -0.32s; }
                .dot:nth-child(2) { animation-delay: -0.16s; }
                @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }

                /* Modal */
                .gc-modal-overlay {
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
                .gc-modal-overlay.visible { opacity: 1; pointer-events: auto; }

                .gc-modal {
                    background: var(--gc-bg-secondary);
                    padding: 24px;
                    border-radius: 16px;
                    width: 85%;
                    max-width: 300px;
                    text-align: center;
                    border: 1px solid var(--gc-border);
                    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
                    transform: scale(0.95);
                    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .gc-modal-overlay.visible .gc-modal { transform: scale(1); }

                .gc-modal-text {
                    color: var(--gc-text);
                    font-size: 15px;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }

                .gc-modal-actions {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }

                .gc-btn {
                    padding: 8px 16px;
                    border-radius: 8px;
                    font-size: 13px;
                    font-weight: 500;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s;
                }
                .gc-btn-secondary {
                    background: rgba(255,255,255,0.1);
                    color: var(--gc-text);
                }
                .gc-btn-secondary:hover { background: rgba(255,255,255,0.15); }

                .gc-btn-danger {
                    background: #ef4444;
                    color: white;
                }
                .gc-btn-danger:hover { background: #dc2626; }
                /* Image Button */
                .gc-img-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    border: none;
                    color: var(--gc-text-muted);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.2s;
                    margin-right: 8px;
                }
                .gc-img-btn:hover { background: rgba(255,255,255,0.15); color: var(--gc-text); }
                .gc-img-btn.active {
                    background: var(--gc-primary);
                    color: white;
                }
            `;

            this.shadow.appendChild(style);
        }

        createUI() {
            const trigger = document.createElement('div');
            trigger.className = 'gc-trigger';
            trigger.innerHTML = `
                <svg viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  <path d="M7 9h10v2H7zm0-4h10v2H7z"/>
                </svg>
            `;

            // Panel
            const panel = document.createElement('div');
            panel.className = 'gc-panel';
            panel.innerHTML = `
                <div class="gc-header">
                    <div class="gc-header-main">
                        <div class="gc-header-left">
                            <div class="gc-title">
                                <div class="gc-status-dot"></div>
                                <span>GhostChat AI</span>
                                <button class="gc-title-toggle" id="gc-btn-toggle-extra" title="More">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="gc-header-right">
                         <select class="gc-model-select" id="gc-model-select" title="Reasoning Effort">
                            <option value="auto">Auto</option>
                            <option value="minimal">Minimal</option>
                            <option value="low" selected>Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="ultra">Ultra</option>
                         </select>
                         <button class="gc-btn-icon" id="gc-btn-new" title="New Chat">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                        </button>
                        <button class="gc-btn-icon" id="gc-btn-history" title="History">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </button>
                        <button class="gc-btn-icon" id="gc-btn-sidebar" title="Toggle Sidebar">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
                        </button>
                        <button class="gc-btn-icon" id="gc-btn-close" title="Close">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        </div>
                    </div>
                </div>
                <div class="gc-header-extra" id="gc-header-extra">
                    <button class="gc-btn-icon" id="gc-btn-settings" title="Settings">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        </svg>
                    </button>

                    <button class="gc-btn-icon" id="gc-btn-ghost" title="Ghost Mode">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2a8 8 0 0 0-8 8v12l3-2 2.5 2 2.5-2 2.5 2 2.5-2 3 2V10a8 8 0 0 0-8-8z"></path>
                            <circle cx="9" cy="11" r="1" fill="currentColor"></circle>
                            <circle cx="15" cy="11" r="1" fill="currentColor"></circle>
                        </svg>
                    </button>

                <button class="gc-btn-icon" id="gc-btn-info" title="Info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg>
                </button>
            </div>
                <div class="gc-settings" id="gc-settings-panel">
                    <div class="gc-settings-title">Choose how GhostChat should respond.</div>
                    <div class="gc-settings-list" id="gc-settings-list"></div>
                </div>

                <div class="gc-info" id="gc-info-panel">
                    <div class="gc-info-title">Information</div>

                    <div class="gc-info-grid">
                        <div class="gc-info-card variant-a">
                            <h4>Version</h4>
                            <p>1.0.2<br>Last updated: 2025-12-26</p>
                        </div>

                        <div class="gc-info-card variant-b">
                            <h4>Author</h4>
                            <p>Dℝ∃wX / @DREwX-code</p>
                            <div class="gc-info-links">
                            <!--  GreasyFork SVG icon by denilsonsa
                            Source: https://github.com/denilsonsa/denilsonsa.github.io/blob/master/icons/GreasyFork.svg -->

                            <a class="gc-info-link" href="https://greasyfork.org/users/1259433-d%E2%84%9D-wx" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 96 96"
                                    width="18"
                                    height="18"
                                    aria-hidden="true"
                                >
                                    <circle fill="#000" r="48" cy="48" cx="48"/>

                                    <clipPath id="GreasyForkCircleClip">
                                        <circle r="47" cy="48" cx="48"/>
                                    </clipPath>

                                    <text
                                        fill="#fff"
                                        clip-path="url(#GreasyForkCircleClip)"
                                        text-anchor="middle"
                                        font-size="18"
                                        font-family="'DejaVu Sans', Verdana, Arial, sans-serif"
                                        letter-spacing="-0.75"
                                        pointer-events="none"
                                    >
                                        <tspan x="51" y="13">= null;</tspan>
                                        <tspan x="56" y="35">function init</tspan>
                                        <tspan x="49" y="57">for (var i = 0;</tspan>
                                        <tspan x="50" y="79">XmlHttpReq</tspan>
                                    </text>

                                    <path fill="#000" stroke="#000" stroke-width="4"
                                        d="M 44,29 a6.36,6.36 0,0,1 0,9 l36,36 a3.25,3.25 0,0,1 -6.5,6.5 l-36,-36 a6.36,6.36 0,0,1 -9,0 l-19,-19 a1.77,1.77 0,0,1 0,-2.5 l13,-13 a1.77,1.77 0,0,1 2.5,0 z"/>
                                    <path fill="#fff"
                                        d="M 44,29 a6.36,6.36 0,0,1 0,9 l36,36 a3.25,3.25 0,0,1 -6.5,6.5 l-36,-36 a6.36,6.36 0,0,1 -9,0 l-19,-19 a1.77,1.77 0,0,1 2.5,-2.5 l14,14 4,-4 -14,-14 a1.77,1.77 0,0,1 2.5,-2.5 l14,14 4,-4 -14,-14 a1.77,1.77 0,0,1 2.5,-2.5 z"/>
                                </svg>
                                <span>GreasyFork</span>
                            </a>

                                <a class="gc-info-link" href="https://github.com/DREwX-code" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .5a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.9.84.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 .5Z"></path>
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div class="gc-info-card variant-c">
                            <h4>About</h4>
                            <p>
                                GhostChatAI is a modern, in-browser floating chat panel.
                                AI responses are served through the open-source Pollinations endpoints.
                            </p>
                            <div class="gc-info-links">
                               <a class="gc-info-link" href="https://hello.pollinations.ai/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="18" height="18">
                                <path style="fill: #ffffff; stroke:none;" d="M117 74C107.231 69.7971 97.4206 70 87 70L52 70L52 107C52 110.655 53.2747 117.433 50.3966 120.258C48.1657 122.447 43.882 122.231 41 122.808C35.1822 123.972 29.5012 125.801 24 128C21.3907 129.043 17.0648 130.003 16.4113 133.225C15.6968 136.746 18.2516 140.896 19.5787 144C23.188 152.441 27.7557 160.567 33.152 168C50.9487 192.515 77.3192 210.861 108 213.83C118.888 214.884 129.237 212.462 140 212C125.587 230.759 99.6636 220.161 84.4676 238.039C78.6982 244.827 78.5571 252.541 74.686 259.961C72.9705 263.249 69.6858 265.254 67.3403 268.039C63.8007 272.243 62.0938 277.553 62.0185 283C61.8036 298.545 78.8554 310.043 92.9992 301.772C102.52 296.204 106.408 281.672 100.772 272C96.8944 265.347 86.5961 262.749 90.3326 254C90.931 252.599 91.7547 251.238 92.6381 250C101.601 237.442 113.768 239.897 127 236.985C137.36 234.704 147.836 226.835 152 217C154.779 226.403 153 238.218 153 248C153 251.884 153.906 257.17 152.397 260.826C150.949 264.332 146.877 266.226 144.533 269.09C140.18 274.412 138.999 282.381 140.529 289C144.901 307.913 175.241 310.054 179.61 290C181.098 283.167 180.419 274.449 175.775 269.015C172.912 265.665 167.505 263.426 166.318 258.957C165.189 254.703 166 249.376 166 245L166 216C172.604 225.708 180.285 233.672 192 236.841C204.523 240.229 217.395 236.967 226.211 249.015C227.119 250.256 227.965 251.607 228.622 253C233.092 262.474 224.541 263.812 220.367 271.004C214.765 280.655 216.493 294.343 226.04 300.891C239.871 310.378 258.868 299.388 258.921 283C258.939 277.263 256.585 271.366 252.671 267.184C250.261 264.608 246.831 262.996 244.988 259.907C240.975 253.18 240.953 245.377 235.671 239.001C220.088 220.189 193.289 231.272 179 211C220.766 221.806 262.92 202.625 287.279 168C292.398 160.724 296.656 153.096 300.306 145C301.801 141.683 304.067 137.891 303.758 134.105C303.436 130.158 299.126 129.026 296 127.811C290.487 125.669 284.79 123.891 279 122.665C276.34 122.102 272.709 122.206 271.028 119.682C268.671 116.143 270 109.069 270 105L270 70C254.015 70 237.979 69.6221 222 70.0147C217.521 70.1247 209.398 73.8076 205.39 71.7986C201.137 69.6665 198.637 60.852 195.961 57C189.174 47.2314 181.112 38.1938 173.576 29C170.613 25.3861 167.03 19.1444 162.718 17.0864C157.356 14.5276 151.106 25.6572 148.389 29C136.831 43.2172 124.121 56.896 117 74z"/>
                                <path style="fill: #2d272d; stroke:none;" d="M160 35C152.305 45.2098 143.241 54.4271 136.029 65C133.56 68.6192 129.073 74.3338 129.531 79C129.856 82.3064 132.842 84.7733 135.001 87C138.664 90.7792 142.224 94.6598 145.226 99C153.533 111.01 158.843 126.459 160 141C161.926 136.453 161.862 130.85 163.155 126C165.627 116.73 169.708 107.989 175.004 100C178.458 94.7897 182.528 90.3951 186.995 86.0394C189.003 84.0818 192.151 81.9398 192.469 78.9105C192.899 74.8216 189.102 70.1842 186.996 67C181.889 59.2763 175.989 52.1183 170.081 45C166.983 41.2669 164.376 37.2171 160 35M65 82L65 121C75.0069 122.864 84.4971 124.572 94 128.452C101.279 131.424 107.81 135.902 115 139C110.199 121.923 109.754 104.422 113 87C98.9518 79.627 80.3718 82 65 82M208 137C219.691 133.301 229.731 126.171 242 123.425C245.878 122.557 254.396 122.791 256.972 119.411C258.89 116.896 258 111.96 258 109L258 82C246.617 82 235.323 82.8069 224 82.9969C220.024 83.0636 212.653 82.9235 210.067 86.7022C207.731 90.116 210.789 98.0842 210.961 102C211.49 114.091 208.946 125.113 208 137M196 94C191.363 98.6498 186.899 103.36 183.464 109C172.159 127.559 172 148.966 172 170C188.418 157.915 198.086 133.947 198.961 114C199.235 107.743 199.971 99.1619 196 94M124 95C124 104.506 123.061 114.568 124.289 124C126.328 139.645 135.703 158.053 148 168C148 148.709 148.092 130.69 139.241 113C135.823 106.17 131.089 98.3335 124 95M255 134C245.951 136.75 236.857 137.609 228 141.428C206.487 150.705 187.042 170.398 178 192C188.462 189.509 199.429 192.223 210 190.7C228.373 188.052 242.658 173.125 250.218 157C253.094 150.866 257.72 140.67 255 134M32 139C38.7435 162.409 62.103 186.191 85 194C80.1511 187.986 73.9628 183.236 69.2392 177C60.376 165.299 54.1676 149.673 53 135C45.5584 135.021 39.0339 136.712 32 139M66 135C66.4916 158.691 84.575 184.411 108 190.1C119.096 192.795 130.885 189.354 142 192C131.782 162.517 97.5878 135.652 66 135M269 135C267.131 149.474 261.907 164.163 253.243 176C248.691 182.219 242.611 186.971 238 193C261.173 183.35 279.485 161.855 289 139C282.473 136.913 275.872 135.295 269 135M236 193L237 194L236 193M140 211L141 212L140 211M81.0046 274.667C71.0189 276.698 73.7819 292.76 83.9954 291.091C94.4016 289.391 91.2993 272.573 81.0046 274.667M236.015 274.617C226.584 276.801 229.341 293.034 238.996 291.319C249.603 289.434 246.583 272.169 236.015 274.617M157.108 275.746C148.366 279.349 154.028 294.967 162.981 290.781C172.528 286.318 166.733 271.779 157.108 275.746z"/>
                                </svg>
                                <span>Site Pollinations</span>
                                </a>
                                <a class="gc-info-link" href="https://github.com/pollinations/pollinations" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .5a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.9.84.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 .5Z"></path>
                                    </svg>
                                    <span>GitHub Pollinations</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="gc-history" id="gc-history-panel">
                    <div class="gc-history-header">
                        <span>Recent Conversations</span>
                        <div class="gc-history-actions">
                            <div class="gc-history-search" id="gc-history-search">
                                <button class="gc-search-btn" id="gc-btn-history-search" title="Search for discussions">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke-linecap="round"/></svg>
                                </button>
                                <input type="text" class="gc-search-input" id="gc-input-history-search" placeholder="Search..." spellcheck="false" aria-label="Search conversations">
                            </div>
                            <button class="gc-clear-all" id="gc-btn-clear-all" title="Clear All History">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="gc-history-list" id="gc-history-list"></div>
                </div>

                <div class="gc-messages" id="gc-messages">
                    <div class="typing-indicator" id="typing-indicator">
                        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
                    </div>
                </div>
                <div class="gc-input-area">
                    <input type="text" class="gc-input" placeholder="Type a message..." spellcheck="false">
                    <button class="gc-img-btn" title="Generate Image">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                    </button>
                    <button class="gc-send-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                    <span class="gc-ghost-pill" id="gc-ghost-pill">Mode fantome actif</span>
                </div>

                <div class="gc-modal-overlay" id="gc-modal-overlay">
                    <div class="gc-modal">
                        <div class="gc-modal-text" id="gc-modal-text">Are you sure?</div>
                        <div class="gc-modal-actions">
                            <button class="gc-btn gc-btn-secondary" id="gc-modal-cancel">Cancel</button>
                            <button class="gc-btn gc-btn-danger" id="gc-modal-confirm">Delete</button>
                        </div>
                    </div>
                </div>
            `;

            this.shadow.appendChild(trigger);
            this.shadow.appendChild(panel);

            this.elements = {
                trigger,
                panel,
                closeBtn: panel.querySelector('#gc-btn-close'),
                sidebarBtn: panel.querySelector('#gc-btn-sidebar'),
                historyBtn: panel.querySelector('#gc-btn-history'),
                newChatBtn: panel.querySelector('#gc-btn-new'),
                clearAllBtn: panel.querySelector('#gc-btn-clear-all'),
                modelSelect: panel.querySelector('#gc-model-select'),
                toggleExtraBtn: panel.querySelector('#gc-btn-toggle-extra'),
                headerExtra: panel.querySelector('#gc-header-extra'),
                settingsBtn: panel.querySelector('#gc-btn-settings'),
                ghostBtn: panel.querySelector('#gc-btn-ghost'),
                ghostPill: panel.querySelector('#gc-ghost-pill'),
                statusDot: panel.querySelector('.gc-status-dot'),
                infoBtn: panel.querySelector('#gc-btn-info'),
                settingsPanel: panel.querySelector('#gc-settings-panel'),
                settingsList: panel.querySelector('#gc-settings-list'),
                infoPanel: panel.querySelector('#gc-info-panel'),
                historyPanel: panel.querySelector('#gc-history-panel'),
                historyList: panel.querySelector('#gc-history-list'),
                historySearchWrap: panel.querySelector('#gc-history-search'),
                historySearchInput: panel.querySelector('#gc-input-history-search'),
                historySearchBtn: panel.querySelector('#gc-btn-history-search'),
                msgContainer: panel.querySelector('#gc-messages'),
                input: panel.querySelector('.gc-input'),
                sendBtn: panel.querySelector('.gc-send-btn'),
                imgBtn: panel.querySelector('.gc-img-btn'),
                typingIndicator: panel.querySelector('#typing-indicator'),
                modalOverlay: panel.querySelector('#gc-modal-overlay'),
                modalText: panel.querySelector('#gc-modal-text'),
                modalCancel: panel.querySelector('#gc-modal-cancel'),
                modalConfirm: panel.querySelector('#gc-modal-confirm')
            };

            this.buildSettingsOptions();
        }

        attachEvents() {
            this.elements.trigger.addEventListener('click', () => this.togglePanel(true));
            this.elements.closeBtn.addEventListener('click', () => this.togglePanel(false));

            this.elements.sidebarBtn.addEventListener('click', () => this.toggleSidebar());
            this.elements.historyBtn.addEventListener('click', () => this.toggleHistory());
            this.elements.newChatBtn.addEventListener('click', () => this.startNewChat());
            this.elements.clearAllBtn.addEventListener('click', () => this.clearAllHistory());
            this.elements.historySearchBtn.addEventListener('click', () => this.toggleHistorySearch());
            this.elements.historySearchInput.addEventListener('input', (e) => this.handleHistorySearch(e.target.value));
            this.elements.historySearchInput.addEventListener('keydown', (e) => this.handleHistorySearchKeydown(e));
            this.elements.historySearchInput.addEventListener('blur', () => this.handleHistorySearchBlur());
            this.elements.modelSelect.addEventListener('change', (e) => this.changeReasoningEffort(e.target.value));
            this.elements.toggleExtraBtn.addEventListener('click', () => this.toggleHeaderExtra());
            this.elements.settingsBtn.addEventListener('click', () => this.toggleSettingsPanel());
            this.elements.infoBtn.addEventListener('click', () => this.toggleInfoPanel());
            this.elements.ghostBtn.addEventListener('click', () => this.toggleGhostMode());

            this.elements.sendBtn.addEventListener('click', () => this.handleSend());
            this.elements.imgBtn.addEventListener('click', () => this.toggleImageMode());

            this.elements.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.handleSend();
                }
            });

            // Close logic for floating mode
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.state.isOpen) this.togglePanel(false);
            });
        }

        toggleHeaderExtra() {
            const isOpen = this.elements.headerExtra.classList.toggle('open');
            this.elements.toggleExtraBtn.classList.toggle('open', isOpen);
            if (!isOpen) {
                this.state.isSettingsOpen = false;
                this.elements.settingsPanel.classList.remove('visible');
                this.state.isInfoOpen = false;
                this.elements.infoPanel.classList.remove('visible');
            }
        }

        toggleSettingsPanel() {
            this.state.isSettingsOpen = !this.state.isSettingsOpen;
            this.elements.settingsPanel.classList.toggle('visible', this.state.isSettingsOpen);
            if (this.state.isSettingsOpen) {
                this.state.isHistoryOpen = false;
                this.elements.historyPanel.classList.remove('visible');
                this.state.isInfoOpen = false;
                this.elements.infoPanel.classList.remove('visible');
            }
        }

        toggleGhostMode() {
            this.state.isGhostMode = !this.state.isGhostMode;
            if (this.state.isGhostMode) {
                this.state.isHistoryOpen = false;
                this.elements.historyPanel.classList.remove('visible');
            }
            this.updateGhostUI();
        }

        toggleInfoPanel() {
            this.state.isInfoOpen = !this.state.isInfoOpen;
            this.elements.infoPanel.classList.toggle('visible', this.state.isInfoOpen);
            if (this.state.isInfoOpen) {
                this.state.isHistoryOpen = false;
                this.state.isSettingsOpen = false;
                this.elements.historyPanel.classList.remove('visible');
                this.elements.settingsPanel.classList.remove('visible');
            }
        }

        updateGhostUI() {
            const active = this.state.isGhostMode;
            this.elements.ghostBtn.classList.toggle('ghost-active', active);
            this.elements.panel.classList.toggle('ghost-mode', active);
            if (this.elements.statusDot) {
                this.elements.statusDot.classList.toggle('ghost-active', active);
            }
            this.elements.ghostPill.textContent = active ? 'Ghost Mode is active — nothing is being saved.' : '';
            this.elements.ghostPill.classList.toggle('visible', active);
        }

        buildSettingsOptions() {
            this.elements.settingsList.innerHTML = '';
            this.STYLE_OPTIONS.forEach((option) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'gc-settings-item';
                button.dataset.style = option.id;
                button.innerHTML = `
                    <div class="gc-settings-label">${option.label}</div>
                    <div class="gc-settings-desc">${option.desc}</div>
                `;
                button.addEventListener('click', () => this.setResponseStyle(option.id));
                this.elements.settingsList.appendChild(button);
            });
            this.applyActiveStyle();
        }

        buildInfoContent() {
            const infoPanel = this.elements.infoPanel;
            if (!infoPanel) return;
            // content is static in markup; hook for future dynamic updates if needed
        }

        loadSavedStyle() {
            const savedStyle = GM_getValue('ghostchat_style', 'default');
            if (this.STYLE_OPTIONS.some(option => option.id === savedStyle)) {
                this.state.responseStyle = savedStyle;
            }
            this.applyActiveStyle();
        }

        setResponseStyle(styleId) {
            if (!this.STYLE_OPTIONS.some(option => option.id === styleId)) return;
            this.state.responseStyle = styleId;
            GM_setValue('ghostchat_style', styleId);
            this.applyActiveStyle();
        }

        applyActiveStyle() {
            const items = this.elements.settingsList.querySelectorAll('.gc-settings-item');
            items.forEach((item) => {
                item.classList.toggle('active', item.dataset.style === this.state.responseStyle);
            });
        }

        getStylePrompt() {
            switch (this.state.responseStyle) {
                case 'professional':
                    return 'Use a professional voice: clear, structured, formal, and neutral. Keep paragraphs tidy and well presented.';
                case 'direct':
                    return 'Be direct and concise. Get straight to the point without unnecessary filler.';
                case 'pedagogic':
                    return 'Explain in a teaching style: clear, progressive, and structured. Use steps or examples when helpful.';
                case 'creative':
                    return 'Be creative: original, expressive, and lively. Use imagery and a fluid tone.';
                case 'technical':
                    return 'Be technical: precise, development- or logic-oriented. Include technical details and code when relevant.';
                case 'geek':
                    return 'Be geeky: use well-controlled technical jargon, relevant tech references, and high precision.';
                case 'persuasive':
                    return 'Be persuasive: structure arguments, highlight key points, and aim to convince clearly.';
                default:
                    return 'Use a balanced, clear, and natural style.';
            }
        }


        toggleImageMode() {
            this.state.isImageMode = !this.state.isImageMode;
            this.elements.imgBtn.classList.toggle('active', this.state.isImageMode);

            if (this.state.isImageMode) {
                this.elements.input.placeholder = 'Describe the image you want to generate...';
            } else {
                this.elements.input.placeholder = 'Type a message...';
            }
        }

        changeReasoningEffort(level) {
            if (this.REASONING_LEVELS.includes(level)) {
                this.state.reasoningEffort = level;
                GM_setValue('ghostchat_reasoning', level);
                this.elements.modelSelect.value = level;
            }
        }

        async handleImageGen() {
            const prompt = this.elements.input.value.trim();
            if (!prompt || this.state.isTyping) return;

            const requestChatId = this.currentChatId;
            this.elements.input.value = '';
            this.appendMessage('user', prompt);
            this.setLoading(true, requestChatId);

            try {
                // Pollinations image format
                const encoded = encodeURIComponent(prompt);
                const imageUrl = `https://image.pollinations.ai/prompt/${encoded}?nologo=true`;

                // Simulate loading delay for better UX
                await new Promise(r => setTimeout(r, 1000));

                const imageHtml = `<img src="${imageUrl}" alt="${prompt}" style="max-width: 100%; border-radius: 8px; margin-top: 4px;">`;

                this.appendMessageToChat(requestChatId, 'assistant', imageHtml, true);

                // Reset image mode after generation
                if (this.state.isImageMode) {
                    this.toggleImageMode();
                }

            } catch (error) {
                this.appendMessageToChat(requestChatId, 'assistant', '⚠️ Error generating image.');
                console.error('GhostChat Image Error:', error);
            } finally {
                this.setLoading(false, requestChatId);
            }
        }

        togglePanel(show) {
            this.state.isOpen = show;
            this.elements.panel.classList.toggle('open', show);
            if (show) setTimeout(() => this.elements.input.focus(), 300);
        }

        toggleSidebar() {
            this.state.isSidebar = !this.state.isSidebar;
            this.elements.panel.classList.toggle('sidebar', this.state.isSidebar);
            // If checking sidebar while closed, open it
            if (this.state.isSidebar && !this.state.isOpen) this.togglePanel(true);
        }

        toggleHistory() {
            this.state.isHistoryOpen = !this.state.isHistoryOpen;
            this.elements.historyPanel.classList.toggle('visible', this.state.isHistoryOpen);
            if (this.state.isHistoryOpen) {
                this.state.isSettingsOpen = false;
                this.elements.settingsPanel.classList.remove('visible');
                this.state.isInfoOpen = false;
                this.elements.infoPanel.classList.remove('visible');
            }
            if (this.state.isHistoryOpen) this.renderHistoryList();
        }

        toggleHistorySearch() {
            if (!this.elements.historySearchWrap || !this.elements.historySearchInput) return;
            const isActive = this.elements.historySearchWrap.classList.contains('active');
            if (isActive && !this.state.historySearchTerm) {
                this.resetHistorySearch();
                return;
            }
            this.elements.historySearchWrap.classList.add('active');
            this.elements.historySearchInput.focus();
            this.elements.historySearchInput.select();
        }

        handleHistorySearch(value) {
            this.state.historySearchTerm = (value || '').trim();
            if (this.state.historySearchTerm) {
                this.elements.historySearchWrap.classList.add('active');
            }
            this.renderHistoryList();
        }

        handleHistorySearchKeydown(e) {
            if (e.key === 'Escape') {
                e.stopPropagation();
                if (this.state.historySearchTerm) {
                    this.resetHistorySearch();
                } else if (this.elements.historySearchWrap) {
                    this.elements.historySearchWrap.classList.remove('active');
                }
            }
        }

        handleHistorySearchBlur() {
            if (!this.state.historySearchTerm && this.elements.historySearchWrap) {
                this.elements.historySearchWrap.classList.remove('active');
            }
        }

        resetHistorySearch() {
            this.state.historySearchTerm = '';
            if (this.elements.historySearchInput) {
                this.elements.historySearchInput.value = '';
                this.elements.historySearchInput.blur();
            }
            if (this.elements.historySearchWrap) this.elements.historySearchWrap.classList.remove('active');
            this.renderHistoryList();
        }

        startNewChat() {
            this.currentChatId = Date.now();
            this.messages = [];
            this.setActiveChatId(this.currentChatId);
            this.state.manualTitle = null;

            // Clear UI
            this.elements.msgContainer.innerHTML = '';
            this.elements.msgContainer.appendChild(this.elements.typingIndicator);
            this.appendMessage('assistant', this.DEFAULT_GREETING);

            this.state.isHistoryOpen = false;
            this.elements.historyPanel.classList.remove('visible');
            this.state.isSettingsOpen = false;
            this.elements.settingsPanel.classList.remove('visible');
            this.state.isInfoOpen = false;
            this.elements.infoPanel.classList.remove('visible');
            this.state.isTyping = false;
            this.state.loadingChatId = null;
            this.elements.sendBtn.disabled = false;
            this.elements.input.disabled = false;
            this.updateTypingIndicatorVisibility();
            this.elements.input.focus();
        }

        setActiveChatId(chatId) {
            if (this.state.isGhostMode) return;
            GM_setValue('ghostchat_active_chat_id', chatId);
        }

        loadHistory() {
            const saved = GM_getValue('ghostchat_history', '');
            if (saved) {
                try {
                    this.history = JSON.parse(saved);
                } catch (e) { console.error('GhostChat: Corrupt history', e); }
            }
        }

        restoreActiveChat() {
            const activeId = GM_getValue('ghostchat_active_chat_id', '');
            let chat = null;

            if (activeId) {
                chat = this.history.find(h => h.id === activeId);
            }
            if (!chat && this.history.length) {
                chat = this.history[0];
            }

            if (chat) {
                this.currentChatId = chat.id;
                this.messages = chat.messages;
                this.setActiveChatId(chat.id);
                this.state.manualTitle = chat.manualTitle || null;
            }

            this.renderMessages();
        }

        saveHistory() {
            if (this.state.isGhostMode) return;
            // Don't save if no user messages yet
            if (!this.messages.some(m => m.role === 'user')) return;

            const existing = this.history.find(h => h.id === this.currentChatId);
            const manualTitle = this.state.manualTitle || existing?.manualTitle || null;
            const autoTitle = this.messages.find(m => m.role === 'user')?.content.substring(0, 30) + '...' || 'New Conversation';
            const chatData = {
                id: this.currentChatId,
                timestamp: Date.now(),
                title: manualTitle || autoTitle,
                manualTitle: manualTitle,
                messages: this.messages
            };

            // Remove existing instance of this chat ID (to handle reordering)
            this.history = this.history.filter(h => h.id !== this.currentChatId);
            this.history.unshift(chatData);


            GM_setValue('ghostchat_history', JSON.stringify(this.history));
            this.setActiveChatId(this.currentChatId);
        }

        showConfirm(message, onConfirm) {
            this.elements.modalText.textContent = message;
            this.elements.modalOverlay.classList.add('visible');

            const close = () => {
                this.elements.modalOverlay.classList.remove('visible');
                cleanup();
            };

            const handleConfirm = () => {
                onConfirm();
                close();
            };

            const handleCancel = () => close();

            this.elements.modalConfirm.onclick = handleConfirm;
            this.elements.modalCancel.onclick = handleCancel;

            const cleanup = () => {
                this.elements.modalConfirm.onclick = null;
                this.elements.modalCancel.onclick = null;
            };
        }

        clearAllHistory() {
            this.showConfirm('Are you sure you want to delete ALL history? This cannot be undone.', () => {
                this.history = [];
                GM_setValue('ghostchat_history', '');
                this.setActiveChatId('');
                this.resetHistorySearch();
                this.startNewChat();
            });
        }

        deleteChat(chatId, e) {
            if (e) e.stopPropagation();
            this.showConfirm('Delete this conversation?', () => {
                this.history = this.history.filter(h => h.id !== chatId);
                GM_setValue('ghostchat_history', JSON.stringify(this.history));

                // If deleting active chat, clear it
                if (chatId === this.currentChatId) this.startNewChat();
                else this.renderHistoryList();
            });
        }

        startInlineRename(chatId, item, e) {
            if (e) e.stopPropagation();
            const chat = this.history.find(h => h.id === chatId);
            if (!chat) return;
            const titleEl = item.querySelector('.gc-h-title');
            if (!titleEl) return;

            const maxLength = 90;
            const original = chat.manualTitle || chat.title || 'Conversation';
            titleEl.contentEditable = 'true';
            titleEl.spellcheck = false;
            titleEl.classList.add('gc-h-editing');
            titleEl.focus();

            const range = document.createRange();
            range.selectNodeContents(titleEl);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);

            const blockOpen = (evt) => evt.stopPropagation();
            titleEl.addEventListener('mousedown', blockOpen);
            titleEl.addEventListener('mouseup', blockOpen);
            titleEl.addEventListener('click', blockOpen);

            const persist = (text) => {
                const cleaned = text.trim();
                if (!cleaned) return;
                chat.manualTitle = cleaned;
                chat.title = cleaned;
                if (chatId === this.currentChatId) {
                    this.state.manualTitle = cleaned;
                }
                GM_setValue('ghostchat_history', JSON.stringify(this.history));
            };

            const enforceMax = () => {
                const current = titleEl.textContent || '';
                if (current.length > maxLength) {
                    titleEl.textContent = current.slice(0, maxLength);
                    const selection = window.getSelection();
                    const newRange = document.createRange();
                    newRange.selectNodeContents(titleEl);
                    newRange.collapse(false);
                    selection.removeAllRanges();
                    selection.addRange(newRange);
                    return titleEl.textContent;
                }
                return current;
            };

            const handleInput = () => {
                const text = enforceMax();
                persist(text);
            };

            const finish = (commit = true) => {
                titleEl.removeEventListener('input', handleInput);
                titleEl.removeEventListener('keydown', handleKey);
                titleEl.removeEventListener('blur', handleBlur);
                titleEl.removeEventListener('mousedown', blockOpen);
                titleEl.removeEventListener('mouseup', blockOpen);
                titleEl.removeEventListener('click', blockOpen);
                titleEl.classList.remove('gc-h-editing');
                titleEl.contentEditable = 'false';
                if (!commit) {
                    titleEl.textContent = original;
                } else {
                    const text = enforceMax();
                    persist(text || original);
                }
            };

            const handleBlur = () => finish(true);
            const handleKey = (evt) => {
                if (evt.key === 'Enter') {
                    evt.preventDefault();
                    finish(true);
                } else if (evt.key === 'Escape') {
                    evt.preventDefault();
                    finish(false);
                }
            };

            titleEl.addEventListener('input', handleInput);
            titleEl.addEventListener('keydown', handleKey);
            titleEl.addEventListener('blur', handleBlur);
        }

        loadChat(chatId) {
            const chat = this.history.find(h => h.id === chatId);
            if (!chat) return;

            this.currentChatId = chat.id;
            this.messages = chat.messages;
            this.setActiveChatId(chat.id);
            this.state.manualTitle = chat.manualTitle || null;

            this.renderMessages();
            this.toggleHistory(); // Close history
        }

        isDefaultGreeting(msg, index = 0) {
            return index === 0 && msg?.role === 'assistant' && msg?.content === this.DEFAULT_GREETING;
        }

        renderHistoryList() {
            this.elements.historyList.innerHTML = '';
            const query = (this.state.historySearchTerm || '').trim().toLowerCase();

            if (this.elements.historySearchInput) {
                this.elements.historySearchInput.value = this.state.historySearchTerm || '';
                const isFocused = (this.shadow && this.shadow.activeElement === this.elements.historySearchInput) ||
                    document.activeElement === this.elements.historySearchInput ||
                    this.elements.historySearchInput.matches(':focus');
                const keepOpen = !!this.state.historySearchTerm || isFocused;
                this.elements.historySearchWrap.classList.toggle('active', keepOpen);
            }

            const items = query
                ? this.history.filter(chat => {
                    const title = (chat.manualTitle || chat.title || '').toLowerCase();
                    return title.includes(query);
                })
                : this.history;

            if (!items.length) {
                const empty = document.createElement('div');
                empty.className = 'gc-history-empty';
                empty.textContent = query ? 'Aucune discussion trouvée.' : 'No conversations yet.';
                this.elements.historyList.appendChild(empty);
                return;
            }

            items.forEach(chat => {
                const item = document.createElement('div');
                item.className = 'gc-history-item';
                if (chat.id === this.currentChatId) item.classList.add('active');

                const date = new Date(chat.timestamp).toLocaleDateString();
                item.innerHTML = `
                    <div class="gc-h-title">${chat.title}</div>
                    <div class="gc-h-date">${date}</div>
                    <div class="gc-h-rename" title="Rename">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
                    </div>
                    <div class="gc-h-delete" title="Delete">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                `;
                item.onclick = () => this.loadChat(chat.id);
                item.querySelector('.gc-h-rename').onclick = (e) => this.startInlineRename(chat.id, item, e);
                item.querySelector('.gc-h-delete').onclick = (e) => this.deleteChat(chat.id, e);
                this.elements.historyList.appendChild(item);
            });
        }

        renderMessage(msg) {
            // Check if message content looks like an image tag
            if (msg.content.startsWith('<img')) {
                return `<div class="gc-message ${msg.role}">${msg.content}</div>`;
            }
            if (msg.role === 'assistant') {
                const rendered = this.renderToolMarkup(msg.content);
                if (rendered.hasTool) {
                    return `<div class="gc-message ${msg.role}">${rendered.html}</div>`;
                }
            }
            // For text, sanitize/escape
            const div = document.createElement('div');
            div.textContent = msg.content;
            return `<div class="gc-message ${msg.role}">${div.innerHTML}</div>`;
        }

        escapeHtml(value) {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        escapeAttr(value) {
            return this.escapeHtml(value);
        }

        parseToolAttributes(raw) {
            const attrs = {};
            const regex = /(\w+)\s*=\s*"([^"]*)"/g;
            let match;
            while ((match = regex.exec(raw || '')) !== null) {
                attrs[match[1].toLowerCase()] = match[2];
            }
            return attrs;
        }

        sanitizeUrl(url) {
            if (!url) return '';
            try {
                const parsed = new URL(url, window.location.href);
                if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
                    return parsed.toString();
                }
            } catch (e) {
                return '';
            }
            return '';
        }

        extractFirstUrl(value) {
            const match = String(value || '').match(/https?:\/\/[^\s<>"')\]]+/i);
            return match ? match[0] : '';
        }

        normalizeWikipediaTitle(value) {
            if (!value) return '';
            let text = String(value);
            try {
                text = decodeURIComponent(text);
            } catch (e) {
                // Keep original if decoding fails.
            }
            return text
                .replace(/_/g, ' ')
                .replace(/\+/g, ' ')
                .trim();
        }

        extractWikipediaQueryFromUrl(rawUrl) {
            if (!rawUrl || !/^https?:\/\//i.test(rawUrl)) return '';
            let parsed;
            try {
                parsed = new URL(rawUrl);
            } catch (e) {
                return '';
            }
            if (!/wikipedia\.org$/i.test(parsed.hostname) && !/\.wikipedia\.org$/i.test(parsed.hostname)) {
                return '';
            }
            const path = parsed.pathname || '';
            if (path.startsWith('/wiki/')) {
                const title = path.replace(/^\/wiki\//, '');
                return this.normalizeWikipediaTitle(title);
            }
            if (path.endsWith('/w/api.php') || path.endsWith('/w/index.php')) {
                const params = parsed.searchParams;
                const value = params.get('gsrsearch') || params.get('titles') || params.get('title') || params.get('page') || '';
                return this.normalizeWikipediaTitle(value);
            }
            return '';
        }

        normalizeImageQuery(rawQuery) {
            const query = String(rawQuery || '').trim();
            if (!query) return '';
            const embeddedUrl = this.extractFirstUrl(query);
            if (embeddedUrl) {
                const extracted = this.extractWikipediaQueryFromUrl(embeddedUrl);
                if (extracted) return extracted;
            }
            return query;
        }

        shortenText(value, maxLen = 200) {
            const text = String(value || '').trim();
            if (!text) return '';
            if (text.length <= maxLen) return text;
            const slice = text.slice(0, maxLen + 1);
            const lastSpace = slice.lastIndexOf(' ');
            if (lastSpace > 60) {
                return `${slice.slice(0, lastSpace).trim()}...`;
            }
            return `${text.slice(0, maxLen).trim()}...`;
        }

        getWikipediaDescription(data) {
            const raw = (data?.description || data?.extract || '').trim();
            return this.shortenText(raw, 200);
        }

        async fetchWikipediaApiJson(url) {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Wikipedia error: ${response.status}`);
            return await response.json();
        }

        async fetchWikipediaSummaryRaw(title) {
            const encoded = encodeURIComponent(title);
            const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encoded}`;
            try {
                return await this.fetchWikipediaApiJson(url);
            } catch (e) {
                return null;
            }
        }

        async fetchWikipediaSummaryData(title) {
            const data = await this.fetchWikipediaSummaryRaw(title);
            if (!data) return null;
            const rawUrl = data?.thumbnail?.source || data?.originalimage?.source || '';
            const url = this.sanitizeUrl(rawUrl);
            if (!url) return null;
            return {
                url,
                description: this.getWikipediaDescription(data),
                title: data?.title || title
            };
        }

        async fetchWikipediaSearchTitle(query) {
            const encoded = encodeURIComponent(query);
            const url =
                "https://fr.wikipedia.org/w/api.php" +
                "?action=query" +
                "&list=search" +
                `&srsearch=${encoded}` +
                "&srlimit=1" +
                "&format=json" +
                "&origin=*";
            try {
                const data = await this.fetchWikipediaApiJson(url);
                return data?.query?.search?.[0]?.title || '';
            } catch (e) {
                return '';
            }
        }

        async fetchWikipediaDescription(title) {
            const data = await this.fetchWikipediaSummaryRaw(title);
            if (!data) return '';
            return this.getWikipediaDescription(data);
        }

        escapeToolAttrValue(value) {
            return String(value || '')
                .replace(/["[\]]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }

        shouldAutoShowImage(userText, reasoningLevel, assistantText) {
            if (reasoningLevel !== 'ultra') return false;
            if (!userText) return false;
            if (/\[tool:(show_image|generate_image)\b/i.test(assistantText || '')) return false;

            const normalized = String(userText).toLowerCase();
            if (normalized.length > 140) return false;
            if (/(sans\s+image|no\s+image|pas\s+d['’]?image|without\s+image)/i.test(normalized)) return false;
            if (/(comment\s|how\s+to|pourquoi|expliquer|explain|guide|tutoriel|tutorial)/i.test(normalized)) return false;

            if (/(à?\s*quoi\s+ressemble|a\s*quoi\s+ressemble|looks?\s+like|what\s+does.+look\s+like|montre(?:-moi)?|show\s+me|image|photo|picture|voir|visuel|visual)/i.test(normalized)) {
                return true;
            }
            if (/(c'?est\s+quoi|qu['’]?est-ce\s+que|what\s+is|what['’]s)/i.test(normalized)) {
                return true;
            }
            return false;
        }

        extractImageQuery(userText) {
            let query = String(userText || '').trim();
            const patterns = [
                /^\s*à?\s*quoi\s+ressemble\s+/i,
                /^\s*a\s*quoi\s+ressemble\s+/i,
                /^\s*what\s+does\s+/i,
                /^\s*what\s+is\s+/i,
                /^\s*what['’]s\s+/i,
                /^\s*c'?est\s+quoi\s+/i,
                /^\s*qu['’]?est-ce\s+que\s+/i,
                /^\s*montre(?:-moi)?\s+/i,
                /^\s*show\s+me\s+/i,
                /^\s*image\s+de\s+/i,
                /^\s*photo\s+de\s+/i,
                /^\s*image\s+d['’]\s*/i,
                /^\s*photo\s+d['’]\s*/i
            ];
            patterns.forEach((pattern) => {
                query = query.replace(pattern, '');
            });

            query = query.replace(/[?!.]+$/, '').trim();
            query = query.replace(/^(un|une|des|le|la|les|the|a|an)\s+/i, '');
            query = query.replace(/^d['’]\s+/i, '');
            return query || String(userText || '').trim();
        }

        maybeInjectUltraImage(userText, reasoningLevel, assistantText) {
            if (!this.shouldAutoShowImage(userText, reasoningLevel, assistantText)) {
                return assistantText;
            }
            const query = this.extractImageQuery(userText);
            if (!query) return assistantText;

            const safeQuery = this.escapeToolAttrValue(query);
            const safeAlt = this.escapeToolAttrValue(query);
            const toolTag = `[tool:show_image query="${safeQuery}" alt="${safeAlt}"]`;
            if (!assistantText || !assistantText.trim()) {
                return toolTag;
            }
            return `${assistantText}\n\n${toolTag}`;
        }

        preloadImage(url, timeoutMs = 8000) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                const timer = setTimeout(() => {
                    img.src = '';
                    reject(new Error('Image load timeout'));
                }, timeoutMs);
                img.onload = () => {
                    clearTimeout(timer);
                    resolve(url);
                };
                img.onerror = () => {
                    clearTimeout(timer);
                    reject(new Error('Image failed to load'));
                };
                img.src = url;
            });
        }

        extractWikipediaImageData(data) {
            const pages = data?.query?.pages;
            if (!pages) return null;
            const pageList = Array.isArray(pages) ? pages : Object.values(pages);
            for (const page of pageList) {
                if (!page || page.missing) continue;
                const rawUrl = page?.thumbnail?.source || page?.original?.source || '';
                const url = this.sanitizeUrl(rawUrl);
                if (url) {
                    return {
                        url,
                        title: page?.title || ''
                    };
                }
            }
            return null;
        }

        async fetchWikipediaPageImageDataByTitle(title) {
            const encoded = encodeURIComponent(title);
            const url =
                "https://fr.wikipedia.org/w/api.php" +
                "?action=query" +
                `&titles=${encoded}` +
                "&prop=pageimages" +
                "&piprop=thumbnail|original" +
                "&pithumbsize=800" +
                "&format=json" +
                "&origin=*" +
                "&redirects=1";
            try {
                const data = await this.fetchWikipediaApiJson(url);
                const imageData = this.extractWikipediaImageData(data);
                if (!imageData) return null;
                const description = await this.fetchWikipediaDescription(imageData.title || title);
                return {
                    url: imageData.url,
                    description,
                    title: imageData.title || title
                };
            } catch (e) {
                return null;
            }
        }

        async fetchWikipediaPageImageDataBySearch(query) {
            const encoded = encodeURIComponent(query);
            const url =
                "https://fr.wikipedia.org/w/api.php" +
                "?action=query" +
                "&generator=search" +
                `&gsrsearch=${encoded}` +
                "&gsrlimit=1" +
                "&prop=pageimages" +
                "&piprop=thumbnail|original" +
                "&pithumbsize=800" +
                "&format=json" +
                "&origin=*";
            try {
                const data = await this.fetchWikipediaApiJson(url);
                const imageData = this.extractWikipediaImageData(data);
                if (!imageData) return null;
                const description = await this.fetchWikipediaDescription(imageData.title || query);
                return {
                    url: imageData.url,
                    description,
                    title: imageData.title || query
                };
            } catch (e) {
                return null;
            }
        }

        async fetchWikimediaImage(query) {
            const normalizedQuery = this.normalizeImageQuery(query);
            if (!normalizedQuery) throw new Error('Wikipedia: empty query');

            let data = await this.fetchWikipediaSummaryData(normalizedQuery);
            let searchTitle = '';
            if (!data) {
                searchTitle = await this.fetchWikipediaSearchTitle(normalizedQuery);
                if (searchTitle && searchTitle !== normalizedQuery) {
                    data = await this.fetchWikipediaSummaryData(searchTitle);
                }
            }
            if (data?.url) {
                await this.preloadImage(data.url);
                return data;
            }

            data = await this.fetchWikipediaPageImageDataByTitle(normalizedQuery);
            if (data?.url) {
                await this.preloadImage(data.url);
                return data;
            }

            if (searchTitle && searchTitle !== normalizedQuery) {
                data = await this.fetchWikipediaPageImageDataByTitle(searchTitle);
                if (data?.url) {
                    await this.preloadImage(data.url);
                    return data;
                }
            }

            data = await this.fetchWikipediaPageImageDataBySearch(normalizedQuery);
            if (data?.url) {
                await this.preloadImage(data.url);
                return data;
            }

            throw new Error('Wikipedia: no image');
        }

        async searchWebImage(query) {
            return await this.fetchWikimediaImage(query);
        }

        updateToolImageCaption(container, text) {
            const caption = container.querySelector('.gc-tool-caption');
            if (!caption) return;
            const value = String(text || '').trim();
            if (value) {
                caption.textContent = value;
                caption.style.display = 'block';
            } else {
                caption.textContent = '';
                caption.style.display = 'none';
            }
        }

        initToolImages(container) {
            const nodes = container.querySelectorAll('[data-gc-image-query]');
            nodes.forEach((node) => {
                if (node.dataset.gcImageLoaded === '1') return;
                node.dataset.gcImageLoaded = '1';
                const query = node.dataset.gcImageQuery || '';
                const img = node.querySelector('img');
                if (!query || !img) return;
                const alt = node.dataset.gcImageAlt || query;
                if (!img.alt) img.alt = alt;
                this.searchWebImage(query)
                    .then((result) => {
                        const imageUrl = typeof result === 'string' ? result : result?.url;
                        const caption = typeof result === 'string'
                            ? alt
                            : (result?.description || result?.title || alt);
                        if (imageUrl) img.src = imageUrl;
                        this.updateToolImageCaption(node, caption);
                    })
                    .catch(() => {
                        img.alt = alt;
                        this.updateToolImageCaption(node, alt);
                    });
            });
        }

        renderTextWithBareUrls(text) {
            const urlRegex = /(https?:\/\/[^\s<]+)/g;
            let html = '';
            let hasLinks = false;
            let lastIndex = 0;
            let match;

            while ((match = urlRegex.exec(text)) !== null) {
                html += this.escapeHtml(text.slice(lastIndex, match.index));

                let url = match[1];
                let trailing = '';
                while (/[).,;:!?\]]$/.test(url)) {
                    trailing = url.slice(-1) + trailing;
                    url = url.slice(0, -1);
                }

                const safeUrl = this.sanitizeUrl(url);
                if (safeUrl) {
                    const safeText = this.escapeHtml(url);
                    const safeHref = this.escapeAttr(safeUrl);
                    html += `<a class="gc-inline-link" href="${safeHref}" target="_blank" rel="noopener noreferrer">${safeText}</a>`;
                    hasLinks = true;
                } else {
                    html += this.escapeHtml(match[1]);
                }

                html += this.escapeHtml(trailing);
                lastIndex = match.index + match[1].length;
            }

            html += this.escapeHtml(text.slice(lastIndex));
            return { html, hasLinks };
        }

        renderTextWithLinks(text) {
            const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
            let html = '';
            let hasLinks = false;
            let lastIndex = 0;
            let match;

            while ((match = markdownLinkRegex.exec(text)) !== null) {
                const before = text.slice(lastIndex, match.index);
                const beforeRendered = this.renderTextWithBareUrls(before);
                html += beforeRendered.html;
                hasLinks = hasLinks || beforeRendered.hasLinks;

                const safeUrl = this.sanitizeUrl(match[2]);
                if (safeUrl) {
                    const safeText = this.escapeHtml(match[1]);
                    const safeHref = this.escapeAttr(safeUrl);
                    html += `<a class="gc-inline-link" href="${safeHref}" target="_blank" rel="noopener noreferrer">${safeText}</a>`;
                    hasLinks = true;
                } else {
                    html += this.escapeHtml(match[0]);
                }

                lastIndex = markdownLinkRegex.lastIndex;
            }

            const tail = text.slice(lastIndex);
            const tailRendered = this.renderTextWithBareUrls(tail);
            html += tailRendered.html;
            hasLinks = hasLinks || tailRendered.hasLinks;

            return { html, hasLinks };
        }

        renderTextWithInlineCode(text) {
            const inlineCodeRegex = /`([^`]+)`/g;
            let html = '';
            let hasMarkup = false;
            let lastIndex = 0;
            let match;

            while ((match = inlineCodeRegex.exec(text)) !== null) {
                const before = text.slice(lastIndex, match.index);
                const beforeRendered = this.renderTextWithLinks(before);
                html += beforeRendered.html;
                hasMarkup = hasMarkup || beforeRendered.hasLinks;

                const code = this.escapeHtml(match[1]);
                html += `<code class="gc-inline-code">${code}</code>`;
                hasMarkup = true;

                lastIndex = inlineCodeRegex.lastIndex;
            }

            const tail = text.slice(lastIndex);
            const tailRendered = this.renderTextWithLinks(tail);
            html += tailRendered.html;
            hasMarkup = hasMarkup || tailRendered.hasLinks;

            return { html, hasMarkup };
        }

        renderTextWithFormatting(text) {
            const codeBlockRegex = /```([\w-]+)?\n([\s\S]*?)```/g;
            let html = '';
            let hasMarkup = false;
            let lastIndex = 0;
            let match;

            while ((match = codeBlockRegex.exec(text)) !== null) {
                const before = text.slice(lastIndex, match.index);
                const beforeRendered = this.renderTextWithInlineCode(before);
                html += beforeRendered.html;
                hasMarkup = hasMarkup || beforeRendered.hasMarkup;

                const lang = (match[1] || '').trim();
                const langLabel = lang ? this.escapeHtml(lang) : 'Plain';
                const langClass = lang ? lang.toLowerCase().replace(/[^a-z0-9_-]/g, '') : '';
                const code = this.escapeHtml(match[2].replace(/\s+$/, ''));
                const codeClass = langClass ? ` class="language-${langClass}"` : '';
                html += `<div class="gc-code-block"><div class="gc-code-header"><span>Code</span><span>${langLabel}</span></div><pre><code${codeClass}>${code}</code></pre></div>`;
                hasMarkup = true;

                lastIndex = codeBlockRegex.lastIndex;
            }

            const tail = text.slice(lastIndex);
            const tailRendered = this.renderTextWithInlineCode(tail);
            html += tailRendered.html;
            hasMarkup = hasMarkup || tailRendered.hasMarkup;

            return { html, hasMarkup };
        }

        renderImageTool(url, alt, label, caption) {
            const safeUrl = this.escapeAttr(url);
            const safeAlt = this.escapeAttr(alt || '');
            const safeLabel = this.escapeHtml(label || 'Image');
            const safeCaption = caption ? this.escapeHtml(caption) : '';
            const captionHtml = safeCaption ? `<div class="gc-tool-caption">${safeCaption}</div>` : '';
            return `<div class="gc-tool gc-tool-image"><div class="gc-tool-label">${safeLabel}</div><img src="${safeUrl}" alt="${safeAlt}" loading="lazy">${captionHtml}</div>`;
        }

        renderImageToolWithQuery(query, alt, label, caption) {
            const safeQuery = this.escapeAttr(query);
            const safeAlt = this.escapeAttr(alt || query || '');
            const safeLabel = this.escapeHtml(label || 'Image');
            const safeCaption = caption ? this.escapeHtml(caption) : '';
            const captionStyle = safeCaption ? '' : ' style="display:none"';
            const captionHtml = `<div class="gc-tool-caption" data-gc-image-caption${captionStyle}>${safeCaption}</div>`;
            return `<div class="gc-tool gc-tool-image" data-gc-image-query="${safeQuery}" data-gc-image-alt="${safeAlt}"><div class="gc-tool-label">${safeLabel}</div><img alt="${safeAlt}" loading="lazy">${captionHtml}</div>`;
        }

        renderToolCall(toolName, attrs) {
            if (toolName === 'generate_image') {
                const prompt = attrs.prompt || attrs.text || '';
                if (!prompt) return '';
                const encoded = encodeURIComponent(prompt);
                const imageUrl = `https://image.pollinations.ai/prompt/${encoded}?nologo=true`;
                return this.renderImageTool(imageUrl, prompt, 'Generated Image', prompt);
            }
            if (toolName === 'show_image') {
                const rawQuery = attrs.query || attrs.search || attrs.text || '';
                const query = this.normalizeImageQuery(rawQuery);
                if (query) {
                    const alt = attrs.alt || query;
                    return this.renderImageToolWithQuery(query, alt, 'Web Image', '');
                }
                const rawUrl = attrs.url || '';
                const queryFromUrl = this.extractWikipediaQueryFromUrl(rawUrl);
                if (queryFromUrl) {
                    const alt = attrs.alt || queryFromUrl;
                    return this.renderImageToolWithQuery(queryFromUrl, alt, 'Web Image', '');
                }
                const url = this.sanitizeUrl(rawUrl);
                if (!url) return '';
                const alt = attrs.alt || 'Web image';
                return this.renderImageTool(url, alt, 'Web Image', alt);
            }
            if (toolName === 'link') {
                const url = this.sanitizeUrl(attrs.url || '');
                if (!url) return '';
                const text = attrs.text || url;
                const safeText = this.escapeHtml(text);
                const safeUrl = this.escapeAttr(url);
                return `<div class="gc-tool gc-tool-link"><a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeText}</a></div>`;
            }
            return '';
        }

        renderToolMarkup(content) {
            const regex = /\[tool:code([^\]]*)\]([\s\S]*?)\[\/tool:code\]|\[tool:(\w+)([^\]]*)\]/gi;
            let html = '';
            let hasTool = false;
            let lastIndex = 0;
            let match;

            while ((match = regex.exec(content)) !== null) {
                if (match.index > lastIndex) {
                    const chunk = content.slice(lastIndex, match.index);
                    const renderedChunk = this.renderTextWithFormatting(chunk);
                    html += renderedChunk.html;
                    hasTool = hasTool || renderedChunk.hasMarkup;
                }

                if (match[1] !== undefined) {
                    const attrs = this.parseToolAttributes(match[1]);
                    const lang = attrs.lang || attrs.language || '';
                    const langLabel = lang ? this.escapeHtml(lang) : 'Plain';
                    const langClass = lang ? lang.toLowerCase().replace(/[^a-z0-9_-]/g, '') : '';
                    const code = this.escapeHtml(match[2].replace(/\s+$/, ''));
                    const codeClass = langClass ? ` class="language-${langClass}"` : '';
                    html += `<div class="gc-tool gc-tool-code"><div class="gc-code-header"><span>Code</span><span>${langLabel}</span></div><pre><code${codeClass}>${code}</code></pre></div>`;
                    hasTool = true;
                } else {
                    const toolName = (match[3] || '').toLowerCase();
                    const attrs = this.parseToolAttributes(match[4] || '');
                    const toolHtml = this.renderToolCall(toolName, attrs);
                    if (toolHtml) {
                        html += toolHtml;
                        hasTool = true;
                    } else {
                        html += this.escapeHtml(match[0]);
                    }
                }

                lastIndex = regex.lastIndex;
            }

            if (lastIndex < content.length) {
                const tailChunk = content.slice(lastIndex);
                const renderedTail = this.renderTextWithFormatting(tailChunk);
                html += renderedTail.html;
                hasTool = hasTool || renderedTail.hasMarkup;
            }

            return { html, hasTool };
        }

        applyAssistantContent(contentDiv, content, forceHtml = false) {
            if (forceHtml || content.startsWith('<img')) {
                contentDiv.innerHTML = content;
                return;
            }
            const rendered = this.renderToolMarkup(content);
            if (rendered.hasTool) {
                contentDiv.innerHTML = rendered.html;
                this.initToolImages(contentDiv);
                return;
            }
            contentDiv.textContent = content;
        }

        updateMessageContent(messageIndex) {
            // Find the message element by index
            const messageElements = this.elements.msgContainer.querySelectorAll('.gc-message');
            const messageElement = messageElements[messageIndex];
            if (!messageElement) return;

            const msg = this.messages[messageIndex];
            if (!msg || msg.role !== 'assistant') return;

            let contentDiv = messageElement.querySelector('.gc-message-content');
            if (!contentDiv) {
                // If no content wrapper exists, create one
                contentDiv = document.createElement('div');
                contentDiv.className = 'gc-message-content';

                // Insert after tabs if they exist, otherwise at the beginning
                const tabsContainer = messageElement.querySelector('.gc-version-tabs');
                if (tabsContainer) {
                    tabsContainer.after(contentDiv);
                } else {
                    messageElement.insertBefore(contentDiv, messageElement.firstChild);
                }
            }

            contentDiv.innerHTML = '';
            if (msg.isLoading) {
                const loadingDiv = document.createElement('div');
                loadingDiv.className = 'gc-inline-loading';
                loadingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
                contentDiv.appendChild(loadingDiv);
            } else {
                this.applyAssistantContent(contentDiv, msg.content);
            }

            if (msg.versions && msg.versions.length > 1) {
                const tabs = messageElement.querySelectorAll('.gc-version-tab');
                tabs.forEach((tab, index) => {
                    if (index === (msg.currentVersion || 0)) {
                        tab.classList.add('active');
                    } else {
                        tab.classList.remove('active');
                    }
                });
            }
        }

        renderMessages(preserveScroll = false) {
            // Save scroll position if needed
            const scrollPos = preserveScroll ? this.elements.msgContainer.scrollTop : null;

            this.elements.msgContainer.innerHTML = '';
            this.elements.msgContainer.appendChild(this.elements.typingIndicator);

            this.messages.forEach((msg, messageIndex) => {
                const isGreeting = this.isDefaultGreeting(msg, messageIndex);
                const div = document.createElement('div');
                div.className = `gc-message ${msg.role}`;

                // Add version tabs for assistant messages with multiple versions
                if (msg.role === 'assistant' && msg.versions && msg.versions.length > 1) {
                    const tabsContainer = document.createElement('div');
                    tabsContainer.className = 'gc-version-tabs';

                    msg.versions.forEach((version, versionIndex) => {
                        const tab = document.createElement('button');
                        tab.className = 'gc-version-tab';
                        if (versionIndex === (msg.currentVersion || 0)) {
                            tab.classList.add('active');
                        }
                        tab.textContent = versionIndex + 1;
                        tab.onclick = (e) => {
                            e.stopPropagation();
                            this.switchVersion(messageIndex, versionIndex);
                        };
                        tabsContainer.appendChild(tab);
                    });

                    div.appendChild(tabsContainer);
                }

                const contentDiv = document.createElement('div');
                contentDiv.className = 'gc-message-content';

                // Show inline loading if message is being regenerated
                if (msg.isLoading) {
                    const loadingDiv = document.createElement('div');
                    loadingDiv.className = 'gc-inline-loading';
                    loadingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
                    contentDiv.appendChild(loadingDiv);
                } else {
                    // Allow HTML for images, text otherwise
                    if (msg.role === 'assistant') {
                        this.applyAssistantContent(contentDiv, msg.content);
                    } else {
                        contentDiv.textContent = msg.content;
                    }
                }
                div.appendChild(contentDiv);

                // Add action buttons for assistant messages (only if not loading)
                if (msg.role === 'assistant' && !isGreeting) {
                    const actions = document.createElement('div');
                    actions.className = 'gc-message-actions';

                    if (msg.content.startsWith('<img')) {
                        // Extract image URL from HTML
                        const urlMatch = msg.content.match(/src="([^"]+)"/);
                        if (urlMatch) {
                            const imageUrl = urlMatch[1];
                            const downloadBtn = document.createElement('button');
                            downloadBtn.className = 'gc-action-btn';
                            downloadBtn.title = 'Download Image';
                            downloadBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg><span>Download</span>`;
                            downloadBtn.onclick = (e) => {
                                e.stopPropagation();
                                this.downloadImage(imageUrl, 'ghostchat-image.png');
                            };
                            actions.appendChild(downloadBtn);
                        }
                    } else {
                        // Copy button for text
                        const copyBtn = document.createElement('button');
                        copyBtn.className = 'gc-action-btn';
                        copyBtn.title = 'Copy';
                        copyBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg><span>Copy</span>`;
                        copyBtn.onclick = (e) => {
                            e.stopPropagation();
                            this.copyToClipboard(msg.content);
                        };
                        actions.appendChild(copyBtn);
                    }

                    // Regenerate button for all assistant messages
                    const regenBtn = document.createElement('button');
                    regenBtn.className = 'gc-action-btn';
                    regenBtn.title = 'Regenerate';
                    regenBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2"/></svg><span>Regenerate</span>`;
                    regenBtn.onclick = (e) => {
                        e.stopPropagation();
                        this.regenerateResponse(messageIndex);
                    };
                    actions.appendChild(regenBtn);

                    div.appendChild(actions);
                }

                this.elements.msgContainer.insertBefore(div, this.elements.typingIndicator);
            });

            // Restore scroll position or scroll to bottom
            if (preserveScroll && scrollPos !== null) {
                this.elements.msgContainer.scrollTop = scrollPos;
            } else if (!preserveScroll) {
                this.scrollToBottom();
            }
            this.updateTypingIndicatorVisibility();
        }

        findPreviousUserMessageIndex(startIndex) {
            for (let i = startIndex - 1; i >= 0; i--) {
                if (this.messages[i] && this.messages[i].role === 'user') {
                    return i;
                }
            }
            return -1;
        }

        async regenerateResponse(messageIndex) {
            // Find the user message before this assistant response
            if (messageIndex === 0) return; // Can't regenerate first message

            const requestChatId = this.currentChatId;
            const userMessageIndex = this.findPreviousUserMessageIndex(messageIndex);
            if (userMessageIndex === -1) return;
            const userMessage = this.messages[userMessageIndex];
            if (!userMessage || userMessage.role !== 'user') return;

            const currentMessage = this.messages[messageIndex];
            if (!currentMessage || currentMessage.role !== 'assistant') return;

            // Check if it was an image generation
            const isImageGen = currentMessage.content.startsWith('<img') ||
                (currentMessage.versions && currentMessage.versions[0].startsWith('<img'));

            // Initialize versions array if needed
            if (!currentMessage.versions) {
                currentMessage.versions = [currentMessage.content];
                currentMessage.currentVersion = 0;
            }

            // Add placeholder for new version and switch to it
            currentMessage.versions.push('');
            currentMessage.currentVersion = currentMessage.versions.length - 1;
            currentMessage.content = '';
            currentMessage.isLoading = true;

            if (requestChatId === this.currentChatId) {
                // Add new tab to UI without full re-render
                const messageElements = this.elements.msgContainer.querySelectorAll('.gc-message');
                const messageElement = messageElements[messageIndex];
                if (messageElement) {
                    let tabsContainer = messageElement.querySelector('.gc-version-tabs');
                    if (!tabsContainer) {
                        tabsContainer = document.createElement('div');
                        tabsContainer.className = 'gc-version-tabs';
                        messageElement.insertBefore(tabsContainer, messageElement.firstChild);
                    }

                    // Rebuild tabs
                    tabsContainer.innerHTML = '';
                    currentMessage.versions.forEach((version, versionIndex) => {
                        const tab = document.createElement('button');
                        tab.className = 'gc-version-tab';
                        if (versionIndex === currentMessage.currentVersion) {
                            tab.classList.add('active');
                        }
                        tab.textContent = versionIndex + 1;
                        tab.onclick = (e) => {
                            e.stopPropagation();
                            this.switchVersion(messageIndex, versionIndex);
                        };
                        tabsContainer.appendChild(tab);
                    });
                }

                // Show loading in content area
                this.updateMessageContent(messageIndex);
            }

            try {
                let newContent;
                if (isImageGen) {
                    // Regenerate image
                    const encoded = encodeURIComponent(userMessage.content);
                    const imageUrl = `https://image.pollinations.ai/prompt/${encoded}?nologo=true`;
                    await new Promise(r => setTimeout(r, 1000));
                    newContent = `<img src="${imageUrl}" alt="${userMessage.content}" style="max-width: 100%; border-radius: 8px; margin-top: 4px;">`;
                } else {
                    // Regenerate text response
                    const historyBeforeMessage = this.messages.slice(0, userMessageIndex + 1);
                    const reasoningLevel = await this.getSelectedReasoningLevel(userMessage.content);
                    newContent = await this.fetchAIResponse(userMessage.content, historyBeforeMessage, reasoningLevel);
                }

                // Update the version with actual content
                currentMessage.versions[currentMessage.currentVersion] = newContent;
                currentMessage.content = newContent;
                currentMessage.isLoading = false;

                // Save and update content
                this.saveHistory();
                if (requestChatId === this.currentChatId) {
                    this.updateMessageContent(messageIndex);
                }
            } catch (error) {
                // Remove failed placeholder version
                currentMessage.versions.pop();
                currentMessage.currentVersion = currentMessage.versions.length - 1;
                currentMessage.content = currentMessage.versions[currentMessage.currentVersion];
                currentMessage.isLoading = false;
                console.error('GhostChat Regenerate Error:', error);
                if (requestChatId === this.currentChatId) {
                    this.renderMessages(true);
                }
            }
        }

        switchVersion(messageIndex, versionIndex) {
            const message = this.messages[messageIndex];
            if (!message || !message.versions || versionIndex >= message.versions.length) return;

            message.currentVersion = versionIndex;
            message.content = message.versions[versionIndex];
            this.saveHistory();
            this.updateMessageContent(messageIndex);
        }

        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Optional: Show feedback (could add a toast later)
                console.log('Copied to clipboard');
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        }

        async downloadImage(url, filename) {
            try {
                // Fetch image as blob to force download
                const response = await fetch(url);
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = filename || 'ghostchat-image.png';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                // Clean up blob URL
                URL.revokeObjectURL(blobUrl);
            } catch (error) {
                console.error('Download failed:', error);
                // Fallback: open in new tab
                window.open(url, '_blank');
            }
        }

        appendMessageToChat(chatId, role, content, isHtml = false) {
            if (this.state.isGhostMode) {
                if (chatId === this.currentChatId) {
                    this.appendMessage(role, content, isHtml);
                }
                return;
            }

            if (chatId === this.currentChatId) {
                this.appendMessage(role, content, isHtml);
                return;
            }

            let chat = this.history.find(h => h.id === chatId);
            if (!chat) {
                chat = {
                    id: chatId,
                    timestamp: Date.now(),
                    title: 'New Conversation',
                    messages: []
                };
                this.history.unshift(chat);
            }

            chat.messages.push({ role, content });
            const autoTitle = chat.messages.find(m => m.role === 'user')?.content.substring(0, 30) + '...' || 'New Conversation';
            chat.title = chat.manualTitle || autoTitle;
            chat.timestamp = Date.now();

            this.history = this.history.filter(h => h.id !== chatId);
            this.history.unshift(chat);
            GM_setValue('ghostchat_history', JSON.stringify(this.history));
            if (this.state.isHistoryOpen) this.renderHistoryList();
        }

        appendMessage(role, content, isHtml = false) {
            const messageIndex = this.messages.length;
            const isGreeting = this.isDefaultGreeting({ role, content }, messageIndex);
            const div = document.createElement('div');
            div.className = `gc-message ${role}`;

            const contentDiv = document.createElement('div');
            contentDiv.className = 'gc-message-content';
            if (role === 'assistant') {
                this.applyAssistantContent(contentDiv, content, isHtml);
            } else if (isHtml) {
                contentDiv.innerHTML = content;
            } else {
                contentDiv.textContent = content;
            }
            div.appendChild(contentDiv);

            // Add action buttons for assistant messages
            if (role === 'assistant' && !isGreeting) {
                const actions = document.createElement('div');
                actions.className = 'gc-message-actions';

                if (isHtml && content.startsWith('<img')) {
                    // Extract image URL from HTML
                    const urlMatch = content.match(/src="([^"]+)"/);
                    if (urlMatch) {
                        const imageUrl = urlMatch[1];
                        const downloadBtn = document.createElement('button');
                        downloadBtn.className = 'gc-action-btn';
                        downloadBtn.title = 'Download Image';
                        downloadBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg><span>Download</span>`;
                        downloadBtn.onclick = (e) => {
                            e.stopPropagation();
                            this.downloadImage(imageUrl, 'ghostchat-image.png');
                        };
                        actions.appendChild(downloadBtn);
                    }
                } else {
                    // Copy button for text
                    const copyBtn = document.createElement('button');
                    copyBtn.className = 'gc-action-btn';
                    copyBtn.title = 'Copy';
                    copyBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg><span>Copy</span>`;
                    copyBtn.onclick = (e) => {
                        e.stopPropagation();
                        this.copyToClipboard(content);
                    };
                    actions.appendChild(copyBtn);
                }

                // Regenerate button for all assistant messages
                const regenBtn = document.createElement('button');
                regenBtn.className = 'gc-action-btn';
                regenBtn.title = 'Regenerate';
                regenBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2"/></svg><span>Regenerate</span>`;
                regenBtn.onclick = (e) => {
                    e.stopPropagation();
                    this.regenerateResponse(messageIndex);
                };
                actions.appendChild(regenBtn);

                div.appendChild(actions);
            }

            this.elements.msgContainer.insertBefore(div, this.elements.typingIndicator);
            this.scrollToBottom();
            this.messages.push({ role, content });
            this.saveHistory();
        }

        scrollToBottom() {
            const container = this.elements.msgContainer;
            container.scrollTop = container.scrollHeight;
        }

        updateTypingIndicatorVisibility() {
            const shouldShow = this.state.isTyping && this.state.loadingChatId === this.currentChatId;
            this.elements.typingIndicator.classList.toggle('visible', shouldShow);
        }

        setLoading(loading, chatId = this.currentChatId) {
            if (loading) {
                this.state.isTyping = true;
                this.state.loadingChatId = chatId;
            } else if (this.state.loadingChatId === chatId) {
                this.state.isTyping = false;
                this.state.loadingChatId = null;
            }

            const isCurrentChat = chatId === this.currentChatId;
            if (isCurrentChat) {
                this.elements.sendBtn.disabled = loading;
                this.elements.input.disabled = loading;
            }

            this.updateTypingIndicatorVisibility();
            if (!loading && isCurrentChat) this.elements.input.focus();
            if (isCurrentChat) this.scrollToBottom();
        }

        async handleSend() {
            const text = this.elements.input.value.trim();
            if (!text || this.state.isTyping) return;

            // Check if image mode is active
            if (this.state.isImageMode) {
                await this.handleImageGen();
                return;
            }

            const requestChatId = this.currentChatId;
            this.elements.input.value = '';
            this.appendMessage('user', text);
            this.setLoading(true, requestChatId);

            try {
                const reasoningLevel = await this.getSelectedReasoningLevel(text);
                const response = await this.fetchAIResponse(text, null, reasoningLevel);
                this.appendMessageToChat(requestChatId, 'assistant', response);
            } catch (error) {
                this.appendMessageToChat(requestChatId, 'assistant', '⚠️ Error: Could not reach the ghost in the machine.');
                console.error('GhostChat Error:', error);
            } finally {
                this.setLoading(false, requestChatId);
            }
        }

        async getSelectedReasoningLevel(userText) {
            if (this.state.reasoningEffort !== 'auto') {
                return this.state.reasoningEffort;
            }
            return await this.fetchAutoReasoningLevel(userText);
        }

        async fetchAutoReasoningLevel(userText) {
            const url = 'https://text.pollinations.ai/openai';
            const routerSystemPrompt = `You are an internal router.

                Task:
                Given the user prompt, choose the most appropriate reasoning level.

                Rules:
                - Respond with ONE word only.
                - No explanation.
                - No punctuation.
                - No extra text.

                Allowed outputs:
                minimal
                low
                medium
                high

                Criteria:
                - minimal: extraction, formatting, very short tasks
                - low: simple questions, factual answers
                - medium: general tasks, summaries, explanations
                - high: complex reasoning, planning, strategy, multi-step tasks`;

            const payload = {
                messages: [
                    { role: 'system', content: routerSystemPrompt },
                    { role: 'user', content: `User prompt:\n"${userText}"` }
                ],
                model: 'openai',
                reasoning_effort: 'low',
                seed: Math.floor(Math.random() * 10000)
            };

            const makeRequest = async (retryCount = 0) => {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (response.status === 429) {
                        if (retryCount < 2) {
                            const delay = 2000 * Math.pow(2, retryCount);
                            console.warn(`GhostChat: Router rate limit, retrying in ${delay}ms...`);
                            await new Promise(r => setTimeout(r, delay));
                            return makeRequest(retryCount + 1);
                        }
                        throw new Error('Router request rate limited.');
                    }

                    if (!response.ok) throw new Error(`Router network error: ${response.status}`);
                    const data = await response.json();
                    const raw = (data.choices?.[0]?.message?.content || '').trim().toLowerCase();
                    const normalized = raw.split(/\s+/)[0].replace(/[^a-z]/g, '');
                    const allowed = ['minimal', 'low', 'medium', 'high'];
                    if (allowed.includes(normalized)) {
                        return normalized;
                    }
                    return 'low';
                } catch (e) {
                    console.warn('GhostChat: Router failed, defaulting to low.', e);
                    return 'low';
                }
            };

            return await makeRequest();
        }

        async fetchAIResponse(userText, historyOverride = null, reasoningOverride = null) {
            const url = 'https://text.pollinations.ai/openai';
            // Limit history to 6 to prevent context length issues
            const sourceHistory = Array.isArray(historyOverride) ? historyOverride : this.messages;
            const recentHistory = sourceHistory.slice(-6);
            const reasoningLevel = reasoningOverride || this.state.reasoningEffort;
            const stylePrompt = this.getStylePrompt();
            const baseSystemPrompt = `You are GhostChat, a helpful and concise AI assistant living in a browser overlay.${stylePrompt ? `\n\nStyle:\n${stylePrompt}` : ''}`;
            const toolSpec = `Tools (function-call format):
                - generate_image: [tool:generate_image prompt="..."]
                - show_image: [tool:show_image query="..." alt="..."] or [tool:show_image url="..." alt="..."]
                - link: [tool:link url="..." text="..."]
                - code: [tool:code lang="js"]...[/tool:code]

                Tool rules:
                - Use only the tool tags above when you need special rendering.
                - Do not output raw HTML.
                - You may mix normal text with tool calls.
                - For code, do not use markdown fences.`;
                        const highModePrompt = `You are in HIGH reasoning mode.

                Instructions:
                - Apply deep, multi-step reasoning internally.
                - Fully understand the user intent before answering.
                - If the input text is rough, unclear, or poorly structured, rewrite it automatically.
                - Produce a clear, well-written final answer with proper paragraphs and spacing.
                - When relevant, structure the output (sections, lists, steps).
                - Decide whether the response should include images, links, or code; if so, include the appropriate tool calls in the final output.
                - Only include images (generate_image/show_image) when the user explicitly asks for an image.
                - You may include a show_image tool call when the user asks what something looks like (e.g., "a quoi ressemble un camion").

                Constraints:
                - Never reveal internal reasoning or analysis.
                - Do not mention intermediate steps.
                - Output only the final, polished result.

                Goal:
                Deliver the most accurate, thoughtful, and well-presented answer possible.

                ${toolSpec}`;
                        const ultraModePrompt = `You are in ULTRA reasoning mode.

                Instructions:
                - Apply intermediate, multi-step reasoning internally (more thorough than high).
                - Validate assumptions and check for edge cases when relevant.
                - Fully understand the user intent before answering.
                - If the input text is rough, unclear, or poorly structured, rewrite it automatically.
                - Produce a clear, well-written final answer with proper paragraphs and spacing.
                - When relevant, structure the output (sections, lists, steps).
                - Decide whether the response should include images, links, or code; if so, include the appropriate tool calls in the final output.
                - Only generate images when the user explicitly asks for an image.
                - Prefer including a show_image tool call for visual or concrete objects when helpful (e.g., "c'est quoi un chien", "a quoi ressemble ..."), even if the user did not explicitly ask for an image.
                - When you use show_image, prefer a short query (e.g., [tool:show_image query="ford mustang" alt="Ford Mustang"]).

                Constraints:
                - Never reveal internal reasoning or analysis.
                - Do not mention intermediate steps.
                - Output only the final, polished result.

                Goal:
                Deliver the most accurate, thoughtful, and well-presented answer possible.

            ${toolSpec}`;
            let systemPrompt = baseSystemPrompt;
            if (reasoningLevel === 'high') {
                systemPrompt = `${baseSystemPrompt}\n\n${highModePrompt}`;
            } else if (reasoningLevel === 'ultra') {
                systemPrompt = `${baseSystemPrompt}\n\n${ultraModePrompt}`;
            }

            const payload = {
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...recentHistory
                ],
                model: 'openai',
                reasoning_effort: this.getReasoningEffort(reasoningLevel),
                seed: Math.floor(Math.random() * 10000) // Avoid cache collisions
            };

            const makeRequest = async (retryCount = 0) => {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (response.status === 429) {
                        if (retryCount < 2) {
                            // Exponential backoff: 2s, 4s
                            const delay = 2000 * Math.pow(2, retryCount);
                            console.warn(`GhostChat: Rate limit hit, retrying in ${delay}ms...`);
                            await new Promise(r => setTimeout(r, delay));
                            return makeRequest(retryCount + 1);
                        }
                        throw new Error('Server is currently overloaded (Too Many Requests). Please try again in a moment.');
                    }

                    if (!response.ok) throw new Error(`Network error: ${response.status}`);
                    const data = await response.json();
                    const content = data.choices?.[0]?.message?.content || 'No response.';
                    let cleaned = this.sanitizeAssistantText(content);
                    cleaned = this.maybeInjectUltraImage(userText, reasoningLevel, cleaned);
                    return cleaned;
                } catch (e) {
                    throw e;
                }
            };

            return await makeRequest();
        }

        sanitizeAssistantText(text) {
            if (!text) return text;
            let cleaned = text;
            const adBlockRegex = /\n*\s*---\s*\n\s*\*\*Support Pollinations\.AI:\*\*[\s\S]*?keep AI accessible for everyone\.\s*/gi;
            cleaned = cleaned.replace(adBlockRegex, '');
            cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
            return cleaned.trim();
        }
    }

    // Initialize GhostChatAI !
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new GhostChat());
    } else {
        new GhostChat();
    }

})();
