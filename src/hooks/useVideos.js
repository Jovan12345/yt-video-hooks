import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';


const KEY = 'AIzaSyCbsGGGdH3pXi1InWu1rMMZVlDDmJJEt14';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const { data } = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                key: KEY,
            },
        });

        setVideos(data.items)
    }

    return [videos, search];
};

export default useVideos;