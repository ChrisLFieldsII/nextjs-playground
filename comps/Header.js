import Link from 'next/link';

const styles = {
  link: {
    marginRight: 10,
  },
  container: {
    marginBottom: 20,
  },
};

function Header() {
  return (
    <div style={styles.container}>
      <Link href="/">
        <a style={styles.link}>Home</a>
      </Link>
      <Link href="/about">
        <a style={styles.link}>About</a>
      </Link>
    </div>
  );
}

export default Header;
