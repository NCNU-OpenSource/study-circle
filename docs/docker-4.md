---
id: 'docker-4'
title: Chapter 5. Single-host networking
---

- [導讀進度表](https://docs.google.com/spreadsheets/d/1xjz22UDz_vKW92dJpnGysNCtFiSCYz_wbkHD4B1EQ-0/edit#gid=1726791362)
- [線上共筆](https://hackmd.io/@ncnu-opensource/linux-study-circle/)

## 主題/分享者

- 時間：2021-07-24
- 書籍：Docker in Action 2nd edition
- 導讀主題：Chapter 5. Single-host networking
- 導讀者：@efficacy38

## 投影片

- https://hackmd.io/@ncnu-opensource/linux-study-circle/https%3A%2F%2Fhackmd.io%2FYZdopA_bTKyxTSg20ZROsg%3Fview
- 討論紀錄： https://hackmd.io/@ncnu-opensource/linux-study-circle/%2F%40ncnu-opensource%2FS1b5NxHCd

## 錄影影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/qd7hp3oEKWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 聊天室紀錄

```
00:04:11.290,00:04:14.290
王茂林: 推薦好文：在 Linux 上目前其實也支援了非常多類型種類的 Virtual network interface
https://developers.redhat.com/blog/2018/10/22/introduction-to-linux-interfaces-for-virtual-networking

00:05:07.709,00:05:10.709
he-wen chen: 請問分享畫面可以放大嘛><

00:06:24.124,00:06:27.124
蔡安翔: you can use underlay networks provided by the macvlan or ipvlan network drivers.

The overlay network driver is available on Docker engines where swarm mode is enabled.

00:39:30.843,00:39:33.843
JackKuo: joined containers 是不是類似 host 模式到另一個 container 中？

00:40:50.149,00:40:53.149
王茂林: 有點不太一樣，joined container 是讓 container 共用同一個 network namespace

00:41:25.745,00:41:28.745
王茂林: host mode 是讓 container 跟 host 使用同一個 namespace

00:41:36.577,00:41:39.577
王茂林: https://docs.docker.com/network/host/

00:41:57.095,00:42:00.095
JackKuo: 再問個，bridge 模式 DNS resolver 預設為 127.0.0.11，這是哪來的？dig +trace 的話就失效了

00:42:11.336,00:42:14.336
JackKuo: 了解～

00:43:46.814,00:43:49.814
王茂林: 是用哪一種方式啟用 container 或是建立 container network？

00:44:13.058,00:44:16.058
王茂林: 可能可以參考這個有提到 127.0.0.11 的來由
https://github.com/moby/moby/issues/41003#issuecomment-631423909

00:45:26.888,00:45:29.888
JackKuo: run --network my-net 這樣

00:45:43.992,00:45:46.992
JackKuo: my-net: bridge, local

00:46:38.304,00:46:41.304
張逸于: > 再問個，bridge 模式 DNS resolver 預設為 127.0.0.11，這是哪來的？
docker 幫你做的

00:46:53.203,00:46:56.203
王茂林: 嗯嗯 Yiyu 幫回答惹 👍

00:47:00.816,00:47:03.816
張逸于: 那台 dns 會去 server discovery
container name -> ip

00:47:17.551,00:47:20.551
張逸于: 前提是 container name 要是自己給的 + 網路要是自定義的

00:47:46.439,00:47:49.439
張逸于: *service discovery

00:51:07.955,00:51:10.955
張逸于: 講個無聊的小東西
有時候 127.0.0.1:80 被用掉
可以用 127.0.0.2:80 ~

00:51:29.409,00:51:32.409
張逸于: 雖然只有 127.0.0.1 在 lo 上，但其實 /8 的介面都能綁東西

00:52:40.182,00:52:43.182
JackKuo: 可是 loopback interface 是虛擬的，代表那個 container 原本在 build 的時候就有考慮到 127.0.0.11 會是 DNS resolver?

00:53:49.512,00:53:52.512
張逸于: 127.0.0.11 會是 DNS resolver 是在 /etc/resolv.conf 定義的

這個檔案應該是 docker run 的當下被 docker 覆蓋掉的

00:56:02.861,00:56:05.861
張逸于: 實際上有防火牆啦 但有點複雜XD

00:56:07.736,00:56:10.736
張逸于: docker 會去寫 FORWARD chain

00:56:46.090,00:56:49.090
王茂林: 我理解上原文講的防火牆是指 container level 的防火牆（？

00:57:00.249,00:57:03.249
王茂林: 而不是 host level 的 firewall(iptable rules)

00:57:08.869,00:57:11.869
張逸于: 哦哦！理解

00:59:45.590,00:59:48.590
JackKuo: https://collabnix.com/how-service-discovery-works-under-docker-1-12/

01:00:22.018,01:00:25.018
JackKuo: 這裡面講到 docker 會去捕捉 127.0.0.11 的封包，轉送到 docker daemon 的 embedded DNS resolver 去解析

01:01:06.025,01:01:09.025
JackKuo: 滿好奇是怎麼的捕捉法，可能要去看 code 了


01:13:59.876,01:14:02.876
JackKuo: 看起來是 moby 專案中 TrySetNetworkMount 在檢查這件事情

01:15:03.644,01:15:06.644
JackKuo: 上面那去是回 yiyu "這個檔案應該是 docker run 的當下被 docker 覆蓋掉的"

01:25:47.839,01:25:50.839
he-wen chen: 謝謝分享～

01:25:50.802,01:25:53.802
JackKuo: 感謝大大們
```
