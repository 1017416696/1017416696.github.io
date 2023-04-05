import{_ as n,p as e,q as a,Z as s}from"./framework-1749bed7.js";const t={},o=s(`<p>autocomplete 是<code>&lt;input&gt;</code> 标签的属性 ，但不能写在密码上</p><p>autocomplete 属性在 textarea 标签上不起作用</p><p>该属性表示是否自动填充表单字段 ，而且还可以指定填充字段的类型</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该属性默认值为 <code>on</code> ，如果想关闭自动填充功能，设为 <code>off</code> 即可</p><p>![[Pasted image 20230303152746.png]]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>自动填充表单字段类型:

-   &quot;name&quot;：表示自动填充姓名或全名
-   &quot;given-name&quot;：表示自动填充名字或第一个名字
-   &quot;family-name&quot;：表示自动填充姓或姓氏
-   &quot;email&quot;：表示自动填充电子邮件地址
-   &quot;tel&quot;：表示自动填充电话号码
-   &quot;address-line1&quot;：表示自动填充地址的第一行
-   &quot;address-line2&quot;：表示自动填充地址的第二行
-   &quot;address-level1&quot;：表示自动填充地址的州或省份
-   &quot;address-level2&quot;：表示自动填充地址的城市或城镇
-   &quot;postal-code&quot;：表示自动填充邮政编码
-   &quot;country&quot;：表示自动填充国家或地区

不同的浏览器可能会以不同的方式支持这些类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果想支持这一功能，需要开启浏览器的保存地址的功能</p></blockquote><p>![[Pasted image 20230402104032.png]]</p>`,9),l=[o];function i(u,c){return e(),a("div",null,l)}const p=n(t,[["render",i],["__file","H5_biaodanyuansu_autocomplete.html.vue"]]);export{p as default};
