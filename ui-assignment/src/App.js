import MainBody from "./components/MainBody";
import UserHeader from "./components/UserHeader";
import CommentBar from "./components/CommentBar";
import CommentList from "./components/CommentList";
import ShowMoreBtn from "./components/ShowMoreBtn";

function App() {
  return (
    <div className="flex justify-center h-screen bg-gray-400 p-1">
      <div className="bg-white p-6 rounded-2xl w-1/4 m-3 flex flex-col justify-around">
        <div>
          <div>
            <UserHeader />
            <MainBody />
            <CommentBar />
            <CommentList />
          </div>
        </div>
        <ShowMoreBtn />

      </div>
    </div>
  );
}
export default App;
