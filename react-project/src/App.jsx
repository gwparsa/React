import Test from "./Test.jsx";
import Header from "./Header.jsx";
import CourseList from "./CourseList.jsx";
import PropsUsage from "./PropsUsage.jsx";

function App() {
  return (
    <div>
      <Header />
      <h1>Parsa Sorsori</h1>
      <Test />
      <CourseList />
      <PropsUsage title="This is a learning project!" numOfComps={20} />
    </div>
  );
}

export default App;
