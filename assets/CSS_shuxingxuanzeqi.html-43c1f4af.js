import{_ as s,p as n,q as e,Z as a}from"./framework-1749bed7.js";const t={},i=a(`<p>选中具有 title 属性的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">[title]</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div title=&quot;hello1&quot;&gt;你好&lt;/div&gt;

&lt;div title=&quot;hello2&quot;&gt;你好&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![[Pasted image 20230326170652.png]]</p><hr><p>选中 title 属性值为 hello1 的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">[title=&#39;hello1&#39;]</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>选中 title 属性值为 h 开头 的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">[title^=&#39;h&#39;]</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[[Java_正则表达式]]</p><hr><p>选中 title 属性值为 h 结尾的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">[title$=&#39;h&#39;]</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[[Java_正则表达式]]</p><hr><p>选中 title 属性值为包含 h 字符的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">[title*=&#39;h&#39;]</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),l=[i];function c(p,d){return n(),e("div",null,l)}const u=s(t,[["render",c],["__file","CSS_shuxingxuanzeqi.html.vue"]]);export{u as default};
