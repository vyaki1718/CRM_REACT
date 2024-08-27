import { useEffect } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbProgressBolt } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../components/Card";
import HomeLayout from "../../layouts/HomeLayout";
import { getAllTicketsForUser } from "../../Redux/Slices/TicketSlice";
function Home() {
  const authState = useSelector((state) => state.auth);
  const ticketsState = useSelector((state) => state.ticket);

  
  const dispatch = useDispatch();

  async function getAllTickets() {
    const response = await dispatch(getAllTicketsForUser());
    console.log(response);
  }

  function getTicketStatus(status){
    return {
      status: (ticketsState.ticketsCout[status] / ticketsState.ticketList.length)*100,
      quantity: ticketsState.ticketsCout[status]
  };
}

  useEffect(() => {
    getAllTickets();
  }, [authState.token]);

  return (
    <>
      <HomeLayout>
        <div className="mt-10 flex flex-row justify-center items-center gap-5 flex-wrap">
          <Card
            textTitle="Open"
            background="bg-yellow-300"
            borderColor="border-green-300"
            fontColor="text-black"
            dividerColor="bg-black"
            status={getTicketStatus('open').status}
            quantity={getTicketStatus('open').quantity}
          >
            <BsFillPencilFill className="inline mr-2" />
          </Card>
          <Card
            textTitle="In Progress"
            background="bg-orange-300"
            borderColor="border-red-300"
            fontColor="text-black"
            dividerColor="bg-black"
            status={getTicketStatus('inProgress').status}
            quantity={getTicketStatus('inProgress').quantity}
          >
            <TbProgressBolt className="inline mr-2" />
          </Card>
          <Card
            textTitle="Resolved"
            background="bg-purple-300"
            borderColor="border-blue-700"
            fontColor="text-black"
            dividerColor="bg-black"
            status={getTicketStatus('resolved').status}
            quantity={getTicketStatus('resolved').quantity}
          >
            <MdOutlineDoneAll className="inline mr-2" />
          </Card>
          <Card
            textTitle="On Hold"
            background="bg-gray-300"
            borderColor="border-gray-800"
            fontColor="text-black"
            dividerColor="bg-black"
            status={getTicketStatus('onHold').status}
            quantity={getTicketStatus('onHold').quantity}
          >
            <MdOutlinePendingActions className="inline mr-2" />
          </Card>
          <Card
            textTitle="Cancelled"
            background="bg-blue-300"
            borderColor="border-vilot-700"
            fontColor="text-black"
            dividerColor="bg-black"
            status={getTicketStatus('cancelled').status}
            quantity={getTicketStatus('cancelled').quantity}
          >
            <ImCancelCircle className="inline mr-2" />
          </Card>
        </div>
      </HomeLayout>
    </>
  );
}

export default Home;
