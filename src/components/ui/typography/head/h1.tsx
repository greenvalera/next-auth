import type { HProps } from "./type"

export default function H1({text}: HProps) {
    return (
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{text}</h1>
    )
}