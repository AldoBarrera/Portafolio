module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/component/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/component/test.tsx.hbs'
      }
    ]
  }),
    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/pages/{{name}}/index.tsx',
          templateFile: 'templates/page/Page.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{name}}/styles.ts',
          templateFile: 'templates/page/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{name}}/stories.tsx',
          templateFile: 'templates/page/stories.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{name}}/test.tsx',
          templateFile: 'templates/page/test.tsx.hbs'
        }
      ]
    })
}
