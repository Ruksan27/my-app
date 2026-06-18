import { error } from "console"; 

      export default function Error() {
          if (error()) { 
              return (
                  <div className="flex flex-col items-center justify-center h-screen">
                      <h1 className="text-4xl font-bold mb-4">An error occurred</h1>
                      <p className="text-lg text-gray-600">Sorry, something went wrong. Please try again later.</p> 
                  </div>
              );
          } else { 
              return (
                    <div className="flex flex-col items-center justify-center h-screen">
                        <h1 className="text-4xl font-bold mb-4">No error</h1>
                        <p className="text-lg text-gray-600">Everything is working fine.</p>
                    </div>

              );
          } 
      }; 