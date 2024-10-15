// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog } from '@/components/shared';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 Not found'
};

export default function NotFound() {
    return (
        <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
            <Avatar />
            <MessageDialog
                messages={[
                    'Oops, page not found!',
                    'Looks like you took a wrong turn!'
                ]}
                arrow='top'
            />
            <Link
                href='/'
                className='rounded bg-primary-200 px-4 py-2 font-medium hover:bg-primary-100'
            >
                Go back to the Homepage 🏠
            </Link>
        </section>
    );
}