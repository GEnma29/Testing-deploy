import { SVGProps } from 'react';
import { cn } from '@/utilities';

const TicketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn(props.className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V14.625C2 14.4417 2.05833 14.2833 2.175 14.15C2.29167 14.0167 2.44167 13.9333 2.625 13.9C3.025 13.7667 3.35433 13.525 3.613 13.175C3.87167 12.825 4.00067 12.4333 4 12C4 11.5667 3.87067 11.175 3.612 10.825C3.35334 10.475 3.02434 10.2333 2.625 10.1C2.44167 10.0667 2.29167 9.98334 2.175 9.85C2.05833 9.71667 2 9.55834 2 9.375V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.805 4.98 22.0007 5.45067 22 6V9.375C22 9.55834 21.9417 9.71667 21.825 9.85C21.7083 9.98334 21.5583 10.0667 21.375 10.1C20.975 10.2333 20.6457 10.475 20.387 10.825C20.1283 11.175 19.9993 11.5667 20 12C20 12.4333 20.1293 12.825 20.388 13.175C20.6467 13.525 20.9757 13.7667 21.375 13.9C21.5583 13.9333 21.7083 14.0167 21.825 14.15C21.9417 14.2833 22 14.4417 22 14.625V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4ZM4 18H20V15.45C19.3833 15.0833 18.8957 14.596 18.537 13.988C18.1783 13.38 17.9993 12.7173 18 12C18 11.2833 18.179 10.6207 18.537 10.012C18.895 9.40334 19.3827 8.916 20 8.55V6H4V8.55C4.61667 8.91667 5.10433 9.40434 5.463 10.013C5.82167 10.6217 6.00067 11.284 6 12C6 12.7167 5.821 13.3793 5.463 13.988C5.105 14.5967 4.61734 15.084 4 15.45V18ZM12 17C12.2833 17 12.521 16.904 12.713 16.712C12.905 16.52 13.0007 16.2827 13 16C13 15.7167 12.904 15.479 12.712 15.287C12.52 15.095 12.2827 14.9993 12 15C11.7167 15 11.479 15.096 11.287 15.288C11.095 15.48 10.9993 15.7173 11 16C11 16.2833 11.096 16.521 11.288 16.713C11.48 16.905 11.7173 17.0007 12 17ZM12 13C12.2833 13 12.521 12.904 12.713 12.712C12.905 12.52 13.0007 12.2827 13 12C13 11.7167 12.904 11.479 12.712 11.287C12.52 11.095 12.2827 10.9993 12 11C11.7167 11 11.479 11.096 11.287 11.288C11.095 11.48 10.9993 11.7173 11 12C11 12.2833 11.096 12.521 11.288 12.713C11.48 12.905 11.7173 13.0007 12 13ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99934 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71734 11 8C11 8.28334 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9Z"
        fill={props.fill ? props.fill : '#211E52'}
      />
    </svg>
  );
};

export default TicketIcon;