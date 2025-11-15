declare module '@google/genai' {
  // Minimal declarations to satisfy TypeScript for the library used in this project.
  // Expand these types if you need richer typing for the API.
  export class GoogleGenAI {
    constructor(opts: { apiKey?: string });
    models: {
      generateContent: (opts: any) => Promise<any>;
      // add more methods if needed
    };
  }
  export default GoogleGenAI;
}
