const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinvikQQk4 = await MetaCoin.new({from: accounts[5]});
		const uintLpt4YQm = BigInt("437")
		const addressg9k9iBg = accounts[2]
		const uintmE2QHbu = BigInt("962")
		const addressRjaHCBP = accounts[0]
		const bool3TaW8b = await MetaCoinvikQQk4.sendCoin.call(addressg9k9iBg, uintLpt4YQm, {from: accounts[0]});
		const boolHkcV0LY = await MetaCoinvikQQk4.sendCoin.call(addressRjaHCBP, uintmE2QHbu, {from: accounts[5]});

		assert.equal(bool3TaW8b, false)
		assert.equal(boolHkcV0LY, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinxkpyUs4 = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBgXXRar = BigInt("1012")
		const addressE7MoYDm = accounts[0]
		const uintUtKfxPA = BigInt("1906")
		const addressGFAhgVT = accounts[5]
		const uintXmFIVTD = BigInt("77")
		const addressjqbCeCt = accounts[1]
		const uintyEjcS2d = BigInt("135")
		const addressSLRqtxQ = accounts[2]
		const uintEVFpg5k = BigInt("1300")
		const addressHvCQVK = accounts[5]
		const boolvkHTzx6 = await MetaCoinxkpyUs4.sendCoin.call(addressE7MoYDm, uintBgXXRar, {from: accounts[5]});
		const boolKS304jr = await MetaCoinxkpyUs4.sendCoin.call(addressGFAhgVT, uintUtKfxPA, {from: accounts[0]});
		const boolZmgZgLJ = await MetaCoinxkpyUs4.sendCoin.call(addressjqbCeCt, uintXmFIVTD, {from: accounts[4]});
		const boolgnXy0m7 = await MetaCoinxkpyUs4.sendCoin.call(addressSLRqtxQ, uintyEjcS2d, {from: accounts[1]});
		const boolvH5XR6d = await MetaCoinxkpyUs4.sendCoin.call(addressHvCQVK, uintEVFpg5k, {from: accounts[3]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoin4S0wiF = await MetaCoin.new({from: accounts[2]});
		const uintvNA8Ear = BigInt("515")
		const addressi87jgwz = accounts[2]
		const uintplg5tDX = BigInt("1065")
		const addressTJ12hUp = accounts[1]
		const uintgA5oOzw = BigInt("0")
		const addressX42kgFQ = accounts[0]
		const uinttpjMUKM = BigInt("1537")
		const addresswl3zLj = accounts[1]
		const uintx90Q7dV = BigInt("1703")
		const addressN36GzjN = accounts[2]
		const uintxRVv18 = BigInt("1085")
		const addressgGicWwy = accounts[0]
		const uintEY1GAmJ = BigInt("151")
		const addressLw7SHVY = accounts[2]
		const uintHIPj0zL = BigInt("338")
		const addressBjG88br = accounts[4]
		const uintCtra9ro = BigInt("29")
		const addressoNfUaf = accounts[2]
		const uintRe4UG7K = BigInt("2061")
		const addresssBPFwOW = accounts[0]
		const boolXJ8ErWV = await MetaCoin4S0wiF.sendCoin.call(addressi87jgwz, uintvNA8Ear, {from: accounts[1]});
		const boolpZQlXp2 = await MetaCoin4S0wiF.sendCoin.call(addressTJ12hUp, uintplg5tDX, {from: accounts[2]});
		const boolz8EHWlU = await MetaCoin4S0wiF.sendCoin.call(addressX42kgFQ, uintgA5oOzw, {from: accounts[1]});
		const boolagx2MCU = await MetaCoin4S0wiF.sendCoin.call(addresswl3zLj, uinttpjMUKM, {from: accounts[2]});
		const boolUjg4jzx = await MetaCoin4S0wiF.sendCoin.call(addressN36GzjN, uintx90Q7dV, {from: accounts[3]});
		const booleuO0n8N = await MetaCoin4S0wiF.sendCoin.call(addressgGicWwy, uintxRVv18, {from: accounts[1]});
		const boolHhgaljk = await MetaCoin4S0wiF.sendCoin.call(addressLw7SHVY, uintEY1GAmJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolhxis1Uz = await MetaCoin4S0wiF.sendCoin.call(addressBjG88br, uintHIPj0zL, {from: accounts[1]});
		const boolFPnZYM = await MetaCoin4S0wiF.sendCoin.call(addressoNfUaf, uintCtra9ro, {from: accounts[2]});
		const boolJqAKAnD = await MetaCoin4S0wiF.sendCoin.call(addresssBPFwOW, uintRe4UG7K, {from: accounts[2]});

		assert.equal(boolFPnZYM, true)
		assert.equal(boolHhgaljk, false)
		assert.equal(boolJqAKAnD, true)
		assert.equal(boolUjg4jzx, false)
		assert.equal(boolXJ8ErWV, false)
		assert.equal(boolagx2MCU, true)
		assert.equal(booleuO0n8N, false)
		assert.equal(boolhxis1Uz, false)
		assert.equal(boolpZQlXp2, true)
		assert.equal(boolz8EHWlU, true)
	});
})