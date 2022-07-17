import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
query{
  lessons{
    id
    title
  }
}
`;
interface Lesson {
  id: string,
  title: string;
  type: string;
}
function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data)
  return (

    <ul>Event Plataform
      {
        data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })
      }
    </ul>
  )
}

export default App
