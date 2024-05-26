import { AreaChart, EventProps } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'


const chartDataDate =
[{"date":"2016-01-01","value":361.14},{"date":"2016-02-01","value":364.24},{"date":"2016-03-01","value":403.33},{"date":"2016-04-01","value":390.0},{"date":"2016-05-01","value":395.07},{"date":"2016-06-01","value":402.42},{"date":"2016-07-01","value":414.16},{"date":"2016-08-01","value":482.51},{"date":"2016-09-01","value":508.37},{"date":"2016-10-01","value":539.21},{"date":"2016-11-01","value":600.83},{"date":"2016-12-01","value":603.7},{"date":"2017-01-01","value":598.42},{"date":"2017-02-01","value":507.26},{"date":"2017-03-01","value":538.18},{"date":"2017-04-01","value":552.81},{"date":"2017-05-01","value":559.14},{"date":"2017-06-01","value":550.0},{"date":"2017-07-01","value":555.55},{"date":"2017-08-01","value":578.57},{"date":"2017-09-01","value":555.3},{"date":"2017-10-01","value":550.82},{"date":"2017-11-01","value":550.82},{"date":"2017-12-01","value":533.33}]



const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function AreaChartHero() {
    const [value, setValue] = useState(null);
     
    
  return (
  <>
     <div className="p-10">
     <AreaChart
        className="mt-4 p-10 h-72"
        data={chartDataDate}
        index="date"
        categories={['value']}
        colors={['blue', 'red']}
        yAxisWidth={65}
        onValueChange={(v) => setValue(v)}
        connectNulls={true}
      />
     </div>

  </>

  );
}