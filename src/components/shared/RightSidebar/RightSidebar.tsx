import OnePost from "./OnePost"
import post1 from "@/aseets/post1.webp"
import post2 from "@/aseets/post2.webp"
import post3 from "@/aseets/post3.webp"
import OneQuestion from "./OneQuestion"
import OneTagDiv from "./OneTagDiv"
const RightSidebar = () => {
    

    return (
        <section className="w[100px] custom-scrollbar sticky right-0 top-0 h-screen flex-col justify-between overflow-auto border-l border-zinc-200 bg-zinc-50 p-6 pt-36 max-sm:hidden lg:w-[366px] dark:border-zinc-900 dark:bg-zinc-900  max-lg:hidden">
            <div className="flex flex-col  gap-8">
                <h3 className="h3-bold">Top Posts</h3>

                <OnePost pic={post1} info = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <OnePost pic={post2} info = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <OnePost pic={post3} info = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "/>
                <OnePost pic={post1} info = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <OnePost pic={post1} info = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
            </div>


            <div className="flex flex-col  gap-8 mt-16">
                <h3 className="h3-bold">Top Quetsions</h3>

                <OneQuestion info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <OneQuestion info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                <OneQuestion info="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                
            </div>


            <div className="flex flex-col  gap-8 mt-16">
                <h3 className="h3-bold">Popullar Tags</h3>

                <OneTagDiv tagName="NodeJs" count="6"/> 
                <OneTagDiv tagName="ReactJs" count="8"/> 
                <OneTagDiv tagName="Laravel" count="3"/> 
                <OneTagDiv tagName="C#" count="2"/> 
            </div>
        </section>
    )
}

export default RightSidebar

