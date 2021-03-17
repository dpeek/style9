import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import style9 from 'style9';

const sytles = style9.create({
  body: {
    // contrived example, but with UI Kit would define vars, base styles, theme
    backgroundColor: 'OrangeRed'
  }
});

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body className={sytles('body')}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
