import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Banner from './components/Banner';
import Todo from './components/Todo';
import Followers from './components/Followers';

const App = () => {
    return <AppContainer>
        <Banner />

        <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/followers' element={<Followers />} />
        </Routes>
    </AppContainer>
};

const AppContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`

export default App;