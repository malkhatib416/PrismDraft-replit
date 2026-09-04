import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { applyPageMetadata, siteUrl } from '@/lib/seo';

export default function NotFound() {
  useEffect(() => {
    applyPageMetadata({
      title: 'Page not found — PrismDraft',
      description: 'The PrismDraft page you requested could not be found.',
      path: '/404',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Page not found',
        url: siteUrl('/404'),
      },
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
