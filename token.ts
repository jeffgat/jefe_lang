type TokenType = string;

type ILLEGAL = 'ILLEGAL';
type EOF = 'EOF';

// Identifiers + literals
type IDENT = 'IDENT'; // add, foobar, x, y, ...
type INT = 'INT'; // 1343456

// Operators
type ASSIGN = '=';
type PLUS = '+';
type MINUS = '-';
type BANG = '!';
type ASTERISK = '*';
type SLASH = '/';

type LT = '<';
type GT = '>';

type EQ = '==';
type NOT_EQ = '!=';

// Delimiters
type COMMA = ',';
type SEMICOLON = ';';

type LPAREN = '(';
type RPAREN = ')';
type LBRACE = '{';
type RBRACE = '}';

// Keywords
type FUNCTION = 'FUNCTION';
type LET = 'LET';
type TRUE = 'TRUE';
type FALSE = 'FALSE';
type IF = 'IF';
type ELSE = 'ELSE';
type RETURN = 'RETURN';

type Token = {
    type: TokenType;
    literal: string;
};
