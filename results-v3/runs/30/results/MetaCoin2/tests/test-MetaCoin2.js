const MetaCoin2 = artifacts.require("MetaCoin2");
const ConvertLib = artifacts.require("ConvertLib");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin2', (accounts) => {
	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2eVrfz1R = await MetaCoin2.new({from: accounts[5]});
		const uintuSAiHrD = BigInt("1958")
		const addressKMXame = accounts[3]
		const addressoEsAIyN = accounts[2]
		const addressiFBDokU = accounts[2]
		const uintPw9fX7 = BigInt("1455")
		const addressuNa2Tf0 = accounts[0]
		const boolrkGLULF = await MetaCoin2eVrfz1R.sendCoin.call(addressKMXame, uintuSAiHrD, {from: accounts[1]});
		const uintW576O2 = await MetaCoin2eVrfz1R.getBalanceInEth.call(addressoEsAIyN, {from: accounts[2]});
		const uintO9fCf1e = await MetaCoin2eVrfz1R.getBalanceInEth.call(addressiFBDokU, {from: accounts[1]});
		const boolBVvKcXA = await MetaCoin2eVrfz1R.sendCoin.call(addressuNa2Tf0, uintPw9fX7, {from: accounts[3]});

		assert.equal(boolBVvKcXA, false)
		assert.equal(boolrkGLULF, false)
		assert.equal(uintO9fCf1e, BigInt("0"))
		assert.equal(uintW576O2, BigInt("0"))
	});

	it('test for MetaCoin2', async () => {
		const lib0 = await ConvertLib.new();
		await MetaCoin2.link('ConvertLib', lib0.address);

		const MetaCoin2sVUN8sX = await MetaCoin2.new({from: accounts[1]});
		const addressBbAqtDg = accounts[0]
		const addressjDCA4Hw = accounts[4]
		const uintKeQQTZQ = BigInt("997")
		const addressBum4lG = accounts[5]
		const addressEHTNU00 = accounts[1]
		const uintJO6JuVT = await MetaCoin2sVUN8sX.getBalanceInEth.call(addressBbAqtDg, {from: accounts[1]});
		const uintUUPlxM = await MetaCoin2sVUN8sX.getBalance.call(addressjDCA4Hw, {from: accounts[3]});
		const boolk9iMaPA = await MetaCoin2sVUN8sX.sendCoin.call(addressBum4lG, uintKeQQTZQ, {from: accounts[1]});
		const uintKWjO1ar = await MetaCoin2sVUN8sX.getBalanceInEth.call(addressEHTNU00, {from: accounts[3]});

		assert.equal(boolk9iMaPA, true)
		assert.equal(uintJO6JuVT, BigInt("0"))
		assert.equal(uintKWjO1ar, BigInt("20000"))
		assert.equal(uintUUPlxM, BigInt("0"))
	});
})