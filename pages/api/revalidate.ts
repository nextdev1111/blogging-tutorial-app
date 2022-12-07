// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    // checking for the secret
    if(req.headers['secret'] !== process.env.SECRET){
        return res.status(401).json({message: 'Invalid token'})
    }

    try {
        
        await res.revalidate('/')
        await res.revalidate('/blogs')
        await res.revalidate(`/blog/${req.body.data.slug}`)

        return res.json({revalidated: true})

    } catch (error) {
        return res.status(500).send({
            error: 'Error'
        })
    }

}
