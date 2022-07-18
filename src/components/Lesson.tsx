
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format} from "date-fns";
import ptPT from 'date-fns/esm/locale/pt';
interface LessonProps {
    title: string;
    slug?: string;
    availableAt: Date;
    type: "live" | "class"
}
export function Lesson(props: LessonProps) {
    const isAvailable = isPast(props.availableAt);
    const AvailableAtFormated = format(props.availableAt, "EEEE ' • ' d ' de ' MMMM ' • ' H'h'mm", {
        locale:ptPT
       })
    return (
        <a href="#">
            <span className="text-gray-300">
             {
              AvailableAtFormated   
             }
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {isAvailable ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className="text-xs text-white rounded border border-green-200 py-[0.125rem] px-2">
                        {props.type === "live" ? "AO VIVO" : "Conteudo Prático"}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    );
}