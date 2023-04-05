import{_ as n,p as s,q as a,Z as e}from"./framework-1749bed7.js";const i={},t=e(`<p>![[Pasted image 20230329222345.png|300]]</p><p>如果图片所在的父元素中没有设置 height，则就会出现上图中的问题</p><p>红框中的空白就称为幽灵空白</p><p>这个空白可以参照字母 x 的位置对齐的，也就是基线对齐</p><p>下面是第一种解决方法(推荐)</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
	<span class="token comment">/* 三种方式都可以解决幽灵空白问题，但会让对应的文字位置有所改变 */</span>

	<span class="token comment">/* 文字靠上 */</span>
	<span class="token property">vertival-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
	<span class="token comment">/* 文字靠中 */</span>
	<span class="token property">vertival-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token comment">/* 文字靠下 */</span>
	<span class="token property">vertival-align</span><span class="token punctuation">:</span> bottom<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[[CSS_文本属性_vertical-align]]</p><hr><p>第二种方法(有局限性)</p><p>如果只有图片，没有文字 ，可以将图片设置为 块级元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三种方法</p><p>归根结底还是文字出现的问题，那就还将父元素的字体大小改为0</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[t];function c(l,o){return s(),a("div",null,p)}const u=n(i,[["render",c],["__file","CSS_xingnakuaideyoulingkongbaiwenti.html.vue"]]);export{u as default};
