import { useState, useEffect } from 'react';
import { getProducts } from '../../../lib/api';

export default function ProductsManagement() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [page, search, filter]);

  const fetchProducts = async () => {
    const { data } = await getProducts({ page, limit, search, filter });
    setProducts(data);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو..."
      />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">همه دسته‌بندی‌ها</option>
        {/* گزینه‌های فیلتر */}
      </select>

      {/* نمایش لیست محصولات */}

      <div>
        <button onClick={() => setPage(p => Math.max(1, p - 1))}>قبلی</button>
        <span>صفحه {page}</span>
        <button onClick={() => setPage(p => p + 1)}>بعدی</button>
      </div>
    </div>
  );
}