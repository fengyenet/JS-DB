### 前端数据库开发手册
-----
> 该数据库支持基本数据库增删改查操作，支持单条件排序，暂不支持聚合

#### 开始使用

#####载入数据库资源文件
`<script src="db.js"></script>`

#####初始化连接
```
// 初始化数据库连接池管道 每一个管道只能存一个数据表，如果非要存多个数据表，不是不行，用use切换一下table名称即可，默认table名称为`table`
var tableModel = new DBUtils();
```

#### 公开方法

##### [put 新增 / 编辑](#Put)
##### [item 返回表所有数据](#Item)
##### [where 条件查询](#Where)
##### [getItem 指定返回字段](#GetItem)
##### [clear 删除除指定表数据](#Clear)
##### [del 删除指定表指定条件的数据](#Del)
##### [sortBy 根据条件查询结果进行排序](#SortBy)
##### [limit 根据条件查询结果选择取值范围](#Limit)


<a id="Put">put</a>

| 参数 | 数据类型 | 是否必须 | 说明 |
| - | - | - | - |
| 参数1 | string/null/int 或 object | 是 | 当参数2不存在时，则该参数为object:要修改的数据对象，否则则是数字或空或字符串 |
| 参数2 | object | 否 | 要修改的数据对象 |
| 参数3 | int / object | 是 | limit [start,max] 或 start |

| 返回值 | 数据类型 |
| - | - |
| 状态 | boolen |

###### DEMO1 单条插入: 
```
tableModel.put({'id':1,'name':'xxx'});
```
###### DEMO2 多条插入: 
```
tableModel.put(
	[
		{'id':1,'name':'xxx'},
		{'id':2,'name':'yyy'}
	]
);
```
###### DEMO3 修改全部: 
```
tableModel.put(1,{'org':20,'sex':'男'});
```
###### DEMO4 修改单条件指定: 
```
tableModel.put('id<1',{'org':20,'sex':'男'});
```
###### DEMO5 修改单条件+或者条件指定(满足其一): 
```
tableModel.put(
	'id<1 or name like xxx', // 条件
	{'org':20,'sex':'男'} // 修改值
);
```
###### DEMO6 修改多条件(条件并列): 
```
tableModel.put(
	['id<1','name like 男'],
	{'org':20,'sex':'男'}
);
```
###### DEMO7 修改指定主键，主键从0开始计算
```
tableModel.put(
	['id<1','name like 男'],
	{'org':20,'sex':'男'},
	2	// 修改主键为2的数据
);
```
###### DEMO8 修改指定主键范围，主键从0开始计算 参数[start,max]
```
tableModel.put(
	1,
	{'org':20,'sex':'男'},
	[2,2]	// 修改主键为2-3的数据, 如[2,2] 代表修改第3条、第4条数据，前面参数代表起始位置，后面参数代表修改条数
);
```
###### DEMO9 字段为number的时候，可以直接++或--来增加或删除指定数量的值，不能直接用++，++后面必须带数字
```
tableModel.put(
	1,
	{'count':'++20','max_count':'--10'},  // 等同于count+20,max_count-10
);
```

<a id="Item">item</a>

| 参数 | 数据类型 | 是否必须 | 说明 |
| - | - | - | - |
| 参数1 | string | 否 | 返回的键值 |

| 返回值 | 数据类型 |
| - | - |
| 全部数据 | object |

###### DEMO1 不限制返回字段: 
```
tableModel.item();
```
###### DEMO2 限制返回指定字段: 
```
tableModel.item('id,name');
```

<a id="Where">where</a>

| 参数 | 数据类型 | 是否必须 | 说明 |
| - | - | - | - |
| 参数1 | string | 是 | 查询条件 |
| 参数2 | string | 否 | 如果启用参数2，则表示该条件是个like |

| 返回值 | 数据类型 |
| - | - |
| 匹配数据 | object |

###### DEMO1 修改单条件: 
```
tableModel.where('id>0');
```
###### DEMO2 修改单条件+或者条件指定(满足其一): 
```
tableModel.where('id>0 or name=xxx');
```
###### DEMO3 多条件and并列查询: 
```
tableModel.where('id>0').where('name=name');
```
###### DEMO4 like查询: 
```
tableModel.where('name','xxx');
```
###### DEMO5 字段比较查询: 
```
tableModel.where('count>`max_count`'); // 其中max_count为字段名称
```

<a id="GetItem">getItem</a>

| 参数 | 数据类型 | 是否必须 | 说明 |
| - | - | - | - |
| 参数1 | string | 否 | 返回的键值 |

| 返回值 | 数据类型 |
| - | - |
| 匹配数据 | object |

###### DEMO1 不限制返回字段: 
```
tableModel.where('id>0').getItem();
```
###### DEMO2 限制返回指定字段: 
```
tableModel.where('id>0').getItem('id,name');
```

<a id="Clear">clear</a>

###### DEMO: 
```
tableModel.clear();
```

<a id="Del">del</a>

| 参数 | 数据类型 | 是否必须 | 说明 |
| - | - | - | - |
| 参数1 | int / string / object | 是 | 删除指定条件的数据 |
| 参数2 | int / object | 是 | limit [start,max] 或 start |

| 返回值 | 数据类型 |
| - | - |
| 状态 | boolen |

###### DEMO1 单条件删除: 
```
tableModel.del('id>0');
```
###### DEMO2 单条件+或者条件指定(满足其一)删除: 
```
tableModel.del('id>0 or name=xxx');
```
###### DEMO3 多条件and并列删除: 
```
tableModel.del(['id>0','name=xxx']);
```
###### DEMO4 删除指定键值的数据: 
```
tableModel.del(1,2); // 删除键值为2的数据，键值从0开始
```
###### DEMO5 删除指定键值范围的数据: 
```
tableModel.del('id>0',[2,2]); // 删除键值为3,4的数据，键值从0开始,start=2,max=2
```

<a id="SortBy">sortBy</a>

| 参数 | 数据类型 | 是否必须 | 说明 |
| - | - | - | - |
| 参数1 | string | 是 | 字段 |
| 参数2 | string | 否 | asc 正序/desc 倒序 |

| 返回值 | 数据类型 |
| - | - |
| 数据 | object |

###### DEMO: 
```
tableModel.sortBy('id','desc');
```

<a id="Limit">limit</a>

| 参数 | 数据类型 | 是否必须 | 说明 |
| - | - | - | - |
| 参数1 | int | 否 | 起始位置，默认0 |
| 参数2 | int | 否 | 结束位置，默认20 |

| 返回值 | 数据类型 |
| - | - |
| 数据 | object |

###### DEMO: 
```
tableModel.limit(0,10);
```