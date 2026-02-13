

## Pricing Page Redesign

### What Changes

The "Choose Your Plan" section will be restructured with:

1. **Monthly/Quarterly toggle** at the top to switch between billing periods
2. **Two plan cards side-by-side**: Premium and Power User
3. **Updated feature lists** per plan

### Plan Details

| | Premium | Power User |
|---|---|---|
| Monthly | ₹499/month | ₹599/month |
| Quarterly | ₹1,099/quarter (₹366/month) | ₹1,339/quarter (₹446/month) |

**Premium Features:**
- Unlimited Questions
- Daily Favourable Time Reports
- Customised for Your Kundli
- Personalised for Your Profession

**Power User Features:**
- Everything in Premium
- Support for multiple profiles

### Technical Changes

**File: `src/components/Pricing.tsx`**
- Add a `useState` toggle for Monthly vs Quarterly billing
- Replace the current `plans` array with two plan objects (Premium, Power User) each containing monthly and quarterly pricing
- Render a toggle/switch at the top using the existing Switch or a styled toggle group
- Render two side-by-side cards with features and dynamic pricing based on toggle state
- Power User card gets the "popular" highlight styling
- WhatsApp CTA buttons will pre-fill messages like "Send me Premium Monthly subscription link", etc.
- The "Best Value" badge appears on the Quarterly option in the toggle, and Power User gets a badge like "Most Popular"

