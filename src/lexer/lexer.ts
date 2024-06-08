import { Token, TokenType, TokenTypes } from "../token/token";

export class Lexer {
    private input: string;
    private position:number;
    private readPosition:number; //next pos
    private ch:string|null;

    constructor(input:string){
        this.input = input;
        this.position = 0;
        this.readPosition = 0;
        this.ch =null;
    }

    public static newLexer(input:string){
        const lexer = new Lexer(input)
        lexer.readChar()
        return lexer
    }

    private readChar(){
        if(this.readPosition >= this.input.length){
            this.ch = null
        }else{
            this.ch = this.input[this.readPosition]
        }
        this.position = this.readPosition
        this.readPosition++
    }

    public nextToken():Token{
        let token :Token = {
            type:TokenTypes.EOF,
            literal:''
        }

        switch(this.ch){
            case '=':
                token = this.newToken(TokenTypes.ASSIGN,this.ch)
                break
            case ';':
                token = this.newToken(TokenTypes.SEMICOLON,this.ch)
                break
            case '(':
                token = this.newToken(TokenTypes.LPAREN,this.ch)
                break
            case ')':
                token = this.newToken(TokenTypes.RPAREN,this.ch)
                break
            case ',':
                token = this.newToken(TokenTypes.COMMA,this.ch)
                break
            case '+':
                token = this.newToken(TokenTypes.PLUS,this.ch)
                break
            case '{':
                token = this.newToken(TokenTypes.LBRACE,this.ch)
                break
            case '}':
                token = this.newToken(TokenTypes.RBRACE,this.ch)
                break
        }
        this.readChar()
        return token
    }

    private newToken(token:TokenType,ch:string):Token{
        return {
            type:token,
            literal:ch
        }
    }
}