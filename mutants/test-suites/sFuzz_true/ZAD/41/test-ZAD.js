const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADwJmcAcl = await ZAD.new({from: accounts[5]});
		const uintYXSZIhH = BigInt("305")
		const addresswy6DtRS = "0x0000000000000000000000000000000000000001"
		const uintUaAbpR = BigInt("1669")
		const address4zuU8G = accounts[4]
		const addressfMqe7Ec = accounts[1]
		const addresshoDUjQf = accounts[1]
		const uintSzpgOhJ = BigInt("1478")
		const addresshueS07l = accounts[1]
		const addresssJ7HQ0s = accounts[3]
		const booly2z7eQG = await ZADwJmcAcl.increaseAllowance.call(addresswy6DtRS, uintYXSZIhH, {from: accounts[2]});
//		const boolWlEjeFm = await ZADwJmcAcl.transferFrom.call(addressfMqe7Ec, address4zuU8G, uintUaAbpR, {from: accounts[3]});
//		const uint256i1jThmz = await ZADwJmcAcl.balanceOf.call(addresshoDUjQf, {from: accounts[1]});
//		const uint256BxDWgy2 = await ZADwJmcAcl._burn.call(uintSzpgOhJ, {from: accounts[4]});
//		const uint256YYJIjj1 = await ZADwJmcAcl.allowance.call(addresssJ7HQ0s, addresshueS07l, {from: accounts[1]});

		assert.equal(booly2z7eQG, true)
		await expect(ZADwJmcAcl.transferFrom.call(addressfMqe7Ec, address4zuU8G, uintUaAbpR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADn2589q = await ZAD.new({from: accounts[3]});
		const addresst51Vs7D = accounts[3]
		const addressjqQqGlu = accounts[5]
		const uintQLvHXor = BigInt("544")
		const addressvsYyWmn = "0x0000000000000000000000000000000000000001"
		const addressFJsmiow = accounts[4]
		const addressQls1sdX = accounts[1]
		const uintl4DN0XZ = BigInt("1184")
		const addressgXVLSq = accounts[1]
		const addressUly7INP = accounts[3]
		const uintGkZBfqg = BigInt("517")
		const addressa0pMlQx = accounts[0]
		const uint256w0ZXM5d = await ZADn2589q.allowance.call(addressjqQqGlu, addresst51Vs7D, {from: accounts[1]});
//		const boolGUmadg = await ZADn2589q.decreaseAllowance.call(addressvsYyWmn, uintQLvHXor, {from: accounts[5]});
//		const uint256Ic1nG8C = await ZADn2589q.allowance.call(addressQls1sdX, addressFJsmiow, {from: accounts[4]});
//		const boolUUno3wK = await ZADn2589q.transferFrom.call(addressUly7INP, addressgXVLSq, uintl4DN0XZ, {from: accounts[4]});
//		const boolwyPlUjt = await ZADn2589q.decreaseAllowance.call(addressa0pMlQx, uintGkZBfqg, {from: accounts[4]});

		assert.equal(uint256w0ZXM5d, BigInt("0"))
		await expect(ZADn2589q.decreaseAllowance.call(addressvsYyWmn, uintQLvHXor, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmOZkOMt = await ZAD.new({from: accounts[1]});
		const uintgMzgwca = BigInt("1038")
		const addressu8KmSzw = accounts[2]
		const addressD5x124t = accounts[1]
		const uintKJxg1tb = BigInt("1192")
		const addressrpnSN2h = accounts[3]
		const uint256ZlqUGAD = await ZADmOZkOMt.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolpKac2d9 = await ZADmOZkOMt.decreaseAllowance.call(addressu8KmSzw, uintgMzgwca, {from: accounts[1]});
//		const uint256a7K3HFn = await ZADmOZkOMt.balanceOf.call(addressD5x124t, {from: accounts[2]});
//		const boolT9LVsMV = await ZADmOZkOMt.decreaseAllowance.call(addressrpnSN2h, uintKJxg1tb, {from: accounts[2]});

		assert.equal(uint256ZlqUGAD, BigInt("100000000000000000000000000"))
		await expect(ZADmOZkOMt.decreaseAllowance.call(addressu8KmSzw, uintgMzgwca, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADtEnAwRz = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjRMg7V = BigInt("1668")
		const addressWQu2t35 = accounts[4]
		const addressklqp4bb = accounts[4]
		const uintgMmpdDZ = BigInt("223")
		const boolqvSnkot = await ZADtEnAwRz.transferFrom.call(addressklqp4bb, addressWQu2t35, uintjRMg7V, {from: "0x0000000000000000000000000000000000000001"});
		const uint256S250zJp = await ZADtEnAwRz._burn.call(uintgMmpdDZ, {from: accounts[4]});
	});

	it('test for ZAD', async () => {
		const ZADbX0zroa = await ZAD.new({from: accounts[0]});
		const uintos5CMeu = BigInt("252")
		const addressFJM8leB = accounts[2]
		const addressEP0x67 = accounts[3]
//		const boolx5wgvrZ = await ZADbX0zroa.transfer.call(addressFJM8leB, uintos5CMeu, {from: accounts[0]});
//		const uint256pitXMip = await ZADbX0zroa.balanceOf.call(addressEP0x67, {from: accounts[4]});

		await expect(ZADbX0zroa.transfer.call(addressFJM8leB, uintos5CMeu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADd2QPXd0 = await ZAD.new({from: accounts[4]});
		const uintaqAP6eQ = BigInt("1630")
		const addressNJ1AiT = accounts[0]
		const addressLy5C8Gq = accounts[2]
		const addressGPBSNRS = accounts[0]
		const addressCVHtg2J = "0x0000000000000000000000000000000000000001"
		const boolZiguN2i = await ZADd2QPXd0.increaseAllowance.call(addressNJ1AiT, uintaqAP6eQ, {from: accounts[0]});
		const uint256LvLJmxk = await ZADd2QPXd0.balanceOf.call(addressLy5C8Gq, {from: accounts[0]});
		const uint256WQSAPgI = await ZADd2QPXd0.allowance.call(addressCVHtg2J, addressGPBSNRS, {from: accounts[3]});
		const stringauWiFFT = await ZADd2QPXd0.symbol.call({from: accounts[4]});

		assert.equal(boolZiguN2i, true)
		assert.equal(stringauWiFFT, "ZAD")
		assert.equal(uint256LvLJmxk, BigInt("0"))
		assert.equal(uint256WQSAPgI, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADBKnA61F = await ZAD.new({from: accounts[1]});
		const addresszjO7LEw = accounts[2]
		const addressi1Qzmqc = accounts[0]
		const uintdZRCpY0 = BigInt("1631")
		const uintCiVyG9I = BigInt("1624")
		const addressXDja3VE = accounts[2]
		const addressDqqCNh = accounts[4]
		const addressN9afa0Q = accounts[1]
		const uint256kqbENVu = await ZADBKnA61F.allowance.call(addressi1Qzmqc, addresszjO7LEw, {from: accounts[2]});
		const uint8tFf7WTg = await ZADBKnA61F.decimals.call({from: accounts[4]});
//		const uint256OMUjGU2 = await ZADBKnA61F._burn.call(uintdZRCpY0, {from: accounts[2]});
//		const boolhP1xq97 = await ZADBKnA61F.approve.call(addressXDja3VE, uintCiVyG9I, {from: accounts[1]});
//		const uint2565ATOqR = await ZADBKnA61F.allowance.call(addressN9afa0Q, addressDqqCNh, {from: accounts[0]});

		assert.equal(uint256kqbENVu, BigInt("0"))
		assert.equal(uint8tFf7WTg, BigInt("18"))
		await expect(ZADBKnA61F._burn.call(uintdZRCpY0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmOZkOMt = await ZAD.new({from: accounts[1]});
		const uint256ZlqUGAD = await ZADmOZkOMt.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringtV3ANPm = await ZADmOZkOMt.name.call({from: accounts[3]});
		const stringrI9iLCu = await ZADmOZkOMt.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringrI9iLCu, "ZAD")
		assert.equal(stringtV3ANPm, "Zadkiel")
		assert.equal(uint256ZlqUGAD, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADmOZkOMt = await ZAD.new({from: accounts[1]});
		const uintrq5PL1V = BigInt("1029")
		const addresssrDzcCh = "0x0000000000000000000000000000000000000001"
		const uintTd5pDD0 = BigInt("1191")
		const addressUwxcfax = accounts[3]
		const boolLyuUT54 = await ZADmOZkOMt.approve.call(addresssrDzcCh, uintrq5PL1V, {from: accounts[0]});
//		const boolT9LVsMV = await ZADmOZkOMt.decreaseAllowance.call(addressUwxcfax, uintTd5pDD0, {from: accounts[2]});

		assert.equal(boolLyuUT54, true)
		await expect(ZADmOZkOMt.decreaseAllowance.call(addressUwxcfax, uintTd5pDD0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmOZkOMt = await ZAD.new({from: accounts[1]});
		const uintHHbfSrd = BigInt("0")
		const addressIAAyoe3 = accounts[0]
		const addressRxNsXF1 = accounts[4]
		const uintAN0jiwb = BigInt("1192")
		const addressb6bVDGY = accounts[3]
		const uintQYT4R8y = BigInt("89")
		const addressu3JSDcr = accounts[1]
		const boolcL5S0N0 = await ZADmOZkOMt.transferFrom.call(addressRxNsXF1, addressIAAyoe3, uintHHbfSrd, {from: accounts[1]});
//		const boolT9LVsMV = await ZADmOZkOMt.decreaseAllowance.call(addressb6bVDGY, uintAN0jiwb, {from: accounts[2]});
//		const boolKMkCIB = await ZADmOZkOMt.decreaseAllowance.call(addressu3JSDcr, uintQYT4R8y, {from: accounts[4]});
//		const stringzyzCgp0 = await ZADmOZkOMt.name.call({from: accounts[4]});

		assert.equal(boolcL5S0N0, true)
		await expect(ZADmOZkOMt.decreaseAllowance.call(addressb6bVDGY, uintAN0jiwb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})