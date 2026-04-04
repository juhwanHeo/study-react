import type {ProfileInfo} from './types.ts'
import Profile from '.'

export default function ({profiles}: { profiles: ProfileInfo[] }) {
  return (
    <>
      {profiles.map(({id, ...rest}) => (<Profile key={id} {...rest}></Profile>))}
    </>
  );
}