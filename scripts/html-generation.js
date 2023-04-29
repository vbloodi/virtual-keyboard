// creating HTML Semantic with ES6 `Backquote` feature
const htmlBox = `
<main class="main__container">
      <div class="title">
        <h1 class="title__eng">RSS Virtual Keyboard</h1>
        <h1 class="title__ru hidden">RSS Виртуальная Клавиатура</h1>
      </div>
      <div class="textarea__container">
        <textarea name="textarea" id="textarea" maxlength="255" class="main__textarea textarea"></textarea>
      </div>
      <div class="main__keyboard keyboard" id="keyboard">
        <div class="keyboard__row row">
          <div class="keyboard__key key Backquote">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">~</span>
                <span class="key__center">&#96</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">&#96</span>
                <span class="key__center">~</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">~</span>
                <span class="key__center">&#96</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">&#96</span>
                <span class="key__center">~</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ё</span>
                <span class="key__center">ё</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ё</span>
                <span class="key__center">Ё</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ё</span>
                <span class="key__center">Ё</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ё</span>
                <span class="key__center">ё</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-1">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">!</span>
                <span class="key__center">1</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">1</span>
                <span class="key__center">!</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">!</span>
                <span class="key__center">1</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">1</span>
                <span class="key__center">!</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">!</span>
                <span class="key__center">1</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">1</span>
                <span class="key__center">!</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">!</span>
                <span class="key__center">1</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">1</span>
                <span class="key__center">!</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-2">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">@</span>
                <span class="key__center">2</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">2</span>
                <span class="key__center">@</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">@</span>
                <span class="key__center">2</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">2</span>
                <span class="key__center">@</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">"</span>
                <span class="key__center">2</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">2</span>
                <span class="key__center">"</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">"</span>
                <span class="key__center">2</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">2</span>
                <span class="key__center">"</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-3">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">#</span>
                <span class="key__center">3</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">3</span>
                <span class="key__center">#</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">#</span>
                <span class="key__center">3</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">3</span>
                <span class="key__center">#</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">№</span>
                <span class="key__center">3</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">3</span>
                <span class="key__center">№</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">№</span>
                <span class="key__center">3</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">3</span>
                <span class="key__center">№</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-4">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">$</span>
                <span class="key__center">4</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">4</span>
                <span class="key__center">$</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">$</span>
                <span class="key__center">4</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">4</span>
                <span class="key__center">$</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">;</span>
                <span class="key__center">4</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">4</span>
                <span class="key__center">;</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">;</span>
                <span class="key__center">4</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">4</span>
                <span class="key__center">;</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-5">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">%</span>
                <span class="key__center">5</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">5</span>
                <span class="key__center">%</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">%</span>
                <span class="key__center">5</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">5</span>
                <span class="key__center">%</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">%</span>
                <span class="key__center">5</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">5</span>
                <span class="key__center">%</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">%</span>
                <span class="key__center">5</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">5</span>
                <span class="key__center">%</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-6">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">^</span>
                <span class="key__center">6</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">6</span>
                <span class="key__center">^</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">^</span>
                <span class="key__center">6</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">6</span>
                <span class="key__center">^</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">:</span>
                <span class="key__center">6</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">6</span>
                <span class="key__center">:</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">:</span>
                <span class="key__center">6</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">6</span>
                <span class="key__center">:</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-7">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">&</span>
                <span class="key__center">7</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">7</span>
                <span class="key__center">&</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">&</span>
                <span class="key__center">7</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">7</span>
                <span class="key__center">&</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">?</span>
                <span class="key__center">7</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">7</span>
                <span class="key__center">?</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">?</span>
                <span class="key__center">7</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">7</span>
                <span class="key__center">?</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-8">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">*</span>
                <span class="key__center">8</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">8</span>
                <span class="key__center">*</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">*</span>
                <span class="key__center">8</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">8</span>
                <span class="key__center">*</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">*</span>
                <span class="key__center">8</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">8</span>
                <span class="key__center">*</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">*</span>
                <span class="key__center">8</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">8</span>
                <span class="key__center">*</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-9">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">(</span>
                <span class="key__center">9</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">9</span>
                <span class="key__center">(</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">(</span>
                <span class="key__center">9</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">9</span>
                <span class="key__center">(</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">(</span>
                <span class="key__center">9</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">9</span>
                <span class="key__center">(</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">(</span>
                <span class="key__center">9</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">9</span>
                <span class="key__center">(</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Digit-0">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">)</span>
                <span class="key__center">0</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">0</span>
                <span class="key__center">)</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">)</span>
                <span class="key__center">0</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">0</span>
                <span class="key__center">)</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">)</span>
                <span class="key__center">0</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">0</span>
                <span class="key__center">)</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">)</span>
                <span class="key__center">0</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">0</span>
                <span class="key__center">)</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Minus">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">_</span>
                <span class="key__center">-</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">-</span>
                <span class="key__center">_</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">_</span>
                <span class="key__center">-</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">-</span>
                <span class="key__center">_</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">_</span>
                <span class="key__center">-</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">-</span>
                <span class="key__center">_</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">_</span>
                <span class="key__center">-</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">-</span>
                <span class="key__center">_</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Equal">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">+</span>
                <span class="key__center">=</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">=</span>
                <span class="key__center">+</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">+</span>
                <span class="key__center">=</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">=</span>
                <span class="key__center">+</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">+</span>
                <span class="key__center">=</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">=</span>
                <span class="key__center">+</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">+</span>
                <span class="key__center">=</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">=</span>
                <span class="key__center">+</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Backspace">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Backspace</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Backspace</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Backspace</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Backspace</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Backspace</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Backspace</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Backspace</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Backspace</span>
              </span>
            </span>
          </div>
        </div>
        <div class="keyboard__row row">
          <div class="keyboard__key key Tab">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Tab</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Tab</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Tab</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Tab</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Tab</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Tab</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Tab</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Tab</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-Q">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">Q</span>
                <span class="key__center">q</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">q</span>
                <span class="key__center">Q</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">q</span>
                <span class="key__center">Q</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Q</span>
                <span class="key__center">q</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Й</span>
                <span class="key__center">й</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">й</span>
                <span class="key__center">Й</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">й</span>
                <span class="key__center">Й</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Й</span>
                <span class="key__center">й</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-W">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">W</span>
                <span class="key__center">w</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">w</span>
                <span class="key__center">W</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">w</span>
                <span class="key__center">W</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">W</span>
                <span class="key__center">w</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ц</span>
                <span class="key__center">ц</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ц</span>
                <span class="key__center">Ц</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ц</span>
                <span class="key__center">Ц</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ц</span>
                <span class="key__center">ц</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-E">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">E</span>
                <span class="key__center">e</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">e</span>
                <span class="key__center">E</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">e</span>
                <span class="key__center">E</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">E</span>
                <span class="key__center">e</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">У</span>
                <span class="key__center">у</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">у</span>
                <span class="key__center">У</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">у</span>
                <span class="key__center">У</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">У</span>
                <span class="key__center">у</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-R">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">R</span>
                <span class="key__center">r</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">r</span>
                <span class="key__center">R</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">r</span>
                <span class="key__center">R</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">R</span>
                <span class="key__center">r</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">К</span>
                <span class="key__center">к</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">к</span>
                <span class="key__center">К</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">к</span>
                <span class="key__center">К</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">К</span>
                <span class="key__center">к</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-T">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">T</span>
                <span class="key__center">t</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">t</span>
                <span class="key__center">T</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">t</span>
                <span class="key__center">T</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">T</span>
                <span class="key__center">t</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Е</span>
                <span class="key__center">е</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">е</span>
                <span class="key__center">Е</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">е</span>
                <span class="key__center">Е</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Е</span>
                <span class="key__center">е</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-Y">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">Y</span>
                <span class="key__center">y</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">y</span>
                <span class="key__center">Y</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">y</span>
                <span class="key__center">Y</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Y</span>
                <span class="key__center">y</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Н</span>
                <span class="key__center">н</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">н</span>
                <span class="key__center">Н</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">н</span>
                <span class="key__center">Н</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Н</span>
                <span class="key__center">н</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-U">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">U</span>
                <span class="key__center">u</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">u</span>
                <span class="key__center">U</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">u</span>
                <span class="key__center">U</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">U</span>
                <span class="key__center">u</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Г</span>
                <span class="key__center">г</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">г</span>
                <span class="key__center">Г</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">г</span>
                <span class="key__center">Г</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Г</span>
                <span class="key__center">г</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-I">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">I</span>
                <span class="key__center">i</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">i</span>
                <span class="key__center">I</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">i</span>
                <span class="key__center">I</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">I</span>
                <span class="key__center">i</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ш</span>
                <span class="key__center">ш</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ш</span>
                <span class="key__center">Ш</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ш</span>
                <span class="key__center">Ш</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ш</span>
                <span class="key__center">ш</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-O">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">O</span>
                <span class="key__center">o</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">o</span>
                <span class="key__center">O</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">o</span>
                <span class="key__center">O</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">O</span>
                <span class="key__center">o</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Щ</span>
                <span class="key__center">щ</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">щ</span>
                <span class="key__center">Щ</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">щ</span>
                <span class="key__center">Щ</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Щ</span>
                <span class="key__center">щ</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-P">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">P</span>
                <span class="key__center">p</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">p</span>
                <span class="key__center">P</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">p</span>
                <span class="key__center">P</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">P</span>
                <span class="key__center">p</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">З</span>
                <span class="key__center">з</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">з</span>
                <span class="key__center">З</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">з</span>
                <span class="key__center">З</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">З</span>
                <span class="key__center">з</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Bracket-Left">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">{</span>
                <span class="key__center">[</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">[</span>
                <span class="key__center">{</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">{</span>
                <span class="key__center">[</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">[</span>
                <span class="key__center">{</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Х</span>
                <span class="key__center">х</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">х</span>
                <span class="key__center">Х</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">х</span>
                <span class="key__center">Х</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Х</span>
                <span class="key__center">х</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Bracket-Right">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">}</span>
                <span class="key__center">]</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">]</span>
                <span class="key__center">}</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">}</span>
                <span class="key__center">]</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">]</span>
                <span class="key__center">}</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ъ</span>
                <span class="key__center">ъ</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ъ</span>
                <span class="key__center">Ъ</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ъ</span>
                <span class="key__center">Ъ</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ъ</span>
                <span class="key__center">ъ</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Backslash">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">|</span>
                <span class="key__center">&bsol;</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">&bsol;</span>
                <span class="key__center">|</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">|</span>
                <span class="key__center">&bsol;</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">&bsol;</span>
                <span class="key__center">|</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">/</span>
                <span class="key__center">&bsol;</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">&bsol;</span>
                <span class="key__center">/</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">/</span>
                <span class="key__center">&bsol;</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">&bsol;</span>
                <span class="key__center">/</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Delete">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Del</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Del</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Del</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Del</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Del</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Del</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Del</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Del</span>
              </span>
            </span>
          </div>
        </div>
        <div class="keyboard__row row">
          <div class="keyboard__key key Caps-Lock">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Caps Lock</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Caps Lock</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Caps Lock</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Caps Lock</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Caps Lock</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Caps Lock</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Caps Lock</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Caps Lock</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-A">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">A</span>
                <span class="key__center">a</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">a</span>
                <span class="key__center">A</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">a</span>
                <span class="key__center">A</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">A</span>
                <span class="key__center">a</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ф</span>
                <span class="key__center">ф</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ф</span>
                <span class="key__center">Ф</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ф</span>
                <span class="key__center">Ф</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ф</span>
                <span class="key__center">ф</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-S">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">S</span>
                <span class="key__center">s</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">s</span>
                <span class="key__center">S</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">s</span>
                <span class="key__center">S</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">S</span>
                <span class="key__center">s</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ы</span>
                <span class="key__center">ы</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ы</span>
                <span class="key__center">Ы</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ы</span>
                <span class="key__center">Ы</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ы</span>
                <span class="key__center">ы</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-D">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">D</span>
                <span class="key__center">d</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">d</span>
                <span class="key__center">D</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">d</span>
                <span class="key__center">D</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">D</span>
                <span class="key__center">d</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ы</span>
                <span class="key__center">ы</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ы</span>
                <span class="key__center">Ы</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ы</span>
                <span class="key__center">Ы</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ы</span>
                <span class="key__center">ы</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-F">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">F</span>
                <span class="key__center">f</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">f</span>
                <span class="key__center">F</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">f</span>
                <span class="key__center">F</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">F</span>
                <span class="key__center">f</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">А</span>
                <span class="key__center">а</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">а</span>
                <span class="key__center">А</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">а</span>
                <span class="key__center">А</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">А</span>
                <span class="key__center">а</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-G">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">G</span>
                <span class="key__center">g</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">g</span>
                <span class="key__center">G</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">g</span>
                <span class="key__center">G</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">G</span>
                <span class="key__center">g</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">П</span>
                <span class="key__center">п</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">п</span>
                <span class="key__center">П</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">п</span>
                <span class="key__center">П</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">П</span>
                <span class="key__center">п</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-H">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">H</span>
                <span class="key__center">h</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">h</span>
                <span class="key__center">H</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">h</span>
                <span class="key__center">H</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">H</span>
                <span class="key__center">h</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Р</span>
                <span class="key__center">р</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">р</span>
                <span class="key__center">Р</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">р</span>
                <span class="key__center">Р</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Р</span>
                <span class="key__center">р</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-J">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">J</span>
                <span class="key__center">j</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">j</span>
                <span class="key__center">J</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">j</span>
                <span class="key__center">J</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">J</span>
                <span class="key__center">j</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">О</span>
                <span class="key__center">о</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">о</span>
                <span class="key__center">О</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">о</span>
                <span class="key__center">О</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">О</span>
                <span class="key__center">о</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-K">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">K</span>
                <span class="key__center">k</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">k</span>
                <span class="key__center">K</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">k</span>
                <span class="key__center">K</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">K</span>
                <span class="key__center">k</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Л</span>
                <span class="key__center">л</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">л</span>
                <span class="key__center">Л</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">л</span>
                <span class="key__center">Л</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Л</span>
                <span class="key__center">л</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-L">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">L</span>
                <span class="key__center">l</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">l</span>
                <span class="key__center">L</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">l</span>
                <span class="key__center">L</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">L</span>
                <span class="key__center">l</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Д</span>
                <span class="key__center">д</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">д</span>
                <span class="key__center">Д</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">д</span>
                <span class="key__center">Д</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Д</span>
                <span class="key__center">д</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Semicolon">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">:</span>
                <span class="key__center">;</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">;</span>
                <span class="key__center">:</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">:</span>
                <span class="key__center">;</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">;</span>
                <span class="key__center">:</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ж</span>
                <span class="key__center">ж</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ж</span>
                <span class="key__center">Ж</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ж</span>
                <span class="key__center">Ж</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ж</span>
                <span class="key__center">ж</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Quote">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">"</span>
                <span class="key__center">'</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">'</span>
                <span class="key__center">"</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">"</span>
                <span class="key__center">'</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">'</span>
                <span class="key__center">"</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Э</span>
                <span class="key__center">э</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">э</span>
                <span class="key__center">Э</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">э</span>
                <span class="key__center">Э</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Э</span>
                <span class="key__center">э</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Enter">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Enter</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Enter</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Enter</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Enter</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Enter</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Enter</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Enter</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Enter</span>
              </span>
            </span>
          </div>
        </div>
        <div class="keyboard__row row">
          <div class="keyboard__key key Shift-Left">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Shift</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Shift</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Shift</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-Z">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">Z</span>
                <span class="key__center">z</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">z</span>
                <span class="key__center">Z</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">z</span>
                <span class="key__center">Z</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Z</span>
                <span class="key__center">z</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Я</span>
                <span class="key__center">я</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">я</span>
                <span class="key__center">Я</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">я</span>
                <span class="key__center">Я</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Я</span>
                <span class="key__center">я</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-X">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">X</span>
                <span class="key__center">x</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">x</span>
                <span class="key__center">X</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">x</span>
                <span class="key__center">X</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">X</span>
                <span class="key__center">x</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ч</span>
                <span class="key__center">ч</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ч</span>
                <span class="key__center">Ч</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ч</span>
                <span class="key__center">Ч</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ч</span>
                <span class="key__center">ч</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-C">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">C</span>
                <span class="key__center">c</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">c</span>
                <span class="key__center">C</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">c</span>
                <span class="key__center">C</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">C</span>
                <span class="key__center">c</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">С</span>
                <span class="key__center">с</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">с</span>
                <span class="key__center">С</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">с</span>
                <span class="key__center">С</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">С</span>
                <span class="key__center">с</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-V">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">V</span>
                <span class="key__center">v</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">v</span>
                <span class="key__center">V</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">v</span>
                <span class="key__center">V</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">V</span>
                <span class="key__center">v</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">М</span>
                <span class="key__center">м</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">м</span>
                <span class="key__center">М</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">м</span>
                <span class="key__center">М</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">М</span>
                <span class="key__center">м</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-B">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">B</span>
                <span class="key__center">b</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">b</span>
                <span class="key__center">B</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">b</span>
                <span class="key__center">B</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">B</span>
                <span class="key__center">b</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">И</span>
                <span class="key__center">и</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">и</span>
                <span class="key__center">И</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">и</span>
                <span class="key__center">И</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">И</span>
                <span class="key__center">и</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-N">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">N</span>
                <span class="key__center">n</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">n</span>
                <span class="key__center">N</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">n</span>
                <span class="key__center">N</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">N</span>
                <span class="key__center">n</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Т</span>
                <span class="key__center">т</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">т</span>
                <span class="key__center">Т</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">т</span>
                <span class="key__center">Т</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Т</span>
                <span class="key__center">т</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Key-M">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">M</span>
                <span class="key__center">m</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">m</span>
                <span class="key__center">M</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">m</span>
                <span class="key__center">M</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">M</span>
                <span class="key__center">m</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ь</span>
                <span class="key__center">ь</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ь</span>
                <span class="key__center">Ь</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ь</span>
                <span class="key__center">Ь</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ь</span>
                <span class="key__center">ь</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Comma">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">&lt;</span>
                <span class="key__center">,</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">,</span>
                <span class="key__center">&lt;</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">&lt;</span>
                <span class="key__center">,</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">,</span>
                <span class="key__center">&lt;</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Б</span>
                <span class="key__center">б</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">б</span>
                <span class="key__center">Б</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">б</span>
                <span class="key__center">Б</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Б</span>
                <span class="key__center">б</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Period">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">&gt;</span>
                <span class="key__center">.</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">.</span>
                <span class="key__center">&gt;</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">&gt;</span>
                <span class="key__center">.</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">.</span>
                <span class="key__center">&gt;</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">Ю</span>
                <span class="key__center">ю</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">ю</span>
                <span class="key__center">Ю</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">ю</span>
                <span class="key__center">Ю</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">Ю</span>
                <span class="key__center">ю</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Slash">
            <span class="eng">
              <span class="caseDown">
                <span class="key__aside">?</span>
                <span class="key__center">/</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">/</span>
                <span class="key__center">?</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">?</span>
                <span class="key__center">/</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">/</span>
                <span class="key__center">?</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__aside">,</span>
                <span class="key__center">.</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__aside">.</span>
                <span class="key__center">,</span>
              </span>
              <span class="caps hidden">
                <span class="key__aside">,</span>
                <span class="key__center">.</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__aside">.</span>
                <span class="key__center">,</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Arrow-Up">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">↑</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">↑</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">↑</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">↑</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">↑</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">↑</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">↑</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">↑</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Shift-Right">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Shift</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Shift</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Shift</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Shift</span>
              </span>
            </span>
          </div>
        </div>
        <div class="keyboard__row row">
          <div class="keyboard__key key Control-Left">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Ctrl</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Ctrl</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Meta-Key">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">&#8862;</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">&#8862;</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">&#8862;</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">&#8862;</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">&#8862;</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">&#8862;</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">&#8862;</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">&#8862;</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Alt-Left">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Alt</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Alt</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Alt</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Space">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center"> </span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center"> </span>
              </span>
              <span class="caps hidden">
                <span class="key__center"> </span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center"> </span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center"> </span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center"> </span>
              </span>
              <span class="caps hidden">
                <span class="key__center"> </span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center"> </span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Alt-Right">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Alt</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Alt</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Alt</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Alt</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Arrow-Left">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">←</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">←</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">←</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">←</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">←</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">←</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">←</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">←</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Arrow-Down">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">↓</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">↓</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">↓</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">↓</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">↓</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">↓</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">↓</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">↓</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Arrow-Right">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">→</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">→</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">→</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">→</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">→</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">→</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">→</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">→</span>
              </span>
            </span>
          </div>
          <div class="keyboard__key key Control-Right">
            <span class="eng">
              <span class="caseDown">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Ctrl</span>
              </span>
            </span>
            <span class="ru hidden">
              <span class="caseDown hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caseUp hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="caps hidden">
                <span class="key__center">Ctrl</span>
              </span>
              <span class="shiftCaps hidden">
                <span class="key__center">Ctrl</span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="description">
        <h2 class="description__eng">Keyboard was created in Windows OS</>
        <h2 class="description__ru hidden">Клавиатура была создана в Windows ОС</h2>
      </div>
      <div class="language">
        <h2 class="language__eng">For language switch press: left Shift + left Alt</h2>
        <h2 class="language__ru hidden">Для переключения языка используйте: левый Shift + левый Alt</>
      </div>
    </main>
`;

document.body.innerHTML = htmlBox;
