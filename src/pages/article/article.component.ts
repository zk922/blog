import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public article: string = null;
  constructor() {
  }
  ngOnInit() {
    this.article = '<h1 class="abc">Dart记录</h1>\n' +
      '<p>记录的部分dart中的重要概念。这篇文章是与js，ts对比着总结的，如果是类似的特性可能就忽略不记了。</p>\n' +
      '<h2>一、基本特性</h2>\n' +
      '<ol>\n' +
      '<li>所有可以赋值给变量的，都是对象Object。所有对象都是一个类的实例。</li>\n' +
      '<li>Dart是强类型，但是类型声明是可选的。因为可以推断类型。</li>\n' +
      '<li>Dart支持顶层函数（main()），同时也支持静态方法和实例方法函数。也支持层叠嵌套函数。（这点需要与js加以区分。dart入口需要main函数）</li>\n' +
      '<li>Dart没有public，protected，private这些关键字。如果一个标识名以&quot;_&quot;开头，那么这个值就是库里面私有的。</li>\n' +
      '<li>其他语句，表达式之类的概念与js比较相同。</li>\n' +
      '</ol>\n' +
      '<p>首先，最主要的，对于动态语言，比如js/ts，开发者来说，首先在学dart时候，要忽略js中隐式类型转换那一套。比如，不同类型比较时的隐式转换，js中的真类型和假类型之类的概念。</p>\n' +
      '<h2>二、变量声明</h2>\n' +
      '<h3>2.1类型声明</h3>\n' +
      '<p>Dart中未初始化的值默认为null。null也是Object。</p>\n' +
      '<p>Dart 可以使用var声明变量。声明后的变量会被限定成初始化时候的类型。这个地方有个类型推断的</p>\n' +
      '<p>如果想要声明的变量是动态类型，可以使用关键字dynamic或者Object类型。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-keyword">dynamic</span> name = <span class="hljs-string">\'Bob\'</span>;\n' +
      '<span class="hljs-built_in">Object</span> name = <span class="hljs-string">\'Lucy\'</span>;\n' +
      '\n' +
      '</code></pre>\n' +
      '<h3>2.2常量声明</h3>\n' +
      '<p>对于常量，使用final或者const声明。\n' +
      '当两个关键字都作用在变量上时候，区别不大。但是，const还可以作用在字面量值上。如果两个const 字面量值一样，那么这两个值就相等。可以理解为c中的引用。</p>\n' +
      '<pre class="hljs"><code>  <span class="hljs-keyword">var</span> a = <span class="hljs-keyword">const</span> [<span class="hljs-number">123</span>];\n' +
      '  <span class="hljs-keyword">var</span> b = <span class="hljs-keyword">const</span> [<span class="hljs-number">123</span>];\n' +
      '  <span class="hljs-keyword">var</span> c = [<span class="hljs-number">123</span>];\n' +
      '  <span class="hljs-built_in">print</span>(a == b); <span class="hljs-comment">//true</span>\n' +
      '  <span class="hljs-built_in">print</span>(a == c); <span class="hljs-comment">//false</span>\n' +
      '</code></pre>\n' +
      '<h3>2.3内置类型</h3>\n' +
      '<p>内置类型包括numbers，strings，booleans，lists，maps，runes，symbols。这些内置类型都可以使用字面量方式声明。</p>\n' +
      '<p>numbers包含int和double类型。</p>\n' +
      '<p>lists与js中的Array类似。</p>\n' +
      '<p>maps即为名值对结构。名值均可为任意对象。取值只需要使用[]语法即可。这里和js不同了，js中的[]语法中可以传入变量，但是变量值只能为字符串。因为js中的普通对象和ES6的Map是不同的类型，这点需要注意。</p>\n' +
      '<p>string类型可以支持多种拼接写法，直接连续写字符串就可拼接，+也是可用的。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-built_in">String</span> str1 = <span class="hljs-string">\'first\'</span>\n' +
      '              <span class="hljs-string">\'second\'</span>;\n' +
      '\n' +
      '<span class="hljs-built_in">String</span> str2 = <span class="hljs-string">\'first\'</span> + \n' +
      '              <span class="hljs-string">\'second\'</span>;\n' +
      '</code></pre>\n' +
      '<p>string类型可以支持多种换行写法。使用3个单引号或者双引号包裹多行字符即可。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-built_in">String</span> str1 = <span class="hljs-string">\'\'\'first\n' +
      '              second\'\'\'</span>;\n' +
      '              \n' +
      '\n' +
      '<span class="hljs-built_in">String</span> str2 = <span class="hljs-string">"""first\n' +
      '              second"""</span>;\n' +
      '</code></pre>\n' +
      '<p>纯文本内容，忽略转义符号可以加r前缀。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-keyword">var</span> s = <span class="hljs-string">r\'In a raw string, not even \\n gets special treatment.\'</span>;\n' +
      '</code></pre>\n' +
      '<p>同样，Dart支持模板字符串。</p>\n' +
      '<p>Dart中的文本是一个utf-16字串。Runes是可以用来处理32bit编码的字串的。</p>\n' +
      '<pre class="hljs"><code>main() {\n' +
      '  <span class="hljs-keyword">var</span> clapping = <span class="hljs-string">\'\u{1f44f}\'</span>;\n' +
      '  <span class="hljs-built_in">print</span>(clapping);\n' +
      '  <span class="hljs-built_in">print</span>(clapping.codeUnits);\n' +
      '  <span class="hljs-built_in">print</span>(clapping.runes.toList());\n' +
      '\n' +
      '  Runes input = <span class="hljs-keyword">new</span> Runes(\n' +
      '      <span class="hljs-string">\'\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}\'</span>);\n' +
      '  <span class="hljs-built_in">print</span>(<span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>.fromCharCodes(input));\n' +
      '}\n' +
      '</code></pre>\n' +
      '<p>symbols是特殊的标识符类型。</p>\n' +
      '<h2>三、Functions</h2>\n' +
      '<p>函数声明和java类似。但是，Dart支持可选的返回值和变量的类型声明。Dart声明函数也不需要function关键字，也支持匿名函数。</p>\n' +
      '<p>支持箭头函数写法。</p>\n' +
      '<p>再者就是，类型指定与ts不同，ts中类型指定是<code>variable: type</code>；Dart是<code>type variable</code>。</p>\n' +
      '<p>Dart函数中参数声明和调用支持两种方式：named方式与positional方式。</p>\n' +
      '<h3>3.1基于name的声明与调用方式</h3>\n' +
      '<ol>\n' +
      '<li>使用{}声明参数。调用时候，也需要传入名:值的方式传参。</li>\n' +
      '<li>必选参数使用meta包中的required装饰器提供静态验证。</li>\n' +
      '</ol>\n' +
      '<p>这样的好处就是参数非常多的复杂方法，传参会很容易，flutter中很多函数就是这种声明方式。</p>\n' +
      '<pre class="hljs"><code>  <span class="hljs-built_in">bool</span> equal({<span class="hljs-built_in">num</span> a, <span class="hljs-meta">@required</span> <span class="hljs-built_in">num</span> b}) =&gt; a == b;\n' +
      '\n' +
      '  equal(a:<span class="hljs-number">1</span>, b:<span class="hljs-number">2</span>);\n' +
      '</code></pre>\n' +
      '<h3>3.2基于position的声明与调用方式</h3>\n' +
      '<p>基于位置的声明与调用与js类似了。可选参数也是放在后面。区别就是，可选参数使用[]包裹。</p>\n' +
      '<pre class="hljs"><code>  <span class="hljs-built_in">bool</span> equal(<span class="hljs-built_in">num</span> a, <span class="hljs-built_in">num</span> b, [<span class="hljs-built_in">num</span> c]) =&gt; a == b;\n' +
      '  \n' +
      '  equal(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);\n' +
      '</code></pre>\n' +
      '<h3>3.3默认值</h3>\n' +
      '<p>默认值使用=指定即可。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-keyword">void</span> enableFlags({<span class="hljs-built_in">bool</span> bold = <span class="hljs-keyword">false</span>, <span class="hljs-built_in">bool</span> hidden = <span class="hljs-keyword">false</span>}) {...}\n' +
      '</code></pre>\n' +
      '<h3>3.4其他特性</h3>\n' +
      '<p>Dart支持闭包。与js一样。</p>\n' +
      '<h2>四、操作符</h2>\n' +
      '<p>基本操作符种类与js类似。Dart中比较特殊的有<code>as</code>,<code>is</code>，<code>is!</code>，<code>..</code>，<code>?.</code>，<code>??</code>。</p>\n' +
      '<p>as类型断言，但是只有在实际运行时候才会检测是否会出错。</p>\n' +
      '<p>is，is!操作符用来判断类型。</p>\n' +
      '<p>?.是是在取值时候，防止左值是null而出错。ts中有同样操作符。</p>\n' +
      '<p>??条件操作符如果第一个不为null返回第一个值，如果为null，返回第二个值。与js中的||表现类似，但其实完全不同。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-built_in">print</span>(<span class="hljs-keyword">null</span> ?? <span class="hljs-number">1</span>); <span class="hljs-comment">//1</span>\n' +
      '<span class="hljs-built_in">print</span>(<span class="hljs-number">0</span> ?? <span class="hljs-number">1</span>); <span class="hljs-comment">//0</span>\n' +
      '<span class="hljs-built_in">print</span>(<span class="hljs-keyword">false</span> ?? <span class="hljs-number">1</span>); <span class="hljs-comment">//false</span>\n' +
      '</code></pre>\n' +
      '<p><strong>要注意！！要注意！！</strong>\n' +
      'dart中没有0被当作&quot;假值&quot;这一说。??这一操作符也不是区别true/false，而是是不是null。</p>\n' +
      '<p>..操作符可以在后续操作后忽略返回值，而继续返回该对象，从而实现链式写法。省去声明中间变量的过程。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-built_in">querySelector</span>(<span class="hljs-string">\'#confirm\'</span>) <span class="hljs-comment">// Get an object.</span>\n' +
      '  ..text = <span class="hljs-string">\'Confirm\'</span> <span class="hljs-comment">// Use its members.</span>\n' +
      '  ..classes.add(<span class="hljs-string">\'important\'</span>)\n' +
      '  ..onClick.listen((e) =&gt; <span class="hljs-built_in">window</span>.alert(<span class="hljs-string">\'Confirmed!\'</span>));\n' +
      '</code></pre>\n' +
      '<p>上面写法就与下面等效</p>\n' +
      '<pre class="hljs"><code><span class="hljs-keyword">var</span> button = <span class="hljs-built_in">querySelector</span>(<span class="hljs-string">\'#confirm\'</span>);\n' +
      'button.text = <span class="hljs-string">\'Confirm\'</span>;\n' +
      'button.classes.add(<span class="hljs-string">\'important\'</span>);\n' +
      'button.onClick.listen((e) =&gt; <span class="hljs-built_in">window</span>.alert(<span class="hljs-string">\'Confirmed!\'</span>));\n' +
      '</code></pre>\n' +
      '<h2>五、流程控制控制</h2>\n' +
      '<p><code>if...else if...else</code>, <code>for</code>, <code>while</code>, <code>do...while</code>, <code>break</code>, <code>continue</code>, <code>switch...case</code>这些在dart中都是支持的。</p>\n' +
      '<p>同时，开发过程中可以使用<code>assert</code>进行开发调试。</p>\n' +
      '<p>需要注意的是，dart中的for循环中的var，与js中的let类似，但是与js的var不同。因为dart没有变量提升，所以，for循环中的每一次循环，都是一个单独的局部变量。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-keyword">var</span> callbacks = [];\n' +
      '<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">2</span>; i++) {\n' +
      '  callbacks.add(() =&gt; <span class="hljs-built_in">print</span>(i));\n' +
      '}\n' +
      'callbacks.forEach((c) =&gt; c());  <span class="hljs-comment">//0,1</span>\n' +
      '</code></pre>\n' +
      '<p>对于List，Set这类可遍历对象，可以使用for...in循环遍历。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-keyword">var</span> collection = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>];\n' +
      '<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> x <span class="hljs-keyword">in</span> collection) {\n' +
      '  <span class="hljs-built_in">print</span>(x); <span class="hljs-comment">// 0 1 2</span>\n' +
      '}\n' +
      '</code></pre>\n' +
      '<h2>六、Exceptions错误处理</h2>\n' +
      '<p>dart中try..catch..finally可以根据错误的类型进行分类处理,在catch前使用on指明错误类型。</p>\n' +
      '<p>同时，catch也支持传入两个参数。第一个参数是错误本身，第二个参数为stack trace。</p>\n' +
      '<pre class="hljs"><code><span class="hljs-keyword">try</span> {\n' +
      '  breedMoreLlamas();\n' +
      '} on OutOfLlamasException {\n' +
      '  <span class="hljs-comment">// A specific exception</span>\n' +
      '  buyMoreLlamas();\n' +
      '} on Exception <span class="hljs-keyword">catch</span> (e) {\n' +
      '  <span class="hljs-comment">// Anything else that is an exception</span>\n' +
      '  <span class="hljs-built_in">print</span>(<span class="hljs-string">\'Unknown exception: <span class="hljs-subst">$e</span>\'</span>);\n' +
      '} <span class="hljs-keyword">catch</span> (e, s) {\n' +
      '  <span class="hljs-comment">// No specified type, handles all</span>\n' +
      '  <span class="hljs-built_in">print</span>(<span class="hljs-string">\'Something really unknown: <span class="hljs-subst">$e</span>\'</span>);\n' +
      '  <span class="hljs-built_in">print</span>(<span class="hljs-string">\'Stack trace is <span class="hljs-subst">$s</span>\'</span>);\n' +
      '} <span class="hljs-keyword">finally</span>{\n' +
      '  doSomething();\n' +
      '}\n' +
      '</code></pre>\n' +
      '<h2>七、类Classes</h2>\n' +
      '<p>dart是一门面向对象的语言。所有的对象都是一个类的实例，并且所有的类都是继承自Object类。</p>\n' +
      '<p>同时也是一门基于混合式继承（Mixin-based inheritance）的语言。这意味着，尽管所有类都有共同的父级，父级的类体是可以在多个子类中复用的。</p>\n' +
      '<h3>7.1 访问类成员</h3>\n' +
      '<p>这点与其他语言一样，使用.操作符访问实例的属性和方法。同时，也可以使用?.操作符避免实例为null的问题。</p>\n' +
      '<h3>7.2 构造函数</h3>\n' +
      '<p>dart的类构造函数与es6，ts中不同，不是一个普通函数，也不是es6中类体的constructor关键字函数。而是与类名同名的函数。</p>\n' +
      '<p>同时，dart支持多构造函数。（当然，这个特性在js，ts中也是可以有办法实现的，只是没有提高到语言层面）</p>\n' +
      '<p>dart中的类是不继承父类的构造函数的。</p>\n' +
      '<p>dart中成员的final属性，是必须在Initializer list中初始化的。</p>\n' +
      '<p>创建类时候的调用顺序：Initializer list =&gt; superclass’s no-arg constructor =&gt; main class’s no-arg constructor。</p>\n' +
      '<p>如果父类没有无参数且非匿名的构造函数，那么必须在子类中手动调用父级的构造函数，然后再在当前类构造函数体内写逻辑。</p>\n' +
      '<p>构造函数可以只是用来重定向到当前类的另一个构造函数。这样的重定向构造函数是没有函数体的。</p>\n' +
      '<p>const constructor用来创建常量实例。创建实例时需使用const修饰。类中的实例属性都必须是final。必须初始化所有实例属性。const constructor不能有函数体。const constructor也可以用来创建普通实例。</p>\n' +
      '<p>factory constructor可以有返回值（其他的constructor都不能有返回值），可以指定调用构造函数时候返回的具体对象。</p>\n' +
      '<h3>7.3 方法</h3>\n' +
      '<p>实例的方法类似js，区别就是，dart中只有在实例方法中才能访问this，而且this可以不显示指明，也不可改变指向。</p>\n' +
      '<p>同时类也支持getter和setter。</p>\n' +
      '<h3>7.4 抽象类</h3>\n' +
      '<p>abstract class是用来声明接口，让其他类来implements的。抽象类一般不能实例化。除非，在类上实现一个factory constructor。</p>\n' +
      '<h3>7.5</h3>\n';
  }

}
