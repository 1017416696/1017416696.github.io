import{_ as n,p as s,q as t,Z as a}from"./framework-1749bed7.js";const o={},e=a(`<p>当页面加载时应该自动将焦点放在哪个元素上</p><p><code>autofocus</code>属性可以在以下HTML元素中使用：</p><ul><li><code>&lt;button&gt;</code></li><li><code>&lt;input&gt;</code> (除了<code>hidden</code>类型的)</li><li><code>&lt;select&gt;</code></li><li><code>&lt;textarea&gt;</code></li><li><code>&lt;keygen&gt;</code></li><li><code>&lt;command&gt;</code></li></ul><blockquote><p><code>autofocus</code>属性应该在页面中只出现一次，因为多个元素具有<code>autofocus</code>属性可能会导致不确定的行为</p></blockquote><hr><p>在 js 中，使用 <code>focus()</code> 方法将焦点设置到特定的HTML元素上</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> myInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myInput&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myInput<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[e];function u(l,p){return s(),t("div",null,c)}const i=n(o,[["render",u],["__file","H5_biaodanyuansu_autofocus.html.vue"]]);export{i as default};
