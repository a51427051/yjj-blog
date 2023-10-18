import{_ as n,o as s,c as a,a as t}from"./app-b5630a42.js";const p={},o=t(`<h1 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h1><p>👩🏻‍💻十三月   🕰️ 2023-09-11</p><h2 id="网络优化" tabindex="-1"><a class="header-anchor" href="#网络优化" aria-hidden="true">#</a> 网络优化</h2><h3 id="使用cdn-内容分发网络" tabindex="-1"><a class="header-anchor" href="#使用cdn-内容分发网络" aria-hidden="true">#</a> 使用CDN(内容分发网络)</h3><p>CDN是一组分散在不同地理位置的web服务器，用来给用户更高效地发送内容。</p><p>选择用来发送内容的服务器是基于网络距离的衡量标准的，例如：选跳数（hop）最少的获取响应时间最快的服务器</p><h3 id="压缩响应" tabindex="-1"><a class="header-anchor" href="#压缩响应" aria-hidden="true">#</a> 压缩响应</h3><p>压缩响应通过减少http请求产生的响应表的大小，从而降低传输时间的方式来提高性能。 web客户端通过请求头中的<code>Accept-Encoding</code>来标识对压缩的支持，如<code>gzip, deflate, br</code> web服务器通过响应头中的<code>Content-Encoding</code>来告知web客户端使用哪种方式进行的压缩</p><h3 id="避免图片src为空" tabindex="-1"><a class="header-anchor" href="#避免图片src为空" aria-hidden="true">#</a> 避免图片src为空</h3><p>虽然src属性为空字符串，但是浏览器任然会向服务器发起一个HTTP请求</p><h2 id="页面渲染优化" tabindex="-1"><a class="header-anchor" href="#页面渲染优化" aria-hidden="true">#</a> 页面渲染优化</h2><h2 id="js中的性能优化" tabindex="-1"><a class="header-anchor" href="#js中的性能优化" aria-hidden="true">#</a> JS中的性能优化</h2><h2 id="图片的优化" tabindex="-1"><a class="header-anchor" href="#图片的优化" aria-hidden="true">#</a> 图片的优化</h2><h2 id="webpack打包优化" tabindex="-1"><a class="header-anchor" href="#webpack打包优化" aria-hidden="true">#</a> webpack打包优化</h2><h3 id="缩小loader匹配范围" tabindex="-1"><a class="header-anchor" href="#缩小loader匹配范围" aria-hidden="true">#</a> 缩小loader匹配范围</h3><p>可以使用test，include，exclude三个配置项来缩小loader的处理范围 推荐使用include</p><h3 id="计算页面加载时间脚本" tabindex="-1"><a class="header-anchor" href="#计算页面加载时间脚本" aria-hidden="true">#</a> 计算页面加载时间脚本</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span><span class="token punctuation">[</span><span class="token keyword">if</span> <span class="token constant">IE</span><span class="token punctuation">]</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>html<span class="token punctuation">,</span>body<span class="token punctuation">{</span><span class="token literal-property property">overflow</span><span class="token operator">:</span>hidden<span class="token punctuation">;</span>height<span class="token operator">:</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>background<span class="token operator">:</span> #00ff00<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tb-ie-updater-layer&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;position:absolute;left: 0;top: 0;bottom: 0;right: 0;width: 100%;height: 100%;background-color: #000;filter: alpha(opacity=50);opacity: 0.5;z-index: 999999&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tb-ie-updater-box&quot;</span> data<span class="token operator">-</span>spm<span class="token operator">=</span><span class="token string">&quot;20161112&quot;</span> style<span class="token operator">=</span><span class="token string">&quot;position:absolute;left: 50%;top: 50%;margin-left: -292px;margin-top: -210px;width: 584px;height: 420px;&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;https://www.google.cn/intl/zh-CN/chrome/browser/desktop/&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tb-ie-updater-google&quot;</span> target<span class="token operator">=</span><span class="token string">&quot;_blank&quot;</span> data<span class="token operator">-</span>spm<span class="token operator">-</span>click<span class="token operator">=</span><span class="token string">&quot;gostr=/tbieupdate;locaid=d1;name=google&quot;</span><span class="token operator">&gt;</span>谷歌 Chrome<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;http://www.uc.cn/ucbrowser/download/&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;tb-ie-updater-uc&quot;</span> target<span class="token operator">=</span><span class="token string">&quot;_blank&quot;</span> data<span class="token operator">-</span>spm<span class="token operator">-</span>click<span class="token operator">=</span><span class="token string">&quot;gostr=/tbieupdate20161112;locaid=d2;name=uc&quot;</span><span class="token operator">&gt;</span><span class="token constant">UC</span> 浏览器<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token punctuation">[</span>endif<span class="token punctuation">]</span><span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script id<span class="token operator">=</span><span class="token string">&quot;__NEXT_COUNT__&quot;</span><span class="token operator">&gt;</span>
    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token string">&quot;#1475b2&quot;</span><span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token string">&quot;#42c02e&quot;</span><span class="token punctuation">,</span> <span class="token function-variable function">u</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> t <span class="token operator">=</span> e<span class="token punctuation">.</span>title<span class="token punctuation">,</span> r <span class="token operator">=</span> e<span class="token punctuation">.</span>content<span class="token punctuation">,</span> n <span class="token operator">=</span> e<span class="token punctuation">.</span>backgroundColor<span class="token punctuation">,</span>
            a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;%c &quot;</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">&quot; %c &quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&quot;padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: &quot;</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;#606060&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token string">&quot;padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background: &quot;</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> <span class="token string">&quot;;&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> e<span class="token punctuation">;</span>
            window<span class="token punctuation">.</span>console <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">===</span> <span class="token keyword">typeof</span> window<span class="token punctuation">.</span>console<span class="token punctuation">.</span>log <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>e <span class="token operator">=</span> console<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token number">0</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">,</span> a
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">d</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> t <span class="token operator">=</span> e<span class="token punctuation">.</span>title<span class="token punctuation">,</span> r <span class="token operator">=</span> e<span class="token punctuation">.</span>content<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">u</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> t<span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> r<span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> i<span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span>  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> e <span class="token operator">=</span> window<span class="token punctuation">.</span>performance<span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> t <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">&quot;navigation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
                t <span class="token operator">||</span> <span class="token punctuation">(</span>r <span class="token operator">=</span> <span class="token punctuation">(</span>t <span class="token operator">=</span> e<span class="token punctuation">.</span>timing<span class="token punctuation">)</span><span class="token punctuation">.</span>navigationStart<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Redirect&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;\\u7f51\\u9875\\u91cd\\u5b9a\\u5411\\u7684\\u8017\\u65f6&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>redirectEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>redirectStart
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;AppCache&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;\\u68c0\\u67e5\\u672c\\u5730\\u7f13\\u5b58\\u7684\\u8017\\u65f6&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domainLookupStart <span class="token operator">-</span> t<span class="token punctuation">.</span>fetchStart
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;DNS&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;DNS\\u67e5\\u8be2\\u7684\\u8017\\u65f6&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domainLookupEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>domainLookupStart
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;TCP&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;TCP\\u8fde\\u63a5\\u7684\\u8017\\u65f6&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>connectEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>connectStart
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Waiting(TTFB)&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;\\u4ece\\u5ba2\\u6237\\u7aef\\u53d1\\u8d77\\u8bf7\\u6c42\\u5230\\u63a5\\u6536\\u5230\\u54cd\\u5e94\\u7684\\u65f6\\u95f4 / Time To First Byte&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>responseStart <span class="token operator">-</span> t<span class="token punctuation">.</span>requestStart
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Content Download&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;\\u4e0b\\u8f7d\\u670d\\u52a1\\u7aef\\u8fd4\\u56de\\u6570\\u636e\\u7684\\u65f6\\u95f4&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>responseEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>responseStart
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;HTTP Total Time&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;http\\u8bf7\\u6c42\\u603b\\u8017\\u65f6&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>responseEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>requestStart
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;dom\\u52a0\\u8f7d\\u5b8c\\u6210\\u7684\\u65f6\\u95f4&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domContentLoadedEventEnd <span class="token operator">-</span> r
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;Loaded&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">&quot;\\u9875\\u9762load\\u7684\\u603b\\u8017\\u65f6&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> t<span class="token punctuation">.</span>loadEventEnd <span class="token operator">-</span> r<span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">.75</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">var</span> s <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">,</span> i <span class="token operator">=</span> s<span class="token punctuation">.</span>href<span class="token punctuation">,</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span> u <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">,</span>
                        d <span class="token operator">=</span> i<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                    <span class="token doc-comment comment">/** aPlus-performance upload */</span>
                <span class="token punctuation">}</span>
                console <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span>log <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),e=[o];function c(l,r){return s(),a("div",null,e)}const i=n(p,[["render",c],["__file","performance.html.vue"]]);export{i as default};
