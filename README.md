# Chatroom Monorepo

一个基于 pnpm workspace 的实时聊天室应用，采用 monorepo 架构。

## 项目结构

```bash
chatroom-monorepo/
├── package.json # 工作空间配置
├── pnpm-workspace.yaml # 工作空间包定义
└── packages/
├─── chatroom-app/ # 前端项目 (Next.js)
│  ├── package.json
│  └── src/
│  └── app/
│  └── page.js
└─── chatroom-server/ # 后端项目 (Node.js + Socket.io)
│  ├── package.json
│  └── server.js
```

## 技术栈

- 前端：Next.js + React + Socket.io-client + TailwindCSS
- 后端：Node.js + Socket.io
- 工作空间管理：pnpm workspace

## 开发环境要求

- Node.js >= 16
- pnpm >= 8

## 安装

```bash
# 安装 pnpm（如果未安装）
npm install -g pnpm

# 安装所有依赖
pnpm install
```

## 开发命令

```bash
# 启动所有服务（递归方式）
pnpm dev

# 启动所有服务（显式方式）
pnpm dev:all

# 只启动前端
pnpm dev:client

# 只启动后端
pnpm dev:server
```

## 命令参数说明

### pnpm 常用参数

- `-r, --recursive`
  - 作用：递归执行所有包中的指定命令
  - 示例：`pnpm -r dev` 会执行所有包中的 dev 命令
  - 适用场景：需要同时启动多个服务时

- `--filter <package_name>`
  - 作用：选择特定包执行命令
  - 示例：`pnpm --filter chatroom-app dev`
  - 适用场景：只需要启动某个特定服务时

- `&` (并行执行)
  - 作用：同时执行多个命令
  - 示例：`pnpm run dev:client & pnpm run dev:server`
  - 适用场景：需要同时启动多个独立命令时

## 项目功能

- 实时聊天
- 在线状态显示
- 消息广播
- 多人聊天室

## 开发端口

- 前端：http://localhost:3000
- 后端：http://localhost:4000

## 注意事项

1. 确保所有依赖都已正确安装
2. 前后端需要同时运行才能正常工作
3. 如果遇到端口冲突，请检查相应端口是否被占用
