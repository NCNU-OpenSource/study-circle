---
id: 'docker-2'
title: Chapter 2. Running software in containers
---

- [導讀進度表](https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362)
- [線上共筆](https://hackmd.io/@ncnu-opensource/linux-study-circle/)

## 主題/分享者

- 時間：2021-06-26
- 書籍：Docker in Action 2nd edition
- 導讀主題：Chapter 2. Running software in containers
- 導讀者：@OliWave

## 投影片

- https://docs.google.com/presentation/d/1zqunmDmKkQASDZaz43nt-vug6U3zjbVVzT9sEVLdCs4/edit?usp=sharing
- 討論紀錄： https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FHybQZRlhd

## 錄影影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/gSoGTtb-ulM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 聊天室紀錄

```
00:00:11.896,00:00:14.896
李悅: Slide: https://docs.google.com/presentation/d/1zqunmDmKkQASDZaz43nt-vug6U3zjbVVzT9sEVLdCs4/edit?usp=sharing

討論共筆：
https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FHybQZRlhd

00:06:25.141,00:06:28.141
李悅: 蛋蛋想進來聽，但加入需要有人按同意加入，有人有看到或知道什麼地方可以按嗎？

00:06:51.764,00:06:54.764
郭子緯: 這個meeting 開的人可以按

00:06:55.523,00:06:58.523
he-wen chen: 直接加入後就會彈出視窗了

00:07:14.652,00:07:17.652
張逸于: 要不要直接打斷講者先讓蛋蛋進來

00:07:44.235,00:07:47.235
郭子緯: 挑一個時機？

00:07:58.887,00:08:01.887
李悅: 需要打斷才能加人？

00:08:40.822,00:08:43.822
王茂林: 還是有誰使用 ncnu edu account

00:08:50.298,00:08:53.298
王茂林: 記得之前歐姊姊有可以看到邀請按鈕？

00:08:50.697,00:08:53.697
李悅: 我是

00:09:37.312,00:09:40.312
郭子緯: 試著請他再進來一次

00:09:52.174,00:09:55.174
郭子緯: 我試試我可不可案

00:12:02.852,00:12:05.852
李悅: 更新：我在 Google Event 加蛋蛋，然後他就有權限進來。

00:12:26.638,00:12:29.638
王茂林: 多半偷懶的時候， 2 碼就可以操作了

00:12:37.624,00:12:40.624
張逸于: 我記得有看過別人1碼

00:17:28.291,00:17:31.291
王茂林: k8s host 1 碼可能太容易重複了 ＸＤ

00:24:13.782,00:24:16.782
王茂林: hardcore service ip address

00:24:36.898,00:24:39.898
王茂林: *hard-code

00:29:00.112,00:29:03.112
王茂林: 也可以用這個 tool 看
https://github.com/wagoodman/dive

00:29:50.739,00:29:53.739
張逸于: 酷

00:35:38.950,00:35:41.950
林哲宏: 綁定 host 資料夾跟使用 volume 有什麼優缺點?

00:41:10.538,00:41:13.538
JackKuo: 👏👏👏

00:41:35.881,00:41:38.881
JackKuo: 可否請 Jerry 介紹一下 dive 呢？感覺不錯用

00:41:47.944,00:41:50.944
王茂林: https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FHybQZRlhd

00:55:03.018,00:55:06.018
王威: https://12factor.net/

00:56:02.791,00:56:05.791
王茂林: https://en.wikipedia.org/wiki/Exponential_backoff

00:56:06.580,00:56:09.580
王茂林: wiki 寫的滿好ㄉ

00:56:08.099,00:56:11.099
王茂林: 可以參考

00:59:12.495,00:59:15.495
JackKuo: 想問個額外的，mount 跟 volume 差在哪？

01:00:31.819,01:00:34.819
JackKuo: 我猜 tmpfs，就看你要映射到哪個基於記憶體的儲存區

01:00:50.666,01:00:53.666
JackKuo: 像是 /tmp, /dev/shm 都是基於記憶體的，不是硬碟

01:01:02.729,01:01:05.729
JackKuo: 感謝萬事通蛋蛋

01:01:20.603,01:01:23.603
郭子緯: https://docs.docker.com/storage/tmpfs/

01:02:02.469,01:02:05.469
王茂林: https://docs.docker.com/storage/tmpfs/

01:02:06.023,01:02:09.023
JackKuo: 我的解決了

01:02:09.050,01:02:12.050
王茂林: 晚了一秒

01:02:11.439,01:02:14.439
王茂林: 一分鐘

01:02:17.136,01:02:20.136
林哲宏: XD

01:04:04.716,01:04:07.716
郭子緯: https://stackoverflow.com/questions/42816048/docker-temporary-files-strategy/55104489

01:04:18.267,01:04:21.267
郭子緯: docker tmp 的處理

01:05:44.576,01:05:47.576
林哲宏: 歇歇大家~

01:05:59.657,01:06:02.657
JackKuo: 感謝大家的分享
```
