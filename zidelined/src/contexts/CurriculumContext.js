// CurriculumContext.js
import React, { createContext, useContext } from 'react';
import { useCurriculum } from '../hooks/useCurriculum';

const CurriculumContext = createContext();

export const CurriculumProvider = ({ curriculum, children }) => {
  const curriculumData = useCurriculum(curriculum);

  return (
    <CurriculumContext.Provider value={curriculumData}>
      {children}
    </CurriculumContext.Provider>
  );
};

export const useCurriculumContext = () => useContext(CurriculumContext);