import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { 
  speciesDistributionData, 
  monthlyOccurrenceData, 
  depthDistributionData, 
  datasetContributionData 
} from '@/data/marineData';
import { TrendingUp, PieChart as PieChartIcon, BarChart3, Activity } from 'lucide-react';

const COLORS = {
  primary: 'hsl(215 85% 25%)',
  secondary: 'hsl(185 65% 35%)',
  accent: 'hsl(180 75% 45%)',
  muted: 'hsl(210 30% 95%)',
  tertiary: 'hsl(195 100% 50%)'
};

const CHART_COLORS = [COLORS.primary, COLORS.secondary, COLORS.accent, COLORS.tertiary, 'hsl(200 100% 60%)'];

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Species Distribution Pie Chart */}
      <Card className="bg-gradient-surface">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <PieChartIcon className="h-5 w-5 text-primary" />
            <CardTitle>Species Distribution by Type</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={speciesDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {speciesDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Occurrence Line Chart */}
      <Card className="bg-gradient-surface">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <CardTitle>Monthly Species Occurrences</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyOccurrenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 25% 88%)" />
              <XAxis dataKey="month" stroke="hsl(215 25% 45%)" />
              <YAxis stroke="hsl(215 25% 45%)" />
              <Tooltip 
                formatter={(value) => [value, 'Occurrences']}
                labelStyle={{ color: 'hsl(220 90% 12%)' }}
              />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke={COLORS.primary} 
                strokeWidth={3}
                dot={{ fill: COLORS.secondary, strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: COLORS.accent }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Depth Distribution Bar Chart */}
      <Card className="bg-gradient-surface">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <CardTitle>Distribution by Depth Range</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={depthDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 25% 88%)" />
              <XAxis dataKey="name" stroke="hsl(215 25% 45%)" />
              <YAxis stroke="hsl(215 25% 45%)" />
              <Tooltip 
                formatter={(value, name) => [value, name === 'count' ? 'Species Count' : 'Percentage']}
                labelStyle={{ color: 'hsl(220 90% 12%)' }}
              />
              <Bar dataKey="count" fill={COLORS.secondary} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Dataset Contribution */}
      <Card className="bg-gradient-surface">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-primary" />
            <CardTitle>Dataset Contributions</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={datasetContributionData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 25% 88%)" />
              <XAxis type="number" stroke="hsl(215 25% 45%)" />
              <YAxis dataKey="name" type="category" stroke="hsl(215 25% 45%)" width={100} />
              <Tooltip 
                formatter={(value) => [value, 'Records']}
                labelStyle={{ color: 'hsl(220 90% 12%)' }}
              />
              <Bar dataKey="count" fill={COLORS.accent} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartsSection;