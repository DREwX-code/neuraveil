// ==UserScript==
// @name         NeuraVeil - AI Chat in Your Browser
// @name:fr      NeuraVeil - Chat IA dans votre navigateur
// @name:es      NeuraVeil - Chat de IA en tu navegador
// @name:de      NeuraVeil - KI-Chat in deinem Browser
// @name:it      NeuraVeil - Chat IA nel tuo browser
// @name:ja      NeuraVeil - ブラウザ内AIチャット
// @name:pt      NeuraVeil - Chat IA no seu navegador
// @name:ru      NeuraVeil - ИИ-чат в вашем браузере
// @name:zh-CN   NeuraVeil - 浏览器内 AI 聊天
// @name:zh-TW   NeuraVeil - 瀏覽器內 AI 聊天
// @name:ko      NeuraVeil - 브라우저 내 AI 채팅
// @name:ar      NeuraVeil - دردشة ذكاء اصطناعي في المتصفح
// @name:hi      NeuraVeil - आपके ब्राउज़र में AI चैट
// @name:nl      NeuraVeil - AI-chat in je browser
// @name:pl      NeuraVeil - Czat AI w przeglądarce
// @name:tr      NeuraVeil - Tarayıcınızda Yapay Zeka Sohbeti
// @namespace    https://github.com/DREwX-code

// @description     Lightweight floating AI chat panel that works on any webpage. Free and no signup required. Uses Pollinations.ai for text and image generation, supports multiple conversations, reasoning levels, response styles, image tools, and a privacy-focused Ghost Mode.
// @description:fr  Panneau de chat IA flottant, léger et moderne, utilisable sur n’importe quelle page web. Gratuit et sans inscription. Utilise Pollinations.ai pour la génération de texte et d’images, avec conversations multiples, niveaux de raisonnement, styles de réponse, outils d’image et un mode Ghost axé sur la confidentialité.
// @description:es  Panel de chat IA flotante, ligero y moderno, que funciona en cualquier página web. Gratis y sin registro. Utiliza Pollinations.ai para la generación de texto e imágenes, con múltiples conversaciones, niveles de razonamiento, estilos de respuesta, herramientas de imagen y un modo Ghost centrado en la privacidad.
// @description:de  Leichtes, schwebendes KI-Chatpanel, das auf jeder Webseite funktioniert. Kostenlos und ohne Registrierung. Nutzt Pollinations.ai für Text- und Bildgenerierung, unterstützt mehrere Unterhaltungen, Denkstufen, Antwortstile, Bildtools und einen datenschutzorientierten Ghost-Modus.
// @description:it  Pannello di chat IA fluttuante, leggero e moderno, utilizzabile su qualsiasi pagina web. Gratuito e senza registrazione. Utilizza Pollinations.ai per la generazione di testo e immagini, con conversazioni multiple, livelli di ragionamento, stili di risposta, strumenti per le immagini e una modalità Ghost orientata alla privacy.
// @description:ja  あらゆるWebページで使用できる、軽量でモダンなフローティングAIチャットパネル。無料・登録不要。Pollinations.aiを使用したテキストおよび画像生成に対応し、複数の会話、推論レベル、応答スタイル、画像ツール、プライバシー重視のゴーストモードを搭載。
// @description:pt  Painel de chat IA flutuante, leve e moderno, que funciona em qualquer página web. Gratuito e sem necessidade de cadastro. Usa Pollinations.ai para geração de texto e imagens, com múltiplas conversas, níveis de raciocínio, estilos de resposta, ferramentas de imagem e um modo Ghost focado em privacidade.
// @description:ru  Лёгкая плавающая панель ИИ-чата, работающая на любом веб-сайте. Бесплатно и без регистрации. Использует Pollinations.ai для генерации текста и изображений, поддерживает несколько диалогов, уровни рассуждений, стили ответов, инструменты для изображений и ориентированный на приватность Ghost-режим.
// @description:zh-CN  轻量级浮动 AI 聊天面板，可在任何网页上使用。免费且无需注册。使用 Pollinations.ai 进行文本和图像生成，支持多对话、推理等级、回复风格、图像工具以及注重隐私的幽灵模式。
// @description:zh-TW  輕量級浮動 AI 聊天面板，可在任何網頁上使用。免費且無需註冊。使用 Pollinations.ai 進行文字與圖片生成，支援多重對話、推理層級、回應風格、圖片工具，以及重視隱私的 Ghost 模式。
// @description:ko  어떤 웹페이지에서도 작동하는 가볍고 현대적인 플로팅 AI 채팅 패널입니다. 무료이며 가입이 필요 없습니다. Pollinations.ai를 사용해 텍스트와 이미지를 생성하고, 다중 대화, 추론 수준, 응답 스타일, 이미지 도구, 개인정보 보호 중심의 고스트 모드를 지원합니다.
// @description:ar  لوحة دردشة ذكاء اصطناعي عائمة وخفيفة تعمل على أي صفحة ويب. مجانية وبدون تسجيل. تستخدم Pollinations.ai لتوليد النصوص والصور، مع دعم محادثات متعددة، مستويات التفكير، أنماط الرد، أدوات الصور، ووضع Ghost يركز على الخصوصية.
// @description:hi  हल्का और आधुनिक फ्लोटिंग AI चैट पैनल जो किसी भी वेबपेज पर काम करता है। पूरी तरह मुफ्त और बिना पंजीकरण। Pollinations.ai का उपयोग टेक्स्ट और इमेज जनरेशन के लिए करता है, और मल्टीपल बातचीत, रीजनिंग लेवल, रिस्पॉन्स स्टाइल, इमेज टूल्स और प्राइवेसी-केंद्रित Ghost मोड को सपोर्ट करता है.
// @description:nl  Lichtgewicht en modern zwevend AI-chatpaneel dat op elke webpagina werkt. Gratis en zonder registratie. Gebruikt Pollinations.ai voor tekst- en afbeeldingsgeneratie, met meerdere gesprekken, redeneerniveaus, antwoordstijlen, afbeeldingshulpmiddelen en een privacygerichte Ghost-modus.
// @description:pl  Lekki, nowoczesny pływający panel czatu AI działający na każdej stronie internetowej. Darmowy i bez rejestracji. Wykorzystuje Pollinations.ai do generowania tekstu i obrazów, obsługuje wiele rozmów, poziomy rozumowania, style odpowiedzi, narzędzia graficzne oraz tryb Ghost nastawiony na prywatność.
// @description:tr  Her web sayfasında çalışan hafif ve modern bir yüzen yapay zeka sohbet paneli. Ücretsiz ve kayıt gerektirmez. Metin ve görsel üretimi için Pollinations.ai kullanır; çoklu sohbetler, akıl yürütme seviyeleri, yanıt stilleri, görsel araçlar ve gizliliğe odaklı Ghost modunu destekler.

// @version      2.0.0
// @author       Dℝ∃wX
// @match        *://*/*
// @icon         https://raw.githubusercontent.com/DREwX-code/NeuraVeil/refs/heads/main/assets/icon/Icon_NeuraVeil_Script.png
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_listValues
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/DREwX-code/neuraveil/main/src/neuraveil.styles.js
// @require      https://cdn.jsdelivr.net/npm/dompurify@3.2.4/dist/purify.min.js
// @require      https://cdn.jsdelivr.net/npm/@mozilla/readability@0.6.0/Readability.js
// @require      https://cdn.jsdelivr.net/npm/turndown@7.2.0/dist/turndown.js
// @require      https://cdn.jsdelivr.net/npm/fuse.js@7.1.0/dist/fuse.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js
// @require      https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js
// @require      https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js
// @connect      text.pollinations.ai
// @connect      image.pollinations.ai
// @connect      api.openverse.org
// @connect      stablehorde.net
// @connect      *
// @run-at       document-end
// @license      Apache-2.0
// @copyright    2026 Dℝ∃wX
// @noframes
// @tag          productivity
// @tag          ai
// @tag          chat
// ==/UserScript==

/*

Copyright 2026 Dℝ∃wX

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
 _   _  ______  _    _  _____           __      __ ______  _____  _
| \ | ||  ____|| |  | ||  __ \     /\   \ \    / /|  ____||_   _|| |
|  \| || |__   | |  | || |__) |   /  \   \ \  / / | |__     | |  | |
| . ` ||  __|  | |  | ||  _  /   / /\ \   \ \/ /  |  __|    | |  | |
| |\  || |____ | |__| || | \ \  / ____ \   \  /   | |____  _| |_ | |____
|_| \_||______| \____/ |_|  \_\/_/    \_\   \/    |______||_____||______|

--------------------------------

AI Backends:

This project uses public, open-source endpoints provided by Pollinations.ai
for text and image generation.
No proprietary models are hosted or redistributed by this project.
Website: https://pollinations.ai/
Source code: https://github.com/pollinations/pollinations
License: MIT.

Music Search:

Music results use the public Openverse API to find openly licensed audio.
No external audio generation API, account, or API key is used.

This project uses the public, community-driven API provided by
AI Horde (Stable Horde) for image generation.
Anonymous access is used (no user account, no API key required).
No proprietary models are hosted or redistributed by this project.
Website: https://aihorde.net/
API: https://aihorde.net/api/
Source code: https://github.com/Haidra-Org/AI-Horde
License: AGPL-3.0

---

Speech-to-Text (Voice Input):

This project uses the browser-native Web Speech API for voice-to-text input,
via SpeechRecognition or webkitSpeechRecognition depending on browser support.
Speech recognition is handled entirely by the user's browser.
No audio data is stored, logged, or transmitted by this project.
No external speech-to-text APIs, accounts, or API keys are used.

---

GreasyFork SVG Icon:

Created by denilsonsa.
Source: https://github.com/denilsonsa/denilsonsa.github.io/blob/master/icons/GreasyFork.svg
License: Not explicitly declared (used with attribution).

---

Third-Party Libraries:

This project uses Highlight.js for syntax highlighting.
Website: https://highlightjs.org/
Source code: https://github.com/highlightjs/highlight.js
License: BSD 3-Clause

---

This project uses DOMPurify to sanitize HTML extracted from active pages
before converting or rendering it.
Website: https://github.com/cure53/DOMPurify
Source code: https://github.com/cure53/DOMPurify
License: Apache-2.0 OR MPL-2.0

---

This project uses Mozilla Readability to extract the main readable content
from the active webpage for page analysis.
Website: https://github.com/mozilla/readability
Source code: https://github.com/mozilla/readability
License: Apache-2.0

---

This project uses Turndown to convert sanitized HTML page extracts to
clean Markdown before sending them to the AI backend.
Website: https://github.com/mixmark-io/turndown
Source code: https://github.com/mixmark-io/turndown
License: MIT

---

This project uses Fuse.js for typo-tolerant fuzzy search inside the local
conversation history.
Website: https://fusejs.io/
Source code: https://github.com/krisk/Fuse
License: Apache-2.0

---

Media Search (Openverse):

This project uses the public Openverse API to search openly licensed images
and audio.
Attribution, license, and source links are preserved when available.
No media files are hosted or redistributed by this project.

Website: https://openverse.org/
API: https://api.openverse.engineering/
Source: https://github.com/WordPress/openverse
License: CC0

---

Mathematical Rendering (KaTeX):

This project uses KaTeX to render mathematical expressions efficiently
from LaTeX syntax into high-quality HTML and CSS.
KaTeX is designed for fast client-side rendering and does not execute
arbitrary JavaScript during rendering.

KaTeX is used to display mathematical formulas generated or normalized
by the project (e.g. square roots, fractions, exponents).

Website: https://katex.org/
Source code: https://github.com/KaTeX/KaTeX
License: MIT

--------------------------------

Disclaimer :
NeuraVeil is an AI assistant and may generate inaccurate information.
Always verify critical or sensitive information independently.

*/



(function () {
    'use strict';

    const NV_STORAGE_PREFIX = 'NeuraVeil::';

    function nvLocalStorageKey(key) {
        return `${NV_STORAGE_PREFIX}${key}`;
    }

    function nvReadLocalValue(key, fallback = '') {
        try {
            const raw = window.localStorage.getItem(nvLocalStorageKey(key));
            if (raw === null || raw === undefined) return fallback;
            return JSON.parse(raw);
        } catch (e) {
            return fallback;
        }
    }

    function nvWriteLocalValue(key, value) {
        try {
            window.localStorage.setItem(nvLocalStorageKey(key), JSON.stringify(value));
        } catch (e) {
            // Storage can be unavailable in some privacy contexts.
        }
    }

    function nvGetValue(key, fallback = '') {
        try {
            if (typeof GM_getValue === 'function') return GM_getValue(key, fallback);
        } catch (e) {
            // Fall through to the next storage backend.
        }

        try {
            if (typeof GM !== 'undefined' && typeof GM.getValue === 'function') {
                const value = GM.getValue(key, fallback);
                if (!value || typeof value.then !== 'function') return value;
            }
        } catch (e) {
            // Safari Userscripts may expose a partial GM object.
        }

        return nvReadLocalValue(key, fallback);
    }

    function nvSetValue(key, value) {
        let wroteSync = false;
        try {
            if (typeof GM_setValue === 'function') {
                GM_setValue(key, value);
                wroteSync = true;
            }
        } catch (e) {
            wroteSync = false;
        }

        try {
            if (typeof GM !== 'undefined' && typeof GM.setValue === 'function') {
                GM.setValue(key, value);
            }
        } catch (e) {
            // Ignore async GM failures; localStorage below keeps Safari usable.
        }

        if (!wroteSync) nvWriteLocalValue(key, value);
    }

    function nvListValues() {
        try {
            if (typeof GM_listValues === 'function') return GM_listValues();
        } catch (e) {
            // Fall through to localStorage.
        }

        try {
            if (typeof GM !== 'undefined' && typeof GM.listValues === 'function') {
                const keys = GM.listValues();
                if (Array.isArray(keys)) return keys;
            }
        } catch (e) {
            // Fall through to localStorage.
        }

        try {
            const keys = [];
            for (let i = 0; i < window.localStorage.length; i += 1) {
                const rawKey = window.localStorage.key(i);
                if (rawKey && rawKey.startsWith(NV_STORAGE_PREFIX)) {
                    keys.push(rawKey.slice(NV_STORAGE_PREFIX.length));
                }
            }
            return keys;
        } catch (e) {
            return [];
        }
    }

    class NeuraVeil {
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

            this.IMAGE_MODELS = [
                { id: 'pollinations', label: 'Pollinations' },
                { id: 'ai-horde', label: 'AI Horde' }
            ];
            this.IMAGE_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
            this.INPUT_MAX_ROWS = 5;
            this.SIDEBAR_WIDTH = 430;
            this.SIDEBAR_RAIL_WIDTH = 52;
            this.MIN_SIDEBAR_WIDTH = 320;
            this.MAX_SIDEBAR_WIDTH = 720;
            this.TOTAL_STORAGE_BYTES = 10 * 1024 * 1024;
            this.GENERATED_IMAGE_CACHE_KEY = 'NeuraVeil_generated_image_cache';
            this.GENERATED_IMAGE_CACHE_MAX_ITEMS = 4;
            this.GENERATED_IMAGE_CACHE_MAX_BYTES = 3 * 1024 * 1024;
            this.GENERATED_IMAGE_CACHE_MAX_ITEM_BYTES = 1200 * 1024;
            this.PAGE_CONTEXT_MAX_CHARS = 24000;
            this.PAGE_FALLBACK_MAX_NODES = 320;
            this.DEFAULT_GREETING = 'Hello! I am NeuraVeil. How can I help you today?';
            this.hljsReady = null;
            this.hljsCssLoaded = false;
            this.hljsInstance = null;
            this.hljsCdnCssReady = null;
            this.hljsCdnScriptReady = null;
            this.HLJS_CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
            this.HLJS_JS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
            this.katexReady = null;
            this.katexCssLoaded = false;
            this.katexInstance = null;
            this.katexAutoRender = null;
            this.katexCdnCssReady = null;
            this.katexCdnScriptReady = null;
            this.katexCdnAutoReady = null;
            this.KATEX_CSS_URL = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
            this.KATEX_JS_URL = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
            this.KATEX_AUTO_URL = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js';
            this.POLLINATIONS_REFERRER = 'neuraveil';
            this.POLLINATIONS_TEXT_MODELS_URL = 'https://text.pollinations.ai/models';
            this.POLLINATIONS_IMAGE_MODELS_URL = 'https://image.pollinations.ai/models';
            this.POLLINATIONS_MODEL_CACHE_TTL = 10 * 60 * 1000;
            this.POLLINATIONS_CHAT_MODERN_URL = 'https://gen.pollinations.ai/v1/chat/completions';
            this.POLLINATIONS_CHAT_LEGACY_URL = 'https://text.pollinations.ai/openai';
            this.host = null;
            this.shadow = null;
            this.elements = {};
            this.tableModalOverlay = null;
            this.tableModalBody = null;
            this.state = {
                isOpen: false,
                isTyping: false,
                loadingChatId: null,
                isSidebar: false,
                isSidebarCollapsed: false,
                isHistoryOpen: false,
                isSettingsOpen: false,
                isInfoOpen: false,
                isGhostMode: false,
                isImageMode: false,
                sidebarSide: 'right',
                sidebarWidth: this.SIDEBAR_WIDTH,
                reasoningEffort: 'medium',
                responseStyle: 'default',
                manualTitle: null,
                autoTitle: null,
                historySearchTerm: '',
                historySearchIndex: -1,
                isPageAnalyzing: false,
                isPageContextActive: false,
                pageContext: null
            };
            this.history = [];
            this.filteredHistory = [];
            this.currentChatId = Date.now(); // Start with a new session ID
            this.messages = [
                { role: 'assistant', content: this.DEFAULT_GREETING }
            ];
            this.loadingByChat = new Map();
            this.loadingTextByChat = new Map();
            this.storageUsageInterval = null;

            this.recognition = null;
            this.isRecording = false;
            this.speechClearTimer = null;
            this.pollinationsModelCatalog = null;
            this.pollinationsModelCatalogPromise = null;
            this.pollinationsModernUnavailable = false;
            this.pageDockOriginalStyles = null;
            this.ignoreNextTriggerClick = false;
            this.triggerDragState = null;
            this.panelPlacementRaf = null;
            this.generatedImageCache = null;
            this.activeChatRequests = new Map();
            this.musicAudioContext = null;

            this.init();
        }

        loadHighlightJS() {
            return this.ensureHighlight();
        }

        request(url, options = {}) {
            const gmRequest = typeof GM_xmlhttpRequest === 'function'
                ? GM_xmlhttpRequest
                : (typeof GM !== 'undefined' && typeof GM.xmlHttpRequest === 'function' ? GM.xmlHttpRequest : null);
            if (gmRequest) {
                return this.requestWithGM(gmRequest, url, options);
            }

            const { responseType, signal, ...fetchOptions } = options;
            return fetch(url, { ...fetchOptions, signal });
        }

        requestWithGM(gmRequest, url, options = {}) {
            const method = options.method || 'GET';
            const headers = options.headers || {};
            const data = options.body || null;
            const responseType = options.responseType || 'text';
            const timeout = Number(options.timeout || 0) > 0 ? Number(options.timeout) : 15000;
            const signal = options.signal;

            return new Promise((resolve, reject) => {
                let settled = false;
                let requestHandle = null;
                const cleanup = () => {
                    if (signal) signal.removeEventListener('abort', onAbortSignal);
                };
                const finish = (callback, value) => {
                    if (settled) return;
                    settled = true;
                    cleanup();
                    callback(value);
                };
                const buildAbortError = () => {
                    const error = new Error('Request aborted');
                    error.name = 'AbortError';
                    error.__nvAborted = true;
                    return error;
                };
                const onAbortSignal = () => {
                    try {
                        requestHandle?.abort?.();
                    } catch (e) {
                        // Ignore request abort failures.
                    }
                    finish(reject, buildAbortError());
                };

                if (signal?.aborted) {
                    reject(buildAbortError());
                    return;
                }

                requestHandle = gmRequest({
                    method,
                    url,
                    headers,
                    data,
                    responseType,
                    timeout,
                    onload: (res) => {
                        const parsedHeaders = this.parseResponseHeaders(res.responseHeaders || '');
                        const responseText = typeof res.responseText === 'string' ? res.responseText : '';
                        const responseBody = res.response;
                        const decodeBuffer = (buffer) => {
                            if (!buffer) return '';
                            if (typeof TextDecoder !== 'undefined') {
                                return new TextDecoder().decode(buffer);
                            }
                            const bytes = new Uint8Array(buffer);
                            let out = '';
                            for (let i = 0; i < bytes.length; i += 1) {
                                out += String.fromCharCode(bytes[i]);
                            }
                            return out;
                        };

                        finish(resolve, {
                            ok: res.status >= 200 && res.status < 300,
                            status: res.status,
                            headers: parsedHeaders,
                            json: async () => {
                                if (responseBody && responseType === 'json') return responseBody;
                                const text = responseText ||
                                    (responseBody instanceof ArrayBuffer ? decodeBuffer(responseBody) : '') ||
                                    (responseBody instanceof Blob ? await responseBody.text() : '');
                                if (!text) return null;
                                return JSON.parse(text);
                            },
                            text: async () => {
                                if (responseText) return responseText;
                                if (responseBody instanceof ArrayBuffer) return decodeBuffer(responseBody);
                                if (responseBody instanceof Blob) return await responseBody.text();
                                return '';
                            },
                            blob: async () => {
                                if (responseBody instanceof Blob) return responseBody;
                                if (responseBody instanceof ArrayBuffer) return new Blob([responseBody]);
                                if (responseText) return new Blob([responseText]);
                                return new Blob();
                            }
                        });
                    },
                    onerror: (err) => finish(reject, err),
                    ontimeout: () => finish(reject, new Error('Request timed out')),
                    onabort: () => finish(reject, buildAbortError())
                });

                if (signal) signal.addEventListener('abort', onAbortSignal, { once: true });
            });
        }

        parseResponseHeaders(rawHeaders) {
            const headerMap = new Map();
            const lines = String(rawHeaders || '').trim().split(/\r?\n/);
            lines.forEach((line) => {
                const index = line.indexOf(':');
                if (index === -1) return;
                const key = line.slice(0, index).trim().toLowerCase();
                const value = line.slice(index + 1).trim();
                if (key) headerMap.set(key, value);
            });
            return {
                get(name) {
                    if (!name) return null;
                    return headerMap.get(String(name).toLowerCase()) || null;
                }
            };
        }

        getPollinationsStatusMeaning(status) {
            const meanings = {
                400: 'Invalid input.',
                401: 'Authentication required.',
                402: 'Insufficient pollen balance.',
                403: 'Access denied.',
                429: 'Too many requests. Try again shortly.',
                500: 'Pollinations server error.'
            };
            return meanings[Number(status)] || 'Pollinations error.';
        }

        async readApiErrorPayload(response) {
            try {
                const contentType = response?.headers?.get?.('content-type') || '';
                if (/json/i.test(contentType)) {
                    return await response.json();
                }
                const text = await response.text();
                if (!text) return null;
                try {
                    return JSON.parse(text);
                } catch (e) {
                    return { error: { message: text } };
                }
            } catch (e) {
                return null;
            }
        }

        async createPollinationsHttpError(response, context = 'Pollinations request') {
            const status = Number(response?.status || 0);
            const payload = await this.readApiErrorPayload(response);
            const code = payload?.error?.code || payload?.code || '';
            const backendMessage = payload?.error?.message || payload?.message || '';
            const meaning = this.getPollinationsStatusMeaning(status);
            const parts = [`${context} : ${meaning}`];
            if (code) parts.push(code);
            if (backendMessage && String(backendMessage).length <= 90) parts.push(backendMessage);
            return new Error(parts.join(' — '));
        }

        async ensurePollinationsOk(response, context) {
            if (response?.ok) return;
            throw await this.createPollinationsHttpError(response, context);
        }

        createChatRequestSession(chatId = this.currentChatId, kind = 'chat', meta = {}) {
            const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
            const session = {
                chatId,
                kind,
                controller,
                signal: controller ? controller.signal : null,
                aborted: false,
                createdAt: Date.now(),
                ...meta
            };
            this.activeChatRequests.set(chatId, session);
            return session;
        }

        getChatRequestSession(chatId = this.currentChatId) {
            return this.activeChatRequests.get(chatId) || null;
        }

        finishChatRequestSession(chatId = this.currentChatId, session = null) {
            const active = this.activeChatRequests.get(chatId);
            if (!active) return;
            if (session && active !== session) return;
            this.activeChatRequests.delete(chatId);
        }

        abortChatRequest(chatId = this.currentChatId) {
            const session = this.getChatRequestSession(chatId);
            if (!session) return false;
            session.aborted = true;
            try {
                session.controller?.abort?.();
            } catch (e) {
                // Ignore abort failures.
            }
            return true;
        }

        isAbortError(error) {
            return Boolean(error?.__nvAborted || error?.name === 'AbortError');
        }

        throwIfChatRequestAborted(session) {
            if (session?.aborted || session?.signal?.aborted) {
                const error = new Error('Request aborted');
                error.name = 'AbortError';
                error.__nvAborted = true;
                throw error;
            }
        }

        getPollinationsChatEndpoints() {
            return [
                {
                    type: 'legacy',
                    label: 'Text Pollinations',
                    url: this.POLLINATIONS_CHAT_LEGACY_URL
                }
            ];
        }

        buildChatPayloadForEndpoint(payload, endpointType, reasoningLevel) {
            return {
                ...payload,
                reasoning_effort: this.getReasoningEffort(reasoningLevel, endpointType)
            };
        }

        shouldSkipModernPollinations(status) {
            return [401, 403, 404].includes(Number(status));
        }

        async postPollinationsChat(endpoint, payload, context, retryCount = 0, requestOptions = {}) {
            const response = await this.request(endpoint.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: requestOptions.signal
            });

            if (response.status === 429 && retryCount < 2) {
                const delay = 2000 * Math.pow(2, retryCount);
                console.warn(`NeuraVeil: ${endpoint.label} rate limit, retrying in ${delay}ms...`);
                await new Promise(r => setTimeout(r, delay));
                return this.postPollinationsChat(endpoint, payload, context, retryCount + 1, requestOptions);
            }

            if (!response.ok) {
                const error = await this.createPollinationsHttpError(response, context || endpoint.label);
                error.status = response.status;
                error.endpointType = endpoint.type;
                throw error;
            }

            const data = await response.json();
            return { data, endpoint };
        }

        async requestPollinationsChat(payload, context, reasoningLevel = this.state.reasoningEffort, requestOptions = {}) {
            const endpoints = this.getPollinationsChatEndpoints();
            let lastError = null;

            for (let i = 0; i < endpoints.length; i += 1) {
                const endpoint = endpoints[i];
                const endpointPayload = this.buildChatPayloadForEndpoint(payload, endpoint.type, reasoningLevel);
                try {
                    return await this.postPollinationsChat(endpoint, endpointPayload, context || endpoint.label, 0, requestOptions);
                } catch (error) {
                    lastError = error;
                    if (endpoint.type === 'modern' && this.shouldSkipModernPollinations(error.status)) {
                        this.pollinationsModernUnavailable = true;
                    }
                    if (i < endpoints.length - 1) {
                        console.warn(`NeuraVeil: ${endpoint.label} unavailable, falling back.`, error);
                        continue;
                    }
                }
            }

            throw lastError || new Error(`${context || 'Pollinations'} : Pollinations error.`);
        }

        shouldRetryWithFallbackModel(error) {
            return [400, 403, 404].includes(Number(error?.status || 0));
        }

        getTextModelFallbacks(model) {
            const fallbackModels = ['openai-fast', 'openai', 'gpt-oss'];
            return fallbackModels.filter(item => item && item !== model);
        }

        async requestPollinationsChatWithFallbackModels(payload, context, reasoningLevel = this.state.reasoningEffort, fallbackModels = null, requestOptions = {}) {
            const originalModel = payload?.model || 'openai';
            const candidates = fallbackModels || this.getTextModelFallbacks(originalModel);
            const models = Array.from(new Set([originalModel, ...candidates].filter(Boolean)));
            let lastError = null;

            for (const model of models) {
                try {
                    return await this.requestPollinationsChat({ ...payload, model }, context, reasoningLevel, requestOptions);
                } catch (error) {
                    lastError = error;
                    if (!this.shouldRetryWithFallbackModel(error)) break;
                    console.warn(`NeuraVeil: Pollinations model "${model}" unavailable, trying fallback.`, error);
                }
            }

            throw lastError || new Error(`${context || 'Pollinations'} : Pollinations error.`);
        }

        getDefaultPollinationsModelCatalog() {
            return {
                timestamp: 0,
                textModels: [
                    {
                        name: 'openai-fast',
                        aliases: ['openai', 'gpt-oss', 'gpt-oss-20b'],
                        reasoning: true,
                        tier: 'anonymous'
                    }
                ],
                imageModels: ['sana']
            };
        }

        normalizePollinationsTextModels(value) {
            if (!Array.isArray(value)) return [];
            return value
                .map((model) => {
                    if (typeof model === 'string') return { name: model, aliases: [] };
                    const name = String(model?.name || '').trim();
                    if (!name) return null;
                    return {
                        name,
                        aliases: Array.isArray(model.aliases) ? model.aliases.map(alias => String(alias || '').trim()).filter(Boolean) : [],
                        reasoning: Boolean(model.reasoning),
                        tier: model.tier || '',
                        vision: Boolean(model.vision),
                        audio: Boolean(model.audio)
                    };
                })
                .filter(Boolean);
        }

        normalizePollinationsImageModels(value) {
            if (!Array.isArray(value)) return [];
            return value.map(model => String(model || '').trim()).filter(Boolean);
        }

        loadCachedPollinationsModelCatalog(allowStale = false) {
            try {
                const raw = nvGetValue('NeuraVeil_pollinations_model_catalog', '');
                if (!raw) return null;
                const catalog = JSON.parse(raw);
                const age = Date.now() - Number(catalog?.timestamp || 0);
                if (!allowStale && age > this.POLLINATIONS_MODEL_CACHE_TTL) return null;
                const textModels = this.normalizePollinationsTextModels(catalog?.textModels || []);
                const imageModels = this.normalizePollinationsImageModels(catalog?.imageModels || []);
                if (!textModels.length && !imageModels.length) return null;
                return {
                    timestamp: Number(catalog?.timestamp || 0),
                    textModels,
                    imageModels
                };
            } catch (e) {
                return null;
            }
        }

        savePollinationsModelCatalog(catalog) {
            try {
                nvSetValue('NeuraVeil_pollinations_model_catalog', JSON.stringify(catalog));
            } catch (e) {
                // Cache writes are best-effort only.
            }
        }

        async fetchPollinationsJson(url, context, requestOptions = {}) {
            const response = await this.request(url, { signal: requestOptions.signal });
            await this.ensurePollinationsOk(response, context);
            return await response.json();
        }

        async refreshPollinationsModelCatalog(force = false, requestOptions = {}) {
            const cached = force ? null : this.loadCachedPollinationsModelCatalog(false);
            if (cached) {
                this.pollinationsModelCatalog = cached;
                return cached;
            }
            if (this.pollinationsModelCatalogPromise) return this.pollinationsModelCatalogPromise;

            this.pollinationsModelCatalogPromise = (async () => {
                const fallback = this.pollinationsModelCatalog || this.loadCachedPollinationsModelCatalog(true) || this.getDefaultPollinationsModelCatalog();
                const [textResult, imageResult] = await Promise.allSettled([
                    this.fetchPollinationsJson(this.POLLINATIONS_TEXT_MODELS_URL, 'Text models Pollinations', requestOptions),
                    this.fetchPollinationsJson(this.POLLINATIONS_IMAGE_MODELS_URL, 'Image models Pollinations', requestOptions)
                ]);

                const textModels = textResult.status === 'fulfilled'
                    ? this.normalizePollinationsTextModels(textResult.value)
                    : fallback.textModels;
                const imageModels = imageResult.status === 'fulfilled'
                    ? this.normalizePollinationsImageModels(imageResult.value)
                    : fallback.imageModels;
                const catalog = {
                    timestamp: Date.now(),
                    textModels: textModels.length ? textModels : fallback.textModels,
                    imageModels: imageModels.length ? imageModels : fallback.imageModels
                };
                this.pollinationsModelCatalog = catalog;
                this.savePollinationsModelCatalog(catalog);
                return catalog;
            })().finally(() => {
                this.pollinationsModelCatalogPromise = null;
            });

            return this.pollinationsModelCatalogPromise;
        }

        warmPollinationsModelCatalog() {
            this.refreshPollinationsModelCatalog(false).catch((error) => {
                console.warn('NeuraVeil: Pollinations model catalog refresh failed.', error);
            });
        }

        getPollinationsModelCatalogSync() {
            return this.pollinationsModelCatalog
                || this.loadCachedPollinationsModelCatalog(false)
                || this.loadCachedPollinationsModelCatalog(true)
                || this.getDefaultPollinationsModelCatalog();
        }

        choosePollinationsTextModel(catalog, preferred = []) {
            const models = this.normalizePollinationsTextModels(catalog?.textModels || []);
            for (const candidate of preferred) {
                const found = models.find(model => model.name === candidate || model.aliases?.includes(candidate));
                if (found) return found.name;
            }
            return models[0]?.name || 'openai-fast';
        }

        async getPreferredTextModel(kind = 'chat', requestOptions = {}) {
            const catalog = await this.refreshPollinationsModelCatalog(false, requestOptions).catch(() => this.getPollinationsModelCatalogSync());
            const preferred = kind === 'fast'
                ? ['openai-fast', 'openai', 'gpt-oss']
                : ['openai-fast', 'openai', 'gpt-oss'];
            return this.choosePollinationsTextModel(catalog, preferred);
        }

        choosePollinationsImageModel(catalog) {
            const models = this.normalizePollinationsImageModels(catalog?.imageModels || []);
            const preferred = ['sana', 'flux', 'turbo'];
            for (const candidate of preferred) {
                if (models.includes(candidate)) return candidate;
            }
            return models[0] || 'sana';
        }

        getPreferredImageModelSync() {
            return this.choosePollinationsImageModel(this.getPollinationsModelCatalogSync());
        }

        extractAssistantContent(data) {
            const choice = data?.choices?.[0] || {};
            const message = choice.message || {};
            const content = message.content ?? choice.text ?? '';
            if (typeof content === 'string') return content;
            if (Array.isArray(content)) {
                return content
                    .map(part => typeof part === 'string' ? part : (part?.text || part?.content || ''))
                    .filter(Boolean)
                    .join('\n');
            }

            const blocks = message.content_blocks || choice.content_blocks || [];
            if (Array.isArray(blocks) && blocks.length) {
                return blocks
                    .map(block => {
                        if (typeof block === 'string') return block;
                        if (block?.type === 'text') return block.text || '';
                        if (block?.type === 'image_url') {
                            const url = block.image_url?.url || block.url || '';
                            return url ? `[tool:show_image url="${this.escapeToolAttrValue(url)}" alt="Generated image"]` : '';
                        }
                        return block?.text || '';
                    })
                    .filter(Boolean)
                    .join('\n');
            }

            return '';
        }

        parseAssistantJsonContent(data) {
            const raw = this.extractAssistantContent(data).trim();
            if (!raw) return null;
            const cleaned = raw
                .replace(/^```(?:json)?\s*/i, '')
                .replace(/\s*```$/i, '')
                .trim();
            const jsonText = cleaned.match(/\{[\s\S]*\}/)?.[0] || cleaned;
            try {
                return JSON.parse(jsonText);
            } catch (e) {
                return null;
            }
        }

        formatUserFacingError(error, fallback = 'An error occurred.') {
            const message = String(error?.message || '').trim();
            return message || fallback;
        }



        init() {
            this.loadHistory();
            this.createHost();
            this.injectStyles();
            this.createUI();
            this.attachEvents();
            this.loadSavedReasoning();
            this.loadSavedStyle();
            this.loadSavedSidebarWidth();
            this.loadSavedSidebarSide();
            this.restoreActiveChat();
            this.restoreActiveChat();
            this.updateHeaderTitle();
            this.updateGhostUI();
            this.setupSpeechRecognition();
            this.buildInfoContent();
            this.warmPollinationsModelCatalog();
        }

        loadSavedReasoning() {
            const savedReasoning = nvGetValue('NeuraVeil_reasoning', 'medium');
            if (this.REASONING_LEVELS.includes(savedReasoning)) {
                this.state.reasoningEffort = savedReasoning;
                this.elements.modelSelect.value = savedReasoning;
            }
        }

        getReasoningEffort(level, endpointType = 'modern') {
            const modernMapping = {
                auto: 'low',
                minimal: 'minimal',
                low: 'low',
                medium: 'medium',
                high: 'high',
                ultra: 'xhigh'
            };
            const legacyMapping = {
                auto: 'low',
                minimal: 'low',
                low: 'low',
                medium: 'medium',
                high: 'high',
                ultra: 'high'
            };
            const mapping = endpointType === 'legacy' ? legacyMapping : modernMapping;
            return mapping[level] || 'low';
        }

        getReasoningModePrompt(level) {
            switch (level) {
                case 'minimal':
                    return `MINIMAL
- Keep the answer very short.
- Use tools only when the user explicitly asks for an image, music/audio, link, or code output.
- For an explicit image-generation request, use generate_image instead of describing an image.`;
                case 'low':
                    return `LOW
- Keep the answer simple and practical.
- Use tools when the user's intent is clear, especially for image generation, music search, image display, links, or code.
- Avoid unnecessary structure unless it improves readability.`;
                case 'medium':
                    return `MEDIUM
- Provide a balanced, useful answer with enough detail to satisfy the request.
- Use tools whenever they are the correct way to fulfill the request. In particular, image requests must use generate_image or show_image, and music requests must use search_music.
- Structure the answer lightly when helpful.`;
                case 'high':
                    return `HIGH
- Think carefully before answering, then provide only the polished final response.
- Use the appropriate tool for images, music/audio, links, or code when requested or clearly useful.
- Validate intent and avoid unsupported claims, invented URLs, and fabricated media.`;
                case 'ultra':
                    return `ULTRA
- Be the most careful and capable mode: infer intent, check edge cases, and choose tools intelligently.
- Use generate_image for requested image creation, show_image for visual examples or page-provided image URLs, and search_music for requested music.
- Prefer concise, high-confidence answers with strong formatting and no fabricated sources or media.`;
                case 'auto':
                    return `AUTO
- Match the depth to the user's request.
- Use tools when they are necessary to actually complete the request, especially for images, music/audio, links, and code.`;
                default:
                    return `LOW
- Keep the answer simple and practical.
- Use tools when the user's intent is clear.`;
            }
        }

        createHost() {
            this.host = document.createElement('div');
            this.host.id = 'ghost-chat-host';
            this.host.style.position = 'fixed';
            this.host.style.bottom = '20px';
            this.host.style.right = '20px'; // Stacks comfortably with standard scrollbars
            this.host.style.width = '56px';
            this.host.style.height = '56px';
            this.host.style.zIndex = '2147483646'; // Just under PixelPicker if present
            this.host.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

            this.shadow = this.host.attachShadow({ mode: 'open' });
            document.body.appendChild(this.host);
            this.restoreTriggerPosition();
        }

        restoreTriggerPosition() {
            const raw = nvGetValue('NeuraVeil_trigger_pos', '');
            if (!raw) return;
            try {
                const pos = JSON.parse(raw);
                if (!pos || typeof pos.x !== 'number' || typeof pos.y !== 'number') return;
                const clamped = this.clampTriggerPosition(pos.x, pos.y);
                this.host.style.left = `${clamped.x}px`;
                this.host.style.top = `${clamped.y}px`;
                this.host.style.right = 'auto';
                this.host.style.bottom = 'auto';
            } catch (e) {
                // Ignore invalid saved position.
            }
        }

        resetTriggerPosition() {
            if (!this.host) return;
            this.host.style.left = 'auto';
            this.host.style.top = 'auto';
            this.host.style.right = '20px';
            this.host.style.bottom = '20px';
        }

        placeTriggerForClosedSidebar() {
            if (!this.host) return;
            this.host.style.top = 'auto';
            this.host.style.bottom = '20px';
            if (this.state.sidebarSide === 'left') {
                this.host.style.left = '20px';
                this.host.style.right = 'auto';
            } else {
                this.host.style.left = 'auto';
                this.host.style.right = '20px';
            }
        }

        clampTriggerPosition(x, y) {
            const hostWidth = this.host.offsetWidth || 56;
            const hostHeight = this.host.offsetHeight || 56;
            const maxX = Math.max(0, window.innerWidth - hostWidth);
            const maxY = Math.max(0, window.innerHeight - hostHeight);
            return {
                x: Math.min(Math.max(0, Math.round(x)), maxX),
                y: Math.min(Math.max(0, Math.round(y)), maxY)
            };
        }

        resetPanelPlacement() {
            if (!this.elements.panel) return;
            this.elements.panel.style.position = '';
            this.elements.panel.style.left = '';
            this.elements.panel.style.top = '';
            this.elements.panel.style.right = '';
            this.elements.panel.style.bottom = '';
            this.elements.panel.style.transformOrigin = '';
        }

        schedulePanelPlacement() {
            if (this.panelPlacementRaf) {
                cancelAnimationFrame(this.panelPlacementRaf);
            }
            this.panelPlacementRaf = requestAnimationFrame(() => {
                this.panelPlacementRaf = null;
                this.updatePanelPlacement();
            });
        }

        getPanelPlacementMetrics() {
            const panel = this.elements.panel;
            const hostRect = this.host.getBoundingClientRect();
            const panelWidth = panel.offsetWidth || 425;
            const panelHeight = panel.offsetHeight || 500;
            const hostWidth = this.host.offsetWidth || 56;
            const hostHeight = this.host.offsetHeight || 56;
            return {
                panel,
                hostRect,
                panelWidth,
                panelHeight,
                hostWidth,
                hostHeight,
                gap: 12,
                padding: 8,
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight
            };
        }

        chooseOpenDirection(primarySpace, secondarySpace, panelSize) {
            const preferPrimary = primarySpace >= secondarySpace;
            if (primarySpace < panelSize && secondarySpace >= panelSize) return false;
            if (primarySpace >= panelSize && secondarySpace < panelSize) return true;
            return preferPrimary;
        }

        getPanelOffset(openRight, openAbove, metrics) {
            const left = openRight ? 0 : (metrics.hostWidth - metrics.panelWidth);
            const top = openAbove ? (-metrics.panelHeight - metrics.gap) : (metrics.hostHeight + metrics.gap);
            return { left, top };
        }

        clampPanelOffset(offset, metrics) {
            const absLeft = metrics.hostRect.left + offset.left;
            const absTop = metrics.hostRect.top + offset.top;
            const clampedLeft = Math.min(
                Math.max(metrics.padding, absLeft),
                metrics.viewportWidth - metrics.panelWidth - metrics.padding
            );
            const clampedTop = Math.min(
                Math.max(metrics.padding, absTop),
                metrics.viewportHeight - metrics.panelHeight - metrics.padding
            );
            offset.left += clampedLeft - absLeft;
            offset.top += clampedTop - absTop;
            return offset;
        }

        avoidHostOverlap(offset, metrics) {
            const absLeft = metrics.hostRect.left + offset.left;
            const absTop = metrics.hostRect.top + offset.top;
            const overlapsHost = absLeft < metrics.hostRect.right &&
                (absLeft + metrics.panelWidth) > metrics.hostRect.left &&
                absTop < metrics.hostRect.bottom &&
                (absTop + metrics.panelHeight) > metrics.hostRect.top;
            if (!overlapsHost) return offset;

            const hostOnLeft = (metrics.hostRect.left + (metrics.hostWidth / 2)) <= (metrics.viewportWidth / 2);
            if (hostOnLeft) {
                const targetLeft = metrics.hostRect.right + metrics.gap;
                const shift = targetLeft - absLeft;
                if (shift > 0) offset.left += shift;
            } else {
                const targetRight = metrics.hostRect.left - metrics.gap;
                const shift = targetRight - (absLeft + metrics.panelWidth);
                if (shift < 0) offset.left += shift;
            }
            return this.clampPanelOffset(offset, metrics);
        }

        applyPanelPlacementStyles(panel, offset, openRight, openAbove) {
            panel.style.position = 'absolute';
            panel.style.left = `${offset.left}px`;
            panel.style.top = `${offset.top}px`;
            panel.style.right = 'auto';
            panel.style.bottom = 'auto';
            panel.style.transformOrigin = `${openRight ? 'left' : 'right'} ${openAbove ? 'bottom' : 'top'}`;
        }

        updatePanelPlacement() {
            if (!this.elements.panel || !this.host) return;
            if (this.state.isSidebar) {
                this.resetPanelPlacement();
                return;
            }

            const metrics = this.getPanelPlacementMetrics();
            const spaceLeft = metrics.hostRect.left;
            const spaceRight = metrics.viewportWidth - metrics.hostRect.right;
            const spaceAbove = metrics.hostRect.top;
            const spaceBelow = metrics.viewportHeight - metrics.hostRect.bottom;
            const openRight = this.chooseOpenDirection(spaceRight, spaceLeft, metrics.panelWidth);
            const openAbove = this.chooseOpenDirection(spaceAbove, spaceBelow, metrics.panelHeight);
            let offset = this.getPanelOffset(openRight, openAbove, metrics);
            offset = this.clampPanelOffset(offset, metrics);
            offset = this.avoidHostOverlap(offset, metrics);
            this.applyPanelPlacementStyles(metrics.panel, offset, openRight, openAbove);
        }

        // Injecting CSS styles via GitHub (CodeScriptNeuraVeil.js)
        injectStyles() {
            const style = document.createElement('style');
            style.textContent = NEURAVEIL_CSS;
            this.shadow.appendChild(style);
        }


        createUI() {
            const trigger = document.createElement('div');
            trigger.className = 'nv-trigger';
            trigger.innerHTML = `
                <svg viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  <path d="M7 9h10v2H7zm0-4h10v2H7z"/>
                </svg>
            `;

            // Panel
            const panel = document.createElement('div');
            panel.className = 'nv-panel';
            panel.innerHTML = `
                <div class="nv-header">
                    <div class="nv-header-main">
                        <div class="nv-header-left">
                            <div class="nv-title">
                                <img src="https://raw.githubusercontent.com/DREwX-code/NeuraVeil/refs/heads/main/assets/icon/Icon_NeuraVeil_Script.png" class="nv-status-logo" alt="NeuraVeil logo">
                                <div class="nv-title-texts">
                                    <span class="nv-app-name">NeuraVeil AI</span>
                                    <div class="nv-chat-title-row">
                                        <button class="nv-chat-title-btn" id="nv-chat-title-btn" type="button" title="Rename conversation" aria-label="Rename conversation">
                                            <span class="nv-chat-title-text" id="nv-chat-title-text">New conversation</span>
                                        </button>
                                        <input class="nv-chat-title-input" id="nv-chat-title-input" type="text" maxlength="90" spellcheck="false" aria-label="Conversation name">
                                        <button class="nv-btn-icon nv-delete-chat-btn" id="nv-btn-delete-chat" title="Delete this conversation" aria-label="Delete this conversation" hidden>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M3 6h18"></path>
                                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                                                <path d="M10 11v6"></path>
                                                <path d="M14 11v6"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nv-header-right">
                        <button class="nv-title-toggle" id="nv-btn-toggle-extra" title="More">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                        <div class="nv-sidebar-toggle">
                            <button class="nv-btn-icon" id="nv-btn-sidebar" title="Toggle Sidebar">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
                            </button>
                            <button class="nv-sidebar-arrow" id="nv-btn-sidebar-arrow" title="Move Sidebar" aria-label="Move Sidebar">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 18l-6-6 6-6"></path>
                                </svg>
                            </button>
                        </div>
                         <button class="nv-btn-icon" id="nv-btn-new" title="New Chat">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                        </button>
                        </div>
                    </div>
                </div>
                <div class="nv-header-extra" id="nv-header-extra">
                    <button class="nv-btn-icon" id="nv-btn-history" title="History">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </button>
                    <button class="nv-btn-icon" id="nv-btn-settings" title="Settings">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        </svg>
                    </button>

                    <button class="nv-btn-icon" id="nv-btn-ghost" title="Ghost Mode">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2a8 8 0 0 0-8 8v12l3-2 2.5 2 2.5-2 2.5 2 2.5-2 3 2V10a8 8 0 0 0-8-8z"></path>
                            <circle cx="9" cy="11" r="1" fill="currentColor"></circle>
                            <circle cx="15" cy="11" r="1" fill="currentColor"></circle>
                        </svg>
                    </button>

                <button class="nv-btn-icon" id="nv-btn-info" title="Info">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="8"></line>
                    </svg>
                </button>
            </div>
                <div class="nv-settings" id="nv-settings-panel">
                    <button class="nv-panel-close" id="nv-settings-close" title="Close">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div class="nv-settings-title">Choose how NeuraVeil should respond.</div>
                    <div class="nv-settings-list" id="nv-settings-list"></div>
                    <div class="nv-settings-danger">
                        <div class="nv-danger-title">Danger Zone</div>
                        <div class="nv-danger-desc">Reset all data stored by NeuraVeil, including settings and conversations.</div>
                        <button class="nv-danger-btn" id="nv-btn-reset-all" type="button">Reset all data</button>
                    </div>
                </div>

                <div class="nv-info" id="nv-info-panel">
                    <button class="nv-panel-close" id="nv-info-close" title="Close">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <div class="nv-info-title">Information</div>

                    <div class="nv-info-section-title">Script Overview</div>
                    <div class="nv-info-grid">
                        <div class="nv-info-card variant-a">
                            <h4>Version</h4>
                            <p>2.0.0<br>Last updated: 2026-04-22</p>
                        </div>

                        <div class="nv-info-card variant-b">
                            <h4>Author</h4>
                            <p>Dℝ∃wX / @DREwX-code</p>
                            <div class="nv-info-links">
                            <!--  GreasyFork SVG icon by denilsonsa
                            Source: https://github.com/denilsonsa/denilsonsa.github.io/blob/master/icons/GreasyFork.svg -->

                            <a class="nv-info-link" href="https://greasyfork.org/users/1259433-d%E2%84%9D-wx" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 96 96"
                                    width="18"
                                    height="18"
                                    aria-hidden="true">
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
                                        pointer-events="none">
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

                                <a class="nv-info-link" href="https://github.com/DREwX-code" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .5a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.9.84.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 .5Z"></path>
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div class="nv-info-card variant-c">
                            <h4>About</h4>
                            <p>
                                NeuraVeil is a modern, in-browser floating chat panel.
                                AI responses are served through the open-source Pollinations endpoints.
                            </p>
                            <div class="nv-info-links">
                               <a class="nv-info-link" href="https://hello.pollinations.ai/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="18" height="18">
                                <path style="fill: #ffffff; stroke:none;" d="M117 74C107.231 69.7971 97.4206 70 87 70L52 70L52 107C52 110.655 53.2747 117.433 50.3966 120.258C48.1657 122.447 43.882 122.231 41 122.808C35.1822 123.972 29.5012 125.801 24 128C21.3907 129.043 17.0648 130.003 16.4113 133.225C15.6968 136.746 18.2516 140.896 19.5787 144C23.188 152.441 27.7557 160.567 33.152 168C50.9487 192.515 77.3192 210.861 108 213.83C118.888 214.884 129.237 212.462 140 212C125.587 230.759 99.6636 220.161 84.4676 238.039C78.6982 244.827 78.5571 252.541 74.686 259.961C72.9705 263.249 69.6858 265.254 67.3403 268.039C63.8007 272.243 62.0938 277.553 62.0185 283C61.8036 298.545 78.8554 310.043 92.9992 301.772C102.52 296.204 106.408 281.672 100.772 272C96.8944 265.347 86.5961 262.749 90.3326 254C90.931 252.599 91.7547 251.238 92.6381 250C101.601 237.442 113.768 239.897 127 236.985C137.36 234.704 147.836 226.835 152 217C154.779 226.403 153 238.218 153 248C153 251.884 153.906 257.17 152.397 260.826C150.949 264.332 146.877 266.226 144.533 269.09C140.18 274.412 138.999 282.381 140.529 289C144.901 307.913 175.241 310.054 179.61 290C181.098 283.167 180.419 274.449 175.775 269.015C172.912 265.665 167.505 263.426 166.318 258.957C165.189 254.703 166 249.376 166 245L166 216C172.604 225.708 180.285 233.672 192 236.841C204.523 240.229 217.395 236.967 226.211 249.015C227.119 250.256 227.965 251.607 228.622 253C233.092 262.474 224.541 263.812 220.367 271.004C214.765 280.655 216.493 294.343 226.04 300.891C239.871 310.378 258.868 299.388 258.921 283C258.939 277.263 256.585 271.366 252.671 267.184C250.261 264.608 246.831 262.996 244.988 259.907C240.975 253.18 240.953 245.377 235.671 239.001C220.088 220.189 193.289 231.272 179 211C220.766 221.806 262.92 202.625 287.279 168C292.398 160.724 296.656 153.096 300.306 145C301.801 141.683 304.067 137.891 303.758 134.105C303.436 130.158 299.126 129.026 296 127.811C290.487 125.669 284.79 123.891 279 122.665C276.34 122.102 272.709 122.206 271.028 119.682C268.671 116.143 270 109.069 270 105L270 70C254.015 70 237.979 69.6221 222 70.0147C217.521 70.1247 209.398 73.8076 205.39 71.7986C201.137 69.6665 198.637 60.852 195.961 57C189.174 47.2314 181.112 38.1938 173.576 29C170.613 25.3861 167.03 19.1444 162.718 17.0864C157.356 14.5276 151.106 25.6572 148.389 29C136.831 43.2172 124.121 56.896 117 74z"/>
                                <path style="fill: #2d272d; stroke:none;" d="M160 35C152.305 45.2098 143.241 54.4271 136.029 65C133.56 68.6192 129.073 74.3338 129.531 79C129.856 82.3064 132.842 84.7733 135.001 87C138.664 90.7792 142.224 94.6598 145.226 99C153.533 111.01 158.843 126.459 160 141C161.926 136.453 161.862 130.85 163.155 126C165.627 116.73 169.708 107.989 175.004 100C178.458 94.7897 182.528 90.3951 186.995 86.0394C189.003 84.0818 192.151 81.9398 192.469 78.9105C192.899 74.8216 189.102 70.1842 186.996 67C181.889 59.2763 175.989 52.1183 170.081 45C166.983 41.2669 164.376 37.2171 160 35M65 82L65 121C75.0069 122.864 84.4971 124.572 94 128.452C101.279 131.424 107.81 135.902 115 139C110.199 121.923 109.754 104.422 113 87C98.9518 79.627 80.3718 82 65 82M208 137C219.691 133.301 229.731 126.171 242 123.425C245.878 122.557 254.396 122.791 256.972 119.411C258.89 116.896 258 111.96 258 109L258 82C246.617 82 235.323 82.8069 224 82.9969C220.024 83.0636 212.653 82.9235 210.067 86.7022C207.731 90.116 210.789 98.0842 210.961 102C211.49 114.091 208.946 125.113 208 137M196 94C191.363 98.6498 186.899 103.36 183.464 109C172.159 127.559 172 148.966 172 170C188.418 157.915 198.086 133.947 198.961 114C199.235 107.743 199.971 99.1619 196 94M124 95C124 104.506 123.061 114.568 124.289 124C126.328 139.645 135.703 158.053 148 168C148 148.709 148.092 130.69 139.241 113C135.823 106.17 131.089 98.3335 124 95M255 134C245.951 136.75 236.857 137.609 228 141.428C206.487 150.705 187.042 170.398 178 192C188.462 189.509 199.429 192.223 210 190.7C228.373 188.052 242.658 173.125 250.218 157C253.094 150.866 257.72 140.67 255 134M32 139C38.7435 162.409 62.103 186.191 85 194C80.1511 187.986 73.9628 183.236 69.2392 177C60.376 165.299 54.1676 149.673 53 135C45.5584 135.021 39.0339 136.712 32 139M66 135C66.4916 158.691 84.575 184.411 108 190.1C119.096 192.795 130.885 189.354 142 192C131.782 162.517 97.5878 135.652 66 135M269 135C267.131 149.474 261.907 164.163 253.243 176C248.691 182.219 242.611 186.971 238 193C261.173 183.35 279.485 161.855 289 139C282.473 136.913 275.872 135.295 269 135M236 193L237 194L236 193M140 211L141 212L140 211M81.0046 274.667C71.0189 276.698 73.7819 292.76 83.9954 291.091C94.4016 289.391 91.2993 272.573 81.0046 274.667M236.015 274.617C226.584 276.801 229.341 293.034 238.996 291.319C249.603 289.434 246.583 272.169 236.015 274.617M157.108 275.746C148.366 279.349 154.028 294.967 162.981 290.781C172.528 286.318 166.733 271.779 157.108 275.746z"/>
                                </svg>
                                <span>Pollinations Website</span>
                                </a>
                                <a class="nv-info-link" href="https://github.com/pollinations/pollinations" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 .5a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.9.84.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 .5Z"></path>
                                    </svg>
                                    <span>GitHub Pollinations</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="nv-info-section-title">Community & Support</div>
                    <div class="nv-info-support">
                        <div class="nv-info-support-title">
                            <svg viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M20.8 4.6c-1.5-1.7-4.2-1.7-5.7 0L12 7.7 8.9 4.6c-1.6-1.7-4.2-1.7-5.7 0-1.9 2-1.8 5.1.2 7.1L12 21l8.6-9.3c2-2 2.1-5.1.2-7.1z"></path>
                            </svg>
                            <span>Support the project :</span>
                        </div>
                        <div class="nv-info-support-links">
                            <a class="nv-support-link" href="https://greasyfork.org/en/scripts/560252-neuraveil-ai-chat-in-your-browser/feedback" target="_blank" rel="noopener noreferrer" style="--nv-support-accent: 96, 165, 250;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                                <span>Feedback GreasyFork</span>
                            </a>
                            <a class="nv-support-link" href="https://github.com/DREwX-code/NeuraVeil" target="_blank" rel="noopener noreferrer" style="--nv-support-accent: 251, 191, 36;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.4 21 12 17.6 5.6 21 7 14.1 2 9.3 9 8.5 12 2"></polygon>
                                </svg>
                                <span>Star the project</span>
                            </a>
                            <a class="nv-support-link" href="https://github.com/DREwX-code/NeuraVeil/issues" target="_blank" rel="noopener noreferrer" style="--nv-support-accent: 239, 68, 68;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10 4h4v2h-4z"></path>
                                    <rect x="7" y="8" width="10" height="10" rx="2"></rect>
                                    <path d="M5 10h2"></path>
                                    <path d="M17 10h2"></path>
                                    <path d="M5 14h2"></path>
                                    <path d="M17 14h2"></path>
                                </svg>
                                <span>GitHub Issues</span>
                            </a>
                        </div>
                    </div>
                    <div class="nv-info-section-title">Storage & Data</div>
                    <div class="nv-storage" id="nv-storage-usage">
                        <div class="nv-storage-header">Storage usage</div>
                        <div class="nv-storage-body">
                            <div class="nv-storage-chart">
                                <svg viewBox="0 0 100 100" class="nv-storage-donut" aria-hidden="true">
                                    <circle class="nv-storage-ring" cx="50" cy="50" r="36"></circle>
                                    <circle class="nv-storage-seg nv-storage-conv" cx="50" cy="50" r="36"></circle>
                                    <circle class="nv-storage-seg nv-storage-settings" cx="50" cy="50" r="36"></circle>
                                </svg>
                                <div class="nv-storage-center">
                                    <div class="nv-storage-used" id="nv-storage-used">0 MB</div>
                                    <div class="nv-storage-total" id="nv-storage-total">0%</div>
                                </div>
                            </div>
                            <div class="nv-storage-meta">
                                <div class="nv-storage-remaining" id="nv-storage-remaining">Remaining 0 MB / 0 MB</div>
                                <div class="nv-storage-legend">
                                    <div class="nv-storage-legend-item" data-nv-storage-focus="conversations">
                                        <span class="nv-storage-swatch nv-storage-conv"></span>
                                        <span>Conversations</span>
                                    </div>
                                    <div class="nv-storage-legend-item" data-nv-storage-focus="settings">
                                        <span class="nv-storage-swatch nv-storage-settings"></span>
                                        <span>Settings / Parameters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="nv-history" id="nv-history-panel">
                    <div class="nv-history-header">
                        <span class="nv-history-title">Recent Conversations</span>
                        <div class="nv-history-actions">
                            <div class="nv-history-search" id="nv-history-search">
                                <button class="nv-search-btn" id="nv-btn-history-search" title="Search for discussions">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="6"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke-linecap="round"/></svg>
                                </button>
                                <input type="text" class="nv-search-input" id="nv-input-history-search" placeholder="Search..." spellcheck="false" aria-label="Search conversations">
                            </div>
                            <button class="nv-clear-all" id="nv-btn-clear-all" title="Clear All History">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="nv-history-list" id="nv-history-list"></div>
                </div>

                <div class="nv-messages" id="nv-messages">
                    <div class="typing-indicator" id="typing-indicator">
                        <div class="dot"></div><div class="dot"></div><div class="dot"></div>
                        <span id="nv-typing-text" style="margin-left:8px; font-size:11px; color:var(--nv-text-muted); display:none; animation: fadeIn 0.3s;"></span>
                    </div>
                </div>
                <div class="nv-input-area">
                    <div class="nv-input-wrapper">
                        <textarea class="nv-input" placeholder="Type a message..." spellcheck="false" rows="1"></textarea>
                        <div class="nv-composer-actions">
                            <button class="nv-img-btn-small" id="nv-btn-mic" title="Voice Input">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                            </button>
                            <button class="nv-send-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </div>
                        <div class="nv-controls-row">
                             <button class="nv-img-btn-small nv-page-btn-small" id="nv-btn-page-analyze" title="Analyze this page">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>
                             </button>
                             <button class="nv-img-btn-small" id="nv-btn-img-toggle" title="Image Mode">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                             </button>
                             <select class="nv-model-select" id="nv-model-select" title="Model Selection">
                                <option value="auto">Reasoning: Auto</option>
                                <option value="minimal">Reasoning: Minimal</option>
                                <option value="low">Reasoning: Low</option>
                                <option value="medium" selected>Reasoning: Medium</option>
                                <option value="high">Reasoning: High</option>
                                <option value="ultra">Reasoning: Ultra</option>
                             </select>
                        </div>
                    </div>
                    <span class="nv-ghost-pill" id="nv-ghost-pill">Ghost Mode active</span>
                </div>

                <div class="nv-modal-overlay" id="nv-modal-overlay">
                    <div class="nv-modal">
                        <div class="nv-modal-text" id="nv-modal-text">Are you sure?</div>
                        <div class="nv-modal-actions">
                            <button class="nv-btn nv-btn-secondary" id="nv-modal-cancel">Cancel</button>
                            <button class="nv-btn nv-btn-danger" id="nv-modal-confirm">Delete</button>
                        </div>
                    </div>
                </div>
                <button class="nv-panel-close-control" id="nv-btn-close" title="Close panel" aria-label="Close panel">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <button class="nv-panel-collapse-control" id="nv-btn-collapse-sidebar" title="Collapse panel" aria-label="Collapse panel">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"></path>
                    </svg>
                </button>
                <div class="nv-sidebar-resizer" id="nv-sidebar-resizer" style="position:absolute;top:0;bottom:0;width:6px;cursor:ew-resize;z-index:5;"></div>
            `;

            this.shadow.appendChild(trigger);
            this.shadow.appendChild(panel);

            this.elements = {
                trigger,
                panel,
                closeBtn: panel.querySelector('#nv-btn-close'),
                sidebarCollapseBtn: panel.querySelector('#nv-btn-collapse-sidebar'),
                sidebarBtn: panel.querySelector('#nv-btn-sidebar'),
                sidebarArrow: panel.querySelector('#nv-btn-sidebar-arrow'),
                historyBtn: panel.querySelector('#nv-btn-history'),
                newChatBtn: panel.querySelector('#nv-btn-new'),
                deleteChatBtn: panel.querySelector('#nv-btn-delete-chat'),
                clearAllBtn: panel.querySelector('#nv-btn-clear-all'),
                modelSelect: panel.querySelector('#nv-model-select'),
                toggleExtraBtn: panel.querySelector('#nv-btn-toggle-extra'),
                headerExtra: panel.querySelector('#nv-header-extra'),
                chatTitleBtn: panel.querySelector('#nv-chat-title-btn'),
                chatTitleText: panel.querySelector('#nv-chat-title-text'),
                chatTitleInput: panel.querySelector('#nv-chat-title-input'),
                settingsBtn: panel.querySelector('#nv-btn-settings'),
                ghostBtn: panel.querySelector('#nv-btn-ghost'),
                ghostPill: panel.querySelector('#nv-ghost-pill'),
                statusLogo: panel.querySelector('.nv-status-logo'),
                infoBtn: panel.querySelector('#nv-btn-info'),
                settingsPanel: panel.querySelector('#nv-settings-panel'),
                settingsCloseBtn: panel.querySelector('#nv-settings-close'),
                settingsList: panel.querySelector('#nv-settings-list'),
                resetAllBtn: panel.querySelector('#nv-btn-reset-all'),
                infoPanel: panel.querySelector('#nv-info-panel'),
                infoCloseBtn: panel.querySelector('#nv-info-close'),
                historyPanel: panel.querySelector('#nv-history-panel'),
                historyList: panel.querySelector('#nv-history-list'),
                historySearchWrap: panel.querySelector('#nv-history-search'),
                historySearchInput: panel.querySelector('#nv-input-history-search'),
                historySearchBtn: panel.querySelector('#nv-btn-history-search'),
                msgContainer: panel.querySelector('#nv-messages'),
                input: panel.querySelector('.nv-input'),
                sendBtn: panel.querySelector('.nv-send-btn'),
                micBtn: panel.querySelector('#nv-btn-mic'),
                imgBtn: panel.querySelector('#nv-btn-img-toggle'),
                pageAnalyzeBtn: panel.querySelector('#nv-btn-page-analyze'),
                typingIndicator: panel.querySelector('#typing-indicator'),
                typingText: panel.querySelector('#nv-typing-text'),
                modalOverlay: panel.querySelector('#nv-modal-overlay'),
                modalText: panel.querySelector('#nv-modal-text'),
                modalCancel: panel.querySelector('#nv-modal-cancel'),
                modalConfirm: panel.querySelector('#nv-modal-confirm'),
                sidebarResizer: panel.querySelector('#nv-sidebar-resizer')
            };

            this.buildSettingsOptions();
        }

        attachEvents() {
            this.elements.trigger.addEventListener('click', () => {
                if (this.ignoreNextTriggerClick) {
                    this.ignoreNextTriggerClick = false;
                    return;
                }
                this.togglePanel(!this.state.isOpen);
            });
            this.initTriggerDrag();
            this.elements.closeBtn.addEventListener('click', () => this.togglePanel(false));
            if (this.elements.sidebarCollapseBtn) {
                this.elements.sidebarCollapseBtn.addEventListener('click', () => {
                    this.setSidebarCollapsed(!this.state.isSidebarCollapsed);
                });
            }

            this.elements.sidebarBtn.addEventListener('click', () => this.toggleSidebar());
            if (this.elements.sidebarArrow) {
                this.elements.sidebarArrow.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleSidebarSide(true);
                    this.temporarilyHideSidebarArrow();
                    this.elements.sidebarArrow.blur();
                });
            }
            this.elements.historyBtn.addEventListener('click', () => this.toggleHistory());
            this.elements.newChatBtn.addEventListener('click', () => this.startNewChat());
            if (this.elements.deleteChatBtn) {
                this.elements.deleteChatBtn.addEventListener('click', () => this.deleteCurrentChat());
            }
            this.elements.clearAllBtn.addEventListener('click', () => this.clearAllHistory());
            this.elements.historySearchBtn.addEventListener('click', () => this.toggleHistorySearch());
            this.elements.historySearchInput.addEventListener('input', (e) => this.handleHistorySearch(e.target.value));
            this.bindInputKeyShield(this.elements.historySearchInput);
            this.elements.historySearchInput.addEventListener('keydown', (e) => this.handleHistorySearchKeydown(e));
            this.elements.historySearchInput.addEventListener('blur', () => this.handleHistorySearchBlur());
            this.elements.modelSelect.addEventListener('change', (e) => this.changeReasoningEffort(e.target.value));
            this.elements.toggleExtraBtn.addEventListener('click', () => this.toggleHeaderExtra());
            if (this.elements.chatTitleBtn) {
                this.elements.chatTitleBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.startHeaderTitleEdit();
                });
            }
            if (this.elements.chatTitleInput) {
                this.bindInputKeyShield(this.elements.chatTitleInput);
                this.elements.chatTitleInput.addEventListener('keydown', (e) => this.handleHeaderTitleKeydown(e));
                this.elements.chatTitleInput.addEventListener('blur', () => this.finishHeaderTitleEdit(true));
            }
            this.elements.settingsBtn.addEventListener('click', () => this.toggleSettingsPanel());
            this.elements.infoBtn.addEventListener('click', () => this.toggleInfoPanel());
            this.elements.ghostBtn.addEventListener('click', () => this.toggleGhostMode());
            if (this.elements.settingsCloseBtn) {
                this.elements.settingsCloseBtn.addEventListener('click', () => this.closeSettingsPanel());
            }
            if (this.elements.resetAllBtn) {
                this.elements.resetAllBtn.addEventListener('click', () => this.resetAllData());
            }
            if (this.elements.infoCloseBtn) {
                this.elements.infoCloseBtn.addEventListener('click', () => this.closeInfoPanel());
            }
            window.addEventListener('resize', () => this.schedulePanelPlacement());
            const sidebarToggle = this.elements.sidebarBtn?.closest('.nv-sidebar-toggle');
            if (sidebarToggle) {
                sidebarToggle.addEventListener('mouseleave', () => this.temporarilyHideSidebarArrow());
                sidebarToggle.addEventListener('focusout', (e) => {
                    if (!sidebarToggle.contains(e.relatedTarget)) {
                        this.temporarilyHideSidebarArrow();
                    }
                });
            }
            this.elements.panel.addEventListener('focusout', (e) => {
                if (!this.elements.panel.contains(e.relatedTarget)) {
                    this.temporarilyHideSidebarArrow();
                }
            });
            this.initSidebarResize();

            this.elements.micBtn.addEventListener('click', () => this.toggleSpeech());
            this.elements.sendBtn.addEventListener('click', () => {
                if (this.isChatLoading(this.currentChatId)) {
                    this.stopActiveConversation();
                    return;
                }
                this.handleSend();
            });
            this.elements.imgBtn.addEventListener('click', () => this.toggleImageMode());
            if (this.elements.pageAnalyzeBtn) {
                this.elements.pageAnalyzeBtn.addEventListener('click', () => this.handleAnalyzePage());
            }

            this.elements.input.addEventListener('input', () => this.adjustHeight());
            this.bindInputKeyShield(this.elements.input);
            this.elements.input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.handleSend();
                }
            });

            this.elements.msgContainer.addEventListener('click', (e) => {
                const action = e.target.closest('[data-nv-welcome-action]');
                if (!action) return;
                e.preventDefault();
                this.handleWelcomeAction(action.dataset.nvWelcomeAction || '');
            });

            // Close logic for floating mode
            document.addEventListener('keydown', (e) => {
                const target = e.target;
                if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return;
                if (e.key === 'Escape' && this.state.isOpen) this.togglePanel(false);
            });
            document.addEventListener('mousedown', (e) => this.handleOutsideHistoryClick(e));

            this.autoResizeInput();
            this.updateSendButtonUi();
            this.updateMicAvailabilityUi();
        }

        handleWelcomeAction(action) {
            const actions = {
                summarize_page: () => {
                    if (this.state.isImageMode) this.toggleImageMode();
                    this.prefillAndOptionallyAttachPage('Summarize the current page.');
                },
                generate_image: () => {
                    this.detachPageContextFromSuggestion();
                    if (!this.state.isImageMode) this.toggleImageMode();
                    this.prefillInput('Generate an image of ');
                },
                explain: () => {
                    this.detachPageContextFromSuggestion();
                    if (this.state.isImageMode) this.toggleImageMode();
                    this.prefillInput('Explain ');
                },
                joke: () => {
                    this.detachPageContextFromSuggestion();
                    if (this.state.isImageMode) this.toggleImageMode();
                    this.prefillInput('Tell me a short joke.');
                }
            };
            const handler = actions[action];
            if (handler) handler();
        }

        detachPageContextFromSuggestion() {
            if (this.state.isPageContextActive) {
                this.setPageContextActive(false);
            }
        }

        prefillInput(text) {
            if (!this.elements.input) return;
            this.elements.input.value = text;
            this.autoResizeInput();
            this.elements.input.focus();
            const pos = this.elements.input.value.length;
            try {
                this.elements.input.setSelectionRange(pos, pos);
            } catch (e) {
                // Ignore selection issues on unusual inputs.
            }
        }

        async prefillAndOptionallyAttachPage(text) {
            if (!this.state.isPageContextActive && !this.state.isPageAnalyzing && this.elements.pageAnalyzeBtn) {
                await this.handleAnalyzePage();
            }
            this.prefillInput(text);
        }

        initSidebarResize() {
            const resizer = this.elements.sidebarResizer;
            if (!resizer) return;

            resizer.addEventListener('pointerdown', (e) => {
                if (!this.state.isSidebar) return;
                e.preventDefault();
                const startX = e.clientX;
                const startWidth = this.state.sidebarWidth || this.SIDEBAR_WIDTH;
                const isLeft = this.state.sidebarSide === 'left';
                const body = document.body;
                const prevSelect = body.style.userSelect;
                body.style.userSelect = 'none';
                resizer.setPointerCapture(e.pointerId);

                const onMove = (moveEvent) => {
                    const delta = isLeft ? (moveEvent.clientX - startX) : (startX - moveEvent.clientX);
                    this.state.sidebarWidth = this.clampSidebarWidth(startWidth + delta);
                    this.applySidebarWidth();
                };

                const onUp = () => {
                    resizer.releasePointerCapture(e.pointerId);
                    body.style.userSelect = prevSelect;
                    window.removeEventListener('pointermove', onMove);
                    window.removeEventListener('pointerup', onUp);
                    nvSetValue('NeuraVeil_sidebar_width', this.state.sidebarWidth);
                };

                window.addEventListener('pointermove', onMove);
                window.addEventListener('pointerup', onUp);
            });
        }

        bindInputKeyShield(el) {
            if (!el) return;
            const stop = (e) => e.stopPropagation();
            el.addEventListener('keydown', stop);
            el.addEventListener('keypress', stop);
            el.addEventListener('keyup', stop);
        }

        sanitizeConversationTitle(title, fallback = 'New conversation') {
            const cleaned = String(title || '')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, 90);
            if (!cleaned || /^new conversation$/i.test(cleaned)) return fallback;
            return cleaned;
        }

        getCurrentConversationTitle() {
            const chat = this.history.find(h => h.id === this.currentChatId);
            const title = this.state.manualTitle ||
                chat?.manualTitle ||
                this.state.autoTitle ||
                chat?.autoTitle ||
                chat?.title ||
                '';
            return this.sanitizeConversationTitle(title);
        }

        updateHeaderTitle() {
            this.updateDeleteChatButton();
            if (!this.elements.chatTitleText) return;
            if (this.elements.chatTitleInput?.closest('.nv-title')?.classList.contains('editing')) return;
            const title = this.getCurrentConversationTitle();
            this.elements.chatTitleText.textContent = title;
            if (this.elements.chatTitleBtn) {
                this.elements.chatTitleBtn.title = `Rename: ${title}`;
                this.elements.chatTitleBtn.setAttribute('aria-label', `Rename conversation: ${title}`);
            }
            if (this.elements.chatTitleInput) {
                this.elements.chatTitleInput.value = title;
            }
        }

        hasDeletableCurrentChat() {
            const hasContent = this.hasUserMessages(this.messages) ||
                this.messages.some((msg, index) => !this.isDefaultGreeting(msg, index));
            const chatExists = this.history.some(h => h.id === this.currentChatId);
            return hasContent || chatExists;
        }

        updateDeleteChatButton() {
            if (!this.elements.deleteChatBtn) return;
            const canDelete = this.hasDeletableCurrentChat();
            this.elements.deleteChatBtn.hidden = !canDelete;
            this.elements.deleteChatBtn.disabled = !canDelete;
        }

        persistConversationTitle(title, chatId = this.currentChatId) {
            const cleaned = this.sanitizeConversationTitle(title, '').trim();
            if (!cleaned) {
                this.updateHeaderTitle();
                return false;
            }

            if (this.state.isGhostMode) {
                if (chatId === this.currentChatId) this.state.manualTitle = cleaned;
                this.updateHeaderTitle();
                return true;
            }

            const chat = this.history.find(h => h.id === chatId);
            if (chat) {
                chat.manualTitle = cleaned;
                chat.title = cleaned;
                chat.timestamp = Date.now();
                nvSetValue('NeuraVeil_history', JSON.stringify(this.history));
            }

            if (chatId === this.currentChatId) {
                this.state.manualTitle = cleaned;
                if (!chat && this.hasUserMessages()) this.saveHistory();
            }

            if (this.state.isHistoryOpen) this.renderHistoryList();
            this.updateHeaderTitle();
            return true;
        }

        startHeaderTitleEdit() {
            const input = this.elements.chatTitleInput;
            const title = input?.closest('.nv-title');
            if (!input || !title) return;
            input.value = this.getCurrentConversationTitle();
            title.classList.add('editing');
            requestAnimationFrame(() => {
                input.focus();
                input.select();
            });
        }

        finishHeaderTitleEdit(commit = true) {
            const input = this.elements.chatTitleInput;
            const title = input?.closest('.nv-title');
            if (!input || !title || !title.classList.contains('editing')) return;
            const previous = this.getCurrentConversationTitle();
            title.classList.remove('editing');
            if (commit) {
                this.persistConversationTitle(input.value || previous);
            } else {
                input.value = previous;
                this.updateHeaderTitle();
            }
        }

        handleHeaderTitleKeydown(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.finishHeaderTitleEdit(true);
            } else if (e.key === 'Escape') {
                e.preventDefault();
                this.finishHeaderTitleEdit(false);
            }
        }

        initTriggerDrag() {
            if (!this.elements.trigger || !this.host) return;
            const trigger = this.elements.trigger;
            const state = {
                active: false,
                pointerId: null,
                startX: 0,
                startY: 0,
                originX: 0,
                originY: 0,
                holdTimer: null
            };
            this.triggerDragState = state;

            const startDrag = () => {
                if (state.active) return;
                state.active = true;
                this.ignoreNextTriggerClick = true;
                trigger.classList.add('grabbing');
            };

            const onPointerDown = (e) => {
                if (e.pointerType === 'mouse' && e.button !== 0) return;
                state.pointerId = e.pointerId;
                state.startX = e.clientX;
                state.startY = e.clientY;
                const rect = this.host.getBoundingClientRect();
                state.originX = rect.left;
                state.originY = rect.top;
                trigger.setPointerCapture(e.pointerId);
                state.holdTimer = setTimeout(() => startDrag(), 180);
            };

            const onPointerMove = (e) => {
                if (state.pointerId !== e.pointerId) return;
                const dx = e.clientX - state.startX;
                const dy = e.clientY - state.startY;
                const distance = Math.hypot(dx, dy);

                if (!state.active) {
                    if (distance < 6) return;
                    if (state.holdTimer) {
                        clearTimeout(state.holdTimer);
                        state.holdTimer = null;
                    }
                    startDrag();
                }

                if (!state.active) return;
                e.preventDefault();

                const pos = this.clampTriggerPosition(state.originX + dx, state.originY + dy);
                this.host.style.left = `${pos.x}px`;
                this.host.style.top = `${pos.y}px`;
                this.host.style.right = 'auto';
                this.host.style.bottom = 'auto';
                this.schedulePanelPlacement();
            };

            const finish = (e) => {
                if (state.holdTimer) {
                    clearTimeout(state.holdTimer);
                    state.holdTimer = null;
                }
                const wasDragging = state.active;
                state.active = false;
                state.pointerId = null;
                trigger.classList.remove('grabbing');
                if (wasDragging) {
                    const rect = this.host.getBoundingClientRect();
                    const pos = this.clampTriggerPosition(rect.left, rect.top);
                    this.host.style.left = `${pos.x}px`;
                    this.host.style.top = `${pos.y}px`;
                    this.host.style.right = 'auto';
                    this.host.style.bottom = 'auto';
                    nvSetValue('NeuraVeil_trigger_pos', JSON.stringify(pos));
                    this.ignoreNextTriggerClick = true;
                    this.schedulePanelPlacement();
                }
                if (e && e.pointerId !== undefined) {
                    try { trigger.releasePointerCapture(e.pointerId); } catch (err) { /* ignore */ }
                }
            };

            trigger.addEventListener('pointerdown', onPointerDown);
            trigger.addEventListener('pointermove', onPointerMove);
            trigger.addEventListener('pointerup', finish);
            trigger.addEventListener('pointercancel', finish);
        }

        toggleHeaderExtra() {
            const isOpen = this.elements.headerExtra.classList.toggle('open');
            this.elements.toggleExtraBtn.classList.toggle('open', isOpen);
            if (!isOpen) {
                this.state.isHistoryOpen = false;
                this.elements.historyPanel.classList.remove('visible');
                this.setHistoryButtonActive(false);
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
                this.setHistoryButtonActive(false);
                this.state.isInfoOpen = false;
                this.elements.infoPanel.classList.remove('visible');
            }
        }

        closeSettingsPanel() {
            this.state.isSettingsOpen = false;
            this.elements.settingsPanel.classList.remove('visible');
            this.collapseHeaderExtra();
        }

        toggleGhostMode() {
            this.state.isGhostMode = !this.state.isGhostMode;
            if (this.state.isGhostMode) {
                this.state.isHistoryOpen = false;
                this.elements.historyPanel.classList.remove('visible');
                this.setHistoryButtonActive(false);
            }
            this.updateGhostUI();
            this.updateBodyOffset();
        }

        toggleInfoPanel() {
            this.state.isInfoOpen = !this.state.isInfoOpen;
            this.elements.infoPanel.classList.toggle('visible', this.state.isInfoOpen);
            if (this.state.isInfoOpen) {
                this.state.isHistoryOpen = false;
                this.state.isSettingsOpen = false;
                this.elements.historyPanel.classList.remove('visible');
                this.setHistoryButtonActive(false);
                this.elements.settingsPanel.classList.remove('visible');
            }
        }

        closeInfoPanel() {
            this.state.isInfoOpen = false;
            this.elements.infoPanel.classList.remove('visible');
            this.collapseHeaderExtra();
        }

        collapseHeaderExtra() {
            if (this.elements.headerExtra.classList.contains('open')) {
                this.toggleHeaderExtra();
            }
        }

        updateGhostUI() {
            const active = this.state.isGhostMode;
            this.elements.ghostBtn.classList.toggle('ghost-active', active);
            this.elements.panel.classList.toggle('ghost-mode', active);
            if (this.elements.statusLogo) {
                this.elements.statusLogo.classList.toggle('ghost-active', active);
            }
            this.elements.ghostPill.textContent = active ? 'Ghost Mode active — nothing is saved.' : '';
            this.elements.ghostPill.classList.toggle('visible', active);

            // Refresh model select if in image mode
            if (this.state.isImageMode) {
                this.renderModelSelect();
            }
        }

        buildSettingsOptions() {
            this.elements.settingsList.innerHTML = '';

            const responseTitle = document.createElement('div');
            responseTitle.className = 'nv-settings-section-title';
            responseTitle.textContent = 'Response Personalization';
            this.elements.settingsList.appendChild(responseTitle);

            const selector = document.createElement('div');
            selector.className = 'nv-style-select';

            const toggle = document.createElement('button');
            toggle.type = 'button';
            toggle.className = 'nv-style-toggle';
            toggle.id = 'nv-style-toggle';
            toggle.innerHTML = `
                <div class="nv-style-toggle-text">
                    <div class="nv-settings-label"></div>
                    <div class="nv-settings-desc"></div>
                </div>
                <svg class="nv-style-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;
            toggle.addEventListener('click', () => {
                selector.classList.toggle('open');
            });

            const optionsWrap = document.createElement('div');
            optionsWrap.className = 'nv-style-options';
            optionsWrap.id = 'nv-style-options';

            this.STYLE_OPTIONS.forEach((option) => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'nv-settings-item';
                button.dataset.style = option.id;
                button.innerHTML = `
                    <div class="nv-settings-label">${option.label}</div>
                    <div class="nv-settings-desc">${option.desc}</div>
                `;
                button.addEventListener('click', () => {
                    this.setResponseStyle(option.id);
                    selector.classList.remove('open');
                });
                optionsWrap.appendChild(button);
            });

            selector.appendChild(toggle);
            selector.appendChild(optionsWrap);
            this.elements.settingsList.appendChild(selector);

            const dataTitle = this.elements.settingsPanel?.querySelector('.nv-settings-section-title.data');
            if (!dataTitle && this.elements.settingsPanel) {
                const title = document.createElement('div');
                title.className = 'nv-settings-section-title data';
                title.textContent = 'Data & Storage';
                this.elements.settingsPanel.insertBefore(title, this.elements.settingsPanel.querySelector('.nv-settings-danger'));
            }

            this.applyActiveStyle();
        }

        buildInfoContent() {
            const infoPanel = this.elements.infoPanel;
            if (!infoPanel) return;
            // content is static in markup; hook for future dynamic updates if needed
            this.initStorageUsageIndicator();
        }


        initStorageUsageIndicator() {
            const root = this.elements.infoPanel?.querySelector('#nv-storage-usage');
            if (!root) return;
            this.elements.storageUsage = {
                root,
                donut: root.querySelector('.nv-storage-donut'),
                conv: root.querySelector('.nv-storage-conv'),
                settings: root.querySelector('.nv-storage-settings'),
                used: root.querySelector('#nv-storage-used'),
                total: root.querySelector('#nv-storage-total'),
                remaining: root.querySelector('#nv-storage-remaining')
            };
            root.querySelectorAll('[data-nv-storage-focus]').forEach((item) => {
                item.addEventListener('mouseenter', () => {
                    this.state.storageFocus = item.dataset.nvStorageFocus || '';
                    this.updateStorageUsage();
                });
                item.addEventListener('mouseleave', () => {
                    this.state.storageFocus = '';
                    this.updateStorageUsage();
                });
            });
            this.updateStorageUsage();
            if (this.storageUsageInterval) {
                clearInterval(this.storageUsageInterval);
            }
            this.storageUsageInterval = setInterval(() => this.updateStorageUsage(), 2000);
        }

        getStorageBytes(value) {
            if (value === undefined || value === null) return 0;
            const str = typeof value === 'string' ? value : JSON.stringify(value);
            if (!str) return 0;
            if (typeof TextEncoder !== 'undefined') {
                return new TextEncoder().encode(str).length;
            }
            let bytes = 0;
            for (let i = 0; i < str.length; i += 1) {
                const code = str.charCodeAt(i);
                bytes += code < 0x80 ? 1 : (code < 0x800 ? 2 : 3);
            }
            return bytes;
        }

        formatBytes(bytes) {
            if (!bytes || bytes <= 0) return '0 MB';
            const mb = bytes / (1024 * 1024);
            return `${mb.toFixed(mb < 1 ? 2 : 1)} MB`;
        }

        getGeneratedImageCache() {
            if (this.generatedImageCache && typeof this.generatedImageCache === 'object') {
                return this.generatedImageCache;
            }

            let parsed = { items: {} };
            const raw = nvGetValue(this.GENERATED_IMAGE_CACHE_KEY, '');
            if (raw) {
                try {
                    parsed = JSON.parse(raw);
                } catch (e) {
                    parsed = { items: {} };
                }
            }

            if (!parsed || typeof parsed !== 'object') parsed = { items: {} };
            if (!parsed.items || typeof parsed.items !== 'object') parsed.items = {};
            this.generatedImageCache = parsed;
            return parsed;
        }

        saveGeneratedImageCache(cache = this.generatedImageCache) {
            const normalized = cache && typeof cache === 'object' ? cache : { items: {} };
            if (!normalized.items || typeof normalized.items !== 'object') normalized.items = {};
            this.generatedImageCache = normalized;
            nvSetValue(this.GENERATED_IMAGE_CACHE_KEY, JSON.stringify(normalized));
            this.updateStorageUsage();
        }

        estimateGeneratedImageCacheEntryBytes(url, entry) {
            return this.getStorageBytes(JSON.stringify({ [url]: entry }));
        }

        pruneGeneratedImageCache(cache) {
            if (!cache || !cache.items || typeof cache.items !== 'object') return cache;

            const entries = Object.entries(cache.items)
                .filter(([url, entry]) => {
                    return !!url &&
                        !!entry &&
                        typeof entry.dataUrl === 'string' &&
                        /^data:image\//i.test(entry.dataUrl);
                })
                .map(([url, entry]) => ({
                    url,
                    entry,
                    bytes: this.estimateGeneratedImageCacheEntryBytes(url, entry)
                }));

            const nextItems = {};
            entries.forEach(({ url, entry }) => {
                nextItems[url] = entry;
            });
            cache.items = nextItems;

            let totalBytes = entries.reduce((sum, item) => sum + item.bytes, 0);
            entries.sort((a, b) => (a.entry.savedAt || 0) - (b.entry.savedAt || 0));

            while (entries.length > this.GENERATED_IMAGE_CACHE_MAX_ITEMS || totalBytes > this.GENERATED_IMAGE_CACHE_MAX_BYTES) {
                const oldest = entries.shift();
                if (!oldest) break;
                delete cache.items[oldest.url];
                totalBytes = Math.max(0, totalBytes - oldest.bytes);
            }

            return cache;
        }

        async blobToDataUrl(blob) {
            if (!(blob instanceof Blob)) return '';
            return await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
                reader.onerror = () => reject(new Error('Failed to read image blob.'));
                reader.readAsDataURL(blob);
            });
        }

        getCachedGeneratedImage(url) {
            if (!this.isPollinationsGeneratedImageUrl(url)) return '';
            const cache = this.getGeneratedImageCache();
            const entry = cache?.items?.[url];
            if (!entry || typeof entry.dataUrl !== 'string') return '';
            if (!/^data:image\//i.test(entry.dataUrl)) return '';
            return entry.dataUrl;
        }

        async cacheGeneratedImage(url, blob) {
            if (!this.isPollinationsGeneratedImageUrl(url)) return '';
            if (!(blob instanceof Blob) || !blob.size) return '';
            if (blob.size > this.GENERATED_IMAGE_CACHE_MAX_ITEM_BYTES) return '';

            const dataUrl = await this.blobToDataUrl(blob);
            if (!/^data:image\//i.test(dataUrl)) return '';

            const entry = {
                dataUrl,
                contentType: blob.type || '',
                size: blob.size,
                savedAt: Date.now()
            };

            const cache = this.getGeneratedImageCache();
            cache.items[url] = entry;
            this.pruneGeneratedImageCache(cache);
            this.saveGeneratedImageCache(cache);
            return dataUrl;
        }

        clearGeneratedImageCache() {
            this.generatedImageCache = { items: {} };
            nvSetValue(this.GENERATED_IMAGE_CACHE_KEY, '');
            this.updateStorageUsage();
        }

        updateStorageUsage() {
            const refs = this.elements.storageUsage;
            if (!refs) return;
            const total = this.TOTAL_STORAGE_BYTES;
            const conversationKeys = new Set(['NeuraVeil_history', 'NeuraVeil_active_chat_id']);
            let conversationsBytes = 0;
            let settingsBytes = 0;
            const keys = typeof nvListValues === 'function' ? nvListValues() : [];
            if (keys.length) {
                keys.forEach((key) => {
                    const bytes = this.getStorageBytes(nvGetValue(key, ''));
                    if (conversationKeys.has(key)) {
                        conversationsBytes += bytes;
                    } else {
                        settingsBytes += bytes;
                    }
                });
            } else {
                conversationsBytes = this.getStorageBytes(nvGetValue('NeuraVeil_history', '')) +
                    this.getStorageBytes(nvGetValue('NeuraVeil_active_chat_id', ''));
                settingsBytes = this.getStorageBytes(nvGetValue('NeuraVeil_style', '')) +
                    this.getStorageBytes(nvGetValue('NeuraVeil_reasoning', '')) +
                    this.getStorageBytes(nvGetValue('NeuraVeil_pollinations_model_catalog', '')) +
                    this.getStorageBytes(nvGetValue(this.GENERATED_IMAGE_CACHE_KEY, '')) +
                    this.getStorageBytes(nvGetValue('NeuraVeil_trigger_pos', '')) +
                    this.getStorageBytes(nvGetValue('NeuraVeil_sidebar_side', '')) +
                    this.getStorageBytes(nvGetValue('NeuraVeil_sidebar_width', ''));
            }
            const used = Math.min(total, conversationsBytes + settingsBytes);
            const remaining = Math.max(0, total - used);

            const focus = this.state.storageFocus || '';
            const showBytes = focus === 'conversations'
                ? conversationsBytes
                : (focus === 'settings' ? settingsBytes : used);
            const percent = total ? Math.round((showBytes / total) * 100) : 0;

            if (refs.used) refs.used.textContent = this.formatBytes(showBytes);
            if (refs.total) refs.total.textContent = `${percent}%`;
            if (refs.remaining) refs.remaining.textContent = `Remaining ${this.formatBytes(remaining)} / ${this.formatBytes(total)}`;

            const r = 36;
            const circumference = 2 * Math.PI * r;
            const convLen = Math.min(circumference, (conversationsBytes / total) * circumference);
            const settingsLen = Math.min(circumference - convLen, (settingsBytes / total) * circumference);

            if (refs.conv) {
                const len = focus === 'settings' ? 0 : convLen;
                refs.conv.setAttribute('stroke-dasharray', `${len} ${circumference}`);
                refs.conv.setAttribute('stroke-dashoffset', '0');
                refs.conv.style.opacity = len > 0 ? '1' : '0';
            }
            if (refs.settings) {
                const len = focus === 'conversations' ? 0 : settingsLen;
                refs.settings.setAttribute('stroke-dasharray', `${len} ${circumference}`);
                refs.settings.setAttribute('stroke-dashoffset', `${focus === 'settings' ? 0 : -convLen}`);
                refs.settings.style.opacity = len > 0 ? '1' : '0';
            }
        }

        loadSavedStyle() {
            const savedStyle = nvGetValue('NeuraVeil_style', 'default');
            if (this.STYLE_OPTIONS.some(option => option.id === savedStyle)) {
                this.state.responseStyle = savedStyle;
            }
            this.applyActiveStyle();
        }

        loadSavedSidebarSide() {
            const savedSide = nvGetValue('NeuraVeil_sidebar_side', 'right');
            if (savedSide === 'left' || savedSide === 'right') {
                this.state.sidebarSide = savedSide;
            }
            this.applySidebarSide();
        }

        loadSavedSidebarWidth() {
            const savedWidth = Number(nvGetValue('NeuraVeil_sidebar_width', this.SIDEBAR_WIDTH));
            if (!Number.isNaN(savedWidth)) {
                this.state.sidebarWidth = this.clampSidebarWidth(savedWidth);
            }
        }

        setResponseStyle(styleId) {
            if (!this.STYLE_OPTIONS.some(option => option.id === styleId)) return;
            this.state.responseStyle = styleId;
            nvSetValue('NeuraVeil_style', styleId);
            this.applyActiveStyle();
        }

        applyActiveStyle() {
            const items = this.elements.settingsList.querySelectorAll('.nv-settings-item');
            items.forEach((item) => {
                item.classList.toggle('active', item.dataset.style === this.state.responseStyle);
            });
            const toggle = this.elements.settingsList.querySelector('#nv-style-toggle');
            const selected = this.STYLE_OPTIONS.find(option => option.id === this.state.responseStyle);
            if (toggle && selected) {
                const label = toggle.querySelector('.nv-settings-label');
                const desc = toggle.querySelector('.nv-settings-desc');
                if (label) label.textContent = selected.label;
                if (desc) desc.textContent = selected.desc;
            }
        }

        applySidebarSide() {
            if (!this.elements.panel) return;
            const isLeft = this.state.sidebarSide === 'left';
            this.elements.panel.classList.toggle('sidebar-left', isLeft);
            this.applySidebarWidth();
        }

        toggleSidebarSide(animate = false) {
            const nextSide = this.state.sidebarSide === 'left' ? 'right' : 'left';
            this.setSidebarSide(nextSide, animate);
        }

        setSidebarSide(side, animate = false) {
            if (side !== 'left' && side !== 'right') return;
            if (this.state.sidebarSide === side) return;

            const applySide = () => {
                this.state.sidebarSide = side;
                nvSetValue('NeuraVeil_sidebar_side', side);
                this.applySidebarSide();
            };

            if (animate && this.state.isSidebar && this.state.isOpen) {
                this.elements.panel.classList.remove('open');
                this.elements.panel.classList.add('animating-out');
                setTimeout(() => {
                    applySide();
                    this.elements.panel.classList.remove('animating-out');
                    this.elements.panel.classList.add('open');
                }, 360);
                return;
            }

            applySide();
        }

        clampSidebarWidth(value) {
            return Math.min(this.MAX_SIDEBAR_WIDTH, Math.max(this.MIN_SIDEBAR_WIDTH, value));
        }

        applySidebarWidth() {
            if (!this.elements.panel) return;
            if (this.state.isSidebar) {
                if (this.state.isSidebarCollapsed) {
                    this.elements.panel.style.width = `${this.SIDEBAR_RAIL_WIDTH}px`;
                } else {
                    const width = this.clampSidebarWidth(this.state.sidebarWidth || this.SIDEBAR_WIDTH);
                    this.state.sidebarWidth = width;
                    this.elements.panel.style.width = `${width}px`;
                }
            } else {
                this.elements.panel.style.width = '';
            }
            this.updateSidebarResizer();
            this.updateBodyOffset();
        }

        updateSidebarResizer() {
            const resizer = this.elements.sidebarResizer;
            if (!resizer) return;
            if (!this.state.isSidebar || this.state.isSidebarCollapsed) {
                resizer.style.display = 'none';
                return;
            }
            resizer.style.display = 'block';
            if (this.state.sidebarSide === 'left') {
                resizer.style.left = '';
                resizer.style.right = '0';
            } else {
                resizer.style.right = '';
                resizer.style.left = '0';
            }
        }

        temporarilyHideSidebarArrow() {
            const toggle = this.elements.sidebarBtn?.closest('.nv-sidebar-toggle');
            if (!toggle) return;
            toggle.classList.add('arrow-hidden');
            setTimeout(() => {
                toggle.classList.remove('arrow-hidden');
            }, 600);
        }

        autoResizeInput() {
            if (!this.elements.input) return;
            const el = this.elements.input;

            // Reset to 1 row to get accurate scrollHeight
            el.rows = 1;

            const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20;
            const padding = parseFloat(getComputedStyle(el).paddingTop) + parseFloat(getComputedStyle(el).paddingBottom);

            // Calculate how many rows we need
            const contentHeight = el.scrollHeight - padding;
            const calculatedRows = Math.ceil(contentHeight / lineHeight);

            // Limit to INPUT_MAX_ROWS (5)
            const newRows = Math.min(calculatedRows, this.INPUT_MAX_ROWS);
            el.rows = newRows;

            // Enable scroll if content exceeds max rows
            if (calculatedRows > this.INPUT_MAX_ROWS) {
                el.style.overflowY = 'auto';
            } else {
                el.style.overflowY = 'hidden';
            }
        }

        adjustHeight() {
            this.autoResizeInput();
            // Scroll to bottom of textarea
            if (this.elements.input) {
                this.elements.input.scrollTop = this.elements.input.scrollHeight;
            }
        }

        getGlobalLibrary(name) {
            try {
                if (name === 'DOMPurify' && typeof DOMPurify !== 'undefined') return DOMPurify;
                if (name === 'Readability' && typeof Readability !== 'undefined') return Readability;
                if (name === 'TurndownService' && typeof TurndownService !== 'undefined') return TurndownService;
                if (name === 'Fuse' && typeof Fuse !== 'undefined') return Fuse;
            } catch (e) {
                // fallback below
            }

            const scopes = [
                typeof globalThis !== 'undefined' ? globalThis : null,
                typeof window !== 'undefined' ? window : null,
                typeof unsafeWindow !== 'undefined' ? unsafeWindow : null
            ].filter(Boolean);

            for (const scope of scopes) {
                if (scope && scope[name]) return scope[name];
            }
            return null;
        }

        setPageAnalyzeLoading(active) {
            this.state.isPageAnalyzing = Boolean(active);
            const btn = this.elements.pageAnalyzeBtn;
            if (!btn) return;
            btn.classList.toggle('nv-loading', this.state.isPageAnalyzing);
            btn.disabled = this.state.isPageAnalyzing;
            if (this.state.isPageAnalyzing) {
                btn.title = 'Analyzing page...';
            } else {
                btn.title = this.state.isPageContextActive ? 'Page context active - click to detach' : 'Analyze this page';
            }
        }

        setPageContextActive(active, pageContext = null) {
            this.state.isPageContextActive = Boolean(active && pageContext);
            this.state.pageContext = this.state.isPageContextActive ? pageContext : null;

            const btn = this.elements.pageAnalyzeBtn;
            if (!btn) return;
            btn.classList.toggle('active', this.state.isPageContextActive);
            btn.setAttribute('aria-pressed', this.state.isPageContextActive ? 'true' : 'false');
            btn.title = this.state.isPageContextActive ? 'Page context active - click to detach' : 'Analyze this page';
        }

        async handleAnalyzePage() {
            if (this.state.isPageAnalyzing || this.isChatLoading(this.currentChatId)) return;

            if (this.state.isPageContextActive) {
                this.setPageContextActive(false);
                return;
            }

            this.clearTrailingErrorMessage();
            this.setPageAnalyzeLoading(true);

            try {
                const pageContext = this.extractActivePageContext();
                if (!pageContext?.content) {
                    throw new Error('No readable page content found.');
                }

                this.setPageContextActive(true, pageContext);
            } catch (error) {
                this.setPageContextActive(false);
                this.appendMessage('assistant', `Error • Unable to attach this page. ${error.message || 'Try again on a readable page.'}`);
                console.error('NeuraVeil Page Analysis Error:', error);
            } finally {
                this.setPageAnalyzeLoading(false);
            }
        }

        extractActivePageContext() {
            const pageUrl = location.href;
            const fallbackTitle = this.normalizeSpace(document.title || location.hostname);
            const ReadabilityCtor = this.getGlobalLibrary('Readability');
            let article = null;
            const visibleBlocks = this.extractVisiblePageBlocks();
            const visibleContent = this.normalizePageText(visibleBlocks.map(block => block.text).join('\n\n'));

            if (ReadabilityCtor) {
                try {
                    const docClone = document.cloneNode(true);
                    docClone.querySelector('#ghost-chat-host')?.remove();
                    docClone.querySelectorAll('script, style, noscript, iframe, canvas').forEach(node => node.remove());
                    article = new ReadabilityCtor(docClone, {
                        charThreshold: 160,
                        nbTopCandidates: 5,
                        keepClasses: false
                    }).parse();
                } catch (error) {
                    console.warn('NeuraVeil Readability failed, using fallback extraction.', error);
                    article = null;
                }
            }

            if (article && this.normalizeSpace(article.textContent || '').length >= 120) {
                const safeHtml = this.sanitizePageHtml(article.content || '');
                const markdown = this.htmlToMarkdown(safeHtml);
                const content = this.buildCombinedPageContent(
                    markdown || this.normalizePageText(article.textContent || ''),
                    visibleContent
                );

                return {
                    title: this.normalizeSpace(article.title || fallbackTitle),
                    byline: this.normalizeSpace(article.byline || ''),
                    excerpt: this.normalizeSpace(article.excerpt || ''),
                    siteName: this.normalizeSpace(article.siteName || location.hostname),
                    lang: this.normalizeSpace(article.lang || document.documentElement.lang || ''),
                    url: pageUrl,
                    content,
                    blocks: this.buildPageSearchBlocks(content, visibleBlocks)
                };
            }

            return {
                title: fallbackTitle,
                byline: '',
                excerpt: '',
                siteName: location.hostname,
                lang: this.normalizeSpace(document.documentElement.lang || ''),
                url: pageUrl,
                content: this.truncateText(visibleContent, this.PAGE_CONTEXT_MAX_CHARS),
                blocks: this.buildPageSearchBlocks(visibleContent, visibleBlocks)
            };
        }

        buildCombinedPageContent(readabilityText, visibleText) {
            const main = this.normalizePageText(readabilityText || '');
            const visible = this.normalizePageText(visibleText || '');
            if (!main) return this.truncateText(visible, this.PAGE_CONTEXT_MAX_CHARS);
            if (!visible) return this.truncateText(main, this.PAGE_CONTEXT_MAX_CHARS);

            const normalizedMain = main.toLowerCase();
            const visibleLines = visible
                .split(/\n{2,}/)
                .map(line => this.normalizePageText(line))
                .filter(Boolean)
                .filter(line => !normalizedMain.includes(line.toLowerCase()));

            const visibleSupplement = visibleLines.slice(0, this.PAGE_FALLBACK_MAX_NODES).join('\n\n');
            return this.truncateText([
                'Readable article extract:',
                main,
                visibleSupplement ? '\nVisible page supplement, including navigation cards, captions, images, tables, and portal blocks:' : '',
                visibleSupplement
            ].filter(Boolean).join('\n\n'), this.PAGE_CONTEXT_MAX_CHARS);
        }

        buildPageSearchBlocks(content, visibleBlocks = []) {
            const blocks = [];
            const add = (text, type = 'text', label = '') => {
                const clean = this.normalizePageText(text || '');
                if (!clean || clean.length < 12) return;
                if (blocks.some(block => block.text.toLowerCase() === clean.toLowerCase())) return;
                blocks.push({ text: clean, type, label });
            };

            visibleBlocks.forEach((block) => {
                const clean = this.normalizePageText(block.text || '');
                if (!clean || clean.length < 12) return;
                if (blocks.some(existing => existing.text.toLowerCase() === clean.toLowerCase())) return;
                blocks.push({
                    text: clean,
                    type: block.type || 'visible',
                    label: block.label || '',
                    imageUrl: block.imageUrl || '',
                    imageFullUrl: block.imageFullUrl || block.imageUrl || ''
                });
            });
            this.normalizePageText(content || '')
                .split(/\n{2,}/)
                .map(part => part.trim())
                .filter(Boolean)
                .forEach((part) => add(part, 'content', ''));

            return blocks.slice(0, 700);
        }

        searchPageContext(userText, page) {
            const query = this.normalizeSpace(userText || '');
            const blocks = Array.isArray(page?.blocks) ? page.blocks : [];
            if (!query || !blocks.length) return [];

            const queryTerms = this.getExpandedPageQueryTerms(query);
            const FuseCtor = this.getGlobalLibrary('Fuse');
            if (FuseCtor) {
                try {
                    const fuse = new FuseCtor(blocks, {
                        includeScore: true,
                        shouldSort: true,
                        ignoreLocation: true,
                        threshold: 0.44,
                        minMatchCharLength: 2,
                        keys: [
                            { name: 'label', weight: 0.38 },
                            { name: 'text', weight: 0.62 }
                        ]
                    });
                    const fuseResults = fuse.search(query)
                        .slice(0, 10)
                        .map(result => ({
                            ...result.item,
                            score: Math.max(0, 1 - (result.score || 0.5))
                        }))
                        .filter(result => result.score >= 0.58);
                    const extraResults = this.scorePageBlocks(blocks, queryTerms);
                    return this.mergePageSearchResults([...fuseResults, ...extraResults]).slice(0, 8);
                } catch (error) {
                    console.warn('NeuraVeil page Fuse search failed, using fallback.', error);
                }
            }

            return this.scorePageBlocks(blocks, queryTerms).slice(0, 8);
        }

        scorePageBlocks(blocks, queryTerms) {
            if (!queryTerms.length) return [];
            return blocks
                .map((block) => {
                    const searchText = this.normalizeSearchText(`${block.label || ''} ${block.text || ''}`);
                    let score = 0;
                    queryTerms.forEach((term) => {
                        if (!term) return;
                        if (searchText.includes(term)) {
                            score += term.length > 5 ? 3 : 2;
                            return;
                        }
                        const tokens = this.tokenizeSearchText(searchText);
                        if (this.hasApproximateTokenMatch(term, tokens)) score += 1;
                    });
                    if (block.type === 'section') score *= 1.25;
                    if (block.type === 'image') score *= 1.2;
                    return { ...block, score };
                })
                .filter(block => block.score > 0)
                .sort((a, b) => b.score - a.score);
        }

        mergePageSearchResults(results) {
            const merged = [];
            const seen = new Set();
            results
                .sort((a, b) => (b.score || 0) - (a.score || 0))
                .forEach((item) => {
                    const key = this.normalizeSearchText(item.text || '').slice(0, 220);
                    if (!key || seen.has(key)) return;
                    seen.add(key);
                    merged.push(item);
                });
            return merged;
        }

        getExpandedPageQueryTerms(query) {
            const stopwords = new Set([
                'qu', 'que', 'quel', 'quelle', 'quels', 'quelles', 'elle', 'il', 'est', 'sont',
                'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'd', 'l',
                'ce', 'cet', 'cette', 'ces', 'sur', 'dans', 'avec', 'pour', 'par',
                'what', 'which', 'the', 'is', 'are', 'a', 'an', 'of', 'on', 'in', 'to'
            ]);
            const base = this.normalizeSearchText(query)
                .split(/\s+/)
                .filter(term => term.length >= 2 && !stopwords.has(term));
            const joined = base.join(' ');
            const extra = [];
            if (/image|photo|illustration|media|fichier|file|caption|legende|label/.test(joined)) {
                extra.push('image', 'photo', 'fichier', 'caption', 'legende', 'thumbcaption', 'gallery');
            }
            if (/jour|daily|today|day/.test(joined)) {
                extra.push('jour', 'daily', 'today');
            }
            if (/label|labellis|featured|quality|qualite/.test(joined)) {
                extra.push('label', 'labellisee', 'featured', 'qualite', 'quality');
            }
            return [...new Set([...base, ...extra])].slice(0, 18);
        }

        normalizeSearchText(text) {
            return String(text || '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .replace(/[^\p{L}\p{N}\s_-]+/gu, ' ')
                .replace(/[_-]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }

        sanitizePageHtml(html) {
            const source = String(html || '');
            if (!source) return '';
            const purifier = this.getGlobalLibrary('DOMPurify');
            if (!purifier || typeof purifier.sanitize !== 'function') return source;

            return purifier.sanitize(source, {
                ALLOWED_TAGS: [
                    'article', 'section', 'div', 'p', 'br', 'h1', 'h2', 'h3', 'h4',
                    'ul', 'ol', 'li', 'blockquote', 'pre', 'code', 'table', 'thead',
                    'tbody', 'tr', 'th', 'td', 'a', 'strong', 'b', 'em', 'i'
                ],
                ALLOWED_ATTR: ['href', 'title']
            });
        }

        htmlToMarkdown(html) {
            const source = String(html || '');
            if (!source) return '';
            const Turndown = this.getGlobalLibrary('TurndownService');
            if (!Turndown) {
                return this.normalizePageText(source.replace(/<[^>]+>/g, ' '));
            }

            try {
                const turndown = new Turndown({
                    headingStyle: 'atx',
                    codeBlockStyle: 'fenced',
                    bulletListMarker: '-'
                });
                turndown.remove(['script', 'style', 'noscript']);
                return this.normalizePageText(turndown.turndown(source));
            } catch (error) {
                console.warn('NeuraVeil Turndown failed, using text fallback.', error);
                return this.normalizePageText(source.replace(/<[^>]+>/g, ' '));
            }
        }

        extractVisiblePageText() {
            return this.normalizePageText(this.extractVisiblePageBlocks().map(block => block.text).join('\n\n'));
        }

        extractVisiblePageBlocks() {
            const roots = [
                document.querySelector('main'),
                document.querySelector('article'),
                document.querySelector('[role="main"]'),
                document.querySelector('#content'),
                document.querySelector('#mw-content-text'),
                document.body
            ].filter(Boolean);
            const root = roots.find(Boolean);
            if (!root) return [];

            const blocks = [];
            const seen = new Set();
            const addBlock = (rawText, options = {}) => {
                const text = this.normalizeSpace(rawText || '');
                if (!text) return;
                const minLength = options.allowShort ? 3 : 24;
                if (text.length < minLength) return;
                if (text.length > 1200 && !options.allowLong) return;
                const key = text.toLowerCase();
                if (seen.has(key)) return;
                const duplicate = blocks.some((existing) => {
                    const existingText = existing?.text || '';
                    const lower = existingText.toLowerCase();
                    if (lower === key) return true;
                    if (text.length < 180 && lower.includes(key)) return true;
                    if (existingText.length > 40 && key.includes(lower) && text.length <= existingText.length + 30) return true;
                    return false;
                });
                if (duplicate) return;
                seen.add(key);
                blocks.push({
                    text,
                    type: options.type || 'text',
                    label: options.label || '',
                    imageUrl: options.imageUrl || '',
                    imageFullUrl: options.imageFullUrl || ''
                });
            };

            this.extractHeadingSectionBlocks(root).forEach((section) => {
                if (blocks.length >= this.PAGE_FALLBACK_MAX_NODES) return;
                addBlock(section.text, { allowShort: false, allowLong: true, type: 'section', label: section.heading });
            });

            root.querySelectorAll('img, picture img, figure img, .thumb img, .gallerybox img').forEach((img) => {
                if (blocks.length >= this.PAGE_FALLBACK_MAX_NODES) return;
                if (img.closest('#ghost-chat-host')) return;
                if (!this.isVisiblePageNode(img)) return;
                const imageData = this.extractImageContextData(img);
                addBlock(imageData.text, {
                    allowShort: false,
                    type: 'image',
                    label: 'Image',
                    imageUrl: imageData.url,
                    imageFullUrl: imageData.fullUrl
                });
            });

            const selector = [
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                '[role="heading"]',
                'p', 'li', 'blockquote', 'pre', 'td', 'th', 'dt', 'dd',
                'figcaption', 'caption', 'summary',
                '.thumbcaption', '.gallerytext', '.mw-parser-output .legend',
                'div', 'section'
            ].join(',');
            const nodes = Array.from(root.querySelectorAll(selector)).slice(0, this.PAGE_FALLBACK_MAX_NODES * 8);

            for (const node of nodes) {
                if (blocks.length >= this.PAGE_FALLBACK_MAX_NODES) break;
                if (node.closest('#ghost-chat-host')) continue;
                const text = this.normalizeSpace(node.textContent || '');
                if (!this.isVisiblePageNode(node)) continue;
                const tag = String(node.tagName || '').toUpperCase();
                const isHeading = /^H[1-6]$/.test(tag) || node.getAttribute('role') === 'heading';
                const isLooseContainer = tag === 'DIV' || tag === 'SECTION';
                if (isLooseContainer) {
                    if (text.length < 32 || text.length > 520) continue;
                    const childBlockCount = node.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,td,th,figcaption,.thumbcaption,.gallerytext,div,section').length;
                    if (childBlockCount > 10) continue;
                }
                addBlock(text, {
                    allowShort: isHeading,
                    allowLong: tag === 'PRE',
                    type: isHeading ? 'heading' : 'text',
                    label: isHeading ? text : ''
                });
            }

            return blocks;
        }

        extractHeadingSectionBlocks(root) {
            const sections = [];
            const headings = Array.from(root.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"],.mw-heading'));

            headings.forEach((heading) => {
                if (sections.length >= 80) return;
                if (heading.closest('#ghost-chat-host')) return;
                if (!this.isVisiblePageNode(heading)) return;

                const headingText = this.normalizeSpace(heading.textContent || '');
                if (!headingText || headingText.length < 3) return;

                const level = this.getHeadingLevel(heading);
                const parts = [headingText];
                let cursor = heading.nextElementSibling;
                let guard = 0;

                while (cursor && guard < 16 && parts.join(' ').length < 1600) {
                    guard += 1;
                    if (cursor.closest?.('#ghost-chat-host')) {
                        cursor = cursor.nextElementSibling;
                        continue;
                    }
                    const cursorLevel = this.getHeadingLevel(cursor);
                    if (cursorLevel && cursorLevel <= level) break;
                    if (this.isVisiblePageNode(cursor)) {
                        const text = this.normalizeSpace(cursor.textContent || '');
                        if (text && text.length >= 3 && text.length <= 1200) parts.push(text);
                        cursor.querySelectorAll?.('img').forEach((img) => {
                            const imageText = this.extractImageContextText(img);
                            if (imageText) parts.push(imageText);
                        });
                    }
                    cursor = cursor.nextElementSibling;
                }

                const sectionText = this.normalizeSpace(parts.join('\n'));
                if (sectionText.length > headingText.length + 12) {
                    sections.push({ heading: headingText, text: sectionText });
                }
            });

            return sections;
        }

        getHeadingLevel(node) {
            if (!node) return 0;
            const tag = String(node.tagName || '').toUpperCase();
            const match = tag.match(/^H([1-6])$/);
            if (match) return Number(match[1]);
            if (node.getAttribute?.('role') === 'heading') {
                const ariaLevel = Number(node.getAttribute('aria-level'));
                return Number.isFinite(ariaLevel) && ariaLevel > 0 ? ariaLevel : 3;
            }
            if (node.classList?.contains('mw-heading')) {
                const childHeading = node.querySelector('h1,h2,h3,h4,h5,h6');
                return childHeading ? this.getHeadingLevel(childHeading) : 3;
            }
            return 0;
        }

        extractImageContextText(img) {
            return this.extractImageContextData(img).text;
        }

        extractImageContextData(img) {
            const parts = [];
            const alt = this.normalizeSpace(img.getAttribute('alt') || '');
            const title = this.normalizeSpace(img.getAttribute('title') || '');
            const aria = this.normalizeSpace(img.getAttribute('aria-label') || '');
            [alt, title, aria].forEach((value) => {
                if (value && !parts.includes(value)) parts.push(value);
            });

            const contextNode = img.closest('figure, .thumb, .gallerybox, .image, .infobox, td, li, div');
            const captionNode = contextNode?.querySelector('figcaption, .thumbcaption, .gallerytext, caption');
            const caption = this.normalizeSpace(captionNode?.textContent || '');
            if (caption && !parts.some(part => part.includes(caption))) parts.push(caption);

            const nearbyText = this.normalizeSpace(contextNode?.textContent || '');
            if (nearbyText && nearbyText.length <= 360 && !parts.some(part => part.includes(nearbyText))) {
                parts.push(nearbyText);
            }

            const urls = this.getImageCandidateUrls(img);
            const previewUrl = urls.preview || '';
            const fullUrl = urls.full || previewUrl;
            if (previewUrl) parts.push(`Image URL: ${previewUrl}`);
            if (fullUrl && fullUrl !== previewUrl) parts.push(`Full image URL: ${fullUrl}`);

            if (!parts.length) return { text: '', url: '', fullUrl: '' };
            return {
                text: `Image: ${parts.join(' | ')}`,
                url: previewUrl,
                fullUrl
            };
        }

        getImageCandidateUrls(img) {
            if (!img) return { preview: '', full: '' };
            const fromSrcset = this.pickLargestSrcsetUrl(img.getAttribute('srcset') || '');
            const fromDataSrcset = this.pickLargestSrcsetUrl(img.getAttribute('data-srcset') || '');
            const candidates = [
                img.currentSrc,
                img.getAttribute('src'),
                img.getAttribute('data-src'),
                img.getAttribute('data-lazy-src'),
                fromSrcset,
                fromDataSrcset
            ].map((url) => this.resolvePageAssetUrl(url)).filter(Boolean);

            const preview = candidates.find(url => !/^data:/i.test(url)) || '';
            const link = img.closest('a[href]');
            const linked = this.resolvePageAssetUrl(link?.getAttribute('href') || '');
            const full = linked && /\.(?:png|jpe?g|gif|webp|svg)(?:[?#].*)?$/i.test(linked)
                ? linked
                : (candidates[candidates.length - 1] || preview);
            return { preview, full };
        }

        pickLargestSrcsetUrl(srcset) {
            const entries = String(srcset || '')
                .split(',')
                .map(part => part.trim())
                .filter(Boolean)
                .map((part) => {
                    const pieces = part.split(/\s+/);
                    const url = pieces[0] || '';
                    const descriptor = pieces[1] || '';
                    const widthMatch = descriptor.match(/^(\d+)w$/);
                    const densityMatch = descriptor.match(/^([\d.]+)x$/);
                    const score = widthMatch ? Number(widthMatch[1]) : (densityMatch ? Number(densityMatch[1]) * 1000 : 0);
                    return { url, score };
                })
                .filter(entry => entry.url);
            if (!entries.length) return '';
            entries.sort((a, b) => b.score - a.score);
            return entries[0].url;
        }

        resolvePageAssetUrl(rawUrl) {
            const raw = String(rawUrl || '').trim();
            if (!raw || /^data:/i.test(raw)) return '';
            try {
                const parsed = new URL(raw, window.location.href);
                if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return parsed.toString();
            } catch (e) {
                return '';
            }
            return '';
        }

        isVisiblePageNode(node) {
            try {
                const style = window.getComputedStyle(node);
                if (!style || style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) {
                    return false;
                }
                const rect = node.getBoundingClientRect();
                return rect.width > 0 && rect.height > 0;
            } catch (e) {
                return true;
            }
        }

        buildPageAnalysisPrompt(page) {
            const meta = [
                `Title: ${page.title || 'Untitled page'}`,
                `URL: ${page.url}`,
                page.siteName ? `Site: ${page.siteName}` : '',
                page.byline ? `Byline: ${page.byline}` : '',
                page.lang ? `Language: ${page.lang}` : '',
                page.excerpt ? `Excerpt: ${page.excerpt}` : ''
            ].filter(Boolean).join('\n');

            return [
                'Analyze the active webpage from the extracted content below.',
                'Also keep this page in mind for the next user questions in this conversation.',
                'Answer in the same language as the user or the page when obvious.',
                'Be concise but useful: give a short summary, key points, and anything important to verify.',
                'End with 2 or 3 short examples of questions the user can ask about this page.',
                'If the extraction seems incomplete, say so clearly.',
                '',
                meta,
                '',
                'Extracted page content:',
                page.content
            ].join('\n');
        }

        buildPageContextSystemPrompt(page, userText = '') {
            const meta = [
                `Title: ${page.title || 'Untitled page'}`,
                `URL: ${page.url}`,
                page.siteName ? `Site: ${page.siteName}` : '',
                page.byline ? `Byline: ${page.byline}` : '',
                page.lang ? `Language: ${page.lang}` : '',
                page.excerpt ? `Excerpt: ${page.excerpt}` : ''
            ].filter(Boolean).join('\n');
            const matches = this.searchPageContext(userText, page);
            const relevantMatches = matches.length
                ? matches.map((match, index) => {
                    const label = match.label ? ` (${match.label})` : '';
                    const imageUrl = match.imageFullUrl || match.imageUrl || this.extractFirstUrl(match.text || '');
                    const imageLine = imageUrl ? `\nImage URL to use if the user asks to show this image: ${imageUrl}` : '';
                    return `${index + 1}. [${match.type || 'page'}${label}] ${this.truncateText(match.text, 900)}${imageLine}`;
                }).join('\n\n')
                : 'No strong local page match was found for the user question.';
            const responseLanguage = this.detectResponseLanguage(userText);

            return [
                'Page context mode is active.',
                `Detected latest user language: ${responseLanguage}. Answer in that language. If the user writes in French, answer in French.`,
                'For questions about what is on the current page, answer only from the extracted webpage content and metadata below.',
                'Do not use memory, web knowledge, or guesses to replace page-specific facts such as labels, titles, image captions, featured items, dates, names, counts, or visible sections.',
                'If the user asks for an exact quote, citation, phrase, caption, label, or visible item, copy only wording that appears in the extracted content.',
                'If the user asks to show/display an image from the page, use the Image URL from the relevant local match with this exact tool syntax: [tool:show_image url="IMAGE_URL" alt="short caption"].',
                'Never use data:image/gif placeholders as final image URLs.',
                'If the answer is not present in the extracted content, say that it is not visible in the extracted page context. Do not invent a plausible answer.',
                'Start with the relevant local matches below; they are the best candidates found by NeuraVeil in the page.',
                'If the question is general and not page-specific, you may answer normally while using the page as optional context.',
                'When useful, mention that the answer comes from the page context.',
                '',
                'Active page metadata:',
                meta,
                '',
                'Relevant local page matches:',
                relevantMatches,
                '',
                'Extracted page content:',
                page.content
            ].join('\n');
        }

        normalizePageText(text) {
            return String(text || '')
                .replace(/\r\n/g, '\n')
                .replace(/\r/g, '\n')
                .replace(/[ \t]+\n/g, '\n')
                .replace(/\n{3,}/g, '\n\n')
                .replace(/[ \t]{2,}/g, ' ')
                .trim();
        }

        normalizeSpace(text) {
            return String(text || '').replace(/\s+/g, ' ').trim();
        }

        truncateText(text, maxChars = 1000) {
            const source = String(text || '').trim();
            const limit = Math.max(80, Number(maxChars) || 1000);
            if (source.length <= limit) return source;
            return `${source.slice(0, limit - 1).trim()}…`;
        }

        async fetchTextAsset(url) {
            try {
                const response = await this.request(url);
                if (!response || !response.ok) return '';
                return await response.text();
            } catch (e) {
                return '';
            }
        }

        shouldBypassCdnAssetInjection() {
            const hostname = String(window.location?.hostname || '').toLowerCase();
            return hostname === 'github.com' ||
                hostname === 'gist.github.com' ||
                hostname.endsWith('.github.com');
        }

        shouldUseCustomMusicPlayback() {
            return this.shouldBypassCdnAssetInjection();
        }

        injectHighlightCss(cssText) {
            if (!cssText || !this.shadow) return;
            const style = document.createElement('style');
            style.textContent = cssText;
            this.shadow.appendChild(style);
        }

        injectKatexCss(cssText) {
            if (!cssText || !this.shadow) return;
            const style = document.createElement('style');
            style.textContent = cssText;
            this.shadow.appendChild(style);
        }

        getRuntimeHighlightInstance() {
            if (typeof hljs !== 'undefined') return hljs;
            if (typeof globalThis !== 'undefined' && globalThis.hljs) return globalThis.hljs;
            if (typeof window !== 'undefined' && window.hljs) return window.hljs;
            return null;
        }

        getRuntimeKatexInstance() {
            if (typeof katex !== 'undefined') return katex;
            if (typeof globalThis !== 'undefined' && globalThis.katex) return globalThis.katex;
            if (typeof window !== 'undefined' && window.katex) return window.katex;
            return null;
        }

        getRuntimeKatexAutoRender() {
            if (typeof renderMathInElement !== 'undefined') return renderMathInElement;
            if (typeof globalThis !== 'undefined' && globalThis.renderMathInElement) return globalThis.renderMathInElement;
            if (typeof window !== 'undefined' && window.renderMathInElement) return window.renderMathInElement;
            return null;
        }

        loadHighlightCdnCss() {
            if (this.hljsCssLoaded) return Promise.resolve(true);
            if (this.hljsCdnCssReady) return this.hljsCdnCssReady;
            this.hljsCdnCssReady = new Promise((resolve) => {
                if (!this.shadow) {
                    resolve(false);
                    return;
                }
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = this.HLJS_CSS_URL;
                link.onload = () => {
                    this.hljsCssLoaded = true;
                    resolve(true);
                };
                link.onerror = () => resolve(false);
                this.shadow.appendChild(link);
            });
            return this.hljsCdnCssReady;
        }

        loadHighlightCdnScript() {
            if (this.hljsInstance) return Promise.resolve(this.hljsInstance);
            const runtimeHljs = this.getRuntimeHighlightInstance();
            if (runtimeHljs) {
                this.hljsInstance = runtimeHljs;
                return Promise.resolve(this.hljsInstance);
            }
            if (this.hljsCdnScriptReady) return this.hljsCdnScriptReady;
            this.hljsCdnScriptReady = new Promise((resolve) => {
                if (!this.shadow) {
                    resolve(null);
                    return;
                }
                const script = document.createElement('script');
                script.src = this.HLJS_JS_URL;
                script.onload = () => {
                    this.hljsInstance = this.getRuntimeHighlightInstance();
                    resolve(this.hljsInstance);
                };
                script.onerror = () => resolve(null);
                this.shadow.appendChild(script);
            });
            return this.hljsCdnScriptReady;
        }

        async loadHighlightFallbackCss() {
            if (this.hljsCssLoaded) return;
            const cssText = await this.fetchTextAsset(this.HLJS_CSS_URL);
            if (cssText) {
                this.injectHighlightCss(cssText);
                this.hljsCssLoaded = true;
            }
        }

        async loadHighlightFallbackScript() {
            if (this.hljsInstance) return this.hljsInstance;
            const runtimeHljs = this.getRuntimeHighlightInstance();
            if (runtimeHljs) {
                this.hljsInstance = runtimeHljs;
                return this.hljsInstance;
            }
            const scriptText = await this.fetchTextAsset(this.HLJS_JS_URL);
            if (!scriptText) return null;
            try {
                const target = typeof globalThis !== 'undefined' ? globalThis : window;
                const runner = new Function('target', `var window=target,self=target,globalThis=target,module=undefined,exports=undefined,define=undefined,require=undefined;\n${scriptText}\nreturn (typeof hljs !== "undefined" ? hljs : null) || target.hljs || null;`);
                const hljsApi = runner(target);
                this.hljsInstance = hljsApi || this.getRuntimeHighlightInstance() || null;
            } catch (e) {
                this.hljsInstance = null;
            }
            return this.hljsInstance;
        }

        applyHighlightFallback(container) {
            container.querySelectorAll('pre code').forEach(codeEl => {
                codeEl.classList.add('hljs');
            });
        }

        async ensureHighlight() {
            if (this.hljsReady) return this.hljsReady;
            this.hljsReady = (async () => {
                const bypassCdn = this.shouldBypassCdnAssetInjection();
                if (!bypassCdn) {
                    const cssLoaded = await this.loadHighlightCdnCss();
                    if (!cssLoaded) await this.loadHighlightFallbackCss();
                } else {
                    await this.loadHighlightFallbackCss();
                }

                const hljs = bypassCdn
                    ? await this.loadHighlightFallbackScript()
                    : await this.loadHighlightCdnScript();
                if (hljs) return hljs;
                return await this.loadHighlightFallbackScript();
            })();
            return this.hljsReady;
        }

        loadKatexCdnCss() {
            if (this.katexCssLoaded) return Promise.resolve(true);
            if (this.katexCdnCssReady) return this.katexCdnCssReady;
            this.katexCdnCssReady = new Promise((resolve) => {
                if (!this.shadow) {
                    resolve(false);
                    return;
                }
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = this.KATEX_CSS_URL;
                link.onload = () => {
                    this.katexCssLoaded = true;
                    resolve(true);
                };
                link.onerror = () => resolve(false);
                this.shadow.appendChild(link);
            });
            return this.katexCdnCssReady;
        }

        loadKatexCdnScript() {
            if (this.katexInstance) return Promise.resolve(this.katexInstance);
            const runtimeKatex = this.getRuntimeKatexInstance();
            if (runtimeKatex) {
                this.katexInstance = runtimeKatex;
                return Promise.resolve(this.katexInstance);
            }
            if (this.katexCdnScriptReady) return this.katexCdnScriptReady;
            this.katexCdnScriptReady = new Promise((resolve) => {
                if (!this.shadow) {
                    resolve(null);
                    return;
                }
                const script = document.createElement('script');
                script.src = this.KATEX_JS_URL;
                script.onload = () => {
                    this.katexInstance = this.getRuntimeKatexInstance();
                    resolve(this.katexInstance);
                };
                script.onerror = () => resolve(null);
                this.shadow.appendChild(script);
            });
            return this.katexCdnScriptReady;
        }

        loadKatexCdnAutoRender() {
            if (this.katexAutoRender) return Promise.resolve(this.katexAutoRender);
            const runtimeAutoRender = this.getRuntimeKatexAutoRender();
            if (runtimeAutoRender) {
                this.katexAutoRender = runtimeAutoRender;
                return Promise.resolve(this.katexAutoRender);
            }
            if (this.katexCdnAutoReady) return this.katexCdnAutoReady;
            this.katexCdnAutoReady = new Promise((resolve) => {
                if (!this.shadow) {
                    resolve(null);
                    return;
                }
                const script = document.createElement('script');
                script.src = this.KATEX_AUTO_URL;
                script.onload = () => {
                    this.katexAutoRender = this.getRuntimeKatexAutoRender();
                    resolve(this.katexAutoRender);
                };
                script.onerror = () => resolve(null);
                this.shadow.appendChild(script);
            });
            return this.katexCdnAutoReady;
        }

        async loadKatexFallbackCss() {
            if (this.katexCssLoaded) return;
            const cssText = await this.fetchTextAsset(this.KATEX_CSS_URL);
            if (cssText) {
                this.injectKatexCss(cssText);
                this.katexCssLoaded = true;
            }
        }

        async loadKatexFallbackScript() {
            if (this.katexInstance) return this.katexInstance;
            const runtimeKatex = this.getRuntimeKatexInstance();
            if (runtimeKatex) {
                this.katexInstance = runtimeKatex;
                return this.katexInstance;
            }
            const scriptText = await this.fetchTextAsset(this.KATEX_JS_URL);
            if (!scriptText) return null;
            try {
                const target = typeof globalThis !== 'undefined' ? globalThis : window;
                const runner = new Function('target', `var window=target,self=target,globalThis=target,module=undefined,exports=undefined,define=undefined,require=undefined;\n${scriptText}\nreturn (typeof katex !== "undefined" ? katex : null) || target.katex || null;`);
                const katexApi = runner(target);
                this.katexInstance = katexApi || this.getRuntimeKatexInstance() || null;
            } catch (e) {
                this.katexInstance = null;
            }
            return this.katexInstance;
        }

        async loadKatexFallbackAutoRender() {
            if (this.katexAutoRender) return this.katexAutoRender;
            const runtimeAutoRender = this.getRuntimeKatexAutoRender();
            if (runtimeAutoRender) {
                this.katexAutoRender = runtimeAutoRender;
                return this.katexAutoRender;
            }
            const scriptText = await this.fetchTextAsset(this.KATEX_AUTO_URL);
            if (!scriptText) return null;
            try {
                const target = typeof globalThis !== 'undefined' ? globalThis : window;
                const runner = new Function('target', `var window=target,self=target,globalThis=target,module=undefined,exports=undefined,define=undefined,require=undefined;\n${scriptText}\nreturn (typeof renderMathInElement !== "undefined" ? renderMathInElement : null) || target.renderMathInElement || null;`);
                const render = runner(target);
                this.katexAutoRender = render || this.getRuntimeKatexAutoRender() || null;
            } catch (e) {
                this.katexAutoRender = null;
            }
            return this.katexAutoRender;
        }

        async ensureKatex() {
            if (this.katexReady) return this.katexReady;
            this.katexReady = (async () => {
                const bypassCdn = this.shouldBypassCdnAssetInjection();
                let katex = null;
                let autoRender = null;

                if (!bypassCdn) {
                    const cssLoaded = await this.loadKatexCdnCss();
                    if (!cssLoaded) await this.loadKatexFallbackCss();
                    katex = await this.loadKatexCdnScript();
                    autoRender = await this.loadKatexCdnAutoRender();
                    if (katex && autoRender) return { katex, renderMathInElement: autoRender };
                } else {
                    await this.loadKatexFallbackCss();
                }

                const fallbackKatex = katex || await this.loadKatexFallbackScript();
                const fallbackRender = autoRender || await this.loadKatexFallbackAutoRender();
                if (fallbackKatex && fallbackRender) return { katex: fallbackKatex, renderMathInElement: fallbackRender };
                return null;
            })();
            return this.katexReady;
        }

        applyMathTypesetting(container) {
            this.ensureKatex().then((api) => {
                if (!api || typeof api.renderMathInElement !== 'function') return;
                api.renderMathInElement(container, {
                    delimiters: [
                        { left: '$$', right: '$$', display: true },
                        { left: '\\[', right: '\\]', display: true },
                        { left: '\\begin{equation}', right: '\\end{equation}', display: true },
                        { left: '\\(', right: '\\)', display: false }
                    ],
                    throwOnError: false,
                    ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
                });
            });
        }

        applyHighlighting(container) {
            this.ensureHighlight().then((hljs) => {
                if (!hljs || typeof hljs.highlightElement !== 'function') {
                    this.applyHighlightFallback(container);
                    return;
                }
                container.querySelectorAll('pre code').forEach(codeEl => {
                    hljs.highlightElement(codeEl);
                });
            });
        }



        copyTextToClipboard(text, button, variant) {
            if (!text) return;
            const fallbackCopy = () => {
                const area = document.createElement('textarea');
                area.value = text;
                area.setAttribute('readonly', '');
                area.style.position = 'fixed';
                area.style.top = '-9999px';
                document.body.appendChild(area);
                area.select();
                try { document.execCommand('copy'); } catch (e) { /* ignore */ }
                if (area.parentNode) area.remove();
            };

            // Try modern API, but always run fallback immediately to stay in the user gesture.
            if (navigator.clipboard?.writeText) {
                navigator.clipboard.writeText(text).catch(() => { });
            }
            fallbackCopy();
            this.triggerCopyFeedback(button, variant);
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

        detectResponseLanguage(userText) {
            const text = String(userText || '').toLowerCase();
            if (!text.trim()) return 'the same language as the latest user message';
            if (/[àâäçéèêëîïôöùûüÿœ]/i.test(text)) return 'French';
            if (/\b(je|tu|vous|nous|il|elle|on|ce|ca|ça|cette|ces|des|du|de|la|le|les|un|une|est|sont|avec|dans|pour|quoi|quelle|quel|quand|comment|pourquoi|résume|resume|explique|montre|peux|peut|fais|fait|page|image)\b/i.test(text)) {
                return 'French';
            }
            return 'the same language as the latest user message';
        }

        getPollinationsImageSize(prompt = '', attrs = {}) {
            const attrWidth = Number(attrs.width || attrs.w || 0);
            const attrHeight = Number(attrs.height || attrs.h || 0);
            if (attrWidth >= 256 && attrHeight >= 256) {
                return {
                    width: Math.min(1536, Math.max(256, Math.round(attrWidth))),
                    height: Math.min(1536, Math.max(256, Math.round(attrHeight)))
                };
            }

            const text = `${prompt} ${attrs.aspect || attrs.ratio || attrs.format || ''}`.toLowerCase();
            if (/\b(16:9|wide|landscape|paysage|horizontal|banner|wallpaper|fond d'ecran|fond d’écran)\b/i.test(text)) {
                return { width: 1280, height: 720 };
            }
            if (/\b(9:16|portrait|vertical|phone|mobile|story|poster|affiche)\b/i.test(text)) {
                return { width: 768, height: 1152 };
            }
            if (/\b(4:3|presentation|slide)\b/i.test(text)) {
                return { width: 1152, height: 864 };
            }
            return { width: 1024, height: 1024 };
        }

        buildPollinationsImageUrl(prompt, attrs = {}) {
            const encoded = encodeURIComponent(prompt);
            const size = this.getPollinationsImageSize(prompt, attrs);
            const params = new URLSearchParams();
            const model = attrs.model || this.getPreferredImageModelSync();
            const seed = attrs.seed || Math.floor(Math.random() * 100000);

            params.set('model', model);
            params.set('width', String(size.width));
            params.set('height', String(size.height));
            params.set('seed', String(seed));
            params.set('enhance', attrs.enhance === 'false' ? 'false' : 'true');
            params.set('safe', attrs.safe === 'false' ? 'false' : 'true');
            params.set('nologo', 'true');
            params.set('referrer', this.POLLINATIONS_REFERRER);
            if (this.state.isGhostMode || attrs.private === 'true') params.set('private', 'true');

            return `https://image.pollinations.ai/prompt/${encoded}?${params.toString()}`;
        }

        normalizeMusicPrompt(raw) {
            const text = String(raw || '').replace(/\s+/g, ' ').trim();
            if (!text) return '';
            return text.length > 520 ? `${text.slice(0, 520).trim()}...` : text;
        }

        buildMusicTitle(prompt, attrs = {}) {
            const explicitTitle = String(attrs.title || attrs.name || '').trim();
            const source = explicitTitle || prompt || 'NeuraVeil Music';
            let title = String(source)
                .replace(/\s+/g, ' ')
                .replace(/^(cr[eé]e|g[eé]n[eè]re|compose|fais|produis|make|create|generate|compose|produce)\s+(moi\s+)?/i, '')
                .replace(/^(une?|des?|la|le|les|a|an|the)\s+/i, '')
                .trim();
            if (!title) title = 'NeuraVeil Music';
            return title.length > 72 ? `${title.slice(0, 69).trim()}...` : title;
        }

        musicSearchLooksExplicit(userText) {
            const text = String(userText || '').toLowerCase();
            if (!text.trim()) return false;
            if (/(sans\s+musique|pas\s+de\s+musique|no\s+music|without\s+music|ne\s+g[eé]n[eè]re\s+pas)/i.test(text)) return false;

            const searchWords = /(trouve|chercher?|recherche|montre|donne[-\s]?moi|j['’]?aimerais|je\s+veux|je\s+voudrais|find|search|look\s+for|show\s+me|give\s+me|i\s+want|i\s+need|quiero|busca|buscar)/i;
            const createWords = /(cr[eé]e|cr[ée]er|g[eé]n[eè]re|g[eé]n[eé]rer|compose|composer|fais|faire|produis|produire|make|create|generate|compose|write|produce|build)/i;
            const musicWords = /(musique|musiques|muique|muisque|musqiue|chanson|sons?|audio|beat|m[eé]lodie|instrumental|bande[\s-]?son|jingle|morceau|piste|track|song|music|soundtrack|melody|tune|instrumental|soundscape|m[uú]sica|canci[oó]n|melod[ií]a|lied|musik|suono)/i;
            const gameMusicWords = /(arcad|arcade|chiptune|8\s*bit|jeu|game|video\s*game|pixel)/i;
            const directMusicPhrase = /^(une?\s+)?(musique|chanson|beat|jingle|instrumental|soundtrack|song|music)\b/i;
            const asksAboutMusic = /(c['’]?\s*est\s+quoi|qu['’]?est[-\s]?ce|what\s+is|what['’]?s|explique|definition|d[eé]finition|histoire\s+de|parle\s+de|how\s+does|why\s+does)/i;

            return ((searchWords.test(text) || createWords.test(text)) && musicWords.test(text))
                || ((searchWords.test(text) || createWords.test(text)) && gameMusicWords.test(text))
                || (directMusicPhrase.test(text.trim()) && !asksAboutMusic.test(text) && text.length <= 120);
        }

        extractMusicPrompt(userText) {
            let prompt = String(userText || '').trim();
            const stripPatterns = [
                /^\s*(peux[-\s]?tu|tu peux|pourrais[-\s]?tu|can you|could you|please|stp|svp)\s+/i,
                /^\s*(je\s+veux|j['’]?aimerais|je\s+voudrais|donne[-\s]?moi|trouve[-\s]?moi|cherche[-\s]?moi|recherche|montre[-\s]?moi|i\s+want|i\s+need|give\s+me|find\s+me|search\s+for|look\s+for|show\s+me)\s+/i,
                /^\s*(cr[eé]e|cr[ée]er|g[eé]n[eè]re|g[eé]n[eé]rer|compose|composer|fais|faire|produis|produire)\s+(moi\s+)?/i,
                /^\s*(make|create|generate|compose|write|produce|build)\s+(me\s+)?/i,
                /^\s*(une?|des?|la|le|les|a|an|the)\s+/i
            ];
            stripPatterns.forEach((pattern) => {
                prompt = prompt.replace(pattern, '');
            });
            prompt = prompt.replace(/[?!.]+$/g, '').trim();
            return this.normalizeMusicPrompt(prompt || userText);
        }

        async maybeInjectAutoMusic(userText, assistantText) {
            if (!this.musicSearchLooksExplicit(userText)) return assistantText;
            let cleanedText = this.stripMusicConflictingImageTools(assistantText || '');
            if (/\[tool:(search_music|generate_music)\b/i.test(cleanedText || '')) return cleanedText;

            const prompt = this.extractMusicPrompt(userText);
            if (!prompt) return cleanedText;
            const title = this.buildMusicTitle(prompt);
            const tool = `[tool:search_music query="${this.escapeToolAttrValue(prompt)}" title="${this.escapeToolAttrValue(title)}"]`;
            const prefix = String(cleanedText || '').trim() || 'I am looking for matching music:';
            return `${prefix}\n\n${tool}`;
        }

        stripMusicConflictingImageTools(text) {
            const raw = String(text || '');
            return raw
                .replace(/\[tool:show_image[^\]]*\]/gi, '')
                .replace(/\[tool:generate_image[^\]]*\]/gi, '')
                .replace(/\n{3,}/g, '\n\n')
                .trim();
        }

        toggleImageMode() {
            this.state.isImageMode = !this.state.isImageMode;
            this.elements.imgBtn.classList.toggle('active', this.state.isImageMode);
            this.renderModelSelect();
        }

        renderModelSelect() {
            const select = this.elements.modelSelect;
            select.innerHTML = '';
            select.disabled = false; // Reset disabled state by default
            select.classList.remove('nv-ghost-icon');

            if (this.state.isImageMode) {
                this.elements.input.placeholder = 'Describe your image...';

                if (this.state.isGhostMode) {
                    // Restrict to Pollinations Only
                    const opt = document.createElement('option');
                    opt.value = 'pollinations';
                    opt.textContent = 'Pollinations (private)';
                    select.appendChild(opt);
                    select.value = 'pollinations';
                    select.disabled = true; // User cannot change it
                    select.classList.add('nv-ghost-icon');
                } else {
                    // Populate with Image Models
                    this.IMAGE_MODELS.forEach(m => {
                        const opt = document.createElement('option');
                        opt.value = m.id;
                        opt.textContent = `Model: ${m.label}`;
                        select.appendChild(opt);
                    });
                    // Default to pollinations
                    select.value = 'pollinations';
                }
            } else {
                this.elements.input.placeholder = 'Type a message...';
                // Restore Reasoning Levels
                const levels = [
                    { val: 'auto', txt: 'Auto' }, { val: 'minimal', txt: 'Minimal' },
                    { val: 'low', txt: 'Low' }, { val: 'medium', txt: 'Medium' },
                    { val: 'high', txt: 'High' }, { val: 'ultra', txt: 'Ultra' }
                ];
                levels.forEach(l => {
                    const opt = document.createElement('option');
                    opt.value = l.val;
                    opt.textContent = `Reasoning: ${l.txt}`;
                    select.appendChild(opt);
                });
                // Restore saved reasoning
                select.value = this.state.reasoningEffort;
            }
        }

        changeReasoningEffort(level) {
            // If in image mode, change is checking image model, not reasoning
            if (this.state.isImageMode) {
                // Could save image model preference here if needed
                return;
            }

            if (this.REASONING_LEVELS.includes(level)) {
                this.state.reasoningEffort = level;
                nvSetValue('NeuraVeil_reasoning', level);
                this.elements.modelSelect.value = level;
            }
        }

        async handleImageGen() {
            this.stopRecordingBeforeSubmit();
            const prompt = this.elements.input.value.trim();
            if (!prompt || this.isChatLoading(this.currentChatId)) return;

            const requestChatId = this.currentChatId;
            const requestSession = this.createChatRequestSession(requestChatId, 'image', {
                onInterrupt: () => {
                    this.appendMessageToChat(requestChatId, 'assistant', 'Interrupted.');
                }
            });
            const requestOptions = { signal: requestSession.signal };
            this.elements.input.value = '';
            this.autoResizeInput();
            this.clearTrailingErrorMessage();
            this.appendMessage('user', prompt);
            this.setLoading(true, requestChatId);
            this.setLoadingText('NeuraVeil is preparing your image...', requestChatId);

            try {
                const selectedModel = this.elements.modelSelect.value;
                let imageUrl = '';

                if (selectedModel === 'ai-horde') {
                    this.setLoadingText('NeuraVeil is generating your image with AI Horde...', requestChatId);
                    imageUrl = await this.generateHordeImage(prompt, requestOptions);
                } else {
                    this.setLoadingText('NeuraVeil is checking the available image models...', requestChatId);
                    await this.refreshPollinationsModelCatalog(false, requestOptions).catch(() => null);
                    imageUrl = this.buildPollinationsImageUrl(prompt);
                }

                if (!imageUrl) throw new Error('No image URL generated');
                this.throwIfChatRequestAborted(requestSession);

                if (/^data:image\//i.test(imageUrl)) {
                    const imageHtmlInline = `<img src="${imageUrl}" alt="${prompt}" style="max-width: 100%; border-radius: 8px; margin-top: 4px;">`;
                    this.appendMessageToChat(requestChatId, 'assistant', imageHtmlInline, true);
                    if (this.state.isImageMode) {
                        this.toggleImageMode();
                    }
                    return;
                }

                // Preload image via Fetch to handle rate limits and avoid double-requests
                this.setLoadingText('NeuraVeil is loading your image...', requestChatId);
                const preloadedImage = await this.preloadImage(imageUrl, { returnBlob: true, signal: requestOptions.signal });
                const blobUrl = preloadedImage?.blobUrl || '';
                if (preloadedImage?.blob) {
                    this.cacheGeneratedImage(imageUrl, preloadedImage.blob).catch((error) => {
                        console.warn('NeuraVeil: failed to cache generated image.', error);
                    });
                }
                this.throwIfChatRequestAborted(requestSession);

                // Save original URL to history, but use a local placeholder in the markup
                const imageHtmlOriginal = `<img src="${this.IMAGE_PLACEHOLDER}" data-nv-image-raw="${imageUrl}" data-nv-image-full="${imageUrl}" alt="${prompt}" style="max-width: 100%; border-radius: 8px; margin-top: 4px;">`;
                this.appendMessageToChat(requestChatId, 'assistant', imageHtmlOriginal, true);

                // Swap src to blobUrl in DOM to prevent re-fetching and hitting rate limits
                setTimeout(() => {
                    const images = this.elements.msgContainer.querySelectorAll('img');
                    if (images.length) {
                        const lastImg = images[images.length - 1];
                        const raw = lastImg.dataset.nvImageRaw || lastImg.getAttribute('src') || '';
                        if (raw === imageUrl) {
                            lastImg.src = blobUrl;
                            lastImg.dataset.nvImageProxied = '1';
                        }
                    }
                }, 0);

                // Reset image mode after generation
                if (this.state.isImageMode) {
                    this.toggleImageMode();
                }

            } catch (error) {
                if (this.isAbortError(error)) return;
                this.appendMessageToChat(
                    requestChatId,
                    'assistant',
                    'Error • Unable to generate the image. ' + this.formatUserFacingError(error, 'Check your connection.')
                );
                console.error('NeuraVeil Image Error:', error);
            } finally {
                this.finishChatRequestSession(requestChatId, requestSession);
                this.setLoading(false, requestChatId);
            }
        }

        async generateHordeImage(prompt, requestOptions = {}) {
            const apiKey = '0000000000'; // Anonymous key
            const payload = {
                prompt: prompt,
                params: {
                    steps: 25,
                    n: 1,
                    sampler_name: 'k_euler_a',
                    width: 512,
                    height: 512,
                    cfg_scale: 7
                },
                nsfw: false,
                censor_nsfw: true,
                r2: true
            };
            const headers = {
                'Content-Type': 'application/json',
                'apikey': apiKey,
                'Client-Agent': 'NeuraVeil:2.0.0:https://github.com/DREwX-code/NeuraVeil'
            };

            // 1. Submit Job
            const submitResponse = await this.request('https://stablehorde.net/api/v2/generate/async', {
                method: 'POST',
                headers,
                body: JSON.stringify(payload),
                signal: requestOptions.signal
            });

            if (!submitResponse.ok) {
                const payload = await this.readApiErrorPayload(submitResponse);
                throw new Error(payload?.message || payload?.error?.message || `Horde API Error: ${submitResponse.status}`);
            }

            const submitData = await submitResponse.json();
            const id = submitData.id;
            if (!id) {
                throw new Error(submitData?.message || 'No Horde job ID returned.');
            }

            // 2. Poll Status
            let attempts = 0;
            const maxAttempts = 60;

            while (attempts < maxAttempts) {
                await new Promise(r => setTimeout(r, 2000));
                attempts++;
                this.throwIfChatRequestAborted({ signal: requestOptions.signal });

                const checkResponse = await this.request(`https://stablehorde.net/api/v2/generate/check/${id}`, {
                    headers,
                    signal: requestOptions.signal
                });

                if (!checkResponse.ok) continue;
                const checkData = await checkResponse.json();

                if (checkData?.faulted) {
                    throw new Error(checkData?.message || 'AI Horde could not complete this image.');
                }

                if (checkData.done) {
                    // 3. Get Result
                    const statusResponse = await this.request(`https://stablehorde.net/api/v2/generate/status/${id}`, {
                        headers,
                        signal: requestOptions.signal
                    });
                    if (!statusResponse.ok) {
                        const payload = await this.readApiErrorPayload(statusResponse);
                        throw new Error(payload?.message || payload?.error?.message || 'Failed to retrieve Horde image');
                    }
                    const statusData = await statusResponse.json();
                    const generation = statusData.generations && statusData.generations[0];
                    // V2 async status endpoint returns:
                    // { generations: [{ img: "...", ... }] }
                    // `img` can be a URL or Base64 depending on the worker.
                    if (generation && generation.img) {
                        const rawImage = String(generation.img || '').trim();
                        if (/^https?:\/\//i.test(rawImage) || /^data:image\//i.test(rawImage)) {
                            return rawImage;
                        }
                        if (/^[A-Za-z0-9+/=\s]+$/.test(rawImage)) {
                            return `data:image/webp;base64,${rawImage.replace(/\s+/g, '')}`;
                        }
                        return rawImage;
                    }
                    throw new Error(statusData?.message || 'AI Horde returned no image.');
                }
            }
            throw new Error('Horde generation timed out');
        }

        async preloadImage(url, options = {}) {
            const response = await this.request(url, {
                responseType: 'arraybuffer',
                signal: options.signal
            });

            // Check for specific Rate Limit headers or errors
            // Pollinations might return 200 OK but with a rate limit image, checking headers:
            const rateLimited = response.headers.get('x-rate-limited') === 'true' ||
                response.headers.get('x-error-type') === 'Too Many Requests';

            if (rateLimited) {
                throw new Error('Image Pollinations failed — HTTP 429: too many requests. The service is temporarily overloaded.');
            }

            const contentType = response.headers.get('content-type') || '';
            if (/json|text\/plain/i.test(contentType)) {
                const payload = await this.readApiErrorPayload(response);
                const backendMessage = payload?.error?.message || payload?.message || '';
                const currentSize = payload?.queueInfo?.currentSize;
                const maxAllowed = payload?.queueInfo?.maxAllowed;
                if (/queue full/i.test(backendMessage)) {
                    const queueText = Number.isFinite(currentSize) && Number.isFinite(maxAllowed)
                        ? ` (${currentSize}/${maxAllowed})`
                        : '';
                    throw new Error(`Image queue full. Try again in a moment${queueText}.`);
                }
                throw new Error(backendMessage || 'Image unavailable.');
            }

            await this.ensurePollinationsOk(response, 'Image Pollinations');

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            if (options.returnBlob) {
                return { blob, blobUrl };
            }
            return blobUrl;
        }

        setImageFrameLoading(target, loading, label = 'Loading image...') {
            const frame = target?.classList?.contains('nv-image-frame')
                ? target
                : target?.closest?.('.nv-image-frame');
            if (!frame) return;
            if (loading) {
                delete frame.dataset.nvImageError;
                delete frame.dataset.nvImageErrorLabel;
                frame.dataset.nvImageLoading = '1';
                frame.dataset.nvImageLoadingLabel = label;
            } else {
                delete frame.dataset.nvImageLoading;
                delete frame.dataset.nvImageLoadingLabel;
            }
        }

        setImageFrameError(target, message) {
            const frame = target?.classList?.contains('nv-image-frame')
                ? target
                : target?.closest?.('.nv-image-frame');
            if (!frame) return;
            this.setImageFrameLoading(frame, false);
            frame.dataset.nvImageError = '1';
            frame.dataset.nvImageErrorLabel = String(message || 'Image unavailable.').trim();
        }

        clearImageFrameError(target) {
            const frame = target?.classList?.contains('nv-image-frame')
                ? target
                : target?.closest?.('.nv-image-frame');
            if (!frame) return;
            delete frame.dataset.nvImageError;
            delete frame.dataset.nvImageErrorLabel;
        }

        isPollinationsGeneratedImageUrl(url) {
            return /https?:\/\/image\.pollinations\.ai\/prompt\//i.test(String(url || ''));
        }

        assignLoadedImageSource(img, src) {
            if (!img || !src) return;
            const clearLoading = () => this.setImageFrameLoading(img, false);
            this.clearImageFrameError(img);
            img.addEventListener('load', clearLoading, { once: true });
            img.addEventListener('error', clearLoading, { once: true });
            img.src = src;
            if (img.complete) {
                requestAnimationFrame(clearLoading);
            }
        }

        loadExternalImage(img, rawUrl) {
            if (!img) return;
            if (img.dataset.nvImageProxying === '1' || img.dataset.nvImageProxied === '1') return;
            const url = this.sanitizeUrl(rawUrl || '');
            if (!url) {
                this.setImageFrameLoading(img, false);
                return;
            }
            this.setImageFrameLoading(img, true);
            if (/^(data:|blob:)/i.test(url)) {
                this.assignLoadedImageSource(img, url);
                return;
            }
            const cachedGeneratedImage = this.getCachedGeneratedImage(url);
            if (cachedGeneratedImage) {
                img.dataset.nvImageProxied = '1';
                this.assignLoadedImageSource(img, cachedGeneratedImage);
                return;
            }
            img.dataset.nvImageProxying = '1';
            const isGeneratedPollinations = this.isPollinationsGeneratedImageUrl(url);
            const allowDirectFallback = !isGeneratedPollinations;
            const directFallbackTimer = allowDirectFallback ? setTimeout(() => {
                if (img.dataset.nvImageProxying !== '1') return;
                const currentSrc = img.getAttribute('src') || '';
                if (currentSrc === this.IMAGE_PLACEHOLDER || /^data:image\/gif;base64/i.test(currentSrc)) {
                    this.assignLoadedImageSource(img, url);
                }
            }, 2200) : null;
            this.preloadImage(url, isGeneratedPollinations ? { returnBlob: true } : {})
                .then((result) => {
                    const blobUrl = result?.blobUrl || result;
                    this.assignLoadedImageSource(img, blobUrl);
                    if (isGeneratedPollinations && result?.blob) {
                        this.cacheGeneratedImage(url, result.blob).catch((error) => {
                            console.warn('NeuraVeil: failed to persist generated image cache.', error);
                        });
                    }
                })
                .catch((error) => {
                    if (allowDirectFallback) {
                        this.assignLoadedImageSource(img, url);
                    } else {
                        this.setImageFrameError(img, this.formatUserFacingError(error, 'Image unavailable.'));
                    }
                })
                .finally(() => {
                    if (directFallbackTimer) clearTimeout(directFallbackTimer);
                    delete img.dataset.nvImageProxying;
                    img.dataset.nvImageProxied = '1';
                });
        }

        initDirectImages(container) {
            const images = container.querySelectorAll('img');
            images.forEach((img) => {
                if (img.dataset.nvImageProxied === '1') return;
                let raw = img.dataset.nvImageRaw || img.getAttribute('src') || '';
                if (!raw) return;
                if (/^(data:|blob:)/i.test(raw)) return;
                if (!/^https?:\/\//i.test(raw) && !/^\/\//.test(raw)) return;
                this.setImageFrameLoading(img, true);
                const isPlaceholder = img.getAttribute('src') === this.IMAGE_PLACEHOLDER;
                if (img.dataset.nvImageProxying === '1' && !isPlaceholder) return;
                if (img.dataset.nvImageProxying === '1' && isPlaceholder) {
                    delete img.dataset.nvImageProxying;
                }
                if (!img.dataset.nvImageRaw) {
                    img.dataset.nvImageRaw = raw;
                    img.src = this.IMAGE_PLACEHOLDER;
                }
                raw = img.dataset.nvImageRaw || raw;
                this.loadExternalImage(img, raw);
            });
        }

        togglePanel(show) {
            if (show) {
                if (this.state.isOpen) return;
                this.state.isOpen = true;
                if (this.state.isSidebar) {
                    this.elements.panel.classList.toggle('sidebar-collapsed', !!this.state.isSidebarCollapsed);
                    this.applySidebarWidth();
                }
                this.elements.panel.classList.remove('animating-out');
                this.elements.panel.classList.add('open');
                this.syncTriggerVisibility();
                this.updateBodyOffset();
                this.schedulePanelPlacement();
                setTimeout(() => this.elements.input.focus(), 300);
                return;
            }

            if (!this.state.isOpen) return;
            const closingSidebar = this.state.isSidebar;
            this.state.isOpen = false;
            this.elements.panel.classList.remove('open');
            this.elements.panel.classList.add('animating-out');
            this.syncTriggerVisibility();
            if (closingSidebar && this.elements.trigger) {
                this.placeTriggerForClosedSidebar();
                this.elements.trigger.classList.remove('hidden');
                this.elements.trigger.style.opacity = '';
                this.elements.trigger.style.visibility = '';
                this.elements.trigger.style.pointerEvents = '';
            }
            this.updateBodyOffset();
            this.schedulePanelPlacement();
            setTimeout(() => {
                if (this.state.isOpen) return;
                this.elements.panel.classList.remove('animating-out');
                this.resetPanelPlacement();
                if (closingSidebar && this.elements.trigger) {
                    this.elements.trigger.classList.remove('hidden');
                }
            }, 300);
        }

        toggleSidebar() {
            this.elements.panel.classList.add('layout-switching');
            this.state.isSidebar = !this.state.isSidebar;
            if (!this.state.isSidebar) {
                this.setSidebarCollapsed(false, false);
            }
            this.elements.panel.classList.toggle('sidebar', this.state.isSidebar);
            if (this.state.isSidebar) {
                this.temporarilyHideSidebarArrow();
                requestAnimationFrame(() => this.elements.sidebarBtn?.blur());
            }
            if (this.state.isSidebar) {
                this.resetPanelPlacement();
                this.applySidebarWidth();
                if (!this.state.isOpen) {
                    requestAnimationFrame(() => this.togglePanel(true));
                }
            } else if (this.state.isOpen) {
                this.applySidebarWidth();
                this.schedulePanelPlacement();
            }
            this.updateBodyOffset();
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.elements.panel.classList.remove('layout-switching');
                });
            });
        }

        syncTriggerVisibility() {
            if (!this.elements.trigger) return;
            const hideTrigger = this.state.isOpen && (this.state.isSidebar || this.state.isSidebarCollapsed);
            this.elements.trigger.classList.toggle('hidden', hideTrigger);
        }

        setSidebarCollapsed(collapsed, syncLayout = true) {
            if (!this.elements.panel) return;
            const next = !!collapsed && this.state.isSidebar;
            this.state.isSidebarCollapsed = next;
            this.elements.panel.classList.toggle('sidebar-collapsed', next);
            this.syncTriggerVisibility();
            if (this.elements.sidebarCollapseBtn) {
                this.elements.sidebarCollapseBtn.title = next ? 'Expand panel' : 'Collapse panel';
                this.elements.sidebarCollapseBtn.setAttribute('aria-label', next ? 'Expand panel' : 'Collapse panel');
                this.elements.sidebarCollapseBtn.setAttribute('aria-pressed', String(next));
            }
            if (syncLayout) {
                this.applySidebarWidth();
                this.updateBodyOffset();
            }
        }

        setHistoryButtonActive(isOpen) {
            if (this.elements.historyBtn) {
                this.elements.historyBtn.classList.toggle('active', isOpen);
            }
        }

        toggleHistory() {
            this.state.isHistoryOpen = !this.state.isHistoryOpen;
            this.elements.historyPanel.classList.toggle('visible', this.state.isHistoryOpen);
            this.setHistoryButtonActive(this.state.isHistoryOpen);
            if (this.state.isHistoryOpen) {
                this.state.isSettingsOpen = false;
                this.elements.settingsPanel.classList.remove('visible');
                this.state.isInfoOpen = false;
                this.elements.infoPanel.classList.remove('visible');
            } else {
                this.resetHistorySearch();
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
            this.state.historySearchTerm = value || '';
            this.state.historySearchIndex = this.state.historySearchTerm ? 0 : -1;
            if (this.state.historySearchTerm) {
                this.elements.historySearchWrap.classList.add('active');
            }
            this.renderHistoryList();
        }

        handleHistorySearchKeydown(e) {
            const items = this.filteredHistory || [];
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (!items.length) return;
                const next = this.state.historySearchIndex + 1;
                this.state.historySearchIndex = next >= items.length ? items.length - 1 : next;
                this.renderHistoryList();
                return;
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (!items.length) return;
                const prev = this.state.historySearchIndex - 1;
                this.state.historySearchIndex = prev < 0 ? 0 : prev;
                this.renderHistoryList();
                return;
            }
            if (e.key === 'Enter') {
                if (items.length && this.state.historySearchIndex >= 0) {
                    e.preventDefault();
                    const chat = items[this.state.historySearchIndex];
                    if (chat) this.loadChat(chat.id);
                }
                return;
            }
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
            this.state.historySearchIndex = -1;
            this.filteredHistory = this.history;
            if (this.elements.historySearchInput) {
                this.elements.historySearchInput.value = '';
                this.elements.historySearchInput.blur();
            }
            if (this.elements.historySearchWrap) this.elements.historySearchWrap.classList.remove('active');
            this.renderHistoryList();
        }

        handleOutsideHistoryClick(e) {
            if (!this.state.isHistoryOpen) return;
            if (!this.elements.historyPanel) return;
            const path = e.composedPath ? e.composedPath() : [];
            const inHistory = path.includes(this.elements.historyPanel);
            const inSearch = path.includes(this.elements.historySearchWrap);
            if (!inHistory && !inSearch) {
                this.resetHistorySearch();
            }
        }

        savePageDockOriginalStyles() {
            if (this.pageDockOriginalStyles) return;
            const bodyStyle = document.body.style;
            const rootStyle = document.documentElement.style;
            this.pageDockOriginalStyles = {
                bodyMarginLeft: bodyStyle.getPropertyValue('margin-left'),
                bodyMarginLeftPriority: bodyStyle.getPropertyPriority('margin-left'),
                bodyMarginRight: bodyStyle.getPropertyValue('margin-right'),
                bodyMarginRightPriority: bodyStyle.getPropertyPriority('margin-right'),
                bodyWidth: bodyStyle.getPropertyValue('width'),
                bodyWidthPriority: bodyStyle.getPropertyPriority('width'),
                bodyMaxWidth: bodyStyle.getPropertyValue('max-width'),
                bodyMaxWidthPriority: bodyStyle.getPropertyPriority('max-width'),
                bodyMinWidth: bodyStyle.getPropertyValue('min-width'),
                bodyMinWidthPriority: bodyStyle.getPropertyPriority('min-width'),
                bodyBoxSizing: bodyStyle.getPropertyValue('box-sizing'),
                bodyBoxSizingPriority: bodyStyle.getPropertyPriority('box-sizing'),
                bodyTransition: bodyStyle.getPropertyValue('transition'),
                bodyTransitionPriority: bodyStyle.getPropertyPriority('transition'),
                rootOverflowX: rootStyle.getPropertyValue('overflow-x'),
                rootOverflowXPriority: rootStyle.getPropertyPriority('overflow-x')
            };
        }

        restoreStyleProperty(style, name, value, priority) {
            if (value) {
                style.setProperty(name, value, priority || '');
            } else {
                style.removeProperty(name);
            }
        }

        restorePageDockStyles() {
            if (!this.pageDockOriginalStyles) return;
            const original = this.pageDockOriginalStyles;
            const bodyStyle = document.body.style;
            const rootStyle = document.documentElement.style;

            this.restoreStyleProperty(bodyStyle, 'margin-left', original.bodyMarginLeft, original.bodyMarginLeftPriority);
            this.restoreStyleProperty(bodyStyle, 'margin-right', original.bodyMarginRight, original.bodyMarginRightPriority);
            this.restoreStyleProperty(bodyStyle, 'width', original.bodyWidth, original.bodyWidthPriority);
            this.restoreStyleProperty(bodyStyle, 'max-width', original.bodyMaxWidth, original.bodyMaxWidthPriority);
            this.restoreStyleProperty(bodyStyle, 'min-width', original.bodyMinWidth, original.bodyMinWidthPriority);
            this.restoreStyleProperty(bodyStyle, 'box-sizing', original.bodyBoxSizing, original.bodyBoxSizingPriority);
            this.restoreStyleProperty(bodyStyle, 'transition', original.bodyTransition, original.bodyTransitionPriority);
            this.restoreStyleProperty(rootStyle, 'overflow-x', original.rootOverflowX, original.rootOverflowXPriority);

            document.documentElement.classList.remove('nv-sidebar-docked-left', 'nv-sidebar-docked-right');
            document.documentElement.style.removeProperty('--nv-sidebar-dock-width');
            this.pageDockOriginalStyles = null;
        }

        applyPageDock(width, isLeft) {
            this.savePageDockOriginalStyles();
            const bodyStyle = document.body.style;
            const rootStyle = document.documentElement.style;
            const dockWidth = `${width}px`;
            const pageWidth = `calc(100vw - ${dockWidth})`;

            document.documentElement.style.setProperty('--nv-sidebar-dock-width', dockWidth);
            document.documentElement.classList.toggle('nv-sidebar-docked-left', isLeft);
            document.documentElement.classList.toggle('nv-sidebar-docked-right', !isLeft);

            bodyStyle.setProperty('box-sizing', 'border-box', 'important');
            bodyStyle.setProperty('width', pageWidth, 'important');
            bodyStyle.setProperty('max-width', pageWidth, 'important');
            bodyStyle.setProperty('min-width', '0px', 'important');
            bodyStyle.setProperty('margin-left', isLeft ? dockWidth : '0px', 'important');
            bodyStyle.setProperty('margin-right', isLeft ? '0px' : dockWidth, 'important');
            bodyStyle.setProperty('transition', 'margin-left 0.28s ease, margin-right 0.28s ease, width 0.28s ease, max-width 0.28s ease', 'important');
            rootStyle.setProperty('overflow-x', 'hidden', 'important');
        }

        updateBodyOffset() {
            const shouldOffset = this.state.isSidebar && this.state.isOpen;
            const isLeft = this.state.sidebarSide === 'left';
            const width = this.state.isSidebarCollapsed
                ? this.SIDEBAR_RAIL_WIDTH
                : this.clampSidebarWidth(this.state.sidebarWidth || this.SIDEBAR_WIDTH);
            if (!shouldOffset) {
                this.restorePageDockStyles();
                return;
            }
            this.applyPageDock(width, isLeft);
        }


        startNewChat() {
            this.currentChatId = Date.now();
            this.messages = [];
            this.setActiveChatId(this.currentChatId);
            this.state.manualTitle = null;
            this.state.autoTitle = null;
            this.updateHeaderTitle();
            this.setPageContextActive(false);
            if (this.state.isImageMode) this.toggleImageMode();
            this.elements.input.value = '';
            this.autoResizeInput();

            // Clear UI
            this.elements.msgContainer.innerHTML = '';
            this.elements.msgContainer.appendChild(this.elements.typingIndicator);
            this.appendMessage('assistant', this.DEFAULT_GREETING);

            this.state.isHistoryOpen = false;
            this.elements.historyPanel.classList.remove('visible');
            this.setHistoryButtonActive(false);
            this.state.isSettingsOpen = false;
            this.elements.settingsPanel.classList.remove('visible');
            this.state.isInfoOpen = false;
            this.elements.infoPanel.classList.remove('visible');
            this.syncCurrentChatLoadingUi(true);
            this.updateHeaderTitle();
        }

        setActiveChatId(chatId) {
            if (this.state.isGhostMode) return;
            nvSetValue('NeuraVeil_active_chat_id', chatId);
        }

        loadHistory() {
            const saved = nvGetValue('NeuraVeil_history', '');
            if (saved) {
                try {
                    this.history = JSON.parse(saved);
                } catch (e) { console.error('NeuraVeil: Corrupt history', e); }
            }
            this.filteredHistory = this.history;
        }

        restoreActiveChat() {
            const activeId = nvGetValue('NeuraVeil_active_chat_id', '');
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
                this.state.autoTitle = chat.autoTitle || null;
            }

            this.renderMessages();
            this.syncCurrentChatLoadingUi();
            this.updateHeaderTitle();
        }

        async generateTextOnce(prompt) {
            const model = await this.getPreferredTextModel('fast');
            const payload = {
                messages: [
                    { role: 'system', content: 'You generate short conversation titles.' },
                    { role: 'user', content: prompt }
                ],
                model,
                temperature: 0.2,
                max_tokens: 20,
                seed: Math.floor(Math.random() * 10000)
            };

            const { data } = await this.requestPollinationsChatWithFallbackModels(payload, 'Title Pollinations', 'minimal');
            return this.extractAssistantContent(data);
        }

        async generateConversationTitle(firstUserMessage) {
            const text = String(firstUserMessage || '').trim();
            if (!text) return 'New chat';

            const fallback = text.split(/\s+/).slice(0, 6).join(' ').slice(0, 48);

            try {
                const prompt =
                    'Generate a short conversation title (3-6 words, max 48 chars). ' +
                    'Keep the meaning, correct spelling if needed. No quotes, no emojis, no punctuation at the end.\n\n' +
                    `User message: ${text}\nTitle:`;

                const title = await this.generateTextOnce(prompt);
                const cleaned = String(title || '')
                    .replace(/["“”]/g, '')
                    .replace(/[.!?]+$/g, '')
                    .replace(/\s+/g, ' ')
                    .trim()
                    .slice(0, 48);

                return cleaned || fallback || 'New chat';
            } catch (e) {
                return fallback || 'New chat';
            }
        }

        maybeGenerateConversationTitle(chatId, userText) {
            if (this.state.isGhostMode) return;
            const text = String(userText || '').trim();
            if (!text) return;

            const chat = this.history.find(h => h.id === chatId);
            const manualTitle = chat?.manualTitle || (chatId === this.currentChatId ? this.state.manualTitle : null);
            const existingAuto = chat?.autoTitle || (chatId === this.currentChatId ? this.state.autoTitle : null);
            if (manualTitle || existingAuto) return;

            if (!this._titleGenerationInFlight) {
                this._titleGenerationInFlight = new Set();
            }
            if (this._titleGenerationInFlight.has(chatId)) return;
            this._titleGenerationInFlight.add(chatId);

            this.generateConversationTitle(text)
                .then((title) => {
                    if (!title) return;
                    const target = this.history.find(h => h.id === chatId);
                    if (target && !target.manualTitle && !target.autoTitle) {
                        target.autoTitle = title;
                        target.title = title;
                        target.timestamp = Date.now();
                    }
                    if (chatId === this.currentChatId && !this.state.manualTitle) {
                        this.state.autoTitle = title;
                        this.saveHistory();
                        this.updateHeaderTitle();
                        if (this.state.isHistoryOpen) this.renderHistoryList();
                    } else if (target) {
                        nvSetValue('NeuraVeil_history', JSON.stringify(this.history));
                        if (this.state.isHistoryOpen) this.renderHistoryList();
                    }
                })
                .catch((err) => {
                    console.warn('Title generation failed:', err);
                })
                .finally(() => {
                    this._titleGenerationInFlight.delete(chatId);
                });
        }

        saveHistory() {
            if (this.state.isGhostMode) return;
            // Don't save if no user messages yet
            if (!this.messages.some(m => m.role === 'user')) return;

            const existing = this.history.find(h => h.id === this.currentChatId);
            const manualTitle = this.state.manualTitle || existing?.manualTitle || null;
            const autoTitle = this.state.autoTitle || existing?.autoTitle || null;
            const chatData = {
                id: this.currentChatId,
                timestamp: Date.now(),
                title: manualTitle || autoTitle || existing?.title || 'New Conversation',
                manualTitle: manualTitle,
                autoTitle: autoTitle || existing?.autoTitle || null,
                messages: this.getPersistableMessages(this.messages)
            };

            // Remove existing instance of this chat ID (to handle reordering)
            this.history = this.history.filter(h => h.id !== this.currentChatId);
            this.history.unshift(chatData);


            nvSetValue('NeuraVeil_history', JSON.stringify(this.history));
            this.setActiveChatId(this.currentChatId);
            this.updateHeaderTitle();
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
                nvSetValue('NeuraVeil_history', '');
                this.clearGeneratedImageCache();
                this.setActiveChatId('');
                this.resetHistorySearch();
                this.startNewChat();
            });
        }

        resetAllData() {
            this.showConfirm('Reset all NeuraVeil data? This clears settings and conversations.', () => {
                this.history = [];
                this.filteredHistory = [];
                this.messages = [];
                this.state.manualTitle = null;
                this.state.autoTitle = null;
                this.state.responseStyle = 'default';
                this.state.reasoningEffort = 'medium';
                this.state.sidebarSide = 'right';
                this.state.sidebarWidth = this.SIDEBAR_WIDTH;
                this.state.isSidebarCollapsed = false;
                this.pollinationsModelCatalog = null;
                this.setPageContextActive(false);

                nvSetValue('NeuraVeil_history', '');
                nvSetValue('NeuraVeil_active_chat_id', '');
                nvSetValue('NeuraVeil_style', '');
                nvSetValue('NeuraVeil_reasoning', '');
                nvSetValue('NeuraVeil_pollinations_model_catalog', '');
                nvSetValue('NeuraVeil_trigger_pos', '');
                nvSetValue('NeuraVeil_sidebar_side', '');
                nvSetValue('NeuraVeil_sidebar_width', '');
                nvSetValue(this.GENERATED_IMAGE_CACHE_KEY, '');
                this.generatedImageCache = { items: {} };

                this.resetHistorySearch();
                this.resetTriggerPosition();
                this.applySidebarSide();
                this.applyActiveStyle();
                this.renderModelSelect();
                this.renderHistoryList();
                this.startNewChat();
            });
        }

        deleteChat(chatId, e) {
            if (e) e.stopPropagation();
            this.showConfirm('Delete this conversation?', () => {
                this.history = this.history.filter(h => h.id !== chatId);
                nvSetValue('NeuraVeil_history', JSON.stringify(this.history));

                // If deleting active chat, clear it
                if (chatId === this.currentChatId) this.startNewChat();
                else this.renderHistoryList();
            });
        }

        deleteCurrentChat() {
            if (!this.hasDeletableCurrentChat()) {
                this.startNewChat();
                return;
            }

            this.showConfirm('Delete this conversation?', () => {
                if (!this.state.isGhostMode) {
                    this.history = this.history.filter(h => h.id !== this.currentChatId);
                    nvSetValue('NeuraVeil_history', JSON.stringify(this.history));
                }
                this.startNewChat();
                this.renderHistoryList();
            });
        }

        startInlineRename(chatId, item, e) {
            if (e) e.stopPropagation();
            const chat = this.history.find(h => h.id === chatId);
            if (!chat) return;
            const titleEl = item.querySelector('.nv-h-title');
            if (!titleEl) return;

            const maxLength = 90;
            const original = chat.manualTitle || chat.title || 'Conversation';
            titleEl.contentEditable = 'true';
            titleEl.spellcheck = false;
            titleEl.classList.add('nv-h-editing');
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
                    this.updateHeaderTitle();
                }
                nvSetValue('NeuraVeil_history', JSON.stringify(this.history));
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
                titleEl.classList.remove('nv-h-editing');
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
            this.state.autoTitle = chat.autoTitle || null;
            this.setPageContextActive(false);

            this.renderMessages();
            this.syncCurrentChatLoadingUi();
            this.updateHeaderTitle();
            this.toggleHistory(); // Close history
        }

        isDefaultGreeting(msg, index = 0) {
            return index === 0 && msg?.role === 'assistant' && msg?.content === this.DEFAULT_GREETING;
        }

        hasUserMessages(messages = this.messages) {
            return Array.isArray(messages) && messages.some(msg => msg?.role === 'user');
        }

        shouldRenderDefaultGreeting(msg, index = 0, messages = this.messages) {
            return this.isDefaultGreeting(msg, index) && !this.hasUserMessages(messages);
        }

        getPersistableMessages(messages = this.messages) {
            if (!this.hasUserMessages(messages)) return messages;
            return messages.filter((msg, index) => !this.isDefaultGreeting(msg, index));
        }

        removeWelcomeGreetingFromActiveChat() {
            if (!this.isDefaultGreeting(this.messages[0], 0)) return;
            this.messages.shift();
            const welcomeEl = this.elements.msgContainer?.querySelector('.nv-welcome-message');
            if (welcomeEl) welcomeEl.remove();
        }

        renderWelcomeCard(contentDiv) {
            contentDiv.innerHTML = `
                <div class="nv-welcome">
                    <div class="nv-welcome-title">Welcome to NeuraVeil.</div>
                    <div class="nv-welcome-subtitle">Pick a quick start or write your message directly.</div>
                    <div class="nv-welcome-grid">
                        ${this.renderWelcomeActionHtml(
                            'summarize_page',
                            this.getPageIconSvg(),
                            'Summarize the page',
                            'Use page context',
                            'NEW'
                        )}
                        ${this.renderWelcomeActionHtml(
                            'generate_image',
                            this.getImageIconSvg(),
                            'Generate an image',
                            'Switch to image mode'
                        )}
                        ${this.renderWelcomeActionHtml(
                            'explain',
                            this.getExplainIconSvg(),
                            'Explain something',
                            'Clarify a topic'
                        )}
                        ${this.renderWelcomeActionHtml(
                            'joke',
                            this.getJokeIconSvg(),
                            'Tell me a joke',
                            'A quick smile'
                        )}
                    </div>
                </div>
            `;
        }

        renderWelcomeActionHtml(action, icon, label, desc, badge = '') {
            const badgeHtml = badge
                ? `<span class="nv-welcome-badge">${this.escapeHtml(badge)}</span>`
                : '';
            return `
                <button class="nv-welcome-action${badge ? ' has-badge' : ''}" type="button" data-nv-welcome-action="${this.escapeAttr(action)}">
                    ${badgeHtml}
                    <span class="nv-welcome-icon">${icon}</span>
                    <span class="nv-welcome-copy">
                        <span class="nv-welcome-label-row">
                            <span class="nv-welcome-label">${this.escapeHtml(label)}</span>
                        </span>
                        <span class="nv-welcome-desc">${this.escapeHtml(desc)}</span>
                    </span>
                </button>
            `;
        }

        getPageIconSvg() {
            return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/></svg>';
        }

        getImageIconSvg() {
            return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
        }

        getExplainIconSvg() {
            return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 1 1 5.8 1c-.5 1.1-1.7 1.6-2.3 2.4-.4.5-.6 1-.6 1.6"/><path d="M12 17h.01"/></svg>';
        }

        getJokeIconSvg() {
            return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>';
        }

        highlightHistoryTitle(title, query) {
            if (!query) return this.escapeHtml(title);
            const terms = this.getSearchTerms(query);
            if (!terms.length) return this.escapeHtml(title);
            const escapedQuery = terms
                .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                .join('|');
            const regex = new RegExp(`(${escapedQuery})`, 'gi');
            return this.escapeHtml(title).replace(regex, (match) => `<span class="nv-h-match">${match}</span>`);
        }

        getSearchTerms(query) {
            return String(query || '')
                .toLowerCase()
                .split(/\s+/)
                .map(term => term.trim())
                .filter(term => term.length >= 2)
                .slice(0, 6);
        }

        buildHistorySearchBody(chat) {
            const messages = Array.isArray(chat?.messages) ? chat.messages : [];
            return messages
                .slice(-10)
                .map(message => `${message.role || ''}: ${this.stripToolTagsForCopy(message.content || '')}`)
                .join('\n')
                .replace(/\s+/g, ' ')
                .trim();
        }

        findHistoryExcerpt(text, query) {
            const source = String(text || '').replace(/\s+/g, ' ').trim();
            if (!source) return '';
            const lower = source.toLowerCase();
            const terms = this.getSearchTerms(query);
            let index = -1;
            for (const term of terms) {
                index = lower.indexOf(term);
                if (index !== -1) break;
            }
            if (index === -1) index = 0;
            const start = Math.max(0, index - 46);
            const end = Math.min(source.length, index + 118);
            const prefix = start > 0 ? '…' : '';
            const suffix = end < source.length ? '…' : '';
            return `${prefix}${source.slice(start, end).trim()}${suffix}`;
        }

        searchHistoryItems(rawQuery) {
            const query = this.normalizeSpace(rawQuery || '');
            if (!query) return this.history;

            const docs = this.history.map((chat) => ({
                chat,
                title: chat.manualTitle || chat.title || '',
                body: this.buildHistorySearchBody(chat)
            }));

            const FuseCtor = this.getGlobalLibrary('Fuse');
            if (FuseCtor) {
                try {
                    const fuse = new FuseCtor(docs, {
                        includeScore: true,
                        shouldSort: true,
                        ignoreLocation: true,
                        threshold: 0.38,
                        minMatchCharLength: 2,
                        keys: [
                            { name: 'title', weight: 0.62 },
                            { name: 'body', weight: 0.38 }
                        ]
                    });
                    const fuseResults = fuse.search(query)
                        .slice(0, 80)
                        .map((result) => ({
                            ...result.item.chat,
                            _nvSearchScore: result.score,
                            _nvSearchExcerpt: this.findHistoryExcerpt(result.item.body, query)
                        }));
                    if (fuseResults.length) return fuseResults;
                } catch (error) {
                    console.warn('NeuraVeil Fuse search failed, using fallback search.', error);
                }
            }

            const lower = query.toLowerCase();
            const terms = this.getSearchTerms(query);
            return docs
                .map((doc) => {
                    const haystack = `${doc.title} ${doc.body}`.toLowerCase();
                    const score = this.scoreApproximateSearch(haystack, terms, lower);
                    return { doc, score };
                })
                .filter(item => item.score > 0)
                .sort((a, b) => b.score - a.score)
                .map(({ doc, score }) => ({
                    ...doc.chat,
                    _nvSearchScore: 1 - score,
                    _nvSearchExcerpt: this.findHistoryExcerpt(doc.body, query)
                }));
        }

        scoreApproximateSearch(haystack, terms, rawLowerQuery) {
            if (!haystack) return 0;
            if (rawLowerQuery && haystack.includes(rawLowerQuery)) return 1;
            if (!terms.length) return 0;

            const tokens = this.tokenizeSearchText(haystack);
            if (!tokens.length) return 0;

            let matched = 0;
            terms.forEach((term) => {
                if (this.hasApproximateTokenMatch(term, tokens)) matched += 1;
            });

            if (!matched) return 0;
            if (terms.length <= 2 && matched < terms.length) return 0;
            return matched / terms.length;
        }

        tokenizeSearchText(text) {
            return this.normalizeSearchText(text)
                .split(/\s+/)
                .map(token => token.trim())
                .filter(token => token.length >= 2)
                .slice(0, 500);
        }

        hasApproximateTokenMatch(term, tokens) {
            const cleanTerm = this.normalizeSearchText(term);
            if (!cleanTerm) return false;
            return tokens.some((token) => {
                if (token.includes(cleanTerm) || cleanTerm.includes(token)) return true;
                const maxLen = Math.max(cleanTerm.length, token.length);
                if (maxLen < 4) return false;
                const distance = this.levenshteinDistance(cleanTerm, token);
                return distance / maxLen <= (maxLen <= 6 ? 0.34 : 0.28);
            });
        }

        levenshteinDistance(a, b) {
            const left = String(a || '');
            const right = String(b || '');
            if (left === right) return 0;
            if (!left) return right.length;
            if (!right) return left.length;

            const prev = Array.from({ length: right.length + 1 }, (_, i) => i);
            const curr = Array(right.length + 1).fill(0);

            for (let i = 1; i <= left.length; i += 1) {
                curr[0] = i;
                for (let j = 1; j <= right.length; j += 1) {
                    const cost = left[i - 1] === right[j - 1] ? 0 : 1;
                    curr[j] = Math.min(
                        curr[j - 1] + 1,
                        prev[j] + 1,
                        prev[j - 1] + cost
                    );
                }
                for (let j = 0; j <= right.length; j += 1) {
                    prev[j] = curr[j];
                }
            }

            return prev[right.length];
        }

        renderHistoryList() {
            this.elements.historyList.innerHTML = '';
            const query = this.normalizeSpace(this.state.historySearchTerm || '');

            if (this.elements.historySearchInput) {
                this.elements.historySearchInput.value = this.state.historySearchTerm || '';
                const isFocused = (this.shadow && this.shadow.activeElement === this.elements.historySearchInput) ||
                    document.activeElement === this.elements.historySearchInput ||
                    this.elements.historySearchInput.matches(':focus');
                const keepOpen = !!this.state.historySearchTerm || isFocused;
                this.elements.historySearchWrap.classList.toggle('active', keepOpen);
            }

            const items = this.searchHistoryItems(query);

            this.filteredHistory = items;

            if (query) {
                if (items.length === 0) {
                    this.state.historySearchIndex = -1;
                } else if (this.state.historySearchIndex < 0) {
                    this.state.historySearchIndex = 0;
                } else if (this.state.historySearchIndex >= items.length) {
                    this.state.historySearchIndex = items.length - 1;
                }
            } else {
                this.state.historySearchIndex = -1;
            }

            if (!items.length) {
                const empty = document.createElement('div');
                empty.className = 'nv-history-empty';
                empty.textContent = query ? 'No conversations found.' : 'No conversations yet.';
                this.elements.historyList.appendChild(empty);
                return;
            }

            items.forEach((chat, index) => {
                const item = document.createElement('div');
                item.className = 'nv-history-item';
                if (chat.id === this.currentChatId) item.classList.add('active');
                const isFocused = query && index === this.state.historySearchIndex;
                if (isFocused) item.classList.add('search-focus');

                const date = new Date(chat.timestamp).toLocaleDateString();
                const titleText = chat.title || '';
                const highlightedTitle = this.highlightHistoryTitle(titleText, query);
                const excerpt = query && chat._nvSearchExcerpt
                    ? `<div class="nv-h-meta">${this.escapeHtml(chat._nvSearchExcerpt)}</div>`
                    : '';
                item.innerHTML = `
                    <div class="nv-h-title">${highlightedTitle}</div>
                    ${excerpt}
                    <div class="nv-h-date">${date}</div>
                    <div class="nv-h-rename" title="Rename">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
                    </div>
                    <div class="nv-h-delete" title="Delete">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                `;
                item.onclick = () => this.loadChat(chat.id);
                item.querySelector('.nv-h-rename').onclick = (e) => this.startInlineRename(chat.id, item, e);
                item.querySelector('.nv-h-delete').onclick = (e) => this.deleteChat(chat.id, e);
                this.elements.historyList.appendChild(item);
            });
        }

        renderMessage(msg) {
            // Check if message content looks like an image tag
            if (msg.content.trim().startsWith('<img')) {
                return `<div class="nv-message ${msg.role}">${msg.content}</div>`;
            }
            if (msg.role === 'assistant') {
                const rendered = this.renderToolMarkup(msg.content);
                if (rendered.hasTool) {
                    return `<div class="nv-message ${msg.role}">${rendered.html}</div>`;
                }
            }
            // For text, sanitize/escape
            const div = document.createElement('div');
            div.textContent = msg.content;
            return `<div class="nv-message ${msg.role}">${div.innerHTML}</div>`;
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
            const raw = String(url || '').trim();
            if (!raw) return '';
            const hasProtocol = /^https?:\/\//i.test(raw);
            const isProtocolRelative = /^\/\//.test(raw);
            if (!hasProtocol && !isProtocolRelative) return '';
            try {
                const parsed = new URL(raw, window.location.href);
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

        normalizeImageQuery(rawQuery) {
            const query = String(rawQuery || '').trim();
            if (!query) return '';
            return query.replace(/\s+/g, ' ').slice(0, 180).trim();
        }

        getImageQueryStopwords() {
            return new Set([
                'image', 'images', 'photo', 'photos', 'picture', 'pictures', 'illustration', 'visual', 'visuel',
                'foto', 'fotos', 'imagen', 'imagenes', 'imagem', 'imagens', 'immagine', 'immagini', 'bild', 'bilder',
                'libre', 'droits', 'gratuit', 'gratuite', 'free', 'royalty', 'domain', 'public', 'creative', 'commons',
                'de', 'du', 'des', 'la', 'le', 'les', 'un', 'une', 'et', 'ou', 'pour', 'avec', 'dans', 'sur',
                'the', 'a', 'an', 'of', 'and', 'or', 'for', 'with', 'to', 'in', 'on',
                'el', 'la', 'los', 'las', 'una', 'uno', 'unos', 'unas', 'y', 'o', 'para', 'con', 'en', 'del',
                'der', 'die', 'das', 'ein', 'eine', 'einer', 'und', 'oder', 'fur', 'mit', 'von', 'zu', 'im',
                'il', 'lo', 'gli', 'i', 'le', 'un', 'una', 'uno', 'e', 'o', 'per', 'con', 'di', 'da',
                'o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas', 'e', 'ou', 'para', 'com', 'do', 'da'
            ]);
        }

        simplifyOpenverseQuery(query) {
            const raw = String(query || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (!raw) return '';
            let cleaned = raw
                .replace(/image\s+libre\s+de\s+droits/gi, ' ')
                .replace(/libre\s+de\s+droits/gi, ' ')
                .replace(/royalty[-\s]?free/gi, ' ')
                .replace(/public\s+domain/gi, ' ')
                .replace(/creative\s+commons/gi, ' ')
                .replace(/cc\s*(by|0|sa|nd|nc)?/gi, ' ')
                .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
                .replace(/[_-]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
            if (!cleaned) return '';

            const stopwords = this.getImageQueryStopwords();
            const tokens = cleaned.split(/\s+/).filter(Boolean);
            const mapped = [];
            tokens.forEach((token) => {
                if (stopwords.has(token)) return;
                mapped.push(token);
            });

            const unique = [];
            mapped.forEach((token) => {
                if (!unique.includes(token)) unique.push(token);
            });
            if (!unique.length) return '';
            return unique.slice(0, 6).join(' ');
        }

        buildOpenverseSearchQueries(rawQuery) {
            const base = this.normalizeImageQuery(rawQuery);
            if (!base) return [];
            const queries = [base];
            const simplified = this.simplifyOpenverseQuery(base);
            if (simplified && simplified !== base) queries.push(simplified);
            return Array.from(new Set(queries));
        }

        getDomainFromUrl(rawUrl) {
            if (!rawUrl) return '';
            try {
                const parsed = new URL(rawUrl);
                return parsed.hostname.replace(/^www\./i, '');
            } catch (e) {
                return '';
            }
        }

        formatOpenverseDisplayName(value) {
            return String(value || '').trim().replace(/\s+/g, '_');
        }

        formatOpenverseLicense(result) {
            return this.formatOpenverseDisplayName(result?.license || '');
        }

        async fetchOpenverseApiJson(url) {
            const response = await this.request(url);
            if (!response.ok) throw new Error(`Openverse error: ${response.status}`);
            return await response.json();
        }

        buildOpenverseMetadata(result, previewUrlOverride) {
            const fullUrl = this.sanitizeUrl(result?.url || '');
            const previewUrl = previewUrlOverride || fullUrl;
            if (!previewUrl) return null;

            const source = this.formatOpenverseDisplayName(result?.source || '');
            const foreignLandingUrl = this.sanitizeUrl(result?.foreign_landing_url || '');
            const creator = this.formatOpenverseDisplayName(result?.creator || '');
            const creatorUrl = this.sanitizeUrl(result?.creator_url || '');
            const license = this.formatOpenverseLicense(result);
            const licenseUrl = this.sanitizeUrl(result?.license_url || '');

            return {
                thumbnail: previewUrl,
                url: fullUrl || previewUrl,
                source,
                foreignLandingUrl,
                creator,
                creatorUrl,
                license,
                licenseUrl
            };
        }

        normalizeTextForTitleMatch(value) {
            return String(value || '')
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, ' ')
                .trim();
        }

        doesOpenverseTitleMatch(title, query) {
            const normalizedTitle = this.normalizeTextForTitleMatch(title);
            const normalizedQuery = this.normalizeTextForTitleMatch(query);
            if (!normalizedTitle || !normalizedQuery) return false;
            const tokens = normalizedQuery.split(/\s+/).filter((token) => token.length > 1);
            if (!tokens.length) return false;
            return tokens.every((token) => normalizedTitle.includes(token));
        }

        isIrrelevantOpenverseTitle(title) {
            const text = String(title || '').toLowerCase().trim();
            if (!text) return false;
            const badTerms = /\b(cahier|document|scan|scanned|page|pages)\b/i;
            const trailingPage = /(?:^|[\s_-])p\s*\d+\s*$/i;
            return badTerms.test(text) || trailingPage.test(text);
        }

        async fetchOpenverseImage(query) {
            const normalizedQuery = this.normalizeImageQuery(query);
            if (!normalizedQuery) throw new Error('Openverse: empty query');

            const queries = this.buildOpenverseSearchQueries(normalizedQuery);
            let data = null;
            let results = [];
            let usedQuery = normalizedQuery;
            for (const q of queries) {
                const encoded = encodeURIComponent(q);
                const url = `https://api.openverse.org/v1/images/?q=${encoded}&page_size=1`;
                data = await this.fetchOpenverseApiJson(url);
                results = Array.isArray(data?.results) ? data.results : [];
                if (results.length) {
                    usedQuery = q;
                    break;
                }
            }
            if (!results.length) throw new Error('Openverse: no results');
            const result = results[0];
            const payload = this.buildOpenverseMetadata(result);
            if (!payload) throw new Error('Openverse: no image url');
            payload.titleMatch = this.doesOpenverseTitleMatch(result?.title || '', usedQuery);
            return payload;
        }

        escapeToolAttrValue(value) {
            return String(value || '')
                .replace(/["[\]]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
        }

        normalizeIntentText(text) {
            return String(text || '')
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[’']/g, "'")
                .replace(/\s+/g, ' ')
                .trim();
        }

        prefersWebImageSearch(text) {
            const normalized = this.normalizeIntentText(text);
            if (!normalized) return false;
            return /\b(sur le web|sur internet|sur l internet|on the web|from the web|on the internet|web image|web photo|image web|photo web|internet|online|openverse|royalty free|stock photo|source image|existing image|image existante)\b/i.test(normalized);
        }

        hasAnyPattern(text, patterns) {
            return patterns.some(pattern => pattern.test(text));
        }

        getImageIntentPatterns() {
            return {
                noImage: [
                    /\b(sans|pas d|no|without|sin|sem|senza|ohne)\s+(image|photo|picture|imagen|imagem|immagine|bild|foto|illustration)\b/i,
                    /(画像なし|写真なし|이미지\s*없이|без\s+(изображения|картинки|фото))/i
                ],
                explicitGenerate: [
                    /\b(genere|generer|cree|creer|dessine|imagine|fabrique|produis)\b.*\b(image|photo|illustration|dessin|visuel)\b/i,
                    /\b(generate|create|draw|make|produce)\b.*\b(image|photo|picture|illustration|visual)\b/i,
                    /\b(genera|crear|crea|dibuja|haz)\b.*\b(imagen|foto|ilustracion)\b/i,
                    /\b(erzeuge|erstelle|zeichne|mach)\b.*\b(bild|foto|illustration)\b/i,
                    /\b(genera|crea|disegna)\b.*\b(immagine|foto|illustrazione)\b/i,
                    /\b(gerar|criar|desenhe|desenha)\b.*\b(imagem|foto|ilustracao)\b/i,
                    /(生成|作成|描いて|画像を作|画像生成|그려|생성|создай|нарисуй|сгенерируй)/i
                ],
                explicitImageNoun: [
                    /^\s*(?:une?\s+|des\s+|an?\s+|the\s+|una?\s+|un\s+|ein(?:e)?\s+)?(?:image|photo|picture|foto|imagen|imagem|immagine|bild|illustration)\s+(?:de|d'|of|for|sobre|von|di|da|do|del)\s+/i,
                    /^\s*(?:image|photo|picture|foto|imagen|imagem|immagine|bild)\s*[:\-]\s*/i,
                    /(画像|写真|이미지|사진|изображение|картинка|фото)/i
                ],
                explicitShow: [
                    /\b(montre|affiche|trouve|voir|visuel|visualise)\b.*\b(image|photo|illustration|visuel)?/i,
                    /\b(show|display|find|see)\b.*\b(image|photo|picture|visual)?/i,
                    /\b(muestra|muestrame|mostrar|ver)\b.*\b(imagen|foto|visual)?/i,
                    /\b(zeige|zeig|anzeigen|sehen)\b.*\b(bild|foto)?/i,
                    /\b(mostra|mostrami|vedere)\b.*\b(immagine|foto)?/i,
                    /\b(mostre|mostrar|ver)\b.*\b(imagem|foto)?/i,
                    /(見せて|表示|보여|покажи|mostrar)/i
                ],
                visualLook: [
                    /(a quoi ressemble|quoi ressemble|ressemble a|what does .+ look like|looks? like|como se ve|como luce|que aspecto tiene|wie sieht .+ aus|wie schaut .+ aus|che aspetto ha|com'?e fatto|como e|como parece)/i,
                    /(どんな見た目|어떻게 생겼|как выглядит)/i
                ],
                weakDefinition: [
                    /^(c'est quoi|c est quoi|qu'est-ce que|quest-ce que|what is|what's|que es|que e|was ist|cos'e|cosa e|o que e)\b/i
                ],
                explanationBlocker: [
                    /\b(comment|pourquoi|expliquer|explique|guide|tutoriel|how to|why|explain|tutorial|como hacer|por que|porque|wie kann|warum|come fare|perche|как сделать|почему)\b/i
                ]
            };
        }

        detectImageIntent(userText, reasoningLevel = this.state.reasoningEffort, assistantText = '') {
            if (!userText || /\[tool:(show_image|generate_image)\b/i.test(assistantText || '')) {
                return { action: 'none', query: '' };
            }
            if (this.musicSearchLooksExplicit(userText)) {
                return { action: 'none', query: '' };
            }

            const normalized = this.normalizeIntentText(userText);
            if (!normalized || normalized.length > 220) return { action: 'none', query: '' };

            const patterns = this.getImageIntentPatterns();
            if (this.hasAnyPattern(normalized, patterns.noImage)) {
                return { action: 'none', query: '' };
            }

            const query = this.extractImageQuery(userText);
            const wantsWebImage = this.prefersWebImageSearch(userText);
            const isHighTrustLevel = ['medium', 'high', 'ultra'].includes(reasoningLevel);
            const isExplicitLevel = ['minimal', 'low', 'medium', 'high', 'ultra', 'auto'].includes(reasoningLevel);

            if (isExplicitLevel && this.hasAnyPattern(normalized, patterns.explicitGenerate)) {
                return { action: 'generate_image', query, confidence: 'explicit' };
            }

            if (isExplicitLevel && this.hasAnyPattern(normalized, patterns.explicitImageNoun)) {
                return { action: wantsWebImage ? 'show_image' : 'generate_image', query, confidence: 'explicit' };
            }

            if (isExplicitLevel && this.hasAnyPattern(normalized, patterns.explicitShow)) {
                return { action: 'show_image', query, confidence: 'explicit' };
            }

            if (isHighTrustLevel && this.hasAnyPattern(normalized, patterns.visualLook)) {
                return { action: 'show_image', query, confidence: 'clear' };
            }

            if (reasoningLevel === 'ultra' && this.hasAnyPattern(normalized, patterns.weakDefinition) && !this.hasAnyPattern(normalized, patterns.explanationBlocker)) {
                return { action: 'show_image', query, confidence: 'weak' };
            }

            return { action: 'none', query: '' };
        }

        shouldAutoShowImage(userText, reasoningLevel, assistantText) {
            return this.detectImageIntent(userText, reasoningLevel, assistantText).action !== 'none';
        }

        extractImageQuery(userText) {
            let query = String(userText || '').trim();
            const patterns = [
                /^\s*à?\s*quoi\s+ressemble\s+/i,
                /^\s*a\s*quoi\s+ressemble\s+/i,
                /^\s*que\s+aspecto\s+tiene\s+/i,
                /^\s*como\s+se\s+ve\s+/i,
                /^\s*como\s+luce\s+/i,
                /^\s*wie\s+sieht\s+/i,
                /^\s*wie\s+schaut\s+/i,
                /^\s*che\s+aspetto\s+ha\s+/i,
                /^\s*com['’]?e\s+fatto\s+/i,
                /^\s*como\s+e\s+/i,
                /^\s*what\s+does\s+/i,
                /^\s*what\s+is\s+/i,
                /^\s*what['’]s\s+/i,
                /^\s*c'?est\s+quoi\s+/i,
                /^\s*qu['’]?est-ce\s+que\s+/i,
                /^\s*montre(?:[-\s]moi)?\s+/i,
                /^\s*affiche(?:[-\s]moi)?\s+/i,
                /^\s*trouve\s+/i,
                /^\s*show\s+me\s+/i,
                /^\s*show\s+/i,
                /^\s*display\s+/i,
                /^\s*find\s+/i,
                /^\s*muestra(?:me)?\s+/i,
                /^\s*mu[eé]strame\s+/i,
                /^\s*mostrar\s+/i,
                /^\s*zeige(?:\s+mir)?\s+/i,
                /^\s*zeig(?:\s+mir)?\s+/i,
                /^\s*mostra(?:mi)?\s+/i,
                /^\s*mostre\s+/i,
                /^\s*image\s+de\s+/i,
                /^\s*photo\s+de\s+/i,
                /^\s*image\s+d['’]\s*/i,
                /^\s*photo\s+d['’]\s*/i,
                /^\s*(?:an?\s+)?(?:image|photo|picture)\s+(?:of|for)\s+/i,
                /^\s*(?:una?\s+)?(?:imagen|foto)\s+(?:de|del)\s+/i,
                /^\s*(?:ein(?:e)?\s+)?(?:bild|foto)\s+(?:von)\s+/i,
                /^\s*(?:un(?:a)?\s+)?(?:immagine|foto)\s+(?:di)\s+/i,
                /^\s*(?:uma?\s+)?(?:imagem|foto)\s+(?:de|do|da)\s+/i,
                /^\s*(genere|generer|cree|creer|dessine|imagine|fabrique|produis)\s+(?:moi\s+)?(?:une?\s+)?(?:image|photo|illustration|dessin|visuel)?\s*(?:de|d['’])?\s*/i,
                /^\s*(generate|create|draw|make|produce)\s+(?:an?\s+)?(?:image|photo|picture|illustration|visual)?\s*(?:of|for)?\s*/i,
                /^\s*(genera|crear|crea|dibuja|haz)\s+(?:una?\s+)?(?:imagen|foto|ilustracion)?\s*(?:de|del)?\s*/i
            ];
            patterns.forEach((pattern) => {
                query = query.replace(pattern, '');
            });

            query = query.replace(/[?!.]+$/, '').trim();
            query = query.replace(/\b(sur\s+le\s+web|sur\s+internet|sur\s+l['’]internet|on\s+the\s+web|from\s+the\s+web|on\s+the\s+internet|web|internet|online|openverse)\b/ig, ' ').trim();
            query = query.replace(/\s+(look\s+like|looks\s+like|ressemble|parece|se\s+ve|luce|aussieht|aus|sieht|schaut)$/i, '').trim();
            query = query.replace(/^(un|une|des|le|la|les|du|de la|the|a|an|el|los|las|una|unos|unas|der|die|das|ein|eine|il|lo|gli|i|o|os|as|um|uma)\s+/i, '');
            query = query.replace(/^d['’]\s+/i, '');
            query = query.replace(/\s+/g, ' ').trim();
            return query || String(userText || '').trim();
        }

        correctImageToolForWebRequests(userText, assistantText) {
            const text = String(assistantText || '');
            if (!text || !this.prefersWebImageSearch(userText)) return text;
            if (!/\[tool:generate_image\b/i.test(text)) return text;

            const fallbackQuery = this.escapeToolAttrValue(this.extractImageQuery(userText) || userText || 'image');
            let replaced = text.replace(/\[tool:generate_image\b[^\]]*prompt=\"([^\"]+)\"[^\]]*\]/i, (_match, prompt) => {
                const query = this.escapeToolAttrValue(prompt || fallbackQuery);
                return `[tool:show_image query="${query}" alt="${query}"]`;
            });

            replaced = replaced
                .replace(/voici\s+une\s+image\s+[^:\n]*g[eé]n[ée]r[ée]e?\s*:/i, 'Here is a web image:')
                .replace(/here\s+is\s+an?\s+image\s+i\s+generated\s*:/i, 'Here is a web image:')
                .replace(/here\s+is\s+the\s+image\s+i\s+generated\s*:/i, 'Here is a web image:');

            return replaced;
        }

        shouldUseImageIntentRouter(userText, reasoningLevel) {
            if (!['high', 'ultra'].includes(reasoningLevel)) return false;
            const normalized = this.normalizeIntentText(userText);
            if (!normalized || normalized.length > 180) return false;
            const patterns = this.getImageIntentPatterns();
            if (this.hasAnyPattern(normalized, patterns.noImage) || this.hasAnyPattern(normalized, patterns.explanationBlocker)) return false;
            return /^(c'est quoi|c est quoi|qu'est-ce que|quest-ce que|what is|what's|que es|que e|was ist|cos'e|cosa e|o que e|как выглядит|что такое|これは|何ですか)/i.test(normalized)
                || this.hasAnyPattern(normalized, patterns.visualLook);
        }

        shouldNormalizeImageQueryWithAI(userText, query, reasoningLevel) {
            if (!['medium', 'high', 'ultra'].includes(reasoningLevel)) return false;
            const normalizedInput = this.normalizeIntentText(userText);
            const normalizedQuery = this.normalizeIntentText(query);
            if (!normalizedInput || normalizedInput.length > 220 || !normalizedQuery) return false;
            if (normalizedQuery.length <= 2) return false;
            if (/[^\x00-\x7F]/.test(query)) return true;
            if (/\b(montre|affiche|genere|generer|cree|creer|dessine|image|photo|arbre|chien|chat|fleur|oiseau|voiture|maison|mer|montagne|paysage|muestra|mostrar|imagen|perro|gato|arbol|zeige|bild|hund|katze|mostra|immagine|cane|gatto|mostre|imagem)\b/i.test(normalizedInput)) return true;
            if (normalizedQuery.split(/\s+/).length > 5) return true;
            return false;
        }

        async routeImageIntentWithAI(userText) {
            const routerSystemPrompt = `You classify whether a browser assistant should add an image tool call.

Return ONLY compact JSON:
{"action":"generate_image|show_image|none","query":"short search or generation query","aspect":"square|landscape|portrait"}

Rules:
- generate_image: user wants to create/draw/generate an image.
- show_image: user wants to see what something looks like, asks for a photo/image, or asks a visual "what is this" style question.
- none: explanations, how-to, why, opinions, code, or non-visual questions.
- Never invent URLs.
- The query must be short English whenever possible, even if the user's prompt is in another language.
- Use aspect when the user implies a poster, phone screen, wallpaper, portrait, landscape, square, or 16:9/9:16/4:3 format.
- Keep important visual details, but remove filler words such as "show me", "image of", "royalty free", articles, and politeness.`;

            try {
                const model = await this.getPreferredTextModel('fast');
                const payload = {
                    messages: [
                        { role: 'system', content: routerSystemPrompt },
                        { role: 'user', content: String(userText || '').slice(0, 300) }
                    ],
                    model,
                    temperature: 0,
                    max_tokens: 90,
                    jsonMode: true,
                    response_format: { type: 'json_object' },
                    seed: Math.floor(Math.random() * 10000)
                };
                const { data } = await this.requestPollinationsChatWithFallbackModels(payload, 'Image intent router', 'minimal');
                const parsed = this.parseAssistantJsonContent(data);
                const action = ['generate_image', 'show_image', 'none'].includes(parsed?.action) ? parsed.action : 'none';
                const query = String(parsed?.query || this.extractImageQuery(userText)).trim();
                const aspect = ['square', 'landscape', 'portrait'].includes(parsed?.aspect) ? parsed.aspect : '';
                return { action, query, aspect, confidence: 'router' };
            } catch (error) {
                console.warn('NeuraVeil image intent router failed:', error);
                return { action: 'none', query: '' };
            }
        }

        async maybeInjectAutoImage(userText, reasoningLevel, assistantText) {
            if (/\[tool:(search_music|generate_music)\b/i.test(assistantText || '')) {
                return this.stripMusicConflictingImageTools(assistantText);
            }
            let intent = this.detectImageIntent(userText, reasoningLevel, assistantText);
            if (intent.action === 'none' && this.shouldUseImageIntentRouter(userText, reasoningLevel)) {
                intent = await this.routeImageIntentWithAI(userText);
            } else if (intent.action !== 'none' && this.shouldNormalizeImageQueryWithAI(userText, intent.query, reasoningLevel)) {
                const routedIntent = await this.routeImageIntentWithAI(userText);
                if (routedIntent.action !== 'none' && routedIntent.query) {
                    intent = routedIntent;
                }
            }
            if (intent.action === 'none') return assistantText;

            const query = intent.query || this.extractImageQuery(userText);
            if (!query) return assistantText;

            const safeQuery = this.escapeToolAttrValue(query);
            const safeAlt = this.escapeToolAttrValue(query);
            const aspectAttr = intent.aspect ? ` aspect="${this.escapeToolAttrValue(intent.aspect)}"` : '';
            const toolTag = intent.action === 'generate_image'
                ? `[tool:generate_image prompt="${safeQuery}"${aspectAttr}]`
                : `[tool:show_image query="${safeQuery}" alt="${safeAlt}"]`;
            if (!assistantText || !assistantText.trim()) {
                return toolTag;
            }
            return `${assistantText}\n\n${toolTag}`;
        }

        buildWebImageAttributionHtml(data) {
            const creator = String(data?.creator || '').trim();
            const license = String(data?.license || '').trim();
            const titleMatch = data?.titleMatch !== false;
            const mismatchNotice = titleMatch ? '' : 'Image does not match.';
            if (!creator && !license) return mismatchNotice;

            const creatorUrl = this.sanitizeUrl(data?.creatorUrl || '');
            const licenseUrl = this.sanitizeUrl(data?.licenseUrl || '');
            const parts = [];

            if (creator) {
                const safeCreator = this.escapeHtml(creator);
                const value = creatorUrl
                    ? `<a href="${this.escapeAttr(creatorUrl)}" target="_blank" rel="noopener noreferrer">${safeCreator}</a>`
                    : safeCreator;
                parts.push(`By ${value}`);
            }

            if (license) {
                const safeLicense = this.escapeHtml(license);
                const value = licenseUrl
                    ? `<a href="${this.escapeAttr(licenseUrl)}" target="_blank" rel="noopener noreferrer">${safeLicense}</a>`
                    : safeLicense;
                    parts.push(`License ${value}`);
            }

            const line = parts.join(' | ');
            if (!mismatchNotice) return line;
            return line ? `${mismatchNotice} ${line}` : mismatchNotice;
        }

        async searchWebImage(query) {
            return await this.fetchOpenverseImage(query);
        }

        updateToolImageCaption(container, text, allowHtml = false) {
            const caption = container.querySelector('.nv-tool-caption');
            if (!caption) return;
            const raw = String(text || '');
            const value = raw.trim();
            if (value) {
                if (allowHtml) {
                    caption.innerHTML = raw;
                } else {
                    caption.textContent = value;
                }
                caption.style.display = 'block';
            } else {
                caption.textContent = '';
                caption.style.display = 'none';
            }
        }

        initToolImages(container) {
            const nodes = container.querySelectorAll('[data-nv-image-query]');
            nodes.forEach((node) => {
                if (node.dataset.nvImageLoaded === '1') return;
                node.dataset.nvImageLoaded = '1';
                const query = node.dataset.nvImageQuery || '';
                const img = node.querySelector('img');
                if (!query || !img) return;
                this.setImageFrameLoading(img, true, 'Searching image...');
                const alt = node.dataset.nvImageAlt || query;
                if (!img.alt) img.alt = alt;
                this.searchWebImage(query)
                    .then((result) => {
                        const isString = typeof result === 'string';
                        const sourceLinkEl = node.querySelector('[data-nv-image-source-link]');

                        const applyWebImageResult = (data, previewUrl) => {
                            const fullUrl = data?.url || '';
                            const source = data?.source || '';
                            const foreignLandingUrl = data?.foreignLandingUrl || '';
                            const attributionHtml = data ? this.buildWebImageAttributionHtml(data) : '';

                            if (previewUrl) {
                                img.dataset.nvImageRaw = previewUrl;
                                this.loadExternalImage(img, previewUrl);
                            }
                            if (fullUrl) {
                                img.dataset.nvImageFull = fullUrl;
                            } else {
                                delete img.dataset.nvImageFull;
                            }
                            if (foreignLandingUrl) {
                                img.dataset.nvImageSourceUrl = foreignLandingUrl;
                            } else {
                                delete img.dataset.nvImageSourceUrl;
                            }

                            if (sourceLinkEl) {
                                const safeForeign = this.sanitizeUrl(foreignLandingUrl || '');
                                const sourceValue = String(source || '').trim();
                                if (safeForeign) {
                                    sourceLinkEl.href = safeForeign;
                                    sourceLinkEl.target = '_blank';
                                    sourceLinkEl.rel = 'noopener noreferrer';
                                    sourceLinkEl.textContent = sourceValue ? `${sourceValue}` : 'Source';
                                    sourceLinkEl.style.display = '';
                                } else {
                                    sourceLinkEl.textContent = '';
                                    sourceLinkEl.style.display = 'none';
                                }
                            }

                            this.updateToolImageCaption(node, attributionHtml, true);
                        };

                        const showFallbackState = () => {
                            if (sourceLinkEl) {
                                sourceLinkEl.textContent = '';
                                sourceLinkEl.style.display = 'none';
                            }
                            delete img.dataset.nvImageFull;
                            delete img.dataset.nvImageSourceUrl;
                            this.updateToolImageCaption(node, '', false);
                        };

                        if (isString) {
                            img.onerror = null;
                            if (result) {
                                img.dataset.nvImageRaw = result;
                                this.loadExternalImage(img, result);
                            }
                            showFallbackState();
                            return;
                        }

                        img.onerror = null;
                        const previewUrl = result?.url || '';
                        if (previewUrl) {
                            applyWebImageResult(result, previewUrl);
                        } else {
                            showFallbackState();
                        }
                    })
                    .catch(() => {
                        img.alt = alt;
                        this.updateToolImageCaption(node, '', false);
                        this.setImageFrameLoading(img, false);
                    });
            });
        }

        renderImageActionsHtml(includeLink = false) {
            const linkButton = includeLink
                ? `<button class="nv-image-action" data-nv-image-link title="Copy Image Link" aria-label="Copy Image Link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10.5 5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L13.5 19"/></svg></button>`
                : '';
            return `<div class="nv-image-actions" data-nv-image-actions>
                <button class="nv-image-action" data-nv-image-copy title="Copy Image" aria-label="Copy Image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button>
                <button class="nv-image-action" data-nv-image-download title="Download Image" aria-label="Download Image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg></button>
                ${linkButton}
            </div>`;
        }

        createImageActionsElement() {
            const wrapper = document.createElement('div');
            wrapper.className = 'nv-image-actions';
            wrapper.dataset.nvImageActions = '1';
            wrapper.innerHTML = `
                <button class="nv-image-action" data-nv-image-copy title="Copy Image" aria-label="Copy Image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button>
                <button class="nv-image-action" data-nv-image-download title="Download Image" aria-label="Download Image"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg></button>
            `;
            return wrapper;
        }

        wrapStandaloneImages(container) {
            const images = container.querySelectorAll('img');
            images.forEach((img) => {
                if (img.closest('.nv-tool-image')) return;
                if (img.closest('.nv-image-frame')) return;
                if (img.closest('.nv-tool-code, .nv-code-block')) return;
                const parent = img.parentNode;
                if (!parent) return;

                const frame = document.createElement('div');
                frame.className = 'nv-image-frame';
                const actions = this.createImageActionsElement();
                parent.insertBefore(frame, img);
                frame.appendChild(actions);
                frame.appendChild(img);
            });
        }

        initImageActions(container) {
            const frames = container.querySelectorAll('.nv-image-frame');
            frames.forEach((frame) => {
                if (frame.dataset.nvImageActionsBound === '1') return;
                frame.dataset.nvImageActionsBound = '1';

                const img = frame.querySelector('img');
                if (!img) return;

                const getImageUrl = () => {
                    return img.dataset.nvImageFull || img.currentSrc || img.src || '';
                };

                const copyBtn = frame.querySelector('[data-nv-image-copy]');
                if (copyBtn) {
                    copyBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const url = getImageUrl();
                        if (!url) return;
                        this.copyImageToClipboard(url, copyBtn);
                    });
                }

                const downloadBtn = frame.querySelector('[data-nv-image-download]');
                if (downloadBtn) {
                    downloadBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const url = getImageUrl();
                        if (!url) return;
                        const filename = this.buildImageFilename(img.alt || '', url);
                        this.downloadImage(url, filename);
                    });
                }

                const linkBtn = frame.querySelector('[data-nv-image-link]');
                if (linkBtn) {
                    linkBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const url = getImageUrl();
                        if (!url) return;
                        this.copyTextToClipboard(url, linkBtn, 'primary');
                    });
                }
            });
        }

        setMusicStatus(card, message, variant = 'info') {
            const statusEl = card?.querySelector?.('[data-nv-music-status]');
            if (!statusEl) return;
            statusEl.textContent = message || '';
            statusEl.dataset.variant = variant;
            statusEl.classList.toggle('visible', Boolean(message));
        }

        setMusicReadyState(card, ready) {
            if (!card) return;
            card.dataset.nvMusicReady = ready ? '1' : '0';
        }

        getMusicPlayIconSvg() {
            return '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M8 6.5v11a1 1 0 0 0 1.54.84l8.3-5.5a1 1 0 0 0 0-1.68l-8.3-5.5A1 1 0 0 0 8 6.5z"></path></svg>';
        }

        getMusicPauseIconSvg() {
            return '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><rect x="7" y="6" width="4" height="12" rx="1.4"></rect><rect x="13" y="6" width="4" height="12" rx="1.4"></rect></svg>';
        }

        async ensureMusicAudioContext() {
            if (this.musicAudioContext) return this.musicAudioContext;
            const Ctor = window.AudioContext || window.webkitAudioContext;
            if (!Ctor) return null;
            this.musicAudioContext = new Ctor();
            return this.musicAudioContext;
        }

        formatMusicTime(seconds) {
            const total = Math.max(0, Math.floor(Number(seconds) || 0));
            const mins = Math.floor(total / 60);
            const secs = total % 60;
            return `${mins}:${String(secs).padStart(2, '0')}`;
        }

        updateCustomMusicProgress(card) {
            if (!card) return;
            const progressEl = card.querySelector('[data-nv-music-progress]');
            const timeEl = card.querySelector('[data-nv-music-time]');
            const buffer = card._nvMusicAudioBuffer || null;
            const duration = Number(buffer?.duration || 0);
            const clamped = this.getCurrentCustomMusicOffset(card);
            if (progressEl) {
                const ratio = duration ? Math.min(1, clamped / duration) : 0;
                progressEl.style.width = `${ratio * 100}%`;
            }
            if (timeEl) {
                timeEl.textContent = `${this.formatMusicTime(clamped)} / ${duration ? this.formatMusicTime(duration) : '--:--'}`;
            }
        }

        getCurrentCustomMusicOffset(card) {
            if (!card) return 0;
            const buffer = card._nvMusicAudioBuffer || null;
            const duration = Number(buffer?.duration || 0);
            const playback = card._nvMusicPlayback || null;
            const context = this.musicAudioContext;
            let offset = Number(card._nvMusicPausedAt || 0);
            if (playback && context) {
                offset = playback.offsetAtStart + Math.max(0, context.currentTime - playback.startedAt);
            }
            if (!duration) return Math.max(0, offset);
            return Math.min(duration, Math.max(0, offset));
        }

        syncCustomMusicUi(card, isPlaying) {
            if (!card) return;
            const toggleBtn = card.querySelector('[data-nv-music-toggle]');
            if (toggleBtn) {
                toggleBtn.innerHTML = isPlaying ? this.getMusicPauseIconSvg() : this.getMusicPlayIconSvg();
                toggleBtn.title = isPlaying ? 'Pause preview' : 'Play preview';
                toggleBtn.setAttribute('aria-label', isPlaying ? 'Pause preview' : 'Play preview');
            }
            card.classList.toggle('nv-music-playing', Boolean(isPlaying));
            this.updateCustomMusicProgress(card);
        }

        pauseCustomMusicPlayback(card, fromEnded = false) {
            if (!card) return;
            if (card._nvMusicProgressTimer) {
                clearInterval(card._nvMusicProgressTimer);
                card._nvMusicProgressTimer = null;
            }
            const playback = card._nvMusicPlayback;
            const offset = fromEnded ? 0 : this.getCurrentCustomMusicOffset(card);
            card._nvMusicPausedAt = offset;
            if (playback?.source) {
                try {
                    playback.source.onended = null;
                    if (!fromEnded) playback.source.stop(0);
                } catch (e) {
                    // Ignore stop race conditions.
                }
                try {
                    playback.source.disconnect();
                } catch (e) {
                    // Ignore disconnect issues.
                }
            }
            card._nvMusicPlayback = null;
            if (fromEnded) {
                card._nvMusicPausedAt = 0;
            }
            this.syncCustomMusicUi(card, false);
        }

        async playCustomMusic(card) {
            if (!card) return;
            if (!card._nvMusicAudioBuffer) {
                await this.loadMusicAudio(card);
            }
            const buffer = card._nvMusicAudioBuffer;
            if (!buffer) throw new Error('Preview unavailable.');
            const context = await this.ensureMusicAudioContext();
            if (!context) throw new Error('Audio preview is not supported in this browser.');
            if (context.state === 'suspended') {
                await context.resume();
            }
            this.pauseCustomMusicPlayback(card);
            const duration = Number(buffer.duration || 0);
            const offset = Math.min(duration ? Math.max(0, duration - 0.05) : 0, this.getCurrentCustomMusicOffset(card));
            const source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            card._nvMusicPlayback = {
                source,
                startedAt: context.currentTime,
                offsetAtStart: offset
            };
            source.onended = () => {
                if (card._nvMusicPlayback?.source === source) {
                    this.pauseCustomMusicPlayback(card, true);
                }
            };
            source.start(0, offset);
            card._nvMusicProgressTimer = setInterval(() => this.updateCustomMusicProgress(card), 250);
            this.syncCustomMusicUi(card, true);
        }

        seekCustomMusic(card, ratio) {
            if (!card) return;
            const buffer = card._nvMusicAudioBuffer || null;
            const duration = Number(buffer?.duration || 0);
            if (!duration) return;
            const nextOffset = Math.min(duration, Math.max(0, duration * Math.min(1, Math.max(0, ratio))));
            const isPlaying = Boolean(card._nvMusicPlayback);
            card._nvMusicPausedAt = nextOffset;
            if (isPlaying) {
                this.playCustomMusic(card).catch((error) => {
                    this.setMusicStatus(card, this.formatUserFacingError(error, 'Playback is unavailable right now.'), 'error');
                });
            } else {
                this.updateCustomMusicProgress(card);
            }
        }

        getMusicQueryStopwords() {
            return new Set([
                'musique', 'musiques', 'muique', 'muisque', 'musqiue', 'chanson', 'audio', 'son', 'sons', 'track', 'song', 'music',
                'trouve', 'trouver', 'chercher', 'cherche', 'recherche', 'montre', 'donne', 'veux', 'voudrais', 'aimerais',
                'gratuit', 'gratuite', 'libre', 'droits', 'free', 'royalty', 'creative', 'commons',
                'moi', 'me', 'mon', 'ma', 'mes', 'my',
                'de', 'du', 'des', 'la', 'le', 'les', 'un', 'une', 'et', 'ou', 'pour', 'avec', 'dans', 'sur',
                'the', 'a', 'an', 'of', 'and', 'or', 'for', 'with', 'to', 'in', 'on'
            ]);
        }

        normalizeMusicSearchQuery(query) {
            const raw = String(query || '').trim();
            if (!raw) return '';
            let cleaned = raw
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/libre\s+de\s+droits/gi, ' ')
                .replace(/royalty[-\s]?free/gi, ' ')
                .replace(/creative\s+commons/gi, ' ')
                .replace(/\bmuique\b/gi, 'musique')
                .replace(/\bmuisque\b/gi, 'musique')
                .replace(/\bmusqiue\b/gi, 'musique')
                .replace(/\barcad\b/gi, 'arcade')
                .replace(/dernier\s+tube\s+de/gi, ' ')
                .replace(/dernier\s+son\s+de/gi, ' ')
                .replace(/derniere\s+chanson\s+de/gi, ' ')
                .replace(/[^\p{L}\p{N}\s-]/gu, ' ')
                .replace(/[_-]/g, ' ')
                .replace(/\s+/g, ' ')
                .trim();
            if (!cleaned) return raw.slice(0, 80);

            const stopwords = this.getMusicQueryStopwords();
            const tokens = cleaned.toLowerCase().split(/\s+/).filter(Boolean);
            const kept = [];
            tokens.forEach((token) => {
                if (stopwords.has(token)) return;
                if (!kept.includes(token)) kept.push(token);
            });
            return (kept.length ? kept : tokens).slice(0, 8).join(' ');
        }

        buildOpenverseAudioQueries(rawQuery) {
            const base = String(rawQuery || '').trim();
            const normalized = this.normalizeMusicSearchQuery(base);
            const queries = [base, normalized].filter(Boolean);
            if (/(dormir|sleep|relax|calme|douce|soft|chill|ambient)/i.test(base)) {
                queries.push('sleep ambient music', 'soft ambient music', 'calm piano');
            }
            if (/(arcad|arcade|jeu|game|video\s*game|chiptune|8\s*bit|pixel)/i.test(base)) {
                queries.push('arcade game music', 'chiptune', '8 bit music', 'video game loop', 'game background music');
            }
            if (/(tube|hit|populaire|dernier|latest)/i.test(base)) {
                queries.push(normalized ? `${normalized} music` : 'popular music');
            }
            return Array.from(new Set(queries.map(q => q.trim()).filter(Boolean)));
        }

        buildOpenverseAudioMetadata(result, usedQuery) {
            const audioUrl = this.sanitizeUrl(result?.url || '');
            if (!audioUrl) return null;
            const title = String(result?.title || usedQuery || 'Music found').trim();
            const source = this.formatOpenverseDisplayName(result?.source || result?.provider || '');
            const foreignLandingUrl = this.sanitizeUrl(result?.foreign_landing_url || '');
            const creator = this.formatOpenverseDisplayName(result?.creator || '');
            const creatorUrl = this.sanitizeUrl(result?.creator_url || '');
            const license = this.formatOpenverseLicense(result);
            const licenseUrl = this.sanitizeUrl(result?.license_url || '');
            const filetype = String(result?.filetype || '').trim().toLowerCase();
            const tags = Array.isArray(result?.tags)
                ? result.tags.map(tag => tag?.name || '').filter(Boolean).slice(0, 5)
                : [];

            return {
                title,
                audioUrl,
                source,
                foreignLandingUrl,
                creator,
                creatorUrl,
                license,
                licenseUrl,
                filetype,
                tags,
                usedQuery
            };
        }

        async fetchOpenverseAudio(query) {
            const queries = this.buildOpenverseAudioQueries(query);
            let lastError = null;
            for (const q of queries) {
                try {
                    const encoded = encodeURIComponent(q);
                    const url = `https://api.openverse.org/v1/audio/?q=${encoded}&page_size=8`;
                    const data = await this.fetchOpenverseApiJson(url);
                    const results = Array.isArray(data?.results) ? data.results : [];
                    const result = results.find(item => this.sanitizeUrl(item?.url || ''));
                    const payload = this.buildOpenverseAudioMetadata(result, q);
                    if (payload) return payload;
                } catch (error) {
                    lastError = error;
                }
            }
            throw lastError || new Error('No free audio result found.');
        }

        async fetchAudioBlob(url) {
            const response = await this.request(url, { responseType: 'arraybuffer' });
            if (!response.ok) throw new Error(`Audio not found (${response.status || 'error'}).`);
            const contentType = response.headers?.get?.('content-type') || '';
            const blob = await response.blob();
            return contentType ? new Blob([blob], { type: contentType }) : blob;
        }

        async loadMusicAudio(card) {
            const audio = card?.querySelector?.('audio');
            const query = card?.dataset?.nvMusicQuery || '';
            if (!card || !query) return;
            if (card.dataset.nvMusicLoaded === '1') return;
            if (card.dataset.nvMusicLoading === '1' && card._nvMusicPromise) {
                return await card._nvMusicPromise;
            }
            const useCustomPlayer = card.dataset.nvMusicPlayer === 'custom';

            card.dataset.nvMusicLoading = '1';
            this.setMusicReadyState(card, false);
            this.setMusicStatus(card, 'Searching for a free track...', 'info');
            card._nvMusicPromise = (async () => {
                const result = await this.fetchOpenverseAudio(query);
                const blob = await this.fetchAudioBlob(result.audioUrl);
                const blobUrl = URL.createObjectURL(blob);
                if (audio?.dataset?.nvMusicBlobUrl) {
                    URL.revokeObjectURL(audio.dataset.nvMusicBlobUrl);
                }
                if (audio) {
                    audio.dataset.nvMusicBlobUrl = blobUrl;
                    audio.dataset.nvMusicSourceUrl = result.audioUrl;
                    if (!useCustomPlayer) {
                        audio.src = blobUrl;
                    } else {
                        audio.removeAttribute('src');
                        audio.load?.();
                    }
                }
                if (useCustomPlayer) {
                    const context = await this.ensureMusicAudioContext();
                    const arrayBuffer = await blob.arrayBuffer();
                    card._nvMusicAudioBuffer = context
                        ? await context.decodeAudioData(arrayBuffer.slice(0))
                        : null;
                    this.updateCustomMusicProgress(card);
                    this.syncCustomMusicUi(card, false);
                }
                card.dataset.nvMusicLoaded = '1';

                const title = card.querySelector('[data-nv-music-title]');
                if (title) title.textContent = result.title;
                card.dataset.nvMusicTitle = result.title;

                const promptEl = card.querySelector('[data-nv-music-prompt]');
                const details = [result.creator, result.source, result.license].filter(Boolean).join(' · ');
                if (promptEl) promptEl.textContent = details || query;

                const meta = card.querySelector('[data-nv-music-meta]');
                if (meta) {
                    const typeText = result.filetype ? result.filetype.toUpperCase() : 'audio';
                    meta.textContent = `Openverse · ${typeText}`;
                }

                const sourceLink = card.querySelector('[data-nv-music-source]');
                if (sourceLink) {
                    const sourceUrl = result.foreignLandingUrl || result.audioUrl;
                    sourceLink.href = sourceUrl;
                    sourceLink.title = 'Open source';
                    sourceLink.setAttribute('aria-label', 'Open music source');
                }

                const downloadBtn = card.querySelector('[data-nv-music-download]');
                if (downloadBtn) {
                    downloadBtn.dataset.nvMusicDownload = this.buildMusicFilename(result.title, result.audioUrl);
                }

                const copyBtn = card.querySelector('[data-nv-music-copy]');
                if (copyBtn) {
                    copyBtn.dataset.nvMusicCopyUrl = result.foreignLandingUrl || result.audioUrl;
                }
                this.setMusicReadyState(card, true);
                this.setMusicStatus(card, '', 'info');
            })();

            try {
                await card._nvMusicPromise;
            } catch (error) {
                this.setMusicReadyState(card, false);
                this.setMusicStatus(card, this.formatUserFacingError(error, 'No free music found for this search.'), 'error');
            } finally {
                card.dataset.nvMusicLoading = '0';
                card._nvMusicPromise = null;
            }
        }

        initMusicActions(container) {
            const cards = container.querySelectorAll('.nv-tool-music');
            cards.forEach((card) => {
                if (card.dataset.nvMusicBound === '1') return;
                card.dataset.nvMusicBound = '1';

                const audio = card.querySelector('audio');
                const copyBtn = card.querySelector('[data-nv-music-copy]');
                const downloadBtn = card.querySelector('[data-nv-music-download]');
                const toggleBtn = card.querySelector('[data-nv-music-toggle]');
                const seekBtn = card.querySelector('[data-nv-music-seek]');
                const useCustomPlayer = card.dataset.nvMusicPlayer === 'custom';

                if (audio && !useCustomPlayer) {
                    this.loadMusicAudio(card);
                    audio.addEventListener('error', () => {
                        if (card.dataset.nvMusicLoaded === '1') {
                            this.setMusicStatus(card, 'Playback is unavailable right now. You can try again or download the file.', 'error');
                        }
                    });
                    audio.addEventListener('canplay', () => {
                        this.setMusicStatus(card, '', 'info');
                    });
                }

                if (useCustomPlayer) {
                    this.loadMusicAudio(card);
                }

                if (toggleBtn) {
                    toggleBtn.addEventListener('click', async (e) => {
                        e.stopPropagation();
                        try {
                            if (useCustomPlayer) {
                                if (card._nvMusicPlayback) {
                                    this.pauseCustomMusicPlayback(card);
                                } else {
                                    await this.playCustomMusic(card);
                                }
                            } else {
                                if (!audio?.dataset?.nvMusicBlobUrl) {
                                    await this.loadMusicAudio(card);
                                }
                                await audio?.play?.();
                            }
                        } catch (error) {
                            this.setMusicStatus(card, this.formatUserFacingError(error, 'Playback is unavailable right now.'), 'error');
                        }
                    });
                }

                if (seekBtn) {
                    seekBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const rect = seekBtn.getBoundingClientRect();
                        const ratio = rect.width ? (e.clientX - rect.left) / rect.width : 0;
                        this.seekCustomMusic(card, ratio);
                    });
                }

                if (copyBtn) {
                    copyBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const url = copyBtn.dataset.nvMusicCopyUrl || audio?.dataset?.nvMusicSourceUrl || '';
                        const fallback = card.dataset.nvMusicQuery || '';
                        this.copyTextToClipboard(url || fallback, copyBtn, 'primary');
                    });
                }

                if (downloadBtn) {
                    downloadBtn.addEventListener('click', async (e) => {
                        e.stopPropagation();
                        const filename = downloadBtn.dataset.nvMusicDownload || this.buildMusicFilename(card.dataset.nvMusicTitle || 'music');
                        this.setMusicStatus(card, 'Preparing download...', 'info');
                        try {
                            if (!(audio?.dataset?.nvMusicBlobUrl)) {
                                await this.loadMusicAudio(card);
                            }
                            await this.downloadMusic(audio?.dataset?.nvMusicBlobUrl || '', filename);
                            this.triggerCopyFeedback(downloadBtn, 'primary');
                            this.setMusicStatus(card, 'Download started.', 'success');
                            setTimeout(() => this.setMusicStatus(card, '', 'info'), 1600);
                        } catch (error) {
                            this.setMusicStatus(card, this.formatUserFacingError(error, 'Download failed.'), 'error');
                        }
                    });
                }
            });
        }

        initCodeCopy(container) {
            const buttons = container.querySelectorAll('.nv-code-copy');
            buttons.forEach((btn) => {
                if (btn.dataset.nvCopyBound === '1') return;
                btn.dataset.nvCopyBound = '1';
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const wrapper = btn.closest('.nv-tool-code, .nv-code-block');
                    const codeEl = wrapper?.querySelector('code');
                    const text = codeEl?.textContent || '';
                    if (!text.trim()) return;
                    this.copyTextToClipboard(text, btn, 'primary');
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
                    html += `<a class="nv-inline-link" href="${safeHref}" target="_blank" rel="noopener noreferrer">${safeText}</a>`;
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
                    html += `<a class="nv-inline-link" href="${safeHref}" target="_blank" rel="noopener noreferrer">${safeText}</a>`;
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

        renderTextWithBoldAndLinks(text) {
            const tokens = [
                { open: '***', close: '***', tag: 'strongem' },
                { open: '___', close: '___', tag: 'strongem' },
                { open: '**', close: '**', tag: 'strong' },
                { open: '~~', close: '~~', tag: 'del' },
                { open: '<u>', close: '</u>', tag: 'u' },
                { open: '*', close: '*', tag: 'em' },
                { open: '_', close: '_', tag: 'em' }
            ];
            const findNextToken = (fromIndex) => {
                let best = null;
                tokens.forEach((token) => {
                    const idx = text.indexOf(token.open, fromIndex);
                    if (idx === -1) return;
                    if (!best || idx < best.idx || (idx === best.idx && token.open.length > best.token.open.length)) {
                        best = { idx, token };
                    }
                });
                return best;
            };

            let html = '';
            let hasMarkup = false;
            let index = 0;

            while (index < text.length) {
                const next = findNextToken(index);
                if (!next) {
                    const tail = text.slice(index);
                    const renderedTail = this.renderTextWithLinks(tail);
                    html += renderedTail.html;
                    hasMarkup = hasMarkup || renderedTail.hasLinks;
                    break;
                }

                if (next.idx > index) {
                    const before = text.slice(index, next.idx);
                    const renderedBefore = this.renderTextWithLinks(before);
                    html += renderedBefore.html;
                    hasMarkup = hasMarkup || renderedBefore.hasLinks;
                }

                const { open, close, tag } = next.token;
                const start = next.idx;
                const end = text.indexOf(close, start + open.length);
                if (end === -1) {
                    const literal = text.slice(start, start + open.length);
                    const renderedLiteral = this.renderTextWithLinks(literal);
                    html += renderedLiteral.html;
                    hasMarkup = hasMarkup || renderedLiteral.hasLinks;
                    index = start + open.length;
                    continue;
                }

                const inner = text.slice(start + open.length, end);
                if (!inner.trim()) {
                    const literal = text.slice(start, end + close.length);
                    const renderedLiteral = this.renderTextWithLinks(literal);
                    html += renderedLiteral.html;
                    hasMarkup = hasMarkup || renderedLiteral.hasLinks;
                    index = end + close.length;
                    continue;
                }

                const renderedInner = this.renderTextWithBoldAndLinks(inner);
                if (tag === 'strongem') {
                    html += `<strong><em>${renderedInner.html}</em></strong>`;
                } else {
                    html += `<${tag}>${renderedInner.html}</${tag}>`;
                }
                hasMarkup = true;
                index = end + close.length;
            }

            return { html, hasMarkup };
        }

        renderTextWithInlineCode(text, options = {}) {
            const inlineCodeRegex = /`([^`]+)`/g;
            const segments = [];
            let output = '';
            let lastIndex = 0;
            let match;

            while ((match = inlineCodeRegex.exec(text)) !== null) {
                output += text.slice(lastIndex, match.index);
                const placeholder = `%%NV-CODE-${segments.length}%%`;
                const code = this.escapeHtml(match[1]);
                segments.push({ placeholder, html: `<code class="nv-inline-code">${code}</code>` });
                output += placeholder;
                lastIndex = inlineCodeRegex.lastIndex;
            }

            output += text.slice(lastIndex);

            const preserveTables = Boolean(options.preserveTables);
            let tableSegments = [];
            if (preserveTables) {
                const extractedTables = this.extractTableSegments(output);
                output = extractedTables.text;
                tableSegments = extractedTables.segments;
            }

            const brPlaceholder = '%%NV-BR%%';
            let hasBr = false;
            if (/<br\s*\/?>/i.test(output)) {
                output = output.replace(/<br\s*\/?>/gi, brPlaceholder);
                hasBr = true;
            }

            const rendered = this.renderTextWithBoldAndLinks(output);
            let html = rendered.html;
            if (hasBr) {
                html = html.split(brPlaceholder).join('<br>');
            }
            if (tableSegments.length) {
                tableSegments.forEach((segment) => {
                    html = html.split(segment.placeholder).join(segment.html);
                });
            }
            segments.forEach((segment) => {
                html = html.split(segment.placeholder).join(segment.html);
            });

            return { html, hasMarkup: rendered.hasMarkup || hasBr || segments.length > 0 || tableSegments.length > 0 };
        }

        renderInlineMarkdown(text, options = {}) {
            const extracted = this.extractMathSegments(text);
            const extractedAbbr = this.extractAbbrSegments(extracted.text);
            const rendered = this.renderTextWithInlineCode(extractedAbbr.text, options);
            let html = rendered.html.replace(/\n/g, '<br>');
            extractedAbbr.segments.forEach((segment) => {
                html = html.split(segment.placeholder).join(segment.html);
            });
            extracted.segments.forEach((segment) => {
                const safeMath = this.escapeHtml(segment.text);
                html = html.split(segment.placeholder).join(safeMath);
            });
            const fallback = this.escapeHtml(text).replace(/\n/g, '<br>');
            return { html, hasMarkup: rendered.hasMarkup || html !== fallback };
        }

        extractTableSegments(text) {
            const segments = [];
            let output = '';
            let lastIndex = 0;
            const regex = /<table\b[\s\S]*?<\/table>/gi;
            let match;

            while ((match = regex.exec(text)) !== null) {
                output += text.slice(lastIndex, match.index);
                const placeholder = `%%NV-TABLE-${segments.length}%%`;
                segments.push({ placeholder, html: match[0] });
                output += placeholder;
                lastIndex = regex.lastIndex;
            }

            output += text.slice(lastIndex);
            return { text: output, segments };
        }

        sanitizeAbbrTag(rawTag) {
            const innerMatch = String(rawTag || '').match(/<abbr\b[^>]*>([\s\S]*?)<\/abbr>/i);
            const innerText = innerMatch ? innerMatch[1] : '';
            const titleMatch = String(rawTag || '').match(/\btitle\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
            const titleText = titleMatch ? (titleMatch[1] || titleMatch[2] || '') : '';
            const safeTitle = titleText ? this.escapeAttr(titleText) : '';
            const safeText = this.escapeHtml(innerText);
            const titleAttr = safeTitle ? ` title="${safeTitle}"` : '';
            return `<abbr${titleAttr}>${safeText}</abbr>`;
        }

        extractAbbrSegments(text) {
            const segments = [];
            let output = '';
            let lastIndex = 0;
            const regex = /<abbr\b[^>]*>[\s\S]*?<\/abbr>/gi;
            let match;

            while ((match = regex.exec(text)) !== null) {
                output += text.slice(lastIndex, match.index);
                const placeholder = `%%NV-ABBR-${segments.length}%%`;
                segments.push({ placeholder, html: this.sanitizeAbbrTag(match[0]) });
                output += placeholder;
                lastIndex = regex.lastIndex;
            }

            output += text.slice(lastIndex);
            return { text: output, segments };
        }

        extractAbbrTags(line) {
            const raw = String(line || '');
            const trimmed = raw.trim();
            if (!trimmed) return null;
            const regex = /<abbr\b[^>]*>[\s\S]*?<\/abbr>/gi;
            const tags = [];
            let lastIndex = 0;
            let match;

            while ((match = regex.exec(trimmed)) !== null) {
                if (match.index > lastIndex && trimmed.slice(lastIndex, match.index).trim()) {
                    return null;
                }
                tags.push(match[0]);
                lastIndex = regex.lastIndex;
            }

            if (!tags.length) return null;
            if (trimmed.slice(lastIndex).trim()) return null;
            return tags;
        }

        renderAbbrList(tags) {
            const items = tags.map(tag => `<li>${this.sanitizeAbbrTag(tag)}</li>`).join('');
            return `<ul class="nv-md-list nv-md-abbr-list">${items}</ul>`;
        }

        renderTableCellContent(text) {
            const normalized = String(text || '');
            const codeBlockRegex = /(^|\n)```([\w-]+)?[ \t]*\n([\s\S]*?)\n```[ \t]*(?=\n|$)/gm;
            let html = '';
            let lastIndex = 0;
            let match;

            while ((match = codeBlockRegex.exec(normalized)) !== null) {
                const startIndex = match.index + (match[1] ? match[1].length : 0);
                const before = normalized.slice(lastIndex, startIndex);
                const beforeRendered = this.renderInlineMarkdown(before);
                html += beforeRendered.html;

                const lang = (match[2] || '').trim();
                const langLabel = lang ? this.escapeHtml(lang) : 'Plain';
                const langClass = lang ? lang.toLowerCase().replace(/[^a-z0-9_-]/g, '') : 'plaintext';
                const rawCode = match[3].replace(/\s+$/, '');
                const safeCode = this.escapeHtml(rawCode);
                const codeClass = ` class="language-${langClass}"`;
                html += `<div class="nv-code-block"><div class="nv-code-header"><div class="nv-code-left"><span class="nv-code-label">Code</span><button class="nv-code-copy" title="Copy code"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button></div><span class="nv-code-lang">${langLabel}</span></div><pre><code${codeClass}>${safeCode}</code></pre></div>`;

                lastIndex = codeBlockRegex.lastIndex;
            }

            const tail = normalized.slice(lastIndex);
            const tailRendered = this.renderInlineMarkdown(tail);
            html += tailRendered.html;
            return html;
        }

        extractMathSegments(text) {
            const delimiters = [
                { start: '$$', end: '$$' },
                { start: '\\\\[', end: '\\\\]' },
                { start: '\\\\(', end: '\\\\)' },
                { start: '\\\\begin{equation}', end: '\\\\end{equation}' }
            ];
            const segments = [];
            let output = '';
            let index = 0;

            const findNext = (fromIndex) => {
                let found = null;
                delimiters.forEach((delim) => {
                    const idx = text.indexOf(delim.start, fromIndex);
                    if (idx === -1) return;
                    if (!found || idx < found.index) {
                        found = { index: idx, delim };
                    }
                });
                return found;
            };

            while (index < text.length) {
                const next = findNext(index);
                if (!next) {
                    output += text.slice(index);
                    break;
                }
                output += text.slice(index, next.index);
                const endIndex = text.indexOf(next.delim.end, next.index + next.delim.start.length);
                if (endIndex === -1) {
                    output += text.slice(next.index);
                    break;
                }
                const raw = text.slice(next.index, endIndex + next.delim.end.length);
                const normalized = this.normalizeMathText(raw);
                const placeholder = `%%NV-MATH-${segments.length}%%`;
                segments.push({ placeholder, text: normalized });
                output += placeholder;
                index = endIndex + next.delim.end.length;
            }

            return { text: output, segments };
        }

        normalizeMathText(text) {
            let output = String(text || '');
            output = output.replace(/\\displaystyle\s*(?=\\begin\{equation\})/g, '');
            output = output.replace(/\\displaystyle/g, '');
            output = output.replace(/\\sum\s*\{([^}]*)\}\s*\^\s*\{([^}]*)\}/g, '\\sum_{$1}^{$2}');
            output = output.replace(/\\prod\s*\{([^}]*)\}\s*\^\s*\{([^}]*)\}/g, '\\prod_{$1}^{$2}');
            output = output.replace(/(^|[^\\a-zA-Z])([a-zA-Z])\{([a-zA-Z0-9]+)\}/g, '$1$2_{$3}');
            return output;
        }

        getTableWrapIconSvg() {
            return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18"/><path d="M3 8h12a3 3 0 0 1 0 6h-1"/><path d="M3 12h12"/><path d="M3 16h6"/><path d="m15 14-3 3 3 3"/></svg>`;
        }

        getTableFullscreenIconSvg() {
            return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h6"/><path d="M3 3v6"/><path d="M21 3h-6"/><path d="M21 3v6"/><path d="M3 21h6"/><path d="M3 21v-6"/><path d="M21 21h-6"/><path d="M21 21v-6"/></svg>`;
        }

        getTableCloseIconSvg() {
            return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        }

        isTableSeparatorLine(line) {
            return /^\s*\|?(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(line || '');
        }

        parseTableRow(line) {
            const trimmed = String(line || '').trim();
            const row = trimmed.replace(/^\|/, '').replace(/\|$/, '');
            const cells = [];
            let current = '';
            let inInline = false;
            let inFence = false;

            for (let i = 0; i < row.length; i += 1) {
                const ch = row[i];
                if (!inInline && row.slice(i, i + 3) === '```') {
                    inFence = !inFence;
                    current += '```';
                    i += 2;
                    continue;
                }
                if (!inFence && ch === '`') {
                    inInline = !inInline;
                    current += ch;
                    continue;
                }
                if (!inFence && !inInline && ch === '|' && row[i - 1] !== '\\') {
                    cells.push(current.trim());
                    current = '';
                    continue;
                }
                current += ch;
            }

            cells.push(current.trim());
            return cells;
        }

        isTableRowLine(line, requireEdges = true) {
            const trimmed = String(line || '').trim();
            if (!trimmed) return false;
            if (requireEdges && !/^\|.*\|$/.test(trimmed)) return false;
            const cells = this.parseTableRow(trimmed);
            return cells.length >= 2;
        }

        isTabRowLine(line) {
            const trimmed = String(line || '');
            if (!trimmed.trim()) return false;
            if (!trimmed.includes('\t')) return false;
            const cells = this.parseTabRow(trimmed);
            return cells.length >= 2;
        }

        parseTabRow(line) {
            return String(line || '').split('\t').map(cell => cell.trim());
        }

        countFenceMarkers(line) {
            const matches = String(line || '').match(/```/g);
            return matches ? matches.length : 0;
        }

        getTableRanges(text) {
            const lines = String(text || '').split('\n');
            const lineStarts = [];
            let cursor = 0;
            lines.forEach((line) => {
                lineStarts.push(cursor);
                cursor += line.length + 1;
            });
            const ranges = [];
            for (let i = 0; i < lines.length - 1; i += 1) {
                const line = lines[i];
                const nextLine = lines[i + 1] || '';
                if (!this.isTableRowLine(line) || !this.isTableSeparatorLine(nextLine)) continue;
                let inFence = false;
                let j = i + 2;
                while (j < lines.length) {
                    const rowLine = lines[j];
                    if (!inFence && !this.isTableRowLine(rowLine)) break;
                    if (this.countFenceMarkers(rowLine) % 2 === 1) {
                        inFence = !inFence;
                    }
                    j += 1;
                }
                const endLine = Math.max(i + 1, j - 1);
                const start = lineStarts[i];
                const end = lineStarts[endLine] + lines[endLine].length;
                ranges.push({ start, end });
                i = endLine;
            }
            return ranges;
        }

        renderTableFromRows(headerCells, bodyRows) {
            const maxCols = Math.max(headerCells.length, ...bodyRows.map(row => row.length), 0);
            const renderCell = (cell) => {
                return this.renderTableCellContent(cell || '');
            };
            const tableBar = `<div class="nv-md-table-bar"><div class="nv-md-table-title"><span class="nv-code-label">Table</span><button class="nv-md-table-action" data-nv-table-wrap-toggle title="Wrap text" aria-pressed="false">${this.getTableWrapIconSvg()}</button><button class="nv-md-table-action" data-nv-table-fullscreen title="Fullscreen">${this.getTableFullscreenIconSvg()}</button></div></div>`;
            let html = `<div class="nv-md-table-wrap nv-table-scroll-x">${tableBar}<div class="nv-md-table-scroll"><table class="nv-md-table"><thead><tr>`;
            for (let c = 0; c < maxCols; c += 1) {
                html += `<th>${renderCell(headerCells[c])}</th>`;
            }
            html += '</tr></thead><tbody>';
            bodyRows.forEach((row) => {
                html += '<tr>';
                for (let c = 0; c < maxCols; c += 1) {
                    html += `<td>${renderCell(row[c])}</td>`;
                }
                html += '</tr>';
            });
            html += '</tbody></table></div></div>';
            return html;
        }

        ensureTableModal() {
            if (this.tableModalOverlay || !this.shadow) return;
            const overlay = document.createElement('div');
            overlay.className = 'nv-table-modal';
            overlay.innerHTML = `
                <div class="nv-table-modal-content" role="dialog" aria-modal="true">
                    <div class="nv-table-modal-header">
                        <div class="nv-md-table-title"><span class="nv-code-label">Table</span></div>
                        <button class="nv-table-modal-close" data-nv-table-close title="Close">${this.getTableCloseIconSvg()}</button>
                    </div>
                    <div class="nv-table-modal-body"></div>
                </div>
            `;
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) this.closeTableModal();
            });
            const closeBtn = overlay.querySelector('[data-nv-table-close]');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeTableModal());
            }
            this.shadow.appendChild(overlay);
            this.tableModalOverlay = overlay;
            this.tableModalBody = overlay.querySelector('.nv-table-modal-body');
        }

        closeTableModal() {
            if (!this.tableModalOverlay) return;
            this.tableModalOverlay.classList.remove('visible');
            if (this.tableModalBody) {
                this.tableModalBody.innerHTML = '';
            }
        }

        openTableFullscreen(tableWrap) {
            if (!tableWrap) return;
            this.ensureTableModal();
            if (!this.tableModalOverlay || !this.tableModalBody) return;
            const table = tableWrap.querySelector('table');
            if (!table) return;
            this.tableModalBody.innerHTML = '';
            const scroll = document.createElement('div');
            scroll.className = 'nv-md-table-scroll nv-md-table-scroll-lg nv-table-scroll-x';
            scroll.appendChild(table.cloneNode(true));
            this.tableModalBody.appendChild(scroll);
            this.tableModalOverlay.classList.add('visible');
        }

        initTableActions(container) {
            const fullscreenButtons = container.querySelectorAll('[data-nv-table-fullscreen]');
            fullscreenButtons.forEach((btn) => {
                if (btn.dataset.nvTableBound === '1') return;
                btn.dataset.nvTableBound = '1';
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const wrap = btn.closest('.nv-md-table-wrap');
                    this.openTableFullscreen(wrap);
                });
            });

            const wrapButtons = container.querySelectorAll('[data-nv-table-wrap-toggle]');
            wrapButtons.forEach((btn) => {
                if (btn.dataset.nvTableBound === '1') return;
                btn.dataset.nvTableBound = '1';
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const wrap = btn.closest('.nv-md-table-wrap');
                    if (!wrap) return;
                    const active = btn.classList.toggle('active');
                    wrap.classList.toggle('nv-table-scroll-x', !active);
                    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
                });
            });
        }

        renderMarkdownBlocks(text) {
            const lines = String(text || '').split('\n');
            let html = '';
            let hasMarkup = false;
            let listType = null;
            let paragraphLines = [];
            let quoteLines = [];

            const flushParagraph = () => {
                if (!paragraphLines.length) return;
                const blockText = paragraphLines.join('\n');
                const rendered = this.renderInlineMarkdown(blockText);
                html += `<p class="nv-md-p">${rendered.html}</p>`;
                hasMarkup = true;
                paragraphLines = [];
            };

            const flushList = () => {
                if (!listType) return;
                html += `</${listType}>`;
                listType = null;
            };

            const flushQuote = () => {
                if (!quoteLines.length) return;
                const blockText = quoteLines.join('\n');
                const rendered = this.renderInlineMarkdown(blockText);
                html += `<blockquote class="nv-md-quote">${rendered.html}</blockquote>`;
                hasMarkup = true;
                quoteLines = [];
            };

            for (let i = 0; i < lines.length; i += 1) {
                const line = lines[i];
                const trimmed = line.trim();

                if (!trimmed) {
                    flushParagraph();
                    flushQuote();
                    flushList();
                    continue;
                }

                const abbrTags = this.extractAbbrTags(line);
                if (abbrTags) {
                    const nextTags = this.extractAbbrTags(lines[i + 1] || '');
                    if (abbrTags.length >= 2 || nextTags) {
                        flushParagraph();
                        flushQuote();
                        flushList();
                        let collected = abbrTags.slice();
                        let j = i + 1;
                        while (j < lines.length) {
                            const moreTags = this.extractAbbrTags(lines[j]);
                            if (!moreTags) break;
                            collected = collected.concat(moreTags);
                            j += 1;
                        }
                        html += this.renderAbbrList(collected);
                        hasMarkup = true;
                        i = j - 1;
                        continue;
                    }
                }

                const nextLine = lines[i + 1] || '';
                if (this.isTabRowLine(line)) {
                    flushParagraph();
                    flushQuote();
                    flushList();

                    const headerCells = this.parseTabRow(line);
                    const bodyRows = [];
                    while (i + 1 < lines.length && this.isTabRowLine(lines[i + 1])) {
                        bodyRows.push(this.parseTabRow(lines[i + 1]));
                        i += 1;
                    }
                    html += this.renderTableFromRows(headerCells, bodyRows);
                    hasMarkup = true;
                    continue;
                }

                if (this.isTableRowLine(line) && this.isTableSeparatorLine(nextLine)) {
                    flushParagraph();
                    flushQuote();
                    flushList();

                    const headerCells = this.parseTableRow(line);
                    i += 1;
                    const bodyRows = [];
                    let rowIndex = i + 1;
                    while (rowIndex < lines.length && lines[rowIndex].trim()) {
                        if (!this.isTableRowLine(lines[rowIndex])) break;
                        let rowText = lines[rowIndex];
                        let inFence = this.countFenceMarkers(rowText) % 2 === 1;
                        while (inFence && rowIndex + 1 < lines.length) {
                            rowIndex += 1;
                            rowText += `\n${lines[rowIndex]}`;
                            if (this.countFenceMarkers(lines[rowIndex]) % 2 === 1) {
                                inFence = !inFence;
                            }
                        }
                        bodyRows.push(this.parseTableRow(rowText));
                        rowIndex += 1;
                    }
                    i = rowIndex - 1;
                    html += this.renderTableFromRows(headerCells, bodyRows);
                    hasMarkup = true;
                    continue;
                }

                const mathStartMatch = trimmed.match(/^\\\[(.*)$/);
                if (mathStartMatch) {
                    flushParagraph();
                    flushQuote();
                    flushList();
                    let mathContent = (mathStartMatch[1] || '').trim();
                    let closed = false;
                    if (mathContent.includes('\\]')) {
                        const endIndex = mathContent.indexOf('\\]');
                        mathContent = mathContent.slice(0, endIndex);
                        closed = true;
                    }
                    while (!closed && i + 1 < lines.length) {
                        i += 1;
                        const nextMathLine = lines[i];
                        const endIndex = nextMathLine.indexOf('\\]');
                        if (endIndex !== -1) {
                            mathContent += (mathContent ? '\n' : '') + nextMathLine.slice(0, endIndex);
                            closed = true;
                            break;
                        }
                        mathContent += (mathContent ? '\n' : '') + nextMathLine;
                    }
                    const mathBlock = this.normalizeMathText(`\\[${mathContent}\\]`);
                    html += `<div class="nv-md-math">${this.escapeHtml(mathBlock)}</div>`;
                    hasMarkup = true;
                    continue;
                }

                const hrMatch = /^(?:-{3,}|\*{3,}|_{3,})$/.test(trimmed);
                if (hrMatch) {
                    flushParagraph();
                    flushQuote();
                    flushList();
                    html += '<hr class="nv-md-hr">';
                    hasMarkup = true;
                    continue;
                }

                const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
                if (headingMatch) {
                    flushParagraph();
                    flushQuote();
                    flushList();
                    const level = headingMatch[1].length;
                    const rendered = this.renderInlineMarkdown(headingMatch[2] || '');
                    html += `<div class="nv-md-h${level}">${rendered.html}</div>`;
                    hasMarkup = true;
                    continue;
                }

                const quoteMatch = line.match(/^\s*>\s?(.*)$/);
                if (quoteMatch) {
                    flushParagraph();
                    flushList();
                    quoteLines.push(quoteMatch[1] || '');
                    continue;
                }

                if (quoteLines.length) {
                    flushQuote();
                }

                const unorderedMatch = line.match(/^\s*[-*+]\s+(.*)$/);
                const orderedMatch = line.match(/^\s*\d+[.)]\s+(.*)$/);
                if (unorderedMatch || orderedMatch) {
                    flushParagraph();
                    const nextType = unorderedMatch ? 'ul' : 'ol';
                    if (listType && listType !== nextType) {
                        flushList();
                    }
                    if (!listType) {
                        listType = nextType;
                        html += `<${listType} class="nv-md-list">`;
                        hasMarkup = true;
                    }
                    const itemText = unorderedMatch ? unorderedMatch[1] : orderedMatch[1];
                    const rendered = this.renderInlineMarkdown(itemText || '');
                    html += `<li>${rendered.html}</li>`;
                    hasMarkup = true;
                    continue;
                }

                paragraphLines.push(line);
            }

            flushParagraph();
            flushQuote();
            flushList();

            return { html, hasMarkup };
        }

        renderTextWithFormatting(text) {
            const normalized = String(text || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
            const codeBlockRegex = /(^|\n)```([\w-]+)?[ \t]*\n([\s\S]*?)\n```[ \t]*(?=\n|$)/gm;
            let html = '';
            let hasMarkup = false;
            let lastIndex = 0;
            let match;
            const tableRanges = this.getTableRanges(normalized);
            const isInTable = (index) => tableRanges.some(range => index >= range.start && index < range.end);

            while ((match = codeBlockRegex.exec(normalized)) !== null) {
                const startIndex = match.index + (match[1] ? match[1].length : 0);
                if (isInTable(startIndex)) {
                    continue;
                }
                const before = normalized.slice(lastIndex, startIndex);
                const beforeRendered = this.renderMarkdownBlocks(before);
                html += beforeRendered.html;
                hasMarkup = hasMarkup || beforeRendered.hasMarkup;

                const lang = (match[2] || '').trim();
                const langLabel = lang ? this.escapeHtml(lang) : 'Plain';
                const langClass = lang ? lang.toLowerCase().replace(/[^a-z0-9_-]/g, '') : 'plaintext';
                const rawCode = match[3].replace(/\s+$/, '');
                const safeCode = this.escapeHtml(rawCode);
                const codeClass = ` class="language-${langClass}"`;
                html += `<div class="nv-code-block"><div class="nv-code-header"><div class="nv-code-left"><span class="nv-code-label">Code</span><button class="nv-code-copy" title="Copy code"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button></div><span class="nv-code-lang">${langLabel}</span></div><pre><code${codeClass}>${safeCode}</code></pre></div>`;
                hasMarkup = true;

                lastIndex = codeBlockRegex.lastIndex;
            }

            const tail = normalized.slice(lastIndex);
            const tailRendered = this.renderMarkdownBlocks(tail);
            html += tailRendered.html;
            hasMarkup = hasMarkup || tailRendered.hasMarkup;

            return { html, hasMarkup };
        }

        renderImageTool(url, alt, label, caption) {
            const safeUrl = this.escapeAttr(url);
            const safeAlt = this.escapeAttr(alt || '');
            const safeLabel = this.escapeHtml(label || 'Image');
            const safeCaption = caption ? this.escapeHtml(caption) : '';
            const captionHtml = safeCaption ? `<div class="nv-tool-caption">${safeCaption}</div>` : '';
            const actionsHtml = this.renderImageActionsHtml(false);
            const rawAttr = safeUrl ? ` data-nv-image-raw="${safeUrl}" data-nv-image-full="${safeUrl}"` : '';
            const imageHtml = `<div class="nv-image-frame" data-nv-image-loading="1" data-nv-image-loading-label="Generating image...">${actionsHtml}<img src="${this.IMAGE_PLACEHOLDER}" alt="${safeAlt}" loading="lazy"${rawAttr}></div>`;
            return `<div class="nv-tool nv-tool-image"><div class="nv-tool-label">${safeLabel}</div>${imageHtml}${captionHtml}</div>`;
        }

        renderWebImageTool(url, alt, label, source, foreignLandingUrl, attributionHtml, fullUrl) {
            const safeUrl = this.escapeAttr(url);
            const safeAlt = this.escapeAttr(alt || '');
            const safeLabel = this.escapeHtml(label || 'Web Image : ');
            const sourceText = String(source || '').trim();
            const safeSourceText = sourceText ? this.escapeHtml(sourceText) : '';
            const safeForeignUrl = this.sanitizeUrl(foreignLandingUrl || '');
            const sourceLabelText = safeSourceText ? `${safeSourceText}` : 'Source';
            const sourceLinkHtml = safeForeignUrl
                ? `<a class="nv-tool-source-link" data-nv-image-source-link href="${this.escapeAttr(safeForeignUrl)}" target="_blank" rel="noopener noreferrer">${sourceLabelText}</a>`
                : `<a class="nv-tool-source-link" data-nv-image-source-link style="display:none"></a>`;
            const labelHtml = `<div class="nv-tool-label-row"><div class="nv-tool-label">${safeLabel}</div>${sourceLinkHtml}</div>`;
            const captionHtml = attributionHtml
                ? `<div class="nv-tool-caption nv-tool-attribution">${attributionHtml}</div>`
                : `<div class="nv-tool-caption nv-tool-attribution" style="display:none"></div>`;
            const fullAttr = fullUrl ? ` data-nv-image-full="${this.escapeAttr(fullUrl)}"` : '';
            const sourceAttr = safeForeignUrl ? ` data-nv-image-source-url="${this.escapeAttr(safeForeignUrl)}"` : '';
            const actionsHtml = this.renderImageActionsHtml(true);
            const rawAttr = safeUrl ? ` data-nv-image-raw="${safeUrl}"` : '';
            const imageHtml = `<div class="nv-image-frame" data-nv-image-loading="1" data-nv-image-loading-label="Loading image...">${actionsHtml}<img src="${this.IMAGE_PLACEHOLDER}" alt="${safeAlt}" loading="lazy"${fullAttr}${sourceAttr}${rawAttr}></div>`;
            return `<div class="nv-tool nv-tool-image">${labelHtml}${imageHtml}${captionHtml}</div>`;
        }

        renderImageToolWithQuery(query, alt, label, caption) {
            const safeQuery = this.escapeAttr(query);
            const safeAlt = this.escapeAttr(alt || query || '');
            const safeLabel = this.escapeHtml(label || 'Web Image : ');
            const safeCaption = caption ? this.escapeHtml(caption) : '';
            const captionStyle = safeCaption ? '' : ' style="display:none"';
            const captionHtml = `<div class="nv-tool-caption nv-tool-attribution" data-nv-image-caption${captionStyle}>${safeCaption}</div>`;
            const labelHtml = `<div class="nv-tool-label-row"><div class="nv-tool-label">${safeLabel}</div><a class="nv-tool-source-link" data-nv-image-source-link style="display:none"></a></div>`;
            const actionsHtml = this.renderImageActionsHtml(true);
            const imageHtml = `<div class="nv-image-frame" data-nv-image-loading="1" data-nv-image-loading-label="Searching image...">${actionsHtml}<img src="${this.IMAGE_PLACEHOLDER}" alt="${safeAlt}" loading="lazy"></div>`;
            return `<div class="nv-tool nv-tool-image" data-nv-image-query="${safeQuery}" data-nv-image-alt="${safeAlt}">${labelHtml}${imageHtml}${captionHtml}</div>`;
        }

        renderMusicTool(query, title) {
            const safeQuery = this.escapeHtml(query || '');
            const safeTitle = this.escapeHtml(title || this.buildMusicTitle(query));
            const safeDownloadName = this.escapeAttr(this.buildMusicFilename(title || query));
            const searchUrl = `https://openverse.org/search/audio?q=${encodeURIComponent(query || '')}`;
            const playerMode = this.shouldUseCustomMusicPlayback() ? 'custom' : 'native';

            return `<div class="nv-tool nv-tool-music" data-nv-music-query="${this.escapeAttr(query || '')}" data-nv-music-title="${this.escapeAttr(title || query || 'music')}" data-nv-music-ready="0" data-nv-music-player="${playerMode}">
                <div class="nv-music-cover" aria-hidden="true">
                    <svg class="nv-music-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 18V5l11-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="17" cy="16" r="3"></circle>
                    </svg>
                    <div class="nv-music-bars">
                        <span></span><span></span><span></span><span></span>
                    </div>
                </div>
                <div class="nv-music-body">
                    <div class="nv-tool-label-row"><div class="nv-tool-label">Music Search</div><span class="nv-music-beta">Beta</span></div>
                    <div class="nv-music-title" data-nv-music-title>${safeTitle}</div>
                    <audio class="nv-music-player" controls preload="none"></audio>
                    <div class="nv-music-player-fallback" data-nv-music-custom-player>
                        <button class="nv-music-fallback-btn primary icon" data-nv-music-toggle type="button" aria-label="Play preview" title="Play preview">${this.getMusicPlayIconSvg()}</button>
                        <div class="nv-music-fallback-meta">
                            <button class="nv-music-fallback-bar" type="button" data-nv-music-seek aria-label="Seek preview"><span data-nv-music-progress></span></button>
                            <div class="nv-music-fallback-time" data-nv-music-time>0:00 / --:--</div>
                        </div>
                    </div>
                    <div class="nv-music-prompt" data-nv-music-prompt>${safeQuery}</div>
                    <div class="nv-music-footer">
                        <span class="nv-music-meta" data-nv-music-meta>Searching Openverse...</span>
                        <div class="nv-music-actions">
                            <a class="nv-music-action nv-music-source" data-nv-music-source href="${this.escapeAttr(searchUrl)}" target="_blank" rel="noopener noreferrer" title="Open search" aria-label="Open search">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14L21 3"/></svg>
                            </a>
                            <button class="nv-music-action" data-nv-music-copy title="Copy link" aria-label="Copy music link">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10.5 5"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L13.5 19"/></svg>
                            </button>
                            <button class="nv-music-action" data-nv-music-download="${safeDownloadName}" title="Download" aria-label="Download music">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                            </button>
                        </div>
                    </div>
                    <div class="nv-music-status" data-nv-music-status aria-live="polite"></div>
                </div>
            </div>`;
        }

        renderToolCall(toolName, attrs) {
            const handlers = {
                'generate_image': () => this.handleGenerateImageTool(attrs),
                'show_image': () => this.handleShowImageTool(attrs),
                'search_music': () => this.handleSearchMusicTool(attrs),
                'generate_music': () => this.handleSearchMusicTool(attrs),
                'link': () => this.handleLinkTool(attrs)
            };

            const handler = handlers[toolName];
            return handler ? handler() : '';
        }

        handleGenerateImageTool(attrs) {
            const prompt = attrs.prompt || attrs.text || '';
            if (!prompt) return '';

            const imageUrl = this.buildPollinationsImageUrl(prompt, attrs);
            return this.renderImageTool(imageUrl, prompt, 'Generated Image', prompt);
        }

        handleSearchMusicTool(attrs) {
            const query = this.normalizeMusicPrompt(attrs.query || attrs.prompt || attrs.text || attrs.description || '');
            if (!query) return '';

            const title = this.buildMusicTitle(query, attrs);
            return this.renderMusicTool(query, title);
        }

        handleShowImageTool(attrs) {
            const pageImageResult = this.tryRenderFromPageImage(attrs);
            if (pageImageResult) return pageImageResult;

            // Try to render from query first
            const queryResult = this.tryRenderFromQuery(attrs);
            if (queryResult) return queryResult;

            // Fallback to direct URL rendering
            return this.renderFromDirectUrl(attrs);
        }

        tryRenderFromPageImage(attrs) {
            if (!this.state.isPageContextActive || !this.state.pageContext) return null;
            const rawQuery = attrs.query || attrs.search || attrs.text || attrs.alt || attrs.caption || '';
            const directUrl = this.sanitizeUrl(attrs.url || this.extractFirstUrl(rawQuery));
            if (directUrl) return null;

            const query = this.normalizeImageQuery(rawQuery || 'image');
            let matches = this.searchPageContext(query, this.state.pageContext)
                .filter(match => match.type === 'image' || match.imageUrl || match.imageFullUrl || /Image URL:/i.test(match.text || ''));
            if (!matches.length && this.pageQuestionWantsImage(query)) {
                matches = (this.state.pageContext.blocks || [])
                    .filter(match => match.type === 'image' || match.imageUrl || match.imageFullUrl || /Image URL:/i.test(match.text || ''))
                    .slice(0, 3);
            }
            const match = matches[0];
            if (!match) return null;

            const imageUrl = this.sanitizeUrl(match.imageFullUrl || match.imageUrl || this.extractFirstUrl(match.text || ''));
            if (!imageUrl) return null;

            const alt = attrs.alt || match.label || this.truncateText((match.text || '').replace(/^Image:\s*/i, ''), 120) || 'Page image';
            const source = this.state.pageContext.siteName || 'Page';
            const pageUrl = this.state.pageContext.url || '';
            const caption = this.escapeHtml(this.truncateText(match.text || alt, 220));
            return this.renderWebImageTool(imageUrl, alt, 'Page Image : ', source, pageUrl, caption, imageUrl);
        }

        tryRenderFromQuery(attrs) {
            const rawQuery = attrs.query || attrs.search || attrs.text || '';
            const directUrl = this.extractFirstUrl(rawQuery);
            if (directUrl && rawQuery.trim() === directUrl) {
                const alt = attrs.alt || 'Web image : ';
                return this.renderWebImageTool(directUrl, alt, 'Web Image : ', '', '', '', directUrl);
            }
            const query = this.normalizeImageQuery(rawQuery);
            if (!query) return null;

            const alt = attrs.alt || query;
            return this.renderImageToolWithQuery(query, alt, 'Web Image : ', '');
        }

        renderFromDirectUrl(attrs) {
            const rawUrl = String(attrs.url || '').trim();
            if (!rawUrl) return '';

            const url = this.sanitizeUrl(rawUrl);
            if (!url) {
                if (/^https?:\/\//i.test(rawUrl) || /^\/\//.test(rawUrl)) {
                    return '';
                }
                const query = this.normalizeImageQuery(rawUrl);
                if (!query) return '';
                const alt = attrs.alt || query;
                return this.renderImageToolWithQuery(query, alt, 'Web Image : ', '');
            }

            const alt = attrs.alt || 'Web image : ';
            return this.renderWebImageTool(url, alt, 'Web Image : ', '', '', '', url);
        }

        handleLinkTool(attrs) {
            const url = this.sanitizeUrl(attrs.url || '');
            if (!url) return '';

            const text = attrs.text || url;
            const safeText = this.escapeHtml(text);
            const safeUrl = this.escapeAttr(url);
            return `<span class="nv-tool nv-tool-link"><a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeText}</a></span>`;
        }

        renderToolMarkup(content) {
            // Normalize tool tags that may come as <tool:code>...</tool:code>
            const normalizedContent = (content || '')
                .replace(/\[(searchmusic|search_music|generatemusic|generate_music)\]\s*([^\[]*?)\s*\[\/\1\]/gi, (_match, name, attrs) => {
                    const toolName = /generate/i.test(name) ? 'generate_music' : 'search_music';
                    return `[tool:${toolName} ${String(attrs || '').trim()}]`;
                })
                .replace(/<tool:(\w+)([^>]*)>/gi, '[tool:$1$2]')
                .replace(/<\/tool:(\w+)>/gi, '[/tool:$1]')
                .replace(/\[\/tool:(?!code\b)\w+\]/gi, '');

            const regex = /\[tool:code([^\]]*)\]([\s\S]*?)\[\/tool:code\]|\[tool:(\w+)([^\]]*)\]/gi;
            let html = '';
            let hasTool = false;
            let lastIndex = 0;
            let match;

            while ((match = regex.exec(normalizedContent)) !== null) {
                if (match.index > lastIndex) {
                    const chunk = normalizedContent.slice(lastIndex, match.index);
                    const renderedChunk = this.renderTextWithFormatting(chunk);
                    html += renderedChunk.html;
                    hasTool = hasTool || renderedChunk.hasMarkup;
                }

                if (match[1] !== undefined) {
                    const attrs = this.parseToolAttributes(match[1]);
                    const lang = attrs.lang || attrs.language || '';
                    const langLabel = lang ? this.escapeHtml(lang) : 'Plain';
                    const langClass = lang ? lang.toLowerCase().replace(/[^a-z0-9_-]/g, '') : 'plaintext';
                    const rawCode = match[2].replace(/\s+$/, '');
                    const safeCode = this.escapeHtml(rawCode);
                    const codeClass = ` class="language-${langClass}"`;
                    html += `<div class="nv-tool nv-tool-code"><div class="nv-code-header"><div class="nv-code-left"><span class="nv-code-label">Code</span><button class="nv-code-copy" title="Copy code"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button></div><span class="nv-code-lang">${langLabel}</span></div><pre><code${codeClass}>${safeCode}</code></pre></div>`;
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

            if (lastIndex < normalizedContent.length) {
                const tailChunk = normalizedContent.slice(lastIndex);
                const renderedTail = this.renderTextWithFormatting(tailChunk);
                html += renderedTail.html;
                hasTool = hasTool || renderedTail.hasMarkup;
            }

            return { html, hasTool };
        }

        createActionButton(title, svgMarkup, onClick) {
            const btn = document.createElement('button');
            btn.className = 'nv-action-btn';
            btn.title = title;
            btn.innerHTML = svgMarkup;
            btn.onclick = (e) => {
                e.stopPropagation();
                onClick(btn);
            };
            return btn;
        }

        getMessageCopyText(messageEl, fallbackText) {
            if (messageEl) {
                const contentEl = messageEl.querySelector('.nv-message-content');
                const text = contentEl?.innerText || contentEl?.textContent || '';
                if (text && text.replace(/\s/g, '')) return text;
            }
            return fallbackText || '';
        }

        appendImageActionButtons(actions, htmlContent) {
            const urlMatch = htmlContent.match(/src="([^"]+)"/);
            if (!urlMatch) return false;
            const altMatch = htmlContent.match(/alt="([^"]*)"/);
            const altText = altMatch ? altMatch[1] : '';
            const imageUrl = urlMatch[1];
            const downloadBtn = this.createActionButton(
                'Download Image',
                `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
                () => {
                    const filename = this.buildImageFilename(altText, imageUrl);
                    this.downloadImage(imageUrl, filename);
                }
            );
            actions.appendChild(downloadBtn);

            const copyImgBtn = this.createActionButton(
                'Copy Image',
                `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
                (btn) => {
                    this.copyImageToClipboard(imageUrl, btn);
                }
            );
            actions.appendChild(copyImgBtn);
            return true;
        }

        appendTextCopyButton(actions, text, messageEl = null) {
            const copyBtn = this.createActionButton(
                'Copy',
                `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
                (btn) => {
                    const plainText = this.getMessageCopyText(messageEl, text);
                    this.copyToClipboard(plainText, btn);
                }
            );
            actions.appendChild(copyBtn);
        }

        applyAssistantContent(contentDiv, content, forceHtml = false) {
            if (forceHtml || content.startsWith('<img')) {
                contentDiv.innerHTML = content;
                this.wrapStandaloneImages(contentDiv);
                this.initDirectImages(contentDiv);
                this.initImageActions(contentDiv);
                this.initMusicActions(contentDiv);
                return;
            }
            const rendered = this.renderToolMarkup(content);
            contentDiv.innerHTML = rendered.html;
            if (rendered.hasTool) {
                this.initToolImages(contentDiv);
            }
            this.wrapStandaloneImages(contentDiv);
            this.initDirectImages(contentDiv);
            this.initImageActions(contentDiv);
            this.initMusicActions(contentDiv);
            this.initTableActions(contentDiv);
            this.initCodeCopy(contentDiv);
            this.applyHighlighting(contentDiv);
            this.applyMathTypesetting(contentDiv);
        }

        updateMessageContent(messageIndex) {
            // Find the message element by index
            const messageElements = this.elements.msgContainer.querySelectorAll('.nv-message');
            const messageElement = messageElements[messageIndex];
            if (!messageElement) return;

            const msg = this.messages[messageIndex];
            if (!msg || msg.role !== 'assistant') return;

            let contentDiv = messageElement.querySelector('.nv-message-content');
            if (!contentDiv) {
                // If no content wrapper exists, create one
                contentDiv = document.createElement('div');
                contentDiv.className = 'nv-message-content';

                // Insert after tabs if they exist, otherwise at the beginning
                const tabsContainer = messageElement.querySelector('.nv-version-tabs');
                if (tabsContainer) {
                    tabsContainer.after(contentDiv);
                } else {
                    messageElement.insertBefore(contentDiv, messageElement.firstChild);
                }
            }

            contentDiv.innerHTML = '';
            if (msg.isLoading && msg.regenTargetIndex === undefined) {
                const loadingDiv = document.createElement('div');
                loadingDiv.className = 'nv-inline-loading';
                loadingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
                contentDiv.appendChild(loadingDiv);
            } else {
                this.applyAssistantContent(contentDiv, msg.content);
            }
            this.initCodeCopy(contentDiv);
            this.applyHighlighting(contentDiv);
            this.applyHighlighting(this.shadow);

            if (msg.versions && msg.versions.length > 1) {
                const tabs = messageElement.querySelectorAll('.nv-version-tab');
                tabs.forEach((tab, index) => {
                    if (index === (msg.currentVersion || 0)) {
                        tab.classList.add('active');
                    } else {
                        tab.classList.remove('active');
                    }
                });
            }

            const actions = messageElement.querySelector('.nv-message-actions');
            if (actions) {
                const hideActions = msg.isLoading && msg.regenTargetIndex !== undefined && msg.currentVersion === msg.regenTargetIndex;
                actions.style.display = hideActions ? 'none' : '';
            }
        }

        renderMessages(preserveScroll = false) {
            // Save scroll position if needed
            const scrollPos = preserveScroll ? this.elements.msgContainer.scrollTop : null;

            this.elements.msgContainer.innerHTML = '';
            this.elements.msgContainer.appendChild(this.elements.typingIndicator);

            this.messages.forEach((msg, messageIndex) => {
                const isGreeting = this.shouldRenderDefaultGreeting(msg, messageIndex, this.messages);
                if (this.isDefaultGreeting(msg, messageIndex) && !isGreeting) return;
                const div = document.createElement('div');
                div.className = `nv-message ${msg.role}`;
                if (isGreeting) div.classList.add('nv-welcome-message');

                // Add version tabs for assistant messages with multiple versions
                if (msg.role === 'assistant' && msg.versions && msg.versions.length > 1) {
                    const tabsContainer = document.createElement('div');
                    tabsContainer.className = 'nv-version-tabs';

                    msg.versions.forEach((version, versionIndex) => {
                        const tab = document.createElement('button');
                        tab.className = 'nv-version-tab';
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
                contentDiv.className = 'nv-message-content';

                // Show inline loading if message is being regenerated
                if (msg.isLoading && msg.regenTargetIndex === undefined) {
                    const loadingDiv = document.createElement('div');
                    loadingDiv.className = 'nv-inline-loading';
                    loadingDiv.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
                    contentDiv.appendChild(loadingDiv);
                } else if (isGreeting) {
                    this.renderWelcomeCard(contentDiv);
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
                    actions.className = 'nv-message-actions';

                    if (msg.content.trim().startsWith('<img')) {
                        this.appendImageActionButtons(actions, msg.content);
                    } else {
                        this.appendTextCopyButton(actions, msg.content, div);
                    }

                    // Regenerate button (Icon Only)
                    const regenBtn = document.createElement('button');
                    regenBtn.className = 'nv-action-btn';
                    regenBtn.title = 'Regenerate';
                    regenBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2"/></svg>`;
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
            this.initCodeCopy(this.elements.msgContainer);
            this.applyHighlighting(this.elements.msgContainer);
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
            const validationResult = this.validateRegenerateRequest(messageIndex);
            if (!validationResult.isValid) return;

            const { userMessage, currentMessage, userMessageIndex } = validationResult;
            const requestChatId = this.currentChatId;
            const isImageGen = this.isImageGeneration(currentMessage);

            this.initializeVersionForRegeneration(currentMessage);
            const targetVersionIndex = currentMessage.regenTargetIndex ?? currentMessage.currentVersion ?? (currentMessage.versions.length - 1);
            const requestSession = this.createChatRequestSession(requestChatId, isImageGen ? 'regen_image' : 'regen_text', {
                onInterrupt: () => {
                    currentMessage.versions[targetVersionIndex] = 'Interrupted.';
                    currentMessage.currentVersion = targetVersionIndex;
                    currentMessage.content = 'Interrupted.';
                    currentMessage.isLoading = false;
                    this.cleanupRegenerationMetadata(currentMessage);
                    this.saveHistory();
                    if (requestChatId === this.currentChatId) {
                        this.renderMessages(true);
                    }
                }
            });
            const requestOptions = { signal: requestSession.signal };

            if (requestChatId === this.currentChatId) {
                this.updateRegenerateUI(messageIndex, currentMessage);
            }
            this.setLoading(true, requestChatId);
            this.setLoadingText(
                isImageGen
                    ? 'NeuraVeil is regenerating the image...'
                    : 'NeuraVeil is regenerating the answer...',
                requestChatId
            );

            try {
                const newContent = await this.generateNewContent(
                    isImageGen,
                    userMessage,
                    userMessageIndex,
                    requestOptions,
                    (stageText) => {
                        if (stageText) this.setLoadingText(stageText, requestChatId);
                    }
                );

                this.finalizeSuccessfulRegeneration(
                    currentMessage,
                    targetVersionIndex,
                    newContent,
                    requestChatId
                );
            } catch (error) {
                if (this.isAbortError(error)) return;
                this.handleRegenerationError(
                    error,
                    currentMessage,
                    targetVersionIndex,
                    requestChatId
                );
            } finally {
                this.finishChatRequestSession(requestChatId, requestSession);
                this.setLoading(false, requestChatId);
            }
        }

        validateRegenerateRequest(messageIndex) {
            if (messageIndex === 0) {
                return { isValid: false };
            }

            const userMessageIndex = this.findPreviousUserMessageIndex(messageIndex);
            if (userMessageIndex === -1) {
                return { isValid: false };
            }

            const userMessage = this.messages[userMessageIndex];
            if (!userMessage || userMessage.role !== 'user') {
                return { isValid: false };
            }

            const currentMessage = this.messages[messageIndex];
            if (!currentMessage || currentMessage.role !== 'assistant') {
                return { isValid: false };
            }

            return {
                isValid: true,
                userMessage,
                currentMessage,
                userMessageIndex
            };
        }

        isImageGeneration(message) {
            return message.content.trim().startsWith('<img') ||
                (message.versions && message.versions[0].trim().startsWith('<img'));
        }

        isErrorMessageContent(content) {
            return typeof content === 'string' && /^(Error|Erreur)\s•/.test(content);
        }

        clearTrailingErrorMessage() {
            const lastIndex = this.messages.length - 1;
            if (lastIndex < 0) return false;

            const lastMessage = this.messages[lastIndex];
            if (!lastMessage || lastMessage.role !== 'assistant' || !this.isErrorMessageContent(lastMessage.content)) {
                return false;
            }

            this.messages.pop();
            const messageElements = this.elements.msgContainer.querySelectorAll('.nv-message');
            if (messageElements.length) {
                messageElements[messageElements.length - 1].remove();
            }

            const newLastIndex = this.messages.length - 1;
            const previousMessage = newLastIndex >= 0 ? this.messages[newLastIndex] : null;
            if (previousMessage && previousMessage.role === 'user') {
                this.messages.pop();
                const remainingElements = this.elements.msgContainer.querySelectorAll('.nv-message');
                if (remainingElements.length) {
                    remainingElements[remainingElements.length - 1].remove();
                }
            }

            this.saveHistory();
            return true;
        }

        initializeVersionForRegeneration(currentMessage) {
            if (!currentMessage.versions) {
                currentMessage.versions = [currentMessage.content];
                currentMessage.currentVersion = 0;
            }

            const previousVersionIndex = currentMessage.currentVersion ?? 0;
            let targetVersionIndex = currentMessage.versions.length;

            if (this.isErrorMessageContent(currentMessage.content)) {
                targetVersionIndex = previousVersionIndex;
            }

            currentMessage.regenPrevIndex = previousVersionIndex;
            currentMessage.regenTargetIndex = targetVersionIndex;
            currentMessage.versions[targetVersionIndex] = '';
            currentMessage.currentVersion = targetVersionIndex;
            currentMessage.content = '';
            currentMessage.isLoading = true;
        }

        updateRegenerateUI(messageIndex, currentMessage) {
            const messageElements = this.elements.msgContainer.querySelectorAll('.nv-message');
            const messageElement = messageElements[messageIndex];

            if (!messageElement) return;

            const existingTabs = messageElement.querySelector('.nv-version-tabs');
            if (currentMessage.versions && currentMessage.versions.length > 1) {
                const tabsContainer = existingTabs || this.ensureVersionTabsContainer(messageElement);
                this.rebuildVersionTabs(tabsContainer, currentMessage, messageIndex);
            } else if (existingTabs) {
                existingTabs.remove();
            }
            this.updateMessageContent(messageIndex);
        }

        ensureVersionTabsContainer(messageElement) {
            let tabsContainer = messageElement.querySelector('.nv-version-tabs');

            if (!tabsContainer) {
                tabsContainer = document.createElement('div');
                tabsContainer.className = 'nv-version-tabs';
                messageElement.insertBefore(tabsContainer, messageElement.firstChild);
            }

            return tabsContainer;
        }

        rebuildVersionTabs(tabsContainer, currentMessage, messageIndex) {
            tabsContainer.innerHTML = '';

            currentMessage.versions.forEach((version, versionIndex) => {
                const tab = this.createVersionTab(
                    versionIndex,
                    currentMessage.currentVersion,
                    messageIndex
                );
                tabsContainer.appendChild(tab);
            });
        }

        createVersionTab(versionIndex, currentVersion, messageIndex) {
            const tab = document.createElement('button');
            tab.className = 'nv-version-tab';

            if (versionIndex === currentVersion) {
                tab.classList.add('active');
            }

            tab.textContent = versionIndex + 1;
            tab.onclick = (e) => {
                e.stopPropagation();
                this.switchVersion(messageIndex, versionIndex);
            };

            return tab;
        }

        async generateNewContent(isImageGen, userMessage, userMessageIndex, requestOptions = {}, onStage = null) {
            if (isImageGen) {
                return await this.regenerateImageContent(userMessage, requestOptions);
            } else {
                return await this.regenerateTextContent(userMessage, userMessageIndex, requestOptions, onStage);
            }
        }

        async regenerateImageContent(userMessage, requestOptions = {}) {
            await this.refreshPollinationsModelCatalog(false, requestOptions).catch(() => null);
            const imageUrl = this.buildPollinationsImageUrl(userMessage.content);

            // Preload via Fetch/Blob and keep a persistent local cache for reloads
            const preloadedImage = await this.preloadImage(imageUrl, { returnBlob: true, signal: requestOptions.signal });
            if (preloadedImage?.blob) {
                this.cacheGeneratedImage(imageUrl, preloadedImage.blob).catch((error) => {
                    console.warn('NeuraVeil: failed to cache regenerated image.', error);
                });
            }

            // Store the original URL in history and display via blob when rendered
            return `<img src="${this.IMAGE_PLACEHOLDER}" data-nv-image-raw="${imageUrl}" data-nv-image-full="${imageUrl}" alt="${userMessage.content}" style="max-width: 100%; border-radius: 8px; margin-top: 4px;">`;
        }

        async regenerateTextContent(userMessage, userMessageIndex, requestOptions = {}, onStage = null) {
            const historyBeforeMessage = this.messages.slice(0, userMessageIndex + 1);
            const reasoningLevel = await this.getSelectedReasoningLevel(userMessage.content, requestOptions);
            return await this.fetchAIResponse(userMessage.content, historyBeforeMessage, reasoningLevel, requestOptions, onStage);
        }

        finalizeSuccessfulRegeneration(currentMessage, targetVersionIndex, newContent, requestChatId) {
            currentMessage.versions[targetVersionIndex] = newContent;
            currentMessage.currentVersion = targetVersionIndex;
            currentMessage.content = newContent;
            currentMessage.isLoading = false;

            this.cleanupRegenerationMetadata(currentMessage);
            this.saveHistory();

            if (requestChatId === this.currentChatId) {
                this.renderMessages(true);
            }
        }

        handleRegenerationError(error, currentMessage, targetVersionIndex, requestChatId) {
            console.error('NeuraVeil Regenerate Error:', error);

            const errorMsg = 'Error • ' + this.formatUserFacingError(error, 'Unable to regenerate.');
            currentMessage.versions[targetVersionIndex] = errorMsg;
            currentMessage.currentVersion = targetVersionIndex;
            currentMessage.content = errorMsg;
            currentMessage.isLoading = false;

            this.cleanupRegenerationMetadata(currentMessage);
            this.saveHistory();

            if (requestChatId === this.currentChatId) {
                this.renderMessages(true);
            }
        }

        cleanupRegenerationMetadata(currentMessage) {
            delete currentMessage.regenPrevIndex;
            delete currentMessage.regenTargetIndex;
        }

        switchVersion(messageIndex, versionIndex) {
            const message = this.messages[messageIndex];
            if (!message || !message.versions || versionIndex >= message.versions.length) return;

            message.currentVersion = versionIndex;
            message.content = message.versions[versionIndex];
            this.saveHistory();
            this.updateMessageContent(messageIndex);
        }

        triggerCopyFeedback(button, variant = 'success') {
            if (!button) return;
            if (!button.dataset.nvCopyOriginal) {
                button.dataset.nvCopyOriginal = button.innerHTML;
            }
            if (button._nvCopyTimeout) {
                clearTimeout(button._nvCopyTimeout);
            }

            button.classList.remove('nv-copy-success', 'nv-copy-success-primary');
            const className = variant === 'primary' ? 'nv-copy-success-primary' : 'nv-copy-success';
            button.classList.add(className);
            button.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

            button._nvCopyTimeout = setTimeout(() => {
                button.classList.remove(className);
                if (button.dataset.nvCopyOriginal) {
                    button.innerHTML = button.dataset.nvCopyOriginal;
                }
                button._nvCopyTimeout = null;
            }, 900);
        }

        stripToolTagsForCopy(text) {
            const raw = String(text || '');
            let stripped = raw
                .replace(/\[tool:link([^\]]*)\]/gi, (match, attrs) => {
                    const urlMatch = String(attrs || '').match(/url\s*=\s*"([^"]+)"/i);
                    return urlMatch ? urlMatch[1] : '';
                })
                .replace(/<tool:link([^>]*)>/gi, (match, attrs) => {
                    const urlMatch = String(attrs || '').match(/url\s*=\s*"([^"]+)"/i);
                    return urlMatch ? urlMatch[1] : '';
                })
                .replace(/\[tool:[^\]]+\]/gi, '')
                .replace(/\[\/tool:[^\]]+\]/gi, '')
                .replace(/<tool:[^>]+>/gi, '')
                .replace(/<\/tool:[^>]+>/gi, '');

            stripped = stripped
                .replace(/\r\n/g, '\n')
                .replace(/```[\w-]*\s*\n([\s\S]*?)```/g, '$1')
                .replace(/`([^`]+)`/g, '$1')
                .replace(/^\s*#{1,6}\s+/gm, '')
                .replace(/^\s*[-*_]{3,}\s*$/gm, '')
                .replace(/^\s*>\s?/gm, '')
                .replace(/^\s*[-*+]\s+/gm, '')
                .replace(/^\s*\d+[.)]\s+/gm, '')
                .replace(/\*\*([\s\S]+?)\*\*/g, '$1')
                .replace(/__([\s\S]+?)__/g, '$1')
                .replace(/\*\*/g, '')
                .replace(/__/g, '');

            return stripped.replace(/\n{3,}/g, '\n\n').trim();
        }

        copyToClipboard(text, button) {
            const cleaned = this.stripToolTagsForCopy(text);
            navigator.clipboard.writeText(cleaned).then(() => {
                this.triggerCopyFeedback(button);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        }

        async copyImageToClipboard(imageUrl, button) {
            try {
                const response = await this.request(imageUrl, { responseType: 'arraybuffer' });
                const sourceBlob = await response.blob();
                const blobUrl = URL.createObjectURL(sourceBlob);

                const img = new Image();
                img.src = blobUrl;

                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = () => reject(new Error('Failed to load image for copying'));
                });

                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                // Convert to PNG blob (universally supported by Clipboard API)
                const clipboardBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

                if (!clipboardBlob) throw new Error('Failed to create image blob');

                const item = new ClipboardItem({ 'image/png': clipboardBlob });
                await navigator.clipboard.write([item]);
                this.triggerCopyFeedback(button);
                URL.revokeObjectURL(blobUrl);
            } catch (err) {
                console.error('Failed to copy image:', err);
            }
        }

        getImageExtensionFromUrl(url) {
            const match = String(url || '').match(/\.(png|jpe?g|webp|gif|bmp)(?:[?#].*)?$/i);
            return match ? match[1].toLowerCase() : 'png';
        }

        buildImageFilename(altText, url) {
            const raw = String(altText || '').trim();
            let base = raw
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-zA-Z0-9 _-]/g, ' ')
                .replace(/\s+/g, '_')
                .replace(/^_+|_+$/g, '');
            if (!base) base = 'image';
            const maxLength = 48;
            if (base.length > maxLength) {
                base = base.slice(0, maxLength).replace(/_+$/g, '');
            }
            const ext = this.getImageExtensionFromUrl(url);
            return `${base}.${ext}`;
        }

        buildSafeFilenameBase(text, fallback = 'file') {
            let base = String(text || '').trim()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-zA-Z0-9 _-]/g, ' ')
                .replace(/\s+/g, '_')
                .replace(/^_+|_+$/g, '');
            if (!base) base = fallback;
            const maxLength = 52;
            if (base.length > maxLength) {
                base = base.slice(0, maxLength).replace(/_+$/g, '');
            }
            return base;
        }

        getAudioExtensionFromUrl(url) {
            const match = String(url || '').match(/\.(mp3|wav|ogg|oga|m4a|flac|aac)(?:[?#].*)?$/i);
            return match ? match[1].toLowerCase() : 'mp3';
        }

        buildMusicFilename(title, url = '') {
            return `${this.buildSafeFilenameBase(title, 'neuraveil_music')}.${this.getAudioExtensionFromUrl(url)}`;
        }

        async downloadImage(url, filename) {
            try {
                // Fetch image as blob to force download
                const response = await this.request(url, { responseType: 'arraybuffer' });
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = blobUrl;
                a.download = filename || this.buildImageFilename('', url);
                document.body.appendChild(a);
                a.click();
                if (a.parentNode) a.remove();

                // Clean up blob URL
                URL.revokeObjectURL(blobUrl);
            } catch (error) {
                console.error('Download failed:', error);
                // Fallback: open in new tab
                window.open(url, '_blank');
            }
        }

        async downloadMusic(blobUrl, filename) {
            if (!blobUrl) throw new Error('No audio file is ready to download.');

            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = filename || this.buildMusicFilename('neuraveil_music');
            document.body.appendChild(a);
            a.click();
            if (a.parentNode) a.remove();
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
                    autoTitle: null,
                    messages: []
                };
                this.history.unshift(chat);
            }

            chat.messages.push({ role, content });
            if (role === 'user' && !chat.manualTitle && !chat.autoTitle) {
                const userCount = chat.messages.filter(m => m.role === 'user').length;
                if (userCount === 1) {
                    this.maybeGenerateConversationTitle(chatId, content);
                }
            }
            chat.title = chat.manualTitle || chat.autoTitle || chat.title || 'New Conversation';
            chat.timestamp = Date.now();

            this.history = this.history.filter(h => h.id !== chatId);
            this.history.unshift(chat);
            nvSetValue('NeuraVeil_history', JSON.stringify(this.history));
            if (chatId === this.currentChatId) this.updateHeaderTitle();
            if (this.state.isHistoryOpen) this.renderHistoryList();
        }

        appendMessage(role, content, isHtml = false) {
            const isFirstUserMessage = role === 'user' && !this.hasUserMessages(this.messages);
            if (isFirstUserMessage) {
                this.removeWelcomeGreetingFromActiveChat();
            }

            const messageIndex = this.messages.length;
            const isGreeting = this.shouldRenderDefaultGreeting({ role, content }, messageIndex, this.messages);
            const div = document.createElement('div');
            div.className = `nv-message ${role}`;
            if (isGreeting) div.classList.add('nv-welcome-message');

            const contentDiv = document.createElement('div');
            contentDiv.className = 'nv-message-content';
            if (isGreeting) {
                this.renderWelcomeCard(contentDiv);
            } else if (role === 'assistant') {
                this.applyAssistantContent(contentDiv, content, isHtml);
            } else if (isHtml) {
                contentDiv.innerHTML = content;
            } else {
                contentDiv.textContent = content;
            }
            div.appendChild(contentDiv);
            this.applyHighlighting(div);
            this.initCodeCopy(div);

            // Add action buttons for assistant messages
            if (role === 'assistant' && !isGreeting) {
                const actions = document.createElement('div');
                actions.className = 'nv-message-actions';

                if (isHtml && content.trim().startsWith('<img')) {
                    this.appendImageActionButtons(actions, content);
                } else {
                    this.appendTextCopyButton(actions, content, div);
                }

                // Regenerate button (Icon Only)
                const regenBtn = document.createElement('button');
                regenBtn.className = 'nv-action-btn';
                regenBtn.title = 'Regenerate';
                regenBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0118.8-4.3M22 12.5a10 10 0 01-18.8 4.2"/></svg>`;
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
            this.updateHeaderTitle();

            if (isFirstUserMessage) {
                this.maybeGenerateConversationTitle(this.currentChatId, content);
            }

            if (role === 'assistant') {
                this.applyHighlighting(this.shadow);
            }
        }

        scrollToBottom() {
            const container = this.elements.msgContainer;
            container.scrollTop = container.scrollHeight;
        }

        getChatLoadingCount(chatId) {
            return this.loadingByChat.get(chatId) || 0;
        }

        isChatLoading(chatId) {
            return this.getChatLoadingCount(chatId) > 0;
        }

        applyLoadingText(text) {
            if (this.elements.typingText) {
                this.elements.typingText.textContent = text || '';
                this.elements.typingText.style.display = text ? 'inline-block' : 'none';
            }
        }

        syncCurrentChatLoadingUi(shouldFocus = false) {
            const isLoading = this.isChatLoading(this.currentChatId);
            this.elements.input.disabled = isLoading;
            if (this.elements.pageAnalyzeBtn) {
                this.elements.pageAnalyzeBtn.disabled = isLoading || this.state.isPageAnalyzing;
            }
            if (this.elements.imgBtn) {
                this.elements.imgBtn.disabled = isLoading;
            }
            if (this.elements.modelSelect) {
                this.elements.modelSelect.disabled = isLoading;
            }
            this.updateTypingIndicatorVisibility();
            if (shouldFocus && !isLoading) this.elements.input.focus();
        }

        updateTypingIndicatorVisibility() {
            const shouldShow = this.isChatLoading(this.currentChatId);
            this.elements.typingIndicator.classList.toggle('visible', shouldShow);
            const text = shouldShow ? (this.loadingTextByChat.get(this.currentChatId) || '') : '';
            this.applyLoadingText(text);
            this.state.isTyping = shouldShow;
            this.state.loadingChatId = shouldShow ? this.currentChatId : null;
            this.updateSendButtonUi();
            this.updateMicAvailabilityUi();
        }

        updateSendButtonUi() {
            const btn = this.elements.sendBtn;
            if (!btn) return;
            const isLoading = this.isChatLoading(this.currentChatId);
            btn.classList.toggle('nv-stop-btn', isLoading);
            btn.title = isLoading ? 'Stop response' : 'Send message';
            btn.setAttribute('aria-label', isLoading ? 'Stop response' : 'Send message');
            btn.innerHTML = isLoading
                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="7" y="7" width="10" height="10" rx="2.2"></rect></svg>`
                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
        }

        updateMicAvailabilityUi() {
            const btn = this.elements.micBtn;
            if (!btn) return;
            const disabled = this.isChatLoading(this.currentChatId);
            btn.disabled = disabled;
            btn.classList.toggle('nv-disabled', disabled);
            if (!this.isRecording) {
                btn.title = disabled ? 'Voice input is unavailable while NeuraVeil is responding' : 'Voice Input';
            }
        }

        setLoadingText(text, chatId = this.currentChatId) {
            const normalized = text || '';
            if (normalized) {
                this.loadingTextByChat.set(chatId, normalized);
            } else {
                this.loadingTextByChat.delete(chatId);
            }
            if (chatId === this.currentChatId) {
                this.applyLoadingText(normalized);
            }
        }

        setLoading(loading, chatId = this.currentChatId) {
            const currentCount = this.loadingByChat.get(chatId) || 0;
            if (loading) {
                if (currentCount === 0) this.setLoadingText('', chatId);
                this.loadingByChat.set(chatId, currentCount + 1);
            } else if (currentCount > 1) {
                this.loadingByChat.set(chatId, currentCount - 1);
            } else {
                this.loadingByChat.delete(chatId);
                this.setLoadingText('', chatId);
            }

            const isCurrentChat = chatId === this.currentChatId;
            const isChatLoading = this.isChatLoading(chatId);
            if (isCurrentChat) {
                this.elements.input.disabled = isChatLoading;
                if (isChatLoading) this.stopRecordingBeforeSubmit();
                if (this.elements.pageAnalyzeBtn) {
                    this.elements.pageAnalyzeBtn.disabled = isChatLoading || this.state.isPageAnalyzing;
                }
                if (this.elements.imgBtn) {
                    this.elements.imgBtn.disabled = isChatLoading;
                }
                if (this.elements.modelSelect) {
                    this.elements.modelSelect.disabled = isChatLoading;
                }
            }

            this.updateTypingIndicatorVisibility();
            if (!isChatLoading && isCurrentChat) this.elements.input.focus();
            if (isCurrentChat) this.scrollToBottom();
        }

        stopActiveConversation(chatId = this.currentChatId) {
            const session = this.getChatRequestSession(chatId);
            const stopped = this.abortChatRequest(chatId);
            if (!stopped) return false;
            try {
                if (typeof session?.onInterrupt === 'function') {
                    session.onInterrupt();
                }
            } catch (e) {
                console.warn('NeuraVeil: failed to apply interrupted state.', e);
            }
            this.setLoadingText('Interrupted.', chatId);
            this.setLoading(false, chatId);
            return true;
        }

        async handleSend() {
            this.stopRecordingBeforeSubmit();
            const text = this.elements.input.value.trim();
            if (!text || this.isChatLoading(this.currentChatId)) return;

            // Check if image mode is active
            if (this.state.isImageMode) {
                await this.handleImageGen();
                return;
            }

            const requestChatId = this.currentChatId;
            const requestSession = this.createChatRequestSession(requestChatId, 'text', {
                onInterrupt: () => {
                    this.appendMessageToChat(requestChatId, 'assistant', 'Interrupted.');
                }
            });
            const requestOptions = { signal: requestSession.signal };
            this.elements.input.value = '';
            this.autoResizeInput();
            this.clearTrailingErrorMessage();
            this.appendMessage('user', text);
            this.setLoading(true, requestChatId);
            this.setLoadingText(
                this.state.isPageContextActive && this.state.pageContext?.content
                    ? (this.pageQuestionWantsImage(text) ? 'NeuraVeil is searching the page for the image...' : 'NeuraVeil is preparing the page context...')
                    : 'NeuraVeil is preparing your request...',
                requestChatId
            );

            try {
                this.setLoadingText('NeuraVeil is choosing the best reasoning level...', requestChatId);
                const reasoningLevel = await this.getSelectedReasoningLevel(text, requestOptions);
                this.throwIfChatRequestAborted(requestSession);
                let historyForRequest = null;
                if (this.state.isPageContextActive && this.state.pageContext?.content) {
                    this.setLoadingText(
                        this.pageQuestionWantsImage(text) ? 'NeuraVeil is checking the matching image on the page...' : 'NeuraVeil is analyzing the relevant passages...',
                        requestChatId
                    );
                    historyForRequest = [
                        { role: 'system', content: this.buildPageContextSystemPrompt(this.state.pageContext, text) },
                        ...this.messages.slice(0, -1),
                        { role: 'user', content: text }
                    ];
                } else {
                    this.setLoadingText('NeuraVeil is thinking...', requestChatId);
                }
                const response = await this.fetchAIResponse(text, historyForRequest, reasoningLevel, requestOptions, (stageText) => {
                    if (stageText) this.setLoadingText(stageText, requestChatId);
                });
                this.throwIfChatRequestAborted(requestSession);
                this.appendMessageToChat(requestChatId, 'assistant', response);
            } catch (error) {
                if (this.isAbortError(error)) return;
                this.appendMessageToChat(
                    requestChatId,
                    'assistant',
                    'Error • ' + this.formatUserFacingError(error, 'The connection failed. Wait a few seconds and try again.')
                );
                console.error('NeuraVeil Error:', error);
            } finally {
                this.finishChatRequestSession(requestChatId, requestSession);
                this.setLoading(false, requestChatId);
            }
        }

        pageQuestionWantsImage(text) {
            if (this.detectImageIntent(text, 'medium').action !== 'none') return true;
            const normalized = this.normalizeIntentText(text);
            if (!normalized || this.hasAnyPattern(normalized, this.getImageIntentPatterns().noImage)) return false;
            return /\b(image|photo|picture|illustration|visual|visuel|imagen|imagem|immagine|bild|foto)\b/i.test(normalized)
                || /(画像|写真|이미지|사진|изображение|картинка|фото)/i.test(normalized);
        }

        async getSelectedReasoningLevel(userText, requestOptions = {}) {
            if (this.state.reasoningEffort !== 'auto') {
                return this.state.reasoningEffort;
            }
            return await this.fetchAutoReasoningLevel(userText, requestOptions);
        }

        async fetchAutoReasoningLevel(userText, requestOptions = {}) {
            const routerSystemPrompt = `You are an internal router.

                Task:
                Given the user prompt, choose the most appropriate reasoning level.

                Rules:
                - Respond with compact JSON only.
                - No explanation.
                - No extra text.

                Schema:
                {"level":"minimal|low|medium|high"}

                Allowed levels:
                minimal
                low
                medium
                high

                Criteria:
                - minimal: extraction, formatting, very short tasks
                - low: simple questions, factual answers
                - medium: general tasks, summaries, explanations
                - high: complex reasoning, planning, strategy, multi-step tasks`;

            const model = await this.getPreferredTextModel('fast', requestOptions);
            const payload = {
                messages: [
                    { role: 'system', content: routerSystemPrompt },
                    { role: 'user', content: `User prompt:\n"${userText}"` }
                ],
                model,
                temperature: 0,
                max_tokens: 20,
                jsonMode: true,
                response_format: { type: 'json_object' },
                seed: Math.floor(Math.random() * 10000)
            };

            const makeRequest = async (retryCount = 0) => {
                try {
                    const { data } = await this.requestPollinationsChatWithFallbackModels(payload, 'Reasoning router', 'minimal', null, requestOptions);
                    const parsed = this.parseAssistantJsonContent(data);
                    const raw = String(parsed?.level || this.extractAssistantContent(data)).trim().toLowerCase();
                    const normalized = raw.split(/\s+/)[0].replace(/[^a-z]/g, '');
                    const allowed = ['minimal', 'low', 'medium', 'high'];
                    if (allowed.includes(normalized)) {
                        return normalized;
                    }
                    return 'medium';
                } catch (e) {
                    console.warn('NeuraVeil: Router failed, defaulting to medium.', e);
                    return 'medium';
                }
            };

            return await makeRequest();
        }

        async fetchAIResponse(userText, historyOverride = null, reasoningOverride = null, requestOptions = {}, onStage = null) {
            // Limit history to 6 to prevent context length issues
            const sourceHistory = Array.isArray(historyOverride) ? historyOverride : this.messages;
            const pinnedSystemHistory = sourceHistory.filter(message => message?.role === 'system');
            const recentConversation = sourceHistory
                .filter(message => message?.role !== 'system')
                .slice(-6);
            const recentHistory = [...pinnedSystemHistory, ...recentConversation];
            const reasoningLevel = reasoningOverride || this.state.reasoningEffort;
            const stylePrompt = this.getStylePrompt();
            const responseLanguage = this.detectResponseLanguage(userText);
            const model = await this.getPreferredTextModel(['minimal', 'low'].includes(reasoningLevel) ? 'fast' : 'chat', requestOptions);
            const toolSpec = `Available output tools:
                - generate_image: [tool:generate_image prompt="..." aspect="square|landscape|portrait"]
                - show_image: [tool:show_image query="..." alt="..."] or [tool:show_image url="..." alt="..."]
                - search_music: [tool:search_music query="..." title="..."]
                - link: [tool:link url="..." text="..."]
                - code: [tool:code lang="js"]...[/tool:code]  (preferred for code)

                Tool rules:
                - If the user asks to generate, create, draw, make, or produce an image, use generate_image. This is allowed in every reasoning level, including medium.
                - If the user asks for "an image of X" without specifying search/show/display, treat it as image generation and use generate_image.
                - For generated images, add aspect="landscape", aspect="portrait", or aspect="square" when the user gives a format, screen, poster, wallpaper, or mobile clue.
                - If the user asks to show, find, display, or illustrate an existing visual thing, use show_image with a short query. If a trusted URL is explicitly provided in page context or by the user, show_image may use that URL.
                - Do not use show_image or generate_image for music/audio/song requests unless the user explicitly asks for cover art or an image.
                - Never invent image URLs. Never output Markdown image syntax like ![alt](url). Never use placeholder image services such as source.unsplash.com, picsum.photos, random Cloudflare/R2 links, or fake temporary URLs.
                - If an image cannot be provided through a tool, say so briefly instead of fabricating a link.
                - If the user asks to find, search, show, recommend, or get music, a song, a beat, a soundtrack, a jingle, an instrumental, or a free/legal audio piece, use search_music.
                - If the user asks to create or generate music, use search_music to find a free/legal track that matches the requested mood instead of fabricating audio.
                - For "latest hit", "dernier tube", or commercial artist requests, do not claim current chart knowledge. Use search_music with the artist/title terms and say the tool searches openly licensed/free audio, so the exact commercial track may not be available.
                - For search_music, write a normal helpful response around the tool call. Do not stop at only the tool call; briefly mention that the result comes from openly licensed sources when useful.
                - Never invent audio URLs, fake streaming links, or Markdown audio links. Use search_music instead.
                - Use link only for URLs supplied by the user/page context or URLs you are confident are real.
                - For code, use [tool:code] or fenced Markdown with a language. Do not leave code as plain prose.
                - Never output raw HTML. Mix normal text and tool calls when useful.`;
            const levelPrompt = this.getReasoningModePrompt(reasoningLevel);
            const baseSystemPrompt = `You are NeuraVeil, a helpful and concise AI assistant living in a browser overlay.${stylePrompt ? `\n\nStyle:\n${stylePrompt}` : ''}

${toolSpec}

Reasoning mode:
${levelPrompt}

Response language:
- Detected latest user language: ${responseLanguage}.
- Reply in that language. If the user writes in French, answer in French. Do not default to English unless the user asks for English.

Global constraints:
- Never reveal internal reasoning or hidden analysis.
- Do not mention intermediate steps.
- Answer the user's request directly and accurately.
- If the request is unclear, ask one short clarification question or make the safest reasonable assumption.`;
            const systemPrompt = baseSystemPrompt;

            const payload = {
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...recentHistory
                ],
                model,
                seed: Math.floor(Math.random() * 10000) // Avoid cache collisions
            };

            const makeRequest = async (retryCount = 0) => {
                if (typeof onStage === 'function') {
                    onStage(this.state.isPageContextActive && this.state.pageContext?.content
                        ? 'NeuraVeil is thinking with the page context...'
                        : 'NeuraVeil is thinking...');
                }
                const { data } = await this.requestPollinationsChatWithFallbackModels(payload, 'Text Pollinations', reasoningLevel, null, requestOptions);
                const content = this.extractAssistantContent(data) || 'No response.';
                if (typeof onStage === 'function') onStage('NeuraVeil is polishing the answer...');
                let cleaned = this.sanitizeAssistantText(content);
                cleaned = this.correctImageToolForWebRequests(userText, cleaned);
                if (this.musicSearchLooksExplicit(userText)) {
                    if (typeof onStage === 'function') onStage('NeuraVeil is preparing the music result...');
                    cleaned = await this.maybeInjectAutoMusic(userText, cleaned);
                } else {
                    if (typeof onStage === 'function') onStage('NeuraVeil is selecting the best tools...');
                    cleaned = await this.maybeInjectAutoImage(userText, reasoningLevel, cleaned);
                    cleaned = await this.maybeInjectAutoMusic(userText, cleaned);
                }
                return cleaned;
            };

            return await makeRequest();
        }

        sanitizeAssistantText(text) {
            if (!text) return text;
            let cleaned = text;
            cleaned = cleaned.replace(/\[(searchmusic|search_music|generatemusic|generate_music)\]\s*([^\[]*?)\s*\[\/\1\]/gi, (_match, name, attrs) => {
                const toolName = /generate/i.test(name) ? 'generate_music' : 'search_music';
                return `[tool:${toolName} ${String(attrs || '').trim()}]`;
            });
            const adBlockRegex = /\n*\s*---\s*\n\s*\*\*Support Pollinations\.AI:\*\*[\s\S]*?keep AI accessible for everyone\.\s*/gi;
            cleaned = cleaned.replace(adBlockRegex, '');
            cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
            return cleaned.trim();
        }

        setupSpeechRecognition() {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                if (this.elements.micBtn) this.elements.micBtn.style.display = 'none';
                return;
            }

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = 'fr-FR';

            this.recognition.onresult = (event) => {
                const input = this.elements.input;
                if (!input) return;

                if (typeof this.speechCursorStart === 'undefined') {
                    this.speechCursorStart = input.selectionStart;
                    this.speechTextBefore = input.value.substring(0, this.speechCursorStart);
                    this.speechTextAfter = input.value.substring(input.selectionEnd);
                }

                if (!Array.isArray(this.speechFinalSegments)) {
                    this.speechFinalSegments = [];
                }

                const interimParts = [];
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    const result = event.results[i];
                    const transcript = result?.[0]?.transcript || '';
                    if (!transcript) continue;

                    if (result.isFinal) {
                        this.speechFinalSegments[i] = transcript;
                    } else {
                        interimParts.push(transcript);
                    }
                }

                const finalText = this.speechFinalSegments.filter(Boolean).join('');
                const interimText = interimParts.join('');
                const displayText = finalText + interimText;
                const prefix = (this.speechTextBefore && !this.speechTextBefore.endsWith(' ') && displayText && !displayText.startsWith(' ')) ? ' ' : '';

                input.value = this.speechTextBefore + prefix + displayText + this.speechTextAfter;

                const newPos = this.speechTextBefore.length + prefix.length + displayText.length;
                input.selectionStart = newPos;
                input.selectionEnd = newPos;
                this.adjustHeight();
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                if (event.error === 'not-allowed') {
                    this.stopRecording();
                }
            };

            this.recognition.onend = () => {
                if (this.isRecording) {
                    this.isRecording = false;
                    this.setMicRecordingUi(false);
                }
                this.scheduleSpeechStateClear();
            };
        }

        toggleSpeech() {
            if (!this.recognition) return;
            if (this.isChatLoading(this.currentChatId)) return;

            if (this.isRecording) {
                this.stopRecording();
            } else {
                this.startRecording();
            }
        }

        startRecording() {
            if (this.isChatLoading(this.currentChatId)) return;
            try {
                this.clearSpeechState();
                if (this.speechClearTimer) {
                    clearTimeout(this.speechClearTimer);
                    this.speechClearTimer = null;
                }

                const input = this.elements.input;
                this.speechCursorStart = input?.selectionStart || 0;
                this.speechTextBefore = input?.value.substring(0, this.speechCursorStart) || '';
                this.speechTextAfter = input?.value.substring(input.selectionEnd) || '';
                this.speechFinalSegments = [];

                this.recognition.start();
                this.isRecording = true;
                this.setMicRecordingUi(true);
            } catch (e) {
                console.error(e);
            }
        }

        stopRecording() {
            const wasRecording = this.isRecording;
            this.isRecording = false;

            if (this.recognition && wasRecording) {
                try {
                    this.recognition.stop();
                } catch (e) {
                    console.warn('Speech recognition stop failed:', e);
                }
            }
            this.setMicRecordingUi(false);
            this.scheduleSpeechStateClear();
        }

        stopRecordingBeforeSubmit() {
            if (this.isRecording) {
                this.stopRecording();
            }
        }

        clearSpeechState() {
            this.speechCursorStart = undefined;
            this.speechTextBefore = '';
            this.speechTextAfter = '';
            this.speechFinalSegments = [];
        }

        scheduleSpeechStateClear() {
            if (this.speechClearTimer) clearTimeout(this.speechClearTimer);
            this.speechClearTimer = setTimeout(() => {
                this.clearSpeechState();
                this.speechClearTimer = null;
            }, 1200);
        }

        setMicRecordingUi(active) {
            if (this.elements.micBtn) {
                const disabled = this.isChatLoading(this.currentChatId);
                this.elements.micBtn.classList.toggle('active', active);
                this.elements.micBtn.classList.toggle('nv-recording', active);
                this.elements.micBtn.title = active
                    ? 'Stop voice input'
                    : (disabled ? 'Voice input is unavailable while NeuraVeil is responding' : 'Voice Input');
                this.elements.micBtn.innerHTML = active
                    ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="7" y="7" width="10" height="10" rx="2.5"></rect></svg>`
                    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`;
                this.elements.micBtn.style.color = '';
            }
            if (this.elements.input) {
                this.elements.input.placeholder = active
                    ? 'Listening...'
                    : (this.state.isImageMode ? 'Describe your image...' : 'Type a message...');
            }
        }
    }

    // Initialize NeuraVeil !
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new NeuraVeil());
    } else {
        new NeuraVeil();
    }


})();
