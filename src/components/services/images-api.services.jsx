import axios from 'axios';
export async function fetchApiImages(searchQuery) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=1&key=31315876-ebaad9cfb6f2dd991d80baf37&image_type=photo&orientation=horizontal&per_page=12`
    );

    const result =await response.data
    
    return result
    
    
    
//     const {
//     data: { hits },
//   } = await axios.get(
//     `https://pixabay.com/api/?q=${searchQuery}&page=1&key=31315876-ebaad9cfb6f2dd991d80baf37&image_type=photo&orientation=horizontal&per_page=12`
//         );
    
}
