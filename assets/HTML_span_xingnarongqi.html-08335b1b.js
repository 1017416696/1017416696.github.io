import{_ as n,p as s,q as a,Z as t}from"./framework-1749bed7.js";const e={},p=t(`<p><code>&lt;span&gt;</code> 标签的 <code>title</code> 属性：鼠标悬停后会显示出来</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>我是title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
        xxx  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>a</code> 标签也有 <code>title</code> 属性</p><h2 id="让-span-标签文字居中显示" tabindex="-1"><a class="header-anchor" href="#让-span-标签文字居中显示" aria-hidden="true">#</a> 让 span 标签文字居中显示</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>charts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>周同比 56.67%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.charts</span><span class="token punctuation">{</span>  
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>  
  <span class="token property">line-height</span><span class="token punctuation">:</span> 60px  <span class="token comment">/* equal to container height */</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>  
<span class="token selector">.charts span</span><span class="token punctuation">{</span>  
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function l(o,i){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","HTML_span_xingnarongqi.html.vue"]]);export{d as default};