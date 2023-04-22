import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <svg xmlns='http://www.w3.org/2000/svg' width='196' height='43' viewBox='0 0 196 43'>
          <g fill='#fff'>
            <path d='M185.4 20.7L187.7 28.3C187.8 28.7 187.9 29.2 187.9 29.8L188 29.8C188.1 29.2 188.2 28.8 188.3 28.4L190.6 20.7 195.3 20.7 190 34.8C189.4 36.6 188.5 37.9 187.5 38.7 186.6 39.4 185.3 39.8 183.7 39.8 183.1 39.8 182.5 39.7 181.8 39.6L181.8 36C182.2 36.1 182.7 36.1 183.2 36.1 183.7 36.1 184 36 184.3 35.9 184.6 35.7 184.9 35.5 185.1 35.2 185.3 34.9 185.6 34.5 185.8 33.8L181.3 22.5 181.5 20.7 185.4 20.7ZM91.8 20.5C93.5 20.5 94.9 20.9 95.8 21.8 96.7 22.6 97.2 23.8 97.2 25.3L97.2 34 94 34 93.1 32.2 93 32.2C92.4 33 91.8 33.5 91.2 33.8 90.5 34.1 89.7 34.2 88.7 34.2 87.4 34.2 86.4 33.9 85.7 33.1 85 32.4 84.6 31.3 84.6 29.9 84.6 28.5 85.1 27.5 86.1 26.8 87.1 26.1 88.5 25.7 90.4 25.6L92.6 25.6 92.6 25.4C92.6 24.3 92.1 23.7 91 23.7 90 23.7 88.8 24.1 87.3 24.7L86 21.7C87.5 20.9 89.5 20.5 91.8 20.5ZM127.3 20.5C129.3 20.5 130.8 21 131.9 22.1 133 23.1 133.5 24.6 133.5 26.6L133.5 28.6 125.3 28.6C125.4 29.3 125.6 29.9 126.2 30.3 126.7 30.8 127.4 31 128.2 31 129 31 129.8 30.9 130.5 30.7 131.1 30.6 131.9 30.3 132.7 30L132.7 33.3C131.9 33.6 131.2 33.9 130.4 34 129.7 34.2 128.8 34.2 127.7 34.2 125.5 34.2 123.8 33.6 122.5 32.5 121.3 31.3 120.7 29.6 120.7 27.4 120.7 25.2 121.3 23.5 122.4 22.3 123.5 21.1 125.2 20.5 127.3 20.5ZM164 20.5C165.3 20.5 166.4 20.8 167.4 21.3 168.4 21.9 169.2 22.7 169.8 23.7 170.3 24.7 170.6 25.9 170.6 27.3 170.6 29.5 170 31.2 168.8 32.4 167.7 33.6 166 34.2 163.9 34.2 161.9 34.2 160.3 33.6 159.1 32.4 157.9 31.1 157.3 29.4 157.3 27.3 157.3 25.2 157.9 23.5 159.1 22.3 160.2 21.1 161.9 20.5 164 20.5ZM53.2 16.9L55.5 25.6 55.7 26.2C56.1 27.8 56.3 28.9 56.3 29.6 56.4 29 56.5 28.4 56.7 27.5L56.8 26.9C56.9 26.4 57 25.9 57.1 25.6L59.5 16.9 64.7 16.9 59 34 53.6 34 48 16.9 53.2 16.9ZM69.7 20.7L69.7 34 65.1 34 65.1 20.7 69.7 20.7ZM75 20.7L77.3 28.6 77.3 28.8C77.3 28.9 77.4 29 77.4 29.1 77.4 29.2 77.4 29.4 77.4 29.5 77.5 29.7 77.5 29.8 77.5 29.9L77.6 29.9C77.6 29.5 77.6 29.1 77.8 28.6L80.1 20.7 84.9 20.7 79.8 34 75.3 34 70.2 20.7 75 20.7ZM105.6 16.9L109.2 29 109.3 29 112.8 16.9 119 16.9 119 34 114.7 34 114.7 26.5C114.7 26.2 114.7 25.9 114.7 25.5L114.7 25C114.8 24.4 114.8 23.3 114.9 21.7L114.8 21.7 111.3 34 106.9 34 103.4 21.7 103.3 21.7 103.4 22.5C103.5 24.1 103.6 25.3 103.6 26.3L103.6 34 99.5 34 99.5 16.9 105.6 16.9ZM151.3 20.5C152.9 20.5 154 20.9 154.8 21.7 155.5 22.5 155.9 23.7 155.9 25.4L155.9 34 151.3 34 151.3 26.8C151.3 25.9 151.2 25.2 150.9 24.8 150.7 24.3 150.3 24.1 149.8 24.1 149.1 24.1 148.6 24.4 148.2 25 147.9 25.6 147.7 26.5 147.7 27.8L147.7 34 143.1 34 143.1 26.8C143.1 25.9 143 25.2 142.8 24.8 142.6 24.3 142.2 24.1 141.7 24.1 140.9 24.1 140.4 24.4 140.1 25 139.8 25.7 139.6 26.7 139.6 28.2L139.6 34 135 34 135 20.7 138.5 20.7 139 22.4 139.3 22.4C139.7 21.8 140.2 21.3 140.8 21 141.5 20.6 142.3 20.5 143.1 20.5 145 20.5 146.4 21.1 147.1 22.2L147.5 22.2C147.9 21.7 148.4 21.3 149.1 21 149.7 20.6 150.5 20.5 151.3 20.5ZM180.1 20.5C180.5 20.5 180.9 20.5 181.2 20.6L181.5 20.6 181.5 20.7 180.6 20.7 181.3 22.5 181.1 25C180.7 24.9 180.2 24.8 179.5 24.8 178.5 24.8 177.8 25 177.3 25.5 176.9 26 176.7 26.6 176.7 27.5L176.7 34 172.1 34 172.1 20.7 175.5 20.7 176.2 22.8 176.4 22.8C176.8 22.1 177.3 21.6 178 21.1 178.7 20.7 179.4 20.5 180.1 20.5ZM92.6 28.1L91.4 28.1C90 28.2 89.3 28.8 89.3 29.8 89.3 30.6 89.8 31 90.6 31 91.2 31 91.6 30.8 92 30.5 92.4 30.2 92.6 29.8 92.6 29.3L92.6 29.1 92.6 28.1ZM163.9 23.9C163.2 23.9 162.7 24.2 162.4 24.8 162.1 25.3 162 26.2 162 27.3 162 28.5 162.1 29.3 162.4 29.9 162.7 30.5 163.2 30.8 164 30.8 164.7 30.8 165.2 30.5 165.5 29.9 165.8 29.3 165.9 28.5 165.9 27.3 165.9 26.2 165.8 25.3 165.5 24.8 165.2 24.2 164.7 23.9 163.9 23.9ZM127.4 23.6C126.9 23.6 126.4 23.8 126.1 24.1 125.7 24.5 125.5 25 125.4 25.7L129.4 25.7C129.4 25.1 129.2 24.6 128.8 24.2 128.5 23.8 128 23.6 127.4 23.6ZM67.5 15.4C68.3 15.4 68.9 15.6 69.3 15.9 69.7 16.2 69.9 16.7 69.9 17.4 69.9 18.8 69.1 19.4 67.5 19.4 65.8 19.4 65 18.8 65 17.4 65 16.7 65.2 16.2 65.6 15.9 66 15.5 66.6 15.4 67.5 15.4Z' />
            <path d='M24 6C26.8 6 29 8 29.3 10.5 29.9 10.3 30.5 10.2 31.1 10.2 34.3 10.2 37 12.8 37 15.9 37 17.2 36.5 18.3 35.7 19.3 37.7 20.2 39 22.3 39 24.5 39 26.7 37.6 28.7 35.6 29.6 36.5 30.6 37 31.8 37 33.1 37 36.2 34.3 38.8 31.1 38.8 30.5 38.8 29.9 38.7 29.3 38.5 29 41 26.8 43 24 43 22.1 43 20.4 42 19.5 40.6 18.6 42 16.9 43 15 43 12.2 43 10 41 9.7 38.5 9.1 38.7 8.5 38.8 7.9 38.8 4.7 38.8 2 36.2 2 33.1 2 31.8 2.5 30.6 3.4 29.6 1.3 28.7 0 26.7 0 24.5 0 22.3 1.3 20.2 3.3 19.3 2.5 18.3 2 17.2 2 15.9 2 12.8 4.7 10.2 7.9 10.2 8.5 10.2 9.1 10.3 9.7 10.5 10 8 12.2 6 15 6 16.9 6 18.6 7 19.5 8.4 20.4 7 22.1 6 24 6ZM15 7.5C12.9 7.5 11.2 9.1 11.2 11.1 11.2 11.2 11.2 11.2 11.3 11.3L11.3 11.5 11.3 11.6C11.3 11.8 11.2 12.1 10.9 12.3 10.7 12.5 10.4 12.5 10.1 12.3 9.4 11.9 8.7 11.7 7.9 11.7 5.5 11.7 3.6 13.6 3.6 15.9 3.6 17 4 17.9 4.9 18.7L5.1 18.8 7 18.8C8.8 18.8 10.3 20.4 10.3 22.3 10.3 24.1 8.9 25.6 7.1 25.7L7 25.7 6.5 25.7C6 25.7 5.7 25.4 5.7 25 5.7 24.6 6 24.3 6.4 24.2L6.5 24.2 7 24.2C7.9 24.2 8.7 23.4 8.7 22.3 8.7 21.3 8 20.4 7.1 20.4L7 20.3 4.9 20.3C3 20.8 1.6 22.6 1.6 24.5 1.6 26.4 3 28.1 5 28.5 5.3 28.6 5.5 28.8 5.6 29.1 5.7 29.4 5.5 29.7 5.3 29.9 4.2 30.7 3.6 31.9 3.6 33.1 3.6 35.4 5.5 37.3 7.9 37.3 8.7 37.3 9.4 37.1 10.1 36.7 10.4 36.5 10.7 36.5 10.9 36.7 11.2 36.8 11.3 37.1 11.3 37.3L11.3 37.4 11.3 37.5C11.3 37.7 11.2 37.8 11.2 37.9 11.2 39.9 12.9 41.5 15 41.5 17 41.5 18.6 40 18.7 38.1L18.7 37.9 18.7 24.1 18.6 24.1C17.3 24.1 16.2 25.1 16.2 26.4 16.2 26.8 15.8 27.1 15.4 27.1 15 27.1 14.6 26.8 14.6 26.4 14.6 24.4 16.3 22.7 18.4 22.6L18.6 22.6 18.7 22.6 18.7 11.1C18.7 9.1 17 7.5 15 7.5ZM24 7.5C22 7.5 20.4 9 20.3 10.9L20.3 11.1 20.3 27.1 21.1 27.1C23.3 27.1 25.1 28.8 25.1 30.9 25.1 31.3 24.7 31.7 24.3 31.7 23.8 31.7 23.5 31.3 23.5 30.9 23.5 29.7 22.5 28.7 21.3 28.7L21.1 28.7 20.3 28.7 20.3 37.9C20.3 39.9 22 41.5 24 41.5 26.1 41.5 27.8 39.9 27.8 37.9 27.8 37.8 27.8 37.8 27.7 37.7L27.7 37.5 27.7 37.4C27.7 37.2 27.8 36.9 28.1 36.7 28.3 36.5 28.6 36.5 28.9 36.7 29.6 37.1 30.3 37.3 31.1 37.3 33.5 37.3 35.4 35.4 35.4 33.1 35.4 31.9 34.8 30.7 33.7 29.9 33.5 29.7 33.3 29.4 33.4 29.1 33.5 28.8 33.7 28.6 34 28.5 36 28.1 37.4 26.4 37.4 24.5 37.4 22.6 36.1 20.9 34.3 20.4L34.1 20.3 32.1 20.3C31.1 20.3 30.4 21.2 30.4 22.3 30.4 23.3 31 24.1 31.9 24.2L32.1 24.2 32.6 24.2C33 24.2 33.4 24.6 33.4 25 33.4 25.4 33.1 25.7 32.7 25.7L32.6 25.7 32.1 25.7C30.3 25.7 28.8 24.2 28.8 22.3 28.8 20.4 30.2 18.9 31.9 18.8L32.1 18.8 33.9 18.8C34.9 18 35.4 17 35.4 15.9 35.4 13.6 33.5 11.7 31.1 11.7 30.3 11.7 29.6 11.9 28.9 12.3 28.6 12.5 28.3 12.5 28.1 12.3 27.8 12.2 27.7 11.9 27.7 11.7L27.7 11.6 27.7 11.5C27.7 11.3 27.8 11.2 27.8 11.1 27.8 9.1 26.1 7.5 24 7.5ZM26.6 25.3L26.7 25.4 28.1 27.4C28.7 28.2 29 29.2 29 30.3 29 31.6 28.5 32.8 27.6 33.7L27.4 33.9 25.5 35.8C25.3 35.9 25.1 36 24.9 36 24.6 36 24.4 35.9 24.3 35.8 23.9 35.5 23.9 35 24.2 34.7L24.3 34.6 26.2 32.8C26.9 32.1 27.3 31.2 27.3 30.3 27.3 29.6 27.1 29 26.8 28.5L26.7 28.3 25.2 26.3C25 25.9 25.1 25.4 25.5 25.1 25.8 24.9 26.3 25 26.6 25.3ZM10.4 28.4L10.4 28.5 11.2 30.5C11.5 31.1 11.9 31.6 12.4 31.9 13 32.4 13.8 32.6 14.6 32.5L14.8 32.5 17.1 32.1C17.5 32 17.9 32.3 18 32.7 18.1 33.1 17.8 33.4 17.5 33.5L17.4 33.6 15 33.9C14.8 34 14.5 34 14.2 34 13.3 34 12.3 33.7 11.5 33.1 10.8 32.7 10.3 32 9.9 31.3L9.8 31 9 29C8.9 28.6 9.1 28.2 9.5 28 9.8 27.9 10.2 28.1 10.4 28.4ZM29.2 13C29.6 13 30 13.4 30 13.8 30 16 28.3 17.7 26.2 17.8L26 17.8 25 17.8C23.7 17.8 22.7 18.9 22.7 20.2 22.7 20.6 22.3 21 21.8 21 21.4 21 21 20.6 21 20.2 21 18 22.7 16.3 24.8 16.2L25 16.2 26 16.2C27.3 16.2 28.3 15.1 28.3 13.8 28.3 13.4 28.7 13 29.2 13ZM9.8 13C10.3 13 10.7 13.4 10.7 13.8 10.7 15.1 11.6 16.1 12.8 16.2L13 16.2 14 16.2C16.2 16.2 18 18 18 20.2 18 20.6 17.6 21 17.2 21 16.7 21 16.3 20.6 16.3 20.2 16.3 18.9 15.4 17.9 14.2 17.8L14 17.8 13 17.8C10.8 17.8 9 16 9 13.8 9 13.4 9.4 13 9.8 13ZM34.8 7L38.2 7C38.6 7 39 7.4 39 8 39 8.5 38.7 8.9 38.3 9L38.2 9 34.8 9C34.4 9 34 8.6 34 8 34 7.5 34.3 7.1 34.7 7L34.8 7 38.2 7ZM35.8 2.2C36 2.5 36.1 3 35.8 3.3L35.8 3.4 33.4 5.8C33.2 5.9 33 6 32.8 6 32.6 6 32.4 5.9 32.2 5.8 32 5.5 31.9 5 32.2 4.7L32.2 4.6 34.6 2.2C34.9 1.9 35.5 1.9 35.8 2.2ZM31 0C31.6 0 32 0.4 32 0.8L32 0.8 32 4.2C32 4.6 31.6 5 31 5 30.4 5 30 4.6 30 4.2L30 4.2 30 0.8C30 0.4 30.4 0 31 0Z' />
          </g>
        </svg>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
