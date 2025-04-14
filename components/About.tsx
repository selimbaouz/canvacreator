import { cn } from '@/lib/utils';
import React from 'react';
import { Separator } from './ui/separator';
import Link from 'next/link';

const About = () => {
    return (
        <div className={cn("w-full space-y-4", "lg:space-y-5")}>
            <p className={cn("text-sm", "lg:text-lg")}>
                FullStack Developer, Web/3D Designer, SEO
            </p>
            <Separator className="my-6 lg:max-w-4xl" />
            <div className='space-y-6'>
                <h6 className={cn("font-semibold", "lg:text-xl")}>Liens</h6>
                <div className={cn("flex items-center gap-4", "lg:text-lg")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"></path></svg>
                    <Link 
                        href="https://selimbaouz.com" 
                        className='underline text-primary'
                        target="_blank"
                        rel="noopener noreferrer" 
                    >
                        https://selimbaouz.com
                    </Link>
                </div>
            </div>
            <Separator className="my-6 lg:max-w-4xl" />
            <div className='space-y-6'>
                <h6 className={cn("font-semibold",  "lg:text-xl")}>Plus d{"'"}infos</h6>
                <div className={cn("flex items-center gap-4")}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 8.5c0 4.014-4.092 9.49-6.019 11.845a1.258 1.258 0 0 1-1.962 0C9.092 17.99 5 12.515 5 8.5c0-3.87 3.13-7 7-7s7 3.13 7 7Zm-5.332 8.526c-.683 1.053-1.394 2.148-1.668 2.148s-.985-1.095-1.668-2.148c-.203-.312-.403-.62-.589-.896-.846-1.255-1.671-2.638-2.28-3.997C6.845 10.753 6.5 9.509 6.5 8.5 6.5 5.458 8.958 3 12 3s5.5 2.458 5.5 5.5c0 1.009-.345 2.254-.963 3.633-.609 1.36-1.434 2.742-2.28 3.997a61.27 61.27 0 0 0-.589.896ZM12 9a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm0 1.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor"></path></svg>
                    <p className={cn("text-sm", "lg:text-lg")}>Marseille, France</p>
                </div>
            </div>
        </div>
    );
};

export default About;