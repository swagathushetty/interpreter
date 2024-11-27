import { TokenTypes } from "../token/token";
import { Lexer } from "./lexer";

describe('lexer',()=>{
    it('should return next token',()=>{
        const input = `
                let five = 5;
                let ten = 10;
                
                let add = fn(x, y) {
                    x + y;
                };
                
                let result = add(five, ten);

                !-/*5;
                5 < 10 > 5;

                if(5 < 10){
                 return true;
                } else {
                 return false;
                }
                10 == 10;
                10 != 10;
        `;
        const tests = [
            { expectedType: TokenTypes.LET, expectedLiteral: "let" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "five" },
            { expectedType: TokenTypes.ASSIGN, expectedLiteral: "=" },
            { expectedType: TokenTypes.INT, expectedLiteral: "5" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.LET, expectedLiteral: "let" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "ten" },
            { expectedType: TokenTypes.ASSIGN, expectedLiteral: "=" },
            { expectedType: TokenTypes.INT, expectedLiteral: "10" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.LET, expectedLiteral: "let" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "add" },
            { expectedType: TokenTypes.ASSIGN, expectedLiteral: "=" },
            { expectedType: TokenTypes.FUNCTION, expectedLiteral: "fn" },
            { expectedType: TokenTypes.LPAREN, expectedLiteral: "(" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "x" },
            { expectedType: TokenTypes.COMMA, expectedLiteral: "," },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "y" },
            { expectedType: TokenTypes.RPAREN, expectedLiteral: ")" },
            { expectedType: TokenTypes.LBRACE, expectedLiteral: "{" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "x" },
            { expectedType: TokenTypes.PLUS, expectedLiteral: "+" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "y" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.RBRACE, expectedLiteral: "}" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.LET, expectedLiteral: "let" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "result" },
            { expectedType: TokenTypes.ASSIGN, expectedLiteral: "=" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "add" },
            { expectedType: TokenTypes.LPAREN, expectedLiteral: "(" },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "five" },
            { expectedType: TokenTypes.COMMA, expectedLiteral: "," },
            { expectedType: TokenTypes.IDENT, expectedLiteral: "ten" },
            { expectedType: TokenTypes.RPAREN, expectedLiteral: ")" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            
            { expectedType: TokenTypes.BANG, expectedLiteral: "!" },
            { expectedType: TokenTypes.MINUS, expectedLiteral: "-" },
            { expectedType: TokenTypes.SLASH, expectedLiteral: "/" },
            { expectedType: TokenTypes.ASTERIK, expectedLiteral: "*" },
            { expectedType: TokenTypes.INT, expectedLiteral: "5" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.INT, expectedLiteral: "5" },
            { expectedType: TokenTypes.LT, expectedLiteral: "<" },
            { expectedType: TokenTypes.INT, expectedLiteral: "10" },
            { expectedType: TokenTypes.GT, expectedLiteral: ">" },
            { expectedType: TokenTypes.INT, expectedLiteral: "5" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },


            { expectedType: TokenTypes.IF, expectedLiteral: "if" },
            { expectedType: TokenTypes.LPAREN, expectedLiteral: "(" },
            { expectedType: TokenTypes.INT, expectedLiteral: "5" },
            { expectedType: TokenTypes.LT, expectedLiteral: "<" },
            { expectedType: TokenTypes.INT, expectedLiteral: "10" },
            { expectedType: TokenTypes.RPAREN, expectedLiteral: ")" },
            { expectedType: TokenTypes.LBRACE, expectedLiteral: "{" },
            { expectedType: TokenTypes.RETURN, expectedLiteral: "return" },
            { expectedType: TokenTypes.TRUE, expectedLiteral: "true" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.RBRACE, expectedLiteral: "}" },
            { expectedType: TokenTypes.ELSE, expectedLiteral: "else" },
            { expectedType: TokenTypes.LBRACE, expectedLiteral: "{" },
            { expectedType: TokenTypes.RETURN, expectedLiteral: "return" },
            { expectedType: TokenTypes.FALSE, expectedLiteral: "false" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.RBRACE, expectedLiteral: "}" },



            { expectedType: TokenTypes.INT, expectedLiteral: "10" },
            { expectedType: TokenTypes.EQ, expectedLiteral: "==" },
            { expectedType: TokenTypes.INT, expectedLiteral: "10" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },
            { expectedType: TokenTypes.INT, expectedLiteral: "10" },
            { expectedType: TokenTypes.NOT_EQ, expectedLiteral: "!=" },
            { expectedType: TokenTypes.INT, expectedLiteral: "10" },
            { expectedType: TokenTypes.SEMICOLON, expectedLiteral: ";" },

            {expectedType:TokenTypes.EOF,expectedLiteral:""},
        ];

        const lexer = Lexer.newLexer(input)

        for( const test of tests){
            const currToken = lexer.nextToken()
            expect(currToken.type).toEqual(test.expectedType)
            expect(currToken.literal).toEqual(test.expectedLiteral)
        }
    })
})