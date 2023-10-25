const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractaoZvlFZ = await HTDD_contract.new({from: accounts[2]});
		const addressoKTynxp = accounts[2]
		const addressd1Nq5d = accounts[1]
		const uintCPAU8h = BigInt("642")
		const addressb8yOMc = accounts[5]
		const uintGraCx2q = BigInt("149")
		const addressFu0Mpe9 = accounts[2]
		const addressEXegspH = accounts[1]
		const addresssDBAquy = accounts[1]
		const addressSNLkh0 = accounts[4]
		const uint256Vfggjen = await HTDD_contractaoZvlFZ.allowance.call(addressd1Nq5d, addressoKTynxp, {from: accounts[2]});
		const boolwptfZoN = await HTDD_contractaoZvlFZ.approve.call(addressb8yOMc, uintCPAU8h, {from: accounts[1]});
//		const booliuq9JMC = await HTDD_contractaoZvlFZ.transferFrom.call(addressEXegspH, addressFu0Mpe9, uintGraCx2q, {from: accounts[4]});
//		const uint256hHYaLxN = await HTDD_contractaoZvlFZ.allowance.call(addressSNLkh0, addresssDBAquy, {from: accounts[1]});

		assert.equal(boolwptfZoN, true)
		assert.equal(uint256Vfggjen, BigInt("0"))
		await expect(HTDD_contractaoZvlFZ.transferFrom.call(addressEXegspH, addressFu0Mpe9, uintGraCx2q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractRHToRzv = await HTDD_contract.new({from: accounts[3]});
		const uinti51IEev = BigInt("2000")
		const address3CWGHZ = accounts[5]
		const uintCMDqWau = BigInt("915")
		const addresswLnJZ9b = accounts[3]
		const addressTFtW5yT = accounts[1]
		const addressG9yzX8Z = "0x0000000000000000000000000000000000000001"
		const uintybJQP2 = BigInt("1345")
		const addressktcAufG = accounts[2]
		const uintc3xYGi = BigInt("1066")
		const addresse8ZIf8Q = accounts[5]
//		const boolKAavcBu = await HTDD_contractRHToRzv.transfer.call(address3CWGHZ, uinti51IEev, {from: accounts[0]});
//		const boolm4f1nQx = await HTDD_contractRHToRzv.approve.call(addresswLnJZ9b, uintCMDqWau, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VwiCyxG = await HTDD_contractRHToRzv.allowance.call(addressG9yzX8Z, addressTFtW5yT, {from: accounts[3]});
//		const boolcNAzIIT = await HTDD_contractRHToRzv.approve.call(addressktcAufG, uintybJQP2, {from: accounts[1]});
//		const boolF8R3UIn = await HTDD_contractRHToRzv.approve.call(addresse8ZIf8Q, uintc3xYGi, {from: accounts[4]});

		await expect(HTDD_contractRHToRzv.transfer.call(address3CWGHZ, uinti51IEev, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractzWgEcDw = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSSVMkpG = BigInt("1640")
		const addressXSmHajW = accounts[3]
		const addresst4274bO = accounts[1]
		const uintLArz0ph = BigInt("1375")
		const addressc9dhAP8 = accounts[2]
		const addresszCZ4eN0 = accounts[1]
		const uintlm2aoFV = BigInt("248")
		const addresstFqiWPp = accounts[4]
		const addressDQIUmCt = accounts[2]
		const bool5SfAEl = await HTDD_contractzWgEcDw.transferFrom.call(addresst4274bO, addressXSmHajW, uintSSVMkpG, {from: accounts[4]});
		const booldUdwwF = await HTDD_contractzWgEcDw.transferFrom.call(addresszCZ4eN0, addressc9dhAP8, uintLArz0ph, {from: accounts[4]});
		const boolbGhKOye = await HTDD_contractzWgEcDw.transferFrom.call(addressDQIUmCt, addresstFqiWPp, uintlm2aoFV, {from: accounts[0]});
	});
})