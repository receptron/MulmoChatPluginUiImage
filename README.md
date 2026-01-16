# @mulmochat-plugin/ui-image

Shared image UI components for MulmoChat plugins.

## Installation

```bash
npm install @mulmochat-plugin/ui-image
```

## Usage

```typescript
import { ImageView, ImagePreview } from "@mulmochat-plugin/ui-image";
import type { ImageToolData } from "@mulmochat-plugin/ui-image";
import "@mulmochat-plugin/ui-image/style.css";

export const plugin = {
  // ...
  viewComponent: ImageView,
  previewComponent: ImagePreview,
};
```

## Components

### ImageView

Full-size image view component with prompt display.

Props:
- `selectedResult: ToolResult<ImageToolData>` - The tool result containing image data

### ImagePreview

Thumbnail preview component for sidebar.

Props:
- `result: ToolResult<ImageToolData>` - The tool result containing image data

## Types

### ImageToolData

```typescript
interface ImageToolData {
  imageData: string;  // Base64 encoded image data URL
  prompt?: string;    // Optional prompt used to generate the image
}
```
