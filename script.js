const questions = [
    {
      question: "Що відбудеться, якщо не обробити виняток у Python?",
      answers: [
        { text: "Програма продовжить виконання", correct: false },
        { text: "Буде виведено попередження і продовжиться виконання", correct: false },
        { text: "Програма завершиться з помилкою", correct: true },
        { text: "Блок finally не виконається", correct: false }
      ]
    },
    {
      question: "Який виняток виникне при діленні на нуль?",
      answers: [
        { text: "ZeroDivisionError", correct: true },
        { text: "ValueError", correct: false },
        { text: "TypeError", correct: false },
        { text: "ArithmeticError", correct: false }
      ]
    },
    {
      question: "Яке ключове слово використовується для генерації винятку?",
      answers: [
        { text: "throw", correct: false },
        { text: "raise", correct: true },
        { text: "except", correct: false },
        { text: "assert", correct: false }
      ]
    },
    {
      question: "Який блок виконується незалежно від того, чи сталася помилка?",
      answers: [
        { text: "try", correct: false },
        { text: "except", correct: false },
        { text: "finally", correct: true },
        { text: "else", correct: false }
      ]
    },
    {
      question: "Що таке BaseException у Python?",
      answers: [
        { text: "Функція для виклику помилки", correct: false },
        { text: "Базовий клас для всіх винятків", correct: true },
        { text: "Спеціальний тип синтаксичної помилки", correct: false },
        { text: "Метод для обробки помилок", correct: false }
      ]
    },
    {
      question: "Який виняток виникне при спробі конвертувати 'abc' у число?",
      answers: [
        { text: "NameError", correct: false },
        { text: "TypeError", correct: false },
        { text: "ValueError", correct: true },
        { text: "SyntaxError", correct: false }
      ]
    },
    {
      question: "Для чого використовується блок else у конструкції try-except?",
      answers: [
        { text: "Для обробки синтаксичних помилок", correct: false },
        { text: "Для виконання коду, якщо виняток не виник", correct: true },
        { text: "Для завершення програми", correct: false },
        { text: "Для ігнорування помилок", correct: false }
      ]
    },
    {
      question: "Як обробити декілька типів винятків в одному блоці except?",
      answers: [
        { text: "except (TypeError or ValueError):", correct: false },
        { text: "except [TypeError, ValueError]:", correct: false },
        { text: "except (TypeError, ValueError):", correct: true },
        { text: "except TypeError, ValueError:", correct: false }
      ]
    },
    {
      question: "Що робить інструкція 'assert'?",
      answers: [
        { text: "Генерує виняток, якщо умова хибна", correct: true },
        { text: "Видаляє об’єкт з пам’яті", correct: false },
        { text: "Обходить винятки", correct: false },
        { text: "Продовжує виконання після винятку", correct: false }
      ]
    },
    {
      question: "Яка структура правильного використання try-except-finally?",
      answers: [
        { text: "try -> except -> finally", correct: true },
        { text: "try -> finally -> except", correct: false },
        { text: "except -> try -> finally", correct: false },
        { text: "finally -> try -> except", correct: false }
      ]
    }
  ];
  
  function finishQuiz() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
  
    let mark;
    switch (correctAnswers) {
      case 10:
        mark = 12; break;
      case 9:
        mark = 10; break;
      case 8:
        mark = 9; break;
      case 7:
        mark = 8; break;
      case 6:
        mark = 7; break;
      case 5:
        mark = 6; break;
      default:
        mark = 0; break;
    }
  
    const endTime = new Date();
    const timeTaken = Math.round((endTime - startTime) / 1000);
  
    resultScore.innerText = `Правильних відповідей: ${correctAnswers} з ${questions.length} — Оцінка: ${mark} бал(ів)`;
    resultTime.innerText = `Час проходження: ${timeTaken} сек.`;
  }
  