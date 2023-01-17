import React from 'react';
import './index.css';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    variant:
        | 'body'
        | 'small'
        | 'xs'
    color?: 'primary' | 'secondary' | 'grey',
    as?: string | React.ComponentType<any>,
    bold?: boolean
}

export const Text = React.forwardRef<HTMLElement, TextProps>(
    ({ variant, as = 'span', color = 'primary', className,
         bold, ...props }, ref) => {
        const Component = as;

        return <Component className={[`text__${variant}`, `text__${color}`,
            bold && `text__bold`, className].join(' ')} {...props} />;
    },
);
