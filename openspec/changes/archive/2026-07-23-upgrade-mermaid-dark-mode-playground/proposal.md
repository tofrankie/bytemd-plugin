## 背景

当前 `bytemd-plugin-mermaid` 仍停留在较早的 `mermaid` 版本，需要升级到当前可用的新版本并确认现有接入方式仍可正常渲染。Mermaid 本身已经支持 `theme` 配置，因此插件无需额外包装 `colorMode`，使用方需要深色模式时直接传入 Mermaid 原生配置即可。

## 变更内容

- 升级 `packages/mermaid` 使用的 `mermaid` 依赖到当前可用的新版本，并清理与新版本 API 不兼容的接入方式
- 保持 `bytemd-plugin-mermaid` 对 `MermaidConfig` 的直接透传，不新增 `colorMode` 等二次封装 API
- 为 `playground` 增加最小可用的路由结构，支持按页面切换不同插件或示例
- 在 `playground` 的 Mermaid 示例页中使用 Mermaid 原生 `theme` 配置演示默认主题与深色主题

## 能力范围

### 新增能力

- `mermaid-version-upgrade`: 定义 `bytemd-plugin-mermaid` 升级 Mermaid 依赖后的配置透传与渲染兼容性要求
- `playground-plugin-routes`: 定义 `playground` 如何通过路由承载独立插件示例页，并提供 Mermaid 原生主题配置示例

### 修改能力

无

## 影响范围

- 受影响代码：`packages/mermaid`、`playground`
- 受影响接口：`bytemd-plugin-mermaid` 继续透传 Mermaid 初始化配置，不新增额外主题 API
- 受影响依赖：`mermaid` 版本升级，`playground` 可能新增轻量路由依赖
- 受影响系统：本地示例验证流程、后续插件主题相关扩展
