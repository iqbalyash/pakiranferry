import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',              // OpenAI
          'ChatGPT-User',        // OpenAI ChatGPT
          'Google-Extended',     // Google Bard/Gemini
          'CCBot',               // Common Crawl
          'anthropic-ai',        // Anthropic Claude
          'ClaudeBot',           // Anthropic Claude
          'Claude-Web',          // Anthropic Claude
          'cohere-ai',           // Cohere
          'PerplexityBot',       // Perplexity
          'Omgilibot',           // Omgili
          'Bytespider',          // TikTok
          'Applebot-Extended',   // Apple Intelligence
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://pakiranferry.com/sitemap.xml',
  }
}
