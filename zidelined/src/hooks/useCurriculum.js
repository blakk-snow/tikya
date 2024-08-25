import { useState, useCallback, useMemo } from 'react';
import { curriculum } from '../data/B4Science';


export const useCurriculum = (curriculum) => {
  const [selectedStrand, setSelectedStrand] = useState(null);
  const [selectedSubStrand, setSelectedSubStrand] = useState(null);
  const [selectedContentStandard, setSelectedContentStandard] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [revisionNotes, setRevisionNotes] = useState({});
  const [questions, setQuestions] = useState({});

  const strands = useMemo(() => Object.keys(curriculum), [curriculum]);

  const subStrands = useMemo(() => 
    selectedStrand ? Object.keys(curriculum[selectedStrand].subStrands) : [],
    [curriculum, selectedStrand]
  );

  const contentStandards = useMemo(() => 
    selectedSubStrand 
      ? Object.keys(curriculum[selectedStrand].subStrands[selectedSubStrand].contentStandards) 
      : [],
    [curriculum, selectedStrand, selectedSubStrand]
  );

  const indicators = useMemo(() => 
    selectedContentStandard 
      ? curriculum[selectedStrand].subStrands[selectedSubStrand].contentStandards[selectedContentStandard].indicators 
      : [],
    [curriculum, selectedStrand, selectedSubStrand, selectedContentStandard]
  );

  const selectStrand = useCallback((strand) => {
    setSelectedStrand(strand);
    setSelectedSubStrand(null);
    setSelectedContentStandard(null);
    setSelectedIndicator(null);
  }, []);

  const selectSubStrand = useCallback((subStrand) => {
    setSelectedSubStrand(subStrand);
    setSelectedContentStandard(null);
    setSelectedIndicator(null);
  }, []);

  const selectContentStandard = useCallback((contentStandard) => {
    setSelectedContentStandard(contentStandard);
    setSelectedIndicator(null);
  }, []);

  const selectIndicator = useCallback((indicator) => {
    setSelectedIndicator(indicator);
  }, []);

  const addRevisionNote = useCallback((indicator, note) => {
    setRevisionNotes(prev => ({
      ...prev,
      [indicator]: [...(prev[indicator] || []), note]
    }));
  }, []);

  const addQuestion = useCallback((indicator, question) => {
    setQuestions(prev => ({
      ...prev,
      [indicator]: [...(prev[indicator] || []), question]
    }));
  }, []);

  return {
    curriculum,
    strands,
    subStrands,
    contentStandards,
    indicators,
    selectedStrand,
    selectedSubStrand,
    selectedContentStandard,
    selectedIndicator,
    selectStrand,
    selectSubStrand,
    selectContentStandard,
    selectIndicator,
    revisionNotes,
    questions,
    addRevisionNote,
    addQuestion
  };
};