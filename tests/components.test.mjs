import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classifyDroppedText, urlPreview } from '../components/urlPreview.ts';
import { isSupportedImageData } from '../components/images.ts';

test('classifies trimmed HTTP and HTTPS text as URLs', () => {
  assert.equal(classifyDroppedText(' https://example.test/campaign '), 'url');
  assert.equal(classifyDroppedText('http://example.test'), 'url');
});

test('does not classify executable, file or malformed inputs as URL cards', () => {
  for (const input of ['javascript:alert(1)', 'file:///private', 'ftp://example.test', 'ordinary notes', '']) {
    assert.equal(classifyDroppedText(input), 'text', input);
  }
});

test('derives the preview locally without a favicon recipient', () => {
  const preview = urlPreview('https://www.example.test/sales/first_campaign');
  assert.deepEqual(preview, {
    url: 'https://www.example.test/sales/first_campaign',
    domain: 'example.test', title: 'First Campaign', favicon: '',
  });
});

test('derives a hostname title when the URL has no path', () => {
  assert.equal(urlPreview('https://www.example.test').title, 'Example.Test');
});

test('surfaces malformed URL and percent encoding rather than inventing metadata', () => {
  assert.throws(() => urlPreview('not a URL'), TypeError);
  assert.throws(() => urlPreview('https://example.test/%invalid'), URIError);
});

test('accepts the explicitly supported embedded raster formats', () => {
  for (const type of ['png', 'jpeg', 'webp', 'gif', 'bmp', 'avif', 'x-icon', 'vnd.microsoft.icon']) {
    assert.equal(isSupportedImageData(`data:image/${type};base64,YQ==`), true, type);
  }
});

test('rejects remote images, SVG, malformed data and non-string values', () => {
  for (const value of ['https://example.test/image.png', 'data:image/svg+xml;base64,YQ==', 'data:image/png;base64,', 'data:image/png;base64,not data!', 'data:image/png;base64,YQ===', '', null, undefined, {}]) {
    assert.equal(isSupportedImageData(value), false);
  }
});

test('format acceptance is not image decoding', () => {
  // YQ== is merely an encoded letter, not a valid PNG. This helper only checks shape.
  assert.equal(isSupportedImageData('data:image/png;base64,YQ=='), true);
});
