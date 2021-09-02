---
id: 'docker-6'
title: Chapter 6. Limiting risk with resource controls
---

- [導讀進度表](https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362)
- [線上共筆](https://hackmd.io/@ncnu-opensource/linux-study-circle/)

## 主題/分享者

- 時間：2021-08-21
- 書籍：Docker in Action 2nd edition
- 導讀主題：Chapter 6. Limiting risk with resource controls
- 導讀者：@BryanHsu

## 投影片

- https://hackmd.io/@ncnu-opensource/linux-study-circle/%2Fy6bLfYXFSe6yze055f6XvQ
- 討論紀錄： https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2Fr1SIAJOxY

## 錄影影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/np71Wt6YLOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 聊天室紀錄

```
00:01:46.112,00:01:49.112
蔡安翔: 共筆區在這喔～
https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2Fr1SIAJOxY

00:04:42.861,00:04:45.861
王茂林: 其實官方文件就有提到
https://docs.docker.com/engine/install/linux-postinstall/#your-kernel-does-not-support-cgroup-swap-limit-capabilities

00:04:49.368,00:04:52.368
王茂林: Ubuntu 並沒有啟用這些 kernel 參數

00:09:29.751,00:09:32.751
JackKuo: 請問 CPU 分配是基於 Completely Fair Scheduler (CFS) 嗎？

00:09:40.155,00:09:43.155
王茂林: yes

00:09:43.858,00:09:46.858
王茂林: 正式 CFS

00:09:48.477,00:09:51.477
王茂林: *正是

00:10:07.603,00:10:10.603
王茂林: https://docs.docker.com/config/containers/resource_constraints/#configure-the-default-cfs-scheduler

00:11:23.998,00:11:26.998
JackKuo: 請問 device pass 進去是 passthrough嗎？還是 virtio 之類的？

00:13:19.740,00:13:22.740
張逸于: share memory & message passing 吧 XD

00:13:54.640,00:13:57.640
張逸于: semaphore 是 synchronization 的東西XD

00:18:07.030,00:18:10.030
張逸于: 現在 docker 有 user namespace 了~ 
但要自己手動打開

00:29:41.337,00:29:44.337
張逸于: 叫做 Linux Capability

00:29:51.485,00:29:54.485
王茂林: https://man7.org/linux/man-pages/man7/capabilities.7.html

00:33:41.699,00:33:44.699
蔡富亘: Linux 核心功能（？

00:35:58.793,00:36:01.793
JackKuo: 像是有些功能、工具需要使用到，但又不想裝在本機弄髒環境，就會用給這種 container 很多權限

00:36:29.436,00:36:32.436
蔡富亘: SELinux 不是 CentOS 一裝好就關掉的東西嗎（？

00:43:56.818,00:43:59.818
王茂林: https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/resource_management_guide/sec-cpu

00:44:03.289,00:44:06.289
王茂林: 關於 CFS 有空可以看看

00:44:37.888,00:44:40.888
王茂林: openshift 大大 OAO

00:44:46.599,00:44:49.599
蔡富亘: openshift 大大 OAO

00:47:03.412,00:47:06.412
王茂林: docker user namespace 
https://docs.docker.com/engine/security/userns-remap/

00:51:52.060,00:51:55.060
JackKuo: 感謝大大們的知識分享、解惑

00:52:05.285,00:52:08.285
張逸于: 謝謝今日分享者~

00:52:07.796,00:52:10.796
張逸于: 大家掰掰
```
