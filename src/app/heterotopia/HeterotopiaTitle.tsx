import * as React from 'react'

import {useHeterotopiaGradient} from './useHeterotopiaGradient'

export const HeterotopiaTitle: React.FC = props => {
    const linearGradient = useHeterotopiaGradient()

    return (
        <h2 style={{
            background: linearGradient,
        }}>
            <style jsx>{`
                h2 {
                    display: inline;

                    font-size: var(--font-h2-size);
                    text-transform: uppercase;
                    padding: 2px 2px;
                    background: rgb(255,0,255);
                    color: #fff;
                }
            `}</style>

            {props.children}
        </h2>
    )
}
