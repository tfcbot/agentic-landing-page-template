# agentic-landing-page


# SST Next.js Project

This project is built using [SSTv3](https://sst.dev/) and [Next.js](https://nextjs.org/).

It uses app router and tailwindcss for styling. 

## Prerequisites

- Node.js 16 or later
- npm or yarn
- AWS Credentials Configured
- Export AWS profile 

```
export AWS_PROFILE=your-profile-name
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/agentic-landing-page.git
   cd agentic-landing-page
   ```

2. Initialize SST in the project
   ```
   npx sst@latest init
   ```

3. Start the development server:
   ```
   npx sst dev
   ```

## Deployment

Deploy to your desired stage 

```
npx sst deploy --stage your-stage-name
```
