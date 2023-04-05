import{_ as s,p as n,q as a,Z as e}from"./framework-1749bed7.js";const c={},p=e(`<p>为元素进行分类，但是没有为其添加 class 属性，这就叫伪类</p><p>伪类选择器会根据元素的==状态==或者==位置==选择元素</p><p>鼠标悬停状态 、选中状态、访问链接状态</p><p>用 <code>:</code> 表示伪类选择器</p><hr><p>鼠标悬停在元素上时的状态</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>选中激活状态的 a 元素(被鼠标点击就是被激活类)</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:active</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>选中没有被访问过的链接</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>选中被访问过的链接</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a:visited</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>a 标签中状态的顺序不能乱写，不然某些效果会出不来</p><p>link visited hover active 这是书写的顺序 (lvha)</p><p>hover 和 active 是所有元素都有的状态</p><hr><p>只选择被选中的复选框</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input:checked</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span>20px
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注： :checked 伪类选择器只能用于表单元素，并且不适用于所有浏览器</p></blockquote><p>实例 [[JavaScript_实现全选框#伪类选择器实现]] ，在直接操作 DOM 元素时很好用</p><hr><p>获取输入框焦点的元素</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">input:focus</span> <span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),i=[p];function t(l,o){return n(),a("div",null,i)}const u=s(c,[["render",t],["__file","CSS_weileixuanzeqi_gainian.html.vue"]]);export{u as default};
