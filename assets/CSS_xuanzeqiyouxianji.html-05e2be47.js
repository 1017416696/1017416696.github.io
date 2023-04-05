import{_ as n,p as s,q as a,Z as e}from"./framework-1749bed7.js";const t={},i=e(`<h2 id="简单选择器计算" tabindex="-1"><a class="header-anchor" href="#简单选择器计算" aria-hidden="true">#</a> 简单选择器计算</h2><p>!important &gt; 行内样式 &gt; ID 选择器 &gt; 类选择器 &gt; 元素选择器 &gt; 通配选择器</p><h2 id="复杂选择器计算" tabindex="-1"><a class="header-anchor" href="#复杂选择器计算" aria-hidden="true">#</a> 复杂选择器计算</h2><p>权重计算规则(a,b,c)</p><p>a：ID 选择器的个数</p><p>b：类、伪类、属性 选择器的个数</p><p>c：元素、伪元素 选择器的个数</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 权重(0,2,1) */</span>
<span class="token selector">.container span.slogan</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 权重(0,1,3) */</span>
<span class="token selector">div&gt;p&gt;span:nth-child(1)</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果权重相同，则后来者居上</p><blockquote><p>并集选择器的每一个部分都是分开计算的 div,p,span {xxx}，三个选择器会分开计算</p></blockquote><hr><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.slogan {  
    color: purple !important;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果为某一个属性加上 <code>!important</code>，则它就是最厉害的选择器</p>`,13),c=[i];function p(l,o){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","CSS_xuanzeqiyouxianji.html.vue"]]);export{r as default};
