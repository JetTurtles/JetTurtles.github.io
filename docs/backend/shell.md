# Shell 基础

Shell 是一个用 C 语言编写的**程序**，它是用户使用 Linux 的桥梁。Shell 既是一种命令语言，又是一种程序设计语言。通过 Shell 用户可以访问操作系统内核的服务。

## 第一个shell脚本

```shell
#!/bin/bash
echo "Hello World !"
```

**#!**  是一个约定的标记，它告诉系统这个脚本需要什么解释器（Shell）来执行。Shell 解释器用于解释执行的脚本。常用解释器有：Bourne Shell，Bourne Again Shell，C Shell 等。

## echo

echo 用于输出。

### 字符串输出

```shell
echo "Hello World !"
# 输出结果
Hello World !
```

### 结果定向输出

```shell
# 字符串内容输出到my_text.txt文件中
echo 'hello world!' > my_text.txt
```

### 显示执行结果

```shell
 # 打印当前日期，使用`不是但括号'
 echo `date`
```

## 变量

变量是用于存储数据值的名称。

### 定义变量

- 变量名只能包含字母、数字和下划线
- 变量名不能以数字开头
- 避免使用 Shell 关键字
- 使用大写字母表示常量
- 等号两侧避免使用空格

```shell
# 定义一个变量my_var，值为hello
my_var="hello"
```

### 使用变量

在变量名前面加美元符号即可使用

```shell
# 使用变量my_var
echo $my_var
echo ${my_var}
```

### 只读变量

使用 readonly 命令可以将变量定义为只读变量

```shell
my_var="hello"
# 定义my_var为只读
readonly my_var
# 第二次赋值报错，bash: my_var: readonly variable
my_var="hello"
```

### 删除变量

使用 unset 命令可以删除变量。unset 命令**不能删除只读变量**。

```shell
# 删除变量my_var
unset my_var
```

### 变量类型

Shell 支持不同类型的变量：

#### 字符串

字符串可以用单引号，也可以用双引号，也可以不用引号。

```shell
str_var1='hello'
str_var2="hello"
str_var3=hello
```

##### 单引号

- 单引号里的任何字符都会原样输出，**单引号字符串中的变量是无效的**

```shell
 # 单引号使用变量无效
 echo 'print string:${str_var1}'
 # 输出结果
 print string:${str_var1}
```

- 单引号字符串中不能出现单独一个的单引号（对单引号使用转义符后也不行），但可成对出现，作为字符串拼接使用。

```shell
# 拼接字符串并输出
echo 'print string:'${str_var1}'.'
# 输出结果
print string:hello.
```

##### 双引号

- 双引号里可以有变量

```shell
echo "print string:${str_var1}."
# 输出结果
print string:hello.
```

- 双引号里可以出现转义字符

```shell
echo "\"\""
# 输出结果
""
```

##### 字符串拼接

```shell
# 拼接
echo 'print string:'${str_var1}'.'
echo "print string:"${str_var1}"."
# 使用变量
echo "print string:${str_var1}."
```

##### 字符串长度

```shell
# 定义变量
str_var1=hello
# 获取长度
echo ${#str_var1[0]}
# 输出结果
5
```

##### 子字符串

```shell
# 定义变量
str_var1=hello
# 获取子字符串
echo ${str_var1::3}
echo ${str_var1:0:3}
# 输出结果
hel


# 定义变量
str_var1=hello
# 查找h在str_var1变量中的位置
echo `expr index "${str_var1}" h`
# 输出结果
1
# 查找l或o在str_var1变量中的位置
echo `expr index "${str_var1}" lo`
# 输出结果
3
# 查找x在str_var1变量中的位置
echo `expr index "${str_var1}" x`
# 输出结果(不存在输出0)
0
```

#### 整数

可以使用 **declare** 或 **typeset** 命令来声明整数变量

```shell
# 定义一个整数变量int_var，值为1
declare -i int_var=1
# 自增
let int_var++
# 打印变量的值
echo $int_var
# 输出结果
2
```

#### 数组

只支持一维数组，并且没有限定数组的大小。

##### 定义数组

```shell
 # 定义数组
 arr_var1=(hello hi 你好)
```

##### 读取数组

```shell
# 读所有元素
echo ${arr_var1[*]}
# 输出结果
hello hi 你好

# 跟据下标读
echo ${arr_var1[1]}
# 输出结果
hi

# 获取数组长度
echo ${#arr_var1[@]}
echo ${#arr_var1[*]}
# 输出结果
3

# 获取元素长度
echo ${#arr_var1[1]}
# 输出结果
2
```

## 注释

以 **#** 开头的行就是注释，会被解释器忽略。

```shell
#这是一行注释
```

## 传参

可以在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为 **$n**，**n>=1** 代表第n个参数。

### 创建脚本

脚本文件名为my_shell.sh，获取第一，第二个参数并打印出来：

```shell
#!/bin/bash
echo $1 $2
```

### 执行脚本

控制台输入执行命令

```shell
./my_shell.sh hi hello
# 执行结果
hi hello
```

## 运算符

expr 是一款表达式计算工具，使用它能完成表达式的求值操作。表达式使用 **`** 括起来。

### 算术运算符

| 运算符 | 说明                           |
| :----- | :----------------------------- |
| +      | 加法                           |
| -      | 减法                           |
| *      | 乘法                           |
| /      | 除法                           |
| %      | 取余                           |
| =      | 赋值                           |
| ==     | 比较相等，结果为真返回1，否则0 |
| !=     | 比较不相等                     |

例子：

```shell
# 判断10+20是否等于5*6
echo `expr 10 + 20 == 5 \* 6`
# 输出结果
1
```

### 关系运算符

| 运算符 | 说明                                                  |
| :----- | :---------------------------------------------------- |
| -eq    | 检测两个数是否相等，相等返回 true。                   |
| -ne    | 检测两个数是否不相等，不相等返回 true。               |
| -gt    | 检测左边的数是否大于右边的，如果是，则返回 true。     |
| -lt    | 检测左边的数是否小于右边的，如果是，则返回 true。     |
| -ge    | 检测左边的数是否大于等于右边的，如果是，则返回 true。 |
| -le    | 检测左边的数是否小于等于右边的，如果是，则返回 true。 |

检查传参，第一个参数和第二个参数相等返回1，第一个大于第二个返回2，否则返回0

```shell
#!/bin/bash
if [ $1 -eq $2 ]	#注意： [] 与 $1，$1之间留空格
then
        echo 1
else
        if [ $1 -gt $2 ]
        then
                echo 2
        else
                echo 0
        fi
fi
```

执行结果

```shell
# 执行脚本，预期结果控制台打印2
./my_shell.sh 10 5
# 执行结果
2
```

### 逻辑运算符

| 运算符   | 说明                                                |
| :------- | :-------------------------------------------------- |
| !        | 非运算，表达式为 true 则返回 false，否则返回 true。 |
| -o，\|\| | 或运算，有一个表达式为 true 则返回 true。           |
| -a，&&   | 与运算，两个表达式都为 true 才返回 true。           |

检查传参，第一个参数和第二个参数相等返回或第一个大于第二个返回1，否则返回0

```shell
# 第一种写法使用 -o 运算符
#!/bin/bash
if [ $1 -eq $2  -o $1 -gt $2 ]
then
        echo 1
else
        echo 0
fi

# 第二种写法，使用 || 运算符
#!/bin/bash
if [[ $1 -eq $2  || $1 -gt $2 ]]	#注意：比第一种写法多一个[]
then
        echo 1
else
        echo 0
fi
```

执行结果

```shell
# 执行脚本，预期结果控制台打印1
./my_shell.sh 10 5
# 执行结果
1
```

## printf 

printf 用于输出。命令格式：

```
printf  format-string  [arguments...]
```

- **format-string:** 格式字符串包含普通文本和格式说明符
- **arguments:** 用于填充格式说明符的参数列表

常用的格式说明符包括：

- `%s`：字符串
- `%d`：十进制整数
- `%f`：浮点数
- `%c`：字符
- `%x`：十六进制数
- `%o`：八进制数
- `%b`：二进制数
- `%e`：科学计数法表示的浮点数

```shell
# 输出脚本第一个参数
#!/bin/bash
printf "第一个参数%s" $1
# 执行脚本
./my_shell.sh hello
# 输出结果
第一个参数hello
```

## 流程控制

### if

if 语句语法格式：

```shell
if 判断逻辑
then
    命令
fi
```

例子：

```shell
 int_var=100
 # 当int_var的值等于100，则输出true。写成一行需要使用;分割多个命令。
 if [ $int_var -eq 100 ]; then echo true; fi;
 # 输出结果
 true
```

### if else

语句语法格式：

```shell
if 判断逻辑
then
    命令
else
    命令
fi
```

例子：

```shell
 int_var=100
 # 当int_var的值等于10，则输出true，否则输出false。写成一行需要使用;分割多个命令。
 if [ $int_var -eq 10 ]; then echo true;else echo false; fi;
 # 输出结果
 false
```

### if else-if else

语句语法格式：

```shell
if 判断逻辑
then
    命令
elif 判断逻辑
then
    命令
else
    命令
fi
```

例子：

```shell
 int_var=100
 # 当int_var的值等于10，则输出equal，大于输出great，否则输出less。写成一行需要使用;分割多个命令。
 if [ $int_var -eq 10 ]; then echo equal;elif [ $int_var -gt 10 ]; then echo great;else echo less; fi;
 # 输出结果
 great
```

### for

for 用于循环，格式为：

```shell
# 正常循环
for 变量 in 集合
do
    命令
done

# 无限循环
for (( ; ; ))
```

例子：

```shell
# 编写脚本,脚本文件为my_shell.sh
#!/bin/bash
arr=( hello hi 你好 hola )
for str in ${arr[@]}
do
        echo $str
done
# 执行脚本
./my_shell.sh
# 输出结果
hello
hi
你好
hola
```

### while

while 用于循环，格式为：

```shell
# 正常循环
while 判断
do
    命令
done

# 无限循环1
while true :
do
    命令
done

# 无限循环2
while :
do
    命令
done
```

例子：

```shell
# 编写脚本,脚本文件为my_shell.sh
#!/bin/bash
int_var=1
# 变量int_var小于5
while [ $int_var -lt 5 ]
do
        echo $int_var
        # 自增
        let int_var++
done
# 执行脚本
./my_shell.sh
# 输出结果
1
2
3
4
```

### until 

until 用于循环，**条件为 true 时停止**，格式为：

```shell
until 条件
do
    命令
done

```

例子：

```shell
# 编写脚本,脚本文件为my_shell.sh
#!/bin/bash
int_var=1
# int_var的值大于5时停止循环
until [ $int_var -gt 5 ]
do
        echo $int_var
        # 自增
        let int_var++
done
# 执行脚本
./my_shell.sh
# 输出结果
1
2
3
4
5
```

### case 

case 为多选择语句，格式为：

```shell
case 值 in
模式1)
    命令
    ;;
模式2)
    命令
    ;;
esac
```

例子：

```shell
# 编写脚本,脚本文件为my_shell.sh
#!/bin/bash
# 判断第一个参数是多少
case $1 in
        10)
                echo '$1等于10'
                ;;
        20)
                echo '$1等于20'
                ;;
esac
# 执行脚本
./my_shell.sh  10
# 输出结果
$1等于10
```

### 跳出循环

在循环过程中，有时候需要在未达到循环结束条件时强制跳出循环

#### break

break 命令允许跳出所有循环（终止执行后面的所有循环），例子：

```shell
# 编写脚本,脚本文件为my_shell.sh
#!/bin/bash
int_var=0
while true :
do
        if [ $1 -lt $int_var ]
        then
                echo "循环停止"
                break;
        fi
        echo "循环执行中,$int_var"
        let int_var++
done
# 执行脚本
./my_shell.sh  2
# 输出结果
循环执行中,0
循环执行中,1
循环执行中,2
循环停止
```

#### continue

continue 跳出当前循环，例子：

```shell
# 编写脚本,脚本文件为my_shell.sh
#!/bin/bash
# 判断第一个参数是多少
case $1 in
        10)
                echo '$1等于10'
                ;;
        20)
                echo '$1等于20'
                ;;
esac
# 执行脚本
./my_shell.sh  10
# 输出结果
$1等于10
```

## 函数

shell 可以用户定义函数，函数的定义格式如下：

```shell
[ function ] funname [()]

{

    action;

    [return int;]

}
```

例子：

```shell
#!/bin/bash
# 方法定义
function method(){
		# 通过 $n 的形式来获取参数的值，$1表示第一个参数
        echo $1
        return $1
}
# 方法调用
method 100
# 函数返回值在调用该函数后通过 $? 来获得
echo "函数结果 $?"

# 执行脚本
./my_shell.sh
# 输出结果
100
函数结果 100
```

> 在函数体内部，通过 $n 的形式来获取参数的值，例如，$1表示第一个参数。$10 不能获取第十个参数，获取第十个参数需要${10}。当n>=10时，需要使用${n}来获取参数。
>
> 函数返回值在调用该函数后通过 **$?** 来获得。

