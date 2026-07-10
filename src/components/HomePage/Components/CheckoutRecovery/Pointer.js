import React from 'react'

const Pointer = () => {
    return (
        <span className='ms-2'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={30}
                height={30}
                x={0}
                y={0}
                viewBox="0 0 60 60"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
                className="hovered-paths"
            >
                <g transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,59.99974822998048,59.99997758865356)">
                    <path
                        fill="#60a9eb"
                        d="M54.081 32.01 23.192 58.383c-1.897 1.62-4.71-.191-4.11-2.646l6.135-25.102a2.678 2.678 0 0 0 0-1.271L19.082 4.262c-.6-2.454 2.213-4.265 4.11-2.645L54.081 27.99c1.225 1.046 1.225 2.974 0 4.02z"
                        opacity={1}
                        data-original="#65a7ef"
                        className="hovered-path"
                    />
                    <circle
                        cx={12}
                        cy={30}
                        r={7}
                        fill="#60a9eb"
                        opacity={1}
                        data-original="#65a7ef"
                        className="hovered-path"
                    />
                    <g fill="#83c4ff">
                        <path
                            d="M37.174 18.813a.997.997 0 0 1-.655-.244l-8.547-7.413a1 1 0 0 1 1.311-1.512l8.547 7.413a1.001 1.001 0 0 1-.655 1.756zM40.296 21.522a.993.993 0 0 1-.655-.245l-.666-.578a1 1 0 1 1 1.31-1.51l.666.578a1 1 0 0 1-.655 1.755z"
                            fill="#c5dcf1"
                            opacity={1}
                            data-original="#83c4ff"
                            className=""
                        />
                    </g>
                </g>
            </svg>

        </span>
    )
}

export default Pointer