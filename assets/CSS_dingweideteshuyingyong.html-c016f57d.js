import{_ as n,p as s,q as a,Z as t}from"./framework-1749bed7.js";const p={},e=t(`<h2 id="特殊应用一" tabindex="-1"><a class="header-anchor" href="#特殊应用一" aria-hidden="true">#</a> 特殊应用一</h2><p>父元素没有设置 width，由子元素撑开。子元素没有设置 width，但设置了 padding 和 border，此时子元素想占满整个父元素的 width</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.outer</span> <span class="token punctuation">{</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果子元素想完全撑满父容器，再添加 <code>top: 0; bottom: 0;</code></p><h2 id="特殊应用二" tabindex="-1"><a class="header-anchor" href="#特殊应用二" aria-hidden="true">#</a> 特殊应用二</h2><p>父元素和子元素都是块级元素且都有宽高，让子元素水平垂直居中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.outer</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inner</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","CSS_dingweideteshuyingyong.html.vue"]]);export{r as default};
