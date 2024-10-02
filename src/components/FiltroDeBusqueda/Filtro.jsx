        // src/components/FiltroDeBusqueda/Filtro.jsx
        import React, { useState } from 'react';
        import './Filtro.css';

        const ProductFilter = ({ categories, onFilter }) => {
            const [selectedCategory, setSelectedCategory] = useState('');

            const handleCategoryChange = (e) => {
                const category = e.target.value;
                setSelectedCategory(category);
                onFilter('', category); 
            };

            return (
                <div className="product-filter">
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Todas las categorías</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            );
        };

        export default ProductFilter;
