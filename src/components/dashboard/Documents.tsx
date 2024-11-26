import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

function Documents() {
  const { subscription } = useAuthStore();

  if (!subscription || subscription.status !== 'active') {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <AlertCircle className="h-16 w-16 text-blue-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Premium Feature</h2>
        <p className="text-gray-400 mb-6 max-w-md">
          The AI Document Generator is available on our Pro and Enterprise plans.
          Upgrade your subscription to access this feature.
        </p>
        <a href="/#pricing" className="button-primary">
          View Pricing
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Business Documents</h2>
        <button className="button-primary">
          <FileText className="h-5 w-5 mr-2" />
          New Document
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="text-center py-12">
          <FileText className="h-8 w-8 text-blue-500 mx-auto mb-4" />
          <p className="text-gray-400">
            Connect your API endpoint in settings to start generating documents.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Documents;