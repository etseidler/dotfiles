from typing import Any

from sympy.printing.codeprinter import CodePrinter

known_functions = ...
reserved_words = ...

class RustCodePrinter(CodePrinter):
    printmethod = ...
    language = ...
    _default_settings: dict[str, Any] = ...
    def __init__(self, settings=...) -> None: ...
    def indent_code(self, code) -> str | list[Any]: ...

def rust_code(expr, assign_to=..., **settings) -> str | tuple[set[tuple[Any, str]], set[Any], str]: ...
def print_rust_code(expr, **settings) -> None: ...
