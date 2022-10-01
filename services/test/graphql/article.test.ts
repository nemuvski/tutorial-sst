import { Article } from '@tutorial-sst/core/article'
import { createClient } from '@tutorial-sst/graphql/genql'
import { expect, it } from 'vitest'
import { Config } from '../../libs/serverless-stack-config'

it('create an article', async () => {
  const client = createClient({
    url: Config.API_URL + '/graphql',
  })

  const article = await client.mutation({
    createArticle: [
      { title: 'Hello world', url: 'https://example.com' },
      {
        id: true,
      },
    ],
  })
  const list = await Article.list()
  expect(list.find((a) => a.articleID === article.createArticle.id)).not.toBeNull()
})
