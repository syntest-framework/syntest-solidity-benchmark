const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsrZxDNpP = await UFragments.new({from: accounts[0]});
		const inteBuOuyn = BigInt("-1949")
		const intSCDPxQS = BigInt("-1870")
		const addresscZeMtX = accounts[2]
		const int256gBeDH5x = await UFragmentsrZxDNpP.add.call(intSCDPxQS, inteBuOuyn, {from: accounts[3]});
		const addresschrNgt = await UFragmentsrZxDNpP.transferOwnership.call(addresscZeMtX, {from: accounts[2]});

		await expect(UFragmentsrZxDNpP.add.call(intSCDPxQS, inteBuOuyn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsAId2lEE = await UFragments.new({from: accounts[0]});
		const addressLKyujMO = accounts[4]
		const addressMYdL69M = accounts[3]
		const addressXjjELED = await UFragmentsAId2lEE.initialize.call(addressLKyujMO, {from: accounts[3]});
		const uint8imps78 = await UFragmentsAId2lEE.decimals.call({from: accounts[2]});
		const uint256JbmaL6k = await UFragmentsAId2lEE.balanceOf.call(addressMYdL69M, {from: accounts[1]});
		const uint256p2aTeuj = await UFragmentsAId2lEE.totalSupply.call({from: accounts[5]});

		await expect(UFragmentsAId2lEE.initialize.call(addressLKyujMO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsMNHUct = await UFragments.new({from: accounts[1]});
		const uintsiTy8FG = BigInt("5")
		const stringOvwS0o9 = "kU1lq2RL5ncDLzCWSbyhaa"
		const stringGFrFojp = "wMXa"
		const intvh5gDd9 = BigInt("-1082")
		const inthxnQTFV = BigInt("888")
		const stringVBcOLar = await UFragmentsMNHUct.initialize.call(stringGFrFojp, stringOvwS0o9, uintsiTy8FG, {from: accounts[2]});
		const int256UcZqruX = await UFragmentsMNHUct.sub.call(inthxnQTFV, intvh5gDd9, {from: accounts[0]});
		const addressVKjtmP4 = await UFragmentsMNHUct.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await UFragmentsMNHUct.onlyOwner.call({from: accounts[1]});

		await expect(UFragmentsMNHUct.sub.call(inthxnQTFV, intvh5gDd9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxwfpYsR = await UFragments.new({from: accounts[0]});
		const addressMbKvaRL = accounts[2]
		const addressjZOfiHN = accounts[1]
		const uint256Uq5loxK = await UFragmentsxwfpYsR.allowance.call(addressjZOfiHN, addressMbKvaRL, {from: accounts[2]});
		const uint256U30l1Xh = await UFragmentsxwfpYsR.totalSupply.call({from: accounts[0]});
		await UFragmentsxwfpYsR.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256U30l1Xh, BigInt("0"))
		assert.equal(uint256Uq5loxK, BigInt("0"))
		await expect(UFragmentsxwfpYsR.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsz0kkNqa = await UFragments.new({from: accounts[4]});
		const addressfxpEuIm = accounts[1]
		const intMr9OzNa = BigInt("-1473")
		const intKugV7Zs = BigInt("-1249")
		const uint256EDMByuV = await UFragmentsz0kkNqa.balanceOf.call(addressfxpEuIm, {from: accounts[3]});
		const uint8oGIccA = await UFragmentsz0kkNqa.decimals.call({from: accounts[2]});
		const int256BXPc0N4 = await UFragmentsz0kkNqa.sub.call(intKugV7Zs, intMr9OzNa, {from: accounts[3]});

		assert.equal(uint256EDMByuV, BigInt("0"))
		assert.equal(uint8oGIccA, BigInt("0"))
		await expect(UFragmentsz0kkNqa.sub.call(intKugV7Zs, intMr9OzNa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsz0kkNqa = await UFragments.new({from: accounts[4]});
		const addressuKjO6GN = accounts[1]
		const uintIFlhXjd = BigInt("1039")
		const addressa0EgWGm = accounts[0]
		const addresscb5FNpg = "0x0000000000000000000000000000000000000001"
		const intVOInjuP = BigInt("-1473")
		const intFpYUE6v = BigInt("-1249")
		const uint256EDMByuV = await UFragmentsz0kkNqa.balanceOf.call(addressuKjO6GN, {from: accounts[3]});
		const uint8oGIccA = await UFragmentsz0kkNqa.decimals.call({from: accounts[2]});
		const boolZl7th1v = await UFragmentsz0kkNqa.transfer.call(addressa0EgWGm, uintIFlhXjd, {from: accounts[0]});
		const addressWlDt7wt = await UFragmentsz0kkNqa.initialize.call(addresscb5FNpg, {from: accounts[3]});
		const int256BXPc0N4 = await UFragmentsz0kkNqa.sub.call(intFpYUE6v, intVOInjuP, {from: accounts[3]});

		assert.equal(uint256EDMByuV, BigInt("0"))
		assert.equal(uint8oGIccA, BigInt("0"))
		await expect(UFragmentsz0kkNqa.transfer.call(addressa0EgWGm, uintIFlhXjd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsz0kkNqa = await UFragments.new({from: accounts[4]});
		const addressm43hqCB = accounts[1]
		const intc9WTsiL = BigInt("-1495")
		const intFxWHUhb = BigInt("-1249")
		const uint256EDMByuV = await UFragmentsz0kkNqa.balanceOf.call(addressm43hqCB, {from: accounts[3]});
		const uint8oGIccA = await UFragmentsz0kkNqa.decimals.call({from: accounts[2]});
		const addressom1g5LF = await UFragmentsz0kkNqa.owner.call({from: accounts[4]});
		const int256BXPc0N4 = await UFragmentsz0kkNqa.sub.call(intFxWHUhb, intc9WTsiL, {from: accounts[3]});

		assert.equal(addressom1g5LF, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256EDMByuV, BigInt("0"))
		assert.equal(uint8oGIccA, BigInt("0"))
		await expect(UFragmentsz0kkNqa.sub.call(intFxWHUhb, intc9WTsiL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsi3DNI1G = await UFragments.new({from: accounts[2]});
		const addressn3wT1EU = accounts[2]
		const addressPzV3L90 = accounts[4]
		const stringdlzPYyQ = await UFragmentsi3DNI1G.symbol.call({from: accounts[4]});
		const addressOw5GLYu = await UFragmentsi3DNI1G.initialize.call(addressn3wT1EU, {from: accounts[3]});
		await UFragmentsi3DNI1G.renounceOwnership.call({from: accounts[4]});
		await UFragmentsi3DNI1G.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256srKxH0d = await UFragmentsi3DNI1G.balanceOf.call(addressPzV3L90, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringdlzPYyQ, "")
		await expect(UFragmentsi3DNI1G.initialize.call(addressn3wT1EU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsz0kkNqa = await UFragments.new({from: accounts[4]});
		const addressYwHf8PU = accounts[2]
		const uintbXapOZW = BigInt("1395")
		const addressgwdyTtN = accounts[0]
		const addressKVqTjy = accounts[0]
		const booll7JtILv = await UFragmentsz0kkNqa.isOwner.call({from: accounts[0]});
		const uint256EDMByuV = await UFragmentsz0kkNqa.balanceOf.call(addressYwHf8PU, {from: accounts[3]});
		const uint8oGIccA = await UFragmentsz0kkNqa.decimals.call({from: accounts[2]});
		const uint256vYLkTeX = await UFragmentsz0kkNqa.totalSupply.call({from: accounts[5]});
		const boolxUUkzVe = await UFragmentsz0kkNqa.transferFrom.call(addressKVqTjy, addressgwdyTtN, uintbXapOZW, {from: accounts[3]});

		assert.equal(booll7JtILv, false)
		assert.equal(uint256EDMByuV, BigInt("0"))
		assert.equal(uint256vYLkTeX, BigInt("0"))
		assert.equal(uint8oGIccA, BigInt("0"))
		await expect(UFragmentsz0kkNqa.transferFrom.call(addressKVqTjy, addressgwdyTtN, uintbXapOZW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstGM3O1F = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFtjYeSX = accounts[2]
		const addressDndWXLR = "0x0000000000000000000000000000000000000001"
		const addresskVrFf7B = accounts[5]
		const uint256zW2pBdW = await UFragmentstGM3O1F.balanceOf.call(addressFtjYeSX, {from: accounts[5]});
		const uint256birCK2w = await UFragmentstGM3O1F.balanceOf.call(addressDndWXLR, {from: "0x0000000000000000000000000000000000000001"});
		const stringnp05bXm = await UFragmentstGM3O1F.name.call({from: accounts[4]});
		const addressiWJIbc9 = await UFragmentstGM3O1F.transferOwnership.call(addresskVrFf7B, {from: "0x0000000000000000000000000000000000000001"});
		const uint256W4Eozw0 = await UFragmentstGM3O1F.totalSupply.call({from: accounts[1]});
		const uint256RAiAjZM = await UFragmentstGM3O1F.calRebase.call({from: accounts[3]});
	});

	it('test for UFragments', async () => {
		const UFragmentsrZxDNpP = await UFragments.new({from: accounts[0]});
		const intfR7XvTL = BigInt("-1951")
		const intTStgwP6 = BigInt("-1870")
		const uint256wqKprmZ = await UFragmentsrZxDNpP.calRebase.call({from: accounts[0]});
		const int256gBeDH5x = await UFragmentsrZxDNpP.add.call(intTStgwP6, intfR7XvTL, {from: accounts[3]});
		const uint256x3CClEH = await UFragmentsrZxDNpP.calRebase.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsrZxDNpP.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrZxDNpP = await UFragments.new({from: accounts[0]});
		const uintbJye9i8 = BigInt("638")
		const addressjDiXIp = accounts[3]
		const intoQzgeQI = BigInt("-1935")
		const inthoeOvWL = BigInt("-1870")
		const uintZWe4j4d = BigInt("1840")
		const addressHvVYFom = accounts[4]
		const boolBloomxN = await UFragmentsrZxDNpP.approve.call(addressjDiXIp, uintbJye9i8, {from: accounts[0]});
		const int256gBeDH5x = await UFragmentsrZxDNpP.add.call(inthoeOvWL, intoQzgeQI, {from: accounts[3]});
		const addresseIHXm6u = await UFragmentsrZxDNpP.initRebase.call(addressHvVYFom, uintZWe4j4d, {from: accounts[3]});

		assert.equal(boolBloomxN, true)
		await expect(UFragmentsrZxDNpP.add.call(inthoeOvWL, intoQzgeQI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsz0kkNqa = await UFragments.new({from: accounts[4]});
		const intwhvov5F = BigInt("1818")
		const intLrxIhF9 = BigInt("-1557")
		const addressFG78cLk = accounts[2]
		const boolsxCPPle = await UFragmentsz0kkNqa.rebaseTimeInfo.call({from: accounts[3]});
		const int256XX0f3no = await UFragmentsz0kkNqa.div.call(intLrxIhF9, intwhvov5F, {from: accounts[3]});
		await UFragmentsz0kkNqa.onlyOwner.call({from: accounts[2]});
		const uint256EDMByuV = await UFragmentsz0kkNqa.balanceOf.call(addressFG78cLk, {from: accounts[3]});

		await expect(UFragmentsz0kkNqa.div.call(intLrxIhF9, intwhvov5F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsz0kkNqa = await UFragments.new({from: accounts[4]});
		const addressB6p1UQK = accounts[2]
		const stringOjgTTdn = await UFragmentsz0kkNqa.name.call({from: accounts[1]});
		const uint256EDMByuV = await UFragmentsz0kkNqa.balanceOf.call(addressB6p1UQK, {from: accounts[3]});

		assert.equal(stringOjgTTdn, "")
		assert.equal(uint256EDMByuV, BigInt("0"))
	});
})