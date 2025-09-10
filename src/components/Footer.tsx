import { Waves, Github, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-deep text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-6 w-6" />
              <span className="text-lg font-bold">Marine Biodiversity</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Exploring and visualizing marine biodiversity data from around the world.
            </p>
          </div>

          {/* Data Sources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Data Sources</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Ocean Biogeographic Information System</li>
              <li>• FishBase Global Database</li>
              <li>• Voucher Specimen Collections</li>
              <li>• Indo-Pacific Biodiversity Database</li>
            </ul>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <h3 className="font-semibold">Current Statistics</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• 8,200+ Species Records</li>
              <li>• 450+ Unique Species</li>
              <li>• 25+ Countries Covered</li>
              <li>• Real-time Data Updates</li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60">
              Built for marine research and conservation efforts worldwide.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2023 Marine Biodiversity Dashboard. Created for hackathon presentation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;