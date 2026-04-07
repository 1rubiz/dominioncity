import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';

function Hero() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 text-center text-primary-blue-800">
      <h1 className="text-5xl md:text-9xl font-serif font-semibold">
        WELCOME TO
      </h1>
      <h2 className="hidden text-7xl md:block text-transparent bg-clip-text bg-linear-to-r from-primary-blue-700 to-primary-rose-700 p-2">
        CHAPEL OF DOMINION MINISTRIES INC.
      </h2>
      <h2 className="md:hidden text-7xl text-transparent font-extrabold bg-clip-text bg-linear-to-r from-primary-blue-500 to-primary-rose-800 p-2">
        CDMI
      </h2>
      <Badge variant="outline">DOMINION CHAPEL</Badge>
      <p className="text-lg">Changing Lives Through the Word and Prayer</p>
      <div className="flex items-center gap-4">
        <Button className="bg-primary-blue-800">Join the family</Button>
        <Button variant="outline">Gallery</Button>
      </div>
    </div>
  );
}

export default Hero;
