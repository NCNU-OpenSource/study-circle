---
id: 'docker-8'
title: Chapter 8. Building images automatically with Dockerfiles
---

- [導讀進度表](https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362)
- [線上共筆](https://hackmd.io/@ncnu-opensource/linux-study-circle/)

## 主題/分享者

- 時間：2021-09-25
- 書籍：Docker in Action 2nd edition
- 導讀主題：Chapter 8. Building images automatically with Dockerfiles
- 導讀者：@YinXun

## 投影片

- https://hackmd.io/@ncnu-opensource/linux-study-circle/%2Fe97teUs5QxqHtwLt6BamGQ
- 討論紀錄： https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FByqkNj9mK

## 錄影影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/F_jnLZRVabA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 聊天室紀錄

```
00:00:31.283,00:00:34.283
JackKuo: 我也只讀了一半😅

00:25:53.602,00:25:56.602
JackKuo: 他應該是想說不能 "-v share:/var/log" 這樣

00:26:24.866,00:26:27.866
JackKuo: 將 volume 寫在 Dockerfile 中，應該會直接對應到 /var/lib/docker/volumes

00:27:19.712,00:27:22.712
JackKuo: 好像是後續接參數時會有影響？

00:28:46.545,00:28:49.545
JackKuo: 書裡面有提到 exec form 比較好

00:55:43.448,00:55:46.448
JackKuo: build 時參數只能是 arg，不能給 env

01:00:39.762,01:00:42.762
郭子緯: 我覺得 docker 理論上不會自動把 shell 的變數自動帶入，不然就能透過 on_build 把環境變數偷走了

01:01:55.632,01:01:58.632
JackKuo: 憑著兩年前寫 go 的經驗， go mod init 應該是必要的，你沒做錯

01:05:39.611,01:05:42.611
JackKuo: 請問 heavyweight 是指？

01:10:10.217,01:10:13.217
郭子緯: 我認為，systemd 需要處理的東西很多，例如有些 service 要先啟動，其他 service 才能啟動，在 container 的世界，恨多時候我們只是需要跑一個 service <

01:10:48.452,01:10:51.452
郭子緯: 實在不需要 太多功能的 init 程式

01:22:51.313,01:22:54.313
JackKuo: https://hackmd.io/pyWU4nTvSyK4pqgPFPlQqA?view

01:23:02.774,01:23:05.774
JackKuo: 問題解答大部分都有寫到這了

01:23:41.247,01:23:44.247
JackKuo: docker images --digests

01:54:41.657,01:54:44.657
SafeFly: 感謝～
```