(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[955],{3987:(e,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>i});const i={key:"v-64fe016f",path:"/drafts/updating.html",title:"Updating LunarVim",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"Plugins",slug:"plugins",children:[]},{level:3,title:"LunarVim",slug:"lunarvim",children:[]},{level:3,title:"Neovim",slug:"neovim",children:[]}],filePathRelative:"drafts/updating.md",git:{updatedTime:1628283189e3,contributors:[]}}},4708:(e,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>u});var i=n(6252);const s=(0,i.uE)('<h1 id="updating-lunarvim" tabindex="-1"><a class="header-anchor" href="#updating-lunarvim" aria-hidden="true">#</a> Updating LunarVim</h1><p>Update your plugins, LunarVim and <code>neovim</code>:</p><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h3><p>In <code>lvim</code>:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>PackerUpdate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="lunarvim" tabindex="-1"><a class="header-anchor" href="#lunarvim" aria-hidden="true">#</a> LunarVim</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/lvim <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> pull\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then, in <code>lvim</code>:</p><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>PackerSync\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="neovim" tabindex="-1"><a class="header-anchor" href="#neovim" aria-hidden="true">#</a> Neovim</h3>',10),l=(0,i.Uk)("Use your package manager or "),r=(0,i.Uk)("compile from source"),d=(0,i.Uk)("."),u={render:function(e,a){const n=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[s,(0,i.Wm)("p",null,[l,(0,i.Wm)(n,{to:"/drafts/dev/#compiling-neovim-from-source"},{default:(0,i.w5)((()=>[r])),_:1}),d])],64)}}}}]);