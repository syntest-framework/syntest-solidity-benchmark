const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringUA8NG8U = "sCnHgNf871f3b7ElZf5eP6l6hnDz5hAXvzqc7J3JU9Di"
		const stringdaUufch = "UietUOK3DbgSwOWxjFsrXomCOwoivDe"
		const uintCUnSFWt = BigInt("184")
		const AntiBaseProtocolNiTdySQ = await AntiBaseProtocol.new(stringUA8NG8U, stringdaUufch, uintCUnSFWt, {from: accounts[4]});
		const uintXYHxFSD = BigInt("1913")
		await AntiBaseProtocolNiTdySQ.requestGas.call({from: accounts[2]});
		const addressGjzxGGP = await AntiBaseProtocolNiTdySQ.owner.call({from: accounts[4]});
		const uint256DL4iPF0 = await AntiBaseProtocolNiTdySQ.findBurnFee.call(uintXYHxFSD, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOPPPJ8l = await AntiBaseProtocol.new({from: accounts[3]});
		const addressOImtVaP = accounts[2]
		const uint256AeUwgC3 = await AntiBaseProtocolOPPPJ8l.balanceOf.call(addressOImtVaP, {from: accounts[3]});
		const stringHxEu0Ir = await AntiBaseProtocolOPPPJ8l.symbol.call({from: accounts[3]});
		const stringaF6qZDj = await AntiBaseProtocolOPPPJ8l.symbol.call({from: accounts[3]});

		assert.equal(stringHxEu0Ir, "ABASE")
		assert.equal(stringaF6qZDj, "ABASE")
		assert.equal(uint256AeUwgC3, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolTxKmJQ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintKJ3XFfP = BigInt("1409")
		const addressZXkuDYG = accounts[0]
		const addressgZMm7rk = await AntiBaseProtocolTxKmJQ.burnFrom.call(addressZXkuDYG, uintKJ3XFfP, {from: accounts[4]});
		await AntiBaseProtocolTxKmJQ.onlyOwner.call({from: accounts[4]});

		await expect(AntiBaseProtocolTxKmJQ.burnFrom.call(addressZXkuDYG, uintKJ3XFfP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqRRHJ5U = await AntiBaseProtocol.new({from: accounts[4]});
		const addressJyXci4B = accounts[3]
		const addressb03HzlI = accounts[0]
		const uintcmaOlWo = BigInt("1096")
		const uintm3mLYTk = BigInt("1278")
		const uint256tKvm5ig = await AntiBaseProtocolqRRHJ5U.allowance.call(addressb03HzlI, addressJyXci4B, {from: "0x0000000000000000000000000000000000000001"});
		const stringvDd6POz = await AntiBaseProtocolqRRHJ5U.symbol.call({from: accounts[0]});
		const uint256lmCLZvV = await AntiBaseProtocolqRRHJ5U.burn.call(uintcmaOlWo, {from: accounts[2]});
		const uint256SpBQpTp = await AntiBaseProtocolqRRHJ5U.burn.call(uintm3mLYTk, {from: accounts[3]});

		assert.equal(stringvDd6POz, "ABASE")
		assert.equal(uint256tKvm5ig, BigInt("0"))
		await expect(AntiBaseProtocolqRRHJ5U.burn.call(uintcmaOlWo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoltAjaXeR = await AntiBaseProtocol.new({from: accounts[4]});
		const uintW5bSm4B = BigInt("1211")
		const addressxaaXd5A = accounts[4]
		const uintM3veeBx = BigInt("1654")
		const uint256cYyo3Fl = await AntiBaseProtocoltAjaXeR.totalSupply.call({from: accounts[2]});
		const addresswinFIGg = await AntiBaseProtocoltAjaXeR.burnFrom.call(addressxaaXd5A, uintW5bSm4B, {from: accounts[2]});
		const stringKrmmF4U = await AntiBaseProtocoltAjaXeR.name.call({from: accounts[5]});
		const uint256beasXIu = await AntiBaseProtocoltAjaXeR.findRewardFee.call(uintM3veeBx, {from: accounts[0]});

		assert.equal(uint256cYyo3Fl, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocoltAjaXeR.burnFrom.call(addressxaaXd5A, uintW5bSm4B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolTxKmJQ = await AntiBaseProtocol.new({from: accounts[1]});
		await AntiBaseProtocolTxKmJQ.onlyOwner.call({from: accounts[4]});

		await expect(AntiBaseProtocolTxKmJQ.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnoeQWF5 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintSj1SaD = BigInt("805")
		const addressdtUO5ds = accounts[4]
		const addresskJa1omP = accounts[2]
		const uintdgm9pHk = BigInt("1388")
		const uintde1FEWa = BigInt("1375")
		const addressmI1PEy = accounts[0]
		const uint256ynIyFFH = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uintSj1SaD, {from: accounts[3]});
		const addressKuLaKQR = await AntiBaseProtocolnoeQWF5.transferOwnership.call(addressdtUO5ds, {from: accounts[1]});
		const addressqDcwvq4 = await AntiBaseProtocolnoeQWF5.transferOwnership.call(addresskJa1omP, {from: accounts[1]});
		const uint256NsESNOM = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uintdgm9pHk, {from: accounts[5]});
		const addressUisW6I = await AntiBaseProtocolnoeQWF5._burn.call(addressmI1PEy, uintde1FEWa, {from: accounts[1]});

		assert.equal(uint256ynIyFFH, BigInt("135"))
		await expect(AntiBaseProtocolnoeQWF5.transferOwnership.call(addressdtUO5ds, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOPPPJ8l = await AntiBaseProtocol.new({from: accounts[3]});
		const addressqsad7ZK = accounts[3]
		const uint256AeUwgC3 = await AntiBaseProtocolOPPPJ8l.balanceOf.call(addressqsad7ZK, {from: accounts[3]});
		const stringvzyNtJx = await AntiBaseProtocolOPPPJ8l.name.call({from: accounts[0]});
		const stringHxEu0Ir = await AntiBaseProtocolOPPPJ8l.symbol.call({from: accounts[3]});
		const stringaF6qZDj = await AntiBaseProtocolOPPPJ8l.symbol.call({from: accounts[3]});

		assert.equal(stringHxEu0Ir, "ABASE")
		assert.equal(stringaF6qZDj, "ABASE")
		assert.equal(stringvzyNtJx, "https://t.me/antibaseprotocol")
		assert.equal(uint256AeUwgC3, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOPPPJ8l = await AntiBaseProtocol.new({from: accounts[3]});
		const addressBN0DC1n = accounts[3]
		const uint256AeUwgC3 = await AntiBaseProtocolOPPPJ8l.balanceOf.call(addressBN0DC1n, {from: accounts[3]});
		const stringHxEu0Ir = await AntiBaseProtocolOPPPJ8l.symbol.call({from: accounts[3]});
		const uint8FT6R1bH = await AntiBaseProtocolOPPPJ8l.decimals.call({from: accounts[1]});
		const stringaF6qZDj = await AntiBaseProtocolOPPPJ8l.symbol.call({from: accounts[3]});

		assert.equal(stringHxEu0Ir, "ABASE")
		assert.equal(stringaF6qZDj, "ABASE")
		assert.equal(uint256AeUwgC3, BigInt("31250000000000000000"))
		assert.equal(uint8FT6R1bH, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolTxKmJQ = await AntiBaseProtocol.new({from: accounts[1]});
		const uint0dASEM = BigInt("582")
		const addresszXcLd7t = accounts[3]
		const uinty3xmmZO = BigInt("2026")
		const addressp47oDPz = "0x0000000000000000000000000000000000000001"
		const boolhkv30p = await AntiBaseProtocolTxKmJQ.decreaseAllowance.call(addresszXcLd7t, uint0dASEM, {from: accounts[3]});
		await AntiBaseProtocolTxKmJQ.onlyOwner.call({from: accounts[4]});
		const boolb9Wkt20 = await AntiBaseProtocolTxKmJQ.increaseAllowance.call(addressp47oDPz, uinty3xmmZO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolTxKmJQ.decreaseAllowance.call(addresszXcLd7t, uint0dASEM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnoeQWF5 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintU1I1pCh = BigInt("314")
		const addressyf1HMkG = accounts[0]
		const uintWyw9CaI = BigInt("819")
		const addressCCPkglH = accounts[4]
		const addresskrQtCz4 = accounts[2]
		const uintRXruGHW = BigInt("1375")
		const addressUIyi5o = accounts[1]
		const boolBwxAd9q = await AntiBaseProtocolnoeQWF5.transfer.call(addressyf1HMkG, uintU1I1pCh, {from: accounts[2]});
		const stringymSnsAB = await AntiBaseProtocolnoeQWF5.symbol.call({from: accounts[2]});
		const uint256ynIyFFH = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uintWyw9CaI, {from: accounts[3]});
		const addressKuLaKQR = await AntiBaseProtocolnoeQWF5.transferOwnership.call(addressCCPkglH, {from: accounts[1]});
		const addressqDcwvq4 = await AntiBaseProtocolnoeQWF5.transferOwnership.call(addresskrQtCz4, {from: accounts[1]});
		const addressUisW6I = await AntiBaseProtocolnoeQWF5._burn.call(addressUIyi5o, uintRXruGHW, {from: accounts[1]});

		await expect(AntiBaseProtocolnoeQWF5.transfer.call(addressyf1HMkG, uintU1I1pCh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnoeQWF5 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintwLNr9ii = BigInt("805")
		const uintQzBAyAv = BigInt("1003")
		const addressMbYnkLI = "0x0000000000000000000000000000000000000001"
		const uintxpUtl6P = BigInt("398")
		const uintkbpy05 = BigInt("1375")
		const addressIPNSS96 = accounts[0]
		const uint256ynIyFFH = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uintwLNr9ii, {from: accounts[3]});
		const booljsWYnF = await AntiBaseProtocolnoeQWF5.increaseAllowance.call(addressMbYnkLI, uintQzBAyAv, {from: accounts[3]});
		const uint256edX05Ai = await AntiBaseProtocolnoeQWF5.burn.call(uintxpUtl6P, {from: accounts[5]});
		const addressUisW6I = await AntiBaseProtocolnoeQWF5._burn.call(addressIPNSS96, uintkbpy05, {from: accounts[1]});

		assert.equal(booljsWYnF, true)
		assert.equal(uint256ynIyFFH, BigInt("135"))
		await expect(AntiBaseProtocolnoeQWF5.burn.call(uintxpUtl6P, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnoeQWF5 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintWW2Ze43 = BigInt("805")
		const uintYM8VWUm = BigInt("1480")
		const addresssROxtw = accounts[2]
		const addressIHxiOdz = "0x0000000000000000000000000000000000000001"
		const uintRzgy2q4 = BigInt("1161")
		const addressB1Yo6XS = accounts[5]
		const uintTLAWIFg = BigInt("1375")
		const addressCRdsC7U = accounts[0]
		const uint256ynIyFFH = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uintWW2Ze43, {from: accounts[3]});
		const boolE9c2HRy = await AntiBaseProtocolnoeQWF5.transferFrom.call(addressIHxiOdz, addresssROxtw, uintYM8VWUm, {from: accounts[3]});
		const uint256HBK1Kja = await AntiBaseProtocolnoeQWF5.burn.call(uintRzgy2q4, {from: accounts[3]});
		await AntiBaseProtocolnoeQWF5.onlyOwner.call({from: accounts[3]});
		const addressKuLaKQR = await AntiBaseProtocolnoeQWF5.transferOwnership.call(addressB1Yo6XS, {from: accounts[1]});
		const addressUisW6I = await AntiBaseProtocolnoeQWF5._burn.call(addressCRdsC7U, uintTLAWIFg, {from: accounts[1]});

		assert.equal(uint256ynIyFFH, BigInt("135"))
		await expect(AntiBaseProtocolnoeQWF5.transferFrom.call(addressIHxiOdz, addresssROxtw, uintYM8VWUm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolIpuJmfm = await AntiBaseProtocol.new({from: accounts[2]});
		const uintmU6xWMl = BigInt("1082")
		const uintwSPPMzN = BigInt("1743")
		const addressl1T4PB = "0x0000000000000000000000000000000000000001"
		const uint256JSaKitI = await AntiBaseProtocolIpuJmfm.findRewardFee.call(uintmU6xWMl, {from: accounts[0]});
		const stringNs31iOK = await AntiBaseProtocolIpuJmfm.name.call({from: accounts[3]});
		const addressadlDCzM = await AntiBaseProtocolIpuJmfm._mint.call(addressl1T4PB, uintwSPPMzN, {from: accounts[0]});
		await AntiBaseProtocolIpuJmfm.requestGas.call({from: accounts[4]});

		assert.equal(stringNs31iOK, "https://t.me/antibaseprotocol")
		assert.equal(uint256JSaKitI, BigInt("55"))
		await expect(AntiBaseProtocolIpuJmfm._mint.call(addressl1T4PB, uintwSPPMzN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoldzNa9j = await AntiBaseProtocol.new({from: accounts[1]});
		const uint5oZost = BigInt("633")
		const addressAGoXo4t = accounts[1]
		const addressnclOl6O = accounts[1]
		const uintzLvRVNF = BigInt("1902")
		const addressyumoKTp = accounts[0]
		const addressoMAi5h = accounts[0]
		const uintqtofbJ = BigInt("190")
		const boolTDv7r9 = await AntiBaseProtocoldzNa9j.transferFrom.call(addressnclOl6O, addressAGoXo4t, uint5oZost, {from: accounts[5]});
		const boolJjsGiu8 = await AntiBaseProtocoldzNa9j.transferFrom.call(addressoMAi5h, addressyumoKTp, uintzLvRVNF, {from: accounts[1]});
		const uint256F1YkTrK = await AntiBaseProtocoldzNa9j.burn.call(uintqtofbJ, {from: accounts[5]});
		const uint8h0NtK1Z = await AntiBaseProtocoldzNa9j.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocoldzNa9j.transferFrom.call(addressnclOl6O, addressAGoXo4t, uint5oZost, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnoeQWF5 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintAWqUIhc = BigInt("166")
		const uintwBlWRdx = BigInt("1548")
		const uintxpL9rkZ = BigInt("798")
		const addresswdyP8Yi = accounts[1]
		const uintWJ8mDZ = BigInt("1986")
		const addressQ81c8E1 = "0x0000000000000000000000000000000000000001"
		const uintyJEsrSP = BigInt("881")
		const addressXEx87c5 = "0x0000000000000000000000000000000000000001"
		const uintGxwttNE = BigInt("57")
		const addressTITYn5W = accounts[0]
		const uintyKRJih1 = BigInt("1462")
		const addressXDnwQDa = accounts[5]
		const uintRLs1OV = BigInt("1086")
		const addressvn0QsGq = accounts[4]
		const uintLkrSN4r = BigInt("798")
		const addressMMP3oy = accounts[4]
		const uintZ2KpyLw = BigInt("1342")
		const addressi11VWcv = accounts[1]
		const uint256juSyJpT = await AntiBaseProtocolnoeQWF5.findRewardFee.call(uintAWqUIhc, {from: accounts[2]});
		const uint256xpaZ3Jk = await AntiBaseProtocolnoeQWF5.burn.call(uintwBlWRdx, {from: accounts[3]});
		const boolsrT873g = await AntiBaseProtocolnoeQWF5.approve.call(addresswdyP8Yi, uintxpL9rkZ, {from: accounts[2]});
		const addressTBwWTvN = await AntiBaseProtocolnoeQWF5._burn.call(addressQ81c8E1, uintWJ8mDZ, {from: accounts[1]});
		const addressiXDupAh = await AntiBaseProtocolnoeQWF5._burn.call(addressXEx87c5, uintyJEsrSP, {from: accounts[0]});
		const boolBwxAd9q = await AntiBaseProtocolnoeQWF5.transfer.call(addressTITYn5W, uintGxwttNE, {from: accounts[2]});
		const addressfHuyEtB = await AntiBaseProtocolnoeQWF5._burnFrom.call(addressXDnwQDa, uintyKRJih1, {from: accounts[0]});
		const boolqaCVAu3 = await AntiBaseProtocolnoeQWF5.approve.call(addressvn0QsGq, uintRLs1OV, {from: accounts[4]});
		const uint256ynIyFFH = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uintLkrSN4r, {from: accounts[3]});
		const addressKuLaKQR = await AntiBaseProtocolnoeQWF5.transferOwnership.call(addressMMP3oy, {from: accounts[1]});
		const addressUisW6I = await AntiBaseProtocolnoeQWF5._burn.call(addressi11VWcv, uintZ2KpyLw, {from: accounts[1]});

		assert.equal(boolsrT873g, true)
		assert.equal(uint256juSyJpT, BigInt("10"))
		await expect(AntiBaseProtocolnoeQWF5._burn.call(addressQ81c8E1, uintWJ8mDZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRnOH2WV = await AntiBaseProtocol.new({from: accounts[1]});
		const addressCB56x2k = accounts[2]
		const uintjPQGzan = BigInt("495")
		const addressFB6Yamz = accounts[4]
		const addressL0Cj0Or = await AntiBaseProtocolRnOH2WV.transferOwnership.call(addressCB56x2k, {from: accounts[1]});
		const addressacNGhSA = await AntiBaseProtocolRnOH2WV.owner.call({from: accounts[2]});
		await AntiBaseProtocolRnOH2WV.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLAY5Cae = await AntiBaseProtocolRnOH2WV.approve.call(addressFB6Yamz, uintjPQGzan, {from: accounts[2]});

		assert.equal(addressacNGhSA, 0x4f40f0dD63CD8FADa1B493b7B5A4390D5c9FD628)
		await expect(AntiBaseProtocolRnOH2WV.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolW02iD2J = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthiWiHS3 = BigInt("1642")
		const addressqm9a5nB = accounts[4]
		const uintNq9w3m = BigInt("930")
		const addressGx0Etdb = accounts[1]
		const addressYw6Rdhd = await AntiBaseProtocolW02iD2J._burn.call(addressqm9a5nB, uinthiWiHS3, {from: accounts[2]});
		await AntiBaseProtocolW02iD2J.onlyOwner.call({from: accounts[5]});
		const addressJBw7E9M = await AntiBaseProtocolW02iD2J._mint.call(addressGx0Etdb, uintNq9w3m, {from: accounts[0]});
		await AntiBaseProtocolW02iD2J.renounceOwnership.call({from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnoeQWF5 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintRmoLavV = BigInt("1313")
		const uint256juSyJpT = await AntiBaseProtocolnoeQWF5.findRewardFee.call(uintRmoLavV, {from: accounts[2]});
		await AntiBaseProtocolnoeQWF5.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256juSyJpT, BigInt("70"))
		await expect(AntiBaseProtocolnoeQWF5.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnoeQWF5 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintcX2B1Sk = BigInt("413")
		const uintTDjw2oy = BigInt("29")
		const addressPtrQ4QB = "0x00000000000000000000000000000000000000-1"
		const uinteyqA8jD = BigInt("1263")
		const uinthXw1a3s = BigInt("1870")
		const uintU0uPldN = BigInt("304")
		const addresshpkWnCa = accounts[3]
		const addressKsHXHX = accounts[4]
		const uintAlT4sLh = BigInt("1049")
		const uinte5ks7Ys = BigInt("1342")
		const addressjNVdW7k = accounts[1]
		const uint256juSyJpT = await AntiBaseProtocolnoeQWF5.findRewardFee.call(uintcX2B1Sk, {from: accounts[2]});
		const boolaQ0qAoX = await AntiBaseProtocolnoeQWF5.transfer.call(addressPtrQ4QB, uintTDjw2oy, {from: accounts[5]});
		const uint256nW4s8Um = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uinteyqA8jD, {from: accounts[3]});
		await AntiBaseProtocolnoeQWF5.onlyOwner.call({from: accounts[2]});
		const uint256W0zCsT6 = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uinthXw1a3s, {from: accounts[2]});
		const uint8xBujqfM = await AntiBaseProtocolnoeQWF5.decimals.call({from: accounts[2]});
		await AntiBaseProtocolnoeQWF5.requestGas.call({from: accounts[3]});
		const addresst6CHaES = await AntiBaseProtocolnoeQWF5._approve.call(addressKsHXHX, addresshpkWnCa, uintU0uPldN, {from: accounts[4]});
		await AntiBaseProtocolnoeQWF5.requestGas.call({from: accounts[4]});
		const uint256xmeolJq = await AntiBaseProtocolnoeQWF5.findBurnFee.call(uintAlT4sLh, {from: accounts[3]});
		const addressUisW6I = await AntiBaseProtocolnoeQWF5._burn.call(addressjNVdW7k, uinte5ks7Ys, {from: accounts[1]});
		const uint256Dw5FlAT = await AntiBaseProtocolnoeQWF5.totalSupply.call({from: accounts[3]});
		const uint8B9iAt0A = await AntiBaseProtocolnoeQWF5.decimals.call({from: accounts[0]});

		assert.equal(uint256juSyJpT, BigInt("25"))
		await expect(AntiBaseProtocolnoeQWF5.transfer.call(addressPtrQ4QB, uintTDjw2oy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})