// import React from "react";

// export function useOnClickOutside(ref: React.RefObject<any>, handler: () => void) {
//     React.useEffect(() => {
//       const listener = (event: TouchEvent | MouseEvent) => {
//         if (!ref || !ref.current) {
//           return;
//         }
       
//         handler();
//       };
  
//       document.addEventListener('mousedown', listener);
//       document.addEventListener('touchstart', listener);
  
//       return () => {
//         document.removeEventListener('mousedown', listener);
//         document.removeEventListener('touchstart', listener);
//       };
//     }, [ref, handler]);
//   }

   