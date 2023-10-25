const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinJq2aqvs = await FreakCoin.new({from: accounts[4]});
		const addressrltS2jy = accounts[0]
		const uintcolEPAU = BigInt("1368")
		const addresslDoq3BQ = accounts[1]
		const addressHuWsfJ7 = accounts[5]
		const addressbFx0ZhR = accounts[2]
		const uintAR2mRu2 = BigInt("1242")
		const addressPBIqDv2 = accounts[0]
		const addressBvfiTI = accounts[1]
//		const addressxqtaJSz = await FreakCoinJq2aqvs.setUniswapAddress.call(addressrltS2jy, {from: "0x0000000000000000000000000000000000000001"});
//		const booldOWA675 = await FreakCoinJq2aqvs.transferFrom.call(addressHuWsfJ7, addresslDoq3BQ, uintcolEPAU, {from: accounts[1]});
//		const addresstQm03pd = await FreakCoinJq2aqvs.uniswapAddress.call({from: accounts[0]});
//		const uint256RVNj3i4 = await FreakCoinJq2aqvs.allUserBalances.call(addressbFx0ZhR, {from: accounts[4]});
//		const booldwa7Lr3 = await FreakCoinJq2aqvs.transferFrom.call(addressBvfiTI, addressPBIqDv2, uintAR2mRu2, {from: accounts[4]});

		await expect(FreakCoinJq2aqvs.setUniswapAddress.call(addressrltS2jy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinYESQkor = await FreakCoin.new({from: accounts[1]});
		const addressqTv95Og = accounts[2]
		const addressZ40AJhh = accounts[4]
		const addresszcCDjvd = accounts[4]
//		const uint256gHlM7qq = await FreakCoinYESQkor.allUserBalances.call(addressqTv95Og, {from: accounts[2]});
//		const uint256zFVacs = await FreakCoinYESQkor.allUserBalances.call(addressZ40AJhh, {from: accounts[3]});
//		const uint256sy9OqWT = await FreakCoinYESQkor.balanceOf.call(addresszcCDjvd, {from: accounts[2]});
//		const uint256G3uPOAA = await FreakCoinYESQkor.totalSupply.call({from: accounts[0]});

		await expect(FreakCoinYESQkor.allUserBalances.call(addressqTv95Og, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinxUQEBt = await FreakCoin.new({from: accounts[2]});
		const uintm9vP51E = BigInt("1169")
		const addressQ3zosmo = accounts[2]
		const addressEMresL9 = accounts[3]
		const uintPRTvYAP = BigInt("1793")
		const addressaPm5u1q = "0x0000000000000000000000000000000000000001"
//		const boolCbpldwp = await FreakCoinxUQEBt.transferFrom.call(addressEMresL9, addressQ3zosmo, uintm9vP51E, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaZ8901C = await FreakCoinxUQEBt.transfer.call(addressaPm5u1q, uintPRTvYAP, {from: accounts[3]});
//		const addresseSG1ujM = await FreakCoinxUQEBt.uniswapAddress.call({from: accounts[4]});

		await expect(FreakCoinxUQEBt.transferFrom.call(addressEMresL9, addressQ3zosmo, uintm9vP51E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinkWCdWHb = await FreakCoin.new({from: accounts[3]});
		const addressnCRXKv = accounts[4]
		const addressV49Hxn4 = accounts[3]
		const addresseCbUuK = accounts[2]
		const addressFzVDngp = accounts[0]
		const uint256ovs8byN = await FreakCoinkWCdWHb.balanceOf.call(addressnCRXKv, {from: accounts[4]});
		const uint256g2hwmm = await FreakCoinkWCdWHb.allowance.call(addresseCbUuK, addressV49Hxn4, {from: accounts[5]});
//		const uint256WNH5p5Y = await FreakCoinkWCdWHb.allUserBalances.call(addressFzVDngp, {from: accounts[3]});
//		const uint256Tipi8Y8 = await FreakCoinkWCdWHb.totalSupply.call({from: accounts[4]});
//		const addressHRQzMuH = await FreakCoinkWCdWHb.uniswapAddress.call({from: accounts[1]});

		assert.equal(uint256g2hwmm, BigInt("0"))
		assert.equal(uint256ovs8byN, BigInt("0"))
		await expect(FreakCoinkWCdWHb.allUserBalances.call(addressFzVDngp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinL5d5squ = await FreakCoin.new({from: accounts[4]});
		const addresspQZrBQt = accounts[5]
		const uintaB0z1Lw = BigInt("1705")
		const addressbJF2CqT = accounts[2]
		const addressuuyiYRB = accounts[1]
		const uint256gbMlR0X = await FreakCoinL5d5squ.balanceOf.call(addresspQZrBQt, {from: accounts[3]});
		const boolAFWrUb4 = await FreakCoinL5d5squ.approve.call(addressbJF2CqT, uintaB0z1Lw, {from: accounts[2]});
		const uint256bn7120g = await FreakCoinL5d5squ.balanceOf.call(addressuuyiYRB, {from: accounts[3]});

		assert.equal(boolAFWrUb4, true)
		assert.equal(uint256bn7120g, BigInt("0"))
		assert.equal(uint256gbMlR0X, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinARTxqMx = await FreakCoin.new({from: accounts[2]});
		const addressz55sD1b = accounts[5]
		const uintMpXEOUR = BigInt("943")
		const addressH2IBHZ = accounts[3]
		const addressg9hrJjo = accounts[3]
		const addressLhlzGhY = accounts[1]
		const addressUZDiFsf = accounts[1]
		const uint256tEnj8QP = await FreakCoinARTxqMx.balanceOf.call(addressz55sD1b, {from: accounts[4]});
		const addresscHWQLye = await FreakCoinARTxqMx.uniswapAddress.call({from: accounts[4]});
		const boolk5uqa25 = await FreakCoinARTxqMx.approve.call(addressH2IBHZ, uintMpXEOUR, {from: accounts[3]});
		const uint256ysalOSL = await FreakCoinARTxqMx.allowance.call(addressLhlzGhY, addressg9hrJjo, {from: accounts[1]});
		const uint256WjsUqPK = await FreakCoinARTxqMx.balanceOf.call(addressUZDiFsf, {from: accounts[4]});

		assert.equal(addresscHWQLye, 0x0000000000000000000000000000000000000000)
		assert.equal(boolk5uqa25, true)
		assert.equal(uint256WjsUqPK, BigInt("0"))
		assert.equal(uint256tEnj8QP, BigInt("0"))
		assert.equal(uint256ysalOSL, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinRRKuHA = await FreakCoin.new({from: accounts[3]});
		const uintOaJlCFh = BigInt("547")
		const addressolrBGZ = accounts[0]
		const addressZTA7Igu = accounts[3]
		const addresswomSBkf = accounts[5]
//		const boolWfO8Ubt = await FreakCoinRRKuHA.transfer.call(addressolrBGZ, uintOaJlCFh, {from: accounts[0]});
//		const uint256tKtfEXm = await FreakCoinRRKuHA.balanceOf.call(addressZTA7Igu, {from: accounts[0]});
//		const uint256JDZYn62 = await FreakCoinRRKuHA.allUserBalances.call(addresswomSBkf, {from: accounts[5]});

		await expect(FreakCoinRRKuHA.transfer.call(addressolrBGZ, uintOaJlCFh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinYp4aUdZ = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjCA9pU7 = accounts[0]
		const address1sHTlO = accounts[1]
		const uintajVFiQ = BigInt("162")
		const addressCBBQkyp = accounts[2]
		const addressNgfjNbx = accounts[1]
		const uintldMPslo = BigInt("834")
		const addressEnQJqkM = accounts[1]
		const uint256jrqzbeZ = await FreakCoinYp4aUdZ.allowance.call(address1sHTlO, addressjCA9pU7, {from: "0x0000000000000000000000000000000000000001"});
		const boolVlvnRgL = await FreakCoinYp4aUdZ.transfer.call(addressCBBQkyp, uintajVFiQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Fhap99Y = await FreakCoinYp4aUdZ.allUserBalances.call(addressNgfjNbx, {from: accounts[0]});
		const boolGz75FBG = await FreakCoinYp4aUdZ.transfer.call(addressEnQJqkM, uintldMPslo, {from: accounts[3]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinRRKuHA = await FreakCoin.new({from: accounts[3]});
		const uintyqxshdL = BigInt("1034")
		const addressakGcev = accounts[0]
		const address05tFRW = accounts[4]
		const boolZs60ew = await FreakCoinRRKuHA.transfer.call(addressakGcev, uintyqxshdL, {from: accounts[3]});
//		const uint256JDZYn62 = await FreakCoinRRKuHA.allUserBalances.call(address05tFRW, {from: accounts[5]});

		assert.equal(boolZs60ew, true)
		await expect(FreakCoinRRKuHA.allUserBalances.call(address05tFRW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinRRKuHA = await FreakCoin.new({from: accounts[3]});
		const uintg49rhp = BigInt("1034")
		const addressautieG = accounts[3]
		const boolZs60ew = await FreakCoinRRKuHA.transfer.call(addressautieG, uintg49rhp, {from: accounts[3]});

		assert.equal(boolZs60ew, true)
	});
})