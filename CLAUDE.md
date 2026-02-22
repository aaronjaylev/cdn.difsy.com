# CDN Difsy - Project Context

## Project Overview
CDN Difsy is a SaaS platform that serves reusable contact forms and other JavaScript widgets to third-party websites via dynamic script injection. The core value is allowing businesses to embed forms on their sites without requiring Tailwind CSS or other external dependencies.

## Key Technologies
- **Framework**: Next.js 14 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Custom CSS (self-contained, no Tailwind in injected forms)
- **Language**: TypeScript
- **Form Embedding**: Dynamic JavaScript injection from `/advanced-contact/[formId]` endpoints

## Project Structure

### Critical Files
- **`/public/js/contact.js`** - The embedded form script
  - Contains complete form HTML, CSS (in `<style>` block), and JavaScript
  - Queries Supabase for form data via API routes
  - Self-contained - no external dependencies required on host pages
  - Injects form into `<div id="difsy-form"></div>` elements

- **`/src/app/advanced-contact/[formId]/route.ts`** - Form serving endpoint
  - Returns JavaScript that injects form HTML into pages
  - Queries Supabase `forms` table (columns: `form_code`, `form_html`, `form_css`, `form_js`)
  - Escapes HTML special characters for safe injection
  - Returns 500 status on error with error message in JS

- **`/src/app/test/route.ts`** - Test/demo page
  - Static HTML page demonstrating form embedding
  - Shows example code: `<script src="/advanced-contact/[formId]"></script>`

- **`/src/lib/supabase.ts`** - Database utilities
  - `getServerSupabaseClient()` - Server-side client with secret key
  - `validateFormCode()` - Validates form codes with caching
  - Form code cache with 1-hour TTL

## Form Styling Approach

### Why Custom CSS Classes?
Injected forms appear on third-party sites that don't have Tailwind CSS loaded. Tailwind utility classes won't work. **Always use custom CSS classes, not Tailwind utility classes.**

### CSS Class Naming Convention
- `.difsy-status-*` - Status messages (default, success, error, warning)
- `.difsy-btn-*` - Button states (active, disabled, error)
- `.difsy-row-*` - Layout rows (row-2 for 2-column grid)
- `.difsy-field` - Form field containers
- `.difsy-label-row` - Flexbox container for label + IP display
- `.difsy-ip-display` - IP address display element
- `.difsy-indicator` - Validation indicator icons
- `.difsy-label` - Label styling
- `.difsy-ip-value` - IP address value (monospace font)

### All CSS is in contact.js `<style>` Block
- Define ALL styles in the embedded `<style>` block within `contact.js`
- Scoped to `#difsy-form` to avoid conflicts with host page styles
- Use `!important` sparingly - only for override situations (e.g., forcing display property)

## Form Validation & UX Features

### Indicators
- **Visibility**: Hidden by default (`opacity: 0`), shown with `.show` class after first input
- **States**:
  - `○` (circle) - Waiting for input (gray)
  - `✓` (checkmark) - Valid (green)
  - `✗` (X) - Invalid (red)
  - `?` (question) - Validating (orange)
  - `⟳` (spinner) - Loading (blue)

### Field Validation
- **Name**: Required, non-empty
- **Email**: HTML5 + regex validation, async API validation with Twilio
- **Location**: Required, displays user IP from geolocation API
- **Phone**: Required for forms, formats as `(555) 123-4567`, validates with Twilio
- **Comments**: Required, non-empty

### Debouncing
- Email validation debounced 500ms after user stops typing
- Phone validation debounced similarly

### Submit Button States
- **Disabled (gray)**: When any required field is invalid
- **Active (blue)**: When all fields are valid, enables submission
- **Error (red)**: After submission error, shows error message in button for 3 seconds

## Form Data Flow

### Embedding on Third-Party Site
```html
<div id="difsy-form"></div>
<script src="https://cdn.difsy.com/advanced-contact/41555582"></script>
```

### Form Injection Process
1. Script at `/advanced-contact/[formId]` executes
2. Returns JavaScript that:
   - Queries Supabase for form data using `form_code` (formId)
   - Injects HTML into `<div id="difsy-form"></div>`
   - Injects `<style>` block with all CSS
   - Runs embedded JavaScript logic (form validation, submission, etc.)
3. Form renders with complete styling and functionality

### Supabase Schema (forms table)
```
- id: UUID (primary key)
- form_code: TEXT (unique identifier, e.g., "41555582")
- form_html: TEXT (HTML structure of form)
- form_css: TEXT (CSS rules)
- form_js: TEXT (Additional JavaScript logic)
```

## Development Guidelines

### When Adding/Modifying Styles
1. **Never use Tailwind classes** in injected forms
2. Use custom CSS classes defined in `contact.js` `<style>` block
3. Scope all rules to `#difsy-form` selector
4. Test on third-party sites without Tailwind loaded

### When Modifying Form Fields
1. Update HTML in the template string in `contact.js`
2. Add corresponding indicator and status elements
3. Update CSS for new classes
4. Add validation function if needed
5. Register event listeners in the initialization code

### Important CSS Specificity Notes
- `.difsy-field > div` forces `flex-direction: column` on all child divs
- `.difsy-label-row` overrides this with `!important` for `flex-direction: row`
- Generic label rule uses `display: block` - override with `!important` in flex contexts

### Indicator Positioning
- Input fields: `top: calc(50% + 4px); transform: translateY(-50%);`
- Textarea: `top: calc(50% + 4px); transform: none;`
- These center the indicator on the input field (not the whole field container)

### Phone Number Validation
- Uses Twilio Lookup API
- Validates mobile phone numbers
- Formats as `(555) 123-4567`
- Rejects landlines and invalid numbers

### Email Validation
- Uses regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Plus HTML5 validation
- Async validation with external API (debounced)

## Common Issues & Solutions

### Styles Not Applying
- Check if using Tailwind classes (won't work in injected forms)
- Use custom CSS classes instead
- Ensure CSS is in `contact.js` `<style>` block, not external files

### Indicators Not Showing
- Should be hidden by default (`opacity: 0`)
- Add `.show` class on first field input
- Check `.show` CSS rule exists: `opacity: 1`

### Flex Layout Breaking
- `.difsy-field > div` forces column layout
- Use `flex-direction: row !important` for row layouts
- Use `display: inline !important` for label inside flex containers

### IP Display Not Showing
- Hidden by default (`display: none`)
- Add `.show` class when IP value is populated
- Only set text content BEFORE adding `.show` class

## Deployment Notes
- Forms are statically generated with `export const dynamic = "force-static"`
- API routes cache form data (Cache-Control: max-age=3600)
- Form code validation results cached for 1 hour
- No user authentication required for form viewing (public forms)

## Testing
- Visit `/test` route to see form in action
- Test on third-party sites (sites without Tailwind CSS)
- Verify all validation indicators appear correctly
- Test submission with various invalid/valid inputs
