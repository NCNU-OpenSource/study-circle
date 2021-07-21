---
id: 'docker-3'
title: Chapter 3. Software installation simplified
---

- [導讀進度表](https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362)
- [線上共筆](https://hackmd.io/@ncnu-opensource/linux-study-circle/)

## 主題/分享者

- 時間：2021-07-10
- 書籍：Docker in Action 2nd edition
- 導讀主題：Chapter 3. Software installation simplified
- 導讀者：@chofinn

## 投影片

- https://hackmd.io/R-lqOAYnT2aMQ7JkQsRabg
- 討論紀錄： https://hackmd.io/@ncnu-opensource/linux-study-circle/%2FSdJV6qvHTEyaqDDbv56B5Q

## 錄影影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/yxilyY6Cw9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 聊天室紀錄

```
00:01:27.476,00:01:30.476
郭俊甫: 可以放大一些嗎？感謝

00:06:40.097,00:06:43.097
郭俊甫: 請問匯出可以壓縮嗎？

00:08:14.397,00:08:17.397
張逸于: docker save myimage:latest | gzip > myimage_latest.tar.gz

00:09:38.123,00:09:41.123
郭俊甫: 感謝，想說講者簡報 docker load 是匯入壓縮檔，docker save 卻是一般 archive

00:15:40.780,00:15:43.780
he-wen chen: 書的範例 docker load 不是壓縮檔(?)

00:18:04.489,00:18:07.489
張逸于: 官方的解釋看起來是不是壓縮檔都可以處理
Load an image or repository from a tar archive (even if compressed with gzip, bzip2, or xz) from a file or STDIN

00:18:39.133,00:18:42.133
王茂林: https://docs.docker.com/engine/reference/commandline/save/

00:19:08.047,00:19:11.047
王茂林: 也有從 tar.gz load
https://docs.docker.com/engine/reference/commandline/load/#examples

00:20:44.272,00:20:47.272
張逸于: 可能是已經的版本不行 load tar.gz 吧（？）
會怕就先解壓縮
gunzip -c mycontainer.tgz | docker load

00:20:47.512,00:20:50.512
張逸于: *以前

00:37:54.177,00:37:57.177
郭俊甫: 那三段我稍微看懂了

00:38:01.601,00:38:04.601
郭俊甫: 如果有人更理解可以先講

00:42:32.064,00:42:35.064
李悅: Note: 荷文好奇，大家有自架過 docker registry 經驗嗎？

00:44:40.848,00:44:43.848
蔡安翔: 我們公司是用 harbor 存放 image

00:45:07.880,00:45:10.880
蔡安翔: 好處好像就是 可以分不同 role 去設定哪種角色可以 push or pull image

00:45:10.925,00:45:13.925
張逸于: 有用過 harbor 跟 gitlab 的 registry 但沒有遇過什麼特別的雷

00:45:34.786,00:45:37.786
張逸于: dockerhub 有免費版有次數限制 拿來跑 ci 很容易撞到限制

00:45:38.050,00:45:41.050
蔡安翔: 恩恩 沒有特別踩到什麼雷 XD 大概就是權限被卡住 要申請 push 全縣

00:45:45.982,00:45:48.982
張逸于: 網路上好像有 proxy 可以繞過 但我也沒玩過

00:46:06.028,00:46:09.028
張逸于: 對 harbor 可以串第三方權限控制~

00:46:24.692,00:46:27.692
王威: pull 權限也要特別設定～ 之前也遇過權限不夠 pull 不下來

00:46:26.446,00:46:29.446
張逸于: 如果單位有自己的認證中心 應該可以跟 harbor 直接搭配

00:51:36.765,00:51:39.765
蔡安翔: https://stackoverflow.com/questions/32775594/why-does-docker-need-a-union-file-system

00:56:32.039,00:56:35.039
郭俊甫: https://github.com/JackKuo-tw/JackKuo.Mac/blob/master/.tmux.conf

01:01:14.365,01:01:17.365
王威: GitLab Container Registry 也有權限控管的功能

01:03:06.880,01:03:09.880
郭俊甫: 感謝大家～～～

01:03:20.152,01:03:23.152
莊才賢: 感謝~

01:03:25.891,01:03:28.891
wu terry: 感謝！
```
