import { useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import Card from '../../components/Card';
import HomeLayout from "../../layouts/HomeLayout";
import { getAllTicketsForUser} from '../../Redux/Slices/TicketSlice';
function Home() {

  const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector(state => state.tickets);
  
  const dispatch = useDispatch();

  async function getAllTickets(){
    const response = await dispatch(getAllTicketsForUser());
    console.log(response);
  }

  useEffect(()=>{
     getAllTickets();
  }, [authState.token]);

  return (
    <>
     <HomeLayout>
      <div className="flex flex-row justify-center items-center gap-5">
        <Card>
        <BsFillPencilFill className="inline mr-2" />
        </Card>
        <Card background="bg-yellow-300" borderColor="border-green-300" fontColor="text-black" dividerColor="bg-black" status={30}>
        <BsFillPencilFill className="inline mr-2" />
        </Card>
        <Card background="bg-yellow-300" borderColor="border-green-300" fontColor="text-black" dividerColor="bg-black" status={30}>
        <BsFillPencilFill className="inline mr-2" />
        </Card>
        <Card background="bg-yellow-300" borderColor="border-green-300" fontColor="text-black" dividerColor="bg-black" status={30}>
        <BsFillPencilFill className="inline mr-2" />
        </Card>
        </div>
     </HomeLayout>
    </>
  );
}

export default Home;
