import { rest } from 'msw'

const messages = [
  {
    id: '7dadd1ec-c7c9-431b-b875-856c093cecce',
    text: 'mais uma',
    created_at: '2023-07-08T14:15:23.312Z',
    user_id: '91ff4e63-35db-4fb5-8804',
    user: {
      id: '91ff4e63-35db-4fb5-8804',
      name: 'user name',
      github_id: 'secretid',
      avatar_url: 'https://avatars.githubusercontent.com/u/avatar-user',
      login: 'user'
    }
  }
]
export const handlers = [
  rest.get('http://localhost:4800/messages/last3', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(messages))
  })
]
