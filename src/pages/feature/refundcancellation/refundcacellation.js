import TopNav from '../../../navbar/TopNav'

import RefundCancellationPolicy from './refundpolicy/refundpolicy'

export default function RefundCancellation() {
  return (
    <div>
        <div className='mt-2'>
            <TopNav />
        </div> 
      <RefundCancellationPolicy />
    </div>
  );
}