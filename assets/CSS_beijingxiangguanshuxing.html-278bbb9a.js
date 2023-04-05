import{_ as n,p as s,q as a,Z as e}from"./framework-1749bed7.js";const t={},p=e(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 背景色默认为透明的 */</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>

<span class="token comment">/* 背景图片 */</span>
<span class="token property">background-img</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./test.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>

<span class="token comment">/* 设置背景图片重复方式 */</span>
<span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat/no-repeat/repeat-x/repeat-y<span class="token punctuation">;</span>

<span class="token comment">/* 控制背景图片离背景图片的显示原点的位置 */</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> left/center/right top/center/bottom<span class="token punctuation">;</span>
<span class="token comment">/* x,y */</span>
<span class="token property">background-position</span><span class="token punctuation">:</span> 10px 20px<span class="token punctuation">;</span>

<span class="token comment">/* 复合属性，不区分顺序 */</span>
<span class="token property">background</span><span class="token punctuation">:</span> skyblue <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./test.jpg<span class="token punctuation">)</span></span> no-repeat 300px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>背景图片默认是从 padding 值开始铺的，不是从内容区域 ，详细的内容可查看 [[CSS3_背景属性_background-origin_背景图原点]]</p>`,2),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","CSS_beijingxiangguanshuxing.html.vue"]]);export{r as default};
