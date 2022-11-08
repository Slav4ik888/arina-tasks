import { Configuration as DevServerConfiguraion } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguraion => ({
  port,
  open               : false,
  hot                : true,
  historyApiFallback : true
});
