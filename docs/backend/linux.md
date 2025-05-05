# Linux基础

Linux 是一种自由和开放源码的操作系统。

## 系统目录结构

- **/bin**

  bin 是 Binaries (二进制文件) 的缩写，这个目录存放着最**经常使用的命令**。

- **/dev**

  dev 是 Device(设备) 的缩写，该目录下存放的是 Linux 的**外部设备**，在 `Linux 中一切皆是文件`，因此访问设备的方式和访问文件的方式是相同的。

- **/etc**

  etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的**系统管理所需要的配置文件和子目录**。

- **/home**

  **用户的主目录**，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是**以用户的账号命名**的。

- **/lib**

  lib 是 Library(库) 的缩写这个目录里存放着**系统最基本的动态连接共享库**，几乎所有的应用程序都需要用到这些共享库。

- **/root**

  该目录为系统管理员，也称作**超级权限者的用户主目录**。

- **/sbin**

  s 是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是**系统管理员使用的系统管理程序**。

- **/tmp**

  tmp 是 temporary(临时) 的缩写这个目录是用来存放一些**临时文件**的。

- **/usr**

  usr 是 unix system resources （Unix 系统资源）的缩写，存放的是**应用程序和文件**。

    - **/usr/bin**

      系统用户使用的应用程序。

    - **/usr/sbin**

      超级用户使用的比较高级的管理程序和系统守护程序。

    - **/usr/src**

      **内核源代码**默认的放置目录。

- **/var**

  var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些**经常被修改的目录**放在这个目录下。包括各种日志文件。

## 文件属性

Linux 系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。

### chgrp

chgrp（change group）命令用于变更文件或目录的所属群组。

```shell
 # 查看更多命令参数
 chgrp --help
 # file-chgrp目录的分组改为my-group，R参数的作用是递归处理，将指定目录下的所有文件及子目录一并处理。
 chgrp -R my-group file-chgrp
```

### chmod

chmod（change mode）命令是控制用户对文件的权限的命令。文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other
Users）。

```shell
# 查看temp.log文件权限
ll temp.log
-rwxr--r-- 1 26761 197610 11 Apr 28 22:10 temp.log
# 第1位代表的是文件类-或d，第2-4位文件所有者权限，第5-7位组内用户权限，第8-10位其他用户权限。
# r（read）读权限，w（write）写权限，x（execute）执行权限。

# 查看更多命令参数
chmod --help
# 给文件所有者添加读权限，去掉写权限
chmod -Rv u+r-w temp.log
mode of 'temp.log' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)
# 与上面的作用一致
chmod -Rv 444 temp.log
mode of 'temp.log' changed from 0644 (rw-r--r--) to 0444 (r--r--r--)
```

#### 用户类型

| who |  用户类型  | 说明       |
|:---:|:------:|:---------|
|  u  |  user  | 文件所有者    |
|  g  | group  | 文件所有者所在组 |
|  o  | others | 所有其他用户   |
|  a  |  all   | 所有用户     |

#### 操作符

| Operator | 说明       |
|:--------:|:---------|
|    +     | 增加权限     |
|    -     | 去除权限     |
|    =     | 重新设置所有权限 |

### chown

chown（**change owner**）命令用于设置文件所有者和文件关联组的命令。

```shell
# 查看文件所有者，所有者为26761
ll
drwxr-xr-x 1 26761 197610  0 Apr 28 23:03 file-chown/
# 查看更多命令参数
chown  --help
# 修改给文件所有者为267616
chown -Rv 267616 file-chown/
```

## 文件与目录管理

### ls（list files）

列出目录及文件名。

```shell
# 查看更多命令参数
ls  --help
# 列出所有文件，包含隐藏文件
ls -al
```

### cd（change directory）

变换工作目录。

```shell
# 查看更多命令参数
cd  --help
# 切换目录
cd file-chown/	#切换到当前目录下的file-chown目录
cd ../			#切换到当前目录的父目录
cd /			#切换到根目录下
```

### pwd（print work directory）

显示目前所在的目录

```shell
# 查看更多命令参数
pwd  --help
# 显示出确实的路径
pwd -P
```

### mkdir（make directory）

创建新目录

```shell
# 查看更多命令参数
mkdir  --help
# 创建新目录以及子目录，p参数用来递归创建目录
mkdir -p file-mkdir/temp
```

### rmdir（remove directory）

删除空的目录

```shell
# 查看更多命令参数
rmdir  --help
# 递归删除空目录
rmdir -p file-rmdir/temp/
```

### cp（copy file）

复制文件或目录

```shell
# 查看更多命令参数
cp  --help
# temp.log文件复制到file-cp目录下，文件已存在则询问
cp -i temp.log file-cp/
```

### rm（remove）

移除文件或目录

```shell
# 查看更多命令参数
rm  --help
# 递归删除当前目录
rm -rf file-rm/
```

### mv（move file）

移动文件与目录，或修改名称

```shell
# 查看更多命令参数
mv  --help
# 修改名称为temp1.log
mv temp.log temp1.log
# 移动文件到file-mv目录下
mv temp1.log file-mv/
```

### cat

由第一行开始显示文件内容

```shell
# 查看更多命令参数
cat  --help
# 列出所有内容以及行号
cat -n temp.log
```

### tac

从最后一行开始显示，可以看出 tac 是 cat 的倒着写！

```shell
# 查看更多命令参数
tac  --help
# 倒着显示所有内容
tac temp.log
```

### nl

显示的时候，顺道输出行号！

```shell
# 查看更多命令参数
nl  --help
# 显示所有内容和行号
nl temp.log
```

### more

一页一页的显示文件内容

```shell
# 查看更多命令参数
more  --help
```

### less

与 more 类似，但是比 more 更好的是，他可以往前翻页！

```shell
# 查看更多命令参数
less  --help
# 查看文件内容
less temp.log	#Enter下一行，Space（空格键）下一页，q推出，上下箭头翻页
```

### head

只看头几行

```shell
# 查看更多命令参数
head  --help
# 展示头10行内容
head -10 temp.log
```

### tail

只看尾巴几行

```shell
# 查看更多命令参数
tail  --help
# 展示尾巴10行内容
tail -10 temp.log
```

### ps

查看进程

```shell
# 查看更多命令参数
ps  --help
# 查看进程
ps
```

## 磁盘管理

磁盘管理好坏直接关系到整个系统的性能问题。

### df

列出文件系统的整体磁盘使用量

```shell
# 查看更多命令参数
tail  --help
# 易读的方式展示出整体磁盘容量
df -h
```

### du

检查文件和目录磁盘空间使用量

```shell
# 查看更多命令参数
du  --help
# 易读的方式展示文件使用的容量
du -h temp.log
```

## 用户/分组管理

Linux系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。

### useradd

添加新的用户账号

```shell
# 查看更多命令参数
useradd  --help
# 创建一个用户26761，为用户分配主目录/home/26761
useradd –d  /home/26761 -m 26761
```

### userdel

删除帐号

```shell
# 查看更多命令参数
userdel  --help
# 删除用户主目录，-r参数同时删除用户主目录
userdel -r 26761
```

### usermod

修改帐号

```shell
# 查看更多命令参数
usermod  --help
# 将用户26761的主目录改为/home/26761temp，用户组改为temp
usermod -d /home/26761temp –g temp 26761
```

### passwd

用户密码的管理

```shell
# 查看更多命令参数
passwd  --help
# 删除用户26761的密码，不再允许该用户登录
passwd -d 26761
# l锁定密码，u密码解锁，d删除密码，-f强迫修改密码
```

