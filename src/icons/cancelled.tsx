import * as React from "react"
import { SVGProps } from "react"
import { useMediaQuery } from "@/hooks"

const CancelledIcon = (props: SVGProps<SVGSVGElement>) => {
    const isMobile = useMediaQuery("(max-width: 768px)")
    return (
        isMobile ?
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={106}
                height={24}
                fill="none"
                {...props}
            >
                <circle cx={12} cy={12} r={12} fill="#FF2619" />
                <path
                    fill="#fff"
                    d="m12 13.105 2.29 2.29a.749.749 0 0 0 .552.217.749.749 0 0 0 .553-.217.748.748 0 0 0 .217-.553.749.749 0 0 0-.217-.553L13.105 12l2.29-2.29a.748.748 0 0 0 .217-.552.748.748 0 0 0-.217-.553.748.748 0 0 0-.553-.217.748.748 0 0 0-.553.217L12 10.895l-2.29-2.29a.749.749 0 0 0-.552-.217.749.749 0 0 0-.553.217.749.749 0 0 0-.217.553c0 .224.073.408.217.552l2.29 2.29-2.29 2.29a.749.749 0 0 0-.217.552c0 .224.073.408.217.553a.749.749 0 0 0 .553.217.749.749 0 0 0 .553-.217L12 13.105Zm0 6.79a7.684 7.684 0 0 1-3.079-.622 7.984 7.984 0 0 1-2.507-1.688 7.967 7.967 0 0 1-1.687-2.506A7.701 7.701 0 0 1 4.105 12c0-1.092.208-2.118.622-3.079a7.985 7.985 0 0 1 1.687-2.507 7.967 7.967 0 0 1 2.507-1.687A7.701 7.701 0 0 1 12 4.105c1.092 0 2.118.208 3.079.622.96.415 1.796.977 2.506 1.687a7.976 7.976 0 0 1 1.688 2.507c.415.96.622 1.987.622 3.079a7.682 7.682 0 0 1-.622 3.079 7.984 7.984 0 0 1-1.688 2.506 7.98 7.98 0 0 1-2.506 1.688 7.675 7.675 0 0 1-3.079.622Zm0-1.58c1.763 0 3.257-.611 4.48-1.835 1.224-1.223 1.836-2.717 1.836-4.48 0-1.763-.612-3.257-1.836-4.48-1.223-1.224-2.717-1.836-4.48-1.836-1.763 0-3.257.612-4.48 1.836C6.296 8.743 5.684 10.237 5.684 12c0 1.763.612 3.257 1.836 4.48 1.223 1.224 2.717 1.836 4.48 1.836Z"
                />
                <path
                    fill="#FF2619"
                    d="M30.497 17.5V7.7h4.452c1.064 0 2.002.205 2.814.616.812.401 1.447.966 1.904 1.694.457.728.686 1.591.686 2.59 0 .99-.229 1.853-.686 2.59-.457.728-1.092 1.297-1.904 1.708-.812.401-1.75.602-2.814.602h-4.452Zm2.268-1.862h2.072c.653 0 1.218-.121 1.694-.364a2.682 2.682 0 0 0 1.12-1.064c.27-.457.406-.994.406-1.61 0-.625-.135-1.162-.406-1.61a2.595 2.595 0 0 0-1.12-1.05c-.476-.252-1.04-.378-1.694-.378h-2.072v6.076Zm12.882 1.974c-.858 0-1.614-.168-2.268-.504a3.742 3.742 0 0 1-1.498-1.372c-.354-.588-.532-1.255-.532-2.002 0-.756.173-1.423.518-2.002a3.705 3.705 0 0 1 1.442-1.372c.607-.336 1.293-.504 2.058-.504.738 0 1.4.159 1.988.476a3.44 3.44 0 0 1 1.414 1.344c.346.579.518 1.274.518 2.086 0 .084-.004.182-.014.294-.009.103-.018.2-.028.294h-6.118v-1.274h4.97l-.84.378c0-.392-.079-.733-.238-1.022a1.69 1.69 0 0 0-.658-.672 1.868 1.868 0 0 0-.98-.252c-.373 0-.704.084-.994.252-.28.159-.499.387-.658.686-.158.29-.238.635-.238 1.036v.336c0 .41.089.775.266 1.092.187.308.444.546.77.714.336.159.728.238 1.176.238.402 0 .752-.06 1.05-.182.308-.121.588-.303.84-.546l1.162 1.26c-.345.392-.779.695-1.302.91-.522.205-1.124.308-1.806.308Zm9.672-7.756c.598 0 1.13.121 1.596.364.476.233.85.597 1.12 1.092.271.485.406 1.11.406 1.876V17.5h-2.184v-3.976c0-.607-.135-1.055-.406-1.344-.26-.29-.634-.434-1.12-.434-.345 0-.658.075-.938.224-.27.14-.485.36-.644.658-.149.299-.224.681-.224 1.148V17.5h-2.184V9.968h2.086v2.086l-.392-.63a2.79 2.79 0 0 1 1.162-1.162c.504-.27 1.078-.406 1.722-.406Zm8.895 7.756c-.859 0-1.615-.168-2.268-.504a3.742 3.742 0 0 1-1.498-1.372c-.355-.588-.532-1.255-.532-2.002 0-.756.172-1.423.518-2.002a3.705 3.705 0 0 1 1.442-1.372c.606-.336 1.292-.504 2.058-.504.737 0 1.4.159 1.988.476a3.44 3.44 0 0 1 1.414 1.344c.345.579.518 1.274.518 2.086 0 .084-.005.182-.014.294l-.028.294h-6.118v-1.274h4.97l-.84.378c0-.392-.08-.733-.238-1.022a1.69 1.69 0 0 0-.658-.672 1.868 1.868 0 0 0-.98-.252c-.374 0-.705.084-.994.252-.28.159-.5.387-.658.686-.159.29-.238.635-.238 1.036v.336c0 .41.088.775.266 1.092.186.308.443.546.77.714.336.159.728.238 1.176.238.401 0 .751-.06 1.05-.182.308-.121.588-.303.84-.546l1.162 1.26c-.346.392-.78.695-1.302.91-.523.205-1.125.308-1.806.308Zm8.636 2.716c-.71 0-1.395-.089-2.058-.266-.654-.168-1.2-.425-1.638-.77l.868-1.568c.317.261.718.467 1.204.616.495.159.98.238 1.456.238.775 0 1.334-.173 1.68-.518.355-.345.532-.859.532-1.54v-1.134l.14-1.89-.028-1.904V9.968h2.072v6.272c0 1.4-.364 2.431-1.092 3.094-.728.663-1.773.994-3.136.994Zm-.336-3.192c-.7 0-1.335-.15-1.904-.448a3.705 3.705 0 0 1-1.358-1.274c-.336-.55-.504-1.19-.504-1.918 0-.737.168-1.377.504-1.918.345-.55.798-.975 1.358-1.274a4.035 4.035 0 0 1 1.904-.448c.635 0 1.195.13 1.68.392.485.252.863.649 1.134 1.19.27.532.406 1.218.406 2.058 0 .83-.135 1.517-.406 2.058-.27.532-.649.929-1.134 1.19-.486.261-1.046.392-1.68.392Zm.434-1.792c.383 0 .723-.075 1.022-.224.299-.159.532-.378.7-.658a1.84 1.84 0 0 0 .252-.966c0-.373-.084-.695-.252-.966a1.668 1.668 0 0 0-.7-.644 2.144 2.144 0 0 0-1.022-.238c-.383 0-.723.08-1.022.238-.299.15-.537.364-.714.644-.168.27-.252.593-.252.966 0 .364.084.686.252.966.177.28.415.5.714.658.299.15.64.224 1.022.224ZM83.73 17.5v-1.47l-.14-.322v-2.632c0-.467-.145-.83-.434-1.092-.28-.261-.715-.392-1.302-.392a3.74 3.74 0 0 0-1.19.196c-.383.121-.71.29-.98.504l-.785-1.526c.411-.29.906-.513 1.484-.672a6.642 6.642 0 0 1 1.764-.238c1.148 0 2.04.27 2.675.812.634.541.952 1.386.952 2.534V17.5H83.73Zm-2.296.112c-.588 0-1.093-.098-1.513-.294-.42-.205-.742-.48-.965-.826a2.09 2.09 0 0 1-.336-1.162c0-.448.107-.84.322-1.176.224-.336.573-.597 1.05-.784.476-.196 1.096-.294 1.862-.294h2.001v1.274h-1.763c-.514 0-.868.084-1.065.252a.813.813 0 0 0-.28.63c0 .28.108.504.322.672.225.159.528.238.91.238.364 0 .691-.084.98-.252.29-.177.5-.434.63-.77l.337 1.008a1.95 1.95 0 0 1-.869 1.106c-.42.252-.96.378-1.624.378Zm9.605 0c-.71 0-1.349-.159-1.918-.476a3.646 3.646 0 0 1-1.358-1.358c-.327-.579-.49-1.26-.49-2.044 0-.793.163-1.48.49-2.058a3.542 3.542 0 0 1 1.358-1.344c.57-.317 1.209-.476 1.918-.476.634 0 1.19.14 1.666.42.476.28.844.705 1.106 1.274.261.57.392 1.297.392 2.184 0 .877-.126 1.605-.378 2.184-.252.57-.616.994-1.092 1.274-.467.28-1.031.42-1.694.42Zm.378-1.792c.354 0 .676-.084.966-.252.29-.168.518-.406.686-.714.177-.317.266-.69.266-1.12 0-.439-.089-.812-.266-1.12a1.806 1.806 0 0 0-.686-.714 1.889 1.889 0 0 0-.966-.252c-.364 0-.69.084-.98.252-.29.168-.523.406-.7.714-.168.308-.252.681-.252 1.12 0 .43.084.803.252 1.12.177.308.41.546.7.714.29.168.616.252.98.252Zm1.974 1.68v-1.54l.042-2.24-.14-2.226V7.112h2.184V17.5h-2.086Zm7.691.112c-.802 0-1.516-.168-2.142-.504a3.923 3.923 0 0 1-1.47-1.372c-.355-.588-.532-1.255-.532-2.002 0-.756.178-1.423.532-2.002a3.781 3.781 0 0 1 1.47-1.372c.626-.336 1.34-.504 2.142-.504.794 0 1.503.168 2.128.504a3.68 3.68 0 0 1 1.47 1.358c.355.579.532 1.25.532 2.016 0 .747-.177 1.414-.532 2.002a3.78 3.78 0 0 1-1.47 1.372c-.625.336-1.334.504-2.128.504Zm0-1.792c.364 0 .691-.084.98-.252.29-.168.518-.406.686-.714.168-.317.252-.69.252-1.12 0-.439-.084-.812-.252-1.12a1.801 1.801 0 0 0-.686-.714 1.915 1.915 0 0 0-.98-.252c-.364 0-.69.084-.98.252-.29.168-.522.406-.7.714-.168.308-.252.681-.252 1.12 0 .43.084.803.252 1.12.177.308.41.546.7.714.29.168.616.252.98.252Z"
                />
            </svg>
            :
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={99}
                height={65}
                fill="none"
                {...props}
            >
                <circle cx={49.5} cy={19} r={19} fill="#FF2619" />
                <path
                    fill="#fff"
                    d="m49.5 20.75 3.625 3.625c.23.23.52.344.875.344.354 0 .646-.115.875-.344.23-.23.344-.52.344-.875 0-.354-.115-.646-.344-.875L51.25 19l3.625-3.625c.23-.23.344-.52.344-.875 0-.354-.115-.646-.344-.875-.23-.23-.52-.344-.875-.344-.354 0-.646.115-.875.344L49.5 17.25l-3.625-3.625c-.23-.23-.52-.344-.875-.344-.354 0-.646.115-.875.344-.23.23-.344.52-.344.875 0 .354.115.646.344.875L47.75 19l-3.625 3.625c-.23.23-.344.52-.344.875 0 .354.115.646.344.875.23.23.52.344.875.344.354 0 .646-.115.875-.344L49.5 20.75Zm0 10.75c-1.73 0-3.354-.328-4.875-.985a12.643 12.643 0 0 1-3.969-2.671 12.615 12.615 0 0 1-2.671-3.969c-.656-1.52-.984-3.146-.985-4.875 0-1.73.328-3.354.985-4.875a12.642 12.642 0 0 1 2.671-3.969 12.613 12.613 0 0 1 3.969-2.671c1.52-.656 3.146-.984 4.875-.985 1.73 0 3.354.328 4.875.985a12.642 12.642 0 0 1 3.969 2.671 12.63 12.63 0 0 1 2.672 3.969c.657 1.52.985 3.146.984 4.875 0 1.73-.328 3.354-.985 4.875a12.645 12.645 0 0 1-2.671 3.969 12.631 12.631 0 0 1-3.969 2.672c-1.52.657-3.146.985-4.875.984Zm0-2.5c2.792 0 5.156-.969 7.094-2.906C58.53 24.156 59.5 21.792 59.5 19c0-2.792-.969-5.156-2.906-7.094C54.656 9.97 52.292 9 49.5 9c-2.792 0-5.156.969-7.094 2.906C40.47 13.844 39.5 16.208 39.5 19c0 2.792.969 5.156 2.906 7.094C44.344 28.03 46.708 29 49.5 29Z"
                />
                <path
                    fill="#FF2619"
                    d="M1.925 60V47.4h5.724c1.368 0 2.574.264 3.618.792 1.044.516 1.86 1.242 2.448 2.178.588.936.882 2.046.882 3.33 0 1.272-.294 2.382-.882 3.33-.588.936-1.404 1.668-2.448 2.196-1.044.516-2.25.774-3.618.774H1.925Zm2.916-2.394h2.664c.84 0 1.566-.156 2.178-.468a3.447 3.447 0 0 0 1.44-1.368c.348-.588.522-1.278.522-2.07 0-.804-.174-1.494-.522-2.07a3.335 3.335 0 0 0-1.44-1.35c-.612-.324-1.338-.486-2.178-.486H4.84v7.812Zm16.563 2.538c-1.104 0-2.076-.216-2.916-.648-.828-.432-1.47-1.02-1.926-1.764-.456-.756-.684-1.614-.684-2.574 0-.972.222-1.83.666-2.574a4.764 4.764 0 0 1 1.854-1.764c.78-.432 1.662-.648 2.646-.648.948 0 1.8.204 2.556.612a4.422 4.422 0 0 1 1.818 1.728c.444.744.666 1.638.666 2.682 0 .108-.006.234-.018.378a42.22 42.22 0 0 1-.036.378h-7.866v-1.638h6.39l-1.08.486c0-.504-.102-.942-.306-1.314a2.171 2.171 0 0 0-.846-.864c-.36-.216-.78-.324-1.26-.324s-.906.108-1.278.324c-.36.204-.642.498-.846.882-.204.372-.306.816-.306 1.332v.432c0 .528.114.996.342 1.404.24.396.57.702.99.918.432.204.936.306 1.512.306.516 0 .966-.078 1.35-.234.396-.156.756-.39 1.08-.702l1.494 1.62a4.437 4.437 0 0 1-1.674 1.17c-.672.264-1.446.396-2.322.396Zm12.435-9.972c.768 0 1.452.156 2.052.468.612.3 1.092.768 1.44 1.404.348.624.522 1.428.522 2.412V60h-2.808v-5.112c0-.78-.174-1.356-.522-1.728-.336-.372-.816-.558-1.44-.558-.444 0-.846.096-1.206.288-.348.18-.624.462-.828.846-.192.384-.288.876-.288 1.476V60h-2.808v-9.684h2.682v2.682l-.504-.81a3.587 3.587 0 0 1 1.494-1.494c.648-.348 1.386-.522 2.214-.522Zm11.436 9.972c-1.104 0-2.076-.216-2.916-.648-.828-.432-1.47-1.02-1.926-1.764-.456-.756-.684-1.614-.684-2.574 0-.972.222-1.83.666-2.574a4.764 4.764 0 0 1 1.854-1.764c.78-.432 1.662-.648 2.646-.648.948 0 1.8.204 2.556.612a4.422 4.422 0 0 1 1.818 1.728c.444.744.666 1.638.666 2.682 0 .108-.006.234-.018.378a42.22 42.22 0 0 1-.036.378h-7.866v-1.638h6.39l-1.08.486c0-.504-.102-.942-.306-1.314a2.171 2.171 0 0 0-.846-.864c-.36-.216-.78-.324-1.26-.324s-.906.108-1.278.324c-.36.204-.642.498-.846.882-.204.372-.306.816-.306 1.332v.432c0 .528.114.996.342 1.404.24.396.57.702.99.918.432.204.936.306 1.512.306.516 0 .966-.078 1.35-.234.396-.156.756-.39 1.08-.702l1.494 1.62a4.437 4.437 0 0 1-1.674 1.17c-.672.264-1.446.396-2.322.396Zm11.103 3.492c-.912 0-1.794-.114-2.646-.342-.84-.216-1.542-.546-2.106-.99l1.116-2.016c.408.336.924.6 1.548.792.636.204 1.26.306 1.872.306.996 0 1.716-.222 2.16-.666.456-.444.684-1.104.684-1.98v-1.458l.18-2.43-.036-2.448v-2.088h2.664v8.064c0 1.8-.468 3.126-1.404 3.978-.936.852-2.28 1.278-4.032 1.278Zm-.432-4.104c-.9 0-1.716-.192-2.448-.576a4.763 4.763 0 0 1-1.746-1.638c-.432-.708-.648-1.53-.648-2.466 0-.948.216-1.77.648-2.466a4.573 4.573 0 0 1 1.746-1.638c.732-.384 1.548-.576 2.448-.576.816 0 1.536.168 2.16.504.624.324 1.11.834 1.458 1.53.348.684.522 1.566.522 2.646 0 1.068-.174 1.95-.522 2.646-.348.684-.834 1.194-1.458 1.53-.624.336-1.344.504-2.16.504Zm.558-2.304a2.9 2.9 0 0 0 1.314-.288c.384-.204.684-.486.9-.846.216-.36.324-.774.324-1.242 0-.48-.108-.894-.324-1.242a2.145 2.145 0 0 0-.9-.828 2.758 2.758 0 0 0-1.314-.306c-.492 0-.93.102-1.314.306-.384.192-.69.468-.918.828-.216.348-.324.762-.324 1.242 0 .468.108.882.324 1.242.228.36.534.642.918.846a2.9 2.9 0 0 0 1.314.288ZM70.368 60v-1.89l-.18-.414v-3.384c0-.6-.186-1.068-.558-1.404-.36-.336-.918-.504-1.674-.504a4.81 4.81 0 0 0-1.53.252 3.904 3.904 0 0 0-1.26.648l-1.008-1.962c.528-.372 1.164-.66 1.908-.864a8.54 8.54 0 0 1 2.268-.306c1.476 0 2.622.348 3.438 1.044.816.696 1.224 1.782 1.224 3.258V60h-2.628Zm-2.952.144c-.756 0-1.404-.126-1.944-.378-.54-.264-.954-.618-1.242-1.062a2.686 2.686 0 0 1-.432-1.494c0-.576.138-1.08.414-1.512.288-.432.738-.768 1.35-1.008.612-.252 1.41-.378 2.394-.378h2.574v1.638h-2.268c-.66 0-1.116.108-1.368.324-.24.216-.36.486-.36.81 0 .36.138.648.414.864.288.204.678.306 1.17.306.468 0 .888-.108 1.26-.324.372-.228.642-.558.81-.99l.432 1.296c-.204.624-.576 1.098-1.116 1.422-.54.324-1.236.486-2.088.486Zm12.35 0c-.913 0-1.735-.204-2.467-.612a4.689 4.689 0 0 1-1.746-1.746c-.42-.744-.63-1.62-.63-2.628 0-1.02.21-1.902.63-2.646a4.556 4.556 0 0 1 1.746-1.728c.732-.408 1.554-.612 2.466-.612.817 0 1.53.18 2.142.54.612.36 1.087.906 1.422 1.638.337.732.505 1.668.505 2.808 0 1.128-.163 2.064-.487 2.808-.323.732-.791 1.278-1.403 1.638-.6.36-1.326.54-2.178.54Zm.485-2.304c.456 0 .87-.108 1.242-.324.373-.216.666-.522.883-.918.227-.408.341-.888.341-1.44 0-.564-.114-1.044-.341-1.44a2.322 2.322 0 0 0-.883-.918 2.428 2.428 0 0 0-1.242-.324c-.468 0-.888.108-1.26.324a2.45 2.45 0 0 0-.9.918c-.215.396-.323.876-.323 1.44 0 .552.108 1.032.323 1.44.229.396.529.702.9.918.373.216.793.324 1.26.324ZM82.79 60v-1.98l.055-2.88-.18-2.862v-5.634h2.808V60H82.79Zm9.89.144c-1.033 0-1.95-.216-2.755-.648a5.044 5.044 0 0 1-1.89-1.764c-.456-.756-.684-1.614-.684-2.574 0-.972.228-1.83.684-2.574a4.861 4.861 0 0 1 1.89-1.764c.804-.432 1.722-.648 2.754-.648 1.02 0 1.932.216 2.736.648a4.743 4.743 0 0 1 1.89 1.746c.456.744.684 1.608.684 2.592 0 .96-.228 1.818-.684 2.574a4.872 4.872 0 0 1-1.89 1.764c-.804.432-1.716.648-2.736.648Zm0-2.304c.467 0 .887-.108 1.26-.324.371-.216.665-.522.881-.918.216-.408.324-.888.324-1.44 0-.564-.108-1.044-.324-1.44a2.322 2.322 0 0 0-.882-.918 2.463 2.463 0 0 0-1.26-.324c-.468 0-.888.108-1.26.324a2.45 2.45 0 0 0-.9.918c-.216.396-.324.876-.324 1.44 0 .552.108 1.032.324 1.44.228.396.528.702.9.918.372.216.792.324 1.26.324Z"
                />
            </svg>
    )
}
export default CancelledIcon