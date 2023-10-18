import{_ as e,o as d,c as a,a as n}from"./app-b5630a42.js";const i="/yjj-blog/assets/var-8d1d97d6.png",c={},s=n(`<h1 id="var、let、const的区别" tabindex="-1"><a class="header-anchor" href="#var、let、const的区别" aria-hidden="true">#</a> var、let、const的区别</h1><p>👩🏻‍💻十三月   🕰️ 2022-08-02</p><h3 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> var</h3><p><code>var</code>关键字用来声明变量，用<code>var</code>声明的变量既是全局变量，也是顶层变量。</p><h3 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> let</h3><p><code>let</code>关键字用于声明一个块级作用域的局部变量。</p><h3 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h3><p><code>const</code>用来声明一个只读常量，一旦声明，就不允许修改。</p><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3><h4 id="_1-变量提升" tabindex="-1"><a class="header-anchor" href="#_1-变量提升" aria-hidden="true">#</a> 1.变量提升</h4><p><code>var</code>声明的变量存在变量提升，既变量可以在声明之前调用，值为<code>undefined</code>。 <code>let</code>和<code>const</code>不存在变量提升，既他们所声明的变量一定要在声明后使用，否则会报错。</p><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>// var
console.log(a)  // undefined
var a = 1

// let
console.log(b) // ReferenceError: b is not defined
let b = 2

// const 
console.log(c) // ReferenceError: c is not defined
const c = 3 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-暂时性死区" tabindex="-1"><a class="header-anchor" href="#_2-暂时性死区" aria-hidden="true">#</a> 2.暂时性死区</h4><p><code>var</code>不存在暂时性死区 <code>let</code>和<code>const</code>存在暂时性死区，只有等到声明变量的那一行执行，才可以获取和使用该变量</p><h4 id="_3-块级作用域" tabindex="-1"><a class="header-anchor" href="#_3-块级作用域" aria-hidden="true">#</a> 3.块级作用域</h4><p><code>var</code>不存在块级作用域 <code>let</code>和<code>const</code>存在块级作用域</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = 1
let b = 2
const c = 9
{
  var a = 3
  let b = 4
  const c = 5
  console.log(b) // 4
  console.log(c) // 5
}
console.log(a)  // 3
console.log(b)  // 2
console.log(c)  // 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-重复声明" tabindex="-1"><a class="header-anchor" href="#_4-重复声明" aria-hidden="true">#</a> 4.重复声明</h4><p><code>var</code>允许重复声明 <code>let</code>和<code>const</code>在同一作用域内不允许重复声明</p><h4 id="_5-修改声明的变量" tabindex="-1"><a class="header-anchor" href="#_5-修改声明的变量" aria-hidden="true">#</a> 5.修改声明的变量</h4><p><code>var</code>和<code>let</code>允许修改声明的变量 <code>const</code>声明一个只读的常量。一旦声明，就不允许修改。</p><p>注意：<code>const</code>声明的对象是可以修改属性的。因为对象存储在内存空间的是一个指针地址。 为了避免对象被修改，可以使用<code>object.freeze()</code>将对象冻结。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>在使用时，能用<code>const</code>就尽量用<code>const</code>，其他情况大多数使用<code>let</code>，尽量避免<code>var</code></p><h3 id="底层原理" tabindex="-1"><a class="header-anchor" href="#底层原理" aria-hidden="true">#</a> 底层原理</h3><p>在底层实现上，<code>let</code>和<code>const</code>的工作方式是通过<code>JavaScript</code>引擎来实现的。 在<code>JavaScript</code>引擎中，每一个变量都会被封装在一个称为“变量对象”的容器中，这个对象包含了所有当前上下文中定义的变量和函数。变量对象类似于一个键值对的容器，其中键是变量名，值是变量的值。 在<code>JavaScript</code>引擎中，使用<code>let</code>和<code>const</code>定义变量，实际上是将该变量定义在一个块级作用域中，而块级作用域是由编译器在编译阶段中实现的。</p><p><img src="`+i+`" alt="具体过程"></p><h3 id="开发的坑点" tabindex="-1"><a class="header-anchor" href="#开发的坑点" aria-hidden="true">#</a> 开发的坑点</h3><ul><li>作用域</li></ul><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>// 使用var
for (var i = 0; i &lt; 5; i++) {
    setTimeout(function() {
        console.log(i); // 5,5,5,5,5  
    }, 1000);
}

// 使用let
for (let i = 0; i &lt; 5; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2, 3, 4
    }, 1000);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),r=[s];function o(l,t){return d(),a("div",null,r)}const h=e(c,[["render",o],["__file","var.html.vue"]]);export{h as default};
