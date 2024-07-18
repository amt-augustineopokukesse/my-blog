import { typeOrmConfig } from './type-orm-config';

describe('typeOrmConfig', () => {
  it('should work', () => {
    expect(typeOrmConfig()).toEqual('typeOrm-config');
  });
});
