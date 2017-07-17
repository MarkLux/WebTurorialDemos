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