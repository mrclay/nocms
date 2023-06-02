import React from 'react';
import {createRoot} from "react-dom/client";
import validator from '@rjsf/validator-ajv8';
import Form, {FormProps} from '@rjsf/core';

(() => {
  const params = new URLSearchParams(location.search);
  if (params.has('updated')) {
    const infoAlert = document.querySelector<HTMLElement>('.alert-info');
    if (infoAlert) {
      infoAlert.textContent = params.get('updated') === '1'
        ? 'The asset was modified.'
        : 'No change detected.';
      infoAlert.hidden = false;
    }
  }
})();

(() => {
  const form = document.querySelector('form[data-type="block"]');
  if (!form) {
    return;
  }

  const div = document.querySelector<HTMLElement>('#editor');
  if (!div) {
    throw new Error('#editor is missing');
  }

  let editor: any;
  (window as any).BalloonEditor
    .create(div)
    .then((newEditor: any) => {
      editor = newEditor;
    })
    .catch((error: Error) => {
      console.error(error);
    });

  form.addEventListener('submit', () => {
    const content = document.createElement('input');
    content.type = 'hidden';
    content.name = 'content';
    content.value = editor.getData();

    form.append(content);

    return false;
  });
})();

(() => {
  const form = document.querySelector<HTMLFormElement>('form[data-type="json"]');
  if (!form) {
    return;
  }

  const submit = document.querySelector('.built-in-submit');
  if (submit) {
    submit.remove();
  }

  const reactRoot = document.querySelector<HTMLElement>('#jsonData');
  if (!reactRoot) {
    throw new Error('#jsonData is missing');
  }
  const formData = JSON.parse(reactRoot.dataset.content || 'null');
  const schema = JSON.parse(form.dataset.schema || 'null');
  const uiSchema = {
    "ui:submitButtonOptions": {
      submitText: "Update"
    },
  };
  const formProps: FormProps = {
    formData,
    schema,
    validator,
    uiSchema,
    onSubmit: ({ formData }, e) => {
      const input = document.createElement('input');
      input.name = 'content';
      input.value = JSON.stringify(formData);
      input.type = 'hidden';
      reactRoot.replaceWith(input);
      form.submit();
    },
    liveValidate: true,
  };

  const root = createRoot(reactRoot);
  root.render(<Form {...formProps} />);
})();
