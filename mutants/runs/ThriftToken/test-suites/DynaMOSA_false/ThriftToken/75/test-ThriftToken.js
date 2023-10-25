const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokeniPjf7zA = await ThriftToken.new({from: accounts[3]});
		const addressFpt9kvJ = accounts[4]
		const addressiKFiFmF = accounts[2]
		const addresstBZzxBr = accounts[3]
		const addresskbfAj5F = accounts[0]
		const uint256wuJNkRd = await ThriftTokeniPjf7zA.balanceOf.call(addressFpt9kvJ, {from: accounts[0]});
		const uint256QJjbnQk = await ThriftTokeniPjf7zA.allowance.call(addresstBZzxBr, addressiKFiFmF, {from: accounts[0]});
		const addressdy0MKKV = await ThriftTokeniPjf7zA.transferOwnership.call(addresskbfAj5F, {from: accounts[5]});

		assert.equal(uint256QJjbnQk, BigInt("0"))
		assert.equal(uint256wuJNkRd, BigInt("0"))
		await expect(ThriftTokeniPjf7zA.transferOwnership.call(addresskbfAj5F, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenuIo4FDZ = await ThriftToken.new({from: accounts[5]});
		const uintlh95B50 = BigInt("695")
		const addresstj1fNAL = accounts[1]
		const uintX8nIBS0 = BigInt("382")
		const addresssO5Ax3i = accounts[4]
		const addressIJjrKkf = "0x0000000000000000000000000000000000000001"
		const uintiEnsUeN = BigInt("690")
		const addressImNIMpH = "0x0000000000000000000000000000000000000001"
		const addressOCCMdj = accounts[0]
		const addressgVK8TM4 = accounts[4]
		const uintUWPYQA = BigInt("302")
		const addresszIFYdPW = accounts[2]
		const boolM6Hkq0T = await ThriftTokenuIo4FDZ.increaseApproval.call(addresstj1fNAL, uintlh95B50, {from: accounts[1]});
		const boolPEgHbyp = await ThriftTokenuIo4FDZ.transferFrom.call(addressIJjrKkf, addresssO5Ax3i, uintX8nIBS0, {from: accounts[3]});
		const boolV9bvCRN = await ThriftTokenuIo4FDZ.approve.call(addressImNIMpH, uintiEnsUeN, {from: accounts[5]});
		const uint256TCxzmiJ = await ThriftTokenuIo4FDZ.allowance.call(addressgVK8TM4, addressOCCMdj, {from: "0x0000000000000000000000000000000000000001"});
		const boolQwnIPuR = await ThriftTokenuIo4FDZ.decreaseApproval.call(addresszIFYdPW, uintUWPYQA, {from: accounts[4]});

		await expect(ThriftTokenuIo4FDZ.increaseApproval.call(addresstj1fNAL, uintlh95B50, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenW4w9psD = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMyIAZi = BigInt("74")
		const addressFWuq7dY = accounts[1]
		const addressZrdrRG8 = accounts[0]
		const uintvrt6z0h = BigInt("1324")
		const addresss7OtSY2 = accounts[4]
		const boolHFSDUX6 = await ThriftTokenW4w9psD.increaseApproval.call(addressFWuq7dY, uintMyIAZi, {from: accounts[0]});
		const addressivVXn8t = await ThriftTokenW4w9psD.transferOwnership.call(addressZrdrRG8, {from: accounts[2]});
		const boolUoqccOH = await ThriftTokenW4w9psD.transfer.call(addresss7OtSY2, uintvrt6z0h, {from: accounts[2]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenly9Hreh = await ThriftToken.new({from: accounts[5]});
		const uintj8uQxs = BigInt("669")
		const addressjvt339 = accounts[4]
		const uinthxX7DXF = BigInt("1392")
		const addressnzXZzzb = accounts[3]
		const addressQP6QoEX = accounts[1]
		const uintXJQVMxF = BigInt("1951")
		const addressFX2Jr8p = accounts[2]
		const uinttsRjf97 = BigInt("685")
		const addresstDZjn5C = accounts[3]
		const addressnEGYqP5 = accounts[5]
		const addressKFkxnus = accounts[0]
		const addressPLBoaYm = accounts[3]
		const boolWRJ33Td = await ThriftTokenly9Hreh.increaseApproval.call(addressjvt339, uintj8uQxs, {from: accounts[3]});
		const boolYM19sM9 = await ThriftTokenly9Hreh.transferFrom.call(addressQP6QoEX, addressnzXZzzb, uinthxX7DXF, {from: accounts[2]});
		const boolzbowvUT = await ThriftTokenly9Hreh.approve.call(addressFX2Jr8p, uintXJQVMxF, {from: accounts[4]});
		const boolRs3q9rT = await ThriftTokenly9Hreh.transferFrom.call(addressnEGYqP5, addresstDZjn5C, uinttsRjf97, {from: accounts[2]});
		const addressDKUoG4B = await ThriftTokenly9Hreh.transferOwnership.call(addressKFkxnus, {from: accounts[2]});
		const uint256Bda6YFt = await ThriftTokenly9Hreh.balanceOf.call(addressPLBoaYm, {from: accounts[3]});

		assert.equal(boolWRJ33Td, true)
		await expect(ThriftTokenly9Hreh.transferFrom.call(addressQP6QoEX, addressnzXZzzb, uinthxX7DXF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenPXLdtM = await ThriftToken.new({from: accounts[2]});
		const addressCzT8FwL = accounts[4]
		const uintGhJg4xT = BigInt("1777")
		const addresspR9pBxZ = accounts[3]
		const uintsa7TCbE = BigInt("48")
		const addressydq86LT = accounts[4]
		const uintlFQ1JCT = BigInt("262")
		const addressFSadJq7 = accounts[4]
		const uintU2E3Uvv = BigInt("1545")
		const addressh99eSV = accounts[4]
		const addressP5Tbtqv = accounts[5]
		const uintUvAqB8k = BigInt("1644")
		const addressz9rj13q = accounts[3]
		const uint256EY7w9UB = await ThriftTokenPXLdtM.balanceOf.call(addressCzT8FwL, {from: accounts[2]});
		const boold9fVr6b = await ThriftTokenPXLdtM.transfer.call(addresspR9pBxZ, uintGhJg4xT, {from: accounts[2]});
		const boolOtGSwYb = await ThriftTokenPXLdtM.increaseApproval.call(addressydq86LT, uintsa7TCbE, {from: accounts[5]});
		const boolf4HVJv6 = await ThriftTokenPXLdtM.transfer.call(addressFSadJq7, uintlFQ1JCT, {from: accounts[2]});
		const boolXku52aW = await ThriftTokenPXLdtM.transferFrom.call(addressP5Tbtqv, addressh99eSV, uintU2E3Uvv, {from: accounts[4]});
		const bool6xLvdQ = await ThriftTokenPXLdtM.decreaseApproval.call(addressz9rj13q, uintUvAqB8k, {from: accounts[1]});

		assert.equal(uint256EY7w9UB, BigInt("0"))
		await expect(ThriftTokenPXLdtM.transfer.call(addresspR9pBxZ, uintGhJg4xT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenklo2XJ6 = await ThriftToken.new({from: accounts[3]});
		const addresskJiZ08 = accounts[4]
		const uinthsEc22t = BigInt("438")
		const addressbAQy9xz = accounts[4]
		const uintzUoUUni = BigInt("95")
		const addressy2UaaRx = "0x0000000000000000000000000000000000000001"
		const addressjRSY9hE = accounts[0]
		const uintH0xFPQM = BigInt("891")
		const addressAKNgDU7 = accounts[2]
		const addressCxlYPds = accounts[3]
		const uint256dkOQpcM = await ThriftTokenklo2XJ6.balanceOf.call(addresskJiZ08, {from: accounts[5]});
		const boolcvfAnqe = await ThriftTokenklo2XJ6.decreaseApproval.call(addressbAQy9xz, uinthsEc22t, {from: accounts[2]});
		const boolfVB2QXN = await ThriftTokenklo2XJ6.increaseApproval.call(addressy2UaaRx, uintzUoUUni, {from: accounts[5]});
		const addresscF42I9y = await ThriftTokenklo2XJ6.transferOwnership.call(addressjRSY9hE, {from: accounts[2]});
		const boolvK2tcUe = await ThriftTokenklo2XJ6.transferFrom.call(addressCxlYPds, addressAKNgDU7, uintH0xFPQM, {from: accounts[4]});

		assert.equal(boolcvfAnqe, true)
		assert.equal(boolfVB2QXN, true)
		assert.equal(uint256dkOQpcM, BigInt("0"))
		await expect(ThriftTokenklo2XJ6.transferOwnership.call(addressjRSY9hE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenklo2XJ6 = await ThriftToken.new({from: accounts[3]});
		const addressmFaDZ2t = accounts[4]
		const uint9JTh9C = BigInt("438")
		const address3In49k = accounts[4]
		const uintxicsoTh = BigInt("1130")
		const addressLNS3Bxt = "0x0000000000000000000000000000000000000001"
		const uintVel0p8R = BigInt("95")
		const addresslQcrPO = "0x0000000000000000000000000000000000000001"
		const addressofTQsbW = accounts[0]
		const uintzyWY54 = BigInt("891")
		const addresswNfkCdI = accounts[2]
		const addresssXeQQiO = accounts[4]
		const uint256dkOQpcM = await ThriftTokenklo2XJ6.balanceOf.call(addressmFaDZ2t, {from: accounts[5]});
		const boolcvfAnqe = await ThriftTokenklo2XJ6.decreaseApproval.call(address3In49k, uint9JTh9C, {from: accounts[2]});
		const boolYaxY0ol = await ThriftTokenklo2XJ6.approve.call(addressLNS3Bxt, uintxicsoTh, {from: accounts[4]});
		const boolfVB2QXN = await ThriftTokenklo2XJ6.increaseApproval.call(addresslQcrPO, uintVel0p8R, {from: accounts[5]});
		const addresscF42I9y = await ThriftTokenklo2XJ6.transferOwnership.call(addressofTQsbW, {from: accounts[2]});
		const boolvK2tcUe = await ThriftTokenklo2XJ6.transferFrom.call(addresssXeQQiO, addresswNfkCdI, uintzyWY54, {from: accounts[4]});

		assert.equal(boolYaxY0ol, true)
		assert.equal(boolcvfAnqe, true)
		assert.equal(boolfVB2QXN, true)
		assert.equal(uint256dkOQpcM, BigInt("0"))
		await expect(ThriftTokenklo2XJ6.transferOwnership.call(addressofTQsbW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})