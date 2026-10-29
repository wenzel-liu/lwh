---
title: "Talent Attraction Score框架"
collection: "sci-industrialist"
slug: "talent-attraction-score"
date: "2025-07-04"
updated: "2025-07-04"
lang: "zh-CN"
category: "Talent & institutions"
description: "把人才吸引力拆为基础条件与加速因素，给出评分公式、指标化步骤和校准方法。"
tags: ["Talent & institutions"]
source_id: "225aeaa78a4c8047b060e1180bea9f04"
---

## 1. 公式结构

$$
{TAS = \Bigl[\;B_{\text{core}}\;\Bigr] \times \Bigl(1 + A_{\text{boost}}\Bigr)}
$$

### 1.1 核心基数 BcoreB_{\text{core}}

$$
B_{\text{core}}=\Bigl(      \prod_{k\in\{R,F,I,C\}}      x_k^{\,w_k}  \Bigr)^{\large\frac{1}{\sum w_k}}
$$

- **含义**：对四个基础维度做**加权几何平均**。
- **好处**：
    - 任一维度趋近 0，则 BcoreB_{\text{core}} 快速下滑（“木桶效应”）；
    - 几何平均天然抑制某一维度“用极高分掩盖另一维的缺失”。
- **权重 wkw_k**：可用 AHP、德尔菲或 conjoint 访谈得到（总和不必归 1，但建议 3∶3∶2∶2 之类凸显 F、C 的瓶颈效应）。

### 1.2 加速因子 AboostA_{\text{boost}}

$A_{\text{boost}}
=\sum_{j\in\{G,S,E,P,B\}}
\lambda_j\,y_j$

- **含义**：线性叠加五个加速器得分；λj\lambda_j 为权重（0 – 1）。
- **规范化**：先把每个 yjy_j 映射到 0–1（或 0–10 后再 ÷10），使量纲一致。
- **上限**：理论上 AboostA_{\text{boost}} 可＞1，但通常用 **Sigmoid** 软截断：
    
    $$
    
    A_{\text{boost}}
    =\frac{1}
    {1+\mathrm e^{-k\bigl(A_{\text{boost}}-m\bigr)}}
    \;-\;0.5
    
    $$
    
    避免“加成过大导致失真”。
    

---

## 2. 评分步骤

| 步骤 | 动作 | 关键要点 |
| --- | --- | --- |
| ① **指标化** | 给九维各定义 1-2 个可量化 KPI • 例：F＝「核心研发方向由团队自主决策占比」• 例：C＝「近 10 km 范围内同领域 PhD 数量」 | 选 KPI 时先看可获得数据，再看可操作 |
| ② **归一化** | 把 KPI 变 0–1 或 0–10 | 用专家标杆或五分位数分档 |
| ③ **权重设定** | 访谈目标人才 & 竞对 Benchmark | 小样本深访＋大样本快速问卷 |
| ④ **公式运算** | 求 BcoreB_{\text{core}}、AboostA_{\text{boost}}→TAS | 预留脚本自动跑敏感性 |
| ⑤ **情景测试** | 改动单一维度，看 TAS 提升幅度 | 找到 ROI 最高的改进点 |
| ⑥ **迭代校准** | 每 6–12 个月更新 KPI 数据 & 权重 | 人才画像或外部环境变动要复盘 |

---

## 3. 建议的落地顺序

1. **Quick & Dirty MVP**
    - 用现成 HR 数据＋核心团队访谈，两周做第一版估算。
2. **深度权重校准**
    - 做 15-20 位候选 / 现有人才的 Discrete-Choice 题卡，跑 Logit 模型。
3. **仪表盘可视化**
    - 给 CXO、HRBP 每月更新：红灯→优先投资。
4. **对标外部**
    - 与 3-5 家竞对或海外“灯塔企业”交流数据，动态调整分布。
5. **内外部沟通**
    - 对外：把 TAS 拆成“人才价值主张（EVP）”用于招聘宣介；
    - 内部：依据 TAS 投入预算，形成**数据驱动的 HR 投资决策闭环**。

---

### 一句话总结

> 先“硬门槛几何平均”保证短板不拖后腿，再用“软加速线性叠加”放大亮点，辅以数据-驱动的权重校准与敏感性分析，形成可执行、可度量、可迭代的人才吸引公式。
>