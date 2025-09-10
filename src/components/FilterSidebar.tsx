import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Filter, RotateCcw } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  onFiltersChange: (filters: any) => void;
}

export interface Filters {
  searchTerm: string;
  dataset: string;
  yearRange: number[];
  depthRange: number[];
  phylum: string;
  country: string;
}

const FilterSidebar = ({ onFiltersChange }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    dataset: 'all',
    yearRange: [2020, 2023],
    depthRange: [0, 500],
    phylum: 'all',
    country: 'all'
  });

  const handleFilterChange = (key: keyof Filters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      searchTerm: '',
      dataset: 'all',
      yearRange: [2020, 2023],
      depthRange: [0, 500],
      phylum: 'all',
      country: 'all'
    };
    setFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  const activeFilterCount = Object.entries(filters).filter(([key, value]) => {
    if (key === 'searchTerm') return value !== '';
    if (key === 'yearRange') return value[0] !== 2020 || value[1] !== 2023;
    if (key === 'depthRange') return value[0] !== 0 || value[1] !== 500;
    return value !== 'all';
  }).length;

  return (
    <div className="w-80 bg-card border-r border-border h-full overflow-y-auto">
      <Card className="border-0 rounded-none h-full">
        <CardHeader className="bg-gradient-surface">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Filters</CardTitle>
            </div>
            <div className="flex items-center space-x-2">
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {activeFilterCount} active
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="h-8 w-8 p-0"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 p-6">
          {/* Search */}
          <div className="space-y-2">
            <Label htmlFor="search">Species Search</Label>
            <Input
              id="search"
              placeholder="Search by scientific or common name..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
            />
          </div>

          {/* Dataset */}
          <div className="space-y-2">
            <Label>Dataset Source</Label>
            <Select value={filters.dataset} onValueChange={(value) => handleFilterChange('dataset', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Datasets</SelectItem>
                <SelectItem value="indOBIS">indOBIS</SelectItem>
                <SelectItem value="voucher">Voucher Specimens</SelectItem>
                <SelectItem value="fishBase">FishBase</SelectItem>
                <SelectItem value="oceanBiogeographic">Ocean Biogeographic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Phylum */}
          <div className="space-y-2">
            <Label>Phylum</Label>
            <Select value={filters.phylum} onValueChange={(value) => handleFilterChange('phylum', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select phylum" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Phyla</SelectItem>
                <SelectItem value="Chordata">Chordata</SelectItem>
                <SelectItem value="Cnidaria">Cnidaria</SelectItem>
                <SelectItem value="Mollusca">Mollusca</SelectItem>
                <SelectItem value="Arthropoda">Arthropoda</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label>Country</Label>
            <Select value={filters.country} onValueChange={(value) => handleFilterChange('country', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="Philippines">Philippines</SelectItem>
                <SelectItem value="Indonesia">Indonesia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Year Range */}
          <div className="space-y-3">
            <Label>Year Range</Label>
            <div className="px-2">
              <Slider
                value={filters.yearRange}
                onValueChange={(value) => handleFilterChange('yearRange', value)}
                min={2015}
                max={2023}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>{filters.yearRange[0]}</span>
                <span>{filters.yearRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Depth Range */}
          <div className="space-y-3">
            <Label>Depth Range (meters)</Label>
            <div className="px-2">
              <Slider
                value={filters.depthRange}
                onValueChange={(value) => handleFilterChange('depthRange', value)}
                min={0}
                max={1000}
                step={10}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-1">
                <span>{filters.depthRange[0]}m</span>
                <span>{filters.depthRange[1]}m</span>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {activeFilterCount > 0 && (
            <div className="space-y-2">
              <Label>Active Filters</Label>
              <div className="flex flex-wrap gap-2">
                {filters.searchTerm && (
                  <Badge variant="outline" className="text-xs">
                    Search: {filters.searchTerm}
                    <X 
                      className="h-3 w-3 ml-1 cursor-pointer" 
                      onClick={() => handleFilterChange('searchTerm', '')}
                    />
                  </Badge>
                )}
                {filters.dataset !== 'all' && (
                  <Badge variant="outline" className="text-xs">
                    Dataset: {filters.dataset}
                    <X 
                      className="h-3 w-3 ml-1 cursor-pointer" 
                      onClick={() => handleFilterChange('dataset', 'all')}
                    />
                  </Badge>
                )}
                {filters.phylum !== 'all' && (
                  <Badge variant="outline" className="text-xs">
                    Phylum: {filters.phylum}
                    <X 
                      className="h-3 w-3 ml-1 cursor-pointer" 
                      onClick={() => handleFilterChange('phylum', 'all')}
                    />
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSidebar;