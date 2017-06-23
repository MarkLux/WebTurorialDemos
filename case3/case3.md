# Case 3: 让网页好看又好用——使用CSS和JS

## 简介
> 一个优秀的网站必须拥有较高的颜值，同时也应该拥有和用户交互的能力。今天我们就来学习如何给网页增加样式和交互效果。

## 目标
* 学习使用style属性修改元素的显示效果
* 学习CSS语法
* 简单的了解JavaScript，尝试用它控制网页
* 学习事件和回调函数
* 了解前端的基本任务

## 任务

* 使用HTML+JS+CSS构建页面

## 示范代码

从本节课开始课程中的一些例子将会给出完整的示范代码，共享地址为我的github，同时每节课内容的.md文件也收录在内（这意味着你以后也可以用github来追本教程了！）。

请关注本教程对应的github仓库吧！(求follow求star)

* [仓库地址](https://github.com/MarkLux/WebTurorialDemos)

## 预期时间

* 1-2天

****

## 样式

迄今为止我们所教的内容只能让你写出黑白的文字和线条组成的页面，这实在是有悖正常人类的审美，为了能够使得网页拥有高可定制的效果，HTML引入了样式的概念。每个元素都拥有非常多可以自己定义的样式：字体，背景色，背景图片，边框...

目前有三种方式来使用自定义的网页样式

### 1.使用style属性（内联样式）

这个非常好理解，直接在想要修改的元素中添加style属性，然后添加对应的样式描述就可以了

一个非常简单的例子：让我们定制一个字体颜色为红色的段落：

```
<p style="color:red">这是一个红色的段落...</p>
```

把它放在html的body中，用浏览器访问，你就能看到效果。

### 2.使用`<style>`标签声明全局样式

你可以在`<head>`标签中增加一个`<style>`标签，在其中书写全局应用的样式，style标签中应用的就是**CSS语法**，我们将会在下面介绍CSS是什么以及CSS的语法。

刚才的例子可以写成

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>CSS示范</title>
    <style>
        p {
            color: red
        }
    </style>
</head>

<body>
    <p>这是一个红色的段落</p>
</body>

</html>
```

*注意作用域，这样的写法会使得整个网页中所有的p标签中的文字都变为红色

### 3.使用外链引入CSS

当页面的样式变得繁多时，在页面中写大量的CSS内容就显得不合适了，因此可以将他们单独写在一个`.css`文件中，再引入。

创建`demo.css`，内容如下：

```
p {
    color: red
}
```

在`demo.html`中的`<head>`标签中，添加下面的代码

```
<link rel="stylesheet" type="text/css" href="./demo.css">
```

注意href里的链接写法，参考第一节中提到的**相对路径**和**绝对路径**

效果同上

### 样式的继承和覆盖

我们来考虑这样一个问题，html中的元素是存在嵌套关系的，因此互相嵌套的元素之间的样式会发生互相影响。

如果一个元素本身没有对应的样式，那么它的样式就会**继承**它的父元素
如果一个元素和它的父元素都声明了同一种样式，那么它的样式就会**覆盖**它的父元素

简单举例

**继承**

```
<div style="color:blue">
        <p>这是蓝色的文字</p>
</div>
```

**覆盖**

```
<div style="color:blue">
        <p style="color:red">这是红色的文字</p>
</div>
```


之所以会产生这样的原因，是因为样式的渲染是存在一个类似“就近原则”的优先级

另外即便只有一个元素，它的样式也存在优先级：

内联样式 > ID样式 > 类别样式 > 标记样式

后面三种样式之后会详细讲解

### 尝试入门样式！

参考下面教程来学习使用样式！

* [HTML样式教程](http://www.runoob.com/html/html-css.html)

## CSS

样式的写法应该拥有统一的语法和规范，因此诞生了CSS

CSS版本经过了多年的迭代，目前主要使用CSS 3版本，此外也衍生出多个变种（比如LESS,SESS）

接下来有关CSS的教程会把主要的css和html内容分开，使用外链方式引入一个`.css`文件来实现。

### 基础语法

一个css区块的形式大致如下：

```
选择器 {
	样式名称:值
}
```

它会对选择器所能选择的所有元素都应用大括号里面的样式

### 补充知识：元素的class和id

html元素有两个特别的“身份”属性，它们是应用css样式的重要基础。

**class 类别** 

一个字符串，可以对多个元素应用同一个class，它表明了多个元素归属于“同一类”，如下：

```
	<div class="card">
		<p>this is card 1</p>
	</div>
	<div class="card">
		<p>this is card 2</p>
	</div>
```
这两个div就都是“card”类型的了（现在还看不出有什么用）

**id 标识**

一个id只能应用给一个元素，是该元素的唯一标识符。

注意：id不能是纯数字

```
    <div class="card" id="card1">
        <p>this is card 1</p>
    </div>
    <div class="card" id="card2">
        <p>this is card 2</p>
    </div>
```

接下来我们使用不同类型的选择器来应用样式

**类别选择器：`.`**

`.example` 可以选择所有class="example"的元素

**id选择器：`#`**

`#example` 可以选择所有id="example"的元素

#### 综合示范

创建两个class为card的div，id分别为card1和card2

**html**

```
    <div class="card" id="card1">
        <p>this is card 1</p>
    </div>
    <div class="card" id="card2">
        <p>this is card 2</p>
    </div>
```

对所有card类应用样式使得其背景色为粉色，字体颜色为蓝色

对card1单独应用样式使其字体颜色为黑色

对card2单独应用样式使其背景色为灰色

**css**

```
.card {
    background-color: pink;
    color: blue;
}

#card1 {
    color: black;
}

#card2 {
    background-color: gray;
}
```

使用外链方式引入css文件，得到显示效果为：

![](http://of1deuret.bkt.clouddn.com/17-6-23/27864870.jpg)

请仔细体会样式的优先级。

**示范代码**