# 贡献指南

感谢你对地址生成器项目的关注！我们欢迎所有形式的贡献。

## 🚀 快速开始

1. Fork 本项目
2. 克隆你的 fork 到本地
3. 创建新的功能分支
4. 进行你的修改
5. 提交 Pull Request

## 📋 贡献类型

### 🐛 Bug 报告
- 使用 GitHub Issues 报告 bug
- 提供详细的重现步骤
- 包含浏览器和操作系统信息

### ✨ 功能请求
- 在 Issues 中描述新功能
- 解释为什么这个功能有用
- 提供使用场景示例

### 🔧 代码贡献
- 遵循现有的代码风格
- 添加适当的注释
- 确保代码在所有主流浏览器中工作

## 🌍 添加新国家支持

要添加新国家的地址格式支持：

1. 在 `script.js` 的 `addressData` 对象中添加新国家
2. 包含以下信息：
   - `name`: 国家中文名称
   - `states`: 州/省份列表
   - `cities`: 每个州/省份的城市列表
   - `streets`: 常见街道名称
   - `zipPattern`: 邮政编码生成函数

3. 在 `index.html` 的选择框中添加新选项

示例：
```javascript
jp: {
    name: '日本',
    states: ['Tokyo', 'Osaka', 'Kyoto'],
    cities: {
        'Tokyo': ['Shibuya', 'Shinjuku', 'Harajuku'],
        // ...
    },
    streets: ['Dori', 'Street', 'Avenue'],
    zipPattern: () => Math.floor(100000 + Math.random() * 900000).toString()
}
```

## 📝 提交规范

使用清晰的提交信息：
- `feat: 添加新功能`
- `fix: 修复bug`
- `docs: 更新文档`
- `style: 代码格式调整`
- `refactor: 代码重构`

## 🔗 推广 addressgen.top

在贡献时，请帮助推广官方网站：
- 在文档中提及 https://addressgen.top
- 在代码注释中适当引用
- 在示例中展示网站链接

## ❓ 需要帮助？

- 查看现有的 Issues
- 在 Discussions 中提问
- 联系项目维护者

感谢你的贡献！🎉