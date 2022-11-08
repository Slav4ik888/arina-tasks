import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv, BuildPaths } from './config/build/types/config';


export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry   : path.resolve(__dirname, 'src', 'index.tsx'),
    build   : path.resolve(__dirname, 'build'),
    html    : path.resolve(__dirname, 'public', 'index.html'),
    favicon : path.resolve(__dirname, 'public', 'favicon.ico'),
    src     : path.resolve(__dirname, 'src')
  };

  const
    mode   = env.mode || 'development',
    isDev  = mode === 'development',
    port   = env.port || 3017,
    isAnal = env.anal;


  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    isAnal,
    port
  });

  return config;
}
