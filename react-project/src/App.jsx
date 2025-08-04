import Test from "./Test.jsx";
import Header from "./Header.jsx";
import CourseList from "./CourseList.jsx";
import PropsUsage from "./PropsUsage.jsx";
import Events from "./Events.jsx";
import Form from "./Form.jsx";
import AnotherCourse from "./AnotherCourse.jsx";

function App() {
  return (
    <div>
      <AnotherCourse />
      <Header />
      <Form />
      <h1>Parsa Sorsori</h1>
      <Test />
      <CourseList />
      <PropsUsage title="This is a learning project!" numOfComps={20} />
      <Events />
    </div>
  );
}

export default App;
