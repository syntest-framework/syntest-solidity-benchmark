const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2mASfWi = await DmmControllerV2.new({from: accounts[0]});
		const uintjrGucqr = BigInt("628")
		const uintSxjiPol = BigInt("723")
		const addressgyfIkH = accounts[3]
		const addressEDh0qYJ = accounts[0]
		const 
Q6dYVQ = await DmmControllerV2mASfWi.adminDepositFunds.call(uintSxjiPol, uintjrGucqr, {from: "0x0000000000000000000000000000000000000001"});
		const addressnYlbK5z = await DmmControllerV2mASfWi.transferOwnership.call(addressgyfIkH, {from: accounts[3]});
		const addresseEFp2V5 = await DmmControllerV2mASfWi.setOffChainAssetValuator.call(addressEDh0qYJ, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspJHk5DH = accounts[1]
		const addressM58JB3J = accounts[3]
		const addresserWQUJY = accounts[5]
		const addresszITURNK = "0x0000000000000000000000000000000000000001"
		const addressyMfQ5ZV = accounts[3]
		const addressbK8BHzU = "0x0000000000000000000000000000000000000001"
		const addressctqT5GZ = accounts[2]
		const addressfScRnVT = accounts[0]
		const addressC1dzOso = accounts[4]
		const uint3Im3zs = BigInt("882")
		const uint9MvKmh = BigInt("838")
		const addresslwIPs0k = accounts[3]
		const DmmControllerV2AFUdNVA = await DmmControllerV2.new(addresspJHk5DH, addressM58JB3J, addresserWQUJY, addresszITURNK, addressyMfQ5ZV, addressbK8BHzU, addressctqT5GZ, addressfScRnVT, addressC1dzOso, uint3Im3zs, uint9MvKmh, addresslwIPs0k, {from: accounts[3]});
		const addressBdKnHnk = accounts[5]
		const addresstfo4zfu = accounts[5]
		const addressihpM8f = accounts[3]
		const addresslCfJQkq = await DmmControllerV2AFUdNVA.setDmmTokenFactory.call(addressBdKnHnk, {from: accounts[1]});
		const booleq3wgi = await DmmControllerV2AFUdNVA.isMarketEnabledByDmmTokenAddress.call(addresstfo4zfu, {from: accounts[5]});
		const addressLslLPq0 = await DmmControllerV2AFUdNVA.unBlacklist.call(addressihpM8f, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addresstrASr3s = accounts[4]
		const addressflA050u = accounts[1]
		const addressqU8NKoz = accounts[2]
		const addresspv4VCD = accounts[4]
		const addresszebEIZb = accounts[1]
		const addresss8tadlp = accounts[1]
		const addressBd7Vi9x = accounts[2]
		const addresswYPocql = accounts[2]
		const address1zOVXA = accounts[0]
		const uintqwB55i4 = BigInt("433")
		const uintNGBTt9 = BigInt("973")
		const addressB5KoPTI = accounts[1]
		const DmmControllerV20ruisg = await DmmControllerV2.new(addresstrASr3s, addressflA050u, addressqU8NKoz, addresspv4VCD, addresszebEIZb, addresss8tadlp, addressBd7Vi9x, addresswYPocql, address1zOVXA, uintqwB55i4, uintNGBTt9, addressB5KoPTI, {from: accounts[0]});
		await DmmControllerV20ruisg.requireIsFromAssetIntroducer.call({from: accounts[4]});
		await DmmControllerV20ruisg.renounceGuardian.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressyQbeyjp = accounts[3]
		const addressYrOoxvc = "0x0000000000000000000000000000000000000001"
		const addressW6JINkB = accounts[0]
		const addressvDobU0Q = accounts[0]
		const addressF2FExco = accounts[0]
		const addressBfWnmL3 = accounts[4]
		const addressTbgGq5E = accounts[1]
		const addressaYkWbBE = accounts[2]
		const address78Vdhs = accounts[0]
		const uintahMUPja = BigInt("889")
		const uint0i2m7d = BigInt("1672")
		const addressDVTV5Lg = accounts[1]
		const DmmControllerV2BUdmJDC = await DmmControllerV2.new(addressyQbeyjp, addressYrOoxvc, addressW6JINkB, addressvDobU0Q, addressF2FExco, addressBfWnmL3, addressTbgGq5E, addressaYkWbBE, address78Vdhs, uintahMUPja, uint0i2m7d, addressDVTV5Lg, {from: "0x0000000000000000000000000000000000000001"});
		const uintMPfiNxL = BigInt("842")
		const uintZRTlk2 = BigInt("1765")
		const uintuIrw5xT = BigInt("338")
		const address1x6HUj = accounts[1]
		const 
LKRFOe2 = await DmmControllerV2BUdmJDC.decreaseTotalSupply.call(uintZRTlk2, uintMPfiNxL, {from: accounts[3]});
		const uintarrayzdug6d = await DmmControllerV2BUdmJDC.getDmmTokenIds.call({from: accounts[0]});
		const uintse58DMq = await DmmControllerV2BUdmJDC.setMinReserveRatio.call(uintuIrw5xT, {from: accounts[2]});
		await DmmControllerV2BUdmJDC.whenPaused.call({from: accounts[4]});
		const 
bK5KViz = await DmmControllerV2BUdmJDC.transferOwnershipToNewController.call(address1x6HUj, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressrgmg89p = "0x0000000000000000000000000000000000000001"
		const addressYI7XATr = accounts[3]
		const addressGXppX4v = accounts[4]
		const addressUmls0U6 = accounts[2]
		const addresskqRQmc = "0x0000000000000000000000000000000000000001"
		const addressPzbAoIy = accounts[2]
		const addressJtxRj2o = accounts[3]
		const addressHIbJnie = accounts[5]
		const addressb4WB9ye = accounts[1]
		const uintKwGZOgG = BigInt("1735")
		const uintwrNO3aS = BigInt("1623")
		const addresswF2tlDk = accounts[1]
		const DmmControllerV2kuu8xf = await DmmControllerV2.new(addressrgmg89p, addressYI7XATr, addressGXppX4v, addressUmls0U6, addresskqRQmc, addressPzbAoIy, addressJtxRj2o, addressHIbJnie, addressb4WB9ye, uintKwGZOgG, uintwrNO3aS, addresswF2tlDk, {from: accounts[1]});
		const addressRVWHUNa = accounts[2]
		const uintYbhF3ay = BigInt("1526")
		const uintEmtJoIV = BigInt("1811")
		const addressIPu0nF0 = await DmmControllerV2kuu8xf.getDmmTokenForUnderlying.call(addressRVWHUNa, {from: accounts[3]});
		const uintScuEjNR = await DmmControllerV2kuu8xf.requireIsValidNft.call(uintYbhF3ay, {from: accounts[4]});
		const boolnR9JRE = await DmmControllerV2kuu8xf.isMarketEnabledByDmmTokenId.call(uintEmtJoIV, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressnd2107y = accounts[4]
		const addresstNDHQPQ = accounts[0]
		const addressJ3gMEjB = accounts[2]
		const addressT7HiogP = accounts[2]
		const addressrak9ux5 = accounts[3]
		const addresstmlJvuS = accounts[2]
		const addressjOfvFY9 = accounts[3]
		const addressZqCe2F = accounts[0]
		const addressijqQkqX = accounts[4]
		const uintMqxTp01 = BigInt("573")
		const uintTpXyBu = BigInt("342")
		const addressA2v3fUd = accounts[0]
		const DmmControllerV2yk69aae = await DmmControllerV2.new(addressnd2107y, addresstNDHQPQ, addressJ3gMEjB, addressT7HiogP, addressrak9ux5, addresstmlJvuS, addressjOfvFY9, addressZqCe2F, addressijqQkqX, uintMqxTp01, uintTpXyBu, addressA2v3fUd, {from: accounts[1]});
		const addressnHJnQLe = accounts[2]
		const addresswhK496e = accounts[0]
		const addressJ5Wjy6t = accounts[0]
		const addressMIo3EwN = accounts[5]
		const addressKUefCXw = await DmmControllerV2yk69aae.owner.call({from: accounts[1]});
		const addresstqjhkNy = await DmmControllerV2yk69aae.transferOwnership.call(addressnHJnQLe, {from: accounts[2]});
		const addressbI51XHP = await DmmControllerV2yk69aae.transferOwnership.call(addresswhK496e, {from: accounts[2]});
		const addressjnzAJKX = await DmmControllerV2yk69aae.unBlacklist.call(addressJ5Wjy6t, {from: accounts[3]});
		const uintG6LEapB = await DmmControllerV2yk69aae.getInterestRateByUnderlyingTokenAddress.call(addressMIo3EwN, {from: accounts[4]});
	});
})