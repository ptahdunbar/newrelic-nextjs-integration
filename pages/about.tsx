import Link from "next/link";

import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      <p>I am About page</p>
    </Layout>
  );
}

export default About;
