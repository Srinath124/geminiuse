# 🚀 Continuous Deployment Setup with Netlify

This guide explains how to set up continuous deployment from GitHub to Netlify securely.

## Prerequisites

1. **Netlify Account** - [Sign up at netlify.com](https://netlify.com)
2. **GitHub Account** - Already connected repo
3. **GitHub Secrets Configured** - See setup below

## GitHub Actions Secrets Setup

Add these secrets to your GitHub repository:

### Steps to Add Secrets:
1. Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** for each:

#### Required Secrets:

| Secret Name | Value | Description |
|---|---|---|
| `NETLIFY_SITE_ID` | Your Netlify Site ID | Found in Netlify Site settings → General |
| `NETLIFY_AUTH_TOKEN` | Your Netlify Personal Access Token | Generate at netlify.com → User Settings → Applications |
| `REACT_APP_API_URL` | Your backend API URL | e.g., `https://your-api.example.com` (optional, defaults to local) |

### How to Get Netlify Site ID:
1. Log in to Netlify
2. Select your site
3. Go to **Site settings** → **General**
4. Find **Site ID** and copy it

### How to Generate Netlify Auth Token:
1. Go to [netlify.com/user/applications](https://app.netlify.com/user/applications)
2. Click **New access token**
3. Give it a name like "GitHub Actions"
4. Copy the token (save securely - you won't see it again)

## Deployment Workflow

### Automatic Deployment on Main Branch
```
Push to main branch
    ↓
GitHub Actions runs CI/Lint/Build
    ↓
Deploy job runs and builds client
    ↓
Netlify deployment happens
    ↓
Site goes live ✅
```

### Pull Request Preview Deployments
- When you open a PR, a preview deploy URL is generated
- GitHub bot comments on the PR with deployment status
- Use for testing before merging to main

## Security Best Practices

✅ **DO:**
- Store sensitive data (tokens, API keys) in GitHub Secrets
- Use `REACT_APP_` prefix for environment variables exposed to the browser
- Keep `netlify.toml` in version control (no secrets)
- Rotate tokens periodically
- Keep `.env` file in `.gitignore`

❌ **DON'T:**
- Commit `.env` files with secrets
- Log secrets in GitHub Actions output
- Use `NETLIFY_AUTH_TOKEN` as `REACT_APP_*` variable
- Hardcode sensitive values in `netlify.toml` or workflow files

## Environment Variables

### React Client Environment Variables
Prefixed with `REACT_APP_`:
```javascript
// These are exposed to the browser (anyone can see them)
const API_URL = process.env.REACT_APP_API_URL;
```

### Backend/Server Environment Variables
Use regular names (no `REACT_APP_` prefix):
```javascript
// These stay on the server (secure)
const DB_PASSWORD = process.env.DB_PASSWORD;
```

## Testing Locally

Before pushing to GitHub, test the build locally:

```bash
# Build client
npm run build

# Test the build
cd client/build
npx serve .

# Visit http://localhost:3000
```

## Troubleshooting

### Deployment fails with "NETLIFY_AUTH_TOKEN not found"
- ✓ Check GitHub Secrets are set correctly
- ✓ Verify secret names match workflow file exactly
- ✓ Re-save the workflow file (GitHub might cache old versions)

### Environment variables not appearing in deployed app
- ✓ Must start with `REACT_APP_`
- ✓ Rebuild after changing env vars
- ✓ Check in Netlify UI: Site settings → Build & deploy → Environment

### Build succeeds but site shows errors
- ✓ Check API URL is correct
- ✓ Verify backend is running and accessible
- ✓ Check browser console for CORS errors

### Preview deploys not working on PRs
- ✓ Ensure `needs: lint-and-test` passes first
- ✓ Check PR is from the same repo (not a fork)
- ✓ Verify GitHub token has correct permissions

## Manual Deployment

To deploy manually without pushing:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from client/build directory
netlify deploy --prod --dir=client/build
```

## Monitoring Deployments

### GitHub Actions Dashboard
- Go to repo → **Actions** tab
- View workflow run details and logs
- See deployment status and any errors

### Netlify Dashboard
- Go to your site on netlify.com
- **Deploys** tab shows deployment history
- View deployment logs and analytics
- Rollback to previous deploys if needed

## Next Steps

1. ✓ Add GitHub Secrets
2. ✓ Push to main branch to trigger deployment
3. ✓ Check Netlify dashboard for deployment status
4. ✓ Visit your live site URL
5. ✓ Open a PR to test preview deploys

For more info:
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
