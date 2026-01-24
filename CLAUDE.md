# CLAUDE.md

## Plugin Overview

Shared image UI components for MulmoChat plugins. Meta package providing common image display components.

## Common Guidelines

For standard plugin development guidelines, see:
https://github.com/receptron/GUIChatPluginTemplate/blob/main/CLAUDE.md

## Plugin-Specific Notes

### Purpose
This is a shared UI component library used by other image-related plugins:
- `@mulmochat-plugin/generate-image`
- Other image plugins

### Exports
- `ImagePreview.vue`: Preview component for sidebar
- `ImageView.vue`: Main view component
- Type definitions for image tool data

### Usage
Other plugins import components from this package:
```typescript
import { ImagePreview, ImageView } from "@mulmochat-plugin/ui-image";
```

### Dependencies
- Vue 3 (peerDependency)

## Updating This Document

When making spec changes through discussion with Claude, update this file to reflect new constraints or architectural decisions.
