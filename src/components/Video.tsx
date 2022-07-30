import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";

export function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[68vh] aspect-video ">

                </div>
            </div>
            <div className=" flex justify-between p-8 max-w-[1100px] mx-auto">
                <div className=" flex flex-col justify-between w-3/4 pr-4">
                    <h1 className="text-2xl font-bold text-white mb-4">
                        Aula 01 - Criando o projeto e realizando o setup inicial
                    </h1>
                    <span className="mb-8">
                        <p className="text-base text-justify text-gray-300">
                            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
                        </p>
                    </span>
                    <div className="flex ">

                        <img src="https://avatars.githubusercontent.com/u/61621625?v=4" alt=" github profile picture" className="w-14 h-14 rounded-full border-2 border-blue-500" />
                        <span className="ml-4">

                            <h3 className="text-lg font-bold">
                                Francisco Correia
                            </h3>
                            <p className="text-sm text-gray-300">Software Developer</p>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="flex bg-green-900 py-2 px-2 rounded w-full gap-4 ">
                        <DiscordLogo size={32} />
                        <button className="uppercase text-sm font-bold ">
                            comunidade no Discord
                        </button>
                    </span>
                    <span className="flex text-blue-300 border border-blue-300 py-2 px-2 rounded w-full gap-4 ">
                        <Lightning size={32} />
                        <button className="uppercase text-sm font-bold  ">
                            comunidade no Discord
                        </button>
                    </span>


                </div>
            </div>
            <div className="gap-8 mt-20 mb-20 p-8 grid grid-cols-2">
                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={24} />
                    </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">Material complementar</strong>
                        <p className="text-sm text-gray-200 mt-2">
                            Acesse o material complementar para acelerar o seu desenvolvimento
                        </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                        <CaretRight size={24} />
                    </div>
                </a>

                <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                    <div className="bg-green-700 h-full p-6 flex items-center">
                        <FileArrowDown size={24} />
                    </div>
                    <div className="py-6 leading-relaxed">
                        <strong className="text-2xl">Wallpapers exclusivos</strong>
                        <p className="text-sm text-gray-200 mt-2">
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </p>
                    </div>
                    <div className="h-full p-6 flex items-center">
                        <CaretRight size={24} />
                    </div>
                </a>
            </div>
        </div>
    )
}