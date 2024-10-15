// packages
import type { Metadata } from 'next';

// components
import { Avatar, MessageDialog } from '@/components/shared';

export const metadata: Metadata = {
    title: 'Posts'
};

export default function Page() {
    return (
        <>
            <section className='mx-auto flex w-fit flex-col items-center gap-y-4'>
                <Avatar />
                <MessageDialog
                    messages={[
                        "I don't have any posts yet,",
                        "but I'll be sharing soon. Stay tuned!"
                    ]}
                    arrow='top'
                />
            </section>
            <section>
                <h1 className='text-center font-semibold'>Posts</h1>
            </section>
        </>
    );
}
