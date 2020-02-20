import React from 'react';

export default function Form({
  hasError,
  username,
  handleUsername,
  handleSubmit,
  isLoading
}) {
  return (
    <form>
      <div className="field">
        <div
          className={`control
            ${isLoading ? ' is-loading' : ''}`}
        >
          <input
            className={`input loading
              ${hasError ? ' is-danger' : ''}
            `}
            type="text"
            name="user"
            placeholder="Digite um usuário do github"
            value={username}
            onChange={handleUsername}
            onKeyPress={handleSubmit}
            data-test="entrada"
          />
        </div>
      </div>
    </form>
  );
}
