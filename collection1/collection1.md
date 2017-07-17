# Collection 1: 前端认知部分总结


### 总结：传统前端开发模型

到此为止，我们已经学习了HTML+CSS+JS这三大传统前端技术，这一次课我们停下来做一个简单的总结和回顾。

基于这三大传统技术开发网页的流程一般是这样的：

* 使用HTML定义页面的结构和组成
* 使用CSS优化页面的显示和布局
* 使用JS完成网页的交互功能

现在让我们利用所学的知识来尝试完成一个简单的demo应用，跟着下面的教程一步一步来，从中体会一个应用的设计和开发流程。

### 综合实例：TODO LIST

DEMO：写一个网页版本的TODO LIST，可以实现待办事项的提醒。

这个DEMO将会贯穿我们整套教程，在学习了后续知识之后我们将会优化它的页面显示，给它加入用户和分类系统，最终甚至上线成为一个真正的web应用。

#### 分析需求

* 显示TODO LIST
* 添加一个TODO
* 删除一个已经存在的TODO（标记为已完成）

#### 页面设计

我们可以参考一下成型的TODO LIST类应用长什么样子：

首先是苹果OSX系统内置的reminder应用：

![](http://of1deuret.bkt.clouddn.com/17-7-17/59722433.jpg)

接下来是番茄土豆
![](http://of1deuret.bkt.clouddn.com/17-7-17/16380895.jpg)

可以看到大致都差不多，页面上主要就是一个列表，一个输入框加上一些辅助按钮

现在我们就利用HTML把这个页面给他简单的复现出来，大概的代码如下(`index.html`)：

```
    <div class="container">
        <div class="header">
            <input type="text" id="new-todo" class="new-todo-input">
            <button id="add-new" class="btn-add">+添加</button>
        </div>
        <div class="list" id="todo-list">
            <h3>TODO</h3>
            <h4><span>待办事项1</span><button class="btn-del">删除</button></h4>
        
            <h4><span>待办事项2</span><button class="btn-del">删除</button></h4>
        
            <h4><span>待办事项3</span><button class="btn-del">删除</button></h4>
        </div>
    </div>
```

首先我们放一个最大最顶级的div，class为container，这样方便后面管理整个应用的样式，把输入框和列表拆分开来，把元素做一个简单的划分和包装，然后大概得到下面这个页面

![](http://of1deuret.bkt.clouddn.com/17-7-17/695014.jpg)

#### 修改样式和布局

大体的框架已经出来了，不过这个不太好看，我们应用CSS稍稍的布局一下它，现在让我们创建一个`index.css`文件并引入它，添加下面的内容

```
body {
    font-weight: lighter;
    font-size: 20px
}

.container {
    text-align: center;
    margin: auto
}

.header {
    width: 50%
}

.list {
    width: 50%;
}

.new-todo-input {
    height: 24px;
    width: 300px;
}

input {
    border: 1px solid gray;
    -webkit-border-radius: 3px;
    -moz-border-radius:5px
}

button {
    background-color: white;
    border: 1px solid gray;
    -webkit-border-radius: 5px;
    -moz-border-radius:5px;
    font-size: 16px;
    font-weight: lighter
}

.btn-add {
    height: 28px;
    width: 80px;
}

.btn-del {
    margin-left: 20px;
    background-color: red;
    color: white
}

h4 {
    font-size: 20px;
    font-weight: lighter
}

h3 {
    font-weight: 200
}
```

注意这里的几个重要属性：

* `font-weight:lighter` 可以让字体变得更纤细，好看一些
* `-webkit-border-radius`和`-moz-border-radius`可以在chrome和firefox浏览器中引入圆角矩形

然后我们得到布局优化过后的界面：

![](http://of1deuret.bkt.clouddn.com/17-7-17/89568703.jpg)

鉴于本人前端能力有限，只能优化到这种地步了（其实还是蛮丑的），有能力的同学不妨自己尝试优化一下页面，此外，在后面的前端相关课程中我们也会通过组件库来优化页面，你不必担心因为不会写CSS而做不出好看的页面。

#### 实现功能

现在让我们进入最核心的部分，实现功能。大概分析一下我们这里有两个功能，一是创建，二是删除。

* 创建：
	
	获取输入框的内容，创建一个h4节点，然后把内容填充上并添加删除按钮，最后添加到todo-list节点下。
	
* 删除：

	从list中移除指定的todo-item的h4节点
	
为了追踪todo-item，我们还得给每个item指定一个id，不妨就用`todo-item-1`,`todo-item-2`这样的方式吧。

现在我们创建一个`index.js`文件并引入。现在想想js里面需要写些什么？

* 首先我们需要两个函数用来实现创建和删除的功能
* 我们需要一个能够动态生成唯一id的方法，在这里我采用了一个简单的方式，那就是定义一个全局变量，然后每次需要生成新节点的时候让他自增一下，就可以得到一个新的id了

接下来是`index.js`里的内容

```
var todoCount = 0;

function addNewTodo() {

    item = document.getElementById('new-todo').value;

    itemId = ++todoCount;// 为新的待办事项设置id
    
    // 创建新的节点
    var newItem = document.createElement('h4');
    newItem.setAttribute('id','todo-item-'+itemId);

    var newSpan = document.createElement('span');
    newSpan.innerText = item;

    var newButton = document.createElement('button');
    newButton.className = 'btn-del';
    // 绑定点击事件
    newButton.setAttribute('onclick','deleteTodo('+itemId+')');
    newButton.innerText = '删除';

    newItem.appendChild(newSpan);
    newItem.appendChild(newButton);
    
    var list = document.getElementById('todo-list');
    list.appendChild(newItem);
}

function deleteTodo(id) {
    // DOM节点要求必须找到所要删除的节点的父节点才能将其删除，所以使用了parentNode来获取父节点
    var target = document.getElementById('todo-item-'+id);
    var parent = target.parentNode;
    parent.removeChild(target);
}
```
别忘了给页面上那个添加按钮绑定onclick事件。

至此这个简单的应用就完成了。你也可以尝试给他添加一些功能（比如显示待办事项的添加时间）。

这个demo的源码已经同步到github上，需要的话可以点击下面的链接进行参考：

* [demo](https://github.com/MarkLux/WebTurorialDemos/tree/master/collection1)

#### 不足和改进空间

一个简单的TODO LIST应用完成了，但是作为一个应用它还存在很多的不足：

* 不能保存状态，页面关闭后所有的内容都会被重置。

	我们可以通过添加后端服务的方式来解决，将数据保存到服务器的数据库上即可。
	另一种优化思路是利用浏览器的`localStorage`，这相当于是一个浏览器内置的一个小型缓存区，在关闭浏览器前都会被保存。
	
* 删除应该有一个提示框，防止误操作，可以通过`confirm()`函数来辅助
* 页面太丑了，这个可以通过后期引库的方式改善，有能力的同学也可以自己修改CSS

### 前端发展的现状和注意事项

至此，前端认知部分的内容就算讲解完毕。让我们来分析一下目前这种页面构造方式中存在的一些问题：

* 当页面变得很大的时候，HTML代码可能会十分冗长，这将大大降低可读性和可维护性
* 用CSS来定制样式比较繁琐，如果所有的页面样式都自己定义实在太费时费力了

前端现在主要通过组件化和库来解决上面两个问题。

组件化就是把页面拆解成组件，渲染的时候再把组件拼接在一起，这样只用维护组件就可以了，增加了复用性和可维护性。

同时出现了许多的组件库和样式库，通过外链的方式引入css和js就可以使用，非常方便（比如bootstrap，你可以试着用它来优化上面那个demo的页面）。

目前的前端开发工作主要如下：

* 通过组件组织页面结构
* 调整页面样式
* 编写页面组件
* 编写页面逻辑
* 管理网络请求

三大技术栈

* react
* vue
* angularJS

注意这三大技术栈基本是互不兼容的，各自拥有一套技术体系和生态圈。

下面对于想要学习前端的同学给出一些注意事项：

* 前端的技术迭代非常快，各种框架和脚手架层出不穷，几周甚至几天就有新的技术涌现，因此要时刻关注最新动态，学习新技术。
* JS是目前整个前端生态圈的基石，因此一定要牢固掌握，并且JS的版本也在不断迭代，请至少学习ES6版本及以后的JS。
* 因为各个框架对JS包装的十分严重，在使用不同的框架时你可能感觉在使用两种不同的语言。

后续的应用篇中将会进一步给出一套前端的学习路径和课程，敬请关注。