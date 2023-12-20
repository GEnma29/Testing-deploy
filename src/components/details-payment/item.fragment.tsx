import { classNames, cn } from "@/utilities"


const Item: React.FC<{
    field: string,
    value: string | number,
}> = ({ field, value }) => {
    return (
        <div className={cn('flex', classNames)}>
            <p className='inline-flex font-light text-sm md:text-base  lg:text-lg'>
                <strong className='inline-flex font-bold mr-2 text-sm md:text-base lg:text-lg'>{field}: </strong>{value}</p>
        </div>
    )

}
export default Item