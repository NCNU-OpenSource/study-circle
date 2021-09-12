---
id: 'docker-7'
title: Chapter 7. Packaging software in images
---

- [導讀進度表](https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362)
- [線上共筆](https://hackmd.io/@ncnu-opensource/linux-study-circle/)

## 主題/分享者

- 時間：2021-09-4
- 書籍：Docker in Action 2nd edition
- 導讀主題：Chapter 7. Packaging software in images
- 導讀者：@lotus3698511

## 投影片

- https://hackmd.io/@ncnu-opensource/linux-study-circle/%2FBEbD5g2wSWGpeYJy81iuZA
- 討論紀錄： https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FSJ2rQucbK

## 錄影影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/SN_Ficw2kOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 聊天室紀錄

```
00:00:06.312,00:00:09.312
蔡富亘: 有一種引擎加速的聲音XDDD

00:00:12.419,00:00:15.419
郭俊甫: 拔掉充電器看看？

00:00:17.916,00:00:20.916
張逸于: 背景有一個雜音滿大聲的

00:00:24.882,00:00:27.882
李悅: 講者筆記 https://hackmd.io/BEbD5g2wSWGpeYJy81iuZA

00:00:40.600,00:00:43.600
郭俊甫: 可以  聽得到

00:00:44.881,00:00:47.881
李悅: 共筆
https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FSJ2rQucbK

00:09:43.109,00:09:46.109
王茂林: initlayer: 主要是初始化這些目錄
https://github.com/moby/moby/blob/master/daemon/initlayer/setup_unix.go#L25-L36

00:22:01.147,00:22:04.147
王茂林: 這不是 A 社大大嗎

00:26:32.595,00:26:35.595
郭俊甫: 想去 MTK "A"sia 惹
Fw: [情報] 聯發科技2022 校招/研替 年薪上看兩百
https://www.ptt.cc/bbs/Soft_Job/M.1630735274.A.443.html

00:46:44.166,00:46:47.166
郭俊甫: 問個：v1.9.1 跟 v1.9.2 的 imaged ID 怎麼都一樣？

00:46:51.326,00:46:54.326
郭俊甫: *imaged ID

00:47:01.026,00:47:04.026
郭俊甫: *image ID ...

00:47:31.544,00:47:34.544
王茂林: 是不是作者沒有換另一串 XD

00:48:14.107,00:48:17.107
郭俊甫: 有可能XDDD

00:48:25.644,00:48:28.644
郭俊甫: 感謝分享～～

00:50:06.318,00:50:09.318
郭俊甫: multi stage 上次 yiyu 有補充～

00:53:02.849,00:53:05.849
洪胤勛: 先用 golang 的 image 去compile 成執行檔，再把執行檔包到別的 image。如果現在換台機器(不同cpu架構)， 那會有影響嘛？還是在docker 裡面就都沒差

00:53:56.578,00:53:59.578
張逸于: 會 

00:54:00.304,00:54:03.304
張逸于: 請參考 https://docs.docker.com/buildx/working-with-buildx/

00:54:01.323,00:54:04.323
郭子緯: 會

00:54:02.482,00:54:05.482
郭俊甫: 基本上是同個 OS 與 CPU arch 就行

00:54:02.702,00:54:05.702
張逸于: buildx

00:55:05.354,00:55:08.354
郭子緯: golang 我記得可以直接 build 成不同架構的

00:55:25.196,00:55:28.196
郭俊甫: 對

00:55:42.456,00:55:45.456
郭俊甫:  I can

00:55:50.858,00:55:53.858
郭俊甫: share

00:56:36.855,00:56:39.855
郭子緯: env GOOS=target-OS GOARCH=target-architecture go build package-import-path

00:56:51.102,00:56:54.102
郭子緯: 限 go 

00:57:06.601,00:57:09.601
郭子緯: 不是 docker 的 feature

00:58:30.540,00:58:33.540
郭俊甫: https://github.com/jackKuo-tw/shudu/blob/master/.github/workflows/main.yml

00:58:48.711,00:58:51.711
王茂林: https://docs.docker.com/buildx/working-with-buildx/

00:59:03.611,00:59:06.611
洪胤勛: 了解  感謝

00:59:38.275,00:59:41.275
郭俊甫: yes

01:00:36.970,01:00:39.970
郭俊甫: 謝謝大家～～

01:00:53.305,01:00:56.305
郭俊甫: 下次是不是撞到中秋連假？
```
