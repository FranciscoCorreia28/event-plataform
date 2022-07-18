import { Lesson } from "./Lesson";
import { gql, useQuery } from "@apollo/client";

const GET_LESSON_QUERY = gql`
    query  {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            title
            slug
            availableAt
        }
    }
`;
interface getLessonsResponseType {
    lessons:{
        id:string,
        lessonType:"live"|"class"
        title:string;
        slug:string;
        availableAt:string;
    }[]
}
export function Sidebar(){
const {data}= useQuery<getLessonsResponseType>(GET_LESSON_QUERY);
    console.log(data);
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl border-b border-gray-500 mb-6 pb-6 block ">
                Cronograma de Aulas
            </span>
            <div className="flex flex-col gap-8">
            {
            data?.lessons.map(lesson =>{
                return(
                <Lesson
                key={lesson.id} 
                availableAt={new Date(lesson.availableAt)} 
                type={lesson.lessonType} 
                title={lesson.title}  />
            )})}
            </div>
        </aside>
    )
}