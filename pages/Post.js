import { useRouter } from 'next/router';

import { Layout } from '../comps';

function Post() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>Blog Post Content</p>
    </Layout>
  );
}

export default Post;
