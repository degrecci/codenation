import React from 'react';
import { Heading, Box, Button } from 'react-bulma-components';

import initialQuestions from './questionsArray';

function Questions(props) {
  const checkResponseColor = (answerId, response) => {
    if (!response) {
      return null;
    }

    if (answerId === response.correctResponse) {
      return 'success';
    }

    if (answerId === response.responseId) {
      return 'danger';
    }
  };

  const checkResponse = index => {
    if (!props.responses[index]) {
      return null;
    }
    return props.responses[index].isCorrectResponse ? 'correta' : 'errada';
  };

  return (
    <>
      {initialQuestions.map((question, index) => (
        <Box key={index}>
          <Heading>{question.title}</Heading>
          <div data-test="pergunta" data-resposta={checkResponse(index)}>
            {question.answers.map(({ answerId, answer }) => (
              <Button
                color={checkResponseColor(answerId, props.responses[index])}
                data-test="opcao"
                key={answerId}
                fullwidth
                style={{ marginTop: '10px' }}
                size="medium"
                onClick={() => props.computeResponse(index, answerId)}
              >
                {answer}
              </Button>
            ))}
          </div>
        </Box>
      ))}
    </>
  );
}

export default Questions;
