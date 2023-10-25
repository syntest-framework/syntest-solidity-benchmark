const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressg9JNoM6 = accounts[2]
		const addressQTKQ2ai = accounts[0]
		const SpiritCointCtbCY = await SpiritCoin.new(addressg9JNoM6, addressQTKQ2ai, {from: accounts[4]});
		const uintwE1l7b = BigInt("1809")
		const addressmHEs601 = accounts[4]
		const addressG9IPWl = "0x0000000000000000000000000000000000000001"
		const uintd1w2pi = BigInt("1070")
		const addresss1WCXds = accounts[4]
		const uinto4d3ODZ = BigInt("1649")
		const addressGQR3kn = accounts[3]
		const uintxhI2wb = BigInt("1523")
		const addressgWBrQ9T = accounts[1]
		const boolSGKnTQ = await SpiritCointCtbCY.transferFrom.call(addressG9IPWl, addressmHEs601, uintwE1l7b, {from: accounts[3]});
		const addressVk2Vnel = await SpiritCointCtbCY.mint.call(addresss1WCXds, uintd1w2pi, {from: accounts[1]});
		const addressue4dTJ = await SpiritCointCtbCY.mint.call(addressGQR3kn, uinto4d3ODZ, {from: accounts[3]});
		const addressc0yKMW0 = await SpiritCointCtbCY.mint.call(addressgWBrQ9T, uintxhI2wb, {from: accounts[2]});

		await expect(SpiritCointCtbCY.transferFrom.call(addressG9IPWl, addressmHEs601, uintwE1l7b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressAHLleVz = accounts[5]
		const addressqZMuDoL = accounts[5]
		const SpiritCoinUxwPWhL = await SpiritCoin.new(addressAHLleVz, addressqZMuDoL, {from: accounts[1]});
		const uintuJ65dst = BigInt("1704")
		const addresstutuDr = accounts[3]
		const uintI9Hb1sF = BigInt("1324")
		const addressxDTvxSF = accounts[4]
		const addressZPsP9k9 = accounts[4]
		const addressuO837tN = "0x0000000000000000000000000000000000000001"
		const addressrbsRHVJ = accounts[0]
		const addresseUN1Auf = accounts[0]
		const boolyL5zA7w = await SpiritCoinUxwPWhL.transfer.call(addresstutuDr, uintuJ65dst, {from: "0x0000000000000000000000000000000000000001"});
		const booltkRBche = await SpiritCoinUxwPWhL.approve.call(addressxDTvxSF, uintI9Hb1sF, {from: accounts[0]});
		const uintmxZtIaR = await SpiritCoinUxwPWhL.allowance.call(addressuO837tN, addressZPsP9k9, {from: accounts[1]});
		const uintKp8Hwwu = await SpiritCoinUxwPWhL.allowance.call(addresseUN1Auf, addressrbsRHVJ, {from: accounts[4]});

		await expect(SpiritCoinUxwPWhL.transfer.call(addresstutuDr, uintuJ65dst, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressk9nZNdQ = accounts[1]
		const addressBDJTWss = accounts[5]
		const SpiritCoinLxLIpd = await SpiritCoin.new(addressk9nZNdQ, addressBDJTWss, {from: "0x0000000000000000000000000000000000000001"});
		const addressEvMjGtO = "0x0000000000000000000000000000000000000001"
		const addressRdlOUR2 = "0x0000000000000000000000000000000000000001"
		const uintpwMJx3 = BigInt("2022")
		const addresspPno8U3 = accounts[1]
		const uinteQuOnMc = await SpiritCoinLxLIpd.allowance.call(addressRdlOUR2, addressEvMjGtO, {from: accounts[4]});
		const addressyB72iiM = await SpiritCoinLxLIpd.mint.call(addresspPno8U3, uintpwMJx3, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SpiritCoin', async () => {
		const addressVBWF3cE = accounts[1]
		const address2xL7nV = accounts[3]
		const SpiritCoinGwzVt6 = await SpiritCoin.new(addressVBWF3cE, address2xL7nV, {from: accounts[0]});
		const addressUkc0byD = accounts[4]
		const addressvyGqMms = accounts[2]
		const addressDNB9AzH = accounts[0]
		const uintoPKYNFZ = await SpiritCoinGwzVt6.allowance.call(addressvyGqMms, addressUkc0byD, {from: accounts[2]});
		const addressi8OFIUH = await SpiritCoinGwzVt6.setMinter.call(addressDNB9AzH, {from: accounts[0]});

		assert.equal(uintoPKYNFZ, BigInt("0"))
		await expect(SpiritCoinGwzVt6.setMinter.call(addressDNB9AzH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressl7k6Y6I = accounts[4]
		const addresszGEs8Yg = accounts[1]
		const SpiritCoinZegLJ3k = await SpiritCoin.new(addressl7k6Y6I, addresszGEs8Yg, {from: accounts[2]});
		const uintcje26Y = BigInt("1435")
		const addressqtRBreR = accounts[3]
		const uint6JE5gC = BigInt("756")
		const addressX3Oj83s = accounts[2]
		const uintlsopOaI = BigInt("1900")
		const addressCTYPRiB = accounts[4]
		const addresstKgfkMk = accounts[0]
		const uintbJgWBnt = BigInt("1012")
		const addressZl1LT9o = "0x0000000000000000000000000000000000000001"
		const addressaSY3IG = "0x0000000000000000000000000000000000000001"
		const uintAfZaFL = BigInt("791")
		const addresssGvQX8q = accounts[2]
		const boolP1GlLXT = await SpiritCoinZegLJ3k.approve.call(addressqtRBreR, uintcje26Y, {from: accounts[5]});
		const boolp78iLPy = await SpiritCoinZegLJ3k.transfer.call(addressX3Oj83s, uint6JE5gC, {from: accounts[3]});
		const boolEWMh0Rr = await SpiritCoinZegLJ3k.approve.call(addressCTYPRiB, uintlsopOaI, {from: accounts[4]});
		const uintyYI27u5 = await SpiritCoinZegLJ3k.balanceOf.call(addresstKgfkMk, {from: accounts[3]});
		const booliHy44rT = await SpiritCoinZegLJ3k.transferFrom.call(addressaSY3IG, addressZl1LT9o, uintbJgWBnt, {from: accounts[4]});
		const boolVBY94R6 = await SpiritCoinZegLJ3k.transfer.call(addresssGvQX8q, uintAfZaFL, {from: accounts[2]});

		assert.equal(boolP1GlLXT, true)
		await expect(SpiritCoinZegLJ3k.transfer.call(addressX3Oj83s, uint6JE5gC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressgmUxLRQ = accounts[3]
		const addressf3Gmtsj = accounts[2]
		const SpiritCoinoAs6Gr = await SpiritCoin.new(addressgmUxLRQ, addressf3Gmtsj, {from: accounts[0]});
		const addressYdUeVtf = accounts[0]
		const address0oH1N0 = accounts[2]
		const addressvwBdZk = accounts[5]
		const uintKEo0V5C = BigInt("507")
		const addresso6KHPU = accounts[1]
		const addressprREAJo = accounts[2]
		const addressUDbP64d = "0x0000000000000000000000000000000000000001"
		const addressv6Hqe9r = "0x0000000000000000000000000000000000000001"
		const addresscR07051 = accounts[0]
		const uintM8FKC1o = await SpiritCoinoAs6Gr.allowance.call(address0oH1N0, addressYdUeVtf, {from: accounts[2]});
		const uintAbYjCmG = await SpiritCoinoAs6Gr.balanceOf.call(addressvwBdZk, {from: accounts[3]});
		const boollGQPUJO = await SpiritCoinoAs6Gr.transfer.call(addresso6KHPU, uintKEo0V5C, {from: accounts[0]});
		const uintCIoK9VL = await SpiritCoinoAs6Gr.allowance.call(addressUDbP64d, addressprREAJo, {from: accounts[2]});
		const uintKWkL4w8 = await SpiritCoinoAs6Gr.allowance.call(addresscR07051, addressv6Hqe9r, {from: accounts[3]});

		assert.equal(uintAbYjCmG, BigInt("0"))
		assert.equal(uintM8FKC1o, BigInt("0"))
		await expect(SpiritCoinoAs6Gr.transfer.call(addresso6KHPU, uintKEo0V5C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressXnMeaQR = accounts[4]
		const addressTLtKjUM = accounts[1]
		const SpiritCoinX2CNkL = await SpiritCoin.new(addressXnMeaQR, addressTLtKjUM, {from: accounts[1]});
		const addressVq6bvcu = accounts[0]
		const addressxMDnXrD = accounts[3]
		const addressrZo4Scl = "0x0000000000000000000000000000000000000001"
		const addressYeM1pD4 = accounts[3]
		const addressfsTd6Am = accounts[0]
		const uintnSoqREC = BigInt("1784")
		const addressnnB9Nao = accounts[5]
		const uintp43Oh3i = await SpiritCoinX2CNkL.balanceOf.call(addressVq6bvcu, {from: accounts[3]});
		const uintFrr8DoP = await SpiritCoinX2CNkL.allowance.call(addressrZo4Scl, addressxMDnXrD, {from: accounts[5]});
		const uintYrbUmmu = await SpiritCoinX2CNkL.allowance.call(addressfsTd6Am, addressYeM1pD4, {from: accounts[1]});
		const addresstP25rZ = await SpiritCoinX2CNkL.mint.call(addressnnB9Nao, uintnSoqREC, {from: accounts[1]});

		assert.equal(uintFrr8DoP, BigInt("0"))
		assert.equal(uintYrbUmmu, BigInt("0"))
		assert.equal(uintp43Oh3i, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressSUXKAMW = accounts[3]
		const addressREITMzX = accounts[5]
		const SpiritCoins5431PS = await SpiritCoin.new(addressSUXKAMW, addressREITMzX, {from: accounts[1]});
		const uintI2nb0bI = BigInt("727")
		const addressCEYjROK = accounts[4]
		const uint1qSYAs = BigInt("897")
		const addresstv2XrO = accounts[0]
		const addressuGB5oht = accounts[0]
		const addressW83Dky7 = accounts[4]
		const addressrDbXOJo = accounts[5]
		const addressFZ4v7A = accounts[1]
		const uintoNQ8P7X = BigInt("1199")
		const addressuwkkxnB = accounts[4]
		const boolzBZEe6g = await SpiritCoins5431PS.approve.call(addressCEYjROK, uintI2nb0bI, {from: accounts[4]});
		const addressDHi6kTo = await SpiritCoins5431PS.mint.call(addresstv2XrO, uint1qSYAs, {from: accounts[2]});
		const uintiIgZTkZ = await SpiritCoins5431PS.allowance.call(addressW83Dky7, addressuGB5oht, {from: accounts[0]});
		const uintvXphYPS = await SpiritCoins5431PS.allowance.call(addressFZ4v7A, addressrDbXOJo, {from: accounts[1]});
		const boolg23bQ1L = await SpiritCoins5431PS.transfer.call(addressuwkkxnB, uintoNQ8P7X, {from: accounts[0]});

		assert.equal(boolzBZEe6g, true)
		await expect(SpiritCoins5431PS.mint.call(addresstv2XrO, uint1qSYAs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresski5DUVt = accounts[1]
		const addressC83Wjx = accounts[3]
		const SpiritCoinGwzVt6 = await SpiritCoin.new(addresski5DUVt, addressC83Wjx, {from: accounts[0]});
		const addressdEaufy0 = accounts[4]
		const addressPBxzpbl = accounts[3]
		const uintO73JlWb = BigInt("250")
		const addressyEBufoc = accounts[4]
		const addressxRkywP = accounts[0]
		const uintoPKYNFZ = await SpiritCoinGwzVt6.allowance.call(addressPBxzpbl, addressdEaufy0, {from: accounts[2]});
		const boolwRIkzNJ = await SpiritCoinGwzVt6.transfer.call(addressyEBufoc, uintO73JlWb, {from: accounts[1]});
		const addressi8OFIUH = await SpiritCoinGwzVt6.setMinter.call(addressxRkywP, {from: accounts[0]});

		assert.equal(boolwRIkzNJ, true)
		assert.equal(uintoPKYNFZ, BigInt("0"))
		await expect(SpiritCoinGwzVt6.setMinter.call(addressxRkywP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressyZjmAij = accounts[0]
		const addressgF1S2B = accounts[4]
		const SpiritCoinwUoUJW = await SpiritCoin.new(addressyZjmAij, addressgF1S2B, {from: accounts[5]});
		const addressX6i8vhP = accounts[0]
		const addressOhrUzye = accounts[3]
		const addresspVwYCn2 = accounts[4]
		const uintWFR9eqB = BigInt("1032")
		const addressJrFnPNn = accounts[3]
		const uintYzgsLov = await SpiritCoinwUoUJW.allowance.call(addressOhrUzye, addressX6i8vhP, {from: accounts[3]});
		const addresso5FG14E = await SpiritCoinwUoUJW.setMinter.call(addresspVwYCn2, {from: accounts[4]});
		const boolQ5mZPNH = await SpiritCoinwUoUJW.transfer.call(addressJrFnPNn, uintWFR9eqB, {from: accounts[4]});

		assert.equal(uintYzgsLov, BigInt("0"))
		await expect(SpiritCoinwUoUJW.transfer.call(addressJrFnPNn, uintWFR9eqB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})