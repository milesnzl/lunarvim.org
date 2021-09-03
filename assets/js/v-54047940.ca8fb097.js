(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[196],{9789:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-54047940",path:"/languages/vue.html",title:"Vue",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Install Language Server",slug:"install-language-server",children:[]},{level:2,title:"Formatters",slug:"formatters",children:[]},{level:2,title:"Linters",slug:"linters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]}],filePathRelative:"languages/vue.md",git:{updatedTime:1628713649e3,contributors:[]}}},1545:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});const e=(0,s(6252).uE)('<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall vue\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><p>The configured formatter(s) must be installed separately.</p><p>Configuration in <code>~/.config/lvim/config.lua</code>:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- exe value can be &quot;prettier&quot;, &quot;prettierd&quot;, &quot;eslint&quot;, or &quot;eslint_d&quot;</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Also combination of some prettier and eslint can be specified:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- exe value can be &quot;prettier&quot;, &quot;prettierd&quot;, &quot;eslint&quot;, or &quot;eslint_d&quot;</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>With <code>eslint</code> and <code>eslint_d</code>, the <code>--fix</code> functionality is used for formatting.</p><h2 id="linters" tabindex="-1"><a class="header-anchor" href="#linters" aria-hidden="true">#</a> Linters</h2><p>The configured linter must be installed separately.</p><p>Configuration in <code>~/.config/lvim/config.lua</code>:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token comment">-- exe value can be &quot;eslint&quot; or &quot;eslint_d&quot;</span>\nlvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>vue<span class="token punctuation">.</span>linters <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> exe <span class="token operator">=</span> <span class="token string">&quot;eslint&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>NlspConfig vuels\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',18),t={render:function(n,a){return e}}}}]);