import { useTypedMutation, useTypedQuery } from '@tutorial-sst/graphql/urql'
import { addComment } from '@tutorial-sst/services/core/article'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import Empty from '../components/Empty'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import * as styles from './Article.css'

interface CommentForm {
  text: string
  articleID: string
}

export default function Article() {
  const { id = '' } = useParams()

  const context = useMemo(() => ({ additionalTypenames: ['Comment'] }), [])

  const [article] = useTypedQuery({
    query: {
      article: [
        { articleID: id },
        {
          id: true,
          url: true,
          title: true,
          comments: {
            id: true,
            text: true,
          },
        },
      ],
    },
    context,
  })

  // @ts-ignore: ?
  const [result, addComment] = useTypedMutation((opts: CommentForm) => {
    return {
      addComment: [
        {
          text: opts.text,
          articleID: opts.articleID,
        },
        {
          id: true,
        },
      ],
    }
  })

  return (
    <div>
      <Navbar />
      {article.fetching ? (
        <Loading />
      ) : article.data?.article ? (
        <div className={styles.article}>
          <h1>{article.data.article.title}</h1>
          <p>
            <a target='_blank' href={article.data.article.url} rel='noreferrer'>
              {article.data.article.url}
            </a>
          </p>

          <ol className={styles.comments}>
            {article.data.article.comments &&
              // @ts-ignore: Array<{id:string;text:string}>
              article.data.article.comments?.map((comment) => (
                <li key={comment.id} className={styles.comment}>
                  {comment.text}
                </li>
              ))}
          </ol>

          <form
            className={styles.form}
            onSubmit={async (e) => {
              e.preventDefault()

              const fd = new FormData(e.currentTarget)
              const text = fd.get('text')?.toString()

              e.currentTarget.reset()

              if (text) {
                await addComment({ text, articleID: id })
              }
            }}
          >
            <textarea name='text' className={styles.field}></textarea>
            <Button
              type='submit'
              variant='secondary'
              className={styles.button}
              loading={result.fetching || article.stale}
            >
              Add Comment
            </Button>
          </form>
        </div>
      ) : (
        <Empty>Not Found</Empty>
      )}
    </div>
  )
}
