---
sidebar_position: 1
---

# Installation environment


## Operating System

-Support mainstream Linux distributions (based on Debian/RedHat, including domestic operating systems)

|Operating System/Architecture | Kernel | Required Tools | Minimize Configuration|
| ----------- | ----------- |----------- |----------- |
|Linux/amd64 |>=4.0 | curl wget tar python | 2 cores/8GB memory/60GB storage|
|Linux/arm64 |>=4.0 | curl wget tar python | 2 cores/8GB memory/60GB storage|

database

```mdx
The database used is MySQL or Oceanbase for MySQL storage, with Redis caching
```

|Name | Version | Character Set|
| ----------- | ----------- |----------- |
| mysql | >=5.7 | utf-8 |
| oceanbase | >=4.0 | utf-8 |