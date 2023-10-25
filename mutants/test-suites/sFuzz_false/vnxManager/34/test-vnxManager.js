const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerD3n6NnG = await vnxManager.new({from: accounts[1]});
		const uintY7J7KuE = BigInt("1200")
		const addressWe5WRqU = accounts[1]
		const uintgjDFAb2 = BigInt("857")
		const addressZdDK9H = "0x0000000000000000000000000000000000000001"
//		await vnxManagerD3n6NnG.renounceOwnership.call({from: accounts[4]});
//		await vnxManagerD3n6NnG.onlyAdmin.call({from: accounts[5]});
//		const addresspCyESau = await vnxManagerD3n6NnG.addBearer.call(addressWe5WRqU, uintY7J7KuE, {from: accounts[0]});
//		const boolAp0VQh2 = await vnxManagerD3n6NnG.hasRole.call(addressZdDK9H, uintgjDFAb2, {from: accounts[1]});
//		const uint256gCSgrQ6 = await vnxManagerD3n6NnG.totalRoles.call({from: accounts[2]});

		await expect(vnxManagerD3n6NnG.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerRPSfDND = await vnxManager.new({from: accounts[0]});
		const addressgcDOjFi = accounts[0]
//		await vnxManagerRPSfDND.onlyOwner.call({from: accounts[4]});
//		const addresse4uNCnU = await vnxManagerRPSfDND.transferOwnership.call(addressgcDOjFi, {from: accounts[0]});
//		await vnxManagerRPSfDND.onlyAdmin.call({from: accounts[2]});

		await expect(vnxManagerRPSfDND.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhFJukDx = await vnxManager.new({from: accounts[1]});
		const stringN2oPvdv = "jjOn4XVIdnKxAa1ONfOXYxxQpUjzCmctHcUoKIvvr4ROTmAKVqf3tc8MIVCXBLnrAn7wbXkU3kpUNoTjCSL3LeAge3KC"
		const stringbTAtuhW = "bw1xgFXAQGfqcGdopGK2Yd7q7XxfePxkbHQMNjgaR7T7u69DAmfumVxg9E1"
		const uint256PZTxPwe = await vnxManagerhFJukDx.totalRoles.call({from: accounts[2]});
		const boolGyhOPlL = await vnxManagerhFJukDx.isOwner.call({from: accounts[5]});
		const uint256HzOO5am = await vnxManagerhFJukDx.addRootRole.call(stringN2oPvdv, {from: accounts[4]});
		const addressbEOvTiu = await vnxManagerhFJukDx.owner.call({from: accounts[0]});
		const uint256CgHinB = await vnxManagerhFJukDx.addRootRole.call(stringbTAtuhW, {from: accounts[2]});

		assert.equal(addressbEOvTiu, 0x1Aa01A40e1918c3B43476CF2c8B9b3eE77199821)
		assert.equal(boolGyhOPlL, false)
		assert.equal(uint256CgHinB, BigInt("0"))
		assert.equal(uint256HzOO5am, BigInt("0"))
		assert.equal(uint256PZTxPwe, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerYV2I19M = await vnxManager.new({from: accounts[4]});
		const uintfy9B87m = BigInt("1579")
		const stringiO33bXf = "j8a8SK9C7ukZz4fUhd57GtRJpdNA0cJ8vishJHY6AyLUFCJpR3umYcFSBthhQzsdmRyWCI8LGGPen1iPSDO3r"
		const addressL5PMStj = accounts[3]
		const addressJhyALD2 = accounts[2]
//		const uint256lUPkc6 = await vnxManagerYV2I19M.addRole.call(stringiO33bXf, uintfy9B87m, {from: "0x0000000000000000000000000000000000000001"});
//		await vnxManagerYV2I19M.onlyOwner.call({from: accounts[0]});
//		const boolOEIFgpT = await vnxManagerYV2I19M.transferContractOwnership.call(addressJhyALD2, addressL5PMStj, {from: "0x0000000000000000000000000000000000000001"});
//		await vnxManagerYV2I19M.onlyAdmin.call({from: accounts[4]});

		await expect(vnxManagerYV2I19M.addRole.call(stringiO33bXf, uintfy9B87m, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerlwsMM95 = await vnxManager.new({from: accounts[3]});
		const uintZHumjWJ = BigInt("1772")
		const addressl6BFPJX = accounts[1]
		const boolPuy0tnC = await vnxManagerlwsMM95.isOwner.call({from: accounts[3]});
		const addressstLG1jk = await vnxManagerlwsMM95.owner.call({from: accounts[1]});
		const boolP2EaB6X = await vnxManagerlwsMM95.hasRole.call(addressl6BFPJX, uintZHumjWJ, {from: accounts[3]});
		const booliu4fyo = await vnxManagerlwsMM95.isOwner.call({from: accounts[3]});

		assert.equal(addressstLG1jk, 0x7Fb294D9890F10999CafadeFB6c41d00D5a66dE6)
		assert.equal(boolP2EaB6X, false)
		assert.equal(boolPuy0tnC, true)
		assert.equal(booliu4fyo, true)
	});

	it('test for vnxManager', async () => {
		const vnxManagerKJRfhgr = await vnxManager.new({from: accounts[5]});
		const addressqhArSG = accounts[0]
		const addressL4704Fe = accounts[0]
		const uintkSng43e = BigInt("2032")
		const addressdgv3Ftu = accounts[4]
//		const boolc37FLWU = await vnxManagerKJRfhgr.transferContractOwnership.call(addressL4704Fe, addressqhArSG, {from: accounts[2]});
//		const address5UqxMV = await vnxManagerKJRfhgr.addBearer.call(addressdgv3Ftu, uintkSng43e, {from: accounts[3]});

		await expect(vnxManagerKJRfhgr.transferContractOwnership.call(addressL4704Fe, addressqhArSG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManager9LDlwh = await vnxManager.new({from: accounts[0]});
		const uintl5gsGVF = BigInt("1067")
		const addressURkoiA = accounts[4]
		const boolOvcsIyu = await vnxManager9LDlwh.isOwner.call({from: accounts[2]});
//		const address8y5Xwl = await vnxManager9LDlwh.addBearer.call(addressURkoiA, uintl5gsGVF, {from: accounts[1]});
//		await vnxManager9LDlwh.onlyOwner.call({from: accounts[0]});

		assert.equal(boolOvcsIyu, false)
		await expect(vnxManager9LDlwh.addBearer.call(addressURkoiA, uintl5gsGVF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerGAYxjLn = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressw6jBvFp = "0x0000000000000000000000000000000000000001"
		const uintYMzHD9N = BigInt("1201")
		const addressTcOiRVw = accounts[3]
		const uint2562zHosC = await vnxManagerGAYxjLn.totalRoles.call({from: accounts[5]});
		const addressrIXO54R = await vnxManagerGAYxjLn.transferOwnership.call(addressw6jBvFp, {from: "0x0000000000000000000000000000000000000001"});
		const boolYaf579p = await vnxManagerGAYxjLn.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressNbvwVQu = await vnxManagerGAYxjLn.removeBearer.call(addressTcOiRVw, uintYMzHD9N, {from: accounts[2]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerKJRfhgr = await vnxManager.new({from: accounts[5]});
		const stringf5bLtQ9 = "j9Wl1MbTOkzhqUn6S9EV38ORwsQGJBdYYAuAigmTcH6SwBe2C9XK6WALQuqGY8SHN3YCuy91tfDdURMI"
		const uintfpD0Exo = BigInt("1420")
		const addressWaohxY = accounts[0]
		const uintTPstufN = BigInt("874")
		const addressbsjPNoB = accounts[1]
		const addresso1geAQu = accounts[0]
		const addressd7qjkbu = accounts[1]
		const uintkuepoB = BigInt("1094")
		const stringvfeEsbb = "1L31AUcIl"
		const uint256MfjCchg = await vnxManagerKJRfhgr.addRootRole.call(stringf5bLtQ9, {from: accounts[2]});
//		const addressmwyxLp8 = await vnxManagerKJRfhgr.removeBearer.call(addressWaohxY, uintfpD0Exo, {from: accounts[1]});
//		await vnxManagerKJRfhgr.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressyn51Ndr = await vnxManagerKJRfhgr.addBearer.call(addressbsjPNoB, uintTPstufN, {from: accounts[3]});
//		const boolc37FLWU = await vnxManagerKJRfhgr.transferContractOwnership.call(addressd7qjkbu, addresso1geAQu, {from: accounts[2]});
//		const uint256OHdgzpn = await vnxManagerKJRfhgr.addRole.call(stringvfeEsbb, uintkuepoB, {from: accounts[3]});

		assert.equal(uint256MfjCchg, BigInt("0"))
		await expect(vnxManagerKJRfhgr.removeBearer.call(addressWaohxY, uintfpD0Exo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerKJRfhgr = await vnxManager.new({from: accounts[5]});
		const addressAccjeu = accounts[0]
		const uintRZ8XnUD = BigInt("218")
		const addresseVt4xit = accounts[0]
		const addressjOw4l3P = accounts[0]
		const addressrFsUow5 = accounts[0]
		const addressqAdDz5g = await vnxManagerKJRfhgr.transferOwnership.call(addressAccjeu, {from: accounts[5]});
//		const addressNuMSxp3 = await vnxManagerKJRfhgr.addBearer.call(addresseVt4xit, uintRZ8XnUD, {from: accounts[2]});
//		const boolc37FLWU = await vnxManagerKJRfhgr.transferContractOwnership.call(addressrFsUow5, addressjOw4l3P, {from: accounts[2]});
//		await vnxManagerKJRfhgr.renounceOwnership.call({from: accounts[4]});

		await expect(vnxManagerKJRfhgr.addBearer.call(addresseVt4xit, uintRZ8XnUD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerKJRfhgr = await vnxManager.new({from: accounts[5]});
		const addressmRUkRM8 = accounts[1]
		const addressgpPob9d = accounts[0]
//		await vnxManagerKJRfhgr.renounceOwnership.call({from: accounts[5]});
//		const boolc37FLWU = await vnxManagerKJRfhgr.transferContractOwnership.call(addressgpPob9d, addressmRUkRM8, {from: accounts[2]});

		await expect(vnxManagerKJRfhgr.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerbVgDwLi = await vnxManager.new({from: accounts[3]});
		const addressKf3eh1r = accounts[5]
		const addressNPQoCvG = accounts[5]
//		const boolENhws9M = await vnxManagerbVgDwLi.transferContractOwnership.call(addressNPQoCvG, addressKf3eh1r, {from: accounts[3]});
//		const boolPtmfdFw = await vnxManagerbVgDwLi.isAdmin.call({from: accounts[5]});

		await expect(vnxManagerbVgDwLi.transferContractOwnership.call(addressNPQoCvG, addressKf3eh1r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})