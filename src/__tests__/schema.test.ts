import { graphql } from 'graphql';
import schema from '../app/schema';

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
    expect(result.data).toBeDefined();
    if (result.data) {
      expect(result.data).toHaveProperty('appetizers');
      expect(result.data.appetizers.length).toBeGreaterThan(0);
    }
  });

  it('should fetch sandwiches', async () => {
    const query = `
      {
        sandwiches {
          type
          bread
          halfPrice
          fullPrice
          items {
            name
            description
          }
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data) {
      expect(result.data).toHaveProperty('sandwiches');
      expect(result.data.sandwiches.length).toBeGreaterThan(0);
      expect(result.data.sandwiches[0].items.length).toBeGreaterThan(0);
    }
  });

  it('should fetch entrees', async () => {
    const query = `
      {
        entrees {
          name
          description
          price
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data){
      expect(result.data).toHaveProperty('entrees');
      expect(result.data.entrees.length).toBeGreaterThan(0);
    }
  });

  it('should fetch soup and salad combos', async () => {
    const query = `
      {
        soupSaladCombos {
          name
          description
          price
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data) {
      expect(result.data).toHaveProperty('soupSaladCombos');
      expect(result.data.soupSaladCombos.length).toBeGreaterThan(0);
    }
  });

  it('should fetch fajitas', async () => {
    const query = `
      {
        fajitas {
          name
          description
          price
          servedWith
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data){
      expect(result.data).toHaveProperty('fajitas');
      expect(result.data.fajitas.length).toBeGreaterThan(0);
    }
  });

  it('should fetch tacos', async () => {
    const query = `
      {
        tacos {
          name
          description
          price
          servedWith
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data){
      expect(result.data).toHaveProperty('tacos');
      expect(result.data.tacos.length).toBeGreaterThan(0);
    }
  });

  it('should fetch enchiladas', async () => {
    const query = `
      {
        enchiladas {
          name
          description
          options {
            type
            uno
            dos
            tres
          }
          price
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data){
      expect(result.data).toHaveProperty('enchiladas');
      expect(result.data.enchiladas.length).toBeGreaterThan(0);
    }
  });

  it('should fetch quiche', async () => {
    const query = `
      {
        quiche {
          name
          description
          price
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data){
      expect(result.data).toHaveProperty('quiche');
      expect(result.data.quiche.length).toBeGreaterThan(0);
    }
  });

  it('should fetch green salads', async () => {
    const query = `
      {
        greenSalads {
          name
          description
          price
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data){
      expect(result.data).toHaveProperty('greenSalads');
      expect(result.data.greenSalads.length).toBeGreaterThan(0);
    }
  });

  it('should fetch all menu items', async () => {
    const query = `
      {
        getAllMenuItems {
          name
          description
          price
        }
      }
    `;
    const result = await graphql(schema, query);
    expect(result.errors).toBeUndefined();
    if(result.data){
      expect(result.data).toHaveProperty('getAllMenuItems');
      expect(result.data.getAllMenuItems.length).toBeGreaterThan(0);
    }
  });

 
});
