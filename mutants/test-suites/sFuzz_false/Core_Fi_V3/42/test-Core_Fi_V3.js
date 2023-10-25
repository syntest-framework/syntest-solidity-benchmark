const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3RuCmgzC = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLuhv6Z6 = BigInt("2015")
		const addressYTT1YPW = accounts[3]
		const addressEwZgf03 = accounts[0]
		const uintsHR42D0 = BigInt("1581")
		const addressa4NhjBm = accounts[3]
		const addressw5EoKjm = accounts[1]
		const uintzlqSXTS = BigInt("65")
		const addressGAgFCgx = accounts[2]
		const addresskyiLoLt = accounts[1]
		const addressVXMxalo = accounts[3]
		const boolzWyfj7b = await Core_Fi_V3RuCmgzC.transferFrom.call(addressEwZgf03, addressYTT1YPW, uintLuhv6Z6, {from: accounts[4]});
		const booluPRUi2O = await Core_Fi_V3RuCmgzC.transferFrom.call(addressw5EoKjm, addressa4NhjBm, uintsHR42D0, {from: accounts[5]});
		const boolvecT0PD = await Core_Fi_V3RuCmgzC.transferFrom.call(addresskyiLoLt, addressGAgFCgx, uintzlqSXTS, {from: accounts[1]});
		const uint256yU5dgr = await Core_Fi_V3RuCmgzC.balanceOf.call(addressVXMxalo, {from: accounts[3]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3FrOcgm = await Core_Fi_V3.new({from: accounts[4]});
		const addressE1vd7UK = accounts[1]
		const addressp9io05M = accounts[2]
		const uintzUeuFwp = await Core_Fi_V3FrOcgm.allowance.call(addressp9io05M, addressE1vd7UK, {from: accounts[1]});
		const uint256V02jKw2 = await Core_Fi_V3FrOcgm.totalSupply.call({from: accounts[2]});

		assert.equal(uint256V02jKw2, BigInt("84000000000000000000000"))
		assert.equal(uintzUeuFwp, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Ce8VoB8 = await Core_Fi_V3.new({from: accounts[5]});
		const addressmr5GWN = accounts[1]
		const addressg6er5E8 = accounts[3]
		const uintcY7Rg2Y = BigInt("1862")
		const addresspeQr7SS = accounts[2]
		const addressBpvZi1g = accounts[2]
		const addressQbInvLC = accounts[2]
		const uint256w00DE76 = await Core_Fi_V3Ce8VoB8.totalSupply.call({from: accounts[3]});
		const uintdzH6zbf = await Core_Fi_V3Ce8VoB8.allowance.call(addressg6er5E8, addressmr5GWN, {from: accounts[3]});
		const boolgS44jC9 = await Core_Fi_V3Ce8VoB8.transfer.call(addresspeQr7SS, uintcY7Rg2Y, {from: accounts[3]});
		const uintBdZk3Xn = await Core_Fi_V3Ce8VoB8.allowance.call(addressQbInvLC, addressBpvZi1g, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolgS44jC9, false)
		assert.equal(uint256w00DE76, BigInt("84000000000000000000000"))
		assert.equal(uintBdZk3Xn, BigInt("0"))
		assert.equal(uintdzH6zbf, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3oEO753N = await Core_Fi_V3.new({from: accounts[1]});
		const addressYL34faZ = accounts[2]
		const addressvlywrRt = accounts[3]
		const uintDuuZWlS = BigInt("1967")
		const addressx6RCAUB = accounts[4]
		const addressaOkvxYd = accounts[3]
		const addressvipt4QS = accounts[2]
		const addressrnmvG1 = accounts[0]
		const uintghEnfj = BigInt("1068")
		const addressm1rDAQX = accounts[3]
		const uint256FesgCKg = await Core_Fi_V3oEO753N.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintqRFaKtV = await Core_Fi_V3oEO753N.allowance.call(addressvlywrRt, addressYL34faZ, {from: accounts[4]});
		const boold2phTUW = await Core_Fi_V3oEO753N.transferFrom.call(addressaOkvxYd, addressx6RCAUB, uintDuuZWlS, {from: accounts[4]});
		const uintUTjZTUM = await Core_Fi_V3oEO753N.allowance.call(addressrnmvG1, addressvipt4QS, {from: accounts[1]});
		const boolXAYjt0X = await Core_Fi_V3oEO753N.approve.call(addressm1rDAQX, uintghEnfj, {from: accounts[1]});

		assert.equal(boolXAYjt0X, true)
		assert.equal(boold2phTUW, false)
		assert.equal(uint256FesgCKg, BigInt("84000000000000000000000"))
		assert.equal(uintUTjZTUM, BigInt("0"))
		assert.equal(uintqRFaKtV, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3UHTjI0l = await Core_Fi_V3.new({from: accounts[0]});
		const uintNxLhxM = BigInt("1148")
		const addressolqHG7s = accounts[4]
		const addressBxwiFCL = accounts[1]
		const addressrMFiqKm = accounts[0]
		const uintkwSMzR = BigInt("401")
		const addressUHe9bRS = accounts[0]
		const uintdGJQVck = BigInt("2034")
		const addressPkP7wPi = accounts[4]
		const addressK2KDUQ9 = accounts[0]
		const boolIHv7XBh = await Core_Fi_V3UHTjI0l.transferFrom.call(addressBxwiFCL, addressolqHG7s, uintNxLhxM, {from: accounts[2]});
		const uint256NhiuwkE = await Core_Fi_V3UHTjI0l.balanceOf.call(addressrMFiqKm, {from: accounts[4]});
		const boolR6kKNz7 = await Core_Fi_V3UHTjI0l.approve.call(addressUHe9bRS, uintkwSMzR, {from: accounts[2]});
		const boolTfsJvov = await Core_Fi_V3UHTjI0l.transfer.call(addressPkP7wPi, uintdGJQVck, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TBGyXLl = await Core_Fi_V3UHTjI0l.balanceOf.call(addressK2KDUQ9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIHv7XBh, false)
		assert.equal(boolR6kKNz7, true)
		assert.equal(boolTfsJvov, false)
		assert.equal(uint256NhiuwkE, BigInt("84000000000000000000000"))
		assert.equal(uint256TBGyXLl, BigInt("84000000000000000000000"))
	});
})