---
id: "docker-1"
title: Chapter 1. Welcome to Docker
---

- [導讀進度表](https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362)
- [線上共筆](https://hackmd.io/@ncnu-opensource/linux-study-circle/)

## 主題/分享者

- 時間：2021-06-12
- 書籍：Docker in Action 2nd edition
- 導讀主題：Chapter 1. Welcome to Docker
- 導讀者：@YuerLee

## 投影片

- https://hackmd.io/@YuerLee/docker-in-action-ch2
- 討論紀錄：https://hackmd.io/@ncnu-opensource/linux-study-circle/%2FBy9kIVGou

## 錄影影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/ggJDE32aauM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 聊天室紀錄

```
00:00:27.546,00:00:30.546
王茂林: https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362

00:04:05.214,00:04:08.214
王茂林: 是說 second 縮寫應該是 2nd XD

00:14:33.462,00:14:36.462
JackKuo: container 與 host 共用作業系統核心（kernel）
虛擬機則否

00:15:25.045,00:15:28.045
JackKuo: 比如說，你目前 host 機器使用 Ubuntu 且 kernel 為 5.2 版，那麼你不管執行哪種 container，kernel 一定都會是 5.2 版

00:16:00.211,00:16:03.211
JackKuo: 最簡單的實作可參考：https://coolshell.cn/articles/17010.html?fbclid=IwAR0tSoxRYweXt61X7hDzg-0lIJ-bQpFipaAq6_2LOzWcynFvswNrQf7FxaY

00:16:30.315,00:16:33.315
張逸于: 也有混合做法 有興趣可以查 kata-container

00:22:48.366,00:22:51.366
JackKuo: 在不同 host 系統上，Docker 應該都是基於 Linux 吧！？還是有不同的？

00:22:49.678,00:22:52.678
郭子緯: windows 與 linux 不能混用喔

00:23:15.941,00:23:18.941
張逸于: 在其他作業系統的實作都是開 VM 裡面跑 Linux XD

00:23:41.916,00:23:44.916
郭子緯: mac 有兩版

00:24:01.425,00:24:04.425
郭子緯: magic 版 與 vm 版

00:24:06.115,00:24:09.115
張逸于: macOS 上有 Docker 有開始在實作 HyperKit 了

00:24:15.362,00:24:18.362
JackKuo: magic?

00:24:20.053,00:24:23.053
張逸于: magic 就是 HyperKit ㄅ

00:25:43.816,00:25:46.816
JackKuo: Docker for Windows 裡面除了跑 ELF，也能跑 PE 嘛？

00:30:03.802,00:30:06.802
王茂林: 原來是開安祥外掛

00:31:30.167,00:31:33.167
郭子緯: windows container https://docs.microsoft.com/en-us/virtualization/windowscontainers/about/

00:33:18.195,00:33:21.195
JackKuo: orchestration 在資訊領域，通常是指管理調度資源

00:34:03.026,00:34:06.026
王茂林: https://www.redhat.com/en/topics/automation/what-is-orchestration

00:36:53.464,00:36:56.464
王茂林: https://hackmd.io/Wm2DFWayTWyGk3g8BRK2WA

00:36:53.476,00:36:56.476
郭子緯: 我說的 magic 是 linuxkit

00:39:04.238,00:39:07.238
JackKuo: yiyu，交大資工大大

00:40:33.861,00:40:36.861
王茂林: 大家可以來此共筆紀錄討論
https://hackmd.io/Wm2DFWayTWyGk3g8BRK2WA

00:43:08.159,00:43:11.159
JackKuo: 那 capability 怎麼管理？

00:43:26.440,00:43:29.440
王茂林: https://podman.io/

00:43:50.098,00:43:53.098
王茂林: https://docs.docker.com/engine/security/rootless/

00:45:05.399,00:45:08.399
JackKuo: 不會變成殭屍直接掛到 PID 1 嘛？

00:48:36.178,00:48:39.178
JackKuo: high availability

00:51:12.064,00:51:15.064
JackKuo: https://www.dropbox.com/s/ibcwpxfwna21j7h/Virtualization.pptx?dl=0

00:53:11.936,00:53:14.936
BlueT M. Lien: https://hackmd.io/@ncnu-opensource/book/https%3A%2F%2Fhackmd.io%2F3EevJHwRSnep8pdlXd7YrA

00:54:19.039,00:54:22.039
JackKuo: VM ware 也有類似於 kata 的技術

00:54:37.510,00:54:40.510
JackKuo: 詳細名稱我忘了，之前演講聽到的

00:54:49.057,00:54:52.057
李悅: 2ed => second edition
我也是這次才知道這種用法

01:08:27.024,01:08:30.024
王茂林: https://en.wikipedia.org/wiki/LXC

01:09:13.566,01:09:16.566
JackKuo: 原來 LSA 都有，真是超前部署

01:10:05.892,01:10:08.892
JackKuo: 之前聽說 LXC 比較容易讓整台主機被打下？

01:10:30.847,01:10:33.847
JackKuo: 原來乳此

01:11:28.801,01:11:31.801
JackKuo: 所以 kernel 版本也都可以不同？

01:11:39.910,01:11:42.910
JackKuo: 那可以巢狀虛擬化嗎？

01:11:51.527,01:11:54.527
JackKuo: cool

01:13:26.783,01:13:29.783
JackKuo: 一顆 LXC 打天下欸，好酷

01:14:07.453,01:14:10.453
JackKuo: proxmox

01:14:29.855,01:14:32.855
JackKuo: 好用！還可以玩 cluster

01:17:15.286,01:17:18.286
林哲宏: LSA 是什摸？

01:17:52.840,01:17:55.840
Jiun-Jie Wang: Linux System Administraction，在暨大的一門兩學期的課程

01:17:57.665,01:18:00.665
JackKuo: https://lsa.moli.rocks/docs/readme

01:18:29.165,01:18:32.165
Jiun-Jie Wang: 奇淫技法

01:18:57.102,01:19:00.102
林哲宏: 豪～ 太帥了

01:19:11.469,01:19:14.469
林哲宏: ＱＡＱ

01:20:00.277,01:20:03.277
Jiun-Jie Wang:  PS: 近兩三年內容越來越屌了

01:23:22.887,01:23:25.887
郭子緯: containerd-shim 是做啥啊

01:24:51.066,01:24:54.066
張逸于: 用來跟 k8s kubelet 溝通

01:24:54.225,01:24:57.225
張逸于: 符合 CRI

01:25:02.964,01:25:05.964
郭子緯: 讚讚

01:25:05.144,01:25:08.144
JackKuo: 感謝大大們分享知識

```