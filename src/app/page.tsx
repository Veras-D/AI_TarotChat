import { ChatInterface } from '@components/ChatInterface';
import { ClientStarField } from '@components/ClientStarField';


const HomePage = () => {
  return (
    <div className="relative min-h-screen">
      <ClientStarField />
      <ChatInterface />
    </div>
  );
};

export default HomePage;