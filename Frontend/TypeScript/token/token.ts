type TokenType = string

interface Token {
    Type: TokenType,
    Literal: string
}

const ILLEGAL = "ILLEGAL"
    , EOF = "EOF"

// Identifiers + literals
const IDENT = "IDENT"
    , INT = "INT"

// Operators
const ASSIGN = "="
    , PLUS = "+"
	, MINUS = "-"
	, BANG = "!"
	, ASTERISK = "*"
	, SLASH = "/"
	, LT = "<"
	, GT = ">"

// Delimiters
const COMMA = ","
    , SEMICOLON = ";"
    , LPAREN = "("
    , RPAREN = ")"
    , LBRACE = "{"
	, EQ = "=="
	, NOT_EQ = "!="


// Keywords
const FUNCTION="FUNCTION"
    , LET =  "LET"
    , TRUE = "TRUE"
    , FALSE = "FALSE"
    , IF = "IF"
    , ELSE = "ELSE"
    , RETURN = "RETURN"


let keywords = {
    "fn": FUNCTION,
    "let": LET,
    "true": TRUE,
    "false": FALSE,
    "if": IF,
    "else": ELSE,
    "return": RETURN,
}