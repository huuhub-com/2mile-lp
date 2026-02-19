import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-black/10">
            <div className="mx-auto w-full max-w-[960px] px-6 py-32">
                <div className="mb-20 flex justify-center">
                    <div className="h-32 w-32 overflow-hidden rounded-full">
                        <img
                            src="/web-app-manifest-512x512.png"
                            alt="SOKU"
                            className="h-full w-full object-cover opacity-80"
                        />
                    </div>
                </div>


                {/* Navigation */}
                <nav className="flex flex-col items-center space-y-4 text-sm text-black/60 md:flex-row md:justify-center md:space-x-10 md:space-y-0">
                    <Link href="/terms" className="hover:text-black transition-colors">
                        利用規約
                    </Link>

                    <Link href="/law" className="hover:text-black transition-colors">
                        特定商取引法に基づく表記
                    </Link>

                    <Link href="/company" className="hover:text-black transition-colors">
                        会社情報
                    </Link>

                    <Link href="/privacy" className="hover:text-black transition-colors">
                        プライバシーポリシー
                    </Link>
                </nav>

                {/* Copyright */}
                <div className="mt-20 text-center text-xs tracking-[0.14em] text-black/40">
                    © {new Date().getFullYear()} 2mile.
                </div>
            </div>
        </footer>
    );
}
