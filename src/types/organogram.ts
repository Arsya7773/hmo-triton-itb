/**
 * Organogram Type Definitions
 * Strict TypeScript interfaces for organizational hierarchy
 */

/**
 * Line Types:
 * - 'command': Solid line with arrow (Garis Komando)
 * - 'coordination': Dashed line, NO arrow (Garis Koordinasi)
 * - 'supervision': Dotted line with arrow (Garis Pengawasan)
 */
export type LineType = 'command' | 'coordination' | 'supervision';

/**
 * Position coordinates for nodes in the organogram
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * Individual organizational node
 */
export interface OrgNode {
  id: string;
  name: string;
  fullName?: string; // For hover tooltips
  title: string;
  photo?: string; // Path to photo asset
  position: Position;
  level: number; // Hierarchy level (0 = top, 1 = mid, etc.)
  isDivision?: boolean; // True if this is a division node
  parentId?: string; // Reference to parent node
}

/**
 * Connection between two nodes
 */
export interface OrgConnection {
  id: string;
  from: string; // fromNodeId
  to: string; // toNodeId
  type: LineType;
  label?: string; // Optional label for the connection
}

/**
 * Complete organogram structure
 */
export interface OrgChart {
  nodes: OrgNode[];
  connections: OrgConnection[];
  svgDimensions: {
    width: number;
    height: number;
  };
}

/**
 * SVG arrow marker configuration
 */
export interface ArrowMarker {
  id: string;
  color: string;
  refX: number;
  refY: number;
}
