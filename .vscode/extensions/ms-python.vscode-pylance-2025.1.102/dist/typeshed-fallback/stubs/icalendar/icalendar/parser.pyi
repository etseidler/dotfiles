from _collections_abc import dict_keys
from _typeshed import Incomplete
from collections.abc import Iterable
from re import Pattern
from typing import AnyStr, Final, overload
from typing_extensions import Self

from .caselessdict import CaselessDict

__all__ = [
    "Contentline",
    "Contentlines",
    "FOLD",
    "NAME",
    "NEWLINE",
    "Parameters",
    "QUNSAFE_CHAR",
    "QUOTABLE",
    "UNSAFE_CHAR",
    "dquote",
    "escape_char",
    "escape_string",
    "foldline",
    "param_value",
    "q_join",
    "q_split",
    "uFOLD",
    "unescape_char",
    "unescape_list_or_string",
    "unescape_string",
    "validate_param_value",
    "validate_token",
]

def escape_char(text: str) -> str: ...
def unescape_char(text: AnyStr) -> AnyStr: ...
def foldline(line: str, limit: int = 75, fold_sep: str = "\r\n ") -> str: ...
def param_value(value: str | list[str] | tuple[str, ...] | Incomplete) -> str: ...

NAME: Final[Pattern[str]]
UNSAFE_CHAR: Final[Pattern[str]]
QUNSAFE_CHAR: Final[Pattern[str]]
FOLD: Final[Pattern[bytes]]
uFOLD: Final[Pattern[str]]
NEWLINE: Final[Pattern[str]]

def validate_token(name: str) -> None: ...
def validate_param_value(value: str, quoted: bool = True) -> None: ...

QUOTABLE: Final[Pattern[str]]

def dquote(val: str) -> str: ...
def q_split(st: str, sep: str = ",", maxsplit: int = -1) -> list[str]: ...
def q_join(lst: Iterable[str], sep: str = ",") -> str: ...

class Parameters(CaselessDict[str]):
    def params(self) -> dict_keys[str, str]: ...
    def to_ical(self, sorted: bool = True) -> bytes: ...
    @classmethod
    def from_ical(cls, st: str, strict: bool = False) -> Self: ...

def escape_string(val: str) -> str: ...
def unescape_string(val: str) -> str: ...
@overload
def unescape_list_or_string(val: list[str]) -> list[str]: ...
@overload
def unescape_list_or_string(val: str) -> str: ...

class Contentline(str):
    strict: bool
    def __new__(cls, value: str | bytes, strict: bool = False, encoding: str = ...) -> Self: ...
    @classmethod
    def from_parts(cls, name: str, params: Parameters, values, sorted: bool = True) -> Self: ...
    def parts(self) -> tuple[str, Parameters, str]: ...
    @classmethod
    def from_ical(cls, ical: str | bytes, strict: bool = False) -> Self: ...
    def to_ical(self) -> bytes: ...

class Contentlines(list[Contentline]):
    def to_ical(self) -> bytes: ...
    @classmethod
    def from_ical(cls, st: str | bytes) -> Self: ...
