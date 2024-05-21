"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schema_1 = __importDefault(require("../schema"));
describe('GraphQL Schema', () => {
    it('should fetch appetizers', () => __awaiter(void 0, void 0, void 0, function* () {
        const query = `
      {
        appetizers {
          name
          description
          price
        }
      }
    `;
        const result = yield (0, graphql_1.graphql)(schema_1.default, query);
        expect(result.errors).toBeUndefined();
        expect(result.data).toHaveProperty('appetizers');
        expect(result.data.appetizers.length).toBeGreaterThan(0);
    }));
});
