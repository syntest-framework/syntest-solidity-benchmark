const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinRH0xOvG = await EdenCoin.new({from: accounts[2]});
		const uintGnsp9wF = BigInt("1799")
		const addressmCpOhi = accounts[3]
		const uintPCWxftK = BigInt("1731")
		const addressWZAhc7Q = accounts[4]
		const addressDDrc2F3 = accounts[3]
		const uintObrYoO = BigInt("723")
		const addressbzMpT9x = accounts[2]
		const uintLPtIz3 = BigInt("149")
		const address1I3zGN = accounts[4]
		const addressuUNWBHo = accounts[3]
		const uintvqEF9W2 = BigInt("1364")
		const addressYs5YCDP = accounts[2]
		const boolQwLF0VP = await EdenCoinRH0xOvG.approve.call(addressmCpOhi, uintGnsp9wF, {from: accounts[3]});
//		const boolbmzaO6 = await EdenCoinRH0xOvG.transferFrom.call(addressDDrc2F3, addressWZAhc7Q, uintPCWxftK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKZSYOIL = await EdenCoinRH0xOvG.increaseApproval.call(addressbzMpT9x, uintObrYoO, {from: accounts[5]});
//		const boolPiryOiS = await EdenCoinRH0xOvG.transferFrom.call(addressuUNWBHo, address1I3zGN, uintLPtIz3, {from: accounts[4]});
//		const bools1BdQCt = await EdenCoinRH0xOvG.transfer.call(addressYs5YCDP, uintvqEF9W2, {from: accounts[4]});

		assert.equal(boolQwLF0VP, true)
		await expect(EdenCoinRH0xOvG.transferFrom.call(addressDDrc2F3, addressWZAhc7Q, uintPCWxftK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZlFhkxM = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintojqtO9U = BigInt("1480")
		const addressZCHxmCJ = accounts[1]
		const addresskCkzABW = accounts[3]
		const addressEPn4FmX = accounts[4]
		const uintt7qtZR9 = BigInt("1015")
		const addressFbB42a5 = "0x0000000000000000000000000000000000000001"
		const boolzn7h2yz = await EdenCoinZlFhkxM.approve.call(addressZCHxmCJ, uintojqtO9U, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ayMoObP = await EdenCoinZlFhkxM.allowance.call(addressEPn4FmX, addresskCkzABW, {from: accounts[0]});
		const booltXw1xxx = await EdenCoinZlFhkxM.transfer.call(addressFbB42a5, uintt7qtZR9, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOyy7amM = await EdenCoin.new({from: accounts[3]});
		const addressJxtc5dq = accounts[0]
		const addressDHgmn60 = accounts[5]
		const uintxBZNXOY = BigInt("335")
		const addresswTcDw6R = accounts[1]
		const uintN1MZyh = BigInt("383")
		const addressrprrPhD = accounts[4]
		const addressuqP3q0g = "0x0000000000000000000000000000000000000001"
		const addresskzCIwwT = accounts[2]
		const uintze5dIHc = BigInt("1188")
		const addresshNSEscj = accounts[0]
		const addresskFdPHTu = accounts[1]
		const uintMYMB9st = BigInt("406")
		const addressRtygJxe = accounts[0]
		const uint256zt9xC6 = await EdenCoinOyy7amM.allowance.call(addressDHgmn60, addressJxtc5dq, {from: accounts[4]});
		const boolYldxIfC = await EdenCoinOyy7amM.approve.call(addresswTcDw6R, uintxBZNXOY, {from: "0x0000000000000000000000000000000000000001"});
		const boolKtN3ugl = await EdenCoinOyy7amM.increaseApproval.call(addressrprrPhD, uintN1MZyh, {from: accounts[1]});
		const uint256dTN6x8 = await EdenCoinOyy7amM.allowance.call(addresskzCIwwT, addressuqP3q0g, {from: accounts[1]});
//		const boolKYmk2ry = await EdenCoinOyy7amM.transferFrom.call(addresskFdPHTu, addresshNSEscj, uintze5dIHc, {from: accounts[1]});
//		const boolYlVUxh8 = await EdenCoinOyy7amM.decreaseApproval.call(addressRtygJxe, uintMYMB9st, {from: accounts[0]});

		assert.equal(boolKtN3ugl, true)
		assert.equal(boolYldxIfC, true)
		assert.equal(uint256dTN6x8, BigInt("0"))
		assert.equal(uint256zt9xC6, BigInt("0"))
		await expect(EdenCoinOyy7amM.transferFrom.call(addresskFdPHTu, addresshNSEscj, uintze5dIHc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinoUFoooo = await EdenCoin.new({from: accounts[4]});
		const addresspyi2cyX = accounts[0]
		const addresszzuCLdH = accounts[4]
		const addressb0yaxP2 = accounts[2]
		const uintV3I4RCo = BigInt("950")
		const addressKspzduC = accounts[1]
		const uintopDaTD8 = BigInt("892")
		const addressNXVsTtQ = accounts[1]
		const uint256acFjoh2 = await EdenCoinoUFoooo.allowance.call(addresszzuCLdH, addresspyi2cyX, {from: accounts[1]});
		const uint256xTmOLTy = await EdenCoinoUFoooo.balanceOf.call(addressb0yaxP2, {from: "0x0000000000000000000000000000000000000001"});
		const boolsPa6y2p = await EdenCoinoUFoooo.decreaseApproval.call(addressKspzduC, uintV3I4RCo, {from: accounts[3]});
//		const boolbZdBEly = await EdenCoinoUFoooo.transfer.call(addressNXVsTtQ, uintopDaTD8, {from: accounts[0]});

		assert.equal(boolsPa6y2p, true)
		assert.equal(uint256acFjoh2, BigInt("0"))
		assert.equal(uint256xTmOLTy, BigInt("0"))
		await expect(EdenCoinoUFoooo.transfer.call(addressNXVsTtQ, uintopDaTD8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoino3MSieP = await EdenCoin.new({from: accounts[0]});
		const uintRNkkGce = BigInt("385")
		const addressPzSYNcm = accounts[3]
		const uinthdQFSOk = BigInt("170")
		const addressmW8x4bT = accounts[4]
		const uintjLUpChM = BigInt("1083")
		const addressYlz6oCb = accounts[2]
		const uintveWUXp3 = BigInt("1911")
		const addressJtSvip7 = accounts[2]
		const addressx9bNrF = accounts[1]
		const addresstAymlqN = accounts[4]
		const uintIcT2QFp = BigInt("1075")
		const addressHYp15am = accounts[3]
		const uintv3wxYM = BigInt("1348")
		const addressKkPgtGs = accounts[2]
		const bool7ZJWLU = await EdenCoino3MSieP.increaseApproval.call(addressPzSYNcm, uintRNkkGce, {from: "0x0000000000000000000000000000000000000001"});
		const boolJ7fHc6K = await EdenCoino3MSieP.decreaseApproval.call(addressmW8x4bT, uinthdQFSOk, {from: accounts[1]});
		const booljBv1Yet = await EdenCoino3MSieP.transfer.call(addressYlz6oCb, uintjLUpChM, {from: accounts[0]});
		const boolmbQxv27 = await EdenCoino3MSieP.approve.call(addressJtSvip7, uintveWUXp3, {from: accounts[3]});
		const uint256V1lWMxl = await EdenCoino3MSieP.allowance.call(addresstAymlqN, addressx9bNrF, {from: accounts[3]});
//		const booljO7QG7 = await EdenCoino3MSieP.transfer.call(addressHYp15am, uintIcT2QFp, {from: accounts[1]});
//		const boolsIIVy5O = await EdenCoino3MSieP.increaseApproval.call(addressKkPgtGs, uintv3wxYM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool7ZJWLU, true)
		assert.equal(boolJ7fHc6K, true)
		assert.equal(booljBv1Yet, true)
		assert.equal(boolmbQxv27, true)
		assert.equal(uint256V1lWMxl, BigInt("0"))
		await expect(EdenCoino3MSieP.transfer.call(addressHYp15am, uintIcT2QFp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoino3MSieP = await EdenCoin.new({from: accounts[0]});
		const uintbkBxeW = BigInt("385")
		const addressqiZg7D7 = accounts[3]
		const uint6G2lll = BigInt("170")
		const addressXLAjn1H = accounts[4]
		const uintsEB4732 = BigInt("1070")
		const addressYNScLOo = accounts[3]
		const uintC1QfRv1 = BigInt("624")
		const addresswNe5b7j = accounts[2]
		const addressWQIErVv = accounts[0]
		const uintWBzFxXb = BigInt("120")
		const addressFAyv8i = accounts[3]
		const uinthJNNjMW = BigInt("1348")
		const addressZtOgXPp = accounts[2]
		const bool7ZJWLU = await EdenCoino3MSieP.increaseApproval.call(addressqiZg7D7, uintbkBxeW, {from: "0x0000000000000000000000000000000000000001"});
		const boolJ7fHc6K = await EdenCoino3MSieP.decreaseApproval.call(addressXLAjn1H, uint6G2lll, {from: accounts[1]});
		const boolNgya5Pl = await EdenCoino3MSieP.approve.call(addressYNScLOo, uintsEB4732, {from: accounts[5]});
//		const boolq0KZev = await EdenCoino3MSieP.transferFrom.call(addressWQIErVv, addresswNe5b7j, uintC1QfRv1, {from: accounts[1]});
//		const boolxZUXlxi = await EdenCoino3MSieP.decreaseApproval.call(addressFAyv8i, uintWBzFxXb, {from: accounts[3]});
//		const boolsIIVy5O = await EdenCoino3MSieP.increaseApproval.call(addressZtOgXPp, uinthJNNjMW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool7ZJWLU, true)
		assert.equal(boolJ7fHc6K, true)
		assert.equal(boolNgya5Pl, true)
		await expect(EdenCoino3MSieP.transferFrom.call(addressWQIErVv, addresswNe5b7j, uintC1QfRv1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoino3MSieP = await EdenCoin.new({from: accounts[0]});
		const uintMBevx0l = BigInt("0")
		const addressQthZwtV = accounts[3]
		const boolxZUXlxi = await EdenCoino3MSieP.decreaseApproval.call(addressQthZwtV, uintMBevx0l, {from: accounts[3]});

		assert.equal(boolxZUXlxi, true)
	});
})