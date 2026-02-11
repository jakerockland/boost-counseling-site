import { Button } from "@/components/ui/button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  useDocumentTitle("Page Not Found");
  const [, setLocation] = useLocation();

  return (
    <div className="flex flex-col items-center justify-center py-24 md:py-32 px-4 text-center">
      <p className="text-8xl font-serif font-bold text-primary/20 mb-4">404</p>
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        Sorry, the page you are looking for doesn't exist or may have been moved.
      </p>
      <Button
        onClick={() => setLocation("/")}
        className="bg-primary text-white hover:bg-primary/90 rounded-full px-8"
      >
        <Home className="w-4 h-4 mr-2" />
        Back to Home
      </Button>
    </div>
  );
}
