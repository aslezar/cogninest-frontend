import { AlertCircle } from 'lucide-react';

const Error = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center gap-2 text-blue-600">
        <AlertCircle size={20} />
        <span className="text-lg">This page is not implemented yet</span>
      </div>
    </div>
  );
};

export default Error;