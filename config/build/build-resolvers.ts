import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';


export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions     : ['.tsx', '.ts', '.js'],
    preferAbsolute : true,
    modules        : [options.paths.src, 'node_modules'],
    mainFiles      : ['index'],
    alias          : {},
    fallback       : {
      "events": false,
      "fs": false,
      "path": false,
      "url": false,
      "buffer": false,
      "util": false,
      "os": false,
      "zlib": false,
      "http": false,
      "https": false
    }
  }
}
