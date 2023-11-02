import * as React from 'react';
import Text from './Text';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export default function ROI({number = 300}) {

  return (
            <div>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" thickness={5} value={75} />
                  <Box
                    sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: 'absolute',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								 >
                 <font style={{fontSize: "0.3em"}}>
                     <b>10%<br /> ROI</b>
                 </font>
                </Box>
              </Box>
           </div>
  )
}
