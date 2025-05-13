# Spine 入门

Spine 是一款针对游戏开发的 2D **骨骼动画**编辑工具。

## 切片

将原画的图片放入 [Krita](https://krita.org/zh-cn/) 中进行切片并导出分层图片。

![krita-slice&export](/images/krita-slice&export.png)

## 导入

打开spine新建项目，并导入Krita导出的分层图片。

![image-20250510221630189](/images/spine-import-image.png)

## 骨骼绑定

把图片拖入到 root 下面，生成对应的插槽。root 是根骨骼，根骨骼下可能有子骨骼。

![image-20250510223644947](/images/spine-create-slots.png)

## 调整绘制顺序

导入图片之后发现绘制顺序不对，需要调整一下

![image-20250510225510824](/images/spine-before-adjust.png)

调整插槽位置即可，插槽越靠上图层越靠上展示

![image-20250510225829008](/images/spine-after-adjust.png)

## 图片变换

变换功能包括旋转，移动，缩放以及倾斜等。旋转如下：

![image-20250510230753128](/images/spine-rotate.png)

## 画出骨骼

点击创建按钮，选择根骨骼，按住左键拖动鼠标画出骨骼

![image-20250513174924617](/images/spine-create-bones.png)

## 设置父骨骼（图片绑定骨骼）

1. 选择需要设置父骨骼的图片
2. 点击设置父骨骼按钮
3. 点击图片对应的骨骼
4. 弹窗选择默认选项并点击确认

![image-20250513202354863](/images/spine-setup-bones.png)

移动骨骼图片也跟着移动

![image-20250513203102482](/images/spine-picture-mv-with-bone.png)

## 动画

选择左上角的**设置/动画**按钮进入对应的页面

### 创建

![image-20250513204153168](/images/spine-create-animation.png)

### 动图

#### 移动图片

往上移动

![image-20250513212634725](/images/spine-mv-picture-up.png)

往下移动（步骤与往上移动类似）

#### 移动脑袋

添加初始和终止位置属性

![image-20250513213116193](/images/spine-setup-head-value.png)

往上移动

![image-20250513213504142](/images/spine-setup-head-value-rotate.png)

往下移动（步骤与往上移动类似）

### 最终成品

![turtle](/images/turtle.gif)

