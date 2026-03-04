import Image from "next/image";
import Link from "next/link";

// Assets
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function MyProfile() {
    return(
        <div className="flex gap-5">
            <Image src="https://github.com/ImaCod3r.png" height={80} width={80} alt="My profile pic" unoptimized />

            <div>
                <h1 className="font-bold text-3xl">Edson Rodrigues</h1>

                <ul className="flex gap-2 mt-2">
                    <li>
                        <Link 
                            href="https://www.instagram.com/_edson.freizer_"
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-100"
                            target="_blank"
                        >
                            <Instagram size={20} />
                            _edson.freizer_
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#"
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-100"
                            target="_blank"
                        >
                            <Linkedin size={20} />
                            Edson Rodrigues
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="https://www.youtube.com/@therealfreizin"
                            className="flex items-center gap-2 text-gray-400 hover:text-gray-100"
                            target="_blank"
                        >
                            <Youtube size={20} />
                            Freizin Dev
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}