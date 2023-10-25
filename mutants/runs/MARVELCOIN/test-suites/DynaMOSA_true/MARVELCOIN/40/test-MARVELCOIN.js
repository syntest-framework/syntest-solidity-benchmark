const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintxkypQul = BigInt("734")
		const stringlmOOta = "ULtlOh3rDPDE2yBHEhz3MJClRXQEvQy77drX8ThioT"
		const stringAjAz2DE = "lLk1EUzpcm55rD4X8J0rB2tlzr"
		const MARVELCOINH1y9fnn = await MARVELCOIN.new(uintxkypQul, stringlmOOta, stringAjAz2DE, {from: accounts[5]});
		const uintj1fnUFa = BigInt("368")
		const addressf1hjVx = "0x0000000000000000000000000000000000000001"
		const uintmskSzEQ = BigInt("642")
		const addressUsFnCJW = accounts[1]
		const byteafrCUK2 = "0x0c070404011f1d"
		const uintmmuz9Ke = BigInt("1335")
		const addressdJOuQt = accounts[0]
		const bytey2R5XCB = "0x1212020d0e010a120b0a1412170409070e1016"
		const uinteFxt3d = BigInt("1701")
		const addresssgDqOD2 = accounts[3]
		const booleoXCrzd = await MARVELCOINH1y9fnn.approve.call(addressf1hjVx, uintj1fnUFa, {from: accounts[4]});
		const boolBWSd6f = await MARVELCOINH1y9fnn.approve.call(addressUsFnCJW, uintmskSzEQ, {from: accounts[0]});
		const boolqv9aJjf = await MARVELCOINH1y9fnn.approveAndCall.call(addressdJOuQt, uintmmuz9Ke, byteafrCUK2, {from: accounts[3]});
		const boolFt65tCd = await MARVELCOINH1y9fnn.approveAndCall.call(addresssgDqOD2, uinteFxt3d, bytey2R5XCB, {from: accounts[4]});

		assert.equal(boolBWSd6f, true)
		assert.equal(booleoXCrzd, true)
		await expect(MARVELCOINH1y9fnn.approveAndCall.call(addressdJOuQt, uintmmuz9Ke, byteafrCUK2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintPFU0kMQ = BigInt("162")
		const stringEg7b2JT = "vlupiRaVqoUHcgMKXQpPAWT9xpphh3Qyz8XmVYVvOD8QkNjHdUvID5VYm4jGvBCoSYAHuFLYBN5RKgxtWyXDofPEA"
		const stringbFn0due = "1TvBYcNd9bPVzsYG6EWvWmRHCCVnJWyPSBnF8FBdrEPORvuqVn2q2Gpx2l8uheQIi8Ep1pQ3cSmGhTkLT"
		const MARVELCOINTw6Gyn7 = await MARVELCOIN.new(uintPFU0kMQ, stringEg7b2JT, stringbFn0due, {from: accounts[1]});
		const uintg3KmFq9 = BigInt("738")
		const addresscJTup1J = accounts[4]
		const uintQChz5J4 = BigInt("1474")
		const addressQinnuDs = accounts[0]
		const uintqtTegp6 = BigInt("1352")
		const addressOKrQdc = accounts[4]
		const addressLtCDdgh = accounts[4]
		const booliHJJPs2 = await MARVELCOINTw6Gyn7.transfer.call(addresscJTup1J, uintg3KmFq9, {from: accounts[4]});
		const boolAZBt6Pz = await MARVELCOINTw6Gyn7.approve.call(addressQinnuDs, uintQChz5J4, {from: accounts[2]});
		const booluZ9gWh6 = await MARVELCOINTw6Gyn7.transferFrom.call(addressLtCDdgh, addressOKrQdc, uintqtTegp6, {from: accounts[2]});

		await expect(MARVELCOINTw6Gyn7.transfer.call(addresscJTup1J, uintg3KmFq9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintambxNM = BigInt("1283")
		const stringHmnLsLo = "GAPEd37KjCx4FKlhGQQ8yPrlN0ryPvrnjSfNgNH8VQJeN3IITV1AiDqmC"
		const stringbvAR9Uv = "lkwcqirrp7z5GalY5cQnmdKLTpAQVIuGEIg7yo1lDBuqGzyF629qW"
		const MARVELCOINa03qs4D = await MARVELCOIN.new(uintambxNM, stringHmnLsLo, stringbvAR9Uv, {from: accounts[0]});
		const uintEzFSDzz = BigInt("685")
		const uintVd4veG1 = BigInt("1278")
		const addresszUyvZab = accounts[1]
		const booldvxG3vs = await MARVELCOINa03qs4D.burn.call(uintEzFSDzz, {from: accounts[2]});
		const boolDB0ycV4 = await MARVELCOINa03qs4D.approve.call(addresszUyvZab, uintVd4veG1, {from: accounts[3]});

		await expect(MARVELCOINa03qs4D.burn.call(uintEzFSDzz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintDyi0lPx = BigInt("50")
		const stringDeduOAk = "hDwkiRKUj5fS5Kp89Uj1eEFrsRwiApeQH2O4TBVSoJcY9YKCLQqnuxIVACir3HgmvboiRs4fqxTTsLCamcjIb8nSW2sRvS"
		const stringyh2KC6 = "CLqolM601WUZIqKXgQUyloZRJqLUkKrjPPLgrXXcFcpG3kNxPEViTOOx2JISNylNms3"
		const MARVELCOINywzqzOS = await MARVELCOIN.new(uintDyi0lPx, stringDeduOAk, stringyh2KC6, {from: accounts[1]});
		const uintrqrypRU = BigInt("967")
		const addressX88s7hi = accounts[5]
		const addressx0MYpNM = accounts[3]
		const uintsHLaKy0 = BigInt("1083")
		const addresssTlxI6 = accounts[3]
		const boolHjNCdUd = await MARVELCOINywzqzOS.transferFrom.call(addressx0MYpNM, addressX88s7hi, uintrqrypRU, {from: accounts[4]});
		const booliGQ1bRh = await MARVELCOINywzqzOS.approve.call(addresssTlxI6, uintsHLaKy0, {from: accounts[3]});

		await expect(MARVELCOINywzqzOS.transferFrom.call(addressx0MYpNM, addressX88s7hi, uintrqrypRU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uint74RrYy = BigInt("1618")
		const stringN9C2Gw1 = "7XX3"
		const stringZvgy5UW = "BH0SH1569PNJgahkU5UXAg7nDUPIuFjcyzRcpA4GHDj5oRn1TSfTuW9oQ5lP7mXOzK6vreesOOt5FjwvagDLYr7QU0GOJ7bSy"
		const MARVELCOINBO2398 = await MARVELCOIN.new(uint74RrYy, stringN9C2Gw1, stringZvgy5UW, {from: "0x0000000000000000000000000000000000000001"});
		const uintSTBAzbd = BigInt("1915")
		const addressluTHf1x = accounts[3]
		const addressALpZ2kQ = accounts[2]
		const uintoADahnf = BigInt("1393")
		const addressAWIW7uN = accounts[4]
		const uintNnUx4bo = BigInt("1937")
		const addressmiBbqUj = accounts[1]
		const uintoXZZYrJ = BigInt("113")
		const addressb5IYvh = accounts[4]
		const bytesZyW4T = "0x0d031a01061e1e0f150e13011d04010814"
		const uintxtSzqiW = BigInt("831")
		const addressQA7y9Y = accounts[2]
		const uintx4swpCI = BigInt("1811")
		const addressHZO65jF = accounts[1]
		const addressVzy3yAt = accounts[3]
		const boolPyW8hvU = await MARVELCOINBO2398.transferFrom.call(addressALpZ2kQ, addressluTHf1x, uintSTBAzbd, {from: accounts[1]});
		const boolXG1ED8K = await MARVELCOINBO2398.approve.call(addressAWIW7uN, uintoADahnf, {from: accounts[4]});
		const boolzO1njVz = await MARVELCOINBO2398.transfer.call(addressmiBbqUj, uintNnUx4bo, {from: accounts[4]});
		const booleWetr4M = await MARVELCOINBO2398.transfer.call(addressb5IYvh, uintoXZZYrJ, {from: accounts[2]});
		const boolYsFQg1E = await MARVELCOINBO2398.approveAndCall.call(addressQA7y9Y, uintxtSzqiW, bytesZyW4T, {from: accounts[0]});
		const boolX9ww6TS = await MARVELCOINBO2398.transferFrom.call(addressVzy3yAt, addressHZO65jF, uintx4swpCI, {from: accounts[1]});
	});

	it('test for MARVELCOIN', async () => {
		const uinty6kKj7z = BigInt("1283")
		const stringHmnLsLo = "GAPEd37KjCx4FKlhGQQ8yPrlN0ryPvrnjSfNgNH8VQJeN3IITV1AiDqmC"
		const stringbvAR9Uv = "lkwcqirrp7z5GalY5cQnmdKLTpAQVIuGEIg7yo1lDBuqGzyF629qW"
		const MARVELCOINa03qs4D = await MARVELCOIN.new(uinty6kKj7z, stringHmnLsLo, stringbvAR9Uv, {from: accounts[0]});
		const uintQak5gJZ = BigInt("1278")
		const addressaOw9oJv = accounts[2]
		const uint0mIu69 = BigInt("1597")
		const uintHcd1Eo4 = BigInt("887")
		const boolDB0ycV4 = await MARVELCOINa03qs4D.approve.call(addressaOw9oJv, uintQak5gJZ, {from: accounts[3]});
		const boolRIANRWr = await MARVELCOINa03qs4D.burn.call(uint0mIu69, {from: accounts[0]});
		const boolsVg6mgT = await MARVELCOINa03qs4D.burn.call(uintHcd1Eo4, {from: accounts[1]});

		assert.equal(boolDB0ycV4, true)
		assert.equal(boolRIANRWr, true)
		await expect(MARVELCOINa03qs4D.burn.call(uintHcd1Eo4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintzU6qCHE = BigInt("146")
		const stringWguYbDA = "hXityX2FAz5x9iwtUXumLaumW"
		const stringbMz3CCk = "SMO1XTXErbJSyrDmKOh2QEfkif55hsEfM6CnxYQUFRf9c4F3OWIi5cUSMiDf9wlBQjhbTEgTtHXb"
		const MARVELCOINPlDcVMo = await MARVELCOIN.new(uintzU6qCHE, stringWguYbDA, stringbMz3CCk, {from: accounts[5]});
		const uintPHQKtmc = BigInt("476")
		const addressjGnI7Bu = accounts[1]
		const uintqmdoazY = BigInt("999")
		const addressM9Oq28V = accounts[4]
		const uintLfIp1X0 = BigInt("320")
		const addressYpT3dbU = accounts[1]
		const uintO2KuCtr = BigInt("1696")
		const uintzPnXk7 = BigInt("1807")
		const uintX2OkwC1 = BigInt("885")
		const address1IGFCR = accounts[4]
		const boolvn219Y = await MARVELCOINPlDcVMo.transfer.call(addressjGnI7Bu, uintPHQKtmc, {from: accounts[5]});
		const booloin8ZoA = await MARVELCOINPlDcVMo.transfer.call(addressM9Oq28V, uintqmdoazY, {from: accounts[2]});
		const boolBN3RfeG = await MARVELCOINPlDcVMo.transfer.call(addressYpT3dbU, uintLfIp1X0, {from: accounts[5]});
		const boolIbHKUK2 = await MARVELCOINPlDcVMo.burn.call(uintO2KuCtr, {from: accounts[1]});
		const boolJpJxUO = await MARVELCOINPlDcVMo.burn.call(uintzPnXk7, {from: accounts[3]});
		const boolTFBsT2I = await MARVELCOINPlDcVMo.burnFrom.call(address1IGFCR, uintX2OkwC1, {from: accounts[4]});

		assert.equal(boolvn219Y, true)
		await expect(MARVELCOINPlDcVMo.transfer.call(addressM9Oq28V, uintqmdoazY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintm9s4HDt = BigInt("50")
		const stringDeduOAk = "hDwkiRKUj5fS5Kp89Uj1eEFrsRwiApeQH2O4TBVSoJcY9YKCLQqnuxIVACir3HgmvboiRs4fqxTTsLCamcjIb8nSW2sRvS"
		const stringyh2KC6 = "CLqolM601WUZIqKXgQUyloZRJqLUkKrjPPLgrXXcFcpG3kNxPEViTOOx2JISNylNms3"
		const MARVELCOINywzqzOS = await MARVELCOIN.new(uintm9s4HDt, stringDeduOAk, stringyh2KC6, {from: accounts[1]});
		const uintqX7Nrbv = BigInt("208")
		const addressGStzG1Z = accounts[2]
		const uintnfkZh0j = BigInt("987")
		const addressLjM8zX6 = accounts[5]
		const addresswsd7IEh = accounts[3]
		const uintiYFKOcf = BigInt("1083")
		const address3rYhAZ = accounts[3]
		const booln1tRCKA = await MARVELCOINywzqzOS.burnFrom.call(addressGStzG1Z, uintqX7Nrbv, {from: accounts[2]});
		const boolHjNCdUd = await MARVELCOINywzqzOS.transferFrom.call(addresswsd7IEh, addressLjM8zX6, uintnfkZh0j, {from: accounts[4]});
		const booliGQ1bRh = await MARVELCOINywzqzOS.approve.call(address3rYhAZ, uintiYFKOcf, {from: accounts[3]});

		await expect(MARVELCOINywzqzOS.burnFrom.call(addressGStzG1Z, uintqX7Nrbv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintCI3BmuY = BigInt("50")
		const stringDeduOAk = "hDwkiRKUj5fS5Kp89Uj1eEFrsRwiApeQH2O4TBVSoJcY9YKCLQqnuxIVACir3HgmvboiRs4fqxTTsLCamcjIb8nSW2sRvS"
		const stringyh2KC6 = "CLqolM601WUZIqKXgQUyloZRJqLUkKrjPPLgrXXcFcpG3kNxPEViTOOx2JISNylNms3"
		const MARVELCOINywzqzOS = await MARVELCOIN.new(uintCI3BmuY, stringDeduOAk, stringyh2KC6, {from: accounts[1]});
		const uinttlftISg = BigInt("683")
		const addressUSuCwkh = accounts[1]
		const uinttzaASo = BigInt("1603")
		const addresslLIADlK = accounts[4]
		const uintaJjV9s5 = BigInt("967")
		const addresssDsgpIz = accounts[5]
		const addresskUIvw9e = accounts[3]
		const boolQl2KKG7 = await MARVELCOINywzqzOS.burnFrom.call(addressUSuCwkh, uinttlftISg, {from: accounts[1]});
		const boolrfQ9GYk = await MARVELCOINywzqzOS.transfer.call(addresslLIADlK, uinttzaASo, {from: "0x0000000000000000000000000000000000000001"});
		const boolHjNCdUd = await MARVELCOINywzqzOS.transferFrom.call(addresskUIvw9e, addresssDsgpIz, uintaJjV9s5, {from: accounts[4]});

		await expect(MARVELCOINywzqzOS.burnFrom.call(addressUSuCwkh, uinttlftISg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})