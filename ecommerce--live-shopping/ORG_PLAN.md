# 🛍️ Ecommerce Live-Shopping 电商带货团队 — 组织架构方案

> 基于调研结论设计的最小团队架构
> 原则：极简、可执行、先跑通闭环

---

## 一、调研结论回顾

```
平台：小红书(主) + 抖音(辅)
模式：图文带货为主，短视频带货为辅
品类：零食 + 日用百货
货源：1688一件代发
内容：AI辅助脚本 + 供应商图/实拍图 + 挂链接
投入：0元启动
```

---

## 二、最小团队架构（2-3个角色）

### 为什么只要2-3个角色？

电商带货的最小闭环本质上是 **选品 → 做内容 → 发布变现**，这在 OpenOPC 框架下只需要极少数角色即可跑通：

```
能走通的最小流程：
  选品（找到好卖的货）
    → 做内容（写文案+做图片/视频）
      → 发布（发笔记/视频+挂链接）
        → 看数据（哪些内容/产品转化好）
          → 优化选品（回到第一步）
```

### 推荐团队结构

```
       ┌─────────────────────┐
       │  ecommerce-lead     │  ← 统管全局，做选品决策+数据分析
       │  (电商负责人)       │
       └────────┬────────────┘
                │
    ┌───────────┼───────────┐
    │           │           │
    ▼           ▼           ▼
┌────────┐ ┌────────┐ ┌──────────┐
│content │ │visual  │ │commerce  │  ← 阶段二新增（暂时可选）
│creator │ │designer│ │ops       │
│内容创作│ │视觉设计│ │电商运营   │
└────────┘ └────────┘ └──────────┘
```

---

## 三、角色定义

### 角色1：ecommerce-lead（电商负责人）⭐ 核心

| 属性 | 说明 |
|---|---|
| **职责** | 选品决策、数据分析、策略调整、团队协调 |
| **日常工作** | ① 在1688/拼多多找潜力商品<br>② 分析内容数据（曝光/点击/转化）做选品迭代<br>③ 管理小红书+抖音双账号的策略方向<br>④ 对接供应商解决发货/售后问题 |
| **技能要求** | 数据分析、选品sense、供应链管理、平台规则理解 |
| **对应现实角色** | 选品经理 + 数据分析师 + 运营总监的合体 |
| **OpenOPC Agent** | Native（需要浏览器工具做选品搜索） |
| **前置依赖** | 无 |

### 角色2：content-creator（内容创作）

| 属性 | 说明 |
|---|---|
| **职责** | 撰写图文/短视频文案、产品测评脚本、标题优化 |
| **日常工作** | ① 根据选品写种草文案<br>② 写短视频口播脚本<br>③ A/B测试不同标题/文案风格<br>④ 研究爆款内容模仿优化 |
| **技能要求** | 文案能力、标题党sense、SEO理解 |
| **对应现实角色** | 内容编辑 + 文案策划 |
| **OpenOPC Agent** | Native |
| **前置依赖** | ecommerce-lead提供选品清单 |

### 角色3：visual-designer（视觉设计）

| 属性 | 说明 |
|---|---|
| **职责** | 制作图文笔记图片、短视频剪辑、封面设计 |
| **日常工作** | ① 产品图处理/美化<br>② 小红书封面图制作（3:4比例）<br>③ 短视频剪辑+字幕<br>④ 统一视觉风格 |
| **技能要求** | 图片处理、视频剪辑、审美能力 |
| **对应现实角色** | 视觉设计师 + 视频剪辑师 |
| **OpenOPC Agent** | Native |
| **前置依赖** | content-creator提供文案方向 |

### 角色4（可选，阶段二）：commerce-ops（电商运营）

| 属性 | 说明 |
|---|---|
| **职责** | 店铺管理、客服、订单跟踪、佣金结算 |
| **日常工作** | ① 管理商品橱窗/小店商品上下架<br>② 处理用户咨询和售后<br>③ 跟踪订单状态<br>④ 佣金对账 |
| **技能要求** | 平台后台操作、客服技巧 |
| **OpenOPC Agent** | Native |
| **前置依赖** | 有稳定订单量后再启用 |
| **启用时机** | 日均订单 > 20单 或客服量明显增多 |

---

## 四、阶段规划

### 🚀 阶段一：最小启动（第1-2周）

仅启用 **2个角色**：

```
ecommerce-lead + content-creator
```

- ecommerce-lead 兼任 visual-designer 的职责（用Canva/AI工具快速做图）
- content-creator 负责所有文案
- 目的：最快速度跑通 选品→内容→出单 的完整链路

### 📈 阶段二：加入视觉（第3-4周）

当内容量增大后，启用 **3个角色**：

```
ecommerce-lead + content-creator + visual-designer
```

- visual-designer 专注图片/视频质量
- content-creator 专注文案和策略
- ecommerce-lead 专注选品和数据

### 📊 阶段三：自动化运营（第5-8周）

当订单稳定后，可选启用 **4个角色**：

```
ecommerce-lead + content-creator + visual-designer + commerce-ops
```

- commerce-ops 接管客服/订单等重复性工作

---

## 五、与现有媒体团队的关系

你已有小红书运营项目（xiaohongshu--operation），角色包括：
- content-creator
- designer  
- social-media-manager

**电商团队可以复用这些角色的经验**，但需要区分：

| 维度 | 媒体团队 | 电商团队 |
|---|---|---|
| 目的 | 内容涨粉、品牌建设 | 直接带货变现 |
| 内容类型 | 知识科普、观点输出 | 产品种草、好物推荐 |
| 成功指标 | 粉丝数、阅读量、互动率 | GMV、转化率、佣金 |
| 角色侧重 | 内容质量 > 转化 | 选品转化 > 内容 |

建议两个项目保持独立但可以互相导流：
- 媒体账号积累粉丝后 → 引导到带货账号
- 电商爆款内容 → 可以在媒体账号转发

---

## 六、OpenOPC 配置

### 项目创建

```bash
# 创建电商项目
opc project create ecommerce--live-shopping

# 创建自定义组织架构
# 在 Office UI → Org → New organization
# 角色: ecommerce-lead, content-creator, visual-designer
# 或使用CLI
```

### 组织架构 YAML（草稿）

```yaml
name: "电商带货最小团队"
version: "1.0"
roles:
  - id: ecommerce-lead
    name: "电商负责人"
    description: "选品决策、数据分析、策略方向"
    reports_to: null  # 顶层
    policy:
      execution: auto
    skill_refs:
      - ecommerce-product-research
      - data-analysis

  - id: content-creator
    name: "内容创作"
    description: "带货文案、脚本、标题优化"
    reports_to: ecommerce-lead
    policy:
      execution: auto
    skill_refs:
      - copywriting
      - social-media-content

  - id: visual-designer
    name: "视觉设计"
    description: "产品图片处理、视频剪辑、封面设计"
    reports_to: ecommerce-lead  # 也可以reports_to content-creator
    policy:
      execution: auto
    skill_refs:
      - image-design
      - video-editing
```

---

## 七、后续待完成（OpenOPC操作）

- [ ] 在 `.opc/config/` 下创建 `company_orgs/org_ecommerce_config.yaml`
- [ ] 为每个角色招募合适的 AI 员工（从 agency-agents 或其他 talent pool）
- [ ] 配置项目工作区 `OpenOPC_workplace/ecommerce--live-shopping/`
- [ ] 创建初始任务：第一轮选品 + 第一波内容制作
- [ ] 跑通第一单！
