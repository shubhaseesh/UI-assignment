import MainBody from "./components/MainBody";
import UserHeader from "./components/UserHeader";
import CommentBar from "./components/CommentBar";
import CommentList from "./components/CommentList";
import ShowMoreBtn from "./components/ShowMoreBtn";

function App() {
  return (
    <div className="flex justify-center bg-gray-400 h-auto p-1">
      <div>
        <div className="bg-white h-screen m-9 p-6 rounded-2xl w-2/5 flex flex-col justify-around">
          <div>
            <UserHeader />
            <MainBody />
            <CommentBar />
            <CommentList />
          </div>
          <ShowMoreBtn />
        </div>
      </div>
    </div>
  );
}
export default App;
