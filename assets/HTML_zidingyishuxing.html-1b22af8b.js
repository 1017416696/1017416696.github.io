import{_ as a,p as n,q as s,Z as t}from"./framework-1749bed7.js";const e={},p=t(`<p>可以给任何标签添加自定义属性，用这些自定义属性存储额外的信息</p><h2 id="创建自定义属性" tabindex="-1"><a class="header-anchor" href="#创建自定义属性" aria-hidden="true">#</a> 创建自定义属性</h2><p>在标签中添加以“data-”开头的属性</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>This is a custom div element<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实例 [[22_完成三级联动路由跳转]]</p><h2 id="访问自定义属性" tabindex="-1"><a class="header-anchor" href="#访问自定义属性" aria-hidden="true">#</a> 访问自定义属性</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//访问属性时不需要加 &#39;data-&#39;</span>
<span class="token keyword">var</span> color <span class="token operator">=</span> div<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>color<span class="token punctuation">;</span> <span class="token comment">//red</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function o(i,l){return n(),s("div",null,c)}const r=a(e,[["render",o],["__file","HTML_zidingyishuxing.html.vue"]]);export{r as default};
