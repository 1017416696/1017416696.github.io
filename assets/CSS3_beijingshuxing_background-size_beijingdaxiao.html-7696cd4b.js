import{_ as n,p as s,q as a,Z as e}from"./framework-1749bed7.js";const i={},t=e(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> 400px 400px<span class="token punctuation">;</span>

<span class="token property">background-size</span><span class="token punctuation">:</span> 100% 100%<span class="token punctuation">;</span>

<span class="token property">background-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>

<span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span><span class="token punctuation">(</span>效果相对比较好<span class="token punctuation">)</span>

<span class="token comment">/* 默认值 */</span>
<span class="token property">background-size</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>contain</code> 将背景按原比例完整呈现出来，还会伴随背景重复</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.box {
	background-image: url(&#39;./1.png&#39;);
	background-size: contain;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![[Pasted image 20230402214114.png|300]]</p><p><code>cover</code> 将背景按原比例完整呈现出来，但可能不会显示全部的内容。当将图片等比例缩放到和容器的长度和宽度相同时就停止</p><p>![[Pasted image 20230402214405.png|300]]</p>`,6),c=[t];function p(o,l){return s(),a("div",null,c)}const u=n(i,[["render",p],["__file","CSS3_beijingshuxing_background-size_beijingdaxiao.html.vue"]]);export{u as default};
