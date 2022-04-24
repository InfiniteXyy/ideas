import{_ as n,c as s,o as a,d as t}from"./app.d54fa4fe.js";const g='{"title":"redefined-react-hooks","description":"","frontmatter":{},"headers":[],"relativePath":"redefined-react-hooks.md"}',o={},e=t(`<h1 id="redefined-react-hooks" tabindex="-1">redefined-react-hooks <a class="header-anchor" href="#redefined-react-hooks" aria-hidden="true">#</a></h1><p>a collection of rooks with a little difference from official hooks</p><p>target: remove the verbose things, make hooks easier (and faster)</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useMemo<span class="token punctuation">,</span> useCallback<span class="token punctuation">,</span> useContext<span class="token punctuation">,</span> createContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redefined-react-hooks&#39;</span>
</code></pre></div><ol><li><strong>useState &amp; useReducer</strong></li></ol><p>same as <code>use-immer</code></p><div class="language-tsx"><pre><code><span class="token keyword">const</span> <span class="token punctuation">[</span>store<span class="token punctuation">,</span> setStore<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> input<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setStore</span><span class="token punctuation">(</span>draft <span class="token operator">=&gt;</span> draft<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li><strong>useCallback</strong></li></ol><p>remove the deps array, always return the function with a same pointer</p><div class="language-tsx"><pre><code><span class="token keyword">const</span> onChangeAmount <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setAmount</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li><strong>useEffect &amp; useLayoutEffect</strong></li></ol><p>make deps array optional (auto collect deps)</p><p>add the option param, { ignoreFirstRender: boolean }.</p><div class="language-tsx"><pre><code><span class="token keyword">const</span> onChangeKeyword <span class="token operator">=</span> <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>ignoreFirstRender<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li><strong>useMemo</strong></li></ol><p>make deps array optional (auto collect deps)</p><div class="language-tsx"><pre><code><span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> count <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="5"><li><strong>useContext</strong></li></ol><p>add selector for context (same as <code>use-context-selector</code>)</p><div class="language-tsx"><pre><code><span class="token keyword">const</span> counterContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>counterContext<span class="token punctuation">,</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token punctuation">)</span>
</code></pre></div>`,20),p=[e];function c(u,l,r,i,k,d){return a(),s("div",null,p)}var m=n(o,[["render",c]]);export{g as __pageData,m as default};