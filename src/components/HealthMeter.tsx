import type { MeterState } from "../data/types";

interface Props {
  meter: MeterState;
}

const ZONE_COLORS = {
  green: "#10B981",
  yellow: "#F59E0B",
  orange: "#F97316",
  red: "#EF4444",
};

export default function HealthMeter({ meter }: Props) {
  const color = ZONE_COLORS[meter.zone];

  // Semi-circular gauge using SVG
  const radius = 80;
  const strokeWidth = 12;
  const cx = 100;
  const cy = 95;
  // Arc from 180deg to 0deg (left to right, bottom half)
  const startAngle = Math.PI;
  const endAngle = 0;
  const totalAngle = Math.PI;

  const bgArcPath = describeArc(cx, cy, radius, startAngle, endAngle);

  // Fill arc based on percent
  const fillAngle = startAngle - (meter.percent / 100) * totalAngle;
  const fillArcPath =
    meter.percent > 0
      ? describeArc(cx, cy, radius, startAngle, fillAngle)
      : "";

  // Needle position
  const needleAngle = startAngle - (meter.percent / 100) * totalAngle;
  const needleX = cx + (radius - 20) * Math.cos(needleAngle);
  const needleY = cy - (radius - 20) * Math.sin(needleAngle);

  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="120" viewBox="0 0 200 120">
        {/* Background arc */}
        <path
          d={bgArcPath}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Colored gradient stops */}
        <defs>
          <linearGradient id="meterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="33%" stopColor="#F59E0B" />
            <stop offset="66%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EF4444" />
          </linearGradient>
        </defs>
        {/* Fill arc */}
        {fillArcPath && (
          <path
            d={fillArcPath}
            fill="none"
            stroke="url(#meterGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        )}
        {/* Needle dot */}
        <circle cx={needleX} cy={needleY} r={6} fill={color} />
        <circle cx={needleX} cy={needleY} r={3} fill="white" />
        {/* Center dot */}
        <circle cx={cx} cy={cy} r={4} fill="#374151" />
      </svg>
      <div
        className="text-sm font-semibold mt-1 px-3 py-1 rounded-full"
        style={{ backgroundColor: `${color}20`, color }}
      >
        {meter.label}
      </div>
    </div>
  );
}

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
): string {
  const x1 = cx + r * Math.cos(startAngle);
  const y1 = cy - r * Math.sin(startAngle);
  const x2 = cx + r * Math.cos(endAngle);
  const y2 = cy - r * Math.sin(endAngle);
  const largeArc = Math.abs(startAngle - endAngle) > Math.PI ? 1 : 0;
  // sweep-flag: 0 for counter-clockwise (which goes left-to-right on top)
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 0 ${x2} ${y2}`;
}
