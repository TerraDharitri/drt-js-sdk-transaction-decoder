import { TransactionDecoder, TransactionMetadata } from './../src/transaction.decoder';

test('Simple wallet to wallet transfer with dummy data text', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzws36f6y2',
    receiver: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    data: 'ZHVtbXlUZXh0',
    value: '10000000000000000',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzws36f6y2',
    receiver: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    value: BigInt('10000000000000000'),
    functionName: 'transfer',
    transferMessages: [new Uint8Array(Buffer.from("dummyText"))],
  });
});

test('Smart contract call without arguments', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzws36f6y2',
    receiver: 'drt1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qmyujkw',
    data: 'bXlFbmRwb2ludA==',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzws36f6y2',
    receiver: 'drt1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qmyujkw',
    value: BigInt('0'),
    functionName: 'myEndpoint',
    functionArgs: [],
    transferMessages: [],
  });
});

test('NFT Smart contract call', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzws36f6y2',
    receiver: 'drt18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzws36f6y2',
    data: 'RENEVE5GVFRyYW5zZmVyQDRjNGI0ZDRmNDEyZDYxNjE2MjM5MzEzMEAyZmI0ZTlAZTQwZjE2OTk3MTY1NWU2YmIwNGNAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEA3Mzc3NjE3MDVmNmM2YjZkNmY2MTVmNzQ2ZjVmNzI2NTc3NjFAMGIzNzdmMjYxYzNjNzE5MUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzws36f6y2',
    receiver: 'drt1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qmyujkw',
    value: BigInt('1076977887712805212893260'),
    functionName: 'swap_lkmoa_to_rewa',
    functionArgs: [
      '0b377f261c3c7191',
      '',
    ],
    transfers: [
      {
        value: BigInt('1076977887712805212893260'),
        properties: {
          collection: 'LKMOA-aab910',
          identifier: 'LKMOA-aab910-2fb4e9',
        },
      },
    ],
    transferMessages: [],
  });
});

test('MultiDCDTNFTTransfer', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    receiver: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    data: 'TXVsdGlEQ0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEAwMkA0YzRiNGQ0ZjQxMmQ2MTYxNjIzOTMxMzBAMmZlM2IwQDA5Yjk5YTZkYjMwMDI3ZTRmM2VjQDRjNGI0ZDRmNDEyZDYxNjE2MjM5MzEzMEAzMTAyY2FAMDEyNjMwZTlhMjlmMmY5MzgxNDQ5MUA3Mzc3NjE3MDVmNmM2YjZkNmY2MTVmNzQ2ZjVmNzI2NTc3NjFAMGVkZTY0MzExYjhkMDFiNUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    receiver: 'drt1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qmyujkw',
    value: BigInt('0'),
    functionName: 'swap_lkmoa_to_rewa',
    functionArgs: [
      '0ede64311b8d01b5',
      '',
    ],
    transfers: [
      {
        value: BigInt('45925073746530627023852'),
        properties: {
          collection: 'LKMOA-aab910',
          identifier: 'LKMOA-aab910-2fe3b0',
        },
      },
      {
        value: BigInt('1389278024872597502641297'),
        properties: {
          collection: 'LKMOA-aab910',
          identifier: 'LKMOA-aab910-3102ca',
        },
      },
    ],
    transferMessages: [],
  });
});

test('DCDT Transfer', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt1jvc6nyyl73q2yardw7dj8235h5zqaum4qyc8wlgs6aa26seysuvs7azy95',
    receiver: 'drt1flqg2zf3knya94lcupscdwmrud029mes8a85r202rvwpzjyk5tjqmhsw9z',
    data: 'RENEVFRyYW5zZmVyQDUwNGM0MTU0NDEyZDM5NjI2MTM2NjMzM0AwMTJhMDVmMjAw',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt1jvc6nyyl73q2yardw7dj8235h5zqaum4qyc8wlgs6aa26seysuvs7azy95',
    receiver: 'drt1flqg2zf3knya94lcupscdwmrud029mes8a85r202rvwpzjyk5tjqmhsw9z',
    value: BigInt('5000000000'),
    transfers: [
      {
        value: BigInt('5000000000'),
        properties: {
          identifier: 'PLATA-9ba6c3',
        },
      },
    ],
    transferMessages: [],
  });
});

test('MultiDCDTNFTTransfer fungible (with 00 nonce) + meta', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    receiver: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    data: 'TXVsdGlEQ0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEAwMkA0YzRiNGQ0ZjQxMmQ2MTYxNjIzOTMxMzBAMmZlM2IwQDA5Yjk5YTZkYjMwMDI3ZTRmM2VjQDU1NTM0NDQzMmQzMzM1MzA2MzM0NjVAMDBAMDEyNjMwZTlhMjlmMmY5MzgxNDQ5MUA3MDYxNzk1ZjZkNjU3NDYxNWY2MTZlNjQ1ZjY2NzU2ZTY3Njk2MjZjNjVAMGVkZTY0MzExYjhkMDFiNUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    receiver: 'drt1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qmyujkw',
    value: BigInt('0'),
    functionName: 'pay_meta_and_fungible',
    functionArgs: [
      '0ede64311b8d01b5',
      '',
    ],
    transfers: [
      {
        value: BigInt('45925073746530627023852'),
        properties: {
          collection: 'LKMOA-aab910',
          identifier: 'LKMOA-aab910-2fe3b0',
        },
      },
      {
        value: BigInt('1389278024872597502641297'),
        properties: {
          token: 'USDC-350c4e',
        },
      },
    ],
    transferMessages: [],
  });
});

test('MultiDCDTNFTTransfer fungibles (00 and missing nonce)', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    receiver: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    data: 'TXVsdGlEQ0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEAwMkA1MjQ5NDQ0NTJkMzAzNTYyMzE2MjYyQDAwQDA5Yjk5YTZkYjMwMDI3ZTRmM2VjQDU1NTM0NDQzMmQzMzM1MzA2MzM0NjVAQDAxMjYzMGU5YTI5ZjJmOTM4MTQ0OTE=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqmwzjqm',
    receiver: 'drt1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qmyujkw',
    value: BigInt('0'),
    transfers: [
      {
        value: BigInt('45925073746530627023852'),
        properties: {
          token: 'RIDE-05b1bb',
        },
      },
      {
        value: BigInt('1389278024872597502641297'),
        properties: {
          token: 'USDC-350c4e',
        },
      },
    ],
    transferMessages: [],
  });
});

test('DCDTTransfer with message', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt1pv3020g75r033shtfzkf9yaf8xx7d76qan94wkraxm4vvqankrtsq8a5pq',
    receiver: 'drt1athw37lnw4t4d7ax9t5x9l4hvfay3qfp0k4ldxgq2wv94ln6vuesa3rc3k',
    data: 'RENEVFRyYW5zZmVyQDRjNDE0ZTQ0MmQzNDMwNjYzMjM2NjZAMDI2NWYwYTQ3ZGQ0NGMwMDAwQGFhYWFhYUBiYg==',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt1pv3020g75r033shtfzkf9yaf8xx7d76qan94wkraxm4vvqankrtsq8a5pq',
    receiver: 'drt1athw37lnw4t4d7ax9t5x9l4hvfay3qfp0k4ldxgq2wv94ln6vuesa3rc3k',
    value: BigInt('44239040000000000000'),
    transfers: [
      {
        value: BigInt('44239040000000000000'),
        properties: {
          identifier: 'LAND-40f26f',
        },
      },
    ],
    transferMessages: [new Uint8Array(Buffer.from("aaaaaa")), new Uint8Array(Buffer.from("bb"))],
  });
});

test('DCDTNFTTransfer with message', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
    receiver: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
    data: 'RENEVE5GVFRyYW5zZmVyQDRkNGU1OTJkMzM2MTMxNjM2NTY2QDAxQDAxQDgwNDlkNjM5ZTVhNjk4MGQxY2QyMzkyYWJjY2U0MTAyOWNkYTc0YTE1NjM1MjNhMjAyZjA5NjQxY2MyNjE4ZjhAYWFhYWFhYWFhYWFhYWFhYWFhYWFhYUBhYQ==',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
    receiver: 'drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c',
    value: BigInt('1'),
    transfers: [
      {
        value: BigInt('1'),
        properties: {
          collection: 'MNY-3a1cef',
          identifier: 'MNY-3a1cef-01',
        },
      },
    ],
    transferMessages: [new Uint8Array(Buffer.from("aaaaaaaaaaaaaaaaaaaaaa")), new Uint8Array(Buffer.from("aa"))],
  });
});

test('MultiDCDTNFTTransfer with message', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
    receiver: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
    data: 'TXVsdGlEQ0RUTkZUVHJhbnNmZXJAODA0OWQ2MzllNWE2OTgwZDFjZDIzOTJhYmNjZTQxMDI5Y2RhNzRhMTU2MzUyM2EyMDJmMDk2NDFjYzI2MThmOEAwMUA0ZDRlNTkyZDMzNjEzMTYzNjU2NkAwMkAwMUBhYWFhYWFhYUBhYQ==',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'drt1qyu5wthldzr8wx5c9ucg8kjagg0jfs53s8nr3zpz3hypefsdd8ssey5egf',
    receiver: 'drt1spyavw0956vq68xj8y4tenjpq2wd5a9p2c6j8gsz7ztyrnpxrruqlqde3c',
    value: BigInt('0'),
    transfers: [
      {
        value: BigInt('1'),
        properties: {
          collection: 'MNY-3a1cef',
          identifier: 'MNY-3a1cef-02',
        },
      },
    ],
    transferMessages: [new Uint8Array(Buffer.from("aaaaaaaa")), new Uint8Array(Buffer.from("aa"))],
  });
});
