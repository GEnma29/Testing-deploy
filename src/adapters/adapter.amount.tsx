export const adapterAmount = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export const adapterExchangeRate = (data: any) => {
    return {
        amount: data[0]?.amount || 0,
    }

}