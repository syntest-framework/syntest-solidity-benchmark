const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractXPiS82a = await HTDD_contract.new({from: accounts[2]});
		const uintArtPIly = BigInt("459")
		const addressT1zEvJ5 = accounts[3]
		const uintKLcwrga = BigInt("851")
		const addressW01Wjsa = accounts[1]
		const addressCz83v7S = accounts[0]
		const addressTHPQRUZ = accounts[3]
		const uintblEV3HX = BigInt("139")
		const address93TIHc = accounts[1]
		const addressTRY7zcn = accounts[2]
//		const boolMwhGjHd = await HTDD_contractXPiS82a.transfer.call(addressT1zEvJ5, uintArtPIly, {from: accounts[5]});
//		const boolJuEEhDo = await HTDD_contractXPiS82a.approve.call(addressW01Wjsa, uintKLcwrga, {from: accounts[4]});
//		const uint256CFplDws = await HTDD_contractXPiS82a.allowance.call(addressTHPQRUZ, addressCz83v7S, {from: accounts[2]});
//		const boolH1rpYKA = await HTDD_contractXPiS82a.transferFrom.call(addressTRY7zcn, address93TIHc, uintblEV3HX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractXPiS82a.transfer.call(addressT1zEvJ5, uintArtPIly, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractM20ZP7y = await HTDD_contract.new({from: accounts[1]});
		const uintAu3QQkF = BigInt("1484")
		const addressdodKiBY = accounts[0]
		const addressVcDffzJ = accounts[2]
		const uintbyETHPB = BigInt("912")
		const addressoK6FI1 = accounts[4]
		const addressBbrETU8 = accounts[1]
		const uintxcNcQH = BigInt("50")
		const addresspm08Tbi = accounts[1]
		const addressTF6qVAP = accounts[1]
		const addressq7fPWha = accounts[5]
		const addresstW11Pm9 = accounts[2]
		const uintgx35KC9 = BigInt("588")
		const addressbz3tsUX = accounts[1]
		const addressYl6Prh3 = accounts[5]
//		const boolLpgrhCo = await HTDD_contractM20ZP7y.transferFrom.call(addressVcDffzJ, addressdodKiBY, uintAu3QQkF, {from: accounts[3]});
//		const boolqkTKKnj = await HTDD_contractM20ZP7y.transferFrom.call(addressBbrETU8, addressoK6FI1, uintbyETHPB, {from: accounts[0]});
//		const boolEMwiJn7 = await HTDD_contractM20ZP7y.transferFrom.call(addressTF6qVAP, addresspm08Tbi, uintxcNcQH, {from: accounts[3]});
//		const uint256nRdW2U = await HTDD_contractM20ZP7y.allowance.call(addresstW11Pm9, addressq7fPWha, {from: "0x0000000000000000000000000000000000000001"});
//		const boolk8P0Wfy = await HTDD_contractM20ZP7y.transferFrom.call(addressYl6Prh3, addressbz3tsUX, uintgx35KC9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractM20ZP7y.transferFrom.call(addressVcDffzJ, addressdodKiBY, uintAu3QQkF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractupaLfOh = await HTDD_contract.new({from: accounts[0]});
		const uintjU8KK0M = BigInt("203")
		const addressk3hjix5 = accounts[2]
		const uinthWUNvPz = BigInt("1393")
		const addressTOjJc51 = accounts[2]
		const addressRSeGiql = accounts[3]
		const uintPvzrU4v = BigInt("1878")
		const addressOx08eFE = accounts[5]
		const addresssMKAgl3 = accounts[2]
		const uintMO7bozR = BigInt("1584")
		const addressVcOEKbf = accounts[2]
		const addresszj34UlX = accounts[2]
		const boolYv0eNsa = await HTDD_contractupaLfOh.approve.call(addressk3hjix5, uintjU8KK0M, {from: accounts[3]});
//		const booleHqwHh0 = await HTDD_contractupaLfOh.transferFrom.call(addressRSeGiql, addressTOjJc51, uinthWUNvPz, {from: accounts[0]});
//		const boolufa9lf = await HTDD_contractupaLfOh.transferFrom.call(addresssMKAgl3, addressOx08eFE, uintPvzrU4v, {from: accounts[2]});
//		const boolkuZM5Wa = await HTDD_contractupaLfOh.transferFrom.call(addresszj34UlX, addressVcOEKbf, uintMO7bozR, {from: accounts[3]});

		assert.equal(boolYv0eNsa, true)
		await expect(HTDD_contractupaLfOh.transferFrom.call(addressRSeGiql, addressTOjJc51, uinthWUNvPz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contracthJGQvhp = await HTDD_contract.new({from: accounts[4]});
		const uintYfJnYtx = BigInt("1883")
		const addressCuRPHwS = accounts[2]
		const addressoDvKkoP = accounts[0]
		const addressV9Pip21 = accounts[4]
		const uintIvkNT0c = BigInt("805")
		const addressBN0tU0y = accounts[2]
		const addresspxAuRJB = accounts[0]
		const addresshUZBqp = accounts[2]
		const boolzUvA7b3 = await HTDD_contracthJGQvhp.approve.call(addressCuRPHwS, uintYfJnYtx, {from: accounts[0]});
		const uint256cUTuaGf = await HTDD_contracthJGQvhp.allowance.call(addressV9Pip21, addressoDvKkoP, {from: accounts[3]});
//		const bools4CCjV = await HTDD_contracthJGQvhp.transfer.call(addressBN0tU0y, uintIvkNT0c, {from: accounts[1]});
//		const uint256RwLaae = await HTDD_contracthJGQvhp.allowance.call(addresshUZBqp, addresspxAuRJB, {from: accounts[3]});

		assert.equal(boolzUvA7b3, true)
		assert.equal(uint256cUTuaGf, BigInt("0"))
		await expect(HTDD_contracthJGQvhp.transfer.call(addressBN0tU0y, uintIvkNT0c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contract1vJehm = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUQZgbpE = BigInt("643")
		const addressJ4bNsSt = accounts[4]
		const uintcTLU8jD = BigInt("429")
		const addressXYwrZQN = accounts[5]
		const addressUHjCofc = accounts[2]
		const uintgP2TM7m = BigInt("1810")
		const addressb80dGrI = accounts[3]
		const addressFU3yXm2 = accounts[4]
		const boolrfNFExx = await HTDD_contract1vJehm.approve.call(addressJ4bNsSt, uintUQZgbpE, {from: accounts[3]});
		const boolY1SKBGF = await HTDD_contract1vJehm.transferFrom.call(addressUHjCofc, addressXYwrZQN, uintcTLU8jD, {from: accounts[1]});
		const booltJLtK5h = await HTDD_contract1vJehm.transferFrom.call(addressFU3yXm2, addressb80dGrI, uintgP2TM7m, {from: accounts[0]});
	});
})