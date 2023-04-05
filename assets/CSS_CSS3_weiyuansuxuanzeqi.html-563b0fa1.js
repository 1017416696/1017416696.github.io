import{_ as s,p as n,q as a,Z as e}from"./framework-1749bed7.js";const t={},i=e(`<p>很像元素，但不是元素，是元素中一些特殊的位置</p><p>选中div 中的第一个字母</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Lorem ipsum dolor sit amet.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div::first-letter</span> <span class="token punctuation">{</span>  
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![[Pasted image 20230326221040.png]]</p><p>选中 div 中第一行的文字</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div::first-line</span> <span class="token punctuation">{</span>  
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>选中 div 中被鼠标选中的文字</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div::selection</span> <span class="token punctuation">{</span>  
	<span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>修改输入框占位符的文字颜色</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input::placehoder</span> <span class="token punctuation">{</span>  
    <span class="token property">color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>在 p 元素的内容之前加上 <code>¥</code>，在页面中选不中 <code>¥</code> 该字符 (加上的内容为行内元素)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;199&lt;/p&gt;  
&lt;p&gt;299&lt;/p&gt;  
&lt;p&gt;399&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p::before</span> <span class="token punctuation">{</span>  
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;¥&quot;</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>在 p 元素的内容后加上内容 (加上的内容为行内元素)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>p::after {  
    content: &quot;.00&quot;;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>selection 和 placehoder 是 CSS3提出的，其他的都是 CSS2提出的</p><p>之前 CSS 2对伪元素选择器没要求，也可以只写一个 :，到了 CSS3 要求就比较严格</p>`,23),c=[i];function l(p,d){return n(),a("div",null,c)}const u=s(t,[["render",l],["__file","CSS_CSS3_weiyuansuxuanzeqi.html.vue"]]);export{u as default};
