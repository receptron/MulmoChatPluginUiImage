/**
 * Image UI Component Types
 */

/**
 * Data structure for image tool results
 */
export interface ImageToolData {
  imageData: string;
  prompt?: string;
}

/**
 * Minimal ToolResult interface for view components
 */
export interface ToolResult<T = unknown> {
  toolName?: string;
  message: string;
  data?: T;
}
