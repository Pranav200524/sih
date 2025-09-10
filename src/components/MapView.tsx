import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Waves, Thermometer, Ruler, Map } from 'lucide-react';
import { SpeciesData } from '@/data/marineData';

interface MapViewProps {
  filteredData: SpeciesData[];
}

const MapView = ({ filteredData }: MapViewProps) => {
  return (
    <Card className="bg-gradient-surface">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <CardTitle>Species Occurrence Locations</CardTitle>
          </div>
          <Badge variant="secondary">
            {filteredData.length} locations
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-96 rounded-lg overflow-hidden border border-border bg-gradient-ocean relative">
          {/* Map Placeholder with Ocean Theme */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <Map className="h-16 w-16 mx-auto mb-4 opacity-60" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="text-primary-foreground/80 mb-4">
                Marine species locations from {filteredData.length} records
              </p>
            </div>
          </div>
          
          {/* Sample location indicators */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
        </div>
        
        {/* Sample Species Info Cards */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredData.slice(0, 2).map((species) => (
            <div key={species.id} className="bg-card border border-border rounded-lg p-4 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-primary">{species.commonName}</h4>
                  <p className="text-sm italic text-muted-foreground">{species.scientificName}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {species.dataset}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3 text-primary" />
                  <span>{species.locality}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Ruler className="h-3 w-3 text-primary" />
                  <span>{species.depth}m depth</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Thermometer className="h-3 w-3 text-primary" />
                  <span>{species.temperature}°C</span>
                </div>
                <div className="text-muted-foreground">
                  {species.year}-{species.month.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span>indOBIS</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
            <span>Voucher</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <span>FishBase</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-600"></div>
            <span>Ocean Biogeographic</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapView;