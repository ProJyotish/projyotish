# ProJyotish CMS Setup Guide

## Overview

Your site uses **Decap CMS** — a free, open-source, Git-based content management system. Content is stored as JSON and Markdown files in the `content/` folder of this repository. When you edit content through the CMS, it commits to the repo, which triggers GitHub Actions to rebuild and redeploy the site automatically.

**CMS Admin URL:** `https://projyotish.com/admin/`

The repo already contains everything needed:
- `public/admin/` — the CMS admin interface
- `content/` — all editable content files
- `cloudflare-oauth/` — the OAuth proxy that handles CMS login
- `.github/workflows/deploy-auth.yml` — GitHub Actions workflow that deploys the OAuth proxy to Cloudflare Workers

---

## One-time Setup (3 steps)

### Step 1 — Create a GitHub OAuth App

This lets you and your colleagues log into the CMS using their GitHub accounts.

1. Go to https://github.com/settings/developers
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name:** `ProJyotish CMS`
   - **Homepage URL:** `https://projyotish.com`
   - **Authorization callback URL:** `https://projyotish-cms-auth.YOUR-SUBDOMAIN.workers.dev/callback`
     *(you'll update this with the real URL in Step 3)*
4. Click **"Register application"**
5. On the next screen, note down the **Client ID**
6. Click **"Generate a new client secret"** and note that down too

---

### Step 2 — Add the three secrets to your GitHub repo

These secrets are used by the GitHub Actions workflow to deploy the OAuth proxy to Cloudflare and set its credentials.

1. Go to **https://github.com/ProJyotish/projyotish/settings/secrets/actions**
2. Click **"New repository secret"** for each of the following three secrets:

   | Secret name | Value |
   |---|---|
   | `CLOUDFLARE_API_TOKEN` | Your Cloudflare API token (get it from https://dash.cloudflare.com/profile/api-tokens → **Edit Cloudflare Workers** template) |
   | `CMS_GITHUB_CLIENT_ID` | The Client ID from the GitHub OAuth App you just created |
   | `CMS_GITHUB_CLIENT_SECRET` | The Client Secret from the GitHub OAuth App |

---

### Step 3 — Trigger the deployment and get your worker URL

1. Push any commit to `main`, or go to **https://github.com/ProJyotish/projyotish/actions** → click **"Deploy CMS Auth Worker"** → **"Run workflow"**
2. Wait ~30 seconds for the workflow to complete (green tick)
3. Click into the workflow run → click the **"Deploy Worker"** step → find the line that reads:
   ```
   https://projyotish-cms-auth.YOURSUBDOMAIN.workers.dev
   ```
4. Copy that URL

**Now do two things with it:**

**a) Update the GitHub OAuth App callback URL:**
- Go to https://github.com/settings/developers → your ProJyotish CMS app → **Edit**
- Replace the Authorization callback URL with:
  `https://projyotish-cms-auth.YOURSUBDOMAIN.workers.dev/callback`
- Click **"Update application"**

**b) Update the CMS config in the repo:**
- Open `public/admin/config.yml`
- Replace `YOUR-SUBDOMAIN` in the `base_url` line with your actual subdomain:
  ```yaml
  base_url: https://projyotish-cms-auth.YOURSUBDOMAIN.workers.dev
  ```
- Commit and push — this triggers a site rebuild and the CMS login will now work

---

### Step 4 — Add colleagues as collaborators

For each colleague who needs CMS access:

1. Go to **https://github.com/ProJyotish/projyotish/settings/access**
2. Click **"Add people"**, enter their GitHub username or email
3. Grant **"Write"** access

They can then go to `https://projyotish.com/admin/` and log in with their GitHub account.

---

## How the CMS Works

### Content structure

```
content/
├── blog/                    # Blog posts (Markdown files)
│   └── welcome-to-projyotish.md
├── testimonials.json        # User testimonials on homepage
├── founders.json            # Team member profiles
├── pricing.json             # Pricing plans (India + International)
└── settings.json            # Site-wide settings (WhatsApp number, email)
```

### What you can edit

| Section | What's editable |
|---|---|
| **Blog Posts** | Create and edit blog posts with a rich text editor |
| **Testimonials** | User quotes shown on the homepage |
| **Team** | Founder names, roles, descriptions, social links |
| **Pricing** | Plan names, prices, features for India & International |
| **Site Settings** | WhatsApp number, support email, company name |

### Editorial workflow

When a team member saves content in the CMS, it creates a **draft branch and pull request** rather than publishing immediately. This lets you review changes before they go live.

- **Save** → creates a PR
- **Publish** → merges the PR to `main`, which triggers GitHub Actions to rebuild and redeploy the site

To skip the review step and publish immediately, remove the `publish_mode: editorial_workflow` line from `public/admin/config.yml`.

---

## How the OAuth proxy is maintained

The `cloudflare-oauth/` folder contains the proxy worker code. The workflow at `.github/workflows/deploy-auth.yml` redeploys it automatically whenever files in `cloudflare-oauth/` change and are pushed to `main`. You never need to touch it manually.

---

## Troubleshooting

- **CMS login fails:** Check that `base_url` in `public/admin/config.yml` matches your deployed worker URL exactly, and that the GitHub OAuth App callback URL is also updated.
- **"Deploy CMS Auth Worker" workflow fails:** Check that all three repository secrets (`CLOUDFLARE_API_TOKEN`, `CMS_GITHUB_CLIENT_ID`, `CMS_GITHUB_CLIENT_SECRET`) are set correctly at https://github.com/ProJyotish/projyotish/settings/secrets/actions.
- **Content changes not appearing on the live site:** Go to https://github.com/ProJyotish/projyotish/actions and check the "Deploy to GitHub Pages" workflow completed successfully.
- **Build errors after editing content:** The JSON content files must match the expected structure. Avoid leaving required fields blank in the CMS editor.
