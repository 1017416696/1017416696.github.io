import{_ as t,p as s,q as e,s as a,R as p,t as o,Z as c,n as l}from"./framework-1749bed7.js";const i={},r=c(`<p>alt 属性用于配置图片的描述，这样搜索引擎就知道图片的描述，然后就可能会将该图片收录到搜索引擎，然后就可以在搜索图片时输入相关关键字就可以查看到该图片</p><p>![[Pasted image 20230320212206.png|300]]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img src=&quot;https://p8.itc.cn/q_70/images03/20221206/69374bc9755d4fe89b298448a279fe83.png&quot; alt=&quot;ChatGPT的崛起：从GPT-1到GPT-3，AIGC时代即将到来_模型_语言_任务&quot;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果图片中的内容不能显示了，就会显示 alt 属性中的值</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 在设置图片大小时，一般只设置一个width 或者一个 height，不同时修改 width 和 height ,这样就可以等比例缩放图片 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想引入在线图片，src 属性中的值就可以是网路地址。但是需要注意的是，一些网站中的图片会有防盗链，网络图片可以直接在浏览器中查看，但是不能在自己网站中的 img 标签的 src 属性中使用</p><p>给图片一个宽，高度就自适应了。给图片一个高，宽度就自适应了。所以一般不同时给宽高</p><p>src 中也可以是 base64 格式的图片</p><p>可以给图片加上边框 [[CSS_盒子边框_border]]</p><hr><p>图片格式</p><p>jgp 有损压缩，不支持透明背景</p><p>png 无损压缩，支持透明背景</p><p>bmp 不压缩，占用空间极大，网页中一般不使用</p><p>webp 谷歌推出的格式，专门在网页中展示图片，使用的时候需要解决浏览器兼容问题</p><p>base 64格式的图片，将图片变为文本使用的是 base 64 编码</p>`,16),u={href:"https://c.runoob.com/front-end/59/",target:"_blank",rel:"noopener noreferrer"},d=a("hr",null,null,-1);function m(_,g){const n=l("ExternalLinkIcon");return s(),e("div",null,[r,a("p",null,[a("a",u,[p("图片 Base64编码"),o(n)])]),d])}const k=t(i,[["render",m],["__file","HTML_tupianbiaoqian_img.html.vue"]]);export{k as default};