import{_ as a,p as n,q as s,Z as t}from"./framework-1749bed7.js";const e={},p=t(`<p>和图片一样 ，一般不同时给视频宽高</p><p>只有加上 <code>controls</code> 属性，视频才能播放、暂停等其他操作</p><p>加上 <code>muted</code> 属性，视频默认静音</p><p><code>autoplay</code> 属性必须配合 <code>muted</code> 属性才能有效果 。如果没有设置静音也能自动播放，说明该网站的媒体参与度比较高。下面的网址就是Google 浏览器的媒体参与度网址，可以查看每个网站的分数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chrome://media-engagement/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>![[Pasted image 20230402152934.png]]</p><p>loop 属性可以让视频循环播放</p><p>[[单词_poster_海报]] 属性可以指定视频的封面 。视频的比例大小和视频封面的比例大小做好相同</p><p>preload 属性可以让视频预加载，metadata 值表示预先加载视频的基本信息 ，none 值表示不预加载视频，auto 为默认值</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie.mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Your browser does not support HTML5 video.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望允许浏览器根据其支持的视频格式自动选择要使用的文件，则最好使用 <code>&lt;source&gt;</code> 标签并添加多个视频来源以便兼容多种视频格式。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">controls</span> <span class="token attr-name">muted</span> <span class="token attr-name">autoplay</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie.mp4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>video/mp4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Your browser does not support HTML5 video.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>video</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(l,u){return n(),s("div",null,o)}const d=a(e,[["render",c],["__file","H5_shipinbiaoqian.html.vue"]]);export{d as default};