const fs = require('fs');

async function get(req, res) {
  try {
    let data = getData();
    const {
      sortkey,
      searchkey,
      limit = 1,
      page = 1,
      order = 'asc',
    } = req.query;

    if (searchkey) {
      const searchKeyLower = searchkey.toLowerCase();
      data = data.filter((item) => {
        const inName = item.productName.toLowerCase().includes(searchKeyLower);
        const inBrand = item.brandName.toLowerCase().includes(searchKeyLower);
        const inTags = item.tag.some((tag) =>
          tag.tagName.toLowerCase().includes(searchKeyLower)
        );
        return inName || inBrand || inTags;
      });
    }

    if (sortkey) {
      data.sort((a, b) => {
        const aKey = a[sortkey];
        const bKey = b[sortkey];
        if (order === 'desc') {
          return aKey > bKey ? -1 : aKey < bKey ? 1 : 0;
        }
        return aKey > bKey ? 1 : aKey < bKey ? -1 : 0;
      });
    }

    const totalItems = data.length;
    const itemsPerPage = parseInt(limit);
    const currentPage = parseInt(page);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const paginatedData = data.slice(startIndex, endIndex);

    const pageInfo = {
      totalItems,
      itemsPerPage,
      currentPage,
      totalPages,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };

    res.json({ pageInfo, data: paginatedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing data' });
  }
}

const getData = () => {
  const rawData = fs.readFileSync('./dataProd.json', 'utf-8');
  return JSON.parse(rawData);
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function delayFunction(req, res, next) {
  console.log('Loading...');

  await delay(5000);

  next();
}

module.exports = {
  get,
  delayFunction,
};
