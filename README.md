# JSPM fails to install NPM package aliases when the `nodemodules` provider is used

Seems like the [default provider works fine](https://jspm.org/sandbox#H4sIAAAAAAAAA41VYW/bNhD9KzetGCRMppLGQAdbNgakKbYhbdomGTBMHUBLZ4sORWoi5cQo8t93FCVHNoptnyjevbvje7yjvgZCFfjESlvJYBak3729ubz74+MVOMMyU6lbQXK1WWQBqiwgm7MiL9yXTSu0HPKSNwYtQe7v3k1+ygJIRl7FKyTXTuBjrRtL3lwri8rhH0Vhy0WBO5HjpNvEIJSwgsuJybnExTk7e8lnhZW43H5qsdnDD6tWyjl8aAusDbzFSps08Qh3SIKbvBG1BdPkVEpUrnrFa7Y1xCNNvHc5Rtp97Y5a6aKVSCAfA1nA6zoL5qOYNBk0UOlKF3ufpny9HB8HwtTUXIEoKGmuW0Xkl2eUhYzLiFK89mGt9JDCBXmNLZmlWP7eYprQ+mL5jDy3J7ZrcWp5JzW3Qm3g/tcTT0v33ZhcN6eJpS64KU+MXuqDMU3ariuSgbLTwXdKEPettDXUSL1w279d+AWsG12Riv2WlMzUEWJ6jJh2iExRnxgLryRueL6HxZCOKX2p1VqK3Ia2aTGaH6AH0PRboEy9CrPg+/4mImbxyYZ9eufo9IclSOG8EtXGltGcmBm7l8hy46g5oqNWIkuSwF0pDKyFRKCVt1ZPNqiw4RYLWO0dMVNX1NnGcimpn3UDl7aRP96CVvDb7cf3cMtVsdJPLFOUrub5A98gpSc3Dd6Tq0edATQ11Pm1FspSnQbBNjynGlZ3VSu6dJoa6SB1K6k82BKBOhLpbhSJSIeuqS8M1QnpGxZL+JopAK8fWe4bSSIWOm8rKsbytmlove36ntEkzV/QDRotd0hwL4hx2W5WW8wtc/d5RYcVaMLehP22B0eMqoXhnw8x7L5ELtR9KnyE+8/X4S7uDxOxssH1lyjqCh/O5aaPERfidVkKWQxFuDFio8KX8zdIKlxJdDu6Yz/AdL2x5w3dzM9g9D5MTCmqLIi9Wyi6x1/u3l/P6J5uPjBDJNRGrPdhHw8D+9kgiBOWDSzjAUUzVyOB/lsgF+7R39BoEOjhWKD4UHwXkVi+6HO3PnfauW9/5IEq9dNsEKF/4ZwOLBnmOAu68NgH+RMdxbBktIXxgLtEpbW1mSXJhjPX/UzoRNXVzGN+vmBv2HlSCGMTb+kKxqe5pv8n15SdsbMu18Q/3UNKvztQITIdI6fGvHuyxoNGk9zr4/5Yvm6nSi/Ajt5NoZV3nLuSB5frIW8ffh294zC5Y9X+XefDsIoTtY/EHbH/62IoZ09UG4OmfRXiTsyf/wF2b24b+QcAAA==), though.

## Steps to reproduce

1. Install dependencies with `npm install`.
1. In the terminal, run `npm run serve` to start the development server.
1. Even though the server will spin off, in the terminal, you'll see the “Install Error:  JspmError: Cannot find package jquery in node_modules...” error.
1. Press `O` to open the app in your default browser. You will see a page with the “List (0)” (instead of “List (7)”) heading (with some errors in the console).
1. In the terminal, stop the development server by pressing `Q` or `Ctrl+C`.
1. Pay attention that there's no `importmap.js` file in the root.
