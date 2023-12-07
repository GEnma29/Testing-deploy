import { SVGProps } from "react"
const ExchangeRate = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill={props.fill}
            d="M11.025 21v-2.15a5.094 5.094 0 0 1-2.288-1.15c-.642-.567-1.113-1.367-1.412-2.4l1.85-.75c.25.8.621 1.408 1.113 1.825.492.417 1.138.625 1.937.625.683 0 1.263-.154 1.738-.463.475-.309.713-.788.712-1.437 0-.583-.183-1.046-.55-1.387-.367-.341-1.217-.729-2.55-1.163-1.433-.45-2.417-.988-2.95-1.613-.533-.625-.8-1.388-.8-2.287 0-1.083.35-1.925 1.05-2.525.7-.6 1.417-.942 2.15-1.025V3h2v2.1c.833.133 1.521.438 2.063.913a4.181 4.181 0 0 1 1.187 1.737l-1.85.8c-.2-.533-.483-.933-.85-1.2-.367-.267-.867-.4-1.5-.4-.733 0-1.292.163-1.675.488-.383.325-.575.73-.575 1.212 0 .55.25.983.75 1.3.5.317 1.367.65 2.6 1 1.15.333 2.021.863 2.613 1.588.592.725.888 1.563.887 2.512 0 1.183-.35 2.083-1.05 2.7-.7.617-1.567 1-2.6 1.15V21h-2Z"
        />
    </svg>
)
export default ExchangeRate