const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTwu9ImmD = await PACT.new({from: accounts[0]});
		const addressA96vjyJ = "0x0000000000000000000000000000000000000001"
		const addressJbDpYvv = accounts[1]
		const addressOfOaBSy = "0x0000000000000000000000000000000000000001"
		const addressAAv9SWO = accounts[2]
		const uintWIp10L4 = BigInt("392")
		const addressuK0fFGR = accounts[4]
//		const boolwMv07D0 = await PACTwu9ImmD.setupRewards.call(addressA96vjyJ, {from: accounts[2]});
//		const uintkO2y19b = await PACTwu9ImmD.allowance.call(addressOfOaBSy, addressJbDpYvv, {from: accounts[4]});
//		const uintNphO28S = await PACTwu9ImmD.balanceOf.call(addressAAv9SWO, {from: accounts[4]});
//		const boolpLVp2x = await PACTwu9ImmD.approve.call(addressuK0fFGR, uintWIp10L4, {from: accounts[2]});
//		const stringDMNAZ1q = await PACTwu9ImmD.name.call({from: accounts[5]});

		await expect(PACTwu9ImmD.setupRewards.call(addressA96vjyJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvlpM7g = await PACT.new({from: accounts[3]});
		const addresstiTl1Wt = accounts[5]
		const addresstVtGlbZ = accounts[0]
		const uintKN4leB8 = BigInt("30")
		const addressINKprgB = accounts[2]
		const addressqodpY4P = accounts[4]
		const uintEzDHHJ = BigInt("1776")
		const addressJTvFT4 = accounts[4]
		const addressW3EqlPK = accounts[4]
		const uintzLKhX6s = BigInt("278")
		const addressXmYno1c = accounts[1]
		const uintSKBlIkd = await PACTvlpM7g.allowance.call(addresstVtGlbZ, addresstiTl1Wt, {from: accounts[1]});
		const boolkzbymyW = await PACTvlpM7g.approve.call(addressINKprgB, uintKN4leB8, {from: accounts[1]});
		const uintvSJtlBX = await PACTvlpM7g.balanceOf.call(addressqodpY4P, {from: accounts[3]});
//		const boolM2aCykq = await PACTvlpM7g.transferFrom.call(addressW3EqlPK, addressJTvFT4, uintEzDHHJ, {from: accounts[1]});
//		const boolyiaFOqw = await PACTvlpM7g.transfer.call(addressXmYno1c, uintzLKhX6s, {from: accounts[4]});

		assert.equal(boolkzbymyW, true)
		assert.equal(uintSKBlIkd, BigInt("0"))
		assert.equal(uintvSJtlBX, BigInt("0"))
		await expect(PACTvlpM7g.transferFrom.call(addressW3EqlPK, addressJTvFT4, uintEzDHHJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLPTpWGh = await PACT.new({from: accounts[1]});
		const addresscc1ixBC = accounts[4]
		const addressQvxuJr6 = accounts[2]
		const addressavaZ3jG = accounts[2]
		const uintCxCfnkh = BigInt("706")
		const addresssTJ9DdV = accounts[1]
		const addressfY3yPwA = accounts[3]
		const uintpK8wAN1 = BigInt("1323")
		const addresscFRk3c8 = accounts[2]
		const address8UEwAF = accounts[5]
		const uinteFdnfC = await PACTLPTpWGh.totalSupply.call({from: accounts[1]});
//		const booleJSM5G = await PACTLPTpWGh.setupRewards.call(addresscc1ixBC, {from: accounts[5]});
//		const uintKDFysv8 = await PACTLPTpWGh.allowance.call(addressavaZ3jG, addressQvxuJr6, {from: accounts[0]});
//		const boolDhFBMLa = await PACTLPTpWGh.transfer.call(addresssTJ9DdV, uintCxCfnkh, {from: accounts[2]});
//		const boolhTAthga = await PACTLPTpWGh.setupBasePool.call(addressfY3yPwA, {from: accounts[4]});
//		const boolShK6Lb = await PACTLPTpWGh.transferFrom.call(address8UEwAF, addresscFRk3c8, uintpK8wAN1, {from: accounts[1]});

		assert.equal(uinteFdnfC, BigInt("1000000000000000000000000000"))
		await expect(PACTLPTpWGh.setupRewards.call(addresscc1ixBC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfGRKHkk = await PACT.new({from: accounts[2]});
		const addressqOD582u = accounts[2]
		const addressX2yd9U = accounts[3]
		const addressxBm8cWR = "0x0000000000000000000000000000000000000001"
		const stringnHcwBX5 = await PACTfGRKHkk.symbol.call({from: accounts[2]});
//		const booltHuEWVe = await PACTfGRKHkk.setupBasePool.call(addressqOD582u, {from: accounts[3]});
//		const uintDNP30BH = await PACTfGRKHkk.allowance.call(addressxBm8cWR, addressX2yd9U, {from: accounts[4]});

		assert.equal(stringnHcwBX5, "PACT")
		await expect(PACTfGRKHkk.setupBasePool.call(addressqOD582u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTg2zarp1 = await PACT.new({from: accounts[3]});
		const addressQMRaUwr = accounts[1]
		const uintJD59ynJ = BigInt("1685")
		const addressYtknIMz = accounts[1]
		const uintFumT4SF = await PACTg2zarp1.balanceOf.call(addressQMRaUwr, {from: accounts[0]});
//		const boolFfkYbuA = await PACTg2zarp1.transfer.call(addressYtknIMz, uintJD59ynJ, {from: accounts[1]});
//		const uinthOiUNKS = await PACTg2zarp1.totalSupply.call({from: accounts[5]});

		assert.equal(uintFumT4SF, BigInt("0"))
		await expect(PACTg2zarp1.transfer.call(addressYtknIMz, uintJD59ynJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTE7l5g5M = await PACT.new({from: accounts[4]});
		const uintbIz0yWY = BigInt("5")
		const addressUfGzfFh = accounts[1]
		const addresswXNqzUI = accounts[0]
		const addressNR6snaF = accounts[2]
		const addressSup1HPq = "0x0000000000000000000000000000000000000001"
		const stringffBgHyo = await PACTE7l5g5M.name.call({from: accounts[1]});
//		const boolDNMn4Nm = await PACTE7l5g5M.transferFrom.call(addresswXNqzUI, addressUfGzfFh, uintbIz0yWY, {from: accounts[2]});
//		const uintExConAA = await PACTE7l5g5M.allowance.call(addressSup1HPq, addressNR6snaF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringffBgHyo, "P2PB2B community token")
		await expect(PACTE7l5g5M.transferFrom.call(addresswXNqzUI, addressUfGzfFh, uintbIz0yWY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTav75uQv = await PACT.new({from: accounts[0]});
		const uintRlQlOiM = BigInt("39")
		const addressTASpMPN = accounts[0]
		const uintdoIZY11 = BigInt("1299")
		const addressHcZgSIC = accounts[4]
		const addressO0NIl82 = accounts[0]
		const boolwVzyfNC = await PACTav75uQv.approve.call(addressTASpMPN, uintRlQlOiM, {from: accounts[3]});
		const uint8KDNUNL = await PACTav75uQv.decimals.call({from: accounts[4]});
		const uint8ttwVV0 = await PACTav75uQv.decimals.call({from: accounts[3]});
//		const boolvB0Fzgz = await PACTav75uQv.transferFrom.call(addressO0NIl82, addressHcZgSIC, uintdoIZY11, {from: accounts[4]});

		assert.equal(boolwVzyfNC, true)
		assert.equal(uint8KDNUNL, BigInt("18"))
		assert.equal(uint8ttwVV0, BigInt("18"))
		await expect(PACTav75uQv.transferFrom.call(addressO0NIl82, addressHcZgSIC, uintdoIZY11, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfGRKHkk = await PACT.new({from: accounts[2]});
		const addressK0Ktkas = accounts[3]
		const addressMe8FiWN = accounts[2]
		const addressFzLLC6L = accounts[3]
		const addressy0NFlWd = "0x0000000000000000000000000000000000000001"
//		const boolfyfYWAm = await PACTfGRKHkk.setupTeam.call(addressK0Ktkas, {from: accounts[1]});
//		const stringnHcwBX5 = await PACTfGRKHkk.symbol.call({from: accounts[2]});
//		const booltHuEWVe = await PACTfGRKHkk.setupBasePool.call(addressMe8FiWN, {from: accounts[3]});
//		const uintDNP30BH = await PACTfGRKHkk.allowance.call(addressy0NFlWd, addressFzLLC6L, {from: accounts[4]});

		await expect(PACTfGRKHkk.setupTeam.call(addressK0Ktkas, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGdhSKZ5 = await PACT.new({from: accounts[4]});
		const addressBxtK17m = accounts[2]
		const uintey2s8kV = BigInt("228")
		const addressWHnZe8i = accounts[0]
		const addressHOfVnEO = accounts[5]
//		const boolSTDjrmM = await PACTGdhSKZ5.setupFarming.call(addressBxtK17m, {from: accounts[1]});
//		const uintVcBrysS = await PACTGdhSKZ5.totalSupply.call({from: accounts[4]});
//		const uint4t4L7T = await PACTGdhSKZ5.totalSupply.call({from: accounts[2]});
//		const boolSL6eHmL = await PACTGdhSKZ5.transferFrom.call(addressHOfVnEO, addressWHnZe8i, uintey2s8kV, {from: accounts[2]});
//		const stringXkmxE2j = await PACTGdhSKZ5.name.call({from: accounts[2]});

		await expect(PACTGdhSKZ5.setupFarming.call(addressBxtK17m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTGdhSKZ5 = await PACT.new({from: accounts[4]});
		const addressduwPFR = accounts[1]
		const addressgHNVPXN = accounts[0]
		const uintfHEoF5j = BigInt("228")
		const addressCAEOmvQ = accounts[0]
		const addresstopxSx5 = accounts[5]
		const uintVcBrysS = await PACTGdhSKZ5.totalSupply.call({from: accounts[4]});
//		const boolgmf31cg = await PACTGdhSKZ5.setupReserve.call(addressduwPFR, {from: accounts[5]});
//		const boolvpMWcbg = await PACTGdhSKZ5.setupReserve.call(addressgHNVPXN, {from: accounts[2]});
//		const boolSL6eHmL = await PACTGdhSKZ5.transferFrom.call(addresstopxSx5, addressCAEOmvQ, uintfHEoF5j, {from: accounts[2]});
//		const stringXkmxE2j = await PACTGdhSKZ5.name.call({from: accounts[2]});

		assert.equal(uintVcBrysS, BigInt("1000000000000000000000000000"))
		await expect(PACTGdhSKZ5.setupReserve.call(addressduwPFR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTFRzSfLl = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const address8ucJ7j = accounts[0]
		const addressjH1Ryn7 = accounts[4]
		const uintai3FB1 = await PACTFRzSfLl.balanceOf.call(address8ucJ7j, {from: accounts[0]});
		const uintOXdypIV = await PACTFRzSfLl.balanceOf.call(addressjH1Ryn7, {from: accounts[5]});
		const stringNlaRrDi = await PACTFRzSfLl.name.call({from: accounts[4]});
		const uintqzLZSoU = await PACTFRzSfLl.totalSupply.call({from: accounts[4]});
	});

	it('test for PACT', async () => {
		const PACTemaHTFY = await PACT.new({from: accounts[0]});
		const uintSKlp6ee = BigInt("1990")
		const address79Bfuz = accounts[0]
		const addressevxhDXr = accounts[1]
		const addressoDDe7Jo = accounts[0]
		const stringw2zCJJu = await PACTemaHTFY.name.call({from: accounts[4]});
//		const boolglL0ca = await PACTemaHTFY.burn.call(address79Bfuz, uintSKlp6ee, {from: accounts[2]});
//		const stringok3pLKL = await PACTemaHTFY.name.call({from: accounts[0]});
//		const boolufEtCy = await PACTemaHTFY.setupBasePool.call(addressevxhDXr, {from: accounts[5]});
//		const booli5jlQv6 = await PACTemaHTFY.setupFarming.call(addressoDDe7Jo, {from: accounts[4]});

		assert.equal(stringw2zCJJu, "P2PB2B community token")
		await expect(PACTemaHTFY.burn.call(address79Bfuz, uintSKlp6ee, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})