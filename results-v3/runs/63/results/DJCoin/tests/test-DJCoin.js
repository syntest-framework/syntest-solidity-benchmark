const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinRgL9PTr = await DJCoin.new({from: accounts[3]});
		const addressTjJzBE0 = accounts[0]
		const addressB9VhWw8 = accounts[2]
		const uintwsFOt6 = BigInt("1893")
		const addressFZzbKO = accounts[0]
		const uinta8qxY2M = BigInt("1257")
		const addressQW2sCIe = accounts[4]
		const addressh5lO87m = accounts[1]
		const addressy11KUdM = await DJCoinRgL9PTr.transferOwnership.call(addressTjJzBE0, {from: accounts[0]});
		const uint256unTZ4aJ = await DJCoinRgL9PTr.balanceOf.call(addressB9VhWw8, {from: "0x0000000000000000000000000000000000000001"});
		const boolQ12MWrJ = await DJCoinRgL9PTr.approve.call(addressFZzbKO, uintwsFOt6, {from: accounts[5]});
		const booll25gGXm = await DJCoinRgL9PTr.transfer.call(addressQW2sCIe, uinta8qxY2M, {from: accounts[4]});
		const addressYFlCLs1 = await DJCoinRgL9PTr.validRecipient.call(addressh5lO87m, {from: accounts[0]});

		await expect(DJCoinRgL9PTr.transferOwnership.call(addressTjJzBE0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCointvzk7o4 = await DJCoin.new({from: accounts[3]});
		const uintJhFfdzd = BigInt("334")
		const addressib96iVR = accounts[3]
		const uintSQDSN2E = BigInt("735")
		const addresschPRlzR = "0x0000000000000000000000000000000000000001"
		const uintoDiMNR = BigInt("563")
		const uintxAz6mwY = BigInt("1063")
		const addressK442cTb = accounts[2]
		const uintvofo8CO = BigInt("445")
		const addressl3ZFBcc = accounts[0]
		const booldi8L0bt = await DJCointvzk7o4.transfer.call(addressib96iVR, uintJhFfdzd, {from: "0x0000000000000000000000000000000000000001"});
		const boolFH6isRf = await DJCointvzk7o4.decreaseAllowance.call(addresschPRlzR, uintSQDSN2E, {from: accounts[0]});
		const boolkMbfLu = await DJCointvzk7o4.changetokensPerBlock.call(uintoDiMNR, {from: accounts[0]});
		const boolp1ez5YL = await DJCointvzk7o4.approve.call(addressK442cTb, uintxAz6mwY, {from: "0x0000000000000000000000000000000000000001"});
		const boolBnt8jy = await DJCointvzk7o4.decreaseAllowance.call(addressl3ZFBcc, uintvofo8CO, {from: accounts[2]});

		await expect(DJCointvzk7o4.transfer.call(addressib96iVR, uintJhFfdzd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbj7MwBQ = await DJCoin.new({from: accounts[1]});
		const uintB6R8olX = BigInt("1380")
		const addressNcSyBRg = "0x0000000000000000000000000000000000000001"
		const boolOXZCUoB = await DJCoinbj7MwBQ.decreaseAllowance.call(addressNcSyBRg, uintB6R8olX, {from: "0x0000000000000000000000000000000000000001"});
		await DJCoinbj7MwBQ.onlyOwner.call({from: accounts[5]});

		assert.equal(boolOXZCUoB, true)
		await expect(DJCoinbj7MwBQ.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoWwLbAU = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvzEUgHp = BigInt("1158")
		const uintfPBE6r = BigInt("1475")
		const uintdGkPFsT = BigInt("1563")
		const addressHD2XYy2 = accounts[1]
		await DJCoinoWwLbAU.onlyOwner.call({from: accounts[2]});
		await DJCoinoWwLbAU.renounceOwnership.call({from: accounts[4]});
		await DJCoinoWwLbAU.onlyOwner.call({from: accounts[2]});
		const uint256Avwh5x6 = await DJCoinoWwLbAU.burn.call(uintfPBE6r, uintvzEUgHp, {from: accounts[4]});
		const booldEFFa1a = await DJCoinoWwLbAU.increaseAllowance.call(addressHD2XYy2, uintdGkPFsT, {from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCointn3BAo0 = await DJCoin.new({from: accounts[4]});
		const uintXYPtddU = BigInt("1270")
		const addresskVptgg = accounts[3]
		const uintJy6knnD = BigInt("2039")
		const addressTMAMkXQ = accounts[3]
		const addresseYaP5oV = accounts[0]
		const boolVcBXSkZ = await DJCointn3BAo0.transfer.call(addresskVptgg, uintXYPtddU, {from: accounts[4]});
		const boolKgwvv3b = await DJCointn3BAo0.decreaseAllowance.call(addressTMAMkXQ, uintJy6knnD, {from: accounts[4]});
		const addressa9bJCXj = await DJCointn3BAo0.validRecipient.call(addresseYaP5oV, {from: accounts[3]});

		assert.equal(boolKgwvv3b, true)
		assert.equal(boolVcBXSkZ, true)
		await expect(DJCointn3BAo0.validRecipient.call(addresseYaP5oV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinM4Aj9dr = await DJCoin.new({from: accounts[4]});
		const uintf6uIab7 = BigInt("823")
		const addresscQbqhwe = accounts[3]
		const addressJFvcxow = accounts[5]
		const addressUIlF61U = accounts[5]
		const uintIyQRWK = BigInt("473")
		const addressLH70UUF = accounts[1]
		const uintPl2AOBq = BigInt("1652")
		const addressrpS26X = accounts[3]
		const boolb5G8K9Y = await DJCoinM4Aj9dr.approve.call(addresscQbqhwe, uintf6uIab7, {from: "0x0000000000000000000000000000000000000001"});
		const addressXSAGtxM = await DJCoinM4Aj9dr.validRecipient.call(addressJFvcxow, {from: accounts[2]});
		const uint256PxXseqq = await DJCoinM4Aj9dr.balanceOf.call(addressUIlF61U, {from: accounts[1]});
		const boolMAs7i6 = await DJCoinM4Aj9dr.increaseAllowance.call(addressLH70UUF, uintIyQRWK, {from: accounts[2]});
		const boolsy8Oh4A = await DJCoinM4Aj9dr.approve.call(addressrpS26X, uintPl2AOBq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolb5G8K9Y, true)
		await expect(DJCoinM4Aj9dr.validRecipient.call(addressJFvcxow, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinxeqAQMV = await DJCoin.new({from: accounts[5]});
		const addressk93Uyoj = accounts[4]
		const uintCibZmj5 = BigInt("339")
		const addressg1Ne8TE = accounts[1]
		const uint2564IK79x = await DJCoinxeqAQMV.balanceOf.call(addressk93Uyoj, {from: accounts[0]});
		const boolpWFF3tV = await DJCoinxeqAQMV.transfer.call(addressg1Ne8TE, uintCibZmj5, {from: accounts[3]});

		assert.equal(uint2564IK79x, BigInt("0"))
		await expect(DJCoinxeqAQMV.transfer.call(addressg1Ne8TE, uintCibZmj5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinkJYYkgt = await DJCoin.new({from: accounts[3]});
		const uintrlEuaS = BigInt("1615")
		const addressKdFn4St = accounts[4]
		const addressMnfNXL = accounts[2]
		const uintp4ZZ6dY = BigInt("1524")
		const addressNBMdF7s = accounts[3]
		const boolX6n4Xsr = await DJCoinkJYYkgt.decreaseAllowance.call(addressKdFn4St, uintrlEuaS, {from: "0x0000000000000000000000000000000000000001"});
		const addressiXjDGwM = await DJCoinkJYYkgt.owner.call({from: accounts[0]});
		const addressCojAbcP = await DJCoinkJYYkgt.transferOwnership.call(addressMnfNXL, {from: accounts[4]});
		const boollaVIgzX = await DJCoinkJYYkgt.approve.call(addressNBMdF7s, uintp4ZZ6dY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressiXjDGwM, 0x830f9F3e09a74fE0eAadD9b857444ac5Aa0CE919)
		assert.equal(boolX6n4Xsr, true)
		await expect(DJCoinkJYYkgt.transferOwnership.call(addressMnfNXL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbj7MwBQ = await DJCoin.new({from: accounts[1]});
		const addressZGdVUHo = accounts[0]
		const addressBTlPFT0 = accounts[3]
		const uintLReNO0L = BigInt("1664")
		const addressTB3Kby5 = "0x0000000000000000000000000000000000000001"
		const uint256NBzszH3 = await DJCoinbj7MwBQ.allowance.call(addressBTlPFT0, addressZGdVUHo, {from: accounts[3]});
		const boolOXZCUoB = await DJCoinbj7MwBQ.decreaseAllowance.call(addressTB3Kby5, uintLReNO0L, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOXZCUoB, true)
		assert.equal(uint256NBzszH3, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinxeqAQMV = await DJCoin.new({from: accounts[5]});
		const uintBfXaEUi = BigInt("1359")
		const addressYvqNMNr = accounts[0]
		const addressNrko14j = accounts[4]
		const uintSVpDTCt = BigInt("316")
		const addressMKJiq2I = accounts[2]
		const addresszuZrpBX = accounts[0]
		const uintPHq9gIu = BigInt("1765")
		const addresshWu9Kef = accounts[5]
		const uintvugRkSM = BigInt("341")
		const addressWQjCzFP = accounts[3]
		const boolrkIB3D = await DJCoinxeqAQMV.changetokensPerBlock.call(uintBfXaEUi, {from: accounts[0]});
		const addresskMuLGg4 = await DJCoinxeqAQMV.owner.call({from: accounts[1]});
		const addressppzaV65 = await DJCoinxeqAQMV.validRecipient.call(addressYvqNMNr, {from: accounts[5]});
		const uint2564IK79x = await DJCoinxeqAQMV.balanceOf.call(addressNrko14j, {from: accounts[0]});
		const boolpWFF3tV = await DJCoinxeqAQMV.transfer.call(addressMKJiq2I, uintSVpDTCt, {from: accounts[3]});
		const addressSm3lXQY = await DJCoinxeqAQMV.transferOwnership.call(addresszuZrpBX, {from: accounts[4]});
		const uint256zmN2mRT = await DJCoinxeqAQMV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolomCP5Mg = await DJCoinxeqAQMV.transfer.call(addresshWu9Kef, uintPHq9gIu, {from: accounts[3]});
		const booln2oL9jb = await DJCoinxeqAQMV.increaseAllowance.call(addressWQjCzFP, uintvugRkSM, {from: accounts[4]});
		await DJCoinxeqAQMV.onlyOwner.call({from: accounts[0]});

		assert.equal(addresskMuLGg4, 0x045EB30D1d5d078646AbC555d776914D03F5dD89)
		assert.equal(boolrkIB3D, true)
		await expect(DJCoinxeqAQMV.validRecipient.call(addressYvqNMNr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinxeqAQMV = await DJCoin.new({from: accounts[5]});
		const addressqu8urhI = accounts[4]
		const uintGE5Stwq = BigInt("341")
		const addresshE04ne = accounts[3]
		const addressxXhlnsT = accounts[2]
		const uintYgCsTXi = BigInt("1487")
		const uintsBjvCo = BigInt("594")
		const uint2564IK79x = await DJCoinxeqAQMV.balanceOf.call(addressqu8urhI, {from: accounts[0]});
		const uint256zmN2mRT = await DJCoinxeqAQMV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booln2oL9jb = await DJCoinxeqAQMV.increaseAllowance.call(addresshE04ne, uintGE5Stwq, {from: accounts[4]});
		const addressbRNdBW = await DJCoinxeqAQMV.validRecipient.call(addressxXhlnsT, {from: accounts[5]});
		const uint256MTWtyC = await DJCoinxeqAQMV.burn.call(uintsBjvCo, uintYgCsTXi, {from: accounts[0]});
		await DJCoinxeqAQMV.onlyOwner.call({from: accounts[0]});

		assert.equal(booln2oL9jb, true)
		assert.equal(uint2564IK79x, BigInt("0"))
		assert.equal(uint256zmN2mRT, BigInt("2100000000000"))
		await expect(DJCoinxeqAQMV.validRecipient.call(addressxXhlnsT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinPTZXmxH = await DJCoin.new({from: accounts[1]});
		const addressxBgyMx = accounts[0]
		const addressJiygbpw = accounts[2]
		const uintZLASHDr = BigInt("604")
		const addressK0Pduqw = accounts[2]
		const uintIRsbLE = BigInt("1706")
		const uintxxFCHVN = BigInt("1575")
		const uint256LZ9m0k = await DJCoinPTZXmxH.allowance.call(addressJiygbpw, addressxBgyMx, {from: accounts[2]});
		const uint256fYg7dQP = await DJCoinPTZXmxH.totalSupply.call({from: accounts[3]});
		const boolXXuyuYW = await DJCoinPTZXmxH.decreaseAllowance.call(addressK0Pduqw, uintZLASHDr, {from: accounts[1]});
		const uint256aEGj6rw = await DJCoinPTZXmxH.burn.call(uintxxFCHVN, uintIRsbLE, {from: accounts[1]});
		await DJCoinPTZXmxH.renounceOwnership.call({from: accounts[1]});

		assert.equal(boolXXuyuYW, true)
		assert.equal(uint256LZ9m0k, BigInt("0"))
		assert.equal(uint256aEGj6rw, BigInt("1741740000000"))
		assert.equal(uint256fYg7dQP, BigInt("2100000000000"))
		await expect(DJCoinPTZXmxH.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbj7MwBQ = await DJCoin.new({from: accounts[1]});
		const uint2BuTdA = BigInt("669")
		const addressXaYuiI1 = accounts[3]
		const addressHyH6nGd = "0x0000000000000000000000000000000000000001"
		const uinteLX5hGe = BigInt("706")
		const addressWzNUQfl = accounts[3]
		const uintFnvuZ1b = BigInt("1380")
		const address3ilF4y = "0x0000000000000000000000000000000000000002"
		const boolM6UE1x2 = await DJCoinbj7MwBQ.transferFrom.call(addressHyH6nGd, addressXaYuiI1, uint2BuTdA, {from: accounts[0]});
		const boolT0iAKT6 = await DJCoinbj7MwBQ.approve.call(addressWzNUQfl, uinteLX5hGe, {from: accounts[2]});
		const boolOXZCUoB = await DJCoinbj7MwBQ.decreaseAllowance.call(address3ilF4y, uintFnvuZ1b, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DJCoinbj7MwBQ.transferFrom.call(addressHyH6nGd, addressXaYuiI1, uint2BuTdA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinSgIxeSS = await DJCoin.new({from: accounts[2]});
		const uintMigjCbH = BigInt("0")
		const addressffYAMN5 = accounts[0]
		const uintvtyY8u = BigInt("455")
		const addressgznjY3I = accounts[5]
		const addressGbXTgM = accounts[2]
		const uintHpuzyMm = BigInt("1189")
		const uintwRQZXha = BigInt("298")
		const boolS9NzXF = await DJCoinSgIxeSS.transfer.call(addressffYAMN5, uintMigjCbH, {from: accounts[2]});
		await DJCoinSgIxeSS.renounceOwnership.call({from: accounts[3]});
		const booly25GBZ = await DJCoinSgIxeSS.transferFrom.call(addressGbXTgM, addressgznjY3I, uintvtyY8u, {from: accounts[3]});
		const uint256fSs8CM = await DJCoinSgIxeSS.burn.call(uintwRQZXha, uintHpuzyMm, {from: accounts[5]});

		assert.equal(boolS9NzXF, true)
		await expect(DJCoinSgIxeSS.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbj7MwBQ = await DJCoin.new({from: accounts[1]});
		const addressYhhldTX = accounts[2]
		const uintKJ0ln6e = BigInt("987")
		const addressuvx3LdG = "0x0000000000000000000000000000000000000001"
		const addresslphVqiU = await DJCoinbj7MwBQ.transferOwnership.call(addressYhhldTX, {from: accounts[1]});
		const boolOXZCUoB = await DJCoinbj7MwBQ.decreaseAllowance.call(addressuvx3LdG, uintKJ0ln6e, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOXZCUoB, true)
	});
})