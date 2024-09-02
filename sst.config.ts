/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "landing",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb");
  },
  console: {
    autodeploy: {
      target(event) {
        if (
          event.type === "branch" &&
          event.branch === "main" &&
          event.action === "pushed"
         ) {
          return {
            stage: "production",
            runner: { engine: "codebuild", compute: "large" }
          };
        }
      }
    }
  }
});
