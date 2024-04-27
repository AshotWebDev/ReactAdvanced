import post1 from "@/aseets/post1.webp"
import post2 from "@/aseets/post2.webp"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideArrowRight } from "lucide-react";
import PostCard from "@/components/shared/cards/PostCard";
import UserCard from "@/components/shared/cards/UserCard";
import { title } from "process";
const MainPage = () => {

  const posts = [
    {
      id: "1",
      title: "The best way to learn new technologies",
      url: "/posts/1",
      image: "https://picsum.photos/200/300",
      cretedAt: "1 minute ago",
      commentsCount: 0,
      viewsCount: 0,
      author: {
        id: "1",
        name: "John Doe",
        image: "https://picsum.photos/200/300",
      },
      tags: [
        {
          id: "1",
          name: "Vue.js",
          url: "/tags/1",
        },
        {
          id: "2",
          name: "Javascript",
          url: "/tags/2",
        },
      ],
      upvotesCount: 0,
    },
    {
      id: "2",
      title: "New features in Vue 3.0",
      url: "/posts/2",
      image: "https://picsum.photos/200/300",
      cretedAt: "2 days ago",
      commentsCount: 3,
      viewsCount: 100,
      author: {
        id: "1",
        name: "John Doe",
        image: "https://picsum.photos/200/300",
      },
      tags: [
        {
          id: "1",
          name: "Vue.js",
          url: "/tags/1",
        },
        {
          id: "2",
          name: "Javascript",
          url: "/tags/2",
        },
      ],
      upvotesCount: 1,
    },
  ];



  const users = [
    {
      id: "1",
      name: 'Ashot Poghosyan',
      nickname: 'ashot29',
      image: "https://picsum.photos/200/300",
      tags: [
        {
          id: "1",
          name: "Vue.js",
          url: "/tags/1",
        },
        {
          id: "2",
          name: "Javascript",
          url: "/tags/2",
        },
      ],
    },

    {
      id: "2",
      name: 'Art Aloyan',
      nickname: 'art8',
      image: "https://picsum.photos/200/300",
      tags: [
        {
          id: "1",
          name: "Vue.js",
          url: "/tags/1",
        },
        {
          id: "2",
          name: "Javascript",
          url: "/tags/2",
        },
      ],
    },

    {
      id: "3",
      name: 'Rustam Shradyan',
      nickname: 'rust56',
      image: "https://picsum.photos/200/300",
      tags: [
        
      ],
    },

    {
      id: "4",
      name: 'Conor Vasques',
      nickname: 'conor10',
      image: "https://picsum.photos/200/300",
      tags: [
        
      ],
    }
    
  ];
  return (
    <>
      <div className="mt-4 flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-zinc-900 dark:text-zinc-100">
          <span className="md:h1-bold sm:h2-bold xs:h2-bold">
            Welcome to <span className="text-red-500">PlusDev</span>
            <span className="text-zinc-600">.Net</span>
          </span>
          <span className="flex font-space-grotesk-normal text-base font-normal uppercase tracking-wide text-zinc-600 dark:text-zink-400">
            The Best Place to learn and share
          </span>
        </h1>

        <div className="flex gap-4">
          <Link to="/crete-post" className="flex justify-end">
            <Button className="btn-secondary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Create Post
            </Button>
          </Link>

          <Link to="/crete-post" className="flex justify-end">
            <Button className="btn-tertiary min-h-[46px] px-4 py-3 text-zinc-50 max-sm:min-w-[150px]">
              Asq a Question
            </Button>
          </Link>
        </div>
      </div>

      <div className="col-span-2 mt-12 ">
        <Link to="/posts" className=" flex justify-end gap-3 text-sm font-bold  uppercase text-red-500 hover:text-red-400">
          View All Posts <LucideArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">

        {
          posts.map((el) => (
            <PostCard
              id={el.id}
              title={el.title}
              url={el.url}
              image={el.image}
              createdAt={el.cretedAt}
              commentsCount={el.commentsCount}
              viewsCount={el.commentsCount}
              author={el.author}
              tags={el.tags}
              upvotesCount={el.upvotesCount}
            />
          ))
        }


      </div>

      <section className="mt-20">
        <div className="col-span-2">
            <Link to="/users"
                 className="flex justify-end gap-3 text-sm font-bold uppercase text-red-500 hover:text-red-400"
            >
            View all Author <LucideArrowRight className="h-5 w-5"/>
            </Link>
        </div>

        <div className=" mt-6 flex flex-wrap justify-around gap-3">
              {
                users.map((user) => (
                  <UserCard
                  key={user.id}
                    id={user.id}
                    name={user.name}
                    nickname={user.nickname}
                    image={user.image}
                    tags={user.tags}
                  />
                ))
              }
        </div>
      </section>
    </>
  );
};

export default MainPage;