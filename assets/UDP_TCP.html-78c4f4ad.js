import{_ as t,o as e,c as l,a as i}from"./app-b5630a42.js";const a="/yjj-blog/assets/udp-62119231.png",r="/yjj-blog/assets/tcp-2408a109.png",d="/yjj-blog/assets/tcp3-1b42b935.png",n="/yjj-blog/assets/tcp4-6937a562.png",s={},c=i('<h1 id="udp和tcp的区别" tabindex="-1"><a class="header-anchor" href="#udp和tcp的区别" aria-hidden="true">#</a> UDP和TCP的区别</h1><p>👩🏻‍💻十三月   🕰️ 2023-09-04</p><h2 id="udp" tabindex="-1"><a class="header-anchor" href="#udp" aria-hidden="true">#</a> UDP</h2><p>UDP，用户数据包协议，是一个简单的面对数据报的通信协议，即对应用层交下来的报文，不合并，不拆分，只是在其上面加上首部后就交给了下面的网络层。</p><p>可以理解为，无论应用层交给UDP多长的报文，它统统发送，一次发送一个报文</p><p>而接收方，接到后直接去除首部，交给上面的应用层就完成任务</p><p>UDP报头包括4个字段，每个字段占用2个字节（即16个二进制位），标题短，开销小 <img src="'+a+'" alt="Alt text"></p><p>特点如下：</p><ul><li>UDP不提供复杂的控制机制，利用IP提供面向无连接的通信服务</li><li>传输途中出现丢包，UDP也不负责重发</li><li>当包的到达顺序出现乱序时，UDP没有纠正的功能</li><li>并且它是将应用程序发来的数据在收到的那一刻，立即按照原样发送到网络上的一种机制。即便出现网络拥堵的情况，UDP也无法进行流量控制等避免网络拥塞行为。</li></ul><h2 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h2><p>TCP，传输控制协议，是一种可靠的，面向字节流的通信协议，把上面应用层交下来的数据看成无结构的字节流来发送。</p><p>可以想想为流水形式，发送方TCP会将数据放入蓄水池（缓存区），等到可以发送的时候就发送，不能发送就等着，TCP会根据当前网络的拥塞状态来确定每个报文段的大小。</p><p>TCP报文首部有20个字节，额外开销大。 <img src="'+r+'" alt="Alt text"></p><p>特点如下：</p><ul><li>TCP充分是下了数据传输时的各种控制功能，可以进行丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制。</li><li>此外，TCP作为一种面向有连接的协议，只有在确认通信对端㛮时才会发送数据，从而可以控制通信流量的浪费。</li><li>根据TCP的这些机制，在IP这种无连接的网络上也能够实现高可靠性的通信</li></ul><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><p>UDP和TCP两者都位于传输层，两者的区别如下：</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">TCP</th><th style="text-align:center;">UDP</th></tr></thead><tbody><tr><td style="text-align:center;">可靠性</td><td style="text-align:center;">可靠</td><td style="text-align:center;">不可靠</td></tr><tr><td style="text-align:center;">连接性</td><td style="text-align:center;">面向连接</td><td style="text-align:center;">无连接</td></tr><tr><td style="text-align:center;">报文</td><td style="text-align:center;">面向字节流</td><td style="text-align:center;">面向报文</td></tr><tr><td style="text-align:center;">效率</td><td style="text-align:center;">传输效率低</td><td style="text-align:center;">传输效率高</td></tr><tr><td style="text-align:center;">双共性</td><td style="text-align:center;">全双工</td><td style="text-align:center;">一对一，一对多，多对一，多对多</td></tr><tr><td style="text-align:center;">流量控制</td><td style="text-align:center;">滑动窗口</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">拥塞控制</td><td style="text-align:center;">慢开始，拥塞避免，快重传，快恢复</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">传输效率</td><td style="text-align:center;">慢</td><td style="text-align:center;">快</td></tr></tbody></table><ul><li>TCP是面向连接的协议，建立链接三次握手，四次挥手。UDP是面向无连接，数据传输前后不链接，发送端只负责将数据发送到网络，接收端从消息队列读取。</li><li>TCP提供可靠的服务，传输过程采用流量控制，编号与确认，计时器等手机确保数据无差错，不丢失。UDP则尽可能传递数据，但不保证传递交付给对方</li><li>TCP面向字节流，将应用层报文看成一串无结构的字节流，分解为多个TCP报文段传输后，在目的站重新装配。UDP面向报文，不拆分应用层报文，只保留报文边界，一次发送一个报文，接收方去除报文首部后，原封不动将报文交给上层应用</li><li>TCP只能点对点双全工通信，UDP支持一对一，一对多，多对多，多对一的交互通信</li><li>TCP适用于对效率要求低，对准确性要求高或者要求有链接的场景；UDP适用于对效率要求高，对准确性要求低的场景</li></ul><h2 id="tcp-三次握手-四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手-四次挥手" aria-hidden="true">#</a> TCP 三次握手，四次挥手</h2><h3 id="三次握手" tabindex="-1"><a class="header-anchor" href="#三次握手" aria-hidden="true">#</a> 三次握手</h3><p>三次握手指的是建立一个TCP链接时，需要客户端和服务端总共发送三个包。</p><p>主要作用就是为了确认双方的接收能力和发送能力是否正常，指定自己的初始化序列号为后面的可靠性传送做准备。</p><p>过程如下：</p><ul><li>第一次握手：客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号 ISN(c)，此时客户端处于 SYN_SENT 状态</li><li>第二次握手：服务器收到客户端的 SYN 报文之后，会以自己的 SYN 报文作为应答，为了确认客户端的 SYN，将客户端的 ISN+1作为ACK的值，此时服务器处于 SYN_RCVD 的状态</li><li>第三次握手：客户端收到 SYN 报文之后，会发送一个 ACK 报文，值为服务器的ISN+1。此时客户端处于 ESTABLISHED 状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED 状态，此时，双方已建立起了连接</li></ul><p><img src="'+d+'" alt="Alt text"></p><h3 id="四次挥手" tabindex="-1"><a class="header-anchor" href="#四次挥手" aria-hidden="true">#</a> 四次挥手</h3><p>tcp终止一个连接，需要经过四次挥手</p><p>过程如下：</p><ul><li>第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于 FIN_WAIT1 状态，停止发送数据，等待服务端的确认</li><li>第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT状态</li><li>第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 LAST_ACK 的状态</li><li>第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态</li></ul><p><img src="'+n+'" alt="Alt text"></p><p>原因：</p><p>服务端在收到客户端断开连接Fin报文后，并不会立即关闭连接，而是先发送一个ACK包先告诉客户端收到关闭连接的请求，只有当服务器的所有报文发送完毕之后，才发送FIN报文断开连接，因此需要四次挥手</p>',33),p=[c];function h(x,P){return e(),l("div",null,p)}const o=t(s,[["render",h],["__file","UDP_TCP.html.vue"]]);export{o as default};
