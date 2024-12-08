import React from 'react';
import AbundantRecoveryFlow from '../../../../assets/image/AbundantRecoveryFlow.png'
import './AbandonedCartFlow.css'

const AbandonedCartFlow = () => {
    return (
        // <svg width="800" height="400" xmlns="http://www.w3.org/2000/svg">
        //     {/* Abandoned Cart Detected */}
        //     <rect x="50" y="50" width="200" height="50" fill="none" stroke="blue" strokeWidth="2" />
        //     <text x="75" y="80" fill="blue" fontSize="14">
        //         Abandoned Cart Detected
        //     </text>

        //     {/* Reminder Sent */}
        //     <rect x="300" y="50" width="200" height="50" fill="none" stroke="blue" strokeWidth="2" />
        //     <text x="325" y="80" fill="blue" fontSize="14">
        //         Reminder Sent (WhatsApp/SMS/Email)
        //     </text>

        //     {/* Order Completed */}
        //     <rect x="50" y="200" width="200" height="50" fill="none" stroke="blue" strokeWidth="2" />
        //     <text x="100" y="230" fill="blue" fontSize="14">
        //         Order Completed
        //     </text>

        //     {/* Customer Returns */}
        //     <rect x="300" y="200" width="200" height="50" fill="none" stroke="blue" strokeWidth="2" />
        //     <text x="350" y="230" fill="blue" fontSize="14">
        //         Customer Returns
        //     </text>

        //     {/* Arrows */}
        //     {/* From Abandoned Cart to Reminder Sent */}
        //     <line x1="250" y1="75" x2="300" y2="75" stroke="blue" strokeWidth="2" markerEnd="url(#arrowhead)" />
        //     {/* From Reminder Sent to Order Completed */}
        //     <line x1="400" y1="100" x2="400" y2="200" stroke="blue" strokeWidth="2" markerEnd="url(#arrowhead)" />
        //     {/* From Reminder Sent to Customer Returns */}
        //     <line x1="500" y1="75" x2="550" y2="200" stroke="blue" strokeWidth="2" markerEnd="url(#arrowhead)" />
        //     {/* From Abandoned Cart to Order Completed */}
        //     <line x1="150" y1="100" x2="150" y2="200" stroke="blue" strokeWidth="2" markerEnd="url(#arrowhead)" />

        //     {/* Arrowhead Marker */}
        //     <defs>
        //         <marker
        //             id="arrowhead"
        //             markerWidth="10"
        //             markerHeight="7"
        //             refX="10"
        //             refY="3.5"
        //             orient="auto"
        //         >
        //             <polygon points="0 0, 10 3.5, 0 7" fill="blue" />
        //         </marker>
        //     </defs>

        //     {/* Caption */}
        //     <text x="50" y="350" fill="blue" fontSize="16" fontWeight="bold">
        //         Don’t let potential sales slip away. Our smart recovery system ensures your customers can easily pick up where
        //         they left off—on their preferred platform.
        //     </text>
        // </svg>

        <div className="home-section mt-0 pt-0">
            <div className='overview-container'>
                <div className='abundant-recovery-flow'>
                    <img src={AbundantRecoveryFlow} alt="Abundant Recovery Flow" className='mt-5' />
                </div>
            </div>
        </div>


    );
};

export default AbandonedCartFlow;
