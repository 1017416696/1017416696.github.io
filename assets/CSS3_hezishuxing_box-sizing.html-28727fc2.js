import{_ as n,p as s,q as a,Z as e}from"./framework-1749bed7.js";const t={},p=e(`<p>该属性决定如何计算盒子的大小</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* content-box is the default value */</span>
<span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box/content-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 此时设置的 width 和 height 是内容区的宽高 */</span>
<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> 
<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 此时设置的 width 和 height 是盒子的最终宽高，包括 padding 和 border */</span>
<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该属性也叫怪异盒模型</p>`,5),i=[p];function c(o,l){return s(),a("div",null,i)}const u=n(t,[["render",c],["__file","CSS3_hezishuxing_box-sizing.html.vue"]]);export{u as default};
