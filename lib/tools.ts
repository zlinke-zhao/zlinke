export const categories = ['全部', 'AI写作', 'AI编程', 'AI绘画', 'AI对话', 'AI营销', 'AI设计']

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  rating: number
  url: string
}

export const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI推出的AI对话助手，支持文本生成、代码编写、图像理解等多种能力，是目前使用最广泛的AI工具。',
    category: 'AI对话',
    rating: 4.8,
    url: '#affiliate-chatgpt',
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic推出的AI助手，在长文本处理和逻辑推理方面表现突出，特别适合学术写作和代码分析。',
    category: 'AI对话',
    rating: 4.7,
    url: '#affiliate-claude',
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI驱动的代码编辑器，内置AI补全和对话功能，支持多种大模型，开发者效率提升利器。',
    category: 'AI编程',
    rating: 4.6,
    url: '#affiliate-cursor',
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: '顶级AI绘画工具，生成高质量艺术风格图片，适合设计师和创意工作者。',
    category: 'AI绘画',
    rating: 4.5,
    url: '#affiliate-midjourney',
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'AI营销内容创作平台，专为营销团队设计，支持博客、社交媒体、广告文案等多种内容类型。',
    category: 'AI营销',
    rating: 4.3,
    url: '#affiliate-jasper',
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    description: '微软推出的AI编程助手，集成在VS Code等编辑器中，实时代码补全和建议，开发者必备工具。',
    category: 'AI编程',
    rating: 4.5,
    url: '#affiliate-copilot',
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Canva内置的AI设计功能，支持一键生成设计模板、图片编辑和品牌套件，设计小白也能出大片。',
    category: 'AI设计',
    rating: 4.4,
    url: '#affiliate-canva',
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Notion内置的AI写作助手，支持摘要、翻译、头脑风暴等功能，知识管理工作流的神器。',
    category: 'AI写作',
    rating: 4.3,
    url: '#affiliate-notion',
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: '开源AI绘画模型，支持本地部署和高度自定义，适合技术用户和有隐私需求的创作者。',
    category: 'AI绘画',
    rating: 4.2,
    url: '#affiliate-sd',
  },
]
