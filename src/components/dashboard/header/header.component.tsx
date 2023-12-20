import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { classNames } from '../../../utilities';
import {
  Home,
  Menu,
  Events,
  PendingPayment,
  Manager,
  Protocol,
  Cashiers,
  HistoryEvents,
  HistoryPayments,
  Balance,
  ExchangeRate,
  PersonalInfo,
  LogOut,
} from '../../../icons';
import { MdOutlineClose } from 'react-icons/md';
import sidebarLogo from '../../../assets/sidebarLogo.svg';
import { PrivateRoutes, PublicRoutes, ROLES } from '../../../models';
import { useLocation, useNavigate, NavLink, useParams } from 'react-router-dom';
import { userStore } from '../../../stores/user.store';
import { Separator } from '@/components/common/separator.component';

const HeaderDashboard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const { last_name, name, role, logout } = userStore((state) => state);
  const { pathname } = useLocation();
  const params = useParams();
  const navigate = useNavigate();


  const gotTo = (route: string) => {
    navigate(`/private/${route}`, { replace: true });
  };

  const closedSession = () => {
    localStorage.removeItem('access_token')
    logout()
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }

  const validateRoute = (routes: string[], currentRoute: string) => {
    return routes.some((route) => currentRoute.includes(route));
  };

  const AllElements = [
    // {
    //   name: 'Home',
    //   href: PrivateRoutes.DASHBOARD,
    //   icon: Home,
    //   current: validateRoute([PrivateRoutes.DASHBOARD], pathname),
    // },
    {
      name: 'Eventos',
      href: PrivateRoutes.EVENTS,
      icon: Events,
      current: validateRoute(
        [
          PrivateRoutes.EVENTS,
          `${PrivateRoutes.NEW_EVENT}`,
          PrivateRoutes.EVENT_DETAILS,
        ],
        pathname,
      ),
    },
    {
      name: 'Pagos Pendientes',
      href: PrivateRoutes.PENDING_PAYMENT,
      icon: PendingPayment,
      current: false,
    },
    {
      name: 'Manager Protocolo',
      href: PrivateRoutes.MANAGER,
      icon: Manager,
      current: false,
    },
    { name: 'Protocolo', href: PrivateRoutes.PROTOCOL, icon: Protocol, current: false },
    { name: 'Cajeros', href: PrivateRoutes.CASHIERS, icon: Cashiers, current: false },
    {
      name: 'Historial de Eventos',
      href: PrivateRoutes.EVENTS_HISTORY,
      icon: HistoryEvents,
      current: false,
    },
    {
      name: 'Historial de Pagos',
      href: PrivateRoutes.PAYMENTS,
      icon: HistoryPayments,
      current: false,
    },
    { name: 'Balance', href: '/balance', icon: Balance, current: false },
    {
      name: 'Tasa',
      href: PrivateRoutes.EXCHANGE_RATE,
      icon: ExchangeRate,
      current: false,
    },
    {
      name: 'Información Personal',
      href: '/about',
      icon: PersonalInfo,
      current: false,
    },
  ];

  const analyticsNavigation = [
    {
      name: 'Historial de Pagos',
      href: PrivateRoutes.PAYMENTS,
      icon: HistoryPayments,
      current: false,
    },

  ]
  const navigation = role.funkart[0] === 'admin' ? AllElements : analyticsNavigation

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-transparent" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <MdOutlineClose
                        className="h-6 w-6 text-primary-300"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2 ring-1 ring-gray-200">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-14 w-auto"
                      src={sidebarLogo}
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="-mx-2 flex-1 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <NavLink
                            replace
                            to={`../../private/${item.href}`}
                            // onClick={() => gotTo(item.href)}
                            className={classNames(
                              item.current
                                ? 'bg-gray-100 text-primary-300'
                                : 'text-gray-300 hover:text-primary-300 hover:bg-gray-200',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            )}
                          >
                            <item.icon
                              fill={item.current ? '#211E52' : '#ABABAB'}
                              className="h-6 w-6 shrink-0 hover: text-primary-300"
                              aria-hidden="true"
                            />
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                      <div></div>
                      <div
                        onClick={closedSession}
                        className="flex p-2 items-center cursor-pointer "
                      >
                        <LogOut />
                        <p className="flex ml-2 text-primary-300">
                          Cerrar Sesión
                        </p>
                      </div>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden px-2 lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-24 lg:overflow-y-auto lg:bg-white lg:pb-4">
        <div className="flex mt-1 h-14 shrink-0 items-center justify-center">
          <img className="h-14 w-auto" src={sidebarLogo} alt="show master" />
        </div>
        <Separator
          className="flex w-full items-center justify-center my-2  bg-background-200"
          orientation="horizontal"
        />
        <div className="divider m-0 p-0" />
        <nav className="mx-2">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  replace
                  to={`../../private/${item.href}`}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-white'
                      : 'text-gray-200 hover:text-white hover:bg-gray-100',
                    'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold',
                  )}
                >
                  <item.icon
                    fill={item.current ? '#211E52' : '#ABABAB'}
                    className="h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{item.name}</span>
                </NavLink>
              </li>
            ))}
            <LogOut onClick={closedSession} />
          </ul>
        </nav>
      </div>

      <div className="sticky top-0 z-40 flex justify-between items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-black-300 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <div className="flex justify-center items-center">
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
            <div className="flex">
              <img src={sidebarLogo} className="ml-4 h-12 w-12" />
              <div className="flex ml-2 flex-col">
                <h3 className="text-xs font-bold text-start">
                  {name} {last_name.split(' ')[0]}
                </h3>
                <p className="text-[10px] text-start">{role.funkart[0]}</p>
              </div>
            </div>
          </div>
        </button>
      </div>

      <main className="lg:pl-20">
        <div className="xl:p-20">
          <div className="w-full h-full lg:pl-14 ">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default HeaderDashboard;
