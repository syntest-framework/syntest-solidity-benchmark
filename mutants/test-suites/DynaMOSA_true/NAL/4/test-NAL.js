const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringp69glR = "0jLyvb58cKszYRNb8qJTUoSmXEeD4weJZoqaFhDgX7uamoB2obpF4kH"
		const stringwBxdmU = "1U5bsnuDWeFrkFj4chLM9dhbu9ygDZiHvTLRX0MWVsgNHMTHFpQwsAWwz4a1qnjpR1O3KjFPWzSEIWqamqGwCLDq7"
		const uintnEpmxbP = BigInt("103")
		const NALnV7iYxL = await NAL.new(stringp69glR, stringwBxdmU, uintnEpmxbP, {from: accounts[0]});
		const uintje5DltE = BigInt("1329")
		const addressaawIIKl = accounts[3]
		const uintNDwHnPN = BigInt("650")
		const addressB9uiYjm = accounts[2]
		const addressuJap1pG = accounts[1]
		const addressfndFUuU = accounts[1]
		const boolud3mkmC = await NALnV7iYxL.transfer.call(addressaawIIKl, uintje5DltE, {from: accounts[3]});
		const addresssrt8Tov = await NALnV7iYxL.burnFrom.call(addressB9uiYjm, uintNDwHnPN, {from: accounts[0]});
		const addresslBDshC = await NALnV7iYxL.transferOwnership.call(addressuJap1pG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CW7yFFB = await NALnV7iYxL.balanceOf.call(addressfndFUuU, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALiLMy18w = await NAL.new({from: accounts[1]});
		const uinttQN41Wg = BigInt("1341")
		const addressaWkCx9L = accounts[2]
		const uintI46P9Nv = BigInt("412")
		const addressDdJrD4g = accounts[3]
		const addresss7bRgQz = accounts[2]
		const addressr0qSgf1 = accounts[4]
//		const boolXYBl9pG = await NALiLMy18w.unlock.call(addressaWkCx9L, uinttQN41Wg, {from: accounts[3]});
//		const boolaOVX5PZ = await NALiLMy18w.increaseAllowance.call(addressDdJrD4g, uintI46P9Nv, {from: accounts[4]});
//		const boolw5pMVfu = await NALiLMy18w.freezeAccount.call(addresss7bRgQz, {from: accounts[1]});
//		const addressLHyWKXp = await NALiLMy18w.removeAdmin.call(addressr0qSgf1, {from: accounts[1]});

		await expect(NALiLMy18w.unlock.call(addressaWkCx9L, uinttQN41Wg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALMdBQTyP = await NAL.new({from: accounts[0]});
		const uintXQuBrZ6 = BigInt("193")
		const addressrpKZmbJ = accounts[3]
		const addressVRiGg9 = accounts[2]
		const uintd8SkHLc = BigInt("986")
		const addressvG2LGO8 = accounts[0]
		const uintBYzmx4F = BigInt("922")
//		const addressI0FCKD6 = await NALMdBQTyP.burnFrom.call(addressrpKZmbJ, uintXQuBrZ6, {from: accounts[2]});
//		const addressl4Nn4Xj = await NALMdBQTyP.addAdmin.call(addressVRiGg9, {from: accounts[1]});
//		const boolCksMb90 = await NALMdBQTyP.increaseAllowance.call(addressvG2LGO8, uintd8SkHLc, {from: accounts[0]});
//		const uint256E59kKpF = await NALMdBQTyP.burn.call(uintBYzmx4F, {from: accounts[4]});

		await expect(NALMdBQTyP.burnFrom.call(addressrpKZmbJ, uintXQuBrZ6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALP4yuQp6 = await NAL.new({from: accounts[2]});
		const uintKgvhtZC = BigInt("1844")
		const addressfcVChAI = accounts[0]
		const addresszmwCtqm = accounts[3]
		const uinttcvac58 = BigInt("932")
		const addresscuHcT5w = accounts[2]
		const addressLj6J7nq = "0x0000000000000000000000000000000000000001"
		const addressbPCein9 = accounts[0]
//		await NALP4yuQp6.renounceAdmin.call({from: accounts[2]});
//		const boolDxbhpxb = await NALP4yuQp6.decreaseAllowance.call(addressfcVChAI, uintKgvhtZC, {from: accounts[0]});
//		const addressi2i0ipD = await NALP4yuQp6.removeAdmin.call(addresszmwCtqm, {from: accounts[4]});
//		const boolWbN6Wwo = await NALP4yuQp6.transferFrom.call(addressLj6J7nq, addresscuHcT5w, uinttcvac58, {from: accounts[2]});
//		const uint256h6S17tY = await NALP4yuQp6.totalSupply.call({from: accounts[2]});
//		const addressW0ZlhPw = await NALP4yuQp6.transferOwnership.call(addressbPCein9, {from: accounts[1]});

		await expect(NALP4yuQp6.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressiYy1vS = accounts[2]
		const uintWmBidy = BigInt("1571")
		const addressWzntgvl = accounts[3]
		const booleF4AgvY = await NALm4SIYnK.isOwner.call(addressiYy1vS, {from: accounts[5]});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressWzntgvl, uintWmBidy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleF4AgvY, false)
		assert.equal(boolf3qVGxe, true)
	});

	it('test for NAL', async () => {
		const NALT0nQT1f = await NAL.new({from: accounts[5]});
		const addressijGMzCr = accounts[3]
		const uintnOofbqn = BigInt("1825")
		const addressoM0EURS = accounts[1]
		const addressswz4rWK = accounts[1]
		const uintS0X6GNK = BigInt("854")
		const addressGCR1gMh = accounts[1]
		const boolR6CXy29 = await NALT0nQT1f.isOwner.call(addressijGMzCr, {from: accounts[4]});
		const boolanySs6u = await NALT0nQT1f.increaseAllowance.call(addressoM0EURS, uintnOofbqn, {from: accounts[3]});
		const uint256ncKIcz = await NALT0nQT1f.balanceOf.call(addressswz4rWK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWjC5gV3 = await NALT0nQT1f.transfer.call(addressGCR1gMh, uintS0X6GNK, {from: accounts[3]});

		assert.equal(boolR6CXy29, false)
		assert.equal(boolanySs6u, true)
		assert.equal(uint256ncKIcz, BigInt("0"))
		await expect(NALT0nQT1f.transfer.call(addressGCR1gMh, uintS0X6GNK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressI7nfu6J = accounts[2]
		const uinte3PxMiR = BigInt("1006")
		const addressbLWcP4W = accounts[3]
		const uintPBZfrjm = BigInt("610")
		const addressMFJpLRH = accounts[3]
		const booleF4AgvY = await NALm4SIYnK.isOwner.call(addressI7nfu6J, {from: accounts[5]});
		const boolKpCz6r9 = await NALm4SIYnK.transfer.call(addressbLWcP4W, uinte3PxMiR, {from: accounts[3]});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressMFJpLRH, uintPBZfrjm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKpCz6r9, true)
		assert.equal(booleF4AgvY, false)
		assert.equal(boolf3qVGxe, true)
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressMEkwZeH = accounts[3]
		const addressB8mvCSL = accounts[1]
		const uintvfxSBo8 = BigInt("1571")
		const addressVzS3owX = accounts[3]
		const booleF4AgvY = await NALm4SIYnK.isOwner.call(addressMEkwZeH, {from: accounts[5]});
//		const addressOkM8Y2x = await NALm4SIYnK.notFrozen.call(addressB8mvCSL, {from: accounts[3]});
//		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressVzS3owX, uintvfxSBo8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleF4AgvY, true)
		await expect(NALm4SIYnK.notFrozen.call(addressB8mvCSL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addresszDwyr6t = accounts[2]
		const uintc6BUK3G = BigInt("284")
		const addressP9nYsg6 = accounts[1]
		const addressVBL6J1G = accounts[2]
		const addresskZ5h5K = accounts[1]
		const uintcYWooPh = BigInt("1571")
		const addressfiB2xWv = accounts[3]
		const booleF4AgvY = await NALm4SIYnK.isOwner.call(addresszDwyr6t, {from: accounts[5]});
//		const boolvXUHpIv = await NALm4SIYnK.transferFrom.call(addressVBL6J1G, addressP9nYsg6, uintc6BUK3G, {from: accounts[0]});
//		const boolxi6MRCg = await NALm4SIYnK.isAdmin.call(addresskZ5h5K, {from: accounts[3]});
//		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressfiB2xWv, uintcYWooPh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleF4AgvY, false)
		await expect(NALm4SIYnK.transferFrom.call(addressVBL6J1G, addressP9nYsg6, uintc6BUK3G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressS9GELzn = accounts[3]
		const addressEpxHi9E = accounts[2]
		const uintTium5y = BigInt("946")
		const addresslQNoRWO = accounts[4]
		const stringOHweVNe = await NALm4SIYnK.name.call({from: accounts[1]});
//		const addressbaLvES = await NALm4SIYnK.transferOwnership.call(addressS9GELzn, {from: "0x0000000000000000000000000000000000000001"});
//		const booleF4AgvY = await NALm4SIYnK.isOwner.call(addressEpxHi9E, {from: accounts[5]});
//		const boolf3qVGxe = await NALm4SIYnK.approve.call(addresslQNoRWO, uintTium5y, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringOHweVNe, "Personal Token")
		await expect(NALm4SIYnK.transferOwnership.call(addressS9GELzn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressi9M0wOA = accounts[4]
		const address0oqzuz = accounts[4]
		const uintwuX1Wu = BigInt("74")
		const addressBKASEf1 = "0x0000000000000000000000000000000000000002"
		const uintbc41iS = BigInt("946")
		const addressEIbSxQ = accounts[3]
		const uint8dSc6Je4 = await NALm4SIYnK.decimals.call({from: accounts[1]});
//		const address0jhF6R = await NALm4SIYnK.removeAdmin.call(addressi9M0wOA, {from: accounts[3]});
//		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(address0oqzuz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWgQHih = await NALm4SIYnK.transfer.call(addressBKASEf1, uintwuX1Wu, {from: accounts[1]});
//		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressEIbSxQ, uintbc41iS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8dSc6Je4, BigInt("18"))
		await expect(NALm4SIYnK.removeAdmin.call(addressi9M0wOA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressZm7g9zq = accounts[2]
		const uintnwgpJpy = BigInt("1571")
		const addressr3TYQ85 = accounts[3]
		const booleF4AgvY = await NALm4SIYnK.isOwner.call(addressZm7g9zq, {from: accounts[5]});
		const boolWYbwAVY = await NALm4SIYnK.paused.call({from: accounts[0]});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressr3TYQ85, uintnwgpJpy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWYbwAVY, false)
		assert.equal(booleF4AgvY, false)
		assert.equal(boolf3qVGxe, true)
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressUOMmQ8t = accounts[4]
		const uintDHWcdKB = BigInt("946")
		const addressMaQShO2 = accounts[3]
		const uintBBBdTb4 = BigInt("1006")
		const addressNqtrAtD = accounts[2]
		const uintKGEvJK1 = BigInt("2023")
		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(addressUOMmQ8t, {from: "0x0000000000000000000000000000000000000001"});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressMaQShO2, uintDHWcdKB, {from: "0x0000000000000000000000000000000000000001"});
		const boolVxtdU57 = await NALm4SIYnK.increaseAllowance.call(addressNqtrAtD, uintBBBdTb4, {from: accounts[1]});
//		const uint256a6H8lFf = await NALm4SIYnK.burn.call(uintKGEvJK1, {from: accounts[0]});

		assert.equal(boolVxtdU57, true)
		assert.equal(boolf3qVGxe, true)
		assert.equal(uint256VrrrPFN, BigInt("0"))
		await expect(NALm4SIYnK.burn.call(uintKGEvJK1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const uintIM50THO = BigInt("999")
		const addresstuc8zo5 = accounts[4]
		const address39Anry = accounts[4]
		const addressKel3b4n = accounts[1]
		const uintWNOfnL = BigInt("776")
		const addressYPv1c5U = accounts[3]
		const uintkZ8L637 = BigInt("982")
		const addressIGR45g = accounts[3]
		const uint256SAsxNgk = await NALm4SIYnK.totalSupply.call({from: accounts[2]});
		const booloTIo53 = await NALm4SIYnK.increaseAllowance.call(addresstuc8zo5, uintIM50THO, {from: accounts[0]});
		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(address39Anry, {from: "0x0000000000000000000000000000000000000001"});
		const booluhvl6lT = await NALm4SIYnK.isAdmin.call(addressKel3b4n, {from: accounts[3]});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressYPv1c5U, uintWNOfnL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHZcpgG2 = await NALm4SIYnK.decreaseAllowance.call(addressIGR45g, uintkZ8L637, {from: accounts[0]});

		assert.equal(boolf3qVGxe, true)
		assert.equal(booloTIo53, true)
		assert.equal(booluhvl6lT, false)
		assert.equal(uint256SAsxNgk, BigInt("2000000000000000000000000000"))
		assert.equal(uint256VrrrPFN, BigInt("0"))
		await expect(NALm4SIYnK.decreaseAllowance.call(addressIGR45g, uintkZ8L637, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALcMvHCgJ = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addresso8vWf7g = accounts[3]
		const uintW6LLuAj = BigInt("1047")
		const addresspJHGwAy = accounts[4]
		const uint8OAb38zx = await NALcMvHCgJ.decimals.call({from: accounts[1]});
		await NALcMvHCgJ.pause.call({from: accounts[4]});
		const uint256ROkwqEo = await NALcMvHCgJ.balanceOf.call(addresso8vWf7g, {from: accounts[1]});
		const booluwFoJ9L = await NALcMvHCgJ.approve.call(addresspJHGwAy, uintW6LLuAj, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressz7sdO0B = accounts[5]
		const addressiyfsUWT = "0x0000000000000000000000000000000000000001"
		const addressWqmS8Jw = accounts[5]
		const uintL6ScELE = BigInt("962")
		const addressF48OZve = accounts[3]
		const uint256ZF0y8Iy = await NALm4SIYnK.allowance.call(addressiyfsUWT, addressz7sdO0B, {from: accounts[1]});
		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(addressWqmS8Jw, {from: "0x0000000000000000000000000000000000000001"});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressF48OZve, uintL6ScELE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf3qVGxe, true)
		assert.equal(uint256VrrrPFN, BigInt("0"))
		assert.equal(uint256ZF0y8Iy, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const uintSldSCdN = BigInt("1571")
		const addressM10o6U = accounts[4]
		const uintn5I1Qkg = BigInt("1838")
		const addressxuQis9w = "0x0000000000000000000000000000000000000001"
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressM10o6U, uintSldSCdN, {from: "0x0000000000000000000000000000000000000001"});
		const stringe4nOEe0 = await NALm4SIYnK.symbol.call({from: accounts[5]});
//		const boolq8iVl47 = await NALm4SIYnK.transfer.call(addressxuQis9w, uintn5I1Qkg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf3qVGxe, true)
		assert.equal(stringe4nOEe0, "NAL")
		await expect(NALm4SIYnK.transfer.call(addressxuQis9w, uintn5I1Qkg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressu0itlgJ = accounts[4]
		const uintpdIk8BJ = BigInt("1571")
		const addressYh5zL2u = accounts[4]
		const addressYGIxMSg = accounts[2]
		const uintEjdDJSw = BigInt("1821")
		const addressc7zchae = "0x0000000000000000000000000000000000000001"
		const uint256hEUyrK0 = await NALm4SIYnK.balanceOf.call(addressu0itlgJ, {from: accounts[0]});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressYh5zL2u, uintpdIk8BJ, {from: "0x0000000000000000000000000000000000000001"});
		const addresstTpMzw = await NALm4SIYnK.addAdmin.call(addressYGIxMSg, {from: accounts[3]});
//		const boolq8iVl47 = await NALm4SIYnK.transfer.call(addressc7zchae, uintEjdDJSw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf3qVGxe, true)
		assert.equal(uint256hEUyrK0, BigInt("0"))
		await expect(NALm4SIYnK.transfer.call(addressc7zchae, uintEjdDJSw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressJsFRNKk = accounts[4]
		const addressObH1OkQ = accounts[0]
		const uintuNm3ZkG = BigInt("340")
		const addressQzZxTPi = accounts[2]
		const addresspXjJzwo = accounts[3]
		const uintWa3HIZx = BigInt("946")
		const addresseglyI3t = accounts[3]
		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(addressJsFRNKk, {from: "0x0000000000000000000000000000000000000001"});
//		const booltnm0oFc = await NALm4SIYnK.unfreezeAccount.call(addressObH1OkQ, {from: accounts[3]});
//		const boolVnRXjBq = await NALm4SIYnK.transferFrom.call(addresspXjJzwo, addressQzZxTPi, uintuNm3ZkG, {from: accounts[4]});
//		const stringc1fAFR = await NALm4SIYnK.name.call({from: accounts[5]});
//		const boolf3qVGxe = await NALm4SIYnK.approve.call(addresseglyI3t, uintWa3HIZx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VrrrPFN, BigInt("0"))
		await expect(NALm4SIYnK.unfreezeAccount.call(addressObH1OkQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const addressY7hlN2 = accounts[5]
		const addressSfSAb1t = accounts[0]
		const uintdJBvKA4 = BigInt("962")
		const addressTJEA8eI = accounts[3]
		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(addressY7hlN2, {from: "0x0000000000000000000000000000000000000001"});
		const addressnzQNLJQ = await NALm4SIYnK.transferOwnership.call(addressSfSAb1t, {from: accounts[3]});
		const boolf3qVGxe = await NALm4SIYnK.approve.call(addressTJEA8eI, uintdJBvKA4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf3qVGxe, true)
		assert.equal(uint256VrrrPFN, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const uintZigKIaN = BigInt("421")
		const uintSXn1Zgv = BigInt("1238")
		const addressghfj1vj = accounts[3]
		const addresssrV3yiM = accounts[5]
		const bool7R8jiI = await NALm4SIYnK.transferWithLock.call(addressghfj1vj, uintSXn1Zgv, uintZigKIaN, {from: accounts[3]});
		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(addresssrV3yiM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool7R8jiI, true)
		assert.equal(uint256VrrrPFN, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const uintx4nZzJV = BigInt("1984")
		const addressYzKJI8M = accounts[2]
		const addressSPiT511 = accounts[6]
//		await NALm4SIYnK.pause.call({from: accounts[3]});
//		const booltPyYXSW = await NALm4SIYnK.unlock.call(addressYzKJI8M, uintx4nZzJV, {from: accounts[4]});
//		const uint256VrrrPFN = await NALm4SIYnK.balanceOf.call(addressSPiT511, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALm4SIYnK.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm4SIYnK = await NAL.new({from: accounts[3]});
		const uintuXsv0F = BigInt("147")
		const addressVXkNen7 = accounts[2]
		const address6HyDEK = accounts[4]
		const addresstFp1XOa = accounts[0]
		const uinttuzmOHN = BigInt("1190")
		const addressAe1fiG2 = accounts[7]
		const uintMHMGn5h = BigInt("1567")
		const addressvVS6iH = accounts[1]
		const addressOR5iF6t = accounts[0]
		const uintBuC4rtn = BigInt("599")
		const addressMNXgBtI = "0x0000000000000000000000000000000000000001"
		const addresszdetc0Y = accounts[4]
		const uintPz9e5P1 = BigInt("1720")
		const addressAHdEG2w = accounts[1]
		const boolzPJBw1R = await NALm4SIYnK.increaseAllowance.call(addressVXkNen7, uintuXsv0F, {from: accounts[1]});
		const addressN5WyPEC = await NALm4SIYnK.addAdmin.call(address6HyDEK, {from: accounts[3]});
		const booltd4W0rF = await NALm4SIYnK.freezeAccount.call(addresstFp1XOa, {from: accounts[3]});
		const boolbobX55c = await NALm4SIYnK.increaseAllowance.call(addressAe1fiG2, uinttuzmOHN, {from: accounts[4]});
//		const boolkWpAeEE = await NALm4SIYnK.transferFrom.call(addressOR5iF6t, addressvVS6iH, uintMHMGn5h, {from: accounts[1]});
//		const boollKlocT9 = await NALm4SIYnK.increaseAllowance.call(addressMNXgBtI, uintBuC4rtn, {from: accounts[3]});
//		const addressqcgGkeZ = await NALm4SIYnK.upgradeTo.call(addresszdetc0Y, {from: "0x0000000000000000000000000000000000000001"});
//		const booluoJeoaZ = await NALm4SIYnK.approve.call(addressAHdEG2w, uintPz9e5P1, {from: accounts[3]});

		assert.equal(boolbobX55c, true)
		assert.equal(booltd4W0rF, true)
		assert.equal(boolzPJBw1R, true)
		await expect(NALm4SIYnK.transferFrom.call(addressOR5iF6t, addressvVS6iH, uintMHMGn5h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})