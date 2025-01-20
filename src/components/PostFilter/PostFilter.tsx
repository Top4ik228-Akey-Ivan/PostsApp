import React from 'react';

import MyInput from '../../UI/Input/MyInput.tsx'
import MySelect from "../../UI/Select/Select.tsx";

export interface filterProps {
    query: string;
    sort: string;
}

interface PostFilterProps {
    filter: filterProps;
    setFilter: (filter: filterProps) => void;
}

const PostFilter: React.FC<PostFilterProps> = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
                placeholder='Найти'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По заголовку' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
        </div>
    );
}

export default PostFilter;