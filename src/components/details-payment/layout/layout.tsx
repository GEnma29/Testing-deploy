import React from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { useNavigate, useParams } from 'react-router-dom'
import { eventsFetcher, ordersFetcher } from '@/services'
import { PrivateRoutes, PublicRoutes, ROLES } from '@/models'
import { updateStatusPayment } from '@/services/order.service'
import { HeaderDashboard } from '@/components/dashboard/header'
import Header, { HeaderType } from '@/components/common/layout/header'
import DeatilsOrder from '../details-order'
import DetailsPaymentComponent from '../details-payment'
import { Button } from '@/components/common'
import {
    adapterPayment,
    adapterPaymentEvent,
    adapterPaymentMultiOrderDetail,
    adapterPaymentProducts,
    adapterPaymentUser
} from '@/adapters/payments.adapters'
import { PaymentStatus } from '@/models/oreders'
import { SnackbarUtilities } from '@/utilities'
import { useStore } from 'zustand'
import { userStore } from '@/stores/user.store'

const DatailsLayout: React.FC = () => {
    const navigate = useNavigate();
    const { role } = userStore((state) => state);
    console.log('role', role);
    console.log('role', role.public[0] === 'admin');
    const { paymentId } = useParams()

    // goTo
    const gotToPrivate = (route: string) => {
        navigate(`/private/${route}`, { replace: true });
    };

    const gotToPublic = (route: string) => {
        navigate(`/public/${route}`, { replace: true });
    };
    // get payment  info 
    const { data: dataPayment, isLoading: isLoadingPayment, error: errorPayment, } = useSWR(`/payments/${paymentId}`, ordersFetcher)
    const { data: dataEvent, isLoading: isLoadingEvent, error: errorEvent, } = useSWR(!isLoadingPayment && dataPayment.data.orders[0].event_id ? `/events/${dataPayment.data.orders[0].event_id}` : null, eventsFetcher)
    // info
    // console.log('data payment', dataPayment)
    // console.log('data event', dataEvent)
    // adaptetr 
    const eventInfo = adapterPaymentEvent(dataEvent?.data)
    const paymentInfo = adapterPayment(dataPayment?.data)
    const userInfo = adapterPaymentUser(dataPayment?.data?.multi_order, dataPayment?.data?.email)
    const orderInfo = adapterPaymentMultiOrderDetail(dataPayment?.data)
    const productsInfo = adapterPaymentProducts(dataPayment?.data?.orders[0])
    // update payment
    const { trigger, isMutating } = useSWRMutation(`/payments/${paymentId}`, updateStatusPayment, /* options */)
    const aprrovePayment = async () => {
        if (role.public[0] === ROLES.EVENT_ANALYTICS) return null
        try {
            const result = await trigger({ status: PaymentStatus.COMPLETED }, /* options */)
            if (!!result.data) {
                SnackbarUtilities.success('Pago aprovado');
                gotToPrivate(PrivateRoutes.PENDING_PAYMENT);
            }
            if (result.code === 401) {
                SnackbarUtilities.info('Seccion caducada');
                gotToPublic(PublicRoutes.LOGIN);
            }
            if (result.code === 400) {
                SnackbarUtilities.error('Error al aprobar el pago');
            }
        } catch (e) {
            console.log(e)
            // error handling
        }
    }
    const rejectPayment = async () => {
        if (role.public[0] === ROLES.EVENT_ANALYTICS) return null
        try {
            const result = await trigger({ status: PaymentStatus.REJECTED }, /* options */)
            if (!!result.data) {
                SnackbarUtilities.info('Pago Rechazado');
                gotToPrivate(PrivateRoutes.PENDING_PAYMENT);
            }
            if (result.code === 401) {
                SnackbarUtilities.info('Seccion caducada');
                gotToPublic(PublicRoutes.LOGIN);
            }
            if (result.code === 400) {
                SnackbarUtilities.error('Error al rechazar el pago');
            }
        } catch (e) {
            console.log(e)
            // error handling
        }
    }
    const isLoading = isLoadingPayment || isLoadingEvent
    return (
        <HeaderDashboard
            children={
                <div className="flex px-8 content-start w-full h-screen flex-col">
                    <Header
                        className="mt-6"
                        type={HeaderType.ADD}
                        textLeft='Regresar'
                        actionRight={() => { }}
                        actionLeft={() => navigate(-1)}
                        title="Pago"
                    />
                    {isLoading ? <>Loading ....</> :
                        <div className='flex w-full justify-around  mt-8 flex-wrap'>
                            <DetailsPaymentComponent paymentInfo={{
                                event: eventInfo.name,
                                zone: productsInfo.name,
                                tables: dataPayment?.data?.orders?.length,
                                chairs: productsInfo.quatity,
                                price: productsInfo.price,
                                total: paymentInfo.total,
                                image: eventInfo.image,
                            }}
                            />
                            <div className='flex flex-col w-full lg:w-[40rem]  '>
                                <DeatilsOrder user={userInfo}
                                    order={orderInfo}



                                />
                                {role.public[0] !== ROLES.EVENT_ANALYTICS && <div className='mt-4 flex flex-col lg:flex-row'>
                                    <Button className='' onClick={rejectPayment} variant='secondary'>Rechazar Pago</Button>
                                    <Button onClick={aprrovePayment} className=' mt-2 lg:mt-0 lg:ml-2'>Aprobar Pago</Button>
                                </div>}
                            </div>


                        </div>}
                </div>
            }
        />
    )
}

export default DatailsLayout