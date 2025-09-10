import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FilterSidebar, { Filters } from './FilterSidebar';
import ChartsSection from './ChartsSection';
import MapView from './MapView';
import DataTable from './DataTable';
import { marineSpeciesData, SpeciesData } from '@/data/marineData';
import { BarChart3, Map, Database, TrendingUp, Fish, Waves } from 'lucide-react';

const Dashboard = () => {
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    dataset: 'all',
    yearRange: [2020, 2023],
    depthRange: [0, 500],
    phylum: 'all',
    country: 'all'
  });

  // Filter data based on current filters
  const filteredData = useMemo(() => {
    return marineSpeciesData.filter((species: SpeciesData) => {
      // Search term filter
      if (filters.searchTerm && 
          !species.scientificName.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
          !species.commonName.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }

      // Dataset filter
      if (filters.dataset !== 'all' && species.dataset !== filters.dataset) {
        return false;
      }

      // Phylum filter
      if (filters.phylum !== 'all' && species.phylum !== filters.phylum) {
        return false;
      }

      // Country filter
      if (filters.country !== 'all' && species.country !== filters.country) {
        return false;
      }

      // Year range filter
      if (species.year < filters.yearRange[0] || species.year > filters.yearRange[1]) {
        return false;
      }

      // Depth range filter
      if (species.depth < filters.depthRange[0] || species.depth > filters.depthRange[1]) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Calculate summary statistics
  const summaryStats = useMemo(() => {
    const totalRecords = filteredData.length;
    const uniqueSpecies = new Set(filteredData.map(s => s.scientificName)).size;
    const uniqueCountries = new Set(filteredData.map(s => s.country)).size;
    const avgDepth = filteredData.reduce((sum, s) => sum + s.depth, 0) / filteredData.length || 0;
    
    return {
      totalRecords,
      uniqueSpecies,
      uniqueCountries,
      avgDepth: Math.round(avgDepth)
    };
  }, [filteredData]);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <FilterSidebar onFiltersChange={setFilters} />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 space-y-6">
          {/* Header with Summary Stats */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-primary">Marine Biodiversity Dashboard</h1>
                <p className="text-muted-foreground mt-1">
                  Exploring marine life distribution and patterns
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Waves className="h-8 w-8 text-primary" />
                <Badge variant="secondary">Live Data</Badge>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-surface">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Database className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-primary">{summaryStats.totalRecords.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Total Records</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-surface">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Fish className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-2xl font-bold text-secondary">{summaryStats.uniqueSpecies}</p>
                      <p className="text-sm text-muted-foreground">Unique Species</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-surface">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Map className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-2xl font-bold text-accent">{summaryStats.uniqueCountries}</p>
                      <p className="text-sm text-muted-foreground">Countries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-surface">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-primary">{summaryStats.avgDepth}m</p>
                      <p className="text-sm text-muted-foreground">Avg Depth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Charts</span>
              </TabsTrigger>
              <TabsTrigger value="map" className="flex items-center space-x-2">
                <Map className="h-4 w-4" />
                <span className="hidden sm:inline">Map</span>
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center space-x-2">
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Data</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <ChartsSection />
            </TabsContent>

            <TabsContent value="map" className="space-y-6">
              <MapView filteredData={filteredData} />
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              <DataTable data={filteredData} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;