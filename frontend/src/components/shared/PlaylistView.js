 import Card from "../Card"
const PlaylistView = ({title , cardData}) => {
  return(
    <div className="text-white pt-8">
        <div className="text-2xl font-semibold mb-5">
            {title}
        </div>
        <div className=" w-full flex justify-between space-x-4">
         {
          cardData.map((items)=>{
            return(
                <Card
                title={items.title}
                description={items.description}
                imgUrl={items.imgUrl}
                />
            )
            })
        }
        {/*//  <Card title={"Musical Piano"} description={"Slwo and classical music"} imgUrl={"https://images.unsplash.com/photo-1715604723676-7e7fb8607478?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        //  <Card title={"Musical Piano"} description={"Slwo and classical music"} imgUrl={"https://images.unsplash.com/photo-1531323386183-43890b5c766d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        //  <Card title={"Musical Piano"} description={"Slwo and classical music"} imgUrl={"https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        //  <Card title={"Musical Piano"} description={"Slwo and classical music"} imgUrl={"https://images.unsplash.com/photo-1526857833023-721f5005ab32?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        //  <Card title={"Musical Piano"} description={"Slwo and classical music"} imgUrl={"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        */}
        </div>
    </div>
  )
}
export default PlaylistView