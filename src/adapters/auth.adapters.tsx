import { jwtDecode } from 'jwt-decode';

export const adapterAccessToken = (token: string) => {
  const decoded = jwtDecode(token) as any;
  return {
    name: decoded.first_name,
    last_name: decoded.last_name,
    secret: decoded.secret,
    email: decoded.email,
    id: decoded.id,
    roles: {
      public: decoded.roles.public,
      funkart: decoded.roles.funkart,
    },
  };
};
