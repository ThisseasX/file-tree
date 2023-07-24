#!/usr/bin/env node
const { readdirSync } = require('fs');
const path = require('path');

const CHARS = {
  ANGLE: '└',
  LINE_H: '─',
  LINE_V: '│',
  MIDDLE: '├',
};

const [, , ENTRY = process.cwd()] = process.argv;

const getConnector = (hasEnded) => (hasEnded ? CHARS.ANGLE : CHARS.MIDDLE);

const getSpacing = (endedStreams) =>
  [
    [...endedStreams.slice(0, endedStreams.length - 1)]
      .map((hasEnded, i) => {
        if (i === 0) return '';
        return hasEnded ? ' ' : CHARS.LINE_V;
      })
      .join('  '),
    '  ',
  ].join('');

const printItem = (item, level = 0, endedStreams = []) => {
  console.log(
    [
      level === 0 ? '' : getSpacing(endedStreams),
      level === 0 ? '' : getConnector(endedStreams[level]),
      level === 0 ? '' : CHARS.LINE_H.repeat(2),
      path.basename(item),
    ].join(''),
  );
};

const walk = (filepath, level = 0, endedStreams = [true]) => {
  printItem(filepath, level, endedStreams);

  try {
    const dir = readdirSync(filepath);

    dir.forEach((child, i, arr) => {
      const newPath = path.join(filepath, child);
      const newLevel = level + 1;
      const hasEnded = i === arr.length - 1;
      const newEndedStreams = [...endedStreams, hasEnded];

      return walk(newPath, newLevel, newEndedStreams);
    });
  } catch {
    /* empty */
  }
};

walk(ENTRY);
