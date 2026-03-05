import Link from "next/link";
import type { PostCardTypes } from "@/src/types";
import { ExternalLink } from "lucide-react";

export default function PostCard(props: PostCardTypes) {
    const { title, description, posted_at, cover_image } = props;

    return (
        <div className="flex items-center justify-between bg-[#121212] p-4 rounded-2xl">
            <div className="flex gap-5">
                <img src={cover_image} className="w-20 h-20 object-cover rounded-2xl" />

                <div>
                    <Link href="" className="text-blue-500 font-bold text-xl hover:underline">{title}</Link>
                    <p className="text-[16px]">{description}</p>

                    <div>
                        <p className="text-[12px] text-gray-400">
                            Publicado há {posted_at} 
                        </p>
                    </div>
                </div>
            </div>
            <Link href={""} className="text-gray-400 hover:text-white">
                <ExternalLink size={20} className="hover:scale-[1.1] transition-transform" />
            </Link>
        </div>
    )
}
