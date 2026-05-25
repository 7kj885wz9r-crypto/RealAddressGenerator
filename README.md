# 地址生成器 Address Generator · [addressgen.top](https://addressgen.top)

> **免费、开源、覆盖 44 个国家 / 地区与 11 种语言的真实地址生成器（Random / Fake Address Generator）**，专为开发测试、表单验证、电商沙盒、隐私保护等场景设计，全程浏览器端运行，数据不上传。
>
> 🌐 **在线使用** → **<https://addressgen.top>**
>
> 🌏 **多语言文档**：[简体中文](README.md) · [English](README.en.md) · [日本語](README.ja.md) · [Русский](README.ru.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/website-addressgen.top-blue)](https://addressgen.top)
[![Countries](https://img.shields.io/badge/countries-44-success)](https://addressgen.top)
[![Languages](https://img.shields.io/badge/i18n-11%20languages-orange)](https://addressgen.top)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#贡献指南)

---

## 📑 目录

- [它是什么](#-它是什么)
- [核心功能](#-核心功能)
- [支持的国家与地区](#-支持的国家与地区44)
- [特色专属生成器](#-特色专属生成器)
- [典型使用场景](#-典型使用场景)
- [快速开始](#-快速开始)
- [本地部署](#-本地部署)
- [技术栈与架构](#-技术栈与架构)
- [地址格式知识库](#-地址格式知识库)
- [常见问题 FAQ](#-常见问题-faq)
- [贡献指南](#-贡献指南)
- [许可证](#-许可证)

---

## 🌟 它是什么

**Address Generator（addressgen.top）** 是一个 100% 浏览器端运行的随机地址生成工具。它能根据各国邮政体系的真实规则（街道命名、邮编算法、行政区划层级），瞬间生成**格式合规**的虚构地址，并可同步搭配姓名、性别、出生日期、电子邮箱、电话号码等关联个人信息。

与多数只能给出 5~10 个国家、外加随机字符串的"假地址生成器"不同，本项目：

- 严格按照 **44 个国家与地区**各自的邮政编码规则、街道命名习惯生成
- 在各国**真实存在的州 / 省 / 城市**范围内取值，并允许精确筛选
- 同步生成与地区匹配的人名（如日本地址搭配日文名、阿拉伯地址搭配阿拉伯名）
- 提供 **11 种界面语言** 与 **国家专属优化页**，让全球开发者都能用母语操作
- 支持批量导出 CSV / JSON，可直接喂给测试脚本或数据库种子文件

---

## ✨ 核心功能

| 功能 | 详细说明 |
| --- | --- |
| 🏠 **真实格式地址** | 严格遵循各国邮政体系：美国 5 位 ZIP、加拿大 `A1A 1A1` 模式、英国分区邮编、日本「〒XXX-XXXX + 都道府県」等 |
| 🌍 **44 国覆盖** | 北美 2、欧洲 15、亚洲 17、南美 3、大洋洲 2、非洲 5 — 详见下方完整列表 |
| 🧑 **同步个人信息** | 姓名、性别、生日、年龄、邮箱、电话同步生成，且与国家 / 文化匹配 |
| 🎯 **批量与导出** | 单次最多生成多条数据，一键导出 CSV / JSON，便于 seed 数据库 |
| 🗺️ **精确筛选** | 可按州、省、城市、行政区划细分；如美国可锁定加州或纽约州 |
| 💾 **本地收藏** | 常用地址保存在浏览器 LocalStorage，刷新不丢失，可重复调用 |
| 📋 **一键复制** | 整条复制 / 字段独立复制 / JSON 格式复制 |
| 📱 **响应式 UI** | 桌面 / 平板 / 手机适配，移动端也能流畅生成 |
| 🌐 **11 种语言界面** | 中、英、日、俄、韩、西、德、法、葡、意、阿拉伯 |
| ⚡ **零网络依赖** | 纯前端计算，所有逻辑跑在浏览器内，不上传任何数据 |
| 🆓 **完全免费** | MIT 许可，无注册、无水印、无 API 限额，商用免费 |

---

## 🌍 支持的国家与地区（44）

每个国家都有独立优化的子页，含本地化示例、邮编规则说明、街道命名常见词根。点击表中链接直达对应生成器。

### 🌎 北美 North America

| 国家 | 直达入口 | 邮编格式 |
| --- | --- | --- |
| 🇺🇸 美国 United States | [us-address-generator](https://addressgen.top/en/us-address-generator) | `XXXXX` 5 位数字 |
| 🇨🇦 加拿大 Canada | [ca-address-generator](https://addressgen.top/en/ca-address-generator) | `A1A 1A1` 字母+数字交替 |

### 🌍 欧洲 Europe（15）

| 国家 | 入口 | 国家 | 入口 |
| --- | --- | --- | --- |
| 🇬🇧 英国 UK | [uk-address-generator](https://addressgen.top/en/uk-address-generator) | 🇩🇪 德国 Germany | [de-address-generator](https://addressgen.top/en/de-address-generator) |
| 🇫🇷 法国 France | [fr-address-generator](https://addressgen.top/en/fr-address-generator) | 🇮🇹 意大利 Italy | [it-address-generator](https://addressgen.top/en/it-address-generator) |
| 🇪🇸 西班牙 Spain | [es-address-generator](https://addressgen.top/en/es-address-generator) | 🇵🇹 葡萄牙 Portugal | [pt-address-generator](https://addressgen.top/en/pt-address-generator) |
| 🇳🇱 荷兰 Netherlands | [nl-address-generator](https://addressgen.top/en/nl-address-generator) | 🇦🇹 奥地利 Austria | [at-address-generator](https://addressgen.top/en/at-address-generator) |
| 🇨🇭 瑞士 Switzerland | [ch-address-generator](https://addressgen.top/en/ch-address-generator) | 🇸🇪 瑞典 Sweden | [se-address-generator](https://addressgen.top/en/se-address-generator) |
| 🇳🇴 挪威 Norway | [no-address-generator](https://addressgen.top/en/no-address-generator) | 🇵🇱 波兰 Poland | [pl-address-generator](https://addressgen.top/en/pl-address-generator) |
| 🇬🇷 希腊 Greece | [gr-address-generator](https://addressgen.top/en/gr-address-generator) | 🇺🇦 乌克兰 Ukraine | [ua-address-generator](https://addressgen.top/en/ua-address-generator) |
| 🇷🇺 俄罗斯 Russia | [ru-address-generator](https://addressgen.top/en/ru-address-generator) | | |

### 🌏 亚洲 Asia（17）

| 国家 | 入口 | 国家 | 入口 |
| --- | --- | --- | --- |
| 🇯🇵 日本 Japan | [jp-address-generator](https://addressgen.top/en/jp-address-generator) | 🇰🇷 韩国 South Korea | [kr-address-generator](https://addressgen.top/en/kr-address-generator) |
| 🇸🇬 新加坡 Singapore | [sg-address-generator](https://addressgen.top/en/sg-address-generator) | 🇲🇾 马来西亚 Malaysia | [my-address-generator](https://addressgen.top/en/my-address-generator) |
| 🇹🇭 泰国 Thailand | [th-address-generator](https://addressgen.top/en/th-address-generator) | 🇻🇳 越南 Vietnam | [vn-address-generator](https://addressgen.top/en/vn-address-generator) |
| 🇮🇩 印度尼西亚 Indonesia | [id-address-generator](https://addressgen.top/en/id-address-generator) | 🇵🇭 **菲律宾 Philippines** | [ph-address-generator](https://addressgen.top/en/ph-address-generator) |
| 🇮🇳 印度 India | [in-address-generator](https://addressgen.top/en/in-address-generator) | 🇳🇵 尼泊尔 Nepal | [np-address-generator](https://addressgen.top/en/np-address-generator) |
| 🇱🇰 斯里兰卡 Sri Lanka | [lk-address-generator](https://addressgen.top/en/lk-address-generator) | 🇲🇲 缅甸 Myanmar | [mm-address-generator](https://addressgen.top/en/mm-address-generator) |
| 🇹🇷 **土耳其 Turkey** | [tr-address-generator](https://addressgen.top/en/tr-address-generator) | 🇮🇷 伊朗 Iran | [ir-address-generator](https://addressgen.top/en/ir-address-generator) |
| 🇸🇦 沙特阿拉伯 Saudi Arabia | [sa-address-generator](https://addressgen.top/en/sa-address-generator) | 🇦🇪 阿联酋 UAE | [ae-address-generator](https://addressgen.top/en/ae-address-generator) |
| 🇨🇾 塞浦路斯 Cyprus | [cy-address-generator](https://addressgen.top/en/cy-address-generator) | | |

### 🌎 南美 South America（3）

| 国家 | 入口 |
| --- | --- |
| 🇧🇷 巴西 Brazil | [br-address-generator](https://addressgen.top/en/br-address-generator) |
| 🇦🇷 阿根廷 Argentina | [ar-address-generator](https://addressgen.top/en/ar-address-generator) |
| 🇨🇱 智利 Chile | [cl-address-generator](https://addressgen.top/en/cl-address-generator) |

### 🌏 大洋洲 Oceania（2）

| 国家 | 入口 |
| --- | --- |
| 🇦🇺 澳大利亚 Australia | [au-address-generator](https://addressgen.top/en/au-address-generator) |
| 🇳🇿 新西兰 New Zealand | [nz-address-generator](https://addressgen.top/en/nz-address-generator) |

### 🌍 非洲 Africa（5）

| 国家 | 入口 |
| --- | --- |
| 🇳🇬 **尼日利亚 Nigeria** | [ng-address-generator](https://addressgen.top/en/ng-address-generator) |
| 🇿🇦 南非 South Africa | [za-address-generator](https://addressgen.top/en/za-address-generator) |
| 🇪🇬 埃及 Egypt | [eg-address-generator](https://addressgen.top/en/eg-address-generator) |
| 🇲🇦 摩洛哥 Morocco | [ma-address-generator](https://addressgen.top/en/ma-address-generator) |
| 🇲🇺 毛里求斯 Mauritius | [mu-address-generator](https://addressgen.top/en/mu-address-generator) |

---

## 🎯 特色专属生成器

除常规国家生成器外，本项目还提供针对**特定场景深度优化**的专属页：

### 🇺🇸 美国免税州地址生成器（Tax-Free US Address Generator）

👉 **[us-tax-free-address-generator](https://addressgen.top/en/us-tax-free-address-generator)**

美国有 **5 个州不征收州销售税（Sales Tax）**：俄勒冈（Oregon）、新罕布什尔（New Hampshire）、蒙大拿（Montana）、特拉华（Delaware）、阿拉斯加（Alaska）。在跨境电商、海淘转运、Apple Store 数字商品购买等场景中，**使用免税州地址可以合法节省 4%–10% 的州税**。

本工具会自动从上述 5 个州的真实城市与邮编池中生成地址，每条均符合 USPS 邮编规则，可直接用于：

- 🛍️ **海淘转运**：Apple Store、Steam 数字商品、亚马逊数字内容
- 💳 **支付测试**：测试 Stripe / Square / Adyen 等支付网关的税务计算逻辑
- 📊 **电商分析**：构造无州税场景的对照组数据
- 🎓 **税务课程教学**：作为美国销售税体系的教学示例

> ⚠️ 注意：免税州地址**仅适用于数字商品或转运仓地址校验**。实物收货仍需真实地址。

### 🇯🇵 日本地址生成器

👉 **[jp-address-generator](https://addressgen.top/en/jp-address-generator)**

支持「都道府県 → 市区町村 → 番地」三级地址体系，邮编格式严格遵循 `〒XXX-XXXX`，街道名搭配真实存在的日文字符（如「桜通」「本町」），可用于日本 EC 站点（楽天、Amazon.co.jp）、动漫游戏注册测试。

### 🇨🇦 加拿大地址生成器

👉 **[ca-address-generator](https://addressgen.top/en/ca-address-generator)**

精准遵循加拿大邮编 `A1A 1A1` 规则（字母+数字交替，第一位字母对应省份），覆盖全部 10 省 3 地区。

---

## 💼 典型使用场景

### 1. 软件测试与 QA
- 电商下单流程的边界测试（不同国家 / 邮编位数 / 字符集）
- 表单验证：检查正则、必填、长度限制
- 地图 API 联调（Google Maps、高德、Mapbox）的反向地理编码
- 自动化测试（Cypress / Playwright / Selenium）所需的 fixture 数据

### 2. 电商沙盒与支付测试
- Stripe / PayPal / Adyen 测试模式下的多国账单地址
- 税务计算引擎（TaxJar、Avalara）的多区域验证
- 跨境电商的运费计算与库存路由测试
- 美国免税州地址用于数字商品税务对照

### 3. 数据库与开发环境填充
- 为开发 / 预发布环境注入真实感的 seed 数据
- Faker.js / Mockaroo 的开源替代方案
- 演示视频 / 截图所需的占位数据（避免泄露真实用户信息）

### 4. 隐私保护与个人使用
- 不愿透露真实地址时的临时注册（论坛、试用账号）
- 防止营销数据被收集
- 配合临时邮箱、虚拟号码使用

### 5. 教学与研究
- UX / UI 教学的表单示例
- 大学课程中的数据可视化样本
- 国际邮政体系研究、地址解析算法对照

### 6. 创作与娱乐
- 小说、剧本中的角色背景设定
- 桌游 / TRPG 的城镇生成
- 游戏开发中的 NPC 信息填充

---

## 🚀 快速开始

### 在线使用（推荐）

直接访问 **<https://addressgen.top>**，浏览器打开即可，**无需注册、无需安装、无需 API Key**。

### 子页面直达

- 🇺🇸 美国地址：<https://addressgen.top/en/us-address-generator>
- 🇺🇸 美国免税州：<https://addressgen.top/en/us-tax-free-address-generator>
- 🇯🇵 日本地址：<https://addressgen.top/en/jp-address-generator>
- 🇳🇬 尼日利亚：<https://addressgen.top/en/ng-address-generator>
- 🇹🇷 土耳其：<https://addressgen.top/en/tr-address-generator>
- 🇵🇭 菲律宾：<https://addressgen.top/en/ph-address-generator>
- 📚 博客与教程：<https://addressgen.top/en/blog>

---

## 🛠 本地部署

```bash
# 1. 克隆项目
git clone https://github.com/ALioooon/RealAddressGenerator.git
cd RealAddressGenerator

# 2. 安装依赖
npm install

# 3. 启动开发服务器（默认 http://localhost:5173）
npm run dev

# 4. 构建生产版本（输出到 dist/）
npm run build

# 5. 本地预览生产构建
npm run preview
```

### 一键部署到云平台

- **Vercel**：Import 仓库 → 自动识别 Vite → Deploy
- **Cloudflare Pages**：Connect to Git → Build command `npm run build` → Output `dist`
- **GitHub Pages**：构建后将 `dist/` 推送到 `gh-pages` 分支
- **Netlify**：Build command `npm run build` → Publish directory `dist`

---

## 🧰 技术栈与架构

| 层 | 技术 |
| --- | --- |
| 语言 | HTML5、CSS3、JavaScript (ES6+) |
| 布局 | CSS Grid、Flexbox |
| 构建 | [Vite](https://vitejs.dev) |
| 国际化 | i18n（11 种语言资源文件） |
| 数据 | 各国邮编 / 城市 / 街道词根的本地 JSON 库 |
| 部署 | 纯静态，兼容 Vercel / Cloudflare Pages / Netlify / GitHub Pages |
| 隐私 | 100% 浏览器端运行，无后端、无埋点上传 |

---

## 📚 地址格式知识库

项目博客整理了多篇地址与邮政体系科普，既适合开发参考，也是用户理解输出结果的入口：

- 📖 [**US Address Format Explained**](https://addressgen.top/en/blog/us-address-format-explained) — 美国地址五要素（Street / City / State / ZIP / ZIP+4）详解
- 📖 [**Canada Postal Code System Intro**](https://addressgen.top/en/blog/canada-postal-code-system-intro) — 加拿大邮编 `A1A 1A1` 规则与省份对照
- 📖 [**Protect Privacy with Address Generator**](https://addressgen.top/en/blog/protect-privacy-with-address-generator) — 用虚拟地址保护隐私的合规边界

更多文章持续更新：<https://addressgen.top/en/blog>

---

## ⚖️ 与同类工具的差异

| 维度 | addressgen.top | 多数同类工具 |
| --- | --- | --- |
| 国家覆盖 | **44 国** | 通常 5–10 国 |
| 界面语言 | **11 种** | 通常仅英文 |
| 个人信息同步 | ✅ 姓名 / 性别 / 生日 / 邮箱 / 电话 | ⚠️ 仅地址 |
| 美国免税州专属页 | ✅ | ❌ |
| 隐私（纯前端） | ✅ 数据不出浏览器 | ⚠️ 多为服务端生成 |
| 批量导出 | ✅ CSV / JSON | 部分支持 |
| 开源协议 | ✅ MIT，可自托管 | 多为闭源 |
| 注册 / 付费 | 完全免费 | 多有限额或 Pro 版 |

---

## ❓ 常见问题 FAQ

**Q1：生成的地址是真实存在的吗？**
A：街道、邮编、城市的**格式与规则完全真实**，但具体门牌号是随机的，因此**不对应任何真实居所**。可用于格式校验、测试用例，**不能用于实际收发件**。

**Q2：能用于注册 Apple Store / Steam / Amazon 数字商品吗？**
A：能用于测试结账流程，但**正式购买建议使用真实可验证地址**。如果是为了享受美国数字商品免税，请使用 [美国免税州生成器](https://addressgen.top/en/us-tax-free-address-generator)，并确保你账号绑定的支付方式也符合对应州的账单地址要求。

**Q3：会保存我的使用记录、上传我的数据吗？**
A：**绝对不会**。本工具是纯静态前端，所有地址生成逻辑都跑在你的浏览器里，没有后端服务器，没有埋点上传，没有 Cookie 跟踪。代码完全开源，可自行审计。

**Q4：与 Faker.js / Mockaroo 这类工具相比有什么不同？**
A：① 无需写代码、无需配置 schema，开箱即用；② 邮编与城市强关联（Mockaroo 经常出现 "纽约市但邮编是加州" 的错配）；③ 国家覆盖更广，特别是亚非拉新兴市场；④ 同时面向开发者和非技术用户。

**Q5：支持 API / 命令行调用吗？**
A：核心生成逻辑完全开源，可在本地集成到任意 Node.js 项目；公开 REST API 正在规划中，欢迎在 [Issues](https://github.com/ALioooon/RealAddressGenerator/issues) 中反馈具体需求。

**Q6：商用是否免费？需要署名吗？**
A：基于 MIT 协议，**商用、二次开发、私有部署、内嵌到付费产品均免费**，只需在源码中保留版权与许可证声明即可。

**Q7：为什么我刷新页面后收藏的地址消失了？**
A：本地收藏使用浏览器 LocalStorage 存储，如果你启用了"隐私模式"或清理过浏览数据就会被清除。建议导出 JSON 备份。

**Q8：如何申请新增一个国家？**
A：在 GitHub 提一个 Issue，标题写 `[Country Request] 国家名`，附上该国邮编规则、行政区划层级、几个真实城市样例，我们会优先评估并加入排期。

**Q9：可以贡献翻译吗？**
A：非常欢迎！i18n 资源文件位于 `src/i18n/` 目录，对照英文版翻译后提 PR 即可。当前优先需要：印地语、阿拉伯语方言、东南亚小语种。

**Q10：生成的电话号码 / 邮箱是真实的吗？**
A：电话号码符合各国号段规则但**随机生成，不对应真人**；邮箱也是随机字符串拼接公共域名前缀，**不会真实送达**。
---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

```bash
# 1. Fork 后克隆你的副本
git clone https://github.com/<your-username>/RealAddressGenerator.git

# 2. 创建特性分支
git checkout -b feature/AmazingFeature

# 3. 开发与提交
git commit -m 'Add some AmazingFeature'

# 4. 推送并发起 PR
git push origin feature/AmazingFeature
```

**可以贡献的方向：**

- 🌍 新增国家支持（提供邮编规则 + 城市数据）
- 🗣️ 本地化翻译（i18n 资源文件）
- 🎨 UI / UX 改进
- ⚡ 性能优化（特别是大批量生成场景）
- 🐛 Bug 修复
- 📝 文档与博客文章

---

## 📄 许可证

本项目基于 **MIT License** 开源 — 详见 [LICENSE](LICENSE)。

---

## 🔗 相关链接

- 🌐 **官方网站**：<https://addressgen.top>
- 🇺🇸 English：<https://addressgen.top/en>
- 🇯🇵 日本語：<https://addressgen.top/ja>
- 🇰🇷 한국어：<https://addressgen.top/ko>
- 🇩🇪 Deutsch：<https://addressgen.top/de>
- 🇫🇷 Français：<https://addressgen.top/fr>
- 🇪🇸 Español：<https://addressgen.top/es>
- 🇵🇹 Português：<https://addressgen.top/pt>
- 🇮🇹 Italiano：<https://addressgen.top/it>
- 🇸🇦 العربية：<https://addressgen.top/ar>
- 🇷🇺 Русский：<https://addressgen.top/ru>
- 📚 博客：<https://addressgen.top/en/blog>
- 📧 反馈：[GitHub Issues](https://github.com/ALioooon/RealAddressGenerator/issues)
- ⭐ **如果对你有帮助，请点亮一颗 Star！**

---

> ⚠️ **免责声明**：本工具生成的地址、姓名、电话、邮箱**完全虚构**，仅用于**软件测试、开发调试、表单验证、隐私保护等合法用途**。
>
> 严禁用于：身份欺诈、电信诈骗、电商刷单、骚扰他人、伪造证件、注册诈骗账号等任何违法或违反平台条款的行为。**使用者需自行承担因不当使用而产生的全部法律责任**，项目作者与贡献者不对滥用行为承担任何责任。
