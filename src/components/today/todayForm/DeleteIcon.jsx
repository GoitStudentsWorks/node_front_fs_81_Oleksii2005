import React from 'react';

export const DeleteIcon = ({ className, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        verticalAlign: 'middle',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M9.82667 6.00001L9.596 12M6.404 12L6.17333 6.00001M12.8187 3.86001C13.0467 3.89468 13.2733 3.93134 13.5 3.97068M12.8187 3.86001L12.1067 13.1153C12.0776 13.4922 11.9074 13.8441 11.63 14.1008C11.3527 14.3576 10.9886 14.5001 10.6107 14.5H5.38933C5.0114 14.5001 4.64735 14.3576 4.36999 14.1008C4.09262 13.8441 3.92239 13.4922 3.89333 13.1153L3.18133 3.86001M12.8187 3.86001C12.0492 3.74369 11.2758 3.65541 10.5 3.59535M3.18133 3.86001C2.95333 3.89401 2.72667 3.93068 2.5 3.97001M3.18133 3.86001C3.95076 3.74369 4.72416 3.65541 5.5 3.59535M10.5 3.59535V2.98468C10.5 2.19801 9.89333 1.54201 9.10667 1.51735C8.36908 1.49377 7.63092 1.49377 6.89333 1.51735C6.10667 1.54201 5.5 2.19868 5.5 2.98468V3.59535M10.5 3.59535C8.83581 3.46673 7.16419 3.46673 5.5 3.59535"
          stroke="#EF5050"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
