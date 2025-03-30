---
sidebar_position: 1
---

# 安装环境


## 操作系统

- 支持主流 Linux 发行版本（基于 Debian / RedHat，包括国产操作系统）

| 操作系统/架构 | Kernel | 需要的工具 | 最小化配置 |
| ----------- | ----------- |----------- |----------- |
| linux/amd64 | >=4.0 | curl wget tar python | 2核 / 8G 内存 / 60G 存储 |
| linux/arm64 | >=4.0 | curl wget tar python | 2核 / 8G 内存 / 60G 存储 |

## 数据库

```mdx
使用的数据库mysql或oceanbase for mysql存储，redis 缓存
```

| 名称 | 版本 | 字符集 |
| ----------- | ----------- |----------- |
| mysql | >=5.7 | utf-8 |
| oceanbase | >=4.0 | utf-8 |