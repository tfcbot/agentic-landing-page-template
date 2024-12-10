/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "landing",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        cloudflare: {
          version: "5.40.1",
          apiToken: process.env.CLOUDFLARE_API_TOKEN,
        }
      }
    };
  },
  async run() {
    const domainName = $app.stage === "prod"
      ? process.env.DOMAIN_NAME
      : `${$app.stage}.${process.env.DOMAIN_NAME}`;
    const redirectDomainName = $app.stage === "prod"
      ? `www.${process.env.DOMAIN_NAME}`
      : `www.${$app.stage}.${process.env.DOMAIN_NAME}`;
    const appDomainName = $app.stage === "prod"
      ? `app.${process.env.DOMAIN_NAME}`
      : `${$app.stage}-app.${process.env.DOMAIN_NAME}`;
    const web = new sst.aws.Nextjs("MyWeb", {
      domain: {
        name: domainName,
        redirects: [redirectDomainName],
        dns: sst.cloudflare.dns({
          transform: {
            record: (record) => {
              if (record.name === redirectDomainName) {
                record.proxied = true;
                record.ttl = 1;
              }
            },
          },
        }),
      },
      environment: {
        NEXT_PUBLIC_APP_URL: `https://${appDomainName}`,
      },
    });
    return {
      web: web.url,
    }
  },
  console: {
    autodeploy: {
      target(event) {
        if (event.type === "branch" && event.action === "pushed") {
          switch (event.branch) {
            case "sandbox":
              return {
                stage: "sandbox",
                runner: { engine: "codebuild", compute: "large" }
              };
            case "dev":
              return {
                stage: "dev",
                runner: { engine: "codebuild", compute: "large" }
              };
            case "main":
              return {
                stage: "prod",
                runner: { engine: "codebuild", compute: "large" }
              };
            default:
              console.log(`Not a standard branch: ${event.branch}`);
              return {
                stage: event.branch
              }
          }
        }

      }
    }
  }
});

