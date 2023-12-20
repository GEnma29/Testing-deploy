

export const adapterPayment = (data: any) => {
    return {
    id:data?.id || '',
    name:data?.name || '',
    image:data?.image || '',
    total: data?.amount_$ || '',
  }

}

export const adapterPaymentMethod = (method: string) => {
    const METHODS = {
        "100001": "Wallet",
        "100002": "Zele",
        "100003": 'pago movil',
        "100004": 'Taquilla',
        "100005": 'Stripe',
        "100006": 'Tarjeta internacional',
    }
    return METHODS[method as keyof typeof METHODS] || 'pago movil' 
}
export const adapterPaymentUser = (data: any, email: string) => {
    return {
    name:data?.user_name || '',
    user:data?.user_id || '',
    email:email || '',
    phone: 'none',
  }

}

export const adapterPaymentOrder = (data: any) => {
    return {
    table: data?.name || '' ,
    price: data?.price || '0',
  }
}
export const adapterPaymentProducts  = (data: any) => {
    return {
        name: data?.products[0]?.name || '',
        price: data?.products[0]?.price || '',
        quatity: data?.products?.length || 0
    }
}
export const adapterPaymentMultiOrderDetail = (data: any) => {
    return {
        id: data?.id || '',
        payment_method: adapterPaymentMethod(data?.method_id) || '',
        confirmation_number: data?.confirmation_number || '',
        confirmation_email: data?.email,
  } 

}

export const adapterPaymentEvent = (data: any) => {
    return {
     event_id:data?.id || '',
     name:data?.name || '',
     image:data?.image || '',
  }

}