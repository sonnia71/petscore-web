import { PawPrint } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <PawPrint className="h-6 w-6 text-primary" />
      <span className="font-bold text-xl font-headline">PetScore</span>
    </div>
  );
};
