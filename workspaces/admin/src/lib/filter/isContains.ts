// ひらがな・カタカナ・半角・全角を区別せずに文字列が含まれているかを調べる
export function isContains({ query, target }: { query: string; target: string }): boolean {
  if (query.length === 0) return true;
  if (target.length < query.length) return false;

  // Create a collator that ignores case, accents, and variant forms
  // but distinguishes base characters
  const collator = new Intl.Collator('ja-JP', {
    sensitivity: 'accent', // equivalent to UCA_L1_FLAG ^ UCA_L2_FLAG
    ignorePunctuation: false,
    usage: 'search'
  });

  // target の先頭から順に query が含まれているかを調べる
  for (let offset = 0; offset <= target.length - query.length; offset++) {
    let match = true;

    for (let idx = 0; idx < query.length; idx++) {
      const targetChar = target.charAt(offset + idx);
      const queryChar = query.charAt(idx);
      // 1文字ずつ Intl.Collator で比較する
      if (collator.compare(targetChar, queryChar) !== 0) {
        match = false;
        break;
      }
    }

    if (match) {
      return true;
    }
  }

  return false;
}
