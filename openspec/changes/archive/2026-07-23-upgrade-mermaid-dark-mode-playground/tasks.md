## 1. Mermaid 插件升级

- [x] 1.1 升级 `packages/mermaid` 的 `mermaid` 依赖到目标新版本
- [x] 1.2 保持 `BytemdPluginMermaidOptions` 对 Mermaid 原生配置的透传，不新增 `colorMode`
- [x] 1.3 适配 Mermaid 新版本初始化与渲染返回值
- [x] 1.4 更新 `packages/mermaid/README.md` 中的用法示例和参数说明

## 2. Playground 路由化示例

- [x] 2.1 为 `playground` 引入最小路由依赖并搭建基础路由结构
- [x] 2.2 将现有 `github-alerts` 示例迁移为独立路由页面
- [x] 2.3 新增 `mermaid` 示例路由并接入 `bytemd-plugin-mermaid`
- [x] 2.4 在 `mermaid` 示例页通过 Mermaid 原生 `theme` 配置提供默认/深色主题切换入口

## 3. 验证与收尾

- [x] 3.1 通过 playground 示例页人工验证 Mermaid 原生主题配置
- [x] 3.2 本地运行构建或测试命令，确认插件与 playground 均可正常产出
- [x] 3.3 检查 OpenSpec 变更文件完整性，确认可以进入实现阶段
