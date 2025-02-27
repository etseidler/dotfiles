from collections.abc import Iterator
from typing import Protocol

import gdb

class SymValueWrapper(Protocol):
    def symbol(self) -> gdb.Symbol | str: ...
    def value(self) -> gdb._ValueOrNative | None: ...

class _FrameDecoratorBase:
    def __init__(self, base: gdb.Frame | FrameDecorator) -> None: ...
    def elided(self) -> Iterator[gdb.Frame] | None: ...
    def function(self) -> str | None: ...
    def address(self) -> int | None: ...
    def line(self) -> int | None: ...
    def frame_args(self) -> Iterator[SymValueWrapper] | None: ...
    def frame_locals(self) -> Iterator[SymValueWrapper] | None: ...
    def inferior_frame(self) -> gdb.Frame: ...

class FrameDecorator(_FrameDecoratorBase):
    def filename(self) -> str | None: ...

class DAPFrameDecorator(_FrameDecoratorBase):
    def filename(self) -> str | None: ...
