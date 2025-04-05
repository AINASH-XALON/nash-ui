import ChatBox from "../components/ChatBox";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <ChatBox agentName="AI Nash" endpoint="http://3.239.97.110:5002/ai-nash" />
        <ChatBox agentName="XALON AI" endpoint="http://3.239.97.110:5002/xalon-ai" />
      </div>
    </div>
  );
}
