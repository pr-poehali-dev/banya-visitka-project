import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🧖‍♂️</span>
            <span className="text-2xl font-bold text-primary">БаняВеник</span>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground hidden md:block mr-4">
              Мы в социальных сетях:
            </p>
            <a 
              href="https://t.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover-scale w-12 h-12 bg-gradient-to-br from-[#0088cc]/10 to-[#229ED9]/10 hover:from-[#0088cc]/20 hover:to-[#229ED9]/20 border-[#0088cc]/30"
              >
                <Icon name="MessageCircle" size={24} className="text-[#0088cc] group-hover:scale-110 transition-transform" />
              </Button>
            </a>
            <a 
              href="https://wa.me/79991234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full hover-scale w-12 h-12 bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 hover:from-[#25D366]/20 hover:to-[#128C7E]/20 border-[#25D366]/30"
              >
                <Icon name="MessageSquare" size={24} className="text-[#25D366] group-hover:scale-110 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
