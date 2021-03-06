# Case2: 使用现代化的代码编辑器

## 简介
> 工欲善其事，必先利其器。作为一名合格的开发人员，你应该使用一个现代化的代码编辑器来投入生产。放弃史前时代的记事本吧，这节课让我们一起拥抱现代科技。

## 目标

* 更换并使用一种适合开发人员的代码（文本）编辑器
* 学习使用插件来扩展编辑器的功能
* 感受代码联想和快速补全的快感

## 任务

* 使用emmet扩展快速书写html代码

## 预期时间

* 0.5 - 1天

****

## 了解代码编辑器

所谓代码编辑器，本质上和记事本一样都是用来书写文本的（基本上所有的代码都是文本），不过现在的代码编辑器都集成了许多方便开发的功能，比如：

* 支持多种编程语言的语法高亮提示
* 支持多种编码方式
* 支持插件来加快开发速度，扩展功能
* 集成代码管理（git）以及开发调试功能

在编程界曾经出现过下面四个主要的，里程碑式的开发工具，也形成了以各自为中心的开发人员集群，让我们稍微了解一下这些工具：

### Vim

![](http://of1deuret.bkt.clouddn.com/17-6-19/68456913.jpg)


`Vim`可以说是代码编辑器领域的泰斗级别的存在了，有着悠久的历史，极为强大的快捷键和命令操作，据说学会使用vim的程序员可以提升数倍的开发速度...

不过学会使用Vim并不是一件容易的事情，各种命令和组合键一开始会让你头疼不已。但迄今为止Vim在非图形化界面下依然是编辑代码的不二之选。

### Emacs

![](http://of1deuret.bkt.clouddn.com/17-6-19/37114438.jpg)

`Emacs`是`Vim`的强力竞争者，曾经一度替代`Vim`成为诸多linux系统的默认编辑器，Emacs拥有近乎无敌的扩展性，甚至被成为“伪装成编辑器的操作系统”。

Emacs和Vim两者一个被称为“神一样的代码编辑器”，另一个被称为“代码编辑器之神”，为此两派的拥护者还曾经发起过诸多斗争...可见这两个编辑器在极客史上的地位之高。

不过和Vim一样，Emacs的学习曲线一样十分陡峭，因此决定使用它需要一定的勇气哦。

### Notepad++

![](http://of1deuret.bkt.clouddn.com/17-6-19/71602905.jpg)

相比上面两位元老级别的编辑器，`Notepad++`就是相对比较年轻的存在了，这款编辑器主要应用于Windows操作系统，很长的一段时间里，许多人程序员用它代替windows内置的记事本。

它是较早的几个专门针对GUI图形界面开发的编辑器（同一时代出现了一系列优秀的GUI编辑器，比如UltraEdit等），代码高亮和一定程度的自动补全算是当年的一大亮点了。

Notepad++小巧简洁，拥有多种语法高亮支持，可惜的是它的扩展性不好，所以现在基本已经湮灭在历史的长河中了... 

### SublimeText 2/3

![](http://of1deuret.bkt.clouddn.com/17-6-19/50083333.jpg)

这款编辑器可以说是划时代的产品了，绝对现代化的功能：代码高亮，自动补全，联想，集成调试，海量的插件库...都成就了`SublimeText`在现代化编辑器中奠基者的地位。

至今它仍然是相当一部分开发人员的主力工具，加上合适扩展和配置的SublimeText可以用于进行任何一种语言的开发。

主要有2和3两个版本，部分插件在SublimeText3中存在兼容性问题，因此SublimeText2依然拥有相当大的用户基数。

## 我们的选择

上面讲了代码编辑器界的四大金刚，那么我们的课程中到底要选择哪一个呢？
答案是**哪个也不用！**

虽然这些编辑器都十分强大，但是对于新手而言实在太不友好，而且他们都相对比较古老了，在2017年的今天，我们拥有更好的选择，更好的方式来编写代码。下面祭出我认为当今最好用的两大代码编辑器！

### 1. Atom

![](http://of1deuret.bkt.clouddn.com/17-6-19/96461836.jpg) 

这款编辑器由github开发，拥有庞大的主题和插件库，而且集成了绝大多数常用的开发功能，可以说一步到位。

当年我是被一个插件吸引才开始使用atom的，这个插件可以让你写代码的时候拥有炫酷的特效，是下面这样的...
![](http://of1deuret.bkt.clouddn.com/17-6-20/2676933.jpg)

是不是看起来狂拽酷炫屌炸天，带着这样的特效写代码仿佛自己都要去拯救世界了

下面是atom的官网和下载地址：

* [atom](https://atom.io/)

### 2.VisualStudioCode

![](http://of1deuret.bkt.clouddn.com/17-6-20/78221341.jpg)

简称VSCODE，由微软开发，在windows上用过VisualStudio开发的人一定都会记住这个庞大的IDE的功能有多强大。

不过身为一个IDE，VisualStudio的体积太过强大了，而且只能在windows环境中使用，使得许多人望而却步，于是微软爸爸良心发现，推出了VSCODE（这也是这么多年来微软出的第一款跨平台产品...）

VSCODE也拥有诸多插件库，虽然不像Atom那样拥有庞大的主题资源库但是它简洁优雅的配色方案和布局也非常不错，而且相比Atom，VSCODE的一大优势是原生支持中文，英文不好的同学可以考虑一下它。

下面是VSCODE的官网和下载地址

* [VisualStudioCode](https://code.visualstudio.com/)

### 理由

选择这两大编辑器作为主力开发工具的原因主要有以下几点：

* 安装使用方便，原生就内置了许多方便的功能，无需配置，开箱即用
* 拥有庞大的开发者社区，这就意味着每天每时每刻都有新的扩展源源不断的产生...
* 跨平台，Linux，Windows，OSX都可以使用

## 开始上手

### 安装

访问上面的官网并安装他们。

### 界面介绍

现在让我们介绍两个编辑器的主界面：

你可以选择打开一个目录来查看目录的文件结构（文件树）

#### 1.VSCODE

![](http://of1deuret.bkt.clouddn.com/17-6-20/56099052.jpg)

#### 2.Atom

![](http://of1deuret.bkt.clouddn.com/17-6-20/31740696.jpg)

整体看上去都差不多，注意下面的编码和语言选择，大多时候是很有用的。

## 配置

任何工具和使用者之间都会存在磨合的过程，因此你很有可能不满足编辑器所提供的默认配置（尤其是字体大小和样式），所以你需要对他们进行配置。

### VSCODE

VSCODE的配置全部使用`JSON`来设定，`JSON`是一种简单的交互形式，你可以简单的理解它是一种 键:值对的形式。

现在我们尝试修改VSCODE的默认字体大小和样式

* 从菜单栏：Code -> 首选项 -> 设置 打开配置界面，或者使用`Ctrl + ,`快捷键（Mac下把Ctrl替换为Command，以后如果不说明默认都是此规则）

* 你会看到下面这个界面

![](http://of1deuret.bkt.clouddn.com/17-6-20/95448056.jpg)

* 左边一栏为配置内容，格式是
	```
	"配置名称":"配置值"
	```
* 你不能在左侧直接修改配置的值，需要将它复制到右侧的编辑区中（用户设置或工作区设置），然后修改使其覆盖原配置值。
* 点击编辑按钮，选择“复制到设置”，就会在右侧看到生成的配置项了，然后编辑它，按下`Ctrl+S`保存就可以生效了。

![](http://of1deuret.bkt.clouddn.com/17-6-20/97285596.jpg)

### Atom

相比VSCODE，Atom的配置要人性化一些

* 从菜单栏：Atom -> Preferences... 或者 `Ctrl + ,`进入配置中心
![](http://of1deuret.bkt.clouddn.com/17-6-20/51986772.jpg)

* 直接修改对应的配置值即可

### 更多...

每个编辑器都拥有众多的配置项，当你需要的时候就去修改它们，让编辑器变得更顺手吧

## 安装扩展和插件

插件和扩展是编辑器的生命力所在，Atom和VSCODE都提供了强大的扩展中心，使用也十分方便

### VSCODE

![](http://of1deuret.bkt.clouddn.com/17-6-20/35121988.jpg)

切换到扩展选项卡就可以安装和管理扩展了，在搜索框中搜索你想要的扩展名称，选择一个合适的点击一下就可以安装了，之后只要重启编辑器就能使其生效了

![](http://of1deuret.bkt.clouddn.com/17-6-20/34237247.jpg)

### Atom

在上面所说的配置中心(`Ctrl + ,`)中，选择packges选项可以管理已经安装的扩展：

![](http://of1deuret.bkt.clouddn.com/17-6-20/58185017.jpg)

选择Install选项可以搜索并安装新的插件

![](http://of1deuret.bkt.clouddn.com/17-6-20/97620346.jpg)

### Tips

一般来说当你开始着手开发一个项目之前，你应该先安装好合适的扩展

* 语言支持：主要包括错误检测，自动补全等
* 调试工具
* 其他快捷辅助工具

如果你不知道要安装那些插件，那就使用百度吧，会有很有多的解决方案。

比如我想用VSCODE进行go语言的开发，那么只需要搜索：“使用VSCODE搭建go语言开发环境”就能找到相应的解决方案了。

## 实践：使用代码补全编写html

说了这么多，不实际上手操作一下是无法体会到代码编辑器的实际作用的。现在我们使用VSCODE和Atom都内置了的`emmet`插件来快速编写一下html

(`emmet`是一款用于前端开发的，快速编写html的插件，最早产生于
SublimeText，因为使用极其方便，现在所有的前端工具都集成了这个功能)

你现在需要创建一个html文件，然后使用编辑器打开它。请注意文件后缀的正确性，否则编辑器如果没有识别出是html文件的话将不会打开emmet扩展。

### 一键生成骨架

还记得上节课讲到的所有html所共有的骨架吗？每次都复制粘贴显然太麻烦了，现在你只需要一个按键就能生成它：

* 在编辑器中输入`html:5`
* 按下TAB

然后你就会已经自动生成了整个html的骨架了！只需要一秒钟！

![](http://of1deuret.bkt.clouddn.com/17-6-20/83209094.jpg)

对于这个语法做一点简单的讲解，html表示生成的是html文件骨架，冒号后面的数字表示了html的版本，主要有4，4s和5几个版本，由于现在html已经普及了，所以基本都是使用`html:5`了

### 生成标签

绝大多数的标签也可以一键生成，在body中输入`h1`然后按下tab，就会自动生成`<h1></h1>`的代码块，然后直接编写其中的内容即可，p标签，a标签等等都是一样的操作。

你还可以快速生成标签中的内容和附加属性，看下面的两个例子

```
h1{foo}
a[href=#]
```

按下tab会分别填充内容和属性，生成下面两行代码

```
<h1>foo</h1>
<a href="#"></a>
```

![](http://of1deuret.bkt.clouddn.com/17-6-20/87549109.jpg)

(注意要把光标移动到行末再按下tab)

### 快速生成多个标签

输入`h1*3`并按下tab试试，你会得到3个h1标签，这种快速生成在需要生成多个属性相同的标签时异常有用，先用上面的语法写好标签的格式，然后写乘号`*`加上要重复的次数就可以得到多个相同的标签了。

![](http://of1deuret.bkt.clouddn.com/17-6-20/22492528.jpg)

### 生成嵌套标签

如果你要生成多个嵌套的元素，可以使用`>`表明标签间的嵌套关系：

输入`div>p`按下tab，就会生成以下的嵌套结构：

```
<div>
     <p></p>
</div>
```

### 其他

emmet的常用语法介绍的差不多了，不过它的功能远不止于此，感兴趣的话就通过搜索引擎来查看它的手册来看看到底都能怎么用吧。

* [简单教程](http://www.iteye.com/news/27580)
* [官方手册](https://docs.emmet.io/)

此外，编辑器的自动补全和提示功能也会极大的方便你的代码书写，亲自上手体验就会明白了

## 快捷键

使用快捷键是加快开发速度的一个重要技巧，基本的复制粘贴撤销重做自然不必多说，代码编辑器内置了更多更为强大的快捷键和组合操作（比如一键重命名变量，移动代码块,格式化代码等，尤其是格式化代码这个真的特别好用）。

下面是VSCODE和ATOM的常用快捷键列表，你可以根据需要在设置中修改它们，当然你不会记住和用到所有的快捷键，因此大概浏览并尝试一下，需要的时候再查看就可以了。

* [VSCODE快捷键一览](https://segmentfault.com/a/1190000007688656)
* [ATOM快捷键大全](http://www.jianshu.com/p/b8392151c0cd)

## 小结

本节介绍了两个常用的代码编辑器，相信随着开发能力的增长和深入，编辑器的强大之处将会一点一点地体现出来。

后续的课程中我们将会逐步解锁代码编辑器的各种扩展和功能，使它成为你得心应手的工具。

## 任务与实践

* 尝试在编辑器中安装一些插件，并且使用它来书写html文档吧
* 尝试使用代码格式化快捷键格式化你所写的html代码