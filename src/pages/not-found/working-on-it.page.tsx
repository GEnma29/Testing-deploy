import { Link } from "react-router-dom"
import { PrivateRoutes } from "@/models"

export default function WeareWorkingOnIt() {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <section className="w-full py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">We're working on it</h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    We're currently updating this page. Apologies for any inconvenience caused.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link replace to={`../${PrivateRoutes.DASHBOARD}`} className="text-sm font-semibold leading-7 text-indigo-600"><span aria-hidden="true">&larr;</span> Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

