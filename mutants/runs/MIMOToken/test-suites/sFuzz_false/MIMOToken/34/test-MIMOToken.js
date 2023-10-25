const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenES65P4 = await MIMOToken.new({from: accounts[2]});
		const uintNxdyA2 = BigInt("1189")
		const addresspFhvb5I = accounts[3]
		const addressU85ayko = accounts[4]
		const uintnOyl23n = BigInt("181")
		const uintudEFni = BigInt("1217")
		const uintjvOSLAT = BigInt("1405")
		const uintYc2G9EZ = BigInt("538")
		const boolXikcI6Y = await MIMOTokenES65P4.transferFrom.call(addressU85ayko, addresspFhvb5I, uintNxdyA2, {from: accounts[1]});
		const uint256uliTLyG = await MIMOTokenES65P4.setMinFee.call(uintnOyl23n, {from: "0x0000000000000000000000000000000000000001"});
		const uint256H3HauLx = await MIMOTokenES65P4.setMinFee.call(uintudEFni, {from: accounts[1]});
		const uintVymd8lo = await MIMOTokenES65P4.totalSupply.call({from: accounts[3]});
		const uint256FFklSpo = await MIMOTokenES65P4.getFee.call(uintjvOSLAT, {from: accounts[5]});
		const uint256wnZs8ZZ = await MIMOTokenES65P4.getFee.call(uintYc2G9EZ, {from: accounts[5]});

		await expect(MIMOTokenES65P4.transferFrom.call(addressU85ayko, addresspFhvb5I, uintNxdyA2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenbmp6Ucu = await MIMOToken.new({from: accounts[3]});
		const uintykyGfAJ = BigInt("1632")
		const addressuHrRCs = accounts[3]
		const uintrA6l8Il = BigInt("528")
		const addressKBE9LOy = accounts[5]
		const uintJ9eqAaz = BigInt("226")
		const addressIcSUQSm = accounts[3]
		const boolbltnvYV = await MIMOTokenbmp6Ucu.approve.call(addressuHrRCs, uintykyGfAJ, {from: accounts[5]});
		const uintciF2Oyc = await MIMOTokenbmp6Ucu.totalSupply.call({from: accounts[3]});
		const boolB8y0oP = await MIMOTokenbmp6Ucu.transfer.call(addressKBE9LOy, uintrA6l8Il, {from: accounts[0]});
		const booliYDGxs1 = await MIMOTokenbmp6Ucu.approve.call(addressIcSUQSm, uintJ9eqAaz, {from: accounts[0]});

		assert.equal(boolbltnvYV, true)
		assert.equal(uintciF2Oyc, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenbmp6Ucu.transfer.call(addressKBE9LOy, uintrA6l8Il, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenSM3L8hS = await MIMOToken.new({from: accounts[0]});
		const addressr733IG = accounts[4]
		const addressUlO9cxI = accounts[0]
		const uintg1gsviL = BigInt("774")
		const addressKuk18HC = accounts[5]
		const addressSpyflvU = accounts[0]
		const uintBzygZaL = BigInt("1212")
		const addressxVpoL8a = accounts[3]
		const addressKxafPcG = accounts[0]
		const uintUsD5QG = BigInt("293")
		const uintBKYUc4N = await MIMOTokenSM3L8hS.allowance.call(addressUlO9cxI, addressr733IG, {from: accounts[0]});
		const uint256EGxS2KT = await MIMOTokenSM3L8hS.getFee.call(uintg1gsviL, {from: accounts[0]});
		const uintq2pehFF = await MIMOTokenSM3L8hS.allowance.call(addressSpyflvU, addressKuk18HC, {from: accounts[4]});
		const boolyWEfFV = await MIMOTokenSM3L8hS.transferFrom.call(addressKxafPcG, addressxVpoL8a, uintBzygZaL, {from: accounts[2]});
		const uint256x9enCZO = await MIMOTokenSM3L8hS.getFee.call(uintUsD5QG, {from: accounts[0]});

		assert.equal(uint256EGxS2KT, BigInt("50000000000000000"))
		assert.equal(uintBKYUc4N, BigInt("0"))
		assert.equal(uintq2pehFF, BigInt("0"))
		await expect(MIMOTokenSM3L8hS.transferFrom.call(addressKxafPcG, addressxVpoL8a, uintBzygZaL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenHGPD3K = await MIMOToken.new({from: accounts[3]});
		const uintbl8Tqp1 = BigInt("427")
		const addressJasY0eI = accounts[2]
		const addressFQEDjXD = accounts[2]
		const addressiKPr25M = "0x0000000000000000000000000000000000000001"
		const addressTAlF0RT = accounts[2]
		const uintXvXUUru = BigInt("1539")
		const addressuXIJB1w = accounts[0]
		const addressrDeiZFi = "0x0000000000000000000000000000000000000001"
		const uint256iRC2SP9 = await MIMOTokenHGPD3K.setMinFee.call(uintbl8Tqp1, {from: accounts[1]});
		const uintYOyNRIM = await MIMOTokenHGPD3K.allowance.call(addressFQEDjXD, addressJasY0eI, {from: accounts[5]});
		const uintylnfsU5 = await MIMOTokenHGPD3K.allowance.call(addressTAlF0RT, addressiKPr25M, {from: accounts[0]});
		const boolxZGoHFW = await MIMOTokenHGPD3K.transferFrom.call(addressrDeiZFi, addressuXIJB1w, uintXvXUUru, {from: accounts[2]});

		assert.equal(uintYOyNRIM, BigInt("0"))
		assert.equal(uintylnfsU5, BigInt("0"))
		await expect(MIMOTokenHGPD3K.transferFrom.call(addressrDeiZFi, addressuXIJB1w, uintXvXUUru, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokencuH2279 = await MIMOToken.new({from: accounts[4]});
		const address6tfsFq = accounts[2]
		const addressQpWvIbR = accounts[3]
		const addressjLwk7ZZ = accounts[0]
		const uintpFnokwa = BigInt("320")
		const addressF0dL4B4 = accounts[4]
		const uintALrBmbg = BigInt("710")
		const addressU1PrlNc = accounts[2]
		const uintwx3Xc1d = BigInt("809")
		const addressPUD1W7V = accounts[3]
		const uintHhBcY3q = BigInt("1819")
		const addressmx7mfTb = accounts[2]
		const uintwjvZlAs = await MIMOTokencuH2279.allowance.call(addressQpWvIbR, address6tfsFq, {from: accounts[0]});
		const uintHcDlWkg = await MIMOTokencuH2279.balanceOf.call(addressjLwk7ZZ, {from: accounts[3]});
		const boolmpf2v7a = await MIMOTokencuH2279.transfer.call(addressF0dL4B4, uintpFnokwa, {from: accounts[3]});
		const booldV9ZTOV = await MIMOTokencuH2279.transfer.call(addressU1PrlNc, uintALrBmbg, {from: accounts[5]});
		const boolpEIbFUP = await MIMOTokencuH2279.approve.call(addressPUD1W7V, uintwx3Xc1d, {from: accounts[0]});
		const boolI3TFrAj = await MIMOTokencuH2279.approve.call(addressmx7mfTb, uintHhBcY3q, {from: accounts[4]});

		assert.equal(uintHcDlWkg, BigInt("0"))
		assert.equal(uintwjvZlAs, BigInt("0"))
		await expect(MIMOTokencuH2279.transfer.call(addressF0dL4B4, uintpFnokwa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenIKXisqb = await MIMOToken.new({from: accounts[2]});
		const uintDdaLnbW = BigInt("1208")
		const uintloRCaN9 = BigInt("495")
		const uintHo9l8ZN = BigInt("1941")
		const addressNXISM8V = accounts[3]
		const addressciA5XaL = accounts[3]
		const addressetJGoj6 = accounts[2]
		const addresscPq4HFd = accounts[0]
		const uint256EXfPEBN = await MIMOTokenIKXisqb.setMinFee.call(uintDdaLnbW, {from: accounts[3]});
		const uint256jNNm8o2 = await MIMOTokenIKXisqb.setFeeRate.call(uintloRCaN9, {from: "0x0000000000000000000000000000000000000001"});
		const boolsjZ74tp = await MIMOTokenIKXisqb.transferFrom.call(addressciA5XaL, addressNXISM8V, uintHo9l8ZN, {from: accounts[2]});
		const uintBVVUHta = await MIMOTokenIKXisqb.allowance.call(addresscPq4HFd, addressetJGoj6, {from: accounts[2]});

		await expect(MIMOTokenIKXisqb.transferFrom.call(addressciA5XaL, addressNXISM8V, uintHo9l8ZN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})