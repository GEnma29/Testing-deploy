import React, { lazy } from 'react'
import { RoutesWithNotFound } from '@/utilities'
import { Navigate, Route } from 'react-router-dom';
import { AnalyticsRoutes } from '@/models';

const Payments = lazy(() => import('../payments/payments.page'));
const PaymentDetails = lazy(() => import('../payments/payment-details.page'));
const AnalyticsViwer = () => {
    return (
        <RoutesWithNotFound>
            <Route path={`${AnalyticsRoutes.PAYMENTS}`} element={<Payments />} />
            <Route path={`${AnalyticsRoutes.PAYMENTS}/:paymentId`} element={<PaymentDetails />} />
        </RoutesWithNotFound>

    )
}

export default AnalyticsViwer