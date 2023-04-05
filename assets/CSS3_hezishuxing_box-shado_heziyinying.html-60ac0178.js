import{_ as n,p as s,q as a,Z as e}from"./framework-1749bed7.js";const p={},t=e(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 水平位置 垂直位置 */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span>

<span class="token comment">/* 水平位置 垂直位置 阴影的颜色 */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px blue<span class="token punctuation">;</span>

<span class="token comment">/* 水平位置 垂直位置 模糊程度 */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 20px<span class="token punctuation">;</span>

<span class="token comment">/* 水平位置 垂直位置 模糊程度 阴影的颜色 (用的多)*/</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 20px blue<span class="token punctuation">;</span>
d
<span class="token comment">/* 水平位置 垂直位置 模糊程度 外延值 阴影颜色 */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 20px 10px blue<span class="token punctuation">;</span>

<span class="token comment">/* 水平位置 垂直位置 模糊程度 外延值 阴影颜色 内阴影 */</span>
<span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 10px 10px blue inset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>阴影的使用场景是鼠标滑过盒子时，出现阴影效果</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> 0.4s linear all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box:hover</span> <span class="token punctuation">{</span>
	<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 20px black<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> -1px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[t];function c(o,l){return s(),a("div",null,i)}const d=n(p,[["render",c],["__file","CSS3_hezishuxing_box-shado_heziyinying.html.vue"]]);export{d as default};
