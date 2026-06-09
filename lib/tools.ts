export const categories = ['全部', 'AI写作', 'AI编程', 'AI绘画', 'AI对话', 'AI营销', 'AI设计']

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  rating: number
  url: string
  price: string
  features: string[]
}

export const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI推出的AI对话助手，支持文本生成、代码编写、图像理解等多种能力，是目前使用最广泛的AI工具。',
    category: 'AI对话',
    rating: 4.8,
    url: 'https://chat.openai.com',
    price: '免费 / Plus $20/月',
    features: ['文本生成', '代码编写', '图像理解', '插件生态'],
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic推出的AI助手，在长文本处理和逻辑推理方面表现突出，特别适合学术写作和代码分析。',
    category: 'AI对话',
    rating: 4.7,
    url: 'https://claude.ai',
    price: '免费 / Pro $20/月',
    features: ['长文本处理', '逻辑推理', '学术写作', '代码分析'],
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI驱动的代码编辑器，内置AI补全和对话功能，支持多种大模型，开发者效率提升利器。',
    category: 'AI编程',
    rating: 4.6,
    url: 'https://cursor.sh',
    price: '免费 / Pro $20/月',
    features: ['AI代码补全', '对话式编程', '多模型支持', '代码重构'],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: '顶级AI绘画工具，生成高质量艺术风格图片，适合设计师和创意工作者。',
    category: 'AI绘画',
    rating: 4.5,
    url: 'https://midjourney.com',
    price: '$10/月起',
    features: ['高质量出图', '艺术风格', '图片变体', '社区灵感'],
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'AI营销内容创作平台，专为营销团队设计，支持博客、社交媒体、广告文案等多种内容类型。',
    category: 'AI营销',
    rating: 4.3,
    url: 'https://jasper.ai',
    price: '$49/月起',
    features: ['营销文案', '博客生成', '品牌语调', '多语言'],
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    description: '微软推出的AI编程助手，集成在VS Code等编辑器中，实时代码补全和建议，开发者必备工具。',
    category: 'AI编程',
    rating: 4.5,
    url: 'https://github.com/features/copilot',
    price: '免费 / Individual $10/月',
    features: ['实时代码补全', '多编辑器支持', '代码解释', '测试生成'],
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Canva内置的AI设计功能，支持一键生成设计模板、图片编辑和品牌套件，设计小白也能出大片。',
    category: 'AI设计',
    rating: 4.4,
    url: 'https://canva.com',
    price: '免费 / Pro $13/月',
    features: ['AI设计生成', '模板库', '品牌套件', '团队协作'],
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Notion内置的AI写作助手，支持摘要、翻译、头脑风暴等功能，知识管理工作流的神器。',
    category: 'AI写作',
    rating: 4.3,
    url: 'https://notion.so',
    price: '免费 / Plus $10/月',
    features: ['智能摘要', '翻译润色', '头脑风暴', '知识管理'],
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: '开源AI绘画模型，支持本地部署和高度自定义，适合技术用户和有隐私需求的创作者。',
    category: 'AI绘画',
    rating: 4.2,
    url: 'https://stability.ai',
    price: '免费（开源）',
    features: ['开源免费', '本地部署', '高度自定义', '模型丰富'],
  },
]
