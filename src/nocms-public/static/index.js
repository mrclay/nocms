(() => {
  const params = new URLSearchParams(location.search);
  if (params.has('updated')) {
    const infoAlert = document.querySelector('.alert-info');
    infoAlert.textContent = params.get('updated') === '1'
      ? 'The asset was modified.'
      : 'No change detected.';
    infoAlert.hidden = false;
  }
})();

(() => {
  const form = document.querySelector('form[data-type="block"]');
  if (!form) {
    return;
  }

  const div = document.querySelector('#editor');
  let editor;

  window.BalloonEditor
    .create(div)
    .then(newEditor => {
      editor = newEditor;
      // const options = editor.config.get('heading.options');
      // console.log(options);
    })
    .catch(error => {
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
  const form = document.querySelector('form[data-type="json"]');
  if (!form) {
    return;
  }

  document.querySelector('.built-in-submit').remove();

  const reactRoot = document.querySelector('#jsonData');
  const formData = JSON.parse(reactRoot.dataset.content);
  const schema = JSON.parse(form.dataset.schema);
  const { Form, validator } = window.JSONSchemaForm;
  const uiSchema = {
    "ui:submitButtonOptions": {
      submitText: "Update"
    },
  };
  const onSubmit = ({ formData }, e) => {
    const input = document.createElement('input');
    input.name = 'content';
    input.value = JSON.stringify(formData);
    input.type = 'hidden';
    reactRoot.replaceWith(input);
    form.submit();
  };
  const formProps = {
    formData, schema, validator, uiSchema, onSubmit,
    liveValidate: true,
  };

  ReactDOM.render(
    React.createElement(Form, formProps, null),
    reactRoot,
  );
})();
