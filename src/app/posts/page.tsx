"use client"

import PostCard from "@/src/components/PostCard";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function Posts() {
    const router = useRouter();
    return (
        <section className="md:w-200">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Todos os posts</h2>
                <button
                    className="text-gray-300 text-sm cursor-pointer hover:text-white hover:underline " 
                    onClick={() => router.back()}
                >
                    Voltar
                </button>
            </div>


            <div className="flex flex-col mt-5">
                <PostCard
                    title="Como cozinhar catato"
                    description="Aprenda!"
                    posted_at={210000098}
                    cover_image="https://github.com/ImaCod3r.png"
                />
            </div>

            <div className="flex justify-between mt-10">
                <button className="text-gray-300 cursor-pointer">
                    Anterior
                </button>

                <button className="text-gray-300 cursor-pointer">
                    Próximo
                </button>
            </div>
        </section>
    )
}