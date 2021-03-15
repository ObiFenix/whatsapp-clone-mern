import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ChatRoom from './components/chat/room/ChatRoom';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <ChatRoom />
      </div>
    </div>
  );
}

export default App;
