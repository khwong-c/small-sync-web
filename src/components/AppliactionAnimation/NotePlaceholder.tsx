/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const NotePlaceholder = ({ theme = 'dark' }: { theme?: string }) => {
  const isDark = theme === 'dark';
  return (
    <div
        className="p-2.5 rounded-lg border shadow-sm cursor-pointer transition-colors duration-500 bg-[#1e2430] border-sky-500/50"
        style={{ backgroundColor: isDark ? '#1e2430' : '#f1f5f9', borderColor: isDark ? 'rgba(14,165,233,0.5)' : 'rgba(14,165,233,0.3)' }}
        id="noteListItemActive">
        <div className="flex items-center justify-between mb-1.5">
            <div className="w-24 h-2.5 rounded transition-colors duration-500" style={{ backgroundColor: isDark ? '#38bdf8' : '#0284c7' }} id="noteItem1Title"></div>
        </div>
        <div className="space-y-1">
            <div className="w-full h-1.5 rounded transition-colors duration-500" style={{ backgroundColor: isDark ? '#475569' : '#cbd5e1' }} id="noteItem1Line1"></div>
            <div className="w-4/5 h-1.5 rounded transition-colors duration-500" style={{ backgroundColor: isDark ? 'rgba(100,116,139,0.6)' : 'rgba(148,163,184,0.6)' }}
                 id="noteItem1Line2"></div>
        </div>
        <div className="flex items-center gap-1.5 mt-2"></div>
    </div>
  );
};
export default NotePlaceholder
