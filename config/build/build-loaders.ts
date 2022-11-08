import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildSvgLoader, buildCssLoaders } from './loaders';



export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[]  {
  const typescriptLoader = {
    test    : /\.tsx?$/,
    use     : 'ts-loader',
    exclude : /node_modules/
  };

  const babelLoader = {
    test    : /\.(js|jsx|tsx)$/,
    exclude : /node_modules/,
    use     : {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

  const cssLoader = buildCssLoaders(isDev);

  const svgLoader = buildSvgLoader();

  const imagesLoader = {
    test : /\.(png|jpe?g|gif|woff|woff2)$/i,
    use  : [
      {
        loader: 'file-loader'
      }
    ]
  };


  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    imagesLoader
  ]
}
