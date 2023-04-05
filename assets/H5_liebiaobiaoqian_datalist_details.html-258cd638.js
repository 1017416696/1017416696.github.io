import{_ as t,p as e,q as a,Z as i}from"./framework-1749bed7.js";const l={},d=i(`<h2 id="datalist" tabindex="-1"><a class="header-anchor" href="#datalist" aria-hidden="true">#</a> datalist</h2><p><code>&lt;datalist&gt;</code> 元素可以与 <code>&lt;input&gt;</code> 元素一起使用，可以提供一个下拉列表，以供用户选择输入框中的值</p><p><code>&lt;datalist&gt;</code> 元素主要是识别关键字的，输入的内容在 value 中存在，就会提示完整的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;#&quot;&gt;  
  &lt;input type=&quot;text&quot; list=&quot;mydata&quot;&gt;  
  &lt;button&gt;搜索&lt;/button&gt;  
&lt;/form&gt;  
&lt;datalist id=&quot;mydata&quot;&gt;  
  &lt;option value=&quot;周杰伦&quot;&gt;周杰伦&lt;/option&gt;  
  &lt;option value=&quot;周冬雨&quot;&gt;周冬雨&lt;/option&gt;  
  &lt;option value=&quot;马冬梅&quot;&gt;马冬梅&lt;/option&gt;  
  &lt;option value=&quot;温兆伦&quot;&gt;温兆伦&lt;/option&gt;  
&lt;/datalist&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![[Pasted image 20230401163819.png]]</p><p>这种应用场景类似于搜索引擎给的搜索提示</p><p>![[Pasted image 20230401163747.png|300]]</p><h2 id="details" tabindex="-1"><a class="header-anchor" href="#details" aria-hidden="true">#</a> details</h2><p>用于创建一个可视/隐藏的详细信息区域</p><p><code>&lt;details&gt;</code>内置了一个<code>&lt;summary&gt;</code>元素用于添加总结内容，而且它们都是可以通过 JavaScript 控制开启或关闭</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;details&gt;
  &lt;summary&gt;点击我查看更多&lt;/summary&gt;
  &lt;p&gt;这是一个详细信息，可以包含各种形式的 HTML 元素，比如段落、图像、列表等等。&lt;/p&gt;
&lt;/details&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>![[Pasted image 20230401164237.png]]</p>`,12),n=[d];function s(o,u){return e(),a("div",null,n)}const r=t(l,[["render",s],["__file","H5_liebiaobiaoqian_datalist_details.html.vue"]]);export{r as default};
