import * as React from "react"
import { SVGProps } from "react"
const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={70}
        height={73}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="url(#b)"
                d="M0 41.978V53.01L35.082 73 70 53.53V41.368l-14.072-7.474v6.605l8.166 4.172v5.384l-29.096 16.34L5.907 50.402V45.42L0 41.978Z"
            />
            <path
                fill="url(#c)"
                d="M0 31.98V19.464L35.082 0 70 19.464v11.3l-5.996-3.388v-4.261L35.082 6.864 5.907 23.03v4.778l8.86 4.952v6.606L0 31.98Z"
            />
            <path
                fill="#211E52"
                d="M18.434 52.368V20.96l16.568 10.147L51.62 20.96v31.41l-5.172 2.672-.109-24.8-11.337 6.686-11.177-5.93V55.04l-5.39-2.673Z"
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={14.399}
                x2={84.826}
                y1={70.83}
                y2={-7.956}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#8B44C3" />
                <stop offset={1} stopColor="#DC3C81" />
            </linearGradient>
            <linearGradient
                id="c"
                x1={3.157}
                x2={73.589}
                y1={60.782}
                y2={-18.009}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#8B44C3" />
                <stop offset={1} stopColor="#DC3C81" />
            </linearGradient>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h70v73H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default Logo
