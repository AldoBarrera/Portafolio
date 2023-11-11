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
    plop.setGenerator('layout', {
      description: 'Create a layout',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your layout name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/layouts/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/layout/Layout.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/layouts/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/layout/styles.ts.hbs'
        },
        {
          type: 'add',
          path: '../src/layouts/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/layout/test.tsx.hbs'
        }
      ]
    })
}
