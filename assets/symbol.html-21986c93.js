import{_ as n,o as s,c as a,a as e}from"./app-b5630a42.js";const p={},t=e(`<h1 id="symbol类型" tabindex="-1"><a class="header-anchor" href="#symbol类型" aria-hidden="true">#</a> Symbol类型</h1><p>👩🏻‍💻十三月   🕰️ 2023-08-16</p><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>Symbol是ES6引入的一种新的原始数据类型。它的主要特征如下：</p><ol><li><p>唯一性</p><p>每个通过symbol函数创建的symbol值都是唯一的，即使他们的描述相同，他们在内存中也是不相等的。</p></li><li><p>不可变性</p><p>symbol的值是不可变的，一旦创建就不能修改或重写</p></li></ol><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><ol><li><p>创建唯一的属性键</p><p>symbol值可以用作对象的属性键，确保属性的唯一性。这在需要使用非字符串键的时候非常有用，例如在创建私有属性和隐藏属性时。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;mykey&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// value</span>

<span class="token keyword">const</span> key2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;mykey&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">===</span> key2<span class="token punctuation">)</span>  <span class="token comment">// false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>防止属性冲突</p><p>由于symbol值的唯一性，它们可以用于避免不同模块或库之间的属性冲突。不同的模块可以使用自己的symbol值作为属性键，而不会相互干扰。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// 模块1</span>
<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;mykey&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 模块2</span>
<span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">&#39;./module1.js&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// value</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>定义类的私有成员</p><p>symbol值可以用于模拟类的私有成员，因为无法从外部访问使用symbol值作为属性键的属性。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">const</span> _privateMember <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;privateMember&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">[</span>_privateMember<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;private value&#39;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getPrivateMember</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>_privateMember<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">getPrivateMember</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// private value</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>_privateMember<span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment">// undefined</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,7),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","symbol.html.vue"]]);export{r as default};
