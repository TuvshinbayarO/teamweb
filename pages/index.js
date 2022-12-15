import axios from "axios"
import React from "react"

function Home({posts}) {
  return (
    <div>
      <h1>{posts[0].title}</h1>
      <h1>{posts[1].title}</h1>
    </div>
  )
}

export default Home

export async function getStaticProps(){
  const postsRes = await axios.get('http://localhost:1337/api/posts')

  return{
    props: {
      posts: postsRes.data,
    }
  }
}
