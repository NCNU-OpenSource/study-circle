---
id: book
title: 書籍
---

##

* 鳥哥基礎篇

### 章節

* 暫列出鳥哥章節，並摘要一下有什麼可以補充

1. 主機規劃與磁碟分割
    * MBR、GPT、UEFI
4. 首次登入與 man page
5. 檔案權限與目錄配置
    * FHS
    * /var/log 在「登錄檔」章節可以細節討論
6. 檔案與目錄管理
7. 磁碟與檔案系統
    * Mount / Unmount
    * 動態儲存空間配置
8. 壓縮指令的運用
9. vim 程式編輯器
    * 大家互相展示 vimrc 的概念
10. 認識與學習 BASH
    * Streams, Redirection, and Pipes
    * Environment Variable
    * Others Shell
11. 正規表示法與文件格式化
    * grep
    * awk, sed 搭配
12. 學習 shell scripts
    * https://www.shellcheck.net/
13. 帳號管理與 ACL
    * pam 其實很重要，但真的不太會用到
14. Quota, RAID, LVM
    * 這章節我極為不熟 XD
15. at, crontab, anacron
    * `crontab` feat. `rsync`
16. 程序管理與 SELinux
    * Debian/Ubuntu 是怎麼做的？
    * pthread, fork
    * `&`, `[Ctrl]+[Z]`(vs `[Ctrl]+[C]`), `fg`, `bg`, `jobs`
    * `kill`, dpkg error
17. 認識系統服務(daemon)
    * systemV vs systemd
18. 認識與分析登錄檔
    * logs 們
19. 開機流程模組管理與 Loader
    * 極為重要，可多分 2-3 週
    * 可簡單實作: `/etc/rc.d/rc.local`
    * Boot loader (GRUB/GRUB2/Others)
    * Boot Process
20. 基礎系統設定與備份策略
    * Incremental / Differential backup
    * 備援機制(冷熱)
    * Backup 與 Redundancy 差異
21. 原始碼與 Tarball
    * make/configure
    * .deb
22. RPM/YUM/SRPM 軟體管理
    * vs apt
23. X-Window 設定
    * GUI
24. Linux 核心編譯
    * 能編譯 hello world 即可
    * [Add a new system call](https://drive.google.com/file/d/1sprlRr7dfxBGIP3foPOLj9M01Yev5txG/view?usp=sharing)
    * `dmesg`
    * kernel module (姜媽課程內容?)
