import News from "@/components/shared/cards/News";
import post1 from "@/aseets/post1.webp"
import post2 from "@/aseets/post2.webp"
import post3 from "@/aseets/post3.webp"
import User from "@/components/shared/cards/User";
const MainPage = () => {

  return (
    <div className="flex flex-col gap-7">

      <News
        id='1'
        img={post1}
        title='lorem jdvn bh ieu hi hfiu hiuhf uyg uy'
        tags={[
          { id: '1', title: 'NodeJS', url: '/node', totalCount: 5, showCount: false },
          { id: '2', title: 'ReactJs', url: '/react', totalCount: 3, showCount: false }
        ]}
        owner='Ashot Poghosyan'
        created_at='3'
        votes={10}
        views={1000}
        comments={2}
      />


      <User id="1" img={post2} fullName="Ashot" email="aaacdvkj@mail.ru"/>
    </div>
  );
};

export default MainPage;