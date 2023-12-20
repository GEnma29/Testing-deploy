
export const adapterData = (data: any[]) => {

    return data.map((item: any) => ({
        amount: item.amount,
        payment_id: item.id,
        client: item.email,
        multi_order_id: item.multi_order_id,

    }))

}