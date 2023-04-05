import{_ as s,p as a,q as n,Z as t}from"./framework-1749bed7.js";const e={},p=t(`<p>html 页面引入外部样式文件，实现样式和结构完全分离</p><p>如果网页中多个 html 页面使用同一个 css 文件，从第二个 html 页面开始直接从缓存中使用同一个 css 文件</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rel 表示 relation，关联</p>`,4),l=[p];function c(o,u){return a(),n("div",null,l)}const r=s(e,[["render",c],["__file","CSS_waibuyangshi.html.vue"]]);export{r as default};