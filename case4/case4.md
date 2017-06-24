# Case4：让网站与你交互 —— 学习JavaScript

## 简介

> 迄今为止，使用HTML+CSS构建出的页面始终缺乏“交互性”，为了能够实现网页和你之间的互动，浏览器引入了用于操作html内容的脚本语言——JavaScript（JS），时至今日，JS在web开发界已经发展成为最火最热的语言，因此你一定不可错过它

## 目标

* 了解什么是脚本语言，以及脚本语言和静态编译语言（如C++）的区别
* 了解JavaScript并尝试使用它
* 了解HTML的DOM模型
* 了解事件和回调函数

## 任务

* 使用JavaScript构建具有交互功能的网页

## 预期时间

* 1-2天

****

## 有关JS

JS是当今最为火爆的WEB开发语言了，在正式开始讲解知识之前我们来扯一点题外话

#### 为什么要学习JavaScript

* HTML定义了网页的内容，CSS描述了网页的布局和样式，JS则定义了网页的行为，因此为了构建完整的网页应用，JS是必不可少的。

* JS是目前浏览器上唯一通用的可操作的HTML的语言，换句话说你除了JS没有第二个选择。

* 毫不夸张的说，JavaScript是构建当今web世界的支柱语言，学习JS你可以构建任何类别的应用：网页，APP，服务端统统可以用一个语言搞定。

#### 但是...

* JS不是一门严谨的语言，有着很多致命的设计缺陷，尽管现在已经得到了一定的改进
* JS虽然用途十分广泛，但在除了前端以外的地方略显吃力
* JS的语法不严谨在提升了它的灵活性的同时也使得极易写出规范性差，不可控的代码，因此虽然上手简单，但是想要写出高质量的JS代码并不是一件容易的事情

#### 本节课如何讲解JS

这节课里我们不会针对JS做过多深入的讲解，主要目的集中在：

* 了解脚本语言的特性
* 使用JS构建具有交互性的网页

如果你想深入学习JS和前端，在后期应用篇（前端）中将会详细介绍相关的内容，本节课程的末尾处也会给出一些比较新的JS教程（千万不要学习老版本的JS）供你自学。

## 了解JavaScript和脚本语言

我们假定学习本课的同学都有一定的编程基础，想必绝大多数人接触的都是像C，C++以及Java这一类比较传统的静态编译语言。JS则是90年代开始流行的几大脚本语言之一，由于脚本语言和编译语言存在较大的差别，所以下面的JS基础教学中将会同时展开说明一下脚本语言和编译语言的差别

### 运行JS

JS是运行在浏览器上的语言（尽管现在它已经可以运行在其他环境中了），因此你需要在浏览器里才能运行JS代码，我们可以通过html文件引入JS，主要有以下两种方式：

#### 1.在html中使用`<script>`标签

`<script>`标签可以插在`<head>`或者`<body>`标签中，内部的内容就是js代码。

实例

```
<!DOCTYPE html>
<html>
<body>
<h1>我的 Web 页面</h1>
<p id="demo">一个段落</p>
<button type="button" onclick="myFunction()">尝试一下</button>
<script>
function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
}
</script>
</body>
</html>
```

#### 2.外链引入
跟`.css`文件一样，js也可以通过外部来引入，方式是使用`<script>`标签的`src`属性来引入外部的js文件

实例

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JS Demo</title>
    <script src="./4-1.js"></script>
    <!--使用外链引入js-->
</head>
<body>
    <button id="b1" onclick="alertB1()">Click Me</button>
</body>
</html>
```
对于较大的项目一般推荐使用引入外链的方式

### 预备：了解JS输出内容的方式

一个程序要和你交互，至少应该能够输出内容（比如C++里的`cout`），为了能够顺利进行下面的教学和演示，你至少要先学会让JS输出内容给你...

JS基于浏览器运行，因此主要借助浏览器来进行输出

有两个调试阶段最常用的输出方式

#### alert()函数

调用alert()函数将会弹出一个窗口并将传入的参数打印出来。

实例（写在body中并打开页面试试！）

```
<script>
	alert("Hey You!!");
</script>
```

alert()可以打印绝大多数的数据类型,包括数组和对象在内

#### console.log()函数

这个函数会把接受的变量以及详细的类型打印到浏览器的控制台中（回顾第一讲的浏览器开发者工具，选择它的CONSOLE选项卡就能看到控制台），此外，控制台中也会输出一些有关的辅助信息（比如警告，错误等）。

实例（同样写在body中）

```
<script>
        var obj = {
            name: "mark",
            sex: "male",
            love: "ann"
        };
        console.log(obj);
</script>
```

打开页面后查看控制台，就可以看到结果了

![](http://of1deuret.bkt.clouddn.com/17-6-24/36671001.jpg)

### 变量的定义与数据类型

脚本语言中的变量有以下几个特点：

* 没有类型（int,string,char...），任何一个变量都可以储存任何类型的数据
* 无需提前声明就可以直接使用

#### 语法示范：

* 声明变量使用var关键字，可以储存任意类型的数据

```
var myInt = 123; // 整数
var myDecimal = 12.1; // 浮点数
var myStirng = "Hello JS"; // 字符串
var myArray = [1,"hello",12.3,{name:"leaf"}]; // 数组（可以存放任意类型，任意数量的值）
var myObject = {name:"mahon",sex:"female",age:"18"} // 对象,就是键值对
var myFunction = function(){ return "this is a funciton" } // 函数也可以是变量，是不是很神奇
```

* 变量可以随意转换类型，也可以不用声明就直接用

```
var myVar = 123;
myVar = "Hello Var"; // 自由转换类型

myAnotherVar = 1; // 不用var声明直接也可以使用变量，不过不推荐
```

* [进一步学习JavaScript变量](http://www.runoob.com/js/js-variables.html)

你应该特别留意数组和对象两种类型，它们的作用方式和静态语言存在很大的不同，下面给出较为详细的教程：

* [进一步学习JavaScript数组](http://www.runoob.com/js/js-obj-array.html)
* [进一步学习JavaScript对象](http://www.runoob.com/js/js-obj-intro.html)

注*：暂时（在本节课中），你不必太深入的了解这些数据类型

### 流程控制

流程控制无非是老生常谈的**选择**，**顺序**和**循环**，这一块JS的语法基本和C/C++一致，因此不过多赘述，点击下面的链接查看详细内容：

* [学习条件语句](http://www.runoob.com/js/js-if-else.html)
* [学习for循环](http://www.runoob.com/js/js-loop-for.html)
* [学习while循环](http://www.runoob.com/js/js-loop-while.html)

### 函数

函数将在JS中被重新定义。JS是一门函数式编程的语言，这意味着函数是“第一等公民”。

最大的特征有以下几点：

* 函数可以当做变量
* 函数可以当做另一个函数的参数或者返回值

（暂时只列出这么多，后面会有专门的章节来讲解函数式编程）

#### 基本定义

js中的函数一定要用function关键字声明，另外由于变量没有类型，所以函数也不用指定参数的类型和返回值的类型，一个典型的函数大概长下面这样：

```
funciton 函数名(参数1，参数2...) {
	函数代码
	return 返回值
}
```

函数可以没有名称，这样的函数被称为`匿名函数`,它可以保存到变量

#### 用变量储存函数

演示一个用变量调用匿名函数的例子

```

var addMe = function(var1,var2){
	return var1+var2;
};

var a = 1,b = 2;

console.log(addMe(a,b)); //利用变量来调用,输出为3

```

#### 将函数当做值来传递

最常用的情景是把函数当做参数来传递，这样做可以极大的扩充函数的功能，可以参考下面这个实例

```
// 定义两个匿名函数

    var sayHello = function(name) {
        console.log("hello, "+name);
    };

    var sayHi = function(name) {
        console.log("hi, "+name)
    };

    var arr = ['mark','ann','ouxu','molybdenum','ruby'];

    // 一个用于对arr数组进行操作的函数,第一个参数是要操作的数组，第二个参数是需要对数组中的元素所应用的函数

    function operateArr(paramArr,func) {
        for (var i=0;i<5;i++) {
            func(arr[i]);
        }
    }
    
    // 传入不同的函数来执行

    operateArr(arr,sayHello);

    operateArr(arr,sayHi);
```

执行的结果如下：

![](http://of1deuret.bkt.clouddn.com/17-6-24/79106477.jpg)

我们把sayHi和sayHello两个函数称为回调函数，这个概念十分有用，我们下面要讲的事件机制中大量应用了回调函数（不过看上去没有这么复杂）

有关函数的作用域，以及函数式编程的问题会在后面的篇幅中进一步讲解，现在你需要了解的是函数在js中拥有非常高的地位，后面要讲到的有关实现交互的内容基本都是靠各种各样的函数来实现的。

总之，先把函数当成你编写js代码的最小结构块吧！

### 代码的执行

脚本语言和编译语言不同，不需要编译成可执行的二进制文件之后运行，它是**解释运行**的。

实际上它工作的原理是由JS执行器读取JS文件后，一行一行代码的读取并执行，不会产生任何中间文件，程序运行的过程，就是由执行器读取代码文件的过程，脱离了执行器（也叫解释器或者代码引擎）代码就和纯文本没有任何区别了。

一个典型的情况是，即便你的脚本中存在错误，只要执行的过程中没有执行到错误所在的地方，它都还能正常运行。

## 使用JS来和用户交互

### DOM节点

JS是通过HTML的DOM模型来控制HTML内容的，首先我们来了解一下什么是DOM。

DOM是Document Object Model的缩写，也就是文档对象模型。HTML的DOM就是整个页面元素的逻辑结构，包含了元素和元素之间的层级关系，你可以简单把它理解成一颗元素树，就像下面这样：

![](http://of1deuret.bkt.clouddn.com/17-6-24/73624840.jpg)

所有的HTML都可以整理成这样的一棵DOM节点树。JS可以对DOM节点进行各种操作：查找，获取，修改属性，内容，响应事件....

在JS中我们通常使用`document`对象来获取整个页面的DOM

### JS获取页面元素的手段

下面介绍的函数都是`document`对象提供的方法，你可以像`document.getElementById("main")`这样使用。

HTML的内容参考上一节的基础HTML（3-1.html）

#### 根据id查找（最有用）

还记得我们上节课中讲到的元素的id属性吗，它是一个元素的唯一标识符，用它来获取元素再合适不过了。

使用`getElementById()`方法。

你可以使用一个变量来保存查找到的DOM节点对象：

```
var x = document.getElementById("card1");
// 获取id为card1的dom元素
```

#### 根据类名(class)来查找

使用`getElementsByClassName()`方法，请注意方法名中Element为复数形式，这是因为同一class可能有多个元素，这时候此方法返回的是该class所有的元素的**集合**

一个简单的使用示范：请注意如果你是在body中书写js代码，一定要把这段代码放在你能获取的DOM节点后面，否则由于页面的解析是从上到下的，在你执行代码时将无法得到想要的DOM节点。

```
<body>
    
    <div class="card" id="card1">
        <p>this is card 1</p>
    </div>
    <div class="card" id="card2">
        <p>this is card 2</p>
    </div>

    <script>
       
        var cards = document.getElementsByClassName('card');

        var cardCount = cards.length; // 获取card类有多少个元素

        for (var i=0;i<cardCount;i++) {
            console.log(cards[i]); // 使用索引就可以取出每一个元素的对象了
        }
    </script>

</body>
```

#### 根据标签名来查找

使用`getElementsByTagName()`方法，该方法返回的同样是集合，由于同名标签在整个页面中非常多，所以这个方法经常用于嵌套取出某个DOM节点内的指定标签

查看下面的示范并注意理解嵌套式的查找：

```
var x=document.getElementById("card1"); // x是card1
var y=x.getElementsByTagName("p"); // y是card1里的p标签
```

* [一些教程和示范](http://www.runoob.com/js/js-htmldom.html)

### 操作DOM

当你获取了DOM节点之后，就可以对它做很多事情：读取、操作DOM的属性、内容和样式...

下面会演示一些十分常用的DOM操作

#### 改变HTML内容

你可以使用`document.write()`直接在`script`标签，也就是代码执行的位置直接写入内容：

```
<body>
    <div>
        <script>
            document.write("<p>这是一段由JavaScript创建的文字</p>");
        </script>
    </div>
</body>
```

更为常见的做法是，通过上面所述的方法获取DOM节点后，使用`innerHTML`属性来访问和修改对应节点的内容

```
<body>
    <h1 id="header">这是老标题内容...</h1>
    <script>
        var header =document.getElementById("header");
        header.innerHTML = "这是新标题内容..."; // 修改h1标签里的文字
    </script>
</body>
```

#### 改变元素的样式

可以使用DOM对象的style属性来访问和修改对应元素的样式，你可以发现js中DOM对象的属性和对应html的元素的属性存在着对应的关系

```
<body>
    <p id="para1" style="color:red">其实我是蓝色文字</p>
    <p id="para2" style="font-size:2px">我的字很大</p>
    <script>
        document.getElementById("para1").style.color = 'blue';
        document.getElementById("para2").style.fontSize = '30px';
    </script>
</body>
```

### 事件和回调函数

现在我们已经可以通过JS控制HTML的各种内容了，但是整个页面仍然缺乏**交互性**：所有的脚本都是预先写好，在网页打开时就自动调用了的，有没有办法让用户在浏览网页的时候主动**触发**脚本并执行呢？

这时候我们需要引入事件编程的概念，事件就是在操作页面过程可能发生的诸多动作，比如：点击一个按钮，拖动一个元素，将光标移动到某个元素上...你可以把这些事件理解成开关或者触发器，我们一般会**绑定**函数到某个事件上，当事件被触发的时候，该函数就会被自动调用，我们也把这种函数成为事件的**回调函数**。

来看一个经典的例子：通过点击一个按钮来弹出一个警告框

```
<body>
    <script>
        function alertSth(){
            alert("你点我干啥");
        } // 定义回调函数
    </script>
    <button onclick="alertSth()">点我试试</button>
    <!--通过onclick属性把alertSth()函数绑定到该按钮的点击事件上-->
</body>
```

HTML中存在非常多的事件，不同类别的元素拥有的事件也不尽相同，限于篇幅这里就不一一展开了，点击下面的链接深入了解一下事件机制吧

* [学习DOM事件](http://www.runoob.com/js/js-htmldom-events.html)

有了事件的存在，结合之前JS操作DOM节点的强大功能，我们就拥有了构建高可交互性网页的基石了。

## 小结

JavaScript是一门神奇的脚本语言，它十分简单易学，也十分好玩（在不深入了解的前提下），目前IT界正在不断的修改和完善JavaScript语言，并尝试统一它的标准。

决定学习JS的同学们，至少应该学习`ES6`版本的新JS，下面给出两个大牛写的JS教程：

* [廖雪峰JS全栈教程](http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/)

* [阮一峰JS标准参考教程](http://javascript.ruanyifeng.com/)

JS由于起初设计的不严谨，导致了一些非常迷乱的现象（最著名的是那张JS的真值表），你学习的过程中也可能会多多少少遇到一些坑，记得编写js代码时保持态度的严谨，可以尽可能的避免一些错误的产生。

本节课是前端认知篇的最后一篇，HTML+CSS+JS三者的组合已经足够你构建任意类型的网页页面，下一课中我们将会对这几节课做一个整理总结，并给出一个挑战实例供你练习。

