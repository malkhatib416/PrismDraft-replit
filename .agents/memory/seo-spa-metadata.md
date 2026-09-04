---
name: Vite canonical metadata
description: A build quirk to remember when adding canonical tags to Vite HTML shells.
---

When a Vite HTML shell includes a root-only canonical or social URL such as `/`, the build can try to process it as an asset and fail with an EISDIR error. Use a concrete absolute URL in the shell and let the route-aware client metadata layer update it for the active origin.

**Why:** Vite processes root-relative HTML asset URLs during its HTML transform, and `/` resolves to the filesystem directory rather than a file.

**How to apply:** Keep the static shell metadata valid with a concrete canonical URL; use the same URL base for sitemap entries and runtime metadata where the public domain is known.