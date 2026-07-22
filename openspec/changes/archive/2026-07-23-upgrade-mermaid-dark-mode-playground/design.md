## 背景

当前 `packages/mermaid` 将插件参数整体视为 `MermaidConfig` 透传给 `m.initialize()`，这与 Mermaid 自身配置模型一致。升级到 Mermaid 新版本后，需要确认初始化和渲染 API 仍然兼容，同时在 `playground` 中提供一个直接使用 Mermaid 原生 `theme` 配置的示例。

这次变更同时覆盖依赖升级、插件接入兼容和示例验证入口，属于跨 `packages/mermaid` 与 `playground` 的联动调整。

## 目标 / 非目标

**目标：**

- 升级 `mermaid` 依赖并确认插件接入方式兼容新版本 API
- 保持 `BytemdPluginMermaidOptions` 继承 `MermaidConfig`，继续将 Mermaid 原生配置透传给 `mermaid.initialize()`
- 为 `playground` 引入最小化路由结构，让不同插件示例可以按页面隔离展示
- 增加一个 `mermaid` 示例页，用于验证 Mermaid 原生 `theme` 配置和渲染结果

**非目标：**

- 不在本次变更中新增 `colorMode`、`themeMode` 等二次封装主题 API
- 不处理自动读取系统主题或监听宿主主题变化的响应式机制
- 不把 `playground` 演进成完整组件文档站，只提供最小测试入口

## 关键决策

### 1. 保持 Mermaid 原生配置透传，不新增主题包装参数

Mermaid 已经提供 `theme` 等配置字段，插件继续将调用方传入的 `MermaidConfig` 透传给 `m.initialize()`。使用方需要深色模式时，直接传入 `theme: 'dark'`，避免插件额外定义一层与 Mermaid 原生配置重复的 API。

这样可以减少维护成本，也避免未来 Mermaid 主题能力扩展时插件侧再次跟进映射关系。

备选方案：

- 增加 `colorMode: 'light' | 'dark'`
  这个方案语义直观，但与 Mermaid 原生 `theme` 能力重复，也会引入配置优先级和文档解释成本

### 2. 维持单次懒加载初始化模型，并适配新版本渲染结果

现有实现只在首次遇到 `language-mermaid` 代码块时动态导入 `mermaid` 并初始化，这种体积与加载时机都比较合适，本次继续复用。升级后需要确认 `render()` 返回值、`bindFunctions` 等新版本行为能被正确处理。

备选方案：

- 每次渲染前重新调用初始化
  这样理论上更灵活，但会提高复杂度，也更容易引入重复初始化副作用

### 3. `playground` 使用轻量级前端路由承载插件示例页

`playground` 当前是 Vite + React 应用，适合增加一个轻量路由依赖，将主页改成“示例列表 + 单独示例页”的结构。每个示例页独立声明自己的 markdown、插件数组和控制项，避免把所有插件测试逻辑继续堆到一个 `App` 组件里。

对于本次变更，至少提供：

- 一个现有示例页的迁移版本，确保路由化不是只服务 `mermaid`
- 一个 `mermaid` 示例页，支持切换 Mermaid 原生 `theme` 并渲染同一段示例图表

备选方案：

- 不引入路由，只在单页里做 tab/下拉切换
  这会让示例状态和页面结构继续耦合，不利于后续按插件扩展示例，也不符合“引入路由”的目标

## 风险与权衡

- [`mermaid` 升级可能带来初始化或渲染 API 差异] → 通过先审视当前调用点、锁定最小接入面并在 playground 中补最小示例页降低风险
- [额外主题包装 API 与 Mermaid 原生配置重复] → 不新增包装参数，README 和 playground 示例直接展示 `theme`
- [引入路由会让 playground 结构比当前单页更复杂] → 保持只包含最小入口、列表页和两个示例页，避免提前抽象过度
- [示例测试只能覆盖典型场景，无法替代全部宿主环境验证] → 用 OpenSpec 场景明确“最小验证能力”，后续真实集成问题再按能力扩展

## 迁移计划

1. 先升级 `packages/mermaid` 的依赖，确保现有默认用法仍可运行
2. 再在 `playground` 中引入路由并迁移现有示例，补上 `mermaid` 示例页
3. 最后更新文档说明，验证 Mermaid 原生主题配置下的渲染结果
4. 如升级后出现兼容问题，优先回退 `mermaid` 版本并保留 playground 路由结构

## 待确认问题

- `mermaid` 新版本是否需要额外的 CSS 或运行时初始化参数，仍需在实现阶段结合实际渲染结果确认
