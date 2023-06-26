package token

// Define token type and token struct
type TokenType string

type Token struct{
	Type TokenType
	Literal string
}

// Special characters and words
const (
	ILLEGAL = "ILLEGAL"
	EOF = "EOF"

	// Identifiers + literals
	IDENT = "IDENT" // identifiers aka variable names
	INT = "INT"

	// Operators
	ASSIGN = "="
	PLUS = "+"

	// Delimiters - chars that separate text strings
	COMMA = ","
	SEMICOLON = ";"

	LPAREN = "("
	RPAREN = ")"
	LBRACE = "{"
	RBRACE = "}"
)

var keywords = map[string] TokenType(
	"fn": FUNCTION,
	"let": LET,
)

func LookupIdent(ident string) TokenType {
	if tok, ok:= keywords[ident]; ok{
		return tok
	}
	return IDENT
}