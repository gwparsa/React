function CourseList() {
  const courses = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React.js" },
    { id: 3, name: "Node.js" },
    { id: 4, name: "Next.js" },
  ];
  return (
    <div>
      <h3>Courses:</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;