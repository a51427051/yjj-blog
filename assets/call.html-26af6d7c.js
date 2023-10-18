import{_ as n,o as a,c as s,a as t}from"./app-b5630a42.js";const e={},o=t(`<h1 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h1><p>👩🏻‍💻十三月   🕰️ 2022-08-02</p><h3 id="含义" tabindex="-1"><a class="header-anchor" href="#含义" aria-hidden="true">#</a> 含义</h3><p>用来调用一个函数，并指定函数内部的this值和参数列表。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><p><code>function.call(thisArg, arg1, arg2...)</code></p><h3 id="解释" tabindex="-1"><a class="header-anchor" href="#解释" aria-hidden="true">#</a> 解释</h3><p><code>function</code>是要调用的函数，<code>thisArg</code>是要设置为函数内部的this值的对象，<code>arg1,arg2,..</code>.是要传递给函数的参数列表</p><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p><code>call</code>方法的作用是在指定的<code>thisArg</code>上调用函数，并将参数传递给函数。通过调用<code>call</code>方法，我们可以显式的指定函数内部的<code>this</code>值，而不依赖于函数的调用方式。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">! My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">greet</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello, Alice! My name is John.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[o];function p(i,l){return a(),s("div",null,c)}const u=n(e,[["render",p],["__file","call.html.vue"]]);export{u as default};
