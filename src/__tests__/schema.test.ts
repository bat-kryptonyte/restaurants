import { graphql } from 'graphql';
import schema from '../schema';

describe('GraphQL Schema', () => {
  it('should fetch appetizers', async () => {
    const query = `
      {
        appetizers {
          name
          description
          price
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    expect(result.data).toHaveProperty('appetizers');
    expect(result.data!.appetizers.length).toBeGreaterThan(0);
  });
});
