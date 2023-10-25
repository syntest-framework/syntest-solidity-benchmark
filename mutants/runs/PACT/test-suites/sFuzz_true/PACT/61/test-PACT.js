const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTMk8oLNL = await PACT.new({from: accounts[4]});
		const addressxGD3ppw = accounts[3]
		const addressudITklm = accounts[2]
		const uintagLpov0 = BigInt("917")
		const addressHz5HXoK = accounts[2]
		const addressZp9sGg = accounts[4]
		const uintFjCv6Py = BigInt("1495")
		const addressak0wSX2 = accounts[3]
		const addressLLRz7OG = accounts[3]
		const boolkBftLoW = await PACTMk8oLNL.setupRewards.call(addressxGD3ppw, {from: "0x0000000000000000000000000000000000000001"});
		const boolILZ3gJ1 = await PACTMk8oLNL.setupRewards.call(addressudITklm, {from: accounts[3]});
		const booleC9apxh = await PACTMk8oLNL.transferFrom.call(addressZp9sGg, addressHz5HXoK, uintagLpov0, {from: accounts[0]});
		const boolMfQkcrT = await PACTMk8oLNL.approve.call(addressak0wSX2, uintFjCv6Py, {from: accounts[3]});
		const boolh1w9mEx = await PACTMk8oLNL.setupBasePool.call(addressLLRz7OG, {from: accounts[0]});

		await expect(PACTMk8oLNL.setupRewards.call(addressxGD3ppw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTwjYE9d3 = await PACT.new({from: accounts[2]});
		const uintddGc1DH = BigInt("765")
		const addresslNHNqYJ = "0x0000000000000000000000000000000000000001"
		const addressQX1ls1C = accounts[4]
		const addressp1F96m2 = accounts[3]
		const uint8DTmtzAw = await PACTwjYE9d3.decimals.call({from: accounts[3]});
		const booluvPNAEh = await PACTwjYE9d3.transferFrom.call(addressQX1ls1C, addresslNHNqYJ, uintddGc1DH, {from: accounts[2]});
		const uintpiDAVLz = await PACTwjYE9d3.totalSupply.call({from: accounts[3]});
		const boolIeICo1v = await PACTwjYE9d3.setupTeam.call(addressp1F96m2, {from: accounts[4]});
		const uintqU8fJlM = await PACTwjYE9d3.totalSupply.call({from: accounts[5]});

		assert.equal(uint8DTmtzAw, BigInt("18"))
		await expect(PACTwjYE9d3.transferFrom.call(addressQX1ls1C, addresslNHNqYJ, uintddGc1DH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTovvtXr7 = await PACT.new({from: accounts[1]});
		const addressulhRCHf = accounts[4]
		const addressONzxdo = accounts[4]
		const uintiLWlT5 = BigInt("1259")
		const addressQtYOnc = accounts[3]
		const uintSfnLxPp = BigInt("2042")
		const addressfmTp7mv = accounts[4]
		const uintVx88fe9 = await PACTovvtXr7.allowance.call(addressONzxdo, addressulhRCHf, {from: accounts[3]});
		const boolTyp8KN5 = await PACTovvtXr7.transfer.call(addressQtYOnc, uintiLWlT5, {from: accounts[2]});
		const uintEOcf0Zf = await PACTovvtXr7.totalSupply.call({from: accounts[0]});
		const boolcbeC4fm = await PACTovvtXr7.transfer.call(addressfmTp7mv, uintSfnLxPp, {from: accounts[3]});

		assert.equal(uintVx88fe9, BigInt("0"))
		await expect(PACTovvtXr7.transfer.call(addressQtYOnc, uintiLWlT5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDST1F0k = await PACT.new({from: accounts[1]});
		const uint8gFSRhuk = await PACTDST1F0k.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringxgVSpn7 = await PACTDST1F0k.name.call({from: accounts[4]});

		assert.equal(stringxgVSpn7, "P2PB2B community token")
		assert.equal(uint8gFSRhuk, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTsPhNSi5 = await PACT.new({from: accounts[4]});
		const addressLVF5BCy = accounts[3]
		const addressbzYgdmU = accounts[2]
		const uintQjuRRnO = await PACTsPhNSi5.allowance.call(addressbzYgdmU, addressLVF5BCy, {from: accounts[1]});
		const uinteGZOb3 = await PACTsPhNSi5.totalSupply.call({from: accounts[3]});

		assert.equal(uintQjuRRnO, BigInt("0"))
		assert.equal(uinteGZOb3, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTreUEb8D = await PACT.new({from: accounts[3]});
		const addressilXF28M = accounts[0]
		const addresst3HHi6J = "0x0000000000000000000000000000000000000001"
		const boolyDVuzN1 = await PACTreUEb8D.setupTeam.call(addressilXF28M, {from: accounts[0]});
		const boolVLEkc5f = await PACTreUEb8D.setupBasePool.call(addresst3HHi6J, {from: accounts[3]});

		await expect(PACTreUEb8D.setupTeam.call(addressilXF28M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTCwyOkVa = await PACT.new({from: accounts[3]});
		const addressHnflg7f = accounts[5]
		const addressH0fTQmV = accounts[2]
		const uintIgMNZE = BigInt("220")
		const addressrIc51rI = accounts[1]
		const addressOFMuN5y = accounts[1]
		const boolLmSKuBi = await PACTCwyOkVa.setupBasePool.call(addressHnflg7f, {from: accounts[5]});
		const boolymTf7TD = await PACTCwyOkVa.setupReserve.call(addressH0fTQmV, {from: accounts[3]});
		const boolETNz5AV = await PACTCwyOkVa.burn.call(addressrIc51rI, uintIgMNZE, {from: accounts[2]});
		const stringwFuZhew = await PACTCwyOkVa.name.call({from: accounts[0]});
		const boolS8bkkKO = await PACTCwyOkVa.setupFarming.call(addressOFMuN5y, {from: accounts[0]});

		await expect(PACTCwyOkVa.setupBasePool.call(addressHnflg7f, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTG4I83e8 = await PACT.new({from: accounts[4]});
		const uintWg5XK6W = BigInt("1886")
		const addressI0Qo9Jo = accounts[0]
		const addressbRrPBfG = accounts[3]
		const uint8a1MK2B5 = await PACTG4I83e8.decimals.call({from: accounts[2]});
		const booloFfGXsx = await PACTG4I83e8.approve.call(addressI0Qo9Jo, uintWg5XK6W, {from: accounts[3]});
		const uint8hIhN1RB = await PACTG4I83e8.decimals.call({from: accounts[3]});
		const stringcrknU2I = await PACTG4I83e8.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolYI1sUK = await PACTG4I83e8.setupBasePool.call(addressbRrPBfG, {from: accounts[0]});

		assert.equal(booloFfGXsx, true)
		assert.equal(stringcrknU2I, "P2PB2B community token")
		assert.equal(uint8a1MK2B5, BigInt("18"))
		assert.equal(uint8hIhN1RB, BigInt("18"))
		await expect(PACTG4I83e8.setupBasePool.call(addressbRrPBfG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTeyXM05g = await PACT.new({from: accounts[3]});
		const addresstAWaeZf = accounts[2]
		const addressgNyJMzd = accounts[3]
		const addressxQl9OGT = accounts[3]
		const uintKXhx44 = await PACTeyXM05g.allowance.call(addressgNyJMzd, addresstAWaeZf, {from: accounts[3]});
		const boolaBj6JmX = await PACTeyXM05g.setupReserve.call(addressxQl9OGT, {from: accounts[0]});
		const uint8nMdnPpZ = await PACTeyXM05g.decimals.call({from: accounts[1]});

		assert.equal(uintKXhx44, BigInt("0"))
		await expect(PACTeyXM05g.setupReserve.call(addressxQl9OGT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDST1F0k = await PACT.new({from: accounts[1]});
		const uint8gFSRhuk = await PACTDST1F0k.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringtSEF9A = await PACTDST1F0k.symbol.call({from: accounts[1]});
		const stringxgVSpn7 = await PACTDST1F0k.name.call({from: accounts[4]});

		assert.equal(stringtSEF9A, "PACT")
		assert.equal(stringxgVSpn7, "P2PB2B community token")
		assert.equal(uint8gFSRhuk, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACT1db9tv = await PACT.new({from: accounts[2]});
		const uintHg7Z4iD = BigInt("1668")
		const addressU7IsTCQ = accounts[4]
		const addresstkl6Jks = accounts[1]
		const addressRPrnBM6 = accounts[1]
		const addressEhfj4Di = accounts[5]
		const stringct4flIQ = await PACT1db9tv.name.call({from: accounts[4]});
		const booliqT9fEU = await PACT1db9tv.burn.call(addressU7IsTCQ, uintHg7Z4iD, {from: accounts[1]});
		const uintICtePzk = await PACT1db9tv.allowance.call(addressRPrnBM6, addresstkl6Jks, {from: accounts[0]});
		const boolcCDS29 = await PACT1db9tv.setupTeam.call(addressEhfj4Di, {from: accounts[2]});

		assert.equal(stringct4flIQ, "P2PB2B community token")
		await expect(PACT1db9tv.burn.call(addressU7IsTCQ, uintHg7Z4iD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTeyXM05g = await PACT.new({from: accounts[3]});
		const addressynxDACK = accounts[0]
		const addressgRfJt6Y = accounts[2]
		const addressbuiKHiK = accounts[3]
		const addressURM9qbI = accounts[3]
		const uintwnaHi6P = await PACTeyXM05g.balanceOf.call(addressynxDACK, {from: accounts[4]});
		const uintKXhx44 = await PACTeyXM05g.allowance.call(addressbuiKHiK, addressgRfJt6Y, {from: accounts[3]});
		const boolaBj6JmX = await PACTeyXM05g.setupReserve.call(addressURM9qbI, {from: accounts[0]});
		const uint8nMdnPpZ = await PACTeyXM05g.decimals.call({from: accounts[1]});

		assert.equal(uintKXhx44, BigInt("0"))
		assert.equal(uintwnaHi6P, BigInt("0"))
		await expect(PACTeyXM05g.setupReserve.call(addressURM9qbI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTX9cjuB = await PACT.new({from: accounts[4]});
		const addressSQwrLpt = accounts[3]
		const addressmeg32cZ = accounts[4]
		const addressks5o2m0 = "0x0000000000000000000000000000000000000001"
		const addressl6Lsdb6 = accounts[0]
		const booliOHY8vG = await PACTX9cjuB.setupFarming.call(addressSQwrLpt, {from: "0x0000000000000000000000000000000000000001"});
		const uintarP243K = await PACTX9cjuB.totalSupply.call({from: accounts[3]});
		const booltkqEUFx = await PACTX9cjuB.setupFarming.call(addressmeg32cZ, {from: accounts[0]});
		const uintlkIFF3L = await PACTX9cjuB.allowance.call(addressl6Lsdb6, addressks5o2m0, {from: accounts[0]});
		const stringsHq0csO = await PACTX9cjuB.symbol.call({from: accounts[1]});

		await expect(PACTX9cjuB.setupFarming.call(addressSQwrLpt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTX08EGf8 = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBntdzAc = accounts[1]
		const addressvpbl2T6 = accounts[3]
		const addressDsQTshY = accounts[2]
		const uintMcRnT5z = BigInt("1744")
		const addressa5uq0me = accounts[4]
		const addressi8rEcf = accounts[1]
		const boolvXpsisz = await PACTX08EGf8.setupReserve.call(addressBntdzAc, {from: accounts[2]});
		const uintaZmPgJE = await PACTX08EGf8.allowance.call(addressDsQTshY, addressvpbl2T6, {from: accounts[4]});
		const boolFBetIrF = await PACTX08EGf8.approve.call(addressa5uq0me, uintMcRnT5z, {from: accounts[5]});
		const uinttlRDEBj = await PACTX08EGf8.balanceOf.call(addressi8rEcf, {from: accounts[4]});
	});
})