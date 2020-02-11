import Link from 'next/link';

import { Layout } from '../comps';

function PostLink({ title }) {
  return (
    <li>
      <Link href="/p/[title]" as={`/p/${title}`}>
        <a className="linkTitle">{title}</a>
      </Link>
    </li>
  );
}

function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Blog 1" />
        <PostLink title="Blog 2" />
        <PostLink title="Blog 3" />
      </ul>
    </Layout>
  );
}

export default Index;
