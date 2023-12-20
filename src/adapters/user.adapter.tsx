
export const adapterUser = (user: any) => {
    return {
        id: user?.id || '',
        birthday: user?.birthday || '',
        email: user?.email || '',
        email_notifications: user?.email_notifications || '',
        first_name: user?.first_name || '',
        last_name: user?.last_name || '',
        adrress: user?.address || '',
        phone: user?.phone_number || '',
        role: user?.role || '',
        identity: user?.identity || '',
        active: user?.active || false,
        image: user?.image || '',

    }
}