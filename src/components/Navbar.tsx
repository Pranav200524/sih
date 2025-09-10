import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Fish, BarChart3, Map, Database } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-ocean text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8" />
              <h1 className="text-xl font-bold">Marine Biodiversity</h1>
            </div>
            <Badge variant="secondary" className="ml-4">
              Dashboard v1.0
            </Badge>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm">
              <Database className="h-4 w-4" />
              <span>8,200+ Records</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Fish className="h-4 w-4" />
              <span>450+ Species</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Map className="h-4 w-4" />
              <span>Global Coverage</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm" className="hidden sm:flex">
              <BarChart3 className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;