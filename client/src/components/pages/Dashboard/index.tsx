import React from 'react';
import dayjs from 'dayjs';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Label } from 'recharts';
import {getTimeseries} from 'ducks/timeseries';
import {stringToUnix} from 'services/formatDate';
import { PaginationTable } from 'modules/table';
import {selectTimeseriesDatetimes, selectTimeseriesValues} from 'selectors/timeseries'
import { useDispatch, useSelector } from 'services/hooks';
import { Page } from 'modules/pageLayout';

import {timeriesMock} from './mock'; 
import { TimeseriesFilters } from './components/TimeseriesFilters'; 
import tableHeader from './tableHeader';


const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const memoTableHeader = React.useMemo(() => tableHeader(), []);

  const { ReferenceDate,  Value} = timeriesMock[0];

  const data: { timestamp: string; value: number; }[] = []
  const pagination = {
    offset: 0,
    limit: 10,
    total: 5000,
  }

  ReferenceDate.forEach((el, i) => data.push({
    timestamp: el,
    value: Value[i]
  }))

  React.useEffect(() => {
    dispatch(getTimeseries({
      TimeZone: "Europe/Zurich",
      Identifiers: "POWER_ES_ESIOS_Demanda_prevista"
    }))
  }, [])
  
  const begin = data[0].timestamp;
  const end = data[data.length -1].timestamp

  return (
    <Page title="Dashboard">
      <h1>Time series data</h1>
      <ResponsiveContainer width="90%" aspect={3}>
        <LineChart width={1000} height={500} data={data}
        margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" ticks={[begin, end]} tickFormatter={(tickItem) => dayjs(tickItem).format('MMM Do YY')}>
            <Label value="timestamp" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'values', angle: -90, position: 'left' }}/>
          <Legend verticalAlign="top" height={36}/>
          <Tooltip />
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth="1" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:0.2}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 1,r:0.2}} />
        </LineChart>
      </ResponsiveContainer>
      <TimeseriesFilters /> 
      <h1>Time series table data</h1>
      <PaginationTable<Timeseries>
        columns={memoTableHeader}
        pagination={pagination}
        data={data}
        isLoading={false}
      />
    </Page>
  );
};

type Timeseries = {
  timestamp: string;
  value: number;
}

export default Dashboard;
