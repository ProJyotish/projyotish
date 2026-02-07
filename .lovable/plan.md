

# Interactive "Start Your Journey" Input Field

Transform the current "Start Your Journey" button into an engaging input field with quick suggestion chips, inspired by heymaya.pro.

## Overview

Replace the static button with an interactive component where users can type their astrology query directly. The typed message will be pre-filled into WhatsApp when they click send.

## Design Concept

```text
+----------------------------------------------------------+
|                                                          |
|   [Input field: "Ask about your kundli, muhurat..."]  ->  |
|                                                          |
+----------------------------------------------------------+

     [Career] [Marriage] [Health] [Muhurat] [Kundli]
              (scrolling suggestion chips)
```

## Features

1. **Expandable Input Field**: Clean, rounded input with placeholder text and a send button
2. **Quick Suggestion Chips**: Horizontally scrolling pills with common query topics
3. **Smooth Animations**: Chips auto-scroll and pause on hover
4. **WhatsApp Integration**: User's typed message becomes the pre-filled WhatsApp text
5. **Mobile Responsive**: Works well on all screen sizes

## Suggestion Chips

Astrology-themed quick options:
- Career guidance
- Marriage compatibility  
- Health insights
- Best muhurat
- Kundli reading
- Business decisions
- Relationship advice
- Financial timing

---

## Technical Details

### Files to Create

**`src/components/HeroQueryInput.tsx`**
New component containing:
- Controlled input field with state management
- Send button with WhatsApp link generation
- Animated suggestion chips using Framer Motion
- Infinite horizontal scroll animation for chips

### Files to Modify

**`src/components/Hero.tsx`**
- Import and use the new `HeroQueryInput` component
- Replace the current "Start Your Journey" button
- Keep the "See How It Works" secondary button

**`src/index.css`**
- Add keyframes for horizontal marquee animation
- Add pause-on-hover utility class

### Implementation Approach

1. Create input component with `useState` for the query text
2. Generate WhatsApp URL dynamically: `https://wa.me/918291218234?text={encodedQuery}`
3. Use Framer Motion for chip hover effects
4. CSS animation for infinite horizontal scroll of chips
5. Clicking a chip fills the input with that suggestion

