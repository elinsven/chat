import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:3000/',
  documents: './src/**/*.graphql',
  generates: {
    '.generated/graphql/types.ts': {
      plugins: ['typescript']
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: { extension: '.generated.ts', baseTypesPath: '../.generated/graphql/types.ts' },
      plugins: ['typescript-operations', 'typescript-apollo-angular'],
      config: { withHooks: true, addExplicitOverride: true },
    },
  }
}
export default config