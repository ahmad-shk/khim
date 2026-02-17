'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PathnameHandler() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/menu' || pathname === '/contact') {
            document.documentElement.classList.add('inner--page');
        } else {
            document.documentElement.classList.remove('inner--page');
        }
    }, [pathname]);

    return null;
}
