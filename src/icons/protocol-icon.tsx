import * as React from "react"
import { SVGProps } from "react"
import { useMediaQuery } from "@/hooks"

const ProtocolIcon = (props: SVGProps<SVGSVGElement>) => {
    const isMobile = useMediaQuery("(max-width: 768px)")
    if (isMobile) return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            fill="none"
            {...props}
        >
            <path
                fill="#fff"
                d="M20.833 25c-2.291 0-4.253-.816-5.885-2.448-1.632-1.632-2.448-3.594-2.448-5.885 0-2.292.816-4.254 2.448-5.886 1.632-1.632 3.593-2.448 5.885-2.448s4.254.816 5.886 2.448c1.631 1.632 2.447 3.594 2.447 5.886 0 2.291-.816 4.253-2.447 5.885C25.087 24.184 23.125 25 20.833 25ZM4.167 37.5v-1.667a6.28 6.28 0 0 1 .885-3.229A5.775 5.775 0 0 1 7.5 30.313c1.77-.903 3.767-1.667 5.99-2.292 2.222-.625 4.67-.938 7.343-.938h.73c.208 0 .416.035.624.105a14.56 14.56 0 0 0-.704 1.954c-.192.678-.339 1.38-.442 2.108h-.208c-2.465 0-4.678.313-6.64.938-1.96.624-3.567 1.25-4.818 1.874a2.036 2.036 0 0 0-.756.73 1.94 1.94 0 0 0-.286 1.041V37.5h13.125c.209.73.486 1.45.834 2.163.347.712.729 1.38 1.145 2.004H8.333c-1.146 0-2.127-.409-2.944-1.225-.816-.817-1.224-1.797-1.222-2.942Zm28.854 4.583-.313-1.458a14.367 14.367 0 0 1-1.17-.548 9.479 9.479 0 0 1-1.122-.702l-1.51.469a1.937 1.937 0 0 1-1.327-.052 2.104 2.104 0 0 1-1.017-.834l-.416-.729a2.04 2.04 0 0 1-.26-1.354c.069-.486.294-.885.676-1.198l1.146-.99a9.608 9.608 0 0 1-.104-1.354c0-.416.035-.868.104-1.354l-1.146-.99a1.816 1.816 0 0 1-.677-1.172c-.07-.47.018-.912.26-1.327l.47-.782c.243-.382.572-.66.989-.833.417-.174.85-.19 1.302-.052l1.51.469a9.214 9.214 0 0 1 1.12-.705c.363-.191.754-.373 1.172-.545l.313-1.51c.104-.487.339-.878.704-1.174.365-.296.79-.443 1.275-.441h.833c.486 0 .912.156 1.277.468.365.313.6.712.702 1.198l.313 1.459c.416.173.807.364 1.17.573.365.208.738.468 1.121.78l1.407-.468c.486-.174.955-.174 1.406 0 .451.174.799.469 1.042.886l.416.729c.243.416.33.868.26 1.354-.069.486-.294.885-.676 1.198l-1.146.99c.07.416.104.85.104 1.301 0 .452-.035.886-.104 1.303l1.146.99c.382.312.607.703.677 1.172.07.47-.018.912-.26 1.327l-.47.781c-.243.382-.572.66-.989.834-.417.173-.85.19-1.302.052l-1.51-.469a8.932 8.932 0 0 1-1.121.702c-.366.19-.756.373-1.171.548l-.313 1.51a2.003 2.003 0 0 1-.702 1.173c-.364.296-.79.443-1.277.442H35c-.486 0-.912-.156-1.277-.469a2.104 2.104 0 0 1-.702-1.198Zm2.395-4.583c1.146 0 2.128-.408 2.944-1.225.817-.817 1.225-1.797 1.223-2.942 0-1.145-.408-2.127-1.225-2.943-.816-.817-1.797-1.225-2.941-1.223-1.146 0-2.128.408-2.944 1.225-.817.816-1.224 1.797-1.223 2.941 0 1.146.408 2.128 1.225 2.944.816.817 1.797 1.224 2.941 1.223ZM20.834 20.833c1.146 0 2.127-.408 2.944-1.225.817-.816 1.224-1.797 1.223-2.941 0-1.146-.409-2.127-1.225-2.944-.817-.817-1.797-1.224-2.942-1.223-1.146 0-2.127.408-2.944 1.225-.816.817-1.224 1.797-1.223 2.942 0 1.145.409 2.127 1.226 2.943.816.817 1.797 1.225 2.941 1.223Z"
            />
        </svg>
    )
    return (<svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        fill="none"
        {...props}
    >
        <path
            fill="#fff"
            d="M33.333 40c-3.666 0-6.805-1.306-9.416-3.917-2.611-2.61-3.917-5.75-3.917-9.416 0-3.667 1.306-6.806 3.917-9.417 2.61-2.611 5.75-3.917 9.416-3.917 3.667 0 6.806 1.306 9.417 3.917 2.611 2.611 3.917 5.75 3.917 9.417 0 3.666-1.306 6.805-3.917 9.416C40.139 38.694 37 40 33.333 40ZM6.667 60v-2.667c0-1.833.472-3.555 1.416-5.166A9.24 9.24 0 0 1 12 48.5c2.833-1.444 6.028-2.667 9.583-3.667 3.556-1 7.473-1.5 11.75-1.5H34.5c.333 0 .667.056 1 .167-.444 1-.82 2.042-1.127 3.127A25.46 25.46 0 0 0 33.667 50h-.334c-3.944 0-7.485.5-10.623 1.5-3.138 1-5.708 2-7.71 3-.5.278-.903.667-1.21 1.167a3.102 3.102 0 0 0-.457 1.666V60h21c.334 1.167.778 2.32 1.334 3.46a27.255 27.255 0 0 0 1.833 3.207H13.333c-1.833 0-3.403-.654-4.71-1.96C7.317 63.4 6.664 61.83 6.667 60Zm46.166 7.333-.5-2.333a23.004 23.004 0 0 1-1.873-.877A15.167 15.167 0 0 1 48.667 63l-2.417.75a3.1 3.1 0 0 1-2.123-.083 3.365 3.365 0 0 1-1.627-1.334l-.667-1.166A3.265 3.265 0 0 1 41.417 59a2.932 2.932 0 0 1 1.083-1.917l1.833-1.583c-.11-.778-.166-1.5-.166-2.167 0-.666.055-1.389.166-2.166L42.5 49.583c-.611-.5-.972-1.125-1.083-1.876a3.172 3.172 0 0 1 .416-2.124l.75-1.25A3.372 3.372 0 0 1 44.167 43c.666-.278 1.36-.306 2.083-.083l2.417.75c.61-.445 1.207-.82 1.79-1.127a22.018 22.018 0 0 1 1.876-.873l.5-2.417c.167-.778.543-1.403 1.127-1.877a3.131 3.131 0 0 1 2.04-.706h1.333c.778 0 1.46.25 2.044.75.584.5.959 1.139 1.123 1.916l.5 2.334c.667.277 1.291.583 1.873.916.583.334 1.18.75 1.794 1.25l2.25-.75c.778-.277 1.528-.277 2.25 0a3.21 3.21 0 0 1 1.666 1.417l.667 1.167c.389.666.528 1.389.417 2.166a2.932 2.932 0 0 1-1.084 1.917L69 51.333c.111.667.167 1.361.167 2.084 0 .722-.056 1.416-.167 2.083l1.833 1.583c.612.5.973 1.126 1.084 1.877a3.171 3.171 0 0 1-.417 2.123l-.75 1.25a3.373 3.373 0 0 1-1.583 1.334c-.667.277-1.361.305-2.084.083L64.667 63c-.611.444-1.21.819-1.794 1.123-.584.305-1.209.597-1.873.877l-.5 2.417c-.167.777-.541 1.403-1.123 1.876-.583.474-1.264.71-2.044.707H56c-.778 0-1.459-.25-2.043-.75a3.365 3.365 0 0 1-1.124-1.917ZM56.667 60c1.833 0 3.403-.653 4.71-1.96 1.306-1.307 1.959-2.876 1.956-4.707 0-1.833-.653-3.403-1.96-4.71-1.306-1.306-2.875-1.959-4.706-1.956-1.834 0-3.404.653-4.71 1.96-1.307 1.306-1.96 2.875-1.957 4.706 0 1.834.653 3.404 1.96 4.71 1.307 1.307 2.876 1.96 4.707 1.957ZM33.333 33.333c1.834 0 3.404-.653 4.71-1.96 1.307-1.306 1.96-2.875 1.957-4.706 0-1.834-.653-3.404-1.96-4.71-1.307-1.307-2.876-1.96-4.707-1.957-1.833 0-3.403.653-4.71 1.96-1.306 1.307-1.959 2.875-1.956 4.707 0 1.833.653 3.403 1.96 4.71 1.306 1.306 2.875 1.959 4.706 1.956Z"
        />
    </svg>
    )
}
export default ProtocolIcon