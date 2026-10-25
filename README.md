# Teen W Zaitoon

An Expo / React Native starting point for a Qatar supermarket. The same customer interface runs on iOS, Android, and web. The admin preview currently lives in the same app; production admin access must be separated and authenticated.

## Run

Requires Node.js and npm.

```sh
npm install
npm run web
# or use Expo Go on a phone
npm start
npm run typecheck
```

## Included in this local preview

- English, Arabic, and Hindi interface and product names; Arabic text direction.
- Product search, categories, discounted products, stock-limited basket quantities.
- Delivery and pickup checkout with Qatar phone validation and delivery address fields.
- Local storage of basket, catalog, language, and address.
- Admin demo: create, edit, remove products, change stock and set/remove a discounted price.
- QAR totals and a **sample QAR 10 delivery fee**.
- Store identifiers on products to prepare for branch-specific inventory.

All products, prices, stock, and fees are demonstration data. There are no real orders, accounts, payments, or server connections. The payment review explicitly stops at a setup notice. The admin screen is public demo UI, not an access control boundary. Do not deploy this preview as a live store or collect real customer data in it.

## Before a real launch

1. Confirm branding, catalog, translations with native speakers, store location, pickup hours, delivery zones, fees, and business policies.
2. Add a backend database with stores, store inventory, translated products, customers, addresses, orders, line items, payment attempts, offers, and administrator roles. Model a single store initially, with a store ID on every inventory record and order.
3. Add customer authentication and separate authenticated admin access. Enforce authorization on the server.
4. Select a payment provider that supports the Qatar merchant and QAR. Credentials belong on the server. Use hosted checkout / supported payment SDKs; never store card details in this app.
5. Recalculate prices, offers, delivery eligibility, and totals on the server. Reserve inventory transactionally. Confirm orders only from verified, idempotent payment webhooks; handle failures, cancellations, refunds, and stock release.
6. Add scheduled offers, order management and status notifications, fulfillment slots, and address serviceability checks. Define weighted-product and substitution policies if needed.
7. Add privacy and deletion flows, accessibility and device testing, production monitoring, and store listing assets. Configure the business's own Apple / Google developer accounts, identifiers, signing, and EAS builds before store submission.

App Store / Play Store publication and merchant onboarding are separate release steps, not completed by this source preview.

## GitHub Pages preview

Push this project to the `main` branch of a GitHub repository. In the repository's Settings → Pages, choose **GitHub Actions** as the source. The included workflow checks types, exports the web app, and publishes it. The deployment environment displays the actual preview URL. The repository name is used automatically as the web asset base path; local development continues to use `/`.

This publishes a demonstration with a public admin preview and browser-local data only. It does not create production payment or ordering services.

## Verification

TypeScript validation and the Expo web export pass. Browser smoke checks covered adding a product, basket totals, incomplete-address validation, pickup fee removal, the payment setup notice, invalid-offer rejection, saving an offer, and Arabic/Hindi language switching. Native device testing and store builds have not been performed. The dependency audit currently reports five high-severity findings propagated through Expo tooling (`node-forge` and `zod`); resolve these with compatible upstream updates before production. Do not apply the suggested automatic downgrade to Expo 44.
