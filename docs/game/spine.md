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

