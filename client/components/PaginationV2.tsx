import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../hook/usePagiantion';

const PaginationV2 = (props: any) => {
    const {
        onPageChange,
        onPageSizeChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize = 5,
        className
    } = props;

    const paginationRange: any[] = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    }) ?? [];

    if (currentPage === 0 || paginationRange.length < 1) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const _handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            onPageChange(Number(e.target.value));
        }
    }

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <div className='pagination bg-white w-full'>
            <div className='flex items-center space-x-[8px]'>
                <div className='text text-[#4B5563]'>Danh sách hiển thị</div>

                <div className='select select-pagination'>
                    <input type="number"
                        defaultValue={pageSize}
                        key={pageSize}
                        className='max-h-[2.5rem] text-[#4B5563]
                         bg-[#f6f6fa] rounded-[8px] text-[14px] px-[8px] py-[10px] w-full' />
                    <span className='icon dropdown'></span>
                    <div className='select-options'>
                        <div className='select-options-pagination-item'
                            onClick={() => onPageSizeChange(10)}
                        >10</div>
                        <div className='select-options-pagination-item'
                            onClick={() => onPageSizeChange(20)}
                        >20</div>
                        <div className='select-options-pagination-item'
                            onClick={() => onPageSizeChange(30)}
                        >30</div>
                    </div>
                </div>
            </div>
            <ul
                className={classnames('pagination-container', { [className]: className })}
            >
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === 1
                    })}
                    onClick={onPrevious}
                >
                    <div className="arrow left" />
                </li>
                {paginationRange.map((pageNumber: any, index: number) => {
                    if (pageNumber === DOTS) {
                        return <li
                            key={index}
                            className="pagination-item dots">&#8230;</li>;
                    }

                    return (
                        <li
                            key={index}
                            className={classnames('pagination-item', {
                                selected: pageNumber === currentPage
                            })}
                            onClick={() => onPageChange(pageNumber)}
                        >
                            {pageNumber}
                        </li>
                    );
                })}
                <li
                    className={classnames('pagination-item', {
                        disabled: currentPage === lastPage
                    })}
                    onClick={onNext}
                >
                    <div className="arrow right" />
                </li>
            </ul>
            <div className='flex items-center body space-x-[8px]'>
                <input type="number"
                    onKeyDown={(e) => _handleKeyDown(e)}
                    defaultValue={currentPage}
                    key={currentPage}
                    className='text-center bg-gray-130 rounded-[8px] text-prime w-[2.5rem] p-[8px] border border-gray-300 focus:outline-none' />
                <div className='body text-[#4B5563]'>trong số {Math.ceil(totalCount / pageSize)} </div>
            </div>
        </div>
    );
};

export default PaginationV2;
