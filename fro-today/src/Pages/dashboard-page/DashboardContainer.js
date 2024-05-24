import { LineChart, Line, XAxis,BarChart,Bar,YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Container, Typography } from '@mui/material';

import conversionData from '../../utils/Conversions'

import studentTraffic from '../../utils/Traffic';

const DashboardContainer = () => {


    return (
        <div>
            <div>
                <Container>
                    <Typography variant="h5" gutterBottom>
                    Students Traffic
                    </Typography>
                    <Typography variant="h5" align="center" gutterBottom>
                        Students Traffic by Language
                    </Typography>
                    <BarChart
                        width={1000}
                        height={400}
                        data={studentTraffic}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="language" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalStudents" fill="#8884d8" />
                    </BarChart>
                </Container>
            </div>
            <div>
                <Container>
                    <Typography variant="h5" gutterBottom>
                        Purchesed Languages
                    </Typography>
                    <Typography variant="h5" align="center" gutterBottom>
                        Earning From Each Language (Line Graph)
                    </Typography>
                    <LineChart width={1000} height={400} data={conversionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="language" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="totalCost" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </Container>
            </div>
        </div>

    )
}

export default DashboardContainer