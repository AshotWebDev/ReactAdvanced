import Matric from "@/components/shared/cards/Matric";
import parse from 'html-react-parser';


const htmlContent = `
  <p>In the ever-evolving world of technology, blockchain has emerged as a revolutionary ledger technology, offering a foundation for cryptocurrencies like Bitcoin and Ethereum, and extending its potential far beyond, into various sectors including finance, healthcare, and logistics. At its core, blockchain is a distributed database that maintains a continuously growing list of records, known as blocks, which are linked and secured using cryptography. This technology ensures transparency, security, and immutability of data, making it a trusted platform for various digital transactions.</p>
  <h2>Getting Started with Smart Contract Development in Node.js</h2>
  <ul>
    <li><strong>Install Node.js and npm:</strong> Start by downloading and installing the latest version of Node.js from the official website. Node.js installations typically include npm, which is crucial for managing packages.</li>
    <li><strong>Verify Installation:</strong> After installation, open a terminal or command prompt and run the following commands to verify that Node.js and npm are correctly installed:</li>
  </ul>
  <p>In the ever-evolving world of technology, blockchain has emerged as a revolutionary ledger technology, offering a foundation for cryptocurrencies like Bitcoin and Ethereum, and extending its potential far beyond, into various sectors including finance, healthcare, and logistics. At its core, blockchain is a distributed database that maintains a continuously growing list of records, known as blocks, which are linked and secured using cryptography. This technology ensures transparency, security, and immutability of data, making it a trusted platform for various digital transactions.</p>
`;

const post = {
  id: 1,
  title: "Lorem ipsum dolor sit amet",
  url: "https://plusdev.net",
  image: "https://picsum.photos/1000/500",
  htmlDescription: htmlContent,
  cretedAt: "1 minute ago",
  commentsCount: 10,
  viewsCount: 1367,
};

const options = {
  replace: ({name}) => {
    if(name === "script" || name === "style"){
      return <></>
    }
  }
}

const PostPage = () => {
  return (
    <article className="article-content rounded-md bg-white px-4 py-5 xs:px-2 sm:px-4 dark:bg-zinc-900">
      <h1 className="h1-bold mt-4 w-full text-left text-zinc-900 dark:text-zinc-200">
        {post.title}
      </h1>

      {
        post.image && (

          <div className="relative mt-4 h-[300] w-full overflow-hidden rounded-[10px] sm:h-[500px]">
            <img src={post.image}
              alt={post.title}
              className="w-full h-full object-cover min-w-full"
            />
          </div>
        )
      }

      <div className="mb-8 mt-5 flex w-full flex-wrapp gap-4">
        <Matric
          value={post.cretedAt}
          type="asked"
          title="Created"
          textStyles="small-regular"
        />

        <Matric
          value={post.commentsCount}
          type="comment"
          title="Comments"
          textStyles="small-regular"
        />

        <Matric
          value={post.viewsCount}
          type="view"
          title="Views"
          textStyles="small-regular"
        />
      </div>

      <div className="markdown w-full min-w-full text-zinc-900 dark:text-zinc-200">
        {parse(post.htmlDescription, options)}
      </div>

    </article>
  )
}

export default PostPage