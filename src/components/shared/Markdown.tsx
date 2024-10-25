'use server';

// packages
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import fs from 'node:fs/promises';
import { getPlaiceholder } from 'plaiceholder';

interface MarkdownProps {
    source: string;
}

export default async function Markdown({ source }: MarkdownProps) {
    return (
        <MDXRemote
            source={source}
            components={{
                h1: ({ children }) => (
                    <h1 className='text-center text-3xl font-semibold'>
                        {children}
                    </h1>
                ),
                h2: ({ children }) => (
                    <h2 className='text-center text-2xl font-semibold'>
                        {children}
                    </h2>
                ),
                h3: ({ children }) => (
                    <h3 className='text-center text-xl font-semibold'>
                        {children}
                    </h3>
                ),
                p: ({ children }) => (
                    <p className='break-words text-justify indent-4'>
                        {children}
                    </p>
                ),
                strong: ({ children }) => (
                    <strong className='font-semibold'>{children}</strong>
                ),
                a: (props) => (
                    <a
                        href={props.href}
                        target='_blank'
                        style={{
                            textDecoration: 'underline',
                            color: '#024caa',
                            fontWeight: 500
                        }}
                    >
                        {props.children}
                    </a>
                ),
                img: async (props) => {
                    const buffer = await fs.readFile(
                        process.cwd() + '/public' + props.src
                    );
                    const { base64 } = await getPlaiceholder(buffer);

                    return (
                        <Image
                            src={props.src || ''}
                            alt='showcase image'
                            width={2560}
                            height={1440}
                            priority
                            placeholder='blur'
                            blurDataURL={base64}
                            className='h-auto w-full rounded-xl shadow'
                        />
                    );
                }
            }}
        />
    );
}
