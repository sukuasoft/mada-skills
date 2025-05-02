import { scoreApproved } from "@/lib/constants";
import { useState, useRef, useMemo } from "react";
import { maxTime } from "@/lib/constants";
import { delayInSeconds } from "@/lib/utils";
type StateExercise = "" | "doing" | "solved";


// Máximo de questões que podem ser feitas
const _maxQuestions = 10;

export interface ResponseAnalyzed {
  wrongOption?: number;
  correctOption: number;
}
export function useGame() {
  const [onFetchQuestions, setOnFetchQuestions] = useState<
    () => Promise<Question[]>
  >(() => async () => []);

  const [stateExercise, setStateExercise] = useState<StateExercise>(""); // "", "doing","solved"
  const [preparingQuiz, setPreparingQuiz] = useState(false);

  const [maxQuestions, setMaxQuestions] = useState(0);
  const maxQuestionsRef = useRef(0);

  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const questionsRef = useRef<Question[]>([]);

  //time
  const [restTime, setRestTime] = useState(maxTime);
  const restTimeRef = useRef(maxTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  //corrects
  const [corrects, setCorrects] = useState(0);
  const correctsRef = useRef(0);

  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const questionsAnsweredRef = useRef(0);

  const [optionSelected, setOptionSelected] = useState<number | null>(null);
  const [responding, setResponding] = useState(false);
  const [responseAnalyzed, setResponseAnalyzed] =
    useState<ResponseAnalyzed | null>(null);

  const [onDone, setOnDone] = useState<((score: number) => void) | null>(null);

  const score = useMemo(() => {
    if (maxQuestions == 0) return 0;
    return Math.floor((corrects / maxQuestions) * 100);
  }, [corrects, maxQuestions]);

  function calculateScore() {
    if (maxQuestionsRef.current == 0) return 0;
    return Math.floor((correctsRef.current / maxQuestionsRef.current) * 100);
  }

  const approved = useMemo(() => {
    return score >= scoreApproved;
  }, [score, scoreApproved]);

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function resumeTimer() {
    timerRef.current = setInterval(() => {
      timer();
    }, 100);
  }

  async function onSelectOption(option: number) {
    setOptionSelected(option);
  }

  async function timer() {
    if (timerRef.current == null) return;

    if (restTimeRef.current > 0) {
      restTimeRef.current = restTimeRef.current - 0.1;
      setRestTime(restTimeRef.current);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      gameover();
    }
  }

  function gameover() {
    setCurrentQuestion(null);
    stopTimer();
    setStateExercise("solved");
    if (onDone) {
      onDone(calculateScore());
    }
  }

  async function submitResponse() {
    if (currentQuestion == null || optionSelected == null) return;

    setResponding(true);
    stopTimer();
    await delayInSeconds(2);
    let _responseAnalyzed: ResponseAnalyzed | undefined;

    if (
      currentQuestion.optionCorrect == currentQuestion.options[optionSelected]
    ) {
      _responseAnalyzed = {
        correctOption: optionSelected,
      };
      correctsRef.current = correctsRef.current + 1;
      setCorrects(correctsRef.current);
    } else {
      _responseAnalyzed = {
        wrongOption: optionSelected,
        correctOption: currentQuestion.options.indexOf(
          currentQuestion.optionCorrect
        ),
      };
    }

    if (_responseAnalyzed) {
      setResponseAnalyzed(_responseAnalyzed);
    }

    await delayInSeconds(1);

    questionsAnsweredRef.current = questionsAnswered + 1;
    setQuestionsAnswered(questionsAnsweredRef.current);
    setOptionSelected(null);

    if (!generateNextQuestion()) {
      setRestTime(maxTime);
      restTimeRef.current = maxTime;
      resumeTimer();
    }

    setResponding(false);
  }

  function generateNextQuestion() {
    setResponseAnalyzed(null);

    if (questionsAnsweredRef.current + 1 > maxQuestionsRef.current) {
      gameover();
      return true;
    }

    const randomIndex = Math.floor(Math.random() * questionsRef.current.length);
    const question = questionsRef.current[randomIndex];
    questionsRef.current.splice(randomIndex, 1);
    setCurrentQuestion(question);

    if (timerRef.current) {
      setRestTime(maxTime);
      restTimeRef.current = maxTime;
    }

    return false;
  }

  async function handleStartQuiz() {
    setPreparingQuiz(true);

    if (questions == null || questions.length == 0) {
      const _questions = await onFetchQuestions();
      setQuestions(_questions);
      questionsRef.current = [..._questions];

    } else {
      questionsRef.current = [...questions];
    }

    maxQuestionsRef.current =
      questionsRef.current.length > _maxQuestions
        ? _maxQuestions
        : questionsRef.current.length;

    setMaxQuestions(maxQuestionsRef.current);

    questionsAnsweredRef.current = 0;
    setQuestionsAnswered(questionsAnsweredRef.current);

    correctsRef.current = 0;
    setCorrects(correctsRef.current);

    setOptionSelected(null);

    if (generateNextQuestion()) return;

    //iniciar o timer
    restTimeRef.current = maxTime;
    setRestTime(restTimeRef.current);
    timerRef.current = setInterval(() => {
      timer();
    }, 100);

    setStateExercise("doing");
    setPreparingQuiz(false);
  }

  return {
    stateExercise,
    setStateExercise,
    preparingQuiz,
    maxQuestions,
    score,
    approved,
    currentQuestion,
    setOnFetchQuestions,
    handleStartQuiz,
    questionsAnswered,
    restTime,
    onSelectOption,
    optionSelected,
    submitResponse,
    responding,
    responseAnalyzed,
    setOnDone,
  };
}
