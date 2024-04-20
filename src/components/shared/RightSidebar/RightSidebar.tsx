
import post1 from "@/aseets/post1.webp"
import post2 from "@/aseets/post2.webp"
import post3 from "@/aseets/post3.webp"
import QuestionSmallCard from "../cards/QuestionSmalCard"
import RenderTag from "../cards/RenderTag"
import PostSmallCard from "../cards/PostSmallCard"

const topPosts: any = [
    {
        id: 1,
        title: 'Lorem Ipsum is simply dummy text of the printing.',
        image: post1,
        url: '/posts/test'
    },

    {
        id: 2,
        title: 'Lorem Ipsum is simply dummy text of the printing.',
        image: post2,
        url: '/posts/test'
    },

    {
        id: 3,
        title: 'Lorem Ipsum is simply dummy text of the printing.',
        image: post3,
        url: '/posts/test'
    },

    {
        id: 4,
        title: 'Lorem Ipsum is simply dummy text of the printing.',
        image: post1,
        url: '/posts/test'
    },

]

const topQuestions: any = [
    {
        id: 1,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: '/questions/test'
    },

    {
        id: 2,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: '/questions/test'
    },

    {
        id: 3,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: '/questions/test'
    },

    {
        id: 4,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: '/questions/test'
    },

]

const popularTags: any = [
    {
        id: 1,
        title: 'NodeJS',
        count: 10,
        url: '/tags/test'
    },

    {
        id: 2,
        title: 'Laravel',
        count: 8,
        url: '/tags/test'
    },

    {
        id: 3,
        title: 'Angular',
        count: 3,
        url: '/tags/test'
    },

    {
        id: 4,
        title: 'ReactJS',
        count: 8,
        url: '/tags/test'
    },

    {
        id: 5,
        title: 'ReactJS',
        count: 12,
        url: '/tags/test'
    },

]
const RightSidebar = () => {


    return (
        <section
            className="custom-scrollbar sticky right-0 top-0 flex
        h-screen w-[350px] flex-col overflow-y-auto border-l
        border-zinc-200 bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-900
        p-6 pt-36 max-xl:hidden"
        >
            <div>
                <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">Top Posts</h3>

                <div className="mt-5 flex w-full flex-col gap-[30px]">
                    {topPosts.map((post) => (
                        <PostSmallCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            url={post.url}
                            image={post.image}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">
                    Top Questions
                </h3>

                <div className="mt-5 flex w-full flex-col gap-[30px]">
                    {topQuestions.map((question) => (
                        <QuestionSmallCard
                            key={question.id}
                            id={question.id}
                            title={question.title}
                            url={question.url}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <h3 className="h3-bold text-zinc-900 dark:text-zinc-200">
                    Popular Tags
                </h3>

                <div className="mt-3 flex flex-col gap-4">
                    {popularTags.map((tag) => (
                        <RenderTag
                            id={tag.id}
                            title={tag.title}
                            url={tag.url}
                            key={tag.id}
                            showCount={true}
                            totalCount={tag.count}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RightSidebar

