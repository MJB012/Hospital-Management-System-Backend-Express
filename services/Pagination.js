
const getPagination = (page, size) => {
    const limit = size ? +size : 5;
    const offset = page ? (page -1) * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: cases } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, cases, totalPages, currentPage };
};

module.exports = { getPagination, getPagingData }; 