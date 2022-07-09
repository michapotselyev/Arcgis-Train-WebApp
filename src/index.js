import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './css/index.css';
import Main from './routes/Main';
import Tasks from './routes/Tasks';
import Calendar from './routes/Calendar';
import Contacts from './routes/Contacts';
import reportWebVitals from './reportWebVitals';

// Получения места для записи компонентов в DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендер собранной DOM модели 
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Обработка ошибок запроса-ответа
reportWebVitals();
